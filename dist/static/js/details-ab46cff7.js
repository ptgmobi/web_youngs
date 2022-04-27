var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,t=(l,a,r)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r,o=(e,o)=>{for(var u in o||(o={}))a.call(o,u)&&t(e,u,o[u]);if(l)for(var u of l(o))r.call(o,u)&&t(e,u,o[u]);return e};import{d as u,z as i,w as s,C as n,r as d,o as c,k as m,v as p,x as _,h as f,F as v,l as g,c as b,j as h,i as y,y as F,a as V,b as w,aj as x,t as k,ac as j,q,s as U,m as C,f as S,ae as P,ai as O,O as A,K as z}from"./vendor-ede5cb5d.js";import{_ as R}from"./lodash-79cb6bd1.js";import{l as D,p as T,q as E,r as N,s as $,t as K,u as I,v as M,w as L,x as B}from"./fenix-0c95438f.js";import{c as H}from"./clipboard-d56e9819.js";import{m as Z}from"./message-980c806a.js";import{b as J,r as Y}from"./new-format-6b24aa44.js";import{_ as G}from"./index-952548cc.js";const Q={class:"flex jc-end"},W=F(" Add "),X={class:"flex"},ee=F(" Copy "),le=u({props:{list:{require:!0,default:()=>[],type:Array},offer:{require:!0,default:"",type:String}},emits:["kk","up"],setup(e,{emit:l}){const a=e,r=i({pub:[{id:"",pub_name:""}]}),t={55527824:.1,95108831:.1,95846929:.005,59845210:.005};let o=i({manage_traffic:[]});const u={pub:"",slotid:"",payout:void 0,cap_daily:void 0,pub_status:1,pub_tracking_link:""},F=()=>{o.manage_traffic.push(R.cloneDeep(u))};return s((()=>a.list),((e,l)=>{o.manage_traffic=e}),{immediate:!0,deep:!0}),s((()=>o.manage_traffic),((e,l)=>{}),{immediate:!0,deep:!0}),n((()=>{(async()=>{const{data:e}=await D();r.pub=e})(),F()})),(e,l)=>{const u=d("el-button"),i=d("el-option"),s=d("el-select"),n=d("el-table-column"),V=d("el-input"),w=d("el-switch"),x=d("el-table");return c(),m("div",null,[p("div",Q,[_(u,{type:"primary",onClick:F},{default:f((()=>[W])),_:1})]),_(x,{class:"mt-10",data:h(o).manage_traffic,style:{width:"100%"},border:""},{default:f((()=>[_(n,{label:"Pub Name",align:"center"},{default:f((e=>[_(s,{modelValue:e.row.pub,"onUpdate:modelValue":l=>e.row.pub=l,filterable:"",clearable:"",placeholder:"",onChange:l=>(e=>{const{row:l}=e,o="http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}";l.pub_tracking_link=o;const u=r.pub.find((e=>e.pub_name===l.pub));l.slotid=u.slot_id,l.pub_status=u.status,l.pub_tracking_link=o.replace("{offer}",a.offer).replace("{slot}",u.slot_id),t[u.slot_id]&&(l.payout=t[u.slot_id])})(e)},{default:f((()=>[(c(!0),m(v,null,g(h(r).pub,(e=>{var l;return c(),b(i,{key:e.id,label:e.pub_name,value:null!=(l=e.pub_name)?l:e.id},null,8,["label","value"])})),128))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),_(n,{label:"Payout",align:"center"},{default:f((e=>[_(V,{modelValue:e.row.payout,"onUpdate:modelValue":l=>e.row.payout=l,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),_(n,{label:"Cap Daily",align:"center"},{default:f((e=>[_(V,{modelValue:e.row.cap_daily,"onUpdate:modelValue":l=>e.row.cap_daily=l,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),_(n,{label:"Operation",align:"center",width:"180px"},{default:f((e=>[p("div",X,[_(u,{class:"mr-10",type:"danger",icon:"Delete",circle:"",onClick:l=>(e=>{const l=e.$index;o.manage_traffic.splice(l,1)})(e)},null,8,["onClick"]),_(w,{modelValue:e.row.pub_status,"onUpdate:modelValue":l=>e.row.pub_status=l,"active-value":1,"inactive-value":2,class:"mr-10",onChange:e=>{}},null,8,["modelValue","onUpdate:modelValue","onChange"]),e.row.pub_tracking_link?(c(),b(u,{key:0,class:"cp",type:"primary",onClick:l=>(({row:e})=>{const{pub_tracking_link:l}=e;H(l)})(e)},{default:f((()=>[ee])),_:2},1032,["onClick"])):y("v-if",!0)])])),_:1})])),_:1},8,["data"])])}}}),ae={class:"w100"},re={class:"content-con flex column"},te={class:"flex jc-start ai-center form-one"},oe={class:"w100 flex mt-10"},ue=F("Save"),ie=u({emits:["update:visible","uploadData"],setup(e,{emit:l}){const a=V(),r=/\S/;const t=w((()=>J(o.ruleForm.site_list,1,r).data));let o=i({ruleForm:{site_list:""},rules:{site_list:[{required:!0,message:"必填项",trigger:["blur"]},{validator:(e,l,a)=>{if(""!==l){a(J(l,1,r).type?void 0:new Error("格式错误！"))}else a(new Error("必填项"))},trigger:["blur"]}]}});const u=()=>{l("uploadData",t.value),o.ruleForm.site_list="",l("update:visible",!1)};return(e,l)=>{const r=d("el-input"),t=d("el-form-item"),i=d("el-form"),s=d("el-button");return c(),m("div",ae,[_(i,{ref_key:"ruleFormRef",ref:a,enctype:"multipart/form-data",rules:h(o).rules,model:h(o).ruleForm,"label-width":"140px","label-position":"right"},{default:f((()=>[p("div",re,[y(" Offer "),_(t,{label:"Site:",prop:"site_list"},{default:f((()=>[p("div",te,[_(r,{modelValue:h(o).ruleForm.site_list,"onUpdate:modelValue":l[0]||(l[0]=e=>h(o).ruleForm.site_list=e),rows:4,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" end ")])])),_:1},8,["rules","model"]),p("div",oe,[_(s,{type:"primary",onClick:l[1]||(l[1]=e=>{var l;(l=a.value)&&l.validate((e=>{if(!e)return!1;u()}))})},{default:f((()=>[ue])),_:1})])])}}});const se={class:"w100"},ne=(e=>(q("data-v-661f6240"),e=e(),U(),e))((()=>p("div",{class:"mb-10"},null,-1))),de={class:"control-box flex jc-between ai-start w100"},ce=F("增量生成"),me=F("批量上传"),pe=F("清空"),_e={class:"body-box mt-10"},fe={class:"flex"};var ve=G(u({props:{msg:{require:!0,default:()=>"",type:String}},emits:["update:msg"],setup(e,{emit:l}){const a=e;let r=V(!1);let t=i({ruleForm:{site_num:0,site_value:(o=a.msg,o?o.split(","):[])},rules:{}});var o;const u=w((()=>t.ruleForm.site_value));w((()=>t.ruleForm.site_value.length));const s=()=>{if(t.ruleForm.site_num>0){let e=Math.floor(t.ruleForm.site_num);for(let l=0;l<e;l++){const e=Y(8);t.ruleForm.site_value.push(e)}}t.ruleForm.site_num=0},n=()=>{r.value=!0},v=()=>{t.ruleForm.site_value=[]},g=e=>{e.map((e=>{t.ruleForm.site_value.push(e[0])}))};return x((()=>{const e=t.ruleForm.site_value.join(",");l("update:msg",e)})),(e,l)=>{const a=d("el-button"),o=d("el-input"),i=d("el-table-column"),b=d("el-table"),F=d("el-dialog");return c(),m("div",se,[ne,y(" 操作 "),p("div",de,[_(o,{modelValue:h(t).ruleForm.site_num,"onUpdate:modelValue":l[0]||(l[0]=e=>h(t).ruleForm.site_num=e),placeholder:"Please input",type:"number",max:"1000",class:"input-with-select search-con"},{append:f((()=>[_(a,{onClick:s},{default:f((()=>[ce])),_:1})])),_:1},8,["modelValue"]),_(a,{class:"cp mb-10",onClick:n,type:"primary"},{default:f((()=>[me])),_:1}),_(a,{class:"cp mb-10",onClick:v,type:"primary"},{default:f((()=>[pe])),_:1})]),y(" table "),p("div",_e,[_(b,{data:h(u),class:"w100",height:"400px",border:""},{default:f((()=>[_(i,{label:"site_id",align:"center"},{default:f((e=>[p("div",null,[p("span",null,k(e.row),1)])])),_:1}),_(i,{label:"设置",align:"center"},{default:f((e=>[p("div",fe,[_(a,{type:"danger",icon:"Delete",circle:"",onClick:l=>(e=>{const{$index:l,row:a}=e;t.ruleForm.site_value.splice(l,1)})(e)},null,8,["onClick"])])])),_:1})])),_:1},8,["data"])]),y(" dialog "),_(F,{modelValue:h(r),"onUpdate:modelValue":l[2]||(l[2]=e=>j(r)?r.value=e:r=e),title:"site",width:"60%"},{default:f((()=>[_(ie,{visible:h(r),"onUpdate:visible":l[1]||(l[1]=e=>j(r)?r.value=e:r=e),onUploadData:g},null,8,["visible"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-661f6240"]]);const ge={class:"content-con flex column"},be={class:"flex jc-start ai-center form-one"},he=["textContent"],ye={class:"flex jc-start ai-center form-one"},Fe=["textContent"],Ve={class:"flex jc-start ai-center form-one"},we={class:"ml-10"},xe={class:"flex jc-start ai-center form-one"},ke={class:"ml-10"},je={class:"flex jc-start ai-center form-one"},qe=F("默认"),Ue=F("自定义"),Ce={class:"ml-10"},Se={class:"flex jc-start ai-center form-one"},Pe={class:"flex jc-start ai-center form-one"},Oe={class:"ml-10"},Ae={class:"flex jc-start ai-center form-one"},ze={class:"flex jc-start ai-center form-one"},Re={class:"w100 flex"},De=F(" 提交 "),Te=u({props:{msg:{require:!0,default:()=>({}),type:Object}},emits:["update:visible","updateData"],setup(e,{emit:l}){const a=e,r=V();let t="必填项";const o=(e,l,a)=>{if(l){a(l.split(",").length>1e3?new Error("site value 的值不可大于1000个"):void 0)}else a(void 0)},u=i({offer_id:[{required:!0,message:t,trigger:["blur","change"]}],adv_offer:[{required:!0,message:t,trigger:["blur","change"]}],status_day:[{required:!0,message:t,trigger:["blur","change"]}],day_limit:[{required:!0,message:t,trigger:["blur","change"]},{validator:(e,l,a)=>{if(l){let e=Number(l);Number.isInteger(e)&&Number.isSafeInteger(e)?a(e>5?void 0:new Error("必须为大于5的整数")):a(new Error("必须为整数"))}else a(void 0)},trigger:["blur","change"]}],day_limit_type:[{required:!0,message:t,trigger:["blur","change"]}],day_limit_value:[{required:!0,message:t,trigger:["blur","change"]}],status_hour:[{required:!0,message:t,trigger:["blur","change"]}]}),n=i({site_value_required:[{required:!0,message:t,trigger:["blur","change"]},{validator:o,trigger:["blur","change"]}],site_value_no_required:[{required:!1,message:t,trigger:["blur","change"]},{validator:o,trigger:["blur","change"]}]});let v=i({ruleForm:{offer_id:"",adv_offer:"",channel_type:2,status_day:2,day_limit:15,day_limit_type:1,day_limit_value:"",status_hour:2,site_value:""}});const g=w((()=>v.ruleForm.site_value?v.ruleForm.site_value.split(",").length:0)),x=w((()=>"rule_value"===a.msg.site_type));s((()=>a.msg),((e,l)=>{let r=a.msg.fenix_site,t=r.status_day||2,o=r.status_hour||2;2===a.msg.channel_type&&(t=2,o=2),v.ruleForm={offer_id:r.offer_id||a.msg.offer_id,adv_offer:r.adv_offer||a.msg.adv_offer,channel_type:a.msg.channel_type,status_day:t,day_limit:r.day_limit||15,day_limit_type:r.day_limit_type||1,day_limit_value:r.day_limit_value||"",status_hour:o,site_value:a.msg.site_value}}),{deep:!0,immediate:!0});const q=()=>{l("updateData",v.ruleForm),l("update:visible",!1)};return(e,l)=>{const t=d("el-form-item"),o=d("el-switch"),i=d("info-filled"),s=d("el-icon"),V=d("el-tooltip"),w=d("el-input"),U=d("el-radio"),S=d("el-radio-group"),P=d("el-form"),O=d("el-button");return c(),m("div",null,[_(P,{ref_key:"ruleFormRef",ref:r,enctype:"multipart/form-data",rules:h(u),model:h(v).ruleForm,"label-width":"150px","label-position":"right"},{default:f((()=>[p("div",ge,[y(" Offer "),_(t,{label:"Offer:",prop:"offer_id"},{default:f((()=>[p("div",be,[p("span",{textContent:k(h(v).ruleForm.offer_id)},null,8,he)])])),_:1}),y(" Offer "),_(t,{label:"Adv Offer:",prop:"adv_offer"},{default:f((()=>[p("div",ye,[p("span",{textContent:k(h(v).ruleForm.adv_offer)},null,8,Fe)])])),_:1}),y(" Offer "),_(t,{label:"分天优选:",prop:"status_day"},{default:f((()=>[p("div",Ve,[_(o,{disabled:2==a.msg.channel_type,modelValue:h(v).ruleForm.status_day,"onUpdate:modelValue":l[0]||(l[0]=e=>h(v).ruleForm.status_day=e),"active-value":1,"inactive-value":2},null,8,["disabled","modelValue"]),p("span",we,[_(V,{content:"根据昨天数据筛选符合条件的site_id使用",placement:"right-start"},{default:f((()=>[_(s,null,{default:f((()=>[_(i)])),_:1})])),_:1})])])])),_:1}),_(t,{label:"分天优选启动条件:",prop:"day_limit"},{default:f((()=>[p("div",xe,[_(w,{modelValue:h(v).ruleForm.day_limit,"onUpdate:modelValue":l[1]||(l[1]=e=>h(v).ruleForm.day_limit=e),placeholder:"默认值为15",min:"5",step:"1",class:"input-with-select",type:"number"},null,8,["modelValue"]),p("span",ke,[_(V,{content:"当昨天site_id的平均install数大于等于设定值时才启动自动优选，默认设置为15",placement:"bottom"},{default:f((()=>[_(s,null,{default:f((()=>[_(i)])),_:1})])),_:1})])])])),_:1}),_(t,{label:"分天优选install限制:",prop:"day_limit_type"},{default:f((()=>[p("div",je,[_(S,{class:"flex",modelValue:h(v).ruleForm.day_limit_type,"onUpdate:modelValue":l[2]||(l[2]=e=>h(v).ruleForm.day_limit_type=e)},{default:f((()=>[_(U,{label:1},{default:f((()=>[qe])),_:1}),_(U,{label:2},{default:f((()=>[Ue])),_:1})])),_:1},8,["modelValue"]),p("span",Ce,[_(V,{content:"根据site_id的install数筛选，仅使用大于等于设定值的site_id，默认值为昨天均值除以5",placement:"right-start"},{default:f((()=>[_(s,null,{default:f((()=>[_(i)])),_:1})])),_:1})])])])),_:1}),2===h(v).ruleForm.day_limit_type?(c(),b(t,{key:0,label:"分天优选install限制值:",prop:"day_limit_value"},{default:f((()=>[p("div",Se,[_(w,{type:"number",modelValue:h(v).ruleForm.day_limit_value,"onUpdate:modelValue":l[3]||(l[3]=e=>h(v).ruleForm.day_limit_value=e),placeholder:"",class:"input-with-select"},null,8,["modelValue"])])])),_:1})):y("v-if",!0),_(t,{label:"分时优选:",prop:"status_hour"},{default:f((()=>[p("div",Pe,[_(o,{disabled:2==a.msg.channel_type,modelValue:h(v).ruleForm.status_hour,"onUpdate:modelValue":l[4]||(l[4]=e=>h(v).ruleForm.status_hour=e),"active-value":1,"inactive-value":2},null,8,["disabled","modelValue"]),p("span",Oe,[_(V,{content:"根据前6小时和前2小时数据筛选符合条件的site_id使用，暂不支持自定义",placement:"right-start"},{default:f((()=>[_(s,null,{default:f((()=>[_(i)])),_:1})])),_:1})])])])),_:1}),_(t,{label:"当前渠道数:",prop:"site_value",rules:h(x)?h(n).site_value_required:h(n).site_value_no_required},{default:f((()=>[p("div",Ae,[_(w,{type:"hidden",modelValue:h(g),"onUpdate:modelValue":l[5]||(l[5]=e=>j(g)?g.value=e:null),disabled:""},null,8,["modelValue"]),F(" "+k(h(g)),1)])])),_:1},8,["rules"]),_(t,{label:""},{default:f((()=>[p("div",ze,[_(ve,{msg:h(v).ruleForm.site_value,"onUpdate:msg":l[6]||(l[6]=e=>h(v).ruleForm.site_value=e)},null,8,["msg"])])])),_:1}),y(" end ")])])),_:1},8,["rules","model"]),y(" form "),y(" footer "),p("div",Re,[_(O,{type:"primary",onClick:l[7]||(l[7]=C((e=>{var l;(l=r.value)&&l.validate((e=>{if(!e)return!1;q()}))}),["prevent"]))},{default:f((()=>[De])),_:1})])])}}});const Ee={class:"content-con flex column"},Ne={class:"flex jc-start ai-center form-dialog"},$e=["textContent"],Ke={class:"flex jc-start ai-center form-dialog"},Ie=["textContent"],Me={class:"w100 flex"},Le=F(" 提交 "),Be=u({props:{msg:{require:!0,default:()=>({}),type:Object}},emits:["update:visible","updateData"],setup(e,{emit:l}){const a=e,{handleAjaxNumberKeyFn:r,handleAjaxArrayKeyFn:t}={handleAjaxNumberKeyFn:(e,l)=>{if(0===l.length)return e;let a={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const t=e[r];l.includes(r)?a[r]=Number(t):a[r]=t}return a},handleAjaxArrayKeyFn:(e,l)=>{if(0===l.length)return e;let a={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const t=e[r];l.includes(r)?a[r]=0===t.length?"":t.join(","):a[r]=t}return a}},o=V();let u="必填项";const n=(e,l,a)=>{a(l&&(l>=1e3||l<=0)?new Error("0-1000"):void 0)},v=i({offer_id:[{required:!0,message:u,trigger:["blur","change"]}],adv_offer:[{required:!0,message:u,trigger:["blur","change"]}],auto_cvr_status:[{required:!0,message:u,trigger:["blur","change"]}],auto_cvr_max:[{required:!0,message:u,trigger:["blur","change"]},{validator:n,trigger:["blur","change"]}],auto_cvr_min:[{required:!0,message:u,trigger:["blur","change"]},{validator:n,trigger:["blur","change"]}],target_buzz_rate:[{required:!0,message:u,trigger:["blur","change"]},{validator:(e,l,a)=>{a(l&&(l>=1||l<=0)?new Error("0-1"):void 0)},trigger:["blur","change"]}]});i({});let g=i({ruleForm:{id:"",offer_id:"",adv_offer:"",auto_cvr_status:2,auto_start_hour:"0",auto_end_hour:"23",auto_cvr_max:"",auto_cvr_min:"",target_buzz_rate:""}});s((()=>a.msg),((e,l)=>{var a,r,t,o;g.ruleForm.offer_id=e.offer_id,g.ruleForm.adv_offer=e.adv_offer;let u=e.fenix_cvr;u&&0!==Object.keys(u).length&&(g.ruleForm.id=u.id,g.ruleForm.auto_cvr_status=null!=(a=u.auto_cvr_status)?a:2,g.ruleForm.auto_start_hour=u.auto_start_hour?u.auto_start_hour.toString():"0",g.ruleForm.auto_end_hour=u.auto_end_hour?u.auto_end_hour.toString():"23",g.ruleForm.auto_cvr_max=null!=(r=u.auto_cvr_max)?r:"",g.ruleForm.auto_cvr_min=null!=(t=u.auto_cvr_min)?t:"",g.ruleForm.target_buzz_rate=null!=(o=u.target_buzz_rate)?o:"")}),{deep:!0,immediate:!0});w((()=>{let{auto_cvr_status:e,auto_cvr_max:l,auto_cvr_min:a,target_buzz_rate:r}=g.ruleForm;return`${1===e?"开":"关"}_${l}_${a}_${r}`}));const b=["id","auto_cvr_status","auto_start_hour","auto_end_hour","auto_cvr_max","auto_cvr_min","target_buzz_rate"],F=[],x=()=>{let e=t(r(g.ruleForm,b),F);0===e.id&&delete e.id,l("updateData",e),l("update:visible",!1)};return(e,l)=>{const a=d("el-form-item"),r=d("el-switch"),t=d("el-time-select"),u=d("el-input"),i=d("el-form"),s=d("el-button");return c(),m("div",null,[_(i,{ref_key:"ruleFormRef",ref:o,enctype:"multipart/form-data",rules:h(v),model:h(g).ruleForm,"label-width":"150px","label-position":"right"},{default:f((()=>[p("div",Ee,[y(" Offer "),_(a,{class:"self-el-form-item",label:"Offer:",prop:"offer_id"},{default:f((()=>[p("div",Ne,[p("span",{textContent:k(h(g).ruleForm.offer_id)},null,8,$e)])])),_:1}),y(" Offer "),_(a,{class:"self-el-form-item",label:"Adv Offer:",prop:"adv_offer"},{default:f((()=>[p("div",Ke,[p("span",{textContent:k(h(g).ruleForm.adv_offer)},null,8,Ie)])])),_:1}),y(" Offer "),_(a,{class:"self-el-form-item",label:"Status:",prop:"auto_cvr_status"},{default:f((()=>[_(r,{modelValue:h(g).ruleForm.auto_cvr_status,"onUpdate:modelValue":l[0]||(l[0]=e=>h(g).ruleForm.auto_cvr_status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"Start Hour:",prop:"start_hour"},{default:f((()=>[_(t,{modelValue:h(g).ruleForm.auto_start_hour,"onUpdate:modelValue":l[1]||(l[1]=e=>h(g).ruleForm.auto_start_hour=e),placeholder:"Start time",start:"00:00",step:"01:00",end:"23:00",format:"H",class:"form-dialog"},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"End Hour:",prop:"end_hour"},{default:f((()=>[_(t,{modelValue:h(g).ruleForm.auto_end_hour,"onUpdate:modelValue":l[2]||(l[2]=e=>h(g).ruleForm.auto_end_hour=e),placeholder:"End time",start:"00:00",step:"01:00",end:"23:00",format:"H",class:"form-dialog"},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"CVR Max:",prop:"auto_cvr_max"},{default:f((()=>[_(u,{modelValue:h(g).ruleForm.auto_cvr_max,"onUpdate:modelValue":l[3]||(l[3]=e=>h(g).ruleForm.auto_cvr_max=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"CVR Min:",prop:"auto_cvr_min"},{default:f((()=>[_(u,{modelValue:h(g).ruleForm.auto_cvr_min,"onUpdate:modelValue":l[4]||(l[4]=e=>h(g).ruleForm.auto_cvr_min=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"Target Buzz Rate:",prop:"target_buzz_rate"},{default:f((()=>[_(u,{modelValue:h(g).ruleForm.target_buzz_rate,"onUpdate:modelValue":l[5]||(l[5]=e=>h(g).ruleForm.target_buzz_rate=e),type:"number",placeholder:"Please input",class:"input-with-select form-dialog"},null,8,["modelValue"])])),_:1})])])),_:1},8,["rules","model"]),y(" form "),y(" footer "),p("div",Me,[_(s,{type:"primary",onClick:l[6]||(l[6]=C((e=>{var l;(l=o.value)&&l.validate((e=>{if(!e)return!1;x()}))}),["prevent"]))},{default:f((()=>[Le])),_:1})])])}}});const He={class:"content-con flex column"},Ze={class:"flex jc-start ai-center form-one"},Je=["textContent"],Ye={class:"flex jc-start ai-center form-one"},Ge=F(" BUZZ "),Qe=F(" SDK "),We=F(" BUZZ SYNC "),Xe={class:"flex jc-start ai-center form-one"},el={key:0},ll={key:1},al={class:"flex jc-start ai-center form-one"},rl={class:"flex jc-start ai-center form-one"},tl={class:"flex jc-start ai-center form-one"},ol={class:"flex jc-start ai-center form-one"},ul={class:"flex jc-start ai-center form-one"},il={class:"form-one"},sl={class:"flex jc-start ai-center form-one"},nl={class:"flex jc-start ai-center form-one"},dl={class:"flex jc-start ai-center form-one"},cl={class:"form-one"},ml={class:"w100 flex ai-center jc-start mb-10"},pl={class:"form-one"},_l={class:"flex ai-center jc-start mb-10"},fl={class:"text-wrap"},vl={class:"flex jc-start ai-center form-one"},gl={class:"flex jc-start ai-center form-one"},bl={class:"flex jc-start ai-center form-one"},hl={class:"flex jc-start ai-center form-one"},yl={class:"w100 flex"},Fl=F(" Save ");var Vl=G(u({setup(e){const l=S(),a="此项必填";let r=(e,l,a)=>{0!==l.length?(e=>{let l=!0;return e.map((e=>{for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)){const r=e[a];if((""===r||void 0===r)&&0!==r){l=!1;break}}})),l})(l)?a(void 0):a(new Error("不允许有空值")):a(void 0)},t=(e,l,r)=>{0!==l.length?l.length>1?r(new Error("只能填选一个国家")):r(void 0):r(new Error(a))};const u=V(),F={id:void 0,offer_id:"",adv_offer:"",create_type:1,channel:"",channel_type:1,adv_status:1,conversion_flow:void 0,status:1,title:"",pkg:"",attribute_provider:"",pid:"",platform:1,country:[],revenue:void 0,traffic:[],adtype:38,update_date:"",adv_tracking_link:"",target_cvr:void 0,cvr_status:2,is_s2s:2,s2s_tracking_link:"",app_url:"",site_type:"rule_value",site_value:"",description:"",fenix_site:{},fenix_cvr:{}};let x=V(!1);const q=i({options:{channel:[{id:"",short_name:""}],country:[{id:"",short_name:"",zh_cn:""}],conversion_flow:[{value:1,label:"CPI"},{value:2,label:"CPA"},{value:9,label:"SDK"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],site_type:[{value:"rule_sdkindex",label:"匹配SDK自定义"},{value:"rule_pubredirect",label:"透传渠道ID"},{value:"rule_slotid",label:"渠道slotid"},{value:"rule_value",label:"固定值"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}]},rules:{channel:[{required:!0,message:a,trigger:["blur","change"]}],channel_type:[{required:!0,message:a,trigger:["blur","change"]}],status:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],pkg:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]},{validator:t,trigger:["blur","change"]}],revenue:[{required:!0,message:a,trigger:["blur","change"]}],traffic:[{required:!1,validator:r,trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:a,trigger:["blur","change"]}],site_type:[{required:!0,message:a,trigger:["blur","change"]}],is_s2s:[{required:!0,message:a,trigger:["blur","change"]}]},choiceRules:{no_required:[{required:!1}],s2s_tracking_link:[{required:!0,message:a,trigger:["blur","change"]}],app_url:[{required:!0,message:a,trigger:["blur","change"]}],site_value:[{required:!0,message:a,trigger:["blur","change"]},{validator:(e,l,a)=>{if(l){a(l.split(",").length>1e3?new Error("site value 的值不可大于1000个"):void 0)}else a(void 0)},trigger:["blur","change"]}]},ruleForm:F,search:{adv_offer:""}}),U=i({channel:[{required:!0,message:a,trigger:["blur","change"]}],channel_type:[{required:!0,message:a,trigger:["blur","change"]}],status:[{required:!0,message:a,trigger:["blur","change"]}],title:[{required:!0,message:a,trigger:["blur","change"]}],pkg:[{required:!0,message:a,trigger:["blur","change"]}],platform:[{required:!0,message:a,trigger:["blur","change"]}],country:[{required:!0,message:a,trigger:["blur","change"]},{validator:t,trigger:["blur","change"]}],revenue:[{required:!0,message:a,trigger:["blur","change"]}],traffic:[{required:!1,validator:r,trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:a,trigger:["blur","change"]}],site_type:[{required:!0,message:a,trigger:["blur","change"]}],is_s2s:[{required:!0,message:a,trigger:["blur","change"]}]});let D=V(""),H=V(""),J=V(""),Y=V(!1),G=V(!1);const Q=async()=>{x.value=!0;const e=R.cloneDeep(q.ruleForm);let l=o({},e);if(e.conversion_flow&&(l.conversion_flow=e.conversion_flow),l.country=e.country[0],l.revenue=parseFloat(l.revenue),l.target_cvr=parseFloat(l.target_cvr),l.fenix_site.day_limit&&(l.fenix_site.day_limit=parseFloat(l.fenix_site.day_limit)),l.fenix_site.day_limit_value?l.fenix_site.day_limit_value=parseFloat(l.fenix_site.day_limit_value):delete l.fenix_site.day_limit_value,0!==e.traffic.length){const a=(e=>{const l=[];return e.map((e=>{let a=o({},e);return e.payout&&(a.payout=Number(e.payout)),e.cap_daily&&(a.cap_daily=Number(e.cap_daily)),l.push(a),e})),l})(e.traffic);l.traffic=JSON.stringify(a)}else delete l.traffic;let a,r=l.fenix_cvr;r&&0===Object.keys(r).length&&delete l.fenix_cvr,"create"===J.value&&(a=await L(l)),"edit"===J.value&&(a=await B(l)),x.value=!1,Z(a)&&window.close()},W=()=>{Y.value=!0},X=async()=>{const e=await E();if(200===e.code){const{offer_id:l}=e;q.ruleForm.offer_id=l.toString()}else X()},ee=w((()=>q.ruleForm.site_value?q.ruleForm.site_value.split(",").length:0)),ae=async()=>{const{data:e}=await N();return q.options.channel=e,e},re=async()=>{const{data:e}=await $();return q.options.country=e,e};i({ruleForm:F}),n((async()=>{te()}));const te=async()=>{D.value=l.currentRoute.value.name,H.value=l.currentRoute.value.params.id,"fenix-offer-create"===D.value&&(X(),J.value="create"),"fenix-offer-edit"===D.value&&(H.value=l.currentRoute.value.params.id,J.value="edit",oe()),await(async()=>await Promise.all([ae(),re()]))()},oe=async()=>{const{data:e}=await T(H.value);q.ruleForm=o({},e),q.ruleForm.country=[e.country],q.search.adv_offer=e.adv_offer,q.ruleForm.traffic=e.traffic?JSON.parse(e.traffic):[],P(q.ruleForm)},ue=w((()=>"rule_value"===q.ruleForm.site_type));s((()=>q.ruleForm.traffic),((e,l)=>{}),{immediate:!0,deep:!0}),s((()=>q.ruleForm.adv_offer),((e,l)=>{q.ruleForm.create_type=e?2:1}),{immediate:!0,deep:!0});const ie=e=>{},se=async()=>{if("edit"===J.value)return!1;q.ruleForm.adv_offer=q.search.adv_offer;const e=q.ruleForm.adv_offer;if(!e)return!1;const l={adv_offer:e,platform:q.ruleForm.platform};if(e&&e.includes("_")){q.ruleForm.channel_type=2,q.ruleForm.adtype=39;const e=await K(l),{data:a}=e;200===e.status?(q.ruleForm.adv_status=1,de(a)):q.ruleForm.adv_status=2}else{let a=/^bs(\S+)/;if(/^bz(\S+)/.test(e)){q.ruleForm.channel_type=1,q.ruleForm.adtype=38;const{data:e}=await I(l);q.ruleForm.adv_status=e.status?e.status:2,ne(e)}if(a.test(e)){q.ruleForm.channel_type=4,q.ruleForm.adtype=40;const{data:e}=await M(l);q.ruleForm.adv_status=e.status?e.status:2,ne(e)}}},ne=e=>{q.ruleForm.channel=e.channel,q.ruleForm.attribute_provider=e.attribute_provider,q.ruleForm.conversion_flow=e.conversion_flow,q.ruleForm.title=e.title,q.ruleForm.pkg=e.pkg_name,q.ruleForm.pid=e.pid,q.ruleForm.platform=e.platform,q.ruleForm.revenue=e.payout,q.ruleForm.adv_tracking_link=e.tracking_link,ce(e.country)},de=e=>{var l;q.ruleForm.pkg=e.app_pkg_name,q.ruleForm.channel=e.channel,q.ruleForm.country=e.country;const a=null==(l=q.options.platform.find((l=>l.label===e.platform)))?void 0:l.value;q.ruleForm.platform=a||1,q.ruleForm.revenue=e.revenue,q.ruleForm.title=e.title,q.ruleForm.adv_tracking_link=e.tracking_link,q.ruleForm.conversion_flow=9},ce=e=>{e&&(Array.isArray(e)?q.ruleForm.country=e:q.ruleForm.country=[e])},me=e=>{e.site_value.length,q.ruleForm.site_value=e.site_value,q.ruleForm.fenix_site=P(e)},pe=e=>{q.ruleForm.fenix_cvr=P(e)},_e=()=>{G.value=!0},fe=w((()=>{if(q.ruleForm.fenix_cvr){let{auto_cvr_status:e,auto_cvr_max:l,auto_cvr_min:a,target_buzz_rate:r}=q.ruleForm.fenix_cvr;return`${1===e?"开":"关"}_${l}_${a}_${r}`}return""}));return(e,l)=>{const a=d("el-form-item"),r=d("el-button"),t=d("el-input"),o=d("el-option"),i=d("el-select"),s=d("el-radio"),n=d("el-radio-group"),F=d("el-switch"),V=d("el-form"),w=d("el-dialog"),S=O("loading");return A((c(),m("div",null,[y(" form "),_(V,{ref_key:"ruleForm",ref:u,enctype:"multipart/form-data",rules:h(U),model:h(q).ruleForm,"label-width":"240px","label-position":"right"},{default:f((()=>[p("div",He,[y(" Offer "),_(a,{label:"Offer:",prop:"offer"},{default:f((()=>[p("div",Ze,[p("span",{textContent:k(h(q).ruleForm.offer_id)},null,8,Je)])])),_:1}),y(" Adv Offer "),_(a,{label:"Adv Offer:",prop:"adv_offer"},{default:f((()=>[p("div",Ye,[_(t,{modelValue:h(q).search.adv_offer,"onUpdate:modelValue":l[0]||(l[0]=e=>h(q).search.adv_offer=e),placeholder:"Please input",class:"input-with-select",disabled:"edit"===h(J)},z({_:2},["create"===h(J)?{name:"append",fn:f((()=>[_(r,{type:"primary",icon:"Search",onClick:se})]))}:void 0]),1032,["modelValue","disabled"])])])),_:1}),y(" Channel "),_(a,{label:"Channel:",prop:"channel"},{default:f((()=>[_(i,{modelValue:h(q).ruleForm.channel,"onUpdate:modelValue":l[1]||(l[1]=e=>h(q).ruleForm.channel=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(q).options.channel,(e=>(c(),b(o,{key:e.id,label:e.short_name,value:e.short_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Channel Type "),_(a,{label:"Channel Type:",prop:"channel_type"},{default:f((()=>[_(n,{modelValue:h(q).ruleForm.channel_type,"onUpdate:modelValue":l[2]||(l[2]=e=>h(q).ruleForm.channel_type=e),class:"form-one"},{default:f((()=>[_(s,{label:1},{default:f((()=>[Ge])),_:1}),_(s,{label:2},{default:f((()=>[Qe])),_:1}),_(s,{label:4},{default:f((()=>[We])),_:1})])),_:1},8,["modelValue"])])),_:1}),y(" Adv Status "),_(a,{label:"Adv Status:",prop:"adv_status"},{default:f((()=>[p("div",Xe,[1===h(q).ruleForm.adv_status?(c(),m("span",el,"开")):y("v-if",!0),2===h(q).ruleForm.adv_status?(c(),m("span",ll,"关")):y("v-if",!0)])])),_:1}),y(" conversion_flow "),_(a,{label:"Conversion Flow:",prop:"conversion_flow"},{default:f((()=>[_(i,{modelValue:h(q).ruleForm.conversion_flow,"onUpdate:modelValue":l[3]||(l[3]=e=>h(q).ruleForm.conversion_flow=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(q).options.conversion_flow,(e=>(c(),b(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Status "),_(a,{label:"Status:",prop:"status"},{default:f((()=>[p("div",al,[_(F,{modelValue:h(q).ruleForm.status,"onUpdate:modelValue":l[4]||(l[4]=e=>h(q).ruleForm.status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),y(" Offer Title "),_(a,{label:"Offer Title:",prop:"title"},{default:f((()=>[p("div",rl,[_(t,{modelValue:h(q).ruleForm.title,"onUpdate:modelValue":l[5]||(l[5]=e=>h(q).ruleForm.title=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Package Name "),_(a,{label:"Package Name:",prop:"pkg"},{default:f((()=>[p("div",tl,[_(t,{modelValue:h(q).ruleForm.pkg,"onUpdate:modelValue":l[6]||(l[6]=e=>h(q).ruleForm.pkg=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Attribute Provider "),_(a,{label:"Attribute Provider:",prop:"attribute_provider"},{default:f((()=>[_(i,{modelValue:h(q).ruleForm.attribute_provider,"onUpdate:modelValue":l[7]||(l[7]=e=>h(q).ruleForm.attribute_provider=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(q).options.attribute_provider,(e=>(c(),b(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Pid "),_(a,{label:"Pid:",prop:"pid"},{default:f((()=>[p("div",ol,[_(t,{modelValue:h(q).ruleForm.pid,"onUpdate:modelValue":l[8]||(l[8]=e=>h(q).ruleForm.pid=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Platform "),_(a,{label:"Platform:",prop:"platform"},{default:f((()=>[_(i,{modelValue:h(q).ruleForm.platform,"onUpdate:modelValue":l[9]||(l[9]=e=>h(q).ruleForm.platform=e),filterable:"",class:"form-one",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(q).options.platform,(e=>(c(),b(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Country "),_(a,{label:"Country:",prop:"country"},{default:f((()=>[_(i,{modelValue:h(q).ruleForm.country,"onUpdate:modelValue":l[10]||(l[10]=e=>h(q).ruleForm.country=e),filterable:"",class:"form-one",multiple:"",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(q).options.country,(e=>(c(),b(o,{key:e.id,label:e.short_name+"-"+e.zh_cn,value:e.short_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Revenue "),_(a,{label:"Revenue:",prop:"revenue"},{default:f((()=>[p("div",ul,[_(t,{modelValue:h(q).ruleForm.revenue,"onUpdate:modelValue":l[11]||(l[11]=e=>h(q).ruleForm.revenue=e),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Manage Traffic "),_(a,{label:"Manage Traffic:",prop:"traffic"},{default:f((()=>[p("div",il,[_(h(le),{ref:"traffic",list:h(q).ruleForm.traffic,"onUpdate:list":l[12]||(l[12]=e=>h(q).ruleForm.traffic=e),offer:h(q).ruleForm.offer_id,onKk:ie},null,8,["list","offer"])])])),_:1}),y(" Adv Tracking Link "),_(a,{label:"Adv Tracking Link:",prop:"adv_tracking_link"},{default:f((()=>[p("div",sl,[_(t,{modelValue:h(q).ruleForm.adv_tracking_link,"onUpdate:modelValue":l[13]||(l[13]=e=>h(q).ruleForm.adv_tracking_link=e),rows:4,autosize:"",type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" Target CVR "),_(a,{label:"Target CVR:",prop:"target_cvr"},{default:f((()=>[p("div",nl,[_(t,{modelValue:h(q).ruleForm.target_cvr,"onUpdate:modelValue":l[14]||(l[14]=e=>h(q).ruleForm.target_cvr=e),type:"number",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" CVR Status "),_(a,{label:"CVR Status:",prop:"cvr_status"},{default:f((()=>[p("div",dl,[_(F,{modelValue:h(q).ruleForm.cvr_status,"onUpdate:modelValue":l[15]||(l[15]=e=>h(q).ruleForm.cvr_status=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),y(" Auto CVR "),_(a,{label:"Auto CVR:",prop:"auto_cvr"},{default:f((()=>[p("div",cl,[p("div",ml,[_(r,{class:"cp mr-10",icon:"Tools",circle:"",onClick:_e}),p("span",null,k(h(fe)),1)])])])),_:1}),y(" Site Type "),_(a,{label:"Site Type:",prop:"site_type"},{default:f((()=>[_(i,{modelValue:h(q).ruleForm.site_type,"onUpdate:modelValue":l[16]||(l[16]=e=>h(q).ruleForm.site_type=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:f((()=>[(c(!0),m(v,null,g(h(q).options.site_type,(e=>(c(),b(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),y(" Site Value "),_(a,{label:"Site Value:",prop:"site_value",rules:h(ue)?h(q).choiceRules.site_value:h(q).choiceRules.no_required},{default:f((()=>[p("div",pl,[p("div",_l,[_(r,{class:"cp mr-10",icon:"Tools",circle:"",onClick:W}),p("span",null,k(h(ee)),1)]),p("div",null,[y(' <el-input\n                v-model="state.ruleForm.site_value"\n                type="textarea"\n                autosize\n                :rows="4"\n                placeholder="Please input"\n                class="input-with-select siteValue"\n              /> '),p("p",fl,k(h(q).ruleForm.site_value),1)])])])),_:1},8,["rules"]),y(" S2S Async "),_(a,{label:"S2S Async:",prop:"is_s2s"},{default:f((()=>[p("div",vl,[_(F,{modelValue:h(q).ruleForm.is_s2s,"onUpdate:modelValue":l[17]||(l[17]=e=>h(q).ruleForm.is_s2s=e),"active-value":1,"inactive-value":2},null,8,["modelValue"])])])),_:1}),y(" S2S Tracking Link "),_(a,{label:"S2S Tracking Link:",prop:"s2s_tracking_link",rules:1===h(q).ruleForm.is_s2s?h(q).choiceRules.s2s_tracking_link:h(q).choiceRules.no_required},{default:f((()=>[p("div",gl,[_(t,{modelValue:h(q).ruleForm.s2s_tracking_link,"onUpdate:modelValue":l[18]||(l[18]=e=>h(q).ruleForm.s2s_tracking_link=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1},8,["rules"]),y(" Preview URL "),_(a,{label:"Preview URL:",prop:"app_url",rules:1===h(q).ruleForm.is_s2s?h(q).choiceRules.app_url:h(q).choiceRules.no_required},{default:f((()=>[p("div",bl,[_(t,{modelValue:h(q).ruleForm.app_url,"onUpdate:modelValue":l[19]||(l[19]=e=>h(q).ruleForm.app_url=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1},8,["rules"]),y(" Description "),_(a,{label:"Description:",prop:"description"},{default:f((()=>[p("div",hl,[_(t,{modelValue:h(q).ruleForm.description,"onUpdate:modelValue":l[20]||(l[20]=e=>h(q).ruleForm.description=e),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])])),_:1}),y(" end ")])])),_:1},8,["rules","model"]),y(" form "),y(" footer "),p("div",yl,[_(r,{type:"primary",onClick:l[21]||(l[21]=C((e=>(async e=>{e&&await e.validate(((e,l)=>{e&&Q()}))})(u.value)),["prevent"]))},{default:f((()=>[Fl])),_:1})]),y(" dialog "),_(w,{modelValue:h(Y),"onUpdate:modelValue":l[23]||(l[23]=e=>j(Y)?Y.value=e:Y=e),title:"Site",width:"70%"},{default:f((()=>[_(Te,{msg:h(q).ruleForm,onUpdateData:me,visible:h(Y),"onUpdate:visible":l[22]||(l[22]=e=>j(Y)?Y.value=e:Y=e)},null,8,["msg","visible"])])),_:1},8,["modelValue"]),y(" dialog "),_(w,{modelValue:h(G),"onUpdate:modelValue":l[25]||(l[25]=e=>j(G)?G.value=e:G=e),title:"Auto CVR",width:"70%"},{default:f((()=>[_(Be,{msg:h(q).ruleForm,onUpdateData:pe,visible:h(G),"onUpdate:visible":l[24]||(l[24]=e=>j(G)?G.value=e:G=e)},null,8,["msg","visible"])])),_:1},8,["modelValue"])])),[[S,h(x)]])}}}),[["__scopeId","data-v-2659fc52"]]);export{Vl as default};
