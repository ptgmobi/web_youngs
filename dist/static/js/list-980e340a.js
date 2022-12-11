import{_ as e,d as a,h as l,$ as t,r as i,L as s,q as o,a0 as r,c as n,x as d,e as p,v as u,s as c,z as m,U as b,A as f,a9 as g,V as _,K as v,o as y,N as h,O as w,f as x,y as j}from"./main-0a777472.js";import{s as V}from"./setting-c7abf732.js";import{P as k}from"./index-2575c6ed.js";import{m as F}from"./message-d6ce123e.js";import{_ as U}from"./lodash-4786ff9c.js";import{h as C}from"./new-format-7f959bed.js";import{u as Q}from"./useUtils-9816d64a.js";import{c as z}from"./clipboard-4e200ba9.js";import{A as D,a as S}from"./dsp-media-82eff567.js";import{_ as A}from"./index-2871ca9a.js";import"./clipboard-polyfill.text.esm-fc4f7791.js";import"./format-00f0450d.js";import"./moment-56f006b0.js";import"./dsp-advertiser-4a2a0a9c.js";import"./dsp-ade02a7a.js";const $={class:"controlBox w100 mb-10"},q={class:"flex jc-start flex-wrap w100"},I={class:"flex"},N={class:"flex"},O={class:"mb-10 w100"},P={class:"flex jc-around"},R={class:"w100 flex"},T=a({name:"adserieslist"});var B=e(a({...T,setup(e){const a=l(),T=l([{id:""}]),{adv_type:B,audience_manage_type:E,build_status:K,audit_status:L}=V,{goNewUrl:G,openAlert:H}=Q(),J=t({status:"",type:"",build_status:"",is_del:"1",value_type:"name",value:""}),M=l(!1),W=i({report_api:""});let X=i({dialogVisible:!1,cache:{item:{}},searchForm:J.value,useData:J.value,loading:!0,options:{adv_type:B,audience_manage_type:E,build_status:K,country:[],value_type:[{value:"name",label:"媒体列表名称"},{value:"id",label:"媒体列表id"},{value:"user",label:"创建人"}]},list:[{id:1}],pagination:{pageSizes:[20,50,100,500,1e3],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});i({data:{mode:""},options:{mode:[{value:1,label:"开启"},{value:2,label:"暂停"},{value:0,label:"归档"}]}});const Y=i({adv_id:"",st:"",et:""}),Z=e=>{Y.adv_id=e.adv,e.date&&(Y.st=e.date[0],Y.et=e.date[1])},ee=e=>{T.value=e},ae=()=>{X.useData=U.cloneDeep(X.searchForm),ie()};l([]);const le=()=>{G({url:"/media/custom/create",query:{type:"create"}})},te=e=>async()=>{const{row:a,$index:l}=e,t=await(async e=>await S({ids:e,is_del:2}))([a.id]);F(t)&&X.list.splice(l,1)},ie=async()=>{X.loading=!0;let e={page:X.pagination.listQuery.page,limit:X.pagination.listQuery.limit,...J.value,...Y};e[e.value_type]=e.value,delete e.value_type,delete e.value,e=C(e);const a=await D(e);if(a){const{data:e}=a;X.list=null==e?void 0:e.data,X.pagination.total=Number(e.count)}X.loading=!1};return s((()=>{ae()})),(e,l)=>{const t=o("el-option"),i=o("el-select"),s=o("el-input"),V=o("el-form-item"),F=o("el-checkbox"),U=o("el-button"),C=o("el-form"),Q=o("el-table-column"),D=o("el-dialog"),S=r("loading");return y(),n("div",null,[d("div",$,[p(u(A),{onUp:Z}),p(C,{modelValue:u(X).searchForm,"onUpdate:modelValue":l[3]||(l[3]=e=>u(X).searchForm=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:c((()=>[d("div",q,[m(" 输入 "),p(V,{label:""},{default:c((()=>[p(s,{modelValue:u(X).searchForm.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u(X).searchForm.value=e),placeholder:"请输入",class:"input-with-select"},{prepend:c((()=>[p(i,{modelValue:u(X).searchForm.value_type,"onUpdate:modelValue":l[0]||(l[0]=e=>u(X).searchForm.value_type=e),placeholder:"",class:"search-input-select",style:{width:"120px"}},{default:c((()=>[(y(!0),n(h,null,w(u(X).options.value_type,(e=>(y(),f(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),p(V,{label:""},{default:c((()=>[p(F,{modelValue:u(X).searchForm.is_del,"onUpdate:modelValue":l[2]||(l[2]=e=>u(X).searchForm.is_del=e),"true-label":"","false-label":"1",label:"包含已归档"},null,8,["modelValue"])])),_:1})]),d("div",I,[p(V,{class:"mr-0",style:{"margin-right":"0px"}},{default:c((()=>[d("div",N,[p(U,{type:"primary",onClick:ae},{default:c((()=>[x(" 查询 ")])),_:1}),m(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),m(' <el-input placeholder="请输入内容" v-model="state.searchForm.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> '),d("div",O,[p(U,{type:"primary",onClick:le},{default:c((()=>[x("新建媒体列表")])),_:1})])]),m(" table "),b((y(),f(u(g),{ref_key:"multipleTableRef",ref:a,center:"",data:u(X).list,class:"w100",border:"",onSelectionChange:ee},{default:c((()=>[m(" 媒体列表ID "),p(Q,{sortable:"",width:"120",prop:"id",label:"媒体列表ID",align:"center"}),m(" 媒体列表名称 "),p(Q,{sortable:"",width:"120",prop:"name",label:"媒体列表名称",align:"center"}),m(" 操作 "),p(Q,{width:"200",label:"操作",align:"center"},{default:c((e=>[d("div",P,[p(U,{class:"cp",type:"primary",onClick:a=>(({row:e})=>{const{id:a}=e;G({url:`/media/custom/edit/${a}`,query:{type:"edit",campaign_type:e.type}})})(e)},{default:c((()=>[x("编辑")])),_:2},1032,["onClick"]),m(' <el-button\n              v-if="scope.row.is_del === 2"\n              class="cp"\n              type="default"\n              @click="editFn(scope)"\n            >查看</el-button> '),p(U,{class:"cp",type:"danger",onClick:a=>(async e=>{H({text:`确认归档${e.row.name}？`,title:"归档操作",buttonText:"确认"},te(e))})(e),disabled:2===e.row.is_del},{default:c((()=>[x("归档")])),_:2},1032,["onClick","disabled"])])])),_:1}),m(" 媒体数量 "),p(Q,{sortable:"",width:"120",prop:"country",label:"媒体数量",align:"center"},{default:c((e=>[m(" <span>{{getOptionsValue(scope.row.type, state.options.country)}}</span> "),d("p",null,j(e.row.country),1)])),_:1}),m(" 描述 "),p(Q,{sortable:"",width:"120",prop:"descs",label:"描述",align:"center"}),m(" 关联广告组数 "),p(Q,{sortable:"",width:"120",prop:"ad_group",label:"关联广告组数",align:"center"}),m(" 创建人 "),p(Q,{sortable:"",width:"120",prop:"create_email",label:"创建人",align:"center"}),m(" 更新人 "),p(Q,{sortable:"",width:"120",prop:"user",label:"更新人",align:"center"}),m(" 创建时间 "),p(Q,{sortable:"",width:"160",prop:"create_date",label:"创建时间",align:"center"}),m(" 更新时间 "),p(Q,{sortable:"",width:"160",prop:"update_date",label:"更新时间",align:"center"})])),_:1},8,["data"])),[[S,u(X).loading]]),m(" 分页 "),d("div",R,[b(p(k,{page:u(X).pagination.listQuery.page,"onUpdate:page":l[4]||(l[4]=e=>u(X).pagination.listQuery.page=e),limit:u(X).pagination.listQuery.limit,"onUpdate:limit":l[5]||(l[5]=e=>u(X).pagination.listQuery.limit=e),total:u(X).pagination.total,"page-sizes":u(X).pagination.pageSizes,onPagination:ie},null,8,["page","limit","total","page-sizes"]),[[_,u(X).pagination.total]])]),m(" 复制 "),p(D,{modelValue:u(M),"onUpdate:modelValue":l[7]||(l[7]=e=>v(M)?M.value=e:null),title:"Report Api",width:"90%"},{default:c((()=>[d("p",null,j(u(W).report_api),1),p(U,{class:"cp mr-10",type:"default",onClick:l[6]||(l[6]=e=>{return a=u(W).report_api,void z(a);var a})},{default:c((()=>[x("复制")])),_:1})])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-ac407cca"]]);export{B as default};
