import{d as l,r as e,I as a,L as o,q as t,o as i,c as n,z as s,e as d,s as r,v as c,N as p,x as u,y as f,A as y,O as w}from"./main-79c7eff6.js";import{m as b}from"./message-c9f8a298.js";import{c as _}from"./new-format-d78a215b.js";import{s as m,a as h,b as v}from"./serverclick-2868a63e.js";const k={key:0},V={key:0},O={key:0},C={key:0},A={key:0},S={key:0},U={key:0},j={key:0},g=l({setup(l){let g=e({androidArr:[],iOSArr:[]});const q=(l,e)=>{let a=l,o=[];for(const t in a)if(a.hasOwnProperty(t)){const l=a[t];let i={country:t,platform:e};i=Object.assign({},i,l),o.push(i)}return o},E=l=>{let e=new Set;if(Array.isArray(l))return l.map((l=>{l.all.map((l=>{e.add(null==l?void 0:l.lib_type)}))})),Array.from(e).sort()},F=a((()=>q(g.androidArr,"1"))),T=a((()=>q(g.iOSArr,"2"))),x=a((()=>E(F.value))),P=a((()=>E(T.value))),z=l=>{l.showtype=!l.showtype},I=async(l,e)=>{if("all"===e){let a={update_type:e,all:void 0};a=Object.assign({},a,l);a=_(["platform","thread_offer_num"],a),delete a.all;const o=await h(a);b(o)&&(l.showtype=!l.showtype)}if("one"===e){let a={update_type:e};a=Object.assign({},a,l);a=_(["id","platform","lib_status","lib_quantity_proportion"],a);const o=await v(a);b(o)&&(l.showtype=!l.showtype)}},L=async()=>{const l=await m({}),{data:e}=l;let a=(l=>{let e=[],a=[];for(const o in l)if(l.hasOwnProperty(o)){let t=l[o],i=o.split("_");t.platform=i[0],t.country=i[1],t.showtype=!1,t.all.map((l=>{l.showtype=!1})),"1"===t.platform&&e.push(t),"2"===t.platform&&a.push(t)}return{androidObj:e,iOSObj:a}})(e);g.androidArr=a.androidObj,g.iOSArr=a.iOSObj};return o((()=>{L()})),(l,e)=>{const a=t("el-table-column"),o=t("el-input"),b=t("el-button"),_=t("el-switch"),m=t("el-table");return i(),n(p,null,[s(" Android "),d(m,{center:"",data:c(F),class:"w100 mt-30",border:""},{default:r((()=>[d(a,{label:"Android服预配置"},{default:r((()=>[d(a,{label:"国家"},{default:r((l=>[u("span",null,f(l.row.country),1)])),_:1}),d(a,{label:"请求数"},{default:r((l=>[u("span",null,f(l.row.request),1)])),_:1}),d(a,{label:"总设备数"},{default:r((l=>[u("span",null,f(l.row.all_device_num),1)])),_:1}),d(a,{label:"每线程offer数"},{default:r((l=>[s(" <span>{{scope.row.content.thread_offer_num}}</span> "),d(o,{placeholder:"请输入内容",modelValue:l.row.thread_offer_num,"onUpdate:modelValue":e=>l.row.thread_offer_num=e,disabled:!l.row.showtype},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:1}),d(a,{label:"操作"},{default:r((l=>[l.row.showtype?s("v-if",!0):(i(),y(b,{key:0,class:"cp",type:"default",icon:"Edit",circle:"",onClick:e=>z(l.row)},null,8,["onClick"])),l.row.showtype?(i(),y(b,{key:1,class:"cp",type:"primary",icon:"Edit",circle:"",onClick:e=>I(l.row,"all")},null,8,["onClick"])):s("v-if",!0),s(" <i class=\"el-icon-edit cp\" \n          v-if='!scope.row.showtype'\n          @click='changeShowType(scope.row)'></i>\n          <i class=\"el-icon-edit-outline cp\" \n          v-if='scope.row.showtype'\n          @click='submitFun(scope.row, \"all\")'></i> ")])),_:1})])),_:1}),(i(!0),n(p,null,w(c(x),(l=>(i(),y(a,{key:l,label:l},{default:r((()=>[d(a,{label:"设备数"},{default:r((e=>[(i(!0),n(p,null,w(e.row.all,(e=>(i(),n(p,null,[e.lib_type===l?(i(),n("span",k,f(e.lib_device_num),1)):s("v-if",!0)],64)))),256))])),_:2},1024),d(a,{label:"状态"},{default:r((e=>[(i(!0),n(p,null,w(e.row.all,(e=>(i(),n(p,null,[e.lib_type===l?(i(),n("div",V,[d(_,{disabled:!e.showtype,modelValue:e.lib_status,"onUpdate:modelValue":l=>e.lib_status=l,"active-value":1,"inactive-value":2},null,8,["disabled","modelValue","onUpdate:modelValue"])])):s("v-if",!0)],64)))),256))])),_:2},1024),d(a,{label:"线程数"},{default:r((e=>[(i(!0),n(p,null,w(e.row.all,(e=>(i(),n(p,null,[e.lib_type===l?(i(),n("div",O,[d(o,{placeholder:"请输入内容",modelValue:e.lib_quantity_proportion,"onUpdate:modelValue":l=>e.lib_quantity_proportion=l,disabled:!e.showtype},null,8,["modelValue","onUpdate:modelValue","disabled"])])):s("v-if",!0)],64)))),256))])),_:2},1024),d(a,{label:"操作"},{default:r((e=>[(i(!0),n(p,null,w(e.row.all,(e=>(i(),n(p,null,[e.lib_type===l?(i(),n("div",C,[e.showtype?s("v-if",!0):(i(),y(b,{key:0,class:"cp",type:"default",icon:"Edit",circle:"",onClick:l=>z(e)},null,8,["onClick"])),e.showtype?(i(),y(b,{key:1,class:"cp",type:"primary",icon:"Edit",circle:"",onClick:l=>I(e,"one")},null,8,["onClick"])):s("v-if",!0),s(" <i class=\"el-icon-edit cp\" \n              v-if='!p.showtype'\n              @click='changeShowType(p)'></i>\n              <i class=\"el-icon-edit-outline cp\" \n              v-if='p.showtype'\n              @click='submitFun(p, \"one\")'></i> ")])):s("v-if",!0)],64)))),256))])),_:2},1024)])),_:2},1032,["label"])))),128))])),_:1},8,["data"]),s(" iOS "),d(m,{center:"",data:c(T),style:{width:"100%"},class:"w100 mt-30",border:""},{default:r((()=>[d(a,{label:"iOS服预配置"},{default:r((()=>[d(a,{label:"国家"},{default:r((l=>[u("span",null,f(l.row.country),1)])),_:1}),d(a,{label:"请求数"},{default:r((l=>[u("span",null,f(l.row.request),1)])),_:1}),d(a,{label:"总设备数"},{default:r((l=>[u("span",null,f(l.row.all_device_num),1)])),_:1}),d(a,{label:"每线程offer数"},{default:r((l=>[s(" <span>{{scope.row.content.thread_offer_num}}</span> "),d(o,{placeholder:"请输入内容",modelValue:l.row.thread_offer_num,"onUpdate:modelValue":e=>l.row.thread_offer_num=e,disabled:!l.row.showtype},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:1}),d(a,{label:"操作"},{default:r((l=>[l.row.showtype?s("v-if",!0):(i(),y(b,{key:0,class:"cp",type:"default",icon:"Edit",circle:"",onClick:e=>z(l.row)},null,8,["onClick"])),l.row.showtype?(i(),y(b,{key:1,class:"cp",type:"primary",icon:"Edit",circle:"",onClick:e=>I(l.row,"all")},null,8,["onClick"])):s("v-if",!0),s(" <i class=\"el-icon-edit cp\" \n          v-if='!scope.row.showtype'\n          @click='changeShowType(scope.row)'></i>\n          <i class=\"el-icon-edit-outline cp\" \n          v-if='scope.row.showtype'\n          @click='submitFun(scope.row, \"all\")'></i> ")])),_:1})])),_:1}),(i(!0),n(p,null,w(c(P),(l=>(i(),y(a,{key:l,label:l},{default:r((()=>[d(a,{label:"设备数"},{default:r((e=>[(i(!0),n(p,null,w(e.row.all,(e=>(i(),n(p,null,[e.lib_type===l?(i(),n("div",A,[u("span",null,f(e.lib_device_num),1)])):s("v-if",!0)],64)))),256))])),_:2},1024),d(a,{label:"状态"},{default:r((e=>[(i(!0),n(p,null,w(e.row.all,(e=>(i(),n(p,null,[e.lib_type===l?(i(),n("div",S,[d(_,{disabled:!e.showtype,modelValue:e.lib_status,"onUpdate:modelValue":l=>e.lib_status=l,"active-value":1,"inactive-value":2},null,8,["disabled","modelValue","onUpdate:modelValue"])])):s("v-if",!0)],64)))),256))])),_:2},1024),d(a,{label:"线程数"},{default:r((e=>[(i(!0),n(p,null,w(e.row.all,(e=>(i(),n(p,null,[e.lib_type===l?(i(),n("div",U,[d(o,{placeholder:"请输入内容",modelValue:e.lib_quantity_proportion,"onUpdate:modelValue":l=>e.lib_quantity_proportion=l,disabled:!e.showtype},null,8,["modelValue","onUpdate:modelValue","disabled"])])):s("v-if",!0)],64)))),256))])),_:2},1024),d(a,{label:"操作"},{default:r((e=>[(i(!0),n(p,null,w(e.row.all,(e=>(i(),n(p,null,[e.lib_type===l?(i(),n("div",j,[e.showtype?s("v-if",!0):(i(),y(b,{key:0,class:"cp",type:"default",icon:"Edit",circle:"",onClick:l=>z(e)},null,8,["onClick"])),e.showtype?(i(),y(b,{key:1,class:"cp",type:"primary",icon:"Edit",circle:"",onClick:l=>I(e,"one")},null,8,["onClick"])):s("v-if",!0),s(" <i class=\"el-icon-edit cp\" \n              v-if='!p.showtype'\n              @click='changeShowType(p)'></i>\n              <i class=\"el-icon-edit-outline cp\" \n              v-if='p.showtype'\n              @click='submitFun(p, \"one\")'></i> ")])):s("v-if",!0)],64)))),256))])),_:2},1024)])),_:2},1032,["label"])))),128))])),_:1},8,["data"])],64)}}});export{g as default};
