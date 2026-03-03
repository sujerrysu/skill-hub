<script setup>
import { data as skills } from '../.vitepress/theme/skills.data.js'
import { computed } from 'vue'

const topSkills = computed(() => {
  return skills
    .filter(s => s.source === 'github')
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 50)
})

const recentSkills = computed(() => {
  return skills
    .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
    .slice(0, 20)
})
</script>

# 🔥 趋势榜

## ⭐ Top 50 - 最受欢迎

<div v-for="(skill, index) in topSkills" :key="skill.id" style="margin: 15px 0; padding: 15px; background: var(--vp-c-bg-soft); border-radius: 8px; display: flex; align-items: center; gap: 15px;">
  <div style="font-size: 24px; font-weight: bold; color: var(--vp-c-text-3); min-width: 40px;">
    {{ index + 1 }}
  </div>
  <div style="flex: 1;">
    <h3 style="margin: 0 0 8px 0;">
      <a :href="skill.url" target="_blank" style="color: var(--vp-c-brand); text-decoration: none;">
        {{ skill.fullName }}
      </a>
      <span style="margin-left: 10px; color: var(--vp-c-text-3); font-size: 14px; font-weight: normal;">
        ⭐ {{ skill.stars.toLocaleString() }}
      </span>
    </h3>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 14px;">
      {{ skill.description || '暂无描述' }}
    </p>
    <div style="margin-top: 8px; display: flex; gap: 8px;">
      <span style="padding: 2px 8px; background: var(--vp-c-brand-soft); border-radius: 4px; font-size: 12px;">
        {{ skill.category }}
      </span>
      <span v-if="skill.language" style="padding: 2px 8px; background: var(--vp-c-bg); border-radius: 4px; font-size: 12px;">
        {{ skill.language }}
      </span>
    </div>
  </div>
</div>

## 🆕 最近更新

<div v-for="skill in recentSkills" :key="skill.id" style="margin: 15px 0; padding: 15px; background: var(--vp-c-bg-soft); border-radius: 8px;">
  <h3 style="margin: 0 0 8px 0;">
    <a :href="skill.url" target="_blank" style="color: var(--vp-c-brand); text-decoration: none;">
      {{ skill.fullName }}
    </a>
    <span style="margin-left: 10px; color: var(--vp-c-text-3); font-size: 14px; font-weight: normal;">
      📅 {{ new Date(skill.lastUpdated).toLocaleDateString('zh-CN') }}
    </span>
  </h3>
  <p style="margin: 0; color: var(--vp-c-text-2); font-size: 14px;">
    {{ skill.description || '暂无描述' }}
  </p>
</div>
