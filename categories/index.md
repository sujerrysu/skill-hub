<script setup>
import { data as skills } from '../.vitepress/theme/skills.data.js'
import { computed } from 'vue'

const categorized = computed(() => {
  const result = {}
  skills.forEach(skill => {
    if (!result[skill.category]) {
      result[skill.category] = []
    }
    result[skill.category].push(skill)
  })
  
  // 排序每个分类中的技能
  Object.keys(result).forEach(cat => {
    result[cat].sort((a, b) => (b.stars || 0) - (a.stars || 0))
  })
  
  return result
})

const categories = computed(() => {
  return Object.keys(categorized.value).sort()
})
</script>

# 📂 分类浏览

<div v-for="category in categories" :key="category" style="margin: 40px 0;">
  <h2 style="border-bottom: 2px solid var(--vp-c-brand); padding-bottom: 10px;">
    {{ category }} 
    <span style="color: var(--vp-c-text-3); font-size: 16px; font-weight: normal;">
      ({{ categorized[category].length }})
    </span>
  </h2>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px; margin-top: 20px;">
    <div v-for="skill in categorized[category]" :key="skill.id" style="padding: 15px; background: var(--vp-c-bg-soft); border-radius: 8px; border: 1px solid var(--vp-c-divider);">
      <h3 style="margin: 0 0 8px 0; font-size: 16px;">
        <a :href="skill.url" target="_blank" style="color: var(--vp-c-brand); text-decoration: none;">
          {{ skill.name }}
        </a>
      </h3>
      <p style="margin: 0 0 10px 0; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.5;">
        {{ (skill.description || '暂无描述').substring(0, 80) }}{{ skill.description && skill.description.length > 80 ? '...' : '' }}
      </p>
      <div style="display: flex; gap: 8px; font-size: 12px;">
        <span v-if="skill.source === 'github'" style="color: var(--vp-c-text-3);">
          ⭐ {{ skill.stars }}
        </span>
        <span v-if="skill.language" style="color: var(--vp-c-text-3);">
          💻 {{ skill.language }}
        </span>
      </div>
    </div>
  </div>
</div>
