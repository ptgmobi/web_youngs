!function(){function e(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function a(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,l=[],o=!0,u=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(c){u=!0,r=c}finally{try{o||null==a.return||a.return()}finally{if(u)throw r}}return l}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t,a,n,r,l,o){try{var u=e[l](o),c=u.value}catch(i){return void a(i)}u.done?t(c):Promise.resolve(c).then(n,r)}function c(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function o(e){u(l,n,r,o,c,"next",e)}function c(e){u(l,n,r,o,c,"throw",e)}o(void 0)}))}}var i=document.createElement("style");i.innerHTML=".box-card[data-v-7f4b3e65]{width:240px;height:280px}.box-card .valueBox[data-v-7f4b3e65]{overflow:hidden}.box-card .valueBox .value-box[data-v-7f4b3e65]{margin:8px 0;display:flex;justify-content:space-between}.box-card .valueBox .value-box .value-right[data-v-7f4b3e65]{width:120px;display:flex;justify-content:space-between;align-items:flex-end}.box-card .valueBox .value-box .value-right .value-val[data-v-7f4b3e65]{width:100%;margin-left:10px;text-align:right;overflow:hidden}\n",document.head.appendChild(i),System.register(["./vendor-legacy-b450b3b1.js","./overview-legacy-f55d9355.js","./lodash-legacy-fefaf296.js","./format-legacy-80917348.js","./new-format-legacy-de761e84.js","./index-legacy-a4b15707.js","./index-legacy-e27c682c.js","./moment-legacy-905ec324.js"],(function(t){"use strict";var n,l,o,u,i,s,d,f,p,v,b,m,y,g,h,x,_,w,j,k,O,S,P,D,V,A,C,B,M,Y,R,U,E,I,q;return{setters:[function(e){n=e.d,l=e.z,o=e.C,u=e.ae,i=e.r,s=e.o,d=e.k,f=e.v,p=e.x,v=e.h,b=e.j,m=e.F,y=e.l,g=e.i,h=e.y,x=e.af,_=e.c,w=e.w,j=e.t,k=e.q,O=e.s,S=e.b},function(e){P=e.g,D=e.a,V=e.b,A=e.c,C=e.d,B=e.e},function(e){M=e._},function(e){Y=e.t,R=e.g,U=e.a},function(e){E=e.h},function(e){I=e._},function(e){q=e._},function(){}],execute:function(){var G={class:"white-bg control-box flex jc-between ai-start p0-0"},T={class:"flex jc-start flex-wrap"},z={class:"flex"},$=h(" 查询 "),L=n({emits:["emitParent"],setup:function(e,t){var a=t.emit,n=l({options:{channel_type:[{value:1,label:"代理"},{value:2,label:"API"},{value:3,label:"直客"},{value:6,label:"Yohoads"}],platform:[{value:1,label:"Android"},{value:2,label:"iOS"}],country:[{value:"",label:""}],channel:[{label:"",value:""}],pkg:[{value:"",label:""}]},data:{channel_type:"",platform:"",channel:"",country:"",pkg:""}}),h=function(){var e=c(regeneratorRuntime.mark((function e(){var t,a,l,o,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Promise,e.next=3,P();case 3:return e.t1=e.sent,e.t2=D(),e.t3=V(),e.t4=[e.t1,e.t2,e.t3],e.next=9,e.t0.all.call(e.t0,e.t4);case 9:t=e.sent,a=r(t,3),l=a[0],o=a[1],u=a[2],n.options.country=l.data,n.options.channel=o.data,n.options.pkg=u.data;case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){},j=function(){},k=function(){},O=function(){},S=function(){},A=function(){console.warn("set search data"),a("emitParent",M.cloneDeep(x(n.data)))};return o((function(){h(),A()})),u((function(){h(),A()})),function(e,t){var a=i("el-option"),r=i("el-select"),l=i("el-form-item"),o=i("el-button"),u=i("el-form");return s(),d("div",null,[f("div",G,[p(u,{inline:!0,model:b(n).data,class:"flex jc-between ai-start w100"},{default:v((function(){return[f("div",T,[p(l,{label:"广告主类型"},{default:v((function(){return[p(r,{modelValue:b(n).data.channel_type,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b(n).data.channel_type=e}),class:"search-con",clearable:"",placeholder:"搜索",onChange:w},{default:v((function(){return[(s(!0),d(m,null,y(b(n).options.channel_type,(function(e){return s(),_(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),p(l,{label:"平台"},{default:v((function(){return[p(r,{modelValue:b(n).data.platform,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b(n).data.platform=e}),class:"search-con",clearable:"",placeholder:"搜索",filterable:"",onChange:j},{default:v((function(){return[g(' <div class="flex jc-between p10 pt-0">\n                <el-button type="primary" plain size="mini" @click="selectAllProduct()">全选</el-button>\n                <el-button size="mini" type="danger" plain @click="unSelectedAllProduct()">清空</el-button>\n              </div> '),(s(!0),d(m,null,y(b(n).options.platform,(function(e,t){return s(),_(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),p(l,{label:"国家"},{default:v((function(){return[p(r,{modelValue:b(n).data.country,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b(n).data.country=e}),class:"search-con",clearable:"",placeholder:"搜索",filterable:"",onChange:k},{default:v((function(){return[(s(!0),d(m,null,y(b(n).options.country,(function(e,t){return s(),_(a,{key:e.toString(),label:e.toString(),value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),p(l,{label:"Channel"},{default:v((function(){return[p(r,{modelValue:b(n).data.channel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return b(n).data.channel=e}),class:"search-con",clearable:"",placeholder:"搜索","collapse-tags":"",filterable:"",onChange:O},{default:v((function(){return[(s(!0),d(m,null,y(b(n).options.channel,(function(e,t){return s(),_(a,{key:e.toString(),label:e.toString(),value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),p(l,{label:"Pkg"},{default:v((function(){return[p(r,{modelValue:b(n).data.pkg,"onUpdate:modelValue":t[4]||(t[4]=function(e){return b(n).data.pkg=e}),class:"search-con",clearable:"",placeholder:"搜索","collapse-tags":"",filterable:"",onChange:S},{default:v((function(){return[(s(!0),d(m,null,y(b(n).options.pkg,(function(e,t){return s(),_(a,{key:e.toString(),label:e.toString(),value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]),f("div",null,[f("div",z,[p(o,{type:"primary",onClick:A},{default:v((function(){return[$]})),_:1})])])]})),_:1},8,["model"])])])}}}),F=function(e){return k("data-v-7f4b3e65"),e=e(),O(),e},H={class:"flex flex-wrap jc-between"},J={class:"card-header"},K={key:0},N={class:"mt-10 mb-10"},Q={key:0},W={key:1},X={class:"valueBox"},Z={class:"value-box"},ee=F((function(){return f("span",null,"日环比:",-1)})),te={class:"value-right"},ae={key:0},ne={key:1},re={key:2},le={class:"value-val"},oe={class:"valueBox"},ue={class:"value-box"},ce=F((function(){return f("span",null,"周同比:",-1)})),ie={class:"value-right"},se={key:0},de={key:1},fe={key:2},pe={class:"value-val"},ve={class:"valueBox"},be={class:"value-box"},me=F((function(){return f("span",null,"7日均:",-1)})),ye={key:0},ge={key:1},he={class:"valueBox"},xe={class:"value-box"},_e=F((function(){return f("span",null,"30日均:",-1)})),we={key:0},je={key:1},ke={key:1},Oe=F((function(){return f("div",{class:"mt-10 mb-10",style:{height:"21px"}},null,-1)})),Se={class:"valueBox"},Pe={class:"value-box"},De=F((function(){return f("span",null,"收入:",-1)})),Ve={class:"value-right"},Ae={class:"value-val"},Ce={class:"valueBox"},Be={class:"value-box"},Me=F((function(){return f("span",null,"支出:",-1)})),Ye={class:"value-right"},Re={class:"value-val"},Ue={class:"valueBox"},Ee={class:"value-box"},Ie=F((function(){return f("span",null,"毛利:",-1)})),qe={class:"value-right"},Ge={class:"value-val"},Te={class:"valueBox"},ze={class:"value-box"},$e=F((function(){return f("span",null,"日均毛利:",-1)})),Le={class:"value-right"},Fe={class:"value-val"},He=n({props:{json:{require:!0,default:function(){return{}},type:Object}},setup:function(e){var t=l({baseData:e.json,data:{},titleMap:{yesterday_revenue:"昨日收入",yesterday_gross_profit:"昨日毛利",yesterday_gross_margin:"昨日毛利率",accumulated_month:"本月累计",accumulated_quarter:"本季度累计"},titleGroup:["yesterday_revenue","yesterday_gross_profit","yesterday_gross_margin"],titleGroup1:["accumulated_month","accumulated_quarter"]}),n=function(e){var t=100*Math.abs(e);return"".concat(Y(t,2),"%")},r=function(){var e=c(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.data=[],delete(n=a({},t.baseData.data)).date,n=E(n),e.next=6,A(n);case 6:r=e.sent,l=r.data,t.data=l;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return w((function(){return t.baseData}),(function(e,t){console.warn("get card data"),r()}),{deep:!0}),o((function(){})),function(e,a){var r=i("caret-bottom"),l=i("el-icon"),o=i("caret-top"),u=i("el-card");return s(),d("div",null,[f("div",H,[(s(!0),d(m,null,y(b(t).data,(function(e,a){return s(),_(u,{class:"box-card m10"},{header:v((function(){return[f("div",J,[f("h3",null,j(b(t).titleMap[a]),1)])]})),default:v((function(){return[f("div",null,[b(t).titleGroup.includes(a.toString())?(s(),d("div",K,[f("h4",null,j(e.date),1),f("div",N,[g(" <h2 v-if=\"item.hasOwnProperty('revenue')\">$ {{item.revenue}}</h2>\n              <h2 v-if=\"item.hasOwnProperty('rate')\">{{item.rate * 100}} %</h2> "),"yesterday_gross_margin"!==a.toString()?(s(),d("h2",Q," $ "+j(e.revenue),1)):g("v-if",!0),"yesterday_gross_margin"===a.toString()?(s(),d("h2",W,j(b(Y)(100*e.revenue,2))+" % ",1)):g("v-if",!0)]),f("div",X,[f("div",Z,[ee,f("span",te,[e.dod<0?(s(),d("span",ae,[p(l,{class:"el-svg-icon color_down"},{default:v((function(){return[p(r)]})),_:1})])):g("v-if",!0),e.dod>0?(s(),d("span",ne,[p(l,{class:"el-svg-icon color_up"},{default:v((function(){return[p(o)]})),_:1})])):(s(),d("span",re)),f("span",le,j(n(e.dod)),1)])])]),f("div",oe,[f("div",ue,[ce,f("span",ie,[e.wow<0?(s(),d("span",se,[p(l,{class:"el-svg-icon color_down"},{default:v((function(){return[p(r)]})),_:1})])):g("v-if",!0),e.wow>0?(s(),d("span",de,[p(l,{class:"el-svg-icon color_up"},{default:v((function(){return[p(o)]})),_:1})])):(s(),d("span",fe)),f("span",pe,j(n(e.wow)),1)])])]),f("div",ve,[f("div",be,[me,"yesterday_gross_margin"!==a.toString()?(s(),d("span",ye,j(e.d7),1)):g("v-if",!0),"yesterday_gross_margin"===a.toString()?(s(),d("span",ge,j(n(e.d7)),1)):g("v-if",!0)])]),f("div",he,[f("div",xe,[_e,"yesterday_gross_margin"!==a.toString()?(s(),d("span",we,j(e.d30),1)):g("v-if",!0),"yesterday_gross_margin"===a.toString()?(s(),d("span",je,j(n(e.d30)),1)):g("v-if",!0)])])])):g("v-if",!0),b(t).titleGroup1.includes(a.toString())?(s(),d("div",ke,[f("h4",null,j(e.date),1),Oe,f("div",Se,[f("div",Pe,[De,f("span",Ve,[f("span",Ae,j(e.revenue),1)])])]),f("div",Ce,[f("div",Be,[Me,f("span",Ye,[f("span",Re,j(e.cost),1)])])]),f("div",Ue,[f("div",Ee,[Ie,f("span",qe,[f("span",Ge,j(e.profit),1)])])]),f("div",Te,[f("div",ze,[$e,f("span",Le,[f("span",Fe,j(e.avg_profit),1)])])])])):g("v-if",!0)])]})),_:2},1024)})),256))])])}}}),Je=I(He,[["__scopeId","data-v-7f4b3e65"]]),Ke=n({props:{json:{require:!0,default:{},type:Object}},setup:function(e){var t=e,n=l({data:{target:5},options:{target:[{value:1,label:"转化"},{value:2,label:"单价"},{value:3,label:"收入"},{value:4,label:"支出"},{value:5,label:"毛利"},{value:6,label:"毛利率(单位为%)"}]}}),r=l({data:t.json,chartData:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{show:!0,backgroundColor:"#6a7985"}}},legend:{show:!0,data:["all"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],series:[{name:"",type:"line",stack:"Total",emphasis:{focus:"series"},data:[]}]}});w((function(){return r.data}),(function(e,t){console.warn("get chart data"),u()}),{deep:!0});var o=["6"],u=function(){var e=c(regeneratorRuntime.mark((function e(){var t,l,u,c,i,s,d,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=a(a({},r.data.data),{},{target:n.data.target}),u=E(u),r.chartData.xAxis[0].data=[],r.chartData.series[0].data=[],v=void 0,b=void 0,b=n.options.target.find((function(e){return e.value===n.data.target})),c=null!==(v=null==b?void 0:b.label)&&void 0!==v?v:"test",r.chartData.legend.data=[c],r.chartData.series[0].name=c,e.next=9,C(u);case 9:i=e.sent,s=i.data,r.chartData.xAxis[0].data=null!==(t=null==s?void 0:s.date)&&void 0!==t?t:[],d=null!==(l=null==s?void 0:s.data)&&void 0!==l?l:[],o.includes(n.data.target.toString())?(f=d.map((function(e){return Y(100*e,2)})),r.chartData.series[0].data=f):(p=d.map((function(e){return Y(e,2)})),r.chartData.series[0].data=p);case 14:case"end":return e.stop()}var v,b}),e)})));return function(){return e.apply(this,arguments)}}();return function(e,t){var a=i("el-option"),l=i("el-select"),o=i("el-form-item"),c=i("el-form");return s(),d("div",null,[f("div",null,[p(c,{inline:!0,model:b(n).data,class:"flex jc-between w100"},{default:v((function(){return[p(o,{label:"指标"},{default:v((function(){return[p(l,{modelValue:b(n).data.target,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b(n).data.target=e}),placeholder:"Select",onChange:u},{default:v((function(){return[(s(!0),d(m,null,y(b(n).options.target,(function(e){return s(),_(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])]),f("div",null,[p(b(q),{"chart-data":b(r).chartData},null,8,["chart-data"])])])}}}),Ne={class:"control-box mt-20"},Qe={class:"flex jc-start"},We=n({emits:["emitParent"],setup:function(t,a){var n=a.emit,r=l({shortcuts:[{text:"今天",value:R(0,"day")},{text:"昨天",value:function(){return U(1,1,"day")}},{text:"最近7天",value:function(){return R(6,"day")}},{text:"最近30天",value:function(){return R(29,"day")}}],data:{search:{date:R(6,"day")}}});return w((function(){return r.data.search.date}),(function(t,a){console.warn("set search date"),n("emitParent",e(r.data.search.date))}),{immediate:!0}),function(e,t){var a=i("el-date-picker"),n=i("el-form-item"),l=i("el-form");return s(),d("div",Ne,[p(l,{inline:!0,model:b(r).data,class:"flex jc-between"},{default:v((function(){return[f("div",Qe,[p(n,{label:"日期选择"},{default:v((function(){return[p(a,{modelValue:b(r).data.search.date,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b(r).data.search.date=e}),class:"mr-10 mb-10",type:"daterange","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",shortcuts:b(r).shortcuts,clearable:!1},null,8,["modelValue","shortcuts"])]})),_:1})])]})),_:1},8,["model"])])}}}),Xe={class:"mt-20"},Ze=n({props:{json:{require:!0,default:{},type:Object}},setup:function(e){var t=l({data:e.json,list:[]});w((function(){return t.data}),(function(e,t){console.warn("get table data"),n()}),{deep:!0});var n=function(){var e=c(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a({},t.data.data),n=E(n),t.list=[],e.next=5,B(n);case 5:r=e.sent,l=r.data,t.list=l;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=S((function(){var e=[];return t.list.map((function(t){var n={},r=a({},t);for(var l in r)if(Object.prototype.hasOwnProperty.call(r,l)){var o=r[l];l.includes("rate")?n[l]="".concat(Y(100*o,2),"%"):n[l]=Y(o,2)}e.push(n)})),e}));return function(e,t){var a=i("el-table-column"),n=i("el-table");return s(),d("div",Xe,[g(" table "),p(n,{center:"",data:b(r),class:"w100",height:"87vh",border:""},{default:v((function(){return[p(a,{fixed:"",prop:"date",label:"日期",align:"center"}),g(' <el-table-column fixed prop="type" label="广告主类型" align="center"></el-table-column>\n      <el-table-column prop="channel" label="Channel" align="center"></el-table-column>\n      <el-table-column prop="platform" label="平台" align="center"></el-table-column>\n      <el-table-column prop="country" label="国家" align="center"></el-table-column>\n      <el-table-column prop="pkg" label="Pkg" align="center"></el-table-column> '),p(a,{prop:"conversion",label:"转化数",align:"center"}),p(a,{prop:"revenue",label:"收入",align:"center"}),p(a,{prop:"cost",label:"支出",align:"center"}),p(a,{prop:"profit",label:"毛利",align:"center"}),p(a,{prop:"profit_rate",label:"毛利率",align:"center"})]})),_:1},8,["data"])])}}}),et={class:"app-container"},tt=n({name:"Overview"});t("default",n(a(a({},tt),{},{setup:function(e){var t=l({data:{channel_type:[],platform:[],channel:[],country:[],pkg:[],st:"",et:""}}),n=l({data:{channel_type:[],platform:[],channel:[],country:[],pkg:[]}}),r=l({data:{st:"",et:""}}),o=function(e){n.data=a({},e),t.data=a(a({},n.data),r.data)},u=function(e){r.data={st:e[0],et:e[1]},t.data=a(a({},n.data),r.data)};return function(e,a){return s(),d("div",et,[p(b(L),{onEmitParent:o}),p(b(Je),{json:b(n)},null,8,["json"]),p(b(We),{onEmitParent:u}),p(b(Ke),{json:b(t)},null,8,["json"]),p(b(Ze),{json:b(t)},null,8,["json"])])}}})))}}}))}();
