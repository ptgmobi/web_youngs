import{P as n,e as c}from"./WwChangePass-4df12eb1.js";import{m as i}from"./message-67f5983c.js";import{r as d,i as p,v as m,o as l}from"./vendor-a4cb0bb5.js";import{_ as u}from"./index-50dc7f37.js";const f={components:{Password:n},methods:{async submitFn(s){const o={old_password:s.oldPass,password:s.pass,password_re:s.checkPass},e=this.$store.getters.id,a=await c(e,o);i(a),this.logout()},async logout(){await this.$store.dispatch("user/logout"),this.$router.push(`/login?redirect=${this.$route.fullPath}`)}}},h={class:"app-container"};function _(s,o,e,a,w,t){const r=d("password");return l(),p("div",h,[m(r,{"is-change":!0,"is-dialog":!1,onWwpassConfirm:t.submitFn},null,8,["onWwpassConfirm"])])}var x=u(f,[["render",_]]);export{x as default};
