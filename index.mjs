// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function m(m){var o,d,f,l;if(!s(m))throw new TypeError(n("1Id8B,Hs",m));return o=new i(m),d=r,l=-1,f=0,function(s){var r,i;if(0===arguments.length)return 0===f?null:d;if(l=(l+1)%m,f<m)f+=1,(e(s)||s<d||s===d&&t(s))&&(d=s);else if(e(s)||s<d)d=s;else if(o[l]===d&&s>d||e(o[l])){for(d=s,i=0;i<m;i++)if(i!==l){if(r=o[i],e(r)){d=r;break}(r<d||r===d&&t(r))&&(d=r)}}else if(o[l]===d&&s===d&&0===s)if(t(s))d=s;else if(t(o[l]))for(d=s,i=0;i<m;i++)if(i!==l&&t(o[i])){d=o[i];break}return o[l]=s,d}}export{m as default};
//# sourceMappingURL=index.mjs.map
