# 🚀 Skill Hub 部署指南

## ✅ 项目完成情况

### 已实现功能

#### 1. 自动爬虫系统 ✅
- ✅ GitHub API 爬取（Topics + Search）
- ✅ NPM Registry 查询
- ✅ 自动去重和数据清洗
- ✅ 智能分类（7 个类别）
- ✅ 错误处理和 API 限流处理

**首次运行成果**:
- 收录 **267 个 Skills**
- GitHub 仓库: **99 个**
- NPM 包: **168 个**
- 分类覆盖: Development, AI, Productivity, Data, Utility, Integration, Other

#### 2. 前端展示系统 ✅
- ✅ 现代化首页（Hero + 统计卡片）
- ✅ 技能列表页（搜索 + 过滤）
- ✅ 分类浏览页（按功能分组）
- ✅ 趋势榜（Top 50 + 最近更新）
- ✅ 关于页面（说明文档）
- ✅ 响应式设计
- ✅ 本地搜索

#### 3. 自动化系统 ✅
- ✅ GitHub Actions - 每日自动更新数据
- ✅ GitHub Actions - 自动部署网站
- ✅ 数据变更自动提交
- ✅ 构建失败通知

---

## 📊 当前数据统计

```json
{
  "total": 267,
  "bySource": {
    "github": 99,
    "npm": 168
  },
  "byCategory": {
    "Development": 40,
    "AI": 55,
    "Productivity": 6,
    "Data": 6,
    "Utility": 14,
    "Integration": 1,
    "Other": 145
  }
}
```

**Top 3 Skills** (按 Star 数):
1. **n8n-io/n8n** - 177,291 ⭐
2. **YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill** - 1,092 ⭐
3. **prompt-security/clawsec** - 559 ⭐

---

## 🌐 部署到外网

### 方案 A: GitHub Pages（推荐）

#### 步骤 1: 创建 GitHub 仓库
```bash
# 在 GitHub 上创建新仓库（例如：skill-hub）
# 不要初始化任何文件

# 本地关联远程仓库
cd /root/.openclaw/workspace/skill-hub
git remote add origin https://github.com/你的用户名/skill-hub.git
git push -u origin main
```

#### 步骤 2: 配置 GitHub Pages
1. 进入仓库的 **Settings** → **Pages**
2. Source 选择 **GitHub Actions**
3. 代码推送后会自动触发两个工作流：
   - `Update Skills Data` - 更新数据
   - `Deploy to GitHub Pages` - 部署网站

#### 步骤 3: 配置 base path（如果使用子路径）
编辑 `.vitepress/config.mjs`，添加：
```js
export default defineConfig({
  base: '/skill-hub/', // 你的仓库名
  // ...
})
```

#### 步骤 4: 访问网站
```
https://你的用户名.github.io/skill-hub/
```

---

### 方案 B: Vercel（最快）

#### 步骤 1: 推送到 GitHub
```bash
git remote add origin https://github.com/你的用户名/skill-hub.git
git push -u origin main
```

#### 步骤 2: 导入 Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 点击 **Import Project**
3. 选择你的 GitHub 仓库
4. **构建配置**（自动检测）:
   - Build Command: `npm run docs:build`
   - Output Directory: `.vitepress/dist`
5. 点击 **Deploy**

#### 步骤 3: 访问
- 自动分配域名：`your-project.vercel.app`
- 每次推送自动部署

**优势**:
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS
- ✅ 预览环境
- ✅ 零配置

---

### 方案 C: Netlify（备选）

