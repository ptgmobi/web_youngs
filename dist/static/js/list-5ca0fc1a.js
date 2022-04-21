var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{d as n,ah as u,z as s,C as c,r as d,ai as p,k as m,v as f,i as b,x as h,h as v,j as _,O as g,c as y,P as w,o as V,F as x,l as k,y as F,t as D,q as j,s as U,E as O}from"./vendor-ede5cb5d.js";import{P}from"./index-6eb6f290.js";import{A as C,a as z,b as A,c as S}from"./buzz-87dd9e83.js";import{m as E}from"./message-e435e9f7.js";import{_ as Q}from"./lodash-79cb6bd1.js";import{a as N}from"./new-format-6b24aa44.js";import{_ as I}from"./index-e37ae843.js";const B=e=>(j("data-v-29c9e5d6"),e=e(),U(),e),$={class:"controlBox w100 mb-10"},M={class:"mb-10"},T=F(" Offer Create "),q={class:"flex jc-start flex-wrap w100"},L={class:"flex"},G={class:"flex"},H=F(" 查询 "),J={class:"flex jc-around"},K={class:"flex jc-around"},R=B((()=>f("span",null,"-",-1))),W={class:"flex mt-10"},X={class:"flex jc-around"},Y={class:"w100 flex"},Z=n({name:"buzz-list"}),ee=n((ae=((e,a)=>{for(var l in a||(a={}))o.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))r.call(a,l)&&i(e,l,a[l]);return e})({},Z),a(ae,l({setup(e){const a=u({attribute_provider:[],platform:[],package_name:"",channel:"",id:"",offer_title:"",country:"",pid:""});let l=s({dialogVisible:!1,cache:{item:{},device:{}},searchForm:a.value,useData:a.value,loading:!0,options:{cutoff_start:[...new Array(20)].map(((e,a)=>{const l=5*a/100;return{value:l,label:`${(100*Number(l)).toFixed(0)}%`}})),cutoff_end:[...new Array(20)].map(((e,a)=>{const l=(5*a+5)/100;return{value:l,label:`${(100*Number(l)).toFixed(0)}%`}})),attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}],platform:[{value:"1",label:"Android"},{value:"2",label:"iOS"}]},list:[],pagination:{pageSizes:["50","100","500","1000"],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});const t=()=>{l.useData=Q.cloneDeep(l.searchForm),r()},o=e=>{const a=(e.cutoff_end-e.cutoff_start)*e.device_num;return a?a.toFixed(0):""},r=async()=>{l.loading=!0;let e={page:l.pagination.listQuery.page,page_size:l.pagination.listQuery.limit};l.useData.attribute_provider&&(e.attribute_provider=l.useData.attribute_provider),l.useData.platform&&(e.platform=l.useData.platform),l.useData.package_name&&(e.pkg_name=l.useData.package_name),l.useData.channel&&(e.channel=l.useData.channel),l.useData.id&&(e.offer_id=l.useData.id),l.useData.offer_title&&(e.title=l.useData.offer_title),l.useData.country&&(e.country=l.useData.country),l.useData.pid&&(e.tracking_link=l.useData.pid);const a=await C(e),{data:t}=a;l.list=null==t?void 0:t.data,l.pagination.total=Number(t.count),l.loading=!1};return c((()=>{t()})),(e,a)=>{const i=d("el-button"),n=d("router-link"),u=d("el-option"),s=d("el-select"),c=d("el-form-item"),j=d("el-input"),U=d("el-form"),C=d("el-table-column"),Q=d("el-switch"),I=d("el-table"),B=p("loading");return V(),m("div",null,[f("div",$,[f("div",M,[b(" <el-button type=\"primary\" @click='createFun'>Offer Create</el-button> "),h(n,{to:"/buzz/create"},{default:v((()=>[h(i,{type:"primary"},{default:v((()=>[T])),_:1})])),_:1})]),h(U,{modelValue:_(l).searchForm,"onUpdate:modelValue":a[8]||(a[8]=e=>_(l).searchForm=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:v((()=>[f("div",q,[h(c,{label:""},{default:v((()=>[h(s,{modelValue:_(l).searchForm.attribute_provider,"onUpdate:modelValue":a[0]||(a[0]=e=>_(l).searchForm.attribute_provider=e),clearable:"",class:"search-con",placeholder:"Attribute Provider",style:{"min-width":"140px"}},{default:v((()=>[(V(!0),m(x,null,k(_(l).options.attribute_provider,(e=>(V(),y(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(c,{label:""},{default:v((()=>[h(s,{modelValue:_(l).searchForm.platform,"onUpdate:modelValue":a[1]||(a[1]=e=>_(l).searchForm.platform=e),clearable:"",class:"search-con",placeholder:"Platform",style:{"min-width":"95px"}},{default:v((()=>[(V(!0),m(x,null,k(_(l).options.platform,(e=>(V(),y(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(c,{label:""},{default:v((()=>[h(j,{modelValue:_(l).searchForm.package_name,"onUpdate:modelValue":a[2]||(a[2]=e=>_(l).searchForm.package_name=e),placeholder:"Package Name",class:"search-con",style:{"min-width":"120px"}},null,8,["modelValue"])])),_:1}),h(c,{label:""},{default:v((()=>[h(j,{modelValue:_(l).searchForm.channel,"onUpdate:modelValue":a[3]||(a[3]=e=>_(l).searchForm.channel=e),placeholder:"Channel",class:"search-con",style:{"min-width":"80px"}},null,8,["modelValue"])])),_:1}),h(c,{label:""},{default:v((()=>[h(j,{modelValue:_(l).searchForm.id,"onUpdate:modelValue":a[4]||(a[4]=e=>_(l).searchForm.id=e),placeholder:"ID",class:"search-con"},null,8,["modelValue"])])),_:1}),h(c,{label:""},{default:v((()=>[h(j,{modelValue:_(l).searchForm.offer_title,"onUpdate:modelValue":a[5]||(a[5]=e=>_(l).searchForm.offer_title=e),placeholder:"Offer Title",class:"search-con",style:{"min-width":"90px"}},null,8,["modelValue"])])),_:1}),h(c,{label:""},{default:v((()=>[h(j,{modelValue:_(l).searchForm.country,"onUpdate:modelValue":a[6]||(a[6]=e=>_(l).searchForm.country=e),placeholder:"Country",class:"search-con",style:{"min-width":"80px"}},null,8,["modelValue"])])),_:1}),h(c,{label:""},{default:v((()=>[h(j,{modelValue:_(l).searchForm.pid,"onUpdate:modelValue":a[7]||(a[7]=e=>_(l).searchForm.pid=e),placeholder:"Pid",class:"search-con"},null,8,["modelValue"])])),_:1})]),f("div",L,[h(c,{class:"mr-0",style:{"margin-right":"0px"}},{default:v((()=>[f("div",G,[h(i,{type:"primary",onClick:t},{default:v((()=>[H])),_:1}),b(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),b(' <el-input placeholder="请输入内容" v-model="data.searchForm.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> ')]),b(" table "),g((V(),y(I,{center:"",data:_(l).list,class:"w100",height:"70vh",border:""},{default:v((()=>[h(C,{fixed:"",prop:"offer_id",label:"ID",align:"center"}),h(C,{fixed:"",prop:"channel",label:"Channel",align:"center"}),h(C,{prop:"pkg_name",label:"Package Name",align:"center"}),h(C,{prop:"title",label:"Offer Title",width:"120",align:"center"}),h(C,{prop:"attribute_provider",label:"Attribute Provider",align:"center"}),h(C,{prop:"pid",label:"Pid",align:"center"}),h(C,{prop:"platform",label:"Platform",align:"center"},{default:v((e=>[F(D(1===Number(e.row.platform)?"Android":"iOS"),1)])),_:1}),h(C,{prop:"country",label:"Country",align:"center"}),h(C,{prop:"payout",label:"Payout",align:"center"}),h(C,{label:"Click Limitation(w)",width:"150",align:"center"},{default:v((e=>[f("div",J,[h(j,{modelValue:e.row.max_clk_num,"onUpdate:modelValue":a=>e.row.max_clk_num=a,placeholder:"",type:"number"},null,8,["modelValue","onUpdate:modelValue"]),h(i,{class:"cp ml-10",type:"primary",icon:"Edit",circle:"",onClick:a=>(async e=>{let a={id:e.id,max_clk_num:e.max_clk_num};a=N(a);let l=await z(a);E(l)})(e.row)},null,8,["onClick"])])])),_:1}),h(C,{label:"Device Cutoff",width:"250",align:"center"},{default:v((e=>[f("div",K,[f("div",null,[f("div",null,[h(s,{modelValue:e.row.cutoff_start,"onUpdate:modelValue":a=>e.row.cutoff_start=a,class:"cutoff",filterable:"",placeholder:"start"},{default:v((()=>[(V(!0),m(x,null,k(_(l).options.cutoff_start,(e=>(V(),y(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"]),R,h(s,{modelValue:e.row.cutoff_end,"onUpdate:modelValue":a=>e.row.cutoff_end=a,class:"cutoff",filterable:"",placeholder:"end"},{default:v((()=>[(V(!0),m(x,null,k(_(l).options.cutoff_end,(e=>(V(),y(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])]),f("div",W,[f("span",null,D(o(e.row)),1)])]),h(i,{class:"cp ml-10",type:"primary",icon:"Edit",circle:"",onClick:a=>(async e=>{const a=e.cutoff_start,l=e.cutoff_end,t=e.id;if(a<l){let e={cutoff_start:a,cutoff_end:l,id:t};e=N(e);const o=await A(e);E(o)}else O({message:"start必须小于end",type:"error",duration:2e3})})(e.row)},null,8,["onClick"])])])),_:1}),h(C,{width:"100",label:"Operation",align:"center"},{default:v((e=>{return[f("div",X,[h(n,{to:(a=e.row,`/buzz/edit/${a.id}`)},{default:v((()=>[h(i,{class:"cp mr-10",type:"primary",icon:"Edit",circle:""})])),_:2},1032,["to"]),b(" <el-button class='cp mr-10' type=\"primary\" icon=\"Edit\" circle @click='editFun(scope.row)'></el-button> "),h(Q,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":2,onChange:a=>(async e=>{let a={id:e.id,status:e.status};a=N(a);const l=await S(a);E(l)})(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])])];var a})),_:1})])),_:1},8,["data"])),[[B,_(l).loading]]),b(" 分页 "),f("div",Y,[g(h(_(P),{page:_(l).pagination.listQuery.page,"onUpdate:page":a[9]||(a[9]=e=>_(l).pagination.listQuery.page=e),limit:_(l).pagination.listQuery.limit,"onUpdate:limit":a[10]||(a[10]=e=>_(l).pagination.listQuery.limit=e),total:_(l).pagination.total,"page-sizes":_(l).pagination.pageSizes,onPagination:r},null,8,["page","limit","total","page-sizes"]),[[w,_(l).pagination.total]])])])}}}))));var ae,le=I(ee,[["__scopeId","data-v-29c9e5d6"]]);export{le as default};