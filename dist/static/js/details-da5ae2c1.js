var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,n=(e,n)=>{for(var r in n||(n={}))l.call(n,r)&&o(e,r,n[r]);if(a)for(var r of a(n))t.call(n,r)&&o(e,r,n[r]);return e};import{d as r,a as p,h as s,r as c,t as u,L as i,q as d,o as m,c as b,x as f,e as w,s as _,v,f as y}from"./main-4108d4c8.js";import{c as g,d as V,e as h,f as U}from"./fenix-b0cffb8f.js";import{m as k}from"./message-c3fe1e43.js";import{c as C}from"./clipboard-2a7c3d22.js";const j=f("h3",null,"Manage Slot",-1),P={class:"mt-10"},D={class:"flex"},O=y(" Save "),x=y(" Copy "),S=r({setup(e){const a=p();let l=s(""),t=s("");const o=c({tableData:[]}),{tableData:r}=u(o),y=async()=>{const{data:e}=await g(t.value);o.tableData=e};return i((()=>{t.value=a.currentRoute.value.params.id,l.value=a.currentRoute.value.name,y()})),(e,a)=>{const l=d("el-table-column"),t=d("el-input"),o=d("el-button"),p=d("el-switch"),s=d("el-table");return m(),b("div",null,[j,f("div",P,[w(s,{data:v(r),style:{width:"100%"},border:""},{default:_((()=>[w(l,{prop:"app_id",label:"App ID",align:"center"}),w(l,{prop:"app_name",label:"App Name",align:"center"}),w(l,{prop:"uid",label:"UID",align:"center"}),w(l,{prop:"slot_id",label:"Slot ID",align:"center"}),w(l,{prop:"slot_name",label:"Slot Name",align:"center"}),w(l,{prop:"pub_name",label:"Pub Name",align:"center"},{default:_((e=>[w(t,{modelValue:e.row.pub_name,"onUpdate:modelValue":a=>e.row.pub_name=a,placeholder:"Please input"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),w(l,{prop:"postback_url",label:"Postback URL",align:"center"},{default:_((e=>[w(t,{modelValue:e.row.postback_url,"onUpdate:modelValue":a=>e.row.postback_url=a,placeholder:"Please input"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),w(l,{prop:"comment",label:"Comment",align:"center"},{default:_((e=>[w(t,{modelValue:e.row.comment,"onUpdate:modelValue":a=>e.row.comment=a,placeholder:"Please input"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),w(l,{label:"Operation",align:"center",width:"200px"},{default:_((e=>[f("div",D,[w(o,{class:"cp",type:"primary",onClick:a=>(async({row:e})=>{const a=n({},e),l=await h(a);k(l)})(e)},{default:_((()=>[O])),_:2},1032,["onClick"]),w(p,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":2,class:"ml-10 mr-10",onChange:a=>(async({row:e})=>{const a=n({},e),l=await V(e.slot_id,a);k(l)})(e)},null,8,["modelValue","onUpdate:modelValue","onChange"]),w(o,{type:"danger",icon:"Delete",circle:"",onClick:a=>(async({row:e})=>{const a=await U(e.id);k(a),y()})(e)},null,8,["onClick"])])])),_:1}),w(l,{prop:"user_name",label:"Api URL",align:"center"},{default:_((e=>[w(o,{class:"cp",type:"primary",onClick:a=>(({row:e})=>{const{api_url:a}=e;C(a)})(e)},{default:_((()=>[x])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])}}});export{S as default};