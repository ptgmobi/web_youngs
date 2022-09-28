var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;import{_ as n,Y as d,q as r,o as h,A as c,s as p,e as u,x as m,c as f,z as D,f as g,y as b}from"./main-4990c854.js";import{g as y,a as C,s as A,b as w}from"./power-0378cd62.js";import{h as k}from"./format-15e3f823.js";import{_ as T}from"./lodash-d6ca2f8e.js";import{m as _}from"./message-2ec72094.js";import{m as V}from"./self-e560fff7.js";import"./moment-9bd84dc2.js";const j={class:""};const v={element:[],menu:[],operation:[],permission:[]},P={components:{RoleTree:n({props:{title:{default:"title",type:String},data:{default:()=>[],type:Array},item:{default:()=>({}),type:Object},choice:{default:()=>[],type:Array},name:{default:"name",type:String},date:{default:0,type:Number}},data:()=>({filterApiText:"",list:[],choiceArr:[],checkStrictly:!1,defaultProps:{children:"children",label:"label"}}),computed:{handleTree(){return k(this.list)},handleRef(){return`tree${this.name}`}},watch:{date(){this.init()},choice:{immediate:!0,handler(e,t){this.$nextTick((()=>{this.$refs[this.handleRef].setCheckedKeys([]),e&&e.forEach((e=>{const t=this.$refs[this.handleRef].getNode(e);t&&t.isLeaf&&this.$refs[this.handleRef].setChecked(t,!0)}))}))}},filterApiText(e){this.$refs[this.handleRef]&&this.$refs[this.handleRef].filter(e)}},created(){this.list=T.cloneDeep(this.data)},methods:{async init(){this.filterApiText=""},changeOneFn(e,t){const a=[...this.$refs[this.handleRef].getCheckedKeys(),...this.$refs[this.handleRef].getHalfCheckedKeys()];this.$emit("changeChoiceData",this.name,a)},filterApiNode(e,t){return!e||t[this.defaultProps.label].includes(e)},checkApiTree(e,t,a){const i=this.handleChoiceApiDataPermissionID,l=this.dialogData.treeData.choiceApiData.find((t=>t.permission_id===e.id));var o=null==l?void 0:l.id;t?(this.dialogData.treeData.choiceApiDataAdd.includes(e.id)||i.includes(e.id)||this.dialogData.treeData.choiceApiDataAdd.push(e.id),this.dialogData.treeData.choiceApiDataAdd.includes(o)&&(this.dialogData.treeData.choiceApiDataDel=this.dialogData.treeData.choiceApiDataDel.filter((e=>e!==o)))):(this.dialogData.treeData.choiceApiDataDel.includes(o)||l&&this.dialogData.treeData.choiceApiDataDel.push(o),this.dialogData.treeData.choiceApiDataAdd.includes(e.id)&&(this.dialogData.treeData.choiceApiDataAdd=this.dialogData.treeData.choiceApiDataAdd.filter((t=>t!==e.id))))},generateRoutes(e,t="/"){const a=[];for(let{route:i}of e){if(i.hidden)continue;const e=this.onlyOneShowingChild(i.children,i);i.children&&e&&!i.alwaysShow&&(i=e);const l={path:d.resolve(t,i.path),title:i.title,name:i.name};i.children&&(l.children=this.generateRoutes(i.children,l.path)),a.push(l)}return a},generateArr(e){let t=[];return e.forEach((e=>{if(t.push(e),e.children){const a=this.generateArr(e.children);a.length>0&&(t=[...t,...a])}})),t},generateTree(e,t="/",a){const i=[];for(const l of e){const e=d.resolve(t,l.path);l.children&&(l.children=this.generateTree(l.children,e,a)),(a.includes(e)||l.children&&l.children.length>=1)&&i.push(l)}return i},onlyOneShowingChild(e=[],n){let r=null;const h=e.filter((e=>!e.hidden));return 1===h.length?(r=h[0],r.path=d.resolve(n.path,r.path),r):0===h.length&&(c=((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))o.call(t,a)&&s(e,a,t[a]);return e})({},n),r=t(c,a({path:"",noShowingChildren:!0})),r);var c}}},[["render",function(e,t,a,i,l,o){const s=r("el-input"),n=r("el-tree"),d=r("el-form-item"),f=r("el-form");return h(),c(f,{"label-width":"150px","label-position":"top"},{default:p((()=>[u(d,{label:a.title},{default:p((()=>[m("div",j,[u(s,{modelValue:l.filterApiText,"onUpdate:modelValue":t[0]||(t[0]=e=>l.filterApiText=e),class:"w100",placeholder:"输入关键字进行过滤"},null,8,["modelValue"]),u(n,{ref:o.handleRef,data:o.handleTree,props:l.defaultProps,"show-checkbox":"","node-key":"id",class:"permission-tree","default-checked-keys":l.choiceArr,"filter-node-method":o.filterApiNode,"default-expand-all":!0,onCheck:o.changeOneFn},null,8,["data","props","default-checked-keys","filter-node-method","onCheck"])])])),_:1},8,["label"])])),_:1})}]])},mixins:[V],data:()=>({date:"",list:[],data:{},dialogVisible:!1,dialogType:"",busData:{item:{type:""},choiceData:{menu:[],element:[],operation:[]}}}),created(){this.getList()},methods:{async getList(){const{data:e}=await y();this.data=e,this.list=e.permission},clearBusData(){this.busData.choiceData=T.cloneDeep(v)},handleCreate(){this.dialogType="new",this.busData.item.type="",this.clearBusData(),this.dialogVisible=!0;const e=new Date;this.date=e.getTime()},async handleEdit(e){this.dialogType="edit",this.busData.item=e.row;const{data:t}=await C(this.busData.item.id);this.busData.choiceData=t,this.dialogVisible=!0;const a=new Date;this.date=a.getTime()},handleDelete(e){},roleChangeChoice(e,t){this.busData.choiceData[e]=t},async submitFn(){if("new"===this.dialogType){const e={type:this.busData.item.type,menu_id:this.busData.choiceData.menu,element_id:this.busData.choiceData.element,operation_id:this.busData.choiceData.operation},t=await A(e);t&&_(t),this.getList()}if("edit"===this.dialogType){const e={permission_id:this.busData.item.id,menu_id:this.busData.choiceData.menu,element_id:this.busData.choiceData.element,operation_id:this.busData.choiceData.operation},t=await w(this.busData.item.id,e);t&&_(t)}this.dialogVisible=!1}}},x={class:"app-container"},O=g(" 新建 "),R=g(" 修改 "),E=g(" 删除 "),$={class:"flex jc-between ai-start"},S={slot:"footer",class:"dialog-footer"},F=g(" 取 消 "),N=g(" 确 定 ");var I=n(P,[["render",function(e,t,a,i,l,o){const s=r("el-button"),n=r("el-table-column"),d=r("el-table"),y=r("el-input"),C=r("el-form-item"),A=r("el-form"),w=r("role-tree"),k=r("el-dialog");return h(),f("div",x,[e.judgePermissionElementFn("A-AP-ADD-V")?(h(),c(s,{key:0,type:"primary",onClick:o.handleCreate},{default:p((()=>[O])),_:1},8,["onClick"])):D("v-if",!0),u(d,{data:l.list,style:{width:"100%","margin-top":"30px"},border:""},{default:p((()=>[u(n,{align:"center",label:"ID"},{default:p((e=>[g(b(e.row.id),1)])),_:1}),u(n,{align:"center",label:"Type"},{default:p((e=>[g(b(e.row.type),1)])),_:1}),u(n,{align:"center",label:"Operations"},{default:p((t=>[e.judgePermissionElementFn("A-AP-EDIT-V")?(h(),c(s,{key:0,type:"primary",size:"small",onClick:e=>o.handleEdit(t)},{default:p((()=>[R])),_:2},1032,["onClick"])):D("v-if",!0),e.judgePermissionElementFn("A-AP-DEL-V")?(h(),c(s,{key:1,type:"danger",size:"small",onClick:e=>o.handleDelete(t)},{default:p((()=>[E])),_:2},1032,["onClick"])):D("v-if",!0)])),_:1})])),_:1},8,["data"]),u(k,{modelValue:l.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=e=>l.dialogVisible=e),title:"edit"===l.dialogType?"Edit Role":"New Role",width:"90%"},{default:p((()=>[u(A,{"label-width":"150px","label-position":"left"},{default:p((()=>[u(C,{label:"Name"},{default:p((()=>[u(y,{modelValue:l.busData.item.type,"onUpdate:modelValue":t[0]||(t[0]=e=>l.busData.item.type=e),placeholder:"Role Name",disabled:"edit"===l.dialogType},null,8,["modelValue","disabled"])])),_:1})])),_:1}),m("div",$,[u(w,{ref:"roleroute",item:l.busData.item,data:l.data.menu,date:l.date,choice:l.busData.choiceData.menu,title:"路由权限",name:"menu",class:"col-auto-8 m0-10",onChangeChoiceData:o.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"]),u(w,{ref:"rolebutton",item:l.busData.item,data:l.data.element,date:l.date,choice:l.busData.choiceData.element,title:"按钮权限",name:"element",class:"col-auto-8 m0-10",onChangeChoiceData:o.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"]),u(w,{ref:"roleapi",item:l.busData.item,data:l.data.operation,date:l.date,choice:l.busData.choiceData.operation,title:"API权限",name:"operation",class:"col-auto-8 m0-10",onChangeChoiceData:o.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"])]),m("div",S,[u(s,{onClick:t[1]||(t[1]=e=>l.dialogVisible=!1)},{default:p((()=>[F])),_:1}),u(s,{type:"primary",onClick:o.submitFn},{default:p((()=>[N])),_:1},8,["onClick"])])])),_:1},8,["modelValue","title"])])}]]);export{I as default};
