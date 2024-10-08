"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[4171],{7331:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(4848),o=r(8453);const i={id:"feel-control-flow",title:"Control flow \u63a7\u5236\u6d41"},l=void 0,c={id:"FEEL expressions/\u8868\u8fbe\u5f0f/feel-control-flow",title:"Control flow \u63a7\u5236\u6d41",description:"If \u6761\u4ef6",source:"@site/docs/FEEL expressions/4-\u8868\u8fbe\u5f0f/9-feel-control-flow.mdx",sourceDirName:"FEEL expressions/4-\u8868\u8fbe\u5f0f",slug:"/FEEL expressions/\u8868\u8fbe\u5f0f/feel-control-flow",permalink:"/docs/FEEL expressions/\u8868\u8fbe\u5f0f/feel-control-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FEEL expressions/4-\u8868\u8fbe\u5f0f/9-feel-control-flow.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"feel-control-flow",title:"Control flow \u63a7\u5236\u6d41"},sidebar:"tutorialSidebar",previous:{title:"Variables \u53d8\u91cf",permalink:"/docs/FEEL expressions/\u8868\u8fbe\u5f0f/feel-variables"},next:{title:"Functions \u51fd\u6570",permalink:"/docs/FEEL expressions/\u8868\u8fbe\u5f0f/feel-functions"}},t={},a=[{value:"If \u6761\u4ef6",id:"if-\u6761\u4ef6",level:3},{value:"For \u5faa\u73af",id:"for-\u5faa\u73af",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"if-\u6761\u4ef6",children:"If \u6761\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"if c then a else b\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u6761\u4ef6\xa0",(0,s.jsx)(n.code,{children:"c"}),"\xa0\u53d6\u503c\u4e3a\xa0",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u6267\u884c\u8868\u8fbe\u5f0f\xa0",(0,s.jsx)(n.code,{children:"a"}),"\u3002\u5426\u5219\uff0c\u5b83\u6267\u884c\u8868\u8fbe\u5f0f\xa0",(0,s.jsx)(n.code,{children:"b"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'if 5 < 10  then "low" else "high"\r\n// "low"\r\n\r\nif 12 < 10 then "low" else "high"\r\n// "high"\n'})}),"\n",(0,s.jsxs)(n.admonition,{title:"\u63d0\u793a",type:"info",children:[(0,s.jsxs)(n.p,{children:["\u5982\u679c\u6761\u4ef6\xa0",(0,s.jsx)(n.code,{children:"c"}),"\xa0\u7684\u53d6\u503c\u4e0d\u662f\u5e03\u5c14\u503c\uff08\u4f8b\u5982\xa0",(0,s.jsx)(n.code,{children:"null"}),"\uff09\uff0c\u5219\u6267\u884c\u8868\u8fbe\u5f0f\xa0",(0,s.jsx)(n.code,{children:"b"}),"\u3002"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'if null then "low" else "high"\r\n// "high"\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"for-\u5faa\u73af",children:"For \u5faa\u73af"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"for a in b return c\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u904d\u5386\u5217\u8868\xa0",(0,s.jsx)(n.code,{children:"b"}),"\uff0c\u5e76\u5bf9\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u8868\u8fbe\u5f0f\xa0",(0,s.jsx)(n.code,{children:"c"}),"\u3002\u5f53\u524d\u5143\u7d20\u88ab\u5206\u914d\u7ed9\u53d8\u91cf\xa0",(0,s.jsx)(n.code,{children:"a"}),"\u3002\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u5217\u8868\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u7ed9\xa0",(0,s.jsx)(n.code,{children:"for"}),"\xa0\u5faa\u73af\u4f20\u9012\u4e86\u591a\u4e2a\u5217\u8868\uff0c\u5219\u5bf9\u7ed9\u5b9a\u5217\u8868\u4e2d\u5143\u7d20\u7684\u8fdb\u884c\u7b1b\u5361\u5c14\u79ef\u8ba1\u7b97\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"for x in [1,2,3] return x * 2\r\n// [2,4,6]\r\n\r\nfor x in [1,2], y in [3,4] return x * y\r\n// [3, 4, 6, 8]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u904d\u5386\u5217\u8868\u65f6\uff0c\u5c06\u524d\u4e00\u4e2a\u5143\u7d20\u5206\u914d\u7ed9\u53d8\u91cf\xa0",(0,s.jsx)(n.code,{children:"partial"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"for i in 1..10 return if (i <= 2) then 1 else partial[-1] + partial[-2]\r\n// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9664\u4e86\u5217\u8868\uff0c",(0,s.jsx)(n.code,{children:"for"}),"\xa0\u5faa\u73af\u8fd8\u53ef\u4ee5\u904d\u5386\u7ed9\u5b9a\u7684\u8303\u56f4\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"for x in 0..8 return 2 ** x\r\n// [1, 2, 4, 8, 16, 32, 64, 128, 256]\r\n\r\nfor x in 3..1 return 2 * x\r\n// [6,4,2]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(6540);const o={},i=s.createContext(o);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);