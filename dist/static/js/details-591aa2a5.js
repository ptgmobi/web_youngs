import{d as e,a as l,r as a,h as r,L as o,q as t,c as d,z as u,e as i,s as c,v as m,x as n,P as p,o as s,f,A as _,N as y,O as b,y as V,g as F}from"./main-0a777472.js";import{c as h}from"./new-format-7f959bed.js";import{m as v}from"./message-d6ce123e.js";import{d as k,e as g,f as x}from"./adnetwork-b0e632ed.js";const w={class:"content-con flex column"},U={class:"flex jc-start form-one jc-start radio-box"},j={class:"flex jc-start form-one jc-start radio-box"},A={class:"flex jc-start form-one jc-start radio-box"},N={class:"flex jc-start form-one jc-start radio-box"},O={class:"flex jc-start form-one jc-start radio-box"},S={class:"flex jc-start form-one jc-start radio-box"},q={class:"w100 flex"},D=e({__name:"details",setup(e){let{proxy:D}=F();const M=l(),P="此项必填";let C=a({types:[{value:"1",label:"no creatives无素材"},{value:"2",label:"pictures图片广告"},{value:"3",label:"原生视频广告"},{value:"4",label:"rewarded video激励视频"},{value:"5",label:"敏感频道"},{value:"6",label:"CPS"},{value:"7",label:"新banner"},{value:"8",label:"新插屏"}]}),J=r(""),T=r(1),R=a({params:"",loading:!0,ruleForm:{name:"",short_name:"",desc:"",traffic_type:1,traffic_rate:{all:"100",ios:"100",android:"100"},pre_click_type:1,pre_click_rate:{all:"100",ios:"100",android:"100"},types:[],channel_content:1,channel_type:"1",fenix_connected:1,adv_id:"",group:""},rules:{name:[{required:!0,message:P,trigger:["blur","change"]}],short_name:[{required:!0,message:P,trigger:["blur","change"]}],desc:[{required:!0,message:P,trigger:["blur","change"]}],traffic_type:[{required:!0,message:P,trigger:["blur","change"]}],pre_click_type:[{required:!0,message:P,trigger:["blur","change"]}],types:[{required:!0,message:P,trigger:["blur","change"]}],channel_content:[{required:!0,message:P,trigger:["blur","change"]}],channel_type:[{required:!0,message:P,trigger:["blur","change"]}],fenix_connected:[{required:!0,message:P,trigger:["blur","change"]}]},siteData:[]});const I=()=>{z("ruleForm")},z=e=>{D.$refs[e].validate((e=>{if(!e)return!1;L()}))},G=["traffic_type","pre_click_type","fenix_connected","channel_content"],L=async()=>{let e;R.ruleForm;let l={...p(R.ruleForm)};l=h(G,l),1===l.traffic_type&&(delete l.traffic_rate.ios,delete l.traffic_rate.android),2===l.traffic_type&&delete l.traffic_rate.all,1===l.pre_click_type&&(delete l.pre_click_rate.ios,delete l.pre_click_rate.android),2===l.pre_click_type&&delete l.pre_click_rate.all,l.traffic_rate=JSON.stringify(l.traffic_rate),l.pre_click_rate=JSON.stringify(l.pre_click_rate),T.value,1===T.value&&(delete l.id,delete l.offer_id,e=await k(l)),2===T.value&&(e=await g(l)),v(e)&&window.close()};return o((()=>{if(J.value=M.currentRoute.value.name,J.value,"ad-network-create"===J.value&&(T.value=1),"ad-network-edit"===J.value){T.value=2;const e=M.currentRoute.value.params.id;(async e=>{const l=await x(e);let{data:a}=l;try{a.traffic_rate=JSON.parse(a.traffic_rate),a.pre_click_rate=JSON.parse(a.pre_click_rate),a.types=a.type?JSON.parse(a.type):[]}catch(r){}R.ruleForm={...a}})(e)}})),(e,l)=>{const a=t("el-input"),r=t("el-form-item"),o=t("el-radio"),p=t("el-checkbox"),F=t("el-checkbox-group"),h=t("el-switch"),v=t("el-form"),k=t("el-button");return s(),d("div",null,[u(" form "),i(v,{ref:"ruleForm",enctype:"multipart/form-data",rules:m(R).rules,model:m(R).ruleForm,"label-width":"240px","label-position":"right"},{default:c((()=>[n("div",w,[u(" AD Network Name "),i(r,{label:"AD Network Name:",prop:"name"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.name,"onUpdate:modelValue":l[0]||(l[0]=e=>m(R).ruleForm.name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),u(" AD Network Short Name "),i(r,{label:"AD Network Short Name:",prop:"short_name"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.short_name,"onUpdate:modelValue":l[1]||(l[1]=e=>m(R).ruleForm.short_name=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),u(" AD Network Description "),i(r,{class:"mb-30",label:"AD Network Description:",prop:"desc"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.desc,"onUpdate:modelValue":l[2]||(l[2]=e=>m(R).ruleForm.desc=e),modelModifiers:{trim:!0},class:"form-one",type:"textarea",autosize:{minRows:8,maxRows:80},placeholder:""},null,8,["modelValue"])])),_:1}),u(" Percent Of Traffic "),i(r,{label:"Percent Of Traffic:",prop:"traffic_type"},{default:c((()=>[n("div",U,[i(o,{modelValue:m(R).ruleForm.traffic_type,"onUpdate:modelValue":l[3]||(l[3]=e=>m(R).ruleForm.traffic_type=e),label:1},{default:c((()=>[f(" whole traffic ")])),_:1},8,["modelValue"]),i(o,{modelValue:m(R).ruleForm.traffic_type,"onUpdate:modelValue":l[4]||(l[4]=e=>m(R).ruleForm.traffic_type=e),label:2},{default:c((()=>[f(" diversity in platform ")])),_:1},8,["modelValue"])])])),_:1}),u(" All "),1==m(R).ruleForm.traffic_type?(s(),_(r,{key:0,label:"all(%)",prop:"traffic_rate.all"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.traffic_rate.all,"onUpdate:modelValue":l[5]||(l[5]=e=>m(R).ruleForm.traffic_rate.all=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):u("v-if",!0),u(" iOS "),2==m(R).ruleForm.traffic_type?(s(),_(r,{key:1,label:"iOS(%):",prop:"traffic_rate.ios"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.traffic_rate.ios,"onUpdate:modelValue":l[6]||(l[6]=e=>m(R).ruleForm.traffic_rate.ios=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):u("v-if",!0),u(" Android "),2==m(R).ruleForm.traffic_type?(s(),_(r,{key:2,label:"Android(%):",prop:"traffic_rate.android"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.traffic_rate.android,"onUpdate:modelValue":l[7]||(l[7]=e=>m(R).ruleForm.traffic_rate.android=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):u("v-if",!0),u(" Percent Of Preclick "),i(r,{label:"Percent Of Preclick:",prop:"pre_click_type"},{default:c((()=>[n("div",j,[i(o,{modelValue:m(R).ruleForm.pre_click_type,"onUpdate:modelValue":l[8]||(l[8]=e=>m(R).ruleForm.pre_click_type=e),label:1},{default:c((()=>[f(" whole preclick ")])),_:1},8,["modelValue"]),i(o,{modelValue:m(R).ruleForm.pre_click_type,"onUpdate:modelValue":l[9]||(l[9]=e=>m(R).ruleForm.pre_click_type=e),label:2},{default:c((()=>[f(" diversity in platform ")])),_:1},8,["modelValue"])])])),_:1}),u(" All "),1==m(R).ruleForm.pre_click_type?(s(),_(r,{key:3,label:"all(%)",prop:"pre_click_rate.all"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.pre_click_rate.all,"onUpdate:modelValue":l[10]||(l[10]=e=>m(R).ruleForm.pre_click_rate.all=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):u("v-if",!0),u(" iOS "),2==m(R).ruleForm.pre_click_type?(s(),_(r,{key:4,label:"iOS(%):",prop:"pre_click_rate.ios"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.pre_click_rate.ios,"onUpdate:modelValue":l[11]||(l[11]=e=>m(R).ruleForm.pre_click_rate.ios=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):u("v-if",!0),u(" Android "),2==m(R).ruleForm.pre_click_type?(s(),_(r,{key:5,label:"Android(%):",prop:"pre_click_rate.android"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.pre_click_rate.android,"onUpdate:modelValue":l[12]||(l[12]=e=>m(R).ruleForm.pre_click_rate.android=e),modelModifiers:{trim:!0},class:"form-one",type:"number",placeholder:""},null,8,["modelValue"])])),_:1})):u("v-if",!0),u(" type "),i(r,{label:"Type",prop:"type"},{default:c((()=>[n("div",A,[i(F,{modelValue:m(R).ruleForm.types,"onUpdate:modelValue":l[13]||(l[13]=e=>m(R).ruleForm.types=e)},{default:c((()=>[(s(!0),d(y,null,b(m(C).types,(e=>(s(),_(p,{key:e.value,label:e.value,disabled:e.require},{default:c((()=>[f(V(e.label),1)])),_:2},1032,["label","disabled"])))),128))])),_:1},8,["modelValue"])])])),_:1}),u(" 广告类型 "),i(r,{label:"广告类型:",prop:"channel_content"},{default:c((()=>[n("div",N,[i(o,{modelValue:m(R).ruleForm.channel_content,"onUpdate:modelValue":l[14]||(l[14]=e=>m(R).ruleForm.channel_content=e),label:1},{default:c((()=>[f(" app download ")])),_:1},8,["modelValue"]),i(o,{modelValue:m(R).ruleForm.channel_content,"onUpdate:modelValue":l[15]||(l[15]=e=>m(R).ruleForm.channel_content=e),label:2},{default:c((()=>[f(" 非app download ")])),_:1},8,["modelValue"])])])),_:1}),u(" Channel Type "),i(r,{label:"Channel Type:",prop:"channel_type"},{default:c((()=>[n("div",O,[i(o,{modelValue:m(R).ruleForm.channel_type,"onUpdate:modelValue":l[16]||(l[16]=e=>m(R).ruleForm.channel_type=e),label:"1"},{default:c((()=>[f(" 代理 ")])),_:1},8,["modelValue"]),i(o,{modelValue:m(R).ruleForm.channel_type,"onUpdate:modelValue":l[17]||(l[17]=e=>m(R).ruleForm.channel_type=e),label:"2"},{default:c((()=>[f(" API ")])),_:1},8,["modelValue"]),i(o,{modelValue:m(R).ruleForm.channel_type,"onUpdate:modelValue":l[18]||(l[18]=e=>m(R).ruleForm.channel_type=e),label:"3"},{default:c((()=>[f(" 直客 ")])),_:1},8,["modelValue"])])])),_:1}),u(" Fenix Connected "),i(r,{label:"Fenix Connected:",prop:"fenix_connected"},{default:c((()=>[n("div",S,[i(h,{modelValue:m(R).ruleForm.fenix_connected,"onUpdate:modelValue":l[19]||(l[19]=e=>m(R).ruleForm.fenix_connected=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),u(" Adv ID "),i(r,{label:"Adv ID:",prop:"adv_id"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.adv_id,"onUpdate:modelValue":l[20]||(l[20]=e=>m(R).ruleForm.adv_id=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1}),u(" Group "),i(r,{label:"Group:",prop:"group"},{default:c((()=>[i(a,{modelValue:m(R).ruleForm.group,"onUpdate:modelValue":l[21]||(l[21]=e=>m(R).ruleForm.group=e),modelModifiers:{trim:!0},class:"form-one",type:"text",placeholder:""},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),u(" form "),u(" footer "),n("div",q,[i(k,{type:"primary",onClick:I},{default:c((()=>[f(" Save ")])),_:1})]),u(" footer ")])}}});export{D as default};
