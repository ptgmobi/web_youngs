import"./main-4990c854.js";function t(t){const n={};for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const o=t[e];o&&""!==o&&o==Number(o)?n[e]=Number(o):n[e]=o}return n}function n(t,n){const e={};for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)){const r=n[o];t.includes(o)?e[o]=Number(r):e[o]=r}return e}function e(t){const n={};for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const o=t[e];o&&""!==o?o==Number(o)?n[e]=Number(o):n[e]=o:delete t[e]}return n}function o(t){let n=`${window.location.href.replaceAll(/(?<=#).+/g,"")}${t}`;return window.open(n),n}function r(t,n,e){let o=new RegExp(/\n+/),r=new RegExp(/[\S]+/),c=t.split(o),s=!0,i=[];return c.forEach(((t,o)=>{if(t&&r.test(t)){let o=t.trim().split(/\s+/);o.length===n?(o.map((t=>{e.test(t)||(s=!1)})),i.push(o)):s=!1}else s=!1})),{type:s,data:i}}function c(t=0){let n="abcdefghijklmnopqrstuvwxyz",e=n.length,o=Math.floor(Math.random()*e);return o===e&&(o=e-1),`${n[o]}${Math.random().toString(16).substring(2,t+1)}`}function s(t,n){let e={};for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)){const r=t[o];n.includes(o)?e[o]=Number(r):e[o]=r}return e}function i(t){const n={};for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const o=t[e];o&&""!==o?n[e]=o:delete t[e]}return n}function a(t,n){let e={};for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o)){const r=t[o];n.includes(o)?e[o]="-1"===r||""===r?[]:r.toString().includes(",")?r.split(",").map((t=>t.toString())):[r.toString()]:e[o]=r}return e}export{t as a,r as b,n as c,i as d,s as e,a as f,e as h,o,c as r};
