import{_ as v,o as b,c as g,ag as f}from"./chunks/framework.Bk_5_eOm.js";var u;if(typeof window<"u"){let l=function(t){const s=t.toLowerCase();if(i[s])return i[s];for(const[a,e]of Object.entries(i))if(s.includes(a))return e;return t.startsWith("mcp-server-")?t.replace("mcp-server-","").replace(/-/g," ").split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")+" 服务":t.includes("-")?t.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" "):t.charAt(0).toUpperCase()+t.slice(1)},o=function(t){const s=document.getElementById("skillsGrid"),a=document.getElementById("resultsCount");s&&(a.textContent=t.length,s.innerHTML=t.map(e=>{const r=l(e.name),p=c[e.category]||c.default,m=e.source==="npm"?`npm install ${e.name}`:`# GitHub: ${e.name}`;return`
        <div class="skill-card" data-category="${e.category||"other"}">
          <div class="skill-header">
            <div class="skill-icon">${p}</div>
            <div class="skill-title-group">
              <div class="skill-name-en">${e.name}</div>
              <div class="skill-name-zh">${r}</div>
            </div>
          </div>
          <div class="skill-desc">${e.description||"提供强大的集成能力"}</div>
          <div class="skill-meta">
            ${e.stars?`<div class="meta-item">⭐ ${e.stars}</div>`:""}
            <div class="meta-badge">${e.source||"GitHub"}</div>
            <div class="meta-badge">${e.category||"other"}</div>
          </div>
          <div class="install-section">
            <div class="install-command" onclick="copyToClipboard(this)" title="点击复制">
              ${m}
            </div>
          </div>
        </div>
      `}).join(""))};async function d(){try{return(await(await fetch("/skill-hub/data/skills.json")).json()).skills||[]}catch(t){return console.error("Failed to load skills:",t),[]}}const i={n8n:"工作流自动化平台",workflow:"工作流",automation:"自动化工具",prompts:"提示词推荐",banana:"AI图像生成",gemini:"Gemini AI",database:"数据库管理",postgres:"PostgreSQL数据库",sqlite:"SQLite数据库",mysql:"MySQL数据库",mongodb:"MongoDB数据库",redis:"Redis缓存",filesystem:"文件系统",storage:"存储服务",fetch:"数据抓取",git:"Git版本控制",github:"GitHub集成",gitlab:"GitLab集成",slack:"Slack消息",discord:"Discord机器人",email:"邮件服务",telegram:"Telegram机器人",search:"搜索引擎",brave:"Brave搜索",google:"谷歌服务",youtube:"YouTube服务",aws:"AWS云服务",azure:"Azure云服务",cloudflare:"Cloudflare CDN",docker:"Docker容器",kubernetes:"K8s编排",puppeteer:"浏览器自动化",playwright:"网页自动化",selenium:"Selenium测试",memory:"记忆存储",notion:"Notion笔记",obsidian:"Obsidian知识库",time:"时间工具",weather:"天气查询",calendar:"日历管理",sentry:"Sentry错误追踪",log:"日志服务",monitor:"监控服务","mcp-server":"MCP服务器",mcp:"MCP协议",server:"服务器"},c={automation:"🤖",database:"🗄️",filesystem:"📁",fetch:"🌐",default:"⚡"};window.copyToClipboard=function(t){const s=t.textContent.trim();navigator.clipboard.writeText(s).then(()=>{const a=t.style.background;t.style.background="#dcfce7",setTimeout(()=>{t.style.background=a},300)})};let n=[];d().then(t=>{n=t,o(n)}),(u=document.getElementById("searchInput"))==null||u.addEventListener("input",t=>{const s=t.target.value.toLowerCase(),a=n.filter(e=>e.name.toLowerCase().includes(s)||l(e.name).toLowerCase().includes(s)||(e.description||"").toLowerCase().includes(s));o(a)}),document.querySelectorAll(".filter-btn").forEach(t=>{t.addEventListener("click",s=>{document.querySelectorAll(".filter-btn").forEach(r=>r.classList.remove("active")),s.target.classList.add("active");const a=s.target.dataset.category,e=a==="all"?n:n.filter(r=>r.category===a);o(e)})})}const _=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),h={name:"index.md"};function y(d,i,c,l,o,n){return b(),g("div",null,[...i[0]||(i[0]=[f("",4)])])}const k=v(h,[["render",y]]);export{_ as __pageData,k as default};
