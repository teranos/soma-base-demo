function Yv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Kv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lm={exports:{}},kl={},Dm={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),Zv=Symbol.for("react.portal"),Qv=Symbol.for("react.fragment"),Jv=Symbol.for("react.strict_mode"),ex=Symbol.for("react.profiler"),tx=Symbol.for("react.provider"),nx=Symbol.for("react.context"),ix=Symbol.for("react.forward_ref"),rx=Symbol.for("react.suspense"),sx=Symbol.for("react.memo"),ax=Symbol.for("react.lazy"),gh=Symbol.iterator;function ox(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Um=Object.assign,Fm={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Im}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=Is.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Im}var nf=tf.prototype=new Om;nf.constructor=tf;Um(nf,Is.prototype);nf.isPureReactComponent=!0;var vh=Array.isArray,km=Object.prototype.hasOwnProperty,rf={current:null},Bm={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!Bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fa,type:t,key:s,ref:a,props:r,_owner:rf.current}}function lx(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function cx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xh=/\/+/g;function dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cx(""+t.key):e.toString(36)}function zo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Fa:case Zv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+dc(a,0):i,vh(r)?(n="",t!=null&&(n=t.replace(xh,"$&/")+"/"),zo(r,e,n,"",function(c){return c})):r!=null&&(sf(r)&&(r=lx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+dc(s,o);a+=zo(s,e,n,l,r)}else if(l=ox(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+dc(s,o++),a+=zo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ka(t,e,n){if(t==null)return t;var i=[],r=0;return zo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ux(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Ho={transition:null},dx={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:rf};function Hm(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Is;ke.Fragment=Qv;ke.Profiler=ex;ke.PureComponent=tf;ke.StrictMode=Jv;ke.Suspense=rx;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx;ke.act=Hm;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Um({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=rf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)km.call(e,l)&&!Bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:a}};ke.createContext=function(t){return t={$$typeof:nx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tx,_context:t},t.Consumer=t};ke.createElement=zm;ke.createFactory=function(t){var e=zm.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:ix,render:t}};ke.isValidElement=sf;ke.lazy=function(t){return{$$typeof:ax,_payload:{_status:-1,_result:t},_init:ux}};ke.memo=function(t,e){return{$$typeof:sx,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ho.transition;Ho.transition={};try{t()}finally{Ho.transition=e}};ke.unstable_act=Hm;ke.useCallback=function(t,e){return Wt.current.useCallback(t,e)};ke.useContext=function(t){return Wt.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};ke.useEffect=function(t,e){return Wt.current.useEffect(t,e)};ke.useId=function(){return Wt.current.useId()};ke.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Wt.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};ke.useRef=function(t){return Wt.current.useRef(t)};ke.useState=function(t){return Wt.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Wt.current.useTransition()};ke.version="18.3.1";Dm.exports=ke;var q=Dm.exports;const Vm=Kv(q),fx=Yv({__proto__:null,default:Vm},[q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx=q,px=Symbol.for("react.element"),mx=Symbol.for("react.fragment"),gx=Object.prototype.hasOwnProperty,vx=hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xx={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)gx.call(e,i)&&!xx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:px,type:t,key:s,ref:a,props:r,_owner:vx.current}}kl.Fragment=mx;kl.jsx=Gm;kl.jsxs=Gm;Lm.exports=kl;var g=Lm.exports,gu={},Wm={exports:{}},pn={},jm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Z){var Q=L.length;L.push(Z);e:for(;0<Q;){var oe=Q-1>>>1,j=L[oe];if(0<r(j,Z))L[oe]=Z,L[Q]=j,Q=oe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Z=L[0],Q=L.pop();if(Q!==Z){L[0]=Q;e:for(var oe=0,j=L.length,Oe=j>>>1;oe<Oe;){var X=2*(oe+1)-1,ne=L[X],ue=X+1,de=L[ue];if(0>r(ne,Q))ue<j&&0>r(de,ne)?(L[oe]=de,L[ue]=Q,oe=ue):(L[oe]=ne,L[X]=Q,oe=X);else if(ue<j&&0>r(de,Q))L[oe]=de,L[ue]=Q,oe=ue;else break e}}return Z}function r(L,Z){var Q=L.sortIndex-Z.sortIndex;return Q!==0?Q:L.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=L)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function w(L){if(S=!1,x(L),!_)if(n(l)!==null)_=!0,G(R);else{var Z=n(c);Z!==null&&J(w,Z.startTime-L)}}function R(L,Z){_=!1,S&&(S=!1,u(P),P=-1),m=!0;var Q=f;try{for(x(Z),h=n(l);h!==null&&(!(h.expirationTime>Z)||L&&!T());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var j=oe(h.expirationTime<=Z);Z=t.unstable_now(),typeof j=="function"?h.callback=j:h===n(l)&&i(l),x(Z)}else i(l);h=n(l)}if(h!==null)var Oe=!0;else{var X=n(c);X!==null&&J(w,X.startTime-Z),Oe=!1}return Oe}finally{h=null,f=Q,m=!1}}var C=!1,M=null,P=-1,O=5,y=-1;function T(){return!(t.unstable_now()-y<O)}function V(){if(M!==null){var L=t.unstable_now();y=L;var Z=!0;try{Z=M(!0,L)}finally{Z?z():(C=!1,M=null)}}else C=!1}var z;if(typeof v=="function")z=function(){v(V)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,te=$.port2;$.port1.onmessage=V,z=function(){te.postMessage(null)}}else z=function(){p(V,0)};function G(L){M=L,C||(C=!0,z())}function J(L,Z){P=p(function(){L(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var Q=f;f=Z;try{return L()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=f;f=L;try{return Z()}finally{f=Q}},t.unstable_scheduleCallback=function(L,Z,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,L){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=Q+j,L={id:d++,callback:Z,priorityLevel:L,startTime:Q,expirationTime:j,sortIndex:-1},Q>oe?(L.sortIndex=Q,e(c,L),n(l)===null&&L===n(c)&&(S?(u(P),P=-1):S=!0,J(w,Q-oe))):(L.sortIndex=j,e(l,L),_||m||(_=!0,G(R))),L},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(L){var Z=f;return function(){var Q=f;f=Z;try{return L.apply(this,arguments)}finally{f=Q}}}})(Xm);jm.exports=Xm;var _x=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=q,hn=_x;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qm=new Set,ga={};function Lr(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(ga[t]=e,t=0;t<e.length;t++)qm.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,Sx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_h={},yh={};function Mx(t){return vu.call(yh,t)?!0:vu.call(_h,t)?!1:Sx.test(t)?yh[t]=!0:(_h[t]=!0,!1)}function Ex(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wx(t,e,n,i){if(e===null||typeof e>"u"||Ex(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(af,of);It[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(af,of);It[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(af,of);It[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wx(e,n,r,i)&&(n=null),i||r===null?Mx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),yu=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),Sh=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=Sh&&t[Sh]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,fc;function na(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var hc=!1;function pc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function Tx(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=pc(t.type,!1),t;case 11:return t=pc(t.type.render,!1),t;case 1:return t=pc(t.type,!0),t;default:return""}}function Su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Qr:return"Portal";case xu:return"Profiler";case cf:return"StrictMode";case _u:return"Suspense";case yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ym:return(t.displayName||"Context")+".Consumer";case $m:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case df:return e=t.displayName||null,e!==null?e:Su(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return Su(t(e))}catch{}}return null}function Ax(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(e);case 8:return e===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cx(t){var e=Zm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qa(t){t._valueTracker||(t._valueTracker=Cx(t))}function Qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mu(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jm(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function Eu(t,e){Jm(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&wu(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Eh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wu(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(ia(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function eg(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Th(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bx=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){bx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function ig(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function rg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ig(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Rx=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(t,e){if(e){if(Rx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pu=null,fs=null,hs=null;function Ah(t){if(t=Ba(t)){if(typeof Pu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Gl(e),Pu(t.stateNode,t.type,e))}}function sg(t){fs?hs?hs.push(t):hs=[t]:fs=t}function ag(){if(fs){var t=fs,e=hs;if(hs=fs=null,Ah(t),e)for(t=0;t<e.length;t++)Ah(e[t])}}function og(t,e){return t(e)}function lg(){}var mc=!1;function cg(t,e,n){if(mc)return t(e,n);mc=!0;try{return og(t,e,n)}finally{mc=!1,(fs!==null||hs!==null)&&(lg(),ag())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Nu=!1;if(pi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Nu=!1}function Px(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var la=!1,al=null,ol=!1,Lu=null,Nx={onError:function(t){la=!0,al=t}};function Lx(t,e,n,i,r,s,a,o,l){la=!1,al=null,Px.apply(Nx,arguments)}function Dx(t,e,n,i,r,s,a,o,l){if(Lx.apply(this,arguments),la){if(la){var c=al;la=!1,al=null}else throw Error(re(198));ol||(ol=!0,Lu=c)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(Dr(t)!==t)throw Error(re(188))}function Ix(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ch(r),t;if(s===i)return Ch(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function dg(t){return t=Ix(t),t!==null?fg(t):null}function fg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fg(t);if(e!==null)return e;t=t.sibling}return null}var hg=hn.unstable_scheduleCallback,bh=hn.unstable_cancelCallback,Ux=hn.unstable_shouldYield,Fx=hn.unstable_requestPaint,vt=hn.unstable_now,Ox=hn.unstable_getCurrentPriorityLevel,hf=hn.unstable_ImmediatePriority,pg=hn.unstable_UserBlockingPriority,ll=hn.unstable_NormalPriority,kx=hn.unstable_LowPriority,mg=hn.unstable_IdlePriority,Bl=null,Yn=null;function Bx(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Vx,zx=Math.log,Hx=Math.LN2;function Vx(t){return t>>>=0,t===0?32:31-(zx(t)/Hx|0)|0}var eo=64,to=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ra(o):(s&=a,s!==0&&(i=ra(s)))}else a=n&~r,a!==0?i=ra(a):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function Gx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Gx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Du(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gg(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function jx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function vg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xg,mf,_g,yg,Sg,Iu=!1,no=[],ki=null,Bi=null,zi=null,_a=new Map,ya=new Map,Li=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function qx(t,e,n,i,r){switch(e){case"focusin":return ki=Gs(ki,t,e,n,i,r),!0;case"dragenter":return Bi=Gs(Bi,t,e,n,i,r),!0;case"mouseover":return zi=Gs(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,Gs(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Gs(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function Mg(t){var e=vr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=ug(n),e!==null){t.blockedOn=e,Sg(t.priority,function(){_g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ru=i,n.target.dispatchEvent(i),Ru=null}else return e=Ba(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ph(t,e,n){Vo(t)&&n.delete(e)}function $x(){Iu=!1,ki!==null&&Vo(ki)&&(ki=null),Bi!==null&&Vo(Bi)&&(Bi=null),zi!==null&&Vo(zi)&&(zi=null),_a.forEach(Ph),ya.forEach(Ph)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Iu||(Iu=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,$x)))}function Sa(t){function e(r){return Ws(r,t)}if(0<no.length){Ws(no[0],t);for(var n=1;n<no.length;n++){var i=no[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Ws(ki,t),Bi!==null&&Ws(Bi,t),zi!==null&&Ws(zi,t),_a.forEach(e),ya.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)Mg(n),n.blockedOn===null&&Li.shift()}var ps=Si.ReactCurrentBatchConfig,ul=!0;function Yx(t,e,n,i){var r=Qe,s=ps.transition;ps.transition=null;try{Qe=1,gf(t,e,n,i)}finally{Qe=r,ps.transition=s}}function Kx(t,e,n,i){var r=Qe,s=ps.transition;ps.transition=null;try{Qe=4,gf(t,e,n,i)}finally{Qe=r,ps.transition=s}}function gf(t,e,n,i){if(ul){var r=Uu(t,e,n,i);if(r===null)Ac(t,e,i,dl,n),Rh(t,i);else if(qx(r,t,e,n,i))i.stopPropagation();else if(Rh(t,i),e&4&&-1<Xx.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&xg(s),s=Uu(t,e,n,i),s===null&&Ac(t,e,i,dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ac(t,e,i,null,n)}}var dl=null;function Uu(t,e,n,i){if(dl=null,t=ff(i),t=vr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function Eg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ox()){case hf:return 1;case pg:return 4;case ll:case kx:return 16;case mg:return 536870912;default:return 16}default:return 16}}var Ui=null,vf=null,Go=null;function wg(){if(Go)return Go;var t,e=vf,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Go=r.slice(t,1<i?1-i:void 0)}function Wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function Nh(){return!1}function mn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?io:Nh,this.isPropagationStopped=Nh,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xf=mn(Us),ka=ft({},Us,{view:0,detail:0}),Zx=mn(ka),vc,xc,js,zl=ft({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(vc=t.screenX-js.screenX,xc=t.screenY-js.screenY):xc=vc=0,js=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Lh=mn(zl),Qx=ft({},zl,{dataTransfer:0}),Jx=mn(Qx),e_=ft({},ka,{relatedTarget:0}),_c=mn(e_),t_=ft({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),n_=mn(t_),i_=ft({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),r_=mn(i_),s_=ft({},Us,{data:0}),Dh=mn(s_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l_[t])?!!e[t]:!1}function _f(){return c_}var u_=ft({},ka,{key:function(t){if(t.key){var e=a_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_f,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d_=mn(u_),f_=ft({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=mn(f_),h_=ft({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_f}),p_=mn(h_),m_=ft({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),g_=mn(m_),v_=ft({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=mn(v_),__=[9,13,27,32],yf=pi&&"CompositionEvent"in window,ca=null;pi&&"documentMode"in document&&(ca=document.documentMode);var y_=pi&&"TextEvent"in window&&!ca,Tg=pi&&(!yf||ca&&8<ca&&11>=ca),Uh=" ",Fh=!1;function Ag(t,e){switch(t){case"keyup":return __.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function S_(t,e){switch(t){case"compositionend":return Cg(e);case"keypress":return e.which!==32?null:(Fh=!0,Uh);case"textInput":return t=e.data,t===Uh&&Fh?null:t;default:return null}}function M_(t,e){if(es)return t==="compositionend"||!yf&&Ag(t,e)?(t=wg(),Go=vf=Ui=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var E_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!E_[t.type]:e==="textarea"}function bg(t,e,n,i){sg(i),e=fl(e,"onChange"),0<e.length&&(n=new xf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Ma=null;function w_(t){Bg(t,0)}function Hl(t){var e=is(t);if(Qm(e))return t}function T_(t,e){if(t==="change")return e}var Rg=!1;if(pi){var yc;if(pi){var Sc="oninput"in document;if(!Sc){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),Sc=typeof kh.oninput=="function"}yc=Sc}else yc=!1;Rg=yc&&(!document.documentMode||9<document.documentMode)}function Bh(){ua&&(ua.detachEvent("onpropertychange",Pg),Ma=ua=null)}function Pg(t){if(t.propertyName==="value"&&Hl(Ma)){var e=[];bg(e,Ma,t,ff(t)),cg(w_,e)}}function A_(t,e,n){t==="focusin"?(Bh(),ua=e,Ma=n,ua.attachEvent("onpropertychange",Pg)):t==="focusout"&&Bh()}function C_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ma)}function b_(t,e){if(t==="click")return Hl(e)}function R_(t,e){if(t==="input"||t==="change")return Hl(e)}function P_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:P_;function Ea(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hh(t,e){var n=zh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zh(n)}}function Ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function Sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function N_(t){var e=Lg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ng(n.ownerDocument.documentElement,n)){if(i!==null&&Sf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hh(n,s);var a=Hh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var L_=pi&&"documentMode"in document&&11>=document.documentMode,ts=null,Fu=null,da=null,Ou=!1;function Vh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||ts==null||ts!==sl(i)||(i=ts,"selectionStart"in i&&Sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ea(da,i)||(da=i,i=fl(Fu,"onSelect"),0<i.length&&(e=new xf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Mc={},Dg={};pi&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Vl(t){if(Mc[t])return Mc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dg)return Mc[t]=e[n];return t}var Ig=Vl("animationend"),Ug=Vl("animationiteration"),Fg=Vl("animationstart"),Og=Vl("transitionend"),kg=new Map,Gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){kg.set(t,e),Lr(e,[t])}for(var Ec=0;Ec<Gh.length;Ec++){var wc=Gh[Ec],D_=wc.toLowerCase(),I_=wc[0].toUpperCase()+wc.slice(1);Qi(D_,"on"+I_)}Qi(Ig,"onAnimationEnd");Qi(Ug,"onAnimationIteration");Qi(Fg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(Og,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U_=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Wh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Dx(i,e,void 0,t),t.currentTarget=null}function Bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Wh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Wh(r,o,c),s=l}}}if(ol)throw t=Lu,ol=!1,Lu=null,t}function at(t,e){var n=e[Vu];n===void 0&&(n=e[Vu]=new Set);var i=t+"__bubble";n.has(i)||(zg(e,t,2,!1),n.add(i))}function Tc(t,e,n){var i=0;e&&(i|=4),zg(n,t,i,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[so]){t[so]=!0,qm.forEach(function(n){n!=="selectionchange"&&(U_.has(n)||Tc(n,!1,t),Tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,Tc("selectionchange",!1,e))}}function zg(t,e,n,i){switch(Eg(e)){case 1:var r=Yx;break;case 4:r=Kx;break;default:r=gf}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ac(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=vr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}cg(function(){var c=s,d=ff(n),h=[];e:{var f=kg.get(t);if(f!==void 0){var m=xf,_=t;switch(t){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":m=d_;break;case"focusin":_="focus",m=_c;break;case"focusout":_="blur",m=_c;break;case"beforeblur":case"afterblur":m=_c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=p_;break;case Ig:case Ug:case Fg:m=n_;break;case Og:m=g_;break;case"scroll":m=Zx;break;case"wheel":m=x_;break;case"copy":case"cut":case"paste":m=r_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ih}var S=(e&4)!==0,p=!S&&t==="scroll",u=S?f!==null?f+"Capture":null:f;S=[];for(var v=c,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,u!==null&&(w=xa(v,u),w!=null&&S.push(Ta(v,w,x)))),p)break;v=v.return}0<S.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Ru&&(_=n.relatedTarget||n.fromElement)&&(vr(_)||_[mi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?vr(_):null,_!==null&&(p=Dr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=Lh,w="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Ih,w="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?f:is(m),x=_==null?f:is(_),f=new S(w,v+"leave",m,n,d),f.target=p,f.relatedTarget=x,w=null,vr(d)===c&&(S=new S(u,v+"enter",_,n,d),S.target=x,S.relatedTarget=p,w=S),p=w,m&&_)t:{for(S=m,u=_,v=0,x=S;x;x=Or(x))v++;for(x=0,w=u;w;w=Or(w))x++;for(;0<v-x;)S=Or(S),v--;for(;0<x-v;)u=Or(u),x--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=Or(S),u=Or(u)}S=null}else S=null;m!==null&&jh(h,f,m,S,!1),_!==null&&p!==null&&jh(h,p,_,S,!0)}}e:{if(f=c?is(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var R=T_;else if(Oh(f))if(Rg)R=R_;else{R=C_;var C=A_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=b_);if(R&&(R=R(t,c))){bg(h,R,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&wu(f,"number",f.value)}switch(C=c?is(c):window,t){case"focusin":(Oh(C)||C.contentEditable==="true")&&(ts=C,Fu=c,da=null);break;case"focusout":da=Fu=ts=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Vh(h,n,d);break;case"selectionchange":if(L_)break;case"keydown":case"keyup":Vh(h,n,d)}var M;if(yf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else es?Ag(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Tg&&n.locale!=="ko"&&(es||P!=="onCompositionStart"?P==="onCompositionEnd"&&es&&(M=wg()):(Ui=d,vf="value"in Ui?Ui.value:Ui.textContent,es=!0)),C=fl(c,P),0<C.length&&(P=new Dh(P,t,null,n,d),h.push({event:P,listeners:C}),M?P.data=M:(M=Cg(n),M!==null&&(P.data=M)))),(M=y_?S_(t,n):M_(t,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(d=new Dh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=M))}Bg(h,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xa(t,n),s!=null&&i.unshift(Ta(t,s,r)),s=xa(t,e),s!=null&&i.push(Ta(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=xa(n,s),l!=null&&a.unshift(Ta(n,l,o))):r||(l=xa(n,s),l!=null&&a.push(Ta(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var F_=/\r\n?/g,O_=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(F_,`
`).replace(O_,"")}function ao(t,e,n){if(e=Xh(e),Xh(t)!==e&&n)throw Error(re(425))}function hl(){}var ku=null,Bu=null;function zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,k_=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(z_)}:Hu;function z_(t){setTimeout(function(){throw t})}function Cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Sa(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Fs,Aa="__reactProps$"+Fs,mi="__reactContainer$"+Fs,Vu="__reactEvents$"+Fs,H_="__reactListeners$"+Fs,V_="__reactHandles$"+Fs;function vr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[qn])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[qn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Gl(t){return t[Aa]||null}var Gu=[],rs=-1;function Ji(t){return{current:t}}function lt(t){0>rs||(t.current=Gu[rs],Gu[rs]=null,rs--)}function it(t,e){rs++,Gu[rs]=t.current,t.current=e}var Ki={},zt=Ji(Ki),Qt=Ji(!1),Tr=Ki;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Jt(t){return t=t.childContextTypes,t!=null}function pl(){lt(Qt),lt(zt)}function Yh(t,e,n){if(zt.current!==Ki)throw Error(re(168));it(zt,e),it(Qt,n)}function Hg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Ax(t)||"Unknown",r));return ft({},n,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Tr=zt.current,it(zt,t),it(Qt,Qt.current),!0}function Kh(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Hg(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,lt(Qt),lt(zt),it(zt,t)):lt(Qt),it(Qt,n)}var oi=null,Wl=!1,bc=!1;function Vg(t){oi===null?oi=[t]:oi.push(t)}function G_(t){Wl=!0,Vg(t)}function er(){if(!bc&&oi!==null){bc=!0;var t=0,e=Qe;try{var n=oi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Wl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),hg(hf,er),r}finally{Qe=e,bc=!1}}return null}var ss=[],as=0,gl=null,vl=0,xn=[],_n=0,Ar=null,ci=1,ui="";function dr(t,e){ss[as++]=vl,ss[as++]=gl,gl=t,vl=e}function Gg(t,e,n){xn[_n++]=ci,xn[_n++]=ui,xn[_n++]=Ar,Ar=t;var i=ci;t=ui;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-Bn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function Mf(t){t.return!==null&&(dr(t,1),Gg(t,1,0))}function Ef(t){for(;t===gl;)gl=ss[--as],ss[as]=null,vl=ss[--as],ss[as]=null;for(;t===Ar;)Ar=xn[--_n],xn[_n]=null,ui=xn[--_n],xn[_n]=null,ci=xn[--_n],xn[_n]=null}var dn=null,un=null,ct=!1,In=null;function Wg(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function Wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ju(t){if(ct){var e=un;if(e){var n=e;if(!Zh(t,e)){if(Wu(t))throw Error(re(418));e=Hi(n.nextSibling);var i=dn;e&&Zh(t,e)?Wg(i,n):(t.flags=t.flags&-4097|2,ct=!1,dn=t)}}else{if(Wu(t))throw Error(re(418));t.flags=t.flags&-4097|2,ct=!1,dn=t}}}function Qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function oo(t){if(t!==dn)return!1;if(!ct)return Qh(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zu(t.type,t.memoizedProps)),e&&(e=un)){if(Wu(t))throw jg(),Error(re(418));for(;e;)Wg(t,e),e=Hi(e.nextSibling)}if(Qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Hi(t.stateNode.nextSibling):null;return!0}function jg(){for(var t=un;t;)t=Hi(t.nextSibling)}function Ms(){un=dn=null,ct=!1}function wf(t){In===null?In=[t]:In.push(t)}var W_=Si.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function lo(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jh(t){var e=t._init;return e(t._payload)}function Xg(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=ji(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,x,w){return v===null||v.tag!==6?(v=Uc(x,u.mode,w),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,w){var R=x.type;return R===Jr?d(u,v,x.props.children,w,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pi&&Jh(R)===v.type)?(w=r(v,x.props),w.ref=Xs(u,v,x),w.return=u,w):(w=Zo(x.type,x.key,x.props,null,u.mode,w),w.ref=Xs(u,v,x),w.return=u,w)}function c(u,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Fc(x,u.mode,w),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function d(u,v,x,w,R){return v===null||v.tag!==7?(v=Er(x,u.mode,w,R),v.return=u,v):(v=r(v,x),v.return=u,v)}function h(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Uc(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return x=Zo(v.type,v.key,v.props,null,u.mode,x),x.ref=Xs(u,null,v),x.return=u,x;case Qr:return v=Fc(v,u.mode,x),v.return=u,v;case Pi:var w=v._init;return h(u,w(v._payload),x)}if(ia(v)||Hs(v))return v=Er(v,u.mode,x,null),v.return=u,v;lo(u,v)}return null}function f(u,v,x,w){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:o(u,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return x.key===R?l(u,v,x,w):null;case Qr:return x.key===R?c(u,v,x,w):null;case Pi:return R=x._init,f(u,v,R(x._payload),w)}if(ia(x)||Hs(x))return R!==null?null:d(u,v,x,w,null);lo(u,x)}return null}function m(u,v,x,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(x)||null,o(v,u,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Za:return u=u.get(w.key===null?x:w.key)||null,l(v,u,w,R);case Qr:return u=u.get(w.key===null?x:w.key)||null,c(v,u,w,R);case Pi:var C=w._init;return m(u,v,x,C(w._payload),R)}if(ia(w)||Hs(w))return u=u.get(x)||null,d(v,u,w,R,null);lo(v,w)}return null}function _(u,v,x,w){for(var R=null,C=null,M=v,P=v=0,O=null;M!==null&&P<x.length;P++){M.index>P?(O=M,M=null):O=M.sibling;var y=f(u,M,x[P],w);if(y===null){M===null&&(M=O);break}t&&M&&y.alternate===null&&e(u,M),v=s(y,v,P),C===null?R=y:C.sibling=y,C=y,M=O}if(P===x.length)return n(u,M),ct&&dr(u,P),R;if(M===null){for(;P<x.length;P++)M=h(u,x[P],w),M!==null&&(v=s(M,v,P),C===null?R=M:C.sibling=M,C=M);return ct&&dr(u,P),R}for(M=i(u,M);P<x.length;P++)O=m(M,u,P,x[P],w),O!==null&&(t&&O.alternate!==null&&M.delete(O.key===null?P:O.key),v=s(O,v,P),C===null?R=O:C.sibling=O,C=O);return t&&M.forEach(function(T){return e(u,T)}),ct&&dr(u,P),R}function S(u,v,x,w){var R=Hs(x);if(typeof R!="function")throw Error(re(150));if(x=R.call(x),x==null)throw Error(re(151));for(var C=R=null,M=v,P=v=0,O=null,y=x.next();M!==null&&!y.done;P++,y=x.next()){M.index>P?(O=M,M=null):O=M.sibling;var T=f(u,M,y.value,w);if(T===null){M===null&&(M=O);break}t&&M&&T.alternate===null&&e(u,M),v=s(T,v,P),C===null?R=T:C.sibling=T,C=T,M=O}if(y.done)return n(u,M),ct&&dr(u,P),R;if(M===null){for(;!y.done;P++,y=x.next())y=h(u,y.value,w),y!==null&&(v=s(y,v,P),C===null?R=y:C.sibling=y,C=y);return ct&&dr(u,P),R}for(M=i(u,M);!y.done;P++,y=x.next())y=m(M,u,P,y.value,w),y!==null&&(t&&y.alternate!==null&&M.delete(y.key===null?P:y.key),v=s(y,v,P),C===null?R=y:C.sibling=y,C=y);return t&&M.forEach(function(V){return e(u,V)}),ct&&dr(u,P),R}function p(u,v,x,w){if(typeof x=="object"&&x!==null&&x.type===Jr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:e:{for(var R=x.key,C=v;C!==null;){if(C.key===R){if(R=x.type,R===Jr){if(C.tag===7){n(u,C.sibling),v=r(C,x.props.children),v.return=u,u=v;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Pi&&Jh(R)===C.type){n(u,C.sibling),v=r(C,x.props),v.ref=Xs(u,C,x),v.return=u,u=v;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===Jr?(v=Er(x.props.children,u.mode,w,x.key),v.return=u,u=v):(w=Zo(x.type,x.key,x.props,null,u.mode,w),w.ref=Xs(u,v,x),w.return=u,u=w)}return a(u);case Qr:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Fc(x,u.mode,w),v.return=u,u=v}return a(u);case Pi:return C=x._init,p(u,v,C(x._payload),w)}if(ia(x))return _(u,v,x,w);if(Hs(x))return S(u,v,x,w);lo(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=Uc(x,u.mode,w),v.return=u,u=v),a(u)):n(u,v)}return p}var Es=Xg(!0),qg=Xg(!1),xl=Ji(null),_l=null,os=null,Tf=null;function Af(){Tf=os=_l=null}function Cf(t){var e=xl.current;lt(xl),t._currentValue=e}function Xu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){_l=t,Tf=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Tf!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(_l===null)throw Error(re(308));os=t,_l.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var xr=null;function bf(t){xr===null?xr=[t]:xr.push(t)}function $g(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bf(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Rf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}function ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(f=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=ft({},h,f);break e;case 2:Ni=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=a,t.lanes=a,t.memoizedState=h}}function tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var za={},Kn=Ji(za),Ca=Ji(za),ba=Ji(za);function _r(t){if(t===za)throw Error(re(174));return t}function Pf(t,e){switch(it(ba,e),it(Ca,t),it(Kn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Au(e,t)}lt(Kn),it(Kn,e)}function ws(){lt(Kn),lt(Ca),lt(ba)}function Kg(t){_r(ba.current);var e=_r(Kn.current),n=Au(e,t.type);e!==n&&(it(Ca,t),it(Kn,n))}function Nf(t){Ca.current===t&&(lt(Kn),lt(Ca))}var ut=Ji(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function Lf(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var Xo=Si.ReactCurrentDispatcher,Pc=Si.ReactCurrentBatchConfig,Cr=0,dt=null,wt=null,Rt=null,Ml=!1,fa=!1,Ra=0,j_=0;function Ut(){throw Error(re(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function If(t,e,n,i,r,s){if(Cr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xo.current=t===null||t.memoizedState===null?Y_:K_,t=n(i,r),fa){s=0;do{if(fa=!1,Ra=0,25<=s)throw Error(re(301));s+=1,Rt=wt=null,e.updateQueue=null,Xo.current=Z_,t=n(i,r)}while(fa)}if(Xo.current=El,e=wt!==null&&wt.next!==null,Cr=0,Rt=wt=dt=null,Ml=!1,e)throw Error(re(300));return t}function Uf(){var t=Ra!==0;return Ra=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function wn(){if(wt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Rt===null?dt.memoizedState:Rt.next;if(e!==null)Rt=e,wt=t;else{if(t===null)throw Error(re(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Rt===null?dt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Pa(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=wn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Cr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,dt.lanes|=d,br|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Vn(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=wn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Zg(){}function Qg(t,e){var n=dt,i=wn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,Zt=!0),i=i.queue,Ff(t0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Na(9,e0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(re(349));Cr&30||Jg(n,e,r)}return r}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e0(t,e,n,i){e.value=n,e.getSnapshot=i,n0(e)&&i0(t)}function t0(t,e,n){return n(function(){n0(e)&&i0(t)})}function n0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function i0(t){var e=gi(t,1);e!==null&&zn(e,t,1,-1)}function np(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=$_.bind(null,dt,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function r0(){return wn().memoizedState}function qo(t,e,n,i){var r=Wn();dt.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&Df(i,a.deps)){r.memoizedState=Na(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function ip(t,e){return qo(8390656,8,t,e)}function Ff(t,e){return jl(2048,8,t,e)}function s0(t,e){return jl(4,2,t,e)}function a0(t,e){return jl(4,4,t,e)}function o0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l0(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,o0.bind(null,e,t),n)}function Of(){}function c0(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function u0(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function d0(t,e,n){return Cr&21?(Vn(n,e)||(n=gg(),dt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function X_(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Pc.transition;Pc.transition={};try{t(!1),e()}finally{Qe=n,Pc.transition=i}}function f0(){return wn().memoizedState}function q_(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},h0(t))p0(e,n);else if(n=$g(t,e,n,i),n!==null){var r=Gt();zn(n,t,i,r),m0(n,e,i)}}function $_(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(h0(t))p0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var l=e.interleaved;l===null?(r.next=r,bf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$g(t,e,r,i),n!==null&&(r=Gt(),zn(n,t,i,r),m0(n,e,i))}}function h0(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function p0(t,e){fa=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pf(t,n)}}var El={readContext:En,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Y_={readContext:En,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qo(4194308,4,o0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return qo(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=q_.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:np,useDebugValue:Of,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=np(!1),e=t[0];return t=X_.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Wn();if(ct){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Pt===null)throw Error(re(349));Cr&30||Jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ip(t0.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,e0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Pt.identifierPrefix;if(ct){var n=ui,i=ci;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=j_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},K_={readContext:En,useCallback:c0,useContext:En,useEffect:Ff,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:a0,useMemo:u0,useReducer:Nc,useRef:r0,useState:function(){return Nc(Pa)},useDebugValue:Of,useDeferredValue:function(t){var e=wn();return d0(e,wt.memoizedState,t)},useTransition:function(){var t=Nc(Pa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:Qg,useId:f0,unstable_isNewReconciler:!1},Z_={readContext:En,useCallback:c0,useContext:En,useEffect:Ff,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:a0,useMemo:u0,useReducer:Lc,useRef:r0,useState:function(){return Lc(Pa)},useDebugValue:Of,useDeferredValue:function(t){var e=wn();return wt===null?e.memoizedState=t:d0(e,wt.memoizedState,t)},useTransition:function(){var t=Lc(Pa)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:Qg,useId:f0,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Wi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(zn(e,t,r,i),jo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Wi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(zn(e,t,r,i),jo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=Wi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(zn(e,t,i,n),jo(e,t,i))}};function rp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function g0(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=Jt(e)?Tr:zt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=Jt(e)?Tr:zt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",i=e;do n+=Tx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Dc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q_=typeof WeakMap=="function"?WeakMap:Map;function v0(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Tl||(Tl=!0,sd=i),Yu(t,e)},n}function x0(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Yu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yu(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Q_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=fy.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var J_=Si.ReactCurrentOwner,Zt=!1;function Vt(t,e,n,i){e.child=t===null?qg(e,null,n,i):Es(e,t.child,n,i)}function cp(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=If(t,e,n,i,s,r),n=Uf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ct&&n&&Mf(e),e.flags|=1,Vt(t,e,i,r),e.child)}function up(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,i,r)):(t=Zo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(a,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,vi(t,e,r)}return Ku(t,e,n,i,r)}function y0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(cs,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(cs,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(cs,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(cs,cn),cn|=i;return Vt(t,e,r,n),e.child}function S0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,i,r){var s=Jt(n)?Tr:zt.current;return s=Ss(e,s),ms(e,r),n=If(t,e,n,i,s,r),i=Uf(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ct&&i&&Mf(e),e.flags|=1,Vt(t,e,n,r),e.child)}function dp(t,e,n,i,r){if(Jt(n)){var s=!0;ml(e)}else s=!1;if(ms(e,r),e.stateNode===null)$o(t,e),g0(e,n,i),$u(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=Jt(n)?Tr:zt.current,c=Ss(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&sp(e,a,i,c),Ni=!1;var f=e.memoizedState;a.state=f,yl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Qt.current||Ni?(typeof d=="function"&&(qu(e,n,d,i),l=e.memoizedState),(o=Ni||rp(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Yg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ln(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Jt(n)?Tr:zt.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&sp(e,a,i,l),Ni=!1,f=e.memoizedState,a.state=f,yl(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||Qt.current||Ni?(typeof m=="function"&&(qu(e,n,m,i),_=e.memoizedState),(c=Ni||rp(e,n,c,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Zu(t,e,n,i,s,r)}function Zu(t,e,n,i,r,s){S0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Kh(e,n,!1),vi(t,e,s);i=e.stateNode,J_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Es(e,t.child,null,s),e.child=Es(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&Kh(e,n,!0),e.child}function M0(t){var e=t.stateNode;e.pendingContext?Yh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yh(t,e.context,!1),Pf(t,e.containerInfo)}function fp(t,e,n,i,r){return Ms(),wf(r),e.flags|=256,Vt(t,e,n,i),e.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function Ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function E0(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ut,r&1),t===null)return ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Yl(a,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ju(n),e.memoizedState=Qu,t):kf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ey(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ji(o,s):(s=Er(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ju(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Qu,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kf(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function co(t,e,n,i){return i!==null&&wf(i),Es(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ey(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Dc(Error(re(422))),co(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yl({mode:"visible",children:i.children},r,0,null),s=Er(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Es(e,t.child,null,a),e.child.memoizedState=Ju(a),e.memoizedState=Qu,s);if(!(e.mode&1))return co(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=Dc(s,i,void 0),co(t,e,a,i)}if(o=(a&t.childLanes)!==0,Zt||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),zn(i,t,r,-1))}return Wf(),i=Dc(Error(re(421))),co(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=hy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Hi(r.nextSibling),dn=e,ct=!0,In=null,t!==null&&(xn[_n++]=ci,xn[_n++]=ui,xn[_n++]=Ar,ci=t.id,ui=t.overflow,Ar=e),e=kf(e,i.children),e.flags|=4096,e)}function hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xu(t.return,e,n)}function Ic(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function w0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,n,e);else if(t.tag===19)hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ic(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ty(t,e,n){switch(e.tag){case 3:M0(e),Ms();break;case 5:Kg(e);break;case 1:Jt(e.type)&&ml(e);break;case 4:Pf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?E0(t,e,n):(it(ut,ut.current&1),t=vi(t,e,n),t!==null?t.sibling:null);it(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return w0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,y0(t,e,n)}return vi(t,e,n)}var T0,ed,A0,C0;T0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};A0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Kn.current);var s=null;switch(n){case"input":r=Mu(t,r),i=Mu(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Tu(t,r),i=Tu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=hl)}Cu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};C0=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ny(t,e,n){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return Jt(e.type)&&pl(),Ft(e),null;case 3:return i=e.stateNode,ws(),lt(Qt),lt(zt),Lf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(ld(In),In=null))),ed(t,e),Ft(e),null;case 5:Nf(e);var r=_r(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)A0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Ft(e),null}if(t=_r(Kn.current),oo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)at(sa[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Mh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":wh(i,s),at("invalid",i)}Cu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ao(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ao(i.textContent,o,t),r=["children",""+o]):ga.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":Qa(i),Eh(i,s,!0);break;case"textarea":Qa(i),Th(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[Aa]=i,T0(t,e,!1,!1),e.stateNode=t;e:{switch(a=bu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)at(sa[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Mh(t,i),r=Mu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),at("invalid",t);break;case"textarea":wh(t,i),r=Tu(t,i),at("invalid",t);break;default:r=i}Cu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?rg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&lf(t,s,l,a))}switch(n){case"input":Qa(t),Eh(t,i,!1);break;case"textarea":Qa(t),Th(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)C0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=_r(ba.current),_r(Kn.current),oo(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:ao(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ao(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Ft(e),null;case 13:if(lt(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&un!==null&&e.mode&1&&!(e.flags&128))jg(),Ms(),e.flags|=98560,s=!1;else if(s=oo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[qn]=e}else Ms(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else In!==null&&(ld(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Tt===0&&(Tt=3):Wf())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ws(),ed(t,e),t===null&&wa(e.stateNode.containerInfo),Ft(e),null;case 10:return Cf(e.type._context),Ft(e),null;case 17:return Jt(e.type)&&pl(),Ft(e),null;case 19:if(lt(ut),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)qs(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Sl(t),a!==null){for(e.flags|=128,qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>As&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Sl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Ft(e),null}else 2*vt()-s.renderingStartTime>As&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,it(ut,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Gf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function iy(t,e){switch(Ef(e),e.tag){case 1:return Jt(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),lt(Qt),lt(zt),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nf(e),null;case 13:if(lt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ms()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ut),null;case 4:return ws(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var uo=!1,Bt=!1,ry=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function td(t,e,n){try{n()}catch(i){pt(t,e,i)}}var pp=!1;function sy(t,e){if(ku=ul,t=Lg(),Sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:t,selectionRange:n},ul=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Ln(e.type,S),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(w){pt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=pp,pp=!1,_}function ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&td(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b0(t){var e=t.alternate;e!==null&&(t.alternate=null,b0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Aa],delete e[Vu],delete e[H_],delete e[V_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function R0(t){return t.tag===5||t.tag===3||t.tag===4}function mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(i!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}function rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}var Lt=null,Dn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)P0(t,e,n),n=n.sibling}function P0(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Bt||ls(n,e);case 6:var i=Lt,r=Dn;Lt=null,Ei(t,e,n),Lt=i,Dn=r,Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Dn?(t=Lt,n=n.stateNode,t.nodeType===8?Cc(t.parentNode,n):t.nodeType===1&&Cc(t,n),Sa(t)):Cc(Lt,n.stateNode));break;case 4:i=Lt,r=Dn,Lt=n.stateNode.containerInfo,Dn=!0,Ei(t,e,n),Lt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&td(n,e,a),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!Bt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){pt(n,e,o)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Ei(t,e,n),Bt=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ry),e.forEach(function(i){var r=py.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Lt=o.stateNode,Dn=!1;break e;case 3:Lt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Lt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Lt===null)throw Error(re(160));P0(s,a,r),Lt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N0(e,t),e=e.sibling}function N0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Gn(t),i&4){try{ha(3,t,t.return),ql(3,t)}catch(S){pt(t,t.return,S)}try{ha(5,t,t.return)}catch(S){pt(t,t.return,S)}}break;case 1:An(e,t),Gn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(An(e,t),Gn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(S){pt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Jm(r,s),bu(o,a);var c=bu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?rg(r,h):d==="dangerouslySetInnerHTML"?ng(r,h):d==="children"?va(r,h):lf(r,d,h,c)}switch(o){case"input":Eu(r,s);break;case"textarea":eg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ds(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(S){pt(t,t.return,S)}}break;case 6:if(An(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){pt(t,t.return,S)}}break;case 3:if(An(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(S){pt(t,t.return,S)}break;case 4:An(e,t),Gn(t);break;case 13:An(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hf=vt())),i&4&&gp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||d,An(e,t),Bt=c):An(e,t),Gn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(h=ge=d;ge!==null;){switch(f=ge,m=f.child,f.tag){case 0:case 11:case 14:case 15:ha(4,f,f.return);break;case 1:ls(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){pt(i,n,S)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){xp(h);continue}}m!==null?(m.return=f,ge=m):xp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ig("display",a))}catch(S){pt(t,t.return,S)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){pt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:An(e,t),Gn(t),i&4&&gp(t);break;case 21:break;default:An(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(R0(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var s=mp(t);rd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=mp(t);id(t,o,a);break;default:throw Error(re(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ay(t,e,n){ge=t,L0(t)}function L0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||uo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Bt;o=uo;var c=Bt;if(uo=a,(Bt=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?_p(r):l!==null?(l.return=a,ge=l):_p(r);for(;s!==null;)ge=s,L0(s),s=s.sibling;ge=r,uo=o,Bt=c}vp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):vp(t)}}function vp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Sa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Bt||e.flags&512&&nd(e)}catch(f){pt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function xp(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function _p(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{nd(e)}catch(l){pt(e,s,l)}break;case 5:var a=e.return;try{nd(e)}catch(l){pt(e,a,l)}}}catch(l){pt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var oy=Math.ceil,wl=Si.ReactCurrentDispatcher,Bf=Si.ReactCurrentOwner,Mn=Si.ReactCurrentBatchConfig,We=0,Pt=null,Mt=null,Dt=0,cn=0,cs=Ji(0),Tt=0,La=null,br=0,$l=0,zf=0,pa=null,Yt=null,Hf=0,As=1/0,ai=null,Tl=!1,sd=null,Gi=null,fo=!1,Fi=null,Al=0,ma=0,ad=null,Yo=-1,Ko=0;function Gt(){return We&6?vt():Yo!==-1?Yo:Yo=vt()}function Wi(t){return t.mode&1?We&2&&Dt!==0?Dt&-Dt:W_.transition!==null?(Ko===0&&(Ko=gg()),Ko):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:Eg(t.type)),t):1}function zn(t,e,n,i){if(50<ma)throw ma=0,ad=null,Error(re(185));Oa(t,n,i),(!(We&2)||t!==Pt)&&(t===Pt&&(!(We&2)&&($l|=n),Tt===4&&Di(t,Dt)),en(t,i),n===1&&We===0&&!(e.mode&1)&&(As=vt()+500,Wl&&er()))}function en(t,e){var n=t.callbackNode;Wx(t,e);var i=cl(t,t===Pt?Dt:0);if(i===0)n!==null&&bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bh(n),e===1)t.tag===0?G_(yp.bind(null,t)):Vg(yp.bind(null,t)),B_(function(){!(We&6)&&er()}),n=null;else{switch(vg(i)){case 1:n=hf;break;case 4:n=pg;break;case 16:n=ll;break;case 536870912:n=mg;break;default:n=ll}n=z0(n,D0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D0(t,e){if(Yo=-1,Ko=0,We&6)throw Error(re(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=cl(t,t===Pt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cl(t,i);else{e=i;var r=We;We|=2;var s=U0();(Pt!==t||Dt!==e)&&(ai=null,As=vt()+500,Mr(t,e));do try{uy();break}catch(o){I0(t,o)}while(!0);Af(),wl.current=s,We=r,Mt!==null?e=0:(Pt=null,Dt=0,e=Tt)}if(e!==0){if(e===2&&(r=Du(t),r!==0&&(i=r,e=od(t,r))),e===1)throw n=La,Mr(t,0),Di(t,i),en(t,vt()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!ly(r)&&(e=Cl(t,i),e===2&&(s=Du(t),s!==0&&(i=s,e=od(t,s))),e===1))throw n=La,Mr(t,0),Di(t,i),en(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:fr(t,Yt,ai);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Hf+500-vt(),10<e)){if(cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hu(fr.bind(null,t,Yt,ai),e);break}fr(t,Yt,ai);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*oy(i/1960))-i,10<i){t.timeoutHandle=Hu(fr.bind(null,t,Yt,ai),i);break}fr(t,Yt,ai);break;case 5:fr(t,Yt,ai);break;default:throw Error(re(329))}}}return en(t,vt()),t.callbackNode===n?D0.bind(null,t):null}function od(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&ld(e)),t}function ld(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function ly(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~zf,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function yp(t){if(We&6)throw Error(re(327));gs();var e=cl(t,0);if(!(e&1))return en(t,vt()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var i=Du(t);i!==0&&(e=i,n=od(t,i))}if(n===1)throw n=La,Mr(t,0),Di(t,e),en(t,vt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,Yt,ai),en(t,vt()),null}function Vf(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(As=vt()+500,Wl&&er())}}function Rr(t){Fi!==null&&Fi.tag===0&&!(We&6)&&gs();var e=We;We|=1;var n=Mn.transition,i=Qe;try{if(Mn.transition=null,Qe=1,t)return t()}finally{Qe=i,Mn.transition=n,We=e,!(We&6)&&er()}}function Gf(){cn=cs.current,lt(cs)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,k_(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:ws(),lt(Qt),lt(zt),Lf();break;case 5:Nf(i);break;case 4:ws();break;case 13:lt(ut);break;case 19:lt(ut);break;case 10:Cf(i.type._context);break;case 22:case 23:Gf()}n=n.return}if(Pt=t,Mt=t=ji(t.current,null),Dt=cn=e,Tt=0,La=null,zf=$l=br=0,Yt=pa=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}xr=null}return t}function I0(t,e){do{var n=Mt;try{if(Af(),Xo.current=El,Ml){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ml=!1}if(Cr=0,Rt=wt=dt=null,fa=!1,Ra=0,Bf.current=null,n===null||n.return===null){Tt=1,La=e,Mt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=op(a);if(m!==null){m.flags&=-257,lp(m,a,o,s,e),m.mode&1&&ap(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){ap(s,c,e),Wf();break e}l=Error(re(426))}}else if(ct&&o.mode&1){var p=op(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),lp(p,a,o,s,e),wf(Ts(l,o));break e}}s=l=Ts(l,o),Tt!==4&&(Tt=2),pa===null?pa=[s]:pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=v0(s,l,e);ep(s,u);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Gi===null||!Gi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=x0(s,o,e);ep(s,w);break e}}s=s.return}while(s!==null)}O0(n)}catch(R){e=R,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function U0(){var t=wl.current;return wl.current=El,t===null?El:t}function Wf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(br&268435455)&&!($l&268435455)||Di(Pt,Dt)}function Cl(t,e){var n=We;We|=2;var i=U0();(Pt!==t||Dt!==e)&&(ai=null,Mr(t,e));do try{cy();break}catch(r){I0(t,r)}while(!0);if(Af(),We=n,wl.current=i,Mt!==null)throw Error(re(261));return Pt=null,Dt=0,Tt}function cy(){for(;Mt!==null;)F0(Mt)}function uy(){for(;Mt!==null&&!Ux();)F0(Mt)}function F0(t){var e=B0(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?O0(t):Mt=e,Bf.current=null}function O0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Mt=null;return}}else if(n=ny(n,e,cn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Tt===0&&(Tt=5)}function fr(t,e,n){var i=Qe,r=Mn.transition;try{Mn.transition=null,Qe=1,dy(t,e,n,i)}finally{Mn.transition=r,Qe=i}return null}function dy(t,e,n,i){do gs();while(Fi!==null);if(We&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jx(t,s),t===Pt&&(Mt=Pt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,z0(ll,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=Qe;Qe=1;var o=We;We|=4,Bf.current=null,sy(t,n),N0(n,t),N_(Bu),ul=!!ku,Bu=ku=null,t.current=n,ay(n),Fx(),We=o,Qe=a,Mn.transition=s}else t.current=n;if(fo&&(fo=!1,Fi=t,Al=r),s=t.pendingLanes,s===0&&(Gi=null),Bx(n.stateNode),en(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tl)throw Tl=!1,t=sd,sd=null,t;return Al&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===ad?ma++:(ma=0,ad=t):ma=0,er(),null}function gs(){if(Fi!==null){var t=vg(Al),e=Mn.transition,n=Qe;try{if(Mn.transition=null,Qe=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,Al=0,We&6)throw Error(re(331));var r=We;for(We|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:ha(8,d,s)}var h=d.child;if(h!==null)h.return=d,ge=h;else for(;ge!==null;){d=ge;var f=d.sibling,m=d.return;if(b0(d),d===c){ge=null;break}if(f!==null){f.return=m,ge=f;break}ge=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var v=t.current;for(ge=v;ge!==null;){a=ge;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ge=x;else e:for(a=v;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ql(9,o)}}catch(R){pt(o,o.return,R)}if(o===a){ge=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,ge=w;break e}ge=o.return}}if(We=r,er(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Bl,t)}catch{}i=!0}return i}finally{Qe=n,Mn.transition=e}}return!1}function Sp(t,e,n){e=Ts(n,e),e=v0(t,e,1),t=Vi(t,e,1),e=Gt(),t!==null&&(Oa(t,1,e),en(t,e))}function pt(t,e,n){if(t.tag===3)Sp(t,t,n);else for(;e!==null;){if(e.tag===3){Sp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Ts(n,t),t=x0(e,t,1),e=Vi(e,t,1),t=Gt(),e!==null&&(Oa(e,1,t),en(e,t));break}}e=e.return}}function fy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Dt&n)===n&&(Tt===4||Tt===3&&(Dt&130023424)===Dt&&500>vt()-Hf?Mr(t,0):zf|=n),en(t,e)}function k0(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=Gt();t=gi(t,e),t!==null&&(Oa(t,e,n),en(t,n))}function hy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k0(t,n)}function py(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),k0(t,n)}var B0;B0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,ty(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,ct&&e.flags&1048576&&Gg(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$o(t,e),t=e.pendingProps;var r=Ss(e,zt.current);ms(e,n),r=If(null,e,i,t,r,n);var s=Uf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(i)?(s=!0,ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rf(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,$u(e,i,t,n),e=Zu(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Mf(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($o(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=gy(i),t=Ln(i,t),r){case 0:e=Ku(null,e,i,t,n);break e;case 1:e=dp(null,e,i,t,n);break e;case 11:e=cp(null,e,i,t,n);break e;case 14:e=up(null,e,i,Ln(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ku(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),dp(t,e,i,r,n);case 3:e:{if(M0(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yg(t,e),yl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ts(Error(re(423)),e),e=fp(t,e,i,n,r);break e}else if(i!==r){r=Ts(Error(re(424)),e),e=fp(t,e,i,n,r);break e}else for(un=Hi(e.stateNode.containerInfo.firstChild),dn=e,ct=!0,In=null,n=qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ms(),i===r){e=vi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return Kg(e),t===null&&ju(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,zu(i,r)?a=null:s!==null&&zu(i,s)&&(e.flags|=32),S0(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&ju(e),null;case 13:return E0(t,e,n);case 4:return Pf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Es(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),cp(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(xl,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!Qt.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Xu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=En(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),up(t,e,i,r,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),$o(t,e),e.tag=1,Jt(i)?(t=!0,ml(e)):t=!1,ms(e,n),g0(e,i,r),$u(e,i,r,n),Zu(null,e,i,!0,t,n);case 19:return w0(t,e,n);case 22:return y0(t,e,n)}throw Error(re(156,e.tag))};function z0(t,e){return hg(t,e)}function my(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new my(t,e,n,i)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gy(t){if(typeof t=="function")return jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===df)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")jf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Jr:return Er(n.children,r,s,e);case cf:a=8,r|=8;break;case xu:return t=yn(12,n,e,r|2),t.elementType=xu,t.lanes=s,t;case _u:return t=yn(13,n,e,r),t.elementType=_u,t.lanes=s,t;case yu:return t=yn(19,n,e,r),t.elementType=yu,t.lanes=s,t;case Km:return Yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $m:a=10;break e;case Ym:a=9;break e;case uf:a=11;break e;case df:a=14;break e;case Pi:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=yn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function Yl(t,e,n,i){return t=yn(22,t,i,e),t.elementType=Km,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gc(0),this.expirationTimes=gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xf(t,e,n,i,r,s,a,o,l){return t=new vy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rf(s),t}function xy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function H0(t){if(!t)return Ki;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Jt(n))return Hg(t,n,e)}return e}function V0(t,e,n,i,r,s,a,o,l){return t=Xf(n,i,!0,t,r,s,a,o,l),t.context=H0(null),n=t.current,i=Gt(),r=Wi(n),s=hi(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,Oa(t,r,i),en(t,i),t}function Kl(t,e,n,i){var r=e.current,s=Gt(),a=Wi(r);return n=H0(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,a),t!==null&&(zn(t,r,a,s),jo(t,r,a)),a}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qf(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function _y(){return null}var G0=typeof reportError=="function"?reportError:function(t){console.error(t)};function $f(t){this._internalRoot=t}Zl.prototype.render=$f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Kl(t,e,null,null)};Zl.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Kl(null,t,null,null)}),e[mi]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&Mg(t)}};function Yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function yy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bl(a);s.call(c)}}var a=V0(e,i,t,0,null,!1,!1,"",Ep);return t._reactRootContainer=a,t[mi]=a.current,wa(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=bl(l);o.call(c)}}var l=Xf(t,0,!1,null,null,!1,!1,"",Ep);return t._reactRootContainer=l,t[mi]=l.current,wa(t.nodeType===8?t.parentNode:t),Rr(function(){Kl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=bl(a);o.call(l)}}Kl(e,a,t,r)}else a=yy(n,e,t,r,i);return bl(a)}xg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(pf(e,n|1),en(e,vt()),!(We&6)&&(As=vt()+500,er()))}break;case 13:Rr(function(){var i=gi(t,1);if(i!==null){var r=Gt();zn(i,t,1,r)}}),qf(t,1)}};mf=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=Gt();zn(e,t,134217728,n)}qf(t,134217728)}};_g=function(t){if(t.tag===13){var e=Wi(t),n=gi(t,e);if(n!==null){var i=Gt();zn(n,t,e,i)}qf(t,e)}};yg=function(){return Qe};Sg=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Pu=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(re(90));Qm(i),Eu(i,r)}}}break;case"textarea":eg(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};og=Vf;lg=Rr;var Sy={usingClientEntryPoint:!1,Events:[Ba,is,Gl,sg,ag,Vf]},$s={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},My={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dg(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||_y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Bl=ho.inject(My),Yn=ho}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yf(e))throw Error(re(200));return xy(t,e,null,n)};pn.createRoot=function(t,e){if(!Yf(t))throw Error(re(299));var n=!1,i="",r=G0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xf(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,wa(t.nodeType===8?t.parentNode:t),new $f(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=dg(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Rr(t)};pn.hydrate=function(t,e,n){if(!Ql(e))throw Error(re(200));return Jl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Yf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=G0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=V0(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};pn.render=function(t,e,n){if(!Ql(e))throw Error(re(200));return Jl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(re(40));return t._reactRootContainer?(Rr(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};pn.unstable_batchedUpdates=Vf;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Jl(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function W0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W0)}catch(t){console.error(t)}}W0(),Wm.exports=pn;var Ey=Wm.exports,wp=Ey;gu.createRoot=wp.createRoot,gu.hydrateRoot=wp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Da.apply(this,arguments)}var Oi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Oi||(Oi={}));const Tp="popstate";function wy(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return cd("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Rl(r)}return Ay(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function j0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ty(){return Math.random().toString(36).substr(2,8)}function Ap(t,e){return{usr:t.state,key:t.key,idx:e}}function cd(t,e,n,i){return n===void 0&&(n=null),Da({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||i||Ty()})}function Rl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Ay(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Oi.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(Da({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function h(){o=Oi.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:o,location:S.location,delta:u})}function f(p,u){o=Oi.Push;let v=cd(S.location,p,u);c=d()+1;let x=Ap(v,c),w=S.createHref(v);try{a.pushState(x,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(w)}s&&l&&l({action:o,location:S.location,delta:1})}function m(p,u){o=Oi.Replace;let v=cd(S.location,p,u);c=d();let x=Ap(v,c),w=S.createHref(v);a.replaceState(x,"",w),s&&l&&l({action:o,location:S.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Rl(p);return v=v.replace(/ $/,"%20"),mt(u,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,u)}let S={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Tp,h),l=p,()=>{r.removeEventListener(Tp,h),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:f,replace:m,go(p){return a.go(p)}};return S}var Cp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Cp||(Cp={}));function Cy(t,e,n){return n===void 0&&(n="/"),by(t,e,n)}function by(t,e,n,i){let r=typeof e=="string"?Os(e):e,s=Cs(r.pathname||"/",n);if(s==null)return null;let a=X0(t);Ry(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=zy(s);o=ky(a[l],c)}return o}function X0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Xi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),X0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Fy(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of q0(s.path))r(s,a,l)}),e}function q0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=q0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Ry(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Oy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Py=/^:[\w-]+$/,Ny=3,Ly=2,Dy=1,Iy=10,Uy=-2,bp=t=>t==="*";function Fy(t,e){let n=t.split("/"),i=n.length;return n.some(bp)&&(i+=Uy),e&&(i+=Ly),n.filter(r=>!bp(r)).reduce((r,s)=>r+(Py.test(s)?Ny:s===""?Dy:Iy),i)}function Oy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function ky(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=ud({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:Xi([s,h.pathname]),pathnameBase:Wy(Xi([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=Xi([s,h.pathnameBase]))}return a}function ud(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=By(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let S=o[h]||"";a=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const _=o[h];return m&&!_?c[f]=void 0:c[f]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function By(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),j0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function zy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return j0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Hy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Os(t):t;return{pathname:n?n.startsWith("/")?n:Vy(n,e):e,search:jy(i),hash:Xy(r)}}function Vy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Oc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $0(t,e){let n=Gy(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Y0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Os(t):(r=Da({},t),mt(!r.pathname||!r.pathname.includes("?"),Oc("?","pathname","search",r)),mt(!r.pathname||!r.pathname.includes("#"),Oc("#","pathname","hash",r)),mt(!r.search||!r.search.includes("#"),Oc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=Hy(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Xi=t=>t.join("/").replace(/\/\/+/g,"/"),Wy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Xy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const K0=["post","put","patch","delete"];new Set(K0);const $y=["get",...K0];new Set($y);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ia.apply(this,arguments)}const ec=q.createContext(null),Z0=q.createContext(null),tr=q.createContext(null),tc=q.createContext(null),nr=q.createContext({outlet:null,matches:[],isDataRoute:!1}),Q0=q.createContext(null);function Yy(t,e){let{relative:n}=e===void 0?{}:e;Ha()||mt(!1);let{basename:i,navigator:r}=q.useContext(tr),{hash:s,pathname:a,search:o}=nc(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Xi([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Ha(){return q.useContext(tc)!=null}function ks(){return Ha()||mt(!1),q.useContext(tc).location}function J0(t){q.useContext(tr).static||q.useLayoutEffect(t)}function Kf(){let{isDataRoute:t}=q.useContext(nr);return t?cS():Ky()}function Ky(){Ha()||mt(!1);let t=q.useContext(ec),{basename:e,future:n,navigator:i}=q.useContext(tr),{matches:r}=q.useContext(nr),{pathname:s}=ks(),a=JSON.stringify($0(r,n.v7_relativeSplatPath)),o=q.useRef(!1);return J0(()=>{o.current=!0}),q.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=Y0(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Xi([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,a,s,t])}function Zy(){let{matches:t}=q.useContext(nr),e=t[t.length-1];return e?e.params:{}}function nc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=q.useContext(tr),{matches:r}=q.useContext(nr),{pathname:s}=ks(),a=JSON.stringify($0(r,i.v7_relativeSplatPath));return q.useMemo(()=>Y0(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function Qy(t,e){return Jy(t,e)}function Jy(t,e,n,i){Ha()||mt(!1);let{navigator:r}=q.useContext(tr),{matches:s}=q.useContext(nr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=ks(),d;if(e){var h;let p=typeof e=="string"?Os(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||mt(!1),d=p}else d=c;let f=d.pathname||"/",m=f;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Cy(t,{pathname:m}),S=rS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Xi([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Xi([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&S?q.createElement(tc.Provider,{value:{location:Ia({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Oi.Pop}},S):S}function eS(){let t=lS(),e=qy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),n?q.createElement("pre",{style:r},n):null,null)}const tS=q.createElement(eS,null);class nS extends q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?q.createElement(nr.Provider,{value:this.props.routeContext},q.createElement(Q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iS(t){let{routeContext:e,match:n,children:i}=t,r=q.useContext(ec);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),q.createElement(nr.Provider,{value:e},i)}function rS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||mt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:f,errors:m}=n,_=h.route.loader&&f[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,h,f)=>{let m,_=!1,S=null,p=null;n&&(m=o&&h.route.id?o[h.route.id]:void 0,S=h.route.errorElement||tS,l&&(c<0&&f===0?(uS("route-fallback"),_=!0,p=null):c===f&&(_=!0,p=h.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,f+1)),v=()=>{let x;return m?x=S:_?x=p:h.route.Component?x=q.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=d,q.createElement(iS,{match:h,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:x})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?q.createElement(nS,{location:n.location,revalidation:n.revalidation,component:S,error:m,children:v(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):v()},null)}var ev=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ev||{}),tv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(tv||{});function sS(t){let e=q.useContext(ec);return e||mt(!1),e}function aS(t){let e=q.useContext(Z0);return e||mt(!1),e}function oS(t){let e=q.useContext(nr);return e||mt(!1),e}function nv(t){let e=oS(),n=e.matches[e.matches.length-1];return n.route.id||mt(!1),n.route.id}function lS(){var t;let e=q.useContext(Q0),n=aS(),i=nv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function cS(){let{router:t}=sS(ev.UseNavigateStable),e=nv(tv.UseNavigateStable),n=q.useRef(!1);return J0(()=>{n.current=!0}),q.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ia({fromRouteId:e},s)))},[t,e])}const Rp={};function uS(t,e,n){Rp[t]||(Rp[t]=!0)}function dS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Nn(t){mt(!1)}function fS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Oi.Pop,navigator:s,static:a=!1,future:o}=t;Ha()&&mt(!1);let l=e.replace(/^\/*/,"/"),c=q.useMemo(()=>({basename:l,navigator:s,static:a,future:Ia({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Os(i));let{pathname:d="/",search:h="",hash:f="",state:m=null,key:_="default"}=i,S=q.useMemo(()=>{let p=Cs(d,l);return p==null?null:{location:{pathname:p,search:h,hash:f,state:m,key:_},navigationType:r}},[l,d,h,f,m,_,r]);return S==null?null:q.createElement(tr.Provider,{value:c},q.createElement(tc.Provider,{children:n,value:S}))}function hS(t){let{children:e,location:n}=t;return Qy(dd(e),n)}new Promise(()=>{});function dd(t,e){e===void 0&&(e=[]);let n=[];return q.Children.forEach(t,(i,r)=>{if(!q.isValidElement(i))return;let s=[...e,r];if(i.type===q.Fragment){n.push.apply(n,dd(i.props.children,s));return}i.type!==Nn&&mt(!1),!i.props.index||!i.props.children||mt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=dd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Pl.apply(this,arguments)}function iv(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function pS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mS(t,e){return t.button===0&&(!e||e==="_self")&&!pS(t)}const gS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],xS="6";try{window.__reactRouterVersion=xS}catch{}const _S=q.createContext({isTransitioning:!1}),yS="startTransition",Pp=fx[yS];function SS(t){let{basename:e,children:n,future:i,window:r}=t,s=q.useRef();s.current==null&&(s.current=wy({window:r,v5Compat:!0}));let a=s.current,[o,l]=q.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=q.useCallback(h=>{c&&Pp?Pp(()=>l(h)):l(h)},[l,c]);return q.useLayoutEffect(()=>a.listen(d),[a,d]),q.useEffect(()=>dS(i),[i]),q.createElement(fS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const MS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ES=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hn=q.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:h}=e,f=iv(e,gS),{basename:m}=q.useContext(tr),_,S=!1;if(typeof c=="string"&&ES.test(c)&&(_=c,MS))try{let x=new URL(window.location.href),w=c.startsWith("//")?new URL(x.protocol+c):new URL(c),R=Cs(w.pathname,m);w.origin===x.origin&&R!=null?c=R+w.search+w.hash:S=!0}catch{}let p=Yy(c,{relative:r}),u=TS(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:h});function v(x){i&&i(x),x.defaultPrevented||u(x)}return q.createElement("a",Pl({},f,{href:_||p,onClick:S||s?i:v,ref:n,target:l}))}),kc=q.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:d}=e,h=iv(e,vS),f=nc(l,{relative:h.relative}),m=ks(),_=q.useContext(Z0),{navigator:S,basename:p}=q.useContext(tr),u=_!=null&&AS(f)&&c===!0,v=S.encodeLocation?S.encodeLocation(f).pathname:f.pathname,x=m.pathname,w=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(x=x.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&p&&(w=Cs(w,p)||w);const R=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let C=x===v||!a&&x.startsWith(v)&&x.charAt(R)==="/",M=w!=null&&(w===v||!a&&w.startsWith(v)&&w.charAt(v.length)==="/"),P={isActive:C,isPending:M,isTransitioning:u},O=C?i:void 0,y;typeof s=="function"?y=s(P):y=[s,C?"active":null,M?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let T=typeof o=="function"?o(P):o;return q.createElement(Hn,Pl({},h,{"aria-current":O,className:y,ref:n,style:T,to:l,viewTransition:c}),typeof d=="function"?d(P):d)});var fd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(fd||(fd={}));var Np;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Np||(Np={}));function wS(t){let e=q.useContext(ec);return e||mt(!1),e}function TS(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=Kf(),c=ks(),d=nc(t,{relative:a});return q.useCallback(h=>{if(mS(h,n)){h.preventDefault();let f=i!==void 0?i:Rl(c)===Rl(d);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}function AS(t,e){e===void 0&&(e={});let n=q.useContext(_S);n==null&&mt(!1);let{basename:i}=wS(fd.useViewTransitionState),r=nc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Cs(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Cs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return ud(r.pathname,a)!=null||ud(r.pathname,s)!=null}/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=q.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>q.createElement("svg",{ref:l,...bS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:rv("lucide",r),...o},[...a.map(([c,d])=>q.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(t,e)=>{const n=q.forwardRef(({className:i,...r},s)=>q.createElement(RS,{ref:s,iconNode:e,className:rv(`lucide-${CS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=_t("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=_t("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=_t("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=_t("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=_t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=_t("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=_t("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=_t("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=_t("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=_t("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=_t("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=_t("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=_t("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=_t("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=_t("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=_t("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=_t("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=_t("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=_t("WalletMinimal",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=_t("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=_t("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function lv(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=lv(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function Ll(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=lv(t))&&(i&&(i+=" "),i+=e);return i}const WS={address:"0xA1c7...42f9",ens:"biowallet.base",ethBalance:1.82,wethBalance:.74,networkLabel:"Base Sepolia"},jS=new Date,Ne=t=>new Date(jS.getTime()-t*60*60*1e3).toISOString(),XS=[{id:"196",title:"Myalgic encephalomyelitis variant hunt",creator:"0x4E11...f0B9",createdAt:Ne(1.4),status:"created",goal:"Catalog de novo variants from 12 long-read genomes to guide targeted RNA knockdowns.",traits:["Genomics","Variant calling","CRISPR"],safetyNotes:"Samples include identifiable metadata. Keep exports hashed and tunnel-only until registry clearance.",publicHint:"cid:QmVariantSketch",deposit:.018,totalIncentive:.018,nextRequired:.015,token:"WETH",initiations:[],timeline:[{id:"196-event-0",label:"Inquiry drafted",description:"User staged 0.018 WETH, waiting on IRB sign-off before opening queue.",timestamp:Ne(1.4),kind:"creation"}],secureChannels:{},secureRequests:{}},{id:"194",title:"Autoimmune flare cytokine triangulation",creator:"0xA1c7...42f9",createdAt:Ne(18),status:"active",goal:"Cross-check serum cytokine spikes against wearable anomalies to pre-empt lupus flares.",traits:["Immunology","Wearables","Signal processing"],safetyNotes:"User has paused external downloads until HIPAA scrub complete; only hashed payloads permitted.",publicHint:"keccak256:0x549c...",deposit:.11,totalIncentive:.31,nextRequired:.034,token:"WETH",initiations:[{id:"194-init-0",researcher:"0xB4d1...aa12",ens:"etherwalk.base",amount:.033,status:"accepted",resolved:!1,updatedAt:Ne(4.2),channelOpen:!0,notes:"Drafted wearable anomaly matching notebook.",txHash:"0xbc42...aa90"},{id:"194-init-1",researcher:"0x7Aa0...19f2",ens:"synapsecraft.base",amount:.036,status:"pending",resolved:!1,updatedAt:Ne(2.6),channelOpen:!1,notes:"Waiting on compliance clearance.",txHash:"0x3d1e...fe44"},{id:"194-init-2",researcher:"0x5F4b...7cd1",ens:"labseven.base",amount:.041,status:"rejected",resolved:!0,updatedAt:Ne(6.8),channelOpen:!1,refund:.0369,treasuryCut:.0021,poolTopUp:.002,txHash:"0xf812...119b"}],timeline:[{id:"194-event-0",label:"Inquiry created",description:"User staked 0.11 WETH; regulatory hold noted.",timestamp:Ne(18),kind:"creation"},{id:"194-event-1",label:"Initiation accepted",description:"etherwalk.base granted encrypted access lane.",timestamp:Ne(7.4),kind:"accept"},{id:"194-event-2",label:"Compliance checkpoint",description:"Additional PHI scrub requested before new initiations are processed.",timestamp:Ne(5.3),kind:"update"},{id:"194-event-3",label:"Initiation rejected",description:"labseven.base refunded with 10% penalty.",timestamp:Ne(6.8),kind:"reject"}],secureChannels:{"194-init-0":[{id:"194-chat-0",author:"creator",authorLabel:"User",body:"Use masked IDs only; anomaly JSON in channel once IRB clears.",timestamp:Ne(4.1),status:"delivered"},{id:"194-chat-1",author:"0xB4d1...aa12",authorLabel:"etherwalk.base",body:"Mirroring template from prior MS study; will adapt once we see wearable schema.",timestamp:Ne(3.9),status:"delivered"}]},secureRequests:{"194-init-0":[{id:"194-req-0",label:"Share wearable anomaly export",detail:"JSON zipped, encrypted with shared session key.",status:"requested",updatedAt:Ne(3.8)},{id:"194-req-1",label:"Confirm cytokine units",detail:"Need standardization notes to align lab assays.",status:"fulfilled",updatedAt:Ne(2.9)}],"194-init-1":[{id:"194-req-2",label:"Provide compliance memo",detail:"Upload scrub confirmation once internal review signs off.",status:"requested",updatedAt:Ne(2.5)}]}},{id:"191",title:"POTS autonomic response mapping",creator:"0x6F22...91b0",createdAt:Ne(27),status:"active",goal:"Quantify autonomic nervous system drift in POTS patients using longitudinal HRV and metabolite data.",traits:["Autonomic","HRV","Metabolomics"],safetyNotes:"Encrypted chat approved for sharing de-identified HRV segments; raw clinic notes remain off-chain.",publicHint:"keccak256:0x8d31...",deposit:.09,totalIncentive:.24,nextRequired:.026,token:"WETH",initiations:[{id:"191-init-0",researcher:"0x8c72...3901",ens:"wavecodec.base",amount:.028,status:"worthy",resolved:!0,updatedAt:Ne(7.6),channelOpen:!0,notes:"Delivered HRV detrending module.",txHash:"0xa19f...be01"},{id:"191-init-1",researcher:"0xC73b...58af",ens:"labseven.base",amount:.031,status:"accepted",resolved:!1,updatedAt:Ne(3.2),channelOpen:!0,notes:"Analyzing metabolite variance clusters.",txHash:"0x7bd4...9112"},{id:"191-init-2",researcher:"0x5D21...bb84",ens:"helixia.base",amount:.034,status:"unworthy",resolved:!0,updatedAt:Ne(11.4),channelOpen:!1,refund:.0272,treasuryCut:.0034,poolTopUp:.0034,txHash:"0x4c22...771a"}],timeline:[{id:"191-event-0",label:"Inquiry created",description:"User locked 0.09 WETH and published HRV schema hash.",timestamp:Ne(27),kind:"creation"},{id:"191-event-1",label:"Initiation accepted",description:"wavecodec.base cleared to ingest anonymized HRV feed.",timestamp:Ne(18.1),kind:"accept"},{id:"191-event-2",label:"Marked worthy",description:"wavecodec.base scored for payout weighting.",timestamp:Ne(7.6),kind:"worthy"},{id:"191-event-3",label:"Marked unworthy",description:"helixia.base refunded 80%; penalty redistributed.",timestamp:Ne(11.4),kind:"unworthy"}],secureChannels:{"191-init-0":[{id:"191-chat-0",author:"0x8c72...3901",authorLabel:"wavecodec.base",body:"Uploading detrended HRV windows (hash QmXt4...).",timestamp:Ne(7.5),status:"delivered"}],"191-init-1":[{id:"191-chat-1",author:"creator",authorLabel:"User",body:"Need metabolite cluster summary before next milestone.",timestamp:Ne(3),status:"sent"}]},secureRequests:{"191-init-1":[{id:"191-req-0",label:"Upload metabolite PCA plot",detail:"PNG or JSON with component loadings.",status:"requested",updatedAt:Ne(2.8)}]}},{id:"184",title:"Long COVID lipid metabolomics",creator:"0xA1c7...42f9",createdAt:Ne(9),status:"active",goal:"Correlate circulating lipid ratios with persistent fatigue markers across 30 patient journals.",traits:["Bioinformatics","Long COVID","Metabolomics"],safetyNotes:"Sensitive longitudinal data. Require encrypted channel before any PHI transfer.",publicHint:"keccak256:0xa32f...",deposit:.15,totalIncentive:.42,nextRequired:.046,token:"WETH",initiations:[{id:"init-0",researcher:"0xB4d1...aa12",ens:"etherwalk.base",amount:.036,status:"worthy",resolved:!0,updatedAt:Ne(2),channelOpen:!0,notes:"Shared initial cohort alignment.",txHash:"0xdb3a...ab19"},{id:"init-1",researcher:"0xC73b...58af",ens:"labseven.base",amount:.041,status:"rejected",resolved:!0,updatedAt:Ne(4),channelOpen:!1,refund:.0369,treasuryCut:.0021,poolTopUp:.002,txHash:"0x9f21...bc11"},{id:"init-2",researcher:"0x9D82...c310",ens:"omicforge.base",amount:.048,status:"accepted",resolved:!1,updatedAt:Ne(1.2),channelOpen:!0,notes:"Awaiting raw LC-MS export.",txHash:"0x4ab2...45dd"}],timeline:[{id:"event-0",label:"Inquiry created",description:"User staked 0.15 WETH; hint published.",timestamp:Ne(9),kind:"creation"},{id:"event-1",label:"Initiation accepted",description:"etherwalk.base locked 0.036 WETH",timestamp:Ne(6.5),kind:"accept"},{id:"event-2",label:"Initiation rejected",description:"labseven.base refunded 0.0369 WETH, penalty split",timestamp:Ne(4),kind:"reject"},{id:"event-3",label:"Marked worthy",description:"etherwalk.base designated worthy for final payouts",timestamp:Ne(2),kind:"worthy"}],secureChannels:{"init-0":[{id:"chat-0",author:"creator",authorLabel:"User",body:"Can you confirm coverage of IL-6 across the cohort?",timestamp:Ne(2.5),status:"read"},{id:"chat-1",author:"0xB4d1...aa12",authorLabel:"etherwalk.base",body:"Uploading encrypted matrix now. Hash: QmVk7...nP1",timestamp:Ne(2.3),status:"delivered"}],"init-2":[{id:"chat-2",author:"creator",authorLabel:"User",body:"Need normalized intensity tables by tomorrow for review.",timestamp:Ne(1.1),status:"sent"}]},secureRequests:{"init-0":[{id:"req-0",label:"Upload raw metabolite ratios",detail:"Prefer CSV zipped + encrypted via Soma channel.",status:"fulfilled",updatedAt:Ne(2.2)}],"init-2":[{id:"req-1",label:"Provide anonymized consent forms",detail:"Signed PDF, redact direct identifiers.",status:"requested",updatedAt:Ne(.9)}]}},{id:"173",title:"Neuroimmune flare early detection",creator:"0x6F22...91b0",createdAt:Ne(32),status:"completed",goal:"Train lightweight classifier to flag pre-relapse biomarkers from wearable data.",traits:["ML","Neuroimmune","Wearables"],safetyNotes:"Data derived from blinded study; anonymized streams only.",publicHint:"ipfs://bafybeidemo",deposit:.12,totalIncentive:0,nextRequired:0,token:"WETH",initiations:[{id:"173-init-0",researcher:"0xB4d1...aa12",ens:"etherwalk.base",amount:.038,status:"worthy",resolved:!0,updatedAt:Ne(24.5),channelOpen:!0,notes:"Submitted feature engineering script.",txHash:"0x8a7b...92be"},{id:"173-init-1",researcher:"0xC73b...58af",ens:"labseven.base",amount:.042,status:"unworthy",resolved:!0,updatedAt:Ne(26),channelOpen:!0,refund:.0336,treasuryCut:.0042,poolTopUp:.0042,txHash:"0x6cd1...ad02"}],timeline:[{id:"173-event-0",label:"Inquiry completed",description:"User received 0.028 WETH creator cut.",timestamp:Ne(20),kind:"complete"},{id:"173-event-1",label:"Treasury top up",description:"0.0042 WETH routed to SomaTreasury.",timestamp:Ne(26),kind:"update"},{id:"173-event-2",label:"Research pot distributed",description:"0.084 WETH streamed to worthy researcher wavecodec.base.",timestamp:Ne(19.5),kind:"worthy"}],secureChannels:{},secureRequests:{},completionSummary:{userCut:.028,researchPot:.084,worthyCount:1,txHash:"0x1a3f...7712"}}],cv=q.createContext(void 0),qS=({children:t})=>{const[e,n]=q.useState([]),i=q.useCallback(o=>{n(l=>l.filter(c=>c.id!==o))},[]),r=q.useCallback(()=>{n([])},[]),s=q.useCallback(o=>{const l=crypto.randomUUID(),c={...o,id:l,createdAt:Date.now()};n(d=>[...d.slice(-2),c]),typeof window<"u"&&window.setTimeout(()=>{i(l)},1e3)},[i]),a=q.useMemo(()=>({toasts:e,pushToast:s,dismissToast:i,clearToasts:r}),[e,s,i,r]);return g.jsx(cv.Provider,{value:a,children:t})},uv=()=>{const t=q.useContext(cv);if(!t)throw new Error("useToastContext must be used within ToastProvider");return t},dv=q.createContext(void 0),Jn=t=>({...t,initiations:t.initiations.map(e=>({...e})),timeline:t.timeline.map(e=>({...e})),secureChannels:Object.fromEntries(Object.entries(t.secureChannels).map(([e,n])=>[e,n.map(i=>({...i}))])),secureRequests:Object.fromEntries(Object.entries(t.secureRequests).map(([e,n])=>[e,n.map(i=>({...i}))])),completionSummary:t.completionSummary?{...t.completionSummary}:void 0}),Cn=()=>new Date().toISOString(),Ys=t=>{const e=Math.max(t*.11,.015);return Number(e.toFixed(3))},$S=({children:t})=>{const[e,n]=q.useState(WS),[i,r]=q.useState(()=>XS.map(R=>Jn(R))),{pushToast:s}=uv(),a=q.useMemo(()=>[{address:"0xB4d1...aa12",ens:"etherwalk.base"},{address:"0xC73b...58af",ens:"labseven.base"},{address:"0x9D82...c310",ens:"omicforge.base"}],[]),o=q.useCallback(R=>{let C=null;if(r(M=>{const O=(M.reduce((V,z)=>Math.max(V,Number(z.id)||0),0)+1).toString(),y=Cn(),T=Ys(R.deposit);return C={id:O,title:R.title,creator:e.address,createdAt:y,status:"created",goal:R.goal,traits:R.traits,safetyNotes:R.safetyNotes,publicHint:R.publicHint,deposit:Number(R.deposit.toFixed(3)),totalIncentive:Number(R.deposit.toFixed(3)),nextRequired:T,token:"WETH",initiations:[],timeline:[{id:crypto.randomUUID(),label:"Inquiry created",description:`User staked ${R.deposit.toFixed(3)} WETH; hint published.`,timestamp:y,kind:"creation"}],secureChannels:{},secureRequests:{}},[C,...M]}),!C)throw new Error("Failed to create inquiry");return n(M=>({...M,wethBalance:Number(Math.max(M.wethBalance-R.deposit,0).toFixed(3))})),s({title:"Inquiry drafted",description:`Mock tx hash 0x${C.id.padStart(8,"0")} broadcasted`,variant:"success"}),C},[s,e.address]),l=q.useCallback((R,C)=>{r(M=>M.map(P=>P.id===R?C(Jn(P)):P))},[]),c=q.useCallback((R,C,M)=>{l(R,P=>{const O=Jn(P),y=O.initiations.find(T=>T.id===C);return y&&(M(y,O),O.nextRequired=Ys(Math.max(O.totalIncentive,0))),O})},[l]),d=q.useCallback(R=>{const C=i.find(P=>P.id===R);if(!C)return;const M=Number((C.nextRequired||Ys(C.totalIncentive)).toFixed(3));if(M<=0){s({title:"Initiation blocked",description:"Inquiry no longer accepts additional stakes",variant:"warning"});return}if(e.wethBalance<M){s({title:"Insufficient WETH",description:`Need ${M.toFixed(3)} WETH to initiate`,variant:"error"});return}l(R,P=>{const O=Jn(P),y=Number((O.nextRequired||Ys(O.totalIncentive)).toFixed(3)),T=Cn(),V={id:crypto.randomUUID(),researcher:e.address,ens:e.ens,amount:y,status:"pending",resolved:!1,updatedAt:T,channelOpen:!1};return O.initiations=[...O.initiations,V],O.totalIncentive=Number((O.totalIncentive+y).toFixed(3)),O.nextRequired=Ys(O.totalIncentive),O.timeline.unshift({id:crypto.randomUUID(),label:"Initiation submitted",description:`${e.ens??e.address} staked ${y.toFixed(3)} WETH`,timestamp:T,kind:"initiation"}),O}),n(P=>({...P,wethBalance:Number(Math.max(P.wethBalance-M,0).toFixed(3))})),s({title:"Initiation broadcast",description:`Locked ${M.toFixed(3)} WETH into EscrowVault`,variant:"success"})},[i,s,l,e.address,e.ens,e.wethBalance]),h=q.useCallback((R,C)=>{c(R,C,(M,P)=>{M.status="accepted",M.resolved=!1,M.channelOpen=!0,M.updatedAt=Cn(),P.timeline.unshift({id:crypto.randomUUID(),label:"Initiation accepted",description:`${M.ens??M.researcher} is cleared to collaborate`,timestamp:M.updatedAt,kind:"accept"})}),s({title:"Secure channel opened",description:"Encrypted drawer unlocked for researcher",variant:"success"})},[c,s]),f=q.useCallback((R,C)=>{c(R,C,(M,P)=>{M.status="rejected",M.resolved=!0,M.channelOpen=!1,M.refund=Number((M.amount*.9).toFixed(4)),M.treasuryCut=Number((M.amount*.05).toFixed(4)),M.poolTopUp=Number((M.amount*.05).toFixed(4)),M.updatedAt=Cn(),P.totalIncentive=Number((P.totalIncentive-(M.refund||0)-(M.treasuryCut||0)).toFixed(3)),P.timeline.unshift({id:crypto.randomUUID(),label:"Initiation rejected",description:`${M.ens??M.researcher} refunded ${M.refund} WETH`,timestamp:M.updatedAt,kind:"reject"})}),s({title:"Initiation rejected",description:"Refund dispatched, penalty routed",variant:"warning"})},[c,s]),m=q.useCallback((R,C)=>{c(R,C,(M,P)=>{M.status="worthy",M.resolved=!0,M.updatedAt=Cn(),P.timeline.unshift({id:crypto.randomUUID(),label:"Marked worthy",description:`${M.ens??M.researcher} eligible for final payout`,timestamp:M.updatedAt,kind:"worthy"})}),s({title:"Researcher marked worthy",description:"Will share in the research pot on completion",variant:"success"})},[c,s]),_=q.useCallback((R,C)=>{c(R,C,(M,P)=>{M.status="unworthy",M.resolved=!0,M.channelOpen=!1,M.refund=Number((M.amount*.8).toFixed(4)),M.treasuryCut=Number((M.amount*.1).toFixed(4)),M.poolTopUp=Number((M.amount*.1).toFixed(4)),M.updatedAt=Cn(),P.totalIncentive=Number((P.totalIncentive-(M.treasuryCut||0)).toFixed(3)),P.timeline.unshift({id:crypto.randomUUID(),label:"Marked unworthy",description:`${M.ens??M.researcher} refunded ${M.refund} WETH`,timestamp:M.updatedAt,kind:"unworthy"})}),s({title:"Researcher marked unworthy",description:"Pool and treasury penalties applied",variant:"warning"})},[c,s]),S=q.useCallback(R=>{l(R,C=>{const M=Jn(C),P=M.initiations.filter(z=>z.status==="worthy").length,O=M.totalIncentive,y=Number((O*.1).toFixed(3)),T=Number((O-y).toFixed(3)),V=Cn();return M.status="completed",M.completionSummary={userCut:y,researchPot:T,worthyCount:P,txHash:`0x${R.padStart(8,"0")}`},M.timeline.unshift({id:crypto.randomUUID(),label:"Inquiry completed",description:`User received ${y} WETH; ${P} worthy researchers paid.`,timestamp:V,kind:"complete"}),M.totalIncentive=0,M.nextRequired=0,M}),s({title:"Inquiry settled",description:"User cut + research pot distributed",variant:"success"})},[s,l]),p=q.useCallback((R,C)=>{l(R,M=>{const P=Jn(M);return P.secureChannels[C]||(P.secureChannels[C]=[]),P.secureChannels[C].push({id:crypto.randomUUID(),author:"system",authorLabel:"System",body:"Secure tunnel established. Share encrypted metabolomics payloads only.",timestamp:Cn(),status:"delivered"}),P}),s({title:"Secure channel ready",description:"End-to-end encrypted drawer active",variant:"success"})},[s,l]),u=q.useCallback((R,C,M)=>{l(R,P=>{const O=Jn(P);return O.secureChannels[C]||(O.secureChannels[C]=[]),O.secureChannels[C].push({...M,id:crypto.randomUUID(),timestamp:Cn()}),O})},[l]),v=q.useCallback((R,C,M)=>{l(R,P=>{const O=Jn(P);return O.secureRequests[C]||(O.secureRequests[C]=[]),O.secureRequests[C].push({...M,id:crypto.randomUUID(),updatedAt:Cn()}),O}),s({title:"Request logged",description:M.label,variant:"default"})},[s,l]),x=q.useCallback((R,C,M)=>{l(R,P=>{const O=Jn(P),y=O.secureRequests[C];if(!y)return O;const T=y.find(V=>V.id===M);return T&&(T.status="fulfilled",T.updatedAt=Cn()),O}),s({title:"Request fulfilled",description:"Encrypted payload posted to channel",variant:"success"})},[s,l]),w=q.useMemo(()=>({wallet:e,inquiries:i,researchers:a,initiateInquiry:d,createInquiry:o,acceptInitiation:h,rejectInitiation:f,markWorthy:m,markUnworthy:_,completeInquiry:S,openSecureChannel:p,addChannelMessage:u,addSecureRequest:v,resolveSecureRequest:x}),[e,i,a,d,o,h,f,m,_,S,p,u,v,x]);return g.jsx(dv.Provider,{value:w,children:t})},Ir=()=>{const t=q.useContext(dv);if(!t)throw new Error("useMockData must be used within MockDataProvider");return t},Dp=()=>{const{wallet:t}=Ir(),e=t.address.replace(/(.{6}).+(.{4})/,"$1...$2"),n=async()=>{try{await navigator.clipboard.writeText(t.address)}catch(i){console.error("clipboard",i)}};return g.jsxs("div",{className:"flex w-full flex-wrap items-center gap-x-3 gap-y-2 rounded border border-slate-800 bg-slate-900/80 px-3 py-2 shadow-sm sm:w-auto sm:flex-nowrap",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs text-slate-400",children:[g.jsxs("span",{className:"inline-flex items-center gap-1.5 font-mono",children:[g.jsx(GS,{className:"h-3.5 w-3.5 text-soma-teal"}),t.ens??e]}),g.jsx("button",{type:"button",onClick:n,className:"rounded p-1 text-slate-500 transition hover:bg-slate-800 hover:text-slate-100","aria-label":"Copy wallet address",children:g.jsx(LS,{className:"h-3 w-3"})})]}),g.jsx("div",{className:"hidden h-6 w-px bg-slate-800 sm:block"}),g.jsxs("div",{className:"flex flex-1 min-w-[160px] flex-col text-xs text-slate-400 sm:min-w-0 sm:flex-none",children:[g.jsx("p",{className:"font-medium text-slate-200",children:t.networkLabel}),g.jsxs("p",{className:"mt-0.5 font-mono text-[11px] text-slate-500",children:[t.ethBalance.toFixed(2)," ETH · ",t.wethBalance.toFixed(2)," WETH"]})]}),g.jsx(sv,{className:"ml-auto h-4 w-4 text-slate-600 sm:ml-2"})]})},YS="/assets/Soma_logo-DdgV_DSd.png",Ip=[{to:"/",label:"Overview"},{to:"/user",label:"User"},{to:"/researcher",label:"Researcher"},{to:"/treasurer",label:"Treasurer"}],KS=()=>{const[t,e]=q.useState(!1),n=()=>e(r=>!r),i=()=>e(!1);return g.jsx("header",{className:"border-b border-dotted border-slate-800/80 bg-slate-950/70 backdrop-blur",children:g.jsxs("div",{className:"mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"flex items-center justify-between gap-4",children:[g.jsxs(kc,{to:"/",className:"flex items-center gap-2 text-soma-teal",onClick:i,children:[g.jsx("span",{className:"inline-flex h-8 w-8 items-center justify-center rounded-full border border-soma-teal/60 bg-slate-900",children:g.jsx("img",{src:YS,alt:"Soma",className:"h-6 w-6"})}),g.jsx("span",{className:"text-sm font-semibold tracking-wide text-slate-200",children:"Soma"})]}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"hidden md:flex",children:g.jsx(Dp,{})}),g.jsx("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded border border-slate-800/60 bg-slate-900/70 p-2 text-slate-300 transition hover:border-slate-700 hover:text-slate-100 md:hidden","aria-expanded":t,"aria-controls":"primary-navigation",children:t?g.jsx(ov,{className:"h-5 w-5"}):g.jsx(kS,{className:"h-5 w-5"})})]})]}),g.jsx("nav",{id:"primary-navigation",className:"hidden items-center gap-4 text-sm text-slate-400 md:flex",children:Ip.map(r=>g.jsx(kc,{to:r.to,className:({isActive:s})=>Ll("px-2 py-1 transition",s?"text-soma-lime":"hover:text-slate-200"),children:r.label},r.to))}),t?g.jsx("nav",{className:"flex flex-col gap-2 rounded-lg border border-slate-800/70 bg-slate-950/80 p-4 text-sm text-slate-300 md:hidden",children:Ip.map(r=>g.jsx(kc,{to:r.to,onClick:i,className:({isActive:s})=>Ll("rounded px-2 py-2 transition",s?"bg-slate-900 text-soma-lime":"hover:bg-slate-900/80"),children:r.label},r.to))}):null,g.jsx("div",{className:"md:hidden",children:g.jsx(Dp,{})})]})})};function Up(...t){return Ll(...t)}function ZS(t,e=4){if(t.length<=e*2+2)return t;const n=t.slice(0,e+2),i=t.slice(-e);return`${n}...${i}`}function QS(t){const e=t instanceof Date?t:new Date(t);if(Number.isNaN(e.getTime()))return"just now";const n=Math.max(0,Date.now()-e.getTime()),i=Math.floor(n/1e3);if(i<4)return"just now";if(i<60)return`${i}s ago`;const r=Math.floor(i/60);if(r<60)return`${r}m ago`;const s=Math.floor(r/60);return s<24?`${s}h ago`:`${Math.floor(s/24)}d ago`}const JS={creation:"border-soma-teal/40 text-soma-teal",accept:"border-soma-lime/50 text-soma-lime",update:"border-slate-600 text-slate-300",reject:"border-amber-300/40 text-amber-200",complete:"border-soma-lime/40 text-soma-lime",worthy:"border-soma-lime/60 text-soma-lime",unworthy:"border-rose-400/40 text-rose-200"},eM=()=>{const{inquiries:t}=Ir(),[e,n]=q.useState(0),i=q.useMemo(()=>t.flatMap(r=>r.timeline.map(s=>({id:`${r.id}-${s.id}`,inquiryId:r.id,inquiryTitle:r.title,status:r.status,eventLabel:s.label,eventKind:s.kind,timestamp:s.timestamp}))).sort((r,s)=>new Date(s.timestamp).getTime()-new Date(r.timestamp).getTime()).slice(0,5),[t,e]);return q.useEffect(()=>{const r=setInterval(()=>n(s=>s+1),6e3);return()=>clearInterval(r)},[]),g.jsxs("section",{className:"rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5",children:[g.jsxs("div",{className:"flex items-center justify-between text-sm text-slate-300",children:[g.jsxs("span",{className:"inline-flex items-center gap-2 font-medium text-slate-100",children:[g.jsx(OS,{className:"h-4 w-4 text-soma-teal"}),"Latest inquiry events"]}),g.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Synced off InquiryManager logs"})]}),g.jsx("div",{className:"mt-4 space-y-3",children:i.map(r=>g.jsxs(Hn,{to:`/researcher/inquiries/${r.inquiryId}`,className:"flex flex-col gap-2 rounded-xl border border-slate-800/60 bg-slate-950/80 px-4 py-3 text-sm text-slate-300 transition hover:border-soma-teal/60",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[g.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-500",children:[g.jsx(US,{className:"h-4 w-4 text-slate-400"}),"#",r.inquiryId]}),g.jsx("span",{className:`rounded-full border px-2 py-0.5 text-[11px] uppercase tracking-wide ${JS[r.eventKind]??"border-slate-700 text-slate-300"}`,children:r.eventKind})]}),g.jsx("div",{className:"text-base font-semibold text-slate-100",children:r.inquiryTitle}),g.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs text-slate-400",children:[g.jsx("span",{className:"font-mono text-slate-200",children:r.eventLabel}),g.jsx("span",{className:"font-mono text-slate-500",children:QS(r.timestamp)})]}),g.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[g.jsx(PS,{className:"h-3.5 w-3.5 text-soma-teal"}),"View inquiry detail"]})]},r.id))})]})},Fp=()=>g.jsxs("div",{className:"space-y-12",children:[g.jsxs("section",{className:"relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-glow before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(34,225,255,0.12),transparent_60%)]",children:[g.jsxs("div",{className:"relative z-10 space-y-6",children:[g.jsx("span",{className:"inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs font-mono uppercase tracking-wide text-slate-300",children:"SOMA // DeSci // Peptides // Genomics"}),g.jsx("h1",{className:"text-3xl font-semibold text-slate-100 sm:text-4xl",children:"Genomics related research questions"}),g.jsx("p",{className:"max-w-2xl text-sm text-slate-300",children:"Soma stages genomics-driven research questions with incentives while keeping sensitive data encrypted. Peptide insights guide collaboration, on-chain incentives settle once the work is complete and deemed worthy."}),g.jsxs("div",{className:"flex flex-wrap gap-3 text-sm",children:[g.jsx("button",{type:"button",className:"inline-flex cursor-not-allowed items-center gap-2 rounded border border-soma-lime/60 bg-slate-900 px-4 py-2 font-medium text-soma-lime/70",disabled:!0,children:"Register with MetaMask (coming soon)"}),g.jsxs(Hn,{to:"/user",className:"inline-flex items-center gap-2 rounded border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-soma-teal/60 hover:text-soma-teal",children:["Visit user portal",g.jsx(Zf,{className:"h-4 w-4"})]})]})]}),g.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/80 via-transparent","aria-hidden":!0})]}),g.jsxs("section",{className:"grid gap-6 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 md:grid-cols-2",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Peptides & you"}),g.jsx("h2",{className:"text-xl font-semibold text-slate-100",children:"Why peptides drive the protocol"}),g.jsx("p",{className:"text-sm text-slate-300",children:"Your peptide signatures can reveal how prior treatments interact with your current genomics. Soma maps those changes to tailored research questions so you can incentivise the exact expertise you need—without exposing raw files until you choose to share them. Researchers on the platform build credibility by repeatedly answering specific peptide-focused inquiries, so you can quickly spot specialists whose expertise aligns with your data."})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Genomic alignment"}),g.jsx("p",{className:"text-sm text-slate-300",children:"Each inquiry stores a public summary for researchers while the full datasets remain locked in an encrypted channel. When the work concludes, payouts settle on-chain and you retain a ledger of which peptides or variants guided the collaboration."})]})]}),g.jsxs("section",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Protocol pulse"}),g.jsx("h2",{className:"mt-2 text-lg font-semibold text-slate-100",children:"Latest inquiry events"}),g.jsx("p",{className:"mt-2 text-sm text-slate-400",children:"Follow the most recent activity across Soma inquiries to understand where incentives, penalties, and encrypted channels are moving in real time."}),g.jsx("div",{className:"mt-5",children:g.jsx(eM,{})})]})]}),po=[{key:"focus",label:"Incentivise research"},{key:"review",label:"Review"}],mo=[{id:"peptide-variant",label:"Peptide signature vs rare variant",blurb:"Cross-check peptide abundance shifts against a specific variant of interest."},{id:"longitudinal-response",label:"Therapeutic response timeline",blurb:"Map peptide changes over time to assess how a therapy modulates your genomics."},{id:"immune-landscape",label:"Immune landscape reconstruction",blurb:"Rebuild immune pathways from peptide readouts to inform clinical decisions."}],tM=()=>{const t=Kf(),{wallet:e,createInquiry:n}=Ir(),[i,r]=q.useState(0),[s,a]=q.useState({questionType:mo[0].id,publicSummary:"Peptide anomalies following mitochondrial therapy—need correlation to mtDNA variants.",dataHash:"bafybeigdyrrarevariantrefs",deposit:.01}),o=mo.find(f=>f.id===s.questionType)??mo[0],l=q.useMemo(()=>i===0?s.publicSummary.trim().length>10:!0,[s.publicSummary,i]),c=()=>r(f=>Math.min(f+1,po.length-1)),d=()=>r(f=>Math.max(f-1,0)),h=f=>{f.preventDefault();const m=n({title:o.label,goal:s.publicSummary,traits:[o.label],safetyNotes:s.dataHash?`Data hash: ${s.dataHash}`:"",deposit:s.deposit,publicHint:s.publicSummary});t(`/user/inquiries/${m.id}`)};return g.jsxs("div",{className:"space-y-8",children:[g.jsx("header",{className:"flex flex-wrap items-center justify-between gap-4",children:g.jsxs("div",{children:[g.jsxs("button",{onClick:()=>t(-1),className:"inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200",children:[g.jsx(Nl,{className:"h-4 w-4"}),"Back"]}),g.jsx("h1",{className:"mt-4 text-2xl font-semibold text-slate-100",children:"Create inquiry"}),g.jsx("p",{className:"mt-2 text-sm text-slate-400",children:"Choose the research focus, share what peptides reveal, and deposit WETH to incentivise work."})]})}),g.jsx("ol",{className:"flex flex-wrap gap-3 text-xs uppercase tracking-wide text-slate-500",children:po.map((f,m)=>g.jsxs("li",{className:Up("flex items-center gap-2 rounded-full border px-3 py-1",m===i?"border-soma-lime/60 bg-slate-900 text-soma-lime":m<i?"border-soma-teal/40 bg-slate-900/60 text-soma-teal":"border-slate-800/60 bg-slate-900/40"),children:[g.jsxs("span",{className:"font-mono",children:["0",m+1]}),f.label]},f.key))}),g.jsxs("form",{onSubmit:h,className:"grid gap-6 lg:grid-cols-[3fr,2fr]",children:[g.jsxs("div",{className:"space-y-6",children:[i===0&&g.jsxs("section",{className:"space-y-6 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-100",children:"Incentivise research"}),g.jsx("p",{className:"text-sm text-slate-400",children:"Select the question type that best matches the peptide story you want investigated. Add the encrypted data hash so you can prove what you're willing to release."})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Research question types"}),g.jsx("div",{className:"space-y-3",children:mo.map(f=>{const m=f.id===s.questionType;return g.jsxs("button",{type:"button",onClick:()=>a(_=>({..._,questionType:f.id})),className:Up("w-full rounded-xl border px-4 py-3 text-left transition",m?"border-soma-teal/60 bg-slate-950/80 text-slate-100":"border-slate-800/60 bg-slate-950/40 text-slate-300 hover:border-slate-700"),children:[g.jsx("p",{className:"font-medium text-slate-100",children:f.label}),g.jsx("p",{className:"mt-1 text-sm text-slate-400",children:f.blurb})]},f.id)})})]}),g.jsxs("label",{className:"block text-sm text-slate-300",children:["Public summary",g.jsx("textarea",{value:s.publicSummary,onChange:f=>a(m=>({...m,publicSummary:f.target.value})),rows:5,placeholder:"Explain the peptide signal or mutation you want researchers to focus on.",className:"mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100",required:!0})]}),g.jsxs("label",{className:"block text-sm text-slate-300",children:["Data hash (optional)",g.jsx("input",{type:"text",value:s.dataHash,onChange:f=>a(m=>({...m,dataHash:f.target.value})),placeholder:"cid:... or keccak256 hash of encrypted files",className:"mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 font-mono text-xs text-slate-100"})]}),g.jsxs("label",{className:"block text-sm text-slate-300",children:["Deposit (WETH)",g.jsx("input",{type:"number",min:"0.01",step:"0.001",value:s.deposit,onChange:f=>a(m=>({...m,deposit:Number(f.target.value)})),className:"mt-1 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"}),g.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Deposit stays in escrow until you mark work complete."})]})]}),i===1&&g.jsxs("section",{className:"space-y-5 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-100",children:"Review"}),g.jsxs("div",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-4 text-sm text-slate-300",children:[g.jsx("p",{className:"font-semibold text-slate-200",children:o.label}),g.jsx("p",{className:"mt-2 text-slate-400",children:s.publicSummary||"Add a public summary"})]}),g.jsxs("div",{className:"grid gap-3 text-sm md:grid-cols-2",children:[g.jsxs("div",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-4",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Data hash"}),g.jsx("p",{className:"mt-2 font-mono text-xs text-slate-200",children:s.dataHash?s.dataHash:"No hash provided"})]}),g.jsxs("div",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-4",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Deposit"}),g.jsxs("p",{className:"mt-2 font-mono text-lg text-slate-100",children:[s.deposit.toFixed(3)," WETH"]}),g.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Next initiation estimate ",Math.max(s.deposit*.11,.015).toFixed(3)," WETH"]})]})]})]})]}),g.jsxs("aside",{className:"space-y-4",children:[g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-950/80 p-6 text-sm text-slate-300",children:[g.jsx("h2",{className:"text-base font-semibold text-slate-100",children:"Status"}),g.jsxs("ul",{className:"mt-4 space-y-3",children:[g.jsxs("li",{className:"text-soma-lime",children:[g.jsx("span",{className:"font-mono text-xs",children:"Create"}),g.jsx("p",{className:"text-slate-400",children:"Draft inquiry and deposit funds."})]}),g.jsxs("li",{className:"text-slate-500",children:[g.jsx("span",{className:"font-mono text-xs",children:"Encrypted channel"}),g.jsx("p",{className:"text-slate-400",children:"Unlock secure comms once a researcher is accepted."})]}),g.jsxs("li",{className:"text-slate-500",children:[g.jsx("span",{className:"font-mono text-xs",children:"Completion"}),g.jsx("p",{className:"text-slate-400",children:"Mark worthy outcomes, release payouts."})]})]})]}),g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-950/80 p-6 text-sm text-slate-300",children:[g.jsx("h2",{className:"text-base font-semibold text-slate-100",children:"Action"}),g.jsxs("div",{className:"mt-4 flex flex-col gap-3",children:[i>0&&g.jsxs("button",{type:"button",onClick:d,className:"inline-flex items-center justify-center gap-2 rounded border border-slate-700 px-4 py-2 text-slate-300 transition hover:text-slate-100",children:[g.jsx(Nl,{className:"h-4 w-4"}),"Back"]}),i<po.length-1&&g.jsxs("button",{type:"button",onClick:c,disabled:!l,className:"inline-flex items-center justify-center gap-2 rounded border border-soma-teal/60 bg-slate-900 px-4 py-2 font-medium text-soma-teal transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:border-slate-800 disabled:text-slate-500",children:["Continue",g.jsx(Zf,{className:"h-4 w-4"})]}),i===po.length-1&&g.jsx("button",{type:"submit",className:"inline-flex items-center justify-center gap-2 rounded border border-soma-lime/60 bg-slate-900 px-4 py-2 font-medium text-soma-lime transition hover:bg-slate-800",children:"Mock submit"}),g.jsxs("p",{className:"flex items-start gap-2 text-xs text-slate-500",children:[g.jsx(FS,{className:"mt-0.5 h-3.5 w-3.5 text-soma-teal"}),"Deposits and payouts are simulated in this prototype; no chain calls occur yet."]})]})]})]})]})]})},nM=t=>t==="worthy"?"text-soma-lime":t==="accepted"?"text-soma-teal":t==="rejected"||t==="unworthy"?"text-red-400":"text-slate-400",iM=()=>{const{inquiries:t,initiateInquiry:e,wallet:n}=Ir(),i=t.filter(a=>a.status!=="completed"),r=t.flatMap(a=>a.initiations.filter(o=>o.researcher===n.address&&["pending","accepted","worthy"].includes(o.status)).map(o=>({inquiry:a,initiation:o}))).slice(0,3),s=i.slice(0,4);return g.jsxs("div",{className:"space-y-10",children:[g.jsxs("header",{className:"space-y-3",children:[g.jsx("h1",{className:"text-2xl font-semibold text-slate-100",children:"Researcher portal"}),g.jsx("p",{className:"text-sm text-slate-400",children:"Survey open Soma inquiries, check the next WETH stake, and jump straight into encrypted channels once you're accepted."})]}),g.jsxs("section",{className:"grid gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 md:grid-cols-[1.1fr,1fr]",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Open inquiries"}),s.length===0?g.jsx("p",{className:"text-xs text-slate-500",children:"No live inquiries in the queue right now."}):g.jsx("div",{className:"space-y-3",children:s.map(a=>g.jsxs(Hn,{to:`/researcher/inquiries/${a.id}`,className:"block rounded border border-slate-800/70 bg-slate-950/70 p-4 text-sm text-slate-300 transition hover:border-soma-teal/60",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500",children:[g.jsxs("span",{className:"font-mono",children:["#",a.id]}),g.jsxs("span",{className:"rounded-full border border-slate-700 px-2 py-0.5 uppercase tracking-wide text-[10px]",children:["Next ",a.nextRequired.toFixed(3)," WETH"]})]}),g.jsx("p",{className:"mt-2 text-sm font-semibold text-slate-100",children:a.publicHint}),g.jsxs("dl",{className:"mt-3 grid gap-2 text-xs text-slate-400 sm:grid-cols-3",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Total pool"}),g.jsxs("dd",{className:"font-mono text-slate-200",children:[a.totalIncentive.toFixed(3)," WETH"]})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Accepted channels"}),g.jsx("dd",{className:"font-mono text-slate-200",children:a.initiations.filter(o=>o.status==="accepted"||o.status==="worthy").length})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Penalties"}),g.jsxs("dd",{className:"font-mono text-slate-200",children:[a.initiations.reduce((o,l)=>o+(l.treasuryCut??0),0).toFixed(3)," WETH"]})]})]})]},a.id))})]}),g.jsxs("div",{className:"rounded-xl border border-slate-800/70 bg-slate-950/70 p-5 text-sm text-slate-300",children:[g.jsx("p",{className:"font-semibold text-slate-100",children:"My active initiations"}),r.length===0?g.jsx("p",{className:"mt-2 text-xs text-slate-500",children:"No active initiations for this wallet yet."}):g.jsx("div",{className:"mt-4 space-y-3",children:r.map(({inquiry:a,initiation:o})=>g.jsxs(Hn,{to:`/researcher/inquiries/${a.id}/initiations/${o.id}`,className:"block rounded border border-slate-800/60 bg-slate-950/60 p-3 transition hover:border-soma-teal/60",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[g.jsxs("span",{className:"font-mono",children:["#",a.id]}),g.jsx("span",{className:"rounded-full border border-slate-700 px-2 py-0.5 uppercase tracking-wide text-[10px]",children:o.status})]}),g.jsx("p",{className:"mt-2 text-sm font-medium text-slate-100",children:a.publicHint}),g.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Stake ",o.amount.toFixed(3)," WETH"]})]},o.id))})]})]}),g.jsxs("section",{className:"space-y-5",children:[g.jsx("div",{className:"flex flex-wrap items-center justify-between gap-3",children:g.jsxs("div",{children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Opportunities"}),g.jsx("h2",{className:"text-lg font-semibold text-slate-100",children:"Open inquiries"})]})}),g.jsx("div",{className:"grid gap-5 xl:grid-cols-2",children:i.map(a=>g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/40",children:[g.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[g.jsxs("div",{children:[g.jsxs("span",{className:"font-mono text-xs text-slate-500",children:["#",a.id]}),g.jsx("h3",{className:"mt-2 text-lg font-semibold text-slate-100",children:a.publicHint}),g.jsx("p",{className:"mt-2 max-w-xl text-sm text-slate-400",children:a.goal})]}),g.jsxs("div",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-4 text-xs text-slate-300",children:[g.jsx("p",{className:"font-semibold text-slate-200",children:"Next stake"}),g.jsxs("p",{className:"mt-2 font-mono text-slate-100",children:[a.nextRequired.toFixed(3)," WETH"]}),g.jsx("p",{className:"text-[11px] text-slate-500",children:"Required to initiate"})]})]}),g.jsxs("div",{className:"mt-6 grid gap-4 text-sm md:grid-cols-3",children:[g.jsxs("div",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-4",children:[g.jsx("p",{className:"font-semibold text-slate-200",children:"Total incentive"}),g.jsxs("p",{className:"mt-2 font-mono text-slate-100",children:[a.totalIncentive.toFixed(3)," WETH"]})]}),g.jsxs("div",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-4",children:[g.jsx("p",{className:"font-semibold text-slate-200",children:"Accepted channels"}),g.jsx("p",{className:"mt-2 text-slate-100",children:a.initiations.filter(o=>o.status==="accepted"||o.status==="worthy").length})]}),g.jsxs("div",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-4",children:[g.jsx("p",{className:"font-semibold text-slate-200",children:"Treasury penalties"}),g.jsxs("p",{className:"mt-2 text-slate-100",children:[a.initiations.reduce((o,l)=>o+(l.treasuryCut??0),0).toFixed(3)," WETH"]})]})]}),g.jsxs("div",{className:"mt-6 space-y-3",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Recent initiations"}),g.jsx("div",{className:"space-y-3",children:a.initiations.slice(-3).reverse().map(o=>g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 rounded border border-slate-800/60 bg-slate-950/60 px-4 py-3",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-medium text-slate-100",children:o.ens??o.researcher}),g.jsx("p",{className:"text-xs text-slate-500",children:new Date(o.updatedAt).toLocaleString()})]}),g.jsxs("div",{className:"text-right",children:[g.jsxs("p",{className:"font-mono text-sm text-slate-200",children:[o.amount.toFixed(3)," WETH"]}),g.jsx("p",{className:`text-xs ${nM(o.status)}`,children:o.status})]})]},o.id))})]}),g.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-between gap-3",children:[g.jsxs("button",{type:"button",onClick:()=>e(a.id),className:"inline-flex items-center gap-2 rounded border border-soma-teal/60 bg-slate-900 px-4 py-2 text-sm font-medium text-soma-teal transition hover:bg-slate-800",children:[g.jsx(NS,{className:"h-4 w-4"}),"Initiate (mock)"]}),g.jsxs(Hn,{to:`/researcher/inquiries/${a.id}`,className:"inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-slate-100",children:["Inspect inquiry",g.jsx(av,{className:"h-4 w-4"})]})]})]},a.id))}),i.length===0?g.jsx("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-8 text-center text-sm text-slate-400",children:"No open inquiries at the moment. Set alerts on-chain or check back soon."}):null]})]})},rM=[{key:"created",label:"Created"},{key:"completed",label:"Completed"}],sM=[{id:"template-0",label:"Request encrypted dataset",detail:"Share the encrypted archive referenced by your data hash.",status:"requested",updatedAt:new Date().toISOString()},{id:"template-1",label:"Confirm peptide assay",detail:"Clarify assay units and collection protocol to align analysis.",status:"requested",updatedAt:new Date().toISOString()}],go=({persona:t="user"})=>{var Q,oe;const e=Kf(),{id:n,initId:i}=Zy(),{inquiries:r,wallet:s,acceptInitiation:a,rejectInitiation:o,markWorthy:l,markUnworthy:c,completeInquiry:d,openSecureChannel:h,addChannelMessage:f,addSecureRequest:m,resolveSecureRequest:_}=Ir(),S=q.useMemo(()=>r.find(j=>j.id===n),[n,r]),[p,u]=q.useState(i),[v,x]=q.useState(""),[w,R]=q.useState(!1),C=i;if(q.useEffect(()=>{var j,Oe,X;if(C&&C!==p){u(C);return}if(S)if(p)S.initiations.some(ne=>ne.id===p)||u((X=S.initiations[0])==null?void 0:X.id);else{const ne=((j=S.initiations.find(ue=>ue.status==="accepted"||ue.status==="worthy"))==null?void 0:j.id)??((Oe=S.initiations[0])==null?void 0:Oe.id);u(ne)}},[C,S,p]),!S)return g.jsxs("div",{className:"space-y-6",children:[g.jsxs("button",{className:"inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200",onClick:()=>e(-1),children:[g.jsx(Nl,{className:"h-4 w-4"}),"Back"]}),g.jsx("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-8 text-center text-sm text-slate-400",children:"Inquiry not found."})]});const M=S.initiations.find(j=>j.id===p),P=S.timeline,O=t==="user",y=t==="researcher",T=s.address===S.creator,V=y?"/researcher":"/user",z=O&&T&&S.status!=="completed"&&S.initiations.some(j=>j.status==="worthy"),$=j=>j==="created"?!0:j==="completed"?S.status==="completed":!1,te=j=>{j.preventDefault(),!(!M||v.trim().length===0)&&(f(S.id,M.id,{author:s.address,authorLabel:s.ens??s.address,body:v.trim(),status:"sent"}),x(""))},G=j=>!O||!T||S.status==="completed"?null:j.status==="pending"?g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:()=>a(S.id,j.id),className:"rounded border border-soma-teal/60 px-3 py-1.5 text-xs font-medium text-soma-teal transition hover:bg-slate-900",children:"Accept"}),g.jsx("button",{onClick:()=>o(S.id,j.id),className:"rounded border border-red-500/60 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-slate-900",children:"Reject"})]}):j.status==="accepted"?g.jsxs("div",{className:"flex flex-wrap gap-2",children:[g.jsx("button",{onClick:()=>h(S.id,j.id),className:"rounded border border-soma-teal/60 px-3 py-1.5 text-xs text-soma-teal transition hover:bg-slate-900",children:"Open channel"}),g.jsx("button",{onClick:()=>l(S.id,j.id),className:"rounded border border-soma-lime/60 px-3 py-1.5 text-xs text-soma-lime transition hover:bg-slate-900",children:"Mark worthy"}),g.jsx("button",{onClick:()=>c(S.id,j.id),className:"rounded border border-amber-500/60 px-3 py-1.5 text-xs text-amber-400 transition hover:bg-slate-900",children:"Mark unworthy"})]}):j.status==="worthy"?g.jsx("p",{className:"text-xs text-slate-500",children:"Ready for completion"}):null,J=M&&S.secureRequests[M.id]||[],L=j=>{M&&m(S.id,M.id,{label:j.label,detail:j.detail,status:j.status})},Z=j=>g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 text-sm text-slate-200",children:[g.jsxs("div",{children:[g.jsx("p",{className:"font-medium text-slate-100",children:j.ens??j.researcher}),g.jsx("p",{className:"text-xs text-slate-500",children:new Date(j.updatedAt).toLocaleString()})]}),g.jsxs("div",{className:"text-right",children:[g.jsxs("p",{className:"font-mono text-xs text-slate-400",children:["Stake ",j.amount.toFixed(3)," WETH"]}),g.jsx("p",{className:"text-xs capitalize text-slate-300",children:j.status})]})]}),g.jsx("div",{className:"mt-3 text-xs text-slate-400",children:G(j)}),j.refund?g.jsxs("div",{className:"mt-3 grid gap-2 rounded border border-slate-800/60 bg-slate-950/70 p-3 text-xs text-slate-400 sm:grid-cols-3",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-slate-500",children:"Refund"}),g.jsxs("p",{className:"font-mono text-slate-200",children:[j.refund.toFixed(3)," WETH"]})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-slate-500",children:"Treasury"}),g.jsxs("p",{className:"font-mono text-slate-200",children:[(j.treasuryCut??0).toFixed(3)," WETH"]})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-slate-500",children:"Pool top up"}),g.jsxs("p",{className:"font-mono text-slate-200",children:[(j.poolTopUp??0).toFixed(3)," WETH"]})]})]}):null]});return g.jsxs("div",{className:"space-y-10",children:[g.jsxs("header",{className:"space-y-4",children:[g.jsxs("button",{className:"inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200",onClick:()=>e(-1),children:[g.jsx(Nl,{className:"h-4 w-4"}),"Back"]}),g.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-6",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500",children:[g.jsxs("span",{className:"rounded-full border border-slate-700 px-2 py-1 font-mono",children:["#",S.id]}),g.jsx("span",{className:"rounded-full border border-slate-700 px-3 py-1 uppercase tracking-wide",children:t==="user"?"User view":"Researcher view"})]}),g.jsx("h1",{className:"mt-3 text-3xl font-semibold text-slate-100",children:S.publicHint}),g.jsx("p",{className:"mt-3 max-w-3xl text-sm text-slate-300",children:S.goal})]}),g.jsxs("div",{className:"grid gap-3 text-sm text-slate-200 sm:grid-cols-3",children:[g.jsxs("div",{className:"rounded-xl border border-slate-800/70 bg-slate-950/70 p-4",children:[g.jsx("p",{className:"text-slate-400",children:"Deposit"}),g.jsxs("p",{className:"mt-2 font-mono text-lg",children:[S.deposit.toFixed(3)," WETH"]})]}),g.jsxs("div",{className:"rounded-xl border border-slate-800/70 bg-slate-950/70 p-4",children:[g.jsx("p",{className:"text-slate-400",children:"Incentive pool"}),g.jsxs("p",{className:"mt-2 font-mono text-lg",children:[S.totalIncentive.toFixed(3)," WETH"]})]}),g.jsxs("div",{className:"rounded-xl border border-slate-800/70 bg-slate-950/70 p-4",children:[g.jsx("p",{className:"text-slate-400",children:"Next stake"}),g.jsxs("p",{className:"mt-2 font-mono text-lg",children:[S.nextRequired.toFixed(3)," WETH"]})]})]})]})]}),g.jsxs("section",{className:"grid gap-6 lg:grid-cols-[2fr,1fr]",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6",children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-100",children:"Status"}),g.jsx("div",{className:"mt-4 flex flex-wrap gap-3",children:rM.map(j=>g.jsxs("div",{className:`flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${$(j.key)?"border-soma-teal/60 text-soma-teal":"border-slate-800/60 text-slate-500"}`,children:[g.jsx(Lp,{className:"h-3.5 w-3.5"}),j.label]},j.key))})]}),g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[g.jsx("h2",{className:"text-lg font-semibold text-slate-100",children:"Initiations"}),z?g.jsxs("button",{onClick:()=>d(S.id),className:"inline-flex items-center gap-2 rounded border border-soma-lime/60 px-3 py-1.5 text-xs font-medium text-soma-lime transition hover:bg-slate-900",children:[g.jsx(hd,{className:"h-4 w-4"}),"Complete inquiry"]}):null]}),g.jsx("div",{className:"mt-4 space-y-3",children:C?M?g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500",children:[g.jsxs("span",{className:"font-mono",children:["Initiation #",M.id.slice(0,6)]}),g.jsx(Hn,{to:`${V}/inquiries/${S.id}`,className:"text-soma-teal transition hover:text-soma-lime",children:"Back to inquiry overview"})]}),Z(M)]}):g.jsx("div",{className:"rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-xs text-amber-200",children:"Initiation not found. It may have been removed or settled."}):S.initiations.map(j=>g.jsx(Hn,{to:`${V}/inquiries/${S.id}/initiations/${j.id}`,className:`block rounded-xl border px-4 py-4 text-left transition ${p===j.id?"border-soma-teal/60 bg-slate-950":"border-slate-800/60 bg-slate-950/50 hover:border-slate-700"}`,onMouseEnter:()=>u(j.id),children:Z(j)},j.id))})]}),g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60",children:[g.jsxs("button",{type:"button",onClick:()=>R(j=>!j),className:"flex w-full items-center justify-between gap-3 px-6 py-4 text-left text-sm font-medium text-slate-200",children:["Activity log",g.jsx(sv,{className:`h-4 w-4 transition ${w?"rotate-180":""}`})]}),w?g.jsx("ol",{className:"space-y-4 border-t border-slate-800/70 bg-slate-900/40 p-6 text-sm text-slate-300",children:P.map(j=>g.jsxs("li",{className:"rounded border border-slate-800/60 bg-slate-950/60 p-4",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[g.jsx("p",{className:"font-semibold text-slate-100",children:j.label}),g.jsx("span",{className:"font-mono text-xs text-slate-500",children:new Date(j.timestamp).toLocaleString()})]}),g.jsx("p",{className:"mt-2 text-slate-400",children:j.description})]},j.id))}):null]})]}),g.jsxs("aside",{className:"space-y-6",children:[g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300",children:[g.jsx("h2",{className:"text-base font-semibold text-slate-100",children:"Data references"}),g.jsx("p",{className:"mt-2 text-slate-400",children:S.safetyNotes||"No data hash provided yet."}),y?g.jsxs("p",{className:"mt-3 flex items-center gap-2 text-xs text-slate-500",children:[g.jsx(av,{className:"h-3.5 w-3.5 text-soma-teal"}),"Encrypted materials unlock after acceptance."]}):null]}),g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300",children:[g.jsxs("div",{className:"flex items-center gap-2 text-slate-200",children:[g.jsx(BS,{className:"h-4 w-4 text-soma-teal"}),"Encrypted channel"]}),M?g.jsxs("div",{className:"mt-4 space-y-4",children:[g.jsxs("div",{className:"rounded border border-slate-800/60 bg-slate-950/70 p-3 text-xs text-slate-300",children:[g.jsxs("p",{className:"font-semibold text-slate-100",children:["Channel with ",M.ens??M.researcher]}),g.jsx("p",{className:"mt-1 text-slate-500",children:M.channelOpen?"Channel open":"Awaiting acceptance"})]}),g.jsxs("div",{className:"space-y-3",children:[(Q=S.secureChannels[M.id])==null?void 0:Q.map(j=>g.jsxs("div",{className:"rounded border border-slate-800/60 bg-slate-950/70 p-3 text-xs text-slate-300",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2",children:[g.jsx("span",{className:"font-semibold text-slate-100",children:j.authorLabel}),g.jsx("span",{className:"font-mono text-[10px] text-slate-500",children:new Date(j.timestamp).toLocaleString()})]}),g.jsx("p",{className:"mt-2 text-slate-400",children:j.body})]},j.id)),(oe=S.secureChannels[M.id])!=null&&oe.length?null:g.jsx("p",{className:"text-slate-500",children:"No encrypted exchanges yet."})]}),g.jsxs("form",{onSubmit:te,className:"space-y-2",children:[g.jsx("textarea",{value:v,onChange:j=>x(j.target.value),placeholder:"Share update or request",rows:3,className:"w-full rounded border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-100"}),g.jsxs("button",{type:"submit",className:"inline-flex w-full items-center justify-center gap-2 rounded border border-soma-teal/60 px-3 py-2 text-xs font-medium text-soma-teal transition hover:bg-slate-900",children:[g.jsx(zS,{className:"h-4 w-4"}),"Send encrypted note"]})]})]}):g.jsx("p",{className:"mt-4 text-sm text-slate-400",children:"Select an initiation to open its secure channel."})]}),M?g.jsxs("div",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 text-sm text-slate-300",children:[g.jsxs("div",{className:"flex items-center gap-2 text-slate-200",children:[g.jsx(DS,{className:"h-4 w-4 text-soma-teal"}),"Requests"]}),g.jsxs("div",{className:"mt-4 space-y-4 text-xs",children:[g.jsx("div",{className:"flex flex-wrap gap-2",children:sM.map(j=>g.jsxs("button",{onClick:()=>L(j),type:"button",className:"rounded border border-slate-700 px-3 py-1 text-slate-300 transition hover:border-soma-teal/60 hover:text-soma-teal",children:["+ ",j.label]},j.id))}),g.jsx("div",{className:"space-y-3",children:J.length?J.map(j=>g.jsxs("div",{className:"rounded border border-slate-800/60 bg-slate-950/60 p-3",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[g.jsx("p",{className:"font-semibold text-slate-100",children:j.label}),g.jsx("span",{className:"rounded-full border border-slate-700 px-2 py-0.5 text-[10px] uppercase text-slate-500",children:j.status})]}),g.jsx("p",{className:"mt-2 text-slate-400",children:j.detail}),g.jsxs("p",{className:"mt-2 text-[10px] text-slate-500",children:["Updated ",new Date(j.updatedAt).toLocaleString()]}),O&&T&&j.status!=="fulfilled"?g.jsxs("button",{onClick:()=>_(S.id,M.id,j.id),className:"mt-2 inline-flex items-center gap-2 rounded border border-soma-lime/60 px-3 py-1 text-soma-lime transition hover:bg-slate-900",children:[g.jsx(Lp,{className:"h-3.5 w-3.5"}),"Mark fulfilled"]}):null]},j.id)):g.jsx("p",{className:"text-slate-500",children:"No requests logged for this channel."})})]})]}):null]})]})]})},aM=()=>{const{pushToast:t,dismissToast:e,clearToasts:n,toasts:i}=uv();return{pushToast:t,dismissToast:e,clearToasts:n,toasts:i}},oM=()=>{const{toasts:t,dismissToast:e,clearToasts:n}=aM();return q.useEffect(()=>{if(t.length===0)return;const i=()=>{n()};return window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i)}},[t.length,n]),t.length===0?null:g.jsx("div",{className:"fixed bottom-6 right-6 z-40 flex w-80 flex-col gap-3 text-sm",children:t.map(i=>g.jsx("div",{className:Ll("rounded border border-slate-700/80 bg-slate-900/95 px-4 py-3 shadow-lg backdrop-blur",i.variant==="success"&&"border-soma-lime/60 shadow-glow",i.variant==="error"&&"border-red-500/70",i.variant==="warning"&&"border-amber-500/60"),children:g.jsxs("div",{className:"flex items-start justify-between gap-3",children:[g.jsxs("div",{children:[g.jsx("p",{className:"font-semibold text-slate-100",children:i.title}),i.description?g.jsx("p",{className:"mt-1 text-xs text-slate-400",children:i.description}):null,i.href?g.jsx("a",{href:i.href,target:"_blank",rel:"noreferrer",className:"mt-2 inline-flex items-center gap-1 text-xs font-mono text-soma-teal",children:"View on BaseScan"}):null]}),g.jsx("button",{onClick:()=>e(i.id),className:"mt-0.5 rounded p-1 text-slate-500 transition hover:bg-slate-800 hover:text-slate-200","aria-label":"Dismiss toast",children:g.jsx(ov,{className:"h-3.5 w-3.5"})})]})},i.id))})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="169",lM=0,Op=1,cM=2,fv=1,uM=2,si=3,Zi=0,tn=1,li=2,qi=0,vs=1,kp=2,Bp=3,zp=4,dM=5,mr=100,fM=101,hM=102,pM=103,mM=104,gM=200,vM=201,xM=202,_M=203,pd=204,md=205,yM=206,SM=207,MM=208,EM=209,wM=210,TM=211,AM=212,CM=213,bM=214,gd=0,vd=1,xd=2,bs=3,_d=4,yd=5,Sd=6,Md=7,hv=0,RM=1,PM=2,$i=0,NM=1,LM=2,DM=3,IM=4,UM=5,FM=6,OM=7,pv=300,Rs=301,Ps=302,Ed=303,wd=304,ic=306,Td=1e3,yr=1001,Ad=1002,Sn=1003,kM=1004,vo=1005,Fn=1006,Bc=1007,Sr=1008,xi=1009,mv=1010,gv=1011,Ua=1012,Jf=1013,Pr=1014,di=1015,Va=1016,eh=1017,th=1018,Ns=1020,vv=35902,xv=1021,_v=1022,kn=1023,yv=1024,Sv=1025,xs=1026,Ls=1027,Mv=1028,nh=1029,Ev=1030,ih=1031,rh=1033,Qo=33776,Jo=33777,el=33778,tl=33779,Cd=35840,bd=35841,Rd=35842,Pd=35843,Nd=36196,Ld=37492,Dd=37496,Id=37808,Ud=37809,Fd=37810,Od=37811,kd=37812,Bd=37813,zd=37814,Hd=37815,Vd=37816,Gd=37817,Wd=37818,jd=37819,Xd=37820,qd=37821,nl=36492,$d=36494,Yd=36495,wv=36283,Kd=36284,Zd=36285,Qd=36286,BM=3200,zM=3201,HM=0,VM=1,Ii="",jn="srgb",ir="srgb-linear",sh="display-p3",rc="display-p3-linear",Dl="linear",ot="srgb",Il="rec709",Ul="p3",kr=7680,Hp=519,GM=512,WM=513,jM=514,Tv=515,XM=516,qM=517,$M=518,YM=519,Vp=35044,Gp="300 es",fi=2e3,Fl=2001;class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zc=Math.PI/180,Jd=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function KM(t,e){return(t%e+e)%e}function Hc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],S=r[0],p=r[3],u=r[6],v=r[1],x=r[4],w=r[7],R=r[2],C=r[5],M=r[8];return s[0]=a*S+o*v+l*R,s[3]=a*p+o*x+l*C,s[6]=a*u+o*w+l*M,s[1]=c*S+d*v+h*R,s[4]=c*p+d*x+h*C,s[7]=c*u+d*w+h*M,s[2]=f*S+m*v+_*R,s[5]=f*p+m*x+_*C,s[8]=f*u+m*w+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(r*c-d*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Vc.makeScale(e,n)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new Fe;function Av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ol(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZM(){const t=Ol("canvas");return t.style.display="block",t}const Wp={};function il(t){t in Wp||(Wp[t]=!0,console.warn(t))}function QM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function JM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[ir]:{transfer:Dl,primaries:Il,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[jn]:{transfer:ot,primaries:Il,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[rc]:{transfer:Dl,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Xp),fromReference:t=>t.applyMatrix3(jp)},[sh]:{transfer:ot,primaries:Ul,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xp),fromReference:t=>t.applyMatrix3(jp).convertLinearToSRGB()}},tE=new Set([ir,rc]),Ke={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!tE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zs[e].toReference,r=Zs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Zs[t].primaries},getTransfer:function(t){return t===Ii?Dl:Zs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Zs[e].luminanceCoefficients)}};function _s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class nE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Ol("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_s(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_s(n[i]/255)*255):n[i]=_s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iE=0;class Cv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wc(r[a].image)):s.push(Wc(r[a]))}else s=Wc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rE=0;class nn extends Bs{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=yr,r=yr,s=Fn,a=Sr,o=kn,l=xi,c=nn.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Ga(),this.name="",this.source=new Cv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=pv;nn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],S=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,w=(m+1)/2,R=(u+1)/2,C=(d+f)/4,M=(h+S)/4,P=(_+p)/4;return x>w&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=M/i):w>R?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=M/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-S)/v,this.z=(f-d)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends Bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Cv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends sE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bv extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aE extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=S;return}if(h!==S||l!==f||c!==m||d!==_){let p=1-o;const u=l*f+c*m+d*_+h*S,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),C=Math.atan2(R,u*v);p=Math.sin(p*C)/R,o=Math.sin(o*C)/R}const w=o*v;if(l=l*p+f*w,c=c*p+m*w,d=d*p+_*w,h=h*p+S*w,p===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-o*m,e[n+2]=c*_+d*m+o*f-l*h,e[n+3]=d*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new H,qp=new Wa;class ja{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),_o.subVectors(this.max,Qs),zr.subVectors(e.a,Qs),Hr.subVectors(e.b,Qs),Vr.subVectors(e.c,Qs),wi.subVectors(Hr,zr),Ti.subVectors(Vr,Hr),sr.subVectors(zr,Vr);let n=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-sr.z,sr.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,sr.z,0,-sr.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-sr.y,sr.x,0];return!Xc(n,zr,Hr,Vr,_o)||(n=[1,0,0,0,1,0,0,0,1],!Xc(n,zr,Hr,Vr,_o))?!1:(yo.crossVectors(wi,Ti),n=[yo.x,yo.y,yo.z],Xc(n,zr,Hr,Vr,_o))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new H,new H,new H,new H,new H,new H,new H,new H],bn=new H,xo=new ja,zr=new H,Hr=new H,Vr=new H,wi=new H,Ti=new H,sr=new H,Qs=new H,_o=new H,yo=new H,ar=new H;function Xc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ar.fromArray(t,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=n.dot(ar),d=i.dot(ar);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const oE=new ja,Js=new H,qc=new H;class ah{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(qc)),this.expandByPoint(Js.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new H,$c=new H,So=new H,Ai=new H,Yc=new H,Mo=new H,Kc=new H;class lE{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$c.copy(e).add(n).multiplyScalar(.5),So.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub($c);const s=e.distanceTo(n)*.5,a=-this.direction.dot(So),o=Ai.dot(this.direction),l=-Ai.dot(So),c=Ai.lengthSq(),d=Math.abs(1-a*a);let h,f,m,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const S=1/d;h*=S,f*=S,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($c).addScaledVector(So,f),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Yc.subVectors(n,e),Mo.subVectors(i,e),Kc.crossVectors(Yc,Mo);let a=this.direction.dot(Kc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot(Mo.crossVectors(Ai,Mo));if(l<0)return null;const c=o*this.direction.dot(Yc.cross(Ai));if(c<0||l+c>a)return null;const d=-o*Ai.dot(Kc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,_,S,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,S,p)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,S,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,_=o*d,S=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,S=c*h;n[0]=f+S*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=S+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,S=c*h;n[0]=f-S*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=S-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,_=o*d,S=o*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+S,n[1]=l*h,n[5]=S*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*d,n[4]=S-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-S*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+S,n[5]=a*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*d,n[10]=S*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cE,e,uE)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ci.crossVectors(i,on),Ci.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ci.crossVectors(i,on)),Ci.normalize(),Eo.crossVectors(on,Ci),r[0]=Ci.x,r[4]=Eo.x,r[8]=on.x,r[1]=Ci.y,r[5]=Eo.y,r[9]=on.y,r[2]=Ci.z,r[6]=Eo.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],S=i[6],p=i[10],u=i[14],v=i[3],x=i[7],w=i[11],R=i[15],C=r[0],M=r[4],P=r[8],O=r[12],y=r[1],T=r[5],V=r[9],z=r[13],$=r[2],te=r[6],G=r[10],J=r[14],L=r[3],Z=r[7],Q=r[11],oe=r[15];return s[0]=a*C+o*y+l*$+c*L,s[4]=a*M+o*T+l*te+c*Z,s[8]=a*P+o*V+l*G+c*Q,s[12]=a*O+o*z+l*J+c*oe,s[1]=d*C+h*y+f*$+m*L,s[5]=d*M+h*T+f*te+m*Z,s[9]=d*P+h*V+f*G+m*Q,s[13]=d*O+h*z+f*J+m*oe,s[2]=_*C+S*y+p*$+u*L,s[6]=_*M+S*T+p*te+u*Z,s[10]=_*P+S*V+p*G+u*Q,s[14]=_*O+S*z+p*J+u*oe,s[3]=v*C+x*y+w*$+R*L,s[7]=v*M+x*T+w*te+R*Z,s[11]=v*P+x*V+w*G+R*Q,s[15]=v*O+x*z+w*J+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],S=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+S*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*d-s*l*d)+p*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],S=e[13],p=e[14],u=e[15],v=h*p*c-S*f*c+S*l*m-o*p*m-h*l*u+o*f*u,x=_*f*c-d*p*c-_*l*m+a*p*m+d*l*u-a*f*u,w=d*S*c-_*h*c+_*o*m-a*S*m-d*o*u+a*h*u,R=_*h*l-d*S*l-_*o*f+a*S*f+d*o*p-a*h*p,C=n*v+i*x+r*w+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/C;return e[0]=v*M,e[1]=(S*f*s-h*p*s-S*r*m+i*p*m+h*r*u-i*f*u)*M,e[2]=(o*p*s-S*l*s+S*r*c-i*p*c-o*r*u+i*l*u)*M,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*M,e[4]=x*M,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*M,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*M,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*m+n*l*m)*M,e[8]=w*M,e[9]=(_*h*s-d*S*s-_*i*m+n*S*m+d*i*u-n*h*u)*M,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*u+n*o*u)*M,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*M,e[12]=R*M,e[13]=(d*S*r-_*h*r+_*i*f-n*S*f-d*i*p+n*h*p)*M,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*p-n*o*p)*M,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,_=s*h,S=a*d,p=a*h,u=o*h,v=l*c,x=l*d,w=l*h,R=i.x,C=i.y,M=i.z;return r[0]=(1-(S+u))*R,r[1]=(m+w)*R,r[2]=(_-x)*R,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(f+u))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(_+x)*M,r[9]=(p-v)*M,r[10]=(1-(f+S))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const a=Gr.set(r[4],r[5],r[6]).length(),o=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,d=1/a,h=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===fi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Fl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),f=(n+e)*c,m=(i+r)*d;let _,S;if(o===fi)_=(a+s)*h,S=-2*h;else if(o===Fl)_=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new H,Rn=new Et,cE=new H(0,0,0),uE=new H(1,1,1),Ci=new H,Eo=new H,on=new H,$p=new Et,Yp=new Wa;class _i{constructor(e=0,n=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dE=0;const Kp=new H,Wr=new Wa,ni=new Et,wo=new H,ea=new H,fE=new H,hE=new Wa,Zp=new H(1,0,0),Qp=new H(0,1,0),Jp=new H(0,0,1),em={type:"added"},pE={type:"removed"},jr={type:"childadded",child:null},Zc={type:"childremoved",child:null};class fn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new H,n=new _i,i=new Wa,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Fe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ea,wo,this.up):ni.lookAt(wo,ea,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(ni),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pE),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,fE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,hE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new H(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new H,ii=new H,Qc=new H,ri=new H,Xr=new H,qr=new H,tm=new H,Jc=new H,eu=new H,tu=new H,nu=new xt,iu=new xt,ru=new xt;class On{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ii.subVectors(i,n),Qc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ii),l=Pn.dot(Qc),c=ii.dot(ii),d=ii.dot(Qc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(e,n),iu.fromBufferAttribute(e,i),ru.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nu,s.x),a.addScaledVector(iu,s.y),a.addScaledVector(ru,s.z),a}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ii.subVectors(e,n),Pn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),qr.subVectors(s,i),Jc.subVectors(e,i);const l=Xr.dot(Jc),c=qr.dot(Jc);if(l<=0&&c<=0)return n.copy(i);eu.subVectors(e,r);const d=Xr.dot(eu),h=qr.dot(eu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Xr,a);tu.subVectors(e,s);const m=Xr.dot(tu),_=qr.dot(tu);if(_>=0&&m<=_)return n.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(qr,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return tm.subVectors(s,r),o=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(tm,o);const u=1/(p+S+f);return a=S*u,o=f*u,n.copy(i).addScaledVector(Xr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},To={h:0,s:0,l:0};function su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=KM(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=su(a,s,e+1/3),this.g=su(a,s,e),this.b=su(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=Pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Ke.fromWorkingColorSpace(kt.copy(this),e),Math.round(Kt(kt.r*255,0,255))*65536+Math.round(Kt(kt.g*255,0,255))*256+Math.round(Kt(kt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=jn){Ke.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(To);const i=Hc(bi.h,To.h,n),r=Hc(bi.s,To.s,n),s=Hc(bi.l,To.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new et;et.NAMES=Pv;let mE=0;class sc extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=vs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nv extends sc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new H,Ao=new tt;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vp,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class Lv extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Dv extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wr extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gE=0;const vn=new Et,au=new fn,$r=new H,ln=new ja,ta=new ja,bt=new H;class Ur extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Dv:Lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return au.lookAt(e),au.updateMatrix(),this.applyMatrix4(au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ah);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(ln.min,ta.min),ln.expandByPoint(bt),bt.addVectors(ln.max,ta.max),ln.expandByPoint(bt)):(ln.expandByPoint(ta.min),ln.expandByPoint(ta.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)bt.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),bt.add($r)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new H,l[P]=new H;const c=new H,d=new H,h=new H,f=new tt,m=new tt,_=new tt,S=new H,p=new H;function u(P,O,y){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,O),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,O),_.fromBufferAttribute(s,y),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const T=1/(m.x*_.y-_.x*m.y);isFinite(T)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(T),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(T),o[P].add(S),o[O].add(S),o[y].add(S),l[P].add(p),l[O].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,O=v.length;P<O;++P){const y=v[P],T=y.start,V=y.count;for(let z=T,$=T+V;z<$;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new H,w=new H,R=new H,C=new H;function M(P){R.fromBufferAttribute(r,P),C.copy(R);const O=o[P];x.copy(O),x.sub(R.multiplyScalar(R.dot(O))).normalize(),w.crossVectors(C,O);const T=w.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,T)}for(let P=0,O=v.length;P<O;++P){const y=v[P],T=y.start,V=y.count;for(let z=T,$=T+V;z<$;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,d=new H,h=new H;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Zn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ur,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nm=new Et,or=new lE,Co=new ah,im=new H,bo=new H,Ro=new H,Po=new H,ou=new H,No=new H,rm=new H,Lo=new H;class $n extends fn{constructor(e=new Ur,n=new Nv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){No.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(ou.fromBufferAttribute(h,e),a?No.addScaledVector(ou,d):No.addScaledVector(ou.sub(n),d))}n.add(No)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(Co.containsPoint(or.origin)===!1&&(or.intersectSphere(Co,im)===null||or.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(nm.copy(s).invert(),or.copy(e.ray).applyMatrix4(nm),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const p=f[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=v,R=x;w<R;w+=3){const C=o.getX(w),M=o.getX(w+1),P=o.getX(w+2);r=Do(this,u,e,i,c,d,h,C,M,P),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,u=S;p<u;p+=3){const v=o.getX(p),x=o.getX(p+1),w=o.getX(p+2);r=Do(this,a,e,i,c,d,h,v,x,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const p=f[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=v,R=x;w<R;w+=3){const C=w,M=w+1,P=w+2;r=Do(this,u,e,i,c,d,h,C,M,P),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,u=S;p<u;p+=3){const v=p,x=p+1,w=p+2;r=Do(this,a,e,i,c,d,h,v,x,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function vE(t,e,n,i,r,s,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Lo);return c<n.near||c>n.far?null:{distance:c,point:Lo.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,bo),t.getVertexPosition(l,Ro),t.getVertexPosition(c,Po);const d=vE(t,e,n,i,bo,Ro,Po,rm);if(d){const h=new H;On.getBarycoord(rm,bo,Ro,Po,h),r&&(d.uv=On.getInterpolatedAttribute(r,o,l,c,h,new tt)),s&&(d.uv1=On.getInterpolatedAttribute(s,o,l,c,h,new tt)),a&&(d.normal=On.getInterpolatedAttribute(a,o,l,c,h,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};On.getNormal(bo,Ro,Po,f.normal),d.face=f,d.barycoord=h}return d}class Xa extends Ur{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wr(c,3)),this.setAttribute("normal",new wr(d,3)),this.setAttribute("uv",new wr(h,2));function _(S,p,u,v,x,w,R,C,M,P,O){const y=w/M,T=R/P,V=w/2,z=R/2,$=C/2,te=M+1,G=P+1;let J=0,L=0;const Z=new H;for(let Q=0;Q<G;Q++){const oe=Q*T-z;for(let j=0;j<te;j++){const Oe=j*y-V;Z[S]=Oe*v,Z[p]=oe*x,Z[u]=$,c.push(Z.x,Z.y,Z.z),Z[S]=0,Z[p]=0,Z[u]=C>0?1:-1,d.push(Z.x,Z.y,Z.z),h.push(j/M),h.push(1-Q/P),J+=1}}for(let Q=0;Q<P;Q++)for(let oe=0;oe<M;oe++){const j=f+oe+te*Q,Oe=f+oe+te*(Q+1),X=f+(oe+1)+te*(Q+1),ne=f+(oe+1)+te*Q;l.push(j,Oe,ne),l.push(Oe,X,ne),L+=6}o.addGroup(m,L,O),m+=L,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function xE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Iv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const _E={clone:Ds,merge:Ht};var yE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends sc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yE,this.fragmentShader=SE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=xE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Uv extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new H,sm=new tt,am=new tt;class Un extends Uv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,sm,am),n.subVectors(am,sm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,Kr=1;class ME extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(Yr,Kr,e,n);r.layers=this.layers,this.add(r);const s=new Un(Yr,Kr,e,n);s.layers=this.layers,this.add(s);const a=new Un(Yr,Kr,e,n);a.layers=this.layers,this.add(a);const o=new Un(Yr,Kr,e,n);o.layers=this.layers,this.add(o);const l=new Un(Yr,Kr,e,n);l.layers=this.layers,this.add(l);const c=new Un(Yr,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Fv extends nn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EE extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Fv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xa(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:qi});s.uniforms.tEquirect.value=n;const a=new $n(r,s),o=n.minFilter;return n.minFilter===Sr&&(n.minFilter=Fn),new ME(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const lu=new H,wE=new H,TE=new Fe;class hr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lu.subVectors(i,n).cross(wE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TE.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new ah,Io=new H;class Ov{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],S=r[10],p=r[11],u=r[12],v=r[13],x=r[14],w=r[15];if(i[0].setComponents(l-s,f-c,p-m,w-u).normalize(),i[1].setComponents(l+s,f+c,p+m,w+u).normalize(),i[2].setComponents(l+a,f+d,p+_,w+v).normalize(),i[3].setComponents(l-a,f-d,p-_,w-v).normalize(),i[4].setComponents(l-o,f-h,p-S,w-x).normalize(),n===fi)i[5].setComponents(l+o,f+h,p+S,w+x).normalize();else if(n===Fl)i[5].setComponents(o,h,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AE(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],S=h[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,h[f]=S)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const S=h[m];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class qa extends Ur{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],_=[],S=[],p=[];for(let u=0;u<d;u++){const v=u*f-a;for(let x=0;x<c;x++){const w=x*h-s;_.push(w,-v,0),S.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const x=v+c*u,w=v+c*(u+1),R=v+1+c*(u+1),C=v+1+c*u;m.push(x,w,C),m.push(w,R,C)}this.setIndex(m),this.setAttribute("position",new wr(_,3)),this.setAttribute("normal",new wr(S,3)),this.setAttribute("uv",new wr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}var CE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,KE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ew=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ow=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:CE,alphahash_pars_fragment:bE,alphamap_fragment:RE,alphamap_pars_fragment:PE,alphatest_fragment:NE,alphatest_pars_fragment:LE,aomap_fragment:DE,aomap_pars_fragment:IE,batching_pars_vertex:UE,batching_vertex:FE,begin_vertex:OE,beginnormal_vertex:kE,bsdfs:BE,iridescence_fragment:zE,bumpmap_pars_fragment:HE,clipping_planes_fragment:VE,clipping_planes_pars_fragment:GE,clipping_planes_pars_vertex:WE,clipping_planes_vertex:jE,color_fragment:XE,color_pars_fragment:qE,color_pars_vertex:$E,color_vertex:YE,common:KE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:QE,displacementmap_pars_vertex:JE,displacementmap_vertex:e1,emissivemap_fragment:t1,emissivemap_pars_fragment:n1,colorspace_fragment:i1,colorspace_pars_fragment:r1,envmap_fragment:s1,envmap_common_pars_fragment:a1,envmap_pars_fragment:o1,envmap_pars_vertex:l1,envmap_physical_pars_fragment:_1,envmap_vertex:c1,fog_vertex:u1,fog_pars_vertex:d1,fog_fragment:f1,fog_pars_fragment:h1,gradientmap_pars_fragment:p1,lightmap_pars_fragment:m1,lights_lambert_fragment:g1,lights_lambert_pars_fragment:v1,lights_pars_begin:x1,lights_toon_fragment:y1,lights_toon_pars_fragment:S1,lights_phong_fragment:M1,lights_phong_pars_fragment:E1,lights_physical_fragment:w1,lights_physical_pars_fragment:T1,lights_fragment_begin:A1,lights_fragment_maps:C1,lights_fragment_end:b1,logdepthbuf_fragment:R1,logdepthbuf_pars_fragment:P1,logdepthbuf_pars_vertex:N1,logdepthbuf_vertex:L1,map_fragment:D1,map_pars_fragment:I1,map_particle_fragment:U1,map_particle_pars_fragment:F1,metalnessmap_fragment:O1,metalnessmap_pars_fragment:k1,morphinstance_vertex:B1,morphcolor_vertex:z1,morphnormal_vertex:H1,morphtarget_pars_vertex:V1,morphtarget_vertex:G1,normal_fragment_begin:W1,normal_fragment_maps:j1,normal_pars_fragment:X1,normal_pars_vertex:q1,normal_vertex:$1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:Z1,clearcoat_pars_fragment:Q1,iridescence_pars_fragment:J1,opaque_fragment:ew,packing:tw,premultiplied_alpha_fragment:nw,project_vertex:iw,dithering_fragment:rw,dithering_pars_fragment:sw,roughnessmap_fragment:aw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:lw,shadowmap_pars_vertex:cw,shadowmap_vertex:uw,shadowmask_pars_fragment:dw,skinbase_vertex:fw,skinning_pars_vertex:hw,skinning_vertex:pw,skinnormal_vertex:mw,specularmap_fragment:gw,specularmap_pars_fragment:vw,tonemapping_fragment:xw,tonemapping_pars_fragment:_w,transmission_fragment:yw,transmission_pars_fragment:Sw,uv_pars_fragment:Mw,uv_pars_vertex:Ew,uv_vertex:ww,worldpos_vertex:Tw,background_vert:Aw,background_frag:Cw,backgroundCube_vert:bw,backgroundCube_frag:Rw,cube_vert:Pw,cube_frag:Nw,depth_vert:Lw,depth_frag:Dw,distanceRGBA_vert:Iw,distanceRGBA_frag:Uw,equirect_vert:Fw,equirect_frag:Ow,linedashed_vert:kw,linedashed_frag:Bw,meshbasic_vert:zw,meshbasic_frag:Hw,meshlambert_vert:Vw,meshlambert_frag:Gw,meshmatcap_vert:Ww,meshmatcap_frag:jw,meshnormal_vert:Xw,meshnormal_frag:qw,meshphong_vert:$w,meshphong_frag:Yw,meshphysical_vert:Kw,meshphysical_frag:Zw,meshtoon_vert:Qw,meshtoon_frag:Jw,points_vert:eT,points_frag:tT,shadow_vert:nT,shadow_frag:iT,sprite_vert:rT,sprite_frag:sT},le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Xn={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Xn.physical={uniforms:Ht([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Uo={r:0,b:0,g:0},cr=new _i,aT=new Et;function oT(t,e,n,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function S(v){let x=!1;const w=_(v);w===null?u(o,l):w&&w.isColor&&(u(w,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,x){const w=_(x);w&&(w.isCubeTexture||w.mapping===ic)?(d===void 0&&(d=new $n(new Xa(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Ds(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,C,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),cr.copy(x.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(cr)),d.material.toneMapped=Ke.getTransfer(w.colorSpace)!==ot,(h!==w||f!==w.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=w,f=w.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new $n(new qa(2,2),new yi({name:"BackgroundMaterial",uniforms:Ds(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(Uo,Iv(t)),i.buffers.color.setClear(Uo.r,Uo.g,Uo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:S,addToRenderList:p}}function lT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,T,V,z,$){let te=!1;const G=h(z,V,T);s!==G&&(s=G,c(s.object)),te=m(y,z,V,$),te&&_(y,z,V,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,w(y,T,V,z),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function h(y,T,V){const z=V.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let te=$[T.id];te===void 0&&(te={},$[T.id]=te);let G=te[z];return G===void 0&&(G=f(l()),te[z]=G),G}function f(y){const T=[],V=[],z=[];for(let $=0;$<n;$++)T[$]=0,V[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:V,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,T,V,z){const $=s.attributes,te=T.attributes;let G=0;const J=V.getAttributes();for(const L in J)if(J[L].location>=0){const Q=$[L];let oe=te[L];if(oe===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(y,T,V,z){const $={},te=T.attributes;let G=0;const J=V.getAttributes();for(const L in J)if(J[L].location>=0){let Q=te[L];Q===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),$[L]=oe,G++}s.attributes=$,s.attributesNum=G,s.index=z}function S(){const y=s.newAttributes;for(let T=0,V=y.length;T<V;T++)y[T]=0}function p(y){u(y,0)}function u(y,T){const V=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;V[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),$[y]!==T&&(t.vertexAttribDivisor(y,T),$[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let V=0,z=T.length;V<z;V++)T[V]!==y[V]&&(t.disableVertexAttribArray(V),T[V]=0)}function x(y,T,V,z,$,te,G){G===!0?t.vertexAttribIPointer(y,T,V,$,te):t.vertexAttribPointer(y,T,V,z,$,te)}function w(y,T,V,z){S();const $=z.attributes,te=V.getAttributes(),G=T.defaultAttributeValues;for(const J in te){const L=te[J];if(L.location>=0){let Z=$[J];if(Z===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const Q=Z.normalized,oe=Z.itemSize,j=e.get(Z);if(j===void 0)continue;const Oe=j.buffer,X=j.type,ne=j.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||Z.gpuType===Jf;if(Z.isInterleavedBufferAttribute){const de=Z.data,De=de.stride,Ae=Z.offset;if(de.isInstancedInterleavedBuffer){for(let He=0;He<L.locationSize;He++)u(L.location+He,de.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let He=0;He<L.locationSize;He++)p(L.location+He);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let He=0;He<L.locationSize;He++)x(L.location+He,oe/L.locationSize,X,Q,De*ne,(Ae+oe/L.locationSize*He)*ne,ue)}else{if(Z.isInstancedBufferAttribute){for(let de=0;de<L.locationSize;de++)u(L.location+de,Z.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<L.locationSize;de++)p(L.location+de);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let de=0;de<L.locationSize;de++)x(L.location+de,oe/L.locationSize,X,Q,oe*ne,oe/L.locationSize*de*ne,ue)}}else if(G!==void 0){const Q=G[J];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(L.location,Q);break;case 3:t.vertexAttrib3fv(L.location,Q);break;case 4:t.vertexAttrib4fv(L.location,Q);break;default:t.vertexAttrib1fv(L.location,Q)}}}}v()}function R(){P();for(const y in i){const T=i[y];for(const V in T){const z=T[V];for(const $ in z)d(z[$].object),delete z[$];delete T[V]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const V in T){const z=T[V];for(const $ in z)d(z[$].object),delete z[$];delete T[V]}delete i[y.id]}function M(y){for(const T in i){const V=i[T];if(V[y.id]===void 0)continue;const z=V[y.id];for(const $ in z)d(z[$].object),delete z[$];delete V[y.id]}}function P(){O(),a=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:M,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function cT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=d[S];for(let S=0;S<f.length;S++)n.update(_,i,f[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function uT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==kn&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const P=M===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==xi&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==di&&!P)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:R,maxSamples:C}}function dT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,x=v*4;let w=u.clippingState||null;l.value=w,w=d(_,f,x,m);for(let R=0;R!==x;++R)w[R]=n[R];u.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const u=m+S*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,w=m;x!==S;++x,w+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function fT(t){let e=new WeakMap;function n(a,o){return o===Ed?a.mapping=Rs:o===wd&&(a.mapping=Ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ed||o===wd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new EE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Bv extends Uv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const us=4,om=[.125,.215,.35,.446,.526,.582],gr=20,cu=new Bv,lm=new et;let uu=null,du=0,fu=0,hu=!1;const pr=(1+Math.sqrt(5))/2,Zr=1/pr,cm=[new H(-pr,Zr,0),new H(pr,Zr,0),new H(-Zr,0,pr),new H(Zr,0,pr),new H(0,pr,-Zr),new H(0,pr,Zr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uu,du,fu),this._renderer.xr.enabled=hu,e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),hu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Va,format:kn,colorSpace:ir,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hT(s)),this._blurMaterial=pT(s,e,n)}return r}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,cu)}_sceneToCubeUV(e,n,i,r){const o=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(lm),d.toneMapping=$i,d.autoClear=!1;const m=new Nv({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new $n(new Xa,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(lm),S=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;Fo(r,v*x,u>2?x:0,x,x),d.setRenderTarget(r),S&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $n(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cm[(r-s-1)%cm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new $n(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gr-1),S=s/_,p=isFinite(s)?1+Math.floor(d*S):gr;p>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gr}`);const u=[];let v=0;for(let M=0;M<gr;++M){const P=M/S,O=Math.exp(-P*P/2);u.push(O),M===0?v+=O:M<p&&(v+=2*O)}for(let M=0;M<u.length;M++)u[M]=u[M]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const w=this._sizeLods[r],R=3*w*(r>x-us?r-x+us:0),C=4*(this._cubeSize-w);Fo(n,R,C,3*w,2*w),l.setRenderTarget(n),l.render(h,cu)}}function hT(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+om.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-us?l=om[a-t+us-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,S=3,p=2,u=1,v=new Float32Array(S*_*m),x=new Float32Array(p*_*m),w=new Float32Array(u*_*m);for(let C=0;C<m;C++){const M=C%3*2/3-1,P=C>2?0:-1,O=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(O,S*_*C),x.set(f,p*_*C);const y=[C,C,C,C,C,C];w.set(y,u*_*C)}const R=new Ur;R.setAttribute("position",new Zn(v,S)),R.setAttribute("uv",new Zn(x,p)),R.setAttribute("faceIndex",new Zn(w,u)),e.push(R),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dm(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function pT(t,e,n){const i=new Float32Array(gr),r=new H(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function fm(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function hm(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ed||l===wd,d=l===Rs||l===Ps;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new um(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new um(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function gT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&il("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vT(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const S=f.morphAttributes[_];for(let p=0,u=S.length;p<u;p++)e.remove(S[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const S=m[_];for(let p=0,u=S.length;p<u;p++)e.update(S[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let x=0,w=v.length;x<w;x+=3){const R=v[x+0],C=v[x+1],M=v[x+2];f.push(R,C,C,M,M,R)}}else if(_!==void 0){const v=_.array;S=_.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const R=x+0,C=x+1,M=x+2;f.push(R,C,C,M,M,R)}}else return;const p=new(Av(f)?Dv:Lv)(f,1);p.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function xT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function h(f,m,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,S,0,_);let u=0;for(let v=0;v<_;v++)u+=m[v];for(let v=0;v<S.length;v++)n.update(u,i,S[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _T(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function yT(t,e,n){const i=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let w=0;_===!0&&(w=1),S===!0&&(w=2),p===!0&&(w=3);let R=o.attributes.position.count*w,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const M=new Float32Array(R*C*4*h),P=new bv(M,R,C,h);P.type=di,P.needsUpdate=!0;const O=w*4;for(let T=0;T<h;T++){const V=u[T],z=v[T],$=x[T],te=R*C*4*T;for(let G=0;G<V.count;G++){const J=G*O;_===!0&&(r.fromBufferAttribute(V,G),M[te+J+0]=r.x,M[te+J+1]=r.y,M[te+J+2]=r.z,M[te+J+3]=0),S===!0&&(r.fromBufferAttribute(z,G),M[te+J+4]=r.x,M[te+J+5]=r.y,M[te+J+6]=r.z,M[te+J+7]=0),p===!0&&(r.fromBufferAttribute($,G),M[te+J+8]=r.x,M[te+J+9]=r.y,M[te+J+10]=r.z,M[te+J+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new tt(R,C)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function ST(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class zv extends nn{constructor(e,n,i,r,s,a,o,l,c,d=xs){if(d!==xs&&d!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===xs&&(i=Pr),i===void 0&&d===Ls&&(i=Ns),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Hv=new nn,pm=new zv(1,1),Vv=new bv,Gv=new aE,Wv=new Fv,mm=[],gm=[],vm=new Float32Array(16),xm=new Float32Array(9),_m=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mm[r];if(s===void 0&&(s=new Float32Array(r),mm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ac(t,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function MT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;_m.set(i),t.uniformMatrix2fv(this.addr,!1,_m),Ct(n,i)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;xm.set(i),t.uniformMatrix3fv(this.addr,!1,xm),Ct(n,i)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;vm.set(i),t.uniformMatrix4fv(this.addr,!1,vm),Ct(n,i)}}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function DT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(pm.compareFunction=Tv,s=pm):s=Hv,n.setTexture2D(e||s,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gv,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Wv,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vv,r)}function HT(t){switch(t){case 5126:return MT;case 35664:return ET;case 35665:return wT;case 35666:return TT;case 35674:return AT;case 35675:return CT;case 35676:return bT;case 5124:case 35670:return RT;case 35667:case 35671:return PT;case 35668:case 35672:return NT;case 35669:case 35673:return LT;case 5125:return DT;case 36294:return IT;case 36295:return UT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return zT}}function VT(t,e){t.uniform1fv(this.addr,e)}function GT(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function WT(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function jT(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function XT(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function qT(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $T(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YT(t,e){t.uniform1iv(this.addr,e)}function KT(t,e){t.uniform2iv(this.addr,e)}function ZT(t,e){t.uniform3iv(this.addr,e)}function QT(t,e){t.uniform4iv(this.addr,e)}function JT(t,e){t.uniform1uiv(this.addr,e)}function eA(t,e){t.uniform2uiv(this.addr,e)}function tA(t,e){t.uniform3uiv(this.addr,e)}function nA(t,e){t.uniform4uiv(this.addr,e)}function iA(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Hv,s[a])}function rA(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Gv,s[a])}function sA(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Wv,s[a])}function aA(t,e,n){const i=this.cache,r=e.length,s=ac(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Vv,s[a])}function oA(t){switch(t){case 5126:return VT;case 35664:return GT;case 35665:return WT;case 35666:return jT;case 35674:return XT;case 35675:return qT;case 35676:return $T;case 5124:case 35670:return YT;case 35667:case 35671:return KT;case 35668:case 35672:return ZT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return aA}}class lA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=HT(n.type)}}class cA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oA(n.type)}}class uA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function ym(t,e){t.seq.push(e),t.map[e.id]=e}function dA(t,e,n){const i=t.name,r=i.length;for(pu.lastIndex=0;;){const s=pu.exec(i),a=pu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ym(n,c===void 0?new lA(o,t,e):new cA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new uA(o),ym(n,h)),n=h}}}class rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);dA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fA=37297;let hA=0;function pA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function mA(t){const e=Ke.getPrimaries(Ke.workingColorSpace),n=Ke.getPrimaries(t);let i;switch(e===n?i="":e===Ul&&n===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&n===Ul&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case rc:return[i,"LinearTransferOETF"];case jn:case sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+pA(t.getShaderSource(e),a)}else return r}function gA(t,e){const n=mA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function vA(t,e){let n;switch(e){case NM:n="Linear";break;case LM:n="Reinhard";break;case DM:n="Cineon";break;case IM:n="ACESFilmic";break;case FM:n="AgX";break;case OM:n="Neutral";break;case UM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oo=new H;function xA(){Ke.getLuminanceCoefficients(Oo);const t=Oo.x.toFixed(4),e=Oo.y.toFixed(4),n=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function yA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function SA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function aa(t){return t!==""}function Em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(t){return t.replace(MA,wA)}const EA=new Map;function wA(t,e){let n=Ue[e];if(n===void 0){const i=EA.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ef(n)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(t){return t.replace(TA,AA)}function AA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Am(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===fv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function bA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function PA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hv:e="ENVMAP_BLENDING_MULTIPLY";break;case RM:e="ENVMAP_BLENDING_MIX";break;case PM:e="ENVMAP_BLENDING_ADD";break}return e}function NA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=CA(n),c=bA(n),d=RA(n),h=PA(n),f=NA(n),m=_A(n),_=yA(s),S=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(aa).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(aa).join(`
`),u.length>0&&(u+=`
`)):(p=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),u=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Ue.tonemapping_pars_fragment:"",n.toneMapping!==$i?vA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,gA("linearToOutputTexel",n.outputColorSpace),xA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(aa).join(`
`)),a=ef(a),a=Em(a,n),a=wm(a,n),o=ef(o),o=Em(o,n),o=wm(o,n),a=Tm(a),o=Tm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+p+a,w=v+u+o,R=Sm(r,r.VERTEX_SHADER,x),C=Sm(r,r.FRAGMENT_SHADER,w);r.attachShader(S,R),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function M(T){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(S).trim(),z=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(C).trim();let te=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,R,C);else{const J=Mm(r,R,"vertex"),L=Mm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+J+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||$==="")&&(G=!1);G&&(T.diagnostics={runnable:te,programLog:V,vertexShader:{log:z,prefix:p},fragmentShader:{log:$,prefix:u}})}r.deleteShader(R),r.deleteShader(C),P=new rl(r,S),O=SA(r,S)}let P;this.getUniforms=function(){return P===void 0&&M(this),P};let O;this.getAttributes=function(){return O===void 0&&M(this),O};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,fA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hA++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=C,this}let DA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new UA(e),n.set(e,i)),i}}class UA{constructor(e){this.id=DA++,this.code=e,this.usedTimes=0}}function FA(t,e,n,i,r,s,a){const o=new Rv,l=new IA,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,T,V,z,$){const te=z.fog,G=$.geometry,J=y.isMeshStandardMaterial?z.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||J),Z=L&&L.mapping===ic?L.image.height:null,Q=S[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const oe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,j=oe!==void 0?oe.length:0;let Oe=0;G.morphAttributes.position!==void 0&&(Oe=1),G.morphAttributes.normal!==void 0&&(Oe=2),G.morphAttributes.color!==void 0&&(Oe=3);let X,ne,ue,de;if(Q){const qt=Xn[Q];X=qt.vertexShader,ne=qt.fragmentShader}else X=y.vertexShader,ne=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const De=t.getRenderTarget(),Ae=$.isInstancedMesh===!0,He=$.isBatchedMesh===!0,Je=!!y.map,Ve=!!y.matcap,N=!!L,rn=!!y.aoMap,Be=!!y.lightMap,je=!!y.bumpMap,be=!!y.normalMap,rt=!!y.displacementMap,Le=!!y.emissiveMap,b=!!y.metalnessMap,E=!!y.roughnessMap,F=y.anisotropy>0,K=y.clearcoat>0,ie=y.dispersion>0,Y=y.iridescence>0,Me=y.sheen>0,ce=y.transmission>0,ve=F&&!!y.anisotropyMap,Xe=K&&!!y.clearcoatMap,se=K&&!!y.clearcoatNormalMap,xe=K&&!!y.clearcoatRoughnessMap,Re=Y&&!!y.iridescenceMap,Pe=Y&&!!y.iridescenceThicknessMap,_e=Me&&!!y.sheenColorMap,ze=Me&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,nt=!!y.specularColorMap,D=!!y.specularIntensityMap,pe=ce&&!!y.transmissionMap,W=ce&&!!y.thicknessMap,ee=!!y.gradientMap,fe=!!y.alphaMap,me=y.alphaTest>0,Ge=!!y.alphaHash,yt=!!y.extensions;let Xt=$i;y.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const qe={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:ne,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:He,batchingColor:He&&$._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&$.instanceColor!==null,instancingMorph:Ae&&$.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:ir,alphaToCoverage:!!y.alphaToCoverage,map:Je,matcap:Ve,envMap:N,envMapMode:N&&L.mapping,envMapCubeUVHeight:Z,aoMap:rn,lightMap:Be,bumpMap:je,normalMap:be,displacementMap:m&&rt,emissiveMap:Le,normalMapObjectSpace:be&&y.normalMapType===VM,normalMapTangentSpace:be&&y.normalMapType===HM,metalnessMap:b,roughnessMap:E,anisotropy:F,anisotropyMap:ve,clearcoat:K,clearcoatMap:Xe,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:ie,iridescence:Y,iridescenceMap:Re,iridescenceThicknessMap:Pe,sheen:Me,sheenColorMap:_e,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:nt,specularIntensityMap:D,transmission:ce,transmissionMap:pe,thicknessMap:W,gradientMap:ee,opaque:y.transparent===!1&&y.blending===vs&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:me,alphaHash:Ge,combine:y.combine,mapUv:Je&&p(y.map.channel),aoMapUv:rn&&p(y.aoMap.channel),lightMapUv:Be&&p(y.lightMap.channel),bumpMapUv:je&&p(y.bumpMap.channel),normalMapUv:be&&p(y.normalMap.channel),displacementMapUv:rt&&p(y.displacementMap.channel),emissiveMapUv:Le&&p(y.emissiveMap.channel),metalnessMapUv:b&&p(y.metalnessMap.channel),roughnessMapUv:E&&p(y.roughnessMap.channel),anisotropyMapUv:ve&&p(y.anisotropyMap.channel),clearcoatMapUv:Xe&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(y.sheenRoughnessMap.channel),specularMapUv:Ie&&p(y.specularMap.channel),specularColorMapUv:nt&&p(y.specularColorMap.channel),specularIntensityMapUv:D&&p(y.specularIntensityMap.channel),transmissionMapUv:pe&&p(y.transmissionMap.channel),thicknessMapUv:W&&p(y.thicknessMap.channel),alphaMapUv:fe&&p(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!G.attributes.uv&&(Je||fe),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Je&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===li,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const V in y.defines)T.push(V),T.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(x(T,y),w(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function w(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),y.push(o.mask)}function R(y){const T=S[y.type];let V;if(T){const z=Xn[T];V=_E.clone(z.uniforms)}else V=y.uniforms;return V}function C(y,T){let V;for(let z=0,$=d.length;z<$;z++){const te=d[z];if(te.cacheKey===T){V=te,++V.usedTimes;break}}return V===void 0&&(V=new LA(t,T,y,s),d.push(V)),V}function M(y){if(--y.usedTimes===0){const T=d.indexOf(y);d[T]=d[d.length-1],d.pop(),y.destroy()}}function P(y){l.remove(y)}function O(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:R,acquireProgram:C,releaseProgram:M,releaseShaderCache:P,programs:d,dispose:O}}function OA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function kA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,_,S,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:S,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=S,u.group=p),e++,u}function o(h,f,m,_,S,p){const u=a(h,f,m,_,S,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,S,p){const u=a(h,f,m,_,S,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||kA),i.length>1&&i.sort(f||Cm),r.length>1&&r.sort(f||Cm)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function BA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new bm,t.set(i,[a])):r>=s.length?(a=new bm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new et};break;case"SpotLight":n={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function HA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let VA=0;function GA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WA(t){const e=new zA,n=HA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Et,a=new Et;function o(c){let d=0,h=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,_=0,S=0,p=0,u=0,v=0,x=0,w=0,R=0,C=0,M=0;c.sort(GA);for(let O=0,y=c.length;O<y;O++){const T=c[O],V=T.color,z=T.intensity,$=T.distance,te=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=V.r*z,h+=V.g*z,f+=V.b*z;else if(T.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(T.sh.coefficients[G],z);M++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const J=T.shadow,L=n.get(T);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=T.shadow.matrix,v++}i.directional[m]=G,m++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(V).multiplyScalar(z),G.distance=$,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,i.spot[S]=G;const J=T.shadow;if(T.map&&(i.spotLightMap[R]=T.map,R++,J.updateMatrices(T),T.castShadow&&C++),i.spotLightMatrix[S]=J.matrix,T.castShadow){const L=n.get(T);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=te,w++}S++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(V).multiplyScalar(z),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=G,p++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const J=T.shadow,L=n.get(T);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,L.shadowCameraNear=J.camera.near,L.shadowCameraFar=J.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=T.shadow.matrix,x++}i.point[_]=G,_++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(z),G.groundColor.copy(T.groundColor).multiplyScalar(z),i.hemi[u]=G,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==S||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==w||P.numSpotMaps!==R||P.numLightProbes!==M)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=w+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=M,P.directionalLength=m,P.pointLength=_,P.spotLength=S,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=w,P.numSpotMaps=R,P.numLightProbes=M,i.version=VA++)}function l(c,d){let h=0,f=0,m=0,_=0,S=0;const p=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(x.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const w=i.hemi[S];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:i}}function Rm(t){const e=new WA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function jA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rm(t),e.set(r,[o])):s>=a.length?(o=new Rm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class XA extends sc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qA extends sc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KA(t,e,n){let i=new Ov;const r=new tt,s=new tt,a=new xt,o=new XA({depthPacking:zM}),l=new qA,c={},d=n.maxTextureSize,h={[Zi]:tn,[tn]:Zi,[li]:li},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:$A,fragmentShader:YA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ur;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new $n(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fv;let u=this.type;this.render=function(C,M,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const O=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),V=t.state;V.setBlending(qi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=u!==si&&this.type===si,$=u===si&&this.type!==si;for(let te=0,G=C.length;te<G;te++){const J=C[te],L=J.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Z=L.getFrameExtents();if(r.multiply(Z),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Z.x),r.x=s.x*Z.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Z.y),r.y=s.y*Z.y,L.mapSize.y=s.y)),L.map===null||z===!0||$===!0){const oe=this.type!==si?{minFilter:Sn,magFilter:Sn}:{};L.map!==null&&L.map.dispose(),L.map=new Nr(r.x,r.y,oe),L.map.texture.name=J.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Q=L.getViewportCount();for(let oe=0;oe<Q;oe++){const j=L.getViewport(oe);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),V.viewport(a),L.updateMatrices(J,oe),i=L.getFrustum(),w(M,P,L.camera,J,this.type)}L.isPointLightShadow!==!0&&this.type===si&&v(L,P),L.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(O,y,T)};function v(C,M){const P=e.update(S);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Nr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(M,null,P,f,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(M,null,P,m,S,null)}function x(C,M,P,O){let y=null;const T=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?l:o,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const V=y.uuid,z=M.uuid;let $=c[V];$===void 0&&($={},c[V]=$);let te=$[z];te===void 0&&(te=y.clone(),$[z]=te,M.addEventListener("dispose",R)),y=te}if(y.visible=M.visible,y.wireframe=M.wireframe,O===si?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:h[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=P}return y}function w(C,M,P,O,y){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const z=e.update(C),$=C.material;if(Array.isArray($)){const te=z.groups;for(let G=0,J=te.length;G<J;G++){const L=te[G],Z=$[L.materialIndex];if(Z&&Z.visible){const Q=x(C,Z,O,y);C.onBeforeShadow(t,C,M,P,z,Q,L),t.renderBufferDirect(P,null,z,Q,C,L),C.onAfterShadow(t,C,M,P,z,Q,L)}}}else if($.visible){const te=x(C,$,O,y);C.onBeforeShadow(t,C,M,P,z,te,null),t.renderBufferDirect(P,null,z,te,C,null),C.onAfterShadow(t,C,M,P,z,te,null)}}const V=C.children;for(let z=0,$=V.length;z<$;z++)w(V[z],M,P,O,y)}function R(C){C.target.removeEventListener("dispose",R);for(const P in c){const O=c[P],y=C.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}const ZA={[gd]:vd,[xd]:Sd,[_d]:Md,[bs]:yd,[vd]:gd,[Sd]:xd,[Md]:_d,[yd]:bs};function QA(t){function e(){let D=!1;const pe=new xt;let W=null;const ee=new xt(0,0,0,0);return{setMask:function(fe){W!==fe&&!D&&(t.colorMask(fe,fe,fe,fe),W=fe)},setLocked:function(fe){D=fe},setClear:function(fe,me,Ge,yt,Xt){Xt===!0&&(fe*=yt,me*=yt,Ge*=yt),pe.set(fe,me,Ge,yt),ee.equals(pe)===!1&&(t.clearColor(fe,me,Ge,yt),ee.copy(pe))},reset:function(){D=!1,W=null,ee.set(-1,0,0,0)}}}function n(){let D=!1,pe=!1,W=null,ee=null,fe=null;return{setReversed:function(me){pe=me},setTest:function(me){me?ue(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(me){W!==me&&!D&&(t.depthMask(me),W=me)},setFunc:function(me){if(pe&&(me=ZA[me]),ee!==me){switch(me){case gd:t.depthFunc(t.NEVER);break;case vd:t.depthFunc(t.ALWAYS);break;case xd:t.depthFunc(t.LESS);break;case bs:t.depthFunc(t.LEQUAL);break;case _d:t.depthFunc(t.EQUAL);break;case yd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case Md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=me}},setLocked:function(me){D=me},setClear:function(me){fe!==me&&(t.clearDepth(me),fe=me)},reset:function(){D=!1,W=null,ee=null,fe=null}}}function i(){let D=!1,pe=null,W=null,ee=null,fe=null,me=null,Ge=null,yt=null,Xt=null;return{setTest:function(qe){D||(qe?ue(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(qe){pe!==qe&&!D&&(t.stencilMask(qe),pe=qe)},setFunc:function(qe,qt,Qn){(W!==qe||ee!==qt||fe!==Qn)&&(t.stencilFunc(qe,qt,Qn),W=qe,ee=qt,fe=Qn)},setOp:function(qe,qt,Qn){(me!==qe||Ge!==qt||yt!==Qn)&&(t.stencilOp(qe,qt,Qn),me=qe,Ge=qt,yt=Qn)},setLocked:function(qe){D=qe},setClear:function(qe){Xt!==qe&&(t.clearStencil(qe),Xt=qe)},reset:function(){D=!1,pe=null,W=null,ee=null,fe=null,me=null,Ge=null,yt=null,Xt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,_=!1,S=null,p=null,u=null,v=null,x=null,w=null,R=null,C=new et(0,0,0),M=0,P=!1,O=null,y=null,T=null,V=null,z=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,G=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),te=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),te=G>=2);let L=null,Z={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),j=new xt().fromArray(Q),Oe=new xt().fromArray(oe);function X(D,pe,W,ee){const fe=new Uint8Array(4),me=t.createTexture();t.bindTexture(D,me),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<W;Ge++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(pe+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return me}const ne={};ne[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ue(t.DEPTH_TEST),s.setFunc(bs),Be(!1),je(Op),ue(t.CULL_FACE),N(qi);function ue(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function de(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function De(D,pe){return d[D]!==pe?(t.bindFramebuffer(D,pe),d[D]=pe,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=pe),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ae(D,pe){let W=f,ee=!1;if(D){W=h.get(pe),W===void 0&&(W=[],h.set(pe,W));const fe=D.textures;if(W.length!==fe.length||W[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Ge=fe.length;me<Ge;me++)W[me]=t.COLOR_ATTACHMENT0+me;W.length=fe.length,ee=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,ee=!0);ee&&t.drawBuffers(W)}function He(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Je={[mr]:t.FUNC_ADD,[fM]:t.FUNC_SUBTRACT,[hM]:t.FUNC_REVERSE_SUBTRACT};Je[pM]=t.MIN,Je[mM]=t.MAX;const Ve={[gM]:t.ZERO,[vM]:t.ONE,[xM]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[wM]:t.SRC_ALPHA_SATURATE,[MM]:t.DST_COLOR,[yM]:t.DST_ALPHA,[_M]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[EM]:t.ONE_MINUS_DST_COLOR,[SM]:t.ONE_MINUS_DST_ALPHA,[TM]:t.CONSTANT_COLOR,[AM]:t.ONE_MINUS_CONSTANT_COLOR,[CM]:t.CONSTANT_ALPHA,[bM]:t.ONE_MINUS_CONSTANT_ALPHA};function N(D,pe,W,ee,fe,me,Ge,yt,Xt,qe){if(D===qi){_===!0&&(de(t.BLEND),_=!1);return}if(_===!1&&(ue(t.BLEND),_=!0),D!==dM){if(D!==S||qe!==P){if((p!==mr||x!==mr)&&(t.blendEquation(t.FUNC_ADD),p=mr,x=mr),qe)switch(D){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.ONE,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,v=null,w=null,R=null,C.set(0,0,0),M=0,S=D,P=qe}return}fe=fe||pe,me=me||W,Ge=Ge||ee,(pe!==p||fe!==x)&&(t.blendEquationSeparate(Je[pe],Je[fe]),p=pe,x=fe),(W!==u||ee!==v||me!==w||Ge!==R)&&(t.blendFuncSeparate(Ve[W],Ve[ee],Ve[me],Ve[Ge]),u=W,v=ee,w=me,R=Ge),(yt.equals(C)===!1||Xt!==M)&&(t.blendColor(yt.r,yt.g,yt.b,Xt),C.copy(yt),M=Xt),S=D,P=!1}function rn(D,pe){D.side===li?de(t.CULL_FACE):ue(t.CULL_FACE);let W=D.side===tn;pe&&(W=!W),Be(W),D.blending===vs&&D.transparent===!1?N(qi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ee=D.stencilWrite;a.setTest(ee),ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){O!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),O=D)}function je(D){D!==lM?(ue(t.CULL_FACE),D!==y&&(D===Op?t.cullFace(t.BACK):D===cM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),y=D}function be(D){D!==T&&(te&&t.lineWidth(D),T=D)}function rt(D,pe,W){D?(ue(t.POLYGON_OFFSET_FILL),(V!==pe||z!==W)&&(t.polygonOffset(pe,W),V=pe,z=W)):de(t.POLYGON_OFFSET_FILL)}function Le(D){D?ue(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function b(D){D===void 0&&(D=t.TEXTURE0+$-1),L!==D&&(t.activeTexture(D),L=D)}function E(D,pe,W){W===void 0&&(L===null?W=t.TEXTURE0+$-1:W=L);let ee=Z[W];ee===void 0&&(ee={type:void 0,texture:void 0},Z[W]=ee),(ee.type!==D||ee.texture!==pe)&&(L!==W&&(t.activeTexture(W),L=W),t.bindTexture(D,pe||ne[D]),ee.type=D,ee.texture=pe)}function F(){const D=Z[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){j.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),j.copy(D))}function _e(D){Oe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Oe.copy(D))}function ze(D,pe){let W=l.get(pe);W===void 0&&(W=new WeakMap,l.set(pe,W));let ee=W.get(D);ee===void 0&&(ee=t.getUniformBlockIndex(pe,D.name),W.set(D,ee))}function Ie(D,pe){const ee=l.get(pe).get(D);o.get(pe)!==ee&&(t.uniformBlockBinding(pe,ee,D.__bindingPointIndex),o.set(pe,ee))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Z={},d={},h=new WeakMap,f=[],m=null,_=!1,S=null,p=null,u=null,v=null,x=null,w=null,R=null,C=new et(0,0,0),M=0,P=!1,O=null,y=null,T=null,V=null,z=null,j.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ue,disable:de,bindFramebuffer:De,drawBuffers:Ae,useProgram:He,setBlending:N,setMaterial:rn,setFlipSided:Be,setCullFace:je,setLineWidth:be,setPolygonOffset:rt,setScissorTest:Le,activeTexture:b,bindTexture:E,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:xe,texImage3D:Re,updateUBOMapping:ze,uniformBlockBinding:Ie,texStorage2D:Xe,texStorage3D:se,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Pe,viewport:_e,reset:nt}}function Pm(t,e,n,i){const r=JA(i);switch(n){case xv:return t*e;case yv:return t*e;case Sv:return t*e*2;case Mv:return t*e/r.components*r.byteLength;case nh:return t*e/r.components*r.byteLength;case Ev:return t*e*2/r.components*r.byteLength;case ih:return t*e*2/r.components*r.byteLength;case _v:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case rh:return t*e*4/r.components*r.byteLength;case Qo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:case Pd:return Math.max(t,16)*Math.max(e,8)/4;case Cd:case Rd:return Math.max(t,8)*Math.max(e,8)/2;case Nd:case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nl:case $d:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wv:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zd:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JA(t){switch(t){case xi:case mv:return{byteLength:1,components:1};case Ua:case gv:case Va:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case Pr:case Jf:case di:return{byteLength:4,components:1};case vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function eC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,E){return m?new OffscreenCanvas(b,E):Ol("canvas")}function S(b,E,F){let K=1;const ie=Le(b);if((ie.width>F||ie.height>F)&&(K=F/Math.max(ie.width,ie.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(K*ie.width),Me=Math.floor(K*ie.height);h===void 0&&(h=_(Y,Me));const ce=E?_(Y,Me):h;return ce.width=Y,ce.height=Me,ce.getContext("2d").drawImage(b,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Me+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Sn&&b.minFilter!==Fn}function u(b){t.generateMipmap(b)}function v(b,E,F,K,ie=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=E;if(E===t.RED&&(F===t.FLOAT&&(Y=t.R32F),F===t.HALF_FLOAT&&(Y=t.R16F),F===t.UNSIGNED_BYTE&&(Y=t.R8)),E===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.R8UI),F===t.UNSIGNED_SHORT&&(Y=t.R16UI),F===t.UNSIGNED_INT&&(Y=t.R32UI),F===t.BYTE&&(Y=t.R8I),F===t.SHORT&&(Y=t.R16I),F===t.INT&&(Y=t.R32I)),E===t.RG&&(F===t.FLOAT&&(Y=t.RG32F),F===t.HALF_FLOAT&&(Y=t.RG16F),F===t.UNSIGNED_BYTE&&(Y=t.RG8)),E===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RG8UI),F===t.UNSIGNED_SHORT&&(Y=t.RG16UI),F===t.UNSIGNED_INT&&(Y=t.RG32UI),F===t.BYTE&&(Y=t.RG8I),F===t.SHORT&&(Y=t.RG16I),F===t.INT&&(Y=t.RG32I)),E===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),F===t.UNSIGNED_INT&&(Y=t.RGB32UI),F===t.BYTE&&(Y=t.RGB8I),F===t.SHORT&&(Y=t.RGB16I),F===t.INT&&(Y=t.RGB32I)),E===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),F===t.UNSIGNED_INT&&(Y=t.RGBA32UI),F===t.BYTE&&(Y=t.RGBA8I),F===t.SHORT&&(Y=t.RGBA16I),F===t.INT&&(Y=t.RGBA32I)),E===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),E===t.RGBA){const Me=ie?Dl:Ke.getTransfer(K);F===t.FLOAT&&(Y=t.RGBA32F),F===t.HALF_FLOAT&&(Y=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Y=Me===ot?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(b,E){let F;return b?E===null||E===Pr||E===Ns?F=t.DEPTH24_STENCIL8:E===di?F=t.DEPTH32F_STENCIL8:E===Ua&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pr||E===Ns?F=t.DEPTH_COMPONENT24:E===di?F=t.DEPTH_COMPONENT32F:E===Ua&&(F=t.DEPTH_COMPONENT16),F}function w(b,E){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Sn&&b.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function R(b){const E=b.target;E.removeEventListener("dispose",R),M(E),E.isVideoTexture&&d.delete(E)}function C(b){const E=b.target;E.removeEventListener("dispose",C),O(E)}function M(b){const E=i.get(b);if(E.__webglInit===void 0)return;const F=b.source,K=f.get(F);if(K){const ie=K[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(b),Object.keys(K).length===0&&f.delete(F)}i.remove(b)}function P(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const F=b.source,K=f.get(F);delete K[E.__cacheKey],a.memory.textures--}function O(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let ie=0;ie<E.__webglFramebuffer[K].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[K][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)t.deleteFramebuffer(E.__webglFramebuffer[K]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=b.textures;for(let K=0,ie=F.length;K<ie;K++){const Y=i.get(F[K]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(F[K])}i.remove(b)}let y=0;function T(){y=0}function V(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function z(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function $(b,E){const F=i.get(b);if(b.isVideoTexture&&be(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(F,b,E);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+E)}function te(b,E){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Oe(F,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+E)}function G(b,E){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Oe(F,b,E);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+E)}function J(b,E){const F=i.get(b);if(b.version>0&&F.__version!==b.version){X(F,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+E)}const L={[Td]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[Ad]:t.MIRRORED_REPEAT},Z={[Sn]:t.NEAREST,[kM]:t.NEAREST_MIPMAP_NEAREST,[vo]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[Bc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},Q={[GM]:t.NEVER,[YM]:t.ALWAYS,[WM]:t.LESS,[Tv]:t.LEQUAL,[jM]:t.EQUAL,[$M]:t.GEQUAL,[XM]:t.GREATER,[qM]:t.NOTEQUAL};function oe(b,E){if(E.type===di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Bc||E.magFilter===vo||E.magFilter===Sr||E.minFilter===Fn||E.minFilter===Bc||E.minFilter===vo||E.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,L[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,L[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,L[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==vo&&E.minFilter!==Sr||E.type===di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function j(b,E){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",R));const K=E.source;let ie=f.get(K);ie===void 0&&(ie={},f.set(K,ie));const Y=z(E);if(Y!==b.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ie[Y].usedTimes++;const Me=ie[b.__cacheKey];Me!==void 0&&(ie[b.__cacheKey].usedTimes--,Me.usedTimes===0&&P(E)),b.__cacheKey=Y,b.__webglTexture=ie[Y].texture}return F}function Oe(b,E,F){let K=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=t.TEXTURE_3D);const ie=j(b,E),Y=E.source;n.bindTexture(K,b.__webglTexture,t.TEXTURE0+F);const Me=i.get(Y);if(Y.version!==Me.__version||ie===!0){n.activeTexture(t.TEXTURE0+F);const ce=Ke.getPrimaries(Ke.workingColorSpace),ve=E.colorSpace===Ii?null:Ke.getPrimaries(E.colorSpace),Xe=E.colorSpace===Ii||ce===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let se=S(E.image,!1,r.maxTextureSize);se=rt(E,se);const xe=s.convert(E.format,E.colorSpace),Re=s.convert(E.type);let Pe=v(E.internalFormat,xe,Re,E.colorSpace,E.isVideoTexture);oe(K,E);let _e;const ze=E.mipmaps,Ie=E.isVideoTexture!==!0,nt=Me.__version===void 0||ie===!0,D=Y.dataReady,pe=w(E,se);if(E.isDepthTexture)Pe=x(E.format===Ls,E.type),nt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,Pe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,xe,Re,null));else if(E.isDataTexture)if(ze.length>0){Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,ze[0].width,ze[0].height);for(let W=0,ee=ze.length;W<ee;W++)_e=ze[W],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,xe,Re,_e.data):n.texImage2D(t.TEXTURE_2D,W,Pe,_e.width,_e.height,0,xe,Re,_e.data);E.generateMipmaps=!1}else Ie?(nt&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,se.width,se.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,xe,Re,se.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,xe,Re,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Pe,ze[0].width,ze[0].height,se.depth);for(let W=0,ee=ze.length;W<ee;W++)if(_e=ze[W],E.format!==kn)if(xe!==null)if(Ie){if(D)if(E.layerUpdates.size>0){const fe=Pm(_e.width,_e.height,E.format,E.type);for(const me of E.layerUpdates){const Ge=_e.data.subarray(me*fe/_e.data.BYTES_PER_ELEMENT,(me+1)*fe/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,me,_e.width,_e.height,1,xe,Ge,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,se.depth,xe,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Pe,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,se.depth,xe,Re,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Pe,_e.width,_e.height,se.depth,0,xe,Re,_e.data)}else{Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,pe,Pe,ze[0].width,ze[0].height);for(let W=0,ee=ze.length;W<ee;W++)_e=ze[W],E.format!==kn?xe!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,xe,Re,_e.data):n.texImage2D(t.TEXTURE_2D,W,Pe,_e.width,_e.height,0,xe,Re,_e.data)}else if(E.isDataArrayTexture)if(Ie){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Pe,se.width,se.height,se.depth),D)if(E.layerUpdates.size>0){const W=Pm(se.width,se.height,E.format,E.type);for(const ee of E.layerUpdates){const fe=se.data.subarray(ee*W/se.data.BYTES_PER_ELEMENT,(ee+1)*W/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,xe,Re,fe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Re,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,xe,Re,se.data);else if(E.isData3DTexture)Ie?(nt&&n.texStorage3D(t.TEXTURE_3D,pe,Pe,se.width,se.height,se.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Re,se.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,xe,Re,se.data);else if(E.isFramebufferTexture){if(nt)if(Ie)n.texStorage2D(t.TEXTURE_2D,pe,Pe,se.width,se.height);else{let W=se.width,ee=se.height;for(let fe=0;fe<pe;fe++)n.texImage2D(t.TEXTURE_2D,fe,Pe,W,ee,0,xe,Re,null),W>>=1,ee>>=1}}else if(ze.length>0){if(Ie&&nt){const W=Le(ze[0]);n.texStorage2D(t.TEXTURE_2D,pe,Pe,W.width,W.height)}for(let W=0,ee=ze.length;W<ee;W++)_e=ze[W],Ie?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,xe,Re,_e):n.texImage2D(t.TEXTURE_2D,W,Pe,xe,Re,_e);E.generateMipmaps=!1}else if(Ie){if(nt){const W=Le(se);n.texStorage2D(t.TEXTURE_2D,pe,Pe,W.width,W.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Re,se)}else n.texImage2D(t.TEXTURE_2D,0,Pe,xe,Re,se);p(E)&&u(K),Me.__version=Y.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function X(b,E,F){if(E.image.length!==6)return;const K=j(b,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+F);const Y=i.get(ie);if(ie.version!==Y.__version||K===!0){n.activeTexture(t.TEXTURE0+F);const Me=Ke.getPrimaries(Ke.workingColorSpace),ce=E.colorSpace===Ii?null:Ke.getPrimaries(E.colorSpace),ve=E.colorSpace===Ii||Me===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!Xe&&!se?xe[ee]=S(E.image[ee],!0,r.maxCubemapSize):xe[ee]=se?E.image[ee].image:E.image[ee],xe[ee]=rt(E,xe[ee]);const Re=xe[0],Pe=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),ze=v(E.internalFormat,Pe,_e,E.colorSpace),Ie=E.isVideoTexture!==!0,nt=Y.__version===void 0||K===!0,D=ie.dataReady;let pe=w(E,Re);oe(t.TEXTURE_CUBE_MAP,E);let W;if(Xe){Ie&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,ze,Re.width,Re.height);for(let ee=0;ee<6;ee++){W=xe[ee].mipmaps;for(let fe=0;fe<W.length;fe++){const me=W[fe];E.format!==kn?Pe!==null?Ie?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,me.width,me.height,Pe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,ze,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,me.width,me.height,Pe,_e,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,ze,me.width,me.height,0,Pe,_e,me.data)}}}else{if(W=E.mipmaps,Ie&&nt){W.length>0&&pe++;const ee=Le(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,Pe,_e,xe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,xe[ee].width,xe[ee].height,0,Pe,_e,xe[ee].data);for(let fe=0;fe<W.length;fe++){const Ge=W[fe].image[ee].image;Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Ge.width,Ge.height,Pe,_e,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,ze,Ge.width,Ge.height,0,Pe,_e,Ge.data)}}else{Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,_e,xe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,Pe,_e,xe[ee]);for(let fe=0;fe<W.length;fe++){const me=W[fe];Ie?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,Pe,_e,me.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,ze,Pe,_e,me.image[ee])}}}p(E)&&u(t.TEXTURE_CUBE_MAP),Y.__version=ie.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ne(b,E,F,K,ie,Y){const Me=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),ve=v(F.internalFormat,Me,ce,F.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>Y),xe=Math.max(1,E.height>>Y);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Y,ve,se,xe,E.depth,0,Me,ce,null):n.texImage2D(ie,Y,ve,se,xe,0,Me,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ie,i.get(F).__webglTexture,0,Be(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ie,i.get(F).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(b,E,F){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer){const K=E.depthTexture,ie=K&&K.isDepthTexture?K.type:null,Y=x(E.stencilBuffer,ie),Me=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Be(E);je(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Y,E.width,E.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Y,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,b)}else{const K=E.textures;for(let ie=0;ie<K.length;ie++){const Y=K[ie],Me=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),ve=v(Y.internalFormat,Me,ce,Y.colorSpace),Xe=Be(E);F&&je(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ve,E.width,E.height):je(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe,ve,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ve,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const K=i.get(E.depthTexture).__webglTexture,ie=Be(E);if(E.depthTexture.format===xs)je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(E.depthTexture.format===Ls)je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function De(b){const E=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",ie)};K.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=K}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,b)}else if(F){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=t.createRenderbuffer(),ue(E.__webglDepthbuffer[K],b,!1);else{const ie=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ue(E.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(b,E,F){const K=i.get(b);E!==void 0&&ne(K.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&De(b)}function He(b){const E=b.texture,F=i.get(b),K=i.get(E);b.addEventListener("dispose",C);const ie=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=E.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let ve=0;ve<E.mipmaps.length;ve++)F.__webglFramebuffer[ce][ve]=t.createFramebuffer()}else F.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)F.__webglFramebuffer[ce]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ce=0,ve=ie.length;ce<ve;ce++){const Xe=i.get(ie[ce]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&je(b)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const ve=ie[ce];F.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const Xe=s.convert(ve.format,ve.colorSpace),se=s.convert(ve.type),xe=v(ve.internalFormat,Xe,se,ve.colorSpace,b.isXRRenderTarget===!0),Re=Be(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(F.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),oe(t.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ne(F.__webglFramebuffer[ce][ve],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else ne(F.__webglFramebuffer[ce],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ce=0,ve=ie.length;ce<ve;ce++){const Xe=ie[ce],se=i.get(Xe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),oe(t.TEXTURE_2D,Xe),ne(F.__webglFramebuffer,b,Xe,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),p(Xe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,K.__webglTexture),oe(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)ne(F.__webglFramebuffer[ve],b,E,t.COLOR_ATTACHMENT0,ce,ve);else ne(F.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,ce,0);p(E)&&u(ce),n.unbindTexture()}b.depthBuffer&&De(b)}function Je(b){const E=b.textures;for(let F=0,K=E.length;F<K;F++){const ie=E[F];if(p(ie)){const Y=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ie).__webglTexture;n.bindTexture(Y,Me),u(Y),n.unbindTexture()}}}const Ve=[],N=[];function rn(b){if(b.samples>0){if(je(b)===!1){const E=b.textures,F=b.width,K=b.height;let ie=t.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(b),ce=E.length>1;if(ce)for(let ve=0;ve<E.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Xe=i.get(E[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Xe,0)}t.blitFramebuffer(0,0,F,K,0,0,F,K,ie,t.NEAREST),l===!0&&(Ve.length=0,N.length=0,Ve.push(t.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ve.push(Y),N.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<E.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Xe=i.get(E[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Be(b){return Math.min(r.maxSamples,b.samples)}function je(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(b){const E=a.render.frame;d.get(b)!==E&&(d.set(b,E),b.update())}function rt(b,E){const F=b.colorSpace,K=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==ir&&F!==Ii&&(Ke.getTransfer(F)===ot?(K!==kn||ie!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function Le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=T,this.setTexture2D=$,this.setTexture2DArray=te,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Ae,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=je}function tC(t,e){function n(i,r=Ii){let s;const a=Ke.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===eh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===th)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===mv)return t.BYTE;if(i===gv)return t.SHORT;if(i===Ua)return t.UNSIGNED_SHORT;if(i===Jf)return t.INT;if(i===Pr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Va)return t.HALF_FLOAT;if(i===xv)return t.ALPHA;if(i===_v)return t.RGB;if(i===kn)return t.RGBA;if(i===yv)return t.LUMINANCE;if(i===Sv)return t.LUMINANCE_ALPHA;if(i===xs)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===Mv)return t.RED;if(i===nh)return t.RED_INTEGER;if(i===Ev)return t.RG;if(i===ih)return t.RG_INTEGER;if(i===rh)return t.RGBA_INTEGER;if(i===Qo||i===Jo||i===el||i===tl)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cd||i===bd||i===Rd||i===Pd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nd||i===Ld||i===Dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nd||i===Ld)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Id||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Id)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Od)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===$d||i===Yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nl)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wv||i===Kd||i===Zd||i===Qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class nC extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ko extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iC={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ko;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yi({vertexShader:rC,fragmentShader:sC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $n(new qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const S=new aC,p=n.getContextAttributes();let u=null,v=null;const x=[],w=[],R=new tt;let C=null;const M=new Un;M.layers.enable(1),M.viewport=new xt;const P=new Un;P.layers.enable(2),P.viewport=new xt;const O=[M,P],y=new nC;y.layers.enable(1),y.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=x[X];return ne===void 0&&(ne=new mu,x[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=x[X];return ne===void 0&&(ne=new mu,x[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=x[X];return ne===void 0&&(ne=new mu,x[X]=ne),ne.getHandSpace()};function z(X){const ne=w.indexOf(X.inputSource);if(ne===-1)return;const ue=x[ne];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||a),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",te);for(let X=0;X<x.length;X++){const ne=w[X];ne!==null&&(w[X]=null,x[X].disconnect(ne))}T=null,V=null,S.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Nr(m.framebufferWidth,m.framebufferHeight,{format:kn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,ue=null,de=null;p.depth&&(de=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=p.stencil?Ls:xs,ue=p.stencil?Ns:Pr);const De={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Nr(f.textureWidth,f.textureHeight,{format:kn,type:xi,depthTexture:new zv(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function te(X){for(let ne=0;ne<X.removed.length;ne++){const ue=X.removed[ne],de=w.indexOf(ue);de>=0&&(w[de]=null,x[de].disconnect(ue))}for(let ne=0;ne<X.added.length;ne++){const ue=X.added[ne];let de=w.indexOf(ue);if(de===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=w.length){w.push(ue),de=Ae;break}else if(w[Ae]===null){w[Ae]=ue,de=Ae;break}if(de===-1)break}const De=x[de];De&&De.connect(ue)}}const G=new H,J=new H;function L(X,ne,ue){G.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const de=G.distanceTo(J),De=ne.projectionMatrix.elements,Ae=ue.projectionMatrix.elements,He=De[14]/(De[10]-1),Je=De[14]/(De[10]+1),Ve=(De[9]+1)/De[5],N=(De[9]-1)/De[5],rn=(De[8]-1)/De[0],Be=(Ae[8]+1)/Ae[0],je=He*rn,be=He*Be,rt=de/(-rn+Be),Le=rt*-rn;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),De[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const b=He+rt,E=Je+rt,F=je-Le,K=be+(de-Le),ie=Ve*Je/E*b,Y=N*Je/E*b;X.projectionMatrix.makePerspective(F,K,ie,Y,b,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ne=X.near,ue=X.far;S.texture!==null&&(S.depthNear>0&&(ne=S.depthNear),S.depthFar>0&&(ue=S.depthFar)),y.near=P.near=M.near=ne,y.far=P.far=M.far=ue,(T!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,V=y.far);const de=X.parent,De=y.cameras;Z(y,de);for(let Ae=0;Ae<De.length;Ae++)Z(De[Ae],de);De.length===2?L(y,M,P):y.projectionMatrix.copy(M.projectionMatrix),Q(X,y,de)};function Q(X,ne,ue){ue===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Jd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let oe=null;function j(X,ne){if(d=ne.getViewerPose(c||a),_=ne,d!==null){const ue=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let de=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Ae=0;Ae<ue.length;Ae++){const He=ue[Ae];let Je=null;if(m!==null)Je=m.getViewport(He);else{const N=h.getViewSubImage(f,He);Je=N.viewport,Ae===0&&(e.setRenderTargetTextures(v,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(v))}let Ve=O[Ae];Ve===void 0&&(Ve=new Un,Ve.layers.enable(Ae),Ve.viewport=new xt,O[Ae]=Ve),Ve.matrix.fromArray(He.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(He.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Je.x,Je.y,Je.width,Je.height),Ae===0&&(y.matrix.copy(Ve.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(Ve)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ae=h.getDepthInformation(ue[0]);Ae&&Ae.isValid&&Ae.texture&&S.init(e,Ae,r.renderState)}}for(let ue=0;ue<x.length;ue++){const de=w[ue],De=x[ue];de!==null&&De!==void 0&&De.update(de,ne,c||a)}oe&&oe(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Oe=new kv;Oe.setAnimationLoop(j),this.setAnimationLoop=function(X){oe=X},this.dispose=function(){}}}const ur=new _i,lC=new Et;function cC(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Iv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,x,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),S(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===tn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===tn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,w=v.envMapRotation;x&&(p.envMap.value=x,ur.copy(w),ur.x*=-1,ur.y*=-1,ur.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(ur)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=x*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const w=x.program;i.uniformBlockBinding(v,w)}function c(v,x){let w=r[v.id];w===void 0&&(_(v),w=d(v),r[v.id]=w,v.addEventListener("dispose",p));const R=x.program;i.updateUBOMapping(v,R);const C=e.render.frame;s[v.id]!==C&&(f(v),s[v.id]=C)}function d(v){const x=h();v.__bindingPointIndex=x;const w=t.createBuffer(),R=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,w),w}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],w=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,M=w.length;C<M;C++){const P=Array.isArray(w[C])?w[C]:[w[C]];for(let O=0,y=P.length;O<y;O++){const T=P[O];if(m(T,C,O,R)===!0){const V=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let $=0;for(let te=0;te<z.length;te++){const G=z[te],J=S(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,V+$,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,w,R){const C=v.value,M=x+"_"+w;if(R[M]===void 0)return typeof C=="number"||typeof C=="boolean"?R[M]=C:R[M]=C.clone(),!0;{const P=R[M];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return R[M]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(v){const x=v.uniforms;let w=0;const R=16;for(let M=0,P=x.length;M<P;M++){const O=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=O.length;y<T;y++){const V=O[y],z=Array.isArray(V.value)?V.value:[V.value];for(let $=0,te=z.length;$<te;$++){const G=z[$],J=S(G),L=w%R,Z=L%J.boundary,Q=L+Z;w+=Z,Q!==0&&R-Q<J.storage&&(w+=R-Q),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=J.storage}}}const C=w%R;return C>0&&(w+=R-C),v.__size=w,v.__cache={},this}function S(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class dC{constructor(e={}){const{canvas:n=ZM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let S=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=$i,this.toneMappingExposure=1;const x=this;let w=!1,R=0,C=0,M=null,P=-1,O=null;const y=new xt,T=new xt;let V=null;const z=new et(0);let $=0,te=n.width,G=n.height,J=1,L=null,Z=null;const Q=new xt(0,0,te,G),oe=new xt(0,0,te,G);let j=!1;const Oe=new Ov;let X=!1,ne=!1;const ue=new Et,de=new Et,De=new H,Ae=new xt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Ve(){return M===null?J:1}let N=i;function rn(A,I){return n.getContext(A,I)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qf}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",me,!1),N===null){const I="webgl2";if(N=rn(I,A),N===null)throw rn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Be,je,be,rt,Le,b,E,F,K,ie,Y,Me,ce,ve,Xe,se,xe,Re,Pe,_e,ze,Ie,nt,D;function pe(){Be=new gT(N),Be.init(),Ie=new tC(N,Be),je=new uT(N,Be,e,Ie),be=new QA(N),je.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),rt=new _T(N),Le=new OA,b=new eC(N,Be,be,Le,je,Ie,rt),E=new fT(x),F=new mT(x),K=new AE(N),nt=new lT(N,K),ie=new vT(N,K,rt,nt),Y=new ST(N,ie,K,rt),Pe=new yT(N,je,b),se=new dT(Le),Me=new FA(x,E,F,Be,je,nt,se),ce=new cC(x,Le),ve=new BA,Xe=new jA(Be),Re=new oT(x,E,F,be,Y,f,l),xe=new KA(x,Y,je),D=new uC(N,rt,je,be),_e=new cT(N,Be,rt),ze=new xT(N,Be,rt),rt.programs=Me.programs,x.capabilities=je,x.extensions=Be,x.properties=Le,x.renderLists=ve,x.shadowMap=xe,x.state=be,x.info=rt}pe();const W=new oC(x,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(te,G,!1))},this.getSize=function(A){return A.set(te,G)},this.setSize=function(A,I,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,G=I,n.width=Math.floor(A*J),n.height=Math.floor(I*J),k===!0&&(n.style.width=A+"px",n.style.height=I+"px"),this.setViewport(0,0,A,I)},this.getDrawingBufferSize=function(A){return A.set(te*J,G*J).floor()},this.setDrawingBufferSize=function(A,I,k){te=A,G=I,J=k,n.width=Math.floor(A*k),n.height=Math.floor(I*k),this.setViewport(0,0,A,I)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,I,k,B){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,I,k,B),be.viewport(y.copy(Q).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,I,k,B){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,I,k,B),be.scissor(T.copy(oe).multiplyScalar(J).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(A){be.setScissorTest(j=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(A=!0,I=!0,k=!0){let B=0;if(A){let U=!1;if(M!==null){const ae=M.texture.format;U=ae===rh||ae===ih||ae===nh}if(U){const ae=M.texture.type,he=ae===xi||ae===Pr||ae===Ua||ae===Ns||ae===eh||ae===th,ye=Re.getClearColor(),Se=Re.getClearAlpha(),Te=ye.r,Ce=ye.g,Ee=ye.b;he?(m[0]=Te,m[1]=Ce,m[2]=Ee,m[3]=Se,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=Te,_[1]=Ce,_[2]=Ee,_[3]=Se,N.clearBufferiv(N.COLOR,0,_))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ve.dispose(),Xe.dispose(),Le.dispose(),E.dispose(),F.dispose(),Y.dispose(),nt.dispose(),D.dispose(),Me.dispose(),W.dispose(),W.removeEventListener("sessionstart",lh),W.removeEventListener("sessionend",ch),rr.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=rt.autoReset,I=xe.enabled,k=xe.autoUpdate,B=xe.needsUpdate,U=xe.type;pe(),rt.autoReset=A,xe.enabled=I,xe.autoUpdate=k,xe.needsUpdate=B,xe.type=U}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const I=A.target;I.removeEventListener("dispose",Ge),yt(I)}function yt(A){Xt(A),Le.remove(A)}function Xt(A){const I=Le.get(A).programs;I!==void 0&&(I.forEach(function(k){Me.releaseProgram(k)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,I,k,B,U,ae){I===null&&(I=He);const he=U.isMesh&&U.matrixWorld.determinant()<0,ye=jv(A,I,k,B,U);be.setMaterial(B,he);let Se=k.index,Te=1;if(B.wireframe===!0){if(Se=ie.getWireframeAttribute(k),Se===void 0)return;Te=2}const Ce=k.drawRange,Ee=k.attributes.position;let Ze=Ce.start*Te,st=(Ce.start+Ce.count)*Te;ae!==null&&(Ze=Math.max(Ze,ae.start*Te),st=Math.min(st,(ae.start+ae.count)*Te)),Se!==null?(Ze=Math.max(Ze,0),st=Math.min(st,Se.count)):Ee!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Ee.count));const ht=st-Ze;if(ht<0||ht===1/0)return;nt.setup(U,B,ye,k,Se);let sn,$e=_e;if(Se!==null&&(sn=K.get(Se),$e=ze,$e.setIndex(sn)),U.isMesh)B.wireframe===!0?(be.setLineWidth(B.wireframeLinewidth*Ve()),$e.setMode(N.LINES)):$e.setMode(N.TRIANGLES);else if(U.isLine){let we=B.linewidth;we===void 0&&(we=1),be.setLineWidth(we*Ve()),U.isLineSegments?$e.setMode(N.LINES):U.isLineLoop?$e.setMode(N.LINE_LOOP):$e.setMode(N.LINE_STRIP)}else U.isPoints?$e.setMode(N.POINTS):U.isSprite&&$e.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))$e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,Nt=U._multiDrawCounts,Ye=U._multiDrawCount,Tn=Se?K.get(Se).bytesPerElement:1,Fr=Le.get(B).currentProgram.getUniforms();for(let an=0;an<Ye;an++)Fr.setValue(N,"_gl_DrawID",an),$e.render(we[an]/Tn,Nt[an])}else if(U.isInstancedMesh)$e.renderInstances(Ze,ht,U.count);else if(k.isInstancedBufferGeometry){const we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Nt=Math.min(k.instanceCount,we);$e.renderInstances(Ze,ht,Nt)}else $e.render(Ze,ht)};function qe(A,I,k){A.transparent===!0&&A.side===li&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,Ya(A,I,k),A.side=Zi,A.needsUpdate=!0,Ya(A,I,k),A.side=li):Ya(A,I,k)}this.compile=function(A,I,k=null){k===null&&(k=A),p=Xe.get(k),p.init(I),v.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),A!==k&&A.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const B=new Set;return A.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ae=U.material;if(ae)if(Array.isArray(ae))for(let he=0;he<ae.length;he++){const ye=ae[he];qe(ye,k,U),B.add(ye)}else qe(ae,k,U),B.add(ae)}),v.pop(),p=null,B},this.compileAsync=function(A,I,k=null){const B=this.compile(A,I,k);return new Promise(U=>{function ae(){if(B.forEach(function(he){Le.get(he).currentProgram.isReady()&&B.delete(he)}),B.size===0){U(A);return}setTimeout(ae,10)}Be.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let qt=null;function Qn(A){qt&&qt(A)}function lh(){rr.stop()}function ch(){rr.start()}const rr=new kv;rr.setAnimationLoop(Qn),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(A){qt=A,W.setAnimationLoop(A),A===null?rr.stop():rr.start()},W.addEventListener("sessionstart",lh),W.addEventListener("sessionend",ch),this.render=function(A,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,I,M),p=Xe.get(A,v.length),p.init(I),v.push(p),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Oe.setFromProjectionMatrix(de),ne=this.localClippingEnabled,X=se.init(this.clippingPlanes,ne),S=ve.get(A,u.length),S.init(),u.push(S),W.enabled===!0&&W.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&oc(ae,I,-1/0,x.sortObjects)}oc(A,I,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(L,Z),Je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Je&&Re.addToRenderList(S,A),this.info.render.frame++,X===!0&&se.beginShadows();const k=p.state.shadowsArray;xe.render(k,A,I),X===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=S.opaque,U=S.transmissive;if(p.setupLights(),I.isArrayCamera){const ae=I.cameras;if(U.length>0)for(let he=0,ye=ae.length;he<ye;he++){const Se=ae[he];dh(B,U,A,Se)}Je&&Re.render(A);for(let he=0,ye=ae.length;he<ye;he++){const Se=ae[he];uh(S,A,Se,Se.viewport)}}else U.length>0&&dh(B,U,A,I),Je&&Re.render(A),uh(S,A,I);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,I),nt.resetDefaultState(),P=-1,O=null,v.pop(),v.length>0?(p=v[v.length-1],X===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function oc(A,I,k,B){if(A.visible===!1)return;if(A.layers.test(I.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(I);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){B&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const he=Y.update(A),ye=A.material;ye.visible&&S.push(A,he,ye,k,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const he=Y.update(A),ye=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ae.copy(he.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(ye)){const Se=he.groups;for(let Te=0,Ce=Se.length;Te<Ce;Te++){const Ee=Se[Te],Ze=ye[Ee.materialIndex];Ze&&Ze.visible&&S.push(A,he,Ze,k,Ae.z,Ee)}}else ye.visible&&S.push(A,he,ye,k,Ae.z,null)}}const ae=A.children;for(let he=0,ye=ae.length;he<ye;he++)oc(ae[he],I,k,B)}function uh(A,I,k,B){const U=A.opaque,ae=A.transmissive,he=A.transparent;p.setupLightsView(k),X===!0&&se.setGlobalState(x.clippingPlanes,k),B&&be.viewport(y.copy(B)),U.length>0&&$a(U,I,k),ae.length>0&&$a(ae,I,k),he.length>0&&$a(he,I,k),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function dh(A,I,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Nr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Va:xi,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ae=p.state.transmissionRenderTarget[B.id],he=B.viewport||y;ae.setSize(he.z,he.w);const ye=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(z),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Je&&Re.render(k);const Se=x.toneMapping;x.toneMapping=$i;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),X===!0&&se.setGlobalState(x.clippingPlanes,B),$a(A,k,B),b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,Ze=I.length;Ee<Ze;Ee++){const st=I[Ee],ht=st.object,sn=st.geometry,$e=st.material,we=st.group;if($e.side===li&&ht.layers.test(B.layers)){const Nt=$e.side;$e.side=tn,$e.needsUpdate=!0,fh(ht,k,B,sn,$e,we),$e.side=Nt,$e.needsUpdate=!0,Ce=!0}}Ce===!0&&(b.updateMultisampleRenderTarget(ae),b.updateRenderTargetMipmap(ae))}x.setRenderTarget(ye),x.setClearColor(z,$),Te!==void 0&&(B.viewport=Te),x.toneMapping=Se}function $a(A,I,k){const B=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ae=A.length;U<ae;U++){const he=A[U],ye=he.object,Se=he.geometry,Te=B===null?he.material:B,Ce=he.group;ye.layers.test(k.layers)&&fh(ye,I,k,Se,Te,Ce)}}function fh(A,I,k,B,U,ae){A.onBeforeRender(x,I,k,B,U,ae),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),U.onBeforeRender(x,I,k,B,A,ae),U.transparent===!0&&U.side===li&&U.forceSinglePass===!1?(U.side=tn,U.needsUpdate=!0,x.renderBufferDirect(k,I,B,U,A,ae),U.side=Zi,U.needsUpdate=!0,x.renderBufferDirect(k,I,B,U,A,ae),U.side=li):x.renderBufferDirect(k,I,B,U,A,ae),A.onAfterRender(x,I,k,B,U,ae)}function Ya(A,I,k){I.isScene!==!0&&(I=He);const B=Le.get(A),U=p.state.lights,ae=p.state.shadowsArray,he=U.state.version,ye=Me.getParameters(A,U.state,ae,I,k),Se=Me.getProgramCacheKey(ye);let Te=B.programs;B.environment=A.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(A.isMeshStandardMaterial?F:E).get(A.envMap||B.environment),B.envMapRotation=B.environment!==null&&A.envMap===null?I.environmentRotation:A.envMapRotation,Te===void 0&&(A.addEventListener("dispose",Ge),Te=new Map,B.programs=Te);let Ce=Te.get(Se);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===he)return ph(A,ye),Ce}else ye.uniforms=Me.getUniforms(A),A.onBeforeCompile(ye,x),Ce=Me.acquireProgram(ye,Se),Te.set(Se,Ce),B.uniforms=ye.uniforms;const Ee=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ee.clippingPlanes=se.uniform),ph(A,ye),B.needsLights=qv(A),B.lightsStateVersion=he,B.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function hh(A){if(A.uniformsList===null){const I=A.currentProgram.getUniforms();A.uniformsList=rl.seqWithValue(I.seq,A.uniforms)}return A.uniformsList}function ph(A,I){const k=Le.get(A);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function jv(A,I,k,B,U){I.isScene!==!0&&(I=He),b.resetTextureUnits();const ae=I.fog,he=B.isMeshStandardMaterial?I.environment:null,ye=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ir,Se=(B.isMeshStandardMaterial?F:E).get(B.envMap||he),Te=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!k.morphAttributes.position,Ze=!!k.morphAttributes.normal,st=!!k.morphAttributes.color;let ht=$i;B.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ht=x.toneMapping);const sn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$e=sn!==void 0?sn.length:0,we=Le.get(B),Nt=p.state.lights;if(X===!0&&(ne===!0||A!==O)){const gn=A===O&&B.id===P;se.setState(B,A,gn)}let Ye=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Nt.state.version||we.outputColorSpace!==ye||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==Se||B.fog===!0&&we.fog!==ae||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==se.numPlanes||we.numIntersection!==se.numIntersection)||we.vertexAlphas!==Te||we.vertexTangents!==Ce||we.morphTargets!==Ee||we.morphNormals!==Ze||we.morphColors!==st||we.toneMapping!==ht||we.morphTargetsCount!==$e)&&(Ye=!0):(Ye=!0,we.__version=B.version);let Tn=we.currentProgram;Ye===!0&&(Tn=Ya(B,I,U));let Fr=!1,an=!1,lc=!1;const gt=Tn.getUniforms(),Mi=we.uniforms;if(be.useProgram(Tn.program)&&(Fr=!0,an=!0,lc=!0),B.id!==P&&(P=B.id,an=!0),Fr||O!==A){je.reverseDepthBuffer?(ue.copy(A.projectionMatrix),JM(ue),eE(ue),gt.setValue(N,"projectionMatrix",ue)):gt.setValue(N,"projectionMatrix",A.projectionMatrix),gt.setValue(N,"viewMatrix",A.matrixWorldInverse);const gn=gt.map.cameraPosition;gn!==void 0&&gn.setValue(N,De.setFromMatrixPosition(A.matrixWorld)),je.logarithmicDepthBuffer&&gt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&gt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,an=!0,lc=!0)}if(U.isSkinnedMesh){gt.setOptional(N,U,"bindMatrix"),gt.setOptional(N,U,"bindMatrixInverse");const gn=U.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),gt.setValue(N,"boneTexture",gn.boneTexture,b))}U.isBatchedMesh&&(gt.setOptional(N,U,"batchingTexture"),gt.setValue(N,"batchingTexture",U._matricesTexture,b),gt.setOptional(N,U,"batchingIdTexture"),gt.setValue(N,"batchingIdTexture",U._indirectTexture,b),gt.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&gt.setValue(N,"batchingColorTexture",U._colorsTexture,b));const cc=k.morphAttributes;if((cc.position!==void 0||cc.normal!==void 0||cc.color!==void 0)&&Pe.update(U,k,Tn),(an||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,gt.setValue(N,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Mi.envMap.value=Se,Mi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(Mi.envMapIntensity.value=I.environmentIntensity),an&&(gt.setValue(N,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&Xv(Mi,lc),ae&&B.fog===!0&&ce.refreshFogUniforms(Mi,ae),ce.refreshMaterialUniforms(Mi,B,J,G,p.state.transmissionRenderTarget[A.id]),rl.upload(N,hh(we),Mi,b)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(rl.upload(N,hh(we),Mi,b),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&gt.setValue(N,"center",U.center),gt.setValue(N,"modelViewMatrix",U.modelViewMatrix),gt.setValue(N,"normalMatrix",U.normalMatrix),gt.setValue(N,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const gn=B.uniformsGroups;for(let uc=0,$v=gn.length;uc<$v;uc++){const mh=gn[uc];D.update(mh,Tn),D.bind(mh,Tn)}}return Tn}function Xv(A,I){A.ambientLightColor.needsUpdate=I,A.lightProbe.needsUpdate=I,A.directionalLights.needsUpdate=I,A.directionalLightShadows.needsUpdate=I,A.pointLights.needsUpdate=I,A.pointLightShadows.needsUpdate=I,A.spotLights.needsUpdate=I,A.spotLightShadows.needsUpdate=I,A.rectAreaLights.needsUpdate=I,A.hemisphereLights.needsUpdate=I}function qv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,I,k){Le.get(A.texture).__webglTexture=I,Le.get(A.depthTexture).__webglTexture=k;const B=Le.get(A);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,I){const k=Le.get(A);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(A,I=0,k=0){M=A,R=I,C=k;let B=!0,U=null,ae=!1,he=!1;if(A){const Se=Le.get(A);if(Se.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(Se.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Se.__hasExternalTextures)b.rebindTextures(A,Le.get(A.texture).__webglTexture,Le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ee=A.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Le.has(Ee)&&(A.width!==Ee.image.width||A.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Te=A.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(he=!0);const Ce=Le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?U=Ce[I][k]:U=Ce[I],ae=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?U=Le.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[k]:U=Ce,y.copy(A.viewport),T.copy(A.scissor),V=A.scissorTest}else y.copy(Q).multiplyScalar(J).floor(),T.copy(oe).multiplyScalar(J).floor(),V=j;if(be.bindFramebuffer(N.FRAMEBUFFER,U)&&B&&be.drawBuffers(A,U),be.viewport(y),be.scissor(T),be.setScissorTest(V),ae){const Se=Le.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Se.__webglTexture,k)}else if(he){const Se=Le.get(A.texture),Te=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,k||0,Te)}P=-1},this.readRenderTargetPixels=function(A,I,k,B,U,ae,he){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){be.bindFramebuffer(N.FRAMEBUFFER,ye);try{const Se=A.texture,Te=Se.format,Ce=Se.type;if(!je.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=A.width-B&&k>=0&&k<=A.height-U&&N.readPixels(I,k,B,U,Ie.convert(Te),Ie.convert(Ce),ae)}finally{const Se=M!==null?Le.get(M).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,I,k,B,U,ae,he){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){const Se=A.texture,Te=Se.format,Ce=Se.type;if(!je.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=A.width-B&&k>=0&&k<=A.height-U){be.bindFramebuffer(N.FRAMEBUFFER,ye);const Ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.bufferData(N.PIXEL_PACK_BUFFER,ae.byteLength,N.STREAM_READ),N.readPixels(I,k,B,U,Ie.convert(Te),Ie.convert(Ce),0);const Ze=M!==null?Le.get(M).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Ze);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await QM(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ae),N.deleteBuffer(Ee),N.deleteSync(st),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,I=null,k=0){A.isTexture!==!0&&(il("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,A=arguments[1]);const B=Math.pow(2,-k),U=Math.floor(A.image.width*B),ae=Math.floor(A.image.height*B),he=I!==null?I.x:0,ye=I!==null?I.y:0;b.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,he,ye,U,ae),be.unbindTexture()},this.copyTextureToTexture=function(A,I,k=null,B=null,U=0){A.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1],I=arguments[2],U=arguments[3]||0,k=null);let ae,he,ye,Se,Te,Ce;k!==null?(ae=k.max.x-k.min.x,he=k.max.y-k.min.y,ye=k.min.x,Se=k.min.y):(ae=A.image.width,he=A.image.height,ye=0,Se=0),B!==null?(Te=B.x,Ce=B.y):(Te=0,Ce=0);const Ee=Ie.convert(I.format),Ze=Ie.convert(I.type);b.setTexture2D(I,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const st=N.getParameter(N.UNPACK_ROW_LENGTH),ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),sn=N.getParameter(N.UNPACK_SKIP_PIXELS),$e=N.getParameter(N.UNPACK_SKIP_ROWS),we=N.getParameter(N.UNPACK_SKIP_IMAGES),Nt=A.isCompressedTexture?A.mipmaps[U]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Nt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,Se),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,Te,Ce,ae,he,Ee,Ze,Nt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,Te,Ce,Nt.width,Nt.height,Ee,Nt.data):N.texSubImage2D(N.TEXTURE_2D,U,Te,Ce,ae,he,Ee,Ze,Nt),N.pixelStorei(N.UNPACK_ROW_LENGTH,st),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,we),U===0&&I.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(A,I,k=null,B=null,U=0){A.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,A=arguments[2],I=arguments[3],U=arguments[4]||0);let ae,he,ye,Se,Te,Ce,Ee,Ze,st;const ht=A.isCompressedTexture?A.mipmaps[U]:A.image;k!==null?(ae=k.max.x-k.min.x,he=k.max.y-k.min.y,ye=k.max.z-k.min.z,Se=k.min.x,Te=k.min.y,Ce=k.min.z):(ae=ht.width,he=ht.height,ye=ht.depth,Se=0,Te=0,Ce=0),B!==null?(Ee=B.x,Ze=B.y,st=B.z):(Ee=0,Ze=0,st=0);const sn=Ie.convert(I.format),$e=Ie.convert(I.type);let we;if(I.isData3DTexture)b.setTexture3D(I,0),we=N.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)b.setTexture2DArray(I,0),we=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Nt=N.getParameter(N.UNPACK_ROW_LENGTH),Ye=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Tn=N.getParameter(N.UNPACK_SKIP_PIXELS),Fr=N.getParameter(N.UNPACK_SKIP_ROWS),an=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Te),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ce),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(we,U,Ee,Ze,st,ae,he,ye,sn,$e,ht.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(we,U,Ee,Ze,st,ae,he,ye,sn,ht.data):N.texSubImage3D(we,U,Ee,Ze,st,ae,he,ye,sn,$e,ht),N.pixelStorei(N.UNPACK_ROW_LENGTH,Nt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Fr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,an),U===0&&I.generateMipmaps&&N.generateMipmap(we),be.unbindTexture()},this.initRenderTarget=function(A){Le.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){R=0,C=0,M=null,be.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sh?"display-p3":"srgb",n.unpackColorSpace=Ke.workingColorSpace===rc?"display-p3":"srgb"}}class fC extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);const hC=()=>{const t=q.useRef(null);return q.useEffect(()=>{const e=t.current;if(!e)return;const n=new fC,i=new Bv(-1,1,1,-1,0,1),r=new dC({antialias:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.domElement.style.width="100%",r.domElement.style.height="100%",e.appendChild(r.domElement);const s=new qa(2,2),a=`
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec2 centered = (uv - 0.5) * mat2(6.0, -4.0, 4.0, 6.0);
          vec2 p = centered + shake;
          vec2 v;
          vec4 o = vec4(0.0);

          float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

          for (float i = 0.0; i < 35.0; i++) {
            float idx = i / 35.0;
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5
              + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - idx);
            vec4 auroraColors = vec4(
              0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
              0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
              0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
              1.0
            );
            vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) /
              length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
            float thinnessFactor = smoothstep(0.0, 1.0, idx) * 0.6;
            o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
          }

          vec4 color = tanh(pow(o / 80.0, vec4(1.6)));
          color.rgb = mix(color.rgb, vec3(0.08, 0.12, 0.24), 0.35);
          gl_FragColor = color;
        }
      `,o=new yi({uniforms:{iTime:{value:0},iResolution:{value:new tt(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio)}},vertexShader:`
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:a}),l=new $n(s,o);n.add(l);let c=0;const d=()=>{o.uniforms.iTime.value+=.016,r.render(n,i),c=requestAnimationFrame(d)};d();const h=()=>{const f=window.innerWidth,m=window.innerHeight;r.setSize(f,m),o.uniforms.iResolution.value.set(f*window.devicePixelRatio,m*window.devicePixelRatio)};return window.addEventListener("resize",h),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",h),e.removeChild(r.domElement),s.dispose(),o.dispose(),r.dispose()}},[]),g.jsx("div",{ref:t,className:"pointer-events-none fixed inset-0 overflow-hidden","aria-hidden":!0})},pC=()=>{const{inquiries:t,wallet:e}=Ir(),n=t.filter(i=>i.creator===e.address);return g.jsxs("div",{className:"space-y-10",children:[g.jsxs("header",{className:"flex flex-wrap items-center justify-between gap-4",children:[g.jsxs("div",{children:[g.jsx("h1",{className:"text-2xl font-semibold text-slate-100",children:"User portal"}),g.jsx("p",{className:"mt-2 text-sm text-slate-400",children:"Stage a new Soma inquiry and keep track of the encrypted research you already have in flight."})]}),g.jsxs(Hn,{to:"/user/create",className:"inline-flex items-center gap-2 rounded border border-soma-lime/60 bg-slate-900 px-4 py-2 text-sm font-medium text-soma-lime transition hover:bg-slate-800",children:[g.jsx(IS,{className:"h-4 w-4"}),"Create inquiry"]})]}),g.jsxs("section",{className:"rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Inquiries"}),g.jsx("h2",{className:"text-lg font-semibold text-slate-100",children:"Active research inquiries"})]}),g.jsxs(Hn,{to:"/user/create",className:"inline-flex items-center gap-2 rounded border border-slate-700 px-3 py-1.5 text-xs text-slate-300 transition hover:border-soma-teal/60 hover:text-soma-teal",children:["Start new inquiry",g.jsx(Zf,{className:"h-3.5 w-3.5"})]})]}),g.jsx("div",{className:"mt-5 space-y-4",children:n.length===0?g.jsx("div",{className:"rounded-xl border border-slate-800/70 bg-slate-950/70 p-6 text-sm text-slate-400",children:"You haven't created an inquiry yet. Select a research question type to get started."}):n.map(i=>{const r=i.initiations.filter(l=>l.status==="pending"||l.status==="accepted").length,s=i.initiations.filter(l=>l.status==="rejected").length,a=i.initiations.filter(l=>l.status==="worthy").length,o=i.initiations.filter(l=>l.status==="unworthy").length;return g.jsxs(Hn,{to:`/user/inquiries/${i.id}`,className:"group block rounded-xl border border-slate-800/70 bg-slate-950/70 p-5 transition hover:border-soma-teal/60",children:[g.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500",children:[g.jsxs("span",{className:"font-mono",children:["#",i.id]}),g.jsx("span",{className:"rounded-full border border-slate-700 px-2 py-0.5 uppercase tracking-wide text-[11px]",children:i.status==="completed"?"Completed":"Active"})]}),g.jsx("p",{className:"mt-3 text-sm font-medium text-slate-100 group-hover:text-soma-teal",children:i.publicHint}),g.jsxs("dl",{className:"mt-4 grid gap-3 text-xs text-slate-400 sm:grid-cols-3",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Deposit"}),g.jsxs("dd",{className:"font-mono text-slate-200",children:[i.deposit.toFixed(3)," WETH"]})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Current pool"}),g.jsxs("dd",{className:"font-mono text-slate-200",children:[i.totalIncentive.toFixed(3)," WETH"]})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Next stake"}),g.jsxs("dd",{className:"font-mono text-slate-200",children:[i.nextRequired.toFixed(3)," WETH"]})]})]}),g.jsxs("dl",{className:"mt-4 grid gap-3 text-xs text-slate-400 sm:grid-cols-4",children:[g.jsxs("div",{children:[g.jsx("dt",{children:"Active initiations"}),g.jsx("dd",{className:"font-mono text-slate-200",children:r})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Rejected initiations"}),g.jsx("dd",{className:"font-mono text-slate-200",children:s})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Deemed worthy"}),g.jsx("dd",{className:"font-mono text-slate-200",children:a})]}),g.jsxs("div",{children:[g.jsx("dt",{children:"Deemed unworthy"}),g.jsx("dd",{className:"font-mono text-slate-200",children:o})]})]})]},i.id)})})]})]})},Bo={treasury:"0xa7ac4B665e756Ce1575eFDC902Dc2C00bfE8e959",registry:"0xbC6F9458304d1e951CF953ac9AB567Bd5E185Fc0",inquiryManager:"0x7BC30f2409e1790eA37Fc9BB9851d29ccaf942C2",escrowVault:"0xdFC33798720367F430fc58d662f56a3Edf5e00C3"},mC="0x4200000000000000000000000000000000000006",Nm={label:"Base Sepolia",chainId:"84532"},gC=()=>{const{inquiries:t}=Ir(),e=t.reduce((n,i)=>n+i.initiations.reduce((r,s)=>r+(s.treasuryCut??0),0),0);return g.jsxs("div",{className:"space-y-10",children:[g.jsxs("header",{className:"space-y-3",children:[g.jsx("h1",{className:"text-2xl font-semibold text-slate-100",children:"Treasurer console"}),g.jsx("p",{className:"text-sm text-slate-400",children:"Monitor protocol addresses, penalty inflows, and on-chain references relevant to the treasury key holder."})]}),g.jsxs("section",{className:"grid gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 md:grid-cols-3",children:[g.jsxs("article",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-5 text-sm text-slate-300",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Network"}),g.jsx("p",{className:"mt-2 font-semibold text-slate-100",children:Nm.label}),g.jsxs("p",{className:"mt-1 font-mono text-[11px] text-slate-500",children:["chainId ",Nm.chainId]})]}),g.jsxs("article",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-5 text-sm text-slate-300",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Treasury inflow"}),g.jsxs("p",{className:"mt-2 font-mono text-lg text-slate-100",children:[e.toFixed(3)," WETH"]}),g.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Aggregated from current inquiries"})]}),g.jsxs("article",{className:"rounded-xl border border-slate-800/60 bg-slate-950/70 p-5 text-sm text-slate-300",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Incentive token"}),g.jsx("p",{className:"mt-2 font-mono text-xs text-slate-200",children:ZS(mC)}),g.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Canonical Base WETH"})]})]}),g.jsxs("section",{className:"grid gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 lg:grid-cols-2",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Core contracts"}),g.jsxs("dl",{className:"space-y-3 text-sm text-slate-300",children:[g.jsxs("div",{className:"flex items-center justify-between gap-4",children:[g.jsxs("dt",{className:"flex items-center gap-2 text-slate-200",children:[g.jsx(VS,{className:"h-4 w-4 text-soma-teal"})," Treasury"]}),g.jsx("dd",{className:"font-mono text-xs text-slate-400",children:Bo.treasury})]}),g.jsxs("div",{className:"flex items-center justify-between gap-4",children:[g.jsxs("dt",{className:"flex items-center gap-2 text-slate-200",children:[g.jsx(HS,{className:"h-4 w-4 text-soma-teal"})," Registry"]}),g.jsx("dd",{className:"font-mono text-xs text-slate-400",children:Bo.registry})]}),g.jsxs("div",{className:"flex items-center justify-between gap-4",children:[g.jsxs("dt",{className:"flex items-center gap-2 text-slate-200",children:[g.jsx(hd,{className:"h-4 w-4 text-soma-teal"})," Inquiry manager"]}),g.jsx("dd",{className:"font-mono text-xs text-slate-400",children:Bo.inquiryManager})]}),g.jsxs("div",{className:"flex items-center justify-between gap-4",children:[g.jsxs("dt",{className:"flex items-center gap-2 text-slate-200",children:[g.jsx(hd,{className:"h-4 w-4 text-soma-teal"})," Escrow vault"]}),g.jsx("dd",{className:"font-mono text-xs text-slate-400",children:Bo.escrowVault})]})]})]}),g.jsxs("div",{className:"space-y-3 text-sm text-slate-300",children:[g.jsx("p",{className:"text-xs uppercase tracking-wide text-slate-500",children:"Penalty routing"}),g.jsx("p",{children:"When a user rejects or marks an initiation unworthy, half of the penalty increases the active research pool and half routes here. Keep an eye on EscrowVault events to track new inflows before you sweep."}),g.jsx("p",{className:"text-xs text-slate-500",children:"This prototype provides a snapshot only—no on-chain calls are triggered from this interface."})]})]})]})},vC=()=>{const{pathname:t}=ks();return q.useEffect(()=>{typeof window<"u"&&window.scrollTo(0,0)},[t]),null},xC=()=>g.jsxs("div",{className:"relative min-h-screen bg-slate-950 text-slate-100",children:[g.jsx(hC,{}),g.jsx(vC,{}),g.jsx("div",{className:"pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#1f2937_0,#020617_55%)] opacity-80","aria-hidden":!0}),g.jsxs("div",{className:"relative z-10 flex min-h-screen flex-col",children:[g.jsx(KS,{}),g.jsx("main",{className:"mx-auto w-full max-w-7xl flex-1 px-4 pb-20 pt-8 sm:px-6 lg:px-8",children:g.jsxs(hS,{children:[g.jsx(Nn,{path:"/",element:g.jsx(Fp,{})}),g.jsx(Nn,{path:"/user",element:g.jsx(pC,{})}),g.jsx(Nn,{path:"/user/create",element:g.jsx(tM,{})}),g.jsx(Nn,{path:"/user/inquiries/:id",element:g.jsx(go,{persona:"user"})}),g.jsx(Nn,{path:"/user/inquiries/:id/initiations/:initId",element:g.jsx(go,{persona:"user"})}),g.jsx(Nn,{path:"/researcher",element:g.jsx(iM,{})}),g.jsx(Nn,{path:"/researcher/inquiries/:id/initiations/:initId",element:g.jsx(go,{persona:"researcher"})}),g.jsx(Nn,{path:"/researcher/inquiries/:id",element:g.jsx(go,{persona:"researcher"})}),g.jsx(Nn,{path:"/treasurer",element:g.jsx(gC,{})}),g.jsx(Nn,{path:"*",element:g.jsx(Fp,{})})]})}),g.jsx("footer",{className:"border-t border-dotted border-slate-800/80 bg-slate-950/80 py-6 backdrop-blur",children:g.jsxs("div",{className:"mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-slate-400 sm:px-6 lg:px-8",children:[g.jsx("p",{children:"Soma — peptide-informed incentives"}),g.jsx("p",{className:"font-mono text-xs text-slate-500",children:"Prototype only, Base Sepolia references mocked"})]})})]}),g.jsx(oM,{})]});gu.createRoot(document.getElementById("root")).render(g.jsx(Vm.StrictMode,{children:g.jsx(SS,{children:g.jsx(qS,{children:g.jsx($S,{children:g.jsx(xC,{})})})})}));
