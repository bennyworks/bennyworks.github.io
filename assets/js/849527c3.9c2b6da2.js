"use strict";(self.webpackChunkmy_doc_website=self.webpackChunkmy_doc_website||[]).push([[4010],{9485:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=o(4848),s=o(8453);const l={id:"feel-control-flow",title:"Control flow \u63a7\u5236\u6d41"},i=void 0,c={id:"Components/Modeler/FEEL expressions/\u8868\u8fbe\u5f0f/feel-control-flow",title:"Control flow \u63a7\u5236\u6d41",description:"If \u6761\u4ef6",source:"@site/docs/Components/Modeler/FEEL expressions/4-\u8868\u8fbe\u5f0f/9-feel-control-flow.mdx",sourceDirName:"Components/Modeler/FEEL expressions/4-\u8868\u8fbe\u5f0f",slug:"/Components/Modeler/FEEL expressions/\u8868\u8fbe\u5f0f/feel-control-flow",permalink:"/docs/Components/Modeler/FEEL expressions/\u8868\u8fbe\u5f0f/feel-control-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Components/Modeler/FEEL expressions/4-\u8868\u8fbe\u5f0f/9-feel-control-flow.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"feel-control-flow",title:"Control flow \u63a7\u5236\u6d41"},sidebar:"componentsSidebar",previous:{title:"Variables \u53d8\u91cf",permalink:"/docs/Components/Modeler/FEEL expressions/\u8868\u8fbe\u5f0f/feel-variables"},next:{title:"Functions \u51fd\u6570",permalink:"/docs/Components/Modeler/FEEL expressions/\u8868\u8fbe\u5f0f/feel-functions"}},t={},d=[{value:"If \u6761\u4ef6",id:"if-\u6761\u4ef6",level:3},{value:"For \u5faa\u73af",id:"for-\u5faa\u73af",level:3}];function a(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"if-\u6761\u4ef6",children:"If \u6761\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"if c then a else b\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6761\u4ef6\xa0",(0,r.jsx)(n.code,{children:"c"}),"\xa0\u53d6\u503c\u4e3a\xa0",(0,r.jsx)(n.code,{children:"true"}),"\uff0c\u5219\u6267\u884c\u8868\u8fbe\u5f0f\xa0",(0,r.jsx)(n.code,{children:"a"}),"\u3002\u5426\u5219\uff0c\u5b83\u6267\u884c\u8868\u8fbe\u5f0f\xa0",(0,r.jsx)(n.code,{children:"b"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'if 5 < 10  then "low" else "high"\r\n// "low"\r\n\r\nif 12 < 10 then "low" else "high"\r\n// "high"\n'})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u63d0\u793a",type:"info",children:[(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6761\u4ef6\xa0",(0,r.jsx)(n.code,{children:"c"}),"\xa0\u7684\u53d6\u503c\u4e0d\u662f\u5e03\u5c14\u503c\uff08\u4f8b\u5982\xa0",(0,r.jsx)(n.code,{children:"null"}),"\uff09\uff0c\u5219\u6267\u884c\u8868\u8fbe\u5f0f\xa0",(0,r.jsx)(n.code,{children:"b"}),"\u3002"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'if null then "low" else "high"\r\n// "high"\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"for-\u5faa\u73af",children:"For \u5faa\u73af"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"for a in b return c\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u904d\u5386\u5217\u8868\xa0",(0,r.jsx)(n.code,{children:"b"}),"\uff0c\u5e76\u5bf9\u5217\u8868\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u8868\u8fbe\u5f0f\xa0",(0,r.jsx)(n.code,{children:"c"}),"\u3002\u5f53\u524d\u5143\u7d20\u88ab\u5206\u914d\u7ed9\u53d8\u91cf\xa0",(0,r.jsx)(n.code,{children:"a"}),"\u3002\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u5217\u8868\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u7ed9\xa0",(0,r.jsx)(n.code,{children:"for"}),"\xa0\u5faa\u73af\u4f20\u9012\u4e86\u591a\u4e2a\u5217\u8868\uff0c\u5219\u5bf9\u7ed9\u5b9a\u5217\u8868\u4e2d\u5143\u7d20\u7684\u8fdb\u884c\u7b1b\u5361\u5c14\u79ef\u8ba1\u7b97\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"for x in [1,2,3] return x * 2\r\n// [2,4,6]\r\n\r\nfor x in [1,2], y in [3,4] return x * y\r\n// [3, 4, 6, 8]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u904d\u5386\u5217\u8868\u65f6\uff0c\u5c06\u524d\u4e00\u4e2a\u5143\u7d20\u5206\u914d\u7ed9\u53d8\u91cf\xa0",(0,r.jsx)(n.code,{children:"partial"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"for i in 1..10 return if (i <= 2) then 1 else partial[-1] + partial[-2]\r\n// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9664\u4e86\u5217\u8868\uff0c",(0,r.jsx)(n.code,{children:"for"}),"\xa0\u5faa\u73af\u8fd8\u53ef\u4ee5\u904d\u5386\u7ed9\u5b9a\u7684\u8303\u56f4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"for x in 0..8 return 2 ** x\r\n// [1, 2, 4, 8, 16, 32, 64, 128, 256]\r\n\r\nfor x in 3..1 return 2 * x\r\n// [6,4,2]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var r=o(6540);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);