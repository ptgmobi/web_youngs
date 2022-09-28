import{Q as e,d as t,r as s,w as a,L as r,q as l,o,c as u,x as n,e as c,s as i,v as d,f as p,y as b}from"./main-4990c854.js";import{b as m}from"./format-15e3f823.js";import{_ as f}from"./lodash-d6ca2f8e.js";function g(t){return e({url:"/buzz-sy",data:t,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function h(t){return e({url:"/buzz-sy/offer-max-clk",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function z(t){return e({url:"/buzz-sy/edit-clk-limit",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function w(t){return e({url:"/buzz-sy/status",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function A(t){return e({url:"/buzz-sy",data:t,method:"post",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function _(t){return e({url:"/buzz-sy",data:t,method:"put",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function y(t){return e({url:`/buzz-sy/view/${t}`,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function j(t){return e({url:"/buzz-sy/copy",method:"get",data:t,bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function v(){return e({url:"/buzz-sy/edit-config",method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function E(t){return e({url:"/buzz-sy/offer-device",data:t,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function L(t){return e({url:"/buzz-sy/device",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}const O={class:"full"},M={class:"w100 flex mt-20"},P=n("span",null,"选中合计：",-1),x=["textContent"],C=t({props:{all:{require:!0,default:()=>({}),type:Object},select:{require:!0,default:()=>({}),type:Object}},emits:["kk","count","up"],setup(e,{emit:t}){const g=e;let h=[];const z=s({search:{id:""},test:"",set:new Set,setObj:{},spanArr:h,all:h,select:h,statisticsCount:0}),w=()=>{let e=[...z.set].map((e=>e=[e,!1]));z.setObj=Object.fromEntries(e),A()},A=()=>{Object.keys(z.setObj).forEach((e=>{let t=[];z.all.forEach((s=>{s.source===e&&t.push(s.select_status)})),z.setObj[e]=!0,t.includes(!1)&&(z.setObj[e]=!1)})),_()},_=()=>{let e=z.all.reduce(((e,t)=>t.select_status?e+parseInt(t.device_count):e),0);z.statisticsCount=m(e),t("count",e)},y=()=>{let e=[],s=0;z.all.forEach((t=>{t.select_status&&(e.push({source:t.source,label:t.label}),s+=parseInt(t.device_count))})),t("kk",e)},j=(e,t)=>{z.spanArr=[];let s=0;for(var a=0;a<e.length;a++)0===a?z.spanArr.push(1):e[a][t]===e[a-1][t]?(z.spanArr[s]+=1,z.spanArr.push(0)):(z.spanArr.push(1),s=a)},v=({row:e,column:t,rowIndex:s,columnIndex:a})=>{if(0===a){const e=z.spanArr[s];return{rowspan:e,colspan:e>0?1:0}}};return a((()=>g.all),((e,t)=>{g.all&&g.all.length>0&&(z.all=f.cloneDeep(g.all),z.select=f.cloneDeep(g.select),z.set=new Set,z.all.map((e=>(e.select_status=!1,z.set.add(e.source),z.select.map((t=>(e.source===t.source&&e.label===t.label&&(e.select_status=!0),e))),e))),z.all.sort(((e,t)=>e.label>t.label?1:e.label<t.label?-1:1)),z.all.sort(((e,t)=>e.source>t.source?1:e.source<t.source?-1:1)),j(z.all,"source"),w())}),{immediate:!0}),r((()=>{})),(e,t)=>{const s=l("el-checkbox"),a=l("el-table-column"),r=l("el-table");return o(),u("div",null,[n("div",O,[c(r,{data:d(z).all,"span-method":v,border:"",style:{width:"100%","margin-top":"20px"}},{default:i((()=>[c(a,{prop:"source",label:"Source",width:"180"},{default:i((e=>[c(s,{modelValue:d(z).setObj[e.row.source],"onUpdate:modelValue":t=>d(z).setObj[e.row.source]=t,onChange:t=>{return s=e.row.source,a=d(z).setObj[e.row.source],z.all.map((e=>{e.source===s&&(e.select_status=a)})),A(),void y();var s,a}},{default:i((()=>[p(b(e.row.source),1)])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),c(a,{prop:"label",label:"Label"}),c(a,{prop:"slot_id",label:"Slot ID"}),c(a,{prop:"device_count",label:"Count"},{default:i((e=>[n("span",null,b(d(m)(e.row.device_count)),1)])),_:1}),c(a,{prop:"select",label:"Select"},{default:i((e=>[c(s,{modelValue:e.row.select_status,"onUpdate:modelValue":t=>e.row.select_status=t,onChange:t=>(e.row,A(),void y())},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1})])),_:1},8,["data"]),n("div",M,[P,n("span",{textContent:b(d(z).statisticsCount)},null,8,x)])])])}}});export{g as A,C as _,h as a,z as b,w as c,E as d,L as e,A as f,_ as g,v as h,y as i,j};
