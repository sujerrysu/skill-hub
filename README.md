# Skill Hub

> 自动化的 OpenClaw & MCP Skills 收集与展示平台

[![Update Skills](https://github.com/yourusername/skill-hub/actions/workflows/update-data.yml/badge.svg)](https://github.com/yourusername/skill-hub/actions/workflows/update-data.yml)
[![Deploy](https://github.com/yourusername/skill-hub/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/skill-hub/actions/workflows/deploy.yml)

## ✨ 特性

- 🔍 **自动发现**: 每日爬取 GitHub 和 NPM，自动发现新 Skills
- 📊 **智能分类**: 自动分析和分类 Skills
- ⚡ **实时更新**: GitHub Actions 自动更新数据
- 🎯 **精准搜索**: 强大的搜索和过滤功能
- 📈 **趋势分析**: 追踪热门 Skills
- 🌐 **多源集成**: 汇聚 GitHub、NPM 等多个来源

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/yourusername/skill-hub.git
cd skill-hub

# 安装依赖
npm install

# 运行爬虫（可选）
npm run crawler

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build
```

### 环境变量

创建 `.env` 文件（可选，用于提高 GitHub API 限额）：

```env
GITHUB_TOKEN=your_github_token_here
```

## 📊 工作原理

### 数据收集

爬虫每天自动运行，从以下来源收集数据：

1. **GitHub API**
   - 搜索 Topics: `mcp-server`, `openclaw-skill`, `model-context-protocol`
   - 关键词搜索: `mcp server`, `SKILL.md`
   - 获取 Star 数、更新时间、README 等

2. **NPM Registry**
   - 搜索包含 MCP 关键词的包
   - 获取版本、描述、发布时间等

### 数据处理

- 自动去重
- 智能分类（Development、Productivity、Data、AI 等）
- 按 Star 数和更新时间排序
- 生成统计数据

### 自动部署

- GitHub Actions 每天自动运行爬虫
- 数据更新后自动提交到仓库
- 触发网站重新构建和部署

## 📁 项目结构

```
skill-hub/
├── .github/
│   └── workflows/
│       ├── update-data.yml    # 自动更新数据
│       └── deploy.yml         # 自动部署网站
├── .vitepress/
│   ├── config.mjs            # VitePress 配置
│   └── theme/
│       ├── skills.data.js    # Skills 数据加载器
│       └── stats.data.js     # 统计数据加载器
├── data/
│   ├── skills.json           # Skills 数据
│   └── stats.json            # 统计数据
├── scripts/
│   └── crawler.js            # 爬虫脚本
├── skills/
│   └── index.md              # 技能列表页面
├── categories/
│   └── index.md              # 分类浏览页面
├── trending/
│   └── index.md              # 趋势榜页面
├── about.md                  # 关于页面
├── index.md                  # 首页
└── package.json
```

## 🤝 贡献

欢迎贡献！

### 提交新 Skill

方式 1: 为你的 GitHub 仓库添加 Topic
- `mcp-server`
- `openclaw-skill`
- `model-context-protocol`

方式 2: 提交 Issue 告诉我们

### 改进爬虫

1. Fork 本仓库
2. 创建分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 📝 命令

```bash
# 开发
npm run docs:dev          # 启动开发服务器
npm run docs:build        # 构建生产版本
npm run docs:preview      # 预览构建结果

# 数据
npm run crawler           # 运行爬虫
npm run update            # 更新数据并提交
```

## 📊 数据源

- [GitHub API](https://docs.github.com/en/rest)
- [NPM Registry API](https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md)

## 📄 开源协议

MIT License

## 🙏 鸣谢

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - 灵感来源
- 所有开源 Skill 作者

## 📧 联系

- Issues: [GitHub Issues](https://github.com/yourusername/skill-hub/issues)
- Discussions: [GitHub Discussions](https://github.com/yourusername/skill-hub/discussions)

---

**⭐ 如果这个项目对你有帮助，请给个 Star！**
