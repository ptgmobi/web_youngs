System.register(["./moment-legacy-2456bd0f.js"],(function(t){"use strict";var r;return{setters:[function(t){r=t.h}],execute:function(){t({a:function(t,e,n){return[r().subtract(t,n).format("YYYY-MM-DD"),r().subtract(e,n).format("YYYY-MM-DD")]},b:function(t){var r=/(?!^)(?=(\d{3})+$)/g;return t<0?(t=((t=0-t)+"").replace(r,","),"-".concat(t)):(t+"").replace(r,",")},g:function(t,e){return[r().subtract(t,e).format("YYYY-MM-DD"),r().format("YYYY-MM-DD")]},h:function(t){return function t(r,e){var n,u=[];return r.map((function(a){a.value=a.url,a.label=a.name,a.hasOwnProperty("pid")?Number(a.pid)===Number(e)&&((n=t(r,a.id)).length>0&&(a.children=n),u.push(a)):u.push(a)})),u}(t,"0")},t:function(t,r){return"number"==typeof t?t.toFixed(r):"string"==typeof t?isNaN(t)?t:parseFloat(t).toFixed(r):t}})}}}));
