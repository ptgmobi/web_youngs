import{_ as e,d as l,h as a,$ as t,r as i,I as o,L as s,q as r,a0 as n,c as u,x as p,e as d,s as c,v as m,z as v,U as b,A as y,a9 as f,V as g,K as h,o as _,N as w,O as x,f as k,y as V,G as F,H as j}from"./main-ce43ffdd.js";import{u as U,s as C}from"./useUtils-d1805f03.js";import{P as z}from"./index-2d86919d.js";import{m as D}from"./message-1c1d9ef1.js";import{_ as q}from"./lodash-6b3789ad.js";import{h as Q,g as S}from"./new-format-368dcfb0.js";import"./clipboard-polyfill.text.esm-fc4f7791.js";import{A as T,a as I}from"./dsp-campaign-556f35e6.js";const L={type:[{value:1,label:"图片"},{value:2,label:"视频"},{value:3,label:"原生"}],audit_status:[{value:1,label:"未审核"},{value:2,label:"审核通过"},{value:3,label:"审核未通过"}]};const A={class:"controlBox w100 mb-10"},N={class:"flex jc-start flex-wrap w100"},O={class:"flex"},$={class:"flex"},B={key:0,class:"mb-10 w100"},P={class:"flex jc-around"},E=(e=>(F("data-v-93cffa54"),e=e(),j(),e))((()=>p("span",null,null,-1))),G={class:"w100 flex"},H={class:"img-box"},K=["src"],R=l({name:"adserieslist"});var J=e(l({...R,props:{searchData:{require:!1,default:()=>({}),type:Object},pagaType:{require:!1,default:()=>"list",type:String},choiceList:{require:!1,default:()=>[],type:Array},choiceType:{require:!1,default:()=>2,type:Number}},emits:["updateList","updateOne"],setup(e,{emit:l}){const F=e;F.choiceList,F.choiceType;const j=a(),R=a([]),{status:J,adv_type:M,ind_cla:W,third_party:X,return_mode:Y}=C,{type:Z,audit_status:ee}=L,{goNewUrl:le,openAlert:ae}=U(),{type:te}=F.searchData;let ie=t({status:"",type:te||void 0,audit_status:"",is_del:"",value_type:"name",value:""});const oe=a({}),se=a(!1),re=i({preview_img:""});let ne=i({dialogVisible:!1,cache:{item:{}},searchForm:ie.value,useData:ie.value,loading:!0,options:{status:J,type:Z,audit_status:ee,value_type:[{value:"name",label:"名称"},{value:"id",label:"ID"}]},list:[{id:1}],pagination:{pageSizes:[20,50,100,500,1e3],total:1,listQuery:{page:1,limit:50,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});i({data:{mode:""},options:{mode:[{value:1,label:"开启"},{value:2,label:"暂停"},{value:0,label:"归档"}]}});const ue=o((()=>F.choiceType)),pe=o((()=>F.pagaType)),de=()=>{ne.useData=q.cloneDeep(ne.searchForm),ge()};a([]);const ce=()=>{le({url:"/campaign/administration/create",query:{type:"create"}})},me=e=>async()=>{const{row:l,$index:a}=e,t=await(async e=>await I({ids:e,is_del:2}))([l.id]);D(t)&&ne.list.splice(a,1)},ve=({row:e})=>2===e.type?e.cover_url:e.url,be=({row:e})=>1===e.type?[e.url]:2===e.type?[e.cover_url,e.logo_url]:3===e.type?[e.url,e.logo_url]:void 0,ye=e=>{R.value=e,l("updateList",e)},fe=e=>{l("updateOne",e)},ge=async()=>{ne.loading=!0;let e={page:ne.pagination.listQuery.page,limit:ne.pagination.listQuery.limit,...ie.value,...oe.value};e[e.value_type]=e.value,delete e.value_type,delete e.value,e=Q(e);const l=await T(e);if(l){const{data:e}=l;ne.list=null==e?void 0:e.data,ne.pagination.total=Number(e.count)}ne.loading=!1};return s((()=>{de()})),(e,l)=>{const a=r("el-option"),t=r("el-select"),i=r("el-form-item"),o=r("el-input"),s=r("el-checkbox"),F=r("el-button"),U=r("el-form"),C=r("el-table-column"),D=r("el-image"),q=r("el-dialog"),Q=n("loading");return _(),u("div",null,[p("div",A,[d(U,{modelValue:m(ne).searchForm,"onUpdate:modelValue":l[5]||(l[5]=e=>m(ne).searchForm=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:c((()=>[p("div",N,[v(' <el-form-item label="">\n            <el-select\n              v-model="state.searchForm.status"\n              filterable\n              clearable\n              placeholder="所有状态"\n            >\n              <el-option\n                v-for="item in state.options.status"\n                :key="item.value"\n                :label="item.label"\n                :value="item.value"\n              ></el-option>\n            </el-select>\n          </el-form-item> '),v(" 所有样式 "),d(i,{label:""},{default:c((()=>[d(t,{modelValue:m(ne).searchForm.type,"onUpdate:modelValue":l[0]||(l[0]=e=>m(ne).searchForm.type=e),filterable:"",clearable:"",placeholder:"所有样式"},{default:c((()=>[(_(!0),u(w,null,x(m(ne).options.type,(e=>(_(),y(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" 所有审核状态 "),d(i,{label:""},{default:c((()=>[d(t,{modelValue:m(ne).searchForm.audit_status,"onUpdate:modelValue":l[1]||(l[1]=e=>m(ne).searchForm.audit_status=e),filterable:"",clearable:"",placeholder:"所有审核状态"},{default:c((()=>[(_(!0),u(w,null,x(m(ne).options.audit_status,(e=>(_(),y(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(" 输入 "),d(i,{label:""},{default:c((()=>[d(o,{modelValue:m(ne).searchForm.value,"onUpdate:modelValue":l[3]||(l[3]=e=>m(ne).searchForm.value=e),placeholder:"请输入",class:"input-with-select"},{prepend:c((()=>[d(t,{modelValue:m(ne).searchForm.value_type,"onUpdate:modelValue":l[2]||(l[2]=e=>m(ne).searchForm.value_type=e),placeholder:"",class:"search-input-select",style:{width:"120px"}},{default:c((()=>[(_(!0),u(w,null,x(m(ne).options.value_type,(e=>(_(),y(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])),_:1}),d(i,{label:""},{default:c((()=>[d(s,{modelValue:m(ne).searchForm.is_del,"onUpdate:modelValue":l[4]||(l[4]=e=>m(ne).searchForm.is_del=e),"true-label":"","false-label":"1",label:"包含已归档"},null,8,["modelValue"])])),_:1})]),p("div",O,[d(i,{class:"mr-0",style:{"margin-right":"0px"}},{default:c((()=>[p("div",$,[d(F,{type:"primary",onClick:de},{default:c((()=>[k(" 查询 ")])),_:1}),v(' <el-button type="primary" @click="handleExportSearch">导出</el-button> ')])])),_:1})])])),_:1},8,["modelValue"]),v(' <el-input placeholder="请输入内容" v-model="state.searchForm.data" class=\'search-input\'>\n        <el-button slot="append" icon="Search" @click=\'searchFun\'></el-button>\n      </el-input> '),"list"===m(pe)?(_(),u("div",B,[d(F,{type:"primary",onClick:ce},{default:c((()=>[k("新建创意")])),_:1})])):v("v-if",!0)]),v(" table "),b((_(),y(m(f),{ref_key:"multipleTableRef",ref:j,center:"",data:m(ne).list,class:"w100",border:"","highlight-current-row":1===m(ue),onSelectionChange:ye,onCurrentChange:fe},{default:c((()=>[2===m(ue)?(_(),y(C,{key:0,align:"center",type:"selection",width:"55"})):v("v-if",!0),v(" ID "),d(C,{sortable:"",prop:"id",label:"ID",align:"center"}),v(" 名称 "),d(C,{sortable:"",width:"120",prop:"name",label:"名称",align:"center"}),v(" 缩略图 "),d(C,{width:"120",prop:"url",label:"缩略图",align:"center"},{default:c((e=>[p("div",null,[d(D,{"z-index":9999,style:{width:"100px",height:"auto"},src:ve(e),"preview-src-list":be(e),"initial-index":4,fit:"cover","preview-teleported":!0,onClick:l=>{return a=e.row.url,void(re.preview_img=a);var a}},null,8,["src","preview-src-list","onClick"]),v(' <el-image\n              v-if="scope.row.type !== 2"\n              :z-index="9999"\n              style="width: 100px; height: auto"\n              :src="scope.row.url"\n              :preview-src-list="[scope.row.url]"\n              :initial-index="4"\n              fit="cover"\n              :preview-teleported="true"\n              @click="toBus(scope.row.url)"\n            />\n            <el-image\n              v-if="scope.row.type === 2"\n              :z-index="9999"\n              style="width: 100px; height: auto"\n              :src="scope.row.cover_url"\n              :preview-src-list="[scope.row.cover_url]"\n              :initial-index="4"\n              fit="cover"\n              :preview-teleported="true"\n              @click="toBus(scope.row.cover_url)"\n            /> ')])])),_:1}),v(" 操作 "),"list"===m(pe)?(_(),y(C,{key:1,width:"200",label:"操作",align:"center"},{default:c((e=>[p("div",P,[d(F,{class:"cp",type:"primary",onClick:l=>(({row:e})=>{const{id:l}=e;le({url:`/campaign/administration/edit/${l}`,query:{type:"edit",campaign_type:e.type}})})(e)},{default:c((()=>[k("编辑")])),_:2},1032,["onClick"]),d(F,{class:"cp",type:"primary"},{default:c((()=>[k("复制")])),_:1}),v(' <el-button\n              v-if="scope.row.is_del === 2"\n              class="cp"\n              type="default"\n              @click="editFn(scope)"\n            >查看</el-button> '),d(F,{class:"cp",type:"danger",onClick:l=>(async e=>{ae({text:`确认归档${e.row.name}？`,title:"归档操作",buttonText:"确认"},me(e))})(e),disabled:2===e.row.is_del},{default:c((()=>[k("归档")])),_:2},1032,["onClick","disabled"])])])),_:1})):v("v-if",!0),v(" 开关 "),v(' <el-table-column sortable\n        prop="status"\n        label="开关"\n        align="center"\n      >\n        <template #default="scope">\n          <el-switch\n            v-model="scope.row.status"\n            :active-value="1"\n            :inactive-value="2"\n            @click="changeStatus(scope)"\n          />\n        </template>\n      </el-table-column> '),v(" 样式 "),d(C,{sortable:"",prop:"type",label:"样式",align:"center"},{default:c((e=>[p("span",null,V(m(S)(e.row.type,m(ne).options.type)),1)])),_:1}),v(" 审核状态 "),d(C,{sortable:"",prop:"audit_status",label:"审核状态",align:"center"},{default:c((e=>[p("span",null,V(m(S)(e.row.audit_status,m(ne).options.audit_status)),1)])),_:1}),v(" 尺寸 "),d(C,{sortable:"",width:"120",prop:"size",label:"尺寸",align:"center"}),v(" 格式 "),d(C,{sortable:"",width:"120",prop:"format",label:"格式",align:"center"}),v(" 大小 "),d(C,{sortable:"",width:"120",prop:"memory_size",label:"大小",align:"center"}),v(" 时长 "),d(C,{sortable:"",width:"120",prop:"duration",label:"时长",align:"center"}),v(" 关联广告 "),"list"===m(pe)?(_(),y(C,{key:2,sortable:"",width:"120",prop:"ads",label:"关联广告",align:"center"},{default:c((e=>[E])),_:1})):v("v-if",!0),v(" 创建人 "),d(C,{sortable:"",width:"120",prop:"create_email",label:"创建人",align:"center"}),v(" 创建时间 "),d(C,{sortable:"",width:"160",prop:"create_date",label:"创建时间",align:"center"}),v(" 更新时间 "),d(C,{sortable:"",width:"160",prop:"update_date",label:"更新时间",align:"center"})])),_:1},8,["data","highlight-current-row"])),[[Q,m(ne).loading]]),v(" 分页 "),p("div",G,[b(d(z,{page:m(ne).pagination.listQuery.page,"onUpdate:page":l[6]||(l[6]=e=>m(ne).pagination.listQuery.page=e),limit:m(ne).pagination.listQuery.limit,"onUpdate:limit":l[7]||(l[7]=e=>m(ne).pagination.listQuery.limit=e),total:m(ne).pagination.total,"page-sizes":m(ne).pagination.pageSizes,onPagination:ge},null,8,["page","limit","total","page-sizes"]),[[g,m(ne).pagination.total]])]),v(" 预览 "),d(q,{modelValue:m(se),"onUpdate:modelValue":l[8]||(l[8]=e=>h(se)?se.value=e:null),title:"图片预览",width:"50%"},{default:c((()=>[p("div",H,[p("img",{src:m(re).preview_img,alt:""},null,8,K)])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-93cffa54"]]);export{J as default};