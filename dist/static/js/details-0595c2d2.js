var e=Object.defineProperty,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(l,r,a)=>r in l?e(l,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[r]=a,t=(e,t)=>{for(var d in t||(t={}))r.call(t,d)&&o(e,d,t[d]);if(l)for(var d of l(t))a.call(t,d)&&o(e,d,t[d]);return e};import{d,a as u,r as c,e as i,M as n,m,s as p,n as f,z as s,c as _,p as y,v as b,q as V,A as F,O as v,P as h,b as k,Q as g,x,L as w}from"./index-80455ee7.js";import{c as U}from"./new-format-1254f47d.js";import{m as j}from"./message-f99fef3c.js";import{d as O,e as A,f as N}from"./adnetwork-4aa0be8e.js";const S={class:"content-con flex column"},M={class:"flex jc-start form-one jc-start radio-box"},P=k(" whole traffic "),q=k(" diversity in platform "),D={class:"flex jc-start form-one jc-start radio-box"},C=k(" whole preclick "),J=k(" diversity in platform "),T={class:"flex jc-start form-one jc-start radio-box"},I={class:"flex jc-start form-one jc-start radio-box"},R=k(" app download "),z=k(" 非app download "),G={class:"flex jc-start form-one jc-start radio-box"},E=k(" 代理 "),L=k(" API "),Q=k(" 直客 "),$={class:"flex jc-start form-one jc-start radio-box"},B={class:"w100 flex"},H=k(" Save "),K=d({setup(e){let{proxy:l}=w();const r=u(),a="此项必填";let o=c({types:[{value:"1",label:"no creatives无素材"},{value:"2",label:"pictures图片广告"},{value:"3",label:"原生视频广告"},{value:"4",label:"rewarded video激励视频"},{value:"5",label:"敏感频道"},{value:"6",label:"CPS"},{value:"7",label:"新banner"},{value:"8",label:"新插屏"}]}),d=i(""),K=i(1),W=c({params:"",loading:!0,ruleForm:{name:"",short_name:"",desc:"",traffic_type:1,traffic_rate:{all:"100",ios:"100",android:"100"},pre_click_type:1,pre_click_rate:{all:"100",ios:"100",android:"100"},types:[],channel_content:1,channel_type:"1",fenix_connected:1,adv_id:"",group:""},rules:{name:[{required:!0,message:a,trigger:["blur","change"]}],short_name:[{required:!0,message:a,trigger:["blur","change"]}],desc:[{required:!0,message:a,trigger:["blur","change"]}],traffic_type:[{required:!0,message:a,trigger:["blur","change"]}],pre_click_type:[{required:!0,message:a,trigger:["blur","change"]}],types:[{required:!0,message:a,trigger:["blur","change"]}],channel_content:[{required:!0,message:a,trigger:["blur","change"]}],channel_type:[{required:!0,message:a,trigger:["blur","change"]}],fenix_connected:[{required:!0,message:a,trigger:["blur","change"]}]},siteData:[]});const X=()=>{Y("ruleForm")},Y=e=>{l.$refs[e].validate((e=>{if(!e)return!1;ee()}))},Z=["traffic_type","pre_click_type","fenix_connected","channel_content"],ee=async()=>{let e;W.ruleForm;let l=t({},g(W.ruleForm));l=U(Z,l),1===l.traffic_type&&(delete l.traffic_rate.ios,delete l.traffic_rate.android),2===l.traffic_type&&delete l.traffic_rate.all,1===l.pre_click_type&&(delete l.pre_click_rate.ios,delete l.pre_click_rate.android),2===l.pre_click_type&&delete l.pre_click_rate.all,l.traffic_rate=JSON.stringify(l.traffic_rate),l.pre_click_rate=JSON.stringify(l.pre_click_rate),K.value,1===K.value&&(delete l.id,delete l.offer_id,e=await O(l)),2===K.value&&(e=await A(l)),j(e)&&window.close()};return n((()=>{if(d.value=r.currentRoute.value.name,d.value,"ad-network-create"===d.value&&(K.value=1),"ad-network-edit"===d.value){K.value=2;const e=r.currentRoute.value.params.id;(async e=>{const l=await N(e);let{data:r}=l;try{r.traffic_rate=JSON.parse(r.traffic_rate),r.pre_click_rate=JSON.parse(r.pre_click_rate),r.types=r.type?JSON.parse(r.type):[]}catch(a){}W.ruleForm=t({},r)})(e)}})),(e,l)=>{const r=m("el-input"),a=m("el-form-item"),t=m("el-radio"),d=m("el-checkbox"),u=m("el-checkbox-group"),c=m("el-switch"),i=m("el-form"),n=m("el-button");return p(),f("div",null,[s(" form "),_(i,{ref:"ruleForm",enctype:"multipart/form-data",rules:V(W).rules,model:V(W).ruleForm,"label-width":"240px","label-position":"right"},{default:y((()=>[b("div",S,[s(" AD Network Name "),_(a,{label:"AD Network Name:",prop:"name"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.name,"onUpdate:modelValue":l[0]||(l[0]=e=>V(W).ruleForm.name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),s(" AD Network Short Name "),_(a,{label:"AD Network Short Name:",prop:"short_name"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.short_name,"onUpdate:modelValue":l[1]||(l[1]=e=>V(W).ruleForm.short_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),s(" AD Network Description "),_(a,{class:"mb-30",label:"AD Network Description:",prop:"desc"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.desc,"onUpdate:modelValue":l[2]||(l[2]=e=>V(W).ruleForm.desc=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),s(" Percent Of Traffic "),_(a,{label:"Percent Of Traffic:",prop:"traffic_type"},{default:y((()=>[b("div",M,[_(t,{modelValue:V(W).ruleForm.traffic_type,"onUpdate:modelValue":l[3]||(l[3]=e=>V(W).ruleForm.traffic_type=e),label:1},{default:y((()=>[P])),_:1},8,["modelValue"]),_(t,{modelValue:V(W).ruleForm.traffic_type,"onUpdate:modelValue":l[4]||(l[4]=e=>V(W).ruleForm.traffic_type=e),label:2},{default:y((()=>[q])),_:1},8,["modelValue"])])])),_:1}),s(" All "),1==V(W).ruleForm.traffic_type?(p(),F(a,{key:0,label:"all(%)",prop:"traffic_rate.all"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.traffic_rate.all,"onUpdate:modelValue":l[5]||(l[5]=e=>V(W).ruleForm.traffic_rate.all=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):s("v-if",!0),s(" iOS "),2==V(W).ruleForm.traffic_type?(p(),F(a,{key:1,label:"iOS(%):",prop:"traffic_rate.ios"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.traffic_rate.ios,"onUpdate:modelValue":l[6]||(l[6]=e=>V(W).ruleForm.traffic_rate.ios=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):s("v-if",!0),s(" Android "),2==V(W).ruleForm.traffic_type?(p(),F(a,{key:2,label:"Android(%):",prop:"traffic_rate.android"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.traffic_rate.android,"onUpdate:modelValue":l[7]||(l[7]=e=>V(W).ruleForm.traffic_rate.android=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):s("v-if",!0),s(" Percent Of Preclick "),_(a,{label:"Percent Of Preclick:",prop:"pre_click_type"},{default:y((()=>[b("div",D,[_(t,{modelValue:V(W).ruleForm.pre_click_type,"onUpdate:modelValue":l[8]||(l[8]=e=>V(W).ruleForm.pre_click_type=e),label:1},{default:y((()=>[C])),_:1},8,["modelValue"]),_(t,{modelValue:V(W).ruleForm.pre_click_type,"onUpdate:modelValue":l[9]||(l[9]=e=>V(W).ruleForm.pre_click_type=e),label:2},{default:y((()=>[J])),_:1},8,["modelValue"])])])),_:1}),s(" All "),1==V(W).ruleForm.pre_click_type?(p(),F(a,{key:3,label:"all(%)",prop:"pre_click_rate.all"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.pre_click_rate.all,"onUpdate:modelValue":l[10]||(l[10]=e=>V(W).ruleForm.pre_click_rate.all=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):s("v-if",!0),s(" iOS "),2==V(W).ruleForm.pre_click_type?(p(),F(a,{key:4,label:"iOS(%):",prop:"pre_click_rate.ios"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.pre_click_rate.ios,"onUpdate:modelValue":l[11]||(l[11]=e=>V(W).ruleForm.pre_click_rate.ios=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):s("v-if",!0),s(" Android "),2==V(W).ruleForm.pre_click_type?(p(),F(a,{key:5,label:"Android(%):",prop:"pre_click_rate.android"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.pre_click_rate.android,"onUpdate:modelValue":l[12]||(l[12]=e=>V(W).ruleForm.pre_click_rate.android=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):s("v-if",!0),s(" type "),_(a,{label:"Type",prop:"type"},{default:y((()=>[b("div",T,[_(u,{modelValue:V(W).ruleForm.types,"onUpdate:modelValue":l[13]||(l[13]=e=>V(W).ruleForm.types=e)},{default:y((()=>[(p(!0),f(v,null,h(V(o).types,(e=>(p(),F(d,{key:e.value,label:e.value,disabled:e.require},{default:y((()=>[k(x(e.label),1)])),_:2},1032,["label","disabled"])))),128))])),_:1},8,["modelValue"])])])),_:1}),s(" 广告类型 "),_(a,{label:"广告类型:",prop:"channel_content"},{default:y((()=>[b("div",I,[_(t,{modelValue:V(W).ruleForm.channel_content,"onUpdate:modelValue":l[14]||(l[14]=e=>V(W).ruleForm.channel_content=e),label:1},{default:y((()=>[R])),_:1},8,["modelValue"]),_(t,{modelValue:V(W).ruleForm.channel_content,"onUpdate:modelValue":l[15]||(l[15]=e=>V(W).ruleForm.channel_content=e),label:2},{default:y((()=>[z])),_:1},8,["modelValue"])])])),_:1}),s(" Channel Type "),_(a,{label:"Channel Type:",prop:"channel_type"},{default:y((()=>[b("div",G,[_(t,{modelValue:V(W).ruleForm.channel_type,"onUpdate:modelValue":l[16]||(l[16]=e=>V(W).ruleForm.channel_type=e),label:"1"},{default:y((()=>[E])),_:1},8,["modelValue"]),_(t,{modelValue:V(W).ruleForm.channel_type,"onUpdate:modelValue":l[17]||(l[17]=e=>V(W).ruleForm.channel_type=e),label:"2"},{default:y((()=>[L])),_:1},8,["modelValue"]),_(t,{modelValue:V(W).ruleForm.channel_type,"onUpdate:modelValue":l[18]||(l[18]=e=>V(W).ruleForm.channel_type=e),label:"3"},{default:y((()=>[Q])),_:1},8,["modelValue"])])])),_:1}),s(" Fenix Connected "),_(a,{label:"Fenix Connected:",prop:"fenix_connected"},{default:y((()=>[b("div",$,[_(c,{modelValue:V(W).ruleForm.fenix_connected,"onUpdate:modelValue":l[19]||(l[19]=e=>V(W).ruleForm.fenix_connected=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),s(" Adv ID "),_(a,{label:"Adv ID:",prop:"adv_id"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.adv_id,"onUpdate:modelValue":l[20]||(l[20]=e=>V(W).ruleForm.adv_id=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),s(" Group "),_(a,{label:"Group:",prop:"group"},{default:y((()=>[_(r,{modelValue:V(W).ruleForm.group,"onUpdate:modelValue":l[21]||(l[21]=e=>V(W).ruleForm.group=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),s(" form "),s(" footer "),b("div",B,[_(n,{type:"primary",onClick:X},{default:y((()=>[H])),_:1})]),s(" footer ")])}}});export{K as default};
