import{_ as e,d as a,h as l,$ as t,r as s,L as i,q as o,a0 as n,c as d,x as r,e as u,v as p,s as m,z as c,U as f,A as b,a9 as g,V as v,K as _,o as y,f as h}from"./main-0a777472.js";import{s as w}from"./setting-c7abf732.js";import{P as x}from"./index-2575c6ed.js";import{m as j}from"./message-d6ce123e.js";import{_ as V}from"./lodash-4786ff9c.js";import{h as F}from"./new-format-7f959bed.js";import{u as U}from"./useUtils-9816d64a.js";import"./clipboard-polyfill.text.esm-fc4f7791.js";import{e as k,f as C,g as Q}from"./dsp-media-82eff567.js";import{_ as z}from"./index-2871ca9a.js";import"./format-00f0450d.js";import"./moment-56f006b0.js";import"./dsp-advertiser-4a2a0a9c.js";import"./dsp-ade02a7a.js";const S={class:"controlBox w100 mb-10"},D={class:"flex jc-start flex-wrap w100"},$={class:"flex"},A={class:"flex"},N={class:"mb-10 w100"},P={class:"flex jc-around"},T={class:"w100 flex"},q={class:"dialog-footer"},B=a({name:"adserieslist"});var E=e(a({...B,setup(e){const a=l(),B=l([{id:""}]);let E=l(""),I=l(!1);const{adv_type:K,audience_manage_type:L,build_status:R,audit_status:G}=w,{goNewUrl:H,openAlert:J}=U(),M=t({status:"",type:"",build_status:"",is_del:"1",value_type:"bundle",value:""}),O=s({adv_id:"",st:"",et:""});s({report_api:""});let W=s({dialogVisible:!1,ruleForm:{bundle:""},cache:{item:{}},searchForm:M.value,useData:M.value,loading:!0,options:{adv_type:K,audience_manage_type:L,build_status:R,country:[],value_type:[{value:"id",label:"媒体列表名称"},{value:"name",label:"媒体列表id"},{value:"descs",label:"创建人"}]},list:[{id:1}],pagination:{pageSizes:[20,50,100,500,1e3],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});s({data:{mode:""},options:{mode:[{value:1,label:"开启"},{value:2,label:"暂停"},{value:0,label:"归档"}]}});const X=e=>{B.value=e},Y=()=>{W.useData=V.cloneDeep(W.searchForm),le()};l([]);const Z=()=>{E.value="create",I.value=!0,W.ruleForm.bundle=""},ee=e=>async()=>{const{row:a,$index:l}=e,t=await(async e=>await Q({ids:e,is_del:2}))([a.id]);j(t)&&W.list.splice(l,1)},ae=e=>{O.adv_id=e.adv,e.date&&(O.st=e.date[0],O.et=e.date[1])},le=async()=>{W.loading=!0;let e={page:W.pagination.listQuery.page,limit:W.pagination.listQuery.limit,...M.value,...O};e[e.value_type]=e.value,delete e.value_type,delete e.value,e=F(e);const a=await k(e);if(a){const{data:e}=a;W.list=null==e?void 0:e.data,W.pagination.total=Number(e.count)}W.loading=!1};return i((()=>{Y()})),(e,l)=>{const t=o("el-input"),s=o("el-form-item"),i=o("el-button"),w=o("el-form"),V=o("el-table-column"),F=o("el-dialog"),U=n("loading");return y(),d("div",null,[r("div",S,[u(p(z),{onUp:ae}),u(w,{modelValue:p(W).searchForm,"onUpdate:modelValue":l[1]||(l[1]=e=>p(W).searchForm=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:m((()=>[r("div",D,[c(" 输入 "),u(s,{label:""},{default:m((()=>[u(t,{modelValue:p(W).searchForm.value,"onUpdate:modelValue":l[0]||(l[0]=e=>p(W).searchForm.value=e),placeholder:"请输入媒体bundle",class:"input-with-select"},null,8,["modelValue"])])),_:1})]),r("div",$,[u(s,{class:"mr-0",style:{"margin-right":"0px"}},{default:m((()=>[r("div",A,[u(i,{type:"primary",onClick:Y},{default:m((()=>[h(" 查询 ")])),_:1}),c(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),c(' <el-input placeholder="请输入内容" v-model="state.searchForm.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> '),r("div",N,[u(i,{type:"primary",onClick:Z},{default:m((()=>[h("添加媒体")])),_:1})])]),c(" table "),f((y(),b(p(g),{ref_key:"multipleTableRef",ref:a,center:"",data:p(W).list,class:"w100",border:"",onSelectionChange:X},{default:m((()=>[c(" 序列 "),u(V,{sortable:"",prop:"id",label:"序列",align:"center"}),c(" 媒体bundle "),u(V,{sortable:"",prop:"bundle",label:"媒体bundle",align:"center"}),c(" 操作 "),u(V,{label:"操作",align:"center"},{default:m((e=>[r("div",P,[u(i,{class:"cp",type:"danger",onClick:a=>(async e=>{J({text:`确认归档${e.row.name}？`,title:"归档操作",buttonText:"确认"},ee(e))})(e),disabled:2===e.row.is_del},{default:m((()=>[h("删除")])),_:2},1032,["onClick","disabled"])])])),_:1}),c(" 创建人 "),u(V,{sortable:"",prop:"create_email",label:"创建人",align:"center"}),c(" 创建时间 "),u(V,{sortable:"",prop:"create_time",label:"创建时间",align:"center"})])),_:1},8,["data"])),[[U,p(W).loading]]),c(" 分页 "),r("div",T,[f(u(x,{page:p(W).pagination.listQuery.page,"onUpdate:page":l[2]||(l[2]=e=>p(W).pagination.listQuery.page=e),limit:p(W).pagination.listQuery.limit,"onUpdate:limit":l[3]||(l[3]=e=>p(W).pagination.listQuery.limit=e),total:p(W).pagination.total,"page-sizes":p(W).pagination.pageSizes,onPagination:le},null,8,["page","limit","total","page-sizes"]),[[v,p(W).pagination.total]])]),c(" 复制 "),u(F,{modelValue:p(I),"onUpdate:modelValue":l[8]||(l[8]=e=>_(I)?I.value=e:I=e),title:"添加公共媒体黑名单",width:"90%"},{footer:m((()=>[r("span",q,[u(i,{onClick:l[6]||(l[6]=e=>_(I)?I.value=!1:I=!1)},{default:m((()=>[h("取消")])),_:1}),u(i,{type:"primary",onClick:l[7]||(l[7]=e=>(async()=>{const e={...W.ruleForm},a=await C(e);j(a)&&Y(),I.value=!1})())},{default:m((()=>[h(" 保存 ")])),_:1})])])),default:m((()=>[u(w,{modelValue:p(W).searchForm,"onUpdate:modelValue":l[5]||(l[5]=e=>p(W).searchForm=e),inline:!0,class:"flex w100"},{default:m((()=>[u(t,{modelValue:p(W).ruleForm.bundle,"onUpdate:modelValue":l[4]||(l[4]=e=>p(W).ruleForm.bundle=e),class:"form-one",placeholder:"请输入bundle，多个媒体bundle请换行，一行一个bundle，最多支持1000行。",rows:8,type:"textarea"},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-1d88f1a3"]]);export{E as default};
