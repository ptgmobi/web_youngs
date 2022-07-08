import{R as e,d as t,r as a,w as s,M as r,m as l,s as o,n as u,v as n,c,p as i,q as d,b as p,x as b}from"./index-951713b3.js";import{b as m}from"./format-15e3f823.js";import{_ as f}from"./lodash-e7f123ce.js";function h(t){return e({url:"/obuzz",data:t,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function g(t){return e({url:"/obuzz/offer-max-clk",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function z(t){return e({url:"/obuzz/edit-clk-limit",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function A(t){return e({url:"/obuzz/status",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function w(t){return e({url:"/obuzz",data:t,method:"post",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function _(t){return e({url:"/obuzz",data:t,method:"put",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function j(t){return e({url:`/obuzz/view/${t}`,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function v(t){return e({url:"/obuzz/copy",method:"get",data:t,bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function E(){return e({url:"/obuzz/edit-config",method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function L(t){return e({url:"/obuzz/offer-device",data:t,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function M(t){return e({url:"/obuzz/device",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function O(t){return e({url:"/obuzz/batch-device",data:t,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}const P={class:"full"},x={class:"w100 flex mt-20"},C=n("span",null,"选中合计：",-1),k=["textContent"],V=t({props:{all:{require:!0,default:()=>({}),type:Object},select:{require:!0,default:()=>({}),type:Object}},emits:["kk","count","up"],setup(e,{emit:t}){const h=e;let g=[];const z=a({search:{id:""},test:"",set:new Set,setObj:{},spanArr:g,all:g,select:g,statisticsCount:0}),A=()=>{let e=[...z.set].map((e=>e=[e,!1]));z.setObj=Object.fromEntries(e),w()},w=()=>{Object.keys(z.setObj).forEach((e=>{let t=[];z.all.forEach((a=>{a.source===e&&t.push(a.select_status)})),z.setObj[e]=!0,t.includes(!1)&&(z.setObj[e]=!1)})),_()},_=()=>{let e=z.all.reduce(((e,t)=>t.select_status?e+parseInt(t.device_count):e),0);z.statisticsCount=m(e),t("count",e)},j=()=>{let e=[],a=0;z.all.forEach((t=>{t.select_status&&(e.push({source:t.source,label:t.label}),a+=parseInt(t.device_count))})),t("kk",e)},v=(e,t)=>{z.spanArr=[];let a=0;for(var s=0;s<e.length;s++)0===s?z.spanArr.push(1):e[s][t]===e[s-1][t]?(z.spanArr[a]+=1,z.spanArr.push(0)):(z.spanArr.push(1),a=s)},E=({row:e,column:t,rowIndex:a,columnIndex:s})=>{if(0===s){const e=z.spanArr[a];return{rowspan:e,colspan:e>0?1:0}}};return s((()=>h.all),((e,t)=>{h.all&&h.all.length>0&&(z.all=f.cloneDeep(h.all),z.select=f.cloneDeep(h.select),z.set=new Set,z.all.map((e=>(e.select_status=!1,z.set.add(e.source),z.select.map((t=>(e.source===t.source&&e.label===t.label&&(e.select_status=!0),e))),e))),z.all.sort(((e,t)=>e.label>t.label?1:e.label<t.label?-1:1)),z.all.sort(((e,t)=>e.source>t.source?1:e.source<t.source?-1:1)),v(z.all,"source"),A())}),{immediate:!0}),r((()=>{})),(e,t)=>{const a=l("el-checkbox"),s=l("el-table-column"),r=l("el-table");return o(),u("div",null,[n("div",P,[c(r,{data:d(z).all,"span-method":E,border:"",style:{width:"100%","margin-top":"20px"}},{default:i((()=>[c(s,{prop:"source",label:"Source",width:"180"},{default:i((e=>[c(a,{modelValue:d(z).setObj[e.row.source],"onUpdate:modelValue":t=>d(z).setObj[e.row.source]=t,onChange:t=>{return a=e.row.source,s=d(z).setObj[e.row.source],z.all.map((e=>{e.source===a&&(e.select_status=s)})),w(),void j();var a,s}},{default:i((()=>[p(b(e.row.source),1)])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),c(s,{prop:"label",label:"Label"}),c(s,{prop:"slot_id",label:"Slot ID"}),c(s,{prop:"device_count",label:"Count"},{default:i((e=>[n("span",null,b(d(m)(e.row.device_count)),1)])),_:1}),c(s,{prop:"select",label:"Select"},{default:i((e=>[c(a,{modelValue:e.row.select_status,"onUpdate:modelValue":t=>e.row.select_status=t,onChange:t=>(e.row,w(),void j())},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1})])),_:1},8,["data"]),n("div",x,[C,n("span",{textContent:b(d(z).statisticsCount)},null,8,k)])])])}}});export{g as A,V as _,z as a,A as b,h as c,L as d,O as e,M as f,w as g,_ as h,E as i,j,v as k};
