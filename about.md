# 关于 Skill Hub

## 🎯 项目简介

**Skill Hub** 是一个自动化的 OpenClaw 和 MCP (Model Context Protocol) 技能收集与展示平台。

我们的目标是帮助开发者：
- 🔍 **发现** 最新、最热门的 AI 能力插件
- 📊 **了解** Skills 的热度和活跃度
- ⚡ **快速** 找到满足需求的工具
- 🌐 **集成** 多个来源的数据

## 🤖 工作原理

### 自动爬取
每天通过 GitHub Actions 自动运行爬虫脚本，从以下来源收集数据：

1. **GitHub**
   - Topic 搜索: `mcp-server`, `openclaw-skill`, `model-context-protocol`
   - 关键词搜索: `mcp server`, `SKILL.md`
   - 获取仓库元数据、README、Star 数等

2. **NPM Registry**
   - 搜索包含 MCP 相关关键词的包
   - 获取包的描述、版本、发布时间等

### 智能分类
根据名称、描述、Topics 等信息，自动将 Skills 分类为：
- Development (开发工具)
- Productivity (效率工具)
- Data (数据相关)
- AI (人工智能)
- Utility (实用工具)
- Integration (集成服务)
- Other (其他)

### 数据展示
- **技能列表**: 完整的 Skills 清单，支持搜索和过滤
- **分类浏览**: 按功能分类展示
- **趋势榜**: 最受欢迎和最近更新的 Skills

## 📊 数据更新

- **频率**: 每天自动更新一次
- **时间**: 北京时间每天凌晨 2:00
- **方式**: GitHub Actions 自动运行爬虫脚本
- **部署**: 更新后自动重新部署网站

## 🛠️ 技术栈

- **前端**: VitePress (Vue 3)
- **爬虫**: Node.js (Axios + Cheerio)
- **数据存储**: JSON 文件
- **自动化**: GitHub Actions
- **部署**: GitHub Pages / Vercel / Netlify

## 📝 数据来源

所有数据来自公开的 API 和仓库：
- GitHub API
- NPM Registry API
- 各项目的公开 README 和元数据

## 🤝 贡献

欢迎参与贡献！

### 提交新 Skill
如果您发现了优秀的 Skill 但平台未收录，请：
1. 在 GitHub 上为 Skill 添加 Topic: `mcp-server` 或 `openclaw-skill`
2. 或者直接提交 Issue 告诉我们

### 报告问题
发现数据错误或网站 Bug？
- [提交 Issue](https://github.com/yourusername/skill-hub/issues)

### 改进爬虫
想帮助改进爬虫逻辑或添加新的数据源？
- [提交 Pull Request](https://github.com/yourusername/skill-hub/pulls)

## ⚖️ 免责声明

- 本平台仅收集和展示公开信息
- 我们不对 Skills 的质量、安全性或可用性负责
- 使用任何 Skill 前，请自行评估和测试
- Star 数等指标仅供参考，不代表质量保证

## 📧 联系方式

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- Issues: [GitHub Issues](https://github.com/yourusername/skill-hub/issues)

## 📄 开源协议

MIT License - 自由使用、修改和分发

---

**Powered by**: VitePress + GitHub Actions + ❤️
