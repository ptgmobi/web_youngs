!function(){function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function r(r){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?e(Object(l),!0).forEach((function(e){t(r,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):e(Object(l)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(l,e))}))}return r}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r,t,n,l,a,u){try{var o=e[a](u),i=o.value}catch(c){return void t(c)}o.done?r(i):Promise.resolve(i).then(n,l)}function l(e){return function(){var r=this,t=arguments;return new Promise((function(l,a){var u=e.apply(r,t);function o(e){n(u,l,a,o,i,"next",e)}function i(e){n(u,l,a,o,i,"throw",e)}o(void 0)}))}}System.register(["./vendor-legacy-b58ffb73.js","./lodash-legacy-5d053487.js","./fenix-legacy-30d3da4e.js","./clipboard-legacy-911dd74a.js","./message-legacy-95711ee6.js","./index-legacy-350dc876.js"],(function(e){"use strict";var t,n,a,u,o,i,c,s,f,d,p,m,v,_,b,g,h,y,k,F,w,V,x,P,j,S,U,O,C,R,q,A,D,T,N,L,E;return{setters:[function(e){t=e.d,n=e.y,a=e.w,u=e.B,o=e.r,i=e.o,c=e.i,s=e.s,f=e.v,d=e.f,p=e.F,m=e.j,v=e.c,_=e.h,b=e.g,g=e.x,h=e.N,y=e.a,k=e.b,F=e.ai,w=e.P,V=e.k,x=e.t,P=e.J,j=e.l},function(e){S=e._},function(e){U=e.l,O=e.p,C=e.q,R=e.r,q=e.s,A=e.t,D=e.u,T=e.v,N=e.w},function(e){L=e.c},function(e){E=e.m},function(){}],execute:function(){var B={class:"flex jc-end"},K=g("Add"),M={class:"flex"},J=g(" Copy "),$=t({props:{list:{require:!0,default:function(){return[]},type:Array},offer:{require:!0,default:"",type:String}},emits:["kk","up"],setup:function(e,r){r.emit;var t=e,g=n({pub:[{id:"",pub_name:""}]}),h={55527824:.1,95108831:.1,95846929:.01,59845210:.01},y=n({manage_traffic:[]}),k={pub:"",slotid:"",payout:void 0,cap_daily:void 0,pub_status:1,pub_tracking_link:""},F=function(){y.manage_traffic.push(S.cloneDeep(k))},w=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,U();case 3:r=e.sent,t=r.data,g.pub=t;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a((function(){return t.list}),(function(e,r){y.manage_traffic=e}),{immediate:!0,deep:!0}),a((function(){return y.manage_traffic}),(function(e,r){}),{immediate:!0,deep:!0}),u((function(){w(),F()})),function(e,r){var n=o("el-button"),l=o("el-option"),a=o("el-select"),u=o("el-table-column"),k=o("el-input"),w=o("el-switch"),V=o("el-table");return i(),c("div",null,[s("div",B,[f(n,{type:"primary",onClick:F},{default:d((function(){return[K]})),_:1})]),f(V,{class:"mt-10",data:_(y).manage_traffic,style:{width:"100%"},border:""},{default:d((function(){return[f(u,{label:"Pub Name",align:"center"},{default:d((function(e){return[f(a,{filterable:"",modelValue:e.row.pub,"onUpdate:modelValue":function(r){return e.row.pub=r},onChange:function(r){return function(e){var r=e.row,n="http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}";r.pub_tracking_link=n;var l=g.pub.find((function(e){return e.pub_name===r.pub}));r.slotid=l.slot_id,r.pub_status=l.status,r.pub_tracking_link=n.replace("{offer}",t.offer).replace("{slot}",l.slot_id),h[l.slot_id]&&(r.payout=h[l.slot_id])}(e)},clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(g).pub,(function(e){return i(),v(l,{key:e.id,label:e.pub_name,value:e.pub_name},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:1}),f(u,{label:"Payout",align:"center"},{default:d((function(e){return[f(k,{modelValue:e.row.payout,"onUpdate:modelValue":function(r){return e.row.payout=r},type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),f(u,{label:"Cap Daily",align:"center"},{default:d((function(e){return[f(k,{modelValue:e.row.cap_daily,"onUpdate:modelValue":function(r){return e.row.cap_daily=r},type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),f(u,{label:"Operation",align:"center",width:"180px"},{default:d((function(e){return[s("div",M,[f(n,{class:"mr-10",type:"danger",icon:"Delete",circle:"",onClick:function(r){return t=e.$index,void y.manage_traffic.splice(t,1);var t}},null,8,["onClick"]),f(w,{modelValue:e.row.pub_status,"onUpdate:modelValue":function(r){return e.row.pub_status=r},"active-value":1,"inactive-value":2,class:"mr-10",onChange:function(r){e.row}},null,8,["modelValue","onUpdate:modelValue","onChange"]),e.row.pub_tracking_link?(i(),v(n,{key:0,class:"cp",type:"primary",onClick:function(r){return t=e.row.pub_tracking_link,void L(t);var t}},{default:d((function(){return[J]})),_:2},1032,["onClick"])):b("v-if",!0)])]})),_:1})]})),_:1},8,["data"])])}}}),z={class:"content-con flex column"},I={class:"flex jc-start ai-center form-one"},Z=["textContent"],G={class:"flex jc-start ai-center form-one"},H=g("BUZZ"),Q=g("SDK"),W={class:"flex jc-start ai-center form-one"},X={key:0},Y={key:1},ee={class:"flex jc-start ai-center form-one"},re={class:"flex jc-start ai-center form-one"},te={class:"flex jc-start ai-center form-one"},ne={class:"flex jc-start ai-center form-one"},le={class:"flex jc-start ai-center form-one"},ae={class:"form-one"},ue={class:"flex jc-start ai-center form-one"},oe={class:"flex jc-start ai-center form-one"},ie={class:"flex jc-start ai-center form-one"},ce={class:"flex jc-start ai-center form-one"},se={class:"flex jc-start ai-center form-one"},fe={class:"flex jc-start ai-center form-one"},de={class:"flex jc-start ai-center form-one"},pe={class:"flex jc-start ai-center form-one"},me={class:"w100 flex"},ve=g("Save");e("default",t({setup:function(e){var t=j().proxy,g=h(),U="此项必填",L=y(!1),B=n({options:{channel:[{id:"",short_name:""}],country:[{id:"",short_name:"",zh_cn:""}],conversion_flow:[{value:1,label:"CPI"},{value:2,label:"CPA"},{value:9,label:"SDK"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],site_type:[{value:"rule_sdkindex",label:"匹配SDK自定义"},{value:"rule_pubredirect",label:"透传渠道ID"},{value:"rule_slotid",label:"渠道slotid"},{value:"rule_value",label:"固定值"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}]},rules:{no_required:[{required:!1}],channel:[{required:!0,message:U,trigger:["blur","change"]}],channel_type:[{required:!0,message:U,trigger:["blur","change"]}],status:[{required:!0,message:U,trigger:["blur","change"]}],title:[{required:!0,message:U,trigger:["blur","change"]}],pkg:[{required:!0,message:U,trigger:["blur","change"]}],platform:[{required:!0,message:U,trigger:["blur","change"]}],country:[{required:!0,message:U,trigger:["blur","change"]},{validator:function(e,r,t){0!==r.length?r.length>1?t(new Error("只能填选一个国家")):t(void 0):t(new Error(U))},trigger:["blur","change"]}],revenue:[{required:!0,message:U,trigger:["blur","change"]}],traffic:[{required:!1,validator:function(e,r,t){var n;0!==r.length?(n=!0,r.map((function(e){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var t=e[r];if((""===t||void 0===t)&&0!==t){n=!1;break}}})),t(n?void 0:new Error("不允许有空值"))):t(void 0)},trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:U,trigger:["blur","change"]}],site_type:[{required:!0,message:U,trigger:["blur","change"]}],site_value:[{required:!0,message:U,trigger:["blur","change"]}],is_s2s:[{required:!0,message:U,trigger:["blur","change"]}],s2s_tracking_link:[{required:!0,message:U,trigger:["blur","change"]}],app_url:[{required:!0,message:U,trigger:["blur","change"]}]},ruleForm:{id:void 0,offer_id:"",adv_offer:"",create_type:1,channel:"",channel_type:1,adv_status:1,conversion_flow:void 0,status:1,title:"",pkg:"",attribute_provider:"",pid:"",platform:1,country:[],revenue:void 0,traffic:[],adtype:38,update_date:"",adv_tracking_link:"",target_cvr:void 0,cvr_status:2,is_s2s:2,s2s_tracking_link:"",app_url:"",site_type:"rule_value",site_value:"",description:""},search:{adv_offer:""}}),K=y(""),M=y(""),J=y(""),_e=function(e){var t=[];return e.map((function(e){var n=r({},e);return e.payout&&(n.payout=Number(e.payout)),e.cap_daily&&(n.cap_daily=Number(e.cap_daily)),t.push(n),e})),t},be=function(){var e=l(regeneratorRuntime.mark((function e(){var n,l,a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.value=!0,n=S.cloneDeep(B.ruleForm),l=r({},n),n.conversion_flow&&(l.conversion_flow=n.conversion_flow),l.country=n.country[0],l.revenue=parseFloat(l.revenue),l.target_cvr=parseFloat(l.target_cvr),0!==n.traffic.length?(a=_e(n.traffic),l.traffic=JSON.stringify(a)):delete l.traffic,"create"!==J.value){e.next=12;break}return e.next=11,T(l);case 11:u=e.sent;case 12:if("edit"!==J.value){e.next=16;break}return e.next=15,N(l);case 15:u=e.sent;case 16:L.value=!1,E(u)&&t.$router.push({path:"/fenix/offer/list"});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){t.$refs.ruleForm.validate((function(e){if(!e)return!1;be()}))},he=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:200===(r=e.sent).code?(t=r.offer_id,B.ruleForm.offer_id=t.toString()):he();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=l(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([ke(),Fe()]);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return r=e.sent,t=r.data,B.options.channel=t,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:return r=e.sent,t=r.data,B.options.country=t,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u(l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K.value=g.currentRoute.value.name,M.value=g.currentRoute.value.params.id,"fenix-offer-create"===K.value&&(he(),J.value="create"),"fenix-offer-edit"===K.value&&(M.value=g.currentRoute.value.params.id,J.value="edit",we()),e.next=6,ye();case 6:case"end":return e.stop()}}),e)}))));var we=function(){var e=l(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(M.value);case 2:t=e.sent,n=t.data,B.ruleForm=r({},n),B.ruleForm.country=[n.country],B.search.adv_offer=n.adv_offer,B.ruleForm.traffic=n.traffic?JSON.parse(n.traffic):[];case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ve=k((function(){return"rule_value"===B.ruleForm.site_type}));a((function(){return B.ruleForm.traffic}),(function(e,r){}),{immediate:!0,deep:!0}),a((function(){return B.ruleForm.adv_offer}),(function(e,r){B.ruleForm.create_type=e?2:1}),{immediate:!0,deep:!0});var xe=function(e){},Pe=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t,n,l,a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("edit"!==J.value){e.next=2;break}return e.abrupt("return",!1);case 2:if(B.ruleForm.adv_offer=B.search.adv_offer,r=B.ruleForm.adv_offer){e.next=7;break}return e.abrupt("return",!1);case 7:if(t={adv_offer:r,platform:B.ruleForm.platform},!r||!r.includes("_")){e.next=19;break}return B.ruleForm.channel_type=2,B.ruleForm.adtype=39,e.next=14,A(t);case 14:n=e.sent,l=n.data,200===n.status?(B.ruleForm.adv_status=1,Se(l)):B.ruleForm.adv_status=2,e.next=29;break;case 19:return B.ruleForm.channel_type=1,B.ruleForm.adtype=38,e.next=24,D(t);case 24:a=e.sent,u=a.data,B.ruleForm.adv_status=u.status,je(u);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(e){B.ruleForm.channel=e.channel,B.ruleForm.attribute_provider=e.attribute_provider,B.ruleForm.conversion_flow=e.conversion_flow,B.ruleForm.title=e.title,B.ruleForm.pkg=e.pkg_name,B.ruleForm.pid=e.pid,B.ruleForm.platform=e.platform,B.ruleForm.revenue=e.payout,B.ruleForm.adv_tracking_link=e.tracking_link,Ue(e.country)},Se=function(e){var r;B.ruleForm.pkg=e.app_pkg_name,B.ruleForm.channel=e.channel,B.ruleForm.country=e.country;var t=null===(r=B.options.platform.find((function(r){return r.label===e.platform})))||void 0===r?void 0:r.value;B.ruleForm.platform=t||1,B.ruleForm.revenue=e.revenue,B.ruleForm.title=e.title,B.ruleForm.adv_tracking_link=e.tracking_link,B.ruleForm.conversion_flow=9},Ue=function(e){Array.isArray(e)?B.ruleForm.country=e:B.ruleForm.country=[e]};return function(e,r){var t=o("el-form-item"),n=o("el-button"),l=o("el-input"),a=o("el-option"),u=o("el-select"),g=o("el-radio"),h=o("el-radio-group"),y=o("el-switch"),k=o("el-form"),j=F("loading");return w((i(),c("div",null,[b(" form "),f(k,{enctype:"multipart/form-data",ref:"ruleForm",rules:_(B).rules,model:_(B).ruleForm,"label-width":"240px","label-position":"right"},{default:d((function(){return[s("div",z,[b(" Offer "),f(t,{label:"Offer:",prop:"offer"},{default:d((function(){return[s("div",I,[s("span",{textContent:x(_(B).ruleForm.offer_id)},null,8,Z)])]})),_:1}),b(" Adv Offer "),f(t,{label:"Adv Offer:",prop:"adv_offer"},{default:d((function(){return[s("div",G,[f(l,{modelValue:_(B).search.adv_offer,"onUpdate:modelValue":r[0]||(r[0]=function(e){return _(B).search.adv_offer=e}),placeholder:"Please input",class:"input-with-select",disabled:"edit"===_(J)},P({_:2},["create"===_(J)?{name:"append",fn:d((function(){return[f(n,{type:"primary",icon:"Search",onClick:Pe})]}))}:void 0]),1032,["modelValue","disabled"])])]})),_:1}),b(" Channel "),f(t,{label:"Channel:",prop:"channel"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(B).ruleForm.channel,"onUpdate:modelValue":r[1]||(r[1]=function(e){return _(B).ruleForm.channel=e}),clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(B).options.channel,(function(e){return i(),v(a,{key:e.id,label:e.short_name,value:e.short_name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),b(" Channel Type "),f(t,{label:"Channel Type:",prop:"channel_type"},{default:d((function(){return[f(h,{class:"form-one",modelValue:_(B).ruleForm.channel_type,"onUpdate:modelValue":r[2]||(r[2]=function(e){return _(B).ruleForm.channel_type=e})},{default:d((function(){return[f(g,{label:1},{default:d((function(){return[H]})),_:1}),f(g,{label:2},{default:d((function(){return[Q]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),b(" Adv Status "),f(t,{label:"Adv Status:",prop:"adv_status"},{default:d((function(){return[s("div",W,[1===_(B).ruleForm.adv_status?(i(),c("span",X,"开")):b("v-if",!0),2===_(B).ruleForm.adv_status?(i(),c("span",Y,"关")):b("v-if",!0)])]})),_:1}),b(" conversion_flow "),f(t,{label:"Conversion Flow:",prop:"conversion_flow"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(B).ruleForm.conversion_flow,"onUpdate:modelValue":r[3]||(r[3]=function(e){return _(B).ruleForm.conversion_flow=e}),clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(B).options.conversion_flow,(function(e){return i(),v(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),b(" Status "),f(t,{label:"Status:",prop:"status"},{default:d((function(){return[s("div",ee,[f(y,{modelValue:_(B).ruleForm.status,"onUpdate:modelValue":r[4]||(r[4]=function(e){return _(B).ruleForm.status=e}),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]})),_:1}),b(" Offer Title "),f(t,{label:"Offer Title:",prop:"title"},{default:d((function(){return[s("div",re,[f(l,{modelValue:_(B).ruleForm.title,"onUpdate:modelValue":r[5]||(r[5]=function(e){return _(B).ruleForm.title=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),b(" Package Name "),f(t,{label:"Package Name:",prop:"pkg"},{default:d((function(){return[s("div",te,[f(l,{modelValue:_(B).ruleForm.pkg,"onUpdate:modelValue":r[6]||(r[6]=function(e){return _(B).ruleForm.pkg=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),b(" Attribute Provider "),f(t,{label:"Attribute Provider:",prop:"attribute_provider"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(B).ruleForm.attribute_provider,"onUpdate:modelValue":r[7]||(r[7]=function(e){return _(B).ruleForm.attribute_provider=e}),clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(B).options.attribute_provider,(function(e){return i(),v(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),b(" Pid "),f(t,{label:"Pid:",prop:"pid"},{default:d((function(){return[s("div",ne,[f(l,{modelValue:_(B).ruleForm.pid,"onUpdate:modelValue":r[8]||(r[8]=function(e){return _(B).ruleForm.pid=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),b(" Platform "),f(t,{label:"Platform:",prop:"platform"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(B).ruleForm.platform,"onUpdate:modelValue":r[9]||(r[9]=function(e){return _(B).ruleForm.platform=e}),placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(B).options.platform,(function(e){return i(),v(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),b(" Country "),f(t,{label:"Country:",prop:"country"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(B).ruleForm.country,"onUpdate:modelValue":r[10]||(r[10]=function(e){return _(B).ruleForm.country=e}),multiple:"",clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(B).options.country,(function(e){return i(),v(a,{key:e.id,label:e.short_name+"-"+e.zh_cn,value:e.short_name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),b(" Revenue "),f(t,{label:"Revenue:",prop:"revenue"},{default:d((function(){return[s("div",le,[f(l,{modelValue:_(B).ruleForm.revenue,"onUpdate:modelValue":r[11]||(r[11]=function(e){return _(B).ruleForm.revenue=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),b(" Manage Traffic "),f(t,{label:"Manage Traffic:",prop:"traffic"},{default:d((function(){return[s("div",ae,[f(_($),{ref:"traffic",list:_(B).ruleForm.traffic,"onUpdate:list":r[12]||(r[12]=function(e){return _(B).ruleForm.traffic=e}),offer:_(B).ruleForm.offer_id,onKk:xe},null,8,["list","offer"])])]})),_:1}),b(" Adv Tracking Link "),f(t,{label:"Adv Tracking Link:",prop:"adv_tracking_link"},{default:d((function(){return[s("div",ue,[f(l,{rows:3,type:"textarea",modelValue:_(B).ruleForm.adv_tracking_link,"onUpdate:modelValue":r[13]||(r[13]=function(e){return _(B).ruleForm.adv_tracking_link=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),b(" Target CVR "),f(t,{label:"Target CVR:",prop:"target_cvr"},{default:d((function(){return[s("div",oe,[f(l,{modelValue:_(B).ruleForm.target_cvr,"onUpdate:modelValue":r[14]||(r[14]=function(e){return _(B).ruleForm.target_cvr=e}),type:"number",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),b(" CVR Status "),f(t,{label:"CVR Status:",prop:"cvr_status"},{default:d((function(){return[s("div",ie,[f(y,{modelValue:_(B).ruleForm.cvr_status,"onUpdate:modelValue":r[15]||(r[15]=function(e){return _(B).ruleForm.cvr_status=e}),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]})),_:1}),b(" Site Type "),f(t,{label:"Site Type:",prop:"site_type"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(B).ruleForm.site_type,"onUpdate:modelValue":r[16]||(r[16]=function(e){return _(B).ruleForm.site_type=e}),clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(B).options.site_type,(function(e){return i(),v(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),b(" Site Value "),f(t,{label:"Site Value:",prop:"site_value",rules:_(Ve)?_(B).rules.site_value:_(B).rules.no_required},{default:d((function(){return[s("div",ce,[f(l,{modelValue:_(B).ruleForm.site_value,"onUpdate:modelValue":r[17]||(r[17]=function(e){return _(B).ruleForm.site_value=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1},8,["rules"]),b(" S2S Async "),f(t,{label:"S2S Async:",prop:"is_s2s"},{default:d((function(){return[s("div",se,[f(y,{modelValue:_(B).ruleForm.is_s2s,"onUpdate:modelValue":r[18]||(r[18]=function(e){return _(B).ruleForm.is_s2s=e}),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]})),_:1}),b(" S2S Tracking Link "),f(t,{label:"S2S Tracking Link:",prop:"s2s_tracking_link",rules:1===_(B).ruleForm.is_s2s?_(B).rules.s2s_tracking_link:_(B).rules.no_required},{default:d((function(){return[s("div",fe,[f(l,{rows:2,type:"textarea",modelValue:_(B).ruleForm.s2s_tracking_link,"onUpdate:modelValue":r[19]||(r[19]=function(e){return _(B).ruleForm.s2s_tracking_link=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1},8,["rules"]),b(" Preview URL "),f(t,{label:"Preview URL:",prop:"app_url",rules:1===_(B).ruleForm.is_s2s?_(B).rules.app_url:_(B).rules.no_required},{default:d((function(){return[s("div",de,[f(l,{rows:2,type:"textarea",modelValue:_(B).ruleForm.app_url,"onUpdate:modelValue":r[20]||(r[20]=function(e){return _(B).ruleForm.app_url=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1},8,["rules"]),b(" Description "),f(t,{label:"Description:",prop:"description"},{default:d((function(){return[s("div",pe,[f(l,{rows:2,type:"textarea",modelValue:_(B).ruleForm.description,"onUpdate:modelValue":r[21]||(r[21]=function(e){return _(B).ruleForm.description=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),b(" end ")])]})),_:1},8,["rules","model"]),b(" form "),b(" footer "),s("div",me,[f(n,{type:"primary",onClick:V(ge,["prevent"])},{default:d((function(){return[ve]})),_:1},8,["onClick"])])])),[[j,_(L)]])}}}))}}}))}();
