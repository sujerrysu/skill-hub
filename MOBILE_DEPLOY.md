# 📱 手机预览 - 快速部署指南

## 🚀 5 分钟部署到外网

### 1️⃣ 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`skill-hub`
3. 设置为 Public（公开）
4. **不要**勾选任何初始化选项
5. 点击 "Create repository"

### 2️⃣ 推送代码到 GitHub

在服务器上运行：

```bash
cd /root/.openclaw/workspace/skill-hub

# 如果还没配置 Git 用户信息
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"

# 关联远程仓库（替换为你的 GitHub 用户名）
git remote add origin https://github.com/你的用户名/skill-hub.git

# 推送代码
git push -u origin main
```

**提示**: 推送时需要输入 GitHub 用户名和密码（或 Token）

### 3️⃣ 部署到 Vercel

#### 在手机上操作：

1. **打开浏览器**访问 https://vercel.com
2. 点击 **Sign Up** / **Log In**
3. 选择 **Continue with GitHub** 登录
4. 点击 **Add New...** → **Project**
5. 选择刚才创建的 `skill-hub` 仓库
6. 点击 **Deploy**（无需修改任何配置）
7. 等待 1-2 分钟部署完成

#### 获得外网地址：

部署完成后，你会看到：
```
🎉 Your project is live!

https://skill-hub-xxx.vercel.app
```

**直接用手机访问这个地址就可以了！** 📱

---

## 🎯 部署完成后的效果

你将在手机上看到：
- ✅ 完整的 Skill Hub 网站
- ✅ 267 个 Skills 数据
- ✅ 搜索、分类、趋势榜等所有功能
- ✅ 响应式设计（手机显示完美）
- ✅ 全球 CDN 加速（访问很快）

---

## 🔄 后续自动更新

- 每天凌晨 2:00 自动爬取新数据
- 自动更新网站
- 无需手动操作

---

## 🆘 遇到问题？

### 问题 1: 推送代码需要密码
GitHub 已不支持密码登录，需要使用 Token：

1. 访问 https://github.com/settings/tokens
2. Generate new token (classic)
3. 勾选 `repo` 权限
4. 复制 Token
5. 推送时密码处输入 Token

### 问题 2: Vercel 部署失败
检查是否正确推送到 GitHub，可以访问仓库确认文件都在

### 问题 3: 网站显示空白
首次部署可能需要 2-3 分钟，稍等片刻刷新页面

---

## 📞 需要帮助

如果遇到任何问题，告诉我具体卡在哪一步，我帮您解决！
