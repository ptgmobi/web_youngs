import{p as s,G as a,a6 as e,d as o,a as i,u as t,o as c,c as n,e as r,v as d}from"./main-117ea954.js";import{_ as p,e as m}from"./WwChangePass-3648f881.js";import{m as l}from"./message-5536b0e9.js";const w=s(),g=a(),f=e("main",{getters:{device:s=>w.device,cachedViews:s=>w.cachedViews,element:s=>g.element,id:s=>g.id}}),h={class:"app-container"},u=o({setup(s){const e=i();t();const o=f(),w=a(),g=o.id,u=async s=>{const a={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},e=await m(g,a);l(e),v()},v=async()=>{await w.logout(),e.push("/login?redirect=/")};return(s,a)=>(c(),n("div",h,[r(d(p),{"is-change":!0,"is-dialog":!1,onWwpassConfirm:u})]))}});export{u as default};
