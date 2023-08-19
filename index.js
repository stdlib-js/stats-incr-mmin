// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var a,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(t,e)||f.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=a):t[e]=l.value),y="get"in l,p="set"in l,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,l.get),p&&i&&i.call(t,e,l.set),t};function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,m="function"==typeof Symbol?Symbol.toStringTag:"",_=p()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[m],i=m,e=null!=(o=t)&&s.call(o,i);try{t[m]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[m]=r:delete t[m],n}:function(t){return b.call(t)},d=Number,v=d.prototype.toString,g=p();function j(t){return"object"==typeof t&&(t instanceof d||(g?function(t){try{return v.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function h(t){return c(t)||j(t)}a(h,"isPrimitive",c),a(h,"isObject",j);var w=Number.POSITIVE_INFINITY,O=d.NEGATIVE_INFINITY,S=Math.floor;function I(t){return t<w&&t>O&&S(e=t)===e;var e}function T(t){return c(t)&&I(t)}function A(t){return j(t)&&I(t.valueOf())}function F(t){return T(t)||A(t)}function N(t){return T(t)&&t>0}function P(t){return A(t)&&t.valueOf()>0}function E(t){return N(t)||P(t)}function k(t){return t!=t}function V(t){return 0===t&&1/t===O}a(F,"isPrimitive",T),a(F,"isObject",A),a(E,"isPrimitive",N),a(E,"isObject",P);var x="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,C="function"==typeof Float64Array?Float64Array:void 0,Y=function(){var t,e,r;if("function"!=typeof G)return!1;try{e=new G([1,3.14,-3.14,NaN]),r=e,t=(x&&r instanceof Float64Array||"[object Float64Array]"===_(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?C:function(){throw new Error("not implemented")};return function(t){var e,r,n,o;if(!N(t))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("1Id8B,Hs",t));return e=new Y(t),r=w,o=-1,n=0,function(i){var u,f;if(0===arguments.length)return 0===n?null:r;if(o=(o+1)%t,n<t)n+=1,(k(i)||i<r||i===r&&V(i))&&(r=i);else if(k(i)||i<r)r=i;else if(e[o]===r&&i>r||k(e[o])){for(r=i,f=0;f<t;f++)if(f!==o){if(k(u=e[f])){r=u;break}(u<r||u===r&&V(u))&&(r=u)}}else if(e[o]===r&&i===r&&0===i)if(V(i))r=i;else if(V(e[o]))for(r=i,f=0;f<t;f++)if(f!==o&&V(e[f])){r=e[f];break}return e[o]=i,r}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmmin=e();
//# sourceMappingURL=index.js.map
