"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[6061],{2234:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(4164),a=t(4084),s=t(7559),r=t(7293),l=t(4848);function c(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(a.Rc,{}),className:(0,i.A)(n,s.G.common.unlistedBanner),children:(0,l.jsx)(a.Uh,{})})}function o(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.AE,{}),(0,l.jsx)(c,{...e})]})}},1689:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var i=t(4164),a=t(4084),s=t(7559),r=t(7293),l=t(4848);function c(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(a.Yh,{}),className:(0,i.A)(n,s.G.common.draftBanner),children:(0,l.jsx)(a.TT,{})})}var o=t(2234);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||i.unlisted)&&(0,l.jsx)(o.A,{}),i.draft&&(0,l.jsx)(c,{})]})}},7973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(6540);var i=t(4164),a=t(5500),s=t(7559),r=t(1957),l=t(7910),c=t(7763),o=t(1689),d=t(4336);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(4848);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:g,description:v,frontMatter:x,lastUpdatedBy:p,lastUpdatedAt:j}=t,{keywords:A,wrapperClassName:b,hide_table_of_contents:L}=x,N=f.image??x.image,C=!!(g||j||p);return(0,u.jsx)(a.e3,{className:(0,i.A)(b??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(r.A,{children:[(0,u.jsx)(a.be,{title:h,description:v,keywords:A,image:N}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.A)("col",!L&&"col--8"),children:[(0,u.jsx)(o.A,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(l.A,{children:(0,u.jsx)(n,{})})}),C&&(0,u.jsx)(d.A,{className:(0,i.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:g,lastUpdatedAt:j,lastUpdatedBy:p})]}),!L&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:x.toc_min_heading_level,maxHeadingLevel:x.toc_max_heading_level})})]})})]})})}},5195:(e,n,t)=>{t.d(n,{A:()=>g});var i=t(6540),a=t(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>l(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function o(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=o();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var m=t(8774),u=t(4848);function f(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(f);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const g=(0,a.p)(),v=o??g.tableOfContents.minHeadingLevel,x=m??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:x}}),[l,c,v,x])),(0,u.jsx)(h,{toc:p,className:t,linkClassName:l,...f})}},7763:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var i=t(4164),a=t(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=t(4848);const l="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(a.A,{...t,linkClassName:l,linkActiveClassName:c})})}},4084:(e,n,t)=>{t.d(n,{AE:()=>c,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>o});t(6540);var i=t(1312),a=t(5260),s=t(4848);function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},3261:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(9068),a=(t(6540),t(4848));const s={...i.A,Highlight:function(e){let{children:n,color:t}=e;return(0,a.jsx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:n})}}}}]);