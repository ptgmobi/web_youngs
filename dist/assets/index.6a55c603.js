import{P as s,e as o}from"./WwChangePass.1c54e11e.js";import{m as a}from"./message.9010e90c.js";import{r as t,h as r,g as e,o as i}from"./vendor.abf78dba.js";import{_ as n}from"./index.4873aa89.js";const d={class:"app-container"};var p=n({components:{Password:s},methods:{async submitFn(s){const t={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},r=this.$store.getters.id,e=await o(r,t);a(e),this.logout()},async logout(){await this.$store.dispatch("user/logout"),this.$router.push(`/login?redirect=${this.$route.fullPath}`)}}},[["render",function(s,o,a,n,p,c){const m=t("password");return i(),r("div",d,[e(m,{"is-change":!0,"is-dialog":!1,onWwpassConfirm:c.submitFn},null,8,["onWwpassConfirm"])])}]]);export{p as default};
