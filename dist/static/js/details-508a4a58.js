var e=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(l,r,a)=>r in l?e(l,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[r]=a,t=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&o(e,i,t[i]);if(l)for(var i of l(t))a.call(t,i)&&o(e,i,t[i]);return e};import{d as i,r as u,L as d,q as n,o as s,c,e as m,s as p,v as f,x as _,z as v,N as b,f as y,a as g,h as F,I as h,y as k,O as V,A as w,g as D,E as x}from"./main-4990c854.js";import{g as U,h as j,i as S,j as C,_ as O,k as q,d as E}from"./device-394d22fc.js";import{m as A}from"./message-2ec72094.js";import{_ as R}from"./cutOff-ba292b06.js";import"./format-15e3f823.js";import"./moment-9bd84dc2.js";import"./lodash-d6ca2f8e.js";import"./buzz-326eb9e7.js";const P=y(" 添加 "),I=y(" 删除 "),z={class:"dialog-footer mt-10"},L=y("清 空"),M=y("确 定"),N=i({props:{msg:{require:!0,default:()=>"",type:Array}},emits:["kk","up"],setup(e,{emit:l}){const r=e,a="此项必填";const o=e=>{let l=new RegExp(/\n+/),r=new RegExp(/[\S]+/),a=e.split(l),o=!0,t=[];return a.forEach(((e,l)=>{if(e&&r.test(e)){let l=e.trim().split(/\s+/);if(2===l.length){let e={diy_siteid:l[0],weight:l[1]};t.push(e)}else o=!1}else o=!1})),o?t:[]};let t=u({siteData:Array.isArray(r.msg)?r.msg:[],siteRules:{site:[{required:!0,validator:(e,l,r)=>{if(""!==l){const e=o(l);r(e?void 0:new Error("格式错误！"))}else r(new Error(a))},trigger:"blur"}]},siteRuleForm:{site:""}});const i=()=>{t.siteData=[...o(t.siteRuleForm.site)]},y=()=>{t.siteData=[]},g=()=>{l("kk",t.siteData)};return d((()=>{})),(e,l)=>{const r=n("el-input"),a=n("el-form-item"),o=n("el-button"),u=n("el-form"),d=n("el-table-column"),F=n("el-table");return s(),c(b,null,[m(u,{ref:"siteRuleForm",enctype:"multipart/form-data",rules:f(t).siteRules,model:f(t).siteRuleForm,"label-position":"right"},{default:p((()=>[m(a,{label:"diy_siteid:",prop:"site"},{default:p((()=>[m(r,{modelValue:f(t).siteRuleForm.site,"onUpdate:modelValue":l[0]||(l[0]=e=>f(t).siteRuleForm.site=e),class:"w100",type:"textarea",rows:4,placeholder:""},null,8,["modelValue"])])),_:1}),m(a,null,{default:p((()=>[m(o,{type:"primary",onClick:i},{default:p((()=>[P])),_:1})])),_:1})])),_:1},8,["rules","model"]),m(F,{data:f(t).siteData},{default:p((()=>[m(d,{align:"center",property:"diy_siteid",label:"diy_siteid"}),m(d,{align:"center",property:"weight",label:"权重"}),m(d,{align:"center",label:"操作"},{default:p((e=>[m(o,{type:"danger",onClick:l=>{return e.row,r=e.$index,void t.siteData.splice(r,1);var r}},{default:p((()=>[I])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),_("span",z,[v(' <el-button @click="cancleDevice">取 消</el-button> '),m(o,{type:"primary",onClick:y},{default:p((()=>[L])),_:1}),m(o,{type:"primary",onClick:g},{default:p((()=>[M])),_:1})])],64)}}}),T={class:"content-con flex column"},J={class:"flex jc-start form-one radio-box"},$=["textContent"],H={class:"form-one flex jc-start"},K={class:"form-one flex jc-start"},B=y(" CPI "),G=y(" CPA "),Q={class:"flex jc-start form-one"},W=y(" 算法 "),X=y(" 标签 "),Y={class:"flex jc-start form-one"},Z={class:"flex jc-start form-one"},ee={class:"flex form-one jc-start radio-box"},le=y(" Slot_ID "),re=y(" Update(Hours) "),ae={class:"flex jc-start form-one jc-start radio-box"},oe=y(" Real "),te=y(" Virtual "),ie={class:"w100 flex"},ue=y(" Save "),de={slot:"footer",class:"dialog-footer"},ne=y("确 定"),se=i({setup(e){let{proxy:l}=D();const r=g(),a="此项必填";let o=(e,l,r)=>{"AppsFlyer"===P.ruleForm.attribute_provider?P.ruleForm.tracking_link.includes(P.ruleForm.pkg_name)?r(void 0):r(new Error("Attribute Provider:为Appsflyer时Package Name的值必须包含在Traking Link中")):r(void 0)},i=u({offer:{},index:null,cacheDevice:{}}),y=F(""),P=u({dialogVisibleDevice:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica","Lazada","Other"],time:[-1,...[...new Array(24)].map(((e,l)=>l))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pid:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:"",max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:0,cutoff_end:1,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",campaign_id:"",note:"",p_type:2},rules:{channel:[{required:!0,message:a,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],tracking_link:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{new RegExp("\\s+","g").test(l)?r(new Error("链接中有空格")):r(void 0),r(void 0)}},{validator:(e,l,r)=>{/^http/.test(l)?r(void 0):r(new Error("必须为有效链接")),r(void 0)}},{validator:(e,l,r)=>{if("AppsFlyer"===P.ruleForm.attribute_provider){["af_sub_siteid","af_installpostback"].map((e=>{l.includes(e)&&r(new Error(`链接有错误，不能包含${e}`))}))}else"Adjust"===P.ruleForm.attribute_provider&&(l.includes("install_callback")||l.includes("event_callback")?r(new Error("链接里不可以包含install_callback和event_callback")):r(void 0));r(void 0)}},{validator:o}],pkg_name:[{required:!0,message:a,trigger:["blur","change"]},{validator:o}],conversion_flow:[{required:!0,message:a,trigger:["blur","change"]}],event_name:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{"1"===P.ruleForm.conversion_flow?r(void 0):r(l?void 0:new Error(a))}}],payout:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]}],max_clk_num:[{required:!0,message:a,trigger:["blur","change"]}],device:[{required:!0,validator:(e,l,r)=>{r(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,l,r)=>{l?"1"===l.toString()||P.ruleForm.hour?r(void 0):r(new Error("请选择具体数值")):r(new Error(a))},trigger:["blur","change"]}],clk_id:[{required:!0,message:a,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===P.ruleForm.end_hour?r(new Error(a)):r(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===P.ruleForm.start_hour?r(new Error(a)):r(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}],p_type:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const I=()=>{P.dialogVisibleSite=!0;const e=P.ruleForm.diy_siteid;P.siteData=e},z=()=>{L("ruleForm")},L=e=>{l.$refs[e].validate((e=>{if(!e)return!1;M()}))},M=async()=>{let e;P.ruleForm;let l=t({},P.ruleForm);l.clk_id=parseFloat(l.clk_id),l.conversion_flow=parseFloat(l.conversion_flow),l.cutoff_end=parseFloat(l.cutoff_end),l.cutoff_start=parseFloat(l.cutoff_start),l.end_hour=parseFloat(l.end_hour),l.start_hour=parseFloat(l.start_hour),l.hour=parseFloat(l.hour),l.max_clk_num=parseFloat(l.max_clk_num),l.payout=parseFloat(l.payout),l.platform=parseFloat(l.platform),l.site_clk_id=parseFloat(l.site_clk_id),l.site_clk_limit=parseFloat(l.site_clk_limit),l.site_id=parseFloat(l.site_id),l.site_install_limitation=parseFloat(l.site_install_limitation),l.diy_siteid=JSON.stringify(l.diy_siteid),l.device=JSON.stringify(l.device),"1"===P.ruleForm.type&&(delete l.id,delete l.offer_id,e=await U(l)),"2"===P.ruleForm.type&&(e=await j(l)),A(e)&&window.close()},se=e=>{P.ruleForm.diy_siteid=e,P.dialogVisibleSite=!1},ce=e=>{i.cacheDevice.select=e},me=()=>{P.ruleForm.device=i.cacheDevice.select,P.dialogVisibleDevice=!1},pe=e=>{P.ruleForm.cutoff_start=e.cutoff_start,P.ruleForm.cutoff_end=e.cutoff_end},fe=(e,l)=>{let r={};if(l.type,e.device&&(e.device=JSON.parse(e.device)),e.diy_siteid)try{e.diy_siteid=JSON.parse(e.diy_siteid)}catch(a){}return"2"===l.type&&(r.id=e.id,r.offer_id=e.offer_id),r=t(t({},e),l),"1"===l.type&&(delete r.id,delete r.offer_id),r},_e=()=>{P.ruleForm.platform&&P.ruleForm.country?(P.dialogVisibleDevice=!0,i.cacheDevice.select=P.ruleForm.device,(async()=>{const e={id:P.ruleForm.id,platform:P.ruleForm.platform,country:P.ruleForm.country},{data:l}=await E(e);i.cacheDevice.all=l.all})()):x.error("请提前选择平台和国家")},ve=()=>{(async e=>{const l=await q({offer_id:e}),{data:r}=l,a=fe(r,{type:P.ruleForm.type,isCopy:!0});P.ruleForm=t(t({},P.ruleForm),a)})(P.ruleForm.copy_offer)},be=h((()=>{const e=P.ruleForm.tracking_link,l=P.ruleForm.attribute_provider;let r="";if("AppsFlyer"===l){const l=/pid=([\s\S]*)_int/g,a=[...e.matchAll(l)];0!==a.length&&(r=a[0][1])}if("Adjust"===l){r=new URL(e).pathname.split("/").findLast((e=>e))}return P.ruleForm.pid=r,r}));return h((()=>{let e=0;if(i.cacheDevice,i.cacheDevice.hasOwnProperty("all")&&i.cacheDevice.hasOwnProperty("select")){let l=i.cacheDevice.all,r=i.cacheDevice.select;0!==l.length&&0!==r.length&&l.forEach((l=>{r.forEach((r=>{l.source===r.source&&l.label===r.label&&(e+=parseInt(l.device_count))}))})),P.search.deviceData.count=e}return null!=e?e:P.search.deviceData.count})),d((()=>{if((async()=>{const e=await S();if(e){const{data:l}=e;return P.options.channel=Object.values(l.channel),P.options.country=Object.values(l.country),P.options.category=Object.values(l.category),"获取配置成功"}})(),y.value=r.currentRoute.value.name,y.value,"buzz-async-create"===y.value&&(P.ruleForm.operation_type="1",P.ruleForm.type="1"),"buzz-async-edit"===y.value){P.ruleForm.operation_type="2",P.ruleForm.type="2";(async e=>{const l=await C(e),{data:r}=l;P.ruleForm=fe(r,{type:P.ruleForm.type,isCopy:!1}),i.offer=r})(r.currentRoute.value.params.id)}})),(e,l)=>{const r=n("el-form-item"),a=n("el-option"),o=n("el-select"),t=n("el-button"),u=n("el-input"),d=n("el-radio"),y=n("el-form"),g=n("el-dialog");return s(),c("div",null,[v(" form "),m(y,{ref:"ruleForm",enctype:"multipart/form-data",rules:f(P).rules,model:f(P).ruleForm,"label-width":"240px","label-position":"right"},{default:p((()=>[_("div",T,[v(" offer_id "),m(r,{label:"Offer ID:",prop:"offer_id"},{default:p((()=>[_("div",J,[_("span",{textContent:k(f(P).ruleForm.offer_id)},null,8,$)])])),_:1}),v(" channel "),m(r,{label:"Channel:",prop:"channel"},{default:p((()=>[m(o,{modelValue:f(P).ruleForm.channel,"onUpdate:modelValue":l[0]||(l[0]=e=>f(P).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,V(f(P).options.channel,(e=>(s(),w(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" copy_offer "),m(r,{label:"Copy Offer:",prop:"copy_offer"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.copy_offer,"onUpdate:modelValue":l[1]||(l[1]=e=>f(P).ruleForm.copy_offer=e),modelModifiers:{trim:!0},class:"form-one copy-btn search-input",placeholder:""},{append:p((()=>[m(t,{slot:"append",type:"primary",icon:"Search",onClick:ve})])),_:1},8,["modelValue"])])),_:1}),v(" attribute_provider "),m(r,{label:"Attribute Provider:",prop:"attribute_provider"},{default:p((()=>[m(o,{modelValue:f(P).ruleForm.attribute_provider,"onUpdate:modelValue":l[2]||(l[2]=e=>f(P).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,V(f(P).options.attribute_provider,(e=>(s(),w(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" title "),m(r,{label:"Offer Title:",prop:"title"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.title,"onUpdate:modelValue":l[3]||(l[3]=e=>f(P).ruleForm.title=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" tracking_link "),v(" 此处需要去除空格和制表符 "),m(r,{class:"mb-30",label:"Traking Link:",prop:"tracking_link"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.tracking_link,"onUpdate:modelValue":l[4]||(l[4]=e=>f(P).ruleForm.tracking_link=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),v(" pid "),m(r,{label:"Pid:",prop:"pid"},{default:p((()=>[_("div",H,[_("span",null,k(f(be)),1),v(" <span>{{data.ruleForm.pid}}</span> ")])])),_:1}),v(" pkg_name "),m(r,{label:"Package Name:",prop:"pkg_name"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.pkg_name,"onUpdate:modelValue":l[5]||(l[5]=e=>f(P).ruleForm.pkg_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" conversion_flow_type "),m(r,{label:"Conversion Flow:",prop:"conversion_flow"},{default:p((()=>[_("div",K,[m(d,{modelValue:f(P).ruleForm.conversion_flow,"onUpdate:modelValue":l[6]||(l[6]=e=>f(P).ruleForm.conversion_flow=e),label:1},{default:p((()=>[B])),_:1},8,["modelValue"]),m(d,{modelValue:f(P).ruleForm.conversion_flow,"onUpdate:modelValue":l[7]||(l[7]=e=>f(P).ruleForm.conversion_flow=e),label:2},{default:p((()=>[G])),_:1},8,["modelValue"])])])),_:1}),v(" conversion_flow "),2===f(P).ruleForm.conversion_flow?(s(),w(r,{key:0,label:"Event Name:",prop:"event_name"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.event_name,"onUpdate:modelValue":l[8]||(l[8]=e=>f(P).ruleForm.event_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})):v("v-if",!0),v(" payout "),m(r,{label:"Payout($):",prop:"payout"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.payout,"onUpdate:modelValue":l[9]||(l[9]=e=>f(P).ruleForm.payout=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" platform "),m(r,{label:"Select Platform:",prop:"platform"},{default:p((()=>[m(o,{modelValue:f(P).ruleForm.platform,"onUpdate:modelValue":l[10]||(l[10]=e=>f(P).ruleForm.platform=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,V(f(P).options.platform,(e=>(s(),w(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" country "),m(r,{label:"Targeting Countries:",prop:"country"},{default:p((()=>[m(o,{modelValue:f(P).ruleForm.country,"onUpdate:modelValue":l[11]||(l[11]=e=>f(P).ruleForm.country=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,V(f(P).options.country,(e=>(s(),w(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" max_clk_num "),m(r,{label:"Click Limitation:",prop:"max_clk_num"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.max_clk_num,"onUpdate:modelValue":l[12]||(l[12]=e=>f(P).ruleForm.max_clk_num=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" Site Click Limitation "),m(r,{label:"Site Click Limitation:",prop:"site_clk_limit"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.site_clk_limit,"onUpdate:modelValue":l[13]||(l[13]=e=>f(P).ruleForm.site_clk_limit=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" start_hour "),m(r,{label:"Start Hour:",prop:"start_hour"},{default:p((()=>[m(o,{modelValue:f(P).ruleForm.start_hour,"onUpdate:modelValue":l[14]||(l[14]=e=>f(P).ruleForm.start_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),c(b,null,V(f(P).options.time,(e=>(s(),w(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" end_hour "),m(r,{label:"End Hour:",prop:"end_hour"},{default:p((()=>[m(o,{modelValue:f(P).ruleForm.end_hour,"onUpdate:modelValue":l[15]||(l[15]=e=>f(P).ruleForm.end_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),c(b,null,V(f(P).options.time,(e=>(s(),w(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" site_install_limitation"),v(' <el-form-item label="Site Install Limitation:" prop="site_install_limitation">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">\n            <el-option\n              v-for="item in 6"\n              :key="item"\n              :label="item - 1"\n              :value="item - 1">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" Select Device "),m(r,{label:"Delivery mode:",prop:"p_type"},{default:p((()=>[_("div",Q,[m(d,{modelValue:f(P).ruleForm.p_type,"onUpdate:modelValue":l[16]||(l[16]=e=>f(P).ruleForm.p_type=e),label:1},{default:p((()=>[W])),_:1},8,["modelValue"]),m(d,{modelValue:f(P).ruleForm.p_type,"onUpdate:modelValue":l[17]||(l[17]=e=>f(P).ruleForm.p_type=e),label:2},{default:p((()=>[X])),_:1},8,["modelValue"])])])),_:1}),2==f(P).ruleForm.p_type?(s(),w(r,{key:1,label:"Select Device:",prop:"device"},{default:p((()=>[_("div",Y,[m(t,{class:"cp ml-10",type:"primary",icon:"Setting",circle:"",onClick:_e}),v(" <span class=\"ml-10\" v-text='countDevice'></span> ")])])),_:1})):v("v-if",!0),v(" Device Cutoff "),1==f(P).ruleForm.p_type?(s(),w(r,{key:2,label:"Device Cutoff:",prop:"cutoff_start"},{default:p((()=>[m(R,{class:"form-one",query:f(P).ruleForm,onUp:pe},null,8,["query"])])),_:1})):v("v-if",!0),v(" diy_siteid "),m(r,{label:"Diy SiteID:",prop:"site"},{default:p((()=>[_("div",Z,[m(t,{class:"cp ml-10",icon:"Tools",circle:"",onClick:I})])])),_:1}),v(" site_id "),m(r,{label:"Site ID:",prop:"site_id"},{default:p((()=>[_("div",ee,[m(d,{modelValue:f(P).ruleForm.site_id,"onUpdate:modelValue":l[18]||(l[18]=e=>f(P).ruleForm.site_id=e),label:1},{default:p((()=>[le])),_:1},8,["modelValue"]),m(d,{modelValue:f(P).ruleForm.site_id,"onUpdate:modelValue":l[19]||(l[19]=e=>f(P).ruleForm.site_id=e),label:2},{default:p((()=>[re])),_:1},8,["modelValue"]),m(o,{modelValue:f(P).ruleForm.hour,"onUpdate:modelValue":l[20]||(l[20]=e=>f(P).ruleForm.hour=e),filterable:"",class:"form-one ml-10",clearable:"",placeholder:"",disabled:2!==f(P).ruleForm.site_id},{default:p((()=>[(s(!0),c(b,null,V(f(P).options.site_id,(e=>(s(),w(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])),_:1}),v(" clk_id "),m(r,{label:"Click ID:",prop:"clk_id"},{default:p((()=>[_("div",ae,[m(d,{modelValue:f(P).ruleForm.clk_id,"onUpdate:modelValue":l[21]||(l[21]=e=>f(P).ruleForm.clk_id=e),label:1},{default:p((()=>[oe])),_:1},8,["modelValue"]),m(d,{modelValue:f(P).ruleForm.clk_id,"onUpdate:modelValue":l[22]||(l[22]=e=>f(P).ruleForm.clk_id=e),label:2},{default:p((()=>[te])),_:1},8,["modelValue"])])])),_:1}),v(" site_clk_id "),v(' <el-form-item label="Site Click ID:" prop="site_clk_id">\n          <div class=\'flex jc-start form-one jc-start radio-box\'>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>\n          </div>\n        </el-form-item> '),v(" category "),v(' <el-form-item label="Category:" prop="category_id">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.category_id" clearable placeholder="">\n            <el-option\n              v-for="(value, key) in handleOptionsCategory"\n              :key="key"\n              :label="value"\n              :value="key">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" note "),m(r,{label:"Note:",prop:"note"},{default:p((()=>[m(u,{modelValue:f(P).ruleForm.note,"onUpdate:modelValue":l[23]||(l[23]=e=>f(P).ruleForm.note=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),v(" form "),v(" footer "),_("div",ie,[m(t,{type:"primary",onClick:z},{default:p((()=>[ue])),_:1})]),v(" footer "),v(" dialog "),v(" device "),m(g,{modelValue:f(P).dialogVisibleDevice,"onUpdate:modelValue":l[26]||(l[26]=e=>f(P).dialogVisibleDevice=e),title:"Device",width:"90%"},{default:p((()=>[f(P).dialogVisibleDevice?(s(),w(O,{key:0,all:f(i).cacheDevice.all,"onUpdate:all":l[24]||(l[24]=e=>f(i).cacheDevice.all=e),select:f(i).cacheDevice.select,"onUpdate:select":l[25]||(l[25]=e=>f(i).cacheDevice.select=e),onKk:ce},null,8,["all","select"])):v("v-if",!0),_("span",de,[v(' <el-button @click="cancleDevice">取 消</el-button> '),m(t,{type:"primary",onClick:me},{default:p((()=>[ne])),_:1})])])),_:1},8,["modelValue"]),v(" site "),m(g,{modelValue:f(P).dialogVisibleSite,"onUpdate:modelValue":l[27]||(l[27]=e=>f(P).dialogVisibleSite=e),title:"diy_siteid",width:"90%"},{default:p((()=>[m(f(N),{msg:f(P).siteData,onKk:se},null,8,["msg"])])),_:1},8,["modelValue"])])}}});export{se as default};
