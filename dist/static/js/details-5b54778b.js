var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o,t=(e,t)=>{for(var u in t||(t={}))a.call(t,u)&&r(e,u,t[u]);if(l)for(var u of l(t))o.call(t,u)&&r(e,u,t[u]);return e};import{d as u,r as d,w as m,L as p,q as s,o as n,c as i,x as c,e as _,s as f,N as b,O as y,A as v,v as V,z as h,f as F,_ as g,h as k,P as w,y as U,D as x,F as q,g as j}from"./main-10c8b00d.js";import{u as C,s as D}from"./useUtils-663e62f2.js";import{c as M,d as P,e as A}from"./dsp-adcontrol-eb65532e.js";import{m as O}from"./message-83da0e90.js";import{_ as Y}from"./index-a3d88cf6.js";import{d as I,e as N}from"./new-format-c9dfc3b7.js";import{_ as H}from"./lodash-081287e7.js";import{c as $}from"./clipboard-5e2fa5f3.js";import{l as R}from"./fenix-5e12c711.js";const S={class:"flex jc-end"},K=F(" Add "),L={class:"flex"},T=F(" Copy "),z=u({props:{list:{require:!0,default:()=>[],type:Array},offer:{require:!0,default:"",type:String}},emits:["kk","up"],setup(e,{emit:l}){const a=e,o=d({pub:[{id:"",pub_name:""}]}),r={55527824:.1,95108831:.1,95846929:.005,59845210:.005};let t=d({manage_traffic:[]});const u={pub:"",slotid:"",payout:void 0,cap_daily:void 0,pub_status:1,pub_tracking_link:""},F=()=>{t.manage_traffic.push(H.cloneDeep(u))};return m((()=>a.list),((e,l)=>{t.manage_traffic=e}),{immediate:!0,deep:!0}),m((()=>t.manage_traffic),((e,l)=>{}),{immediate:!0,deep:!0}),p((()=>{(async()=>{const{data:e}=await R();o.pub=e})(),F()})),(e,l)=>{const u=s("el-button"),d=s("el-option"),m=s("el-select"),p=s("el-table-column"),g=s("el-input"),k=s("el-switch"),w=s("el-table");return n(),i("div",null,[c("div",S,[_(u,{type:"primary",onClick:F},{default:f((()=>[K])),_:1})]),_(w,{class:"mt-10",data:V(t).manage_traffic,style:{width:"100%"},border:""},{default:f((()=>[_(p,{label:"Adx Name",align:"center"},{default:f((e=>[_(m,{modelValue:e.row.pub,"onUpdate:modelValue":l=>e.row.pub=l,filterable:"",clearable:"",placeholder:"",onChange:l=>(e=>{const{row:l}=e,t="http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}";l.pub_tracking_link=t;const u=o.pub.find((e=>e.pub_name===l.pub));l.slotid=u.slot_id,l.pub_status=u.status,l.pub_tracking_link=t.replace("{offer}",a.offer).replace("{slot}",u.slot_id),r[u.slot_id]&&(l.payout=r[u.slot_id])})(e)},{default:f((()=>[(n(!0),i(b,null,y(V(o).pub,(e=>{var l;return n(),v(d,{key:e.id,label:e.pub_name,value:null!=(l=e.pub_name)?l:e.id},null,8,["label","value"])})),128))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),_(p,{label:"单价($/前次曝光)",align:"center"},{default:f((e=>[_(g,{modelValue:e.row.payout,"onUpdate:modelValue":l=>e.row.payout=l,type:"number",min:"0",step:"0.001",placeholder:"请输入单价",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),_(p,{label:"自动点击率%",align:"center"},{default:f((e=>[_(g,{modelValue:e.row.cap_daily,"onUpdate:modelValue":l=>e.row.cap_daily=l,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),_(p,{label:"操作",align:"center",width:"100px"},{default:f((e=>[c("div",L,[_(u,{class:"mr-10",type:"danger",icon:"Delete",circle:"",onClick:l=>(e=>{const l=e.$index;t.manage_traffic.splice(l,1)})(e)},null,8,["onClick"]),_(k,{modelValue:e.row.pub_status,"onUpdate:modelValue":l=>e.row.pub_status=l,"active-value":1,"inactive-value":2,class:"mr-10",onChange:e=>{}},null,8,["modelValue","onUpdate:modelValue","onChange"]),e.row.pub_tracking_link?(n(),v(u,{key:0,class:"cp",type:"primary",onClick:l=>(({row:e})=>{const{pub_tracking_link:l}=e;$(l)})(e)},{default:f((()=>[T])),_:2},1032,["onClick"])):h("v-if",!0)])])),_:1})])),_:1},8,["data"])])}}});const E={class:"content-con form-one flex column"},W={class:"content-con form-one flex column"},B={class:"flex"},G={class:"content-con form-one flex column"},J={class:"content-con form-one flex column"},Q={class:"flex"},X={class:"form-one-right flex jc-between"},Z=(e=>(x("data-v-6a818784"),e=e(),q(),e))((()=>c("span",{class:"center",style:{width:"50px"}},"次/日",-1))),ee={class:"content-con form-one flex column"},le={class:"w100 flex"},ae=F(" 确认 "),oe=F(" 取消 ");var re=g(u({setup(e){const{choice_type:l,system:a,terminal_type:o,network_type:r,flow_type:u,week:m}=D,{getRouterData:g,getCommonCountryList:x,goNewUrl:q}=C();let{proxy:$}=j();let R=k("create");const S={id:void 0,adv_group_name:"",rta_id:"",adv_series_id:void 0,desc:"",target_pkg_ids:"",country_type:1,country:"",system:[1],terminal_type:[1,2],network_type:[1,2,3],flow_type:[1],adx_type:1,adx:"",media_type:1,media:"",custem_media_type:1,custem_media:"",pmp_id:"",promotion_cycle:2,promotion_cycle_arr:[],promotion_cycle_st:"",promotion_cycle_et:"",launch_period_type:2,launch_period_day:[],launch_period_hour:[],frequency_control_type:2,frequency_control_people_type:2,frequency_control_num:6,release_speed:1,speed_limit_day:void 0,payment_method:1,price_method:2,adx_price:[],price_type:1,is_del:void 0},K=d({ruleForm:S,rules:{adv_group_name:[{required:!0,message:"此项必填",trigger:["blur","change"]}]},options:{choice_type:l,system:a,terminal_type:o,network_type:r,flow_type:u,country:[{id:0,name:"Unknown",short_name:"UNKNOWN"}],adv_series_id:[],target_pkg_ids:[],adx:[],media:[],custem_media:[],promotion_cycle:[{value:1,label:"从现在开始长期有效"},{value:2,label:"限定周期"}],launch_period_type:[{value:1,label:"全天"},{value:2,label:"限时"}],frequency_control_type:[{value:1,label:"不限频次"},{value:2,label:"限定频次"}],frequency_control_people_type:[{value:1,label:"单人曝光频次"},{value:2,label:"单人点击频次"}],release_speed:[{value:1,label:"匀速投放-排期内匀速展示广告（推荐）"},{value:2,label:"加速投放-尽快展示广告"}],payment_method:[{value:1,label:"CPM"}],price_method:[{value:1,label:"统一出价"},{value:2,label:"分adx出价"}],price_type:[{value:1,label:"自动出价"},{value:2,label:"手动出价"}],launch_period_day:m}}),L=()=>{$.$refs.ruleForm.validate((e=>{if(!e)return!1;re()}))},T=["id","adv_id","adv_series_type","adv_series_budget"],re=async()=>{let e=w(K.ruleForm);if(e=I(e),e=N(e,T),"create"===R.value){delete e.id;const l=await M(e);O(l)&&ue()}if("edit"===R.value){const l=await P(e);O(l)&&ue()}},te=e=>{},ue=()=>{q({url:"/adcontrol/adseries/list"})},de=()=>{var e,l;let{query:a,params:o}=g();if(R.value=null!=(l=null==(e=a.type)?void 0:e.toString())?l:"","create"===R.value&&(K.ruleForm=H.cloneDeep(S)),"edit"===R.value){const{id:e}=o;(async e=>{const l=await A(e),{data:a}=l;K.ruleForm=t(t({},K.ruleForm),a),K.ruleForm})(e)}(async()=>{K.options.country=await x()})()};return p((()=>{de()})),(e,l)=>{const a=s("el-input"),o=s("el-form-item"),r=s("el-option"),t=s("el-select"),u=s("el-checkbox"),d=s("el-checkbox-group"),m=s("el-radio"),p=s("el-radio-group"),g=s("el-date-picker"),k=s("el-time-picker"),w=s("el-form"),x=s("el-button");return n(),i("div",null,[h(" form "),_(w,{ref:"ruleForm",enctype:"multipart/form-data",rules:V(K).rules,model:V(K).ruleForm,"label-width":"150px","label-position":"right",class:"flex column",disabled:"edit"===V(R)&&2===V(K).ruleForm.is_del},{default:f((()=>[_(V(Y),{title:"基础信息"}),c("div",E,[h(" 广告组名称 "),_(o,{class:"self-el-form-item",label:"广告组名称:",prop:"adv_group_name"},{default:f((()=>[_(a,{modelValue:V(K).ruleForm.adv_group_name,"onUpdate:modelValue":l[0]||(l[0]=e=>V(K).ruleForm.adv_group_name=e),modelModifiers:{trim:!0},class:"form-one",placeholder:""},null,8,["modelValue"])])),_:1}),h(" RTA推广ID "),_(o,{class:"self-el-form-item",label:"RTA推广ID:",prop:"rta_id"},{default:f((()=>[_(a,{modelValue:V(K).ruleForm.rta_id,"onUpdate:modelValue":l[1]||(l[1]=e=>V(K).ruleForm.rta_id=e),modelModifiers:{trim:!0},class:"form-one",placeholder:""},null,8,["modelValue"])])),_:1}),h(" 所属广告系列 "),_(o,{class:"self-el-form-item",label:"所属广告系列:",prop:"adv_series_id"},{default:f((()=>[_(t,{modelValue:V(K).ruleForm.adv_series_id,"onUpdate:modelValue":l[2]||(l[2]=e=>V(K).ruleForm.adv_series_id=e),filterable:"",placeholder:"请选择",class:"form-one"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.adv_series_id,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(" 描述 "),_(o,{class:"self-el-form-item",label:"描述:",prop:"desc"},{default:f((()=>[_(a,{modelValue:V(K).ruleForm.desc,"onUpdate:modelValue":l[3]||(l[3]=e=>V(K).ruleForm.desc=e),modelModifiers:{trim:!0},class:"form-one",placeholder:"",type:"textarea"},null,8,["modelValue"])])),_:1})]),_(V(Y),{title:"选择受众"}),c("div",W,[h(" 受众包 "),_(o,{class:"self-el-form-item",label:"受众包:",prop:"adv_series_id"},{default:f((()=>[_(t,{modelValue:V(K).ruleForm.target_pkg_ids,"onUpdate:modelValue":l[4]||(l[4]=e=>V(K).ruleForm.target_pkg_ids=e),filterable:"",placeholder:"请选择",class:"form-one"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.target_pkg_ids,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(" 国家/地区 "),c("div",B,[_(o,{label:"国家/地区:",prop:"country_type"},{default:f((()=>[_(t,{class:"form-one-left",modelValue:V(K).ruleForm.country_type,"onUpdate:modelValue":l[5]||(l[5]=e=>V(K).ruleForm.country_type=e),filterable:"",placeholder:""},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.choice_type,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(o,{label:"",prop:"country",class:"self-el-form-item-no-label"},{default:f((()=>[_(t,{class:"form-one-right",modelValue:V(K).ruleForm.country,"onUpdate:modelValue":l[6]||(l[6]=e=>V(K).ruleForm.country=e),filterable:"",clearable:"",placeholder:"",multiple:""},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.country,(e=>(n(),v(r,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),h(" 操作系统 "),_(o,{class:"self-el-form-item",label:"操作系统:",prop:"system"},{default:f((()=>[_(d,{modelValue:V(K).ruleForm.system,"onUpdate:modelValue":l[7]||(l[7]=e=>V(K).ruleForm.system=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.system,(e=>(n(),v(u,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),h(" 终端类型 "),_(o,{class:"self-el-form-item",label:"终端类型:",prop:"terminal_type"},{default:f((()=>[_(d,{modelValue:V(K).ruleForm.terminal_type,"onUpdate:modelValue":l[8]||(l[8]=e=>V(K).ruleForm.terminal_type=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.terminal_type,(e=>(n(),v(u,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),h(" 网络连接 "),_(o,{class:"self-el-form-item",label:"网络连接:",prop:"network_type"},{default:f((()=>[_(d,{modelValue:V(K).ruleForm.network_type,"onUpdate:modelValue":l[9]||(l[9]=e=>V(K).ruleForm.network_type=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.network_type,(e=>(n(),v(u,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1})]),_(V(Y),{title:"选择媒体"}),c("div",G,[h(" 流量类型 "),_(o,{class:"self-el-form-item",label:"流量类型:",prop:"flow_type"},{default:f((()=>[_(d,{modelValue:V(K).ruleForm.flow_type,"onUpdate:modelValue":l[10]||(l[10]=e=>V(K).ruleForm.flow_type=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.flow_type,(e=>(n(),v(u,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),h(" Adx "),_(o,{class:"self-el-form-item",label:"Adx:",prop:"adx"},{default:f((()=>[_(t,{modelValue:V(K).ruleForm.adx_type,"onUpdate:modelValue":l[11]||(l[11]=e=>V(K).ruleForm.adx_type=e),filterable:"",placeholder:"请选择",class:"form-one-left"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.choice_type,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),_(t,{modelValue:V(K).ruleForm.adx,"onUpdate:modelValue":l[12]||(l[12]=e=>V(K).ruleForm.adx=e),filterable:"",clearable:"",placeholder:"",multiple:"",class:"form-one-right"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.adx,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(" 媒体分类 "),_(o,{class:"self-el-form-item",label:"媒体分类:",prop:"media"},{default:f((()=>[_(t,{modelValue:V(K).ruleForm.media_type,"onUpdate:modelValue":l[13]||(l[13]=e=>V(K).ruleForm.media_type=e),filterable:"",placeholder:"请选择",class:"form-one-left"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.choice_type,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),_(t,{modelValue:V(K).ruleForm.media,"onUpdate:modelValue":l[14]||(l[14]=e=>V(K).ruleForm.media=e),filterable:"",clearable:"",placeholder:"",multiple:"",class:"form-one-right"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.media,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(" 自定义媒体列表 "),_(o,{class:"self-el-form-item",label:"自定义媒体列表:",prop:"custem_media"},{default:f((()=>[_(t,{modelValue:V(K).ruleForm.custem_media_type,"onUpdate:modelValue":l[15]||(l[15]=e=>V(K).ruleForm.custem_media_type=e),filterable:"",placeholder:"请选择",class:"form-one-left"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.choice_type,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),_(t,{modelValue:V(K).ruleForm.custem_media,"onUpdate:modelValue":l[16]||(l[16]=e=>V(K).ruleForm.custem_media=e),filterable:"",clearable:"",placeholder:"",multiple:"",class:"form-one-right"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.custem_media,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(" PMP ID "),_(o,{class:"self-el-form-item",label:"PMP ID:",prop:"pmp_id"},{default:f((()=>[_(a,{modelValue:V(K).ruleForm.pmp_id,"onUpdate:modelValue":l[17]||(l[17]=e=>V(K).ruleForm.pmp_id=e),modelModifiers:{trim:!0},class:"form-one",placeholder:"",type:"textarea"},null,8,["modelValue"])])),_:1})]),_(V(Y),{title:"投放设置"}),c("div",J,[h(" 推广周期 "),_(o,{class:"self-el-form-item",label:"推广周期:",prop:"promotion_cycle"},{default:f((()=>[_(p,{class:"form-one",modelValue:V(K).ruleForm.promotion_cycle,"onUpdate:modelValue":l[18]||(l[18]=e=>V(K).ruleForm.promotion_cycle=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.promotion_cycle,(e=>(n(),v(m,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),F(" "+U(V(K).ruleForm.promotion_cycle_arr)+" ",1),_(o,{class:"self-el-form-item",label:"",prop:"promotion_cycle_arr"},{default:f((()=>[h(" 日期组件 "),_(g,{modelValue:V(K).ruleForm.promotion_cycle_arr,"onUpdate:modelValue":l[19]||(l[19]=e=>V(K).ruleForm.promotion_cycle_arr=e),class:"w100-super",type:"daterange","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:!1},null,8,["modelValue"])])),_:1}),h(" 投放时段 "),_(o,{class:"self-el-form-item",label:"投放时段:",prop:"launch_period_type"},{default:f((()=>[_(p,{class:"form-one",modelValue:V(K).ruleForm.launch_period_type,"onUpdate:modelValue":l[20]||(l[20]=e=>V(K).ruleForm.launch_period_type=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.launch_period_type,(e=>(n(),v(m,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),h(" 投放时段--天 "),F(U(V(K).ruleForm.launch_period_day)+" ",1),_(o,{class:"self-el-form-item",label:"",prop:"launch_period_day"},{default:f((()=>[h(" 周 "),_(d,{class:"w100-super",modelValue:V(K).ruleForm.launch_period_day,"onUpdate:modelValue":l[21]||(l[21]=e=>V(K).ruleForm.launch_period_day=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.launch_period_day,(e=>(n(),v(u,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),h(" 投放时段--小时 "),F(U(V(K).ruleForm.launch_period_hour)+" ",1),_(o,{class:"self-el-form-item",label:"",prop:"launch_period_hour"},{default:f((()=>[h(" 小时 "),_(k,{class:"w100-super",modelValue:V(K).ruleForm.launch_period_hour,"onUpdate:modelValue":l[22]||(l[22]=e=>V(K).ruleForm.launch_period_hour=e),"is-range":"",format:"HH:mm","value-format":"HH:mm","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])])),_:1}),h(" 频次控制 "),_(o,{class:"self-el-form-item",label:"频次控制:",prop:"frequency_control_type"},{default:f((()=>[_(p,{class:"form-one",modelValue:V(K).ruleForm.frequency_control_type,"onUpdate:modelValue":l[23]||(l[23]=e=>V(K).ruleForm.frequency_control_type=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.frequency_control_type,(e=>(n(),v(m,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),c("div",Q,[_(o,{class:"self-el-form-item",label:"",prop:"frequency_control_type"},{default:f((()=>[_(t,{modelValue:V(K).ruleForm.frequency_control_people_type,"onUpdate:modelValue":l[24]||(l[24]=e=>V(K).ruleForm.frequency_control_people_type=e),filterable:"",clearable:"",placeholder:"",class:"form-one-left"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.frequency_control_people_type,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(o,{class:"self-el-form-item-no-label",label:"",prop:"frequency_control_num"},{default:f((()=>[c("div",X,[_(a,{modelValue:V(K).ruleForm.frequency_control_num,"onUpdate:modelValue":l[25]||(l[25]=e=>V(K).ruleForm.frequency_control_num=e),modelModifiers:{trim:!0},placeholder:"",type:"number"},null,8,["modelValue"]),Z])])),_:1})]),h(" 投放速度 "),_(o,{class:"self-el-form-item",label:"投放速度:",prop:"release_speed"},{default:f((()=>[_(p,{class:"form-one",modelValue:V(K).ruleForm.release_speed,"onUpdate:modelValue":l[26]||(l[26]=e=>V(K).ruleForm.release_speed=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.release_speed,(e=>(n(),v(m,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1})]),_(V(Y),{title:"预算与出价"}),c("div",ee,[h(" 广告预算 "),_(o,{class:"self-el-form-item",label:"广告日预算($):",prop:"speed_limit_day"},{default:f((()=>[_(a,{modelValue:V(K).ruleForm.speed_limit_day,"onUpdate:modelValue":l[27]||(l[27]=e=>V(K).ruleForm.speed_limit_day=e),modelModifiers:{trim:!0},class:"form-one",placeholder:""},null,8,["modelValue"])])),_:1}),h(" 付费方式  "),_(o,{class:"self-el-form-item",label:"付费方式",prop:"payment_method"},{default:f((()=>[_(t,{modelValue:V(K).ruleForm.payment_method,"onUpdate:modelValue":l[28]||(l[28]=e=>V(K).ruleForm.payment_method=e),filterable:"",placeholder:"",class:"form-one"},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.payment_method,(e=>(n(),v(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(" 单价类型 "),_(o,{class:"self-el-form-item",label:"单价类型:",prop:"price_method"},{default:f((()=>[_(p,{class:"form-one",modelValue:V(K).ruleForm.price_method,"onUpdate:modelValue":l[29]||(l[29]=e=>V(K).ruleForm.price_method=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.price_method,(e=>(n(),v(m,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),h(" 出价方式为分adx出价时 "),_(o,{class:"self-el-form-item",label:"",prop:"adx_price"},{default:f((()=>[_(z,{class:"w100",ref:"traffic",list:V(K).ruleForm.adx_price,"onUpdate:list":l[30]||(l[30]=e=>V(K).ruleForm.adx_price=e),onKk:te},null,8,["list"])])),_:1}),h(" 出价方式 "),_(o,{class:"self-el-form-item",label:"出价方式:",prop:"price_type"},{default:f((()=>[_(p,{class:"form-one",modelValue:V(K).ruleForm.price_type,"onUpdate:modelValue":l[31]||(l[31]=e=>V(K).ruleForm.price_type=e)},{default:f((()=>[(n(!0),i(b,null,y(V(K).options.price_type,(e=>(n(),v(m,{label:e.value},{default:f((()=>[F(U(e.label),1)])),_:2},1032,["label"])))),256))])),_:1},8,["modelValue"])])),_:1})])])),_:1},8,["rules","model","disabled"]),h(" form "),h(" footer "),c("div",le,[_(x,{type:"primary",onClick:L},{default:f((()=>[ae])),_:1}),_(x,{type:"primary",onClick:ue},{default:f((()=>[oe])),_:1})])])}}}),[["__scopeId","data-v-6a818784"]]);export{re as default};
