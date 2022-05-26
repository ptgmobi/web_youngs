!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function a(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t,a,n,r,l,o){try{var i=e[l](o),u=i.value}catch(c){return void a(c)}i.done?t(u):Promise.resolve(u).then(n,r)}var o=document.createElement("style");o.innerHTML=".dashboard-text[data-v-66630144]{font-size:30px;line-height:46px}\n",document.head.appendChild(o),System.register(["./index-legacy-3182ba3f.js","./index-legacy-541364e9.js","./index-legacy-d02944fd.js","./overview-legacy-fad8da3e.js","./format-legacy-b6794641.js","./moment-legacy-2456bd0f.js"],(function(t){"use strict";var a,r,o,i,u,c,s,f,d,p,m,b,v,h,y,g,x,k,w,O,j,V,C,P,D;return{setters:[function(e){a=e._,r=e.d,o=e.r,i=e.M,u=e.I,c=e.m,s=e.s,f=e.n,d=e.v,p=e.c,m=e.p,b=e.O,v=e.P,h=e.q,y=e.z,g=e.V,x=e.W,k=e.b,w=e.A,O=e.x},function(e){j=e.P},function(e){V=e.W},function(e){C=e.k},function(e){P=e.g,D=e.a},function(){}],execute:function(){var S={class:"search-box"},A={class:"mb-10"},_={class:"flex jc-between ai-start"},U={class:"flex jc-start ai-start flex-wrap"},q=k(" Run "),I={class:"mb-10"},Y={style:{"margin-left":"10px"}},z={class:"w100 flex"},E=r({setup:function(t){var a=o({shortcuts:[{text:"今天",value:P(0,"day")},{text:"昨天",value:function(){return D(1,1,"day")}},{text:"最近7天",value:function(){return P(6,"day")}}],clumon:{base:[{label:"Impression",value:"impression"},{label:"Click",value:"click"},{label:"CVR",value:"cvr"},{label:"Conversion",value:"conversion"},{label:"Revenue($)",value:"revenue"}],choice:[{label:"Date",value:"date",require:!0,width:"100"},{label:"Hour",value:"hour",require:!1},{label:"Country",value:"country",require:!1},{label:"Platform",value:"platform",require:!1},{label:"PKG",value:"pkg",require:!1},{label:"Offer",value:"offer",require:!1}]},search:{date:P(6,"day"),checkList:["date"],filter:{country:"",platform:"",pkg:"",offer:""}},options:{platform:[{value:"Android",label:"Android"},{value:"iOS",label:"iOS"}]},tableData:{all:[],arr:[]},exportExcel:{buttonName:"导出",tHeader:["日期"],filterVal:["date"],fileName:"test"},pagination:{pageSizes:["10","20","40","100"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}},handleClumon:[],busHandleClumon:[]});i((function(){}));var r=u((function(){return a.handleClumon.map((function(e){return e.label}))})),E=u((function(){return a.handleClumon.map((function(e){return e.value}))})),M=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,r,l,o,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.search.checkList,r=Q(t).map((function(e){return e.value})),l=r.join(","),o=n({page:a.pagination.listQuery.page,page_size:a.pagination.listQuery.limit,st:a.search.date[0],et:a.search.date[1]},a.search.filter),l&&(o.dimension=l),e.next=7,C(o);case 7:i=e.sent,u=i.data,a.tableData.arr=u.data,a.pagination.total=parseInt(u.count);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function i(e){l(o,n,r,i,u,"next",e)}function u(e){l(o,n,r,i,u,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),Q=function(e){var t=[];return a.clumon.choice.map((function(a){e.includes(a.value)&&t.push(a)})),t},H=function(t){var n=Q(t);a.busHandleClumon=[].concat(e(n),e(a.clumon.base))},L=function(){a.handleClumon=a.busHandleClumon,M()};return H(a.search.checkList),L(),function(e,t){var n=c("el-checkbox"),l=c("el-checkbox-group"),o=c("el-date-picker"),i=c("el-input"),u=c("el-option"),C=c("el-select"),P=c("el-button"),D=c("el-table-column"),Q=c("el-table");return s(),f("div",null,[d("div",S,[d("div",A,[p(l,{modelValue:h(a).search.checkList,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h(a).search.checkList=e}),onChange:H},{default:m((function(){return[(s(!0),f(b,null,v(h(a).clumon.choice,(function(e){return s(),w(n,{key:e.value,label:e.value,disabled:e.require},{default:m((function(){return[k(O(e.label),1)]})),_:2},1032,["label","disabled"])})),128))]})),_:1},8,["modelValue"])]),d("div",_,[d("div",U,[p(o,{modelValue:h(a).search.date,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h(a).search.date=e}),class:"mr-10 mb-10",type:"daterange","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",shortcuts:h(a).shortcuts},null,8,["modelValue","shortcuts"]),p(i,{modelValue:h(a).search.filter.country,"onUpdate:modelValue":t[2]||(t[2]=function(e){return h(a).search.filter.country=e}),placeholder:"Country",class:"mr-10 mb-10 search-con"},null,8,["modelValue"]),p(C,{modelValue:h(a).search.filter.platform,"onUpdate:modelValue":t[3]||(t[3]=function(e){return h(a).search.filter.platform=e}),clearable:"",filterable:"",placeholder:"Platform",class:"mr-10 search-con"},{default:m((function(){return[(s(!0),f(b,null,v(h(a).options.platform,(function(e){return s(),w(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),p(i,{modelValue:h(a).search.filter.pkg,"onUpdate:modelValue":t[4]||(t[4]=function(e){return h(a).search.filter.pkg=e}),placeholder:"Pkg",class:"mr-10 mb-10 search-con"},null,8,["modelValue"]),p(i,{modelValue:h(a).search.filter.offer,"onUpdate:modelValue":t[5]||(t[5]=function(e){return h(a).search.filter.offer=e}),placeholder:"Offer",class:"mr-10 mb-10 search-con"},null,8,["modelValue"])]),p(P,{type:"primary",onClick:L},{default:m((function(){return[q]})),_:1})])]),y(" all "),y(' <el-table :data="tableData.all" border style="width: 100%" class="mb-10">\n      <el-table-column prop="impression" label="Impression" />\n      <el-table-column prop="click" label="Click" />\n      <el-table-column prop="revenue" label="Revenue($)" />\n      <el-table-column prop="conversion" label="Conversion" />\n    </el-table> '),d("div",I,[p(V,{"button-name":h(a).exportExcel.buttonName,list:h(a).tableData.arr,"t-header":h(r),"filter-val":h(E),filename:h(a).exportExcel.fileName},null,8,["button-name","list","t-header","filter-val","filename"])]),y(" arr "),p(Q,{data:h(a).tableData.arr,border:!0,style:{width:"100%"}},{default:m((function(){return[(s(!0),f(b,null,v(h(a).handleClumon,(function(e){return s(),w(D,{key:e.value,align:"center",sortable:"",prop:e.value,label:e.label,width:e.width},{default:m((function(t){return[y(' <i class="el-icon-time"></i> '),d("span",Y,O(t.row[e.value]),1)]})),_:2},1032,["prop","label","width"])})),128))]})),_:1},8,["data"]),d("div",z,[g(p(h(j),{page:h(a).pagination.listQuery.page,"onUpdate:page":t[6]||(t[6]=function(e){return h(a).pagination.listQuery.page=e}),limit:h(a).pagination.listQuery.limit,"onUpdate:limit":t[7]||(t[7]=function(e){return h(a).pagination.listQuery.limit=e}),total:h(a).pagination.total,"page-sizes":h(a).pagination.pageSizes,onPagination:M},null,8,["page","limit","total","page-sizes"]),[[x,h(a).pagination.total]])])])}}});t("default",a(E,[["__scopeId","data-v-66630144"]]))}}}))}();
