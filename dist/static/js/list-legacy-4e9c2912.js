!function(){function e(e,t,a,n,r,l,o){try{var u=e[l](o),i=u.value}catch(c){return void a(c)}u.done?t(i):Promise.resolve(i).then(n,r)}function t(t){return function(){var a=this,n=arguments;return new Promise((function(r,l){var o=t.apply(a,n);function u(t){e(o,r,l,u,i,"next",t)}function i(t){e(o,r,l,u,i,"throw",t)}u(void 0)}))}}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var r=document.createElement("style");r.innerHTML=".cutoff[data-v-29c9e5d6]{width:80px}\n",document.head.appendChild(r),System.register(["./vendor-legacy-e9da7d64.js","./index-legacy-220514b8.js","./buzz-legacy-2f53e116.js","./message-legacy-bd22d58c.js","./lodash-legacy-6242e3de.js","./new-format-legacy-55840e58.js","./index-legacy-5f33ed51.js"],(function(e){"use strict";var n,r,l,o,u,i,c,d,s,f,p,m,v,h,b,y,_,g,w,V,x,k,F,D,A,U,j,C,P,S,z,O;return{setters:[function(e){n=e.d,r=e.ai,l=e.y,o=e.B,u=e.r,i=e.aj,c=e.i,d=e.s,s=e.g,f=e.v,p=e.f,m=e.h,v=e.P,h=e.c,b=e.Q,y=e.o,_=e.F,g=e.j,w=e.x,V=e.t,x=e.p,k=e.q,F=e.E},function(e){D=e.P},function(e){A=e.A,U=e.a,j=e.b,C=e.c},function(e){P=e.m},function(e){S=e._},function(e){z=e.h},function(e){O=e._}],execute:function(){var E=function(e){return x("data-v-29c9e5d6"),e=e(),k(),e},Q={class:"controlBox w100 mb-10"},R={class:"mb-10"},I=w("Offer Create"),N={class:"flex jc-start flex-wrap w100"},B={class:"flex"},M={class:"flex"},T=w("查询"),L={class:"flex jc-around"},q={class:"flex jc-around"},H=E((function(){return d("span",null,"-",-1)})),$={class:"flex mt-10"},G={class:"flex jc-around"},J={class:"w100 flex"},K=n({setup:function(e){var n=r({attribute_provider:[],platform:[],package_name:"",channel:"",id:"",offer_title:"",country:"",pid:""}),x=l({dialogVisible:!1,cache:{item:{},device:{}},searchForm:n.value,useData:n.value,loading:!0,options:{cutoff_start:a(new Array(20)).map((function(e,t){var a=5*t/100;return{value:a,label:"".concat((100*Number(a)).toFixed(0),"%")}})),cutoff_end:a(new Array(20)).map((function(e,t){var a=(5*t+5)/100;return{value:a,label:"".concat((100*Number(a)).toFixed(0),"%")}})),attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}],platform:[{value:"1",label:"Android"},{value:"2",label:"iOS"}]},list:[],pagination:{pageSizes:["50","100","500","1000"],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}),k=function(){x.useData=S.cloneDeep(x.searchForm),W()},O=function(){var e=t(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t.id,max_clk_num:t.max_clk_num},a=z(a),e.next=4,U(a);case 4:n=e.sent,P(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=t(regeneratorRuntime.mark((function e(t){var a,n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.cutoff_start,n=t.cutoff_end,r=t.id,!(a<n)){e.next=13;break}return l=z(l={cutoff_start:a,cutoff_end:n,id:r}),e.next=9,j(l);case 9:o=e.sent,P(o),e.next=15;break;case 13:"start必须小于end",F({message:"start必须小于end",type:"error",duration:2e3});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=t(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t.id,status:t.status},a=z(a),e.next=4,C(a);case 4:n=e.sent,P(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=t(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x.loading=!0,t={page:x.pagination.listQuery.page,page_size:x.pagination.listQuery.limit},x.useData.attribute_provider&&(t.attribute_provider=x.useData.attribute_provider),x.useData.platform&&(t.platform=x.useData.platform),x.useData.package_name&&(t.pkg_name=x.useData.package_name),x.useData.channel&&(t.channel=x.useData.channel),x.useData.id&&(t.offer_id=x.useData.id),x.useData.offer_title&&(t.title=x.useData.offer_title),x.useData.country&&(t.country=x.useData.country),x.useData.pid&&(t.tracking_link=x.useData.pid),e.next=12,A(t);case 12:a=e.sent,n=a.data,x.list=null==n?void 0:n.data,x.pagination.total=Number(n.count),x.loading=!1;case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o((function(){k()})),function(e,t){var a=u("el-button"),n=u("router-link"),r=u("el-option"),l=u("el-select"),o=u("el-form-item"),F=u("el-input"),A=u("el-form"),U=u("el-table-column"),j=u("el-switch"),C=u("el-table"),P=i("loading");return y(),c("div",null,[d("div",Q,[d("div",R,[s(" <el-button type=\"primary\" @click='createFun'>Offer Create</el-button> "),f(n,{to:"/buzz/create"},{default:p((function(){return[f(a,{type:"primary"},{default:p((function(){return[I]})),_:1})]})),_:1})]),f(A,{inline:!0,modelValue:m(x).searchForm,"onUpdate:modelValue":t[8]||(t[8]=function(e){return m(x).searchForm=e}),class:"flex jc-between w100 ai-end"},{default:p((function(){return[d("div",N,[f(o,{label:""},{default:p((function(){return[f(l,{modelValue:m(x).searchForm.attribute_provider,"onUpdate:modelValue":t[0]||(t[0]=function(e){return m(x).searchForm.attribute_provider=e}),clearable:"",class:"search-con",placeholder:"Attribute Provider",style:{"min-width":"140px"}},{default:p((function(){return[(y(!0),c(_,null,g(m(x).options.attribute_provider,(function(e){return y(),h(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),f(o,{label:""},{default:p((function(){return[f(l,{modelValue:m(x).searchForm.platform,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m(x).searchForm.platform=e}),clearable:"",class:"search-con",placeholder:"Platform",style:{"min-width":"95px"}},{default:p((function(){return[(y(!0),c(_,null,g(m(x).options.platform,(function(e){return y(),h(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),f(o,{label:""},{default:p((function(){return[f(F,{placeholder:"Package Name",modelValue:m(x).searchForm.package_name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return m(x).searchForm.package_name=e}),class:"search-con",style:{"min-width":"120px"}},null,8,["modelValue"])]})),_:1}),f(o,{label:""},{default:p((function(){return[f(F,{placeholder:"Channel",modelValue:m(x).searchForm.channel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return m(x).searchForm.channel=e}),class:"search-con",style:{"min-width":"80px"}},null,8,["modelValue"])]})),_:1}),f(o,{label:""},{default:p((function(){return[f(F,{placeholder:"ID",modelValue:m(x).searchForm.id,"onUpdate:modelValue":t[4]||(t[4]=function(e){return m(x).searchForm.id=e}),class:"search-con"},null,8,["modelValue"])]})),_:1}),f(o,{label:""},{default:p((function(){return[f(F,{placeholder:"Offer Title",modelValue:m(x).searchForm.offer_title,"onUpdate:modelValue":t[5]||(t[5]=function(e){return m(x).searchForm.offer_title=e}),class:"search-con",style:{"min-width":"90px"}},null,8,["modelValue"])]})),_:1}),f(o,{label:""},{default:p((function(){return[f(F,{placeholder:"Country",modelValue:m(x).searchForm.country,"onUpdate:modelValue":t[6]||(t[6]=function(e){return m(x).searchForm.country=e}),class:"search-con",style:{"min-width":"80px"}},null,8,["modelValue"])]})),_:1}),f(o,{label:""},{default:p((function(){return[f(F,{placeholder:"Pid",modelValue:m(x).searchForm.pid,"onUpdate:modelValue":t[7]||(t[7]=function(e){return m(x).searchForm.pid=e}),class:"search-con"},null,8,["modelValue"])]})),_:1})]),d("div",B,[f(o,{class:"mr-0",style:{"margin-right":"0px"}},{default:p((function(){return[d("div",M,[f(a,{type:"primary",onClick:k},{default:p((function(){return[T]})),_:1}),s(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])]})),_:1})])]})),_:1},8,["modelValue"]),s(' <el-input placeholder="请输入内容" v-model="data.searchForm.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> ')]),s(" table "),v((y(),h(C,{center:"",data:m(x).list,style:{width:"100%"},border:""},{default:p((function(){return[f(U,{prop:"offer_id",label:"ID"}),f(U,{prop:"channel",label:"Channel"}),f(U,{prop:"pkg_name",label:"Package Name"}),f(U,{prop:"title",label:"Offer Title",width:"120"}),f(U,{prop:"attribute_provider",label:"Attribute Provider"}),f(U,{prop:"pid",label:"Pid"}),f(U,{prop:"platform",label:"Platform"},{default:p((function(e){return[w(V(1===Number(e.row.platform)?"Android":"iOS"),1)]})),_:1}),f(U,{prop:"country",label:"Country"}),f(U,{prop:"payout",label:"Payout"}),f(U,{label:"Click Limitation(w)",width:"150"},{default:p((function(e){return[d("div",L,[f(F,{modelValue:e.row.max_clk_num,"onUpdate:modelValue":function(t){return e.row.max_clk_num=t},placeholder:"",type:"number"},null,8,["modelValue","onUpdate:modelValue"]),f(a,{class:"cp ml-10",type:"primary",icon:"Edit",circle:"",onClick:function(t){return O(e.row)}},null,8,["onClick"])])]})),_:1}),f(U,{label:"Device Cutoff",width:"250"},{default:p((function(e){return[d("div",q,[d("div",null,[d("div",null,[f(l,{class:"cutoff",modelValue:e.row.cutoff_start,"onUpdate:modelValue":function(t){return e.row.cutoff_start=t},filterable:"",placeholder:"start"},{default:p((function(){return[(y(!0),c(_,null,g(m(x).options.cutoff_start,(function(e){return y(),h(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"]),H,f(l,{class:"cutoff",modelValue:e.row.cutoff_end,"onUpdate:modelValue":function(t){return e.row.cutoff_end=t},filterable:"",placeholder:"end"},{default:p((function(){return[(y(!0),c(_,null,g(m(x).options.cutoff_end,(function(e){return y(),h(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]),d("div",$,[d("span",null,V((t=e.row,n=(t.cutoff_end-t.cutoff_start)*t.device_num,n?n.toFixed(0):"")),1)])]),f(a,{class:"cp ml-10",type:"primary",icon:"Edit",circle:"",onClick:function(t){return E(e.row)}},null,8,["onClick"])])];var t,n})),_:1}),f(U,{width:"100",label:"Operation"},{default:p((function(e){return[d("div",G,[f(n,{to:(t=e.row,r=t.id,"/buzz/edit/".concat(r))},{default:p((function(){return[f(a,{class:"cp mr-10",type:"primary",icon:"Edit",circle:""})]})),_:2},1032,["to"]),s(" <el-button class='cp mr-10' type=\"primary\" icon=\"Edit\" circle @click='editFun(scope.row)'></el-button> "),f(j,{modelValue:e.row.status,"onUpdate:modelValue":function(t){return e.row.status=t},"active-value":1,"inactive-value":2,onChange:function(t){return K(e.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])];var t,r})),_:1})]})),_:1},8,["data"])),[[P,m(x).loading]]),s(" 分页 "),d("div",J,[v(f(m(D),{total:m(x).pagination.total,"page-sizes":m(x).pagination.pageSizes,page:m(x).pagination.listQuery.page,"onUpdate:page":t[9]||(t[9]=function(e){return m(x).pagination.listQuery.page=e}),limit:m(x).pagination.listQuery.limit,"onUpdate:limit":t[10]||(t[10]=function(e){return m(x).pagination.listQuery.limit=e}),onPagination:W},null,8,["total","page-sizes","page","limit"]),[[b,m(x).pagination.total]])])])}}});e("default",O(K,[["__scopeId","data-v-29c9e5d6"]]))}}}))}();
