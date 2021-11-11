!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function t(t){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?e(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function l(e,t,n,a,i,r,o){try{var l=e[r](o),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(a,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function o(e){l(r,a,i,o,c,"next",e)}function c(e){l(r,a,i,o,c,"throw",e)}o(void 0)}))}}System.register(["./power-legacy.5e363ffa.js","./format-legacy.57dbf134.js","./vendor-legacy.c256eaaf.js","./lodash-legacy.2ca6ad95.js","./index-legacy.319eb427.js","./message-legacy.0bf83224.js","./self-legacy.86285a34.js"],(function(e){"use strict";var n,r,o,l,u,d,s,f,h,p,m,g,D,b,y,v,A,w,C,k;return{setters:[function(e){n=e.g,r=e.a,o=e.s,l=e.b},function(e){u=e.h},function(e){d=e.I,s=e.r,f=e.o,h=e.c,p=e.f,m=e.g,g=e.q,D=e.h,b=e.x,y=e.y,v=e.t},function(e){A=e._},function(e){w=e._},function(e){C=e.m},function(e){k=e.m}],execute:function(){var j={props:{title:{default:"title",type:String},data:{default:function(){return[]},type:Array},item:{default:function(){return{}},type:Object},choice:{default:function(){return[]},type:Array},name:{default:"name",type:String},date:{default:0,type:Number}},data:function(){return{filterApiText:"",list:[],choiceArr:[],checkStrictly:!1,defaultProps:{children:"children",label:"label"}}},computed:{handleTree:function(){return u(this.list)},handleRef:function(){return"tree".concat(this.name)}},watch:{date:function(){this.init()},choice:{immediate:!0,handler:function(e,t){var n=this;this.$nextTick((function(){n.$refs[n.handleRef].setCheckedKeys([]),e.forEach((function(e){var t=n.$refs[n.handleRef].getNode(e);t&&t.isLeaf&&n.$refs[n.handleRef].setChecked(t,!0)}))}))}},filterApiText:function(e){this.$refs[this.handleRef]&&this.$refs[this.handleRef].filter(e)}},created:function(){this.list=A.cloneDeep(this.data)},methods:{init:function(){var e=this;return c(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.filterApiText="";case 1:case"end":return t.stop()}}),t)})))()},changeOneFn:function(e,t){var n=[].concat(i(this.$refs[this.handleRef].getCheckedKeys()),i(this.$refs[this.handleRef].getHalfCheckedKeys()));this.$emit("changeChoiceData",this.name,n)},filterApiNode:function(e,t){return!e||t[this.defaultProps.label].includes(e)},checkApiTree:function(e,t,n){var a=this.handleChoiceApiDataPermissionID,i=this.dialogData.treeData.choiceApiData.find((function(t){return t.permission_id===e.id})),r=null==i?void 0:i.id;t?(this.dialogData.treeData.choiceApiDataAdd.includes(e.id)||a.includes(e.id)||this.dialogData.treeData.choiceApiDataAdd.push(e.id),this.dialogData.treeData.choiceApiDataAdd.includes(r)&&(this.dialogData.treeData.choiceApiDataDel=this.dialogData.treeData.choiceApiDataDel.filter((function(e){return e!==r})))):(this.dialogData.treeData.choiceApiDataDel.includes(r)||i&&this.dialogData.treeData.choiceApiDataDel.push(r),this.dialogData.treeData.choiceApiDataAdd.includes(e.id)&&(this.dialogData.treeData.choiceApiDataAdd=this.dialogData.treeData.choiceApiDataAdd.filter((function(t){return t!==e.id}))))},generateRoutes:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",i=[],r=a(e);try{for(r.s();!(t=r.n()).done;){var o=t.value.route;if(!o.hidden){var l=this.onlyOneShowingChild(o.children,o);o.children&&l&&!o.alwaysShow&&(o=l);var c={path:d.resolve(n,o.path),title:o.title,name:o.name};o.children&&(c.children=this.generateRoutes(o.children,c.path)),i.push(c)}}}catch(u){r.e(u)}finally{r.f()}return i},generateArr:function(e){var t=this,n=[];return e.forEach((function(e){if(n.push(e),e.children){var a=t.generateArr(e.children);a.length>0&&(n=[].concat(i(n),i(a)))}})),n},generateTree:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",i=arguments.length>2?arguments[2]:void 0,r=[],o=a(e);try{for(o.s();!(t=o.n()).done;){var l=t.value,c=d.resolve(n,l.path);l.children&&(l.children=this.generateTree(l.children,c,i)),(i.includes(c)||l.children&&l.children.length>=1)&&r.push(l)}}catch(u){o.e(u)}finally{o.f()}return r},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,a=null,i=e.filter((function(e){return!e.hidden}));return 1===i.length?((a=i[0]).path=d.resolve(n.path,a.path),a):0===i.length&&(a=t(t({},n),{},{path:"",noShowingChildren:!0}))}}},x={class:""};var O={element:[],menu:[],operation:[],permission:[]},T={mixins:[k],components:{RoleTree:w(j,[["render",function(e,t,n,a,i,r){var o=s("el-input"),l=s("el-tree"),c=s("el-form-item"),u=s("el-form");return f(),h(u,{"label-width":"150px","label-position":"top"},{default:p((function(){return[m(c,{label:n.title},{default:p((function(){return[g("div",x,[m(o,{modelValue:i.filterApiText,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.filterApiText=e}),class:"w100",placeholder:"输入关键字进行过滤"},null,8,["modelValue"]),m(l,{ref:r.handleRef,data:r.handleTree,props:i.defaultProps,"show-checkbox":"","node-key":"id",class:"permission-tree","default-checked-keys":i.choiceArr,"filter-node-method":r.filterApiNode,"default-expand-all":!0,onCheck:r.changeOneFn},null,8,["data","props","default-checked-keys","filter-node-method","onCheck"])])]})),_:1},8,["label"])]})),_:1})}]])},data:function(){return{date:"",list:[],data:{},dialogVisible:!1,dialogType:"",busData:{item:{type:""},choiceData:{menu:[],element:[],operation:[]}}}},created:function(){this.getList()},methods:{getList:function(){var e=this;return c(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:a=t.sent,i=a.data,e.data=i,e.list=i.permission;case 6:case"end":return t.stop()}}),t)})))()},clearBusData:function(){this.busData.choiceData=A.cloneDeep(O)},handleCreate:function(){this.dialogType="new",this.busData.item.type="",this.clearBusData(),this.dialogVisible=!0;var e=new Date;this.date=e.getTime()},handleEdit:function(e){var t=this;return c(regeneratorRuntime.mark((function n(){var a,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.dialogType="edit",t.busData.item=e.row,n.next=4,r(t.busData.item.id);case 4:a=n.sent,i=a.data,t.busData.choiceData=i,t.dialogVisible=!0,o=new Date,t.date=o.getTime();case 10:case"end":return n.stop()}}),n)})))()},handleDelete:function(e){},roleChangeChoice:function(e,t){this.busData.choiceData[e]=t},submitFn:function(){var e=this;return c(regeneratorRuntime.mark((function t(){var n,a,i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("new"!==e.dialogType){t.next=7;break}return n={type:e.busData.item.type,menu_id:e.busData.choiceData.menu,element_id:e.busData.choiceData.element,operation_id:e.busData.choiceData.operation},t.next=4,o(n);case 4:(a=t.sent)&&C(a),e.getList();case 7:if("edit"!==e.dialogType){t.next=13;break}return i={permission_id:e.busData.item.id,menu_id:e.busData.choiceData.menu,element_id:e.busData.choiceData.element,operation_id:e.busData.choiceData.operation},t.next=11,l(e.busData.item.id,i);case 11:(r=t.sent)&&C(r);case 13:e.dialogVisible=!1;case 14:case"end":return t.stop()}}),t)})))()}}},_={class:"app-container"},R=y("新建"),P=y("修改"),V=y("删除"),S={class:"flex jc-between ai-start"},E={slot:"footer",class:"dialog-footer"},I=y("取 消"),$=y("确 定");e("default",w(T,[["render",function(e,t,n,a,i,r){var o=s("el-button"),l=s("el-table-column"),c=s("el-table"),u=s("el-input"),d=s("el-form-item"),A=s("el-form"),w=s("role-tree"),C=s("el-dialog");return f(),D("div",_,[e.judgePermissionElementFn("A-AP-ADD-V")?(f(),h(o,{key:0,type:"primary",onClick:r.handleCreate},{default:p((function(){return[R]})),_:1},8,["onClick"])):b("v-if",!0),m(c,{data:i.list,style:{width:"100%","margin-top":"30px"},border:""},{default:p((function(){return[m(l,{align:"center",label:"ID"},{default:p((function(e){return[y(v(e.row.id),1)]})),_:1}),m(l,{align:"center",label:"Type"},{default:p((function(e){return[y(v(e.row.type),1)]})),_:1}),m(l,{align:"center",label:"Operations"},{default:p((function(t){return[e.judgePermissionElementFn("A-AP-EDIT-V")?(f(),h(o,{key:0,type:"primary",size:"small",onClick:function(e){return r.handleEdit(t)}},{default:p((function(){return[P]})),_:2},1032,["onClick"])):b("v-if",!0),e.judgePermissionElementFn("A-AP-DEL-V")?(f(),h(o,{key:1,type:"danger",size:"small",onClick:function(e){return r.handleDelete(t)}},{default:p((function(){return[V]})),_:2},1032,["onClick"])):b("v-if",!0)]})),_:1})]})),_:1},8,["data"]),m(C,{modelValue:i.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.dialogVisible=e}),title:"edit"===i.dialogType?"Edit Role":"New Role",width:"90%"},{default:p((function(){return[m(A,{"label-width":"150px","label-position":"left"},{default:p((function(){return[m(d,{label:"Name"},{default:p((function(){return[m(u,{modelValue:i.busData.item.type,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.busData.item.type=e}),placeholder:"Role Name",disabled:"edit"===i.dialogType},null,8,["modelValue","disabled"])]})),_:1})]})),_:1}),g("div",S,[m(w,{ref:"roleroute",item:i.busData.item,data:i.data.menu,date:i.date,choice:i.busData.choiceData.menu,title:"路由权限",name:"menu",class:"col-auto-8 m0-10",onChangeChoiceData:r.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"]),m(w,{ref:"rolebutton",item:i.busData.item,data:i.data.element,date:i.date,choice:i.busData.choiceData.element,title:"按钮权限",name:"element",class:"col-auto-8 m0-10",onChangeChoiceData:r.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"]),m(w,{ref:"roleapi",item:i.busData.item,data:i.data.operation,date:i.date,choice:i.busData.choiceData.operation,title:"API权限",name:"operation",class:"col-auto-8 m0-10",onChangeChoiceData:r.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"])]),g("div",E,[m(o,{onClick:t[1]||(t[1]=function(e){return i.dialogVisible=!1})},{default:p((function(){return[I]})),_:1}),m(o,{type:"primary",onClick:r.submitFn},{default:p((function(){return[$]})),_:1},8,["onClick"])])]})),_:1},8,["modelValue","title"])])}]]))}}}))}();