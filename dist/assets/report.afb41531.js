var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{r,o as n,h as i,x as s,g as u,f as d,y as c,t as m,F as p,d as b,z as f,b as h,s as v,q as y,u as g,P as k,Q as x,i as w,c as V}from"./vendor.abf78dba.js";import{P as C}from"./index.4a6fb17c.js";import{_,a as j,k as D}from"./index.1b5e8f51.js";import{g as q,a as E}from"./format.212a0fa8.js";var P=_({name:"WwExportExcel",props:{list:{type:Array,requrie:!0,default:()=>[]},tHeader:{type:Array,requrie:!0,default:()=>[]},filterVal:{type:Array,requrie:!0,default:()=>[]},filename:{type:String,requrie:!0,default:""},buttonName:{type:String,requrie:!1,default:"Export"},bookType:{type:String,requrie:!1,default:"xlsx"}},data:()=>({searchForm:{options:{bookType:["xlsx","csv"],autoWidth:[!0,!1]},data:{filename:"",autoWidth:!0,bookType:"xlsx"},rules:{}},downloadLoading:!1}),created(){this.searchForm.data.bookType=this.bookType},methods:{handleDownload(){this.downloadLoading=!0,j((()=>import("./Export2Excel.07d3483b.js")),["assets/Export2Excel.07d3483b.js","assets/vendor.abf78dba.js"]).then((e=>{const a=this.list,l=this.formatJson(this.filterVal,a);e.export_json_to_excel({header:this.tHeader,data:l,filename:this.filename,autoWidth:this.searchForm.data.autoWidth,bookType:this.searchForm.data.bookType}),this.downloadLoading=!1}))},formatJson:(e,a)=>a.map((a=>e.map((e=>a[e]))))}},[["render",function(e,a,l,t,o,b){const f=r("el-button");return n(),i(p,null,[s(' <el-form :inline="true" :model="searchForm.data" class="flex jc-end"> '),s(' <div class="flex jc-start"> '),s(' <el-form-item label="导出文件名">\n        <el-input v-model="searchForm.data.filename" placeholder="文件名" />\n      </el-form-item> '),s(' <el-form-item label="自动宽度">\n        <el-radio-group v-model="searchForm.data.autoWidth">\n          <el-radio :label="true" border>\n            True\n          </el-radio>\n          <el-radio :label="false" border>\n            False\n          </el-radio>\n        </el-radio-group>\n      </el-form-item> '),s(' <el-form-item label="导出文件类型">\n        <el-select v-model="searchForm.data.bookType" placeholder="文件类型">\n          <el-option\n            v-for="item in searchForm.options.bookType"\n            :key="item"\n            :label="item"\n            :value="item"\n          />\n        </el-select>\n      </el-form-item> '),s(" </div> "),s(' <el-form-item class="mr-0">\n      <el-button @click="handleDownload">导出</el-button>\n    </el-form-item>\n  </el-form> '),u(f,{icon:"Download",type:"primary",onClick:b.handleDownload},{default:d((()=>[c(m(l.buttonName),1)])),_:1},8,["onClick"])],2112)}]]);const F={class:"search-box"},O={class:"mb-10"},T={class:"flex jc-between ai-start"},L={class:"flex jc-start ai-start flex-wrap"},Q=c("Run"),S={class:"mb-10"},U={style:{"margin-left":"10px"}},Y={class:"w100 flex"};var A=_(b({setup(e){let b=f({shortcuts:[{text:"今天",value:q(0,"day")},{text:"昨天",value:()=>E(1,1,"day")},{text:"最近7天",value:()=>q(6,"day")}],clumon:{base:[{label:"Impression",value:"impression"},{label:"Click",value:"click"},{label:"CVR",value:"cvr"},{label:"Conversion",value:"conversion"},{label:"Revenue($)",value:"revenue"}],choice:[{label:"Date",value:"date",require:!0,width:"100"},{label:"Hour",value:"hour",require:!1},{label:"Country",value:"country",require:!1},{label:"Platform",value:"platform",require:!1},{label:"PKG",value:"pkg",require:!1},{label:"Offer",value:"offer",require:!1}]},search:{date:q(6,"day"),checkList:["date"],filter:{country:"",platform:"",pkg:"",offer:""}},options:{platform:[{value:"Android",label:"Android"},{value:"iOS",label:"iOS"}]},tableData:{all:[],arr:[]},exportExcel:{buttonName:"导出",tHeader:["日期"],filterVal:["date"],fileName:"test"},pagination:{pageSizes:["10","20","40","100"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}},handleClumon:[],busHandleClumon:[]});h((()=>{}));const _=v((()=>b.handleClumon.map((e=>e.label)))),j=v((()=>b.handleClumon.map((e=>e.value)))),A=async()=>{const e=b.search.checkList,r=H(e).map((e=>e.value)).join(",");let n=((e,r)=>{for(var n in r||(r={}))l.call(r,n)&&o(e,n,r[n]);if(a)for(var n of a(r))t.call(r,n)&&o(e,n,r[n]);return e})({page:b.pagination.listQuery.page,page_size:b.pagination.listQuery.limit,st:b.search.date[0],et:b.search.date[1]},b.search.filter);r&&(n.dimension=r);const i=await function(e){return D({url:"/af-report/view",data:e,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}(n),{data:s}=i;b.tableData.arr=s.data,b.pagination.total=parseInt(s.count)},H=e=>{const a=[];return b.clumon.choice.map((l=>{e.includes(l.value)&&a.push(l)})),a},z=e=>{const a=H(e);b.busHandleClumon=[...a,...b.clumon.base]},I=()=>{b.handleClumon=b.busHandleClumon,A()};return z(b.search.checkList),I(),(e,a)=>{const l=r("el-checkbox"),t=r("el-checkbox-group"),o=r("el-date-picker"),f=r("el-input"),h=r("el-option"),v=r("el-select"),D=r("el-button"),q=r("el-table-column"),E=r("el-table");return n(),i("div",null,[y("div",F,[y("div",O,[u(t,{modelValue:g(b).search.checkList,"onUpdate:modelValue":a[0]||(a[0]=e=>g(b).search.checkList=e),onChange:z},{default:d((()=>[(n(!0),i(p,null,w(g(b).clumon.choice,(e=>(n(),V(l,{key:e.value,label:e.value,disabled:e.require},{default:d((()=>[c(m(e.label),1)])),_:2},1032,["label","disabled"])))),128))])),_:1},8,["modelValue"])]),y("div",T,[y("div",L,[u(o,{class:"mr-10 mb-10",modelValue:g(b).search.date,"onUpdate:modelValue":a[1]||(a[1]=e=>g(b).search.date=e),type:"daterange","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",shortcuts:g(b).shortcuts},null,8,["modelValue","shortcuts"]),u(f,{modelValue:g(b).search.filter.country,"onUpdate:modelValue":a[2]||(a[2]=e=>g(b).search.filter.country=e),placeholder:"Country",class:"mr-10 mb-10 search-con"},null,8,["modelValue"]),u(v,{modelValue:g(b).search.filter.platform,"onUpdate:modelValue":a[3]||(a[3]=e=>g(b).search.filter.platform=e),clearable:"",filterable:"",placeholder:"Platform",class:"mr-10 search-con"},{default:d((()=>[(n(!0),i(p,null,w(g(b).options.platform,(e=>(n(),V(h,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),u(f,{modelValue:g(b).search.filter.pkg,"onUpdate:modelValue":a[4]||(a[4]=e=>g(b).search.filter.pkg=e),placeholder:"Pkg",class:"mr-10 mb-10 search-con"},null,8,["modelValue"]),u(f,{modelValue:g(b).search.filter.offer,"onUpdate:modelValue":a[5]||(a[5]=e=>g(b).search.filter.offer=e),placeholder:"Offer",class:"mr-10 mb-10 search-con"},null,8,["modelValue"])]),u(D,{type:"primary",onClick:I},{default:d((()=>[Q])),_:1})])]),s(" all "),s(' <el-table :data="tableData.all" border style="width: 100%" class="mb-10">\n      <el-table-column prop="impression" label="Impression" />\n      <el-table-column prop="click" label="Click" />\n      <el-table-column prop="revenue" label="Revenue($)" />\n      <el-table-column prop="conversion" label="Conversion" />\n    </el-table> '),y("div",S,[u(P,{"button-name":g(b).exportExcel.buttonName,list:g(b).tableData.arr,"t-header":g(_),"filter-val":g(j),filename:g(b).exportExcel.fileName},null,8,["button-name","list","t-header","filter-val","filename"])]),s(" arr "),u(E,{data:g(b).tableData.arr,border:!0,style:{width:"100%"}},{default:d((()=>[(n(!0),i(p,null,w(g(b).handleClumon,(e=>(n(),V(q,{align:"center",sortable:"",key:e.value,prop:e.value,label:e.label,width:e.width},{default:d((a=>[s(' <i class="el-icon-time"></i> '),y("span",U,m(a.row[e.value]),1)])),_:2},1032,["prop","label","width"])))),128))])),_:1},8,["data"]),y("div",Y,[k(u(g(C),{total:g(b).pagination.total,"page-sizes":g(b).pagination.pageSizes,page:g(b).pagination.listQuery.page,"onUpdate:page":a[6]||(a[6]=e=>g(b).pagination.listQuery.page=e),limit:g(b).pagination.listQuery.limit,"onUpdate:limit":a[7]||(a[7]=e=>g(b).pagination.listQuery.limit=e),onPagination:A},null,8,["total","page-sizes","page","limit"]),[[x,g(b).pagination.total]])])])}}}),[["__scopeId","data-v-66630144"]]);export{A as default};
