import"./vendor-f1931894.js";function s(r){const o={};for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const e=r[n];e&&e!==""&&e==Number(e)?o[n]=Number(e):o[n]=e}return o}function c(r){const o={};for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const e=r[n];e&&e!==""?e==Number(e)?o[n]=Number(e):o[n]=e:delete r[n]}return o}function i(r){let o=window.location.href,n=/(?<=#).+/g,t=`${o.replaceAll(n,"")}${r}`;return window.open(t),t}export{s as a,c as h,i as o};