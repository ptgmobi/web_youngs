import{d as e,r as l,L as r,q as t,o as a,c as o,e as i,s as u,v as n,f as d,x as s,z as m,N as c,a as p,h as _,w as f,I as b,a1 as v,A as g,y,O as F,K as k,g as h}from"./main-ce43ffdd.js";import{d as V,e as x,f as w,g as C,h as S}from"./buzz-a744532d.js";import{m as U}from"./message-1c1d9ef1.js";const D={class:"dialog-footer mt-10"},q=e({__name:"site",props:{msg:{require:!0,default:()=>"",type:Array}},emits:["kk","up"],setup(e,{emit:p}){const _="此项必填";const f=e=>{let l=new RegExp(/\n+/),r=new RegExp(/[\S]+/),t=e.split(l),a=!0,o=[];return t.forEach(((e,l)=>{if(e&&r.test(e)){let l=e.trim().split(/\s+/);if(2===l.length){let e={diy_siteid:l[0],weight:l[1]};o.push(e)}else a=!1}else a=!1})),a?o:[]};let b=l({siteData:e.msg,siteRules:{site:[{required:!0,validator:(e,l,r)=>{if(""!==l){const e=f(l);r(e?void 0:new Error("格式错误！"))}else r(new Error(_))},trigger:"blur"}]},siteRuleForm:{site:""}});const v=()=>{b.siteData=[...f(b.siteRuleForm.site)]},g=()=>{b.siteData=[]},y=()=>{p("kk",b.siteData)};return r((()=>{})),(e,l)=>{const r=t("el-input"),p=t("el-form-item"),_=t("el-button"),f=t("el-form"),F=t("el-table-column"),k=t("el-table");return a(),o(c,null,[i(f,{ref:"siteRuleForm",enctype:"multipart/form-data",rules:n(b).siteRules,model:n(b).siteRuleForm,"label-position":"right"},{default:u((()=>[i(p,{label:"diy_siteid:",prop:"site"},{default:u((()=>[i(r,{modelValue:n(b).siteRuleForm.site,"onUpdate:modelValue":l[0]||(l[0]=e=>n(b).siteRuleForm.site=e),class:"w100",type:"textarea",rows:4,placeholder:""},null,8,["modelValue"])])),_:1}),i(p,null,{default:u((()=>[i(_,{type:"primary",onClick:v},{default:u((()=>[d(" 添加 ")])),_:1})])),_:1})])),_:1},8,["rules","model"]),i(k,{data:n(b).siteData},{default:u((()=>[i(F,{align:"center",property:"diy_siteid",label:"diy_siteid"}),i(F,{align:"center",property:"weight",label:"权重"}),i(F,{align:"center",label:"操作"},{default:u((e=>[i(_,{type:"danger",onClick:l=>{return e.row,r=e.$index,void b.siteData.splice(r,1);var r}},{default:u((()=>[d(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),s("span",D,[m(' <el-button @click="cancleDevice">取 消</el-button> '),i(_,{type:"primary",onClick:g},{default:u((()=>[d("清 空")])),_:1}),i(_,{type:"primary",onClick:y},{default:u((()=>[d("确 定")])),_:1})])],64)}}}),j={class:"content-con flex column"},E={class:"flex jc-start form-one radio-box"},R=["textContent"],z={class:"form-one flex jc-start"},A={class:"form-one"},N={class:"flex jc-start"},O=["textContent"],I=s("span",null,"-",-1),M=["textContent"],L=s("span",null,"总设备数:",-1),P=["textContent"],$=s("span",null,"选中设备数:",-1),T=["textContent"],H={class:"flex jc-start form-one"},J={class:"flex form-one jc-start radio-box"},K={class:"flex jc-start form-one jc-start radio-box"},B={class:"w100 flex"},G=e({__name:"details",setup(e){let{proxy:D}=h();const G=p(),Q="此项必填";let W=(e,l,r)=>{"AppsFlyer"===ee.ruleForm.attribute_provider?ee.ruleForm.tracking_link.includes(ee.ruleForm.pkg_name)?r(void 0):r(new Error("Attribute Provider:为Appsflyer时Package Name的值必须包含在Traking Link中")):r(void 0)},X=_(""),Y=_(0),Z=_([0,100]),ee=l({dialogVisible:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica","Lazada","Other"],time:[-1,...[...new Array(24)].map(((e,l)=>l))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:"",max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:void 0,cutoff_end:void 0,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",note:""},rules:{channel:[{required:!0,message:Q,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:Q,trigger:["blur","change"]}],title:[{required:!0,message:Q,trigger:["blur","change"]}],tracking_link:[{required:!0,message:Q,trigger:["blur","change"]},{validator:(e,l,r)=>{new RegExp("\\s+","g").test(l)?r(new Error("链接中有空格")):r(void 0),r(void 0)}},{validator:(e,l,r)=>{/^http/.test(l)?r(void 0):r(new Error("必须为有效链接")),r(void 0)}},{validator:(e,l,r)=>{if("AppsFlyer"===ee.ruleForm.attribute_provider){["af_sub_siteid","af_installpostback"].map((e=>{l.includes(e)&&r(new Error(`链接有错误，不能包含${e}`))}))}else"Adjust"===ee.ruleForm.attribute_provider&&(l.includes("install_callback")||l.includes("event_callback")?r(new Error("链接里不可以包含install_callback和event_callback")):r(void 0));r(void 0)}},{validator:W}],pkg_name:[{required:!0,message:Q,trigger:["blur","change"]},{validator:W}],conversion_flow:[{required:!0,message:Q,trigger:["blur","change"]}],event_name:[{required:!0,message:Q,trigger:["blur","change"]},{validator:(e,l,r)=>{1==ee.ruleForm.conversion_flow?r(void 0):r(l?void 0:new Error(Q))}}],payout:[{required:!0,message:Q,trigger:["blur","change"]}],platform:[{required:!0,message:Q,trigger:["blur","change"]}],country:[{required:!0,message:Q,trigger:["blur","change"]}],max_clk_num:[{required:!0,message:Q,trigger:["blur","change"]}],device:[{required:!0,validator:(e,l,r)=>{r(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,l,r)=>{l?"1"===l.toString()||ee.ruleForm.hour?r(void 0):r(new Error("请选择具体数值")):r(new Error(Q))},trigger:["blur","change"]}],clk_id:[{required:!0,message:Q,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===ee.ruleForm.end_hour?r(new Error(Q)):r(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===ee.ruleForm.start_hour?r(new Error(Q)):r(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const le=()=>{ee.dialogVisibleSite=!0;const e=ee.ruleForm.diy_siteid?JSON.parse(ee.ruleForm.diy_siteid):[];ee.siteData=e},re=()=>{te("ruleForm")},te=e=>{D.$refs[e].validate((e=>{if(!e)return!1;ae()}))},ae=async()=>{let e;ee.ruleForm;let l={...ee.ruleForm};l.clk_id=parseFloat(l.clk_id),l.conversion_flow=parseFloat(l.conversion_flow),l.cutoff_end=parseFloat(l.cutoff_end),l.cutoff_start=parseFloat(l.cutoff_start),l.end_hour=parseFloat(l.end_hour),l.start_hour=parseFloat(l.start_hour),l.hour=parseFloat(l.hour),l.max_clk_num=parseFloat(l.max_clk_num),l.payout=parseFloat(l.payout),l.platform=parseFloat(l.platform),l.site_clk_id=parseFloat(l.site_clk_id),l.site_clk_limit=parseFloat(l.site_clk_limit),l.site_id=parseFloat(l.site_id),l.site_install_limitation=parseFloat(l.site_install_limitation),l.diy_siteid=JSON.stringify(l.diy_siteid),l.device=JSON.stringify(l.device),"buzz-create"===X.value&&(delete l.id,delete l.offer_id,e=await V(l)),"buzz-edit"===X.value&&(e=await x(l)),U(e)&&D.$router.push({path:"/buzz/list"})},oe=e=>{ee.ruleForm.diy_siteid=e,ee.dialogVisibleSite=!1};f(Z,((e,l)=>{(e=>{ee.ruleForm.cutoff_start=e[0]/100,ee.ruleForm.cutoff_end=e[1]/100})(e)}),{immediate:!0});const ie=b((()=>{const e=Y.value,l=ee.ruleForm.cutoff_start,r=ee.ruleForm.cutoff_end;return{judge:((Number(r)-Number(l))*Number(e)).toFixed(0),all:Number(e).toFixed(0)}})),ue=async e=>{const l=await S(e),{data:r}=l;return 0!==r.length?r.findLast((e=>e)).device_num:0};v((()=>{(async()=>{const e=ee.ruleForm.pkg_name,l=ee.ruleForm.country,r=ee.ruleForm.platform,t={pkg_name:e,country:l,platform:r};if(e&&l&&r){const e=await ue(t);Y.value=e}})()}));const ne=async()=>{const e=G.currentRoute.value.params.id,l=await C(e.toString()),{data:r}=l;ee.ruleForm=((e,l)=>{let r={};"2"===l.type&&(r.id=e.id,r.offer_id=e.offer_id),r={...e,...l};let t=null===e.diy_siteid||""===e.diy_siteid?[]:e.diy_siteid;return ee.siteData=t,r})(r,{type:ee.ruleForm.type,isCopy:!1});let t=ee.ruleForm.cutoff_start?100*Number(ee.ruleForm.cutoff_start):0,a=ee.ruleForm.cutoff_end?100*Number(ee.ruleForm.cutoff_end):100;Z.value=[t,a]};return r((()=>{(async()=>{const e=await w();if(e){const{data:l}=e;return ee.options.channel=Object.values(l.channel),ee.options.country=Object.values(l.country),"获取配置成功"}})(),X.value=G.currentRoute.value.name,X.value,"buzz-create"===X.value&&(ee.ruleForm.operation_type="1",ee.ruleForm.type="1"),"buzz-edit"===X.value&&(ee.ruleForm.operation_type="2",ee.ruleForm.type="2",ne())})),(e,l)=>{const r=t("el-form-item"),p=t("el-option"),_=t("el-select"),f=t("el-input"),b=t("el-radio"),v=t("el-slider"),h=t("el-button"),V=t("el-form"),x=t("el-dialog");return a(),o("div",null,[m(" form "),i(V,{ref:"ruleForm",enctype:"multipart/form-data",rules:n(ee).rules,model:n(ee).ruleForm,"label-width":"240px","label-position":"right"},{default:u((()=>[s("div",j,[m(" offer_id "),"2"===n(ee).type?(a(),g(r,{key:0,label:"Offer ID:",prop:"offer_id"},{default:u((()=>[s("div",E,[s("span",{textContent:y(n(ee).ruleForm.offer_id)},null,8,R)])])),_:1})):m("v-if",!0),m(" channel "),i(r,{label:"Channel:",prop:"channel"},{default:u((()=>[i(_,{modelValue:n(ee).ruleForm.channel,"onUpdate:modelValue":l[0]||(l[0]=e=>n(ee).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:u((()=>[(a(!0),o(c,null,F(n(ee).options.channel,(e=>(a(),g(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(" copy_offer "),m(' <el-form-item label="Copy Offer:" prop="copy_offer">\n          <el-input class=\'form-one copy-btn search-input\' placeholder="" v-model.trim="data.ruleForm.copy_offer">\n            <el-button type="primary" slot="append" icon="Search" @click=\'copyFun\'></el-button>\n          </el-input>\n        </el-form-item> '),m(" attribute_provider "),i(r,{label:"Attribute Provider:",prop:"attribute_provider"},{default:u((()=>[i(_,{modelValue:n(ee).ruleForm.attribute_provider,"onUpdate:modelValue":l[1]||(l[1]=e=>n(ee).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:u((()=>[(a(!0),o(c,null,F(n(ee).options.attribute_provider,(e=>(a(),g(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(" title "),i(r,{label:"Offer Title:",prop:"title"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.title,"onUpdate:modelValue":l[2]||(l[2]=e=>n(ee).ruleForm.title=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),m(" tracking_link "),m(" 此处需要去除空格和制表符 "),i(r,{class:"mb-30",label:"Traking Link:",prop:"tracking_link"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.tracking_link,"onUpdate:modelValue":l[3]||(l[3]=e=>n(ee).ruleForm.tracking_link=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),m(" pkg_name "),i(r,{label:"Package Name:",prop:"pkg_name"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.pkg_name,"onUpdate:modelValue":l[4]||(l[4]=e=>n(ee).ruleForm.pkg_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),m(" conversion_flow_type "),i(r,{label:"Conversion Flow:",prop:"conversion_flow"},{default:u((()=>[s("div",z,[i(b,{modelValue:n(ee).ruleForm.conversion_flow,"onUpdate:modelValue":l[5]||(l[5]=e=>n(ee).ruleForm.conversion_flow=e),label:1},{default:u((()=>[d(" CPI ")])),_:1},8,["modelValue"]),i(b,{modelValue:n(ee).ruleForm.conversion_flow,"onUpdate:modelValue":l[6]||(l[6]=e=>n(ee).ruleForm.conversion_flow=e),label:2},{default:u((()=>[d(" CPA ")])),_:1},8,["modelValue"])])])),_:1}),m(" conversion_flow "),2==n(ee).ruleForm.conversion_flow?(a(),g(r,{key:1,label:"Event Name:",prop:"event_name"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.event_name,"onUpdate:modelValue":l[7]||(l[7]=e=>n(ee).ruleForm.event_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})):m("v-if",!0),m(" payout "),i(r,{label:"Payout($):",prop:"payout"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.payout,"onUpdate:modelValue":l[8]||(l[8]=e=>n(ee).ruleForm.payout=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),m(" platform "),i(r,{label:"Select Platform:",prop:"platform"},{default:u((()=>[i(_,{modelValue:n(ee).ruleForm.platform,"onUpdate:modelValue":l[9]||(l[9]=e=>n(ee).ruleForm.platform=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:u((()=>[(a(!0),o(c,null,F(n(ee).options.platform,(e=>(a(),g(p,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(" country "),i(r,{label:"Targeting Countries:",prop:"country"},{default:u((()=>[i(_,{modelValue:n(ee).ruleForm.country,"onUpdate:modelValue":l[10]||(l[10]=e=>n(ee).ruleForm.country=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:u((()=>[(a(!0),o(c,null,F(n(ee).options.country,(e=>(a(),g(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(" max_clk_num "),i(r,{label:"Click Limitation(w):",prop:"max_clk_num"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.max_clk_num,"onUpdate:modelValue":l[11]||(l[11]=e=>n(ee).ruleForm.max_clk_num=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),m(" Site Click Limitation "),i(r,{label:"Site Click Limitation:",prop:"site_clk_limit"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.site_clk_limit,"onUpdate:modelValue":l[12]||(l[12]=e=>n(ee).ruleForm.site_clk_limit=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),m(" start_hour "),i(r,{label:"Start Hour:",prop:"start_hour"},{default:u((()=>[i(_,{modelValue:n(ee).ruleForm.start_hour,"onUpdate:modelValue":l[13]||(l[13]=e=>n(ee).ruleForm.start_hour=e),filterable:"",class:"form-one",placeholder:""},{default:u((()=>[(a(!0),o(c,null,F(n(ee).options.time,(e=>(a(),g(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(" end_hour "),i(r,{label:"End Hour:",prop:"end_hour"},{default:u((()=>[i(_,{modelValue:n(ee).ruleForm.end_hour,"onUpdate:modelValue":l[14]||(l[14]=e=>n(ee).ruleForm.end_hour=e),filterable:"",class:"form-one",placeholder:""},{default:u((()=>[(a(!0),o(c,null,F(n(ee).options.time,(e=>(a(),g(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(" site_install_limitation"),m(' <el-form-item label="Site Install Limitation:" prop="site_install_limitation">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">\n            <el-option\n              v-for="item in 6"\n              :key="item"\n              :label="item - 1"\n              :value="item - 1">\n            </el-option>\n          </el-select>\n        </el-form-item> '),m(" Device Cutoff "),i(r,{label:"Device Cutoff:",prop:"cutoff_start"},{default:u((()=>[s("div",A,[s("div",N,[s("span",{textContent:y((100*n(ee).ruleForm.cutoff_start).toFixed(0))},null,8,O),d(" % "),I,s("span",{textContent:y((100*n(ee).ruleForm.cutoff_end).toFixed(0))},null,8,M),d(" % （ "),L,s("span",{textContent:y(n(ie).all)},null,8,P),d(" ） （ "),$,s("span",{textContent:y(n(ie).judge)},null,8,T),d(" ） ")]),i(v,{modelValue:n(Z),"onUpdate:modelValue":l[15]||(l[15]=e=>k(Z)?Z.value=e:Z=e),class:"device-cutoff",range:"",step:5,"show-stops":!0,"show-input":"",min:0,max:100},null,8,["modelValue"])])])),_:1}),m(" diy_siteid "),i(r,{label:"Diy SiteID:",prop:"site"},{default:u((()=>[s("div",H,[i(h,{class:"cp ml-10",type:"primary",icon:"Setting",circle:"",onClick:le})])])),_:1}),m(" site_id "),i(r,{label:"Site ID:",prop:"site_id"},{default:u((()=>[s("div",J,[i(b,{modelValue:n(ee).ruleForm.site_id,"onUpdate:modelValue":l[16]||(l[16]=e=>n(ee).ruleForm.site_id=e),label:1},{default:u((()=>[d(" Slot_ID ")])),_:1},8,["modelValue"]),i(b,{modelValue:n(ee).ruleForm.site_id,"onUpdate:modelValue":l[17]||(l[17]=e=>n(ee).ruleForm.site_id=e),label:2},{default:u((()=>[d(" Update(Hours) ")])),_:1},8,["modelValue"]),i(_,{modelValue:n(ee).ruleForm.hour,"onUpdate:modelValue":l[18]||(l[18]=e=>n(ee).ruleForm.hour=e),filterable:"",class:"form-one ml-10",clearable:"",placeholder:"",disabled:2!==n(ee).ruleForm.site_id},{default:u((()=>[(a(!0),o(c,null,F(n(ee).options.site_id,(e=>(a(),g(p,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])),_:1}),m(" clk_id "),i(r,{label:"Click ID:",prop:"clk_id"},{default:u((()=>[s("div",K,[i(b,{modelValue:n(ee).ruleForm.clk_id,"onUpdate:modelValue":l[19]||(l[19]=e=>n(ee).ruleForm.clk_id=e),label:1},{default:u((()=>[d(" Real ")])),_:1},8,["modelValue"]),i(b,{modelValue:n(ee).ruleForm.clk_id,"onUpdate:modelValue":l[20]||(l[20]=e=>n(ee).ruleForm.clk_id=e),label:2},{default:u((()=>[d(" Virtual ")])),_:1},8,["modelValue"])])])),_:1}),m(" site_clk_id "),m(' <el-form-item label="Site Click ID:" prop="site_clk_id">\n          <div class=\'flex jc-start form-one jc-start radio-box\'>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>\n          </div>\n        </el-form-item> '),m(" category "),m(' <el-form-item label="Category:" prop="category_id">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.category_id" clearable placeholder="">\n            <el-option\n              v-for="(value, key) in handleOptionsCategory"\n              :key="key"\n              :label="value"\n              :value="key">\n            </el-option>\n          </el-select>\n        </el-form-item> '),m(" campaign_id "),i(r,{label:"Campaign ID:",prop:"campaign_id"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.campaign_id,"onUpdate:modelValue":l[21]||(l[21]=e=>n(ee).ruleForm.campaign_id=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),m(" note "),i(r,{label:"Note:",prop:"note"},{default:u((()=>[i(f,{modelValue:n(ee).ruleForm.note,"onUpdate:modelValue":l[22]||(l[22]=e=>n(ee).ruleForm.note=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),m(" form "),m(" footer "),s("div",B,[i(h,{type:"primary",onClick:re},{default:u((()=>[d(" Save ")])),_:1})]),m(" footer "),i(x,{modelValue:n(ee).dialogVisibleSite,"onUpdate:modelValue":l[23]||(l[23]=e=>n(ee).dialogVisibleSite=e),title:"diy_siteid"},{default:u((()=>[i(n(q),{msg:n(ee).siteData,onKk:oe},null,8,["msg"])])),_:1},8,["modelValue"])])}}});export{G as default};