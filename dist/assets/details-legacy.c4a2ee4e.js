!function(){function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function r(r){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?e(Object(l),!0).forEach((function(e){t(r,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):e(Object(l)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(l,e))}))}return r}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r,t,n,l,a,u){try{var o=e[a](u),i=o.value}catch(c){return void t(c)}o.done?r(i):Promise.resolve(i).then(n,l)}function l(e){return function(){var r=this,t=arguments;return new Promise((function(l,a){var u=e.apply(r,t);function o(e){n(u,l,a,o,i,"next",e)}function i(e){n(u,l,a,o,i,"throw",e)}o(void 0)}))}}System.register(["./vendor-legacy.d18a23a8.js","./lodash-legacy.bd7de89c.js","./fenix-legacy.d5af3243.js","./clipboard-legacy.d98819d3.js","./message-legacy.305f67cf.js","./index-legacy.2dd32af6.js"],(function(e){"use strict";var t,n,a,u,o,i,c,s,f,d,p,m,v,_,g,b,h,y,k,F,V,w,x,P,j,S,U,O,C,R,q,A,D,T,N,L;return{setters:[function(e){t=e.d,n=e.z,a=e.w,u=e.b,o=e.r,i=e.o,c=e.h,s=e.q,f=e.g,d=e.f,p=e.F,m=e.i,v=e.c,_=e.u,g=e.x,b=e.y,h=e.N,y=e.a,k=e.s,F=e.ah,V=e.P,w=e.j,x=e.t,P=e.k},function(e){j=e._},function(e){S=e.i,U=e.k,O=e.l,C=e.m,R=e.n,q=e.o,A=e.p,D=e.q,T=e.r},function(e){N=e.c},function(e){L=e.m},function(){}],execute:function(){var E={class:"flex jc-end"},K=b("Add"),M={class:"flex"},z=b("Copy"),B=t({props:{list:{require:!0,default:[],type:Array},offer:{require:!0,default:"",type:String}},emits:["kk","up"],setup:function(e,r){r.emit;var t=e,b=n({pub:[{id:"",pub_name:""}]}),h=n({manage_traffic:[]}),y={pub:"",slotid:"",payout:0,cap_daily:0,pub_status:2,pub_tracking_link:""},k=function(){h.manage_traffic.push(j.cloneDeep(y))},F=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,S();case 3:r=e.sent,t=r.data,b.pub=t;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a((function(){return t.list}),(function(e,r){h.manage_traffic=e}),{immediate:!0,deep:!0}),a((function(){return h.manage_traffic}),(function(e,r){}),{immediate:!0,deep:!0}),u((function(){F()})),function(e,r){var n=o("el-button"),l=o("el-option"),a=o("el-select"),u=o("el-table-column"),y=o("el-input"),F=o("el-switch"),V=o("el-table");return i(),c("div",null,[s("div",E,[f(n,{type:"primary",onClick:k},{default:d((function(){return[K]})),_:1})]),f(V,{class:"mt-10",data:_(h).manage_traffic,style:{width:"100%"},border:""},{default:d((function(){return[f(u,{label:"Pub Name",align:"center"},{default:d((function(e){return[f(a,{filterable:"",modelValue:e.row.pub,"onUpdate:modelValue":function(r){return e.row.pub=r},onChange:function(r){return function(e){var r=e.row,n="http://track.adsforward.com/api/track?offer={offer}&mid={slot}&pub_id={siteid}&gaid={gaid}&idfa={idfa}&click_id={clickid}&ip={ip}&ua={ua}&osv={osv}&lang={lang}";r.pub_tracking_link=n;var l=b.pub.find((function(e){return e.pub_name===r.pub}));r.slotid=l.slot_id,r.pub_status=l.status,r.pub_tracking_link=n.replace("{offer}",t.offer).replace("{slot}",l.slot_id)}(e)},clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(b).pub,(function(e){return i(),v(l,{key:e.id,label:e.pub_name,value:e.pub_name},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]})),_:1}),f(u,{label:"Payout",align:"center"},{default:d((function(e){return[f(y,{modelValue:e.row.payout,"onUpdate:modelValue":function(r){return e.row.payout=r},type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),f(u,{label:"Cap Daily",align:"center"},{default:d((function(e){return[f(y,{modelValue:e.row.cap_daily,"onUpdate:modelValue":function(r){return e.row.cap_daily=r},type:"number",min:"0",step:"0.001",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),f(u,{label:"Operation",align:"center",width:"180px"},{default:d((function(e){return[s("div",M,[f(n,{class:"mr-10",type:"danger",icon:"Delete",circle:"",onClick:function(r){return t=e.$index,void h.manage_traffic.splice(t,1);var t}},null,8,["onClick"]),f(F,{modelValue:e.row.status,"onUpdate:modelValue":function(r){return e.row.status=r},"active-value":1,"inactive-value":2,class:"mr-10",onChange:function(r){e.row}},null,8,["modelValue","onUpdate:modelValue","onChange"]),e.row.pub_tracking_link?(i(),v(n,{key:0,class:"cp",type:"primary",onClick:function(r){return t=e.row.pub_tracking_link,void N(t);var t}},{default:d((function(){return[z]})),_:2},1032,["onClick"])):g("v-if",!0)])]})),_:1})]})),_:1},8,["data"])])}}}),I={class:"content-con flex column"},J={class:"flex jc-start ai-center form-one"},Z=["textContent"],$={class:"flex jc-start ai-center form-one"},G=b("BUZZ"),H=b("SDK"),Q={class:"flex jc-start ai-center form-one"},W={key:0},X={key:1},Y={class:"flex jc-start ai-center form-one"},ee={class:"flex jc-start ai-center form-one"},re={class:"flex jc-start ai-center form-one"},te={class:"flex jc-start ai-center form-one"},ne={class:"flex jc-start ai-center form-one"},le={class:"form-one"},ae={class:"flex jc-start ai-center form-one"},ue={class:"flex jc-start ai-center form-one"},oe={class:"flex jc-start ai-center form-one"},ie={class:"flex jc-start ai-center form-one"},ce={class:"flex jc-start ai-center form-one"},se={class:"flex jc-start ai-center form-one"},fe={class:"flex jc-start ai-center form-one"},de={class:"flex jc-start ai-center form-one"},pe={class:"w100 flex"},me=b("Save");e("default",t({setup:function(e){var t=P().proxy,b=h(),S="此项必填",N=y(!1),E=n({options:{channel:[{id:"",short_name:""}],country:[{id:"",short_name:"",zh_cn:""}],conversion_flow:[{value:1,label:"CPI"},{value:2,label:"CPA"},{value:9,label:"SDK"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],site_type:[{value:"rule_sdkindex",label:"匹配SDK自定义"},{value:"rule_pubredirect",label:"透传渠道ID"},{value:"rule_slotid",label:"渠道slotid"},{value:"rule_value",label:"固定值"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}]},rules:{no_required:[{required:!1}],channel:[{required:!0,message:S,trigger:["blur","change"]}],channel_type:[{required:!0,message:S,trigger:["blur","change"]}],status:[{required:!0,message:S,trigger:["blur","change"]}],title:[{required:!0,message:S,trigger:["blur","change"]}],pkg:[{required:!0,message:S,trigger:["blur","change"]}],platform:[{required:!0,message:S,trigger:["blur","change"]}],country:[{required:!0,message:S,trigger:["blur","change"]},{validator:function(e,r,t){0!==r.length?r.length>1?t(new Error("只能填选一个国家")):t(void 0):t(new Error(S))},trigger:["blur","change"]}],revenue:[{required:!0,message:S,trigger:["blur","change"]}],traffic:[{required:!1,validator:function(e,r,t){var n;0!==r.length?(n=!0,r.map((function(e){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var t=e[r];if((""===t||void 0===t)&&0!==t){n=!1;break}}})),t(n?void 0:new Error("不允许有空值"))):t(void 0)},trigger:["blur","change"]}],adv_tracking_link:[{required:!0,message:S,trigger:["blur","change"]}],site_type:[{required:!0,message:S,trigger:["blur","change"]}],site_value:[{required:!0,message:S,trigger:["blur","change"]}],is_s2s:[{required:!0,message:S,trigger:["blur","change"]}],s2s_tracking_link:[{required:!0,message:S,trigger:["blur","change"]}],app_url:[{required:!0,message:S,trigger:["blur","change"]}]},ruleForm:{id:void 0,offer_id:"",adv_offer:"",create_type:1,channel:"",channel_type:1,adv_status:1,conversion_flow:"",status:1,title:"",pkg:"",attribute_provider:"",pid:"",platform:1,country:[],revenue:void 0,traffic:[],adtype:38,update_date:"",adv_tracking_link:"",target_cvr:void 0,cvr_status:2,is_s2s:2,s2s_tracking_link:"",app_url:"",site_type:"rule_value",site_value:"",description:""},search:{adv_offer:""}}),K=y(""),M=y(""),z=y(""),ve=function(e){var t=[];return e.map((function(e){var n=r({},e);return e.payout&&(n.payout=Number(e.payout)),e.cap_daily&&(n.cap_daily=Number(e.cap_daily)),t.push(n),e})),t},_e=function(){var e=l(regeneratorRuntime.mark((function e(){var t,n,l,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.value=!0,t=j.cloneDeep(E.ruleForm),(n=r({},t)).conversion_flow=t.conversion_flow,n.country=t.country[0],n.target_cvr=parseFloat(n.target_cvr),0!==t.traffic.length?(l=ve(t.traffic),n.traffic=JSON.stringify(l)):delete n.traffic,"create"!==z.value){e.next=11;break}return e.next=10,D(n);case 10:a=e.sent;case 11:if("edit"!==z.value){e.next=15;break}return e.next=14,T(n);case 14:a=e.sent;case 15:N.value=!1,L(a);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){t.$refs.ruleForm.validate((function(e){if(!e)return!1;_e()}))},be=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:200===(r=e.sent).code?(t=r.offer_id,E.ruleForm.offer_id=t.toString()):be();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=l(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([ye(),ke()]);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return r=e.sent,t=r.data,E.options.channel=t,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:return r=e.sent,t=r.data,E.options.country=t,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();u(l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K.value=b.currentRoute.value.name,M.value=b.currentRoute.value.params.id,"fenix-offer-create"===K.value&&(be(),z.value="create"),"fenix-offer-edit"===K.value&&(M.value=b.currentRoute.value.params.id,z.value="edit",Fe()),e.next=6,he();case 6:case"end":return e.stop()}}),e)}))));var Fe=function(){var e=l(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(M.value);case 2:t=e.sent,n=t.data,E.ruleForm=r({},n),E.ruleForm.country=[n.country],E.search.adv_offer=n.adv_offer,E.ruleForm.traffic=n.traffic?JSON.parse(n.traffic):[];case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ve=k((function(){return"rule_value"===E.ruleForm.site_type}));a((function(){return E.ruleForm.traffic}),(function(e,r){}),{immediate:!0,deep:!0}),a((function(){return E.ruleForm.adv_offer}),(function(e,r){E.ruleForm.create_type=e?2:1}),{immediate:!0,deep:!0});var we=function(e){},xe=function(){var e=l(regeneratorRuntime.mark((function e(){var r,t,n,l,a,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.ruleForm.adv_offer=E.search.adv_offer,r=E.ruleForm.adv_offer){e.next=5;break}return e.abrupt("return",!1);case 5:if(t={adv_offer:r,platform:E.ruleForm.platform},!r||!r.includes("_")){e.next=17;break}return E.ruleForm.channel_type=2,E.ruleForm.adtype=39,e.next=12,q(t);case 12:n=e.sent,l=n.data,200===n.status?(E.ruleForm.adv_status=1,je(l)):E.ruleForm.adv_status=2,e.next=27;break;case 17:return E.ruleForm.channel_type=1,E.ruleForm.adtype=38,e.next=22,A(t);case 22:a=e.sent,u=a.data,E.ruleForm.adv_status=u.status,Pe(u);case 27:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=function(e){E.ruleForm.channel=e.channel,E.ruleForm.attribute_provider=e.attribute_provider,E.ruleForm.conversion_flow=e.conversion_flow,E.ruleForm.title=e.title,E.ruleForm.pkg=e.pkg_name,E.ruleForm.pid=e.pid,E.ruleForm.platform=e.platform,E.ruleForm.revenue=e.payout,E.ruleForm.adv_tracking_link=e.tracking_link,Se(e.country)},je=function(e){var r;E.ruleForm.pkg=e.app_pkg_name,E.ruleForm.channel=e.channel,E.ruleForm.country=e.country;var t=null===(r=E.options.platform.find((function(r){return r.label===e.platform})))||void 0===r?void 0:r.value;E.ruleForm.platform=t||1,E.ruleForm.revenue=e.revenue,E.ruleForm.title=e.title,E.ruleForm.adv_tracking_link=e.tracking_link,E.ruleForm.conversion_flow=9},Se=function(e){Array.isArray(e)?E.ruleForm.country=e:E.ruleForm.country=[e]};return function(e,r){var t=o("el-form-item"),n=o("el-button"),l=o("el-input"),a=o("el-option"),u=o("el-select"),b=o("el-radio"),h=o("el-radio-group"),y=o("el-switch"),k=o("el-form"),P=F("loading");return V((i(),c("div",null,[g(" form "),f(k,{enctype:"multipart/form-data",ref:function(e,r){r.ruleForm=e},rules:_(E).rules,model:_(E).ruleForm,"label-width":"240px","label-position":"right"},{default:d((function(){return[s("div",I,[g(" Offer "),f(t,{label:"Offer:",prop:"offer"},{default:d((function(){return[s("div",J,[s("span",{textContent:x(_(E).ruleForm.offer_id)},null,8,Z)])]})),_:1}),g(" Adv Offer "),f(t,{label:"Adv Offer:",prop:"adv_offer"},{default:d((function(){return[s("div",$,[f(l,{modelValue:_(E).search.adv_offer,"onUpdate:modelValue":r[0]||(r[0]=function(e){return _(E).search.adv_offer=e}),placeholder:"Please input",class:"input-with-select"},{append:d((function(){return[f(n,{type:"primary",icon:"Search",onClick:xe})]})),_:1},8,["modelValue"])])]})),_:1}),g(" Channel "),f(t,{label:"Channel:",prop:"channel"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(E).ruleForm.channel,"onUpdate:modelValue":r[1]||(r[1]=function(e){return _(E).ruleForm.channel=e}),clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(E).options.channel,(function(e){return i(),v(a,{key:e.id,label:e.short_name,value:e.short_name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),g(" Channel Type "),f(t,{label:"Channel Type:",prop:"channel_type"},{default:d((function(){return[f(h,{class:"form-one",modelValue:_(E).ruleForm.channel_type,"onUpdate:modelValue":r[2]||(r[2]=function(e){return _(E).ruleForm.channel_type=e})},{default:d((function(){return[f(b,{label:1},{default:d((function(){return[G]})),_:1}),f(b,{label:2},{default:d((function(){return[H]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),g(" Adv Status "),f(t,{label:"Adv Status:",prop:"adv_status"},{default:d((function(){return[s("div",Q,[1===_(E).ruleForm.adv_status?(i(),c("span",W,"开")):g("v-if",!0),2===_(E).ruleForm.adv_status?(i(),c("span",X,"关")):g("v-if",!0)])]})),_:1}),g(" conversion_flow "),f(t,{label:"Conversion Flow:",prop:"conversion_flow"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(E).ruleForm.conversion_flow,"onUpdate:modelValue":r[3]||(r[3]=function(e){return _(E).ruleForm.conversion_flow=e}),clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(E).options.conversion_flow,(function(e){return i(),v(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),g(" Status "),f(t,{label:"Status:",prop:"status"},{default:d((function(){return[s("div",Y,[f(y,{modelValue:_(E).ruleForm.status,"onUpdate:modelValue":r[4]||(r[4]=function(e){return _(E).ruleForm.status=e}),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]})),_:1}),g(" Offer Title "),f(t,{label:"Offer Title:",prop:"title"},{default:d((function(){return[s("div",ee,[f(l,{modelValue:_(E).ruleForm.title,"onUpdate:modelValue":r[5]||(r[5]=function(e){return _(E).ruleForm.title=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),g(" Package Name "),f(t,{label:"Package Name:",prop:"pkg"},{default:d((function(){return[s("div",re,[f(l,{modelValue:_(E).ruleForm.pkg,"onUpdate:modelValue":r[6]||(r[6]=function(e){return _(E).ruleForm.pkg=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),g(" Attribute Provider "),f(t,{label:"Attribute Provider:",prop:"attribute_provider"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(E).ruleForm.attribute_provider,"onUpdate:modelValue":r[7]||(r[7]=function(e){return _(E).ruleForm.attribute_provider=e}),clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(E).options.attribute_provider,(function(e){return i(),v(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),g(" Pid "),f(t,{label:"Pid:",prop:"pid"},{default:d((function(){return[s("div",te,[f(l,{modelValue:_(E).ruleForm.pid,"onUpdate:modelValue":r[8]||(r[8]=function(e){return _(E).ruleForm.pid=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),g(" Platform "),f(t,{label:"Platform:",prop:"platform"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(E).ruleForm.platform,"onUpdate:modelValue":r[9]||(r[9]=function(e){return _(E).ruleForm.platform=e}),placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(E).options.platform,(function(e){return i(),v(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),g(" Country "),f(t,{label:"Country:",prop:"country"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(E).ruleForm.country,"onUpdate:modelValue":r[10]||(r[10]=function(e){return _(E).ruleForm.country=e}),multiple:"",clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(E).options.country,(function(e){return i(),v(a,{key:e.id,label:e.short_name+"-"+e.zh_cn,value:e.short_name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),g(" Revenue "),f(t,{label:"Revenue:",prop:"revenue"},{default:d((function(){return[s("div",ne,[f(l,{modelValue:_(E).ruleForm.revenue,"onUpdate:modelValue":r[11]||(r[11]=function(e){return _(E).ruleForm.revenue=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),g(" Manage Traffic "),f(t,{label:"Manage Traffic:",prop:"traffic"},{default:d((function(){return[s("div",le,[f(_(B),{ref:function(e,r){r.traffic=e},list:_(E).ruleForm.traffic,"onUpdate:list":r[12]||(r[12]=function(e){return _(E).ruleForm.traffic=e}),offer:_(E).ruleForm.offer_id,onKk:we},null,8,["list","offer"])])]})),_:1}),g(" Adv Tracking Link "),f(t,{label:"Adv Tracking Link:",prop:"adv_tracking_link"},{default:d((function(){return[s("div",ae,[f(l,{rows:3,type:"textarea",modelValue:_(E).ruleForm.adv_tracking_link,"onUpdate:modelValue":r[13]||(r[13]=function(e){return _(E).ruleForm.adv_tracking_link=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),g(" Target CVR "),f(t,{label:"Target CVR:",prop:"target_cvr"},{default:d((function(){return[s("div",ue,[f(l,{modelValue:_(E).ruleForm.target_cvr,"onUpdate:modelValue":r[14]||(r[14]=function(e){return _(E).ruleForm.target_cvr=e}),type:"number",placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),g(" CVR Status "),f(t,{label:"CVR Status:",prop:"cvr_status"},{default:d((function(){return[s("div",oe,[f(y,{modelValue:_(E).ruleForm.cvr_status,"onUpdate:modelValue":r[15]||(r[15]=function(e){return _(E).ruleForm.cvr_status=e}),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]})),_:1}),g(" Site Type "),f(t,{label:"Site Type:",prop:"site_type"},{default:d((function(){return[f(u,{filterable:"",class:"form-one",modelValue:_(E).ruleForm.site_type,"onUpdate:modelValue":r[16]||(r[16]=function(e){return _(E).ruleForm.site_type=e}),clearable:"",placeholder:""},{default:d((function(){return[(i(!0),c(p,null,m(_(E).options.site_type,(function(e){return i(),v(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),g(" Site Value "),f(t,{label:"Site Value:",prop:"site_value",rules:_(Ve)?_(E).rules.site_value:_(E).rules.no_required},{default:d((function(){return[s("div",ie,[f(l,{modelValue:_(E).ruleForm.site_value,"onUpdate:modelValue":r[17]||(r[17]=function(e){return _(E).ruleForm.site_value=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1},8,["rules"]),g(" S2S Async "),f(t,{label:"S2S Async:",prop:"is_s2s"},{default:d((function(){return[s("div",ce,[f(y,{modelValue:_(E).ruleForm.is_s2s,"onUpdate:modelValue":r[18]||(r[18]=function(e){return _(E).ruleForm.is_s2s=e}),"active-value":1,"inactive-value":2},null,8,["modelValue"])])]})),_:1}),g(" S2S Tracking Link "),f(t,{label:"S2S Tracking Link:",prop:"s2s_tracking_link",rules:1===_(E).ruleForm.is_s2s?_(E).rules.s2s_tracking_link:_(E).rules.no_required},{default:d((function(){return[s("div",se,[f(l,{rows:2,type:"textarea",modelValue:_(E).ruleForm.s2s_tracking_link,"onUpdate:modelValue":r[19]||(r[19]=function(e){return _(E).ruleForm.s2s_tracking_link=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1},8,["rules"]),g(" Preview URL "),f(t,{label:"Preview URL:",prop:"app_url",rules:1===_(E).ruleForm.is_s2s?_(E).rules.app_url:_(E).rules.no_required},{default:d((function(){return[s("div",fe,[f(l,{rows:2,type:"textarea",modelValue:_(E).ruleForm.app_url,"onUpdate:modelValue":r[20]||(r[20]=function(e){return _(E).ruleForm.app_url=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1},8,["rules"]),g(" Description "),f(t,{label:"Description:",prop:"description"},{default:d((function(){return[s("div",de,[f(l,{rows:2,type:"textarea",modelValue:_(E).ruleForm.description,"onUpdate:modelValue":r[21]||(r[21]=function(e){return _(E).ruleForm.description=e}),placeholder:"Please input",class:"input-with-select"},null,8,["modelValue"])])]})),_:1}),g(" end ")])]})),_:1},8,["rules","model"]),g(" form "),g(" footer "),s("div",pe,[f(n,{type:"primary",onClick:w(ge,["prevent"])},{default:d((function(){return[me]})),_:1},8,["onClick"])])],512)),[[P,_(N)]])}}}))}}}))}();
