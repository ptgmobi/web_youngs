import{Q as e,a as l,k as a,g as t}from"./main-b5709ace.js";const u={flow_source:[{value:1,label:"开发者"},{value:2,label:"ADX"},{value:3,label:"SSP"},{value:4,label:"DSP"}],offer_source:[{value:1,label:"直客"},{value:2,label:"ADX"},{value:3,label:"SSP"},{value:4,label:"DSP"}],flow_type:[{value:"1",label:"in-app"},{value:"2",label:"mobile"},{value:"3",label:"pc web"}],ad_type:[{value:"1",label:"图片"},{value:"2",label:"原生"},{value:"3",label:"视频"}],bidding_agreement:[{value:1,label:"OpenRTB2.3"},{value:2,label:"OpenRTB2.5"},{value:3,label:"OpenRTB3.0"},{value:4,label:"自定义"},{value:5,label:"未知"}],bidding_type:[{value:1,label:"第一高价"},{value:2,label:"第二高价"},{value:3,label:"其它"},{value:4,label:"未知"}],currency:[{value:1,label:"美元USD"},{value:2,label:"人民币CNY"}],status:[{value:1,label:"开"},{value:2,label:"关"}],choice_type_region:[{value:1,label:"包含这些地区"},{value:2,label:"排除这些地区"}],choice_type:[{value:1,label:"包含"},{value:2,label:"排除"}],method:[{value:"head",label:"HEAD"},{value:"get",label:"GET"},{value:"post",label:"POST"}],security:[{value:"http",label:"http"},{value:"https",label:"https"}],is_del:[{value:1,label:"未删除"},{value:2,label:"删除"}],value_type:[{value:"name",label:"名称"},{value:"id",label:"ID"},{value:"token",label:"Token"}],device_type:[{value:"1,4",label:"手机"},{value:"5",label:"平板"},{value:"2",label:"PC"},{value:"3,6,7",label:"其他"},{value:"0",label:"未知"}],platform:[{value:"1",label:"Android"},{value:"2",label:"iOS"},{value:"Windows",label:"Windows"},{value:"MacOS",label:"MacOS"},{value:"0",label:"其他"}]},o=(e,l)=>{let a={};for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const u=e[t];l.includes(t)?a[t]=Number(u):a[t]=u}return a},r=(e,l)=>{let a={};for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const u=e[t];l.includes(t)?a[t]=0===u.length?"":u.join(","):a[t]=u}return a};function b(){const{proxy:b}=t(),n=l();return{handleAjaxNumberKeyFn:o,handleAjaxArrayKeyFn:r,goNewUrl:e=>{const{url:l,query:a}=e;b.$router.push({path:l,query:a})},getRouterData:()=>n.currentRoute.value,getCommonCountryList:async()=>{const l=await e({url:"/c/country",method:"get",isParams:!0}),{data:a}=l;return a.map((e=>(e.id=e.id.toString(),e)))},openAlert:(e,l)=>{let{text:t,title:u,buttonText:o}=e;a.alert(t,u||"温馨提示",{confirmButtonText:o||"OK",callback:e=>{"confirm"===e&&l()}})},setArrayValueToLable:e=>{let l={flow_source:u.flow_source,offer_source:u.offer_source,flow_type:u.flow_type,ad_type:u.ad_type,bidding_agreement:u.bidding_agreement,bidding_type:u.bidding_type,device_type:u.device_type,platform:u.platform};return e.map((e=>{for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)){const t=e[a];if(l.hasOwnProperty(a)){let u=l[a].find((e=>e.value.split(",").includes(t.toString())));u&&(e[a]=u.label)}}return e}))}}}export{b as u};