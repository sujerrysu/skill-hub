// .vitepress/theme/stats.data.js
import fs from 'fs'
import path from 'path'

export default {
  watch: ['../../data/stats.json'],
  load() {
    const filePath = path.resolve(__dirname, '../../data/stats.json')
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(content)
    }
    return {
      total: 0,
      bySource: {},
      byCategory: {},
      lastUpdated: new Date().toISOString()
    }
  }
}
