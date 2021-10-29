!function(){function e(e,t,n,i,r,a,o){try{var u=e[a](o),s=u.value}catch(l){return void n(l)}u.done?t(s):Promise.resolve(s).then(i,r)}function t(t){return function(){var n=this,i=arguments;return new Promise((function(r,a){var o=t.apply(n,i);function u(t){e(o,r,a,u,s,"next",t)}function s(t){e(o,r,a,u,s,"throw",t)}u(void 0)}))}}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./vendor-legacy.2b33c4a7.js","./power-legacy.bd22a73a.js","./role-legacy.e149c8b5.js","./message-legacy.f537b405.js","./self-legacy.2290f97e.js","./index-legacy.8547a98f.js"],(function(e){"use strict";var n,r,a,o,u,s,l,c,d,f,m,p,b,g,y,h,v,D,w,j,k;return{setters:[function(e){n=e.ac,r=e.r,a=e.h,o=e.c,u=e.f,s=e.x,l=e.g,c=e.o,d=e.y,f=e.t,m=e.F,p=e.i,b=e.q},function(e){g=e.g},function(e){y=e.g,h=e.a,v=e.s,D=e.b},function(e){w=e.m},function(e){j=e.m},function(e){k=e._}],execute:function(){var O={mixins:[j],components:{},data:function(){return{options:{permissions:[]},date:"",list:[],data:{},dialogVisible:!1,dialogType:"",busData:{item:{id:"",name:"",permissions:[]},choiceData:{}}}},computed:i({},n(["element"])),created:function(){this.getConfig(),this.getList()},methods:{getConfig:function(){var e=this;return t(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:n=t.sent,i=n.data,e.options.permissions=i.permission;case 5:case"end":return t.stop()}}),t)})))()},getList:function(){var e=this;return t(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:n=t.sent,i=n.data,e.data=i,e.list=i;case 6:case"end":return t.stop()}}),t)})))()},handleCreate:function(){this.dialogType="new",this.busData.item.type="",this.busData.item.name="",this.busData.item.permissions=[],this.dialogVisible=!0;var e=new Date;this.date=e.getTime()},handleEdit:function(e){var n=this;return t(regeneratorRuntime.mark((function t(){var i,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.dialogType="edit",n.busData.item.id=e.row.id,t.next=4,h(n.busData.item.id);case 4:i=t.sent,r=i.data,n.busData.item.name=r.role.name,n.busData.item.permissions=r.role_permission,n.dialogVisible=!0,a=new Date,n.date=a.getTime();case 11:case"end":return t.stop()}}),t)})))()},handleDelete:function(e){},roleChangeChoice:function(e,t){this.busData.choiceData[e]=t},submitFn:function(){var e=this;return t(regeneratorRuntime.mark((function t(){var n,i,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("new"!==e.dialogType){t.next=7;break}return n={name:e.busData.item.name,permission_id:e.busData.item.permissions},t.next=4,v(n);case 4:(i=t.sent)&&w(i),e.getList();case 7:if("edit"!==e.dialogType){t.next=13;break}return r={role_id:e.busData.item.id,permission_id:e.busData.item.permissions},t.next=11,D(e.busData.item.id,r);case 11:(a=t.sent)&&w(a);case 13:e.dialogVisible=!1;case 14:case"end":return t.stop()}}),t)})))()}}},V={class:"app-container"},_=d("新建"),x=d("修改"),C=d("删除"),P={slot:"footer",class:"dialog-footer"},R=d("取 消"),E=d("确 定");e("default",k(O,[["render",function(e,t,n,i,g,y){var h=r("el-button"),v=r("el-table-column"),D=r("el-table"),w=r("el-input"),j=r("el-form-item"),k=r("el-option"),O=r("el-select"),T=r("el-form"),A=r("el-dialog");return c(),a("div",V,[e.judgePermissionElementFn("A-AR-ADD-V")?(c(),o(h,{key:0,type:"primary",onClick:y.handleCreate},{default:u((function(){return[_]})),_:1},8,["onClick"])):s("v-if",!0),l(D,{data:g.list,style:{width:"100%","margin-top":"30px"},border:""},{default:u((function(){return[l(v,{align:"center",label:"ID"},{default:u((function(e){return[d(f(e.row.id),1)]})),_:1}),l(v,{align:"center",label:"Name"},{default:u((function(e){return[d(f(e.row.name),1)]})),_:1}),l(v,{align:"center",label:"Operations"},{default:u((function(t){return[e.judgePermissionElementFn("A-AR-EDIT-V")?(c(),o(h,{key:0,type:"primary",size:"small",onClick:function(e){return y.handleEdit(t)}},{default:u((function(){return[x]})),_:2},1032,["onClick"])):s("v-if",!0),e.judgePermissionElementFn("A-AR-DEL-V")?(c(),o(h,{key:1,type:"danger",size:"small",onClick:function(e){return y.handleDelete(t)}},{default:u((function(){return[C]})),_:2},1032,["onClick"])):s("v-if",!0)]})),_:1})]})),_:1},8,["data"]),l(A,{modelValue:g.dialogVisible,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.dialogVisible=e}),title:"edit"===g.dialogType?"Edit Role":"New Role",width:"90%"},{default:u((function(){return[l(T,{"label-width":"150px","label-position":"left"},{default:u((function(){return[l(j,{label:"Name"},{default:u((function(){return[l(w,{modelValue:g.busData.item.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.busData.item.name=e}),placeholder:"",disabled:"edit"===g.dialogType},null,8,["modelValue","disabled"])]})),_:1}),l(j,{label:"Permissions"},{default:u((function(){return[l(O,{modelValue:g.busData.item.permissions,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.busData.item.permissions=e}),filterable:"",multiple:"",clearable:"",class:"w100",placeholder:"支持多选"},{default:u((function(){return[(c(!0),a(m,null,p(g.options.permissions,(function(e){return c(),o(k,{key:e.id,label:e.type,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),b("div",P,[l(h,{onClick:t[2]||(t[2]=function(e){return g.dialogVisible=!1})},{default:u((function(){return[R]})),_:1}),l(h,{type:"primary",onClick:y.submitFn},{default:u((function(){return[E]})),_:1},8,["onClick"])])]})),_:1},8,["modelValue","title"])])}]]))}}}))}();
