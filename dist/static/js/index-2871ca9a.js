import{d as a,r as e,a1 as l,P as t,L as s,q as d,o as r,c as o,e as u,s as n,z as i,A as m,v as c,N as p,O as v,K as f,x as b}from"./main-0a777472.js";import{g as y,a as x}from"./format-00f0450d.js";import{A as _}from"./dsp-advertiser-4a2a0a9c.js";import{u as h}from"./dsp-ade02a7a.js";const V={class:"mb-10 search-box flex jc-between ai-start"},Y=b("div",{class:"button-box"},null,-1),j=a({__name:"index",props:{arr:{require:!0,default:()=>["adv"],type:Array}},emits:["up"],setup(a,{emit:b}){const j=a,k=h().topsearch;let{adv:D,date:g}=k,w=e({adv:D,date:g||[]}),M=e([{text:"今天",value:y(0,"day")},{text:"昨天",value:()=>x(1,1,"day")},{text:"最近7天",value:()=>y(6,"day")},{text:"最近30天",value:()=>y(29,"day")}]),A=e({advertiser:[{adv_id:"",name:""}]});l((()=>{w.adv,t(w.date);const a=h(),e={};j.arr.map((a=>{e[a]=w[a]})),a.setSearchData(e),b("up",e),h().topsearch}));const U=async()=>{await(async()=>{const{data:{data:a}}=await _({page:1,limit:1e4});A.advertiser=a})()};return s((()=>{U()})),(a,e)=>{const l=d("el-option"),t=d("el-select"),s=d("el-form-item"),b=d("el-date-picker"),y=d("el-form");return r(),o("div",V,[Y,u(y,{modelValue:c(w),"onUpdate:modelValue":e[2]||(e[2]=a=>f(w)?w.value=a:w=a),inline:!0,class:"flex w100 ai-start jc-end"},{default:n((()=>[i(" 广告主 "),j.arr.includes("adv")?(r(),m(s,{key:0,label:""},{default:n((()=>[u(t,{modelValue:c(w).adv,"onUpdate:modelValue":e[0]||(e[0]=a=>c(w).adv=a),filterable:"",clearable:"",placeholder:"请选择广告主"},{default:n((()=>[(r(!0),o(p,null,v(c(A).advertiser,(a=>(r(),m(l,{key:a.adv_id,label:a.name,value:a.adv_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})):i("v-if",!0),j.arr.includes("date")?(r(),m(s,{key:1,label:""},{default:n((()=>[i(" 日期 "),u(b,{modelValue:c(w).date,"onUpdate:modelValue":e[1]||(e[1]=a=>c(w).date=a),class:"mr-10 mb-10",type:"daterange","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",shortcuts:c(M),clearable:!1},null,8,["modelValue","shortcuts"])])),_:1})):i("v-if",!0)])),_:1},8,["modelValue"])])}}});export{j as _};
