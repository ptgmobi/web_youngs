import{h as t}from"./moment-9bd84dc2.js";function r(t,r){return"number"==typeof t?t.toFixed(r):"string"==typeof t?isNaN(t)?t:parseFloat(t).toFixed(r):t}function n(r,n){return[t().subtract(r,n).format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]}function a(r,n,a){return[t().subtract(r,a).format("YYYY-MM-DD"),t().subtract(n,a).format("YYYY-MM-DD")]}function e(t){const r=(t,n)=>{const a=[];let e;return t.map((u=>{u.value=u.url,u.label=u.name,u.hasOwnProperty("pid")?Number(u.pid)===Number(n)&&(e=r(t,u.id),e.length>0&&(u.children=e),a.push(u)):a.push(u)})),a};return r(t,"0")}function u(t){const r=/(?!^)(?=(\d{3})+$)/g;return t<0?`-${t=((t=0-t)+"").replace(r,",")}`:(t+"").replace(r,",")}function o(){return t().utc().format("YYYY-MM-DD HH:mm:ss")}function s(r){return t().utc().add(r,"year").format("YYYY-MM-DD HH:mm:ss")}export{a,u as b,o as c,s as d,n as g,e as h,r as t};
