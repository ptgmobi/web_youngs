import{Q as r}from"./main-c289050e.js";function t(t){return r({url:"/d/dio/list",data:t,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function a(t){return r({url:"/d/dio/del",data:t,method:"delete",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function d(t,a){return r({url:`/d/dio?${t}`,data:a,method:"post",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function s(t,a){return r({url:`/d/dio?${t}`,data:a,method:"put",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function i(t,a){return r({url:`/d/dio/view/${t}?${a}`,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function o(t){return r({url:"/d/ddt/list",data:t,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function e(t){return r({url:"/d/ddt/del",data:t,method:"delete",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function n(t){return r({url:"/d/ddt",data:t,method:"post",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function u(t){return r({url:"/d/ddt",data:t,method:"put",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function g(t){return r({url:`/d/ddt/view/${t}`,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function l(){return r({url:"/d/ddt/dpa",method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}export{t as A,a,d as b,s as c,i as d,o as e,l as f,e as g,n as h,u as i,g as j};