// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,u=e.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=c):t[r]=l.value),y="get"in l,p="set"in l,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,l.get),p&&i&&i.call(t,r,l.set),t};function c(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var s=p()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[_],i=_,r=null!=(o=t)&&v.call(o,i);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)},m=Number,d=m.prototype.toString;var j=p();function g(t){return"object"==typeof t&&(t instanceof m||(j?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function h(t){return f(t)||g(t)}c(h,"isPrimitive",f),c(h,"isObject",g);var w=Number.POSITIVE_INFINITY,O=m.NEGATIVE_INFINITY,S=Math.floor;function A(t){return t<w&&t>O&&S(r=t)===r;var r}function F(t){return f(t)&&A(t)}function I(t){return g(t)&&A(t.valueOf())}function N(t){return F(t)||I(t)}function T(t){return F(t)&&t>0}function P(t){return I(t)&&t.valueOf()>0}function E(t){return T(t)||P(t)}function k(t){return t!=t}function V(t){return 0===t&&1/t===O}c(N,"isPrimitive",F),c(N,"isObject",I),c(E,"isPrimitive",T),c(E,"isObject",P);var G="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null;var C="function"==typeof Float64Array?Float64Array:void 0;var Y=function(){var t,r,e;if("function"!=typeof x)return!1;try{r=new x([1,3.14,-3.14,NaN]),e=r,t=(G&&e instanceof Float64Array||"[object Float64Array]"===s(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?C:function(){throw new Error("not implemented")};function D(t){var r,e,n,o;if(!T(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("0eD8T",t));return r=new Y(t),e=w,o=-1,n=0,function(i){var a,u;if(0===arguments.length)return 0===n?null:e;if(o=(o+1)%t,n<t)n+=1,(k(i)||i<e||i===e&&V(i))&&(e=i);else if(k(i)||i<e)e=i;else if(r[o]===e&&i>e||k(r[o])){for(e=i,u=0;u<t;u++)if(u!==o){if(k(a=r[u])){e=a;break}(a<e||a===e&&V(a))&&(e=a)}}else if(r[o]===e&&i===e&&0===i)if(V(i))e=i;else if(V(r[o]))for(e=i,u=0;u<t;u++)if(u!==o&&V(r[u])){e=r[u];break}return r[o]=i,e}}export{D as default};
//# sourceMappingURL=mod.js.map