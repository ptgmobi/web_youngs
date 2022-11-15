var a=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,s=(a,s)=>{for(var o in s||(s={}))t.call(s,o)&&i(a,o,s[o]);if(e)for(var o of e(s))l.call(s,o)&&i(a,o,s[o]);return a};import{_ as o,G as d,q as n,o as r,c as u,z as p,e as c,s as m,x as g,A as h,U as b,V as f,X as _,N as D,O as w,f as y,y as V}from"./main-4108d4c8.js";import{m as j}from"./vuex.esm-bundler-2b3af683.js";import{w as P,g as U,a as C,b as v}from"./product-d473ef67.js";import{P as E}from"./index-31949e81.js";import{_ as A,g as F,a as k,s as S,b as x,c as O,d as T}from"./WwChangePass-1708bb88.js";import{g as R}from"./role-747b4fd8.js";import{g as z}from"./station-28de5068.js";import{m as $}from"./message-c3fe1e43.js";import{_ as q}from"./lodash-cc1290e8.js";import{m as Q}from"./self-6b18f1a9.js";const B={email:"",username:"",password:"",password_re:"",comment:"",position_id:[],position_ischange:!1,role_id:[],role_ischange:!1,project_id:[],project_ischange:!1,product_id:[],product_ischange:!1,status:1},L={components:{Pagination:E,WwChangePass:A},directives:{waves:P},filters:{handlePositions(a){}},mixins:[Q],data(){return{dialogVisiblePass:!1,dialogVisible:!1,dialogType:"new",busData:{options:{position:[],role:[],project:[],product:[],productArr:[]},oldData:{},data:q.cloneDeep(B),rules:{email:[{required:!0,message:"必填",trigger:["change","blur"]},{validator:(a,e,t)=>{""===e?t(new Error("请输入邮箱")):_(e)?t():t(new Error("请输入正确的邮箱格式"))}}],username:[{required:!0,message:"必填",trigger:["change","blur"]},{min:6,max:50,message:"长度在 6 到 50 个字符",trigger:"blur"}],password:[{required:!0,message:"必填",trigger:["change","blur"]},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"},{validator:(a,e,t)=>{""===e?t(new Error("请输入密码")):(""!==this.busData.data.password_re&&this.$refs.ruleForm.validateField("password_re"),t())}}],password_re:[{required:!0,message:"必填",trigger:["change","blur"]},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"},{validator:(a,e,t)=>{""===e?t(new Error("请再次输入密码")):e!==this.busData.data.password?t(new Error("两次输入密码不一致!")):t()}}],comment:[{required:!1,message:"必填",trigger:["change","blur"]}],role_id:[{required:!1,message:"必填",trigger:["change","blur"]}],position_id:[{required:!0,message:"必填",trigger:["change","blur"]}]}},control:{search:""},list:[],pagination:{pageSizes:["10","20","40","100"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}},computed:s({},j(["rolesMap","element"])),watch:{"busData.data.project":{handler(a,e){},immediate:!1}},created(){this.getConfig(),this.init();d().element},methods:{handleProjectFn(a){return this.busData.options.project.filter((e=>a.includes(e.id)))},changeUserStatus(a,e){},async getConfig(){const{data:a}=await U();this.busData.options.project=a;const{data:e}=await C({name:"",page:1,limit:999,project_id:"",order:"desc"});this.busData.options.productArr=e;const{data:t}=await z();this.busData.options.position=t;const{data:l}=await R();this.busData.options.role=l},init(){this.getList()},getUserProject(a){return a?this.busData.options.project.filter((e=>a.includes(Number(e.id)))).map((a=>a.name)).join(","):a},getUserProduct(a){return a?this.busData.options.productArr.filter((e=>a.includes(Number(e.id)))).map((a=>a.name)).join(","):a},getUserPosition(a){return a?this.busData.options.position.filter((e=>a.includes(e.id))).map((a=>a.name)).join(","):a},async getList(){const a={username:this.control.search,page:this.pagination.listQuery.page,limit:this.pagination.listQuery.limit},{data:e}=await F(a);this.list=e.data,this.pagination.total=e.paging.count},handleSearch(){this.pagination.listQuery.page=1,this.getList()},handleCreate(){this.dialogType="new",this.dialogVisible=!0,this.clearBusData()},async handleEdit(a){this.dialogType="edit",this.dialogVisible=!0,this.clearBusData(),this.busData.data.id=a.row.id;const{data:e}=await k(this.busData.data.id);this.busData.oldData=q.cloneDeep(e);const t=q.cloneDeep(e);this.busData.data=s(s(s({},this.busData.data),t),t.user),this.choiceProject()},confirmFun(a){this.$refs[a].validate((a=>{if(!a)return!1;this.handleSubmitFn()}))},async handleSubmitFn(){if("new"===this.dialogType){const a=q.cloneDeep(this.busData.data),e=await S(a).catch((a=>{const{data:{data:e}}=a;for(const t in e)if(Object.hasOwnProperty.call(e,t)){const a=e[t];this.$message.error(a)}}));e&&($(e),this.getList(),this.clearBusData(),this.dialogVisible=!1)}if("edit"===this.dialogType){const a=q.cloneDeep(this.busData.data),e=await x(this.busData.data.id,a);e&&($(e),this.clearBusData(),this.dialogVisible=!1)}},handleDelete(a){this.$confirm("确定删除?","警告",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{this.list.splice(a.$index,1),this.$message({type:"success",message:"Delete succed!"})})).catch((a=>{console.error(a)}))},clearBusData(){this.busData.data=q.cloneDeep(B),this.busData.oldData={},this.$nextTick((()=>{this.$refs.ruleForm.clearValidate()}))},async changeStatus(a,e){const t={id:e.id,status:e.status},l=await O(e.id,t);$(l)},handleEditPass(a){this.dialogVisiblePass=!0,this.busData.data.id=a.row.id},cancelPass(a){this.dialogVisiblePass=!1},async confirmPass(a){const e={id:this.busData.data.id,password:a.pass,password_re:a.checkPass},t=await T(this.busData.data.id,e);$(t),this.dialogVisiblePass=!1},selectChangeFn(a){this.busData.data[`${a}_ischange`]=!0},async choiceProject(){this.busData.data;let a=[];this.busData.data.project_id&&(a=[...this.busData.data.project_id]);const e=[];if(0!==a.length){await Promise.all(a.map((async a=>{const{data:t}=await v(a);return 0!==t.product_id.length&&t.product_id.forEach((a=>{e.push(a)})),a})));const t=Array.from(new Set(e));this.busData.options.product=this.handleProductsFn(t)}},handleProductsFn(a){const e=[];return this.busData.options.productArr.map((t=>{a.includes(t.id)&&e.push(t)})),e},unSelectedAll(){this.busData.data.product_id=[],this.busData.data.product_ischange=!0},selectAll(){const a=[];this.busData.options.product.map((e=>{a.push(e.id)})),this.busData.data.product_id=a,this.busData.data.product_ischange=!0}}},W={class:"app-container"},M=y(" 全选 "),N=y(" 清空 "),I={style:{"text-align":"right"}},G=y(" 取消 "),J=y(" 确定 "),X={class:"w100 control-box flex jc-end"},H={class:"flex flex-end"},K=y(" 搜索 "),Y=y(" 添加用户 "),Z={class:"flex"},aa=y(" 修改 "),ea=y(" 修改密码 "),ta=y(" 删除 "),la={class:"w100 flex"};var ia=o(L,[["render",function(a,e,t,l,i,s){const o=n("el-input"),d=n("el-form-item"),_=n("el-option"),j=n("el-select"),P=n("el-button"),U=n("el-form"),C=n("el-dialog"),v=n("ww-change-pass"),E=n("el-table-column"),A=n("el-switch"),F=n("el-table"),k=n("pagination");return r(),u("div",W,[p(" dialog "),c(C,{modelValue:i.dialogVisible,"onUpdate:modelValue":e[17]||(e[17]=a=>i.dialogVisible=a),title:"edit"===i.dialogType?"Edit User":"New User",width:"80%"},{default:m((()=>[c(U,{ref:"ruleForm",model:i.busData.data,rules:i.busData.rules,"label-width":"150px","label-position":"left"},{default:m((()=>[c(d,{label:"邮箱",prop:"email"},{default:m((()=>[c(o,{modelValue:i.busData.data.email,"onUpdate:modelValue":e[0]||(e[0]=a=>i.busData.data.email=a),placeholder:"邮箱",disabled:"edit"===i.dialogType},null,8,["modelValue","disabled"])])),_:1}),c(d,{label:"用户名",prop:"username"},{default:m((()=>[c(o,{modelValue:i.busData.data.username,"onUpdate:modelValue":e[1]||(e[1]=a=>i.busData.data.username=a),placeholder:"用户名必须大于6位"},null,8,["modelValue"])])),_:1}),"new"===i.dialogType?(r(),u(D,{key:0},[c(d,{label:"密码",prop:"password",autocomplete:"off"},{default:m((()=>[c(o,{modelValue:i.busData.data.password,"onUpdate:modelValue":e[2]||(e[2]=a=>i.busData.data.password=a),type:"password",placeholder:""},null,8,["modelValue"])])),_:1}),c(d,{label:"再次输入密码",prop:"password_re",autocomplete:"off"},{default:m((()=>[c(o,{modelValue:i.busData.data.password_re,"onUpdate:modelValue":e[3]||(e[3]=a=>i.busData.data.password_re=a),type:"password",placeholder:""},null,8,["modelValue"])])),_:1})],64)):p("v-if",!0),c(d,{label:"描述",prop:"comment"},{default:m((()=>[c(o,{modelValue:i.busData.data.comment,"onUpdate:modelValue":e[4]||(e[4]=a=>i.busData.data.comment=a),placeholder:"描述"},null,8,["modelValue"])])),_:1}),c(d,{label:"岗位权限",prop:"position_id"},{default:m((()=>[c(j,{modelValue:i.busData.data.position_id,"onUpdate:modelValue":e[5]||(e[5]=a=>i.busData.data.position_id=a),filterable:"",multiple:"",class:"w100",placeholder:"岗位权限",disabled:!a.judgePermissionElementFn("A-AU-USER-FORM-POSITION-C"),onChange:e[6]||(e[6]=a=>s.selectChangeFn("position"))},{default:m((()=>[(r(!0),u(D,null,w(i.busData.options.position,(a=>(r(),h(_,{key:a.id,label:a.name,value:a.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),c(d,{label:"角色权限",prop:"role_id"},{default:m((()=>[c(j,{modelValue:i.busData.data.role_id,"onUpdate:modelValue":e[7]||(e[7]=a=>i.busData.data.role_id=a),filterable:"",multiple:"",class:"w100",placeholder:"角色权限",disabled:!a.judgePermissionElementFn("A-AU-USER-FORM-ROLE-C"),onChange:e[8]||(e[8]=a=>s.selectChangeFn("role"))},{default:m((()=>[(r(!0),u(D,null,w(i.busData.options.role,(a=>(r(),h(_,{key:a.id,label:a.name,value:a.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),c(d,{label:"所属项目组",prop:"project_id"},{default:m((()=>[c(j,{modelValue:i.busData.data.project_id,"onUpdate:modelValue":e[9]||(e[9]=a=>i.busData.data.project_id=a),filterable:"",multiple:"",class:"w100",placeholder:"所属项目组",disabled:!a.judgePermissionElementFn("A-AU-USER-FORM-PROJECT-C"),onChange:e[10]||(e[10]=a=>(s.selectChangeFn("project"),s.choiceProject()))},{default:m((()=>[(r(!0),u(D,null,w(i.busData.options.project,(a=>(r(),h(_,{key:a.id,label:a.name,value:a.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1}),c(d,{label:"可查看产品",prop:"product_id"},{default:m((()=>[c(j,{modelValue:i.busData.data.product_id,"onUpdate:modelValue":e[13]||(e[13]=a=>i.busData.data.product_id=a),filterable:"",multiple:"",class:"w100",placeholder:"默认全部",disabled:!a.judgePermissionElementFn("A-AU-USER-FORM-PRODUCT-C"),onChange:e[14]||(e[14]=a=>s.selectChangeFn("product"))},{default:m((()=>[c(P,{style:{float:"left","margin-left":"20px","z-index":"1"},type:"primary",plain:"",onClick:e[11]||(e[11]=a=>s.selectAll())},{default:m((()=>[M])),_:1}),c(P,{style:{float:"right","margin-right":"20px","z-index":"1"},type:"danger",plain:"",onClick:e[12]||(e[12]=a=>s.unSelectedAll())},{default:m((()=>[N])),_:1}),(r(!0),u(D,null,w(i.busData.options.product,(a=>(r(),h(_,{key:a.id,label:a.name,value:a.id,style:{clear:"both"}},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1})])),_:1},8,["model","rules"]),g("div",I,[c(P,{type:"danger",onClick:e[15]||(e[15]=a=>i.dialogVisible=!1)},{default:m((()=>[G])),_:1}),c(P,{type:"primary",onClick:e[16]||(e[16]=a=>s.confirmFun("ruleForm"))},{default:m((()=>[J])),_:1})])])),_:1},8,["modelValue","title"]),p(" dialog "),p(" dialog "),c(C,{modelValue:i.dialogVisiblePass,"onUpdate:modelValue":e[18]||(e[18]=a=>i.dialogVisiblePass=a),title:"修改密码",width:"80%"},{default:m((()=>[i.dialogVisiblePass?(r(),h(v,{key:0,is_change:!1,"is-dialog":!0,onWwpassCancel:s.cancelPass,onWwpassConfirm:s.confirmPass},null,8,["onWwpassCancel","onWwpassConfirm"])):p("v-if",!0)])),_:1},8,["modelValue"]),p(" dialog "),g("div",X,[g("div",H,[p(' <el-input placeholder="请输入内容" v-model="control.search" class="input-with-select">\n          <el-button type="primary" slot="append">搜索</el-button>\n        </el-input> '),c(o,{modelValue:i.control.search,"onUpdate:modelValue":e[19]||(e[19]=a=>i.control.search=a),class:"mr-10",placeholder:"请输入用户名"},null,8,["modelValue"]),c(P,{type:"primary",onClick:s.handleSearch},{default:m((()=>[K])),_:1},8,["onClick"]),a.judgePermissionElementFn("A-AU-USER-ADD-V")?(r(),h(P,{key:0,type:"primary",onClick:s.handleCreate},{default:m((()=>[Y])),_:1},8,["onClick"])):p("v-if",!0)])]),c(F,{data:i.list,style:{width:"100%","margin-top":"30px"},border:""},{default:m((()=>[c(E,{align:"center",label:"邮箱"},{default:m((a=>[y(V(a.row.email),1)])),_:1}),c(E,{align:"center",label:"用户名"},{default:m((a=>[y(V(a.row.username),1)])),_:1}),c(E,{align:"center",label:"所属项目组"},{default:m((a=>[y(V(s.getUserProject(a.row.project_id)),1)])),_:1}),c(E,{align:"center",label:"用户权限"},{default:m((a=>[y(V(s.getUserPosition(a.row.position_id)),1)])),_:1}),c(E,{align:"center",label:"可查看产品"},{default:m((a=>[y(V(a.row.product_id),1)])),_:1}),c(E,{align:"center",label:"创建日期"},{default:m((a=>[y(V(a.row.create_date),1)])),_:1}),c(E,{align:"center",label:"最后访问日期"},{default:m((a=>[y(V(a.row.update_date),1)])),_:1}),c(E,{align:"center",label:"用户状态"},{default:m((e=>[a.judgePermissionElementFn("A-AU-USER-STATUS-V")?(r(),h(A,{key:0,modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,"active-value":1,"inactive-value":2,onChange:a=>s.changeStatus(a,e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])):p("v-if",!0)])),_:1}),c(E,{align:"center",label:"操作",width:"250"},{default:m((e=>[g("div",Z,[a.judgePermissionElementFn("A-AU-USER-EDIT-V")?(r(),h(P,{key:0,type:"primary",size:"small",onClick:a=>s.handleEdit(e)},{default:m((()=>[aa])),_:2},1032,["onClick"])):p("v-if",!0),a.judgePermissionElementFn("A-AU-USER-PASS-V")?(r(),h(P,{key:1,type:"primary",size:"small",onClick:a=>s.handleEditPass(e)},{default:m((()=>[ea])),_:2},1032,["onClick"])):p("v-if",!0),a.judgePermissionElementFn("A-AU-USER-DEL-V")?(r(),h(P,{key:2,type:"danger",size:"small",onClick:a=>s.handleDelete(e)},{default:m((()=>[ta])),_:2},1032,["onClick"])):p("v-if",!0)])])),_:1})])),_:1},8,["data"]),p(" pagination "),g("div",la,[b(c(k,{page:i.pagination.listQuery.page,"onUpdate:page":e[20]||(e[20]=a=>i.pagination.listQuery.page=a),limit:i.pagination.listQuery.limit,"onUpdate:limit":e[21]||(e[21]=a=>i.pagination.listQuery.limit=a),total:i.pagination.total,"page-sizes":i.pagination.pageSizes,onPagination:s.init},null,8,["page","limit","total","page-sizes","onPagination"]),[[f,i.pagination.total]])])])}]]);export{ia as default};