var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,i=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&r(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&r(e,l,a[l]);return e};import{_ as d,d as n,h as u,r as p,L as c,q as m,$ as b,o as v,c as _,x as f,e as g,s as y,v as h,z as w,U as V,A as j,V as k,N as x,O as F,y as U,f as C}from"./main-dae9cd13.js";import{u as O,s as D}from"./useUtils-0c0cc193.js";import{P}from"./index-4fdf120d.js";import{m as Q}from"./message-2d1d3f7c.js";import{_ as S}from"./lodash-edd1f566.js";import{h as q,g as z}from"./new-format-299c060c.js";import{c as N}from"./clipboard-e22032a2.js";import{f as I,g as $,h as A}from"./dsp-adcontrol-88f17c98.js";import{_ as E}from"./search-69477387.js";import"./format-fb65a074.js";import"./moment-9bd84dc2.js";import"./dsp-advertiser-7caa14fa.js";import"./dsp-08c3581e.js";const L={class:"controlBox w100 mb-10"},R={class:"flex jc-start flex-wrap w100"},B={class:"flex"},T={class:"flex"},G=C(" 查询 "),H={class:"mb-10 w100"},J=C("新建广告组"),K=["onClick"],M={class:"flex jc-around"},W=C("编辑"),X=C("复制"),Y=C("归档"),Z={class:"w100 flex"},ee=C("复制"),ae=n({name:"adserieslist"});var le,te=d(n((le=i({},ae),a(le,l({setup(e){const a=u([{id:""}]),{status:l,adv_type:t,ind_cla:o,third_party:s,return_mode:r}=D,{goNewUrl:d,getRouterData:n,getCommonCountryList:C,openAlert:ae}=O(),le=p({adv_series_id:"",status:"",adv_series_type:"",marbet_target:"",is_del:"1",value_type:"adv_group_name",value:""}),te=u(!1),oe=p({report_api:""});let se=p({dialogVisible:!1,cache:{item:{}},searchForm:le,useData:le,loading:!0,options:{adv_series_id:[],status:l,adv_series_type:[{value:1,label:"动态商品促销"},{value:2,label:"固定链接推广"}],marbet_target:[{value:1,label:"再营销"},{value:2,label:"拉新"}],value_type:[{value:"adv_group_name",label:"广告组名称"},{value:"id",label:"广告组ID"},{value:"descs",label:"描述"}],promotion_cycle:[{value:1,label:"从现在开始长期有效"},{value:2,label:"限定周期"}]},list:[{id:1}],pagination:{pageSizes:[20,50,100,500,1e3],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}),re=p({data:{mode:""},options:{mode:[{value:1,label:"开启"},{value:2,label:"暂停"},{value:0,label:"归档"}]}});const ie=()=>{se.useData=S.cloneDeep(se.searchForm),pe()};u([]);const de=()=>{d({url:"/adcontrol/adgroup/create",query:{type:"create"}})},ne=async e=>{ae({text:`确认归档${e.row.name}？`,title:"归档操作",buttonText:"确认"},(e=>async()=>{const{row:a,$index:l}=e,t=await A({id:a.id});Q(t)&&se.list.splice(l,1)})(e))},ue=async()=>{a.value.map((e=>e.id));let e=re.data.mode;e.toString(),e.toString(),e.toString()},pe=async()=>{se.loading=!0;let{query:e,params:a}=n(),{adseries:l}=e;le.adv_series_id=l;let t=i({page:se.pagination.listQuery.page,limit:se.pagination.listQuery.limit},le);t[t.value_type]=t.value,delete t.value_type,delete t.value,t=q(t);const o=await I(t);if(o){const{data:e}=o;se.list=null==e?void 0:e.data,se.pagination.total=Number(e.count)}se.loading=!1};return c((()=>{ie()})),(e,a)=>{const l=m("el-option"),t=m("el-select"),o=m("el-form-item"),s=m("el-input"),r=m("el-checkbox"),i=m("el-button"),n=m("el-form"),u=m("el-table-column"),p=m("el-switch"),c=m("el-table"),C=m("el-dialog"),O=b("loading");return v(),_("div",null,[f("div",L,[g(E),g(n,{modelValue:h(se).searchForm,"onUpdate:modelValue":a[5]||(a[5]=e=>h(se).searchForm=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:y((()=>[f("div",R,[g(o,{label:""},{default:y((()=>[g(t,{modelValue:h(se).searchForm.status,"onUpdate:modelValue":a[0]||(a[0]=e=>h(se).searchForm.status=e),filterable:"",clearable:"",placeholder:"全部状态"},{default:y((()=>[(v(!0),_(x,null,F(h(se).options.status,(e=>(v(),j(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),g(o,{label:""},{default:y((()=>[g(t,{modelValue:h(se).searchForm.adv_series_id,"onUpdate:modelValue":a[1]||(a[1]=e=>h(se).searchForm.adv_series_id=e),filterable:"",clearable:"",placeholder:"广告系列"},{default:y((()=>[(v(!0),_(x,null,F(h(se).options.adv_series_id,(e=>(v(),j(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),g(o,{label:""},{default:y((()=>[g(s,{modelValue:h(se).searchForm.value,"onUpdate:modelValue":a[3]||(a[3]=e=>h(se).searchForm.value=e),placeholder:"请输入",class:"input-with-select"},{prepend:y((()=>[g(t,{modelValue:h(se).searchForm.value_type,"onUpdate:modelValue":a[2]||(a[2]=e=>h(se).searchForm.value_type=e),placeholder:"",class:"search-input-select",style:{width:"120px"}},{default:y((()=>[(v(!0),_(x,null,F(h(se).options.value_type,(e=>(v(),j(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),g(o,{label:""},{default:y((()=>[g(r,{modelValue:h(se).searchForm.is_del,"onUpdate:modelValue":a[4]||(a[4]=e=>h(se).searchForm.is_del=e),"true-label":"","false-label":"1",label:"包含已归档"},null,8,["modelValue"])])),_:1})]),f("div",B,[g(o,{class:"mr-0",style:{"margin-right":"0px"}},{default:y((()=>[f("div",T,[g(i,{type:"primary",onClick:ie},{default:y((()=>[G])),_:1}),w(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),f("div",H,[g(i,{type:"primary",onClick:de},{default:y((()=>[J])),_:1}),g(t,{class:"ml-10",modelValue:h(re).data.mode,"onUpdate:modelValue":a[6]||(a[6]=e=>h(re).data.mode=e),filterable:"",placeholder:"批量操作",onChange:ue},{default:y((()=>[(v(!0),_(x,null,F(h(re).options.mode,(e=>(v(),j(l,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),w(" table "),V((v(),j(c,{center:"",data:h(se).list,class:"w100",border:""},{default:y((()=>[g(u,{sortable:"",prop:"id",label:"广告组ID",align:"center"}),g(u,{sortable:"",width:"120",prop:"adv_series_name",label:"广告组名称",align:"center"}),g(u,{sortable:"",prop:"status",label:"开关",align:"center"},{default:y((e=>[g(p,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":2,onClick:a=>(async({row:e})=>{let a={id:e.id,status:e.status},l=await $(a);Q(l)})(e)},null,8,["modelValue","onUpdate:modelValue","onClick"]),w(" <span>{{getOptionsValue(scope.row.status, state.options.status)}}</span> ")])),_:1}),g(u,{sortable:"",prop:"status",label:"状态",align:"center"},{default:y((e=>[f("span",null,U(h(z)(e.row.status,h(se).options.status)),1)])),_:1}),g(u,{sortable:"",prop:"ad",label:"广告",align:"center"},{default:y((e=>[w(" <span>{{scope.row.ad}}</span> "),f("span",{class:"color_primary cp",onClick:a=>(({row:e})=>{d({url:"/adcontrol/ad/list",query:{adseries:e.id,type:"list"}})})(e)},U(e.row.ad?e.row.ad.length:NaN),9,K)])),_:1}),g(u,{width:"200",label:"操作",align:"center"},{default:y((e=>[f("div",M,[g(i,{class:"cp",type:"primary",onClick:a=>(({row:e})=>{const{id:a}=e;d({url:`/adcontrol/adgroup/edit/${a}`,query:{type:"edit"}})})(e)},{default:y((()=>[W])),_:2},1032,["onClick"]),g(i,{class:"cp",type:"primary"},{default:y((()=>[X])),_:1}),w(' <el-button\n              v-if="scope.row.is_del === 2"\n              class="cp"\n              type="default"\n              @click="editFn(scope)"\n            >查看</el-button> '),g(i,{class:"cp",type:"danger",onClick:a=>ne(e),disabled:2===e.row.is_del},{default:y((()=>[Y])),_:2},1032,["onClick","disabled"])])])),_:1}),g(u,{sortable:"",width:"120",prop:"country",label:"国家",align:"center"},{default:y((e=>[f("span",null,U(e.row.country),1)])),_:1}),g(u,{sortable:"",width:"120",prop:"promotion_cycle",label:"推广周期",align:"center"},{default:y((e=>[f("span",null,U(h(z)(e.row.promotion_cycle,h(se).options.promotion_cycle)),1)])),_:1}),g(u,{sortable:"",width:"120",prop:"user",label:"创建人",align:"center"}),g(u,{sortable:"",width:"160",prop:"create_date",label:"创建时间",align:"center"}),g(u,{sortable:"",width:"160",prop:"update_date",label:"更新时间",align:"center"}),g(u,{sortable:"",width:"160",prop:"imp_number",label:"展示数",align:"center"})])),_:1},8,["data"])),[[O,h(se).loading]]),w(" 分页 "),f("div",Z,[V(g(P,{page:h(se).pagination.listQuery.page,"onUpdate:page":a[7]||(a[7]=e=>h(se).pagination.listQuery.page=e),limit:h(se).pagination.listQuery.limit,"onUpdate:limit":a[8]||(a[8]=e=>h(se).pagination.listQuery.limit=e),total:h(se).pagination.total,"page-sizes":h(se).pagination.pageSizes,onPagination:pe},null,8,["page","limit","total","page-sizes"]),[[k,h(se).pagination.total]])]),w(" 复制 "),g(C,{modelValue:te.value,"onUpdate:modelValue":a[10]||(a[10]=e=>te.value=e),title:"Report Api",width:"90%"},{default:y((()=>[f("p",null,U(h(oe).report_api),1),g(i,{class:"cp mr-10",type:"default",onClick:a[9]||(a[9]=e=>{return a=h(oe).report_api,void N(a);var a})},{default:y((()=>[ee])),_:1})])),_:1},8,["modelValue"])])}}})))),[["__scopeId","data-v-3d91c0cc"]]);export{te as default};