import{d as e,a as r,r as a,e as t,w as l,I as i,a2 as o,M as n,m as s,s as d,n as c,z as u,c as p,p as f,v as _,x as m,q as g,O as v,P as h,b as y,A as b,L as F}from"./index-b160a4d6.js";import{m as k}from"./message-6c553f21.js";const w={class:"container"},A=_("div",{class:"flex jc-start content-li-title"},[_("div",{class:"num-circle"},"1"),_("h5",null,"Offer Basic Info")],-1),q={class:"content-con flex column"},x={class:"flex jc-start form-one radio-box"},D=["textContent"],O={class:"w100 flex"},V=y(" Save "),S=y(" 123 "),E={slot:"footer",class:"dialog-footer"},C=y("确 定"),j=e({__name:"details",setup(e){let{proxy:y}=F();r();const j="此项必填";let N=(e,r,a)=>{"AppsFlyer"===L.ruleForm.attribute_provider?L.ruleForm.tracking_link.includes(L.ruleForm.pkg_name)?a(void 0):a(new Error("Attribute Provider:为Appsflyer时Package Name的值必须包含在Traking Link中")):a(void 0)},P=a({offer_id:"",channel:"",copy_offer:"",offer_open_type:""}),I=a({channel:[{required:!0,message:j,trigger:["blur","change"]}],offer_open_type:[{required:!0,message:j,trigger:["blur","change"]}]}),J=a({channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica"],time:[-1,...[...new Array(24)].map(((e,r)=>r))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]}),M=a({offer:{},index:null,cacheDevice:{}});t("");let U=t(0),B=t([0,100]),L=a({dialogVisibleDevice:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica"],time:[-1,...[...new Array(24)].map(((e,r)=>r))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pid:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:"",max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:void 0,cutoff_end:void 0,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",note:""},rules:{channel:[{required:!0,message:j,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:j,trigger:["blur","change"]}],title:[{required:!0,message:j,trigger:["blur","change"]}],tracking_link:[{required:!0,message:j,trigger:["blur","change"]},{validator:(e,r,a)=>{new RegExp("\\s+","g").test(r)?a(new Error("链接中有空格")):a(void 0),a(void 0)}},{validator:(e,r,a)=>{/^http/.test(r)?a(void 0):a(new Error("必须为有效链接")),a(void 0)}},{validator:(e,r,a)=>{if("AppsFlyer"===L.ruleForm.attribute_provider){["af_sub_siteid","af_installpostback"].map((e=>{r.includes(e)&&a(new Error(`链接有错误，不能包含${e}`))}))}a(void 0)}},{validator:N}],pkg_name:[{required:!0,message:j,trigger:["blur","change"]},{validator:N}],conversion_flow:[{required:!0,message:j,trigger:["blur","change"]}],event_name:[{required:!0,message:j,trigger:["blur","change"]},{validator:(e,r,a)=>{"1"===L.ruleForm.conversion_flow?a(void 0):a(r?void 0:new Error(j))}}],payout:[{required:!0,message:j,trigger:["blur","change"]}],platform:[{required:!0,message:j,trigger:["blur","change"]}],country:[{required:!0,message:j,trigger:["blur","change"]}],max_clk_num:[{required:!0,message:j,trigger:["blur","change"]}],device:[{required:!0,validator:(e,r,a)=>{a(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,r,a)=>{r?1===r||L.ruleForm.hour?a(void 0):a(new Error("请选择具体数值")):a(new Error(j))},trigger:["blur","change"]}],clk_id:[{required:!0,message:j,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,r,a)=>{""!==r&&(""===L.ruleForm.end_hour?a(new Error(j)):a(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,r,a)=>{""!==r&&(""===L.ruleForm.start_hour?a(new Error(j)):a(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const T=()=>{$("ruleForm")},$=e=>{y.$refs[e].validate((e=>{if(!e)return!1;z()}))},z=async()=>{let e;L.ruleForm;let r={...L.ruleForm};r.clk_id=parseFloat(r.clk_id),r.conversion_flow=parseFloat(r.conversion_flow),r.cutoff_end=parseFloat(r.cutoff_end),r.cutoff_start=parseFloat(r.cutoff_start),r.end_hour=parseFloat(r.end_hour),r.start_hour=parseFloat(r.start_hour),r.hour=parseFloat(r.hour),r.max_clk_num=parseFloat(r.max_clk_num),r.payout=parseFloat(r.payout),r.platform=parseFloat(r.platform),r.site_clk_id=parseFloat(r.site_clk_id),r.site_clk_limit=parseFloat(r.site_clk_limit),r.site_id=parseFloat(r.site_id),r.site_install_limitation=parseFloat(r.site_install_limitation),r.diy_siteid=JSON.stringify(r.diy_siteid),r.device=JSON.stringify(r.device),"1"===L.ruleForm.type&&(delete r.id,delete r.offer_id,e=await ApiOperationOfferCreate(r)),"2"===L.ruleForm.type&&(e=await ApiOperationOfferEdit(r)),k(e)&&window.close()},G=()=>{L.ruleForm.device=M.cacheDevice.select,L.dialogVisibleDevice=!1};l(B,((e,r)=>{(e=>{L.ruleForm.cutoff_start=e[0]/100,L.ruleForm.cutoff_end=e[1]/100})(e)}),{immediate:!0});i((()=>{const e=U.value,r=L.ruleForm.cutoff_start,a=L.ruleForm.cutoff_end;return{judge:((Number(a)-Number(r))*Number(e)).toFixed(0),all:Number(e).toFixed(0)}})),o((()=>{(async()=>{L.ruleForm.pkg_name,L.ruleForm.country,L.ruleForm.platform})()}));const R=async e=>{const r=await ApiGetCopyOfferData({offer_id:e}),{data:a}=r,t=((e,r)=>{let a={};return r.type,e.device&&(e.device=JSON.parse(e.device)),e.diy_siteid&&(e.diy_siteid=JSON.parse(e.diy_siteid)),"2"===r.type&&(a.id=e.id,a.offer_id=e.offer_id),a={...e,...r},"1"===r.type&&(delete a.id,delete a.offer_id),a})(a,{type:L.ruleForm.type,isCopy:!0});L.ruleForm={...L.ruleForm,...t}},H=()=>{const e=L.ruleForm.copy_offer;R(e)};return i((()=>{const e=L.ruleForm.tracking_link,r=L.ruleForm.attribute_provider;let a="";if("AppsFlyer"===r){const r=/pid=([\s\S]*)_int/g,t=[...e.matchAll(r)];if(0!==t.length)return a=t[0][1],L.ruleForm.pid=a,a}if("Adjust"===r){const r=/https:\/\/app.adjust.com\/([\s\S]*)\?/g,t=[...e.matchAll(r)];if(0!==t.length)return a=t[0][1],L.ruleForm.pid=a,a}return L.ruleForm.pid=a,a})),i((()=>{let e=0;if(M.cacheDevice,M.cacheDevice.hasOwnProperty("all")&&M.cacheDevice.hasOwnProperty("select")){let r=M.cacheDevice.all,a=M.cacheDevice.select;0!==r.length&&0!==a.length&&r.forEach((r=>{a.forEach((a=>{r.source===a.source&&r.label===a.label&&(e+=parseInt(r.device_count))}))})),L.search.deviceData.count=e}return null!=e?e:L.search.deviceData.count})),n((()=>{})),(e,r)=>{const a=s("el-form-item"),t=s("el-option"),l=s("el-select"),i=s("el-button"),o=s("el-input"),n=s("el-form"),y=s("el-dialog");return d(),c("div",w,[u(" form "),p(n,{ref_key:"ruleForm",ref:P,enctype:"multipart/form-data",rules:g(I),model:g(P),"label-width":"240px","label-position":"right"},{default:f((()=>[A,_("div",q,[u(" id "),p(a,{label:"ID:",prop:"offer_id"},{default:f((()=>[_("div",x,[_("span",{textContent:m(g(P).offer_id)},null,8,D)])])),_:1}),u(" channel "),p(a,{label:"Channel:",prop:"channel"},{default:f((()=>[p(l,{modelValue:g(P).channel,"onUpdate:modelValue":r[0]||(r[0]=e=>g(P).channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(d(!0),c(v,null,h(g(J).channel,(e=>(d(),b(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(" copy_offer "),p(a,{label:"Copy Offer:",prop:"copy_offer"},{default:f((()=>[p(o,{modelValue:g(P).copy_offer,"onUpdate:modelValue":r[1]||(r[1]=e=>g(P).copy_offer=e),modelModifiers:{trim:!0},class:"form-one copy-btn search-input",placeholder:""},{append:f((()=>[p(i,{slot:"append",type:"primary",icon:"Search",onClick:H})])),_:1},8,["modelValue"])])),_:1}),u(" offer_open_type "),p(a,{label:"Open Type:",prop:"offer_open_type"},{default:f((()=>[p(l,{modelValue:g(P).offer_open_type,"onUpdate:modelValue":r[2]||(r[2]=e=>g(P).offer_open_type=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(d(!0),c(v,null,h(g(L).options.channel,(e=>(d(),b(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),u(" form "),u(" footer "),_("div",O,[p(i,{type:"primary",onClick:T},{default:f((()=>[V])),_:1})]),u(" footer "),u(" dialog "),u(" device "),p(y,{modelValue:g(L).dialogVisibleDevice,"onUpdate:modelValue":r[3]||(r[3]=e=>g(L).dialogVisibleDevice=e),title:"Device",width:"90%"},{default:f((()=>[S,_("span",E,[u(' <el-button @click="cancleDevice">取 消</el-button> '),p(i,{type:"primary",onClick:G},{default:f((()=>[C])),_:1})])])),_:1},8,["modelValue"])])}}});export{j as default};
