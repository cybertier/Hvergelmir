parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UqTs":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){"use strict";e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(j){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),c=new O(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}r.wrap=f;var d={};function m(){}function p(){}function g(){}var v={};s(v,c,function(){return this});var y=Object.getPrototypeOf,w=y&&y(y(I([])));w&&w!==n&&o.call(w,c)&&(v=w);var b=g.prototype=m.prototype=Object.create(v);function S(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(e,r){var n;i(this,"_invoke",{value:function(i,a){function c(){return new r(function(n,c){!function n(i,a,c,u){var l=h(e[i],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(f).then(function(t){s.value=t,c(s)},function(t){return n("throw",t,c,u)})}u(l.arg)}(i,a,n,c)})}return n=n?n.then(c,c):c()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function I(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=g,i(b,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:p,configurable:!0}),p.displayName=s(g,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},S(E.prototype),s(E.prototype,u,function(){return this}),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(b),s(b,l,"Generator"),s(b,c,function(){return this}),s(b,"toString",function(){return"[object Generator]"}),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)})}}var o="https://85.215.38.177:9452",i=function(t){return t.split(";").map(function(t){return t.split("=")}).reduce(function(t,e){return t[decodeURIComponent(e[0].trim())]=decodeURIComponent(e[1].trim()),t},{})};function a(t,e){for(var r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),o=t[r];t[r]=t[n],t[n]=o,o=e[r],e[r]=e[n],e[n]=o}}function c(t){var e=t+"_descriptions";return JSON.parse(localStorage.getItem(e))}function u(t){var e=t+"_names";return JSON.parse(localStorage.getItem(e))}function l(t,e){var r=t+"_descriptions";localStorage.setItem(r,e)}function s(t,e){var r=t+"_names";localStorage.setItem(r,e)}function f(t,e,r){var n=document.getElementById("q1l"),o=document.getElementById("q2l"),f=document.getElementById("q3l"),h=document.getElementById("q4l"),d=document.getElementById("q5l"),m=i(document.cookie);if(already_shuffled=m[r],"true"==already_shuffled)console.log("loading"),t=c(r),e=u(r);else{console.log("shuffling"),document.cookie=r+"="+!0+"; SameSite=Strict",a(t,e);var p=JSON.stringify(t),g=JSON.stringify(e);l(r,p),s(r,g),console.log(p),console.log(g)}n.innerHTML=t[0],o.innerHTML=t[1],f.innerHTML=t[2],h.innerHTML=t[3],d.innerHTML=t[4];var v=document.getElementsByName("radio_1");(v=Array.from(v)).forEach(function(t){t.name=e[0]}),v=document.getElementsByName("radio_2"),(v=Array.from(v)).forEach(function(t){t.name=e[1]}),v=document.getElementsByName("radio_3"),(v=Array.from(v)).forEach(function(t){t.name=e[2]}),v=document.getElementsByName("radio_4"),(v=Array.from(v)).forEach(function(t){t.name=e[3]}),v=document.getElementsByName("radio_5"),(v=Array.from(v)).forEach(function(t){t.name=e[4]})}function h(t){return d.apply(this,arguments)}function d(){return(d=n(e().mark(function t(r){return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://hvergelmir.ddns.net:9452",{method:"POST",mode:"no-cors",cache:"no-cache",credentials:"omit",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:r}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function m(t,e){console.log("sending all"),Promise.all([h(localStorage.getItem("personal")),h(localStorage.getItem("comprehension")),h(localStorage.getItem("comparison"))]).then(function(e){return window.location.assign(t+window.location.search)}).catch(function(e){console.log("network error, could not submit"),window.location.assign(t+window.location.search)})}function p(t){console.log("sending feedback"),Promise.all([h(localStorage.getItem("feedback"))]).then(function(e){return window.location.assign(t+window.location.search)}).catch(function(t){alert("Das Senden der Daten hat fehlgeschlagen es Kann sein, dass ihr Browser nicht unterstützt ist oder ihre Internetverbindung nicht stabil ist.")})}function g(t,e,r,n){t.preventDefault();var o=i(document.cookie),a=document.forms.survey1,c=new FormData(a),u=Object.fromEntries(c);u.id=o.id,u.time=n,u.type=e;var l=urlParams.get("p");u.project=l;var s=JSON.stringify(u);localStorage.setItem("comparisonA",s),m(r)}function v(t,e,r,n){var o=Math.floor(1e15*Math.random());document.cookie="id="+o+"; SameSite=Strict",document.cookie="compre_shuffled=false; SameSite=Strict",document.cookie="compar_shuffled=false; SameSite=Strict",localStorage.clear(),S(t,e,r,n,!1),window.location.assign(r+window.location.search)}function y(t,e,r,n){S(t,e,r,n,!1,!0),"first"==n&&E(),m(r,n)}function w(t,e,r,n){S(t,e,r,n,!1),p(r)}function b(t){if(t.checked){var e=confirm("Wollen sie ihre Zustimmung wirklich zurück nehmen? Ihre Daten können ohne ihre Zustimmung nicht verwendet werden");t.checked=e}}function S(t,e,r,n){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];t.preventDefault();var c=i(document.cookie),u=document.forms.survey1,l=new FormData(u),s=Object.fromEntries(l);s.id=c.id,s.time=n,s.type=e;var f=window.location.search,h=new URLSearchParams(f);"personal"==e&&(s.ref=s.browser=h.get("ref")),a&&(s.browser=h.get("p"),console.log("adding browser"),console.log(s.browser));var d=JSON.stringify(s);localStorage.setItem(e,d),console.log("saving data "+e),o&&(window.location.href=r)}function E(){var t=document.forms.survey1,e=new FormData(t),r=Object.fromEntries(e),n=JSON.stringify(r);localStorage.setItem("firstanswer",n)}window.saveData=S,window.scramble_questions=f,window.saveAndSendData=y,window.saveAndSendFeedback=w,window.saveAndGenID=v,window.onToggleConsent=b;
},{}]},{},["UqTs"], null)
//# sourceMappingURL=survey.cd37ac9b.js.map