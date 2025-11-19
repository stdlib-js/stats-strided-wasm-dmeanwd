"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=u(function(G,p){
var x=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(x(__dirname,"..","src","main.wasm"));p.exports=W
});var d=u(function(H,f){
var A=require('@stdlib/assert-is-wasm-memory/dist'),q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),g=y();function a(e){if(!(this instanceof a))return new a(e);if(!A(e))throw new TypeError(S('2KDH0',e));return m.call(this,g,e,{env:{memory:e}}),this}O(a,m);q(a.prototype,"main",function(r,i,t){return this._instance.exports.stdlib_strided_dmeanwd(r,i,t)});q(a.prototype,"ndarray",function(r,i,t,o){return this._instance.exports.stdlib_strided_dmeanwd_ndarray(r,i,t,o)});f.exports=a
});var M=u(function(I,h){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),B=require('@stdlib/wasm-memory/dist'),E=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),v=d();function n(){return this instanceof n?(v.call(this,new B({initial:0})),this):new n}j(n,v);w(n.prototype,"main",function(r,i,t){return this.ndarray(r,i,t,z(r,t))});w(n.prototype,"ndarray",function(r,i,t,o){var c,s;return c=E(this,[T(r,i,t,o)]),s=c[0],v.prototype.ndarray.call(this,r,s.ptr,s.stride,s.offset)});h.exports=n
});var b=u(function(J,_){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=M(),C=d(),l=new k;V(l,"Module",C);l.initializeSync();_.exports=l
});var D=b();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
