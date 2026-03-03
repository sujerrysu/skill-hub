import { defineConfig } from 'vitepress'
import skills from '../data/skills.json'
import stats from '../data/stats.json'

export default defineConfig({
  title: "Skill Hub",
  description: "OpenClaw & MCP Skills 收集平台 - 发现最新最热的 AI 能力插件",
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'OpenClaw, MCP, Skills, AI, Plugins, Model Context Protocol' }]
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技能列表', link: '/skills/' },
      { text: '分类浏览', link: '/categories/' },
      { text: '趋势榜', link: '/trending/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/skills/': [
        {
          text: '所有技能',
          items: [
            { text: '技能列表', link: '/skills/' },
            { text: '按分类', link: '/categories/' },
            { text: '按来源', link: '/sources/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/skill-hub' }
    ],

    search: {
      provider: 'local',
      options: {
        placeholder: '搜索 Skills...',
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    footer: {
      message: `收录 ${stats.total || 0} 个 Skills | 最后更新: ${new Date(stats.lastUpdated).toLocaleDateString('zh-CN')}`,
      copyright: 'MIT Licensed | Powered by VitePress'
    }
  }
})
