import{d as K,ai as R,z as C,C as q,r as p,aj as H,k as D,v as d,i as _,x as l,h as r,j as o,N as j,c as h,O as W,o as b,F as A,l as U,y as g,t as S}from"./vendor-bf64253d.js";import{P as X}from"./index-57cb31dc.js";import{A as Y,_ as Z,a as ee,b as ae,c as te,d as le,e as oe}from"./device-f7affbcd.js";import{m as y}from"./message-da701484.js";import{_ as ie}from"./lodash-05c10b51.js";import{a as ne}from"./new-format-b98ea9a0.js";import{b as re}from"./format-b76f9697.js";import{_ as se}from"./index-a9586341.js";import"./moment-1cf83a0b.js";const ce={class:"controlBox w100 mb-10"},de={class:"mb-10"},ue=g(" Offer Create "),pe={class:"flex jc-start flex-wrap w100"},me={class:"flex"},fe={class:"flex"},_e=g(" \u67E5\u8BE2 "),ve={class:"flex jc-around"},be={class:"flex jc-around"},he={class:"flex jc-between"},ge=["textContent"],ye={class:"flex jc-around"},De={class:"w100 flex"},Ve={class:"dialog-footer"},ke=g("\u786E \u5B9A"),we=K({setup(xe){const V=R({attribute_provider:[],platform:[],package_name:"",channel:"",id:"",offer_title:"",country:"",pid:""}),z=()=>[...new Array(20)].map((t,n)=>{const c=n*5/100;return{value:c,label:`${(Number(c)*100).toFixed(0)}%`}}),O=()=>[...new Array(20)].map((t,n)=>{const c=(n*5+5)/100;return{value:c,label:`${(Number(c)*100).toFixed(0)}%`}});let u=C({offer:{},index:null,cacheDevice:{}}),e=C({dialogVisible:!1,dialogVisibleDevice:!1,cache:{item:{},device:{}},searchForm:V.value,useData:V.value,loading:!0,options:{cutoff_start:z(),cutoff_end:O(),attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}],platform:[{value:"1",label:"Android"},{value:"2",label:"iOS"}]},list:[],pagination:{pageSizes:["20","50","100","500","1000"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});const k=()=>{e.useData=ie.cloneDeep(e.searchForm),w()},B=async i=>{let t={id:i.id,max_clk_num:parseFloat(i.max_clk_num)},n=await ee(t);y(n)},N=async i=>{let t={id:i.id,site_clk_limit:parseFloat(i.site_clk_limit)},n=await ae(t);y(n)},E=async i=>{let t={id:i.id,status:i.status};t=ne(t);const n=await te(t);y(n)},P=i=>`/buzz/old-buzz/edit/${i.id}`,w=async()=>{e.loading=!0;let i={page:e.pagination.listQuery.page,page_size:e.pagination.listQuery.limit};e.useData.attribute_provider&&(i.attribute_provider=e.useData.attribute_provider),e.useData.platform&&(i.platform=e.useData.platform),e.useData.package_name&&(i.pkg_name=e.useData.package_name),e.useData.channel&&(i.channel=e.useData.channel),e.useData.id&&(i.offer_id=e.useData.id),e.useData.offer_title&&(i.title=e.useData.offer_title),e.useData.country&&(i.country=e.useData.country),e.useData.pid&&(i.tracking_link=e.useData.pid);const t=await Y(i),{data:n}=t,{page:c}=n;e.list=n==null?void 0:n.data,e.pagination.total=Number(c.count),e.loading=!1},$=async(i,t)=>{console.log("get device"),e.dialogVisibleDevice=!0,u.offer=t,u.index=i;const n={id:t.id,platform:t.platform,country:t.country},{data:c}=await le(n);u.cacheDevice.all=c.all,u.cacheDevice.select=JSON.parse(t.device)},Q=i=>{u.cacheDevice.select=i},L=async()=>{const i={id:u.offer.id,device:JSON.stringify(u.cacheDevice.select)},t=await oe(i);y(t),e.dialogVisibleDevice=!1};return q(()=>{k()}),(i,t)=>{const n=p("el-button"),c=p("router-link"),x=p("el-option"),F=p("el-select"),m=p("el-form-item"),v=p("el-input"),T=p("el-form"),s=p("el-table-column"),I=p("el-switch"),M=p("el-table"),G=p("el-dialog"),J=H("loading");return b(),D("div",null,[d("div",ce,[d("div",de,[_(` <el-button type="primary" @click='createFun'>Offer Create</el-button> `),l(c,{to:"/buzz/old-buzz/create"},{default:r(()=>[l(n,{type:"primary"},{default:r(()=>[ue]),_:1})]),_:1})]),l(T,{modelValue:o(e).searchForm,"onUpdate:modelValue":t[8]||(t[8]=a=>o(e).searchForm=a),inline:!0,class:"flex jc-between w100 ai-end"},{default:r(()=>[d("div",pe,[l(m,{label:""},{default:r(()=>[l(F,{modelValue:o(e).searchForm.attribute_provider,"onUpdate:modelValue":t[0]||(t[0]=a=>o(e).searchForm.attribute_provider=a),clearable:"",class:"search-con",placeholder:"Attribute Provider",style:{"min-width":"140px"}},{default:r(()=>[(b(!0),D(A,null,U(o(e).options.attribute_provider,a=>(b(),h(x,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(m,{label:""},{default:r(()=>[l(F,{modelValue:o(e).searchForm.platform,"onUpdate:modelValue":t[1]||(t[1]=a=>o(e).searchForm.platform=a),clearable:"",class:"search-con",placeholder:"Platform",style:{"min-width":"95px"}},{default:r(()=>[(b(!0),D(A,null,U(o(e).options.platform,a=>(b(),h(x,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(m,{label:""},{default:r(()=>[l(v,{modelValue:o(e).searchForm.package_name,"onUpdate:modelValue":t[2]||(t[2]=a=>o(e).searchForm.package_name=a),placeholder:"Package Name",class:"search-con",style:{"min-width":"120px"}},null,8,["modelValue"])]),_:1}),l(m,{label:""},{default:r(()=>[l(v,{modelValue:o(e).searchForm.channel,"onUpdate:modelValue":t[3]||(t[3]=a=>o(e).searchForm.channel=a),placeholder:"Channel",class:"search-con",style:{"min-width":"80px"}},null,8,["modelValue"])]),_:1}),l(m,{label:""},{default:r(()=>[l(v,{modelValue:o(e).searchForm.id,"onUpdate:modelValue":t[4]||(t[4]=a=>o(e).searchForm.id=a),placeholder:"ID",class:"search-con"},null,8,["modelValue"])]),_:1}),l(m,{label:""},{default:r(()=>[l(v,{modelValue:o(e).searchForm.offer_title,"onUpdate:modelValue":t[5]||(t[5]=a=>o(e).searchForm.offer_title=a),placeholder:"Offer Title",class:"search-con",style:{"min-width":"90px"}},null,8,["modelValue"])]),_:1}),l(m,{label:""},{default:r(()=>[l(v,{modelValue:o(e).searchForm.country,"onUpdate:modelValue":t[6]||(t[6]=a=>o(e).searchForm.country=a),placeholder:"Country",class:"search-con",style:{"min-width":"80px"}},null,8,["modelValue"])]),_:1}),l(m,{label:""},{default:r(()=>[l(v,{modelValue:o(e).searchForm.pid,"onUpdate:modelValue":t[7]||(t[7]=a=>o(e).searchForm.pid=a),placeholder:"Pid",class:"search-con"},null,8,["modelValue"])]),_:1})]),d("div",me,[l(m,{class:"mr-0",style:{"margin-right":"0px"}},{default:r(()=>[d("div",fe,[l(n,{type:"primary",onClick:k},{default:r(()=>[_e]),_:1}),_(' <el-button type="primary" @click="handleExportSearch">\u5BFC\u51FA</el-button> ')])]),_:1})])]),_:1},8,["modelValue"]),_(` <el-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="data.searchForm.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> `)]),_(" table "),j((b(),h(M,{center:"",data:o(e).list,class:"w100",height:"60vh",border:""},{default:r(()=>[l(s,{fixed:"",prop:"offer_id",label:"Offer ID",align:"center",width:"70"}),l(s,{fixed:"",prop:"channel",label:"Channel",align:"center",width:"60"}),l(s,{prop:"pkg_name",label:"Package Name",align:"center",width:"110"}),l(s,{prop:"title",label:"Offer Title",align:"center"}),l(s,{prop:"attribute_provider",label:"Attribute Provider",align:"center",width:"80"}),l(s,{prop:"pid",label:"Pid",align:"center",width:"90"}),l(s,{prop:"platform",label:"Platform",align:"center",width:"65"},{default:r(a=>[g(S(Number(a.row.platform)===1?"Android":"iOS"),1)]),_:1}),l(s,{prop:"country",label:"Country",align:"center",width:"57"}),l(s,{prop:"payout",label:"Payout",align:"center",width:"55"}),l(s,{label:"Click Limitation(w)",width:"150",align:"center"},{default:r(a=>[d("div",ve,[l(v,{modelValue:a.row.max_clk_num,"onUpdate:modelValue":f=>a.row.max_clk_num=f,placeholder:""},null,8,["modelValue","onUpdate:modelValue"]),l(n,{class:"cp ml-10 scale-button",type:"primary",icon:"Edit",circle:"",onClick:f=>B(a.row)},null,8,["onClick"])])]),_:1}),l(s,{label:"Site Click Limitation",width:"150",align:"center"},{default:r(a=>[d("div",be,[l(v,{modelValue:a.row.site_clk_limit,"onUpdate:modelValue":f=>a.row.site_clk_limit=f,placeholder:""},null,8,["modelValue","onUpdate:modelValue"]),l(n,{class:"cp ml-10 scale-button",type:"primary",icon:"Edit",circle:"",onClick:f=>N(a.row)},null,8,["onClick"])])]),_:1}),l(s,{label:"Select Device",width:"120",align:"center"},{default:r(a=>[d("div",he,[d("span",{textContent:S(o(re)(a.row.device_count))},null,8,ge),l(n,{class:"cp ml-10 scale-button",type:"primary",icon:"Edit",circle:"",onClick:f=>$(a.$index,a.row)},null,8,["onClick"])])]),_:1}),l(s,{label:"Operation",align:"center"},{default:r(a=>[d("div",ye,[l(c,{to:P(a.row)},{default:r(()=>[l(n,{class:"cp mr-10",type:"primary",icon:"Edit",circle:""})]),_:2},1032,["to"]),_(` <el-button class='cp mr-10' type="primary" icon="Edit" circle @click='editFun(scope.row)'></el-button> `),l(I,{modelValue:a.row.status,"onUpdate:modelValue":f=>a.row.status=f,"active-value":1,"inactive-value":2,onChange:f=>E(a.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:1})]),_:1},8,["data"])),[[J,o(e).loading]]),_(" \u5206\u9875 "),d("div",De,[j(l(o(X),{page:o(e).pagination.listQuery.page,"onUpdate:page":t[9]||(t[9]=a=>o(e).pagination.listQuery.page=a),limit:o(e).pagination.listQuery.limit,"onUpdate:limit":t[10]||(t[10]=a=>o(e).pagination.listQuery.limit=a),total:o(e).pagination.total,"page-sizes":o(e).pagination.pageSizes,onPagination:w},null,8,["page","limit","total","page-sizes"]),[[W,o(e).pagination.total]])]),_(" device "),l(G,{modelValue:o(e).dialogVisibleDevice,"onUpdate:modelValue":t[13]||(t[13]=a=>o(e).dialogVisibleDevice=a),title:"Device"},{default:r(()=>[o(e).dialogVisibleDevice?(b(),h(Z,{key:0,all:o(u).cacheDevice.all,"onUpdate:all":t[11]||(t[11]=a=>o(u).cacheDevice.all=a),select:o(u).cacheDevice.select,"onUpdate:select":t[12]||(t[12]=a=>o(u).cacheDevice.select=a),onKk:Q},null,8,["all","select"])):_("v-if",!0),d("span",Ve,[_(' <el-button @click="cancleDevice">\u53D6 \u6D88</el-button> '),l(n,{type:"primary",onClick:L},{default:r(()=>[ke]),_:1})])]),_:1},8,["modelValue"])])}}});var Ne=se(we,[["__scopeId","data-v-0b56db22"]]);export{Ne as default};
