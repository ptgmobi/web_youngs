var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,s=(e,s)=>{for(var o in s||(s={}))t.call(s,o)&&i(e,o,s[o]);if(a)for(var o of a(s))l.call(s,o)&&i(e,o,s[o]);return e};import{af as o,u as r,r as d,i as n,g as u,v as c,f as p,s as m,c as g,P as h,Q as b,o as f,F as _,j as w,x as D,t as y}from"./vendor-bff596f5.js";import{w as V,g as P,a as j,b as v}from"./product-e9313045.js";import{P as C}from"./index-714143f1.js";import{P as U,g as E,a as F,s as A,b as k,c as S,d as x}from"./WwChangePass-cf32dfef.js";import{g as O}from"./role-ec8fbaff.js";import{g as T}from"./station-9f6c8c3e.js";import{m as R}from"./message-b8bb0a4b.js";import{_ as q,v as z}from"./index-956d392d.js";import{_ as $}from"./lodash-4cc3b760.js";import{m as B}from"./self-07a13e97.js";const Q={email:"",username:"",password:"",password_re:"",comment:"",position_id:[],position_ischange:!1,role_id:[],role_ischange:!1,project_id:[],project_ischange:!1,product_id:[],product_ischange:!1,status:1},L={mixins:[B],components:{Pagination:C,WwChangePass:U},directives:{waves:V},filters:{handlePositions(e){}},data(){return{dialogVisiblePass:!1,dialogVisible:!1,dialogType:"new",busData:{options:{position:[],role:[],project:[],product:[],productArr:[]},oldData:{},data:$.cloneDeep(Q),rules:{email:[{required:!0,message:"必填",trigger:["change","blur"]},{validator:(e,a,t)=>{""===a?t(new Error("请输入邮箱")):z(a)?t():t(new Error("请输入正确的邮箱格式"))}}],username:[{required:!0,message:"必填",trigger:["change","blur"]},{min:6,max:50,message:"长度在 6 到 50 个字符",trigger:"blur"}],password:[{required:!0,message:"必填",trigger:["change","blur"]},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"},{validator:(e,a,t)=>{""===a?t(new Error("请输入密码")):(""!==this.busData.data.password_re&&this.$refs.ruleForm.validateField("password_re"),t())}}],password_re:[{required:!0,message:"必填",trigger:["change","blur"]},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"},{validator:(e,a,t)=>{""===a?t(new Error("请再次输入密码")):a!==this.busData.data.password?t(new Error("两次输入密码不一致!")):t()}}],comment:[{required:!1,message:"必填",trigger:["change","blur"]}],role_id:[{required:!1,message:"必填",trigger:["change","blur"]}],position_id:[{required:!0,message:"必填",trigger:["change","blur"]}],project_id:[{required:!0,message:"必填",trigger:["change","blur"]}],product_id:[{required:!0,message:"必填",trigger:["change","blur"]}]}},control:{search:""},list:[],pagination:{pageSizes:["10","20","40","100"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}},computed:s({},o(["rolesMap","element"])),watch:{"busData.data.project":{handler(e,a){},immediate:!1}},created(){this.getConfig(),this.init();r().getters.element},methods:{handleProjectFn(e){return this.busData.options.project.filter((a=>e.includes(a.id)))},changeUserStatus(e,a){},async getConfig(){const{data:e}=await P();this.busData.options.project=e;const{data:a}=await j({name:"",page:1,limit:999,project_id:"",order:"desc"});this.busData.options.productArr=a;const{data:t}=await T();this.busData.options.position=t;const{data:l}=await O();this.busData.options.role=l},init(){this.getList()},getUserProject(e){return e?this.busData.options.project.filter((a=>e.includes(Number(a.id)))).map((e=>e.name)).join(","):e},getUserProduct(e){return e?this.busData.options.productArr.filter((a=>e.includes(Number(a.id)))).map((e=>e.name)).join(","):e},getUserPosition(e){return e?this.busData.options.position.filter((a=>e.includes(a.id))).map((e=>e.name)).join(","):e},async getList(){const e={username:this.control.search,page:this.pagination.listQuery.page,limit:this.pagination.listQuery.limit},{data:a}=await E(e);this.list=a.data,this.pagination.total=a.paging.count},handleSearch(){this.pagination.listQuery.page=1,this.getList()},handleCreate(){this.dialogType="new",this.dialogVisible=!0,this.clearBusData()},async handleEdit(e){this.dialogType="edit",this.dialogVisible=!0,this.clearBusData(),this.busData.data.id=e.row.id;const{data:a}=await F(this.busData.data.id);this.busData.oldData=$.cloneDeep(a);const t=$.cloneDeep(a);this.busData.data=s(s(s({},this.busData.data),t),t.user),this.choiceProject()},confirmFun(e){this.$refs[e].validate((e=>{if(!e)return!1;this.handleSubmitFn()}))},async handleSubmitFn(){if("new"===this.dialogType){const e=$.cloneDeep(this.busData.data),a=await A(e).catch((e=>{const{data:{data:a}}=e;for(const t in a)if(Object.hasOwnProperty.call(a,t)){const e=a[t];this.$message.error(e)}}));a&&(R(a),this.getList(),this.clearBusData(),this.dialogVisible=!1)}if("edit"===this.dialogType){const e=$.cloneDeep(this.busData.data),a=await k(this.busData.data.id,e);a&&(R(a),this.clearBusData(),this.dialogVisible=!1)}},handleDelete(e){this.$confirm("确定删除?","警告",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{this.list.splice(e.$index,1),this.$message({type:"success",message:"Delete succed!"})})).catch((e=>{console.error(e)}))},clearBusData(){this.busData.data=$.cloneDeep(Q),this.busData.oldData={},this.$nextTick((()=>{this.$refs.ruleForm.clearValidate()}))},async changeStatus(e,a){const t={id:a.id,status:a.status},l=await S(a.id,t);R(l)},handleEditPass(e){this.dialogVisiblePass=!0,this.busData.data.id=e.row.id},cancelPass(e){this.dialogVisiblePass=!1},async confirmPass(e){const a={id:this.busData.data.id,password:e.pass,password_re:e.checkPass},t=await x(this.busData.data.id,a);R(t),this.dialogVisiblePass=!1},selectChangeFn(e){this.busData.data[`${e}_ischange`]=!0},async choiceProject(){const e=[...this.busData.data.project_id],a=[];if(0!==e.length){await Promise.all(e.map((async e=>{const{data:t}=await v(e);return 0!==t.product_id.length&&t.product_id.forEach((e=>{a.push(e)})),e})));const t=Array.from(new Set(a));this.busData.options.product=this.handleProductsFn(t)}},handleProductsFn(e){const a=[];return this.busData.options.productArr.map((t=>{e.includes(t.id)&&a.push(t)})),a},unSelectedAll(){this.busData.data.product_id=[],this.busData.data.product_ischange=!0},selectAll(){const e=[];this.busData.options.product.map((a=>{e.push(a.id)})),this.busData.data.product_id=e,this.busData.data.product_ischange=!0}}},W={class:"app-container"},M=D("全选"),I=D("清空"),N={style:{"text-align":"right"}},J=D("取消"),G=D("确定"),H={class:"w100 control-box flex jc-end"},K={class:"flex flex-end"},X=D("搜索"),Y=D("添加用户"),Z={class:"flex"},ee=D("修改"),ae=D("修改密码"),te=D("删除"),le={class:"w100 flex"};var ie=q(L,[["render",function(e,a,t,l,i,s){const o=d("el-input"),r=d("el-form-item"),V=d("el-option"),P=d("el-select"),j=d("el-button"),v=d("el-form"),C=d("el-dialog"),U=d("ww-change-pass"),E=d("el-table-column"),F=d("el-switch"),A=d("el-table"),k=d("pagination");return f(),n("div",W,[u(" dialog "),c(C,{modelValue:i.dialogVisible,"onUpdate:modelValue":a[17]||(a[17]=e=>i.dialogVisible=e),title:"edit"===i.dialogType?"Edit User":"New User",width:"80%"},{default:p((()=>[c(v,{ref:"ruleForm",model:i.busData.data,rules:i.busData.rules,"label-width":"150px","label-position":"left"},{default:p((()=>[c(r,{label:"邮箱",prop:"email"},{default:p((()=>[c(o,{modelValue:i.busData.data.email,"onUpdate:modelValue":a[0]||(a[0]=e=>i.busData.data.email=e),placeholder:"邮箱",disabled:"edit"===i.dialogType},null,8,["modelValue","disabled"])])),_:1}),c(r,{label:"用户名",prop:"username"},{default:p((()=>[c(o,{modelValue:i.busData.data.username,"onUpdate:modelValue":a[1]||(a[1]=e=>i.busData.data.username=e),placeholder:"用户名必须大于6位"},null,8,["modelValue"])])),_:1}),"new"===i.dialogType?(f(),n(_,{key:0},[c(r,{label:"密码",prop:"password",autocomplete:"off"},{default:p((()=>[c(o,{modelValue:i.busData.data.password,"onUpdate:modelValue":a[2]||(a[2]=e=>i.busData.data.password=e),type:"password",placeholder:""},null,8,["modelValue"])])),_:1}),c(r,{label:"再次输入密码",prop:"password_re",autocomplete:"off"},{default:p((()=>[c(o,{modelValue:i.busData.data.password_re,"onUpdate:modelValue":a[3]||(a[3]=e=>i.busData.data.password_re=e),type:"password",placeholder:""},null,8,["modelValue"])])),_:1})],64)):u("v-if",!0),c(r,{label:"描述",prop:"comment"},{default:p((()=>[c(o,{modelValue:i.busData.data.comment,"onUpdate:modelValue":a[4]||(a[4]=e=>i.busData.data.comment=e),placeholder:"描述"},null,8,["modelValue"])])),_:1}),c(r,{label:"岗位权限",prop:"position_id"},{default:p((()=>[c(P,{modelValue:i.busData.data.position_id,"onUpdate:modelValue":a[5]||(a[5]=e=>i.busData.data.position_id=e),filterable:"",multiple:"",class:"w100",placeholder:"岗位权限",disabled:!e.judgePermissionElementFn("A-AU-USER-FORM-POSITION-C"),onChange:a[6]||(a[6]=e=>s.selectChangeFn("position"))},{default:p((()=>[(f(!0),n(_,null,w(i.busData.options.position,(e=>(f(),g(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),c(r,{label:"角色权限",prop:"role_id"},{default:p((()=>[c(P,{modelValue:i.busData.data.role_id,"onUpdate:modelValue":a[7]||(a[7]=e=>i.busData.data.role_id=e),filterable:"",multiple:"",class:"w100",placeholder:"角色权限",disabled:!e.judgePermissionElementFn("A-AU-USER-FORM-ROLE-C"),onChange:a[8]||(a[8]=e=>s.selectChangeFn("role"))},{default:p((()=>[(f(!0),n(_,null,w(i.busData.options.role,(e=>(f(),g(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),c(r,{label:"所属项目组",prop:"project_id"},{default:p((()=>[c(P,{modelValue:i.busData.data.project_id,"onUpdate:modelValue":a[9]||(a[9]=e=>i.busData.data.project_id=e),filterable:"",multiple:"",class:"w100",placeholder:"所属项目组",disabled:!e.judgePermissionElementFn("A-AU-USER-FORM-PROJECT-C"),onChange:a[10]||(a[10]=e=>(s.selectChangeFn("project"),s.choiceProject()))},{default:p((()=>[(f(!0),n(_,null,w(i.busData.options.project,(e=>(f(),g(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),c(r,{label:"可查看产品",prop:"product_id"},{default:p((()=>[c(P,{modelValue:i.busData.data.product_id,"onUpdate:modelValue":a[13]||(a[13]=e=>i.busData.data.product_id=e),filterable:"",multiple:"",class:"w100",placeholder:"默认全部",disabled:!e.judgePermissionElementFn("A-AU-USER-FORM-PRODUCT-C"),onChange:a[14]||(a[14]=e=>s.selectChangeFn("product"))},{default:p((()=>[c(j,{style:{float:"left","margin-left":"20px","z-index":"1"},type:"primary",plain:"",onClick:a[11]||(a[11]=e=>s.selectAll())},{default:p((()=>[M])),_:1}),c(j,{style:{float:"right","margin-right":"20px","z-index":"1"},type:"danger",plain:"",onClick:a[12]||(a[12]=e=>s.unSelectedAll())},{default:p((()=>[I])),_:1}),(f(!0),n(_,null,w(i.busData.options.product,(e=>(f(),g(V,{key:e.id,label:e.name,value:e.id,style:{clear:"both"}},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1})])),_:1},8,["model","rules"]),m("div",N,[c(j,{type:"danger",onClick:a[15]||(a[15]=e=>i.dialogVisible=!1)},{default:p((()=>[J])),_:1}),c(j,{type:"primary",onClick:a[16]||(a[16]=e=>s.confirmFun("ruleForm"))},{default:p((()=>[G])),_:1})])])),_:1},8,["modelValue","title"]),u(" dialog "),u(" dialog "),c(C,{modelValue:i.dialogVisiblePass,"onUpdate:modelValue":a[18]||(a[18]=e=>i.dialogVisiblePass=e),title:"修改密码",width:"80%"},{default:p((()=>[i.dialogVisiblePass?(f(),g(U,{key:0,is_change:!1,"is-dialog":!0,onWwpassCancel:s.cancelPass,onWwpassConfirm:s.confirmPass},null,8,["onWwpassCancel","onWwpassConfirm"])):u("v-if",!0)])),_:1},8,["modelValue"]),u(" dialog "),m("div",H,[m("div",K,[u(' <el-input placeholder="请输入内容" v-model="control.search" class="input-with-select">\n          <el-button type="primary" slot="append">搜索</el-button>\n        </el-input> '),c(o,{modelValue:i.control.search,"onUpdate:modelValue":a[19]||(a[19]=e=>i.control.search=e),class:"mr-10",placeholder:"请输入用户名"},null,8,["modelValue"]),c(j,{type:"primary",onClick:s.handleSearch},{default:p((()=>[X])),_:1},8,["onClick"]),e.judgePermissionElementFn("A-AU-USER-ADD-V")?(f(),g(j,{key:0,type:"primary",onClick:s.handleCreate},{default:p((()=>[Y])),_:1},8,["onClick"])):u("v-if",!0)])]),c(A,{data:i.list,style:{width:"100%","margin-top":"30px"},border:""},{default:p((()=>[c(E,{align:"center",label:"邮箱"},{default:p((e=>[D(y(e.row.email),1)])),_:1}),c(E,{align:"center",label:"用户名"},{default:p((e=>[D(y(e.row.username),1)])),_:1}),c(E,{align:"center",label:"所属项目组"},{default:p((e=>[D(y(s.getUserProject(e.row.project_id)),1)])),_:1}),c(E,{align:"center",label:"用户权限"},{default:p((e=>[D(y(s.getUserPosition(e.row.position_id)),1)])),_:1}),c(E,{align:"center",label:"可查看产品"},{default:p((e=>[D(y(e.row.product_id),1)])),_:1}),c(E,{align:"center",label:"创建日期"},{default:p((e=>[D(y(e.row.create_date),1)])),_:1}),c(E,{align:"center",label:"最后访问日期"},{default:p((e=>[D(y(e.row.update_date),1)])),_:1}),c(E,{align:"center",label:"用户状态"},{default:p((a=>[e.judgePermissionElementFn("A-AU-USER-STATUS-V")?(f(),g(F,{key:0,modelValue:a.row.status,"onUpdate:modelValue":e=>a.row.status=e,"active-value":1,"inactive-value":2,onChange:e=>s.changeStatus(e,a.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])):u("v-if",!0)])),_:1}),c(E,{align:"center",label:"操作",width:"250"},{default:p((a=>[m("div",Z,[e.judgePermissionElementFn("A-AU-USER-EDIT-V")?(f(),g(j,{key:0,type:"primary",size:"small",onClick:e=>s.handleEdit(a)},{default:p((()=>[ee])),_:2},1032,["onClick"])):u("v-if",!0),e.judgePermissionElementFn("A-AU-USER-PASS-V")?(f(),g(j,{key:1,type:"primary",size:"small",onClick:e=>s.handleEditPass(a)},{default:p((()=>[ae])),_:2},1032,["onClick"])):u("v-if",!0),e.judgePermissionElementFn("A-AU-USER-DEL-V")?(f(),g(j,{key:2,type:"danger",size:"small",onClick:e=>s.handleDelete(a)},{default:p((()=>[te])),_:2},1032,["onClick"])):u("v-if",!0)])])),_:1})])),_:1},8,["data"]),u(" pagination "),m("div",le,[h(c(k,{total:i.pagination.total,"page-sizes":i.pagination.pageSizes,page:i.pagination.listQuery.page,limit:i.pagination.listQuery.limit,onPagination:s.init},null,8,["total","page-sizes","page","limit","onPagination"]),[[b,i.pagination.total]])])])}]]);export{ie as default};
