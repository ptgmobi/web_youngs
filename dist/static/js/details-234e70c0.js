var e=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(l,r,a)=>r in l?e(l,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[r]=a,t=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&o(e,i,t[i]);if(l)for(var i of l(t))a.call(t,i)&&o(e,i,t[i]);return e};import{d as i,r as u,L as d,q as n,o as s,c,e as m,s as p,v as f,x as _,z as v,N as b,f as y,a as g,h as F,I as h,w as k,y as V,O as w,A as D,g as x,E as U}from"./main-61c3af98.js";import{g as j,h as C,i as S,j as E,_ as q,k as O,d as R}from"./device-0feb49e7.js";import{m as A}from"./message-eb16f05b.js";import{_ as P}from"./cutOff-8989e740.js";import"./format-15e3f823.js";import"./moment-9bd84dc2.js";import"./lodash-39fd9b63.js";import"./buzz-d600a8af.js";const I=y(" 添加 "),z=y(" 删除 "),M={class:"dialog-footer mt-10"},L=y("清 空"),N=y("确 定"),T=i({props:{msg:{require:!0,default:()=>"",type:Array}},emits:["kk","up"],setup(e,{emit:l}){const r=e,a="此项必填";const o=e=>{let l=new RegExp(/\n+/),r=new RegExp(/[\S]+/),a=e.split(l),o=!0,t=[];return a.forEach(((e,l)=>{if(e&&r.test(e)){let l=e.trim().split(/\s+/);if(2===l.length){let e={diy_siteid:l[0],weight:l[1]};t.push(e)}else o=!1}else o=!1})),o?t:[]};let t=u({siteData:Array.isArray(r.msg)?r.msg:[],siteRules:{site:[{required:!0,validator:(e,l,r)=>{if(""!==l){const e=o(l);r(e?void 0:new Error("格式错误！"))}else r(new Error(a))},trigger:"blur"}]},siteRuleForm:{site:""}});const i=()=>{t.siteData=[...o(t.siteRuleForm.site)]},y=()=>{t.siteData=[]},g=()=>{l("kk",t.siteData)};return d((()=>{})),(e,l)=>{const r=n("el-input"),a=n("el-form-item"),o=n("el-button"),u=n("el-form"),d=n("el-table-column"),F=n("el-table");return s(),c(b,null,[m(u,{ref:"siteRuleForm",enctype:"multipart/form-data",rules:f(t).siteRules,model:f(t).siteRuleForm,"label-position":"right"},{default:p((()=>[m(a,{label:"diy_siteid:",prop:"site"},{default:p((()=>[m(r,{modelValue:f(t).siteRuleForm.site,"onUpdate:modelValue":l[0]||(l[0]=e=>f(t).siteRuleForm.site=e),class:"w100",type:"textarea",rows:4,placeholder:""},null,8,["modelValue"])])),_:1}),m(a,null,{default:p((()=>[m(o,{type:"primary",onClick:i},{default:p((()=>[I])),_:1})])),_:1})])),_:1},8,["rules","model"]),m(F,{data:f(t).siteData},{default:p((()=>[m(d,{align:"center",property:"diy_siteid",label:"diy_siteid"}),m(d,{align:"center",property:"weight",label:"权重"}),m(d,{align:"center",label:"操作"},{default:p((e=>[m(o,{type:"danger",onClick:l=>{return e.row,r=e.$index,void t.siteData.splice(r,1);var r}},{default:p((()=>[z])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),_("span",M,[v(' <el-button @click="cancleDevice">取 消</el-button> '),m(o,{type:"primary",onClick:y},{default:p((()=>[L])),_:1}),m(o,{type:"primary",onClick:g},{default:p((()=>[N])),_:1})])],64)}}}),$={class:"content-con flex column"},J={class:"flex jc-start form-one radio-box"},H=["textContent"],K={class:"form-one flex jc-start"},B={class:"form-one flex jc-start"},G=y(" CPI "),Q=y(" CPA "),W={class:"flex jc-start form-one"},X=y(" 算法 "),Y=y(" 标签 "),Z={class:"flex jc-start form-one"},ee={class:"flex jc-start form-one"},le={class:"flex form-one jc-start radio-box"},re=y(" Slot_ID "),ae=y(" Update(Hours) "),oe={class:"flex jc-start form-one jc-start radio-box"},te=y(" Real "),ie=y(" Virtual "),ue={class:"w100 flex"},de=y(" Save "),ne={slot:"footer",class:"dialog-footer"},se=y("确 定"),ce=i({setup(e){let{proxy:l}=x();const r=g(),a="此项必填";let o=(e,l,r)=>{"AppsFlyer"===z.ruleForm.attribute_provider?z.ruleForm.tracking_link.includes(z.ruleForm.pkg_name)?r(void 0):r(new Error("Attribute Provider:为Appsflyer时Package Name的值必须包含在Traking Link中")):r(void 0)},i=u({offer:{},index:null,cacheDevice:{}}),y=F(""),I=F(""),z=u({dialogVisibleDevice:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica","Lazada","Other"],time:[-1,...[...new Array(24)].map(((e,l)=>l))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[],pid:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pid:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:[],max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:0,cutoff_end:1,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",campaign_id:"",note:"",p_type:2},rules:{channel:[{required:!0,message:a,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],tracking_link:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{new RegExp("\\s+","g").test(l)?r(new Error("链接中有空格")):r(void 0),r(void 0)}},{validator:(e,l,r)=>{/^http/.test(l)?r(void 0):r(new Error("必须为有效链接")),r(void 0)}},{validator:(e,l,r)=>{if("AppsFlyer"===z.ruleForm.attribute_provider){["af_sub_siteid","af_installpostback"].map((e=>{l.includes(e)&&r(new Error(`链接有错误，不能包含${e}`))}))}else"Adjust"===z.ruleForm.attribute_provider&&(l.includes("install_callback")||l.includes("event_callback")?r(new Error("链接里不可以包含install_callback和event_callback")):r(void 0));r(void 0)}},{validator:o}],pid:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{""===l?r(new Error(a)):l.includes("，")?r(new Error("请使用英文逗号分割")):("1"===y.value&&(z.ruleForm.country.length>1&&l.includes(",")?r(new Error("由于国家选择了多个，所以pid不能填多个")):r(void 0)),"2"===y.value&&(l.includes(",")?r(new Error("修改状态下PID不能有逗号")):r(void 0)))}}],pkg_name:[{required:!0,message:a,trigger:["blur","change"]},{validator:o}],conversion_flow:[{required:!0,message:a,trigger:["blur","change"]}],event_name:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{"1"===z.ruleForm.conversion_flow?r(void 0):r(l?void 0:new Error(a))}}],payout:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{if(""===l)r(new Error(a));else{let e=z.ruleForm.pid,a=e?e.split(","):[];e&&a.length>1&&"1"===y.value&&l.length>1?r(new Error("由于pid有多个，所以不能选择多个国家")):r(void 0)}}}],max_clk_num:[{required:!0,message:a,trigger:["blur","change"]}],device:[{required:!0,validator:(e,l,r)=>{r(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,l,r)=>{l?"1"===l.toString()||z.ruleForm.hour?r(void 0):r(new Error("请选择具体数值")):r(new Error(a))},trigger:["blur","change"]}],clk_id:[{required:!0,message:a,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===z.ruleForm.end_hour?r(new Error(a)):r(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===z.ruleForm.start_hour?r(new Error(a)):r(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}],p_type:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const M=()=>{z.dialogVisibleSite=!0;const e=z.ruleForm.diy_siteid;z.siteData=e},L=()=>{N("ruleForm")},N=e=>{l.$refs[e].validate((e=>{if(!e)return!1;ce()}))},ce=async()=>{let e;z.ruleForm;let l=t({},z.ruleForm);l.clk_id=parseFloat(l.clk_id),l.conversion_flow=parseFloat(l.conversion_flow),l.cutoff_end=parseFloat(l.cutoff_end),l.cutoff_start=parseFloat(l.cutoff_start),l.end_hour=parseFloat(l.end_hour),l.start_hour=parseFloat(l.start_hour),l.hour=parseFloat(l.hour),l.max_clk_num=parseFloat(l.max_clk_num),l.payout=parseFloat(l.payout),l.platform=parseFloat(l.platform),l.site_clk_id=parseFloat(l.site_clk_id),l.site_clk_limit=parseFloat(l.site_clk_limit),l.site_id=parseFloat(l.site_id),l.site_install_limitation=parseFloat(l.site_install_limitation),l.diy_siteid=JSON.stringify(l.diy_siteid),l.device=JSON.stringify(l.device),l.country=l.country.join(","),"1"===z.ruleForm.type&&(delete l.id,delete l.offer_id,e=await j(l)),"2"===z.ruleForm.type&&(e=await C(l)),A(e)&&window.close()},me=e=>{z.ruleForm.diy_siteid=e,z.dialogVisibleSite=!1},pe=e=>{i.cacheDevice.select=e},fe=()=>{z.ruleForm.device=i.cacheDevice.select,z.dialogVisibleDevice=!1},_e=e=>{z.ruleForm.cutoff_start=e.cutoff_start,z.ruleForm.cutoff_end=e.cutoff_end},ve=(e,l)=>{let r={};if(l.type,e.device&&(e.device=JSON.parse(e.device)),e.diy_siteid)try{e.diy_siteid=JSON.parse(e.diy_siteid)}catch(a){}return"2"===l.type&&(e.id=e.id,e.offer_id=e.offer_id),e.country=e.country?e.country.split(","):[],r=t(t({},e),l),"1"===l.type&&(delete r.id,delete r.offer_id),r},be=()=>{z.ruleForm.platform&&z.ruleForm.country?(z.dialogVisibleDevice=!0,i.cacheDevice.select=z.ruleForm.device,(async()=>{const e={id:z.ruleForm.id,platform:z.ruleForm.platform,country:z.ruleForm.country},{data:l}=await R(e);i.cacheDevice.all=l.all})()):U.error("请提前选择平台和国家")},ye=()=>{(async e=>{const l=await O({offer_id:e}),{data:r}=l,a=ve(r,{type:z.ruleForm.type,isCopy:!0});z.ruleForm=t(t({},z.ruleForm),a)})(z.ruleForm.copy_offer)};h((()=>{let e=0;if(i.cacheDevice,i.cacheDevice.hasOwnProperty("all")&&i.cacheDevice.hasOwnProperty("select")){let l=i.cacheDevice.all,r=i.cacheDevice.select;0!==l.length&&0!==r.length&&l.forEach((l=>{r.forEach((r=>{l.source===r.source&&l.label===r.label&&(e+=parseInt(l.device_count))}))})),z.search.deviceData.count=e}return null!=e?e:z.search.deviceData.count}));const ge=()=>{l.$refs.ruleForm.validateField("pid")};return k((()=>z.ruleForm.tracking_link),((e,l)=>{(()=>{const e=z.ruleForm.tracking_link,l=z.ruleForm.attribute_provider;let r="";if(e.includes("pid={PID}"))return!1;if("AppsFlyer"===l){const l=/pid=([\s\S]*)_int/g,a=[...e.matchAll(l)];0!==a.length&&(r=a[0][1])}"Adjust"===l&&(r=new URL(e).pathname.split("/").findLast((e=>e)));z.ruleForm.pid=r})()}),{deep:!0}),d((()=>{if((async()=>{const e=await S();if(e){const{data:l}=e;return z.options.channel=Object.values(l.channel),z.options.country=Object.values(l.country),z.options.category=Object.values(l.category),"获取配置成功"}})(),I.value=r.currentRoute.value.name,I.value,"buzz-async-create"===I.value&&(z.ruleForm.operation_type="1",z.ruleForm.type="1",y.value="1"),"buzz-async-edit"===I.value){z.ruleForm.operation_type="2",z.ruleForm.type="2",y.value="2";(async e=>{const l=await E(e),{data:r}=l;z.ruleForm=ve(r,{type:z.ruleForm.type,isCopy:!1}),i.offer=r})(r.currentRoute.value.params.id)}})),(e,l)=>{const r=n("el-form-item"),a=n("el-option"),o=n("el-select"),t=n("el-button"),u=n("el-input"),d=n("el-radio"),y=n("el-form"),g=n("el-dialog");return s(),c("div",null,[v(" form "),m(y,{ref:"ruleForm",enctype:"multipart/form-data",rules:f(z).rules,model:f(z).ruleForm,"label-width":"240px","label-position":"right"},{default:p((()=>[_("div",$,[v(" offer_id "),m(r,{label:"Offer ID:",prop:"offer_id"},{default:p((()=>[_("div",J,[_("span",{textContent:V(f(z).ruleForm.offer_id)},null,8,H)])])),_:1}),v(" channel "),m(r,{label:"Channel:",prop:"channel"},{default:p((()=>[m(o,{modelValue:f(z).ruleForm.channel,"onUpdate:modelValue":l[0]||(l[0]=e=>f(z).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,w(f(z).options.channel,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" copy_offer "),m(r,{label:"Copy Offer:",prop:"copy_offer"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.copy_offer,"onUpdate:modelValue":l[1]||(l[1]=e=>f(z).ruleForm.copy_offer=e),modelModifiers:{trim:!0},class:"form-one copy-btn search-input",placeholder:""},{append:p((()=>[m(t,{slot:"append",type:"primary",icon:"Search",onClick:ye})])),_:1},8,["modelValue"])])),_:1}),v(" attribute_provider "),m(r,{label:"Attribute Provider:",prop:"attribute_provider"},{default:p((()=>[m(o,{modelValue:f(z).ruleForm.attribute_provider,"onUpdate:modelValue":l[2]||(l[2]=e=>f(z).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,w(f(z).options.attribute_provider,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" title "),m(r,{label:"Offer Title:",prop:"title"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.title,"onUpdate:modelValue":l[3]||(l[3]=e=>f(z).ruleForm.title=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" tracking_link "),v(" 此处需要去除空格和制表符 "),m(r,{class:"mb-30",label:"Traking Link:",prop:"tracking_link"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.tracking_link,"onUpdate:modelValue":l[4]||(l[4]=e=>f(z).ruleForm.tracking_link=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),v(" pid "),m(r,{label:"Pid:",prop:"pid"},{default:p((()=>[_("div",K,[v(" <span>{{ handlePid }}</span> "),v(" <span>{{data.ruleForm.pid}}</span> "),m(u,{modelValue:f(z).ruleForm.pid,"onUpdate:modelValue":l[5]||(l[5]=e=>f(z).ruleForm.pid=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:1,maxRows:80},placeholder:"多个pid请使用英文逗号分割"},null,8,["modelValue"])])])),_:1}),v(" pkg_name "),m(r,{label:"Package Name:",prop:"pkg_name"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.pkg_name,"onUpdate:modelValue":l[6]||(l[6]=e=>f(z).ruleForm.pkg_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" conversion_flow_type "),m(r,{label:"Conversion Flow:",prop:"conversion_flow"},{default:p((()=>[_("div",B,[m(d,{modelValue:f(z).ruleForm.conversion_flow,"onUpdate:modelValue":l[7]||(l[7]=e=>f(z).ruleForm.conversion_flow=e),label:1},{default:p((()=>[G])),_:1},8,["modelValue"]),m(d,{modelValue:f(z).ruleForm.conversion_flow,"onUpdate:modelValue":l[8]||(l[8]=e=>f(z).ruleForm.conversion_flow=e),label:2},{default:p((()=>[Q])),_:1},8,["modelValue"])])])),_:1}),v(" conversion_flow "),2===f(z).ruleForm.conversion_flow?(s(),D(r,{key:0,label:"Event Name:",prop:"event_name"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.event_name,"onUpdate:modelValue":l[9]||(l[9]=e=>f(z).ruleForm.event_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})):v("v-if",!0),v(" payout "),m(r,{label:"Payout($):",prop:"payout"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.payout,"onUpdate:modelValue":l[10]||(l[10]=e=>f(z).ruleForm.payout=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" platform "),m(r,{label:"Select Platform:",prop:"platform"},{default:p((()=>[m(o,{modelValue:f(z).ruleForm.platform,"onUpdate:modelValue":l[11]||(l[11]=e=>f(z).ruleForm.platform=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,w(f(z).options.platform,(e=>(s(),D(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" country "),m(r,{label:"Targeting Countries:",prop:"country"},{default:p((()=>[m(o,{modelValue:f(z).ruleForm.country,"onUpdate:modelValue":l[12]||(l[12]=e=>f(z).ruleForm.country=e),multiple:"",filterable:"",class:"form-one",clearable:"",placeholder:"",onChange:ge},{default:p((()=>[(s(!0),c(b,null,w(f(z).options.country,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" max_clk_num "),m(r,{label:"Click Limitation:",prop:"max_clk_num"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.max_clk_num,"onUpdate:modelValue":l[13]||(l[13]=e=>f(z).ruleForm.max_clk_num=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" Site Click Limitation "),m(r,{label:"Site Click Limitation:",prop:"site_clk_limit"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.site_clk_limit,"onUpdate:modelValue":l[14]||(l[14]=e=>f(z).ruleForm.site_clk_limit=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" start_hour "),m(r,{label:"Start Hour:",prop:"start_hour"},{default:p((()=>[m(o,{modelValue:f(z).ruleForm.start_hour,"onUpdate:modelValue":l[15]||(l[15]=e=>f(z).ruleForm.start_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),c(b,null,w(f(z).options.time,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" end_hour "),m(r,{label:"End Hour:",prop:"end_hour"},{default:p((()=>[m(o,{modelValue:f(z).ruleForm.end_hour,"onUpdate:modelValue":l[16]||(l[16]=e=>f(z).ruleForm.end_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),c(b,null,w(f(z).options.time,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" site_install_limitation"),v(' <el-form-item label="Site Install Limitation:" prop="site_install_limitation">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">\n            <el-option\n              v-for="item in 6"\n              :key="item"\n              :label="item - 1"\n              :value="item - 1">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" Select Device "),m(r,{label:"Delivery mode:",prop:"p_type"},{default:p((()=>[_("div",W,[m(d,{modelValue:f(z).ruleForm.p_type,"onUpdate:modelValue":l[17]||(l[17]=e=>f(z).ruleForm.p_type=e),label:1},{default:p((()=>[X])),_:1},8,["modelValue"]),m(d,{modelValue:f(z).ruleForm.p_type,"onUpdate:modelValue":l[18]||(l[18]=e=>f(z).ruleForm.p_type=e),label:2},{default:p((()=>[Y])),_:1},8,["modelValue"])])])),_:1}),2==f(z).ruleForm.p_type?(s(),D(r,{key:1,label:"Select Device:",prop:"device"},{default:p((()=>[_("div",Z,[m(t,{class:"cp ml-10",type:"primary",icon:"Setting",circle:"",onClick:be}),v(" <span class=\"ml-10\" v-text='countDevice'></span> ")])])),_:1})):v("v-if",!0),v(" Device Cutoff "),1==f(z).ruleForm.p_type?(s(),D(r,{key:2,label:"Device Cutoff:",prop:"cutoff_start"},{default:p((()=>[m(P,{class:"form-one",query:f(z).ruleForm,onUp:_e},null,8,["query"])])),_:1})):v("v-if",!0),v(" diy_siteid "),m(r,{label:"Diy SiteID:",prop:"site"},{default:p((()=>[_("div",ee,[m(t,{class:"cp ml-10",icon:"Tools",circle:"",onClick:M})])])),_:1}),v(" site_id "),m(r,{label:"Site ID:",prop:"site_id"},{default:p((()=>[_("div",le,[m(d,{modelValue:f(z).ruleForm.site_id,"onUpdate:modelValue":l[19]||(l[19]=e=>f(z).ruleForm.site_id=e),label:1},{default:p((()=>[re])),_:1},8,["modelValue"]),m(d,{modelValue:f(z).ruleForm.site_id,"onUpdate:modelValue":l[20]||(l[20]=e=>f(z).ruleForm.site_id=e),label:2},{default:p((()=>[ae])),_:1},8,["modelValue"]),m(o,{modelValue:f(z).ruleForm.hour,"onUpdate:modelValue":l[21]||(l[21]=e=>f(z).ruleForm.hour=e),filterable:"",class:"form-one ml-10",clearable:"",placeholder:"",disabled:2!==f(z).ruleForm.site_id},{default:p((()=>[(s(!0),c(b,null,w(f(z).options.site_id,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])),_:1}),v(" clk_id "),m(r,{label:"Click ID:",prop:"clk_id"},{default:p((()=>[_("div",oe,[m(d,{modelValue:f(z).ruleForm.clk_id,"onUpdate:modelValue":l[22]||(l[22]=e=>f(z).ruleForm.clk_id=e),label:1},{default:p((()=>[te])),_:1},8,["modelValue"]),m(d,{modelValue:f(z).ruleForm.clk_id,"onUpdate:modelValue":l[23]||(l[23]=e=>f(z).ruleForm.clk_id=e),label:2},{default:p((()=>[ie])),_:1},8,["modelValue"])])])),_:1}),v(" site_clk_id "),v(' <el-form-item label="Site Click ID:" prop="site_clk_id">\n          <div class=\'flex jc-start form-one jc-start radio-box\'>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>\n          </div>\n        </el-form-item> '),v(" category "),v(' <el-form-item label="Category:" prop="category_id">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.category_id" clearable placeholder="">\n            <el-option\n              v-for="(value, key) in handleOptionsCategory"\n              :key="key"\n              :label="value"\n              :value="key">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" note "),m(r,{label:"Note:",prop:"note"},{default:p((()=>[m(u,{modelValue:f(z).ruleForm.note,"onUpdate:modelValue":l[24]||(l[24]=e=>f(z).ruleForm.note=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),v(" form "),v(" footer "),_("div",ue,[m(t,{type:"primary",onClick:L},{default:p((()=>[de])),_:1})]),v(" footer "),v(" dialog "),v(" device "),m(g,{modelValue:f(z).dialogVisibleDevice,"onUpdate:modelValue":l[27]||(l[27]=e=>f(z).dialogVisibleDevice=e),title:"Device",width:"90%"},{default:p((()=>[f(z).dialogVisibleDevice?(s(),D(q,{key:0,all:f(i).cacheDevice.all,"onUpdate:all":l[25]||(l[25]=e=>f(i).cacheDevice.all=e),select:f(i).cacheDevice.select,"onUpdate:select":l[26]||(l[26]=e=>f(i).cacheDevice.select=e),onKk:pe},null,8,["all","select"])):v("v-if",!0),_("span",ne,[v(' <el-button @click="cancleDevice">取 消</el-button> '),m(t,{type:"primary",onClick:fe},{default:p((()=>[se])),_:1})])])),_:1},8,["modelValue"]),v(" site "),m(g,{modelValue:f(z).dialogVisibleSite,"onUpdate:modelValue":l[28]||(l[28]=e=>f(z).dialogVisibleSite=e),title:"diy_siteid",width:"90%"},{default:p((()=>[m(f(T),{msg:f(z).siteData,onKk:me},null,8,["msg"])])),_:1},8,["modelValue"])])}}});export{ce as default};
