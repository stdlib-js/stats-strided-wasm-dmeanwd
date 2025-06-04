"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=u(function(G,c){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));c.exports=A
});var d=u(function(H,m){
var O=require('@stdlib/assert-is-wasm-memory/dist'),y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),q=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=p();function a(e){if(!(this instanceof a))return new a(e);if(!O(e))throw new TypeError(g('nullH0',e));return q.call(this,j,e,{env:{memory:e}}),this}S(a,q);y(a.prototype,"main",function(r,i,t){return this._instance.exports.stdlib_strided_dmeanwd(r,i,t)});y(a.prototype,"ndarray",function(r,i,t,o){return this._instance.exports.stdlib_strided_dmeanwd_ndarray(r,i,t,o)});m.exports=a
});var h=u(function(I,w){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),v=d();function n(){return this instanceof n?(v.call(this,new E({initial:0})),this):new n}z(n,v);f(n.prototype,"main",function(r,i,t){return this.ndarray(r,i,t,B(r,t))});f(n.prototype,"ndarray",function(r,i,t,o){var l,s;return l=T(this,[V(r,i,t,o)]),s=l[0],v.prototype.ndarray.call(this,r,s.ptr,s.stride,s.offset)});w.exports=n
});var b=u(function(J,_){
var k=h(),M=new k;M.initializeSync();_.exports=M
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=b(),D=d();C(x,"Module",D);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