1. 访问 [netlify.com](https://netlify.com)
2. 导入 GitHub 仓库
3. 构建设置：
   - Build command: `npm run docs:build`
   - Publish directory: `.vitepress/dist`
4. 部署

---

## 🔧 GitHub Token 配置（可选但推荐）

为了提高 GitHub API 限额（从 60/小时 → 5000/小时）：

### 本地开发
创建 `.env` 文件：
```env
GITHUB_TOKEN=ghp_your_token_here
```

### GitHub Actions
1. 进入仓库 **Settings** → **Secrets and variables** → **Actions**
2. 添加 Secret:
   - Name: `GITHUB_TOKEN`
   - Value: 你的 GitHub Token

**创建 Token**:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. 勾选 `public_repo` 权限
4. 复制 Token

---

## 📅 自动更新配置

### 当前配置
- **频率**: 每天北京时间凌晨 2:00
- **触发方式**: GitHub Actions Cron
- **流程**:
  1. 运行爬虫脚本
  2. 更新 `data/skills.json` 和 `data/stats.json`
  3. 自动提交到仓库
  4. 触发网站重新部署

### 修改更新频率
编辑 `.github/workflows/update-data.yml`:
```yaml
on:
  schedule:
    # 每 6 小时更新一次
    - cron: '0 */6 * * *'
```

### 手动触发更新
1. 进入 GitHub Actions
2. 选择 "Update Skills Data" 工作流
3. 点击 "Run workflow"

---

## 🎨 自定义配置

### 修改网站标题
编辑 `.vitepress/config.mjs`:
```js
export default defineConfig({
  title: "你的标题",
  description: "你的描述",
  // ...
})
```

### 添加 Google Analytics
```js
head: [
  ['script', { 
    async: '', 
    src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' 
  }]
]
```

### 修改爬虫源
编辑 `scripts/crawler.js`:
```js
const CONFIG = {
  github: {
    topics: ['你的-topic'],
    searchKeywords: ['你的关键词']
  }
}
```

---

## 📝 内容更新流程

### 方式 1: 自动更新（推荐）
- 无需任何操作
- 每天自动运行爬虫
- 自动发现新 Skills

### 方式 2: 手动更新
```bash
# 本地运行爬虫
npm run crawler

# 提交数据
git add data/
git commit -m "Update skills data"
git push

# 自动触发部署
```

### 方式 3: 手动添加 Skill
编辑 `data/skills.json`，添加：
```json
{
  "id": "username/repo",
  "name": "repo",
  "fullName": "username/repo",
  "description": "描述",
  "url": "https://github.com/username/repo",
  "stars": 100,
  "category": "Development",
  "source": "manual",
  "type": "mcp-server"
}
```

---

## 🔍 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
# 访问 http://localhost:5174

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview

# 运行爬虫
npm run crawler
```

---

## 🐛 常见问题

### Q1: GitHub API 限流（403/429）
**原因**: 未认证的 API 限制为 60 次/小时

**解决**:
1. 创建 GitHub Token
2. 设置环境变量 `GITHUB_TOKEN`
3. 限额提升至 5000 次/小时

### Q2: 网站部署后样式丢失
**原因**: `base` 配置不正确

**解决**: 检查 `.vitepress/config.mjs` 中的 `base` 设置

### Q3: 爬虫运行缓慢
**原因**: GitHub API 延迟 + README 下载

**解决**:
- 减少爬取的 Topic 数量
- 调整 `sleep` 时间
- 使用更快的网络环境

### Q4: 数据不更新
**原因**: GitHub Actions 未正确配置

**解决**:
1. 检查 Actions 是否启用
2. 查看工作流运行日志
3. 确认 Token 权限

---

## 📊 性能指标

- **爬虫速度**: ~5 分钟/运行
- **收录 Skills**: 267 个（首次）
- **网站大小**: ~2MB（含数据）
- **构建时间**: ~30 秒
- **加载速度**: < 1 秒（首屏）

---

## 🎯 下一步优化建议

### 短期（1-2 天）
- [ ] 添加 Skill 详情页
- [ ] 优化搜索算法
- [ ] 添加 Tag 过滤
- [ ] 优化移动端显示

### 中期（1 周）
- [ ] 添加用户提交机制
- [ ] 集成更多数据源（Docker Hub、PyPI）
- [ ] 添加 Skill 评分系统
- [ ] 生成 RSS Feed

### 长期（1 个月+）
- [ ] AI 自动生成使用指南
- [ ] Skill 依赖关系分析
- [ ] 社区评论系统
- [ ] 多语言支持

---

## 🎉 部署完成后

访问你的网站，你将看到：

1. **首页** - 267 个 Skills 统计卡片
2. **技能列表** - 完整的可搜索列表
3. **分类浏览** - 7 个分类
4. **趋势榜** - Top 50 热门 Skills
5. **自动更新** - 每天自动获取最新数据

---

**🚀 现在就部署到外网，开始使用吧！**

需要帮助？[提交 Issue](https://github.com/yourusername/skill-hub/issues)
