import{l as s,G as a,a7 as e,d as o,a as c,u as i,s as t,n as d,c as n,q as r}from"./index-aa136589.js";import{_ as p,e as m}from"./WwChangePass-479bedcc.js";import{m as l}from"./message-f935cb85.js";const w=s(),g=a(),f=e("main",{getters:{device:s=>w.device,cachedViews:s=>w.cachedViews,element:s=>g.element,id:s=>g.id}}),h={class:"app-container"},u=o({setup(s){const e=c();i();const o=f(),w=a(),g=o.id,u=async s=>{const a={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},e=await m(g,a);l(e),j()},j=async()=>{await w.logout(),e.push("/login?redirect=/")};return(s,a)=>(t(),d("div",h,[n(r(p),{"is-change":!0,"is-dialog":!1,onWwpassConfirm:u})]))}});export{u as default};
