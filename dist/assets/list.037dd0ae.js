var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{d as n,a as r,z as s,aj as i,b as u,r as c,h as d,q as p,g as m,f as b,u as f,x as v,P as h,Q as _,o as g,F as y,i as V,t as w,y as D,c as x}from"./vendor.abf78dba.js";import{g as U,h as k,i as O,j as C}from"./fenix.0f4b9219.js";import{P}from"./index.fb38119c.js";import{m as j}from"./message.9010e90c.js";import"./index.624c4bbe.js";const S={class:"control-box w100 mb-10"},A={class:"mb-10"},Q=D("Offer Create"),z={class:"flex jc-start flex-wrap w100"},E={class:"flex"},T={class:"flex"},F=D("查询"),I={class:"body-box mt-10"},N={class:"flex"},B=D(". "),M=D(". "),R=D(". "),Z=D(": "),$=p("span",null,"cap_daily_cost",-1),q={class:"flex"},J={class:"w100 flex"},K=n({setup(e){r(!1);const n=s({searchData:{adv_status:void 0,status:void 0,cvr_status:void 0,platform:void 0,attribute_provider:"",pub_name:"",offer_id:"",adv_offer:"",pkg:"",title:"",channel:"",country:"",channel_type:void 0},tableData:[],options:{status:[{value:1,label:"开"},{value:2,label:"关"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}],pub:[{id:"",pub_name:""}],channel_type:[{value:"1",label:"BUZZ"},{value:"2",label:"SDK"}]},pagination:{pageSizes:["20","50","100","500","1000"],total:1,listQuery:{page:1,limit:100,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});i(n,"tableData");const D=({row:e})=>`/fenix/offer/edit/${e.id}`,K=async()=>{const{data:e}=await O();n.options.pub=e},G=async()=>{let e={page:n.pagination.listQuery.page,limit:n.pagination.listQuery.limit};const r=((e,n)=>{for(var r in n||(n={}))l.call(n,r)&&o(e,r,n[r]);if(a)for(var r of a(n))t.call(n,r)&&o(e,r,n[r]);return e})({},n.searchData);for(const a in r)if(Object.prototype.hasOwnProperty.call(r,a)){const l=r[a];l&&(e[a]=l)}const s=await U(e);n.tableData=s.data.data,n.pagination.total=s.data.paging.count},H=()=>{G()};return u((()=>{(async()=>{Promise.all([K()])})(),G()})),(e,a)=>{const l=c("el-button"),t=c("router-link"),o=c("el-option"),r=c("el-select"),s=c("el-form-item"),i=c("el-input"),u=c("el-form"),U=c("el-table-column"),O=c("el-switch"),K=c("el-table");return g(),d("div",null,[p("div",S,[p("div",A,[m(t,{to:"/fenix/offer/create"},{default:b((()=>[m(l,{type:"primary"},{default:b((()=>[Q])),_:1})])),_:1})]),m(u,{inline:!0,modelValue:f(n).searchData,"onUpdate:modelValue":a[12]||(a[12]=e=>f(n).searchData=e),class:"flex jc-between w100 ai-end"},{default:b((()=>[p("div",z,[m(s,{label:""},{default:b((()=>[m(r,{modelValue:f(n).searchData.adv_status,"onUpdate:modelValue":a[0]||(a[0]=e=>f(n).searchData.adv_status=e),clearable:"",class:"search-con",placeholder:"Adv Status"},{default:b((()=>[(g(!0),d(y,null,V(f(n).options.status,(e=>(g(),x(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(r,{modelValue:f(n).searchData.status,"onUpdate:modelValue":a[1]||(a[1]=e=>f(n).searchData.status=e),clearable:"",class:"search-con",placeholder:"Status"},{default:b((()=>[(g(!0),d(y,null,V(f(n).options.status,(e=>(g(),x(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(' <el-form-item label="">\n            <el-select v-model="state.searchData.cvr_status" clearable class="search-con" placeholder="Cvr Status">\n              <el-option\n                v-for="item in state.options.status"\n                :key="item.value"\n                :label="item.label"\n                :value="item.value"\n              />\n            </el-select>\n          </el-form-item> '),m(s,{label:""},{default:b((()=>[m(r,{modelValue:f(n).searchData.platform,"onUpdate:modelValue":a[2]||(a[2]=e=>f(n).searchData.platform=e),clearable:"",class:"search-con",placeholder:"Platform"},{default:b((()=>[(g(!0),d(y,null,V(f(n).options.platform,(e=>(g(),x(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(r,{modelValue:f(n).searchData.attribute_provider,"onUpdate:modelValue":a[3]||(a[3]=e=>f(n).searchData.attribute_provider=e),clearable:"",class:"search-con",placeholder:"Attribute Provider"},{default:b((()=>[(g(!0),d(y,null,V(f(n).options.attribute_provider,(e=>(g(),x(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(r,{modelValue:f(n).searchData.pub_name,"onUpdate:modelValue":a[4]||(a[4]=e=>f(n).searchData.pub_name=e),clearable:"",class:"search-con",placeholder:"Pub Name"},{default:b((()=>[(g(!0),d(y,null,V(f(n).options.pub,(e=>(g(),x(o,{key:e.id,label:e.pub_name,value:e.pub_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(i,{placeholder:"Offer ID",modelValue:f(n).searchData.offer_id,"onUpdate:modelValue":a[5]||(a[5]=e=>f(n).searchData.offer_id=e),class:"search-con"},null,8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(i,{placeholder:"Adv Offer",modelValue:f(n).searchData.adv_offer,"onUpdate:modelValue":a[6]||(a[6]=e=>f(n).searchData.adv_offer=e),class:"search-con"},null,8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(i,{placeholder:"Pachage Name",modelValue:f(n).searchData.pkg,"onUpdate:modelValue":a[7]||(a[7]=e=>f(n).searchData.pkg=e),class:"search-con"},null,8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(i,{placeholder:"Offer Title",modelValue:f(n).searchData.title,"onUpdate:modelValue":a[8]||(a[8]=e=>f(n).searchData.title=e),class:"search-con"},null,8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(i,{placeholder:"Channel",modelValue:f(n).searchData.channel,"onUpdate:modelValue":a[9]||(a[9]=e=>f(n).searchData.channel=e),class:"search-con"},null,8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(i,{placeholder:"Country",modelValue:f(n).searchData.country,"onUpdate:modelValue":a[10]||(a[10]=e=>f(n).searchData.country=e),class:"search-con"},null,8,["modelValue"])])),_:1}),m(s,{label:""},{default:b((()=>[m(r,{modelValue:f(n).searchData.channel_type,"onUpdate:modelValue":a[11]||(a[11]=e=>f(n).searchData.channel_type=e),clearable:"",class:"search-con",placeholder:"Channel Type"},{default:b((()=>[(g(!0),d(y,null,V(f(n).options.channel_type,(e=>(g(),x(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),p("div",E,[m(s,{class:"mr-0",style:{"margin-right":"0px"}},{default:b((()=>[p("div",T,[m(l,{type:"primary",onClick:H},{default:b((()=>[F])),_:1}),v(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),v(' <el-input placeholder="请输入内容" v-model="searchData.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> ')]),v(" table "),p("div",I,[m(K,{data:f(n).tableData,height:"600",style:{width:"100%"},border:""},{default:b((()=>[m(U,{fixed:"",prop:"offer_id",label:"Offer ID",align:"center"}),m(U,{fixed:"",prop:"adv_offer",label:"Adv Offer",align:"center"}),m(U,{fixed:"",prop:"channel",label:"Channel",align:"center"}),m(U,{prop:"attribute_provider",label:"Attribute Provider",align:"center"}),m(U,{prop:"pkg",label:"Package Name",align:"center"}),m(U,{prop:"title",label:"Offer Title",align:"center"}),m(U,{prop:"pid",label:"Pid",align:"center"}),m(U,{label:"Platform",align:"center"},{default:b((e=>[p("div",null,[p("span",null,w(1===e.row.platform?"Android":"iOS"),1)])])),_:1}),m(U,{prop:"country",label:"Country",align:"center"}),m(U,{prop:"revenue",label:"Revenue",align:"center"}),m(U,{label:"Adv Status",align:"center"},{default:b((e=>[p("div",null,[p("span",null,w(1===e.row.adv_status?"开":"关"),1)])])),_:1}),m(U,{prop:"click_w",label:"Click*w",align:"center"}),m(U,{prop:"installs",label:"Installs",align:"center"}),m(U,{prop:"cvr_w",label:"Cvr*w",align:"center"}),m(U,{label:"Target Cvr*w",align:"center",width:"180px"},{default:b((e=>[p("div",N,[m(i,{modelValue:e.row.target_cvr,"onUpdate:modelValue":a=>e.row.target_cvr=a,placeholder:"Please input",class:"input-with-select mr-10"},null,8,["modelValue","onUpdate:modelValue"]),m(l,{class:"mr-10",type:"primary",icon:"Edit",circle:""}),m(O,{modelValue:e.row.target_cvr_status,"onUpdate:modelValue":a=>e.row.target_cvr_status=a,"active-value":1,"inactive-value":2,onChange:a=>(async({row:e})=>{})(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])])),_:1}),m(U,{label:"Traffic Data",align:"center",width:"220px"},{default:b((e=>[e.row.traffic?(g(!0),d(y,{key:0},V(JSON.parse(e.row.traffic),(e=>(g(),d("div",null,[p("span",null,w(1===e.pub_status?"开":"关"),1),B,p("span",null,w(e.pub),1),M,p("span",null,w(e.payout),1),R,p("span",null,w(e.cap_daily),1),Z,$])))),256)):v("v-if",!0)])),_:1}),m(U,{label:"Operation",align:"center",width:"150px"},{default:b((e=>[m(t,{to:D(e)},{default:b((()=>[m(l,{class:"cp mr-10",type:"primary",icon:"Edit",circle:""})])),_:2},1032,["to"]),m(O,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":2,class:"mr-10",onChange:a=>(async({row:e})=>{const a={id:e.id,status:e.status},l=await k(a);j(l)||(e.status=1===e.status?2:1)})(e)},null,8,["modelValue","onUpdate:modelValue","onChange"]),m(l,{type:"danger",icon:"Delete",circle:"",onClick:a=>(async e=>{const{row:a}=e,l=await C(a.id);j(l)&&n.tableData.splice(e.$index,1)})(e)},null,8,["onClick"])])),_:1}),m(U,{label:"Record",align:"center"},{default:b((e=>[m(l,{icon:"View",circle:""})])),_:1}),m(U,{label:"Comment",align:"center",width:"150px"},{default:b((e=>[p("div",q,[m(i,{modelValue:e.row.description,"onUpdate:modelValue":a=>e.row.description=a,placeholder:"Please input",class:"input-with-select mr-10"},null,8,["modelValue","onUpdate:modelValue"]),m(l,{type:"primary",icon:"Edit",circle:""})])])),_:1})])),_:1},8,["data"])]),v(" 分页 "),p("div",J,[h(m(f(P),{total:f(n).pagination.total,"page-sizes":f(n).pagination.pageSizes,page:f(n).pagination.listQuery.page,"onUpdate:page":a[13]||(a[13]=e=>f(n).pagination.listQuery.page=e),limit:f(n).pagination.listQuery.limit,"onUpdate:limit":a[14]||(a[14]=e=>f(n).pagination.listQuery.limit=e),onPagination:G},null,8,["total","page-sizes","page","limit"]),[[_,f(n).pagination.total]])])])}}});export{K as default};
