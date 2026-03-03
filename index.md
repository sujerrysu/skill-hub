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

<script setup>
import { data as stats } from './.vitepress/theme/stats.data.js'
</script>

## 📊 平台统计

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 40px 0;">
  <div style="text-align: center; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <div style="font-size: 2.5em; font-weight: bold; color: var(--vp-c-brand);">{{ stats.total }}</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">收录技能</div>
  </div>
  <div style="text-align: center; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <div style="font-size: 2.5em; font-weight: bold; color: var(--vp-c-green);">{{ stats.bySource?.github || 0 }}</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">GitHub 仓库</div>
  </div>
  <div style="text-align: center; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <div style="font-size: 2.5em; font-weight: bold; color: var(--vp-c-red);">{{ stats.bySource?.npm || 0 }}</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">NPM 包</div>
  </div>
  <div style="text-align: center; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 8px;">
    <div style="font-size: 2.5em; font-weight: bold; color: var(--vp-c-purple);">{{ Object.keys(stats.byCategory || {}).length }}</div>
    <div style="margin-top: 8px; color: var(--vp-c-text-2);">分类数量</div>
  </div>
</div>

## 🔥 热门技能

查看 [趋势榜](/trending/) 了解当前最受欢迎的 Skills

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

## 📝 最近更新

{{ new Date(stats.lastUpdated).toLocaleString('zh-CN') }}
