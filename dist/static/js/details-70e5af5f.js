var e=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(l,r,t)=>r in l?e(l,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[r]=t,o=(e,o)=>{for(var i in o||(o={}))r.call(o,i)&&a(e,i,o[i]);if(l)for(var i of l(o))t.call(o,i)&&a(e,i,o[i]);return e};import{d as i,r as u,M as n,m as d,s,n as m,c as p,p as c,q as f,v as _,z as b,O as v,b as g,a as y,e as F,w as k,I as h,a1 as V,A as w,x,P as C,K as S,L as U}from"./index-7354f239.js";import{d as D,e as j,f as q,g as O,h as E}from"./buzz-d9eea62d.js";import{m as R}from"./message-d9ee0957.js";const A=g(" 添加 "),N=g(" 删除 "),P={class:"dialog-footer mt-10"},z=g("清 空"),I=g("确 定"),M=i({props:{msg:{require:!0,default:()=>"",type:Array}},emits:["kk","up"],setup(e,{emit:l}){const r="此项必填";const t=e=>{let l=new RegExp(/\n+/),r=new RegExp(/[\S]+/),t=e.split(l),a=!0,o=[];return t.forEach(((e,l)=>{if(e&&r.test(e)){let l=e.trim().split(/\s+/);if(2===l.length){let e={diy_siteid:l[0],weight:l[1]};o.push(e)}else a=!1}else a=!1})),a?o:[]};let a=u({siteData:e.msg,siteRules:{site:[{required:!0,validator:(e,l,a)=>{if(""!==l){const e=t(l);a(e?void 0:new Error("格式错误！"))}else a(new Error(r))},trigger:"blur"}]},siteRuleForm:{site:""}});const o=()=>{a.siteData=[...t(a.siteRuleForm.site)]},i=()=>{a.siteData=[]},g=()=>{l("kk",a.siteData)};return n((()=>{})),(e,l)=>{const r=d("el-input"),t=d("el-form-item"),u=d("el-button"),n=d("el-form"),y=d("el-table-column"),F=d("el-table");return s(),m(v,null,[p(n,{ref:"siteRuleForm",enctype:"multipart/form-data",rules:f(a).siteRules,model:f(a).siteRuleForm,"label-position":"right"},{default:c((()=>[p(t,{label:"diy_siteid:",prop:"site"},{default:c((()=>[p(r,{modelValue:f(a).siteRuleForm.site,"onUpdate:modelValue":l[0]||(l[0]=e=>f(a).siteRuleForm.site=e),class:"w100",type:"textarea",rows:4,placeholder:""},null,8,["modelValue"])])),_:1}),p(t,null,{default:c((()=>[p(u,{type:"primary",onClick:o},{default:c((()=>[A])),_:1})])),_:1})])),_:1},8,["rules","model"]),p(F,{data:f(a).siteData},{default:c((()=>[p(y,{align:"center",property:"diy_siteid",label:"diy_siteid"}),p(y,{align:"center",property:"weight",label:"权重"}),p(y,{align:"center",label:"操作"},{default:c((e=>[p(u,{type:"danger",onClick:l=>{return e.row,r=e.$index,void a.siteData.splice(r,1);var r}},{default:c((()=>[N])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),_("span",P,[b(' <el-button @click="cancleDevice">取 消</el-button> '),p(u,{type:"primary",onClick:i},{default:c((()=>[z])),_:1}),p(u,{type:"primary",onClick:g},{default:c((()=>[I])),_:1})])],64)}}}),L={class:"content-con flex column"},$={class:"flex jc-start form-one radio-box"},T=["textContent"],H={class:"form-one flex jc-start"},J=g(" CPI "),K=g(" CPA "),B={class:"flex ai-center"},G=["textContent"],Q=g(" % "),W=_("span",null,"-",-1),X=["textContent"],Y=g(" % （ "),Z=_("span",null,"总设备数:",-1),ee=["textContent"],le=g(" ） （ "),re=_("span",null,"选中设备数:",-1),te=["textContent"],ae=g(" ） "),oe={class:"flex jc-start form-one p10 pt-0 pb-0"},ie={class:"flex jc-start form-one"},ue={class:"flex form-one jc-start radio-box"},ne=g(" Slot_ID "),de=g(" Update(Hours) "),se={class:"flex jc-start form-one jc-start radio-box"},me=g(" Real "),pe=g(" Virtual "),ce={class:"w100 flex"},fe=g(" Save "),_e=i({setup(e){let{proxy:l}=U();const r=y(),t="此项必填";let a=(e,l,r)=>{"AppsFlyer"===N.ruleForm.attribute_provider?N.ruleForm.tracking_link.includes(N.ruleForm.pkg_name)?r(void 0):r(new Error("Attribute Provider:为Appsflyer时Package Name的值必须包含在Traking Link中")):r(void 0)},i=F(""),g=F(0),A=F([0,100]),N=u({dialogVisible:!1,dialogVisibleSite:!1,search:{id:"",baseDeviceSelect:{},deviceData:{all:[],select:[],count:0}},type:"1",params:"",loading:!0,options:{channel:[],attribute_provider:["AppsFlyer","Branch","Adjust","Singular","AppMetrica"],time:[-1,...[...new Array(24)].map(((e,l)=>l))],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[],site_id:["0.2","0.4","0.6","1","2","4","8","24","72","168"],category:[],devices:[]},ruleForm:{type:"",id:"",offer_id:void 0,operation_type:"",channel:"",copy_offer:"",attribute_provider:"AppsFlyer",title:"",tracking_link:"",pkg_name:"",conversion_flow:"",event_name:"",payout:void 0,platform:"",country:"",max_clk_num:void 0,site_clk_limit:void 0,site_install_limitation:void 0,start_hour:"-1",end_hour:"-1",device:[],cutoff_start:void 0,cutoff_end:void 0,diy_siteid:"",site_id:"",hour:void 0,clk_id:"",site_clk_id:"",note:""},rules:{channel:[{required:!0,message:t,trigger:["blur","change"]}],attribute_provider:[{required:!0,message:t,trigger:["blur","change"]}],title:[{required:!0,message:t,trigger:["blur","change"]}],tracking_link:[{required:!0,message:t,trigger:["blur","change"]},{validator:(e,l,r)=>{new RegExp("\\s+","g").test(l)?r(new Error("链接中有空格")):r(void 0),r(void 0)}},{validator:(e,l,r)=>{/^http/.test(l)?r(void 0):r(new Error("必须为有效链接")),r(void 0)}},{validator:(e,l,r)=>{if("AppsFlyer"===N.ruleForm.attribute_provider){["af_sub_siteid","af_installpostback"].map((e=>{l.includes(e)&&r(new Error(`链接有错误，不能包含${e}`))}))}r(void 0)}},{validator:a}],pkg_name:[{required:!0,message:t,trigger:["blur","change"]},{validator:a}],conversion_flow:[{required:!0,message:t,trigger:["blur","change"]}],event_name:[{required:!0,message:t,trigger:["blur","change"]},{validator:(e,l,r)=>{"1"===N.ruleForm.conversion_flow?r(void 0):r(l?void 0:new Error(t))}}],payout:[{required:!0,message:t,trigger:["blur","change"]}],platform:[{required:!0,message:t,trigger:["blur","change"]}],country:[{required:!0,message:t,trigger:["blur","change"]}],max_clk_num:[{required:!0,message:t,trigger:["blur","change"]}],device:[{required:!0,validator:(e,l,r)=>{r(void 0)},trigger:["blur","change"]}],site_id:[{required:!0,validator:(e,l,r)=>{l?"1"===l||N.ruleForm.hour?r(void 0):r(new Error("请选择具体数值")):r(new Error(t))},trigger:["blur","change"]}],clk_id:[{required:!0,message:t,trigger:["blur","change"]}],start_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===N.ruleForm.end_hour?r(new Error(t)):r(void 0))},trigger:["blur","change"]}],end_hour:[{required:!1,validator:(e,l,r)=>{""!==l&&(""===N.ruleForm.start_hour?r(new Error(t)):r(void 0))},trigger:["blur","change"]}],cutoff_start:[{required:!0,trigger:["blur","change"]}],cutoff_end:[{required:!0,trigger:["blur","change"]}]},siteData:[]});const P=()=>{N.dialogVisibleSite=!0;const e=N.ruleForm.diy_siteid?JSON.parse(N.ruleForm.diy_siteid):[];N.siteData=e},z=()=>{I("ruleForm")},I=e=>{l.$refs[e].validate((e=>{if(!e)return!1;_e()}))},_e=async()=>{let e;N.ruleForm;let r=o({},N.ruleForm);r.clk_id=parseFloat(r.clk_id),r.conversion_flow=parseFloat(r.conversion_flow),r.cutoff_end=parseFloat(r.cutoff_end),r.cutoff_start=parseFloat(r.cutoff_start),r.end_hour=parseFloat(r.end_hour),r.start_hour=parseFloat(r.start_hour),r.hour=parseFloat(r.hour),r.max_clk_num=parseFloat(r.max_clk_num),r.payout=parseFloat(r.payout),r.platform=parseFloat(r.platform),r.site_clk_id=parseFloat(r.site_clk_id),r.site_clk_limit=parseFloat(r.site_clk_limit),r.site_id=parseFloat(r.site_id),r.site_install_limitation=parseFloat(r.site_install_limitation),r.diy_siteid=JSON.stringify(r.diy_siteid),r.device=JSON.stringify(r.device),"create"===i.value&&(delete r.id,delete r.offer_id,e=await D(r)),"edit"===i.value&&(e=await j(r)),R(e)&&l.$router.push({path:"/adnetwork/buzz"})},be=e=>{N.ruleForm.diy_siteid=e,N.dialogVisibleSite=!1};k(A,((e,l)=>{(e=>{N.ruleForm.cutoff_start=e[0]/100,N.ruleForm.cutoff_end=e[1]/100})(e)}),{immediate:!0});const ve=h((()=>{const e=g.value,l=N.ruleForm.cutoff_start,r=N.ruleForm.cutoff_end;return{judge:((Number(r)-Number(l))*Number(e)).toFixed(0),all:Number(e).toFixed(0)}})),ge=async e=>{const l=await E(e),{data:r}=l;return 0!==r.length?r[0].device_num:0};V((()=>{(async()=>{const e=N.ruleForm.pkg_name,l=N.ruleForm.country,r=N.ruleForm.platform,t={pkg_name:e,country:l,platform:r};if(e&&l&&r){const e=await ge(t);g.value=e}})()}));const ye=async()=>{const e=r.currentRoute.value.params.id,l=await O(e.toString()),{data:t}=l;N.ruleForm=((e,l)=>{let r={};"2"===l.type&&(r.id=e.id,r.offer_id=e.offer_id),r=o(o({},e),l);let t=null===e.diy_siteid||""===e.diy_siteid?[]:e.diy_siteid;return N.siteData=t,r})(t,{type:N.ruleForm.type,isCopy:!1}),A.value=[100*Number(N.ruleForm.cutoff_start),100*Number(N.ruleForm.cutoff_end)]};return n((()=>{(async()=>{const e=await q();if(e){const{data:l}=e;return N.options.channel=Object.values(l.channel),N.options.country=Object.values(l.country),"获取配置成功"}})(),i.value=r.currentRoute.value.name,i.value,"buzz-create"===i.value&&(N.ruleForm.operation_type="1",N.ruleForm.type="1"),"buzz-edit"===i.value&&(N.ruleForm.operation_type="2",N.ruleForm.type="2",ye())})),(e,l)=>{const r=d("el-form-item"),t=d("el-option"),a=d("el-select"),o=d("el-input"),i=d("el-radio"),u=d("el-slider"),n=d("el-button"),g=d("el-form"),y=d("el-dialog");return s(),m("div",null,[b(" form "),p(g,{ref:"ruleForm",enctype:"multipart/form-data",rules:f(N).rules,model:f(N).ruleForm,"label-width":"240px","label-position":"right"},{default:c((()=>[_("div",L,[b(" offer_id "),"2"===f(N).type?(s(),w(r,{key:0,label:"Offer ID:",prop:"offer_id"},{default:c((()=>[_("div",$,[_("span",{textContent:x(f(N).ruleForm.offer_id)},null,8,T)])])),_:1})):b("v-if",!0),b(" channel "),p(r,{label:"Channel:",prop:"channel"},{default:c((()=>[p(a,{modelValue:f(N).ruleForm.channel,"onUpdate:modelValue":l[0]||(l[0]=e=>f(N).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:c((()=>[(s(!0),m(v,null,C(f(N).options.channel,(e=>(s(),w(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(" copy_offer "),b(' <el-form-item label="Copy Offer:" prop="copy_offer">\n          <el-input class=\'form-one copy-btn search-input\' placeholder="" v-model.trim="data.ruleForm.copy_offer">\n            <el-button type="primary" slot="append" icon="Search" @click=\'copyFun\'></el-button>\n          </el-input>\n        </el-form-item> '),b(" attribute_provider "),p(r,{label:"Attribute Provider:",prop:"attribute_provider"},{default:c((()=>[p(a,{modelValue:f(N).ruleForm.attribute_provider,"onUpdate:modelValue":l[1]||(l[1]=e=>f(N).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:c((()=>[(s(!0),m(v,null,C(f(N).options.attribute_provider,(e=>(s(),w(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(" title "),p(r,{label:"Offer Title:",prop:"title"},{default:c((()=>[p(o,{modelValue:f(N).ruleForm.title,"onUpdate:modelValue":l[2]||(l[2]=e=>f(N).ruleForm.title=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),b(" tracking_link "),b(" 此处需要去除空格和制表符 "),p(r,{class:"mb-30",label:"Traking Link:",prop:"tracking_link"},{default:c((()=>[p(o,{modelValue:f(N).ruleForm.tracking_link,"onUpdate:modelValue":l[3]||(l[3]=e=>f(N).ruleForm.tracking_link=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),b(" pkg_name "),p(r,{label:"Package Name:",prop:"pkg_name"},{default:c((()=>[p(o,{modelValue:f(N).ruleForm.pkg_name,"onUpdate:modelValue":l[4]||(l[4]=e=>f(N).ruleForm.pkg_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),b(" conversion_flow_type "),p(r,{label:"Conversion Flow:",prop:"conversion_flow"},{default:c((()=>[_("div",H,[p(i,{modelValue:f(N).ruleForm.conversion_flow,"onUpdate:modelValue":l[5]||(l[5]=e=>f(N).ruleForm.conversion_flow=e),label:1},{default:c((()=>[J])),_:1},8,["modelValue"]),p(i,{modelValue:f(N).ruleForm.conversion_flow,"onUpdate:modelValue":l[6]||(l[6]=e=>f(N).ruleForm.conversion_flow=e),label:2},{default:c((()=>[K])),_:1},8,["modelValue"])])])),_:1}),b(" conversion_flow "),"2"===f(N).ruleForm.conversion_flow?(s(),w(r,{key:1,label:"Event Name:",prop:"event_name"},{default:c((()=>[p(o,{modelValue:f(N).ruleForm.event_name,"onUpdate:modelValue":l[7]||(l[7]=e=>f(N).ruleForm.event_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})):b("v-if",!0),b(" payout "),p(r,{label:"Payout($):",prop:"payout"},{default:c((()=>[p(o,{modelValue:f(N).ruleForm.payout,"onUpdate:modelValue":l[8]||(l[8]=e=>f(N).ruleForm.payout=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),b(" platform "),p(r,{label:"Select Platform:",prop:"platform"},{default:c((()=>[p(a,{modelValue:f(N).ruleForm.platform,"onUpdate:modelValue":l[9]||(l[9]=e=>f(N).ruleForm.platform=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:c((()=>[(s(!0),m(v,null,C(f(N).options.platform,(e=>(s(),w(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(" country "),p(r,{label:"Targeting Countries:",prop:"country"},{default:c((()=>[p(a,{modelValue:f(N).ruleForm.country,"onUpdate:modelValue":l[10]||(l[10]=e=>f(N).ruleForm.country=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:c((()=>[(s(!0),m(v,null,C(f(N).options.country,(e=>(s(),w(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(" max_clk_num "),p(r,{label:"Click Limitation(w):",prop:"max_clk_num"},{default:c((()=>[p(o,{modelValue:f(N).ruleForm.max_clk_num,"onUpdate:modelValue":l[11]||(l[11]=e=>f(N).ruleForm.max_clk_num=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),b(" Site Click Limitation "),p(r,{label:"Site Click Limitation:",prop:"site_clk_limit"},{default:c((()=>[p(o,{modelValue:f(N).ruleForm.site_clk_limit,"onUpdate:modelValue":l[12]||(l[12]=e=>f(N).ruleForm.site_clk_limit=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1}),b(" start_hour "),p(r,{label:"Start Hour:",prop:"start_hour"},{default:c((()=>[p(a,{modelValue:f(N).ruleForm.start_hour,"onUpdate:modelValue":l[13]||(l[13]=e=>f(N).ruleForm.start_hour=e),filterable:"",class:"form-one",placeholder:""},{default:c((()=>[(s(!0),m(v,null,C(f(N).options.time,(e=>(s(),w(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(" end_hour "),p(r,{label:"End Hour:",prop:"end_hour"},{default:c((()=>[p(a,{modelValue:f(N).ruleForm.end_hour,"onUpdate:modelValue":l[14]||(l[14]=e=>f(N).ruleForm.end_hour=e),filterable:"",class:"form-one",placeholder:""},{default:c((()=>[(s(!0),m(v,null,C(f(N).options.time,(e=>(s(),w(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(" site_install_limitation"),b(' <el-form-item label="Site Install Limitation:" prop="site_install_limitation">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.site_install_limitation" clearable placeholder="">\n            <el-option\n              v-for="item in 6"\n              :key="item"\n              :label="item - 1"\n              :value="item - 1">\n            </el-option>\n          </el-select>\n        </el-form-item> '),b(" Device Cutoff "),p(r,{label:"Device Cutoff:",prop:"cutoff_start"},{default:c((()=>[_("div",B,[_("span",{textContent:x(100*f(N).ruleForm.cutoff_start)},null,8,G),Q,W,_("span",{textContent:x(100*f(N).ruleForm.cutoff_end)},null,8,X),Y,Z,_("span",{textContent:x(f(ve).all)},null,8,ee),le,re,_("span",{textContent:x(f(ve).judge)},null,8,te),ae]),_("div",oe,[p(u,{modelValue:f(A),"onUpdate:modelValue":l[15]||(l[15]=e=>S(A)?A.value=e:A=e),class:"w100",range:"",step:5,"show-stops":!0,"show-input":"",min:0,max:100},null,8,["modelValue"])])])),_:1}),b(" diy_siteid "),p(r,{label:"Diy SiteID:",prop:"site"},{default:c((()=>[_("div",ie,[p(n,{class:"cp ml-10",type:"primary",icon:"Setting",circle:"",onClick:P})])])),_:1}),b(" site_id "),p(r,{label:"Site ID:",prop:"site_id"},{default:c((()=>[_("div",ue,[p(i,{modelValue:f(N).ruleForm.site_id,"onUpdate:modelValue":l[16]||(l[16]=e=>f(N).ruleForm.site_id=e),label:1},{default:c((()=>[ne])),_:1},8,["modelValue"]),p(i,{modelValue:f(N).ruleForm.site_id,"onUpdate:modelValue":l[17]||(l[17]=e=>f(N).ruleForm.site_id=e),label:2},{default:c((()=>[de])),_:1},8,["modelValue"]),p(a,{modelValue:f(N).ruleForm.hour,"onUpdate:modelValue":l[18]||(l[18]=e=>f(N).ruleForm.hour=e),filterable:"",class:"form-one ml-10",clearable:"",placeholder:"",disabled:2!==f(N).ruleForm.site_id},{default:c((()=>[(s(!0),m(v,null,C(f(N).options.site_id,(e=>(s(),w(t,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])),_:1}),b(" clk_id "),p(r,{label:"Click ID:",prop:"clk_id"},{default:c((()=>[_("div",se,[p(i,{modelValue:f(N).ruleForm.clk_id,"onUpdate:modelValue":l[19]||(l[19]=e=>f(N).ruleForm.clk_id=e),label:1},{default:c((()=>[me])),_:1},8,["modelValue"]),p(i,{modelValue:f(N).ruleForm.clk_id,"onUpdate:modelValue":l[20]||(l[20]=e=>f(N).ruleForm.clk_id=e),label:2},{default:c((()=>[pe])),_:1},8,["modelValue"])])])),_:1}),b(" site_clk_id "),b(' <el-form-item label="Site Click ID:" prop="site_clk_id">\n          <div class=\'flex jc-start form-one jc-start radio-box\'>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="1">ON</el-radio>\n            <el-radio v-model="data.ruleForm.site_clk_id" :label="2">OFF</el-radio>\n          </div>\n        </el-form-item> '),b(" category "),b(' <el-form-item label="Category:" prop="category_id">\n          <el-select filterable class=\'form-one\' v-model="data.ruleForm.category_id" clearable placeholder="">\n            <el-option\n              v-for="(value, key) in handleOptionsCategory"\n              :key="key"\n              :label="value"\n              :value="key">\n            </el-option>\n          </el-select>\n        </el-form-item> '),b(" note "),p(r,{label:"Note:",prop:"note"},{default:c((()=>[p(o,{modelValue:f(N).ruleForm.note,"onUpdate:modelValue":l[21]||(l[21]=e=>f(N).ruleForm.note=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),b(" form "),b(" footer "),_("div",ce,[p(n,{type:"primary",onClick:z},{default:c((()=>[fe])),_:1})]),b(" footer "),p(y,{modelValue:f(N).dialogVisibleSite,"onUpdate:modelValue":l[22]||(l[22]=e=>f(N).dialogVisibleSite=e),title:"diy_siteid"},{default:c((()=>[p(f(M),{msg:f(N).siteData,onKk:be},null,8,["msg"])])),_:1},8,["modelValue"])])}}});export{_e as default};
