var z=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var N=(m,d,a)=>d in m?z(m,d,{enumerable:!0,configurable:!0,writable:!0,value:a}):m[d]=a,F=(m,d)=>{for(var a in d||(d={}))K.call(d,a)&&N(m,a,d[a]);if(q)for(var a of q(d))H.call(d,a)&&N(m,a,d[a]);return m},T=(m,d)=>L(m,R(d));import{d as V,z as j,C as G,af as J,r as f,o as n,k as c,v as e,x as o,h,j as l,F as E,l as A,i as w,y as Q,ag as W,c as P,w as O,t as x,q as X,s as Z,b as ee}from"./vendor-f1931894.js";import{g as ae,a as te,b as le,c as oe,d as ne,e as se}from"./overview-ba6a07fe.js";import{_ as re}from"./lodash-43532635.js";import{t as $,g as M,a as ue}from"./format-b76f9697.js";import{h as U}from"./new-format-b98ea9a0.js";import{_ as ce}from"./index-1abff6b8.js";import{_ as de}from"./index-640a0a05.js";import"./moment-1cf83a0b.js";const ie={class:"white-bg control-box flex jc-between ai-start p0-0"},_e={class:"flex jc-start flex-wrap"},pe={class:"flex"},he=Q(" \u67E5\u8BE2 "),ve=V({emits:["emitParent"],setup(m,{emit:d}){const t=j({options:{channel_type:[{value:1,label:"\u4EE3\u7406"},{value:2,label:"API"},{value:3,label:"\u76F4\u5BA2"},{value:6,label:"Yohoads"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[{value:"",label:""}],channel:[{label:"",value:""}],pkg:[{value:"",label:""}]},data:{channel_type:"",platform:"",channel:"",country:"",pkg:""}}),D=async()=>{const k=await Promise.all([await ae(),te(),le()]),[v,g,C]=k;t.options.country=v.data,t.options.channel=g.data,t.options.pkg=C.data},b=()=>{},r=()=>{},s=()=>{},i=()=>{},_=()=>{},y=()=>{console.warn("set search data"),d("emitParent",re.cloneDeep(W(t.data)))};return G(()=>{console.log("onMounted"),D(),y()}),J(()=>{console.log("onActivated"),D(),y()}),(k,v)=>{const g=f("el-option"),C=f("el-select"),p=f("el-form-item"),B=f("el-button"),I=f("el-form");return n(),c("div",null,[e("div",ie,[o(I,{inline:!0,model:l(t).data,class:"flex jc-between ai-start w100"},{default:h(()=>[e("div",_e,[o(p,{label:"\u5E7F\u544A\u4E3B\u7C7B\u578B"},{default:h(()=>[o(C,{modelValue:l(t).data.channel_type,"onUpdate:modelValue":v[0]||(v[0]=u=>l(t).data.channel_type=u),class:"search-con",clearable:"",placeholder:"\u641C\u7D22",onChange:b},{default:h(()=>[(n(!0),c(E,null,A(l(t).options.channel_type,u=>(n(),P(g,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"\u5E73\u53F0"},{default:h(()=>[o(C,{modelValue:l(t).data.platform,"onUpdate:modelValue":v[1]||(v[1]=u=>l(t).data.platform=u),class:"search-con",clearable:"",placeholder:"\u641C\u7D22",filterable:"",onChange:r},{default:h(()=>[w(` <div class="flex jc-between p10 pt-0">
                <el-button type="primary" plain size="mini" @click="selectAllProduct()">\u5168\u9009</el-button>
                <el-button size="mini" type="danger" plain @click="unSelectedAllProduct()">\u6E05\u7A7A</el-button>
              </div> `),(n(!0),c(E,null,A(l(t).options.platform,(u,Y)=>(n(),P(g,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"\u56FD\u5BB6"},{default:h(()=>[o(C,{modelValue:l(t).data.country,"onUpdate:modelValue":v[2]||(v[2]=u=>l(t).data.country=u),class:"search-con",clearable:"",placeholder:"\u641C\u7D22",filterable:"",onChange:s},{default:h(()=>[(n(!0),c(E,null,A(l(t).options.country,(u,Y)=>(n(),P(g,{key:u.toString(),label:u.toString(),value:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"Channel"},{default:h(()=>[o(C,{modelValue:l(t).data.channel,"onUpdate:modelValue":v[3]||(v[3]=u=>l(t).data.channel=u),class:"search-con",clearable:"",placeholder:"\u641C\u7D22","collapse-tags":"",filterable:"",onChange:i},{default:h(()=>[(n(!0),c(E,null,A(l(t).options.channel,(u,Y)=>(n(),P(g,{key:u.toString(),label:u.toString(),value:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(p,{label:"Pkg"},{default:h(()=>[o(C,{modelValue:l(t).data.pkg,"onUpdate:modelValue":v[4]||(v[4]=u=>l(t).data.pkg=u),class:"search-con",clearable:"",placeholder:"\u641C\u7D22","collapse-tags":"",filterable:"",onChange:_},{default:h(()=>[(n(!0),c(E,null,A(l(t).options.pkg,(u,Y)=>(n(),P(g,{key:u.toString(),label:u.toString(),value:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),e("div",null,[e("div",pe,[o(B,{type:"primary",onClick:y},{default:h(()=>[he]),_:1})])])]),_:1},8,["model"])])])}}});const S=m=>(X("data-v-7f4b3e65"),m=m(),Z(),m),me={class:"flex flex-wrap jc-between"},be={class:"card-header"},ge={key:0},fe={class:"mt-10 mb-10"},ye={key:0},xe={key:1},we={class:"valueBox"},De={class:"value-box"},Be=S(()=>e("span",null,"\u65E5\u73AF\u6BD4:",-1)),Fe={class:"value-right"},ke={key:0},Ce={key:1},je={key:2},Se={class:"value-val"},Ve={class:"valueBox"},Ee={class:"value-box"},Ae=S(()=>e("span",null,"\u5468\u540C\u6BD4:",-1)),Pe={class:"value-right"},$e={key:0},Oe={key:1},Me={key:2},Ye={class:"value-val"},Te={class:"valueBox"},Ue={class:"value-box"},qe=S(()=>e("span",null,"7\u65E5\u5747:",-1)),Ne={key:0},Ge={key:1},Ie={class:"valueBox"},ze={class:"value-box"},Le=S(()=>e("span",null,"30\u65E5\u5747:",-1)),Re={key:0},Ke={key:1},He={key:1},Je=S(()=>e("div",{class:"mt-10 mb-10",style:{height:"21px"}},null,-1)),Qe={class:"valueBox"},We={class:"value-box"},Xe=S(()=>e("span",null,"\u6536\u5165:",-1)),Ze={class:"value-right"},ea={class:"value-val"},aa={class:"valueBox"},ta={class:"value-box"},la=S(()=>e("span",null,"\u652F\u51FA:",-1)),oa={class:"value-right"},na={class:"value-val"},sa={class:"valueBox"},ra={class:"value-box"},ua=S(()=>e("span",null,"\u6BDB\u5229:",-1)),ca={class:"value-right"},da={class:"value-val"},ia={class:"valueBox"},_a={class:"value-box"},pa=S(()=>e("span",null,"\u65E5\u5747\u6BDB\u5229:",-1)),ha={class:"value-right"},va={class:"value-val"},ma=V({props:{json:{require:!0,default:()=>({}),type:Object}},setup(m){const d=m,a=["yesterday_revenue","yesterday_gross_profit","yesterday_gross_margin"],t=["accumulated_month","accumulated_quarter"],D={yesterday_revenue:"\u6628\u65E5\u6536\u5165",yesterday_gross_profit:"\u6628\u65E5\u6BDB\u5229",yesterday_gross_margin:"\u6628\u65E5\u6BDB\u5229\u7387",accumulated_month:"\u672C\u6708\u7D2F\u8BA1",accumulated_quarter:"\u672C\u5B63\u5EA6\u7D2F\u8BA1"},b={},r=j({baseData:d.json,data:b,titleMap:D,titleGroup:a,titleGroup1:t}),s=_=>{let y=Math.abs(_)*100;return`${$(y,2)}%`},i=async()=>{r.data=[];let _=F({},r.baseData.data);delete _.date,_=U(_);const{data:y}=await oe(_);r.data=y};return O(()=>r.baseData,(_,y)=>{console.warn("get card data"),i()},{deep:!0}),G(()=>{}),(_,y)=>{const k=f("caret-bottom"),v=f("el-icon"),g=f("caret-top"),C=f("el-card");return n(),c("div",null,[e("div",me,[(n(!0),c(E,null,A(l(r).data,(p,B)=>(n(),P(C,{class:"box-card m10"},{header:h(()=>[e("div",be,[e("h3",null,x(l(r).titleMap[B]),1)])]),default:h(()=>[e("div",null,[l(r).titleGroup.includes(B.toString())?(n(),c("div",ge,[e("h4",null,x(p.date),1),e("div",fe,[w(` <h2 v-if="item.hasOwnProperty('revenue')">$ {{item.revenue}}</h2>
              <h2 v-if="item.hasOwnProperty('rate')">{{item.rate * 100}} %</h2> `),B.toString()!=="yesterday_gross_margin"?(n(),c("h2",ye," $ "+x(p.revenue),1)):w("v-if",!0),B.toString()==="yesterday_gross_margin"?(n(),c("h2",xe,x(l($)(p.revenue*100,2))+" % ",1)):w("v-if",!0)]),e("div",we,[e("div",De,[Be,e("span",Fe,[p.dod<0?(n(),c("span",ke,[o(v,{class:"el-svg-icon color_down"},{default:h(()=>[o(k)]),_:1})])):w("v-if",!0),p.dod>0?(n(),c("span",Ce,[o(v,{class:"el-svg-icon color_up"},{default:h(()=>[o(g)]),_:1})])):(n(),c("span",je)),e("span",Se,x(s(p.dod)),1)])])]),e("div",Ve,[e("div",Ee,[Ae,e("span",Pe,[p.wow<0?(n(),c("span",$e,[o(v,{class:"el-svg-icon color_down"},{default:h(()=>[o(k)]),_:1})])):w("v-if",!0),p.wow>0?(n(),c("span",Oe,[o(v,{class:"el-svg-icon color_up"},{default:h(()=>[o(g)]),_:1})])):(n(),c("span",Me)),e("span",Ye,x(s(p.wow)),1)])])]),e("div",Te,[e("div",Ue,[qe,B.toString()!=="yesterday_gross_margin"?(n(),c("span",Ne,x(p.d7),1)):w("v-if",!0),B.toString()==="yesterday_gross_margin"?(n(),c("span",Ge,x(s(p.d7)),1)):w("v-if",!0)])]),e("div",Ie,[e("div",ze,[Le,B.toString()!=="yesterday_gross_margin"?(n(),c("span",Re,x(p.d30),1)):w("v-if",!0),B.toString()==="yesterday_gross_margin"?(n(),c("span",Ke,x(s(p.d30)),1)):w("v-if",!0)])])])):w("v-if",!0),l(r).titleGroup1.includes(B.toString())?(n(),c("div",He,[e("h4",null,x(p.date),1),Je,e("div",Qe,[e("div",We,[Xe,e("span",Ze,[e("span",ea,x(p.revenue),1)])])]),e("div",aa,[e("div",ta,[la,e("span",oa,[e("span",na,x(p.cost),1)])])]),e("div",sa,[e("div",ra,[ua,e("span",ca,[e("span",da,x(p.profit),1)])])]),e("div",ia,[e("div",_a,[pa,e("span",ha,[e("span",va,x(p.avg_profit),1)])])])])):w("v-if",!0)])]),_:2},1024))),256))])])}}});var ba=ce(ma,[["__scopeId","data-v-7f4b3e65"]]);const ga=V({props:{json:{require:!0,default:{},type:Object}},setup(m){const d=m,a=j({data:{target:5},options:{target:[{value:1,label:"\u8F6C\u5316"},{value:2,label:"\u5355\u4EF7"},{value:3,label:"\u6536\u5165"},{value:4,label:"\u652F\u51FA"},{value:5,label:"\u6BDB\u5229"},{value:6,label:"\u6BDB\u5229\u7387(\u5355\u4F4D\u4E3A%)"}]}}),t=j({data:d.json,chartData:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{show:!0,backgroundColor:"#6a7985"}}},legend:{show:!0,data:["all"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],series:[{name:"",type:"line",stack:"Total",emphasis:{focus:"series"},data:[]}]}});O(()=>t.data,(s,i)=>{console.warn("get chart data"),r()},{deep:!0});const D=()=>{var i;let s=a.options.target.find(_=>_.value===a.data.target);return(i=s==null?void 0:s.label)!=null?i:""},b=["6"],r=async()=>{var y,k;let s=T(F({},t.data.data),{target:a.data.target});s=U(s),t.chartData.xAxis[0].data=[],t.chartData.series[0].data=[];const{data:i}=await ne(s);t.chartData.xAxis[0].data=(y=i==null?void 0:i.date)!=null?y:[],t.chartData.series[0].name=D();let _=(k=i==null?void 0:i.data)!=null?k:[];if(b.includes(a.data.target.toString())){let v=_.map(g=>$(g*100,2));t.chartData.series[0].data=v}else{let v=_.map(g=>$(g,2));t.chartData.series[0].data=v}};return(s,i)=>{const _=f("el-option"),y=f("el-select"),k=f("el-form-item"),v=f("el-form");return n(),c("div",null,[e("div",null,[o(v,{inline:!0,model:l(a).data,class:"flex jc-between w100"},{default:h(()=>[o(k,{label:"\u6307\u6807"},{default:h(()=>[o(y,{modelValue:l(a).data.target,"onUpdate:modelValue":i[0]||(i[0]=g=>l(a).data.target=g),placeholder:"Select",onChange:r},{default:h(()=>[(n(!0),c(E,null,A(l(a).options.target,g=>(n(),P(_,{key:g.value,label:g.label,value:g.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),e("div",null,[o(l(de),{"chart-data":l(t).chartData},null,8,["chart-data"])])])}}}),fa={class:"control-box mt-20"},ya={class:"flex jc-start"},xa=V({emits:["emitParent"],setup(m,{emit:d}){let a=j({shortcuts:[{text:"\u4ECA\u5929",value:M(0,"day")},{text:"\u6628\u5929",value:()=>ue(1,1,"day")},{text:"\u6700\u8FD17\u5929",value:()=>M(6,"day")},{text:"\u6700\u8FD130\u5929",value:()=>M(29,"day")}],data:{search:{date:M(6,"day")}}});const t=()=>{console.warn("set search date"),d("emitParent",[...a.data.search.date])};return O(()=>a.data.search.date,(D,b)=>{t()},{immediate:!0}),(D,b)=>{const r=f("el-date-picker"),s=f("el-form-item"),i=f("el-form");return n(),c("div",fa,[o(i,{inline:!0,model:l(a).data,class:"flex jc-between"},{default:h(()=>[e("div",ya,[o(s,{label:"\u65E5\u671F\u9009\u62E9"},{default:h(()=>[o(r,{modelValue:l(a).data.search.date,"onUpdate:modelValue":b[0]||(b[0]=_=>l(a).data.search.date=_),class:"mr-10 mb-10",type:"daterange","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65E5\u671F","end-placeholder":"\u7ED3\u675F\u65E5\u671F",shortcuts:l(a).shortcuts,clearable:!1},null,8,["modelValue","shortcuts"])]),_:1})])]),_:1},8,["model"])])}}}),wa={class:"mt-20"},Da=V({props:{json:{require:!0,default:{},type:Object}},setup(m){let a=j({data:m.json,list:[]});O(()=>a.data,(b,r)=>{console.warn("get table data"),t()},{deep:!0});const t=async()=>{let b=F({},a.data.data);b=U(b),a.list=[];const{data:r}=await se(b);a.list=r};let D=ee(()=>{let b=[];return a.list.map(r=>{let s={},i=F({},r);for(const _ in i)if(Object.prototype.hasOwnProperty.call(i,_)){const y=i[_];_.includes("rate")?s[_]=`${$(y*100,2)}%`:s[_]=$(y,2)}b.push(s)}),b});return(b,r)=>{const s=f("el-table-column"),i=f("el-table");return n(),c("div",wa,[w(" table "),o(i,{center:"",data:l(D),class:"w100",height:"87vh",border:""},{default:h(()=>[o(s,{fixed:"",prop:"date",label:"\u65E5\u671F",align:"center"}),w(` <el-table-column fixed prop="type" label="\u5E7F\u544A\u4E3B\u7C7B\u578B" align="center"></el-table-column>
      <el-table-column prop="channel" label="Channel" align="center"></el-table-column>
      <el-table-column prop="platform" label="\u5E73\u53F0" align="center"></el-table-column>
      <el-table-column prop="country" label="\u56FD\u5BB6" align="center"></el-table-column>
      <el-table-column prop="pkg" label="Pkg" align="center"></el-table-column> `),o(s,{prop:"conversion",label:"\u8F6C\u5316\u6570",align:"center"}),o(s,{prop:"revenue",label:"\u6536\u5165",align:"center"}),o(s,{prop:"cost",label:"\u652F\u51FA",align:"center"}),o(s,{prop:"profit",label:"\u6BDB\u5229",align:"center"}),o(s,{prop:"profit_rate",label:"\u6BDB\u5229\u7387",align:"center"})]),_:1},8,["data"])])}}}),Ba={class:"app-container"},Fa=V({name:"Overview"}),Oa=V(T(F({},Fa),{setup(m){let d=j({data:{channel_type:[],platform:[],channel:[],country:[],pkg:[],st:"",et:""}}),a=j({data:{channel_type:[],platform:[],channel:[],country:[],pkg:[]}}),t=j({data:{st:"",et:""}});const D=r=>{console.log(r),a.data=F({},r),d.data=F(F({},a.data),t.data)},b=r=>{console.log(r),t.data={st:r[0],et:r[1]},d.data=F(F({},a.data),t.data)};return(r,s)=>(n(),c("div",Ba,[o(l(ve),{onEmitParent:D}),o(l(ba),{json:l(a)},null,8,["json"]),o(l(xa),{onEmitParent:b}),o(l(ga),{json:l(d)},null,8,["json"]),o(l(Da),{json:l(d)},null,8,["json"])]))}}));export{Oa as default};
