#!/usr/bin/env node

/**
 * Skill Hub Crawler
 * 自动爬取 GitHub、NPM 等平台的 OpenClaw/MCP Skills
 */

const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

// 配置
const CONFIG = {
  github: {
    token: process.env.GITHUB_TOKEN || '',
    apiBase: 'https://api.github.com',
    topics: ['mcp-server', 'openclaw-skill', 'mcp', 'model-context-protocol'],
    searchKeywords: ['mcp server', 'openclaw skill', 'SKILL.md']
  },
  npm: {
    registry: 'https://registry.npmjs.org',
    keywords: ['mcp', 'mcp-server', 'openclaw', 'model-context-protocol']
  },
  output: {
    dataDir: path.join(__dirname, '../data'),
    skillsFile: 'skills.json',
    statsFile: 'stats.json'
  }
};

// GitHub API 客户端
class GitHubCrawler {
  constructor(token) {
    this.token = token;
    this.headers = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'SkillHub-Crawler'
    };
    if (token) {
      this.headers['Authorization'] = `token ${token}`;
    }
  }

  async searchByTopic(topic, page = 1, perPage = 30) {
    const url = `${CONFIG.github.apiBase}/search/repositories`;
    const params = {
      q: `topic:${topic}`,
      sort: 'updated',
      order: 'desc',
      page,
      per_page: perPage
    };

    try {
      const response = await axios.get(url, { headers: this.headers, params });
      return response.data.items || [];
    } catch (error) {
      console.error(`Error searching topic ${topic}:`, error.message);
      return [];
    }
  }

  async searchByKeyword(keyword, page = 1) {
    const url = `${CONFIG.github.apiBase}/search/repositories`;
    const params = {
      q: keyword,
      sort: 'stars',
      order: 'desc',
      page,
      per_page: 30
    };

    try {
      const response = await axios.get(url, { headers: this.headers, params });
      return response.data.items || [];
    } catch (error) {
      console.error(`Error searching keyword ${keyword}:`, error.message);
      return [];
    }
  }

  async getRepoDetails(owner, repo) {
    const url = `${CONFIG.github.apiBase}/repos/${owner}/${repo}`;
    try {
      const response = await axios.get(url, { headers: this.headers });
      return response.data;
    } catch (error) {
      console.error(`Error fetching repo ${owner}/${repo}:`, error.message);
      return null;
    }
  }

  async getReadme(owner, repo) {
    const url = `${CONFIG.github.apiBase}/repos/${owner}/${repo}/readme`;
    try {
      const response = await axios.get(url, { headers: this.headers });
      const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
      return content;
    } catch (error) {
      return null;
    }
  }
}

// NPM 爬虫
class NPMCrawler {
  async searchByKeyword(keyword) {
    const url = `https://registry.npmjs.org/-/v1/search`;
    const params = {
      text: keyword,
      size: 50
    };

    try {
      const response = await axios.get(url, { params });
      return response.data.objects || [];
    } catch (error) {
      console.error(`Error searching NPM for ${keyword}:`, error.message);
      return [];
    }
  }

  async getPackageInfo(packageName) {
    const url = `${CONFIG.npm.registry}/${packageName}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return null;
    }
  }
}

// 数据处理
class SkillProcessor {
  constructor() {
    this.skills = new Map();
  }

  addGitHubRepo(repo, readme = '') {
    const id = repo.full_name.toLowerCase();
    
    if (this.skills.has(id)) {
      return; // 去重
    }

    const skill = {
      id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description || '',
      url: repo.html_url,
      homepage: repo.homepage || '',
      stars: repo.stargazers_count || 0,
      forks: repo.forks_count || 0,
      language: repo.language || '',
      topics: repo.topics || [],
      lastUpdated: repo.updated_at,
      createdAt: repo.created_at,
      readme: readme ? readme.substring(0, 500) : '', // 截取前 500 字符
      source: 'github',
      type: this.detectType(repo, readme)
    };

    this.skills.set(id, skill);
  }

  addNPMPackage(pkg) {
    const id = `npm:${pkg.package.name}`;
    
    if (this.skills.has(id)) {
      return;
    }

    const skill = {
      id,
      name: pkg.package.name,
      fullName: pkg.package.name,
      description: pkg.package.description || '',
      url: pkg.package.links?.npm || `https://www.npmjs.com/package/${pkg.package.name}`,
      homepage: pkg.package.links?.homepage || '',
      stars: 0,
      version: pkg.package.version,
      keywords: pkg.package.keywords || [],
      lastUpdated: pkg.package.date,
      source: 'npm',
      type: 'mcp-server'
    };

