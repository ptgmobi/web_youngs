import{a as e}from"./index-45436103.js";const t="@@wavesContext";function o(e,o){function n(t){const n=Object.assign({},o.value),r=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),a=r.ele;if(a){a.style.position="relative",a.style.overflow="hidden";const e=a.getBoundingClientRect();let o=a.querySelector(".waves-ripple");if(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(e.width,e.height)+"px",a.appendChild(o)),"center"===r.type)o.style.top=e.height/2-o.offsetHeight/2+"px",o.style.left=e.width/2-o.offsetWidth/2+"px";else o.style.top=(t.pageY-e.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(t.pageX-e.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px";return o.style.backgroundColor=r.color,o.className="waves-ripple z-active",!1}}return e[t]?e[t].removeHandle=n:e[t]={removeHandle:n},n}var n={bind(e,t){e.addEventListener("click",o(e,t),!1)},update(e,n){e.removeEventListener("click",e[t].removeHandle,!1),e.addEventListener("click",o(e,n),!1)},unbind(e){e.removeEventListener("click",e[t].removeHandle,!1),e[t]=null,delete e[t]}};const r=function(e){e.directive("waves",n)};function a(){return e({url:"/project",method:"get",isParams:!0})}function s(t){return e({url:`/project/view/${t}`,method:"get",isParams:!0})}function l(t){return e({url:"/project",method:"post",data:t})}function c(t,o){return e({url:`/project/${t}`,method:"patch",data:o})}function i(t){return e({url:"/product",method:"get",data:t,isParams:!0})}function d(t){return e({url:"/product",method:"post",data:t})}function u(t,o){return e({url:`/product/${t}`,method:"put",data:o})}function p(t,o){return e({url:`/product/${t}`,method:"patch",data:o})}window.Vue&&(window.waves=n,Vue.use(r)),n.install=r;export{i as a,s as b,c,p as d,d as e,u as f,a as g,l as s,n as w};
