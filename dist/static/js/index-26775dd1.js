import{p as s,G as a,a6 as e,d as o,a as c,u as i,o as t,c as d,e as n,v as r}from"./main-52a8165b.js";import{_ as p,e as m}from"./WwChangePass-0d4cbe1e.js";import{m as l}from"./message-e9ccbace.js";const w=s(),g=a(),h=e("main",{getters:{device:s=>w.device,cachedViews:s=>w.cachedViews,element:s=>g.element,id:s=>g.id}}),u={class:"app-container"},f=o({setup(s){const e=c();i();const o=h(),w=a(),g=o.id,f=async s=>{const a={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},e=await m(g,a);l(e),v()},v=async()=>{await w.logout(),e.push("/login?redirect=/")};return(s,a)=>(t(),d("div",u,[n(r(p),{"is-change":!0,"is-dialog":!1,onWwpassConfirm:f})]))}});export{f as default};
