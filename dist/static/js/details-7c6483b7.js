var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,t=(l,a,r)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r,u=(e,u)=>{for(var o in u||(u={}))a.call(u,o)&&t(e,o,u[o]);if(l)for(var o of l(u))r.call(u,o)&&t(e,o,u[o]);return e};import{d as o,r as i,w as s,M as n,m as d,s as c,n as m,v as _,c as p,p as f,O as v,P as g,A as b,q as h,z as y,b as F,e as V,I as w,_ as k,a1 as x,x as q,K as U,D as j,F as C,C as S,a as P,Q as O,a0 as A,V as z,a6 as R}from"./index-9fd04f7c.js";import{_ as D}from"./lodash-df14f296.js";import{m as T,p as E,q as N,r as $,s as K,t as I,u as M,v as L,w as B,x as H}from"./fenix-a0563224.js";import{c as Z}from"./clipboard-4776092c.js";import{m as J}from"./message-85f2fe97.js";import{b as Q,r as Y}from"./new-format-0b8e24ce.js";const G={class:"flex jc-end"},W=F(" Add "),X={class:"flex"},ee=F(" Copy "),le=o({props:{list:{require:!0,default:()=>[],type:Array},offer:{require:!0,default:"",type:String}},emits:["kk","up"],setup(e,{emit:l}){const a=e,r=i({pub:[{id:"",pub_name:""}]}),t={55527824:.1,95108831:.1,95846929:.005,59845210:.005};let u=i({manage_traffic:[]});const o={pub:"",slotid:"",payout:void 0,cap_daily:void 0,pub_status:1,pub_tracking_link:""},F=()=>{u.manage_traffic.push(D.cloneDeep(o))};return s((()=>a.list),((e,l)=>{u.manage_traffic=e}),{immediate:!0,deep:!0}),s((()=>u.manage_traffic),((e,l)=>{}),{immediate:!0,deep:!0}),n((()=>{(async()=>{const{data:e}=await T();r.pub=e})(),F()})),(e,l)=>{const o=d("el-button"),i=d("el-option"),s=d("el-select"),n=d("el-table-column"),V=d("el-input"),w=d("el-switch"),k=d("el-table");return c(),m("div",null,[_("div",G,[p(o,{type:"primary",onClick:F},{default:f((()=>[W])),_:1})]),p(k,{class:"mt-10",data:h(u).manage_traffic,style:{width:"100%"},border:""},{default:f((()=>[p(n,{label:"Pub Name",align:"center"},{default:f((e=>[p(s,{modelValue:e.row.pub,"onUpdate:modelValue":l=>e.row.pub=l,filterable:"",clearable:"",placeholder:"",onChange:l=>(e=>{const{row:l}=e,u="http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}";l.pub_tracking_link=u;const o=r.pub.find((e=>e.pub_name===l.pub));l.slotid=o.slot_id,l.pub_status=o.status,l.pub_tracking_link=u.replace("{offer}",a.offer).replace("{slot}",o.slot_id),t[o.slot_id]&&(l.payout=t[o.slot_id])})(e)},{default:f((()=>[(c(!0),m(v,null,g(h(r).pub,(e=>{var l;return c(),b(i,{key:e.id,label:e.pub_name,value:null!=(l=e.pub_name)?l:e.id},null,8,["label","value"])})),128))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),p(n,{label:"Payout",align:"center"},{default:f((e=>[p(V,{modelValue:e.row.payout,"onUpdate:modelValue":l=>e.row.payout=l,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(n,{label:"Cap Daily",align:"center"},{default:f((e=>[p(V,{modelValue:e.row.cap_daily,"onUpdate:modelValue":l=>e.row.cap_daily=l,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(n,{label:"Operation",align:"center",width:"180px"},{default:f((e=>[_("div",X,[p(o,{class:"mr-10",type:"danger",icon:"Delete",circle:"",onClick:l=>(e=>{const l=e.$index;u.manage_traffic.splice(l,1)})(e)},null,8,["onClick"]),p(w,{modelValue:e.row.pub_status,"onUpdate:modelValue":l=>e.row.pub_status=l,"active-value":1,"inactive-value":2,class:"mr-10",onChange:e=>{}},null,8,["modelValue","onUpdate:modelValue","onChange"]),e.row.pub_tracking_link?(c(),b(o,{key:0,class:"cp",type:"primary",onClick:l=>(({row:e})=>{const{pub_tracking_link:l}=e;Z(l)})(e)},{default:f((()=>[ee])),_:2},1032,["onClick"])):y("v-if",!0)])])),_:1})])),_:1},8,["data"])])}}}),ae={class:"w100"},re={class:"content-con flex column"},te={class:"flex jc-start ai-center form-one"},ue={class:"w100 flex mt-10"},oe=F("Save"),ie=o({emits:["update:visible","uploadData"],setup(e,{emit:l}){const a=V(),r=/\S/;const t=w((()=>Q(u.ruleForm.site_list,1,r).data));let u=i({ruleForm:{site_list:""},rules:{site_list:[{required:!0,message:"必填项",trigger:["blur"]},{validator:(e,l,a)=>{if(""!==l){a(Q(l,1,r).type?void 0:new Error("格式错误！"))}else a(new Error("必填项"))},trigger:["blur"]}]}});const o=()=>{l("uploadData",t.value),u.ruleForm.site_list="",l("update:visible",!1)};return(e,l)=>{const r=d("el-input"),t=d("el-form-item"),i=d("el-form"),s=d("el-button");return c(),m("div",ae,[p(i,{ref_key:"ruleFormRef",ref:a,enctype:"multipart/form-data",rules:h(u).rules,model:h(u).ruleForm,"label-width":"140px","label-position":"right"},{default:f((()=>[_("div",re,[y(" Offer "),p(t,{label:"Site:",prop:"site_list"},{default:f((()=>[_("div",te,[p(r,{modelValue:h(u).ruleForm.site_list,"onUpdate:modelValue":l[0]||(l[0]=e=>h(u).ruleForm.site_list=e),rows:4,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" end ")])])),_:1},8,["rules","model"]),_("div",ue,[p(s,{type:"primary",onClick:l[1]||(l[1]=e=>{var l;(l=a.value)&&l.validate((e=>{if(!e)return!1;o()}))})},{default:f((()=>[oe])),_:1})])])}}});const se={class:"w100"},ne=(e=>(j("data-v-661f6240"),e=e(),C(),e))((()=>_("div",{class:"mb-10"},null,-1))),de={class:"control-box flex jc-between ai-start w100"},ce=F("增量生成"),me=F("批量上传"),_e=F("清空"),pe={class:"body-box mt-10"},fe={class:"flex"};var ve=k(o({props:{msg:{require:!0,default:()=>"",type:String}},emits:["update:msg"],setup(e,{emit:l}){const a=e;let r=V(!1);let t=i({ruleForm:{site_num:0,site_value:(u=a.msg,u?u.split(","):[])},rules:{}});var u;const o=w((()=>t.ruleForm.site_value));w((()=>t.ruleForm.site_value.length));const s=()=>{if(t.ruleForm.site_num>0){let e=Math.floor(t.ruleForm.site_num);for(let l=0;l<e;l++){const e=Y(8);t.ruleForm.site_value.push(e)}}t.ruleForm.site_num=0},n=()=>{r.value=!0},v=()=>{t.ruleForm.site_value=[]},g=e=>{e.map((e=>{t.ruleForm.site_value.push(e[0])}))};return x((()=>{const e=t.ruleForm.site_value.join(",");l("update:msg",e)})),(e,l)=>{const a=d("el-button"),u=d("el-input"),i=d("el-table-column"),b=d("el-table"),F=d("el-dialog");return c(),m("div",se,[ne,y(" 操作 "),_("div",de,[p(u,{modelValue:h(t).ruleForm.site_num,"onUpdate:modelValue":l[0]||(l[0]=e=>h(t).ruleForm.site_num=e),placeholder:"Please input",type:"number",max:"1000",class:"input-with-select search-con"},{append:f((()=>[p(a,{onClick:s},{default:f((()=>[ce])),_:1})])),_:1},8,["modelValue"]),p(a,{class:"cp mb-10",onClick:n,type:"primary"},{default:f((()=>[me])),_:1}),p(a,{class:"cp mb-10",onClick:v,type:"primary"},{default:f((()=>[_e])),_:1})]),y(" table "),_("div",pe,[p(b,{data:h(o),class:"w100",height:"400px",border:""},{default:f((()=>[p(i,{label:"site_id",align:"center"},{default:f((e=>[_("div",null,[_("span",null,q(e.row),1)])])),_:1}),p(i,{label:"设置",align:"center"},{default:f((e=>[_("div",fe,[p(a,{type:"danger",icon:"Delete",circle:"",onClick:l=>(e=>{const{$index:l,row:a}=e;t.ruleForm.site_value.splice(l,1)})(e)},null,8,["onClick"])])])),_:1})])),_:1},8,["data"])]),y(" dialog "),p(F,{modelValue:h(r),"onUpdate:modelValue":l[2]||(l[2]=e=>U(r)?r.value=e:r=e),title:"site",width:"60%"},{default:f((()=>[p(ie,{visible:h(r),"onUpdate:visible":l[1]||(l[1]=e=>U(r)?r.value=e:r=e),onUploadData:g},null,8,["visible"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-661f6240"]]);const ge={class:"content-con flex column"},be={class:"flex jc-start ai-center form-one"},he=["textContent"],ye={class:"flex jc-start ai-center form-one"},Fe=["textContent"],Ve={class:"flex jc-start ai-center form-one"},we={class:"ml-10"},ke={class:"flex jc-start ai-center form-one"},xe={class:"ml-10"},qe={class:"flex jc-start ai-center form-one"},Ue=F("默认"),je=F("自定义"),Ce={class:"ml-10"},Se={class:"flex jc-start ai-center form-one"},Pe={class:"flex jc-start ai-center form-one"},Oe={class:"ml-10"},Ae={class:"flex jc-start ai-center form-one"},ze={class:"flex jc-start ai-center form-one"},Re={class:"flex jc-start ai-center form-one"},De={class:"w100 flex"},Te=F(" 提交 "),Ee=o({props:{msg:{require:!0,default:()=>({}),type:Object}},emits:["update:visible","updateData"],setup(e,{emit:l}){const a=e,r=V();let t="必填项";const u=(e,l,a)=>{if(l){a(l.split(",").length>1e3?new Error("site value 的值不可大于1000个"):void 0)}else a(void 0)},o=i({offer_id:[{required:!0,message:t,trigger:["blur","change"]}],adv_offer:[{required:!0,message:t,trigger:["blur","change"]}],status_day:[{required:!0,message:t,trigger:["blur","change"]}],day_limit:[{required:!0,message:t,trigger:["blur","change"]},{validator:(e,l,a)=>{if(l){let e=Number(l);Number.isInteger(e)&&Number.isSafeInteger(e)?a(e>5?void 0:new Error("必须为大于5的整数")):a(new Error("必须为整数"))}else a(void 0)},trigger:["blur","change"]}],day_limit_type:[{required:!0,message:t,trigger:["blur","change"]}],day_limit_value:[{required:!0,message:t,trigger:["blur","change"]}],status_hour:[{required:!0,message:t,trigger:["blur","change"]}]}),n=i({site_value_required:[{required:!0,message:t,trigger:["blur","change"]},{validator:u,trigger:["blur","change"]}],site_value_no_required:[{required:!1,message:t,trigger:["blur","change"]},{validator:u,trigger:["blur","change"]}]});let v=i({ruleForm:{offer_id:"",adv_offer:"",channel_type:2,status_day:2,day_limit:15,day_limit_type:1,day_limit_value:"",status_hour:2,site_value:"",site_black_value:""}});const g=w((()=>v.ruleForm.site_value?v.ruleForm.site_value.split(",").length:0)),k=w((()=>"rule_value"===a.msg.site_type));s((()=>a.msg),((e,l)=>{let r=a.msg.fenix_site,t=r.status_day||2,u=r.status_hour||2;2===a.msg.channel_type&&(t=2,u=2),v.ruleForm={offer_id:r.offer_id||a.msg.offer_id,adv_offer:r.adv_offer||a.msg.adv_offer,channel_type:a.msg.channel_type,status_day:t,day_limit:r.day_limit||15,day_limit_type:r.day_limit_type||1,day_limit_value:r.day_limit_value||"",status_hour:u,site_value:a.msg.site_value,site_black_value:a.msg.site_black_value}}),{deep:!0,immediate:!0});const x=()=>{l("updateData",v.ruleForm),l("update:visible",!1)};return(e,l)=>{const t=d("el-form-item"),u=d("el-switch"),i=d("info-filled"),s=d("el-icon"),V=d("el-tooltip"),w=d("el-input"),j=d("el-radio"),C=d("el-radio-group"),P=d("el-form"),O=d("el-button");return c(),m("div",null,[p(P,{ref_key:"ruleFormRef",ref:r,enctype:"multipart/form-data",rules:h(o),model:h(v).ruleForm,"label-width":"150px","label-position":"right"},{default:f((()=>[_("div",ge,[y(" Offer "),p(t,{label:"Offer:",prop:"offer_id"},{default:f((()=>[_("div",be,[_("span",{textContent:q(h(v).ruleForm.offer_id)},null,8,he)])])),_:1}),y(" Offer "),p(t,{label:"Adv Offer:",prop:"adv_offer"},{default:f((()=>[_("div",ye,[_("span",{textContent:q(h(v).ruleForm.adv_offer)},null,8,Fe)])])),_:1}),y(" Offer "),p(t,{label:"分天优选:",prop:"status_day"},{default:f((()=>[_("div",Ve,[p(u,{disabled:2==a.msg.channel_type,modelValue:h(v).ruleForm.status_day,"onUpdate:modelValue":l[0]||(l[0]=e=>h(v).ruleForm.status_day=e),"active-value":1,"inactive-value":2},null,8,["disabled","modelValue"]),_("span",we,[p(V,{content:"根据昨天数据筛选符合条件的site_id使用",placement:"right-start"},{default:f((()=>[p(s,null,{default:f((()=>[p(i)])),_:1})])),_:1})])])])),_:1}),p(t,{label:"分天优选启动条件:",prop:"day_limit"},{default:f((()=>[_("div",ke,[p(w,{modelValue:h(v).ruleForm.day_limit,"onUpdate:modelValue":l[1]||(l[1]=e=>h(v).ruleForm.day_limit=e),placeholder:"默认值为15",min:"5",step:"1",class:"input-with-select",type:"number"},null,8,["modelValue"]),_("span",xe,[p(V,{content:"当昨天site_id的平均install数大于等于设定值时才启动自动优选，默认设置为15",placement:"bottom"},{default:f((()=>[p(s,null,{default:f((()=>[p(i)])),_:1})])),_:1})])])])),_:1}),p(t,{label:"分天优选install限制:",prop:"day_limit_type"},{default:f((()=>[_("div",qe,[p(C,{class:"flex",modelValue:h(v).ruleForm.day_limit_type,"onUpdate:modelValue":l[2]||(l[2]=e=>h(v).ruleForm.day_limit_type=e)},{default:f((()=>[p(j,{label:1},{default:f((()=>[Ue])),_:1}),p(j,{label:2},{default:f((()=>[je])),_:1})])),_:1},8,["modelValue"]),_("span",Ce,[p(V,{content:"根据site_id的install数筛选，仅使用大于等于设定值的site_id，默认值为昨天均值除以5",placement:"right-start"},{default:f((()=>[p(s,null,{default:f((()=>[p(i)])),_:1})])),_:1})])])])),_:1}),2===h(v).ruleForm.day_limit_type?(c(),b(t,{key:0,label:"分天优选install限制值:",prop:"day_limit_value"},{default:f((()=>[_("div",Se,[p(w,{type:"number",modelValue:h(v).ruleForm.day_limit_value,"onUpdate:modelValue":l[3]||(l[3]=e=>h(v).ruleForm.day_limit_value=e),placeholder:"",class:"input-with-select"},null,8,["modelValue"])])])),_:1})):y("v-if",!0),p(t,{label:"分时优选:",prop:"status_hour"},{default:f((()=>[_("div",Pe,[p(u,{disabled:2==a.msg.channel_type,modelValue:h(v).ruleForm.status_hour,"onUpdate:modelValue":l[4]||(l[4]=e=>h(v).ruleForm.status_hour=e),"active-value":1,"inactive-value":2},null,8,["disabled","modelValue"]),_("span",Oe,[p(V,{content:"根据前6小时和前2小时数据筛选符合条件的site_id使用，暂不支持自定义",placement:"right-start"},{default:f((()=>[p(s,null,{default:f((()=>[p(i)])),_:1})])),_:1})])])])),_:1}),p(t,{label:"当前渠道数:",prop:"site_value",rules:h(k)?h(n).site_value_required:h(n).site_value_no_required},{default:f((()=>[_("div",Ae,[p(w,{type:"hidden",modelValue:h(g),"onUpdate:modelValue":l[5]||(l[5]=e=>U(g)?g.value=e:null),disabled:""},null,8,["modelValue"]),F(" "+q(h(g)),1)])])),_:1},8,["rules"]),p(t,{label:"黑名单:",prop:"site_black_value"},{default:f((()=>[_("div",ze,[p(w,{type:"textarea",autosize:{minRows:8,maxRows:80},modelValue:h(v).ruleForm.site_black_value,"onUpdate:modelValue":l[6]||(l[6]=e=>h(v).ruleForm.site_black_value=e),placeholder:"请用英文逗号分割",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),p(t,{label:""},{default:f((()=>[_("div",Re,[p(ve,{msg:h(v).ruleForm.site_value,"onUpdate:msg":l[7]||(l[7]=e=>h(v).ruleForm.site_value=e)},null,8,["msg"])])])),_:1}),y(" end ")])])),_:1},8,["rules","model"]),y(" form "),y(" footer "),_("div",De,[p(O,{type:"primary",onClick:l[8]||(l[8]=S((e=>{var l;(l=r.value)&&l.validate((e=>{if(!e)return!1;x()}))}),["prevent"]))},{default:f((()=>[Te])),_:1})])])}}});const Ne={class:"content-con flex column"},$e={class:"flex jc-start ai-center form-dialog"},Ke=["textContent"],Ie={class:"flex jc-start ai-center form-dialog"},Me=["textContent"],Le={class:"w100 flex"},Be=F(" 提交 "),He=o({props:{msg:{require:!0,default:()=>({}),type:Object}},emits:["update:visible","updateData"],setup(e,{emit:l}){const a=e,{handleAjaxNumberKeyFn:r,handleAjaxArrayKeyFn:t}={handleAjaxNumberKeyFn:(e,l)=>{if(0===l.length)return e;let a={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const t=e[r];l.includes(r)?a[r]=Number(t):a[r]=t}return a},handleAjaxArrayKeyFn:(e,l)=>{if(0===l.length)return e;let a={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const t=e[r];l.includes(r)?a[r]=0===t.length?"":t.join(","):a[r]=t}return a}},u=V();let o="必填项";const n=(e,l,a)=>{a(l&&(l>=1e3||l<=0)?new Error("0-1000"):void 0)},v=i({offer_id:[{required:!0,message:o,trigger:["blur","change"]}],adv_offer:[{required:!0,message:o,trigger:["blur","change"]}],auto_cvr_status:[{required:!0,message:o,trigger:["blur","change"]}],auto_cvr_max:[{required:!0,message:o,trigger:["blur","change"]},{validator:n,trigger:["blur","change"]}],auto_cvr_min:[{required:!0,message:o,trigger:["blur","change"]},{validator:n,trigger:["blur","change"]}],target_buzz_rate:[{required:!0,message:o,trigger:["blur","change"]},{validator:(e,l,a)=>{a(l&&(l>=1||l<=0)?new Error("0-1"):void 0)},trigger:["blur","change"]}]});i({});let g=i({ruleForm:{id:"",offer_id:"",adv_offer:"",auto_cvr_status:2,auto_start_hour:"0",auto_end_hour:"23",auto_cvr_max:"",auto_cvr_min:"",target_buzz_rate:""}});s((()=>a.msg),((e,l)=>{var a,r,t,u;g.ruleForm.offer_id=e.offer_id,g.ruleForm.adv_offer=e.adv_offer;let o=e.fenix_cvr;o&&0!==Object.keys(o).length&&(g.ruleForm.id=o.id,g.ruleForm.auto_cvr_status=null!=(a=o.auto_cvr_status)?a:2,g.ruleForm.auto_start_hour=o.auto_start_hour?o.auto_start_hour.toString():"0",g.ruleForm.auto_end_hour=o.auto_end_hour?o.auto_end_hour.toString():"23",g.ruleForm.auto_cvr_max=null!=(r=o.auto_cvr_max)?r:"",g.ruleForm.auto_cvr_min=null!=(t=o.auto_cvr_min)?t:"",g.ruleForm.target_buzz_rate=null!=(u=o.target_buzz_rate)?u:"")}),{deep:!0,immediate:!0});w((()=>{let{auto_cvr_status:e,auto_cvr_max:l,auto_cvr_min:a,target_buzz_rate:r}=g.ruleForm;return`${1===e?"开":"关"}_${l}_${a}_${r}`}));const b=["id","auto_cvr_status","auto_start_hour","auto_end_hour","auto_cvr_max","auto_cvr_min","target_buzz_rate"],F=[],k=()=>{let e=t(r(g.ruleForm,b),F);0===e.id&&delete e.id,l("updateData",e),l("update:visible",!1)};return(e,l)=>{const a=d("el-form-item"),r=d("el-switch"),t=d("el-time-select"),o=d("el-input"),i=d("el-form"),s=d("el-button");return c(),m("div",null,[p(i,{ref_key:"ruleFormRef",ref:u,enctype:"multipart/form-data",rules:h(v),model:h(g).ruleForm,"label-width":"150px","label-position":"right"},{default:f((()=>[_("div",Ne,[y(" Offer "),p(a,{class:"self-el-form-item",label:"Offer:",prop:"offer_id"},{default:f((()=>[_("div",$e,[_("span",{textContent:q(h(g).ruleForm.offer_id)},null,8,Ke)])])),_:1}),y(" Offer "),p(a,{class:"self-el-form-item",label:"Adv Offer:",prop:"adv_offer"},{default:f((()=>[_("div",Ie,[_("span",{textContent:q(h(g).ruleForm.adv_offer)},null,8,Me)])])),_:1}),y(" Offer "),p(a,{class:"self-el-form-item",label:"Status:",prop:"auto_cvr_status"},{default:f((()=>[p(r,{modelValue:h(g).ruleForm.auto_cvr_status,"onUpdate:modelValue":l[0]||(l[0]=e=>h(g).ruleForm.auto_cvr_status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),p(a,{class:"self-el-form-item",label:"Start Hour:",prop:"start_hour"},{default:f((()=>[p(t,{modelValue:h(g).ruleForm.auto_start_hour,"onUpdate:modelValue":l[1]||(l[1]=e=>h(g).ruleForm.auto_start_hour=e),placeholder:"Start time",start:"00:00",step:"01:00",end:"23:00",format:"H",class:"form-dialog"},null,8,["modelValue"])])),_:1}),p(a,{class:"self-el-form-item",label:"End Hour:",prop:"end_hour"},{default:f((()=>[p(t,{modelValue:h(g).ruleForm.auto_end_hour,"onUpdate:modelValue":l[2]||(l[2]=e=>h(g).ruleForm.auto_end_hour=e),placeholder:"End time",start:"00:00",step:"01:00",end:"23:00",format:"H",class:"form-dialog"},null,8,["modelValue"])])),_:1}),p(a,{class:"self-el-form-item",label:"CVR Max:",prop:"auto_cvr_max"},{default:f((()=>[p(o,{modelValue:h(g).ruleForm.auto_cvr_max,"onUpdate:modelValue":l[3]||(l[3]=e=>h(g).ruleForm.auto_cvr_max=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1}),p(a,{class:"self-el-form-item",label:"CVR Min:",prop:"auto_cvr_min"},{default:f((()=>[p(o,{modelValue:h(g).ruleForm.auto_cvr_min,"onUpdate:modelValue":l[4]||(l[4]=e=>h(g).ruleForm.auto_cvr_min=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1}),p(a,{class:"self-el-form-item",label:"Target Buzz Rate:",prop:"target_buzz_rate"},{default:f((()=>[p(o,{modelValue:h(g).ruleForm.target_buzz_rate,"onUpdate:modelValue":l[5]||(l[5]=e=>h(g).ruleForm.target_buzz_rate=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),y(" form "),y(" footer "),_("div",Le,[p(s,{type:"primary",onClick:l[6]||(l[6]=S((e=>{var l;(l=u.value)&&l.validate((e=>{if(!e)return!1;k()}))}),["prevent"]))},{default:f((()=>[Be])),_:1})])])}}});const Ze={class:"content-con flex column"},Je={class:"flex jc-start ai-center form-one"},Qe=["textContent"],Ye={class:"flex jc-start ai-center form-one"},Ge=F(" BUZZ "),We=F(" SDK "),Xe=F(" BUZZ SYNC "),el=F(" Direct "),ll={class:"flex jc-start ai-center form-one"},al={key:0},rl={key:1},tl={class:"flex jc-start ai-center form-one"},ul={class:"flex jc-start ai-center form-one"},ol={class:"flex jc-start ai-center form-one"},il={class:"flex jc-start ai-center form-one"},sl={class:"flex jc-start ai-center form-one"},nl={class:"form-one"},dl={class:"flex jc-start ai-center form-one"},cl={class:"flex jc-start ai-center form-one"},ml={class:"flex jc-start ai-center form-one"},_l={class:"form-one"},pl={class:"w100 flex ai-center jc-start mb-10"},fl={class:"form-one"},vl={class:"flex ai-center jc-start mb-10"},gl={class:"text-wrap"},bl={class:"flex jc-start ai-center form-one"},hl={class:"flex jc-start ai-center form-one"},yl={class:"flex jc-start ai-center form-one"},Fl={class:"flex jc-start ai-center form-one"},Vl={class:"w100 flex"},wl=F(" Save ");var kl=k(o({setup(e){const l=P(),a="此项必填";let r=(e,l,a)=>{0!==l.length?(e=>{let l=!0;return e.map((e=>{for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)){const r=e[a];if((""===r||void 0===r)&&0!==r){l=!1;break}}})),l})(l)?a(void 0):a(new Error("不允许有空值")):a(void 0)},t=(e,l,r)=>{0!==l.length?l.length>1?r(new Error("只能填选一个国家")):r(void 0):r(new Error(a))};const o=V(),F={id:void 0,offer_id:"",adv_offer:"",create_type:1,channel:"",channel_type:1,adv_status:1,conversion_flow:void 0,status:1,title:"",pkg:"",attribute_provider:"",pid:"",platform:1,country:[],revenue:void 0,traffic:[],adtype:38,update_date:"",adv_tracking_link:"",target_cvr:void 0,cvr_status:2,is_s2s:2,s2s_tracking_link:"",app_url:"",site_type:"rule_value",site_value:"",description:"",fenix_site:{},fenix_cvr:{},site_black_value:""};let k=V(!1);const x=i({options:{channel:[{id:"",short_name:""}],country:[{id:"",short_name:"",zh_cn:""}],conversion_flow:[{value:1,label:"CPI"},{value:2,label:"CPA"},{value:9,label:"SDK"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],site_type:[{value:"rule_sdkindex",label:"匹配SDK自定义"},{value:"rule_pubredirect",label:"透传渠道ID"},{value:"rule_slotid",label:"渠道slotid"},{value:"rule_value",label:"固定值"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}]},rules:{channel:[{required:!0,message:a,trigger:["blur","change"]}],channel_type:[{required:!0,message:a,trigger:["blur","change"]}],status:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],pkg:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]},{validator:t,trigger:["blur","change"]}],revenue:[{required:!0,message:a,trigger:["blur","change"]}],traffic:[{required:!1,validator:r,trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:a,trigger:["blur","change"]}],site_type:[{required:!0,message:a,trigger:["blur","change"]}],is_s2s:[{required:!0,message:a,trigger:["blur","change"]}]},choiceRules:{no_required:[{required:!1}],s2s_tracking_link:[{required:!0,message:a,trigger:["blur","change"]}],app_url:[{required:!0,message:a,trigger:["blur","change"]}],site_value:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,a)=>{if(l){a(l.split(",").length>1e3?new Error("site value 的值不可大于1000个"):void 0)}else a(void 0)},trigger:["blur","change"]}]},ruleForm:F,search:{adv_offer:""}}),j=i({channel:[{required:!0,message:a,trigger:["blur","change"]}],channel_type:[{required:!0,message:a,trigger:["blur","change"]}],status:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],pkg:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]},{validator:t,trigger:["blur","change"]}],revenue:[{required:!0,message:a,trigger:["blur","change"]}],traffic:[{required:!1,validator:r,trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:a,trigger:["blur","change"]}],site_type:[{required:!0,message:a,trigger:["blur","change"]}],is_s2s:[{required:!0,message:a,trigger:["blur","change"]}]});let C=V(""),T=V(""),Z=V(""),Q=V(!1),Y=V(!1);const G=async()=>{k.value=!0;const e=D.cloneDeep(x.ruleForm);let l=u({},e);if(e.conversion_flow&&(l.conversion_flow=e.conversion_flow),l.country=e.country[0],l.revenue=parseFloat(l.revenue),l.target_cvr=parseFloat(l.target_cvr),l.fenix_site.day_limit&&(l.fenix_site.day_limit=parseFloat(l.fenix_site.day_limit)),l.fenix_site.day_limit_value?l.fenix_site.day_limit_value=parseFloat(l.fenix_site.day_limit_value):delete l.fenix_site.day_limit_value,0!==e.traffic.length){const a=(e=>{const l=[];return e.map((e=>{let a=u({},e);return e.payout&&(a.payout=Number(e.payout)),e.cap_daily&&(a.cap_daily=Number(e.cap_daily)),l.push(a),e})),l})(e.traffic);l.traffic=JSON.stringify(a)}else delete l.traffic;let a,r=l.fenix_cvr;r&&0===Object.keys(r).length&&delete l.fenix_cvr,"create"===Z.value&&(a=await B(l)),"edit"===Z.value&&(a=await H(l)),k.value=!1,J(a)&&window.close()},W=()=>{Q.value=!0},X=w((()=>x.ruleForm.site_value?x.ruleForm.site_value.split(",").length:0)),ee=async()=>{const{data:e}=await $();return x.options.channel=e,e},ae=async()=>{const{data:e}=await K();return x.options.country=e,e};i({ruleForm:F}),n((async()=>{re()}));const re=async()=>{C.value=l.currentRoute.value.name,T.value=l.currentRoute.value.params.id,"fenix-offer-create"===C.value&&((async()=>{const e=await N();if(200===(null==e?void 0:e.code)){const{offer_id:l}=e;x.ruleForm.offer_id=l.toString()}})(),Z.value="create"),"fenix-offer-edit"===C.value&&(T.value=l.currentRoute.value.params.id,Z.value="edit",te()),await(async()=>await Promise.all([ee(),ae()]))()},te=async()=>{const{data:e}=await E(T.value);x.ruleForm=u({},e),x.ruleForm.country=[e.country],x.search.adv_offer=e.adv_offer,x.ruleForm.traffic=e.traffic?JSON.parse(e.traffic):[],O(x.ruleForm)},ue=w((()=>"rule_value"===x.ruleForm.site_type));s((()=>x.ruleForm.traffic),((e,l)=>{}),{immediate:!0,deep:!0}),s((()=>x.search.adv_offer),((e,l)=>{x.ruleForm.adv_offer=e})),s((()=>x.ruleForm.adv_offer),((e,l)=>{x.ruleForm.create_type=e?2:1}),{immediate:!0,deep:!0});const oe=e=>{},ie=async()=>{if("edit"===Z.value)return!1;const e=x.ruleForm.adv_offer;if(!e)return!1;const l={adv_offer:e,platform:x.ruleForm.platform};if(e&&e.includes("_")){x.ruleForm.channel_type=2,x.ruleForm.adtype=39;const e=await I(l),{data:a}=e;200===e.status?(x.ruleForm.adv_status=1,ne(a)):x.ruleForm.adv_status=2}else{let a=/^bs(\S+)/;if(/^bz(\S+)/.test(e)){x.ruleForm.channel_type=1,x.ruleForm.adtype=38;const{data:e}=await M(l);x.ruleForm.adv_status=e.status?e.status:2,se(e)}if(a.test(e)){x.ruleForm.channel_type=4,x.ruleForm.adtype=40;const{data:e}=await L(l);x.ruleForm.adv_status=e.status?e.status:2,se(e)}}},se=e=>{x.ruleForm.channel=e.channel,x.ruleForm.attribute_provider=e.attribute_provider,x.ruleForm.conversion_flow=e.conversion_flow,x.ruleForm.title=e.title,x.ruleForm.pkg=e.pkg_name,x.ruleForm.pid=e.pid,x.ruleForm.platform=e.platform,x.ruleForm.revenue=e.payout,x.ruleForm.adv_tracking_link=e.tracking_link,de(e.country)},ne=e=>{var l;x.ruleForm.pkg=e.app_pkg_name,x.ruleForm.channel=e.channel,x.ruleForm.country=e.country;const a=null==(l=x.options.platform.find((l=>l.label===e.platform)))?void 0:l.value;x.ruleForm.platform=a||1,x.ruleForm.revenue=e.revenue,x.ruleForm.title=e.title,x.ruleForm.adv_tracking_link=e.tracking_link,x.ruleForm.conversion_flow=9},de=e=>{e&&(Array.isArray(e)?x.ruleForm.country=e:x.ruleForm.country=[e])},ce=e=>{e.site_value.length,x.ruleForm.site_value=e.site_value,x.ruleForm.site_black_value=e.site_black_value,x.ruleForm.fenix_site=O(e)},me=e=>{x.ruleForm.fenix_cvr=O(e)},_e=()=>{Y.value=!0},pe=w((()=>{if(x.ruleForm.fenix_cvr){let{auto_cvr_status:e,auto_cvr_max:l,auto_cvr_min:a,target_buzz_rate:r}=x.ruleForm.fenix_cvr;return`${1===e?"开":"关"}_${l}_${a}_${r}`}return""}));return(e,l)=>{const a=d("el-form-item"),r=d("el-button"),t=d("el-input"),u=d("el-option"),i=d("el-select"),s=d("el-radio"),n=d("el-radio-group"),F=d("el-switch"),V=d("el-form"),w=d("el-dialog"),C=A("loading");return z((c(),m("div",null,[y(" form "),p(V,{ref_key:"ruleForm",ref:o,enctype:"multipart/form-data",rules:h(j),model:h(x).ruleForm,"label-width":"240px","label-position":"right"},{default:f((()=>[_("div",Ze,[y(" Offer "),p(a,{label:"Offer:",prop:"offer"},{default:f((()=>[_("div",Je,[_("span",{textContent:q(h(x).ruleForm.offer_id)},null,8,Qe)])])),_:1}),y(" Adv Offer "),p(a,{label:"Adv Offer:",prop:"adv_offer"},{default:f((()=>[_("div",Ye,[p(t,{modelValue:h(x).search.adv_offer,"onUpdate:modelValue":l[0]||(l[0]=e=>h(x).search.adv_offer=e),placeholder:"Please input",class:"input-with-select",disabled:"edit"===h(Z)},R({_:2},["create"===h(Z)?{name:"append",fn:f((()=>[p(r,{type:"primary",icon:"Search",onClick:ie})]))}:void 0]),1032,["modelValue","disabled"])])])),_:1}),y(" Channel "),p(a,{label:"Channel:",prop:"channel"},{default:f((()=>[p(i,{modelValue:h(x).ruleForm.channel,"onUpdate:modelValue":l[1]||(l[1]=e=>h(x).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(x).options.channel,(e=>(c(),b(u,{key:e.id,label:e.short_name,value:e.short_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Channel Type "),p(a,{label:"Channel Type:",prop:"channel_type"},{default:f((()=>[p(n,{modelValue:h(x).ruleForm.channel_type,"onUpdate:modelValue":l[2]||(l[2]=e=>h(x).ruleForm.channel_type=e),class:"form-one"},{default:f((()=>[p(s,{label:1},{default:f((()=>[Ge])),_:1}),p(s,{label:2},{default:f((()=>[We])),_:1}),p(s,{label:4},{default:f((()=>[Xe])),_:1}),p(s,{label:5},{default:f((()=>[el])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(" Adv Status "),p(a,{label:"Adv Status:",prop:"adv_status"},{default:f((()=>[_("div",ll,[1===h(x).ruleForm.adv_status?(c(),m("span",al,"开")):y("v-if",!0),2===h(x).ruleForm.adv_status?(c(),m("span",rl,"关")):y("v-if",!0)])])),_:1}),y(" conversion_flow "),p(a,{label:"Conversion Flow:",prop:"conversion_flow"},{default:f((()=>[p(i,{modelValue:h(x).ruleForm.conversion_flow,"onUpdate:modelValue":l[3]||(l[3]=e=>h(x).ruleForm.conversion_flow=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(x).options.conversion_flow,(e=>(c(),b(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Status "),p(a,{label:"Status:",prop:"status"},{default:f((()=>[_("div",tl,[p(F,{modelValue:h(x).ruleForm.status,"onUpdate:modelValue":l[4]||(l[4]=e=>h(x).ruleForm.status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),y(" Offer Title "),p(a,{label:"Offer Title:",prop:"title"},{default:f((()=>[_("div",ul,[p(t,{modelValue:h(x).ruleForm.title,"onUpdate:modelValue":l[5]||(l[5]=e=>h(x).ruleForm.title=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Package Name "),p(a,{label:"Package Name:",prop:"pkg"},{default:f((()=>[_("div",ol,[p(t,{modelValue:h(x).ruleForm.pkg,"onUpdate:modelValue":l[6]||(l[6]=e=>h(x).ruleForm.pkg=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Attribute Provider "),p(a,{label:"Attribute Provider:",prop:"attribute_provider"},{default:f((()=>[p(i,{modelValue:h(x).ruleForm.attribute_provider,"onUpdate:modelValue":l[7]||(l[7]=e=>h(x).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(x).options.attribute_provider,(e=>(c(),b(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Pid "),p(a,{label:"Pid:",prop:"pid"},{default:f((()=>[_("div",il,[p(t,{modelValue:h(x).ruleForm.pid,"onUpdate:modelValue":l[8]||(l[8]=e=>h(x).ruleForm.pid=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Platform "),p(a,{label:"Platform:",prop:"platform"},{default:f((()=>[p(i,{modelValue:h(x).ruleForm.platform,"onUpdate:modelValue":l[9]||(l[9]=e=>h(x).ruleForm.platform=e),filterable:"",class:"form-one",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(x).options.platform,(e=>(c(),b(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Country "),p(a,{label:"Country:",prop:"country"},{default:f((()=>[p(i,{modelValue:h(x).ruleForm.country,"onUpdate:modelValue":l[10]||(l[10]=e=>h(x).ruleForm.country=e),filterable:"",class:"form-one",multiple:"",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(x).options.country,(e=>(c(),b(u,{key:e.id,label:e.short_name+"-"+e.zh_cn,value:e.short_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Revenue "),p(a,{label:"Revenue:",prop:"revenue"},{default:f((()=>[_("div",sl,[p(t,{modelValue:h(x).ruleForm.revenue,"onUpdate:modelValue":l[11]||(l[11]=e=>h(x).ruleForm.revenue=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Manage Traffic "),p(a,{label:"Manage Traffic:",prop:"traffic"},{default:f((()=>[_("div",nl,[p(h(le),{ref:"traffic",list:h(x).ruleForm.traffic,"onUpdate:list":l[12]||(l[12]=e=>h(x).ruleForm.traffic=e),offer:h(x).ruleForm.offer_id,onKk:oe},null,8,["list","offer"])])])),_:1}),y(" Adv Tracking Link "),p(a,{label:"Adv Tracking Link:",prop:"adv_tracking_link"},{default:f((()=>[_("div",dl,[p(t,{modelValue:h(x).ruleForm.adv_tracking_link,"onUpdate:modelValue":l[13]||(l[13]=e=>h(x).ruleForm.adv_tracking_link=e),rows:4,autosize:"",type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Target CVR "),p(a,{label:"Target CVR:",prop:"target_cvr"},{default:f((()=>[_("div",cl,[p(t,{modelValue:h(x).ruleForm.target_cvr,"onUpdate:modelValue":l[14]||(l[14]=e=>h(x).ruleForm.target_cvr=e),type:"number",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" CVR Status "),p(a,{label:"CVR Status:",prop:"cvr_status"},{default:f((()=>[_("div",ml,[p(F,{modelValue:h(x).ruleForm.cvr_status,"onUpdate:modelValue":l[15]||(l[15]=e=>h(x).ruleForm.cvr_status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),y(" Auto CVR "),p(a,{label:"Auto CVR:",prop:"auto_cvr"},{default:f((()=>[_("div",_l,[_("div",pl,[p(r,{class:"cp mr-10",icon:"Tools",circle:"",onClick:_e}),_("span",null,q(h(pe)),1)])])])),_:1}),y(" Site Type "),p(a,{label:"Site Type:",prop:"site_type"},{default:f((()=>[p(i,{modelValue:h(x).ruleForm.site_type,"onUpdate:modelValue":l[16]||(l[16]=e=>h(x).ruleForm.site_type=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(x).options.site_type,(e=>(c(),b(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Site Value "),p(a,{label:"Site Value:",prop:"site_value",rules:h(ue)?h(x).choiceRules.site_value:h(x).choiceRules.no_required},{default:f((()=>[_("div",fl,[_("div",vl,[p(r,{class:"cp mr-10",icon:"Tools",circle:"",onClick:W}),_("span",null,q(h(X)),1)]),_("div",null,[y(' <el-input\n                v-model="state.ruleForm.site_value"\n                type="textarea"\n                autosize\n                :rows="4"\n                placeholder="Please input"\n                class="input-with-select siteValue"\n              /> '),_("p",gl,q(h(x).ruleForm.site_value),1)])])])),_:1},8,["rules"]),y(" S2S Async "),p(a,{label:"S2S Async:",prop:"is_s2s"},{default:f((()=>[_("div",bl,[p(F,{modelValue:h(x).ruleForm.is_s2s,"onUpdate:modelValue":l[17]||(l[17]=e=>h(x).ruleForm.is_s2s=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),y(" S2S Tracking Link "),p(a,{label:"S2S Tracking Link:",prop:"s2s_tracking_link",rules:1===h(x).ruleForm.is_s2s?h(x).choiceRules.s2s_tracking_link:h(x).choiceRules.no_required},{default:f((()=>[_("div",hl,[p(t,{modelValue:h(x).ruleForm.s2s_tracking_link,"onUpdate:modelValue":l[18]||(l[18]=e=>h(x).ruleForm.s2s_tracking_link=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1},8,["rules"]),y(" Preview URL "),p(a,{label:"Preview URL:",prop:"app_url",rules:1===h(x).ruleForm.is_s2s?h(x).choiceRules.app_url:h(x).choiceRules.no_required},{default:f((()=>[_("div",yl,[p(t,{modelValue:h(x).ruleForm.app_url,"onUpdate:modelValue":l[19]||(l[19]=e=>h(x).ruleForm.app_url=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1},8,["rules"]),y(" Description "),p(a,{label:"Description:",prop:"description"},{default:f((()=>[_("div",Fl,[p(t,{modelValue:h(x).ruleForm.description,"onUpdate:modelValue":l[20]||(l[20]=e=>h(x).ruleForm.description=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" end ")])])),_:1},8,["rules","model"]),y(" form "),y(" footer "),_("div",Vl,[p(r,{type:"primary",onClick:l[21]||(l[21]=S((e=>(async e=>{e&&await e.validate(((e,l)=>{e&&G()}))})(o.value)),["prevent"]))},{default:f((()=>[wl])),_:1})]),y(" dialog "),p(w,{modelValue:h(Q),"onUpdate:modelValue":l[23]||(l[23]=e=>U(Q)?Q.value=e:Q=e),title:"Site",width:"70%"},{default:f((()=>[p(Ee,{msg:h(x).ruleForm,onUpdateData:ce,visible:h(Q),"onUpdate:visible":l[22]||(l[22]=e=>U(Q)?Q.value=e:Q=e)},null,8,["msg","visible"])])),_:1},8,["modelValue"]),y(" dialog "),p(w,{modelValue:h(Y),"onUpdate:modelValue":l[25]||(l[25]=e=>U(Y)?Y.value=e:Y=e),title:"Auto CVR",width:"70%"},{default:f((()=>[p(He,{msg:h(x).ruleForm,onUpdateData:me,visible:h(Y),"onUpdate:visible":l[24]||(l[24]=e=>U(Y)?Y.value=e:Y=e)},null,8,["msg","visible"])])),_:1},8,["modelValue"])])),[[C,h(k)]])}}}),[["__scopeId","data-v-2659fc52"]]);export{kl as default};