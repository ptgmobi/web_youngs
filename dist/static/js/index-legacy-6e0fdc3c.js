!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t,n,a,r,i,o){try{var u=e[i](o),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(a,r)}function a(e){return function(){var t=this,a=arguments;return new Promise((function(r,i){var o=e.apply(t,a);function u(e){n(o,r,i,u,l,"next",e)}function l(e){n(o,r,i,u,l,"throw",e)}u(void 0)}))}}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./vendor-legacy-b450b3b1.js","./product-legacy-5727b1cf.js","./index-legacy-fc2ed579.js","./WwChangePass-legacy-c57a487a.js","./role-legacy-522a8a7a.js","./station-legacy-03264a09.js","./message-legacy-eb3b59c2.js","./index-legacy-a4b15707.js","./lodash-legacy-fefaf296.js","./self-legacy-42b17d60.js"],(function(t){"use strict";var n,r,o,u,l,s,c,d,p,f,m,g,b,h,y,w,v,D,_,j,V,P,x,U,C,k,A,E,R,S,O,F,T,z,$;return{setters:[function(e){n=e.ah,r=e.u,o=e.r,u=e.k,l=e.i,s=e.x,c=e.h,d=e.v,p=e.c,f=e.N,m=e.O,g=e.o,b=e.F,h=e.l,y=e.y,w=e.t},function(e){v=e.w,D=e.g,_=e.a,j=e.b},function(e){V=e.P},function(e){P=e.P,x=e.g,U=e.a,C=e.s,k=e.b,A=e.c,E=e.d},function(e){R=e.g},function(e){S=e.g},function(e){O=e.m},function(e){F=e._,T=e.v},function(e){z=e._},function(e){$=e.m}],execute:function(){var Q={email:"",username:"",password:"",password_re:"",comment:"",position_id:[],position_ischange:!1,role_id:[],role_ischange:!1,project_id:[],project_ischange:!1,product_id:[],product_ischange:!1,status:1},q={components:{Pagination:V,WwChangePass:P},directives:{waves:v},filters:{handlePositions:function(e){}},mixins:[$],data:function(){var e=this;return{dialogVisiblePass:!1,dialogVisible:!1,dialogType:"new",busData:{options:{position:[],role:[],project:[],product:[],productArr:[]},oldData:{},data:z.cloneDeep(Q),rules:{email:[{required:!0,message:"必填",trigger:["change","blur"]},{validator:function(e,t,n){""===t?n(new Error("请输入邮箱")):T(t)?n():n(new Error("请输入正确的邮箱格式"))}}],username:[{required:!0,message:"必填",trigger:["change","blur"]},{min:6,max:50,message:"长度在 6 到 50 个字符",trigger:"blur"}],password:[{required:!0,message:"必填",trigger:["change","blur"]},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"},{validator:function(t,n,a){""===n?a(new Error("请输入密码")):(""!==e.busData.data.password_re&&e.$refs.ruleForm.validateField("password_re"),a())}}],password_re:[{required:!0,message:"必填",trigger:["change","blur"]},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"},{validator:function(t,n,a){""===n?a(new Error("请再次输入密码")):n!==e.busData.data.password?a(new Error("两次输入密码不一致!")):a()}}],comment:[{required:!1,message:"必填",trigger:["change","blur"]}],role_id:[{required:!1,message:"必填",trigger:["change","blur"]}],position_id:[{required:!0,message:"必填",trigger:["change","blur"]}]}},control:{search:""},list:[],pagination:{pageSizes:["10","20","40","100"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}},computed:i({},n(["rolesMap","element"])),watch:{"busData.data.project":{handler:function(e,t){},immediate:!1}},created:function(){this.getConfig(),this.init(),r().getters.element},methods:{handleProjectFn:function(e){return this.busData.options.project.filter((function(t){return e.includes(t.id)}))},changeUserStatus:function(e,t){},getConfig:function(){var e=this;return a(regeneratorRuntime.mark((function t(){var n,a,r,i,o,u,l,s,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D();case 2:return n=t.sent,a=n.data,e.busData.options.project=a,r={name:"",page:1,limit:999,project_id:"",order:"desc"},t.next=8,_(r);case 8:return i=t.sent,o=i.data,e.busData.options.productArr=o,t.next=13,S();case 13:return u=t.sent,l=u.data,e.busData.options.position=l,t.next=18,R();case 18:s=t.sent,c=s.data,e.busData.options.role=c;case 21:case"end":return t.stop()}}),t)})))()},init:function(){this.getList()},getUserProject:function(e){return e?this.busData.options.project.filter((function(t){return e.includes(Number(t.id))})).map((function(e){return e.name})).join(","):e},getUserProduct:function(e){return e?this.busData.options.productArr.filter((function(t){return e.includes(Number(t.id))})).map((function(e){return e.name})).join(","):e},getUserPosition:function(e){return e?this.busData.options.position.filter((function(t){return e.includes(t.id)})).map((function(e){return e.name})).join(","):e},getList:function(){var e=this;return a(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={username:e.control.search,page:e.pagination.listQuery.page,limit:e.pagination.listQuery.limit},t.next=3,x(n);case 3:a=t.sent,r=a.data,e.list=r.data,e.pagination.total=r.paging.count;case 7:case"end":return t.stop()}}),t)})))()},handleSearch:function(){this.pagination.listQuery.page=1,this.getList()},handleCreate:function(){this.dialogType="new",this.dialogVisible=!0,this.clearBusData()},handleEdit:function(e){var t=this;return a(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.dialogType="edit",t.dialogVisible=!0,t.clearBusData(),t.busData.data.id=e.row.id,n.next=6,U(t.busData.data.id);case 6:a=n.sent,r=a.data,t.busData.oldData=z.cloneDeep(r),o=z.cloneDeep(r),t.busData.data=i(i(i({},t.busData.data),o),o.user),t.choiceProject();case 12:case"end":return n.stop()}}),n)})))()},confirmFun:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.handleSubmitFn()}))},handleSubmitFn:function(){var e=this;return a(regeneratorRuntime.mark((function t(){var n,a,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("new"!==e.dialogType){t.next=6;break}return n=z.cloneDeep(e.busData.data),t.next=4,C(n).catch((function(t){var n=t.data.data;for(var a in n)if(Object.hasOwnProperty.call(n,a)){var r=n[a];e.$message.error(r)}}));case 4:(a=t.sent)&&(O(a),e.getList(),e.clearBusData(),e.dialogVisible=!1);case 6:if("edit"!==e.dialogType){t.next=12;break}return r=z.cloneDeep(e.busData.data),t.next=10,k(e.busData.data.id,r);case 10:(i=t.sent)&&(O(i),e.clearBusData(),e.dialogVisible=!1);case 12:case"end":return t.stop()}}),t)})))()},handleDelete:function(e){var t=this;this.$confirm("确定删除?","警告",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(a(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.list.splice(e.$index,1),t.$message({type:"success",message:"Delete succed!"});case 2:case"end":return n.stop()}}),n)})))).catch((function(e){console.error(e)}))},clearBusData:function(){var e=this;this.busData.data=z.cloneDeep(Q),this.busData.oldData={},this.$nextTick((function(){e.$refs.ruleForm.clearValidate()}))},changeStatus:function(e,t){return a(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:t.id,status:t.status},e.next=3,A(t.id,n);case 3:a=e.sent,O(a);case 5:case"end":return e.stop()}}),e)})))()},handleEditPass:function(e){this.dialogVisiblePass=!0,this.busData.data.id=e.row.id},cancelPass:function(e){this.dialogVisiblePass=!1},confirmPass:function(e){var t=this;return a(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={id:t.busData.data.id,password:e.pass,password_re:e.checkPass},n.next=3,E(t.busData.data.id,a);case 3:r=n.sent,O(r),t.dialogVisiblePass=!1;case 6:case"end":return n.stop()}}),n)})))()},selectChangeFn:function(e){this.busData.data["".concat(e,"_ischange")]=!0},choiceProject:function(){var t=this;return a(regeneratorRuntime.mark((function n(){var r,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.busData.data,r=[],t.busData.data.project_id&&(r=e(t.busData.data.project_id)),i=[],0===r.length){n.next=9;break}return n.next=7,Promise.all(r.map(function(){var e=a(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return n=e.sent,0!==(a=n.data).product_id.length&&a.product_id.forEach((function(e){i.push(e)})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:o=Array.from(new Set(i)),t.busData.options.product=t.handleProductsFn(o);case 9:case"end":return n.stop()}}),n)})))()},handleProductsFn:function(e){var t=[];return this.busData.options.productArr.map((function(n){e.includes(n.id)&&t.push(n)})),t},unSelectedAll:function(){this.busData.data.product_id=[],this.busData.data.product_ischange=!0},selectAll:function(){var e=[];this.busData.options.product.map((function(t){e.push(t.id)})),this.busData.data.product_id=e,this.busData.data.product_ischange=!0}}},B={class:"app-container"},I=y(" 全选 "),L=y(" 清空 "),M={style:{"text-align":"right"}},W=y(" 取消 "),N=y(" 确定 "),J={class:"w100 control-box flex jc-end"},G={class:"flex flex-end"},H=y(" 搜索 "),K=y(" 添加用户 "),X={class:"flex"},Y=y(" 修改 "),Z=y(" 修改密码 "),ee=y(" 删除 "),te={class:"w100 flex"};t("default",F(q,[["render",function(e,t,n,a,r,i){var v=o("el-input"),D=o("el-form-item"),_=o("el-option"),j=o("el-select"),V=o("el-button"),P=o("el-form"),x=o("el-dialog"),U=o("ww-change-pass"),C=o("el-table-column"),k=o("el-switch"),A=o("el-table"),E=o("pagination");return g(),u("div",B,[l(" dialog "),s(x,{modelValue:r.dialogVisible,"onUpdate:modelValue":t[17]||(t[17]=function(e){return r.dialogVisible=e}),title:"edit"===r.dialogType?"Edit User":"New User",width:"80%"},{default:c((function(){return[s(P,{ref:"ruleForm",model:r.busData.data,rules:r.busData.rules,"label-width":"150px","label-position":"left"},{default:c((function(){return[s(D,{label:"邮箱",prop:"email"},{default:c((function(){return[s(v,{modelValue:r.busData.data.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.busData.data.email=e}),placeholder:"邮箱",disabled:"edit"===r.dialogType},null,8,["modelValue","disabled"])]})),_:1}),s(D,{label:"用户名",prop:"username"},{default:c((function(){return[s(v,{modelValue:r.busData.data.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.busData.data.username=e}),placeholder:"用户名必须大于6位"},null,8,["modelValue"])]})),_:1}),"new"===r.dialogType?(g(),u(b,{key:0},[s(D,{label:"密码",prop:"password",autocomplete:"off"},{default:c((function(){return[s(v,{modelValue:r.busData.data.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.busData.data.password=e}),type:"password",placeholder:""},null,8,["modelValue"])]})),_:1}),s(D,{label:"再次输入密码",prop:"password_re",autocomplete:"off"},{default:c((function(){return[s(v,{modelValue:r.busData.data.password_re,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.busData.data.password_re=e}),type:"password",placeholder:""},null,8,["modelValue"])]})),_:1})],64)):l("v-if",!0),s(D,{label:"描述",prop:"comment"},{default:c((function(){return[s(v,{modelValue:r.busData.data.comment,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.busData.data.comment=e}),placeholder:"描述"},null,8,["modelValue"])]})),_:1}),s(D,{label:"岗位权限",prop:"position_id"},{default:c((function(){return[s(j,{modelValue:r.busData.data.position_id,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.busData.data.position_id=e}),filterable:"",multiple:"",class:"w100",placeholder:"岗位权限",disabled:!e.judgePermissionElementFn("A-AU-USER-FORM-POSITION-C"),onChange:t[6]||(t[6]=function(e){return i.selectChangeFn("position")})},{default:c((function(){return[(g(!0),u(b,null,h(r.busData.options.position,(function(e){return g(),p(_,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]})),_:1}),s(D,{label:"角色权限",prop:"role_id"},{default:c((function(){return[s(j,{modelValue:r.busData.data.role_id,"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.busData.data.role_id=e}),filterable:"",multiple:"",class:"w100",placeholder:"角色权限",disabled:!e.judgePermissionElementFn("A-AU-USER-FORM-ROLE-C"),onChange:t[8]||(t[8]=function(e){return i.selectChangeFn("role")})},{default:c((function(){return[(g(!0),u(b,null,h(r.busData.options.role,(function(e){return g(),p(_,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]})),_:1}),s(D,{label:"所属项目组",prop:"project_id"},{default:c((function(){return[s(j,{modelValue:r.busData.data.project_id,"onUpdate:modelValue":t[9]||(t[9]=function(e){return r.busData.data.project_id=e}),filterable:"",multiple:"",class:"w100",placeholder:"所属项目组",disabled:!e.judgePermissionElementFn("A-AU-USER-FORM-PROJECT-C"),onChange:t[10]||(t[10]=function(e){return i.selectChangeFn("project"),i.choiceProject()})},{default:c((function(){return[(g(!0),u(b,null,h(r.busData.options.project,(function(e){return g(),p(_,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]})),_:1}),s(D,{label:"可查看产品",prop:"product_id"},{default:c((function(){return[s(j,{modelValue:r.busData.data.product_id,"onUpdate:modelValue":t[13]||(t[13]=function(e){return r.busData.data.product_id=e}),filterable:"",multiple:"",class:"w100",placeholder:"默认全部",disabled:!e.judgePermissionElementFn("A-AU-USER-FORM-PRODUCT-C"),onChange:t[14]||(t[14]=function(e){return i.selectChangeFn("product")})},{default:c((function(){return[s(V,{style:{float:"left","margin-left":"20px","z-index":"1"},type:"primary",plain:"",onClick:t[11]||(t[11]=function(e){return i.selectAll()})},{default:c((function(){return[I]})),_:1}),s(V,{style:{float:"right","margin-right":"20px","z-index":"1"},type:"danger",plain:"",onClick:t[12]||(t[12]=function(e){return i.unSelectedAll()})},{default:c((function(){return[L]})),_:1}),(g(!0),u(b,null,h(r.busData.options.product,(function(e){return g(),p(_,{key:e.id,label:e.name,value:e.id,style:{clear:"both"}},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]})),_:1})]})),_:1},8,["model","rules"]),d("div",M,[s(V,{type:"danger",onClick:t[15]||(t[15]=function(e){return r.dialogVisible=!1})},{default:c((function(){return[W]})),_:1}),s(V,{type:"primary",onClick:t[16]||(t[16]=function(e){return i.confirmFun("ruleForm")})},{default:c((function(){return[N]})),_:1})])]})),_:1},8,["modelValue","title"]),l(" dialog "),l(" dialog "),s(x,{modelValue:r.dialogVisiblePass,"onUpdate:modelValue":t[18]||(t[18]=function(e){return r.dialogVisiblePass=e}),title:"修改密码",width:"80%"},{default:c((function(){return[r.dialogVisiblePass?(g(),p(U,{key:0,is_change:!1,"is-dialog":!0,onWwpassCancel:i.cancelPass,onWwpassConfirm:i.confirmPass},null,8,["onWwpassCancel","onWwpassConfirm"])):l("v-if",!0)]})),_:1},8,["modelValue"]),l(" dialog "),d("div",J,[d("div",G,[l(' <el-input placeholder="请输入内容" v-model="control.search" class="input-with-select">\n          <el-button type="primary" slot="append">搜索</el-button>\n        </el-input> '),s(v,{modelValue:r.control.search,"onUpdate:modelValue":t[19]||(t[19]=function(e){return r.control.search=e}),class:"mr-10",placeholder:"请输入用户名"},null,8,["modelValue"]),s(V,{type:"primary",onClick:i.handleSearch},{default:c((function(){return[H]})),_:1},8,["onClick"]),e.judgePermissionElementFn("A-AU-USER-ADD-V")?(g(),p(V,{key:0,type:"primary",onClick:i.handleCreate},{default:c((function(){return[K]})),_:1},8,["onClick"])):l("v-if",!0)])]),s(A,{data:r.list,style:{width:"100%","margin-top":"30px"},border:""},{default:c((function(){return[s(C,{align:"center",label:"邮箱"},{default:c((function(e){return[y(w(e.row.email),1)]})),_:1}),s(C,{align:"center",label:"用户名"},{default:c((function(e){return[y(w(e.row.username),1)]})),_:1}),s(C,{align:"center",label:"所属项目组"},{default:c((function(e){return[y(w(i.getUserProject(e.row.project_id)),1)]})),_:1}),s(C,{align:"center",label:"用户权限"},{default:c((function(e){return[y(w(i.getUserPosition(e.row.position_id)),1)]})),_:1}),s(C,{align:"center",label:"可查看产品"},{default:c((function(e){return[y(w(e.row.product_id),1)]})),_:1}),s(C,{align:"center",label:"创建日期"},{default:c((function(e){return[y(w(e.row.create_date),1)]})),_:1}),s(C,{align:"center",label:"最后访问日期"},{default:c((function(e){return[y(w(e.row.update_date),1)]})),_:1}),s(C,{align:"center",label:"用户状态"},{default:c((function(t){return[e.judgePermissionElementFn("A-AU-USER-STATUS-V")?(g(),p(k,{key:0,modelValue:t.row.status,"onUpdate:modelValue":function(e){return t.row.status=e},"active-value":1,"inactive-value":2,onChange:function(e){return i.changeStatus(e,t.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])):l("v-if",!0)]})),_:1}),s(C,{align:"center",label:"操作",width:"250"},{default:c((function(t){return[d("div",X,[e.judgePermissionElementFn("A-AU-USER-EDIT-V")?(g(),p(V,{key:0,type:"primary",size:"small",onClick:function(e){return i.handleEdit(t)}},{default:c((function(){return[Y]})),_:2},1032,["onClick"])):l("v-if",!0),e.judgePermissionElementFn("A-AU-USER-PASS-V")?(g(),p(V,{key:1,type:"primary",size:"small",onClick:function(e){return i.handleEditPass(t)}},{default:c((function(){return[Z]})),_:2},1032,["onClick"])):l("v-if",!0),e.judgePermissionElementFn("A-AU-USER-DEL-V")?(g(),p(V,{key:2,type:"danger",size:"small",onClick:function(e){return i.handleDelete(t)}},{default:c((function(){return[ee]})),_:2},1032,["onClick"])):l("v-if",!0)])]})),_:1})]})),_:1},8,["data"]),l(" pagination "),d("div",te,[f(s(E,{page:r.pagination.listQuery.page,"onUpdate:page":t[20]||(t[20]=function(e){return r.pagination.listQuery.page=e}),limit:r.pagination.listQuery.limit,"onUpdate:limit":t[21]||(t[21]=function(e){return r.pagination.listQuery.limit=e}),total:r.pagination.total,"page-sizes":r.pagination.pageSizes,onPagination:i.init},null,8,["page","limit","total","page-sizes","onPagination"]),[[m,r.pagination.total]])])])}]]))}}}))}();
