!function(){function e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t,a,n,r,l,u){try{var o=e[l](u),i=o.value}catch(c){return void a(c)}o.done?t(i):Promise.resolve(i).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,l){var u=e.apply(t,a);function o(e){n(u,r,l,o,i,"next",e)}function i(e){n(u,r,l,o,i,"throw",e)}o(void 0)}))}}var l=document.createElement("style");l.innerHTML=".scale-button[data-v-ec68c14e]{transform:scale(.7)}.input-with-select[data-v-ec68c14e]{width:60px}\n",document.head.appendChild(l),System.register(["./vendor-legacy-b58ffb73.js","./fenix-legacy-efd86663.js","./index-legacy-72844a31.js","./moment-legacy-905ec324.js","./message-legacy-95711ee6.js","./new-format-legacy-1c194944.js","./index-legacy-d6f8c4dc.js"],(function(e){"use strict";var a,n,l,u,o,i,c,s,d,f,p,v,m,b,h,g,_,w,y,V,D,x,k,O,C,j,P,U,R,S,A,Q,E,I,N,T,z,B,F;return{setters:[function(e){a=e.d,n=e.y,l=e.w,u=e.B,o=e.r,i=e.o,c=e.i,s=e.v,d=e.f,f=e.h,p=e.N,v=e.a,m=e.ak,b=e.e,h=e.al,g=e.s,_=e.g,w=e.P,y=e.Q,V=e.aa,D=e.F,x=e.j,k=e.t,O=e.x,C=e.c},function(e){j=e.g,P=e.h,U=e.i,R=e.j,S=e.k,A=e.l,Q=e.m,E=e.n,I=e.o},function(e){N=e.P},function(e){T=e.h},function(e){z=e.m},function(e){B=e.h},function(e){F=e._}],execute:function(){var M=a({props:{busData:{require:!0,default:function(){return{}},type:Object}},setup:function(e){var t=e,a=n({tableData:[{}]}),p=function(){var e=r(regeneratorRuntime.mark((function e(){var n,r,l,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={offer_id:t.busData.offer.offer_id},a.tableData=[],e.next=4,j(n);case 4:r=e.sent,l=r.data,u=l.sort((function(e,t){return Number(T(e.date,T.ISO_8601).format("X"))-Number(T(t.date,T.ISO_8601).format("X"))})),a.tableData=u;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l((function(){return t.busData.offer.offer_id}),(function(e,t){}),{immediate:!0}),u((function(){t.busData,p()})),function(e,t){var n=o("el-table-column"),r=o("el-table");return i(),c("div",null,[s(r,{data:f(a).tableData,style:{width:"100%"},border:""},{default:d((function(){return[s(n,{fixed:"",prop:"date",label:"Date",align:"center"}),s(n,{fixed:"",prop:"record",label:"Record",align:"center"}),s(n,{fixed:"",prop:"email",label:"User",align:"center"})]})),_:1},8,["data"])])}}}),X={class:"control-box w100 mb-10"},Z={class:"mb-10"},q=O("Offer Create"),H={class:"flex jc-start flex-wrap w100"},J={class:"flex"},K={class:"flex"},L=O("查询"),$={class:"body-box mt-10"},G={class:"flex"},W={key:0},Y=O(" . "),ee=O(" . "),te=O(" . "),ae={class:"flex"},ne={class:"w100 flex"},re=a({setup:function(e){p(),v(!0);var a=v(!1);v(!1);var l=n({searchData:{adv_status:void 0,status:void 0,cvr_status:void 0,platform:void 0,attribute_provider:"",pub_name:"",offer_id:"",adv_offer:"",pkg:"",title:"",channel:"",country:"",channel_type:void 0},tableData:[],options:{status:[{value:1,label:"开"},{value:2,label:"关"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}],pub:[{id:"",pub_name:""}],channel_type:[{value:"1",label:"BUZZ"},{value:"2",label:"SDK"}],dailyCapCount:{},cvr:{}},pagination:{pageSizes:["20","50","100","500","1000"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}),O=n({});m(l,"tableData");var j=function(){var e=r(regeneratorRuntime.mark((function e(t){var a,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.row,n={id:a.id,status:a.status},e.next=5,U(n);case 5:r=e.sent,z(r)||(a.status=1===a.status?2:1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=r(regeneratorRuntime.mark((function e(t){var a,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.row,n={id:a.id,cvr_status:a.cvr_status},n=B(n),e.next=5,R(n);case 5:r=e.sent,z(r)||(a.cvr_status=1===a.cvr_status?2:1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=r(regeneratorRuntime.mark((function e(t){var a,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.row,n={id:a.id,target_cvr:a.target_cvr},n=B(n),e.next=5,S(n);case 5:r=e.sent,z(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=r(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,a=t.data,l.options.pub=a;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=r(regeneratorRuntime.mark((function e(){var t,a,n,r,u,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:for(r in t=e.sent,a=t.data,n={},a)Object.prototype.hasOwnProperty.call(a,r)&&(u=a[r],o=u.split("_"),i={click_w:o[0],installs:o[1],cvr_w:o[2]},n[r]=i);l.options.cvr=n;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=r(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,a=t.data,l.options.dailyCapCount=a;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=r(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([re(),ue(),le()]));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=r(regeneratorRuntime.mark((function e(){var a,n,r,u,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r in a={page:l.pagination.listQuery.page,limit:l.pagination.listQuery.limit},n=t({},l.searchData))Object.prototype.hasOwnProperty.call(n,r)&&(u=n[r])&&(a[r]=u);return e.next=5,P(a);case 5:o=e.sent,l.tableData=o.data.data,l.pagination.total=o.data.paging.count;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){ie()},se=function(){var e=r(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.row,e.next=3,I(a.id);case 3:n=e.sent,z(n)&&l.tableData.splice(t.$index,1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(e,t){var a;a="".concat(e.offer_id,"_").concat(t.slotid);var n=l.options.dailyCapCount[a];return n?": ".concat(n):""};b((function(){})),u((function(){oe(),ie(),window.onpopstate=function(){}})),h((function(){}));return function(e,t){var n=o("el-button"),r=o("router-link"),u=o("el-option"),p=o("el-select"),v=o("el-form-item"),m=o("el-input"),b=o("el-form"),h=o("el-table-column"),P=o("el-switch"),U=o("el-popconfirm"),R=o("el-table"),S=o("el-dialog");return i(),c("div",null,[g("div",X,[g("div",Z,[s(r,{to:"/fenix/offer/create"},{default:d((function(){return[s(n,{type:"primary"},{default:d((function(){return[q]})),_:1})]})),_:1})]),s(b,{inline:!0,modelValue:f(l).searchData,"onUpdate:modelValue":t[12]||(t[12]=function(e){return f(l).searchData=e}),class:"flex jc-between w100 ai-end"},{default:d((function(){return[g("div",H,[s(v,{label:""},{default:d((function(){return[s(p,{modelValue:f(l).searchData.adv_status,"onUpdate:modelValue":t[0]||(t[0]=function(e){return f(l).searchData.adv_status=e}),clearable:"",class:"search-con",placeholder:"Adv Status"},{default:d((function(){return[(i(!0),c(D,null,x(f(l).options.status,(function(e){return i(),C(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(p,{modelValue:f(l).searchData.status,"onUpdate:modelValue":t[1]||(t[1]=function(e){return f(l).searchData.status=e}),clearable:"",class:"search-con",placeholder:"Status"},{default:d((function(){return[(i(!0),c(D,null,x(f(l).options.status,(function(e){return i(),C(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),_(' <el-form-item label="">\n            <el-select v-model="state.searchData.cvr_status" clearable class="search-con" placeholder="Cvr Status">\n              <el-option\n                v-for="item in state.options.status"\n                :key="item.value"\n                :label="item.label"\n                :value="item.value"\n              />\n            </el-select>\n          </el-form-item> '),s(v,{label:""},{default:d((function(){return[s(p,{modelValue:f(l).searchData.platform,"onUpdate:modelValue":t[2]||(t[2]=function(e){return f(l).searchData.platform=e}),clearable:"",class:"search-con",placeholder:"Platform"},{default:d((function(){return[(i(!0),c(D,null,x(f(l).options.platform,(function(e){return i(),C(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(p,{modelValue:f(l).searchData.attribute_provider,"onUpdate:modelValue":t[3]||(t[3]=function(e){return f(l).searchData.attribute_provider=e}),clearable:"",class:"search-con",placeholder:"Attribute Provider"},{default:d((function(){return[(i(!0),c(D,null,x(f(l).options.attribute_provider,(function(e){return i(),C(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(p,{modelValue:f(l).searchData.pub_name,"onUpdate:modelValue":t[4]||(t[4]=function(e){return f(l).searchData.pub_name=e}),clearable:"",class:"search-con",placeholder:"Pub Name"},{default:d((function(){return[(i(!0),c(D,null,x(f(l).options.pub,(function(e){return i(),C(u,{key:e.id,label:e.pub_name,value:e.pub_name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(m,{placeholder:"Offer ID",modelValue:f(l).searchData.offer_id,"onUpdate:modelValue":t[5]||(t[5]=function(e){return f(l).searchData.offer_id=e}),class:"search-con"},null,8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(m,{placeholder:"Adv Offer",modelValue:f(l).searchData.adv_offer,"onUpdate:modelValue":t[6]||(t[6]=function(e){return f(l).searchData.adv_offer=e}),class:"search-con"},null,8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(m,{placeholder:"Pachage Name",modelValue:f(l).searchData.pkg,"onUpdate:modelValue":t[7]||(t[7]=function(e){return f(l).searchData.pkg=e}),class:"search-con"},null,8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(m,{placeholder:"Offer Title",modelValue:f(l).searchData.title,"onUpdate:modelValue":t[8]||(t[8]=function(e){return f(l).searchData.title=e}),class:"search-con"},null,8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(m,{placeholder:"Channel",modelValue:f(l).searchData.channel,"onUpdate:modelValue":t[9]||(t[9]=function(e){return f(l).searchData.channel=e}),class:"search-con"},null,8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(m,{placeholder:"Country",modelValue:f(l).searchData.country,"onUpdate:modelValue":t[10]||(t[10]=function(e){return f(l).searchData.country=e}),class:"search-con"},null,8,["modelValue"])]})),_:1}),s(v,{label:""},{default:d((function(){return[s(p,{modelValue:f(l).searchData.channel_type,"onUpdate:modelValue":t[11]||(t[11]=function(e){return f(l).searchData.channel_type=e}),clearable:"",class:"search-con",placeholder:"Channel Type"},{default:d((function(){return[(i(!0),c(D,null,x(f(l).options.channel_type,(function(e){return i(),C(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]),g("div",J,[s(v,{class:"mr-0",style:{"margin-right":"0px"}},{default:d((function(){return[g("div",K,[s(n,{type:"primary",onClick:ce},{default:d((function(){return[L]})),_:1}),_(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])]})),_:1})])]})),_:1},8,["modelValue"]),_(' <el-input placeholder="请输入内容" v-model="searchData.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> ')]),_(" table "),g("div",$,[s(R,{data:f(l).tableData,height:"600",style:{width:"100%"},border:""},{default:d((function(){return[s(h,{fixed:"",prop:"offer_id",label:"Offer ID",align:"center",width:"60"}),s(h,{fixed:"",prop:"adv_offer",label:"Adv Offer",align:"center",width:"87"}),s(h,{fixed:"",prop:"channel",label:"Channel",align:"center",width:"42"}),s(h,{prop:"revenue",label:"Revenue",align:"center",width:"45"}),s(h,{prop:"pkg",label:"Package Name",align:"center",width:"100"}),s(h,{prop:"title",label:"Offer Title",align:"center",width:"90"}),s(h,{prop:"pid",label:"Pid",align:"center",width:"77"}),s(h,{prop:"country",label:"Country",align:"center",width:"40"}),s(h,{label:"Adv Status",align:"center",width:"47"},{default:d((function(e){return[g("div",null,[g("span",null,k(1===e.row.adv_status?"开":"关"),1)])]})),_:1}),s(h,{prop:"offer_id",label:"Click*w",align:"center",width:"55"},{default:d((function(e){var t;return[g("div",null,[g("span",null,k(null===(t=f(l).options.cvr[e.row.offer_id])||void 0===t?void 0:t.click_w),1)])]})),_:1}),s(h,{prop:"offer_id",label:"Installs",align:"center",width:"50"},{default:d((function(e){var t;return[g("div",null,[g("span",null,k(null===(t=f(l).options.cvr[e.row.offer_id])||void 0===t?void 0:t.installs),1)])]})),_:1}),s(h,{prop:"offer_id",label:"Cvr*w",align:"center",width:"48"},{default:d((function(e){var t;return[g("div",null,[g("span",null,k(null===(t=f(l).options.cvr[e.row.offer_id])||void 0===t?void 0:t.cvr_w),1)])]})),_:1}),s(h,{label:"Target Cvr*w",align:"center",width:"150"},{default:d((function(e){return[g("div",G,[s(m,{modelValue:e.row.target_cvr,"onUpdate:modelValue":function(t){return e.row.target_cvr=t},placeholder:"Please input",class:"input-with-select mr-5"},null,8,["modelValue","onUpdate:modelValue"]),s(n,{class:"mr-5 scale-button",type:"default",icon:"Edit",circle:"",onClick:function(t){return F(e)}},null,8,["onClick"]),s(P,{class:"scale-button",modelValue:e.row.cvr_status,"onUpdate:modelValue":function(t){return e.row.cvr_status=t},"active-value":1,"inactive-value":2,onChange:function(t){return T(e)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])]})),_:1}),s(h,{label:"Traffic Data",align:"left",width:"200"},{default:d((function(e){return[e.row.traffic?(i(),c("div",W,[(i(!0),c(D,null,x(JSON.parse(e.row.traffic),(function(t){return i(),c("div",{key:t},[g("div",null,[g("span",null,k(1===t.pub_status?"开":"关"),1),Y,g("span",null,k(t.pub),1),ee,g("span",null,k(t.payout),1),te,g("span",null,k(t.cap_daily),1),g("span",null,k(de(e.row,t)),1)])])})),128))])):_("v-if",!0)]})),_:1}),s(h,{label:"Operation",align:"center",width:"130"},{default:d((function(e){return[s(r,{to:(t=e,a=t.row.id,"/fenix/offer/edit/".concat(a))},{default:d((function(){return[s(n,{class:"cp mr-5",type:"primary",icon:"Edit",circle:""})]})),_:2},1032,["to"]),s(P,{modelValue:e.row.status,"onUpdate:modelValue":function(t){return e.row.status=t},"active-value":1,"inactive-value":2,class:"mr-5",onChange:function(t){return j(e)}},null,8,["modelValue","onUpdate:modelValue","onChange"]),s(U,{title:"删除后无法再生成该Offer ID，请谨慎操作！",onConfirm:function(t){return se(e)}},{reference:d((function(){return[s(n,{type:"danger",icon:"Delete",circle:""})]})),_:2},1032,["onConfirm"])];var t,a})),_:1}),s(h,{label:"Platform",align:"center",width:"55"},{default:d((function(e){return[g("div",null,[g("span",null,k(1===e.row.platform?"Android":"iOS"),1)])]})),_:1}),s(h,{prop:"attribute_provider",label:"Attribute Provider",align:"center",width:"80"}),s(h,{label:"Record",align:"center",width:"52"},{default:d((function(e){var t=e.row;return[s(n,{class:"scale-button",icon:"View",onClick:function(e){return function(e){O.offer=e,a.value=!0}(t)},circle:""},null,8,["onClick"])]})),_:1}),s(h,{label:"Comment",align:"center",width:"150"},{default:d((function(e){return[g("div",ae,[s(m,{modelValue:e.row.description,"onUpdate:modelValue":function(t){return e.row.description=t},placeholder:"Please input",class:"input-with-select mr-5"},null,8,["modelValue","onUpdate:modelValue"]),s(n,{class:"scale-button",type:"default",icon:"Edit",circle:""})])]})),_:1})]})),_:1},8,["data"])]),_(" 分页 "),g("div",ne,[w(s(f(N),{total:f(l).pagination.total,"page-sizes":f(l).pagination.pageSizes,page:f(l).pagination.listQuery.page,"onUpdate:page":t[13]||(t[13]=function(e){return f(l).pagination.listQuery.page=e}),limit:f(l).pagination.listQuery.limit,"onUpdate:limit":t[14]||(t[14]=function(e){return f(l).pagination.listQuery.limit=e}),onPagination:ie},null,8,["total","page-sizes","page","limit"]),[[y,f(l).pagination.total]])]),_(" record "),s(S,{title:"日志",width:"80%",modelValue:f(a),"onUpdate:modelValue":t[16]||(t[16]=function(e){return V(a)?a.value=e:a=e}),"destroy-on-close":""},{default:d((function(){return[s(M,{modelValue:f(a),"onUpdate:modelValue":t[15]||(t[15]=function(e){return V(a)?a.value=e:a=e}),busData:f(O)},null,8,["modelValue","busData"])]})),_:1},8,["modelValue"])])}}});e("default",F(re,[["__scopeId","data-v-ec68c14e"]]))}}}))}();
