import{h as t}from"./moment-9bd84dc2.js";function r(t,r){return"number"==typeof t?t.toFixed(r):"string"==typeof t?isNaN(t)?t:parseFloat(t).toFixed(r):t}function n(r,n){return[t().subtract(r,n).format("YYYY-MM-DD"),t().format("YYYY-MM-DD")]}function a(r,n,a){return[t().subtract(r,a).format("YYYY-MM-DD"),t().subtract(n,a).format("YYYY-MM-DD")]}function e(t){const r=(t,n)=>{const a=[];let e;return t.map((o=>{o.value=o.url,o.label=o.name,o.hasOwnProperty("pid")?Number(o.pid)===Number(n)&&(e=r(t,o.id),e.length>0&&(o.children=e),a.push(o)):a.push(o)})),a};return r(t,"0")}function o(t){const r=/(?!^)(?=(\d{3})+$)/g;return t<0?`-${t=((t=0-t)+"").replace(r,",")}`:(t+"").replace(r,",")}function s(){return t().format("YYYY-MM-DD HH:mm:ss")}function u(r){return t().add(r,"year").format("YYYY-MM-DD HH:mm:ss")}export{a,o as b,s as c,u as d,n as g,e as h,r as t};