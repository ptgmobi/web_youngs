import"./index-737f3264.js";function t(t){const n={};for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const o=t[e];o&&""!==o&&o==Number(o)?n[e]=Number(o):n[e]=o}return n}function n(t,n){const e={};for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)){const r=n[o];t.includes(o)?e[o]=Number(r):e[o]=r}return e}function e(t){const n={};for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const o=t[e];o&&""!==o?o==Number(o)?n[e]=Number(o):n[e]=o:delete t[e]}return n}function o(t){let n=`${window.location.href.replaceAll(/(?<=#).+/g,"")}${t}`;return window.open(n),n}function r(t,n,e){let o=new RegExp(/\n+/),r=new RegExp(/[\S]+/),s=t.split(o),c=!0,a=[];return s.forEach(((t,o)=>{if(t&&r.test(t)){let o=t.trim().split(/\s+/);o.length===n?(o.map((t=>{e.test(t)||(c=!1)})),a.push(o)):c=!1}else c=!1})),{type:c,data:a}}function s(t=0){let n="abcdefghijklmnopqrstuvwxyz",e=n.length,o=Math.floor(Math.random()*e);return o===e&&(o=e-1),`${n[o]}${Math.random().toString(16).substring(2,t+1)}`}export{t as a,r as b,n as c,e as h,o,s as r};