var e=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(l,r,a)=>r in l?e(l,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[r]=a,o=(e,o)=>{for(var i in o||(o={}))r.call(o,i)&&t(e,i,o[i]);if(l)for(var i of l(o))a.call(o,i)&&t(e,i,o[i]);return e};import{d as i,r as u,M as n,m as d,s,n as m,c,p,q as f,v as _,z as v,O as b,b as y,a as g,e as F,w as h,I as k,x as V,P as w,A as x,E as D,L as j}from"./index-43cb2139.js";import{_ as C,f as U,g as S,h as O,i as q,j as E,d as R}from"./device-c98f5ff8.js";import{m as A}from"./message-a091de6b.js";import{_ as N}from"./cutOff-bfe89a8a.js";import"./format-15e3f823.js";import"./moment-9bd84dc2.js";import"./lodash-937bad3f.js";import"./buzz-f1afebed.js";const P=y(" 添加 "),I=y(" 删除 "),M={class:"dialog-footer mt-10"},z=y("清 空"),L=y("确 定"),J=i({props:{msg:{require:!0,default:()=>"",type:Array}},emits:["kk","up"],setup(e,{emit:l}){const r="此项必填";const a=e=>{let l=new RegExp(/\n+/),r=new RegExp(/[\S]+/),a=e.split(l),t=!0,o=[];return a.forEach(((e,l)=>{if(e&&r.test(e)){let l=e.trim().split(/\s+/);if(2===l.length){let e={diy_siteid:l[0],weight:l[1]};o.push(e)}else t=!1}else t=!1})),t?o:[]};let t=u({siteData:e.msg,siteRules:{site:[{required:!0,validator:(e,l,t)=>{if(""!==l){const e=a(l);t(e?void 0:new Error("格式错误！"))}else t(new Error(r))},trigger:"blur"}]},siteRuleForm:{site:""}});const o=()=>{t.siteData=[...a(t.siteRuleForm.site)]},i=()=>{t.siteData=[]},y=()=>{l("kk",t.siteData)};return n((()=>{})),(e,l)=>{const r=d("el-input"),a=d("el-form-item"),u=d("el-button"),n=d("el-form"),g=d("el-table-column"),F=d("el-table");return s(),m(b,null,[c(n,{ref:"siteRuleForm",enctype:"multipart/form-data",rules:f(t).siteRules,model:f(t).siteRuleForm,"label-position":"right"},{default:p((()=>[c(a,{label:"diy_siteid:",prop:"site"},{default:p((()=>[c(r,{modelValue:f(t).siteRuleForm.site,"onUpdate:modelValue":l[0]||(l[0]=e=>f(t).siteRuleForm.site=e),class:"w100",type:"textarea",rows:4,placeholder:""},null,8,["modelValue"])])),_:1}),c(a,null,{default:p((()=>[c(u,{type:"primary",onClick:o},{default:p((()=>[P])),_:1})])),_:1})])),_:1},8,["rules","model"]),c(F,{data:f(t).siteData},{default:p((()=>[c(g,{align:"center",property:"diy_siteid",label:"diy_siteid"}),c(g,{align:"center",property:"weight",label:"权重"}),c(g,{align:"center",label:"操作"},{default:p((e=>[c(u,{type:"danger",onClick:l=>{return e.row,r=e.$index,void t.siteData.splice(r,1);var r}},{default:p((()=>[I])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),_("span",M,[v(' <el-button @click="cancleDevice">取 消</el-button> '),c(u,{type:"primary",onClick:i},{default:p((()=>[z])),_:1}),c(u,{type:"primary",onClick:y},{default:p((()=>[L])),_:1})])],64)}}}),T={class:"content-con flex column"},H={class:"flex jc-start form-one radio-box"},$=["textContent"],K={class:"form-one flex jc-start"},B={class:"form-one flex jc-start"},G=y(" CPI "),Q=y(" CPA "),W={class:"flex jc-start form-one"},X=y(" 算法 "),Y=y(" 标签 "),Z={class:"flex jc-start form-one"},ee={class:"flex jc-start form-one"},le={class:"flex form-one jc-start radio-box"},re=y(" Slot_ID "),ae=y(" Update(Hours) "),te={class:"flex jc-start form-one jc-start radio-box"},oe=y(" Real "),ie=y(" Virtual "),ue={class:"w100 flex"},ne=y(" Save "),de={slot:"footer",class:"dialog-footer"},se=y("确 定"),me=i({setup(e){let{proxy:l}=j();const r=g(),a="此项必填";let t=u({offer:{},index:null,cacheDevice:{}}),i=F(""),y=F(0),P=F([0,100]),I=u({dialogVisibleDevice:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica","Lazada","Other"],time:[-1,...[...new Array(24)].map(((e,l)=>l))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pid:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:"",max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:void 0,cutoff_end:void 0,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",note:"",campaign_id:"",p_type:2},rules:{channel:[{required:!0,message:a,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],tracking_link:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{new RegExp("\\s+","g").test(l)?r(new Error("链接中有空格")):r(void 0),r(void 0)}},{validator:(e,l,r)=>{/^http/.test(l)||/^lazada/.test(l)?r(void 0):r(new Error("必须为有效链接")),r(void 0)}},{validator:(e,l,r)=>{"AppsFlyer"===I.ruleForm.attribute_provider?r(void 0):"Adjust"===I.ruleForm.attribute_provider&&(l.includes("install_callback")||l.includes("event_callback")?r(new Error("链接里不可以包含install_callback和event_callback")):r(void 0)),r(void 0)}}],pkg_name:[{required:!0,message:a,trigger:["blur","change"]}],conversion_flow:[{required:!0,message:a,trigger:["blur","change"]}],event_name:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{"1"===I.ruleForm.conversion_flow?r(void 0):r(l?void 0:new Error(a))}}],payout:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]}],max_clk_num:[{required:!0,message:a,trigger:["blur","change"]}],device:[{required:!0,validator:(e,l,r)=>{r(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,l,r)=>{l?"1"===l.toString()||I.ruleForm.hour?r(void 0):r(new Error("请选择具体数值")):r(new Error(a))},trigger:["blur","change"]}],clk_id:[{required:!0,message:a,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===I.ruleForm.end_hour?r(new Error(a)):r(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===I.ruleForm.start_hour?r(new Error(a)):r(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}],p_type:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const M=()=>{I.dialogVisibleSite=!0;const e=I.ruleForm.diy_siteid;I.siteData=e},z=()=>{L("ruleForm")},L=e=>{l.$refs[e].validate((e=>{if(!e)return!1;me()}))},me=async()=>{let e;I.ruleForm;let l=o({},I.ruleForm);l.clk_id=parseFloat(l.clk_id),l.conversion_flow=parseFloat(l.conversion_flow),l.cutoff_end=parseFloat(l.cutoff_end),l.cutoff_start=parseFloat(l.cutoff_start),l.end_hour=parseFloat(l.end_hour),l.start_hour=parseFloat(l.start_hour),l.hour=parseFloat(l.hour),l.max_clk_num=parseFloat(l.max_clk_num),l.payout=parseFloat(l.payout),l.platform=parseFloat(l.platform),l.site_clk_id=parseFloat(l.site_clk_id),l.site_clk_limit=parseFloat(l.site_clk_limit),l.site_id=parseFloat(l.site_id),l.site_install_limitation=parseFloat(l.site_install_limitation),l.diy_siteid=JSON.stringify(l.diy_siteid),l.device=JSON.stringify(l.device),"1"===I.ruleForm.type&&(delete l.id,delete l.offer_id,e=await U(l)),"2"===I.ruleForm.type&&(e=await S(l)),A(e)&&window.close()},ce=e=>{I.ruleForm.diy_siteid=e,I.dialogVisibleSite=!1},pe=e=>{t.cacheDevice.select=e},fe=()=>{I.ruleForm.device=t.cacheDevice.select,I.dialogVisibleDevice=!1};h(P,((e,l)=>{(e=>{I.ruleForm.cutoff_start=e[0]/100,I.ruleForm.cutoff_end=e[1]/100})(e)}),{immediate:!0});k((()=>{const e=y.value,l=I.ruleForm.cutoff_start,r=I.ruleForm.cutoff_end;return{judge:((Number(r)-Number(l))*Number(e)).toFixed(0),all:Number(e).toFixed(0)}}));const _e=e=>{I.ruleForm.cutoff_start=e.cutoff_start,I.ruleForm.cutoff_end=e.cutoff_end},ve=(e,l)=>{let r={};return l.type,e.device&&(e.device=JSON.parse(e.device)),e.diy_siteid&&(e.diy_siteid=JSON.parse(e.diy_siteid)),"2"===l.type&&(r.id=e.id,r.offer_id=e.offer_id),r=o(o({},e),l),"1"===l.type&&(delete r.id,delete r.offer_id),r},be=()=>{I.ruleForm.platform&&I.ruleForm.country?(I.dialogVisibleDevice=!0,t.cacheDevice.select=I.ruleForm.device,(async()=>{const e={id:I.ruleForm.id,platform:I.ruleForm.platform,country:I.ruleForm.country},{data:l}=await R(e);t.cacheDevice.all=l.all})()):D.error("请提前选择平台和国家")},ye=()=>{(async e=>{const l=await E({offer_id:e}),{data:r}=l,a=ve(r,{type:I.ruleForm.type,isCopy:!0});I.ruleForm=o(o({},I.ruleForm),a)})(I.ruleForm.copy_offer)},ge=k((()=>{const e=I.ruleForm.tracking_link,l=I.ruleForm.attribute_provider;let r="";if("AppsFlyer"===l){const l=/pid=([\s\S]*)_int/g,a=[...e.matchAll(l)];if(0!==a.length)return r=a[0][1],I.ruleForm.pid=r,r}if("Adjust"===l){const l=/https:\/\/app.adjust.com\/([\s\S]*)\?/g,a=[...e.matchAll(l)];if(0!==a.length)return r=a[0][1],I.ruleForm.pid=r,r}return I.ruleForm.pid=r,r}));return k((()=>{let e=0;if(t.cacheDevice,t.cacheDevice.hasOwnProperty("all")&&t.cacheDevice.hasOwnProperty("select")){let l=t.cacheDevice.all,r=t.cacheDevice.select;0!==l.length&&0!==r.length&&l.forEach((l=>{r.forEach((r=>{l.source===r.source&&l.label===r.label&&(e+=parseInt(l.device_count))}))})),I.search.deviceData.count=e}return null!=e?e:I.search.deviceData.count})),n((()=>{if((async()=>{const e=await O();if(e){const{data:l}=e;return I.options.channel=Object.values(l.channel),I.options.country=Object.values(l.country),I.options.category=Object.values(l.category),"获取配置成功"}})(),i.value=r.currentRoute.value.name,i.value,"buzz-sync-create"===i.value&&(I.ruleForm.operation_type="1",I.ruleForm.type="1"),"buzz-sync-edit"===i.value){I.ruleForm.operation_type="2",I.ruleForm.type="2";(async e=>{const l=await q(e),{data:r}=l;I.ruleForm=ve(r,{type:I.ruleForm.type,isCopy:!1}),t.offer=r})(r.currentRoute.value.params.id)}})),(e,l)=>{const r=d("el-form-item"),a=d("el-option"),o=d("el-select"),i=d("el-button"),u=d("el-input"),n=d("el-radio"),y=d("el-form"),g=d("el-dialog");return s(),m("div",null,[v(" form "),c(y,{ref:"ruleForm",enctype:"multipart/form-data",rules:f(I).rules,model:f(I).ruleForm,"label-width":"240px","label-position":"right"},{default:p((()=>[_("div",T,[v(" offer_id "),c(r,{label:"Offer ID:",prop:"offer_id"},{default:p((()=>[_("div",H,[_("span",{textContent:V(f(I).ruleForm.offer_id)},null,8,$)])])),_:1}),v(" channel "),c(r,{label:"Channel:",prop:"channel"},{default:p((()=>[c(o,{modelValue:f(I).ruleForm.channel,"onUpdate:modelValue":l[0]||(l[0]=e=>f(I).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),m(b,null,w(f(I).options.channel,(e=>(s(),x(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" copy_offer "),c(r,{label:"Copy Offer:",prop:"copy_offer"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.copy_offer,"onUpdate:modelValue":l[1]||(l[1]=e=>f(I).ruleForm.copy_offer=e),modelModifiers:{trim:!0},class:"form-one copy-btn search-input",placeholder:""},{append:p((()=>[c(i,{slot:"append",type:"primary",icon:"Search",onClick:ye})])),_:1},8,["modelValue"])])),_:1}),v(" attribute_provider "),c(r,{label:"Attribute Provider:",prop:"attribute_provider"},{default:p((()=>[c(o,{modelValue:f(I).ruleForm.attribute_provider,"onUpdate:modelValue":l[2]||(l[2]=e=>f(I).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),m(b,null,w(f(I).options.attribute_provider,(e=>(s(),x(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" title "),c(r,{label:"Offer Title:",prop:"title"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.title,"onUpdate:modelValue":l[3]||(l[3]=e=>f(I).ruleForm.title=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" tracking_link "),v(" 此处需要去除空格和制表符 "),c(r,{class:"mb-30",label:"Traking Link:",prop:"tracking_link"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.tracking_link,"onUpdate:modelValue":l[4]||(l[4]=e=>f(I).ruleForm.tracking_link=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),v(" pid "),c(r,{label:"Pid:",prop:"pid"},{default:p((()=>[_("div",K,[_("span",null,V(f(ge)),1),v(" <span>{{data.ruleForm.pid}}</span> ")])])),_:1}),v(" pkg_name "),c(r,{label:"Package Name:",prop:"pkg_name"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.pkg_name,"onUpdate:modelValue":l[5]||(l[5]=e=>f(I).ruleForm.pkg_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" conversion_flow_type "),c(r,{label:"Conversion Flow:",prop:"conversion_flow"},{default:p((()=>[_("div",B,[c(n,{modelValue:f(I).ruleForm.conversion_flow,"onUpdate:modelValue":l[6]||(l[6]=e=>f(I).ruleForm.conversion_flow=e),label:1},{default:p((()=>[G])),_:1},8,["modelValue"]),c(n,{modelValue:f(I).ruleForm.conversion_flow,"onUpdate:modelValue":l[7]||(l[7]=e=>f(I).ruleForm.conversion_flow=e),label:2},{default:p((()=>[Q])),_:1},8,["modelValue"])])])),_:1}),v(" conversion_flow "),2===f(I).ruleForm.conversion_flow?(s(),x(r,{key:0,label:"Event Name:",prop:"event_name"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.event_name,"onUpdate:modelValue":l[8]||(l[8]=e=>f(I).ruleForm.event_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})):v("v-if",!0),v(" payout "),c(r,{label:"Payout($):",prop:"payout"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.payout,"onUpdate:modelValue":l[9]||(l[9]=e=>f(I).ruleForm.payout=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" platform "),c(r,{label:"Select Platform:",prop:"platform"},{default:p((()=>[c(o,{modelValue:f(I).ruleForm.platform,"onUpdate:modelValue":l[10]||(l[10]=e=>f(I).ruleForm.platform=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),m(b,null,w(f(I).options.platform,(e=>(s(),x(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" country "),c(r,{label:"Targeting Countries:",prop:"country"},{default:p((()=>[c(o,{modelValue:f(I).ruleForm.country,"onUpdate:modelValue":l[11]||(l[11]=e=>f(I).ruleForm.country=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),m(b,null,w(f(I).options.country,(e=>(s(),x(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" max_clk_num "),c(r,{label:"Click Limitation:",prop:"max_clk_num"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.max_clk_num,"onUpdate:modelValue":l[12]||(l[12]=e=>f(I).ruleForm.max_clk_num=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" Site Click Limitation "),c(r,{label:"Site Click Limitation:",prop:"site_clk_limit"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.site_clk_limit,"onUpdate:modelValue":l[13]||(l[13]=e=>f(I).ruleForm.site_clk_limit=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" start_hour "),c(r,{label:"Start Hour:",prop:"start_hour"},{default:p((()=>[c(o,{modelValue:f(I).ruleForm.start_hour,"onUpdate:modelValue":l[14]||(l[14]=e=>f(I).ruleForm.start_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),m(b,null,w(f(I).options.time,(e=>(s(),x(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" end_hour "),c(r,{label:"End Hour:",prop:"end_hour"},{default:p((()=>[c(o,{modelValue:f(I).ruleForm.end_hour,"onUpdate:modelValue":l[15]||(l[15]=e=>f(I).ruleForm.end_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),m(b,null,w(f(I).options.time,(e=>(s(),x(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" site_install_limitation"),v(' <el-form-item label="Site Install Limitation:" prop="site_install_limitation">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">\n            <el-option\n              v-for="item in 6"\n              :key="item"\n              :label="item - 1"\n              :value="item - 1">\n            </el-option>\n          </el-select>\n        </el-form-item> '),c(r,{label:"Delivery mode:",prop:"p_type"},{default:p((()=>[_("div",W,[c(n,{modelValue:f(I).ruleForm.p_type,"onUpdate:modelValue":l[16]||(l[16]=e=>f(I).ruleForm.p_type=e),label:1},{default:p((()=>[X])),_:1},8,["modelValue"]),c(n,{modelValue:f(I).ruleForm.p_type,"onUpdate:modelValue":l[17]||(l[17]=e=>f(I).ruleForm.p_type=e),label:2},{default:p((()=>[Y])),_:1},8,["modelValue"])])])),_:1}),v(" Select Device "),2==f(I).ruleForm.p_type?(s(),x(r,{key:1,label:"Select Device:",prop:"device"},{default:p((()=>[_("div",Z,[c(i,{class:"cp ml-10",type:"primary",icon:"Setting",circle:"",onClick:be}),v(" <span class=\"ml-10\" v-text='countDevice'></span> ")])])),_:1})):v("v-if",!0),v(" Device Cutoff "),v(' <el-form-item label="Device Cutoff:" prop="cutoff_start">\n          <div class="flex ai-center">\n            <span v-text="data.ruleForm.cutoff_start * 100"></span>\n            %\n            <span>-</span>\n            <span v-text="data.ruleForm.cutoff_end * 100"></span>\n            % （\n            <span>总设备数:</span>\n            <span v-text="handleDeviceNum.all"></span>\n            ） （\n            <span>选中设备数:</span>\n            <span v-text="handleDeviceNum.judge"></span>\n            ）\n          </div>\n          <div class="flex jc-start form-one p10 pt-0 pb-0">\n            <el-slider\n              class="w100"\n              v-model="cutoff"\n              range\n              :step="5"\n              :show-stops="true"\n              show-input\n              :min="0"\n              :max="100"\n            ></el-slider>\n          </div>\n        </el-form-item> '),v(" Device Cutoff "),1==f(I).ruleForm.p_type?(s(),x(r,{key:2,label:"Device Cutoff:",prop:"cutoff_start"},{default:p((()=>[c(N,{class:"form-one",query:f(I).ruleForm,onUp:_e},null,8,["query"])])),_:1})):v("v-if",!0),v(" diy_siteid "),c(r,{label:"Diy SiteID:",prop:"site"},{default:p((()=>[_("div",ee,[c(i,{class:"cp ml-10",icon:"Tools",circle:"",onClick:M})])])),_:1}),v(" site_id "),c(r,{label:"Site ID:",prop:"site_id"},{default:p((()=>[_("div",le,[c(n,{modelValue:f(I).ruleForm.site_id,"onUpdate:modelValue":l[18]||(l[18]=e=>f(I).ruleForm.site_id=e),label:1},{default:p((()=>[re])),_:1},8,["modelValue"]),c(n,{modelValue:f(I).ruleForm.site_id,"onUpdate:modelValue":l[19]||(l[19]=e=>f(I).ruleForm.site_id=e),label:2},{default:p((()=>[ae])),_:1},8,["modelValue"]),c(o,{modelValue:f(I).ruleForm.hour,"onUpdate:modelValue":l[20]||(l[20]=e=>f(I).ruleForm.hour=e),filterable:"",class:"form-one ml-10",clearable:"",placeholder:"",disabled:2!==f(I).ruleForm.site_id},{default:p((()=>[(s(!0),m(b,null,w(f(I).options.site_id,(e=>(s(),x(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])),_:1}),v(" clk_id "),c(r,{label:"Click ID:",prop:"clk_id"},{default:p((()=>[_("div",te,[c(n,{modelValue:f(I).ruleForm.clk_id,"onUpdate:modelValue":l[21]||(l[21]=e=>f(I).ruleForm.clk_id=e),label:1},{default:p((()=>[oe])),_:1},8,["modelValue"]),c(n,{modelValue:f(I).ruleForm.clk_id,"onUpdate:modelValue":l[22]||(l[22]=e=>f(I).ruleForm.clk_id=e),label:2},{default:p((()=>[ie])),_:1},8,["modelValue"])])])),_:1}),v(" site_clk_id "),v(' <el-form-item label="Site Click ID:" prop="site_clk_id">\n          <div class=\'flex jc-start form-one jc-start radio-box\'>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>\n          </div>\n        </el-form-item> '),v(" category "),v(' <el-form-item label="Category:" prop="category_id">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.category_id" clearable placeholder="">\n            <el-option\n              v-for="(value, key) in handleOptionsCategory"\n              :key="key"\n              :label="value"\n              :value="key">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" campaign_id "),c(r,{label:"Campaign ID:",prop:"campaign_id"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.campaign_id,"onUpdate:modelValue":l[23]||(l[23]=e=>f(I).ruleForm.campaign_id=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" note "),c(r,{label:"Note:",prop:"note"},{default:p((()=>[c(u,{modelValue:f(I).ruleForm.note,"onUpdate:modelValue":l[24]||(l[24]=e=>f(I).ruleForm.note=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),v(" form "),v(" footer "),_("div",ue,[c(i,{type:"primary",onClick:z},{default:p((()=>[ne])),_:1})]),v(" footer "),v(" dialog "),v(" device "),c(g,{modelValue:f(I).dialogVisibleDevice,"onUpdate:modelValue":l[27]||(l[27]=e=>f(I).dialogVisibleDevice=e),title:"Device",width:"90%"},{default:p((()=>[f(I).dialogVisibleDevice?(s(),x(C,{key:0,all:f(t).cacheDevice.all,"onUpdate:all":l[25]||(l[25]=e=>f(t).cacheDevice.all=e),select:f(t).cacheDevice.select,"onUpdate:select":l[26]||(l[26]=e=>f(t).cacheDevice.select=e),onKk:pe},null,8,["all","select"])):v("v-if",!0),_("span",de,[v(' <el-button @click="cancleDevice">取 消</el-button> '),c(i,{type:"primary",onClick:fe},{default:p((()=>[se])),_:1})])])),_:1},8,["modelValue"]),v(" site "),c(g,{modelValue:f(I).dialogVisibleSite,"onUpdate:modelValue":l[28]||(l[28]=e=>f(I).dialogVisibleSite=e),title:"diy_siteid",width:"90%"},{default:p((()=>[c(f(J),{msg:f(I).siteData,onKk:ce},null,8,["msg"])])),_:1},8,["modelValue"])])}}});export{me as default};
