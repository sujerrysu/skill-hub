// .vitepress/theme/skills.data.js
import fs from 'fs'
import path from 'path'

export default {
  watch: ['../../data/skills.json'],
  load() {
    const filePath = path.resolve(__dirname, '../../data/skills.json')
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(content)
    }
    return []
  }
}