    this.skills.set(id, skill);
  }

  detectType(repo, readme = '') {
    const fullText = `${repo.name} ${repo.description || ''} ${readme}`.toLowerCase();
    
    if (fullText.includes('mcp') || fullText.includes('model context protocol')) {
      return 'mcp-server';
    }
    if (fullText.includes('openclaw') || fullText.includes('skill.md')) {
      return 'openclaw-skill';
    }
    return 'unknown';
  }

  categorize(skill) {
    const text = `${skill.name} ${skill.description}`.toLowerCase();
    
    const categories = {
      'Development': ['git', 'github', 'code', 'dev', 'programming'],
      'Productivity': ['task', 'todo', 'calendar', 'notion', 'note'],
      'Data': ['database', 'sql', 'postgres', 'mongo', 'data'],
      'AI': ['ai', 'llm', 'gpt', 'openai', 'anthropic'],
      'Utility': ['weather', 'search', 'api', 'http'],
      'Integration': ['slack', 'discord', 'telegram', 'email']
    };

    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(kw => text.includes(kw))) {
        return category;
      }
    }

    return 'Other';
  }

  getSkillsList() {
    const skills = Array.from(this.skills.values());
    
    // 分类
    skills.forEach(skill => {
      skill.category = this.categorize(skill);
    });

    // 按星标排序
    skills.sort((a, b) => (b.stars || 0) - (a.stars || 0));

    return skills;
  }

  getStats() {
    const skills = this.getSkillsList();
    
    const stats = {
      total: skills.length,
      bySource: {},
      byCategory: {},
      byLanguage: {},
      lastUpdated: new Date().toISOString(),
      topSkills: skills.slice(0, 10).map(s => ({
        name: s.fullName,
        stars: s.stars,
        description: s.description
      }))
    };

    // 统计来源
    skills.forEach(skill => {
      stats.bySource[skill.source] = (stats.bySource[skill.source] || 0) + 1;
      stats.byCategory[skill.category] = (stats.byCategory[skill.category] || 0) + 1;
      if (skill.language) {
        stats.byLanguage[skill.language] = (stats.byLanguage[skill.language] || 0) + 1;
      }
    });

    return stats;
  }
}

// 主函数
async function main() {
  console.log('🚀 Starting Skill Hub Crawler...\n');

  const github = new GitHubCrawler(CONFIG.github.token);
  const npm = new NPMCrawler();
  const processor = new SkillProcessor();

  // 1. 爬取 GitHub Topics
  console.log('📡 Crawling GitHub Topics...');
  for (const topic of CONFIG.github.topics) {
    console.log(`  - Topic: ${topic}`);
    const repos = await github.searchByTopic(topic);
    console.log(`    Found ${repos.length} repositories`);
    
    for (const repo of repos) {
      const readme = await github.getReadme(repo.owner.login, repo.name);
      processor.addGitHubRepo(repo, readme);
    }
    
    // 避免 API 限流
    await sleep(1000);
  }

  // 2. 爬取 GitHub 关键词
  console.log('\n📡 Crawling GitHub Keywords...');
  for (const keyword of CONFIG.github.searchKeywords) {
    console.log(`  - Keyword: ${keyword}`);
    const repos = await github.searchByKeyword(keyword);
    console.log(`    Found ${repos.length} repositories`);
    
    for (const repo of repos) {
      const readme = await github.getReadme(repo.owner.login, repo.name);
      processor.addGitHubRepo(repo, readme);
    }
    
    await sleep(1000);
  }

  // 3. 爬取 NPM
  console.log('\n📦 Crawling NPM Registry...');
  for (const keyword of CONFIG.npm.keywords) {
    console.log(`  - Keyword: ${keyword}`);
    const packages = await npm.searchByKeyword(keyword);
    console.log(`    Found ${packages.length} packages`);
    
    packages.forEach(pkg => {
      processor.addNPMPackage(pkg);
    });
    
    await sleep(500);
  }

  // 4. 保存数据
  console.log('\n💾 Saving data...');
  const dataDir = CONFIG.output.dataDir;
  await fs.mkdir(dataDir, { recursive: true });

  const skills = processor.getSkillsList();
  const stats = processor.getStats();

  await fs.writeFile(
    path.join(dataDir, CONFIG.output.skillsFile),
    JSON.stringify(skills, null, 2)
  );

  await fs.writeFile(
    path.join(dataDir, CONFIG.output.statsFile),
    JSON.stringify(stats, null, 2)
  );

  console.log(`\n✅ Done! Collected ${skills.length} skills`);
  console.log(`📊 Stats:`);
  console.log(`   - GitHub: ${stats.bySource.github || 0}`);
  console.log(`   - NPM: ${stats.bySource.npm || 0}`);
  console.log(`\n📁 Data saved to: ${dataDir}`);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 运行
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = { GitHubCrawler, NPMCrawler, SkillProcessor };
