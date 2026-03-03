import{d as u}from"./chunks/skills.data.dwaV-REg.js";import{_ as v,o as d,c as o,j as s,a as m,t as a,k as i,F as k,B as b,n as f}from"./chunks/framework.CKjyCoVi.js";const h={class:"stats-row"},_={class:"stat-card"},x={class:"number"},y={class:"stat-card"},S={class:"number"},T={class:"stat-card"},w={class:"number"},B={class:"skills-grid"},I=JSON.parse('{"title":"🔥 Trending Skills","description":"","frontmatter":{},"headers":[],"relativePath":"trending/index.md","filePath":"trending/index.md"}'),C={name:"trending/index.md"},N=Object.assign(C,{setup(P){const l=[...u].filter(t=>t.source==="github"&&t.stars>0).sort((t,n)=>n.stars-t.stars).slice(0,50);function p(t){return{development:"🛠️",productivity:"⚡",media:"🎨",web:"🌐",data:"📊",api:"🔌",other:"📦"}[t]||"📦"}function c(t){return t>=1e3?(t/1e3).toFixed(1)+"k":t.toString()}return(t,n)=>{var g;return d(),o("div",null,[n[3]||(n[3]=s("h1",{id:"🔥-trending-skills",tabindex:"-1"},[m("🔥 Trending Skills "),s("a",{class:"header-anchor",href:"#🔥-trending-skills","aria-label":'Permalink to "🔥 Trending Skills"'},"​")],-1)),n[4]||(n[4]=s("div",{class:"trending-header"},[s("h1",null,"🔥 Trending Skills"),s("p",null,"Top 50 most popular skills ranked by GitHub stars")],-1)),s("div",h,[s("div",_,[s("div",x,a(i(l).length),1),n[0]||(n[0]=s("div",{class:"label"},"Trending Skills",-1))]),s("div",y,[s("div",S,a(c(((g=i(l)[0])==null?void 0:g.stars)||0)),1),n[1]||(n[1]=s("div",{class:"label"},"Top Skill Stars",-1))]),s("div",T,[s("div",w,a(Math.round(i(l).reduce((e,r)=>e+r.stars,0)/i(l).length)),1),n[2]||(n[2]=s("div",{class:"label"},"Avg Stars",-1))])]),s("div",B,[(d(!0),o(k,null,b(i(l),(e,r)=>(d(),o("div",{key:e.name,class:"skill-card"},[s("div",{class:f(["rank-badge",r<3?"top-3":"",`rank-${r+1}`])}," #"+a(r+1),3),s("pre",null,[s("code",null,`<div class="skill-content">
  <div class="skill-header">
    <a 
      :href="skill.url" 
      target="_blank" 
      class="skill-name"
    >
      `+a(e.name)+`
    </a>
    <span :class="['category-badge']">
      `+a(p(e.category))+" "+a(e.category)+`
    </span>
    <span :class="['source-badge', skill.source]">
      `+a(e.source==="github"?"📂 GitHub":"📦 NPM")+`
    </span>
  </div>

  <div class="skill-description">
    `+a(e.description)+`
  </div>

  <div class="skill-meta">
    <div class="meta-item">
      ⭐ <strong>`+a(c(e.stars))+`</strong> stars
    </div>
    <div v-if="skill.language" class="meta-item">
      💻 `+a(e.language)+`
    </div>
    <button 
      class="install-btn" 
      @click="copyInstallCommand(skill)"
    >
      📋 Copy Install
    </button>
  </div>
</div>
`,1)])]))),128))]),n[5]||(n[5]=s("hr",null,null,-1)),n[6]||(n[6]=s("div",{style:{"text-align":"center","margin-top":"60px",padding:"30px",background:"var(--vp-c-bg-soft)","border-radius":"12px"}},[s("h3",{style:{margin:"0 0 16px 0"}},"Can't find what you're looking for?"),s("p",{style:{margin:"0 0 24px 0",color:"var(--vp-c-text-2)"}},"Browse all 267 skills or search by category"),s("a",{href:"/skill-hub/skills/",style:{display:"inline-block",padding:"12px 24px",background:"var(--vp-c-brand)",color:"white","text-decoration":"none","border-radius":"8px","font-weight":"600"}},"View All Skills →")],-1))])}}}),V=v(N,[["__scopeId","data-v-1ea3e506"]]);export{I as __pageData,V as default};
