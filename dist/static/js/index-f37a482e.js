var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,s=(e,s)=>{for(var o in s||(s={}))a.call(s,o)&&l(e,o,s[o]);if(t)for(var o of t(s))i.call(s,o)&&l(e,o,s[o]);return e};import{_ as o,m as n,s as d,n as r,z as p,c,p as u,O as m,P as g,A as h,v as b,b as f,x as y,V as D,W as w}from"./index-1cdb801e.js";import{m as v}from"./vuex.esm-bundler-dd92e564.js";import{w as j,a as _,g as C,b as V,s as k,c as P,d as T,e as x,f as F}from"./product-cff92d98.js";import{P as S}from"./index-37846802.js";import{m as E}from"./message-c3f52f6e.js";import{m as O}from"./self-5bca15c5.js";import{_ as A}from"./lodash-ef3c7713.js";const U={id:"",name:"",product:[]},I={components:{Pagination:S},directives:{waves:j},mixins:[O],data:()=>({date:"",passwordType:"password",dialogVisible:!1,dialogType:"new",busData:{setting:{filterMethod:(e,t)=>t.label.indexOf(e)>-1},options:{product:[]},data:{id:"",name:"",product:[]},rules:{}},control:{search:""},list:[],pagination:{pageSizes:["10","20","40"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}),computed:s({},v(["element"])),created(){this.getConfig(),this.init()},methods:{init(){this.getList()},async getConfig(){const{data:e}=await _({name:"",page:1,limit:999,project_id:"",order:"desc"});this.busData.options.product=e},async getList(){const e=await C(),{data:t}=e;this.list=t},handleSearch(){},handleCreate(){this.dialogType="new",this.dialogVisible=!0;const e=new Date;this.date=e.getTime()},async handleEdit(e){this.dialogType="edit",this.busData.data.id=e.row.id;const{data:t}=await V(this.busData.data.id);this.busData.data.id=t.project.id,this.busData.data.name=t.project.name,this.busData.data.product=t.product_id,this.dialogVisible=!0;const a=new Date;this.date=a.getTime()},handleDelete(e){},roleChangeChoice(e,t){this.busData.choiceData[e]=t},clearBusData(){this.busData.data=A.cloneDeep(U)},async submitFn(){if("new"===this.dialogType){const e={name:this.busData.data.name,product_id:this.busData.data.product},t=await k(e);t&&E(t),this.getList()}if("edit"===this.dialogType){const e={id:this.busData.data.id,name:this.busData.data.name,product_id:this.busData.data.product},t=await P(this.busData.data.id,e);t&&E(t)}this.clearBusData(),this.dialogVisible=!1}}},L={class:"app-container"},z={style:{"text-align":"right"}},Q=f(" 取消 "),N=f(" 确定 "),q={class:"w100 control-box flex jc-end"},M={class:"flex flex-end"},R=f(" 搜索 "),B=f(" 创建项目组 "),J={class:"flex"},$=f(" 编辑 "),K=f(" 删除 "),Y={class:"w100 flex"};var W=o(I,[["render",function(e,t,a,i,l,s){const o=n("el-input"),v=n("el-form-item"),j=n("el-option"),_=n("el-select"),C=n("el-form"),V=n("el-button"),k=n("el-dialog"),P=n("el-table-column"),T=n("el-table"),x=n("pagination");return d(),r("div",L,[p(" dialog "),c(k,{modelValue:l.dialogVisible,"onUpdate:modelValue":t[3]||(t[3]=e=>l.dialogVisible=e),title:"edit"===l.dialogType?"修改项目组":"创建项目组",width:"80%"},{default:u((()=>[c(C,{ref:"ruleForm",model:l.busData.data,rules:l.busData.rules,"label-width":"150px","label-position":"left"},{default:u((()=>[c(v,{label:"项目名称",prop:"name"},{default:u((()=>[c(o,{modelValue:l.busData.data.name,"onUpdate:modelValue":t[0]||(t[0]=e=>l.busData.data.name=e),placeholder:"",disabled:"edit"===l.dialogType},null,8,["modelValue","disabled"])])),_:1}),c(v,{label:"产品",prop:"project"},{default:u((()=>[c(_,{modelValue:l.busData.data.product,"onUpdate:modelValue":t[1]||(t[1]=e=>l.busData.data.product=e),filterable:"",multiple:"",class:"w100",placeholder:"产品"},{default:u((()=>[(d(!0),r(m,null,g(l.busData.options.product,(e=>(d(),h(j,{key:e.id,label:e.name,value:e.id,disabled:"2"===e.status},null,8,["label","value","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),b("div",z,[c(V,{type:"danger",onClick:t[2]||(t[2]=e=>l.dialogVisible=!1)},{default:u((()=>[Q])),_:1}),c(V,{type:"primary",onClick:s.submitFn},{default:u((()=>[N])),_:1},8,["onClick"])])])),_:1},8,["modelValue","title"]),p(" dialog "),b("div",q,[b("div",M,[p(' <el-input placeholder="请输入内容" v-model="control.search" class="input-with-select">\n          <el-button type="primary" slot="append">搜索</el-button>\n        </el-input> '),c(o,{modelValue:l.control.search,"onUpdate:modelValue":t[4]||(t[4]=e=>l.control.search=e),class:"mr-10",placeholder:"请输入内容"},null,8,["modelValue"]),c(V,{type:"primary",onClick:s.handleSearch},{default:u((()=>[R])),_:1},8,["onClick"]),e.judgePermissionElementFn("A-AP-PROJECT-ADD-V")?(d(),h(V,{key:0,type:"primary",onClick:s.handleCreate},{default:u((()=>[B])),_:1},8,["onClick"])):p("v-if",!0)])]),c(T,{data:l.list,style:{width:"100%","margin-top":"30px"},border:""},{default:u((()=>[c(P,{align:"center",label:"项目组ID"},{default:u((e=>[f(y(e.row.id),1)])),_:1}),c(P,{align:"center",label:"项目名称"},{default:u((e=>[f(y(e.row.name),1)])),_:1}),c(P,{align:"center",label:"产品数"},{default:u((e=>[f(y(e.row.product_count),1)])),_:1}),c(P,{align:"center",label:"创建时间"},{default:u((e=>[f(y(e.row.create_time),1)])),_:1}),c(P,{align:"center",label:"更新时间"},{default:u((e=>[f(y(e.row.id),1)])),_:1}),c(P,{align:"center",label:"操作"},{default:u((t=>[b("div",J,[e.judgePermissionElementFn("A-AP-PROJECT-EDIT-V")?(d(),h(V,{key:0,type:"primary",size:"small",onClick:e=>s.handleEdit(t)},{default:u((()=>[$])),_:2},1032,["onClick"])):p("v-if",!0),e.judgePermissionElementFn("A-AP-PROJECT-DEL-V")?(d(),h(V,{key:1,type:"danger",size:"small",onClick:e=>s.handleDelete(t)},{default:u((()=>[K])),_:2},1032,["onClick"])):p("v-if",!0)])])),_:1})])),_:1},8,["data"]),p(" pagination "),b("div",Y,[D(c(x,{page:l.pagination.listQuery.page,"onUpdate:page":t[5]||(t[5]=e=>l.pagination.listQuery.page=e),limit:l.pagination.listQuery.limit,"onUpdate:limit":t[6]||(t[6]=e=>l.pagination.listQuery.limit=e),total:l.pagination.total,"page-sizes":l.pagination.pageSizes,onPagination:s.init},null,8,["page","limit","total","page-sizes","onPagination"]),[[w,l.pagination.total]])])])}]]);const G={id:"",name:"",project:"",appid:"",projectId:"",appkey:"",status:"1"},H={components:{Pagination:S},directives:{waves:j},mixins:[O],data:()=>({date:"",statusMessage:"产品状态关闭后,产品数据将不在报表中显示",tableOrder:"desc",passwordType:"password",dialogVisible:!1,dialogType:"new",productStatus:"",busData:{setting:{filterMethod:(e,t)=>t.label.indexOf(e)>-1},options:{project:[],status:[{id:"1",name:"启动"},{id:"2",name:"禁止"}]},data:{id:"",name:"",project:"",appid:"",projectId:"",appkey:"",status:"1"},projectName:"",rules:{name:[{required:!0,message:"必填",trigger:["change","blur"]},{min:1,max:50,message:"字符长度为1-50",trigger:["change","blur"]}],project:[{required:!0,message:"必填",trigger:["change","blur"]}],status:[{required:!0,message:"必填",trigger:["change","blur"]}],appid:[{required:!1,message:"必填",trigger:["change","blur"]}],projectId:[{required:!1,message:"必填",trigger:["change","blur"]}],appkey:[{required:!1,message:"非必填",trigger:["change","blur"]}]}},control:{search:""},filters:{projectFilter:[],currentProjectFilter:""},list:[],pagination:{pageSizes:["10"],total:1,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}),created(){this.getConfig(),this.init()},methods:{init(){this.getList()},async getConfig(){const{data:e}=await C();this.busData.options.project=e,null==e||e.map((e=>{this.filters.projectFilter.push({text:e.name,value:e.id})}))},async getList(){const e={name:this.control.search,page:this.pagination.listQuery.page,limit:this.pagination.listQuery.limit,project_id:this.filters.currentProjectFilter,order:this.tableOrder},{data:t}=(await _(e),await _(e));this.list=t},handleSearch(){this.getList()},handleCreate(){this.dialogType="new",this.clearBusData(),this.dialogVisible=!0;const e=new Date;this.date=e.getTime()},async handleEdit(e){this.dialogType="edit",this.busData.data.id=e.row.id,this.busData.data.name=e.row.name,this.busData.data.appid=e.row.app_id,this.busData.data.project=e.row.project_id,this.busData.data.projectId=e.row.ss_project_id,this.busData.data.appkey=e.row.ry_appkey,this.dialogVisible=!0;const t=new Date;this.date=t.getTime()},handleDelete(e){},roleChangeChoice(e,t){this.busData.choiceData[e]=t},clearBusData(){this.busData.data=A.cloneDeep(G)},async changeStatus(e,t){const a={id:t.id,status:t.status},i=await T(t.id,a);E(i)},async submitFn(){if("new"===this.dialogType){const e={name:this.busData.data.name,project_id:this.busData.data.project,app_id:this.busData.data.appid,ss_project_id:this.busData.data.projectId,ry_appkey:this.busData.data.appkey,status:Number(this.busData.data.status)},t=await x(e);t&&E(t),this.getList()}if("edit"===this.dialogType){const e={id:this.busData.data.id,name:this.busData.data.name,project_id:this.busData.data.project,app_id:this.busData.data.appid,ss_project_id:this.busData.data.projectId,ry_appkey:this.busData.data.appkey,status:Number(this.busData.data.status)},t=await F(this.busData.data.id,e);t&&E(t),this.getList()}this.clearBusData(),this.dialogVisible=!1,this.$refs.ruleForm.resetFields()},showCurrentProject(e){var t,a;return null==(a=(null==(t=this.busData.options.project)?void 0:t.filter((t=>t.id===e)))[0])?void 0:a.name},cancelFn(){this.dialogVisible=!1,this.$refs.ruleForm.resetFields()},filterChange(e){const t=Object.values(e)[0];this.filters.currentProjectFilter=t.length===this.filters.projectFilter.length?"":t,this.getList()},switchStatus(e,t){this.statusMessage=1===e?"产品状态开启后，产品数据开始在平台上展示":"产品状态关闭后,产品数据将不在报表中显示"},cancelStatus(e){this.getList()},async confirmStatus(e){await T(e.id,{id:e.id,status:e.status}),this.getList()},sortChange(e,t,a){"ascending"===e.order?this.tableOrder="asc":"descending"===e.order&&(this.tableOrder="desc"),this.getList()}}},X={class:"app-container"},Z={style:{"text-align":"right"}},ee=f(" 取消 "),te=f(" 确认 "),ae={class:"w100 control-box flex jc-end"},ie={class:"flex flex-end"},le=f(" 搜索 "),se=f(" 创建产品 "),oe={class:"w100 flex"};const ne={components:{Project:W,Product:o(H,[["render",function(e,t,a,i,l,s){const o=n("el-input"),v=n("el-form-item"),j=n("el-option"),_=n("el-select"),C=n("el-form"),V=n("el-button"),k=n("el-dialog"),P=n("el-table-column"),T=n("el-switch"),x=n("el-table"),F=n("pagination");return d(),r("div",X,[p(" dialog "),c(k,{modelValue:l.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=e=>l.dialogVisible=e),title:"edit"===l.dialogType?"编辑产品":"创建产品",width:"80%"},{default:u((()=>[c(C,{ref:"ruleForm",model:l.busData.data,rules:l.busData.rules,"label-width":"150px","label-position":"left"},{default:u((()=>[c(v,{label:"产品名称",prop:"name"},{default:u((()=>[c(o,{modelValue:l.busData.data.name,"onUpdate:modelValue":t[0]||(t[0]=e=>l.busData.data.name=e),placeholder:"请输入产品名称",disabled:"edit"===l.dialogType},null,8,["modelValue","disabled"])])),_:1}),c(v,{label:"项目组",prop:"project"},{default:u((()=>[c(_,{modelValue:l.busData.data.project,"onUpdate:modelValue":t[1]||(t[1]=e=>l.busData.data.project=e),class:"w100",placeholder:"请选择所属项目组"},{default:u((()=>[(d(!0),r(m,null,g(l.busData.options.project,(e=>(d(),h(j,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),p(' <el-form-item label="APP_ID" prop="appid">\n          <el-input v-model="busData.data.appid" placeholder="请输入app_id" />\n        </el-form-item>\n        <el-form-item label="数数项目ID" prop="projectId">\n          <el-input v-model="busData.data.projectId" placeholder="请输入数数项目ID" :disabled="dialogType===\'edit\'" />\n        </el-form-item>\n        <el-form-item label="热云APPKEY" prop="appkey">\n          <el-input v-model="busData.data.appkey" placeholder="请输入热云APPKEY" :disabled="dialogType===\'edit\'" />\n        </el-form-item>\n        <el-form-item label="状态" prop="status">\n          <el-select v-model="busData.data.status" class="w100">\n            <el-option\n              v-for="item in busData.options.status"\n              :key="item.id"\n              :label="item.name"\n              :value="item.id"\n            />\n          </el-select>\n        </el-form-item>\n        <el-form-item label="产品配置" prop="conf">\n          <el-transfer\n            filterable\n            :filter-method="busData.setting.filterMethod"\n            filter-placeholder="请输入搜索"\n            v-model="busData.data.conf"\n            :data="busData.data.data"\n            :titles="[\'Source\', \'Target\']"\n          >\n          </el-transfer>\n        </el-form-item> ')])),_:1},8,["model","rules"]),b("div",Z,[c(V,{type:"danger",onClick:s.cancelFn},{default:u((()=>[ee])),_:1},8,["onClick"]),c(V,{type:"primary",onClick:s.submitFn},{default:u((()=>[te])),_:1},8,["onClick"])])])),_:1},8,["modelValue","title"]),p(" dialog "),b("div",ae,[b("div",ie,[p(' <el-input placeholder="请输入内容" v-model="control.search" class="input-with-select">\n          <el-button type="primary" slot="append">搜索</el-button>\n        </el-input> '),c(o,{modelValue:l.control.search,"onUpdate:modelValue":t[3]||(t[3]=e=>l.control.search=e),class:"sw-200 mr-10",placeholder:"请输入产品名称或APPID"},null,8,["modelValue"]),c(V,{type:"primary",onClick:s.handleSearch},{default:u((()=>[le])),_:1},8,["onClick"]),e.judgePermissionElementFn("A-AP-PRODUCT-ADD-V")?(d(),h(V,{key:0,type:"primary",onClick:s.handleCreate},{default:u((()=>[se])),_:1},8,["onClick"])):p("v-if",!0)])]),c(x,{data:l.list,style:{width:"100%","margin-top":"30px"},border:"",onFilterChange:s.filterChange,onSortChange:s.sortChange},{default:u((()=>[c(P,{align:"center",label:"ID",prop:"id",sortable:"custom"}),c(P,{align:"center",label:"项目组",filters:l.filters.projectFilter},{default:u((e=>[f(y(s.showCurrentProject(e.row.project_id)),1)])),_:1},8,["filters"]),c(P,{align:"center",label:"产品名称"},{default:u((e=>[f(y(e.row.name),1)])),_:1}),c(P,{align:"center",label:"创建时间"},{default:u((e=>[f(y(e.row.create_time),1)])),_:1}),c(P,{align:"center",label:"更新时间"},{default:u((e=>[f(y(e.row.update_time),1)])),_:1}),c(P,{align:"center",label:"产品状态"},{default:u((e=>[p(' <el-popconfirm\n            :title="statusMessage"\n            @onConfirm="confirmStatus(scope.row)"\n            @onCancel="cancelStatus(scope.row)"\n          > '),c(T,{slot:"reference",modelValue:e.row.status,"onUpdate:modelValue":t=>e.row.status=t,"active-value":1,"inactive-value":2,onChange:t=>s.changeStatus(t,e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"]),p(" </el-popconfirm> "),p(' <el-popover\n            v-model="productPopVisible"\n            placement="top"\n            width="200"\n          >\n            <p>确定删除吗？</p>\n            <div style="text-align: right; margin: 0">\n              <el-button type="text" @click="cancelStatus(scope.row)">取消</el-button>\n              <el-button type="text" @click="confirmStatus(scope.row)">确定</el-button>\n            </div>\n            <el-switch\n              slot="reference"\n              v-model="scope.row.status"\n              active-value="1"\n              inactive-value="2"\n              @change="switchStatus($event, scope.row)"\n            />\n          </el-popover> ')])),_:1}),p(' <el-table-column v-if="judgePermissionElementFn(\'A-AP-PRODUCT-EDIT-V\')" align="center" label="操作">\n        <template #default="scope">\n          <div class="flex">\n            <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>\n            <el-button v-if="judgePermissionElementFn(\'A-AP-PRODUCT-DEL-V\')" type="danger" size="small" @click="handleDelete(scope)">删除</el-button>\n          </div>\n        </template>\n      </el-table-column> ')])),_:1},8,["data","onFilterChange","onSortChange"]),p(" pagination "),b("div",oe,[D(c(F,{page:l.pagination.listQuery.page,"onUpdate:page":t[4]||(t[4]=e=>l.pagination.listQuery.page=e),limit:l.pagination.listQuery.limit,"onUpdate:limit":t[5]||(t[5]=e=>l.pagination.listQuery.limit=e),total:l.pagination.total,"page-sizes":l.pagination.pageSizes,onPagination:s.init},null,8,["page","limit","total","page-sizes","onPagination"]),[[w,l.pagination.total]])])])}]])},data:()=>({activeName:"product"}),computed:s({},v(["element"])),methods:{handleClick(e,t){this.activeName=e.props.name}}},de={class:"app-container"};var re=o(ne,[["render",function(e,t,a,i,l,s){const o=n("product"),m=n("el-tab-pane"),g=n("project"),b=n("el-tabs");return d(),r("div",de,[c(b,{modelValue:l.activeName,"onUpdate:modelValue":t[0]||(t[0]=e=>l.activeName=e),type:"card",onTabClick:s.handleClick},{default:u((()=>[c(m,{name:"product",label:"产品信息"},{default:u((()=>["product"===l.activeName?(d(),h(o,{key:0})):p("v-if",!0)])),_:1}),c(m,{name:"project",label:"项目组"},{default:u((()=>["project"===l.activeName?(d(),h(g,{key:0})):p("v-if",!0)])),_:1})])),_:1},8,["modelValue","onTabClick"])])}]]);export{re as default};
