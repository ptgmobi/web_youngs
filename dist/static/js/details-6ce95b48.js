var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(l,a,r)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r,t=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&o(e,i,t[i]);if(l)for(var i of l(t))r.call(t,i)&&o(e,i,t[i]);return e};import{d as i,r as n,M as u,m as d,s,n as m,c,p,q as f,v as _,z as v,O as b,b as g,a as y,e as F,w as h,I as k,a1 as V,x as w,P as x,A as D,E as j,L as C}from"./index-951713b3.js";import{f as S,g as U,h as O,i as q,j as E,d as R}from"./buzzsync-42d0dd4e.js";import{m as A}from"./message-95bcad27.js";import{_ as N}from"./device-8cfdd537.js";import"./format-15e3f823.js";import"./moment-9bd84dc2.js";import"./lodash-e7f123ce.js";const P=g(" 添加 "),I=g(" 删除 "),M={class:"dialog-footer mt-10"},z=g("清 空"),L=g("确 定"),J=i({props:{msg:{require:!0,default:()=>"",type:Array}},emits:["kk","up"],setup(e,{emit:l}){const a="此项必填";const r=e=>{let l=new RegExp(/\n+/),a=new RegExp(/[\S]+/),r=e.split(l),o=!0,t=[];return r.forEach(((e,l)=>{if(e&&a.test(e)){let l=e.trim().split(/\s+/);if(2===l.length){let e={diy_siteid:l[0],weight:l[1]};t.push(e)}else o=!1}else o=!1})),o?t:[]};let o=n({siteData:e.msg,siteRules:{site:[{required:!0,validator:(e,l,o)=>{if(""!==l){const e=r(l);o(e?void 0:new Error("格式错误！"))}else o(new Error(a))},trigger:"blur"}]},siteRuleForm:{site:""}});const t=()=>{o.siteData=[...r(o.siteRuleForm.site)]},i=()=>{o.siteData=[]},g=()=>{l("kk",o.siteData)};return u((()=>{})),(e,l)=>{const a=d("el-input"),r=d("el-form-item"),n=d("el-button"),u=d("el-form"),y=d("el-table-column"),F=d("el-table");return s(),m(b,null,[c(u,{ref:"siteRuleForm",enctype:"multipart/form-data",rules:f(o).siteRules,model:f(o).siteRuleForm,"label-position":"right"},{default:p((()=>[c(r,{label:"diy_siteid:",prop:"site"},{default:p((()=>[c(a,{modelValue:f(o).siteRuleForm.site,"onUpdate:modelValue":l[0]||(l[0]=e=>f(o).siteRuleForm.site=e),class:"w100",type:"textarea",rows:4,placeholder:""},null,8,["modelValue"])])),_:1}),c(r,null,{default:p((()=>[c(n,{type:"primary",onClick:t},{default:p((()=>[P])),_:1})])),_:1})])),_:1},8,["rules","model"]),c(F,{data:f(o).siteData},{default:p((()=>[c(y,{align:"center",property:"diy_siteid",label:"diy_siteid"}),c(y,{align:"center",property:"weight",label:"权重"}),c(y,{align:"center",label:"操作"},{default:p((e=>[c(n,{type:"danger",onClick:l=>{return e.row,a=e.$index,void o.siteData.splice(a,1);var a}},{default:p((()=>[I])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),_("span",M,[v(' <el-button @click="cancleDevice">取 消</el-button> '),c(n,{type:"primary",onClick:i},{default:p((()=>[z])),_:1}),c(n,{type:"primary",onClick:g},{default:p((()=>[L])),_:1})])],64)}}}),T={class:"content-con flex column"},H={class:"flex jc-start form-one radio-box"},$=["textContent"],K={class:"form-one flex jc-start"},B={class:"form-one flex jc-start"},G=g(" CPI "),Q=g(" CPA "),W={class:"flex jc-start form-one"},X={class:"flex jc-start form-one"},Y={class:"flex form-one jc-start radio-box"},Z=g(" Slot_ID "),ee=g(" Update(Hours) "),le={class:"flex jc-start form-one jc-start radio-box"},ae=g(" Real "),re=g(" Virtual "),oe={class:"w100 flex"},te=g(" Save "),ie={slot:"footer",class:"dialog-footer"},ne=g("确 定"),ue=i({setup(e){let{proxy:l}=C();const a=y(),r="此项必填";let o=n({offer:{},index:null,cacheDevice:{}}),i=F(""),g=F(0),P=F([0,100]),I=n({dialogVisibleDevice:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica","Lazada"],time:[-1,...[...new Array(24)].map(((e,l)=>l))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pid:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:"",max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:void 0,cutoff_end:void 0,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",note:"",campaign_id:""},rules:{channel:[{required:!0,message:r,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:r,trigger:["blur","change"]}],title:[{required:!0,message:r,trigger:["blur","change"]}],tracking_link:[{required:!0,message:r,trigger:["blur","change"]},{validator:(e,l,a)=>{new RegExp("\\s+","g").test(l)?a(new Error("链接中有空格")):a(void 0),a(void 0)}},{validator:(e,l,a)=>{/^http/.test(l)?a(void 0):a(new Error("必须为有效链接")),a(void 0)}}],pkg_name:[{required:!0,message:r,trigger:["blur","change"]}],conversion_flow:[{required:!0,message:r,trigger:["blur","change"]}],event_name:[{required:!0,message:r,trigger:["blur","change"]},{validator:(e,l,a)=>{"1"===I.ruleForm.conversion_flow?a(void 0):a(l?void 0:new Error(r))}}],payout:[{required:!0,message:r,trigger:["blur","change"]}],platform:[{required:!0,message:r,trigger:["blur","change"]}],country:[{required:!0,message:r,trigger:["blur","change"]}],max_clk_num:[{required:!0,message:r,trigger:["blur","change"]}],device:[{required:!0,validator:(e,l,a)=>{a(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,l,a)=>{l?1===l||I.ruleForm.hour?a(void 0):a(new Error("请选择具体数值")):a(new Error(r))},trigger:["blur","change"]}],clk_id:[{required:!0,message:r,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,l,a)=>{""!==l&&(""===I.ruleForm.end_hour?a(new Error(r)):a(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,l,a)=>{""!==l&&(""===I.ruleForm.start_hour?a(new Error(r)):a(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const M=()=>{I.dialogVisibleSite=!0;const e=I.ruleForm.diy_siteid;I.siteData=e},z=()=>{L("ruleForm")},L=e=>{l.$refs[e].validate((e=>{if(!e)return!1;ue()}))},ue=async()=>{let e;I.ruleForm;let l=t({},I.ruleForm);l.clk_id=parseFloat(l.clk_id),l.conversion_flow=parseFloat(l.conversion_flow),l.cutoff_end=parseFloat(l.cutoff_end),l.cutoff_start=parseFloat(l.cutoff_start),l.end_hour=parseFloat(l.end_hour),l.start_hour=parseFloat(l.start_hour),l.hour=parseFloat(l.hour),l.max_clk_num=parseFloat(l.max_clk_num),l.payout=parseFloat(l.payout),l.platform=parseFloat(l.platform),l.site_clk_id=parseFloat(l.site_clk_id),l.site_clk_limit=parseFloat(l.site_clk_limit),l.site_id=parseFloat(l.site_id),l.site_install_limitation=parseFloat(l.site_install_limitation),l.diy_siteid=JSON.stringify(l.diy_siteid),l.device=JSON.stringify(l.device),"1"===I.ruleForm.type&&(delete l.id,delete l.offer_id,e=await S(l)),"2"===I.ruleForm.type&&(e=await U(l)),A(e)&&window.close()},de=e=>{I.ruleForm.diy_siteid=e,I.dialogVisibleSite=!1},se=e=>{o.cacheDevice.select=e},me=()=>{I.ruleForm.device=o.cacheDevice.select,I.dialogVisibleDevice=!1};h(P,((e,l)=>{(e=>{I.ruleForm.cutoff_start=e[0]/100,I.ruleForm.cutoff_end=e[1]/100})(e)}),{immediate:!0});k((()=>{const e=g.value,l=I.ruleForm.cutoff_start,a=I.ruleForm.cutoff_end;return{judge:((Number(a)-Number(l))*Number(e)).toFixed(0),all:Number(e).toFixed(0)}})),V((()=>{(async()=>{I.ruleForm.pkg_name,I.ruleForm.country,I.ruleForm.platform})()}));const ce=(e,l)=>{let a={};return l.type,e.device&&(e.device=JSON.parse(e.device)),e.diy_siteid&&(e.diy_siteid=JSON.parse(e.diy_siteid)),"2"===l.type&&(a.id=e.id,a.offer_id=e.offer_id),a=t(t({},e),l),"1"===l.type&&(delete a.id,delete a.offer_id),a},pe=()=>{I.ruleForm.platform&&I.ruleForm.country?(I.dialogVisibleDevice=!0,o.cacheDevice.select=I.ruleForm.device,(async()=>{const e={id:I.ruleForm.id,platform:I.ruleForm.platform,country:I.ruleForm.country},{data:l}=await R(e);o.cacheDevice.all=l.all})()):j.error("请提前选择平台和国家")},fe=()=>{(async e=>{const l=await E({offer_id:e}),{data:a}=l,r=ce(a,{type:I.ruleForm.type,isCopy:!0});I.ruleForm=t(t({},I.ruleForm),r)})(I.ruleForm.copy_offer)},_e=k((()=>{const e=I.ruleForm.tracking_link,l=I.ruleForm.attribute_provider;let a="";if("AppsFlyer"===l){const l=/pid=([\s\S]*)_int/g,r=[...e.matchAll(l)];if(0!==r.length)return a=r[0][1],I.ruleForm.pid=a,a}if("Adjust"===l){const l=/https:\/\/app.adjust.com\/([\s\S]*)\?/g,r=[...e.matchAll(l)];if(0!==r.length)return a=r[0][1],I.ruleForm.pid=a,a}return I.ruleForm.pid=a,a}));return k((()=>{let e=0;if(o.cacheDevice,o.cacheDevice.hasOwnProperty("all")&&o.cacheDevice.hasOwnProperty("select")){let l=o.cacheDevice.all,a=o.cacheDevice.select;0!==l.length&&0!==a.length&&l.forEach((l=>{a.forEach((a=>{l.source===a.source&&l.label===a.label&&(e+=parseInt(l.device_count))}))})),I.search.deviceData.count=e}return null!=e?e:I.search.deviceData.count})),u((()=>{if((async()=>{const e=await O();if(e){const{data:l}=e;return I.options.channel=Object.values(l.channel),I.options.country=Object.values(l.country),I.options.category=Object.values(l.category),"获取配置成功"}})(),i.value=a.currentRoute.value.name,i.value,"buzz-sync-create"===i.value&&(I.ruleForm.operation_type="1",I.ruleForm.type="1"),"buzz-sync-edit"===i.value){I.ruleForm.operation_type="2",I.ruleForm.type="2";(async e=>{const l=await q(e),{data:a}=l;I.ruleForm=ce(a,{type:I.ruleForm.type,isCopy:!1}),o.offer=a})(a.currentRoute.value.params.id)}})),(e,l)=>{const a=d("el-form-item"),r=d("el-option"),t=d("el-select"),i=d("el-button"),n=d("el-input"),u=d("el-radio"),g=d("el-form"),y=d("el-dialog");return s(),m("div",null,[v(" form "),c(g,{ref:"ruleForm",enctype:"multipart/form-data",rules:f(I).rules,model:f(I).ruleForm,"label-width":"240px","label-position":"right"},{default:p((()=>[_("div",T,[v(" offer_id "),c(a,{label:"Offer ID:",prop:"offer_id"},{default:p((()=>[_("div",H,[_("span",{textContent:w(f(I).ruleForm.offer_id)},null,8,$)])])),_:1}),v(" channel "),c(a,{label:"Channel:",prop:"channel"},{default:p((()=>[c(t,{modelValue:f(I).ruleForm.channel,"onUpdate:modelValue":l[0]||(l[0]=e=>f(I).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),m(b,null,x(f(I).options.channel,(e=>(s(),D(r,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" copy_offer "),c(a,{label:"Copy Offer:",prop:"copy_offer"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.copy_offer,"onUpdate:modelValue":l[1]||(l[1]=e=>f(I).ruleForm.copy_offer=e),modelModifiers:{trim:!0},class:"form-one copy-btn search-input",placeholder:""},{append:p((()=>[c(i,{slot:"append",type:"primary",icon:"Search",onClick:fe})])),_:1},8,["modelValue"])])),_:1}),v(" attribute_provider "),c(a,{label:"Attribute Provider:",prop:"attribute_provider"},{default:p((()=>[c(t,{modelValue:f(I).ruleForm.attribute_provider,"onUpdate:modelValue":l[2]||(l[2]=e=>f(I).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),m(b,null,x(f(I).options.attribute_provider,(e=>(s(),D(r,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" title "),c(a,{label:"Offer Title:",prop:"title"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.title,"onUpdate:modelValue":l[3]||(l[3]=e=>f(I).ruleForm.title=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" tracking_link "),v(" 此处需要去除空格和制表符 "),c(a,{class:"mb-30",label:"Traking Link:",prop:"tracking_link"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.tracking_link,"onUpdate:modelValue":l[4]||(l[4]=e=>f(I).ruleForm.tracking_link=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),v(" pid "),c(a,{label:"Pid:",prop:"pid"},{default:p((()=>[_("div",K,[_("span",null,w(f(_e)),1),v(" <span>{{data.ruleForm.pid}}</span> ")])])),_:1}),v(" pkg_name "),c(a,{label:"Package Name:",prop:"pkg_name"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.pkg_name,"onUpdate:modelValue":l[5]||(l[5]=e=>f(I).ruleForm.pkg_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" conversion_flow_type "),c(a,{label:"Conversion Flow:",prop:"conversion_flow"},{default:p((()=>[_("div",B,[c(u,{modelValue:f(I).ruleForm.conversion_flow,"onUpdate:modelValue":l[6]||(l[6]=e=>f(I).ruleForm.conversion_flow=e),label:1},{default:p((()=>[G])),_:1},8,["modelValue"]),c(u,{modelValue:f(I).ruleForm.conversion_flow,"onUpdate:modelValue":l[7]||(l[7]=e=>f(I).ruleForm.conversion_flow=e),label:2},{default:p((()=>[Q])),_:1},8,["modelValue"])])])),_:1}),v(" conversion_flow "),2===f(I).ruleForm.conversion_flow?(s(),D(a,{key:0,label:"Event Name:",prop:"event_name"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.event_name,"onUpdate:modelValue":l[8]||(l[8]=e=>f(I).ruleForm.event_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})):v("v-if",!0),v(" payout "),c(a,{label:"Payout($):",prop:"payout"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.payout,"onUpdate:modelValue":l[9]||(l[9]=e=>f(I).ruleForm.payout=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" platform "),c(a,{label:"Select Platform:",prop:"platform"},{default:p((()=>[c(t,{modelValue:f(I).ruleForm.platform,"onUpdate:modelValue":l[10]||(l[10]=e=>f(I).ruleForm.platform=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),m(b,null,x(f(I).options.platform,(e=>(s(),D(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" country "),c(a,{label:"Targeting Countries:",prop:"country"},{default:p((()=>[c(t,{modelValue:f(I).ruleForm.country,"onUpdate:modelValue":l[11]||(l[11]=e=>f(I).ruleForm.country=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),m(b,null,x(f(I).options.country,(e=>(s(),D(r,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" max_clk_num "),c(a,{label:"Click Limitation:",prop:"max_clk_num"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.max_clk_num,"onUpdate:modelValue":l[12]||(l[12]=e=>f(I).ruleForm.max_clk_num=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" Site Click Limitation "),c(a,{label:"Site Click Limitation:",prop:"site_clk_limit"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.site_clk_limit,"onUpdate:modelValue":l[13]||(l[13]=e=>f(I).ruleForm.site_clk_limit=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" start_hour "),c(a,{label:"Start Hour:",prop:"start_hour"},{default:p((()=>[c(t,{modelValue:f(I).ruleForm.start_hour,"onUpdate:modelValue":l[14]||(l[14]=e=>f(I).ruleForm.start_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),m(b,null,x(f(I).options.time,(e=>(s(),D(r,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" end_hour "),c(a,{label:"End Hour:",prop:"end_hour"},{default:p((()=>[c(t,{modelValue:f(I).ruleForm.end_hour,"onUpdate:modelValue":l[15]||(l[15]=e=>f(I).ruleForm.end_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),m(b,null,x(f(I).options.time,(e=>(s(),D(r,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" site_install_limitation"),v(' <el-form-item label="Site Install Limitation:" prop="site_install_limitation">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">\n            <el-option\n              v-for="item in 6"\n              :key="item"\n              :label="item - 1"\n              :value="item - 1">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" Select Device "),c(a,{label:"Select Device:",prop:"device"},{default:p((()=>[_("div",W,[c(i,{class:"cp ml-10",type:"primary",icon:"Setting",circle:"",onClick:pe}),v(" <span class=\"ml-10\" v-text='countDevice'></span> ")])])),_:1}),v(" Device Cutoff "),v(' <el-form-item label="Device Cutoff:" prop="cutoff_start">\n          <div class="flex ai-center">\n            <span v-text="data.ruleForm.cutoff_start * 100"></span>\n            %\n            <span>-</span>\n            <span v-text="data.ruleForm.cutoff_end * 100"></span>\n            % （\n            <span>总设备数:</span>\n            <span v-text="handleDeviceNum.all"></span>\n            ） （\n            <span>选中设备数:</span>\n            <span v-text="handleDeviceNum.judge"></span>\n            ）\n          </div>\n          <div class="flex jc-start form-one p10 pt-0 pb-0">\n            <el-slider\n              class="w100"\n              v-model="cutoff"\n              range\n              :step="5"\n              :show-stops="true"\n              show-input\n              :min="0"\n              :max="100"\n            ></el-slider>\n          </div>\n        </el-form-item> '),v(" diy_siteid "),c(a,{label:"Diy SiteID:",prop:"site"},{default:p((()=>[_("div",X,[c(i,{class:"cp ml-10",icon:"Tools",circle:"",onClick:M})])])),_:1}),v(" site_id "),c(a,{label:"Site ID:",prop:"site_id"},{default:p((()=>[_("div",Y,[c(u,{modelValue:f(I).ruleForm.site_id,"onUpdate:modelValue":l[16]||(l[16]=e=>f(I).ruleForm.site_id=e),label:1},{default:p((()=>[Z])),_:1},8,["modelValue"]),c(u,{modelValue:f(I).ruleForm.site_id,"onUpdate:modelValue":l[17]||(l[17]=e=>f(I).ruleForm.site_id=e),label:2},{default:p((()=>[ee])),_:1},8,["modelValue"]),c(t,{modelValue:f(I).ruleForm.hour,"onUpdate:modelValue":l[18]||(l[18]=e=>f(I).ruleForm.hour=e),filterable:"",class:"form-one ml-10",clearable:"",placeholder:"",disabled:2!==f(I).ruleForm.site_id},{default:p((()=>[(s(!0),m(b,null,x(f(I).options.site_id,(e=>(s(),D(r,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])),_:1}),v(" clk_id "),c(a,{label:"Click ID:",prop:"clk_id"},{default:p((()=>[_("div",le,[c(u,{modelValue:f(I).ruleForm.clk_id,"onUpdate:modelValue":l[19]||(l[19]=e=>f(I).ruleForm.clk_id=e),label:1},{default:p((()=>[ae])),_:1},8,["modelValue"]),c(u,{modelValue:f(I).ruleForm.clk_id,"onUpdate:modelValue":l[20]||(l[20]=e=>f(I).ruleForm.clk_id=e),label:2},{default:p((()=>[re])),_:1},8,["modelValue"])])])),_:1}),v(" site_clk_id "),v(' <el-form-item label="Site Click ID:" prop="site_clk_id">\n          <div class=\'flex jc-start form-one jc-start radio-box\'>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>\n          </div>\n        </el-form-item> '),v(" category "),v(' <el-form-item label="Category:" prop="category_id">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.category_id" clearable placeholder="">\n            <el-option\n              v-for="(value, key) in handleOptionsCategory"\n              :key="key"\n              :label="value"\n              :value="key">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" campaign_id "),c(a,{label:"Campaign ID:",prop:"campaign_id"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.campaign_id,"onUpdate:modelValue":l[21]||(l[21]=e=>f(I).ruleForm.campaign_id=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" note "),c(a,{label:"Note:",prop:"note"},{default:p((()=>[c(n,{modelValue:f(I).ruleForm.note,"onUpdate:modelValue":l[22]||(l[22]=e=>f(I).ruleForm.note=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),v(" form "),v(" footer "),_("div",oe,[c(i,{type:"primary",onClick:z},{default:p((()=>[te])),_:1})]),v(" footer "),v(" dialog "),v(" device "),c(y,{modelValue:f(I).dialogVisibleDevice,"onUpdate:modelValue":l[25]||(l[25]=e=>f(I).dialogVisibleDevice=e),title:"Device",width:"90%"},{default:p((()=>[f(I).dialogVisibleDevice?(s(),D(N,{key:0,all:f(o).cacheDevice.all,"onUpdate:all":l[23]||(l[23]=e=>f(o).cacheDevice.all=e),select:f(o).cacheDevice.select,"onUpdate:select":l[24]||(l[24]=e=>f(o).cacheDevice.select=e),onKk:se},null,8,["all","select"])):v("v-if",!0),_("span",ie,[v(' <el-button @click="cancleDevice">取 消</el-button> '),c(i,{type:"primary",onClick:me},{default:p((()=>[ne])),_:1})])])),_:1},8,["modelValue"]),v(" site "),c(y,{modelValue:f(I).dialogVisibleSite,"onUpdate:modelValue":l[26]||(l[26]=e=>f(I).dialogVisibleSite=e),title:"diy_siteid",width:"90%"},{default:p((()=>[c(f(J),{msg:f(I).siteData,onKk:de},null,8,["msg"])])),_:1},8,["modelValue"])])}}});export{ue as default};
