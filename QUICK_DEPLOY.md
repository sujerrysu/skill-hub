# 快速部署到 Vercel

## 步骤 1: 准备 GitHub 仓库

1. 在 GitHub 创建新仓库（例如：skill-hub）
2. 运行以下命令推送代码：

```bash
cd /root/.openclaw/workspace/skill-hub
git remote add origin https://github.com/你的用户名/skill-hub.git
git push -u origin main
```

## 步骤 2: 部署到 Vercel

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你刚刚推送的 skill-hub 仓库
5. 点击 "Deploy"（无需修改配置，自动检测）

## 步骤 3: 访问网站

部署完成后（约 1-2 分钟），你会获得：
- 自动分配的域名：`your-project.vercel.app`
- 可以绑定自定义域名

每次推送代码到 GitHub，都会自动重新部署！

---

## 或者使用 GitHub Pages

1. 推送代码到 GitHub
2. 进入仓库 Settings → Pages
3. Source 选择 "GitHub Actions"
4. 等待部署完成（约 3-5 分钟）
5. 访问：`https://你的用户名.github.io/skill-hub/`

**注意**: 使用 GitHub Pages 需要在 `.vitepress/config.mjs` 中设置 base：

```js
export default defineConfig({
  base: '/skill-hub/',  // 你的仓库名
  // ...
})
```
