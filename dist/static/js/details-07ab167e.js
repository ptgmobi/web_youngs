var he=Object.defineProperty;var le=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var te=(k,b,p)=>b in k?he(k,b,{enumerable:!0,configurable:!0,writable:!0,value:p}):k[b]=p,X=(k,b)=>{for(var p in b||(b={}))Ve.call(b,p)&&te(k,p,b[p]);if(le)for(var p of le(b))we.call(b,p)&&te(k,p,b[p]);return k};import{d as H,z as T,w as Q,C as re,r as c,o as F,k as j,v as d,x as l,h as a,F as z,l as I,c as L,j as t,i as _,y as U,a as R,b as J,al as xe,t as M,ae as W,q as ke,s as Ce,m as ae,f as Ee,ag as oe,ak as Ae,N as qe,J as Se,R as De}from"./vendor-f1931894.js";import{_ as ue}from"./lodash-43532635.js";import{l as Be,p as je,q as $e,r as Ue,s as Oe,t as Pe,u as Le,v as Te,w as Re}from"./fenix-5de25da5.js";import{c as Ne}from"./clipboard-a08de50c.js";import{m as ze}from"./message-c1123ca0.js";import{b as se,r as Ie}from"./new-format-4ed41873.js";import{_ as ne}from"./index-fafcd2bc.js";const Me={class:"flex jc-end"},Ge=U(" Add "),Ke={class:"flex"},Je=U(" Copy "),Ze=H({props:{list:{require:!0,default:()=>[],type:Array},offer:{require:!0,default:"",type:String}},emits:["kk","up"],setup(k,{emit:b}){const p=k,m=T({pub:[{id:"",pub_name:""}]}),q={"55527824":.1,"95108831":.1,"95846929":.005,"59845210":.005};let g=T({manage_traffic:[]});const D={pub:"",slotid:"",payout:void 0,cap_daily:void 0,pub_status:1,pub_tracking_link:""},P=()=>{g.manage_traffic.push(ue.cloneDeep(D))},f=s=>{const n=s.$index;g.manage_traffic.splice(n,1)},E=s=>{const{row:n}=s,V="http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}";n.pub_tracking_link=V;const y=m.pub.find(O=>O.pub_name===n.pub);console.log(y),n.slotid=y.slot_id,n.pub_status=y.status,n.pub_tracking_link=V.replace("{offer}",p.offer).replace("{slot}",y.slot_id),q[y.slot_id]&&(n.payout=q[y.slot_id])},e=({row:s})=>{const{pub_tracking_link:n}=s;Ne(n)},S=({row:s})=>{console.log(s)},v=async()=>{console.log("traffic init");const{data:s}=await Be();m.pub=s};return Q(()=>p.list,(s,n)=>{g.manage_traffic=s},{immediate:!0,deep:!0}),Q(()=>g.manage_traffic,(s,n)=>{},{immediate:!0,deep:!0}),re(()=>{v(),P()}),(s,n)=>{const V=c("el-button"),y=c("el-option"),O=c("el-select"),$=c("el-table-column"),h=c("el-input"),N=c("el-switch"),Z=c("el-table");return F(),j("div",null,[d("div",Me,[l(V,{type:"primary",onClick:P},{default:a(()=>[Ge]),_:1})]),l(Z,{class:"mt-10",data:t(g).manage_traffic,style:{width:"100%"},border:""},{default:a(()=>[l($,{label:"Pub Name",align:"center"},{default:a(w=>[l(O,{modelValue:w.row.pub,"onUpdate:modelValue":x=>w.row.pub=x,filterable:"",clearable:"",placeholder:"",onChange:x=>E(w)},{default:a(()=>[(F(!0),j(z,null,I(t(m).pub,x=>{var C;return F(),L(y,{key:x.id,label:x.pub_name,value:(C=x.pub_name)!=null?C:x.id},null,8,["label","value"])}),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),l($,{label:"Payout",align:"center"},{default:a(w=>[l(h,{modelValue:w.row.payout,"onUpdate:modelValue":x=>w.row.payout=x,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l($,{label:"Cap Daily",align:"center"},{default:a(w=>[l(h,{modelValue:w.row.cap_daily,"onUpdate:modelValue":x=>w.row.cap_daily=x,type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l($,{label:"Operation",align:"center",width:"180px"},{default:a(w=>[d("div",Ke,[l(V,{class:"mr-10",type:"danger",icon:"Delete",circle:"",onClick:x=>f(w)},null,8,["onClick"]),l(N,{modelValue:w.row.pub_status,"onUpdate:modelValue":x=>w.row.pub_status=x,"active-value":1,"inactive-value":2,class:"mr-10",onChange:x=>S(w)},null,8,["modelValue","onUpdate:modelValue","onChange"]),w.row.pub_tracking_link?(F(),L(V,{key:0,class:"cp",type:"primary",onClick:x=>e(w)},{default:a(()=>[Je]),_:2},1032,["onClick"])):_("v-if",!0)])]),_:1})]),_:1},8,["data"])])}}}),He={class:"w100"},Qe={class:"content-con flex column"},We={class:"flex jc-start ai-center form-one"},Xe={class:"w100 flex mt-10"},Ye=U("Save"),el=H({emits:["update:visible","uploadData"],setup(k,{emit:b}){const p=R(),m=/^[0-9a-z]{8,8}$/;let q=(E,e,S)=>{if(e!==""){const v=se(e,1,m).type;S(v?void 0:new Error("\u683C\u5F0F\u9519\u8BEF\uFF01"))}else S(new Error("\u5FC5\u586B\u9879"))};const g=J(()=>se(D.ruleForm.site_list,1,m).data);let D=T({ruleForm:{site_list:""},rules:{site_list:[{required:!0,message:"\u5FC5\u586B\u9879",trigger:["blur"]},{validator:q,trigger:["blur"]}]}});const P=E=>{!E||E.validate(e=>{if(e)console.log("submit!"),f();else return console.log("error submit!"),!1})},f=()=>{b("uploadData",g.value),D.ruleForm.site_list="",b("update:visible",!1)};return(E,e)=>{const S=c("el-input"),v=c("el-form-item"),s=c("el-form"),n=c("el-button");return F(),j("div",He,[l(s,{ref_key:"ruleFormRef",ref:p,enctype:"multipart/form-data",rules:t(D).rules,model:t(D).ruleForm,"label-width":"140px","label-position":"right"},{default:a(()=>[d("div",Qe,[_(" Offer "),l(v,{label:"Site:",prop:"site_list"},{default:a(()=>[d("div",We,[l(S,{modelValue:t(D).ruleForm.site_list,"onUpdate:modelValue":e[0]||(e[0]=V=>t(D).ruleForm.site_list=V),rows:4,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),_(" end ")])]),_:1},8,["rules","model"]),d("div",Xe,[l(n,{type:"primary",onClick:e[1]||(e[1]=V=>P(p.value))},{default:a(()=>[Ye]),_:1})])])}}});const ll=k=>(ke("data-v-661f6240"),k=k(),Ce(),k),tl={class:"w100"},rl=ll(()=>d("div",{class:"mb-10"},null,-1)),al={class:"control-box flex jc-between ai-start w100"},ol=U("\u589E\u91CF\u751F\u6210"),ul=U("\u6279\u91CF\u4E0A\u4F20"),sl=U("\u6E05\u7A7A"),nl={class:"body-box mt-10"},il={class:"flex"},dl=H({props:{msg:{require:!0,default:()=>"",type:String}},emits:["update:msg"],setup(k,{emit:b}){const p=k;let m=R(!1),g=T({ruleForm:{site_num:0,site_value:(v=>v.split(","))(p.msg)},rules:{}});const D=J(()=>g.ruleForm.site_value);J(()=>g.ruleForm.site_value.length);const P=()=>{if(g.ruleForm.site_num>0){let v=Math.floor(g.ruleForm.site_num);for(let s=0;s<v;s++){const n=Ie(8);g.ruleForm.site_value.push(n)}}g.ruleForm.site_num=0},f=()=>{m.value=!0},E=()=>{g.ruleForm.site_value=[]},e=v=>{const{$index:s,row:n}=v;console.log(s,n),g.ruleForm.site_value.splice(s,1)},S=v=>{v.map(s=>{g.ruleForm.site_value.push(s[0])})};return xe(()=>{const v=g.ruleForm.site_value.join(",");b("update:msg",v)}),(v,s)=>{const n=c("el-button"),V=c("el-input"),y=c("el-table-column"),O=c("el-table"),$=c("el-dialog");return F(),j("div",tl,[rl,_(" \u64CD\u4F5C "),d("div",al,[l(V,{modelValue:t(g).ruleForm.site_num,"onUpdate:modelValue":s[0]||(s[0]=h=>t(g).ruleForm.site_num=h),placeholder:"Please input",type:"number",max:"1000",class:"input-with-select search-con"},{append:a(()=>[l(n,{onClick:P},{default:a(()=>[ol]),_:1})]),_:1},8,["modelValue"]),l(n,{class:"cp mb-10",onClick:f,type:"primary"},{default:a(()=>[ul]),_:1}),l(n,{class:"cp mb-10",onClick:E,type:"primary"},{default:a(()=>[sl]),_:1})]),_(" table "),d("div",nl,[l(O,{data:t(D),class:"w100",height:"400px",border:""},{default:a(()=>[l(y,{label:"site_id",align:"center"},{default:a(h=>[d("div",null,[d("span",null,M(h.row),1)])]),_:1}),l(y,{label:"\u8BBE\u7F6E",align:"center"},{default:a(h=>[d("div",il,[l(n,{type:"danger",icon:"Delete",circle:"",onClick:N=>e(h)},null,8,["onClick"])])]),_:1})]),_:1},8,["data"])]),_(" dialog "),l($,{modelValue:t(m),"onUpdate:modelValue":s[2]||(s[2]=h=>W(m)?m.value=h:m=h),title:"site",width:"60%"},{default:a(()=>[l(el,{visible:t(m),"onUpdate:visible":s[1]||(s[1]=h=>W(m)?m.value=h:m=h),onUploadData:S},null,8,["visible"])]),_:1},8,["modelValue"])])}}});var _l=ne(dl,[["__scopeId","data-v-661f6240"]]);const cl={class:"content-con flex column"},ml={class:"flex jc-start ai-center form-one"},pl=["textContent"],fl={class:"flex jc-start ai-center form-one"},vl=["textContent"],gl={class:"flex jc-start ai-center form-one"},Fl={class:"ml-10"},bl={class:"flex jc-start ai-center form-one"},yl={class:"ml-10"},hl={class:"flex jc-start ai-center form-one"},Vl=U("\u9ED8\u8BA4"),wl=U("\u81EA\u5B9A\u4E49"),xl={class:"ml-10"},kl={class:"flex jc-start ai-center form-one"},Cl={class:"flex jc-start ai-center form-one"},El={class:"ml-10"},Al={class:"flex jc-start ai-center form-one"},ql={class:"flex jc-start ai-center form-one"},Sl={class:"w100 flex"},Dl=U(" \u63D0\u4EA4 "),Bl=H({props:{msg:{require:!0,default:()=>({}),type:Object}},emits:["update:visible","updateData"],setup(k,{emit:b}){const p=k,m=R();let q={required:"\u5FC5\u586B\u9879"};const g=(v,s,n)=>{s&&s.split(",").length>1e3?n(new Error("site value \u7684\u503C\u4E0D\u53EF\u5927\u4E8E1000\u4E2A")):n(void 0)},D=(v,s,n)=>{s?parseInt(s)===parseFloat(s)?Number(s)>5?n(void 0):n(new Error("\u5FC5\u987B\u4E3A\u5927\u4E8E5\u7684\u6574\u6570")):n(new Error("\u5FC5\u987B\u4E3A\u6574\u6570")):n(void 0)},P=T({offer_id:[{required:!0,message:q.required,trigger:["blur","change"]}],adv_offer:[{required:!0,message:q.required,trigger:["blur","change"]}],status_day:[{required:!0,message:q.required,trigger:["blur","change"]}],day_limit:[{required:!0,message:q.required,trigger:["blur","change"]},{validator:D,trigger:["blur","change"]}],day_limit_type:[{required:!0,message:q.required,trigger:["blur","change"]}],day_limit_value:[{required:!0,message:q.required,trigger:["blur","change"]}],status_hour:[{required:!0,message:q.required,trigger:["blur","change"]}],site_value:[{required:!0,message:q.required,trigger:["blur","change"]},{validator:g,trigger:["blur","change"]}]});let f=T({ruleForm:{offer_id:"",adv_offer:"",channel_type:2,status_day:2,day_limit:15,day_limit_type:1,day_limit_value:"",status_hour:2,site_value:""}});const E=J(()=>f.ruleForm.site_value?f.ruleForm.site_value.split(",").length:0);Q(()=>p.msg,(v,s)=>{let n=p.msg.fenix_site,V=n.status_day||2,y=n.status_hour||2;p.msg.channel_type===2&&(V=2,y=2),f.ruleForm={offer_id:n.offer_id||p.msg.offer_id,adv_offer:n.adv_offer||p.msg.adv_offer,channel_type:p.msg.channel_type,status_day:V,day_limit:n.day_limit||15,day_limit_type:n.day_limit_type||1,day_limit_value:n.day_limit_value||"",status_hour:y,site_value:p.msg.site_value}},{deep:!0,immediate:!0});const e=v=>{!v||v.validate(s=>{if(s)console.log("submit!"),S();else return console.log("error submit!"),!1})},S=()=>{b("updateData",f.ruleForm),b("update:visible",!1)};return(v,s)=>{const n=c("el-form-item"),V=c("el-switch"),y=c("info-filled"),O=c("el-icon"),$=c("el-tooltip"),h=c("el-input"),N=c("el-radio"),Z=c("el-radio-group"),w=c("el-form"),x=c("el-button");return F(),j("div",null,[l(w,{ref_key:"ruleFormRef",ref:m,enctype:"multipart/form-data",rules:t(P),model:t(f).ruleForm,"label-width":"150px","label-position":"right"},{default:a(()=>[d("div",cl,[_(" Offer "),l(n,{label:"Offer:",prop:"offer_id"},{default:a(()=>[d("div",ml,[d("span",{textContent:M(t(f).ruleForm.offer_id)},null,8,pl)])]),_:1}),_(" Offer "),l(n,{label:"Adv Offer:",prop:"adv_offer"},{default:a(()=>[d("div",fl,[d("span",{textContent:M(t(f).ruleForm.adv_offer)},null,8,vl)])]),_:1}),_(" Offer "),l(n,{label:"\u5206\u5929\u4F18\u9009:",prop:"status_day"},{default:a(()=>[d("div",gl,[l(V,{disabled:p.msg.channel_type==2,modelValue:t(f).ruleForm.status_day,"onUpdate:modelValue":s[0]||(s[0]=C=>t(f).ruleForm.status_day=C),"active-value":1,"inactive-value":2},null,8,["disabled","modelValue"]),d("span",Fl,[l($,{content:"\u6839\u636E\u6628\u5929\u6570\u636E\u7B5B\u9009\u7B26\u5408\u6761\u4EF6\u7684site_id\u4F7F\u7528",placement:"right-start"},{default:a(()=>[l(O,null,{default:a(()=>[l(y)]),_:1})]),_:1})])])]),_:1}),l(n,{label:"\u5206\u5929\u4F18\u9009\u542F\u52A8\u6761\u4EF6:",prop:"day_limit"},{default:a(()=>[d("div",bl,[l(h,{modelValue:t(f).ruleForm.day_limit,"onUpdate:modelValue":s[1]||(s[1]=C=>t(f).ruleForm.day_limit=C),placeholder:"\u9ED8\u8BA4\u503C\u4E3A15",min:"5",step:"1",class:"input-with-select",type:"number"},null,8,["modelValue"]),d("span",yl,[l($,{content:"\u5F53\u6628\u5929site_id\u7684\u5E73\u5747install\u6570\u5927\u4E8E\u7B49\u4E8E\u8BBE\u5B9A\u503C\u65F6\u624D\u542F\u52A8\u81EA\u52A8\u4F18\u9009\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A15",placement:"bottom"},{default:a(()=>[l(O,null,{default:a(()=>[l(y)]),_:1})]),_:1})])])]),_:1}),l(n,{label:"\u5206\u5929\u4F18\u9009install\u9650\u5236:",prop:"day_limit_type"},{default:a(()=>[d("div",hl,[l(Z,{class:"flex",modelValue:t(f).ruleForm.day_limit_type,"onUpdate:modelValue":s[2]||(s[2]=C=>t(f).ruleForm.day_limit_type=C)},{default:a(()=>[l(N,{label:1},{default:a(()=>[Vl]),_:1}),l(N,{label:2},{default:a(()=>[wl]),_:1})]),_:1},8,["modelValue"]),d("span",xl,[l($,{content:"\u6839\u636Esite_id\u7684install\u6570\u7B5B\u9009\uFF0C\u4EC5\u4F7F\u7528\u5927\u4E8E\u7B49\u4E8E\u8BBE\u5B9A\u503C\u7684site_id\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u6628\u5929\u5747\u503C\u9664\u4EE55",placement:"right-start"},{default:a(()=>[l(O,null,{default:a(()=>[l(y)]),_:1})]),_:1})])])]),_:1}),t(f).ruleForm.day_limit_type===2?(F(),L(n,{key:0,label:"\u5206\u5929\u4F18\u9009install\u9650\u5236\u503C:",prop:"day_limit_value"},{default:a(()=>[d("div",kl,[l(h,{type:"number",modelValue:t(f).ruleForm.day_limit_value,"onUpdate:modelValue":s[3]||(s[3]=C=>t(f).ruleForm.day_limit_value=C),placeholder:"",class:"input-with-select"},null,8,["modelValue"])])]),_:1})):_("v-if",!0),l(n,{label:"\u5206\u65F6\u4F18\u9009:",prop:"status_hour"},{default:a(()=>[d("div",Cl,[l(V,{disabled:p.msg.channel_type==2,modelValue:t(f).ruleForm.status_hour,"onUpdate:modelValue":s[4]||(s[4]=C=>t(f).ruleForm.status_hour=C),"active-value":1,"inactive-value":2},null,8,["disabled","modelValue"]),d("span",El,[l($,{content:"\u6839\u636E\u524D6\u5C0F\u65F6\u548C\u524D2\u5C0F\u65F6\u6570\u636E\u7B5B\u9009\u7B26\u5408\u6761\u4EF6\u7684site_id\u4F7F\u7528\uFF0C\u6682\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49",placement:"right-start"},{default:a(()=>[l(O,null,{default:a(()=>[l(y)]),_:1})]),_:1})])])]),_:1}),l(n,{label:"\u5F53\u524D\u6E20\u9053\u6570:",prop:"site_value"},{default:a(()=>[d("div",Al,[l(h,{type:"hidden",modelValue:t(E),"onUpdate:modelValue":s[5]||(s[5]=C=>W(E)?E.value=C:null),disabled:""},null,8,["modelValue"]),U(" "+M(t(E)),1)])]),_:1}),l(n,{label:""},{default:a(()=>[d("div",ql,[l(_l,{msg:t(f).ruleForm.site_value,"onUpdate:msg":s[6]||(s[6]=C=>t(f).ruleForm.site_value=C)},null,8,["msg"])])]),_:1}),_(" end ")])]),_:1},8,["rules","model"]),_(" form "),_(" footer "),d("div",Sl,[l(x,{type:"primary",onClick:s[7]||(s[7]=ae(C=>e(m.value),["prevent"]))},{default:a(()=>[Dl]),_:1})])])}}});const jl={class:"content-con flex column"},$l={class:"flex jc-start ai-center form-one"},Ul=["textContent"],Ol={class:"flex jc-start ai-center form-one"},Pl=U(" BUZZ "),Ll=U(" SDK "),Tl={class:"flex jc-start ai-center form-one"},Rl={key:0},Nl={key:1},zl={class:"flex jc-start ai-center form-one"},Il={class:"flex jc-start ai-center form-one"},Ml={class:"flex jc-start ai-center form-one"},Gl={class:"flex jc-start ai-center form-one"},Kl={class:"flex jc-start ai-center form-one"},Jl={class:"form-one"},Zl={class:"flex jc-start ai-center form-one"},Hl={class:"flex jc-start ai-center form-one"},Ql={class:"flex jc-start ai-center form-one"},Wl={class:"form-one"},Xl={class:"flex ai-center jc-start mb-10"},Yl={class:"text-wrap"},et={class:"flex jc-start ai-center form-one"},lt={class:"flex jc-start ai-center form-one"},tt={class:"flex jc-start ai-center form-one"},rt={class:"flex jc-start ai-center form-one"},at={class:"w100 flex"},ot=U(" Save "),ut=H({setup(k){let{proxy:b}=De();const p=Ee(),m={required:"\u6B64\u9879\u5FC5\u586B"},q=u=>{let r=!0;return u.map(i=>{for(const A in i)if(Object.prototype.hasOwnProperty.call(i,A)){const B=i[A];if((B===""||B===void 0)&&B!==0){r=!1;break}}}),r},g=(u,r,i)=>{r&&r.split(",").length>1e3?i(new Error("site value \u7684\u503C\u4E0D\u53EF\u5927\u4E8E1000\u4E2A")):i(void 0)};let D=(u,r,i)=>{r.length!==0?q(r)?i(void 0):i(new Error("\u4E0D\u5141\u8BB8\u6709\u7A7A\u503C")):i(void 0)},P=(u,r,i)=>{r.length!==0?r.length>1?i(new Error("\u53EA\u80FD\u586B\u9009\u4E00\u4E2A\u56FD\u5BB6")):i(void 0):i(new Error(m.required))};const f={id:void 0,offer_id:"",adv_offer:"",create_type:1,channel:"",channel_type:1,adv_status:1,conversion_flow:void 0,status:1,title:"",pkg:"",attribute_provider:"",pid:"",platform:1,country:[],revenue:void 0,traffic:[],adtype:38,update_date:"",adv_tracking_link:"",target_cvr:void 0,cvr_status:2,is_s2s:2,s2s_tracking_link:"",app_url:"",site_type:"rule_value",site_value:"",description:"",fenix_site:{}};let E=R(!1);const e=T({options:{channel:[{id:"",short_name:""}],country:[{id:"",short_name:"",zh_cn:""}],conversion_flow:[{value:1,label:"CPI"},{value:2,label:"CPA"},{value:9,label:"SDK"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],site_type:[{value:"rule_sdkindex",label:"\u5339\u914DSDK\u81EA\u5B9A\u4E49"},{value:"rule_pubredirect",label:"\u900F\u4F20\u6E20\u9053ID"},{value:"rule_slotid",label:"\u6E20\u9053slotid"},{value:"rule_value",label:"\u56FA\u5B9A\u503C"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}]},rules:{no_required:[{required:!1}],channel:[{required:!0,message:m.required,trigger:["blur","change"]}],channel_type:[{required:!0,message:m.required,trigger:["blur","change"]}],status:[{required:!0,message:m.required,trigger:["blur","change"]}],title:[{required:!0,message:m.required,trigger:["blur","change"]}],pkg:[{required:!0,message:m.required,trigger:["blur","change"]}],platform:[{required:!0,message:m.required,trigger:["blur","change"]}],country:[{required:!0,message:m.required,trigger:["blur","change"]},{validator:P,trigger:["blur","change"]}],revenue:[{required:!0,message:m.required,trigger:["blur","change"]}],traffic:[{required:!1,validator:D,trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:m.required,trigger:["blur","change"]}],site_type:[{required:!0,message:m.required,trigger:["blur","change"]}],site_value:[{required:!0,message:m.required,trigger:["blur","change"]},{validator:g,trigger:["blur","change"]}],is_s2s:[{required:!0,message:m.required,trigger:["blur","change"]}],s2s_tracking_link:[{required:!0,message:m.required,trigger:["blur","change"]}],app_url:[{required:!0,message:m.required,trigger:["blur","change"]}]},ruleForm:f,search:{adv_offer:""}});let S=R(""),v=R(""),s=R(""),n=R(!1);const V=u=>{const r=[];return u.map(i=>{let A=X({},i);return i.payout&&(A.payout=Number(i.payout)),i.cap_daily&&(A.cap_daily=Number(i.cap_daily)),r.push(A),i}),r},y=async()=>{E.value=!0;const u=ue.cloneDeep(e.ruleForm);let r=X({},u);if(u.conversion_flow&&(r.conversion_flow=u.conversion_flow),r.country=u.country[0],r.revenue=parseFloat(r.revenue),r.target_cvr=parseFloat(r.target_cvr),r.fenix_site.day_limit&&(r.fenix_site.day_limit=parseFloat(r.fenix_site.day_limit)),r.fenix_site.day_limit_value?r.fenix_site.day_limit_value=parseFloat(r.fenix_site.day_limit_value):delete r.fenix_site.day_limit_value,u.traffic.length!==0){const A=V(u.traffic);r.traffic=JSON.stringify(A)}else delete r.traffic;let i;s.value==="create"&&(i=await Te(r)),s.value==="edit"&&(i=await Re(r)),E.value=!1,ze(i)&&window.close()},O=()=>{n.value=!0},$=()=>{b.$refs.ruleForm.validate(u=>{if(console.log(u),u)console.log("submit!"),y();else return console.log("error submit!!"),!1})},h=async()=>{const u=await $e();if(u.code===200){const{offer_id:r}=u;e.ruleForm.offer_id=r.toString()}else h()},N=async()=>await Promise.all([w(),x()]),Z=J(()=>e.ruleForm.site_value?e.ruleForm.site_value.split(",").length:0),w=async()=>{const{data:u}=await Ue();return e.options.channel=u,u},x=async()=>{const{data:u}=await Oe();return e.options.country=u,u};T({ruleForm:f}),re(async()=>{C()});const C=async()=>{S.value=p.currentRoute.value.name,v.value=p.currentRoute.value.params.id,S.value==="fenix-offer-create"&&(h(),s.value="create"),S.value==="fenix-offer-edit"&&(v.value=p.currentRoute.value.params.id,s.value="edit",ie()),await N()},ie=async()=>{const{data:u}=await je(v.value);e.ruleForm=X({},u),e.ruleForm.country=[u.country],e.search.adv_offer=u.adv_offer,e.ruleForm.traffic=u.traffic?JSON.parse(u.traffic):[],oe(e.ruleForm)},de=J(()=>e.ruleForm.site_type==="rule_value");Q(()=>e.ruleForm.traffic,(u,r)=>{},{immediate:!0,deep:!0}),Q(()=>e.ruleForm.adv_offer,(u,r)=>{u?e.ruleForm.create_type=2:e.ruleForm.create_type=1},{immediate:!0,deep:!0});const _e=u=>{console.log(u)},ce=async()=>{if(s.value==="edit")return!1;console.log("get adv offer"),e.ruleForm.adv_offer=e.search.adv_offer;const u=e.ruleForm.adv_offer;if(!u)return!1;const r={adv_offer:u,platform:e.ruleForm.platform};if(u&&u.includes("_")){console.log("get offer for dump"),e.ruleForm.channel_type=2,e.ruleForm.adtype=39;const i=await Pe(r),{data:A}=i;i.status===200?(e.ruleForm.adv_status=1,pe(A)):(console.log("\u6CA1\u6709dump offer"),e.ruleForm.adv_status=2)}else{console.log("get offer for buzz"),e.ruleForm.channel_type=1,e.ruleForm.adtype=38;const{data:i}=await Le(r);console.log(i),e.ruleForm.adv_status=i.status,me(i)}},me=u=>{e.ruleForm.channel=u.channel,e.ruleForm.attribute_provider=u.attribute_provider,e.ruleForm.conversion_flow=u.conversion_flow,e.ruleForm.title=u.title,e.ruleForm.pkg=u.pkg_name,e.ruleForm.pid=u.pid,e.ruleForm.platform=u.platform,e.ruleForm.revenue=u.payout,e.ruleForm.adv_tracking_link=u.tracking_link,fe(u.country)},pe=u=>{var i;e.ruleForm.pkg=u.app_pkg_name,e.ruleForm.channel=u.channel,e.ruleForm.country=u.country;const r=(i=e.options.platform.find(A=>A.label===u.platform))==null?void 0:i.value;e.ruleForm.platform=r||1,e.ruleForm.revenue=u.revenue,e.ruleForm.title=u.title,e.ruleForm.adv_tracking_link=u.tracking_link,e.ruleForm.conversion_flow=9},fe=u=>{Array.isArray(u)?e.ruleForm.country=u:e.ruleForm.country=[u]},ve=u=>{console.log("site_value",u.site_value.length),e.ruleForm.site_value=u.site_value,e.ruleForm.fenix_site=oe(u)};return(u,r)=>{const i=c("el-form-item"),A=c("el-button"),B=c("el-input"),G=c("el-option"),K=c("el-select"),ee=c("el-radio"),ge=c("el-radio-group"),Y=c("el-switch"),Fe=c("el-form"),be=c("el-dialog"),ye=Ae("loading");return qe((F(),j("div",null,[_(" form "),l(Fe,{ref:"ruleForm",enctype:"multipart/form-data",rules:t(e).rules,model:t(e).ruleForm,"label-width":"240px","label-position":"right"},{default:a(()=>[d("div",jl,[_(" Offer "),l(i,{label:"Offer:",prop:"offer"},{default:a(()=>[d("div",$l,[d("span",{textContent:M(t(e).ruleForm.offer_id)},null,8,Ul)])]),_:1}),_(" Adv Offer "),l(i,{label:"Adv Offer:",prop:"adv_offer"},{default:a(()=>[d("div",Ol,[l(B,{modelValue:t(e).search.adv_offer,"onUpdate:modelValue":r[0]||(r[0]=o=>t(e).search.adv_offer=o),placeholder:"Please input",class:"input-with-select",disabled:t(s)==="edit"},Se({_:2},[t(s)==="create"?{name:"append",fn:a(()=>[l(A,{type:"primary",icon:"Search",onClick:ce})])}:void 0]),1032,["modelValue","disabled"])])]),_:1}),_(" Channel "),l(i,{label:"Channel:",prop:"channel"},{default:a(()=>[l(K,{modelValue:t(e).ruleForm.channel,"onUpdate:modelValue":r[1]||(r[1]=o=>t(e).ruleForm.channel=o),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:a(()=>[(F(!0),j(z,null,I(t(e).options.channel,o=>(F(),L(G,{key:o.id,label:o.short_name,value:o.short_name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),_(" Channel Type "),l(i,{label:"Channel Type:",prop:"channel_type"},{default:a(()=>[l(ge,{modelValue:t(e).ruleForm.channel_type,"onUpdate:modelValue":r[2]||(r[2]=o=>t(e).ruleForm.channel_type=o),class:"form-one"},{default:a(()=>[l(ee,{label:1},{default:a(()=>[Pl]),_:1}),l(ee,{label:2},{default:a(()=>[Ll]),_:1})]),_:1},8,["modelValue"])]),_:1}),_(" Adv Status "),l(i,{label:"Adv Status:",prop:"adv_status"},{default:a(()=>[d("div",Tl,[t(e).ruleForm.adv_status===1?(F(),j("span",Rl,"\u5F00")):_("v-if",!0),t(e).ruleForm.adv_status===2?(F(),j("span",Nl,"\u5173")):_("v-if",!0)])]),_:1}),_(" conversion_flow "),l(i,{label:"Conversion Flow:",prop:"conversion_flow"},{default:a(()=>[l(K,{modelValue:t(e).ruleForm.conversion_flow,"onUpdate:modelValue":r[3]||(r[3]=o=>t(e).ruleForm.conversion_flow=o),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:a(()=>[(F(!0),j(z,null,I(t(e).options.conversion_flow,o=>(F(),L(G,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),_(" Status "),l(i,{label:"Status:",prop:"status"},{default:a(()=>[d("div",zl,[l(Y,{modelValue:t(e).ruleForm.status,"onUpdate:modelValue":r[4]||(r[4]=o=>t(e).ruleForm.status=o),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]),_:1}),_(" Offer Title "),l(i,{label:"Offer Title:",prop:"title"},{default:a(()=>[d("div",Il,[l(B,{modelValue:t(e).ruleForm.title,"onUpdate:modelValue":r[5]||(r[5]=o=>t(e).ruleForm.title=o),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),_(" Package Name "),l(i,{label:"Package Name:",prop:"pkg"},{default:a(()=>[d("div",Ml,[l(B,{modelValue:t(e).ruleForm.pkg,"onUpdate:modelValue":r[6]||(r[6]=o=>t(e).ruleForm.pkg=o),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),_(" Attribute Provider "),l(i,{label:"Attribute Provider:",prop:"attribute_provider"},{default:a(()=>[l(K,{modelValue:t(e).ruleForm.attribute_provider,"onUpdate:modelValue":r[7]||(r[7]=o=>t(e).ruleForm.attribute_provider=o),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:a(()=>[(F(!0),j(z,null,I(t(e).options.attribute_provider,o=>(F(),L(G,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),_(" Pid "),l(i,{label:"Pid:",prop:"pid"},{default:a(()=>[d("div",Gl,[l(B,{modelValue:t(e).ruleForm.pid,"onUpdate:modelValue":r[8]||(r[8]=o=>t(e).ruleForm.pid=o),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),_(" Platform "),l(i,{label:"Platform:",prop:"platform"},{default:a(()=>[l(K,{modelValue:t(e).ruleForm.platform,"onUpdate:modelValue":r[9]||(r[9]=o=>t(e).ruleForm.platform=o),filterable:"",class:"form-one",placeholder:""},{default:a(()=>[(F(!0),j(z,null,I(t(e).options.platform,o=>(F(),L(G,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),_(" Country "),l(i,{label:"Country:",prop:"country"},{default:a(()=>[l(K,{modelValue:t(e).ruleForm.country,"onUpdate:modelValue":r[10]||(r[10]=o=>t(e).ruleForm.country=o),filterable:"",class:"form-one",multiple:"",clearable:"",placeholder:""},{default:a(()=>[(F(!0),j(z,null,I(t(e).options.country,o=>(F(),L(G,{key:o.id,label:o.short_name+"-"+o.zh_cn,value:o.short_name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),_(" Revenue "),l(i,{label:"Revenue:",prop:"revenue"},{default:a(()=>[d("div",Kl,[l(B,{modelValue:t(e).ruleForm.revenue,"onUpdate:modelValue":r[11]||(r[11]=o=>t(e).ruleForm.revenue=o),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),_(" Manage Traffic "),l(i,{label:"Manage Traffic:",prop:"traffic"},{default:a(()=>[d("div",Jl,[l(t(Ze),{ref:"traffic",list:t(e).ruleForm.traffic,"onUpdate:list":r[12]||(r[12]=o=>t(e).ruleForm.traffic=o),offer:t(e).ruleForm.offer_id,onKk:_e},null,8,["list","offer"])])]),_:1}),_(" Adv Tracking Link "),l(i,{label:"Adv Tracking Link:",prop:"adv_tracking_link"},{default:a(()=>[d("div",Zl,[l(B,{modelValue:t(e).ruleForm.adv_tracking_link,"onUpdate:modelValue":r[13]||(r[13]=o=>t(e).ruleForm.adv_tracking_link=o),rows:4,autosize:"",type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),_(" Target CVR "),l(i,{label:"Target CVR:",prop:"target_cvr"},{default:a(()=>[d("div",Hl,[l(B,{modelValue:t(e).ruleForm.target_cvr,"onUpdate:modelValue":r[14]||(r[14]=o=>t(e).ruleForm.target_cvr=o),type:"number",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),_(" CVR Status "),l(i,{label:"CVR Status:",prop:"cvr_status"},{default:a(()=>[d("div",Ql,[l(Y,{modelValue:t(e).ruleForm.cvr_status,"onUpdate:modelValue":r[15]||(r[15]=o=>t(e).ruleForm.cvr_status=o),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]),_:1}),_(" Site Type "),l(i,{label:"Site Type:",prop:"site_type"},{default:a(()=>[l(K,{modelValue:t(e).ruleForm.site_type,"onUpdate:modelValue":r[16]||(r[16]=o=>t(e).ruleForm.site_type=o),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:a(()=>[(F(!0),j(z,null,I(t(e).options.site_type,o=>(F(),L(G,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),_(" Site Value "),l(i,{label:"Site Value:",prop:"site_value",rules:t(de)?t(e).rules.site_value:t(e).rules.no_required},{default:a(()=>[d("div",Wl,[d("div",Xl,[l(A,{class:"cp mr-10",icon:"Tools",circle:"",onClick:O}),d("span",null,M(t(Z)),1)]),d("div",null,[_(` <el-input
                v-model="state.ruleForm.site_value"
                type="textarea"
                autosize
                :rows="4"
                placeholder="Please input"
                class="input-with-select siteValue"
              /> `),d("p",Yl,M(t(e).ruleForm.site_value),1)])])]),_:1},8,["rules"]),_(" S2S Async "),l(i,{label:"S2S Async:",prop:"is_s2s"},{default:a(()=>[d("div",et,[l(Y,{modelValue:t(e).ruleForm.is_s2s,"onUpdate:modelValue":r[17]||(r[17]=o=>t(e).ruleForm.is_s2s=o),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]),_:1}),_(" S2S Tracking Link "),l(i,{label:"S2S Tracking Link:",prop:"s2s_tracking_link",rules:t(e).ruleForm.is_s2s===1?t(e).rules.s2s_tracking_link:t(e).rules.no_required},{default:a(()=>[d("div",lt,[l(B,{modelValue:t(e).ruleForm.s2s_tracking_link,"onUpdate:modelValue":r[18]||(r[18]=o=>t(e).ruleForm.s2s_tracking_link=o),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1},8,["rules"]),_(" Preview URL "),l(i,{label:"Preview URL:",prop:"app_url",rules:t(e).ruleForm.is_s2s===1?t(e).rules.app_url:t(e).rules.no_required},{default:a(()=>[d("div",tt,[l(B,{modelValue:t(e).ruleForm.app_url,"onUpdate:modelValue":r[19]||(r[19]=o=>t(e).ruleForm.app_url=o),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1},8,["rules"]),_(" Description "),l(i,{label:"Description:",prop:"description"},{default:a(()=>[d("div",rt,[l(B,{modelValue:t(e).ruleForm.description,"onUpdate:modelValue":r[20]||(r[20]=o=>t(e).ruleForm.description=o),rows:2,type:"textarea",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]),_:1}),_(" end ")])]),_:1},8,["rules","model"]),_(" form "),_(" footer "),d("div",at,[l(A,{type:"primary",onClick:ae($,["prevent"])},{default:a(()=>[ot]),_:1},8,["onClick"])]),_(" dialog "),l(be,{modelValue:t(n),"onUpdate:modelValue":r[22]||(r[22]=o=>W(n)?n.value=o:n=o),title:"site",width:"70%"},{default:a(()=>[l(Bl,{msg:t(e).ruleForm,onUpdateData:ve,visible:t(n),"onUpdate:visible":r[21]||(r[21]=o=>W(n)?n.value=o:n=o)},null,8,["msg","visible"])]),_:1},8,["modelValue"])])),[[ye,t(E)]])}}});var ft=ne(ut,[["__scopeId","data-v-2659fc52"]]);export{ft as default};
