import{l as s,G as a,a7 as e,d as o,a as i,u as c,s as t,n as d,c as n,q as r}from"./index-84066bf5.js";import{_ as p,e as m}from"./WwChangePass-a674bd30.js";import{m as l}from"./message-60aaefcb.js";const w=s(),f=a(),g=e("main",{getters:{device:s=>w.device,cachedViews:s=>w.cachedViews,element:s=>f.element,id:s=>f.id}}),h={class:"app-container"},u=o({setup(s){const e=i();c();const o=g(),w=a(),f=o.id,u=async s=>{const a={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},e=await m(f,a);l(e),b()},b=async()=>{await w.logout(),e.push("/login?redirect=/")};return(s,a)=>(t(),d("div",h,[n(r(p),{"is-change":!0,"is-dialog":!1,onWwpassConfirm:u})]))}});export{u as default};
