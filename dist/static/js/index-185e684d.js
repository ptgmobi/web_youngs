var K=Object.defineProperty;var T=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var S=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,k=(t,e)=>{for(var n in e||(e={}))Y.call(e,n)&&S(t,n,e[n]);if(T)for(var n of T(e))G.call(e,n)&&S(t,n,e[n]);return t};import{af as U,r as u,o as m,i as v,g as r,v as i,f as l,F as I,j as L,s as h,c as f,x as d,t as b,P as N,Q as O}from"./vendor-a4cb0bb5.js";import{w as Q,a as P,g as z,b as H,s as W,c as X,d as M,e as Z,f as $}from"./product-2fb7df76.js";import{P as q}from"./index-51c542e6.js";import{m as w}from"./message-67f5983c.js";import{m as R}from"./self-26d919d8.js";import{_ as J}from"./lodash-96f63e6f.js";import{_ as x}from"./index-50dc7f37.js";const ee={id:"",name:"",product:[]},te={mixins:[R],components:{Pagination:q},directives:{waves:Q},data(){return{date:"",passwordType:"password",dialogVisible:!1,dialogType:"new",busData:{setting:{filterMethod(t,e){return console.log(e),e.label.indexOf(t)>-1}},options:{product:[]},data:{id:"",name:"",product:[]},rules:{}},control:{search:""},list:[],pagination:{pageSizes:["10","20","40"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}},computed:k({},U(["element"])),created(){this.getConfig(),this.init()},methods:{init(){this.getList()},async getConfig(){const t={name:"",page:1,limit:999,project_id:"",order:"desc"},{data:e}=await P(t);this.busData.options.product=e},async getList(){const t=await z();console.log(t);const{data:e}=t;this.list=e},handleSearch(){},handleCreate(){this.dialogType="new",this.dialogVisible=!0;const t=new Date;this.date=t.getTime()},async handleEdit(t){this.dialogType="edit",this.busData.data.id=t.row.id;const{data:e}=await H(this.busData.data.id);this.busData.data.id=e.project.id,this.busData.data.name=e.project.name,this.busData.data.product=e.product_id,this.dialogVisible=!0;const n=new Date;this.date=n.getTime()},handleDelete(t){},roleChangeChoice(t,e){this.busData.choiceData[t]=e},clearBusData(){this.busData.data=J.cloneDeep(ee)},async submitFn(){if(this.dialogType==="new"){const t={name:this.busData.data.name,product_id:this.busData.data.product},e=await W(t);e&&w(e),this.getList()}if(this.dialogType==="edit"){const t={id:this.busData.data.id,name:this.busData.data.name,product_id:this.busData.data.product},e=await X(this.busData.data.id,t);e&&w(e)}this.clearBusData(),this.dialogVisible=!1}}},ae={class:"app-container"},ie={style:{"text-align":"right"}},le=d("\u53D6\u6D88"),se=d("\u786E\u5B9A"),oe={class:"w100 control-box flex jc-end"},ue={class:"flex flex-end"},ne=d("\u641C\u7D22"),re=d(" \u521B\u5EFA\u9879\u76EE\u7EC4 "),de={class:"flex"},ce=d(" \u7F16\u8F91 "),pe=d(" \u5220\u9664 "),me={class:"w100 flex"};function ge(t,e,n,D,a,c){const E=u("el-input"),_=u("el-form-item"),C=u("el-option"),F=u("el-select"),y=u("el-form"),g=u("el-button"),j=u("el-dialog"),p=u("el-table-column"),A=u("el-table"),V=u("pagination");return m(),v("div",ae,[r(" dialog "),i(j,{modelValue:a.dialogVisible,"onUpdate:modelValue":e[3]||(e[3]=s=>a.dialogVisible=s),title:a.dialogType==="edit"?"\u4FEE\u6539\u9879\u76EE\u7EC4":"\u521B\u5EFA\u9879\u76EE\u7EC4",width:"80%"},{default:l(()=>[i(y,{ref:"ruleForm",model:a.busData.data,rules:a.busData.rules,"label-width":"150px","label-position":"left"},{default:l(()=>[i(_,{label:"\u9879\u76EE\u540D\u79F0",prop:"name"},{default:l(()=>[i(E,{modelValue:a.busData.data.name,"onUpdate:modelValue":e[0]||(e[0]=s=>a.busData.data.name=s),placeholder:"",disabled:a.dialogType==="edit"},null,8,["modelValue","disabled"])]),_:1}),i(_,{label:"\u4EA7\u54C1",prop:"project"},{default:l(()=>[i(F,{modelValue:a.busData.data.product,"onUpdate:modelValue":e[1]||(e[1]=s=>a.busData.data.product=s),filterable:"",multiple:"",class:"w100",placeholder:"\u4EA7\u54C1"},{default:l(()=>[(m(!0),v(I,null,L(a.busData.options.product,s=>(m(),f(C,{key:s.id,label:s.name,value:s.id,disabled:s.status==="2"},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),h("div",ie,[i(g,{type:"danger",onClick:e[2]||(e[2]=s=>a.dialogVisible=!1)},{default:l(()=>[le]),_:1}),i(g,{type:"primary",onClick:c.submitFn},{default:l(()=>[se]),_:1},8,["onClick"])])]),_:1},8,["modelValue","title"]),r(" dialog "),h("div",oe,[h("div",ue,[r(` <el-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="control.search" class="input-with-select">
          <el-button type="primary" slot="append">\u641C\u7D22</el-button>
        </el-input> `),i(E,{modelValue:a.control.search,"onUpdate:modelValue":e[4]||(e[4]=s=>a.control.search=s),class:"mr-10",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"]),i(g,{type:"primary",onClick:c.handleSearch},{default:l(()=>[ne]),_:1},8,["onClick"]),t.judgePermissionElementFn("A-AP-PROJECT-ADD-V")?(m(),f(g,{key:0,type:"primary",onClick:c.handleCreate},{default:l(()=>[re]),_:1},8,["onClick"])):r("v-if",!0)])]),i(A,{data:a.list,style:{width:"100%","margin-top":"30px"},border:""},{default:l(()=>[i(p,{align:"center",label:"\u9879\u76EE\u7EC4ID"},{default:l(s=>[d(b(s.row.id),1)]),_:1}),i(p,{align:"center",label:"\u9879\u76EE\u540D\u79F0"},{default:l(s=>[d(b(s.row.name),1)]),_:1}),i(p,{align:"center",label:"\u4EA7\u54C1\u6570"},{default:l(s=>[d(b(s.row.product_count),1)]),_:1}),i(p,{align:"center",label:"\u521B\u5EFA\u65F6\u95F4"},{default:l(s=>[d(b(s.row.create_time),1)]),_:1}),i(p,{align:"center",label:"\u66F4\u65B0\u65F6\u95F4"},{default:l(s=>[d(b(s.row.id),1)]),_:1}),i(p,{align:"center",label:"\u64CD\u4F5C"},{default:l(s=>[h("div",de,[t.judgePermissionElementFn("A-AP-PROJECT-EDIT-V")?(m(),f(g,{key:0,type:"primary",size:"small",onClick:o=>c.handleEdit(s)},{default:l(()=>[ce]),_:2},1032,["onClick"])):r("v-if",!0),t.judgePermissionElementFn("A-AP-PROJECT-DEL-V")?(m(),f(g,{key:1,type:"danger",size:"small",onClick:o=>c.handleDelete(s)},{default:l(()=>[pe]),_:2},1032,["onClick"])):r("v-if",!0)])]),_:1})]),_:1},8,["data"]),r(" pagination "),h("div",me,[N(i(V,{total:a.pagination.total,"page-sizes":a.pagination.pageSizes,page:a.pagination.listQuery.page,"onUpdate:page":e[5]||(e[5]=s=>a.pagination.listQuery.page=s),limit:a.pagination.listQuery.limit,"onUpdate:limit":e[6]||(e[6]=s=>a.pagination.listQuery.limit=s),onPagination:c.init},null,8,["total","page-sizes","page","limit","onPagination"]),[[O,a.pagination.total]])])])}var he=x(te,[["render",ge]]);const be={id:"",name:"",project:"",appid:"",projectId:"",appkey:"",status:"1"},_e={mixins:[R],components:{Pagination:q},directives:{waves:Q},data(){return{date:"",statusMessage:"\u4EA7\u54C1\u72B6\u6001\u5173\u95ED\u540E,\u4EA7\u54C1\u6570\u636E\u5C06\u4E0D\u5728\u62A5\u8868\u4E2D\u663E\u793A",tableOrder:"desc",passwordType:"password",dialogVisible:!1,dialogType:"new",productStatus:"",busData:{setting:{filterMethod(t,e){return e.label.indexOf(t)>-1}},options:{project:[],status:[{id:"1",name:"\u542F\u52A8"},{id:"2",name:"\u7981\u6B62"}]},data:{id:"",name:"",project:"",appid:"",projectId:"",appkey:"",status:"1"},projectName:"",rules:{name:[{required:!0,message:"\u5FC5\u586B",trigger:["change","blur"]},{min:1,max:50,message:"\u5B57\u7B26\u957F\u5EA6\u4E3A1-50",trigger:["change","blur"]}],project:[{required:!0,message:"\u5FC5\u586B",trigger:["change","blur"]}],status:[{required:!0,message:"\u5FC5\u586B",trigger:["change","blur"]}],appid:[{required:!1,message:"\u5FC5\u586B",trigger:["change","blur"]}],projectId:[{required:!1,message:"\u5FC5\u586B",trigger:["change","blur"]}],appkey:[{required:!1,message:"\u975E\u5FC5\u586B",trigger:["change","blur"]}]}},control:{search:""},filters:{projectFilter:[],currentProjectFilter:""},list:[],pagination:{pageSizes:["10"],total:1,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"}}}},created(){this.getConfig(),this.init()},methods:{init(){this.getList()},async getConfig(){const{data:t}=await z();this.busData.options.project=t,t==null||t.map(e=>{this.filters.projectFilter.push({text:e.name,value:e.id})})},async getList(){const t={name:this.control.search,page:this.pagination.listQuery.page,limit:this.pagination.listQuery.limit,project_id:this.filters.currentProjectFilter,order:this.tableOrder},e=await P(t),{data:n}=await P(t);console.log(e),this.list=n},handleSearch(){this.getList()},handleCreate(){this.dialogType="new",this.clearBusData(),this.dialogVisible=!0;const t=new Date;this.date=t.getTime()},async handleEdit(t){this.dialogType="edit",this.busData.data.id=t.row.id,this.busData.data.name=t.row.name,this.busData.data.appid=t.row.app_id,this.busData.data.project=t.row.project_id,this.busData.data.projectId=t.row.ss_project_id,this.busData.data.appkey=t.row.ry_appkey,this.dialogVisible=!0;const e=new Date;this.date=e.getTime()},handleDelete(t){},roleChangeChoice(t,e){this.busData.choiceData[t]=e},clearBusData(){this.busData.data=J.cloneDeep(be)},async changeStatus(t,e){const n={id:e.id,status:e.status},D=await M(e.id,n);w(D)},async submitFn(){if(this.dialogType==="new"){const t={name:this.busData.data.name,project_id:this.busData.data.project,app_id:this.busData.data.appid,ss_project_id:this.busData.data.projectId,ry_appkey:this.busData.data.appkey,status:Number(this.busData.data.status)},e=await Z(t);e&&w(e),this.getList()}if(this.dialogType==="edit"){const t={id:this.busData.data.id,name:this.busData.data.name,project_id:this.busData.data.project,app_id:this.busData.data.appid,ss_project_id:this.busData.data.projectId,ry_appkey:this.busData.data.appkey,status:Number(this.busData.data.status)},e=await $(this.busData.data.id,t);e&&w(e),this.getList()}this.clearBusData(),this.dialogVisible=!1,this.$refs.ruleForm.resetFields()},showCurrentProject(t){var n,D;return(D=((n=this.busData.options.project)==null?void 0:n.filter(a=>a.id===t))[0])==null?void 0:D.name},cancelFn(){this.dialogVisible=!1,this.$refs.ruleForm.resetFields()},filterChange(t){const e=Object.values(t)[0];this.filters.currentProjectFilter=e.length===this.filters.projectFilter.length?"":e,this.getList()},switchStatus(t,e){t===1?this.statusMessage="\u4EA7\u54C1\u72B6\u6001\u5F00\u542F\u540E\uFF0C\u4EA7\u54C1\u6570\u636E\u5F00\u59CB\u5728\u5E73\u53F0\u4E0A\u5C55\u793A":this.statusMessage="\u4EA7\u54C1\u72B6\u6001\u5173\u95ED\u540E,\u4EA7\u54C1\u6570\u636E\u5C06\u4E0D\u5728\u62A5\u8868\u4E2D\u663E\u793A"},cancelStatus(t){this.getList()},async confirmStatus(t){await M(t.id,{id:t.id,status:t.status}),this.getList()},sortChange(t,e,n){t.order==="ascending"?this.tableOrder="asc":t.order==="descending"&&(this.tableOrder="desc"),this.getList()}}},fe={class:"app-container"},De={style:{"text-align":"right"}},Ee=d("\u53D6\u6D88"),Ce=d("\u786E\u8BA4"),Fe={class:"w100 control-box flex jc-end"},ye={class:"flex flex-end"},ve=d("\u641C\u7D22"),we=d(" \u521B\u5EFA\u4EA7\u54C1 "),je={class:"w100 flex"};function Ae(t,e,n,D,a,c){const E=u("el-input"),_=u("el-form-item"),C=u("el-option"),F=u("el-select"),y=u("el-form"),g=u("el-button"),j=u("el-dialog"),p=u("el-table-column"),A=u("el-switch"),V=u("el-table"),s=u("pagination");return m(),v("div",fe,[r(" dialog "),i(j,{modelValue:a.dialogVisible,"onUpdate:modelValue":e[2]||(e[2]=o=>a.dialogVisible=o),title:a.dialogType==="edit"?"\u7F16\u8F91\u4EA7\u54C1":"\u521B\u5EFA\u4EA7\u54C1",width:"80%"},{default:l(()=>[i(y,{ref:"ruleForm",model:a.busData.data,rules:a.busData.rules,"label-width":"150px","label-position":"left"},{default:l(()=>[i(_,{label:"\u4EA7\u54C1\u540D\u79F0",prop:"name"},{default:l(()=>[i(E,{modelValue:a.busData.data.name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.busData.data.name=o),placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0",disabled:a.dialogType==="edit"},null,8,["modelValue","disabled"])]),_:1}),i(_,{label:"\u9879\u76EE\u7EC4",prop:"project"},{default:l(()=>[i(F,{modelValue:a.busData.data.project,"onUpdate:modelValue":e[1]||(e[1]=o=>a.busData.data.project=o),class:"w100",placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u9879\u76EE\u7EC4"},{default:l(()=>[(m(!0),v(I,null,L(a.busData.options.project,o=>(m(),f(C,{key:o.id,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(` <el-form-item label="APP_ID" prop="appid">
          <el-input v-model="busData.data.appid" placeholder="\u8BF7\u8F93\u5165app_id" />
        </el-form-item>
        <el-form-item label="\u6570\u6570\u9879\u76EEID" prop="projectId">
          <el-input v-model="busData.data.projectId" placeholder="\u8BF7\u8F93\u5165\u6570\u6570\u9879\u76EEID" :disabled="dialogType==='edit'" />
        </el-form-item>
        <el-form-item label="\u70ED\u4E91APPKEY" prop="appkey">
          <el-input v-model="busData.data.appkey" placeholder="\u8BF7\u8F93\u5165\u70ED\u4E91APPKEY" :disabled="dialogType==='edit'" />
        </el-form-item>
        <el-form-item label="\u72B6\u6001" prop="status">
          <el-select v-model="busData.data.status" class="w100">
            <el-option
              v-for="item in busData.options.status"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="\u4EA7\u54C1\u914D\u7F6E" prop="conf">
          <el-transfer
            filterable
            :filter-method="busData.setting.filterMethod"
            filter-placeholder="\u8BF7\u8F93\u5165\u641C\u7D22"
            v-model="busData.data.conf"
            :data="busData.data.data"
            :titles="['Source', 'Target']"
          >
          </el-transfer>
        </el-form-item> `)]),_:1},8,["model","rules"]),h("div",De,[i(g,{type:"danger",onClick:c.cancelFn},{default:l(()=>[Ee]),_:1},8,["onClick"]),i(g,{type:"primary",onClick:c.submitFn},{default:l(()=>[Ce]),_:1},8,["onClick"])])]),_:1},8,["modelValue","title"]),r(" dialog "),h("div",Fe,[h("div",ye,[r(` <el-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="control.search" class="input-with-select">
          <el-button type="primary" slot="append">\u641C\u7D22</el-button>
        </el-input> `),i(E,{modelValue:a.control.search,"onUpdate:modelValue":e[3]||(e[3]=o=>a.control.search=o),class:"sw-200 mr-10",placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0\u6216APPID"},null,8,["modelValue"]),i(g,{type:"primary",onClick:c.handleSearch},{default:l(()=>[ve]),_:1},8,["onClick"]),t.judgePermissionElementFn("A-AP-PRODUCT-ADD-V")?(m(),f(g,{key:0,type:"primary",onClick:c.handleCreate},{default:l(()=>[we]),_:1},8,["onClick"])):r("v-if",!0)])]),i(V,{data:a.list,style:{width:"100%","margin-top":"30px"},border:"",onFilterChange:c.filterChange,onSortChange:c.sortChange},{default:l(()=>[i(p,{align:"center",label:"ID",prop:"id",sortable:"custom"}),i(p,{align:"center",label:"\u9879\u76EE\u7EC4",filters:a.filters.projectFilter},{default:l(o=>[d(b(c.showCurrentProject(o.row.project_id)),1)]),_:1},8,["filters"]),i(p,{align:"center",label:"\u4EA7\u54C1\u540D\u79F0"},{default:l(o=>[d(b(o.row.name),1)]),_:1}),i(p,{align:"center",label:"\u521B\u5EFA\u65F6\u95F4"},{default:l(o=>[d(b(o.row.create_time),1)]),_:1}),i(p,{align:"center",label:"\u66F4\u65B0\u65F6\u95F4"},{default:l(o=>[d(b(o.row.update_time),1)]),_:1}),i(p,{align:"center",label:"\u4EA7\u54C1\u72B6\u6001"},{default:l(o=>[r(` <el-popconfirm
            :title="statusMessage"
            @onConfirm="confirmStatus(scope.row)"
            @onCancel="cancelStatus(scope.row)"
          > `),i(A,{slot:"reference",modelValue:o.row.status,"onUpdate:modelValue":B=>o.row.status=B,"active-value":1,"inactive-value":2,onChange:B=>c.changeStatus(B,o.row)},null,8,["modelValue","onUpdate:modelValue","onChange"]),r(" </el-popconfirm> "),r(` <el-popover
            v-model="productPopVisible"
            placement="top"
            width="200"
          >
            <p>\u786E\u5B9A\u5220\u9664\u5417\uFF1F</p>
            <div style="text-align: right; margin: 0">
              <el-button type="text" @click="cancelStatus(scope.row)">\u53D6\u6D88</el-button>
              <el-button type="text" @click="confirmStatus(scope.row)">\u786E\u5B9A</el-button>
            </div>
            <el-switch
              slot="reference"
              v-model="scope.row.status"
              active-value="1"
              inactive-value="2"
              @change="switchStatus($event, scope.row)"
            />
          </el-popover> `)]),_:1}),r(` <el-table-column v-if="judgePermissionElementFn('A-AP-PRODUCT-EDIT-V')" align="center" label="\u64CD\u4F5C">
        <template #default="scope">
          <div class="flex">
            <el-button type="primary" size="small" @click="handleEdit(scope)">\u7F16\u8F91</el-button>
            <el-button v-if="judgePermissionElementFn('A-AP-PRODUCT-DEL-V')" type="danger" size="small" @click="handleDelete(scope)">\u5220\u9664</el-button>
          </div>
        </template>
      </el-table-column> `)]),_:1},8,["data","onFilterChange","onSortChange"]),r(" pagination "),h("div",je,[N(i(s,{total:a.pagination.total,"page-sizes":a.pagination.pageSizes,page:a.pagination.listQuery.page,"onUpdate:page":e[4]||(e[4]=o=>a.pagination.listQuery.page=o),limit:a.pagination.listQuery.limit,"onUpdate:limit":e[5]||(e[5]=o=>a.pagination.listQuery.limit=o),onPagination:c.init},null,8,["total","page-sizes","page","limit","onPagination"]),[[O,a.pagination.total]])])])}var Ve=x(_e,[["render",Ae]]);const Be={components:{Project:he,Product:Ve},data(){return{activeName:"product"}},computed:k({},U(["element"])),methods:{handleClick(t,e){this.activeName=t.props.name}}},ke={class:"app-container"};function Pe(t,e,n,D,a,c){const E=u("product"),_=u("el-tab-pane"),C=u("project"),F=u("el-tabs");return m(),v("div",ke,[i(F,{modelValue:a.activeName,"onUpdate:modelValue":e[0]||(e[0]=y=>a.activeName=y),type:"card",onTabClick:c.handleClick},{default:l(()=>[i(_,{name:"product",label:"\u4EA7\u54C1\u4FE1\u606F"},{default:l(()=>[a.activeName==="product"?(m(),f(E,{key:0})):r("v-if",!0)]),_:1}),i(_,{name:"project",label:"\u9879\u76EE\u7EC4"},{default:l(()=>[a.activeName==="project"?(m(),f(C,{key:0})):r("v-if",!0)]),_:1})]),_:1},8,["modelValue","onTabClick"])])}var Qe=x(Be,[["render",Pe]]);export{Qe as default};
