import{_ as m,o as b,c as f,ag as g}from"./chunks/framework.Bk_5_eOm.js";var u;if(typeof window<"u"){let l=function(t){const s=t.toLowerCase();for(const[a,e]of Object.entries(o))if(s.includes(a))return e;return t.startsWith("mcp-server-")?t.replace("mcp-server-","").replace(/-/g," ").split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" "):t},r=function(t){const s=document.getElementById("skillsGrid"),a=document.getElementById("resultsCount");s&&(a.textContent=t.length,s.innerHTML=t.map(e=>{const n=l(e.name),v=c[e.category]||c.default,p=e.source==="npm"?`npm install ${e.name}`:`# GitHub: ${e.name}`;return`
        <div class="skill-card" data-category="${e.category||"other"}">
          <div class="skill-header">
            <div class="skill-icon">${v}</div>
            <div class="skill-title-group">
              <div class="skill-name-en">${e.name}</div>
              <div class="skill-name-zh">${n}</div>
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
              ${p}
            </div>
          </div>
        </div>
      `}).join(""))};async function d(){try{return(await(await fetch("/skill-hub/data/skills.json")).json()).skills||[]}catch(t){return console.error("Failed to load skills:",t),[]}}const o={database:"数据库",postgres:"PostgreSQL",sqlite:"SQLite",mysql:"MySQL",fetch:"数据抓取",filesystem:"文件系统",git:"Git版本控制",github:"GitHub",gitlab:"GitLab",slack:"Slack消息",discord:"Discord",email:"邮件服务","brave-search":"Brave搜索",google:"谷歌服务",youtube:"YouTube",aws:"AWS云",docker:"Docker",kubernetes:"K8s",puppeteer:"浏览器自动化",playwright:"网页测试",memory:"记忆存储",notion:"Notion",obsidian:"Obsidian",time:"时间工具",weather:"天气",sentry:"Sentry错误追踪",cloudflare:"Cloudflare"},c={automation:"🤖",database:"🗄️",filesystem:"📁",fetch:"🌐",default:"⚡"};window.copyToClipboard=function(t){const s=t.textContent.trim();navigator.clipboard.writeText(s).then(()=>{const a=t.style.background;t.style.background="#dcfce7",setTimeout(()=>{t.style.background=a},300)})};let i=[];d().then(t=>{i=t,r(i)}),(u=document.getElementById("searchInput"))==null||u.addEventListener("input",t=>{const s=t.target.value.toLowerCase(),a=i.filter(e=>e.name.toLowerCase().includes(s)||l(e.name).toLowerCase().includes(s)||(e.description||"").toLowerCase().includes(s));r(a)}),document.querySelectorAll(".filter-btn").forEach(t=>{t.addEventListener("click",s=>{document.querySelectorAll(".filter-btn").forEach(n=>n.classList.remove("active")),s.target.classList.add("active");const a=s.target.dataset.category,e=a==="all"?i:i.filter(n=>n.category===a);r(e)})})}const k=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),h={name:"index.md"};function y(d,o,c,l,r,i){return b(),f("div",null,[...o[0]||(o[0]=[g("",4)])])}const C=m(h,[["render",y]]);export{k as __pageData,C as default};
