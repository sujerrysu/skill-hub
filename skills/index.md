<script setup>
import { data as skills } from '../.vitepress/theme/skills.data.js'
</script>

# 所有技能

<div style="margin: 20px 0;">
  <input 
    v-model="searchQuery" 
    placeholder="🔍 搜索技能..." 
    style="width: 100%; padding: 12px 20px; font-size: 16px; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft);"
  />
</div>

<div style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
  <button 
    v-for="cat in categories" 
    :key="cat"
    @click="selectedCategory = selectedCategory === cat ? null : cat"
    :style="{
      padding: '8px 16px',
      border: '1px solid var(--vp-c-divider)',
      borderRadius: '20px',
      background: selectedCategory === cat ? 'var(--vp-c-brand)' : 'var(--vp-c-bg-soft)',
      color: selectedCategory === cat ? 'white' : 'var(--vp-c-text-1)',
      cursor: 'pointer'
    }"
  >
    {{ cat }} ({{ getCategoryCount(cat) }})
  </button>
</div>

<div style="margin: 20px 0;">
  <p style="color: var(--vp-c-text-2);">找到 {{ filteredSkills.length }} 个技能</p>
</div>

<div v-for="skill in filteredSkills" :key="skill.id" style="margin: 20px 0; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 8px; border-left: 4px solid var(--vp-c-brand);">
  <div style="display: flex; justify-content: space-between; align-items: start;">
    <div style="flex: 1;">
      <h3 style="margin: 0 0 8px 0;">
        <a :href="skill.url" target="_blank" style="color: var(--vp-c-brand); text-decoration: none;">
          {{ skill.fullName }}
        </a>
      </h3>
      <p style="margin: 8px 0; color: var(--vp-c-text-2);">{{ skill.description || '暂无描述' }}</p>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
        <span style="padding: 4px 8px; background: var(--vp-c-brand-soft); border-radius: 4px; font-size: 12px;">
          {{ skill.category }}
        </span>
        <span v-if="skill.language" style="padding: 4px 8px; background: var(--vp-c-bg); border-radius: 4px; font-size: 12px;">
          {{ skill.language }}
        </span>
        <span v-if="skill.source === 'github'" style="padding: 4px 8px; background: var(--vp-c-bg); border-radius: 4px; font-size: 12px;">
          ⭐ {{ skill.stars }}
        </span>
        <span style="padding: 4px 8px; background: var(--vp-c-bg); border-radius: 4px; font-size: 12px;">
          📅 {{ new Date(skill.lastUpdated).toLocaleDateString('zh-CN') }}
        </span>
      </div>
    </div>
  </div>
</div>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const searchQuery = ref('')
    const selectedCategory = ref(null)
    
    const categories = computed(() => {
      const cats = new Set()
      skills.forEach(skill => cats.add(skill.category))
      return Array.from(cats).sort()
    })
    
    const filteredSkills = computed(() => {
      return skills.filter(skill => {
        const matchesSearch = !searchQuery.value || 
          skill.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          skill.description?.toLowerCase().includes(searchQuery.value.toLowerCase())
        
        const matchesCategory = !selectedCategory.value || skill.category === selectedCategory.value
        
        return matchesSearch && matchesCategory
      })
    })
    
    const getCategoryCount = (cat) => {
      return skills.filter(s => s.category === cat).length
    }
    
    return {
      searchQuery,
      selectedCategory,
      categories,
      filteredSkills,
      getCategoryCount
    }
  }
}
</script>
