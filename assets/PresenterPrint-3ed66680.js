import{d as m,i as _,a as d,u as p,b as h,c as u,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as b,o as l,k as y,l as E,m as N,p as k,q as B,_ as P}from"../index-96845644.js";import{N as w}from"./NoteDisplay-b07e70d0.js";const A={class:"m-4"},S={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},F={class:"opacity-50"},L=t("div",{class:"flex-auto"},null,-1),T={key:0,class:"border-gray-400/50 mb-8"},H=m({__name:"PresenterPrint",setup(z){_(d),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${u.title}`});const i=f(()=>b.slice(0,-1).map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(l(),n("div",{id:"page-root",style:x(a(B))},[t("div",A,[t("div",S,[t("h1",V,s(a(u).title),1),t("div",j,s(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(a(i),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",F,s(e==null?void 0:e.no)+"/"+s(a(y)),1),E(" "+s(e==null?void 0:e.title)+" ",1),L])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(l(),n("hr",T)):k("v-if",!0)]))),128))])],4))}}),R=P(H,[["__file","D:/个人文件夹/学习/大二下/创业基础/base/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
