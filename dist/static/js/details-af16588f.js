var e=Object.defineProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,o=(e,o)=>{for(var i in o||(o={}))t.call(o,i)&&r(e,i,o[i]);if(l)for(var i of l(o))a.call(o,i)&&r(e,i,o[i]);return e};import{d as i,r as u,M as n,m as d,s,n as c,c as m,p,q as f,v as _,z as v,O as b,b as y,e as g,I as F,a1 as h,w as k,x as V,K as x,a as w,P as D,A as C,E as j,L as U}from"./index-7c5e72f5.js";import{_ as S,f as q,g as O,h as E,i as N,j as R,d as A}from"./device-e647b15a.js";import{m as P}from"./message-7ca95fb0.js";import{h as I}from"./buzz-2d173de1.js";import"./format-15e3f823.js";import"./moment-9bd84dc2.js";import"./lodash-12314391.js";const M=y(" 添加 "),L=y(" 删除 "),z={class:"dialog-footer mt-10"},J=y("清 空"),T=y("确 定"),H=i({props:{msg:{require:!0,default:()=>"",type:Array}},emits:["kk","up"],setup(e,{emit:l}){const t="此项必填";const a=e=>{let l=new RegExp(/\n+/),t=new RegExp(/[\S]+/),a=e.split(l),r=!0,o=[];return a.forEach(((e,l)=>{if(e&&t.test(e)){let l=e.trim().split(/\s+/);if(2===l.length){let e={diy_siteid:l[0],weight:l[1]};o.push(e)}else r=!1}else r=!1})),r?o:[]};let r=u({siteData:e.msg,siteRules:{site:[{required:!0,validator:(e,l,r)=>{if(""!==l){const e=a(l);r(e?void 0:new Error("格式错误！"))}else r(new Error(t))},trigger:"blur"}]},siteRuleForm:{site:""}});const o=()=>{r.siteData=[...a(r.siteRuleForm.site)]},i=()=>{r.siteData=[]},y=()=>{l("kk",r.siteData)};return n((()=>{})),(e,l)=>{const t=d("el-input"),a=d("el-form-item"),u=d("el-button"),n=d("el-form"),g=d("el-table-column"),F=d("el-table");return s(),c(b,null,[m(n,{ref:"siteRuleForm",enctype:"multipart/form-data",rules:f(r).siteRules,model:f(r).siteRuleForm,"label-position":"right"},{default:p((()=>[m(a,{label:"diy_siteid:",prop:"site"},{default:p((()=>[m(t,{modelValue:f(r).siteRuleForm.site,"onUpdate:modelValue":l[0]||(l[0]=e=>f(r).siteRuleForm.site=e),class:"w100",type:"textarea",rows:4,placeholder:""},null,8,["modelValue"])])),_:1}),m(a,null,{default:p((()=>[m(u,{type:"primary",onClick:o},{default:p((()=>[M])),_:1})])),_:1})])),_:1},8,["rules","model"]),m(F,{data:f(r).siteData},{default:p((()=>[m(g,{align:"center",property:"diy_siteid",label:"diy_siteid"}),m(g,{align:"center",property:"weight",label:"权重"}),m(g,{align:"center",label:"操作"},{default:p((e=>[m(u,{type:"danger",onClick:l=>{return e.row,t=e.$index,void r.siteData.splice(t,1);var t}},{default:p((()=>[L])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),_("span",z,[v(' <el-button @click="cancleDevice">取 消</el-button> '),m(u,{type:"primary",onClick:i},{default:p((()=>[J])),_:1}),m(u,{type:"primary",onClick:y},{default:p((()=>[T])),_:1})])],64)}}}),K={class:"w100"},$={class:"flex jc-start"},B=["textContent"],G=y(" % "),Q=_("span",null,"-",-1),W=["textContent"],X=y(" % （ "),Y=_("span",null,"总设备数:",-1),Z=["textContent"],ee=y(" ） （ "),le=_("span",null,"选中设备数:",-1),te=["textContent"],ae=y(" ） "),re={class:"p0-10"},oe=i({props:{query:{require:!0,default:()=>({}),type:Object}},emits:["up"],setup(e,{emit:l}){const t=e;let a=g(0),r=u({cutoff_start:t.query.cutoff_start,cutoff_end:t.query.cutoff_end}),o=r.cutoff_start?100*Number(r.cutoff_start):0,i=r.cutoff_end?100*Number(r.cutoff_end):100,n=g([o,i]);const p=async()=>{const{pkg_name:e,country:l,platform:r}=t.query;if(e&&l&&r){const t={pkg_name:e,country:l,platform:r},o=await(async e=>{const l=await I(e),{data:t}=l;return 0!==t.length?t.findLast((e=>e)).device_num:0})(t);a.value=o}},v=F((()=>{const e=a.value,l=r.cutoff_start?Number(r.cutoff_start):0;return{judge:(((r.cutoff_end?Number(r.cutoff_end):1)-l)*e).toFixed(0),all:e.toFixed(0)}}));h((()=>{p()})),k((()=>t.query),((e,l)=>{void 0!==e.cutoff_start&&void 0!==e.cutoff_end&&(r.cutoff_start=e.cutoff_start,r.cutoff_end=e.cutoff_end)}),{immediate:!0,deep:!0});const b=e=>{var t;t=e,r.cutoff_start=t[0]/100,r.cutoff_end=t[1]/100,l("up",r)};return(e,l)=>{const t=d("el-slider");return s(),c("div",K,[_("div",$,[_("span",{textContent:V((100*f(r).cutoff_start).toFixed(0))},null,8,B),G,Q,_("span",{textContent:V((100*f(r).cutoff_end).toFixed(0))},null,8,W),X,Y,_("span",{textContent:V(f(v).all)},null,8,Z),ee,le,_("span",{textContent:V(f(v).judge)},null,8,te),ae]),_("div",re,[m(t,{modelValue:f(n),"onUpdate:modelValue":l[0]||(l[0]=e=>x(n)?n.value=e:n=e),class:"device-cutoff",range:"",step:5,"show-stops":!0,"show-input":"",min:0,max:100,onChange:b},null,8,["modelValue"])])])}}}),ie={class:"content-con flex column"},ue={class:"flex jc-start form-one radio-box"},ne=["textContent"],de={class:"form-one flex jc-start"},se={class:"form-one flex jc-start"},ce=y(" CPI "),me=y(" CPA "),pe={class:"flex jc-start form-one"},fe=y(" 算法 "),_e=y(" 标签 "),ve={class:"flex jc-start form-one"},be={class:"flex jc-start form-one"},ye={class:"flex form-one jc-start radio-box"},ge=y(" Slot_ID "),Fe=y(" Update(Hours) "),he={class:"flex jc-start form-one jc-start radio-box"},ke=y(" Real "),Ve=y(" Virtual "),xe={class:"w100 flex"},we=y(" Save "),De={slot:"footer",class:"dialog-footer"},Ce=y("确 定"),je=i({setup(e){let{proxy:l}=U();const t=w(),a="此项必填";let r=u({offer:{},index:null,cacheDevice:{}}),i=g(""),y=g(0),h=g([0,100]),x=u({dialogVisibleDevice:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica","Lazada","Other"],time:[-1,...[...new Array(24)].map(((e,l)=>l))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pid:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:"",max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:void 0,cutoff_end:void 0,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",note:"",campaign_id:"",p_type:2},rules:{channel:[{required:!0,message:a,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],tracking_link:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,t)=>{new RegExp("\\s+","g").test(l)?t(new Error("链接中有空格")):t(void 0),t(void 0)}},{validator:(e,l,t)=>{/^http/.test(l)||/^lazada/.test(l)?t(void 0):t(new Error("必须为有效链接")),t(void 0)}},{validator:(e,l,t)=>{"AppsFlyer"===x.ruleForm.attribute_provider?t(void 0):"Adjust"===x.ruleForm.attribute_provider&&(l.includes("install_callback")||l.includes("event_callback")?t(new Error("链接里不可以包含install_callback和event_callback")):t(void 0)),t(void 0)}}],pkg_name:[{required:!0,message:a,trigger:["blur","change"]}],conversion_flow:[{required:!0,message:a,trigger:["blur","change"]}],event_name:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,t)=>{"1"===x.ruleForm.conversion_flow?t(void 0):t(l?void 0:new Error(a))}}],payout:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]}],max_clk_num:[{required:!0,message:a,trigger:["blur","change"]}],device:[{required:!0,validator:(e,l,t)=>{t(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,l,t)=>{l?"1"===l.toString()||x.ruleForm.hour?t(void 0):t(new Error("请选择具体数值")):t(new Error(a))},trigger:["blur","change"]}],clk_id:[{required:!0,message:a,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,l,t)=>{""!==l&&(""===x.ruleForm.end_hour?t(new Error(a)):t(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,l,t)=>{""!==l&&(""===x.ruleForm.start_hour?t(new Error(a)):t(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}],p_type:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const I=()=>{x.dialogVisibleSite=!0;const e=x.ruleForm.diy_siteid;x.siteData=e},M=()=>{L("ruleForm")},L=e=>{l.$refs[e].validate((e=>{if(!e)return!1;z()}))},z=async()=>{let e;x.ruleForm;let l=o({},x.ruleForm);l.clk_id=parseFloat(l.clk_id),l.conversion_flow=parseFloat(l.conversion_flow),l.cutoff_end=parseFloat(l.cutoff_end),l.cutoff_start=parseFloat(l.cutoff_start),l.end_hour=parseFloat(l.end_hour),l.start_hour=parseFloat(l.start_hour),l.hour=parseFloat(l.hour),l.max_clk_num=parseFloat(l.max_clk_num),l.payout=parseFloat(l.payout),l.platform=parseFloat(l.platform),l.site_clk_id=parseFloat(l.site_clk_id),l.site_clk_limit=parseFloat(l.site_clk_limit),l.site_id=parseFloat(l.site_id),l.site_install_limitation=parseFloat(l.site_install_limitation),l.diy_siteid=JSON.stringify(l.diy_siteid),l.device=JSON.stringify(l.device),"1"===x.ruleForm.type&&(delete l.id,delete l.offer_id,e=await q(l)),"2"===x.ruleForm.type&&(e=await O(l)),P(e)&&window.close()},J=e=>{x.ruleForm.diy_siteid=e,x.dialogVisibleSite=!1},T=e=>{r.cacheDevice.select=e},K=()=>{x.ruleForm.device=r.cacheDevice.select,x.dialogVisibleDevice=!1};k(h,((e,l)=>{(e=>{x.ruleForm.cutoff_start=e[0]/100,x.ruleForm.cutoff_end=e[1]/100})(e)}),{immediate:!0});F((()=>{const e=y.value,l=x.ruleForm.cutoff_start,t=x.ruleForm.cutoff_end;return{judge:((Number(t)-Number(l))*Number(e)).toFixed(0),all:Number(e).toFixed(0)}}));const $=e=>{x.ruleForm.cutoff_start=e.cutoff_start,x.ruleForm.cutoff_end=e.cutoff_end},B=(e,l)=>{let t={};return l.type,e.device&&(e.device=JSON.parse(e.device)),e.diy_siteid&&(e.diy_siteid=JSON.parse(e.diy_siteid)),"2"===l.type&&(t.id=e.id,t.offer_id=e.offer_id),t=o(o({},e),l),"1"===l.type&&(delete t.id,delete t.offer_id),t},G=()=>{x.ruleForm.platform&&x.ruleForm.country?(x.dialogVisibleDevice=!0,r.cacheDevice.select=x.ruleForm.device,(async()=>{const e={id:x.ruleForm.id,platform:x.ruleForm.platform,country:x.ruleForm.country},{data:l}=await A(e);r.cacheDevice.all=l.all})()):j.error("请提前选择平台和国家")},Q=()=>{(async e=>{const l=await R({offer_id:e}),{data:t}=l,a=B(t,{type:x.ruleForm.type,isCopy:!0});x.ruleForm=o(o({},x.ruleForm),a)})(x.ruleForm.copy_offer)},W=F((()=>{const e=x.ruleForm.tracking_link,l=x.ruleForm.attribute_provider;let t="";if("AppsFlyer"===l){const l=/pid=([\s\S]*)_int/g,a=[...e.matchAll(l)];if(0!==a.length)return t=a[0][1],x.ruleForm.pid=t,t}if("Adjust"===l){const l=/https:\/\/app.adjust.com\/([\s\S]*)\?/g,a=[...e.matchAll(l)];if(0!==a.length)return t=a[0][1],x.ruleForm.pid=t,t}return x.ruleForm.pid=t,t}));return F((()=>{let e=0;if(r.cacheDevice,r.cacheDevice.hasOwnProperty("all")&&r.cacheDevice.hasOwnProperty("select")){let l=r.cacheDevice.all,t=r.cacheDevice.select;0!==l.length&&0!==t.length&&l.forEach((l=>{t.forEach((t=>{l.source===t.source&&l.label===t.label&&(e+=parseInt(l.device_count))}))})),x.search.deviceData.count=e}return null!=e?e:x.search.deviceData.count})),n((()=>{if((async()=>{const e=await E();if(e){const{data:l}=e;return x.options.channel=Object.values(l.channel),x.options.country=Object.values(l.country),x.options.category=Object.values(l.category),"获取配置成功"}})(),i.value=t.currentRoute.value.name,i.value,"light-create"===i.value&&(x.ruleForm.operation_type="1",x.ruleForm.type="1"),"light-edit"===i.value){x.ruleForm.operation_type="2",x.ruleForm.type="2";(async e=>{const l=await N(e),{data:t}=l;x.ruleForm=B(t,{type:x.ruleForm.type,isCopy:!1}),r.offer=t})(t.currentRoute.value.params.id)}})),(e,l)=>{const t=d("el-form-item"),a=d("el-option"),o=d("el-select"),i=d("el-button"),u=d("el-input"),n=d("el-radio"),y=d("el-form"),g=d("el-dialog");return s(),c("div",null,[v(" form "),m(y,{ref:"ruleForm",enctype:"multipart/form-data",rules:f(x).rules,model:f(x).ruleForm,"label-width":"240px","label-position":"right"},{default:p((()=>[_("div",ie,[v(" offer_id "),m(t,{label:"Offer ID:",prop:"offer_id"},{default:p((()=>[_("div",ue,[_("span",{textContent:V(f(x).ruleForm.offer_id)},null,8,ne)])])),_:1}),v(" channel "),m(t,{label:"Channel:",prop:"channel"},{default:p((()=>[m(o,{modelValue:f(x).ruleForm.channel,"onUpdate:modelValue":l[0]||(l[0]=e=>f(x).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,D(f(x).options.channel,(e=>(s(),C(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" copy_offer "),m(t,{label:"Copy Offer:",prop:"copy_offer"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.copy_offer,"onUpdate:modelValue":l[1]||(l[1]=e=>f(x).ruleForm.copy_offer=e),modelModifiers:{trim:!0},class:"form-one copy-btn search-input",placeholder:""},{append:p((()=>[m(i,{slot:"append",type:"primary",icon:"Search",onClick:Q})])),_:1},8,["modelValue"])])),_:1}),v(" attribute_provider "),m(t,{label:"Attribute Provider:",prop:"attribute_provider"},{default:p((()=>[m(o,{modelValue:f(x).ruleForm.attribute_provider,"onUpdate:modelValue":l[2]||(l[2]=e=>f(x).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,D(f(x).options.attribute_provider,(e=>(s(),C(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" title "),m(t,{label:"Offer Title:",prop:"title"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.title,"onUpdate:modelValue":l[3]||(l[3]=e=>f(x).ruleForm.title=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" tracking_link "),v(" 此处需要去除空格和制表符 "),m(t,{class:"mb-30",label:"Traking Link:",prop:"tracking_link"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.tracking_link,"onUpdate:modelValue":l[4]||(l[4]=e=>f(x).ruleForm.tracking_link=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),v(" pid "),m(t,{label:"Pid:",prop:"pid"},{default:p((()=>[_("div",de,[_("span",null,V(f(W)),1),v(" <span>{{data.ruleForm.pid}}</span> ")])])),_:1}),v(" pkg_name "),m(t,{label:"Package Name:",prop:"pkg_name"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.pkg_name,"onUpdate:modelValue":l[5]||(l[5]=e=>f(x).ruleForm.pkg_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" conversion_flow_type "),m(t,{label:"Conversion Flow:",prop:"conversion_flow"},{default:p((()=>[_("div",se,[m(n,{modelValue:f(x).ruleForm.conversion_flow,"onUpdate:modelValue":l[6]||(l[6]=e=>f(x).ruleForm.conversion_flow=e),label:1},{default:p((()=>[ce])),_:1},8,["modelValue"]),m(n,{modelValue:f(x).ruleForm.conversion_flow,"onUpdate:modelValue":l[7]||(l[7]=e=>f(x).ruleForm.conversion_flow=e),label:2},{default:p((()=>[me])),_:1},8,["modelValue"])])])),_:1}),v(" conversion_flow "),2===f(x).ruleForm.conversion_flow?(s(),C(t,{key:0,label:"Event Name:",prop:"event_name"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.event_name,"onUpdate:modelValue":l[8]||(l[8]=e=>f(x).ruleForm.event_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})):v("v-if",!0),v(" payout "),m(t,{label:"Payout($):",prop:"payout"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.payout,"onUpdate:modelValue":l[9]||(l[9]=e=>f(x).ruleForm.payout=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" platform "),m(t,{label:"Select Platform:",prop:"platform"},{default:p((()=>[m(o,{modelValue:f(x).ruleForm.platform,"onUpdate:modelValue":l[10]||(l[10]=e=>f(x).ruleForm.platform=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,D(f(x).options.platform,(e=>(s(),C(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" country "),m(t,{label:"Targeting Countries:",prop:"country"},{default:p((()=>[m(o,{modelValue:f(x).ruleForm.country,"onUpdate:modelValue":l[11]||(l[11]=e=>f(x).ruleForm.country=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:p((()=>[(s(!0),c(b,null,D(f(x).options.country,(e=>(s(),C(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" max_clk_num "),m(t,{label:"Click Limitation:",prop:"max_clk_num"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.max_clk_num,"onUpdate:modelValue":l[12]||(l[12]=e=>f(x).ruleForm.max_clk_num=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" Site Click Limitation "),m(t,{label:"Site Click Limitation:",prop:"site_clk_limit"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.site_clk_limit,"onUpdate:modelValue":l[13]||(l[13]=e=>f(x).ruleForm.site_clk_limit=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),v(" start_hour "),m(t,{label:"Start Hour:",prop:"start_hour"},{default:p((()=>[m(o,{modelValue:f(x).ruleForm.start_hour,"onUpdate:modelValue":l[14]||(l[14]=e=>f(x).ruleForm.start_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),c(b,null,D(f(x).options.time,(e=>(s(),C(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" end_hour "),m(t,{label:"End Hour:",prop:"end_hour"},{default:p((()=>[m(o,{modelValue:f(x).ruleForm.end_hour,"onUpdate:modelValue":l[15]||(l[15]=e=>f(x).ruleForm.end_hour=e),filterable:"",class:"form-one",placeholder:""},{default:p((()=>[(s(!0),c(b,null,D(f(x).options.time,(e=>(s(),C(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" site_install_limitation"),v(' <el-form-item label="Site Install Limitation:" prop="site_install_limitation">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">\n            <el-option\n              v-for="item in 6"\n              :key="item"\n              :label="item - 1"\n              :value="item - 1">\n            </el-option>\n          </el-select>\n        </el-form-item> '),m(t,{label:"Delivery mode:",prop:"p_type"},{default:p((()=>[_("div",pe,[m(n,{modelValue:f(x).ruleForm.p_type,"onUpdate:modelValue":l[16]||(l[16]=e=>f(x).ruleForm.p_type=e),label:1},{default:p((()=>[fe])),_:1},8,["modelValue"]),m(n,{modelValue:f(x).ruleForm.p_type,"onUpdate:modelValue":l[17]||(l[17]=e=>f(x).ruleForm.p_type=e),label:2},{default:p((()=>[_e])),_:1},8,["modelValue"])])])),_:1}),v(" Select Device "),2==f(x).ruleForm.p_type?(s(),C(t,{key:1,label:"Select Device:",prop:"device"},{default:p((()=>[_("div",ve,[m(i,{class:"cp ml-10",type:"primary",icon:"Setting",circle:"",onClick:G}),v(" <span class=\"ml-10\" v-text='countDevice'></span> ")])])),_:1})):v("v-if",!0),v(" Device Cutoff "),v(' <el-form-item label="Device Cutoff:" prop="cutoff_start">\n          <div class="flex ai-center">\n            <span v-text="data.ruleForm.cutoff_start * 100"></span>\n            %\n            <span>-</span>\n            <span v-text="data.ruleForm.cutoff_end * 100"></span>\n            % （\n            <span>总设备数:</span>\n            <span v-text="handleDeviceNum.all"></span>\n            ） （\n            <span>选中设备数:</span>\n            <span v-text="handleDeviceNum.judge"></span>\n            ）\n          </div>\n          <div class="flex jc-start form-one p10 pt-0 pb-0">\n            <el-slider\n              class="w100"\n              v-model="cutoff"\n              range\n              :step="5"\n              :show-stops="true"\n              show-input\n              :min="0"\n              :max="100"\n            ></el-slider>\n          </div>\n        </el-form-item> '),v(" Device Cutoff "),1==f(x).ruleForm.p_type?(s(),C(t,{key:2,label:"Device Cutoff:",prop:"cutoff_start"},{default:p((()=>[m(oe,{class:"form-one",query:f(x).ruleForm,onUp:$},null,8,["query"])])),_:1})):v("v-if",!0),v(" diy_siteid "),m(t,{label:"Diy SiteID:",prop:"site"},{default:p((()=>[_("div",be,[m(i,{class:"cp ml-10",icon:"Tools",circle:"",onClick:I})])])),_:1}),v(" site_id "),m(t,{label:"Site ID:",prop:"site_id"},{default:p((()=>[_("div",ye,[m(n,{modelValue:f(x).ruleForm.site_id,"onUpdate:modelValue":l[18]||(l[18]=e=>f(x).ruleForm.site_id=e),label:1},{default:p((()=>[ge])),_:1},8,["modelValue"]),m(n,{modelValue:f(x).ruleForm.site_id,"onUpdate:modelValue":l[19]||(l[19]=e=>f(x).ruleForm.site_id=e),label:2},{default:p((()=>[Fe])),_:1},8,["modelValue"]),m(o,{modelValue:f(x).ruleForm.hour,"onUpdate:modelValue":l[20]||(l[20]=e=>f(x).ruleForm.hour=e),filterable:"",class:"form-one ml-10",clearable:"",placeholder:"",disabled:2!==f(x).ruleForm.site_id},{default:p((()=>[(s(!0),c(b,null,D(f(x).options.site_id,(e=>(s(),C(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])),_:1}),v(" clk_id "),m(t,{label:"Click ID:",prop:"clk_id"},{default:p((()=>[_("div",he,[m(n,{modelValue:f(x).ruleForm.clk_id,"onUpdate:modelValue":l[21]||(l[21]=e=>f(x).ruleForm.clk_id=e),label:1},{default:p((()=>[ke])),_:1},8,["modelValue"]),m(n,{modelValue:f(x).ruleForm.clk_id,"onUpdate:modelValue":l[22]||(l[22]=e=>f(x).ruleForm.clk_id=e),label:2},{default:p((()=>[Ve])),_:1},8,["modelValue"])])])),_:1}),v(" site_clk_id "),v(' <el-form-item label="Site Click ID:" prop="site_clk_id">\n          <div class=\'flex jc-start form-one jc-start radio-box\'>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>\n          </div>\n        </el-form-item> '),v(" category "),v(' <el-form-item label="Category:" prop="category_id">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.category_id" clearable placeholder="">\n            <el-option\n              v-for="(value, key) in handleOptionsCategory"\n              :key="key"\n              :label="value"\n              :value="key">\n            </el-option>\n          </el-select>\n        </el-form-item> '),v(" campaign_id "),m(t,{label:"Campaign ID:",prop:"campaign_id"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.campaign_id,"onUpdate:modelValue":l[23]||(l[23]=e=>f(x).ruleForm.campaign_id=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),v(" note "),m(t,{label:"Note:",prop:"note"},{default:p((()=>[m(u,{modelValue:f(x).ruleForm.note,"onUpdate:modelValue":l[24]||(l[24]=e=>f(x).ruleForm.note=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),v(" form "),v(" footer "),_("div",xe,[m(i,{type:"primary",onClick:M},{default:p((()=>[we])),_:1})]),v(" footer "),v(" dialog "),v(" device "),m(g,{modelValue:f(x).dialogVisibleDevice,"onUpdate:modelValue":l[27]||(l[27]=e=>f(x).dialogVisibleDevice=e),title:"Device",width:"90%"},{default:p((()=>[f(x).dialogVisibleDevice?(s(),C(S,{key:0,all:f(r).cacheDevice.all,"onUpdate:all":l[25]||(l[25]=e=>f(r).cacheDevice.all=e),select:f(r).cacheDevice.select,"onUpdate:select":l[26]||(l[26]=e=>f(r).cacheDevice.select=e),onKk:T},null,8,["all","select"])):v("v-if",!0),_("span",De,[v(' <el-button @click="cancleDevice">取 消</el-button> '),m(i,{type:"primary",onClick:K},{default:p((()=>[Ce])),_:1})])])),_:1},8,["modelValue"]),v(" site "),m(g,{modelValue:f(x).dialogVisibleSite,"onUpdate:modelValue":l[28]||(l[28]=e=>f(x).dialogVisibleSite=e),title:"diy_siteid",width:"90%"},{default:p((()=>[m(f(H),{msg:f(x).siteData,onKk:J},null,8,["msg"])])),_:1},8,["modelValue"])])}}});export{je as default};
