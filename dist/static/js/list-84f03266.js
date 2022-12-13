import{d as e,$ as a,r as t,L as i,q as l,a0 as n,c as s,x as o,e as r,s as c,z as p,U as d,v as m,A as g,V as u,o as f,f as v,E as b}from"./main-ce43ffdd.js";import{P as y}from"./index-2d86919d.js";import{A as w,a as h}from"./tool-149ce53d.js";import{m as x}from"./message-1c1d9ef1.js";import{_}from"./lodash-6b3789ad.js";import{u as j}from"./useUtils-d1805f03.js";const D={class:"controlBox w100 flex jc-between ai-start"},Q={class:"mb-10"},k={class:"flex jc-around"},z={class:"w100 flex"},C=e({name:"dsp-advsetting-list"}),F=e({...C,setup(e){const{goNewUrl:C,openAlert:F}=j(),U=a({name:""});let q=t({dialogVisible:!1,cache:{item:{},device:{}},searchForm:U.value,useData:U.value,loading:!0,options:{},list:[],pagination:{pageSizes:["50","100","500","1000"],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});const A=()=>{C({url:"/tool/advsetting/create",query:{type:"create"}})},S=async()=>{q.loading=!0;let e={page:q.pagination.listQuery.page,limit:q.pagination.listQuery.limit};q.useData.name&&(e.name=q.useData.name);const a=await w(e),{data:t}=a;q.list=t,(e=>{100!==e.reduce(((e,a)=>e+a.flow_rate),0)&&b({message:"温馨提示：所有广告主的强制流量占比之和必须等于100%，否则会造成系统错误或流量浪费。",type:"warning"})})(t),q.pagination.total=Number(t.count),q.loading=!1};return i((()=>{q.useData=_.cloneDeep(q.searchForm),S()})),(e,a)=>{const t=l("el-button"),i=l("el-table-column"),b=l("el-table"),w=n("loading");return f(),s("div",null,[o("div",D,[o("div",Q,[r(t,{type:"primary",onClick:A},{default:c((()=>[v("新建广告主")])),_:1})]),p(' <el-form\n        v-model="data.searchForm"\n        :inline="true"\n        class="flex jc-between ai-end"\n      >\n        <div class="flex jc-start flex-wrap w100">\n          <el-form-item label="">\n            <el-input\n              v-model="data.searchForm.name"\n              placeholder="请输入广告主名称"\n              class="search-con"\n              style="min-width: 120px"\n            />\n          </el-form-item>\n        </div>\n        <div class="flex">\n          <el-form-item\n            class="mr-0"\n            style="margin-right: 0px"\n          >\n            <div class="flex">\n              <el-button\n                type="primary"\n                @click="searchFn"\n              >\n                查询\n              </el-button>\n            </div>\n          </el-form-item>\n        </div>\n      </el-form> ')]),p(" table "),d((f(),g(b,{center:"",data:m(q).list,class:"w100","min-height":"70vh",border:""},{default:c((()=>[r(i,{fixed:"",prop:"id",label:"ID",align:"center"}),r(i,{fixed:"",prop:"ad_id",label:"广告主ID",align:"center"}),r(i,{fixed:"",prop:"ad_name",label:"广告主名称",align:"center"}),r(i,{prop:"desc",label:"描述",align:"center"}),r(i,{prop:"flow_rate",label:"强制流量占比%",width:"120",align:"center"}),r(i,{prop:"create_email",label:"创建人",align:"center"}),r(i,{prop:"update_email",label:"更新人",align:"center"}),r(i,{prop:"create_time",label:"创建时间",sortable:"",align:"center"}),r(i,{prop:"update_time",label:"更新时间",sortable:"",align:"center"}),r(i,{width:"100",label:"操作",align:"center"},{default:c((e=>[o("div",k,[r(t,{class:"cp mr-10",type:"primary",icon:"Edit",circle:"",onClick:a=>(({row:e})=>{const{id:a}=e;C({url:`/tool/advsetting/edit/${a}`,query:{type:"edit"}})})(e)},null,8,["onClick"]),r(t,{class:"cp mr-10",type:"danger",icon:"Delete",circle:"",onClick:a=>(async({row:e,$index:a})=>{const{id:t}=e,i=await h(t);x(i)&&q.list.splice(a,1)})(e)},null,8,["onClick"]),p(' <el-switch\n              v-model="scope.row.status"\n              :active-value="1"\n              :inactive-value="2"\n              @change="changeStatus(scope.row)"\n            /> ')])])),_:1})])),_:1},8,["data"])),[[w,m(q).loading]]),p(" 分页 "),o("div",z,[d(r(m(y),{page:m(q).pagination.listQuery.page,"onUpdate:page":a[0]||(a[0]=e=>m(q).pagination.listQuery.page=e),limit:m(q).pagination.listQuery.limit,"onUpdate:limit":a[1]||(a[1]=e=>m(q).pagination.listQuery.limit=e),total:m(q).pagination.total,"page-sizes":m(q).pagination.pageSizes,onPagination:S},null,8,["page","limit","total","page-sizes"]),[[u,m(q).pagination.total]])])])}}});export{F as default};