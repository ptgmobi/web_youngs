var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;import{g as n,a as d,s as r,b as h}from"./power.2f37d1e1.js";import{h as c}from"./format.212a0fa8.js";import{I as p,r as u,o as m,c as f,f as D,g,q as b,h as y,x as C,y as A,t as w}from"./vendor.107e8656.js";import{_ as k}from"./lodash.bd96a4e5.js";import{_ as T}from"./index.3885a3b4.js";import{m as _}from"./message.96b00d49.js";import{m as v}from"./self.e8057f1b.js";const V={class:""};const j={element:[],menu:[],operation:[],permission:[]},x={mixins:[v],components:{RoleTree:T({props:{title:{default:"title",type:String},data:{default:()=>[],type:Array},item:{default:()=>({}),type:Object},choice:{default:()=>[],type:Array},name:{default:"name",type:String},date:{default:0,type:Number}},data:()=>({filterApiText:"",list:[],choiceArr:[],checkStrictly:!1,defaultProps:{children:"children",label:"label"}}),computed:{handleTree(){return c(this.list)},handleRef(){return`tree${this.name}`}},watch:{date(){this.init()},choice:{immediate:!0,handler(e,t){this.$nextTick((()=>{this.$refs[this.handleRef].setCheckedKeys([]),e.forEach((e=>{const t=this.$refs[this.handleRef].getNode(e);t&&t.isLeaf&&this.$refs[this.handleRef].setChecked(t,!0)}))}))}},filterApiText(e){this.$refs[this.handleRef]&&this.$refs[this.handleRef].filter(e)}},created(){this.list=k.cloneDeep(this.data)},methods:{async init(){this.filterApiText=""},changeOneFn(e,t){const a=[...this.$refs[this.handleRef].getCheckedKeys(),...this.$refs[this.handleRef].getHalfCheckedKeys()];this.$emit("changeChoiceData",this.name,a)},filterApiNode(e,t){return!e||t[this.defaultProps.label].includes(e)},checkApiTree(e,t,a){const i=this.handleChoiceApiDataPermissionID,l=this.dialogData.treeData.choiceApiData.find((t=>t.permission_id===e.id));var o=null==l?void 0:l.id;t?(this.dialogData.treeData.choiceApiDataAdd.includes(e.id)||i.includes(e.id)||this.dialogData.treeData.choiceApiDataAdd.push(e.id),this.dialogData.treeData.choiceApiDataAdd.includes(o)&&(this.dialogData.treeData.choiceApiDataDel=this.dialogData.treeData.choiceApiDataDel.filter((e=>e!==o)))):(this.dialogData.treeData.choiceApiDataDel.includes(o)||l&&this.dialogData.treeData.choiceApiDataDel.push(o),this.dialogData.treeData.choiceApiDataAdd.includes(e.id)&&(this.dialogData.treeData.choiceApiDataAdd=this.dialogData.treeData.choiceApiDataAdd.filter((t=>t!==e.id))))},generateRoutes(e,t="/"){const a=[];for(let{route:i}of e){if(i.hidden)continue;const e=this.onlyOneShowingChild(i.children,i);i.children&&e&&!i.alwaysShow&&(i=e);const l={path:p.resolve(t,i.path),title:i.title,name:i.name};i.children&&(l.children=this.generateRoutes(i.children,l.path)),a.push(l)}return a},generateArr(e){let t=[];return e.forEach((e=>{if(t.push(e),e.children){const a=this.generateArr(e.children);a.length>0&&(t=[...t,...a])}})),t},generateTree(e,t="/",a){const i=[];for(const l of e){const e=p.resolve(t,l.path);l.children&&(l.children=this.generateTree(l.children,e,a)),(a.includes(e)||l.children&&l.children.length>=1)&&i.push(l)}return i},onlyOneShowingChild(e=[],n){let d=null;const r=e.filter((e=>!e.hidden));return 1===r.length?(d=r[0],d.path=p.resolve(n.path,d.path),d):0===r.length&&(h=((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))o.call(t,a)&&s(e,a,t[a]);return e})({},n),d=t(h,a({path:"",noShowingChildren:!0})),d);var h}}},[["render",function(e,t,a,i,l,o){const s=u("el-input"),n=u("el-tree"),d=u("el-form-item"),r=u("el-form");return m(),f(r,{"label-width":"150px","label-position":"top"},{default:D((()=>[g(d,{label:a.title},{default:D((()=>[b("div",V,[g(s,{modelValue:l.filterApiText,"onUpdate:modelValue":t[0]||(t[0]=e=>l.filterApiText=e),class:"w100",placeholder:"输入关键字进行过滤"},null,8,["modelValue"]),g(n,{ref:o.handleRef,data:o.handleTree,props:l.defaultProps,"show-checkbox":"","node-key":"id",class:"permission-tree","default-checked-keys":l.choiceArr,"filter-node-method":o.filterApiNode,"default-expand-all":!0,onCheck:o.changeOneFn},null,8,["data","props","default-checked-keys","filter-node-method","onCheck"])])])),_:1},8,["label"])])),_:1})}]])},data:()=>({date:"",list:[],data:{},dialogVisible:!1,dialogType:"",busData:{item:{type:""},choiceData:{menu:[],element:[],operation:[]}}}),created(){this.getList()},methods:{async getList(){const{data:e}=await n();this.data=e,this.list=e.permission},clearBusData(){this.busData.choiceData=k.cloneDeep(j)},handleCreate(){this.dialogType="new",this.busData.item.type="",this.clearBusData(),this.dialogVisible=!0;const e=new Date;this.date=e.getTime()},async handleEdit(e){this.dialogType="edit",this.busData.item=e.row;const{data:t}=await d(this.busData.item.id);this.busData.choiceData=t,this.dialogVisible=!0;const a=new Date;this.date=a.getTime()},handleDelete(e){},roleChangeChoice(e,t){this.busData.choiceData[e]=t},async submitFn(){if("new"===this.dialogType){const e={type:this.busData.item.type,menu_id:this.busData.choiceData.menu,element_id:this.busData.choiceData.element,operation_id:this.busData.choiceData.operation},t=await r(e);t&&_(t),this.getList()}if("edit"===this.dialogType){const e={permission_id:this.busData.item.id,menu_id:this.busData.choiceData.menu,element_id:this.busData.choiceData.element,operation_id:this.busData.choiceData.operation},t=await h(this.busData.item.id,e);t&&_(t)}this.dialogVisible=!1}}},P={class:"app-container"},O=A("新建"),R=A("修改"),E=A("删除"),$={class:"flex jc-between ai-start"},S={slot:"footer",class:"dialog-footer"},F=A("取 消"),N=A("确 定");var I=T(x,[["render",function(e,t,a,i,l,o){const s=u("el-button"),n=u("el-table-column"),d=u("el-table"),r=u("el-input"),h=u("el-form-item"),c=u("el-form"),p=u("role-tree"),k=u("el-dialog");return m(),y("div",P,[e.judgePermissionElementFn("A-AP-ADD-V")?(m(),f(s,{key:0,type:"primary",onClick:o.handleCreate},{default:D((()=>[O])),_:1},8,["onClick"])):C("v-if",!0),g(d,{data:l.list,style:{width:"100%","margin-top":"30px"},border:""},{default:D((()=>[g(n,{align:"center",label:"ID"},{default:D((e=>[A(w(e.row.id),1)])),_:1}),g(n,{align:"center",label:"Type"},{default:D((e=>[A(w(e.row.type),1)])),_:1}),g(n,{align:"center",label:"Operations"},{default:D((t=>[e.judgePermissionElementFn("A-AP-EDIT-V")?(m(),f(s,{key:0,type:"primary",size:"small",onClick:e=>o.handleEdit(t)},{default:D((()=>[R])),_:2},1032,["onClick"])):C("v-if",!0),e.judgePermissionElementFn("A-AP-DEL-V")?(m(),f(s,{key:1,type:"danger",size:"small",onClick:e=>o.handleDelete(t)},{default:D((()=>[E])),_:2},1032,["onClick"])):C("v-if",!0)])),_:1})])),_:1},8,["data"]),g(k,{modelValue:l.dialogVisible,"onUpdate:modelValue":t[2]||(t[2]=e=>l.dialogVisible=e),title:"edit"===l.dialogType?"Edit Role":"New Role",width:"90%"},{default:D((()=>[g(c,{"label-width":"150px","label-position":"left"},{default:D((()=>[g(h,{label:"Name"},{default:D((()=>[g(r,{modelValue:l.busData.item.type,"onUpdate:modelValue":t[0]||(t[0]=e=>l.busData.item.type=e),placeholder:"Role Name",disabled:"edit"===l.dialogType},null,8,["modelValue","disabled"])])),_:1})])),_:1}),b("div",$,[g(p,{ref:"roleroute",item:l.busData.item,data:l.data.menu,date:l.date,choice:l.busData.choiceData.menu,title:"路由权限",name:"menu",class:"col-auto-8 m0-10",onChangeChoiceData:o.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"]),g(p,{ref:"rolebutton",item:l.busData.item,data:l.data.element,date:l.date,choice:l.busData.choiceData.element,title:"按钮权限",name:"element",class:"col-auto-8 m0-10",onChangeChoiceData:o.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"]),g(p,{ref:"roleapi",item:l.busData.item,data:l.data.operation,date:l.date,choice:l.busData.choiceData.operation,title:"API权限",name:"operation",class:"col-auto-8 m0-10",onChangeChoiceData:o.roleChangeChoice},null,8,["item","data","date","choice","onChangeChoiceData"])]),b("div",S,[g(s,{onClick:t[1]||(t[1]=e=>l.dialogVisible=!1)},{default:D((()=>[F])),_:1}),g(s,{type:"primary",onClick:o.submitFn},{default:D((()=>[N])),_:1},8,["onClick"])])])),_:1},8,["modelValue","title"])])}]]);export{I as default};