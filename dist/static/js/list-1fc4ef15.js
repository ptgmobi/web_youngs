var ce=Object.defineProperty,pe=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var M=(v,u,h)=>u in v?ce(v,u,{enumerable:!0,configurable:!0,writable:!0,value:h}):v[u]=h,T=(v,u)=>{for(var h in u||(u={}))me.call(u,h)&&M(v,h,u[h]);if(z)for(var h of z(u))be.call(u,h)&&M(v,h,u[h]);return v},L=(v,u)=>pe(v,fe(u));import{d as $,z as I,w as _e,C as X,r as _,o as p,k as g,x as a,h as r,j as o,f as ve,a as R,am as he,g as ge,af as De,an as ye,v as d,i as w,N as we,O as Ve,ae as Z,F as V,l as C,t as D,y as O,c as U}from"./vendor-f1931894.js";import{g as Ce,h as ke,i as xe,j as Ue,k as Oe,l as Fe,m as Ae,n as je,o as Se}from"./fenix-fcb2d525.js";import{P as Pe}from"./index-dbecac03.js";import{h as j}from"./moment-1cf83a0b.js";import{m as S}from"./message-c1123ca0.js";import{o as q,a as J}from"./new-format-e3b038cd.js";import"./index-0d058172.js";const Be=$({props:{busData:{require:!0,default:()=>({}),type:Object}},setup(v){const u=v,F=I({tableData:[{}]}),Q=async()=>{const A={offer_id:u.busData.offer.offer_id};F.tableData=[];const{data:t}=await Ce(A),k=t.sort((x,P)=>{const B=Number(j(x.date,j.ISO_8601).format("X")),E=Number(j(P.date,j.ISO_8601).format("X"));return B-E});F.tableData=k};return _e(()=>u.busData.offer.offer_id,(A,t)=>{},{immediate:!0}),X(()=>{console.log(u.busData),Q()}),(A,t)=>{const k=_("el-table-column"),x=_("el-table");return p(),g("div",null,[a(x,{data:o(F).tableData,style:{width:"100%"},border:""},{default:r(()=>[a(k,{fixed:"",prop:"date",label:"Date",align:"center"}),a(k,{fixed:"",prop:"record",label:"Record",align:"center"}),a(k,{fixed:"",prop:"email",label:"User",align:"center"})]),_:1},8,["data"])])}}}),Ee={class:"control-box w100 mb-10"},Ne={class:"mb-10"},Te=O(" Offer Create "),$e={class:"flex jc-start flex-wrap w100"},Ie={class:"flex"},Re={class:"flex"},Qe=O(" \u67E5\u8BE2 "),Ge={class:"body-box mt-10"},ze={class:"flex"},Me={key:0},Le=O(" . "),Xe=O(" . "),Ze=O(" . "),qe={class:"flex"},Je={class:"w100 flex"},Ke=$({name:"fenix-offer-list"}),na=$(L(T({},Ke),{setup(v){ve(),R(!0);let u=R(!1);R(!1);const t=I({searchData:{adv_status:void 0,status:void 0,cvr_status:void 0,platform:void 0,attribute_provider:"",pub_name:"",offer_id:"",adv_offer:"",pkg:"",title:"",channel:"",pid:"",country:"",channel_type:void 0},tableData:[],options:{status:[{value:"1",label:"\u5F00"},{value:"2",label:"\u5173"}],platform:[{value:"1",label:"Android"},{value:"2",label:"iOS"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}],pub:[{id:0,pub_name:""}],channel_type:[{value:"1",label:"BUZZ"},{value:"2",label:"SDK"}],dailyCapCount:{},cvr:{}},pagination:{pageSizes:["20","50","100","500","1000"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});let x=I({});he(t,"tableData");const P=async({row:n})=>{console.log(n);const l={id:n.id,status:n.status},i=await xe(l);S(i)||(n.status=n.status===1?2:1)},B=async({row:n})=>{let l={id:n.id,cvr_status:n.cvr_status};l=J(l);const i=await Ue(l);S(i)||(n.cvr_status=n.cvr_status===1?2:1)},E=async({row:n})=>{let l={id:n.id,target_cvr:n.target_cvr};l=J(l);const i=await Oe(l);S(i)},K=async()=>{const{data:n}=await Fe();t.options.pub=n},H=async()=>{const{data:n}=await Ae(),l={};for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i)){const b=n[i].split("_"),f={click_w:b[0],installs:b[1],cvr_w:b[2]};l[i]=f}t.options.cvr=l},W=async()=>{const{data:n}=await je();t.options.dailyCapCount=n},Y=async()=>Promise.all([K(),W(),H()]),N=async()=>{let n={page:t.pagination.listQuery.page,limit:t.pagination.listQuery.limit};const l=T({},t.searchData);for(const m in l)if(Object.prototype.hasOwnProperty.call(l,m)){const b=l[m];b&&(n[m]=b)}const i=await ke(n);t.tableData=i.data.data,t.pagination.total=i.data.paging.count},ee=()=>{N()},ae=async n=>{const{row:l}=n,i=await Se(l.id);S(i)&&t.tableData.splice(n.$index,1)},le=(n,l)=>{let i="";i=`${n.offer_id}_${l.slotid}`;const m=t.options.dailyCapCount[i];return m?`: ${m}`:""},te=n=>`/fenix/offer/edit/${n.id}`,oe=n=>{let l=te(n);q(l)},ne=()=>{q("/fenix/offer/create")};ge(()=>{}),X(()=>{Y(),N(),window.onpopstate=()=>{console.log("onpopstate")}}),De(()=>{console.log("onActivated")}),ye(()=>{});const re=n=>{x.offer=n,u.value=!0};return(n,l)=>{const i=_("el-button"),m=_("el-option"),b=_("el-select"),f=_("el-form-item"),y=_("el-input"),se=_("el-form"),c=_("el-table-column"),G=_("el-switch"),ue=_("el-popconfirm"),ie=_("el-table"),de=_("el-dialog");return p(),g("div",null,[d("div",Ee,[d("div",Ne,[w(` <router-link to="/fenix/offer/create">
          <el-button type="primary">
            Offer Create
          </el-button>
        </router-link> `),a(i,{type:"primary",onClick:l[0]||(l[0]=e=>ne())},{default:r(()=>[Te]),_:1})]),a(se,{modelValue:o(t).searchData,"onUpdate:modelValue":l[14]||(l[14]=e=>o(t).searchData=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:r(()=>[d("div",$e,[a(f,{label:""},{default:r(()=>[a(b,{modelValue:o(t).searchData.adv_status,"onUpdate:modelValue":l[1]||(l[1]=e=>o(t).searchData.adv_status=e),clearable:"",class:"search-con",placeholder:"Adv Status"},{default:r(()=>[(p(!0),g(V,null,C(o(t).options.status,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(b,{modelValue:o(t).searchData.status,"onUpdate:modelValue":l[2]||(l[2]=e=>o(t).searchData.status=e),clearable:"",class:"search-con",placeholder:"Status"},{default:r(()=>[(p(!0),g(V,null,C(o(t).options.status,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),w(` <el-form-item label="">
            <el-select v-model="state.searchData.cvr_status" clearable class="search-con" placeholder="Cvr Status">
              <el-option
                v-for="item in state.options.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item> `),a(f,{label:""},{default:r(()=>[a(b,{modelValue:o(t).searchData.platform,"onUpdate:modelValue":l[3]||(l[3]=e=>o(t).searchData.platform=e),clearable:"",class:"search-con",placeholder:"Platform"},{default:r(()=>[(p(!0),g(V,null,C(o(t).options.platform,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(b,{modelValue:o(t).searchData.attribute_provider,"onUpdate:modelValue":l[4]||(l[4]=e=>o(t).searchData.attribute_provider=e),clearable:"",class:"search-con",placeholder:"Attribute Provider"},{default:r(()=>[(p(!0),g(V,null,C(o(t).options.attribute_provider,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(b,{modelValue:o(t).searchData.pub_name,"onUpdate:modelValue":l[5]||(l[5]=e=>o(t).searchData.pub_name=e),clearable:"",class:"search-con",placeholder:"Pub Name"},{default:r(()=>[(p(!0),g(V,null,C(o(t).options.pub,e=>{var s;return p(),U(m,{key:e.id,label:e.pub_name,value:(s=e.pub_name)!=null?s:e.id},null,8,["label","value"])}),128))]),_:1},8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(y,{modelValue:o(t).searchData.offer_id,"onUpdate:modelValue":l[6]||(l[6]=e=>o(t).searchData.offer_id=e),placeholder:"Offer ID",class:"search-con"},null,8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(y,{modelValue:o(t).searchData.adv_offer,"onUpdate:modelValue":l[7]||(l[7]=e=>o(t).searchData.adv_offer=e),placeholder:"Adv Offer",class:"search-con"},null,8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(y,{modelValue:o(t).searchData.pkg,"onUpdate:modelValue":l[8]||(l[8]=e=>o(t).searchData.pkg=e),placeholder:"Pachage Name",class:"search-con"},null,8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(y,{modelValue:o(t).searchData.title,"onUpdate:modelValue":l[9]||(l[9]=e=>o(t).searchData.title=e),placeholder:"Offer Title",class:"search-con"},null,8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(y,{modelValue:o(t).searchData.channel,"onUpdate:modelValue":l[10]||(l[10]=e=>o(t).searchData.channel=e),placeholder:"Channel",class:"search-con"},null,8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(y,{modelValue:o(t).searchData.country,"onUpdate:modelValue":l[11]||(l[11]=e=>o(t).searchData.country=e),placeholder:"Country",class:"search-con"},null,8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(y,{modelValue:o(t).searchData.pid,"onUpdate:modelValue":l[12]||(l[12]=e=>o(t).searchData.pid=e),placeholder:"Pid",class:"search-con"},null,8,["modelValue"])]),_:1}),a(f,{label:""},{default:r(()=>[a(b,{modelValue:o(t).searchData.channel_type,"onUpdate:modelValue":l[13]||(l[13]=e=>o(t).searchData.channel_type=e),clearable:"",class:"search-con",placeholder:"Channel Type"},{default:r(()=>[(p(!0),g(V,null,C(o(t).options.channel_type,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),d("div",Ie,[a(f,{class:"mr-0",style:{"margin-right":"0px"}},{default:r(()=>[d("div",Re,[a(i,{type:"primary",onClick:ee},{default:r(()=>[Qe]),_:1}),w(' <el-button type="primary" @click="handleExportSearch">\u5BFC\u51FA</el-button> ')])]),_:1})])]),_:1},8,["modelValue"]),w(` <el-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="searchData.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> `)]),w(" table "),d("div",Ge,[a(ie,{data:o(t).tableData,class:"w100",height:"70vh",border:""},{default:r(()=>[a(c,{fixed:"",prop:"offer_id",label:"Offer ID",align:"center",width:"60"}),a(c,{fixed:"",prop:"adv_offer",label:"Adv Offer",align:"center",width:"87"}),a(c,{fixed:"",prop:"channel",label:"Channel",align:"center",width:"42"}),a(c,{prop:"revenue",label:"Revenue",align:"center",width:"45"}),a(c,{prop:"pkg",label:"Package Name",align:"center",width:"100"}),a(c,{prop:"title",label:"Offer Title",align:"center",width:"90"}),a(c,{prop:"pid",label:"Pid",align:"center",width:"77"}),a(c,{prop:"country",label:"Country",align:"center",width:"40"}),a(c,{label:"Adv Status",align:"center",width:"47"},{default:r(e=>[d("div",null,[d("span",null,D(e.row.adv_status===1?"\u5F00":"\u5173"),1)])]),_:1}),a(c,{prop:"offer_id",label:"Click*w",align:"center",width:"55"},{default:r(e=>{var s;return[d("div",null,[d("span",null,D((s=o(t).options.cvr[e.row.offer_id])==null?void 0:s.click_w),1)])]}),_:1}),a(c,{prop:"offer_id",label:"Installs",align:"center",width:"50"},{default:r(e=>{var s;return[d("div",null,[d("span",null,D((s=o(t).options.cvr[e.row.offer_id])==null?void 0:s.installs),1)])]}),_:1}),a(c,{prop:"offer_id",label:"Cvr*w",align:"center",width:"48"},{default:r(e=>{var s;return[d("div",null,[d("span",null,D((s=o(t).options.cvr[e.row.offer_id])==null?void 0:s.cvr_w),1)])]}),_:1}),a(c,{label:"Target Cvr*w",align:"center",width:"150"},{default:r(e=>[d("div",ze,[a(y,{modelValue:e.row.target_cvr,"onUpdate:modelValue":s=>e.row.target_cvr=s,placeholder:"Please input",class:"input-with-select mr-5"},null,8,["modelValue","onUpdate:modelValue"]),a(i,{class:"mr-5 scale-button",type:"default",icon:"Edit",circle:"",onClick:s=>E(e)},null,8,["onClick"]),a(G,{modelValue:e.row.cvr_status,"onUpdate:modelValue":s=>e.row.cvr_status=s,class:"scale-button","active-value":1,"inactive-value":2,onChange:s=>B(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:1}),a(c,{label:"Traffic Data",align:"left",width:"200"},{default:r(e=>[e.row.traffic?(p(),g("div",Me,[(p(!0),g(V,null,C(JSON.parse(e.row.traffic),s=>(p(),g("div",{key:s},[d("div",null,[d("span",null,D(s.pub_status===1?"\u5F00":"\u5173"),1),Le,d("span",null,D(s.pub),1),Xe,d("span",null,D(s.payout),1),Ze,d("span",null,D(s.cap_daily),1),d("span",null,D(le(e.row,s)),1)])]))),128))])):w("v-if",!0)]),_:1}),a(c,{label:"Operation",align:"center",width:"130"},{default:r(e=>[w(` <router-link :to="getEditUrl(scope)">
              <el-button
                class="cp mr-5"
                type="primary"
                icon="Edit"
                circle
              ></el-button>
            </router-link> `),a(i,{class:"cp mr-5",type:"primary",icon:"Edit",onClick:s=>oe(e.row),circle:""},null,8,["onClick"]),a(G,{modelValue:e.row.status,"onUpdate:modelValue":s=>e.row.status=s,"active-value":1,"inactive-value":2,class:"mr-5",onChange:s=>P(e)},null,8,["modelValue","onUpdate:modelValue","onChange"]),a(ue,{title:"\u5220\u9664\u540E\u65E0\u6CD5\u518D\u751F\u6210\u8BE5Offer ID\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",onConfirm:s=>ae(e)},{reference:r(()=>[a(i,{type:"danger",icon:"Delete",circle:""})]),_:2},1032,["onConfirm"])]),_:1}),a(c,{label:"Platform",align:"center",width:"55"},{default:r(e=>[d("div",null,[d("span",null,D(e.row.platform===1?"Android":"iOS"),1)])]),_:1}),a(c,{prop:"attribute_provider",label:"Attribute Provider",align:"center",width:"80"}),a(c,{label:"Record",align:"center",width:"52"},{default:r(({row:e})=>[a(i,{class:"scale-button",icon:"View",circle:"",onClick:s=>re(e)},null,8,["onClick"])]),_:1}),a(c,{label:"Comment",align:"center",width:"150"},{default:r(e=>[d("div",qe,[a(y,{modelValue:e.row.description,"onUpdate:modelValue":s=>e.row.description=s,placeholder:"Please input",class:"input-with-select mr-5"},null,8,["modelValue","onUpdate:modelValue"]),a(i,{class:"scale-button",type:"default",icon:"Edit",circle:""})])]),_:1})]),_:1},8,["data"])]),w(" \u5206\u9875 "),d("div",Je,[we(a(o(Pe),{page:o(t).pagination.listQuery.page,"onUpdate:page":l[15]||(l[15]=e=>o(t).pagination.listQuery.page=e),limit:o(t).pagination.listQuery.limit,"onUpdate:limit":l[16]||(l[16]=e=>o(t).pagination.listQuery.limit=e),total:o(t).pagination.total,"page-sizes":o(t).pagination.pageSizes,onPagination:N},null,8,["page","limit","total","page-sizes"]),[[Ve,o(t).pagination.total]])]),w(" record "),a(de,{modelValue:o(u),"onUpdate:modelValue":l[18]||(l[18]=e=>Z(u)?u.value=e:u=e),title:"\u65E5\u5FD7",width:"80%","destroy-on-close":""},{default:r(()=>[a(Be,{modelValue:o(u),"onUpdate:modelValue":l[17]||(l[17]=e=>Z(u)?u.value=e:u=e),"bus-data":o(x)},null,8,["modelValue","bus-data"])]),_:1},8,["modelValue"])])}}}));export{na as default};
