var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{Q as n,d as s,Z as c,r as p,L as d,q as u,$ as m,o as g,c as b,x as f,e as y,s as h,v,z as w,U as x,A as j,V,f as _}from"./main-4990c854.js";import{P as z}from"./index-4820445e.js";import{m as F}from"./message-2ec72094.js";import{_ as O}from"./lodash-d6ca2f8e.js";import{a as P}from"./new-format-aff64952.js";import{u as U}from"./useUtils-eed7a23a.js";const Q={class:"controlBox w100 mb-10"},k={class:"mb-10"},D=_("新建广告主"),C={class:"flex jc-start flex-wrap w100"},E={class:"flex"},S={class:"flex"},A=_(" 查询 "),q={class:"flex jc-around"},L={class:"w100 flex"},I=s({name:"dsp-advsetting-list"}),M=s((N=((e,a)=>{for(var t in a||(a={}))i.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&o(e,t,a[t]);return e})({},I),a(N,t({setup(e){const{goNewUrl:a,openAlert:t}=U(),l=c({name:""});let i=p({dialogVisible:!1,cache:{item:{},device:{}},searchForm:l.value,useData:l.value,loading:!0,options:{},list:[],pagination:{pageSizes:["50","100","500","1000"],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});const r=()=>{i.useData=O.cloneDeep(i.searchForm),_()},o=async e=>{let a={id:e.id,status:e.status};a=P(a);const t=await function(e){return n({url:"/buzz/status",data:e,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}(a);F(t)},s=()=>{a({url:"/tool/advsetting/create",query:{type:"create"}})},_=async()=>{i.loading=!0;let e={page:i.pagination.listQuery.page,limit:i.pagination.listQuery.limit};i.useData.name&&(e.name=i.useData.name);const a=await function(e){return n({url:"/buzz",data:e,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}(e),{data:t}=a;i.list=null==t?void 0:t.data,i.pagination.total=Number(t.count),i.loading=!1};return d((()=>{r()})),(e,t)=>{const l=u("el-button"),n=u("el-input"),c=u("el-form-item"),p=u("el-form"),d=u("el-table-column"),F=u("el-switch"),O=u("el-table"),P=m("loading");return g(),b("div",null,[f("div",Q,[f("div",k,[y(l,{type:"primary",onClick:s},{default:h((()=>[D])),_:1})]),y(p,{modelValue:v(i).searchForm,"onUpdate:modelValue":t[1]||(t[1]=e=>v(i).searchForm=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:h((()=>[f("div",C,[y(c,{label:""},{default:h((()=>[y(n,{modelValue:v(i).searchForm.name,"onUpdate:modelValue":t[0]||(t[0]=e=>v(i).searchForm.name=e),placeholder:"请输入广告主名称",class:"search-con",style:{"min-width":"120px"}},null,8,["modelValue"])])),_:1})]),f("div",E,[y(c,{class:"mr-0",style:{"margin-right":"0px"}},{default:h((()=>[f("div",S,[y(l,{type:"primary",onClick:r},{default:h((()=>[A])),_:1}),w(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),w(' <el-input placeholder="请输入内容" v-model="data.searchForm.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> ')]),w(" table "),x((g(),j(O,{center:"",data:v(i).list,class:"w100","min-height":"70vh",border:""},{default:h((()=>[y(d,{fixed:"",prop:"id",label:"广告主ID",align:"center"}),y(d,{fixed:"",prop:"name",label:"广告主名称",align:"center"}),y(d,{prop:"描述",label:"desc",align:"center"}),y(d,{prop:"rate",label:"强制流量占比%",width:"120",align:"center"}),y(d,{prop:"create_user",label:"创建人",align:"center"}),y(d,{prop:"update_user",label:"更新人",align:"center"}),y(d,{prop:"create_date",label:"创建时间",sortable:"",align:"center"}),y(d,{prop:"create_date",label:"更新时间",sortable:"",align:"center"}),y(d,{width:"100",label:"操作",align:"center"},{default:h((e=>[f("div",q,[y(l,{class:"cp mr-10",type:"primary",icon:"Edit",circle:"",onClick:t=>(({row:e})=>{const{id:t}=e;a({url:`/tool/advsetting/edit/${t}`,query:{type:"edit"}})})(e)},null,8,["onClick"]),w(" <el-button class='cp mr-10' type=\"primary\" icon=\"Edit\" circle @click='editFun(scope.row)'></el-button> "),y(F,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":2,onChange:a=>o(e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])])])),_:1})])),_:1},8,["data"])),[[P,v(i).loading]]),w(" 分页 "),f("div",L,[x(y(v(z),{page:v(i).pagination.listQuery.page,"onUpdate:page":t[2]||(t[2]=e=>v(i).pagination.listQuery.page=e),limit:v(i).pagination.listQuery.limit,"onUpdate:limit":t[3]||(t[3]=e=>v(i).pagination.listQuery.limit=e),total:v(i).pagination.total,"page-sizes":v(i).pagination.pageSizes,onPagination:_},null,8,["page","limit","total","page-sizes"]),[[V,v(i).pagination.total]])])])}}}))));var N;export{M as default};
