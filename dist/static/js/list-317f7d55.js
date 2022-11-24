var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,n=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&i(e,l,a[l]);return e};import{_ as r,d as u,h as p,Z as d,r as c,L as m,q as b,$ as f,o as v,c as y,x as g,e as _,s as h,v as w,z as V,U as j,A as x,a8 as F,V as k,N as U,O,y as C,f as D}from"./main-c289050e.js";import{s as P}from"./setting-3cff26af.js";import{P as Q}from"./index-19cba061.js";import{m as S}from"./message-7c571a95.js";import{_ as z}from"./lodash-6a3426b2.js";import{h as I,g as A}from"./new-format-0cb28217.js";import{u as $}from"./useUtils-034ffd86.js";import{c as q}from"./clipboard-52d8486c.js";import{A as N,a as E}from"./dsp-audience-manage-aac46848.js";import"./clipboard-polyfill.text.esm-fc4f7791.js";const M={class:"controlBox w100 mb-10"},R={class:"flex jc-start flex-wrap w100"},T={class:"flex"},B={class:"flex"},L=D(" 查询 "),Z={class:"mb-10 w100"},G=D("创建受众包"),H={class:"flex jc-around"},J=D("编辑"),K=D("归档"),W={class:"w100 flex"},X=D("复制"),Y=u({name:"adserieslist"});var ee,ae=r(u((ee=n({},Y),a(ee,l({setup(e){const a=p(),l=p([{id:""}]),{adv_type:t,audience_manage_type:o,build_status:s,audit_status:i}=P,{goNewUrl:r,openAlert:u}=$(),D=d({status:"",type:"",build_status:"",is_del:"1",value_type:"name",value:""}),Y=p({}),ee=p(!1),ae=c({report_api:""});let le=c({dialogVisible:!1,cache:{item:{}},searchForm:D.value,useData:D.value,loading:!0,options:{adv_type:t,audience_manage_type:o,build_status:s,country:[],value_type:[{value:"id",label:"受众包ID"},{value:"name",label:"受众包名称"},{value:"descs",label:"描述"}]},list:[{id:1}],pagination:{pageSizes:[20,50,100,500,1e3],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});c({data:{mode:""},options:{mode:[{value:1,label:"开启"},{value:2,label:"暂停"},{value:0,label:"归档"}]}});const te=e=>{l.value=e},oe=()=>{le.useData=z.cloneDeep(le.searchForm),ne()};p([]);const se=()=>{r({url:"/audienceManage/create",query:{type:"create"}})},ie=e=>async()=>{const{row:a,$index:l}=e,t=await(async e=>await E({ids:e,is_del:2}))([a.id]);S(t)&&le.list.splice(l,1)},ne=async()=>{le.loading=!0;let e=n(n({page:le.pagination.listQuery.page,limit:le.pagination.listQuery.limit},D.value),Y.value);e[e.value_type]=e.value,delete e.value_type,delete e.value,e=I(e);const a=await N(e);if(a){const{data:e}=a;le.list=null==e?void 0:e.data,le.pagination.total=Number(e.count)}le.loading=!1};return m((()=>{oe()})),(e,l)=>{const t=b("el-option"),o=b("el-select"),s=b("el-form-item"),i=b("el-input"),n=b("el-checkbox"),p=b("el-button"),d=b("el-form"),c=b("el-table-column"),m=b("el-dialog"),D=f("loading");return v(),y("div",null,[g("div",M,[_(d,{modelValue:w(le).searchForm,"onUpdate:modelValue":l[5]||(l[5]=e=>w(le).searchForm=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:h((()=>[g("div",R,[V(" 全部受众包类型 "),_(s,{label:""},{default:h((()=>[_(o,{modelValue:w(le).searchForm.type,"onUpdate:modelValue":l[0]||(l[0]=e=>w(le).searchForm.type=e),filterable:"",clearable:"",placeholder:"全部受众包类型"},{default:h((()=>[(v(!0),y(U,null,O(w(le).options.audience_manage_type,(e=>(v(),x(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),V(" 全部生成状态 "),_(s,{label:""},{default:h((()=>[_(o,{modelValue:w(le).searchForm.build_status,"onUpdate:modelValue":l[1]||(l[1]=e=>w(le).searchForm.build_status=e),filterable:"",clearable:"",placeholder:"全部生成状态"},{default:h((()=>[(v(!0),y(U,null,O(w(le).options.build_status,(e=>(v(),x(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),V(" 输入 "),_(s,{label:""},{default:h((()=>[_(i,{modelValue:w(le).searchForm.value,"onUpdate:modelValue":l[3]||(l[3]=e=>w(le).searchForm.value=e),placeholder:"请输入",class:"input-with-select"},{prepend:h((()=>[_(o,{modelValue:w(le).searchForm.value_type,"onUpdate:modelValue":l[2]||(l[2]=e=>w(le).searchForm.value_type=e),placeholder:"",class:"search-input-select",style:{width:"120px"}},{default:h((()=>[(v(!0),y(U,null,O(w(le).options.value_type,(e=>(v(),x(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),_(s,{label:""},{default:h((()=>[_(n,{modelValue:w(le).searchForm.is_del,"onUpdate:modelValue":l[4]||(l[4]=e=>w(le).searchForm.is_del=e),"true-label":"","false-label":"1",label:"包含已归档"},null,8,["modelValue"])])),_:1})]),g("div",T,[_(s,{class:"mr-0",style:{"margin-right":"0px"}},{default:h((()=>[g("div",B,[_(p,{type:"primary",onClick:oe},{default:h((()=>[L])),_:1}),V(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),V(' <el-input placeholder="请输入内容" v-model="state.searchForm.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> '),g("div",Z,[_(p,{type:"primary",onClick:se},{default:h((()=>[G])),_:1})])]),V(" table "),j((v(),x(w(F),{ref_key:"multipleTableRef",ref:a,center:"",data:w(le).list,class:"w100",border:"",onSelectionChange:te},{default:h((()=>[V(" 受众包ID "),_(c,{sortable:"",width:"120",prop:"id",label:"受众包ID",align:"center"}),V(" 受众包名称 "),_(c,{sortable:"",width:"120",prop:"name",label:"受众包名称",align:"center"}),V(" 操作 "),_(c,{width:"200",label:"操作",align:"center"},{default:h((e=>[g("div",H,[_(p,{class:"cp",type:"primary",onClick:a=>(({row:e})=>{const{id:a}=e;r({url:`/audienceManage/edit/${a}`,query:{type:"edit",campaign_type:e.type}})})(e)},{default:h((()=>[J])),_:2},1032,["onClick"]),V(' <el-button\n              v-if="scope.row.is_del === 2"\n              class="cp"\n              type="default"\n              @click="editFn(scope)"\n            >查看</el-button> '),_(p,{class:"cp",type:"danger",onClick:a=>(async e=>{u({text:`确认归档${e.row.name}？`,title:"归档操作",buttonText:"确认"},ie(e))})(e),disabled:2===e.row.is_del},{default:h((()=>[K])),_:2},1032,["onClick","disabled"])])])),_:1}),V(" 开关 "),V(' <el-table-column sortable\n        prop="status"\n        label="开关"\n        align="center"\n      >\n        <template #default="scope">\n          <el-switch\n            v-model="scope.row.status"\n            :active-value="1"\n            :inactive-value="2"\n            @click="changeStatus(scope)"\n          />\n        </template>\n      </el-table-column> '),V(" 国家 "),_(c,{sortable:"",width:"240",prop:"country",label:"受众包所在国家/地区",align:"center"},{default:h((e=>[V(" <span>{{getOptionsValue(scope.row.type, state.options.country)}}</span> "),g("p",null,C(e.row.country),1)])),_:1}),V(" 生成状态 "),_(c,{sortable:"",width:"120",prop:"build_status",label:"生成状态",align:"center"},{default:h((e=>[g("span",null,C(w(A)(e.row.build_status,w(le).options.build_status)),1)])),_:1}),V(" 覆盖人数 "),_(c,{sortable:"",width:"120",prop:"num_people",label:"覆盖人数",align:"center"}),V(" 描述 "),_(c,{sortable:"",width:"120",prop:"descs",label:"描述",align:"center"}),V(" 关联广告组 "),_(c,{sortable:"",width:"120",prop:"ad_group",label:"关联广告组",align:"center"}),V(" 创建人 "),_(c,{sortable:"",width:"120",prop:"create_email",label:"创建人",align:"center"}),V(" 创建时间 "),_(c,{sortable:"",width:"160",prop:"create_date",label:"创建时间",align:"center"}),V(" 更新时间 "),_(c,{sortable:"",width:"160",prop:"update_date",label:"更新时间",align:"center"})])),_:1},8,["data"])),[[D,w(le).loading]]),V(" 分页 "),g("div",W,[j(_(Q,{page:w(le).pagination.listQuery.page,"onUpdate:page":l[6]||(l[6]=e=>w(le).pagination.listQuery.page=e),limit:w(le).pagination.listQuery.limit,"onUpdate:limit":l[7]||(l[7]=e=>w(le).pagination.listQuery.limit=e),total:w(le).pagination.total,"page-sizes":w(le).pagination.pageSizes,onPagination:ne},null,8,["page","limit","total","page-sizes"]),[[k,w(le).pagination.total]])]),V(" 复制 "),_(m,{modelValue:ee.value,"onUpdate:modelValue":l[9]||(l[9]=e=>ee.value=e),title:"Report Api",width:"90%"},{default:h((()=>[g("p",null,C(w(ae).report_api),1),_(p,{class:"cp mr-10",type:"default",onClick:l[8]||(l[8]=e=>{return a=w(ae).report_api,void q(a);var a})},{default:h((()=>[X])),_:1})])),_:1},8,["modelValue"])])}}})))),[["__scopeId","data-v-423ff78b"]]);export{ae as default};