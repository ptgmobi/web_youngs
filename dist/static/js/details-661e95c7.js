var e=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,t=(l,r,a)=>r in l?e(l,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[r]=a,o=(e,o)=>{for(var i in o||(o={}))r.call(o,i)&&t(e,i,o[i]);if(l)for(var i of l(o))a.call(o,i)&&t(e,i,o[i]);return e};import{d as i,r as n,M as u,m as d,s,n as c,c as m,p,q as f,v as _,z as v,O as b,b as g,a as y,e as F,w as h,I as k,a1 as V,x as w,P as x,A as D,E as j,L as S}from"./index-84066bf5.js";import{_ as C,g as U,h as O,i as E,j as q,k as A,d as R}from"./device-0620e501.js";import{m as N}from"./message-60aaefcb.js";import"./format-15e3f823.js";import"./moment-9bd84dc2.js";import"./lodash-6ae0a153.js";const P=g(" 添加 "),I=g(" 删除 "),M={class:"dialog-footer mt-10"},z=g("清 空"),L=g("确 定"),T=i({props:{msg:{require:!0,default:()=>"",type:Array}},emits:["kk","up"],setup(e,{emit:l}){const r="此项必填";const a=e=>{let l=new RegExp(/\n+/),r=new RegExp(/[\S]+/),a=e.split(l),t=!0,o=[];return a.forEach(((e,l)=>{if(e&&r.test(e)){let l=e.trim().split(/\s+/);if(2===l.length){let e={diy_siteid:l[0],weight:l[1]};o.push(e)}else t=!1}else t=!1})),t?o:[]};let t=n({siteData:e.msg,siteRules:{site:[{required:!0,validator:(e,l,t)=>{if(""!==l){const e=a(l);t(e?void 0:new Error("格式错误！"))}else t(new Error(r))},trigger:"blur"}]},siteRuleForm:{site:""}});const o=()=>{t.siteData=[...a(t.siteRuleForm.site)]},i=()=>{t.siteData=[]},g=()=>{l("kk",t.siteData)};return u((()=>{})),(e,l)=>{const r=d("el-input"),a=d("el-form-item"),n=d("el-button"),u=d("el-form"),y=d("el-table-column"),F=d("el-table");return s(),c(b,null,[m(u,{ref:"siteRuleForm",enctype:"multipart/form-data",rules:f(t).siteRules,model:f(t).siteRuleForm,"label-position":"right"},{default:p((()=>[m(a,{label:"diy_siteid:",prop:"site"},{default:p((()=>[m(r,{modelValue:f(t).siteRuleForm.site,"onUpdate:modelValue":l[0]||(l[0]=e=>f(t).siteRuleForm.site=e),class:"w100",type:"textarea",rows:4,placeholder:""},null,8,["modelValue"])])),_:1}),m(a,null,{default:p((()=>[m(n,{type:"primary",onClick:o},{default:p((()=>[P])),_:1})])),_:1})])),_:1},8,["rules","model"]),m(F,{data:f(t).siteData},{default:p((()=>[m(y,{align:"center",property:"diy_siteid",label:"diy_siteid"}),m(y,{align:"center",property:"weight",label:"权重"}),m(y,{align:"center",label:"操作"},{default:p((e=>[m(n,{type:"danger",onClick:l=>{return e.row,r=e.$index,void t.siteData.splice(r,1);var r}},{default:p((()=>[I])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),_("span",M,[v(' <el-button @click="cancleDevice">取 消</el-button> '),m(n,{type:"primary",onClick:i},{default:p((()=>[z])),_:1}),m(n,{type:"primary",onClick:g},{default:p((()=>[L])),_:1})])],64)}}}),J={class:"content-con flex column"},$={class:"flex jc-start form-one radio-box"},H=["textContent"],K={class:"form-one flex jc-start"},B={class:"form-one flex jc-start"},G=g(" CPI "),Q=g(" CPA "),W={class:"flex jc-start form-one"},X={class:"flex jc-start form-one"},Y={class:"flex form-one jc-start radio-box"},Z=g(" Slot_ID "),ee=g(" Update(Hours) "),le={class:"flex jc-start form-one jc-start radio-box"},re=g(" Real "),ae=g(" Virtual "),te={class:"w100 flex"},oe=g(" Save "),ie={slot:"footer",class:"dialog-footer"},ne=g("确 定"),ue=i({setup(e){let{proxy:l}=S();const r=y(),a="此项必填";let t=(e,l,r)=>{"AppsFlyer"===M.ruleForm.attribute_provider?M.ruleForm.tracking_link.includes(M.ruleForm.pkg_name)?r(void 0):r(new Error("Attribute Provider:为Appsflyer时Package Name的值必须包含在Traking Link中")):r(void 0)},i=n({offer:{},index:null,cacheDevice:{}}),g=F(""),P=F(0),I=F([0,100]),M=n({dialogVisibleDevice:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica","Lazada","Other"],time:[-1,...[...new Array(24)].map(((e,l)=>l))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pid:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:"",max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:void 0,cutoff_end:void 0,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",campaign_id:"",note:""},rules:{channel:[{required:!0,message:a,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],tracking_link:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{new RegExp("\\s+","g").test(l)?r(new Error("链接中有空格")):r(void 0),r(void 0)}},{validator:(e,l,r)=>{/^http/.test(l)?r(void 0):r(new Error("必须为有效链接")),r(void 0)}},{validator:(e,l,r)=>{if("AppsFlyer"===M.ruleForm.attribute_provider){["af_sub_siteid","af_installpostback"].map((e=>{l.includes(e)&&r(new Error(`链接有错误，不能包含${e}`))}))}else"Adjust"===M.ruleForm.attribute_provider&&(l.includes("install_callback")||l.includes("event_callback")?r(new Error("链接里不可以包含install_callback和event_callback")):r(void 0));r(void 0)}},{validator:t}],pkg_name:[{required:!0,message:a,trigger:["blur","change"]},{validator:t}],conversion_flow:[{required:!0,message:a,trigger:["blur","change"]}],event_name:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,r)=>{"1"===M.ruleForm.conversion_flow?r(void 0):r(l?void 0:new Error(a))}}],payout:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]}],max_clk_num:[{required:!0,message:a,trigger:["blur","change"]}],device:[{required:!0,validator:(e,l,r)=>{r(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,l,r)=>{l?"1"===l.toString()||M.ruleForm.hour?r(void 0):r(new Error("请选择具体数值")):r(new Error(a))},trigger:["blur","change"]}],clk_id:[{required:!0,message:a,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===M.ruleForm.end_hour?r(new Error(a)):r(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===M.ruleForm.start_hour?r(new Error(a)):r(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const z=()=>{M.dialogVisibleSite=!0;const e=M.ruleForm.diy_siteid;M.siteData=e},L=()=>{ue("ruleForm")},ue=e=>{l.$refs[e].validate((e=>{if(!e)return!1;de()}))},de=async()=>{let e;M.ruleForm;let l=o({},M.ruleForm);l.clk_id=parseFloat(l.clk_id),l.conversion_flow=parseFloat(l.conversion_flow),l.cutoff_end=parseFloat(l.cutoff_end),l.cutoff_start=parseFloat(l.cutoff_start),l.end_hour=parseFloat(l.end_hour),l.start_hour=parseFloat(l.start_hour),l.hour=parseFloat(l.hour),l.max_clk_num=parseFloat(l.max_clk_num),l.payout=parseFloat(l.payout),l.platform=parseFloat(l.platform),l.site_clk_id=parseFloat(l.site_clk_id),l.site_clk_limit=parseFloat(l.site_clk_limit),l.site_id=parseFloat(l.site_id),l.site_install_limitation=parseFloat(l.site_install_limitation),l.diy_siteid=JSON.stringify(l.diy_siteid),l.device=JSON.stringify(l.device),"1"===M.ruleForm.type&&(delete l.id,delete l.offer_id,e=await U(l)),"2"===M.ruleForm.type&&(e=await O(l)),N(e)&&window.close()},se=e=>{M.ruleForm.diy_siteid=e,M.dialogVisibleSite=!1},ce=e=>{i.cacheDevice.select=e},me=()=>{M.ruleForm.device=i.cacheDevice.select,M.dialogVisibleDevice=!1};h(I,((e,l)=>{(e=>{M.ruleForm.cutoff_start=e[0]/100,M.ruleForm.cutoff_end=e[1]/100})(e)}),{immediate:!0});k((()=>{const e=P.value,l=M.ruleForm.cutoff_start,r=M.ruleForm.cutoff_end;return{judge:((Number(r)-Number(l))*Number(e)).toFixed(0),all:Number(e).toFixed(0)}})),V((()=>{(async()=>{M.ruleForm.pkg_name,M.ruleForm.country,M.ruleForm.platform})()}));const pe=(e,l)=>{let r={};return l.type,e.device&&(e.device=JSON.parse(e.device)),e.diy_siteid&&(e.diy_siteid=JSON.parse(e.diy_siteid)),"2"===l.type&&(r.id=e.id,r.offer_id=e.offer_id),r=o(o({},e),l),"1"===l.type&&(delete r.id,delete r.offer_id),r},fe=()=>{M.ruleForm.platform&&M.ruleForm.country?(M.dialogVisibleDevice=!0,i.cacheDevice.select=M.ruleForm.device,(async()=>{const e={id:M.ruleForm.id,platform:M.ruleForm.platform,country:M.ruleForm.country},{data:l}=await R(e);i.cacheDevice.all=l.all})()):j.error("请提前选择平台和国家")},_e=()=>{(async e=>{const l=await A({offer_id:e}),{data:r}=l,a=pe(r,{type:M.ruleForm.type,isCopy:!0});M.ruleForm=o(o({},M.ruleForm),a)})(M.ruleForm.copy_offer)},ve=k((()=>{const e=M.ruleForm.tracking_link,l=M.ruleForm.attribute_provider;let r="";if("AppsFlyer"===l){const l=/pid=([\s\S]*)_int/g,a=[...e.matchAll(l)];if(0!==a.length)return r=a[0][1],M.ruleForm.pid=r,r}if("Adjust"===l){const l=/https:\/\/app.adjust.com\/([\s\S]*)\?/g,a=[...e.matchAll(l)];if(0!==a.length)return r=a[0][1],M.ruleForm.pid=r,r}return M.ruleForm.pid=r,r}));return k((()=>{let e=0;if(i.cacheDevice,i.cacheDevice.hasOwnProperty("all")&&i.cacheDevice.hasOwnProperty("select")){let l=i.cacheDevice.all,r=i.cacheDevice.select;0!==l.length&&0!==r.length&&l.forEach((l=>{r.forEach((r=>{l.source===r.source&&l.label===r.label&&(e+=parseInt(l.device_count))}))})),M.search.deviceData.count=e}return null!=e?e:M.search.deviceData.count})),u((()=>{if((async()=>{const e=await E();if(e){const{data:l}=e;return M.options.channel=Object.values(l.channel),M.options.country=Object.values(l.country),M.options.category=Object.values(l.category),"获取配置成功"}})(),g.value=r.currentRoute.value.name,g.value,"old-buzz-create"===g.value&&(M.ruleForm.operation_type="1",M.ruleForm.type="1"),"old-buzz-edit"===g.value){M.ruleForm.operation_type="2",M.ruleForm.type="2";(async e=>{const l=await q(e),{data:r}=l;M.ruleForm=pe(r,{type:M.ruleForm.type,isCopy:!1}),i.offer=r})(r.currentRoute.value.params.id)}})),(e,l)=>{const r=d("el-form-item"),a=d("el-option"),t=d("el-select"),o=d("el-button"),n=d("el-input"),u=d("el-radio"),g=d("el-form"),y=d("el-dialog");return s(),c("div",null,[v(" form "),m(g,{ref:"ruleForm",enctype:"multipart/form-data",rules:f(M).rules,model:f(M).ruleForm,"label-width":"240px","label-position":"right"},{default:p((()=>[_("div",J,[v(" offer_id "),m(r,{label:"Offer ID:",prop:"offer_id"},{default:p((()=>[_("div",$,[_("span",{textContent:w(f(M).ruleForm.offer_id)},null,8,H)])])),_:1}),v(" channel "),m(r,{label:"Channel:",prop:"channel"},{default:p((()=>[m(t,{modelValue:f(M).ruleForm.channel,"onUpdate:modelValue":l[0]||(l[0]=e=>f(M).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,x(f(M).options.channel,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" copy_offer "),m(r,{label:"Copy Offer:",prop:"copy_offer"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.copy_offer,"onUpdate:modelValue":l[1]||(l[1]=e=>f(M).ruleForm.copy_offer=e),modelModifiers:{trim:!0},class:"form-one copy-btn search-input",placeholder:""},{append:p((()=>[m(o,{slot:"append",type:"primary",icon:"Search",onClick:_e})])),_:1},8,["modelValue"])])),_:1}),v(" attribute_provider "),m(r,{label:"Attribute Provider:",prop:"attribute_provider"},{default:p((()=>[m(t,{modelValue:f(M).ruleForm.attribute_provider,"onUpdate:modelValue":l[2]||(l[2]=e=>f(M).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,x(f(M).options.attribute_provider,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" title "),m(r,{label:"Offer Title:",prop:"title"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.title,"onUpdate:modelValue":l[3]||(l[3]=e=>f(M).ruleForm.title=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" tracking_link "),v(" 此处需要去除空格和制表符 "),m(r,{class:"mb-30",label:"Traking Link:",prop:"tracking_link"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.tracking_link,"onUpdate:modelValue":l[4]||(l[4]=e=>f(M).ruleForm.tracking_link=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),v(" pid "),m(r,{label:"Pid:",prop:"pid"},{default:p((()=>[_("div",K,[_("span",null,w(f(ve)),1),v(" <span>{{data.ruleForm.pid}}</span> ")])])),_:1}),v(" pkg_name "),m(r,{label:"Package Name:",prop:"pkg_name"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.pkg_name,"onUpdate:modelValue":l[5]||(l[5]=e=>f(M).ruleForm.pkg_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" conversion_flow_type "),m(r,{label:"Conversion Flow:",prop:"conversion_flow"},{default:p((()=>[_("div",B,[m(u,{modelValue:f(M).ruleForm.conversion_flow,"onUpdate:modelValue":l[6]||(l[6]=e=>f(M).ruleForm.conversion_flow=e),label:1},{default:p((()=>[G])),_:1},8,["modelValue"]),m(u,{modelValue:f(M).ruleForm.conversion_flow,"onUpdate:modelValue":l[7]||(l[7]=e=>f(M).ruleForm.conversion_flow=e),label:2},{default:p((()=>[Q])),_:1},8,["modelValue"])])])),_:1}),v(" conversion_flow "),2===f(M).ruleForm.conversion_flow?(s(),D(r,{key:0,label:"Event Name:",prop:"event_name"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.event_name,"onUpdate:modelValue":l[8]||(l[8]=e=>f(M).ruleForm.event_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})):v("v-if",!0),v(" payout "),m(r,{label:"Payout($):",prop:"payout"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.payout,"onUpdate:modelValue":l[9]||(l[9]=e=>f(M).ruleForm.payout=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" platform "),m(r,{label:"Select Platform:",prop:"platform"},{default:p((()=>[m(t,{modelValue:f(M).ruleForm.platform,"onUpdate:modelValue":l[10]||(l[10]=e=>f(M).ruleForm.platform=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,x(f(M).options.platform,(e=>(s(),D(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" country "),m(r,{label:"Targeting Countries:",prop:"country"},{default:p((()=>[m(t,{modelValue:f(M).ruleForm.country,"onUpdate:modelValue":l[11]||(l[11]=e=>f(M).ruleForm.country=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,x(f(M).options.country,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" max_clk_num "),m(r,{label:"Click Limitation:",prop:"max_clk_num"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.max_clk_num,"onUpdate:modelValue":l[12]||(l[12]=e=>f(M).ruleForm.max_clk_num=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" Site Click Limitation "),m(r,{label:"Site Click Limitation:",prop:"site_clk_limit"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.site_clk_limit,"onUpdate:modelValue":l[13]||(l[13]=e=>f(M).ruleForm.site_clk_limit=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" start_hour "),m(r,{label:"Start Hour:",prop:"start_hour"},{default:p((()=>[m(t,{modelValue:f(M).ruleForm.start_hour,"onUpdate:modelValue":l[14]||(l[14]=e=>f(M).ruleForm.start_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),c(b,null,x(f(M).options.time,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" end_hour "),m(r,{label:"End Hour:",prop:"end_hour"},{default:p((()=>[m(t,{modelValue:f(M).ruleForm.end_hour,"onUpdate:modelValue":l[15]||(l[15]=e=>f(M).ruleForm.end_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),c(b,null,x(f(M).options.time,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" site_install_limitation"),v(' <el-form-item label="Site Install Limitation:" prop="site_install_limitation">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">\n            <el-option\n              v-for="item in 6"\n              :key="item"\n              :label="item - 1"\n              :value="item - 1">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" Select Device "),m(r,{label:"Select Device:",prop:"device"},{default:p((()=>[_("div",W,[m(o,{class:"cp ml-10",type:"primary",icon:"Setting",circle:"",onClick:fe}),v(" <span class=\"ml-10\" v-text='countDevice'></span> ")])])),_:1}),v(" Device Cutoff "),v(' <el-form-item label="Device Cutoff:" prop="cutoff_start">\n          <div class="flex ai-center">\n            <span v-text="data.ruleForm.cutoff_start * 100"></span>\n            %\n            <span>-</span>\n            <span v-text="data.ruleForm.cutoff_end * 100"></span>\n            % （\n            <span>总设备数:</span>\n            <span v-text="handleDeviceNum.all"></span>\n            ） （\n            <span>选中设备数:</span>\n            <span v-text="handleDeviceNum.judge"></span>\n            ）\n          </div>\n          <div class="flex jc-start form-one p10 pt-0 pb-0">\n            <el-slider\n              class="w100"\n              v-model="cutoff"\n              range\n              :step="5"\n              :show-stops="true"\n              show-input\n              :min="0"\n              :max="100"\n            ></el-slider>\n          </div>\n        </el-form-item> '),v(" diy_siteid "),m(r,{label:"Diy SiteID:",prop:"site"},{default:p((()=>[_("div",X,[m(o,{class:"cp ml-10",icon:"Tools",circle:"",onClick:z})])])),_:1}),v(" site_id "),m(r,{label:"Site ID:",prop:"site_id"},{default:p((()=>[_("div",Y,[m(u,{modelValue:f(M).ruleForm.site_id,"onUpdate:modelValue":l[16]||(l[16]=e=>f(M).ruleForm.site_id=e),label:1},{default:p((()=>[Z])),_:1},8,["modelValue"]),m(u,{modelValue:f(M).ruleForm.site_id,"onUpdate:modelValue":l[17]||(l[17]=e=>f(M).ruleForm.site_id=e),label:2},{default:p((()=>[ee])),_:1},8,["modelValue"]),m(t,{modelValue:f(M).ruleForm.hour,"onUpdate:modelValue":l[18]||(l[18]=e=>f(M).ruleForm.hour=e),filterable:"",class:"form-one ml-10",clearable:"",placeholder:"",disabled:2!==f(M).ruleForm.site_id},{default:p((()=>[(s(!0),c(b,null,x(f(M).options.site_id,(e=>(s(),D(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])),_:1}),v(" clk_id "),m(r,{label:"Click ID:",prop:"clk_id"},{default:p((()=>[_("div",le,[m(u,{modelValue:f(M).ruleForm.clk_id,"onUpdate:modelValue":l[19]||(l[19]=e=>f(M).ruleForm.clk_id=e),label:1},{default:p((()=>[re])),_:1},8,["modelValue"]),m(u,{modelValue:f(M).ruleForm.clk_id,"onUpdate:modelValue":l[20]||(l[20]=e=>f(M).ruleForm.clk_id=e),label:2},{default:p((()=>[ae])),_:1},8,["modelValue"])])])),_:1}),v(" site_clk_id "),v(' <el-form-item label="Site Click ID:" prop="site_clk_id">\n          <div class=\'flex jc-start form-one jc-start radio-box\'>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>\n          </div>\n        </el-form-item> '),v(" category "),v(' <el-form-item label="Category:" prop="category_id">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.category_id" clearable placeholder="">\n            <el-option\n              v-for="(value, key) in handleOptionsCategory"\n              :key="key"\n              :label="value"\n              :value="key">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" note "),m(r,{label:"Note:",prop:"note"},{default:p((()=>[m(n,{modelValue:f(M).ruleForm.note,"onUpdate:modelValue":l[21]||(l[21]=e=>f(M).ruleForm.note=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),v(" form "),v(" footer "),_("div",te,[m(o,{type:"primary",onClick:L},{default:p((()=>[oe])),_:1})]),v(" footer "),v(" dialog "),v(" device "),m(y,{modelValue:f(M).dialogVisibleDevice,"onUpdate:modelValue":l[24]||(l[24]=e=>f(M).dialogVisibleDevice=e),title:"Device",width:"90%"},{default:p((()=>[f(M).dialogVisibleDevice?(s(),D(C,{key:0,all:f(i).cacheDevice.all,"onUpdate:all":l[22]||(l[22]=e=>f(i).cacheDevice.all=e),select:f(i).cacheDevice.select,"onUpdate:select":l[23]||(l[23]=e=>f(i).cacheDevice.select=e),onKk:ce},null,8,["all","select"])):v("v-if",!0),_("span",ie,[v(' <el-button @click="cancleDevice">取 消</el-button> '),m(o,{type:"primary",onClick:me},{default:p((()=>[ne])),_:1})])])),_:1},8,["modelValue"]),v(" site "),m(y,{modelValue:f(M).dialogVisibleSite,"onUpdate:modelValue":l[25]||(l[25]=e=>f(M).dialogVisibleSite=e),title:"diy_siteid",width:"90%"},{default:p((()=>[m(f(T),{msg:f(M).siteData,onKk:se},null,8,["msg"])])),_:1},8,["modelValue"])])}}});export{ue as default};
