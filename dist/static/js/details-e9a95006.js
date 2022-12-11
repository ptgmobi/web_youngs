import{d as e,r as l,w as a,L as t,q as r,o,c as u,x as i,e as s,s as n,f as d,N as m,O as c,A as _,z as p,v as f,h as v,I as g,_ as b,y as h,K as y,C as F,a as V,P as x,a1 as w,a0 as k,U,a6 as C}from"./main-0a777472.js";import{_ as j}from"./lodash-4786ff9c.js";import{l as q,p as S,q as P,r as A,s as R,t as z,u as O,v as D,w as N,x as T,y as L}from"./fenix-38f35efe.js";import{c as E}from"./clipboard-4e200ba9.js";import{m as I}from"./message-d6ce123e.js";import{b as M,r as $}from"./new-format-7f959bed.js";import{u as K}from"./useUtils-9816d64a.js";import"./clipboard-polyfill.text.esm-fc4f7791.js";const B={class:"flex jc-end"},H={class:"flex"},Z=e({__name:"traffic",props:{list:{require:!0,default:()=>[],type:Array},offer:{require:!0,default:"",type:String}},emits:["kk","up"],setup(e,{emit:v}){const g=e,b=l({pub:[{id:"",pub_name:""}]}),h={55527824:.1,95108831:.1,95846929:.005,59845210:.005};let y=l({manage_traffic:[]});const F={pub:"",slotid:"",payout:void 0,cap_daily:void 0,pub_status:1,pub_tracking_link:""},V=()=>{y.manage_traffic.push(j.cloneDeep(F))};return a((()=>g.list),((e,l)=>{y.manage_traffic=e}),{immediate:!0,deep:!0}),a((()=>y.manage_traffic),((e,l)=>{}),{immediate:!0,deep:!0}),t((()=>{(async()=>{const{data:e}=await q();b.pub=e})(),V()})),(e,l)=>{const a=r("el-button"),t=r("el-option"),v=r("el-select"),F=r("el-table-column"),x=r("el-input"),w=r("el-switch"),k=r("el-table");return o(),u("div",null,[i("div",B,[s(a,{type:"primary",onClick:V},{default:n((()=>[d(" Add ")])),_:1})]),s(k,{class:"mt-10",data:f(y).manage_traffic,style:{width:"100%"},border:""},{default:n((()=>[s(F,{label:"Pub Name",align:"center"},{default:n((e=>[s(v,{modelValue:e.row.pub,"onUpdate:modelValue":l=>e.row.pub=l,filterable:"",clearable:"",placeholder:"",onChange:l=>(e=>{const{row:l}=e,a="http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}";l.pub_tracking_link=a;const t=b.pub.find((e=>e.pub_name===l.pub));l.slotid=t.slot_id,l.pub_status=t.status,l.pub_tracking_link=a.replace("{offer}",g.offer).replace("{slot}",t.slot_id),h[t.slot_id]&&(l.payout=h[t.slot_id])})(e)},{default:n((()=>[(o(!0),u(m,null,c(b.pub,(e=>{var l;return o(),_(t,{key:e.id,label:e.pub_name,value:null!=(l=e.pub_name)?l:e.id},null,8,["label","value"])})),128))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),s(F,{label:"Payout",align:"center"},{default:n((e=>[s(x,{modelValue:e.row.payout,"onUpdate:modelValue":l=>e.row.payout=l,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),s(F,{label:"Cap Daily",align:"center"},{default:n((e=>[s(x,{modelValue:e.row.cap_daily,"onUpdate:modelValue":l=>e.row.cap_daily=l,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),s(F,{label:"Operation",align:"center",width:"180px"},{default:n((e=>[i("div",H,[s(a,{class:"mr-10",type:"danger",icon:"Delete",circle:"",onClick:l=>(e=>{const l=e.$index;y.manage_traffic.splice(l,1)})(e)},null,8,["onClick"]),s(w,{modelValue:e.row.pub_status,"onUpdate:modelValue":l=>e.row.pub_status=l,"active-value":1,"inactive-value":2,class:"mr-10",onChange:e=>{}},null,8,["modelValue","onUpdate:modelValue","onChange"]),e.row.pub_tracking_link?(o(),_(a,{key:0,class:"cp",type:"primary",onClick:l=>(({row:e})=>{const{pub_tracking_link:l}=e;E(l)})(e)},{default:n((()=>[d(" Copy ")])),_:2},1032,["onClick"])):p("v-if",!0)])])),_:1})])),_:1},8,["data"])])}}}),J={class:"w100"},Y={class:"content-con flex column"},G={class:"flex jc-start ai-center form-one"},Q={class:"w100 flex mt-10"},W=e({__name:"siteListCopy",emits:["update:visible","uploadData"],setup(e,{emit:a}){const t=v(),m=/\S/;const c=g((()=>M(_.ruleForm.site_list,1,m).data));let _=l({ruleForm:{site_list:""},rules:{site_list:[{required:!0,message:"必填项",trigger:["blur"]},{validator:(e,l,a)=>{if(""!==l){a(M(l,1,m).type?void 0:new Error("格式错误！"))}else a(new Error("必填项"))},trigger:["blur"]}]}});const b=()=>{a("uploadData",c.value),_.ruleForm.site_list="",a("update:visible",!1)};return(e,l)=>{const a=r("el-input"),m=r("el-form-item"),c=r("el-form"),v=r("el-button");return o(),u("div",J,[s(c,{ref_key:"ruleFormRef",ref:t,enctype:"multipart/form-data",rules:f(_).rules,model:f(_).ruleForm,"label-width":"140px","label-position":"right"},{default:n((()=>[i("div",Y,[p(" Offer "),s(m,{label:"Site:",prop:"site_list"},{default:n((()=>[i("div",G,[s(a,{modelValue:f(_).ruleForm.site_list,"onUpdate:modelValue":l[0]||(l[0]=e=>f(_).ruleForm.site_list=e),rows:4,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" end ")])])),_:1},8,["rules","model"]),i("div",Q,[s(v,{type:"primary",onClick:l[1]||(l[1]=e=>{var l;(l=f(t))&&l.validate((e=>{if(!e)return!1;b()}))})},{default:n((()=>[d("Save")])),_:1})])])}}});const X={class:"w100"},ee={class:"control-box flex jc-between ai-start w100"},le={class:"body-box mt-10"},ae={class:"flex"};var te=b(e({__name:"siteList",props:{msg:{require:!0,default:()=>"",type:String}},emits:["update:msg"],setup(e,{expose:t,emit:m}){const c=e;let _=v(!1);const b=e=>e?e.split(","):[];let F=l({ruleForm:{site_num:0,site_value:b(c.msg)},rules:{}});const V=g((()=>F.ruleForm.site_value));g((()=>F.ruleForm.site_value.length));const x=()=>{if(F.ruleForm.site_num>0){let e=Math.floor(F.ruleForm.site_num);for(let l=0;l<e;l++){const e=$(8);F.ruleForm.site_value.push(e)}}F.ruleForm.site_num=0},w=()=>{_.value=!0},k=()=>{F.ruleForm.site_value=[]},U=e=>{e.map((e=>{F.ruleForm.site_value.push(e[0])}))};a((()=>c.msg),((e,l)=>{F.ruleForm.site_value=b(c.msg)})),a((()=>F.ruleForm.site_value),((e,l)=>{const a=F.ruleForm.site_value.join(",");m("update:msg",a)}),{deep:!0,immediate:!0});return t({addListFn:e=>{k(),F.ruleForm.site_num=e,x();const l=F.ruleForm.site_value.join(",");return m("update:msg",l),l}}),(e,l)=>{const a=r("el-button"),t=r("el-input"),m=r("el-table-column"),c=r("el-table"),v=r("el-dialog");return o(),u("div",X,[p(" 操作 "),i("div",ee,[s(t,{modelValue:f(F).ruleForm.site_num,"onUpdate:modelValue":l[0]||(l[0]=e=>f(F).ruleForm.site_num=e),placeholder:"Please input",type:"number",max:"1000",class:"input-with-select search-con"},{append:n((()=>[s(a,{onClick:x},{default:n((()=>[d("增量生成")])),_:1})])),_:1},8,["modelValue"]),s(a,{class:"cp mb-10",onClick:w,type:"primary"},{default:n((()=>[d("批量上传")])),_:1}),s(a,{class:"cp mb-10",onClick:k,type:"primary"},{default:n((()=>[d("清空")])),_:1})]),p(" table "),i("div",le,[s(c,{data:f(V),class:"w100",height:"400px",border:""},{default:n((()=>[s(m,{label:"site_id",align:"center"},{default:n((e=>[i("div",null,[i("span",null,h(e.row),1)])])),_:1}),s(m,{label:"设置",align:"center"},{default:n((e=>[i("div",ae,[s(a,{type:"danger",icon:"Delete",circle:"",onClick:l=>(e=>{const{$index:l,row:a}=e;F.ruleForm.site_value.splice(l,1)})(e)},null,8,["onClick"])])])),_:1})])),_:1},8,["data"])]),p(" dialog "),s(v,{modelValue:f(_),"onUpdate:modelValue":l[2]||(l[2]=e=>y(_)?_.value=e:_=e),title:"site",width:"60%"},{default:n((()=>[s(W,{visible:f(_),"onUpdate:visible":l[1]||(l[1]=e=>y(_)?_.value=e:_=e),onUploadData:U},null,8,["visible"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-661f6240"]]);const re={class:"content-con flex column"},oe={class:"flex jc-start ai-center form-one"},ue=["textContent"],ie={class:"flex jc-start ai-center form-one"},se=["textContent"],ne={class:"flex jc-start ai-center form-one"},de={class:"ml-10"},me={class:"flex jc-start ai-center form-one"},ce={class:"ml-10"},_e={class:"flex jc-start ai-center form-one"},pe={class:"ml-10"},fe={class:"flex jc-start ai-center form-one"},ve={class:"flex jc-start ai-center form-one"},ge={class:"ml-10"},be={class:"flex jc-start ai-center form-one"},he={class:"flex jc-start ai-center form-one"},ye={class:"flex jc-start ai-center form-one"},Fe={class:"w100 flex"},Ve=e({__name:"site",props:{msg:{require:!0,default:()=>({}),type:Object}},emits:["update:visible","updateData"],setup(e,{expose:t,emit:m}){const c=e;let b=v();const V=v();let x="必填项";const w=(e,l,a)=>{if(l){a(l.split(",").length>1e3?new Error("site value 的值不可大于1000个"):void 0)}else a(void 0)},k=l({offer_id:[{required:!0,message:x,trigger:["blur","change"]}],adv_offer:[{required:!0,message:x,trigger:["blur","change"]}],status_day:[{required:!0,message:x,trigger:["blur","change"]}],day_limit:[{required:!0,message:x,trigger:["blur","change"]},{validator:(e,l,a)=>{if(l){let e=Number(l);Number.isInteger(e)&&Number.isSafeInteger(e)?a(e>5?void 0:new Error("必须为大于5的整数")):a(new Error("必须为整数"))}else a(void 0)},trigger:["blur","change"]}],day_limit_type:[{required:!0,message:x,trigger:["blur","change"]}],day_limit_value:[{required:!0,message:x,trigger:["blur","change"]}],status_hour:[{required:!0,message:x,trigger:["blur","change"]}]}),U=l({site_value_required:[{required:!0,message:x,trigger:["blur","change"]},{validator:w,trigger:["blur","change"]}],site_value_no_required:[{required:!1,message:x,trigger:["blur","change"]},{validator:w,trigger:["blur","change"]}]});let C=l({ruleForm:{offer_id:"",adv_offer:"",channel_type:2,status_day:2,day_limit:15,day_limit_type:1,day_limit_value:"",status_hour:2,site_value:"",site_black_value:""}});const q=g((()=>C.ruleForm.site_value?C.ruleForm.site_value.split(",").length:0)),S=g((()=>"rule_value"===c.msg.site_type));a((()=>c.msg),((e,l)=>{let a=j.cloneDeep(c.msg.fenix_site),t=a.status_day||2,r=a.status_hour||2;2===c.msg.channel_type&&(t=2,r=2),C.ruleForm={offer_id:a.offer_id||c.msg.offer_id,adv_offer:a.adv_offer||c.msg.adv_offer,channel_type:c.msg.channel_type,status_day:t,day_limit:a.day_limit||15,day_limit_type:a.day_limit_type||1,day_limit_value:a.day_limit_value||"",status_hour:r,site_value:c.msg.site_value,site_black_value:c.msg.site_black_value}}),{deep:!0,immediate:!0});const P=()=>{m("updateData",C.ruleForm),m("update:visible",!1)};return t({childRef:v("childRef"),childMethod:e=>(b.value.addListFn(e),C.ruleForm.site_value,m("updateData",C.ruleForm),!0)}),(e,l)=>{const a=r("el-form-item"),t=r("el-switch"),m=r("info-filled"),v=r("el-icon"),g=r("el-tooltip"),x=r("el-input"),w=r("el-radio"),j=r("el-radio-group"),A=r("el-form"),R=r("el-button");return o(),u("div",null,[s(A,{ref_key:"ruleFormRef",ref:V,enctype:"multipart/form-data",rules:f(k),model:f(C).ruleForm,"label-width":"150px","label-position":"right"},{default:n((()=>[i("div",re,[p(" Offer "),s(a,{label:"Offer:",prop:"offer_id"},{default:n((()=>[i("div",oe,[i("span",{textContent:h(f(C).ruleForm.offer_id)},null,8,ue)])])),_:1}),p(" Offer "),s(a,{label:"Adv Offer:",prop:"adv_offer"},{default:n((()=>[i("div",ie,[i("span",{textContent:h(f(C).ruleForm.adv_offer)},null,8,se)])])),_:1}),p(" Offer "),s(a,{label:"分天优选:",prop:"status_day"},{default:n((()=>[i("div",ne,[s(t,{disabled:2==c.msg.channel_type,modelValue:f(C).ruleForm.status_day,"onUpdate:modelValue":l[0]||(l[0]=e=>f(C).ruleForm.status_day=e),"active-value":1,"inactive-value":2},null,8,["disabled","modelValue"]),i("span",de,[s(g,{content:"根据昨天数据筛选符合条件的site_id使用",placement:"right-start"},{default:n((()=>[s(v,null,{default:n((()=>[s(m)])),_:1})])),_:1})])])])),_:1}),s(a,{label:"分天优选启动条件:",prop:"day_limit"},{default:n((()=>[i("div",me,[s(x,{modelValue:f(C).ruleForm.day_limit,"onUpdate:modelValue":l[1]||(l[1]=e=>f(C).ruleForm.day_limit=e),placeholder:"默认值为15",min:"5",step:"1",class:"input-with-select",type:"number"},null,8,["modelValue"]),i("span",ce,[s(g,{content:"当昨天site_id的平均install数大于等于设定值时才启动自动优选，默认设置为15",placement:"bottom"},{default:n((()=>[s(v,null,{default:n((()=>[s(m)])),_:1})])),_:1})])])])),_:1}),s(a,{label:"分天优选install限制:",prop:"day_limit_type"},{default:n((()=>[i("div",_e,[s(j,{class:"flex",modelValue:f(C).ruleForm.day_limit_type,"onUpdate:modelValue":l[2]||(l[2]=e=>f(C).ruleForm.day_limit_type=e)},{default:n((()=>[s(w,{label:1},{default:n((()=>[d("默认")])),_:1}),s(w,{label:2},{default:n((()=>[d("自定义")])),_:1})])),_:1},8,["modelValue"]),i("span",pe,[s(g,{content:"根据site_id的install数筛选，仅使用大于等于设定值的site_id，默认值为昨天均值除以5",placement:"right-start"},{default:n((()=>[s(v,null,{default:n((()=>[s(m)])),_:1})])),_:1})])])])),_:1}),2===f(C).ruleForm.day_limit_type?(o(),_(a,{key:0,label:"分天优选install限制值:",prop:"day_limit_value"},{default:n((()=>[i("div",fe,[s(x,{type:"number",modelValue:f(C).ruleForm.day_limit_value,"onUpdate:modelValue":l[3]||(l[3]=e=>f(C).ruleForm.day_limit_value=e),placeholder:"",class:"input-with-select"},null,8,["modelValue"])])])),_:1})):p("v-if",!0),s(a,{label:"分时优选:",prop:"status_hour"},{default:n((()=>[i("div",ve,[s(t,{disabled:2==c.msg.channel_type,modelValue:f(C).ruleForm.status_hour,"onUpdate:modelValue":l[4]||(l[4]=e=>f(C).ruleForm.status_hour=e),"active-value":1,"inactive-value":2},null,8,["disabled","modelValue"]),i("span",ge,[s(g,{content:"根据前6小时和前2小时数据筛选符合条件的site_id使用，暂不支持自定义",placement:"right-start"},{default:n((()=>[s(v,null,{default:n((()=>[s(m)])),_:1})])),_:1})])])])),_:1}),s(a,{label:"当前渠道数:",prop:"site_value",rules:f(S)?f(U).site_value_required:f(U).site_value_no_required},{default:n((()=>[i("div",be,[s(x,{type:"hidden",modelValue:f(q),"onUpdate:modelValue":l[5]||(l[5]=e=>y(q)?q.value=e:null),disabled:""},null,8,["modelValue"]),d(" "+h(f(q)),1)])])),_:1},8,["rules"]),s(a,{label:"黑名单:",prop:"site_black_value"},{default:n((()=>[i("div",he,[s(x,{type:"textarea",autosize:{minRows:8,maxRows:80},modelValue:f(C).ruleForm.site_black_value,"onUpdate:modelValue":l[6]||(l[6]=e=>f(C).ruleForm.site_black_value=e),placeholder:"请用英文逗号分割",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),s(a,{label:""},{default:n((()=>[i("div",ye,[s(te,{ref_key:"refChildren",ref:b,msg:f(C).ruleForm.site_value,"onUpdate:msg":l[7]||(l[7]=e=>f(C).ruleForm.site_value=e)},null,8,["msg"])])])),_:1}),p(" end ")])])),_:1},8,["rules","model"]),p(" form "),p(" footer "),i("div",Fe,[s(R,{type:"primary",onClick:l[8]||(l[8]=F((e=>{var l;(l=f(V))&&l.validate((e=>{if(!e)return!1;P()}))}),["prevent"]))},{default:n((()=>[d(" 提交 ")])),_:1})])])}}}),xe={class:"content-con flex column"},we={class:"flex jc-start ai-center form-dialog"},ke=["textContent"],Ue={class:"flex jc-start ai-center form-dialog"},Ce=["textContent"],je={class:"w100 flex"},qe=e({__name:"autocvr",props:{msg:{require:!0,default:()=>({}),type:Object}},emits:["update:visible","updateData"],setup(e,{emit:t}){const m=e,{handleAjaxNumberKeyFn:c,handleAjaxArrayKeyFn:_}=K(),b=v();let y="必填项";const V=(e,l,a)=>{a(l&&(l>=1e3||l<=0)?new Error("0-1000"):void 0)},x=l({offer_id:[{required:!0,message:y,trigger:["blur","change"]}],adv_offer:[{required:!0,message:y,trigger:["blur","change"]}],auto_cvr_status:[{required:!0,message:y,trigger:["blur","change"]}],auto_cvr_max:[{required:!0,message:y,trigger:["blur","change"]},{validator:V,trigger:["blur","change"]}],auto_cvr_min:[{required:!0,message:y,trigger:["blur","change"]},{validator:V,trigger:["blur","change"]}],target_buzz_rate:[{required:!0,message:y,trigger:["blur","change"]},{validator:(e,l,a)=>{a(l&&(l>=1||l<=0)?new Error("0-1"):void 0)},trigger:["blur","change"]}]});l({});let w=l({ruleForm:{id:"",offer_id:"",adv_offer:"",auto_cvr_status:2,auto_start_hour:"0",auto_end_hour:"23",auto_cvr_max:"",auto_cvr_min:"",target_buzz_rate:""}});a((()=>m.msg),((e,l)=>{var a,t,r,o;w.ruleForm.offer_id=e.offer_id,w.ruleForm.adv_offer=e.adv_offer;let u=e.fenix_cvr;u&&0!==Object.keys(u).length&&(w.ruleForm.id=u.id,w.ruleForm.auto_cvr_status=null!=(a=u.auto_cvr_status)?a:2,w.ruleForm.auto_start_hour=u.auto_start_hour?u.auto_start_hour.toString():"0",w.ruleForm.auto_end_hour=u.auto_end_hour?u.auto_end_hour.toString():"23",w.ruleForm.auto_cvr_max=null!=(t=u.auto_cvr_max)?t:"",w.ruleForm.auto_cvr_min=null!=(r=u.auto_cvr_min)?r:"",w.ruleForm.target_buzz_rate=null!=(o=u.target_buzz_rate)?o:"")}),{deep:!0,immediate:!0});g((()=>{let{auto_cvr_status:e,auto_cvr_max:l,auto_cvr_min:a,target_buzz_rate:t}=w.ruleForm;return`${1===e?"开":"关"}_${l}_${a}_${t}`}));const k=["id","auto_cvr_status","auto_start_hour","auto_end_hour","auto_cvr_max","auto_cvr_min","target_buzz_rate"],U=[],C=()=>{let e=_(c(w.ruleForm,k),U);0===e.id&&delete e.id,t("updateData",e),t("update:visible",!1)};return(e,l)=>{const a=r("el-form-item"),t=r("el-switch"),m=r("el-time-select"),c=r("el-input"),_=r("el-form"),v=r("el-button");return o(),u("div",null,[s(_,{ref_key:"ruleFormRef",ref:b,enctype:"multipart/form-data",rules:f(x),model:f(w).ruleForm,"label-width":"150px","label-position":"right"},{default:n((()=>[i("div",xe,[p(" Offer "),s(a,{class:"self-el-form-item",label:"Offer:",prop:"offer_id"},{default:n((()=>[i("div",we,[i("span",{textContent:h(f(w).ruleForm.offer_id)},null,8,ke)])])),_:1}),p(" Offer "),s(a,{class:"self-el-form-item",label:"Adv Offer:",prop:"adv_offer"},{default:n((()=>[i("div",Ue,[i("span",{textContent:h(f(w).ruleForm.adv_offer)},null,8,Ce)])])),_:1}),p(" Offer "),s(a,{class:"self-el-form-item",label:"Status:",prop:"auto_cvr_status"},{default:n((()=>[s(t,{modelValue:f(w).ruleForm.auto_cvr_status,"onUpdate:modelValue":l[0]||(l[0]=e=>f(w).ruleForm.auto_cvr_status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),s(a,{class:"self-el-form-item",label:"Start Hour:",prop:"start_hour"},{default:n((()=>[s(m,{modelValue:f(w).ruleForm.auto_start_hour,"onUpdate:modelValue":l[1]||(l[1]=e=>f(w).ruleForm.auto_start_hour=e),placeholder:"Start time",start:"00:00",step:"01:00",end:"23:00",format:"H",class:"form-dialog"},null,8,["modelValue"])])),_:1}),s(a,{class:"self-el-form-item",label:"End Hour:",prop:"end_hour"},{default:n((()=>[s(m,{modelValue:f(w).ruleForm.auto_end_hour,"onUpdate:modelValue":l[2]||(l[2]=e=>f(w).ruleForm.auto_end_hour=e),placeholder:"End time",start:"00:00",step:"01:00",end:"23:00",format:"H",class:"form-dialog"},null,8,["modelValue"])])),_:1}),s(a,{class:"self-el-form-item",label:"CVR Max:",prop:"auto_cvr_max"},{default:n((()=>[s(c,{modelValue:f(w).ruleForm.auto_cvr_max,"onUpdate:modelValue":l[3]||(l[3]=e=>f(w).ruleForm.auto_cvr_max=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1}),s(a,{class:"self-el-form-item",label:"CVR Min:",prop:"auto_cvr_min"},{default:n((()=>[s(c,{modelValue:f(w).ruleForm.auto_cvr_min,"onUpdate:modelValue":l[4]||(l[4]=e=>f(w).ruleForm.auto_cvr_min=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1}),s(a,{class:"self-el-form-item",label:"Target Buzz Rate:",prop:"target_buzz_rate"},{default:n((()=>[s(c,{modelValue:f(w).ruleForm.target_buzz_rate,"onUpdate:modelValue":l[5]||(l[5]=e=>f(w).ruleForm.target_buzz_rate=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),p(" form "),p(" footer "),i("div",je,[s(v,{type:"primary",onClick:l[6]||(l[6]=F((e=>{var l;(l=f(b))&&l.validate((e=>{if(!e)return!1;C()}))}),["prevent"]))},{default:n((()=>[d(" 提交 ")])),_:1})])])}}});const Se={class:"content-con flex column"},Pe={class:"flex jc-start ai-center form-one"},Ae=["textContent"],Re={class:"flex jc-start ai-center form-one"},ze={class:"flex jc-start ai-center form-one"},Oe={key:0},De={key:1},Ne={class:"flex jc-start ai-center form-one"},Te={class:"flex jc-start ai-center form-one"},Le={class:"flex jc-start ai-center form-one"},Ee={class:"flex jc-start ai-center form-one"},Ie={class:"flex jc-start ai-center form-one"},Me={class:"form-one"},$e={class:"flex jc-start ai-center form-one"},Ke={class:"flex jc-start ai-center form-one"},Be={class:"flex jc-start ai-center form-one"},He={class:"form-one"},Ze={class:"w100 flex ai-center jc-start mb-10"},Je={class:"flex jc-start ai-center form-one"},Ye={class:"flex jc-start ai-center form-one"},Ge={class:"form-one"},Qe={class:"flex ai-center jc-start mb-10"},We={class:"text-wrap"},Xe={class:"flex jc-start ai-center form-one"},el={class:"flex jc-start ai-center form-one"},ll={class:"flex jc-start ai-center form-one"},al={class:"flex jc-start ai-center form-one"},tl={class:"w100 flex"};var rl=b(e({__name:"details",setup(e){const b=V();let q=v();const E="此项必填";let M=(e,l,a)=>{l?Number.isInteger(Number(l))?a(void 0):a(new Error("必须为整数")):a(void 0)},$=(e,l,a)=>{J.ruleForm.site_install_limit_max>=J.ruleForm.site_install_limit_min?a(void 0):a(new Error("max必须>=min"))};const K=v(),B={id:void 0,offer_id:"",adv_offer:"",create_type:1,channel:"",channel_type:1,adv_status:1,conversion_flow:void 0,status:1,title:"",pkg:"",attribute_provider:"",pid:"",platform:1,country:[],revenue:void 0,traffic:[],adtype:38,update_date:"",adv_tracking_link:"",target_cvr:void 0,cvr_status:2,is_s2s:2,s2s_tracking_link:"",app_url:"",site_type:"rule_value",site_value:"",description:"",fenix_site:{},fenix_cvr:{},site_black_value:"",site_install_limit_min:4,site_install_limit_max:6,site_install_limit_value:"",cap_total:0};let H=v(!1);const J=l({options:{channel:[{id:"",short_name:""}],country:[{id:"",short_name:"",zh_cn:""}],conversion_flow:[{value:1,label:"CPI"},{value:2,label:"CPA"},{value:9,label:"SDK"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],site_type:[{value:"rule_sdkindex",label:"匹配SDK自定义"},{value:"rule_pubredirect",label:"透传渠道ID"},{value:"rule_slotid",label:"渠道slotid"},{value:"rule_value",label:"固定值"},{value:"site_install_limit",label:"自动_install数"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"},{value:"Lazada",label:"Lazada"}]},choiceRules:{no_required:[{required:!1}],s2s_tracking_link:[{required:!0,message:E,trigger:["blur","change"]}],app_url:[{required:!0,message:E,trigger:["blur","change"]}],site_value:[{required:!0,message:E,trigger:["blur","change"]},{validator:(e,l,a)=>{if(l){a(l.split(",").length>1e3?new Error("site value 的值不可大于1000个"):void 0)}else a(void 0)},trigger:["blur","change"]}]},ruleForm:B,search:{adv_offer:""}}),Y=l({channel:[{required:!0,message:E,trigger:["blur","change"]}],channel_type:[{required:!0,message:E,trigger:["blur","change"]}],status:[{required:!0,message:E,trigger:["blur","change"]}],title:[{required:!0,message:E,trigger:["blur","change"]}],pkg:[{required:!0,message:E,trigger:["blur","change"]}],platform:[{required:!0,message:E,trigger:["blur","change"]}],country:[{required:!0,message:E,trigger:["blur","change"]},{validator:(e,l,a)=>{0!==l.length?l.length>1?a(new Error("只能填选一个国家")):a(void 0):a(new Error(E))},trigger:["blur","change"]}],revenue:[{required:!0,message:E,trigger:["blur","change"]}],traffic:[{required:!1,validator:(e,l,a)=>{0!==l.length?(e=>{let l=!0;return e.map((e=>{for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)){const t=e[a];if((""===t||void 0===t)&&0!==t){l=!1;break}}})),l})(l)?a(void 0):a(new Error("不允许有空值")):a(void 0)},trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:E,trigger:["blur","change"]}],site_type:[{required:!0,message:E,trigger:["blur","change"]}],is_s2s:[{required:!0,message:E,trigger:["blur","change"]}],site_install_limit_min:[{required:!0,message:E,trigger:["blur","change"]},{validator:M,trigger:["blur","change"]},{validator:$,trigger:["blur","change"]}],site_install_limit_max:[{required:!0,message:E,trigger:["blur","change"]},{validator:M,trigger:["blur","change"]},{validator:$,trigger:["blur","change"]}]});let G=v(""),Q=v(""),W=v(""),X=v(!0),ee=v(!1);const le=async()=>{H.value=!0;const e=j.cloneDeep(J.ruleForm);let l={...e};if(e.conversion_flow&&(l.conversion_flow=e.conversion_flow),l.country=e.country[0],l.revenue=parseFloat(l.revenue),l.target_cvr=parseFloat(l.target_cvr),l.site_install_limit_min=parseFloat(l.site_install_limit_min),l.site_install_limit_max=parseFloat(l.site_install_limit_max),l.fenix_site.day_limit&&(l.fenix_site.day_limit=parseFloat(l.fenix_site.day_limit)),l.fenix_site.day_limit_value?l.fenix_site.day_limit_value=parseFloat(l.fenix_site.day_limit_value):delete l.fenix_site.day_limit_value,0!==e.traffic.length){const a=(e=>{const l=[];return e.map((e=>{let a={...e};return e.payout&&(a.payout=Number(e.payout)),e.cap_daily&&(a.cap_daily=Number(e.cap_daily)),l.push(a),e})),l})(e.traffic);l.traffic=JSON.stringify(a)}else delete l.traffic;let a=l.fenix_cvr;let t;a&&0===Object.keys(a).length&&delete l.fenix_cvr,l.cap_total=e.traffic.reduce(((e,l)=>("1"==l.pub_status.toString()&&(e+=Number(l.cap_daily)),e)),0),W.value,"create"===W.value&&(t=await T(l)),"edit"===W.value&&(t=await L(l)),H.value=!1,I(t)&&window.close()},ae=()=>{X.value=!0},te=g((()=>J.ruleForm.site_value?J.ruleForm.site_value.split(",").length:0)),re=async()=>{const{data:e}=await A();return J.options.channel=e,e},oe=async()=>{const{data:e}=await R();return J.options.country=e,e};l({ruleForm:B}),t((async()=>{ue(),X.value=!1}));const ue=async()=>{G.value=b.currentRoute.value.name,Q.value=b.currentRoute.value.params.id,"fenix-offer-create"===G.value&&((async()=>{const e=await P();if(200===(null==e?void 0:e.code)){const{offer_id:l}=e;J.ruleForm.offer_id=l.toString()}})(),W.value="create"),"fenix-offer-edit"===G.value&&(Q.value=b.currentRoute.value.params.id,W.value="edit",ie()),await(async()=>await Promise.all([re(),oe()]))()},ie=async()=>{const{data:e}=await S(Q.value);J.ruleForm={...e},J.ruleForm.country=[e.country],J.search.adv_offer=e.adv_offer,J.ruleForm.traffic=e.traffic?JSON.parse(e.traffic):[],x(J.ruleForm)},se=g((()=>"rule_value"===J.ruleForm.site_type));a((()=>J.ruleForm.traffic),((e,l)=>{}),{immediate:!0,deep:!0}),a((()=>J.search.adv_offer),((e,l)=>{J.ruleForm.adv_offer=e})),a((()=>J.ruleForm.adv_offer),((e,l)=>{J.ruleForm.create_type=e?2:1}),{immediate:!0,deep:!0}),w((()=>{let e=J.ruleForm.site_install_limit_min,l=J.ruleForm.site_install_limit_max,a=Number(e),t=Number(l);if(a&&t&&Number.isInteger(a)&&Number.isInteger(t)&&t>=a){let e=[];for(let l=a;l<t+1;l++)e.push(l);J.ruleForm.site_install_limit_value=e.join(",")}else J.ruleForm.site_install_limit_value=""}));const ne=e=>{},de=async()=>{if("edit"===W.value)return!1;const e=J.ruleForm.adv_offer;if(!e)return!1;const l={adv_offer:e,platform:J.ruleForm.platform};if(e&&e.includes("_")){J.ruleForm.channel_type=2,J.ruleForm.adtype=39;const e=await z(l),{data:a}=e;200===e.status?(J.ruleForm.adv_status=1,ce(a)):J.ruleForm.adv_status=2}else{let a=/^1(\S+)/,t=/^lh(\S+)/;if(/^3(\S+)/.test(e)){J.ruleForm.channel_type=1,J.ruleForm.adtype=38;const{data:e}=await O(l);J.ruleForm.adv_status=e.status?e.status:2,me(e)}if(a.test(e)){J.ruleForm.channel_type=4,J.ruleForm.adtype=40;const{data:e}=await D(l);J.ruleForm.adv_status=e.status?e.status:2,me(e)}if(t.test(e)){J.ruleForm.channel_type=6,J.ruleForm.adtype=42;const{data:e}=await N(l);J.ruleForm.adv_status=e.status?e.status:2,me(e)}}},me=e=>{J.ruleForm.channel=e.channel,J.ruleForm.attribute_provider=e.attribute_provider,J.ruleForm.conversion_flow=e.conversion_flow,J.ruleForm.title=e.title,J.ruleForm.pkg=e.pkg_name,J.ruleForm.pid=e.pid,J.ruleForm.platform=e.platform,J.ruleForm.revenue=e.payout,J.ruleForm.adv_tracking_link=e.tracking_link,_e(e.country)},ce=e=>{var l;J.ruleForm.pkg=e.app_pkg_name,J.ruleForm.channel=e.channel,J.ruleForm.country=e.country;const a=null==(l=J.options.platform.find((l=>l.label===e.platform)))?void 0:l.value;J.ruleForm.platform=a||1,J.ruleForm.revenue=e.revenue,J.ruleForm.title=e.title,J.ruleForm.adv_tracking_link=e.tracking_link,J.ruleForm.conversion_flow=9},_e=e=>{e&&(Array.isArray(e)?J.ruleForm.country=e:J.ruleForm.country=[e])},pe=e=>{e.site_value.length,J.ruleForm.site_value=e.site_value,J.ruleForm.site_black_value=e.site_black_value,J.ruleForm.fenix_site=x(e)},fe=e=>{J.ruleForm.fenix_cvr=x(e)},ve=()=>{ee.value=!0},ge=g((()=>{if(J.ruleForm.fenix_cvr){let{auto_cvr_status:e,auto_cvr_max:l,auto_cvr_min:a,target_buzz_rate:t}=J.ruleForm.fenix_cvr;return`${1===e?"开":"关"}_${l}_${a}_${t}`}return""}));return(e,l)=>{const a=r("el-input"),t=r("el-form-item"),v=r("el-button"),g=r("el-option"),b=r("el-select"),V=r("el-radio"),x=r("el-radio-group"),w=r("el-switch"),j=r("el-form"),S=r("el-dialog"),P=k("loading");return U((o(),u("div",null,[p(" form "),s(j,{ref_key:"ruleForm",ref:K,enctype:"multipart/form-data",rules:f(Y),model:f(J).ruleForm,"label-width":"240px","label-position":"right"},{default:n((()=>[i("div",Se,[p(" Offer "),s(t,{label:"Offer:",prop:"offer"},{default:n((()=>[i("div",Pe,[i("span",{textContent:h(f(J).ruleForm.offer_id)},null,8,Ae),s(a,{modelValue:f(J).ruleForm.offer_id,"onUpdate:modelValue":l[0]||(l[0]=e=>f(J).ruleForm.offer_id=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" Adv Offer "),s(t,{label:"Adv Offer:",prop:"adv_offer"},{default:n((()=>[i("div",Re,[s(a,{modelValue:f(J).search.adv_offer,"onUpdate:modelValue":l[1]||(l[1]=e=>f(J).search.adv_offer=e),placeholder:"Please input",class:"input-with-select",disabled:"edit"===f(W)},C({_:2},["create"===f(W)?{name:"append",fn:n((()=>[s(v,{type:"primary",icon:"Search",onClick:de})])),key:"0"}:void 0]),1032,["modelValue","disabled"])])])),_:1}),p(" Channel "),s(t,{label:"Channel:",prop:"channel"},{default:n((()=>[s(b,{modelValue:f(J).ruleForm.channel,"onUpdate:modelValue":l[2]||(l[2]=e=>f(J).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:n((()=>[(o(!0),u(m,null,c(f(J).options.channel,(e=>(o(),_(g,{key:e.id,label:e.short_name,value:e.short_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(" Channel Type "),s(t,{label:"Channel Type:",prop:"channel_type"},{default:n((()=>[s(x,{modelValue:f(J).ruleForm.channel_type,"onUpdate:modelValue":l[3]||(l[3]=e=>f(J).ruleForm.channel_type=e),class:"form-one"},{default:n((()=>[s(V,{label:1},{default:n((()=>[d(" BUZZ ")])),_:1}),s(V,{label:2},{default:n((()=>[d(" SDK ")])),_:1}),s(V,{label:4},{default:n((()=>[d(" BUZZ SYNC ")])),_:1}),s(V,{label:5},{default:n((()=>[d(" Direct ")])),_:1}),s(V,{label:6},{default:n((()=>[d(" Light ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),p(" Adv Status "),s(t,{label:"Adv Status:",prop:"adv_status"},{default:n((()=>[i("div",ze,[1===f(J).ruleForm.adv_status?(o(),u("span",Oe,"开")):p("v-if",!0),2===f(J).ruleForm.adv_status?(o(),u("span",De,"关")):p("v-if",!0)])])),_:1}),p(" conversion_flow "),s(t,{label:"Conversion Flow:",prop:"conversion_flow"},{default:n((()=>[s(b,{modelValue:f(J).ruleForm.conversion_flow,"onUpdate:modelValue":l[4]||(l[4]=e=>f(J).ruleForm.conversion_flow=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:n((()=>[(o(!0),u(m,null,c(f(J).options.conversion_flow,(e=>(o(),_(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(" Status "),s(t,{label:"Status:",prop:"status"},{default:n((()=>[i("div",Ne,[s(w,{modelValue:f(J).ruleForm.status,"onUpdate:modelValue":l[5]||(l[5]=e=>f(J).ruleForm.status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),p(" Offer Title "),s(t,{label:"Offer Title:",prop:"title"},{default:n((()=>[i("div",Te,[s(a,{modelValue:f(J).ruleForm.title,"onUpdate:modelValue":l[6]||(l[6]=e=>f(J).ruleForm.title=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" Package Name "),s(t,{label:"Package Name:",prop:"pkg"},{default:n((()=>[i("div",Le,[s(a,{modelValue:f(J).ruleForm.pkg,"onUpdate:modelValue":l[7]||(l[7]=e=>f(J).ruleForm.pkg=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" Attribute Provider "),s(t,{label:"Attribute Provider:",prop:"attribute_provider"},{default:n((()=>[s(b,{modelValue:f(J).ruleForm.attribute_provider,"onUpdate:modelValue":l[8]||(l[8]=e=>f(J).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:n((()=>[(o(!0),u(m,null,c(f(J).options.attribute_provider,(e=>(o(),_(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(" Pid "),s(t,{label:"Pid:",prop:"pid"},{default:n((()=>[i("div",Ee,[s(a,{modelValue:f(J).ruleForm.pid,"onUpdate:modelValue":l[9]||(l[9]=e=>f(J).ruleForm.pid=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" Platform "),s(t,{label:"Platform:",prop:"platform"},{default:n((()=>[s(b,{modelValue:f(J).ruleForm.platform,"onUpdate:modelValue":l[10]||(l[10]=e=>f(J).ruleForm.platform=e),filterable:"",class:"form-one",placeholder:""},{default:n((()=>[(o(!0),u(m,null,c(f(J).options.platform,(e=>(o(),_(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(" Country "),s(t,{label:"Country:",prop:"country"},{default:n((()=>[s(b,{modelValue:f(J).ruleForm.country,"onUpdate:modelValue":l[11]||(l[11]=e=>f(J).ruleForm.country=e),filterable:"",class:"form-one",multiple:"",clearable:"",placeholder:""},{default:n((()=>[(o(!0),u(m,null,c(f(J).options.country,(e=>(o(),_(g,{key:e.id,label:e.short_name+"-"+e.zh_cn,value:e.short_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(" Revenue "),s(t,{label:"Revenue:",prop:"revenue"},{default:n((()=>[i("div",Ie,[s(a,{modelValue:f(J).ruleForm.revenue,"onUpdate:modelValue":l[12]||(l[12]=e=>f(J).ruleForm.revenue=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" Manage Traffic "),s(t,{label:"Manage Traffic:",prop:"traffic"},{default:n((()=>[i("div",Me,[s(f(Z),{ref:"traffic",list:f(J).ruleForm.traffic,"onUpdate:list":l[13]||(l[13]=e=>f(J).ruleForm.traffic=e),offer:f(J).ruleForm.offer_id,onKk:ne},null,8,["list","offer"])])])),_:1}),p(" Adv Tracking Link "),s(t,{label:"Adv Tracking Link:",prop:"adv_tracking_link"},{default:n((()=>[i("div",$e,[s(a,{modelValue:f(J).ruleForm.adv_tracking_link,"onUpdate:modelValue":l[14]||(l[14]=e=>f(J).ruleForm.adv_tracking_link=e),rows:4,autosize:"",type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" Target CVR "),s(t,{label:"Target CVR:",prop:"target_cvr"},{default:n((()=>[i("div",Ke,[s(a,{modelValue:f(J).ruleForm.target_cvr,"onUpdate:modelValue":l[15]||(l[15]=e=>f(J).ruleForm.target_cvr=e),type:"number",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" CVR Status "),s(t,{label:"CVR Status:",prop:"cvr_status"},{default:n((()=>[i("div",Be,[s(w,{modelValue:f(J).ruleForm.cvr_status,"onUpdate:modelValue":l[16]||(l[16]=e=>f(J).ruleForm.cvr_status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),p(" Auto CVR "),s(t,{label:"Auto CVR:",prop:"auto_cvr"},{default:n((()=>[i("div",He,[i("div",Ze,[s(v,{class:"cp mr-10",icon:"Tools",circle:"",onClick:ve}),i("span",null,h(f(ge)),1)])])])),_:1}),p(" Site Type "),s(t,{label:"Site Type:",prop:"site_type"},{default:n((()=>[s(b,{modelValue:f(J).ruleForm.site_type,"onUpdate:modelValue":l[17]||(l[17]=e=>f(J).ruleForm.site_type=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:n((()=>[(o(!0),u(m,null,c(f(J).options.site_type,(e=>(o(),_(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(" site_install_limit_min "),"site_install_limit"===f(J).ruleForm.site_type?(o(),_(t,{key:0,label:"Site Install Limit Min:",prop:"site_install_limit_min"},{default:n((()=>[i("div",Je,[s(a,{modelValue:f(J).ruleForm.site_install_limit_min,"onUpdate:modelValue":l[18]||(l[18]=e=>f(J).ruleForm.site_install_limit_min=e),placeholder:"Please input",class:"input-with-select",type:"number",setup:"1"},null,8,["modelValue"])])])),_:1})):p("v-if",!0),p(" site_install_limit_max "),"site_install_limit"===f(J).ruleForm.site_type?(o(),_(t,{key:1,label:"Site Install Limit Max:",prop:"site_install_limit_max"},{default:n((()=>[i("div",Ye,[s(a,{modelValue:f(J).ruleForm.site_install_limit_max,"onUpdate:modelValue":l[19]||(l[19]=e=>f(J).ruleForm.site_install_limit_max=e),placeholder:"Please input",class:"input-with-select",type:"number",setup:"1"},null,8,["modelValue"])])])),_:1})):p("v-if",!0),p(' <el-form-item\n          label="site_install_limit_value:"\n          prop="site_install_limit_value"\n        >\n          <div class="flex jc-start ai-center form-one">\n            {{state.ruleForm.cap_total}}\n            <br>\n            {{state.ruleForm.site_install_limit_value}}\n          </div>\n        </el-form-item> '),p(" Site Value "),s(t,{label:"Site Value:",prop:"site_value",rules:f(se)?f(J).choiceRules.site_value:f(J).choiceRules.no_required},{default:n((()=>[i("div",Ge,[i("div",Qe,[s(v,{class:"cp mr-10",icon:"Tools",circle:"",onClick:ae}),i("span",null,h(f(te)),1)]),i("div",null,[p(' <el-input\n                v-model="state.ruleForm.site_value"\n                type="textarea"\n                autosize\n                :rows="4"\n                placeholder="Please input"\n                class="input-with-select siteValue"\n              /> '),i("p",We,h(f(J).ruleForm.site_value),1)])])])),_:1},8,["rules"]),p(" S2S Async "),s(t,{label:"S2S Async:",prop:"is_s2s"},{default:n((()=>[i("div",Xe,[s(w,{modelValue:f(J).ruleForm.is_s2s,"onUpdate:modelValue":l[20]||(l[20]=e=>f(J).ruleForm.is_s2s=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),p(" S2S Tracking Link "),s(t,{label:"S2S Tracking Link:",prop:"s2s_tracking_link",rules:1===f(J).ruleForm.is_s2s?f(J).choiceRules.s2s_tracking_link:f(J).choiceRules.no_required},{default:n((()=>[i("div",el,[s(a,{modelValue:f(J).ruleForm.s2s_tracking_link,"onUpdate:modelValue":l[21]||(l[21]=e=>f(J).ruleForm.s2s_tracking_link=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1},8,["rules"]),p(" Preview URL "),s(t,{label:"Preview URL:",prop:"app_url",rules:1===f(J).ruleForm.is_s2s?f(J).choiceRules.app_url:f(J).choiceRules.no_required},{default:n((()=>[i("div",ll,[s(a,{modelValue:f(J).ruleForm.app_url,"onUpdate:modelValue":l[22]||(l[22]=e=>f(J).ruleForm.app_url=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1},8,["rules"]),p(" Description "),s(t,{label:"Description:",prop:"description"},{default:n((()=>[i("div",al,[s(a,{modelValue:f(J).ruleForm.description,"onUpdate:modelValue":l[23]||(l[23]=e=>f(J).ruleForm.description=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(" end ")])])),_:1},8,["rules","model"]),p(" form "),p(" footer "),i("div",tl,[s(v,{type:"primary",onClick:l[24]||(l[24]=F((e=>(async e=>{e&&await e.validate(((e,l)=>{e&&le()}))})(f(K))),["prevent"]))},{default:n((()=>[d(" Save ")])),_:1})]),p(" dialog "),s(S,{modelValue:f(X),"onUpdate:modelValue":l[26]||(l[26]=e=>y(X)?X.value=e:X=e),title:"Site",width:"70%"},{default:n((()=>[s(Ve,{ref_key:"refChildren",ref:q,msg:f(J).ruleForm,onUpdateData:pe,visible:f(X),"onUpdate:visible":l[25]||(l[25]=e=>y(X)?X.value=e:X=e)},null,8,["msg","visible"])])),_:1},8,["modelValue"]),p(" dialog "),s(S,{modelValue:f(ee),"onUpdate:modelValue":l[28]||(l[28]=e=>y(ee)?ee.value=e:ee=e),title:"Auto CVR",width:"70%"},{default:n((()=>[s(qe,{msg:f(J).ruleForm,onUpdateData:fe,visible:f(ee),"onUpdate:visible":l[27]||(l[27]=e=>y(ee)?ee.value=e:ee=e)},null,8,["msg","visible"])])),_:1},8,["modelValue"])])),[[P,f(H)]])}}}),[["__scopeId","data-v-2659fc52"]]);export{rl as default};
