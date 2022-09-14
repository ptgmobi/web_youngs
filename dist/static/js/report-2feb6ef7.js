var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{_ as o,d as s,r as n,M as i,I as u,m as c,s as d,n as p,v as m,c as b,p as f,O as h,P as v,q as g,z as y,V as k,W as x,b as V,A as C,x as w}from"./index-43cb2139.js";import{P as j}from"./index-307ad59a.js";import{W as O}from"./index-97124ddb.js";import{k as D}from"./overview-59246a8c.js";import{g as P,a as _}from"./format-15e3f823.js";import"./moment-9bd84dc2.js";const q={class:"search-box"},U={class:"mb-10"},Y={class:"flex jc-between ai-start"},Q={class:"flex jc-start ai-start flex-wrap"},z=V(" Run "),I={class:"mb-10"},H={style:{"margin-left":"10px"}},L={class:"w100 flex"};var M=o(s({setup(e){let o=n({shortcuts:[{text:"今天",value:P(0,"day")},{text:"昨天",value:()=>_(1,1,"day")},{text:"最近7天",value:()=>P(6,"day")}],clumon:{base:[{label:"Impression",value:"impression"},{label:"Click",value:"click"},{label:"CVR",value:"cvr"},{label:"Conversion",value:"conversion"},{label:"Revenue($)",value:"revenue"}],choice:[{label:"Date",value:"date",require:!0,width:"100"},{label:"Hour",value:"hour",require:!1},{label:"Country",value:"country",require:!1},{label:"Platform",value:"platform",require:!1},{label:"PKG",value:"pkg",require:!1},{label:"Offer",value:"offer",require:!1}]},search:{date:P(6,"day"),checkList:["date"],filter:{country:"",platform:"",pkg:"",offer:""}},options:{platform:[{value:"Android",label:"Android"},{value:"iOS",label:"iOS"}]},tableData:{all:[],arr:[]},exportExcel:{buttonName:"导出",tHeader:["日期"],filterVal:["date"],fileName:"test"},pagination:{pageSizes:["10","20","40","100"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}},handleClumon:[],busHandleClumon:[]});i((()=>{}));const s=u((()=>o.handleClumon.map((e=>e.label)))),M=u((()=>o.handleClumon.map((e=>e.value)))),S=async()=>{const e=o.search.checkList,s=E(e).map((e=>e.value)).join(",");let n=((e,o)=>{for(var s in o||(o={}))l.call(o,s)&&r(e,s,o[s]);if(a)for(var s of a(o))t.call(o,s)&&r(e,s,o[s]);return e})({page:o.pagination.listQuery.page,page_size:o.pagination.listQuery.limit,st:o.search.date[0],et:o.search.date[1]},o.search.filter);s&&(n.dimension=s);const i=await D(n),{data:u}=i;o.tableData.arr=u.data,o.pagination.total=parseInt(u.count)},E=e=>{const a=[];return o.clumon.choice.map((l=>{e.includes(l.value)&&a.push(l)})),a},N=e=>{const a=E(e);o.busHandleClumon=[...a,...o.clumon.base]},R=()=>{o.handleClumon=o.busHandleClumon,S()};return N(o.search.checkList),R(),(e,a)=>{const l=c("el-checkbox"),t=c("el-checkbox-group"),r=c("el-date-picker"),n=c("el-input"),i=c("el-option"),u=c("el-select"),D=c("el-button"),P=c("el-table-column"),_=c("el-table");return d(),p("div",null,[m("div",q,[m("div",U,[b(t,{modelValue:g(o).search.checkList,"onUpdate:modelValue":a[0]||(a[0]=e=>g(o).search.checkList=e),onChange:N},{default:f((()=>[(d(!0),p(h,null,v(g(o).clumon.choice,(e=>(d(),C(l,{key:e.value,label:e.value,disabled:e.require},{default:f((()=>[V(w(e.label),1)])),_:2},1032,["label","disabled"])))),128))])),_:1},8,["modelValue"])]),m("div",Y,[m("div",Q,[b(r,{modelValue:g(o).search.date,"onUpdate:modelValue":a[1]||(a[1]=e=>g(o).search.date=e),class:"mr-10 mb-10",type:"daterange","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",shortcuts:g(o).shortcuts},null,8,["modelValue","shortcuts"]),b(n,{modelValue:g(o).search.filter.country,"onUpdate:modelValue":a[2]||(a[2]=e=>g(o).search.filter.country=e),placeholder:"Country",class:"mr-10 mb-10 search-con"},null,8,["modelValue"]),b(u,{modelValue:g(o).search.filter.platform,"onUpdate:modelValue":a[3]||(a[3]=e=>g(o).search.filter.platform=e),clearable:"",filterable:"",placeholder:"Platform",class:"mr-10 search-con"},{default:f((()=>[(d(!0),p(h,null,v(g(o).options.platform,(e=>(d(),C(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),b(n,{modelValue:g(o).search.filter.pkg,"onUpdate:modelValue":a[4]||(a[4]=e=>g(o).search.filter.pkg=e),placeholder:"Pkg",class:"mr-10 mb-10 search-con"},null,8,["modelValue"]),b(n,{modelValue:g(o).search.filter.offer,"onUpdate:modelValue":a[5]||(a[5]=e=>g(o).search.filter.offer=e),placeholder:"Offer",class:"mr-10 mb-10 search-con"},null,8,["modelValue"])]),b(D,{type:"primary",onClick:R},{default:f((()=>[z])),_:1})])]),y(" all "),y(' <el-table :data="tableData.all" border style="width: 100%" class="mb-10">\n      <el-table-column prop="impression" label="Impression" />\n      <el-table-column prop="click" label="Click" />\n      <el-table-column prop="revenue" label="Revenue($)" />\n      <el-table-column prop="conversion" label="Conversion" />\n    </el-table> '),m("div",I,[b(O,{"button-name":g(o).exportExcel.buttonName,list:g(o).tableData.arr,"t-header":g(s),"filter-val":g(M),filename:g(o).exportExcel.fileName},null,8,["button-name","list","t-header","filter-val","filename"])]),y(" arr "),b(_,{data:g(o).tableData.arr,border:!0,style:{width:"100%"}},{default:f((()=>[(d(!0),p(h,null,v(g(o).handleClumon,(e=>(d(),C(P,{key:e.value,align:"center",sortable:"",prop:e.value,label:e.label,width:e.width},{default:f((a=>[y(' <i class="el-icon-time"></i> '),m("span",H,w(a.row[e.value]),1)])),_:2},1032,["prop","label","width"])))),128))])),_:1},8,["data"]),m("div",L,[k(b(g(j),{page:g(o).pagination.listQuery.page,"onUpdate:page":a[6]||(a[6]=e=>g(o).pagination.listQuery.page=e),limit:g(o).pagination.listQuery.limit,"onUpdate:limit":a[7]||(a[7]=e=>g(o).pagination.listQuery.limit=e),total:g(o).pagination.total,"page-sizes":g(o).pagination.pageSizes,onPagination:S},null,8,["page","limit","total","page-sizes"]),[[x,g(o).pagination.total]])])])}}}),[["__scopeId","data-v-66630144"]]);export{M as default};
