var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(l,a,r)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r,t=(e,t)=>{for(var s in t||(t={}))a.call(t,s)&&o(e,s,t[s]);if(l)for(var s of l(t))r.call(t,s)&&o(e,s,t[s]);return e};import{_ as s,d,h as m,r as u,L as i,q as n,o as c,c as p,z as f,e as _,s as v,v as b,x as g,P as y,A as F,y as h,N as V,O as w,K as U,f as x,g as k}from"./main-dae9cd13.js";import{u as j,s as q}from"./useUtils-0c0cc193.js";import{b as z,c as M,d as O,e as P}from"./dsp-advertiser-7caa14fa.js";import{m as L}from"./message-2d1d3f7c.js";import{_ as C}from"./index-d2a78e62.js";import{d as D,e as I}from"./new-format-299c060c.js";import{s as R}from"./validate-31aaa08c.js";import{_ as E}from"./lodash-edd1f566.js";const N={class:"content-con from-one flex column"},S=["src"],$={class:"content-con from-one flex column"},A={class:"content-con from-one flex column"},K={class:"content-con from-one flex column"},T={class:"w100 flex"},B=x(" 确认 "),G=x(" 取消 ");var H=s(d({setup(e){const{uploadUrl:l,adv_type:a,ind_cla:r,third_party:o,return_mode:s,time_zone:d}=q,{getRouterData:x,getCommonCountryList:H,goNewUrl:J}=j();let{proxy:Q}=k();const W="此项必填";let X=m("create"),Y=m([]);const Z={id:void 0,adv_id:"",name:"",descs:"",adv_type:"",adv_address:"",ind_cla:"",logo:"",time_zone:"UTC+8",price:void 0,spend_limit:void 0,flow_rate:void 0,third_party:"",click_url:"",impression_url:"",return_mode:"",is_del:0},ee=(e,l,a)=>{const{max:r}=e;R(l,r)?a(void 0):a(new Error("值的长度不能大于${}"))},le=u({ruleForm:Z,rules:{name:[{required:!0,message:W,trigger:["blur","change"]},{validator:ee,max:100,trigger:["blur","change"]}],descs:[{validator:ee,max:200,trigger:["blur","change"]}],adv_type:[{required:!0,message:W,trigger:["blur","change"]}],adv_address:[{required:!0,message:W,trigger:["blur","change"]}],ind_cla:[{required:!0,message:W,trigger:["blur","change"]}],price:[{required:!0,message:W,trigger:["blur","change"]}],spend_limit:[{required:!0,message:W,trigger:["blur","change"]}],third_party:[{required:!0,message:W,trigger:["blur","change"]}]},options:{adv_type:a,ind_cla:r,time_zone:d,third_party:o,return_mode:s}}),ae=()=>{Q.$refs.ruleForm.validate((e=>{if(!e)return!1;oe()}))},re=["id","price","spend_limit","flow_rate"],oe=async()=>{let e=y(le.ruleForm);if(e=D(e),e=I(e,re),"create"===X.value){delete e.id;const l=await z(e);L(l)&&te()}if("edit"===X.value){const l=await M(e);L(l)&&te()}},te=()=>{J({url:"/advertiser/list"})},se=(e,l)=>{le.ruleForm.logo=e.data},de=async e=>{const l=new FormData;l.append("logo_url",e.file);return await P(l)},me=async e=>{const l="image/png"===e.type,a=e.size/1048576<100,r=new Promise((function(l,a){let r=window.URL||window.webkitURL,o=new Image;o.onload=function(){let e=o.width<=100&&o.height<=100;e=!0,l(null)},o.src=r.createObjectURL(e)})).then((()=>e),(()=>(console.error("图片尺寸过大,请上传100*100尺寸的图片"),Promise.reject())));return l||console.error("格式错误，请上传png格式图片"),a||console.error("文件过大，文件大小不超过100M"),r},ue=()=>{var e,l;let{query:a,params:r}=x();if(X.value=null!=(l=null==(e=a.type)?void 0:e.toString())?l:"",(async()=>{})(),"create"===X.value&&(le.ruleForm=E.cloneDeep(Z)),"edit"===X.value){const{id:e}=r;(async e=>{const l=await O(e),{data:a}=l;le.ruleForm=t(t({},le.ruleForm),a),Y.value=[{name:"logo_url",url:le.ruleForm.logo}],le.ruleForm})(e)}};return i((()=>{ue()})),(e,l)=>{const a=n("el-form-item"),r=n("el-input"),o=n("el-option"),t=n("el-select"),s=n("Plus"),d=n("el-icon"),m=n("el-upload"),u=n("el-form"),i=n("el-button");return c(),p("div",null,[f(" form "),_(u,{ref:"ruleForm",enctype:"multipart/form-data",rules:b(le).rules,model:b(le).ruleForm,"label-width":"150px","label-position":"right",class:"flex column",disabled:"edit"===b(X)&&2===b(le).ruleForm.is_del},{default:v((()=>[_(b(C),{title:"基础信息"}),g("div",N,["edit"===b(X)?(c(),F(a,{key:0,class:"self-el-form-item",label:"广告主ID:",prop:"adv_id"},{default:v((()=>[g("span",null,h(b(le).ruleForm.adv_id),1)])),_:1})):f("v-if",!0),_(a,{class:"self-el-form-item",label:"广告主名称:",prop:"name"},{default:v((()=>[_(r,{modelValue:b(le).ruleForm.name,"onUpdate:modelValue":l[0]||(l[0]=e=>b(le).ruleForm.name=e),modelModifiers:{trim:!0},class:"form-one",placeholder:""},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"描述:",prop:"descs"},{default:v((()=>[_(r,{modelValue:b(le).ruleForm.descs,"onUpdate:modelValue":l[1]||(l[1]=e=>b(le).ruleForm.descs=e),modelModifiers:{trim:!0},class:"form-one",placeholder:"",type:"textarea"},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"广告主类型:",prop:"adv_type"},{default:v((()=>[_(t,{modelValue:b(le).ruleForm.adv_type,"onUpdate:modelValue":l[2]||(l[2]=e=>b(le).ruleForm.adv_type=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:v((()=>[(c(!0),p(V,null,w(b(le).options.adv_type,(e=>(c(),F(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"广告主地址:",prop:"adv_address"},{default:v((()=>[_(r,{modelValue:b(le).ruleForm.adv_address,"onUpdate:modelValue":l[3]||(l[3]=e=>b(le).ruleForm.adv_address=e),modelModifiers:{trim:!0},class:"form-one",placeholder:"",type:"textarea"},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"行业分类:",prop:"ind_cla"},{default:v((()=>[_(t,{modelValue:b(le).ruleForm.ind_cla,"onUpdate:modelValue":l[4]||(l[4]=e=>b(le).ruleForm.ind_cla=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:v((()=>[(c(!0),p(V,null,w(b(le).options.ind_cla,(e=>(c(),F(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"Logo:",prop:"logo"},{default:v((()=>[_(m,{class:"avatar-uploader",name:"logo_url",action:"","file-list":b(Y),"onUpdate:file-list":l[5]||(l[5]=e=>U(Y)?Y.value=e:Y=e),"show-file-list":!1,"on-success":se,"before-upload":me,"http-request":de},{default:v((()=>[b(le).ruleForm.logo?(c(),p("img",{key:0,src:b(le).ruleForm.logo,class:"avatar"},null,8,S)):(c(),F(d,{key:1,class:"avatar-uploader-icon"},{default:v((()=>[_(s)])),_:1}))])),_:1},8,["file-list"])])),_:1})]),_(b(C),{title:"Offer信息"}),g("div",$,[_(a,{class:"self-el-form-item",label:"选择时区:",prop:"time_zone"},{default:v((()=>[_(t,{modelValue:b(le).ruleForm.time_zone,"onUpdate:modelValue":l[6]||(l[6]=e=>b(le).ruleForm.time_zone=e),filterable:"",class:"form-one",clearable:"",placeholder:""},{default:v((()=>[(c(!0),p(V,null,w(b(le).options.time_zone,(e=>(c(),F(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"转化单价（美元）:",prop:"price"},{default:v((()=>[_(r,{modelValue:b(le).ruleForm.price,"onUpdate:modelValue":l[7]||(l[7]=e=>b(le).ruleForm.price=e),modelModifiers:{trim:!0},class:"form-one",placeholder:"",type:"number",step:"0.001"},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"日花费上限（美元）:",prop:"spend_limit"},{default:v((()=>[_(r,{modelValue:b(le).ruleForm.spend_limit,"onUpdate:modelValue":l[8]||(l[8]=e=>b(le).ruleForm.spend_limit=e),modelModifiers:{trim:!0},class:"form-one",placeholder:""},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"强制流量占比%:",prop:"flow_rate"},{default:v((()=>[_(r,{modelValue:b(le).ruleForm.flow_rate,"onUpdate:modelValue":l[9]||(l[9]=e=>b(le).ruleForm.flow_rate=e),modelModifiers:{trim:!0},class:"form-one",placeholder:""},null,8,["modelValue"])])),_:1})]),_(b(C),{title:"追踪信息"}),g("div",A,[_(a,{class:"self-el-form-item",label:"第三方监测平台:",prop:"third_party"},{default:v((()=>[_(t,{modelValue:b(le).ruleForm.third_party,"onUpdate:modelValue":l[10]||(l[10]=e=>b(le).ruleForm.third_party=e),filterable:"",placeholder:"请选择",class:"form-one"},{default:v((()=>[(c(!0),p(V,null,w(b(le).options.third_party,(e=>(c(),F(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"点击监测链接:",prop:"click_url"},{default:v((()=>[_(r,{modelValue:b(le).ruleForm.click_url,"onUpdate:modelValue":l[11]||(l[11]=e=>b(le).ruleForm.click_url=e),modelModifiers:{trim:!0},class:"form-one",placeholder:"",type:"textarea"},null,8,["modelValue"])])),_:1}),_(a,{class:"self-el-form-item",label:"曝光监测链接:",prop:"impression_url"},{default:v((()=>[_(r,{modelValue:b(le).ruleForm.impression_url,"onUpdate:modelValue":l[12]||(l[12]=e=>b(le).ruleForm.impression_url=e),modelModifiers:{trim:!0},class:"form-one",placeholder:"",type:"textarea"},null,8,["modelValue"])])),_:1})]),_(b(C),{title:"数据回传"}),g("div",K,[_(a,{class:"self-el-form-item",label:"回传方式:",prop:"return_mode"},{default:v((()=>[_(t,{modelValue:b(le).ruleForm.return_mode,"onUpdate:modelValue":l[13]||(l[13]=e=>b(le).ruleForm.return_mode=e),filterable:"",placeholder:"请选择",class:"form-one"},{default:v((()=>[(c(!0),p(V,null,w(b(le).options.return_mode,(e=>(c(),F(o,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])])),_:1},8,["rules","model","disabled"]),f(" form "),f(" footer "),g("div",T,[_(i,{type:"primary",onClick:ae},{default:v((()=>[B])),_:1}),_(i,{type:"primary",onClick:te},{default:v((()=>[G])),_:1})])])}}}),[["__scopeId","data-v-f702f7e8"]]);export{H as default};
