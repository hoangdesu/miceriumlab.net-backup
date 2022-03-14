(()=>{var e={42:(e,t)=>{var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},3743:e=>{"use strict";function t(e){return function(){return e}}var r=function(){};r.thatReturns=t,r.thatReturnsFalse=t(!1),r.thatReturnsTrue=t(!0),r.thatReturnsNull=t(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},7081:e=>{"use strict";e.exports=function(e,t,r,n,o,s,a,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,s,a,i],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},5350:(e,t,r)=>{"use strict";var n=r(3743);e.exports=n},9219:(e,t,r)=>{"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(r(9196)),s=i(r(349)),a=i(r(8470));function i(e){return e&&e.__esModule?e:{default:e}}var l=void 0;function c(e,t){var r,a,i,u,p,m,d,f,g=[],v={};for(m=0;m<e.length;m++)if("string"!==(p=e[m]).type){if(!t.hasOwnProperty(p.value)||void 0===t[p.value])throw new Error("Invalid interpolation, missing component node: `"+p.value+"`");if("object"!==n(t[p.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+p.value+"`","\n> "+l);if("componentClose"===p.type)throw new Error("Missing opening component token: `"+p.value+"`");if("componentOpen"===p.type){r=t[p.value],i=m;break}g.push(t[p.value])}else g.push(p.value);return r&&(u=function(e,t){var r,n,o=t[e],s=0;for(n=e+1;n<t.length;n++)if((r=t[n]).value===o.value){if("componentOpen"===r.type){s++;continue}if("componentClose"===r.type){if(0===s)return n;s--}}throw new Error("Missing closing component token `"+o.value+"`")}(i,e),d=c(e.slice(i+1,u),t),a=o.default.cloneElement(r,{},d),g.push(a),u<e.length-1&&(f=c(e.slice(u+1),t),g=g.concat(f))),1===g.length?g[0]:(g.forEach((function(e,t){e&&(v["interpolation-child-"+t]=e)})),(0,s.default)(v))}t.Z=function(e){var t=e.mixedString,r=e.components,o=e.throwErrors;if(l=t,!r)return t;if("object"!==(void 0===r?"undefined":n(r))){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var s=(0,a.default)(t);try{return c(s,r)}catch(i){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+i.message+"`");return t}}},8470:e=>{"use strict";function t(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(t)}},349:(e,t,r)=>{"use strict";var n=r(9196),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,s=r(3743),a=r(7081),i=r(5350),l="function"==typeof Symbol&&Symbol.iterator;function c(e,t){return e&&"object"==typeof e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function u(e,t,r,n){var s,i=typeof e;if("undefined"!==i&&"boolean"!==i||(e=null),null===e||"string"===i||"number"===i||"object"===i&&e.$$typeof===o)return r(n,e,""===t?"."+c(e,0):t),1;var p=0,m=""===t?".":t+":";if(Array.isArray(e))for(var d=0;d<e.length;d++)p+=u(s=e[d],m+c(s,d),r,n);else{var f=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(f){0;for(var g,v=f.call(e),y=0;!(g=v.next()).done;)p+=u(s=g.value,m+c(s,y++),r,n)}else if("object"===i){0;var h=""+e;a(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===h?"object with keys {"+Object.keys(e).join(", ")+"}":h,"")}}return p}var p=/\/+/g;function m(e){return(""+e).replace(p,"$&/")}var d,f,g=v,v=function(e){var t=this;if(t.instancePool.length){var r=t.instancePool.pop();return t.call(r,e),r}return new t(e)},y=function(e){var t=this;a(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)};function h(e,t,r,n){this.result=e,this.keyPrefix=t,this.func=r,this.context=n,this.count=0}function E(e,t,r){var o,a,i=e.result,l=e.keyPrefix,c=e.func,u=e.context,p=c.call(u,t,e.count++);Array.isArray(p)?b(p,i,r,s.thatReturnsArgument):null!=p&&(n.isValidElement(p)&&(o=p,a=l+(!p.key||t&&t.key===p.key?"":m(p.key)+"/")+r,p=n.cloneElement(o,{key:a},void 0!==o.props?o.props.children:void 0)),i.push(p))}function b(e,t,r,n,o){var s="";null!=r&&(s=m(r)+"/");var a=h.getPooled(t,s,n,o);!function(e,t,r){null==e||u(e,"",t,r)}(e,E,a),h.release(a)}h.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},d=function(e,t,r,n){var o=this;if(o.instancePool.length){var s=o.instancePool.pop();return o.call(s,e,t,r,n),s}return new o(e,t,r,n)},(f=h).instancePool=[],f.getPooled=d||g,f.poolSize||(f.poolSize=10),f.release=y;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(n.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;a(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var r in e)b(e[r],t,r,s.thatReturnsArgument);return t}},9196:e=>{"use strict";e.exports=window.React}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};r.r(e),r.d(e,{deleteLevelFile:()=>fe,errorDeleteLevelFileAction:()=>ye,errorFileUpload:()=>de,errorStartImport:()=>le,fetchFromAPI:()=>X,loadCurrentJobState:()=>te,pollJobProgress:()=>ne,resetState:()=>he,restartImporter:()=>Ee,setJobState:()=>oe,startDeleteLevelFileAction:()=>ge,startFileUploadAction:()=>pe,startImport:()=>ae,submitStartImport:()=>se,successDeleteLevelFileAction:()=>ve,successFileUpload:()=>me,successStartImport:()=>ie,throwEarlyUploadError:()=>ue,updateJobState:()=>re,uploadFileForLevel:()=>ce,wait:()=>ee});var t={};r.r(t),r.d(t,{getFetchError:()=>Ke,getJobId:()=>He,getLogsBySeverity:()=>ot,getLogsFetchError:()=>st,getNavigationSteps:()=>Xe,getStepData:()=>Ze,getSuccessResults:()=>nt,getUploadedLevelKeys:()=>rt,isCompleteStep:()=>et,isFetching:()=>Qe,isReadyToStart:()=>tt});var n={};r.r(n),r.d(n,{getLogsBySeverity:()=>ut});const o=window.wp.element,s=window.wp.i18n,a=window.wp.data;var i=r(42),l=r.n(i),c=function(e){var t=e.steps;return(0,o.createElement)("ol",{className:"sensei-data-port-steps"},t.map((function(e){var t=l()({active:e.isNext,done:e.isComplete});return(0,o.createElement)("li",{key:e.key,className:t},e.label)})))};function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const d=window.lodash;var f="/sensei-internal/v1/import/",g="active",v="FETCH_FROM_API",y="WAIT",h="START_LOAD_CURRENT_JOB_STATE",E="SUCCESS_LOAD_CURRENT_JOB_STATE",b="ERROR_LOAD_CURRENT_JOB_STATE",_="SET_JOB_STATE",S="START_IMPORT",w="SUCCESS_START_IMPORT",R="ERROR_START_IMPORT",x="START_UPLOAD_IMPORT_DATA_FILE",k="SUCCESS_UPLOAD_IMPORT_DATA_FILE",O="ERROR_UPLOAD_IMPORT_DATA_FILE",T="START_DELETE_IMPORT_DATA_FILE",F="SUCCESS_DELETE_IMPORT_DATA_FILE",P="ERROR_DELETE_IMPORT_DATA_FILE",I="SET_IMPORT_LOG",A="ERROR_FETCH_IMPORT_LOG",j="RESET_STATE",D={jobId:null,isFetching:!0,fetchError:!1,completedSteps:[],upload:{isSubmitting:!1,errorMsg:null,courses:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null},lessons:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null},questions:{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}},progress:{status:"",percentage:0},done:{results:null,logs:null}},N=function(e,t,r){return m(m({},e),{},{upload:m(m({},e.upload),{},u({},t,r))})};const C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return m(m({},e),{},{isFetching:!0,fetchError:!1});case E:return m(m({},(0,d.merge)({},e,t.data)),{},{isFetching:!1});case _:return m({},(0,d.merge)({},e,t.data));case b:return m(m({},e),{},{isFetching:!1,fetchError:t.error});case S:return m(m({},e),{},{upload:m(m({},e.upload),{},{errorMsg:null,isSubmitting:!0})});case R:return m(m({},e),{},{upload:m(m({},e.upload),{},{errorMsg:t.error.message,isSubmitting:!1})});case w:return m(m({},e),{},{completedSteps:t.data.completedSteps,upload:m(m({},e.upload),{},{isSubmitting:!1}),progress:m(m({},e.progress),t.data.progress)});case x:return N(e,t.level,m(m({},e.upload[t.level]),{},{isUploaded:!1,isUploading:!0,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}));case k:return N(m(m({},e),{},{jobId:t.data.jobId}),t.level,m(m(m({},e.upload[t.level]),t.data.upload[t.level]),{},{isUploading:!1,isDeleting:!1,hasError:!1,errorMsg:null}));case O:return N(e,t.level,m(m({},e.upload[t.level]),{},{isUploaded:!1,isUploading:!1,isDeleting:!1,hasError:!0,errorMsg:t.error.message,filename:null}));case T:return N(e,t.level,m(m({},e.upload[t.level]),{},{isDeleting:!0}));case F:return N(e,t.level,m(m({},t.data.upload[t.level]),{},{isUploaded:!1,isDeleting:!1,hasError:!1,errorMsg:null,filename:null}));case P:return N(e,t.level,m(m({},e.upload[t.level]),{},{isUploaded:!1,isDeleting:!1,hasError:!0,errorMsg:t.error.message}));case I:return m(m({},e),{},{done:m(m({},e.done),{},{logs:t.data})});case A:return m(m({},e),{},{done:m(m({},e.done),{},{logs:{fetchError:t.error}})});case j:return m({},D);default:return e}};var L=function(e,t,r,n){return regeneratorRuntime.mark((function o(){var s,a=arguments;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!e){o.next=3;break}return o.next=3,{type:e};case 3:return o.prev=3,o.delegateYield(t.apply(void 0,a),"t0",5);case 5:return s=o.t0,o.next=8,{type:r,data:s};case 8:o.next=14;break;case 10:return o.prev=10,o.t1=o.catch(3),o.next=14,{type:n,error:o.t1};case 14:case"end":return o.stop()}}),o,null,[[3,10]])}))};function U(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function B(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],_n=!0,n=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(_n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);_n=!0);}catch(i){n=!0,o=i}finally{try{_n||null==a.return||a.return()}finally{if(n)throw o}}return r}}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=["id","files","status","results"],q=function(e){var t={};return Object.entries(e).forEach((function(e){var r=J(e,2),n=r[0],o=r[1];o.name&&(t[n]={filename:o.name,isUploaded:!0})})),t},$=function(e){return"pending"===e.status?["upload"]:"completed"===e.status?["upload","progress"]:[]},G=function(e){var t=e.id,r=e.files,n=e.status,o=e.results;return m(m({},U(e,V)),{},{jobId:t,progress:n,upload:q(r||[]),completedSteps:$(n||{}),done:{results:o}})};function W(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=[].concat(W(e?[e]:[]),W(t||[])).join("/");return f+r},Y=regeneratorRuntime.mark(re),Q=regeneratorRuntime.mark(se),H=regeneratorRuntime.mark(ce),K=regeneratorRuntime.mark(fe),Z=regeneratorRuntime.mark(Ee),X=function(e){return{type:v,request:e}},ee=function(e){return{type:y,timeout:e}},te=L(h,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X({path:z(g)});case 2:return t=e.sent,e.abrupt("return",G(t));case 4:case"end":return e.stop()}}),e)})),E,b);function re(e){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,X({path:z(e)});case 3:return t=r.sent,r.next=6,oe(G(t));case 6:r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:case"end":return r.stop()}}),Y,null,[[0,8]])}var ne=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,X({path:z(t,["process"]),method:"POST"});case 3:return r=n.sent,n.next=6,oe(G(r));case 6:if("completed"===r.status.status){n.next=9;break}return n.delegateYield(e(t),"t0",9);case 9:n.next=16;break;case 11:return n.prev=11,n.t1=n.catch(0),n.next=15,ee(2e3);case 15:return n.delegateYield(e(t),"t2",16);case 16:case"end":return n.stop()}}),e,null,[[0,11]])})),oe=function(e){return{type:_,data:e}};function se(e){var t,r,n,o,s=arguments;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:{},r=t.onSuccess,n=t.onError,a.next=3,ae();case 3:if(a.prev=3,e){a.next=8;break}return a.next=7,le({message:null});case 7:return a.abrupt("return");case 8:return a.next=10,X({path:z(e,["start"]),method:"POST"});case 10:return o=a.sent,a.next=13,ie(G(o));case 13:r&&r(),a.next=21;break;case 16:return a.prev=16,a.t0=a.catch(3),a.next=20,le(a.t0);case 20:n&&n(a.t0);case 21:case"end":return a.stop()}}),Q,null,[[3,16]])}var ae=function(){return{type:S}},ie=function(e){return{type:w,data:e}},le=function(e){return{type:R,error:e}};function ce(e,t,r){var n,o,s,a,i=arguments;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n=i.length>3&&void 0!==i[3]?i[3]:{},o=n.onSuccess,s=n.onError,l.next=3,pe(t,r);case 3:return l.prev=3,e||(e=g),l.next=7,X({path:z(e,["file",t]),method:"POST",body:r});case 7:return a=l.sent,l.next=10,me(t,G(a));case 10:o&&o(),l.next=18;break;case 13:return l.prev=13,l.t0=l.catch(3),l.next=17,de(t,l.t0);case 17:s&&s(l.t0);case 18:case"end":return l.stop()}}),H,null,[[3,13]])}var ue=function(e,t){return de(e,{code:"",message:t})},pe=function(e,t){return{type:x,level:e,uploadData:t}},me=function(e,t){return{type:k,level:e,data:t}},de=function(e,t){return{type:O,level:e,error:t}};function fe(e,t){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ge(t);case 2:if(n.prev=2,e){n.next=7;break}return n.next=6,ye({message:null});case 6:return n.abrupt("return");case 7:return n.next=9,X({path:z(e,["file",t]),method:"DELETE"});case 9:return r=n.sent,n.next=12,ve(t,G(r));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(2),n.next=18,ye(t,n.t0);case 18:case"end":return n.stop()}}),K,null,[[2,14]])}var ge=function(e){return{type:T,level:e}},ve=function(e,t){return{type:F,level:e,data:t}},ye=function(e,t){return{type:P,level:e,error:t}},he=function(){return{type:j}};function Ee(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he();case 2:return e.next=4,te();case 4:case"end":return e.stop()}}),Z)}const be=window.wp.compose,_e=window.wp.components,Se=window.wp.primitives;const we=(0,o.createElement)(Se.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(Se.Path,{d:"M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"}));var Re=function(e){var t=e.message,r=e.isError,n=l()({"sensei-data-port-notice__message":!0,error:r});return(0,o.createElement)("div",{className:"sensei-data-port-notice"},r&&(0,o.createElement)(_e.Dashicon,{className:"sensei-data-port-notice__icon error",icon:"warning"}),(0,o.createElement)("span",{className:n},t))},__=s.__,xe=[{key:"courses",description:__("Courses CSV File","sensei-lms")},{key:"lessons",description:__("Lessons CSV File","sensei-lms")},{key:"questions",description:__("Questions CSV File","sensei-lms")}],ke=s.__;const Oe=(0,be.compose)((0,a.withSelect)((function(e){var t=e("sensei/import");return{jobId:t.getJobId(),state:t.getStepData("upload")}})),(0,a.withDispatch)((function(e){var t=e("sensei/import");return{deleteLevelFile:t.deleteLevelFile,uploadFileForLevel:t.uploadFileForLevel,throwEarlyUploadError:t.throwEarlyUploadError}})))((function(e){var t=e.jobId,r=e.state,n=e.uploadFileForLevel,s=e.throwEarlyUploadError,a=e.deleteLevelFile;return(0,o.createElement)("ol",null,xe.map((function(e){var i,l=r[e.key],c=function(e){return e.hasError?(0,o.createElement)(Re,{message:e.errorMsg,isError:!0}):e.isUploaded?(0,o.createElement)(Re,{message:e.filename}):void 0}(l);return l.isDeleting?i=(0,o.createElement)("div",{className:"sensei-upload-file-line__delete-button-wrapper"},(0,o.createElement)(_e.Spinner,null)):l.isUploaded&&(i=(0,o.createElement)("div",{className:"sensei-upload-file-line__delete-button-wrapper"},(0,o.createElement)(_e.Button,{icon:we,label:ke("Delete File","sensei-lms"),onClick:function(){return a(t,e.key)},disabled:l.isDeleting}))),(0,o.createElement)("li",{key:e.key,className:"sensei-upload-file-line sensei-data-port-step__line"},(0,o.createElement)("label",{className:"sensei-upload-file-line__description",htmlFor:"sensei-upload-file-line-".concat(e.key)},e.description),(0,o.createElement)(_e.FormFileUpload,{key:l.isUploading,isSecondary:!0,id:"sensei-upload-file-line-".concat(e.key),accept:[".csv",".txt"],disabled:l.isUploading||l.isDeleting,onChange:function(r){return function(e,t,r,n,o){if(!(t.length<1)){var s=t[0];if(["csv","txt"].includes(s.name.split(".").pop())){var a=new FormData;a.append("file",s),n(e,r,a)}else o(r,ke("Only CSV files are supported.","sensei-lms"))}}(t,r.target.files,e.key,n,s)}},l.isUploading?ke("Uploading…","sensei-lms"):ke("Upload","sensei-lms")),(c||i)&&(0,o.createElement)("div",{className:"sensei-upload-file-line__info"},c,i))})))}));var Te=r(9219),Fe={em:(0,o.createElement)("em",null),strong:(0,o.createElement)("strong",null),code:(0,o.createElement)("code",null),small:(0,o.createElement)("small",null),sub:(0,o.createElement)("sub",null),sup:(0,o.createElement)("sup",null),br:(0,o.createElement)("br",null),p:(0,o.createElement)("p",null),del:(0,o.createElement)("del",null)},Pe=["component","children"],Ie=(0,o.createContext)(2);function Ae(e){return(0,o.createElement)(Ie.Consumer,null,(function(t){var r="h"+Math.min(t,6);return(0,o.createElement)(r,e)}))}function je(e){var t=e.component,r=e.children,n=U(e,Pe),s=t||"div";return(0,o.createElement)(Ie.Consumer,null,(function(e){return(0,o.createElement)(Ie.Provider,{value:e+1},!1===t?r:(0,o.createElement)(s,n,r))}))}var De=s.__;const Ne=(0,be.compose)((0,a.withSelect)((function(e){var t=e("sensei/import");return{state:t.getStepData("upload"),isReady:t.isReadyToStart()}})),(0,a.withDispatch)((function(e,t,r){var n=r.select,o=e("sensei/import").submitStartImport;return{submitStartImport:function(){o(n("sensei/import").getJobId());var e=n("sensei/import").getUploadedLevelKeys().join(",");window.sensei_log_event("import_continue_click",{type:e})}}})))((function(e){var t=e.state,r=e.isReady,n=e.submitStartImport,s=t.isSubmitting,a=t.errorMsg;return(0,o.createElement)("section",{className:"sensei-data-port-step sensei-upload-page"},(0,o.createElement)("header",{className:"sensei-data-port-step__header"},(0,o.createElement)(Ae,null,De("Import content from a CSV file","sensei-lms")),(0,o.createElement)("p",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,Te.Z)({mixedString:e,components:m(m({},Fe),t)})}(De("This tool enables you to import courses, lessons, and questions from a CSV file. Please review the {{link}}documentation{{/link}} to learn more about the expected file structure.","sensei-lms"),{link:(0,o.createElement)("a",{className:"link__color-secondary",href:"https://senseilms.com/lesson/import/",target:"_blank",type:"external",rel:"noopener noreferrer"})}))),(0,o.createElement)(je,{className:"sensei-data-port-step__body",component:"section"},(0,o.createElement)("p",null,De("Choose one or more CSV files to upload from your computer.","sensei-lms")),(0,o.createElement)(Oe,null),(0,o.createElement)("div",{className:"sensei-data-port-step__footer"},null!==a&&(0,o.createElement)(Re,{message:a,isError:!0}),(0,o.createElement)(_e.Button,{isPrimary:!0,className:"continue-button",disabled:!r||s,onClick:n},De("Continue","sensei-lms")))))}));const Ce=function(){var e=(0,a.useDispatch)("sensei/import").pollJobProgress,t=(0,a.useSelect)((function(e){return e("sensei/import").getJobId()}));(0,o.useEffect)((function(){e(t)}),[e,t])};var Le=s.__;const Ue=(0,be.compose)((0,a.withSelect)((function(e){return{state:e("sensei/import").getStepData("progress")}})))((function(e){var t=e.state.percentage;return Ce(),(0,o.createElement)("section",{className:"sensei-data-port-step sensei-import-progress-page"},(0,o.createElement)("header",{className:"sensei-data-port-step__header"},(0,o.createElement)(Ae,null,Le("Importing","sensei-lms")),(0,o.createElement)("p",null,Le("Your content is now being imported…","sensei-lms"))),(0,o.createElement)(je,{className:"sensei-data-port-step__body",component:"section"},(0,o.createElement)("p",null,(0,o.createElement)("progress",{className:"sensei-data-port__progressbar sensei-import-progress-page__progress",max:"100",value:t}))))}));var Me=s.__,Be=(Me("Courses","sensei-lms"),Me("Lessons","sensei-lms"),Me("Questions","sensei-lms"),{error:Me("Error","sensei-lms"),warning:Me("Warning","sensei-lms")}),Je=s.__,Ve=function(e){var t=e.items,r=e.type;return(0,o.createElement)("div",{className:"sensei-import-done__log-data"},(0,o.createElement)("table",{className:"sensei-data-table"},(0,o.createElement)("thead",null,(0,o.createElement)("tr",null,"error"===r&&(0,o.createElement)("th",null,Je("File","sensei-lms")),(0,o.createElement)("th",null,Je("Title","sensei-lms")),(0,o.createElement)("th",null,Je("Line #","sensei-lms")),(0,o.createElement)("th",null,Be[r]))),(0,o.createElement)("tbody",null,t.map((function(e){return(0,o.createElement)("tr",{key:(0,d.kebabCase)(Object.entries(e).join(""))},"error"===r&&(0,o.createElement)("td",null,e.filename),(0,o.createElement)("td",null,(t=e.post.title,(n=e.post.edit_link)?(0,o.createElement)("a",{href:n,target:"_blank",rel:"noreferrer"},t):t)),(0,o.createElement)("td",null,e.line),(0,o.createElement)("td",null,e.message));var t,n})))))},_n=s._n;const qe=function(e){var t=e.successResults;return(0,o.createElement)("ul",{className:"sensei-import-bullet-list"},t.map((function(e){var t=e.key,r=e.count;return(0,o.createElement)("li",{key:t},r," ",function(e){var t=e.key,r=e.count;return{course:_n("course","courses",r,"sensei-lms"),lesson:_n("lesson","lessons",r,"sensei-lms"),question:_n("question","questions",r,"sensei-lms")}[t]}({key:t,count:r}))})))};var $e=s.__;const Ge=(0,be.compose)((0,a.withSelect)((function(e){var t=e("sensei/import"),r=t.getJobId();return{successResults:t.getSuccessResults(),logs:t.getLogsBySeverity(r),isFetching:t.isResolving("getLogsBySeverity",[r]),fetchError:t.getLogsFetchError()}})),(0,a.withDispatch)((function(e){var t=e("sensei/import"),r=t.restartImporter,n=t.invalidateResolutionForStoreSelector;return{restartImporter:r,retry:function(){return n("getLogsBySeverity")}}})))((function(e){var t=e.restartImporter,r=e.successResults,n=void 0===r?[]:r,s=e.logs,a=void 0===s?{}:s,i=e.isFetching,l=void 0!==i&&i,c=e.fetchError,u=void 0!==c&&c,p=e.retry,m=(0,o.createElement)(o.Fragment,null,a.error&&a.error.length>0&&(0,o.createElement)("section",{className:"sensei-data-port-step"},(0,o.createElement)(je,{className:"sensei-data-port-step__body"},(0,o.createElement)("h2",null,$e("Failed","sensei-lms")),(0,o.createElement)("p",{className:"sensei-import-done__section-description"},$e("The following content was not imported. Please make the necessary corrections to the import file and try again.","sensei-lms")),(0,o.createElement)(Ve,{items:a.error,type:"error"}))),a.notice&&a.notice.length>0&&(0,o.createElement)("section",{className:"sensei-data-port-step"},(0,o.createElement)(je,{className:"sensei-data-port-step__body"},(0,o.createElement)("h2",null,$e("Partial","sensei-lms")),(0,o.createElement)("p",{className:"sensei-import-done__section-description"},$e("The following content was partially imported. The import process encountered some issues that you can resolve manually by clicking the link and making the necessary adjustments.","sensei-lms")),(0,o.createElement)(Ve,{items:a.notice,type:"warning"}))));return l?m=(0,o.createElement)("div",{className:"sensei-import-done__log-fetching"},(0,o.createElement)(_e.Spinner,null)," ",$e("Fetching log details…","sensei-lms")):u&&(m=(0,o.createElement)(_e.Notice,{status:"error",isDismissible:!1},$e("Failed to load import log.","sensei-lms")," ",u.message,(0,o.createElement)(_e.Button,{onClick:p,isLink:!0,isSmall:!0},$e("Retry","sensei-lms")))),(0,o.createElement)(o.Fragment,null,(0,o.createElement)("section",{className:"sensei-data-port-step"},(0,o.createElement)(je,{className:"sensei-data-port-step__body"},(0,o.createElement)("h2",null,$e("Completed","sensei-lms")),n.length>0?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",{className:"sensei-import-done__section-description"},$e("The following content was imported:","sensei-lms")),(0,o.createElement)(qe,{successResults:n})):(0,o.createElement)("p",{className:"sensei-import-done__section-description"},$e("No content was imported.","sensei-lms")),(0,o.createElement)("div",{className:"sensei-data-port-step__footer"},(0,o.createElement)(_e.Button,{isPrimary:!0,onClick:t},$e("Import More Content","sensei-lms"))))),m)}));var We=s.__,ze=[{key:"upload",container:(0,o.createElement)(Ne,null),label:We("Upload CSV Files","sensei-lms")},{key:"progress",container:(0,o.createElement)(Ue,null),label:We("Import","sensei-lms")},{key:"complete",container:(0,o.createElement)(Ge,null),label:We("Done","sensei-lms")}],Ye=["course","lesson","question"],Qe=function(e){return e.isFetching},He=function(e){return e.jobId},Ke=function(e){return e.fetchError},Ze=function(e,t){return e[t]},Xe=function(e){var t=e.completedSteps,r=ze.map((function(e){return m(m({},e),{},{isComplete:t.includes(e.key),isNext:!1})}));return(r.find((function(e){return!e.isComplete}))||r[0]).isNext=!0,r},et=function(e,t){return e.completedSteps.includes(t)},tt=function(e){var t=xe.map((function(t){var r=t.key;return e.upload[r]})),r=t.some((function(e){return e.isUploaded})),n=t.some((function(e){return e.isUploading||e.isDeleting}));return r&&!n},rt=function(e){var t=e.upload;return xe.filter((function(e){var r=e.key;return t[r].isUploaded})).map((function(e){return e.key}))},nt=function(e){var t=e.done;return Ye.map((function(e){return{key:e,count:(0,d.get)(t,["results",e,"success"],0)+(0,d.get)(t,["results",e,"warning"],0)}})).filter((function(e){return e.count>0}))},ot=function(e){var t=e.done,r=e.upload,n=(0,d.get)(t,"logs.items",[]).map((function(e){return m(m({},e),{},{filename:(0,d.get)(r,e.type+"s.filename","")})}));return(0,d.groupBy)(n,"severity")},st=function(e){var t=e.done;return(0,d.get)(t,"logs.fetchError",!1)};const at=window.wp.apiFetch;var it,lt=r.n(at);const ct=(u(it={},v,(function(e){var t=e.request;return lt()(t)})),u(it,y,(function(e){var t=e.timeout;return new Promise((function(e){return setTimeout(e,t)}))})),it);var ut=L(null,regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,X({path:z(t,["logs"])});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})),I,A);const pt=function(){(0,a.registerStore)("sensei/import",{reducer:C,actions:e,selectors:t,controls:ct,resolvers:n})},mt=window.wp.url;var dt;lt().use((dt={},function(e,t){return"string"!=typeof e.path||"GET"!==e.method&&e.method||(dt[e.path]?e.path=(0,mt.addQueryArgs)(e.path,{__skip_preload:1}):dt[e.path]=!0),t(e)}));var ft=s.__;pt();(0,o.render)((0,o.createElement)((function(){var e=(0,a.useSelect)((function(e){var t=e("sensei/import");return{error:t.getFetchError(),navigationSteps:t.getNavigationSteps()}}),[]),t=e.error,r=e.navigationSteps,n=(0,a.useDispatch)("sensei/import").loadCurrentJobState;if((0,o.useLayoutEffect)((function(){n()}),[n]),(0,o.useLayoutEffect)((function(){return document.body.classList.add("sensei-color"),function(){return document.body.classList.remove("sensei-color")}})),t)return(0,o.createElement)(_e.Notice,{status:"error",isDismissible:!1},ft("An error has occurred while fetching the data. Please try again later!","sensei-lms"),(0,o.createElement)("br",null),ft("Error details:","sensei-lms")," ",t.message);var s=r.find((function(e){return e.isNext}));return(0,o.createElement)("div",{className:"sensei-page-import"},(0,o.createElement)(c,{steps:r}),s.container)}),null),document.getElementById("sensei-import-page"))})()})();