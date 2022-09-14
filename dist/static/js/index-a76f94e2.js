var a=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(e,l,t)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,r=(a,e)=>{for(var l in e||(e={}))s.call(e,l)&&o(a,l,e[l]);if(t)for(var l of t(e))n.call(e,l)&&o(a,l,e[l]);return a},d=(a,t)=>e(a,l(t));import{d as c,r as u,M as i,N as p,m as v,s as b,n as m,v as g,c as f,p as y,q as h,O as _,P as x,A as w,z as k,b as j,Q as P,_ as V,w as D,x as O,D as S,F as C,I as A}from"./index-43cb2139.js";import{g as Y,a as B,b as M,c as U,d as q,e as G}from"./overview-59246a8c.js";import{_ as I}from"./lodash-937bad3f.js";import{t as $,g as z,a as E}from"./format-15e3f823.js";import{h as F}from"./new-format-74f02ce7.js";import{_ as L}from"./index-3c76d49c.js";import"./moment-9bd84dc2.js";const N={class:"white-bg control-box flex jc-between ai-start p0-0"},Q={class:"flex jc-start flex-wrap"},T={class:"flex"},H=j(" 查询 "),J=c({emits:["emitParent"],setup(a,{emit:e}){const l=u({options:{channel_type:[{value:1,label:"代理"},{value:2,label:"API"},{value:3,label:"直客"},{value:6,label:"Yohoads"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[{value:"",label:""}],channel:[{label:"",value:""}],pkg:[{value:"",label:""}]},data:{channel_type:"",platform:"",channel:"",country:"",pkg:""}}),t=async()=>{const a=await Promise.all([await Y(),B(),M()]),[e,t,s]=a;l.options.country=e.data,l.options.channel=t.data,l.options.pkg=s.data},s=()=>{},n=()=>{},o=()=>{},r=()=>{},d=()=>{},c=()=>{console.warn("set search data"),e("emitParent",I.cloneDeep(P(l.data)))};return i((()=>{t(),c()})),p((()=>{t(),c()})),(a,e)=>{const t=v("el-option"),u=v("el-select"),i=v("el-form-item"),p=v("el-button"),j=v("el-form");return b(),m("div",null,[g("div",N,[f(j,{inline:!0,model:h(l).data,class:"flex jc-between ai-start w100"},{default:y((()=>[g("div",Q,[f(i,{label:"广告主类型"},{default:y((()=>[f(u,{modelValue:h(l).data.channel_type,"onUpdate:modelValue":e[0]||(e[0]=a=>h(l).data.channel_type=a),class:"search-con",clearable:"",placeholder:"搜索",onChange:s},{default:y((()=>[(b(!0),m(_,null,x(h(l).options.channel_type,(a=>(b(),w(t,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(i,{label:"平台"},{default:y((()=>[f(u,{modelValue:h(l).data.platform,"onUpdate:modelValue":e[1]||(e[1]=a=>h(l).data.platform=a),class:"search-con",clearable:"",placeholder:"搜索",filterable:"",onChange:n},{default:y((()=>[k(' <div class="flex jc-between p10 pt-0">\n                <el-button type="primary" plain size="mini" @click="selectAllProduct()">全选</el-button>\n                <el-button size="mini" type="danger" plain @click="unSelectedAllProduct()">清空</el-button>\n              </div> '),(b(!0),m(_,null,x(h(l).options.platform,((a,e)=>(b(),w(t,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(i,{label:"国家"},{default:y((()=>[f(u,{modelValue:h(l).data.country,"onUpdate:modelValue":e[2]||(e[2]=a=>h(l).data.country=a),class:"search-con",clearable:"",placeholder:"搜索",filterable:"",onChange:o},{default:y((()=>[(b(!0),m(_,null,x(h(l).options.country,((a,e)=>(b(),w(t,{key:a.toString(),label:a.toString(),value:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(i,{label:"Channel"},{default:y((()=>[f(u,{modelValue:h(l).data.channel,"onUpdate:modelValue":e[3]||(e[3]=a=>h(l).data.channel=a),class:"search-con",clearable:"",placeholder:"搜索","collapse-tags":"",filterable:"",onChange:r},{default:y((()=>[(b(!0),m(_,null,x(h(l).options.channel,((a,e)=>(b(),w(t,{key:a.toString(),label:a.toString(),value:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(i,{label:"Pkg"},{default:y((()=>[f(u,{modelValue:h(l).data.pkg,"onUpdate:modelValue":e[4]||(e[4]=a=>h(l).data.pkg=a),class:"search-con",clearable:"",placeholder:"搜索","collapse-tags":"",filterable:"",onChange:d},{default:y((()=>[(b(!0),m(_,null,x(h(l).options.pkg,((a,e)=>(b(),w(t,{key:a.toString(),label:a.toString(),value:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),g("div",null,[g("div",T,[f(p,{type:"primary",onClick:c},{default:y((()=>[H])),_:1})])])])),_:1},8,["model"])])])}}});const K=a=>(S("data-v-7f4b3e65"),a=a(),C(),a),R={class:"flex flex-wrap jc-between"},W={class:"card-header"},X={key:0},Z={class:"mt-10 mb-10"},aa={key:0},ea={key:1},la={class:"valueBox"},ta={class:"value-box"},sa=K((()=>g("span",null,"日环比:",-1))),na={class:"value-right"},oa={key:0},ra={key:1},da={key:2},ca={class:"value-val"},ua={class:"valueBox"},ia={class:"value-box"},pa=K((()=>g("span",null,"周同比:",-1))),va={class:"value-right"},ba={key:0},ma={key:1},ga={key:2},fa={class:"value-val"},ya={class:"valueBox"},ha={class:"value-box"},_a=K((()=>g("span",null,"7日均:",-1))),xa={key:0},wa={key:1},ka={class:"valueBox"},ja={class:"value-box"},Pa=K((()=>g("span",null,"30日均:",-1))),Va={key:0},Da={key:1},Oa={key:1},Sa=K((()=>g("div",{class:"mt-10 mb-10",style:{height:"21px"}},null,-1))),Ca={class:"valueBox"},Aa={class:"value-box"},Ya=K((()=>g("span",null,"收入:",-1))),Ba={class:"value-right"},Ma={class:"value-val"},Ua={class:"valueBox"},qa={class:"value-box"},Ga=K((()=>g("span",null,"支出:",-1))),Ia={class:"value-right"},$a={class:"value-val"},za={class:"valueBox"},Ea={class:"value-box"},Fa=K((()=>g("span",null,"毛利:",-1))),La={class:"value-right"},Na={class:"value-val"},Qa={class:"valueBox"},Ta={class:"value-box"},Ha=K((()=>g("span",null,"日均毛利:",-1))),Ja={class:"value-right"},Ka={class:"value-val"};var Ra=V(c({props:{json:{require:!0,default:()=>({}),type:Object}},setup(a){const e=u({baseData:a.json,data:{},titleMap:{yesterday_revenue:"昨日收入",yesterday_gross_profit:"昨日毛利",yesterday_gross_margin:"昨日毛利率",accumulated_month:"本月累计",accumulated_quarter:"本季度累计"},titleGroup:["yesterday_revenue","yesterday_gross_profit","yesterday_gross_margin"],titleGroup1:["accumulated_month","accumulated_quarter"]}),l=a=>{let e=100*Math.abs(a);return`${$(e,2)}%`};return D((()=>e.baseData),((a,l)=>{console.warn("get card data"),(async()=>{e.data=[];let a=r({},e.baseData.data);delete a.date,a=F(a);const{data:l}=await U(a);e.data=l})()}),{deep:!0}),i((()=>{})),(a,t)=>{const s=v("caret-bottom"),n=v("el-icon"),o=v("caret-top"),r=v("el-card");return b(),m("div",null,[g("div",R,[(b(!0),m(_,null,x(h(e).data,((a,t)=>(b(),w(r,{class:"box-card m10"},{header:y((()=>[g("div",W,[g("h3",null,O(h(e).titleMap[t]),1)])])),default:y((()=>[g("div",null,[h(e).titleGroup.includes(t.toString())?(b(),m("div",X,[g("h4",null,O(a.date),1),g("div",Z,[k(" <h2 v-if=\"item.hasOwnProperty('revenue')\">$ {{item.revenue}}</h2>\n              <h2 v-if=\"item.hasOwnProperty('rate')\">{{item.rate * 100}} %</h2> "),"yesterday_gross_margin"!==t.toString()?(b(),m("h2",aa," $ "+O(a.revenue),1)):k("v-if",!0),"yesterday_gross_margin"===t.toString()?(b(),m("h2",ea,O(h($)(100*a.revenue,2))+" % ",1)):k("v-if",!0)]),g("div",la,[g("div",ta,[sa,g("span",na,[a.dod<0?(b(),m("span",oa,[f(n,{class:"el-svg-icon color_down"},{default:y((()=>[f(s)])),_:1})])):k("v-if",!0),a.dod>0?(b(),m("span",ra,[f(n,{class:"el-svg-icon color_up"},{default:y((()=>[f(o)])),_:1})])):(b(),m("span",da)),g("span",ca,O(l(a.dod)),1)])])]),g("div",ua,[g("div",ia,[pa,g("span",va,[a.wow<0?(b(),m("span",ba,[f(n,{class:"el-svg-icon color_down"},{default:y((()=>[f(s)])),_:1})])):k("v-if",!0),a.wow>0?(b(),m("span",ma,[f(n,{class:"el-svg-icon color_up"},{default:y((()=>[f(o)])),_:1})])):(b(),m("span",ga)),g("span",fa,O(l(a.wow)),1)])])]),g("div",ya,[g("div",ha,[_a,"yesterday_gross_margin"!==t.toString()?(b(),m("span",xa,O(a.d7),1)):k("v-if",!0),"yesterday_gross_margin"===t.toString()?(b(),m("span",wa,O(l(a.d7)),1)):k("v-if",!0)])]),g("div",ka,[g("div",ja,[Pa,"yesterday_gross_margin"!==t.toString()?(b(),m("span",Va,O(a.d30),1)):k("v-if",!0),"yesterday_gross_margin"===t.toString()?(b(),m("span",Da,O(l(a.d30)),1)):k("v-if",!0)])])])):k("v-if",!0),h(e).titleGroup1.includes(t.toString())?(b(),m("div",Oa,[g("h4",null,O(a.date),1),Sa,g("div",Ca,[g("div",Aa,[Ya,g("span",Ba,[g("span",Ma,O(a.revenue),1)])])]),g("div",Ua,[g("div",qa,[Ga,g("span",Ia,[g("span",$a,O(a.cost),1)])])]),g("div",za,[g("div",Ea,[Fa,g("span",La,[g("span",Na,O(a.profit),1)])])]),g("div",Qa,[g("div",Ta,[Ha,g("span",Ja,[g("span",Ka,O(a.avg_profit),1)])])])])):k("v-if",!0)])])),_:2},1024)))),256))])])}}}),[["__scopeId","data-v-7f4b3e65"]]);const Wa=c({props:{json:{require:!0,default:{},type:Object}},setup(a){const e=a,l=u({data:{target:5},options:{target:[{value:1,label:"转化"},{value:2,label:"单价"},{value:3,label:"收入"},{value:4,label:"支出"},{value:5,label:"毛利"},{value:6,label:"毛利率(单位为%)"}]}}),t=u({data:e.json,chartData:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{show:!0,backgroundColor:"#6a7985"}}},legend:{show:!0,data:["all"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],series:[{name:"",type:"line",stack:"Total",emphasis:{focus:"series"},data:[]}]}});D((()=>t.data),((a,e)=>{console.warn("get chart data"),n()}),{deep:!0});const s=["6"],n=async()=>{var a,e;let n=d(r({},t.data.data),{target:l.data.target});n=F(n),t.chartData.xAxis[0].data=[],t.chartData.series[0].data=[];const o=(()=>{var a;let e=l.options.target.find((a=>a.value===l.data.target));return null!=(a=null==e?void 0:e.label)?a:"test"})();t.chartData.legend.data=[o],t.chartData.series[0].name=o;const{data:c}=await q(n);t.chartData.xAxis[0].data=null!=(a=null==c?void 0:c.date)?a:[];let u=null!=(e=null==c?void 0:c.data)?e:[];if(s.includes(l.data.target.toString())){let a=u.map((a=>$(100*a,2)));t.chartData.series[0].data=a}else{let a=u.map((a=>$(a,2)));t.chartData.series[0].data=a}};return(a,e)=>{const s=v("el-option"),o=v("el-select"),r=v("el-form-item"),d=v("el-form");return b(),m("div",null,[g("div",null,[f(d,{inline:!0,model:h(l).data,class:"flex jc-between w100"},{default:y((()=>[f(r,{label:"指标"},{default:y((()=>[f(o,{modelValue:h(l).data.target,"onUpdate:modelValue":e[0]||(e[0]=a=>h(l).data.target=a),placeholder:"Select",onChange:n},{default:y((()=>[(b(!0),m(_,null,x(h(l).options.target,(a=>(b(),w(s,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])]),g("div",null,[f(h(L),{"chart-data":h(t).chartData},null,8,["chart-data"])])])}}}),Xa={class:"control-box mt-20"},Za={class:"flex jc-start"},ae=c({emits:["emitParent"],setup(a,{emit:e}){let l=u({shortcuts:[{text:"今天",value:z(0,"day")},{text:"昨天",value:()=>E(1,1,"day")},{text:"最近7天",value:()=>z(6,"day")},{text:"最近30天",value:()=>z(29,"day")}],data:{search:{date:z(6,"day")}}});return D((()=>l.data.search.date),((a,t)=>{console.warn("set search date"),e("emitParent",[...l.data.search.date])}),{immediate:!0}),(a,e)=>{const t=v("el-date-picker"),s=v("el-form-item"),n=v("el-form");return b(),m("div",Xa,[f(n,{inline:!0,model:h(l).data,class:"flex jc-between"},{default:y((()=>[g("div",Za,[f(s,{label:"日期选择"},{default:y((()=>[f(t,{modelValue:h(l).data.search.date,"onUpdate:modelValue":e[0]||(e[0]=a=>h(l).data.search.date=a),class:"mr-10 mb-10",type:"daterange","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",shortcuts:h(l).shortcuts,clearable:!1},null,8,["modelValue","shortcuts"])])),_:1})])])),_:1},8,["model"])])}}}),ee={class:"mt-20"},le=c({props:{json:{require:!0,default:{},type:Object}},setup(a){let e=u({data:a.json,list:[]});D((()=>e.data),((a,e)=>{console.warn("get table data"),l()}),{deep:!0});const l=async()=>{let a=r({},e.data.data);a=F(a),e.list=[];const{data:l}=await G(a);e.list=l};let t=A((()=>{let a=[];return e.list.map((e=>{let l={},t=r({},e);for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)){const e=t[a];a.includes("rate")?l[a]=`${$(100*e,2)}%`:l[a]=$(e,2)}a.push(l)})),a}));return(a,e)=>{const l=v("el-table-column"),s=v("el-table");return b(),m("div",ee,[k(" table "),f(s,{center:"",data:h(t),class:"w100",height:"87vh",border:""},{default:y((()=>[f(l,{fixed:"",prop:"date",label:"日期",align:"center"}),k(' <el-table-column fixed prop="type" label="广告主类型" align="center"></el-table-column>\n      <el-table-column prop="channel" label="Channel" align="center"></el-table-column>\n      <el-table-column prop="platform" label="平台" align="center"></el-table-column>\n      <el-table-column prop="country" label="国家" align="center"></el-table-column>\n      <el-table-column prop="pkg" label="Pkg" align="center"></el-table-column> '),f(l,{prop:"conversion",label:"转化数",align:"center"}),f(l,{prop:"revenue",label:"收入",align:"center"}),f(l,{prop:"cost",label:"支出",align:"center"}),f(l,{prop:"profit",label:"毛利",align:"center"}),f(l,{prop:"profit_rate",label:"毛利率",align:"center"})])),_:1},8,["data"])])}}}),te={class:"app-container"},se=c({name:"Overview"}),ne=c(d(r({},se),{setup(a){let e=u({data:{channel_type:[],platform:[],channel:[],country:[],pkg:[],st:"",et:""}}),l=u({data:{channel_type:[],platform:[],channel:[],country:[],pkg:[]}}),t=u({data:{st:"",et:""}});const s=a=>{l.data=r({},a),e.data=r(r({},l.data),t.data)},n=a=>{t.data={st:a[0],et:a[1]},e.data=r(r({},l.data),t.data)};return(a,t)=>(b(),m("div",te,[f(h(J),{onEmitParent:s}),f(h(Ra),{json:h(l)},null,8,["json"]),f(h(ae),{onEmitParent:n}),f(h(Wa),{json:h(e)},null,8,["json"]),f(h(le),{json:h(e)},null,8,["json"])]))}}));export{ne as default};
