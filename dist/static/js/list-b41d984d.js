var a=Object.defineProperty,e=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(e,l,t)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t;import{d as n,N as r,a as s,y as i,ak as u,e as c,B as d,al as p,r as m,i as f,s as b,v,f as h,h as _,g,P as y,Q as w,o as V,F as D,j as C,t as k,x as U,c as x}from"./vendor-691ef2b9.js";import{g as O,h as P,i as j,j as S,k as A,l as Q,m as I}from"./fenix-54836b83.js";import{P as E}from"./index-3a8d4c16.js";import{m as N}from"./message-00de5233.js";import{h as T}from"./new-format-e267a6f6.js";import{_ as $}from"./index-a57df953.js";const z={class:"control-box w100 mb-10"},B={class:"mb-10"},F=U("Offer Create"),M={class:"flex jc-start flex-wrap w100"},R={class:"flex"},Z={class:"flex"},J=U("查询"),K={class:"body-box mt-10"},q={class:"flex"},G={key:0},H=U(" . "),L=U(" . "),W=U(" . "),X={class:"flex"},Y={class:"w100 flex"};var aa=$(n({setup(a){r(),s(!0),s(!1);const n=i({searchData:{adv_status:void 0,status:void 0,cvr_status:void 0,platform:void 0,attribute_provider:"",pub_name:"",offer_id:"",adv_offer:"",pkg:"",title:"",channel:"",country:"",channel_type:void 0},tableData:[],options:{status:[{value:1,label:"开"},{value:2,label:"关"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}],pub:[{id:"",pub_name:""}],channel_type:[{value:"1",label:"BUZZ"},{value:"2",label:"SDK"}],dailyCapCount:{}},pagination:{pageSizes:["20","50","100","500","1000"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});u(n,"tableData");const U=({row:a})=>`/fenix/offer/edit/${a.id}`,$=async()=>{const{data:a}=await A();n.options.pub=a},aa=async()=>{const{data:a}=await Q();n.options.dailyCapCount=a},ea=async()=>{let a={page:n.pagination.listQuery.page,limit:n.pagination.listQuery.limit};const r=((a,n)=>{for(var r in n||(n={}))l.call(n,r)&&o(a,r,n[r]);if(e)for(var r of e(n))t.call(n,r)&&o(a,r,n[r]);return a})({},n.searchData);for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e)){const l=r[e];l&&(a[e]=l)}const s=await O(a);n.tableData=s.data.data,n.pagination.total=s.data.paging.count},la=()=>{ea()},ta=(a,e)=>{let l="";l=`${a.offer_id}_${e.slotid}`;const t=n.options.dailyCapCount[l];return t?`: ${t}`:""};return c((()=>{})),d((()=>{(async()=>{Promise.all([$(),aa()])})(),ea(),window.onpopstate=()=>{}})),p((()=>{})),(a,e)=>{const l=m("el-button"),t=m("router-link"),o=m("el-option"),r=m("el-select"),s=m("el-form-item"),i=m("el-input"),u=m("el-form"),c=m("el-table-column"),d=m("el-switch"),p=m("el-popconfirm"),O=m("el-table");return V(),f("div",null,[b("div",z,[b("div",B,[v(t,{to:"/fenix/offer/create"},{default:h((()=>[v(l,{type:"primary"},{default:h((()=>[F])),_:1})])),_:1})]),v(u,{inline:!0,modelValue:_(n).searchData,"onUpdate:modelValue":e[12]||(e[12]=a=>_(n).searchData=a),class:"flex jc-between w100 ai-end"},{default:h((()=>[b("div",M,[v(s,{label:""},{default:h((()=>[v(r,{modelValue:_(n).searchData.adv_status,"onUpdate:modelValue":e[0]||(e[0]=a=>_(n).searchData.adv_status=a),clearable:"",class:"search-con",placeholder:"Adv Status"},{default:h((()=>[(V(!0),f(D,null,C(_(n).options.status,(a=>(V(),x(o,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(r,{modelValue:_(n).searchData.status,"onUpdate:modelValue":e[1]||(e[1]=a=>_(n).searchData.status=a),clearable:"",class:"search-con",placeholder:"Status"},{default:h((()=>[(V(!0),f(D,null,C(_(n).options.status,(a=>(V(),x(o,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),g(' <el-form-item label="">\n            <el-select v-model="state.searchData.cvr_status" clearable class="search-con" placeholder="Cvr Status">\n              <el-option\n                v-for="item in state.options.status"\n                :key="item.value"\n                :label="item.label"\n                :value="item.value"\n              />\n            </el-select>\n          </el-form-item> '),v(s,{label:""},{default:h((()=>[v(r,{modelValue:_(n).searchData.platform,"onUpdate:modelValue":e[2]||(e[2]=a=>_(n).searchData.platform=a),clearable:"",class:"search-con",placeholder:"Platform"},{default:h((()=>[(V(!0),f(D,null,C(_(n).options.platform,(a=>(V(),x(o,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(r,{modelValue:_(n).searchData.attribute_provider,"onUpdate:modelValue":e[3]||(e[3]=a=>_(n).searchData.attribute_provider=a),clearable:"",class:"search-con",placeholder:"Attribute Provider"},{default:h((()=>[(V(!0),f(D,null,C(_(n).options.attribute_provider,(a=>(V(),x(o,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(r,{modelValue:_(n).searchData.pub_name,"onUpdate:modelValue":e[4]||(e[4]=a=>_(n).searchData.pub_name=a),clearable:"",class:"search-con",placeholder:"Pub Name"},{default:h((()=>[(V(!0),f(D,null,C(_(n).options.pub,(a=>(V(),x(o,{key:a.id,label:a.pub_name,value:a.pub_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(i,{placeholder:"Offer ID",modelValue:_(n).searchData.offer_id,"onUpdate:modelValue":e[5]||(e[5]=a=>_(n).searchData.offer_id=a),class:"search-con"},null,8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(i,{placeholder:"Adv Offer",modelValue:_(n).searchData.adv_offer,"onUpdate:modelValue":e[6]||(e[6]=a=>_(n).searchData.adv_offer=a),class:"search-con"},null,8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(i,{placeholder:"Pachage Name",modelValue:_(n).searchData.pkg,"onUpdate:modelValue":e[7]||(e[7]=a=>_(n).searchData.pkg=a),class:"search-con"},null,8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(i,{placeholder:"Offer Title",modelValue:_(n).searchData.title,"onUpdate:modelValue":e[8]||(e[8]=a=>_(n).searchData.title=a),class:"search-con"},null,8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(i,{placeholder:"Channel",modelValue:_(n).searchData.channel,"onUpdate:modelValue":e[9]||(e[9]=a=>_(n).searchData.channel=a),class:"search-con"},null,8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(i,{placeholder:"Country",modelValue:_(n).searchData.country,"onUpdate:modelValue":e[10]||(e[10]=a=>_(n).searchData.country=a),class:"search-con"},null,8,["modelValue"])])),_:1}),v(s,{label:""},{default:h((()=>[v(r,{modelValue:_(n).searchData.channel_type,"onUpdate:modelValue":e[11]||(e[11]=a=>_(n).searchData.channel_type=a),clearable:"",class:"search-con",placeholder:"Channel Type"},{default:h((()=>[(V(!0),f(D,null,C(_(n).options.channel_type,(a=>(V(),x(o,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),b("div",R,[v(s,{class:"mr-0",style:{"margin-right":"0px"}},{default:h((()=>[b("div",Z,[v(l,{type:"primary",onClick:la},{default:h((()=>[J])),_:1}),g(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),g(' <el-input placeholder="请输入内容" v-model="searchData.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> ')]),g(" table "),b("div",K,[v(O,{data:_(n).tableData,height:"600",style:{width:"100%"},border:""},{default:h((()=>[v(c,{fixed:"",prop:"offer_id",label:"Offer ID",align:"center",width:"60"}),v(c,{fixed:"",prop:"adv_offer",label:"Adv Offer",align:"center",width:"87"}),v(c,{fixed:"",prop:"channel",label:"Channel",align:"center",width:"42"}),v(c,{prop:"revenue",label:"Revenue",align:"center",width:"45"}),v(c,{prop:"pkg",label:"Package Name",align:"center",width:"100"}),v(c,{prop:"title",label:"Offer Title",align:"center",width:"90"}),v(c,{prop:"pid",label:"Pid",align:"center",width:"77"}),v(c,{prop:"country",label:"Country",align:"center",width:"40"}),v(c,{label:"Adv Status",align:"center",width:"47"},{default:h((a=>[b("div",null,[b("span",null,k(1===a.row.adv_status?"开":"关"),1)])])),_:1}),v(c,{prop:"click_w",label:"Click*w",align:"center",width:"55"}),v(c,{prop:"installs",label:"Installs",align:"center",width:"50"}),v(c,{prop:"cvr_w",label:"Cvr*w",align:"center",width:"48"}),v(c,{label:"Target Cvr*w",align:"center",width:"150"},{default:h((a=>[b("div",q,[v(i,{modelValue:a.row.target_cvr,"onUpdate:modelValue":e=>a.row.target_cvr=e,placeholder:"Please input",class:"input-with-select mr-5"},null,8,["modelValue","onUpdate:modelValue"]),v(l,{class:"mr-5 scale-button",type:"default",icon:"Edit",circle:"",onClick:e=>(async({row:a})=>{let e={id:a.id,target_cvr:a.target_cvr};e=T(e);const l=await S(e);N(l)})(a)},null,8,["onClick"]),v(d,{class:"scale-button",modelValue:a.row.cvr_status,"onUpdate:modelValue":e=>a.row.cvr_status=e,"active-value":1,"inactive-value":2,onChange:e=>(async({row:a})=>{let e={id:a.id,cvr_status:a.cvr_status};e=T(e);const l=await j(e);N(l)||(a.cvr_status=1===a.cvr_status?2:1)})(a)},null,8,["modelValue","onUpdate:modelValue","onChange"])])])),_:1}),v(c,{label:"Traffic Data",align:"left",width:"200"},{default:h((a=>[a.row.traffic?(V(),f("div",G,[(V(!0),f(D,null,C(JSON.parse(a.row.traffic),(e=>(V(),f("div",{key:e},[b("div",null,[b("span",null,k(1===e.pub_status?"开":"关"),1),H,b("span",null,k(e.pub),1),L,b("span",null,k(e.payout),1),W,b("span",null,k(e.cap_daily),1),b("span",null,k(ta(a.row,e)),1)])])))),128))])):g("v-if",!0)])),_:1}),v(c,{label:"Operation",align:"center",width:"130"},{default:h((a=>[v(t,{to:U(a)},{default:h((()=>[v(l,{class:"cp mr-5",type:"primary",icon:"Edit",circle:""})])),_:2},1032,["to"]),v(d,{modelValue:a.row.status,"onUpdate:modelValue":e=>a.row.status=e,"active-value":1,"inactive-value":2,class:"mr-5",onChange:e=>(async({row:a})=>{const e={id:a.id,status:a.status},l=await P(e);N(l)||(a.status=1===a.status?2:1)})(a)},null,8,["modelValue","onUpdate:modelValue","onChange"]),v(p,{title:"删除后无法再生成该Offer ID，请谨慎操作！",onConfirm:e=>(async a=>{const{row:e}=a,l=await I(e.id);N(l)&&n.tableData.splice(a.$index,1)})(a)},{reference:h((()=>[v(l,{type:"danger",icon:"Delete",circle:""})])),_:2},1032,["onConfirm"])])),_:1}),v(c,{label:"Platform",align:"center",width:"55"},{default:h((a=>[b("div",null,[b("span",null,k(1===a.row.platform?"Android":"iOS"),1)])])),_:1}),v(c,{prop:"attribute_provider",label:"Attribute Provider",align:"center",width:"80"}),v(c,{label:"Record",align:"center",width:"52"},{default:h((a=>[v(l,{class:"scale-button",icon:"View",circle:""})])),_:1}),v(c,{label:"Comment",align:"center",width:"150"},{default:h((a=>[b("div",X,[v(i,{modelValue:a.row.description,"onUpdate:modelValue":e=>a.row.description=e,placeholder:"Please input",class:"input-with-select mr-5"},null,8,["modelValue","onUpdate:modelValue"]),v(l,{class:"scale-button",type:"default",icon:"Edit",circle:""})])])),_:1})])),_:1},8,["data"])]),g(" 分页 "),b("div",Y,[y(v(_(E),{total:_(n).pagination.total,"page-sizes":_(n).pagination.pageSizes,page:_(n).pagination.listQuery.page,"onUpdate:page":e[13]||(e[13]=a=>_(n).pagination.listQuery.page=a),limit:_(n).pagination.listQuery.limit,"onUpdate:limit":e[14]||(e[14]=a=>_(n).pagination.listQuery.limit=a),onPagination:ea},null,8,["total","page-sizes","page","limit"]),[[w,_(n).pagination.total]])])])}}}),[["__scopeId","data-v-ec68c14e"]]);export{aa as default};
