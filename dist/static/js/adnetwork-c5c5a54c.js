import{R as r}from"./index-9fd04f7c.js";function a(a){return r({url:"/adn/list",data:a,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function t(a){return r({url:`/adn/view/${a}`,method:"get",bfLoading:!1,isParams:!0,isAlertErrorMsg:!1})}function s(a){return r({url:"/adn",data:a,method:"post",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function n(a){return r({url:"/adn",data:a,method:"put",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function i(a){return r({url:"/adn/status",data:a,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function o(a){return r({url:"/adn/pmt",data:a,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}function d(a){return r({url:"/adn/android-pmt",data:a,method:"patch",bfLoading:!1,isParams:!1,isAlertErrorMsg:!1})}export{i as A,o as a,d as b,a as c,s as d,n as e,t as f};