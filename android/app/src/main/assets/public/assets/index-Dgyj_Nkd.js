(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function o(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(u){if(u.ep)return;u.ep=!0;const h=o(u);fetch(u.href,h)}})();function yb(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var qc={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ty;function pb(){if(Ty)return ml;Ty=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(r,u,h){var f=null;if(h!==void 0&&(f=""+h),u.key!==void 0&&(f=""+u.key),"key"in u){h={};for(var m in u)m!=="key"&&(h[m]=u[m])}else h=u;return u=h.ref,{$$typeof:a,type:r,key:f,ref:u!==void 0?u:null,props:h}}return ml.Fragment=l,ml.jsx=o,ml.jsxs=o,ml}var Ay;function gb(){return Ay||(Ay=1,qc.exports=pb()),qc.exports}var y=gb(),Xc={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My;function vb(){if(My)return ct;My=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function E(A){return A===null||typeof A!="object"?null:(A=S&&A[S]||A["@@iterator"],typeof A=="function"?A:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,U={};function K(A,V,P){this.props=A,this.context=V,this.refs=U,this.updater=P||z}K.prototype.isReactComponent={},K.prototype.setState=function(A,V){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,V,"setState")},K.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Y(){}Y.prototype=K.prototype;function J(A,V,P){this.props=A,this.context=V,this.refs=U,this.updater=P||z}var _=J.prototype=new Y;_.constructor=J,H(_,K.prototype),_.isPureReactComponent=!0;var q=Array.isArray;function I(){}var Z={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function lt(A,V,P){var et=P.ref;return{$$typeof:a,type:A,key:V,ref:et!==void 0?et:null,props:P}}function W(A,V){return lt(A.type,V,A.props)}function ht(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function xt(A){var V={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(P){return V[P]})}var Qt=/\/+/g;function X(A,V){return typeof A=="object"&&A!==null&&A.key!=null?xt(""+A.key):V.toString(36)}function at(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(I,I):(A.status="pending",A.then(function(V){A.status==="pending"&&(A.status="fulfilled",A.value=V)},function(V){A.status==="pending"&&(A.status="rejected",A.reason=V)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function N(A,V,P,et,ut){var mt=typeof A;(mt==="undefined"||mt==="boolean")&&(A=null);var Mt=!1;if(A===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(A.$$typeof){case a:case l:Mt=!0;break;case b:return Mt=A._init,N(Mt(A._payload),V,P,et,ut)}}if(Mt)return ut=ut(A),Mt=et===""?"."+X(A,0):et,q(ut)?(P="",Mt!=null&&(P=Mt.replace(Qt,"$&/")+"/"),N(ut,V,P,"",function(Sn){return Sn})):ut!=null&&(ht(ut)&&(ut=W(ut,P+(ut.key==null||A&&A.key===ut.key?"":(""+ut.key).replace(Qt,"$&/")+"/")+Mt)),V.push(ut)),1;Mt=0;var oe=et===""?".":et+":";if(q(A))for(var Lt=0;Lt<A.length;Lt++)et=A[Lt],mt=oe+X(et,Lt),Mt+=N(et,V,P,mt,ut);else if(Lt=E(A),typeof Lt=="function")for(A=Lt.call(A),Lt=0;!(et=A.next()).done;)et=et.value,mt=oe+X(et,Lt++),Mt+=N(et,V,P,mt,ut);else if(mt==="object"){if(typeof A.then=="function")return N(at(A),V,P,et,ut);throw V=String(A),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function L(A,V,P){if(A==null)return A;var et=[],ut=0;return N(A,et,"","",function(mt){return V.call(P,mt,ut++)}),et}function Q(A){if(A._status===-1){var V=A._result;V=V(),V.then(function(P){(A._status===0||A._status===-1)&&(A._status=1,A._result=P)},function(P){(A._status===0||A._status===-1)&&(A._status=2,A._result=P)}),A._status===-1&&(A._status=0,A._result=V)}if(A._status===1)return A._result.default;throw A._result}var rt=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},ot={map:L,forEach:function(A,V,P){L(A,function(){V.apply(this,arguments)},P)},count:function(A){var V=0;return L(A,function(){V++}),V},toArray:function(A){return L(A,function(V){return V})||[]},only:function(A){if(!ht(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ct.Activity=x,ct.Children=ot,ct.Component=K,ct.Fragment=o,ct.Profiler=u,ct.PureComponent=J,ct.StrictMode=r,ct.Suspense=v,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ct.__COMPILER_RUNTIME={__proto__:null,c:function(A){return Z.H.useMemoCache(A)}},ct.cache=function(A){return function(){return A.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(A,V,P){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var et=H({},A.props),ut=A.key;if(V!=null)for(mt in V.key!==void 0&&(ut=""+V.key),V)!F.call(V,mt)||mt==="key"||mt==="__self"||mt==="__source"||mt==="ref"&&V.ref===void 0||(et[mt]=V[mt]);var mt=arguments.length-2;if(mt===1)et.children=P;else if(1<mt){for(var Mt=Array(mt),oe=0;oe<mt;oe++)Mt[oe]=arguments[oe+2];et.children=Mt}return lt(A.type,ut,et)},ct.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:h,_context:A},A},ct.createElement=function(A,V,P){var et,ut={},mt=null;if(V!=null)for(et in V.key!==void 0&&(mt=""+V.key),V)F.call(V,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(ut[et]=V[et]);var Mt=arguments.length-2;if(Mt===1)ut.children=P;else if(1<Mt){for(var oe=Array(Mt),Lt=0;Lt<Mt;Lt++)oe[Lt]=arguments[Lt+2];ut.children=oe}if(A&&A.defaultProps)for(et in Mt=A.defaultProps,Mt)ut[et]===void 0&&(ut[et]=Mt[et]);return lt(A,mt,ut)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(A){return{$$typeof:m,render:A}},ct.isValidElement=ht,ct.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:Q}},ct.memo=function(A,V){return{$$typeof:p,type:A,compare:V===void 0?null:V}},ct.startTransition=function(A){var V=Z.T,P={};Z.T=P;try{var et=A(),ut=Z.S;ut!==null&&ut(P,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(I,rt)}catch(mt){rt(mt)}finally{V!==null&&P.types!==null&&(V.types=P.types),Z.T=V}},ct.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ct.use=function(A){return Z.H.use(A)},ct.useActionState=function(A,V,P){return Z.H.useActionState(A,V,P)},ct.useCallback=function(A,V){return Z.H.useCallback(A,V)},ct.useContext=function(A){return Z.H.useContext(A)},ct.useDebugValue=function(){},ct.useDeferredValue=function(A,V){return Z.H.useDeferredValue(A,V)},ct.useEffect=function(A,V){return Z.H.useEffect(A,V)},ct.useEffectEvent=function(A){return Z.H.useEffectEvent(A)},ct.useId=function(){return Z.H.useId()},ct.useImperativeHandle=function(A,V,P){return Z.H.useImperativeHandle(A,V,P)},ct.useInsertionEffect=function(A,V){return Z.H.useInsertionEffect(A,V)},ct.useLayoutEffect=function(A,V){return Z.H.useLayoutEffect(A,V)},ct.useMemo=function(A,V){return Z.H.useMemo(A,V)},ct.useOptimistic=function(A,V){return Z.H.useOptimistic(A,V)},ct.useReducer=function(A,V,P){return Z.H.useReducer(A,V,P)},ct.useRef=function(A){return Z.H.useRef(A)},ct.useState=function(A){return Z.H.useState(A)},ct.useSyncExternalStore=function(A,V,P){return Z.H.useSyncExternalStore(A,V,P)},ct.useTransition=function(){return Z.H.useTransition()},ct.version="19.2.4",ct}var Ey;function Lu(){return Ey||(Ey=1,Xc.exports=vb()),Xc.exports}var G=Lu();const Ku=yb(G);var Pc={exports:{}},yl={},Qc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function bb(){return jy||(jy=1,(function(a){function l(N,L){var Q=N.length;N.push(L);t:for(;0<Q;){var rt=Q-1>>>1,ot=N[rt];if(0<u(ot,L))N[rt]=L,N[Q]=ot,Q=rt;else break t}}function o(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],Q=N.pop();if(Q!==L){N[0]=Q;t:for(var rt=0,ot=N.length,A=ot>>>1;rt<A;){var V=2*(rt+1)-1,P=N[V],et=V+1,ut=N[et];if(0>u(P,Q))et<ot&&0>u(ut,P)?(N[rt]=ut,N[et]=Q,rt=et):(N[rt]=P,N[V]=Q,rt=V);else if(et<ot&&0>u(ut,Q))N[rt]=ut,N[et]=Q,rt=et;else break t}}return L}function u(N,L){var Q=N.sortIndex-L.sortIndex;return Q!==0?Q:N.id-L.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();a.unstable_now=function(){return f.now()-m}}var v=[],p=[],b=1,x=null,S=3,E=!1,z=!1,H=!1,U=!1,K=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function _(N){for(var L=o(p);L!==null;){if(L.callback===null)r(p);else if(L.startTime<=N)r(p),L.sortIndex=L.expirationTime,l(v,L);else break;L=o(p)}}function q(N){if(H=!1,_(N),!z)if(o(v)!==null)z=!0,I||(I=!0,xt());else{var L=o(p);L!==null&&at(q,L.startTime-N)}}var I=!1,Z=-1,F=5,lt=-1;function W(){return U?!0:!(a.unstable_now()-lt<F)}function ht(){if(U=!1,I){var N=a.unstable_now();lt=N;var L=!0;try{t:{z=!1,H&&(H=!1,Y(Z),Z=-1),E=!0;var Q=S;try{e:{for(_(N),x=o(v);x!==null&&!(x.expirationTime>N&&W());){var rt=x.callback;if(typeof rt=="function"){x.callback=null,S=x.priorityLevel;var ot=rt(x.expirationTime<=N);if(N=a.unstable_now(),typeof ot=="function"){x.callback=ot,_(N),L=!0;break e}x===o(v)&&r(v),_(N)}else r(v);x=o(v)}if(x!==null)L=!0;else{var A=o(p);A!==null&&at(q,A.startTime-N),L=!1}}break t}finally{x=null,S=Q,E=!1}L=void 0}}finally{L?xt():I=!1}}}var xt;if(typeof J=="function")xt=function(){J(ht)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,X=Qt.port2;Qt.port1.onmessage=ht,xt=function(){X.postMessage(null)}}else xt=function(){K(ht,0)};function at(N,L){Z=K(function(){N(a.unstable_now())},L)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(N){switch(S){case 1:case 2:case 3:var L=3;break;default:L=S}var Q=S;S=L;try{return N()}finally{S=Q}},a.unstable_requestPaint=function(){U=!0},a.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=S;S=N;try{return L()}finally{S=Q}},a.unstable_scheduleCallback=function(N,L,Q){var rt=a.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?rt+Q:rt):Q=rt,N){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=Q+ot,N={id:b++,callback:L,priorityLevel:N,startTime:Q,expirationTime:ot,sortIndex:-1},Q>rt?(N.sortIndex=Q,l(p,N),o(v)===null&&N===o(p)&&(H?(Y(Z),Z=-1):H=!0,at(q,Q-rt))):(N.sortIndex=ot,l(v,N),z||E||(z=!0,I||(I=!0,xt()))),N},a.unstable_shouldYield=W,a.unstable_wrapCallback=function(N){var L=S;return function(){var Q=S;S=L;try{return N.apply(this,arguments)}finally{S=Q}}}})(Zc)),Zc}var Ny;function xb(){return Ny||(Ny=1,Qc.exports=bb()),Qc.exports}var Fc={exports:{}},se={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function Sb(){if(Dy)return se;Dy=1;var a=Lu();function l(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var r={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(v,p,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:v,containerInfo:p,implementation:b}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,se.createPortal=function(v,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return h(v,p,null,b)},se.flushSync=function(v){var p=f.T,b=r.p;try{if(f.T=null,r.p=2,v)return v()}finally{f.T=p,r.p=b,r.d.f()}},se.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(v,p))},se.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},se.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var b=p.as,x=m(b,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?r.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:E}):b==="script"&&r.d.X(v,{crossOrigin:x,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},se.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=m(p.as,p.crossOrigin);r.d.M(v,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(v)},se.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,x=m(b,p.crossOrigin);r.d.L(v,b,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},se.preloadModule=function(v,p){if(typeof v=="string")if(p){var b=m(p.as,p.crossOrigin);r.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(v)},se.requestFormReset=function(v){r.d.r(v)},se.unstable_batchedUpdates=function(v,p){return v(p)},se.useFormState=function(v,p,b){return f.H.useFormState(v,p,b)},se.useFormStatus=function(){return f.H.useHostTransitionStatus()},se.version="19.2.4",se}var Cy;function Tb(){if(Cy)return Fc.exports;Cy=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Fc.exports=Sb(),Fc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function Ab(){if(wy)return yl;wy=1;var a=xb(),l=Lu(),o=Tb();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function f(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function v(t){if(h(t)!==t)throw Error(r(188))}function p(t){var e=t.alternate;if(!e){if(e=h(t),e===null)throw Error(r(188));return e!==t?null:t}for(var i=t,n=e;;){var s=i.return;if(s===null)break;var c=s.alternate;if(c===null){if(n=s.return,n!==null){i=n;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===i)return v(s),t;if(c===n)return v(s),e;c=c.sibling}throw Error(r(188))}if(i.return!==n.return)i=s,n=c;else{for(var d=!1,g=s.child;g;){if(g===i){d=!0,i=s,n=c;break}if(g===n){d=!0,n=s,i=c;break}g=g.sibling}if(!d){for(g=c.child;g;){if(g===i){d=!0,i=c,n=s;break}if(g===n){d=!0,n=c,i=s;break}g=g.sibling}if(!d)throw Error(r(189))}}if(i.alternate!==n)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),J=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),ht=Symbol.iterator;function xt(t){return t===null||typeof t!="object"?null:(t=ht&&t[ht]||t["@@iterator"],typeof t=="function"?t:null)}var Qt=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Qt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case K:return"Profiler";case U:return"StrictMode";case q:return"Suspense";case I:return"SuspenseList";case lt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case z:return"Portal";case J:return t.displayName||"Context";case Y:return(t._context.displayName||"Context")+".Consumer";case _:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Z:return e=t.displayName||null,e!==null?e:X(t.type)||"Memo";case F:e=t._payload,t=t._init;try{return X(t(e))}catch{}}return null}var at=Array.isArray,N=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},rt=[],ot=-1;function A(t){return{current:t}}function V(t){0>ot||(t.current=rt[ot],rt[ot]=null,ot--)}function P(t,e){ot++,rt[ot]=t.current,t.current=e}var et=A(null),ut=A(null),mt=A(null),Mt=A(null);function oe(t,e){switch(P(mt,e),P(ut,t),P(et,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?qm(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=qm(e),t=Xm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(et),P(et,t)}function Lt(){V(et),V(ut),V(mt)}function Sn(t){t.memoizedState!==null&&P(Mt,t);var e=et.current,i=Xm(e,t.type);e!==i&&(P(ut,t),P(et,i))}function zl(t){ut.current===t&&(V(et),V(ut)),Mt.current===t&&(V(Mt),ul._currentValue=Q)}var No,Sf;function $i(t){if(No===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);No=e&&e[1]||"",Sf=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+No+t+Sf}var Do=!1;function Co(t,e){if(!t||Do)return"";Do=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(O){var w=O}Reflect.construct(t,[],k)}else{try{k.call()}catch(O){w=O}t.call(k.prototype)}}else{try{throw Error()}catch(O){w=O}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(O){if(O&&w&&typeof O.stack=="string")return[O.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=n.DetermineComponentFrameRoot(),d=c[0],g=c[1];if(d&&g){var T=d.split(`
`),C=g.split(`
`);for(s=n=0;n<T.length&&!T[n].includes("DetermineComponentFrameRoot");)n++;for(;s<C.length&&!C[s].includes("DetermineComponentFrameRoot");)s++;if(n===T.length||s===C.length)for(n=T.length-1,s=C.length-1;1<=n&&0<=s&&T[n]!==C[s];)s--;for(;1<=n&&0<=s;n--,s--)if(T[n]!==C[s]){if(n!==1||s!==1)do if(n--,s--,0>s||T[n]!==C[s]){var R=`
`+T[n].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=n&&0<=s);break}}}finally{Do=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?$i(i):""}function Xg(t,e){switch(t.tag){case 26:case 27:case 5:return $i(t.type);case 16:return $i("Lazy");case 13:return t.child!==e&&e!==null?$i("Suspense Fallback"):$i("Suspense");case 19:return $i("SuspenseList");case 0:case 15:return Co(t.type,!1);case 11:return Co(t.type.render,!1);case 1:return Co(t.type,!0);case 31:return $i("Activity");default:return""}}function Tf(t){try{var e="",i=null;do e+=Xg(t,i),i=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var wo=Object.prototype.hasOwnProperty,zo=a.unstable_scheduleCallback,Oo=a.unstable_cancelCallback,Pg=a.unstable_shouldYield,Qg=a.unstable_requestPaint,ve=a.unstable_now,Zg=a.unstable_getCurrentPriorityLevel,Af=a.unstable_ImmediatePriority,Mf=a.unstable_UserBlockingPriority,Ol=a.unstable_NormalPriority,Fg=a.unstable_LowPriority,Ef=a.unstable_IdlePriority,Wg=a.log,$g=a.unstable_setDisableYieldValue,Tn=null,be=null;function bi(t){if(typeof Wg=="function"&&$g(t),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Tn,t)}catch{}}var xe=Math.clz32?Math.clz32:e1,Ig=Math.log,t1=Math.LN2;function e1(t){return t>>>=0,t===0?32:31-(Ig(t)/t1|0)|0}var Rl=256,Bl=262144,kl=4194304;function Ii(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _l(t,e,i){var n=t.pendingLanes;if(n===0)return 0;var s=0,c=t.suspendedLanes,d=t.pingedLanes;t=t.warmLanes;var g=n&134217727;return g!==0?(n=g&~c,n!==0?s=Ii(n):(d&=g,d!==0?s=Ii(d):i||(i=g&~t,i!==0&&(s=Ii(i))))):(g=n&~c,g!==0?s=Ii(g):d!==0?s=Ii(d):i||(i=n&~t,i!==0&&(s=Ii(i)))),s===0?0:e!==0&&e!==s&&(e&c)===0&&(c=s&-s,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:s}function An(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function i1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(){var t=kl;return kl<<=1,(kl&62914560)===0&&(kl=4194304),t}function Ro(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function Mn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function a1(t,e,i,n,s,c){var d=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var g=t.entanglements,T=t.expirationTimes,C=t.hiddenUpdates;for(i=d&~i;0<i;){var R=31-xe(i),k=1<<R;g[R]=0,T[R]=-1;var w=C[R];if(w!==null)for(C[R]=null,R=0;R<w.length;R++){var O=w[R];O!==null&&(O.lane&=-536870913)}i&=~k}n!==0&&Nf(t,n,0),c!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=c&~(d&~e))}function Nf(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-xe(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|i&261930}function Df(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var n=31-xe(i),s=1<<n;s&e|t[n]&e&&(t[n]|=e),i&=~s}}function Cf(t,e){var i=e&-e;return i=(i&42)!==0?1:Bo(i),(i&(t.suspendedLanes|e))!==0?0:i}function Bo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ko(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wf(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:yy(t.type))}function zf(t,e){var i=L.p;try{return L.p=t,e()}finally{L.p=i}}var xi=Math.random().toString(36).slice(2),It="__reactFiber$"+xi,fe="__reactProps$"+xi,ja="__reactContainer$"+xi,_o="__reactEvents$"+xi,n1="__reactListeners$"+xi,l1="__reactHandles$"+xi,Of="__reactResources$"+xi,En="__reactMarker$"+xi;function Vo(t){delete t[It],delete t[fe],delete t[_o],delete t[n1],delete t[l1]}function Na(t){var e=t[It];if(e)return e;for(var i=t.parentNode;i;){if(e=i[ja]||i[It]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Im(t);t!==null;){if(i=t[It])return i;t=Im(t)}return e}t=i,i=t.parentNode}return null}function Da(t){if(t=t[It]||t[ja]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function jn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function Ca(t){var e=t[Of];return e||(e=t[Of]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[En]=!0}var Rf=new Set,Bf={};function ta(t,e){wa(t,e),wa(t+"Capture",e)}function wa(t,e){for(Bf[t]=e,t=0;t<e.length;t++)Rf.add(e[t])}var s1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kf={},_f={};function o1(t){return wo.call(_f,t)?!0:wo.call(kf,t)?!1:s1.test(t)?_f[t]=!0:(kf[t]=!0,!1)}function Vl(t,e,i){if(o1(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+i)}}function Ul(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+i)}}function ei(t,e,i,n){if(n===null)t.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,""+n)}}function Ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r1(t,e,i){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,c=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(d){i=""+d,c.call(this,d)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Uo(t){if(!t._valueTracker){var e=Vf(t)?"checked":"value";t._valueTracker=r1(t,e,""+t[e])}}function Uf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),n="";return t&&(n=Vf(t)?t.checked?"true":"false":t.value),t=n,t!==i?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var c1=/[\n"\\]/g;function we(t){return t.replace(c1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ho(t,e,i,n,s,c,d,g){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ce(e)):t.value!==""+Ce(e)&&(t.value=""+Ce(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?Lo(t,d,Ce(e)):i!=null?Lo(t,d,Ce(i)):n!=null&&t.removeAttribute("value"),s==null&&c!=null&&(t.defaultChecked=!!c),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.name=""+Ce(g):t.removeAttribute("name")}function Hf(t,e,i,n,s,c,d,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){Uo(t);return}i=i!=null?""+Ce(i):"",e=e!=null?""+Ce(e):i,g||e===t.value||(t.value=e),t.defaultValue=e}n=n??s,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=g?t.checked:!!n,t.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d),Uo(t)}function Lo(t,e,i){e==="number"&&Hl(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function za(t,e,i,n){if(t=t.options,e){e={};for(var s=0;s<i.length;s++)e["$"+i[s]]=!0;for(i=0;i<t.length;i++)s=e.hasOwnProperty("$"+t[i].value),t[i].selected!==s&&(t[i].selected=s),s&&n&&(t[i].defaultSelected=!0)}else{for(i=""+Ce(i),e=null,s=0;s<t.length;s++){if(t[s].value===i){t[s].selected=!0,n&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Lf(t,e,i){if(e!=null&&(e=""+Ce(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Ce(i):""}function Kf(t,e,i,n){if(e==null){if(n!=null){if(i!=null)throw Error(r(92));if(at(n)){if(1<n.length)throw Error(r(93));n=n[0]}i=n}i==null&&(i=""),e=i}i=Ce(e),t.defaultValue=i,n=t.textContent,n===i&&n!==""&&n!==null&&(t.value=n),Uo(t)}function Oa(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var u1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gf(t,e,i){var n=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,i):typeof i!="number"||i===0||u1.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Jf(t,e,i){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,i!=null){for(var n in i)!i.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var s in e)n=e[s],e.hasOwnProperty(s)&&i[s]!==n&&Gf(t,s,n)}else for(var c in e)e.hasOwnProperty(c)&&Gf(t,c,e[c])}function Ko(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var f1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(t){return d1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ii(){}var Go=null;function Jo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ra=null,Ba=null;function Yf(t){var e=Da(t);if(e&&(t=e.stateNode)){var i=t[fe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ho(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+we(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var n=i[e];if(n!==t&&n.form===t.form){var s=n[fe]||null;if(!s)throw Error(r(90));Ho(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<i.length;e++)n=i[e],n.form===t.form&&Uf(n)}break t;case"textarea":Lf(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&za(t,!!i.multiple,e,!1)}}}var Yo=!1;function qf(t,e,i){if(Yo)return t(e,i);Yo=!0;try{var n=t(e);return n}finally{if(Yo=!1,(Ra!==null||Ba!==null)&&(Ns(),Ra&&(e=Ra,t=Ba,Ba=Ra=null,Yf(e),t)))for(e=0;e<t.length;e++)Yf(t[e])}}function Nn(t,e){var i=t.stateNode;if(i===null)return null;var n=i[fe]||null;if(n===null)return null;i=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(r(231,e,typeof i));return i}var ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=!1;if(ai)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){qo=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{qo=!1}var Si=null,Xo=null,Kl=null;function Xf(){if(Kl)return Kl;var t,e=Xo,i=e.length,n,s="value"in Si?Si.value:Si.textContent,c=s.length;for(t=0;t<i&&e[t]===s[t];t++);var d=i-t;for(n=1;n<=d&&e[i-n]===s[c-n];n++);return Kl=s.slice(t,1<n?1-n:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function Pf(){return!1}function de(t){function e(i,n,s,c,d){this._reactName=i,this._targetInst=s,this.type=n,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var g in t)t.hasOwnProperty(g)&&(i=t[g],this[g]=i?i(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Jl:Pf,this.isPropagationStopped=Pf,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=de(ea),Cn=x({},ea,{view:0,detail:0}),h1=de(Cn),Po,Qo,wn,ql=x({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wn&&(wn&&t.type==="mousemove"?(Po=t.screenX-wn.screenX,Qo=t.screenY-wn.screenY):Qo=Po=0,wn=t),Po)},movementY:function(t){return"movementY"in t?t.movementY:Qo}}),Qf=de(ql),m1=x({},ql,{dataTransfer:0}),y1=de(m1),p1=x({},Cn,{relatedTarget:0}),Zo=de(p1),g1=x({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),v1=de(g1),b1=x({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x1=de(b1),S1=x({},ea,{data:0}),Zf=de(S1),T1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M1[t])?!!e[t]:!1}function Fo(){return E1}var j1=x({},Cn,{key:function(t){if(t.key){var e=T1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N1=de(j1),D1=x({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=de(D1),C1=x({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),w1=de(C1),z1=x({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),O1=de(z1),R1=x({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B1=de(R1),k1=x({},ea,{newState:0,oldState:0}),_1=de(k1),V1=[9,13,27,32],Wo=ai&&"CompositionEvent"in window,zn=null;ai&&"documentMode"in document&&(zn=document.documentMode);var U1=ai&&"TextEvent"in window&&!zn,Wf=ai&&(!Wo||zn&&8<zn&&11>=zn),$f=" ",If=!1;function td(t,e){switch(t){case"keyup":return V1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ed(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ka=!1;function H1(t,e){switch(t){case"compositionend":return ed(e);case"keypress":return e.which!==32?null:(If=!0,$f);case"textInput":return t=e.data,t===$f&&If?null:t;default:return null}}function L1(t,e){if(ka)return t==="compositionend"||!Wo&&td(t,e)?(t=Xf(),Kl=Xo=Si=null,ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wf&&e.locale!=="ko"?null:e.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K1[t.type]:e==="textarea"}function ad(t,e,i,n){Ra?Ba?Ba.push(n):Ba=[n]:Ra=n,e=Bs(e,"onChange"),0<e.length&&(i=new Yl("onChange","change",null,i,n),t.push({event:i,listeners:e}))}var On=null,Rn=null;function G1(t){Hm(t,0)}function Xl(t){var e=jn(t);if(Uf(e))return t}function nd(t,e){if(t==="change")return e}var ld=!1;if(ai){var $o;if(ai){var Io="oninput"in document;if(!Io){var sd=document.createElement("div");sd.setAttribute("oninput","return;"),Io=typeof sd.oninput=="function"}$o=Io}else $o=!1;ld=$o&&(!document.documentMode||9<document.documentMode)}function od(){On&&(On.detachEvent("onpropertychange",rd),Rn=On=null)}function rd(t){if(t.propertyName==="value"&&Xl(Rn)){var e=[];ad(e,Rn,t,Jo(t)),qf(G1,e)}}function J1(t,e,i){t==="focusin"?(od(),On=e,Rn=i,On.attachEvent("onpropertychange",rd)):t==="focusout"&&od()}function Y1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Rn)}function q1(t,e){if(t==="click")return Xl(e)}function X1(t,e){if(t==="input"||t==="change")return Xl(e)}function P1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Se=typeof Object.is=="function"?Object.is:P1;function Bn(t,e){if(Se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var s=i[n];if(!wo.call(e,s)||!Se(t[s],e[s]))return!1}return!0}function cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ud(t,e){var i=cd(t);t=0;for(var n;i;){if(i.nodeType===3){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=cd(i)}}function fd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Hl(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=Hl(t.document)}return e}function tr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Q1=ai&&"documentMode"in document&&11>=document.documentMode,_a=null,er=null,kn=null,ir=!1;function hd(t,e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ir||_a==null||_a!==Hl(n)||(n=_a,"selectionStart"in n&&tr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kn&&Bn(kn,n)||(kn=n,n=Bs(er,"onSelect"),0<n.length&&(e=new Yl("onSelect","select",null,e,i),t.push({event:e,listeners:n}),e.target=_a)))}function ia(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var Va={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionrun:ia("Transition","TransitionRun"),transitionstart:ia("Transition","TransitionStart"),transitioncancel:ia("Transition","TransitionCancel"),transitionend:ia("Transition","TransitionEnd")},ar={},md={};ai&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function aa(t){if(ar[t])return ar[t];if(!Va[t])return t;var e=Va[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in md)return ar[t]=e[i];return t}var yd=aa("animationend"),pd=aa("animationiteration"),gd=aa("animationstart"),Z1=aa("transitionrun"),F1=aa("transitionstart"),W1=aa("transitioncancel"),vd=aa("transitionend"),bd=new Map,nr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nr.push("scrollEnd");function Ke(t,e){bd.set(t,e),ta(e,[t])}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ze=[],Ua=0,lr=0;function Ql(){for(var t=Ua,e=lr=Ua=0;e<t;){var i=ze[e];ze[e++]=null;var n=ze[e];ze[e++]=null;var s=ze[e];ze[e++]=null;var c=ze[e];if(ze[e++]=null,n!==null&&s!==null){var d=n.pending;d===null?s.next=s:(s.next=d.next,d.next=s),n.pending=s}c!==0&&xd(i,s,c)}}function Zl(t,e,i,n){ze[Ua++]=t,ze[Ua++]=e,ze[Ua++]=i,ze[Ua++]=n,lr|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function sr(t,e,i,n){return Zl(t,e,i,n),Fl(t)}function na(t,e){return Zl(t,null,null,e),Fl(t)}function xd(t,e,i){t.lanes|=i;var n=t.alternate;n!==null&&(n.lanes|=i);for(var s=!1,c=t.return;c!==null;)c.childLanes|=i,n=c.alternate,n!==null&&(n.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(s=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,s&&e!==null&&(s=31-xe(i),t=c.hiddenUpdates,n=t[s],n===null?t[s]=[e]:n.push(e),e.lane=i|536870912),c):null}function Fl(t){if(50<al)throw al=0,yc=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ha={};function $1(t,e,i,n){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,i,n){return new $1(t,e,i,n)}function or(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ni(t,e){var i=t.alternate;return i===null?(i=Te(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Sd(t,e){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Wl(t,e,i,n,s,c){var d=0;if(n=t,typeof t=="function")or(t)&&(d=1);else if(typeof t=="string")d=ab(t,i,et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case lt:return t=Te(31,i,e,s),t.elementType=lt,t.lanes=c,t;case H:return la(i.children,s,c,e);case U:d=8,s|=24;break;case K:return t=Te(12,i,e,s|2),t.elementType=K,t.lanes=c,t;case q:return t=Te(13,i,e,s),t.elementType=q,t.lanes=c,t;case I:return t=Te(19,i,e,s),t.elementType=I,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J:d=10;break t;case Y:d=9;break t;case _:d=11;break t;case Z:d=14;break t;case F:d=16,n=null;break t}d=29,i=Error(r(130,t===null?"null":typeof t,"")),n=null}return e=Te(d,i,e,s),e.elementType=t,e.type=n,e.lanes=c,e}function la(t,e,i,n){return t=Te(7,t,n,e),t.lanes=i,t}function rr(t,e,i){return t=Te(6,t,null,e),t.lanes=i,t}function Td(t){var e=Te(18,null,null,0);return e.stateNode=t,e}function cr(t,e,i){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ad=new WeakMap;function Oe(t,e){if(typeof t=="object"&&t!==null){var i=Ad.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Tf(e)},Ad.set(t,e),e)}return{value:t,source:e,stack:Tf(e)}}var La=[],Ka=0,$l=null,_n=0,Re=[],Be=0,Ti=null,Pe=1,Qe="";function li(t,e){La[Ka++]=_n,La[Ka++]=$l,$l=t,_n=e}function Md(t,e,i){Re[Be++]=Pe,Re[Be++]=Qe,Re[Be++]=Ti,Ti=t;var n=Pe;t=Qe;var s=32-xe(n)-1;n&=~(1<<s),i+=1;var c=32-xe(e)+s;if(30<c){var d=s-s%5;c=(n&(1<<d)-1).toString(32),n>>=d,s-=d,Pe=1<<32-xe(e)+s|i<<s|n,Qe=c+t}else Pe=1<<c|i<<s|n,Qe=t}function ur(t){t.return!==null&&(li(t,1),Md(t,1,0))}function fr(t){for(;t===$l;)$l=La[--Ka],La[Ka]=null,_n=La[--Ka],La[Ka]=null;for(;t===Ti;)Ti=Re[--Be],Re[Be]=null,Qe=Re[--Be],Re[Be]=null,Pe=Re[--Be],Re[Be]=null}function Ed(t,e){Re[Be++]=Pe,Re[Be++]=Qe,Re[Be++]=Ti,Pe=e.id,Qe=e.overflow,Ti=t}var te=null,Rt=null,bt=!1,Ai=null,ke=!1,dr=Error(r(519));function Mi(t){var e=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vn(Oe(e,t)),dr}function jd(t){var e=t.stateNode,i=t.type,n=t.memoizedProps;switch(e[It]=t,e[fe]=n,i){case"dialog":pt("cancel",e),pt("close",e);break;case"iframe":case"object":case"embed":pt("load",e);break;case"video":case"audio":for(i=0;i<ll.length;i++)pt(ll[i],e);break;case"source":pt("error",e);break;case"img":case"image":case"link":pt("error",e),pt("load",e);break;case"details":pt("toggle",e);break;case"input":pt("invalid",e),Hf(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":pt("invalid",e);break;case"textarea":pt("invalid",e),Kf(e,n.value,n.defaultValue,n.children)}i=n.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||n.suppressHydrationWarning===!0||Jm(e.textContent,i)?(n.popover!=null&&(pt("beforetoggle",e),pt("toggle",e)),n.onScroll!=null&&pt("scroll",e),n.onScrollEnd!=null&&pt("scrollend",e),n.onClick!=null&&(e.onclick=ii),e=!0):e=!1,e||Mi(t,!0)}function Nd(t){for(te=t.return;te;)switch(te.tag){case 5:case 31:case 13:ke=!1;return;case 27:case 3:ke=!0;return;default:te=te.return}}function Ga(t){if(t!==te)return!1;if(!bt)return Nd(t),bt=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||wc(t.type,t.memoizedProps)),i=!i),i&&Rt&&Mi(t),Nd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Rt=$m(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Rt=$m(t)}else e===27?(e=Rt,Ui(t.type)?(t=kc,kc=null,Rt=t):Rt=e):Rt=te?Ve(t.stateNode.nextSibling):null;return!0}function sa(){Rt=te=null,bt=!1}function hr(){var t=Ai;return t!==null&&(pe===null?pe=t:pe.push.apply(pe,t),Ai=null),t}function Vn(t){Ai===null?Ai=[t]:Ai.push(t)}var mr=A(null),oa=null,si=null;function Ei(t,e,i){P(mr,e._currentValue),e._currentValue=i}function oi(t){t._currentValue=mr.current,V(mr)}function yr(t,e,i){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===i)break;t=t.return}}function pr(t,e,i,n){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){var d=s.child;c=c.firstContext;t:for(;c!==null;){var g=c;c=s;for(var T=0;T<e.length;T++)if(g.context===e[T]){c.lanes|=i,g=c.alternate,g!==null&&(g.lanes|=i),yr(c.return,i,t),n||(d=null);break t}c=g.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(r(341));d.lanes|=i,c=d.alternate,c!==null&&(c.lanes|=i),yr(d,i,t),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function Ja(t,e,i,n){t=null;for(var s=e,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(r(387));if(d=d.memoizedProps,d!==null){var g=s.type;Se(s.pendingProps.value,d.value)||(t!==null?t.push(g):t=[g])}}else if(s===Mt.current){if(d=s.alternate,d===null)throw Error(r(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(ul):t=[ul])}s=s.return}t!==null&&pr(e,t,i,n),e.flags|=262144}function Il(t){for(t=t.firstContext;t!==null;){if(!Se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ra(t){oa=t,si=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ee(t){return Dd(oa,t)}function ts(t,e){return oa===null&&ra(t),Dd(t,e)}function Dd(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},si===null){if(t===null)throw Error(r(308));si=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else si=si.next=e;return i}var I1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},tv=a.unstable_scheduleCallback,ev=a.unstable_NormalPriority,Jt={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gr(){return{controller:new I1,data:new Map,refCount:0}}function Un(t){t.refCount--,t.refCount===0&&tv(ev,function(){t.controller.abort()})}var Hn=null,vr=0,Ya=0,qa=null;function iv(t,e){if(Hn===null){var i=Hn=[];vr=0,Ya=Sc(),qa={status:"pending",value:void 0,then:function(n){i.push(n)}}}return vr++,e.then(Cd,Cd),e}function Cd(){if(--vr===0&&Hn!==null){qa!==null&&(qa.status="fulfilled");var t=Hn;Hn=null,Ya=0,qa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function av(t,e){var i=[],n={status:"pending",value:null,reason:null,then:function(s){i.push(s)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var s=0;s<i.length;s++)(0,i[s])(e)},function(s){for(n.status="rejected",n.reason=s,s=0;s<i.length;s++)(0,i[s])(void 0)}),n}var wd=N.S;N.S=function(t,e){hm=ve(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&iv(t,e),wd!==null&&wd(t,e)};var ca=A(null);function br(){var t=ca.current;return t!==null?t:zt.pooledCache}function es(t,e){e===null?P(ca,ca.current):P(ca,e.pool)}function zd(){var t=br();return t===null?null:{parent:Jt._currentValue,pool:t}}var Xa=Error(r(460)),xr=Error(r(474)),is=Error(r(542)),as={then:function(){}};function Od(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rd(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(ii,ii),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kd(t),t;default:if(typeof e.status=="string")e.then(ii,ii);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=n}},function(n){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kd(t),t}throw fa=e,Xa}}function ua(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(fa=i,Xa):i}}var fa=null;function Bd(){if(fa===null)throw Error(r(459));var t=fa;return fa=null,t}function kd(t){if(t===Xa||t===is)throw Error(r(483))}var Pa=null,Ln=0;function ns(t){var e=Ln;return Ln+=1,Pa===null&&(Pa=[]),Rd(Pa,t,e)}function Kn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ls(t,e){throw e.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function _d(t){function e(j,M){if(t){var D=j.deletions;D===null?(j.deletions=[M],j.flags|=16):D.push(M)}}function i(j,M){if(!t)return null;for(;M!==null;)e(j,M),M=M.sibling;return null}function n(j){for(var M=new Map;j!==null;)j.key!==null?M.set(j.key,j):M.set(j.index,j),j=j.sibling;return M}function s(j,M){return j=ni(j,M),j.index=0,j.sibling=null,j}function c(j,M,D){return j.index=D,t?(D=j.alternate,D!==null?(D=D.index,D<M?(j.flags|=67108866,M):D):(j.flags|=67108866,M)):(j.flags|=1048576,M)}function d(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function g(j,M,D,B){return M===null||M.tag!==6?(M=rr(D,j.mode,B),M.return=j,M):(M=s(M,D),M.return=j,M)}function T(j,M,D,B){var nt=D.type;return nt===H?R(j,M,D.props.children,B,D.key):M!==null&&(M.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===F&&ua(nt)===M.type)?(M=s(M,D.props),Kn(M,D),M.return=j,M):(M=Wl(D.type,D.key,D.props,null,j.mode,B),Kn(M,D),M.return=j,M)}function C(j,M,D,B){return M===null||M.tag!==4||M.stateNode.containerInfo!==D.containerInfo||M.stateNode.implementation!==D.implementation?(M=cr(D,j.mode,B),M.return=j,M):(M=s(M,D.children||[]),M.return=j,M)}function R(j,M,D,B,nt){return M===null||M.tag!==7?(M=la(D,j.mode,B,nt),M.return=j,M):(M=s(M,D),M.return=j,M)}function k(j,M,D){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=rr(""+M,j.mode,D),M.return=j,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case E:return D=Wl(M.type,M.key,M.props,null,j.mode,D),Kn(D,M),D.return=j,D;case z:return M=cr(M,j.mode,D),M.return=j,M;case F:return M=ua(M),k(j,M,D)}if(at(M)||xt(M))return M=la(M,j.mode,D,null),M.return=j,M;if(typeof M.then=="function")return k(j,ns(M),D);if(M.$$typeof===J)return k(j,ts(j,M),D);ls(j,M)}return null}function w(j,M,D,B){var nt=M!==null?M.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return nt!==null?null:g(j,M,""+D,B);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case E:return D.key===nt?T(j,M,D,B):null;case z:return D.key===nt?C(j,M,D,B):null;case F:return D=ua(D),w(j,M,D,B)}if(at(D)||xt(D))return nt!==null?null:R(j,M,D,B,null);if(typeof D.then=="function")return w(j,M,ns(D),B);if(D.$$typeof===J)return w(j,M,ts(j,D),B);ls(j,D)}return null}function O(j,M,D,B,nt){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return j=j.get(D)||null,g(M,j,""+B,nt);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case E:return j=j.get(B.key===null?D:B.key)||null,T(M,j,B,nt);case z:return j=j.get(B.key===null?D:B.key)||null,C(M,j,B,nt);case F:return B=ua(B),O(j,M,D,B,nt)}if(at(B)||xt(B))return j=j.get(D)||null,R(M,j,B,nt,null);if(typeof B.then=="function")return O(j,M,D,ns(B),nt);if(B.$$typeof===J)return O(j,M,D,ts(M,B),nt);ls(M,B)}return null}function $(j,M,D,B){for(var nt=null,St=null,it=M,dt=M=0,vt=null;it!==null&&dt<D.length;dt++){it.index>dt?(vt=it,it=null):vt=it.sibling;var Tt=w(j,it,D[dt],B);if(Tt===null){it===null&&(it=vt);break}t&&it&&Tt.alternate===null&&e(j,it),M=c(Tt,M,dt),St===null?nt=Tt:St.sibling=Tt,St=Tt,it=vt}if(dt===D.length)return i(j,it),bt&&li(j,dt),nt;if(it===null){for(;dt<D.length;dt++)it=k(j,D[dt],B),it!==null&&(M=c(it,M,dt),St===null?nt=it:St.sibling=it,St=it);return bt&&li(j,dt),nt}for(it=n(it);dt<D.length;dt++)vt=O(it,j,dt,D[dt],B),vt!==null&&(t&&vt.alternate!==null&&it.delete(vt.key===null?dt:vt.key),M=c(vt,M,dt),St===null?nt=vt:St.sibling=vt,St=vt);return t&&it.forEach(function(Ji){return e(j,Ji)}),bt&&li(j,dt),nt}function st(j,M,D,B){if(D==null)throw Error(r(151));for(var nt=null,St=null,it=M,dt=M=0,vt=null,Tt=D.next();it!==null&&!Tt.done;dt++,Tt=D.next()){it.index>dt?(vt=it,it=null):vt=it.sibling;var Ji=w(j,it,Tt.value,B);if(Ji===null){it===null&&(it=vt);break}t&&it&&Ji.alternate===null&&e(j,it),M=c(Ji,M,dt),St===null?nt=Ji:St.sibling=Ji,St=Ji,it=vt}if(Tt.done)return i(j,it),bt&&li(j,dt),nt;if(it===null){for(;!Tt.done;dt++,Tt=D.next())Tt=k(j,Tt.value,B),Tt!==null&&(M=c(Tt,M,dt),St===null?nt=Tt:St.sibling=Tt,St=Tt);return bt&&li(j,dt),nt}for(it=n(it);!Tt.done;dt++,Tt=D.next())Tt=O(it,j,dt,Tt.value,B),Tt!==null&&(t&&Tt.alternate!==null&&it.delete(Tt.key===null?dt:Tt.key),M=c(Tt,M,dt),St===null?nt=Tt:St.sibling=Tt,St=Tt);return t&&it.forEach(function(mb){return e(j,mb)}),bt&&li(j,dt),nt}function Ct(j,M,D,B){if(typeof D=="object"&&D!==null&&D.type===H&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case E:t:{for(var nt=D.key;M!==null;){if(M.key===nt){if(nt=D.type,nt===H){if(M.tag===7){i(j,M.sibling),B=s(M,D.props.children),B.return=j,j=B;break t}}else if(M.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===F&&ua(nt)===M.type){i(j,M.sibling),B=s(M,D.props),Kn(B,D),B.return=j,j=B;break t}i(j,M);break}else e(j,M);M=M.sibling}D.type===H?(B=la(D.props.children,j.mode,B,D.key),B.return=j,j=B):(B=Wl(D.type,D.key,D.props,null,j.mode,B),Kn(B,D),B.return=j,j=B)}return d(j);case z:t:{for(nt=D.key;M!==null;){if(M.key===nt)if(M.tag===4&&M.stateNode.containerInfo===D.containerInfo&&M.stateNode.implementation===D.implementation){i(j,M.sibling),B=s(M,D.children||[]),B.return=j,j=B;break t}else{i(j,M);break}else e(j,M);M=M.sibling}B=cr(D,j.mode,B),B.return=j,j=B}return d(j);case F:return D=ua(D),Ct(j,M,D,B)}if(at(D))return $(j,M,D,B);if(xt(D)){if(nt=xt(D),typeof nt!="function")throw Error(r(150));return D=nt.call(D),st(j,M,D,B)}if(typeof D.then=="function")return Ct(j,M,ns(D),B);if(D.$$typeof===J)return Ct(j,M,ts(j,D),B);ls(j,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,M!==null&&M.tag===6?(i(j,M.sibling),B=s(M,D),B.return=j,j=B):(i(j,M),B=rr(D,j.mode,B),B.return=j,j=B),d(j)):i(j,M)}return function(j,M,D,B){try{Ln=0;var nt=Ct(j,M,D,B);return Pa=null,nt}catch(it){if(it===Xa||it===is)throw it;var St=Te(29,it,null,j.mode);return St.lanes=B,St.return=j,St}finally{}}}var da=_d(!0),Vd=_d(!1),ji=!1;function Sr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ni(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Di(t,e,i){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(At&2)!==0){var s=n.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e,e=Fl(t),xd(t,null,i),e}return Zl(t,n,e,i),Fl(t)}function Gn(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,Df(t,i)}}function Ar(t,e){var i=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var s=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var d={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?s=c=d:c=c.next=d,i=i.next}while(i!==null);c===null?s=c=e:c=c.next=e}else s=c=e;i={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:n.shared,callbacks:n.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var Mr=!1;function Jn(){if(Mr){var t=qa;if(t!==null)throw t}}function Yn(t,e,i,n){Mr=!1;var s=t.updateQueue;ji=!1;var c=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var T=g,C=T.next;T.next=null,d===null?c=C:d.next=C,d=T;var R=t.alternate;R!==null&&(R=R.updateQueue,g=R.lastBaseUpdate,g!==d&&(g===null?R.firstBaseUpdate=C:g.next=C,R.lastBaseUpdate=T))}if(c!==null){var k=s.baseState;d=0,R=C=T=null,g=c;do{var w=g.lane&-536870913,O=w!==g.lane;if(O?(gt&w)===w:(n&w)===w){w!==0&&w===Ya&&(Mr=!0),R!==null&&(R=R.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});t:{var $=t,st=g;w=e;var Ct=i;switch(st.tag){case 1:if($=st.payload,typeof $=="function"){k=$.call(Ct,k,w);break t}k=$;break t;case 3:$.flags=$.flags&-65537|128;case 0:if($=st.payload,w=typeof $=="function"?$.call(Ct,k,w):$,w==null)break t;k=x({},k,w);break t;case 2:ji=!0}}w=g.callback,w!==null&&(t.flags|=64,O&&(t.flags|=8192),O=s.callbacks,O===null?s.callbacks=[w]:O.push(w))}else O={lane:w,tag:g.tag,payload:g.payload,callback:g.callback,next:null},R===null?(C=R=O,T=k):R=R.next=O,d|=w;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;O=g,g=O.next,O.next=null,s.lastBaseUpdate=O,s.shared.pending=null}}while(!0);R===null&&(T=k),s.baseState=T,s.firstBaseUpdate=C,s.lastBaseUpdate=R,c===null&&(s.shared.lanes=0),Ri|=d,t.lanes=d,t.memoizedState=k}}function Ud(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Hd(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Ud(i[t],e)}var Qa=A(null),ss=A(0);function Ld(t,e){t=pi,P(ss,t),P(Qa,e),pi=t|e.baseLanes}function Er(){P(ss,pi),P(Qa,Qa.current)}function jr(){pi=ss.current,V(Qa),V(ss)}var Ae=A(null),_e=null;function Ci(t){var e=t.alternate;P(Kt,Kt.current&1),P(Ae,t),_e===null&&(e===null||Qa.current!==null||e.memoizedState!==null)&&(_e=t)}function Nr(t){P(Kt,Kt.current),P(Ae,t),_e===null&&(_e=t)}function Kd(t){t.tag===22?(P(Kt,Kt.current),P(Ae,t),_e===null&&(_e=t)):wi()}function wi(){P(Kt,Kt.current),P(Ae,Ae.current)}function Me(t){V(Ae),_e===t&&(_e=null),V(Kt)}var Kt=A(0);function os(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Rc(i)||Bc(i)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ri=0,ft=null,Nt=null,Yt=null,rs=!1,Za=!1,ha=!1,cs=0,qn=0,Fa=null,nv=0;function Vt(){throw Error(r(321))}function Dr(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Se(t[i],e[i]))return!1;return!0}function Cr(t,e,i,n,s,c){return ri=c,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?Mh:Yr,ha=!1,c=i(n,s),ha=!1,Za&&(c=Jd(e,i,n,s)),Gd(t),c}function Gd(t){N.H=Qn;var e=Nt!==null&&Nt.next!==null;if(ri=0,Yt=Nt=ft=null,rs=!1,qn=0,Fa=null,e)throw Error(r(300));t===null||qt||(t=t.dependencies,t!==null&&Il(t)&&(qt=!0))}function Jd(t,e,i,n){ft=t;var s=0;do{if(Za&&(Fa=null),qn=0,Za=!1,25<=s)throw Error(r(301));if(s+=1,Yt=Nt=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}N.H=Eh,c=e(i,n)}while(Za);return c}function lv(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?Xn(e):e,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(ft.flags|=1024),e}function wr(){var t=cs!==0;return cs=0,t}function zr(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function Or(t){if(rs){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}rs=!1}ri=0,Yt=Nt=ft=null,Za=!1,qn=cs=0,Fa=null}function re(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?ft.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Gt(){if(Nt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Yt===null?ft.memoizedState:Yt.next;if(e!==null)Yt=e,Nt=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Yt===null?ft.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xn(t){var e=qn;return qn+=1,Fa===null&&(Fa=[]),t=Rd(Fa,t,e),e=ft,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?Mh:Yr),t}function fs(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xn(t);if(t.$$typeof===J)return ee(t)}throw Error(r(438,String(t)))}function Rr(t){var e=null,i=ft.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var n=ft.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=us(),ft.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),n=0;n<t;n++)i[n]=W;return e.index++,i}function ci(t,e){return typeof e=="function"?e(t):e}function ds(t){var e=Gt();return Br(e,Nt,t)}function Br(t,e,i){var n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=i;var s=t.baseQueue,c=n.pending;if(c!==null){if(s!==null){var d=s.next;s.next=c.next,c.next=d}e.baseQueue=s=c,n.pending=null}if(c=t.baseState,s===null)t.memoizedState=c;else{e=s.next;var g=d=null,T=null,C=e,R=!1;do{var k=C.lane&-536870913;if(k!==C.lane?(gt&k)===k:(ri&k)===k){var w=C.revertLane;if(w===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),k===Ya&&(R=!0);else if((ri&w)===w){C=C.next,w===Ya&&(R=!0);continue}else k={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},T===null?(g=T=k,d=c):T=T.next=k,ft.lanes|=w,Ri|=w;k=C.action,ha&&i(c,k),c=C.hasEagerState?C.eagerState:i(c,k)}else w={lane:k,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},T===null?(g=T=w,d=c):T=T.next=w,ft.lanes|=k,Ri|=k;C=C.next}while(C!==null&&C!==e);if(T===null?d=c:T.next=g,!Se(c,t.memoizedState)&&(qt=!0,R&&(i=qa,i!==null)))throw i;t.memoizedState=c,t.baseState=d,t.baseQueue=T,n.lastRenderedState=c}return s===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function kr(t){var e=Gt(),i=e.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var n=i.dispatch,s=i.pending,c=e.memoizedState;if(s!==null){i.pending=null;var d=s=s.next;do c=t(c,d.action),d=d.next;while(d!==s);Se(c,e.memoizedState)||(qt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,n]}function Yd(t,e,i){var n=ft,s=Gt(),c=bt;if(c){if(i===void 0)throw Error(r(407));i=i()}else i=e();var d=!Se((Nt||s).memoizedState,i);if(d&&(s.memoizedState=i,qt=!0),s=s.queue,Ur(Pd.bind(null,n,s,t),[t]),s.getSnapshot!==e||d||Yt!==null&&Yt.memoizedState.tag&1){if(n.flags|=2048,Wa(9,{destroy:void 0},Xd.bind(null,n,s,i,e),null),zt===null)throw Error(r(349));c||(ri&127)!==0||qd(n,e,i)}return i}function qd(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=ft.updateQueue,e===null?(e=us(),ft.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Xd(t,e,i,n){e.value=i,e.getSnapshot=n,Qd(e)&&Zd(t)}function Pd(t,e,i){return i(function(){Qd(e)&&Zd(t)})}function Qd(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Se(t,i)}catch{return!0}}function Zd(t){var e=na(t,2);e!==null&&ge(e,t,2)}function _r(t){var e=re();if(typeof t=="function"){var i=t;if(t=i(),ha){bi(!0);try{i()}finally{bi(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:t},e}function Fd(t,e,i,n){return t.baseState=i,Br(t,Nt,typeof n=="function"?n:ci)}function sv(t,e,i,n,s){if(ys(t))throw Error(r(485));if(t=e.action,t!==null){var c={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};N.T!==null?i(!0):c.isTransition=!1,n(c),i=e.pending,i===null?(c.next=e.pending=c,Wd(e,c)):(c.next=i.next,e.pending=i.next=c)}}function Wd(t,e){var i=e.action,n=e.payload,s=t.state;if(e.isTransition){var c=N.T,d={};N.T=d;try{var g=i(s,n),T=N.S;T!==null&&T(d,g),$d(t,e,g)}catch(C){Vr(t,e,C)}finally{c!==null&&d.types!==null&&(c.types=d.types),N.T=c}}else try{c=i(s,n),$d(t,e,c)}catch(C){Vr(t,e,C)}}function $d(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(n){Id(t,e,n)},function(n){return Vr(t,e,n)}):Id(t,e,i)}function Id(t,e,i){e.status="fulfilled",e.value=i,th(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,Wd(t,i)))}function Vr(t,e,i){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=i,th(e),e=e.next;while(e!==n)}t.action=null}function th(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function eh(t,e){return e}function ih(t,e){if(bt){var i=zt.formState;if(i!==null){t:{var n=ft;if(bt){if(Rt){e:{for(var s=Rt,c=ke;s.nodeType!==8;){if(!c){s=null;break e}if(s=Ve(s.nextSibling),s===null){s=null;break e}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){Rt=Ve(s.nextSibling),n=s.data==="F!";break t}}Mi(n)}n=!1}n&&(e=i[0])}}return i=re(),i.memoizedState=i.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eh,lastRenderedState:e},i.queue=n,i=Sh.bind(null,ft,n),n.dispatch=i,n=_r(!1),c=Jr.bind(null,ft,!1,n.queue),n=re(),s={state:e,dispatch:null,action:t,pending:null},n.queue=s,i=sv.bind(null,ft,s,c,i),s.dispatch=i,n.memoizedState=t,[e,i,!1]}function ah(t){var e=Gt();return nh(e,Nt,t)}function nh(t,e,i){if(e=Br(t,e,eh)[0],t=ds(ci)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Xn(e)}catch(d){throw d===Xa?is:d}else n=e;e=Gt();var s=e.queue,c=s.dispatch;return i!==e.memoizedState&&(ft.flags|=2048,Wa(9,{destroy:void 0},ov.bind(null,s,i),null)),[n,c,t]}function ov(t,e){t.action=e}function lh(t){var e=Gt(),i=Nt;if(i!==null)return nh(e,i,t);Gt(),e=e.memoizedState,i=Gt();var n=i.queue.dispatch;return i.memoizedState=t,[e,n,!1]}function Wa(t,e,i,n){return t={tag:t,create:i,deps:n,inst:e,next:null},e=ft.updateQueue,e===null&&(e=us(),ft.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(n=i.next,i.next=t,t.next=n,e.lastEffect=t),t}function sh(){return Gt().memoizedState}function hs(t,e,i,n){var s=re();ft.flags|=t,s.memoizedState=Wa(1|e,{destroy:void 0},i,n===void 0?null:n)}function ms(t,e,i,n){var s=Gt();n=n===void 0?null:n;var c=s.memoizedState.inst;Nt!==null&&n!==null&&Dr(n,Nt.memoizedState.deps)?s.memoizedState=Wa(e,c,i,n):(ft.flags|=t,s.memoizedState=Wa(1|e,c,i,n))}function oh(t,e){hs(8390656,8,t,e)}function Ur(t,e){ms(2048,8,t,e)}function rv(t){ft.flags|=4;var e=ft.updateQueue;if(e===null)e=us(),ft.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function rh(t){var e=Gt().memoizedState;return rv({ref:e,nextImpl:t}),function(){if((At&2)!==0)throw Error(r(440));return e.impl.apply(void 0,arguments)}}function ch(t,e){return ms(4,2,t,e)}function uh(t,e){return ms(4,4,t,e)}function fh(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dh(t,e,i){i=i!=null?i.concat([t]):null,ms(4,4,fh.bind(null,e,t),i)}function Hr(){}function hh(t,e){var i=Gt();e=e===void 0?null:e;var n=i.memoizedState;return e!==null&&Dr(e,n[1])?n[0]:(i.memoizedState=[t,e],t)}function mh(t,e){var i=Gt();e=e===void 0?null:e;var n=i.memoizedState;if(e!==null&&Dr(e,n[1]))return n[0];if(n=t(),ha){bi(!0);try{t()}finally{bi(!1)}}return i.memoizedState=[n,e],n}function Lr(t,e,i){return i===void 0||(ri&1073741824)!==0&&(gt&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=ym(),ft.lanes|=t,Ri|=t,i)}function yh(t,e,i,n){return Se(i,e)?i:Qa.current!==null?(t=Lr(t,i,n),Se(t,e)||(qt=!0),t):(ri&42)===0||(ri&1073741824)!==0&&(gt&261930)===0?(qt=!0,t.memoizedState=i):(t=ym(),ft.lanes|=t,Ri|=t,e)}function ph(t,e,i,n,s){var c=L.p;L.p=c!==0&&8>c?c:8;var d=N.T,g={};N.T=g,Jr(t,!1,e,i);try{var T=s(),C=N.S;if(C!==null&&C(g,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var R=av(T,n);Pn(t,e,R,Ne(t))}else Pn(t,e,n,Ne(t))}catch(k){Pn(t,e,{then:function(){},status:"rejected",reason:k},Ne())}finally{L.p=c,d!==null&&g.types!==null&&(d.types=g.types),N.T=d}}function cv(){}function Kr(t,e,i,n){if(t.tag!==5)throw Error(r(476));var s=gh(t).queue;ph(t,s,e,Q,i===null?cv:function(){return vh(t),i(n)})}function gh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:Q},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function vh(t){var e=gh(t);e.next===null&&(e=t.alternate.memoizedState),Pn(t,e.next.queue,{},Ne())}function Gr(){return ee(ul)}function bh(){return Gt().memoizedState}function xh(){return Gt().memoizedState}function uv(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=Ne();t=Ni(i);var n=Di(e,t,i);n!==null&&(ge(n,e,i),Gn(n,e,i)),e={cache:gr()},t.payload=e;return}e=e.return}}function fv(t,e,i){var n=Ne();i={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ys(t)?Th(e,i):(i=sr(t,e,i,n),i!==null&&(ge(i,t,n),Ah(i,e,n)))}function Sh(t,e,i){var n=Ne();Pn(t,e,i,n)}function Pn(t,e,i,n){var s={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ys(t))Th(e,s);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var d=e.lastRenderedState,g=c(d,i);if(s.hasEagerState=!0,s.eagerState=g,Se(g,d))return Zl(t,e,s,0),zt===null&&Ql(),!1}catch{}finally{}if(i=sr(t,e,s,n),i!==null)return ge(i,t,n),Ah(i,e,n),!0}return!1}function Jr(t,e,i,n){if(n={lane:2,revertLane:Sc(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ys(t)){if(e)throw Error(r(479))}else e=sr(t,i,n,2),e!==null&&ge(e,t,2)}function ys(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Th(t,e){Za=rs=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Ah(t,e,i){if((i&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,Df(t,i)}}var Qn={readContext:ee,use:fs,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt,useHostTransitionStatus:Vt,useFormState:Vt,useActionState:Vt,useOptimistic:Vt,useMemoCache:Vt,useCacheRefresh:Vt};Qn.useEffectEvent=Vt;var Mh={readContext:ee,use:fs,useCallback:function(t,e){return re().memoizedState=[t,e===void 0?null:e],t},useContext:ee,useEffect:oh,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,hs(4194308,4,fh.bind(null,e,t),i)},useLayoutEffect:function(t,e){return hs(4194308,4,t,e)},useInsertionEffect:function(t,e){hs(4,2,t,e)},useMemo:function(t,e){var i=re();e=e===void 0?null:e;var n=t();if(ha){bi(!0);try{t()}finally{bi(!1)}}return i.memoizedState=[n,e],n},useReducer:function(t,e,i){var n=re();if(i!==void 0){var s=i(e);if(ha){bi(!0);try{i(e)}finally{bi(!1)}}}else s=e;return n.memoizedState=n.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},n.queue=t,t=t.dispatch=fv.bind(null,ft,t),[n.memoizedState,t]},useRef:function(t){var e=re();return t={current:t},e.memoizedState=t},useState:function(t){t=_r(t);var e=t.queue,i=Sh.bind(null,ft,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Hr,useDeferredValue:function(t,e){var i=re();return Lr(i,t,e)},useTransition:function(){var t=_r(!1);return t=ph.bind(null,ft,t.queue,!0,!1),re().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var n=ft,s=re();if(bt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=e(),zt===null)throw Error(r(349));(gt&127)!==0||qd(n,e,i)}s.memoizedState=i;var c={value:i,getSnapshot:e};return s.queue=c,oh(Pd.bind(null,n,c,t),[t]),n.flags|=2048,Wa(9,{destroy:void 0},Xd.bind(null,n,c,i,e),null),i},useId:function(){var t=re(),e=zt.identifierPrefix;if(bt){var i=Qe,n=Pe;i=(n&~(1<<32-xe(n)-1)).toString(32)+i,e="_"+e+"R_"+i,i=cs++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=nv++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Gr,useFormState:ih,useActionState:ih,useOptimistic:function(t){var e=re();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=Jr.bind(null,ft,!0,i),i.dispatch=e,[t,e]},useMemoCache:Rr,useCacheRefresh:function(){return re().memoizedState=uv.bind(null,ft)},useEffectEvent:function(t){var e=re(),i={impl:t};return e.memoizedState=i,function(){if((At&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},Yr={readContext:ee,use:fs,useCallback:hh,useContext:ee,useEffect:Ur,useImperativeHandle:dh,useInsertionEffect:ch,useLayoutEffect:uh,useMemo:mh,useReducer:ds,useRef:sh,useState:function(){return ds(ci)},useDebugValue:Hr,useDeferredValue:function(t,e){var i=Gt();return yh(i,Nt.memoizedState,t,e)},useTransition:function(){var t=ds(ci)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:Xn(t),e]},useSyncExternalStore:Yd,useId:bh,useHostTransitionStatus:Gr,useFormState:ah,useActionState:ah,useOptimistic:function(t,e){var i=Gt();return Fd(i,Nt,t,e)},useMemoCache:Rr,useCacheRefresh:xh};Yr.useEffectEvent=rh;var Eh={readContext:ee,use:fs,useCallback:hh,useContext:ee,useEffect:Ur,useImperativeHandle:dh,useInsertionEffect:ch,useLayoutEffect:uh,useMemo:mh,useReducer:kr,useRef:sh,useState:function(){return kr(ci)},useDebugValue:Hr,useDeferredValue:function(t,e){var i=Gt();return Nt===null?Lr(i,t,e):yh(i,Nt.memoizedState,t,e)},useTransition:function(){var t=kr(ci)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:Xn(t),e]},useSyncExternalStore:Yd,useId:bh,useHostTransitionStatus:Gr,useFormState:lh,useActionState:lh,useOptimistic:function(t,e){var i=Gt();return Nt!==null?Fd(i,Nt,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Rr,useCacheRefresh:xh};Eh.useEffectEvent=rh;function qr(t,e,i,n){e=t.memoizedState,i=i(n,e),i=i==null?e:x({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Xr={enqueueSetState:function(t,e,i){t=t._reactInternals;var n=Ne(),s=Ni(n);s.payload=e,i!=null&&(s.callback=i),e=Di(t,s,n),e!==null&&(ge(e,t,n),Gn(e,t,n))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var n=Ne(),s=Ni(n);s.tag=1,s.payload=e,i!=null&&(s.callback=i),e=Di(t,s,n),e!==null&&(ge(e,t,n),Gn(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=Ne(),n=Ni(i);n.tag=2,e!=null&&(n.callback=e),e=Di(t,n,i),e!==null&&(ge(e,t,i),Gn(e,t,i))}};function jh(t,e,i,n,s,c,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,c,d):e.prototype&&e.prototype.isPureReactComponent?!Bn(i,n)||!Bn(s,c):!0}function Nh(t,e,i,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,n),e.state!==t&&Xr.enqueueReplaceState(e,e.state,null)}function ma(t,e){var i=e;if("ref"in e){i={};for(var n in e)n!=="ref"&&(i[n]=e[n])}if(t=t.defaultProps){i===e&&(i=x({},i));for(var s in t)i[s]===void 0&&(i[s]=t[s])}return i}function Dh(t){Pl(t)}function Ch(t){console.error(t)}function wh(t){Pl(t)}function ps(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function zh(t,e,i){try{var n=t.onCaughtError;n(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Pr(t,e,i){return i=Ni(i),i.tag=3,i.payload={element:null},i.callback=function(){ps(t,e)},i}function Oh(t){return t=Ni(t),t.tag=3,t}function Rh(t,e,i,n){var s=i.type.getDerivedStateFromError;if(typeof s=="function"){var c=n.value;t.payload=function(){return s(c)},t.callback=function(){zh(e,i,n)}}var d=i.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){zh(e,i,n),typeof s!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})})}function dv(t,e,i,n,s){if(i.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=i.alternate,e!==null&&Ja(e,i,s,!0),i=Ae.current,i!==null){switch(i.tag){case 31:case 13:return _e===null?Ds():i.alternate===null&&Ut===0&&(Ut=3),i.flags&=-257,i.flags|=65536,i.lanes=s,n===as?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([n]):e.add(n),vc(t,n,s)),!1;case 22:return i.flags|=65536,n===as?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([n]):i.add(n)),vc(t,n,s)),!1}throw Error(r(435,i.tag))}return vc(t,n,s),Ds(),!1}if(bt)return e=Ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,n!==dr&&(t=Error(r(422),{cause:n}),Vn(Oe(t,i)))):(n!==dr&&(e=Error(r(423),{cause:n}),Vn(Oe(e,i))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,n=Oe(n,i),s=Pr(t.stateNode,n,s),Ar(t,s),Ut!==4&&(Ut=2)),!1;var c=Error(r(520),{cause:n});if(c=Oe(c,i),il===null?il=[c]:il.push(c),Ut!==4&&(Ut=2),e===null)return!0;n=Oe(n,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=s&-s,i.lanes|=t,t=Pr(i.stateNode,n,t),Ar(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Bi===null||!Bi.has(c))))return i.flags|=65536,s&=-s,i.lanes|=s,s=Oh(s),Rh(s,t,i,n),Ar(i,s),!1}i=i.return}while(i!==null);return!1}var Qr=Error(r(461)),qt=!1;function ie(t,e,i,n){e.child=t===null?Vd(e,null,i,n):da(e,t.child,i,n)}function Bh(t,e,i,n,s){i=i.render;var c=e.ref;if("ref"in n){var d={};for(var g in n)g!=="ref"&&(d[g]=n[g])}else d=n;return ra(e),n=Cr(t,e,i,d,c,s),g=wr(),t!==null&&!qt?(zr(t,e,s),ui(t,e,s)):(bt&&g&&ur(e),e.flags|=1,ie(t,e,n,s),e.child)}function kh(t,e,i,n,s){if(t===null){var c=i.type;return typeof c=="function"&&!or(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,_h(t,e,c,n,s)):(t=Wl(i.type,null,n,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!ic(t,s)){var d=c.memoizedProps;if(i=i.compare,i=i!==null?i:Bn,i(d,n)&&t.ref===e.ref)return ui(t,e,s)}return e.flags|=1,t=ni(c,n),t.ref=e.ref,t.return=e,e.child=t}function _h(t,e,i,n,s){if(t!==null){var c=t.memoizedProps;if(Bn(c,n)&&t.ref===e.ref)if(qt=!1,e.pendingProps=n=c,ic(t,s))(t.flags&131072)!==0&&(qt=!0);else return e.lanes=t.lanes,ui(t,e,s)}return Zr(t,e,i,n,s)}function Vh(t,e,i,n){var s=n.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(n=e.child=t.child,s=0;n!==null;)s=s|n.lanes|n.childLanes,n=n.sibling;n=s&~c}else n=0,e.child=null;return Uh(t,e,c,i,n)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&es(e,c!==null?c.cachePool:null),c!==null?Ld(e,c):Er(),Kd(e);else return n=e.lanes=536870912,Uh(t,e,c!==null?c.baseLanes|i:i,i,n)}else c!==null?(es(e,c.cachePool),Ld(e,c),wi(),e.memoizedState=null):(t!==null&&es(e,null),Er(),wi());return ie(t,e,s,i),e.child}function Zn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Uh(t,e,i,n,s){var c=br();return c=c===null?null:{parent:Jt._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&es(e,null),Er(),Kd(e),t!==null&&Ja(t,e,n,!0),e.childLanes=s,null}function gs(t,e){return e=bs({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Hh(t,e,i){return da(e,t.child,null,i),t=gs(e,e.pendingProps),t.flags|=2,Me(e),e.memoizedState=null,t}function hv(t,e,i){var n=e.pendingProps,s=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(bt){if(n.mode==="hidden")return t=gs(e,n),e.lanes=536870912,Zn(null,t);if(Nr(e),(t=Rt)?(t=Wm(t,ke),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ti!==null?{id:Pe,overflow:Qe}:null,retryLane:536870912,hydrationErrors:null},i=Td(t),i.return=e,e.child=i,te=e,Rt=null)):t=null,t===null)throw Mi(e);return e.lanes=536870912,null}return gs(e,n)}var c=t.memoizedState;if(c!==null){var d=c.dehydrated;if(Nr(e),s)if(e.flags&256)e.flags&=-257,e=Hh(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(r(558));else if(qt||Ja(t,e,i,!1),s=(i&t.childLanes)!==0,qt||s){if(n=zt,n!==null&&(d=Cf(n,i),d!==0&&d!==c.retryLane))throw c.retryLane=d,na(t,d),ge(n,t,d),Qr;Ds(),e=Hh(t,e,i)}else t=c.treeContext,Rt=Ve(d.nextSibling),te=e,bt=!0,Ai=null,ke=!1,t!==null&&Ed(e,t),e=gs(e,n),e.flags|=4096;return e}return t=ni(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function vs(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Zr(t,e,i,n,s){return ra(e),i=Cr(t,e,i,n,void 0,s),n=wr(),t!==null&&!qt?(zr(t,e,s),ui(t,e,s)):(bt&&n&&ur(e),e.flags|=1,ie(t,e,i,s),e.child)}function Lh(t,e,i,n,s,c){return ra(e),e.updateQueue=null,i=Jd(e,n,i,s),Gd(t),n=wr(),t!==null&&!qt?(zr(t,e,c),ui(t,e,c)):(bt&&n&&ur(e),e.flags|=1,ie(t,e,i,c),e.child)}function Kh(t,e,i,n,s){if(ra(e),e.stateNode===null){var c=Ha,d=i.contextType;typeof d=="object"&&d!==null&&(c=ee(d)),c=new i(n,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Xr,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=n,c.state=e.memoizedState,c.refs={},Sr(e),d=i.contextType,c.context=typeof d=="object"&&d!==null?ee(d):Ha,c.state=e.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(qr(e,i,d,n),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&Xr.enqueueReplaceState(c,c.state,null),Yn(e,n,c,s),Jn(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){c=e.stateNode;var g=e.memoizedProps,T=ma(i,g);c.props=T;var C=c.context,R=i.contextType;d=Ha,typeof R=="object"&&R!==null&&(d=ee(R));var k=i.getDerivedStateFromProps;R=typeof k=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=e.pendingProps!==g,R||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||C!==d)&&Nh(e,c,n,d),ji=!1;var w=e.memoizedState;c.state=w,Yn(e,n,c,s),Jn(),C=e.memoizedState,g||w!==C||ji?(typeof k=="function"&&(qr(e,i,k,n),C=e.memoizedState),(T=ji||jh(e,i,T,n,w,C,d))?(R||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=C),c.props=n,c.state=C,c.context=d,n=T):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{c=e.stateNode,Tr(t,e),d=e.memoizedProps,R=ma(i,d),c.props=R,k=e.pendingProps,w=c.context,C=i.contextType,T=Ha,typeof C=="object"&&C!==null&&(T=ee(C)),g=i.getDerivedStateFromProps,(C=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==k||w!==T)&&Nh(e,c,n,T),ji=!1,w=e.memoizedState,c.state=w,Yn(e,n,c,s),Jn();var O=e.memoizedState;d!==k||w!==O||ji||t!==null&&t.dependencies!==null&&Il(t.dependencies)?(typeof g=="function"&&(qr(e,i,g,n),O=e.memoizedState),(R=ji||jh(e,i,R,n,w,O,T)||t!==null&&t.dependencies!==null&&Il(t.dependencies))?(C||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,O,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,O,T)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=O),c.props=n,c.state=O,c.context=T,n=R):(typeof c.componentDidUpdate!="function"||d===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),n=!1)}return c=n,vs(t,e),n=(e.flags&128)!==0,c||n?(c=e.stateNode,i=n&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&n?(e.child=da(e,t.child,null,s),e.child=da(e,null,i,s)):ie(t,e,i,s),e.memoizedState=c.state,t=e.child):t=ui(t,e,s),t}function Gh(t,e,i,n){return sa(),e.flags|=256,ie(t,e,i,n),e.child}var Fr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wr(t){return{baseLanes:t,cachePool:zd()}}function $r(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=je),t}function Jh(t,e,i){var n=e.pendingProps,s=!1,c=(e.flags&128)!==0,d;if((d=c)||(d=t!==null&&t.memoizedState===null?!1:(Kt.current&2)!==0),d&&(s=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(bt){if(s?Ci(e):wi(),(t=Rt)?(t=Wm(t,ke),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ti!==null?{id:Pe,overflow:Qe}:null,retryLane:536870912,hydrationErrors:null},i=Td(t),i.return=e,e.child=i,te=e,Rt=null)):t=null,t===null)throw Mi(e);return Bc(t)?e.lanes=32:e.lanes=536870912,null}var g=n.children;return n=n.fallback,s?(wi(),s=e.mode,g=bs({mode:"hidden",children:g},s),n=la(n,s,i,null),g.return=e,n.return=e,g.sibling=n,e.child=g,n=e.child,n.memoizedState=Wr(i),n.childLanes=$r(t,d,i),e.memoizedState=Fr,Zn(null,n)):(Ci(e),Ir(e,g))}var T=t.memoizedState;if(T!==null&&(g=T.dehydrated,g!==null)){if(c)e.flags&256?(Ci(e),e.flags&=-257,e=tc(t,e,i)):e.memoizedState!==null?(wi(),e.child=t.child,e.flags|=128,e=null):(wi(),g=n.fallback,s=e.mode,n=bs({mode:"visible",children:n.children},s),g=la(g,s,i,null),g.flags|=2,n.return=e,g.return=e,n.sibling=g,e.child=n,da(e,t.child,null,i),n=e.child,n.memoizedState=Wr(i),n.childLanes=$r(t,d,i),e.memoizedState=Fr,e=Zn(null,n));else if(Ci(e),Bc(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var C=d.dgst;d=C,n=Error(r(419)),n.stack="",n.digest=d,Vn({value:n,source:null,stack:null}),e=tc(t,e,i)}else if(qt||Ja(t,e,i,!1),d=(i&t.childLanes)!==0,qt||d){if(d=zt,d!==null&&(n=Cf(d,i),n!==0&&n!==T.retryLane))throw T.retryLane=n,na(t,n),ge(d,t,n),Qr;Rc(g)||Ds(),e=tc(t,e,i)}else Rc(g)?(e.flags|=192,e.child=t.child,e=null):(t=T.treeContext,Rt=Ve(g.nextSibling),te=e,bt=!0,Ai=null,ke=!1,t!==null&&Ed(e,t),e=Ir(e,n.children),e.flags|=4096);return e}return s?(wi(),g=n.fallback,s=e.mode,T=t.child,C=T.sibling,n=ni(T,{mode:"hidden",children:n.children}),n.subtreeFlags=T.subtreeFlags&65011712,C!==null?g=ni(C,g):(g=la(g,s,i,null),g.flags|=2),g.return=e,n.return=e,n.sibling=g,e.child=n,Zn(null,n),n=e.child,g=t.child.memoizedState,g===null?g=Wr(i):(s=g.cachePool,s!==null?(T=Jt._currentValue,s=s.parent!==T?{parent:T,pool:T}:s):s=zd(),g={baseLanes:g.baseLanes|i,cachePool:s}),n.memoizedState=g,n.childLanes=$r(t,d,i),e.memoizedState=Fr,Zn(t.child,n)):(Ci(e),i=t.child,t=i.sibling,i=ni(i,{mode:"visible",children:n.children}),i.return=e,i.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=i,e.memoizedState=null,i)}function Ir(t,e){return e=bs({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function bs(t,e){return t=Te(22,t,null,e),t.lanes=0,t}function tc(t,e,i){return da(e,t.child,null,i),t=Ir(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yh(t,e,i){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),yr(t.return,e,i)}function ec(t,e,i,n,s,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:s,treeForkCount:c}:(d.isBackwards=e,d.rendering=null,d.renderingStartTime=0,d.last=n,d.tail=i,d.tailMode=s,d.treeForkCount=c)}function qh(t,e,i){var n=e.pendingProps,s=n.revealOrder,c=n.tail;n=n.children;var d=Kt.current,g=(d&2)!==0;if(g?(d=d&1|2,e.flags|=128):d&=1,P(Kt,d),ie(t,e,n,i),n=bt?_n:0,!g&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,i,e);else if(t.tag===19)Yh(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(s){case"forwards":for(i=e.child,s=null;i!==null;)t=i.alternate,t!==null&&os(t)===null&&(s=i),i=i.sibling;i=s,i===null?(s=e.child,e.child=null):(s=i.sibling,i.sibling=null),ec(e,!1,s,i,c,n);break;case"backwards":case"unstable_legacy-backwards":for(i=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&os(t)===null){e.child=s;break}t=s.sibling,s.sibling=i,i=s,s=t}ec(e,!0,i,null,c,n);break;case"together":ec(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function ui(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Ri|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(Ja(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,i=ni(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ni(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function ic(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Il(t)))}function mv(t,e,i){switch(e.tag){case 3:oe(e,e.stateNode.containerInfo),Ei(e,Jt,t.memoizedState.cache),sa();break;case 27:case 5:Sn(e);break;case 4:oe(e,e.stateNode.containerInfo);break;case 10:Ei(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Nr(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Ci(e),e.flags|=128,null):(i&e.child.childLanes)!==0?Jh(t,e,i):(Ci(e),t=ui(t,e,i),t!==null?t.sibling:null);Ci(e);break;case 19:var s=(t.flags&128)!==0;if(n=(i&e.childLanes)!==0,n||(Ja(t,e,i,!1),n=(i&e.childLanes)!==0),s){if(n)return qh(t,e,i);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),P(Kt,Kt.current),n)break;return null;case 22:return e.lanes=0,Vh(t,e,i,e.pendingProps);case 24:Ei(e,Jt,t.memoizedState.cache)}return ui(t,e,i)}function Xh(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!ic(t,i)&&(e.flags&128)===0)return qt=!1,mv(t,e,i);qt=(t.flags&131072)!==0}else qt=!1,bt&&(e.flags&1048576)!==0&&Md(e,_n,e.index);switch(e.lanes=0,e.tag){case 16:t:{var n=e.pendingProps;if(t=ua(e.elementType),e.type=t,typeof t=="function")or(t)?(n=ma(t,n),e.tag=1,e=Kh(null,e,t,n,i)):(e.tag=0,e=Zr(null,e,t,n,i));else{if(t!=null){var s=t.$$typeof;if(s===_){e.tag=11,e=Bh(null,e,t,n,i);break t}else if(s===Z){e.tag=14,e=kh(null,e,t,n,i);break t}}throw e=X(t)||t,Error(r(306,e,""))}}return e;case 0:return Zr(t,e,e.type,e.pendingProps,i);case 1:return n=e.type,s=ma(n,e.pendingProps),Kh(t,e,n,s,i);case 3:t:{if(oe(e,e.stateNode.containerInfo),t===null)throw Error(r(387));n=e.pendingProps;var c=e.memoizedState;s=c.element,Tr(t,e),Yn(e,n,null,i);var d=e.memoizedState;if(n=d.cache,Ei(e,Jt,n),n!==c.cache&&pr(e,[Jt],i,!0),Jn(),n=d.element,c.isDehydrated)if(c={element:n,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Gh(t,e,n,i);break t}else if(n!==s){s=Oe(Error(r(424)),e),Vn(s),e=Gh(t,e,n,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Rt=Ve(t.firstChild),te=e,bt=!0,Ai=null,ke=!0,i=Vd(e,null,n,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(sa(),n===s){e=ui(t,e,i);break t}ie(t,e,n,i)}e=e.child}return e;case 26:return vs(t,e),t===null?(i=ay(e.type,null,e.pendingProps,null))?e.memoizedState=i:bt||(i=e.type,t=e.pendingProps,n=ks(mt.current).createElement(i),n[It]=e,n[fe]=t,ae(n,i,t),Wt(n),e.stateNode=n):e.memoizedState=ay(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Sn(e),t===null&&bt&&(n=e.stateNode=ty(e.type,e.pendingProps,mt.current),te=e,ke=!0,s=Rt,Ui(e.type)?(kc=s,Rt=Ve(n.firstChild)):Rt=s),ie(t,e,e.pendingProps.children,i),vs(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&bt&&((s=n=Rt)&&(n=Yv(n,e.type,e.pendingProps,ke),n!==null?(e.stateNode=n,te=e,Rt=Ve(n.firstChild),ke=!1,s=!0):s=!1),s||Mi(e)),Sn(e),s=e.type,c=e.pendingProps,d=t!==null?t.memoizedProps:null,n=c.children,wc(s,c)?n=null:d!==null&&wc(s,d)&&(e.flags|=32),e.memoizedState!==null&&(s=Cr(t,e,lv,null,null,i),ul._currentValue=s),vs(t,e),ie(t,e,n,i),e.child;case 6:return t===null&&bt&&((t=i=Rt)&&(i=qv(i,e.pendingProps,ke),i!==null?(e.stateNode=i,te=e,Rt=null,t=!0):t=!1),t||Mi(e)),null;case 13:return Jh(t,e,i);case 4:return oe(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=da(e,null,n,i):ie(t,e,n,i),e.child;case 11:return Bh(t,e,e.type,e.pendingProps,i);case 7:return ie(t,e,e.pendingProps,i),e.child;case 8:return ie(t,e,e.pendingProps.children,i),e.child;case 12:return ie(t,e,e.pendingProps.children,i),e.child;case 10:return n=e.pendingProps,Ei(e,e.type,n.value),ie(t,e,n.children,i),e.child;case 9:return s=e.type._context,n=e.pendingProps.children,ra(e),s=ee(s),n=n(s),e.flags|=1,ie(t,e,n,i),e.child;case 14:return kh(t,e,e.type,e.pendingProps,i);case 15:return _h(t,e,e.type,e.pendingProps,i);case 19:return qh(t,e,i);case 31:return hv(t,e,i);case 22:return Vh(t,e,i,e.pendingProps);case 24:return ra(e),n=ee(Jt),t===null?(s=br(),s===null&&(s=zt,c=gr(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=i),s=c),e.memoizedState={parent:n,cache:s},Sr(e),Ei(e,Jt,s)):((t.lanes&i)!==0&&(Tr(t,e),Yn(e,null,null,i),Jn()),s=t.memoizedState,c=e.memoizedState,s.parent!==n?(s={parent:n,cache:n},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),Ei(e,Jt,n)):(n=c.cache,Ei(e,Jt,n),n!==s.cache&&pr(e,[Jt],i,!0))),ie(t,e,e.pendingProps.children,i),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}function fi(t){t.flags|=4}function ac(t,e,i,n,s){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(s&335544128)===s)if(t.stateNode.complete)t.flags|=8192;else if(bm())t.flags|=8192;else throw fa=as,xr}else t.flags&=-16777217}function Ph(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ry(e))if(bm())t.flags|=8192;else throw fa=as,xr}function xs(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?jf():536870912,t.lanes|=e,en|=e)}function Fn(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,n=0;if(e)for(var s=t.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags&65011712,n|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)i|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=n,t.childLanes=i,e}function yv(t,e,i){var n=e.pendingProps;switch(fr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return Bt(e),null;case 3:return i=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),oi(Jt),Lt(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ga(e)?fi(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,hr())),Bt(e),null;case 26:var s=e.type,c=e.memoizedState;return t===null?(fi(e),c!==null?(Bt(e),Ph(e,c)):(Bt(e),ac(e,s,null,n,i))):c?c!==t.memoizedState?(fi(e),Bt(e),Ph(e,c)):(Bt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&fi(e),Bt(e),ac(e,s,t,n,i)),null;case 27:if(zl(e),i=mt.current,s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&fi(e);else{if(!n){if(e.stateNode===null)throw Error(r(166));return Bt(e),null}t=et.current,Ga(e)?jd(e):(t=ty(s,n,i),e.stateNode=t,fi(e))}return Bt(e),null;case 5:if(zl(e),s=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&fi(e);else{if(!n){if(e.stateNode===null)throw Error(r(166));return Bt(e),null}if(c=et.current,Ga(e))jd(e);else{var d=ks(mt.current);switch(c){case 1:c=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=d.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof n.is=="string"?d.createElement("select",{is:n.is}):d.createElement("select"),n.multiple?c.multiple=!0:n.size&&(c.size=n.size);break;default:c=typeof n.is=="string"?d.createElement(s,{is:n.is}):d.createElement(s)}}c[It]=e,c[fe]=n;t:for(d=e.child;d!==null;){if(d.tag===5||d.tag===6)c.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break t;for(;d.sibling===null;){if(d.return===null||d.return===e)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}e.stateNode=c;t:switch(ae(c,s,n),s){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&fi(e)}}return Bt(e),ac(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&fi(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(r(166));if(t=mt.current,Ga(e)){if(t=e.stateNode,i=e.memoizedProps,n=null,s=te,s!==null)switch(s.tag){case 27:case 5:n=s.memoizedProps}t[It]=e,t=!!(t.nodeValue===i||n!==null&&n.suppressHydrationWarning===!0||Jm(t.nodeValue,i)),t||Mi(e,!0)}else t=ks(t).createTextNode(n),t[It]=e,e.stateNode=t}return Bt(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(n=Ga(e),i!==null){if(t===null){if(!n)throw Error(r(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[It]=e}else sa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),t=!1}else i=hr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Me(e),e):(Me(e),null);if((e.flags&128)!==0)throw Error(r(558))}return Bt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Ga(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(r(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(r(317));s[It]=e}else sa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else s=hr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Me(e),e):(Me(e),null)}return Me(e),(e.flags&128)!==0?(e.lanes=i,e):(i=n!==null,t=t!==null&&t.memoizedState!==null,i&&(n=e.child,s=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(s=n.alternate.memoizedState.cachePool.pool),c=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(c=n.memoizedState.cachePool.pool),c!==s&&(n.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),xs(e,e.updateQueue),Bt(e),null);case 4:return Lt(),t===null&&Ec(e.stateNode.containerInfo),Bt(e),null;case 10:return oi(e.type),Bt(e),null;case 19:if(V(Kt),n=e.memoizedState,n===null)return Bt(e),null;if(s=(e.flags&128)!==0,c=n.rendering,c===null)if(s)Fn(n,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=os(t),c!==null){for(e.flags|=128,Fn(n,!1),t=c.updateQueue,e.updateQueue=t,xs(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Sd(i,t),i=i.sibling;return P(Kt,Kt.current&1|2),bt&&li(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&ve()>Es&&(e.flags|=128,s=!0,Fn(n,!1),e.lanes=4194304)}else{if(!s)if(t=os(c),t!==null){if(e.flags|=128,s=!0,t=t.updateQueue,e.updateQueue=t,xs(e,t),Fn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!c.alternate&&!bt)return Bt(e),null}else 2*ve()-n.renderingStartTime>Es&&i!==536870912&&(e.flags|=128,s=!0,Fn(n,!1),e.lanes=4194304);n.isBackwards?(c.sibling=e.child,e.child=c):(t=n.last,t!==null?t.sibling=c:e.child=c,n.last=c)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=ve(),t.sibling=null,i=Kt.current,P(Kt,s?i&1|2:i&1),bt&&li(e,n.treeForkCount),t):(Bt(e),null);case 22:case 23:return Me(e),jr(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(i&536870912)!==0&&(e.flags&128)===0&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),i=e.updateQueue,i!==null&&xs(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048),t!==null&&V(ca),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),oi(Jt),Bt(e),null;case 25:return null;case 30:return null}throw Error(r(156,e.tag))}function pv(t,e){switch(fr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oi(Jt),Lt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return zl(e),null;case 31:if(e.memoizedState!==null){if(Me(e),e.alternate===null)throw Error(r(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Me(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V(Kt),null;case 4:return Lt(),null;case 10:return oi(e.type),null;case 22:case 23:return Me(e),jr(),t!==null&&V(ca),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return oi(Jt),null;case 25:return null;default:return null}}function Qh(t,e){switch(fr(e),e.tag){case 3:oi(Jt),Lt();break;case 26:case 27:case 5:zl(e);break;case 4:Lt();break;case 31:e.memoizedState!==null&&Me(e);break;case 13:Me(e);break;case 19:V(Kt);break;case 10:oi(e.type);break;case 22:case 23:Me(e),jr(),t!==null&&V(ca);break;case 24:oi(Jt)}}function Wn(t,e){try{var i=e.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var s=n.next;i=s;do{if((i.tag&t)===t){n=void 0;var c=i.create,d=i.inst;n=c(),d.destroy=n}i=i.next}while(i!==s)}}catch(g){jt(e,e.return,g)}}function zi(t,e,i){try{var n=e.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var c=s.next;n=c;do{if((n.tag&t)===t){var d=n.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,s=e;var T=i,C=g;try{C()}catch(R){jt(s,T,R)}}}n=n.next}while(n!==c)}}catch(R){jt(e,e.return,R)}}function Zh(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{Hd(e,i)}catch(n){jt(t,t.return,n)}}}function Fh(t,e,i){i.props=ma(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(n){jt(t,e,n)}}function $n(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof i=="function"?t.refCleanup=i(n):i.current=n}}catch(s){jt(t,e,s)}}function Ze(t,e){var i=t.ref,n=t.refCleanup;if(i!==null)if(typeof n=="function")try{n()}catch(s){jt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(s){jt(t,e,s)}else i.current=null}function Wh(t){var e=t.type,i=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break t;case"img":i.src?n.src=i.src:i.srcSet&&(n.srcset=i.srcSet)}}catch(s){jt(t,t.return,s)}}function nc(t,e,i){try{var n=t.stateNode;Uv(n,t.type,i,e),n[fe]=e}catch(s){jt(t,t.return,s)}}function $h(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ui(t.type)||t.tag===4}function lc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$h(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ui(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sc(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(t),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=ii));else if(n!==4&&(n===27&&Ui(t.type)&&(i=t.stateNode,e=null),t=t.child,t!==null))for(sc(t,e,i),t=t.sibling;t!==null;)sc(t,e,i),t=t.sibling}function Ss(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(n!==4&&(n===27&&Ui(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(Ss(t,e,i),t=t.sibling;t!==null;)Ss(t,e,i),t=t.sibling}function Ih(t){var e=t.stateNode,i=t.memoizedProps;try{for(var n=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ae(e,n,i),e[It]=t,e[fe]=i}catch(c){jt(t,t.return,c)}}var di=!1,Xt=!1,oc=!1,tm=typeof WeakSet=="function"?WeakSet:Set,$t=null;function gv(t,e){if(t=t.containerInfo,Dc=Gs,t=dd(t),tr(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var s=n.anchorOffset,c=n.focusNode;n=n.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break t}var d=0,g=-1,T=-1,C=0,R=0,k=t,w=null;e:for(;;){for(var O;k!==i||s!==0&&k.nodeType!==3||(g=d+s),k!==c||n!==0&&k.nodeType!==3||(T=d+n),k.nodeType===3&&(d+=k.nodeValue.length),(O=k.firstChild)!==null;)w=k,k=O;for(;;){if(k===t)break e;if(w===i&&++C===s&&(g=d),w===c&&++R===n&&(T=d),(O=k.nextSibling)!==null)break;k=w,w=k.parentNode}k=O}i=g===-1||T===-1?null:{start:g,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(Cc={focusedElem:t,selectionRange:i},Gs=!1,$t=e;$t!==null;)if(e=$t,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$t=t;else for(;$t!==null;){switch(e=$t,c=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)s=t[i],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,i=e,s=c.memoizedProps,c=c.memoizedState,n=i.stateNode;try{var $=ma(i.type,s);t=n.getSnapshotBeforeUpdate($,c),n.__reactInternalSnapshotBeforeUpdate=t}catch(st){jt(i,i.return,st)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,i=t.nodeType,i===9)Oc(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Oc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,$t=t;break}$t=e.return}}function em(t,e,i){var n=i.flags;switch(i.tag){case 0:case 11:case 15:mi(t,i),n&4&&Wn(5,i);break;case 1:if(mi(t,i),n&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(d){jt(i,i.return,d)}else{var s=ma(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(d){jt(i,i.return,d)}}n&64&&Zh(i),n&512&&$n(i,i.return);break;case 3:if(mi(t,i),n&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{Hd(t,e)}catch(d){jt(i,i.return,d)}}break;case 27:e===null&&n&4&&Ih(i);case 26:case 5:mi(t,i),e===null&&n&4&&Wh(i),n&512&&$n(i,i.return);break;case 12:mi(t,i);break;case 31:mi(t,i),n&4&&nm(t,i);break;case 13:mi(t,i),n&4&&lm(t,i),n&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=jv.bind(null,i),Xv(t,i))));break;case 22:if(n=i.memoizedState!==null||di,!n){e=e!==null&&e.memoizedState!==null||Xt,s=di;var c=Xt;di=n,(Xt=e)&&!c?yi(t,i,(i.subtreeFlags&8772)!==0):mi(t,i),di=s,Xt=c}break;case 30:break;default:mi(t,i)}}function im(t){var e=t.alternate;e!==null&&(t.alternate=null,im(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Vo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _t=null,he=!1;function hi(t,e,i){for(i=i.child;i!==null;)am(t,e,i),i=i.sibling}function am(t,e,i){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Tn,i)}catch{}switch(i.tag){case 26:Xt||Ze(i,e),hi(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Xt||Ze(i,e);var n=_t,s=he;Ui(i.type)&&(_t=i.stateNode,he=!1),hi(t,e,i),ol(i.stateNode),_t=n,he=s;break;case 5:Xt||Ze(i,e);case 6:if(n=_t,s=he,_t=null,hi(t,e,i),_t=n,he=s,_t!==null)if(he)try{(_t.nodeType===9?_t.body:_t.nodeName==="HTML"?_t.ownerDocument.body:_t).removeChild(i.stateNode)}catch(c){jt(i,e,c)}else try{_t.removeChild(i.stateNode)}catch(c){jt(i,e,c)}break;case 18:_t!==null&&(he?(t=_t,Zm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),un(t)):Zm(_t,i.stateNode));break;case 4:n=_t,s=he,_t=i.stateNode.containerInfo,he=!0,hi(t,e,i),_t=n,he=s;break;case 0:case 11:case 14:case 15:zi(2,i,e),Xt||zi(4,i,e),hi(t,e,i);break;case 1:Xt||(Ze(i,e),n=i.stateNode,typeof n.componentWillUnmount=="function"&&Fh(i,e,n)),hi(t,e,i);break;case 21:hi(t,e,i);break;case 22:Xt=(n=Xt)||i.memoizedState!==null,hi(t,e,i),Xt=n;break;default:hi(t,e,i)}}function nm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{un(t)}catch(i){jt(e,e.return,i)}}}function lm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{un(t)}catch(i){jt(e,e.return,i)}}function vv(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new tm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new tm),e;default:throw Error(r(435,t.tag))}}function Ts(t,e){var i=vv(t);e.forEach(function(n){if(!i.has(n)){i.add(n);var s=Nv.bind(null,t,n);n.then(s,s)}})}function me(t,e){var i=e.deletions;if(i!==null)for(var n=0;n<i.length;n++){var s=i[n],c=t,d=e,g=d;t:for(;g!==null;){switch(g.tag){case 27:if(Ui(g.type)){_t=g.stateNode,he=!1;break t}break;case 5:_t=g.stateNode,he=!1;break t;case 3:case 4:_t=g.stateNode.containerInfo,he=!0;break t}g=g.return}if(_t===null)throw Error(r(160));am(c,d,s),_t=null,he=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)sm(e,t),e=e.sibling}var Ge=null;function sm(t,e){var i=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:me(e,t),ye(t),n&4&&(zi(3,t,t.return),Wn(3,t),zi(5,t,t.return));break;case 1:me(e,t),ye(t),n&512&&(Xt||i===null||Ze(i,i.return)),n&64&&di&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:var s=Ge;if(me(e,t),ye(t),n&512&&(Xt||i===null||Ze(i,i.return)),n&4){var c=i!==null?i.memoizedState:null;if(n=t.memoizedState,i===null)if(n===null)if(t.stateNode===null){t:{n=t.type,i=t.memoizedProps,s=s.ownerDocument||s;e:switch(n){case"title":c=s.getElementsByTagName("title")[0],(!c||c[En]||c[It]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(n),s.head.insertBefore(c,s.querySelector("head > title"))),ae(c,n,i),c[It]=t,Wt(c),n=c;break t;case"link":var d=sy("link","href",s).get(n+(i.href||""));if(d){for(var g=0;g<d.length;g++)if(c=d[g],c.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&c.getAttribute("rel")===(i.rel==null?null:i.rel)&&c.getAttribute("title")===(i.title==null?null:i.title)&&c.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){d.splice(g,1);break e}}c=s.createElement(n),ae(c,n,i),s.head.appendChild(c);break;case"meta":if(d=sy("meta","content",s).get(n+(i.content||""))){for(g=0;g<d.length;g++)if(c=d[g],c.getAttribute("content")===(i.content==null?null:""+i.content)&&c.getAttribute("name")===(i.name==null?null:i.name)&&c.getAttribute("property")===(i.property==null?null:i.property)&&c.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&c.getAttribute("charset")===(i.charSet==null?null:i.charSet)){d.splice(g,1);break e}}c=s.createElement(n),ae(c,n,i),s.head.appendChild(c);break;default:throw Error(r(468,n))}c[It]=t,Wt(c),n=c}t.stateNode=n}else oy(s,t.type,t.stateNode);else t.stateNode=ly(s,n,t.memoizedProps);else c!==n?(c===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):c.count--,n===null?oy(s,t.type,t.stateNode):ly(s,n,t.memoizedProps)):n===null&&t.stateNode!==null&&nc(t,t.memoizedProps,i.memoizedProps)}break;case 27:me(e,t),ye(t),n&512&&(Xt||i===null||Ze(i,i.return)),i!==null&&n&4&&nc(t,t.memoizedProps,i.memoizedProps);break;case 5:if(me(e,t),ye(t),n&512&&(Xt||i===null||Ze(i,i.return)),t.flags&32){s=t.stateNode;try{Oa(s,"")}catch($){jt(t,t.return,$)}}n&4&&t.stateNode!=null&&(s=t.memoizedProps,nc(t,s,i!==null?i.memoizedProps:s)),n&1024&&(oc=!0);break;case 6:if(me(e,t),ye(t),n&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n}catch($){jt(t,t.return,$)}}break;case 3:if(Us=null,s=Ge,Ge=_s(e.containerInfo),me(e,t),Ge=s,ye(t),n&4&&i!==null&&i.memoizedState.isDehydrated)try{un(e.containerInfo)}catch($){jt(t,t.return,$)}oc&&(oc=!1,om(t));break;case 4:n=Ge,Ge=_s(t.stateNode.containerInfo),me(e,t),ye(t),Ge=n;break;case 12:me(e,t),ye(t);break;case 31:me(e,t),ye(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ts(t,n)));break;case 13:me(e,t),ye(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Ms=ve()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ts(t,n)));break;case 22:s=t.memoizedState!==null;var T=i!==null&&i.memoizedState!==null,C=di,R=Xt;if(di=C||s,Xt=R||T,me(e,t),Xt=R,di=C,ye(t),n&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(i===null||T||di||Xt||ya(t)),i=null,e=t;;){if(e.tag===5||e.tag===26){if(i===null){T=i=e;try{if(c=T.stateNode,s)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=T.stateNode;var k=T.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null;g.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch($){jt(T,T.return,$)}}}else if(e.tag===6){if(i===null){T=e;try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch($){jt(T,T.return,$)}}}else if(e.tag===18){if(i===null){T=e;try{var O=T.stateNode;s?Fm(O,!0):Fm(T.stateNode,!1)}catch($){jt(T,T.return,$)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;i===e&&(i=null),e=e.return}i===e&&(i=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Ts(t,i))));break;case 19:me(e,t),ye(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ts(t,n)));break;case 30:break;case 21:break;default:me(e,t),ye(t)}}function ye(t){var e=t.flags;if(e&2){try{for(var i,n=t.return;n!==null;){if($h(n)){i=n;break}n=n.return}if(i==null)throw Error(r(160));switch(i.tag){case 27:var s=i.stateNode,c=lc(t);Ss(t,c,s);break;case 5:var d=i.stateNode;i.flags&32&&(Oa(d,""),i.flags&=-33);var g=lc(t);Ss(t,g,d);break;case 3:case 4:var T=i.stateNode.containerInfo,C=lc(t);sc(t,C,T);break;default:throw Error(r(161))}}catch(R){jt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function om(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;om(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function mi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)em(t,e.alternate,e),e=e.sibling}function ya(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:zi(4,e,e.return),ya(e);break;case 1:Ze(e,e.return);var i=e.stateNode;typeof i.componentWillUnmount=="function"&&Fh(e,e.return,i),ya(e);break;case 27:ol(e.stateNode);case 26:case 5:Ze(e,e.return),ya(e);break;case 22:e.memoizedState===null&&ya(e);break;case 30:ya(e);break;default:ya(e)}t=t.sibling}}function yi(t,e,i){for(i=i&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,s=t,c=e,d=c.flags;switch(c.tag){case 0:case 11:case 15:yi(s,c,i),Wn(4,c);break;case 1:if(yi(s,c,i),n=c,s=n.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(C){jt(n,n.return,C)}if(n=c,s=n.updateQueue,s!==null){var g=n.stateNode;try{var T=s.shared.hiddenCallbacks;if(T!==null)for(s.shared.hiddenCallbacks=null,s=0;s<T.length;s++)Ud(T[s],g)}catch(C){jt(n,n.return,C)}}i&&d&64&&Zh(c),$n(c,c.return);break;case 27:Ih(c);case 26:case 5:yi(s,c,i),i&&n===null&&d&4&&Wh(c),$n(c,c.return);break;case 12:yi(s,c,i);break;case 31:yi(s,c,i),i&&d&4&&nm(s,c);break;case 13:yi(s,c,i),i&&d&4&&lm(s,c);break;case 22:c.memoizedState===null&&yi(s,c,i),$n(c,c.return);break;case 30:break;default:yi(s,c,i)}e=e.sibling}}function rc(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Un(i))}function cc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Un(t))}function Je(t,e,i,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rm(t,e,i,n),e=e.sibling}function rm(t,e,i,n){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Je(t,e,i,n),s&2048&&Wn(9,e);break;case 1:Je(t,e,i,n);break;case 3:Je(t,e,i,n),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Un(t)));break;case 12:if(s&2048){Je(t,e,i,n),t=e.stateNode;try{var c=e.memoizedProps,d=c.id,g=c.onPostCommit;typeof g=="function"&&g(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(T){jt(e,e.return,T)}}else Je(t,e,i,n);break;case 31:Je(t,e,i,n);break;case 13:Je(t,e,i,n);break;case 23:break;case 22:c=e.stateNode,d=e.alternate,e.memoizedState!==null?c._visibility&2?Je(t,e,i,n):In(t,e):c._visibility&2?Je(t,e,i,n):(c._visibility|=2,$a(t,e,i,n,(e.subtreeFlags&10256)!==0||!1)),s&2048&&rc(d,e);break;case 24:Je(t,e,i,n),s&2048&&cc(e.alternate,e);break;default:Je(t,e,i,n)}}function $a(t,e,i,n,s){for(s=s&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,d=e,g=i,T=n,C=d.flags;switch(d.tag){case 0:case 11:case 15:$a(c,d,g,T,s),Wn(8,d);break;case 23:break;case 22:var R=d.stateNode;d.memoizedState!==null?R._visibility&2?$a(c,d,g,T,s):In(c,d):(R._visibility|=2,$a(c,d,g,T,s)),s&&C&2048&&rc(d.alternate,d);break;case 24:$a(c,d,g,T,s),s&&C&2048&&cc(d.alternate,d);break;default:$a(c,d,g,T,s)}e=e.sibling}}function In(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,n=e,s=n.flags;switch(n.tag){case 22:In(i,n),s&2048&&rc(n.alternate,n);break;case 24:In(i,n),s&2048&&cc(n.alternate,n);break;default:In(i,n)}e=e.sibling}}var tl=8192;function Ia(t,e,i){if(t.subtreeFlags&tl)for(t=t.child;t!==null;)cm(t,e,i),t=t.sibling}function cm(t,e,i){switch(t.tag){case 26:Ia(t,e,i),t.flags&tl&&t.memoizedState!==null&&nb(i,Ge,t.memoizedState,t.memoizedProps);break;case 5:Ia(t,e,i);break;case 3:case 4:var n=Ge;Ge=_s(t.stateNode.containerInfo),Ia(t,e,i),Ge=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=tl,tl=16777216,Ia(t,e,i),tl=n):Ia(t,e,i));break;default:Ia(t,e,i)}}function um(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function el(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var n=e[i];$t=n,dm(n,t)}um(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fm(t),t=t.sibling}function fm(t){switch(t.tag){case 0:case 11:case 15:el(t),t.flags&2048&&zi(9,t,t.return);break;case 3:el(t);break;case 12:el(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,As(t)):el(t);break;default:el(t)}}function As(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var n=e[i];$t=n,dm(n,t)}um(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:zi(8,e,e.return),As(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,As(e));break;default:As(e)}t=t.sibling}}function dm(t,e){for(;$t!==null;){var i=$t;switch(i.tag){case 0:case 11:case 15:zi(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var n=i.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Un(i.memoizedState.cache)}if(n=i.child,n!==null)n.return=i,$t=n;else t:for(i=t;$t!==null;){n=$t;var s=n.sibling,c=n.return;if(im(n),n===i){$t=null;break t}if(s!==null){s.return=c,$t=s;break t}$t=c}}}var bv={getCacheForType:function(t){var e=ee(Jt),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return ee(Jt).controller.signal}},xv=typeof WeakMap=="function"?WeakMap:Map,At=0,zt=null,yt=null,gt=0,Et=0,Ee=null,Oi=!1,tn=!1,uc=!1,pi=0,Ut=0,Ri=0,pa=0,fc=0,je=0,en=0,il=null,pe=null,dc=!1,Ms=0,hm=0,Es=1/0,js=null,Bi=null,Zt=0,ki=null,an=null,gi=0,hc=0,mc=null,mm=null,al=0,yc=null;function Ne(){return(At&2)!==0&&gt!==0?gt&-gt:N.T!==null?Sc():wf()}function ym(){if(je===0)if((gt&536870912)===0||bt){var t=Bl;Bl<<=1,(Bl&3932160)===0&&(Bl=262144),je=t}else je=536870912;return t=Ae.current,t!==null&&(t.flags|=32),je}function ge(t,e,i){(t===zt&&(Et===2||Et===9)||t.cancelPendingCommit!==null)&&(nn(t,0),_i(t,gt,je,!1)),Mn(t,i),((At&2)===0||t!==zt)&&(t===zt&&((At&2)===0&&(pa|=i),Ut===4&&_i(t,gt,je,!1)),Fe(t))}function pm(t,e,i){if((At&6)!==0)throw Error(r(327));var n=!i&&(e&127)===0&&(e&t.expiredLanes)===0||An(t,e),s=n?Av(t,e):gc(t,e,!0),c=n;do{if(s===0){tn&&!n&&_i(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!Sv(i)){s=gc(t,e,!1),c=!1;continue}if(s===2){if(c=e,t.errorRecoveryDisabledLanes&c)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var g=t;s=il;var T=g.current.memoizedState.isDehydrated;if(T&&(nn(g,d).flags|=256),d=gc(g,d,!1),d!==2){if(uc&&!T){g.errorRecoveryDisabledLanes|=c,pa|=c,s=4;break t}c=pe,pe=s,c!==null&&(pe===null?pe=c:pe.push.apply(pe,c))}s=d}if(c=!1,s!==2)continue}}if(s===1){nn(t,0),_i(t,e,0,!0);break}t:{switch(n=t,c=s,c){case 0:case 1:throw Error(r(345));case 4:if((e&4194048)!==e)break;case 6:_i(n,e,je,!Oi);break t;case 2:pe=null;break;case 3:case 5:break;default:throw Error(r(329))}if((e&62914560)===e&&(s=Ms+300-ve(),10<s)){if(_i(n,e,je,!Oi),_l(n,0,!0)!==0)break t;gi=e,n.timeoutHandle=Pm(gm.bind(null,n,i,pe,js,dc,e,je,pa,en,Oi,c,"Throttled",-0,0),s);break t}gm(n,i,pe,js,dc,e,je,pa,en,Oi,c,null,-0,0)}}break}while(!0);Fe(t)}function gm(t,e,i,n,s,c,d,g,T,C,R,k,w,O){if(t.timeoutHandle=-1,k=e.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ii},cm(e,c,k);var $=(c&62914560)===c?Ms-ve():(c&4194048)===c?hm-ve():0;if($=lb(k,$),$!==null){gi=c,t.cancelPendingCommit=$(Em.bind(null,t,e,c,i,n,s,d,g,T,R,k,null,w,O)),_i(t,c,d,!C);return}}Em(t,e,c,i,n,s,d,g,T)}function Sv(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var n=0;n<i.length;n++){var s=i[n],c=s.getSnapshot;s=s.value;try{if(!Se(c(),s))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _i(t,e,i,n){e&=~fc,e&=~pa,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var s=e;0<s;){var c=31-xe(s),d=1<<c;n[c]=-1,s&=~d}i!==0&&Nf(t,i,e)}function Ns(){return(At&6)===0?(nl(0),!1):!0}function pc(){if(yt!==null){if(Et===0)var t=yt.return;else t=yt,si=oa=null,Or(t),Pa=null,Ln=0,t=yt;for(;t!==null;)Qh(t.alternate,t),t=t.return;yt=null}}function nn(t,e){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,Kv(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),gi=0,pc(),zt=t,yt=i=ni(t.current,null),gt=e,Et=0,Ee=null,Oi=!1,tn=An(t,e),uc=!1,en=je=fc=pa=Ri=Ut=0,pe=il=null,dc=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var s=31-xe(n),c=1<<s;e|=t[s],n&=~c}return pi=e,Ql(),i}function vm(t,e){ft=null,N.H=Qn,e===Xa||e===is?(e=Bd(),Et=3):e===xr?(e=Bd(),Et=4):Et=e===Qr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,yt===null&&(Ut=1,ps(t,Oe(e,t.current)))}function bm(){var t=Ae.current;return t===null?!0:(gt&4194048)===gt?_e===null:(gt&62914560)===gt||(gt&536870912)!==0?t===_e:!1}function xm(){var t=N.H;return N.H=Qn,t===null?Qn:t}function Sm(){var t=N.A;return N.A=bv,t}function Ds(){Ut=4,Oi||(gt&4194048)!==gt&&Ae.current!==null||(tn=!0),(Ri&134217727)===0&&(pa&134217727)===0||zt===null||_i(zt,gt,je,!1)}function gc(t,e,i){var n=At;At|=2;var s=xm(),c=Sm();(zt!==t||gt!==e)&&(js=null,nn(t,e)),e=!1;var d=Ut;t:do try{if(Et!==0&&yt!==null){var g=yt,T=Ee;switch(Et){case 8:pc(),d=6;break t;case 3:case 2:case 9:case 6:Ae.current===null&&(e=!0);var C=Et;if(Et=0,Ee=null,ln(t,g,T,C),i&&tn){d=0;break t}break;default:C=Et,Et=0,Ee=null,ln(t,g,T,C)}}Tv(),d=Ut;break}catch(R){vm(t,R)}while(!0);return e&&t.shellSuspendCounter++,si=oa=null,At=n,N.H=s,N.A=c,yt===null&&(zt=null,gt=0,Ql()),d}function Tv(){for(;yt!==null;)Tm(yt)}function Av(t,e){var i=At;At|=2;var n=xm(),s=Sm();zt!==t||gt!==e?(js=null,Es=ve()+500,nn(t,e)):tn=An(t,e);t:do try{if(Et!==0&&yt!==null){e=yt;var c=Ee;e:switch(Et){case 1:Et=0,Ee=null,ln(t,e,c,1);break;case 2:case 9:if(Od(c)){Et=0,Ee=null,Am(e);break}e=function(){Et!==2&&Et!==9||zt!==t||(Et=7),Fe(t)},c.then(e,e);break t;case 3:Et=7;break t;case 4:Et=5;break t;case 7:Od(c)?(Et=0,Ee=null,Am(e)):(Et=0,Ee=null,ln(t,e,c,7));break;case 5:var d=null;switch(yt.tag){case 26:d=yt.memoizedState;case 5:case 27:var g=yt;if(d?ry(d):g.stateNode.complete){Et=0,Ee=null;var T=g.sibling;if(T!==null)yt=T;else{var C=g.return;C!==null?(yt=C,Cs(C)):yt=null}break e}}Et=0,Ee=null,ln(t,e,c,5);break;case 6:Et=0,Ee=null,ln(t,e,c,6);break;case 8:pc(),Ut=6;break t;default:throw Error(r(462))}}Mv();break}catch(R){vm(t,R)}while(!0);return si=oa=null,N.H=n,N.A=s,At=i,yt!==null?0:(zt=null,gt=0,Ql(),Ut)}function Mv(){for(;yt!==null&&!Pg();)Tm(yt)}function Tm(t){var e=Xh(t.alternate,t,pi);t.memoizedProps=t.pendingProps,e===null?Cs(t):yt=e}function Am(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=Lh(i,e,e.pendingProps,e.type,void 0,gt);break;case 11:e=Lh(i,e,e.pendingProps,e.type.render,e.ref,gt);break;case 5:Or(e);default:Qh(i,e),e=yt=Sd(e,pi),e=Xh(i,e,pi)}t.memoizedProps=t.pendingProps,e===null?Cs(t):yt=e}function ln(t,e,i,n){si=oa=null,Or(e),Pa=null,Ln=0;var s=e.return;try{if(dv(t,s,e,i,gt)){Ut=1,ps(t,Oe(i,t.current)),yt=null;return}}catch(c){if(s!==null)throw yt=s,c;Ut=1,ps(t,Oe(i,t.current)),yt=null;return}e.flags&32768?(bt||n===1?t=!0:tn||(gt&536870912)!==0?t=!1:(Oi=t=!0,(n===2||n===9||n===3||n===6)&&(n=Ae.current,n!==null&&n.tag===13&&(n.flags|=16384))),Mm(e,t)):Cs(e)}function Cs(t){var e=t;do{if((e.flags&32768)!==0){Mm(e,Oi);return}t=e.return;var i=yv(e.alternate,e,pi);if(i!==null){yt=i;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Mm(t,e){do{var i=pv(t.alternate,t);if(i!==null){i.flags&=32767,yt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){yt=t;return}yt=t=i}while(t!==null);Ut=6,yt=null}function Em(t,e,i,n,s,c,d,g,T){t.cancelPendingCommit=null;do ws();while(Zt!==0);if((At&6)!==0)throw Error(r(327));if(e!==null){if(e===t.current)throw Error(r(177));if(c=e.lanes|e.childLanes,c|=lr,a1(t,i,c,d,g,T),t===zt&&(yt=zt=null,gt=0),an=e,ki=t,gi=i,hc=c,mc=s,mm=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Dv(Ol,function(){return wm(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,s=L.p,L.p=2,d=At,At|=4;try{gv(t,e,i)}finally{At=d,L.p=s,N.T=n}}Zt=1,jm(),Nm(),Dm()}}function jm(){if(Zt===1){Zt=0;var t=ki,e=an,i=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||i){i=N.T,N.T=null;var n=L.p;L.p=2;var s=At;At|=4;try{sm(e,t);var c=Cc,d=dd(t.containerInfo),g=c.focusedElem,T=c.selectionRange;if(d!==g&&g&&g.ownerDocument&&fd(g.ownerDocument.documentElement,g)){if(T!==null&&tr(g)){var C=T.start,R=T.end;if(R===void 0&&(R=C),"selectionStart"in g)g.selectionStart=C,g.selectionEnd=Math.min(R,g.value.length);else{var k=g.ownerDocument||document,w=k&&k.defaultView||window;if(w.getSelection){var O=w.getSelection(),$=g.textContent.length,st=Math.min(T.start,$),Ct=T.end===void 0?st:Math.min(T.end,$);!O.extend&&st>Ct&&(d=Ct,Ct=st,st=d);var j=ud(g,st),M=ud(g,Ct);if(j&&M&&(O.rangeCount!==1||O.anchorNode!==j.node||O.anchorOffset!==j.offset||O.focusNode!==M.node||O.focusOffset!==M.offset)){var D=k.createRange();D.setStart(j.node,j.offset),O.removeAllRanges(),st>Ct?(O.addRange(D),O.extend(M.node,M.offset)):(D.setEnd(M.node,M.offset),O.addRange(D))}}}}for(k=[],O=g;O=O.parentNode;)O.nodeType===1&&k.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<k.length;g++){var B=k[g];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Gs=!!Dc,Cc=Dc=null}finally{At=s,L.p=n,N.T=i}}t.current=e,Zt=2}}function Nm(){if(Zt===2){Zt=0;var t=ki,e=an,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=N.T,N.T=null;var n=L.p;L.p=2;var s=At;At|=4;try{em(t,e.alternate,e)}finally{At=s,L.p=n,N.T=i}}Zt=3}}function Dm(){if(Zt===4||Zt===3){Zt=0,Qg();var t=ki,e=an,i=gi,n=mm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,an=ki=null,Cm(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Bi=null),ko(i),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Tn,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=N.T,s=L.p,L.p=2,N.T=null;try{for(var c=t.onRecoverableError,d=0;d<n.length;d++){var g=n[d];c(g.value,{componentStack:g.stack})}}finally{N.T=e,L.p=s}}(gi&3)!==0&&ws(),Fe(t),s=t.pendingLanes,(i&261930)!==0&&(s&42)!==0?t===yc?al++:(al=0,yc=t):al=0,nl(0)}}function Cm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Un(e)))}function ws(){return jm(),Nm(),Dm(),wm()}function wm(){if(Zt!==5)return!1;var t=ki,e=hc;hc=0;var i=ko(gi),n=N.T,s=L.p;try{L.p=32>i?32:i,N.T=null,i=mc,mc=null;var c=ki,d=gi;if(Zt=0,an=ki=null,gi=0,(At&6)!==0)throw Error(r(331));var g=At;if(At|=4,fm(c.current),rm(c,c.current,d,i),At=g,nl(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Tn,c)}catch{}return!0}finally{L.p=s,N.T=n,Cm(t,e)}}function zm(t,e,i){e=Oe(i,e),e=Pr(t.stateNode,e,2),t=Di(t,e,2),t!==null&&(Mn(t,2),Fe(t))}function jt(t,e,i){if(t.tag===3)zm(t,t,i);else for(;e!==null;){if(e.tag===3){zm(e,t,i);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bi===null||!Bi.has(n))){t=Oe(i,t),i=Oh(2),n=Di(e,i,2),n!==null&&(Rh(i,n,e,t),Mn(n,2),Fe(n));break}}e=e.return}}function vc(t,e,i){var n=t.pingCache;if(n===null){n=t.pingCache=new xv;var s=new Set;n.set(e,s)}else s=n.get(e),s===void 0&&(s=new Set,n.set(e,s));s.has(i)||(uc=!0,s.add(i),t=Ev.bind(null,t,e,i),e.then(t,t))}function Ev(t,e,i){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,zt===t&&(gt&i)===i&&(Ut===4||Ut===3&&(gt&62914560)===gt&&300>ve()-Ms?(At&2)===0&&nn(t,0):fc|=i,en===gt&&(en=0)),Fe(t)}function Om(t,e){e===0&&(e=jf()),t=na(t,e),t!==null&&(Mn(t,e),Fe(t))}function jv(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Om(t,i)}function Nv(t,e){var i=0;switch(t.tag){case 31:case 13:var n=t.stateNode,s=t.memoizedState;s!==null&&(i=s.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(r(314))}n!==null&&n.delete(e),Om(t,i)}function Dv(t,e){return zo(t,e)}var zs=null,sn=null,bc=!1,Os=!1,xc=!1,Vi=0;function Fe(t){t!==sn&&t.next===null&&(sn===null?zs=sn=t:sn=sn.next=t),Os=!0,bc||(bc=!0,wv())}function nl(t,e){if(!xc&&Os){xc=!0;do for(var i=!1,n=zs;n!==null;){if(t!==0){var s=n.pendingLanes;if(s===0)var c=0;else{var d=n.suspendedLanes,g=n.pingedLanes;c=(1<<31-xe(42|t)+1)-1,c&=s&~(d&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,_m(n,c))}else c=gt,c=_l(n,n===zt?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(c&3)===0||An(n,c)||(i=!0,_m(n,c));n=n.next}while(i);xc=!1}}function Cv(){Rm()}function Rm(){Os=bc=!1;var t=0;Vi!==0&&Lv()&&(t=Vi);for(var e=ve(),i=null,n=zs;n!==null;){var s=n.next,c=Bm(n,e);c===0?(n.next=null,i===null?zs=s:i.next=s,s===null&&(sn=i)):(i=n,(t!==0||(c&3)!==0)&&(Os=!0)),n=s}Zt!==0&&Zt!==5||nl(t),Vi!==0&&(Vi=0)}function Bm(t,e){for(var i=t.suspendedLanes,n=t.pingedLanes,s=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var d=31-xe(c),g=1<<d,T=s[d];T===-1?((g&i)===0||(g&n)!==0)&&(s[d]=i1(g,e)):T<=e&&(t.expiredLanes|=g),c&=~g}if(e=zt,i=gt,i=_l(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,i===0||t===e&&(Et===2||Et===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Oo(n),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||An(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(n!==null&&Oo(n),ko(i)){case 2:case 8:i=Mf;break;case 32:i=Ol;break;case 268435456:i=Ef;break;default:i=Ol}return n=km.bind(null,t),i=zo(i,n),t.callbackPriority=e,t.callbackNode=i,e}return n!==null&&n!==null&&Oo(n),t.callbackPriority=2,t.callbackNode=null,2}function km(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(ws()&&t.callbackNode!==i)return null;var n=gt;return n=_l(t,t===zt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(pm(t,n,e),Bm(t,ve()),t.callbackNode!=null&&t.callbackNode===i?km.bind(null,t):null)}function _m(t,e){if(ws())return null;pm(t,e,!0)}function wv(){Gv(function(){(At&6)!==0?zo(Af,Cv):Rm()})}function Sc(){if(Vi===0){var t=Ya;t===0&&(t=Rl,Rl<<=1,(Rl&261888)===0&&(Rl=256)),Vi=t}return Vi}function Vm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ll(""+t)}function Um(t,e){var i=e.ownerDocument.createElement("input");return i.name=e.name,i.value=e.value,t.id&&i.setAttribute("form",t.id),e.parentNode.insertBefore(i,e),t=new FormData(t),i.parentNode.removeChild(i),t}function zv(t,e,i,n,s){if(e==="submit"&&i&&i.stateNode===s){var c=Vm((s[fe]||null).action),d=n.submitter;d&&(e=(e=d[fe]||null)?Vm(e.formAction):d.getAttribute("formAction"),e!==null&&(c=e,d=null));var g=new Yl("action","action",null,n,s);t.push({event:g,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Vi!==0){var T=d?Um(s,d):new FormData(s);Kr(i,{pending:!0,data:T,method:s.method,action:c},null,T)}}else typeof c=="function"&&(g.preventDefault(),T=d?Um(s,d):new FormData(s),Kr(i,{pending:!0,data:T,method:s.method,action:c},c,T))},currentTarget:s}]})}}for(var Tc=0;Tc<nr.length;Tc++){var Ac=nr[Tc],Ov=Ac.toLowerCase(),Rv=Ac[0].toUpperCase()+Ac.slice(1);Ke(Ov,"on"+Rv)}Ke(yd,"onAnimationEnd"),Ke(pd,"onAnimationIteration"),Ke(gd,"onAnimationStart"),Ke("dblclick","onDoubleClick"),Ke("focusin","onFocus"),Ke("focusout","onBlur"),Ke(Z1,"onTransitionRun"),Ke(F1,"onTransitionStart"),Ke(W1,"onTransitionCancel"),Ke(vd,"onTransitionEnd"),wa("onMouseEnter",["mouseout","mouseover"]),wa("onMouseLeave",["mouseout","mouseover"]),wa("onPointerEnter",["pointerout","pointerover"]),wa("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function Hm(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var n=t[i],s=n.event;n=n.listeners;t:{var c=void 0;if(e)for(var d=n.length-1;0<=d;d--){var g=n[d],T=g.instance,C=g.currentTarget;if(g=g.listener,T!==c&&s.isPropagationStopped())break t;c=g,s.currentTarget=C;try{c(s)}catch(R){Pl(R)}s.currentTarget=null,c=T}else for(d=0;d<n.length;d++){if(g=n[d],T=g.instance,C=g.currentTarget,g=g.listener,T!==c&&s.isPropagationStopped())break t;c=g,s.currentTarget=C;try{c(s)}catch(R){Pl(R)}s.currentTarget=null,c=T}}}}function pt(t,e){var i=e[_o];i===void 0&&(i=e[_o]=new Set);var n=t+"__bubble";i.has(n)||(Lm(e,t,2,!1),i.add(n))}function Mc(t,e,i){var n=0;e&&(n|=4),Lm(i,t,n,e)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function Ec(t){if(!t[Rs]){t[Rs]=!0,Rf.forEach(function(i){i!=="selectionchange"&&(Bv.has(i)||Mc(i,!1,t),Mc(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rs]||(e[Rs]=!0,Mc("selectionchange",!1,e))}}function Lm(t,e,i,n){switch(yy(e)){case 2:var s=rb;break;case 8:s=cb;break;default:s=Lc}i=s.bind(null,e,i,t),s=void 0,!qo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),n?s!==void 0?t.addEventListener(e,i,{capture:!0,passive:s}):t.addEventListener(e,i,!0):s!==void 0?t.addEventListener(e,i,{passive:s}):t.addEventListener(e,i,!1)}function jc(t,e,i,n,s){var c=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var g=n.stateNode.containerInfo;if(g===s)break;if(d===4)for(d=n.return;d!==null;){var T=d.tag;if((T===3||T===4)&&d.stateNode.containerInfo===s)return;d=d.return}for(;g!==null;){if(d=Na(g),d===null)return;if(T=d.tag,T===5||T===6||T===26||T===27){n=c=d;continue t}g=g.parentNode}}n=n.return}qf(function(){var C=c,R=Jo(i),k=[];t:{var w=bd.get(t);if(w!==void 0){var O=Yl,$=t;switch(t){case"keypress":if(Gl(i)===0)break t;case"keydown":case"keyup":O=N1;break;case"focusin":$="focus",O=Zo;break;case"focusout":$="blur",O=Zo;break;case"beforeblur":case"afterblur":O=Zo;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=w1;break;case yd:case pd:case gd:O=v1;break;case vd:O=O1;break;case"scroll":case"scrollend":O=h1;break;case"wheel":O=B1;break;case"copy":case"cut":case"paste":O=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Ff;break;case"toggle":case"beforetoggle":O=_1}var st=(e&4)!==0,Ct=!st&&(t==="scroll"||t==="scrollend"),j=st?w!==null?w+"Capture":null:w;st=[];for(var M=C,D;M!==null;){var B=M;if(D=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||D===null||j===null||(B=Nn(M,j),B!=null&&st.push(sl(M,B,D))),Ct)break;M=M.return}0<st.length&&(w=new O(w,$,null,i,R),k.push({event:w,listeners:st}))}}if((e&7)===0){t:{if(w=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",w&&i!==Go&&($=i.relatedTarget||i.fromElement)&&(Na($)||$[ja]))break t;if((O||w)&&(w=R.window===R?R:(w=R.ownerDocument)?w.defaultView||w.parentWindow:window,O?($=i.relatedTarget||i.toElement,O=C,$=$?Na($):null,$!==null&&(Ct=h($),st=$.tag,$!==Ct||st!==5&&st!==27&&st!==6)&&($=null)):(O=null,$=C),O!==$)){if(st=Qf,B="onMouseLeave",j="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(st=Ff,B="onPointerLeave",j="onPointerEnter",M="pointer"),Ct=O==null?w:jn(O),D=$==null?w:jn($),w=new st(B,M+"leave",O,i,R),w.target=Ct,w.relatedTarget=D,B=null,Na(R)===C&&(st=new st(j,M+"enter",$,i,R),st.target=D,st.relatedTarget=Ct,B=st),Ct=B,O&&$)e:{for(st=kv,j=O,M=$,D=0,B=j;B;B=st(B))D++;B=0;for(var nt=M;nt;nt=st(nt))B++;for(;0<D-B;)j=st(j),D--;for(;0<B-D;)M=st(M),B--;for(;D--;){if(j===M||M!==null&&j===M.alternate){st=j;break e}j=st(j),M=st(M)}st=null}else st=null;O!==null&&Km(k,w,O,st,!1),$!==null&&Ct!==null&&Km(k,Ct,$,st,!0)}}t:{if(w=C?jn(C):window,O=w.nodeName&&w.nodeName.toLowerCase(),O==="select"||O==="input"&&w.type==="file")var St=nd;else if(id(w))if(ld)St=X1;else{St=Y1;var it=J1}else O=w.nodeName,!O||O.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?C&&Ko(C.elementType)&&(St=nd):St=q1;if(St&&(St=St(t,C))){ad(k,St,i,R);break t}it&&it(t,w,C),t==="focusout"&&C&&w.type==="number"&&C.memoizedProps.value!=null&&Lo(w,"number",w.value)}switch(it=C?jn(C):window,t){case"focusin":(id(it)||it.contentEditable==="true")&&(_a=it,er=C,kn=null);break;case"focusout":kn=er=_a=null;break;case"mousedown":ir=!0;break;case"contextmenu":case"mouseup":case"dragend":ir=!1,hd(k,i,R);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":hd(k,i,R)}var dt;if(Wo)t:{switch(t){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else ka?td(t,i)&&(vt="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(vt="onCompositionStart");vt&&(Wf&&i.locale!=="ko"&&(ka||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&ka&&(dt=Xf()):(Si=R,Xo="value"in Si?Si.value:Si.textContent,ka=!0)),it=Bs(C,vt),0<it.length&&(vt=new Zf(vt,t,null,i,R),k.push({event:vt,listeners:it}),dt?vt.data=dt:(dt=ed(i),dt!==null&&(vt.data=dt)))),(dt=U1?H1(t,i):L1(t,i))&&(vt=Bs(C,"onBeforeInput"),0<vt.length&&(it=new Zf("onBeforeInput","beforeinput",null,i,R),k.push({event:it,listeners:vt}),it.data=dt)),zv(k,t,C,i,R)}Hm(k,e)})}function sl(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Bs(t,e){for(var i=e+"Capture",n=[];t!==null;){var s=t,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=Nn(t,i),s!=null&&n.unshift(sl(t,s,c)),s=Nn(t,e),s!=null&&n.push(sl(t,s,c))),t.tag===3)return n;t=t.return}return[]}function kv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Km(t,e,i,n,s){for(var c=e._reactName,d=[];i!==null&&i!==n;){var g=i,T=g.alternate,C=g.stateNode;if(g=g.tag,T!==null&&T===n)break;g!==5&&g!==26&&g!==27||C===null||(T=C,s?(C=Nn(i,c),C!=null&&d.unshift(sl(i,C,T))):s||(C=Nn(i,c),C!=null&&d.push(sl(i,C,T)))),i=i.return}d.length!==0&&t.push({event:e,listeners:d})}var _v=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function Gm(t){return(typeof t=="string"?t:""+t).replace(_v,`
`).replace(Vv,"")}function Jm(t,e){return e=Gm(e),Gm(t)===e}function Dt(t,e,i,n,s,c){switch(i){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Oa(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Oa(t,""+n);break;case"className":Ul(t,"class",n);break;case"tabIndex":Ul(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ul(t,i,n);break;case"style":Jf(t,n,c);break;case"data":if(e!=="object"){Ul(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(i);break}n=Ll(""+n),t.setAttribute(i,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Dt(t,e,"name",s.name,s,null),Dt(t,e,"formEncType",s.formEncType,s,null),Dt(t,e,"formMethod",s.formMethod,s,null),Dt(t,e,"formTarget",s.formTarget,s,null)):(Dt(t,e,"encType",s.encType,s,null),Dt(t,e,"method",s.method,s,null),Dt(t,e,"target",s.target,s,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(i);break}n=Ll(""+n),t.setAttribute(i,n);break;case"onClick":n!=null&&(t.onclick=ii);break;case"onScroll":n!=null&&pt("scroll",t);break;case"onScrollEnd":n!=null&&pt("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(i=n.__html,i!=null){if(s.children!=null)throw Error(r(60));t.innerHTML=i}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}i=Ll(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(i,""+n):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":n===!0?t.setAttribute(i,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(i,n):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(i,n):t.removeAttribute(i);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(i):t.setAttribute(i,n);break;case"popover":pt("beforetoggle",t),pt("toggle",t),Vl(t,"popover",n);break;case"xlinkActuate":ei(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ei(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ei(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ei(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ei(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ei(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ei(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ei(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ei(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Vl(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=f1.get(i)||i,Vl(t,i,n))}}function Nc(t,e,i,n,s,c){switch(i){case"style":Jf(t,n,c);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(r(61));if(i=n.__html,i!=null){if(s.children!=null)throw Error(r(60));t.innerHTML=i}}break;case"children":typeof n=="string"?Oa(t,n):(typeof n=="number"||typeof n=="bigint")&&Oa(t,""+n);break;case"onScroll":n!=null&&pt("scroll",t);break;case"onScrollEnd":n!=null&&pt("scrollend",t);break;case"onClick":n!=null&&(t.onclick=ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bf.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(s=i.endsWith("Capture"),e=i.slice(2,s?i.length-7:void 0),c=t[fe]||null,c=c!=null?c[i]:null,typeof c=="function"&&t.removeEventListener(e,c,s),typeof n=="function")){typeof c!="function"&&c!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(e,n,s);break t}i in t?t[i]=n:n===!0?t.setAttribute(i,""):Vl(t,i,n)}}}function ae(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pt("error",t),pt("load",t);var n=!1,s=!1,c;for(c in i)if(i.hasOwnProperty(c)){var d=i[c];if(d!=null)switch(c){case"src":n=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Dt(t,e,c,d,i,null)}}s&&Dt(t,e,"srcSet",i.srcSet,i,null),n&&Dt(t,e,"src",i.src,i,null);return;case"input":pt("invalid",t);var g=c=d=s=null,T=null,C=null;for(n in i)if(i.hasOwnProperty(n)){var R=i[n];if(R!=null)switch(n){case"name":s=R;break;case"type":d=R;break;case"checked":T=R;break;case"defaultChecked":C=R;break;case"value":c=R;break;case"defaultValue":g=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,e));break;default:Dt(t,e,n,R,i,null)}}Hf(t,c,g,T,C,d,s,!1);return;case"select":pt("invalid",t),n=d=c=null;for(s in i)if(i.hasOwnProperty(s)&&(g=i[s],g!=null))switch(s){case"value":c=g;break;case"defaultValue":d=g;break;case"multiple":n=g;default:Dt(t,e,s,g,i,null)}e=c,i=d,t.multiple=!!n,e!=null?za(t,!!n,e,!1):i!=null&&za(t,!!n,i,!0);return;case"textarea":pt("invalid",t),c=s=n=null;for(d in i)if(i.hasOwnProperty(d)&&(g=i[d],g!=null))switch(d){case"value":n=g;break;case"defaultValue":s=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(r(91));break;default:Dt(t,e,d,g,i,null)}Kf(t,n,s,c);return;case"option":for(T in i)if(i.hasOwnProperty(T)&&(n=i[T],n!=null))switch(T){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Dt(t,e,T,n,i,null)}return;case"dialog":pt("beforetoggle",t),pt("toggle",t),pt("cancel",t),pt("close",t);break;case"iframe":case"object":pt("load",t);break;case"video":case"audio":for(n=0;n<ll.length;n++)pt(ll[n],t);break;case"image":pt("error",t),pt("load",t);break;case"details":pt("toggle",t);break;case"embed":case"source":case"link":pt("error",t),pt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in i)if(i.hasOwnProperty(C)&&(n=i[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:Dt(t,e,C,n,i,null)}return;default:if(Ko(e)){for(R in i)i.hasOwnProperty(R)&&(n=i[R],n!==void 0&&Nc(t,e,R,n,i,void 0));return}}for(g in i)i.hasOwnProperty(g)&&(n=i[g],n!=null&&Dt(t,e,g,n,i,null))}function Uv(t,e,i,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,d=null,g=null,T=null,C=null,R=null;for(O in i){var k=i[O];if(i.hasOwnProperty(O)&&k!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":T=k;default:n.hasOwnProperty(O)||Dt(t,e,O,null,n,k)}}for(var w in n){var O=n[w];if(k=i[w],n.hasOwnProperty(w)&&(O!=null||k!=null))switch(w){case"type":c=O;break;case"name":s=O;break;case"checked":C=O;break;case"defaultChecked":R=O;break;case"value":d=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,e));break;default:O!==k&&Dt(t,e,w,O,n,k)}}Ho(t,d,g,T,C,R,c,s);return;case"select":O=d=g=w=null;for(c in i)if(T=i[c],i.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":O=T;default:n.hasOwnProperty(c)||Dt(t,e,c,null,n,T)}for(s in n)if(c=n[s],T=i[s],n.hasOwnProperty(s)&&(c!=null||T!=null))switch(s){case"value":w=c;break;case"defaultValue":g=c;break;case"multiple":d=c;default:c!==T&&Dt(t,e,s,c,n,T)}e=g,i=d,n=O,w!=null?za(t,!!i,w,!1):!!n!=!!i&&(e!=null?za(t,!!i,e,!0):za(t,!!i,i?[]:"",!1));return;case"textarea":O=w=null;for(g in i)if(s=i[g],i.hasOwnProperty(g)&&s!=null&&!n.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Dt(t,e,g,null,n,s)}for(d in n)if(s=n[d],c=i[d],n.hasOwnProperty(d)&&(s!=null||c!=null))switch(d){case"value":w=s;break;case"defaultValue":O=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:s!==c&&Dt(t,e,d,s,n,c)}Lf(t,w,O);return;case"option":for(var $ in i)if(w=i[$],i.hasOwnProperty($)&&w!=null&&!n.hasOwnProperty($))switch($){case"selected":t.selected=!1;break;default:Dt(t,e,$,null,n,w)}for(T in n)if(w=n[T],O=i[T],n.hasOwnProperty(T)&&w!==O&&(w!=null||O!=null))switch(T){case"selected":t.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Dt(t,e,T,w,n,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in i)w=i[st],i.hasOwnProperty(st)&&w!=null&&!n.hasOwnProperty(st)&&Dt(t,e,st,null,n,w);for(C in n)if(w=n[C],O=i[C],n.hasOwnProperty(C)&&w!==O&&(w!=null||O!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,e));break;default:Dt(t,e,C,w,n,O)}return;default:if(Ko(e)){for(var Ct in i)w=i[Ct],i.hasOwnProperty(Ct)&&w!==void 0&&!n.hasOwnProperty(Ct)&&Nc(t,e,Ct,void 0,n,w);for(R in n)w=n[R],O=i[R],!n.hasOwnProperty(R)||w===O||w===void 0&&O===void 0||Nc(t,e,R,w,n,O);return}}for(var j in i)w=i[j],i.hasOwnProperty(j)&&w!=null&&!n.hasOwnProperty(j)&&Dt(t,e,j,null,n,w);for(k in n)w=n[k],O=i[k],!n.hasOwnProperty(k)||w===O||w==null&&O==null||Dt(t,e,k,w,n,O)}function Ym(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),n=0;n<i.length;n++){var s=i[n],c=s.transferSize,d=s.initiatorType,g=s.duration;if(c&&g&&Ym(d)){for(d=0,g=s.responseEnd,n+=1;n<i.length;n++){var T=i[n],C=T.startTime;if(C>g)break;var R=T.transferSize,k=T.initiatorType;R&&Ym(k)&&(T=T.responseEnd,d+=R*(T<g?1:(g-C)/(T-C)))}if(--n,e+=8*(c+d)/(s.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dc=null,Cc=null;function ks(t){return t.nodeType===9?t:t.ownerDocument}function qm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zc=null;function Lv(){var t=window.event;return t&&t.type==="popstate"?t===zc?!1:(zc=t,!0):(zc=null,!1)}var Pm=typeof setTimeout=="function"?setTimeout:void 0,Kv=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,Gv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(t){return Qm.resolve(null).then(t).catch(Jv)}:Pm;function Jv(t){setTimeout(function(){throw t})}function Ui(t){return t==="head"}function Zm(t,e){var i=e,n=0;do{var s=i.nextSibling;if(t.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"||i==="/&"){if(n===0){t.removeChild(s),un(e);return}n--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")n++;else if(i==="html")ol(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,ol(i);for(var c=i.firstChild;c;){var d=c.nextSibling,g=c.nodeName;c[En]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=d}}else i==="body"&&ol(t.ownerDocument.body);i=s}while(i);un(e)}function Fm(t,e){var i=t;t=0;do{var n=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=n}while(i)}function Oc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Oc(i),Vo(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Yv(t,e,i,n){for(;t.nodeType===1;){var s=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[En])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ve(t.nextSibling),t===null)break}return null}function qv(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ve(t.nextSibling),t===null))return null;return t}function Wm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ve(t.nextSibling),t===null))return null;return t}function Rc(t){return t.data==="$?"||t.data==="$~"}function Bc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Xv(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var n=function(){e(),i.removeEventListener("DOMContentLoaded",n)};i.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Ve(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var kc=null;function $m(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return Ve(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function Im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function ty(t,e,i){switch(e=ks(i),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ol(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Vo(t)}var Ue=new Map,ey=new Set;function _s(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var vi=L.d;L.d={f:Pv,r:Qv,D:Zv,C:Fv,L:Wv,m:$v,X:tb,S:Iv,M:eb};function Pv(){var t=vi.f(),e=Ns();return t||e}function Qv(t){var e=Da(t);e!==null&&e.tag===5&&e.type==="form"?vh(e):vi.r(t)}var on=typeof document>"u"?null:document;function iy(t,e,i){var n=on;if(n&&typeof e=="string"&&e){var s=we(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof i=="string"&&(s+='[crossorigin="'+i+'"]'),ey.has(s)||(ey.add(s),t={rel:t,crossOrigin:i,href:e},n.querySelector(s)===null&&(e=n.createElement("link"),ae(e,"link",t),Wt(e),n.head.appendChild(e)))}}function Zv(t){vi.D(t),iy("dns-prefetch",t,null)}function Fv(t,e){vi.C(t,e),iy("preconnect",t,e)}function Wv(t,e,i){vi.L(t,e,i);var n=on;if(n&&t&&e){var s='link[rel="preload"][as="'+we(e)+'"]';e==="image"&&i&&i.imageSrcSet?(s+='[imagesrcset="'+we(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(s+='[imagesizes="'+we(i.imageSizes)+'"]')):s+='[href="'+we(t)+'"]';var c=s;switch(e){case"style":c=rn(t);break;case"script":c=cn(t)}Ue.has(c)||(t=x({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),Ue.set(c,t),n.querySelector(s)!==null||e==="style"&&n.querySelector(rl(c))||e==="script"&&n.querySelector(cl(c))||(e=n.createElement("link"),ae(e,"link",t),Wt(e),n.head.appendChild(e)))}}function $v(t,e){vi.m(t,e);var i=on;if(i&&t){var n=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+we(n)+'"][href="'+we(t)+'"]',c=s;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=cn(t)}if(!Ue.has(c)&&(t=x({rel:"modulepreload",href:t},e),Ue.set(c,t),i.querySelector(s)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(cl(c)))return}n=i.createElement("link"),ae(n,"link",t),Wt(n),i.head.appendChild(n)}}}function Iv(t,e,i){vi.S(t,e,i);var n=on;if(n&&t){var s=Ca(n).hoistableStyles,c=rn(t);e=e||"default";var d=s.get(c);if(!d){var g={loading:0,preload:null};if(d=n.querySelector(rl(c)))g.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},i),(i=Ue.get(c))&&_c(t,i);var T=d=n.createElement("link");Wt(T),ae(T,"link",t),T._p=new Promise(function(C,R){T.onload=C,T.onerror=R}),T.addEventListener("load",function(){g.loading|=1}),T.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Vs(d,e,n)}d={type:"stylesheet",instance:d,count:1,state:g},s.set(c,d)}}}function tb(t,e){vi.X(t,e);var i=on;if(i&&t){var n=Ca(i).hoistableScripts,s=cn(t),c=n.get(s);c||(c=i.querySelector(cl(s)),c||(t=x({src:t,async:!0},e),(e=Ue.get(s))&&Vc(t,e),c=i.createElement("script"),Wt(c),ae(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},n.set(s,c))}}function eb(t,e){vi.M(t,e);var i=on;if(i&&t){var n=Ca(i).hoistableScripts,s=cn(t),c=n.get(s);c||(c=i.querySelector(cl(s)),c||(t=x({src:t,async:!0,type:"module"},e),(e=Ue.get(s))&&Vc(t,e),c=i.createElement("script"),Wt(c),ae(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},n.set(s,c))}}function ay(t,e,i,n){var s=(s=mt.current)?_s(s):null;if(!s)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(e=rn(i.href),i=Ca(s).hoistableStyles,n=i.get(e),n||(n={type:"style",instance:null,count:0,state:null},i.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=rn(i.href);var c=Ca(s).hoistableStyles,d=c.get(t);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,d),(c=s.querySelector(rl(t)))&&!c._p&&(d.instance=c,d.state.loading=5),Ue.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ue.set(t,i),c||ib(s,t,i,d.state))),e&&n===null)throw Error(r(528,""));return d}if(e&&n!==null)throw Error(r(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=cn(i),i=Ca(s).hoistableScripts,n=i.get(e),n||(n={type:"script",instance:null,count:0,state:null},i.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function rn(t){return'href="'+we(t)+'"'}function rl(t){return'link[rel="stylesheet"]['+t+"]"}function ny(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function ib(t,e,i,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),ae(e,"link",i),Wt(e),t.head.appendChild(e))}function cn(t){return'[src="'+we(t)+'"]'}function cl(t){return"script[async]"+t}function ly(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+we(i.href)+'"]');if(n)return e.instance=n,Wt(n),n;var s=x({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),Wt(n),ae(n,"style",s),Vs(n,i.precedence,t),e.instance=n;case"stylesheet":s=rn(i.href);var c=t.querySelector(rl(s));if(c)return e.state.loading|=4,e.instance=c,Wt(c),c;n=ny(i),(s=Ue.get(s))&&_c(n,s),c=(t.ownerDocument||t).createElement("link"),Wt(c);var d=c;return d._p=new Promise(function(g,T){d.onload=g,d.onerror=T}),ae(c,"link",n),e.state.loading|=4,Vs(c,i.precedence,t),e.instance=c;case"script":return c=cn(i.src),(s=t.querySelector(cl(c)))?(e.instance=s,Wt(s),s):(n=i,(s=Ue.get(c))&&(n=x({},i),Vc(n,s)),t=t.ownerDocument||t,s=t.createElement("script"),Wt(s),ae(s,"link",n),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Vs(n,i.precedence,t));return e.instance}function Vs(t,e,i){for(var n=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=n.length?n[n.length-1]:null,c=s,d=0;d<n.length;d++){var g=n[d];if(g.dataset.precedence===e)c=g;else if(c!==s)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function _c(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Vc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Us=null;function sy(t,e,i){if(Us===null){var n=new Map,s=Us=new Map;s.set(i,n)}else s=Us,n=s.get(i),n||(n=new Map,s.set(i,n));if(n.has(t))return n;for(n.set(t,null),i=i.getElementsByTagName(t),s=0;s<i.length;s++){var c=i[s];if(!(c[En]||c[It]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(e)||"";d=t+d;var g=n.get(d);g?g.push(c):n.set(d,[c])}}return n}function oy(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function ab(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ry(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function nb(t,e,i,n){if(i.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var s=rn(n.href),c=e.querySelector(rl(s));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Hs.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,Wt(c);return}c=e.ownerDocument||e,n=ny(n),(s=Ue.get(s))&&_c(n,s),c=c.createElement("link"),Wt(c);var d=c;d._p=new Promise(function(g,T){d.onload=g,d.onerror=T}),ae(c,"link",n),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Hs.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Uc=0;function lb(t,e){return t.stylesheets&&t.count===0&&Ks(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var n=setTimeout(function(){if(t.stylesheets&&Ks(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Uc===0&&(Uc=62500*Hv());var s=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ks(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Uc?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(s)}}:null}function Hs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ks(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ls=null;function Ks(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ls=new Map,e.forEach(sb,t),Ls=null,Hs.call(t))}function sb(t,e){if(!(e.state.loading&4)){var i=Ls.get(t);if(i)var n=i.get(null);else{i=new Map,Ls.set(t,i);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var d=s[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(i.set(d.dataset.precedence,d),n=d)}n&&i.set(null,n)}s=e.instance,d=s.getAttribute("data-precedence"),c=i.get(d)||n,c===n&&i.set(null,s),i.set(d,s),this.count++,n=Hs.bind(this),s.addEventListener("load",n),s.addEventListener("error",n),c?c.parentNode.insertBefore(s,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var ul={$$typeof:J,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function ob(t,e,i,n,s,c,d,g,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ro(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.hiddenUpdates=Ro(null),this.identifierPrefix=n,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function cy(t,e,i,n,s,c,d,g,T,C,R,k){return t=new ob(t,e,i,d,T,C,R,k,g),e=1,c===!0&&(e|=24),c=Te(3,null,null,e),t.current=c,c.stateNode=t,e=gr(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:n,isDehydrated:i,cache:e},Sr(c),t}function uy(t){return t?(t=Ha,t):Ha}function fy(t,e,i,n,s,c){s=uy(s),n.context===null?n.context=s:n.pendingContext=s,n=Ni(e),n.payload={element:i},c=c===void 0?null:c,c!==null&&(n.callback=c),i=Di(t,n,e),i!==null&&(ge(i,t,e),Gn(i,t,e))}function dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Hc(t,e){dy(t,e),(t=t.alternate)&&dy(t,e)}function hy(t){if(t.tag===13||t.tag===31){var e=na(t,67108864);e!==null&&ge(e,t,67108864),Hc(t,67108864)}}function my(t){if(t.tag===13||t.tag===31){var e=Ne();e=Bo(e);var i=na(t,e);i!==null&&ge(i,t,e),Hc(t,e)}}var Gs=!0;function rb(t,e,i,n){var s=N.T;N.T=null;var c=L.p;try{L.p=2,Lc(t,e,i,n)}finally{L.p=c,N.T=s}}function cb(t,e,i,n){var s=N.T;N.T=null;var c=L.p;try{L.p=8,Lc(t,e,i,n)}finally{L.p=c,N.T=s}}function Lc(t,e,i,n){if(Gs){var s=Kc(n);if(s===null)jc(t,e,n,Js,i),py(t,n);else if(fb(s,t,e,i,n))n.stopPropagation();else if(py(t,n),e&4&&-1<ub.indexOf(t)){for(;s!==null;){var c=Da(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=Ii(c.pendingLanes);if(d!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var T=1<<31-xe(d);g.entanglements[1]|=T,d&=~T}Fe(c),(At&6)===0&&(Es=ve()+500,nl(0))}}break;case 31:case 13:g=na(c,2),g!==null&&ge(g,c,2),Ns(),Hc(c,2)}if(c=Kc(n),c===null&&jc(t,e,n,Js,i),c===s)break;s=c}s!==null&&n.stopPropagation()}else jc(t,e,n,null,i)}}function Kc(t){return t=Jo(t),Gc(t)}var Js=null;function Gc(t){if(Js=null,t=Na(t),t!==null){var e=h(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=f(e),t!==null)return t;t=null}else if(i===31){if(t=m(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Js=t,null}function yy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zg()){case Af:return 2;case Mf:return 8;case Ol:case Fg:return 32;case Ef:return 268435456;default:return 32}default:return 32}}var Jc=!1,Hi=null,Li=null,Ki=null,fl=new Map,dl=new Map,Gi=[],ub="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function py(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":fl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(e.pointerId)}}function hl(t,e,i,n,s,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:n,nativeEvent:c,targetContainers:[s]},e!==null&&(e=Da(e),e!==null&&hy(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function fb(t,e,i,n,s){switch(e){case"focusin":return Hi=hl(Hi,t,e,i,n,s),!0;case"dragenter":return Li=hl(Li,t,e,i,n,s),!0;case"mouseover":return Ki=hl(Ki,t,e,i,n,s),!0;case"pointerover":var c=s.pointerId;return fl.set(c,hl(fl.get(c)||null,t,e,i,n,s)),!0;case"gotpointercapture":return c=s.pointerId,dl.set(c,hl(dl.get(c)||null,t,e,i,n,s)),!0}return!1}function gy(t){var e=Na(t.target);if(e!==null){var i=h(e);if(i!==null){if(e=i.tag,e===13){if(e=f(i),e!==null){t.blockedOn=e,zf(t.priority,function(){my(i)});return}}else if(e===31){if(e=m(i),e!==null){t.blockedOn=e,zf(t.priority,function(){my(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ys(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Kc(t.nativeEvent);if(i===null){i=t.nativeEvent;var n=new i.constructor(i.type,i);Go=n,i.target.dispatchEvent(n),Go=null}else return e=Da(i),e!==null&&hy(e),t.blockedOn=i,!1;e.shift()}return!0}function vy(t,e,i){Ys(t)&&i.delete(e)}function db(){Jc=!1,Hi!==null&&Ys(Hi)&&(Hi=null),Li!==null&&Ys(Li)&&(Li=null),Ki!==null&&Ys(Ki)&&(Ki=null),fl.forEach(vy),dl.forEach(vy)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Jc||(Jc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,db)))}var Xs=null;function by(t){Xs!==t&&(Xs=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Xs===t&&(Xs=null);for(var e=0;e<t.length;e+=3){var i=t[e],n=t[e+1],s=t[e+2];if(typeof n!="function"){if(Gc(n||i)===null)continue;break}var c=Da(i);c!==null&&(t.splice(e,3),e-=3,Kr(c,{pending:!0,data:s,method:i.method,action:n},n,s))}}))}function un(t){function e(T){return qs(T,t)}Hi!==null&&qs(Hi,t),Li!==null&&qs(Li,t),Ki!==null&&qs(Ki,t),fl.forEach(e),dl.forEach(e);for(var i=0;i<Gi.length;i++){var n=Gi[i];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Gi.length&&(i=Gi[0],i.blockedOn===null);)gy(i),i.blockedOn===null&&Gi.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(n=0;n<i.length;n+=3){var s=i[n],c=i[n+1],d=s[fe]||null;if(typeof c=="function")d||by(i);else if(d){var g=null;if(c&&c.hasAttribute("formAction")){if(s=c,d=c[fe]||null)g=d.formAction;else if(Gc(s)!==null)continue}else g=d.action;typeof g=="function"?i[n+1]=g:(i.splice(n,3),n-=3),by(i)}}}function xy(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(d){return s=d})},focusReset:"manual",scroll:"manual"})}function e(){s!==null&&(s(),s=null),n||setTimeout(i,20)}function i(){if(!n&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,s=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),s!==null&&(s(),s=null)}}}function Yc(t){this._internalRoot=t}Ps.prototype.render=Yc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var i=e.current,n=Ne();fy(i,n,t,e,null,null)},Ps.prototype.unmount=Yc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fy(t.current,2,null,t,null,null),Ns(),e[ja]=null}};function Ps(t){this._internalRoot=t}Ps.prototype.unstable_scheduleHydration=function(t){if(t){var e=wf();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Gi.length&&e!==0&&e<Gi[i].priority;i++);Gi.splice(i,0,t),i===0&&gy(t)}};var Sy=l.version;if(Sy!=="19.2.4")throw Error(r(527,Sy,"19.2.4"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var hb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{Tn=Qs.inject(hb),be=Qs}catch{}}return yl.createRoot=function(t,e){if(!u(t))throw Error(r(299));var i=!1,n="",s=Dh,c=Ch,d=wh;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError)),e=cy(t,1,!1,null,null,i,n,null,s,c,d,xy),t[ja]=e.current,Ec(t),new Yc(e)},yl.hydrateRoot=function(t,e,i){if(!u(t))throw Error(r(299));var n=!1,s="",c=Dh,d=Ch,g=wh,T=null;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(g=i.onRecoverableError),i.formState!==void 0&&(T=i.formState)),e=cy(t,1,!0,e,i??null,n,s,T,c,d,g,xy),e.context=uy(null),i=e.current,n=Ne(),n=Bo(n),s=Ni(n),s.callback=null,Di(i,s,n),i=n,e.current.lanes=i,Mn(e,i),Fe(e),t[ja]=e.current,Ec(t),new Ps(e)},yl.version="19.2.4",yl}var zy;function Mb(){if(zy)return Pc.exports;zy=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Pc.exports=Ab(),Pc.exports}var Eb=Mb();const jb=[{id:1,title:"প্রভু তোমারি নামে হেথায় সমাগত হই",transliteration:"Prabhu Tomari Name Hethay Somagoto Hoi",category:"আবাহন ও আরাধনা",composer:"বিনয় কুমার পাত্র",lyrics:`১ প্রভু তোমারি নামে হেথায় সমাগত হই,
চালাও মোদের আত্মাতে।
যীশু দয়াবান, করেন শান্তি দান,
জয় হে, জয় হে, জয় হে,
প্রভু তোমারই জয় হে।

নিজ শোণিতে পাপীরে তারিতে
প্রাণ দিলেন কালভেরী ক্রুশেতে,
রক্ষ মোদের প্রভু সকল বিপদে
জয় হে, জয় হে, জয় হে,
প্রভু তোমারই জয় হে।

বাহির অন্তর ভুবন চরাচর
শুষ্ক হৃদয় কর প্রেমে সরসতর,
তোমারি সভা প্রভু সফল কর
জয় হে, জয় হে, জয় হে,
প্রভু তোমারই জয় হে।`},{id:2,title:"পবিত্র, পবিত্র, পবিত্রময় পিতা",transliteration:"Pobitra, Pobitra, Pobitramoy Pita",category:"আবাহন ও আরাধনা",composer:"রাজেন ফকির (১৮৯৫)",youtubeId:"RZHQOkoPsc4",lyrics:`(বল) পবিত্র, পবিত্র, পবিত্রময় পিতা,
পবিত্র, পবিত্র, পুত্র ও আত্মা,
সদা সর্বকাল, চিরকাল, পিতা প্রভুরই ধন্য,
পবিত্র আত্মা ও যীশুরই ধন্য।

১ (বল) গৌরব, গৌরব জগৎময় সবে গাও,
প্রশংসা, প্রশংসা, প্রাণ খুলে গাও,
সদা ধন্যবাদ, ধন্যবাদ, গাও আরো উচ্চনাদ,
জয়ধনী দিয়ে সব পাপ করো ছেদ।

২ (আমি) কাঁদিব, হাসিব, সর্বাবস্থায় নাচিব
জীবনে, মরণে, যীশু পূজিব,
মোর নিঃশ্বাসে, প্রশ্বাসে, যীশুর সাথে বেড়াব,
চাখিব, মাখিব, নাহি ছাড়িব।

৩ (কভু) চায়না আর মন আমার, জগতের কিছু আর,
এক দৃষ্টে দেখি ঐ যীশুর উপর,
সদা যীশুর জয় জীবনময় —
আসে জোয়ার বানের ন্যায়,
মোর আত্মা তাঁর ঢেউয়ে,
ক্রমে উর্দ্ধে ধায়।`},{id:3,title:"পুণ্য, পুণ্য, পুণ্য! সর্ব্বশক্তিমান! (Holy, Holy, Holy! Lord God Almighty!)",transliteration:"Punyo, Punyo, Punyo! Sorbo-shaktiman!",category:"আবাহন ও আরাধনা",composer:"জে. এ. ডি. ম্যাকডোনাল্ড",youtubeId:"H5gXUrIMOck",lyrics:`১ পুণ্য, পুণ্য, পুণ্য! সর্ব্বশক্তিমান।
প্রাতঃস্তবে গাহি সবে, তব গুণগান।
পুণ্য, পুণ্য, পুণ্য সর্ব্বজ্যোতিষ্মান।
পিতা, পুত্র, আত্মা, ত্রিত্ব দয়াবান।

২ পুণ্য, পুণ্য, পুণ্য! স্বর্গে সাধু যত,
সঁপি তব পদে কিরীট পুজে সতত,
করূব, সরাফ সবে, বন্দে অবিরত,
যিনি ছিলেন, আছেন, থাকবেন নিয়ত।

৩ পুণ্য, পুণ্য, পুণ্য! অন্ধকারাবৃত,
প্রভা যাঁহার মানব-চক্ষে, সহ্য নাহি হয়,
তুমি মাত্র পুণ্য, তুমি অবিকৃত
তুমি সর্ব্বদর্শী, সর্ব্বপ্রেমময়।

৪ পুণ্য! পুণ্য! পুণ্য! সর্ব্বশক্তিমান।
প্রাণীমাত্রে গাহে সদা তব গুণচয়,
তব দাস ও দাসী মিলায় স্তুতিগান,
পিতা, পুত্র, আত্মা ত্রিত্ব দয়াময়।`},{id:4,title:"এস হে করুণাময়, বিরাজ হৃদয়াসনে",transliteration:"Eso He Korunamoy, Birajo Hridoyasone",category:"আবাহন ও আরাধনা",composer:"ঈশানচন্দ্র দাস (১৮৯৪)",youtubeId:"xOE_u9pjVeo",lyrics:`এস হে করুণাময়, বিরাজ হৃদয়াসনে,
পুজিতে তোমারে আজি, বাসনা সবার মনে।

১ তব দাস দাসী যত, হইয়াছি সমবেত,
তৃপ্ত কর সবে পিতঃ, মনোমত আশীষ দানে।

২ অর্পিতে পদে তোমার, আনিয়াছি উপহার,
ভকতি-কুসুম-হার, লহ নাথ নিজ গুণে।`},{id:5,title:"আজি মিলেছি সকলে, তোমারই নামে",transliteration:"Aji Milechi Sokole, Tomari Name",category:"আবাহন ও আরাধনা",composer:"অনিল কুমার সরকার (১৯৮৫)",youtubeId:"Vyjao9nMl2A",lyrics:`আজি মিলেছি সকলে, তোমারই নামে, তব গৌরব গাঁথা গাই,
তব চরণতলে প্রভু ফুটিয়া আছে, ফুলের হাসি তাই।

১ এই পুণ্য দিনে যারা তোমার দ্বারে,
তব শুভ্র আলোকে দাও ভরে সবারে,
যীশু নাম যবে, গাহি বারে বারে, চির শান্তি যে পাই।

অন্তরা
প্রভু তুমি তারে, এই জনতারে ভরে দিও তব প্রেমে
মধু বীণা তানে, গাহি নব গানে, তুমি এস হেথা নেমে।

২ সফলতা দাও এই সভার কাজে
দিও তোমার আশীষ কণা সবার মাঝে,
প্রেম-ফুল চন্দনে, ও চরণ বন্দনে, রহিনু যে সদাই।`},{id:6,title:"ভুবন ভরা বীণা বাজায়, পুণ্য তোমার নাম",transliteration:"Bhubon Bhora Bina Bajay, Punyo Tomar Nam",category:"আবাহন ও আরাধনা",composer:"সন্তোষ কুমার পাত্র (১৯৬৫)",youtubeId:"D6s7pyKiSEo",lyrics:`১ ভুবন ভরা বীণা বাজায়, পুণ্য তোমার নাম
সুন্দর হে — তোমায় নমি, পুণ্য তোমার নাম।
চন্দ্র-গ্রহ তারায় তারায়, অসীম সুখে সে সুর লুটায়,
কুঞ্জে পাতায় দোল দিয়ে যায়, পুণ্য তোমার নাম।

অন্তরা
দুঃখ সুখ ঝংকারে যে তোমার তালে তালে,
জীবন মরণ বন্দী হেথায়, কালের অন্তরালে।

২ দাও পরিচয় সব অজানায়, আঘাত হানো পাষাণ হিয়ায়,
সবার মাঝে ধন্য হউক, পুণ্য তোমার নাম।`},{id:7,title:"এলেম তব দ্বারে, ভিক্ষার ঝুলি প্রভু দাও পুরে",transliteration:"Elem Tobo Dware, Bhikhar Jhuli Prabhu Dao Pure",category:"আবাহন ও আরাধনা",composer:"গগন চন্দ্র দত্ত (১৮৯৬)",lyrics:`এলেম তব দ্বারে, ভিক্ষার ঝুলি প্রভু দাও পুরে;
মোদের যত প্রয়োজন, আছে তব ভাণ্ডারে।
১ যীশুর রক্তে ক্রীত ধন, আছে সব অগণন;
কর আজি বিতরণ, নির্ধনে দয়া করে।

২ দুঃখী কাঙাল যত জন, কর তাদের ধনবান;
হয়ে প্রফুল্লিত মন, প্রশংসে তোমারে।

৩ ধনবান হব বলে, এসেছি মোরা সকলে;
দয়ার ভাণ্ডার দাও হে খুলে, তৃপ্ত কর দান করে।`},{id:8,title:"যীশু এস আমার অন্তরে",transliteration:"Jishu Eso Amar Ontore",category:"আবাহন ও আরাধনা",composer:"রামচরণ ঘোষ (১৮৯৪)",youtubeId:"2N6R6AMblJY",lyrics:`যীশু এস আমার অন্তরে,
জুড়াব প্রাণ তোমারে হেরে।

১ তোমার মোহন মুরতি হেরে,
যাবে দুঃখ অন্তরে। আমার দয়াল যীশু...

২ আমার তাপিত প্রাণ শীতল হবে,
পেলে তোমায় অন্তরে। আমার দয়াল যীশু...

৩ তোমার বিচ্ছেদে নরক যাতনা,
ভোগে পাপী অন্তরে। আমার দয়াল যীশু...

৪ তোমার সহবাসে স্বর্গ-সুখ,
হয় এই সংসারে। আমার দয়াল যীশু...

৫ যীশু তুমি যথা স্বর্গ তথা,
এস আমার অন্তরে। আমার দয়াল যীশু...`},{id:9,title:"জয় প্রভু যীশু, জয় প্রভু যীশু",transliteration:"Joy Prabhu Jishu, Joy Prabhu Jishu",category:"আবাহন ও আরাধনা",composer:"গগন চন্দ্র দত্ত",youtubeId:"Jgn23cvF_00",lyrics:`জয় প্রভু যীশু, জয় প্রভু যীশু,
জয় জয় সত্য সনাতন,
জগত-তারণ, করণ-কারণ,
আইলে এ মর্ত্য ভুবন।

১ অদ্ভুত মহিমা জগতে প্রকাশিলে,
কে পারে করিতে বর্ণন?
সহস্র রসনা, করিলেও ঘোষণা,
শেষ না হবে কখন।

২ ভকত-প্রাণ, ভকত-জ্ঞান,
ভকতের অমূল্য ধন,
পতিত-পাবন, ভকত ভূষণ,
ধন্য ঈশ্বর নন্দন।`},{id:10,title:"শুদ্ধ সুন্দর ঈশ পুত্র তুমি",transliteration:"Shuddho Sundoro Isho Putro Tumi",category:"আবাহন ও আরাধনা",composer:"মানিক নাথ",youtubeId:"jAaWILaM-4Q",lyrics:`শুদ্ধ সুন্দর ঈশ পুত্র তুমি, যীশু তব নাম
প্রাণের প্রদীপ জ্বেলে আজি আমি তোমাকে করি প্রণাম।

১ স্মরণ করি ঐ শ্রীমুখ তোমার,
সংসারে আর ভয় কী আমার,
শুধু যেন আমি শত কাজে প্রভু,
হতে পারি নিষ্কাম।

অন্তরা
রয়েছ আমার চোখের আড়ালে, মনে হয় তুমি যে নাই,
আমি যে রয়েছি নয়নে তোমার, সে কথা ভুলে যাই।

২ এই চলার পথে যত বাধা পাই,
কে যেন হৃদয়ে বলে ভয় নাই,
সে যে প্রভু তুমি রয়েছ আমার, হৃদয়ে দিবস যাম।`},{id:11,title:"চল সকলে যাই যীশুর সদনে",transliteration:"Chol Sokole Jai Jishur Sodone",category:"আবাহন ও আরাধনা",composer:"মথুরা নাথ বোস (১৮৯৫)",youtubeId:"u66LQ8IYn_k",lyrics:`চল সকলে যাই যীশুর সদনে,
ডাকিতেছেন দয়াল যীশু মধুর বচনে।

১ ওহে পরিশ্রান্ত ভারাক্রান্ত সর্ব পাপী জন,
আমার নিকটে আইস পাবে শান্ত মন;
মোর জোঁয়ালি সহজ ভার লঘু-বহনে।

২ আমার নিকটে আইলে ক্ষুধা নাহি রয়,
আমাতে বিশ্বাসী হইলে পিপাসা পলায়;
বহে আনন্দ অমৃত নদী সতত মনে।

৩ যে জন সতত যীশুর বচন মানে,
তাঁহার প্রেমের মাহাত্ম্য কেবল সে জানে;
যীশু নিরন্তর করেন স্থিতি তাহার মনে।`},{id:12,title:"সবে-আনন্দে, আনন্দে মহানন্দে কর গান",transliteration:"Sobe Anonde, Anonde Mohanonde Kor Gan",category:"আবাহন ও আরাধনা",composer:"শলোমন শান্তিনাথ বিশ্বাস (১৯০৫)",youtubeId:"RTx2s9c6ess",lyrics:`(সুর: বল, পবিত্র, পবিত্র, পবিত্র)
সবে-আনন্দে, আনন্দে মহানন্দে কর গান,
অন্তরে, অধরে ধর ঐক্যতান।
সদা যীশু নাম, মধুর নাম, হৃদে জপ অবিরাম,
নির্ভয়ে পৌঁছিবে সুখ মোক্ষধাম।

১ গাও আধ্যাত্মিক সংকীর্তন, গীত ও স্তোত্র সর্বক্ষণ,
ঈশ্বরের উদ্দেশ্যে কর স্তুতিবাদ,
সদা-দয়ারই অধীনে, সরল অন্তঃকরণে,
খ্রীষ্ট নামে পিতাকে কর ধন্যবাদ।

২ এস-পবিত্র আত্মাতে, পরিপূর্ণ হও সবে,
আত্মিক সংকীর্তনে গীত ও স্তোত্র ধ্যান,
আরও-পরস্পর আলাপে, আপন আপন হৃদয়ে,
প্রভুরই উদ্দেশ্যে কর বাদ্য গান।

৩ এখন এস, ভাই ভগ্নীগণ, হয়ে সবে ঐক্য মন,
ঈশ্বরের উদ্দেশ্যে, হৃদে কর গান,
সেই যীশু নাম, মোক্ষধাম, ওষ্ঠাধরে করি গান,
মাহাত্ম্য স্বীকারে স্তুতি-যজ্ঞ দান।

৪ বল-ধন্যবাদ সর্বক্ষণ, পিতা, পুত্র সদাত্মন
গৌরব ও প্রশংসা যুগে যুগে তাঁর,
আরও যীশু জয়, মৃত্যুঞ্জয়, প্রেমী পিতা, আত্মার জয়,
সভক্তি অন্তরে করি নমস্কার।`},{id:13,title:"আমি যীশু যীশু বলে যবে ডাকি তোমায়",transliteration:"Ami Jishu Jishu Bole Jobe Daki Tomay",category:"আবাহন ও আরাধনা",composer:"প্রিয়নাথ বৈরাগী (১৯৫২)",youtubeId:"o9yeKVLlK0k",lyrics:`আমি যীশু যীশু বলে যবে ডাকি তোমায়,
তুমি সাড়া দিও প্রাণে ওহে দয়াময়।

১ দিও তোমার পাদপদ্ম, হে মম পরমারাধ্য,
শুদ্ধ হয় যেন চিত্ত পদধুলায়।

২ তোমার শ্রীমুখের জ্যোতি, দেখিতে দিও শকতি,
সন্দেহ ভীতি যেন দূরে পলায়।

৩ বায়ু বিকম্পিত নল, সম এ চিত্ত চঞ্চল,
দিও প্রাণে বল তোমার সেবায়।`},{id:14,title:"এস এস প্রাণের যীশু, আজ তোমারে পুজিব",transliteration:"Eso Eso Praner Jishu, Aj Tomare Pujibo",category:"আবাহন ও আরাধনা",composer:"মধুসূদন সরকার (১৮৯৬)",lyrics:`এস এস প্রাণের যীশু, আজ তোমারে পুজিব।
মোহন মুরতি হেরে প্রেম রসে মাতিব।

১ ভকতি পূর্ণ অন্তরে, পুজিব নাথ তোমারে,
রাখিব হৃদি মাঝারে প্রাণের আশা মিটাব।

২ রাখী হৃদি সিংহাসনে, সেবিব তোমায় যতনে,
প্রীতি পুষ্প ও চরণে, দিয়া সদা সাজাব।

৩ তব সহবাসে রব তোমা বিনা না জানিব,
গুণগান গেয়ে তব এ জীবন যাপিব।`},{id:15,title:"দরশন দাও হে দয়াময়",transliteration:"Doroshon Dao He Doyamoy",category:"আবাহন ও আরাধনা",composer:"দেবীপ্রসাদ রায়চৌধুরী",youtubeId:"FRRveahRxWc",lyrics:`দরশন দাও হে দয়াময়,
দীনে দয়া কর, ওগো মহাপ্রাণ।
১ পিতা, পুত্র, আত্মা ঈশ্বর মহান,
দাও মোরে দাও তব দরশন,
তব তরে মম আকুলিত প্রাণ।

অন্তরাতব মহাপ্রেম, তব মহাদান,
বিমোহিত হই যত করি ধ্যান।

২ তুমি মম নাথ, তুমি পরিত্রাণ,
তুমি মম জীবন, তুমি আমার গান,
দিবানিশি তোমাকেই চায় মম প্রাণ।`},{id:16,title:"নন্দিত মনে প্রভুর ভবনে",transliteration:"Nondito Mone Prabhur Bhovone",category:"আবাহন ও আরাধনা",composer:"মানিক নাথ (১৯৭২)",youtubeId:"_jfBdUcLx7M",lyrics:`নন্দিত মনে প্রভুর ভবনে, মিলেছি সকলে এসে।
কণ্ঠে মোদের আনন্দ গান, এ শুভ যাত্রা শেষে।

১ প্রভুর আলয়ে এসেছি সবাই,
তাঁরই মন্দিরে কোন ভেদ নাই,
মিলনের সুর বারে বারে তাই, প্রাণের মাঝারে মেশে।

অন্তরা
মহান প্রভুর ওঠে স্তব গীতি, পুণ্য এ গৃহ তলে,
তাঁরই নামে মোরা করি বন্দনা, একতানে দলে দলে।

২ বরুক হেথায় হে শান্তিরাজ,
শান্তির ধারা সবাকার মাঝ।
তোমার আশীষ নিব শিরে আজ,
দিবে যাহা ভালোবেসে।`},{id:17,title:"তোমার জয় হউক, জয় হউক হে মহারাজ",transliteration:"Tomar Joy Houk, Joy Houk He Moharaj",category:"আবাহন ও আরাধনা",composer:"প্রিয়নাথ বৈরাগী",youtubeId:"I_Ilj6F2djM",lyrics:`তোমার জয় হউক, জয় হউক হে মহারাজ,
হউক ঐ মহিমা কীর্তন মহীতলে।
ভবে যত নরনারী এসে সারি সারি,
লুটাক তোমার ঐ চরণ-তলে।

১ বসে স্বর্গের সিংহাসনে, চেয়ে আছ জগৎ পানে,
কোথায় কে কাঁদে অভাজন, করে হাত প্রসারণ,
কর হে ধারণ তুলে কোলে।

২ মুছাও পাপীর নয়নের জল; কে আছে আর এমন দয়াল;
তুমি ধন্য হে গুণধাম, ধন্য ঐ যীশু নাম,
নাই এমন নাম আর ভূমণ্ডলে।`},{id:18,title:"আত্মন! এস মোদের অন্তরে",transliteration:"Atmon! Eso Moder Ontore",category:"আবাহন ও আরাধনা",composer:"উইলিয়াম কেরী (১৮০৫)",lyrics:`আত্মন! এস মোদের অন্তরে,
উজ্জ্বল কর আপনার করে।

১ তোমার সত্যের আলো প্রদান করে,
সুপথ দেখাও অন্তরে। (ওহে সত্যের আলো!)

২ বহাও জীবন-বায়ু শক্তি ভরে,
সবল কর অন্তরে। (ওহে জীবন বায়ু!)

৩ অগ্নি স্পর্শ দিয়া ওষ্ঠাধরে,
খাঁটি কর অন্তরে। (ওহে স্বর্গের আগুন!)

৪ সেই কপোত বেশে নেমে ধীরে,
নিবাস কর অন্তরে। (ওহে আত্মা কপোত!)

৫ মোদের যীশু লতার শাখা করে,
দেও তাঁরই রস অন্তরে। (ওহে শক্তিদাতা!)

৬ শিখাও আব্বা বলা আমাদেরে,
দেও পুত্রের ভাব অন্তরে! (ওহে সত্য গুরু!)

৭ দেখাও যীশুর মূর্ত্তি অঙ্কিত করে,
 স্পষ্ট মোদের অন্তরে। (ওহে যীশুর আত্মা!)

৮ দুঃখিত হয়ে যেও না হে ফিরে,
সদা থাক অন্তরে। (ওহে ভক্ত সখা!)`},{id:19,title:"আত্মন! এস হৃদয় উদ্যানে",transliteration:"Atmon! Eso Hridoy Udyane",category:"আবাহন ও আরাধনা",composer:"প্রিয়নাথ বৈরাগী",lyrics:`আত্মন! এস হৃদয় উদ্যানে, তুষিব হৃদয় দানে।

১ যেমত বায়ু বিহনে, জীবাদি বাঁচে না প্রাণে,
সেই মত তোমা বিনে, বাঁচি না এ জীবনে।

২ যেমন বায়ু সুখী করে, তেমন সুখী কর মোরে,
সদাই সিদ্ধ অন্তরে, ডাকব তোমায় এক প্রাণে।

৩ ওহে প্রভু দয়াময়, উদ্যানে এস এ সময়,
নানা জাতি পুষ্পচয়, ফুটাও হৃদে কাননে।

৪ বিশ্বাস ভক্তি পবিত্রতা, প্রেম আনন্দ সহিষ্ণুতা,
মধুর ভাব দয়া নম্রতা, চাই এই উদ্যানে।`},{id:20,title:"এসে দাঁড়াও, আমার সম্মুখে",transliteration:"Ese Danrao, Amar Sommukhe",category:"আবাহন ও আরাধনা",composer:"প্রিয়নাথ বৈরাগী",youtubeId:"Og2pEnOeXdE",lyrics:`এসে দাঁড়াও, আমার সম্মুখে।
তাপিত জীবন শীতল করি — তোমার ভুবন মোহন রূপ দেখে।

১ এস নেমে স্বর্গ হতে, দাঁড়াও এসে এই পৃথিবীতে,
পৃথিবী ঐ চরণপাতে, উঠুক শিহরিয়া পুলকে।

২ রোমাঞ্চিত এই ধরাতলে, যীশু তোমার চরণতলে,
স্বর্গের কুসুম দলে দলে, উঠুক ফুটিয়া লাখে লাখে।

৩ দাঁড়াও আমার আখির আগে, তোমার রূপের পরশ লেগে,
নতুন সৃষ্টি উঠুক জেগে, আমার দিশেহারা দুই চোখে।

৪ চিরসুন্দর, পরমধন্য, স্বর্গমর্ত্যে অগ্রগণ্য,
তুমি ত্রিলোকের বরেণ্য, তোমার তুল্য নাই আর ত্রিলোকৈ।

৫ যে পেয়েছে তোমার দেখা, যীশু হে পাতকীর সখা,
ধন্য জীবন, সার্থক শিক্ষা, সুখী সে অপার্থিব সুখে।`},{id:21,title:"জয় জগদীশ সুত যীশু প্রেমময়",transliteration:"Joy Jagadish Suto Jishu Premomoy",category:"আবাহন ও আরাধনা",composer:"বিন্দুনাথ সরকার",youtubeId:"ih0FHTpaOyY",lyrics:`জয় জগদীশ সুত যীশু প্রেমময়।
ঘোষিছে অমরবৃন্দ সদা তব জয়।

১ প্রীতি নর সন্তানেতে, শান্তি হইল পৃথিবীতে,
মহিমা ঊর্ধ্বলোকেতে, জয়, জয়, জয়।

২ গাও সবে তালে তালে, যীশু যীশু যীশু বলে,
নর-নারী সবে মিলে, বল যীশু জয়।

৩ হাল্লেলুইয়া উচ্চরবে, প্রশংস তাঁহাকে সবে,
হোশানা ঈশ্বর-সুতে, জয়, জয়, জয়।`},{id:22,title:"সূর্যের আলোয়, আকাশের নীলিমায়",transliteration:"Surjer Aloy, Akasher Nilimay",category:"আবাহন ও আরাধনা",youtubeId:"zA2ixwXGUYU",lyrics:`সূর্যের আলোয়, আকাশের নীলিমায়,
দেখেছি তোমার মহিমা।
চাঁদের ঐ জ্যোছনায়, আর তারায় তারায়,
দেখেছি তোমার মহিমা।

১ পাখির গানে আর ঢেউয়ের তালে,
শুনেছি তোমার মধুর সুর,
শীতল ছায়ায় মৃদু মন্দ হাওয়ায়
তোমার ছোঁয়াতে প্রভু মোর।

২ দূর দিগন্তে, আকাশের প্রান্তে, 
ছড়িয়ে আছো প্রভু মোর,
ফুলের ওই সুভাসে, আর সবুজ ঘাসে,
ছড়িয়ে আছো প্রভু মোর।

৩ শুনেছি প্রভু তুমি আছ সদাই,
সকল হৃদয় মাঝারে,
খুঁজেছি তোমায় প্রভু কত শতবার,
আমার হৃদয় গভীরে।`},{id:23,title:"যীশু আমার পরমপিতা",transliteration:"Jishu Amar Porompita",category:"আবাহন ও আরাধনা",lyrics:`যীশু আমার পরমপিতা! যীশু আমার পরিত্রাতা!
যীশু আমার মুক্তিদাতা! যীশু আমার জীবনদাতা!
তোমার মহিমা আমি করব! তোমার স্তুতি আমি গাইব!
যীশু আমার পরমপিতা! যীশু আমার জীবনদাতা!

১ পথ, সত্য আর জীবন, আমার প্রভু যীশু,
অনাথের সহায় আনন্দে ভরা, আমার প্রভু যীশু।

২ দুঃখে সান্ত্বনা, কষ্টে ঘুমান না, আমার প্রভু যীশু,
বিশ্রাম দেশে নিয়ে যাবে এসে, আমার প্রভু যীশু।`},{id:24,title:"অঙ্গ প্রত্যঙ্গের মালিক প্রণাম তব পায়",transliteration:"Ango Protyonger Malik Pronam Tobo Pay",category:"আবাহন ও আরাধনা",composer:"",lyrics:`অঙ্গ প্রত্যঙ্গের মালিক প্রণাম তব পায়,
ধন্য ধন্য সৃষ্টিকর্তা প্রভু যীশু তোমায়।

১ তব সৃষ্ট এই দুই হাত, গৌরব হোক ত্রাতা,
তব সৃষ্ট এই দুই পা, গৌরব হোক সদা,
লও এ দুই হাত, পা দু' আমার, অঙ্গ হোক তোমার,
যে কাজ করি যেথায় যাই, প্রভু হোক তব মহিমা।

২ তব সৃষ্ট এই দুই কান, গৌরব হোক ত্রাতা,
তব সৃষ্ট এই দুই ঠোঁট, স্তুতি হোক সদা,
লও এ দুই কান, ঠোঁট দু' আমার, অঙ্গ হোক তোমার,
যাহা শুনি যাহা বলি, প্রভু হোক তব প্রশংসা।

৩ তব সৃষ্ট এই দুই চোখ, গৌরব হোক ত্রাতা,
অন্ধ ছিলাম, দৃষ্টি পেলাম জয় জয় হোক তোমার,
মম দুই চোখ তব শ্রীমুখ, দেখুক সদাকাল
যাহা দেখি বিশ্বব্যাপী, প্রভু হোক তব মহিমা।`},{id:25,title:"জয় জয় যীশুর জয়",transliteration:"Joy Joy Jishur Joy",category:"প্রশংসা ও ধন্যবাদ",composer:"",lyrics:`জয় জয় যীশুর জয় (২)
এই শুভদিনে আমরা সকলে গাহি তাঁহার গান।
হা........(৬) হো..........(৬) লা..........(৬)
হাল্লেলুইয়া আমেন।

১ পাপে আমরা মৃত ছিলাম, করলেন জীবন দান,
অন্ধ ছিলাম, দৃষ্টি পেলাম, হলাম তাঁর সন্তান।

২ মরলেন তিনি করলেন উদ্ধার, দিলেন পাপের পরিত্রাণ,
পেলাম শান্তি, পেলাম মুক্তি, ধন্য তাঁহার নাম।

৩ এস সকলে আমরা মিলে গাহি তাঁহার গান,
আসবেন যীশু এ ধরণীতে, করতে রাজ্য স্থাপন।`},{id:26,title:"হোক যীশু নামের সমাদর (All Hail the Power)",transliteration:"Hok Jishu Namer Somador",category:"প্রশংসা ও ধন্যবাদ",composer:"যাকোব কান্তিনাথ বিশ্বাস",lyrics:`১ হোক যীশু নামের সমাদর! দূত করুক প্রণিপাত।
স্তব কর তাঁহার নিরন্তর, রাজ-কিরীট পরাও তাঁয়।

২ দাও মুকুট ওহে সাক্ষীবর, হে স্বর্গের সাধুগণ,
হোক দায়ুদসুতের সমাদর, রাজ-কিরীট পরাও তাঁয়।

৩ হে তুরীধারী করূবগণ, তাঁর সাক্ষাৎ নত হও,
যাঁর সৃষ্ট তোমরা সর্বজন, রাজ-কিরীট পরাও তাঁয়।

৪ হে আদমবংশের মুক্ত নর, যাঁর রক্তে পুণ্যবান,
সেই ত্রাতার কর সমাদর, রাজ-কিরীট পরাও তাঁয়।

৫ হে প্রত্যেক বংশ প্রত্যেক জাত এই বিশ্বমণ্ডলে
তাঁর কাছে কর জানুপাত রাজ-কিরীট পরাও তাঁয়।`},{id:27,title:"হে মোর ঈশ্বর (How Great Thou Art)",transliteration:"He Mor Ishwar Bishmoye Mugdho Mor Pran",category:"প্রশংসা ও ধন্যবাদ",composer:"জেমস্ রবীন্দ্র বিশ্বাস",lyrics:`১ হে মোর ঈশ্বর বিস্ময়ে মুগ্ধ মোর প্রাণ,
কী অদ্ভুত তোমার সৃজিত এই ভুবন।
তারা দেখি শুনি বজ্রনাদ ভীষণ,
তব শক্তির প্রকাশ এই ত্রিভুবন।

ধুয়া
গায় আমার প্রাণ ঈশ্বরের স্তুতিগান
তুমি মহান, কত মহান (২)

২ কুঞ্জবন কী গহন অরণ্যে ভ্রমি,
তরুমাঝে মধুর কূজন শুনি,
পর্বত হতে হেরি মহিমা অপার,
ঝর্ণা বহে স্নিগ্ধ বায়ু আবার।

৩ বুঝি না হায়! পিতা কেমনে,
পাঠালেন পুত্রে প্রাণ দিতে ক্রুশে,
আনন্দে পাপ মোর নিলেন প্রভু শিরে
রক্ত দিলেন তারণ করিবারে।

৪ আসবেন প্রভু জয়ধ্বনি সাথে,
নিতে স্বর্গে ভরবে প্রাণ মোর আনন্দে,
নতশিরে পুঁজব তাঁরই চরণ,
গাইব তুমি হে ঈশ্বর কি মহান।`},{id:28,title:"হে পিতঃ, করি তব প্রশংসা গান(Rejoice & be glad)",transliteration:"He Pitah, Kori Tobo Proshongsha Gan",category:"প্রশংসা ও ধন্যবাদ",composer:"যাকোব কান্তিনাথ বিশ্বাস",lyrics:`১ হে পিতঃ, করি তব প্রশংসা গান,
নিজ পুত্রে ভবে করিলে সম্প্রদান।

ধুয়া
হাল্লেলুইয়া তোমার গৌরব, হাল্লেলুইয়া আমেন,
হাল্লেলুইয়া তোমার গৌরব, উজ্জীবিত হোক মন।

২ গাই তব সঙ্গীত, পুণ্য আত্মার কারণ,
ত্রাণকর্তায় যিনি করিলেন প্রদর্শন।

৩ সব গৌরব স্তুতি, হত মেষ-শাবকের,
লন যিনি শিরে সব পাপ তাপ মানবের।

৪ উজ্জীবিত হোক মন, হৃদয় প্রেমপূর্ণ হোক,
প্রেম হুতাশনে সব উদ্দীপ্ত হোক।

৫ উজ্জীবিত হোক মন, জাগাও মৃতজনে,
খ্রীষ্ট চরণতলে সব আইসুক এক্ষণে।`},{id:29,title:"হে পিতঃ নিরূপায় মানবে(We praise The O God)",transliteration:"He Pitah Nirupay Manobe",category:"প্রশংসা ও ধন্যবাদ",composer:"যাকোব কান্তিনাথ বিশ্বাস",lyrics:`১ হে পিতঃ নিরূপায় মানবে, বাঁচাতে পাঠালেন এ ভবে,
একজাত প্রিয়তম পুত্রধন, করিলেন প্রেমধন বিতরণ।

ধুয়া: ধন্যবাদ, ধন্যবাদ পেয়েছি যে সকল আশীর্বাদ,
ধন্যবাদ, ধন্যবাদ পবিত্র আত্মার ঐ সে প্রসাদ।

২ ত্যজিয়া গৌরবের সিংহাসন, আসিলেন পাপময় এ ভুবন,
দাসের বেশ ধরি, ক্লেশ সহিলেন, যাতনা, লাঞ্ছনা ভুগিলেন।

৩ বাঁচাতে দয়াময় পাপীগণ, যে বিষম ক্রুশোপার নিধন হন,
প্রেমেতে প্রায়শ্চিত্ত সাধিলেন, মরণে মৃতকে বাঁচাইলেন।

৪ শুদ্ধাত্মন দান করেন চেতনা, যীশুর প্রেম লভিতে সাধনা,
দূর করেন পাপময় বাসনা, দেন ক্ষুণ্ণ হৃদয়ে সান্ত্বনা।

৫ জয় পিতা! জয় পুত্র! সদাত্মন! ধন্যবাদ প্রশংসা সর্বক্ষণ,
প্রণিপাত করি হে চরণে, সঙ্কীর্তন গ্রাহ্য হোক প্রেমগুণে।`},{id:30,title:"গাও যীশুর গুণগান",transliteration:"Gao Jishur Gunogan",category:"প্রশংসা ও ধন্যবাদ",composer:"সুনীল দত্ত",lyrics:`গাও যীশুর গুণগান, গাও যীশুর গুণগান,
বল সবে, বল সবে, তিনি চিরসুমহান।

১ তাঁর প্রেম কত ভাই, সে প্রেমের তুলনা নাই,
তাঁর প্রেমে অন্ধ দেখে, মৃতদেহ পায় প্রাণ।

অন্তর
প্রেমের আসন পাতেন তিনি পথের ধুলায়,
ভালোবাসা দেবার তরে ডাকেন সবায়।

২ তাঁর নামের গুণের তরে, মোহ বাঁধন খসে পড়ে,
তাঁরই রক্ত ধারাতে ভাই পাপী পেল পরিত্রাণ।`},{id:31,title:"ঘেরিয়া স্বর্গ সিংহাসন (Glory, Glory,)",transliteration:"Gheriya Swargo Singhashon",category:"প্রশংসা ও ধন্যবাদ",composer:"আইজাক ওয়াটস্",lyrics:`১ ঘেরিয়া স্বর্গ সিংহাসন, সানন্দে সকল দূতে গায়,
গাই আমরাও মধুর সঙ্কীর্তন, তৎসঙ্গে মিলি একতায়।

ধুয়া
গৌরব, গৌরব, আইস গাই, যীশুর গৌরব সর্ব্বদাই,
হোশান্না, হোশান্না, হোশান্না, যীশুর গৌরব হোক।

২ সুরবে অযুত রসনায়, গাহিছে তারা সর্ব্বক্ষণ,
আনন্দে হৃদয় উথলায়, এস গাই আমরাও আজীবন।

৩ সুসম্মান প্রাপ্তির যোগ্য হন ঐ যীশু, ঈশ-শিশু মেষ,
যেহেতু করেন প্রাণ অর্পণ, তাই গাহে তারা সবিশেষ।

৪ সেই শিশু-মেষ, সম্মান-ভাজন, সব এস তদুত্তরে গাই,
তাঁহার ক্রুশমৃত্যুর কারণ, সকলে পাপের ক্ষমা পাই।

৫ ক্ষমতা, প্রতাপ ও সম্মান, তা প্রভু যীশুর চিরন্তন,
সব করুক তাঁহার প্রশংসা গান সর্বত্র ভবের সর্ব্বজন।`},{id:32,title:"আনন্দে বন্দি দীনবন্ধু তোমার রাঙা পায়",transliteration:"Anonde Bondi Dinobondhu Tomar Ranga Pay",category:"প্রশংসা ও ধন্যবাদ",composer:"প্রিয়নাথ বৈরাগী (১৯৫০)",lyrics:`আনন্দে বন্দি দীনবন্ধু তোমার রাঙা পায়;
আমি গাব তোমার ঐ যীশু নাম
আমার দেহে যাবৎ জীবন রয়।

১ দিয়ে দেখা দুঃখের দুর্দিনে,
তুমি করলে উদ্ধার এ অধীনে আপন গুণে,
তুলে বসালে এই কাঙ্গালে, তোমার চরণে,
(আমি) ভুলিব না এই করুণা কভু ভুলিব কেমনে হায়।

২ এই ভিক্ষা আজ মাগে দীন-হীন,
তোমার ঐ পাদপদ্মে চিত্ত যেন, নিত্য থাকে লীন,
করি আকিঞ্চন ওহে ত্রাণধন মনে নিশিদিন,
আমার ফুরাইয়া যাক সকল আশা,
যেন এ আনন্দ না ফুরায়।`},{id:33,title:"সকল ধন্যবাদ মহিমা গৌরব তোমার",transliteration:"Sokol Dhonyobad Mohima Gourob Tomar",category:"প্রশংসা ও ধন্যবাদ",composer:"জয়নাথ অধিকারী (১৯৫৯)",lyrics:`সকল ধন্যবাদ মহিমা গৌরব তোমার,
জয় হোক জয় হোক যীশু, জয় হোক তোমার।
প্রশংসা পরাক্রম প্রতাপ তোমার,
জয় হোক জয় হোক যীশু, জয় হোক তোমার।

১ জঘন্য পাপী আমি অতি দুরাচার,
প্রেমে তরাইলে মোরে প্রেম অবতার,
প্রেমের অবতার তুমি দয়ার অবতার। জয় হোক ...

২ রোগ হতে আরোগ্য করলে মহিমা তোমার,
সম্পদে বিপদে সহায় হয়েছ আমার,
দয়ার উপর দয়া কত পেয়েছি তোমার। জয় হোক ...

৩ পথে ঘাটে মাঠে বান্ধব হয়েছ আমার,
দেখেছি দেখেছি তোমার প্রেম ব্যবহার,
অনুগ্রহ করিয়াছ কত শত বার। জয় হোক ...

৪ যুগে যুগে জয়গান আর স্তুতি তোমার,
জীবন্ত বাক্য আর শক্তি তোমার।
শক্তিহীনে দাও হে প্রভু, শক্তি তোমার,
দুর্বলেরে ধরে রাখ, বিনতি আমার।`},{id:34,title:"ধন্য পরম আরাধ্য যীশু",transliteration:"Dhonyo Porom Aradhyo Jishu",category:"প্রশংসা ও ধন্যবাদ",composer:"প্রিয়নাথ বৈরাগী",lyrics:`ধন্য পরম আরাধ্য যীশু, সত্য সনাতন,
ঈশ্বর-নন্দন পতিত-পাবন।

১ সৃষ্টির পূর্বে ছিলে অনাদিকালে,
বাক্য ব্রহ্মরূপে পিতার কোলে,
তুমি স্বয়ং ঈশ্বর নিত্য পরাৎপর,
তুমি নিখিল এই ব্রহ্মাণ্ডের সৃজন কারণ।

২ পতিত মানবে করিতে উদ্ধার,
মানবরূপে হলে ভবে অবতার,
প্রভু তোমার কৃপায়, যত পাপী মুক্তি পায়,
করলে পাপীর পাপের তরে প্রায়শ্চিত্ত সাধন।

৩ দীনহীনের দুঃখ সয়েছ প্রাণে,
দরিদ্র হয়ে তুমি ছিলে ভুবনে,
দুঃখী কাঙাল যত, প্রভু তোমার আশ্রিত,
যত দীনাত্মা জনে পায় তোমার চরণ।

৪ পাপীর পাপের দণ্ড নিয়েছ শিরে,
দিয়েছ নিজ প্রাণ ক্রুশোপরে
নিলাম শরণ তোমার, ওহে যীশু প্রাণেশ্বর,
তুমি সত্য, সুপথ, তুমি অনন্ত জীবন।`},{id:35,title:"প্রভুর ধন্যবাদ, ধন্যবাদ, ধন্যবাদ",transliteration:"Prabhur Dhonyobad, Dhonyobad, Dhonyobad",category:"প্রশংসা ও ধন্যবাদ",composer:"দেবীপ্রসাদ রায়চৌধুরী (১৯৬৪)",lyrics:`প্রভুর ধন্যবাদ, ধন্যবাদ, ধন্যবাদ,
প্রভুর ধন্যবাদ, ধন্যবাদ, কর আমার প্রাণ।

১ ভুলিয়া যেও না তাঁর উপকার,
কর তাঁর নামের জয়-জয়কার,
প্রভু ঈশ্বর স্বয়ং তোমার পরিত্রাণ,
আনন্দে কর তাঁর বন্দনা গান।

অন্তরা: ক্ষমা করেন তিনি তোমার সকল পাপ,
সুস্থ করেন তোমার সব রোগ ও তাপ।

২ কূপ হতে মুক্ত করেন তব প্রাণ,
করুণার মুকুট করেন তোমায় দান,
তুমি যে ধূলি তা রাখেন স্মরণ,
প্রভু মোদের কৃপাবান, অতি মহান।`},{id:36,title:"ধন্যবাদ ধন্যবাদ পেয়েছি কত আশীর্বাদ",transliteration:"Dhonyobad Dhonyobad Peyechhi Koto Ashirbad",category:"প্রশংসা ও ধন্যবাদ",composer:"কল্যাণ ব্যানার্জী (১৯৭৯)",lyrics:`ধন্যবাদ ধন্যবাদ পেয়েছি কত আশীর্বাদ,
সুখে-দুঃখে সহায় হয়েছ তুমি।

১ ধন্য তুমি ধন্য তোমার প্রেম,
ধন্য তোমার ক্রুশের মরণ,
ধন্য তোমার ক্ষমার বাণী,
ভরেছ মোদের হৃদয়খানি।

অন্তরা: আমরা অতি ক্ষুদ্র মানব,
তোমায় কভু করি না স্মরণ,
জীবন পথে চলতে শেখাও,
শেখাও তোমার ধরিতে চরণ।

২ ধন্য তোমার স্বর্গারোহণ,
ধন্য তোমার পুনরাগমন,
নিয়ে চল মোদের তোমার সাথে,
সেই অসীম সুখ, স্বৰ্গধামে!`},{id:37,title:"অপার মহিমা তব, নাহিক হে তুলনা",transliteration:"Opar Mohima Tobo, Nahiko He Tulona",category:"প্রশংসা ও ধন্যবাদ",composer:"তিনকড়ি চট্টোপাধ্যায়",lyrics:`(সুর: এমন সুহৃদ ভ্রাতায়)
অপার মহিমা তব, নাহিক হে তুলনা,
অতুল তোমার প্রেম কে করে হে বর্ণনা।

১ তুমি নিজ পুত্র দিলে, তারিতে পাতকী দলে,
দিয়েছ সকলই প্রভু করিয়া তো করুণা।

২ শোক-দুঃখে অভিভূত, ছিলাম যখন পিতঃ
তোমারই প্রেম বাহুতে করেছ হে সান্ত্বনা।

৩ তোমার শ্রীমুখ জ্যোতি, দেখিয়াছি দিবারাতি,
রখিয়াছ নাথ তুমি, হতে বিপদ যন্ত্রণা।

৪ যাগ-যজ্ঞে নহ প্রীত, তব যজ্ঞ চূর্ণ-চিত্ত,
লহ আজি তাহা পিতঃ পূর্ণ কর কামনা।`},{id:38,title:"এমন সুহৃদ ভ্রাতায় কদাচ না ভুলিব",transliteration:"Emon Suhrid Bhratay Kodacho Na Bhulibo",category:"প্রশংসা ও ধন্যবাদ",composer:"লক্ষ্মীনারায়ণ দাস",lyrics:`এমন সুহৃদ ভ্রাতায় কদাচ না ভুলিব,
বিপদে, সম্পদে প্রভুর সঙ্গ নাহি ছাড়িব।

১ যিনি মম ত্রাণ লাগি, দুরূহ যাতনা-ভাগী,
রোগ-শোক-তাপে আমি, তাঁর সেবা করিব।

২ যে জন আমার তরে, প্রাণ দিলেন ক্রুশোপরে,
আমি সে জীবনেশ্বরে, অপ্রেমে কী ত্যজিব।

৩ ক্রুশ লয়ে স্কন্ধোপরে, মুক্ত কণ্ঠে উচ্চৈঃস্বরে,
প্রেমানন্দে প্রেমময়ের, প্রেমগুণ গাহিব।`},{id:39,title:"তুমি আমার বন্ধু যীশু, তুমি মম সাথী",transliteration:"Tumi Amar Bondhu Jishu, Tumi Momo Sathi",category:"প্রশংসা ও ধন্যবাদ",composer:"মানিক নাথ (১৯০৫)",lyrics:`তুমি আমার বন্ধু যীশু, তুমি মম সাথী,
অন্ধকারে তুমি যে মোর, পথ দেখানো বাতি।
তুমি মম সাথী।

তুমি আমার পালক প্রভু, ভুলে আমায় যাও না কভু,
চোখে চোখে রাখ মোরে, তুমি দিবস রাতি।
অন্তরা
তুমি সাথে আছো প্রভু, করি না আর ভয়,
আসুক যত কঠিন বাধা, হবে আমার জয়।

ওগো পাপীর পরিত্রাতা, তুমি আমার মুক্তিদাতা,
তোমায় পেয়ে দুঃখের মাঝে, আনন্দে তাই মাতি।`},{id:40,title:"যীশু তোমা ছাড়ি আমি কোথা' যাব?",transliteration:"Jishu Toma Chari Ami Kotha Jabo?",category:"প্রশংসা ও ধন্যবাদ",composer:"প্রেমচাঁদ নাথ",lyrics:`(যীশু) তোমা ছাড়ি আমি কোথা' যাব?
(হেন) গুণ-নিধি, আর কোথা' পাব?

১ বন্ধু তোমা' সম, প্রাণ প্রিয়তম,
খুঁজি দেশে দেশে, কারেও নাহি পাব।

২ নিজ প্রাণ দিয়াছ, প্রাণে বাঁচায়েছ,
ক্রুশ-মৃত্যুগুণে, স্বর্গধামে যাব।

৩ তব রক্ত-স্রোতঃ বহে অবিরত,
তাহে পাপ-প্রাণ, আমি ধুয়ে ল'ব।

৪ পরিত্রাণ পেয়েছি, প্রাণে বাঁচিয়াছি,
আমি যুগে যুগে, তব গুণ গাব।

৫ যাব ঘরে ঘরে, ফিরি দ্বারে দ্বারে,
মধুমাখা নাম, সকলে বিলাব।`},{id:41,title:"ধন্য তোমার প্রেম, প্রভু ধন্য তোমার প্রেম",transliteration:"Dhonyo Tomar Prem, Prabhur Dhonyo Tomar Prem",category:"প্রশংসা ও ধন্যবাদ",composer:"সুনীল দত্ত",lyrics:`ধন্য তোমার প্রেম, প্রভু ধন্য তোমার প্রেম (২)
সবার মহা পাপের তরে, প্রাণ সঁপিলে ক্রুশের পরে,
ধন্য তোমার প্রেম।

১ তোমার রক্তে পাতকী জন,
লভে চির-নবীন জীবন,
ধন্য তোমার প্রেম।

২ (মোরা) মলিন ছিলাম ধৌত হলাম,
তোমার রক্তে জীবন পেলাম।
ধন্য তোমার প্রেম।

৩ (তুমি) ভক্ত-জনের আনন্দ-ধন,
দুঃখী-জনের চির আপন,
ধন্য তোমার প্রেম।

৪ (তুমি) সবহারাদের পূর্ণ ক'রে,
বেঁধেছ যে প্রেমের ডোরে,
ধন্য তোমার প্রেম।`},{id:42,title:"জীবনের গতি",transliteration:"Jiboner Goti",category:"প্রশংসা ও ধন্যবাদ",composer:"লাসার সেন (১৯৭৭)",lyrics:`জীবনের গতি,
জীবনের গতি ফিরায়েছ যীশু (২)
জানি না কোথায় যেতাম,
দিনগুলি মোর বৃথাই যেত, প্রভু কী তোমায় পেতাম।

১ দেখিলে আমার জীবনের দশা,
কতই ঘৃণা নাহি যে আশা,
করিলে উপায় বাঁচিবার লাগি,
আমি যে জীবন পেলাম।

২ সহিলে কত কি আমার লাগিয়া,
আমার পাপেরই কারণ,
সহিলে বেদনা মৃত্যু যাতনা,
আমি যে সুস্থ হলাম।

৩ কাঁটার মুকুট পরিলে শিরেতে,
আঘাত পাইলে কুক্ষিদেশেতে,
হইলে কুরূপ দিলে নিজরূপ,
আমি সেই স্বরূপ পেলাম।

৪ মুক্ত করিলে সব পাপ হতে,
রহিল না কোন দাগ,
হইলে আমার পিতা প্রভু তুমি,
লও আজিকে প্রণাম।`},{id:43,title:"আঁধারে ঘেরা, দুঃখেতে ভরা",transliteration:"Andhare Ghera, Dukhete Bhora",category:"প্রশংসা ও ধন্যবাদ",composer:"দেবীপ্রসাদ রায়চৌধুরী",lyrics:`আঁধারে ঘেরা, দুঃখেতে ভরা, জীবন ছিল মোর,
এমন জীবনে, যীশুর আগমনে, (রাত্রি হল ভোর।- ২) (পুনরায়)

অন্ধ ছিলাম, দেখিতে পেলাম, সুন্দর প্রভু মোর (২)
তোমার দয়ায় চিনেছি তোমায় - (২), মুছে দিলে আঁখি লোর। রাত্রি হল ভোর।

সকাল-সন্ধ্যা, দিবাতে বা রাতে, বলিতাম ঐ পথে,
‘অন্ধ আমি, দয়া কর স্বামী, (ভিক্ষা দাও গো হাতে। - ২)

দুঃখের রাতি ঘুচালে তুমি, কেটে গেল সব ঘোর,(২)
তোমার আলোকে নূতন পুলকে, যাত্রা শুরু মোর । রাত্রি হল ভোর।`},{id:44,title:"প্রিয় যীশু আমার, আমি যে তোমার",transliteration:"Priyo Jishu Amar, Ami Je Tomar",category:"প্রশংসা ও ধন্যবাদ",lyrics:`প্রিয় যীশু আমার, আমি যে তোমার,
পেয়েছি তোমার প্রেমে জীবন,
তাই করি গুণগান।
করি আজ তোমার ধন্যবাদ,
পেয়েছি তোমার আশীর্বাদ,
ভুলে যাব না তোমায়।
তোমার সেই মধুর বচন দিয়ে,
এনে দাও শান্তি হৃদয়ে,
করি পিপাসা তৃপ্তি।`},{id:45,title:"আকাশে চন্দ্র তারা",transliteration:"Akashe Chondro Tara",category:"প্রশংসা ও ধন্যবাদ",composer:"সুনীল দত্ত",lyrics:`আকাশে চন্দ্র তারা, বনগিরি নদীধারা,
তোমার মহিমা গায় প্রভু, তোমার মহিমা গায়।

১ তুমি যে বিশ্বজুড়ে, রয়েছ সবার সুরে,
নিখিল মানব সবে তোমার শরণ চায়।

অন্তরা
 তুমি অনন্ত তবু তুমি ধরা দাও,
প্রেমের আসনে চরণ ফেলিয়া যাও।

২ তোমার করুণা লভি, পেয়েছি মোরা যে সবই,
অলোখ হতে গো তুমি, জীবন ভরো সুধায়।`},{id:46,title:"তুমি সূর্যকে দিলে রৌদ্র",transliteration:"Tumi Surjoke Dile Roudro",category:"প্রশংসা ও ধন্যবাদ",lyrics:`তুমি সূর্যকে দিলে রৌদ্র, নদীকে দিলে জল—
আকাশকে দিলে নীল, তরুকে দিলে ফল।
হে প্রভু করুণাময়, তুমি আমারই সম্বল।

১ বাতাসকে দিলে গতি, সপ্তকে দিলে জ্যোতি,
শ্যামলিমা পেল তরুণ বনাঞ্চল।

অন্তরা
 আগুনে তোমার প্রভা ছড়ানো দিকে দিকে,
যেমন খুশি সাজিয়ে দিলে তুমি এই পৃথিবীকে।

২ আকাশকে দিলে ছায়া, মন্ত্রকে দিলে মায়া,
সৌরভ পেল নবীন ফুলের দল।`},{id:47,title:"আমি সর্ব্বসময়ে সদাপ্রভুর ধন্যবাদ করিব",transliteration:"Ami Sorbosomoye Sodaprobhur Dhonyobad Koribo",category:"প্রশংসা ও ধন্যবাদ",composer:"গীতসংহিতা ৩৪:১-৪",lyrics:`আমি সর্ব্বসময়ে সদাপ্রভুর ধন্যবাদ করিব,
তাঁহার প্রশংসা নিরন্তর আমার মুখে থাকিবে।

আমার প্রাণ সদাপ্রভুরই শ্লাঘা করিবে,
তাহা শুনিয়া নম্রগণ আনন্দিত হইবে।
আমার সহিত সদাপ্রভুর মহিমা কীর্তন কর,
আইস, আমরা একসঙ্গে তাঁহার নামের প্রতিষ্ঠা করি।

আমি সদাপ্রভুর অন্বেষণ করিলাম,
তিনি আমাকে উত্তর দিলেন,
আমার সকল আশঙ্কা হইতে উদ্ধার করিলেন।`},{id:48,title:"সমস্ত পৃথিবী! সদাপ্রভুর উদ্দেশ্যে জয়ধ্বনি কর",transliteration:"Somosto Prithibi! Sodaprobhur Uddeshe Joydhoni Kor",category:"প্রশংসা ও ধন্যবাদ",composer:"গীতসংহিতা ১০০",lyrics:`সমস্ত পৃথিবী! সদাপ্রভুর উদ্দেশ্যে জয়ধ্বনি কর।

সানন্দে সদাপ্রভুর সেবা কর,
আনন্দগান সহ, তাঁহার সম্মুখে আইস।
তোমরা জানিও সদাপ্রভুই ঈশ্বর,
তিনি আমাদিগকে নির্মাণ করিয়াছেন, আমরা তাঁহারই।
আমরা তাঁহার প্রজা ও তাঁহার চরাণীর মেষ।

তোমরা স্তব সহকারে তাঁহার দ্বারে প্রবেশ কর,
প্রশংসা সহকারে তাঁহার প্রাঙ্গণে প্রবেশ কর,
তাঁহার স্তব কর, তাঁহার নামের ধন্যবাদ কর।

কেননা সদাপ্রভু মঙ্গলময়, তাঁহার দয়া অনন্তকাল স্থায়ী।
তাঁহার বিশ্বস্ততা পুরুষে পুরুষে স্থায়ী।`},{id:49,title:"অন্ধ ছিলেম তোমার আলো দেখতে আমায় দিলে",transliteration:"Ondho Chilem Tomar Alo Dekhte Amay Dile",category:"প্রশংসা ও ধন্যবাদ",composer:"মানিক নাথ",lyrics:`অন্ধ ছিলেম তোমার আলো দেখতে আমায় দিলে,
এত দয়া হে কৃপাময়, কোথাও নাহি মিলে।

১ তমশাময় ব্যথার রাতে, পরশ করি আপন হাতে,
আলোকেতে তুমি আমার আঁখি ভরে ছিলে।

অন্তরা
তোমার উপর সদাই যারা রাখে তাদের আশা।
তারা জানি পায় যে দয়াল তব ভালোবাসা।

২ আঁধারেতে যখন একা, চেয়েছিনু তোমার দেখা,
কাছে এসে প্রভু তখন দুঃখ তুলে নিলে`},{id:50,title:"তাঁহার ক্ষত সকল দ্বারা আমার আরোগ্য হয়",transliteration:"Tahar Khoto Sokol Dwara Amar Arogyo Hoy",category:"প্রশংসা ও ধন্যবাদ",lyrics:`তাঁহার ক্ষত সকল দ্বারা আমার আরোগ্য হয়।

১ তিনি আমায় ভালোবাসেন, ভালোবেসে জীবন দিলেন,
তাঁহারই রক্তে শুচি হলাম,
তাঁহারই করুণায় জীবন পেলাম।

২ যখন আমি পাপী ছিলাম, পাপের আঁধারে বন্দী ছিলাম,
তখনও তিনি আমার তরে প্রাণ দিলেন ক্রুশপ'রে।`},{id:51,title:"খ্রীষ্ট যীশু তোমার প্রেম আমি বর্ণনা করতে পারি না",transliteration:"Khristo Jishu Tomar Prem Ami Bornona Korte Pari Na",category:"প্রশংসা ও ধন্যবাদ",lyrics:`খ্রীষ্ট যীশু তোমার প্রেম আমি বর্ণনা করতে পারি না।
তুমি মহান, কত মহান, তুমি সর্ব্বশক্তিমান।

১ আকাশমণ্ডল তোমার সকল গৌরব বর্ণনা করে,
পাহাড় পর্বত সাগর তোমার ক্রিয়া প্রকাশ করে।

২ বনের পাখিরা ভোরে, তোমার মহিমা প্রশংসা করে,
দিবস দিবসের কাছে তোমার কথা বলে।

৩ হে সর্ব্বশক্তিমান প্রভু, তুমি আমাদের বিশ্বপিতা।
তোমার ধন্যবাদ করি, তুমি অন্ত ও আদি।`},{id:52,title:"গানের তরী বেয়ে প্রভু, এলেম তোমার কাছে",transliteration:"Ganer Tori Beye Prabhu, Elem Tomar Kache",category:"প্রশংসা ও ধন্যবাদ",composer:"মানিক নাথ",lyrics:`গানের তরী বেয়ে প্রভু, এলেম তোমার কাছে।
সুরে সুরে শোনাতে চাই যে কথা মোর আছে।

১ কণ্ঠ ভরে এনেছি গান, তাইতো প্রভু তুমি মহান,
পরাণ মম আকুল হয়ে এই করুণা যাচে।

অন্তরা
গীতালি মোর ধন্য হবে, পরশ তব পেয়ে,
বিনতি তাই জানাই আমি তোমা পানে চেয়ে।

২ পূর্ণ করে দেবে আশা, তাইতো প্রভু হেথায় আসা,
তোমার দয়া পাব বলে পুলকে মন নাচে।`},{id:53,title:"বড় প্রেমানন্দ মনে হে, বড় প্রেমানন্দ মনে",transliteration:"Boro Premanondo Mone He",category:"প্রশংসা ও ধন্যবাদ",composer:"প্রিয়নাথ বৈরাগী",lyrics:`বড় প্রেমানন্দ মনে হে, বড় প্রেমানন্দ মনে।
প্রেমানন্দ মনে এখন ধন্যবাদ জানাই চরণে।

১ তুমি করেছ দয়া রেখেছ আশ্রয় দিয়া,
দিতেছ চরণ ছায়া কি রাতে কি দিনে।
আহার বস্ত্র যোগাইতেছ কাঙাল দীনহীনে (দয়াময়)
যত আত্ম বন্ধু স্নেহ দয়া, সে সকল তোমার বিধানে।

২ রোগে করেছ তত্ত্ব, যোগাইয়া ঔষধ পথ্য,
স্বাস্থ্য সুখ তোমার দত্ত সার জেনেছি মনে।
কাঁদি যখন দুঃখে পড়ে ধারা বয় নয়নে, (দয়াময়)
এসে নিজ হাতে মুছাও চোখের জল, সান্ত্বনা দিয়া অজ্ঞানে।

৩ জগতের দুঃখ শোকে, আঁধার দেখি দুই চক্ষে,
দেখা দিয়া সম্মুখে, লও নিকটে টেনে।
একমুখে ঐ দয়ার কথা, বলিব কেমনে, (দয়াময়)
যদি থাকতো শত সহস্র মুখ, হার মানতাম দয়ার বর্ণনে।

৪ পাঠাইলেন আপন নন্দন, এই পাপীর মুক্তির কারণ,
তিনি প্রায়শ্চিত্ত সাধন করলেন জীবন দানে।
জীবন মূল্যে কিনিয়াছ আমার এই জীবনে, (দয়াময়)
মনে আশা আছে অবশেষে স্থান পাব অভয় চরণে।

৫ কাঙালের এই আকিঞ্চন, যতদিন রয় এ জীবন,
তোমার নাম গুণসংকীর্তন করব নিশি দিনে।
দেশ বিদেশে সুখে দুঃখে আর জীবনে মরণে, (দয়াময়)
আমি গাব তোমার ধন্যবাদ গান,
দিন কেটে যাক গানে গানে।`},{id:54,title:"চেয়েছি যা পেয়েছি সব",transliteration:"Cheyechi Ja Peyechi Sob",category:"প্রশংসা ও ধন্যবাদ",composer:"প্রিয়নাথ বৈরাগী",lyrics:`চেয়েছি যা পেয়েছি সব, কিছুই বাকি নাই আর এখন,
    তোমার মহা দয়ার দানে, ভরিয়া দিয়াছ ভুবন।
    ১ খুলিয়া দিয়াছ তোমার, সোনার পুরীর ভান্ডারের দ্বার,
    পূর্ণ করিয়াছ আমার, ছিল যা অভাব অনাটন।
    ২ পেয়ে তোমার করুণার দান, উথলিয়া উঠিছে প্রাণ
    জাগিতেছে আনন্দ গান, আলোড়িত করিয়া মন।
    ৩ প্রাণের বোঝা গেছে নেমে, ভাবনা ভয় গেছে থেমে,
    আকুল হৃদয় তোমার প্রেমে, তোমার দানে ধন্য জীবন।
    ৪ জাগিছে প্রত্যাশা মনে, যতদিন থাকি ভুবনে,
    পাবো তোমার ঐ চরণে, যখন আমার যা প্রয়োজন।
    ৫ ধন্য ধন্য ধন্য পিতা, ধন্য ধন্য জগত্রাতা,
    ধন্য ধন্য পুন্য আত্মা, ধন্য হে সত্য সনাতন।`},{id:55,title:"তুমি সেই উজ্জ্বল লতা",transliteration:"Tumi Sei Ujjal Lota",category:"প্রশংসা ও ধন্যবাদ",composer:"সুনীল দত্ত (১৯৭০)",lyrics:`তুমি সেই উজ্জ্বল লতা, আমরা তোমার শাখা,
    তুমি সেই ভোরের আকাশ, আমরা আলোর পাখা।
    
    ১ তুমি সেই সন্ধ্যা রাতি তারার আলোয় সাজো,
    তুমি সেই শাশ্বত সুর, কালের বীণায় বাজো।
    তোমার ভালোবাসার সুরভিত সবার চিত্ত মাখা।
        
    অন্তরা
  তুমি সেই জীবন খেয়া মরণ সাগর মাঝে,
শঙ্কাহরণ তোমার বাণী শান্তি সম রাজে।

২ প্রার্থনা যে ফুল হয়ে যায়, তোমার চরণ তলে,
দুঃখ সুরভিত হয়ে ধূপের মত জ্বলে।
তোমার ক্ষমার শুভ্র তিলক মোদের ভালে আঁকা।`},{id:56,title:"মনের আনন্দে আজ ডাকি তোমারে",transliteration:"Moner Anonde Aj Daki Tomare",category:"প্রশংসা ও ধন্যবাদ",composer:"প্রিয়নাথ বৈরাগী",lyrics:`মনের আনন্দে আজ ডাকি তোমারে,
ওহে যীশু দয়াময়, যারা তোমার দয়া পায়,
তারা ধন্য হয় এই সংসারে।

১ আমার নয়নের জল, তুমি কখন এসে মুছে দিলে,
আমি জানিনা দয়াল।
এখন যে দিকেতে চাই, সুখের কুল কিনারা নাই,
সংসার ভরা সুখের জোয়ারে।

২ আমার জীর্ণ তরী, মাঝে কখন এসে দাঁড়ালে হে
তুমি ভবের কাণ্ডারী।
এখন নাই আর কোন ভয়, ঐ যে সামনে দেখা যায়,
তোমার সোনার পুরী অদূরে।

৩ শুনি চারিদিকে, তোমার মধুর নামের মঙ্গল ধ্বনি,
কেবল থেকে থেকে।
আমি ভরিয়া পরান, গাব যীশু নামে গান,
বড় আশা আছে অন্তরে।

৪ করি এই প্রার্থনা, তুমি থেকো সদা হৃদয় মাঝে,
দয়াল দূরে যেও না।
আমার নাই সাধন ভজন, দিও নিজ গুণে চরণ,
চরণ ছাড়া করো না মোরে।

৫ আছে মনে এই সাধ, তোমায় রাখব সদা চোখে চোখে,
দয়াল কর আশীর্বাদ।
আমার এই পোড়া নয়ন, যেন থাকে সর্বক্ষণ,
তোমার ঐ চরণতলে পড়ে।`},{id:57,title:"আমি গাইব তোমার গান প্রভু",transliteration:"Ami Gaibo Tomar Gan Prabhu",category:"প্রশংসা ও ধন্যবাদ",composer:"ডেভিড রায়",lyrics:`আমি গাইব তোমার গান প্রভু,
গাইব তোমার গান, যেন গাইতে পারি গান।
দাও গো শক্তি, দাও হে প্রভু, দাও হে তোমার জ্ঞান।

১ কত সাধে প্রভু গড়িয়েছ তুমি, তোমার করুণায়—
দিয়েছি কত দুঃখ তোমায়, করেছি অপমান,
তাইতো প্রভু প্রেম দিয়ে তুমি ধৌত কর এ প্রাণ।

২ কত রূপে তুমি সাজিয়েছ প্রভু, তোমার করুণায়—
তোমার বাক্য করব প্রচার, করব তোমার নাম,
আকাশে বাতাসে ছড়িয়ে দেব, তোমার প্রেমের গান।`},{id:58,title:"তোমার দানে হয়েছি আমি যে ধন্য",transliteration:"Tomar Dane Hoyechi Ami Je Dhonyo",category:"প্রশংসা ও ধন্যবাদ",composer:"দিলীপ মজুমদার",lyrics:`তোমার দানে হয়েছি আমি যে ধন্য,
আমার এ জীবন, শুধুই তোমারই জন্য।

১ ভালোবাসা তুমি ভরে দাও, তোমার কাছেতে টেনে নাও,
তোমাতে আমি থাকব বিভোর, আর কিছু চাই না গো অন্য।

অন্তরা
উজাড় করে তুমি দিয়েছ জীবন,
পৃথিবীর দুঃখকে ঘোচাতে।
এমন প্রেম যে তুমি দিলে গো আমায়,
তার কাছে আমি যে নগণ্য।

২ প্রাণে প্রাণে দুটি কথা কও, অভয় বাণীটি দিয়ে যাও,
জীবন শেষে, তোমারই পাশে হই যেন আমি প্রভু গণ্য।`},{id:59,title:"তুমি ধন্য, তুমি ধন্য মানব পাপ-তাপহারী",transliteration:"Tumi Dhonyo, Tumi Dhonyo Manob Pap-Tapohari",category:"প্রশংসা ও ধন্যবাদ",composer:"চন্দ্রকুমার সরকার (১৮৯৬)",lyrics:`তুমি ধন্য, তুমি ধন্য মানব পাপ-তাপহারী
মানব তারণ, করিলে সাধন, বহু দুঃখ ধরি,
তোমায় প্রণিপাত করি।

১ সংসার সম্পদ জল, বিদ্যা বুদ্ধি আদি ধন,
বিফল সকল, মানব সন্তাপ, করিতে হরণ,
বিনা তব শান্তি ধন।

২ (তব) অপার প্রেম সলিলে, ভকতি ভরে ডুবিলে,
দুঃখ যায়, সুখ উপচয়, নিবায় পাপ-অনলে,
তৃপ্ত মন শান্তি জলে।

৩ তুমি পরম সুন্দর, তোমার মহিমা সুন্দর,
প্রেম সুন্দর, করুণা সুন্দর, সুন্দর সকলি তোমার,
তোমায় হেরি বারে বার।`},{id:60,title:"গানের তরী পূর্ণ করে আকাশে আজ দাও ভাসায়ে",transliteration:"Ganer Tori Purno Kore Akashe Aj Dao Bhashaye",category:"প্রশংসা ও ধন্যবাদ",composer:"প্রিয়নাথ বৈরাগী",lyrics:`গানের তরী পূর্ণ করে আকাশে আজ দাও ভাসায়ে,
পিতার ধন্যবাদ আর গুণসংকীর্তন, নয়নের জলে মিশায়ে।

১ কত দয়া কত আশীর্বাদ,
ক'রে তিনি পূর্ণ করলেন মনের কত সাধ,
একবার আনন্দে কর ধন্যবাদ উঠুক সঙ্গীত আকাশ ছেয়ে।

২ গানের তরী ভাসুক পবনে,
ভেসে যাক সেই অমরপুরে পিতার ভবনে,
যথায় দয়াল যীশু পাপীর জন্য নিবেদন করেন বসিয়ে।

৩ অমরপুরে কত সাধুজন,
আনন্দে প্রদক্ষিণ করে পিতার সিংহাসন,
পিতার নাম সংকীর্তন করে দূতগণ, বীণার সুরে সুর মিশায়ে।

৪ সেই সুরে আজ কর গান তাঁর নাম,
দেহ মন লুটায়ে তাঁর পায় কররে প্রণাম,
আসুক স্বর্গের সুখ আনন্দ বিশ্রাম, তোমার এই আঁধার-হৃদয়ে।`},{id:61,title:"আকাশ তোমায় প্রণাম করে, (তুমি) সুন্দর হে সুন্দর",transliteration:"Akash Tomay Pronam Kore, (Tumi) Sundor He Sundor",category:"প্রশংসা ও ধন্যবাদ",composer:"সুনীল দত্ত",lyrics:`আকাশ তোমায় প্রণাম করে, (তুমি) সুন্দর হে সুন্দর।
বাতাস তোমার বন্দনা গায়, (তুমি) সুন্দর হে সুন্দর।

১ ভোরের আলোয় তোমার প্রকাশ,
ফুলে ফুলে তোমার বিকাশ,
মধুর রূপে আছ তুমি, সুন্দর হে সুন্দর।

অন্তরা
তুমি চির আনন্দময়,
তোমার কাছে সকল ব্যথার অবসান হয়।

২ তোমার স্পর্শে পাতকীজন,
লভে চির নবীন জীবন,
মহাপ্রেমিক সবার কাছে, সুন্দর হে সুন্দর।`},{id:62,title:"প্রেমানন্দে মাতি সবে করি সংকীর্তন",transliteration:"Premanonde Mati Sobe Kori Sankirtan",category:"প্রশংসা ও ধন্যবাদ",composer:"সলোমন শান্তিনাথ বিশ্বাস",lyrics:`প্রেমানন্দে মাতি সবে করি সংকীর্তন, (যীশু গুণ-সংকীর্তন)
(তবে) উথলিছে প্রেমসিন্ধু, হৃষ্ট আছে মন।

১ ধন্য, ধন্য, ধন্য তাঁর, পিতা, পুত্র, সদাত্মায়,
ধন্য পিতা, ধন্য পুত্র, ধন্য সদাত্মন। (বলি)

২ বিশ্বাসে লই মুক্তি ধনে, শান্তি আছে হৃদয় মনে,
পুজি যীশু কায় ও মনে, করি সংকীর্তন। (সদা)

৩ যীশু নামে মেরে ডঙ্কা, দূরে গেছে সব আশঙ্কা,
স্বর্গের যেতে নাহি শঙ্কা, পুলকিত মন। (এখন)

৪ শান্তি যে পেয়েছি মনে, ধন্যবাদ দিই সরল মনে,
ধন্য যীশু, ধন্য যীশু, বলি সর্ব্বক্ষণ। (সবে)

৫ জয় জয় বলি হৃষ্ট মনে, শুনাই জগদ্বাসী গণে,
গতি নাই আর যীশু বিনে, ধর সে চরণ। (তোমার)`},{id:63,title:"প্রভু তুমি ছিলে, প্রভু তুমি আছ",transliteration:"Prabhu Tumi Chile, Prabhu Tumi Acho",category:"প্রশংসা ও ধন্যবাদ",composer:"মানিক নাথ",lyrics:`প্রভু তুমি ছিলে, প্রভু তুমি আছ, যুগে যুগে তুমি থাকবে।
বিশ্বাসী যারা চিরদিন তারা, সযতনে মনে রাখবে।

১ অতীতের কথা ভোলে না তো তারা কভু,
মহিমা তোমার স্মরণ করে গো প্রভু।
ওরা জানে, তুমি মহা-গৌরবে, সবারে আবার ডাকবে।

অন্তরা: তোমার গরিমা ক্ষমা আর প্রেমে, দিয়েছ ভুবন ভরিয়ে,
আগামী দিনেও, আগের মতই, দিবে তুমি আরো ছড়িয়ে।

২ পৃথিবীর ব্যথা নিয়েছিলে বুকে তুলে,
এখনো তারা তো যায় নি তাঁহারে ভুলে,
তব অনুগামী আশা নিয়ে তাই, পলে পলে প্রভু জাগবে।`},{id:64,title:"আজ পর্যন্ত তিনি চালালেন",transliteration:"Aj Porjonto Tini Chalalen",category:"প্রশংসা ও ধন্যবাদ",lyrics:`আজ পর্যন্ত তিনি চললেন
এই পর্যন্ত তিনি বদলালেন
আমার যীশু কত ভালো
আমার জন্য তিনি যথেষ্ট।

১ আমার পাপের ভার সকল
নিজ কাঁধে তুলে নিলেন
আমার জন্য ক্রুশে মরিলেন
আমার যীশু কত ভালো।

২ আমার দরকার সব জেনে
স্বর্গের দ্বার আমার জন্য খুলে
বর্ষণ আশীর্বাদের উপর আশীর্বাদ
আমার যীশু আমার পালক।

৩ মন যখন ব্যাকুল হয়
মনে বেদনায় ভরে যায়
মন ভেঙে যখন কাঁদি
আমার যীশু কত নিকট।

৪ রোগ হলে তিনি চিকিৎসক
শোক হলে সান্ত্বনা দায়ক
কট্টর রোদের ছায়া হয়ে
আমার যীশু কত উত্তম।

৫ কোনও দিন হাত ছাড়িবেন না
কোনও দিন ত্যাগ করিবেন না
কোনও দিন আমায় ভুলিবেন না
আমার যীশু কত বিশ্বস্ত।

৬ আমার যীশু যখন আসিবেন
আমায় আলিঙ্গনে ভরে নেবেন
কষ্ট, দুঃখ, রোগ মিটে যাবে
আমার যীশু কত ভালো।`},{id:65,title:"কোথা হে প্রভু দয়াল যীশু",transliteration:"Kotha He Prabhu Doyal Jishu",category:"প্রশংসা ও ধন্যবাদ",composer:"প্রশান্ত মান্না",lyrics:`কোথা হে প্রভু দয়াল যীশু প্রণমি তোমার পায়ে,
ও প্রভু হে, প্রণমি তব পায়ে।
তুমি এসেছিলে এই ধরাধামে পাপীর পরিত্রাণ দিতে,
ও প্রভু হে, প্রণমি তব পায়ে।

১ তুমি পথ, তুমি সত্য, তুমিই জীবন,
তুমি ছাড়া কেহ নাই আমার;
ও প্রভু হে, প্রণমি তব পায়ে।
অন্ধকে চোখ দিলে, খঞ্জকে চালালে, মৃতকেও জীবন দিলে,
ও প্রভু হে, প্রণমি তব পায়ে।`},{id:66,title:"রাজাদেরও রাজা তুমি",transliteration:"Rajadero Raja Tumi",category:"প্রশংসা ও ধন্যবাদ",lyrics:`রাজাদেরও রাজা তুমি, আর প্রভুদেরও প্রভু তুমি,
প্রভু যীশু খ্রীষ্ট, প্রভু যীশু খ্রীষ্ট।

১ শত্রুদের হারিয়ে দিয়ে, সংসারকে জিতে নিয়ে,
মৃত্যুকে পার করে, অনন্ত জীবন দিলে,
জীবনকে নতুন করে তুমি,
মনোনীত আমায় করলে।

২ তুমি সত্য জীবন, মুক্তি আছে তোমার নামে,
আলোর সন্ধান দিয়ে, করলে পাপের হরণ,
তুমি পরিত্রাতা প্রভু, একমাত্র স্বর্গের পথ।`},{id:67,title:"তোমার চরণে আমি এসেছি",transliteration:"Tomar Charane Ami Esechi",category:"প্রশংসা ও ধন্যবাদ",lyrics:`তোমার চরণে আমি এসেছি, ভগ্ন হৃদয় (আমি) এনেছি।
আর কিছু নাই আর কিছু নাই,
ভগ্ন হৃদয় শুধু দিলাম তোমায়।
তোমার চরণে আমি এসেছি, ভগ্ন হৃদয় (আমি) এনেছি।
হা—হাল্লেলুইয়া, হা—হাল্লেলুইয়া।

১ যেদিকে তাকাই তোমাকে পাই,
তোমাকে ছাড়া আমি কিছুই না চাই। আর কিছু...

২ ক্রুশের উপরে ঝরো ঝরো রক্ত তুমি বহালে,
পাপের ক্ষমা পাবো বলে, তুমি আপন করে নিলে। আর কিছু...`},{id:68,title:"যীশু তোমার প্রেমের কথা",transliteration:"Jishu Tomar Premer Kotha",category:"প্রশংসা ও ধন্যবাদ",lyrics:`যীশু তোমার প্রেমের কথা
কেমনে ভুলিব প্রভু আমি তোমায়,
আমি তোমায়, আমি তোমায়,
সয়েছ নীরবে তুমি ক্রুশের ব্যথা,
পাপের ক্ষমা তুমি দিলে গো আমায়,
দিলে গো আমায়, দিলে গো আমায়,
হা—হাল্লেলুইয়া, হা—হাল্লেলুইয়া।

১ বেতের আঘাত মারলো তোমায়, সুস্থ হলাম আমি,
দস্যু যারা ক্রুশে দিল, সেই হলাম আমি।
আ আ আ সেই হলাম আমি।

২ ক্রুশের উপর রক্ত দিয়ে,
ঘুচালে সকল আমার পাপ, আশীষ দানে ভরলে আমায়,
নিয়ে নিলে আমার অভিশাপ,
ও ও ও নিয়ে নিলে আমার অভিশাপ।`},{id:69,title:"স্বাগত! স্বাগত! স্বাগত জানাই",transliteration:"Swagato! Swagato! Swagato Janai",category:"বড়দিন",composer:"মানিক নাথ (১৯৬৩)",lyrics:`স্বাগত! স্বাগত! স্বাগত জানাই, তোমাকে খ্রীষ্ট,
আজি এ পুণ্য রাতে / প্রাতে,
নিখিল বিশ্ব মুখর হয়েছে, তোমারই বন্দনাতে।

১ উৎসবময়ী রজনী প্রহরে, আকাশ বাতাস পুলকে শিহরে,
নবজন্মের মহা আনন্দে, বসুন্ধরা যে মাতে।

অন্তরা
ধরণী মাঝারে বন্দী মানব, পাপে গড়া কারাগারে,
স্বর্গের পানে ত্রাতার লাগিয়া, চেয়েছিল বারে বারে।

২ অন্ধ ধরার কালিমা মুছালে, পাপীর মনের ভাবনা ঘুচালে,
গানের প্রণাম লহ গো বন্ধু, অভিনন্দন সাথে।`},{id:70,title:"এস ভক্তবৃন্দ, কর জয়ধ্বনি (O Come, All Ye Faithful)",transliteration:"Eso Bhaktobrindo, Koro Joydhoni",category:"বড়দিন",composer:"যাকোব কান্তি বিশ্বাস",lyrics:` ১ এস ভক্তবৃন্দ, কর জয়ধ্বনি
এস হে সবে যাই বেথলেহেমে,
এস, হেরি তাঁয়, জাত দূত-রাজায়!

ধুয়া
এস পুজি তাঁহারে, এস পুজি তাঁহারে,
এস পুজি তাঁহারে, খ্রীষ্টেরে!

২ ঈশ্বর হইতে ঈশ্বর, দীপ্তি হইতে দীপ্তি,
কুমারীর গর্ভ ঘৃণা করেন নাই,
যথার্থ ঈশ্বর, জাত, নহে সৃষ্ট।

৩ গাও হে, স্বর্গদূতগণ, মহানন্দে গাও হে!
গাও সবে, ঊর্ধ্বে— স্বর্গবাসিগণ,
ঈশ্বরের গৌরব, সর্বোপরি স্বর্গে।

৪ যীশু, প্রণাম তোমায়, হইলে ভবে জাত,
 যীশু, প্রণাম তোমায়, হইলে ভবে জাত,
যীশু চিরদিন তোমার গৌরব হোক,
পিতার যে বাক্য, মাংসে হন প্রত্যক্ষ।`},{id:71,title:"উড়াও বিজয় পতাকা",transliteration:"Urao Bijoy Pataka",category:"বড়দিন",composer:"অনুকুল চন্দ্র ঘোষ",lyrics:`উড়াও বিজয় পতাকা, জয় যীশু বলে,
(আজি) মহোল্লাসে, হেসে হেসে, সকলে মিলে।

১ বেথলেহেমের আকাশে, ধর্ম-সূর্য উঠেছে,
(তাঁর) জ্যোতির প্রভায় জাগ্রত হয়, জ্যোতিষী দলে।

২ পরম পিতা প্রেমময়, পাঠালেন প্রিয় তনয়,
(হবে) মহাশান্তি, প্রেম ও প্রীতি জগতীতলে।

৩ স্বর্গদূতে মিলে গায়, ধন্য ধন্য দয়াময়,
(এস) দূতের সাথে প্রেমে মেতে গাই সকলে।

৪ যীশু প্রেম অবতার যীশু প্রেমের পারাবার,
(এস) দলাদলি সকল ভুলি শ্রীযীশু বলে।

৫ ধন্য ঈশ-নন্দন, পাপ-তাপ হরণ,
(বল) ধন্য যীশু ধন্য যীশু, দুই বাহু তুলে।`},{id:72,title:"ওরে, আর ভয় নাই, ভয় নাই",transliteration:"Ore, Ar Bhoy Nai, Bhoy Nai",category:"বড়দিন",composer:"সুনীল কুমার দত্ত",lyrics:`ওরে, আর ভয় নাই, ভয় নাই
প্রভু এসেছেন, ধরণীতলে,
তাঁর কাছে চল সবে ছুটে যাই,
আনন্দ, আনন্দ, মহানন্দ ভাই।

১ দায়ূদ নগরে এক গোশালায়,
শিশু-যীশু শায়িত আছে হায়,
(চল) রাখালের সাথে তাঁর প্রণাম জানাই,
আনন্দ, আনন্দ, মহানন্দ ভাই।

অন্তরা
নূতন প্রভাত ঐ এল বুঝি,
শ্রান্ত মানবে পথ পেল খুঁজি।

২ তিনি যে সবার মুক্তিদাতা,
তিনি যে সবার পরিত্রাতা,
ওরে তাঁর মহাপ্রেম পেয়েছে সবাই,
আনন্দ, আনন্দ, মহানন্দ ভাই।`},{id:73,title:"নীরব রাত! পূণ্য রাত! (Silent Night)",transliteration:"Nirob Rat! Punya Rat!",category:"বড়দিন",composer:"যোসেফ মোহ্",lyrics:`Silent night! Holy night!
নীরব রাত! পুণ্য রাত! আঁধারে রশ্মিপাত!
করে দীপ এক শিশু সেথায়,
ঘুমান, মাতা চৌকি দেন তাঁয়,
ঘুমান কী শান্তিতে! স্বর্গেরই শান্তিতে!

২ নীরব রাত! পুণ্য রাত! আলোকময় সব হঠাৎ!
শুনে রাখাল, দূতেরা গায়,
'কর সবে বন্দনা তাঁয়,
যীশু খ্রীষ্ট জন্মিলেন, প্রাণেশ্বর জন্মিলেন।

৩ নীরব রাত! পুণ্য রাত এস যাই, দূতের সাথ!
সবে মিলে ঘোষি আজ তাঁয়,
প্রশংসি সেই শিশু রাজায়,
যীশু খ্রীষ্ট জন্মিলেন, প্রাণেশ্বর জন্মিলেন।`},{id:74,title:"বল জগতে আনন্দ সমাচার",transliteration:"Bolo Jagate Anondo Somachar",category:"বড়দিন",composer:"দেবেন্দ্রনাথ চট্টোপাধ্যায় (১৯১০)",lyrics:`বল জগতে আনন্দ সমাচার,
হবে, হবে রে, পাপীর উদ্ধার।

১ দেখ জ্ঞানের চক্ষেতে, বিধির বিধান মতে,
খ্রীষ্ট যীশু জন্মিলেন এই ধরাতে,
পাপী ত'রে যাবে কৃপায় তাঁর।

২ স্বর্গ দূতেরা সব গায়, অতি মধুর ভাষায়,
'শান্তি-প্রীতি মানবেতে, হউক এ ধরায়',
বাঁধ পরস্পরে প্রেমে তাঁর।

৩ মেরী জননীর কোলে, এক ক্ষুদ্র গোশালে,
যাবপাত্রে সেই শিশু আশ্রয় নিলে,
জগৎ ভেসে গেল কৃপায় তাঁর।

৪ পাপী কে কোথায় আছ, আজ ছুটিয়া এস,
হিংসা-দ্বেষ ভুলে গিয়ে তাঁর চরণে বস,
হোক প্রেমে, প্রেমে একাকার।`},{id:75,title:"সঙ্গীতে এক শুভ সংবাদ",transliteration:"Sangite Ek Shuvo Sangbad",category:"বড়দিন",composer:"মানিক নাথ",lyrics:`সঙ্গীতে এক শুভ সংবাদ, রাখি মোরা ঘরে ঘরে,
মুক্তিদাতা যে জন্ম নিয়েছে, বন্দী পাপীর তরে।

১ ঊর্ধ্ব আকাশে, নবতারা হাসে,
নিম্নে অবনী আলোকেতে ভাসে,
স্বর্গ-মর্ত্য স্তব করে তাঁর, প্রসন্ন অন্তরে।

অন্তরা: পুণ্য লগনে শুভ্র দূতেরা, আগমনী গীতি গায়,
ধন্য রাখাল শুনিয়া শ্রবণে ত্রাতারে পুজিতে যায়।

২ অর্ঘ্য আনিয়া পদতলে তাঁর, মুগ্ধ মনীষী দেয় উপহার,
দৃপ্ত কণ্ঠে সেই সমাচার, দেই মোরা চরাচরে।`},{id:76,title:"শুন স্বর্গদূতের রব নবজাত রাজার স্তব (Hark the herald angels)",transliteration:"Shuno Swargoduter Rob Nobojat Rajar Stob",category:"বড়দিন",composer:"আর. পি. গ্রীভস্ (১৮৫৬)",lyrics:`শুন স্বর্গদূতের রব, নবজাত রাজার স্তব,
ঊর্ধ্বে প্রভুর মহিমা, ভূতলে প্রসন্নতা,
উঠ সর্বজাতিগণ, হর্ষে কর আরাধন,
কথা করিও প্রচার, ঈশ্বর হইলেন অবতার।

ধুয়া
শুন স্বর্গদূতের রব, নবজাত রাজার স্তব!

২ যিনি স্বর্গে পূজিত, সদাকাল বিরাজিত,
তিনি পূর্ণ সময়ে, জন্মেছেন এই জগতে,
নিতে পাপ ও দুঃখ-ভার, হইলেন তিনি নরাকার,
মর্ত্যলোকে মর্ত্য সাথ, প্রবাস করেন যীশু নাথ।

৩ আইস, ধন্য শান্তিরাজ! সিদ্ধ কর তব কাজ,
তুমি সত্য দিবাকর, ধর্মভানু মনোহর,
আপন মহাবলেতে, ধ্বংস কর সর্পকে,
নরবংশ রাজ্য লও, মৃত্যু নাশি' জীবন দাও।`},{id:77,title:"আলোর দেশের শিশু এল",transliteration:"Alor Desher Shishu Elo",category:"বড়দিন",composer:"মানিক নাথ",lyrics:`আলোর দেশের শিশু এল, আঁধার গেল দূরে,
ঐ শোন গো অভয় গীতি, সুনীল গগন জুড়ে।

১ সেই গানে আজ প্রাণের মাঝে, নবীন আশার বীণা বাজে,
যায় মুছে সব শঙ্কা কালো মাভৈঃ বাণীর সুরে।

অন্তরা
সুদূর নভে উজ্জ্বল রাতে অবাক তারার হাসি,
পথিক মনের গোপন কোণে ছড়ায় পুলক রাশি।

২ প্রেম ও প্রীতি উপচারে দাও উপহার প্রণাম তাঁরে,
ধরায় যে জন জন্ম নিল ছাড়ি অমর পুরে।`},{id:78,title:"স্বর্গ যেথায় এসেছে ধরায় নেমে",transliteration:"Swarge Jethay Eseche Dhoray Neme",category:"বড়দিন",composer:"",lyrics:`স্বর্গ যেথায় এসেছে ধরায় নেমে,
চল চল সেই, চল চল সেই (২)
তীর্থ বেথলেহেমে।

১ স্বর্ণ পেটিকা আমরা কোথায় পাবো,
হিয়ার মাঝারে ভালোবাসা নিয়ে যাবো,
প্রভুর চরণে ঢেলে দেব তাহা,
যেখানে পুলকে থেমে।

অন্তরা
অম্বরে এক প্রদীপ্ত তারা বলে,
হে পথিক তাঁরে, দেখ ধূলিতলে।

২ রত্ন মুকুট নেই তো প্রভুর শিরে,
দীনের ভূষণ শোভে তাঁর দেহ ঘিরে,
মাটির আসনে বিরাজিছে সেথা,
শিশূরাজ মহাপ্রেম।`},{id:79,title:"পৃথিবীর বুকে নবীন তারাটি",transliteration:"Prithibir Buke Nobin Tarati",category:"বড়দিন",composer:"যতীন্দ্র সিংহ ও রুবেল সরকার",lyrics:`পৃথিবীর বুকে নবীন তারাটি, জনম বারতা দিল,
ঘুমাইও না আর জাগো পুরবাসী, সুন্দর আজি এল।

১ স্বর্গ হইতে মোদের তারিতে, আসিয়াছেন মহীয়ান,
দূত সবে মিলে আকাশের কোলে,
গাহে বন্দনা গান।

অন্তরা
তারা দেখে আজি জ্যোতিবিদে, বেথলেহেম পানে ধায়,
স্বর্ণ, কুন্দুরু, গন্ধরসে, ঢেলে দিল তাঁর পায়।

২ জাগো পুরবাসী চল দেখে আসি ঈশ্বর তনয়ে,
উপহার কিছু চাহে নাকো সে যে,
চাহে শুধু মানবে।`},{id:80,title:"আনন্দ ধ্বনি শোন পরিত্রাতা আসে",transliteration:"Anondo Dhoni Shono Poritrata Ashe",category:"বড়দিন",composer:"সুনীল দত্ত",lyrics:`আনন্দ ধ্বনি শোন পরিত্রাতা আসে,
আঁধার আগল ভেঙ্গে পরিত্রাতা আসে।

১ মহানন্দ সর্ব্বলোক ঘিরে, জয়টিকা ধরিত্রী শিরে,
ভগ্ন হৃদয় জুড়ে পরিত্রাতা আসে।

অন্তরা
মিলনের নিমন্ত্রণ, স্বর্গ মর্ত্য ধামে,
ঈশ্বর মানব হল খ্রীষ্ট যীশু নামে।

২ অসীম অপার কৃপা তাঁর, প্রকাশিলে জীবনে সবার,
শুভ্র জ্যোতির মাঝে পরিত্রাতা আসে।`},{id:81,title:"স্বর্গের সিঁড়ি বেয়ে তুমি",transliteration:"Swarger Shiri Beye Tumi",category:"বড়দিন",composer:"পিটার সরকার (১৯৮০)",lyrics:`স্বর্গের সিঁড়ি বেয়ে তুমি,
তুমি এসেছিলে, এসেছিলে এ মাটির ঘরে।
অবশেষে ভালবেসে ক্রুশপ'রে জীবন দিলে।

১ এ আকাশ, এ বাতাস, পাখীরা যে গান গেয়ে যায়,
তারা তোমার জন্ম-বারতা শোনায়,
মেরীর কোলে গোয়াল ঘরে
মানুষের বেশে জন্ম নিলে।

২ জানি না, মানি না, আমি অন্য কিছু তো জানি না,
তোমা ছাড়া কিছুই ভাবি না,
আমার দু-হাত ধরে তোমার করে,
তুমি তো আপন করে নিলে।`},{id:82,title:"ঝর ঝর ঝরে যায় ঝরণার গান",transliteration:"Jhor Jhor Jhore Jay Jhornār Gān",category:"বড়দিন",lyrics:`ঝর ঝর ঝরে যায় ঝরণার গান,
তারই সাথে ভেসে আসে দূতের তান।

১ নিখিল জাগিতেছে ধীরে ধীরে,
জীবনের তীরে তীরে তীরে,
আজি নব রাজা জন্মিয়াছেন বিধাতার দান
তারই সাথে ভেসে আসে দূতের তান।

অন্তরা
জাগো ধরণী জাগো,
তাঁহার আশীষ মাগো।

২ ভক্তি কুসুমে তাঁরে দিও প্রতিদান,
ঝর ঝর গেয়ে যায় ঝরণার গান,
আজি নব রাজা জন্মিয়াছেন বিধাতার দান
তারই সাথে ভেসে আসে দূতের তান।`},{id:83,title:"নতুন সাজে মর্ত্য যেন",transliteration:"Notun Saje Mortyo Jeno",category:"বড়দিন",lyrics:`নতুন সাজে মর্ত্য যেন, সেজেছে নূতন সাজ,
নীল আকাশের নূতন তারার, ভিড় জমেছে আজ।

১ স্বর্গ দূতেরা আকাশ রাঙ্গায়,
মেঘের কোণ হতে বাণী শোনায়,
শিশু যীশু জন্ম নিলেন বেথেল গোশালায়,
চল তাঁরে আজ প্রণমিতে আয়রে সবে আয়।

২ রাজা হয়েও আজি রাজার ঘরে নয়,
জন্ম নিলেন আজি বেথেল গোশালায়,
রাজার রাজা, প্রভুর প্রভু, আসলেন মোদের তরে,
দুঃখী জনের দুঃখ আজি ঘুচাবার তরে।`},{id:84,title:"গৌরব মহিমা প্রতাপে",transliteration:"Gourav Mohima Protape",category:"বড়দিন",lyrics:`গৌরব মহিমা প্রতাপে, রাজা এল (এ) ধরায়,
উচ্ছ্বাসে উল্লাসে আজ জগৎ ভেসে যায়,
এল আজ এল বড়দিন, এল আজ শুভ বড়দিন।

১ যীশুর ভালোবাসার তুলনা যে নাই,
মোদের তরে ধরায় জন্ম নিলেন তাই।
তিনি এলেন, খুশী এল, পাপীজনে মুক্তি পেল,
নাইরে নাইরে নাই— এর চেয়ে খুশীর কিছু নাই,
এল আজ এল বড়দিন, এল আজ শুভ বড়দিন।

২ স্বর্গের রাজা হয়েও মর্ত্যে এলেন তিনি,
এর চেয়ে আনন্দের আর হতে পারে কী!
নাইরে নাইরে নাই — এর চেয়ে খুশীর কিছু নাই।`},{id:85,title:"হাল্লেলুইয়া জয়গান গাওরে বদনে",transliteration:"Hallelujah Joygan Gaore Bodone",category:"বড়দিন",lyrics:`হাল্লেলুইয়া জয়গান গাওরে বদনে,
জন্মেছেন যীশু বেথেলপুরে,
তোরা দেখবি কে ছুটে আয় নররূপে দয়াময়,
উদয় ঐ গোয়াল ঘরে রে (হায়রে)।

১ বর্ণনা দিতে তাঁর অপরূপ কান্তি,
স্বর্গেতে মহিমা পৃথিবীতে শান্তি,
দূতগণে মিলে গায় জয় যীশুর জয় জয়,
জয় যীশুর জয় বলরে (ভাইরে)।

২ রাখালেরা ছুটে যায় দেখিতে তাঁহারে,
পণ্ডিতগণ তারা আকাশে দেখেরে,
(তারা) তারা দেখে চলিল যীশুকে পাইল,
উপহার দিল তাঁহারে (তারা)।

৩ (চল) আমরাও ছুটে যাই দেখিতে যীশুরে,
কে কি নিবে দিতে উপহার তাঁহারে,
আর কিছু নাহি ধন, দিব তাই মন প্রাণ,
শ্রীযীশুর চরণেতে রে (ভাইরে)।`},{id:86,title:"এলরে আবার খুশীর দিন",transliteration:"Elore Abar Khushir Din",category:"বড়দিন",lyrics:`এলরে আবার খুশীর দিন, উঠেছে বেজে হৃদয় বীণ,
খুশীর দোলায় ঘুচে গেল, দুঃখ ব্যথার দিন।

১ যীশু নাম মুক্তি নিয়ে এলরে ধরায়,
হৃদয়ের মলিনতা মুছে গেল তায়,
 আজ মুক্তিকামী পাপীর তরে, এসেছে এ দিন।

২ হৃদয়ের নীল সাগরে উঠেছে আজ ঢেউ,
মনে আজ ব্যথা নিয়ে রইবে না আর কেউ,
তাই দুঃখ ব্যথা ভুলে গিয়ে, হৃদয় আজ নবীন।`},{id:87,title:"আকাশে, বাতাসে উঠে আজ কার মুখরিত গান",transliteration:"Akashe, Batase Uthe Aj Kar Mukhorito Gan",category:"বড়দিন",composer:"সুনীল দত্ত",lyrics:`আকাশে, বাতাসে উঠে আজ কার মুখরিত গান,
মোদের ত্রাতা, জন্ম নিলেন
ওঠে তাই, দূতদের বন্দনা গান।

১ ঊর্ধ্ব আকাশে দূতগণ গান করে,
তাদেরই সুর ঝংকারে,
জাগিল সবার প্রাণে নবীন আশা,
পৃথিবীতে জাগে (নব) জীবনের গান।

অন্তরা
পাপীর তরে, ত্রাতার রূপ ধরে,
এলেন তিনি ধরাতে,
পাপীর পাপ লাঘব করিয়া,
মুক্তি দিলেন সবারে।

২ চারিদিকে আজ, আনন্দে মেতেছে,
নেই কোন মান অভিমান,
ফুলেরই সৌরভে বাতাস ভরেছে,
ছড়িয়ে পড়েছে শুধু আলো হাসি গান।`},{id:88,title:"দায়ূদনগরে প্রেমে টলমল",transliteration:"Dayudnogore Preme Tolmol",category:"বড়দিন",lyrics:`দায়ূদনগর প্রেমে টলমল (২), তোরা যাবি চল,
দায়ূদনগর টলমল, টলমল ধরাতল।

১ মেষপাল নিয়ে রাখালগণ ছিল মাঠে চৌকিতে,
হেনকালে হয় আকাশে দূতের উদয় মাঠেতে,
ভয় কোরোনা রাখালগণ, পূর্ণ হবে মনস্কাম।

২ প্রভু যীশু স্বর্গ ছেড়ে আসিলেন এ ধরাতে,
আমার মত অধম যত, পাপীতাপী তরাতে,
লভিলে তাঁর চরণ ধূলা পুণ্য হবে ধরাতল।`},{id:89,title:"এস যাই ভগ্নী-ভাই, সকলে মিলিয়ে",transliteration:"Esho Jai Bhogni-Bhai, Sokole Miliye",category:"বড়দিন",composer:"জেমস্ রবীন্দ্র বিশ্বাস (১৯৬৪)",lyrics:`এস যাই ভগ্নী-ভাই, সকলে মিলিয়ে,
গোশালায় হেরিতে, নবজাত রাজারে,
এস যাই ত্বরা যাই।

১ স্বর্গের গোলাপ বেথেলপুরে, ফুটিছে গোশালায় যাবপাত্রে,
কহিছে দূত রাখালগণে।

২ মহিমা ঈশ্বরের ঊর্ধ্বলোকে, শান্তি প্রীতি মানব-সুতে,
গাহিছে স্বর্গ-দূত মিলে।

৩ স্বর্ণ কুন্দুরু গন্ধরসে, পূজিছে পণ্ডিত নব ত্রাতারে,
হৃষ্ট মনে নতশিরে।

৪ স্বর্ণ রৌপ্য কোন ধন, নাহি চাহেন ঈশ-নন্দন,
পাপীরে লভিতে ধরায় আগমন।`},{id:90,title:"দায়ূদ নগর ঐ যে দেখা যায়",transliteration:"Dayud Nogor Oi Je Dekha Jay",category:"বড়দিন",composer:"প্রিয়নাথ বৈরাগী",lyrics:`দায়ূদ নগর ঐ যে দেখা যায়।
মোরা এসেছি নিকটে তার, বেশী দূরে নাহি আর
যাবে যদি চলে আয়।

১ দূতের মুখে পেলাম সংবাদ,
এবার পূর্ণ হবে অন্তরের সাধ গো ভাইরে,
হলেন জগৎ পিতা অনুকূল, ভবজলে পাবে কূল,
পাতকীকুল নিরুপায়।

২ মেষপাল নিয়ে ছিলাম জেগে,
মোরা অন্ধকারময় নিশিযোগে গো ভাইরে,
ঘটলো কি ঘটনা অকস্মাৎ, করে দেখি দৃষ্টিপাত
আলোকে সব আলোকময়।

৩ স্বর্গের পুরুষ বিদ্যুৎ বরণ,
কিবা অনিন্দ্যরূপ চন্দ্রবদন গো ভাইরে,
এলেন শান্তিরাজ এ সংসারে আনন্দনগরে,
জয় হউক, জয় হউক, পিতার জয়।`},{id:91,title:"বেৎলেহাম, বেৎলেহাম, বেৎলেহাম",transliteration:"Bethlehem, Bethlehem, Bethlehem",category:"বড়দিন",composer:"মানিক নাথ",lyrics:`বেৎলেহাম, বেৎলেহাম, বেৎলেহাম,
ধন্য ধরায় পুণ্য আলোকে আলোক ধাম।

১ রক্ত ঝরানো দ্বন্দ্ব মুখর দেশে,
প্রেমের রাজা যে জন্ম নিল গো এসে,
তোমার ধুলির তীর্থে যাত্রী, আসিল সে নিশিযাম।

অন্তরা
দীপ্ত জ্যোতির সুপ্ত রূপালী ধারা গো,
ভাগ্য রাতের অম্বরে দিল সারা গো।

২ অন্ত বিহীন অন্ধকারের শেষে,
মুগ্ধ তারাটি স্নিগ্ধ আননে হেসে,
তোমার মাটির পর্ণ কুটীরে, অলখে রাখে প্রণাম।`},{id:92,title:"কি শুভদিন, এল বড়দিন, প্রভু যীশুর মহা জন্মদিন",transliteration:"Ki Shubhodin, Elo Borodin",category:"বড়দিন",lyrics:`কি শুভদিন, এল বড়দিন, প্রভু যীশুর মহা জন্মদিন
এস সবাই মিলে দুই বাহু তুলে, খুশিরই গান গেয়ে যাই।

১ সকলের ঘরে ঘরে মনের অন্তরে,
এই শুভবার্তা পৌঁছে দিতে হবে ভাই,
তাই সবে যাই ছুটে ছুটে যাই, মুক্তির গান গেয়ে যাই।

অন্তরা: বেৎলেহেমের গোয়ালঘরে, শিশু যীশু নাই নাইরে,
তিনি তো চান জন্ম নিতে, সবার ঘরে নূতন করে।

২ এস সবে একসাথে গান গাই তাঁর তরে,
একমনে ভাই, আজ তাঁকে শুধু চাই,
তাই সবে ভাই একসাথে চাই, তাঁর তো সাথ পেতে চাই,
বড়দিন! বড়দিন! বড়দিন! বড়দিন!`},{id:93,title:"গাওরে আনন্দে নর, নর ত্রাতার জন্ম-গীতি",transliteration:"Gaore Anonde Nor, Nor Tratar Jonmo-Giti",category:"বড়দিন",composer:"শ্রীশচন্দ্র বিশ্বাস",lyrics:`গাওরে আনন্দে নর, নর ত্রাতার জন্ম-গীতি,
তিনি ধাতা, তিনি পাতা, তিনি অগতির গতি।

১ হের রাজরাজেশ্বরে, শায়িত হারঙ্গ পরে,
দীনবেশে, দীনবাসে, দীনত্রাণে এত প্রীতি।

২ শুন দূতে হর্ষে ভরে, কহে রাখাল নিকরে,
অদ্য দায়ূদ নগরে, জন্মিলেন ত্রাণপতি।

৩ গাইছে বিমান পথে, দলে দলে স্বর্গ-দূতে,
ঈশ মহিমা ঊর্ধ্বেতে, ভবে শান্তি নরে প্রীতি।

৪ জ্ঞানীজন, মনোলোভা, নূতন তারকা-প্রভা,
পূরব গগনে কিবা বিলাইছে প্রেম-জ্যোতি।`},{id:94,title:"আমার মনের বেৎলেহেমেতে, লও প্রভু তুমি ঠাঁই",transliteration:"Amar Moner Bethlehemete",category:"বড়দিন",composer:"মানিক নাথ",lyrics:`আমার মনের বেৎলেহেমেতে, লও প্রভু তুমি ঠাঁই,
তোমার যোগ্য কোন আয়োজন যদিও সেখানে নাই।

১ হৃদয়ে আমার জমেছে অনেক কালো,
তুমি এসে প্রভু, জ্বালাও তোমার আলো,
তব আগমনে আমি যেন শুধু, নূতন জীবন পাই।

অন্তরা
রাখালি প্রাণের আকুলতা নিয়ে, আমি যে তোমাকে খুঁজি,
ওগো মোর ত্রাতা বাসনা আমার, তোমার চরণ পুঁজি।

২ পরশে তোমার কালিমা আমার যাবে,
আঁখি তারা মম তোমাকে দেখিতে পাবে,
সে শুভ লগনো আসিবে বলিয়া জাগিয়া রয়েছি তাই।`},{id:95,title:"আকাশে তখন জেগেছিল নীল তারা",transliteration:"Akashe Tokhon Jegechhilo Nil Tara",category:"বড়দিন",composer:"গৌরী শংকর রায়",lyrics:`আকাশে তখন জেগেছিল নীল তারা, স্বপ্নের আলো হাতে,
তুমি এলে যীশু আলোকিত হল সবই, ধরণীর আঙ্গিনাতে।

১ সন্তান তুমি বিশ্বপিতার, শেখালে মন্ত্র ভালবাসিবার,
গড়িতে চাহিলে মিলন স্বর্গ, মানুষের হৃদয়েতে।

অন্তরা
মেরী যোষেফের তুমি দেব শিশু, বেৎলেহেমেতে এসে,
মানব মহিমা করেছ প্রকাশ মরণ জয়ীর বেশে।

২ অন্যায় পাপ করিবারে ত্রাণ, ক্রুশেতে জীবন করে গেলে দান,
ধরার দুঃখ জিনিতে পরিলে, কাঁটায় মুকুট মাথে।`},{id:96,title:"পথের ক্লান্তি মুছে ফেল ওগো",transliteration:"Pother Klanti Muchhe Phello Ogo",category:"বড়দিন",composer:"মানিক নাথ",lyrics:`পথের ক্লান্তি মুছে ফেল ওগো, মন্থর কর গতি,
গগন প্রান্তে হের গো পান্থ, উজ্জ্বল তর জ্যোতি।

১ চেয়ে দেখ শুভ রাত্রে, শুয়ে আছে যাবপাত্রে,
স্বর্গো কান্তি ছড়ায়ে ভুবনে, সুন্দর ত্রাণপতি।

অন্তরা
সুদূর যাত্রী নব শিশু লাগি,
আলোকে তীর্থে এলে নিশি জাগি।

২ দিতে আজি তাঁরই জন্য, নাহি থাকে কিছু অন্য,
প্রেমের কনকে, সুরভি ও ধূপে, অর্পণ কর নতি।`},{id:97,title:"নব জাতকের জয়ধ্বনি জাগে ওই",transliteration:"Nobo Jatoker Joyodhwoni Jage Oi",category:"বড়দিন",composer:"মানিক নাথ",lyrics:`নব জাতকের জয়ধ্বনি জাগে ওই,
ওঠে বন্দনা মুখরিত গান।
নীরব যামিনী ভরে আগমনী সুরে, নন্দিত করি মন প্রাণ।

১ জগতে মানব মাঝে শান্তি প্রীতি,
প্রহরী রাখাল শোনে রম্য গীতি,
বিস্মিত নয়নে গগনে তাকায়, দেখে সেথায় দূত অভিযান।

অন্তরা
দিশারী আলোক ঝরা দীপ্ত তারা,
উৎসব ক্ষণে দিল উর্ধে সাড়া।

২ নবীন তারকা হেরি হর্ষে মেতে,
সুদূরে পথিক চলে সন্ধানেতে,
চঞ্চল চরণে আসি গোশালায়, শিশু রাজ এ দিল মহাদান।`},{id:98,title:"আজ শুভ বড়দিন ভাই, আজ শুভ বড়দিন",transliteration:"Aj Shubho Borodin Bhai",category:"বড়দিন",composer:"সুনীল কুমার সরকার",lyrics:`আজ শুভ বড়দিন ভাই, আজ শুভ বড়দিন,
খ্রীষ্ট যীশু এলেন ভবে ছেড়ে স্বর্গের সিংহাসন।

১ চেয়ে দেখ বেৎলেহেমে, গোয়ালঘরে মেরীর কোলে,
যাবপাত্রে আছেন শুয়ে পাপীদের মুক্তির কারণ।

২ স্বর্গদূত নেচে নেচে, সংবাদ দিল রাখালগণে,
তারা দেখে পণ্ডিত গণে, আসে করিতে দর্শন।

৩ পাপের সকল দণ্ড নিতে, এসে যীশু অবনীতে,
যীশুর রক্তে ধৌত হয়ে কর তাঁহার নাম কীর্তন।

৪ ধন্য যীশু, বল সবে, মহোল্লাসে উচ্চ রবে,
হাল্লিলূয়া স্তবে সবে, পূর্ণ কর এ ভুবন।`},{id:99,title:"মহানন্দে কর সঙ্কীর্তন",transliteration:"Mohanonde Koro Sankirtan",category:"নববর্ষ",composer:"শলোমন শান্তিনাথ বিশ্বাস",lyrics:`মহানন্দে কর সঙ্কীর্তন, (যীশু নামে)
আজি নব সাজে, নব তেজে, জয় জয় বল ভ্রাতৃগণ।

১ যীশুর মহা কৃপাবরে, বেঁচে আছি এ বৎসরে,
এখন ধন্যবাদ কর তাঁরে, হয়ে পুলকিত মন।

২ যীশুর ইচ্ছা অনুসারে, সমাগত এ বাসরে,
আজি পুলকে পূরিত হয়ে ধন্য ধন্য করে মন।

৩ বল সবে ধন্য ধন্য প্রেমময় পিতা ধন্য।
আরও যীশু ধন্য, যীশু ধন্য, ধন্য ধন্য সদাত্মন।

৪ প্রেমানন্দে ভ্রাতৃগণে, এস জয় সঙ্কীর্তনে,
সবে ধন্য ধন্য ধন্য রবে, পূর্ণ কর এ ভুবন।

৫ উচ্চনাদে জয় জয় রবে, জানাও নগরবাসী সবে,
বল যীশুই পরিত্রাতা ভবে, পূজ তাঁহার শ্রীচরণ।`},{id:100,title:"জাগো, নবীন বরষ এসেছে",transliteration:"Jago, Nobin Borosh Esechhe",category:"নববর্ষ",lyrics:`জাগো, নবীন বরষ এসেছে
নবীন বরষে, নবীন হর্ষে,
মানবকুলে তাই এসেছে।

১ নবীন বরষ আসিয়াছে যে, লইব উঠায়ে হৃদয়েতে,
ত্যজিয়া ফেলিব পুরাতন, নব গীতি ঐ ভাসিছে।

২ নবীন বরষের অনুরাগে, মিলিত হয়েছি নব যোগে,
প্রীতি ও ভক্তিতে যীশু এসে সুমধুর তান ধ্বনিয়াছে।

৩ নব সাজে ধরণী সেজেছে, নবীন আলোকে মাতিয়াছে,
নবীন আশীষ  শিরেতে ধরি, নবীন দীক্ষায় হয়েছে রে।`}],Nb=[{id:101,title:"নব বরষের প্রথম দিনে বলে যাই",transliteration:"Nabo Borosher Prothom Dine Bole Jai",category:"নববর্ষ",lyrics:`নব বরষের প্রথম দিনে বলে যাই,
হে প্রাণ আমার মানবের তরে যেন হারাই।

১ মনে পড়ে কথা বিগত দিনের,
অশ্রু ঝরেছে কত শত জনের,
সে তো জানি মোর দেওয়া আঘাতে,
যা আমি কখনও চাহি নাই।

অন্তরা
যে ব্যথা সেদিন দিয়েছি ভুল করে,
বন্ধু আমার রেখ না তারে মনে ধরে।

২ খুলে দাও তব হৃদয় দুয়ার,
দাও হে প্রাণের প্রীতি উপহার,
নব সুরে তারে বেঁধে এনেছি,
মনের গভীরে যারে পাই।`},{id:102,title:"নূতনের আগমনে, নব মনে সাজরে",transliteration:"Nutoner Agomone, Nobo Mone Sajore",category:"নববর্ষ",lyrics:`নূতনের আগমনে, নব মনে সাজরে।
ওরে নূতন আলোর বন্যা আজি, অবগাহন কররে।

১ পুরাতন আজ নিল বিদায়, বিদায় ভাষণ জানাই সবারে
আজি পুরাতনের কালো জলে, নূতন পদ্ম ভাসেরে।

২ এস এস ভাই ভগ্নি, নূতন ভাষায় কথা বলিরে,
এস দলাদলি দূরে ফেলি, বাহু তুলে নাচরে।

৩ পুরাতনের মনের কালি, নূতন আলোয় মুছে ফেলরে,
আজি খ্রীষ্ট যীশুর চরণতলে, প্রেমের সুরে মাতরে।`},{id:103,title:"সময় এসেছে এবার",transliteration:"Somoy Eseche Ebar",category:"নববর্ষ",lyrics:`সময় এসেছে এবার,
হতাশার কথা ছেড়ে,
আশার কথা বলার,
মুক্তির সেই বাণী,
সবার কাছে দেবার।

খ্রীষ্টকে আজ পেয়ে জগৎ
নতুন ইশারা পেল
আলোর পথে চলতে মোদের
জীবন ধন্য হল,
আলো দিয়ে তাই এই জীবনে
নতুন দিনের নব বরষে
খ্রীষ্টকে আজ পেয়েছি মোরা
জীবনের হল সারা।`},{id:104,title:"নূতন বরষে, মনের হরষে",transliteration:"Nuton Boroshe, Moner Horoshe",composer:"প্রসন্ন কুমার দাস (১৯২৯)",category:"নববর্ষ",lyrics:`নূতন বরষে, মনের হরষে,
এস সবে মিলি, গাহি নব গান,
নব অনুরাগে, প্রেম ভক্তি যোগে,
যীশু পদ পুজি, হয়ে এক প্রাণ।

১ যাঁহার কৃপায় বিগত বরষ
লভিয়াছি মোরা মঙ্গল অশেষ,
চরণে তাঁহার, ভক্তি পুষ্প হার
সযতনে মোরা করিব প্রদান।

২ চাহিলে বারেক অতীতের পানে,
সুখ দুঃখ জাগে মোদের পরাণে,
তাঁহার করুণা, সকল ঘটনা
মিলায়ে করেছে মঙ্গল বিধান।

৩ কত বার লক্ষ্য ভ্রষ্ট হয়ে মোরা,
বিপথে ভ্রমেছি হয়ে পথহারা,
তাঁহার ইঙ্গিতে, এসেছি সুপথে,
ধন্য সেই প্রভু করুণা-নিধান।

৪ পুরাতন গেছে এসেছে নূতন,
এস নব ভাব করি হে ধারণ,
নম্রতা ভূষণ, প্রেমের বসন,
সবে সযতনে করি পরিধান।

৫ যাহা যাহা শুচি যাহা গুণ যত,
আদরের যোগ্য, অথবা সুখ্যাত,
সেই সব প্রতি, থাকে যেন মতি,
কর্তব্য পালনে হই যত্নবান।

৬ যীশুর রাজত্ব করিতে বিস্তার,
উদাসীন যেন, থাকি নাকো আর,
ত্যজি স্বার্থভাব, ধরি নব ভাব,
বিশ্বাসেতে যেন হই যত্নবান।`},{id:105,title:"হোসান্না! হোসান্না! এ এলেন শান্তিরাজ!",transliteration:"Hosanna! Hosanna! E Elen Shantiraj!",composer:"উইলিয়াম কেরী",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"zyoHLDKH6K0",lyrics:`(যীশুর যিরূশালেমে যাত্রা)
হোসান্না! হোসান্না! এ এলেন শান্তিরাজ!
ধন্য! তিনি ধন্য! পথ খুল যীশুর জন্য,
নিজ রাজ্য লইবেন আজ।

১ যিরূশালেমের দিকে যায় গাধায় চড়িয়ে কে?
লোক কত আগে পিছে ধায়—কি বলে পথিকে?

২ অপূর্ব সাজে সাজিয়ে, শ্রীযীশুর সৈনিক যায়।
নিজ বস্ত্র পথে পাতিয়ে—খেজুর পাতা উড়ায়।

৩ হে সিয়োন কন্যে’ পুরিবে আজ শাস্ত্রের এই বচন,
ঐ দীনবেশে হবে তোমার রাজার আগমন।

৪ নগরে শোভে সন্ধ্যালোক ও চূড়া স্বর্ণময়
রব শুনি ছাদে উঠে লোক অপেক্ষা করি রয়।

৫ ত্রাণেশের কিন্তু মন নিরাশ ‘গ্রহিবে কি আমায়?
কি সত্যের পক্ষে এই উল্লাস—না জগৎরাজ্য চায়।

৬ অমাযিক শিশুগণের ভাব নাথ হেরি মন্দিরে,
করিলেন স্তবে প্রীতি লাভ, তাই মনে রাখরে।`},{id:106,title:"চলে দলে দলে নগরবাসীগণ",transliteration:"Chole Dole Dole Nogorbashigon",composer:"প্রকাশ চন্দ্র হালদার",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",lyrics:`চলে দলে দলে নগরবাসীগণ — ধর্ম্মধামের পথে,
যথায় দয়াল যীশু যাচ্ছেন — চড়ে গর্ধবের পিঠে। (হায়রে)

১ শেষের ভোজ সমাপ্তির পরে, যীশু বলেন
শিষ্য দুজনারে, যাও ঐ গ্রামে,
গিয়ে দেখ গর্ধবী আর — শাবক বাঁধা বৃক্ষ সাথে। (দেখ)

২ খুলে আনতে সেই শাবকটি, কেহ জিজ্ঞাসে
তোমাদের যদি, বলবে এ কথাটি,
ও ভাই, শুন, গো ইহাতে, প্রভুর প্রয়োজন আছে। (শুন)

৩ রাজার রাজা রাজ-বেশে, (তিনি) চলেছেন
পিতার গৃহে, দেখে সকল লোকে,
আপনাদের বস্ত্র দিল, দিল বিছাইয়ে পথে। (ওভাই)

আর বৃক্ষ শাখা পাতা নিয়ে, সবে দিল
ঐ পথে বিছায়ে, যে যা পেল কাছে,
আর ‘হোসান্না দায়ূদ সন্তান' সবে গাহে উচ্চরবে। (ওভাই)`},{id:107,title:"দেখ, প্রেমের মহাসাগর",transliteration:"Dekh, Premer Mohasagor",composer:"জে. পি. জোনস্",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"z88jraGUjwI",lyrics:`Tune: Assurance of Ebenezer
দেখ, প্রেমের মহাসাগর, 
দয়ার মহাপ্লাবন হয়।
এসে, জীবনদাতা মরেন, 
মোদের জীবন করতে ক্রয়।
তাঁহার কথা কে না বলে? 
তাঁর প্রশংসা কে না গায়?
এমন অসীম প্রেম কি কেহ 
চিরকাল ভুলিয়া রয়।`},{id:108,title:"গেৎশিমানী বনে, নিকুঞ্জ কাননে",transliteration:"Getshimani Bone, Nikunjo Kanone",composer:"হেমচন্দ্র কবিরাজ (১৮৭৭)",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"qs4uTow6l7k",lyrics:`গেৎশিমানী বনে, নিকুঞ্জ কাননে,
প্রভু কি কারণে বসেছ একাকী
কিসের লাগিয়ে, নগর ত্যজিয়ে, 
এখানে আসিয়ে, মুদিয়াছ আঁখি।

১ তিক্ত পানপাত্র, দেখি তব গাত্র,
শিহরয়ে সত্য, ওহে প্রাণপতি,
তাহারি কারণ, হয়ে ক্ষুণ্ণ মন,
আসিয়ে বিজন ভাবিতেছ নাকি?

২ মম পাপ তরে, নিজ কলেবরে,
এত কষ্ট ধ’রে, করিছ ক্রন্দন,
আহা নাথ মম, মম পাপ ক্ষম,
আমি তোমা সম, কেহ নাহি দেখি।

৩ ওহে পাপহারী, তব দুঃখ স্মরি,
চক্ষে বহে বারি, সম্বুরিতে নারি,
অভাজন আমি, দয়া কর স্বামী,
মম ত্রাতা তুমি, তব পদে থাকি।`},{id:109,title:"তব প্রেম দেখে আমি যীশু",transliteration:"Tobu Prem Dekhe Ami Jishu",composer:"বিন্দুনাথ সরকার (১৮৯৪)",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"5SetWQjX5tQ",lyrics:`তব প্রেম দেখে আমি যীশু, মনে হলেম হতজ্ঞান,
তুমি প্রাণ দিয়া নাথ প্রাণ কিনেছ, তাই তো প্রাণের প্রাণ।

১ আহা! দারুণ ক্রুশেতে, পেরেক শলাকাঘাতে,
আমার প্রাণ কাঁপিছে, থর থর, ক’রে ক্রুশ ধ্যান।

২ আমি ক্ষুদ্রানুক্ষুদ্র, জ্ঞানে হয়েছি আদ্র,
আমার ক্ষুদ্র মনে থাকে যেন, দয়াল যীশুর নাম।

৩ একি শুভ সমাচার, প্রাণের যীশুই আমার,
প্রিয় যীশুর বরে, পিতার করে আঁকা আমার নাম।

৪ আমি পাপী নগণ্য, যীশুর হয়েছি গণ্য,
তাই যীশু ধন্য, যীশু ধন্য, গায় মম প্রাণ।`},{id:110,title:"আহা! কালভেরী ভূমি লাল হয়ে গেল",transliteration:"Aha! Kalbheri Bhumi Lal Hoye Gelo",composer:"মানিক নাথ",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"wVScZNNnh5k",lyrics:`আহা! কালভেরী ভূমি লাল হয়ে গেল, ঝরেছে প্রভুর রক্ত,
পাষাণ নয়নে অশ্রু দুলিল, আঁখি মেলে দেখ ভক্ত।

১ শুচী তনু হের রুধির সিক্ত কীলকে,
এত ব্যথা বল ধরণীতে পেয়েছিল কে?
পাপীর লাগিয়া সঁপিল জীবন, মহাত্যাগী নিরাসক্ত।

অন্তরা
রাজাসন ত্যজি রাজার দুলাল, এসেছিল নাহি বিত্ত।
মানুষের দুঃখে সমবেদনায়, ভরা ছিল তাঁর চিত্ত।

২ লেখা আছে ঐ শোণিত লিপ্ত শিলাতে,
প্রাণ দিল ক্রুশে মানবেরে প্রেম বিলাতে।
শত লাঞ্ছনা সহিল যে প্রভু, পাতকীর অনুরক্ত।`},{id:111,title:"আমি আর সইতে পারি না",transliteration:"Ami Ar Shoite Pari Na",composer:"বিন্দুনাথ সরকার ও কৈলাস চন্দ্র সরকার",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"2nQXCgGJVgI",lyrics:`আমি আর সইতে পারি না—
আমার প্রাণনাথ আজ ক্রুশেতে।

১ পথে লোক যাচ্ছে সারি সারি হে—
তারা দেখিয়া কেউ দেখে না।

২ নিষ্ঠুর সেনাগণে, বর্শা হানে হে—
তারা কারু বারণ শুনে না।

৩ প্রভুর পিপাসা হয়েছে ভারী হে—
একটু জল চেয়ে তা পেলেন না।

৪ খেদে পর্বতগণ বিদীর্ণ হইল হে—
হেরে প্রাণনাথের যাতনা।

৫ যীশু তোমার জন্য এত সইলেন হে—
তোমার কঠিন মন কি গলে না?`},{id:112,title:"ক্ষমা সুন্দর, প্রভুর প্রেমের বাণী",transliteration:"Khoma Sundor, Provur Premer Bani",composer:"মানিক নাথ",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",lyrics:`ক্ষমা সুন্দর, প্রভুর প্রেমের বাণী,
পাতকীর মনে, চেতনা দিল গো আনি।

১ অনুতাপে তার তাপিত পরাণ মাঝে,
নব জনমের নবীন রাগিণী বাজে।
চির অনন্ত জীবনের সুর, ধ্বনিল মরমে জানি।

অন্তরা
আজি তুমি যাবে আমার সঙ্গে চলে,
“পরম দেশেতে” খ্রীষ্ট তাহারে বলে।

২ লভিয়া প্রভুর অসীম করুণার দান,
পাপী পেল ক্রুশে সেই ক্ষণে পরিত্রাণ।
নিরাশা তিমিরে জ্বলে উঠে যেন, ভরসা প্রদীপ খানি।`},{id:113,title:"মোর তারক হইলেন বলিদান (Bleeding Lamb)",transliteration:"Mor Tarok Hoilen Bolidan",composer:"অক্ষয়কুমার মুখোপাধ্যায় (১৮৯৬)",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"oPrqojn9y20",lyrics:`১ মোর তারক হইলেন বলিদান, ধন্য প্রিয় হত মেষ!
ভাই আইস করি তাঁহার গান, ধন্য প্রিয় হত মেষ!

ধূয়া
সেই মেষ, সেই মেষ, সেই হত মেষ,
সেই যীশু নাম, মোর প্রিয় নাম।
মোর কেবল তাহে মনস্কাম, ধন্য প্রিয় হত মেষ!

২ পাপ, শাপ, লাজ মোর বহিলেন, ধন্য প্রিয় হত মেষ!
নিজ রক্তে আমায় তারিলেন, ধন্য প্রিয় হত মেষ!

৩ সব পাপ মোর জানি বিমোচন, ধন্য প্রিয় হত মেষ!
আর পাইলাম স্বর্গ সুখ এখন, ধন্য প্রিয় হত মেষ!

৪ এ তরঙ্গময় সংসারে, নির্ভয় আমি হত মেষ,
আনন্দে যাইব ওপারে, ধন্য তব গুণ অশেষ।`},{id:114,title:"মোর জন্য যীশু মরিলেন (What a wonderful Saviour!)",transliteration:"Mor Jonno Jishu Morilen",composer:"জে. পি. জোনস্",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",lyrics:`১ মোর জন্য যীশু মরিলেন, কেমন আশ্চর্য্য ত্রাতা!
প্রায়শ্চিত্ত তিনি করিলেন, কেমন আশ্চর্য্য ত্রাতা!

ধূয়া
কেমন আশ্চর্য্য ত্রাণকর্তা! যীশু মোর যীশু!
কেমন আশ্চর্য্য ত্রাণকর্তা! মোর যীশু হে!

২ তাঁর নাম প্রশংসা করতে চাই, কেমন আশ্চর্য্য ত্রাতা!
তাঁর মৃত্যুর দ্বারা মুক্তি পাই, কেমন আশ্চর্য্য ত্রাতা!

৩ মোর হৃদয় ধৌত করিলেন, কেমন আশ্চর্য্য ত্রাতা!
ও আমায় শাসন করিলেন, কেমন আশ্চর্য্য ত্রাতা!

৪ মোর সঙ্গে চলেন প্রতিদিন, কেমন আশ্চর্য্য ত্রাতা!
দেন শক্তি যখন শক্তিহীন, কেমন আশ্চর্য্য ত্রাতা!

৫ জয় শত্রুগণকে করিলেন, কেমন আশ্চর্য্য ত্রাতা!
ও তদ্রূপ শক্তি আমায় দেন, কেমন আশ্চর্য্য ত্রাতা!

৬ সব জীবন তাঁকে দিয়েছি, কেমন আশ্চর্য্য ত্রাতা!
ও থাকি শেষে তাঁহার ঠাঁই, কেমন আশ্চর্য্য ত্রাতা!`},{id:115,title:"কি মোর পাপ পারে ধুতে? (What can wash away my strain.)",transliteration:"Ki Mor Pap Pare Dhute?",composer:"রবার্ট লওরী",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"a9tYp5TBs3U",lyrics:`১ কি মোর পাপ পারে ধুতে? কেবল মাত্র যীশুর রক্ত!
কি পারে নির্মল করতে? কেবল মাত্র যীশুর রক্ত!

ধূয়া
আঃ অমূল্য এই স্রোত, যা করে শুক্লবৎ
এতে হই আমি ধৌত, কেবল মাত্র যীশুর রক্ত!

২ পাপের প্রায়শ্চিত্ত এই, কেবল মাত্র যীশুর রক্ত!
মোর সৎকর্ম পারে নাই, কেবল মাত্র যীশুর রক্ত!

৩ এতে আমি ক্ষমা পাই, কেবল মাত্র যীশুর রক্ত!
এতে আমি সাধু হই, কেবল মাত্র যীশুর রক্ত!

৪ এতে সুখ ও শান্তি পাই, কেবল মাত্র যীশুর রক্ত!
এতে আমি নির্মল হই, কেবল মাত্র যীশুর রক্ত!`},{id:116,title:"প্রণাম লহ গো খ্রীষ্ট!",transliteration:"Pronam Loho Go Khristo",composer:"মানিক নাথ",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"wr68hDtUJLk",lyrics:`প্রণাম লহ গো খ্রীষ্ট!
উজাড় করিয়া দিলে ধরাতলে, আপনারে প্রেমনিষ্ঠ।

১ তব পরশনে মৃতজনে পেল প্রাণ,
অন্ধ আতুর মেলে দিল দু-নয়ন,
মহাকরুণায় মুক্তি লভিল, পাপভারে যারা ক্লিষ্ট।

অন্তরা
ছাড়িলে সুখের স্বর্গ,
ভালবেসে নরে, তুলে নিলে শিরে, কন্টকময় অর্ঘ্য।

২ “ক্ষমা কর পিতঃ” করেছিলে অনুরোধ,
শত্রুগণের নাওনি কো প্রতিশোধ,
সঁপিলে জীবন ক্রুশের উপরে, ছিল যাহা পরিশিষ্ট।`},{id:117,title:"পরম প্রেমিক যীশু তুমি",transliteration:"Porom Premik Jishu Tumi",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",lyrics:`পরম প্রেমিক যীশু তুমি,
আমার ব্যথি হয়ে, ক্রুশে জীবন দিলে।

১ হাতে পায়ে পেঁরেক তোমার, ঝরে শোণিত অঝোর ধার,
মাথায় কাঁটার মুকুট তোমার, ঝরে শোণিত অঝোর ধার,
তবু সয়ে গেলে।

অন্তরা
চরম তৃষায় ডেকেও পেলে না তুমি একটি ফোঁটা জল,
শত পরিহাসে মনের বাসনা ওরা করল যে সফল।

২ এমন প্রেম কেউ দেয়নি, তুলনা যে তাঁর নাই,
এমন ক্ষমা কেউ দেয়নি, তুলনা যে তাঁর নাই,
শুধু তুমি দিলে।`},{id:118,title:"লাল টকটকে রক্ত, ফোঁটায় ফোঁটায় ঝরে",transliteration:"Lal Toktoke Rokto, Photay Photay Jhore",composer:"পিটার সরকার",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"NsW1-iQUqkU",lyrics:`লাল টকটকে রক্ত, ফোঁটায় ফোঁটায় ঝরে,
সে তো আমারই তরে, সে তো তোমারই তরে।

১ এমন ভালোবাসা দেখেছ কি কখন?
এমন প্রেম প্রীতি বুঝেছ কি কখন?
সে তো তোমায় আমায় ভালো-বেসে রক্ত বইয়ে দিল।

অন্তরা
এমন অসীম করুণা পাবে কোথায়?
সে যে পরের জন্য নিজের জীবন বিলায়।

২ এমন আশার বাণী শুনেছ কি কখন?
এমন মুক্তির আলো পেয়েছ কি কখন?
সে যে ক্রুশের উপর জীবন দিয়ে, পাপীরে মুক্তি দিল।`},{id:119,title:"ক্ষমার বাণী, ক্ষমার বাণী",transliteration:"Khomar Bani, Khomar Bani",composer:"ফাঃ অবনী সরদার",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"u7bvnNAt9q8",lyrics:`ক্ষমার বাণী, ক্ষমার বাণী,
বিশ্বত্রাতা মহাপ্রভুর প্রেম। ক্ষমার বাণী।

১ যীশু প্রেমময় মোদের লাগি ক্ষমা চায়,
নম্র হয়েছে ক্রুশের পরে হায় হায়!
অপরাধী নয় ক্ষমার তরে সইলেন সবই।

২ আত্মত্যাগী নিজেরে করেছে উজাড়,
এইতো তাঁরই প্রেমের পরিচয়।
মমতা দিয়ে গড়া ওরে তাঁর হৃদয়খানি।`},{id:120,title:"তোমারই ক্রুশ পানে চাহি",transliteration:"Tomari Krush Pane Chahi",composer:"মিসেস এইচ. কে. চৌধুরী",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",lyrics:`১ তোমারই ক্রুশ পানে চাহি, আমারি প্রাণ ভরে যায়,
তোমারই প্রেম ব্যথা স্মরি, নয়নে ধারা বহে হায়!

২ তোমারি শোণিত ধারে, সকলি পাপ মোর হরে,
ফুটিয়া শুভ্র শতদলে, হৃদি মোর বিকশিত হয়।

৩ তোমারি ক্রুশ ব্যথা হেরি, অরুণ লাজে মুখ ঢাকে,
ভূধর কাঁপে থরথরি, আঁধারে ধরা ভরে যায়।

৪ তোমারি পুনরুত্থানে, চরাচর হর্ষে গান গায়,
তোমারি ক্রুশ মহিমায়, মন মোর পুলকিত হয়।`},{id:121,title:"রক্ত ঝরে, রক্ত ঝরে",transliteration:"Rokto Jhore, Rokto Jhore",composer:"মিসেস বীনা দত্ত",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",lyrics:`রক্ত ঝরে, রক্ত ঝরে, রক্ত ঝরে, রক্ত ঝরে —

১ পাপের পসরা শিরে নিয়ে,
বিশ্বের গ্লানি সব বয়ে,
কালভেরী গিরি 'পরে,
“পাপী চেয়ে দেখ ঐ ক্রুশোপরে।”

২ মেটাতে পাপের দেনা যত,
বহিছে রুধির স্রোত—
কাঁটার মুকুট শিরে,
“পাপী চেয়ে দেখ ঐ ক্রুশোপরে।”

৩ বিশ্বাসেতে মুক্তি পাবে,
মরণ ভয় আর না রবে,
কেঁদে বল সবারে—
“পাপী চেয়ে দেখ ঐ ক্রুশোপরে।”`},{id:122,title:"ক্রুশ বয়ে ত্রাণপতি যায় গিরি পথে",transliteration:"Krush Boye Tranpoti Jay Giri Pothe",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"afBEOHj_n4U",lyrics:`ক্রুশ বয়ে ত্রাণপতি যায় গিরি পথে,
কাঁপে অঙ্গ থরথর পথ চলিতে দয়াল।
যায় গিরি পথে—

১ ক্ষুধা তৃষ্ণায় কাঁটার ঘায়ে,
পাথর কণায় নগ্ন পায়ে,
জীবন স্বামী যায় এগিয়ে,
জীবন বিলাতে।

অন্তরা
দুঃখে ঝরে গাছের পাতা,
শোকান্বিতা দুঃখী মাতা,
কাঁদে পশু, কাঁদে পাখী, কাঁদে বনলতা।

২ মানুষেরই পাপের ভারে,
ধুলায় প্রভু গেলেন পড়ে,
মাটির ধরা সিক্ত হল, পুণ্য শোণিতে।`},{id:123,title:"ভাই আনন্দে যীশু নাম হৃদয় খুলে বল",transliteration:"Bhai Anonde Jishu Nam Hridoy Khule Bolo",composer:"প্রিয়নাথ বৈরাগী",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"m5U_muWQvmM",lyrics:`(ভাই) আনন্দে যীশু নাম হৃদয় খুলে বল,
(যীশু নাম হৃদয় খুলে বল)

১ রাজার রাজা, প্রভুর প্রভু, স্বর্গে যিনি ছিল,
সে এই নরকযোগ্য নরের তরে, এ ভবে আইল।

২ দীন বেশে দেশে দেশে ত্রাণধন বিলাইল,
দিল অন্ধকে নয়ন, কত মৃতকে বাঁচাইল।

৩ শত্রুর লাঞ্ছনা, কত যাতনা সহিল,
প্রভুর হস্তে বেঁধে, কোড়া মেরে মুখে থুথু দিল।

৪ দুজন চোরের মধ্যে তাঁরে ক্রুশে টাঙ্গাইল,
অধম সেনাগণে, বর্শা তাঁর কুক্ষিতে মারিল।

৫ আমার পাপের জন্য, যে জন প্রাণ দিল,
আমি তাঁরে ভালো না বাসিয়া, কারে বাসি ভালো।

৬ যাঁহার প্রেম-জলে মম, হৃদয় ভিজিল,
এই নীরস বৃক্ষেতে কত সুফল ফলিল।

৭ ওহে খ্রীষ্ট ভক্তদল শাস্ত্র লয়ে চল,
ও সেই প্রেমময়ের প্রেমের কথা, সর্ব দেশে বল।`},{id:124,title:"উদয় হও এই হৃদয় মাঝে",transliteration:"Uday Hao Ei Hridoy Majhe",composer:"প্রিয়নাথ বৈরাগী",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"wQRzq7LxT8",lyrics:`উদয় হও এই হৃদয় মাঝে,
একবার ঐরূপ দেখি নয়ন ভরে হে।

১ এস ত্রাতার মূর্তি ধরে, তুমি বিদ্ধ আছ ক্রুশোপরে হে,
তোমার মস্তকে কন্টকে, রক্তধারা ঝরে হে।

২ শ্রীমুখ তোমার রক্তমাখা, মুখে প্রহার চিহ্ন আছে আঁকা হে।
মুখে বিনতি-অগতি, পাপীগণের তরে হে।

৩ দুই হাত তুমি বিস্তার করে, বুঝি ডাকিতেছ পাপী নরে হে।
দুই হাত বাড়ায়ে, দাঁড়ায়ে আছ ক্রুশোপরে হে।

৪ কোণ পাষণ্ড দয়া শূন্য, তোমার বক্ষ করেছে বিদীর্ণ হে,
ঝরে রক্তজল অবিরল, দর দর ধারে হে।

৫ প্রেকে বিদ্ধ ঐ শ্রীচরণ, আমি হৃদ-মন্দিরে করব ধারণ হে,
রব চিরকাল হে দয়াল, ঐ চরণে পড়ে হে।

৬ যতদিন আছে এ জীবন, যেন সদা ঐ রূপ করি দর্শন হে,
এসে হও উদয় দয়াময় হৃদয় মন্দিরে হে।`},{id:125,title:"ভাল, এতটুকু ভালো, করেছ কি বলো?",transliteration:"Bhalo, Etotuku Bhalo, Korecho Ki Bolo?",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",youtubeId:"iFDD7v51V8g",lyrics:`ভাল, এতটুকু ভালো, করেছ কি বলো?

১ ক্রুশের উপরে, প্রেমসুধা ঝরে,
পাপী তাপী ওরে, চল ত্বরা করে।

২ পর্বত কিরীটে রক্তধারা ছোটে,
বিদ্ধ ক্রুশকাষ্ঠে কাঁটার মুকুটে।

৩ পিপাসায় মরে সেই ত্রাতা ওরে,
নদীজল ধারা সবই যাঁর করে।

৪ বর্শা মারা বুকে দেখেছ কি ওঁকে,
কত প্রেমসুধা ঝরিছে অলখে?

৫ সোনার দেহ ভরে কত রক্ত ঝরে,
কালভেরী শিরে ঐ ক্রুশ 'পরে।

৬ ঈশ্বর পুত্র হয়ে ওহে ত্রাণ-রবি,
ক্রুশ মৃত্যুসহ তুমি মোদের সবই।`},{id:126,title:"এপথে শুধুই নিবিড় বেদনা",transliteration:"Epothe Shudhui Nibiro Bedona",composer:"মানিক নাথ (১৯৭৫)",category:"দুঃখভোগ, ক্রুশীয় মৃত্যু",lyrics:`এপথে শুধুই নিবিড় বেদনা, এ পথে অশ্রুঢালা,
এপথে রয়েছে অসহ যাতনা, এপথে অনেক জ্বালা।
কালভেরী পথে! কালভেরী পথে! কালভেরী পথে!

১ এপথে নেইকো ফুলদল ঝরা, এপথে ব্যথার কন্টক ভরা,
এপথে চলিলে কণ্ঠে দুলিবে, আঁখি জলে গাঁথা মালা।
কালভেরী পথে! কালভেরী পথে! কালভেরী পথে!

অন্তরা
এপথে রোদন শোনা যায় জানি, এপথে রক্তরেখা,
এপথে বিলাপ সকরুণ ধ্বনি, এপথে মৃত্যুলেখা।
কালভেরী পথে! কালভেরী পথে! কালভেরী পথে!

২ এপথে আমার প্রভু গেছে চলে, এপথে মহান মরণের কোলে,
এপথে আমিও যাব ক্রুশতলে, তুলে নিয়ে দুঃখ-ডালা।
কালভেরী পথে! কালভেরী পথে! কালভেরী পথে!`},{id:127,title:"আজ মহা পরিত্রাণ ভাই",transliteration:"Aj Moha Poritran Bhai",composer:"ইউসুফ বিশ্বাস",category:"পুনরুত্থান",youtubeId:"kgJxxMWX7zI",lyrics:`আজ মহা পরিত্রাণ ভাই, আজ মহা পরিত্রাণ,
যীশু উঠেছেন দেখ, পাপীরে করিতে ত্রাণ।

১ চেয়ে দেখ কবর পানে, যীশুর দেহ নাই সেখানে,
(শুধু) বস্ত্রগুলি পড়ে আছে, দূতে করে সাক্ষ্য দান।

২ বিশ্বাসী যদিও মরে, তবু সে উঠিবে পরে,
(ও ভাই) মৃত্যুঞ্জয়ী, যীশু সেই সত্যের চিরপ্রমাণ।

৩ যীশু আগে স্বর্গে গিয়ে, স্বর্গ দুয়ার দিলেন খুলে,
(আমরা) যাব যাব স্বর্গে যাব, যীশুর রক্তে পেয়ে ত্রাণ।

৪ নেচে নেচে তালে তালে, সবে মিলে বাহু তুলে,
(এখন) জয় যীশু জয় যীশু বলে, কর তাঁহার গুণকীর্তন।`},{id:128,title:"এস সবে গাহি, বিজয় গান",transliteration:"Eso Sobe Gahi, Bijoy Gan",composer:"বীনা দত্ত",category:"পুনরুত্থান",lyrics:`এস সবে গাহি, বিজয় গান।
মরণজয়ী যীশু রাজার জয় জয় গান।

১ মৃত্যুর বাঁধন ছিন্ন হল, রুদ্ধ কবর খুলে গেল,
যীশু মৃত্যুঞ্জয়ী, উঠিলেন আজি,
জয়োল্লাসে গাহি জয় গান। যীশু রাজার জয় জয় গান।

২ মুক্তি সাধন পূর্ণ হল, পাপী মানব মুক্তি পেল,
মৃত্যু পরাভূত, স্বর্গদ্বার মুক্ত,
পেয়ে অভয় তাই গাহি গান। যীশু রাজার জয় জয় গান।

৩ বাজিয়ে তূরী মোরে নিতে, আসবেন পুনঃ ধরামাঝে,
পূজিতে এস তাঁরে, ভক্তগণ সাথে,
স্তুতি প্রতাপের গাহি গান। যীশু রাজার জয় জয় গান।`},{id:129,title:"মুক্ত কণ্ঠে গাহিছে ভক্ত",transliteration:"Mukto Konthe Gahiche Bhokto",composer:"মানিক নাথ (১৯৬৭)",category:"পুনরুত্থান",youtubeId:"Kg9Z2mCyw6M",lyrics:`মুক্ত কণ্ঠে গাহিছে ভক্ত, জীবিত যীশুর গান।
সেই সঙ্গীতে, ভরে উঠে আজি, বিশ্বজনের প্রাণ।

১ রিক্ত কবর খোলা শিলাদ্বার, মৃত্যুঞ্জয়ী নেই সেথা আর,
সম্মুখে ঐ ক্রুশে হত প্রভু, রয়েছে বিদ্যমান।

অন্তরা
বিশ্বাসী যারা তাদের নয়ন,
নিত্য যীশুর পায় দরশন।

২ উত্থিত প্রভু গৌরবময়, মৃত্যু মেনেছে মহাপরাজয়,
শাস্ত্রের বাক্য সফল করেছেন, চিরজীবি মহীয়ান।`},{id:130,title:"মৃত্যু বিজয়ী, খ্রীষ্ট যীশুর জয়গান",transliteration:"Mrityu Bijoyi, Khristo Jishur Joygan",composer:"মানিক নাথ (১৯৬৮)",category:"পুনরুত্থান",lyrics:`মৃত্যু বিজয়ী, খ্রীষ্ট যীশুর জয়গান মোরা গাই।
উত্থিত প্রভু সমাধি হইতে মৃতদের মাঝে নাই।
জয়, জয়, জয় — জয়, জয়, জয়।

১ মর্ত্যের বুকে পুলক ছন্দ, পাতকী চিত্তে মহা-আনন্দ,
জীবিত যীশুর গৌরব গীতি, দিকে দিকে জাগে তাই।

অন্তরা
নেত্র মেলিয়া দেখি দেহে তাঁর,
ক্রুশের চিহ্ন কত যাতনার।

২ খ্রীষ্টের বাণী হয়েছে পূর্ণ, মরণ গর্ব দলিত চূর্ণ,
আঁধারের শেষে, জগতের জ্যোতি, দেখিতে যে আজি পাই।`},{id:131,title:"মৃত্যুকে যীশু করেছেন জয়",transliteration:"Mrityuke Jishu Korechen Joy",composer:"মানিক নাথ",category:"পুনরুত্থান",lyrics:`মৃত্যুকে যীশু করেছেন জয়, সমাধি দুয়ার খোলা,
জীবিত প্রভুর বন্দনা গানে, প্রাণে, প্রাণে আনে দোলা।

১ সফল হয়েছে শাস্ত্রের বাণী, কবরে প্রভুর নেই দেহখানি,
আলোকের কাছে আঁধারের পরাজয়, যায় না তো কভু ভোলা।

অন্তরা
শাশ্বত প্রভুর মহিমা অপার,
বিশ্বাসী জনে করিছে প্রচার।

২ মরণ বিজয়ী খ্রীষ্টের তরে, গাহিছে সবাই সুমধুর স্বরে।
দিকে দিকে তাই, জয়ধ্বনি সনে আজ, সুরের লহরী তোলা।`},{id:132,title:"আজি গানে গানে গাইব যীশুর জয়",transliteration:"Aji Gane Gane Gaibo Jishur Joy",category:"পুনরুত্থান",youtubeId:"fzIU9rS5QYM",lyrics:`আজি গানে গানে গাইব যীশুর জয়।
ক্রুশের ব্যথা সয়ে, মৃত্যুকে জয় করে, হলেন চিরবিজয়ী।
আর ভয় নাই ভয় নাই, খ্রীষ্ট মৃত্যুঞ্জয়ী!

১ মৃত্যুর ছায়া তোমায় পারে নি ধরে, রাখতে ভীষণ ঐ কবরে,
নিজ মহিমায়, উঠলেন তিনি, সব মন্দ জয় করে। আর ভয়....

অন্তরা
শয়তান নিশ্চিত ভেবেছিল, এই বুঝি শেষ সব ফুরিয়ে গেল,
না, না, না, সব শেষ নয়।

২ মৃত্যুর পরে আছে পুনরুত্থান, শয়তান চিরতরে মানল যে হার,
এস সবে আজ, গাই যীশুর জয়, হৃদয় খোল প্রাণভরে।`},{id:133,title:"জয় জয় মৃত্যুঞ্জয় প্রভু যীশু",transliteration:"Joy Joy Mrityunjoy Probu Jishu",composer:"লক্ষ্মীনারায়ণ দাস",category:"পুনরুত্থান",lyrics:`জয় জয় মৃত্যুঞ্জয় প্রভু যীশু, হে পতিত-পাবন।
পতিত-পাবন অধম তারণ, পতিত-পাবন কাঙ্গাল শরণ।

১ তুমি পাপিকুলে উদ্ধারিতে, সহিলে মরণ, (দয়াময় হে)
তুমি কন্টক মুকুট শিরে ক'রেছ ধারণ।

২ তুমি অপার পাপ-সাগরে, পাপীর তরে, (প্রেমময় হে)
তুমি প্রায়শ্চিত্ত পুণ্য-সেতু ক'রেছ স্থাপন।

৩ তুমি প্রেম-ধন বিতরণে, দীনগণে, (দীননাথ হে)
তুমি চিরসুখী করিয়াছ ওহে দয়াবান।

৪ তুমি নিজ বাক্য প্রচারিতে, আসি জগতে, (প্রেমময় হে)
তুমি পাপী তাপী করগ্রাহী করেছ গ্রহণ।

৫ তুমি বলিরূপ উপহারে, ক্রুশোপরে, (দয়াময় হে)
তুমি পাপী-ত্রাণ হেতু রক্ত করেছ সেচন।`},{id:134,title:"সবে বল যীশুর জয়",transliteration:"Sobe Bolo Jishur Joy",composer:"অমৃতলাল নাথ",category:"পুনরুত্থান",lyrics:`সবে বল যীশুর জয়, যত দিন দেহে প্রাণ রয়।

১ কাঁপায়ে মেদিনী, স্বরগ পাতাল, সুগভীর জয় নাদে,
স্থাবর জঙ্গম, ভূধর সাগর, এক-তানে সবে গাও, যীশু জয়।

২ যাঁহার করুণা স্বরগ কবাট, দুরন্ত কলুষহারী,
ক্রুশ কাষ্ঠ যাঁর মহিমা গরিমা,
ঘরে ঘরে গাও তাঁরে যীশু জয়।

৩ মরণ যাতনা, পরলোক ভয়, যে জন সদা সংহারে,
সবে মিলে তাঁরে, মাতি প্রেমানন্দে,
প্রশংস বলে যীশু মৃত্যুঞ্জয়।

৪ কাঁপুক দ্যাবল, শুনুক বিদল, দেখুক স্বরগ-দূত,
নরক যোগ্য মানব-নিকর, গাহিছে পেয়ে ত্রাণ যীশু জয়।`},{id:135,title:"কি মহানন্দ উপস্থিত",transliteration:"Ki Mohanondo Uposthito",composer:"বিজয় নাথ সরকার",category:"পুনরুত্থান",youtubeId:"bS7wlR4r33s",lyrics:`১ কি মহানন্দ উপস্থিত, কি জয় যীশুর উত্থানে,
পাপ অন্ধকার হয় অন্তর্হিত, কাল নিশি অবসানে।

ধুয়া
হাল্লেলুইয়া, বল জয়! যীশু হইলেন মৃত্যুঞ্জয়!
পাপীর জন্য ত্রাণোদয়, ধন্য ধন্য ধন্য।

২ প্রভাতী তারা প্রকাশ পায়, প্রভুর পুনরুত্থানে,
ঐ ত্রাণ-সূর্য দেখা যায়, তাঁহার স্বর্গারোহণে।

৩ তায় গেল মৃত্যুর অধিকার, কি শান্তি ত্রিভুবনে,
আর খোলা হইল স্বর্গ-দ্বার, আনন্দ পাপীর মনে।

৪ ঐ স্বর্গে দূতগণে গায়, পুণ্য পুণ্য পুণ্য!
আর প্রতিধ্বনি এ ধরায়, ধন্য ধন্য ধন্য।`},{id:136,title:"অদ্য যীশু উঠিলেন",transliteration:"Odya Jishu Uthilen",composer:"জন জেসম উইট ব্রেট",category:"পুনরুত্থান",youtubeId:"TipbnBL-io4",lyrics:`১ অদ্য যীশু উঠিলেন, — হাল্লেলুইয়া!
ইহা কেমন শুভদিন, — হাল্লেলুইয়া!
খ্রীষ্টের আত্ম বলিদান, — হাল্লেলুইয়া!
সাধে মোদের পরিত্রাণ, — হাল্লেলুইয়া!

২ আইস আমরা হৃষ্ট হই, — হাল্লেলুইয়া!
স্বর্গ রাজ্যের কীর্ত্তি গাই, — হাল্লেলুইয়া!
ক্রুশে যিনি মরিলেন, — হাল্লেলুইয়া!
তিনি নিত্য জীবন দেন, — হাল্লেলুইয়া!

৩ আহ্লাদ কর ভক্তগণ, — হাল্লেলুইয়া!
খ্রীষ্টের নামে সর্ব্বক্ষণ, — হাল্লেলুইয়া!
মৃত্যুছায়া হইল নাশ, — হাল্লেলুইয়া!
জীবন দীপ্তি পায় প্রকাশ, — হাল্লেলুইয়া!

৪ আমরা যেন সর্ব্বদাই, — হাল্লেলুইয়া!
যীশুর অনুগামী রই, — হাল্লেলুইয়া!
শেষে মৃত্যু করে জয়, — হাল্লেলুইয়া!
হইয়া উঠি তেজোময়, — হাল্লেলুইয়া!`},{id:137,title:"খ্রীষ্টবর আসছেন ব'লে",transliteration:"Khristobor Ashchen Bole",composer:"শ্রীপৎ মণ্ডল (১৮৯০)",category:"পুনঃ আগমন",lyrics:`খ্রীষ্টবর আসছেন ব'লে, কুতূহলে, রঙ্গ ফেলে সবাই চল।

১ ঐ শুন গুড় গুড় করি বাজছে তূরী,
কী মধুরই শোভে আলো,
অদূরে দিচ্ছেন দেখা, প্রাণের সখা,
ব'সে থাকা আর কী ভাল?

২ নিভবে না কোন মতে, সধূম শলতে,
ভাঙ্গবে না হে থ্যাঁৎলা নল,
আর যারা পরিশ্রান্ত, ভারাক্রান্ত,
বিশ্রাম পাবে আর বল।

৩ ল'য়ে সব তৈল বাতি, দিবারাতি,
নিরন্তর অন্তরে জ্বাল,
তবে সেই বরের সাথে, নিয়ম মতে,
বিবাহেতে হবে মিল।

৪ খেদেতে চক্ষের ধারা, ফেলছে যারা,
মুছবেন তাদের আঁখির জল,
অন্তরের ময়লা কালি, ধুয়ে ফেলি,
জ্বালিয়ে দিবেন শান্তির আলো।`},{id:138,title:"আসবেন প্রভু মেঘরথে",transliteration:"Ashben Probhu Meghrothe",composer:"মানিক নাথ",category:"পুনঃ আগমন",lyrics:`আসবেন প্রভু মেঘরথে, আবার ফিরে ধরাতলে,
মহাতূরী-ধ্বনি সহ, পাঠাবেন দূত দলে দলে।

১ রবি-শশী, গ্রহ-তারা, নভে হবে জ্যোতি হারা,
বিলাপকারী মানবেরা, দেখবে তখন কুতূহলে।

২ হানাহানি হিংসা-দ্বেষে, ভরে যাবে ভুবনখানি,
মহামারি ভূকম্পনে, ধ্বংস হবে জগৎ জানি।

৩ পাপী-তাপী ত্রাণকামি, হও গো প্রভুর অনুগামী,
তাঁরই আগমনের তরে, জেগে থাক প্রতি পলে।`},{id:139,title:"জেগে থাক, বলেন প্রভু",transliteration:"Jege Thako Bolen Probhu",composer:"আর. পি. গ্রীভস্ (১৮৮০)",category:"পুনঃ আগমন",lyrics:`১ জেগে থাক, বলেন প্রভু, কর সদা প্রার্থনা,
কেহ জানিবে না কভু, আমার গুপ্ত মন্ত্রণা,
নিশি যোগে চোরে যেমন, কাটিবারে ঘরে সিঁদ,
হঠাৎ আইসে, আমি তেমন, হঠাৎ হইব উপস্থিত।

২ দশটির মধ্যে পাঁচটির মাত্র ছিল সত্য বুদ্ধি জ্ঞান,
সত্য পাঁচটির ছিল পাত্র, কিন্তু তৈলের অকুলান,
অনেকে আহুত বটে, অল্পই কিন্তু মনোনীত,
পাছে সেরূপ দশা ঘটে, প্রদীপ রাখ প্রজ্বলিত।

৩ যেন নাহি থাকি ভ্রান্ত, প্রাণটি যেন না হারাই,
অর্ধেক পথে শ্রান্ত ক্লান্ত, যেন নিদ্রা নাহি যাই,
ওহে প্রভু, সেই কারণ চেতন রাখ আমারে,
আত্মার দ্বারা কর শাসন, অঞ্জন দাও মোর চক্ষুতে।`},{id:140,title:"ভাঙ্গিবে ভাঙ্গিবে ভাঙ্গিবে এবার",transliteration:"Bhangibe Bhangibe Bhangibe Ebar",composer:"প্রিয়নাথ বৈরাগী",category:"পুনঃ আগমন",lyrics:`ভাঙ্গিবে ভাঙ্গিবে ভাঙ্গিবে এবার, এই শয়তানের দুর্গ ভয়ঙ্কর,
মহা ভূমিকম্প হবে ভবে, ভেঙ্গে যাবে ভেঙ্গে যাবে,
পাপ দুর্গ রবে নাক আর।

১ এই দুর্গে কত শত জন, আবদ্ধ মরারই মতন,
সতত করিছে ক্রন্দন, তারা আসিবে বাহিরে আবার।

২ মুক্তিধন নিয়া দু'হাতে, যীশু ঐ নীলাকাশ পথে,
আসিছেন সোনারি রথে, ঐ যে উড়িছে পতাকা তাঁহার।

৩ জয়ধ্বনি কর সকলে অগ্রসর হও সবলে,
ঐ ভেঙ্গে পড়ে ভূতলে, পড়ে শয়তানের দুর্গেরি প্রাকার।`},{id:141,title:"পাপের কারণ কর ক্রন্দন",transliteration:"Paper Karon Koro Krondon",composer:"মধুসূদন সরকার (১৮৯২)",category:"পুনঃ আগমন",lyrics:`পাপের কারণ কর ক্রন্দন, (তুমি) আর অচেতন থেক না।
তোমার হৃদয় মাঝে পাপ পুষে, গোপন করে রেখো না,
(শেষে ভাল হবে না)।

১ এমন এক দিন আসিবে, হৃদয় কবাট খুলে যাবে,
গুপ্ত বিষয় ব্যক্ত হবে, চাপা কিছু রবে না।

২ পাপীর সেদিন ভয়ঙ্কর, বলবে গিরি গায়ে পড়,
(বলবে) পৰ্ব্বতগণ চেপে ধর, যাতনা আর সহে না।

৩ বলেন প্রভু দয়া ক'রে, পাপী যে পাপেতে মরে,
(তাতে) প্রীতি নাহি মোর অন্তরে, পাপীর মরণ চাহি না।

৪ এ সুসময় আর হবে না, কাঁদিলেও আর পাবে না,
(তুমি) পেয়ে অনেক চেতনা, তবু পাপ ছাড়িলে না।

৫ নীনবীবাসীর মত, এখন হও খেদান্বিত,
(হও) চট পরে ভস্মে শায়িত, বল আর পাপ করব না।`},{id:142,title:"আসিতেছেন ঈশ্বর নন্দন",transliteration:"Ashitechen Ishwar Nondon",category:"পুনঃ আগমন",lyrics:`আসিতেছেন ঈশ্বর নন্দন চড়ি মেঘ-রথে সদলে।
সবে প্রস্তুত হও, প্রস্তুত হও, প্রস্তুত হও (তোমরা) সকলে।

১ হবে ভীষণ তূরীধ্বনি, জেগে উঠবে সব মৃত প্রাণী,
রূপান্তর হবে এ ধরণী, শয়তান বন্ধিবে শৃঙ্খলে।

২ মহামারি যুদ্ধ হচ্ছে, দুর্ভিক্ষে লোক মারা যাচ্ছে,
মহাভূমিকম্প দেখা দিচ্ছে, জ্যান্ত পচ্ছে সকলে।

৩ উঠ উঠ জেগে থাক, ঘুমাইবার আর সময় নাইকো,
সবে এক দৃষ্টে চেয়ে থাক, বিশ্বাসে বাহু তুলে।

৪ নির্বুদ্ধির মত হয়ে, ধন সম্পত্তি টাকা পেয়ে,
এখন রয়েছ মায়ায় ভুলে, উত্তর দিবে কি বলে।

৫ যে জন ধর্মের ছদ্মবেশী, জগতের সুখ অভিলাষী,
সেও হবে নিশ্চয় দোষী, শ্রীযীশুর বিচারকালে।

৬ সুবুদ্ধির মত হয়ে, প্রার্থনায় থাক জাগিয়ে,
যেন হৃদয়ের নাথ আসিয়ে, প্রস্তুত দেখেন সকলে।

৭ বিশ্বস্ত যে দাস হইবে, পাঁচ তোরা সে দশ করিবে,
যীশু অক্ষয় মুকুট মাথায় দিয়ে, বসাবেন নিয়ে কোলে।`},{id:143,title:"শেষের সে দিবস ভয়ঙ্কর",transliteration:"Shesher Se Dibosh Bhoyonkor",composer:"মধুসূদন সরকার",category:"পুনঃ আগমন",lyrics:`শেষের সে দিবস ভয়ঙ্কর, ভেবে দেখ একবার।
দূতগণ সাথে, যীশু মেঘরথে,
আসিয়া মর্ত্যেতে করিবেন বিচার।

১ স্মরণ পুস্তক তখন খোলা যাবে,
গুপ্ত বিষয় যত প্রকাশিত হবে, (সকলে দেখিবে)
(তখন) ভণ্ড সাধু যত, হইবে দূষিত,
(ও পাপী) আজন্মের মত, করবে হাহাকার।

২ গত পাপ যত হইবে স্মরণ,
পাপানলে হৃদি জ্বলিবে তখন, (অনিবার হুতাশন)
(বলবেন) যাও নরকেতে, শয়তানের সাথে,
(ও পাপী) তোমার জন্যেতে এই অধিকার।

৩ এস আমার ভক্ত, বস আমার দলে,
দুঃখের শান্তি ভোগ কর এই স্থলে, (তোমরা সকলে)
দূরে গেছে ক্লেশ, নাহি দুঃখ লেশ,
(আমার) অঙ্গীকৃত দেশ, কর অধিকার।`},{id:144,title:"জাগোরে জাগোরে জাগোরে",transliteration:"Jagore Jagore Jagore",composer:"বিনয় কুমার বিশ্বাস",category:"পুনঃ আগমন",lyrics:`জাগোরে, জাগোরে, জাগোরে,
জাগো, জাগো জাগোরে, খ্রীষ্টীয়ান ভাই।
দিন তোর গেল চলে মিছা মিছি ধুলা খেলে,
কাজ কর ত্বরা করে বেলা বেশী নাই।

১ বাইবেল হাতে নিয়ে চলে এসো যে,
মুক্তির বারতা পায়নি কে,
বল তার কাছে গিয়ে বাইবেল দেখিয়ে
ত্বরা প্রভু আসিবেন শাস্ত্রেতে পাই।

২ নোহের কালে ছিল ভ্রষ্ট ধরা,
প্লাবনে ডুবে মরে সব যে তারা,
যীশুর আগমনকালে, ধরা যাবে পাপে জ্বলে
অগ্নি ও গন্ধকে, পুড়ে হবে ছাই।

৩ খ্রীষ্টের আগমন অতি নিকটে
বাইবেলে যাহা আছে তাহা যে ঘটে,
দুর্ভিক্ষ মহামারী, যুদ্ধ ভুরি ভুরি,
বাঁচাতে প্রাণ আয় যীশুর ঠাঁই।`},{id:145,title:"এ পৃথিবীর লোক চিন্তা কর রে",transliteration:"E Prithibir Lok Chinta Koro Re",category:"পুনঃ আগমন",lyrics:`এ পৃথিবীর লোক চিন্তা কর রে,
যীশু যখন আসবে তোমরা কি করিবে রে।

১ সমুদ্রেরই জল যেমন বয়ে চলে যায়,
তোমাদেরই জীবন তেমনি চলে যায়।

২ পাঁচ কুমারীর মত তোমরা ঘুমিয়ে পড়ো না,
দরজা কবে বন্ধ হবে যেতে পারবে না।

৩ বিশ্বাসী সব যাবে চলে কেউ তো রবে না,
অবিশ্বাসী থাকবে পড়ে তারা যাবে না।

৪ আমরা সবাই যাব চলে স্বর্গেরই পথে,
বাইবেল বলে তোমরা তখন বিলাপ করিবে।`},{id:146,title:"কি সুখের আশ্বাস যীশু আমার(Blessed Assurance)",transliteration:"Ki Sukher Ashwash Jishu Amar",composer:"ফ্যানি জে. ক্রসবি (১৮৭৩)",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ কি সুখের আশ্বাস—যীশু আমার।
আঃ কি গৌরবের আস্বাদ চমৎকার।
অংশীদার ত্রাণের, ক্রীত তাঁহার,
আত্মাতে জাত, রক্তে ধৌত আর।

ধুয়া
এই মোর কাহিনী, এই আমার গান,
সারাদিন করি, তাঁর স্তুতি ও গান।

২ পূর্ণ সমর্পণ, পূর্ণ উল্লাস, স্বর্গীয় দর্শন চক্ষে বিকাশ,
ঊর্ধ্ব ধাম হইতে আনে দূতগণ,
করুণার ধ্বনি প্রেমের গুঞ্জন।

৩ পূর্ণ পরিত্রাণ, পূর্ণ বিশ্রাম, প্রভুতে লিপ্ত, সৌভাগ্যবান।
জাগি প্রতীক্ষায়, ঊর্ধ্বে তাকাই,
তাঁর পুণ্যে পুণ্য, প্রেমে হারাই।`},{id:147,title:"হে মহা শিল্পী তোমারি সুষমা",transliteration:"He Moha Shilpi Tomari Sushoma",composer:"মানিক নাথ",category:"প্রার্থনা ও সমর্পণ",lyrics:`হে মহা শিল্পী, তোমারি সুষমা, আকাশ মাটি ও জলে,
তব লাবণ্য ওগো রূপকার, ছড়ালে ভুবন তলে।

১ আলোর মাধুরী দূর নভোনীলে,
সাতরঙ্গা ছবি মেঘে এঁকে দিলে,
শিশিরের কণা পত্রে ও তৃণে,
তব রূপকথা বলে।

অস্তরা
সরসীর নীরে, মৃদু সমীরণে, রূপালী জ্যোৎস্না দোলে।
পরম স্রষ্টা! তোমারি সৃষ্টি, অপরূপ করে তোলে।

২ পাখীর কণ্ঠে মধুপের তানে, উপল-মধুর ঝরনার গানে।
চিরসুন্দর তব পরিচয়, তরুলতা ফুলোফলে।`},{id:148,title:"সিদ্ধ হোক ইচ্ছা নাথ তোমারি(Have thine own way Lord)",transliteration:"Siddho Hok Iccha Nath Tomari",composer:"এডিলেড এ. পোলার্ড (১৯০৭)",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ 
সিদ্ধ হোক ইচ্ছা নাথ তোমারি,
তুমি তো কুমোর, আমি মাটি,
গঠ আমাকে, তব ইচ্ছায়, আছি অপেক্ষায় নত নীরব।

২ সিদ্ধ হোক ইচ্ছা নাথ তোমারি,
হের মোর দশা প্রভু আজি,
ধৌত কর, তুষার-শুভ্র, তব সকাশে হই নত।

৩ সিদ্ধ হোক ইচ্ছা নাথ তোমারি, চূর্ণ-বিচূর্ণ হ’লাম আমি,
সকল শক্তির আধার তুমি, কর আরোগ্য স্পর্শে তব।

৪ সিদ্ধ হোক ইচ্ছা নাথ তোমারি, তব শক্তিতে আমায় ধর,
দেখুক সবাই আমার মাঝে, খ্রীষ্ট কেবলি সদাই আছেন।`},{id:149,title:"আমি তোমার নাথ, আছি চিরকাল (I am Thine Oh Lord)",transliteration:"Ami Tomar Nath Achi Chirokal",composer:"ফ্যানি জে. ক্রসবি (১৮৭৫)",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ আমি তোমার নাথ, আছি চিরকাল, তোমা ছাড়া কারো নই,
থাকি বিশ্বাসে, তব সন্নিধান, বাসনা এ নিয়তই।

ধুয়া
আমায় ডাক, ডাক, ডাক,
যীশু হে, ক্রুশের আরও সন্নিধান,
দেহ আমায়, আমায়, আমায়
প্রভু হে, তব কুক্ষিদেশে স্থান।

২ অনুগ্রহরূপ তৈলে আমারে, অভিষিক্ত কর নাথ,
তোমার পবিত্র পরিচর্যাতে, থাকি যেন দিন রাত।

৩ প্রার্থনাতে পাই কত আনন্দ, যখন শুনি তব রব,
প্রাণের বন্ধু প্রায় শুনেছেন সদাই, আমার কাতরোক্তি সব।

৪ তব সুগভীর প্রেমের মহিমা, বুঝে সাধ্য আছে কার?
বুদ্ধির অতীত, উচ্চ স্বর্গসুখ, বর্ণনা নাহিক তার।

৫ যবে যাব নাথ, স্বর্গ কাননে, মৃত্যু- নদী পরপার,
তখন বুঝিব, প্রেমের মাহাত্ম্য, স্বর্গ-সুখ কি চমৎকার!`},{id:150,title:"প্রার্থনা মোর তব কাছে প্রভু",transliteration:"Prarthona Mor Tobo Kache Probhu",composer:"মানিক নাথ (১৯৭২)",category:"প্রার্থনা ও সমর্পণ",lyrics:`প্রার্থনা মোর তব কাছে প্রভু, করি আজ নিবেদন,
পরশে তোমার শুচি হোক মম, ধূলিময় তনু মন।

১ লুকানো আমার পাপ অভিলাষ,
মুছে দিয়ে মোর, প্রাণে কর বাস,
হও প্রভু তুমি চিরতরে মম, সবচেয়ে প্রিয়জন।

অন্তরা
পৃথিবীর এই বন্ধুর পথে, বন্ধু হয়ে গো থাক,
সাথে, সাথে, রয়ে তব প্রেম আঁখি, মোর পানে সদা রাখ।

২ নূতন জীবন, পেতে আমি চাই,
তাইতো প্রভুগো, তোমাকে জানাই,
নব চেতনার শুভ আগমনে, মুছে যাক পুরাতন।`},{id:151,title:"আমায় তুমি ডেকেছ প্রভু তোমার কাজে",transliteration:"Amay Tumi Dekhecho Probhu Tomar Kaje",composer:"নির্মল পাণ্ডে (১৯৬৭)",category:"প্রার্থনা ও সমর্পণ",lyrics:`আমায় তুমি ডেকেছ প্রভু তোমার কাজে,
অন্তরে মোর তাই এত গান, তাই এত সুর বাজে।

১ তোমারি লাগিয়া ছিল কত কাজ,
ছিল নাকো শুধু মম অবকাশ।
স্মরি সেই কথা ওগো মহারাজ, চিত্ত ভরিছে লাজে।

অন্তরা
লজ্জা আমার ঢেকে দাও আজি, মহাকরুণায় তব,
জীবনের পথে দাও মোর সাথে, আশ্বাস বাণী নব।

২ শতভুল করে চাহি নাকো আর,
বাড়াতে বৃথাই বোঝা আপনার,
অকৃতি অধমে লওগো এবার, তোমার কাজের মাঝে।`},{id:152,title:"করুণানিধান দাও করুণা",transliteration:"Korunanidhan Dao Koruna",composer:"রাজেন্দ্রলাল মুখোপাধ্যায় (১৮৯২)",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ যীশু থাক, শান্তি রাখ, শয়তানের পথ রুদ্ধ করে;
মান অভিমান, সব ছাড়িলাম, তব আত্মা পাবার তরে।
আমার পালক, করে আলোক, থাক এ হৃদয় মাঝারে,
তোমার আমি, বাঁধ আমায়, মধুমাখা প্রেমডোরে।
    
২ সদাকালে, নেত্রজলে, কাঁদাবে কে আর আমারে?
পায়ে ধরি, যীশু আমায়, দূতগণ ল'য়ে থাক ঘেরে।

৩ নামের গুণ প্রতিদিন, শিখাও তব ভাষা মোরে,
নূতন প্রার্থনা শিখাও, গান করিব ঘরে ঘরে।`},{id:153,title:"ক্রুশের কাছে রাখ হে(Jesus keep me near the Cross)",transliteration:"Crusher Kache Rakho He",composer:"নৃপাল চন্দ্র বিশ্বাস",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ ক্রুশের কাছে রাখ হে, যীশু নিত্য আমায়;
বহুমূল্য স্বাস্থ্যকর স্রোতঃ বহে তথায়।

ধুয়া
ক্রুশেতে, ক্রুশেতে শ্লাঘার বিষয় আমার;
তাঁরই গুণে নির্ভয়ে, যাব নদীর ওপার।

২ ক্রুশের কাছে পাইল, প্রেম ও দয়া আমায়;
তথায় প্রভাত তারাটি, আলো দিল আমায়।

৩ ক্রুশের কাছে রহিলাম, দেখাও শোভা আমায়,
রাখ তাবৎ পথে নাথ! তার ছায়াতে আমায়।

৪ ক্রুশের কাছে জাগিব, বিশ্বাস, প্রেম, আশায়,
যাবৎ নাহি পৌঁছিব, স্বর্গ-কূলে সবায়।`},{id:154,title:"বরষ আশীষ-বারি",transliteration:"Borosho Ashish-bari",category:"প্রার্থনা ও সমর্পণ",composer:"রসময় বিশ্বাস (১৯৪৭)",lyrics:`বরষ আশীষ-বারি,
(আজি) অবিরত ধারে যীশু সবার উপরি।

১ কি উপহার দিব আজি গুণধাম,
(এই) এনেছি ভগন-চিত, লহ পাপহারী।

২ জ্বাল প্রেম-অগ্নি, সকল হৃদয়ে,
(সবে) পর সেবা তরে যেন প্রাণ দিতে পারি।

৩ তব বলে কর সবে বলবান,
(মোরা) জীবন-সংগ্রামে যেন জয়ী হতে পারি।

৪ পূর্ণ কর সবে পবিত্র আত্মায়,
(যেন) ভারতেতে তব প্রেমে মাতাইতে পারি।`},{id:155,title:"তুমি আলোময়, আলো দাও প্রভু",transliteration:"Tumi Alomoy, Alo Dao Prabhu",composer:"কল্যাণ ব্যানার্জী (১৯৮০)",category:"প্রার্থনা ও সমর্পণ",lyrics:`তুমি আলোময়, আলো দাও প্রভু, আঁধারের কর লয়,
তুমি অনন্ত, অসীম-অনাদি, তুমি সত্যময়।

১ তোমার করুণা ধারা, আনে শান্তি তাপিত প্রাণে,
আনে আনন্দ নির্ঝর,
তুমি ঈশ্বর, তুমি অক্ষয়, তুমি চির-সহায়।

অন্তরা
জীবন জলের প্রবাহ তুমি, সিক্ত কর আমায়,
ঊষর প্রাণে সরসতা আনো, পরম করুণাময়।

২ তোমার প্রেমের দানে, চিত্ত আমার পূর্ণ,
আমি মগ্ন তোমার ধ্যানে,
তুমি যে জীবন, তুমি প্রেমময়, তুমি আমার জয়।`},{id:156,title:"ব্যথিতেরে কর — শান্তি দান",transliteration:"Byathitere Kor — Shanti Dan",composer:"রুবেল সরকার",category:"প্রার্থনা ও সমর্পণ",lyrics:`ব্যথিতেরে কর — শান্তি দান
এসে পাপী তোমার দ্বারে, চাহে জুড়াইতে তাপিত পরাণ।

১ পাপ পীড়ায় জর্জরিত, ভগ্নদেহ, ভগ্নচিত্ত
ভব ভয়ে অভিভূত পাপী, দিশেহারা হত জ্ঞান।

২ নয়নের জল মুছাইতে মনের দুঃখ ঘুচাইতে,
কে আর আছে এ জগতে, মিছে বন্ধুবান্ধব ধন ও মান।

৩ তুমি বিনে জগত্রাতা; কে বুঝে ব্যথিতের ব্যথা?
তোমার কোলে রেখে মাথা, কর সকল জ্বালার অবসান।

৪ সকল পাপ আজ কর মোচন, করে তোমার রক্ত সেচন;
তোমার দয়ায় পেয়ে জীবন, পাপী গাবে তোমার গুণগান।

৫ তোমার কীর্তি ভূ-মণ্ডলে গাবে ভেসে চোখের জলে,
রেখে তোমার চরণতলে বাঁধা দেহ-আত্মা মন ও প্রাণ।`},{id:157,title:"তুমি পথ, তুমি জীবন, তুমি সত্যময়!",transliteration:"Tumi Poth, Tumi Jibon, Tumi Sotyomoy!",composer:"মানিক নাথ (১৯৬৮)",category:"প্রার্থনা ও সমর্পণ",lyrics:`তুমি পথ, তুমি জীবন, তুমি সত্যময়!
মুক্তিদাতা তুমি পাতকীর, তুমি যীশু চির-আশ্রয়।

১ মিথ্যা সে শুধু আঁধারের মতো, লুকায়ে রাখে যে সকলই সতত,
জগতের জ্যোতি তোমারি আলোকে, কর তারে তুমি লয়।

অন্তরা
তোমারি বাক্য শাশ্বত প্রভু,
বিশ্বাসী জন ভোলে না তা কভু।

২ নিত্য নিয়ত তব প্রেমবাণী, পাপীর পরাণে, আশা দেয় আনি,
ভূলোকে, দ্যুলোকে, তোমারি মহিমা, যুগে, যুগে জেগে রয়।`},{id:158,title:"যীশুকে সব করি অর্পণ(All to Jesus I surrender)",transliteration:"Jishu Ke Sob Kori Orpon",composer:"জুডসন ডব্লিউ. ভ্যান ডিভেন্টার (১৮৯৬)",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ যীশুকে সব করি অর্পণ, স্বেচ্ছায় সকল করি দান,
প্রেম ও বিশ্বাসে এ জীবন, কাটাই তাঁহার সন্নিধান।

ধুয়া
সব করি অর্পণ, সব করি অর্পণ,
সর্বস্ব হে ধন্য ত্রাতঃ, করি সমর্পণ।

২ যীশুকে সব করি অর্পণ, প্রণমী তাঁর শ্রীচরণ,
ভবের সুখ দিলাম বিসর্জন, নাথ আমায় কর গ্রহণ।

৩ যীশুকে সব করি অর্পণ, করুন পূর্ণ অধিকার,
করুক আত্মা সাক্ষ্য প্রদান, তিনি মোর, আমি তাঁহার।

৪ যীশুকে সব করি অর্পণ, তাঁহায় করি আত্ম দান,
শক্তি, প্রেম করুণ বিতরণ, করুন তাঁহার আশীষ দান।

৫ যীশুকে সব করি অর্পণ, বুঝিতেছি কাজ আত্মার,
পূর্ণ মুক্তির কি আনন্দ! হোক জয় জয়কার নাম তাঁহার।`},{id:159,title:"মোর প্রাণ মন, তোমাকেই প্রভু, করেছি সমর্পণ",transliteration:"Mor Pran Mon, Tomakei Prabhu, Korechi Somorpon",composer:"মানিক নাথ (১৯৬৯)",category:"প্রার্থনা ও সমর্পণ",lyrics:`মোর প্রাণ মন, তোমাকেই প্রভু, করেছি সমর্পণ,
তুমি এস বস, আলো কর মম, হৃদয়-সিংহাসন।

১ তুমি এলে যবে, অমানিশা মোর, দেখিবে নয়ন উজ্জ্বল ভোর,
শ্রবণ আমার শুনিবে তোমার, মধুর সম্ভাষণ।

অন্তরা
এ জীবন মম, আজি হতে প্রভু, হবে তব অনুগামী,
আর কোন দিন, ওগো প্রিয়তম, ভুলে নাহি যাব আমি।

২ মিছে পথে পথে ঘুরিব না তাই, তব কাছে প্রভু আশ্রয় চাই। তোমার অভয় চরণে আমারে, রাখিও অনুক্ষণ।`},{id:160,title:"আমার রাখাল কভু ঘুমান না",transliteration:"Amar Rakhal Kobhu Ghuman Na",composer:"মধুসূদন সরকার (১৮৯৬)",category:"প্রার্থনা ও সমর্পণ",lyrics:`আমার রাখাল কভু ঘুমান না,
আমার আর কিসের ভাবনা।

১ তিনি তৃণ ভূষিত স্থানে চরাণ, হে—
আমার অসুসার আর হইবে না।

২ আমি সর্ব্বশক্তিমানের মেষ, হে—
কেহ কেড়ে নিতে পারবে না।

৩ আমার চতুর্দিকে অগ্নি প্রাচীর, হে—
কেন্দুয়া ছুঁইতে পারবে না।

৪ আমার নাম ধরে ডাকেন সদা, হে—
আমি আর কারো রব শুনব না।

৫ তিনি রোগ শোক সঙ্কট কালে, হে—
সদা করেন আমায় সান্ত্বনা।

৬ যিনি নিজ রক্তে কিনিয়াছেন, হে—
তাঁরে কখনও ছাড়িব না।`},{id:161,title:"এনেছি আজ হৃদয়খানি তোমার পায়ে দিতে",transliteration:"Enechi Aj Hridoykhani Tomar Paye Dite",composer:"বিজয় সাহা",category:"প্রার্থনা ও সমর্পণ",lyrics:`এনেছি আজ হৃদয়খানি তোমার পায়ে দিতে,
তোমার প্রেমের পরশমণি, পরাণ ভরে নিতে।

১ আমার গানের মাল্যখানি, আমার বীণার সুরধ্বনি,
বাজবে শুধু তোমার লাগি, ধরার আঙ্গিনাতে।

অন্তরা
 নয়নে মোর রইবে তুমি, দূর হবে আঁধার,
তুমি প্রভু জীবন জ্যোতি, আলোর পারাবার।

২ দীনের আশা পূর্ণ কর, ওগো প্রভু মনোহর,
চাই গো যীশু জীবনে মোর, তোমারে লভিতে।`},{id:162,title:"পাপিষ্ঠ আমি নাই আশা",transliteration:"Papishtho Ami Nai Asha",composer:"শার্লোট এলিয়েট",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ পাপিষ্ঠ আমি নাই আশা, ঐ রক্তে আমার ভরসা,
মোর দীন-হীন প্রাণে দাও আশা, হে যীশু, লও আমায়-আমায়।

২ পাপিষ্ঠ আমি, লও আমায়, দাও শান্তি, ক্ষমা এ সময়,
বিশ্বাস করি সেই প্রতিজ্ঞায়, হে যীশু, লও আমায়-আমায়।

৩ দুর্ভাগা পাপী, বুদ্ধি নাই, সুখ, শান্তি, দৃষ্টি আমি পাই,
তোমাতে আছে যা' যা' চাই। হে যীশু, লও আমায়-আমায়।

৪ পরাধীন ছিলাম তোমার বল, ঘুচাইল আমার পাপ-শৃঙ্খল,
এখন তোমার তোমার কেবল, হে যীশু, লও আমায়-আমায়।

৫ পাপ-বন্ধন হইতে মুক্ত হই, তোমারি প্রেমে করতে জয়,
এই জগৎ যেন তোমার হয়, হে যীশু, লও আমায়-আমায়।`},{id:163,title:"অনুতাপের অশ্রু যখন পড়বে ঝরে জানি",transliteration:"Onutaper Oshru Jakhon Podbe jhore Jani",category:"প্রার্থনা ও সমর্পণ",composer:"মানিক নাথ",lyrics:`অনুতাপের অশ্রু যখন পড়বে ঝরে জানি,
পরশ তোমার মিলবে প্রভু, শুনব প্রেমের বাণী।

১ দিনে দিনে হল যে পাপ জমা,
মহান উদার করবে মোরে ক্ষমা,
আঁধার জীবন মাঝে এসে, জ্বালবে প্রদীপখানি।

অন্তরা

ধীরে ধীরে চোখের জলে, চরণ তব ছুঁয়ে,
বলব “প্রভু মোর কালিমা লও রুধিরে ধুয়ে”।

২ বারে বারে গেছি তোমায় ভুলে,
পরাণ-দুয়ার দেইনি মম খুলে,
এবার বরণ করে নেব নয়ন ধারা আনি।`},{id:164,title:"নিঃসম্বল আমি(Just as I am)",transliteration:"Nihshombol Ami",composer:"শার্লট এলিয়ট (১৮৩৫)",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ নিঃসম্বল আমি—কিছুই নাই, তোমারই রক্তে আশা পাই,
তাই সাহস করি তোমার ঠাঁই, খ্রীষ্ট, আমি আসি হে!

২ অশুচি আমি—সক্ষম নই, যে নিজের পুণ্যে ধার্ম্মিক হই,
নাই উপায় তোমার রক্ত বই, খ্রীষ্ট, আমি আসি হে!

৩ বিপন্ন আমি—বাহ্যে ভয়, অন্তরে সংগ্রাম নিত্য হয়,
সকাতর প্রাণে এ সময়, খ্রীষ্ট, আমি আসি হে!

৪ দীন দুঃখী আমি—দৃষ্টিহীন, বল, বুদ্ধি জ্ঞানে বড়ই ক্ষীণ,
তাই হইলাম তব দয়াধীন, খ্রীষ্ট, আমি আসি হে!

৫ যে দশায় আমি—জান সব, তাই দেখালে প্রেম অসম্ভব,
তাই হইলাম তব দয়াধীন, খ্রীষ্ট, আমি আসি হে!

৬ ভারগ্রস্ত আমি—অতিশয়, প্রেম, তুমি কিন্তু শক্তিময়,
তাই পাইলাম শান্তি; গেল ভয়, খ্রীষ্ট, আমি আসি হে!`},{id:165,title:"তোমার ক্রুশের বেদন প্রভু",transliteration:"Tomar Crusher Bedon Prabhu",category:"প্রার্থনা ও সমর্পণ",lyrics:`তোমার ক্রুশের বেদন প্রভু, দাও আমারে দাও,
রক্তে তোমার ধুয়ে আমায়, খাঁটি করে নাও।

১ প্রভু আমার প্রাণের তরে, সইলে মরণ ক্রুশের প'রে,
সে প্রাণ সবাই পায় যেন গো, এই তো তুমি চাও।

অন্তরা
সবার তরে কালভেরীতে, ঢাললে রুধির ধারা,
সে রুধিরে ঘুচে সবার, পাপের জীবন কারা।

২ সে রক্তেতে যায় গো ওরে, পাপী যত নারী নরে,
তোমার কাছে এলে সবাই, সুখ যে তুমি পাও।`},{id:166,title:"তোমার কাছে লও-গো ডেকে আমায়",transliteration:"Tomar Kache Lao-go Deke Amay",composer:"",category:"প্রার্থনা ও সমর্পণ",lyrics:`তোমার কাছে লও-গো ডেকে আমায়,
ক্লান্তি আমার হরণ কর, তোমার স্নিগ্ধ ছায়ায়।

১ তোমার মধুর রবে, আমার প্রাণ যে শীতল হবে,
চির পথের দিশারী গো, জানবো শুধু তোমায়।

অন্তরা
তুমি পরম সাথী, যীশু তুমি সবার গতি,
সব হারাদের তুমি জীবন জ্যোতি।

২ তোমার চরণতলে, যেন প্রদীপ হয়ে জ্বলে,
আঁধার ভরা চিত্তখানি, তোমার মহিমায়।`},{id:167,title:"প্রভু, তোমায় আমি চাই",transliteration:"Prabhu, Tomay Ami Chai",composer:"",category:"প্রার্থনা ও সমর্পণ",lyrics:`প্রভু, তোমায় আমি চাই,
তুমি ছাড়া মুক্তিদাতা, আর তো কেহ নাই।

১ আমায় তুমি ভালবেসে, সইলে মৃত্যু অনায়াসে,
বইলে শিরে আমার তরে, যত পাপের দায়।

অন্তরা
অন্ধকারে ছিলাম পড়ে, পাপের ভীষণ কারাগারে,
জীবন আমার রুদ্ধ ছিল, ভয় ভাবনায়।

২ তোমার রক্তে শুচি করে, তুমি আমায় তুলেছ টেনে,
জীবন আমার ধন্য হল, তোমার করুণায়।`},{id:168,title:"অনেক দূরে সরে গেছি",transliteration:"Onek Dure Sore Gechi",composer:"মানিক নাথ",category:"প্রার্থনা ও সমর্পণ",lyrics:`অনেক দূরে সরে গেছি, প্রভু তোমার থেকে,
এবার আমায় আপন করে, লও-না কাছে ডেকে।

১ পাপের পথে সারাবেলা, করেছি হায় কতই খেলা,
কালিমা মোর সযতনে, রেখেছি যে ঢেকে।

অন্তরা
ধোও প্রভু এই মলিনতা, তোমার শোণিত দিয়ে,
চাই গো প্রিয় পরশ পেতে, শুচি জীবন নিয়ে।

২ তোমার মহাপ্রেমের ডোরে, বেঁধে আবার রাখ মোরে,
মনে আমার তব ছবি, দাওনা শুধু এঁকে।`},{id:169,title:"ভগ্ন-প্রাণে তুমি প্রভু, আশার প্রদীপ জ্বালো",transliteration:"Bhogno-Prane Tumi Prabhu, Ashar Prodip Jalo",composer:"",category:"প্রার্থনা ও সমর্পণ",lyrics:`ভগ্ন-প্রাণে তুমি প্রভু, আশার প্রদীপ জ্বালো,
ছিন্ন জীবন মলিন হৃদয়, তুমি আজ শুচি করো।

এতদিন তোমায় ভালোবাসিনি,
এতদিন তোমাকে কাছে ডাকিনি,
আজ অনুতাপের অশ্রুজলে, অর্ঘ্য তুমি গ্রহণ করো।

আজ তোমার ক্রুশের পথে চলতে যে চাই,
তোমার ক্রুশের কথা বলতে যে চাই।
চিরশাশ্বত তুমি জানি প্রভু, তুমি আশীর্বাদ করো।`},{id:170,title:"দয়া কর আমার উপর",transliteration:"Doya Koro Amar Upor",composer:"উইলিয়াম কেরী",category:"প্রার্থনা ও সমর্পণ",lyrics:`১ দয়া কর আমার উপর, ওহে যীশু দয়াবান,
তুমি নরের নিস্তারকর্তা, তুমি সর্ব্বশক্তিমান।
শুন যীশু, শুন যীশু, শুন আমার নিবেদন।

২ আমি বড় অপরাধী, আমার পাপের বড় ভার,
মর্ত্যে কারো শক্তি নাহি, আমার নিস্তার করিবার।
যীশু ছাড়া কারো নাহি শক্তি, নিস্তার করিবার।

৩ শুনিয়াছি মঙ্গল আখ্যান, শুনিয়াছি তোমার নাম,
তুমি কতো দুঃখ পাইয়া করিয়াছ পরিত্রাণ।
বিশ্বের রক্ষা করনার্থে, করিয়াছ জীবন দান।

৪ এখন মঙ্গল সংবাদ শুনি, সর্ব্বসৃষ্টি ভরসা পায়।
আমি আইসি অন্যে বলি, রক্ষা হয় খ্রীষ্টের কৃপায়।
পাপীজন খ্রীষ্টের নামে, নিবেদিলে রক্ষা পায়।`},{id:171,title:"সব সঁপেছি তোমার পায়ে",transliteration:"Sob Sonpechi Tomar Paye",composer:"নির্মল পাণ্ডে",category:"প্রার্থনা ও সমর্পণ",lyrics:`সব সঁপেছি তোমার পায়ে, আর কিছু মোর নাই,
এবার শুধু অভয় পদের শরণ টুকু চাই।
১ ক্লান্ত আমার দিনের শেষে, সম্মুখে মোর দাঁড়াও এসে,
জ্যোতির্ম্ময়ের রূপে তোমার জীবন ফিরে পাই।

অন্তরা
যে পথ গেছে কালভেরীতে, তোমার ক্রুশের তলে,
সে পথ খুঁজে পাব, বল কোন সাধনার বলে?

২ অন্তরে বাহিরে আমার, দাও ঘুচিয়ে সকল আঁধার,
নয়ন ভরে তোমায় দেখে, ধন্য হয়ে যাই।`},{id:172,title:"রাখ নামায়ে তোমার প্রাণের বোঝা",transliteration:"Rakho Namaye Tomar Praner Bojha",category:"প্রার্থনা ও সমর্পণ",composer:"প্রিয়নাথ বৈরাগী",lyrics:`রাখ নামায়ে তোমার প্রাণের বোঝা,
দয়াল প্রভু যীশুর চরণে;
যিনি তোমার পাপের সাজা, সহিয়াছেন নিজ প্রাণে।

১ দুঃখ দুর্ভাবনা যত, জাগে প্রাণে অবিরত, রজনী দিনে,
দুশ্চিন্তা উদ্বেগ উৎকণ্ঠা, যাহা কিছু আছে মনে।

২ যত শোক যত বেদনা, করে প্রাণে আনাগোনা, নীরব চরণে,
অবিচার অত্যাচার যত, সহিতেছ অকারণে।

৩ প্রলোভন আর পাপ পরীক্ষা হ'তে
তিনি করেন রক্ষা, আশ্রিত জনে,
বলো তাঁরে হৃদয় খুলে, রেখো না কিছুই গোপনে।

৪ ব্যথী তিনি সকল ব্যথার, শ্রোতা তিনি
সকল কথার, সকল স্থানে,
ব্যথিতের বন্ধু আর এমন, পাবে না এই ত্রিভুবনে।

৫ জানাও তাঁরে অভাব তোমার, তাঁর কাছে
আছে প্রতিকার, নিশ্চিত জেনে,
পাবে মুক্তি, পাবে শান্তি, তোমার অশান্ত জীবনে।`},{id:173,title:"কিছুই না রহুক প্রভু",transliteration:"Kichui Na Rohuk Probhu",category:"প্রার্থনা ও সমর্পণ",composer:"জয়নাথ অধিকারী",lyrics:`কিছুই না রহুক প্রভু, কিছুই না রহুক,
তোমার আমার মাঝে, (আর) কিছুই না রহুক।

১ (আমায়) দেখাও তব গৌরব, টান হে নিকটে তব,
শুনাও তব প্রেমের রব, কিছুই না রহুক।

২ (আমি) যেন তোমার মৃদুস্বর, শুনিতে পাই নিরন্তর,
তাই জগতের কলস্বর, কিছুই না রহুক।

৩ (আমার) ভকতি প্রীতি সম্বল, প্রার্থনা, কি চক্ষুর জল,
এ সবের অহঙ্কার, কিছুই না রহুক।

৪ (মনে) সন্দেহ কি অবিশ্বাস, চিন্তা ভীতি কিম্বা ত্রাস,
আলস্য কি অবহেলা, কিছুই না রহুক।

৫ (তুমি) ধর গো আমার নয়ন, তব রূপ করাও দরশন,
তোমার সৌন্দর্য্য বৈ আর, কিছুই না রহুক।

৬ (তুমি) হও আমার উচ্চ আশা, হও আমার ভালোবাসা,
যীশু বৈ মোর ত্রিভুবনে, কিছুই না রহুক।`},{id:174,title:"হৃদয়ে জ্বালাও যীশু",transliteration:"Hridoye Jwalao Jishu",category:"প্রার্থনা ও সমর্পণ",composer:"বিন্দুনাথ সরকার (১৮৯৪)",lyrics:`হৃদয়ে জ্বালাও যীশু তব অনলে,
জ্বালাও জ্বালাও প্রাণ দগ্ধ কর এ প্রাণ,
পাপ তৃণ কুটা সব নাশ সমূলে।

১ ভগ্ন কর হৃদয়, চূর্ণ কর আমায়,
ধ্বংস কর হে দয়াময়,
ফুকারি তব অনলে, হৃদয়ের অন্তস্থলে,
প্রবেশ করছে যীশু, তব প্রেমবলে।

২ অগ্নিময় দেহ-ধ্যান, অগ্নিময় বাক্য জ্ঞান,
অগ্নিময় হউক আমার প্রাণ,
এসে অগ্নিময় রথে, প্রবেশ করছে চিতে,
জয় ঘোষি যীশু, তব দূত নরে মিলে।

৩ অনলে সুবর্ণরূপ, হায়! অতি অপরূপ।
সেই রূপ প্রদান আমায়,
অনলেতে খাঁটি কর, ওহে যীশু দয়াধার
এই চির নিবেদন, তব পদতলে।`},{id:175,title:"পিতা তোমার পাদপদ্মে",transliteration:"Pita Tomar Padopodme",composer:"প্রিয়নাথ বৈরাগী",category:"প্রার্থনা ও সমর্পণ",lyrics:`পিতা তোমার পাদপদ্মে মোরা রাখিলাম এই দান,
গ্রহণ কর নিজ গুণে চরণে দেও স্থান।

১ নিজ গুণে দিয়াছ সব এ সংসারে বিষয় বিভব,
ঘুচাইয়াছ সকল অভাব; করুণা নিদান!

২ পাঠাইয়াছ এ জগতে, নিজ পুত্র স্বর্গ হতে,
মোদের সবে মুক্তি দিতে, দিতে পরিত্রাণ।

৩ তোমার দয়া করে স্মরণ, ঐ পাদপদ্মে করি অর্পণ,
ক্ষুদ্র এই দান এ দেহ মন, এ আত্মা, এ প্রাণ।`},{id:176,title:"তুমি অধিষ্ঠিত হও",transliteration:"Tumi Odhisthito Hou",composer:"প্রিয়নাথ বৈরাগী",category:"প্রার্থনা ও সমর্পণ",lyrics:`তুমি অধিষ্ঠিত হও, এই গৃহে (সভায়) ঈশ্বর কুমার!
বিরাজ কর সবার প্রাণে, তুমি মূর্ত্তিমান হও হৃদয় সবার।

১ তোমার শান্তি রেখে মনে, যেন সবে নিশি দিনে,
থাকি ঐ শ্রীচরণধ্যানে,
সুখে দুঃখে চিরজীবন, থাকে অটল নির্ভর তোমার উপর।

২ দাও হে তোমার সরলতা, যেন তোমার দয়ার কথা,
চিরদিন প্রাণে রয় গাঁথা,
কৃতজ্ঞতা তোমার প্রতি, যেন সবার মনে রয় নিরন্তর।

৩ দেও সবারে শান্ত মতি, অহঙ্কার, হিংসা, কুমতি,
সংসারের ভাবনা ভীতি,
অমঙ্গল সব দূরে রাখ, যেন পায় না স্থান
এই গৃহের (সভার) মাঝার।

৪ চালাও তুমি সর্বজনে, তোমার প্রেমের আকর্ষণে,
আনন্দ নগরের পানে,
যেন পায় স্থান তোমার পায়ে, যখন
ভাঙ্গবে এ সংসারের বাজার।`},{id:177,title:"ঘরে যাও সঙ্গে লও",transliteration:"Ghore Jao Songe Lou",composer:"প্রেমানন্দ সরকার (১৮৯৩)",category:"প্রার্থনা ও সমর্পণ",lyrics:`ঘরে যাও, সঙ্গে লও, প্রিয় যীশুর হস্ত ধরে,
(প্রিয়) যীশু সহ গৃহবাসে, থাক প্রফুল্ল অন্তরে।

১ ঘটুক বিপদ, কিংবা সম্পদ, থেক যীশুর পদে পড়ে,
সুখের কথা, মনের ব্যথা, প্রাণ খুলে বল তাঁরে।

২ তব সুখে কিংবা দুঃখে, সর্বকালে পাবে তাঁরে,
দুঃখকালে, করে কোলে, সান্ত্বনা দিবেন তোমারে।

৩ যীশু সম করে প্রেম, এমন প্রেমিক নাই সংসারে,
সর্ব্বগুণ সাগর যীশু, যাও যাও লয়ে ঘরে।

৪ পিতার প্রেম, অনুপম, যীশুর কৃপা সহকারে,
আত্মার সাহায্য সদা, বর্ত্তুক তোমাদের উপরে।`},{id:178,title:"যীশুই মুক্তিদাতা",transliteration:"Jishui Muktidata",category:"প্রার্থনা ও সমর্পণ",lyrics:`যীশুই মুক্তিদাতা, পাপীর পরিত্রাতা,
দুঃখের এই ভুবনে, তিনিই শান্তিদাতা।
তাঁকে বরণ করে নাও, তাঁরে জীবন সঁপে দাও,
তব হৃদয় মাঝারে, তাঁকে আসন দিয়ে দাও।

১ অন্ধকারের বাঁধা, সব দূরে যাবে সরে;
শয়তানের বাঁধন ছিঁড়ে যাবে একনিমেষে।
আয় সবে মিলে গাই, তাঁর স্তুতি জয়গান।

২ আশার আলো জ্বালি, আজ আমাদের হৃদয়ে;
জীবন পথে চলি, সেই আলো হাতে নিয়ে।
জীবনের নতুন, সুর ও ছন্দ খুঁজে পাই।`},{id:179,title:"তোমাকে ভালোবাসা যায় না প্রভু",transliteration:"Tomake Bhalobasha Jaye Na Probhu",category:"প্রার্থনা ও সমর্পণ",lyrics:`তোমাকে ভালোবাসা যায় না প্রভু,
যদি মানুষকে আগে ভালোবাসতে না পারি।
তোমার সেবা, সে তো নয়গো সেবা,
যদি মানুষকে আগে সেবা করতে না পারি।

১ দাও গো খুলি, আমার অন্ধ আঁখি,
মানুষের মাঝে যেন তোমায় দেখি,
তোমাকে পাব বলে, দু-হাত বাড়িয়ে দিয়ে,
মানুষকে আগে কাছে টানতে পারি।

অন্তরা
তোমার রাজত্বে ক্ষুদ্রজনেরও,
কেউ যদি করে গো দয়া,
তোমাকেই সেবা করে, ধন্য হয়েছে সে,
পূর্ণ হয়েছে তার চাওয়া।

২ চেতনা জাগাক হৃদে তোমার বাণী,
মুছে যাক হিংসার অসহ গ্লানি,
তোমায় আপন করে, সবায় আপন ভাবে,
হৃদয় মাঝারে যেন রাখতে পারি।`},{id:180,title:"তোমার পথে আমি চলেছি",transliteration:"Tomar Pothe Ami Cholechi",composer:"দিলীপ মজুমদার",category:"প্রার্থনা ও সমর্পণ",lyrics:`তোমার পথে আমি চলেছি, আমার দুটি হাত ধর,
অন্ত বিহীন ভালবাসায়, হৃদয় আমার তুমি ভরো।

১ দুর্গম গিরি পথ প্রান্তে, মৃদু সমীরণে তুমি বও,
তিমির রাতে অন্ধকারে, আমায় উজ্জ্বল দীপ করো।

অন্তরা
নশ্বর পৃথিবীটা, বেঁধেছে আমায় মোহ জালে।
এমন জীবনে প্রভু, তোমার করুণা দিও ঢেলে।

২ মিলনের এই শুভ যাত্রায়, চিরসাথী হয়ে তুমি রও,
ঐ প্রেমের নিত্য ধারায়, আমায় সিক্ত তুমি করো।`},{id:181,title:"দিয়ে তব রক্ত",transliteration:"Diye Tobo Rokto",composer:"প্রিয়নাথ বৈরাগী",category:"প্রার্থনা ও সমর্পণ",lyrics:`দিয়ে তব রক্ত, কর মোরে ধৌত,
যে রক্ত স্রোতঃ বয়, কালভেরী শিখরে।
পাপ দেহ মোর, এ চিত্ত অন্তর,
নিজ হস্তে কর ধৌত ঐ রুধিরে।

১ যত অপরাধ করেছি জীবনে,
যত দোষে দোষী আছি ঐ চরণে;
যত অবাধ্যতা, বিদ্রোহ গোপনে,
করেছি পোষণ অন্তরে অন্তরে।

২ পাপে কলঙ্কিত, আমার এ জীবন,
অপবিত্র দেহ, কলুষিত মন;
তব রক্তে প্রভু, কর প্রক্ষালন,
চরণে মিনতি করি করজোড়ে।

৩ যুগে যুগে এসে পাপী-তাপী যত,
তব ক্রুশতলে হয়েছে পতিত;
তোমার ঐ শোণিতে, করে তুমি সিক্ত,
ধৌত পাপমুক্ত করেছ সবারে।

৪ দিও না ফিরায়ে আমারে অমনি,
কর ধৌত মম যত পাপগ্লানি;
ধর প্রভু মোরে, ধর হে এখনি,
ডুবাও আমারে ঐ রক্ত সাগরে।`},{id:182,title:"যীশুর কাছে যাইব",transliteration:"Jishur Kache Jaibo",category:"প্রার্থনা ও সমর্পণ",composer:"জে. পি. জোনস্ (১৯০০)",lyrics:`১ যীশুর কাছে যাইব, — আলোতে, আলোতে,
তাঁহার সঙ্গে চলিব, — প্রভুর আলোতে
পাপের ক্ষমা পাইব, — আলোতে, আলোতে,
পাপ সমস্ত ছাড়িব, — প্রভুর আলোতে।

ধূয়া
আমরা চলি আলোতে, আলোতে, আলোতে,
আমরা চলি আলোতে, প্রভুর আলোতে।

২ যীশুর কার্য্য করতে চাই, — আলোতে, আলোতে,
বল ও শক্তি আমি পাই, — প্রভুর আলোতে,
শয়তান কি আর করিবে? — আলোতে, আলোতে,
মোর কি নিকট আসিবে? — প্রভুর আলোতে।

৩ যখন মৃত্যু আসিবে, — আলোতে, আলোতে,
আমার ভয় না হইবে, — প্রভুর আলোতে,
স্বর্গে প্রবেশ করিব, — আলোতে, আলোতে,
চিরকাল থাকিব, — প্রভুর আলোতে।`},{id:183,title:"তোমার রক্ত কর হে সেচন",transliteration:"Tomar Rokto Koro He Sechon",composer:"প্রিয়নাথ বৈরাগী",category:"প্রার্থনা ও সমর্পণ",lyrics:`তোমার রক্ত কর হে সেচন,
যাতে সকল পাপ মোর হবে গো মোচন।
এসে ক্রুশতলে পাই যেন আজ, তোমার রক্তের অবগাহন।

১ কত মিথ্যা, কত ফাঁকি, মনের মাঝে আছে বাকি,
কত পাপ গোপনে রাখি, ভবে কাটাই এ জীবন,
সে সব ধুয়ে যাক আজ তোমার রক্তে,
ওহে যীশু পতিতপাবন।

২ সংসারের বাসনা যত, ধুয়ে যাক আজ জন্মের মত,
সকল উদ্বেগ হতে মুক্ত কর আমার এ জীবন।
ভবের আশঙ্কা ত্রাস, ভয় ভাবনা, সকলই কর প্রক্ষালন।

৩ অবিশ্বাস আর নৈরাশ্যময়, কলঙ্কিত আমার হৃদয়,
ধৌত কর হে দয়াময়, রক্ত করি বরিষণ।
কর বিমল আমার দেহ আত্মা, বিমল কর আমার এই মন।

৪ প্রেম বিনা মোর শুষ্ক এ প্রাণ, নীরস, কঠিন, পাষাণ সমান,
কোমল কর ঐ রক্তদান করে ঈশ্বর-নন্দন।
কর তোমার প্রেমের প্রেমিক মোরে, শ্রীচরণে এই নিবেদন।

৫ ক্রুশের তলে ঐ রুধিরে, অবগাহিত কর মোরে,
সফল কর মোর অন্তরে, তোমার ক্রুশীয় মরণ।
কর সফল তোমার অসীম দয়া, সফল কর আমার জীবন।`},{id:184,title:"তুমি জুড়ালে মোর তাপিত পরাণ",transliteration:"Tumi Jurale Mor Tapito Poran",composer:"প্রিয়নাথ বৈরাগী",category:"প্রার্থনা ও সমর্পণ",lyrics:`তুমি জুড়ালে মোর তাপিত পরাণ, পাপের ক্ষমা দিয়ে।
ধন্য হল অসার জীবন, তোমার দয়া পেয়ে।

১ কেটে গেল মনের আঁধার, এল জগৎ জুড়ে সুখের জোয়ার,
কি শুভদিন এল আমার, সারা জীবন ছেয়ে।

২ শুষ্ক মরু হল সিক্ত, হল পূর্ণ যাহা ছিল রিক্ত,
ক্ষুধার্তকে কল্পে তৃপ্ত, অমৃত বিলায়ে।

৩ ঘুচে গেল সকল তৃষা, আমার নিরাশ প্রাণে জাগে আশা,
প্রাণপাখী পেয়েছে বাসা, ঐ চরণের ছায়ে।

৪ কি আনন্দ এল প্রাণে, হৃদয় পূর্ণ আজি গুণগানে,
স্বর্গের শান্তি চরণ ধ্যানে, পেয়েছি হৃদয়ে।

৫ গাব সদা আনন্দ গান, রেখে ঐ চরণে বাঁধা এ প্রাণ,
রেখো মোরে হে দয়াবান, চিরদিন ঐ পায়ে।`},{id:185,title:"প্রিয় যীশু আমার",transliteration:"Priyo Jishu Amar",composer:"বিন্দুনাথ সরকার",category:"প্রার্থনা ও সমর্পণ",lyrics:`প্রিয় যীশু আমার, ধর আমায় ধর;
প্রিয় ত্রাতা শক্তিদাতা, শকতি বিতর।

১ দেও তোমার পবিত্রতা, পাপ জন্য ব্যাকুলতা,
পরীক্ষাতে সহিষ্ণুতা, দেও সেবাতে আনন্দ;
প্রার্থনাতে স্বাধীনতা দেও, আরো অশ্রুধার।

২ তব বাক্য বুঝিবরে, তব জ্ঞান দেও আমারে,
তব রূপ দেখিবারে, দেও নয়ন তোমার;
তব অনুগামী হতে, দেও চরণ তোমার।

৩ তোমার দুঃখের তরে, সদা অশ্রু দেও আমারে,
প্রেক শেল মনে করে হউক যাতনা অপার,
ত্রাণ জন্য হর্ষধ্বনি, দেও মুখেতে আমার।

৪ চির জয় কর দান, শত্রু হউক কম্পমান,
বিশ্বাস, প্রত্যাশা, প্রেম, হউক সতত উজ্জ্বল;
তব সনে থাকিবারে, দেও সদা ইচ্ছা মোর।`},{id:186,title:"প্রভু যীশু আমি শিশু",transliteration:"Probhu Jishu Ami Shishu",composer:"বিজয় নাথ সরকার (১৯০৫)",category:"প্রার্থনা ও সমর্পণ",lyrics:`প্রভু যীশু, আমি শিশু, তোমায় বড় ভালবাসি,
তোমার ইচ্ছা, মিলায়ে ইচ্ছা, চলব বলে সভায় আসি।

১ শাস্ত্র পাঠে, সভাস্থলে, উপাসনায়, সান্ডেস্কুলে,
নিত্য তোমায়, দেখতে সেথায়, মনে মনে হই প্রয়াসী।

২ সন্ধ্যা কিম্বা প্রাতঃকালে, বসব তোমার চরণতলে,
এই প্রতিজ্ঞা যীশুর আজ্ঞা, রক্ষা করব সুখে ভাসি।

৩ সভায় তোমার রব শুনিব, প্রার্থনা ও গান করিব,
ইহা ছাড়া কার্য দ্বারা, তোমার সাক্ষী হব আসি।`},{id:187,title:"প্রভু মোরে দয়া কর",transliteration:"Probhu More Doya Koro",category:"প্রার্থনা ও সমর্পণ",composer:"সুনীল দত্ত",lyrics:`প্রভু মোরে দয়া কর, তব দয়া চাই,
তুমি ছাড়া মুক্তিদাতা আর তো কেহ নাই।

১ দীনহীন পাপী অতি বাসনায় ভরা মতি,
তোমার করুণা বল, কেমনে গো পাই।

২ শুনেছি তোমার কাছে, কেহ ঘৃণ্য নয়,
প্রভু তুমি মোর প্রতি হওগো সদয়।

৩ তোমার ক্রুশের তলে, ভাসি আমি আঁখি জলে,
তোমার চরণে শুধু দাও মোরে ঠাঁই।`},{id:188,title:"পুণ্যেতে এই বেলা",transliteration:"Punnyete Ei Bela",composer:"রাজেন ফকির",category:"প্রার্থনা ও সমর্পণ",lyrics:`পুণ্যেতে এই বেলা, (যীশু) পূর্ণ কর হে হৃদয় থালা,
অধোমুখে ধরি চরণ, (কিছু) না হয় দাও পদ-ধুলা।

১ যীশু এই মনস্কাম, পাই যেন পরাক্রম,
মনের মত ক'রে তুল, (হব) গুরুর সমান চেলা।

২ ছাড়িব না কোন মতে, দিব না হে তোমায় যেতে,
শিখাও, যীশু ধরে হাতে, (স্বর্গ) দূতগণের খেলা।

৩ যেমন দূতে ডাকে তোমায় তেমন গান শুনাও আমায়,
গাব নাম প্রশংসা জয় (যীশু) যথা লোকের মেলা।`},{id:189,title:"যীশু পরিষ্কার কর আমারে",transliteration:"Jishu Porishkar Koro Amare",composer:"রামচরণ ঘোষ",category:"প্রার্থনা ও সমর্পণ",lyrics:`যীশু পরিষ্কার কর আমারে,
ধোওয়াও আমারে, আপন রুধিরে,
যে রুধির ক্ষরে কালভেরী পরে।

১ পাপেতে মলিন হইয়াছে মন, কৃষ্ণ বর্ণ তাহা হেরি সর্ব্বক্ষণ
কর কর নাথ, নিজ রক্ত দান,
যে রক্তেতে পাপীর সর্ব্ব পাপ হরে।

২ সংহারক দূত, আসিবে হে যবে,
আমারে ছুঁইতে কভু না পারিবে,
ত্যজিয়া আমারে অন্যত্র যাইবে, হেরে তব রক্ত মম অন্তরে।`},{id:190,title:"সঁপিনু সকলি যীশু চরণে",transliteration:"Sopinu Sokoli Jishu Chorone",composer:"যদুনাথ সোম",category:"প্রার্থনা ও সমর্পণ",lyrics:`সঁপিনু সকলি যীশু চরণে তব সাদরে,
তোমার ধন তোমায় দিয়া, সুখী হব অন্তরে।

১ লহ মম অভিমান, লহ মম প্রিয় মান,
লহ মম বিদ্যা জ্ঞান, তোমারি সেবার তরে।

২ লহ মম উচ্চ পদ, লহ মম জাতি মদ,
লহ মম হস্ত পদ, তোমারি সেবার তরে।

৩ লহ মম ধন জন, লহ মম পরিজন,
লহ মম প্রাণ ধন, তোমারি সেবার তরে।

৪ লহ মম ভালোবাসা, লহ মম উচ্চ আশা,
লহ সুখের লালসা, তোমারি সেবার তরে।`},{id:191,title:"প্রভু দাও সেই সুর",transliteration:"Probhu Dao Sei Sur",composer:"মানিক নাথ (১৯৭১)",category:"প্রার্থনা ও সমর্পণ",lyrics:`প্রভু, দাও সেই সুর কণ্ঠে আমার, প্রাণ ভরে গান গাইতে।
সে নয়ন দাও যে নয়নে পাই, তোমার মহিমা হেরিতে।

১ রাত্রিকে দিলে রক্তিম ভোর, দিবসেরে দিলে আলোক অঝোর,
সন্ধ্যাকে দিলে অরূপ মাধুরী,
আমি কি পারি না চাহিতে। (প্রভু)

অন্তরা
তব প্রেম ধারা, উথলি উঠিছে, তটিনীর তট রেখায়।
সাজালে আকাশ মণি মুক্তায়, মাথায় ইন্দু লেখা।

২ ফুলেরে দিয়েছ মধুর গন্ধ, বাতাসে দিয়েছ নূপুর ছন্দ,
পেয়েছে সাগর চির আনন্দ,
আমি কি কাঁদিব নিভৃতে। (প্রভু)`},{id:192,title:"এ পাপীর হৃদয়ে এস প্রভু",transliteration:"E Papir Hridoye Eso Probhu",composer:"",category:"প্রার্থনা ও সমর্পণ",lyrics:`এ পাপীর হৃদয়ে, এস প্রভু, জুড়াও মোর তপ্ত প্রাণ,
তুমি প্রভু, মোর অন্তরযামী,
প্রভু তোমা বিনা নাই মোর ত্রাণ।

১ ভালোবেসেছ তুমি, দিলাম না তার না তার দাম,
তবু তুমি দিয়েছ অশেষ কৃপা দান।
ধন্য প্রভু, তোমারি ভালোবাসা,
প্রভু তোমা বিনা নাই মোর ত্রাণ।

অন্তরা
সন্ধি করে ছিলে যে, তুমি মোর সনে,
সেই সন্ধি রাখিনি, পাপের কারণে।

২ আমার জীবনে আলো, জ্বেলে দাও প্রভু,
এবার থেকে হবো আমি তোমারি শুধু,
চলব শুধু তোমারই দেখানো পথে,
প্রভু তোমা বিনা নাই মোর ত্রাণ।`},{id:193,title:"যীশু দয়াময় তোমার নিজ গুণে",transliteration:"Jishu Doyamoy Tomar Nij Gune",composer:"অরুণোদয় ঘোষ",category:"প্রার্থনা ও সমর্পণ",lyrics:`যীশু দয়াময়, তোমার নিজ গুণে আজ দয়া কর মোরে।
আমার সকলই ভার তোমার উপর, অর্পণ করি তব করে।

১ ডাকি প্রভু হয়ে ব্যাকুল, তুমি রক্ষা কর এ নরকুল,
তুমি না রাখিলে এ কুল নরের নাহি কুল।
তুমি কুল রাখিতে এই অবনীতে।
প্রাণ দিয়েছ (নাথ) ঐ ক্রুশোপরে।

২ তুমি অনাথের নাথ, তুমি দিতে পার সত্য পথ;
তরাইয়াছ কত শত অধম পাপীরে।
একবার সেই মত আসি, যীশু মশীহ,
স্থান দান কর এই অধীনেরে।`},{id:194,title:"মোরা তোমার চরণ ধুয়ে দেব",transliteration:"Mora Tomar Choron Dhuye Debo",composer:"",category:"প্রার্থনা ও সমর্পণ",lyrics:`মোরা তোমার চরণ ধুয়ে দেব, দুই নয়নের জলে,
মোদের ক্ষমা করে দাও গো প্রভু, তোমার কোলে তুলে,
দুই নয়নের জলে।

১ তোমায় ছাড়া জীবন সাগর দিয়ে ছিলাম পাড়ি
পথের দিশা পেলাম নাকো জীর্ণ হল তরী,
মোরা ক্লান্ত হয়ে তোমার দ্বারে, এলাম সকল ফেলে।

২ পাপের মোহ টানছে মোদের সদাই পিছন পানে,
লোভের অনল জ্বলছে সদাই মোদের দেহ মনে।
বাঁচাও প্রভু মোদের জীবন তব রক্ত ঢেলে।`},{id:195,title:"প্রতিজ্ঞা করতে হবে",transliteration:"Protigya Korte Hobe",composer:"সুহাস সরকার (১৯৭৪)",category:"খ্রীষ্টিয় জীবন ও সাক্ষ্য",lyrics:`প্রতিজ্ঞা করতে হবে, প্রতিজ্ঞা মানতে হবে,
জীবনের যাত্রাপথে, প্রতিজ্ঞা মানতে হবে।

১ বিগত জীবনে যত শপথ ছিল, শিথিলতায়
তারা সবই বিফল হোল।
এসো নূতন প্রাণে যীশুরই চরণে,
প্রতিজ্ঞা করতে হবে, প্রতিজ্ঞা মানতে হবে।

২ অন্যায় করিব না, অন্যায় সহিব না,
হিংসা দ্বেষ বঞ্চনা সত্যের লাঞ্ছনা,
ভালো যে বাসতে হবে, এগিয়ে চলতে হবে,
জীবনের যাত্রাপথে, প্রতিজ্ঞা মানতে হবে।`},{id:196,title:"খ্রীষ্টের নামে শপথ কর",transliteration:"Khriste Name Shopath Koro",composer:"",category:"খ্রীষ্টিয় জীবন ও সাক্ষ্য",lyrics:`খ্রীষ্টের নামে শপথ কর, সোজা হয়ে মোরা দাঁড়াব,
ঝড়-ঝঞ্ঝার দুনিয়াতে মোরা নতুন প্রভাত রাঙাব।

১ কত গ্লানি আর কত বিদ্রূপবাণ, পঙ্গু জীবনে করে অপমান,
সংগ্রাম-ক্রুশ বহন করে, এই লাঞ্ছনা ঘুচাব। (ঘুচাব তাই)

অন্তরা
মিছে প্রার্থনা, মিছে উপাসনা,
নাহি যদি পায়, কেহ সান্ত্বনা।

২ যাব মোরা সেই দীপ নেভা ঘরে, যেথা বঞ্চিত হাহাকার করে।
সেই আঁধারেতে খ্রীষ্টের নামে আলোকের দ্যুতি ছড়াব। (ছড়াব তাই)`},{id:197,title:"মোরা গড়বো নূতন সমাজ",transliteration:"Mora Gorbo Nuton Somaj",composer:"অসীম সিনহা (১৯৮২)",category:"খ্রীষ্টিয় জীবন ও সাক্ষ্য",lyrics:`মোরা গড়বো নূতন সমাজ, গড়বো নূতন সমাজ,
থাকবে না সেখানে মলিনতা, থাকবে না সেখানে কলুষতা,
সে সমাজে—

১ যীশু রাজা সেখানে, রাজত্ব করিবেন,
আত্মদানে যিনি সবার ত্রাণ কার্য সাধিলেন।

২ পাপের কালিমা যত, ধুয়ে যাবে তাঁরই রক্তে,
অভয় বাণী এই যে তাঁর, ছাড়বো না কোন মতে।`},{id:198,title:"মোরা পেয়েছি ভাই যীশুর আলো",transliteration:"Mora Peyechi Bhai Jishur Alo",composer:"শুভ পণ্ডিত (১৯৭০)",category:"খ্রীষ্টিয় জীবন ও সাক্ষ্য",lyrics:`মোরা পেয়েছি ভাই যীশুর আলো সকল জনে,
মোদের মায়ায় ভরা দিশেহারা হৃদয় ও মনে।

১ সেই আলোর প্রভায় ঘুচেছে সব মনের আঁধার,
জেনেছি মোরা মুক্তি, প্রেম-শান্তি অপার।

অন্তরা
প্রিয় ঈশ-কুমার যীশু যে ভাই বিশ্বজ্যোতি,
তাঁর পুণ্য শিখায় আলোকিত সকল গতি।

২ মোদের হৃদয়কমল, দুলিছে পুলকে, গাহিছে জ্বালো
ভারতের প্রতি ঘরে আজি এই দিব্য আলো।`},{id:199,title:"কি শুভদিন হে প্রাণেশ্বর (O Happy Day)",transliteration:"Ki Shuvodin He Praneshwar",composer:"ফিলিপ ডড্রিজ (১৭৫৫)",category:"খ্রীষ্টিয় জীবন ও সাক্ষ্য",lyrics:`১ কি শুভদিন, হে প্রাণেশ্বর! যেদিনে (মোর) মন হইল স্থির,
বাসনা সব তোমার উপর, করিনু স্থাপন হইয়া ধীর।

ধুয়া
শুভদিন! শুভদিন! ধুলেন যীশু মোর পাপ যেদিন,
আর শিক্ষা দিলেন জাগিতে, প্রার্থনায় রত থাকিতে,
শুভদিন! শুভদিন! ধুলেন যীশু মোর পাপ যেদিন।

২ সে উল্লাসে মোর মন ও প্রাণ, তদ্দিনের কীর্ত্তি গায় বিস্তর,
তোমাকে সব করিয়া দান, আহ্লাদে নাচে মোর অন্তর।

৩ কি সুখের যোগ, মোর মানত সব, যদ্বারা মুদ্রাঙ্কিত হয়,
তায় ব্যস্ত হোক, এ হৃদে স্তব, ও সঙ্কীর্তন আনন্দময়।

৪ এ হইল স্থির যে আমি তাঁর, তিনি আমার আছেন নিশ্চয়,
যাবজ্জীবন রে মন আমার, বিভ্রান্ত রহ সব সময়।`},{id:200,title:"অগ্রসর হও আজি খ্রীষ্ট-সেনা সব (Onward Christian Soldiers)",transliteration:"Ogrshor Hou Aj Khristo-Sena Sob",composer:"সাবিন বেরিং-গোল্ড (১৮৬৪)",category:"খ্রীষ্টিয় জীবন ও সাক্ষ্য",lyrics:`১ অগ্রসর হও আজি খ্রীষ্ট-সেনা সব,
সবে মিলে আইস করি বিজয় রব।
কর খ্রীষ্টের নামে গৌরব সম্বোধন,
দূত ও নরে সবে মিলে কর সংকীর্ত্তন।

ধুয়া
অগ্রসর হও আজি খ্রীষ্ট-সেনা সব,
সবে মিলে আইস করি বিজয় রব।

২ প্রবল সেনা-তুল্য, খ্রীষ্টের মণ্ডলী,
ত্রাতার পদ-চিহ্নে সকলে চলি,
কেহ পৃথক নহি একাঙ্গ সকল,
একই আশা, একই সত্য, একই প্রেম-সম্বল।

৩ রাজ্য, সম্রাট, কিরীট, কত আসে যায়,
খ্রীষ্টের মণ্ডলী চির বৃদ্ধি পায়,
নরক-দ্বার না পারে পরাজিতে তায়,
খ্রীষ্টের এ প্রতিজ্ঞা দেখ মানে না বাধায়।`}],Db=[{id:201,title:"আবার গাও মিষ্টস্বরে গাও (Sing Them Over Again)",transliteration:"Abar Gao Mistoshore Gao (Sing Them Over Again)",composer:"ফিলিপ পি. ব্লিস (১৮৭৪)",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`১ আবার গাও, মিষ্টস্বরে গাও, জীবনদায়ী বাক্য।
তাহা আমায় আরও শিখাও, জীবনদায়ী বাক্য।
ঈশ্বরের ঐ উক্তি, শিখায় বিশ্বাস, ভক্তি।

ধুয়া
সুন্দর বাক্য! মধুর বাক্য! জীবনদায়ী বাক্য!

২ খ্রীষ্ট যীশু দেন মানব সবে, জীবনদায়ী বাক্য।
ও ভাই শুন প্রেমের রবে, জীবনদায়ী বাক্য।
দত্ত বিনা দামে, লওয়ায় স্বর্গধামে।

৩ কিবা শুভ সংবাদ ধ্বনি, জীবনদায়ী বাক্য।
ক্ষমা, শান্তি তাহে শুনি, জীবনদায়ী বাক্য।
যীশু জীবন দাতা, যীশু পরিত্রাতা।`},{id:202,title:"বাইবেল ভালবাসি, ঈশ্বর দত্ত বই",transliteration:"Bible Bhalobashi, Ishwar Dotto Boi",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`১ বাইবেল ভালবাসি, ঈশ্বর দত্ত বই,
যীশুর বিষয় বলে, তিনি স্বর্গের মই।

ধুয়া
বাইবেল! বাইবেল! বাইবেল ভালবাসি,
বাইবেল! বাইবেল! ঈশ্বর দত্ত বই।

২ যীশুর প্রেমের কথা, শাস্ত্রে লেখা ভাই,
ক্রুশে জীবন দিলেন, আমরা মুক্তি পাই।

৩ বাইবেল আমরা পড়ি, মনে রাখিব,
দিনে দিনে যীশুর, প্রেম দেখাইব।`},{id:203,title:"শপথ নিয়েছি আমরা, তোমার কথাই বলব",transliteration:"Shopath Niyechi Amra, Tomar Kothai Bolbo",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`শপথ নিয়েছি আমরা, তোমার কথাই বলব।
শপথ নিয়েছি আমরা, তোমার গান গাইব।
আর কোন পথে তো চলব না,
আর কোন কথা তো বলব না,
শুধু তোমার কথাই বলব।

১ এই পথে এসেছে মুক্তি, এই পথে এসেছে সান্ত্বনা,
এই পথে এগিয়ে যেতে যেতে, পিছন ফিরে আর চাইব না,
জীবন পথে যেতে যেতে, সুদূর পারে পাড়ি দিতে,
তোমার কথাই বলব।

২ পাপেরই পথ আমি ছেড়েছি, পাপের পথে আর যাব না,
যীশুই সত্য বলে জেনেছি, যীশুর চরণ আমি ছাড়ব না।
সুদূর পথে যেতে যেতে, সুদূর পারে পাড়ি দিতে,
ক্রুশের পথই ধরব।`},{id:204,title:"হরষিত মনে ভক্ত ক্রুশ কাঁধে লও",transliteration:"Horoshito Mone Bhokto Krush Kadhe Lao",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`হরষিত মনে ভক্ত ক্রুশ কাঁধে লও,
যে পথে গিয়েছেন যীশু, সে পথে যাও,
ফিরি সবার দ্বারে দ্বারে, ক্রুশ সঙ্গীত গাও।

১ অপূর্ব ক্রুশের কথা, সবারে শুনাও,
প্রেমময়ের প্রেমফল, পাপীরে বিলাও।

২ নিজে মাতি যীশুর প্রেমে, অপরে মাতাও,
আশাহীনে সযতনে, ক্রুশের কথা কও।

৩ ক্রুশে বিদ্ধ শান্তি রাজে, পাপীরে দেখাও,
ক্রুশে প্রাণ ক্রুশে ত্রাণ, ঘরে ঘরে গাও।`},{id:205,title:"ক্রুশের কাছে যাব, যেন ক্ষমা পাই",transliteration:"Krusher Kache Jabo, Jeno Khoma Pai",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`ক্রুশের কাছে যাব, যেন ক্ষমা পাই,
মহাপাপীর তরেও সেথায় আছে ঠাঁই।
সেই বিশ্রাম জলের ধারে, প্রভু ডাকেন বারে বারে,
পরিশ্রান্ত জনে, চল সেথা যাই।

অস্তরা
অনন্ত প্রেম লয়ে সেথা প্রভু জেগে রয়,
তাঁর মধুর পরশেতে, মরণবিতান হয়।
তাঁর ক্ষমার মাধুরীতে, হবে জীবন ভরে নিতে,
এমন পরম সাথী, কোথাও যে আর নাই।`},{id:206,title:"যীশু তোমায় ভালোবেসেছি, প্রভু তোমায় জীবন দিয়েছি",transliteration:"Jishu Tomay Bhalobeshechi, Probhu Tomay Jibon Diyechi",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`যীশু তোমায় ভালোবেসেছি, প্রভু তোমায় জীবন দিয়েছি,
আমি পাপের পথে আর ফিরব না কোনদিন।

১ আসে সম্মুখ পানে যদি তুফান ভারি,
জানি তোমার নামেতে পার হতে পারি,
আমি তোমারি নাম ধরে বেয়ে যাব, জীবন-তরণী চিরদিন।

২ রাখি তোমার চরণ দু'টি হৃদয় মাঝে,
পথ হারাই নাকো কভু সকাল-সাঁঝে,
জানি তোমার নামেতে পার হয়ে যাব, জীবন-সাগর এক দিন।

৩ যদি মরণ আমার কভু সামনে আসে,
আমি জানব তুমি তো প্রভু রয়েছ পাশে,
এমনি করে যেন পার হয়ে যাই, জীবনের বাকি ক'টা দিন।`},{id:207,title:"যীশুর প্রেমে যীশুর প্রেমে, সুখ ও শান্তি পাই",transliteration:"Jishur Preme Jishur Preme, Sukh O Shanti Pai",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`১ যীশুর প্রেমে যীশুর প্রেমে, সুখ ও শান্তি পাই,
পাশে থাকেন, দৃষ্টি রাখেন, জানি সর্বদাই।

ধুয়া
ভালোবাসেন, যীশু নাথ আমায়,
মনে মনে প্রতিক্ষণে, গাইলে প্রাণ জুড়ায়।

২ যীশুর বলে, যীশুর বলে, হৃদয় রক্ষা পায়,
তাঁকে যখন ডাকি তখন, দুঃখ দূরে যায়।

৩ যীশুর দয়া, যীশুর দয়া, তার তো সীমা নাই,
পড়ে গেলে ধরেন তুলে, পাপের ক্ষমা পাই।

৪ যীশুর ইচ্ছা, যীশুর ইচ্ছা, পালন করতে চাই,
প্রিয় ত্রাতা, জ্যেষ্ঠ ভ্রাতা, ভালোবাসি তাই।

৫ যীশুর সেবা, যীশুর সেবা, ভালো লাগে তাই,
সুযোগ পেলে, সুখী হয়ে, কার্য কাল কাটাই।

৬ যীশুর হৃদয়, যীশুর হৃদয়, ধারণ করতে চাই,
প্রার্থনাতে, শাস্ত্র-পাঠে, রত থাকি তাই।`},{id:208,title:"একটি পথের কথা জেনেছি",transliteration:"Ekti Pother Kotha Jenechi",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`একটি পথের কথা জেনেছি, সেই পথ কালভেরী,
একটি চিহ্ন খুঁজে পেয়েছি, সে আমার ক্রুশবেদি।

১ একটি আলোর নিশানা, আঁধারের করে লয়,
আনে নতুন চেতনা,
শুভ্র শিখা-সম সে নতুন চেতনা,
জীবন জ্যোতি বলে জেনেছি।

অস্তরা
একটি মহান প্রেরণা,
মিথ্যাকে করে জয় সত্যের হয় সূচনা।

২ একটি সে মহা-বলিদান, মৃত্যুর বুকে তোলে
জীবনের নতুন নিশান,
মৃত্যুঞ্জয়ী সেই, জীবিত খ্রীষ্টকে, পরিত্রাতা বলে জেনেছি।`},{id:209,title:"যীশুর জয়গান মোরা সকলে গাই",transliteration:"Jishur Joygan Mora Sokole Gai",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`যীশুর জয়গান মোরা সকলে গাই (২)
প্রাণভরে গেয়ে যেতে চাই, লজ্জা ভয় মোদের নাই।

১ পাপীর তরে প্রভু যীশু ক্রুশে দিলেন প্রাণ,
বিশ্বাসে যে গ্রহণ করে পায় সে পরিত্রাণ।
সে প্রেমের সীমা নাই, তার তুলনা নাই,
তাঁহারই জয়গান গেয়ে যাই, লজ্জা ভয় মোদের নাই।

২ যীশুর রক্তে শুচি হয়ে বাঁচতে যদি চাও,
লজ্জা মান ভুলে তাঁরে বরণ করে নাও।
সে প্রেমের সীমা নাই, তার তুলনা নাই,
তাঁহারই জয়গান গেয়ে যাই, লজ্জা ভয় মোদের নাই।`},{id:210,title:"সত্য পথে চলতে গিয়ে দুঃখ যদি আসে",transliteration:"Sotto Pothe Cholte Giye Dukho Jodi Ashe",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`সত্য পথে চলতে গিয়ে দুঃখ যদি আসে,
জানব তবু, দয়াল প্রভু, তুমি রবে পাশে।

১ কাজল মেঘে গগনখানি, পড়বে ছেয়ে যখন জানি,
উজল রবি জাগবে তখন, সুদূর মহাকাশে।

অস্তরা
চিত্ত আমার নিরাশ হয়ে ঝিমিয়ে কভু পড়ে,
আশার বাতি জ্বালবে প্রভু, তুমি মম তরে।

২ জীবনে মোর আঁধার রাতে, আলোর আশীষ লইব সাথে,
তোমায় স্মরি এগিয়ে যাব, গভীর আশ্বাসে।`},{id:211,title:"আমার জীবন বীণারে তুমি এমনি করে বাঁধ",transliteration:"Amar Jibon Binare Tumi Emni Kore Badh",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`আমার জীবন বীণারে তুমি এমনি করে বাঁধ,
যেন তোমারই সুর ঝঙ্কারে।
আমি বিশ্বমাঝে এ বীণা লয়ে,
সদা ফিরব সবার দ্বারে দ্বারে, মধুর তোমার গান গেয়ে—
তোমার ক্রুশের কথা প্রেম বারতা, বলব ডেকে সবারে,
যেন আমার মত অধম যে জন, পায় সে শুধু তোমারে।`},{id:212,title:"দীপ্তির সন্তান আমরা সকলে",transliteration:"Diptir Sontan Amra Sokole",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`দীপ্তির সন্তান আমরা সকলে,
ছুটে এস ভাইবোন আঁধার ফেলে,
উঠে এস প্রেমের আলো জ্বেলে, প্রেমের আলো জ্বেলে।

১ মানবের মুক্তির বারতা, খ্রীষ্টের মহা প্রেমের কথা।
ভারতের প্রতি ঘরে ঘরে আমরা ধরব তুলে।

২ দূর দিগন্তে আলো যেমন, আমাদের জীবন রাখব তেমন।
খ্রীষ্টের জ্যোতি হৃদয় মাঝে, আমরা রাখব জ্বেলে।`},{id:213,title:"পরিবর্তন নূতন জন্মের পরে",transliteration:"Poriborton Nuton Jonmer Pore",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`পরিবর্তন নূতন জন্মের পরে, (৩)
আমার পরিবর্তন হয়েছে।

১ যীশু আমার পাপের জন্য, (৩)
যীশু ক্রুশে মরিলেন।

২ যে বই পড়তাম এখন তা পড়ি না, (৩)
আমার পরিবর্তন হয়েছে।

৩ যে গান গাইতাম এখন তা গাহি না, (৩)
আমার পরিবর্তন হয়েছে।

৪ প্রভু যীশু শীঘ্রই আসবেন, (৩)
আমার পরিবর্তন হয়েছে।

৫ যীশুর জন্য আমি সাক্ষ্য দেব, (৩)
আমার পরিবর্তন হয়েছে।`},{id:214,title:"অন্ধ বরতীময় আমি — অন্ধই জন্মেছিলাম",transliteration:"Ondho Borotimoy Ami — Ondhoi Jonmechilam",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`অন্ধ বরতীময় আমি — অন্ধই জন্মেছিলাম,
যীশুর ছোঁয়ায় একদিন দৃষ্টি ফিরে পেলাম।
চারিদিকে ছিল অন্ধকার, যে দিকে আমি চাই,
আলো আঁধারের তফাৎ টুকু কোনদিন বুঝি নাই;
হঠাৎ কোমল হাতের পরশ চোখেতে আমি পেলাম।

১ রাজার পেয়াদা, যাজক ফরিশি, সকলে ডাকে আমায়,
কি করে দৃষ্টি ফিরায়ে দিয়াছে, সে কথা জানতে চায়।
বলিলাম আমি সভার মাঝারে, তাঁহাকে তো দেখি নাই,
বলেছিল যা তাইতো করেছি, দৃষ্টি পেয়েছি তাই।
শীলোতে গিয়ে ধুয়ে এসেছি, অন্ধ যা ছিলাম।

২ ছাড়লো না তারা নিয়ে গেল ধরে মহাসভার কাছে;
কী করে দৃষ্টি ফিরায়ে দিয়েছে, বল আমাদের কাছে,
হায়! হায়! একি ভীষণ বিপদ, কেন যে এমন হয়,
অন্ধ ভিখারী ছিলাম যখন, কেউ ডাকেনি আমায়,
হঠাৎ কেন যে এত জিজ্ঞাসা, কিছু না বুঝে পেলাম।`},{id:215,title:"সংগ্রামে আমরা এগিয়ে চলেছি চলব",transliteration:"Songrame Amra Egiye Cholechi Cholbo",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`সংগ্রামে আমরা এগিয়ে চলেছি চলব, পিছু কভু হটব না।
বাঁধার পাহাড় ডিঙিয়ে মোরা, ক্রমাগত এগিয়ে চলব,
তুলে নিয়ে ক্রুশ দৃপ্ত কণ্ঠে যীশুর নামটি মোরা বলব।
আমাদের একতার বাঁধনখানি, শয়তান ছিঁড়তে পারবে না,
আমাদের উজ্জ্বল জীবন দীপটি, কোনমতে যে নিভবে না।`},{id:216,title:"জয় জয় যীশু তব জয়",transliteration:"Joy Joy Jishu Tobo Joy",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`জয় জয় যীশু তব জয়, পুণ্য জ্যোতির্ময়,
তোমার আলোকে নাহি কোন পরাজয়।
এসেছিলে তুমি মানবের ত্রাতা হয়ে,
জীবন দানিলে অপমান গেলে সয়ে,
তব অবদান সে যে মহাদান, নাহি কোন তার ক্ষয়।
তাপিতেরে দিলে স্নিগ্ধ পরশ তব,
নিঃস্ব মানব লভিল জীবন নব,
প্রেমের মন্ত্রে বাঁধিলে সবারে, হোক প্রভু তব জয়।`},{id:217,title:"বিশ্বপিতা তুমি হে প্রভু",transliteration:"Biswopita Tumi He Probhu",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`বিশ্বপিতা তুমি হে প্রভু, আমাদের প্রার্থনা এই শুধু,
তোমারই করুণা হতে বঞ্চিত না হই কভু।
এ আকাশ বাতাস এ নদনদী, এ সাগর পাহাড় এ বনানী,
ফুলে ফলে রঙে রসে ভরে ভরে দিয়েছ যে দানে।
কুহু কুহু কোকিলের কূজনে, গুনগুন ভ্রমরার গুঞ্জনে,
প্রভাতে নিশীথে সূর্যের চাঁদের খেলা এই গগনে।
বিপদে আপদে সংশয়ে, কখনো যেন না ডরি,
শত বাধা বিঘ্নের মুখোমুখি যেন করি,
সত্যের দীপ চোখে জ্বালিয়ে, আঁধারের রাত যাব পেরিয়ে,
গড়ব ধরণী হাসিতে প্রেমে আর গান দিয়ে।`},{id:218,title:"তোমার রক্তে আমার জীবন",transliteration:"Tomar Rokte Amar Jibon",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`তোমার রক্তে আমার জীবন, আমার পরিত্রাণ,
মোর দেহ, মন, তোমারই সেবায় করেছি সমর্পণ।

১ আমার আত্মা, আমার প্রাণ, তোমারি প্রভু করুণার দান,
দিয়েছ যাহা, এনেছি তাহা, তোমারই সমিধান।

২ তব ক্রুশ প্রভু লয়ে শির প’রে,
নিয়েছি শপথ যাব দ্বারে দ্বারে,
জানাব সবারে কালভেরী ক্রুশে, মোদের পরিত্রাণ।`},{id:219,title:"ভুলিয়া না যাই, যেন ভুলিয়া না যাই",transliteration:"Bhuliya Na Jai, Jeno Bhuliya Na Jai",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`ভুলিয়া না যাই, যেন ভুলিয়া না যাই,
অফুরন্ত দয়া তোমার অনন্তকালস্থায়ী।

১ (তোমার) যত দয়া এ জীবনে, দেশে দেশে এ ভুবনে,
দণ্ডে দণ্ডে নিশিদিনে, সর্বক্ষণে পাই।

২ (আমি) কেবল মাত্র তোমার দয়ায়,
পিতা হে চিনেছি তোমায়,
পেয়েছি ঐ পায়ে আশ্রয়-চিরকালের ঠাঁই।

৩ যেন তোমার দয়ার কথা, চিরদিন রয় হৃদয়ে গাঁথা,
কৃতজ্ঞতা যেন প্রাণে থাকে সর্বদাই।`},{id:220,title:"ভুলিতে কি পারি তাঁরে",transliteration:"Bhulite Ki Pari Tare",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`ভুলিতে কি পারি তাঁরে,
যিনি নিজ প্রাণ দিয়া তারিলেন অভাগারে।

১
সেই নাথ মহীয়ান, মম চিন্তা মম ধ্যান,
জীবন থাকিতে আমি ভুলিতে কি পারি তাঁরে।

২
অপূর্ব করুণা তাঁর, নাহিক তুলনা যাঁর,
খুঁজিলে এমন প্রেম, কোথা পাবে এ সংসারে।

৩
নাহি চাহি কোন ধন, পেয়েছি যে প্রিয়জন,
কণ্ঠহার করে আমি, রাখিব নিয়ত তাঁরে।`},{id:221,title:"শাশ্বত তুমি প্রভু, যুগে যুগে তুমি চিরন্তন",transliteration:"Shashwato Tumi Probhu, Juge Juge Tumi Chironton",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`শাশ্বত তুমি প্রভু, যুগে যুগে তুমি চিরন্তন,
মরণে অসীম তুমি, তোমাতেই অনন্ত জীবন।

১ অনন্ত নির্ভর তুমি, অশেষ অসীম তুমি,
পাপীর বন্ধু তুমি, তোমাতেই অনন্ত জীবন।

ধুয়া: তোমাতেই আছে জীবন,
তোমাতেই আছে রতন,
তোমাতেই আছে যে জয়,
তোমাতেই পাপের মরণ।

২ পাপীরে ভালবেসে, এসেছিলে দীনবেশে,
তোমার অসীম করুণায়, পাপী পেল অনন্ত জীবন।`},{id:222,title:"তোমারি মধুর প্রেমের পরশে",transliteration:"Tomari Modhur Premer Poroshe",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`তোমারি মধুর প্রেমের পরশে, সকলি ভুলিয়া যাই,
পাইলে তোমারে হৃদয় মাঝারে, স্বরগের সুখ (যেন) পাই।

১ আঁধার তবে করে পলায়ন, তোমারি আলোকে পুলকিত মন,
দূরে যায় যত পাপ প্রলোভন, তোমা পানে যবে চাই।

২ তোমার অসীম প্রেমের মাঝারে,
হারাইয়া আমি ফেলি হে আমারে,
ফেলিয়া সদূরে স্বার্থ কোলাহল, অনন্তের পানে আমি ধাই।

৩ থাক কাছে সদা ওহে দয়াময়, নয়নে নয়নে রাখ হে আমায়,
বাসনা প্রবাহে যেন না আবার, তোমা ছেড়ে দূরে যাই।`},{id:223,title:"এ জীবনে কত দয়া করেছ",transliteration:"E Jibone Koto Doya Korecho",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`এ জীবনে কত দয়া করেছ, করিতে পারিনা পরিমাণ,
ওহে যীশু দয়াবান।

১ দুঃখের নিশীথে প্রভু কাছে এসে,
মম হিয়াতে দিলে আলো জ্বেলে,
প্রেমেতে কোলে তুলে আদরিলে,
দুঃখ নিশি হল অবসান।

ধুয়া: আমার জীবন বীণাতে,
বাজুক দিবা নিশীথে, তোমারই গুণগান,
তব অবদান, চির-সুমহান, অবনীতে তুমি মহাদান।

২ আঁধার ঘেরা এ ভব আলয়ে, প্রভু তুমি এলে আলো হয়ে,
দারুণ ক্রুশেতে প্রাণ দিলে, তাহে পাপী লভিল ত্রাণ।`},{id:224,title:"তোমারি গান গেয়ে প্রভু",transliteration:"Tomari Gan Geye Probhu",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`তোমারি গান গেয়ে প্রভু, জীবন আমার ধন্য।
চাইনে আমি প্রশংসা মান, চাইনে কিছু অন্য।

১ পাখি তরুর শাখে ডাকে, অলি সুরের ছবি আঁকে,
গীতালি মোর ওদের মতোই, শুধু তোমার জন্য।

ধুয়া: মনোবেণু বাজে মম, তোমার নামে নিত্য,
তব কথা বিনা কিছু জানে না মোর চিত্ত।

২ নদী সাগর কলতানে, রাখে প্রণাম তব পানে,
গীতি আমার তেমনি যেন, হয়গো প্রভু গণ্য।`},{id:225,title:"সৈনিক, সৈনিক, হুঁশিয়ার সৈনিক",transliteration:"Soinik, Soinik, Hushiar Soinik",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`সৈনিক, সৈনিক, হুঁশিয়ার সৈনিক,
এগিয়ে চলার ডাক এসেছে, এগিয়ে চল সৈনিক।

১ দুর্বার হোক তব গতি, পাপেতে দিও না মতি,
জীবন যুদ্ধে জয়ী হতে হবে, হও সবে নির্ভীক।

ধুয়া: বল, আমরা পরাজিত হব না,
শয়তানকে জয় দেব না,
আমরা পরাজিত হব না।

২ যুদ্ধের সাজ পর অঙ্গে, আত্মার খড়গ নাও সঙ্গে,
প্রভু যীশু সাথে আছেন, হও সবে নির্ভীক।`},{id:226,title:"সর্বত্যাগী প্রেমিক প্রভু",transliteration:"Sorbotyagi Premik Probhu",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`সর্বত্যাগী প্রেমিক প্রভু, তোমায় জানাই প্রণাম!
চলার পথে পাথেয় হোক, তোমার অমর পবিত্র নাম।
আঁধার পেরিয়ে খুঁজে পাই, তোমার আলোর নীড়,
জীবন ত্যাগের তুমি যে বিরল — মহানজীর।
তাইতো মোরা তোমার চরণে করেছি ভীড়।

জীবন গড়ার সাধনায় আজ—
তোমার নামে শপথ নিলাম।`},{id:227,title:"কত ভালবাসা — থেকে আড়ালে",transliteration:"Koto Bhalobasha — Theke Arale",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`কত ভালবাসা — থেকে আড়ালে,
তোমায় ধরব বলে আশা করি,
কেবল পাই না হাত বাড়ালে।

১ যখন ছিলাম মায়ের উদরে,
ঘোর অন্ধকারময় কারাগারে হায়রে!
তুমি আহার দিয়ে, বাতাস দিয়ে, তখন আমাকে বাঁচালে।

২ যখন আমি ভূমিষ্ঠ হলেম, মায়ের কোমল কোলে
আশ্রয় পেলেম হায়রে!
মায়ের বুকের রক্ত হে দয়াময়, তুমি ক্ষীর করে খাওয়ালে।

৩ বন্ধু বান্ধব দারাসুত,
প্রভু এসব কৌশল তোমারই তো হায়রে!
ভবের ধন ধান্য সহায় সম্বল, পেলাম তোমার কৃপাবলে।

৪ তোমার দয়ায় সকলই পেলাম,
কেবল তোমায় একদিন না দেখিলাম হায়রে!
তুমি কোথায় থাক, কেন এসে আমি কাঁদলে কর কোলে।

৫ কাঁদলে বলে হতাশ হয়ে
এসে চক্ষের জল দেও মুছাইয়ে হায়রে!
আবার কথা কয়ে প্রাণের মাঝে, কত উপদেশ দেও বলে।`},{id:228,title:"জানি বিশ্বাসের বল এতই প্রবল",transliteration:"Jani Bishwaser Bol Etoi Probol",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`জানি বিশ্বাসের বল এতই প্রবল, পাহাড় সরে যায়।
কত অসাধ্য কাজ সাধন করে, বিশ্বাসজাত প্রার্থনায়।

১ যীশু বলেন, বিশ্বাস হলে দেহ-তরী যায় না টলে গো,
রক্ষা হয় তার লাভে মূলে, হয় না ক্ষতি পরীক্ষায়।

২ সন্দেহ করো না মনে, বাঁচিবে বিশ্বাসের গুণে গো,
কী করিবে ঝড় তুফানে, (সদা) সঙ্গে আছেন দয়াময়।

৩ শুনেছি বিশ্বাসের জোরে, জল মিলে মরু প্রান্তরে গো,
সেরূপ বিশ্বাস দিয়া মোরে, কর প্রভু নির্ভয়।`},{id:229,title:"আহা কি মধুর তব প্রেম পরশ",transliteration:"Aha Ki Modhur Tobo Prem Porosh",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`আহা কি মধুর তব প্রেম পরশ,
যীশু মম প্রিয়তম পরমেশ হৃদয়েশ।

১ তোমারে কহিব মনের কথা, তোমারে জানাব প্রাণেরি ব্যথা,
যীশু মম প্রিয়তম পরমেশ হৃদয়েশ।

২ কে আর নাশিবে শোক তাপ মম,
সান্ত্বনা করিবে তোমারি সম,
যীশু মম প্রিয়তম পরমেশ হৃদয়েশ।

৩ বিপদে আপদে তোমারেই ডাকি,
সতত চরণে তাই পড়ে থাকি,
যীশু মম প্রিয়তম পরমেশ হৃদয়েশ।

৪ পার্থিব বান্ধব সবে যায় চলে,
তুমি নাহি যাও কভু একাকী ফেলে,
যীশু মম প্রিয়তম পরমেশ হৃদয়েশ।`},{id:230,title:"আমি ক'য়ে যাব সবারে",transliteration:"Ami Koye Jabo Sobare",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`আমি ক'য়ে যাব সবারে,
যীশুর নাম পরাণ দিল ভরায়ে।
আরে সারো সারো সারো আমারে, যাব না, যাব না, আর কুপথে।

১ দুর্বল পাইয়া জগৎ আমায় এমন তলে নামাইল,
লজ্জায় আমি মুখ ঢাকিলাম আড়ালে।
মান সম্মান সবহী গেল, কাঁইন্দা কাঁইন্দা মরিরে,
জানি না কে বাঁচাবে আমারে,
আরে হঠাৎ দেখো, যীশু আইয়া, হাত বাড়াইয়া,
ডাক দিল গো আমারে।

২ পতন হইল দেখল সবায়, মুখ ফিরাইল সকলে,
চায়না আর চায়না কেউ আমারে।
পাপের বোঝা বুকে লইয়া, দ্বারে দ্বারে ঘুরিরে,
আপন পর কেউ দেখে না আমারে,
আরে হঠাৎ দেখো, যীশু আইয়া, মুক্তি দিল
পাপ থিকে গো আমারে।`},{id:231,title:"মধুমাখা যীশু নাম ঘরে ঘরে গাও",transliteration:"Modhumakha Jishu Nam Ghore Ghore Gao",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`মধুমাখা যীশু নাম ঘরে ঘরে গাও,
পবিত্র ক্রুশের কথা, সবারে শুনাও।
যীশু নাম (৪)

১ জীবন জলের নদী, বহে যেথা নিরবধি,
তৃষিত মানব সবে, সে সন্ধানে যাও।
যীশু নাম (৪)

২ যীশু নাম লয় যেজন, কিবা তার ভয়,
তাঁর কাছে শমনের হবে পরাজয়।
যীশু নাম (৪)

৩ ক্রুশের ধেয়ান লয়ে, সব বাঁধা পার হয়ে,
যীশুর করুণা লভি, স্বর্গধামে যাও।
যীশু নাম (৪)`},{id:232,title:"যীশুর উপর নির্ভর কর",transliteration:"Jishur Upor Nirbhor Koro",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`১ যীশুর উপর নির্ভর কর,
তিনি বহন করবেন, তিনি তুলে ধরবেন,
তুমি তাঁর প্রেমে আস্থা রাখ,
তিনি তোমায় শক্তি দিবেন।

ধুয়া: সকলে ভার দাও, যীশুর উপর দাও,
সকল ভার দাও, তাঁর প্রেমের প্রমাণ লও,
সকল ভার দাও আর ঊর্দ্ধে তাকাও,
শুধু যীশুর উপর ভার দাও।

২ আঁধার যখন নেমে আসে,
তখন নিরাশ না হও, ভয় না পাও,
যীশু তোমার সঙ্গে আছেন,
তিনি তোমায় শান্তি দিবেন।`},{id:233,title:"তোমায় পেলে, প্রভু আমার",transliteration:"Tomay Pele, Probhu Amar",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`তোমায় পেলে, প্রভু আমার, পরম পাওয়া হয়।
তুমি বিনা, জীবন মম, রহে শূন্যময়।

১ আমায় ঘিরে আছে যারা, আপন কেহই নয়তো তারা,
তাইতো প্রভু তব কাছে, চাহি গো আশ্রয়।

ধুয়া: নদী যেমন আকুল সদাই, মহাসাগর তরে,
তোমায় পেতে প্রভু আমার, মন যে তেমন করে।

২ সকল পাওয়া মিটে যাবে, পরাণ যখন তোমায় পাবে,
বুকের মাঝে এই কথাটি, জেগে মম রয়।`},{id:234,title:"ধর লওরে ঈশ্বরের প্রেম",transliteration:"Dhor Lo-re Ishwarer Prem",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`ধর লওরে ঈশ্বরের প্রেম, যীশু ডাকেন আয়,
আমার যীশু ডাকেন, আয়, আমার প্রভু ডাকেন, আয়।

১ এ প্রেম যেবা নিল, মুক্ত হল, সকল পাপ দায়।
২ এ প্রেম স্বর্গপুরে, মর্ত্যপুরে, সকলে মাতায়।
৩ এ প্রেম হৃদয় ভরে নিলে পরে, সকল দুঃখ যায়।
৪ এ প্রেম ভবে এসে, মানুষ বেশে, পাপীকে তরায়।
৫ এ প্রেম কলসী কলসী ঢাল, তবু না ফুরায়।
৬ এ প্রেম যে পেয়েছে, সেই মজেছে, কিছু নাহি চায়।
৭ যীশু আপনি মালি, মাথায় ডালি, প্রেম-ধন বিলায়।
৮ তাঁকে ধর যদি বাঁচবে তুমি, হতে নরক দায়।`},{id:235,title:"বুঝেছি এবার কেন এ দশা",transliteration:"Bujhechi Ebar Keno E Dosha",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`বুঝেছি এবার কেন এ দশা, জীবনে হতাশা,
সকলই হারালেম, সকলই খোয়ালেম, সকলে ফেলে যায়
হায়!
গেছে মোর ধন, জীবন যৌবন, করেছি সবই নাশ।

১ ভেবেছিলাম পাব কত সুখ ও মান, কত যে ধন ও জ্ঞান,
আরও কত স্থান, কত প্রিয়জন, আরও ভরা জীবন,
নিঃস্ব হয়েছি, ভিখারী সেজেছি, (পঙ্কে ডুবেছি),
অন্ধ হয়েছে নয়ন।

২ ওগো পিতঃ মোর, ক্ষমা কর তুমি, তব চরণ মোর সম্বল,
বাঁচালে বাঁচিব, রাখিলে রহিব, সঁপি জীবন (তব) সেবায়।`},{id:236,title:"যীশু আরও তোমায় চাই",transliteration:"Jishu Aro Tomay Chai",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`১ যীশু আরও তোমায় চাই, জীবনে তোমায় দেখাই,
আরো আত্মার পূর্ণ দান, কর আমারে প্রদান।

ধুয়া
আরো চাই তোমারে, আরো চাই তোমারে,
আরো তোমায় হৃদে চাই, আরো প্রেমে ডুবে যাই।

২ আরো তব অভিলাষ, কর হে নাথ প্রকাশ,
তুমি মম নেতা হও, হৃদে বিরাজিত রও।

৩ আরো হোক সুধাময়, তব বাক্য সমুদয়,
শুনে স্বর্গ সুখ পাই, আরো মম প্রাণ জুড়াই।

৪ আরো তোমারই গৌরব, তোমারই পুণ্য প্রভাব,
জুড়ে যাক চরাচর, যুগে যুগে নিরন্তর।`},{id:237,title:"মম প্রাণ কেবল যীশু যীশু গান করে",transliteration:"Momo Pran Kebol Jishu Jishu Gan Kore",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`মম প্রাণ কেবল যীশু যীশু গান করে,
যীশু আহার যীশু বিহার, (আমি) থাকিব জাপ্টে ধরে।

১ এমন ধন আর কোথায় পাব, চুম্বনে যাঁর প্রাণ জুড়াব,
হারালে ভাই পাগল হব (আমি) চির জনমের তরে।

২ রাতদিন একই সমান, যীশু প্রেম করি হে পান,
ক্রমে হইতেছি অজ্ঞান, (যীশু) যীশু পাগল অন্তরে।

৩ বদ্ধ পাগল কবে হব, সিদ্ধ প্রেমে ডুবে রব,
কেঁদে কেঁদে পায়ে পড়ব, (প্রেমে) ফিরাতে ভাই ভয়ে রে।`},{id:238,title:"জীবন তুচ্ছ করে যাঁরা, প্রভু যীশুর হয়",transliteration:"Jibon Tuccho Kore Jãra, Probhu Jishur Hoy",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`জীবন তুচ্ছ করে যাঁরা, প্রভু যীশুর হয়,
তাঁরা আঁধার মাঝে আলোর পরিচয়।

১ তাঁরা ধূপের মত জীবন বিলায় হেসে,
তাঁরা মেঘের মত ঝরে নিঃশেষে।

অন্তরা
দুঃখ সহার তপস্যাতেই তাঁদের জয়,
মরণ পারেনা কো তাঁদের করতে লয়।

২ তাঁরা ভালবেসেই হয় যে চিরসুখী,
তাঁরা উজ্জ্বল আশার ধ্যানে সূর্যমুখী।`},{id:239,title:"দিনেতে মেঘের ছায়া দিলে",transliteration:"Dinete Megher Chaya Dile",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`দিনেতে মেঘের ছায়া দিলে, রাত্রিতে অগ্নিস্তম্ভ রাখলে,
রক্ষাকর্তা রহিলে — প্রভু হে, সুখ শান্তিতে রাখিলে।

ধুয়া
ধন্য ধন্য ধন্য প্রভু হে,
তুমি মুক্তি দিলে আমাকে,
তোমার কাছে টানিলে — প্রভু হে,
দিন রাত্রিতে রক্ষিলে।

২ বাক্যরূপ মান্না খাওয়াইলে, পর্বত হলে জল পান করালে,
আত্মাতে তৃপ্ত করিলে — প্রভু হে, হৃদয়ে শান্তি আনিলে।

৩ এই পবিত্র আত্মিক জীবনে, প্রাণ আত্মা শরীর ও হৃদয়ে,
স্বর্গীয় জীবন দিলে — প্রভু হে, আত্মাতে সতেজ করিলে।

৪ কনান দেশেতে আনিলে, সাধুদের সাথে আমায় মিলালে,
পূজি আমি তোমারে — প্রভু হে, প্রণমি নত শিরে।`},{id:240,title:"প্রভুতে ভ্রাতা-ভক্তিগণ (সদা) জেগে থাক প্রার্থনাতে",transliteration:"Probhute Bhrata-Bhaktigon (Sada) Jege Thak Prarthanate",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`প্রভুতে ভ্রাতা-ভক্তিগণ (সদা) জেগে থাক প্রার্থনাতে।

১ শয়তান সিংহের মত, গর্জ্জিছে অবিরত,
জেগে থাক সতত, নাহি পড় পরীক্ষাতে।

২ শাস্ত্রপাঠ আলোচনা, ধর্মগীত ও প্রার্থনা,
করিতে নাম ঘোষণা, ভুলিও না কোন মতে।

৩ শদ্রক অগ্নি ভিতরে, যোনা মৎসের উদরে,
নিত্য প্রার্থনা করে, সান্ত্বনা পেল মনেতে।

৪ দায়ূদ সৈন্য মাঝারে, প্রেরিত পৌল কারাগারে,
জেগে প্রার্থনা করে, দানিয়েলও সিংহের খাতে।`},{id:241,title:"প্রভু, পবিত্র আত্মায় পূর্ণ কর",transliteration:"Probhu, Pobitra Atmay Purna Karo",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`প্রভু, পবিত্র আত্মায় পূর্ণ কর, তোমার সাক্ষী হতে চাই।
উর্দ্ধ থেকে আজ শক্তি পেতে, মিলেছি এখানে সবাই।

১ জন্মভূমির পরে এ বঙ্গদেশ, সারা ভারত ও পৃথিবীর শেষ,
তোমার নামেতে সাক্ষ্য দেব, যখন যেখানে মোরা যাই।

অন্তরা
দুর্বল পিতর, আত্মার বলে, তোমার নামেতে উঠল জ্বলে,
মানুষ ধরার শক্তি পেয়ে, মৃতকেও জীবন দিলে।

২ আত্মার আগুনে দগ্ধ করো, তোমার বলেতে তুলে ধরো,
দুর্বলেরে যেন সবল করি, আমাদের বাসনা তাই।`},{id:242,title:"হে ঈশ্বর তুমি রক্ষা করো",transliteration:"He Ishwar Tumi Raksha Karo",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`হে ঈশ্বর তুমি রক্ষা করো, 
    আমরা তোমারই লয়েছি শরণ।
পড়ুক ঝরে প্রভু তোমার আশীষ,
তাতেই ধন্য হবে সবার জীবন।

১ সঙ্কটে বিপদে তোমাকে ডাকি,
করি যে আর্তনাদ শোন নাকি,
নিবেদিতে প্রাণ চায় শুধু ত্রাণ,
আলোয় আলোয় ভরে যাবে যে মন।

অন্তরা
তোমার আশীষ প্রভু মাথায় নিয়ে,
পার হয়ে যাই আঁধার নিশা,
চরণ চিহ্ন তব শরন করে,
আমরা যে পাই পথের দিশা।

২ তোমার করুণা দয়া না পেলে,
কে দেবে আঁধার মনে প্রদীপ জ্বেলে
চিত্ত সকল হোক নির্মল,
তোমারই আদেশ মেনে চলি সারাক্ষণ।`},{id:243,title:"স্পর্শ তোমার দাও হে প্রভু",transliteration:"Sparsho Tomar Dao He Probhu",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`স্পর্শ তোমার দাও হে প্রভু,
স্মরণ টুকু চাই, স্মরণ টুকু চাই।
হা...........হাল্লেলুইয়া (৪)

১ যা কিছু আমার, সবই তোমার,
তোমারই নামে আমি এগিয়ে যাব,
তোমার ছোঁয়া পাই। স্পর্শ তোমার—

২ হৃদয়ে আমার পবিত্র বাক্য তোমার,
তোমারই কথা আমি ছড়িয়ে দেব,
তোমায় পেতে চাই। স্পর্শ তোমার—`},{id:244,title:"আমার মনে আর আনন্দ ধরে না",transliteration:"Amar Mone Ar Anando Dhore Na",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`আমার মনে আর আনন্দ ধরে না,
যীশু আমারই, আমি তাঁহারই,
আমার মনে আর আনন্দ ধরে না।

১ প্রেম ভক্তি দিলাম যীশুর চরণে,
যীশু থাক হে, মোর হৃদতে।
প্রেম ভক্তি দিলাম যীশুর চরণে।

২ আমার জীবন যীশুর জন্য যাপিব,
পরের সেবাতে, প্রভুর কার্যেতে,
আমার জীবন যীশুর জন্য যাপিব।

৩ যীশুর মত হইতে যত্ন করিব,
বাসনা তাঁহার, পূর্ণ করিবার,
যীশুর মত হইতে যত্ন করিব।`},{id:245,title:"বিশ্বাস কর তুমি প্রভুর উপর",transliteration:"Bishwas Karo Tumi Probhur Upor",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`বিশ্বাস কর তুমি প্রভুর উপর,
বিশ্বাস কর তাঁর বাক্যের উপর,
বিশ্বাস করলে দেখতে পাবে,
তুমি প্রভুর প্রেমের পরিচয়।

১ বিশ্বাসে মুক্তি, বিশ্বাসে শান্তি,
পরিত্রাণ পাবে, দূরে যাবে ক্লান্তি,
বিশ্বাসে তাঁর সন্তান হয়ে
(তুমি) পূর্ণ হও তাঁর আত্মায়।

অন্তরা
বিশ্বাসে যে জন চলে সতত,
করুণা তাঁর পায় অবিরত।

২ গাও সবে গাও, জয় যীশুর জয়,
তিনি আছেন সাথে, নেই কোন ভয়,
পার হবে তুমি সব পরীক্ষায়,
(প্রভু) যীশুর মহা করুণায়।`},{id:246,title:"আমি যীশুর ছোট মেষ",transliteration:"Ami Jishur Choto Mesh",composer:"",category:"শিশু সঙ্গীত",lyrics:`১ আমি যীশুর ছোট মেষ, প্রতিদিন মোর সুখ অশেষ,
তিনি রক্ষা করেন বেশ, তাঁর ছোট মেষ।

২ শয়তান সিংহ বলবান, যীশু দিলেন, নিজ প্রাণ,
আমায় করতে পরিত্রাণ, তাঁর ছোট মেষ।

৩ পূর্বে ছিলাম বাহিরে, এখন যীশুর খোয়াড়ে,
শান্তি বারি পান করি, তাঁর ছোট মেষ।

৪ যীশুর পালে থাকিব, রাখাল ভালোবাসিব,
প্রতিদিন জয় করিব, তাঁর ছোট মেষ।`},{id:247,title:"দাও দাও দাও দাও",transliteration:"Dao Dao Dao Dao",composer:"",category:"শিশু সঙ্গীত",lyrics:`দাও দাও দাও দাও দাও দাও দাও
ক্রুশের চিহ্ন রক্ত বরণে, বক্ষে আঁকিয়া দাও।
দাও দাও দাও দাও দাও দাও দাও
যীশুর নাম, মধুর নাম, ললাটে লিখিয়া দাও।

১ দাও দিব্যজ্ঞান আলোক দাও, দাও স্বার্থশূন্য জীবন দাও,
দাও ভক্তি, প্রেম ও প্রীতি, হৃদয় ভরিয়া দাও।

২ দাও শক্তি, যুদ্ধ করিতে দাও, দাও ধৈর্য, কষ্ট সহিতে দাও,
দাও খড়্গ জীবন যুদ্ধে, শত্রু নাশিতে দাও।

৩ দাও সুপ্ত চেতন জাগায়ে দাও,
দাও লুপ্ত জীবন ফিরায়ে দাও,
দাও গুপ্ত বন্ধন নাশিয়া মুক্ত করিয়া দাও।

৪ দাও হৃদয় তিমির নাশিয়া দাও,
দাও হৃদয় কালিমা মুছিয়া দাও,
দাও শুভ্র, সরল, সত্য, ক্রুশের জীবন দাও।`},{id:248,title:"ক্রুশের পথে চলবো মোরা",transliteration:"Krusher Pothe Cholbo Mora",composer:"",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`ক্রুশের পথে চলবো মোরা, কালভেরী ঠিকানায়,
মৃত্যুঞ্জয়ী প্রভু যীশুর নতুন পথের দিশা পাই।

১ ক্লান্ত পথিক পথ হারা, শ্রান্ত জীবন ছন্ন ছাড়া,
পাপে মগ্ন দেহে ভগ্ন, প্রভু তুমি যে সহায়।

২ আমরা পাপী, অনুতাপী, দুঃখ ভরা অশ্রুআঁখি,
তুমি আছ মোর রাত হল ভোর, নতুন জীবন মোরা পাই।`},{id:249,title:"দাঁড়াও হে যীশুর পক্ষে (Stand Up Stand Up For Jesus)",transliteration:"Darao He Jishur Pokkhe",composer:"জর্জ ডাফিল্ড (১৮৫৮)",category:"খ্রীষ্টীয় জীবন ও সাক্ষ্য",lyrics:`১ দাঁড়াও হে যীশুর পক্ষে ক্রুশীয় সৈন্যগণ,
রাজকীয় ধ্বজা উড়াও উৎসাহে অনুক্ষণ,
সসৈন্যে প্রভু যীশু সব শত্রু দলিবেন,
আর নিজ পরাক্রমে স্বরাজ্য লইবেন।

২ দাঁড়াও হে যীশুর পক্ষে আর শুন তূরীরব,
সংগ্রামে চল আজি নির্ভয়ে সৈন্য সব,
অগণ্য শত্রু বটে প্রাণপণে কর রণ
বিপদে সাহস বাঁধি হও অগ্রসর এখন।

৩ দাঁড়াও হে যীশুর পক্ষে, তাঁর বলে হও সবল,
করিলে আত্মনির্ভর হইবে সব বিফল,
সুসংবাদ সজ্জা পর আর জাগ প্রার্থনায়,
আসন্ন বিপদকালে সুমঙ্গল হইবে তায়।

৪ দাঁড়াও হে যীশুর পক্ষে, এ যুদ্ধ স্থায়ী নয়,
আজ হয়ত রণধ্বনি কাল হইবে দিগ্বিজয়,
জয় করে যে জন যুদ্ধে পায় জীবন মুকুট সে,
আর খ্রীষ্টের সঙ্গে নিত্য রাজত্ব করিবে।`},{id:250,title:"খ্রীষ্ট শরীর আত্মার চিকিৎসক (The Great Physician Now Is Near)",transliteration:"Khristo Shorir Atmar Chikitshok",composer:"উইলিয়াম হান্টার (১৮৫৯)",category:"পরিত্রাণ ও সুসমাচার",lyrics:`১ খ্রীষ্ট শরীর আত্মার চিকিৎসক, প্রাণ শীতলকারী যীশু,
শোক ব্যাধি, দুঃখ বিনাশক, প্রেমসুধা পূর্ণ যীশু।

ধুয়া
মধুর নাম দূতগণে গায়, মধুর নাম মর্ত্য জিহ্বায়,
মধুর সঙ্গীত এ ধরায়, যীশু প্রাণের যীশু।

২ পাপ তাপ সব করেন বিমোচন পাতকীর বন্ধু যীশু,
দেন দীনে স্বর্গ নিকেতন, স্বর্গনাথ প্রভু যীশু।

৩ আজ শুন তাঁহার নিমন্ত্রণ, ডাকিছেন তোমায় যীশু,
পরিত্রাণ লয়ে অনুক্ষণ, দাঁড়ায়ে আছেন যীশু।

৪ হোক তোমার স্তব হে বলিমেষ, হে বিশ্বাস পাত্র যীশু,
তোমার ঐ নামের গুণ অশেষ, প্রাণ ভালবাসেন যীশু।

৫ হয় দেহ যবে বিসর্জন, হেরিব নেত্রে যীশু,
করিবে তাঁহার সংকীর্তন, জয় যীশু প্রাণের যীশু।`},{id:251,title:"ঈশ্বর মানুষকে ভালবেসে",transliteration:"Ishwar Manushke Bhalobese",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`ঈশ্বর মানুষকে ভালবেসে, নিজ পুত্রকে পাঠিয়েছিলেন,
আমরা তাঁকে ক্রুশে দিয়েছি। (২)
হায়! হায়! কি যে ভুল করেছি,
মোরা নিজের পাপে নিজেই মরেছি।
আমরা তাঁকে ক্রুশে দিয়েছি। (২)

১ যিনি এত করুণা করে, পুত্রের রূপ ধরে,
নশ্বর পৃথিবীতে এলেন। আ-আ-আ-আ
যিনি মানুষের পাপরাশি, নিজের স্কন্ধে লয়ে,
শান্তির বাণী শোনালেন।
আমরা তাঁকে ক্রুশে দিয়েছি! (২)

২ যিনি রোগীকে সুস্থ করে, মৃতকে জীবন দিয়ে
অন্ধের চোখ খুলে দিলেন। ও-ও-ও-ও
যিনি পাপীর ক্ষমার তরে, নিজের জীবন দিয়ে,
মুক্তির দ্বার খুলে দিলেন।
আমরা তাঁকে ক্রুশে দিয়েছি! (২)

৩ যিনি সকল ব্যাথা ভুলে, জীবনের দ্বার খুলে,
আলোর সন্ধান দিলেন। ও-ও-ও-ও
যিনি পাপীকে ভালবেসে, পাপের ক্ষমা দিতে,
রক্তের ধারা বহালেন।
তিনি মৃত্যুকে জয় করেছেন, তিনি আমাকে বাঁচিয়েছেন।।`},{id:252,title:"প্রাতে, দ্বিপ্রহরে কিম্বা সায়ংকালে",transliteration:"Prate, Dwiprohore Kimba Sayongkale",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`১ প্রাতে, দ্বিপ্রহরে কিম্বা সায়ংকালে,
বুনি ধর্ম-বীজ সব যত্ন করিয়া,
শস্য সংগ্রহে ছেদনের সময়ে, আসিব আনন্দে আঁটি লইয়া!

ধুয়া
আঁটি লইয়া! আঁটি লইয়া!
আসিব আনন্দে আঁটি লইয়া!

২ উদয়াস্ত কালে, গ্রীষ্মে কিম্বা শীতে,
বুন অবিশ্রান্ত নির্ভয় হইয়া,
ফুরাইব ক্রমে সর্ব পরিশ্রমে,
আসিব আনন্দে আঁটি লইয়া।

৩ চল তবে সবে, রোদন পূর্ব্বক বুনি,
ক্ষেত্র স্বামীর কারণ কষ্ট ভূগিয়া।
যবে দুঃখ যাবে, প্রভু ডাকবেন সবে,
আসিব আনন্দে আঁটি লইয়া।`},{id:253,title:"গানে গানে প্রভু সবার মাঝারে",transliteration:"Gane Gane Probhu Sobar Majhare",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`গানে গানে প্রভু সবার মাঝারে, তোমারে প্রচার করিব।
জীবন ভরিয়া তব প্রেম বাণী, সকলেরে আমি বলিব।

১ দিকে দিকে দেশে দেশে, এ গীতিকা যাবে ভেসে,
তটিনীর মত কল কল তানে, তব নাম নিয়ে চলিব।

অন্তরা
প্রভাতে প্রদোষে পাখির কূজন,
তোমার মহিমা স্মরিয়া;
তেমনি আমিও কণ্ঠে আমার,
তোমাকে রাখিব ধরিয়া।

২ সুরে সুরে নিতি নিতি, রচি আমি নব গীতি,
ঝর্ণার সম ঝর ঝর স্বরে, তোমারে কথাটি কহিব।`},{id:254,title:"খ্রীষ্টের বাণী প্রচারিব মোরা করেছি অঙ্গীকার",transliteration:"Khrister Bani Procharibo Mora Korechi Ongikar",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`খ্রীষ্টের বাণী প্রচারিব মোরা করেছি অঙ্গীকার,
কণ্ঠবীণায় তাইতো তুলেছি তাঁরই নামে ঝঙ্কার।

১ তাঁর কথা মোরা জানাব সবারে,
গীতালি অর্ঘ্য দিয়ে বারে বারে,
শুনিবে দ্যুলোকে সকলে পুলকে খুলিয়া চিত্তদ্বার।

অন্তরা: খ্রীষ্টের প্রেম ক্ষমার কাহিনী, শুনাতে আমরা ব্রতী,
দুঃখ ব্যথা আসে যদি কভু, নাহি তাতে কোন ক্ষতি।

২ দেশ হতে দেশে সুদূর আবেশে,
গানের ছন্দে ছড়াব বাতাসে,
দিবসে নিশীথে সেই শুভ গীতে, ভরিবে যে সংসার।`},{id:255,title:"যীশু বিনে কেহ নাই এ সংসারে",transliteration:"Jishu Bine Keho Nai E Shongshare",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`যীশু বিনে কেহ নাই এ সংসারে,
এই মহা পাপের দায় কে উদ্ধার করে?

১ এই জগৎ মাঝে, যত জন আছে,
তারা সবে দোষী হবে, নিজ পাপ ভারে।

২ পিতা মাতা সুত, ভাই বন্ধু যত,
তারা আমার পাপের ভার, নিতে নাহি পারে।

৩ ওরে আমার মন, ধর যীশুর চরণ,
যিনি তোমার পাপের ভার, নিলেন শিরোপরে।`},{id:256,title:"উঠ, উঠ ভাই ভগ্নি",transliteration:"Utho, Utho Bhai Bhogini",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`১ উঠ, উঠ ভাই ভগ্নি, উঠ মোহ নিদ্রা পরিহরি,
হেরি মাতৃভূমি দশা, নয়নে বহে না কি বারি?
দেখ গো দেখ ত্রাণ ছাড়ি, ভূরি ভূরি,
মৃত্যুমুখে পড়ে বঙ্গ নর-নারী।

ধুয়া
সুসংবাদ ল’য়ে শিরো’পরে,
যাও গ্রামে গ্রামে, প্রতি নগরে,
কেঁদে কেঁদে বল প্রতি জনারে,
“যীশু মরেছেন তোরই তরে রে”।

২ পর, পর সযতনে, পর ঈশ-দত্ত রণসজ্জা,
বীরসম রণক্ষেত্রে ধেয়ে চল, ত্যজি সব লজ্জা,
দেখ গো ছাড়ি সুখ শয্যা, করি সজ্জা
কত সাক্ষ্যমর হল নরপূজ্যা।

৩ কর কর উত্তম যুদ্ধ, কর নিরভয়ে প্রাণপণে,
বাধা বিঘ্ন যত হ’বে, সুদূরে পলাবে নাম শুনে,
ত্রাসিত হ’বে শয়তানে, দরশনে,
ঈশ-তেজ, প্রতিভাত ভূমণ্ডলে।`},{id:257,title:"জীবনটা তোর দেনা সঁপে",transliteration:"Jibonta Tor Dena Shonpe",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`জীবনটা তোর দেনা সঁপে, যীশুর চরণতলে,
মহাশান্তি মিলবে তবেই প্রতি পলে পলে।

১ আঁধার পথে চলবি কত আর?
ঘুরিস মিছে নিয়ে পাপের ভার।
আয়রে ছুটে প্রভুর কাছে, যেথায় আলো জ্বলে।

অন্তরা: সংসারেতে সকলে পর, যীশুই আপন জন,
যে চায় তাঁকে, সে তাঁর দেখা পায়রে অনুক্ষণ।

২ সময় যে তোর বৃথাই চলে যায়,
করিসনে তুই দেরি ওরে হায়!
প্রেমিক প্রভুর পাবি দেখা, ডাকরে চোখের জলে।`},{id:258,title:"শোন পাপী, প্রাণ খুলে",transliteration:"Shono Papi, Pran Khule",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`শোন পাপী, প্রাণ খুলে, যীশু কাঁদেন তোর তরে,
হাতে পায়ে পেরেক গাঁথা যাতনা পান অন্তরে।

১ দুঃখ কি লাগে না তোর, তাঁরে দেখে ক্রুশো’পর,
তোর তরে ঐ প্রকার, প্রাণ দেন অকাতরে,
যীশু, যীশু, যীশু বলে কাঁদ পাপী প্রাণভরে।

২ পিপাসায় তাঁর প্রাণ যায়, দর দর রক্ত ধায়,
সর্ব অঙ্গে বহে যায়, নয়ন মেলে দেখ রে,
পাপীর বন্ধু প্রাণের যীশুর একি দশা হ’ল রে।

৩ নরক দুঃখ বড় দায়, জেনে যীশু দয়াময়,
ব্যস্ত ভাবে ক’ন পিতায়, মরিব পাপীর তরে,
যেন আমার দুঃখে পাপীর সুখ হয় পিতঃ অচিরে।

৪ পাপী বাঁচ পাপ হতে, এড়াও নরক দায় হতে,
নাচ জয় উল্লাসে, একেবারে পাপ ছেড়ে,
প্রাণ দিয়ে বাঁচালেন প্রাণ, যীশু মরি ক্রুশ’ পরে।`},{id:259,title:"যীশু খ্রীষ্টের শরণ লয়েছি",transliteration:"Jishu Khrister Shoron Loyechi",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`যীশু খ্রীষ্টের শরণ লয়েছি, আর ভব ভয়ের ভাবনা কি।

১ ত্যাজ্য করে স্বভাব পুরাতন,
এখন যীশু-প্রেমে মজে রে ভাই স্থির করেছি মন।
ও তাঁর ধর্ম-আলো, অতি উজ্জ্বল, আমি হৃদয়-মাঝে জ্বেলেছি।

২ মন ভ্রান্ত ছিল অতিশয়,
তাতে পাপে ভারী প্রাণ তরী জীবন সংশয়,
এখন ঘুচিয়ে দণ্ড, নিরানন্দ, আমি আনন্দেতে ভেসেছি।

৩ শয়তানের দুষ্ট কারখানা,
এই ভোলা মনকে ভুলায়ে ছিল দিয়া মন্ত্রণা,
সব দেখি ফাঁকি, মুদি আঁখি, প্রভুর চরণ হৃদে ভাবতেছি।

৪ কি করিবে শয়তান দুরাচার,
এই মন প্রাণ দিয়েছি সব, খ্রীষ্টের উপর ভার,
আর নাইকো শঙ্কা, বাজিয়ে ডঙ্কা, আমি যীশুর রাজ্যে এসেছি।

৫ মিথ্যা ফাঁকি যত চাতুরী,
আর কুজ্ঞান কুমতি সকল পরিত্যাগ করি,
ল’য়ে যীশু-তত্ত্ব, মহামন্ত্র, আমি খ্রীষ্টের দাস হয়েছি।`},{id:260,title:"তুমি আঘাত করেছ যাঁরে",transliteration:"Tumi Aghat Korecho Janre",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`তুমি আঘাত করেছ যাঁরে, সে যে তোমারই মুক্তিদাতা,
তুমি অপমান কর যাঁরে, সে যে তোমারই পরিত্রাতা।

১ ঐ সুন্দর তনু রুধির ধারায় হাসে,
যেন শুভ্র কমল পঙ্ক সলিলে ভাসে,
কালভেরী’পরে শোননি কি তুমি, মহা জীবনের গাঁথা।

অন্তরা: মৃত্যু তোরণ পার হতে যদি চাও,
ক্রুশের বারতা হে পথিক শুনে যাও।

২ অনুতাপ লয়ে বল শুধু একবার,
“ক্ষমা কর প্রভু দীনতা ক্ষম আমার”
জীর্ণ জীবনে পুষ্পিত হবে, প্রেম বসন্ত লতা।`},{id:261,title:"শোনো শোনো ভাই, শোনো গো সবাই",transliteration:"Shono Shono Bhai, Shono Go Sobai",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`শোনো শোনো ভাই, শোনো গো সবাই,
মোরা মুক্তির গান গেয়ে যাই,
যীশুর প্রেমের কথা, কালভেরী ক্রুশে গাঁথা,
গানে গানে সবারে শোনাই।

১ যীশুকে দিয়েছি এ জীবন, তাইতো সতত খুশি মন,
কে আছ আঁধার মাঝে, ভয়ে অপমান লাজে,
তারই লাগি এ গান গাই।

অন্তরা
আর তো ভাবনা নাই নাইরে, নাইরে—
দিয়েছি যীশুকে হৃদে ঠাঁই রে, ঠাঁইরে—
আমাদের পাপভার, ভাবনার সব ভার,
প্রভু যীশু নিয়েছেন, শোনো শোনো ভাইরে।

২ গাও সবে জয় যীশুর জয়, ঝেড়ে ফেল ভয় সংশয়,
যীশুকে হৃদয় দাও, ক্রুশতলে ছুটে যাও,
যীশু ছাড়া আর পথ নাই।`},{id:262,title:"একবার ভেবে দেখলিনে",transliteration:"Ekbar Bhebe Dekhline",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`একবার ভেবে দেখলিনে, তোর উপায় হবে কি? (পাতকী)

১ তোরে দেখে নিরুপায়, সেই পরম দয়াময়,
কৃপা করি পাঠাইলেন আপন তনয়;
এখন যীশুখ্রীষ্ট, পাপীর বন্ধু, স্বর্গে যাবার ভাবনা কি?

২ সেই যীশু দয়াবান, তোরে করিবারে ত্রাণ,
ক্রুশোপরে ত্যজিলেন আপনার পরাণ;
এখন বিশ্বাস করে চলে এসো, যীশু বই আর উপায় কি?`},{id:263,title:"মোরা যীশুর রক্তে শুচি হলাম",transliteration:"Mora Jishur Rokte Shuchi Holam",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`মোরা যীশুর রক্তে শুচি হলাম
মোদের ভয় আর নাই,
মোরা প্রভুর মহা দয়া পেলাম, মোদের ভয় আর নাই।

ধুয়া
ধন্য মোরা ধন্য, প্রভুর প্রেমে ধন্য,
মোদের ভয় আর নাই, মোদের ভয় আর নাই।

১ তাঁহার চরণ সেবিব, সুসমাচার কহিব,
খ্রীষ্ট জীবন যাপিব, মোদের ভয় আর নাই।

২ সারা জগৎ মাঝে মোরা সকল কাজে,
খ্রীষ্ট নাম প্রচারিব, মোদের ভয় আর নাই।`},{id:264,title:"প্রভু যীশুর নাম সমগ্র জগতে",transliteration:"Probhu Jishur Naam Shomogro Jogote",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`প্রভু যীশুর নাম সমগ্র জগতে, যাতে মোরা পাই পরিত্রাণ,

১ তিনি পৃথিবীতে এলেন, রক্ত বহালেন,
পাপের জন্য মূল্য দিলেন,
পাপীকে বাঁচাতে, মুক্তি দিতে, যীশু ক্রুশে প্রাণ দিলেন।

২ আকাশের নিচে, মনুষ্যদের মধ্যে,
আর কোন নাম দত্ত নাই,
কেবল প্রভু যীশুর নাম সমগ্র জগতে,
যাতে মোরা পাই পরিত্রাণ।

৩ যে বিশ্বাস করিবে, প্রভু যীশুর নামে, জীবিত রবে সে সদা,
তিনিই পথ, তিনিই সত্য, তিনিই অনন্ত জীবন।`},{id:265,title:"প্রভু যীশুর মত ভাই আর কেহ নাই",transliteration:"Probhu Jishur Moto Bhai Ar Keho Nai",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`প্রভু যীশুর মত ভাই আর কেহ নাই, (২)
পাপীর তরে, ক্রুশের ’পরে,
যীশু দিলেন প্রাণ। (২)

১ ভব-নদী ভারী দুস্তর পাড়ি, তাঁর নামে ভাই চালাও তরী;
নামের বৈঠা বাহিয়া চল,
যীশু করবেন পার। (২)

অন্তরা 
যীশু পরম দয়ালু করুণাময়,
তাঁর করুণার সীমা নাই, সীমা নাই—
পাপীর তরে, ক্রুশের ’পরে,
যীশু দিলেন প্রাণ। (২)

২ যে জন ডাকে যীশু নামে, সে জন যাবে অমর ধামে;
থাকিবে সেখানে অমর হয়ে, প্রভু যীশুর ঠাঁই.`},{id:266,title:"প্রভু তোমার করুণায় ধন্য হলাম",transliteration:"Probhu Tomar Korunay Dhonyo Holam",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`(প্রভু) তোমার করুণায় ধন্য হলাম,
প্রভু তোমার আশীর্বাদ মাথায় নিলাম।
(তুমি) যে বাণী দিয়ে গেছ বিশ্বজনে,
সে বাণী ছড়াব মোরা শপথ নিলাম।

১ (আজি) অন্তরে যে ব্যথা পাই নি সাড়া,
সে ব্যথা সয়েছিলে তুমি নীরবে,
তাই মুক্তির সূর্য তুমি যে যীশু,
তোমার আলোয় মোরা মুক্তি পেলাম।

২ (আজি) পুণ্য যজ্ঞে নিজেকে আহুতি দিয়ে,
পবিত্র করে গেছ এ ধরণী।
তাই সব পাপ, সব ভেদ ভুলে গিয়ে,
মহান ধর্মে মোরা দীক্ষা নিলাম।`},{id:267,title:"পাপীর ত্রাণে জন্য যীশু",transliteration:"Papir Trane Jonyo Jishu",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`পাপীর ত্রাণে জন্য যীশু, ক্রুশে সঁপেন প্রাণ,
তাঁর মত কেউ নেই ভুবনে, এমন দয়াবান।

১ স্বর্গ ছেড়ে, মর্ত্যে এসে, পাতকীকে ভালবেসে,
বিনা দোষে সহেন প্রভু, নিন্দা অপমান।

অন্তরা
ঈশ্ব-আদেশেতে মানুষ, দুঃখ ভোগে হায়,
অনুতাপে সে তো আবার ত্রাতার দয়া পায়।

২ খ্রীষ্ট যীশু মুক্তিদাতা, পতিতের পরিত্রাতা,
আর্তজনে উদ্ধারিতে, করেন আত্মদান।`},{id:268,title:"সৈনিক, সৈনিক, সৈনিক— ক্রুশের সৈনিক তব",transliteration:"Soinik, Soinik, Soinik— Krusher Soinik Tobo",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`সৈনিক, সৈনিক, সৈনিক—
ক্রুশের সৈনিক তব,
এগিয়ে চল, এগিয়ে চল, এগিয়ে চল,
মুখে শুধু খ্রীষ্ট নাম বল।

১ আছেন সাথে তিনি, মৃত্যুরে যে করেছেন জয়,
তাই তো মৃত্যুরে তুমি, আর কোরো না ভয়,
পরাজিত শয়তানেরে।

অন্তরা
বিপ্লব আনো আজ সেইখানেতে,
যেথায় আছে কুসংস্কার,
মুক্ত কণ্ঠে গাও সেখানে,
খ্রীষ্টের প্রেম যে অপার।

২ ছড়াও সেথা প্রেমের বাণী, করাও পাপেরই ক্ষয়,
দূর কর যত মূঢ় গ্লানি, ভাঙ্গ পাপেরই আলয়,
খ্রীষ্টের সঙ্গে লয়ে।`},{id:269,title:"চলে যাব আমি দূর থেকে দূরান্তরে",transliteration:"Chole Jabo Ami Dur Theke Durantore",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`চলে যাব আমি দূর থেকে দূরান্তরে
নিয়ে সেই নাম সেই যীশু নাম।

১ যে নামে পাবে সবাই শান্তি,
যে নামে পাবে সবাই মুক্তি।
সেই নাম, সেই যীশু নাম।

২ যে নামে অন্ধ দেখতে পেল,
যে নামে খঞ্জ ছুটে গেল।
সেই নাম, সেই যীশু নাম।

৩ যে নামে ভূতেরা ভয়ে পালায়,
যে নামে মৃত জীবন পায়।
সেই নাম, সেই যীশু নাম।

৪ জানিবে জগৎ বাসী সবে,
যীশুই মুক্তিদাতা ভবে।
সেই নাম, সেই যীশু নাম।

৫ প্রচারের অধিকার পেয়েছে যে,
পেয়েছে যীশুরই কাছে সে।
সেই নাম, সেই যীশু নাম।

৬ হৃদয় খুলে তাঁকে নাও ধরে,
স্বর্গীয় শান্তি পাবে অন্তরে।
সেই নাম, সেই যীশু নাম।`},{id:270,title:"চলরে, চলরে, চল খ্রীষ্টেতে তরুণ দল",transliteration:"Cholre, Cholre, Chol Khristete Torun Dol",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`চলরে, চলরে, চল খ্রীষ্টেতে তরুণ দল,
চলরে, চলরে, চল, বিশ্বাসী ও ভক্তদল,
ছাড়ি লজ্জা, দুঃখ ভাবনা, পড়ে থেক না,
মিথ্যা ভয়ে পড়ে থেক না।

১ দূর দিগন্তে কালো মেঘ ছেয়ে গেছে এ ভুবন,
হিংসা, দ্বন্দ্ব, ভেদাভেদ, পাপে ভারাক্রান্ত মন,
দাও হে প্রাণে আশার চেতনা, আঁধারেতে আর রেখো না।

২ প্রেম আলো ছড়িয়ে দাও, বিশ্বাসী মাঝারে,
প্রেম কাহিনী শুনাও তাদের আছে যারা আঁধারে,
দাও হে প্রাণে আশার চেতনা, আঁধারেতে আর থেক না।`},{id:271,title:"খেলায় কিম্বা কাজে",transliteration:"Khelay Kimba Kaje",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`১ খেলায় কিম্বা কাজে, বুন জগৎ মাঝে,
প্রেম ও শান্তি বীজ অক্লান্ত হইয়া,
উত্তম ফসল তবে পাবে নিশ্চয়ই ভবে,
আসিবে আনন্দে আটি লইয়া।

ধুয়া
যাহা বুনিবে, তাহা কাটিবে,
ভাল বীজ বিস্তর যত্ন করিয়া,
যেমন বুনিবে, তেমন কাটিবে,
আসিবে আনন্দে আটি লইয়া।

২ হাস্য মুখের দর্শন, করে মন আকর্ষণ,
সেবা কর সবে, যীশুর হইয়া,
সদালাপ কর, প্রেমে পরস্পর,
আসিবে আনন্দে আটি লইয়া।

৩ দুঃখী যত আছে, বসি তাদের কাছে,
সেবা কর সবে, যীশুর হইয়া,
ফুলে যেমন সৌরভ, প্রেম হোক তোমার গৌরব,
আসিবে আনন্দে আটি লইয়া।`},{id:272,title:"পাপীর বন্ধু করুণার সিন্ধু",transliteration:"Papir Bondhu Korunar Sindhu",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`পাপীর বন্ধু করুণার সিন্ধু, ক্রুশের উপর,
দিলে তোমার নিজের রক্ত বিন্দু।

১ জগতের তুমি নির্মাতা, জগতের পালন কর্তা,
 জগতের উদ্ধার কর্তা, তুমি যে পাপীর বন্ধু।

অন্তরা
স্বর্গ ছেড়ে এলে সৃষ্ট ধরায়,
শূণ্য হলে তুমি নিঃস্ব হলে,
কালভেরী শৈল চূড়ায়।

২ তুমি সত্য পথ ও জীবন, তোমাকে করি আরাধন,
সঁপি মোদের ক্ষুদ্র এ জীবন, তোমারি চরণে বন্ধু।`},{id:273,title:"এসেছে তোর যীশু ত্রাণধন",transliteration:"Eseche Tor Jishu Trandhon",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`এসেছে তোর যীশু ত্রাণধন,
ও তোর প্রাণ জুড়ানো ধন,
ও তোর মন জুড়ানো ধন,
যে জন তব তরে ক্রুশ 'পরে,
দিলেন আপন জীবন।

১ আকুল প্রাণে ডাকলে তাঁরে, সে কি কভু রইতে পারে,
এসে দেখা দেয় গো তারে, ও যার ভগ্ন চূর্ণ মন।

২ এসেছে আজ তোরও দ্বারে, বরণ করে লও গো তাঁরে,
চরণ ধরে দুই করে, তাঁর পায় কর হে চুম্বন।

৩ হৃদাসনে রেখে তাঁরে, প্রেম ও ভক্তি উপহারে,
আত্মায় সত্যে পূজ তাঁরে, সবে হয়ে এক মন।`},{id:274,title:"যীশু ডাকেন তোমায়",transliteration:"Jishu Daken Tomay",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`যীশু ডাকেন তোমায়, (২)
স্নেহের দুটি হাত বাড়ায়ে বারে বার, যীশু ডাকেন তোমায়।

১ দুঃখের দিনে তিনি সান্ত্বনা দেবেন তোমায়,
যীশুর প্রতি ভক্তি যার থাকে অবিচল,
অসীম কৃপা পায় সে নিত্য তাঁহার।

২ চোখের জল মুছে তোমায় করবেন চোখের মণি,
দুরিবে তোমার ব্যথার কাল মেঘ, দয়াল প্রভুই বিপদে ত্রাণ।

৩ চরম ব্যথায় তুমি আমার মনের শক্তি,
তুমি যে আমার মুক্তির উজ্জ্বল আলো,
বিলম্বী হয়োনা এসো সত্বর।

৪ নিরাময়কারী তিনি, সর্ব রোগ শোক ব্যাধির,
ভক্তি চিত্তে যারা ডাকে তাঁহারে, পূর্ণ হবে সে প্রভুর স্নেহে।`},{id:275,title:"জীবনের একটাই ধ্যান",transliteration:"Jiboner Ektai Dhyan",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`জীবনের একটাই ধ্যান, শুধু ঈশ্বর অনুসন্ধান,
প্রার্থনা করি রাতদিন, কবে ঈশ্বরে হব বিলীন।

১ একটাই মন্ত্র নিয়ে এক হয়ে যাক সব মন,
প্রভু যীশুর কৃপায় পবিত্র হোক এ জীবন;
মেনে নেব সব নির্দেশ, হোক না সে যতই কঠিন।

২ একটাই লক্ষ্য মোদের, কোথায় আছে সেই স্বর্গ,
ঈশ্বর চরণে, যেন দিতে পারি এই অর্ঘ্য।
এ জীবন ব্যর্থ জানি, প্রভুর করুণা বিহীন।`},{id:276,title:"বল মধুমামা যীশু নাম",transliteration:"Bol Madhumama Jishu Nam",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`বল মধুমামা যীশু নাম, হরষিত মনে।
পাপ তাপ দূরে যাবে, যীশু নাম গানে।

১ যীশু যীশু যীশু বল পাপীর বদনে,
মুখরোচক ঐ নাম বিদিত ভুবনে।

২ নিরানন্দ দূরে যাবে দুঃখের পরাণে,
সুখের সাগরে ভাসে নামের পবনে।

৩ রোগ শোক জরা মৃত্যু নাম বিহনে,
পাপ ক্ষয়, মৃত্যুঞ্জয়, হয় নাম গুণে।

৪ ক্ষুধিত তৃষিত জনে পেয়ে নাম ধনে,
নামে ভক্ষ্য নামে মোক্ষ তৃপ্ত সর্বজনে।

৫ দুই কিংবা তিনজনে যীশুর নাম নিলে,
মাঝে এসে দাঁড়ান যীশু প্রতিজ্ঞার গুণে।

৬ সূর্য্যের নিচে অন্য নাম নাই আর ভবে,
পরিত্রাণ কেবল আছে যীশুর নাম গুণে।`},{id:277,title:"হাললেলুইয়া স্তুতি গাই আমি",transliteration:"Hallelujah Stuti Gai Ami",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`হাললেলুইয়া স্তুতি গাই আমি,
যীশুর স্তুতি গাই আমি
হা—হাললেলুইয়া।

১ ক্রুশে বলি দ্বারা নিজের রক্ত বহালেন,
পাপ দূর করে, শুচি করে, আমাকে তিনি বাঁচালেন।

২ এই জীবন দিয়ে সদা তাঁর ধন্যবাদ করব,
তাঁর আত্মা পেয়ে, তাঁর ইচ্ছা জেনে, এগিয়ে চলতে থাকব।

৩ যীশুরই কাছে এস, আর মুক্তি গ্রহণ কর,
আশীষ দেবেন, সাথে থাকবেন, কখনও ছাড়বেন না।`},{id:278,title:"ক্রুশের পরে, ক্রুশের পরে",transliteration:"Krusher Pore, Krusher Pore",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`ক্রুশের পরে, ক্রুশের পরে, ক্রুশের পরে,
ক্রুশের পরে ঐ রক্ত ঝরে,
জীবন দিলেন যিনি পাপীর তরে,
নিষ্ঠুর পৃথিবী বুঝল না — বুঝবে জানি দুদিন পরে।
এই আঁধার পৃথিবীতে মানব হয়ে তিনি এলেন,
পাপীর জন্যে তিনি ক্রুশের পরে মূল্য দিলেন,
নিষ্ঠুর মানব তা বুঝল না, বুঝল না,
বুঝবে জানি দুদিন পরে। ক্রুশের পরে—
পৃথিবী তুমি আজ নীরব থেকো না,
ক্রুশের পানে কি দেখেও দেখো না।
নিস্পাপ প্রাণ আজি তৃষ্ণায় কেঁদে মরে। ক্রুশের পরে—`},{id:279,title:"আয় পাপী, আয় সবে",transliteration:"Ay Papi, Ay Sobe",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`আয় পাপী, আয় সবে, যীশু ডাকেন সুস্বরে;
(যত) পরিশ্রান্ত, ভারাক্রান্ত, বিশ্রাম পাবে অন্তরে।

১ বল পাপী, পাপ করে, কিবা লাভ হয় সংসারে?
পাপের সুখ কদিন থাকে? অশেষ দুঃখ পায় পরে;
পুড়তে হবে মনস্তাপে নরকে চিরতরে।

২ বল পাপী, কাহার দায়, ক্রুশে ঝোলে যীশুর কায়,
শত্রু তরে জীবন যায়, দারুণ ব্যথা বলি তায়;
হেন বন্ধুর কাছে আসি, পরিত্রাণ লও সত্বরে।

৩ তাপিত হৃদে কাঁদিয়া, দাও যীশুর পা ধোয়াইয়া;
প্রীতি চুলে মুছাইয়া, প্রেম চুম্বন দাও সকলে;
সুবাসিত ভক্তি তেলে, পূজ শ্রীপদ অন্তরে।

৪ পাপী ফির পাপ হতে, যেওনা আর কুপথে;
ফির ফির সুপথে, মরবে কেন পাপেতে?
পাপের ক্ষমা যীশুতে লও, পাবে শান্তি অন্তরে।`},{id:280,title:"পাপ বোঝা মুক্ত হও বাসনা কি?",transliteration:"Pap Bojha Mukto Hou",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`১ পাপ বোঝা মুক্ত হও বাসনা কি?
সে বল শোণিতে, বল শোণিতে,
মন্দ পরে জয়ী হও ইচ্ছা কি? সেই শোণিতে আশ্চর্য্য বল।

ধুয়া 
আছে বল, বল, অদ্ভুত কার্য্য বল, শোণিতে, শোণিতে,
আছে বল, বল, অদ্ভুত কার্য্য বল, হত মেষের শোণিতে বল।

২ ইচ্ছা কি গর্ব কি ক্রোধ মুক্ত হও?
সে বল শোণিতে, বল শোণিতে,
যাও কালভেরীতে ধৌত হইবারে, সেই শোণিতে আশ্চর্য্য বল।

৩ ইচ্ছা কি তুষার হইতেও সাদা হও?
সে বল শোণিতে, বল শোণিতে,
প্রাণদায়ী স্রোতে সব পাপের দাগ ধোও,
সেই শোণিতে আশ্চর্য্য বল।

৪ ইচ্ছা কি যীশুরই দাস হইতে চাও?
সে বল শোণিতে, বল শোণিতে,
ইচ্ছা কি দিন দিন তাঁহার গৌরব গাও,
সেই শোণিতে আশ্চর্য্য বল।`},{id:281,title:"যীশু খ্রীষ্ট নাম গাও রে বদনে",transliteration:"Jishu Khristo Nam Gao Re Bodone",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`যীশু খ্রীষ্ট নাম গাও রে বদনে,
গাও রে বদনে, নাম লও রে বদনে।

১ (যে নাম) যোগী ঋষি মুনিগণ নাহি পায় ধ্যানে,
যোগী ঋষিগণ রে, নাহি পায় ধ্যানে,
যে নাম না পায় ধ্যানে রে, যোগী ঋষিগণ,
যীশু নাম নাম রে, সর্বশ্রেষ্ঠ নাম।

২ (ও ভাই) হেন সুধাময় নাম নাহি ত্রিভুবনে
ত্রিভুবনে নাহি রে, এমন নাম সুধা,
হৃদয় ভরে পিয় রে, যীশু নাম সুধা,
যীশু নাম নাম রে, সুধাময় নাম।

৩ (ও ভাই) দুঃখ তাপ দূরে যায়, এ নাম শ্রবণে,
দুঃখ যায় দূরে রে, যীশু নাম শুনে,
প্রাণ শীতল হবে রে, যীশু নাম শুনে,
যীশু নাম নাম রে, মধুময় নাম।

৪ (এ নাম) ধ্যান কর দিবানিশি, শয়নে স্বপনে,
হৃদে স্মরণ কর রে, দিবানিশি ঐ নাম,
দিবানিশি স্মর রে, শয়নে স্বপনে,
যীশু নাম নাম রে, দিবানিশি লও।`},{id:282,title:"কত অপরূপ কার্য্য",transliteration:"Koto Oporup Karjyo",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`কত অপরূপ কার্য্য, যীশু করলেন এ জগতে,
স্রষ্টা হয়ে সৃষ্টি রূপে, অবতার নর দেহেতে।

১ অন্ধ খঞ্জ নুলা যত আর যত ভূতাশ্রিত,
কুষ্ঠরোগী কত শত, মুক্ত করলেন নিজ বলেতে।

২ বোবা বধির যত ছিল, বলতে শুনতে শক্তি পেল,
পঞ্চ রুটির ভোজ হইল, খেলো পঞ্চ সহস্রেতে।

৩ সমুদ্রের জলোপরি, পদব্রজে গমন করি,
ধমকে বায়ু নিবারি, শকতি দেখান জগতে।

৪ মৃতে জীবন দান করি, হইলেন মৃত্যুহারী,
এ প্রকার ভূরি ভূরি, লিখিত আছে শাস্ত্রেতে।`},{id:283,title:"প্রচারিব গানে গানে",transliteration:"Procharibo Gane Gane",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`প্রচারিব গানে গানে, সুসমাচার একই প্রাণে,
ছুটে যাব ঘরে ঘরে, শহর নগর আর বন্দরে-বন্দরে।

১ দেখেছি তোমায় প্রভু, কতরূপে কতবার,
ভালোবাসো আমাদের নেই যে তুলনা তার,
অন্ধকে দেখেছি আলো দিতে,
দেখেছি তোমায় প্রভু ঝড় থামাতে
দেখেছি তোমায় প্রভু, রুদ্ররূপে।

২ দেখেছি তোমায় প্রভু, পাপীরে করিতে ত্রাণ,
দিয়েছিলে ক্রুশোপরে, সঁপে — নিজ প্রাণ,
ক্রুশের পানে আজ ছুটে যাব, শান্তি সেথায় জানি খুঁজে পাব,
জীবন সঁপেছি আমি যীশুর তরে।`},{id:284,title:"আয় আয় চলে আয়",transliteration:"Ay Ay Chole Ay",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`আয় আয় চলে আয়, কে যাবি ঐ সিয়োনে,

১ দুঃখ ব্যথায় ভুবন ভরা, পাপ ব্যাধিতে মানব মরা,
যীশুতে পায় জীবন তারা, বিশ্বাস তাঁকে করে যারা।

২ পাপের বোঝা মাথায় নিয়ে, যাস কেন নরকে ধেয়ে,
দেখনা একবার ক্রুশের দিকে, জীবনদাতা ঐ ঝুলিছে।

৩ কত জনে বিশ্বাস করে, মুক্তি শান্তি জীবন পেয়ে,
কাটাচ্ছে দিন মহানন্দে, যীশুর নামের গুণ গেয়ে।`},{id:285,title:"ওগো প্রভু আমার",transliteration:"Ogo Probhu Amar",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`ওগো প্রভু আমার, তোমার জীবন
সঁপে দিলে কালভেরীর উপর।
রক্ত ঝরে, রক্ত ঝরে, কার তরে ঐ রক্ত ঝরে।

১ অবাক পৃথিবী তাকিয়ে আজও এই ক্রুশ পানে,
অন্ধ মানব হায়রে বুঝতে নাহি পারে। রক্ত ঝরে—

অন্তরা : দিকে দিকে আজ যেন হাহাকার,
দিনের আলো নিভে গেল হল যে অন্ধকার।

২ শ্রান্ত পথিক শোনো হে, চোখ মেলে দেখ চেয়ে,
বলো হে কার পাপেতে বিদ্ধ ত্রাতা ক্রুশে, রক্ত ঝরে—`},{id:286,title:"পিতা, পুত্র, আত্মার নামে",transliteration:"Pita, Putro, Atmar Name",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`(সুর: অপার মহিমা তব নাহিক হে)
পিতা, পুত্র, আত্মার নামে, আজি অবগাহিত হও,
পুরাতন ভাব ছাড়ি, নূতন স্বভাব লও।

১ মরিলে যীশুর সাথে তুমি আর পাপের নও;
যীশুতে উঠিলে তুমি, জীবনে যীশুর হও।

২ প্রতিজ্ঞা করিলে যাহা, রাখিতে তৎপর হও,
বিপদ লাঞ্ছনা দুঃখ, যীশু তরে সব সও।

৩ প্রার্থনা ও শাস্ত্রপাঠ, ধ্যানে সদা রত রও,
সদালাপে ভ্রাতৃ প্রেমে, পরহিতে ব্রতী হও।

৪ বিশ্বাস, প্রত্যাশা, প্রেম, উৎসাহেতে পূর্ণ হও,
স্বদল বিদল মাঝে যীশু প্রেম কথা কও।`},{id:287,title:"পাপী কোথায় যাও",transliteration:"Papi Kothay Jao",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`পাপী কোথায় যাও, কোথায় যাও, ঐ ক্রুশের দিকে চাও,
যীশুর কাছে এসে, এক নিমিষে; দুঃখ শোক মিটাও।

১ পাপে ভারাক্রান্ত, পথশ্রান্ত, আর কেন বেড়াও,
দেখ আসছে নিশা, ঘোর দুর্দশা, এই বেলা পলাও।

২ তুমি সুখ হারা, শান্তি ছাড়া, কোথায় ধাবিত হও,
মিছে মরছ ঘুরে, ঘানির ফেরে, এখন মন ফিরাও।

৩ তোমার তাপিত হৃদে, কেঁদে কেঁদে, পাপ দূর করে দাও,
থেকে যীশু পদে, নিরাপদে, শেষ জীবন কাটাও।

৪ দেখ স্বর্গানন্দে, সুখের গৃহে, বিশ্রাম সুখ লও,
দূতের সাথে মিলে ক্রুশতলে, ক্রুশ ও যীশু গাও।

৫ যীশু যীশু গান, সর্বক্ষণ প্রাণ খুলে গাও,
প্রাণের আশা মত, মিলবে মধু, ঐ পায়ে লুটাও।`},{id:288,title:"রব উঠে অস্থির তরঙ্গ হইতে (There's Call Come Ringing)",transliteration:"Rob Uthe Osthir Torongo Hoite",composer:"চার্লস এইচ. গ্যাব্রিয়েল (১৮৯০)",category:"পরিত্রাণ ও সুসমাচার",lyrics:`১ রব উঠে অস্থির তরঙ্গ হইতে, আলো দাও, আলো দাও,
আছে বহু আত্মার উদ্ধার পাইতে, আলো দাও, আলো দাও।

ধুয়া 
আলো দাও ঐ সুসমাচারের যাহা চতুর্দিকে যায়,
আলো দাও ঐ সুসমাচারের চিরকাল তা উজ্জ্বল রয়।

২ মাকিদনিয়ার আজি শুনি সেই আহ্বান,
আলো দাও, আলো দাও,
যখন ক্রুশের তলে আসি লয়ে দান,
আলো দাও, আলো দাও।

৩ যীশুর অনুগ্রহ যেন পায় সবে,
আলো দাও, আলো দাও,
সেই খ্রীষ্টীয় জীবন পাওয়া যায় ভবে,
আলো দাও, আলো দাও।

৪ যেন ক্লান্ত না হই প্রেমের ঐ কাজে,
আলো দাও, আলো দাও,
যবে প্রস্তুত হই স্বর্গের মুকুট তরে,
আলো দাও, আলো দাও।`},{id:289,title:"ভারত, ভারত, মোদের জন্মভূমি ভারত",transliteration:"Bharat, Bharat, Moder Jonmobhumi Bharat",composer:"",category:"পরিত্রাণ ও সুসমাচার",lyrics:`ভারত, ভারত, মোদের জন্মভূমি ভারত,
কোটি কোটি সন্তান পায় নি কো পরিত্রাণ,
হাহাকার করে অবিরত।

১ সুনয়নে কে দিল গো আঁখি জল,
নয় কি সে শয়তান, নয় দিয়াবল?
পাপানলে চারিধার, করেছে সে ছারখার,
কে নিভাবে এ আগুন, কে নিবে ব্রত।

২ চেয়ে দেখ একবার ভারতমাতা,
সম্মুখে তোমার কে ক্রুশেতে গাঁথা,
তোমার তরে কত রক্ত ঝরে, (কত রক্ত ঝরে)
তব তরে বহে অবিরত।`},{id:290,title:"প্রেম যে চির মধুর",transliteration:"Prem Je Chiro Modhur",composer:"",category:"বিবাহ",lyrics:`প্রেম যে চির মধুর, প্রেম যে চির উজ্জ্বল,
প্রেম যে মহিমাময়, প্রেম যে চির সবল।

১ প্রেম যে সবার প্রাণে, চির মধুরতা আনে,
প্রেম মাধুর্যে ফোটে, জীবনের শতদল।

অন্তরা : প্রেম আছে যেথা, বিচ্ছেদ সেথা নাই,
প্রেমের স্পর্শে শুচি যে রয় সদাই।

২ প্রেম যে সবার তরে, চির প্রতীক্ষা করে,
আঘাতের মাঝে সে যে, রহে চির অবিচল।`},{id:291,title:"রমণীয় হোক এই শুভ পরিণয়",transliteration:"Romoniya Hok Ei Shuvo Porinoy",composer:"মানিক নাথ",category:"বিবাহ",lyrics:`রমণীয় হোক এই শুভ পরিণয়,
তোমারি করুণা লভি ওগো প্রেমময়।

১ তোমা মাঝে হয় যেন হারা,
সুমিলিত দুটি প্রীতি ধারা,
তোমারি আশীষ ঢেলে দাও প্রভু আজি,
করি শুধু অনুনয়।

অন্তরা 
সংসার সরণিতে, গাহি তব গান,
আঁধারে আলোকে দোঁহে হবে আগুয়ান।

২ সুখে দুঃখে থেকো দিবা রাতি,
তুমি ওগো তাহাদের সাথী,
তোমারি পরশে আজি হবে জানি প্রভু,
বন্ধন চির অক্ষয়।`},{id:292,title:"তোমার আশীষ দাও গো প্রভু",transliteration:"Tomar Ashish Dao Go Probhu",composer:"",category:"বিবাহ",lyrics:`তোমার আশীষ দাও গো প্রভু, এ নব দম্পতিরে,
বাঁচিয়ে রাখিও চিরদিন তরে, তোমার প্রেমের জোরে।

১ বাঁধার মেঘের আঁধার যখন, ঘিরিবে এদের নূতন জীবন,
সরিয়ে দিও সকল বিঘ্ন, তোমার প্রেমের জোরে।

অন্তরা 
তোমার ইচ্ছায় ওগো প্রভু যারা একাঙ্গ হয়,
তাদের মিলন সার্থক হয়, তোমার করুণায়।

২ বিশ্বাসে এদের রাখিও মগন, বাঁধা যেন থাকে সর্বক্ষণ,
তোমার প্রেমের মধুর স্পর্শে, হৃদয় দিও গো ভরে।`},{id:293,title:"সফল কর তুমি প্রভু আজ",transliteration:"Sofol Koro Tumi Probhu Aj",composer:"",category:"বিবাহ",lyrics:`সফল কর তুমি প্রভু আজ, এ শুভ মিলন,
ভরিয়া দাও তোমার আশীষ, এ নবীন দুটি প্রাণ।

১ এদন বাগানে আদমে হবায় যেমন
নিজ হাতে তুমি করেছিলে সম্প্রদান,
আজি হে পিতঃ সেদিনের মত, এদের কর আশীষ দান।

অন্তরা
কত যে দুঃখ বাধা রয়েছে ছড়ায়ে জীবনের চলার পথে,
আপদে বিপদে রক্ষ এদের নাথ, ধরি নিজ হাতে।

২ যতদিন ভবে থাকিবে তব দাস-দাসী
প্রেম-ভক্তি সহ পুজিতে দাও শকতি,
ওহে প্রেমময়, ওহে দয়াবান, তুমিই জীবনের ধন।`},{id:294,title:"আয় চলে আয়, দিন বয়ে যায়",transliteration:"Ay Chole Ay, Din Boye Jay",composer:"",category:"পরলোক",lyrics:`আয় চলে আয়, দিন বয়ে যায়, যাবি যদি নিত্য ভবনে,
সংসার অসার কেন ভুলে আছ মায়া বন্ধনে?

১ বুঝে দেখ ভাই সকলি অনিত্য,
যীশু খ্রীষ্ট স্বয়ং সনাতন ও সত্য,
সেই নামে, অধমে, ভবে শান্তি পায় ইহ জীবনে।

২ ভীষণ মরণ সতত নিকটে,
পদে পদে তোমায় ঘেরে হে সঙ্কটে,
বিপদে, অবাধে, পাপী নিরাপদ হয় চরণ স্মরণে।

৩ ধর ধর ভাই যীশু প্রাণকান্তে, নিরাপদ হবে জীবন অন্তে,
মরণ ভয়, নাই সেথায়, হবে নিত্য সুখে সুখী সেখানে।`},{id:295,title:"আনন্দ ধরে না মনে",transliteration:"Anondo Dhore Na Mone",composer:"",category:"পরলোক",lyrics:`আনন্দ ধরে না মনে, প্রিয় নাথের প্রেমালাপনে।
মোরা যীশুর প্রেমে বাদাম তুলে, চলে যাব সিয়োনে।

১ (শুন) শুভ সমাচার, (যীশু) খুলে স্বর্গ-দ্বার,
জীবন মুকুট হস্তে লয়ে ডাকেন বারে বার,
(ওহে) যুদ্ধেতে বিজয়ী ভক্ত, স্বর্গ তোমার কারণে।

২ (স্বর্গ) পিতার ভবন, (অসংখ্য) সাধু দূতগণ
নাচিছে গাহিছে সদা প্রফুল্ল বদন,
(পিতা) অব্রাহাম ও লাসার আছেন, যীশুর সাথে সেখানে।

৩ (আছে) জীবন বৃক্ষের ফল, (আর) শান্তি নদীর জল
আহার পানে তৃপ্ত সব ভকতের দল,
(আমরা) তাহাদের সঙ্গে রব, চেয়ে যীশুর মুখপানে।`},{id:296,title:"যীশু বিনে পাপীর বন্ধু আর কেহ নাই",transliteration:"Jishu Bine Papir Bondhu Ar Keho Nai",composer:"",category:"পরলোক",lyrics:`যীশু বিনে পাপীর বন্ধু আর কেহ নাই।
আজি প্রাণপণে ধর তাঁরে জীবন জুড়াই।

১ দুঃখরূপ জগত সংসারে, যখন পাপের জ্বালা পড়ে মনে,
চেয়ে দেখি আর উপায় নাই।
(তখন) যীশুর কাছে গেলে পরে মনে কত শান্তি পাই।

২ যীশু আমার জীবনের ধন, সদাই আমায় করে চেতন,
এমন বন্ধু খুঁজলে কোথায় পাই,
আমি যীশুর সঙ্গে মৃত্যু-নদী পাড়ি দিব ভাই।`},{id:297,title:"তোমার কিসের দ্বন্দ্ব লাগে গো বন্ধু",transliteration:"Tomar Kiser Dwondo Lage Go Bondhu",composer:"",category:"পরলোক",lyrics:`তোমার কিসের দ্বন্দ্ব লাগে গো বন্ধু,
কার লাগি বাঁধিয়াছ ঘর?
দয়াল রে, দয়াল রে ............

১ বাঁশের ঘরখানি পাতার ছাউনি, আকাশের নিচে খোলা,
তাহার ভিতরে জননীর কোলে,
খেলিছে রঙের খেলা গো বন্ধু।

২ আসল ফেলিয়া নকল বুঝিলা, বুঝিলা পথ অবশেষে,
যীশু ত্রাণধন পতিত পাবন,
হয়না পথ শেষ গো বন্ধু।

৩ এতকাল গেল ঘুরিতে ফিরিতে, হাতে নাই কানাকড়ি,
এস ত্বরা করি, পারে যাবে যদি,
যীশু নামের কাণ্ডারী গো বন্ধু।`},{id:298,title:"কেন যে আজ সংসার মায়ায়",transliteration:"Keno Je Aj Songsar Mayay",composer:"",category:"পরলোক",lyrics:`কেন যে আজ সংসার মায়ায়,
প্রভু তোমায় ভুলে যাই হায়!

১ জেনেও যে জানিনা, শুনেও যে শুনি না,
অগ্নিময় জগতে এই মায়াজালের বেদনায়,
ডুবে মরি হায়!

২ অনন্তের সুখ ছেড়ে ভাই, নরকের পথ ছায়ায়,
কলঙ্কিত বোঝার ভারে, হাবু ডুবু খেয়ে ভাই,
ঘুরে মরি হায়!

৩ শীতল হৃদয় সজীব হোক, আঁধার মনের আলোক হোক,
যীশুর প্রেমের নিমন্ত্রণে জাগ্রত হোক মৃত প্রাণ,
সময় নাই হায়!`},{id:299,title:"ধুয়ে নয়নের জলে",transliteration:"Dhuye Noyoner Jole",composer:"",category:"পরলোক",lyrics:`ধুয়ে নয়নের জলে, ওহে দয়াল যীশু, তোমার চরণ দুখানি
আমি রাখব সদা হৃদ মন্দিরে পূজব দিবা রজনী।

১ ঐ চরণের সুশীতল ছায়ায়, আমার তাপিত এ অঙ্গ জুড়ায়,
জুড়ায় আমার তাপিত পরাণী।
বসে ঐ চরণে, পড়ে মনে স্বর্গের সুখের কাহিনী।

২ বসে আছি সেই দিনের আশায়, দয়াল যেদিন তুমি
ডাকবে আমায়, ওপার হইতে আসবে তরণী।
ছেড়ে অসার সংসার যাব ওপার, যথায় তোমার রাজধানী।`},{id:300,title:"আমার জুড়াল প্রাণ এসে যীশুর পায়",transliteration:"Amar Juralo Pran Ese Jishur Pay",composer:"",category:"পরলোক",lyrics:`আমার জুড়াল প্রাণ এসে যীশুর পায়।
এসে দয়াল যীশুর শ্রীচরণতলে—আমার ঘুচলো ভবের ভয়।

১ ঐ চরণে নাইরে দুঃখ ক্লেশ, নাইরে ভবের জ্বালা
পাপ অশান্তির লেশ,
বুঝি দুগ্ধমধু-প্রবাহী সেই দেশ, আছে ঐ চরণতলায়।
(ও সেই দুগ্ধমধু-প্রবাহী দেশ।)

২ মনে আমি করেছি মনন, প্রভুর ঐ চরণে থাকবো সর্বক্ষণ।
আমার এই পাপ-দেহে যাবৎ রয় জীবন,
রব ঐ চরণ সেবায়।
(দেহে যতদিন মোর জীবন আছে।)

৩ সময় যেদিন ফুরাবে আমার,
সেদিন যেতে হবে ছেড়ে এ সংসার।
আমি হয়ে যাব মৃত্যু-নদী পার,
যীশুর ঐ চরণ নৌকায়।
(আমি মৃত্যু-নদী পাড়ি দিব।)`}],Cb=[{id:301,title:"সকল পথের শেষে এসে পেয়েছি প্রভু তোমার দেখা",transliteration:"Shokol Pother Sheshe Ese Peyechi Probhu Tomar Dekha",composer:"নির্মলানন্দ সরকার (১৯৪৫)",categories:["পরলোক","আরাধনা"],lyrics:`১ সকল পথের শেষে এসে পেয়েছি প্রভু তোমার দেখা,
সকল সাথী গেছে ফিরে, তুমি শুধু দাঁড়িয়ে একা।

১ পথের মাঝে বারে বারে, যতই গেছি দূরে সরে,
দেখি তবু ঘুরে ঘুরে, ঐ যে তোমার চরণ রেখা।

অন্তরা
যদি কেহ শুধায় মোরে, এমন সাথী কে সে?
সুখে দুঃখে সকল কাজে, সদাই পাশে পাশে,

২ বলব আমি সবার মাঝে, সে সাথীর মোর খোঁজ মিলেছে,
পরাণ আমার ভরে গেছে, সার্থক আমার যীশু ডাকা।`},{id:302,title:"বাড়ী যাইতে বুঝি আমার সাথে, সাথী মিলিল না",transliteration:"Bari Jaite Bujhi Amar Sathe Sathi Mililo Na",composer:"মুক্তারাম বাড়ৈ",categories:["পরলোক"],lyrics:`বাড়ী যাইতে বুঝি আমার সাথে, সাথী মিলিল না।

    ১ ছিল যখন বাল্যবেলা, করতেম কত ধুলা-খেলা,
যাদের সঙ্গে করছি খেলা, যাবার বেলা কেউ এলোনা।

২ গেল রে গেল রে বেলা, সাঙ্গ হল ভবের মেলা,
বিপদ দেখিয়া তারা, আমারে কেউ চিনিল না।

৩ যাদের জন্য করছি দেরি, পুত্র কন্যা প্রিয় স্ত্রী / স্বামী,
এখন আমি প্রাণে মরি, আমার বোঝা কেউ ধরে না।

৪ দেহ-তরী ত্যাজ্য করি, চলছি এখন পিতার বাড়ি,
মৃত্যু-নদী দিচ্ছি পাড়ি, সঙ্গে যীশু, আর কেহ নাই।`},{id:303,title:"আয় মন চল যাই সেই নিত্যানন্দ ধামে",transliteration:"Ay Mon Chol Jai Shei Nityananda Dhame",composer:"বিন্দুনাথ সরকার",categories:["পরলোক"],lyrics:`আয় মন চল যাই সেই নিত্যানন্দ ধামে,
    যথা শান্তি নদী উথলিছে সদা যীশুর নামে।
(আনন্দের আর সীমা নাইরে।)
    ১ তথা মূর্তিমান ত্রাণকর্তা পিতা যাঁর বামে,
(নয়নে হেরিব সকলে।)

২ তাঁর প্রেক-বিদ্ধ হস্ত-পদ, (মোরা) হেরিব গো প্রেমে,
(প্রেমধারা ফেলে নয়নে।)

৩ সব দুঃখতাপ ভুলে গিয়ে (মোরা) থাকিব আরামে,
(আনন্দের দিন কবে হবে রে।)

৪ ঐ যে পাপের জ্বালা না রহিবে সে আনন্দ ধামে,
(চিরসুখে সুখী হবে গো।)

৫ মোরা শমন ভয়ে ভীত নাহি হইব সেখানে,
(শমন ভয় দূরে যাবে গো।)`},{id:304,title:"যীশুর আলো কি উজ্জ্বল দেখাই খুলে প্রাণ কারে",transliteration:"Jishur Alo Ki Ujjol Dekhai Khule Pran Kare",composer:"রাজেন্দ্রলাল মুখোপাধ্যায় (১৮৯২)",categories:["পরলোক"],lyrics:`যীশুর আলো কি উজ্জ্বল দেখাই খুলে প্রাণ করে!
দেখ সূর্য লাগে কোথায়, তাঁর আলোর কাছে সব হারে।
১ ঐ আলো মোর অন্তরে, ভালো মন্দের বিচার করে,
(তাই) সদা জেগে থাকি আমি, নির্ভর যীশুর উপরে।

২ এত জ্ঞান যীশুতে পাই, ভাষা নাহি সে সব বুঝাই,
(তাই) যীশুর গান আপনি গাই, যীশুর আলোয় তান ধরে।

৩ ভক্ত সকল সাবধান হও, যীশুর আলোয় প্রাণ মিলাও,
(সদা) চল মাঝে থেম নাকো, সর্ব্ব পূর্ণতার তরে।`},{id:305,title:"ঐ শোনা যায় ওপারের গান",transliteration:"Oi Shona Jay Opater Gan",composer:"প্রিয়নাথ বৈরাগী",categories:["পরলোক"],lyrics:`ঐ শোনা যায় ওপারের গান, সঙ্গীত-ধ্বনি অমরপুরে.
স্বর্গে দূতের বীণায় তান উঠেছে ভাই,
মধুর যীশু নামে আকাশ জুড়ে।
১ ছেড়ে ভবের কোলাহল, মুখে বল যীশু-নাম বল,
সুরধনীর ধারার বেগে ছুটুক দুই নয়নের জল,
মনের আনন্দে আজ গাওরে ঐ নাম ভাই,
একবার মিশায়ে ওপারের সুরে।

২ বুঝি ঐ সেই সোনার রথ, আলো করে আকাশ পথ,
আসিতেছেন ঈশ্বর নন্দন, শত স্বর্গ দূতের সাথ;
এবার ঘুচে যাবে ভব-যন্ত্রণা ভাই,
যদি উদয় হ'ন মনোমন্দিরে।

৩ ধুয়ে দেহ আত্মা মন, একবার কর আয়োজন,
সাজায়ে সেই মনোমন্দির তাঁরে কর অভ্যর্থন;
তোমার ঘরের জঞ্জাল দূর করে দাও ভাই,
সোনার আসন পাত হৃদয় জুড়ে।

৪ লয়ে প্রফুল্ল হৃদয়, মুখে বল “যীশুর জয়”,
ঊর্দ্ধমুখে করজোড়ে থাক তাঁহার অপেক্ষায়,
ও তাঁর মুখের কথা পেয়েছি রে ভাই,
থাকবেন স্বর্গ ছেড়ে তোমার ঘরে।`},{id:306,title:"পেলেম জীবন যীশুর করুণায়",transliteration:"Pelem Jibon Jishur Korunay",composer:"বিন্দুনাথ সরকার (১৮৮৪)",category:"পরলোক",lyrics:`পেলাম জীবন যীশুর করুণায়,
আমি মরণে কি আর করি ভয়।
১ আমি যতদিন থাকিব ভবে,
আমার জীবনেতে প্রভু যীশুর গৌরব হবে;
গেলে পরলোকে, মন সুখে, হেরিব সেই দয়াময়।

২ আমি জানিয়াছি পাপের যাতনা,
পাপ কার্য্যেতে সদা দুঃখ মনে শান্তি থাকে না;
আমি পাপকে ছেড়ে, খ্রীষ্ট ধরে, পেয়েছি নূতন হৃদয়।`},{id:307,title:"ভব সাগরের কূলে, ওহে দয়াল যীশু",transliteration:"Bhobo Shagorer Kule Ohe Doyal Jishu",composer:"প্রিয়নাথ বৈরাগী",category:"পরলোক",lyrics:`ভব সাগরের কূলে, ওহে দয়াল যীশু, তোমার পথ পানে চেয়ে,
আমি বসে আছি একা একা, পারে যাবার আশায়ে।

১ দেখতে দেখতে ফুরাল বেলা,
এদিক ভেঙ্গে এল ভবের মেলা;
সন্ধ্যা এল অন্ধকার হয়ে।
মোরে আর কতকাল রাখবে দয়াল, শূন্য ঘাটে বসায়ে।

২ ওপারের ঐ সোনার বন্দরে, বাতি জ্বলে শহর আলো করে;
চলে যাত্রী তোমার গুণ গেয়ে।
মিলে তাদের সাথে গাব ঐ গান আশা আছে হৃদয়ে।

৩ শুনেছি হে তোমার দরবারে, সোনার বীণা লয়ে মধুর সুরে,
গান করে দায়ুদ—সভা মজায়ে।
আমি শুনতে চাই সেই মধুর কীর্তন তোমার দরবারে যেয়ে।

৪ তোমার আসন প্রদক্ষিণ করে, আমি নেচে নেচে ঘুরে ঘুরে,
কাটাব কাল তোমার গুণ গেয়ে।
তুমি এস প্রভু ত্বরা করি এস খেয়ার নাও লয়ে।`},{id:308,title:"সুরক্ষা যীশুর কোলে (Safe in the arms of Jesus)",transliteration:"Surakkha Jishur Kole",composer:"ফ্যানি জে. ক্রসবি",category:"সমাধি ও সান্ত্বনা",lyrics:`১ সুরক্ষা যীশুর কোলে! তাঁর বক্ষ আশ্রয় স্থান,
তাঁর প্রেমে হইয়া মগ্ন, পায় বিশ্রাম তথায় প্রাণ;
ঐ শুন সঙ্গীত ধ্বনি, স্বর্গীয় দূতগণ গায়,
এ হৃদয় এখন যীশুর শ্রীমুখের দীপ্তি পায়।

২ সুরক্ষা যীশুর কোলে, নাই ভীষণ চিন্তার লেশ,
পরীক্ষা পাপে আমায় না দিবে সেথা ক্লেশ,
যদিও কিঞ্চিৎ দুঃখ মোর তরে হেথায় রয়,
পাই সেথা গিয়ে মুক্তি, না হইবে সংশয় ভয়।

৩ হে যীশু প্রিয় ত্রাতঃ, মোর তরে হত প্রাণ,
সুদৃঢ় আশ্রয়-গিরি, চিরন্তন আশার স্থান;
দেও ধৈর্য আমার মনে, রই তোমার অপেক্ষায়,
হয় যখন নিশি প্রভাত, প্রাণ যেন তোমায় পায়।`},{id:309,title:"কেন রে ভাবনা? কিসের ভাবনা?",transliteration:"Keno Re Bhabna? Kisher Bhabna?",composer:"মথুরা নাথ বোস (১৮৮৪)",category:"সমাধি ও সান্ত্বনা",lyrics:`কেন রে ভাবনা? কিসের ভাবনা?
পিতা সর্ব্বাধিপ তাহা কি জান না?
ভ্রাতা তাঁর দক্ষিণে তোমার কারণে,
করিছেন মিনতি, নাহিরে ভাবনা।

১ তিনি যে সঙ্কটে অতিশয় নিকটে,
আসি করেন দূর, সকল যন্ত্রণা;
বিশেষ প্রত্যুষে দুঃখ রাত্রি শেষে,
আসি নিজ দাসে করেন সান্ত্বনা।

২ পৃথিবী স্বর্গের শকতি অপার,
হয়েছে অর্পিত, যাঁহার উপর;
সৃজন কারণ, ঈশ্বর নন্দন,
সঙ্গে সেই যীশু নাহিরে ভাবনা।`},{id:310,title:"যীশুর নামটি সঙ্গে রাখ (Take the name of Jesus)",transliteration:"Jishur Namti Songe Rakho",composer:"নৃপাল চন্দ্র বিশ্বাস (১৮৮৫)",category:"সমাধি ও সান্ত্বনা",lyrics:`১ যীশুর নামটি সঙ্গে রাখ দুঃখী খ্রীষ্ট যেই জন;
কোন শঙ্কা রবে নাকো পাইবে তাতে শান্ত মন।

ধুয়াঃ প্রিয় নাম কি মধুর, ভবের আশা স্বর্গসুখ। (২)

২ যীশু নামটি ধরে থাক নিত্য তব ঢালের ন্যায়,
পরীক্ষাতে যদি ঘেরে, নামটি স্মর’ প্রার্থনায়।

৩ কিবা প্রিয় যীশু নামটি, নিত্য মধুরতাময়!
গাহি যবে নামের কীর্ত্তি, চিত্ত সুখে পূর্ণ হয়।

৪ যবে প্রেম আলিঙ্গনে, তাঁহার ক্রোড়ে ধৃত হই,
ইচ্ছা করে সেই সুখে নিত্য আমি ডুবে রই।

৫ যীশু নামে প্রণাম করি, পুজি তাঁহার পদদ্বয়,
বিজয় মুকুট তাঁহার শিরে, সঁপি এস ভক্তচয়।`},{id:311,title:"যীশু মোদের কেমন বন্ধু (What a friend we have in Jesus)",transliteration:"Jishu Moder Kemon Bondhu",composer:"জোসেফ এম. স্ক্রাইভেন",category:"সমাধি ও সান্ত্বনা",lyrics:`১ যীশু মোদের কেমন বন্ধু, বহেন পাপ ও তাপের ভার,
মনের কথা ঈশ্বর সনে বলিলে, হয় সুখ অপার,
হায়! কি শান্তি আমরা হারাই, বৃথা সহি দুঃখ ক্লেশ;
পিতার কাছে নাহি জানাই, মোদের অভাব সবিশেষ।

২ যখন হয় ভীষণ পরীক্ষা, কিম্বা দুঃখ যাতনা,
না হও তাতে ভগ্ন আশা, কর তখন প্রার্থনা।
হেন পরম বন্ধু কোথায়, মোদের দুঃখের ভাগী হয়,
যীশু জানেন মোদের দশা, ধর তাঁকে প্রার্থনায়।

৩ যখন আমরা শ্রান্ত ক্লান্ত, ভয়ে অবসন্ন প্রায়,
যীশু সহায় অবিশ্রান্ত, ধর তাঁকে প্রার্থনায়;
প্রিয় বর্গ যখন নির্দয়, তখন কর প্রার্থনা,
কোন ভয় নাই যীশুর কোলে, তথায় পাইবে সান্ত্বনা।`},{id:312,title:"বন্ধু কি আর আছে যীশুর মত? (There is not a friend)",transliteration:"Bondhu Ki Ar Ache Jishur Moto?",composer:"মদন মোহন বিশ্বাস (১৮৮৪)",category:"সমাধি ও সান্ত্বনা",lyrics:`১ বন্ধু কি আর আছে যীশুর মত? কেহই নাই, কেহই নাই!
আছে কেউ সারিতে প্রাণের ক্ষত? কেহই নাই, কেহই নাই!

ধুয়াঃ যীশু মোদের সব দুঃখ জানেন, তাঁহার করুণা নিত্যস্থায়ী,
আমাদের দয়ালু যীশুর মত, কেহই নাই, কেহই নাই!

২ আছে কে তাঁর মত সুপবিত্র? কেহই নাই, কেহই নাই!
কে আছে তাঁর সম নম্রচিত্ত? কেহই নাই, কেহই নাই!

৩ অগ্রাহ্য কে যীশুর কাছে এলে? কেহই নাই, কেহই নাই!
কোন অনুতাপী তাঁর অপ্রেম পাবে? কেহই নাই, কেহই নাই!

৪ কি ধন আছে আমার যীশুর মত? কিছুই নাই, কিছুই নাই!
ভবে কি আছে সুখ স্বর্গে যত? কিছুই নাই, কিছুই নাই!`},{id:313,title:"এক স্রোতঃ আছে শোণিতের (There is a fountain)",transliteration:"Ek Sroto Ache Shoniter",composer:"উইলিয়াম কেরী",category:"সমাধি ও সান্ত্বনা",lyrics:`১ এক স্রোতঃ আছে শোণিতের, তায় পাপী ডুবিলে
যায় সব কলঙ্ক পাতকের—সেই স্রোতঃ ইন্মানুয়েলে!

ধুয়াঃ মোর বিশ্বাস যীশু ক্রুশেতে করিলেন রক্ত দান,
পাপী যে আমি শোণিতে পাই যেন পরিত্রাণ।

২ সেই স্রোতঃ হেরি দস্যুর মন, মরণে শান্তি পায়,
হইলেও মোর সেই পাপ জীবন, পবিত্র হব তায়।

৩ শোণিতের শক্তি ‘হত মেষ’ ফুরায় না কিছুতে,
যাবৎ হয় শেষ ভক্তের প্রবেশ স্বর্গ-মণ্ডলীতে।

৪ সেই স্রোতঃ হেরি বিশ্বাসে, তুলেছি প্রেমের গান,
আজীবন গাইব হরষে, তোমারই কৃত ত্রাণ।

৫ যাক এই নিস্তেজ রসনা, বাক্ শূন্য কবরে,
তুলব সেই গান—এই বাসনা স্বর্গে মধুর স্বরে।`},{id:314,title:"ওহে ক্ষুদ্র মেষপাল, ভেবে ব্যাকুল হইও না",transliteration:"Ohe Khudro Meshpal",composer:"মধুসূদন সরকার",category:"সমাধি ও সান্ত্বনা",lyrics:`ওহে ক্ষুদ্র মেষপাল, ভেবে ব্যাকুল হইও না,
তোমারে রাজ্যটি দিতে, পিতার আছে বাসনা।

১ যেই সব দুঃখ তোমার, তাতে পিতার প্রেম ব্যবহার,
করিতে তোমায় পরিষ্কার, ঘটেছে এ সব ঘটনা।

২ জেনো আমি কোণের পাথর, তুমি গাঁথা তাহার উপর,
বহুক বন্যা মহা ঝড়, তবু তুমি নড়িবে না।

৩ দুষ্টদের যে মন্ত্রণা, পিতার সব আছে জানা,
ঘটুক নাকো যে ঘটনা, মঙ্গল বই কিছুই হবে না।

৪ মাতাও ভুলিতে পারে, দুগ্ধপায়ী স্বশিশুরে,
নাম লেখা পিতার করে, তিনি কখনো ভুলেন না।`},{id:315,title:"ক্রুশের সৈনিক তব, এ ভাব কেমন",transliteration:"Krusher Shoinik Tobo",composer:"অমৃতলাল নাথ",category:"সমাধি ও সান্ত্বনা",lyrics:`ক্রুশের সৈনিক তব, এ ভাব কেমন,
বহিতে চাহ না ক্রুশ, এ কি মহা বিড়ম্বন।

১ বিনা যুদ্ধে অকাতরে, ফুল-শয্যায় শয়ন করে,
কে কবে স্বরগপুরে, পেয়েছে জয়পত্র দান?

২ কাঁটার মুকুট না পরিলে, সুবর্ণ মুকুট ভালে,
পায় কি কেউ কোন কালে, শুনিয়াছ কি কখন?

৩ ক্রুশের সৈনিক যারা, নিজ রুধিরেতে তারা,
করেছে প্লাবিত ধরা, হেসে দিয়াছে জীবন।

৪ যীশু-ক্রুশ পানে চেয়ে, ত্যজ মান লাজ ভয়ে,
নিজ ক্রুশ স্কন্ধে লয়ে, আনন্দে কর বহন।`},{id:316,title:"সদা তুমি আছ কাছে",transliteration:"Sada Tumi Achho Kachhe",composer:"কালীপ্রসন্ন মুখোপাধ্যায় (১১০৯)",category:"সমাধি ও সান্ত্বনা",lyrics:`সদা তুমি আছ কাছে, এ বিশ্বাস দেহ দাসে,
কি আলোকে কি আঁধারে, কি রজনী কি দিবসে।

১ পাপ-চিন্তা এলে মনে, যেন প্রভু সেই ক্ষণে,
তোমায় উপস্থিত জেনে, হৃদয়েরে রাখি বশে।

২ পাপাত্মা যখন মোরে, ফেলাইতে চায় ফেরে,
যেন তোমা পানে ফিরে, রাখি দৃষ্টি তব ক্রুশে।

৩ একা হলেও একা নহি, এ বিশ্বাস আমি চাহি,
থাক ওহে ক্রুশবাহী, এ পাপীর হৃদয়াকাশে।`},{id:317,title:"এমন মধুর প্রভাতে",transliteration:"Emon Modhur Probhate",composer:"মাইকেল রঞ্জন বিশ্বাস",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`এমন মধুর প্রভাতে, কে ঘুমে মগন রয়?
এসেছেন যীশু প্রেম ডালি নিয়ে — খুলে দাও হৃদয়।

১ কাননে ফুটিল কুসুম নিচয়, মৃদু সমীরণ সুবাস বিলায়,
কলকল তানে যীশু গুণগানে, পাখীরা ঐ উড়ে যায়।

২ দূরে চলে গেছে আঁধার রাত্রি, কান পেতে শোন জীবন যাত্রী,
হবে সবে আজি বন্ধনহীন, প্রভু যীশুর কৃপায়।

৩ (ওগো) পুরবাসী সব শোন সমাচার,
প্রভু যীশুই ভবে পাপী প্রাণেশ্বর,
কর গো নির্ভর যীশুর উপর, গাহি সদাই যীশুর জয়।`},{id:318,title:"তুমি নিশি ভোরে এস প্রভু",transliteration:"Tumi Nishi Bhore Eso Probhu",composer:"প্রিয়নাথ বৈরাগী (১৯৫৫)",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`তুমি নিশি ভোরে এস প্রভু মোর প্রাণে।
এস মোর প্রাণে, নিশি অবসানে।

১ সুখ শয্যায় তব চরণে, ছিলাম ঘুমে অচেতনে,
তুমি হয়ে প্রহরী, সারা নিশি ভরি,
(প্রভু) রক্ষা করেছ এই দীনহীনে।

২ প্রতি ভোরে তোমার করুণা, নিত্য নূতন তাঁর নাই তুলনা,
পেয়ে তোমার দয়া, আমার চিত্ত কায়া
উঠুক আনন্দে মাতিয়া গুণগানে`},{id:319,title:"প্রাতে দরশন দাও",transliteration:"Prate Doroshon Dao",composer:"রামচরণ ঘোষ (১৮৯৮)",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`প্রাতে দরশন দাও।
প্রাতে দরশন দাও হে ত্রাণ-নাথ।

১ কাল নিশি পোহাইল, আকাশে ভানু উদিল,
হৃদাকাশে হও আসি উদয় হে ত্রাণ-নাথ।

২ জাগিতেছে জীব সব, করিতেছে নানা রব,
এ হৃদে ভক্তি প্রীতি, জাগাও হে ত্রাণ-নাথ।

৩ আহা কি মধুর স্বরে, পাখিগণ গান করে,
এ হৃদে তব রব শুনাও হে ত্রাণ-নাথ।

৪ প্রাতের শিশির মত, কর নাথ আশীর্বাদ,
বিন্দু বিন্দু অবিরত দেও হে ত্রাণ-নাথ।`},{id:320,title:"গাও রে প্রভাতে যীশু-সঙ্কীর্তন",transliteration:"Gao Re Probhate Jishu-Sonkirton",composer:"বিন্দুনাথ সরকার (১৮১৬)",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`গাও রে প্রভাতে যীশু-সঙ্কীর্তন,
রসনাতে যীশু নাম কর উচ্চারণ।
(হৃদয় খুলে ডাক রে রসনাতে, দয়াল নাম নামরে)।

১ জ্বলন্ত অনল প্রায়, রাঙ্গা রবি ঐ উদয়,
অন্ধকার ভয়েতে পলায় হে;
উঠ ভ্রাতা ভগ্নি সব, দেখ স্বর্গীয় গৌরব,
হৃদয়-আকাশে উদয়, স্বর্গীয় তপন।
(দিব্যচক্ষে দেখ রে — হৃদয়েতে — যীশুরূপ রূপ রে)।

২ জয় যীশু জয় জয়, সৃজন পালন লয়, সর্ব্বমুলাধার যীশু নাথ হে;
ভ্রাতা, ভগ্নী, সবে মিলে, উল্লাসে হৃদয় খুলে,
যীশু যীশু বলে, সবে কর আবাহন,
(মনের ক্ষুধা যাবে রে — যীশু বলে, প্রাণ শীতল হবে রে)।`},{id:321,title:"উদিল তপন তমোবিনাশন",transliteration:"Udil Topon Tomobinashon",composer:"যাকোব বিশ্বাস",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`উদিল তপন তমোবিনাশন
জাগ জাগ ওরে মন।

১ আঁধার ঘুচিল, আলোক ব্যাপিল,
পুলকিত হইল ভুবন।

২ বৃক্ষে পাখী সব করে বিভু-স্তব;
সে ধ্বনিতে জুড়ায় শ্রবণ।

৩ তুমিও হে মন, কর সঙ্কীর্তন,
ভক্তি-পুষ্পে সেব সে চরণ।

৪ নিদ্রা-নিমগন থাক যবে মন,
যীশু করেন তোমায় সুরক্ষণ।

৫ ওহে প্রেমাকার, স্বর্গ-দিবাকর,
মম সহ রহ অনুক্ষণ।

৬ স্বর্গীয় কিরণে, আত্মা বরিষণে,
দীপ্ত কর দাসের জীবন।`},{id:322,title:"এমন মধু মাখা ঐ যীশু নাম",transliteration:"Emon Modhu Makha Oi Jishu Naam",composer:"প্রিয়নাথ বৈরাগী",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`এমন মধু মাখা ঐ যীশু নাম,
ঐ নাম বল মনানন্দে নিশিভোরে।
হবে রসনা পবিত্র, শুদ্ধ হবে চিত্ত,
কেবল মাত্র ঐ নামের জোরে।

১ কতকাল তোর গেছে অমনি, এমনি সুখের দিন যামিনী,
কত সুখের নিশি ভোর, কেটে গেছে তোর,
আছিলি বিভোর ঘুমের ঘোরে।

২ গেছে সেদিন দিয়া ফাঁকি, বেশী দিন আর নাইরে বাকী,
আছে বাকী যে কয়দিন, সেই দিনের একদিন
মুক্তির শুভদিন — এসেছে রে।

৩ জেগে উঠ ‘যীশু’ বলে, মনের দুয়ার দেও রে খুলে,
দেখ রাজরাজেশ্বর ঈশ্বরকুমার, দাঁড়ায়ে তোমার গৃহদ্বারে।

৪ মুক্তিধন সে নিয়ে হাতে, আছে তোমার অপেক্ষাতে;
মায়াঘুমে অচেতন, ছিলিরে যখন, ডেকেছে তখন বারে বারে।

৫ নয়ন জলে ধোও তাঁর চরণ, হৃদয়ে লও করে বরণ;
তোর হবে রে মোচন, এ ভবের বন্ধন, পাবি মুক্তিধন যীশুর বরে।`},{id:323,title:"প্রভাত হইল, হইল হায় মন",transliteration:"Probhat Hoilo, Hoilo Hay Mon",composer:"",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`প্রভাত হইল, হইল হায় মন, যীশুর গুণ একবার গাও রে।

১ যাহার গুণে দিবা এল সম্মুখে, সেই পরম নাম লও রে মুখে।
“যীশু জয় জয়” বলে, উঠ প্রাতঃকালে,
সেই পরম নাম লও বদন ভরে।

২ নিশি অন্তে ভানু প্রকাশ পাইল, তাহা দেখে সৃষ্টি চেতন হইল।
ওরে অবোধ মন, হও রে চেতন,
থাকবে কতক্ষণ আর ঘুমের ঘোরে।

৩ ‘পাখীশাখী’ পরে চেতন হইল,
কোকিল কুহুম্বরে মঙ্গল গাইল,
শুন মন বলি, তুমি সেই স্বর তুলি,
যীশু নামের নিশান তুলে দেও রে।

৪ মানবরূপী জ্যোতি উদয় জগতে,
তিমির লয়ে হাতে মরলেন ক্রুশেতে,
স্বর্গের মহা আলো, ব্যাপ্ত ভূমণ্ডল
ধরা তেজে পরিপূর্ণ হয় রে।

৫ অধীন দীনহীনের এই মিনতি,
আলো দানে কিঞ্চিৎ দাও হে শকতি,
তব আলো লয়ে, চেতন হইয়ে,
সদা থাকি শ্রীচরণ ধরে।`},{id:324,title:"তুমি এসেছ প্রভাতে",transliteration:"Tumi Esechho Probhate",composer:"প্রিয়নাথ বৈরাগী",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`তুমি এসেছ প্রভাতে, রাজার সাজে সেজে যীশু দয়াময়।
শ্রীমুখের আলোকে, ভয়ে নিশির আঁধার দূরে পলায়।

১ জেগে উঠল রসনা মন, করতে তোমার গুণসঙ্কীর্তন,
শুভক্ষণে প্রভাত বেলায়।
গুণধাম, তোমার নাম, আমি গাব আজ এই জগৎ সভায়।

২ আজ তোমার এই জগৎমাঝে, সব কথায় মোর সকল কাজে,
উঠুক বেজে ঐ নামের জয়।
দেহমন সমর্পণ আমি করি তোমার ঐ রাঙা পায়।

৩ বিকাইলাম ঐ চরণতলে, ইহকালে পরকালে,
—সর্বকালে সবার আশ্রয়।
চিরকাল হে দয়াল, যেন তোমার ঐ রূপ জাগে হৃদয়ে।`},{id:325,title:"ভোরের সোনার আলো",transliteration:"Bhorer Sonar Alo",composer:"সুনীল দত্ত",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`ভোরের সোনার আলো, তোমার কথা বলে,
(প্রভু) তোমার কথা বলে।
দূর গগনের তারা, তোমার কথা বলে,
(প্রভু) তোমার কথা বলে।

১ সাগর গানে গানে, ঝর্ণা মধুর তানে,
(সেও) তোমার কথা বলে (প্রভু) তোমার কথা বলে।

অন্তরা
ফাগুন যবে আসে, ধরার নিমন্ত্রণে,
মিলন সুধা ঢালে, পুষ্প বনে বনে,
সেও, তোমার কথা বলে,
(প্রভু) তোমার কথা বলে।

২ সবার হৃদয় মাঝে, যে অনন্ত প্রেম রাজে,
সেও, তোমার কথা বলে (প্রভু) তোমার কথা বলে।`},{id:326,title:"আলো ফোটে আঁধার নামে",transliteration:"Alo Phote Adhar Name",composer:"",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`আলো ফোটে আঁধার নামে, দিনের পরে দিন যে যায়,
তোমারই প্রেম নূতন করে, নূতন ভাবে প্রকাশ পায়।

১ এ সংসারের মোহ মায়া আনে যখন পাপের ছায়া,
তোমার ক্রুশের দীপ্ত আভা, চির প্রেমের পথ দেখায়।

অন্তরা
তোমার কৃপায় ধন্য হোল মানব জীবন,
লুটিয়ে পড়ে তোমার পায়ে সব আরাধন।

২ তুমি জীবন দীপের আলো, পুণ্য প্রেমের শিখা জ্বালো,
তুমি মোদের পরিত্রাতা, তুমি বিনা নাই উপায়।`},{id:327,title:"দিবসের হইল অন্ত প্রভু হে (Abide with me)",transliteration:"Dibaser haila anta prabhu he",composer:"আর. পি. গ্রীভস্ (১৮৬৫)",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`১ দিবসের হইল অন্ত প্রভু হে,
না ছেড়ো তুমি আপন ভৃত্যকে
যদিও অন্য সঙ্গী নাহি রয়,
মোর সঙ্গে থাক, যীশু দয়াময়।

২ এ মর্ত্য জীবন চলে বেগবান।
ও ক্ষণেক পরে হইবে অবসান,
সংসারে দেখি কিছু নিত্য নাই,
মোর সঙ্গে থাক, যীশু নিত্যস্থায়ী।

৩ দুঃখেও আমার হবে না বিষাদ,
করিলে তুমি আমায় আশীর্বাদ,
নাই মৃত্যুতে, নাই পরলোক ভয়,
তোমাকে পাইলে যীশু দয়াময়।

৪ পাপিষ্ঠ আমি ধরি তব ক্রুশ,
মার্জনা কর, মম পাপ ও দোষ,
দিন যামিনী, হে প্রভু সঙ্গী হও,
ও শেষে তব স্বর্গ-জ্যোতি দাও।`},{id:328,title:"গেল সন্ধ্যা-এল আঁধার রজনী",transliteration:"Gelo Shondhya-Elo Adhar Rojoni",composer:"প্রিয়নাথ বৈরাগী",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`গেল সন্ধ্যা-এল আঁধার রজনী,
ভবের অন্ধকারে শঙ্কা নাই আমার, সাথে থাকলে আপনি।
(আমার অন্ধকারে শঙ্কা নাই আর।)

১ সারা দিন ঐ চরণের ছায়ায়, মোরে দিয়াছ স্থান যীশু দয়াময়।
করে তোমার দয়া স্মরণ এই সময়, করি আনন্দ ধ্বনি।
(দয়াল যীশু, তোমার যীশু নামে।)

২ ক্ষমা কর যা কিছু অন্যায়, আমি করেছি আজ, ভুলিয়া তোমায়,
তুমি ধোয়াও তোমার রুধিরের ধারায়, মনের যত পাপ গ্লানি।
(তোমার নিজ রক্তে ধোয়াইয়া দেও।)

৩ তোমার শান্তি দেও মোর অন্তরে,
দুঃখ ঘুচাও তোমার প্রেমের মন্তরে।
যেন ঘুমের ঘোরে হৃদয় যন্ত্ররে, বাজে তোমার রাগিনী।
(কেবল ‘যীশু যীশু যীশু’ বলে।)

৪ সমর্পণ করি ঐ চরণে, মোরে দিয়েছ যা কিছু ভুবনে,
আমার দেহ, আত্মা, আত্মীয় জনে, রেখ চরণে আনি—
(আমার আত্মবন্ধু স্বজনগণে।)

৫ নিশিশেষে মেলিয়া নয়ন,
যেন দেখিতে পাই তোমার চাঁদবদন,
তুমি নিদ্রার বিশ্রাম করেছ প্রেরণ, সুখে ঘুমাক সব প্রাণী।
(তোমার ঐ চরণের ছায়াতলে।)`},{id:329,title:"জগত পিতা গো, করি তোমার পায়ে আত্মসমর্পণ",transliteration:"Jogot Pita Go, Kori Tomar Paye Atmosomorpon",composer:"প্রিয়নাথ বৈরাগী",category:"প্রাতঃকালীন ও সায়ংকালীন",lyrics:`জগত পিতা গো, করি তোমার পায়ে আত্ম সমর্পণ।
তুমি সারা নিশি জেগে থাক, তোমার সন্তানের রক্ষার কারণ।

১ কাল নিশিভোরে পিতা তুমি মোরে, সুখ নিদ্রা হ’তে,
যখন জাগাইলে, নয়ন মেলে, আমি দেখেছিলাম শ্রীচরণ।

২ তোমার দয়ার হস্ত আমার এই মস্তকে, রেখে ধীরে ধীরে,
তুমি দিয়াছিলে এই কাঙ্গালে, তোমার আশীর্বাদ অমূল্যধন

৩ মনে ছিল আশা, সারাদিন ধরে আমি পুজিব তোমারে।
আমার সকল কাজে জগৎ মাঝে, হবে তোমার মহিমা কীর্তন।

৪ দিবা অবসানে ব্যথিত অন্তরে, ভাবি বসে বসে,
আমি বারে বারে তোমায় ছেড়ে, কতদূরে করেছি ভ্রমণ।

৫ আমি ভুলিয়াছি বারে বারে তোমায়, অসার চিন্তায় ম’জে,
কত কলঙ্ক মেখেছি অঙ্গে, কত মলিন হয়েছে এই মন।

৬ পিতা ক্ষমা কর, দয়া করে কর শান্তি প্রদান দাসে
দেও ঐ চরণে স্থান হে দয়াবান, আজ এই রজনীর বিশ্রাম কারণ।`},{id:330,title:"বিপদে পড়িয়া ডাকি'—দেখা দাও এই কাঙ্গাল দীনহীনে হে।",transliteration:"Bipode Poriya Daki—Dekha Dao Ei Kangal Din-hine He",composer:"প্রিয়নাথ বৈরাগী",category:"বিবিধ",lyrics:`বিপদে পড়িয়া ডাকি— দেখা দাও এই কাঙ্গাল দীনহীনে হে।
    
১ প্রলয়ের ঝড় বহে বেগে, আমার মরণের ভয় প্রাণে জাগে হে;
বুঝি ডুবে যায়, দয়াময় তরী এ তুফানে হে।

২ চারিদিকে ঘোর অন্ধকার,
কোন বান্ধব নাই আজ কাছে আমার হে!
এসে নিকটে, সংকটে, বাঁচাও এ অধীনে হে।

৩ শুনিয়াছি পূর্বকালে, তরী ডুবু ডুবু সাগর জলে হে;
কাঁদে শিষ্যদল, অবিরল শঙ্কিত পরাণে হে!

৪ এলে তুমি পর্বত হতে, তোমার শিষ্যগণকে বাঁচাইতে হে;
অমনি থামলো ঝড়, ত্রাণেশ্বর তোমার বচনে হে।

৫ অধমে আজ কর স্মরণ, একবার দয়া করে দেও দরশন হে;
করি মিনতি, দুর্গতি ঘুচাও নিজগুণে হে।`},{id:331,title:"আমার দেখতে দেখতে ফুরাল রে দিন, যাবার সময় হল।",transliteration:"Amar Dekhte Dekhte Phuralo Re Din, Jabar Somoy Holo",composer:"প্রিয়নাথ বৈরাগী (১৯২২)",category:"বিবিধ",lyrics:`আমার দেখতে দেখতে ফুরাল যে দিন, যাবার সময় হল।
ঐ দেখ সূর্য বসে পাটে, বুঝি সন্ধ্যা হ’য়ে এল।

১ বোঝা বন্ধন যত আছে, সে সব ছাড়তে হবে
সকলে মিছে, — সময় এল কাছে;
কে আছ নিকটে আমার, তোমরা আমার সঙ্গে চল।

২ কে যাবি ভাই আমার সাথে, নইলে একলা আমার 
হবে যেতে — আজ এই আঁধার রাতে;
পরাণ আমার কাঁপে ডরে, তোমরা যীশু যীশু বল।

৩ সাথের সাথী আছে সে জন, যে জন আমার জন্য
দিল জীবন, — সইল দারুণ মরণ;
এ জীবনের দুঃখে সুখে, সে জন আমার সঙ্গে ছিল।

৪ আজ আমার এই যাবার সময়, আমার কাছে আছে
সেই দয়াময়, — সঙ্গে যাবে নিশ্চয়;
নিয়ে যাবে হাতে ধরে, পথের আঁধার করে আলো।

৫ যীশু যীশু যীশু বলে, তোমরা গাও সকলে
বাহু তুলে, — আমার যাবার কালে;
যাবার কালে শেষ নমস্কার, তোমরা সবার কাছে বলো।`},{id:332,title:"খেজুর পাতা হাতে মোরা, আনন্দে গান গাই,",transliteration:"Khejur Pata Hate Mora, Anonde Gan Gai",composer:"মানিক নাথ",category:"বিবিধ",lyrics:`খেজুর পাতা হাতে মোরা, আনন্দে গান গাই,
হোশান্না হোশান্না বলে, পথে পথে যাই।
যিরূশালেম পানে যীশু, গাধায় চড়ে যান,
শান্তি রাজা ধরায় তিনি, ধন্য মহীয়ান।

হোশান্না হোশান্না বলে, পথে পথে যাই।
প্রভুর তরে বসন পেতে, দেয় যে অনেক জন,
যীশুর সেবায় তেমনি মোরা, সঁপি প্রাণ মন।
হোশান্না হোশান্না বলে, পথে পথে যাই।`},{id:333,title:"আমি তোমাকে ভালবাসি,",transliteration:"Ami Tomake Bhalobashi",category:"বিবিধ",lyrics:`আমি তোমাকে ভালবাসি,
প্রভু, তোমাকে ভালবাসি,
আমি তোমাকে ভালবাসি।
না পিছে ফিরিব না, তোমার সামনে নতজানু হয়ে,
যদি চলতে পারি তোমার পথে,
যত দুঃখ কষ্ট আসুক জীবনে।

আমি তোমারি স্তুতি করি,
প্রভু, তোমারি স্তুতি করি,
আমি তোমারি স্তুতি করি।

আমি তোমার আরাধনা করি
প্রভু, তোমার আরাধনা করি,
আমি তোমার আরাধনা করি।

আমি তোমারি সেবা করি
প্রভু, তোমারি সেবা করি,
আমি তোমারি সেবা করি।`},{id:334,title:"হে সদাপ্রভু, আমি তোমারই প্রশংসার গান গাইব,",transliteration:"He Sodaprobhu, Ami Tomari Proshongshar Gan Gaibo",category:"বিবিধ",lyrics:`হে সদাপ্রভু, আমি তোমারই প্রশংসার গান গাইব,
তুমিই মহান, তুমিই মহান, তোমারি মতন আর কেহ নাই।
যে কোন বাধা জীবনে আসে, তুমি তো প্রভু রয়েছ পাশে,
তোমার নামেতে আমি ধন্য হলাম।
পিতার গৃহ তুমি ছেড়ে দিলে, পাপীর তরে তুমি প্রাণও দিলে,
তোমার নামেতে আমি ধন্য হলাম।`},{id:335,title:"আমারে বাঁচাতে প্রভু প্রাণ ত্যজিলে হায়,",transliteration:"Amare Bachate Probhu Pran Tyajile Hay",composer:"মানিক নাথ",category:"বিবিধ",lyrics:`আমারে বাঁচাতে প্রভু প্রাণ ত্যজিলে হায়,
তোমার মত পরিত্রাতা নেই তো দুনিয়ায়।

পাপের পাঁকে ডুবে ছিলেম, তোমায় কত দুঃখ দিলেম,
এবার আমি রক্ষা পেলেম, তব করুণায়।

তোমায় যীশু করেছিলেম, চরম অপমান,
বিনিময়ে দিলে তুমি পরম প্রেমের দান।

দয়াল আমি পথ হারালেম, ত্রাণের আশায় হাত বাড়ালেম,
তোমার অভয় পরশ নিলেম, আমি অসহায়।`},{id:336,title:"শোন হে যাত্রী, ক্লান্ত যাত্রী,",transliteration:"Shono He Jatri, Klanto Jatri",category:"বিবিধ",lyrics:`শোন হে যাত্রী, ক্লান্ত যাত্রী,
কালভেরী শিলা কাঁদিছে নীরবে, 
যীশুর রক্তে রাঙি,
বিদায়ী যীশুর করুণ ব্যথার বাণী।

১ আকুল স্বরেতে ডাকেন পিতাকে, 
এলি এলি লামা শবক্তানী,
শোন হে পথিক, বিদায়ী যীশুর, 
করুণ ব্যথার বাণী।

অন্তরা
নীরব ধারনী, আঁধারেতে ছিলো ভড়া, 
লজ্জায় রবি উজ্জ্বল দিপ্তী হারা

২ সীমাহীন মোরা দিয়েছি বেদনা,
ক্রুশের উপরে সহিলে যাতনা,
জীবন মূল্যে দিয়ে গেলে তুমি, 
প্রেমের ক্ষমার বাণী।`},{id:337,title:"অদ্য তুমি আমার সাথে পরম দেশে যাবে,",transliteration:"Odya Tumi Amar Sathe Porom Deshe Jabe",composer:"মানিক নাথ",category:"বিবিধ",lyrics:`অদ্য তুমি আমার সাথে পরম দেশে যাবে,
অন্তবিহীন শান্তি সুখের জীবন সেথা পাবে।
জীবন তোমার অন্ধকারে ছিল, এবার সেথায় প্রাণের আলো এল,
ব্যথায় ভরা হৃদয় তোমার, প্রেমে ভরে যাবে।

অন্তরা
চক্ষে তোমার নেইকো ভবের ক্লেশ,
আমার পরে শরণ নিলে যাবে দুঃখের লেশ।
বিশ্বাসে আজ মুক্তি তুমি পেলে, শান্তি সুধা প্রাণ ভরে নিলে,
নরক বেদন আর পাবে না, স্বর্গেতে স্থান পাবে।`},{id:338,title:"সিয়োনের যাত্রা পথে, ভয় করো না বৃথা মন যে আমার।",transliteration:"Siyoner Jatra Pothe, Bhoy Koro Na Britha Mon Je Amar",composer:"",category:"বিবিধ",lyrics:`সিয়োনের যাত্রা পথে, ভয় করো না বৃথা মন যে আমার।
অব্রাহামের ঈশ্বর, ইসহাকের ঈশ্বর, যাকবের ঈশ্বর, সঙ্গে আছে ভাই।

মানুষের চক্ষে আমি, হীন হলেও দুঃখ কিছুই নাই,
ঈশ্বরের চক্ষে আমি, চির শ্রেষ্ঠ হতে সদা চাই।

ঈশ্বরই আশ্রয় আমার, চাই না কিছু আমি আর,
চির সহায় যে আমার, সে তো নিরাপদ আশ্রয় আমার।

আর কিছু চাই না প্রভু, সব কিছু দিয়েছ তুমি,
স্বর্গ হতে মান্না দানে লালন পালন করেছ মোদের।`},{id:339,title:"প্রণাম প্রভু দয়াল যীশু প্রেমের সাগর,",transliteration:"Pronam Probhu Doyal Jishu Premer Sagor",composer:"শম্ভু রঞ্জন মন্ডল (১৯৭০)",category:"বিবিধ",lyrics:`প্রণাম প্রভু দয়াল যীশু প্রেমের সাগর,
তুমি আশীষ দানে পূর্ণ কর, ময়লা যত কর দূর।

ক্রুশে দিলেন প্রাণ, জীবন করেন দান, রাখতে পাপীর মান,
রক্ত দিলেন দয়াল যীশু মুক্তি দিতে চান।

কবরের তলায়, তিনদিন সেথা রয়, ভোরের বেলায়,
উঠলেন যীশু সগৌরবে মৃত্যু করি জয়।

আকাশ পথে, দূতের সাথে, মেঘের রথে,
আসবেন যীশু স্বমহিমায়, মনোনীতদের সাথে।`},{id:340,title:"এই শুভক্ষণে আমি এসেছি, প্রভু তোমার চরণে এসেছি,",transliteration:"Ei Shubhokhone Ami Eshechi, Probhu Tomar Chorone Eshechi",category:"বিবিধ",lyrics:`এই শুভক্ষণে আমি এসেছি, প্রভু তোমার চরণে এসেছি,
তোমায় আরো কাছে, পেতে এসেছি।

তব প্রেমে আমায়, বেঁধেছো কহ হে দয়াময়,
দিয়েছ আশীষ তোমার, আমার মনের মত।

অন্তরা
তোমার জ্যোতি পেয়েছি, প্রভু তোমার ক্ষমা পেয়েছি,
তোমার শক্তি পেয়েছি, প্রভু তোমার দয়া পেয়েছি।

ধন্যবাদ করি তোমায়, প্রভু প্রশংসা করি তোমায়,
তুমি প্রভু মোর সব, তুমি জগদীশ্বর।`},{id:341,title:"আমারে নাও, আমারে নাও প্রভু,",transliteration:"Amare Nao, Amare Nao Probhu",composer:"ফাঃ অবনী সর্দার",category:"বিবিধ",lyrics:`আমারে নাও, আমারে নাও প্রভু,
আমি তোমার যজ্ঞ পুটে একটি ফুল।
এ সংসারে দুঃখের ঘরে, খুঁজি তোমায় বারে বারে প্রভু,
দাও গো তোমার পরশ মৃদুল।

অন্তরা
আমারে নাও অর্ঘ্য করো, পিতার চরণে,
শেষ হবে মোর জীবন শ্রান্তি, তাঁরই শরণে।
যা কিছু মোর মলিনতা, ঘুচে যাবে সবই সেথা প্রভু,
তব প্রেমে কর শুভ্র মুকুল।`},{id:342,title:"ব্যথার পান পাত্র প্রভু, করলে তুমি পান,",transliteration:"Byathar Pan Patro Probhu, Korle Tumi Pan",composer:"মানিক নাথ",category:"বিবিধ",lyrics:`ব্যথার পান পাত্র প্রভু, করলে তুমি পান,
ভালবাসার বিনিময়ে সইলে অপমান।

রাজার কুমার পাপীর তরে, জন্ম নিলে দীনের ঘরে,
ধুলির মাঝে দিন যাপিলে, নেইকো অভিমান।

নগণ্য নর বন্ধু তোমার, নিঃস্ব জনের সাথী,
দুঃখে তাদের পাও বেদনা, তুমি নীরব ব্যথী।

কাঁটার মুকুট তোমার শিরে, রক্ত ঝরে ধীরে ধীরে,
ক্রুশের পরে প্রাণ সঁপিলে, মোদের দিলে ত্রাণ।`},{id:343,title:"মোরা চলবো সমুখপানে মুক্তি যেথা",transliteration:"Mora Cholbo Somukhpane Mukti Jetha",categories:["খ্রীষ্টীয় জীবন ও সাক্ষ্য"],lyrics:`মোরা চলবো সমুখপানে মুক্তি যেথা, 
কভু ফিরবোনা পিছু অযথা
যত বাধা আসুক সব পেরিয়ে যাবো, 
তুলে দেব বিজয় ধ্বজা।
লা..  লা..   লা..   লা..  

১ ধার্মিকতার পাটা বাধবো বুকে, 
হবে শান্তির বাণী পাদুকা, 
সত্য সাধনায় বাঁধবো কোটি, 
হবে জয়, হবে জয়।

২ বিশ্বাসের ঢাল থাকবে পশে, 
লব আত্মার খড়গ হাতে, 
বিজয় মুকুট পাবো মোদের সিরে, 
হবে জয়, হবে জয়।`},{id:344,title:"আদি আর অন্ত তুমি",transliteration:"Aadi aar onto tumi",category:"আরাধনা",lyrics:`আদি আর অন্ত তুমি,
আলফা আর ওমেগা তুমি
দূতেদের স্তুতি তুমি,
বুদ্ধি আর জ্ঞান তুমি

যীশু তুমি মহান,
যীশু তুমি সত্য

যীশু তুমি জীবন্ত,
যীশু তুমি ধন্য
দূতেদের স্তুতি তুমি,
বুদ্ধি আর জ্ঞান তুমি,
রাজাদের রাজা তুমি,
প্রজাদের প্রভু তুমি,

জীবন ছিল পাপেতে ভরা,
অন্ধকার আর শোকেতে ভরা,
পাপ হতে বাঁচাতে মোরে,
জীবন দিলেন ক্রুশ পরে

সবার মুক্তিদানের জন্য,
নিজের রক্ত তিনি বহালেন,
কড়ার আঘাত পিঠে নিয়ে,
দিলেন ক্রুশে নিজের প্রাণ

নূতন করতে আসছেন তিনি,
ন্যায়ের সঙ্গে রাজত্ব করতে,
ধার্মিকদের নিয়ে সঙ্গে,
সিংহাসনে রাজত্ব করবেন`},{id:345,title:"আজ পৃথিবী আলোয় জেগেছে",transliteration:"Ajj prithibi aloy jegeche",category:"বড়দিন",lyrics:`আজ পৃথিবী আলোয় জেগেছে
খুশিতে মন ভরেছে
পাপীর মানবে মুক্তি দিতে
তুমি জন্ম নিলে
এই ধরণীতে

দূত দলে গাইল যে গান
ঈশ তনয় তুমি যে মহান
ভুলোক ভুলোক তোমারি প্রশংসা (২)
ভোরে ওঠে মন-প্রাণ

তুমি আসলে ভালবাসলে
পাপী পেল পরিত্রাণ
সব কালিমা মুছিয়ে দিয়ে
দিলে তব বক্ষে স্থান

তোমার স্পর্শে শুচি করো
শুনো হৃদয় প্রেমে ভরো
এ সুন্দর তব জন্ম গাথা
হোক আজি চির অক্ষয়`},{id:346,title:"আজ প্রভু এসেছেন",transliteration:"Ajj probhu easechen",category:"বড়দিন",lyrics:`আজ প্রভু এসেছেন
আমাদের ক্ষুদ্র গোশালায়
তাই চলো যাই (৮)
পুজি গো তাহার

পৃথিবীতে রবে না
দুঃখ দুর্দশা
শান্তি প্রীতি মানবেতে ভরবে এ ধরায়

পাপী আর পথ হারা
পাবে যে তার ক্ষমা
প্রেম ও ভক্তি তারই দীক্ষা
চলো যাই (৮)`},{id:347,title:"আজ, মনে প্রাণে",transliteration:"Ajj, money praney",category:"সমর্পণ",youtubeId:"mytWgfBsPPo",lyrics:`আজ, মনে প্রাণে,
গুণগান তোমার করি
আজ, সবটা ছেড়ে তোমারি হাত ধরি,
সংসারকে পরোয়া না করে (২)
শুধু তোমার প্রশংসা করি

আরাধনা করি,
তোমার, বন্দনা শুধু করি (২)

তোমারি দুয়ারে এসেছি আজ,
মাথা চরণে রেখেছি আজ,
তুমি আছো তাই ভালোবাসায়,
দু চোখে দীপ জ্বেলেছি আজ,
সুখ দুঃখের পরোয়া না করে (২)
শুধু তোমার প্রশংসা করি
আরাধনা করি...

তোমায় ভেবে হাত জোড় করি,
ভক্তিতে নত হই,
এতো মহিমা তোমার, তুমি ঈশ্বর
নাও ডেকে আমাকে ওই,
তনু মনকে পরোয়া না করে (২)
শুধু তোমার প্রশংসা করি
আরাধনা করি...`},{id:348,title:"আমার পাশে তুমি থেকো প্রিয় যীশু",transliteration:"Amar pashey tumi theko priyo jishu",category:"সমর্পণ",lyrics:`আমার পাশে তুমি থেকো প্রিয় যীশু
আমি তোমায় ছাড়া বাঁচতে পারবো না (২)
হাল্লেলুইয়া (৮)

জীবন দিয়ে তুমি আমায় রক্ষা করেছো
রক্তের মূল্য দিয়ে আমায়
কিনে নিয়েছো (২)

পাপের বোঝা তুমি নিজের কাঁধে নিয়েছো
ক্রুশের উপর তুমি পাপের 
মূল্য দিয়েছো`},{id:349,title:"আমরা চলি আলোতে",transliteration:"Amra choli alotey",category:"সমর্পণ",lyrics:`আমরা চলি আলোতে (৩)
আমরা চলি আলোতে, প্রভুর আলোতে

যীশুর কাছে যাইব-আলোতে, আলোতে,
তাঁহার সঙ্গে চলিব-প্রভুর আলোতে,
পাপের ক্ষমা পাইব-আলোতে, আলোতে,
পাপ সমস্ত ছাড়িব প্রভুর আলোতে

যীশুর কার্য করতে চাই-আলোতে, আলোতে,
বল ও শক্তি আমি পাই-প্রভুর আলোতে,
শয়তান কি আর করিবে আলোতে, আলোতে,
মোর কে নিকট আসিবে-প্রভুর আলোতে

মৃত্যু যখন আসিবে-আলোতে, আলোতে,
আমার ভয় না হইবে-প্রভুর আলোতে,
স্বর্গে প্রবেশ করিব-আলোতে আলোতে,
চিরকাল থাকিব-প্রভুর আলোতে`}],W0=[...jb,...Nb,...Db,...Cb];W0.sort((a,l)=>a.id-l.id);const yn=[{id:"noto",name:"Noto Serif Bengali",family:'"Noto Serif Bengali", serif'},{id:"hind",name:"Hind Siliguri",family:'"Hind Siliguri", sans-serif'},{id:"atma",name:"Atma",family:'"Atma", cursive'},{id:"mina",name:"Mina",family:'"Mina", sans-serif'},{id:"galada",name:"Galada",family:'"Galada", cursive'},{id:"baloo",name:"Baloo Da 2",family:'"Baloo Da 2", cursive'}],wb=[{id:1001,title:"আইস, আমরা প্রণিপাত করি",transliteration:"Aisho, amra pronipat kori",category:"কোরাস",lyrics:`আইস, আমরা প্রণিপাত করি, প্রণত হই,
আমাদের নির্মাতা সদাপ্রভুর সাক্ষাতে জানু পাতি,
কেননা তিনিই আমাদের ঈশ্বর।
আমরা তাঁহার চরাণির প্রজা ও তাঁহার হস্তের মেষ।
— গীতসংহিতা ৯৫:৬,৭`},{id:1002,title:"গান কর সদাপ্রভুর উদ্দেশে",transliteration:"Gan koro Sodaprobhur uddeshe",category:"কোরাস",lyrics:`গান কর সদাপ্রভুর উদ্দেশে বীণা সহকারে,
বীণা সহকারে ও গানের রবে।
তূরী ও ভেরীবাদ্য সহকারে
রাজা সদাপ্রভুর সম্মুখে জয়ধ্বনি কর।
সমুদ্র তন্মধ্যস্থ সকলই গর্জন করুক;
ভুবন ও তন্নিবাসীগণও করুক; সদাপ্রভুর সাক্ষাতেই।
নদ-নদীগণ করতালি দিউক,
পর্ব্বতগণ একসঙ্গে আনন্দগান করুক; সদাপ্রভুর সাক্ষাতেই।
— গীতসংহিতা ৯৮:৫-৮`},{id:1003,title:"কেননা পাপের বেতন মৃত্যু",transliteration:"Kenona paper beton mrityu",category:"কোরাস",lyrics:`কেননা পাপের বেতন মৃত্যু (৩)
হায়! পাপী আজও জানো না।
কিন্তু ঈশ্বরের অনুগ্রহ দান (৩)
(আমাদের) প্রভু খ্রীষ্টে অনন্ত জীবন। —রোমীয় ৬:২৩`},{id:1004,title:"কারণ ঈশ্বর জগৎকে এমন প্রেম করিলেন",transliteration:"Karon Ishwar jogotke emon prem korilen",category:"কোরাস",lyrics:`কারণ ঈশ্বর জগৎকে এমন প্রেম করিলেন যে,
আপনার একজাত পুত্রকে দান করিলেন,
যেন, যে কেহ তাঁহাতে বিশ্বাস করে, সে বিনষ্ট না হয়,
কিন্তু অনন্ত জীবন পায়।
— যোহন ৩:১৬`},{id:1005,title:"শান্তি আমি তোমাদের কাছে রাখিয়া যাইতেছি",transliteration:"Shanti ami tomader kache rakhiya jaitechi",category:"কোরাস",lyrics:`শান্তি আমি তোমাদের কাছে রাখিয়া যাইতেছি,
আমারই শান্তি তোমাদিগকে দান করিতেছি।
জগৎ যেরূপ দান করে, আমি সেরূপ দান করি না।
— যোহন ১৪:২৭`},{id:1006,title:"তোমার দয়া",transliteration:"Tomar doya",category:"কোরাস",lyrics:`তোমার দয়া (৩)
জীবন হইতেও উত্তম, আমার ওষ্ঠাধর তোমার প্রশংসা করিবে।
এইরূপে আমি যাবজ্জীবন তোমার ধন্যবাদ করিব,
আমি তোমার নামে অঞ্জলি উঠাইব।
আমার প্রাণ তৃপ্ত হইবে, যেমন মেদ ও মজ্জাতে হয়।
— গীতসংহিতা ৬৩:৩,৪,৫`},{id:1007,title:"যিনি যুগপর্য্যায়ের রাজা",transliteration:"Jhini jugoporjayer raja",category:"কোরাস",lyrics:`যিনি যুগপর্যায়ের রাজা, অক্ষয় অদৃশ্য একমাত্র ঈশ্বর,
যুগপর্যায়ের যুগে যুগে তাঁহারই সমাদর ও মহিমা হউক।
আমেন।
— ১ তীমথিয় ১:১৭`},{id:1008,title:"তোমরা সদাপ্রভুর প্রশংসা কর",transliteration:"Tomra Sodaprobhur proshongsha koro",category:"কোরাস",lyrics:`তোমরা সদাপ্রভুর প্রশংসা কর;
হে আমার প্রাণ সদাপ্রভুর প্রশংসা কর।
আমি যাবজ্জীবন সদাপ্রভুর প্রশংসা করিব;
আমি যত কাল বাঁচিয়া থাকি,
আমার ঈশ্বরের প্রশংসা গান করিব।
— গীতসংহিতা ১৪৬:১,২`},{id:1009,title:"তোমার বাক্য আমার চরণের প্রদীপ",transliteration:"Tomar bakyo amar choroner prodip",category:"কোরাস",lyrics:`তোমার বাক্য আমার চরণের প্রদীপ, আমার পথের আলোক।
আমি শপথ করিয়াছি, স্থির করিয়াছি,
তোমার ধর্ম্মময় শাসনকলাপ পালন করিব।
আমি অতিশয় দুঃখার্ত্ত, হে সদাপ্রভু,
তোমার বাক্যানুসারে আমাকে সঞ্জীবিত কর।
— গীতসংহিতা ১১৯:১০৫-১০৭`},{id:1010,title:"সদাপ্রভু, আমি তোমার প্রশংসা করিব",transliteration:"Sodaprobhu, ami tomar proshongsha koribo",category:"কোরাস",lyrics:`সদাপ্রভু, আমি তোমার প্রশংসা করিব,
কেননা তুমি আমাকে উঠাইয়াছ,
আমার শত্রুগণকে আমার বিষয়ে আনন্দ করিতে দেও নাই।
হে সদাপ্রভু, আমার ঈশ্বর, আমি তোমার কাছে আর্ত্তনাদ করিলাম
আর তুমি আমাকে সুস্থ করিলে।
সদাপ্রভু তুমি পাতাল হইতে আমার প্রাণ উত্তোলন করিয়াছ,
তুমি আমাকে বাঁচাইয়া রাখিয়াছ, যেন গর্ভে নামিয়া না যাই।
হে সদাপ্রভুর সাধুগণ, তাঁহার উদ্দেশে সঙ্গীত কর,
তাঁহার পবিত্র নামের ধন্যবাদ কর।
— গীতসংহিতা ৩০:১-৪`},{id:1011,title:"তুমি আমাদিগকে সঞ্জীবিত কর",transliteration:"Tumi amadigoke shonjibito koro",category:"কোরাস",lyrics:`তুমি আমাদিগকে সঞ্জীবিত কর, আমরা তোমার নামে ডাকিব।
হে সদাপ্রভু, বাহিনীগণের ঈশ্বর, আমাদিগকে ফিরাও;
তোমার মুখ উজ্জ্বল কর, তাহাতে আমরা পরিত্রাণ পাইব।
— গীতসংহিতা ৮০:১৮, ১৯`},{id:1012,title:"হে সদাপ্রভু! মম বল!",transliteration:"He Sodaprobhu! Momo bolo!",category:"কোরাস",lyrics:`হে সদাপ্রভু! মম বল! আমি তোমাতে অনুরক্ত।
সদাপ্রভু মম শৈল, মম দুর্গ ও মম রক্ষা কর্ত্তা;
মম ঈশ্বর, মম দৃঢ় শৈল, আমি তাঁহার শরণাগত,
মম ঢাল, মম ত্রাণশৃঙ্গ, মম উচ্চদুর্গ।
তিনিই ঈশ্বর, তাঁহার পথ সিদ্ধ;
সদাপ্রভুর বাক্য পরীক্ষাসিদ্ধ;
তিনি নিজ শরণাগত সকলের ঢাল।
— গীতসংহিতা ১৮:১,২,৩০`},{id:1013,title:"সদাপ্রভু আমার পালক",transliteration:"Sodaprobhu amar palok",category:"কোরাস",lyrics:`সদাপ্রভু আমার পালক, আমার অভাব হইবে না।
তিনি তৃণভূষিত চরাণীতে আমাকে শয়ন করান,
তিনি বিশ্রাম জলের ধারে ধারে আমাকে চালান।
— গীতসংহিতা ২৩:১,২`},{id:1014,title:"তোমরা আর নিজের নও",transliteration:"Tomra aar nijer nou",category:"কোরাস",lyrics:`তোমরা আর নিজের নও, (২)
কারণ মূল্য দ্বারা ক্রীত হইয়াছ,
অতএব তোমাদের দেহে ঈশ্বরের গৌরব কর।
— ১ করিন্থীয় ৬:২০`},{id:1015,title:"আইস, আমরা তাঁহার আবাসে যাই",transliteration:"Aisho, amra tahar abashe jai",category:"কোরাস",lyrics:`আইস, আমরা তাঁহার আবাসে যাই,
তাঁহার পাদপীঠে প্রণিপাত করি।
হে সদাপ্রভু, উঠ, তোমার বিশ্রাম স্থানে আইস,
তুমি ও তোমার শক্তির সিন্দুক আইস।
তোমার যাজকগণ ধার্মিকতা পরিহিত হউক।
তোমার সাধুগণ আনন্দগান করুক।
(হাল্লেলুইয়া হোশন্না হাল্লেলুইয়া)
— গীতসংহিতা ১৩২:৭-৯`},{id:1016,title:"সতত আনন্দ কর",transliteration:"Sototo anondo koro",category:"কোরাস",lyrics:`সতত আনন্দ কর; অবিরত প্রার্থনা কর;
সর্ব্ববিষয়ে ধন্যবাদ কর;
সর্ব্বপ্রকার মন্দ বিষয় হইতে দূরে থাক।
— ১ থিষলনীকীয় ৫:১৬,১৭,২২`},{id:1017,title:"সদাপ্রভুর স্তব করা",transliteration:"Sodaprobhur stob kora",category:"কোরাস",lyrics:`সদাপ্রভুর স্তব করা;
হে পরাৎপর, তোমার নামের উদ্দেশে সঙ্গীত করা উত্তম।
প্রাতঃকালে তোমার দয়া, ও প্রতি রাত্রে তোমার বিশ্বস্ততা প্রচার করা উত্তম।
দশতন্ত্রী ও নেবল যন্ত্র সহকারে, গম্ভীর বীণা-ধ্বনি সহকারে,
প্রভুর প্রশংসা করা উত্তম।
সদাপ্রভু, তোমার কার্য্য সকল কেমন মহৎ।
তোমার সঙ্কল্প সকল অতি গভীর।
— গীতসংহিতা ৯২:১,২,৩,৫`},{id:1018,title:"কারণ তোমরা ইহারই নিমিত্ত আহূত হইয়াছ",transliteration:"Karon tomra ihar-i nimitto ahuto hoiyacho",category:"কোরাস",lyrics:`কারণ তোমরা ইহারই নিমিত্ত আহূত হইয়াছ;
কেননা খ্রীষ্টও তোমাদের নিমিত্ত দুঃখভোগ করিলেন;
এ বিষয়ে তোমাদের জন্য এক আদর্শ রাখিয়া গিয়াছেন,
যেন তোমরা তাঁহার পদচিহ্নের অনুগমন কর।
— ১ পিতর ২:২১`},{id:1019,title:"খ্রীষ্ট যীশুতে যে ভাব ছিল",transliteration:"Christo Jeshute je bhab chilo",category:"কোরাস",lyrics:`খ্রীষ্ট যীশুতে যে ভাব ছিল, তাহা তোমাদিগেতেও হউক।
ঈশ্বরের স্বরূপবিশিষ্ট থাকিতে তিনি ঈশ্বরের সহিত সমান থাকা
ধরিয়া লইবার বিষয় জ্ঞান করিলেন না।
কিন্তু আপনাকে শূন্য করিলেন, দাসের রূপ ধারণ করিলেন,
মনুষ্যদের সাদৃশ্যে জন্মিলেন;
এবং আকার প্রকারে মনুষ্যবৎ প্রত্যক্ষ হইয়া আপনাকে অবনত করিলেন;
মৃত্যু পর্য্যন্ত, এমন কী, ক্রুশীয় মৃত্যু পর্য্যন্ত, আজ্ঞাবহ হইলেন।
এই কারণ ঈশ্বর তাঁহাকে অতিশয় উচ্চ পদান্বিত করিলেন,
এবং তাঁহাকে সেই নাম দান করিলেন, যাহা সমুদয় নাম অপেক্ষা শ্রেষ্ঠ;
যেন যীশুর নামে স্বর্গ-মর্ত্ত পাতালনিবাসীদের
“সমুদয় জানু পাতিত হয়, এবং সমুদয় জিহ্বা যেন স্বীকার করে”
যে, যীশু খ্রীষ্টই প্রভু।
— ফিলিপীয় ২:৫-১১`},{id:1020,title:"অল্প কাল বাকী আছে",transliteration:"Olpo kal baki ache",category:"কোরাস",lyrics:`অল্প কাল (৩) বাকী আছে,
যিনি আসিতেছেন, তিনি আসিবেন, বিলম্ব করিবেন না।
কিন্তু আমার ধার্মিক ব্যক্তি বিশ্বাস হেতুই বাঁচিবে।
— ইব্রীয় ১০:৩৭,৩৮`},{id:1021,title:"যে ব্যক্তি পরাৎপরের অন্তরালে থাকে",transliteration:"Je byakti poratporer ontorale thake",category:"কোরাস",lyrics:`যে ব্যক্তি পরাৎপরের অন্তরালে থাকে,
সে সর্ব্বশক্তিমানের ছায়াতে বসতি করে,
আমি সদাপ্রভুর বিষয়ে বলিব, তিনি আমার আশ্রয়, আমার দুর্গ,
আমার ঈশ্বর, আমি তাহাতে নির্ভর করিব।
—গীতসংহিতা ৯১:১,২`},{id:1022,title:"হে পরিশ্রান্ত ভারাক্রান্ত লোক সকলে",transliteration:"He porishranto bharakranto lok sokole",category:"কোরাস",lyrics:`হে পরিশ্রান্ত ভারাক্রান্ত লোক সকলে, আমার নিকটে আইস।
আমি তোমাদিগকে বিশ্রাম দিব, আমার নিকটে আইস।
— মথি ১১:২৮`},{id:1023,title:"প্রভুতে যে আনন্দ (The joy of the Lord)",transliteration:"Probhute Je Anondo",category:"কোরাস",lyrics:`The joy of the Lord
প্রভুতে যে আনন্দ, তাতে পাই শক্তি (৩)
প্রভুতে আনন্দ তাই আছে শক্তি।
তাঁর জীবন জলের ধারায় আমি পাই তৃপ্তি (৩)
তাঁর জীবন জলে তাই আছে তৃপ্তি।
আমার মুখে দেন হাসি হা হা হা হা হা হা (৩)
প্রভুতে আনন্দ তাই আছে শক্তি।`},{id:1024,title:"হে নিদ্রাগত ব্যক্তি জাগ্রত হও",transliteration:"He nidragoto byakti jagroto hou",category:"কোরাস",lyrics:`হে নিদ্রাগত ব্যক্তি জাগ্রত হও এবং মৃতগণের মধ্য হইতে উঠ,
তাহাতে খ্রীষ্ট তোমার উপরে আলোক উদয় করিবেন।
— ইফিষীয় ৫:১৪`},{id:1025,title:"সদাপ্রভুর বিবিধ দয়ার গুণে",transliteration:"Sodaprobhur bibidho doyar gune",category:"কোরাস",lyrics:`সদাপ্রভুর বিবিধ দয়ার গুণে আমরা নষ্ট হই নাই;
কেননা তাঁহার বিবিধ করুণা শেষ হয় নাই।
নূতন নূতন করুণা প্রতি প্রভাতে। তোমার বিশ্বস্ততা মহৎ।
আমার প্রাণ বলে, সদাপ্রভুই আমার অধিকার,
এইজন্য আমি তাঁহাতে প্রত্যাশা করিব।
—বিলাপ ৩:২২-২৪`},{id:1026,title:"হে লোক সকল, সতত তাঁহাতে নির্ভর কর",transliteration:"He lok sokol, sototo tahate nirbhor koro",category:"কোরাস",lyrics:`হে লোক সকল, সতত তাঁহাতে নির্ভর কর,
তাঁহারই সম্মুখে তোমাদের মনের কথা ভাঙ্গিয়া বল;
ঈশ্বরই আমাদের আশ্রয়।
— গীতসংহিতা ৬২:৮`},{id:1027,title:"হে ঈশ্বর, সিয়োন প্রশংসা তোমার অপেক্ষা করে",transliteration:"He Ishwar, Shiyon proshongsha tomar opeksha kore",category:"কোরাস",lyrics:`হে ঈশ্বর, সিয়োনে প্রশংসা তোমার অপেক্ষা করে,
তোমার উদ্দেশে মানত পূর্ণ করা যাইবে।
হে প্রার্থনা শ্রবণকারী, তোমারই কাছে মর্ত্ত্যমাত্র আসিবে।
— গীতসংহিতা ৬৫:১,২`},{id:1028,title:"হে ঈশ্বর, আমার চিত্ত সুস্থির",transliteration:"He Ishwar, amar chitto susthir",category:"কোরাস",lyrics:`হে ঈশ্বর, আমার চিত্ত সুস্থির,
আমি গান করিব, আমার গৌরবসহ স্তব করিব।
জাগ্রত হও, নেবল ও বীণা, আমি ঊষাকে জাগাইব।
সদাপ্রভু, আমি জাতিগণের মধ্যে তোমার স্তব করিব,
আমি লোকবৃন্দের মধ্যে তোমার প্রশংসা গাহিব।
— গীতসংহিতা ১০৮:১,২,৩`},{id:1029,title:"হে ঈশ্বর, আমাকে অনুসন্ধান কর",transliteration:"He Ishwar, amake onusondhan koro",category:"কোরাস",lyrics:`হে ঈশ্বর, আমাকে অনুসন্ধান কর, আমার অন্তঃকরণ জ্ঞাত হও।
আমার পরীক্ষা কর, আমার চিন্তা সকল জ্ঞাত হও।
আর দেখ, আমাতে দুষ্টতার পথ পাওয়া যায় কি না
এবং সনাতন পথে আমাকে গমন করাও।
— গীতসংহিতা ১৩৯:২৩,২৪`},{id:1030,title:"হে আমাদের প্রভু ও আমাদের ঈশ্বর",transliteration:"He amader probhu o amader Ishwar",category:"কোরাস",lyrics:`হে আমাদের প্রভু ও আমাদের ঈশ্বর,
তুমিই প্রতাপ ও সমাদর ও পরাক্রম গ্রহণের যোগ্য,
কেননা তুমিই সকলের সৃষ্টি করিয়াছ
এবং তোমার ইচ্ছা হেতু সকলই অস্তিত্ব প্রাপ্ত ও সৃষ্ট হইয়াছে।
(হাল্লেলুইয়া) - ৭
— প্রকাশিত বাক্য ৪:১১`},{id:1031,title:"মেষশাবক, যিনি হত হইয়াছিলেন",transliteration:"Meshshabok, jhini hoto hoiyachilen",category:"কোরাস",lyrics:`মেষশাবক, যিনি হত হইয়াছিলেন,
তিনি পরাক্রম ও ধন ও জ্ঞান শক্তি ও সমাদর গৌরব
ও ধন্যবাদ, এই সকল গ্রহণ করিবার যোগ্য।
(হাল্লেলুইয়া হোশন্না হাল্লেলুইয়া) ৪
—প্রকাশিত বাক্য ৫:১২`},{id:1032,title:"আদি, যাত্রা, লেবীয়",transliteration:"Aadi, Jatra, Lebiyo",category:"কোরাস",lyrics:`আদি, যাত্রা, লেবীয়, গণনা, দ্বিতীয় বিবরণ, যিহোশূয়,
বিচারকর্ত্তৃগণ, রূতের বিবরণ, শমূয়েল, শমূয়েল, রাজাবলি,
রাজাবলি, বংশাবলি, বংশাবলি, ইষ্রা, নহিমিয়,
ইষ্টের, ইয়োব, গীতসংহিতা, হিতোপদেশ, উপদেশক।
পরমগীত, যিশাইয়, যিরমিয়, বিলাপ, যিহিষ্কেল, দানিয়েল,
হোশেয়, যোয়েল, আমোষ, ওবদিয়, যোনা, মীখা, নহূম, হবক্কূক।
সফনিয়, হগয়, সখরিয়, মালাখি, এ সকল পুস্তকে রাখ সদা আঁখি,
ভাববাদীর বাণী, ভক্তগণের উক্তি, শিখাক সবারে বিশ্বাস ভক্তি।`},{id:1033,title:"সাধু মথি, মার্ক, লূক",transliteration:"Sadhu Mothi, Mark, Luke",category:"কোরাস",lyrics:`সাধু মথি, মার্ক, লূক, যোহন, প্রেরিত, রোমীয়,
করিন্থীয়, করিন্থীয়, গালাতীয়, ইফিষীয়, ফিলিপীয়, কলসীয়,
থিষলনীকীয়, থিষলনীকীয়, তীমথিয়, তীমথিয়,তীত, ফিলীমন,
ইব্রীয়, যাকব, পিতর, পিতর, যোহন, যোহন, যোহন, যিহূদা,
প্রকাশিত বাক্য, এ সকল পুস্তক করি অধ্যয়ন,
খ্রীষ্টের প্রেমে বাঁধি দেহ আত্মা ও মন।`},{id:1034,title:"ভিন্ন ভিন্ন অদ্ভুত সৃষ্টি এ ভবে",transliteration:"Bhinn Bhinn Adbhut Srishti E Bhobe",category:"কোরাস",lyrics:`ভিন্ন ভিন্ন অদ্ভুত সৃষ্টি এ ভবে,
তাদের মধ্যে বাইবেল সবার উপরে।
জানিবে সবে সবার উপরে, মানিবে সবে সবার উপরে,
তাদের মধ্যে বাইবেল সবার উপরে।
পুরাতনে উনচল্লিশ, নতুনে সাতাশ,
দুটি ভাগে ঈশ সত্য, প্রেমের প্রকাশ,
জানিবে সবে ..........`},{id:1035,title:"সর্ব্বপ্রিয় পাঠ্য পুস্তক বাইবেল",transliteration:"Sorbopriyo Pathyo Pustak Bible",category:"কোরাস",lyrics:`সর্ব্বপ্রিয় পাঠ্য পুস্তক বাইবেল। (২)
পড় যদি প্রতিদিন, পথ দেখাবেন সারাদিন,
হ্যাঁ, সর্ব্বশ্রেষ্ঠ পুস্তক এই বাইবেল।`},{id:1036,title:"প্রভু, তোমার মহিমা, বর্ণনা করা নাহি যায়",transliteration:"Probhu Tomar Mohima Bornona Kora Nahi Jay",category:"কোরাস",lyrics:`প্রভু, তোমার মহিমা, বর্ণনা করা নাহি যায়,
আলোকে আঁধারে ভুবন মাঝারে, পাই তব কত পরিচয়।
দিবানিশি ভরি, প্রশংসা করি, শেষ কভু হবে নাকো তায়।
তব দয়া স্মরি, প্রণাম করি, ওই পদে ওহে দয়াময়।
ক্রুশের উপরে, যে প্রেম দেখালে, মোহিত হয়েছি তায়।
মন প্রাণ ভরি, যীশু যীশু করি, শত মুখে শত রসনায়।
যীশু যীশু বলে, অতি কুতূহলে, ধন্যবাদ করি এসময়।`},{id:1037,title:"সাবধান ছোট কান যা শুন",transliteration:"Sabdhan Choto Kan Ja Shuno",category:"কোরাস",lyrics:`১ সাবধান ছোট কান যা শুন।
স্বর্গে ত্রাতা এক আছেন, কত ভালো যে বাসেন।
সাবধান সাবধান যা শুন।

২ সাবধান ছোট চোখ যা দেখ।
স্বর্গে ত্রাতা এক আছেন, কত ভালো যে বাসেন।
সাবধান সাবধান যা দেখ।

৩ সাবধান ছোট মুখ যা বল।
স্বর্গে ত্রাতা এক আছেন, কত ভালো যে বাসেন।
সাবধান সাবধান যা বল।

৪ সাবধান ছোট হাত যা কর।
স্বর্গে ত্রাতা এক আছেন, কত ভালো যে বাসেন।
সাবধান সাবধান যা কর।

৫ সাবধান ছোট পা যেথা যাও।
স্বর্গে ত্রাতা এক আছেন, কত ভালো যে বাসেন।
সাবধান ছোটপা যেথা যাও।`},{id:1038,title:"আনন্দ আনন্দ আনন্দ রে",transliteration:"Anondo Anondo Anondo Re",category:"কোরাস",lyrics:`আনন্দ আনন্দ আনন্দ রে (২)
১ যীশুতে মোরা, আনন্দের ফোয়ারা, পেয়েছি রে।
২ এই সংসার ছেড়ে আনন্দ নগরে, চলে যাব রে।`},{id:1039,title:"রক্ত দিয়ে যীশু কিনেছেন আমায়",transliteration:"Rokto Diye Jishu Kinechen Amay",category:"কোরাস",lyrics:`রক্ত দিয়ে যীশু কিনেছেন আমায় (২)
দাবী নেই কারো আর, দাবী নেই কারো আর,
আমি যে তাঁর, আমি যে তাঁর, আমি যে তাঁর।
অন্ধকারে চলতে পথ ভয় হবে না আর,
আমি যে তাঁর, আমি যে তাঁর, আমি যে তাঁর।`},{id:1040,title:"গিয়েছে গিয়েছে গিয়েছে(Rolled away)",transliteration:"Giyiche Giyiche Giyiche",category:"কোরাস",lyrics:`Rolled away
গিয়েছে, গিয়েছে, গিয়েছে,
আমার পাপের বোঝা চলে গিয়েছে,
আমার পাপ গিয়েছে, কালভেরীর স্রোত নিচে,
(হাল্লেলুইয়া) গিয়েছে, গিয়েছে, গিয়েছে,
আমার পাপের বোঝা চলে গিয়েছে,
ধন্য যীশুর নাম।`},{id:1041,title:"মনস্থ করেছি, যীশুতে চলিব",transliteration:"Monostho Korechi Jishute Cholibo",category:"কোরাস",lyrics:`I have decided
মনস্থ করেছি, যীশুতে চলিব (৩) ফিরিব না (২)
জগৎ পশ্চাতে ক্রুশ সম্মুখে (৩) ফিরিব না (২)
যদিও কেহ না থাকে সঙ্গে (৩) ফিরিব না (২)`},{id:1042,title:"যীশুর জয় জয় জয় জয়",transliteration:"Jishur Joy Joy Joy Joy",category:"কোরাস",lyrics:`যীশুর জয় জয় জয় জয়
অন্তরেতে হয় (৩)
যীশুর জয় জয় জয় জয়
অন্তরেতে হয়।
ধন্য যীশুর নাম।`},{id:1043,title:"তোমার প্রশংসা, তোমার প্রশংসা করি",transliteration:"Tomar Prosongsa Tomar Prosongsa Kori",category:"কোরাস",lyrics:`তোমার প্রশংসা, তোমার প্রশংসা, তোমার প্রশংসা করি,
হে যীশু ত্রাণকারী, হে যীশু ত্রাণকারী।
তুমি হে ত্রাণধন, তুমি হে জীবন, তুমিই ঈশ্বর নন্দন,
হে যীশু ত্রাণকারী, হে যীশু ত্রাণকারী।
হাল্লেলুইয়া (৪) হাল্লেলুইয়া আমেন (৩)`},{id:1044,title:"বুদ্ধিমান বাঁধিল পাষাণে তাঁর ঘর",transliteration:"Buddhiman Badhilo Pashane Tar Ghor",category:"কোরাস",lyrics:`(মথি ৭:২৪,২৫)
বুদ্ধিমান বাঁধিল পাষাণে তাঁর ঘর (৩)
বৃষ্টি নামিল ঝম ঝম,
বৃষ্টি নামিল, বান আসিল (৩)
কিন্তু সেই ঘর পড়িল না।
বোকা বাঁধিল বালুচরে ঘর (৩)
বৃষ্টি নামিল ঝম্ ঝম্,
বৃষ্টি নামিল, বান আসিল (৩)
কিন্তু সেই ঘর হইল নাশ।
আমি বাঁধিব যীশুতে মোর ঘর (৩)
বৃষ্টি নামিবে ঝম ঝম,
বৃষ্টি নামিবে, বান আসিবে (৩)
কিন্তু সেই ঘর পড়িবে না।`},{id:1045,title:"আমার এই ছোট দীপ উজ্জ্বল রাখিব",transliteration:"Amar Ei Choto Deep Ujjwal Rakhibo",category:"কোরাস",lyrics:`আমার এই ছোট দীপ উজ্জ্বল রাখিব (২)
রাখিব, রাখিব, রাখিব।
কাঠার নিচে, রাখব না, উজ্জ্বল রাখিব (২)
রাখিব, রাখিব, রাখিব।
শয়তানকে ফুঁ দিতে দিব না (২)
দিব না, দিব না, দিব না।`},{id:1046,title:"যে ঘরে যীশু আছে কত আনন্দ",transliteration:"Je Ghore Jishu Ache Koto Anondo",category:"কোরাস",lyrics:`যে ঘরে যীশু আছে কত আনন্দ, কত আনন্দ, কত আনন্দ।
যে ঘরে যীশু আছে কত আনন্দ, কত আনন্দ।

হিন্দি
জিস ঘর মে যেশু হ্যায়
কিতনা আনন্দ হ্যায় (৩)
জিস ঘর মে যেশু হ্যায়
কিতনা আনন্দ হ্যায় (৩)`},{id:1047,title:"Rejoice in the Lord always",transliteration:"Anondo Koro Probhute Soda",category:"কোরাস",lyrics:`Rejoice in the Lord always
আনন্দ কর প্রভুতে সদা আবার বলি আনন্দ কর।
আনন্দ আনন্দ আবার বলি আনন্দ কর।
Rejoice in the Lord always, and again I say rejoice,
Rejoice, rejoice and again I say rejoice.`},{id:1048,title:"In the name of Jesus",transliteration:"Jishur Namete Mora Bijoyi Hoi",category:"কোরাস",lyrics:`In the name of Jesus
যীশুর নামেতে ২ মোরা বিজয়ী হই হাল্লেলুইয়া,
যীশুর নামেতে ২ শয়তান দূরে পালায়,
প্রভু যীশুর বিজয়ী নামের প্রতিরোধ করতে পারে কে?
প্রভু যীশুর বিজয়ী নামে মোরা বিজয়ী হই।
In the name of Jesus 2 We have the victory Halleluiah,
In the name of Jesus 2 Satan will have to flee,
When we stand in the name of Jesus,
Tell me who can stand before
In the mighty name of Jesus, we have the victory.`},{id:1049,title:"স্তব কর নিজ হৃদয়ে (Making melody in my heart)",transliteration:"Stob Kor Nij Hridoye",category:"কোরাস",lyrics:`Making melody in my heart
স্তব কর নিজ হৃদয়ে ৩ রাজাদের রাজার।
আরাধনা কর তাঁর ২ স্তব কর নিজ হৃদয়ে।
১ প্রেম ও সেবা কর তাঁর ৩ প্রশংস তাঁর নাম।
২ যীশুতে অনন্ত জয় ৩ ধন্য হোক তাঁর নাম।
৩ প্রভুদের প্রভু, রাজাধিরাজ ৩ কর তাঁর জয় রব।`},{id:1050,title:"আজকের এই দিন ঈশ্বর সৃষ্টি করেছেন",transliteration:"Ajker Ei Din Ishwar Srishti Korechen",category:"কোরাস",lyrics:`আজকের এই দিন ২ ঈশ্বর সৃষ্টি করেছেন ২
আমরা তাঁহার ২ স্তুতি গাহিব।
আজকের এই দিন ঈশ্বর সৃষ্টি করেছেন।
আমরা তাঁহার স্তুতি গাহিব,
আজকের এই দিন ২ ঈশ্বর সৃষ্টি করেছেন।
This is the day 2 that the Lord has made 2
We will rejoice 2 and be glad in it 2
This is the day that the Lord has made.
We will rejoice and be glad in it,
This is the day 2
That the Lord had made.`},{id:1051,title:"আনন্দে করি গান কৃতজ্ঞ মান প্রাণ",transliteration:"Anonde Kori Gan Kritogya Man Pran",category:"কোরাস",lyrics:`আনন্দে করি গান কৃতজ্ঞ মান প্রাণ
ধন্যবাদ আর প্রশংসাতে।
দয়ালু যীশুর দয়া কত, পেয়েছি তাঁহার আশীষ শত,
দিবাতে বা রাতে থাকেন তিনি সাথে
রক্ষা করেন মোদের মন্দ হতে।
দয়ালু যীশুর দয়া কত, পেয়েছি তাঁহার আশীষ শত,
আবার এই দিনেতে জানি এই সভাতে
পূর্ণ করেন মোদের পুণ্য আত্মাতে।`},{id:1052,title:"আমরা প্রভুর উপরে নির্ভর করি",transliteration:"Amra Probhur Upore Nirbhor Kori",category:"কোরাস",lyrics:`আমরা প্রভুর উপরে নির্ভর করি, প্রভু মোদের ভরসা,
যতই জীবনে ঝড় আসুক, বিপদ আসুক,
কেটে যাবে সহসা।
আমি পর্ব্বতগণের দিকে চক্ষু তুলিব,
কোথা হইতে আমার সাহায্য আসিবে,
সদাপ্রভু হইতে আমার সাহায্য আইসে,
তিনি পৃথিবীর নির্ম্মাণ কর্তা।`},{id:1053,title:"আমার অভাব মেটাও প্রভু",transliteration:"Amar Obhab Metao Probhu",category:"কোরাস",lyrics:`আমার অভাব মেটাও প্রভু, মেটাও এক্ষুনি,
নত হয়ে ধরি তোমার চরণ দুখানি।
তোমার কাছে এলাম আমি, জানি ভালবাস আমায় তুমি,
তাই মিটবে আমার সকল অভাব,
জানি আমি জানি।`},{id:1054,title:"সকালে আমি তোমার গান গাই",transliteration:"Sokale Ami Tomar Gan Gai",category:"কোরাস",lyrics:`সকালে আমি তোমার গান গাই,
তুমি অসীম তোমার মহিমা গাই।
যে দিকে চাই, দেখি তোমায়, তোমার তুলনা নাই,
তোমার গান গাই।`},{id:1055,title:"আমি ভোরবেলা, দেব প্রশংসা",transliteration:"Ami Bhorbela Debo Proshongsa",category:"কোরাস",lyrics:`আমি ভোরবেলা, দেব প্রশংসা,
আমি গাব গান, তোমার গুণগান।
প্রতিদিন তুমি থেকো আমার সঙ্গেতে,
দিয়েছি যে আমার জীবন তোমাকে।
গৌরব প্রশংসা তোমারই (২)`},{id:1056,title:"প্রভু, তোমার আলো দিয়ে আমায় জ্বালো",transliteration:"Probhu Tomar Alo Diye Amay Jalo",category:"কোরাস",lyrics:`প্রভু, তোমার আলো দিয়ে আমায় জ্বালো, আমার জীবন পুণ্য কর।
হাল্লেলুইয়া, হাল্লেলুইয়া, হাল্লেলুইয়া আমেন।
প্রভু, তুমি জীবন, আমায় কর নূতন, তোমার আত্মায় পূর্ণ কর।
হাল্লেলুইয়া, হাল্লেলুইয়া, হাল্লেলুইয়া আমেন।
প্রভু, তুমি আশা, আমার ভালোবাসা, তোমার ইচ্ছা পূর্ণ কর।
হাল্লেলুইয়া, হাল্লেলুইয়া, হাল্লেলুইয়া আমেন।`},{id:1057,title:"হাল্লেলুইয়া বল সবে",transliteration:"Halleluiah Bolo Sobe",category:"কোরাস",lyrics:`হাল্লেলুইয়া বল সবে, প্রেমানন্দে বাহু তুলে,
ধন্য ধন্য বলে তাই, প্রশংসা গাই,
প্রশংসা গাই, প্রশংসা গাই,
যীশু রাজার প্রশংসা গাই।
জানু পেতে সেবা করে, ভালবেসে আপন করে,
যীশু যীশু বলে তাই, প্রশংসা গাই।`},{id:1058,title:"আমার হৃদয় নাচে ",transliteration:"Amar Hridye Nache ",category:"কোরাস",lyrics:`(রব তোমার সনে আশা এ জীবনে)
আমার হৃদয় নাচে ২
প্রভুরই আনন্দে হৃদয় নাচে।
পাপভার হতে মুক্তি কী আনন্দে,
আত্মার বরিষণে হৃদয় নাচে।
রব তোমার সনে আশা এ জীবনে,
মরণে ভয় নাই হৃদয় মাঝে।
আছ তুমি প্রভু হৃদয়াসনে,
সেই আনন্দে আমার হৃদয় নাচে।`},{id:1059,title:"যীশু আমার মুক্তিদাতা",transliteration:"Jishu Amar Muktidata",category:"কোরাস",lyrics:`যীশু আমার মুক্তিদাতা, যীশু আমার প্রাণ,
যীশু আমার পথের আলো, যীশু আমার গান।
আমার হৃদয় জুড়ে আছেন যীশু জড়িয়ে,
তাই আমি যেখানে যাই, তাই আমার কোন ভয় নাই।
যীশু আমার, যীশু আমার, যীশু আমার, যীশু আমার।`},{id:1060,title:"অবনত হয়ে, প্রভু, প্রণমি তোমায়",transliteration:"Obonoto Hoye Probhu Pronomi Tomay",category:"কোরাস",lyrics:`অবনত হয়ে, প্রভু, প্রণমি তোমায়,
তুমি প্রভু যীশু, বড় দয়াময়,
তোমা বিনা নাই মোর কোন যে উপায়।
সঞ্চারী: তুমি দয়া কর আজি এসময়,
মম জীবন ধন্য হউক তোমার ছোঁয়ায়।
হৃদয় বীণার তারে বাজুক সদাই,
জয় যীশুর, জয় যীশুর, জয় যীশুর জয়।`},{id:1061,title:"পবিত্র আত্মা, পবিত্র আত্মা",transliteration:"Pobitro Atma Pobitro Atma",category:"কোরাস",lyrics:`পবিত্র আত্মা, পবিত্র আত্মা,
আমায় নিয়ে চল যীশুর কাছে, পবিত্র আত্মা।
যীশু তোমার তরে, যীশু তোমার তরে,
আমার জীবন শুধু তোমার তরে।
আমাকে জ্ঞান দাও, আমাকে তোমার করে নাও,
তোমার বাক্যের মধ্য দিয়ে আমায়, চলতে তুমি দাও।`},{id:1062,title:"ঈশ্বরের আত্মা আমায় যখন চালায়",transliteration:"Ishwarer Atma Amay Jakhon Chalay",category:"কোরাস",lyrics:`১ ঈশ্বরের আত্মা আমায় যখন চালায়, আমি দাউদের মত গান গাই।
গান গাই, গান গাই, আমি দাউদের মত গান গাই।
২ ঈশ্বরের আত্মা আমায় যখন চালায়, আমি দাউদের মত নাচি,
আমি নাচি, আমি নাচি, আমি দাউদের মত নাচি।
৩ ঈশ্বরের আত্মা আমায় যখন চালায়, আমি দাউদের মত স্তুতি গাই,
স্তুতি গাই, স্তুতি গাই, আমি দাউদের মত স্তুতি গাই।`},{id:1063,title:"স্তুতি আরাধনা উপর দিকে যায়",transliteration:"Stuti Aradhona Upor Dike Jay",category:"কোরাস",lyrics:`স্তুতি আরাধনা উপর দিকে যায়,
আশীষ নিয়ে আসে হেথায়,
প্রভু মোদের কত মহান,
দেখ, তিনি প্রেম করেন দান।
হাল্লেলু—হাল্লেলুয়া।`},{id:1064,title:"যীশু নাম, মহা নাম",transliteration:"Jishu Naam, Moha Naam",category:"কোরাস",lyrics:`যীশু নাম, মহা নাম, মধুমখা নাম,
মনের আনন্দে গাও অবিরাম।
সদা কর হাল্লেলুইয়া ধ্বনি, কি দিবা, কি যামিনী,
চাও যদি প্রাণেরই আরাম।
১ ঐ নামে পলাবে দুঃখ, ঐ নামে মিলিবে মোক্ষ,
ঐ নামে পূর্ণ মনস্কাম, নামে এ ধরণী হবে শান্তিধাম,
মনের আনন্দে জপো অবিরাম।`},{id:1065,title:"প্রভু যীশু, তোমার তুল্য",transliteration:"Probhu Jishu, Tomar Tulya",category:"কোরাস",lyrics:`প্রভু যীশু, তোমার তুল্য আর কেউ আছে কি,
তোমার চরণ ছুঁয়েছে আকাশ, আর মহিমা গায় ধরণী।
গাই আমি হোশান্না, তুমি রাজাদের রাজা,
তোমার মহিমা হবে সদাই, তুমি প্রভু আমাদের ঈশ্বর।
প্রেমী পিতা, তুমি আমায় কত ভালোবেসেছো,
আমার পাপ থেকে, মুক্তি দিতে, নিজ পুত্রকে বলিদান করেছ।`},{id:1066,title:"ঈশ্বরের ধন্যবাদ",transliteration:"Ishwarer Dhonyobad",category:"কোরাস",lyrics:`ঈশ্বরের ধন্যবাদ, হোশান্না, হোশান্না,
ঈশ্বরের ধন্যবাদ, গীতি আমি গাই
সকাল সাঁঝে প্রত্যহ প্রতিবেলায়।
প্রতি পলে পলে দণ্ডে ও ঘণ্টায়,
মোরা বেঁচে আছি, তাঁরই করুণায়,
প্রভু যীশুর নামে গাহি তাঁরই জয়।`},{id:1067,title:"গাও হাল্লেলুইয়া!",transliteration:"Gao Hallelujah!",category:"কোরাস",lyrics:`গাও হাল্লেলুইয়া! (২)
গাও হাল্লেলুইয়া প্রভুতে।
গাও মৃত্যুঞ্জয়ী যীশুর জয়! (২)
গাও মৃত্যুঞ্জয়ী! (২)
গাও মৃত্যুঞ্জয়ী যীশু জয়!
Sing Hallelujah to the Lord! (2)
Sing Hallelujah! (2)
Sing Hallelujah to the Lord!
Sing Christ is risen from the dead! (2)
Sing Christ is risen! (2)
Sing Christ is risen from the dead!`},{id:1068,title:"প্রেমী পিতা তুমি অন্তর্যামী",transliteration:"Premi Pita Tumi Ontoryami",category:"কোরাস",lyrics:`প্রেমী পিতা তুমি অন্তর্যামী, তোমার সম্মুখে আসি আমি।
১ তুমি প্রভু সবল, আমি দুর্বল, সবলে মোর হৃদে এস নামি!
২ পাপীর বন্ধু কৃপাসিন্ধু, দাও মোরে শান্তি পাপ ক্ষমি।
৩ তোমার কাছে শান্তি আছে, সুখে দুঃখে তোমায় ডাকি আমি।
৪ ব্যাধিতে ক্লিষ্ট দয়া কর খ্রীষ্ট, সুস্থ কর মোরে যীশু তুমি।
৫ কর তব আত্মায় পূর্ণ আমায়, তব গুণ গাব দিন ও যামী।`},{id:1069,title:"যীশু জানেন পথ প্রান্তরের মাঝে",transliteration:"Jishu Janen Poth Prantorer Majhe",category:"কোরাস",lyrics:`যীশু জানেন পথ প্রান্তরের মাঝে, আমরা চলি তাঁর পিছে পিছে।
আজকের শক্তি আমার তো আছে, কালকের পাব প্রভুরই কাছে।`},{id:1070,title:"সক্কেয় নামে এক লোক ছিল",transliteration:"Sokkeyo Name Ek Lok Chilo",category:"কোরাস",lyrics:`(লূক ১৯:১-১০)
সক্কেয় নামে এক লোক ছিল, (সে) খুব খাটো লোক ছিল,
সে যীশুকে দেখবার জন্য গাছে উঠিল, সে গাছে উঠিল,
যীশু যখন সেই পথে, সেই পথে আসিলেন
সক্কেয়কে ডেকে বললেন, শীঘ্র নেমে এস,
(আজ) তোমার বাড়িতে যাই, তোমার বাড়িতে যাই।`},{id:1071,title:"তোমার দ্বারে প্রবেশ করি ",transliteration:"Tomar Dware Probesh Kori",category:"কোরাস",lyrics:`তোমার দ্বারে প্রবেশ করি ধন্যবাদ নিয়ে,
তোমার প্রাঙ্গণে প্রশংসা নিয়ে।
আমি গাইব আজকে সদাপ্রভুর কৃতদিন,
আমায় আজ তিনি খুশি করেছেন।
খুশি করেছেন (২)
আমায় আজ তিনি খুশি করেছেন।`},{id:1072,title:"যীশুর কাছে কিছুই কঠিন নয়",transliteration:"Jishur Kache Kichui Kothin Noy",category:"কোরাস",lyrics:`যীশুর কাছে কিছুই কঠিন নয়,
(ও ভাই) কিছুই কঠিন নয়
১ বিশ্বাসেতে চাইলে পরে সবই পাওয়া যায়,
প্রাণ খুলে বলরে ও ভাই, প্রভু যীশুর জয়
প্রভু যীশুর জয়।
২ বিশ্বাসেতে ঝাঁপ দিলে ভাই পারে যাওয়া যায়,
প্রাণ খুলে বলরে ও ভাই, প্রভু যীশুর জয়
প্রভু যীশুর জয়।`},{id:1073,title:"প্রশংস হে মোর প্রাণ",transliteration:"Proshongso He Mor Pran",category:"কোরাস",lyrics:`প্রশংস হে মোর প্রাণ, গৌরব হাল্লেলুয়া,
প্রশংস হে মোর প্রাণ, প্রশংস তায়।`},{id:1074,title:"না কখনও না",transliteration:"Na Kokhono Na",category:"কোরাস",lyrics:`না কখনও না, না কখনও না,
প্রতিজ্ঞা করেছেন যীশু আমাকে ছাড়িবেন না।
না কখনও না, না কখনও না,
প্রতিজ্ঞা করেছি আমি, যীশুকে ছাড়িব না।`},{id:1075,title:"পাপাত্মার দুর্গ ভেঙে কর নাশ",transliteration:"Papatmar Durga Bhenge Kor Nash",category:"কোরাস",lyrics:`পাপাত্মার দুর্গ ভেঙে কর নাশ (২)
শক্তি ও রাজ্য তার কর হে চুরমার,
পাপাত্মার দুর্গ ভেঙ্গে  কর নাশ।
গৌরব স্তুতি প্রভু যীশুর, সম্মান শক্তি প্রভু যীশুর,
গৌরব, স্তুতি, সম্মান, শক্তি,
চিরতরে প্রভু যীশুর।`},{id:1076,title:"প্রভু যীশু, কভু বদলান না",transliteration:"Probhu Jishu Kobhu Bodlan Na",category:"কোরাস",lyrics:`প্রভু যীশু, কভু বদলান না,
কভু বদলান না, কভু বদলান না,
প্রভু যীশু কভু, কভু বদলান না।
সদা সেই আছেন, (হাল্লেলুয়া ৭)।`},{id:1077,title:"জীবন জ্যোতি, প্রেমের বাতি",transliteration:"Jibon Jyoti, Premer Bati",category:"কোরাস",lyrics:`জীবন জ্যোতি, প্রেমের বাতি, জ্বালিয়ে নে রে অন্তরে,
পথ চলতে ভয় হবে না, এই মরু প্রান্তরে,
খ্রীষ্ট হবেন সাথী, রবেন দিবারাতি,
উদ্ধারিতে সব বিপদে, সকল পথে। জীবনজ্যোতি।`},{id:1078,title:"ফিঙ্গে ঘুরিয়ে মারলো",transliteration:"Finge Ghuriye Marlo",category:"কোরাস",lyrics:`(১ শমূয়েল ১৭:১-৫৪)
ফিঙ্গে ঘুরিয়ে মারলো (২)
দাউদ গলিয়াৎ কে, ফিঙ্গে ঘুরিয়ে মারলো।
এক নয়, দুই নয়, তিন নয়, চার নয় (২)
পাঁচটা পাথর কুড়িয়ে নিয়ে, একটা পাথর মারলো।
বলেতে নয়, শক্তিতে নয়, বুদ্ধিতে নয়, জ্ঞানেতে নয়,
জীবিত ঈশ্বরের নামে তাঁর শত্রুকে মারলো।`},{id:1079,title:"পাঁচটি রুটি, মাছ দুটো",transliteration:"Panchti Ruti, Mach Duto",category:"কোরাস",lyrics:`(মথি ১৪:১৫-২১)
পাঁচটি রুটি, মাছ দুটো, খেল পাঁচ হাজার লোক যত।
সারি সারি বসে গেল, খাবার দিল বারো শিষ্য,
যে বারো ডালা বেঁচে গেল, ঈশ্বরের মহিমা তারা দেখলো।`},{id:1080,title:"তৈল দাও প্রদীপে",transliteration:"Toilo Dao Prodipe",category:"কোরাস",lyrics:`তৈল দাও প্রদীপে রাখ উজ্জ্বল,
তৈল দাও প্রদীপে আমার,
তৈল দাও প্রদীপে রাখ উজ্জ্বল,
যেন পারি জ্বলিতে অনিবার,
গাও হোশন্না (৩) রাজাধিরাজার।`},{id:1081,title:"সুন্দর সুন্দর এই সংসার",transliteration:"Sundar Sundar Ei Songsar",category:"কোরাস",lyrics:`১ সুন্দর সুন্দর এই সংসার, যেখানে দেখ সবই সুন্দর।
যেখানে দেখ সবই ভালো, জগৎ কে প্রভু সৃষ্টি করেছেন।

২ লাল, গোলাপী, চম্পা, চামেলী, নীল, পিঙ্গল ফুল সবই,
গন্ধ ছাড়ায়ে সারা জগৎ, ঈশ্বর সৃষ্টি করেছেন।

৩ বড় বড় হাতিকে, ছোট ছোট খরগোশকে,
গরু ছাগল ভেড়াকে, জগৎকে প্রভু সৃষ্টি করেছেন।

৪ নদী পাহাড় সাগরকে, সূর্য চন্দ্র তারাকে,
স্ত্রী পুরুষকে আপন স্বরূপ, ঈশ্বর দিলেন নিজের রূপ।`},{id:1082,title:"সোনা কী রূপা তো নাই",transliteration:"Sona Ki Rupa To Nai",category:"কোরাস",lyrics:`(প্রেরিত ৩:১-১০)
সোনা কী রূপা তো নাই, যা আছে দিই তোমাকে তাই,
নাসরতীয় যীশু নামে উঠ আর হেটে বেড়াও।
উঠ আর লাফাও প্রশংসা গাও (২)
নাসরতীয় যীশু নামে উঠ আর হেটে বেড়াও।`},{id:1083,title:"পাঁচ দুই এক তালন্ত",transliteration:"Panch Dui Ek Talanta",category:"কোরাস",lyrics:`(মথি ২৫:১৪-৩০)
পাঁচ দুই এক তালন্ত, প্রভু দিলেন খুশিমত।
১ পাঁচটি পেল যে, ব্যবহার করল সে,
দুইটি পেল যে, ব্যবহার করল সে,
একটি পেল যে, মাটির নিচে পুতে রেখে
ভাবল করলাম বেশ।
২ হঠাৎ প্রভু এসে, হিসাব নিলেন শেষে,
দশটি আনল যে, বাহবা পেল সে,
চারটি আনল যে, বাহবা পেল সে,
একটি আনল যে, প্রভু তাকে ধমক দিয়ে
শাস্তি দিলেন বেশ।`},{id:1084,title:"এলরে এক বীজবপনকারী",transliteration:"Elore Ek Bijboponkari",category:"কোরাস",lyrics:`(মথি ১৩:৪-৯; ১৮-২৩)
এলরে এক বীজবপনকারী (২)
১ কতক বীজ পড়ল পথের পার্শ্বে,
পাখিরা এসে তা খেয়ে নিল।
২ কতক বীজ পড়ল পাথরের উপর,
রৌদ্রতাপে তা শুকিয়ে গেল।
৩ কতক বীজ পড়ল কাঁটা বনেতে,
কাঁটা বন বেড়ে তা চেপে দিল।
৪ কতক বীজ পড়ল উত্তম ভূমিতে
ফলল ত্রিশগুণ, ষাটগুণ, শতগুণ।`},{id:1085,title:"এই ছোট জীবন গাড়িটি",transliteration:"Ei Choto Jibon Gariti",category:"কোরাস",lyrics:`এই ছোট জীবন গাড়িটি তুমি চালাও, হে প্রভু!
এই ছোট মন মন্দিরে তুমি বাস কর, হে প্রভু!
এই ছোট মুখে (২) তোমার কথা বলতে শিখাও।
এই ছোট কানে (২) তোমার কথা শুনতে শিখাও।
এই ছোট হাতে (২) তোমার কাজ করতে শিখাও।
এই ছোট পায়ে (২) তোমার পথে চলতে শিখাও।`},{id:1086,title:"আমি খুশি আজকে",transliteration:"Ami Khushi Ajke",category:"কোরাস",lyrics:`১ আমি খুশি আজকে (২)
যীশুতে আমি খুশি আজকে।
আমার পাপ সকল দূর করেছেন,
তাই আমি খুব খুশি আজকে।
২ আমি গান করি (২)
যীশুর প্রশংসা গান করি,
আমার পাপ সকল দূর করেছেন,
তাই আমি আজ গান করি।
৩ আমি প্রার্থনা করি (২)
যীশুর কাছে আমি প্রার্থনা করি।
আমার পাপ সকল দূর করেছেন,
তাই আমি খুব খুশি আজকে।`},{id:1087,title:"চালাও প্রভু তোমার নদীর ধারে",transliteration:"Chalao Probhu Tomar Nodir Dhare",category:"কোরাস",lyrics:`১ চালাও প্রভু তোমার নদীর ধারে (৩)
চালাও মোরে (৩)।

২ পান করতে দাও তোমার নদীর ধারে (৩)
পান করতে দাও (৩)।

৩ বাস করতে দাও তোমার নদীর ধারে (৩)
বাস করতে দাও (৩)।`},{id:1088,title:"কেমন শক্তিমান প্রভু",transliteration:"Kemon Shoktiman Probhu",category:"কোরাস",lyrics:`কেমন শক্তিমান প্রভু, যাঁকে আমরা সেবা করি
স্বর্গ মর্ত্য যপে নাম, দূতেরা করে প্রণাম।
কেমন শক্তিমান প্রভু।`},{id:1089,title:"ঈশ্বরের রাজ্য ও ধার্মিকতার অন্বেষণ কর",transliteration:"Ishwarer Rajyo O Dharmikotar Anweshan Kor",category:"কোরাস",lyrics:`১ ঈশ্বরের রাজ্য ও ধার্মিকতার অন্বেষণ কর,
তোমার সব প্রয়োজন তিনি মিটাবেন।
হাল্লেলু-হাল্লেলুইয়া।
ধুয়া: হাল্লেলুইয়া (৩) হাল্লেলু-হাল্লেলুইয়া।
২ যাচঞা করিলে দেওয়া যাইবে, খুঁজিলে পাইবে,
দ্বারে আঘাত কর খোলা যাইবে।
হাল্লেলু-হাল্লেলুইয়া।
৩ মনুষ্য কেবল রুটিতে বাঁচিবে না,
কিন্তু ঈশ্বরের মুখ-নিৰ্গত বাক্যে বাঁচিবে।
হাল্লেলু-হাল্লেলুইয়া।
৪ কারণ ঈশ্বর জগতকে এমন প্রেম করিলেন,
যে আপন পুত্র দিলেন, যে কেহ বিশ্বাস করে সে বাঁচিবে।
হাল্লেলু-হাল্লেলুইয়া।`},{id:1090,title:"আমি আনন্দিত হইলাম",transliteration:"Ami anondito hoilam",category:"কোরাস",lyrics:`আমি আনন্দিত হইলাম যখন লোকে বলিল (৩)
চল আমরা সদাপ্রভুর গৃহে যাই।
সদাপ্রভুর গৃহে আছে কত আনন্দ উল্লাস (৩)
চল আমরা সদাপ্রভুর গৃহে যাই।`},{id:1091,title:"মোর প্রিয় যীশু শীঘ্রই আসিবেন",transliteration:"Mor priyo Yeshu shighro ashiben",category:"কোরাস",lyrics:`My Jesus will be coming very soon
হাল্লেলুইয়া, হাল্লেলুইয়া, হাল্লেলুইয়া (৩)
মোর প্রিয় যীশু শীঘ্রই আসিবেন।
প্রস্তুত হও, প্রস্তুত হও, সব খ্রীষ্টীয়ান,
মোর প্রিয় যীশু শীঘ্রই আসিবেন।
পূর্ণ হও, পূর্ণ হও, পুণ্য আত্মাতে,
মোর প্রিয় যীশু শীঘ্রই আসিবেন।`},{id:1092,title:"যীশু তুমি কত সুন্দর",transliteration:"Yeshu tumi koto sundor",category:"কোরাস",lyrics:`যীশু তুমি কত সুন্দর, কত মধুর, পবিত্র,
দয়ালু, তুমি উজ্জ্বল শুকতারা,
যীশু তুমি কত সুন্দর।`},{id:1093,title:"যীশু আসিবেন, আমায় নিতে আসিবেন",transliteration:"Yeshu ashiben amay nite ashiben",category:"কোরাস",lyrics:`যীশু আসিবেন, আমায় নিতে আসিবেন,
হাল্লেলুইয়া, হাল্লেলুইয়া শীঘ্রই আসিবেন।
হাল্লেলুইয়া, হাল্লেলুইয়া সবে প্রস্তুত হও,
হাল্লেলুইয়া, হাল্লেলুইয়া ঊর্দ্ধ দিকে চেয়ে রও।`},{id:1094,title:"মনরে আমার কর",transliteration:"Monre amar koro",category:"কোরাস",lyrics:`মনরে আমার কর, মনরে আমার কর,
প্রভু যীশুর ধ্যান, প্রভু যীশুর গান।
সুন্দর প্রভু মোর হাত দুটি করি জোড়,
তোমারে জানাই প্রণাম (৩)।
পাপীর বন্ধু করুণা সিন্ধু
সুন্দর সেই যীশু নাম।
যীশুর নামে আঁধার যাবে
আলোকে ভরিবে প্রাণ (৩)।`},{id:1095,title:"পাছে আমি ভুলে যাই",transliteration:"Pache ami bhule jai",category:"কোরাস",lyrics:`পাছে আমি ভুলে যাই, পাছে আমি দূরে যাই,
রাখ মোরে তব পাশে, ক্রুশের কাছে সর্বদাই।
তব প্রেম, তব ব্যথা, রহুক প্রাণে সদা গাঁথা,
আমি যেন সর্ব্বদাই, তোমার প্রেমে ডুবে রই।`},{id:1096,title:"ঘন কালো অন্ধকারের মাঝে আলো দিল কে?",transliteration:"Ghon kalo ondhokarer majhe alo dilo ke",category:"কোরাস",lyrics:`ঘন কালো অন্ধকারের মাঝে আলো দিল কে?
মাটির মানুষ তৈরি করে বল, প্রাণ দিল কে?

১ সুখ শান্তি ভরা দ্বেষ হিংসা হারা যে পৃথিবী গড়ে উঠল,
রুক্ষ পাহাড় থেকে সাগরেতে ছুটে যেতে
ঝরণা ঝরতে লাগল (২)।

২ আলো বাতাস দিয়ে এমন মধুর করে এ পৃথিবী গড়ল কে?
এ পৃথিবী গড়ল (২) এ পৃথিবী গড়ল কে?
সদাপ্রভু (৪)`},{id:1097,title:"আমি যীশুর হাত কভু ছাড়ব না",transliteration:"Ami Yeshur hath kobhu charbo na",category:"কোরাস",lyrics:`১ আমি যীশুর হাত কভু ছাড়ব না (২)
রাতের ঘন আঁধারে, জীবন তুফান ঝড়ে
আমি যীশুর হাত কভু ছাড়ব না।

২ প্রাণের প্রদীপ মোর নিভে যাবে না (২)
রাতের ঘন আঁধারে, জীবন তুফান ঝড়ে
প্রাণের প্রদীপ মোর নিভে যাবে না।`},{id:1098,title:"ও গৌরব যীশু, তিনি তুললেন আমায়",transliteration:"O gorob Yeshu tini tulilen amay",category:"কোরাস",lyrics:`O, Glory to God
ও গৌরব যীশু, তিনি তুললেন আমায়,
তিনি তুললেন আমায় জানি,
তিনি বাড়ালেন হাত, আর তুললেন আমায়
তাই এত ভালবাসি।
আমি যীশুকে ভালোবাসব (২)
আর আমি যখন চলে যাব ওপারে
তখন আরো ভালোবাসব।`},{id:1099,title:"যীশু তুমি ত্রাতা মুক্তিদাতা",transliteration:"Yeshu tumi trata muktidata",category:"কোরাস",lyrics:`যীশু তুমি ত্রাতা মুক্তিদাতা, তোমাকেই প্রভু আমি চাই,
প্রভাতে বা রাতে তুমি থাক সাথে, প্রভু তুমি মোর সহায়।
তুমি এলে সাথে জানি সারা পথে, রবে নাকো আর কোন ভয়।`},{id:1100,title:"তোমার যা কিছু তোমারে দিতেছি",transliteration:"Tomar ja kichu tomare ditechi",category:"কোরাস",lyrics:`তোমার যা কিছু তোমারে দিতেছি,
বেশি তো কিছু দিই না,
যা কিছু আমার সকলই তোমার,
কভু যেন ভুলে না যাই।`},{id:1101,title:"দিন ও রাতে যীশু মোর ত্রাতা",transliteration:"Din o rate Yeshu mor trata",category:"কোরাস",lyrics:`দিন ও রাতে যীশু মোর ত্রাতা,
সারা পথে যীশু মোর নেতা,
কালভোরী আমি করি স্মরণ,
যীশু তো আমার বন্ধু পরম।`},{id:1102,title:"ওহে পিতঃ প্রাতে খুঁজি তোমাকে",transliteration:"Ohe pitoh prate khunji tomake",category:"কোরাস",lyrics:`১ ওহে পিতঃ প্রাতে খুঁজি তোমাকে,
তোমার ইচ্ছামতে চালাও আমাকে।

২ পাপ ও শয়তান হইতে রক্ষ আমাকে,
তোমার দয়া লইতে শিখাও আমাকে।

৩ আজি তব সেবায়, রত থাক মন,
আশীষ দেও আমায়, পুঁজিতে চরণ।

৪ তব প্রেমের কথা, বলি যাকে পাই,
শক্তি দিও তথা, যখন জেথা যাই।`},{id:1103,title:"ধন্যবাদ ধন্যবাদ ধন্যবাদ",transliteration:"Dhonyobad dhonyobad dhonyobad",category:"কোরাস",lyrics:`ধন্যবাদ, ধন্যবাদ, ধন্যবাদ,
এ সব আশীর্বাদের জন্য ধন্যবাদ,
সব আশীষ আসে স্বর্গ হইতে
হাল্লেলুইয়া ধন্যবাদ, ধন্যবাদ, ধন্যবাদ,
এ সব আশীর্বাদের জন্য ধন্যবাদ।`},{id:1104,title:"প্রার্থনা কর তুমি অতি প্রত্যুষে",transliteration:"Prarthona koro tumi oti protyushe",category:"কোরাস",lyrics:`প্রার্থনা কর তুমি অতি প্রত্যুষে,
প্রার্থনা কর তুমি দুপুর দিবসে,
প্রার্থনা কর তুমি রাত্রিকালে,
রেখেছেন ঈশ্বর তাঁর কর্ণখুলে।
(তিনি) প্রার্থনার উত্তর দেন অতি প্রত্যুষে,
(তিনি) প্রার্থনার উত্তর দেন দুপুর দিবসে,
(তিনি) প্রার্থনার উত্তর দেন রাত্রিভাগে,
বিশ্বস্ত ঈশ্বর তাঁর প্রতিজ্ঞাতে।`},{id:1105,title:"I will make you fishers",transliteration:"Monushyodhari korbo tomay",category:"কোরাস",lyrics:`I will make you fishers
মনুষ্যধারী করব তোমায়
করব তোমায় (৩)
মনুষ্যধারী করব তোমায়
মম পশ্চাৎ লও (৩)
মনুষ্যধারী করব তোমায়
মম পশ্চাৎ লও।`},{id:1106,title:"হাল্লেলু, হাল্লেলু, হাল্লেলু, হাল্লেলুইয়া",transliteration:"Hallelu Hallelu Hallelu Halliluia",category:"কোরাস",lyrics:`Hallelu.........Praise ye the Lord
হাল্লেলু, হাল্লেলু, হাল্লেলু, হাল্লেলুইয়া
প্রশংসা গাও,
প্রশংসা গাও হাল্লেলুইয়া (৩)
প্রশংসা গাও।`},{id:1107,title:"ঐ রক্তের নদী বহিছে",transliteration:"Oi rokter nodi bohiche",category:"কোরাস",lyrics:`ঐ রক্তের নদী বহিছে
যীশুর ক্রুশ হইতে
যে কেহ তাহাতে নাইবে
নিশ্চয়ই সাফ হইবে;
আমি জানি, আমি মানি,
যীশু আমার তরে — তরে
ক্রুশে হইলেন বলিদান
বাঁচাতে মোরে।`},{id:1108,title:"ধন্য যীশুর নাম",transliteration:"Dhonyo Yeshur nam",category:"কোরাস",lyrics:`ধন্য যীশুর নাম, ধন্য যীশুর নাম,
ধন্য প্রভু যীশুর নাম,
হাল্লেলুইয়া (২)
ধন্য প্রভু যীশুর নাম।`},{id:1109,title:"তুমি দয়া করে দিয়াছ আহার",transliteration:"Tumi doya kore diyacho ahar",category:"কোরাস",lyrics:`তুমি দয়া করে দিয়াছ আহার,
ওহে জগৎ পিতা দয়াধার,
তোমার পায়ে জানাই নমস্কার,
তুমি আশীর্বাদ কর এ খাদ্যে
দান কর আত্মার আহার,
পূর্ণ কর এই গৃহের ভাণ্ডার,
দিয়া সুখাদ্য আজ ক্ষুধিত জনে
বাঁচাও দুঃখী নারী-নর। 
আমেন।`},{id:1110,title:"সদাপ্রভু জীবনের পালক আমার",transliteration:"Sodaprabhu jiboner palok amar",category:"কোরাস",lyrics:`সদাপ্রভু জীবনের পালক আমার,
তুমি প্রভু আঁধারে আলো আমার;
তাই গাই জয়গান তোমারই নামে। (২)

জয় জয় গান গেয়ে পূজিবো তোমায়,
জীবনে করিব তোমার সবারই মহান।

আমার প্রণাম তুমি নাও গো প্রভু,
রেখো আমায় তোমারই চরণে শুধু।

আজকে আমার এই জীবনের বাধায়,
তুমি করো প্রভু শান্তির দান।

শান্তির ও গান আমি গেয়ে যাবো রে,
রেখো আমায় তোমারই চরণে শুধু।`},{id:1111,title:"তোমার দয়া জীবন হইতে উত্তম",transliteration:"Tomar doya jibon hoite uttom",category:"কোরাস",lyrics:`তোমার দয়া, তোমার দয়া,
তোমার দয়া জীবন হইতে উত্তম। (২)

আমার ওষ্ঠাধর তোমার প্রশংসা করিবে।

এই রূপে আমি যাবজ্জীবন,
তোমার ধন্যবাদ করিব।

আমি তোমার নামের অঞ্জলি উঠাইব।
আমার প্রাণ তৃপ্ত হইবে
যেমন মেদ ও মজ্জাতে হয়।
—গীতসংহিতা ৬৩:৩-৫`},{id:1112,title:"এক মা কি তরহা প্রভু শান্তি দাতা হ্যায়",transliteration:"Ek maa ki tarha probhu shanti data hay",category:"কোরাস",lyrics:`এক মাঁ কি তরহা প্রভু শান্তি দাতা হ্যায় (২)
কভি না ছাড়গা, কভি না ত্যাগগা (২)
এক মাঁ...........
সিনস লাগায়গা, আঁসু কা পাছগা (২)
এক মাঁ.......
জীবন ম কিঁউ উদাস, যশু পাশ হ্যায় আরাম (২)
এক মাঁ...........
হাল্লুইয়া (৮)`}];/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=(...a)=>a.filter((l,o,r)=>!!l&&l.trim()!==""&&r.indexOf(l)===o).join(" ").trim();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=a=>{const l=Ob(a);return l.charAt(0).toUpperCase()+l.slice(1)};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0;return!1};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=G.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:u="",children:h,iconNode:f,...m},v)=>G.createElement("svg",{ref:v,...Rb,width:l,height:l,stroke:a,strokeWidth:r?Number(o)*24/Number(l):o,className:$0("lucide",u),...!h&&!Bb(m)&&{"aria-hidden":"true"},...m},[...f.map(([p,b])=>G.createElement(p,b)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(a,l)=>{const o=G.forwardRef(({className:r,...u},h)=>G.createElement(kb,{ref:h,iconNode:l,className:$0(`lucide-${zb(Oy(a))}`,`lucide-${a}`,r),...u}));return o.displayName=Oy(a),o};/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]],Vb=wt("arrow-down-a-z",_b);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Hb=wt("arrow-left",Ub);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Kb=wt("chevron-left",Lb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xa=wt("chevron-right",Gb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Yb=wt("cpu",Jb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],Xb=wt("hash",qb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Aa=wt("heart",Pb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Gu=wt("house",Qb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],hu=wt("info",Zb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],I0=wt("list",Fb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$b=wt("mail",Wb);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],tx=wt("mic-off",Ib);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],tp=wt("mic",ex);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Ry=wt("monitor",ix);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],nx=wt("moon",ax);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],sx=wt("music",lx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ep=wt("search",ox);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],uo=wt("settings",rx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ux=wt("shield-check",cx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],dx=wt("smartphone",fx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],mx=wt("sparkles",hx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],px=wt("star",yx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],vx=wt("sun",gx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Ju=wt("tag",bx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],Sx=wt("type",xx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Yu=wt("user",Tx);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ip=wt("x",Ax);/**
 * @license lucide-react v0.574.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],ap=wt("youtube",Mx),Ex=({children:a,activeTab:l,setActiveTab:o})=>y.jsxs("div",{className:"flex flex-col min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] font-sans transition-colors duration-300",children:[y.jsx("div",{className:"flex-grow pb-24",children:a}),y.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-[var(--bg-card)]/80 backdrop-blur-xl border-t border-[var(--border-color)] px-4 pt-3 md:hidden z-40",style:{paddingBottom:"calc(1.5rem + env(safe-area-inset-bottom))"},children:y.jsxs("div",{className:"max-w-md mx-auto flex items-center justify-around",children:[y.jsx(Zs,{active:l==="home",onClick:()=>o("home"),icon:y.jsx(Gu,{className:"w-6 h-6"}),label:"সূচী"}),y.jsx(Zs,{active:l==="collection",onClick:()=>o("collection"),icon:y.jsx(I0,{className:"w-6 h-6"}),label:"সংগ্রহ"}),y.jsx(Zs,{active:l==="settings",onClick:()=>o("settings"),icon:y.jsx(uo,{className:"w-6 h-6"}),label:"সেটিংস"}),y.jsx(Zs,{active:l==="info",onClick:()=>o("info"),icon:y.jsx(hu,{className:"w-6 h-6"}),label:"তথ্য"})]})})]}),Zs=({active:a,onClick:l,icon:o,label:r})=>y.jsxs("button",{onClick:l,className:`flex flex-col items-center gap-1 transition-all ${a?"text-emerald-600 dark:text-emerald-500":"text-slate-300 dark:text-slate-600"}`,children:[o,y.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider",children:r})]}),Qi=a=>{const l=["০","১","২","৩","৪","৫","৬","৭","৮","৯"];return a.toString().split("").map(o=>{const r=parseInt(o);return isNaN(r)?o:l[r]}).join("")},jx=a=>{const l={অ:"o",আ:"a",ই:"i",ঈ:"i",উ:"u",ঊ:"u",ঋ:"ri",এ:"e",ঐ:"oi",ও:"o",ঔ:"ou","া":"a","ি":"i","ী":"i","ু":"u","ূ":"u","ৃ":"ri","ে":"e","ৈ":"oi","ো":"o","ৌ":"ou",ক:"k",খ:"kh",গ:"g",ঘ:"gh",ঙ:"ng",চ:"ch",ছ:"chh",জ:"j",ঝ:"jh",ঞ:"n",ট:"t",ঠ:"th",ড:"d",ঢ:"dh",ণ:"n",ত:"t",থ:"th",দ:"d",ধ:"dh",ন:"n",প:"p",ফ:"f",ব:"b",ভ:"bh",ম:"m",য:"j",র:"r",ল:"l",শ:"sh",ষ:"sh",স:"s",হ:"h",ড়:"r",ঢ়:"rh",য়:"y","ৎ":"t","্":"","ং":"ng","ঃ":"h","ঁ":"n","০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"};return a.split("").map(o=>l[o]!==void 0?l[o]:o).join("").toLowerCase().replace(/ph/g,"f").replace(/v/g,"bh").replace(/ee/g,"i").replace(/oo/g,"u").replace(/z/g,"j")},mu=({song:a,isFavorite:l,onToggleFavorite:o,onClick:r,showCategory:u=!0})=>{const h=f=>{const m=f.match(/^(.*?)\s*\((.*)\)$/);return m?y.jsxs(y.Fragment,{children:[m[1],y.jsxs("span",{className:"ml-1.5 text-[0.8em] italic font-medium text-slate-500 dark:text-slate-300 font-sans tracking-tight",children:["(",m[2],")"]})]}):f};return y.jsxs("div",{onClick:r,className:"group relative bg-[var(--bg-card)] p-1.5 rounded-xl border border-[var(--border-color)] flex items-center gap-2 cursor-pointer transition-all hover:shadow-xl hover:shadow-emerald-500/5 active:scale-[0.99]",children:[y.jsxs("div",{onClick:o,className:"relative shrink-0 w-10 h-10 bg-emerald-50/50 dark:bg-emerald-700/30 border border-emerald-100/50 dark:border-emerald-600/40 rounded-xl flex items-center justify-center overflow-hidden transition-transform hover:scale-105 active:scale-95 group/heart",title:l?"পছন্দ থেকে সরান":"পছন্দ হিসেবে রাখুন",children:[y.jsx(Aa,{className:`absolute w-7 h-7 transition-all duration-300 ${l?"text-rose-500/20 fill-rose-500/10 scale-125":"text-emerald-200/40 dark:text-emerald-500/20 fill-emerald-100/20 dark:fill-emerald-900/10 scale-100 group-hover/heart:scale-110"}`,strokeWidth:1.5}),y.jsx("span",{className:`relative z-10 font-black font-sans text-base transition-colors duration-300 ${l?"text-rose-600":"text-emerald-700 dark:text-emerald-300"}`,children:Qi(a.id)})]}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("h3",{className:"font-bold text-[var(--text-main)] font-bengali truncate group-hover:text-emerald-600 transition-colors",style:{fontSize:"var(--index-font-size)"},children:h(a.title)}),y.jsxs("div",{className:"flex flex-col gap-1 mt-1",children:[a.composer&&y.jsxs("div",{className:"flex items-center gap-1.5",children:[y.jsx(Yu,{className:"w-3 h-3 text-slate-300 dark:text-slate-400"}),y.jsx("span",{className:"text-[11px] font-medium text-slate-400 dark:text-slate-300 leading-none",children:a.composer})]}),u&&y.jsxs("div",{className:"flex items-center gap-1.5",children:[y.jsx(Ju,{className:"w-3 h-3 text-slate-300 dark:text-slate-400"}),y.jsx("span",{className:"text-[11px] font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest leading-none",children:(a.categories||[]).join(", ")})]})]})]})]})},qu=G.createContext({});function Xu(a){const l=G.useRef(null);return l.current===null&&(l.current=a()),l.current}const Nx=typeof window<"u",np=Nx?G.useLayoutEffect:G.useEffect,To=G.createContext(null);function Pu(a,l){a.indexOf(l)===-1&&a.push(l)}function fo(a,l){const o=a.indexOf(l);o>-1&&a.splice(o,1)}const ti=(a,l,o)=>o>l?l:o<a?a:o;let Qu=()=>{};const Zi={},lp=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);function sp(a){return typeof a=="object"&&a!==null}const op=a=>/^0[^.\s]+$/u.test(a);function rp(a){let l;return()=>(l===void 0&&(l=a()),l)}const Le=a=>a,Dx=(a,l)=>o=>l(a(o)),Nl=(...a)=>a.reduce(Dx),Al=(a,l,o)=>{const r=l-a;return r===0?1:(o-a)/r};class Zu{constructor(){this.subscriptions=[]}add(l){return Pu(this.subscriptions,l),()=>fo(this.subscriptions,l)}notify(l,o,r){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](l,o,r);else for(let h=0;h<u;h++){const f=this.subscriptions[h];f&&f(l,o,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const De=a=>a*1e3,He=a=>a/1e3;function cp(a,l){return l?a*(1e3/l):0}const up=(a,l,o)=>(((1-3*o+3*l)*a+(3*o-6*l))*a+3*l)*a,Cx=1e-7,wx=12;function zx(a,l,o,r,u){let h,f,m=0;do f=l+(o-l)/2,h=up(f,r,u)-a,h>0?o=f:l=f;while(Math.abs(h)>Cx&&++m<wx);return f}function Dl(a,l,o,r){if(a===l&&o===r)return Le;const u=h=>zx(h,0,1,a,o);return h=>h===0||h===1?h:up(u(h),l,r)}const fp=a=>l=>l<=.5?a(2*l)/2:(2-a(2*(1-l)))/2,dp=a=>l=>1-a(1-l),hp=Dl(.33,1.53,.69,.99),Fu=dp(hp),mp=fp(Fu),yp=a=>a>=1?1:(a*=2)<1?.5*Fu(a):.5*(2-Math.pow(2,-10*(a-1))),Wu=a=>1-Math.sin(Math.acos(a)),pp=dp(Wu),gp=fp(Wu),Ox=Dl(.42,0,1,1),Rx=Dl(0,0,.58,1),vp=Dl(.42,0,.58,1),Bx=a=>Array.isArray(a)&&typeof a[0]!="number",bp=a=>Array.isArray(a)&&typeof a[0]=="number",kx={linear:Le,easeIn:Ox,easeInOut:vp,easeOut:Rx,circIn:Wu,circInOut:gp,circOut:pp,backIn:Fu,backInOut:mp,backOut:hp,anticipate:yp},_x=a=>typeof a=="string",By=a=>{if(bp(a)){Qu(a.length===4);const[l,o,r,u]=a;return Dl(l,o,r,u)}else if(_x(a))return kx[a];return a},Fs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Vx(a,l){let o=new Set,r=new Set,u=!1,h=!1;const f=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function v(b){f.has(b)&&(p.schedule(b),a()),b(m)}const p={schedule:(b,x=!1,S=!1)=>{const z=S&&u?o:r;return x&&f.add(b),z.add(b),b},cancel:b=>{r.delete(b),f.delete(b)},process:b=>{if(m=b,u){h=!0;return}u=!0;const x=o;o=r,r=x,o.forEach(v),o.clear(),u=!1,h&&(h=!1,p.process(b))}};return p}const Ux=40;function xp(a,l){let o=!1,r=!0;const u={delta:0,timestamp:0,isProcessing:!1},h=()=>o=!0,f=Fs.reduce((J,_)=>(J[_]=Vx(h),J),{}),{setup:m,read:v,resolveKeyframes:p,preUpdate:b,update:x,preRender:S,render:E,postRender:z}=f,H=()=>{const J=Zi.useManualTiming,_=J?u.timestamp:performance.now();o=!1,J||(u.delta=r?1e3/60:Math.max(Math.min(_-u.timestamp,Ux),1)),u.timestamp=_,u.isProcessing=!0,m.process(u),v.process(u),p.process(u),b.process(u),x.process(u),S.process(u),E.process(u),z.process(u),u.isProcessing=!1,o&&l&&(r=!1,a(H))},U=()=>{o=!0,r=!0,u.isProcessing||a(H)};return{schedule:Fs.reduce((J,_)=>{const q=f[_];return J[_]=(I,Z=!1,F=!1)=>(o||U(),q.schedule(I,Z,F)),J},{}),cancel:J=>{for(let _=0;_<Fs.length;_++)f[Fs[_]].cancel(J)},state:u,steps:f}}const{schedule:Ot,cancel:Fi,state:ne,steps:Wc}=xp(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0);let io;function Hx(){io=void 0}const ce={now:()=>(io===void 0&&ce.set(ne.isProcessing||Zi.useManualTiming?ne.timestamp:performance.now()),io),set:a=>{io=a,queueMicrotask(Hx)}},Sp=a=>l=>typeof l=="string"&&l.startsWith(a),Tp=Sp("--"),Lx=Sp("var(--"),$u=a=>Lx(a)?Kx.test(a.split("/*")[0].trim()):!1,Kx=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ky(a){return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")}const vn={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},Ml={...vn,transform:a=>ti(0,1,a)},Ws={...vn,default:1},bl=a=>Math.round(a*1e5)/1e5,Iu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Gx(a){return a==null}const Jx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,tf=(a,l)=>o=>!!(typeof o=="string"&&Jx.test(o)&&o.startsWith(a)||l&&!Gx(o)&&Object.prototype.hasOwnProperty.call(o,l)),Ap=(a,l,o)=>r=>{if(typeof r!="string")return r;const[u,h,f,m]=r.match(Iu);return{[a]:parseFloat(u),[l]:parseFloat(h),[o]:parseFloat(f),alpha:m!==void 0?parseFloat(m):1}},Yx=a=>ti(0,255,a),$c={...vn,transform:a=>Math.round(Yx(a))},Sa={test:tf("rgb","red"),parse:Ap("red","green","blue"),transform:({red:a,green:l,blue:o,alpha:r=1})=>"rgba("+$c.transform(a)+", "+$c.transform(l)+", "+$c.transform(o)+", "+bl(Ml.transform(r))+")"};function qx(a){let l="",o="",r="",u="";return a.length>5?(l=a.substring(1,3),o=a.substring(3,5),r=a.substring(5,7),u=a.substring(7,9)):(l=a.substring(1,2),o=a.substring(2,3),r=a.substring(3,4),u=a.substring(4,5),l+=l,o+=o,r+=r,u+=u),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(r,16),alpha:u?parseInt(u,16)/255:1}}const yu={test:tf("#"),parse:qx,transform:Sa.transform},Cl=a=>({test:l=>typeof l=="string"&&l.endsWith(a)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${a}`}),qi=Cl("deg"),Ie=Cl("%"),tt=Cl("px"),Xx=Cl("vh"),Px=Cl("vw"),_y={...Ie,parse:a=>Ie.parse(a)/100,transform:a=>Ie.transform(a*100)},dn={test:tf("hsl","hue"),parse:Ap("hue","saturation","lightness"),transform:({hue:a,saturation:l,lightness:o,alpha:r=1})=>"hsla("+Math.round(a)+", "+Ie.transform(bl(l))+", "+Ie.transform(bl(o))+", "+bl(Ml.transform(r))+")"},Pt={test:a=>Sa.test(a)||yu.test(a)||dn.test(a),parse:a=>Sa.test(a)?Sa.parse(a):dn.test(a)?dn.parse(a):yu.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?Sa.transform(a):dn.transform(a),getAnimatableNone:a=>{const l=Pt.parse(a);return l.alpha=0,Pt.transform(l)}},Qx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Zx(a){var l,o;return isNaN(a)&&typeof a=="string"&&(((l=a.match(Iu))==null?void 0:l.length)||0)+(((o=a.match(Qx))==null?void 0:o.length)||0)>0}const Mp="number",Ep="color",Fx="var",Wx="var(",Vy="${}",$x=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function pn(a){const l=a.toString(),o=[],r={color:[],number:[],var:[]},u=[];let h=0;const m=l.replace($x,v=>(Pt.test(v)?(r.color.push(h),u.push(Ep),o.push(Pt.parse(v))):v.startsWith(Wx)?(r.var.push(h),u.push(Fx),o.push(v)):(r.number.push(h),u.push(Mp),o.push(parseFloat(v))),++h,Vy)).split(Vy);return{values:o,split:m,indexes:r,types:u}}function Ix(a){return pn(a).values}function jp({split:a,types:l}){const o=a.length;return r=>{let u="";for(let h=0;h<o;h++)if(u+=a[h],r[h]!==void 0){const f=l[h];f===Mp?u+=bl(r[h]):f===Ep?u+=Pt.transform(r[h]):u+=r[h]}return u}}function t2(a){return jp(pn(a))}const e2=a=>typeof a=="number"?0:Pt.test(a)?Pt.getAnimatableNone(a):a,i2=(a,l)=>typeof a=="number"?l!=null&&l.trim().endsWith("/")?a:0:e2(a);function a2(a){const l=pn(a);return jp(l)(l.values.map((r,u)=>i2(r,l.split[u])))}const Xe={test:Zx,parse:Ix,createTransformer:t2,getAnimatableNone:a2};function Ic(a,l,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?a+(l-a)*6*o:o<1/2?l:o<2/3?a+(l-a)*(2/3-o)*6:a}function n2({hue:a,saturation:l,lightness:o,alpha:r}){a/=360,l/=100,o/=100;let u=0,h=0,f=0;if(!l)u=h=f=o;else{const m=o<.5?o*(1+l):o+l-o*l,v=2*o-m;u=Ic(v,m,a+1/3),h=Ic(v,m,a),f=Ic(v,m,a-1/3)}return{red:Math.round(u*255),green:Math.round(h*255),blue:Math.round(f*255),alpha:r}}function ho(a,l){return o=>o>0?l:a}const kt=(a,l,o)=>a+(l-a)*o,tu=(a,l,o)=>{const r=a*a,u=o*(l*l-r)+r;return u<0?0:Math.sqrt(u)},l2=[yu,Sa,dn],s2=a=>l2.find(l=>l.test(a));function Uy(a){const l=s2(a);if(!l)return!1;let o=l.parse(a);return l===dn&&(o=n2(o)),o}const Hy=(a,l)=>{const o=Uy(a),r=Uy(l);if(!o||!r)return ho(a,l);const u={...o};return h=>(u.red=tu(o.red,r.red,h),u.green=tu(o.green,r.green,h),u.blue=tu(o.blue,r.blue,h),u.alpha=kt(o.alpha,r.alpha,h),Sa.transform(u))},pu=new Set(["none","hidden"]);function o2(a,l){return pu.has(a)?o=>o<=0?a:l:o=>o>=1?l:a}function r2(a,l){return o=>kt(a,l,o)}function ef(a){return typeof a=="number"?r2:typeof a=="string"?$u(a)?ho:Pt.test(a)?Hy:f2:Array.isArray(a)?Np:typeof a=="object"?Pt.test(a)?Hy:c2:ho}function Np(a,l){const o=[...a],r=o.length,u=a.map((h,f)=>ef(h)(h,l[f]));return h=>{for(let f=0;f<r;f++)o[f]=u[f](h);return o}}function c2(a,l){const o={...a,...l},r={};for(const u in o)a[u]!==void 0&&l[u]!==void 0&&(r[u]=ef(a[u])(a[u],l[u]));return u=>{for(const h in r)o[h]=r[h](u);return o}}function u2(a,l){const o=[],r={color:0,var:0,number:0};for(let u=0;u<l.values.length;u++){const h=l.types[u],f=a.indexes[h][r[h]],m=a.values[f]??0;o[u]=m,r[h]++}return o}const f2=(a,l)=>{const o=Xe.createTransformer(l),r=pn(a),u=pn(l);return r.indexes.var.length===u.indexes.var.length&&r.indexes.color.length===u.indexes.color.length&&r.indexes.number.length>=u.indexes.number.length?pu.has(a)&&!u.values.length||pu.has(l)&&!r.values.length?o2(a,l):Nl(Np(u2(r,u),u.values),o):ho(a,l)};function Dp(a,l,o){return typeof a=="number"&&typeof l=="number"&&typeof o=="number"?kt(a,l,o):ef(a)(a,l)}const d2=a=>{const l=({timestamp:o})=>a(o);return{start:(o=!0)=>Ot.update(l,o),stop:()=>Fi(l),now:()=>ne.isProcessing?ne.timestamp:ce.now()}},Cp=(a,l,o=10)=>{let r="";const u=Math.max(Math.round(l/o),2);for(let h=0;h<u;h++)r+=Math.round(a(h/(u-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},mo=2e4;function af(a){let l=0;const o=50;let r=a.next(l);for(;!r.done&&l<mo;)l+=o,r=a.next(l);return l>=mo?1/0:l}function h2(a,l=100,o){const r=o({...a,keyframes:[0,l]}),u=Math.min(af(r),mo);return{type:"keyframes",ease:h=>r.next(u*h).value/l,duration:He(u)}}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function gu(a,l){return a*Math.sqrt(1-l*l)}const m2=12;function y2(a,l,o){let r=o;for(let u=1;u<m2;u++)r=r-a(r)/l(r);return r}const eu=.001;function p2({duration:a=Ht.duration,bounce:l=Ht.bounce,velocity:o=Ht.velocity,mass:r=Ht.mass}){let u,h,f=1-l;f=ti(Ht.minDamping,Ht.maxDamping,f),a=ti(Ht.minDuration,Ht.maxDuration,He(a)),f<1?(u=p=>{const b=p*f,x=b*a,S=b-o,E=gu(p,f),z=Math.exp(-x);return eu-S/E*z},h=p=>{const x=p*f*a,S=x*o+o,E=Math.pow(f,2)*Math.pow(p,2)*a,z=Math.exp(-x),H=gu(Math.pow(p,2),f);return(-u(p)+eu>0?-1:1)*((S-E)*z)/H}):(u=p=>{const b=Math.exp(-p*a),x=(p-o)*a+1;return-eu+b*x},h=p=>{const b=Math.exp(-p*a),x=(o-p)*(a*a);return b*x});const m=5/a,v=y2(u,h,m);if(a=De(a),isNaN(v))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:a};{const p=Math.pow(v,2)*r;return{stiffness:p,damping:f*2*Math.sqrt(r*p),duration:a}}}const g2=["duration","bounce"],v2=["stiffness","damping","mass"];function Ly(a,l){return l.some(o=>a[o]!==void 0)}function b2(a){let l={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...a};if(!Ly(a,v2)&&Ly(a,g2))if(l.velocity=0,a.visualDuration){const o=a.visualDuration,r=2*Math.PI/(o*1.2),u=r*r,h=2*ti(.05,1,1-(a.bounce||0))*Math.sqrt(u);l={...l,mass:Ht.mass,stiffness:u,damping:h}}else{const o=p2({...a,velocity:0});l={...l,...o,mass:Ht.mass},l.isResolvedFromDuration=!0}return l}function yo(a=Ht.visualDuration,l=Ht.bounce){const o=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:l}:a;let{restSpeed:r,restDelta:u}=o;const h=o.keyframes[0],f=o.keyframes[o.keyframes.length-1],m={done:!1,value:h},{stiffness:v,damping:p,mass:b,duration:x,velocity:S,isResolvedFromDuration:E}=b2({...o,velocity:-He(o.velocity||0)}),z=S||0,H=p/(2*Math.sqrt(v*b)),U=f-h,K=He(Math.sqrt(v/b)),Y=Math.abs(U)<5;r||(r=Y?Ht.restSpeed.granular:Ht.restSpeed.default),u||(u=Y?Ht.restDelta.granular:Ht.restDelta.default);let J,_,q,I,Z,F;if(H<1)q=gu(K,H),I=(z+H*K*U)/q,J=W=>{const ht=Math.exp(-H*K*W);return f-ht*(I*Math.sin(q*W)+U*Math.cos(q*W))},Z=H*K*I+U*q,F=H*K*U-I*q,_=W=>Math.exp(-H*K*W)*(Z*Math.sin(q*W)+F*Math.cos(q*W));else if(H===1){J=ht=>f-Math.exp(-K*ht)*(U+(z+K*U)*ht);const W=z+K*U;_=ht=>Math.exp(-K*ht)*(K*W*ht-z)}else{const W=K*Math.sqrt(H*H-1);J=X=>{const at=Math.exp(-H*K*X),N=Math.min(W*X,300);return f-at*((z+H*K*U)*Math.sinh(N)+W*U*Math.cosh(N))/W};const ht=(z+H*K*U)/W,xt=H*K*ht-U*W,Qt=H*K*U-ht*W;_=X=>{const at=Math.exp(-H*K*X),N=Math.min(W*X,300);return at*(xt*Math.sinh(N)+Qt*Math.cosh(N))}}const lt={calculatedDuration:E&&x||null,velocity:W=>De(_(W)),next:W=>{if(!E&&H<1){const xt=Math.exp(-H*K*W),Qt=Math.sin(q*W),X=Math.cos(q*W),at=f-xt*(I*Qt+U*X),N=De(xt*(Z*Qt+F*X));return m.done=Math.abs(N)<=r&&Math.abs(f-at)<=u,m.value=m.done?f:at,m}const ht=J(W);if(E)m.done=W>=x;else{const xt=De(_(W));m.done=Math.abs(xt)<=r&&Math.abs(f-ht)<=u}return m.value=m.done?f:ht,m},toString:()=>{const W=Math.min(af(lt),mo),ht=Cp(xt=>lt.next(W*xt).value,W,30);return W+"ms "+ht},toTransition:()=>{}};return lt}yo.applyToOptions=a=>{const l=h2(a,100,yo);return a.ease=l.ease,a.duration=De(l.duration),a.type="keyframes",a};const x2=5;function wp(a,l,o){const r=Math.max(l-x2,0);return cp(o-a(r),l-r)}function vu({keyframes:a,velocity:l=0,power:o=.8,timeConstant:r=325,bounceDamping:u=10,bounceStiffness:h=500,modifyTarget:f,min:m,max:v,restDelta:p=.5,restSpeed:b}){const x=a[0],S={done:!1,value:x},E=F=>m!==void 0&&F<m||v!==void 0&&F>v,z=F=>m===void 0?v:v===void 0||Math.abs(m-F)<Math.abs(v-F)?m:v;let H=o*l;const U=x+H,K=f===void 0?U:f(U);K!==U&&(H=K-x);const Y=F=>-H*Math.exp(-F/r),J=F=>K+Y(F),_=F=>{const lt=Y(F),W=J(F);S.done=Math.abs(lt)<=p,S.value=S.done?K:W};let q,I;const Z=F=>{E(S.value)&&(q=F,I=yo({keyframes:[S.value,z(S.value)],velocity:wp(J,F,S.value),damping:u,stiffness:h,restDelta:p,restSpeed:b}))};return Z(0),{calculatedDuration:null,next:F=>{let lt=!1;return!I&&q===void 0&&(lt=!0,_(F),Z(F)),q!==void 0&&F>=q?I.next(F-q):(!lt&&_(F),S)}}}function S2(a,l,o){const r=[],u=o||Zi.mix||Dp,h=a.length-1;for(let f=0;f<h;f++){let m=u(a[f],a[f+1]);if(l){const v=Array.isArray(l)?l[f]||Le:l;m=Nl(v,m)}r.push(m)}return r}function T2(a,l,{clamp:o=!0,ease:r,mixer:u}={}){const h=a.length;if(Qu(h===l.length),h===1)return()=>l[0];if(h===2&&l[0]===l[1])return()=>l[1];const f=a[0]===a[1];a[0]>a[h-1]&&(a=[...a].reverse(),l=[...l].reverse());const m=S2(l,r,u),v=m.length,p=b=>{if(f&&b<a[0])return l[0];let x=0;if(v>1)for(;x<a.length-2&&!(b<a[x+1]);x++);const S=Al(a[x],a[x+1],b);return m[x](S)};return o?b=>p(ti(a[0],a[h-1],b)):p}function A2(a,l){const o=a[a.length-1];for(let r=1;r<=l;r++){const u=Al(0,l,r);a.push(kt(o,1,u))}}function M2(a){const l=[0];return A2(l,a.length-1),l}function E2(a,l){return a.map(o=>o*l)}function j2(a,l){return a.map(()=>l||vp).splice(0,a.length-1)}function xl({duration:a=300,keyframes:l,times:o,ease:r="easeInOut"}){const u=Bx(r)?r.map(By):By(r),h={done:!1,value:l[0]},f=E2(o&&o.length===l.length?o:M2(l),a),m=T2(f,l,{ease:Array.isArray(u)?u:j2(l,u)});return{calculatedDuration:a,next:v=>(h.value=m(v),h.done=v>=a,h)}}const N2=a=>a!==null;function Ao(a,{repeat:l,repeatType:o="loop"},r,u=1){const h=a.filter(N2),m=u<0||l&&o!=="loop"&&l%2===1?0:h.length-1;return!m||r===void 0?h[m]:r}const D2={decay:vu,inertia:vu,tween:xl,keyframes:xl,spring:yo};function zp(a){typeof a.type=="string"&&(a.type=D2[a.type])}class nf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(l=>{this.resolve=l})}notifyFinished(){this.resolve()}then(l,o){return this.finished.then(l,o)}}const C2=a=>a/100;class po extends nf{constructor(l){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,u;const{motionValue:o}=this.options;o&&o.updatedAt!==ce.now()&&this.tick(ce.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(u=(r=this.options).onStop)==null||u.call(r))},this.options=l,this.initAnimation(),this.play(),l.autoplay===!1&&this.pause()}initAnimation(){const{options:l}=this;zp(l);const{type:o=xl,repeat:r=0,repeatDelay:u=0,repeatType:h,velocity:f=0}=l;let{keyframes:m}=l;const v=o||xl;v!==xl&&typeof m[0]!="number"&&(this.mixKeyframes=Nl(C2,Dp(m[0],m[1])),m=[0,100]);const p=v({...l,keyframes:m});h==="mirror"&&(this.mirroredGenerator=v({...l,keyframes:[...m].reverse(),velocity:-f})),p.calculatedDuration===null&&(p.calculatedDuration=af(p));const{calculatedDuration:b}=p;this.calculatedDuration=b,this.resolvedDuration=b+u,this.totalDuration=this.resolvedDuration*(r+1)-u,this.generator=p}updateTime(l){const o=Math.round(l-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(l,o=!1){const{generator:r,totalDuration:u,mixKeyframes:h,mirroredGenerator:f,resolvedDuration:m,calculatedDuration:v}=this;if(this.startTime===null)return r.next(0);const{delay:p=0,keyframes:b,repeat:x,repeatType:S,repeatDelay:E,type:z,onUpdate:H,finalKeyframe:U}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,l):this.speed<0&&(this.startTime=Math.min(l-u/this.speed,this.startTime)),o?this.currentTime=l:this.updateTime(l);const K=this.currentTime-p*(this.playbackSpeed>=0?1:-1),Y=this.playbackSpeed>=0?K<0:K>u;this.currentTime=Math.max(K,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let J=this.currentTime,_=r;if(x){const F=Math.min(this.currentTime,u)/m;let lt=Math.floor(F),W=F%1;!W&&F>=1&&(W=1),W===1&&lt--,lt=Math.min(lt,x+1),!!(lt%2)&&(S==="reverse"?(W=1-W,E&&(W-=E/m)):S==="mirror"&&(_=f)),J=ti(0,1,W)*m}let q;Y?(this.delayState.value=b[0],q=this.delayState):q=_.next(J),h&&!Y&&(q.value=h(q.value));let{done:I}=q;!Y&&v!==null&&(I=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const Z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return Z&&z!==vu&&(q.value=Ao(b,this.options,U,this.speed)),H&&H(q.value),Z&&this.finish(),q}then(l,o){return this.finished.then(l,o)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+He(l)}get time(){return He(this.currentTime)}set time(l){l=De(l),this.currentTime=l,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=l:this.driver&&(this.startTime=this.driver.now()-l/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=l,this.tick(l))}getGeneratorVelocity(){const l=this.currentTime;if(l<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(l);const o=this.generator.next(l).value;return wp(r=>this.generator.next(r).value,l,o)}get speed(){return this.playbackSpeed}set speed(l){const o=this.playbackSpeed!==l;o&&this.driver&&this.updateTime(ce.now()),this.playbackSpeed=l,o&&this.driver&&(this.time=He(this.currentTime))}play(){var u,h;if(this.isStopped)return;const{driver:l=d2,startTime:o}=this.options;this.driver||(this.driver=l(f=>this.tick(f))),(h=(u=this.options).onPlay)==null||h.call(u);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=o??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ce.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var l,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(l=this.options).onComplete)==null||o.call(l)}cancel(){var l,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(l=this.options).onCancel)==null||o.call(l)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(l){return this.startTime=0,this.tick(l,!0)}attachTimeline(l){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),l.observe(this)}}function w2(a){for(let l=1;l<a.length;l++)a[l]??(a[l]=a[l-1])}const Ta=a=>a*180/Math.PI,bu=a=>{const l=Ta(Math.atan2(a[1],a[0]));return xu(l)},z2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:bu,rotateZ:bu,skewX:a=>Ta(Math.atan(a[1])),skewY:a=>Ta(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2},xu=a=>(a=a%360,a<0&&(a+=360),a),Ky=bu,Gy=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),Jy=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),O2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Gy,scaleY:Jy,scale:a=>(Gy(a)+Jy(a))/2,rotateX:a=>xu(Ta(Math.atan2(a[6],a[5]))),rotateY:a=>xu(Ta(Math.atan2(-a[2],a[0]))),rotateZ:Ky,rotate:Ky,skewX:a=>Ta(Math.atan(a[4])),skewY:a=>Ta(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2};function Su(a){return a.includes("scale")?1:0}function Tu(a,l){if(!a||a==="none")return Su(l);const o=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,u;if(o)r=O2,u=o;else{const m=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=z2,u=m}if(!u)return Su(l);const h=r[l],f=u[1].split(",").map(B2);return typeof h=="function"?h(f):f[h]}const R2=(a,l)=>{const{transform:o="none"}=getComputedStyle(a);return Tu(o,l)};function B2(a){return parseFloat(a.trim())}const bn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xn=new Set(bn),Yy=a=>a===vn||a===tt,k2=new Set(["x","y","z"]),_2=bn.filter(a=>!k2.has(a));function V2(a){const l=[];return _2.forEach(o=>{const r=a.getValue(o);r!==void 0&&(l.push([o,r.get()]),r.set(o.startsWith("scale")?1:0))}),l}const Pi={width:({x:a},{paddingLeft:l="0",paddingRight:o="0",boxSizing:r})=>{const u=a.max-a.min;return r==="border-box"?u:u-parseFloat(l)-parseFloat(o)},height:({y:a},{paddingTop:l="0",paddingBottom:o="0",boxSizing:r})=>{const u=a.max-a.min;return r==="border-box"?u:u-parseFloat(l)-parseFloat(o)},top:(a,{top:l})=>parseFloat(l),left:(a,{left:l})=>parseFloat(l),bottom:({y:a},{top:l})=>parseFloat(l)+(a.max-a.min),right:({x:a},{left:l})=>parseFloat(l)+(a.max-a.min),x:(a,{transform:l})=>Tu(l,"x"),y:(a,{transform:l})=>Tu(l,"y")};Pi.translateX=Pi.x;Pi.translateY=Pi.y;const Ma=new Set;let Au=!1,Mu=!1,Eu=!1;function Op(){if(Mu){const a=Array.from(Ma).filter(r=>r.needsMeasurement),l=new Set(a.map(r=>r.element)),o=new Map;l.forEach(r=>{const u=V2(r);u.length&&(o.set(r,u),r.render())}),a.forEach(r=>r.measureInitialState()),l.forEach(r=>{r.render();const u=o.get(r);u&&u.forEach(([h,f])=>{var m;(m=r.getValue(h))==null||m.set(f)})}),a.forEach(r=>r.measureEndState()),a.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Mu=!1,Au=!1,Ma.forEach(a=>a.complete(Eu)),Ma.clear()}function Rp(){Ma.forEach(a=>{a.readKeyframes(),a.needsMeasurement&&(Mu=!0)})}function U2(){Eu=!0,Rp(),Op(),Eu=!1}class lf{constructor(l,o,r,u,h,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...l],this.onComplete=o,this.name=r,this.motionValue=u,this.element=h,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(Ma.add(this),Au||(Au=!0,Ot.read(Rp),Ot.resolveKeyframes(Op))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:l,name:o,element:r,motionValue:u}=this;if(l[0]===null){const h=u==null?void 0:u.get(),f=l[l.length-1];if(h!==void 0)l[0]=h;else if(r&&o){const m=r.readValue(o,f);m!=null&&(l[0]=m)}l[0]===void 0&&(l[0]=f),u&&h===void 0&&u.set(l[0])}w2(l)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(l=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,l),Ma.delete(this)}cancel(){this.state==="scheduled"&&(Ma.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const H2=a=>a.startsWith("--");function Bp(a,l,o){H2(l)?a.style.setProperty(l,o):a.style[l]=o}const L2={};function kp(a,l){const o=rp(a);return()=>L2[l]??o()}const K2=kp(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),_p=kp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),vl=([a,l,o,r])=>`cubic-bezier(${a}, ${l}, ${o}, ${r})`,qy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:vl([0,.65,.55,1]),circOut:vl([.55,0,1,.45]),backIn:vl([.31,.01,.66,-.59]),backOut:vl([.33,1.53,.69,.99])};function Vp(a,l){if(a)return typeof a=="function"?_p()?Cp(a,l):"ease-out":bp(a)?vl(a):Array.isArray(a)?a.map(o=>Vp(o,l)||qy.easeOut):qy[a]}function G2(a,l,o,{delay:r=0,duration:u=300,repeat:h=0,repeatType:f="loop",ease:m="easeOut",times:v}={},p=void 0){const b={[l]:o};v&&(b.offset=v);const x=Vp(m,u);Array.isArray(x)&&(b.easing=x);const S={delay:r,duration:u,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:h+1,direction:f==="reverse"?"alternate":"normal"};return p&&(S.pseudoElement=p),a.animate(b,S)}function Up(a){return typeof a=="function"&&"applyToOptions"in a}function J2({type:a,...l}){return Up(a)&&_p()?a.applyToOptions(l):(l.duration??(l.duration=300),l.ease??(l.ease="easeOut"),l)}class Hp extends nf{constructor(l){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!l)return;const{element:o,name:r,keyframes:u,pseudoElement:h,allowFlatten:f=!1,finalKeyframe:m,onComplete:v}=l;this.isPseudoElement=!!h,this.allowFlatten=f,this.options=l,Qu(typeof l.type!="string");const p=J2(l);this.animation=G2(o,r,u,p,h),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!h){const b=Ao(u,this.options,m,this.speed);this.updateMotionValue&&this.updateMotionValue(b),Bp(o,r,b),this.animation.cancel()}v==null||v(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var l,o;(o=(l=this.animation).finish)==null||o.call(l)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:l}=this;l==="idle"||l==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,r,u;const l=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(l!=null&&l.isConnected)&&((u=(r=this.animation).commitStyles)==null||u.call(r))}get duration(){var o,r;const l=((r=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:r.call(o).duration)||0;return He(Number(l))}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+He(l)}get time(){return He(Number(this.animation.currentTime)||0)}set time(l){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=De(l),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(l){l<0&&(this.finishedTime=null),this.animation.playbackRate=l}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(l){this.manualStartTime=this.animation.startTime=l}attachTimeline({timeline:l,rangeStart:o,rangeEnd:r,observe:u}){var h;return this.allowFlatten&&((h=this.animation.effect)==null||h.updateTiming({easing:"linear"})),this.animation.onfinish=null,l&&K2()?(this.animation.timeline=l,o&&(this.animation.rangeStart=o),r&&(this.animation.rangeEnd=r),Le):u(this)}}const Lp={anticipate:yp,backInOut:mp,circInOut:gp};function Y2(a){return a in Lp}function q2(a){typeof a.ease=="string"&&Y2(a.ease)&&(a.ease=Lp[a.ease])}const iu=10;class X2 extends Hp{constructor(l){q2(l),zp(l),super(l),l.startTime!==void 0&&l.autoplay!==!1&&(this.startTime=l.startTime),this.options=l}updateMotionValue(l){const{motionValue:o,onUpdate:r,onComplete:u,element:h,...f}=this.options;if(!o)return;if(l!==void 0){o.set(l);return}const m=new po({...f,autoplay:!1}),v=Math.max(iu,ce.now()-this.startTime),p=ti(0,iu,v-iu),b=m.sample(v).value,{name:x}=this.options;h&&x&&Bp(h,x,b),o.setWithVelocity(m.sample(Math.max(0,v-p)).value,b,p),m.stop()}}const Xy=(a,l)=>l==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Xe.test(a)||a==="0")&&!a.startsWith("url("));function P2(a){const l=a[0];if(a.length===1)return!0;for(let o=0;o<a.length;o++)if(a[o]!==l)return!0}function Q2(a,l,o,r){const u=a[0];if(u===null)return!1;if(l==="display"||l==="visibility")return!0;const h=a[a.length-1],f=Xy(u,l),m=Xy(h,l);return!f||!m?!1:P2(a)||(o==="spring"||Up(o))&&r}function ju(a){a.duration=0,a.type="keyframes"}const Kp=new Set(["opacity","clipPath","filter","transform"]),Z2=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function F2(a){for(let l=0;l<a.length;l++)if(typeof a[l]=="string"&&Z2.test(a[l]))return!0;return!1}const W2=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),$2=rp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function I2(a){var x;const{motionValue:l,name:o,repeatDelay:r,repeatType:u,damping:h,type:f,keyframes:m}=a;if(!(((x=l==null?void 0:l.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:b}=l.owner.getProps();return $2()&&o&&(Kp.has(o)||W2.has(o)&&F2(m))&&(o!=="transform"||!b)&&!p&&!r&&u!=="mirror"&&h!==0&&f!=="inertia"}const tS=40;class eS extends nf{constructor({autoplay:l=!0,delay:o=0,type:r="keyframes",repeat:u=0,repeatDelay:h=0,repeatType:f="loop",keyframes:m,name:v,motionValue:p,element:b,...x}){var z;super(),this.stop=()=>{var H,U;this._animation&&(this._animation.stop(),(H=this.stopTimeline)==null||H.call(this)),(U=this.keyframeResolver)==null||U.cancel()},this.createdAt=ce.now();const S={autoplay:l,delay:o,type:r,repeat:u,repeatDelay:h,repeatType:f,name:v,motionValue:p,element:b,...x},E=(b==null?void 0:b.KeyframeResolver)||lf;this.keyframeResolver=new E(m,(H,U,K)=>this.onKeyframesResolved(H,U,S,!K),v,p,b),(z=this.keyframeResolver)==null||z.scheduleResolve()}onKeyframesResolved(l,o,r,u){var K,Y;this.keyframeResolver=void 0;const{name:h,type:f,velocity:m,delay:v,isHandoff:p,onUpdate:b}=r;this.resolvedAt=ce.now();let x=!0;Q2(l,h,f,m)||(x=!1,(Zi.instantAnimations||!v)&&(b==null||b(Ao(l,r,o))),l[0]=l[l.length-1],ju(r),r.repeat=0);const E={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>tS?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...r,keyframes:l},z=x&&!p&&I2(E),H=(Y=(K=E.motionValue)==null?void 0:K.owner)==null?void 0:Y.current;let U;if(z)try{U=new X2({...E,element:H})}catch{U=new po(E)}else U=new po(E);U.finished.then(()=>{this.notifyFinished()}).catch(Le),this.pendingTimeline&&(this.stopTimeline=U.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=U}get finished(){return this._animation?this.animation.finished:this._finished}then(l,o){return this.finished.finally(l).then(()=>{})}get animation(){var l;return this._animation||((l=this.keyframeResolver)==null||l.resume(),U2()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(l){this.animation.time=l}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(l){this.animation.speed=l}get startTime(){return this.animation.startTime}attachTimeline(l){return this._animation?this.stopTimeline=this.animation.attachTimeline(l):this.pendingTimeline=l,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var l;this._animation&&this.animation.cancel(),(l=this.keyframeResolver)==null||l.cancel()}}function Gp(a,l,o,r=0,u=1){const h=Array.from(a).sort((p,b)=>p.sortNodePosition(b)).indexOf(l),f=a.size,m=(f-1)*r;return typeof o=="function"?o(h,f):u===1?h*r:m-h*r}const iS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function aS(a){const l=iS.exec(a);if(!l)return[,];const[,o,r,u]=l;return[`--${o??r}`,u]}function Jp(a,l,o=1){const[r,u]=aS(a);if(!r)return;const h=window.getComputedStyle(l).getPropertyValue(r);if(h){const f=h.trim();return lp(f)?parseFloat(f):f}return $u(u)?Jp(u,l,o+1):u}const nS={type:"spring",stiffness:500,damping:25,restSpeed:10},lS=a=>({type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10}),sS={type:"keyframes",duration:.8},oS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rS=(a,{keyframes:l})=>l.length>2?sS:xn.has(a)?a.startsWith("scale")?lS(l[1]):nS:oS;function Yp(a,l){if(a!=null&&a.inherit&&l){const{inherit:o,...r}=a;return{...l,...r}}return a}function sf(a,l){const o=(a==null?void 0:a[l])??(a==null?void 0:a.default)??a;return o!==a?Yp(o,a):o}const cS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function uS(a){for(const l in a)if(!cS.has(l))return!0;return!1}const of=(a,l,o,r={},u,h)=>f=>{const m=sf(r,a)||{},v=m.delay||r.delay||0;let{elapsed:p=0}=r;p=p-De(v);const b={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:l.getVelocity(),...m,delay:-p,onUpdate:S=>{l.set(S),m.onUpdate&&m.onUpdate(S)},onComplete:()=>{f(),m.onComplete&&m.onComplete()},name:a,motionValue:l,element:h?void 0:u};uS(m)||Object.assign(b,rS(a,b)),b.duration&&(b.duration=De(b.duration)),b.repeatDelay&&(b.repeatDelay=De(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let x=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(ju(b),b.delay===0&&(x=!0)),(Zi.instantAnimations||Zi.skipAnimations||u!=null&&u.shouldSkipAnimations)&&(x=!0,ju(b),b.delay=0),b.allowFlatten=!m.type&&!m.ease,x&&!h&&l.get()!==void 0){const S=Ao(b.keyframes,m);if(S!==void 0){Ot.update(()=>{b.onUpdate(S),b.onComplete()});return}}return m.isSync?new po(b):new eS(b)};function Py(a){const l=[{},{}];return a==null||a.values.forEach((o,r)=>{l[0][r]=o.get(),l[1][r]=o.getVelocity()}),l}function rf(a,l,o,r){if(typeof l=="function"){const[u,h]=Py(r);l=l(o!==void 0?o:a.custom,u,h)}if(typeof l=="string"&&(l=a.variants&&a.variants[l]),typeof l=="function"){const[u,h]=Py(r);l=l(o!==void 0?o:a.custom,u,h)}return l}function Ea(a,l,o){const r=a.getProps();return rf(r,l,o!==void 0?o:r.custom,a)}const qp=new Set(["width","height","top","left","right","bottom",...bn]),Qy=30,fS=a=>!isNaN(parseFloat(a));class dS{constructor(l,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var h;const u=ce.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((h=this.events.change)==null||h.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(l),this.owner=o.owner}setCurrent(l){this.current=l,this.updatedAt=ce.now(),this.canTrackVelocity===null&&l!==void 0&&(this.canTrackVelocity=fS(this.current))}setPrevFrameValue(l=this.current){this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt}onChange(l){return this.on("change",l)}on(l,o){this.events[l]||(this.events[l]=new Zu);const r=this.events[l].add(o);return l==="change"?()=>{r(),Ot.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const l in this.events)this.events[l].clear()}attach(l,o){this.passiveEffect=l,this.stopPassiveEffect=o}set(l){this.passiveEffect?this.passiveEffect(l,this.updateAndNotify):this.updateAndNotify(l)}setWithVelocity(l,o,r){this.set(o),this.prev=void 0,this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt-r}jump(l,o=!0){this.updateAndNotify(l),this.prev=l,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var l;(l=this.events.change)==null||l.notify(this.current)}addDependent(l){this.dependents||(this.dependents=new Set),this.dependents.add(l)}removeDependent(l){this.dependents&&this.dependents.delete(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const l=ce.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||l-this.updatedAt>Qy)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Qy);return cp(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(l){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=l(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var l,o;(l=this.dependents)==null||l.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gn(a,l){return new dS(a,l)}const Nu=a=>Array.isArray(a);function hS(a,l,o){a.hasValue(l)?a.getValue(l).set(o):a.addValue(l,gn(o))}function mS(a){return Nu(a)?a[a.length-1]||0:a}function yS(a,l){const o=Ea(a,l);let{transitionEnd:r={},transition:u={},...h}=o||{};h={...h,...r};for(const f in h){const m=mS(h[f]);hS(a,f,m)}}const le=a=>!!(a&&a.getVelocity);function pS(a){return!!(le(a)&&a.add)}function Du(a,l){const o=a.getValue("willChange");if(pS(o))return o.add(l);if(!o&&Zi.WillChange){const r=new Zi.WillChange("auto");a.addValue("willChange",r),r.add(l)}}function cf(a){return a.replace(/([A-Z])/g,l=>`-${l.toLowerCase()}`)}const gS="framerAppearId",Xp="data-"+cf(gS);function Pp(a){return a.props[Xp]}function vS({protectedKeys:a,needsAnimating:l},o){const r=a.hasOwnProperty(o)&&l[o]!==!0;return l[o]=!1,r}function Qp(a,l,{delay:o=0,transitionOverride:r,type:u}={}){let{transition:h,transitionEnd:f,...m}=l;const v=a.getDefaultTransition();h=h?Yp(h,v):v;const p=h==null?void 0:h.reduceMotion;r&&(h=r);const b=[],x=u&&a.animationState&&a.animationState.getState()[u];for(const S in m){const E=a.getValue(S,a.latestValues[S]??null),z=m[S];if(z===void 0||x&&vS(x,S))continue;const H={delay:o,...sf(h||{},S)},U=E.get();if(U!==void 0&&!E.isAnimating()&&!Array.isArray(z)&&z===U&&!H.velocity){Ot.update(()=>E.set(z));continue}let K=!1;if(window.MotionHandoffAnimation){const _=Pp(a);if(_){const q=window.MotionHandoffAnimation(_,S,Ot);q!==null&&(H.startTime=q,K=!0)}}Du(a,S);const Y=p??a.shouldReduceMotion;E.start(of(S,E,z,Y&&qp.has(S)?{type:!1}:H,a,K));const J=E.animation;J&&b.push(J)}if(f){const S=()=>Ot.update(()=>{f&&yS(a,f)});b.length?Promise.all(b).then(S):S()}return b}function Cu(a,l,o={}){var v;const r=Ea(a,l,o.type==="exit"?(v=a.presenceContext)==null?void 0:v.custom:void 0);let{transition:u=a.getDefaultTransition()||{}}=r||{};o.transitionOverride&&(u=o.transitionOverride);const h=r?()=>Promise.all(Qp(a,r,o)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{const{delayChildren:b=0,staggerChildren:x,staggerDirection:S}=u;return bS(a,l,p,b,x,S,o)}:()=>Promise.resolve(),{when:m}=u;if(m){const[p,b]=m==="beforeChildren"?[h,f]:[f,h];return p().then(()=>b())}else return Promise.all([h(),f(o.delay)])}function bS(a,l,o=0,r=0,u=0,h=1,f){const m=[];for(const v of a.variantChildren)v.notify("AnimationStart",l),m.push(Cu(v,l,{...f,delay:o+(typeof r=="function"?0:r)+Gp(a.variantChildren,v,r,u,h)}).then(()=>v.notify("AnimationComplete",l)));return Promise.all(m)}function xS(a,l,o={}){a.notify("AnimationStart",l);let r;if(Array.isArray(l)){const u=l.map(h=>Cu(a,h,o));r=Promise.all(u)}else if(typeof l=="string")r=Cu(a,l,o);else{const u=typeof l=="function"?Ea(a,l,o.custom):l;r=Promise.all(Qp(a,u,o))}return r.then(()=>{a.notify("AnimationComplete",l)})}const SS={test:a=>a==="auto",parse:a=>a},Zp=a=>l=>l.test(a),Fp=[vn,tt,Ie,qi,Px,Xx,SS],Zy=a=>Fp.find(Zp(a));function TS(a){return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||op(a):!0}const AS=new Set(["brightness","contrast","saturate","opacity"]);function MS(a){const[l,o]=a.slice(0,-1).split("(");if(l==="drop-shadow")return a;const[r]=o.match(Iu)||[];if(!r)return a;const u=o.replace(r,"");let h=AS.has(l)?1:0;return r!==o&&(h*=100),l+"("+h+u+")"}const ES=/\b([a-z-]*)\(.*?\)/gu,wu={...Xe,getAnimatableNone:a=>{const l=a.match(ES);return l?l.map(MS).join(" "):a}},zu={...Xe,getAnimatableNone:a=>{const l=Xe.parse(a);return Xe.createTransformer(a)(l.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Fy={...vn,transform:Math.round},jS={rotate:qi,rotateX:qi,rotateY:qi,rotateZ:qi,scale:Ws,scaleX:Ws,scaleY:Ws,scaleZ:Ws,skew:qi,skewX:qi,skewY:qi,distance:tt,translateX:tt,translateY:tt,translateZ:tt,x:tt,y:tt,z:tt,perspective:tt,transformPerspective:tt,opacity:Ml,originX:_y,originY:_y,originZ:tt},uf={borderWidth:tt,borderTopWidth:tt,borderRightWidth:tt,borderBottomWidth:tt,borderLeftWidth:tt,borderRadius:tt,borderTopLeftRadius:tt,borderTopRightRadius:tt,borderBottomRightRadius:tt,borderBottomLeftRadius:tt,width:tt,maxWidth:tt,height:tt,maxHeight:tt,top:tt,right:tt,bottom:tt,left:tt,inset:tt,insetBlock:tt,insetBlockStart:tt,insetBlockEnd:tt,insetInline:tt,insetInlineStart:tt,insetInlineEnd:tt,padding:tt,paddingTop:tt,paddingRight:tt,paddingBottom:tt,paddingLeft:tt,paddingBlock:tt,paddingBlockStart:tt,paddingBlockEnd:tt,paddingInline:tt,paddingInlineStart:tt,paddingInlineEnd:tt,margin:tt,marginTop:tt,marginRight:tt,marginBottom:tt,marginLeft:tt,marginBlock:tt,marginBlockStart:tt,marginBlockEnd:tt,marginInline:tt,marginInlineStart:tt,marginInlineEnd:tt,fontSize:tt,backgroundPositionX:tt,backgroundPositionY:tt,...jS,zIndex:Fy,fillOpacity:Ml,strokeOpacity:Ml,numOctaves:Fy},NS={...uf,color:Pt,backgroundColor:Pt,outlineColor:Pt,fill:Pt,stroke:Pt,borderColor:Pt,borderTopColor:Pt,borderRightColor:Pt,borderBottomColor:Pt,borderLeftColor:Pt,filter:wu,WebkitFilter:wu,mask:zu,WebkitMask:zu},Wp=a=>NS[a],DS=new Set([wu,zu]);function $p(a,l){let o=Wp(a);return DS.has(o)||(o=Xe),o.getAnimatableNone?o.getAnimatableNone(l):void 0}const CS=new Set(["auto","none","0"]);function wS(a,l,o){let r=0,u;for(;r<a.length&&!u;){const h=a[r];typeof h=="string"&&!CS.has(h)&&pn(h).values.length&&(u=a[r]),r++}if(u&&o)for(const h of l)a[h]=$p(o,u)}class zS extends lf{constructor(l,o,r,u,h){super(l,o,r,u,h,!0)}readKeyframes(){const{unresolvedKeyframes:l,element:o,name:r}=this;if(!o||!o.current)return;super.readKeyframes();for(let b=0;b<l.length;b++){let x=l[b];if(typeof x=="string"&&(x=x.trim(),$u(x))){const S=Jp(x,o.current);S!==void 0&&(l[b]=S),b===l.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!qp.has(r)||l.length!==2)return;const[u,h]=l,f=Zy(u),m=Zy(h),v=ky(u),p=ky(h);if(v!==p&&Pi[r]){this.needsMeasurement=!0;return}if(f!==m)if(Yy(f)&&Yy(m))for(let b=0;b<l.length;b++){const x=l[b];typeof x=="string"&&(l[b]=parseFloat(x))}else Pi[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:l,name:o}=this,r=[];for(let u=0;u<l.length;u++)(l[u]===null||TS(l[u]))&&r.push(u);r.length&&wS(l,r,o)}measureInitialState(){const{element:l,unresolvedKeyframes:o,name:r}=this;if(!l||!l.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Pi[r](l.measureViewportBox(),window.getComputedStyle(l.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&l.getValue(r,u).jump(u,!1)}measureEndState(){var m;const{element:l,name:o,unresolvedKeyframes:r}=this;if(!l||!l.current)return;const u=l.getValue(o);u&&u.jump(this.measuredOrigin,!1);const h=r.length-1,f=r[h];r[h]=Pi[o](l.measureViewportBox(),window.getComputedStyle(l.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(m=this.removedTransforms)!=null&&m.length&&this.removedTransforms.forEach(([v,p])=>{l.getValue(v).set(p)}),this.resolveNoneKeyframes()}}function Ip(a,l,o){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){let r=document;const u=(o==null?void 0:o[a])??r.querySelectorAll(a);return u?Array.from(u):[]}return Array.from(a).filter(r=>r!=null)}const tg=(a,l)=>l&&typeof a=="number"?l.transform(a):a;function ao(a){return sp(a)&&"offsetHeight"in a&&!("ownerSVGElement"in a)}const{schedule:ff}=xp(queueMicrotask,!1),qe={x:!1,y:!1};function eg(){return qe.x||qe.y}function OS(a){return a==="x"||a==="y"?qe[a]?null:(qe[a]=!0,()=>{qe[a]=!1}):qe.x||qe.y?null:(qe.x=qe.y=!0,()=>{qe.x=qe.y=!1})}function ig(a,l){const o=Ip(a),r=new AbortController,u={passive:!0,...l,signal:r.signal};return[o,u,()=>r.abort()]}function RS(a){return!(a.pointerType==="touch"||eg())}function BS(a,l,o={}){const[r,u,h]=ig(a,o);return r.forEach(f=>{let m=!1,v=!1,p;const b=()=>{f.removeEventListener("pointerleave",z)},x=U=>{p&&(p(U),p=void 0),b()},S=U=>{m=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),v&&(v=!1,x(U))},E=()=>{m=!0,window.addEventListener("pointerup",S,u),window.addEventListener("pointercancel",S,u)},z=U=>{if(U.pointerType!=="touch"){if(m){v=!0;return}x(U)}},H=U=>{if(!RS(U))return;v=!1;const K=l(f,U);typeof K=="function"&&(p=K,f.addEventListener("pointerleave",z,u))};f.addEventListener("pointerenter",H,u),f.addEventListener("pointerdown",E,u)}),h}const ag=(a,l)=>l?a===l?!0:ag(a,l.parentElement):!1,df=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,kS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function _S(a){return kS.has(a.tagName)||a.isContentEditable===!0}const VS=new Set(["INPUT","SELECT","TEXTAREA"]);function US(a){return VS.has(a.tagName)||a.isContentEditable===!0}const no=new WeakSet;function Wy(a){return l=>{l.key==="Enter"&&a(l)}}function au(a,l){a.dispatchEvent(new PointerEvent("pointer"+l,{isPrimary:!0,bubbles:!0}))}const HS=(a,l)=>{const o=a.currentTarget;if(!o)return;const r=Wy(()=>{if(no.has(o))return;au(o,"down");const u=Wy(()=>{au(o,"up")}),h=()=>au(o,"cancel");o.addEventListener("keyup",u,l),o.addEventListener("blur",h,l)});o.addEventListener("keydown",r,l),o.addEventListener("blur",()=>o.removeEventListener("keydown",r),l)};function $y(a){return df(a)&&!eg()}const Iy=new WeakSet;function LS(a,l,o={}){const[r,u,h]=ig(a,o),f=m=>{const v=m.currentTarget;if(!$y(m)||Iy.has(m))return;no.add(v),o.stopPropagation&&Iy.add(m);const p=l(v,m),b=(E,z)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),no.has(v)&&no.delete(v),$y(E)&&typeof p=="function"&&p(E,{success:z})},x=E=>{b(E,v===window||v===document||o.useGlobalTarget||ag(v,E.target))},S=E=>{b(E,!1)};window.addEventListener("pointerup",x,u),window.addEventListener("pointercancel",S,u)};return r.forEach(m=>{(o.useGlobalTarget?window:m).addEventListener("pointerdown",f,u),ao(m)&&(m.addEventListener("focus",p=>HS(p,u)),!_S(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),h}function hf(a){return sp(a)&&"ownerSVGElement"in a}const lo=new WeakMap;let Xi;const ng=(a,l,o)=>(r,u)=>u&&u[0]?u[0][a+"Size"]:hf(r)&&"getBBox"in r?r.getBBox()[l]:r[o],KS=ng("inline","width","offsetWidth"),GS=ng("block","height","offsetHeight");function JS({target:a,borderBoxSize:l}){var o;(o=lo.get(a))==null||o.forEach(r=>{r(a,{get width(){return KS(a,l)},get height(){return GS(a,l)}})})}function YS(a){a.forEach(JS)}function qS(){typeof ResizeObserver>"u"||(Xi=new ResizeObserver(YS))}function XS(a,l){Xi||qS();const o=Ip(a);return o.forEach(r=>{let u=lo.get(r);u||(u=new Set,lo.set(r,u)),u.add(l),Xi==null||Xi.observe(r)}),()=>{o.forEach(r=>{const u=lo.get(r);u==null||u.delete(l),u!=null&&u.size||Xi==null||Xi.unobserve(r)})}}const so=new Set;let hn;function PS(){hn=()=>{const a={get width(){return window.innerWidth},get height(){return window.innerHeight}};so.forEach(l=>l(a))},window.addEventListener("resize",hn)}function QS(a){return so.add(a),hn||PS(),()=>{so.delete(a),!so.size&&typeof hn=="function"&&(window.removeEventListener("resize",hn),hn=void 0)}}function t0(a,l){return typeof a=="function"?QS(a):XS(a,l)}function ZS(a){return hf(a)&&a.tagName==="svg"}const FS=[...Fp,Pt,Xe],WS=a=>FS.find(Zp(a)),e0=()=>({translate:0,scale:1,origin:0,originPoint:0}),mn=()=>({x:e0(),y:e0()}),i0=()=>({min:0,max:0}),Ft=()=>({x:i0(),y:i0()}),$S=new WeakMap;function Mo(a){return a!==null&&typeof a=="object"&&typeof a.start=="function"}function El(a){return typeof a=="string"||Array.isArray(a)}const mf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yf=["initial",...mf];function Eo(a){return Mo(a.animate)||yf.some(l=>El(a[l]))}function lg(a){return!!(Eo(a)||a.variants)}function IS(a,l,o){for(const r in l){const u=l[r],h=o[r];if(le(u))a.addValue(r,u);else if(le(h))a.addValue(r,gn(u,{owner:a}));else if(h!==u)if(a.hasValue(r)){const f=a.getValue(r);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=a.getStaticValue(r);a.addValue(r,gn(f!==void 0?f:u,{owner:a}))}}for(const r in o)l[r]===void 0&&a.removeValue(r);return l}const Ou={current:null},sg={current:!1},tT=typeof window<"u";function eT(){if(sg.current=!0,!!tT)if(window.matchMedia){const a=window.matchMedia("(prefers-reduced-motion)"),l=()=>Ou.current=a.matches;a.addEventListener("change",l),l()}else Ou.current=!1}const a0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let go={};function og(a){go=a}function iT(){return go}class aT{scrapeMotionValuesFromProps(l,o,r){return{}}constructor({parent:l,props:o,presenceContext:r,reducedMotionConfig:u,skipAnimations:h,blockInitialAnimation:f,visualState:m},v={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=lf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const E=ce.now();this.renderScheduledAt<E&&(this.renderScheduledAt=E,Ot.render(this.render,!1,!0))};const{latestValues:p,renderState:b}=m;this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=b,this.parent=l,this.props=o,this.presenceContext=r,this.depth=l?l.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=h,this.options=v,this.blockInitialAnimation=!!f,this.isControllingVariants=Eo(o),this.isVariantNode=lg(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(l&&l.current);const{willChange:x,...S}=this.scrapeMotionValuesFromProps(o,{},this);for(const E in S){const z=S[E];p[E]!==void 0&&le(z)&&z.set(p[E])}}mount(l){var o,r;if(this.hasBeenMounted)for(const u in this.initialValues)(o=this.values.get(u))==null||o.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=l,$S.set(l,this),this.projection&&!this.projection.instance&&this.projection.mount(l),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,h)=>this.bindToMotionValue(h,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(sg.current||eT(),this.shouldReduceMotion=Ou.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var l;this.projection&&this.projection.unmount(),Fi(this.notifyUpdate),Fi(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(l=this.parent)==null||l.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const r=this.features[o];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(l){this.children.add(l),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(l)}removeChild(l){this.children.delete(l),this.enteringChildren&&this.enteringChildren.delete(l)}bindToMotionValue(l,o){if(this.valueSubscriptions.has(l)&&this.valueSubscriptions.get(l)(),o.accelerate&&Kp.has(l)&&this.current instanceof HTMLElement){const{factory:f,keyframes:m,times:v,ease:p,duration:b}=o.accelerate,x=new Hp({element:this.current,name:l,keyframes:m,times:v,ease:p,duration:De(b)}),S=f(x);this.valueSubscriptions.set(l,()=>{S(),x.cancel()});return}const r=xn.has(l);r&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",f=>{this.latestValues[l]=f,this.props.onUpdate&&Ot.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let h;typeof window<"u"&&window.MotionCheckAppearSync&&(h=window.MotionCheckAppearSync(this,l,o)),this.valueSubscriptions.set(l,()=>{u(),h&&h(),o.owner&&o.stop()})}sortNodePosition(l){return!this.current||!this.sortInstanceNodePosition||this.type!==l.type?0:this.sortInstanceNodePosition(this.current,l.current)}updateFeatures(){let l="animation";for(l in go){const o=go[l];if(!o)continue;const{isEnabled:r,Feature:u}=o;if(!this.features[l]&&u&&r(this.props)&&(this.features[l]=new u(this)),this.features[l]){const h=this.features[l];h.isMounted?h.update():(h.mount(),h.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ft()}getStaticValue(l){return this.latestValues[l]}setStaticValue(l,o){this.latestValues[l]=o}update(l,o){(l.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=l,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let r=0;r<a0.length;r++){const u=a0[r];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const h="on"+u,f=l[h];f&&(this.propEventSubscriptions[u]=this.on(u,f))}this.prevMotionValues=IS(this,this.scrapeMotionValuesFromProps(l,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(l){return this.props.variants?this.props.variants[l]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(l){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(l),()=>o.variantChildren.delete(l)}addValue(l,o){const r=this.values.get(l);o!==r&&(r&&this.removeValue(l),this.bindToMotionValue(l,o),this.values.set(l,o),this.latestValues[l]=o.get())}removeValue(l){this.values.delete(l);const o=this.valueSubscriptions.get(l);o&&(o(),this.valueSubscriptions.delete(l)),delete this.latestValues[l],this.removeValueFromRenderState(l,this.renderState)}hasValue(l){return this.values.has(l)}getValue(l,o){if(this.props.values&&this.props.values[l])return this.props.values[l];let r=this.values.get(l);return r===void 0&&o!==void 0&&(r=gn(o===null?void 0:o,{owner:this}),this.addValue(l,r)),r}readValue(l,o){let r=this.latestValues[l]!==void 0||!this.current?this.latestValues[l]:this.getBaseTargetFromProps(this.props,l)??this.readValueFromInstance(this.current,l,this.options);return r!=null&&(typeof r=="string"&&(lp(r)||op(r))?r=parseFloat(r):!WS(r)&&Xe.test(o)&&(r=$p(l,o)),this.setBaseTarget(l,le(r)?r.get():r)),le(r)?r.get():r}setBaseTarget(l,o){this.baseTarget[l]=o}getBaseTarget(l){var h;const{initial:o}=this.props;let r;if(typeof o=="string"||typeof o=="object"){const f=rf(this.props,o,(h=this.presenceContext)==null?void 0:h.custom);f&&(r=f[l])}if(o&&r!==void 0)return r;const u=this.getBaseTargetFromProps(this.props,l);return u!==void 0&&!le(u)?u:this.initialValues[l]!==void 0&&r===void 0?void 0:this.baseTarget[l]}on(l,o){return this.events[l]||(this.events[l]=new Zu),this.events[l].add(o)}notify(l,...o){this.events[l]&&this.events[l].notify(...o)}scheduleRenderMicrotask(){ff.render(this.render)}}class rg extends aT{constructor(){super(...arguments),this.KeyframeResolver=zS}sortInstanceNodePosition(l,o){return l.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(l,o){const r=l.style;return r?r[o]:void 0}removeValueFromRenderState(l,{vars:o,style:r}){delete o[l],delete r[l]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:l}=this.props;le(l)&&(this.childSubscription=l.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class Wi{constructor(l){this.isMounted=!1,this.node=l}update(){}}function cg({top:a,left:l,right:o,bottom:r}){return{x:{min:l,max:o},y:{min:a,max:r}}}function nT({x:a,y:l}){return{top:l.min,right:a.max,bottom:l.max,left:a.min}}function lT(a,l){if(!l)return a;const o=l({x:a.left,y:a.top}),r=l({x:a.right,y:a.bottom});return{top:o.y,left:o.x,bottom:r.y,right:r.x}}function nu(a){return a===void 0||a===1}function Ru({scale:a,scaleX:l,scaleY:o}){return!nu(a)||!nu(l)||!nu(o)}function va(a){return Ru(a)||ug(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY}function ug(a){return n0(a.x)||n0(a.y)}function n0(a){return a&&a!=="0%"}function vo(a,l,o){const r=a-o,u=l*r;return o+u}function l0(a,l,o,r,u){return u!==void 0&&(a=vo(a,u,r)),vo(a,o,r)+l}function Bu(a,l=0,o=1,r,u){a.min=l0(a.min,l,o,r,u),a.max=l0(a.max,l,o,r,u)}function fg(a,{x:l,y:o}){Bu(a.x,l.translate,l.scale,l.originPoint),Bu(a.y,o.translate,o.scale,o.originPoint)}const s0=.999999999999,o0=1.0000000000001;function sT(a,l,o,r=!1){var m;const u=o.length;if(!u)return;l.x=l.y=1;let h,f;for(let v=0;v<u;v++){h=o[v],f=h.projectionDelta;const{visualElement:p}=h.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&h.options.layoutScroll&&h.scroll&&h!==h.root&&($e(a.x,-h.scroll.offset.x),$e(a.y,-h.scroll.offset.y)),f&&(l.x*=f.x.scale,l.y*=f.y.scale,fg(a,f)),r&&va(h.latestValues)&&oo(a,h.latestValues,(m=h.layout)==null?void 0:m.layoutBox))}l.x<o0&&l.x>s0&&(l.x=1),l.y<o0&&l.y>s0&&(l.y=1)}function $e(a,l){a.min+=l,a.max+=l}function r0(a,l,o,r,u=.5){const h=kt(a.min,a.max,u);Bu(a,l,o,h,r)}function c0(a,l){return typeof a=="string"?parseFloat(a)/100*(l.max-l.min):a}function oo(a,l,o){const r=o??a;r0(a.x,c0(l.x,r.x),l.scaleX,l.scale,l.originX),r0(a.y,c0(l.y,r.y),l.scaleY,l.scale,l.originY)}function dg(a,l){return cg(lT(a.getBoundingClientRect(),l))}function oT(a,l,o){const r=dg(a,o),{scroll:u}=l;return u&&($e(r.x,u.offset.x),$e(r.y,u.offset.y)),r}const rT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cT=bn.length;function uT(a,l,o){let r="",u=!0;for(let h=0;h<cT;h++){const f=bn[h],m=a[f];if(m===void 0)continue;let v=!0;if(typeof m=="number")v=m===(f.startsWith("scale")?1:0);else{const p=parseFloat(m);v=f.startsWith("scale")?p===1:p===0}if(!v||o){const p=tg(m,uf[f]);if(!v){u=!1;const b=rT[f]||f;r+=`${b}(${p}) `}o&&(l[f]=p)}}return r=r.trim(),o?r=o(l,u?"":r):u&&(r="none"),r}function pf(a,l,o){const{style:r,vars:u,transformOrigin:h}=a;let f=!1,m=!1;for(const v in l){const p=l[v];if(xn.has(v)){f=!0;continue}else if(Tp(v)){u[v]=p;continue}else{const b=tg(p,uf[v]);v.startsWith("origin")?(m=!0,h[v]=b):r[v]=b}}if(l.transform||(f||o?r.transform=uT(l,a.transform,o):r.transform&&(r.transform="none")),m){const{originX:v="50%",originY:p="50%",originZ:b=0}=h;r.transformOrigin=`${v} ${p} ${b}`}}function hg(a,{style:l,vars:o},r,u){const h=a.style;let f;for(f in l)h[f]=l[f];u==null||u.applyProjectionStyles(h,r);for(f in o)h.setProperty(f,o[f])}function u0(a,l){return l.max===l.min?0:a/(l.max-l.min)*100}const pl={correct:(a,l)=>{if(!l.target)return a;if(typeof a=="string")if(tt.test(a))a=parseFloat(a);else return a;const o=u0(a,l.target.x),r=u0(a,l.target.y);return`${o}% ${r}%`}},fT={correct:(a,{treeScale:l,projectionDelta:o})=>{const r=a,u=Xe.parse(a);if(u.length>5)return r;const h=Xe.createTransformer(a),f=typeof u[0]!="number"?1:0,m=o.x.scale*l.x,v=o.y.scale*l.y;u[0+f]/=m,u[1+f]/=v;const p=kt(m,v,.5);return typeof u[2+f]=="number"&&(u[2+f]/=p),typeof u[3+f]=="number"&&(u[3+f]/=p),h(u)}},ku={borderRadius:{...pl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:pl,borderTopRightRadius:pl,borderBottomLeftRadius:pl,borderBottomRightRadius:pl,boxShadow:fT};function mg(a,{layout:l,layoutId:o}){return xn.has(a)||a.startsWith("origin")||(l||o!==void 0)&&(!!ku[a]||a==="opacity")}function gf(a,l,o){var f;const r=a.style,u=l==null?void 0:l.style,h={};if(!r)return h;for(const m in r)(le(r[m])||u&&le(u[m])||mg(m,a)||((f=o==null?void 0:o.getValue(m))==null?void 0:f.liveStyle)!==void 0)&&(h[m]=r[m]);return h}function dT(a){return window.getComputedStyle(a)}class hT extends rg{constructor(){super(...arguments),this.type="html",this.renderInstance=hg}readValueFromInstance(l,o){var r;if(xn.has(o))return(r=this.projection)!=null&&r.isProjecting?Su(o):R2(l,o);{const u=dT(l),h=(Tp(o)?u.getPropertyValue(o):u[o])||0;return typeof h=="string"?h.trim():h}}measureInstanceViewportBox(l,{transformPagePoint:o}){return dg(l,o)}build(l,o,r){pf(l,o,r.transformTemplate)}scrapeMotionValuesFromProps(l,o,r){return gf(l,o,r)}}const mT={offset:"stroke-dashoffset",array:"stroke-dasharray"},yT={offset:"strokeDashoffset",array:"strokeDasharray"};function pT(a,l,o=1,r=0,u=!0){a.pathLength=1;const h=u?mT:yT;a[h.offset]=`${-r}`,a[h.array]=`${l} ${o}`}const gT=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function yg(a,{attrX:l,attrY:o,attrScale:r,pathLength:u,pathSpacing:h=1,pathOffset:f=0,...m},v,p,b){if(pf(a,m,p),v){a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);return}a.attrs=a.style,a.style={};const{attrs:x,style:S}=a;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=(b==null?void 0:b.transformBox)??"fill-box",delete x.transformBox);for(const E of gT)x[E]!==void 0&&(S[E]=x[E],delete x[E]);l!==void 0&&(x.x=l),o!==void 0&&(x.y=o),r!==void 0&&(x.scale=r),u!==void 0&&pT(x,u,h,f,!1)}const pg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),gg=a=>typeof a=="string"&&a.toLowerCase()==="svg";function vT(a,l,o,r){hg(a,l,void 0,r);for(const u in l.attrs)a.setAttribute(pg.has(u)?u:cf(u),l.attrs[u])}function vg(a,l,o){const r=gf(a,l,o);for(const u in a)if(le(a[u])||le(l[u])){const h=bn.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;r[h]=a[u]}return r}class bT extends rg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ft}getBaseTargetFromProps(l,o){return l[o]}readValueFromInstance(l,o){if(xn.has(o)){const r=Wp(o);return r&&r.default||0}return o=pg.has(o)?o:cf(o),l.getAttribute(o)}scrapeMotionValuesFromProps(l,o,r){return vg(l,o,r)}build(l,o,r){yg(l,o,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(l,o,r,u){vT(l,o,r,u)}mount(l){this.isSVGTag=gg(l.tagName),super.mount(l)}}const xT=yf.length;function bg(a){if(!a)return;if(!a.isControllingVariants){const o=a.parent?bg(a.parent)||{}:{};return a.props.initial!==void 0&&(o.initial=a.props.initial),o}const l={};for(let o=0;o<xT;o++){const r=yf[o],u=a.props[r];(El(u)||u===!1)&&(l[r]=u)}return l}function xg(a,l){if(!Array.isArray(l))return!1;const o=l.length;if(o!==a.length)return!1;for(let r=0;r<o;r++)if(l[r]!==a[r])return!1;return!0}const ST=[...mf].reverse(),TT=mf.length;function AT(a){return l=>Promise.all(l.map(({animation:o,options:r})=>xS(a,o,r)))}function MT(a){let l=AT(a),o=f0(),r=!0,u=!1;const h=p=>(b,x)=>{var E;const S=Ea(a,x,p==="exit"?(E=a.presenceContext)==null?void 0:E.custom:void 0);if(S){const{transition:z,transitionEnd:H,...U}=S;b={...b,...U,...H}}return b};function f(p){l=p(a)}function m(p){const{props:b}=a,x=bg(a.parent)||{},S=[],E=new Set;let z={},H=1/0;for(let K=0;K<TT;K++){const Y=ST[K],J=o[Y],_=b[Y]!==void 0?b[Y]:x[Y],q=El(_),I=Y===p?J.isActive:null;I===!1&&(H=K);let Z=_===x[Y]&&_!==b[Y]&&q;if(Z&&(r||u)&&a.manuallyAnimateOnMount&&(Z=!1),J.protectedKeys={...z},!J.isActive&&I===null||!_&&!J.prevProp||Mo(_)||typeof _=="boolean")continue;if(Y==="exit"&&J.isActive&&I!==!0){J.prevResolvedValues&&(z={...z,...J.prevResolvedValues});continue}const F=ET(J.prevProp,_);let lt=F||Y===p&&J.isActive&&!Z&&q||K>H&&q,W=!1;const ht=Array.isArray(_)?_:[_];let xt=ht.reduce(h(Y),{});I===!1&&(xt={});const{prevResolvedValues:Qt={}}=J,X={...Qt,...xt},at=Q=>{lt=!0,E.has(Q)&&(W=!0,E.delete(Q)),J.needsAnimating[Q]=!0;const rt=a.getValue(Q);rt&&(rt.liveStyle=!1)};for(const Q in X){const rt=xt[Q],ot=Qt[Q];if(z.hasOwnProperty(Q))continue;let A=!1;Nu(rt)&&Nu(ot)?A=!xg(rt,ot):A=rt!==ot,A?rt!=null?at(Q):E.add(Q):rt!==void 0&&E.has(Q)?at(Q):J.protectedKeys[Q]=!0}J.prevProp=_,J.prevResolvedValues=xt,J.isActive&&(z={...z,...xt}),(r||u)&&a.blockInitialAnimation&&(lt=!1);const N=Z&&F;lt&&(!N||W)&&S.push(...ht.map(Q=>{const rt={type:Y};if(typeof Q=="string"&&(r||u)&&!N&&a.manuallyAnimateOnMount&&a.parent){const{parent:ot}=a,A=Ea(ot,Q);if(ot.enteringChildren&&A){const{delayChildren:V}=A.transition||{};rt.delay=Gp(ot.enteringChildren,a,V)}}return{animation:Q,options:rt}}))}if(E.size){const K={};if(typeof b.initial!="boolean"){const Y=Ea(a,Array.isArray(b.initial)?b.initial[0]:b.initial);Y&&Y.transition&&(K.transition=Y.transition)}E.forEach(Y=>{const J=a.getBaseTarget(Y),_=a.getValue(Y);_&&(_.liveStyle=!0),K[Y]=J??null}),S.push({animation:K})}let U=!!S.length;return r&&(b.initial===!1||b.initial===b.animate)&&!a.manuallyAnimateOnMount&&(U=!1),r=!1,u=!1,U?l(S):Promise.resolve()}function v(p,b){var S;if(o[p].isActive===b)return Promise.resolve();(S=a.variantChildren)==null||S.forEach(E=>{var z;return(z=E.animationState)==null?void 0:z.setActive(p,b)}),o[p].isActive=b;const x=m(p);for(const E in o)o[E].protectedKeys={};return x}return{animateChanges:m,setActive:v,setAnimateFunction:f,getState:()=>o,reset:()=>{o=f0(),u=!0}}}function ET(a,l){return typeof l=="string"?l!==a:Array.isArray(l)?!xg(l,a):!1}function ga(a=!1){return{isActive:a,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function f0(){return{animate:ga(!0),whileInView:ga(),whileHover:ga(),whileTap:ga(),whileDrag:ga(),whileFocus:ga(),exit:ga()}}function _u(a,l){a.min=l.min,a.max=l.max}function Ye(a,l){_u(a.x,l.x),_u(a.y,l.y)}function d0(a,l){a.translate=l.translate,a.scale=l.scale,a.originPoint=l.originPoint,a.origin=l.origin}const Sg=1e-4,jT=1-Sg,NT=1+Sg,Tg=.01,DT=0-Tg,CT=0+Tg;function ue(a){return a.max-a.min}function wT(a,l,o){return Math.abs(a-l)<=o}function h0(a,l,o,r=.5){a.origin=r,a.originPoint=kt(l.min,l.max,a.origin),a.scale=ue(o)/ue(l),a.translate=kt(o.min,o.max,a.origin)-a.originPoint,(a.scale>=jT&&a.scale<=NT||isNaN(a.scale))&&(a.scale=1),(a.translate>=DT&&a.translate<=CT||isNaN(a.translate))&&(a.translate=0)}function Sl(a,l,o,r){h0(a.x,l.x,o.x,r?r.originX:void 0),h0(a.y,l.y,o.y,r?r.originY:void 0)}function m0(a,l,o,r=0){const u=r?kt(o.min,o.max,r):o.min;a.min=u+l.min,a.max=a.min+ue(l)}function zT(a,l,o,r){m0(a.x,l.x,o.x,r==null?void 0:r.x),m0(a.y,l.y,o.y,r==null?void 0:r.y)}function y0(a,l,o,r=0){const u=r?kt(o.min,o.max,r):o.min;a.min=l.min-u,a.max=a.min+ue(l)}function bo(a,l,o,r){y0(a.x,l.x,o.x,r==null?void 0:r.x),y0(a.y,l.y,o.y,r==null?void 0:r.y)}function p0(a,l,o,r,u){return a-=l,a=vo(a,1/o,r),u!==void 0&&(a=vo(a,1/u,r)),a}function OT(a,l=0,o=1,r=.5,u,h=a,f=a){if(Ie.test(l)&&(l=parseFloat(l),l=kt(f.min,f.max,l/100)-f.min),typeof l!="number")return;let m=kt(h.min,h.max,r);a===h&&(m-=l),a.min=p0(a.min,l,o,m,u),a.max=p0(a.max,l,o,m,u)}function g0(a,l,[o,r,u],h,f){OT(a,l[o],l[r],l[u],l.scale,h,f)}const RT=["x","scaleX","originX"],BT=["y","scaleY","originY"];function v0(a,l,o,r){g0(a.x,l,RT,o?o.x:void 0,r?r.x:void 0),g0(a.y,l,BT,o?o.y:void 0,r?r.y:void 0)}function b0(a){return a.translate===0&&a.scale===1}function Ag(a){return b0(a.x)&&b0(a.y)}function x0(a,l){return a.min===l.min&&a.max===l.max}function kT(a,l){return x0(a.x,l.x)&&x0(a.y,l.y)}function S0(a,l){return Math.round(a.min)===Math.round(l.min)&&Math.round(a.max)===Math.round(l.max)}function Mg(a,l){return S0(a.x,l.x)&&S0(a.y,l.y)}function T0(a){return ue(a.x)/ue(a.y)}function A0(a,l){return a.translate===l.translate&&a.scale===l.scale&&a.originPoint===l.originPoint}function We(a){return[a("x"),a("y")]}function _T(a,l,o){let r="";const u=a.x.translate/l.x,h=a.y.translate/l.y,f=(o==null?void 0:o.z)||0;if((u||h||f)&&(r=`translate3d(${u}px, ${h}px, ${f}px) `),(l.x!==1||l.y!==1)&&(r+=`scale(${1/l.x}, ${1/l.y}) `),o){const{transformPerspective:p,rotate:b,rotateX:x,rotateY:S,skewX:E,skewY:z}=o;p&&(r=`perspective(${p}px) ${r}`),b&&(r+=`rotate(${b}deg) `),x&&(r+=`rotateX(${x}deg) `),S&&(r+=`rotateY(${S}deg) `),E&&(r+=`skewX(${E}deg) `),z&&(r+=`skewY(${z}deg) `)}const m=a.x.scale*l.x,v=a.y.scale*l.y;return(m!==1||v!==1)&&(r+=`scale(${m}, ${v})`),r||"none"}const Eg=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],VT=Eg.length,M0=a=>typeof a=="string"?parseFloat(a):a,E0=a=>typeof a=="number"||tt.test(a);function UT(a,l,o,r,u,h){u?(a.opacity=kt(0,o.opacity??1,HT(r)),a.opacityExit=kt(l.opacity??1,0,LT(r))):h&&(a.opacity=kt(l.opacity??1,o.opacity??1,r));for(let f=0;f<VT;f++){const m=Eg[f];let v=j0(l,m),p=j0(o,m);if(v===void 0&&p===void 0)continue;v||(v=0),p||(p=0),v===0||p===0||E0(v)===E0(p)?(a[m]=Math.max(kt(M0(v),M0(p),r),0),(Ie.test(p)||Ie.test(v))&&(a[m]+="%")):a[m]=p}(l.rotate||o.rotate)&&(a.rotate=kt(l.rotate||0,o.rotate||0,r))}function j0(a,l){return a[l]!==void 0?a[l]:a.borderRadius}const HT=jg(0,.5,pp),LT=jg(.5,.95,Le);function jg(a,l,o){return r=>r<a?0:r>l?1:o(Al(a,l,r))}function KT(a,l,o){const r=le(a)?a:gn(a);return r.start(of("",r,l,o)),r.animation}function jl(a,l,o,r={passive:!0}){return a.addEventListener(l,o,r),()=>a.removeEventListener(l,o)}const GT=(a,l)=>a.depth-l.depth;class JT{constructor(){this.children=[],this.isDirty=!1}add(l){Pu(this.children,l),this.isDirty=!0}remove(l){fo(this.children,l),this.isDirty=!0}forEach(l){this.isDirty&&this.children.sort(GT),this.isDirty=!1,this.children.forEach(l)}}function YT(a,l){const o=ce.now(),r=({timestamp:u})=>{const h=u-o;h>=l&&(Fi(r),a(h-l))};return Ot.setup(r,!0),()=>Fi(r)}function ro(a){return le(a)?a.get():a}class qT{constructor(){this.members=[]}add(l){Pu(this.members,l);for(let o=this.members.length-1;o>=0;o--){const r=this.members[o];if(r===l||r===this.lead||r===this.prevLead)continue;const u=r.instance;(!u||u.isConnected===!1)&&!r.snapshot&&(fo(this.members,r),r.unmount())}l.scheduleRender()}remove(l){if(fo(this.members,l),l===this.prevLead&&(this.prevLead=void 0),l===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(l){var o;for(let r=this.members.indexOf(l)-1;r>=0;r--){const u=this.members[r];if(u.isPresent!==!1&&((o=u.instance)==null?void 0:o.isConnected)!==!1)return this.promote(u),!0}return!1}promote(l,o){var u;const r=this.lead;if(l!==r&&(this.prevLead=r,this.lead=l,l.show(),r)){r.updateSnapshot(),l.scheduleRender();const{layoutDependency:h}=r.options,{layoutDependency:f}=l.options;(h===void 0||h!==f)&&(l.resumeFrom=r,o&&(r.preserveOpacity=!0),r.snapshot&&(l.snapshot=r.snapshot,l.snapshot.latestValues=r.animationValues||r.latestValues),(u=l.root)!=null&&u.isUpdating&&(l.isLayoutDirty=!0)),l.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(l=>{var o,r,u,h,f;(r=(o=l.options).onExitComplete)==null||r.call(o),(f=(u=l.resumingFrom)==null?void 0:(h=u.options).onExitComplete)==null||f.call(h)})}scheduleRender(){this.members.forEach(l=>l.instance&&l.scheduleRender(!1))}removeLeadSnapshot(){var l;(l=this.lead)!=null&&l.snapshot&&(this.lead.snapshot=void 0)}}const co={hasAnimatedSinceResize:!0,hasEverUpdated:!1},lu=["","X","Y","Z"],XT=1e3;let PT=0;function su(a,l,o,r){const{latestValues:u}=l;u[a]&&(o[a]=u[a],l.setStaticValue(a,0),r&&(r[a]=0))}function Ng(a){if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;const{visualElement:l}=a.options;if(!l)return;const o=Pp(l);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:h}=a.options;window.MotionCancelOptimisedAnimation(o,"transform",Ot,!(u||h))}const{parent:r}=a;r&&!r.hasCheckedOptimisedAppear&&Ng(r)}function Dg({attachResizeListener:a,defaultParent:l,measureScroll:o,checkIsScrollRoot:r,resetTransform:u}){return class{constructor(f={},m=l==null?void 0:l()){this.id=PT++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(FT),this.nodes.forEach(i5),this.nodes.forEach(a5),this.nodes.forEach(WT)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let v=0;v<this.path.length;v++)this.path[v].shouldResetTransform=!0;this.root===this&&(this.nodes=new JT)}addEventListener(f,m){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Zu),this.eventHandlers.get(f).add(m)}notifyListeners(f,...m){const v=this.eventHandlers.get(f);v&&v.notify(...m)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=hf(f)&&!ZS(f),this.instance=f;const{layoutId:m,layout:v,visualElement:p}=this.options;if(p&&!p.current&&p.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(v||m)&&(this.isLayoutDirty=!0),a){let b,x=0;const S=()=>this.root.updateBlockedByResize=!1;Ot.read(()=>{x=window.innerWidth}),a(f,()=>{const E=window.innerWidth;E!==x&&(x=E,this.root.updateBlockedByResize=!0,b&&b(),b=YT(S,250),co.hasAnimatedSinceResize&&(co.hasAnimatedSinceResize=!1,this.nodes.forEach(C0)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||v)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const z=this.options.transition||p.getDefaultTransition()||r5,{onLayoutAnimationStart:H,onLayoutAnimationComplete:U}=p.getProps(),K=!this.targetLayout||!Mg(this.targetLayout,E),Y=!x&&S;if(this.options.layoutRoot||this.resumeFrom||Y||x&&(K||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const J={...sf(z,"layout"),onPlay:H,onComplete:U};(p.shouldReduceMotion||this.options.layoutRoot)&&(J.delay=0,J.type=!1),this.startAnimation(J),this.setAnimationOrigin(b,Y)}else x||C0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(n5),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ng(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const x=this.path[b];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:m,layout:v}=this.options;if(m===void 0&&!v)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const v=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),v&&this.nodes.forEach(IT),this.nodes.forEach(N0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(D0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(t5),this.nodes.forEach(e5),this.nodes.forEach(QT),this.nodes.forEach(ZT)):this.nodes.forEach(D0),this.clearAllSnapshots();const m=ce.now();ne.delta=ti(0,1e3/60,m-ne.timestamp),ne.timestamp=m,ne.isProcessing=!0,Wc.update.process(ne),Wc.preRender.process(ne),Wc.render.process(ne),ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ff.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach($T),this.sharedNodes.forEach(l5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ot.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ot.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ue(this.snapshot.measuredBox.x)&&!ue(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let v=0;v<this.path.length;v++)this.path[v].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ft()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(m=!1),m&&this.instance){const v=r(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:v,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:v}}}resetTransform(){if(!u)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!Ag(this.projectionDelta),v=this.getTransformTemplate(),p=v?v(this.latestValues,""):void 0,b=p!==this.prevTransformTemplateValue;f&&this.instance&&(m||va(this.latestValues)||b)&&(u(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const m=this.measurePageBox();let v=this.removeElementScroll(m);return f&&(v=this.removeTransform(v)),c5(v),{animationId:this.root.animationId,measuredBox:m,layoutBox:v,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:f}=this.options;if(!f)return Ft();const m=f.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(u5))){const{scroll:b}=this.root;b&&($e(m.x,b.offset.x),$e(m.y,b.offset.y))}return m}removeElementScroll(f){var v;const m=Ft();if(Ye(m,f),(v=this.scroll)!=null&&v.wasRoot)return m;for(let p=0;p<this.path.length;p++){const b=this.path[p],{scroll:x,options:S}=b;b!==this.root&&x&&S.layoutScroll&&(x.wasRoot&&Ye(m,f),$e(m.x,x.offset.x),$e(m.y,x.offset.y))}return m}applyTransform(f,m=!1,v){var b,x;const p=v||Ft();Ye(p,f);for(let S=0;S<this.path.length;S++){const E=this.path[S];!m&&E.options.layoutScroll&&E.scroll&&E!==E.root&&($e(p.x,-E.scroll.offset.x),$e(p.y,-E.scroll.offset.y)),va(E.latestValues)&&oo(p,E.latestValues,(b=E.layout)==null?void 0:b.layoutBox)}return va(this.latestValues)&&oo(p,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),p}removeTransform(f){var v;const m=Ft();Ye(m,f);for(let p=0;p<this.path.length;p++){const b=this.path[p];if(!va(b.latestValues))continue;let x;b.instance&&(Ru(b.latestValues)&&b.updateSnapshot(),x=Ft(),Ye(x,b.measurePageBox())),v0(m,b.latestValues,(v=b.snapshot)==null?void 0:v.layoutBox,x)}return va(this.latestValues)&&v0(m,this.latestValues),m}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var E;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const v=!!this.resumingFrom||this!==m;if(!(f||v&&this.isSharedProjectionDirty||this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!this.layout||!(b||x))return;this.resolvedRelativeTargetAt=ne.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ft(),this.targetWithTransforms=Ft()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zT(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ye(this.target,this.layout.layoutBox),fg(this.target,this.targetDelta)):Ye(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ru(this.parent.latestValues)||ug(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,m,v){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ft(),this.relativeTargetOrigin=Ft(),bo(this.relativeTargetOrigin,m,v,this.options.layoutAnchor||void 0),Ye(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var z;const f=this.getLead(),m=!!this.resumingFrom||this!==f;let v=!0;if((this.isProjectionDirty||(z=this.parent)!=null&&z.isProjectionDirty)&&(v=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(v=!1),this.resolvedRelativeTargetAt===ne.timestamp&&(v=!1),v)return;const{layout:p,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||b))return;Ye(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;sT(this.layoutCorrected,this.treeScale,this.path,m),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Ft());const{target:E}=f;if(!E){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(d0(this.prevProjectionDelta.x,this.projectionDelta.x),d0(this.prevProjectionDelta.y,this.projectionDelta.y)),Sl(this.projectionDelta,this.layoutCorrected,E,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!A0(this.projectionDelta.x,this.prevProjectionDelta.x)||!A0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var m;if((m=this.options.visualElement)==null||m.scheduleRender(),f){const v=this.getStack();v&&v.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=mn(),this.projectionDelta=mn(),this.projectionDeltaWithTransform=mn()}setAnimationOrigin(f,m=!1){const v=this.snapshot,p=v?v.latestValues:{},b={...this.latestValues},x=mn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const S=Ft(),E=v?v.source:void 0,z=this.layout?this.layout.source:void 0,H=E!==z,U=this.getStack(),K=!U||U.members.length<=1,Y=!!(H&&!K&&this.options.crossfade===!0&&!this.path.some(o5));this.animationProgress=0;let J;this.mixTargetDelta=_=>{const q=_/1e3;w0(x.x,f.x,q),w0(x.y,f.y,q),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(bo(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),s5(this.relativeTarget,this.relativeTargetOrigin,S,q),J&&kT(this.relativeTarget,J)&&(this.isProjectionDirty=!1),J||(J=Ft()),Ye(J,this.relativeTarget)),H&&(this.animationValues=b,UT(b,p,this.latestValues,q,Y,K)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var m,v,p;this.notifyListeners("animationStart"),(m=this.currentAnimation)==null||m.stop(),(p=(v=this.resumingFrom)==null?void 0:v.currentAnimation)==null||p.stop(),this.pendingAnimation&&(Fi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ot.update(()=>{co.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=gn(0)),this.motionValue.jump(0,!1),this.currentAnimation=KT(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:b=>{this.mixTargetDelta(b),f.onUpdate&&f.onUpdate(b)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(XT),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:m,target:v,layout:p,latestValues:b}=f;if(!(!m||!v||!p)){if(this!==f&&this.layout&&p&&Cg(this.options.animationType,this.layout.layoutBox,p.layoutBox)){v=this.target||Ft();const x=ue(this.layout.layoutBox.x);v.x.min=f.target.x.min,v.x.max=v.x.min+x;const S=ue(this.layout.layoutBox.y);v.y.min=f.target.y.min,v.y.max=v.y.min+S}Ye(m,v),oo(m,b),Sl(this.projectionDeltaWithTransform,this.layoutCorrected,m,b)}}registerSharedNode(f,m){this.sharedNodes.has(f)||this.sharedNodes.set(f,new qT),this.sharedNodes.get(f).add(m);const p=m.options.initialPromotionConfig;m.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(m):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var m;const{layoutId:f}=this.options;return f?((m=this.getStack())==null?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:f}=this.options;return f?(m=this.getStack())==null?void 0:m.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:m,preserveFollowOpacity:v}={}){const p=this.getStack();p&&p.promote(this,v),f&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let m=!1;const{latestValues:v}=f;if((v.z||v.rotate||v.rotateX||v.rotateY||v.rotateZ||v.skewX||v.skewY)&&(m=!0),!m)return;const p={};v.z&&su("z",f,p,this.animationValues);for(let b=0;b<lu.length;b++)su(`rotate${lu[b]}`,f,p,this.animationValues),su(`skew${lu[b]}`,f,p,this.animationValues);f.render();for(const b in p)f.setStaticValue(b,p[b]),this.animationValues&&(this.animationValues[b]=p[b]);f.scheduleRender()}applyProjectionStyles(f,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const v=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=ro(m==null?void 0:m.pointerEvents)||"",f.transform=v?v(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=ro(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!va(this.latestValues)&&(f.transform=v?v({},""):"none",this.hasProjected=!1);return}f.visibility="";const b=p.animationValues||p.latestValues;this.applyTransformsToTarget();let x=_T(this.projectionDeltaWithTransform,this.treeScale,b);v&&(x=v(b,x)),f.transform=x;const{x:S,y:E}=this.projectionDelta;f.transformOrigin=`${S.origin*100}% ${E.origin*100}% 0`,p.animationValues?f.opacity=p===this?b.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:f.opacity=p===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const z in ku){if(b[z]===void 0)continue;const{correct:H,applyTo:U,isCSSVariable:K}=ku[z],Y=x==="none"?b[z]:H(b[z],p);if(U){const J=U.length;for(let _=0;_<J;_++)f[U[_]]=Y}else K?this.options.visualElement.renderState.vars[z]=Y:f[z]=Y}this.options.layoutId&&(f.pointerEvents=p===this?ro(m==null?void 0:m.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var m;return(m=f.currentAnimation)==null?void 0:m.stop()}),this.root.nodes.forEach(N0),this.root.sharedNodes.clear()}}}function QT(a){a.updateLayout()}function ZT(a){var o;const l=((o=a.resumeFrom)==null?void 0:o.snapshot)||a.snapshot;if(a.isLead()&&a.layout&&l&&a.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:u}=a.layout,{animationType:h}=a.options,f=l.source!==a.layout.source;if(h==="size")We(x=>{const S=f?l.measuredBox[x]:l.layoutBox[x],E=ue(S);S.min=r[x].min,S.max=S.min+E});else if(h==="x"||h==="y"){const x=h==="x"?"y":"x";_u(f?l.measuredBox[x]:l.layoutBox[x],r[x])}else Cg(h,l.layoutBox,r)&&We(x=>{const S=f?l.measuredBox[x]:l.layoutBox[x],E=ue(r[x]);S.max=S.min+E,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[x].max=a.relativeTarget[x].min+E)});const m=mn();Sl(m,r,l.layoutBox);const v=mn();f?Sl(v,a.applyTransform(u,!0),l.measuredBox):Sl(v,r,l.layoutBox);const p=!Ag(m);let b=!1;if(!a.resumeFrom){const x=a.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:S,layout:E}=x;if(S&&E){const z=a.options.layoutAnchor||void 0,H=Ft();bo(H,l.layoutBox,S.layoutBox,z);const U=Ft();bo(U,r,E.layoutBox,z),Mg(H,U)||(b=!0),x.options.layoutRoot&&(a.relativeTarget=U,a.relativeTargetOrigin=H,a.relativeParent=x)}}}a.notifyListeners("didUpdate",{layout:r,snapshot:l,delta:v,layoutDelta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:b})}else if(a.isLead()){const{onExitComplete:r}=a.options;r&&r()}a.options.transition=void 0}function FT(a){a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))}function WT(a){a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1}function $T(a){a.clearSnapshot()}function N0(a){a.clearMeasurements()}function IT(a){a.isLayoutDirty=!0,a.updateLayout()}function D0(a){a.isLayoutDirty=!1}function t5(a){a.isAnimationBlocked&&a.layout&&!a.isLayoutDirty&&(a.snapshot=a.layout,a.isLayoutDirty=!0)}function e5(a){const{visualElement:l}=a.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),a.resetTransform()}function C0(a){a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0}function i5(a){a.resolveTargetDelta()}function a5(a){a.calcProjection()}function n5(a){a.resetSkewAndRotation()}function l5(a){a.removeLeadSnapshot()}function w0(a,l,o){a.translate=kt(l.translate,0,o),a.scale=kt(l.scale,1,o),a.origin=l.origin,a.originPoint=l.originPoint}function z0(a,l,o,r){a.min=kt(l.min,o.min,r),a.max=kt(l.max,o.max,r)}function s5(a,l,o,r){z0(a.x,l.x,o.x,r),z0(a.y,l.y,o.y,r)}function o5(a){return a.animationValues&&a.animationValues.opacityExit!==void 0}const r5={duration:.45,ease:[.4,0,.1,1]},O0=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),R0=O0("applewebkit/")&&!O0("chrome/")?Math.round:Le;function B0(a){a.min=R0(a.min),a.max=R0(a.max)}function c5(a){B0(a.x),B0(a.y)}function Cg(a,l,o){return a==="position"||a==="preserve-aspect"&&!wT(T0(l),T0(o),.2)}function u5(a){var l;return a!==a.root&&((l=a.scroll)==null?void 0:l.wasRoot)}const f5=Dg({attachResizeListener:(a,l)=>jl(a,"resize",l),measureScroll:()=>{var a,l;return{x:document.documentElement.scrollLeft||((a=document.body)==null?void 0:a.scrollLeft)||0,y:document.documentElement.scrollTop||((l=document.body)==null?void 0:l.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ou={current:void 0},wg=Dg({measureScroll:a=>({x:a.scrollLeft,y:a.scrollTop}),defaultParent:()=>{if(!ou.current){const a=new f5({});a.mount(window),a.setOptions({layoutScroll:!0}),ou.current=a}return ou.current},resetTransform:(a,l)=>{a.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"}),vf=G.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function k0(a,l){if(typeof a=="function")return a(l);a!=null&&(a.current=l)}function d5(...a){return l=>{let o=!1;const r=a.map(u=>{const h=k0(u,l);return!o&&typeof h=="function"&&(o=!0),h});if(o)return()=>{for(let u=0;u<r.length;u++){const h=r[u];typeof h=="function"?h():k0(a[u],null)}}}}function h5(...a){return G.useCallback(d5(...a),a)}class m5 extends G.Component{getSnapshotBeforeUpdate(l){const o=this.props.childRef.current;if(ao(o)&&l.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=o.offsetParent,u=ao(r)&&r.offsetWidth||0,h=ao(r)&&r.offsetHeight||0,f=getComputedStyle(o),m=this.props.sizeRef.current;m.height=parseFloat(f.height),m.width=parseFloat(f.width),m.top=o.offsetTop,m.left=o.offsetLeft,m.right=u-m.width-m.left,m.bottom=h-m.height-m.top}return null}componentDidUpdate(){}render(){return this.props.children}}function y5({children:a,isPresent:l,anchorX:o,anchorY:r,root:u,pop:h}){var S;const f=G.useId(),m=G.useRef(null),v=G.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=G.useContext(vf),b=((S=a.props)==null?void 0:S.ref)??(a==null?void 0:a.ref),x=h5(m,b);return G.useInsertionEffect(()=>{const{width:E,height:z,top:H,left:U,right:K,bottom:Y}=v.current;if(l||h===!1||!m.current||!E||!z)return;const J=o==="left"?`left: ${U}`:`right: ${K}`,_=r==="bottom"?`bottom: ${Y}`:`top: ${H}`;m.current.dataset.motionPopId=f;const q=document.createElement("style");p&&(q.nonce=p);const I=u??document.head;return I.appendChild(q),q.sheet&&q.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${E}px !important;
            height: ${z}px !important;
            ${J}px !important;
            ${_}px !important;
          }
        `),()=>{var Z;(Z=m.current)==null||Z.removeAttribute("data-motion-pop-id"),I.contains(q)&&I.removeChild(q)}},[l]),y.jsx(m5,{isPresent:l,childRef:m,sizeRef:v,pop:h,children:h===!1?a:G.cloneElement(a,{ref:x})})}const p5=({children:a,initial:l,isPresent:o,onExitComplete:r,custom:u,presenceAffectsLayout:h,mode:f,anchorX:m,anchorY:v,root:p})=>{const b=Xu(g5),x=G.useId();let S=!0,E=G.useMemo(()=>(S=!1,{id:x,initial:l,isPresent:o,custom:u,onExitComplete:z=>{b.set(z,!0);for(const H of b.values())if(!H)return;r&&r()},register:z=>(b.set(z,!1),()=>b.delete(z))}),[o,b,r]);return h&&S&&(E={...E}),G.useMemo(()=>{b.forEach((z,H)=>b.set(H,!1))},[o]),G.useEffect(()=>{!o&&!b.size&&r&&r()},[o]),a=y.jsx(y5,{pop:f==="popLayout",isPresent:o,anchorX:m,anchorY:v,root:p,children:a}),y.jsx(To.Provider,{value:E,children:a})};function g5(){return new Map}function zg(a=!0){const l=G.useContext(To);if(l===null)return[!0,null];const{isPresent:o,onExitComplete:r,register:u}=l,h=G.useId();G.useEffect(()=>{if(a)return u(h)},[a]);const f=G.useCallback(()=>a&&r&&r(h),[h,r,a]);return!o&&r?[!1,f]:[!0]}const $s=a=>a.key||"";function _0(a){const l=[];return G.Children.forEach(a,o=>{G.isValidElement(o)&&l.push(o)}),l}const xo=({children:a,custom:l,initial:o=!0,onExitComplete:r,presenceAffectsLayout:u=!0,mode:h="sync",propagate:f=!1,anchorX:m="left",anchorY:v="top",root:p})=>{const[b,x]=zg(f),S=G.useMemo(()=>_0(a),[a]),E=f&&!b?[]:S.map($s),z=G.useRef(!0),H=G.useRef(S),U=Xu(()=>new Map),K=G.useRef(new Set),[Y,J]=G.useState(S),[_,q]=G.useState(S);np(()=>{z.current=!1,H.current=S;for(let F=0;F<_.length;F++){const lt=$s(_[F]);E.includes(lt)?(U.delete(lt),K.current.delete(lt)):U.get(lt)!==!0&&U.set(lt,!1)}},[_,E.length,E.join("-")]);const I=[];if(S!==Y){let F=[...S];for(let lt=0;lt<_.length;lt++){const W=_[lt],ht=$s(W);E.includes(ht)||(F.splice(lt,0,W),I.push(W))}return h==="wait"&&I.length&&(F=I),q(_0(F)),J(S),null}const{forceRender:Z}=G.useContext(qu);return y.jsx(y.Fragment,{children:_.map(F=>{const lt=$s(F),W=f&&!b?!1:S===_||E.includes(lt),ht=()=>{if(K.current.has(lt))return;if(U.has(lt))K.current.add(lt),U.set(lt,!0);else return;let xt=!0;U.forEach(Qt=>{Qt||(xt=!1)}),xt&&(Z==null||Z(),q(H.current),f&&(x==null||x()),r&&r())};return y.jsx(p5,{isPresent:W,initial:!z.current||o?void 0:!1,custom:l,presenceAffectsLayout:u,mode:h,root:p,onExitComplete:W?void 0:ht,anchorX:m,anchorY:v,children:F},lt)})})},Og=G.createContext({strict:!1}),V0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let U0=!1;function v5(){if(U0)return;const a={};for(const l in V0)a[l]={isEnabled:o=>V0[l].some(r=>!!o[r])};og(a),U0=!0}function Rg(){return v5(),iT()}function b5(a){const l=Rg();for(const o in a)l[o]={...l[o],...a[o]};og(l)}const x5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function So(a){return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||x5.has(a)}let Bg=a=>!So(a);function S5(a){typeof a=="function"&&(Bg=l=>l.startsWith("on")?!So(l):a(l))}try{S5(require("@emotion/is-prop-valid").default)}catch{}function T5(a,l,o){const r={};for(const u in a)u==="values"&&typeof a.values=="object"||le(a[u])||(Bg(u)||o===!0&&So(u)||!l&&!So(u)||a.draggable&&u.startsWith("onDrag"))&&(r[u]=a[u]);return r}const jo=G.createContext({});function A5(a,l){if(Eo(a)){const{initial:o,animate:r}=a;return{initial:o===!1||El(o)?o:void 0,animate:El(r)?r:void 0}}return a.inherit!==!1?l:{}}function M5(a){const{initial:l,animate:o}=A5(a,G.useContext(jo));return G.useMemo(()=>({initial:l,animate:o}),[H0(l),H0(o)])}function H0(a){return Array.isArray(a)?a.join(" "):a}const bf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function kg(a,l,o){for(const r in l)!le(l[r])&&!mg(r,o)&&(a[r]=l[r])}function E5({transformTemplate:a},l){return G.useMemo(()=>{const o=bf();return pf(o,l,a),Object.assign({},o.vars,o.style)},[l])}function j5(a,l){const o=a.style||{},r={};return kg(r,o,a),Object.assign(r,E5(a,l)),r}function N5(a,l){const o={},r=j5(a,l);return a.drag&&a.dragListener!==!1&&(o.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=a.drag===!0?"none":`pan-${a.drag==="x"?"y":"x"}`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(o.tabIndex=0),o.style=r,o}const _g=()=>({...bf(),attrs:{}});function D5(a,l,o,r){const u=G.useMemo(()=>{const h=_g();return yg(h,l,gg(r),a.transformTemplate,a.style),{...h.attrs,style:{...h.style}}},[l]);if(a.style){const h={};kg(h,a.style,a),u.style={...h,...u.style}}return u}const C5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xf(a){return typeof a!="string"||a.includes("-")?!1:!!(C5.indexOf(a)>-1||/[A-Z]/u.test(a))}function w5(a,l,o,{latestValues:r},u,h=!1,f){const v=(f??xf(a)?D5:N5)(l,r,u,a),p=T5(l,typeof a=="string",h),b=a!==G.Fragment?{...p,...v,ref:o}:{},{children:x}=l,S=G.useMemo(()=>le(x)?x.get():x,[x]);return G.createElement(a,{...b,children:S})}function z5({scrapeMotionValuesFromProps:a,createRenderState:l},o,r,u){return{latestValues:O5(o,r,u,a),renderState:l()}}function O5(a,l,o,r){const u={},h=r(a,{});for(const S in h)u[S]=ro(h[S]);let{initial:f,animate:m}=a;const v=Eo(a),p=lg(a);l&&p&&!v&&a.inherit!==!1&&(f===void 0&&(f=l.initial),m===void 0&&(m=l.animate));let b=o?o.initial===!1:!1;b=b||f===!1;const x=b?m:f;if(x&&typeof x!="boolean"&&!Mo(x)){const S=Array.isArray(x)?x:[x];for(let E=0;E<S.length;E++){const z=rf(a,S[E]);if(z){const{transitionEnd:H,transition:U,...K}=z;for(const Y in K){let J=K[Y];if(Array.isArray(J)){const _=b?J.length-1:0;J=J[_]}J!==null&&(u[Y]=J)}for(const Y in H)u[Y]=H[Y]}}}return u}const Vg=a=>(l,o)=>{const r=G.useContext(jo),u=G.useContext(To),h=()=>z5(a,l,r,u);return o?h():Xu(h)},R5=Vg({scrapeMotionValuesFromProps:gf,createRenderState:bf}),B5=Vg({scrapeMotionValuesFromProps:vg,createRenderState:_g}),k5=Symbol.for("motionComponentSymbol");function _5(a,l,o){const r=G.useRef(o);G.useInsertionEffect(()=>{r.current=o});const u=G.useRef(null);return G.useCallback(h=>{var m;h&&((m=a.onMount)==null||m.call(a,h));const f=r.current;if(typeof f=="function")if(h){const v=f(h);typeof v=="function"&&(u.current=v)}else u.current?(u.current(),u.current=null):f(h);else f&&(f.current=h);l&&(h?l.mount(h):l.unmount())},[l])}const Ug=G.createContext({});function fn(a){return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")}function V5(a,l,o,r,u,h){var J,_;const{visualElement:f}=G.useContext(jo),m=G.useContext(Og),v=G.useContext(To),p=G.useContext(vf),b=p.reducedMotion,x=p.skipAnimations,S=G.useRef(null),E=G.useRef(!1);r=r||m.renderer,!S.current&&r&&(S.current=r(a,{visualState:l,parent:f,props:o,presenceContext:v,blockInitialAnimation:v?v.initial===!1:!1,reducedMotionConfig:b,skipAnimations:x,isSVG:h}),E.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const z=S.current,H=G.useContext(Ug);z&&!z.projection&&u&&(z.type==="html"||z.type==="svg")&&U5(S.current,o,u,H);const U=G.useRef(!1);G.useInsertionEffect(()=>{z&&U.current&&z.update(o,v)});const K=o[Xp],Y=G.useRef(!!K&&typeof window<"u"&&!((J=window.MotionHandoffIsComplete)!=null&&J.call(window,K))&&((_=window.MotionHasOptimisedAnimation)==null?void 0:_.call(window,K)));return np(()=>{E.current=!0,z&&(U.current=!0,window.MotionIsMounted=!0,z.updateFeatures(),z.scheduleRenderMicrotask(),Y.current&&z.animationState&&z.animationState.animateChanges())}),G.useEffect(()=>{z&&(!Y.current&&z.animationState&&z.animationState.animateChanges(),Y.current&&(queueMicrotask(()=>{var q;(q=window.MotionHandoffMarkAsComplete)==null||q.call(window,K)}),Y.current=!1),z.enteringChildren=void 0)}),z}function U5(a,l,o,r){const{layoutId:u,layout:h,drag:f,dragConstraints:m,layoutScroll:v,layoutRoot:p,layoutAnchor:b,layoutCrossfade:x}=l;a.projection=new o(a.latestValues,l["data-framer-portal-id"]?void 0:Hg(a.parent)),a.projection.setOptions({layoutId:u,layout:h,alwaysMeasureLayout:!!f||m&&fn(m),visualElement:a,animationType:typeof h=="string"?h:"both",initialPromotionConfig:r,crossfade:x,layoutScroll:v,layoutRoot:p,layoutAnchor:b})}function Hg(a){if(a)return a.options.allowProjection!==!1?a.projection:Hg(a.parent)}function ru(a,{forwardMotionProps:l=!1,type:o}={},r,u){r&&b5(r);const h=o?o==="svg":xf(a),f=h?B5:R5;function m(p,b){let x;const S={...G.useContext(vf),...p,layoutId:H5(p)},{isStatic:E}=S,z=M5(p),H=f(p,E);if(!E&&typeof window<"u"){L5();const U=K5(S);x=U.MeasureLayout,z.visualElement=V5(a,H,S,u,U.ProjectionNode,h)}return y.jsxs(jo.Provider,{value:z,children:[x&&z.visualElement?y.jsx(x,{visualElement:z.visualElement,...S}):null,w5(a,p,_5(H,z.visualElement,b),H,E,l,h)]})}m.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const v=G.forwardRef(m);return v[k5]=a,v}function H5({layoutId:a}){const l=G.useContext(qu).id;return l&&a!==void 0?l+"-"+a:a}function L5(a,l){G.useContext(Og).strict}function K5(a){const l=Rg(),{drag:o,layout:r}=l;if(!o&&!r)return{};const u={...o,...r};return{MeasureLayout:o!=null&&o.isEnabled(a)||r!=null&&r.isEnabled(a)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function G5(a,l){if(typeof Proxy>"u")return ru;const o=new Map,r=(h,f)=>ru(h,f,a,l),u=(h,f)=>r(h,f);return new Proxy(u,{get:(h,f)=>f==="create"?r:(o.has(f)||o.set(f,ru(f,void 0,a,l)),o.get(f))})}const J5=(a,l)=>l.isSVG??xf(a)?new bT(l):new hT(l,{allowProjection:a!==G.Fragment});class Y5 extends Wi{constructor(l){super(l),l.animationState||(l.animationState=MT(l))}updateAnimationControlsSubscription(){const{animate:l}=this.node.getProps();Mo(l)&&(this.unmountControls=l.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:l}=this.node.getProps(),{animate:o}=this.node.prevProps||{};l!==o&&this.updateAnimationControlsSubscription()}unmount(){var l;this.node.animationState.reset(),(l=this.unmountControls)==null||l.call(this)}}let q5=0;class X5 extends Wi{constructor(){super(...arguments),this.id=q5++,this.isExitComplete=!1}update(){var h;if(!this.node.presenceContext)return;const{isPresent:l,onExitComplete:o}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||l===r)return;if(l&&r===!1){if(this.isExitComplete){const{initial:f,custom:m}=this.node.getProps();if(typeof f=="string"){const v=Ea(this.node,f,m);if(v){const{transition:p,transitionEnd:b,...x}=v;for(const S in x)(h=this.node.getValue(S))==null||h.jump(x[S])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const u=this.node.animationState.setActive("exit",!l);o&&!l&&u.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:l,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),l&&(this.unmount=l(this.id))}unmount(){}}const P5={animation:{Feature:Y5},exit:{Feature:X5}};function wl(a){return{point:{x:a.pageX,y:a.pageY}}}const Q5=a=>l=>df(l)&&a(l,wl(l));function Tl(a,l,o,r){return jl(a,l,Q5(o),r)}const Lg=({current:a})=>a?a.ownerDocument.defaultView:null,L0=(a,l)=>Math.abs(a-l);function Z5(a,l){const o=L0(a.x,l.x),r=L0(a.y,l.y);return Math.sqrt(o**2+r**2)}const K0=new Set(["auto","scroll"]);class Kg{constructor(l,o,{transformPagePoint:r,contextWindow:u=window,dragSnapToOrigin:h=!1,distanceThreshold:f=3,element:m}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=E=>{this.handleScroll(E.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Is(this.lastRawMoveEventInfo,this.transformPagePoint));const E=cu(this.lastMoveEventInfo,this.history),z=this.startEvent!==null,H=Z5(E.offset,{x:0,y:0})>=this.distanceThreshold;if(!z&&!H)return;const{point:U}=E,{timestamp:K}=ne;this.history.push({...U,timestamp:K});const{onStart:Y,onMove:J}=this.handlers;z||(Y&&Y(this.lastMoveEvent,E),this.startEvent=this.lastMoveEvent),J&&J(this.lastMoveEvent,E)},this.handlePointerMove=(E,z)=>{this.lastMoveEvent=E,this.lastRawMoveEventInfo=z,this.lastMoveEventInfo=Is(z,this.transformPagePoint),Ot.update(this.updatePoint,!0)},this.handlePointerUp=(E,z)=>{this.end();const{onEnd:H,onSessionEnd:U,resumeAnimation:K}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&K&&K(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const Y=cu(E.type==="pointercancel"?this.lastMoveEventInfo:Is(z,this.transformPagePoint),this.history);this.startEvent&&H&&H(E,Y),U&&U(E,Y)},!df(l))return;this.dragSnapToOrigin=h,this.handlers=o,this.transformPagePoint=r,this.distanceThreshold=f,this.contextWindow=u||window;const v=wl(l),p=Is(v,this.transformPagePoint),{point:b}=p,{timestamp:x}=ne;this.history=[{...b,timestamp:x}];const{onSessionStart:S}=o;S&&S(l,cu(p,this.history)),this.removeListeners=Nl(Tl(this.contextWindow,"pointermove",this.handlePointerMove),Tl(this.contextWindow,"pointerup",this.handlePointerUp),Tl(this.contextWindow,"pointercancel",this.handlePointerUp)),m&&this.startScrollTracking(m)}startScrollTracking(l){let o=l.parentElement;for(;o;){const r=getComputedStyle(o);(K0.has(r.overflowX)||K0.has(r.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(l){const o=this.scrollPositions.get(l);if(!o)return;const r=l===window,u=r?{x:window.scrollX,y:window.scrollY}:{x:l.scrollLeft,y:l.scrollTop},h={x:u.x-o.x,y:u.y-o.y};h.x===0&&h.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=h.x,this.lastMoveEventInfo.point.y+=h.y):this.history.length>0&&(this.history[0].x-=h.x,this.history[0].y-=h.y),this.scrollPositions.set(l,u),Ot.update(this.updatePoint,!0))}updateHandlers(l){this.handlers=l}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Fi(this.updatePoint)}}function Is(a,l){return l?{point:l(a.point)}:a}function G0(a,l){return{x:a.x-l.x,y:a.y-l.y}}function cu({point:a},l){return{point:a,delta:G0(a,Gg(l)),offset:G0(a,F5(l)),velocity:W5(l,.1)}}function F5(a){return a[0]}function Gg(a){return a[a.length-1]}function W5(a,l){if(a.length<2)return{x:0,y:0};let o=a.length-1,r=null;const u=Gg(a);for(;o>=0&&(r=a[o],!(u.timestamp-r.timestamp>De(l)));)o--;if(!r)return{x:0,y:0};r===a[0]&&a.length>2&&u.timestamp-r.timestamp>De(l)*2&&(r=a[1]);const h=He(u.timestamp-r.timestamp);if(h===0)return{x:0,y:0};const f={x:(u.x-r.x)/h,y:(u.y-r.y)/h};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function $5(a,{min:l,max:o},r){return l!==void 0&&a<l?a=r?kt(l,a,r.min):Math.max(a,l):o!==void 0&&a>o&&(a=r?kt(o,a,r.max):Math.min(a,o)),a}function J0(a,l,o){return{min:l!==void 0?a.min+l:void 0,max:o!==void 0?a.max+o-(a.max-a.min):void 0}}function I5(a,{top:l,left:o,bottom:r,right:u}){return{x:J0(a.x,o,u),y:J0(a.y,l,r)}}function Y0(a,l){let o=l.min-a.min,r=l.max-a.max;return l.max-l.min<a.max-a.min&&([o,r]=[r,o]),{min:o,max:r}}function t3(a,l){return{x:Y0(a.x,l.x),y:Y0(a.y,l.y)}}function e3(a,l){let o=.5;const r=ue(a),u=ue(l);return u>r?o=Al(l.min,l.max-r,a.min):r>u&&(o=Al(a.min,a.max-u,l.min)),ti(0,1,o)}function i3(a,l){const o={};return l.min!==void 0&&(o.min=l.min-a.min),l.max!==void 0&&(o.max=l.max-a.min),o}const Vu=.35;function a3(a=Vu){return a===!1?a=0:a===!0&&(a=Vu),{x:q0(a,"left","right"),y:q0(a,"top","bottom")}}function q0(a,l,o){return{min:X0(a,l),max:X0(a,o)}}function X0(a,l){return typeof a=="number"?a:a[l]||0}const n3=new WeakMap;class l3{constructor(l){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ft(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=l}start(l,{snapToCursor:o=!1,distanceThreshold:r}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const h=x=>{o&&this.snapToCursor(wl(x).point),this.stopAnimation()},f=(x,S)=>{const{drag:E,dragPropagation:z,onDragStart:H}=this.getProps();if(E&&!z&&(this.openDragLock&&this.openDragLock(),this.openDragLock=OS(E),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),We(K=>{let Y=this.getAxisMotionValue(K).get()||0;if(Ie.test(Y)){const{projection:J}=this.visualElement;if(J&&J.layout){const _=J.layout.layoutBox[K];_&&(Y=ue(_)*(parseFloat(Y)/100))}}this.originPoint[K]=Y}),H&&Ot.update(()=>H(x,S),!1,!0),Du(this.visualElement,"transform");const{animationState:U}=this.visualElement;U&&U.setActive("whileDrag",!0)},m=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S;const{dragPropagation:E,dragDirectionLock:z,onDirectionLock:H,onDrag:U}=this.getProps();if(!E&&!this.openDragLock)return;const{offset:K}=S;if(z&&this.currentDirection===null){this.currentDirection=o3(K),this.currentDirection!==null&&H&&H(this.currentDirection);return}this.updateAxis("x",S.point,K),this.updateAxis("y",S.point,K),this.visualElement.render(),U&&Ot.update(()=>U(x,S),!1,!0)},v=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S,this.stop(x,S),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:b}=this.getProps();this.panSession=new Kg(l,{onSessionStart:h,onStart:f,onMove:m,onSessionEnd:v,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:b,distanceThreshold:r,contextWindow:Lg(this.visualElement),element:this.visualElement.current})}stop(l,o){const r=l||this.latestPointerEvent,u=o||this.latestPanInfo,h=this.isDragging;if(this.cancel(),!h||!u||!r)return;const{velocity:f}=u;this.startAnimation(f);const{onDragEnd:m}=this.getProps();m&&Ot.postRender(()=>m(r,u))}cancel(){this.isDragging=!1;const{projection:l,animationState:o}=this.visualElement;l&&(l.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(l,o,r){const{drag:u}=this.getProps();if(!r||!to(l,u,this.currentDirection))return;const h=this.getAxisMotionValue(l);let f=this.originPoint[l]+r[l];this.constraints&&this.constraints[l]&&(f=$5(f,this.constraints[l],this.elastic[l])),h.set(f)}resolveConstraints(){var h;const{dragConstraints:l,dragElastic:o}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(h=this.visualElement.projection)==null?void 0:h.layout,u=this.constraints;l&&fn(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&r?this.constraints=I5(r.layoutBox,l):this.constraints=!1,this.elastic=a3(o),u!==this.constraints&&!fn(l)&&r&&this.constraints&&!this.hasMutatedConstraints&&We(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=i3(r.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:l,onMeasureDragConstraints:o}=this.getProps();if(!l||!fn(l))return!1;const r=l.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const h=oT(r,u.root,this.visualElement.getTransformPagePoint());let f=t3(u.layout.layoutBox,h);if(o){const m=o(nT(f));this.hasMutatedConstraints=!!m,m&&(f=cg(m))}return f}startAnimation(l){const{drag:o,dragMomentum:r,dragElastic:u,dragTransition:h,dragSnapToOrigin:f,onDragTransitionEnd:m}=this.getProps(),v=this.constraints||{},p=We(b=>{if(!to(b,o,this.currentDirection))return;let x=v&&v[b]||{};(f===!0||f===b)&&(x={min:0,max:0});const S=u?200:1e6,E=u?40:1e7,z={type:"inertia",velocity:r?l[b]:0,bounceStiffness:S,bounceDamping:E,timeConstant:750,restDelta:1,restSpeed:10,...h,...x};return this.startAxisValueAnimation(b,z)});return Promise.all(p).then(m)}startAxisValueAnimation(l,o){const r=this.getAxisMotionValue(l);return Du(this.visualElement,l),r.start(of(l,r,0,o,this.visualElement,!1))}stopAnimation(){We(l=>this.getAxisMotionValue(l).stop())}getAxisMotionValue(l){const o=`_drag${l.toUpperCase()}`,r=this.visualElement.getProps(),u=r[o];return u||this.visualElement.getValue(l,(r.initial?r.initial[l]:void 0)||0)}snapToCursor(l){We(o=>{const{drag:r}=this.getProps();if(!to(o,r,this.currentDirection))return;const{projection:u}=this.visualElement,h=this.getAxisMotionValue(o);if(u&&u.layout){const{min:f,max:m}=u.layout.layoutBox[o],v=h.get()||0;h.set(l[o]-kt(f,m,.5)+v)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:l,dragConstraints:o}=this.getProps(),{projection:r}=this.visualElement;if(!fn(o)||!r||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};We(f=>{const m=this.getAxisMotionValue(f);if(m&&this.constraints!==!1){const v=m.get();u[f]=e3({min:v,max:v},this.constraints[f])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),We(f=>{if(!to(f,l,null))return;const m=this.getAxisMotionValue(f),{min:v,max:p}=this.constraints[f];m.set(kt(v,p,u[f]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;n3.set(this.visualElement,this);const l=this.visualElement.current,o=Tl(l,"pointerdown",p=>{const{drag:b,dragListener:x=!0}=this.getProps(),S=p.target,E=S!==l&&US(S);b&&x&&!E&&this.start(p)});let r;const u=()=>{const{dragConstraints:p}=this.getProps();fn(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),r||(r=s3(l,p.current,()=>this.scalePositionWithinConstraints())))},{projection:h}=this.visualElement,f=h.addEventListener("measure",u);h&&!h.layout&&(h.root&&h.root.updateScroll(),h.updateLayout()),Ot.read(u);const m=jl(window,"resize",()=>this.scalePositionWithinConstraints()),v=h.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:b})=>{this.isDragging&&b&&(We(x=>{const S=this.getAxisMotionValue(x);S&&(this.originPoint[x]+=p[x].translate,S.set(S.get()+p[x].translate))}),this.visualElement.render())}));return()=>{m(),o(),f(),v&&v(),r&&r()}}getProps(){const l=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:r=!1,dragPropagation:u=!1,dragConstraints:h=!1,dragElastic:f=Vu,dragMomentum:m=!0}=l;return{...l,drag:o,dragDirectionLock:r,dragPropagation:u,dragConstraints:h,dragElastic:f,dragMomentum:m}}}function P0(a){let l=!0;return()=>{if(l){l=!1;return}a()}}function s3(a,l,o){const r=t0(a,P0(o)),u=t0(l,P0(o));return()=>{r(),u()}}function to(a,l,o){return(l===!0||l===a)&&(o===null||o===a)}function o3(a,l=10){let o=null;return Math.abs(a.y)>l?o="y":Math.abs(a.x)>l&&(o="x"),o}class r3 extends Wi{constructor(l){super(l),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new l3(l)}mount(){const{dragControls:l}=this.node.getProps();l&&(this.removeGroupControls=l.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}update(){const{dragControls:l}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};l!==o&&(this.removeGroupControls(),l&&(this.removeGroupControls=l.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const uu=a=>(l,o)=>{a&&Ot.update(()=>a(l,o),!1,!0)};class c3 extends Wi{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(l){this.session=new Kg(l,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Lg(this.node)})}createPanHandlers(){const{onPanSessionStart:l,onPanStart:o,onPan:r,onPanEnd:u}=this.node.getProps();return{onSessionStart:uu(l),onStart:uu(o),onMove:uu(r),onEnd:(h,f)=>{delete this.session,u&&Ot.postRender(()=>u(h,f))}}}mount(){this.removePointerDownListener=Tl(this.node.current,"pointerdown",l=>this.onPointerDown(l))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let fu=!1;class u3 extends G.Component{componentDidMount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:r,layoutId:u}=this.props,{projection:h}=l;h&&(o.group&&o.group.add(h),r&&r.register&&u&&r.register(h),fu&&h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),co.hasEverUpdated=!0}getSnapshotBeforeUpdate(l){const{layoutDependency:o,visualElement:r,drag:u,isPresent:h}=this.props,{projection:f}=r;return f&&(f.isPresent=h,l.layoutDependency!==o&&f.setOptions({...f.options,layoutDependency:o}),fu=!0,u||l.layoutDependency!==o||o===void 0||l.isPresent!==h?f.willUpdate():this.safeToRemove(),l.isPresent!==h&&(h?f.promote():f.relegate()||Ot.postRender(()=>{const m=f.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:l,layoutAnchor:o}=this.props,{projection:r}=l;r&&(r.options.layoutAnchor=o,r.root.didUpdate(),ff.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:r}=this.props,{projection:u}=l;fu=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),r&&r.deregister&&r.deregister(u))}safeToRemove(){const{safeToRemove:l}=this.props;l&&l()}render(){return null}}function Jg(a){const[l,o]=zg(),r=G.useContext(qu);return y.jsx(u3,{...a,layoutGroup:r,switchLayoutGroup:G.useContext(Ug),isPresent:l,safeToRemove:o})}const f3={pan:{Feature:c3},drag:{Feature:r3,ProjectionNode:wg,MeasureLayout:Jg}};function Q0(a,l,o){const{props:r}=a;a.animationState&&r.whileHover&&a.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,h=r[u];h&&Ot.postRender(()=>h(l,wl(l)))}class d3 extends Wi{mount(){const{current:l}=this.node;l&&(this.unmount=BS(l,(o,r)=>(Q0(this.node,r,"Start"),u=>Q0(this.node,u,"End"))))}unmount(){}}class h3 extends Wi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let l=!1;try{l=this.node.current.matches(":focus-visible")}catch{l=!0}!l||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Nl(jl(this.node.current,"focus",()=>this.onFocus()),jl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Z0(a,l,o){const{props:r}=a;if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;a.animationState&&r.whileTap&&a.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),h=r[u];h&&Ot.postRender(()=>h(l,wl(l)))}class m3 extends Wi{mount(){const{current:l}=this.node;if(!l)return;const{globalTapTarget:o,propagate:r}=this.node.props;this.unmount=LS(l,(u,h)=>(Z0(this.node,h,"Start"),(f,{success:m})=>Z0(this.node,f,m?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Uu=new WeakMap,du=new WeakMap,y3=a=>{const l=Uu.get(a.target);l&&l(a)},p3=a=>{a.forEach(y3)};function g3({root:a,...l}){const o=a||document;du.has(o)||du.set(o,{});const r=du.get(o),u=JSON.stringify(l);return r[u]||(r[u]=new IntersectionObserver(p3,{root:a,...l})),r[u]}function v3(a,l,o){const r=g3(l);return Uu.set(a,o),r.observe(a),()=>{Uu.delete(a),r.unobserve(a)}}const b3={some:0,all:1};class x3 extends Wi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var v;(v=this.stopObserver)==null||v.call(this);const{viewport:l={}}=this.node.getProps(),{root:o,margin:r,amount:u="some",once:h}=l,f={root:o?o.current:void 0,rootMargin:r,threshold:typeof u=="number"?u:b3[u]},m=p=>{const{isIntersecting:b}=p;if(this.isInView===b||(this.isInView=b,h&&!b&&this.hasEnteredView))return;b&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",b);const{onViewportEnter:x,onViewportLeave:S}=this.node.getProps(),E=b?x:S;E&&E(p)};this.stopObserver=v3(this.node.current,f,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:l,prevProps:o}=this.node;["amount","margin","root"].some(S3(l,o))&&this.startObserver()}unmount(){var l;(l=this.stopObserver)==null||l.call(this),this.hasEnteredView=!1,this.isInView=!1}}function S3({viewport:a={}},{viewport:l={}}={}){return o=>a[o]!==l[o]}const T3={inView:{Feature:x3},tap:{Feature:m3},focus:{Feature:h3},hover:{Feature:d3}},A3={layout:{ProjectionNode:wg,MeasureLayout:Jg}},M3={...P5,...T3,...f3,...A3},ba=G5(M3,J5),E3=({song:a,onBack:l,onOpenSettings:o,isFavorite:r,onToggleFavorite:u,globalFontSize:h,globalFontFamily:f,setFontSize:m,setCurrentFont:v})=>{var J;const[p,b]=G.useState(!0),[x,S]=G.useState(!1),E=G.useMemo(()=>a.lyrics.split(/\n\n+/).filter(_=>_.trim().length>0),[a.lyrics]),z=_=>{const q=/^([০-৯]+|ধুয়া|ধ্রুব|Chorus|ধুয়া|অন্তরা)[:ঃ]?\s*(.*)/s,I=_.trim().match(q);return I?{marker:I[1],content:I[2].trim()}:{marker:null,content:_.trim()}},H=G.useMemo(()=>E.some(_=>z(_).marker!==null),[E]),U=()=>b(_=>!_),K=(_,q=!1)=>{const I=_.match(/^(.*?)\s*\((.*)\)$/);return I?y.jsxs(y.Fragment,{children:[I[1],y.jsxs("span",{className:`block md:inline ${q?"md:ml-3":"ml-1.5"} text-[0.75em] italic font-medium text-slate-400 font-sans tracking-tight opacity-90`,children:["(",I[2],")"]})]}):_},Y=(_,q)=>{_.stopPropagation();const I=`https://www.youtube.com/watch?v=${q}`,Z=`vnd.youtube:${q}`,F=Date.now();window.location.href=Z,setTimeout(()=>{Date.now()-F<1500&&window.open(I,"_blank")},500)};return y.jsxs("div",{className:"min-h-screen bg-[var(--bg-main)] font-bengali pb-24 relative transition-colors duration-300",style:{fontFamily:f},children:[y.jsx("header",{className:"bg-[var(--bg-card)]/80 backdrop-blur-xl border-b border-[var(--border-color)] sticky top-0 left-0 right-0 z-50 shadow-sm shadow-slate-200/5",style:{paddingTop:"env(safe-area-inset-top)"},children:y.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-1.5 flex items-center justify-between relative min-h-[56px]",children:[y.jsx("button",{onClick:l,className:"p-2.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-2xl transition-all active:scale-90 z-10 shrink-0","aria-label":"Back",children:y.jsx(Kb,{className:"w-6 h-6"})}),y.jsx("div",{className:"flex-1 flex items-center px-4 overflow-hidden",children:y.jsxs("div",{className:"flex items-center gap-3 w-full",children:[y.jsx("div",{className:"w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center border border-emerald-100/50 dark:border-emerald-800/30 shrink-0",children:y.jsx("span",{className:"text-sm font-black text-emerald-600 dark:text-emerald-500 font-sans",children:Qi(a.id)})}),y.jsx("div",{className:"min-w-0 flex-1",children:y.jsx("h1",{className:"text-[17px] font-bold text-[var(--text-main)] leading-tight line-clamp-2",children:K(a.title)})})]})}),y.jsx("button",{onClick:u,className:`p-2.5 rounded-2xl transition-all active:scale-90 z-10 shrink-0 ${r?"bg-rose-50 dark:bg-rose-900/20 text-rose-500":"bg-slate-50 dark:bg-slate-800 text-slate-300 dark:text-slate-600"}`,"aria-label":"Toggle Favorite",children:y.jsx(Aa,{className:`w-6 h-6 ${r?"fill-current":""}`})})]})}),y.jsxs("main",{onClick:U,className:"max-w-3xl mx-auto px-4 pt-6 pb-4 md:pt-8 md:pb-6 text-center cursor-pointer min-h-screen",children:[y.jsxs("div",{className:"mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700",children:[y.jsx("h1",{className:"text-[20px] md:text-[28px] font-black text-[var(--text-main)] leading-[1.2] mb-6 tracking-tight",children:K(a.title,!0)}),y.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[a.composer&&y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Yu,{className:"w-3 h-3 text-slate-300 dark:text-slate-500"}),y.jsx("span",{className:"text-xs font-bold text-slate-400 dark:text-slate-400 tracking-tight",children:a.composer})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Ju,{className:"w-3 h-3 text-emerald-500"}),y.jsx("span",{className:"text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest",children:(a.categories||[]).join(", ")})]})]})]}),y.jsx("div",{className:"space-y-4",children:E.map((_,q)=>{const{marker:I,content:Z}=z(_),F=I==="ধুয়া"||I==="ধুয়া"||I==="Chorus"||I==="অন্তরা"||I==="ধ্রুব",lt=I||(!H&&E.length>1&&q>0?Qi(q+1):null);return y.jsxs("div",{className:"flex flex-col items-center group animate-in fade-in duration-1000",style:{animationDelay:`${q*100}ms`},children:[lt&&y.jsx("div",{className:`mb-3 font-black transition-colors duration-500 ${F?"text-rose-400 italic":"text-emerald-500/50 dark:text-emerald-500/30"}`,style:{fontSize:`${Math.max(14,h*.75)}px`},children:lt}),y.jsx("div",{className:"w-full",children:y.jsx("p",{className:`leading-[1.9] font-medium whitespace-pre-wrap transition-all duration-500 mx-auto max-w-[90%] md:max-w-[80%] text-[var(--text-main)] opacity-90 ${F?"italic":""}`,style:{fontSize:`${h}px`},children:Z})})]},q)})}),y.jsxs("div",{className:"mt-4 mb-4 flex items-center justify-center gap-4 opacity-20 select-none animate-in fade-in duration-1000 delay-700",children:[y.jsx("div",{className:"h-px w-16 bg-gradient-to-r from-transparent to-slate-400"}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{className:"w-1 h-1 rounded-full bg-slate-500"}),y.jsx("div",{className:"w-3 h-3 rotate-45 border-2 border-slate-500 rounded-sm"}),y.jsx("div",{className:"w-1 h-1 rounded-full bg-slate-500"})]}),y.jsx("div",{className:"h-px w-16 bg-gradient-to-l from-transparent to-slate-400"})]})]}),y.jsx("div",{className:`fixed bottom-8 left-0 right-0 z-40 px-6 pointer-events-none transition-all duration-500 transform ${p?"translate-y-0 opacity-100":"translate-y-24 opacity-0"}`,children:y.jsx("div",{className:"max-w-3xl mx-auto flex items-center justify-end pointer-events-auto",children:y.jsxs("div",{className:"flex items-center gap-1.5 p-1.5 bg-[var(--bg-card)]/95 backdrop-blur-2xl rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--border-color)]",children:[y.jsxs("button",{onClick:_=>{_.stopPropagation(),l()},className:"p-2.5 text-slate-400 dark:text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-all active:scale-90 flex items-center gap-1.5 pr-3",title:"সূচী",children:[y.jsx(Gu,{className:"w-5 h-5"}),y.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest hidden sm:inline",children:"সূচী"})]}),y.jsx("div",{className:"w-px h-6 bg-[var(--border-color)] mx-0"}),y.jsxs("button",{onClick:_=>{_.stopPropagation(),S(!0)},className:"p-2.5 text-slate-400 dark:text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-all active:scale-90 flex items-center gap-1.5 pr-3",title:"সেটিংস",children:[y.jsx(uo,{className:"w-5 h-5"}),y.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest hidden sm:inline",children:"সেটিংস"})]}),a.youtubeId&&y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"w-px h-6 bg-[var(--border-color)] mx-0"}),y.jsx("button",{onClick:_=>Y(_,a.youtubeId),className:"p-2.5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-full transition-all active:scale-90",title:"Watch on YouTube",children:y.jsx(ap,{className:"w-5 h-5"})})]})]})})}),y.jsx(xo,{children:x&&y.jsxs(ba.div,{initial:{opacity:0,scale:.8,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8,y:20},transition:{type:"spring",damping:25,stiffness:350},className:"fixed bottom-24 right-6 w-[180px] z-[70] font-bengali",children:[y.jsx("button",{onClick:()=>S(!1),className:"absolute -top-2 -right-2 p-1.5 bg-[var(--bg-card)] border border-[var(--border-color)] text-slate-400 hover:text-rose-500 rounded-full shadow-lg transition-all active:scale-90 z-10",children:y.jsx(ip,{className:"w-3.5 h-3.5"})}),y.jsx("div",{className:"bg-[var(--bg-card)]/95 border border-[var(--border-color)] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3.5 space-y-4",children:y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"space-y-1.5",children:[y.jsxs("div",{className:"flex items-center justify-between px-0.5",children:[y.jsx("span",{className:"text-[9px] font-black text-slate-400 uppercase tracking-wider",children:"আকার"}),y.jsx("span",{className:"text-[9px] font-black text-emerald-600",children:Qi(h)})]}),y.jsx("div",{className:"flex items-center gap-2",children:y.jsx("input",{type:"range",min:"15",max:"32",value:h,onChange:_=>m(parseInt(_.target.value)),className:"flex-grow h-1 bg-slate-100 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"})})]}),y.jsxs("div",{className:"space-y-1.5",children:[y.jsx("span",{className:"text-[9px] font-black text-slate-400 uppercase tracking-wider px-0.5",children:"ফন্ট"}),y.jsxs("div",{className:"relative",children:[y.jsx("select",{value:((J=yn.find(_=>_.family===f))==null?void 0:J.id)||"noto",onChange:_=>{const q=yn.find(I=>I.id===_.target.value);q&&v(q.family)},className:"w-full pl-2 pr-6 py-1.5 rounded-lg border border-[var(--border-color)] bg-slate-50/50 dark:bg-slate-800/50 text-[var(--text-main)] font-bengali text-[11px] appearance-none focus:ring-1 focus:ring-emerald-500 outline-none cursor-pointer",style:{fontFamily:f},children:yn.map(_=>y.jsx("option",{value:_.id,className:"bg-[var(--bg-card)] text-[var(--text-main)]",style:{fontFamily:_.family},children:_.name},_.id))}),y.jsx("div",{className:"absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300 dark:text-slate-600",children:y.jsx(xa,{className:"w-3 h-3 rotate-90"})})]})]})]})})]})})]})},j3=({className:a})=>{const[l,o]=Ku.useState(!1);return y.jsxs("div",{className:`relative group ${a}`,children:[y.jsx("div",{className:"absolute -inset-4 bg-emerald-600/10 blur-2xl rounded-sm opacity-50"}),y.jsx("div",{className:"relative border-4 border-[var(--bg-card)] shadow-xl overflow-hidden bg-slate-50 dark:bg-slate-800 rounded-sm inline-block",children:l?y.jsxs("div",{className:"flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 p-8 text-center space-y-4",children:[y.jsx("div",{className:"w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center",children:y.jsx(Yu,{className:"w-8 h-8 opacity-40"})}),y.jsx("p",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500",children:"চিত্র পাওয়া যায়নি"})]}):y.jsx("img",{src:"https://i.postimg.cc/tJNKMtB4/portrait.jpg",alt:"স্বর্গীয় বিভু রঞ্জন সরকার",referrerPolicy:"no-referrer",className:"max-w-full h-auto grayscale brightness-[1.05] dark:brightness-[0.8] hover:grayscale-0 transition-all duration-700 block",onError:()=>o(!0)})})]})},Yi=({icon:a,title:l,desc:o})=>y.jsxs("div",{className:"flex gap-4 items-start group",children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300",children:a}),y.jsxs("div",{className:"space-y-1",children:[y.jsx("h4",{className:"text-sm font-black text-[var(--text-main)] tracking-tight",children:l}),y.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium",children:o})]})]}),Yg=()=>y.jsxs("div",{className:"max-w-4xl mx-auto p-4 pt-6 space-y-6 animate-in fade-in duration-1000 font-bengali pb-32",children:[y.jsxs("div",{className:"bg-[var(--bg-card)] p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-[var(--border-color)] flex flex-col items-center text-center space-y-8",children:[y.jsx("h3",{className:"text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-2",children:"উৎসর্গ"}),y.jsx(j3,{className:""}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("p",{className:"text-2xl font-black text-[var(--text-main)]",children:"স্বর্গীয় বিভু রঞ্জন সরকার"}),y.jsx("p",{className:"text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider",children:"জন্ম : ১লা আগস্ট ১৯২৮ — নিদ্রিত : ৩০শে ডিসেম্বর ১৯৮৫"})]}),y.jsx("p",{className:"text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-sm mx-auto font-medium",children:"আমাদের পিতৃব্য স্বর্গীয় বিভু রঞ্জন সরকার মহাশয়ের স্মরণার্থে ‘জয়ধ্বনি’ অ্যাপটি উৎসর্গীকৃত।"})]}),y.jsxs("div",{className:"flex items-center gap-4 text-emerald-600/10",children:[y.jsx(Aa,{className:"w-6 h-6 fill-current"}),y.jsx(Aa,{className:"w-6 h-6 fill-current"})]})]}),y.jsxs("div",{className:"bg-[var(--bg-card)] p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-[var(--border-color)] flex flex-col items-center text-center space-y-6",children:[y.jsx("h3",{className:"text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-2",children:"ভূমিকা"}),y.jsxs("div",{className:"space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-2xl",children:[y.jsx("p",{className:"text-emerald-600 dark:text-emerald-500 font-bold italic text-lg border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/30 dark:bg-emerald-900/10 rounded-r-xl",children:"সব গৌরব, প্রশংসা ও স্তুতি কেবল আমাদের প্রেমময় পিতা ঈশ্বর ও ত্রাণকর্তা প্রভু যীশু খ্রীষ্টেরই প্রাপ্য।"}),y.jsx("p",{className:"text-[15px]",children:"১৯৬৪ সালে ভ্রাতা বিভু রঞ্জন সরকার মহাশয়ের প্রচেষ্টায় 'জয়ধ্বনি' গীত পুস্তকটি প্রথম প্রকাশিত হয়। দীর্ঘ কয়েক দশক ধরে এই সংকলনটি খ্রীষ্টীয় আরাধনায় এক বিশেষ ভূমিকা পালন করে আসছে। সেই ঐতিহ্যকে আধুনিক প্রজন্মের কাছে পৌঁছে দিতে এবং ডিজিটাল মাধ্যমে এর ব্যবহার সহজতর করতে এই অ্যাপটি নির্মাণ করা হয়েছে। আমাদের প্রার্থনা, পশ্চিমবঙ্গ ও বাংলাদেশের সকল বাংলা মণ্ডলী যেন এই ডিজিটাল সংস্করণের মাধ্যমে উপকৃত হন।"})]})]}),y.jsxs("div",{className:"bg-[var(--bg-card)] p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-[var(--border-color)] flex flex-col items-center text-center space-y-8",children:[y.jsxs("div",{className:"w-full flex flex-col items-center space-y-2",children:[y.jsx("h3",{className:"text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-2",children:"অ্যাপের প্রধান বৈশিষ্ট্যসমূহ"}),y.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full",children:[y.jsx(Ry,{className:"w-3 h-3 text-slate-500"}),y.jsx("span",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest",children:"সংস্করণ ১.০ • ১১ এপ্রিল ২০২৬"})]})]}),y.jsxs("div",{className:"grid gap-8 sm:grid-cols-2 text-left w-full",children:[y.jsx(Yi,{icon:y.jsx(sx,{className:"w-5 h-5"}),title:"বিশাল ভাণ্ডার",desc:"৪৫০ টিরও বেশি ঐতিহ্যবাহী স্তোত্রগান এবং সমকালীন কোরাস গানের সংগ্রহ। নিয়মিতভাবে নতুন গান সংযোজন করা হচ্ছে।"}),y.jsx(Yi,{icon:y.jsx(ep,{className:"w-5 h-5"}),title:"উন্নত অনুসন্ধান (Search)",desc:"গান নম্বর, শিরোনাম বা গানের কলি দিয়ে খোঁজার পাশাপাশি ইংরেজি হরফে বাংলা লিখেও (Phonetic Search) গান খুঁজে পাওয়া সম্ভব।"}),y.jsx(Yi,{icon:y.jsx(tp,{className:"w-5 h-5"}),title:"ভয়েস সার্চ",desc:"দ্রুত গান খোঁজার জন্য এতে যুক্ত করা হয়েছে বাংলা ভয়েস রিকগনিশন সুবিধা।"}),y.jsx(Yi,{icon:y.jsx(Aa,{className:"w-5 h-5"}),title:"ব্যক্তিগতকরণ",desc:"আপনার প্রিয় গানগুলো আলাদাভাবে 'Favorites' তালিকায় সংরক্ষণ করার সুবিধা।"}),y.jsx(Yi,{icon:y.jsx(Sx,{className:"w-5 h-5"}),title:"সহজ পঠনযোগ্যতা ও ডার্ক মোড",desc:"পড়ার সুবিধার্থে ফন্টের আকার পরিবর্তন, বিভিন্ন বাংলা ফন্ট এবং চোখের আরামের জন্য ডার্ক মোড (Dark Mode) সুবিধা।"}),y.jsx(Yi,{icon:y.jsx(ap,{className:"w-5 h-5"}),title:"মাল্টিমিডিয়া সংযোগ",desc:"অনেক গানের সাথে সরাসরি ইউটিউব (YouTube) লিঙ্ক যুক্ত করা হয়েছে যাতে গানটি শোনার সুবিধা পাওয়া যায়।"}),y.jsx(Yi,{icon:y.jsx(dx,{className:"w-5 h-5"}),title:"অফলাইন সুবিধা",desc:"এটি একটি প্রগ্রেসিভ ওয়েব অ্যাপ (PWA), যা মোবাইল বা ডেক্সটপে ইনস্টল করা যায় এবং অফলাইনেও গান ও লিরিক্স দেখা সম্ভব।"}),y.jsx(Yi,{icon:y.jsx(Ry,{className:"w-5 h-5"}),title:"সংস্করণ ১.০",desc:"সর্বশেষ আপডেট: ১১ এপ্রিল ২০২৬। নিয়মিতভাবে নতুন গান ও ফিচার সংযোজন করা হচ্ছে।"})]})]}),y.jsxs("div",{className:"bg-[var(--bg-card)] p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-[var(--border-color)] flex flex-col items-center text-center space-y-6",children:[y.jsx("h3",{className:"text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-2",children:"বিশেষত্ব"}),y.jsxs("div",{className:"space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-2xl",children:[y.jsx("p",{className:"text-[15px]",children:"‘জয়ধ্বনি’ অ্যাপটির অন্যতম প্রধান বিশেষত্ব হলো এর ব্যবহারকারী-বান্ধব ইন্টারফেস এবং নির্ভুল বাংলা লিরিক্স। এটি কেবল একটি গান দেখার মাধ্যম নয়, বরং মণ্ডলীর আরাধনায় সহায়তার জন্য একটি পূর্ণাঙ্গ ডিজিটাল সরঞ্জাম।"}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",children:[y.jsxs("div",{className:"p-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100/50 dark:border-emerald-800/30 text-left",children:[y.jsx("h5",{className:"font-bold text-emerald-700 dark:text-emerald-400 mb-1",children:"নির্ভুলতা"}),y.jsx("p",{className:"text-xs opacity-80",children:"মূল গীত পুস্তকের সাথে সামঞ্জস্য রেখে প্রতিটি গানের বানান ও যতিচিহ্ন যাচাই করা হয়েছে।"})]}),y.jsxs("div",{className:"p-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100/50 dark:border-emerald-800/30 text-left",children:[y.jsx("h5",{className:"font-bold text-emerald-700 dark:text-emerald-400 mb-1",children:"গতি ও সাবলীলতা"}),y.jsx("p",{className:"text-xs opacity-80",children:"অত্যন্ত হালকা ও দ্রুতগতির হওয়ায় যেকোনো স্মার্টফোনে এটি অনায়াসেই ব্যবহার করা যায়।"})]})]})]})]}),y.jsxs("div",{className:"bg-emerald-600 p-6 md:p-8 rounded-3xl shadow-xl shadow-emerald-200/40 text-white flex flex-col items-center text-center space-y-5",children:[y.jsx("h3",{className:"text-xl font-bold text-white border-b-2 border-white/20 pb-2",children:"যোগাযোগ"}),y.jsx("p",{className:"text-lg font-medium opacity-90 leading-relaxed max-w-md",children:"আপনার কোনো পরামর্শ থাকলে বা নতুন কোনো গান যুক্ত করতে চাইলে আমাদের সাথে যোগাযোগ করতে পারেন।"}),y.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 space-y-1",children:[y.jsx("p",{className:"text-sm font-bold",children:"গীত পুস্তকের হার্ডকপি সংগ্রহ করতে:"}),y.jsxs("p",{className:"text-xl font-black",children:["১৫০ টাকা ",y.jsx("span",{className:"text-sm font-normal opacity-70",children:"+ ডাক খরচ (প্রযোজ্য ক্ষেত্রে)"})]}),y.jsx("p",{className:"text-[10px] uppercase tracking-tighter opacity-50 pt-1",children:"Physical copy: Rs. 150 + postage (if applicable)"})]}),y.jsx("div",{className:"pt-2",children:y.jsxs("a",{href:"mailto:souravsircar@gmail.com",className:"inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-100 text-emerald-600 dark:text-emerald-700 rounded-2xl font-bold text-sm hover:bg-emerald-50 dark:hover:bg-white transition-colors shadow-lg shadow-black/5",children:[y.jsx($b,{className:"w-4 h-4"}),"souravsircar@gmail.com"]})})]}),y.jsxs("div",{className:"text-center pt-8 space-y-4",children:[y.jsxs("div",{className:"flex items-center justify-center gap-2 text-slate-200 dark:text-slate-700",children:[y.jsx(Yb,{className:"w-4 h-4"}),y.jsx("div",{className:"h-px w-12 bg-slate-100 dark:bg-slate-800"}),y.jsx(ux,{className:"w-4 h-4"})]}),y.jsxs("p",{className:"text-[10px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-[0.4em]",children:["Digital Signature Verified • ",Qi("২০২৬")]})]})]}),Hu=({className:a})=>y.jsxs("svg",{viewBox:"0 0 1024 1024",fill:"none",className:a,xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("path",{d:"M512 0C128 0 0 128 0 512s128 512 512 512 512-128 512-512S896 0 512 0z",fill:"#358C5D"}),y.jsxs("g",{transform:"translate(162, 212)",children:[y.jsx("path",{d:"M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z",fill:"#E2E8F0",transform:"translate(10, 15)"}),y.jsx("path",{d:"M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z",fill:"#E2E8F0",transform:"translate(10, 15)"}),y.jsx("path",{d:"M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z",fill:"white"}),y.jsx("path",{d:"M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z",fill:"white"}),y.jsx("rect",{x:"347",y:"60",width:"6",height:"480",rx:"3",fill:"#CBD5E1",opacity:"0.5"}),y.jsxs("g",{transform:"translate(110, 63)",children:[y.jsx("rect",{x:"78",y:"0",width:"42",height:"265",fill:"#358C5D"}),y.jsx("rect",{x:"0",y:"65",width:"198",height:"42",fill:"#358C5D"})]}),y.jsxs("g",{transform:"translate(378, 228)",children:[y.jsx("rect",{width:"140",height:"22",rx:"11",fill:"#3C4E5E"}),y.jsx("rect",{y:"38",width:"140",height:"22",rx:"11",fill:"#3C4E5E"}),y.jsx("rect",{y:"76",width:"80",height:"22",rx:"11",fill:"#3C4E5E"})]}),y.jsxs("g",{transform:"translate(463, 223)",children:[y.jsx("rect",{x:"70",y:"0",width:"18",height:"180",rx:"9",fill:"#4CAF50"}),y.jsx("path",{d:"M79 9 C130 9 150 60 150 120 C150 140 140 155 130 160",stroke:"#4CAF50",strokeWidth:"18",strokeLinecap:"round",fill:"none"}),y.jsxs("g",{transform:"translate(45, 180)",children:[y.jsx("circle",{cx:"0",cy:"0",r:"45",fill:"#4CAF50"}),y.jsx("path",{d:"M0 -45 A45 45 0 0 0 0 45 Z",fill:"#2D8A5B"})]})]})]})]}),N3=({songs:a,favorites:l,categories:o,onSelectSong:r,onToggleFavorite:u})=>{const[h,f]=G.useState("main"),[m,v]=G.useState(null),p=a.filter(x=>l.includes(x.id)),b=m?a.filter(x=>(x.categories||[]).includes(m)):[];return h==="favorites"?y.jsxs("div",{className:"space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4",children:[y.jsx("header",{className:"flex flex-col items-center gap-2 mb-4",children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("button",{onClick:()=>f("main"),className:"p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors",children:y.jsx(xa,{className:"w-5 h-5 rotate-180"})}),y.jsx("h2",{className:"text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-1.5 font-bengali",children:"প্রিয় গানসমূহ"})]})}),p.length>0?y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",children:p.map(x=>y.jsx(mu,{song:x,isFavorite:!0,onToggleFavorite:S=>u(S,x.id),onClick:()=>r(x)},x.id))}):y.jsxs("div",{className:"py-20 text-center text-slate-400 font-medium flex flex-col items-center gap-4",children:[y.jsx(Aa,{className:"w-12 h-12 opacity-20"}),y.jsx("p",{className:"font-bengali",children:"এখনও কোনো গান প্রিয় তালিকায় যুক্ত করা হয়নি।"})]})]}):h==="category"&&m?y.jsxs("div",{className:"space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4",children:[y.jsx("header",{className:"flex flex-col items-center gap-2 mb-4",children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("button",{onClick:()=>{f("main"),v(null)},className:"p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors",children:y.jsx(xa,{className:"w-5 h-5 rotate-180"})}),y.jsx("h2",{className:"text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-1.5 font-bengali",children:m})]})}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",children:b.map(x=>y.jsx(mu,{song:x,isFavorite:l.includes(x.id),onToggleFavorite:S=>u(S,x.id),onClick:()=>r(x)},x.id))})]}):y.jsxs("div",{className:"space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4",children:[y.jsx("div",{className:"flex items-center justify-center mb-4",children:y.jsx("h2",{className:"text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-1.5 font-bengali",children:"সংগ্রহ"})}),y.jsxs("section",{className:"space-y-3",children:[y.jsx("h3",{className:"text-xs font-black text-slate-400 uppercase tracking-widest px-2",children:"সংরক্ষিত"}),y.jsxs("button",{onClick:()=>f("favorites"),className:"w-full bg-[var(--bg-card)] p-4 rounded-3xl border border-[var(--border-color)] text-left hover:border-rose-200 dark:hover:border-rose-900/50 hover:shadow-xl hover:shadow-rose-500/5 transition-all group active:scale-[0.98] flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"p-3 bg-rose-50 dark:bg-rose-900/20 rounded-2xl text-rose-500 group-hover:scale-110 transition-transform",children:y.jsx(Aa,{className:"w-5 h-5"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-bold text-[var(--text-main)] font-bengali group-hover:text-rose-600 transition-colors",children:"প্রিয় গানসমূহ"}),y.jsxs("p",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5",children:[Qi(l.length)," টি গান"]})]})]}),y.jsx(xa,{className:"w-5 h-5 text-slate-300 dark:text-slate-700"})]})]}),y.jsxs("section",{className:"space-y-3",children:[y.jsx("h3",{className:"text-xs font-black text-slate-400 uppercase tracking-widest px-2",children:"বিষয়ভিত্তিক বিভাগ"}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:o.map(x=>y.jsxs("button",{onClick:()=>{v(x.name),f("category")},className:"w-full bg-[var(--bg-card)] p-4 rounded-3xl border border-[var(--border-color)] text-left hover:border-emerald-200 dark:hover:border-emerald-900/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group active:scale-[0.98] flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-500 group-hover:scale-110 transition-transform",children:y.jsx(Ju,{className:"w-5 h-5"})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-bold text-[var(--text-main)] font-bengali group-hover:text-emerald-600 transition-colors",children:x.name}),y.jsxs("p",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5",children:[Qi(x.count)," টি গান"]})]})]}),y.jsx(xa,{className:"w-5 h-5 text-slate-300 dark:text-slate-700"})]},x.name))})]})]})},D3=({fontSize:a,setFontSize:l,currentFont:o,setCurrentFont:r,isDarkMode:u,setIsDarkMode:h,onBack:f})=>{var p;const[m,v]=Ku.useState(!1);return m?y.jsxs("div",{className:"min-h-screen bg-[var(--bg-main)] transition-colors duration-300",children:[y.jsxs("header",{className:"sticky top-0 z-50 bg-[var(--bg-card)]/80 backdrop-blur-xl border-b border-[var(--border-color)] px-4 py-4 flex items-center gap-4",children:[y.jsx("button",{onClick:()=>v(!1),className:"p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors",children:y.jsx(Hb,{className:"w-6 h-6"})}),y.jsx("h2",{className:"text-xl font-bold text-[var(--text-main)] font-bengali",children:"তথ্য ও পরিচিতি"})]}),y.jsx(Yg,{})]}):y.jsxs("div",{className:"max-w-2xl mx-auto p-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32",children:[y.jsx("div",{className:"flex items-center justify-center mb-4",children:y.jsx("h2",{className:"text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-1.5 font-bengali",children:"সেটিংস"})}),y.jsxs("section",{className:"space-y-3",children:[y.jsx("h3",{className:"text-xs font-black text-slate-400 uppercase tracking-widest px-2",children:"অ্যাপের চেহারা"}),y.jsxs("div",{className:"bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-sm",children:[y.jsxs("div",{className:"p-4 border-b border-[var(--border-color)] space-y-3",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500 font-black text-lg font-bengali",children:"ক"}),y.jsx("span",{className:"font-bold text-[var(--text-main)] font-bengali",children:"অ্যাপের অক্ষরের আকার"})]}),y.jsxs("div",{className:"flex items-center gap-4 px-2",children:[y.jsx("span",{className:"text-sm text-slate-400 font-bold font-bengali",children:"ক"}),y.jsx("input",{type:"range",min:"15",max:"32",value:a,onChange:b=>l(parseInt(b.target.value)),className:"flex-grow h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"}),y.jsx("span",{className:"text-xl text-slate-400 font-bold font-bengali",children:"ক"})]}),y.jsx("p",{className:"text-[10px] text-slate-400 font-medium px-2 font-bengali",children:"* এটি গানের লিরিক্স এবং অ্যাপের অন্যান্য লেখার আকার পরিবর্তন করবে।"})]}),y.jsxs("div",{className:"p-4 border-b border-[var(--border-color)] space-y-3",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-500 font-black text-lg font-bengali",children:"অ"}),y.jsx("span",{className:"font-bold text-[var(--text-main)] font-bengali",children:"বাংলা ফন্ট পরিবর্তন"})]}),y.jsxs("div",{className:"relative",children:[y.jsx("select",{value:((p=yn.find(b=>b.family===o))==null?void 0:p.id)||"noto",onChange:b=>{const x=yn.find(S=>S.id===b.target.value);x&&r(x.family)},className:"w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] font-bengali appearance-none focus:ring-2 focus:ring-emerald-500 outline-none",style:{fontFamily:o},children:yn.map(b=>y.jsx("option",{value:b.id,className:"bg-[var(--bg-card)] text-[var(--text-main)]",style:{fontFamily:b.family},children:b.name},b.id))}),y.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400",children:y.jsx(xa,{className:"w-5 h-5 rotate-90"})})]}),y.jsx("div",{className:"text-center p-4 bg-[var(--bg-main)] rounded-2xl border border-dashed border-[var(--border-color)] text-[var(--text-main)] transition-all",style:{fontFamily:o,fontSize:`${a}px`,lineHeight:1.6},children:"ঈশ্বর আমাদের আশ্রয় ও বল, সংকটে অতিশয় সুপ্রাপ্য সাহায্য।"})]}),y.jsxs("div",{className:"p-4 flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500",children:u?y.jsx(nx,{className:"w-5 h-5"}):y.jsx(vx,{className:"w-5 h-5"})}),y.jsx("span",{className:"font-bold text-[var(--text-main)] font-bengali",children:"ডার্ক মোড (Dark Mode)"})]}),y.jsx("button",{onClick:()=>h(!u),className:`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${u?"bg-emerald-500":"bg-slate-200 dark:bg-slate-700"}`,children:y.jsx("div",{className:`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${u?"translate-x-6":"translate-x-0"}`})})]})]})]}),y.jsxs("section",{className:"space-y-3",children:[y.jsx("h3",{className:"text-xs font-black text-slate-400 uppercase tracking-widest px-2",children:"মতামত ও রেটিং"}),y.jsx("div",{className:"bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-sm",children:y.jsxs("button",{onClick:()=>window.open("https://play.google.com/store/apps/details?id=com.jayadhani.app","_blank"),className:"w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group text-left",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500",children:y.jsx(px,{className:"w-5 h-5 fill-current"})}),y.jsxs("div",{className:"flex flex-col items-start",children:[y.jsx("span",{className:"font-bold text-[var(--text-main)] font-bengali",children:"অ্যাপটি রেট করুন"}),y.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-wider",children:"প্লে-স্টোরে আপনার মতামত দিন"})]})]}),y.jsx(xa,{className:"w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors"})]})})]})]})},C3=({onComplete:a})=>{const[l,o]=G.useState(!0);return G.useEffect(()=>{const r=setTimeout(()=>{o(!1),setTimeout(a,1e3)},2500);return()=>clearTimeout(r)},[a]),y.jsx(xo,{children:l&&y.jsxs(ba.div,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.8,ease:"easeInOut"},className:"fixed inset-0 z-[100] bg-[var(--bg-card)] flex flex-col items-center justify-center",children:[y.jsxs(ba.div,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{duration:1,ease:[.16,1,.3,1],delay:.2},className:"relative",children:[y.jsx(ba.div,{animate:{scale:[1,1.2,1],opacity:[.2,.4,.2]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"absolute inset-0 bg-emerald-400 blur-3xl rounded-full"}),y.jsx(Hu,{className:"w-32 h-32 relative z-10 shadow-2xl rounded-[2rem] overflow-hidden"})]}),y.jsxs(ba.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.8,duration:.6},className:"mt-8 text-center",children:[y.jsx("h1",{className:"text-4xl font-black text-emerald-600 font-logo tracking-tight leading-none",children:"জয়ধ্বনি"}),y.jsx("p",{className:"text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mt-3",children:"বাংলা খ্রীষ্টিয় সংগীত"})]}),y.jsx("div",{className:"absolute bottom-16 w-48 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden",children:y.jsx(ba.div,{initial:{x:"-100%"},animate:{x:"0%"},transition:{duration:2,ease:"easeInOut"},className:"w-full h-full bg-emerald-500"})})]})})},gl=[...W0,...wb].map(a=>{let l=[];return Array.isArray(a.categories)?l=a.categories:typeof a.categories=="string"?l=[a.categories]:a.category&&(l=[a.category]),{...a,categories:l}}),eo=({active:a,onClick:l,icon:o,label:r})=>y.jsxs("button",{onClick:l,className:`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${a?"bg-[var(--bg-card)] text-emerald-600 dark:text-emerald-500 shadow-sm":"text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50"}`,children:[o,y.jsx("span",{children:r})]}),w3=()=>{const[a,l]=G.useState(!0),[o,r]=G.useState("home"),[u,h]=G.useState(null),[f,m]=G.useState(""),[v,p]=G.useState(!1),[b,x]=G.useState("number"),[S,E]=G.useState(()=>{const X=localStorage.getItem("jayadhani_lyrics_font_size");return X?Math.max(15,parseInt(X,10)):typeof window<"u"&&window.innerWidth>=768?24:20}),[z,H]=G.useState(()=>localStorage.getItem("jayadhani_font_family")||'"Noto Serif Bengali", "Hind Siliguri", serif'),[U,K]=G.useState(()=>localStorage.getItem("jayadhani_dark_mode")==="true"),[Y,J]=G.useState(()=>{try{const X=localStorage.getItem("jayadhani_favs");return X?JSON.parse(X):[]}catch{return[]}}),_=G.useRef(null);G.useEffect(()=>{localStorage.setItem("jayadhani_lyrics_font_size",S.toString()),document.documentElement.style.setProperty("--lyrics-font-size",`${S}px`);const X=S/20,at=Math.max(14,Math.min(20,16*X));document.documentElement.style.setProperty("--system-font-size",`${at}px`);const N=Math.max(16,Math.min(24,18*X));document.documentElement.style.setProperty("--index-font-size",`${N}px`)},[S]),G.useEffect(()=>{localStorage.setItem("jayadhani_font_family",z),document.documentElement.style.setProperty("--current-font-family",z)},[z]),G.useEffect(()=>{localStorage.setItem("jayadhani_dark_mode",U.toString()),U?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[U]),G.useEffect(()=>{if(!window.history.state)window.history.replaceState({view:"home"},"");else{const at=window.history.state;if(at.view==="song"){const N=gl.find(L=>L.id===at.songId);N&&h(N)}else at.view==="tab"&&r(at.tab)}const X=at=>{const N=at.state;if(N)if(N.view==="song"){const L=gl.find(Q=>Q.id===N.songId);h(L||null)}else N.view==="tab"?(h(null),r(N.tab)):N.view==="home"&&(h(null),r("home"))};return window.addEventListener("popstate",X),()=>window.removeEventListener("popstate",X)},[]),G.useEffect(()=>{const X=L=>{L.preventDefault()},at=L=>{(L.ctrlKey&&(L.key==="c"||L.key==="x"||L.key==="u"||L.key==="s"||L.key==="p"||L.key==="a")||L.key==="F12"||L.ctrlKey&&L.shiftKey&&(L.key==="I"||L.key==="J"||L.key==="C"))&&L.preventDefault()},N=L=>{L.preventDefault()};return document.addEventListener("contextmenu",X),document.addEventListener("keydown",at),document.addEventListener("copy",N),document.addEventListener("cut",N),()=>{document.removeEventListener("contextmenu",X),document.removeEventListener("keydown",at),document.removeEventListener("copy",N),document.removeEventListener("cut",N)}},[]),G.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[o,u]),G.useEffect(()=>{localStorage.setItem("jayadhani_favs",JSON.stringify(Y))},[Y]);const q=G.useMemo(()=>{const X={};return gl.forEach(at=>{(at.categories||[]).forEach(N=>{X[N]=(X[N]||0)+1})}),Object.entries(X).map(([at,N])=>({name:at,count:N}))},[]),I=G.useMemo(()=>{const X=f.toLowerCase().trim();let at=[...gl];if(X){const N={"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"},L=X.split("").map(ot=>N[ot]||ot).join(""),Q=/^[a-z0-9\s]+$/i.test(X),rt=X.replace(/\s/g,"").replace(/v/g,"bh").replace(/ph/g,"f").replace(/ee/g,"i").replace(/oo/g,"u").replace(/z/g,"j");at=at.filter(ot=>{const A=ot.title.toLowerCase();return ot.id.toString().startsWith(L)||A.includes(X)||ot.lyrics.toLowerCase().includes(X)?!0:Q?ot.transliteration&&ot.transliteration.toLowerCase().replace(/\s/g,"").includes(rt)?!0:jx(ot.title).replace(/\s/g,"").includes(rt):!1})}return b==="alphabetical"?at.sort((N,L)=>N.title.localeCompare(L.title,"bn")):at.sort((N,L)=>N.id-L.id)},[f,b]),Z=(X,at)=>{X&&X.stopPropagation(),J(N=>N.includes(at)?N.filter(L=>L!==at):[...N,at])},F=()=>{var X;m(""),(X=_.current)==null||X.focus()},lt=()=>{const X=window.SpeechRecognition||window.webkitSpeechRecognition;if(!X){alert("আপনার ব্রাউজার ভয়েস সার্চ সমর্থন করে না।");return}const at=new X;at.lang="bn-IN",at.continuous=!1,at.interimResults=!1,at.onstart=()=>p(!0),at.onend=()=>p(!1),at.onerror=()=>p(!1),at.onresult=N=>{const L=N.results[0][0].transcript;m(L)},at.start()};G.useEffect(()=>{},[o]);const W=X=>{X===o&&!u||(window.history.pushState({view:"tab",tab:X},""),r(X),h(null))},ht=X=>{window.history.pushState({view:"song",songId:X.id},""),h(X)},xt=()=>{window.history.length>1?window.history.back():(o!=="home"&&r("home"),h(null))};if(u)return y.jsx(E3,{song:u,onBack:xt,onOpenSettings:()=>{},isFavorite:Y.includes(u.id),onToggleFavorite:()=>Z(void 0,u.id),globalFontSize:S,globalFontFamily:z,setFontSize:E,setCurrentFont:H});const Qt=()=>o==="settings"?y.jsx(D3,{fontSize:S,setFontSize:E,currentFont:z,setCurrentFont:H,isDarkMode:U,setIsDarkMode:K}):o==="info"?y.jsx("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500",children:y.jsx(Yg,{})}):o==="collection"&&!f?y.jsx(N3,{songs:gl,favorites:Y,categories:q,onSelectSong:ht,onToggleFavorite:Z}):y.jsxs("div",{className:"space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4",children:[y.jsxs("div",{className:"flex items-center justify-between mb-4",children:[y.jsx("h2",{className:"text-xl font-bold text-slate-800 dark:text-slate-200 border-b-2 border-emerald-500/20 pb-1.5 font-bengali",children:f?"অনুসন্ধানের ফলাফল":"সূচী"}),y.jsxs("button",{onClick:()=>x(X=>X==="number"?"alphabetical":"number"),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all font-bengali",children:[b==="number"?y.jsx(Vb,{className:"w-4 h-4"}):y.jsx(Xb,{className:"w-4 h-4"}),y.jsx("span",{children:b==="number"?"বর্ণানুক্রমিক":"নম্বর অনুযায়ী"})]})]}),I.length>0?y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:I.map(X=>y.jsx("div",{className:"song-card-item","data-id":X.id,"data-title":X.title,children:y.jsx(mu,{song:X,isFavorite:Y.includes(X.id),onToggleFavorite:at=>Z(at,X.id),onClick:()=>ht(X),showCategory:o!=="home"})},X.id))}):y.jsxs("div",{className:"py-20 text-center text-slate-400 font-medium flex flex-col items-center gap-4",children:[y.jsx(mx,{className:"w-8 h-8 opacity-20"}),"গান খুঁজে পাওয়া যায়নি।"]})]});return y.jsxs(Ex,{activeTab:o,setActiveTab:W,children:[y.jsx(xo,{mode:"wait",children:a&&y.jsx(C3,{onComplete:()=>l(!1)},"splash")}),y.jsxs("header",{className:"bg-[var(--bg-card)] border-b border-[var(--border-color)] sticky top-0 z-30 pb-2 transition-colors",style:{paddingTop:"calc(1rem + env(safe-area-inset-top))"},children:[y.jsxs("div",{className:"px-6 py-2 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 relative",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx(Hu,{className:"w-12 h-12 shadow-lg rounded-[1.1rem] overflow-hidden shrink-0"}),y.jsxs("div",{className:"flex flex-col justify-between h-12 py-0.5 items-center",children:[y.jsx("h1",{className:"text-4xl font-black text-brand font-logo tracking-tight leading-none",children:"জয়ধ্বনি"}),y.jsx("p",{className:"text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em]",children:"বাংলা খ্রীষ্টিয় সংগীত"})]})]}),y.jsxs("div",{className:"hidden md:flex items-center gap-1 bg-slate-50 dark:bg-slate-800 p-1 rounded-2xl border border-slate-100 dark:border-slate-700",children:[y.jsx(eo,{active:o==="home",onClick:()=>W("home"),icon:y.jsx(Gu,{className:"w-4 h-4"}),label:"সূচী"}),y.jsx(eo,{active:o==="collection",onClick:()=>W("collection"),icon:y.jsx(I0,{className:"w-4 h-4"}),label:"সংগ্রহ"}),y.jsx(eo,{active:o==="settings",onClick:()=>W("settings"),icon:y.jsx(uo,{className:"w-4 h-4"}),label:"সেটিংস"}),y.jsx(eo,{active:o==="info",onClick:()=>W("info"),icon:y.jsx(hu,{className:"w-4 h-4"}),label:"তথ্য"})]})]}),o!=="settings"&&y.jsx("div",{className:"px-4 pt-2 max-w-6xl mx-auto",children:y.jsxs("div",{className:"relative group",children:[y.jsx("div",{className:"absolute left-4 inset-y-0 flex items-center pointer-events-none",children:y.jsx(ep,{className:"w-4 h-4 text-slate-300 dark:text-slate-600 group-focus-within:text-emerald-500 transition-colors"})}),y.jsx("input",{ref:_,type:"text",placeholder:"গানের নাম বা নম্বর দিয়ে খুঁজুন...",className:"w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2 pl-12 pr-10 rounded-xl text-sm font-medium outline-none focus:border-emerald-300 dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-900 transition-all font-bengali text-[var(--text-main)]",value:f,onChange:X=>m(X.target.value)}),y.jsxs("div",{className:"absolute right-4 inset-y-0 flex items-center gap-1",children:[y.jsxs("div",{className:"relative",children:[y.jsx(xo,{children:v&&y.jsx(ba.div,{initial:{scale:.8,opacity:0},animate:{scale:1.5,opacity:.3},exit:{scale:.8,opacity:0},transition:{repeat:1/0,duration:1,ease:"easeInOut"},className:"absolute inset-0 bg-rose-500 rounded-full"})}),y.jsx("button",{onClick:lt,className:`relative p-1.5 rounded-lg transition-all z-10 ${v?"bg-rose-500 text-white shadow-lg shadow-rose-500/30":"text-slate-300 dark:text-slate-600 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"}`,"aria-label":"Voice search",title:"ভয়েস সার্চ",children:v?y.jsx(tx,{className:"w-5 h-5"}):y.jsx(tp,{className:"w-5 h-5"})})]}),f&&y.jsx("button",{onClick:F,className:"p-1.5 text-slate-300 dark:text-slate-600 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-all animate-in fade-in zoom-in duration-200","aria-label":"Clear search",children:y.jsx(ip,{className:"w-5 h-5"})})]})]})})]}),y.jsx("main",{className:"max-w-6xl mx-auto py-6 font-bengali",children:Qt()}),y.jsx("footer",{className:"hidden md:block max-w-6xl mx-auto px-6 py-8 border-t border-[var(--border-color)] mt-12",children:y.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx(Hu,{className:"w-8 h-8 opacity-50 grayscale"}),y.jsxs("p",{className:"text-xs font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest",children:["জয়ধ্বনি © ",Qi("২০২৬")]})]}),y.jsxs("div",{className:"flex items-center gap-6",children:[y.jsxs("button",{onClick:()=>W("info"),className:"text-xs font-bold text-slate-400 dark:text-slate-300 hover:text-emerald-600 transition-colors uppercase tracking-widest flex items-center gap-2",children:[y.jsx(hu,{className:"w-4 h-4"}),"তথ্য ও পরিচিতি"]}),y.jsxs("button",{onClick:()=>W("settings"),className:"text-xs font-bold text-slate-400 dark:text-slate-300 hover:text-emerald-600 transition-colors uppercase tracking-widest flex items-center gap-2",children:[y.jsx(uo,{className:"w-4 h-4"}),"সেটিংস"]})]})]})})]})},z3="modulepreload",O3=function(a){return"/"+a},F0={},R3=function(l,o,r){let u=Promise.resolve();if(o&&o.length>0){let f=function(p){return Promise.all(p.map(b=>Promise.resolve(b).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),v=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));u=f(o.map(p=>{if(p=O3(p),p in F0)return;F0[p]=!0;const b=p.endsWith(".css"),x=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const S=document.createElement("link");if(S.rel=b?"stylesheet":z3,b||(S.as="script"),S.crossOrigin="",S.href=p,v&&S.setAttribute("nonce",v),document.head.appendChild(S),b)return new Promise((E,z)=>{S.addEventListener("load",E),S.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${p}`)))})}))}function h(f){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=f,window.dispatchEvent(m),!m.defaultPrevented)throw f}return u.then(f=>{for(const m of f||[])m.status==="rejected"&&h(m.reason);return l().catch(h)})};function B3(a={}){const{immediate:l=!1,onNeedRefresh:o,onOfflineReady:r,onRegistered:u,onRegisteredSW:h,onRegisterError:f}=a;let m,v;const p=async(x=!0)=>{await v};async function b(){if("serviceWorker"in navigator){if(m=await R3(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:x}},[]).then(({Workbox:x})=>new x("/sw.js",{scope:"/",type:"classic"})).catch(x=>{f==null||f(x)}),!m)return;m.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),m.addEventListener("installed",x=>{x.isUpdate||r==null||r()}),m.register({immediate:l}).then(x=>{h?h("/sw.js",x):u==null||u(x)}).catch(x=>{f==null||f(x)})}}return v=b(),p}B3({immediate:!0});const qg=document.getElementById("root");if(!qg)throw new Error("Could not find root element to mount to");const k3=Eb.createRoot(qg);k3.render(y.jsx(Ku.StrictMode,{children:y.jsx(w3,{})}));
