var de=Object.defineProperty,ce=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var L=(_,u,v)=>u in _?de(_,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):_[u]=v,$=(_,u)=>{for(var v in u||(u={}))fe.call(u,v)&&L(_,v,u[v]);if(M)for(var v of M(u))me.call(u,v)&&L(_,v,u[v]);return _},X=(_,u)=>ce(_,pe(u));import{d as I,z as R,w as be,C as Z,r as f,o as p,k as h,x as a,h as n,j as o,f as _e,a as Q,am as ve,g as he,af as ge,an as De,v as d,i as y,N as ye,O as we,ae as q,F as C,l as k,t as g,y as F,c as U}from"./vendor-f1931894.js";import{g as Ve,h as Ce,i as ke,j as xe,k as Oe,l as Ue,m as Fe,n as Ae,o as je}from"./fenix-15b69bd4.js";import{P as Se}from"./index-7d282953.js";import{h as S}from"./moment-1cf83a0b.js";import{m as P}from"./message-c1123ca0.js";import{a as J,o as Pe}from"./new-format-e3b038cd.js";import"./index-482e3000.js";const Be=I({props:{busData:{require:!0,default:()=>({}),type:Object}},setup(_){const u=_,A=R({tableData:[{}]}),G=async()=>{const j={offer_id:u.busData.offer.offer_id};A.tableData=[];const{data:l}=await Ve(j),x=l.sort((O,B)=>{const E=Number(S(O.date,S.ISO_8601).format("X")),N=Number(S(B.date,S.ISO_8601).format("X"));return E-N});A.tableData=x};return be(()=>u.busData.offer.offer_id,(j,l)=>{},{immediate:!0}),Z(()=>{console.log(u.busData),G()}),(j,l)=>{const x=f("el-table-column"),O=f("el-table");return p(),h("div",null,[a(O,{data:o(A).tableData,style:{width:"100%"},border:""},{default:n(()=>[a(x,{fixed:"",prop:"date",label:"Date",align:"center"}),a(x,{fixed:"",prop:"record",label:"Record",align:"center"}),a(x,{fixed:"",prop:"email",label:"User",align:"center"})]),_:1},8,["data"])])}}}),Ee={class:"control-box w100 mb-10"},Ne={class:"mb-10"},Te=F(" Offer Create "),$e={class:"flex jc-start flex-wrap w100"},Ie={class:"flex"},Re={class:"flex"},Qe=F(" \u67E5\u8BE2 "),Ge={class:"body-box mt-10"},ze={class:"flex"},Me={key:0},Le=F(" . "),Xe=F(" . "),Ze=F(" . "),qe={class:"flex"},Je={class:"w100 flex"},Ke=I({name:"fenix-offer-list"}),na=I(X($({},Ke),{setup(_){_e(),Q(!0);let u=Q(!1);Q(!1);const l=R({searchData:{adv_status:void 0,status:void 0,cvr_status:void 0,platform:void 0,attribute_provider:"",pub_name:"",offer_id:"",adv_offer:"",pkg:"",title:"",channel:"",country:"",channel_type:void 0},tableData:[],options:{status:[{value:"1",label:"\u5F00"},{value:"2",label:"\u5173"}],platform:[{value:"1",label:"Android"},{value:"2",label:"iOS"}],attribute_provider:[{value:"AppsFlyer",label:"AppsFlyer"},{value:"Branch",label:"Branch"},{value:"Adjust",label:"Adjust"},{value:"Singular",label:"Singular"},{value:"AppMetrica",label:"AppMetrica"}],pub:[{id:0,pub_name:""}],channel_type:[{value:"1",label:"BUZZ"},{value:"2",label:"SDK"}],dailyCapCount:{},cvr:{}},pagination:{pageSizes:["20","50","100","500","1000"],total:1,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"}}});let O=R({});ve(l,"tableData");const B=async({row:s})=>{console.log(s);const t={id:s.id,status:s.status},i=await ke(t);P(i)||(s.status=s.status===1?2:1)},E=async({row:s})=>{let t={id:s.id,cvr_status:s.cvr_status};t=J(t);const i=await xe(t);P(i)||(s.cvr_status=s.cvr_status===1?2:1)},N=async({row:s})=>{let t={id:s.id,target_cvr:s.target_cvr};t=J(t);const i=await Oe(t);P(i)},K=async()=>{const{data:s}=await Ue();l.options.pub=s},H=async()=>{const{data:s}=await Fe(),t={};for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i)){const m=s[i].split("_"),w={click_w:m[0],installs:m[1],cvr_w:m[2]};t[i]=w}l.options.cvr=t},W=async()=>{const{data:s}=await Ae();l.options.dailyCapCount=s},Y=async()=>Promise.all([K(),W(),H()]),T=async()=>{let s={page:l.pagination.listQuery.page,limit:l.pagination.listQuery.limit};const t=$({},l.searchData);for(const D in t)if(Object.prototype.hasOwnProperty.call(t,D)){const m=t[D];m&&(s[D]=m)}const i=await Ce(s);l.tableData=i.data.data,l.pagination.total=i.data.paging.count},ee=()=>{T()},ae=async s=>{const{row:t}=s,i=await je(t.id);P(i)&&l.tableData.splice(s.$index,1)},le=(s,t)=>{let i="";i=`${s.offer_id}_${t.slotid}`;const D=l.options.dailyCapCount[i];return D?`: ${D}`:""},te=s=>`/fenix/offer/edit/${s.id}`,oe=s=>{let t=te(s);Pe(t)};he(()=>{}),Z(()=>{Y(),T(),window.onpopstate=()=>{console.log("onpopstate")}}),ge(()=>{console.log("onActivated")}),De(()=>{});const ne=s=>{O.offer=s,u.value=!0};return(s,t)=>{const i=f("el-button"),D=f("router-link"),m=f("el-option"),w=f("el-select"),b=f("el-form-item"),V=f("el-input"),se=f("el-form"),c=f("el-table-column"),z=f("el-switch"),re=f("el-popconfirm"),ue=f("el-table"),ie=f("el-dialog");return p(),h("div",null,[d("div",Ee,[d("div",Ne,[a(D,{to:"/fenix/offer/create"},{default:n(()=>[a(i,{type:"primary"},{default:n(()=>[Te]),_:1})]),_:1}),y(` <el-button type="primary" @click="createFn()">
          Offer Create
        </el-button> `)]),a(se,{modelValue:o(l).searchData,"onUpdate:modelValue":t[12]||(t[12]=e=>o(l).searchData=e),inline:!0,class:"flex jc-between w100 ai-end"},{default:n(()=>[d("div",$e,[a(b,{label:""},{default:n(()=>[a(w,{modelValue:o(l).searchData.adv_status,"onUpdate:modelValue":t[0]||(t[0]=e=>o(l).searchData.adv_status=e),clearable:"",class:"search-con",placeholder:"Adv Status"},{default:n(()=>[(p(!0),h(C,null,k(o(l).options.status,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(w,{modelValue:o(l).searchData.status,"onUpdate:modelValue":t[1]||(t[1]=e=>o(l).searchData.status=e),clearable:"",class:"search-con",placeholder:"Status"},{default:n(()=>[(p(!0),h(C,null,k(o(l).options.status,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),y(` <el-form-item label="">
            <el-select v-model="state.searchData.cvr_status" clearable class="search-con" placeholder="Cvr Status">
              <el-option
                v-for="item in state.options.status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item> `),a(b,{label:""},{default:n(()=>[a(w,{modelValue:o(l).searchData.platform,"onUpdate:modelValue":t[2]||(t[2]=e=>o(l).searchData.platform=e),clearable:"",class:"search-con",placeholder:"Platform"},{default:n(()=>[(p(!0),h(C,null,k(o(l).options.platform,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(w,{modelValue:o(l).searchData.attribute_provider,"onUpdate:modelValue":t[3]||(t[3]=e=>o(l).searchData.attribute_provider=e),clearable:"",class:"search-con",placeholder:"Attribute Provider"},{default:n(()=>[(p(!0),h(C,null,k(o(l).options.attribute_provider,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(w,{modelValue:o(l).searchData.pub_name,"onUpdate:modelValue":t[4]||(t[4]=e=>o(l).searchData.pub_name=e),clearable:"",class:"search-con",placeholder:"Pub Name"},{default:n(()=>[(p(!0),h(C,null,k(o(l).options.pub,e=>{var r;return p(),U(m,{key:e.id,label:e.pub_name,value:(r=e.pub_name)!=null?r:e.id},null,8,["label","value"])}),128))]),_:1},8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(V,{modelValue:o(l).searchData.offer_id,"onUpdate:modelValue":t[5]||(t[5]=e=>o(l).searchData.offer_id=e),placeholder:"Offer ID",class:"search-con"},null,8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(V,{modelValue:o(l).searchData.adv_offer,"onUpdate:modelValue":t[6]||(t[6]=e=>o(l).searchData.adv_offer=e),placeholder:"Adv Offer",class:"search-con"},null,8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(V,{modelValue:o(l).searchData.pkg,"onUpdate:modelValue":t[7]||(t[7]=e=>o(l).searchData.pkg=e),placeholder:"Pachage Name",class:"search-con"},null,8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(V,{modelValue:o(l).searchData.title,"onUpdate:modelValue":t[8]||(t[8]=e=>o(l).searchData.title=e),placeholder:"Offer Title",class:"search-con"},null,8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(V,{modelValue:o(l).searchData.channel,"onUpdate:modelValue":t[9]||(t[9]=e=>o(l).searchData.channel=e),placeholder:"Channel",class:"search-con"},null,8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(V,{modelValue:o(l).searchData.country,"onUpdate:modelValue":t[10]||(t[10]=e=>o(l).searchData.country=e),placeholder:"Country",class:"search-con"},null,8,["modelValue"])]),_:1}),a(b,{label:""},{default:n(()=>[a(w,{modelValue:o(l).searchData.channel_type,"onUpdate:modelValue":t[11]||(t[11]=e=>o(l).searchData.channel_type=e),clearable:"",class:"search-con",placeholder:"Channel Type"},{default:n(()=>[(p(!0),h(C,null,k(o(l).options.channel_type,e=>(p(),U(m,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),d("div",Ie,[a(b,{class:"mr-0",style:{"margin-right":"0px"}},{default:n(()=>[d("div",Re,[a(i,{type:"primary",onClick:ee},{default:n(()=>[Qe]),_:1}),y(' <el-button type="primary" @click="handleExportSearch">\u5BFC\u51FA</el-button> ')])]),_:1})])]),_:1},8,["modelValue"]),y(` <el-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="searchData.data" class='search-input'>
        <el-button slot="append" icon="Search" @click='searchFun'></el-button>
      </el-input> `)]),y(" table "),d("div",Ge,[a(ue,{data:o(l).tableData,class:"w100",height:"70vh",border:""},{default:n(()=>[a(c,{fixed:"",prop:"offer_id",label:"Offer ID",align:"center",width:"60"}),a(c,{fixed:"",prop:"adv_offer",label:"Adv Offer",align:"center",width:"87"}),a(c,{fixed:"",prop:"channel",label:"Channel",align:"center",width:"42"}),a(c,{prop:"revenue",label:"Revenue",align:"center",width:"45"}),a(c,{prop:"pkg",label:"Package Name",align:"center",width:"100"}),a(c,{prop:"title",label:"Offer Title",align:"center",width:"90"}),a(c,{prop:"pid",label:"Pid",align:"center",width:"77"}),a(c,{prop:"country",label:"Country",align:"center",width:"40"}),a(c,{label:"Adv Status",align:"center",width:"47"},{default:n(e=>[d("div",null,[d("span",null,g(e.row.adv_status===1?"\u5F00":"\u5173"),1)])]),_:1}),a(c,{prop:"offer_id",label:"Click*w",align:"center",width:"55"},{default:n(e=>{var r;return[d("div",null,[d("span",null,g((r=o(l).options.cvr[e.row.offer_id])==null?void 0:r.click_w),1)])]}),_:1}),a(c,{prop:"offer_id",label:"Installs",align:"center",width:"50"},{default:n(e=>{var r;return[d("div",null,[d("span",null,g((r=o(l).options.cvr[e.row.offer_id])==null?void 0:r.installs),1)])]}),_:1}),a(c,{prop:"offer_id",label:"Cvr*w",align:"center",width:"48"},{default:n(e=>{var r;return[d("div",null,[d("span",null,g((r=o(l).options.cvr[e.row.offer_id])==null?void 0:r.cvr_w),1)])]}),_:1}),a(c,{label:"Target Cvr*w",align:"center",width:"150"},{default:n(e=>[d("div",ze,[a(V,{modelValue:e.row.target_cvr,"onUpdate:modelValue":r=>e.row.target_cvr=r,placeholder:"Please input",class:"input-with-select mr-5"},null,8,["modelValue","onUpdate:modelValue"]),a(i,{class:"mr-5 scale-button",type:"default",icon:"Edit",circle:"",onClick:r=>N(e)},null,8,["onClick"]),a(z,{modelValue:e.row.cvr_status,"onUpdate:modelValue":r=>e.row.cvr_status=r,class:"scale-button","active-value":1,"inactive-value":2,onChange:r=>E(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),_:1}),a(c,{label:"Traffic Data",align:"left",width:"200"},{default:n(e=>[e.row.traffic?(p(),h("div",Me,[(p(!0),h(C,null,k(JSON.parse(e.row.traffic),r=>(p(),h("div",{key:r},[d("div",null,[d("span",null,g(r.pub_status===1?"\u5F00":"\u5173"),1),Le,d("span",null,g(r.pub),1),Xe,d("span",null,g(r.payout),1),Ze,d("span",null,g(r.cap_daily),1),d("span",null,g(le(e.row,r)),1)])]))),128))])):y("v-if",!0)]),_:1}),a(c,{label:"Operation",align:"center",width:"130"},{default:n(e=>[y(` <router-link :to="getEditUrl(scope)">
              <el-button
                class="cp mr-5"
                type="primary"
                icon="Edit"
                circle
              ></el-button>
            </router-link> `),a(i,{class:"cp mr-5",type:"primary",icon:"Edit",onClick:r=>oe(e.row),circle:""},null,8,["onClick"]),a(z,{modelValue:e.row.status,"onUpdate:modelValue":r=>e.row.status=r,"active-value":1,"inactive-value":2,class:"mr-5",onChange:r=>B(e)},null,8,["modelValue","onUpdate:modelValue","onChange"]),a(re,{title:"\u5220\u9664\u540E\u65E0\u6CD5\u518D\u751F\u6210\u8BE5Offer ID\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",onConfirm:r=>ae(e)},{reference:n(()=>[a(i,{type:"danger",icon:"Delete",circle:""})]),_:2},1032,["onConfirm"])]),_:1}),a(c,{label:"Platform",align:"center",width:"55"},{default:n(e=>[d("div",null,[d("span",null,g(e.row.platform===1?"Android":"iOS"),1)])]),_:1}),a(c,{prop:"attribute_provider",label:"Attribute Provider",align:"center",width:"80"}),a(c,{label:"Record",align:"center",width:"52"},{default:n(({row:e})=>[a(i,{class:"scale-button",icon:"View",circle:"",onClick:r=>ne(e)},null,8,["onClick"])]),_:1}),a(c,{label:"Comment",align:"center",width:"150"},{default:n(e=>[d("div",qe,[a(V,{modelValue:e.row.description,"onUpdate:modelValue":r=>e.row.description=r,placeholder:"Please input",class:"input-with-select mr-5"},null,8,["modelValue","onUpdate:modelValue"]),a(i,{class:"scale-button",type:"default",icon:"Edit",circle:""})])]),_:1})]),_:1},8,["data"])]),y(" \u5206\u9875 "),d("div",Je,[ye(a(o(Se),{page:o(l).pagination.listQuery.page,"onUpdate:page":t[13]||(t[13]=e=>o(l).pagination.listQuery.page=e),limit:o(l).pagination.listQuery.limit,"onUpdate:limit":t[14]||(t[14]=e=>o(l).pagination.listQuery.limit=e),total:o(l).pagination.total,"page-sizes":o(l).pagination.pageSizes,onPagination:T},null,8,["page","limit","total","page-sizes"]),[[we,o(l).pagination.total]])]),y(" record "),a(ie,{modelValue:o(u),"onUpdate:modelValue":t[16]||(t[16]=e=>q(u)?u.value=e:u=e),title:"\u65E5\u5FD7",width:"80%","destroy-on-close":""},{default:n(()=>[a(Be,{modelValue:o(u),"onUpdate:modelValue":t[15]||(t[15]=e=>q(u)?u.value=e:u=e),"bus-data":o(O)},null,8,["modelValue","bus-data"])]),_:1},8,["modelValue"])])}}}));export{na as default};