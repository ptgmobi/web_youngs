var ne=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var W=(k,F,f)=>F in k?ne(k,F,{enumerable:!0,configurable:!0,writable:!0,value:f}):k[F]=f,$=(k,F)=>{for(var f in F||(F={}))se.call(F,f)&&W(k,f,F[f]);if(Q)for(var f of Q(F))ie.call(F,f)&&W(k,f,F[f]);return k};import{d as X,z as Z,w as z,C as Y,r as _,o as c,k as V,v as i,x as o,h as n,F as q,l as j,c as x,j as r,i as s,y as L,f as de,a as M,b as ce,ak as pe,N as fe,m as me,t as _e,J as ve,R as ge}from"./vendor-f1931894.js";import{_ as ee}from"./lodash-43532635.js";import{l as be,p as ye,q as Fe,r as he,s as Ve,t as ke,u as we,v as Ce,w as xe}from"./fenix-fa2fc153.js";import{c as Ae}from"./clipboard-a08de50c.js";import{m as qe}from"./message-c1123ca0.js";import"./index-ee9f9318.js";const je={class:"flex jc-end"},Se=L(" Add "),Ue={class:"flex"},Pe=L(" Copy "),Oe=X({props:{list:{require:!0,default:()=>[],type:Array},offer:{require:!0,default:"",type:String}},emits:["kk","up"],setup(k,{emit:F}){const f=k,d=Z({pub:[{id:"",pub_name:""}]}),R={"55527824":.1,"95108831":.1,"95846929":.01,"59845210":.01};let A=Z({manage_traffic:[]});const G={pub:"",slotid:"",payout:void 0,cap_daily:void 0,pub_status:1,pub_tracking_link:""},E=()=>{A.manage_traffic.push(ee.cloneDeep(G))},O=v=>{const g=v.$index;A.manage_traffic.splice(g,1)},e=v=>{const{row:g}=v,C="http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}";g.pub_tracking_link=C;const h=d.pub.find(B=>B.pub_name===g.pub);console.log(h),g.slotid=h.slot_id,g.pub_status=h.status,g.pub_tracking_link=C.replace("{offer}",f.offer).replace("{slot}",h.slot_id),R[h.slot_id]&&(g.payout=R[h.slot_id])},D=({row:v})=>{const{pub_tracking_link:g}=v;Ae(g)},T=({row:v})=>{console.log(v)},w=async()=>{console.log("traffic init");const{data:v}=await be();d.pub=v};return z(()=>f.list,(v,g)=>{A.manage_traffic=v},{immediate:!0,deep:!0}),z(()=>A.manage_traffic,(v,g)=>{},{immediate:!0,deep:!0}),Y(()=>{w(),E()}),(v,g)=>{const C=_("el-button"),h=_("el-option"),B=_("el-select"),S=_("el-table-column"),N=_("el-input"),I=_("el-switch"),K=_("el-table");return c(),V("div",null,[i("div",je,[o(C,{type:"primary",onClick:E},{default:n(()=>[Se]),_:1})]),o(K,{class:"mt-10",data:r(A).manage_traffic,style:{width:"100%"},border:""},{default:n(()=>[o(S,{label:"Pub Name",align:"center"},{default:n(p=>[o(B,{modelValue:p.row.pub,"onUpdate:modelValue":m=>p.row.pub=m,filterable:"",clearable:"",placeholder:"",onChange:m=>e(p)},{default:n(()=>[(c(!0),V(q,null,j(r(d).pub,m=>(c(),x(h,{key:m.id,label:m.pub_name,value:m.pub_name},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),o(S,{label:"Payout",align:"center"},{default:n(p=>[o(N,{modelValue:p.row.payout,"onUpdate:modelValue":m=>p.row.payout=m,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(S,{label:"Cap Daily",align:"center"},{default:n(p=>[o(N,{modelValue:p.row.cap_daily,"onUpdate:modelValue":m=>p.row.cap_daily=m,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(S,{label:"Operation",align:"center",width:"180px"},{default:n(p=>[i("div",Ue,[o(C,{class:"mr-10",type:"danger",icon:"Delete",circle:"",onClick:m=>O(p)},null,8,["onClick"]),o(I,{modelValue:p.row.pub_status,"onUpdate:modelValue":m=>p.row.pub_status=m,"active-value":1,"inactive-value":2,class:"mr-10",onChange:m=>T(p)},null,8,["modelValue","onUpdate:modelValue","onChange"]),p.row.pub_tracking_link?(c(),x(C,{key:0,class:"cp",type:"primary",onClick:m=>D(p)},{default:n(()=>[Pe]),_:2},1032,["onClick"])):s("v-if",!0)])]),_:1})]),_:1},8,["data"])])}}}),De={class:"content-con flex column"},Te={class:"flex jc-start ai-center form-one"},Be=["textContent"],Le={class:"flex jc-start ai-center form-one"},Re=L(" BUZZ "),Ee=L(" SDK "),Ne={class:"flex jc-start ai-center form-one"},$e={key:0},ze={key:1},Me={class:"flex jc-start ai-center form-one"},Ge={class:"flex jc-start ai-center form-one"},Ie={class:"flex jc-start ai-center form-one"},Ke={class:"flex jc-start ai-center form-one"},Je={class:"flex jc-start ai-center form-one"},Ze={class:"form-one"},He={class:"flex jc-start ai-center form-one"},Qe={class:"flex jc-start ai-center form-one"},We={class:"flex jc-start ai-center form-one"},Xe={class:"flex jc-start ai-center form-one"},Ye={class:"flex jc-start ai-center form-one"},el={class:"flex jc-start ai-center form-one"},ll={class:"flex jc-start ai-center form-one"},rl={class:"flex jc-start ai-center form-one"},tl={class:"w100 flex"},al=L(" Save "),pl=X({setup(k){let{proxy:F}=ge();const f=de(),d={required:"\u6B64\u9879\u5FC5\u586B"},R=a=>{let l=!0;return a.map(u=>{for(const b in u)if(Object.prototype.hasOwnProperty.call(u,b)){const y=u[b];if((y===""||y===void 0)&&y!==0){l=!1;break}}}),l};let A=(a,l,u)=>{l.length!==0?R(l)?u(void 0):u(new Error("\u4E0D\u5141\u8BB8\u6709\u7A7A\u503C")):u(void 0)},G=(a,l,u)=>{l.length!==0?l.length>1?u(new Error("\u53EA\u80FD\u586B\u9009\u4E00\u4E2A\u56FD\u5BB6")):u(void 0):u(new Error(d.required))};const E={id:void 0,offer_id:"",adv_offer:"",create_type:1,channel:"",channel_type:1,adv_status:1,conversion_flow:void 0,status:1,title:"",pkg:"",attribute_provider:"",pid:"",platform:1,country:[],revenue:void 0,traffic:[],adtype:38,update_date:"",adv_tracking_link:"",target_cvr:void 0,cvr_status:2,is_s2s:2,s2s_tracking_link:"",app_url:"",site_type:"rule_value",site_value:"",description:""};let O=M(!1);const e=Z({options:{channel:[{id:"",short_name:""}],country:[{id:"",short_name:"",zh_cn:""}],conversion_flow:[{value:1,label:"CPI"},{value:2,label:"CPA"},{value:9,label:"SDK"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],site_type:[{value:"rule_sdkindex",label:"\u5339\u914DSDK\u81EA\u5B9A\u4E49"},{value:"rule_pubredirect",label:"\u900F\u4F20\u6E20\u9053ID"},{value:"rule_slotid",label:"\u6E20\u9053slotid"},{value:"rule_value",label:"\u56FA\u5B9A\u503C"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}]},rules:{no_required:[{required:!1}],channel:[{required:!0,message:d.required,trigger:["blur","change"]}],channel_type:[{required:!0,message:d.required,trigger:["blur","change"]}],status:[{required:!0,message:d.required,trigger:["blur","change"]}],title:[{required:!0,message:d.required,trigger:["blur","change"]}],pkg:[{required:!0,message:d.required,trigger:["blur","change"]}],platform:[{required:!0,message:d.required,trigger:["blur","change"]}],country:[{required:!0,message:d.required,trigger:["blur","change"]},{validator:G,trigger:["blur","change"]}],revenue:[{required:!0,message:d.required,trigger:["blur","change"]}],traffic:[{required:!1,validator:A,trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:d.required,trigger:["blur","change"]}],site_type:[{required:!0,message:d.required,trigger:["blur","change"]}],site_value:[{required:!0,message:d.required,trigger:["blur","change"]}],is_s2s:[{required:!0,message:d.required,trigger:["blur","change"]}],s2s_tracking_link:[{required:!0,message:d.required,trigger:["blur","change"]}],app_url:[{required:!0,message:d.required,trigger:["blur","change"]}]},ruleForm:E,search:{adv_offer:""}});let D=M(""),T=M(""),w=M("");const v=a=>{const l=[];return a.map(u=>{let b=$({},u);return u.payout&&(b.payout=Number(u.payout)),u.cap_daily&&(b.cap_daily=Number(u.cap_daily)),l.push(b),u}),l},g=async()=>{O.value=!0;const a=ee.cloneDeep(e.ruleForm);let l=$({},a);if(a.conversion_flow&&(l.conversion_flow=a.conversion_flow),l.country=a.country[0],l.revenue=parseFloat(l.revenue),l.target_cvr=parseFloat(l.target_cvr),a.traffic.length!==0){const b=v(a.traffic);l.traffic=JSON.stringify(b)}else delete l.traffic;let u;w.value==="create"&&(u=await Ce(l)),w.value==="edit"&&(u=await xe(l)),O.value=!1,qe(u)&&window.close()},C=()=>{F.$refs.ruleForm.validate(a=>{if(console.log(a),a)console.log("submit!"),g();else return console.log("error submit!!"),!1})},h=async()=>{const a=await Fe();if(a.code===200){const{offer_id:l}=a;e.ruleForm.offer_id=l.toString()}else h()},B=async()=>await Promise.all([S(),N()]),S=async()=>{const{data:a}=await he();return e.options.channel=a,a},N=async()=>{const{data:a}=await Ve();return e.options.country=a,a};Y(async()=>{D.value=f.currentRoute.value.name,T.value=f.currentRoute.value.params.id,D.value==="fenix-offer-create"&&(h(),w.value="create"),D.value==="fenix-offer-edit"&&(T.value=f.currentRoute.value.params.id,w.value="edit",I()),await B()});const I=async()=>{const{data:a}=await ye(T.value);e.ruleForm=$({},a),e.ruleForm.country=[a.country],e.search.adv_offer=a.adv_offer,e.ruleForm.traffic=a.traffic?JSON.parse(a.traffic):[]},K=ce(()=>e.ruleForm.site_type==="rule_value");z(()=>e.ruleForm.traffic,(a,l)=>{},{immediate:!0,deep:!0}),z(()=>e.ruleForm.adv_offer,(a,l)=>{a?e.ruleForm.create_type=2:e.ruleForm.create_type=1},{immediate:!0,deep:!0});const p=a=>{console.log(a)},m=async()=>{if(w.value==="edit")return!1;console.log("get adv offer"),e.ruleForm.adv_offer=e.search.adv_offer;const a=e.ruleForm.adv_offer;if(!a)return!1;const l={adv_offer:a,platform:e.ruleForm.platform};if(a&&a.includes("_")){console.log("get offer for dump"),e.ruleForm.channel_type=2,e.ruleForm.adtype=39;const u=await ke(l),{data:b}=u;u.status===200?(e.ruleForm.adv_status=1,re(b)):(console.log("\u6CA1\u6709dump offer"),e.ruleForm.adv_status=2)}else{console.log("get offer for buzz"),e.ruleForm.channel_type=1,e.ruleForm.adtype=38;const{data:u}=await we(l);console.log(u),e.ruleForm.adv_status=u.status,le(u)}},le=a=>{e.ruleForm.channel=a.channel,e.ruleForm.attribute_provider=a.attribute_provider,e.ruleForm.conversion_flow=a.conversion_flow,e.ruleForm.title=a.title,e.ruleForm.pkg=a.pkg_name,e.ruleForm.pid=a.pid,e.ruleForm.platform=a.platform,e.ruleForm.revenue=a.payout,e.ruleForm.adv_tracking_link=a.tracking_link,te(a.country)},re=a=>{var u;e.ruleForm.pkg=a.app_pkg_name,e.ruleForm.channel=a.channel,e.ruleForm.country=a.country;const l=(u=e.options.platform.find(b=>b.label===a.platform))==null?void 0:u.value;e.ruleForm.platform=l||1,e.ruleForm.revenue=a.revenue,e.ruleForm.title=a.title,e.ruleForm.adv_tracking_link=a.tracking_link,e.ruleForm.conversion_flow=9},te=a=>{Array.isArray(a)?e.ruleForm.country=a:e.ruleForm.country=[a]};return(a,l)=>{const u=_("el-form-item"),b=_("el-button"),y=_("el-input"),U=_("el-option"),P=_("el-select"),H=_("el-radio"),ae=_("el-radio-group"),J=_("el-switch"),oe=_("el-form"),ue=pe("loading");return fe((c(),V("div",null,[s(" form "),o(oe,{ref:"ruleForm",enctype:"multipart/form-data",rules:r(e).rules,model:r(e).ruleForm,"label-width":"240px","label-position":"right"},{default:n(()=>[i("div",De,[s(" Offer "),o(u,{label:"Offer:",prop:"offer"},{default:n(()=>[i("div",Te,[i("span",{textContent:_e(r(e).ruleForm.offer_id)},null,8,Be)])]),_:1}),s(" Adv Offer "),o(u,{label:"Adv Offer:",prop:"adv_offer"},{default:n(()=>[i("div",Le,[o(y,{modelValue:r(e).search.adv_offer,"onUpdate:modelValue":l[0]||(l[0]=t=>r(e).search.adv_offer=t),placeholder:"Please input",class:"input-with-select",disabled:r(w)==="edit"},ve({_:2},[r(w)==="create"?{name:"append",fn:n(()=>[o(b,{type:"primary",icon:"Search",onClick:m})])}:void 0]),1032,["modelValue","disabled"])])]),_:1}),s(" Channel "),o(u,{label:"Channel:",prop:"channel"},{default:n(()=>[o(P,{modelValue:r(e).ruleForm.channel,"onUpdate:modelValue":l[1]||(l[1]=t=>r(e).ruleForm.channel=t),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:n(()=>[(c(!0),V(q,null,j(r(e).options.channel,t=>(c(),x(U,{key:t.id,label:t.short_name,value:t.short_name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(" Channel Type "),o(u,{label:"Channel Type:",prop:"channel_type"},{default:n(()=>[o(ae,{modelValue:r(e).ruleForm.channel_type,"onUpdate:modelValue":l[2]||(l[2]=t=>r(e).ruleForm.channel_type=t),class:"form-one"},{default:n(()=>[o(H,{label:1},{default:n(()=>[Re]),_:1}),o(H,{label:2},{default:n(()=>[Ee]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(" Adv Status "),o(u,{label:"Adv Status:",prop:"adv_status"},{default:n(()=>[i("div",Ne,[r(e).ruleForm.adv_status===1?(c(),V("span",$e,"\u5F00")):s("v-if",!0),r(e).ruleForm.adv_status===2?(c(),V("span",ze,"\u5173")):s("v-if",!0)])]),_:1}),s(" conversion_flow "),o(u,{label:"Conversion Flow:",prop:"conversion_flow"},{default:n(()=>[o(P,{modelValue:r(e).ruleForm.conversion_flow,"onUpdate:modelValue":l[3]||(l[3]=t=>r(e).ruleForm.conversion_flow=t),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:n(()=>[(c(!0),V(q,null,j(r(e).options.conversion_flow,t=>(c(),x(U,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(" Status "),o(u,{label:"Status:",prop:"status"},{default:n(()=>[i("div",Me,[o(J,{modelValue:r(e).ruleForm.status,"onUpdate:modelValue":l[4]||(l[4]=t=>r(e).ruleForm.status=t),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]),_:1}),s(" Offer Title "),o(u,{label:"Offer Title:",prop:"title"},{default:n(()=>[i("div",Ge,[o(y,{modelValue:r(e).ruleForm.title,"onUpdate:modelValue":l[5]||(l[5]=t=>r(e).ruleForm.title=t),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),s(" Package Name "),o(u,{label:"Package Name:",prop:"pkg"},{default:n(()=>[i("div",Ie,[o(y,{modelValue:r(e).ruleForm.pkg,"onUpdate:modelValue":l[6]||(l[6]=t=>r(e).ruleForm.pkg=t),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),s(" Attribute Provider "),o(u,{label:"Attribute Provider:",prop:"attribute_provider"},{default:n(()=>[o(P,{modelValue:r(e).ruleForm.attribute_provider,"onUpdate:modelValue":l[7]||(l[7]=t=>r(e).ruleForm.attribute_provider=t),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:n(()=>[(c(!0),V(q,null,j(r(e).options.attribute_provider,t=>(c(),x(U,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(" Pid "),o(u,{label:"Pid:",prop:"pid"},{default:n(()=>[i("div",Ke,[o(y,{modelValue:r(e).ruleForm.pid,"onUpdate:modelValue":l[8]||(l[8]=t=>r(e).ruleForm.pid=t),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),s(" Platform "),o(u,{label:"Platform:",prop:"platform"},{default:n(()=>[o(P,{modelValue:r(e).ruleForm.platform,"onUpdate:modelValue":l[9]||(l[9]=t=>r(e).ruleForm.platform=t),filterable:"",class:"form-one",placeholder:""},{default:n(()=>[(c(!0),V(q,null,j(r(e).options.platform,t=>(c(),x(U,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(" Country "),o(u,{label:"Country:",prop:"country"},{default:n(()=>[o(P,{modelValue:r(e).ruleForm.country,"onUpdate:modelValue":l[10]||(l[10]=t=>r(e).ruleForm.country=t),filterable:"",class:"form-one",multiple:"",clearable:"",placeholder:""},{default:n(()=>[(c(!0),V(q,null,j(r(e).options.country,t=>(c(),x(U,{key:t.id,label:t.short_name+"-"+t.zh_cn,value:t.short_name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(" Revenue "),o(u,{label:"Revenue:",prop:"revenue"},{default:n(()=>[i("div",Je,[o(y,{modelValue:r(e).ruleForm.revenue,"onUpdate:modelValue":l[11]||(l[11]=t=>r(e).ruleForm.revenue=t),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),s(" Manage Traffic "),o(u,{label:"Manage Traffic:",prop:"traffic"},{default:n(()=>[i("div",Ze,[o(r(Oe),{ref:"traffic",list:r(e).ruleForm.traffic,"onUpdate:list":l[12]||(l[12]=t=>r(e).ruleForm.traffic=t),offer:r(e).ruleForm.offer_id,onKk:p},null,8,["list","offer"])])]),_:1}),s(" Adv Tracking Link "),o(u,{label:"Adv Tracking Link:",prop:"adv_tracking_link"},{default:n(()=>[i("div",He,[o(y,{modelValue:r(e).ruleForm.adv_tracking_link,"onUpdate:modelValue":l[13]||(l[13]=t=>r(e).ruleForm.adv_tracking_link=t),rows:3,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),s(" Target CVR "),o(u,{label:"Target CVR:",prop:"target_cvr"},{default:n(()=>[i("div",Qe,[o(y,{modelValue:r(e).ruleForm.target_cvr,"onUpdate:modelValue":l[14]||(l[14]=t=>r(e).ruleForm.target_cvr=t),type:"number",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),s(" CVR Status "),o(u,{label:"CVR Status:",prop:"cvr_status"},{default:n(()=>[i("div",We,[o(J,{modelValue:r(e).ruleForm.cvr_status,"onUpdate:modelValue":l[15]||(l[15]=t=>r(e).ruleForm.cvr_status=t),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]),_:1}),s(" Site Type "),o(u,{label:"Site Type:",prop:"site_type"},{default:n(()=>[o(P,{modelValue:r(e).ruleForm.site_type,"onUpdate:modelValue":l[16]||(l[16]=t=>r(e).ruleForm.site_type=t),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:n(()=>[(c(!0),V(q,null,j(r(e).options.site_type,t=>(c(),x(U,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(" Site Value "),o(u,{label:"Site Value:",prop:"site_value",rules:r(K)?r(e).rules.site_value:r(e).rules.no_required},{default:n(()=>[i("div",Xe,[o(y,{modelValue:r(e).ruleForm.site_value,"onUpdate:modelValue":l[17]||(l[17]=t=>r(e).ruleForm.site_value=t),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1},8,["rules"]),s(" S2S Async "),o(u,{label:"S2S Async:",prop:"is_s2s"},{default:n(()=>[i("div",Ye,[o(J,{modelValue:r(e).ruleForm.is_s2s,"onUpdate:modelValue":l[18]||(l[18]=t=>r(e).ruleForm.is_s2s=t),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]),_:1}),s(" S2S Tracking Link "),o(u,{label:"S2S Tracking Link:",prop:"s2s_tracking_link",rules:r(e).ruleForm.is_s2s===1?r(e).rules.s2s_tracking_link:r(e).rules.no_required},{default:n(()=>[i("div",el,[o(y,{modelValue:r(e).ruleForm.s2s_tracking_link,"onUpdate:modelValue":l[19]||(l[19]=t=>r(e).ruleForm.s2s_tracking_link=t),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1},8,["rules"]),s(" Preview URL "),o(u,{label:"Preview URL:",prop:"app_url",rules:r(e).ruleForm.is_s2s===1?r(e).rules.app_url:r(e).rules.no_required},{default:n(()=>[i("div",ll,[o(y,{modelValue:r(e).ruleForm.app_url,"onUpdate:modelValue":l[20]||(l[20]=t=>r(e).ruleForm.app_url=t),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1},8,["rules"]),s(" Description "),o(u,{label:"Description:",prop:"description"},{default:n(()=>[i("div",rl,[o(y,{modelValue:r(e).ruleForm.description,"onUpdate:modelValue":l[21]||(l[21]=t=>r(e).ruleForm.description=t),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),s(" end ")])]),_:1},8,["rules","model"]),s(" form "),s(" footer "),i("div",tl,[o(b,{type:"primary",onClick:me(C,["prevent"])},{default:n(()=>[al]),_:1},8,["onClick"])])])),[[ue,r(O)]])}}});export{pl as default};
