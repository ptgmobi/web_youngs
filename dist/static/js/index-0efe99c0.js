import{p as s,G as a,a6 as e,d as o,a as i,u as t,o as c,c as d,e as n,v as r}from"./main-0f2b385e.js";import{_ as p,e as m}from"./WwChangePass-08f42396.js";import{m as l}from"./message-ad6a2e72.js";const w=s(),f=a(),g=e("main",{getters:{device:s=>w.device,cachedViews:s=>w.cachedViews,element:s=>f.element,id:s=>f.id}}),h={class:"app-container"},u=o({setup(s){const e=i();t();const o=g(),w=a(),f=o.id,u=async s=>{const a={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},e=await m(f,a);l(e),v()},v=async()=>{await w.logout(),e.push("/login?redirect=/")};return(s,a)=>(c(),d("div",h,[n(r(p),{"is-change":!0,"is-dialog":!1,onWwpassConfirm:u})]))}});export{u as default};
