var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(a,t,i)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;import{ah as s,r as o,k as d,c as n,h as r,i as m,x as u,o as p,y as b,t as c,F as h,l as f,v as g}from"./vendor-a1d09a13.js";import{g as D}from"./role-fcd50cd3.js";import{g as y,a as V,s as _,b as w}from"./station-890cf6e3.js";import{m as v}from"./message-60d30e75.js";import{m as k}from"./self-b0a2f346.js";import{_ as C}from"./index-45436103.js";const j={components:{},mixins:[k],data:()=>({options:{role:[],pid:[],base_url:""},date:"",list:[],data:{},dialogVisible:!1,dialogType:"",busData:{item:{id:"",name:"",pid:"",role:[],base_url:""},choiceData:{}}}),computed:((e,s)=>{for(var o in s||(s={}))t.call(s,o)&&l(e,o,s[o]);if(a)for(var o of a(s))i.call(s,o)&&l(e,o,s[o]);return e})({},s(["element"])),created(){this.getConfig(),this.getList()},methods:{async getConfig(){const{data:e}=await D();this.options.role=e},async getList(){const{data:e}=await y();this.data=e,this.list=e,this.options.pid=e},handleCreate(){this.dialogType="new",this.busData.item.type="",this.dialogVisible=!0;const e=new Date;this.date=e.getTime()},async handleEdit(e){this.dialogType="edit",this.busData.item.id=e.row.id;const{data:a}=await V(this.busData.item.id);a.position,this.busData.item.id=a.position.id,this.busData.item.name=a.position.name,a.position.pid&&(this.busData.item.pid=a.position.pid.toString()),this.busData.item.role=a.position_role,this.dialogVisible=!0;const t=new Date;this.date=t.getTime()},handleDelete(e){},roleChangeChoice(e,a){this.busData.choiceData[e]=a},clearBusData(){this.busData={item:{id:"",name:"",pid:"",role:[]},choiceData:{}}},async submitFn(){if("new"===this.dialogType){const e={name:this.busData.item.name,pid:this.busData.item.pid,role_id:this.busData.item.role},a=await _(e);a&&v(a),this.getList()}if("edit"===this.dialogType){const e={id:this.busData.item.id,name:this.busData.item.name,role_id:this.busData.item.role},a=await w(this.busData.item.id,e);a&&v(a)}this.clearBusData(),this.dialogVisible=!1}}},T={class:"app-container"},E=b(" 新建 "),A=b(" 修改 "),O=b(" 删除 "),P={slot:"footer",class:"dialog-footer"},x=b(" 取 消 "),F=b(" 确 定 ");var S=C(j,[["render",function(e,a,t,i,l,s){const D=o("el-button"),y=o("el-table-column"),V=o("el-table"),_=o("el-input"),w=o("el-form-item"),v=o("el-option"),k=o("el-select"),C=o("el-form"),j=o("el-dialog");return p(),d("div",T,[e.judgePermissionElementFn("A-AS-ADD-V")?(p(),n(D,{key:0,type:"primary",onClick:s.handleCreate},{default:r((()=>[E])),_:1},8,["onClick"])):m("v-if",!0),u(V,{data:l.list,style:{width:"100%","margin-top":"30px"},border:""},{default:r((()=>[u(y,{align:"center",label:"ID"},{default:r((e=>[b(c(e.row.id),1)])),_:1}),u(y,{align:"center",label:"Name"},{default:r((e=>[b(c(e.row.name),1)])),_:1}),u(y,{align:"center",label:"Operations"},{default:r((a=>[e.judgePermissionElementFn("A-AS-EDIT-V")?(p(),n(D,{key:0,type:"primary",size:"small",onClick:e=>s.handleEdit(a)},{default:r((()=>[A])),_:2},1032,["onClick"])):m("v-if",!0),e.judgePermissionElementFn("A-AS-DEL-V")?(p(),n(D,{key:1,type:"danger",size:"small",onClick:e=>s.handleDelete(a)},{default:r((()=>[O])),_:2},1032,["onClick"])):m("v-if",!0)])),_:1})])),_:1},8,["data"]),u(j,{modelValue:l.dialogVisible,"onUpdate:modelValue":a[4]||(a[4]=e=>l.dialogVisible=e),title:"edit"===l.dialogType?"Edit Role":"New Role",width:"90%"},{default:r((()=>[u(C,{"label-width":"150px","label-position":"left"},{default:r((()=>[u(w,{label:"Name"},{default:r((()=>[u(_,{modelValue:l.busData.item.name,"onUpdate:modelValue":a[0]||(a[0]=e=>l.busData.item.name=e),disabled:"edit"===l.dialogType,placeholder:""},null,8,["modelValue","disabled"])])),_:1}),u(w,{label:"PID"},{default:r((()=>[u(k,{modelValue:l.busData.item.pid,"onUpdate:modelValue":a[1]||(a[1]=e=>l.busData.item.pid=e),disabled:"edit"===l.dialogType,filterable:"",class:"w100",placeholder:"请选择"},{default:r((()=>[(p(!0),d(h,null,f(l.options.pid,(e=>(p(),n(v,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),u(w,{label:"Role"},{default:r((()=>[u(k,{modelValue:l.busData.item.role,"onUpdate:modelValue":a[2]||(a[2]=e=>l.busData.item.role=e),filterable:"",multiple:"",class:"w100",placeholder:"支持多选"},{default:r((()=>[(p(!0),d(h,null,f(l.options.role,(e=>(p(),n(v,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),g("div",P,[u(D,{onClick:a[3]||(a[3]=e=>l.dialogVisible=!1)},{default:r((()=>[x])),_:1}),u(D,{type:"primary",onClick:s.submitFn},{default:r((()=>[F])),_:1},8,["onClick"])])])),_:1},8,["modelValue","title"])])}]]);export{S as default};