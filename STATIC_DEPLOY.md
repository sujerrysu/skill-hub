# 📦 Skill Hub 静态文件部署指南

## ✅ 已生成静态网站

**文件位置**: `/root/.openclaw/workspace/skill-hub/`

- 📁 **完整网站目录**: `.vitepress/dist/` (1.4 MB)
- 📦 **压缩包**: `skill-hub-static.tar.gz` (788 KB)

---

## 🌐 部署方式

### **方式 1: 腾讯云对象存储 COS**（推荐，免费额度）

#### 步骤：

1. **登录腾讯云控制台**
   - 访问 https://console.cloud.tencent.com/cos
   - 如果没有账号，注册一个（实名认证）

2. **创建存储桶**
   - 点击"创建存储桶"
   - 名称：`skill-hub`（或任意名称）
   - 所属地域：选择最近的（如：广州）
   - 访问权限：**公有读私有写**
   - 点击"下一步"完成创建

3. **上传文件**
   
   **方式 A - 网页上传**（适合少量文件）：
   - 进入存储桶
   - 点击"上传文件"
   - 将 `.vitepress/dist/` 目录下的所有文件和文件夹上传

   **方式 B - 使用 COSBrowser 工具**（推荐）：
   - 下载 COSBrowser：https://cloud.tencent.com/document/product/436/11366
   - 登录后选择存储桶
   - 将整个 `dist` 目录拖拽上传

   **方式 C - 命令行工具**：
   ```bash
   # 安装 COSCMD
   pip install coscmd
   
   # 配置（替换为你的信息）
   coscmd config -a <SecretId> -s <SecretKey> -b <BucketName-APPID> -r <Region>
   
   # 上传
   cd /root/.openclaw/workspace/skill-hub/.vitepress/dist
   coscmd upload -r ./ /
   ```

4. **开启静态网站托管**
   - 存储桶 → 基础配置 → 静态网站
   - 启用静态网站
   - 索引文档：`index.html`
   - 错误文档：`404.html`
   - 保存

5. **获取访问地址**
   - 会得到一个地址，类似：
   ```
   https://skill-hub-xxxxxxx.cos-website.ap-guangzhou.myqcloud.com
   ```
   
6. **（可选）绑定自定义域名**
   - 如果有自己的域名，可以绑定

**费用**：
- 免费额度：50GB 存储 + 10GB 流量/月
- 超出部分：约 0.1 元/GB

---

### **方式 2: Vercel（无需账号，使用静态上传）**

虽然您不想注册 GitHub，但 Vercel 支持直接上传：

1. 访问 https://vercel.com
2. 注册账号（可以用邮箱）
3. 选择 "Deploy from CLI"
4. 下载 Vercel CLI 或使用网页拖拽上传

**更简单**：使用 **Vercel Drop**
- 访问 https://vercel.com/new
- 直接拖拽 `dist` 文件夹
- 无需登录即可临时预览

---

### **方式 3: 阿里云 OSS**

与腾讯云类似：

1. 访问 https://oss.console.aliyun.com
2. 创建 Bucket（公共读）
3. 上传文件
4. 开启静态网站托管
5. 获取访问地址

---

### **方式 4: Netlify Drop**（最简单，无需登录）

1. **访问** https://app.netlify.com/drop
2. **拖拽** `.vitepress/dist` 文件夹到页面
3. **等待** 上传完成（约 30 秒）
4. **获得地址**，类似：`https://random-name.netlify.app`

**优点**：
- ✅ 完全免费
- ✅ 不需要注册（临时站点）
- ✅ 30 秒部署完成
- ✅ HTTPS 自动开启

**缺点**：
- ⚠️ 临时站点可能被回收（不活跃 30 天后）

---

### **方式 5: 自己的服务器**

如果您有自己的服务器或虚拟主机：

1. 将 `dist` 目录上传到服务器
2. 配置 Nginx/Apache 指向该目录
3. 访问服务器 IP 或域名

**Nginx 配置示例**：
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/skill-hub/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📱 推荐方案

### **最快方案**：Netlify Drop ⭐⭐⭐⭐⭐
- 30 秒部署
- 不需要注册
- 完全免费
- 手机可直接访问

### **稳定方案**：腾讯云 COS ⭐⭐⭐⭐
- 免费额度充足
- 国内访问快
- 稳定可靠
- 可绑定域名

---

## 🚀 立即部署（Netlify Drop）

### 在电脑上操作：

1. 下载压缩包到本地：
   ```bash
   # 如果您能 SSH 连接服务器
   scp root@服务器IP:/root/.openclaw/workspace/skill-hub/skill-hub-static.tar.gz .
   
   # 解压
   tar -xzf skill-hub-static.tar.gz
   ```

2. 打开浏览器访问：https://app.netlify.com/drop

3. 拖拽解压后的文件夹到页面

4. 等待上传完成

5. **复制网址，手机访问！** 📱

---

## 📦 文件说明

**包含内容**：
- `index.html` - 首页
- `skills/` - 技能列表页
- `categories/` - 分类页
- `trending/` - 趋势榜
- `about.html` - 关于页
- `assets/` - CSS、JS、图片等资源

**功能**：
- ✅ 完整的 267 个 Skills 数据
- ✅ 分类浏览
- ✅ 趋势榜（Top 10）
- ✅ 响应式设计（手机友好）
- ✅ 搜索功能（本地搜索）

---

## ❓ 需要帮助？

如果遇到问题，告诉我您：
1. 选择了哪种部署方式
2. 遇到了什么问题
3. 具体的错误信息

我会继续帮您解决！😊
