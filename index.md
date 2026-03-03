---
layout: home

hero:
  name: "Skill Hub"
  text: "OpenClaw & MCP 技能中心"
  tagline: 发现、探索、使用最新的 AI 能力插件
  actions:
    - theme: brand
      text: 浏览所有技能
      link: /skills/
    - theme: alt
      text: 查看趋势榜
      link: /trending/
    - theme: alt
      text: GitHub
      link: https://github.com/yourusername/skill-hub

features:
  - icon: 🔍
    title: 自动发现
    details: 每日自动爬取 GitHub 和 NPM，发现最新的 Skill 和 MCP 服务
  - icon: 📊
    title: 智能分类
    details: 自动分析和分类 Skills，按功能、语言、热度等维度展示
  - icon: ⚡
    title: 实时更新
    details: 通过 GitHub Actions 自动更新，确保数据始终最新
  - icon: 🎯
    title: 精准搜索
    details: 强大的搜索和过滤功能，快速找到你需要的 Skill
  - icon: 📈
    title: 趋势分析
    details: 追踪热门 Skills，发现社区最受欢迎的能力插件
  - icon: 🌐
    title: 多源集成
    details: 汇聚 GitHub、NPM、Awesome Lists 等多个来源
---

<style>
.stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 60px 0;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 32px;
  border-radius: 16px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.stat-number {
  font-size: 3.5em;
  font-weight: bold;
  margin-bottom: 8px;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1.1em;
  opacity: 0.95;
  font-weight: 500;
}

.category-chart {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 40px 0;
}

.category-item {
  background: var(--vp-c-bg-soft);
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid var(--vp-c-brand);
  transition: all 0.3s ease;
}

.category-item:hover {
  transform: translateX(5px);
  border-left-width: 8px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.category-name {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.category-count {
  font-size: 2em;
  font-weight: bold;
  color: var(--vp-c-brand);
}

.trend-list {
  list-style: none;
  padding: 0;
  margin: 40px 0;
}

.trend-item {
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.trend-item:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.trend-rank {
  font-size: 2em;
  font-weight: bold;
  color: var(--vp-c-brand);
  margin-right: 20px;
  min-width: 50px;
}

.trend-info {
  flex: 1;
}

.trend-name {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}

.trend-desc {
  color: var(--vp-c-text-2);
  font-size: 0.95em;
}

.trend-stars {
  font-size: 1.3em;
  font-weight: bold;
  color: #f39c12;
  white-space: nowrap;
}

.visual-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60px 40px;
  border-radius: 20px;
  color: white;
  text-align: center;
  margin: 60px 0;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

.visual-banner h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: white;
  border: none;
}

.visual-banner p {
  font-size: 1.2em;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}
</style>

<div class="visual-banner">
  <h2>🎯 平台实时数据</h2>
  <p>持续收录最新的 OpenClaw 和 MCP Skills，为 AI 开发者提供最全面的能力插件库</p>
</div>

<div class="stat-cards">
  <div class="stat-card">
    <div class="stat-number">267</div>
    <div class="stat-label">收录技能总数</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">99</div>
    <div class="stat-label">GitHub 仓库</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">168</div>
    <div class="stat-label">NPM 包</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">7</div>
    <div class="stat-label">分类数量</div>
  </div>
</div>

## 📂 技能分类分布

<div class="category-chart">
  <div class="category-item">
    <div class="category-name">🔧 Development</div>
    <div class="category-count">40</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">开发工具</div>
  </div>
  <div class="category-item">
    <div class="category-name">🤖 AI</div>
    <div class="category-count">55</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">人工智能</div>
  </div>
  <div class="category-item">
    <div class="category-name">⚡ Productivity</div>
    <div class="category-count">6</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">效率工具</div>
  </div>
  <div class="category-item">
    <div class="category-name">📊 Data</div>
    <div class="category-count">6</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">数据处理</div>
  </div>
  <div class="category-item">
    <div class="category-name">🛠️ Utility</div>
    <div class="category-count">14</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">实用工具</div>
  </div>
  <div class="category-item">
    <div class="category-name">🔌 Integration</div>
    <div class="category-count">1</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">集成服务</div>
  </div>
  <div class="category-item">
    <div class="category-name">🌟 Other</div>
    <div class="category-count">145</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">其他</div>
  </div>
</div>

## 🔥 Top 5 热门技能

<ul class="trend-list">
  <li class="trend-item">
    <div class="trend-rank">1</div>
    <div class="trend-info">
      <div class="trend-name">n8n-io/n8n</div>
      <div class="trend-desc">工作流自动化平台，原生 AI 能力，400+ 集成</div>
    </div>
    <div class="trend-stars">⭐ 177,291</div>
  </li>
  <li class="trend-item">
    <div class="trend-rank">2</div>
    <div class="trend-info">
      <div class="trend-name">nano-banana-pro-prompts</div>
      <div class="trend-desc">AI 图片提示词推荐，10000+ 精选提示词</div>
    </div>
    <div class="trend-stars">⭐ 1,092</div>
  </li>
  <li class="trend-item">
    <div class="trend-rank">3</div>
    <div class="trend-info">
      <div class="trend-name">prompt-security/clawsec</div>
      <div class="trend-desc">OpenClaw 安全工具套件，保护您的 AI 应用</div>
    </div>
    <div class="trend-stars">⭐ 559</div>
  </li>
  <li class="trend-item">
    <div class="trend-rank">4</div>
    <div class="trend-info">
      <div class="trend-name">SonarSource/sonarqube-mcp</div>
      <div class="trend-desc">SonarQube MCP 服务器，代码质量分析</div>
    </div>
    <div class="trend-stars">⭐ 401</div>
  </li>
  <li class="trend-item">
    <div class="trend-rank">5</div>
    <div class="trend-info">
      <div class="trend-name">ruilisi/lingti-bot</div>
      <div class="trend-desc">极简 AI Bot，一次编译到处执行</div>
    </div>
    <div class="trend-stars">⭐ 300</div>
  </li>
</ul>

<div style="text-align: center; margin: 60px 0;">
  <a href="/skills/" style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 50px; text-decoration: none; font-size: 1.2em; font-weight: 600; box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3); transition: all 0.3s ease;">
    🚀 浏览全部 267 个技能
  </a>
</div>

## 🚀 快速开始

1. **浏览技能** - 前往 [技能列表](/skills/) 查看所有可用的 Skills
2. **搜索需求** - 使用顶部搜索框快速找到你需要的能力
3. **查看详情** - 点击任意 Skill 查看使用说明和安装方法
4. **开始使用** - 按照文档集成到你的 OpenClaw 或 MCP 项目中

## 💡 贡献

发现了新的 Skill？欢迎提交到我们的平台！

- 🐛 [报告问题](https://github.com/yourusername/skill-hub/issues)
- 💬 [参与讨论](https://github.com/yourusername/skill-hub/discussions)
- 🔀 [提交 PR](https://github.com/yourusername/skill-hub/pulls)

---

<div style="text-align: center; color: var(--vp-c-text-2); margin-top: 60px;">
  <p style="font-size: 0.95em;">📝 最后更新: 2026-03-03 | 数据每天自动更新</p>
</div>
