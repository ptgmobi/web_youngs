import{p as s,G as a,a6 as e,d as o,a as c,u as i,o as t,c as d,e as r,v as n}from"./main-dae9cd13.js";import{_ as p,e as m}from"./WwChangePass-af0204e9.js";import{m as l}from"./message-2d1d3f7c.js";import{u as w}from"./dsp-08c3581e.js";const f=s(),h=a(),g=w(),u=e("main",{getters:{device:s=>f.device,cachedViews:s=>f.cachedViews,element:s=>h.element,id:s=>h.id,topsearch:s=>g.topsearch}}),j={class:"app-container"},v=o({setup(s){const e=c();i();const o=u(),w=a(),f=o.id,h=async s=>{const a={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},e=await m(f,a);l(e),g()},g=async()=>{await w.logout(),e.push("/login?redirect=/")};return(s,a)=>(t(),d("div",j,[r(n(p),{"is-change":!0,"is-dialog":!1,onWwpassConfirm:h})]))}});export{v as default};
