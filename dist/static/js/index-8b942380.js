import{p as s,G as a,a6 as e,d as o,a as i,u as c,o as t,c as n,e as r,v as d}from"./main-5c054b70.js";import{_ as p,e as m}from"./WwChangePass-6f53437b.js";import{m as l}from"./message-bef23076.js";const w=s(),f=a(),g=e("main",{getters:{device:s=>w.device,cachedViews:s=>w.cachedViews,element:s=>f.element,id:s=>f.id}}),h={class:"app-container"},u=o({setup(s){const e=i();c();const o=g(),w=a(),f=o.id,u=async s=>{const a={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},e=await m(f,a);l(e),v()},v=async()=>{await w.logout(),e.push("/login?redirect=/")};return(s,a)=>(t(),n("div",h,[r(d(p),{"is-change":!0,"is-dialog":!1,onWwpassConfirm:u})]))}});export{u as default};
