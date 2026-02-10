(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Zj(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wj={exports:{}},zM={},Gj={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yi=Symbol.for("react.element"),PI=Symbol.for("react.portal"),HI=Symbol.for("react.fragment"),BI=Symbol.for("react.strict_mode"),RI=Symbol.for("react.profiler"),VI=Symbol.for("react.provider"),FI=Symbol.for("react.context"),EI=Symbol.for("react.forward_ref"),OI=Symbol.for("react.suspense"),$I=Symbol.for("react.memo"),UI=Symbol.for("react.lazy"),jS=Symbol.iterator;function ZI(e){return e===null||typeof e!="object"?null:(e=jS&&e[jS]||e["@@iterator"],typeof e=="function"?e:null)}var Kj={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xj=Object.assign,Qj={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=Qj,this.updater=n||Kj}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jj(){}Jj.prototype=Mr.prototype;function LL(e,t,n){this.props=e,this.context=t,this.refs=Qj,this.updater=n||Kj}var SL=LL.prototype=new Jj;SL.constructor=LL;Xj(SL,Mr.prototype);SL.isPureReactComponent=!0;var CS=Array.isArray,Yj=Object.prototype.hasOwnProperty,jL={current:null},eC={key:!0,ref:!0,__self:!0,__source:!0};function tC(e,t,n){var a,o={},c=null,s=null;if(t!=null)for(a in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(c=""+t.key),t)Yj.call(t,a)&&!eC.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var d=Array(l),h=0;h<l;h++)d[h]=arguments[h+2];o.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)o[a]===void 0&&(o[a]=l[a]);return{$$typeof:Yi,type:e,key:c,ref:s,props:o,_owner:jL.current}}function WI(e,t){return{$$typeof:Yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function CL(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yi}function GI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _S=/\/+/g;function JM(e,t){return typeof e=="object"&&e!==null&&e.key!=null?GI(""+e.key):t.toString(36)}function zo(e,t,n,a,o){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Yi:case PI:s=!0}}if(s)return s=e,o=o(s),e=a===""?"."+JM(s,0):a,CS(o)?(n="",e!=null&&(n=e.replace(_S,"$&/")+"/"),zo(o,t,n,"",function(h){return h})):o!=null&&(CL(o)&&(o=WI(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(_S,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=a===""?".":a+":",CS(e))for(var l=0;l<e.length;l++){c=e[l];var d=a+JM(c,l);s+=zo(c,t,n,d,o)}else if(d=ZI(e),typeof d=="function")for(e=d.call(e),l=0;!(c=e.next()).done;)c=c.value,d=a+JM(c,l++),s+=zo(c,t,n,d,o);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ho(e,t,n){if(e==null)return e;var a=[],o=0;return zo(e,a,"","",function(c){return t.call(n,c,o++)}),a}function KI(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Ao={transition:null},XI={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:jL};function nC(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ho,forEach:function(e,t,n){ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ho(e,function(){t++}),t},toArray:function(e){return ho(e,function(t){return t})||[]},only:function(e){if(!CL(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Mr;X.Fragment=HI;X.Profiler=RI;X.PureComponent=LL;X.StrictMode=BI;X.Suspense=OI;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XI;X.act=nC;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Xj({},e.props),o=e.key,c=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,s=jL.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)Yj.call(t,d)&&!eC.hasOwnProperty(d)&&(a[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)a.children=n;else if(1<d){l=Array(d);for(var h=0;h<d;h++)l[h]=arguments[h+2];a.children=l}return{$$typeof:Yi,type:e.type,key:o,ref:c,props:a,_owner:s}};X.createContext=function(e){return e={$$typeof:FI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:VI,_context:e},e.Consumer=e};X.createElement=tC;X.createFactory=function(e){var t=tC.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:EI,render:e}};X.isValidElement=CL;X.lazy=function(e){return{$$typeof:UI,_payload:{_status:-1,_result:e},_init:KI}};X.memo=function(e,t){return{$$typeof:$I,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};X.unstable_act=nC;X.useCallback=function(e,t){return We.current.useCallback(e,t)};X.useContext=function(e){return We.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return We.current.useDeferredValue(e)};X.useEffect=function(e,t){return We.current.useEffect(e,t)};X.useId=function(){return We.current.useId()};X.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return We.current.useMemo(e,t)};X.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};X.useRef=function(e){return We.current.useRef(e)};X.useState=function(e){return We.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return We.current.useTransition()};X.version="18.3.1";Gj.exports=X;var S=Gj.exports;const Tt=Zj(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QI=S,JI=Symbol.for("react.element"),YI=Symbol.for("react.fragment"),eb=Object.prototype.hasOwnProperty,tb=QI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nb={key:!0,ref:!0,__self:!0,__source:!0};function aC(e,t,n){var a,o={},c=null,s=null;n!==void 0&&(c=""+n),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)eb.call(t,a)&&!nb.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)o[a]===void 0&&(o[a]=t[a]);return{$$typeof:JI,type:e,key:c,ref:s,props:o,_owner:tb.current}}zM.Fragment=YI;zM.jsx=aC;zM.jsxs=aC;Wj.exports=zM;var i=Wj.exports,Iw={},rC={exports:{}},ht={},iC={exports:{}},oC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(q,V){var $=q.length;q.push(V);e:for(;0<$;){var se=$-1>>>1,ge=q[se];if(0<o(ge,V))q[se]=V,q[$]=ge,$=se;else break e}}function n(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var V=q[0],$=q.pop();if($!==V){q[0]=$;e:for(var se=0,ge=q.length,Ht=ge>>>1;se<Ht;){var yt=2*(se+1)-1,O1=q[yt],Bt=yt+1,u1=q[Bt];if(0>o(O1,$))Bt<ge&&0>o(u1,O1)?(q[se]=u1,q[Bt]=$,se=Bt):(q[se]=O1,q[yt]=$,se=yt);else if(Bt<ge&&0>o(u1,$))q[se]=u1,q[Bt]=$,se=Bt;else break e}}return V}function o(q,V){var $=q.sortIndex-V.sortIndex;return $!==0?$:q.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],h=[],y=1,p=null,m=3,g=!1,f=!1,x=!1,L=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(q){for(var V=n(h);V!==null;){if(V.callback===null)a(h);else if(V.startTime<=q)a(h),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(h)}}function M(q){if(x=!1,v(q),!f)if(n(d)!==null)f=!0,Q(j);else{var V=n(h);V!==null&&ae(M,V.startTime-q)}}function j(q,V){f=!1,x&&(x=!1,k(A),A=-1),g=!0;var $=m;try{for(v(V),p=n(d);p!==null&&(!(p.expirationTime>V)||q&&!J());){var se=p.callback;if(typeof se=="function"){p.callback=null,m=p.priorityLevel;var ge=se(p.expirationTime<=V);V=e.unstable_now(),typeof ge=="function"?p.callback=ge:p===n(d)&&a(d),v(V)}else a(d);p=n(d)}if(p!==null)var Ht=!0;else{var yt=n(h);yt!==null&&ae(M,yt.startTime-V),Ht=!1}return Ht}finally{p=null,m=$,g=!1}}var _=!1,b=null,A=-1,Z=5,w=-1;function J(){return!(e.unstable_now()-w<Z)}function T(){if(b!==null){var q=e.unstable_now();w=q;var V=!0;try{V=b(!0,q)}finally{V?O():(_=!1,b=null)}}else _=!1}var O;if(typeof u=="function")O=function(){u(T)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,E=Te.port2;Te.port1.onmessage=T,O=function(){E.postMessage(null)}}else O=function(){L(T,0)};function Q(q){b=q,_||(_=!0,O())}function ae(q,V){A=L(function(){q(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){f||g||(f=!0,Q(j))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(q){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var $=m;m=V;try{return q()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,V){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var $=m;m=q;try{return V()}finally{m=$}},e.unstable_scheduleCallback=function(q,V,$){var se=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?se+$:se):$=se,q){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=$+ge,q={id:y++,callback:V,priorityLevel:q,startTime:$,expirationTime:ge,sortIndex:-1},$>se?(q.sortIndex=$,t(h,q),n(d)===null&&q===n(h)&&(x?(k(A),A=-1):x=!0,ae(M,$-se))):(q.sortIndex=ge,t(d,q),f||g||(f=!0,Q(j))),q},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(q){var V=m;return function(){var $=m;m=V;try{return q.apply(this,arguments)}finally{m=$}}}})(oC);iC.exports=oC;var ab=iC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=S,dt=ab;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cC=new Set,Di={};function Sa(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(Di[e]=t,e=0;e<t.length;e++)cC.add(t[e])}var o1=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bw=Object.prototype.hasOwnProperty,ib=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,IS={},bS={};function ob(e){return bw.call(bS,e)?!0:bw.call(IS,e)?!1:ib.test(e)?bS[e]=!0:(IS[e]=!0,!1)}function cb(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sb(e,t,n,a){if(t===null||typeof t>"u"||cb(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ge(e,t,n,a,o,c,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=s}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var _L=/[\-:]([a-z])/g;function IL(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_L,IL);Be[t]=new Ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_L,IL);Be[t]=new Ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_L,IL);Be[t]=new Ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function bL(e,t,n,a){var o=Be.hasOwnProperty(t)?Be[t]:null;(o!==null?o.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sb(t,n,o,a)&&(n=null),a||o===null?ob(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,a=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var d1=rb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),Ta=Symbol.for("react.portal"),Na=Symbol.for("react.fragment"),zL=Symbol.for("react.strict_mode"),zw=Symbol.for("react.profiler"),sC=Symbol.for("react.provider"),lC=Symbol.for("react.context"),AL=Symbol.for("react.forward_ref"),Aw=Symbol.for("react.suspense"),qw=Symbol.for("react.suspense_list"),qL=Symbol.for("react.memo"),k1=Symbol.for("react.lazy"),dC=Symbol.for("react.offscreen"),zS=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=zS&&e[zS]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,YM;function Hr(e){if(YM===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);YM=t&&t[1]||""}return`
`+YM+e}var ew=!1;function tw(e,t){if(!e||ew)return"";ew=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var a=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){a=h}e.call(t.prototype)}else{try{throw Error()}catch(h){a=h}e()}}catch(h){if(h&&a&&typeof h.stack=="string"){for(var o=h.stack.split(`
`),c=a.stack.split(`
`),s=o.length-1,l=c.length-1;1<=s&&0<=l&&o[s]!==c[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==c[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==c[l]){var d=`
`+o[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{ew=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hr(e):""}function lb(e){switch(e.tag){case 5:return Hr(e.type);case 16:return Hr("Lazy");case 13:return Hr("Suspense");case 19:return Hr("SuspenseList");case 0:case 2:case 15:return e=tw(e.type,!1),e;case 11:return e=tw(e.type.render,!1),e;case 1:return e=tw(e.type,!0),e;default:return""}}function Tw(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Na:return"Fragment";case Ta:return"Portal";case zw:return"Profiler";case zL:return"StrictMode";case Aw:return"Suspense";case qw:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lC:return(e.displayName||"Context")+".Consumer";case sC:return(e._context.displayName||"Context")+".Provider";case AL:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qL:return t=e.displayName||null,t!==null?t:Tw(e.type)||"Memo";case k1:t=e._payload,e=e._init;try{return Tw(e(t))}catch{}}return null}function db(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tw(t);case 8:return t===zL?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function B1(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hb(e){var t=hC(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){a=""+s,c.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yo(e){e._valueTracker||(e._valueTracker=hb(e))}function uC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=hC(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function rM(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nw(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function AS(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=B1(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yC(e,t){t=t.checked,t!=null&&bL(e,"checked",t,!1)}function Dw(e,t){yC(e,t);var n=B1(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pw(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pw(e,t.type,B1(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qS(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pw(e,t,n){(t!=="number"||rM(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Br=Array.isArray;function Ua(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+B1(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hw(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function TS(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Br(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:B1(n)}}function pC(e,t){var n=B1(t.value),a=B1(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function NS(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bw(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,mC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ub=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){ub.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function fC(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function vC(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,o=fC(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,o):e[n]=o}}var yb=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rw(e,t){if(t){if(yb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Vw(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fw=null;function TL(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ew=null,Za=null,Wa=null;function DS(e){if(e=no(e)){if(typeof Ew!="function")throw Error(z(280));var t=e.stateNode;t&&(t=DM(t),Ew(e.stateNode,e.type,t))}}function gC(e){Za?Wa?Wa.push(e):Wa=[e]:Za=e}function xC(){if(Za){var e=Za,t=Wa;if(Wa=Za=null,DS(e),t)for(e=0;e<t.length;e++)DS(t[e])}}function MC(e,t){return e(t)}function wC(){}var nw=!1;function LC(e,t,n){if(nw)return e(t,n);nw=!0;try{return MC(e,t,n)}finally{nw=!1,(Za!==null||Wa!==null)&&(wC(),xC())}}function Hi(e,t){var n=e.stateNode;if(n===null)return null;var a=DM(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Ow=!1;if(o1)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){Ow=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Ow=!1}function pb(e,t,n,a,o,c,s,l,d){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(y){this.onError(y)}}var Er=!1,iM=null,oM=!1,$w=null,kb={onError:function(e){Er=!0,iM=e}};function mb(e,t,n,a,o,c,s,l,d){Er=!1,iM=null,pb.apply(kb,arguments)}function fb(e,t,n,a,o,c,s,l,d){if(mb.apply(this,arguments),Er){if(Er){var h=iM;Er=!1,iM=null}else throw Error(z(198));oM||(oM=!0,$w=h)}}function ja(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function SC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function PS(e){if(ja(e)!==e)throw Error(z(188))}function vb(e){var t=e.alternate;if(!t){if(t=ja(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return PS(o),e;if(c===a)return PS(o),t;c=c.sibling}throw Error(z(188))}if(n.return!==a.return)n=o,a=c;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,a=c;break}if(l===a){s=!0,a=o,n=c;break}l=l.sibling}if(!s){for(l=c.child;l;){if(l===n){s=!0,n=c,a=o;break}if(l===a){s=!0,a=c,n=o;break}l=l.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==a)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function jC(e){return e=vb(e),e!==null?CC(e):null}function CC(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=CC(e);if(t!==null)return t;e=e.sibling}return null}var _C=dt.unstable_scheduleCallback,HS=dt.unstable_cancelCallback,gb=dt.unstable_shouldYield,xb=dt.unstable_requestPaint,Me=dt.unstable_now,Mb=dt.unstable_getCurrentPriorityLevel,NL=dt.unstable_ImmediatePriority,IC=dt.unstable_UserBlockingPriority,cM=dt.unstable_NormalPriority,wb=dt.unstable_LowPriority,bC=dt.unstable_IdlePriority,AM=null,Ut=null;function Lb(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(AM,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Cb,Sb=Math.log,jb=Math.LN2;function Cb(e){return e>>>=0,e===0?32:31-(Sb(e)/jb|0)|0}var ko=64,mo=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sM(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,o=e.suspendedLanes,c=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?a=Rr(l):(c&=s,c!==0&&(a=Rr(c)))}else s=n&~o,s!==0?a=Rr(s):c!==0&&(a=Rr(c));if(a===0)return 0;if(t!==0&&t!==a&&!(t&o)&&(o=a&-a,c=t&-t,o>=c||o===16&&(c&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Nt(t),o=1<<n,a|=e[n],t&=~o;return a}function _b(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ib(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes;0<c;){var s=31-Nt(c),l=1<<s,d=o[s];d===-1?(!(l&n)||l&a)&&(o[s]=_b(l,t)):d<=t&&(e.expiredLanes|=l),c&=~l}}function Uw(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zC(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function aw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function bb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Nt(n),c=1<<o;t[o]=0,a[o]=-1,e[o]=-1,n&=~c}}function DL(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Nt(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}var ne=0;function AC(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qC,PL,TC,NC,DC,Zw=!1,fo=[],w1=null,L1=null,S1=null,Bi=new Map,Ri=new Map,f1=[],zb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function BS(e,t){switch(e){case"focusin":case"focusout":w1=null;break;case"dragenter":case"dragleave":L1=null;break;case"mouseover":case"mouseout":S1=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function Ir(e,t,n,a,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:c,targetContainers:[o]},t!==null&&(t=no(t),t!==null&&PL(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ab(e,t,n,a,o){switch(t){case"focusin":return w1=Ir(w1,e,t,n,a,o),!0;case"dragenter":return L1=Ir(L1,e,t,n,a,o),!0;case"mouseover":return S1=Ir(S1,e,t,n,a,o),!0;case"pointerover":var c=o.pointerId;return Bi.set(c,Ir(Bi.get(c)||null,e,t,n,a,o)),!0;case"gotpointercapture":return c=o.pointerId,Ri.set(c,Ir(Ri.get(c)||null,e,t,n,a,o)),!0}return!1}function PC(e){var t=sa(e.target);if(t!==null){var n=ja(t);if(n!==null){if(t=n.tag,t===13){if(t=SC(n),t!==null){e.blockedOn=t,DC(e.priority,function(){TC(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ww(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Fw=a,n.target.dispatchEvent(a),Fw=null}else return t=no(n),t!==null&&PL(t),e.blockedOn=n,!1;t.shift()}return!0}function RS(e,t,n){qo(e)&&n.delete(t)}function qb(){Zw=!1,w1!==null&&qo(w1)&&(w1=null),L1!==null&&qo(L1)&&(L1=null),S1!==null&&qo(S1)&&(S1=null),Bi.forEach(RS),Ri.forEach(RS)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Zw||(Zw=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,qb)))}function Vi(e){function t(o){return br(o,e)}if(0<fo.length){br(fo[0],e);for(var n=1;n<fo.length;n++){var a=fo[n];a.blockedOn===e&&(a.blockedOn=null)}}for(w1!==null&&br(w1,e),L1!==null&&br(L1,e),S1!==null&&br(S1,e),Bi.forEach(t),Ri.forEach(t),n=0;n<f1.length;n++)a=f1[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<f1.length&&(n=f1[0],n.blockedOn===null);)PC(n),n.blockedOn===null&&f1.shift()}var Ga=d1.ReactCurrentBatchConfig,lM=!0;function Tb(e,t,n,a){var o=ne,c=Ga.transition;Ga.transition=null;try{ne=1,HL(e,t,n,a)}finally{ne=o,Ga.transition=c}}function Nb(e,t,n,a){var o=ne,c=Ga.transition;Ga.transition=null;try{ne=4,HL(e,t,n,a)}finally{ne=o,Ga.transition=c}}function HL(e,t,n,a){if(lM){var o=Ww(e,t,n,a);if(o===null)yw(e,t,a,dM,n),BS(e,a);else if(Ab(o,e,t,n,a))a.stopPropagation();else if(BS(e,a),t&4&&-1<zb.indexOf(e)){for(;o!==null;){var c=no(o);if(c!==null&&qC(c),c=Ww(e,t,n,a),c===null&&yw(e,t,a,dM,n),c===o)break;o=c}o!==null&&a.stopPropagation()}else yw(e,t,a,null,n)}}var dM=null;function Ww(e,t,n,a){if(dM=null,e=TL(a),e=sa(e),e!==null)if(t=ja(e),t===null)e=null;else if(n=t.tag,n===13){if(e=SC(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dM=e,null}function HC(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mb()){case NL:return 1;case IC:return 4;case cM:case wb:return 16;case bC:return 536870912;default:return 16}default:return 16}}var g1=null,BL=null,To=null;function BC(){if(To)return To;var e,t=BL,n=t.length,a,o="value"in g1?g1.value:g1.textContent,c=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===o[c-a];a++);return To=o.slice(e,1<a?1-a:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function VS(){return!1}function ut(e){function t(n,a,o,c,s){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=c,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(c):c[l]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?vo:VS,this.isPropagationStopped=VS,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},RL=ut(wr),to=me({},wr,{view:0,detail:0}),Db=ut(to),rw,iw,zr,qM=me({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:VL,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(rw=e.screenX-zr.screenX,iw=e.screenY-zr.screenY):iw=rw=0,zr=e),rw)},movementY:function(e){return"movementY"in e?e.movementY:iw}}),FS=ut(qM),Pb=me({},qM,{dataTransfer:0}),Hb=ut(Pb),Bb=me({},to,{relatedTarget:0}),ow=ut(Bb),Rb=me({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vb=ut(Rb),Fb=me({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Eb=ut(Fb),Ob=me({},wr,{data:0}),ES=ut(Ob),$b={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zb[e])?!!t[e]:!1}function VL(){return Wb}var Gb=me({},to,{key:function(e){if(e.key){var t=$b[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ub[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:VL,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kb=ut(Gb),Xb=me({},qM,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),OS=ut(Xb),Qb=me({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:VL}),Jb=ut(Qb),Yb=me({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ez=ut(Yb),tz=me({},qM,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nz=ut(tz),az=[9,13,27,32],FL=o1&&"CompositionEvent"in window,Or=null;o1&&"documentMode"in document&&(Or=document.documentMode);var rz=o1&&"TextEvent"in window&&!Or,RC=o1&&(!FL||Or&&8<Or&&11>=Or),$S=" ",US=!1;function VC(e,t){switch(e){case"keyup":return az.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function FC(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Da=!1;function iz(e,t){switch(e){case"compositionend":return FC(t);case"keypress":return t.which!==32?null:(US=!0,$S);case"textInput":return e=t.data,e===$S&&US?null:e;default:return null}}function oz(e,t){if(Da)return e==="compositionend"||!FL&&VC(e,t)?(e=BC(),To=BL=g1=null,Da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return RC&&t.locale!=="ko"?null:t.data;default:return null}}var cz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ZS(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cz[e.type]:t==="textarea"}function EC(e,t,n,a){gC(a),t=hM(t,"onChange"),0<t.length&&(n=new RL("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var $r=null,Fi=null;function sz(e){YC(e,0)}function TM(e){var t=Ba(e);if(uC(t))return e}function lz(e,t){if(e==="change")return t}var OC=!1;if(o1){var cw;if(o1){var sw="oninput"in document;if(!sw){var WS=document.createElement("div");WS.setAttribute("oninput","return;"),sw=typeof WS.oninput=="function"}cw=sw}else cw=!1;OC=cw&&(!document.documentMode||9<document.documentMode)}function GS(){$r&&($r.detachEvent("onpropertychange",$C),Fi=$r=null)}function $C(e){if(e.propertyName==="value"&&TM(Fi)){var t=[];EC(t,Fi,e,TL(e)),LC(sz,t)}}function dz(e,t,n){e==="focusin"?(GS(),$r=t,Fi=n,$r.attachEvent("onpropertychange",$C)):e==="focusout"&&GS()}function hz(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return TM(Fi)}function uz(e,t){if(e==="click")return TM(t)}function yz(e,t){if(e==="input"||e==="change")return TM(t)}function pz(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:pz;function Ei(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!bw.call(t,o)||!Pt(e[o],t[o]))return!1}return!0}function KS(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function XS(e,t){var n=KS(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=KS(n)}}function UC(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?UC(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ZC(){for(var e=window,t=rM();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rM(e.document)}return t}function EL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kz(e){var t=ZC(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&UC(n.ownerDocument.documentElement,n)){if(a!==null&&EL(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,c=Math.min(a.start,o);a=a.end===void 0?c:Math.min(a.end,o),!e.extend&&c>a&&(o=a,a=c,c=o),o=XS(n,c);var s=XS(n,a);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),c>a?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mz=o1&&"documentMode"in document&&11>=document.documentMode,Pa=null,Gw=null,Ur=null,Kw=!1;function QS(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kw||Pa==null||Pa!==rM(a)||(a=Pa,"selectionStart"in a&&EL(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ur&&Ei(Ur,a)||(Ur=a,a=hM(Gw,"onSelect"),0<a.length&&(t=new RL("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Pa)))}function go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ha={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},lw={},WC={};o1&&(WC=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function NM(e){if(lw[e])return lw[e];if(!Ha[e])return e;var t=Ha[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in WC)return lw[e]=t[n];return e}var GC=NM("animationend"),KC=NM("animationiteration"),XC=NM("animationstart"),QC=NM("transitionend"),JC=new Map,JS="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function V1(e,t){JC.set(e,t),Sa(t,[e])}for(var dw=0;dw<JS.length;dw++){var hw=JS[dw],fz=hw.toLowerCase(),vz=hw[0].toUpperCase()+hw.slice(1);V1(fz,"on"+vz)}V1(GC,"onAnimationEnd");V1(KC,"onAnimationIteration");V1(XC,"onAnimationStart");V1("dblclick","onDoubleClick");V1("focusin","onFocus");V1("focusout","onBlur");V1(QC,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));function YS(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,fb(a,t,void 0,e),e.currentTarget=null}function YC(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var s=a.length-1;0<=s;s--){var l=a[s],d=l.instance,h=l.currentTarget;if(l=l.listener,d!==c&&o.isPropagationStopped())break e;YS(o,l,h),c=d}else for(s=0;s<a.length;s++){if(l=a[s],d=l.instance,h=l.currentTarget,l=l.listener,d!==c&&o.isPropagationStopped())break e;YS(o,l,h),c=d}}}if(oM)throw e=$w,oM=!1,$w=null,e}function de(e,t){var n=t[eL];n===void 0&&(n=t[eL]=new Set);var a=e+"__bubble";n.has(a)||(e_(t,e,2,!1),n.add(a))}function uw(e,t,n){var a=0;t&&(a|=4),e_(n,e,a,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[xo]){e[xo]=!0,cC.forEach(function(n){n!=="selectionchange"&&(gz.has(n)||uw(n,!1,e),uw(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,uw("selectionchange",!1,t))}}function e_(e,t,n,a){switch(HC(t)){case 1:var o=Tb;break;case 4:o=Nb;break;default:o=HL}n=o.bind(null,t,n,e),o=void 0,!Ow||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yw(e,t,n,a,o){var c=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=a.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;s=s.return}for(;l!==null;){if(s=sa(l),s===null)return;if(d=s.tag,d===5||d===6){a=c=s;continue e}l=l.parentNode}}a=a.return}LC(function(){var h=c,y=TL(n),p=[];e:{var m=JC.get(e);if(m!==void 0){var g=RL,f=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":g=Kb;break;case"focusin":f="focus",g=ow;break;case"focusout":f="blur",g=ow;break;case"beforeblur":case"afterblur":g=ow;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=FS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Hb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Jb;break;case GC:case KC:case XC:g=Vb;break;case QC:g=ez;break;case"scroll":g=Db;break;case"wheel":g=nz;break;case"copy":case"cut":case"paste":g=Eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=OS}var x=(t&4)!==0,L=!x&&e==="scroll",k=x?m!==null?m+"Capture":null:m;x=[];for(var u=h,v;u!==null;){v=u;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,k!==null&&(M=Hi(u,k),M!=null&&x.push($i(u,M,v)))),L)break;u=u.return}0<x.length&&(m=new g(m,f,null,n,y),p.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Fw&&(f=n.relatedTarget||n.fromElement)&&(sa(f)||f[c1]))break e;if((g||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,g?(f=n.relatedTarget||n.toElement,g=h,f=f?sa(f):null,f!==null&&(L=ja(f),f!==L||f.tag!==5&&f.tag!==6)&&(f=null)):(g=null,f=h),g!==f)){if(x=FS,M="onMouseLeave",k="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(x=OS,M="onPointerLeave",k="onPointerEnter",u="pointer"),L=g==null?m:Ba(g),v=f==null?m:Ba(f),m=new x(M,u+"leave",g,n,y),m.target=L,m.relatedTarget=v,M=null,sa(y)===h&&(x=new x(k,u+"enter",f,n,y),x.target=v,x.relatedTarget=L,M=x),L=M,g&&f)t:{for(x=g,k=f,u=0,v=x;v;v=Aa(v))u++;for(v=0,M=k;M;M=Aa(M))v++;for(;0<u-v;)x=Aa(x),u--;for(;0<v-u;)k=Aa(k),v--;for(;u--;){if(x===k||k!==null&&x===k.alternate)break t;x=Aa(x),k=Aa(k)}x=null}else x=null;g!==null&&ej(p,m,g,x,!1),f!==null&&L!==null&&ej(p,L,f,x,!0)}}e:{if(m=h?Ba(h):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var j=lz;else if(ZS(m))if(OC)j=yz;else{j=hz;var _=dz}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=uz);if(j&&(j=j(e,h))){EC(p,j,n,y);break e}_&&_(e,m,h),e==="focusout"&&(_=m._wrapperState)&&_.controlled&&m.type==="number"&&Pw(m,"number",m.value)}switch(_=h?Ba(h):window,e){case"focusin":(ZS(_)||_.contentEditable==="true")&&(Pa=_,Gw=h,Ur=null);break;case"focusout":Ur=Gw=Pa=null;break;case"mousedown":Kw=!0;break;case"contextmenu":case"mouseup":case"dragend":Kw=!1,QS(p,n,y);break;case"selectionchange":if(mz)break;case"keydown":case"keyup":QS(p,n,y)}var b;if(FL)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Da?VC(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(RC&&n.locale!=="ko"&&(Da||A!=="onCompositionStart"?A==="onCompositionEnd"&&Da&&(b=BC()):(g1=y,BL="value"in g1?g1.value:g1.textContent,Da=!0)),_=hM(h,A),0<_.length&&(A=new ES(A,e,null,n,y),p.push({event:A,listeners:_}),b?A.data=b:(b=FC(n),b!==null&&(A.data=b)))),(b=rz?iz(e,n):oz(e,n))&&(h=hM(h,"onBeforeInput"),0<h.length&&(y=new ES("onBeforeInput","beforeinput",null,n,y),p.push({event:y,listeners:h}),y.data=b))}YC(p,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hM(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,c=o.stateNode;o.tag===5&&c!==null&&(o=c,c=Hi(e,n),c!=null&&a.unshift($i(e,c,o)),c=Hi(e,t),c!=null&&a.push($i(e,c,o))),e=e.return}return a}function Aa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ej(e,t,n,a,o){for(var c=t._reactName,s=[];n!==null&&n!==a;){var l=n,d=l.alternate,h=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&h!==null&&(l=h,o?(d=Hi(n,c),d!=null&&s.unshift($i(n,d,l))):o||(d=Hi(n,c),d!=null&&s.push($i(n,d,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var xz=/\r\n?/g,Mz=/\u0000|\uFFFD/g;function tj(e){return(typeof e=="string"?e:""+e).replace(xz,`
`).replace(Mz,"")}function Mo(e,t,n){if(t=tj(t),tj(e)!==t&&n)throw Error(z(425))}function uM(){}var Xw=null,Qw=null;function Jw(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yw=typeof setTimeout=="function"?setTimeout:void 0,wz=typeof clearTimeout=="function"?clearTimeout:void 0,nj=typeof Promise=="function"?Promise:void 0,Lz=typeof queueMicrotask=="function"?queueMicrotask:typeof nj<"u"?function(e){return nj.resolve(null).then(e).catch(Sz)}:Yw;function Sz(e){setTimeout(function(){throw e})}function pw(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(a===0){e.removeChild(o),Vi(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=o}while(n);Vi(t)}function j1(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function aj(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),$t="__reactFiber$"+Lr,Ui="__reactProps$"+Lr,c1="__reactContainer$"+Lr,eL="__reactEvents$"+Lr,jz="__reactListeners$"+Lr,Cz="__reactHandles$"+Lr;function sa(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[c1]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=aj(e);e!==null;){if(n=e[$t])return n;e=aj(e)}return t}e=n,n=e.parentNode}return null}function no(e){return e=e[$t]||e[c1],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ba(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function DM(e){return e[Ui]||null}var tL=[],Ra=-1;function F1(e){return{current:e}}function ue(e){0>Ra||(e.current=tL[Ra],tL[Ra]=null,Ra--)}function ce(e,t){Ra++,tL[Ra]=e.current,e.current=t}var R1={},Oe=F1(R1),Je=F1(!1),ga=R1;function yr(e,t){var n=e.type.contextTypes;if(!n)return R1;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var o={},c;for(c in n)o[c]=t[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function yM(){ue(Je),ue(Oe)}function rj(e,t,n){if(Oe.current!==R1)throw Error(z(168));ce(Oe,t),ce(Je,n)}function t_(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var o in a)if(!(o in t))throw Error(z(108,db(e)||"Unknown",o));return me({},n,a)}function pM(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||R1,ga=Oe.current,ce(Oe,e),ce(Je,Je.current),!0}function ij(e,t,n){var a=e.stateNode;if(!a)throw Error(z(169));n?(e=t_(e,t,ga),a.__reactInternalMemoizedMergedChildContext=e,ue(Je),ue(Oe),ce(Oe,e)):ue(Je),ce(Je,n)}var Yt=null,PM=!1,kw=!1;function n_(e){Yt===null?Yt=[e]:Yt.push(e)}function _z(e){PM=!0,n_(e)}function E1(){if(!kw&&Yt!==null){kw=!0;var e=0,t=ne;try{var n=Yt;for(ne=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Yt=null,PM=!1}catch(o){throw Yt!==null&&(Yt=Yt.slice(e+1)),_C(NL,E1),o}finally{ne=t,kw=!1}}return null}var Va=[],Fa=0,kM=null,mM=0,gt=[],xt=0,xa=null,e1=1,t1="";function W1(e,t){Va[Fa++]=mM,Va[Fa++]=kM,kM=e,mM=t}function a_(e,t,n){gt[xt++]=e1,gt[xt++]=t1,gt[xt++]=xa,xa=e;var a=e1;e=t1;var o=32-Nt(a)-1;a&=~(1<<o),n+=1;var c=32-Nt(t)+o;if(30<c){var s=o-o%5;c=(a&(1<<s)-1).toString(32),a>>=s,o-=s,e1=1<<32-Nt(t)+o|n<<o|a,t1=c+e}else e1=1<<c|n<<o|a,t1=e}function OL(e){e.return!==null&&(W1(e,1),a_(e,1,0))}function $L(e){for(;e===kM;)kM=Va[--Fa],Va[Fa]=null,mM=Va[--Fa],Va[Fa]=null;for(;e===xa;)xa=gt[--xt],gt[xt]=null,t1=gt[--xt],gt[xt]=null,e1=gt[--xt],gt[xt]=null}var ct=null,ot=null,ye=!1,qt=null;function r_(e,t){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oj(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ot=j1(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xa!==null?{id:e1,overflow:t1}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ot=null,!0):!1;default:return!1}}function nL(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aL(e){if(ye){var t=ot;if(t){var n=t;if(!oj(e,t)){if(nL(e))throw Error(z(418));t=j1(n.nextSibling);var a=ct;t&&oj(e,t)?r_(a,n):(e.flags=e.flags&-4097|2,ye=!1,ct=e)}}else{if(nL(e))throw Error(z(418));e.flags=e.flags&-4097|2,ye=!1,ct=e}}}function cj(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function wo(e){if(e!==ct)return!1;if(!ye)return cj(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jw(e.type,e.memoizedProps)),t&&(t=ot)){if(nL(e))throw i_(),Error(z(418));for(;t;)r_(e,t),t=j1(t.nextSibling)}if(cj(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=j1(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=ct?j1(e.stateNode.nextSibling):null;return!0}function i_(){for(var e=ot;e;)e=j1(e.nextSibling)}function pr(){ot=ct=null,ye=!1}function UL(e){qt===null?qt=[e]:qt.push(e)}var Iz=d1.ReactCurrentBatchConfig;function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var a=n.stateNode}if(!a)throw Error(z(147,e));var o=a,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(s){var l=o.refs;s===null?delete l[c]:l[c]=s},t._stringRef=c,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Lo(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sj(e){var t=e._init;return t(e._payload)}function o_(e){function t(k,u){if(e){var v=k.deletions;v===null?(k.deletions=[u],k.flags|=16):v.push(u)}}function n(k,u){if(!e)return null;for(;u!==null;)t(k,u),u=u.sibling;return null}function a(k,u){for(k=new Map;u!==null;)u.key!==null?k.set(u.key,u):k.set(u.index,u),u=u.sibling;return k}function o(k,u){return k=b1(k,u),k.index=0,k.sibling=null,k}function c(k,u,v){return k.index=v,e?(v=k.alternate,v!==null?(v=v.index,v<u?(k.flags|=2,u):v):(k.flags|=2,u)):(k.flags|=1048576,u)}function s(k){return e&&k.alternate===null&&(k.flags|=2),k}function l(k,u,v,M){return u===null||u.tag!==6?(u=ww(v,k.mode,M),u.return=k,u):(u=o(u,v),u.return=k,u)}function d(k,u,v,M){var j=v.type;return j===Na?y(k,u,v.props.children,M,v.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===k1&&sj(j)===u.type)?(M=o(u,v.props),M.ref=Ar(k,u,v),M.return=k,M):(M=Fo(v.type,v.key,v.props,null,k.mode,M),M.ref=Ar(k,u,v),M.return=k,M)}function h(k,u,v,M){return u===null||u.tag!==4||u.stateNode.containerInfo!==v.containerInfo||u.stateNode.implementation!==v.implementation?(u=Lw(v,k.mode,M),u.return=k,u):(u=o(u,v.children||[]),u.return=k,u)}function y(k,u,v,M,j){return u===null||u.tag!==7?(u=ua(v,k.mode,M,j),u.return=k,u):(u=o(u,v),u.return=k,u)}function p(k,u,v){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ww(""+u,k.mode,v),u.return=k,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case uo:return v=Fo(u.type,u.key,u.props,null,k.mode,v),v.ref=Ar(k,null,u),v.return=k,v;case Ta:return u=Lw(u,k.mode,v),u.return=k,u;case k1:var M=u._init;return p(k,M(u._payload),v)}if(Br(u)||Cr(u))return u=ua(u,k.mode,v,null),u.return=k,u;Lo(k,u)}return null}function m(k,u,v,M){var j=u!==null?u.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:l(k,u,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case uo:return v.key===j?d(k,u,v,M):null;case Ta:return v.key===j?h(k,u,v,M):null;case k1:return j=v._init,m(k,u,j(v._payload),M)}if(Br(v)||Cr(v))return j!==null?null:y(k,u,v,M,null);Lo(k,v)}return null}function g(k,u,v,M,j){if(typeof M=="string"&&M!==""||typeof M=="number")return k=k.get(v)||null,l(u,k,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case uo:return k=k.get(M.key===null?v:M.key)||null,d(u,k,M,j);case Ta:return k=k.get(M.key===null?v:M.key)||null,h(u,k,M,j);case k1:var _=M._init;return g(k,u,v,_(M._payload),j)}if(Br(M)||Cr(M))return k=k.get(v)||null,y(u,k,M,j,null);Lo(u,M)}return null}function f(k,u,v,M){for(var j=null,_=null,b=u,A=u=0,Z=null;b!==null&&A<v.length;A++){b.index>A?(Z=b,b=null):Z=b.sibling;var w=m(k,b,v[A],M);if(w===null){b===null&&(b=Z);break}e&&b&&w.alternate===null&&t(k,b),u=c(w,u,A),_===null?j=w:_.sibling=w,_=w,b=Z}if(A===v.length)return n(k,b),ye&&W1(k,A),j;if(b===null){for(;A<v.length;A++)b=p(k,v[A],M),b!==null&&(u=c(b,u,A),_===null?j=b:_.sibling=b,_=b);return ye&&W1(k,A),j}for(b=a(k,b);A<v.length;A++)Z=g(b,k,A,v[A],M),Z!==null&&(e&&Z.alternate!==null&&b.delete(Z.key===null?A:Z.key),u=c(Z,u,A),_===null?j=Z:_.sibling=Z,_=Z);return e&&b.forEach(function(J){return t(k,J)}),ye&&W1(k,A),j}function x(k,u,v,M){var j=Cr(v);if(typeof j!="function")throw Error(z(150));if(v=j.call(v),v==null)throw Error(z(151));for(var _=j=null,b=u,A=u=0,Z=null,w=v.next();b!==null&&!w.done;A++,w=v.next()){b.index>A?(Z=b,b=null):Z=b.sibling;var J=m(k,b,w.value,M);if(J===null){b===null&&(b=Z);break}e&&b&&J.alternate===null&&t(k,b),u=c(J,u,A),_===null?j=J:_.sibling=J,_=J,b=Z}if(w.done)return n(k,b),ye&&W1(k,A),j;if(b===null){for(;!w.done;A++,w=v.next())w=p(k,w.value,M),w!==null&&(u=c(w,u,A),_===null?j=w:_.sibling=w,_=w);return ye&&W1(k,A),j}for(b=a(k,b);!w.done;A++,w=v.next())w=g(b,k,A,w.value,M),w!==null&&(e&&w.alternate!==null&&b.delete(w.key===null?A:w.key),u=c(w,u,A),_===null?j=w:_.sibling=w,_=w);return e&&b.forEach(function(T){return t(k,T)}),ye&&W1(k,A),j}function L(k,u,v,M){if(typeof v=="object"&&v!==null&&v.type===Na&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case uo:e:{for(var j=v.key,_=u;_!==null;){if(_.key===j){if(j=v.type,j===Na){if(_.tag===7){n(k,_.sibling),u=o(_,v.props.children),u.return=k,k=u;break e}}else if(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===k1&&sj(j)===_.type){n(k,_.sibling),u=o(_,v.props),u.ref=Ar(k,_,v),u.return=k,k=u;break e}n(k,_);break}else t(k,_);_=_.sibling}v.type===Na?(u=ua(v.props.children,k.mode,M,v.key),u.return=k,k=u):(M=Fo(v.type,v.key,v.props,null,k.mode,M),M.ref=Ar(k,u,v),M.return=k,k=M)}return s(k);case Ta:e:{for(_=v.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===v.containerInfo&&u.stateNode.implementation===v.implementation){n(k,u.sibling),u=o(u,v.children||[]),u.return=k,k=u;break e}else{n(k,u);break}else t(k,u);u=u.sibling}u=Lw(v,k.mode,M),u.return=k,k=u}return s(k);case k1:return _=v._init,L(k,u,_(v._payload),M)}if(Br(v))return f(k,u,v,M);if(Cr(v))return x(k,u,v,M);Lo(k,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,u!==null&&u.tag===6?(n(k,u.sibling),u=o(u,v),u.return=k,k=u):(n(k,u),u=ww(v,k.mode,M),u.return=k,k=u),s(k)):n(k,u)}return L}var kr=o_(!0),c_=o_(!1),fM=F1(null),vM=null,Ea=null,ZL=null;function WL(){ZL=Ea=vM=null}function GL(e){var t=fM.current;ue(fM),e._currentValue=t}function rL(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ka(e,t){vM=e,ZL=Ea=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(ZL!==e)if(e={context:e,memoizedValue:t,next:null},Ea===null){if(vM===null)throw Error(z(308));Ea=e,vM.dependencies={lanes:0,firstContext:e}}else Ea=Ea.next=e;return t}var la=null;function KL(e){la===null?la=[e]:la.push(e)}function s_(e,t,n,a){var o=t.interleaved;return o===null?(n.next=n,KL(t)):(n.next=o.next,o.next=n),t.interleaved=n,s1(e,a)}function s1(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var m1=!1;function XL(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function a1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function C1(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Y&2){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,s1(e,n)}return o=a.interleaved,o===null?(t.next=t,KL(a)):(t.next=o.next,o.next=t),a.interleaved=t,s1(e,n)}function Do(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,DL(e,n)}}function lj(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?o=c=s:c=c.next=s,n=n.next}while(n!==null);c===null?o=c=t:c=c.next=t}else o=c=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gM(e,t,n,a){var o=e.updateQueue;m1=!1;var c=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var d=l,h=d.next;d.next=null,s===null?c=h:s.next=h,s=d;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==s&&(l===null?y.firstBaseUpdate=h:l.next=h,y.lastBaseUpdate=d))}if(c!==null){var p=o.baseState;s=0,y=h=d=null,l=c;do{var m=l.lane,g=l.eventTime;if((a&m)===m){y!==null&&(y=y.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var f=e,x=l;switch(m=t,g=n,x.tag){case 1:if(f=x.payload,typeof f=="function"){p=f.call(g,p,m);break e}p=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=x.payload,m=typeof f=="function"?f.call(g,p,m):f,m==null)break e;p=me({},p,m);break e;case 2:m1=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(h=y=g,d=p):y=y.next=g,s|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(y===null&&(d=p),o.baseState=d,o.firstBaseUpdate=h,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else c===null&&(o.shared.lanes=0);wa|=s,e.lanes=s,e.memoizedState=p}}function dj(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],o=a.callback;if(o!==null){if(a.callback=null,a=n,typeof o!="function")throw Error(z(191,o));o.call(a)}}}var ao={},Zt=F1(ao),Zi=F1(ao),Wi=F1(ao);function da(e){if(e===ao)throw Error(z(174));return e}function QL(e,t){switch(ce(Wi,t),ce(Zi,e),ce(Zt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bw(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bw(t,e)}ue(Zt),ce(Zt,t)}function mr(){ue(Zt),ue(Zi),ue(Wi)}function d_(e){da(Wi.current);var t=da(Zt.current),n=Bw(t,e.type);t!==n&&(ce(Zi,e),ce(Zt,n))}function JL(e){Zi.current===e&&(ue(Zt),ue(Zi))}var pe=F1(0);function xM(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mw=[];function YL(){for(var e=0;e<mw.length;e++)mw[e]._workInProgressVersionPrimary=null;mw.length=0}var Po=d1.ReactCurrentDispatcher,fw=d1.ReactCurrentBatchConfig,Ma=0,ke=null,Ie=null,ze=null,MM=!1,Zr=!1,Gi=0,bz=0;function Re(){throw Error(z(321))}function eS(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function tS(e,t,n,a,o,c){if(Ma=c,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?Tz:Nz,e=n(a,o),Zr){c=0;do{if(Zr=!1,Gi=0,25<=c)throw Error(z(301));c+=1,ze=Ie=null,t.updateQueue=null,Po.current=Dz,e=n(a,o)}while(Zr)}if(Po.current=wM,t=Ie!==null&&Ie.next!==null,Ma=0,ze=Ie=ke=null,MM=!1,t)throw Error(z(300));return e}function nS(){var e=Gi!==0;return Gi=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ke.memoizedState=ze=e:ze=ze.next=e,ze}function _t(){if(Ie===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=ze===null?ke.memoizedState:ze.next;if(t!==null)ze=t,Ie=e;else{if(e===null)throw Error(z(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ze===null?ke.memoizedState=ze=e:ze=ze.next=e}return ze}function Ki(e,t){return typeof t=="function"?t(e):t}function vw(e){var t=_t(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=Ie,o=a.baseQueue,c=n.pending;if(c!==null){if(o!==null){var s=o.next;o.next=c.next,c.next=s}a.baseQueue=o=c,n.pending=null}if(o!==null){c=o.next,a=a.baseState;var l=s=null,d=null,h=c;do{var y=h.lane;if((Ma&y)===y)d!==null&&(d=d.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),a=h.hasEagerState?h.eagerState:e(a,h.action);else{var p={lane:y,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};d===null?(l=d=p,s=a):d=d.next=p,ke.lanes|=y,wa|=y}h=h.next}while(h!==null&&h!==c);d===null?s=a:d.next=l,Pt(a,t.memoizedState)||(Qe=!0),t.memoizedState=a,t.baseState=s,t.baseQueue=d,n.lastRenderedState=a}if(e=n.interleaved,e!==null){o=e;do c=o.lane,ke.lanes|=c,wa|=c,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gw(e){var t=_t(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,c=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do c=e(c,s.action),s=s.next;while(s!==o);Pt(c,t.memoizedState)||(Qe=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,a]}function h_(){}function u_(e,t){var n=ke,a=_t(),o=t(),c=!Pt(a.memoizedState,o);if(c&&(a.memoizedState=o,Qe=!0),a=a.queue,aS(k_.bind(null,n,a,e),[e]),a.getSnapshot!==t||c||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Xi(9,p_.bind(null,n,a,o,t),void 0,null),qe===null)throw Error(z(349));Ma&30||y_(n,t,o)}return o}function y_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function p_(e,t,n,a){t.value=n,t.getSnapshot=a,m_(t)&&f_(e)}function k_(e,t,n){return n(function(){m_(t)&&f_(e)})}function m_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function f_(e){var t=s1(e,1);t!==null&&Dt(t,e,1,-1)}function hj(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},t.queue=e,e=e.dispatch=qz.bind(null,ke,e),[t.memoizedState,e]}function Xi(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function v_(){return _t().memoizedState}function Ho(e,t,n,a){var o=Et();ke.flags|=e,o.memoizedState=Xi(1|t,n,void 0,a===void 0?null:a)}function HM(e,t,n,a){var o=_t();a=a===void 0?null:a;var c=void 0;if(Ie!==null){var s=Ie.memoizedState;if(c=s.destroy,a!==null&&eS(a,s.deps)){o.memoizedState=Xi(t,n,c,a);return}}ke.flags|=e,o.memoizedState=Xi(1|t,n,c,a)}function uj(e,t){return Ho(8390656,8,e,t)}function aS(e,t){return HM(2048,8,e,t)}function g_(e,t){return HM(4,2,e,t)}function x_(e,t){return HM(4,4,e,t)}function M_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function w_(e,t,n){return n=n!=null?n.concat([e]):null,HM(4,4,M_.bind(null,t,e),n)}function rS(){}function L_(e,t){var n=_t();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&eS(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function S_(e,t){var n=_t();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&eS(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function j_(e,t,n){return Ma&21?(Pt(n,t)||(n=zC(),ke.lanes|=n,wa|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function zz(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var a=fw.transition;fw.transition={};try{e(!1),t()}finally{ne=n,fw.transition=a}}function C_(){return _t().memoizedState}function Az(e,t,n){var a=I1(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},__(e))I_(t,n);else if(n=s_(e,t,n,a),n!==null){var o=Ue();Dt(n,e,a,o),b_(n,t,a)}}function qz(e,t,n){var a=I1(e),o={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(__(e))I_(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var s=t.lastRenderedState,l=c(s,n);if(o.hasEagerState=!0,o.eagerState=l,Pt(l,s)){var d=t.interleaved;d===null?(o.next=o,KL(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=s_(e,t,o,a),n!==null&&(o=Ue(),Dt(n,e,a,o),b_(n,t,a))}}function __(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function I_(e,t){Zr=MM=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function b_(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,DL(e,n)}}var wM={readContext:Ct,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Tz={readContext:Ct,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:uj,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4194308,4,M_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ho(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Et();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Az.bind(null,ke,e),[a.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:hj,useDebugValue:rS,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=hj(!1),t=e[0];return e=zz.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=ke,o=Et();if(ye){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),qe===null)throw Error(z(349));Ma&30||y_(a,t,n)}o.memoizedState=n;var c={value:n,getSnapshot:t};return o.queue=c,uj(k_.bind(null,a,c,e),[e]),a.flags|=2048,Xi(9,p_.bind(null,a,c,n,t),void 0,null),n},useId:function(){var e=Et(),t=qe.identifierPrefix;if(ye){var n=t1,a=e1;n=(a&~(1<<32-Nt(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bz++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Nz={readContext:Ct,useCallback:L_,useContext:Ct,useEffect:aS,useImperativeHandle:w_,useInsertionEffect:g_,useLayoutEffect:x_,useMemo:S_,useReducer:vw,useRef:v_,useState:function(){return vw(Ki)},useDebugValue:rS,useDeferredValue:function(e){var t=_t();return j_(t,Ie.memoizedState,e)},useTransition:function(){var e=vw(Ki)[0],t=_t().memoizedState;return[e,t]},useMutableSource:h_,useSyncExternalStore:u_,useId:C_,unstable_isNewReconciler:!1},Dz={readContext:Ct,useCallback:L_,useContext:Ct,useEffect:aS,useImperativeHandle:w_,useInsertionEffect:g_,useLayoutEffect:x_,useMemo:S_,useReducer:gw,useRef:v_,useState:function(){return gw(Ki)},useDebugValue:rS,useDeferredValue:function(e){var t=_t();return Ie===null?t.memoizedState=e:j_(t,Ie.memoizedState,e)},useTransition:function(){var e=gw(Ki)[0],t=_t().memoizedState;return[e,t]},useMutableSource:h_,useSyncExternalStore:u_,useId:C_,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function iL(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var BM={isMounted:function(e){return(e=e._reactInternals)?ja(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ue(),o=I1(e),c=a1(a,o);c.payload=t,n!=null&&(c.callback=n),t=C1(e,c,o),t!==null&&(Dt(t,e,o,a),Do(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ue(),o=I1(e),c=a1(a,o);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=C1(e,c,o),t!==null&&(Dt(t,e,o,a),Do(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),a=I1(e),o=a1(n,a);o.tag=2,t!=null&&(o.callback=t),t=C1(e,o,a),t!==null&&(Dt(t,e,a,n),Do(t,e,a))}};function yj(e,t,n,a,o,c,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,s):t.prototype&&t.prototype.isPureReactComponent?!Ei(n,a)||!Ei(o,c):!0}function z_(e,t,n){var a=!1,o=R1,c=t.contextType;return typeof c=="object"&&c!==null?c=Ct(c):(o=Ye(t)?ga:Oe.current,a=t.contextTypes,c=(a=a!=null)?yr(e,o):R1),t=new t(n,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=BM,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=c),t}function pj(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&BM.enqueueReplaceState(t,t.state,null)}function oL(e,t,n,a){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},XL(e);var c=t.contextType;typeof c=="object"&&c!==null?o.context=Ct(c):(c=Ye(t)?ga:Oe.current,o.context=yr(e,c)),o.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(iL(e,t,c,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&BM.enqueueReplaceState(o,o.state,null),gM(e,n,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",a=t;do n+=lb(a),a=a.return;while(a);var o=n}catch(c){o=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:o,digest:null}}function xw(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cL(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pz=typeof WeakMap=="function"?WeakMap:Map;function A_(e,t,n){n=a1(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){SM||(SM=!0,fL=a),cL(e,t)},n}function q_(e,t,n){n=a1(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=t.value;n.payload=function(){return a(o)},n.callback=function(){cL(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){cL(e,t),typeof a!="function"&&(_1===null?_1=new Set([this]):_1.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function kj(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Pz;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(o.add(n),e=Xz.bind(null,e,t,n),t.then(e,e))}function mj(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fj(e,t,n,a,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=a1(-1,1),t.tag=2,C1(n,t,1))),n.lanes|=1),e)}var Hz=d1.ReactCurrentOwner,Qe=!1;function $e(e,t,n,a){t.child=e===null?c_(t,null,n,a):kr(t,e.child,n,a)}function vj(e,t,n,a,o){n=n.render;var c=t.ref;return Ka(t,o),a=tS(e,t,n,a,c,o),n=nS(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,l1(e,t,o)):(ye&&n&&OL(t),t.flags|=1,$e(e,t,a,o),t.child)}function gj(e,t,n,a,o){if(e===null){var c=n.type;return typeof c=="function"&&!uS(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,T_(e,t,c,a,o)):(e=Fo(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&o)){var s=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ei,n(s,a)&&e.ref===t.ref)return l1(e,t,o)}return t.flags|=1,e=b1(c,a),e.ref=t.ref,e.return=t,t.child=e}function T_(e,t,n,a,o){if(e!==null){var c=e.memoizedProps;if(Ei(c,a)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=a=c,(e.lanes&o)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,l1(e,t,o)}return sL(e,t,n,a,o)}function N_(e,t,n){var a=t.pendingProps,o=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce($a,it),it|=n;else{if(!(n&1073741824))return e=c!==null?c.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce($a,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:n,ce($a,it),it|=a}else c!==null?(a=c.baseLanes|n,t.memoizedState=null):a=n,ce($a,it),it|=a;return $e(e,t,o,n),t.child}function D_(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sL(e,t,n,a,o){var c=Ye(n)?ga:Oe.current;return c=yr(t,c),Ka(t,o),n=tS(e,t,n,a,c,o),a=nS(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,l1(e,t,o)):(ye&&a&&OL(t),t.flags|=1,$e(e,t,n,o),t.child)}function xj(e,t,n,a,o){if(Ye(n)){var c=!0;pM(t)}else c=!1;if(Ka(t,o),t.stateNode===null)Bo(e,t),z_(t,n,a),oL(t,n,a,o),a=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var d=s.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=Ye(n)?ga:Oe.current,h=yr(t,h));var y=n.getDerivedStateFromProps,p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||d!==h)&&pj(t,s,a,h),m1=!1;var m=t.memoizedState;s.state=m,gM(t,a,s,o),d=t.memoizedState,l!==a||m!==d||Je.current||m1?(typeof y=="function"&&(iL(t,n,y,a),d=t.memoizedState),(l=m1||yj(t,n,l,a,m,d,h))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=d),s.props=a,s.state=d,s.context=h,a=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,l_(e,t),l=t.memoizedProps,h=t.type===t.elementType?l:zt(t.type,l),s.props=h,p=t.pendingProps,m=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ct(d):(d=Ye(n)?ga:Oe.current,d=yr(t,d));var g=n.getDerivedStateFromProps;(y=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==d)&&pj(t,s,a,d),m1=!1,m=t.memoizedState,s.state=m,gM(t,a,s,o);var f=t.memoizedState;l!==p||m!==f||Je.current||m1?(typeof g=="function"&&(iL(t,n,g,a),f=t.memoizedState),(h=m1||yj(t,n,h,a,m,f,d)||!1)?(y||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,f,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,f,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=f),s.props=a,s.state=f,s.context=d,a=h):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),a=!1)}return lL(e,t,n,a,c,o)}function lL(e,t,n,a,o,c){D_(e,t);var s=(t.flags&128)!==0;if(!a&&!s)return o&&ij(t,n,!1),l1(e,t,c);a=t.stateNode,Hz.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&s?(t.child=kr(t,e.child,null,c),t.child=kr(t,null,l,c)):$e(e,t,l,c),t.memoizedState=a.state,o&&ij(t,n,!0),t.child}function P_(e){var t=e.stateNode;t.pendingContext?rj(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rj(e,t.context,!1),QL(e,t.containerInfo)}function Mj(e,t,n,a,o){return pr(),UL(o),t.flags|=256,$e(e,t,n,a),t.child}var dL={dehydrated:null,treeContext:null,retryLane:0};function hL(e){return{baseLanes:e,cachePool:null,transitions:null}}function H_(e,t,n){var a=t.pendingProps,o=pe.current,c=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ce(pe,o&1),e===null)return aL(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=a.children,e=a.fallback,c?(a=t.mode,c=t.child,s={mode:"hidden",children:s},!(a&1)&&c!==null?(c.childLanes=0,c.pendingProps=s):c=FM(s,a,0,null),e=ua(e,a,n,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=hL(n),t.memoizedState=dL,e):iS(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Bz(e,t,s,a,l,o,n);if(c){c=a.fallback,s=t.mode,o=e.child,l=o.sibling;var d={mode:"hidden",children:a.children};return!(s&1)&&t.child!==o?(a=t.child,a.childLanes=0,a.pendingProps=d,t.deletions=null):(a=b1(o,d),a.subtreeFlags=o.subtreeFlags&14680064),l!==null?c=b1(l,c):(c=ua(c,s,n,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,a=c,c=t.child,s=e.child.memoizedState,s=s===null?hL(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},c.memoizedState=s,c.childLanes=e.childLanes&~n,t.memoizedState=dL,a}return c=e.child,e=c.sibling,a=b1(c,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function iS(e,t){return t=FM({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,a){return a!==null&&UL(a),kr(t,e.child,null,n),e=iS(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bz(e,t,n,a,o,c,s){if(n)return t.flags&256?(t.flags&=-257,a=xw(Error(z(422))),So(e,t,s,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=a.fallback,o=t.mode,a=FM({mode:"visible",children:a.children},o,0,null),c=ua(c,o,s,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,t.mode&1&&kr(t,e.child,null,s),t.child.memoizedState=hL(s),t.memoizedState=dL,c);if(!(t.mode&1))return So(e,t,s,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var l=a.dgst;return a=l,c=Error(z(419)),a=xw(c,a,void 0),So(e,t,s,a)}if(l=(s&e.childLanes)!==0,Qe||l){if(a=qe,a!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(a.suspendedLanes|s)?0:o,o!==0&&o!==c.retryLane&&(c.retryLane=o,s1(e,o),Dt(a,e,o,-1))}return hS(),a=xw(Error(z(421))),So(e,t,s,a)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Qz.bind(null,e),o._reactRetry=t,null):(e=c.treeContext,ot=j1(o.nextSibling),ct=t,ye=!0,qt=null,e!==null&&(gt[xt++]=e1,gt[xt++]=t1,gt[xt++]=xa,e1=e.id,t1=e.overflow,xa=t),t=iS(t,a.children),t.flags|=4096,t)}function wj(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),rL(e.return,t,n)}function Mw(e,t,n,a,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=n,c.tailMode=o)}function B_(e,t,n){var a=t.pendingProps,o=a.revealOrder,c=a.tail;if($e(e,t,a.children,n),a=pe.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wj(e,n,t);else if(e.tag===19)wj(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ce(pe,a),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xM(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Mw(t,!1,o,n,c);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xM(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Mw(t,!0,n,null,c);break;case"together":Mw(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function l1(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wa|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=b1(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=b1(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rz(e,t,n){switch(t.tag){case 3:P_(t),pr();break;case 5:d_(t);break;case 1:Ye(t.type)&&pM(t);break;case 4:QL(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,o=t.memoizedProps.value;ce(fM,a._currentValue),a._currentValue=o;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ce(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?H_(e,t,n):(ce(pe,pe.current&1),e=l1(e,t,n),e!==null?e.sibling:null);ce(pe,pe.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return B_(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ce(pe,pe.current),a)break;return null;case 22:case 23:return t.lanes=0,N_(e,t,n)}return l1(e,t,n)}var R_,uL,V_,F_;R_=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uL=function(){};V_=function(e,t,n,a){var o=e.memoizedProps;if(o!==a){e=t.stateNode,da(Zt.current);var c=null;switch(n){case"input":o=Nw(e,o),a=Nw(e,a),c=[];break;case"select":o=me({},o,{value:void 0}),a=me({},a,{value:void 0}),c=[];break;case"textarea":o=Hw(e,o),a=Hw(e,a),c=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=uM)}Rw(n,a);var s;n=null;for(h in o)if(!a.hasOwnProperty(h)&&o.hasOwnProperty(h)&&o[h]!=null)if(h==="style"){var l=o[h];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Di.hasOwnProperty(h)?c||(c=[]):(c=c||[]).push(h,null));for(h in a){var d=a[h];if(l=o!=null?o[h]:void 0,a.hasOwnProperty(h)&&d!==l&&(d!=null||l!=null))if(h==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(c||(c=[]),c.push(h,n)),n=d;else h==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(c=c||[]).push(h,d)):h==="children"?typeof d!="string"&&typeof d!="number"||(c=c||[]).push(h,""+d):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Di.hasOwnProperty(h)?(d!=null&&h==="onScroll"&&de("scroll",e),c||l===d||(c=[])):(c=c||[]).push(h,d))}n&&(c=c||[]).push("style",n);var h=c;(t.updateQueue=h)&&(t.flags|=4)}};F_=function(e,t,n,a){n!==a&&(t.flags|=4)};function qr(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Vz(e,t,n){var a=t.pendingProps;switch($L(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ye(t.type)&&yM(),Ve(t),null;case 3:return a=t.stateNode,mr(),ue(Je),ue(Oe),YL(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(xL(qt),qt=null))),uL(e,t),Ve(t),null;case 5:JL(t);var o=da(Wi.current);if(n=t.type,e!==null&&t.stateNode!=null)V_(e,t,n,a,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(z(166));return Ve(t),null}if(e=da(Zt.current),wo(t)){a=t.stateNode,n=t.type;var c=t.memoizedProps;switch(a[$t]=t,a[Ui]=c,e=(t.mode&1)!==0,n){case"dialog":de("cancel",a),de("close",a);break;case"iframe":case"object":case"embed":de("load",a);break;case"video":case"audio":for(o=0;o<Vr.length;o++)de(Vr[o],a);break;case"source":de("error",a);break;case"img":case"image":case"link":de("error",a),de("load",a);break;case"details":de("toggle",a);break;case"input":AS(a,c),de("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},de("invalid",a);break;case"textarea":TS(a,c),de("invalid",a)}Rw(n,c),o=null;for(var s in c)if(c.hasOwnProperty(s)){var l=c[s];s==="children"?typeof l=="string"?a.textContent!==l&&(c.suppressHydrationWarning!==!0&&Mo(a.textContent,l,e),o=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(c.suppressHydrationWarning!==!0&&Mo(a.textContent,l,e),o=["children",""+l]):Di.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&de("scroll",a)}switch(n){case"input":yo(a),qS(a,c,!0);break;case"textarea":yo(a),NS(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=uM)}a=o,t.updateQueue=a,a!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kC(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(n,{is:a.is}):(e=s.createElement(n),n==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,n),e[$t]=t,e[Ui]=a,R_(e,t,!1,!1),t.stateNode=e;e:{switch(s=Vw(n,a),n){case"dialog":de("cancel",e),de("close",e),o=a;break;case"iframe":case"object":case"embed":de("load",e),o=a;break;case"video":case"audio":for(o=0;o<Vr.length;o++)de(Vr[o],e);o=a;break;case"source":de("error",e),o=a;break;case"img":case"image":case"link":de("error",e),de("load",e),o=a;break;case"details":de("toggle",e),o=a;break;case"input":AS(e,a),o=Nw(e,a),de("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=me({},a,{value:void 0}),de("invalid",e);break;case"textarea":TS(e,a),o=Hw(e,a),de("invalid",e);break;default:o=a}Rw(n,o),l=o;for(c in l)if(l.hasOwnProperty(c)){var d=l[c];c==="style"?vC(e,d):c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&mC(e,d)):c==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Pi(e,d):typeof d=="number"&&Pi(e,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Di.hasOwnProperty(c)?d!=null&&c==="onScroll"&&de("scroll",e):d!=null&&bL(e,c,d,s))}switch(n){case"input":yo(e),qS(e,a,!1);break;case"textarea":yo(e),NS(e);break;case"option":a.value!=null&&e.setAttribute("value",""+B1(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?Ua(e,!!a.multiple,c,!1):a.defaultValue!=null&&Ua(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=uM)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)F_(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(z(166));if(n=da(Wi.current),da(Zt.current),wo(t)){if(a=t.stateNode,n=t.memoizedProps,a[$t]=t,(c=a.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Mo(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(a.nodeValue,n,(e.mode&1)!==0)}c&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[$t]=t,t.stateNode=a}return Ve(t),null;case 13:if(ue(pe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&ot!==null&&t.mode&1&&!(t.flags&128))i_(),pr(),t.flags|=98560,c=!1;else if(c=wo(t),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(z(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(z(317));c[$t]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),c=!1}else qt!==null&&(xL(qt),qt=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?be===0&&(be=3):hS())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return mr(),uL(e,t),e===null&&Oi(t.stateNode.containerInfo),Ve(t),null;case 10:return GL(t.type._context),Ve(t),null;case 17:return Ye(t.type)&&yM(),Ve(t),null;case 19:if(ue(pe),c=t.memoizedState,c===null)return Ve(t),null;if(a=(t.flags&128)!==0,s=c.rendering,s===null)if(a)qr(c,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=xM(e),s!==null){for(t.flags|=128,qr(c,!1),a=s.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)c=n,e=a,c.flags&=14680066,s=c.alternate,s===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=s.childLanes,c.lanes=s.lanes,c.child=s.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=s.memoizedProps,c.memoizedState=s.memoizedState,c.updateQueue=s.updateQueue,c.type=s.type,e=s.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(pe,pe.current&1|2),t.child}e=e.sibling}c.tail!==null&&Me()>vr&&(t.flags|=128,a=!0,qr(c,!1),t.lanes=4194304)}else{if(!a)if(e=xM(s),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!s.alternate&&!ye)return Ve(t),null}else 2*Me()-c.renderingStartTime>vr&&n!==1073741824&&(t.flags|=128,a=!0,qr(c,!1),t.lanes=4194304);c.isBackwards?(s.sibling=t.child,t.child=s):(n=c.last,n!==null?n.sibling=s:t.child=s,c.last=s)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Me(),t.sibling=null,n=pe.current,ce(pe,a?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return dS(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?it&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Fz(e,t){switch($L(t),t.tag){case 1:return Ye(t.type)&&yM(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),ue(Je),ue(Oe),YL(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return JL(t),null;case 13:if(ue(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(pe),null;case 4:return mr(),null;case 10:return GL(t.type._context),null;case 22:case 23:return dS(),null;case 24:return null;default:return null}}var jo=!1,Ee=!1,Ez=typeof WeakSet=="function"?WeakSet:Set,N=null;function Oa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){ve(e,t,a)}else n.current=null}function yL(e,t,n){try{n()}catch(a){ve(e,t,a)}}var Lj=!1;function Oz(e,t){if(Xw=lM,e=ZC(),EL(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var s=0,l=-1,d=-1,h=0,y=0,p=e,m=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(l=s+o),p!==c||a!==0&&p.nodeType!==3||(d=s+a),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++h===o&&(l=s),m===c&&++y===a&&(d=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qw={focusedElem:e,selectionRange:n},lM=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var f=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var x=f.memoizedProps,L=f.memoizedState,k=t.stateNode,u=k.getSnapshotBeforeUpdate(t.elementType===t.type?x:zt(t.type,x),L);k.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(M){ve(t,t.return,M)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return f=Lj,Lj=!1,f}function Wr(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var c=o.destroy;o.destroy=void 0,c!==void 0&&yL(t,n,c)}o=o.next}while(o!==a)}}function RM(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function pL(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function E_(e){var t=e.alternate;t!==null&&(e.alternate=null,E_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[Ui],delete t[eL],delete t[jz],delete t[Cz])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function O_(e){return e.tag===5||e.tag===3||e.tag===4}function Sj(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||O_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kL(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=uM));else if(a!==4&&(e=e.child,e!==null))for(kL(e,t,n),e=e.sibling;e!==null;)kL(e,t,n),e=e.sibling}function mL(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(mL(e,t,n),e=e.sibling;e!==null;)mL(e,t,n),e=e.sibling}var Pe=null,At=!1;function y1(e,t,n){for(n=n.child;n!==null;)$_(e,t,n),n=n.sibling}function $_(e,t,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(AM,n)}catch{}switch(n.tag){case 5:Ee||Oa(n,t);case 6:var a=Pe,o=At;Pe=null,y1(e,t,n),Pe=a,At=o,Pe!==null&&(At?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(At?(e=Pe,n=n.stateNode,e.nodeType===8?pw(e.parentNode,n):e.nodeType===1&&pw(e,n),Vi(e)):pw(Pe,n.stateNode));break;case 4:a=Pe,o=At,Pe=n.stateNode.containerInfo,At=!0,y1(e,t,n),Pe=a,At=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var c=o,s=c.destroy;c=c.tag,s!==void 0&&(c&2||c&4)&&yL(n,t,s),o=o.next}while(o!==a)}y1(e,t,n);break;case 1:if(!Ee&&(Oa(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(l){ve(n,t,l)}y1(e,t,n);break;case 21:y1(e,t,n);break;case 22:n.mode&1?(Ee=(a=Ee)||n.memoizedState!==null,y1(e,t,n),Ee=a):y1(e,t,n);break;default:y1(e,t,n)}}function jj(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ez),t.forEach(function(a){var o=Jz.bind(null,e,a);n.has(a)||(n.add(a),a.then(o,o))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];try{var c=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,At=!1;break e;case 3:Pe=l.stateNode.containerInfo,At=!0;break e;case 4:Pe=l.stateNode.containerInfo,At=!0;break e}l=l.return}if(Pe===null)throw Error(z(160));$_(c,s,o),Pe=null,At=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(h){ve(o,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)U_(t,e),t=t.sibling}function U_(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Rt(e),a&4){try{Wr(3,e,e.return),RM(3,e)}catch(x){ve(e,e.return,x)}try{Wr(5,e,e.return)}catch(x){ve(e,e.return,x)}}break;case 1:It(t,e),Rt(e),a&512&&n!==null&&Oa(n,n.return);break;case 5:if(It(t,e),Rt(e),a&512&&n!==null&&Oa(n,n.return),e.flags&32){var o=e.stateNode;try{Pi(o,"")}catch(x){ve(e,e.return,x)}}if(a&4&&(o=e.stateNode,o!=null)){var c=e.memoizedProps,s=n!==null?n.memoizedProps:c,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&c.type==="radio"&&c.name!=null&&yC(o,c),Vw(l,s);var h=Vw(l,c);for(s=0;s<d.length;s+=2){var y=d[s],p=d[s+1];y==="style"?vC(o,p):y==="dangerouslySetInnerHTML"?mC(o,p):y==="children"?Pi(o,p):bL(o,y,p,h)}switch(l){case"input":Dw(o,c);break;case"textarea":pC(o,c);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!c.multiple;var g=c.value;g!=null?Ua(o,!!c.multiple,g,!1):m!==!!c.multiple&&(c.defaultValue!=null?Ua(o,!!c.multiple,c.defaultValue,!0):Ua(o,!!c.multiple,c.multiple?[]:"",!1))}o[Ui]=c}catch(x){ve(e,e.return,x)}}break;case 6:if(It(t,e),Rt(e),a&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,c=e.memoizedProps;try{o.nodeValue=c}catch(x){ve(e,e.return,x)}}break;case 3:if(It(t,e),Rt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Vi(t.containerInfo)}catch(x){ve(e,e.return,x)}break;case 4:It(t,e),Rt(e);break;case 13:It(t,e),Rt(e),o=e.child,o.flags&8192&&(c=o.memoizedState!==null,o.stateNode.isHidden=c,!c||o.alternate!==null&&o.alternate.memoizedState!==null||(sS=Me())),a&4&&jj(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(h=Ee)||y,It(t,e),Ee=h):It(t,e),Rt(e),a&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!y&&e.mode&1)for(N=e,y=e.child;y!==null;){for(p=N=y;N!==null;){switch(m=N,g=m.child,m.tag){case 0:case 11:case 14:case 15:Wr(4,m,m.return);break;case 1:Oa(m,m.return);var f=m.stateNode;if(typeof f.componentWillUnmount=="function"){a=m,n=m.return;try{t=a,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(x){ve(a,n,x)}}break;case 5:Oa(m,m.return);break;case 22:if(m.memoizedState!==null){_j(p);continue}}g!==null?(g.return=m,N=g):_j(p)}y=y.sibling}e:for(y=null,p=e;;){if(p.tag===5){if(y===null){y=p;try{o=p.stateNode,h?(c=o.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(l=p.stateNode,d=p.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=fC("display",s))}catch(x){ve(e,e.return,x)}}}else if(p.tag===6){if(y===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(x){ve(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;y===p&&(y=null),p=p.return}y===p&&(y=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:It(t,e),Rt(e),a&4&&jj(e);break;case 21:break;default:It(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(O_(n)){var a=n;break e}n=n.return}throw Error(z(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(Pi(o,""),a.flags&=-33);var c=Sj(e);mL(e,c,o);break;case 3:case 4:var s=a.stateNode.containerInfo,l=Sj(e);kL(e,l,s);break;default:throw Error(z(161))}}catch(d){ve(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $z(e,t,n){N=e,Z_(e)}function Z_(e,t,n){for(var a=(e.mode&1)!==0;N!==null;){var o=N,c=o.child;if(o.tag===22&&a){var s=o.memoizedState!==null||jo;if(!s){var l=o.alternate,d=l!==null&&l.memoizedState!==null||Ee;l=jo;var h=Ee;if(jo=s,(Ee=d)&&!h)for(N=o;N!==null;)s=N,d=s.child,s.tag===22&&s.memoizedState!==null?Ij(o):d!==null?(d.return=s,N=d):Ij(o);for(;c!==null;)N=c,Z_(c),c=c.sibling;N=o,jo=l,Ee=h}Cj(e)}else o.subtreeFlags&8772&&c!==null?(c.return=o,N=c):Cj(e)}}function Cj(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||RM(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ee)if(n===null)a.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);a.componentDidUpdate(o,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&dj(t,c,a);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dj(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var y=h.memoizedState;if(y!==null){var p=y.dehydrated;p!==null&&Vi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ee||t.flags&512&&pL(t)}catch(m){ve(t,t.return,m)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function _j(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ij(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{RM(4,t)}catch(d){ve(t,n,d)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var o=t.return;try{a.componentDidMount()}catch(d){ve(t,o,d)}}var c=t.return;try{pL(t)}catch(d){ve(t,c,d)}break;case 5:var s=t.return;try{pL(t)}catch(d){ve(t,s,d)}}}catch(d){ve(t,t.return,d)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var Uz=Math.ceil,LM=d1.ReactCurrentDispatcher,oS=d1.ReactCurrentOwner,wt=d1.ReactCurrentBatchConfig,Y=0,qe=null,Le=null,He=0,it=0,$a=F1(0),be=0,Qi=null,wa=0,VM=0,cS=0,Gr=null,Xe=null,sS=0,vr=1/0,Jt=null,SM=!1,fL=null,_1=null,Co=!1,x1=null,jM=0,Kr=0,vL=null,Ro=-1,Vo=0;function Ue(){return Y&6?Me():Ro!==-1?Ro:Ro=Me()}function I1(e){return e.mode&1?Y&2&&He!==0?He&-He:Iz.transition!==null?(Vo===0&&(Vo=zC()),Vo):(e=ne,e!==0||(e=window.event,e=e===void 0?16:HC(e.type)),e):1}function Dt(e,t,n,a){if(50<Kr)throw Kr=0,vL=null,Error(z(185));eo(e,n,a),(!(Y&2)||e!==qe)&&(e===qe&&(!(Y&2)&&(VM|=n),be===4&&v1(e,He)),et(e,a),n===1&&Y===0&&!(t.mode&1)&&(vr=Me()+500,PM&&E1()))}function et(e,t){var n=e.callbackNode;Ib(e,t);var a=sM(e,e===qe?He:0);if(a===0)n!==null&&HS(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&HS(n),t===1)e.tag===0?_z(bj.bind(null,e)):n_(bj.bind(null,e)),Lz(function(){!(Y&6)&&E1()}),n=null;else{switch(AC(a)){case 1:n=NL;break;case 4:n=IC;break;case 16:n=cM;break;case 536870912:n=bC;break;default:n=cM}n=eI(n,W_.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W_(e,t){if(Ro=-1,Vo=0,Y&6)throw Error(z(327));var n=e.callbackNode;if(Xa()&&e.callbackNode!==n)return null;var a=sM(e,e===qe?He:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=CM(e,a);else{t=a;var o=Y;Y|=2;var c=K_();(qe!==e||He!==t)&&(Jt=null,vr=Me()+500,ha(e,t));do try{Gz();break}catch(l){G_(e,l)}while(!0);WL(),LM.current=c,Y=o,Le!==null?t=0:(qe=null,He=0,t=be)}if(t!==0){if(t===2&&(o=Uw(e),o!==0&&(a=o,t=gL(e,o))),t===1)throw n=Qi,ha(e,0),v1(e,a),et(e,Me()),n;if(t===6)v1(e,a);else{if(o=e.current.alternate,!(a&30)&&!Zz(o)&&(t=CM(e,a),t===2&&(c=Uw(e),c!==0&&(a=c,t=gL(e,c))),t===1))throw n=Qi,ha(e,0),v1(e,a),et(e,Me()),n;switch(e.finishedWork=o,e.finishedLanes=a,t){case 0:case 1:throw Error(z(345));case 2:G1(e,Xe,Jt);break;case 3:if(v1(e,a),(a&130023424)===a&&(t=sS+500-Me(),10<t)){if(sM(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){Ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Yw(G1.bind(null,e,Xe,Jt),t);break}G1(e,Xe,Jt);break;case 4:if(v1(e,a),(a&4194240)===a)break;for(t=e.eventTimes,o=-1;0<a;){var s=31-Nt(a);c=1<<s,s=t[s],s>o&&(o=s),a&=~c}if(a=o,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Uz(a/1960))-a,10<a){e.timeoutHandle=Yw(G1.bind(null,e,Xe,Jt),a);break}G1(e,Xe,Jt);break;case 5:G1(e,Xe,Jt);break;default:throw Error(z(329))}}}return et(e,Me()),e.callbackNode===n?W_.bind(null,e):null}function gL(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(ha(e,t).flags|=256),e=CM(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&xL(t)),e}function xL(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Zz(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var o=n[a],c=o.getSnapshot;o=o.value;try{if(!Pt(c(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function v1(e,t){for(t&=~cS,t&=~VM,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),a=1<<n;e[n]=-1,t&=~a}}function bj(e){if(Y&6)throw Error(z(327));Xa();var t=sM(e,0);if(!(t&1))return et(e,Me()),null;var n=CM(e,t);if(e.tag!==0&&n===2){var a=Uw(e);a!==0&&(t=a,n=gL(e,a))}if(n===1)throw n=Qi,ha(e,0),v1(e,t),et(e,Me()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,G1(e,Xe,Jt),et(e,Me()),null}function lS(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(vr=Me()+500,PM&&E1())}}function La(e){x1!==null&&x1.tag===0&&!(Y&6)&&Xa();var t=Y;Y|=1;var n=wt.transition,a=ne;try{if(wt.transition=null,ne=1,e)return e()}finally{ne=a,wt.transition=n,Y=t,!(Y&6)&&E1()}}function dS(){it=$a.current,ue($a)}function ha(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wz(n)),Le!==null)for(n=Le.return;n!==null;){var a=n;switch($L(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&yM();break;case 3:mr(),ue(Je),ue(Oe),YL();break;case 5:JL(a);break;case 4:mr();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:GL(a.type._context);break;case 22:case 23:dS()}n=n.return}if(qe=e,Le=e=b1(e.current,null),He=it=t,be=0,Qi=null,cS=VM=wa=0,Xe=Gr=null,la!==null){for(t=0;t<la.length;t++)if(n=la[t],a=n.interleaved,a!==null){n.interleaved=null;var o=a.next,c=n.pending;if(c!==null){var s=c.next;c.next=o,a.next=s}n.pending=a}la=null}return e}function G_(e,t){do{var n=Le;try{if(WL(),Po.current=wM,MM){for(var a=ke.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}MM=!1}if(Ma=0,ze=Ie=ke=null,Zr=!1,Gi=0,oS.current=null,n===null||n.return===null){be=1,Qi=t,Le=null;break}e:{var c=e,s=n.return,l=n,d=t;if(t=He,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var h=d,y=l,p=y.tag;if(!(y.mode&1)&&(p===0||p===11||p===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var g=mj(s);if(g!==null){g.flags&=-257,fj(g,s,l,c,t),g.mode&1&&kj(c,h,t),t=g,d=h;var f=t.updateQueue;if(f===null){var x=new Set;x.add(d),t.updateQueue=x}else f.add(d);break e}else{if(!(t&1)){kj(c,h,t),hS();break e}d=Error(z(426))}}else if(ye&&l.mode&1){var L=mj(s);if(L!==null){!(L.flags&65536)&&(L.flags|=256),fj(L,s,l,c,t),UL(fr(d,l));break e}}c=d=fr(d,l),be!==4&&(be=2),Gr===null?Gr=[c]:Gr.push(c),c=s;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var k=A_(c,d,t);lj(c,k);break e;case 1:l=d;var u=c.type,v=c.stateNode;if(!(c.flags&128)&&(typeof u.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(_1===null||!_1.has(v)))){c.flags|=65536,t&=-t,c.lanes|=t;var M=q_(c,l,t);lj(c,M);break e}}c=c.return}while(c!==null)}Q_(n)}catch(j){t=j,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function K_(){var e=LM.current;return LM.current=wM,e===null?wM:e}function hS(){(be===0||be===3||be===2)&&(be=4),qe===null||!(wa&268435455)&&!(VM&268435455)||v1(qe,He)}function CM(e,t){var n=Y;Y|=2;var a=K_();(qe!==e||He!==t)&&(Jt=null,ha(e,t));do try{Wz();break}catch(o){G_(e,o)}while(!0);if(WL(),Y=n,LM.current=a,Le!==null)throw Error(z(261));return qe=null,He=0,be}function Wz(){for(;Le!==null;)X_(Le)}function Gz(){for(;Le!==null&&!gb();)X_(Le)}function X_(e){var t=Y_(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?Q_(e):Le=t,oS.current=null}function Q_(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fz(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Le=null;return}}else if(n=Vz(n,t,it),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);be===0&&(be=5)}function G1(e,t,n){var a=ne,o=wt.transition;try{wt.transition=null,ne=1,Kz(e,t,n,a)}finally{wt.transition=o,ne=a}return null}function Kz(e,t,n,a){do Xa();while(x1!==null);if(Y&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if(bb(e,c),e===qe&&(Le=qe=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,eI(cM,function(){return Xa(),null})),c=(n.flags&15990)!==0,n.subtreeFlags&15990||c){c=wt.transition,wt.transition=null;var s=ne;ne=1;var l=Y;Y|=4,oS.current=null,Oz(e,n),U_(n,e),kz(Qw),lM=!!Xw,Qw=Xw=null,e.current=n,$z(n),xb(),Y=l,ne=s,wt.transition=c}else e.current=n;if(Co&&(Co=!1,x1=e,jM=o),c=e.pendingLanes,c===0&&(_1=null),Lb(n.stateNode),et(e,Me()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],a(o.value,{componentStack:o.stack,digest:o.digest});if(SM)throw SM=!1,e=fL,fL=null,e;return jM&1&&e.tag!==0&&Xa(),c=e.pendingLanes,c&1?e===vL?Kr++:(Kr=0,vL=e):Kr=0,E1(),null}function Xa(){if(x1!==null){var e=AC(jM),t=wt.transition,n=ne;try{if(wt.transition=null,ne=16>e?16:e,x1===null)var a=!1;else{if(e=x1,x1=null,jM=0,Y&6)throw Error(z(331));var o=Y;for(Y|=4,N=e.current;N!==null;){var c=N,s=c.child;if(N.flags&16){var l=c.deletions;if(l!==null){for(var d=0;d<l.length;d++){var h=l[d];for(N=h;N!==null;){var y=N;switch(y.tag){case 0:case 11:case 15:Wr(8,y,c)}var p=y.child;if(p!==null)p.return=y,N=p;else for(;N!==null;){y=N;var m=y.sibling,g=y.return;if(E_(y),y===h){N=null;break}if(m!==null){m.return=g,N=m;break}N=g}}}var f=c.alternate;if(f!==null){var x=f.child;if(x!==null){f.child=null;do{var L=x.sibling;x.sibling=null,x=L}while(x!==null)}}N=c}}if(c.subtreeFlags&2064&&s!==null)s.return=c,N=s;else e:for(;N!==null;){if(c=N,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Wr(9,c,c.return)}var k=c.sibling;if(k!==null){k.return=c.return,N=k;break e}N=c.return}}var u=e.current;for(N=u;N!==null;){s=N;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,N=v;else e:for(s=u;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:RM(9,l)}}catch(j){ve(l,l.return,j)}if(l===s){N=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,N=M;break e}N=l.return}}if(Y=o,E1(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(AM,e)}catch{}a=!0}return a}finally{ne=n,wt.transition=t}}return!1}function zj(e,t,n){t=fr(n,t),t=A_(e,t,1),e=C1(e,t,1),t=Ue(),e!==null&&(eo(e,1,t),et(e,t))}function ve(e,t,n){if(e.tag===3)zj(e,e,n);else for(;t!==null;){if(t.tag===3){zj(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_1===null||!_1.has(a))){e=fr(n,e),e=q_(t,e,1),t=C1(t,e,1),e=Ue(),t!==null&&(eo(t,1,e),et(t,e));break}}t=t.return}}function Xz(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,qe===e&&(He&n)===n&&(be===4||be===3&&(He&130023424)===He&&500>Me()-sS?ha(e,0):cS|=n),et(e,t)}function J_(e,t){t===0&&(e.mode&1?(t=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):t=1);var n=Ue();e=s1(e,t),e!==null&&(eo(e,t,n),et(e,n))}function Qz(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),J_(e,n)}function Jz(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(z(314))}a!==null&&a.delete(t),J_(e,n)}var Y_;Y_=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,Rz(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,ye&&t.flags&1048576&&a_(t,mM,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Bo(e,t),e=t.pendingProps;var o=yr(t,Oe.current);Ka(t,n),o=tS(null,t,a,e,o,n);var c=nS();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(a)?(c=!0,pM(t)):c=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,XL(t),o.updater=BM,t.stateNode=o,o._reactInternals=t,oL(t,a,e,n),t=lL(null,t,a,!0,c,n)):(t.tag=0,ye&&c&&OL(t),$e(null,t,o,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,o=a._init,a=o(a._payload),t.type=a,o=t.tag=eA(a),e=zt(a,e),o){case 0:t=sL(null,t,a,e,n);break e;case 1:t=xj(null,t,a,e,n);break e;case 11:t=vj(null,t,a,e,n);break e;case 14:t=gj(null,t,a,zt(a.type,e),n);break e}throw Error(z(306,a,""))}return t;case 0:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:zt(a,o),sL(e,t,a,o,n);case 1:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:zt(a,o),xj(e,t,a,o,n);case 3:e:{if(P_(t),e===null)throw Error(z(387));a=t.pendingProps,c=t.memoizedState,o=c.element,l_(e,t),gM(t,a,null,n);var s=t.memoizedState;if(a=s.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){o=fr(Error(z(423)),t),t=Mj(e,t,a,n,o);break e}else if(a!==o){o=fr(Error(z(424)),t),t=Mj(e,t,a,n,o);break e}else for(ot=j1(t.stateNode.containerInfo.firstChild),ct=t,ye=!0,qt=null,n=c_(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pr(),a===o){t=l1(e,t,n);break e}$e(e,t,a,n)}t=t.child}return t;case 5:return d_(t),e===null&&aL(t),a=t.type,o=t.pendingProps,c=e!==null?e.memoizedProps:null,s=o.children,Jw(a,o)?s=null:c!==null&&Jw(a,c)&&(t.flags|=32),D_(e,t),$e(e,t,s,n),t.child;case 6:return e===null&&aL(t),null;case 13:return H_(e,t,n);case 4:return QL(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=kr(t,null,a,n):$e(e,t,a,n),t.child;case 11:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:zt(a,o),vj(e,t,a,o,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,o=t.pendingProps,c=t.memoizedProps,s=o.value,ce(fM,a._currentValue),a._currentValue=s,c!==null)if(Pt(c.value,s)){if(c.children===o.children&&!Je.current){t=l1(e,t,n);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var l=c.dependencies;if(l!==null){s=c.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(c.tag===1){d=a1(-1,n&-n),d.tag=2;var h=c.updateQueue;if(h!==null){h=h.shared;var y=h.pending;y===null?d.next=d:(d.next=y.next,y.next=d),h.pending=d}}c.lanes|=n,d=c.alternate,d!==null&&(d.lanes|=n),rL(c.return,n,t),l.lanes|=n;break}d=d.next}}else if(c.tag===10)s=c.type===t.type?null:c.child;else if(c.tag===18){if(s=c.return,s===null)throw Error(z(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rL(s,n,t),s=c.sibling}else s=c.child;if(s!==null)s.return=c;else for(s=c;s!==null;){if(s===t){s=null;break}if(c=s.sibling,c!==null){c.return=s.return,s=c;break}s=s.return}c=s}$e(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,a=t.pendingProps.children,Ka(t,n),o=Ct(o),a=a(o),t.flags|=1,$e(e,t,a,n),t.child;case 14:return a=t.type,o=zt(a,t.pendingProps),o=zt(a.type,o),gj(e,t,a,o,n);case 15:return T_(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,o=t.pendingProps,o=t.elementType===a?o:zt(a,o),Bo(e,t),t.tag=1,Ye(a)?(e=!0,pM(t)):e=!1,Ka(t,n),z_(t,a,o),oL(t,a,o,n),lL(null,t,a,!0,e,n);case 19:return B_(e,t,n);case 22:return N_(e,t,n)}throw Error(z(156,t.tag))};function eI(e,t){return _C(e,t)}function Yz(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,a){return new Yz(e,t,n,a)}function uS(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eA(e){if(typeof e=="function")return uS(e)?1:0;if(e!=null){if(e=e.$$typeof,e===AL)return 11;if(e===qL)return 14}return 2}function b1(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fo(e,t,n,a,o,c){var s=2;if(a=e,typeof e=="function")uS(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Na:return ua(n.children,o,c,t);case zL:s=8,o|=8;break;case zw:return e=Mt(12,n,t,o|2),e.elementType=zw,e.lanes=c,e;case Aw:return e=Mt(13,n,t,o),e.elementType=Aw,e.lanes=c,e;case qw:return e=Mt(19,n,t,o),e.elementType=qw,e.lanes=c,e;case dC:return FM(n,o,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sC:s=10;break e;case lC:s=9;break e;case AL:s=11;break e;case qL:s=14;break e;case k1:s=16,a=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Mt(s,n,t,o),t.elementType=e,t.type=a,t.lanes=c,t}function ua(e,t,n,a){return e=Mt(7,e,a,t),e.lanes=n,e}function FM(e,t,n,a){return e=Mt(22,e,a,t),e.elementType=dC,e.lanes=n,e.stateNode={isHidden:!1},e}function ww(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Lw(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tA(e,t,n,a,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aw(0),this.expirationTimes=aw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aw(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function yS(e,t,n,a,o,c,s,l,d){return e=new tA(e,t,n,l,d),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Mt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},XL(c),e}function nA(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ta,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function tI(e){if(!e)return R1;e=e._reactInternals;e:{if(ja(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ye(n))return t_(e,n,t)}return t}function nI(e,t,n,a,o,c,s,l,d){return e=yS(n,a,!0,e,o,c,s,l,d),e.context=tI(null),n=e.current,a=Ue(),o=I1(n),c=a1(a,o),c.callback=t??null,C1(n,c,o),e.current.lanes=o,eo(e,o,a),et(e,a),e}function EM(e,t,n,a){var o=t.current,c=Ue(),s=I1(o);return n=tI(n),t.context===null?t.context=n:t.pendingContext=n,t=a1(c,s),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=C1(o,t,s),e!==null&&(Dt(e,o,s,c),Do(e,o,s)),s}function _M(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Aj(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pS(e,t){Aj(e,t),(e=e.alternate)&&Aj(e,t)}function aA(){return null}var aI=typeof reportError=="function"?reportError:function(e){console.error(e)};function kS(e){this._internalRoot=e}OM.prototype.render=kS.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));EM(e,t,null,null)};OM.prototype.unmount=kS.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;La(function(){EM(null,e,null,null)}),t[c1]=null}};function OM(e){this._internalRoot=e}OM.prototype.unstable_scheduleHydration=function(e){if(e){var t=NC();e={blockedOn:null,target:e,priority:t};for(var n=0;n<f1.length&&t!==0&&t<f1[n].priority;n++);f1.splice(n,0,e),n===0&&PC(e)}};function mS(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $M(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qj(){}function rA(e,t,n,a,o){if(o){if(typeof a=="function"){var c=a;a=function(){var h=_M(s);c.call(h)}}var s=nI(t,a,e,0,null,!1,!1,"",qj);return e._reactRootContainer=s,e[c1]=s.current,Oi(e.nodeType===8?e.parentNode:e),La(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var l=a;a=function(){var h=_M(d);l.call(h)}}var d=yS(e,0,!1,null,null,!1,!1,"",qj);return e._reactRootContainer=d,e[c1]=d.current,Oi(e.nodeType===8?e.parentNode:e),La(function(){EM(t,d,n,a)}),d}function UM(e,t,n,a,o){var c=n._reactRootContainer;if(c){var s=c;if(typeof o=="function"){var l=o;o=function(){var d=_M(s);l.call(d)}}EM(t,s,e,o)}else s=rA(n,t,e,o,a);return _M(s)}qC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(DL(t,n|1),et(t,Me()),!(Y&6)&&(vr=Me()+500,E1()))}break;case 13:La(function(){var a=s1(e,1);if(a!==null){var o=Ue();Dt(a,e,1,o)}}),pS(e,1)}};PL=function(e){if(e.tag===13){var t=s1(e,134217728);if(t!==null){var n=Ue();Dt(t,e,134217728,n)}pS(e,134217728)}};TC=function(e){if(e.tag===13){var t=I1(e),n=s1(e,t);if(n!==null){var a=Ue();Dt(n,e,t,a)}pS(e,t)}};NC=function(){return ne};DC=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};Ew=function(e,t,n){switch(t){case"input":if(Dw(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=DM(a);if(!o)throw Error(z(90));uC(a),Dw(a,o)}}}break;case"textarea":pC(e,n);break;case"select":t=n.value,t!=null&&Ua(e,!!n.multiple,t,!1)}};MC=lS;wC=La;var iA={usingClientEntryPoint:!1,Events:[no,Ba,DM,gC,xC,lS]},Tr={findFiberByHostInstance:sa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oA={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:d1.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jC(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||aA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{AM=_o.inject(oA),Ut=_o}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iA;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mS(t))throw Error(z(200));return nA(e,t,null,n)};ht.createRoot=function(e,t){if(!mS(e))throw Error(z(299));var n=!1,a="",o=aI;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=yS(e,1,!1,null,null,n,!1,a,o),e[c1]=t.current,Oi(e.nodeType===8?e.parentNode:e),new kS(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=jC(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return La(e)};ht.hydrate=function(e,t,n){if(!$M(t))throw Error(z(200));return UM(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!mS(e))throw Error(z(405));var a=n!=null&&n.hydratedSources||null,o=!1,c="",s=aI;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=nI(t,null,e,1,n??null,o,!1,c,s),e[c1]=t.current,Oi(e),a)for(e=0;e<a.length;e++)n=a[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new OM(t)};ht.render=function(e,t,n){if(!$M(t))throw Error(z(200));return UM(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!$M(e))throw Error(z(40));return e._reactRootContainer?(La(function(){UM(null,null,e,!1,function(){e._reactRootContainer=null,e[c1]=null})}),!0):!1};ht.unstable_batchedUpdates=lS;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!$M(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return UM(e,t,n,!1,a)};ht.version="18.3.1-next-f1338f8080-20240426";function rI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rI)}catch(e){console.error(e)}}rI(),rC.exports=ht;var cA=rC.exports,Tj=cA;Iw.createRoot=Tj.createRoot,Iw.hydrateRoot=Tj.hydrateRoot;/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),r=(e,t)=>{const n=S.forwardRef(({color:a="currentColor",size:o=24,strokeWidth:c=2,absoluteStrokeWidth:s,className:l="",children:d,...h},y)=>S.createElement("svg",{ref:y,...sA,width:o,height:o,stroke:a,strokeWidth:s?Number(c)*24/Number(o):c,className:["lucide",`lucide-${lA(e)}`,l].join(" "),...h},[...t.map(([p,m])=>S.createElement(p,m)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=r("AArrowDown",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=r("AArrowUp",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=r("ALargeSmall",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=r("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=r("ActivitySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=r("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=r("AirVent",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=r("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["polygon",{points:"12 15 17 21 7 21 12 15",key:"1sy95i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=r("AlarmClockCheck",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=r("AlarmClockMinus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=r("AlarmClockOff",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=r("AlarmClockPlus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=r("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=r("AlarmSmoke",[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z",key:"2c4fvq"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8",key:"1vrndv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=r("Album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=r("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=r("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=r("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=r("AlignCenterHorizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=r("AlignCenterVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=r("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=r("AlignEndHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=r("AlignEndVertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=r("AlignHorizontalDistributeCenter",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=r("AlignHorizontalDistributeEnd",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=r("AlignHorizontalDistributeStart",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=r("AlignHorizontalJustifyCenter",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=r("AlignHorizontalJustifyEnd",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=r("AlignHorizontalJustifyStart",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=r("AlignHorizontalSpaceAround",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=r("AlignHorizontalSpaceBetween",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=r("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=r("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=r("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=r("AlignStartHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=r("AlignStartVertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=r("AlignVerticalDistributeCenter",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M7 7H1",key:"105l6j"}],["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M5 17H2",key:"1gx9xc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=r("AlignVerticalDistributeEnd",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=r("AlignVerticalDistributeStart",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=r("AlignVerticalJustifyCenter",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=r("AlignVerticalJustifyEnd",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=r("AlignVerticalJustifyStart",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=r("AlignVerticalSpaceAround",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=r("AlignVerticalSpaceBetween",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=r("Ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=r("Ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=r("Anchor",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["line",{x1:"12",x2:"12",y1:"22",y2:"8",key:"abakz7"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=r("Angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=r("Annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=r("Antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=r("Anvil",[["path",{d:"M7 10c-2.8 0-5-2.2-5-5h5",key:"1d6adc"}],["path",{d:"M7 4v8h7a8 8 0 0 0 8-8Z",key:"uu98hv"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H5Z",key:"10a9tj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=r("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=r("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=r("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=r("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=r("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=r("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=r("AreaChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=r("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=r("ArrowBigDownDash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9h6z",key:"oscb9h"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=r("ArrowBigDown",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=r("ArrowBigLeftDash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=r("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=r("ArrowBigRightDash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=r("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=r("ArrowBigUpDash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=r("ArrowBigUp",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=r("ArrowDown01",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=r("ArrowDown10",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=r("ArrowDownAZ",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=r("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=r("ArrowDownFromLine",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=r("ArrowDownLeftFromCircle",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=r("ArrowDownLeftFromSquare",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=r("ArrowDownLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=r("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=r("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=r("ArrowDownRightFromCircle",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=r("ArrowDownRightFromSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=r("ArrowDownRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=r("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=r("ArrowDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=r("ArrowDownToDot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=r("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=r("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=r("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=r("ArrowDownZA",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=r("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=r("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=r("ArrowLeftFromLine",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=r("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=r("ArrowLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=r("ArrowLeftToLine",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=r("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=r("ArrowRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=r("ArrowRightFromLine",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=r("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=r("ArrowRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=r("ArrowRightToLine",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=r("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=r("ArrowUp01",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=r("ArrowUp10",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=r("ArrowUpAZ",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=r("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=r("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=r("ArrowUpFromDot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=r("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=r("ArrowUpLeftFromCircle",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=r("ArrowUpLeftFromSquare",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=r("ArrowUpLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=r("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=r("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=r("ArrowUpRightFromCircle",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=r("ArrowUpRightFromSquare",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=r("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=r("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=r("ArrowUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=r("ArrowUpToLine",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=r("ArrowUpWideNarrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=r("ArrowUpZA",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=r("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=r("ArrowsUpFromLine",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=r("AsteriskSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=r("Asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=r("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=r("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=r("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=r("AudioWaveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=r("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=r("Axe",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=r("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=r("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=r("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=r("BadgeAlert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=r("BadgeCent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=r("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=r("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=r("BadgeEuro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=r("BadgeHelp",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=r("BadgeIndianRupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=r("BadgeInfo",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=r("BadgeJapaneseYen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=r("BadgeMinus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=r("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=r("BadgePlus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=r("BadgePoundSterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=r("BadgeRussianRuble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=r("BadgeSwissFranc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=r("BadgeX",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=r("Badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=r("BaggageClaim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=r("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=r("Banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=r("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=r("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=r("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=r("BarChart4",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=r("BarChartBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=r("BarChartHorizontalBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=r("BarChartHorizontal",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=r("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=r("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=r("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=r("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=r("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=r("BatteryFull",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=r("BatteryLow",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=r("BatteryMedium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=r("BatteryWarning",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=r("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=r("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=r("BeanOff",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=r("Bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=r("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=r("BedSingle",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=r("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=r("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=r("Beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=r("BellDot",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=r("BellElectric",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=r("BellMinus",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=r("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=r("BellPlus",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=r("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=r("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=r("BetweenHorizontalEnd",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=r("BetweenHorizontalStart",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=r("BetweenVerticalEnd",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=r("BetweenVerticalStart",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=r("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=r("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=r("Biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=r("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=r("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=r("Blend",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=r("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=r("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=r("BluetoothConnected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=r("BluetoothOff",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=r("BluetoothSearching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=r("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=r("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=r("Bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=r("Bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=r("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=r("BookA",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=r("BookAudio",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=r("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=r("BookCopy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=r("BookDashed",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=r("BookDown",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=r("BookHeadphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=r("BookHeart",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=r("BookImage",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=r("BookKey",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=r("BookLock",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=r("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=r("BookMinus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=r("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=r("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=r("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=r("BookPlus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=r("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=r("BookType",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=r("BookUp2",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=r("BookUp",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=r("BookUser",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=r("BookX",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=r("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=r("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=r("BookmarkMinus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=r("BookmarkPlus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=r("BookmarkX",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=r("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=r("BoomBox",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=r("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=r("BoxSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=r("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=r("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=r("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=r("Brackets",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=r("BrainCircuit",[["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z",key:"ixwj2a"}],["path",{d:"M16 8V5c0-1.1.9-2 2-2",key:"13dx7u"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",key:"1s25gz"}],["path",{d:"M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",key:"127460"}],["path",{d:"M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",key:"fys062"}],["path",{d:"M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",key:"1vib61"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=r("BrainCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5",key:"1f4le0"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=r("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=r("BrickWall",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=r("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=r("BringToFront",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=r("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=r("BugOff",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=r("BugPlay",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m12 12 8 5-8 5Z",key:"1ydf81"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=r("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=r("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=r("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=r("BusFront",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=r("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=r("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=r("Cable",[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z",key:"1s6oa5"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M7 5V3",key:"1t1388"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9",key:"1ytv72"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z",key:"sdz6o8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=r("CakeSlice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=r("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=r("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=r("CalendarCheck2",[["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=r("CalendarCheck",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=r("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.25V14",key:"re2vv1"}],["path",{d:"M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",key:"ame013"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=r("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=r("CalendarHeart",[["path",{d:"M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7",key:"1sfrvf"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=r("CalendarMinus",[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19",key:"1g9955"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=r("CalendarOff",[["path",{d:"M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"1feomx"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=r("CalendarPlus",[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["line",{x1:"19",x2:"19",y1:"16",y2:"22",key:"1ttwzi"}],["line",{x1:"16",x2:"22",y1:"19",y2:"19",key:"1g9955"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=r("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=r("CalendarSearch",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5",key:"18ncp8"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=r("CalendarX2",[["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["line",{x1:"17",x2:"22",y1:"17",y2:"22",key:"xa9o8b"}],["line",{x1:"17",x2:"22",y1:"22",y2:"17",key:"18nitg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=r("CalendarX",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["line",{x1:"10",x2:"14",y1:"14",y2:"18",key:"1g3qc0"}],["line",{x1:"14",x2:"10",y1:"14",y2:"18",key:"1az83m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=r("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=r("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=r("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=r("CandlestickChart",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=r("CandyCane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=r("CandyOff",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=r("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=r("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=r("CarTaxiFront",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=r("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=r("Caravan",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=r("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=r("CaseLower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=r("CaseSensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=r("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=r("CassetteTape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=r("Cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=r("Castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=r("Cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=r("Cctv",[["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32",key:"1h9vqe"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",key:"q5d122"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=r("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=r("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=r("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=r("CheckSquare2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=r("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=r("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=r("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=r("Cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=r("ChevronDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=r("ChevronDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=r("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=r("ChevronFirst",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=r("ChevronLast",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=r("ChevronLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=r("ChevronLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=r("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=r("ChevronRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=r("ChevronRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=r("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=r("ChevronUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=r("ChevronUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=r("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=r("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=r("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=r("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=r("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=r("ChevronsRightLeft",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=r("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=r("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=r("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=r("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=r("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=r("CigaretteOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=r("Cigarette",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=r("CircleDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=r("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=r("CircleDotDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=r("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=r("CircleEllipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=r("CircleEqual",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=r("CircleOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=r("CircleSlash2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=r("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=r("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=r("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=r("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=r("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=r("Citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=r("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=r("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=r("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=r("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=r("ClipboardPaste",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=r("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z",key:"yg2pdb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=r("ClipboardPen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z",key:"hnx206"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=r("ClipboardType",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=r("ClipboardX",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=r("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=r("Clock1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=r("Clock10",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=r("Clock11",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=r("Clock12",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=r("Clock2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=r("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=r("Clock4",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=r("Clock5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=r("Clock6",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=r("Clock7",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=r("Clock8",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=r("Clock9",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=r("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=r("CloudCog",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=r("CloudDrizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=r("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=r("CloudHail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=r("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=r("CloudMoonRain",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=r("CloudMoon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=r("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=r("CloudRainWind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=r("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=r("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=r("CloudSunRain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=r("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=r("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=r("Cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=r("Clover",[["path",{d:"M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z",key:"1gxwox"}],["path",{d:"M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16",key:"il7z7z"}],["path",{d:"M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8",key:"15bpx2"}],["path",{d:"M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z",key:"v9mug8"}],["path",{d:"m7 17-5 5",key:"1py3mz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=r("Club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=r("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=r("CodeSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=r("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=r("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=r("Codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=r("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=r("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=r("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=r("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=r("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=r("Columns4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=r("Combine",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=r("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=r("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=r("Component",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=r("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=r("ConciergeBell",[["path",{d:"M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z",key:"1co3i8"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=r("Cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=r("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=r("Contact2",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=r("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=r("Container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=r("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=r("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=r("CookingPot",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=r("CopyCheck",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=r("CopyMinus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=r("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=r("CopySlash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=r("CopyX",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=r("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=r("Copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=r("Copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=r("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=r("CornerDownRight",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=r("CornerLeftDown",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=r("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=r("CornerRightDown",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=r("CornerRightUp",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=r("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=r("CornerUpRight",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=r("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=r("CreativeCommons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=r("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=r("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=r("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=r("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=r("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=r("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=r("Cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=r("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=r("Currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=r("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=r("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=r("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=r("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=r("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=r("Dessert",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=r("Diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=r("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=r("Dice1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=r("Dice2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=r("Dice3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=r("Dice4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=r("Dice5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=r("Dice6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=r("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=r("Diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=r("Disc2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=r("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=r("DiscAlbum",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=r("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=r("DivideCircle",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=r("DivideSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=r("Divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=r("DnaOff",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=r("Dna",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=r("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=r("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=r("Donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=r("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=r("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=r("DotSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=r("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=r("DownloadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=r("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=r("DraftingCompass",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=r("Drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=r("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=r("Drill",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=r("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=r("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=r("Drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=r("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=r("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=r("EarOff",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=r("Ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=r("Eclipse",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=r("EggFried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=r("EggOff",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=r("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=r("EqualNot",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=r("EqualSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=r("Equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=r("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=r("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=r("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=r("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=r("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=r("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=r("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=r("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=r("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=r("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=r("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=r("Fence",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=r("FerrisWheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=r("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=r("FileArchive",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18",key:"1oywqq"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=r("FileAudio2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=r("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=r("FileAxis3d",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=r("FileBadge2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=r("FileBadge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=r("FileBarChart2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=r("FileBarChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=r("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=r("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=r("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=r("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=r("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=r("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=r("FileCog",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=r("FileDiff",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=r("FileDigit",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=r("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=r("FileHeart",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=r("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"13",r:"2",key:"6v46hv"}],["path",{d:"m20 17-1.1-1.1a2 2 0 0 0-2.81.01L10 22",key:"14ir3o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=r("FileInput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=r("FileJson2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=r("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=r("FileKey2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=r("FileKey",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=r("FileLineChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=r("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=r("FileLock",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=r("FileMinus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=r("FileMinus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=r("FileMusic",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=r("FileOutput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=r("FilePenLine",[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"h0fsxq"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z",key:"dyo8mm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=r("FilePen",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10",key:"x7tsz2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z",key:"o3xyfb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=r("FilePieChart",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11.5a6.02 6.02 0 1 0 8.5 8.5",key:"unkkko"}],["path",{d:"M14 16c0-3.3-2.7-6-6-6v6Z",key:"bym002"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=r("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=r("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=r("FileQuestion",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"1umxtm"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=r("FileScan",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=r("FileSearch2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=r("FileSearch",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=r("FileSliders",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=r("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=r("FileStack",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=r("FileSymlink",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v7",key:"1f7zex"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M4 18v-1a2 2 0 0 1 2-2h6",key:"5uz2rn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=r("FileTerminal",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=r("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=r("FileType2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=r("FileType",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=r("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=r("FileVideo2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=r("FileVideo",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=r("FileVolume2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=r("FileVolume",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m7 10-3 2H2v4h2l3 2Z",key:"fiq8l4"}],["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=r("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=r("FileX2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=r("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=r("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=r("Files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=r("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=r("FilterX",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=r("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=r("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=r("FireExtinguisher",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=r("FishOff",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=r("FishSymbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=r("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=r("FlagOff",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=r("FlagTriangleLeft",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=r("FlagTriangleRight",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=r("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=r("FlameKindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=r("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=r("FlashlightOff",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=r("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=r("FlaskConicalOff",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=r("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=r("FlaskRound",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=r("FlipHorizontal2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=r("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=r("FlipVertical2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=r("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=r("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=r("Flower",[["path",{d:"M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15",key:"51z86h"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m8 16 1.5-1.5",key:"ce6zph"}],["path",{d:"M14.5 9.5 16 8",key:"1kzrzb"}],["path",{d:"m8 8 1.5 1.5",key:"1yv88w"}],["path",{d:"M14.5 14.5 16 16",key:"12xhjh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=r("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=r("FoldHorizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=r("FoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=r("FolderArchive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=r("FolderCheck",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=r("FolderClock",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=r("FolderClosed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=r("FolderCog",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=r("FolderDot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=r("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=r("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=r("FolderGit",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=r("FolderHeart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=r("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=r("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=r("FolderKey",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=r("FolderLock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=r("FolderMinus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=r("FolderOpenDot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=r("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=r("FolderOutput",[["path",{d:"M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",key:"jm8npq"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=r("FolderPen",[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z",key:"dakro8"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=r("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=r("FolderRoot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=r("FolderSearch2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=r("FolderSearch",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=r("FolderSymlink",[["path",{d:"M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",key:"1or2t8"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}],["path",{d:"M2 16v-1a2 2 0 0 1 2-2h6",key:"pgw8ln"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=r("FolderSync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=r("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=r("FolderUp",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=r("FolderX",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=r("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=r("Folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=r("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=r("Forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=r("FormInput",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=r("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=r("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=r("Framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=r("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=r("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=r("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=r("FunctionSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=r("GalleryHorizontalEnd",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=r("GalleryHorizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=r("GalleryThumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=r("GalleryVerticalEnd",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=r("GalleryVertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=r("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=r("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=r("GanttChartSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=r("GanttChart",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=r("GaugeCircle",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=r("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=r("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=r("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=r("Ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=r("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=r("GitBranchPlus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=r("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=r("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=r("GitCommitVertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=r("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=r("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=r("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=r("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=r("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=r("GitPullRequestArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=r("GitPullRequestClosed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=r("GitPullRequestCreateArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=r("GitPullRequestCreate",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=r("GitPullRequestDraft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=r("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=r("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=r("Gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=r("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=r("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=r("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=r("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=r("Goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.55 10.23A9 9 0 1 1 8 4.94",key:"5988i3"}],["path",{d:"M8 10a5 5 0 1 0 8.9 2.02",key:"1hq7ot"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=r("Grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=r("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=r("Grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=r("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=r("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=r("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=r("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=r("Grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=r("Group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=r("Guitar",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",key:"1evg0a"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=r("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=r("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=r("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=r("HardDriveDownload",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=r("HardDriveUpload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=r("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=r("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=r("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=r("Haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=r("HdmiPort",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=r("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=r("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=r("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=r("Heading4",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=r("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=r("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=r("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=r("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=r("HeartCrack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=r("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=r("HeartOff",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=r("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=r("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=r("Heater",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=r("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=r("HelpingHand",[["path",{d:"m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19",key:"nitrv7"}],["path",{d:"m2 14 6 6",key:"g6j1uo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=r("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=r("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=r("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=r("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=r("HopOff",[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226",key:"10j95a"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5",key:"1mqyjd"}],["path",{d:"M17.5 17.5c-2.5 0-4 0-6-1",key:"11elt5"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5",key:"13ezvz"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5",key:"1ufrz1"}],["path",{d:"M22 22c-2 0-3.5-.5-5.5-1.5",key:"1n8vbj"}],["path",{d:"M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618",key:"1h85u8"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=r("Hop",[["path",{d:"M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1",key:"l0z2za"}],["path",{d:"M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5",key:"1mqyjd"}],["path",{d:"M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1",key:"10xoad"}],["path",{d:"M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5",key:"1a4gpx"}],["path",{d:"M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5",key:"1ufrz1"}],["path",{d:"M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5",key:"1ok5d2"}],["path",{d:"M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z",key:"8hlroy"}],["path",{d:"M4.5 4.5 3 3c-.184-.185-.184-.816 0-1",key:"q3aj97"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=r("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=r("Hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=r("IceCream2",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"g86ewz"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=r("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=r("ImageDown",[["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8",key:"sqts6f"}],["path",{d:"m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"1h47z9"}],["path",{d:"m14 19.5 3 3v-6",key:"1x9jmo"}],["path",{d:"m17 22.5 3-3",key:"xzuz0n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=r("ImageMinus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=r("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=r("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=r("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=r("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=r("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=r("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=r("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=r("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=r("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=r("InspectionPanel",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=r("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=r("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=r("IterationCcw",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=r("IterationCw",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=r("JapaneseYen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=r("Joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=r("KanbanSquareDashed",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=r("KanbanSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=r("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=r("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",key:"1kog09"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=r("KeySquare",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=r("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=r("KeyboardMusic",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=r("Keyboard",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",ry:"2",key:"15u882"}],["path",{d:"M6 8h.001",key:"1ej0i3"}],["path",{d:"M10 8h.001",key:"1x2st2"}],["path",{d:"M14 8h.001",key:"1vkmyp"}],["path",{d:"M18 8h.001",key:"kfsenl"}],["path",{d:"M8 12h.001",key:"1sjpby"}],["path",{d:"M12 12h.001",key:"al75ts"}],["path",{d:"M16 12h.001",key:"931bgk"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=r("LampCeiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=r("LampDesk",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=r("LampFloor",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=r("LampWallDown",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=r("LampWallUp",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=r("Lamp",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=r("LandPlot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=r("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=r("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=r("Laptop2",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=r("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=r("LassoSelect",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=r("Lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=r("Laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=r("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=r("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=r("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=r("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=r("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=r("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=r("LayoutPanelLeft",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=r("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=r("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=r("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=r("LeafyGreen",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=r("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=r("LibrarySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=r("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=r("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=r("Ligature",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=r("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=r("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=r("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=r("Link2Off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=r("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=r("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=r("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=r("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=r("ListCollapse",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=r("ListEnd",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=r("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=r("ListMinus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=r("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=r("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=r("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=r("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=r("ListStart",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=r("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=r("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=r("ListVideo",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=r("ListX",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=r("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=r("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=r("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=r("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=r("LocateOff",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=r("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=r("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=r("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=r("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=r("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=r("Lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=r("Luggage",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=r("MSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=r("Magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=r("MailCheck",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=r("MailMinus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=r("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=r("MailPlus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=r("MailQuestion",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=r("MailSearch",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=r("MailWarning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=r("MailX",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=r("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=r("Mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=r("Mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=r("MapPinOff",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=r("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=r("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=r("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=r("Martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=r("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=r("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=r("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=r("MegaphoneOff",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=r("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=r("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=r("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=r("MenuSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=r("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=r("Merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=r("MessageCircleCode",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 10 2 2-2 2",key:"1kkmpt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=r("MessageCircleDashed",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=r("MessageCircleHeart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=r("MessageCircleMore",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=r("MessageCircleOff",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=r("MessageCirclePlus",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=r("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=r("MessageCircleReply",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=r("MessageCircleWarning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=r("MessageCircleX",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=r("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=r("MessageSquareCode",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 8-2 2 2 2",key:"19bv1o"}],["path",{d:"m14 8 2 2-2 2",key:"1whylv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=r("MessageSquareDashed",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=r("MessageSquareDiff",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=r("MessageSquareDot",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=r("MessageSquareHeart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=r("MessageSquareMore",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=r("MessageSquareOff",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=r("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=r("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=r("MessageSquareReply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=r("MessageSquareShare",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=r("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=r("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=r("MessageSquareX",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=r("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=r("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=r("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=r("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=r("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=r("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=r("Microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=r("Milestone",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=r("MilkOff",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=r("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=r("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=r("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=r("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=r("MinusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=r("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=r("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=r("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=r("MonitorDown",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=r("MonitorOff",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=r("MonitorPause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=r("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=r("MonitorSmartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=r("MonitorSpeaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=r("MonitorStop",[["rect",{x:"9",y:"7",width:"6",height:"6",key:"4xvc6r"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=r("MonitorUp",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=r("MonitorX",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=r("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=r("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=r("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=r("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=r("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=r("MountainSnow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=r("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=r("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=r("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=r("MousePointerSquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=r("MousePointerSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=r("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=r("Mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=r("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=r("MoveDiagonal2",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=r("MoveDiagonal",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=r("MoveDownLeft",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=r("MoveDownRight",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=r("MoveDown",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=r("MoveHorizontal",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=r("MoveLeft",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=r("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=r("MoveUpLeft",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=r("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=r("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=r("MoveVertical",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=r("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=r("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=r("Music3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=r("Music4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=r("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=r("Navigation2Off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=r("Navigation2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=r("NavigationOff",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=r("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=r("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=r("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=r("Nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=r("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z",key:"1dba1m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=r("NotebookTabs",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=r("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=r("Notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=r("NotepadTextDashed",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=r("NotepadText",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=r("NutOff",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=r("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=r("Octagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=r("Option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=r("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=r("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=r("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=r("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=r("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=r("PackageOpen",[["path",{d:"M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z",key:"1vy178"}],["path",{d:"m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z",key:"s3bv25"}],["line",{x1:"12",x2:"12",y1:"22",y2:"13",key:"1o4xyi"}],["path",{d:"M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5",key:"1na2nq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=r("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=r("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=r("PackageX",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=r("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=r("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=r("PaintRoller",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=r("Paintbrush2",[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",key:"1c8kta"}],["path",{d:"M6 12V2h12v10",key:"1esbnf"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M10 2v2",key:"7u0qdc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=r("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=r("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=r("Palmtree",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",key:"epoumf"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=r("PanelBottomClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=r("PanelBottomDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=r("PanelBottomOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=r("PanelBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=r("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=r("PanelLeftDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=r("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=r("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=r("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=r("PanelRightDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=r("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=r("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=r("PanelTopClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=r("PanelTopDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=r("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=r("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=r("PanelsLeftBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=r("PanelsRightBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=r("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=r("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=r("Parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=r("ParkingCircleOff",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=r("ParkingCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=r("ParkingMeter",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=r("ParkingSquareOff",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=r("ParkingSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=r("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=r("PauseCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=r("PauseOctagon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",key:"1m7qra"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=r("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=r("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=r("PcCase",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=r("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=r("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=r("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=r("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=r("PencilRuler",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=r("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=r("Pentagon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=r("PercentCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=r("PercentDiamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=r("PercentSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=r("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=r("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=r("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=r("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=r("PhoneIncoming",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=r("PhoneMissed",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=r("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=r("PhoneOutgoing",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=r("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=r("PiSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=r("Pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=r("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=r("PictureInPicture2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=r("PictureInPicture",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=r("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=r("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=r("PilcrowSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=r("Pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=r("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=r("PinOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=r("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=r("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=r("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=r("PlaneLanding",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=r("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=r("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=r("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=r("PlaySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=r("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=r("Plug2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=r("PlugZap2",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=r("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=r("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=r("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=r("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=r("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=r("PocketKnife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=r("Pocket",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=r("Podcast",[["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",key:"1n5fvv"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0",key:"jqtxkf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=r("PointerOff",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=r("Pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=r("Popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=r("Popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=r("PoundSterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=r("PowerCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V6",key:"30zewn"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5",key:"1r0tk2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=r("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=r("PowerSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=r("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=r("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=r("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=r("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=r("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=r("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=r("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=r("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=r("Rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=r("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=r("Radiation",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=r("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=r("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=r("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=r("Radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=r("RailSymbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=r("Rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=r("Rat",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=r("Ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=r("ReceiptCent",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=r("ReceiptEuro",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=r("ReceiptIndianRupee",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=r("ReceiptJapaneseYen",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=r("ReceiptPoundSterling",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=r("ReceiptRussianRuble",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=r("ReceiptSwissFranc",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=r("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=r("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=r("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=r("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=r("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=r("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=r("RedoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=r("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=r("RefreshCcwDot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=r("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=r("RefreshCwOff",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=r("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=r("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=r("Regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=r("RemoveFormatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=r("Repeat1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=r("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=r("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=r("ReplaceAll",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=r("Replace",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=r("ReplyAll",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=r("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=r("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=r("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=r("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=r("RockingChair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=r("RollerCoaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=r("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=r("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=r("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=r("RouteOff",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=r("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=r("Router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=r("Rows2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=r("Rows3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=r("Rows4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=r("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=r("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=r("RussianRuble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=r("Sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=r("Salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=r("Sandwich",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=r("SatelliteDish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=r("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=r("SaveAll",[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z",key:"1unput"}],["path",{d:"M10 2v4h6",key:"1p5sg6"}],["path",{d:"M18 18v-7h-8v7",key:"1oniuk"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=r("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=r("Scale3d",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=r("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=r("Scaling",[["path",{d:"M21 3 9 15",key:"15kdhq"}],["path",{d:"M12 3H3v18h18v-9",key:"8suug0"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=r("ScanBarcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=r("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=r("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=r("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=r("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=r("ScanText",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=r("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=r("ScatterChart",[["circle",{cx:"7.5",cy:"7.5",r:".5",key:"1x97lo"}],["circle",{cx:"18.5",cy:"5.5",r:".5",key:"56iowl"}],["circle",{cx:"11.5",cy:"11.5",r:".5",key:"m9xkw9"}],["circle",{cx:"7.5",cy:"16.5",r:".5",key:"14ln9z"}],["circle",{cx:"17.5",cy:"14.5",r:".5",key:"14qxqt"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=r("School2",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"8z0lq4"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=r("School",[["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=r("ScissorsLineDashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=r("ScissorsSquareDashedBottom",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=r("ScissorsSquare",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=r("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=r("ScreenShareOff",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=r("ScreenShare",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=r("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=r("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=r("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=r("SearchCode",[["path",{d:"m9 9-2 2 2 2",key:"17gsfh"}],["path",{d:"m13 13 2-2-2-2",key:"186z8k"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=r("SearchSlash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=r("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=r("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=r("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=r("SendToBack",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=r("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=r("SeparatorHorizontal",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=r("SeparatorVertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=r("ServerCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=r("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=r("ServerOff",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=r("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=r("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=r("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=r("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=r("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=r("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=r("Sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=r("Shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=r("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=r("ShieldBan",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m4 5 14 12",key:"1ta6nf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=r("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=r("ShieldEllipsis",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=r("ShieldHalf",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=r("ShieldMinus",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=r("ShieldOff",[["path",{d:"M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2",key:"342pvf"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38",key:"p0ycf4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=r("ShieldPlus",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M12 15V7",key:"1ycneb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=r("ShieldQuestion",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=r("ShieldX",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m14.5 9-5 5",key:"1m49dw"}],["path",{d:"m9.5 9 5 5",key:"wyx7zg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=r("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=r("ShipWheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=r("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=r("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=r("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=r("ShoppingBasket",[["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4",key:"1x2lvw"}],["path",{d:"m9 11 1 9",key:"1ojof7"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m15 11-1 9",key:"5wnq3a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=r("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=r("Shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=r("ShowerHead",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=r("Shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=r("Shrub",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=r("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=r("SigmaSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=r("Sigma",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=r("SignalHigh",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=r("SignalLow",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=r("SignalMedium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=r("SignalZero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=r("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=r("SignpostBig",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=r("Signpost",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=r("Siren",[["path",{d:"M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z",key:"rmc51c"}],["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z",key:"yyvmjy"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=r("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=r("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=r("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=r("Slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=r("SlashSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=r("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=r("Slice",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=r("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=r("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=r("SmartphoneCharging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=r("SmartphoneNfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=r("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=r("SmilePlus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=r("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=r("Snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=r("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=r("Sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=r("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=r("Space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=r("Spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=r("Sparkle",[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",key:"nraa5p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=r("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=r("Speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=r("Speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=r("SpellCheck2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=r("SpellCheck",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=r("Spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=r("SplitSquareHorizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=r("SplitSquareVertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=r("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=r("SprayCan",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=r("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=r("SquareDashedBottomCode",[["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=r("SquareDashedBottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=r("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=r("SquareStack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=r("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=r("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=r("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=r("Squircle",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=r("Squirrel",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=r("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=r("StarHalf",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=r("StarOff",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=r("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=r("StepBack",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=r("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=r("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=r("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=r("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=r("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=r("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=r("StretchHorizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=r("StretchVertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=r("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=r("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=r("Subtitles",[["path",{d:"M7 13h4",key:"1m1xj0"}],["path",{d:"M15 13h2",key:"vgjay3"}],["path",{d:"M7 9h2",key:"1q072n"}],["path",{d:"M13 9h4",key:"o7fxw0"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z",key:"5somay"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=r("SunDim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=r("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=r("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=r("SunSnow",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=r("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=r("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=r("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=r("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=r("SwatchBook",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h0.01",key:"10821z"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=r("SwissFranc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=r("SwitchCamera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=r("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=r("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=r("Syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=r("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=r("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=r("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=r("TabletSmartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=r("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=r("Tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=r("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=r("Tags",[["path",{d:"M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",key:"gt587u"}],["path",{d:"M6 9.01V9",key:"1flxpt"}],["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=r("Tally1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=r("Tally2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=r("Tally3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=r("Tally4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=r("Tally5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=r("Tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=r("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=r("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=r("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=r("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=r("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=r("TestTube2",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=r("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=r("TestTubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=r("TextCursorInput",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=r("TextCursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=r("TextQuote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=r("TextSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=r("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=r("Theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=r("ThermometerSnowflake",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=r("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=r("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=r("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=r("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=r("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=r("TimerOff",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=r("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=r("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=r("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=r("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=r("Tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=r("Torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=r("TouchpadOff",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=r("Touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=r("TowerControl",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=r("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=r("Tractor",[["path",{d:"M3 4h9l1 7",key:"1ftpo8"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M8 10V4",key:"1y5f7n"}],["path",{d:"M18 5c-.6 0-1 .4-1 1v5.6",key:"10zbvr"}],["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["circle",{cx:"7",cy:"15",r:".5",key:"fbsjqy"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=r("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=r("TrainFrontTunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=r("TrainFront",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=r("TrainTrack",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=r("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=r("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=r("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=r("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=r("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=r("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=r("Trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=r("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=r("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=r("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=r("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=r("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=r("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=r("Turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=r("Tv2",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=r("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=r("Twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=r("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=r("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=r("UmbrellaOff",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=r("Umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=r("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=r("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=r("UndoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=r("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=r("UnfoldHorizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=r("UnfoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=r("Ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=r("Unlink2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=r("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=r("UnlockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=r("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=r("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=r("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=r("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=r("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=r("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=r("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=r("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=r("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=r("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=r("UserRoundCog",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=r("UserRoundMinus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=r("UserRoundPlus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=r("UserRoundSearch",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=r("UserRoundX",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=r("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=r("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=r("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=r("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=r("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=r("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=r("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=r("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=r("UtilityPole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=r("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=r("Vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",key:"1x97lo"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",key:"1kog09"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",key:"14ln9z"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",key:"1jvjsw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=r("Vegan",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=r("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=r("VibrateOff",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=r("Vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=r("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=r("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=r("Videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=r("View",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=r("Voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=r("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=r("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=r("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=r("Volume",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=r("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=r("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=r("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=r("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=r("Wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=r("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=r("Wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=r("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=r("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=r("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=r("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=r("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=r("Webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=r("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=r("Weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=r("WheatOff",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=r("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=r("WholeWord",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=r("WifiOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 4.17-2.65",key:"11utq1"}],["path",{d:"M10.66 5c4.01-.36 8.14.9 11.34 3.76",key:"hxefdu"}],["path",{d:"M16.85 11.25a10 10 0 0 1 2.22 1.68",key:"q734kn"}],["path",{d:"M5 13a10 10 0 0 1 5.24-2.76",key:"piq4yl"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=r("Wifi",[["path",{d:"M5 13a10 10 0 0 1 14 0",key:"6v8j51"}],["path",{d:"M8.5 16.5a5 5 0 0 1 7 0",key:"sej527"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["line",{x1:"12",x2:"12.01",y1:"20",y2:"20",key:"of4bc4"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=r("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=r("WineOff",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=r("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=r("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=r("WrapText",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=r("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=r("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=r("XOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=r("XSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=r("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=r("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=r("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=r("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=r("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=r("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Eo,AArrowUp:Oo,ALargeSmall:$o,Accessibility:Uo,Activity:ya,ActivitySquare:Zo,AirVent:Wo,Airplay:Go,AlarmClock:Xo,AlarmClockCheck:K1,AlarmClockMinus:X1,AlarmClockOff:Ko,AlarmClockPlus:Q1,AlarmSmoke:Qo,Album:Jo,AlertCircle:pa,AlertOctagon:Yo,AlertTriangle:z1,AlignCenter:n2,AlignCenterHorizontal:e2,AlignCenterVertical:t2,AlignEndHorizontal:a2,AlignEndVertical:r2,AlignHorizontalDistributeCenter:i2,AlignHorizontalDistributeEnd:o2,AlignHorizontalDistributeStart:c2,AlignHorizontalJustifyCenter:s2,AlignHorizontalJustifyEnd:l2,AlignHorizontalJustifyStart:d2,AlignHorizontalSpaceAround:h2,AlignHorizontalSpaceBetween:u2,AlignJustify:y2,AlignLeft:p2,AlignRight:k2,AlignStartHorizontal:m2,AlignStartVertical:f2,AlignVerticalDistributeCenter:v2,AlignVerticalDistributeEnd:g2,AlignVerticalDistributeStart:x2,AlignVerticalJustifyCenter:M2,AlignVerticalJustifyEnd:w2,AlignVerticalJustifyStart:L2,AlignVerticalSpaceAround:S2,AlignVerticalSpaceBetween:j2,Ampersand:C2,Ampersands:_2,Anchor:I2,Angry:b2,Annoyed:z2,Antenna:A2,Anvil:q2,Aperture:T2,AppWindow:N2,Apple:D2,Archive:Xr,ArchiveRestore:P2,ArchiveX:H2,AreaChart:B2,Armchair:R2,ArrowBigDown:F2,ArrowBigDownDash:V2,ArrowBigLeft:O2,ArrowBigLeftDash:E2,ArrowBigRight:U2,ArrowBigRightDash:$2,ArrowBigUp:W2,ArrowBigUpDash:Z2,ArrowDown:hc,ArrowDown01:G2,ArrowDown10:K2,ArrowDownAZ:J1,ArrowDownCircle:X2,ArrowDownFromLine:Q2,ArrowDownLeft:tc,ArrowDownLeftFromCircle:J2,ArrowDownLeftFromSquare:Y2,ArrowDownLeftSquare:ec,ArrowDownNarrowWide:nc,ArrowDownRight:oc,ArrowDownRightFromCircle:ac,ArrowDownRightFromSquare:rc,ArrowDownRightSquare:ic,ArrowDownSquare:cc,ArrowDownToDot:sc,ArrowDownToLine:lc,ArrowDownUp:dc,ArrowDownWideNarrow:Y1,ArrowDownZA:en,ArrowLeft:fc,ArrowLeftCircle:uc,ArrowLeftFromLine:yc,ArrowLeftRight:pc,ArrowLeftSquare:kc,ArrowLeftToLine:mc,ArrowRight:Lc,ArrowRightCircle:vc,ArrowRightFromLine:gc,ArrowRightLeft:xc,ArrowRightSquare:Mc,ArrowRightToLine:wc,ArrowUp:Vc,ArrowUp01:Sc,ArrowUp10:jc,ArrowUpAZ:tn,ArrowUpCircle:Cc,ArrowUpDown:Qr,ArrowUpFromDot:_c,ArrowUpFromLine:Ic,ArrowUpLeft:qc,ArrowUpLeftFromCircle:bc,ArrowUpLeftFromSquare:zc,ArrowUpLeftSquare:Ac,ArrowUpNarrowWide:nn,ArrowUpRight:Pc,ArrowUpRightFromCircle:Tc,ArrowUpRightFromSquare:Nc,ArrowUpRightSquare:Dc,ArrowUpSquare:Hc,ArrowUpToLine:Bc,ArrowUpWideNarrow:Rc,ArrowUpZA:an,ArrowsUpFromLine:Fc,Asterisk:Ec,AsteriskSquare:rn,AtSign:Oc,Atom:$c,AudioLines:Uc,AudioWaveform:Zc,Award:Wc,Axe:Gc,Axis3d:on,Baby:Kc,Backpack:Xc,Badge:us,BadgeAlert:Qc,BadgeCent:Jc,BadgeCheck:cn,BadgeDollarSign:Yc,BadgeEuro:es,BadgeHelp:ts,BadgeIndianRupee:ns,BadgeInfo:as,BadgeJapaneseYen:rs,BadgeMinus:is,BadgePercent:os,BadgePlus:cs,BadgePoundSterling:ss,BadgeRussianRuble:ls,BadgeSwissFranc:ds,BadgeX:hs,BaggageClaim:ys,Ban:ps,Banana:ks,Banknote:ms,BarChart:ws,BarChart2:Jr,BarChart3:fs,BarChart4:vs,BarChartBig:gs,BarChartHorizontal:Ms,BarChartHorizontalBig:xs,Barcode:Ls,Baseline:Ss,Bath:js,Battery:ti,BatteryCharging:Cs,BatteryFull:_s,BatteryLow:Yr,BatteryMedium:ei,BatteryWarning:Is,Beaker:bs,Bean:As,BeanOff:zs,Bed:Ns,BedDouble:qs,BedSingle:Ts,Beef:Ds,Beer:Ps,Bell:ni,BellDot:Hs,BellElectric:Bs,BellMinus:Rs,BellOff:Vs,BellPlus:Fs,BellRing:Es,BetweenHorizontalEnd:sn,BetweenHorizontalStart:ln,BetweenVerticalEnd:Os,BetweenVerticalStart:$s,Bike:Us,Binary:Zs,Biohazard:Ws,Bird:Gs,Bitcoin:Ks,Blend:Xs,Blinds:Qs,Blocks:Js,Bluetooth:nl,BluetoothConnected:Ys,BluetoothOff:el,BluetoothSearching:tl,Bold:al,Bolt:rl,Bomb:il,Bone:ol,Book:ka,BookA:cl,BookAudio:sl,BookCheck:ll,BookCopy:dl,BookDashed:dn,BookDown:hl,BookHeadphones:ul,BookHeart:yl,BookImage:pl,BookKey:kl,BookLock:ml,BookMarked:fl,BookMinus:vl,BookOpen:Qa,BookOpenCheck:gl,BookOpenText:xl,BookPlus:Ml,BookText:wl,BookType:Ll,BookUp:jl,BookUp2:Sl,BookUser:Cl,BookX:_l,Bookmark:ql,BookmarkCheck:Il,BookmarkMinus:bl,BookmarkPlus:zl,BookmarkX:Al,BoomBox:Tl,Bot:Nl,Box:Pl,BoxSelect:Dl,Boxes:Hl,Braces:hn,Brackets:Bl,Brain:A1,BrainCircuit:ai,BrainCog:Rl,BrickWall:Vl,Briefcase:Ja,BringToFront:Fl,Brush:El,Bug:Ul,BugOff:Ol,BugPlay:$l,Building:Wl,Building2:Zl,Bus:Kl,BusFront:Gl,Cable:Ql,CableCar:Xl,Cake:Yl,CakeSlice:Jl,Calculator:ed,Calendar:Lt,CalendarCheck:ri,CalendarCheck2:td,CalendarClock:nd,CalendarDays:ii,CalendarHeart:ad,CalendarMinus:rd,CalendarOff:id,CalendarPlus:od,CalendarRange:cd,CalendarSearch:sd,CalendarX:dd,CalendarX2:ld,Camera:oi,CameraOff:hd,CandlestickChart:ud,Candy:kd,CandyCane:yd,CandyOff:pd,Car:ci,CarFront:md,CarTaxiFront:fd,Caravan:vd,Carrot:gd,CaseLower:xd,CaseSensitive:Md,CaseUpper:wd,CassetteTape:Ld,Cast:Sd,Castle:jd,Cat:Cd,Cctv:_d,Check:er,CheckCheck:Id,CheckCircle:Ya,CheckCircle2:st,CheckSquare:si,CheckSquare2:bd,ChefHat:zd,Cherry:Ad,ChevronDown:q1,ChevronDownCircle:qd,ChevronDownSquare:Td,ChevronFirst:Nd,ChevronLast:Dd,ChevronLeft:tr,ChevronLeftCircle:Pd,ChevronLeftSquare:Hd,ChevronRight:Wt,ChevronRightCircle:Bd,ChevronRightSquare:Rd,ChevronUp:Ed,ChevronUpCircle:Vd,ChevronUpSquare:Fd,ChevronsDown:$d,ChevronsDownUp:Od,ChevronsLeft:Zd,ChevronsLeftRight:Ud,ChevronsRight:Gd,ChevronsRightLeft:Wd,ChevronsUp:Xd,ChevronsUpDown:Kd,Chrome:Qd,Church:Jd,Cigarette:e0,CigaretteOff:Yd,Circle:r1,CircleDashed:t0,CircleDollarSign:n0,CircleDot:r0,CircleDotDashed:a0,CircleEllipsis:i0,CircleEqual:o0,CircleOff:c0,CircleSlash:s0,CircleSlash2:un,CircleUser:pn,CircleUserRound:yn,CircuitBoard:l0,Citrus:d0,Clapperboard:h0,Clipboard:v0,ClipboardCheck:u0,ClipboardCopy:y0,ClipboardList:p0,ClipboardPaste:k0,ClipboardPen:mn,ClipboardPenLine:kn,ClipboardType:m0,ClipboardX:f0,Clock:St,Clock1:g0,Clock10:x0,Clock11:M0,Clock12:w0,Clock2:L0,Clock3:S0,Clock4:j0,Clock5:C0,Clock6:_0,Clock7:I0,Clock8:b0,Clock9:z0,Cloud:$0,CloudCog:A0,CloudDrizzle:q0,CloudFog:T0,CloudHail:N0,CloudLightning:D0,CloudMoon:H0,CloudMoonRain:P0,CloudOff:B0,CloudRain:V0,CloudRainWind:R0,CloudSnow:F0,CloudSun:O0,CloudSunRain:E0,Cloudy:U0,Clover:Z0,Club:W0,Code:li,Code2:G0,CodeSquare:fn,Codepen:K0,Codesandbox:X0,Coffee:di,Cog:Q0,Coins:J0,Columns2:vn,Columns3:gn,Columns4:Y0,Combine:eh,Command:th,Compass:nh,Component:ah,Computer:rh,ConciergeBell:ih,Cone:oh,Construction:ch,Contact:lh,Contact2:sh,Container:dh,Contrast:hh,Cookie:uh,CookingPot:yh,Copy:gh,CopyCheck:ph,CopyMinus:kh,CopyPlus:mh,CopySlash:fh,CopyX:vh,Copyleft:xh,Copyright:Mh,CornerDownLeft:wh,CornerDownRight:Lh,CornerLeftDown:Sh,CornerLeftUp:jh,CornerRightDown:Ch,CornerRightUp:_h,CornerUpLeft:Ih,CornerUpRight:bh,Cpu:zh,CreativeCommons:Ah,CreditCard:qh,Croissant:Th,Crop:Nh,Cross:Dh,Crosshair:Ph,Crown:Hh,Cuboid:Bh,CupSoda:Rh,Currency:Vh,Cylinder:Fh,Database:$h,DatabaseBackup:Eh,DatabaseZap:Oh,Delete:Uh,Dessert:Zh,Diameter:Wh,Diamond:Gh,Dice1:Kh,Dice2:Xh,Dice3:Qh,Dice4:Jh,Dice5:Yh,Dice6:eu,Dices:tu,Diff:nu,Disc:ou,Disc2:au,Disc3:ru,DiscAlbum:iu,Divide:lu,DivideCircle:cu,DivideSquare:su,Dna:hu,DnaOff:du,Dog:uu,DollarSign:nr,Donut:yu,DoorClosed:pu,DoorOpen:ku,Dot:mu,DotSquare:xn,Download:hi,DownloadCloud:fu,DraftingCompass:vu,Drama:gu,Dribbble:xu,Drill:Mu,Droplet:wu,Droplets:Lu,Drum:Su,Drumstick:ju,Dumbbell:ui,Ear:_u,EarOff:Cu,Eclipse:Iu,Egg:Au,EggFried:bu,EggOff:zu,Equal:Tu,EqualNot:qu,EqualSquare:Mn,Eraser:Nu,Euro:Du,Expand:Pu,ExternalLink:Hu,Eye:Ru,EyeOff:Bu,Facebook:Vu,Factory:Fu,Fan:Eu,FastForward:Ou,Feather:$u,Fence:Uu,FerrisWheel:Zu,Figma:Wu,File:Wy,FileArchive:Gu,FileAudio:Xu,FileAudio2:Ku,FileAxis3d:wn,FileBadge:Ju,FileBadge2:Qu,FileBarChart:ey,FileBarChart2:Yu,FileBox:ty,FileCheck:ay,FileCheck2:ny,FileClock:ry,FileCode:oy,FileCode2:iy,FileCog:Ln,FileDiff:cy,FileDigit:sy,FileDown:ly,FileHeart:dy,FileImage:hy,FileInput:uy,FileJson:py,FileJson2:yy,FileKey:my,FileKey2:ky,FileLineChart:fy,FileLock:gy,FileLock2:vy,FileMinus:My,FileMinus2:xy,FileMusic:wy,FileOutput:Ly,FilePen:jn,FilePenLine:Sn,FilePieChart:Sy,FilePlus:Cy,FilePlus2:jy,FileQuestion:_y,FileScan:Iy,FileSearch:zy,FileSearch2:by,FileSliders:Ay,FileSpreadsheet:qy,FileStack:Ty,FileSymlink:Ny,FileTerminal:Dy,FileText:Py,FileType:By,FileType2:Hy,FileUp:Ry,FileVideo:Fy,FileVideo2:Vy,FileVolume:Oy,FileVolume2:Ey,FileWarning:$y,FileX:Zy,FileX2:Uy,Files:Gy,Film:Ky,Filter:Qy,FilterX:Xy,Fingerprint:Jy,FireExtinguisher:Yy,Fish:np,FishOff:ep,FishSymbol:tp,Flag:op,FlagOff:ap,FlagTriangleLeft:rp,FlagTriangleRight:ip,Flame:sp,FlameKindling:cp,Flashlight:dp,FlashlightOff:lp,FlaskConical:up,FlaskConicalOff:hp,FlaskRound:yp,FlipHorizontal:kp,FlipHorizontal2:pp,FlipVertical:fp,FlipVertical2:mp,Flower:gp,Flower2:vp,Focus:xp,FoldHorizontal:Mp,FoldVertical:wp,Folder:ma,FolderArchive:Lp,FolderCheck:Sp,FolderClock:jp,FolderClosed:Cp,FolderCog:Cn,FolderDot:_p,FolderDown:Ip,FolderGit:zp,FolderGit2:bp,FolderHeart:Ap,FolderInput:qp,FolderKanban:yi,FolderKey:Tp,FolderLock:Np,FolderMinus:Dp,FolderOpen:Hp,FolderOpenDot:Pp,FolderOutput:Bp,FolderPen:_n,FolderPlus:Rp,FolderRoot:Vp,FolderSearch:Ep,FolderSearch2:Fp,FolderSymlink:Op,FolderSync:$p,FolderTree:Up,FolderUp:Zp,FolderX:Wp,Folders:Gp,Footprints:Kp,Forklift:Xp,FormInput:Qp,Forward:Jp,Frame:Yp,Framer:ek,Frown:tk,Fuel:nk,Fullscreen:ak,FunctionSquare:rk,GalleryHorizontal:ok,GalleryHorizontalEnd:ik,GalleryThumbnails:ck,GalleryVertical:lk,GalleryVerticalEnd:sk,Gamepad:hk,Gamepad2:dk,GanttChart:uk,GanttChartSquare:Vt,Gauge:pk,GaugeCircle:yk,Gavel:kk,Gem:mk,Ghost:fk,Gift:vk,GitBranch:pi,GitBranchPlus:gk,GitCommitHorizontal:In,GitCommitVertical:xk,GitCompare:wk,GitCompareArrows:Mk,GitFork:Lk,GitGraph:Sk,GitMerge:jk,GitPullRequest:Ak,GitPullRequestArrow:Ck,GitPullRequestClosed:_k,GitPullRequestCreate:bk,GitPullRequestCreateArrow:Ik,GitPullRequestDraft:zk,Github:qk,Gitlab:Tk,GlassWater:Nk,Glasses:Dk,Globe:Hk,Globe2:Pk,Goal:Bk,Grab:Rk,GraduationCap:Vk,Grape:Fk,Grid2x2:bn,Grid3x3:Ft,Grip:$k,GripHorizontal:Ek,GripVertical:Ok,Group:Uk,Guitar:Zk,Hammer:Wk,Hand:Kk,HandMetal:Gk,HardDrive:Jk,HardDriveDownload:Xk,HardDriveUpload:Qk,HardHat:Yk,Hash:e4,Haze:t4,HdmiPort:n4,Heading:l4,Heading1:a4,Heading2:r4,Heading3:i4,Heading4:o4,Heading5:c4,Heading6:s4,Headphones:d4,Heart:i1,HeartCrack:h4,HeartHandshake:u4,HeartOff:y4,HeartPulse:p4,Heater:k4,HelpCircle:m4,HelpingHand:f4,Hexagon:v4,Highlighter:g4,History:x4,Home:ki,Hop:w4,HopOff:M4,Hotel:L4,Hourglass:S4,IceCream:C4,IceCream2:j4,Image:A4,ImageDown:_4,ImageMinus:I4,ImageOff:b4,ImagePlus:z4,Import:q4,Inbox:T4,Indent:N4,IndianRupee:D4,Infinity:P4,Info:H4,InspectionPanel:B4,Instagram:R4,Italic:V4,IterationCcw:F4,IterationCw:E4,JapaneseYen:O4,Joystick:$4,Kanban:U4,KanbanSquare:An,KanbanSquareDashed:zn,Key:G4,KeyRound:Z4,KeySquare:W4,Keyboard:X4,KeyboardMusic:K4,Lamp:n5,LampCeiling:Q4,LampDesk:J4,LampFloor:Y4,LampWallDown:e5,LampWallUp:t5,LandPlot:a5,Landmark:r5,Languages:mi,Laptop:o5,Laptop2:i5,Lasso:s5,LassoSelect:c5,Laugh:l5,Layers:u5,Layers2:d5,Layers3:h5,LayoutDashboard:fi,LayoutGrid:vi,LayoutList:y5,LayoutPanelLeft:p5,LayoutPanelTop:k5,LayoutTemplate:m5,Leaf:gi,LeafyGreen:f5,Library:x5,LibraryBig:v5,LibrarySquare:g5,LifeBuoy:M5,Ligature:w5,Lightbulb:fa,LightbulbOff:L5,LineChart:S5,Link:ar,Link2:C5,Link2Off:j5,Linkedin:_5,List:wi,ListChecks:rr,ListCollapse:I5,ListEnd:b5,ListFilter:xi,ListMinus:z5,ListMusic:A5,ListOrdered:q5,ListPlus:T5,ListRestart:N5,ListStart:D5,ListTodo:P5,ListTree:Mi,ListVideo:H5,ListX:B5,Loader:R5,Loader2:Li,Locate:E5,LocateFixed:V5,LocateOff:F5,Lock:$5,LockKeyhole:O5,LogIn:U5,LogOut:Z5,Lollipop:W5,Luggage:G5,MSquare:K5,Magnet:X5,Mail:i3,MailCheck:Q5,MailMinus:J5,MailOpen:Y5,MailPlus:e3,MailQuestion:t3,MailSearch:n3,MailWarning:a3,MailX:r3,Mailbox:o3,Mails:c3,Map:h3,MapPin:l3,MapPinOff:s3,MapPinned:d3,Martini:u3,Maximize:p3,Maximize2:y3,Medal:k3,Megaphone:f3,MegaphoneOff:m3,Meh:v3,MemoryStick:g3,Menu:M3,MenuSquare:x3,Merge:w3,MessageCircle:T3,MessageCircleCode:L3,MessageCircleDashed:S3,MessageCircleHeart:j3,MessageCircleMore:C3,MessageCircleOff:_3,MessageCirclePlus:I3,MessageCircleQuestion:b3,MessageCircleReply:z3,MessageCircleWarning:A3,MessageCircleX:q3,MessageSquare:G3,MessageSquareCode:N3,MessageSquareDashed:D3,MessageSquareDiff:P3,MessageSquareDot:H3,MessageSquareHeart:B3,MessageSquareMore:R3,MessageSquareOff:V3,MessageSquarePlus:F3,MessageSquareQuote:E3,MessageSquareReply:O3,MessageSquareShare:$3,MessageSquareText:U3,MessageSquareWarning:Z3,MessageSquareX:W3,MessagesSquare:K3,Mic:J3,Mic2:X3,MicOff:Q3,Microscope:Y3,Microwave:em,Milestone:tm,Milk:am,MilkOff:nm,Minimize:im,Minimize2:rm,Minus:sm,MinusCircle:om,MinusSquare:cm,Monitor:xm,MonitorCheck:lm,MonitorDot:dm,MonitorDown:hm,MonitorOff:um,MonitorPause:ym,MonitorPlay:pm,MonitorSmartphone:km,MonitorSpeaker:mm,MonitorStop:fm,MonitorUp:vm,MonitorX:gm,Moon:Si,MoonStar:Mm,MoreHorizontal:wm,MoreVertical:Lm,Mountain:jm,MountainSnow:Sm,Mouse:zm,MousePointer:bm,MousePointer2:Cm,MousePointerClick:_m,MousePointerSquare:qn,MousePointerSquareDashed:Im,Move:Om,Move3d:Tn,MoveDiagonal:qm,MoveDiagonal2:Am,MoveDown:Dm,MoveDownLeft:Tm,MoveDownRight:Nm,MoveHorizontal:Pm,MoveLeft:Hm,MoveRight:Bm,MoveUp:Fm,MoveUpLeft:Rm,MoveUpRight:Vm,MoveVertical:Em,Music:ji,Music2:$m,Music3:Um,Music4:Zm,Navigation:Xm,Navigation2:Gm,Navigation2Off:Wm,NavigationOff:Km,Network:Qm,Newspaper:Jm,Nfc:Ym,Notebook:a6,NotebookPen:e6,NotebookTabs:t6,NotebookText:n6,NotepadText:i6,NotepadTextDashed:r6,Nut:c6,NutOff:o6,Octagon:s6,Option:l6,Orbit:d6,Outdent:h6,Package:ir,Package2:u6,PackageCheck:y6,PackageMinus:p6,PackageOpen:k6,PackagePlus:m6,PackageSearch:f6,PackageX:v6,PaintBucket:g6,PaintRoller:x6,Paintbrush:w6,Paintbrush2:M6,Palette:L6,Palmtree:S6,PanelBottom:_6,PanelBottomClose:j6,PanelBottomDashed:Nn,PanelBottomOpen:C6,PanelLeft:Bn,PanelLeftClose:Dn,PanelLeftDashed:Pn,PanelLeftOpen:Hn,PanelRight:z6,PanelRightClose:I6,PanelRightDashed:Rn,PanelRightOpen:b6,PanelTop:T6,PanelTopClose:A6,PanelTopDashed:Vn,PanelTopOpen:q6,PanelsLeftBottom:N6,PanelsRightBottom:D6,PanelsTopLeft:Fn,Paperclip:P6,Parentheses:H6,ParkingCircle:R6,ParkingCircleOff:B6,ParkingMeter:V6,ParkingSquare:E6,ParkingSquareOff:F6,PartyPopper:O6,Pause:or,PauseCircle:$6,PauseOctagon:U6,PawPrint:Z6,PcCase:W6,Pen:On,PenLine:En,PenTool:G6,Pencil:Q6,PencilLine:K6,PencilRuler:X6,Pentagon:J6,Percent:n8,PercentCircle:Y6,PercentDiamond:e8,PercentSquare:t8,PersonStanding:a8,Phone:d8,PhoneCall:r8,PhoneForwarded:i8,PhoneIncoming:o8,PhoneMissed:c8,PhoneOff:s8,PhoneOutgoing:l8,Pi:u8,PiSquare:h8,Piano:y8,PictureInPicture:k8,PictureInPicture2:p8,PieChart:m8,PiggyBank:f8,Pilcrow:g8,PilcrowSquare:v8,Pill:x8,Pin:w8,PinOff:M8,Pipette:L8,Pizza:S8,Plane:Ci,PlaneLanding:j8,PlaneTakeoff:C8,Play:T1,PlayCircle:_8,PlaySquare:I8,Plug:q8,Plug2:b8,PlugZap:A8,PlugZap2:z8,Plus:lt,PlusCircle:T8,PlusSquare:N8,Pocket:P8,PocketKnife:D8,Podcast:H8,Pointer:R8,PointerOff:B8,Popcorn:V8,Popsicle:F8,PoundSterling:E8,Power:Z8,PowerCircle:O8,PowerOff:$8,PowerSquare:U8,Presentation:W8,Printer:G8,Projector:K8,Puzzle:X8,Pyramid:Q8,QrCode:J8,Quote:Y8,Rabbit:ef,Radar:tf,Radiation:nf,Radio:of,RadioReceiver:af,RadioTower:rf,Radius:cf,RailSymbol:sf,Rainbow:lf,Rat:df,Ratio:hf,Receipt:xf,ReceiptCent:uf,ReceiptEuro:yf,ReceiptIndianRupee:pf,ReceiptJapaneseYen:kf,ReceiptPoundSterling:mf,ReceiptRussianRuble:ff,ReceiptSwissFranc:vf,ReceiptText:gf,RectangleHorizontal:Mf,RectangleVertical:wf,Recycle:Lf,Redo:Cf,Redo2:Sf,RedoDot:jf,RefreshCcw:If,RefreshCcwDot:_f,RefreshCw:_i,RefreshCwOff:bf,Refrigerator:zf,Regex:Af,RemoveFormatting:qf,Repeat:Ii,Repeat1:Tf,Repeat2:Nf,Replace:Pf,ReplaceAll:Df,Reply:Bf,ReplyAll:Hf,Rewind:Rf,Ribbon:Vf,Rocket:bi,RockingChair:Ff,RollerCoaster:Ef,Rotate3d:$n,RotateCcw:cr,RotateCw:Of,Route:Uf,RouteOff:$f,Router:Zf,Rows2:Un,Rows3:Zn,Rows4:Wf,Rss:Gf,Ruler:Kf,RussianRuble:Xf,Sailboat:Qf,Salad:Jf,Sandwich:Yf,Satellite:t7,SatelliteDish:e7,Save:Gt,SaveAll:n7,Scale:a7,Scale3d:Wn,Scaling:r7,Scan:h7,ScanBarcode:i7,ScanEye:o7,ScanFace:c7,ScanLine:s7,ScanSearch:l7,ScanText:d7,ScatterChart:u7,School:p7,School2:y7,Scissors:v7,ScissorsLineDashed:k7,ScissorsSquare:f7,ScissorsSquareDashedBottom:m7,ScreenShare:x7,ScreenShareOff:g7,Scroll:w7,ScrollText:M7,Search:sr,SearchCheck:L7,SearchCode:S7,SearchSlash:j7,SearchX:C7,Send:I7,SendHorizontal:Gn,SendToBack:_7,SeparatorHorizontal:b7,SeparatorVertical:z7,Server:N7,ServerCog:A7,ServerCrash:q7,ServerOff:T7,Settings:N1,Settings2:D7,Shapes:P7,Share:B7,Share2:H7,Sheet:R7,Shell:V7,Shield:zi,ShieldAlert:F7,ShieldBan:E7,ShieldCheck:O7,ShieldEllipsis:$7,ShieldHalf:U7,ShieldMinus:Z7,ShieldOff:W7,ShieldPlus:G7,ShieldQuestion:K7,ShieldX:Kn,Ship:Q7,ShipWheel:X7,Shirt:J7,ShoppingBag:Y7,ShoppingBasket:ev,ShoppingCart:tv,Shovel:nv,ShowerHead:av,Shrink:rv,Shrub:iv,Shuffle:ov,Sigma:sv,SigmaSquare:cv,Signal:yv,SignalHigh:lv,SignalLow:dv,SignalMedium:hv,SignalZero:uv,Signpost:kv,SignpostBig:pv,Siren:mv,SkipBack:fv,SkipForward:vv,Skull:gv,Slack:xv,Slash:Mv,SlashSquare:Xn,Slice:wv,Sliders:Sv,SlidersHorizontal:Lv,Smartphone:_v,SmartphoneCharging:jv,SmartphoneNfc:Cv,Smile:bv,SmilePlus:Iv,Snail:zv,Snowflake:Av,Sofa:qv,Soup:Tv,Space:Nv,Spade:Dv,Sparkle:Pv,Sparkles:Ot,Speaker:Hv,Speech:Bv,SpellCheck:Vv,SpellCheck2:Rv,Spline:Fv,Split:$v,SplitSquareHorizontal:Ev,SplitSquareVertical:Ov,SprayCan:Uv,Sprout:Zv,Square:Xv,SquareDashedBottom:Gv,SquareDashedBottomCode:Wv,SquarePen:rt,SquareStack:Kv,SquareUser:Jn,SquareUserRound:Qn,Squircle:Qv,Squirrel:Jv,Stamp:Yv,Star:lr,StarHalf:eg,StarOff:tg,StepBack:ng,StepForward:ag,Stethoscope:rg,Sticker:ig,StickyNote:og,StopCircle:cg,Store:sg,StretchHorizontal:lg,StretchVertical:dg,Strikethrough:hg,Subscript:ug,Subtitles:yg,Sun:Ai,SunDim:pg,SunMedium:kg,SunMoon:mg,SunSnow:fg,Sunrise:vg,Sunset:gg,Superscript:xg,SwatchBook:Mg,SwissFranc:wg,SwitchCamera:Lg,Sword:Sg,Swords:jg,Syringe:Cg,Table:bg,Table2:_g,TableProperties:Ig,Tablet:Ag,TabletSmartphone:zg,Tablets:qg,Tag:Tg,Tags:Ng,Tally1:Dg,Tally2:Pg,Tally3:Hg,Tally4:Bg,Tally5:Rg,Tangent:Vg,Target:Se,Tent:Eg,TentTree:Fg,Terminal:$g,TerminalSquare:Og,TestTube:Zg,TestTube2:Ug,TestTubes:Wg,Text:Qg,TextCursor:Kg,TextCursorInput:Gg,TextQuote:Xg,TextSelect:Yn,Theater:Jg,Thermometer:tx,ThermometerSnowflake:Yg,ThermometerSun:ex,ThumbsDown:nx,ThumbsUp:ax,Ticket:rx,Timer:cx,TimerOff:ix,TimerReset:ox,ToggleLeft:sx,ToggleRight:lx,Tornado:dx,Torus:hx,Touchpad:yx,TouchpadOff:ux,TowerControl:px,ToyBrick:kx,Tractor:mx,TrafficCone:fx,TrainFront:gx,TrainFrontTunnel:vx,TrainTrack:xx,TramFront:ea,Trash:Mx,Trash2:D1,TreeDeciduous:wx,TreePine:Lx,Trees:Sx,Trello:jx,TrendingDown:Cx,TrendingUp:dr,Triangle:Ix,TriangleRight:_x,Trophy:va,Truck:bx,Turtle:zx,Tv:qx,Tv2:Ax,Twitch:Tx,Twitter:Nx,Type:Dx,Umbrella:Hx,UmbrellaOff:Px,Underline:Bx,Undo:Fx,Undo2:Rx,UndoDot:Vx,UnfoldHorizontal:Ex,UnfoldVertical:Ox,Ungroup:$x,Unlink:Zx,Unlink2:Ux,Unlock:Gx,UnlockKeyhole:Wx,Unplug:Kx,Upload:qi,UploadCloud:Xx,Usb:Qx,User:Ti,UserCheck:Jx,UserCog:Yx,UserMinus:e9,UserPlus:t9,UserRound:oa,UserRoundCheck:ta,UserRoundCog:na,UserRoundMinus:aa,UserRoundPlus:ra,UserRoundSearch:n9,UserRoundX:ia,UserSearch:a9,UserX:r9,Users:hr,UsersRound:ca,Utensils:o9,UtensilsCrossed:i9,UtilityPole:c9,Variable:s9,Vault:l9,Vegan:d9,VenetianMask:h9,Vibrate:y9,VibrateOff:u9,Video:k9,VideoOff:p9,Videotape:m9,View:f9,Voicemail:v9,Volume:w9,Volume1:g9,Volume2:x9,VolumeX:M9,Vote:L9,Wallet:C9,Wallet2:S9,WalletCards:j9,Wallpaper:_9,Wand:b9,Wand2:I9,Warehouse:z9,WashingMachine:A9,Watch:q9,Waves:T9,Waypoints:N9,Webcam:D9,Webhook:P9,Weight:H9,Wheat:R9,WheatOff:B9,WholeWord:V9,Wifi:E9,WifiOff:F9,Wind:O9,Wine:U9,WineOff:$9,Workflow:Z9,WrapText:W9,Wrench:G9,X:Ae,XCircle:K9,XOctagon:X9,XSquare:Q9,Youtube:J9,Zap:jt,ZapOff:Y9,ZoomIn:eM,ZoomOut:tM},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Eo,AArrowDownIcon:Eo,AArrowUp:Oo,AArrowUpIcon:Oo,ALargeSmall:$o,ALargeSmallIcon:$o,Accessibility:Uo,AccessibilityIcon:Uo,Activity:ya,ActivityIcon:ya,ActivitySquare:Zo,ActivitySquareIcon:Zo,AirVent:Wo,AirVentIcon:Wo,Airplay:Go,AirplayIcon:Go,AlarmCheck:K1,AlarmCheckIcon:K1,AlarmClock:Xo,AlarmClockCheck:K1,AlarmClockCheckIcon:K1,AlarmClockIcon:Xo,AlarmClockMinus:X1,AlarmClockMinusIcon:X1,AlarmClockOff:Ko,AlarmClockOffIcon:Ko,AlarmClockPlus:Q1,AlarmClockPlusIcon:Q1,AlarmMinus:X1,AlarmMinusIcon:X1,AlarmPlus:Q1,AlarmPlusIcon:Q1,AlarmSmoke:Qo,AlarmSmokeIcon:Qo,Album:Jo,AlbumIcon:Jo,AlertCircle:pa,AlertCircleIcon:pa,AlertOctagon:Yo,AlertOctagonIcon:Yo,AlertTriangle:z1,AlertTriangleIcon:z1,AlignCenter:n2,AlignCenterHorizontal:e2,AlignCenterHorizontalIcon:e2,AlignCenterIcon:n2,AlignCenterVertical:t2,AlignCenterVerticalIcon:t2,AlignEndHorizontal:a2,AlignEndHorizontalIcon:a2,AlignEndVertical:r2,AlignEndVerticalIcon:r2,AlignHorizontalDistributeCenter:i2,AlignHorizontalDistributeCenterIcon:i2,AlignHorizontalDistributeEnd:o2,AlignHorizontalDistributeEndIcon:o2,AlignHorizontalDistributeStart:c2,AlignHorizontalDistributeStartIcon:c2,AlignHorizontalJustifyCenter:s2,AlignHorizontalJustifyCenterIcon:s2,AlignHorizontalJustifyEnd:l2,AlignHorizontalJustifyEndIcon:l2,AlignHorizontalJustifyStart:d2,AlignHorizontalJustifyStartIcon:d2,AlignHorizontalSpaceAround:h2,AlignHorizontalSpaceAroundIcon:h2,AlignHorizontalSpaceBetween:u2,AlignHorizontalSpaceBetweenIcon:u2,AlignJustify:y2,AlignJustifyIcon:y2,AlignLeft:p2,AlignLeftIcon:p2,AlignRight:k2,AlignRightIcon:k2,AlignStartHorizontal:m2,AlignStartHorizontalIcon:m2,AlignStartVertical:f2,AlignStartVerticalIcon:f2,AlignVerticalDistributeCenter:v2,AlignVerticalDistributeCenterIcon:v2,AlignVerticalDistributeEnd:g2,AlignVerticalDistributeEndIcon:g2,AlignVerticalDistributeStart:x2,AlignVerticalDistributeStartIcon:x2,AlignVerticalJustifyCenter:M2,AlignVerticalJustifyCenterIcon:M2,AlignVerticalJustifyEnd:w2,AlignVerticalJustifyEndIcon:w2,AlignVerticalJustifyStart:L2,AlignVerticalJustifyStartIcon:L2,AlignVerticalSpaceAround:S2,AlignVerticalSpaceAroundIcon:S2,AlignVerticalSpaceBetween:j2,AlignVerticalSpaceBetweenIcon:j2,Ampersand:C2,AmpersandIcon:C2,Ampersands:_2,AmpersandsIcon:_2,Anchor:I2,AnchorIcon:I2,Angry:b2,AngryIcon:b2,Annoyed:z2,AnnoyedIcon:z2,Antenna:A2,AntennaIcon:A2,Anvil:q2,AnvilIcon:q2,Aperture:T2,ApertureIcon:T2,AppWindow:N2,AppWindowIcon:N2,Apple:D2,AppleIcon:D2,Archive:Xr,ArchiveIcon:Xr,ArchiveRestore:P2,ArchiveRestoreIcon:P2,ArchiveX:H2,ArchiveXIcon:H2,AreaChart:B2,AreaChartIcon:B2,Armchair:R2,ArmchairIcon:R2,ArrowBigDown:F2,ArrowBigDownDash:V2,ArrowBigDownDashIcon:V2,ArrowBigDownIcon:F2,ArrowBigLeft:O2,ArrowBigLeftDash:E2,ArrowBigLeftDashIcon:E2,ArrowBigLeftIcon:O2,ArrowBigRight:U2,ArrowBigRightDash:$2,ArrowBigRightDashIcon:$2,ArrowBigRightIcon:U2,ArrowBigUp:W2,ArrowBigUpDash:Z2,ArrowBigUpDashIcon:Z2,ArrowBigUpIcon:W2,ArrowDown:hc,ArrowDown01:G2,ArrowDown01Icon:G2,ArrowDown10:K2,ArrowDown10Icon:K2,ArrowDownAZ:J1,ArrowDownAZIcon:J1,ArrowDownAz:J1,ArrowDownAzIcon:J1,ArrowDownCircle:X2,ArrowDownCircleIcon:X2,ArrowDownFromLine:Q2,ArrowDownFromLineIcon:Q2,ArrowDownIcon:hc,ArrowDownLeft:tc,ArrowDownLeftFromCircle:J2,ArrowDownLeftFromCircleIcon:J2,ArrowDownLeftFromSquare:Y2,ArrowDownLeftFromSquareIcon:Y2,ArrowDownLeftIcon:tc,ArrowDownLeftSquare:ec,ArrowDownLeftSquareIcon:ec,ArrowDownNarrowWide:nc,ArrowDownNarrowWideIcon:nc,ArrowDownRight:oc,ArrowDownRightFromCircle:ac,ArrowDownRightFromCircleIcon:ac,ArrowDownRightFromSquare:rc,ArrowDownRightFromSquareIcon:rc,ArrowDownRightIcon:oc,ArrowDownRightSquare:ic,ArrowDownRightSquareIcon:ic,ArrowDownSquare:cc,ArrowDownSquareIcon:cc,ArrowDownToDot:sc,ArrowDownToDotIcon:sc,ArrowDownToLine:lc,ArrowDownToLineIcon:lc,ArrowDownUp:dc,ArrowDownUpIcon:dc,ArrowDownWideNarrow:Y1,ArrowDownWideNarrowIcon:Y1,ArrowDownZA:en,ArrowDownZAIcon:en,ArrowDownZa:en,ArrowDownZaIcon:en,ArrowLeft:fc,ArrowLeftCircle:uc,ArrowLeftCircleIcon:uc,ArrowLeftFromLine:yc,ArrowLeftFromLineIcon:yc,ArrowLeftIcon:fc,ArrowLeftRight:pc,ArrowLeftRightIcon:pc,ArrowLeftSquare:kc,ArrowLeftSquareIcon:kc,ArrowLeftToLine:mc,ArrowLeftToLineIcon:mc,ArrowRight:Lc,ArrowRightCircle:vc,ArrowRightCircleIcon:vc,ArrowRightFromLine:gc,ArrowRightFromLineIcon:gc,ArrowRightIcon:Lc,ArrowRightLeft:xc,ArrowRightLeftIcon:xc,ArrowRightSquare:Mc,ArrowRightSquareIcon:Mc,ArrowRightToLine:wc,ArrowRightToLineIcon:wc,ArrowUp:Vc,ArrowUp01:Sc,ArrowUp01Icon:Sc,ArrowUp10:jc,ArrowUp10Icon:jc,ArrowUpAZ:tn,ArrowUpAZIcon:tn,ArrowUpAz:tn,ArrowUpAzIcon:tn,ArrowUpCircle:Cc,ArrowUpCircleIcon:Cc,ArrowUpDown:Qr,ArrowUpDownIcon:Qr,ArrowUpFromDot:_c,ArrowUpFromDotIcon:_c,ArrowUpFromLine:Ic,ArrowUpFromLineIcon:Ic,ArrowUpIcon:Vc,ArrowUpLeft:qc,ArrowUpLeftFromCircle:bc,ArrowUpLeftFromCircleIcon:bc,ArrowUpLeftFromSquare:zc,ArrowUpLeftFromSquareIcon:zc,ArrowUpLeftIcon:qc,ArrowUpLeftSquare:Ac,ArrowUpLeftSquareIcon:Ac,ArrowUpNarrowWide:nn,ArrowUpNarrowWideIcon:nn,ArrowUpRight:Pc,ArrowUpRightFromCircle:Tc,ArrowUpRightFromCircleIcon:Tc,ArrowUpRightFromSquare:Nc,ArrowUpRightFromSquareIcon:Nc,ArrowUpRightIcon:Pc,ArrowUpRightSquare:Dc,ArrowUpRightSquareIcon:Dc,ArrowUpSquare:Hc,ArrowUpSquareIcon:Hc,ArrowUpToLine:Bc,ArrowUpToLineIcon:Bc,ArrowUpWideNarrow:Rc,ArrowUpWideNarrowIcon:Rc,ArrowUpZA:an,ArrowUpZAIcon:an,ArrowUpZa:an,ArrowUpZaIcon:an,ArrowsUpFromLine:Fc,ArrowsUpFromLineIcon:Fc,Asterisk:Ec,AsteriskIcon:Ec,AsteriskSquare:rn,AsteriskSquareIcon:rn,AtSign:Oc,AtSignIcon:Oc,Atom:$c,AtomIcon:$c,AudioLines:Uc,AudioLinesIcon:Uc,AudioWaveform:Zc,AudioWaveformIcon:Zc,Award:Wc,AwardIcon:Wc,Axe:Gc,AxeIcon:Gc,Axis3D:on,Axis3DIcon:on,Axis3d:on,Axis3dIcon:on,Baby:Kc,BabyIcon:Kc,Backpack:Xc,BackpackIcon:Xc,Badge:us,BadgeAlert:Qc,BadgeAlertIcon:Qc,BadgeCent:Jc,BadgeCentIcon:Jc,BadgeCheck:cn,BadgeCheckIcon:cn,BadgeDollarSign:Yc,BadgeDollarSignIcon:Yc,BadgeEuro:es,BadgeEuroIcon:es,BadgeHelp:ts,BadgeHelpIcon:ts,BadgeIcon:us,BadgeIndianRupee:ns,BadgeIndianRupeeIcon:ns,BadgeInfo:as,BadgeInfoIcon:as,BadgeJapaneseYen:rs,BadgeJapaneseYenIcon:rs,BadgeMinus:is,BadgeMinusIcon:is,BadgePercent:os,BadgePercentIcon:os,BadgePlus:cs,BadgePlusIcon:cs,BadgePoundSterling:ss,BadgePoundSterlingIcon:ss,BadgeRussianRuble:ls,BadgeRussianRubleIcon:ls,BadgeSwissFranc:ds,BadgeSwissFrancIcon:ds,BadgeX:hs,BadgeXIcon:hs,BaggageClaim:ys,BaggageClaimIcon:ys,Ban:ps,BanIcon:ps,Banana:ks,BananaIcon:ks,Banknote:ms,BanknoteIcon:ms,BarChart:ws,BarChart2:Jr,BarChart2Icon:Jr,BarChart3:fs,BarChart3Icon:fs,BarChart4:vs,BarChart4Icon:vs,BarChartBig:gs,BarChartBigIcon:gs,BarChartHorizontal:Ms,BarChartHorizontalBig:xs,BarChartHorizontalBigIcon:xs,BarChartHorizontalIcon:Ms,BarChartIcon:ws,Barcode:Ls,BarcodeIcon:Ls,Baseline:Ss,BaselineIcon:Ss,Bath:js,BathIcon:js,Battery:ti,BatteryCharging:Cs,BatteryChargingIcon:Cs,BatteryFull:_s,BatteryFullIcon:_s,BatteryIcon:ti,BatteryLow:Yr,BatteryLowIcon:Yr,BatteryMedium:ei,BatteryMediumIcon:ei,BatteryWarning:Is,BatteryWarningIcon:Is,Beaker:bs,BeakerIcon:bs,Bean:As,BeanIcon:As,BeanOff:zs,BeanOffIcon:zs,Bed:Ns,BedDouble:qs,BedDoubleIcon:qs,BedIcon:Ns,BedSingle:Ts,BedSingleIcon:Ts,Beef:Ds,BeefIcon:Ds,Beer:Ps,BeerIcon:Ps,Bell:ni,BellDot:Hs,BellDotIcon:Hs,BellElectric:Bs,BellElectricIcon:Bs,BellIcon:ni,BellMinus:Rs,BellMinusIcon:Rs,BellOff:Vs,BellOffIcon:Vs,BellPlus:Fs,BellPlusIcon:Fs,BellRing:Es,BellRingIcon:Es,BetweenHorizonalEnd:sn,BetweenHorizonalEndIcon:sn,BetweenHorizonalStart:ln,BetweenHorizonalStartIcon:ln,BetweenHorizontalEnd:sn,BetweenHorizontalEndIcon:sn,BetweenHorizontalStart:ln,BetweenHorizontalStartIcon:ln,BetweenVerticalEnd:Os,BetweenVerticalEndIcon:Os,BetweenVerticalStart:$s,BetweenVerticalStartIcon:$s,Bike:Us,BikeIcon:Us,Binary:Zs,BinaryIcon:Zs,Biohazard:Ws,BiohazardIcon:Ws,Bird:Gs,BirdIcon:Gs,Bitcoin:Ks,BitcoinIcon:Ks,Blend:Xs,BlendIcon:Xs,Blinds:Qs,BlindsIcon:Qs,Blocks:Js,BlocksIcon:Js,Bluetooth:nl,BluetoothConnected:Ys,BluetoothConnectedIcon:Ys,BluetoothIcon:nl,BluetoothOff:el,BluetoothOffIcon:el,BluetoothSearching:tl,BluetoothSearchingIcon:tl,Bold:al,BoldIcon:al,Bolt:rl,BoltIcon:rl,Bomb:il,BombIcon:il,Bone:ol,BoneIcon:ol,Book:ka,BookA:cl,BookAIcon:cl,BookAudio:sl,BookAudioIcon:sl,BookCheck:ll,BookCheckIcon:ll,BookCopy:dl,BookCopyIcon:dl,BookDashed:dn,BookDashedIcon:dn,BookDown:hl,BookDownIcon:hl,BookHeadphones:ul,BookHeadphonesIcon:ul,BookHeart:yl,BookHeartIcon:yl,BookIcon:ka,BookImage:pl,BookImageIcon:pl,BookKey:kl,BookKeyIcon:kl,BookLock:ml,BookLockIcon:ml,BookMarked:fl,BookMarkedIcon:fl,BookMinus:vl,BookMinusIcon:vl,BookOpen:Qa,BookOpenCheck:gl,BookOpenCheckIcon:gl,BookOpenIcon:Qa,BookOpenText:xl,BookOpenTextIcon:xl,BookPlus:Ml,BookPlusIcon:Ml,BookTemplate:dn,BookTemplateIcon:dn,BookText:wl,BookTextIcon:wl,BookType:Ll,BookTypeIcon:Ll,BookUp:jl,BookUp2:Sl,BookUp2Icon:Sl,BookUpIcon:jl,BookUser:Cl,BookUserIcon:Cl,BookX:_l,BookXIcon:_l,Bookmark:ql,BookmarkCheck:Il,BookmarkCheckIcon:Il,BookmarkIcon:ql,BookmarkMinus:bl,BookmarkMinusIcon:bl,BookmarkPlus:zl,BookmarkPlusIcon:zl,BookmarkX:Al,BookmarkXIcon:Al,BoomBox:Tl,BoomBoxIcon:Tl,Bot:Nl,BotIcon:Nl,Box:Pl,BoxIcon:Pl,BoxSelect:Dl,BoxSelectIcon:Dl,Boxes:Hl,BoxesIcon:Hl,Braces:hn,BracesIcon:hn,Brackets:Bl,BracketsIcon:Bl,Brain:A1,BrainCircuit:ai,BrainCircuitIcon:ai,BrainCog:Rl,BrainCogIcon:Rl,BrainIcon:A1,BrickWall:Vl,BrickWallIcon:Vl,Briefcase:Ja,BriefcaseIcon:Ja,BringToFront:Fl,BringToFrontIcon:Fl,Brush:El,BrushIcon:El,Bug:Ul,BugIcon:Ul,BugOff:Ol,BugOffIcon:Ol,BugPlay:$l,BugPlayIcon:$l,Building:Wl,Building2:Zl,Building2Icon:Zl,BuildingIcon:Wl,Bus:Kl,BusFront:Gl,BusFrontIcon:Gl,BusIcon:Kl,Cable:Ql,CableCar:Xl,CableCarIcon:Xl,CableIcon:Ql,Cake:Yl,CakeIcon:Yl,CakeSlice:Jl,CakeSliceIcon:Jl,Calculator:ed,CalculatorIcon:ed,Calendar:Lt,CalendarCheck:ri,CalendarCheck2:td,CalendarCheck2Icon:td,CalendarCheckIcon:ri,CalendarClock:nd,CalendarClockIcon:nd,CalendarDays:ii,CalendarDaysIcon:ii,CalendarHeart:ad,CalendarHeartIcon:ad,CalendarIcon:Lt,CalendarMinus:rd,CalendarMinusIcon:rd,CalendarOff:id,CalendarOffIcon:id,CalendarPlus:od,CalendarPlusIcon:od,CalendarRange:cd,CalendarRangeIcon:cd,CalendarSearch:sd,CalendarSearchIcon:sd,CalendarX:dd,CalendarX2:ld,CalendarX2Icon:ld,CalendarXIcon:dd,Camera:oi,CameraIcon:oi,CameraOff:hd,CameraOffIcon:hd,CandlestickChart:ud,CandlestickChartIcon:ud,Candy:kd,CandyCane:yd,CandyCaneIcon:yd,CandyIcon:kd,CandyOff:pd,CandyOffIcon:pd,Car:ci,CarFront:md,CarFrontIcon:md,CarIcon:ci,CarTaxiFront:fd,CarTaxiFrontIcon:fd,Caravan:vd,CaravanIcon:vd,Carrot:gd,CarrotIcon:gd,CaseLower:xd,CaseLowerIcon:xd,CaseSensitive:Md,CaseSensitiveIcon:Md,CaseUpper:wd,CaseUpperIcon:wd,CassetteTape:Ld,CassetteTapeIcon:Ld,Cast:Sd,CastIcon:Sd,Castle:jd,CastleIcon:jd,Cat:Cd,CatIcon:Cd,Cctv:_d,CctvIcon:_d,Check:er,CheckCheck:Id,CheckCheckIcon:Id,CheckCircle:Ya,CheckCircle2:st,CheckCircle2Icon:st,CheckCircleIcon:Ya,CheckIcon:er,CheckSquare:si,CheckSquare2:bd,CheckSquare2Icon:bd,CheckSquareIcon:si,ChefHat:zd,ChefHatIcon:zd,Cherry:Ad,CherryIcon:Ad,ChevronDown:q1,ChevronDownCircle:qd,ChevronDownCircleIcon:qd,ChevronDownIcon:q1,ChevronDownSquare:Td,ChevronDownSquareIcon:Td,ChevronFirst:Nd,ChevronFirstIcon:Nd,ChevronLast:Dd,ChevronLastIcon:Dd,ChevronLeft:tr,ChevronLeftCircle:Pd,ChevronLeftCircleIcon:Pd,ChevronLeftIcon:tr,ChevronLeftSquare:Hd,ChevronLeftSquareIcon:Hd,ChevronRight:Wt,ChevronRightCircle:Bd,ChevronRightCircleIcon:Bd,ChevronRightIcon:Wt,ChevronRightSquare:Rd,ChevronRightSquareIcon:Rd,ChevronUp:Ed,ChevronUpCircle:Vd,ChevronUpCircleIcon:Vd,ChevronUpIcon:Ed,ChevronUpSquare:Fd,ChevronUpSquareIcon:Fd,ChevronsDown:$d,ChevronsDownIcon:$d,ChevronsDownUp:Od,ChevronsDownUpIcon:Od,ChevronsLeft:Zd,ChevronsLeftIcon:Zd,ChevronsLeftRight:Ud,ChevronsLeftRightIcon:Ud,ChevronsRight:Gd,ChevronsRightIcon:Gd,ChevronsRightLeft:Wd,ChevronsRightLeftIcon:Wd,ChevronsUp:Xd,ChevronsUpDown:Kd,ChevronsUpDownIcon:Kd,ChevronsUpIcon:Xd,Chrome:Qd,ChromeIcon:Qd,Church:Jd,ChurchIcon:Jd,Cigarette:e0,CigaretteIcon:e0,CigaretteOff:Yd,CigaretteOffIcon:Yd,Circle:r1,CircleDashed:t0,CircleDashedIcon:t0,CircleDollarSign:n0,CircleDollarSignIcon:n0,CircleDot:r0,CircleDotDashed:a0,CircleDotDashedIcon:a0,CircleDotIcon:r0,CircleEllipsis:i0,CircleEllipsisIcon:i0,CircleEqual:o0,CircleEqualIcon:o0,CircleIcon:r1,CircleOff:c0,CircleOffIcon:c0,CircleSlash:s0,CircleSlash2:un,CircleSlash2Icon:un,CircleSlashIcon:s0,CircleSlashed:un,CircleSlashedIcon:un,CircleUser:pn,CircleUserIcon:pn,CircleUserRound:yn,CircleUserRoundIcon:yn,CircuitBoard:l0,CircuitBoardIcon:l0,Citrus:d0,CitrusIcon:d0,Clapperboard:h0,ClapperboardIcon:h0,Clipboard:v0,ClipboardCheck:u0,ClipboardCheckIcon:u0,ClipboardCopy:y0,ClipboardCopyIcon:y0,ClipboardEdit:mn,ClipboardEditIcon:mn,ClipboardIcon:v0,ClipboardList:p0,ClipboardListIcon:p0,ClipboardPaste:k0,ClipboardPasteIcon:k0,ClipboardPen:mn,ClipboardPenIcon:mn,ClipboardPenLine:kn,ClipboardPenLineIcon:kn,ClipboardSignature:kn,ClipboardSignatureIcon:kn,ClipboardType:m0,ClipboardTypeIcon:m0,ClipboardX:f0,ClipboardXIcon:f0,Clock:St,Clock1:g0,Clock10:x0,Clock10Icon:x0,Clock11:M0,Clock11Icon:M0,Clock12:w0,Clock12Icon:w0,Clock1Icon:g0,Clock2:L0,Clock2Icon:L0,Clock3:S0,Clock3Icon:S0,Clock4:j0,Clock4Icon:j0,Clock5:C0,Clock5Icon:C0,Clock6:_0,Clock6Icon:_0,Clock7:I0,Clock7Icon:I0,Clock8:b0,Clock8Icon:b0,Clock9:z0,Clock9Icon:z0,ClockIcon:St,Cloud:$0,CloudCog:A0,CloudCogIcon:A0,CloudDrizzle:q0,CloudDrizzleIcon:q0,CloudFog:T0,CloudFogIcon:T0,CloudHail:N0,CloudHailIcon:N0,CloudIcon:$0,CloudLightning:D0,CloudLightningIcon:D0,CloudMoon:H0,CloudMoonIcon:H0,CloudMoonRain:P0,CloudMoonRainIcon:P0,CloudOff:B0,CloudOffIcon:B0,CloudRain:V0,CloudRainIcon:V0,CloudRainWind:R0,CloudRainWindIcon:R0,CloudSnow:F0,CloudSnowIcon:F0,CloudSun:O0,CloudSunIcon:O0,CloudSunRain:E0,CloudSunRainIcon:E0,Cloudy:U0,CloudyIcon:U0,Clover:Z0,CloverIcon:Z0,Club:W0,ClubIcon:W0,Code:li,Code2:G0,Code2Icon:G0,CodeIcon:li,CodeSquare:fn,CodeSquareIcon:fn,Codepen:K0,CodepenIcon:K0,Codesandbox:X0,CodesandboxIcon:X0,Coffee:di,CoffeeIcon:di,Cog:Q0,CogIcon:Q0,Coins:J0,CoinsIcon:J0,Columns:vn,Columns2:vn,Columns2Icon:vn,Columns3:gn,Columns3Icon:gn,Columns4:Y0,Columns4Icon:Y0,ColumnsIcon:vn,Combine:eh,CombineIcon:eh,Command:th,CommandIcon:th,Compass:nh,CompassIcon:nh,Component:ah,ComponentIcon:ah,Computer:rh,ComputerIcon:rh,ConciergeBell:ih,ConciergeBellIcon:ih,Cone:oh,ConeIcon:oh,Construction:ch,ConstructionIcon:ch,Contact:lh,Contact2:sh,Contact2Icon:sh,ContactIcon:lh,Container:dh,ContainerIcon:dh,Contrast:hh,ContrastIcon:hh,Cookie:uh,CookieIcon:uh,CookingPot:yh,CookingPotIcon:yh,Copy:gh,CopyCheck:ph,CopyCheckIcon:ph,CopyIcon:gh,CopyMinus:kh,CopyMinusIcon:kh,CopyPlus:mh,CopyPlusIcon:mh,CopySlash:fh,CopySlashIcon:fh,CopyX:vh,CopyXIcon:vh,Copyleft:xh,CopyleftIcon:xh,Copyright:Mh,CopyrightIcon:Mh,CornerDownLeft:wh,CornerDownLeftIcon:wh,CornerDownRight:Lh,CornerDownRightIcon:Lh,CornerLeftDown:Sh,CornerLeftDownIcon:Sh,CornerLeftUp:jh,CornerLeftUpIcon:jh,CornerRightDown:Ch,CornerRightDownIcon:Ch,CornerRightUp:_h,CornerRightUpIcon:_h,CornerUpLeft:Ih,CornerUpLeftIcon:Ih,CornerUpRight:bh,CornerUpRightIcon:bh,Cpu:zh,CpuIcon:zh,CreativeCommons:Ah,CreativeCommonsIcon:Ah,CreditCard:qh,CreditCardIcon:qh,Croissant:Th,CroissantIcon:Th,Crop:Nh,CropIcon:Nh,Cross:Dh,CrossIcon:Dh,Crosshair:Ph,CrosshairIcon:Ph,Crown:Hh,CrownIcon:Hh,Cuboid:Bh,CuboidIcon:Bh,CupSoda:Rh,CupSodaIcon:Rh,CurlyBraces:hn,CurlyBracesIcon:hn,Currency:Vh,CurrencyIcon:Vh,Cylinder:Fh,CylinderIcon:Fh,Database:$h,DatabaseBackup:Eh,DatabaseBackupIcon:Eh,DatabaseIcon:$h,DatabaseZap:Oh,DatabaseZapIcon:Oh,Delete:Uh,DeleteIcon:Uh,Dessert:Zh,DessertIcon:Zh,Diameter:Wh,DiameterIcon:Wh,Diamond:Gh,DiamondIcon:Gh,Dice1:Kh,Dice1Icon:Kh,Dice2:Xh,Dice2Icon:Xh,Dice3:Qh,Dice3Icon:Qh,Dice4:Jh,Dice4Icon:Jh,Dice5:Yh,Dice5Icon:Yh,Dice6:eu,Dice6Icon:eu,Dices:tu,DicesIcon:tu,Diff:nu,DiffIcon:nu,Disc:ou,Disc2:au,Disc2Icon:au,Disc3:ru,Disc3Icon:ru,DiscAlbum:iu,DiscAlbumIcon:iu,DiscIcon:ou,Divide:lu,DivideCircle:cu,DivideCircleIcon:cu,DivideIcon:lu,DivideSquare:su,DivideSquareIcon:su,Dna:hu,DnaIcon:hu,DnaOff:du,DnaOffIcon:du,Dog:uu,DogIcon:uu,DollarSign:nr,DollarSignIcon:nr,Donut:yu,DonutIcon:yu,DoorClosed:pu,DoorClosedIcon:pu,DoorOpen:ku,DoorOpenIcon:ku,Dot:mu,DotIcon:mu,DotSquare:xn,DotSquareIcon:xn,Download:hi,DownloadCloud:fu,DownloadCloudIcon:fu,DownloadIcon:hi,DraftingCompass:vu,DraftingCompassIcon:vu,Drama:gu,DramaIcon:gu,Dribbble:xu,DribbbleIcon:xu,Drill:Mu,DrillIcon:Mu,Droplet:wu,DropletIcon:wu,Droplets:Lu,DropletsIcon:Lu,Drum:Su,DrumIcon:Su,Drumstick:ju,DrumstickIcon:ju,Dumbbell:ui,DumbbellIcon:ui,Ear:_u,EarIcon:_u,EarOff:Cu,EarOffIcon:Cu,Eclipse:Iu,EclipseIcon:Iu,Edit:rt,Edit2:On,Edit2Icon:On,Edit3:En,Edit3Icon:En,EditIcon:rt,Egg:Au,EggFried:bu,EggFriedIcon:bu,EggIcon:Au,EggOff:zu,EggOffIcon:zu,Equal:Tu,EqualIcon:Tu,EqualNot:qu,EqualNotIcon:qu,EqualSquare:Mn,EqualSquareIcon:Mn,Eraser:Nu,EraserIcon:Nu,Euro:Du,EuroIcon:Du,Expand:Pu,ExpandIcon:Pu,ExternalLink:Hu,ExternalLinkIcon:Hu,Eye:Ru,EyeIcon:Ru,EyeOff:Bu,EyeOffIcon:Bu,Facebook:Vu,FacebookIcon:Vu,Factory:Fu,FactoryIcon:Fu,Fan:Eu,FanIcon:Eu,FastForward:Ou,FastForwardIcon:Ou,Feather:$u,FeatherIcon:$u,Fence:Uu,FenceIcon:Uu,FerrisWheel:Zu,FerrisWheelIcon:Zu,Figma:Wu,FigmaIcon:Wu,File:Wy,FileArchive:Gu,FileArchiveIcon:Gu,FileAudio:Xu,FileAudio2:Ku,FileAudio2Icon:Ku,FileAudioIcon:Xu,FileAxis3D:wn,FileAxis3DIcon:wn,FileAxis3d:wn,FileAxis3dIcon:wn,FileBadge:Ju,FileBadge2:Qu,FileBadge2Icon:Qu,FileBadgeIcon:Ju,FileBarChart:ey,FileBarChart2:Yu,FileBarChart2Icon:Yu,FileBarChartIcon:ey,FileBox:ty,FileBoxIcon:ty,FileCheck:ay,FileCheck2:ny,FileCheck2Icon:ny,FileCheckIcon:ay,FileClock:ry,FileClockIcon:ry,FileCode:oy,FileCode2:iy,FileCode2Icon:iy,FileCodeIcon:oy,FileCog:Ln,FileCog2:Ln,FileCog2Icon:Ln,FileCogIcon:Ln,FileDiff:cy,FileDiffIcon:cy,FileDigit:sy,FileDigitIcon:sy,FileDown:ly,FileDownIcon:ly,FileEdit:jn,FileEditIcon:jn,FileHeart:dy,FileHeartIcon:dy,FileIcon:Wy,FileImage:hy,FileImageIcon:hy,FileInput:uy,FileInputIcon:uy,FileJson:py,FileJson2:yy,FileJson2Icon:yy,FileJsonIcon:py,FileKey:my,FileKey2:ky,FileKey2Icon:ky,FileKeyIcon:my,FileLineChart:fy,FileLineChartIcon:fy,FileLock:gy,FileLock2:vy,FileLock2Icon:vy,FileLockIcon:gy,FileMinus:My,FileMinus2:xy,FileMinus2Icon:xy,FileMinusIcon:My,FileMusic:wy,FileMusicIcon:wy,FileOutput:Ly,FileOutputIcon:Ly,FilePen:jn,FilePenIcon:jn,FilePenLine:Sn,FilePenLineIcon:Sn,FilePieChart:Sy,FilePieChartIcon:Sy,FilePlus:Cy,FilePlus2:jy,FilePlus2Icon:jy,FilePlusIcon:Cy,FileQuestion:_y,FileQuestionIcon:_y,FileScan:Iy,FileScanIcon:Iy,FileSearch:zy,FileSearch2:by,FileSearch2Icon:by,FileSearchIcon:zy,FileSignature:Sn,FileSignatureIcon:Sn,FileSliders:Ay,FileSlidersIcon:Ay,FileSpreadsheet:qy,FileSpreadsheetIcon:qy,FileStack:Ty,FileStackIcon:Ty,FileSymlink:Ny,FileSymlinkIcon:Ny,FileTerminal:Dy,FileTerminalIcon:Dy,FileText:Py,FileTextIcon:Py,FileType:By,FileType2:Hy,FileType2Icon:Hy,FileTypeIcon:By,FileUp:Ry,FileUpIcon:Ry,FileVideo:Fy,FileVideo2:Vy,FileVideo2Icon:Vy,FileVideoIcon:Fy,FileVolume:Oy,FileVolume2:Ey,FileVolume2Icon:Ey,FileVolumeIcon:Oy,FileWarning:$y,FileWarningIcon:$y,FileX:Zy,FileX2:Uy,FileX2Icon:Uy,FileXIcon:Zy,Files:Gy,FilesIcon:Gy,Film:Ky,FilmIcon:Ky,Filter:Qy,FilterIcon:Qy,FilterX:Xy,FilterXIcon:Xy,Fingerprint:Jy,FingerprintIcon:Jy,FireExtinguisher:Yy,FireExtinguisherIcon:Yy,Fish:np,FishIcon:np,FishOff:ep,FishOffIcon:ep,FishSymbol:tp,FishSymbolIcon:tp,Flag:op,FlagIcon:op,FlagOff:ap,FlagOffIcon:ap,FlagTriangleLeft:rp,FlagTriangleLeftIcon:rp,FlagTriangleRight:ip,FlagTriangleRightIcon:ip,Flame:sp,FlameIcon:sp,FlameKindling:cp,FlameKindlingIcon:cp,Flashlight:dp,FlashlightIcon:dp,FlashlightOff:lp,FlashlightOffIcon:lp,FlaskConical:up,FlaskConicalIcon:up,FlaskConicalOff:hp,FlaskConicalOffIcon:hp,FlaskRound:yp,FlaskRoundIcon:yp,FlipHorizontal:kp,FlipHorizontal2:pp,FlipHorizontal2Icon:pp,FlipHorizontalIcon:kp,FlipVertical:fp,FlipVertical2:mp,FlipVertical2Icon:mp,FlipVerticalIcon:fp,Flower:gp,Flower2:vp,Flower2Icon:vp,FlowerIcon:gp,Focus:xp,FocusIcon:xp,FoldHorizontal:Mp,FoldHorizontalIcon:Mp,FoldVertical:wp,FoldVerticalIcon:wp,Folder:ma,FolderArchive:Lp,FolderArchiveIcon:Lp,FolderCheck:Sp,FolderCheckIcon:Sp,FolderClock:jp,FolderClockIcon:jp,FolderClosed:Cp,FolderClosedIcon:Cp,FolderCog:Cn,FolderCog2:Cn,FolderCog2Icon:Cn,FolderCogIcon:Cn,FolderDot:_p,FolderDotIcon:_p,FolderDown:Ip,FolderDownIcon:Ip,FolderEdit:_n,FolderEditIcon:_n,FolderGit:zp,FolderGit2:bp,FolderGit2Icon:bp,FolderGitIcon:zp,FolderHeart:Ap,FolderHeartIcon:Ap,FolderIcon:ma,FolderInput:qp,FolderInputIcon:qp,FolderKanban:yi,FolderKanbanIcon:yi,FolderKey:Tp,FolderKeyIcon:Tp,FolderLock:Np,FolderLockIcon:Np,FolderMinus:Dp,FolderMinusIcon:Dp,FolderOpen:Hp,FolderOpenDot:Pp,FolderOpenDotIcon:Pp,FolderOpenIcon:Hp,FolderOutput:Bp,FolderOutputIcon:Bp,FolderPen:_n,FolderPenIcon:_n,FolderPlus:Rp,FolderPlusIcon:Rp,FolderRoot:Vp,FolderRootIcon:Vp,FolderSearch:Ep,FolderSearch2:Fp,FolderSearch2Icon:Fp,FolderSearchIcon:Ep,FolderSymlink:Op,FolderSymlinkIcon:Op,FolderSync:$p,FolderSyncIcon:$p,FolderTree:Up,FolderTreeIcon:Up,FolderUp:Zp,FolderUpIcon:Zp,FolderX:Wp,FolderXIcon:Wp,Folders:Gp,FoldersIcon:Gp,Footprints:Kp,FootprintsIcon:Kp,Forklift:Xp,ForkliftIcon:Xp,FormInput:Qp,FormInputIcon:Qp,Forward:Jp,ForwardIcon:Jp,Frame:Yp,FrameIcon:Yp,Framer:ek,FramerIcon:ek,Frown:tk,FrownIcon:tk,Fuel:nk,FuelIcon:nk,Fullscreen:ak,FullscreenIcon:ak,FunctionSquare:rk,FunctionSquareIcon:rk,GalleryHorizontal:ok,GalleryHorizontalEnd:ik,GalleryHorizontalEndIcon:ik,GalleryHorizontalIcon:ok,GalleryThumbnails:ck,GalleryThumbnailsIcon:ck,GalleryVertical:lk,GalleryVerticalEnd:sk,GalleryVerticalEndIcon:sk,GalleryVerticalIcon:lk,Gamepad:hk,Gamepad2:dk,Gamepad2Icon:dk,GamepadIcon:hk,GanttChart:uk,GanttChartIcon:uk,GanttChartSquare:Vt,GanttChartSquareIcon:Vt,GanttSquare:Vt,GanttSquareIcon:Vt,Gauge:pk,GaugeCircle:yk,GaugeCircleIcon:yk,GaugeIcon:pk,Gavel:kk,GavelIcon:kk,Gem:mk,GemIcon:mk,Ghost:fk,GhostIcon:fk,Gift:vk,GiftIcon:vk,GitBranch:pi,GitBranchIcon:pi,GitBranchPlus:gk,GitBranchPlusIcon:gk,GitCommit:In,GitCommitHorizontal:In,GitCommitHorizontalIcon:In,GitCommitIcon:In,GitCommitVertical:xk,GitCommitVerticalIcon:xk,GitCompare:wk,GitCompareArrows:Mk,GitCompareArrowsIcon:Mk,GitCompareIcon:wk,GitFork:Lk,GitForkIcon:Lk,GitGraph:Sk,GitGraphIcon:Sk,GitMerge:jk,GitMergeIcon:jk,GitPullRequest:Ak,GitPullRequestArrow:Ck,GitPullRequestArrowIcon:Ck,GitPullRequestClosed:_k,GitPullRequestClosedIcon:_k,GitPullRequestCreate:bk,GitPullRequestCreateArrow:Ik,GitPullRequestCreateArrowIcon:Ik,GitPullRequestCreateIcon:bk,GitPullRequestDraft:zk,GitPullRequestDraftIcon:zk,GitPullRequestIcon:Ak,Github:qk,GithubIcon:qk,Gitlab:Tk,GitlabIcon:Tk,GlassWater:Nk,GlassWaterIcon:Nk,Glasses:Dk,GlassesIcon:Dk,Globe:Hk,Globe2:Pk,Globe2Icon:Pk,GlobeIcon:Hk,Goal:Bk,GoalIcon:Bk,Grab:Rk,GrabIcon:Rk,GraduationCap:Vk,GraduationCapIcon:Vk,Grape:Fk,GrapeIcon:Fk,Grid:Ft,Grid2X2:bn,Grid2X2Icon:bn,Grid2x2:bn,Grid2x2Icon:bn,Grid3X3:Ft,Grid3X3Icon:Ft,Grid3x3:Ft,Grid3x3Icon:Ft,GridIcon:Ft,Grip:$k,GripHorizontal:Ek,GripHorizontalIcon:Ek,GripIcon:$k,GripVertical:Ok,GripVerticalIcon:Ok,Group:Uk,GroupIcon:Uk,Guitar:Zk,GuitarIcon:Zk,Hammer:Wk,HammerIcon:Wk,Hand:Kk,HandIcon:Kk,HandMetal:Gk,HandMetalIcon:Gk,HardDrive:Jk,HardDriveDownload:Xk,HardDriveDownloadIcon:Xk,HardDriveIcon:Jk,HardDriveUpload:Qk,HardDriveUploadIcon:Qk,HardHat:Yk,HardHatIcon:Yk,Hash:e4,HashIcon:e4,Haze:t4,HazeIcon:t4,HdmiPort:n4,HdmiPortIcon:n4,Heading:l4,Heading1:a4,Heading1Icon:a4,Heading2:r4,Heading2Icon:r4,Heading3:i4,Heading3Icon:i4,Heading4:o4,Heading4Icon:o4,Heading5:c4,Heading5Icon:c4,Heading6:s4,Heading6Icon:s4,HeadingIcon:l4,Headphones:d4,HeadphonesIcon:d4,Heart:i1,HeartCrack:h4,HeartCrackIcon:h4,HeartHandshake:u4,HeartHandshakeIcon:u4,HeartIcon:i1,HeartOff:y4,HeartOffIcon:y4,HeartPulse:p4,HeartPulseIcon:p4,Heater:k4,HeaterIcon:k4,HelpCircle:m4,HelpCircleIcon:m4,HelpingHand:f4,HelpingHandIcon:f4,Hexagon:v4,HexagonIcon:v4,Highlighter:g4,HighlighterIcon:g4,History:x4,HistoryIcon:x4,Home:ki,HomeIcon:ki,Hop:w4,HopIcon:w4,HopOff:M4,HopOffIcon:M4,Hotel:L4,HotelIcon:L4,Hourglass:S4,HourglassIcon:S4,IceCream:C4,IceCream2:j4,IceCream2Icon:j4,IceCreamIcon:C4,Image:A4,ImageDown:_4,ImageDownIcon:_4,ImageIcon:A4,ImageMinus:I4,ImageMinusIcon:I4,ImageOff:b4,ImageOffIcon:b4,ImagePlus:z4,ImagePlusIcon:z4,Import:q4,ImportIcon:q4,Inbox:T4,InboxIcon:T4,Indent:N4,IndentIcon:N4,IndianRupee:D4,IndianRupeeIcon:D4,Infinity:P4,InfinityIcon:P4,Info:H4,InfoIcon:H4,Inspect:qn,InspectIcon:qn,InspectionPanel:B4,InspectionPanelIcon:B4,Instagram:R4,InstagramIcon:R4,Italic:V4,ItalicIcon:V4,IterationCcw:F4,IterationCcwIcon:F4,IterationCw:E4,IterationCwIcon:E4,JapaneseYen:O4,JapaneseYenIcon:O4,Joystick:$4,JoystickIcon:$4,Kanban:U4,KanbanIcon:U4,KanbanSquare:An,KanbanSquareDashed:zn,KanbanSquareDashedIcon:zn,KanbanSquareIcon:An,Key:G4,KeyIcon:G4,KeyRound:Z4,KeyRoundIcon:Z4,KeySquare:W4,KeySquareIcon:W4,Keyboard:X4,KeyboardIcon:X4,KeyboardMusic:K4,KeyboardMusicIcon:K4,Lamp:n5,LampCeiling:Q4,LampCeilingIcon:Q4,LampDesk:J4,LampDeskIcon:J4,LampFloor:Y4,LampFloorIcon:Y4,LampIcon:n5,LampWallDown:e5,LampWallDownIcon:e5,LampWallUp:t5,LampWallUpIcon:t5,LandPlot:a5,LandPlotIcon:a5,Landmark:r5,LandmarkIcon:r5,Languages:mi,LanguagesIcon:mi,Laptop:o5,Laptop2:i5,Laptop2Icon:i5,LaptopIcon:o5,Lasso:s5,LassoIcon:s5,LassoSelect:c5,LassoSelectIcon:c5,Laugh:l5,LaughIcon:l5,Layers:u5,Layers2:d5,Layers2Icon:d5,Layers3:h5,Layers3Icon:h5,LayersIcon:u5,Layout:Fn,LayoutDashboard:fi,LayoutDashboardIcon:fi,LayoutGrid:vi,LayoutGridIcon:vi,LayoutIcon:Fn,LayoutList:y5,LayoutListIcon:y5,LayoutPanelLeft:p5,LayoutPanelLeftIcon:p5,LayoutPanelTop:k5,LayoutPanelTopIcon:k5,LayoutTemplate:m5,LayoutTemplateIcon:m5,Leaf:gi,LeafIcon:gi,LeafyGreen:f5,LeafyGreenIcon:f5,Library:x5,LibraryBig:v5,LibraryBigIcon:v5,LibraryIcon:x5,LibrarySquare:g5,LibrarySquareIcon:g5,LifeBuoy:M5,LifeBuoyIcon:M5,Ligature:w5,LigatureIcon:w5,Lightbulb:fa,LightbulbIcon:fa,LightbulbOff:L5,LightbulbOffIcon:L5,LineChart:S5,LineChartIcon:S5,Link:ar,Link2:C5,Link2Icon:C5,Link2Off:j5,Link2OffIcon:j5,LinkIcon:ar,Linkedin:_5,LinkedinIcon:_5,List:wi,ListChecks:rr,ListChecksIcon:rr,ListCollapse:I5,ListCollapseIcon:I5,ListEnd:b5,ListEndIcon:b5,ListFilter:xi,ListFilterIcon:xi,ListIcon:wi,ListMinus:z5,ListMinusIcon:z5,ListMusic:A5,ListMusicIcon:A5,ListOrdered:q5,ListOrderedIcon:q5,ListPlus:T5,ListPlusIcon:T5,ListRestart:N5,ListRestartIcon:N5,ListStart:D5,ListStartIcon:D5,ListTodo:P5,ListTodoIcon:P5,ListTree:Mi,ListTreeIcon:Mi,ListVideo:H5,ListVideoIcon:H5,ListX:B5,ListXIcon:B5,Loader:R5,Loader2:Li,Loader2Icon:Li,LoaderIcon:R5,Locate:E5,LocateFixed:V5,LocateFixedIcon:V5,LocateIcon:E5,LocateOff:F5,LocateOffIcon:F5,Lock:$5,LockIcon:$5,LockKeyhole:O5,LockKeyholeIcon:O5,LogIn:U5,LogInIcon:U5,LogOut:Z5,LogOutIcon:Z5,Lollipop:W5,LollipopIcon:W5,LucideAArrowDown:Eo,LucideAArrowUp:Oo,LucideALargeSmall:$o,LucideAccessibility:Uo,LucideActivity:ya,LucideActivitySquare:Zo,LucideAirVent:Wo,LucideAirplay:Go,LucideAlarmCheck:K1,LucideAlarmClock:Xo,LucideAlarmClockCheck:K1,LucideAlarmClockMinus:X1,LucideAlarmClockOff:Ko,LucideAlarmClockPlus:Q1,LucideAlarmMinus:X1,LucideAlarmPlus:Q1,LucideAlarmSmoke:Qo,LucideAlbum:Jo,LucideAlertCircle:pa,LucideAlertOctagon:Yo,LucideAlertTriangle:z1,LucideAlignCenter:n2,LucideAlignCenterHorizontal:e2,LucideAlignCenterVertical:t2,LucideAlignEndHorizontal:a2,LucideAlignEndVertical:r2,LucideAlignHorizontalDistributeCenter:i2,LucideAlignHorizontalDistributeEnd:o2,LucideAlignHorizontalDistributeStart:c2,LucideAlignHorizontalJustifyCenter:s2,LucideAlignHorizontalJustifyEnd:l2,LucideAlignHorizontalJustifyStart:d2,LucideAlignHorizontalSpaceAround:h2,LucideAlignHorizontalSpaceBetween:u2,LucideAlignJustify:y2,LucideAlignLeft:p2,LucideAlignRight:k2,LucideAlignStartHorizontal:m2,LucideAlignStartVertical:f2,LucideAlignVerticalDistributeCenter:v2,LucideAlignVerticalDistributeEnd:g2,LucideAlignVerticalDistributeStart:x2,LucideAlignVerticalJustifyCenter:M2,LucideAlignVerticalJustifyEnd:w2,LucideAlignVerticalJustifyStart:L2,LucideAlignVerticalSpaceAround:S2,LucideAlignVerticalSpaceBetween:j2,LucideAmpersand:C2,LucideAmpersands:_2,LucideAnchor:I2,LucideAngry:b2,LucideAnnoyed:z2,LucideAntenna:A2,LucideAnvil:q2,LucideAperture:T2,LucideAppWindow:N2,LucideApple:D2,LucideArchive:Xr,LucideArchiveRestore:P2,LucideArchiveX:H2,LucideAreaChart:B2,LucideArmchair:R2,LucideArrowBigDown:F2,LucideArrowBigDownDash:V2,LucideArrowBigLeft:O2,LucideArrowBigLeftDash:E2,LucideArrowBigRight:U2,LucideArrowBigRightDash:$2,LucideArrowBigUp:W2,LucideArrowBigUpDash:Z2,LucideArrowDown:hc,LucideArrowDown01:G2,LucideArrowDown10:K2,LucideArrowDownAZ:J1,LucideArrowDownAz:J1,LucideArrowDownCircle:X2,LucideArrowDownFromLine:Q2,LucideArrowDownLeft:tc,LucideArrowDownLeftFromCircle:J2,LucideArrowDownLeftFromSquare:Y2,LucideArrowDownLeftSquare:ec,LucideArrowDownNarrowWide:nc,LucideArrowDownRight:oc,LucideArrowDownRightFromCircle:ac,LucideArrowDownRightFromSquare:rc,LucideArrowDownRightSquare:ic,LucideArrowDownSquare:cc,LucideArrowDownToDot:sc,LucideArrowDownToLine:lc,LucideArrowDownUp:dc,LucideArrowDownWideNarrow:Y1,LucideArrowDownZA:en,LucideArrowDownZa:en,LucideArrowLeft:fc,LucideArrowLeftCircle:uc,LucideArrowLeftFromLine:yc,LucideArrowLeftRight:pc,LucideArrowLeftSquare:kc,LucideArrowLeftToLine:mc,LucideArrowRight:Lc,LucideArrowRightCircle:vc,LucideArrowRightFromLine:gc,LucideArrowRightLeft:xc,LucideArrowRightSquare:Mc,LucideArrowRightToLine:wc,LucideArrowUp:Vc,LucideArrowUp01:Sc,LucideArrowUp10:jc,LucideArrowUpAZ:tn,LucideArrowUpAz:tn,LucideArrowUpCircle:Cc,LucideArrowUpDown:Qr,LucideArrowUpFromDot:_c,LucideArrowUpFromLine:Ic,LucideArrowUpLeft:qc,LucideArrowUpLeftFromCircle:bc,LucideArrowUpLeftFromSquare:zc,LucideArrowUpLeftSquare:Ac,LucideArrowUpNarrowWide:nn,LucideArrowUpRight:Pc,LucideArrowUpRightFromCircle:Tc,LucideArrowUpRightFromSquare:Nc,LucideArrowUpRightSquare:Dc,LucideArrowUpSquare:Hc,LucideArrowUpToLine:Bc,LucideArrowUpWideNarrow:Rc,LucideArrowUpZA:an,LucideArrowUpZa:an,LucideArrowsUpFromLine:Fc,LucideAsterisk:Ec,LucideAsteriskSquare:rn,LucideAtSign:Oc,LucideAtom:$c,LucideAudioLines:Uc,LucideAudioWaveform:Zc,LucideAward:Wc,LucideAxe:Gc,LucideAxis3D:on,LucideAxis3d:on,LucideBaby:Kc,LucideBackpack:Xc,LucideBadge:us,LucideBadgeAlert:Qc,LucideBadgeCent:Jc,LucideBadgeCheck:cn,LucideBadgeDollarSign:Yc,LucideBadgeEuro:es,LucideBadgeHelp:ts,LucideBadgeIndianRupee:ns,LucideBadgeInfo:as,LucideBadgeJapaneseYen:rs,LucideBadgeMinus:is,LucideBadgePercent:os,LucideBadgePlus:cs,LucideBadgePoundSterling:ss,LucideBadgeRussianRuble:ls,LucideBadgeSwissFranc:ds,LucideBadgeX:hs,LucideBaggageClaim:ys,LucideBan:ps,LucideBanana:ks,LucideBanknote:ms,LucideBarChart:ws,LucideBarChart2:Jr,LucideBarChart3:fs,LucideBarChart4:vs,LucideBarChartBig:gs,LucideBarChartHorizontal:Ms,LucideBarChartHorizontalBig:xs,LucideBarcode:Ls,LucideBaseline:Ss,LucideBath:js,LucideBattery:ti,LucideBatteryCharging:Cs,LucideBatteryFull:_s,LucideBatteryLow:Yr,LucideBatteryMedium:ei,LucideBatteryWarning:Is,LucideBeaker:bs,LucideBean:As,LucideBeanOff:zs,LucideBed:Ns,LucideBedDouble:qs,LucideBedSingle:Ts,LucideBeef:Ds,LucideBeer:Ps,LucideBell:ni,LucideBellDot:Hs,LucideBellElectric:Bs,LucideBellMinus:Rs,LucideBellOff:Vs,LucideBellPlus:Fs,LucideBellRing:Es,LucideBetweenHorizonalEnd:sn,LucideBetweenHorizonalStart:ln,LucideBetweenHorizontalEnd:sn,LucideBetweenHorizontalStart:ln,LucideBetweenVerticalEnd:Os,LucideBetweenVerticalStart:$s,LucideBike:Us,LucideBinary:Zs,LucideBiohazard:Ws,LucideBird:Gs,LucideBitcoin:Ks,LucideBlend:Xs,LucideBlinds:Qs,LucideBlocks:Js,LucideBluetooth:nl,LucideBluetoothConnected:Ys,LucideBluetoothOff:el,LucideBluetoothSearching:tl,LucideBold:al,LucideBolt:rl,LucideBomb:il,LucideBone:ol,LucideBook:ka,LucideBookA:cl,LucideBookAudio:sl,LucideBookCheck:ll,LucideBookCopy:dl,LucideBookDashed:dn,LucideBookDown:hl,LucideBookHeadphones:ul,LucideBookHeart:yl,LucideBookImage:pl,LucideBookKey:kl,LucideBookLock:ml,LucideBookMarked:fl,LucideBookMinus:vl,LucideBookOpen:Qa,LucideBookOpenCheck:gl,LucideBookOpenText:xl,LucideBookPlus:Ml,LucideBookTemplate:dn,LucideBookText:wl,LucideBookType:Ll,LucideBookUp:jl,LucideBookUp2:Sl,LucideBookUser:Cl,LucideBookX:_l,LucideBookmark:ql,LucideBookmarkCheck:Il,LucideBookmarkMinus:bl,LucideBookmarkPlus:zl,LucideBookmarkX:Al,LucideBoomBox:Tl,LucideBot:Nl,LucideBox:Pl,LucideBoxSelect:Dl,LucideBoxes:Hl,LucideBraces:hn,LucideBrackets:Bl,LucideBrain:A1,LucideBrainCircuit:ai,LucideBrainCog:Rl,LucideBrickWall:Vl,LucideBriefcase:Ja,LucideBringToFront:Fl,LucideBrush:El,LucideBug:Ul,LucideBugOff:Ol,LucideBugPlay:$l,LucideBuilding:Wl,LucideBuilding2:Zl,LucideBus:Kl,LucideBusFront:Gl,LucideCable:Ql,LucideCableCar:Xl,LucideCake:Yl,LucideCakeSlice:Jl,LucideCalculator:ed,LucideCalendar:Lt,LucideCalendarCheck:ri,LucideCalendarCheck2:td,LucideCalendarClock:nd,LucideCalendarDays:ii,LucideCalendarHeart:ad,LucideCalendarMinus:rd,LucideCalendarOff:id,LucideCalendarPlus:od,LucideCalendarRange:cd,LucideCalendarSearch:sd,LucideCalendarX:dd,LucideCalendarX2:ld,LucideCamera:oi,LucideCameraOff:hd,LucideCandlestickChart:ud,LucideCandy:kd,LucideCandyCane:yd,LucideCandyOff:pd,LucideCar:ci,LucideCarFront:md,LucideCarTaxiFront:fd,LucideCaravan:vd,LucideCarrot:gd,LucideCaseLower:xd,LucideCaseSensitive:Md,LucideCaseUpper:wd,LucideCassetteTape:Ld,LucideCast:Sd,LucideCastle:jd,LucideCat:Cd,LucideCctv:_d,LucideCheck:er,LucideCheckCheck:Id,LucideCheckCircle:Ya,LucideCheckCircle2:st,LucideCheckSquare:si,LucideCheckSquare2:bd,LucideChefHat:zd,LucideCherry:Ad,LucideChevronDown:q1,LucideChevronDownCircle:qd,LucideChevronDownSquare:Td,LucideChevronFirst:Nd,LucideChevronLast:Dd,LucideChevronLeft:tr,LucideChevronLeftCircle:Pd,LucideChevronLeftSquare:Hd,LucideChevronRight:Wt,LucideChevronRightCircle:Bd,LucideChevronRightSquare:Rd,LucideChevronUp:Ed,LucideChevronUpCircle:Vd,LucideChevronUpSquare:Fd,LucideChevronsDown:$d,LucideChevronsDownUp:Od,LucideChevronsLeft:Zd,LucideChevronsLeftRight:Ud,LucideChevronsRight:Gd,LucideChevronsRightLeft:Wd,LucideChevronsUp:Xd,LucideChevronsUpDown:Kd,LucideChrome:Qd,LucideChurch:Jd,LucideCigarette:e0,LucideCigaretteOff:Yd,LucideCircle:r1,LucideCircleDashed:t0,LucideCircleDollarSign:n0,LucideCircleDot:r0,LucideCircleDotDashed:a0,LucideCircleEllipsis:i0,LucideCircleEqual:o0,LucideCircleOff:c0,LucideCircleSlash:s0,LucideCircleSlash2:un,LucideCircleSlashed:un,LucideCircleUser:pn,LucideCircleUserRound:yn,LucideCircuitBoard:l0,LucideCitrus:d0,LucideClapperboard:h0,LucideClipboard:v0,LucideClipboardCheck:u0,LucideClipboardCopy:y0,LucideClipboardEdit:mn,LucideClipboardList:p0,LucideClipboardPaste:k0,LucideClipboardPen:mn,LucideClipboardPenLine:kn,LucideClipboardSignature:kn,LucideClipboardType:m0,LucideClipboardX:f0,LucideClock:St,LucideClock1:g0,LucideClock10:x0,LucideClock11:M0,LucideClock12:w0,LucideClock2:L0,LucideClock3:S0,LucideClock4:j0,LucideClock5:C0,LucideClock6:_0,LucideClock7:I0,LucideClock8:b0,LucideClock9:z0,LucideCloud:$0,LucideCloudCog:A0,LucideCloudDrizzle:q0,LucideCloudFog:T0,LucideCloudHail:N0,LucideCloudLightning:D0,LucideCloudMoon:H0,LucideCloudMoonRain:P0,LucideCloudOff:B0,LucideCloudRain:V0,LucideCloudRainWind:R0,LucideCloudSnow:F0,LucideCloudSun:O0,LucideCloudSunRain:E0,LucideCloudy:U0,LucideClover:Z0,LucideClub:W0,LucideCode:li,LucideCode2:G0,LucideCodeSquare:fn,LucideCodepen:K0,LucideCodesandbox:X0,LucideCoffee:di,LucideCog:Q0,LucideCoins:J0,LucideColumns:vn,LucideColumns2:vn,LucideColumns3:gn,LucideColumns4:Y0,LucideCombine:eh,LucideCommand:th,LucideCompass:nh,LucideComponent:ah,LucideComputer:rh,LucideConciergeBell:ih,LucideCone:oh,LucideConstruction:ch,LucideContact:lh,LucideContact2:sh,LucideContainer:dh,LucideContrast:hh,LucideCookie:uh,LucideCookingPot:yh,LucideCopy:gh,LucideCopyCheck:ph,LucideCopyMinus:kh,LucideCopyPlus:mh,LucideCopySlash:fh,LucideCopyX:vh,LucideCopyleft:xh,LucideCopyright:Mh,LucideCornerDownLeft:wh,LucideCornerDownRight:Lh,LucideCornerLeftDown:Sh,LucideCornerLeftUp:jh,LucideCornerRightDown:Ch,LucideCornerRightUp:_h,LucideCornerUpLeft:Ih,LucideCornerUpRight:bh,LucideCpu:zh,LucideCreativeCommons:Ah,LucideCreditCard:qh,LucideCroissant:Th,LucideCrop:Nh,LucideCross:Dh,LucideCrosshair:Ph,LucideCrown:Hh,LucideCuboid:Bh,LucideCupSoda:Rh,LucideCurlyBraces:hn,LucideCurrency:Vh,LucideCylinder:Fh,LucideDatabase:$h,LucideDatabaseBackup:Eh,LucideDatabaseZap:Oh,LucideDelete:Uh,LucideDessert:Zh,LucideDiameter:Wh,LucideDiamond:Gh,LucideDice1:Kh,LucideDice2:Xh,LucideDice3:Qh,LucideDice4:Jh,LucideDice5:Yh,LucideDice6:eu,LucideDices:tu,LucideDiff:nu,LucideDisc:ou,LucideDisc2:au,LucideDisc3:ru,LucideDiscAlbum:iu,LucideDivide:lu,LucideDivideCircle:cu,LucideDivideSquare:su,LucideDna:hu,LucideDnaOff:du,LucideDog:uu,LucideDollarSign:nr,LucideDonut:yu,LucideDoorClosed:pu,LucideDoorOpen:ku,LucideDot:mu,LucideDotSquare:xn,LucideDownload:hi,LucideDownloadCloud:fu,LucideDraftingCompass:vu,LucideDrama:gu,LucideDribbble:xu,LucideDrill:Mu,LucideDroplet:wu,LucideDroplets:Lu,LucideDrum:Su,LucideDrumstick:ju,LucideDumbbell:ui,LucideEar:_u,LucideEarOff:Cu,LucideEclipse:Iu,LucideEdit:rt,LucideEdit2:On,LucideEdit3:En,LucideEgg:Au,LucideEggFried:bu,LucideEggOff:zu,LucideEqual:Tu,LucideEqualNot:qu,LucideEqualSquare:Mn,LucideEraser:Nu,LucideEuro:Du,LucideExpand:Pu,LucideExternalLink:Hu,LucideEye:Ru,LucideEyeOff:Bu,LucideFacebook:Vu,LucideFactory:Fu,LucideFan:Eu,LucideFastForward:Ou,LucideFeather:$u,LucideFence:Uu,LucideFerrisWheel:Zu,LucideFigma:Wu,LucideFile:Wy,LucideFileArchive:Gu,LucideFileAudio:Xu,LucideFileAudio2:Ku,LucideFileAxis3D:wn,LucideFileAxis3d:wn,LucideFileBadge:Ju,LucideFileBadge2:Qu,LucideFileBarChart:ey,LucideFileBarChart2:Yu,LucideFileBox:ty,LucideFileCheck:ay,LucideFileCheck2:ny,LucideFileClock:ry,LucideFileCode:oy,LucideFileCode2:iy,LucideFileCog:Ln,LucideFileCog2:Ln,LucideFileDiff:cy,LucideFileDigit:sy,LucideFileDown:ly,LucideFileEdit:jn,LucideFileHeart:dy,LucideFileImage:hy,LucideFileInput:uy,LucideFileJson:py,LucideFileJson2:yy,LucideFileKey:my,LucideFileKey2:ky,LucideFileLineChart:fy,LucideFileLock:gy,LucideFileLock2:vy,LucideFileMinus:My,LucideFileMinus2:xy,LucideFileMusic:wy,LucideFileOutput:Ly,LucideFilePen:jn,LucideFilePenLine:Sn,LucideFilePieChart:Sy,LucideFilePlus:Cy,LucideFilePlus2:jy,LucideFileQuestion:_y,LucideFileScan:Iy,LucideFileSearch:zy,LucideFileSearch2:by,LucideFileSignature:Sn,LucideFileSliders:Ay,LucideFileSpreadsheet:qy,LucideFileStack:Ty,LucideFileSymlink:Ny,LucideFileTerminal:Dy,LucideFileText:Py,LucideFileType:By,LucideFileType2:Hy,LucideFileUp:Ry,LucideFileVideo:Fy,LucideFileVideo2:Vy,LucideFileVolume:Oy,LucideFileVolume2:Ey,LucideFileWarning:$y,LucideFileX:Zy,LucideFileX2:Uy,LucideFiles:Gy,LucideFilm:Ky,LucideFilter:Qy,LucideFilterX:Xy,LucideFingerprint:Jy,LucideFireExtinguisher:Yy,LucideFish:np,LucideFishOff:ep,LucideFishSymbol:tp,LucideFlag:op,LucideFlagOff:ap,LucideFlagTriangleLeft:rp,LucideFlagTriangleRight:ip,LucideFlame:sp,LucideFlameKindling:cp,LucideFlashlight:dp,LucideFlashlightOff:lp,LucideFlaskConical:up,LucideFlaskConicalOff:hp,LucideFlaskRound:yp,LucideFlipHorizontal:kp,LucideFlipHorizontal2:pp,LucideFlipVertical:fp,LucideFlipVertical2:mp,LucideFlower:gp,LucideFlower2:vp,LucideFocus:xp,LucideFoldHorizontal:Mp,LucideFoldVertical:wp,LucideFolder:ma,LucideFolderArchive:Lp,LucideFolderCheck:Sp,LucideFolderClock:jp,LucideFolderClosed:Cp,LucideFolderCog:Cn,LucideFolderCog2:Cn,LucideFolderDot:_p,LucideFolderDown:Ip,LucideFolderEdit:_n,LucideFolderGit:zp,LucideFolderGit2:bp,LucideFolderHeart:Ap,LucideFolderInput:qp,LucideFolderKanban:yi,LucideFolderKey:Tp,LucideFolderLock:Np,LucideFolderMinus:Dp,LucideFolderOpen:Hp,LucideFolderOpenDot:Pp,LucideFolderOutput:Bp,LucideFolderPen:_n,LucideFolderPlus:Rp,LucideFolderRoot:Vp,LucideFolderSearch:Ep,LucideFolderSearch2:Fp,LucideFolderSymlink:Op,LucideFolderSync:$p,LucideFolderTree:Up,LucideFolderUp:Zp,LucideFolderX:Wp,LucideFolders:Gp,LucideFootprints:Kp,LucideForklift:Xp,LucideFormInput:Qp,LucideForward:Jp,LucideFrame:Yp,LucideFramer:ek,LucideFrown:tk,LucideFuel:nk,LucideFullscreen:ak,LucideFunctionSquare:rk,LucideGalleryHorizontal:ok,LucideGalleryHorizontalEnd:ik,LucideGalleryThumbnails:ck,LucideGalleryVertical:lk,LucideGalleryVerticalEnd:sk,LucideGamepad:hk,LucideGamepad2:dk,LucideGanttChart:uk,LucideGanttChartSquare:Vt,LucideGanttSquare:Vt,LucideGauge:pk,LucideGaugeCircle:yk,LucideGavel:kk,LucideGem:mk,LucideGhost:fk,LucideGift:vk,LucideGitBranch:pi,LucideGitBranchPlus:gk,LucideGitCommit:In,LucideGitCommitHorizontal:In,LucideGitCommitVertical:xk,LucideGitCompare:wk,LucideGitCompareArrows:Mk,LucideGitFork:Lk,LucideGitGraph:Sk,LucideGitMerge:jk,LucideGitPullRequest:Ak,LucideGitPullRequestArrow:Ck,LucideGitPullRequestClosed:_k,LucideGitPullRequestCreate:bk,LucideGitPullRequestCreateArrow:Ik,LucideGitPullRequestDraft:zk,LucideGithub:qk,LucideGitlab:Tk,LucideGlassWater:Nk,LucideGlasses:Dk,LucideGlobe:Hk,LucideGlobe2:Pk,LucideGoal:Bk,LucideGrab:Rk,LucideGraduationCap:Vk,LucideGrape:Fk,LucideGrid:Ft,LucideGrid2X2:bn,LucideGrid2x2:bn,LucideGrid3X3:Ft,LucideGrid3x3:Ft,LucideGrip:$k,LucideGripHorizontal:Ek,LucideGripVertical:Ok,LucideGroup:Uk,LucideGuitar:Zk,LucideHammer:Wk,LucideHand:Kk,LucideHandMetal:Gk,LucideHardDrive:Jk,LucideHardDriveDownload:Xk,LucideHardDriveUpload:Qk,LucideHardHat:Yk,LucideHash:e4,LucideHaze:t4,LucideHdmiPort:n4,LucideHeading:l4,LucideHeading1:a4,LucideHeading2:r4,LucideHeading3:i4,LucideHeading4:o4,LucideHeading5:c4,LucideHeading6:s4,LucideHeadphones:d4,LucideHeart:i1,LucideHeartCrack:h4,LucideHeartHandshake:u4,LucideHeartOff:y4,LucideHeartPulse:p4,LucideHeater:k4,LucideHelpCircle:m4,LucideHelpingHand:f4,LucideHexagon:v4,LucideHighlighter:g4,LucideHistory:x4,LucideHome:ki,LucideHop:w4,LucideHopOff:M4,LucideHotel:L4,LucideHourglass:S4,LucideIceCream:C4,LucideIceCream2:j4,LucideImage:A4,LucideImageDown:_4,LucideImageMinus:I4,LucideImageOff:b4,LucideImagePlus:z4,LucideImport:q4,LucideInbox:T4,LucideIndent:N4,LucideIndianRupee:D4,LucideInfinity:P4,LucideInfo:H4,LucideInspect:qn,LucideInspectionPanel:B4,LucideInstagram:R4,LucideItalic:V4,LucideIterationCcw:F4,LucideIterationCw:E4,LucideJapaneseYen:O4,LucideJoystick:$4,LucideKanban:U4,LucideKanbanSquare:An,LucideKanbanSquareDashed:zn,LucideKey:G4,LucideKeyRound:Z4,LucideKeySquare:W4,LucideKeyboard:X4,LucideKeyboardMusic:K4,LucideLamp:n5,LucideLampCeiling:Q4,LucideLampDesk:J4,LucideLampFloor:Y4,LucideLampWallDown:e5,LucideLampWallUp:t5,LucideLandPlot:a5,LucideLandmark:r5,LucideLanguages:mi,LucideLaptop:o5,LucideLaptop2:i5,LucideLasso:s5,LucideLassoSelect:c5,LucideLaugh:l5,LucideLayers:u5,LucideLayers2:d5,LucideLayers3:h5,LucideLayout:Fn,LucideLayoutDashboard:fi,LucideLayoutGrid:vi,LucideLayoutList:y5,LucideLayoutPanelLeft:p5,LucideLayoutPanelTop:k5,LucideLayoutTemplate:m5,LucideLeaf:gi,LucideLeafyGreen:f5,LucideLibrary:x5,LucideLibraryBig:v5,LucideLibrarySquare:g5,LucideLifeBuoy:M5,LucideLigature:w5,LucideLightbulb:fa,LucideLightbulbOff:L5,LucideLineChart:S5,LucideLink:ar,LucideLink2:C5,LucideLink2Off:j5,LucideLinkedin:_5,LucideList:wi,LucideListChecks:rr,LucideListCollapse:I5,LucideListEnd:b5,LucideListFilter:xi,LucideListMinus:z5,LucideListMusic:A5,LucideListOrdered:q5,LucideListPlus:T5,LucideListRestart:N5,LucideListStart:D5,LucideListTodo:P5,LucideListTree:Mi,LucideListVideo:H5,LucideListX:B5,LucideLoader:R5,LucideLoader2:Li,LucideLocate:E5,LucideLocateFixed:V5,LucideLocateOff:F5,LucideLock:$5,LucideLockKeyhole:O5,LucideLogIn:U5,LucideLogOut:Z5,LucideLollipop:W5,LucideLuggage:G5,LucideMSquare:K5,LucideMagnet:X5,LucideMail:i3,LucideMailCheck:Q5,LucideMailMinus:J5,LucideMailOpen:Y5,LucideMailPlus:e3,LucideMailQuestion:t3,LucideMailSearch:n3,LucideMailWarning:a3,LucideMailX:r3,LucideMailbox:o3,LucideMails:c3,LucideMap:h3,LucideMapPin:l3,LucideMapPinOff:s3,LucideMapPinned:d3,LucideMartini:u3,LucideMaximize:p3,LucideMaximize2:y3,LucideMedal:k3,LucideMegaphone:f3,LucideMegaphoneOff:m3,LucideMeh:v3,LucideMemoryStick:g3,LucideMenu:M3,LucideMenuSquare:x3,LucideMerge:w3,LucideMessageCircle:T3,LucideMessageCircleCode:L3,LucideMessageCircleDashed:S3,LucideMessageCircleHeart:j3,LucideMessageCircleMore:C3,LucideMessageCircleOff:_3,LucideMessageCirclePlus:I3,LucideMessageCircleQuestion:b3,LucideMessageCircleReply:z3,LucideMessageCircleWarning:A3,LucideMessageCircleX:q3,LucideMessageSquare:G3,LucideMessageSquareCode:N3,LucideMessageSquareDashed:D3,LucideMessageSquareDiff:P3,LucideMessageSquareDot:H3,LucideMessageSquareHeart:B3,LucideMessageSquareMore:R3,LucideMessageSquareOff:V3,LucideMessageSquarePlus:F3,LucideMessageSquareQuote:E3,LucideMessageSquareReply:O3,LucideMessageSquareShare:$3,LucideMessageSquareText:U3,LucideMessageSquareWarning:Z3,LucideMessageSquareX:W3,LucideMessagesSquare:K3,LucideMic:J3,LucideMic2:X3,LucideMicOff:Q3,LucideMicroscope:Y3,LucideMicrowave:em,LucideMilestone:tm,LucideMilk:am,LucideMilkOff:nm,LucideMinimize:im,LucideMinimize2:rm,LucideMinus:sm,LucideMinusCircle:om,LucideMinusSquare:cm,LucideMonitor:xm,LucideMonitorCheck:lm,LucideMonitorDot:dm,LucideMonitorDown:hm,LucideMonitorOff:um,LucideMonitorPause:ym,LucideMonitorPlay:pm,LucideMonitorSmartphone:km,LucideMonitorSpeaker:mm,LucideMonitorStop:fm,LucideMonitorUp:vm,LucideMonitorX:gm,LucideMoon:Si,LucideMoonStar:Mm,LucideMoreHorizontal:wm,LucideMoreVertical:Lm,LucideMountain:jm,LucideMountainSnow:Sm,LucideMouse:zm,LucideMousePointer:bm,LucideMousePointer2:Cm,LucideMousePointerClick:_m,LucideMousePointerSquare:qn,LucideMousePointerSquareDashed:Im,LucideMove:Om,LucideMove3D:Tn,LucideMove3d:Tn,LucideMoveDiagonal:qm,LucideMoveDiagonal2:Am,LucideMoveDown:Dm,LucideMoveDownLeft:Tm,LucideMoveDownRight:Nm,LucideMoveHorizontal:Pm,LucideMoveLeft:Hm,LucideMoveRight:Bm,LucideMoveUp:Fm,LucideMoveUpLeft:Rm,LucideMoveUpRight:Vm,LucideMoveVertical:Em,LucideMusic:ji,LucideMusic2:$m,LucideMusic3:Um,LucideMusic4:Zm,LucideNavigation:Xm,LucideNavigation2:Gm,LucideNavigation2Off:Wm,LucideNavigationOff:Km,LucideNetwork:Qm,LucideNewspaper:Jm,LucideNfc:Ym,LucideNotebook:a6,LucideNotebookPen:e6,LucideNotebookTabs:t6,LucideNotebookText:n6,LucideNotepadText:i6,LucideNotepadTextDashed:r6,LucideNut:c6,LucideNutOff:o6,LucideOctagon:s6,LucideOption:l6,LucideOrbit:d6,LucideOutdent:h6,LucidePackage:ir,LucidePackage2:u6,LucidePackageCheck:y6,LucidePackageMinus:p6,LucidePackageOpen:k6,LucidePackagePlus:m6,LucidePackageSearch:f6,LucidePackageX:v6,LucidePaintBucket:g6,LucidePaintRoller:x6,LucidePaintbrush:w6,LucidePaintbrush2:M6,LucidePalette:L6,LucidePalmtree:S6,LucidePanelBottom:_6,LucidePanelBottomClose:j6,LucidePanelBottomDashed:Nn,LucidePanelBottomInactive:Nn,LucidePanelBottomOpen:C6,LucidePanelLeft:Bn,LucidePanelLeftClose:Dn,LucidePanelLeftDashed:Pn,LucidePanelLeftInactive:Pn,LucidePanelLeftOpen:Hn,LucidePanelRight:z6,LucidePanelRightClose:I6,LucidePanelRightDashed:Rn,LucidePanelRightInactive:Rn,LucidePanelRightOpen:b6,LucidePanelTop:T6,LucidePanelTopClose:A6,LucidePanelTopDashed:Vn,LucidePanelTopInactive:Vn,LucidePanelTopOpen:q6,LucidePanelsLeftBottom:N6,LucidePanelsLeftRight:gn,LucidePanelsRightBottom:D6,LucidePanelsTopBottom:Zn,LucidePanelsTopLeft:Fn,LucidePaperclip:P6,LucideParentheses:H6,LucideParkingCircle:R6,LucideParkingCircleOff:B6,LucideParkingMeter:V6,LucideParkingSquare:E6,LucideParkingSquareOff:F6,LucidePartyPopper:O6,LucidePause:or,LucidePauseCircle:$6,LucidePauseOctagon:U6,LucidePawPrint:Z6,LucidePcCase:W6,LucidePen:On,LucidePenBox:rt,LucidePenLine:En,LucidePenSquare:rt,LucidePenTool:G6,LucidePencil:Q6,LucidePencilLine:K6,LucidePencilRuler:X6,LucidePentagon:J6,LucidePercent:n8,LucidePercentCircle:Y6,LucidePercentDiamond:e8,LucidePercentSquare:t8,LucidePersonStanding:a8,LucidePhone:d8,LucidePhoneCall:r8,LucidePhoneForwarded:i8,LucidePhoneIncoming:o8,LucidePhoneMissed:c8,LucidePhoneOff:s8,LucidePhoneOutgoing:l8,LucidePi:u8,LucidePiSquare:h8,LucidePiano:y8,LucidePictureInPicture:k8,LucidePictureInPicture2:p8,LucidePieChart:m8,LucidePiggyBank:f8,LucidePilcrow:g8,LucidePilcrowSquare:v8,LucidePill:x8,LucidePin:w8,LucidePinOff:M8,LucidePipette:L8,LucidePizza:S8,LucidePlane:Ci,LucidePlaneLanding:j8,LucidePlaneTakeoff:C8,LucidePlay:T1,LucidePlayCircle:_8,LucidePlaySquare:I8,LucidePlug:q8,LucidePlug2:b8,LucidePlugZap:A8,LucidePlugZap2:z8,LucidePlus:lt,LucidePlusCircle:T8,LucidePlusSquare:N8,LucidePocket:P8,LucidePocketKnife:D8,LucidePodcast:H8,LucidePointer:R8,LucidePointerOff:B8,LucidePopcorn:V8,LucidePopsicle:F8,LucidePoundSterling:E8,LucidePower:Z8,LucidePowerCircle:O8,LucidePowerOff:$8,LucidePowerSquare:U8,LucidePresentation:W8,LucidePrinter:G8,LucideProjector:K8,LucidePuzzle:X8,LucidePyramid:Q8,LucideQrCode:J8,LucideQuote:Y8,LucideRabbit:ef,LucideRadar:tf,LucideRadiation:nf,LucideRadio:of,LucideRadioReceiver:af,LucideRadioTower:rf,LucideRadius:cf,LucideRailSymbol:sf,LucideRainbow:lf,LucideRat:df,LucideRatio:hf,LucideReceipt:xf,LucideReceiptCent:uf,LucideReceiptEuro:yf,LucideReceiptIndianRupee:pf,LucideReceiptJapaneseYen:kf,LucideReceiptPoundSterling:mf,LucideReceiptRussianRuble:ff,LucideReceiptSwissFranc:vf,LucideReceiptText:gf,LucideRectangleHorizontal:Mf,LucideRectangleVertical:wf,LucideRecycle:Lf,LucideRedo:Cf,LucideRedo2:Sf,LucideRedoDot:jf,LucideRefreshCcw:If,LucideRefreshCcwDot:_f,LucideRefreshCw:_i,LucideRefreshCwOff:bf,LucideRefrigerator:zf,LucideRegex:Af,LucideRemoveFormatting:qf,LucideRepeat:Ii,LucideRepeat1:Tf,LucideRepeat2:Nf,LucideReplace:Pf,LucideReplaceAll:Df,LucideReply:Bf,LucideReplyAll:Hf,LucideRewind:Rf,LucideRibbon:Vf,LucideRocket:bi,LucideRockingChair:Ff,LucideRollerCoaster:Ef,LucideRotate3D:$n,LucideRotate3d:$n,LucideRotateCcw:cr,LucideRotateCw:Of,LucideRoute:Uf,LucideRouteOff:$f,LucideRouter:Zf,LucideRows:Un,LucideRows2:Un,LucideRows3:Zn,LucideRows4:Wf,LucideRss:Gf,LucideRuler:Kf,LucideRussianRuble:Xf,LucideSailboat:Qf,LucideSalad:Jf,LucideSandwich:Yf,LucideSatellite:t7,LucideSatelliteDish:e7,LucideSave:Gt,LucideSaveAll:n7,LucideScale:a7,LucideScale3D:Wn,LucideScale3d:Wn,LucideScaling:r7,LucideScan:h7,LucideScanBarcode:i7,LucideScanEye:o7,LucideScanFace:c7,LucideScanLine:s7,LucideScanSearch:l7,LucideScanText:d7,LucideScatterChart:u7,LucideSchool:p7,LucideSchool2:y7,LucideScissors:v7,LucideScissorsLineDashed:k7,LucideScissorsSquare:f7,LucideScissorsSquareDashedBottom:m7,LucideScreenShare:x7,LucideScreenShareOff:g7,LucideScroll:w7,LucideScrollText:M7,LucideSearch:sr,LucideSearchCheck:L7,LucideSearchCode:S7,LucideSearchSlash:j7,LucideSearchX:C7,LucideSend:I7,LucideSendHorizonal:Gn,LucideSendHorizontal:Gn,LucideSendToBack:_7,LucideSeparatorHorizontal:b7,LucideSeparatorVertical:z7,LucideServer:N7,LucideServerCog:A7,LucideServerCrash:q7,LucideServerOff:T7,LucideSettings:N1,LucideSettings2:D7,LucideShapes:P7,LucideShare:B7,LucideShare2:H7,LucideSheet:R7,LucideShell:V7,LucideShield:zi,LucideShieldAlert:F7,LucideShieldBan:E7,LucideShieldCheck:O7,LucideShieldClose:Kn,LucideShieldEllipsis:$7,LucideShieldHalf:U7,LucideShieldMinus:Z7,LucideShieldOff:W7,LucideShieldPlus:G7,LucideShieldQuestion:K7,LucideShieldX:Kn,LucideShip:Q7,LucideShipWheel:X7,LucideShirt:J7,LucideShoppingBag:Y7,LucideShoppingBasket:ev,LucideShoppingCart:tv,LucideShovel:nv,LucideShowerHead:av,LucideShrink:rv,LucideShrub:iv,LucideShuffle:ov,LucideSidebar:Bn,LucideSidebarClose:Dn,LucideSidebarOpen:Hn,LucideSigma:sv,LucideSigmaSquare:cv,LucideSignal:yv,LucideSignalHigh:lv,LucideSignalLow:dv,LucideSignalMedium:hv,LucideSignalZero:uv,LucideSignpost:kv,LucideSignpostBig:pv,LucideSiren:mv,LucideSkipBack:fv,LucideSkipForward:vv,LucideSkull:gv,LucideSlack:xv,LucideSlash:Mv,LucideSlashSquare:Xn,LucideSlice:wv,LucideSliders:Sv,LucideSlidersHorizontal:Lv,LucideSmartphone:_v,LucideSmartphoneCharging:jv,LucideSmartphoneNfc:Cv,LucideSmile:bv,LucideSmilePlus:Iv,LucideSnail:zv,LucideSnowflake:Av,LucideSofa:qv,LucideSortAsc:nn,LucideSortDesc:Y1,LucideSoup:Tv,LucideSpace:Nv,LucideSpade:Dv,LucideSparkle:Pv,LucideSparkles:Ot,LucideSpeaker:Hv,LucideSpeech:Bv,LucideSpellCheck:Vv,LucideSpellCheck2:Rv,LucideSpline:Fv,LucideSplit:$v,LucideSplitSquareHorizontal:Ev,LucideSplitSquareVertical:Ov,LucideSprayCan:Uv,LucideSprout:Zv,LucideSquare:Xv,LucideSquareAsterisk:rn,LucideSquareCode:fn,LucideSquareDashedBottom:Gv,LucideSquareDashedBottomCode:Wv,LucideSquareDot:xn,LucideSquareEqual:Mn,LucideSquareGantt:Vt,LucideSquareKanban:An,LucideSquareKanbanDashed:zn,LucideSquarePen:rt,LucideSquareSlash:Xn,LucideSquareStack:Kv,LucideSquareUser:Jn,LucideSquareUserRound:Qn,LucideSquircle:Qv,LucideSquirrel:Jv,LucideStamp:Yv,LucideStar:lr,LucideStarHalf:eg,LucideStarOff:tg,LucideStars:Ot,LucideStepBack:ng,LucideStepForward:ag,LucideStethoscope:rg,LucideSticker:ig,LucideStickyNote:og,LucideStopCircle:cg,LucideStore:sg,LucideStretchHorizontal:lg,LucideStretchVertical:dg,LucideStrikethrough:hg,LucideSubscript:ug,LucideSubtitles:yg,LucideSun:Ai,LucideSunDim:pg,LucideSunMedium:kg,LucideSunMoon:mg,LucideSunSnow:fg,LucideSunrise:vg,LucideSunset:gg,LucideSuperscript:xg,LucideSwatchBook:Mg,LucideSwissFranc:wg,LucideSwitchCamera:Lg,LucideSword:Sg,LucideSwords:jg,LucideSyringe:Cg,LucideTable:bg,LucideTable2:_g,LucideTableProperties:Ig,LucideTablet:Ag,LucideTabletSmartphone:zg,LucideTablets:qg,LucideTag:Tg,LucideTags:Ng,LucideTally1:Dg,LucideTally2:Pg,LucideTally3:Hg,LucideTally4:Bg,LucideTally5:Rg,LucideTangent:Vg,LucideTarget:Se,LucideTent:Eg,LucideTentTree:Fg,LucideTerminal:$g,LucideTerminalSquare:Og,LucideTestTube:Zg,LucideTestTube2:Ug,LucideTestTubes:Wg,LucideText:Qg,LucideTextCursor:Kg,LucideTextCursorInput:Gg,LucideTextQuote:Xg,LucideTextSelect:Yn,LucideTextSelection:Yn,LucideTheater:Jg,LucideThermometer:tx,LucideThermometerSnowflake:Yg,LucideThermometerSun:ex,LucideThumbsDown:nx,LucideThumbsUp:ax,LucideTicket:rx,LucideTimer:cx,LucideTimerOff:ix,LucideTimerReset:ox,LucideToggleLeft:sx,LucideToggleRight:lx,LucideTornado:dx,LucideTorus:hx,LucideTouchpad:yx,LucideTouchpadOff:ux,LucideTowerControl:px,LucideToyBrick:kx,LucideTractor:mx,LucideTrafficCone:fx,LucideTrain:ea,LucideTrainFront:gx,LucideTrainFrontTunnel:vx,LucideTrainTrack:xx,LucideTramFront:ea,LucideTrash:Mx,LucideTrash2:D1,LucideTreeDeciduous:wx,LucideTreePine:Lx,LucideTrees:Sx,LucideTrello:jx,LucideTrendingDown:Cx,LucideTrendingUp:dr,LucideTriangle:Ix,LucideTriangleRight:_x,LucideTrophy:va,LucideTruck:bx,LucideTurtle:zx,LucideTv:qx,LucideTv2:Ax,LucideTwitch:Tx,LucideTwitter:Nx,LucideType:Dx,LucideUmbrella:Hx,LucideUmbrellaOff:Px,LucideUnderline:Bx,LucideUndo:Fx,LucideUndo2:Rx,LucideUndoDot:Vx,LucideUnfoldHorizontal:Ex,LucideUnfoldVertical:Ox,LucideUngroup:$x,LucideUnlink:Zx,LucideUnlink2:Ux,LucideUnlock:Gx,LucideUnlockKeyhole:Wx,LucideUnplug:Kx,LucideUpload:qi,LucideUploadCloud:Xx,LucideUsb:Qx,LucideUser:Ti,LucideUser2:oa,LucideUserCheck:Jx,LucideUserCheck2:ta,LucideUserCircle:pn,LucideUserCircle2:yn,LucideUserCog:Yx,LucideUserCog2:na,LucideUserMinus:e9,LucideUserMinus2:aa,LucideUserPlus:t9,LucideUserPlus2:ra,LucideUserRound:oa,LucideUserRoundCheck:ta,LucideUserRoundCog:na,LucideUserRoundMinus:aa,LucideUserRoundPlus:ra,LucideUserRoundSearch:n9,LucideUserRoundX:ia,LucideUserSearch:a9,LucideUserSquare:Jn,LucideUserSquare2:Qn,LucideUserX:r9,LucideUserX2:ia,LucideUsers:hr,LucideUsers2:ca,LucideUsersRound:ca,LucideUtensils:o9,LucideUtensilsCrossed:i9,LucideUtilityPole:c9,LucideVariable:s9,LucideVault:l9,LucideVegan:d9,LucideVenetianMask:h9,LucideVerified:cn,LucideVibrate:y9,LucideVibrateOff:u9,LucideVideo:k9,LucideVideoOff:p9,LucideVideotape:m9,LucideView:f9,LucideVoicemail:v9,LucideVolume:w9,LucideVolume1:g9,LucideVolume2:x9,LucideVolumeX:M9,LucideVote:L9,LucideWallet:C9,LucideWallet2:S9,LucideWalletCards:j9,LucideWallpaper:_9,LucideWand:b9,LucideWand2:I9,LucideWarehouse:z9,LucideWashingMachine:A9,LucideWatch:q9,LucideWaves:T9,LucideWaypoints:N9,LucideWebcam:D9,LucideWebhook:P9,LucideWeight:H9,LucideWheat:R9,LucideWheatOff:B9,LucideWholeWord:V9,LucideWifi:E9,LucideWifiOff:F9,LucideWind:O9,LucideWine:U9,LucideWineOff:$9,LucideWorkflow:Z9,LucideWrapText:W9,LucideWrench:G9,LucideX:Ae,LucideXCircle:K9,LucideXOctagon:X9,LucideXSquare:Q9,LucideYoutube:J9,LucideZap:jt,LucideZapOff:Y9,LucideZoomIn:eM,LucideZoomOut:tM,Luggage:G5,LuggageIcon:G5,MSquare:K5,MSquareIcon:K5,Magnet:X5,MagnetIcon:X5,Mail:i3,MailCheck:Q5,MailCheckIcon:Q5,MailIcon:i3,MailMinus:J5,MailMinusIcon:J5,MailOpen:Y5,MailOpenIcon:Y5,MailPlus:e3,MailPlusIcon:e3,MailQuestion:t3,MailQuestionIcon:t3,MailSearch:n3,MailSearchIcon:n3,MailWarning:a3,MailWarningIcon:a3,MailX:r3,MailXIcon:r3,Mailbox:o3,MailboxIcon:o3,Mails:c3,MailsIcon:c3,Map:h3,MapIcon:h3,MapPin:l3,MapPinIcon:l3,MapPinOff:s3,MapPinOffIcon:s3,MapPinned:d3,MapPinnedIcon:d3,Martini:u3,MartiniIcon:u3,Maximize:p3,Maximize2:y3,Maximize2Icon:y3,MaximizeIcon:p3,Medal:k3,MedalIcon:k3,Megaphone:f3,MegaphoneIcon:f3,MegaphoneOff:m3,MegaphoneOffIcon:m3,Meh:v3,MehIcon:v3,MemoryStick:g3,MemoryStickIcon:g3,Menu:M3,MenuIcon:M3,MenuSquare:x3,MenuSquareIcon:x3,Merge:w3,MergeIcon:w3,MessageCircle:T3,MessageCircleCode:L3,MessageCircleCodeIcon:L3,MessageCircleDashed:S3,MessageCircleDashedIcon:S3,MessageCircleHeart:j3,MessageCircleHeartIcon:j3,MessageCircleIcon:T3,MessageCircleMore:C3,MessageCircleMoreIcon:C3,MessageCircleOff:_3,MessageCircleOffIcon:_3,MessageCirclePlus:I3,MessageCirclePlusIcon:I3,MessageCircleQuestion:b3,MessageCircleQuestionIcon:b3,MessageCircleReply:z3,MessageCircleReplyIcon:z3,MessageCircleWarning:A3,MessageCircleWarningIcon:A3,MessageCircleX:q3,MessageCircleXIcon:q3,MessageSquare:G3,MessageSquareCode:N3,MessageSquareCodeIcon:N3,MessageSquareDashed:D3,MessageSquareDashedIcon:D3,MessageSquareDiff:P3,MessageSquareDiffIcon:P3,MessageSquareDot:H3,MessageSquareDotIcon:H3,MessageSquareHeart:B3,MessageSquareHeartIcon:B3,MessageSquareIcon:G3,MessageSquareMore:R3,MessageSquareMoreIcon:R3,MessageSquareOff:V3,MessageSquareOffIcon:V3,MessageSquarePlus:F3,MessageSquarePlusIcon:F3,MessageSquareQuote:E3,MessageSquareQuoteIcon:E3,MessageSquareReply:O3,MessageSquareReplyIcon:O3,MessageSquareShare:$3,MessageSquareShareIcon:$3,MessageSquareText:U3,MessageSquareTextIcon:U3,MessageSquareWarning:Z3,MessageSquareWarningIcon:Z3,MessageSquareX:W3,MessageSquareXIcon:W3,MessagesSquare:K3,MessagesSquareIcon:K3,Mic:J3,Mic2:X3,Mic2Icon:X3,MicIcon:J3,MicOff:Q3,MicOffIcon:Q3,Microscope:Y3,MicroscopeIcon:Y3,Microwave:em,MicrowaveIcon:em,Milestone:tm,MilestoneIcon:tm,Milk:am,MilkIcon:am,MilkOff:nm,MilkOffIcon:nm,Minimize:im,Minimize2:rm,Minimize2Icon:rm,MinimizeIcon:im,Minus:sm,MinusCircle:om,MinusCircleIcon:om,MinusIcon:sm,MinusSquare:cm,MinusSquareIcon:cm,Monitor:xm,MonitorCheck:lm,MonitorCheckIcon:lm,MonitorDot:dm,MonitorDotIcon:dm,MonitorDown:hm,MonitorDownIcon:hm,MonitorIcon:xm,MonitorOff:um,MonitorOffIcon:um,MonitorPause:ym,MonitorPauseIcon:ym,MonitorPlay:pm,MonitorPlayIcon:pm,MonitorSmartphone:km,MonitorSmartphoneIcon:km,MonitorSpeaker:mm,MonitorSpeakerIcon:mm,MonitorStop:fm,MonitorStopIcon:fm,MonitorUp:vm,MonitorUpIcon:vm,MonitorX:gm,MonitorXIcon:gm,Moon:Si,MoonIcon:Si,MoonStar:Mm,MoonStarIcon:Mm,MoreHorizontal:wm,MoreHorizontalIcon:wm,MoreVertical:Lm,MoreVerticalIcon:Lm,Mountain:jm,MountainIcon:jm,MountainSnow:Sm,MountainSnowIcon:Sm,Mouse:zm,MouseIcon:zm,MousePointer:bm,MousePointer2:Cm,MousePointer2Icon:Cm,MousePointerClick:_m,MousePointerClickIcon:_m,MousePointerIcon:bm,MousePointerSquare:qn,MousePointerSquareDashed:Im,MousePointerSquareDashedIcon:Im,MousePointerSquareIcon:qn,Move:Om,Move3D:Tn,Move3DIcon:Tn,Move3d:Tn,Move3dIcon:Tn,MoveDiagonal:qm,MoveDiagonal2:Am,MoveDiagonal2Icon:Am,MoveDiagonalIcon:qm,MoveDown:Dm,MoveDownIcon:Dm,MoveDownLeft:Tm,MoveDownLeftIcon:Tm,MoveDownRight:Nm,MoveDownRightIcon:Nm,MoveHorizontal:Pm,MoveHorizontalIcon:Pm,MoveIcon:Om,MoveLeft:Hm,MoveLeftIcon:Hm,MoveRight:Bm,MoveRightIcon:Bm,MoveUp:Fm,MoveUpIcon:Fm,MoveUpLeft:Rm,MoveUpLeftIcon:Rm,MoveUpRight:Vm,MoveUpRightIcon:Vm,MoveVertical:Em,MoveVerticalIcon:Em,Music:ji,Music2:$m,Music2Icon:$m,Music3:Um,Music3Icon:Um,Music4:Zm,Music4Icon:Zm,MusicIcon:ji,Navigation:Xm,Navigation2:Gm,Navigation2Icon:Gm,Navigation2Off:Wm,Navigation2OffIcon:Wm,NavigationIcon:Xm,NavigationOff:Km,NavigationOffIcon:Km,Network:Qm,NetworkIcon:Qm,Newspaper:Jm,NewspaperIcon:Jm,Nfc:Ym,NfcIcon:Ym,Notebook:a6,NotebookIcon:a6,NotebookPen:e6,NotebookPenIcon:e6,NotebookTabs:t6,NotebookTabsIcon:t6,NotebookText:n6,NotebookTextIcon:n6,NotepadText:i6,NotepadTextDashed:r6,NotepadTextDashedIcon:r6,NotepadTextIcon:i6,Nut:c6,NutIcon:c6,NutOff:o6,NutOffIcon:o6,Octagon:s6,OctagonIcon:s6,Option:l6,OptionIcon:l6,Orbit:d6,OrbitIcon:d6,Outdent:h6,OutdentIcon:h6,Package:ir,Package2:u6,Package2Icon:u6,PackageCheck:y6,PackageCheckIcon:y6,PackageIcon:ir,PackageMinus:p6,PackageMinusIcon:p6,PackageOpen:k6,PackageOpenIcon:k6,PackagePlus:m6,PackagePlusIcon:m6,PackageSearch:f6,PackageSearchIcon:f6,PackageX:v6,PackageXIcon:v6,PaintBucket:g6,PaintBucketIcon:g6,PaintRoller:x6,PaintRollerIcon:x6,Paintbrush:w6,Paintbrush2:M6,Paintbrush2Icon:M6,PaintbrushIcon:w6,Palette:L6,PaletteIcon:L6,Palmtree:S6,PalmtreeIcon:S6,PanelBottom:_6,PanelBottomClose:j6,PanelBottomCloseIcon:j6,PanelBottomDashed:Nn,PanelBottomDashedIcon:Nn,PanelBottomIcon:_6,PanelBottomInactive:Nn,PanelBottomInactiveIcon:Nn,PanelBottomOpen:C6,PanelBottomOpenIcon:C6,PanelLeft:Bn,PanelLeftClose:Dn,PanelLeftCloseIcon:Dn,PanelLeftDashed:Pn,PanelLeftDashedIcon:Pn,PanelLeftIcon:Bn,PanelLeftInactive:Pn,PanelLeftInactiveIcon:Pn,PanelLeftOpen:Hn,PanelLeftOpenIcon:Hn,PanelRight:z6,PanelRightClose:I6,PanelRightCloseIcon:I6,PanelRightDashed:Rn,PanelRightDashedIcon:Rn,PanelRightIcon:z6,PanelRightInactive:Rn,PanelRightInactiveIcon:Rn,PanelRightOpen:b6,PanelRightOpenIcon:b6,PanelTop:T6,PanelTopClose:A6,PanelTopCloseIcon:A6,PanelTopDashed:Vn,PanelTopDashedIcon:Vn,PanelTopIcon:T6,PanelTopInactive:Vn,PanelTopInactiveIcon:Vn,PanelTopOpen:q6,PanelTopOpenIcon:q6,PanelsLeftBottom:N6,PanelsLeftBottomIcon:N6,PanelsLeftRight:gn,PanelsLeftRightIcon:gn,PanelsRightBottom:D6,PanelsRightBottomIcon:D6,PanelsTopBottom:Zn,PanelsTopBottomIcon:Zn,PanelsTopLeft:Fn,PanelsTopLeftIcon:Fn,Paperclip:P6,PaperclipIcon:P6,Parentheses:H6,ParenthesesIcon:H6,ParkingCircle:R6,ParkingCircleIcon:R6,ParkingCircleOff:B6,ParkingCircleOffIcon:B6,ParkingMeter:V6,ParkingMeterIcon:V6,ParkingSquare:E6,ParkingSquareIcon:E6,ParkingSquareOff:F6,ParkingSquareOffIcon:F6,PartyPopper:O6,PartyPopperIcon:O6,Pause:or,PauseCircle:$6,PauseCircleIcon:$6,PauseIcon:or,PauseOctagon:U6,PauseOctagonIcon:U6,PawPrint:Z6,PawPrintIcon:Z6,PcCase:W6,PcCaseIcon:W6,Pen:On,PenBox:rt,PenBoxIcon:rt,PenIcon:On,PenLine:En,PenLineIcon:En,PenSquare:rt,PenSquareIcon:rt,PenTool:G6,PenToolIcon:G6,Pencil:Q6,PencilIcon:Q6,PencilLine:K6,PencilLineIcon:K6,PencilRuler:X6,PencilRulerIcon:X6,Pentagon:J6,PentagonIcon:J6,Percent:n8,PercentCircle:Y6,PercentCircleIcon:Y6,PercentDiamond:e8,PercentDiamondIcon:e8,PercentIcon:n8,PercentSquare:t8,PercentSquareIcon:t8,PersonStanding:a8,PersonStandingIcon:a8,Phone:d8,PhoneCall:r8,PhoneCallIcon:r8,PhoneForwarded:i8,PhoneForwardedIcon:i8,PhoneIcon:d8,PhoneIncoming:o8,PhoneIncomingIcon:o8,PhoneMissed:c8,PhoneMissedIcon:c8,PhoneOff:s8,PhoneOffIcon:s8,PhoneOutgoing:l8,PhoneOutgoingIcon:l8,Pi:u8,PiIcon:u8,PiSquare:h8,PiSquareIcon:h8,Piano:y8,PianoIcon:y8,PictureInPicture:k8,PictureInPicture2:p8,PictureInPicture2Icon:p8,PictureInPictureIcon:k8,PieChart:m8,PieChartIcon:m8,PiggyBank:f8,PiggyBankIcon:f8,Pilcrow:g8,PilcrowIcon:g8,PilcrowSquare:v8,PilcrowSquareIcon:v8,Pill:x8,PillIcon:x8,Pin:w8,PinIcon:w8,PinOff:M8,PinOffIcon:M8,Pipette:L8,PipetteIcon:L8,Pizza:S8,PizzaIcon:S8,Plane:Ci,PlaneIcon:Ci,PlaneLanding:j8,PlaneLandingIcon:j8,PlaneTakeoff:C8,PlaneTakeoffIcon:C8,Play:T1,PlayCircle:_8,PlayCircleIcon:_8,PlayIcon:T1,PlaySquare:I8,PlaySquareIcon:I8,Plug:q8,Plug2:b8,Plug2Icon:b8,PlugIcon:q8,PlugZap:A8,PlugZap2:z8,PlugZap2Icon:z8,PlugZapIcon:A8,Plus:lt,PlusCircle:T8,PlusCircleIcon:T8,PlusIcon:lt,PlusSquare:N8,PlusSquareIcon:N8,Pocket:P8,PocketIcon:P8,PocketKnife:D8,PocketKnifeIcon:D8,Podcast:H8,PodcastIcon:H8,Pointer:R8,PointerIcon:R8,PointerOff:B8,PointerOffIcon:B8,Popcorn:V8,PopcornIcon:V8,Popsicle:F8,PopsicleIcon:F8,PoundSterling:E8,PoundSterlingIcon:E8,Power:Z8,PowerCircle:O8,PowerCircleIcon:O8,PowerIcon:Z8,PowerOff:$8,PowerOffIcon:$8,PowerSquare:U8,PowerSquareIcon:U8,Presentation:W8,PresentationIcon:W8,Printer:G8,PrinterIcon:G8,Projector:K8,ProjectorIcon:K8,Puzzle:X8,PuzzleIcon:X8,Pyramid:Q8,PyramidIcon:Q8,QrCode:J8,QrCodeIcon:J8,Quote:Y8,QuoteIcon:Y8,Rabbit:ef,RabbitIcon:ef,Radar:tf,RadarIcon:tf,Radiation:nf,RadiationIcon:nf,Radio:of,RadioIcon:of,RadioReceiver:af,RadioReceiverIcon:af,RadioTower:rf,RadioTowerIcon:rf,Radius:cf,RadiusIcon:cf,RailSymbol:sf,RailSymbolIcon:sf,Rainbow:lf,RainbowIcon:lf,Rat:df,RatIcon:df,Ratio:hf,RatioIcon:hf,Receipt:xf,ReceiptCent:uf,ReceiptCentIcon:uf,ReceiptEuro:yf,ReceiptEuroIcon:yf,ReceiptIcon:xf,ReceiptIndianRupee:pf,ReceiptIndianRupeeIcon:pf,ReceiptJapaneseYen:kf,ReceiptJapaneseYenIcon:kf,ReceiptPoundSterling:mf,ReceiptPoundSterlingIcon:mf,ReceiptRussianRuble:ff,ReceiptRussianRubleIcon:ff,ReceiptSwissFranc:vf,ReceiptSwissFrancIcon:vf,ReceiptText:gf,ReceiptTextIcon:gf,RectangleHorizontal:Mf,RectangleHorizontalIcon:Mf,RectangleVertical:wf,RectangleVerticalIcon:wf,Recycle:Lf,RecycleIcon:Lf,Redo:Cf,Redo2:Sf,Redo2Icon:Sf,RedoDot:jf,RedoDotIcon:jf,RedoIcon:Cf,RefreshCcw:If,RefreshCcwDot:_f,RefreshCcwDotIcon:_f,RefreshCcwIcon:If,RefreshCw:_i,RefreshCwIcon:_i,RefreshCwOff:bf,RefreshCwOffIcon:bf,Refrigerator:zf,RefrigeratorIcon:zf,Regex:Af,RegexIcon:Af,RemoveFormatting:qf,RemoveFormattingIcon:qf,Repeat:Ii,Repeat1:Tf,Repeat1Icon:Tf,Repeat2:Nf,Repeat2Icon:Nf,RepeatIcon:Ii,Replace:Pf,ReplaceAll:Df,ReplaceAllIcon:Df,ReplaceIcon:Pf,Reply:Bf,ReplyAll:Hf,ReplyAllIcon:Hf,ReplyIcon:Bf,Rewind:Rf,RewindIcon:Rf,Ribbon:Vf,RibbonIcon:Vf,Rocket:bi,RocketIcon:bi,RockingChair:Ff,RockingChairIcon:Ff,RollerCoaster:Ef,RollerCoasterIcon:Ef,Rotate3D:$n,Rotate3DIcon:$n,Rotate3d:$n,Rotate3dIcon:$n,RotateCcw:cr,RotateCcwIcon:cr,RotateCw:Of,RotateCwIcon:Of,Route:Uf,RouteIcon:Uf,RouteOff:$f,RouteOffIcon:$f,Router:Zf,RouterIcon:Zf,Rows:Un,Rows2:Un,Rows2Icon:Un,Rows3:Zn,Rows3Icon:Zn,Rows4:Wf,Rows4Icon:Wf,RowsIcon:Un,Rss:Gf,RssIcon:Gf,Ruler:Kf,RulerIcon:Kf,RussianRuble:Xf,RussianRubleIcon:Xf,Sailboat:Qf,SailboatIcon:Qf,Salad:Jf,SaladIcon:Jf,Sandwich:Yf,SandwichIcon:Yf,Satellite:t7,SatelliteDish:e7,SatelliteDishIcon:e7,SatelliteIcon:t7,Save:Gt,SaveAll:n7,SaveAllIcon:n7,SaveIcon:Gt,Scale:a7,Scale3D:Wn,Scale3DIcon:Wn,Scale3d:Wn,Scale3dIcon:Wn,ScaleIcon:a7,Scaling:r7,ScalingIcon:r7,Scan:h7,ScanBarcode:i7,ScanBarcodeIcon:i7,ScanEye:o7,ScanEyeIcon:o7,ScanFace:c7,ScanFaceIcon:c7,ScanIcon:h7,ScanLine:s7,ScanLineIcon:s7,ScanSearch:l7,ScanSearchIcon:l7,ScanText:d7,ScanTextIcon:d7,ScatterChart:u7,ScatterChartIcon:u7,School:p7,School2:y7,School2Icon:y7,SchoolIcon:p7,Scissors:v7,ScissorsIcon:v7,ScissorsLineDashed:k7,ScissorsLineDashedIcon:k7,ScissorsSquare:f7,ScissorsSquareDashedBottom:m7,ScissorsSquareDashedBottomIcon:m7,ScissorsSquareIcon:f7,ScreenShare:x7,ScreenShareIcon:x7,ScreenShareOff:g7,ScreenShareOffIcon:g7,Scroll:w7,ScrollIcon:w7,ScrollText:M7,ScrollTextIcon:M7,Search:sr,SearchCheck:L7,SearchCheckIcon:L7,SearchCode:S7,SearchCodeIcon:S7,SearchIcon:sr,SearchSlash:j7,SearchSlashIcon:j7,SearchX:C7,SearchXIcon:C7,Send:I7,SendHorizonal:Gn,SendHorizonalIcon:Gn,SendHorizontal:Gn,SendHorizontalIcon:Gn,SendIcon:I7,SendToBack:_7,SendToBackIcon:_7,SeparatorHorizontal:b7,SeparatorHorizontalIcon:b7,SeparatorVertical:z7,SeparatorVerticalIcon:z7,Server:N7,ServerCog:A7,ServerCogIcon:A7,ServerCrash:q7,ServerCrashIcon:q7,ServerIcon:N7,ServerOff:T7,ServerOffIcon:T7,Settings:N1,Settings2:D7,Settings2Icon:D7,SettingsIcon:N1,Shapes:P7,ShapesIcon:P7,Share:B7,Share2:H7,Share2Icon:H7,ShareIcon:B7,Sheet:R7,SheetIcon:R7,Shell:V7,ShellIcon:V7,Shield:zi,ShieldAlert:F7,ShieldAlertIcon:F7,ShieldBan:E7,ShieldBanIcon:E7,ShieldCheck:O7,ShieldCheckIcon:O7,ShieldClose:Kn,ShieldCloseIcon:Kn,ShieldEllipsis:$7,ShieldEllipsisIcon:$7,ShieldHalf:U7,ShieldHalfIcon:U7,ShieldIcon:zi,ShieldMinus:Z7,ShieldMinusIcon:Z7,ShieldOff:W7,ShieldOffIcon:W7,ShieldPlus:G7,ShieldPlusIcon:G7,ShieldQuestion:K7,ShieldQuestionIcon:K7,ShieldX:Kn,ShieldXIcon:Kn,Ship:Q7,ShipIcon:Q7,ShipWheel:X7,ShipWheelIcon:X7,Shirt:J7,ShirtIcon:J7,ShoppingBag:Y7,ShoppingBagIcon:Y7,ShoppingBasket:ev,ShoppingBasketIcon:ev,ShoppingCart:tv,ShoppingCartIcon:tv,Shovel:nv,ShovelIcon:nv,ShowerHead:av,ShowerHeadIcon:av,Shrink:rv,ShrinkIcon:rv,Shrub:iv,ShrubIcon:iv,Shuffle:ov,ShuffleIcon:ov,Sidebar:Bn,SidebarClose:Dn,SidebarCloseIcon:Dn,SidebarIcon:Bn,SidebarOpen:Hn,SidebarOpenIcon:Hn,Sigma:sv,SigmaIcon:sv,SigmaSquare:cv,SigmaSquareIcon:cv,Signal:yv,SignalHigh:lv,SignalHighIcon:lv,SignalIcon:yv,SignalLow:dv,SignalLowIcon:dv,SignalMedium:hv,SignalMediumIcon:hv,SignalZero:uv,SignalZeroIcon:uv,Signpost:kv,SignpostBig:pv,SignpostBigIcon:pv,SignpostIcon:kv,Siren:mv,SirenIcon:mv,SkipBack:fv,SkipBackIcon:fv,SkipForward:vv,SkipForwardIcon:vv,Skull:gv,SkullIcon:gv,Slack:xv,SlackIcon:xv,Slash:Mv,SlashIcon:Mv,SlashSquare:Xn,SlashSquareIcon:Xn,Slice:wv,SliceIcon:wv,Sliders:Sv,SlidersHorizontal:Lv,SlidersHorizontalIcon:Lv,SlidersIcon:Sv,Smartphone:_v,SmartphoneCharging:jv,SmartphoneChargingIcon:jv,SmartphoneIcon:_v,SmartphoneNfc:Cv,SmartphoneNfcIcon:Cv,Smile:bv,SmileIcon:bv,SmilePlus:Iv,SmilePlusIcon:Iv,Snail:zv,SnailIcon:zv,Snowflake:Av,SnowflakeIcon:Av,Sofa:qv,SofaIcon:qv,SortAsc:nn,SortAscIcon:nn,SortDesc:Y1,SortDescIcon:Y1,Soup:Tv,SoupIcon:Tv,Space:Nv,SpaceIcon:Nv,Spade:Dv,SpadeIcon:Dv,Sparkle:Pv,SparkleIcon:Pv,Sparkles:Ot,SparklesIcon:Ot,Speaker:Hv,SpeakerIcon:Hv,Speech:Bv,SpeechIcon:Bv,SpellCheck:Vv,SpellCheck2:Rv,SpellCheck2Icon:Rv,SpellCheckIcon:Vv,Spline:Fv,SplineIcon:Fv,Split:$v,SplitIcon:$v,SplitSquareHorizontal:Ev,SplitSquareHorizontalIcon:Ev,SplitSquareVertical:Ov,SplitSquareVerticalIcon:Ov,SprayCan:Uv,SprayCanIcon:Uv,Sprout:Zv,SproutIcon:Zv,Square:Xv,SquareAsterisk:rn,SquareAsteriskIcon:rn,SquareCode:fn,SquareCodeIcon:fn,SquareDashedBottom:Gv,SquareDashedBottomCode:Wv,SquareDashedBottomCodeIcon:Wv,SquareDashedBottomIcon:Gv,SquareDot:xn,SquareDotIcon:xn,SquareEqual:Mn,SquareEqualIcon:Mn,SquareGantt:Vt,SquareGanttIcon:Vt,SquareIcon:Xv,SquareKanban:An,SquareKanbanDashed:zn,SquareKanbanDashedIcon:zn,SquareKanbanIcon:An,SquarePen:rt,SquarePenIcon:rt,SquareSlash:Xn,SquareSlashIcon:Xn,SquareStack:Kv,SquareStackIcon:Kv,SquareUser:Jn,SquareUserIcon:Jn,SquareUserRound:Qn,SquareUserRoundIcon:Qn,Squircle:Qv,SquircleIcon:Qv,Squirrel:Jv,SquirrelIcon:Jv,Stamp:Yv,StampIcon:Yv,Star:lr,StarHalf:eg,StarHalfIcon:eg,StarIcon:lr,StarOff:tg,StarOffIcon:tg,Stars:Ot,StarsIcon:Ot,StepBack:ng,StepBackIcon:ng,StepForward:ag,StepForwardIcon:ag,Stethoscope:rg,StethoscopeIcon:rg,Sticker:ig,StickerIcon:ig,StickyNote:og,StickyNoteIcon:og,StopCircle:cg,StopCircleIcon:cg,Store:sg,StoreIcon:sg,StretchHorizontal:lg,StretchHorizontalIcon:lg,StretchVertical:dg,StretchVerticalIcon:dg,Strikethrough:hg,StrikethroughIcon:hg,Subscript:ug,SubscriptIcon:ug,Subtitles:yg,SubtitlesIcon:yg,Sun:Ai,SunDim:pg,SunDimIcon:pg,SunIcon:Ai,SunMedium:kg,SunMediumIcon:kg,SunMoon:mg,SunMoonIcon:mg,SunSnow:fg,SunSnowIcon:fg,Sunrise:vg,SunriseIcon:vg,Sunset:gg,SunsetIcon:gg,Superscript:xg,SuperscriptIcon:xg,SwatchBook:Mg,SwatchBookIcon:Mg,SwissFranc:wg,SwissFrancIcon:wg,SwitchCamera:Lg,SwitchCameraIcon:Lg,Sword:Sg,SwordIcon:Sg,Swords:jg,SwordsIcon:jg,Syringe:Cg,SyringeIcon:Cg,Table:bg,Table2:_g,Table2Icon:_g,TableIcon:bg,TableProperties:Ig,TablePropertiesIcon:Ig,Tablet:Ag,TabletIcon:Ag,TabletSmartphone:zg,TabletSmartphoneIcon:zg,Tablets:qg,TabletsIcon:qg,Tag:Tg,TagIcon:Tg,Tags:Ng,TagsIcon:Ng,Tally1:Dg,Tally1Icon:Dg,Tally2:Pg,Tally2Icon:Pg,Tally3:Hg,Tally3Icon:Hg,Tally4:Bg,Tally4Icon:Bg,Tally5:Rg,Tally5Icon:Rg,Tangent:Vg,TangentIcon:Vg,Target:Se,TargetIcon:Se,Tent:Eg,TentIcon:Eg,TentTree:Fg,TentTreeIcon:Fg,Terminal:$g,TerminalIcon:$g,TerminalSquare:Og,TerminalSquareIcon:Og,TestTube:Zg,TestTube2:Ug,TestTube2Icon:Ug,TestTubeIcon:Zg,TestTubes:Wg,TestTubesIcon:Wg,Text:Qg,TextCursor:Kg,TextCursorIcon:Kg,TextCursorInput:Gg,TextCursorInputIcon:Gg,TextIcon:Qg,TextQuote:Xg,TextQuoteIcon:Xg,TextSelect:Yn,TextSelectIcon:Yn,TextSelection:Yn,TextSelectionIcon:Yn,Theater:Jg,TheaterIcon:Jg,Thermometer:tx,ThermometerIcon:tx,ThermometerSnowflake:Yg,ThermometerSnowflakeIcon:Yg,ThermometerSun:ex,ThermometerSunIcon:ex,ThumbsDown:nx,ThumbsDownIcon:nx,ThumbsUp:ax,ThumbsUpIcon:ax,Ticket:rx,TicketIcon:rx,Timer:cx,TimerIcon:cx,TimerOff:ix,TimerOffIcon:ix,TimerReset:ox,TimerResetIcon:ox,ToggleLeft:sx,ToggleLeftIcon:sx,ToggleRight:lx,ToggleRightIcon:lx,Tornado:dx,TornadoIcon:dx,Torus:hx,TorusIcon:hx,Touchpad:yx,TouchpadIcon:yx,TouchpadOff:ux,TouchpadOffIcon:ux,TowerControl:px,TowerControlIcon:px,ToyBrick:kx,ToyBrickIcon:kx,Tractor:mx,TractorIcon:mx,TrafficCone:fx,TrafficConeIcon:fx,Train:ea,TrainFront:gx,TrainFrontIcon:gx,TrainFrontTunnel:vx,TrainFrontTunnelIcon:vx,TrainIcon:ea,TrainTrack:xx,TrainTrackIcon:xx,TramFront:ea,TramFrontIcon:ea,Trash:Mx,Trash2:D1,Trash2Icon:D1,TrashIcon:Mx,TreeDeciduous:wx,TreeDeciduousIcon:wx,TreePine:Lx,TreePineIcon:Lx,Trees:Sx,TreesIcon:Sx,Trello:jx,TrelloIcon:jx,TrendingDown:Cx,TrendingDownIcon:Cx,TrendingUp:dr,TrendingUpIcon:dr,Triangle:Ix,TriangleIcon:Ix,TriangleRight:_x,TriangleRightIcon:_x,Trophy:va,TrophyIcon:va,Truck:bx,TruckIcon:bx,Turtle:zx,TurtleIcon:zx,Tv:qx,Tv2:Ax,Tv2Icon:Ax,TvIcon:qx,Twitch:Tx,TwitchIcon:Tx,Twitter:Nx,TwitterIcon:Nx,Type:Dx,TypeIcon:Dx,Umbrella:Hx,UmbrellaIcon:Hx,UmbrellaOff:Px,UmbrellaOffIcon:Px,Underline:Bx,UnderlineIcon:Bx,Undo:Fx,Undo2:Rx,Undo2Icon:Rx,UndoDot:Vx,UndoDotIcon:Vx,UndoIcon:Fx,UnfoldHorizontal:Ex,UnfoldHorizontalIcon:Ex,UnfoldVertical:Ox,UnfoldVerticalIcon:Ox,Ungroup:$x,UngroupIcon:$x,Unlink:Zx,Unlink2:Ux,Unlink2Icon:Ux,UnlinkIcon:Zx,Unlock:Gx,UnlockIcon:Gx,UnlockKeyhole:Wx,UnlockKeyholeIcon:Wx,Unplug:Kx,UnplugIcon:Kx,Upload:qi,UploadCloud:Xx,UploadCloudIcon:Xx,UploadIcon:qi,Usb:Qx,UsbIcon:Qx,User:Ti,User2:oa,User2Icon:oa,UserCheck:Jx,UserCheck2:ta,UserCheck2Icon:ta,UserCheckIcon:Jx,UserCircle:pn,UserCircle2:yn,UserCircle2Icon:yn,UserCircleIcon:pn,UserCog:Yx,UserCog2:na,UserCog2Icon:na,UserCogIcon:Yx,UserIcon:Ti,UserMinus:e9,UserMinus2:aa,UserMinus2Icon:aa,UserMinusIcon:e9,UserPlus:t9,UserPlus2:ra,UserPlus2Icon:ra,UserPlusIcon:t9,UserRound:oa,UserRoundCheck:ta,UserRoundCheckIcon:ta,UserRoundCog:na,UserRoundCogIcon:na,UserRoundIcon:oa,UserRoundMinus:aa,UserRoundMinusIcon:aa,UserRoundPlus:ra,UserRoundPlusIcon:ra,UserRoundSearch:n9,UserRoundSearchIcon:n9,UserRoundX:ia,UserRoundXIcon:ia,UserSearch:a9,UserSearchIcon:a9,UserSquare:Jn,UserSquare2:Qn,UserSquare2Icon:Qn,UserSquareIcon:Jn,UserX:r9,UserX2:ia,UserX2Icon:ia,UserXIcon:r9,Users:hr,Users2:ca,Users2Icon:ca,UsersIcon:hr,UsersRound:ca,UsersRoundIcon:ca,Utensils:o9,UtensilsCrossed:i9,UtensilsCrossedIcon:i9,UtensilsIcon:o9,UtilityPole:c9,UtilityPoleIcon:c9,Variable:s9,VariableIcon:s9,Vault:l9,VaultIcon:l9,Vegan:d9,VeganIcon:d9,VenetianMask:h9,VenetianMaskIcon:h9,Verified:cn,VerifiedIcon:cn,Vibrate:y9,VibrateIcon:y9,VibrateOff:u9,VibrateOffIcon:u9,Video:k9,VideoIcon:k9,VideoOff:p9,VideoOffIcon:p9,Videotape:m9,VideotapeIcon:m9,View:f9,ViewIcon:f9,Voicemail:v9,VoicemailIcon:v9,Volume:w9,Volume1:g9,Volume1Icon:g9,Volume2:x9,Volume2Icon:x9,VolumeIcon:w9,VolumeX:M9,VolumeXIcon:M9,Vote:L9,VoteIcon:L9,Wallet:C9,Wallet2:S9,Wallet2Icon:S9,WalletCards:j9,WalletCardsIcon:j9,WalletIcon:C9,Wallpaper:_9,WallpaperIcon:_9,Wand:b9,Wand2:I9,Wand2Icon:I9,WandIcon:b9,Warehouse:z9,WarehouseIcon:z9,WashingMachine:A9,WashingMachineIcon:A9,Watch:q9,WatchIcon:q9,Waves:T9,WavesIcon:T9,Waypoints:N9,WaypointsIcon:N9,Webcam:D9,WebcamIcon:D9,Webhook:P9,WebhookIcon:P9,Weight:H9,WeightIcon:H9,Wheat:R9,WheatIcon:R9,WheatOff:B9,WheatOffIcon:B9,WholeWord:V9,WholeWordIcon:V9,Wifi:E9,WifiIcon:E9,WifiOff:F9,WifiOffIcon:F9,Wind:O9,WindIcon:O9,Wine:U9,WineIcon:U9,WineOff:$9,WineOffIcon:$9,Workflow:Z9,WorkflowIcon:Z9,WrapText:W9,WrapTextIcon:W9,Wrench:G9,WrenchIcon:G9,X:Ae,XCircle:K9,XCircleIcon:K9,XIcon:Ae,XOctagon:X9,XOctagonIcon:X9,XSquare:Q9,XSquareIcon:Q9,Youtube:J9,YoutubeIcon:J9,Zap:jt,ZapIcon:jt,ZapOff:Y9,ZapOffIcon:Y9,ZoomIn:eM,ZoomInIcon:eM,ZoomOut:tM,ZoomOutIcon:tM,createLucideIcon:r,icons:dA},Symbol.toStringTag,{value:"Module"})),hA={},Dj=e=>{let t;const n=new Set,a=(y,p)=>{const m=typeof y=="function"?y(t):y;if(!Object.is(m,t)){const g=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),n.forEach(f=>f(t,g))}},o=()=>t,d={setState:a,getState:o,getInitialState:()=>h,subscribe:y=>(n.add(y),()=>n.delete(y)),destroy:()=>{(hA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},h=t=e(a,o,d);return d},uA=e=>e?Dj(e):Dj;var iI={exports:{}},oI={},cI={exports:{}},sI={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=S;function yA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pA=typeof Object.is=="function"?Object.is:yA,kA=gr.useState,mA=gr.useEffect,fA=gr.useLayoutEffect,vA=gr.useDebugValue;function gA(e,t){var n=t(),a=kA({inst:{value:n,getSnapshot:t}}),o=a[0].inst,c=a[1];return fA(function(){o.value=n,o.getSnapshot=t,Sw(o)&&c({inst:o})},[e,n,t]),mA(function(){return Sw(o)&&c({inst:o}),e(function(){Sw(o)&&c({inst:o})})},[e]),vA(n),n}function Sw(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pA(e,n)}catch{return!0}}function xA(e,t){return t()}var MA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?xA:gA;sI.useSyncExternalStore=gr.useSyncExternalStore!==void 0?gr.useSyncExternalStore:MA;cI.exports=sI;var wA=cI.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZM=S,LA=wA;function SA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jA=typeof Object.is=="function"?Object.is:SA,CA=LA.useSyncExternalStore,_A=ZM.useRef,IA=ZM.useEffect,bA=ZM.useMemo,zA=ZM.useDebugValue;oI.useSyncExternalStoreWithSelector=function(e,t,n,a,o){var c=_A(null);if(c.current===null){var s={hasValue:!1,value:null};c.current=s}else s=c.current;c=bA(function(){function d(g){if(!h){if(h=!0,y=g,g=a(g),o!==void 0&&s.hasValue){var f=s.value;if(o(f,g))return p=f}return p=g}if(f=p,jA(y,g))return f;var x=a(g);return o!==void 0&&o(f,x)?(y=g,f):(y=g,p=x)}var h=!1,y,p,m=n===void 0?null:n;return[function(){return d(t())},m===null?void 0:function(){return d(m())}]},[t,n,a,o]);var l=CA(e,c[0],c[1]);return IA(function(){s.hasValue=!0,s.value=l},[l]),zA(l),l};iI.exports=oI;var AA=iI.exports;const qA=Zj(AA),lI={},{useDebugValue:TA}=Tt,{useSyncExternalStoreWithSelector:NA}=qA;let Pj=!1;const DA=e=>e;function PA(e,t=DA,n){(lI?"production":void 0)!=="production"&&n&&!Pj&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Pj=!0);const a=NA(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return TA(a),a}const Hj=e=>{(lI?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?uA(e):e,n=(a,o)=>PA(t,a,o);return Object.assign(n,t),n},h1=e=>e?Hj(e):Hj;let Io;const HA=new Uint8Array(16);function BA(){if(!Io&&(Io=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Io))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Io(HA)}const De=[];for(let e=0;e<256;++e)De.push((e+256).toString(16).slice(1));function RA(e,t=0){return De[e[t+0]]+De[e[t+1]]+De[e[t+2]]+De[e[t+3]]+"-"+De[e[t+4]]+De[e[t+5]]+"-"+De[e[t+6]]+De[e[t+7]]+"-"+De[e[t+8]]+De[e[t+9]]+"-"+De[e[t+10]]+De[e[t+11]]+De[e[t+12]]+De[e[t+13]]+De[e[t+14]]+De[e[t+15]]}const VA=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Bj={randomUUID:VA};function dI(e,t,n){if(Bj.randomUUID&&!e)return Bj.randomUUID();e=e||{};const a=e.random||(e.rng||BA)();return a[6]=a[6]&15|64,a[8]=a[8]&63|128,RA(a)}function P1(){return dI()}function R(){return new Date().toISOString()}function Ni(e){if(!e)return"";const t=new Date(e),n=new Date,a=new Date(n);a.setDate(a.getDate()+1);const o=new Date(n);return o.setDate(o.getDate()-1),t.toDateString()===n.toDateString()?"Today":t.toDateString()===a.toDateString()?"Tomorrow":t.toDateString()===o.toDateString()?"Yesterday":t.toLocaleDateString("en-US",{month:"short",day:"numeric",year:t.getFullYear()!==n.getFullYear()?"numeric":void 0})}function FA(e){return{low:"var(--color-priority-low)",medium:"var(--color-priority-medium)",high:"var(--color-priority-high)",urgent:"var(--color-priority-urgent)"}[e]}function EA(e){if(e.subtasks.length===0)return e.status==="done"?100:0;const t=e.subtasks.filter(n=>n.isCompleted).length;return Math.round(t/e.subtasks.length*100)}function IM(e){if(!e)return!1;const t=new Date(e),n=new Date;return n.setHours(0,0,0,0),t<n}function hI(e){if(!e)return!1;const t=new Date(e),n=new Date;return t.toDateString()===n.toDateString()}function WM(e,t){return!e.dependencies||e.dependencies.length===0?!1:e.dependencies.some(n=>{const a=t.find(o=>o.id===n);return a&&a.status!=="done"})}function OA(e){let t=0,n=0,a=0;return e.forEach(c=>{c.subtasks.length===0?(t+=1,c.status==="done"&&(n+=1)):(t+=c.subtasks.length,n+=c.subtasks.filter(s=>s.isCompleted).length),WM(c,e)&&c.status!=="done"&&(a+=1)}),{progress:t>0?Math.round(n/t*100):0,totalSubtasks:t,completedSubtasks:n,blockedCount:a}}function $A(e,t){const n=[],a=o=>{o.dependencies&&o.dependencies.forEach(c=>{const s=t.find(l=>l.id===c);s&&!n.find(l=>l.id===s.id)&&(n.push(s),a(s))})};return a(e),n}function bM(e){if(e.length===0)return"on_track";if(e.some(c=>c.status!=="done"&&WM(c,e)))return"blocked";const n=e.some(c=>c.status!=="done"&&IM(c.dueDate)),a=new Date;a.setDate(a.getDate()-7);const o=e.some(c=>new Date(c.updatedAt)>a);return n||!o?"at_risk":"on_track"}function uI(e){const t=e.filter(o=>o.status!=="done"&&!WM(o,e));if(t.length===0)return null;const n={urgent:4,high:3,medium:2,low:1};return[...t].sort((o,c)=>{const s=(n[c.priority]||0)-(n[o.priority]||0);if(s!==0)return s;const l={high:3,medium:2,low:1};return(l[c.impact||"medium"]||0)-(l[o.impact||"medium"]||0)})[0]}function UA(e){const t=e.filter(l=>l.status==="done"&&l.completedAt).sort((l,d)=>new Date(d.completedAt).getTime()-new Date(l.completedAt).getTime());if(t.length===0)return 0;let n=0;const a=new Date;a.setHours(0,0,0,0);const o=new Date(t[0].completedAt);if(o.setHours(0,0,0,0),o.getTime()<a.getTime()-864e5)return 0;const c=new Set(t.map(l=>new Date(l.completedAt).toDateString()));let s=new Date(a);if(!c.has(s.toDateString())&&(s.setDate(s.getDate()-1),!c.has(s.toDateString())))return 0;for(;c.has(s.toDateString());)n++,s.setDate(s.getDate()-1);return n}function ZA(e){const t=e.filter(l=>(l.status==="in_progress"||l.status==="todo"&&l.dueDate&&hI(l.dueDate))&&!l.isArchived);if(t.length===0)return{percentage:0,level:"Zen"};let n=0;const a={high:3,medium:2,low:1};t.forEach(l=>{n+=a[l.energyRequired||"medium"]||2});const c=Math.min(100,Math.round(n/15*100));let s="Zen";return c>80?s="Overload":c>50?s="Heavy":c>20&&(s="Moderate"),{percentage:c,level:s}}function WA(){const e=new Date,t=new Date;t.setHours(8,0,0,0);const n=new Date;n.setHours(22,0,0,0);const a=(n.getTime()-t.getTime())/1e3/60;let o=(e.getTime()-t.getTime())/1e3/60;o<0&&(o=0),o>a&&(o=a);const c=Math.round(o/a*100),s=Math.max(0,Math.round((a-o)/60*10)/10);return{percentPassed:c,hoursLeft:s}}const GA=(e,t,n)=>{const a=new Date,o=a.getDay(),c=a.getDate(),s=a.getMonth();if([0,3,6,9].includes(s)&&c<=7&&(!n||new Date(n).getMonth()!==s))return"quarterly";if(c<=3&&(!t||new Date(t).getMonth()!==s))return"monthly";if(o===0||o===1){if(!e)return"weekly";const l=new Date(e),d=Math.abs(a.getTime()-l.getTime());if(Math.ceil(d/(1e3*60*60*24))>5)return"weekly"}return null},GM="lifehub_";function Kt(e,t){try{const n=localStorage.getItem(GM+e);return n?JSON.parse(n):t}catch(n){return console.error(`Error reading from localStorage: ${e}`,n),t}}function U(e,t){try{localStorage.setItem(GM+e,JSON.stringify(t))}catch(n){console.error(`Error writing to localStorage: ${e}`,n)}}const B={PROJECTS:"projects",TASKS:"tasks",GOALS:"goals",SETTINGS:"settings",ROUTINES:"routines",REVIEWS:"reviews",JOURNALS:"journals",HISTORY:"history"};function KA(){const e={};for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n!=null&&n.startsWith(GM))try{e[n]=JSON.parse(localStorage.getItem(n)||"null")}catch{e[n]=localStorage.getItem(n)}}return e}function XA(e){for(const[t,n]of Object.entries(e))if(t.startsWith(GM))try{localStorage.setItem(t,JSON.stringify(n))}catch(a){console.error(`Error importing key: ${t}`,a)}}const QA={projects:[],selectedProjectId:null,isLoading:!1},Rj=[{id:"project-1",name:"Personal Goals",description:"Track personal development and life goals",color:"#d4af37",icon:"Target",status:"active",parentId:null,goalId:null,deadline:null,createdAt:R(),updatedAt:R(),isArchived:!1},{id:"project-2",name:"Work Projects",description:"Professional tasks and deadlines",color:"#3b82f6",icon:"Briefcase",status:"active",parentId:null,goalId:null,deadline:null,createdAt:R(),updatedAt:R(),isArchived:!1},{id:"project-3",name:"Health & Fitness",description:"Exercise routines and wellness habits",color:"#22c55e",icon:"Dumbbell",status:"active",parentId:null,goalId:null,deadline:null,createdAt:R(),updatedAt:R(),isArchived:!1}],Xt=h1((e,t)=>({...QA,loadProjects:()=>{const n=Kt(B.PROJECTS,[]);n.length===0?(e({projects:Rj}),U(B.PROJECTS,Rj)):e({projects:n})},addProject:n=>{const a=R(),o={id:P1(),...n,createdAt:a,updatedAt:a,isArchived:n.status==="archived"};return e(c=>{const s=[...c.projects,o];return U(B.PROJECTS,s),{projects:s}}),o},updateProject:(n,a)=>{e(o=>{const c=o.projects.map(s=>s.id===n?{...s,...a,updatedAt:R()}:s);return U(B.PROJECTS,c),{projects:c}})},deleteProject:n=>{e(a=>{const o=a.projects.filter(c=>c.id!==n);return U(B.PROJECTS,o),{projects:o,selectedProjectId:a.selectedProjectId===n?null:a.selectedProjectId}})},archiveProject:n=>{e(a=>{const o=a.projects.map(c=>c.id===n?{...c,isArchived:!c.isArchived,updatedAt:R()}:c);return U(B.PROJECTS,o),{projects:o}})},selectProject:n=>{e({selectedProjectId:n})},getProjectById:n=>t().projects.find(a=>a.id===n),setNextAction:(n,a)=>{e(o=>{const c=o.projects.map(s=>s.id===n?{...s,nextActionTaskId:a,updatedAt:R()}:s);return U(B.PROJECTS,c),{projects:c}})}})),JA="_button_1nr0x_9",YA="_sm_1nr0x_59",eq="_md_1nr0x_71",tq="_lg_1nr0x_83",nq="_primary_1nr0x_97",aq="_secondary_1nr0x_129",rq="_ghost_1nr0x_151",iq="_danger_1nr0x_171",oq="_fullWidth_1nr0x_195",cq="_loading_1nr0x_205",sq="_spinner_1nr0x_213",lq="_spin_1nr0x_213",dq="_icon_1nr0x_245",hq="_label_1nr0x_267",Qt={button:JA,sm:YA,md:eq,lg:tq,primary:nq,secondary:aq,ghost:rq,danger:iq,fullWidth:oq,loading:cq,spinner:sq,spin:lq,icon:dq,label:hq},W=({children:e,variant:t="primary",size:n="md",isLoading:a=!1,leftIcon:o,rightIcon:c,fullWidth:s=!1,className:l="",disabled:d,...h})=>{const y=[Qt.button,Qt[t],Qt[n],s?Qt.fullWidth:"",a?Qt.loading:"",l].filter(Boolean).join(" ");return i.jsxs("button",{className:y,disabled:d||a,...h,children:[a&&i.jsx("span",{className:Qt.spinner}),!a&&o&&i.jsx("span",{className:Qt.icon,children:o}),e&&i.jsx("span",{className:Qt.label,children:e}),!a&&c&&i.jsx("span",{className:Qt.icon,children:c})]})},uq="_card_mqfxt_9",yq="_elevated_mqfxt_31",pq="_outlined_mqfxt_41",kq="_interactive_mqfxt_51",mq="_clickable_mqfxt_71",fq="_header_mqfxt_133",vq="_content_mqfxt_145",gq="_footer_mqfxt_153",bo={card:uq,default:"_default_mqfxt_23",elevated:yq,outlined:pq,interactive:kq,clickable:mq,"padding-none":"_padding-none_mqfxt_99","padding-sm":"_padding-sm_mqfxt_107","padding-md":"_padding-md_mqfxt_115","padding-lg":"_padding-lg_mqfxt_123",header:fq,content:vq,footer:gq},M1=({children:e,variant:t="default",padding:n="md",className:a="",onClick:o})=>{const c=[bo.card,bo[t],bo[`padding-${n}`],o?bo.clickable:"",a].filter(Boolean).join(" ");return i.jsx("div",{className:c,onClick:o,role:o?"button":void 0,children:e})},xq="_wrapper_4zj1x_9",Mq="_fullWidth_4zj1x_21",wq="_label_4zj1x_29",Lq="_inputWrapper_4zj1x_41",Sq="_input_4zj1x_41",jq="_hasLeftIcon_4zj1x_115",Cq="_hasRightIcon_4zj1x_123",_q="_leftIcon_4zj1x_133",Iq="_rightIcon_4zj1x_135",bq="_hasError_4zj1x_183",zq="_error_4zj1x_199",Aq="_hint_4zj1x_209",pt={wrapper:xq,fullWidth:Mq,label:wq,inputWrapper:Lq,input:Sq,hasLeftIcon:jq,hasRightIcon:Cq,leftIcon:_q,rightIcon:Iq,hasError:bq,error:zq,hint:Aq},H1=S.forwardRef(({label:e,error:t,hint:n,leftIcon:a,rightIcon:o,fullWidth:c=!0,className:s="",id:l,...d},h)=>{const y=l||`input-${Math.random().toString(36).substr(2,9)}`,p=[pt.wrapper,c?pt.fullWidth:"",t?pt.hasError:"",s].filter(Boolean).join(" ");return i.jsxs("div",{className:p,children:[e&&i.jsx("label",{htmlFor:y,className:pt.label,children:e}),i.jsxs("div",{className:pt.inputWrapper,children:[a&&i.jsx("span",{className:pt.leftIcon,children:a}),i.jsx("input",{ref:h,id:y,className:`${pt.input} ${a?pt.hasLeftIcon:""} ${o?pt.hasRightIcon:""}`,...d}),o&&i.jsx("span",{className:pt.rightIcon,children:o})]}),(t||n)&&i.jsx("span",{className:t?pt.error:pt.hint,children:t||n})]})});H1.displayName="Input";const qq="_backdrop_mzqjz_9",Tq="_fadeIn_mzqjz_1",Nq="_modal_mzqjz_35",Dq="_slideInUp_mzqjz_1",Pq="_sm_mzqjz_61",Hq="_md_mzqjz_71",Bq="_lg_mzqjz_81",Rq="_header_mzqjz_91",Vq="_title_mzqjz_107",Fq="_closeButton_mzqjz_121",Eq="_content_mzqjz_159",U1={backdrop:qq,fadeIn:Tq,modal:Nq,slideInUp:Dq,sm:Pq,md:Hq,lg:Bq,header:Rq,title:Vq,closeButton:Fq,content:Eq},ro=({isOpen:e,onClose:t,title:n,children:a,size:o="md",showCloseButton:c=!0})=>{const s=S.useRef(null);if(S.useEffect(()=>{const d=h=>{h.key==="Escape"&&e&&t()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[e,t]),S.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),S.useEffect(()=>{e&&s.current&&s.current.focus()},[e]),!e)return null;const l=d=>{d.target===d.currentTarget&&t()};return i.jsx("div",{className:U1.backdrop,onClick:l,children:i.jsxs("div",{ref:s,className:`${U1.modal} ${U1[o]}`,role:"dialog","aria-modal":"true","aria-labelledby":n?"modal-title":void 0,tabIndex:-1,children:[(n||c)&&i.jsxs("div",{className:U1.header,children:[n&&i.jsx("h2",{id:"modal-title",className:U1.title,children:n}),c&&i.jsx("button",{className:U1.closeButton,onClick:t,"aria-label":"Close modal",children:i.jsx(Ae,{size:20})})]}),i.jsx("div",{className:U1.content,children:a})]})})},Oq="_iconButton_1w9p7_9",$q="_sm_1w9p7_53",Uq="_md_1w9p7_73",Zq="_lg_1w9p7_93",Wq="_ghost_1w9p7_139",Gq="_danger_1w9p7_159",jw={iconButton:Oq,sm:$q,md:Uq,lg:Zq,default:"_default_1w9p7_115",ghost:Wq,danger:Gq},n1=({icon:e,size:t="md",variant:n="default",tooltip:a,className:o="",...c})=>{const s=[jw.iconButton,jw[t],jw[n],o].filter(Boolean).join(" ");return i.jsx("button",{className:s,title:a,"aria-label":a,...c,children:e})},Kq="_wrapper_1l2po_9",Xq="_fullWidth_1l2po_21",Qq="_label_1l2po_29",Jq="_inputWrapper_1l2po_41",Yq="_textarea_1l2po_51",eT="_hasError_1l2po_119",tT="_error_1l2po_135",nT="_hint_1l2po_145",p1={wrapper:Kq,fullWidth:Xq,label:Qq,inputWrapper:Jq,textarea:Yq,hasError:eT,error:tT,hint:nT},xr=S.forwardRef(({label:e,error:t,hint:n,fullWidth:a=!0,className:o="",id:c,rows:s=4,...l},d)=>{const h=c||`textarea-${Math.random().toString(36).substr(2,9)}`,y=[p1.wrapper,a?p1.fullWidth:"",t?p1.hasError:"",o].filter(Boolean).join(" ");return i.jsxs("div",{className:y,children:[e&&i.jsx("label",{htmlFor:h,className:p1.label,children:e}),i.jsx("div",{className:p1.inputWrapper,children:i.jsx("textarea",{ref:d,id:h,rows:s,className:p1.textarea,...l})}),(t||n)&&i.jsx("span",{className:t?p1.error:p1.hint,children:t||n})]})});xr.displayName="TextArea";const aT="_sidebar_7zguq_9",rT="_collapsed_7zguq_33",iT="_logo_7zguq_43",oT="_logoIcon_7zguq_61",cT="_logoText_7zguq_85",sT="_nav_7zguq_101",lT="_navItem_7zguq_119",dT="_active_7zguq_165",hT="_section_7zguq_185",uT="_sectionHeader_7zguq_193",yT="_sectionTitle_7zguq_209",pT="_projectList_7zguq_227",kT="_projectItem_7zguq_241",mT="_projectIcon_7zguq_297",fT="_archived_7zguq_305",vT="_projectName_7zguq_327",gT="_editProjectBtn_7zguq_339",xT="_archiveToggle_7zguq_381",MT="_footer_7zguq_419",wT="_collapseBtn_7zguq_435",F={sidebar:aT,collapsed:rT,logo:iT,logoIcon:oT,logoText:cT,nav:sT,navItem:lT,active:dT,section:hT,sectionHeader:uT,sectionTitle:yT,projectList:pT,projectItem:kT,projectIcon:mT,archived:fT,projectName:vT,editProjectBtn:gT,archiveToggle:xT,footer:MT,collapseBtn:wT},LT={Folder:ma,Briefcase:Ja,Home:ki,Heart:i1,Star:lr,Zap:jt,Target:Se,Trophy:va,Rocket:bi,Book:ka,Code:li,Music:ji,Camera:oi,Plane:Ci,Car:ci,Dumbbell:ui,Leaf:gi,Sun:Ai,Moon:Si,Coffee:di},ST=({isCollapsed:e,onToggle:t,onNewProject:n,currentView:a,onViewChange:o,onEditProject:c})=>{const{projects:s,selectedProjectId:l,selectProject:d}=Xt(),[h,y]=S.useState(!1),p=s.filter(x=>!x.isArchived),m=s.filter(x=>x.isArchived),g=x=>{d(x),o("project")},f=x=>{const L=LT[x]||ma;return i.jsx(L,{size:18})};return i.jsxs("aside",{className:`${F.sidebar} ${e?F.collapsed:""}`,children:[i.jsxs("div",{className:F.logo,children:[i.jsx("div",{className:F.logoIcon,children:i.jsx(jt,{size:24})}),!e&&i.jsx("span",{className:F.logoText,children:"LifeHub"})]}),i.jsxs("nav",{className:F.nav,children:[i.jsxs("button",{className:`${F.navItem} ${a==="dashboard"?F.active:""}`,onClick:()=>{d(null),o("dashboard")},children:[i.jsx(fi,{size:20}),!e&&i.jsx("span",{children:"Dashboard"})]}),i.jsxs("button",{className:`${F.navItem} ${a==="tasks"?F.active:""}`,onClick:()=>{d(null),o("tasks")},children:[i.jsx(si,{size:20}),!e&&i.jsx("span",{children:"Tasks"})]}),i.jsxs("div",{className:F.section,children:[i.jsxs("div",{className:F.sectionHeader,children:[i.jsx(yi,{size:16}),!e&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:F.sectionTitle,children:"Projects"}),i.jsx(n1,{icon:i.jsx(lt,{size:14}),size:"sm",variant:"ghost",onClick:n,tooltip:"New Project"})]})]}),i.jsx("div",{className:F.projectList,children:p.map(x=>i.jsxs("button",{className:`${F.projectItem} ${a==="project"&&l===x.id?F.active:""}`,onClick:()=>g(x.id),children:[i.jsx("span",{className:F.projectIcon,style:{color:x.color},children:f(x.icon)}),!e&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:F.projectName,children:x.name}),i.jsx("button",{className:F.editProjectBtn,onClick:L=>{L.stopPropagation(),c(x)},title:"Edit Project",children:i.jsx(N1,{size:14})})]})]},x.id))}),m.length>0&&!e&&i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:F.archiveToggle,onClick:()=>y(!h),children:[i.jsx(Xr,{size:14}),i.jsxs("span",{children:["Archived (",m.length,")"]})]}),h&&i.jsx("div",{className:F.projectList,children:m.map(x=>i.jsxs("button",{className:`${F.projectItem} ${F.archived} ${a==="project"&&l===x.id?F.active:""}`,onClick:()=>g(x.id),children:[i.jsx("span",{className:F.projectIcon,style:{color:x.color,opacity:.5},children:f(x.icon)}),i.jsx("span",{className:F.projectName,children:x.name}),i.jsx("button",{className:F.editProjectBtn,onClick:L=>{L.stopPropagation(),c(x)},title:"Edit Project",children:i.jsx(N1,{size:14})})]},x.id))})]})]}),i.jsxs("button",{className:`${F.navItem} ${a==="goals"?F.active:""}`,onClick:()=>o("goals"),children:[i.jsx(Se,{size:20}),!e&&i.jsx("span",{children:"Goals"})]}),i.jsxs("button",{className:`${F.navItem} ${a==="routines"?F.active:""}`,onClick:()=>o("routines"),children:[i.jsx(rr,{size:20}),!e&&i.jsx("span",{children:"Routines"})]}),i.jsxs("button",{className:`${F.navItem} ${a==="reviews"?F.active:""}`,onClick:()=>o("reviews"),children:[i.jsx(ri,{size:20}),!e&&i.jsx("span",{children:"Reviews"})]}),i.jsxs("button",{className:`${F.navItem} ${a==="habits"?F.active:""}`,onClick:()=>o("habits"),children:[i.jsx(_i,{size:20}),!e&&i.jsx("span",{children:"Habits"})]}),i.jsxs("button",{className:`${F.navItem} ${a==="calendar"?F.active:""}`,onClick:()=>o("calendar"),children:[i.jsx(Lt,{size:20}),!e&&i.jsx("span",{children:"Calendar"})]}),i.jsxs("button",{className:`${F.navItem} ${a==="journal"?F.active:""}`,onClick:()=>o("journal"),children:[i.jsx(ka,{size:20}),!e&&i.jsx("span",{children:"Journal"})]}),i.jsxs("button",{className:`${F.navItem} ${a==="insights"?F.active:""}`,onClick:()=>o("insights"),children:[i.jsx(Jr,{size:20}),!e&&i.jsx("span",{children:"Insights"})]})]}),i.jsxs("div",{className:F.footer,children:[i.jsxs("button",{className:`${F.navItem} ${a==="settings"?F.active:""}`,onClick:()=>o("settings"),children:[i.jsx(N1,{size:20}),!e&&i.jsx("span",{children:"Settings"})]}),i.jsx("button",{className:F.collapseBtn,onClick:t,children:e?i.jsx(Wt,{size:18}):i.jsx(tr,{size:18})})]})]})},ML=h1((e,t)=>({entries:[],isLoading:!1,loadHistory:()=>{const n=Kt(B.HISTORY,[]);e({entries:n})},logChange:(n,a,o,c,s=[])=>{const l={id:P1(),targetType:n,targetId:a,targetName:o,action:c,changes:s,timestamp:R(),userId:"user"};e(d=>{const h=[l,...d.entries];return h.length>1e3&&(h.length=1e3),U(B.HISTORY,h),{entries:h}})},getHistory:(n,a)=>{const{entries:o}=t();return!n&&!a?o:o.filter(c=>{const s=n?c.targetId===n:!0,l=a?c.targetType===a:!0;return s&&l})},clearHistory:()=>{e({entries:[]}),U(B.HISTORY,[])}})),jT={status:"all",priority:"all",projectId:"all",search:""},CT={tasks:[],selectedTaskId:null,filters:jT,sortBy:"order",sortOrder:"asc",viewMode:"list",isLoading:!1},Vj=[{id:"task-1",projectId:"project-1",title:"Define yearly goals",description:"Write down 3-5 major goals for the year",status:"in_progress",priority:"high",dueDate:null,dueTime:null,reminder:null,recurring:"none",tags:["planning","goals"],subtasks:[{id:"sub-1",title:"Career goals",isCompleted:!0},{id:"sub-2",title:"Health goals",isCompleted:!1},{id:"sub-3",title:"Financial goals",isCompleted:!1}],createdAt:R(),updatedAt:R(),completedAt:null,order:0,timeEstimate:60,timeSpent:0,timeEntries:[],isTimerRunning:!1,impact:"high",lifeArea:"growth",mentalLevel:"creative",taskType:"goal",energyRequired:"high",reward:"Clarity and direction for the year",dependencies:[],isArchived:!1},{id:"task-2",projectId:"project-2",title:"Complete project proposal",description:"Draft and submit the Q1 project proposal",status:"todo",priority:"urgent",dueDate:new Date(Date.now()+2*24*60*60*1e3).toISOString(),dueTime:"17:00",reminder:60,recurring:"none",tags:["work","deadline"],subtasks:[],createdAt:R(),updatedAt:R(),completedAt:null,order:1,timeEstimate:120,timeSpent:0,timeEntries:[],isTimerRunning:!1,impact:"high",lifeArea:"growth",mentalLevel:"analytical",taskType:"deep_work",energyRequired:"high",reward:"Peace of mind and project progress",dependencies:[],isArchived:!1},{id:"task-3",projectId:"project-3",title:"Create workout schedule",description:"Plan weekly workout routine",status:"done",priority:"medium",dueDate:null,dueTime:null,reminder:null,recurring:"weekly",tags:["fitness"],subtasks:[],createdAt:R(),updatedAt:R(),completedAt:R(),order:2,timeEstimate:30,timeSpent:1800,timeEntries:[],isTimerRunning:!1,impact:"high",lifeArea:"money",mentalLevel:"analytical",taskType:"quick",energyRequired:"low",reward:null,dependencies:[],isArchived:!1},{id:"task-4",projectId:"project-2",title:"Read 30 mins",description:"Current book: Atomic Habits",status:"todo",priority:"low",dueDate:new Date(Date.now()+30*24*60*60*1e3).toISOString(),dueTime:null,reminder:1440,recurring:"monthly",tags:["learning","personal"],subtasks:[{id:"sub-4",title:"Atomic Habits",isCompleted:!1},{id:"sub-5",title:"Choose a fiction book",isCompleted:!1}],createdAt:R(),updatedAt:R(),completedAt:null,order:3,timeEstimate:600,timeSpent:0,timeEntries:[],isTimerRunning:!1,impact:"medium",lifeArea:"growth",mentalLevel:"creative",taskType:"habit",energyRequired:"medium",reward:"Knowledge and relaxation",dependencies:[],isArchived:!1}],Ze=h1((e,t)=>({...CT,loadTasks:()=>{const n=Kt(B.TASKS,[]);if(n.length===0)e({tasks:Vj}),U(B.TASKS,Vj);else{const a=n.map(o=>({...o,impact:o.impact||"medium",lifeArea:o.lifeArea||null,mentalLevel:o.mentalLevel||"analytical",taskType:o.taskType||"task",energyRequired:o.energyRequired||"medium",reward:o.reward||null,dependencies:o.dependencies||[],isArchived:o.isArchived||!1}));e({tasks:a}),U(B.TASKS,a)}},addTask:n=>{const a=R(),c=t().tasks.filter(d=>d.projectId===n.projectId),s=c.length>0?Math.max(...c.map(d=>d.order)):-1,l={id:P1(),...n,createdAt:a,updatedAt:a,completedAt:null,order:s+1,timeSpent:0,timeEntries:[],isTimerRunning:!1,impact:n.impact||"medium",lifeArea:n.lifeArea||null,mentalLevel:n.mentalLevel||"analytical",taskType:n.taskType||"task",energyRequired:n.energyRequired||"medium",reward:n.reward||null,dependencies:n.dependencies||[],isArchived:!1};return e(d=>{const h=[...d.tasks,l];return U(B.TASKS,h),{tasks:h}}),l},updateTask:(n,a)=>{e(o=>{const c=o.tasks.map(s=>s.id===n?{...s,...a,updatedAt:R()}:s);return U(B.TASKS,c),{tasks:c}})},deleteTask:n=>{e(a=>{const o=a.tasks.find(s=>s.id===n);o&&ML.getState().logChange("task",n,o.title,"delete");const c=a.tasks.filter(s=>s.id!==n);return U(B.TASKS,c),{tasks:c,selectedTaskId:a.selectedTaskId===n?null:a.selectedTaskId}})},archiveTask:n=>{e(a=>{const o=a.tasks.find(s=>s.id===n);o&&ML.getState().logChange("task",n,o.title,"archive");const c=a.tasks.map(s=>s.id===n?{...s,isArchived:!0,updatedAt:R()}:s);return U(B.TASKS,c),{tasks:c,selectedTaskId:a.selectedTaskId===n?null:a.selectedTaskId}})},toggleTaskStatus:n=>{e(a=>{const o=a.tasks.map(c=>{if(c.id!==n)return c;const s=c.status==="done"?"todo":c.status==="todo"?"in_progress":"done";return{...c,status:s,updatedAt:R(),completedAt:s==="done"?R():null}});return U(B.TASKS,o),{tasks:o}})},toggleSubtask:(n,a)=>{e(o=>{const c=o.tasks.map(s=>{if(s.id!==n)return s;const l=s.subtasks.map(d=>d.id===a?{...d,isCompleted:!d.isCompleted}:d);return{...s,subtasks:l,updatedAt:R()}});return U(B.TASKS,c),{tasks:c}})},updateSubtask:(n,a,o)=>{e(c=>{const s=c.tasks.map(l=>{if(l.id!==n)return l;const d=l.subtasks.map(h=>h.id===a?{...h,title:o}:h);return{...l,subtasks:d,updatedAt:R()}});return U(B.TASKS,s),{tasks:s}})},addSubtask:(n,a)=>{const o={id:P1(),title:a,isCompleted:!1};e(c=>{const s=c.tasks.map(l=>l.id===n?{...l,subtasks:[...l.subtasks,o],updatedAt:R()}:l);return U(B.TASKS,s),{tasks:s}})},deleteSubtask:(n,a)=>{e(o=>{const c=o.tasks.map(s=>s.id===n?{...s,subtasks:s.subtasks.filter(l=>l.id!==a),updatedAt:R()}:s);return U(B.TASKS,c),{tasks:c}})},selectTask:n=>{e({selectedTaskId:n})},setFilters:n=>{e(a=>({filters:{...a.filters,...n}}))},setSortBy:n=>{e({sortBy:n})},setSortOrder:n=>{e({sortOrder:n})},setViewMode:n=>{e({viewMode:n})},reorderTasks:n=>{e(a=>{const o=new Map(a.tasks.map(s=>[s.id,s])),c=[...a.tasks];return n.forEach((s,l)=>{if(o.get(s)){const h=c.findIndex(y=>y.id===s);h!==-1&&(c[h]={...c[h],order:l})}}),U(B.TASKS,c),{tasks:c}})},getTasksByProject:(n,a=!1)=>t().tasks.filter(o=>o.projectId===n&&(a?!0:!o.isArchived)),getTaskById:n=>t().tasks.find(a=>a.id===n),startTimer:n=>{const a=R();e(o=>{const c=o.tasks.map(s=>{if(s.id!==n)return s;const l={id:P1(),startedAt:a,endedAt:null,duration:0};return{...s,isTimerRunning:!0,timeEntries:[...s.timeEntries,l],updatedAt:a}});return U(B.TASKS,c),{tasks:c}})},stopTimer:n=>{const a=R();e(o=>{const c=o.tasks.map(s=>{if(s.id!==n||!s.isTimerRunning)return s;const l=s.timeEntries[s.timeEntries.length-1];if(!l||l.endedAt)return s;const d=new Date(l.startedAt).getTime(),h=new Date(a).getTime(),y=Math.floor((h-d)/1e3),p=s.timeEntries.map((m,g)=>g===s.timeEntries.length-1?{...m,endedAt:a,duration:y}:m);return{...s,isTimerRunning:!1,timeSpent:s.timeSpent+y,timeEntries:p,updatedAt:a}});return U(B.TASKS,c),{tasks:c}})},resetTimer:n=>{e(a=>{const o=a.tasks.map(c=>c.id===n?{...c,isTimerRunning:!1,timeSpent:0,timeEntries:[],updatedAt:R()}:c);return U(B.TASKS,o),{tasks:o}})}})),io=h1((e,t)=>({entries:[],isLoading:!1,loadEntries:()=>{const n=Kt(B.JOURNALS,[]);e({entries:n})},addEntry:n=>{const a=R(),o={id:P1(),...n,createdAt:a,updatedAt:a};return e(c=>{const s=[o,...c.entries];return U(B.JOURNALS,s),{entries:s}}),o},updateEntry:(n,a)=>{e(o=>{const c=o.entries.map(s=>s.id===n?{...s,...a,updatedAt:R()}:s);return U(B.JOURNALS,c),{entries:c}})},deleteEntry:n=>{e(a=>{const o=a.entries.filter(c=>c.id!==n);return U(B.JOURNALS,o),{entries:o}})},getEntriesByType:n=>t().entries.filter(a=>a.type===n),getRecentEntries:(n=5)=>t().entries.sort((a,o)=>new Date(o.createdAt).getTime()-new Date(a.createdAt).getTime()).slice(0,n)})),_T="_form_tv4e5_1",IT="_section_tv4e5_15",bT="_sentimentGrid_tv4e5_41",zT="_sentimentBtn_tv4e5_51",AT="_activeSentiment_tv4e5_83",qT="_actions_tv4e5_95",TT="_sliderContainer_tv4e5_113",NT="_slider_tv4e5_113",DT="_sliderValue_tv4e5_161",he={form:_T,section:IT,sentimentGrid:bT,sentimentBtn:zT,activeSentiment:AT,actions:qT,sliderContainer:TT,slider:NT,sliderValue:DT},PT=({onClose:e})=>{const{addEntry:t}=io(),[n,a]=S.useState({movedNeedle:"",blockedProgress:"",lessonLearned:"",mentalState:"focused"}),[o,c]=S.useState(""),s=l=>{l.preventDefault(),t({type:"daily_clarity",title:`Daily Clarity - ${new Date().toLocaleDateString()}`,content:n,tags:o.split(",").map(d=>d.trim()).filter(Boolean),linkedItemIds:[],timestamp:new Date().toISOString()}),e()};return i.jsxs("form",{onSubmit:s,className:he.form,children:[i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"What moved the needle today?"}),i.jsx(xr,{value:n.movedNeedle,onChange:l=>a({...n,movedNeedle:l.target.value}),placeholder:"Focus on the 20% that created 80% of results...",rows:3})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"What blocked progress?"}),i.jsx(xr,{value:n.blockedProgress,onChange:l=>a({...n,blockedProgress:l.target.value}),placeholder:"Distractions, lack of resources, energy dips...",rows:3})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"One lesson learned"}),i.jsx(H1,{value:n.lessonLearned,onChange:l=>a({...n,lessonLearned:l.target.value}),placeholder:"Insight or takeaway for tomorrow..."})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Mental State"}),i.jsx("div",{className:he.sentimentGrid,children:["focused","overloaded","distracted"].map(l=>i.jsxs("button",{type:"button",className:`${he.sentimentBtn} ${n.mentalState===l?he.activeSentiment:""}`,onClick:()=>a({...n,mentalState:l}),children:[l==="focused"&&"🧠 Focused",l==="overloaded"&&"😫 Overloaded",l==="distracted"&&"😵‍💫 Distracted"]},l))})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Tags"}),i.jsx(H1,{value:o,onChange:l=>c(l.target.value),placeholder:"Productivity, Health, Learning (comma separated)"})]}),i.jsxs("div",{className:he.actions,children:[i.jsx(W,{type:"button",variant:"ghost",onClick:e,children:"Cancel"}),i.jsxs(W,{type:"submit",variant:"primary",style:{gap:8},children:[i.jsx(Gt,{size:16}),"Save Entry"]})]})]})},HT=({onClose:e})=>{const{addEntry:t}=io(),[n,a]=S.useState({decision:"",context:"",expectedOutcome:"",confidenceLevel:7,reviewDate:new Date(Date.now()+14*24*60*60*1e3).toISOString()}),[o,c]=S.useState(""),s=l=>{l.preventDefault(),t({type:"decision_log",title:n.decision,content:n,tags:o.split(",").map(d=>d.trim()).filter(Boolean),linkedItemIds:[],timestamp:new Date().toISOString()}),e()};return i.jsxs("form",{onSubmit:s,className:he.form,children:[i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Decision Made"}),i.jsx(H1,{value:n.decision,onChange:l=>a({...n,decision:l.target.value}),placeholder:"e.g., Switch to new marketing agency...",autoFocus:!0})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Context / Why?"}),i.jsx(xr,{value:n.context,onChange:l=>a({...n,context:l.target.value}),placeholder:"Background info, options considered...",rows:4})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Expected Outcome"}),i.jsx(xr,{value:n.expectedOutcome,onChange:l=>a({...n,expectedOutcome:l.target.value}),placeholder:"What does success look like?",rows:3})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Confidence Level (1-10)"}),i.jsxs("div",{className:he.sliderContainer,children:[i.jsx("input",{type:"range",min:"1",max:"10",value:n.confidenceLevel,onChange:l=>a({...n,confidenceLevel:parseInt(l.target.value)}),className:he.slider}),i.jsx("span",{className:he.sliderValue,children:n.confidenceLevel})]})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Review Date"}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx(Lt,{size:16,className:"text-muted"}),i.jsx(H1,{type:"date",value:n.reviewDate.split("T")[0],onChange:l=>a({...n,reviewDate:new Date(l.target.value).toISOString()}),style:{maxWidth:200}}),i.jsx("span",{className:"text-sm text-muted",children:"(Default: 14 days)"})]})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Tags"}),i.jsx(H1,{value:o,onChange:l=>c(l.target.value),placeholder:"Business, Strategy, Hiring..."})]}),i.jsxs("div",{className:he.actions,children:[i.jsx(W,{type:"button",variant:"ghost",onClick:e,children:"Cancel"}),i.jsxs(W,{type:"submit",variant:"primary",style:{gap:8},children:[i.jsx(Gt,{size:16}),"Log Decision"]})]})]})},BT=({onClose:e})=>{const{addEntry:t}=io(),[n,a]=S.useState({text:""}),[o,c]=S.useState(""),s=l=>{l.preventDefault(),t({type:"brain_dump",title:`Brain Dump - ${new Date().toLocaleTimeString()}`,content:n,tags:o.split(",").map(d=>d.trim()).filter(Boolean),linkedItemIds:[],timestamp:new Date().toISOString()}),e()};return i.jsxs("form",{onSubmit:s,className:he.form,children:[i.jsxs("div",{className:he.section,children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[i.jsx("h3",{children:"Free Flow"}),i.jsxs(W,{type:"button",variant:"ghost",size:"sm",style:{gap:6,fontSize:12},children:[i.jsx(Ot,{size:14,className:"text-accent"}),"Convert to Tasks (Coming Soon)"]})]}),i.jsx(xr,{value:n.text,onChange:l=>a({...n,text:l.target.value}),placeholder:"Get everything out of your head...",rows:12,autoFocus:!0})]}),i.jsxs("div",{className:he.section,children:[i.jsx("h3",{children:"Tags"}),i.jsx(H1,{value:o,onChange:l=>c(l.target.value),placeholder:"Ideas, Worries, Random..."})]}),i.jsxs("div",{className:he.actions,children:[i.jsx(W,{type:"button",variant:"ghost",onClick:e,children:"Cancel"}),i.jsxs(W,{type:"submit",variant:"primary",style:{gap:8},children:[i.jsx(Gt,{size:16}),"Save Dump"]})]})]})},RT="_container_u8uny_1",VT="_header_u8uny_15",FT="_controls_u8uny_41",ET="_searchWrapper_u8uny_51",OT="_searchIcon_u8uny_63",$T="_searchInput_u8uny_75",UT="_filterSelect_u8uny_95",ZT="_list_u8uny_113",WT="_emptyState_u8uny_129",GT="_dateGroup_u8uny_149",KT="_dateHeader_u8uny_161",XT="_dateTitle_u8uny_181",QT="_countBadge_u8uny_193",JT="_entriesList_u8uny_207",YT="_entryCard_u8uny_221",eN="_entryHeader_u8uny_241",tN="_entryIconWrapper_u8uny_255",nN="_entryTitle_u8uny_275",aN="_entryTime_u8uny_291",rN="_entryPreview_u8uny_301",iN="_previewTags_u8uny_315",oN="_moodTag_u8uny_327",cN="_convertBtn_u8uny_341",le={container:RT,header:VT,controls:FT,searchWrapper:ET,searchIcon:OT,searchInput:$T,filterSelect:UT,list:ZT,emptyState:WT,dateGroup:GT,dateHeader:KT,dateTitle:XT,countBadge:QT,entriesList:JT,entryCard:YT,entryHeader:eN,entryIconWrapper:tN,entryTitle:nN,entryTime:aN,entryPreview:rN,previewTags:iN,moodTag:oN,convertBtn:cN},yI=({onEntryClick:e,onConvertToTask:t})=>{const{entries:n}=io(),[a,o]=S.useState("all"),[c,s]=S.useState(""),[l,d]=S.useState({}),h=S.useMemo(()=>n.filter(f=>{var x,L;if(a!=="all"&&f.type!==a)return!1;if(c){const k=c.toLowerCase();return!!(f.type==="brain_dump"&&f.content.text.toLowerCase().includes(k)||f.type==="daily_clarity"&&((x=f.content.bigWin)!=null&&x.toLowerCase().includes(k))||f.type==="decision_log"&&((L=f.content.decision)!=null&&L.toLowerCase().includes(k)))}return!0}).sort((f,x)=>new Date(x.createdAt).getTime()-new Date(f.createdAt).getTime()),[n,a,c]),y=S.useMemo(()=>{const f={};return h.forEach(x=>{const L=new Date(x.createdAt).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});f[L]||(f[L]=[]),f[L].push(x)}),f},[h]),p=f=>{d(x=>({...x,[f]:!x[f]}))},m=f=>{switch(f){case"daily_clarity":return i.jsx(fa,{size:16,className:"text-accent"});case"decision_log":return i.jsx(Se,{size:16,className:"text-secondary"});case"brain_dump":return i.jsx(ai,{size:16,className:"text-blue-400"})}},g=f=>{switch(f.type){case"daily_clarity":return"Daily Clarity";case"decision_log":return f.content.decision||"Decision Log";case"brain_dump":return f.content.text.slice(0,50)+"..."||"Brain Dump"}};return i.jsxs("div",{className:le.container,children:[i.jsxs("div",{className:le.header,children:[i.jsx("h2",{children:"Journal Entries"}),i.jsxs("div",{className:le.controls,children:[i.jsxs("div",{className:le.searchWrapper,children:[i.jsx(sr,{size:16,className:le.searchIcon}),i.jsx("input",{type:"text",placeholder:"Search entries...",value:c,onChange:f=>s(f.target.value),className:le.searchInput})]}),i.jsxs("select",{value:a,onChange:f=>o(f.target.value),className:le.filterSelect,children:[i.jsx("option",{value:"all",children:"All Types"}),i.jsx("option",{value:"daily_clarity",children:"Daily Clarity"}),i.jsx("option",{value:"decision_log",children:"Decision Logs"}),i.jsx("option",{value:"brain_dump",children:"Brain Dumps"})]})]})]}),i.jsx("div",{className:le.list,children:Object.keys(y).length===0?i.jsxs("div",{className:le.emptyState,children:[i.jsx(Qa,{size:48}),i.jsx("p",{children:"No journal entries found"})]}):Object.entries(y).map(([f,x])=>i.jsxs("div",{className:le.dateGroup,children:[i.jsx("div",{className:le.dateHeader,onClick:()=>p(f),children:i.jsxs("div",{className:le.dateTitle,children:[l[f]?i.jsx(q1,{size:16}):i.jsx(Wt,{size:16}),i.jsx("span",{children:f}),i.jsx("span",{className:le.countBadge,children:x.length})]})}),i.jsx("div",{className:le.entriesList,children:x.map(L=>i.jsxs(M1,{variant:"default",padding:"sm",className:le.entryCard,onClick:()=>e==null?void 0:e(L),children:[i.jsxs("div",{className:le.entryHeader,children:[i.jsx("div",{className:le.entryIconWrapper,children:m(L.type)}),i.jsx("span",{className:le.entryTitle,children:g(L)}),i.jsx("span",{className:le.entryTime,children:new Date(L.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),i.jsxs("div",{className:le.entryPreview,children:[L.type==="daily_clarity"&&i.jsxs("div",{className:le.previewTags,children:[i.jsxs("span",{className:le.moodTag,children:["Mood: ",L.content.mood]}),i.jsxs("span",{children:["Win: ",L.content.bigWin]})]}),L.type==="brain_dump"&&i.jsxs("div",{className:le.previewTags,children:[i.jsx("span",{className:le.moodTag,style:{background:"var(--color-bg-secondary)",border:"1px solid var(--color-border)"},children:"Brain Dump"}),i.jsxs("button",{className:le.convertBtn,onClick:k=>{k.stopPropagation(),t==null||t(L)},title:"Convert to Task",children:[i.jsx(Se,{size:12}),"Convert"]})]})]})]},L.id))})]},f))})]})},sN="_container_gbrop_1",lN="_tabs_gbrop_15",dN="_tab_gbrop_15",hN="_activeTab_gbrop_69",uN="_content_gbrop_79",Nr={container:sN,tabs:lN,tab:dN,activeTab:hN,content:uN},pI=({isOpen:e,onClose:t,initialType:n="daily_clarity"})=>{const[a,o]=S.useState(n),{addTask:c}=Ze(),s=d=>{if(d.type!=="brain_dump")return;const h=d.content.text||"",p={title:h.split(`
`)[0].slice(0,50)+(h.length>50?"...":""),description:h,status:"todo",priority:"medium",projectId:"default",subtasks:[],tags:["from-journal"],isArchived:!1,timeEstimate:30,energyRequired:"medium",recurring:"none",reminder:null,impact:"medium",lifeArea:null,mentalLevel:"analytical",taskType:"task",reward:null,dependencies:[],isTimerRunning:!1,timeSpent:0,timeEntries:[],dueDate:null,dueTime:null};c(p),alert("Task created from journal entry!")},l=[{id:"daily_clarity",label:"Daily Clarity",icon:i.jsx(Se,{size:18})},{id:"decision_log",label:"Decision Log",icon:i.jsx(A1,{size:18})},{id:"brain_dump",label:"Brain Dump",icon:i.jsx(fa,{size:18})},{id:"history",label:"History",icon:i.jsx(Qa,{size:18})}];return i.jsx(ro,{isOpen:e,onClose:t,title:"Strategic Journal",size:"lg",children:i.jsxs("div",{className:Nr.container,children:[i.jsx("div",{className:Nr.tabs,children:l.map(d=>i.jsxs("button",{className:`${Nr.tab} ${a===d.id?Nr.activeTab:""}`,onClick:()=>o(d.id),children:[d.icon,i.jsx("span",{children:d.label})]},d.id))}),i.jsxs("div",{className:Nr.content,children:[a==="daily_clarity"&&i.jsx(PT,{onClose:t}),a==="decision_log"&&i.jsx(HT,{onClose:t}),a==="brain_dump"&&i.jsx(BT,{onClose:t}),a==="history"&&i.jsx(yI,{onConvertToTask:s})]})]})})},yN="_header_jctoz_9",pN="_left_jctoz_33",kN="_titleContainer_jctoz_47",mN="_title_jctoz_47",fN="_healthBadge_jctoz_73",vN="_on_track_jctoz_97",gN="_at_risk_jctoz_109",xN="_blocked_jctoz_121",MN="_description_jctoz_133",wN="_center_jctoz_151",LN="_searchInput_jctoz_165",SN="_right_jctoz_175",jN="_newTaskBtn_jctoz_187",CN="_userAvatar_jctoz_239",kt={header:yN,left:pN,titleContainer:kN,title:mN,healthBadge:fN,on_track:vN,at_risk:gN,blocked:xN,description:MN,center:wN,searchInput:LN,right:SN,newTaskBtn:jN,userAvatar:CN},_N=({onNewTask:e,searchQuery:t,onSearchChange:n})=>{const{selectedProjectId:a,getProjectById:o}=Xt(),{getTasksByProject:c}=Ze(),[s,l]=Tt.useState(!1),d=a?o(a):null,h=a?c(a):[],y=bM(h),p=()=>{switch(y){case"blocked":return i.jsx(pa,{size:14});case"at_risk":return i.jsx(z1,{size:14});default:return i.jsx(zi,{size:14})}},m=()=>{switch(y){case"blocked":return"Blocked";case"at_risk":return"At Risk";default:return"On Track"}};return i.jsxs("header",{className:kt.header,children:[i.jsxs("div",{className:kt.left,children:[i.jsxs("div",{className:kt.titleContainer,children:[i.jsx("h1",{className:kt.title,children:d?d.name:"Dashboard"}),d&&i.jsxs("div",{className:`${kt.healthBadge} ${kt[y]}`,children:[p(),i.jsx("span",{children:m()})]})]}),d&&i.jsx("span",{className:kt.description,children:d.description})]}),i.jsx("div",{className:kt.center,children:i.jsx(H1,{type:"search",placeholder:"Search tasks...",value:t,onChange:g=>n(g.target.value),leftIcon:i.jsx(sr,{size:18}),fullWidth:!1,className:kt.searchInput})}),i.jsxs("div",{className:kt.right,children:[i.jsxs(W,{variant:"secondary",size:"sm",onClick:()=>l(!0),style:{gap:6},children:[i.jsx(ka,{size:16,className:"text-accent"}),i.jsx("span",{children:"Journal"})]}),i.jsxs("button",{className:kt.newTaskBtn,onClick:e,children:[i.jsx(lt,{size:18}),i.jsx("span",{children:"New Task"})]}),i.jsx(n1,{icon:i.jsx(ni,{size:18}),variant:"ghost",tooltip:"Notifications"}),i.jsx("div",{className:kt.userAvatar,children:i.jsx(Ti,{size:20})})]}),s&&i.jsx(pI,{isOpen:!0,onClose:()=>l(!1)})]})},IN="_main_yt32f_9",bN={main:IN},zN=({children:e})=>i.jsx("main",{className:bN.main,children:e}),AN="_card_17ypl_9",qN="_completed_17ypl_45",TN="_title_17ypl_53",NN="_statusBtn_17ypl_65",DN="_iconTodo_17ypl_93",PN="_iconProgress_17ypl_111",HN="_iconDone_17ypl_119",BN="_content_17ypl_129",RN="_header_17ypl_145",VN="_priority_17ypl_175",FN="_description_17ypl_203",EN="_meta_17ypl_225",ON="_dueDate_17ypl_239",$N="_subtasks_17ypl_241",UN="_overdue_17ypl_257",ZN="_tags_17ypl_265",WN="_tag_17ypl_265",GN="_lifeAttribute_17ypl_291",KN="_iconHighImpact_17ypl_305",XN="_progressBar_17ypl_315",QN="_progressFill_17ypl_331",JN="_arrow_17ypl_347",YN="_subtasksSection_17ypl_389",eD="_subtasksList_17ypl_403",tD="_subtaskItem_17ypl_417",nD="_subtaskCheck_17ypl_431",aD="_checked_17ypl_469",rD="_subtaskTitle_17ypl_481",iD="_completedText_17ypl_495",oD="_subtaskInput_17ypl_505",cD="_deleteSubtaskBtn_17ypl_527",sD="_addSubtaskForm_17ypl_565",lD="_addSubtaskBtn_17ypl_579",K={card:AN,completed:qN,title:TN,statusBtn:NN,iconTodo:DN,iconProgress:PN,iconDone:HN,content:BN,header:RN,priority:VN,description:FN,meta:EN,dueDate:ON,subtasks:$N,overdue:UN,tags:ZN,tag:WN,lifeAttribute:GN,iconHighImpact:KN,progressBar:XN,progressFill:QN,arrow:JN,subtasksSection:YN,subtasksList:eD,subtaskItem:tD,subtaskCheck:nD,checked:aD,subtaskTitle:rD,completedText:iD,subtaskInput:oD,deleteSubtaskBtn:cD,addSubtaskForm:sD,addSubtaskBtn:lD},nM=({task:e,onClick:t})=>{const{toggleTaskStatus:n,toggleSubtask:a,updateSubtask:o,addSubtask:c,deleteSubtask:s}=Ze(),[l,d]=Tt.useState(!1),[h,y]=Tt.useState(null),[p,m]=Tt.useState(""),[g,f]=Tt.useState(!1),[x,L]=Tt.useState(""),k=T=>{T.stopPropagation(),d(!l)},u=(T,O)=>{T.stopPropagation(),a(e.id,O)},v=(T,O,Te)=>{T.stopPropagation(),y(O),m(Te)},M=(T,O)=>{T.stopPropagation(),p.trim()&&o(e.id,O,p.trim()),y(null)},j=(T,O)=>{T.key==="Enter"?M(T,O):T.key==="Escape"&&y(null)},_=T=>{T.stopPropagation(),x.trim()&&(c(e.id,x.trim()),L(""),f(!1))},b=T=>{T.key==="Enter"?_(T):T.key==="Escape"&&(f(!1),L(""))},A=T=>{T.stopPropagation(),n(e.id)},Z=EA(e),w=e.dueDate&&IM(e.dueDate)&&e.status!=="done",J=()=>{switch(e.status){case"done":return i.jsx(st,{size:20,className:K.iconDone});case"in_progress":return i.jsx(St,{size:20,className:K.iconProgress});default:return i.jsx(r1,{size:20,className:K.iconTodo})}};return i.jsxs("div",{className:`${K.card} ${e.status==="done"?K.completed:""}`,onClick:t,children:[i.jsx("button",{className:K.statusBtn,onClick:A,"aria-label":`Mark as ${e.status==="done"?"incomplete":"complete"}`,children:J()}),i.jsxs("div",{className:K.content,children:[i.jsxs("div",{className:K.header,children:[i.jsx("h3",{className:K.title,children:e.title}),e.priority!=="low"&&i.jsxs("span",{className:K.priority,style:{backgroundColor:FA(e.priority)},children:[e.priority==="urgent"&&i.jsx(pa,{size:12}),e.priority]})]}),e.description&&i.jsx("p",{className:K.description,children:e.description}),i.jsxs("div",{className:K.meta,children:[e.dueDate&&i.jsxs("span",{className:`${K.dueDate} ${w?K.overdue:""}`,children:[i.jsx(St,{size:14}),Ni(e.dueDate)]}),e.energyRequired&&e.energyRequired!=="medium"&&i.jsx("span",{className:K.lifeAttribute,title:`Energy: ${e.energyRequired}`,children:i.jsx(jt,{size:14,fill:e.energyRequired==="high"?"currentColor":"none"})}),e.impact&&e.impact==="high"&&i.jsx("span",{className:K.lifeAttribute,title:"High Impact",children:i.jsx(Se,{size:14,className:K.iconHighImpact})}),e.lifeArea&&i.jsx("span",{className:K.lifeAttribute,title:`Area: ${e.lifeArea}`,children:i.jsx(i1,{size:14})}),e.subtasks.length>0&&i.jsxs("span",{className:K.subtasks,children:[i.jsx(st,{size:14}),e.subtasks.filter(T=>T.isCompleted).length,"/",e.subtasks.length]}),e.tags.length>0&&i.jsxs("div",{className:K.tags,children:[e.tags.slice(0,2).map(T=>i.jsx("span",{className:K.tag,children:T},T)),e.tags.length>2&&i.jsxs("span",{className:K.tag,children:["+",e.tags.length-2]})]})]}),e.subtasks.length>0&&i.jsx("div",{className:K.progressBar,children:i.jsx("div",{className:K.progressFill,style:{width:`${Z}%`}})})]}),l&&i.jsxs("div",{className:K.subtasksSection,onClick:T=>T.stopPropagation(),children:[i.jsx("div",{className:K.subtasksList,children:e.subtasks.map(T=>i.jsxs("div",{className:K.subtaskItem,children:[i.jsx("button",{className:`${K.subtaskCheck} ${T.isCompleted?K.checked:""}`,onClick:O=>u(O,T.id),children:T.isCompleted&&i.jsx(er,{size:12})}),h===T.id?i.jsx("input",{type:"text",value:p,onChange:O=>m(O.target.value),onBlur:O=>M(O,T.id),onKeyDown:O=>j(O,T.id),className:K.subtaskInput,autoFocus:!0,onClick:O=>O.stopPropagation()}):i.jsx("span",{className:`${K.subtaskTitle} ${T.isCompleted?K.completedText:""}`,onDoubleClick:O=>v(O,T.id,T.title),children:T.title}),i.jsx("button",{className:K.deleteSubtaskBtn,onClick:O=>{O.stopPropagation(),s(e.id,T.id)},children:i.jsx(Ae,{size:12})})]},T.id))}),g?i.jsx("div",{className:K.addSubtaskForm,children:i.jsx("input",{type:"text",value:x,onChange:T=>L(T.target.value),placeholder:"New subtask...",className:K.subtaskInput,autoFocus:!0,onKeyDown:b,onClick:T=>T.stopPropagation(),onBlur:()=>f(!1)})}):i.jsxs("button",{className:K.addSubtaskBtn,onClick:T=>{T.stopPropagation(),f(!0)},children:[i.jsx(lt,{size:14})," Add Subtask"]})]}),i.jsx("div",{className:K.arrow,onClick:k,children:l?i.jsx(q1,{size:18}):i.jsx(Wt,{size:18})})]})},dD="_container_183jb_1",hD="_summaryCard_183jb_13",uD="_summaryHeader_183jb_33",yD="_summaryTitle_183jb_45",pD="_blockerBadge_183jb_59",kD="_progressLabel_183jb_83",mD="_progressBar_183jb_97",fD="_progressFill_183jb_111",vD="_nextActionSection_183jb_123",gD="_nextActionLabel_183jb_139",xD="_nextActionTask_183jb_163",MD="_nextActionTitle_183jb_175",wD="_suggestionBadge_183jb_185",LD="_tree_183jb_203",SD="_treeItem_183jb_215",jD="_treeItemContent_183jb_227",CD="_treeItemHeader_183jb_235",_D="_expandBtn_183jb_261",ID="_statusIcon_183jb_283",bD="_taskTitle_183jb_293",zD="_blocked_183jb_305",AD="_treeMeta_183jb_321",qD="_dependencyBadge_183jb_333",TD="_subtasksList_183jb_349",ND="_emptyTree_183jb_367",ie={container:dD,summaryCard:hD,summaryHeader:uD,summaryTitle:yD,blockerBadge:pD,progressLabel:kD,progressBar:mD,progressFill:fD,nextActionSection:vD,nextActionLabel:gD,nextActionTask:xD,nextActionTitle:MD,suggestionBadge:wD,tree:LD,treeItem:SD,treeItemContent:jD,treeItemHeader:CD,expandBtn:_D,statusIcon:ID,taskTitle:bD,blocked:zD,treeMeta:AD,dependencyBadge:qD,subtasksList:TD,emptyTree:ND},DD=({tasks:e,onTaskClick:t})=>{const[n,a]=S.useState(new Set),{selectedProjectId:o,getProjectById:c,setNextAction:s}=Xt(),l=o?c(o):null,d=l==null?void 0:l.nextActionTaskId,h=uI(e),y=d?e.find(g=>g.id===d):h,p=(g,f)=>{g.stopPropagation(),a(x=>{const L=new Set(x);return L.has(f)?L.delete(f):L.add(f),L})},m=OA(e);return e.length===0?i.jsx("div",{className:ie.emptyTree,children:i.jsx("p",{children:"No tasks in this project yet."})}):i.jsxs("div",{className:ie.container,children:[i.jsxs("div",{className:ie.summaryCard,children:[i.jsxs("div",{className:ie.summaryHeader,children:[i.jsx("h2",{className:ie.summaryTitle,children:"Project Progress"}),m.blockedCount>0&&i.jsxs("div",{className:ie.blockerBadge,children:[i.jsx(z1,{size:14}),i.jsxs("span",{children:[m.blockedCount," Blocked Tasks"]})]})]}),i.jsxs("div",{className:ie.progressLabel,children:[i.jsxs("span",{children:[m.completedSubtasks," / ",m.totalSubtasks," steps completed"]}),i.jsxs("span",{children:[m.progress,"%"]})]}),i.jsx("div",{className:ie.progressBar,children:i.jsx("div",{className:ie.progressFill,style:{width:`${m.progress}%`}})}),y&&i.jsxs("div",{className:ie.nextActionSection,children:[i.jsxs("div",{className:ie.nextActionLabel,children:[i.jsx(jt,{size:14,fill:"currentColor"}),i.jsx("span",{children:"Next Action"}),!d&&i.jsx("span",{className:ie.suggestionBadge,children:"Suggested"})]}),i.jsxs("div",{className:ie.nextActionTask,children:[i.jsx("span",{className:ie.nextActionTitle,children:y.title}),i.jsx(n1,{icon:i.jsx(Se,{size:14}),size:"sm",variant:"ghost",onClick:()=>t(y.id),tooltip:"Focus Task"})]})]})]}),i.jsx("div",{className:ie.tree,children:e.map(g=>{const f=WM(g,e),x=n.has(g.id),L=g.subtasks.length>0,k=$A(g,e);return i.jsx("div",{className:`${ie.treeItem} ${f&&g.status!=="done"?ie.blocked:""}`,children:i.jsxs("div",{className:ie.treeItemContent,children:[i.jsxs("div",{className:ie.treeItemHeader,onClick:()=>t(g.id),children:[i.jsx("button",{className:ie.expandBtn,onClick:u=>p(u,g.id),children:L?x?i.jsx(q1,{size:18}):i.jsx(Wt,{size:18}):i.jsx("div",{style:{width:18}})}),i.jsx("div",{className:ie.statusIcon,children:g.status==="done"?i.jsx(st,{size:20,color:"var(--color-success)"}):f?i.jsx(z1,{size:20,color:"var(--color-error)"}):g.status==="in_progress"?i.jsx(St,{size:20,color:"var(--color-accent)"}):i.jsx(r1,{size:20,color:"var(--color-text-muted)"})}),i.jsx("span",{className:ie.taskTitle,children:g.title}),i.jsxs("div",{className:ie.treeMeta,children:[i.jsx(n1,{icon:i.jsx(lr,{size:16,fill:g.id===d?"var(--color-accent)":"none"}),size:"sm",variant:"ghost",onClick:u=>{u.stopPropagation(),o&&s(o,g.id===d?null:g.id)},tooltip:g.id===d?"Clear Next Action":"Set as Next Action",style:{color:g.id===d?"var(--color-accent)":"var(--color-text-muted)"}}),k.length>0&&i.jsxs("div",{className:ie.dependencyBadge,title:`Depends on: ${k.map(u=>u.title).join(", ")}`,children:[i.jsx(ar,{size:14}),i.jsxs("span",{children:[k.length," dep"]})]}),L&&i.jsxs("span",{className:ie.progressCount,children:[g.subtasks.filter(u=>u.isCompleted).length,"/",g.subtasks.length]})]})]}),x&&L&&i.jsx("div",{className:ie.subtasksList,children:g.subtasks.map(u=>i.jsx("div",{className:ie.subtaskItem,children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)",padding:"var(--space-1) 0"},children:[u.isCompleted?i.jsx(st,{size:14,color:"var(--color-success)"}):i.jsx(r1,{size:14,color:"var(--color-text-muted)"}),i.jsx("span",{style:{fontSize:"var(--font-size-sm)",textDecoration:u.isCompleted?"line-through":"none",color:u.isCompleted?"var(--color-text-muted)":"var(--color-text-primary)"},children:u.title})]})},u.id))})]})},g.id)})})]})},PD="_container_19sl8_9",HD="_toolbar_19sl8_23",BD="_filters_19sl8_41",RD="_sortOptions_19sl8_43",VD="_viewToggle_19sl8_55",FD="_activeView_19sl8_71",ED="_select_19sl8_81",OD="_taskGroups_19sl8_133",$D="_group_19sl8_145",UD="_groupHeader_19sl8_157",ZD="_statusDot_19sl8_169",WD="_todo_19sl8_181",GD="_in_progress_19sl8_189",KD="_done_19sl8_197",XD="_groupTitle_19sl8_205",QD="_count_19sl8_219",JD="_taskList_19sl8_245",YD="_emptyMessage_19sl8_257",eP="_emptyState_19sl8_275",xe={container:PD,toolbar:HD,filters:BD,sortOptions:RD,viewToggle:VD,activeView:FD,select:ED,taskGroups:OD,group:$D,groupHeader:UD,statusDot:ZD,todo:WD,in_progress:GD,done:KD,groupTitle:XD,count:QD,taskList:JD,emptyMessage:YD,emptyState:eP},kI=({tasks:e,onTaskClick:t,showFilters:n=!0})=>{const{filters:a,setFilters:o,sortBy:c,setSortBy:s,sortOrder:l,setSortOrder:d,viewMode:h,setViewMode:y}=Ze();let p=[...e];if(a.status!=="all"&&(p=p.filter(f=>f.status===a.status)),a.priority!=="all"&&(p=p.filter(f=>f.priority===a.priority)),a.search){const f=a.search.toLowerCase();p=p.filter(x=>x.title.toLowerCase().includes(f)||x.description.toLowerCase().includes(f))}p.sort((f,x)=>{let L=0;switch(c){case"dueDate":const k=f.dueDate?new Date(f.dueDate).getTime():1/0,u=x.dueDate?new Date(x.dueDate).getTime():1/0;L=k-u;break;case"priority":const v={urgent:0,high:1,medium:2,low:3};L=v[f.priority]-v[x.priority];break;case"createdAt":L=new Date(x.createdAt).getTime()-new Date(f.createdAt).getTime();break;case"title":L=f.title.localeCompare(x.title);break;case"order":default:L=f.order-x.order}return l==="desc"?-L:L});const m={todo:p.filter(f=>f.status==="todo"),in_progress:p.filter(f=>f.status==="in_progress"),done:p.filter(f=>f.status==="done")},g={todo:"To Do",in_progress:"In Progress",done:"Completed"};return i.jsxs("div",{className:xe.container,children:[n&&i.jsxs("div",{className:xe.toolbar,children:[i.jsxs("div",{className:xe.filters,children:[i.jsxs("select",{className:xe.select,value:a.status,onChange:f=>o({status:f.target.value}),children:[i.jsx("option",{value:"all",children:"All Status"}),i.jsx("option",{value:"todo",children:"To Do"}),i.jsx("option",{value:"in_progress",children:"In Progress"}),i.jsx("option",{value:"done",children:"Completed"})]}),i.jsxs("select",{className:xe.select,value:a.priority,onChange:f=>o({priority:f.target.value}),children:[i.jsx("option",{value:"all",children:"All Priority"}),i.jsx("option",{value:"urgent",children:"Urgent"}),i.jsx("option",{value:"high",children:"High"}),i.jsx("option",{value:"medium",children:"Medium"}),i.jsx("option",{value:"low",children:"Low"})]})]}),i.jsxs("div",{className:xe.sortOptions,children:[i.jsxs("select",{className:xe.select,value:c,onChange:f=>s(f.target.value),children:[i.jsx("option",{value:"order",children:"Manual"}),i.jsx("option",{value:"dueDate",children:"Due Date"}),i.jsx("option",{value:"priority",children:"Priority"}),i.jsx("option",{value:"createdAt",children:"Created"}),i.jsx("option",{value:"title",children:"Title"})]}),i.jsx(n1,{icon:i.jsx(Qr,{size:16}),size:"sm",variant:"ghost",onClick:()=>d(l==="asc"?"desc":"asc"),tooltip:`Sort ${l==="asc"?"descending":"ascending"}`}),i.jsxs("div",{className:xe.viewToggle,children:[i.jsx(n1,{icon:i.jsx(wi,{size:16}),size:"sm",variant:h==="list"?"default":"ghost",onClick:()=>y("list"),tooltip:"List View",className:h==="list"?xe.activeView:""}),i.jsx(n1,{icon:i.jsx(pi,{size:16}),size:"sm",variant:h==="tree"?"default":"ghost",onClick:()=>y("tree"),tooltip:"Tree View",className:h==="tree"?xe.activeView:""}),i.jsx(n1,{icon:i.jsx(ii,{size:16}),size:"sm",variant:h==="timeline"?"default":"ghost",onClick:()=>y("timeline"),tooltip:"Timeline View",className:h==="timeline"?xe.activeView:""})]})]})]}),h==="tree"?i.jsx(DD,{tasks:p,onTaskClick:t}):i.jsx("div",{className:xe.taskGroups,children:["todo","in_progress","done"].map(f=>{const x=m[f];return x.length===0&&a.status!=="all"?null:i.jsxs("div",{className:xe.group,children:[i.jsxs("div",{className:xe.groupHeader,children:[i.jsx("span",{className:`${xe.statusDot} ${xe[f]}`}),i.jsx("h3",{className:xe.groupTitle,children:g[f]}),i.jsx("span",{className:xe.count,children:x.length})]}),i.jsx("div",{className:xe.taskList,children:x.length===0?i.jsx("p",{className:xe.emptyMessage,children:"No tasks"}):x.map(L=>i.jsx(nM,{task:L,onClick:()=>t(L.id)},L.id))})]},f)})}),p.length===0&&i.jsxs("div",{className:xe.emptyState,children:[i.jsx(xi,{size:48}),i.jsx("h3",{children:"No tasks found"}),i.jsx("p",{children:"Try adjusting your filters or create a new task"})]})]})},fS={high:"⚡ Alta",medium:"🙂 Media",low:"😴 Baja"},tP={low:"Bajo",medium:"Medio",high:"Alto"},Ji={money:"💰 Dinero",health:"❤️ Salud",growth:"🧠 Crecimiento",relationships:"👥 Relaciones",order:"📦 Orden"},nP={creative:"🎨 Creativo",analytical:"📊 Analítico",mechanical:"⚙️ Mecánico"},aP={habit:"🔁 Hábito",goal:"🎯 Objetivo",deep_work:"🧱 Deep Work",quick:"⚡ Rápida",decision:"🧠 Decidir",task:"✅ Tarea"},Cw=["#d4af37","#ef4444","#f97316","#eab308","#22c55e","#14b8a6","#3b82f6","#8b5cf6","#ec4899","#6b7280"],rP="_container_tw739_9",iP="_header_tw739_21",oP="_statusBtn_tw739_37",cP="_iconTodo_tw739_59",sP="_iconProgress_tw739_77",lP="_iconDone_tw739_85",dP="_title_tw739_93",hP="_completed_tw739_119",uP="_titleInput_tw739_129",yP="_closeBtn_tw739_151",pP="_content_tw739_191",kP="_details_tw739_219",mP="_section_tw739_231",fP="_sectionHeader_tw739_243",vP="_label_tw739_255",gP="_description_tw739_273",xP="_textarea_tw739_301",MP="_progress_tw739_315",wP="_progressBar_tw739_327",LP="_progressFill_tw739_341",SP="_subtaskList_tw739_353",jP="_subtaskItem_tw739_365",CP="_subtaskCheck_tw739_391",_P="_subtaskDone_tw739_417",IP="_subtaskDelete_tw739_427",bP="_addSubtask_tw739_467",zP="_meta_tw739_543",AP="_metaItem_tw739_563",qP="_select_tw739_575",TP="_dateInput_tw739_577",NP="_timerSection_tw739_597",DP="_timer_tw739_597",PP="_timerDisplay_tw739_625",HP="_running_tw739_639",BP="_timerControls_tw739_647",RP="_timerBtn_tw739_657",VP="_active_tw739_695",FP="_estimate_tw739_707",EP="_tags_tw739_721",OP="_tag_tw739_721",$P="_timestamps_tw739_751",UP="_footer_tw739_775",ZP="_footerActions_tw739_791",WP="_deleteConfirm_tw739_801",GP="_quickDateButtons_tw739_827",KP="_quickDateBtn_tw739_839",XP="_activeDate_tw739_875",QP="_selectedDate_tw739_889",JP="_clearBtn_tw739_915",YP="_quickTimeButtons_tw739_955",eH="_quickTimeBtn_tw739_967",tH="_activeTime_tw739_1005",nH="_subtaskInput_tw739_1017",I={container:rP,header:iP,statusBtn:oP,iconTodo:cP,iconProgress:sP,iconDone:lP,title:dP,completed:hP,titleInput:uP,closeBtn:yP,content:pP,details:kP,section:mP,sectionHeader:fP,label:vP,description:gP,textarea:xP,progress:MP,progressBar:wP,progressFill:LP,subtaskList:SP,subtaskItem:jP,subtaskCheck:CP,subtaskDone:_P,subtaskDelete:IP,addSubtask:bP,meta:zP,metaItem:AP,select:qP,dateInput:TP,timerSection:NP,timer:DP,timerDisplay:PP,running:HP,timerControls:BP,timerBtn:RP,active:VP,estimate:FP,tags:EP,tag:OP,timestamps:$P,footer:UP,footerActions:ZP,deleteConfirm:WP,quickDateButtons:GP,quickDateBtn:KP,activeDate:XP,selectedDate:QP,clearBtn:JP,quickTimeButtons:YP,quickTimeBtn:eH,activeTime:tH,subtaskInput:nH},aH=({task:e,isOpen:t,onClose:n,initialData:a={}})=>{const{tasks:o,updateTask:c,addTask:s,deleteTask:l,toggleTaskStatus:d,toggleSubtask:h,updateSubtask:y,addSubtask:p,deleteSubtask:m,startTimer:g,stopTimer:f,resetTimer:x}=Ze(),[L,k]=S.useState(""),[u,v]=S.useState(""),[M,j]=S.useState("medium"),[_,b]=S.useState("todo"),[A,Z]=S.useState(""),[w,J]=S.useState(""),[T,O]=S.useState(""),[Te,E]=S.useState("medium"),[Q,ae]=S.useState("medium"),[q,V]=S.useState(null),[$,se]=S.useState("analytical"),[ge,Ht]=S.useState("task"),[yt,O1]=S.useState(""),[Bt,u1]=S.useState([]),[Ca,KM]=S.useState(""),[tt,_a]=S.useState(!1),[gI,XM]=S.useState(!1),[xI,co]=S.useState(null),[so,xS]=S.useState(""),[MI,QM]=S.useState(0),[Ia,ba]=S.useState([]);S.useEffect(()=>{t&&(e?(k(e.title),v(e.description),j(e.priority),b(e.status),Z(e.dueDate?e.dueDate.split("T")[0]:""),J(e.dueTime||""),O(e.timeEstimate?String(e.timeEstimate):""),E(e.energyRequired||"medium"),ae(e.impact||"medium"),V(e.lifeArea||null),se(e.mentalLevel||"analytical"),Ht(e.taskType||"task"),Ht(e.taskType||"task"),O1(e.reward||""),u1(e.dependencies||[]),ba(e.subtasks||[]),QM(e.timeSpent||0),_a(!1)):(k(a.title||""),v(a.description||""),j(a.priority||"medium"),b(a.status||"todo"),Z(a.dueDate?a.dueDate.split("T")[0]:""),J(a.dueTime||""),O(a.timeEstimate?String(a.timeEstimate):""),E(a.energyRequired||"medium"),ae(a.impact||"medium"),V(a.lifeArea||null),se(a.mentalLevel||"analytical"),Ht(a.taskType||"task"),Ht(a.taskType||"task"),O1(a.reward||""),u1(a.dependencies||[]),ba([]),QM(0),_a(!0)),XM(!1))},[e,t,a]),S.useEffect(()=>{if(!(e!=null&&e.isTimerRunning))return;const C=setInterval(()=>{QM(H=>H+1)},1e3);return()=>clearInterval(C)},[e==null?void 0:e.isTimerRunning]);const wI=()=>{if(!Ca.trim())return;const C={id:Math.random().toString(36).substr(2,9),title:Ca.trim(),isCompleted:!1};ba([...Ia,C]),KM("")},LI=C=>{ba(Ia.map(H=>H.id===C?{...H,isCompleted:!H.isCompleted}:H))},SI=C=>{ba(Ia.filter(H=>H.id!==C))},jI=C=>{co(C.id),xS(C.title)},MS=C=>{if(!so.trim()){co(null);return}e?y(e.id,C,so.trim()):ba(Ia.map(H=>H.id===C?{...H,title:so.trim()}:H)),co(null)},CI=(C,H)=>{C.key==="Enter"?MS(H):C.key==="Escape"&&co(null)},_I=C=>{const H=Math.floor(C/3600),nt=Math.floor(C%3600/60),za=C%60;return H>0?`${H}:${nt.toString().padStart(2,"0")}:${za.toString().padStart(2,"0")}`:`${nt}:${za.toString().padStart(2,"0")}`},II=()=>{const C={title:L.trim(),description:u.trim(),priority:M,status:_,dueDate:A?new Date(A).toISOString():null,dueTime:w||null,timeEstimate:T?parseInt(T):null,energyRequired:Te,impact:Q,lifeArea:q,mentalLevel:$,taskType:ge,reward:yt.trim()||null,dependencies:Bt};if(e)c(e.id,C),_a(!1);else{if(!L.trim())return;s({...C,projectId:a.projectId||"",recurring:"none",tags:[],subtasks:Ia,reminder:null,isArchived:!1}),n()}},bI=()=>{e&&(l(e.id),n())},wS=()=>{if(e){if(!Ca.trim())return;p(e.id,Ca.trim()),KM("")}else wI()},zI=C=>{C.key==="Enter"&&wS()},AI=C=>{if(!C)return!1;const H=new Date(C),nt=new Date;return H.toDateString()===nt.toDateString()},qI=C=>{if(!C)return!1;const H=new Date(C),nt=new Date;return nt.setDate(nt.getDate()+1),H.toDateString()===nt.toDateString()},lo=C=>{const H=new Date;H.setDate(H.getDate()+C),H.setHours(12,0,0,0),Z(H.toISOString().split("T")[0]),e&&c(e.id,{dueDate:H.toISOString()})},TI=C=>{const H=new Date(C),nt=new Date,za=new Date;za.setDate(za.getDate()+1);const DI=H.getTime()-nt.getTime(),jr=Math.ceil(DI/(1e3*60*60*24));return H.toDateString()===nt.toDateString()?"📅 Hoy":H.toDateString()===za.toDateString()?"📅 Mañana":jr>0&&jr<=7?`📅 En ${jr} días`:jr<0?`⚠️ Hace ${Math.abs(jr)} días`:`📅 ${H.toLocaleDateString("es-MX",{weekday:"short",day:"numeric",month:"short"})}`},NI=()=>{e&&(e.isTimerRunning?f(e.id):g(e.id))},$1=e?e.subtasks:Ia,LS=$1.filter(C=>C.isCompleted).length,SS=$1.length>0?Math.round(LS/$1.length*100):0;return i.jsx(ro,{isOpen:t,onClose:n,title:"",size:"lg",showCloseButton:!1,children:i.jsxs("div",{className:I.container,children:[i.jsxs("div",{className:I.header,children:[i.jsx("button",{className:I.statusBtn,onClick:()=>{b(_==="todo"?"in_progress":_==="in_progress"?"done":"todo"),e&&d(e.id)},children:_==="done"?i.jsx(st,{size:24,className:I.iconDone}):_==="in_progress"?i.jsx(St,{size:24,className:I.iconProgress}):i.jsx(r1,{size:24,className:I.iconTodo})}),tt?i.jsx("input",{className:I.titleInput,value:L,onChange:C=>k(C.target.value),placeholder:"Task title",autoFocus:!0}):i.jsx("h2",{className:`${I.title} ${_==="done"?I.completed:""}`,onClick:()=>_a(!0),children:L||"Untitled Task"}),i.jsx("button",{className:I.closeBtn,onClick:n,children:i.jsx(Ae,{size:20})})]}),i.jsxs("div",{className:I.content,children:[i.jsxs("div",{className:I.details,children:[i.jsxs("div",{className:I.section,children:[i.jsx("label",{className:I.label,children:"Description"}),tt?i.jsx("textarea",{className:I.textarea,value:u,onChange:C=>v(C.target.value),placeholder:"Add description...",rows:3}):i.jsx("p",{className:I.description,onClick:()=>_a(!0),children:u||"Click to add description..."})]}),i.jsxs("div",{className:I.section,children:[i.jsxs("div",{className:I.sectionHeader,children:[i.jsxs("label",{className:I.label,children:["Subtasks (",LS,"/",$1.length,")"]}),$1.length>0&&i.jsxs("span",{className:I.progress,children:[SS,"%"]})]}),$1.length>0&&i.jsx("div",{className:I.progressBar,children:i.jsx("div",{className:I.progressFill,style:{width:`${SS}%`}})}),i.jsx("div",{className:I.subtaskList,children:$1.map(C=>i.jsxs("div",{className:I.subtaskItem,children:[i.jsx("button",{className:I.subtaskCheck,onClick:()=>{e?h(e.id,C.id):LI(C.id)},children:C.isCompleted?i.jsx(st,{size:18,className:I.iconDone}):i.jsx(r1,{size:18})}),xI===C.id?i.jsx("input",{className:I.subtaskInput,value:so,onChange:H=>xS(H.target.value),onBlur:()=>MS(C.id),onKeyDown:H=>CI(H,C.id),autoFocus:!0}):i.jsx("span",{className:C.isCompleted?I.subtaskDone:"",onDoubleClick:()=>jI(C),title:"Double click to edit",children:C.title}),i.jsx("button",{className:I.subtaskDelete,onClick:()=>{e?m(e.id,C.id):SI(C.id)},children:i.jsx(Ae,{size:14})})]},C.id))}),i.jsxs("div",{className:I.addSubtask,children:[i.jsx("input",{type:"text",placeholder:"Add subtask...",value:Ca,onChange:C=>KM(C.target.value),onKeyPress:zI}),i.jsx("button",{onClick:wS,disabled:!Ca.trim(),children:i.jsx(lt,{size:18})})]})]})]}),i.jsxs("div",{className:I.meta,children:[e&&i.jsxs("div",{className:I.timerSection,children:[i.jsx("label",{className:I.label,children:"Time Tracking"}),i.jsxs("div",{className:I.timer,children:[i.jsx("span",{className:`${I.timerDisplay} ${e.isTimerRunning?I.running:""}`,children:_I(MI)}),i.jsxs("div",{className:I.timerControls,children:[i.jsx("button",{className:`${I.timerBtn} ${e.isTimerRunning?I.active:""}`,onClick:NI,children:e.isTimerRunning?i.jsx(or,{size:16}):i.jsx(T1,{size:16})}),i.jsx("button",{className:I.timerBtn,onClick:()=>x(e.id),children:i.jsx(cr,{size:16})})]})]}),e.timeEstimate&&i.jsxs("p",{className:I.estimate,children:["Estimate: ",e.timeEstimate," min"]})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsx("label",{className:I.label,children:"Type"}),i.jsx("select",{className:I.select,value:ge,onChange:C=>{Ht(C.target.value),e&&!tt&&c(e.id,{taskType:C.target.value})},children:Object.entries(aP).map(([C,H])=>i.jsx("option",{value:C,children:H},C))})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsx("label",{className:I.label,children:"Priority"}),i.jsxs("select",{className:I.select,value:M,onChange:C=>{j(C.target.value),e&&!tt&&c(e.id,{priority:C.target.value})},children:[i.jsx("option",{value:"low",children:"Low"}),i.jsx("option",{value:"medium",children:"Medium"}),i.jsx("option",{value:"high",children:"High"}),i.jsx("option",{value:"urgent",children:"Urgent"})]})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsx("label",{className:I.label,children:"Status"}),i.jsxs("select",{className:I.select,value:_,onChange:C=>{b(C.target.value),e&&!tt&&c(e.id,{status:C.target.value})},children:[i.jsx("option",{value:"todo",children:"To Do"}),i.jsx("option",{value:"in_progress",children:"In Progress"}),i.jsx("option",{value:"done",children:"Completed"})]})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsxs("label",{className:I.label,children:[i.jsx(jt,{size:14})," Energy Level"]}),i.jsx("select",{className:I.select,value:Te,onChange:C=>{E(C.target.value),e&&!tt&&c(e.id,{energyRequired:C.target.value})},children:Object.entries(fS).map(([C,H])=>i.jsx("option",{value:C,children:H},C))})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsxs("label",{className:I.label,children:[i.jsx(Se,{size:14})," Impact"]}),i.jsx("select",{className:I.select,value:Q,onChange:C=>{ae(C.target.value),e&&!tt&&c(e.id,{impact:C.target.value})},children:Object.entries(tP).map(([C,H])=>i.jsx("option",{value:C,children:H},C))})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsxs("label",{className:I.label,children:[i.jsx(i1,{size:14})," Life Area"]}),i.jsxs("select",{className:I.select,value:q||"",onChange:C=>{const H=C.target.value;V(H||null),e&&!tt&&c(e.id,{lifeArea:H||null})},children:[i.jsx("option",{value:"",children:"None"}),Object.entries(Ji).map(([C,H])=>i.jsx("option",{value:C,children:H},C))]})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsxs("label",{className:I.label,children:[i.jsx(A1,{size:14})," Mental Level"]}),i.jsx("select",{className:I.select,value:$,onChange:C=>{se(C.target.value),e&&!tt&&c(e.id,{mentalLevel:C.target.value})},children:Object.entries(nP).map(([C,H])=>i.jsx("option",{value:C,children:H},C))})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsxs("label",{className:I.label,children:[i.jsx(ar,{size:14})," Dependencies"]}),i.jsx("select",{className:I.select,multiple:!0,value:Bt,onChange:C=>{const H=Array.from(C.target.selectedOptions,nt=>nt.value);u1(H),e&&!tt&&c(e.id,{dependencies:H})},style:{height:"80px",padding:"4px"},children:o.filter(C=>C.id!==(e==null?void 0:e.id)).map(C=>i.jsxs("option",{value:C.id,children:[C.status==="done"?"✅ ":"",C.title]},C.id))})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsxs("label",{className:I.label,children:[i.jsx(Lt,{size:14})," Fecha límite"]}),i.jsxs("div",{className:I.quickDateButtons,children:[i.jsx("button",{className:`${I.quickDateBtn} ${AI(A)?I.activeDate:""}`,onClick:()=>lo(0),children:"Hoy"}),i.jsx("button",{className:`${I.quickDateBtn} ${qI(A)?I.activeDate:""}`,onClick:()=>lo(1),children:"Mañana"}),i.jsx("button",{className:I.quickDateBtn,onClick:()=>lo(3),children:"3 días"}),i.jsx("button",{className:I.quickDateBtn,onClick:()=>lo(7),children:"7 días"})]}),A&&i.jsxs("div",{className:I.selectedDate,children:[i.jsx("span",{children:TI(A)}),i.jsx("button",{className:I.clearBtn,onClick:()=>{Z(""),e&&c(e.id,{dueDate:null})},children:i.jsx(Ae,{size:12})})]})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsxs("label",{className:I.label,children:[i.jsx(St,{size:14})," Hora"]}),i.jsxs("div",{className:I.quickTimeButtons,children:[i.jsx("button",{className:`${I.quickTimeBtn} ${w==="09:00"?I.activeTime:""}`,onClick:()=>{J("09:00"),e&&c(e.id,{dueTime:"09:00"})},children:"🌅 9am"}),i.jsx("button",{className:`${I.quickTimeBtn} ${w==="12:00"?I.activeTime:""}`,onClick:()=>{J("12:00"),e&&c(e.id,{dueTime:"12:00"})},children:"☀️ 12pm"}),i.jsx("button",{className:`${I.quickTimeBtn} ${w==="15:00"?I.activeTime:""}`,onClick:()=>{J("15:00"),e&&c(e.id,{dueTime:"15:00"})},children:"🌤️ 3pm"})]}),w&&i.jsxs("div",{className:I.selectedDate,children:[i.jsx("span",{children:w}),i.jsx("button",{className:I.clearBtn,onClick:()=>{J(""),e&&c(e.id,{dueTime:null})},children:i.jsx(Ae,{size:12})})]})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsx("label",{className:I.label,children:"Reward"}),i.jsx("input",{type:"text",className:I.dateInput,placeholder:"e.g. Coffee, Walk, etc.",value:yt,onChange:C=>{O1(C.target.value)},onBlur:()=>{e&&!tt&&yt!==(e.reward||"")&&c(e.id,{reward:yt})}})]}),i.jsxs("div",{className:I.metaItem,children:[i.jsx("label",{className:I.label,children:"Time Estimate (min)"}),i.jsx("input",{type:"number",className:I.dateInput,placeholder:"e.g. 30",value:T,onChange:C=>{O(C.target.value),e&&!tt&&c(e.id,{timeEstimate:C.target.value?parseInt(C.target.value):null})}})]}),e&&e.tags.length>0&&i.jsxs("div",{className:I.metaItem,children:[i.jsx("label",{className:I.label,children:"Tags"}),i.jsx("div",{className:I.tags,children:e.tags.map(C=>i.jsx("span",{className:I.tag,children:C},C))})]}),e&&i.jsxs("div",{className:I.timestamps,children:[i.jsxs("p",{children:["Created: ",Ni(e.createdAt)]}),i.jsxs("p",{children:["Updated: ",Ni(e.updatedAt)]}),e.completedAt&&i.jsxs("p",{children:["Completed: ",Ni(e.completedAt)]})]})]})]}),i.jsx("div",{className:I.footer,children:gI?i.jsxs("div",{className:I.deleteConfirm,children:[i.jsx("span",{children:"Delete this task?"}),i.jsx(W,{variant:"danger",size:"sm",onClick:bI,children:"Yes, Delete"}),i.jsx(W,{variant:"ghost",size:"sm",onClick:()=>XM(!1),children:"Cancel"})]}):i.jsxs(i.Fragment,{children:[e&&i.jsx(W,{variant:"ghost",leftIcon:i.jsx(D1,{size:16}),onClick:()=>XM(!0),children:"Delete"}),i.jsx("div",{className:I.footerActions,children:tt?i.jsxs(i.Fragment,{children:[e&&i.jsx(W,{variant:"ghost",onClick:()=>_a(!1),children:"Cancel"}),i.jsx(W,{variant:"primary",onClick:II,children:e?"Save Changes":"Create Task"})]}):i.jsx(W,{variant:"ghost",onClick:n,children:"Close"})})]})})]})})},rH="_container_16izb_9",iH="_header_16izb_33",oH="_energySelector_16izb_49",cH="_label_16izb_63",sH="_buttons_16izb_75",lH="_energyBtn_16izb_85",dH="_active_16izb_121",hH="_btnText_16izb_133",uH="_iconHigh_16izb_145",yH="_iconMedium_16izb_147",pH="_iconLow_16izb_149",kH="_content_16izb_155",mH="_focusLabel_16izb_167",fH="_targetIcon_16izb_181",vH="_pulse_16izb_1",gH="_taskCard_16izb_207",xH="_taskInfo_16izb_239",MH="_taskTitle_16izb_249",wH="_timeEstimate_16izb_263",LH="_actions_16izb_283",SH="_doneBtn_16izb_295",jH="_emptyState_16izb_333",fe={container:rH,header:iH,energySelector:oH,label:cH,buttons:sH,energyBtn:lH,active:dH,btnText:hH,iconHigh:uH,iconMedium:yH,iconLow:pH,content:kH,focusLabel:mH,targetIcon:fH,pulse:vH,taskCard:gH,taskInfo:xH,taskTitle:MH,timeEstimate:wH,actions:LH,doneBtn:SH,emptyState:jH},CH=({onTaskClick:e})=>{const{tasks:t,startTimer:n,toggleTaskStatus:a}=Ze(),[o,c]=S.useState("medium"),[s,l]=S.useState(null);S.useEffect(()=>{const y=new Date().toDateString(),p=t.filter(f=>f.status!=="done"&&f.dueDate&&new Date(f.dueDate).toDateString()===y&&(f.priority==="urgent"||f.priority==="high"));if(p.length>0){l(p[0]);return}const m=t.filter(f=>f.status!=="done"&&f.energyRequired===o&&f.impact==="high");if(m.length>0){l(m[0]);return}const g=t.filter(f=>f.status!=="done"&&f.priority==="high");g.length>0?l(g[0]):l(null)},[t,o]);const d=y=>{c(y)},h=y=>{switch(y){case"high":return i.jsx(ti,{className:fe.iconHigh});case"medium":return i.jsx(ei,{className:fe.iconMedium});case"low":return i.jsx(Yr,{className:fe.iconLow})}};return i.jsxs(M1,{variant:"elevated",className:fe.container,children:[i.jsx("div",{className:fe.header,children:i.jsxs("div",{className:fe.energySelector,children:[i.jsx("span",{className:fe.label,children:"Nivel de Energía:"}),i.jsx("div",{className:fe.buttons,children:["high","medium","low"].map(y=>i.jsxs("button",{className:`${fe.energyBtn} ${o===y?fe.active:""} ${fe[y]}`,onClick:()=>d(y),children:[h(y),i.jsx("span",{className:fe.btnText,children:fS[y]})]},y))})]})}),i.jsxs("div",{className:fe.content,children:[i.jsxs("div",{className:fe.focusLabel,children:[i.jsx(Se,{size:20,className:fe.targetIcon}),i.jsx("h3",{children:"Foco Principal del Día"})]}),s?i.jsxs("div",{className:fe.taskCard,children:[i.jsxs("div",{className:fe.taskInfo,onClick:()=>e(s.id),children:[i.jsx("h2",{className:fe.taskTitle,children:s.title}),s.timeEstimate&&i.jsxs("span",{className:fe.timeEstimate,children:["⏱️ ",s.timeEstimate," min"]})]}),i.jsxs("div",{className:fe.actions,children:[s.isTimerRunning?i.jsx(W,{variant:"primary",onClick:y=>{y.stopPropagation(),e(s.id)},children:"Ver Timer"}):i.jsx(W,{variant:"primary",leftIcon:i.jsx(T1,{size:16}),onClick:y=>{y.stopPropagation(),n(s.id)},children:"Empezar Ahora"}),i.jsx("button",{className:fe.doneBtn,onClick:y=>{y.stopPropagation(),a(s.id)},children:i.jsx(st,{size:24})})]})]}):i.jsx("div",{className:fe.emptyState,children:i.jsx("p",{children:"🎉 ¡No hay tareas urgentes! Disfruta tu día o selecciona tareas del backlog."})})]})]})},_H="_container_3liia_1",IH="_header_3liia_13",bH="_icon_3liia_29",zH="_grid_3liia_53",AH="_statItem_3liia_65",qH="_label_3liia_81",TH="_value_3liia_91",NH="_subtext_3liia_105",DH="_today_3liia_115",PH="_divider_3liia_133",je={container:_H,header:IH,icon:bH,grid:zH,statItem:AH,label:qH,value:TH,subtext:NH,today:DH,divider:PH},HH=()=>{const{tasks:e}=Ze(),t=(y,p)=>y.getFullYear()===p.getFullYear()&&y.getMonth()===p.getMonth()&&y.getDate()===p.getDate(),n=new Date,a=new Date(n);a.setDate(a.getDate()-1);const o=new Date(n);o.setDate(o.getDate()-7);const c=e.filter(y=>y.status==="done"&&y.completedAt&&t(new Date(y.completedAt),n)).length,s=e.filter(y=>y.status==="done"&&y.completedAt&&t(new Date(y.completedAt),a)).length,l=e.filter(y=>y.status==="done"&&y.completedAt&&new Date(y.completedAt)>o&&new Date(y.completedAt)<n).length,d=Math.round(l/7),h=c>=d?"up":"down";return i.jsxs(M1,{variant:"default",className:je.container,children:[i.jsxs("div",{className:je.header,children:[i.jsx(dr,{size:18,className:je.icon}),i.jsx("h3",{children:"Productivity Trend"})]}),i.jsxs("div",{className:je.grid,children:[i.jsxs("div",{className:je.statItem,children:[i.jsx("span",{className:je.label,children:"Last Week (Avg)"}),i.jsx("span",{className:je.value,children:d}),i.jsx("span",{className:je.subtext,children:"tasks/day"})]}),i.jsx("div",{className:je.divider}),i.jsxs("div",{className:je.statItem,children:[i.jsx("span",{className:je.label,children:"Yesterday"}),i.jsx("span",{className:je.value,children:s}),i.jsx("span",{className:je.subtext,children:"tasks"})]}),i.jsx("div",{className:je.divider}),i.jsxs("div",{className:`${je.statItem} ${je.today}`,children:[i.jsx("span",{className:je.label,children:"Today"}),i.jsx("span",{className:je.value,children:c}),i.jsx("span",{className:je.subtext,children:h==="up"?"🔥 On Fire":"⚡ Keep Going"})]})]})]})},BH={reviews:[],currentReview:null,isLoading:!1},vS=h1((e,t)=>({...BH,loadReviews:()=>{const n=Kt(B.REVIEWS,[]);e({reviews:n})},deleteReview:n=>{e(a=>{const o=a.reviews.filter(c=>c.id!==n);return U(B.REVIEWS,o),{reviews:o}})},startReview:n=>{const a=R(),o={id:P1(),type:n,date:a,status:"in_progress",answers:[],completedAt:null,createdAt:a,updatedAt:a};e({currentReview:o})},saveAnswer:(n,a)=>{e(o=>{if(!o.currentReview)return o;const c=o.currentReview.answers.findIndex(l=>l.questionId===n),s=[...o.currentReview.answers];return c>=0?s[c]={questionId:n,value:a}:s.push({questionId:n,value:a}),{currentReview:{...o.currentReview,answers:s,updatedAt:R()}}})},completeReview:()=>{e(n=>{if(!n.currentReview)return n;const a={...n.currentReview,status:"completed",completedAt:R(),updatedAt:R()},o=[...n.reviews,a];return U(B.REVIEWS,o),{reviews:o,currentReview:null}})},cancelReview:()=>{e({currentReview:null})},getReviewByDate:(n,a)=>t().reviews.find(o=>o.type===a&&o.createdAt.startsWith(n.split("T")[0]))})),RH="_overlay_llrjo_9",VH="_container_llrjo_39",FH="_header_llrjo_71",EH="_titleContainer_llrjo_89",OH="_title_llrjo_89",$H="_subtitle_llrjo_113",UH="_content_llrjo_125",ZH="_statsGrid_llrjo_145",WH="_statCard_llrjo_159",GH="_statValue_llrjo_175",KH="_statLabel_llrjo_191",XH="_suggestionPanel_llrjo_203",QH="_suggestionTitle_llrjo_221",JH="_suggestionList_llrjo_239",YH="_suggestionItem_llrjo_257",eB="_questionSection_llrjo_275",tB="_questionLabel_llrjo_283",nB="_textarea_llrjo_299",aB="_footer_llrjo_339",rB="_progressContainer_llrjo_357",iB="_progressBar_llrjo_373",oB="_progressFill_llrjo_389",cB="_stepCounter_llrjo_401",ee={overlay:RH,container:VH,header:FH,titleContainer:EH,title:OH,subtitle:$H,content:UH,statsGrid:ZH,statCard:WH,statValue:GH,statLabel:KH,suggestionPanel:XH,suggestionTitle:QH,suggestionList:JH,suggestionItem:YH,questionSection:eB,questionLabel:tB,textarea:nB,footer:aB,progressContainer:rB,progressBar:iB,progressFill:oB,stepCounter:cB},sB=[{id:"advanced_income",text:"What advanced income or leverage this week?",type:"text",category:"reflection"},{id:"noise",text:"What was noise/distraction?",type:"text",category:"reflection"},{id:"eliminated",text:"What should be eliminated?",type:"text",category:"system"},{id:"next_priority",text:"What is the single priority for next week?",type:"text",category:"planning"}],lB=[{id:"goal_progress",text:"Goal progress vs expectation?",type:"text",category:"reflection"},{id:"time_vs_impact",text:"Time vs Impact analysis (80/20 rule)",type:"text",category:"reflection"},{id:"bottlenecks",text:"What bottlenecks were detected?",type:"text",category:"system"},{id:"strategic_adjustment",text:"One strategic adjustment for next month",type:"text",category:"planning"}],dB=[{id:"goals_valid",text:"Are your goals still valid?",type:"text",category:"reflection"},{id:"system_redesign",text:"What part of the system needs redesign?",type:"text",category:"system"},{id:"double_down",text:"What to double down on?",type:"text",category:"planning"}],mI=({type:e,onClose:t})=>{const{currentReview:n,saveAnswer:a,completeReview:o}=vS(),{tasks:c}=Ze(),{projects:s}=Xt(),[l,d]=S.useState(0),h=S.useMemo(()=>{const k=c.filter(v=>v.status==="done"),u=s.filter(v=>!v.isArchived&&bM(c.filter(M=>M.projectId===v.id))!=="on_track");return{completedCount:k.length,stalledCount:u.length,stalledProjects:u}},[c,s]),y=S.useMemo(()=>{switch(e){case"quarterly":return dB;case"monthly":return lB;case"weekly":default:return sB}},[e]),p=[{id:"overview",title:`${e.charAt(0).toUpperCase()+e.slice(1)} Overview`},...y.map(k=>({id:k.id,title:k.text,question:k})),{id:"summary",title:"Summary"}],m=()=>{l<p.length-1?d(l+1):(o(),t())},g=()=>{l>0&&d(l-1)},f=k=>{const u=p[l];u.question&&a(u.question.id,k)},x=()=>{var u;const k=p[l];return k.question&&((u=n==null?void 0:n.answers.find(v=>v.questionId===k.question.id))==null?void 0:u.value)||""},L=()=>{if(l===0)return i.jsxs("div",{className:ee.overviewStep,children:[i.jsxs("div",{className:ee.statsGrid,children:[i.jsxs("div",{className:ee.statCard,children:[i.jsx("span",{className:ee.statValue,children:h.completedCount}),i.jsx("span",{className:ee.statLabel,children:"Tasks Completed"})]}),i.jsxs("div",{className:ee.statCard,children:[i.jsx("span",{className:ee.statValue,children:h.stalledCount}),i.jsx("span",{className:ee.statLabel,children:"Projects At Risk"})]}),i.jsxs("div",{className:ee.statCard,children:[i.jsx("span",{className:ee.statValue,children:s.length}),i.jsx("span",{className:ee.statLabel,children:"Active Projects"})]})]}),h.stalledProjects.length>0&&i.jsxs("div",{className:ee.suggestionPanel,children:[i.jsxs("div",{className:ee.suggestionTitle,children:[i.jsx(z1,{size:18}),i.jsx("span",{children:"Attention Needed"})]}),i.jsx("ul",{className:ee.suggestionList,children:h.stalledProjects.map(u=>i.jsxs("li",{className:ee.suggestionItem,children:[i.jsx(Se,{size:14}),i.jsx("span",{children:u.name}),i.jsxs("span",{style:{opacity:.7},children:["- ",bM(c.filter(v=>v.projectId===u.id)).replace("_"," ")]})]},u.id))})]})]});const k=p[l];return k.question?i.jsxs("div",{className:ee.questionSection,children:[i.jsx("label",{className:ee.questionLabel,children:k.question.text}),i.jsx("textarea",{className:ee.textarea,value:x(),onChange:u=>f(u.target.value),placeholder:"Type your reflection here...",autoFocus:!0})]}):i.jsxs("div",{className:ee.summaryStep,children:[i.jsx("h3",{className:ee.questionLabel,children:"Review Complete!"}),i.jsx("p",{style:{color:"var(--color-text-secondary)"},children:`You've reflected on your week and planned for the next. Click "Finish" to save your review.`})]})};return i.jsx("div",{className:ee.overlay,children:i.jsxs("div",{className:ee.container,children:[i.jsxs("div",{className:ee.header,children:[i.jsxs("div",{className:ee.titleContainer,children:[i.jsx(Ot,{className:"text-accent",size:24}),i.jsxs("div",{children:[i.jsxs("h2",{className:ee.title,children:[e.charAt(0).toUpperCase()+e.slice(1)," Review"]}),i.jsx("span",{className:ee.subtitle,children:p[l].title})]})]}),i.jsx(n1,{icon:i.jsx(Ae,{size:20}),onClick:t,tooltip:"Close"})]}),i.jsx("div",{className:ee.content,children:L()}),i.jsxs("div",{className:ee.footer,children:[i.jsx(W,{disabled:l===0,onClick:g,variant:"secondary",children:"Back"}),i.jsxs("div",{className:ee.progressContainer,children:[i.jsx("div",{className:ee.progressBar,children:i.jsx("div",{className:ee.progressFill,style:{width:`${(l+1)/p.length*100}%`}})}),i.jsxs("span",{className:ee.stepCounter,children:[l+1," / ",p.length]})]}),i.jsx(W,{onClick:m,variant:"primary",children:l===p.length-1?"Finish":"Next"})]})]})})},hB="_dashboard_ikyxs_1",uB="_welcome_ikyxs_15",yB="_welcomeTitle_ikyxs_29",pB="_accent_ikyxs_43",kB="_welcomeSubtitle_ikyxs_57",mB="_dateDisplay_ikyxs_69",fB="_statsGrid_ikyxs_95",vB="_statCardWrapper_ikyxs_109",gB="_activeStat_ikyxs_127",xB="_statCard_ikyxs_109",MB="_statIcon_ikyxs_153",wB="_statInfo_ikyxs_173",LB="_statValue_ikyxs_183",SB="_statLabel_ikyxs_197",jB="_filteredListSection_ikyxs_211",CB="_fadeIn_ikyxs_1",_B="_filterTitle_ikyxs_221",IB="_taskList_ikyxs_235",bB="_emptyMessage_ikyxs_247",zB="_twoColumn_ikyxs_267",AB="_sectionCard_ikyxs_279",qB="_sectionHeader_ikyxs_291",TB="_sectionCount_ikyxs_321",NB="_urgentIcon_ikyxs_339",DB="_pulse_ikyxs_1",PB="_progressCard_ikyxs_351",HB="_progressContent_ikyxs_359",BB="_progressRing_ikyxs_371",RB="_progressSvg_ikyxs_383",VB="_progressCircle_ikyxs_395",FB="_progressValue_ikyxs_403",EB="_progressNumber_ikyxs_425",OB="_progressPercent_ikyxs_437",$B="_progressInfo_ikyxs_449",UB="_projectBreakdown_ikyxs_477",ZB="_projectProgress_ikyxs_489",WB="_projectProgressItem_ikyxs_503",GB="_projectProgressRow_ikyxs_517",KB="_gamificationBar_ikyxs_531",XB="_streakBadge_ikyxs_541",QB="_mentalLoadBadge_ikyxs_543",JB="_timeRemaining_ikyxs_567",YB="_projectDot_ikyxs_581",eR="_projectName_ikyxs_593",tR="_blocked_ikyxs_613",nR="_at_risk_ikyxs_621",aR="_blockedText_ikyxs_629",rR="_at_riskText_ikyxs_639",iR="_dashboardNextAction_ikyxs_649",oR="_nextActionText_ikyxs_683",cR="_projectCount_ikyxs_699",P={dashboard:hB,welcome:uB,welcomeTitle:yB,accent:pB,welcomeSubtitle:kB,dateDisplay:mB,statsGrid:fB,statCardWrapper:vB,activeStat:gB,statCard:xB,statIcon:MB,statInfo:wB,statValue:LB,statLabel:SB,filteredListSection:jB,fadeIn:CB,filterTitle:_B,taskList:IB,emptyMessage:bB,twoColumn:zB,sectionCard:AB,sectionHeader:qB,sectionCount:TB,urgentIcon:NB,pulse:DB,progressCard:PB,progressContent:HB,progressRing:BB,progressSvg:RB,progressCircle:VB,progressValue:FB,progressNumber:EB,progressPercent:OB,progressInfo:$B,projectBreakdown:UB,projectProgress:ZB,projectProgressItem:WB,projectProgressRow:GB,gamificationBar:KB,streakBadge:XB,mentalLoadBadge:QB,timeRemaining:JB,projectDot:YB,projectName:eR,blocked:tR,at_risk:nR,blockedText:aR,at_riskText:rR,dashboardNextAction:iR,nextActionText:oR,projectCount:cR},sR=({onTaskClick:e})=>{const{projects:t}=Xt(),{tasks:n}=Ze(),{reviews:a,startReview:o}=vS(),[c,s]=Tt.useState(!1),[l,d]=Tt.useState("all"),h=S.useMemo(()=>{var Te,E,Q;const w=[...a].sort((ae,q)=>new Date(q.createdAt).getTime()-new Date(ae.createdAt).getTime()),J=(Te=w.find(ae=>ae.type==="weekly"))==null?void 0:Te.createdAt,T=(E=w.find(ae=>ae.type==="monthly"))==null?void 0:E.createdAt,O=(Q=w.find(ae=>ae.type==="quarterly"))==null?void 0:Q.createdAt;return GA(J,T,O)},[a]),y=n.length,p=n.filter(w=>w.status==="done").length,m=n.filter(w=>w.status==="in_progress").length,g=n.filter(w=>w.dueDate&&IM(w.dueDate)&&w.status!=="done"&&!w.isArchived).length,f=UA(n),x=ZA(n),L=WA(),[k,u]=Tt.useState("weekly"),v=w=>{u(w),o(w),s(!0)},M=n.filter(w=>(w.dueDate&&hI(w.dueDate)||w.status==="in_progress")&&!w.isArchived),j=n.filter(w=>w.priority==="urgent"&&w.status!=="done"),_=[...n].sort((w,J)=>new Date(J.updatedAt).getTime()-new Date(w.updatedAt).getTime()).slice(0,5),b=[{label:"Total Tasks",value:y,icon:i.jsx(Se,{size:20}),color:"var(--color-accent)",filterKey:"all"},{label:"Completed",value:p,icon:i.jsx(st,{size:20}),color:"var(--color-success)",filterKey:"completed"},{label:"In Progress",value:m,icon:i.jsx(St,{size:20}),color:"var(--color-info)",filterKey:"in_progress"},{label:"Overdue",value:g,icon:i.jsx(dr,{size:20}),color:"var(--color-error)",filterKey:"overdue"}],A=y>0?Math.round(p/y*100):0,Z=n.filter(w=>l==="all"?!0:l==="completed"?w.status==="done":l==="in_progress"?w.status==="in_progress":l==="overdue"?w.dueDate&&IM(w.dueDate)&&w.status!=="done":!0);return i.jsxs("div",{className:P.dashboard,children:[h&&i.jsxs("div",{className:P.reviewBanner,children:[i.jsxs("div",{className:P.reviewBannerContent,children:[i.jsx(Ot,{size:20}),i.jsxs("span",{children:[h.charAt(0).toUpperCase()+h.slice(1)," Review is due!"]})]}),i.jsx(W,{size:"sm",variant:"secondary",onClick:()=>v(h),className:P.reviewButton,children:"Start Review"})]}),i.jsxs("div",{className:P.welcome,children:[i.jsxs("div",{className:P.welcomeContent,children:[i.jsxs("h1",{className:P.welcomeTitle,children:["Good ",lR(),", ",i.jsx("span",{className:P.accent,children:"Commander"})]}),i.jsxs("p",{className:P.welcomeSubtitle,children:["You have ",M.length," tasks to focus on today"]})]}),i.jsxs("div",{className:P.dateDisplay,children:[i.jsx(Lt,{size:18}),i.jsx("span",{children:dR()})]})]}),i.jsx(CH,{onTaskClick:e}),i.jsx(HH,{}),i.jsx("div",{className:P.statsGrid,children:b.map(w=>i.jsx("div",{className:`${P.statCardWrapper} ${l===w.filterKey?P.activeStat:""}`,onClick:()=>d(w.filterKey),children:i.jsxs(M1,{variant:"elevated",padding:"md",className:P.statCard,children:[i.jsx("div",{className:P.statIcon,style:{color:w.color},children:w.icon}),i.jsxs("div",{className:P.statInfo,children:[i.jsx("span",{className:P.statValue,children:w.value}),i.jsx("span",{className:P.statLabel,children:w.label})]})]})},w.label))}),i.jsxs("div",{className:P.gamificationBar,style:{marginBottom:24,display:"flex",gap:12},children:[i.jsxs("div",{className:P.streakBadge,title:"Productivity Streak",children:[i.jsx("span",{style:{fontSize:16},children:"🔥"}),i.jsxs("span",{style:{fontWeight:"bold",marginLeft:4},children:[f," days"]})]}),i.jsxs("div",{className:P.mentalLoadBadge,title:`Current Load: ${x.percentage}%`,children:[i.jsx("span",{style:{fontSize:16},children:"🧠"}),i.jsx("span",{style:{fontWeight:"bold",marginLeft:4,fontSize:12},children:x.level})]}),i.jsxs("div",{className:P.timeRemaining,style:{flex:1},title:`${L.hoursLeft}h left in active day`,children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:2},children:[i.jsx("span",{style:{fontSize:10,color:"var(--color-text-secondary)"},children:"Day Progress"}),i.jsxs("span",{style:{fontSize:10,fontWeight:"bold"},children:[L.hoursLeft,"h left"]})]}),i.jsx("div",{style:{height:6,background:"var(--color-bg-tertiary)",borderRadius:3,overflow:"hidden"},children:i.jsx("div",{style:{height:"100%",width:`${L.percentPassed}%`,background:L.percentPassed>90?"var(--color-error)":"var(--color-accent)",transition:"width 0.5s ease"}})})]})]}),l!=="all"&&i.jsxs("div",{className:P.filteredListSection,children:[i.jsxs("h3",{className:P.filterTitle,children:[l==="completed"&&"✅ Completed Tasks",l==="in_progress"&&"🚧 In Progress",l==="overdue"&&"⚠️ Overdue Tasks"]}),i.jsx("div",{className:P.taskList,children:Z.length===0?i.jsx("p",{className:P.emptyMessage,children:"No tasks found for this filter."}):Z.map(w=>i.jsx(nM,{task:w,onClick:()=>e(w.id)},w.id))})]}),i.jsx(M1,{variant:"elevated",padding:"lg",className:P.progressCard,children:i.jsxs("div",{className:P.progressContent,children:[i.jsxs("div",{className:P.progressRing,children:[i.jsxs("svg",{viewBox:"0 0 100 100",className:P.progressSvg,children:[i.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"var(--color-bg-tertiary)",strokeWidth:"8"}),i.jsx("circle",{cx:"50",cy:"50",r:"40",fill:"none",stroke:"var(--color-accent)",strokeWidth:"8",strokeLinecap:"round",strokeDasharray:`${A*2.51} 251`,transform:"rotate(-90 50 50)",className:P.progressCircle})]}),i.jsxs("div",{className:P.progressValue,children:[i.jsx("span",{className:P.progressNumber,children:A}),i.jsx("span",{className:P.progressPercent,children:"%"})]})]}),i.jsxs("div",{className:P.progressInfo,children:[i.jsx("h3",{children:"Overall Progress"}),i.jsxs("p",{children:[p," of ",y," tasks completed"]}),i.jsx("div",{className:P.projectBreakdown,children:t.filter(w=>!w.isArchived).slice(0,3).map(w=>{const J=n.filter(ae=>ae.projectId===w.id),T=J.filter(ae=>ae.status==="done").length,O=bM(J),Te=w.nextActionTaskId,E=uI(J),Q=Te?J.find(ae=>ae.id===Te):E;return i.jsxs("div",{className:P.projectProgressItem,children:[i.jsxs("div",{className:P.projectProgressRow,children:[i.jsx("span",{className:`${P.projectDot} ${P[O]}`,style:{backgroundColor:w.color}}),i.jsx("span",{className:`${P.projectName} ${P[O+"Text"]}`,children:w.name}),i.jsxs("span",{className:P.projectCount,children:[T,"/",J.length]})]}),Q&&i.jsxs("div",{className:P.dashboardNextAction,onClick:()=>e(Q.id),children:[i.jsx(jt,{size:10,fill:"currentColor"}),i.jsxs("span",{className:P.nextActionText,children:["Next: ",Q.title]})]})]},w.id)})})]})]})}),i.jsxs("div",{className:P.twoColumn,children:[i.jsxs(M1,{variant:"default",padding:"md",className:P.sectionCard,children:[i.jsxs("div",{className:P.sectionHeader,children:[i.jsx(jt,{size:18,className:P.urgentIcon}),i.jsx("h2",{children:"Urgent Tasks"}),i.jsx("span",{className:P.sectionCount,children:j.length})]}),i.jsx("div",{className:P.taskList,children:j.length===0?i.jsx("p",{className:P.emptyMessage,children:"No urgent tasks 🎉"}):j.slice(0,3).map(w=>i.jsx(nM,{task:w,onClick:()=>e(w.id)},w.id))})]}),i.jsxs(M1,{variant:"default",padding:"md",className:P.sectionCard,children:[i.jsxs("div",{className:P.sectionHeader,children:[i.jsx(St,{size:18}),i.jsx("h2",{children:"Recent Tasks"})]}),i.jsx("div",{className:P.taskList,children:_.map(w=>i.jsx(nM,{task:w,onClick:()=>e(w.id)},w.id))})]})]}),c&&i.jsx(mI,{type:k,onClose:()=>s(!1)})]})};function lR(){const e=new Date().getHours();return e<12?"morning":e<17?"afternoon":"evening"}function dR(){return new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}const hR={goals:[],selectedGoalId:null,isLoading:!1},Fj=[{id:"goal-1",parentId:null,title:"Run a Marathon",description:"Complete a full marathon by end of year",lifeArea:"health",deadline:new Date(new Date().getFullYear(),11,31).toISOString(),timeline:"year",status:"in_progress",progress:45,linkedProjectIds:[],linkedTaskIds:[],vision:"Build extreme physical endurance and mental toughness",icon:"Run",createdAt:R(),updatedAt:R(),completedAt:null},{id:"goal-2",parentId:null,title:"Save $10,000",description:"Build emergency fund and investment capital",lifeArea:"money",deadline:new Date(new Date().getFullYear(),11,31).toISOString(),timeline:"year",status:"not_started",progress:10,linkedProjectIds:[],linkedTaskIds:[],vision:"Financial security and freedom to take risks",icon:"DollarSign",createdAt:R(),updatedAt:R(),completedAt:null},{id:"goal-3",parentId:null,title:"Master a New Language",description:"Reach B2 level in Spanish",lifeArea:"growth",deadline:new Date(new Date().getFullYear()+1,5,30).toISOString(),timeline:"q2",status:"in_progress",progress:30,linkedProjectIds:[],linkedTaskIds:[],vision:"Connect with more people and expand cultural understanding",icon:"Languages",createdAt:R(),updatedAt:R(),completedAt:null}],Sr=h1(e=>({...hR,goals:Kt(B.GOALS,[]),loadGoals:()=>{const t=Kt(B.GOALS,[]);t.length===0?(e({goals:Fj}),U(B.GOALS,Fj)):e({goals:t})},addGoal:t=>{const n=R(),a={id:P1(),...t,linkedProjectIds:[],linkedTaskIds:[],createdAt:n,updatedAt:n,completedAt:null};return e(o=>{const c=[...o.goals,a];return U(B.GOALS,c),{goals:c}}),a},updateGoal:(t,n)=>{e(a=>{const o=a.goals.map(c=>c.id===t?{...c,...n,updatedAt:R()}:c);return U(B.GOALS,o),{goals:o}})},deleteGoal:t=>{e(n=>{const a=n.goals.filter(o=>o.id!==t);return U(B.GOALS,a),{goals:a,selectedGoalId:n.selectedGoalId===t?null:n.selectedGoalId}})},selectGoal:t=>{e({selectedGoalId:t})}})),uR="_container_1hqb1_9",yR="_header_1hqb1_25",pR="_titleSection_1hqb1_39",kR="_title_1hqb1_39",mR="_subtitle_1hqb1_65",fR="_emptyState_1hqb1_77",qa={container:uR,header:yR,titleSection:pR,title:kR,subtitle:mR,emptyState:fR},vR=({onTaskClick:e,onCreateTask:t})=>{const{tasks:n}=Ze(),a=n.filter(c=>c.taskType==="habit"),o=()=>{t()};return i.jsxs("div",{className:qa.container,children:[i.jsxs("div",{className:qa.header,children:[i.jsxs("div",{className:qa.titleSection,children:[i.jsx("h1",{className:qa.title,children:"Habits & Routines"}),i.jsx("p",{className:qa.subtitle,children:"Build consistency with recurring tasks"})]}),i.jsx(W,{variant:"primary",leftIcon:i.jsx(lt,{size:20}),onClick:o,children:"New Habit"})]}),a.length===0?i.jsxs("div",{className:qa.emptyState,children:[i.jsx(Ii,{size:48}),i.jsx("p",{children:"No habits defined yet."}),i.jsx("p",{children:'Create a task and set its type to "Habit" to see it here.'})]}):i.jsx(kI,{tasks:a,onTaskClick:e})]})},gR="_card_taqb0_9",xR="_header_taqb0_51",MR="_iconWrapper_taqb0_65",wR="_titleSection_taqb0_89",LR="_title_taqb0_89",SR="_area_taqb0_113",jR="_vision_taqb0_137",CR="_progressSection_taqb0_161",_R="_progressLabel_taqb0_173",IR="_progressBar_taqb0_189",bR="_progressFill_taqb0_203",zR="_meta_taqb0_219",AR="_date_taqb0_237",qR="_overdue_taqb0_253",TR="_status_taqb0_261",NR="_not_started_taqb0_277",DR="_in_progress_taqb0_287",PR="_achieved_taqb0_297",HR="_paused_taqb0_307",BR="_dropped_taqb0_317",Fe={card:gR,header:xR,iconWrapper:MR,titleSection:wR,title:LR,area:SR,vision:jR,progressSection:CR,progressLabel:_R,progressBar:IR,progressFill:bR,meta:zR,date:AR,overdue:qR,status:TR,not_started:NR,in_progress:DR,achieved:PR,paused:HR,dropped:BR},RR=({goal:e,onClick:t})=>{const n={Run:ya,DollarSign:nr,Languages:mi,Target:Se,Zap:jt,Heart:i1,Brain:A1,Users:hr,Package:ir,Trophy:va},a=()=>{if(e.icon&&n[e.icon]){const l=n[e.icon];return i.jsx(l,{size:24})}switch(e.lifeArea){case"health":return i.jsx(ya,{size:24});case"money":return i.jsx(nr,{size:24});case"growth":return i.jsx(A1,{size:24});case"relationships":return i.jsx(hr,{size:24});case"order":return i.jsx(ir,{size:24});default:return i.jsx(Se,{size:24})}},o=l=>l.replace("_"," "),c=e.deadline?new Date(e.deadline):null,s=c&&c<new Date&&e.status!=="achieved";return i.jsxs("div",{className:Fe.card,onClick:t,children:[i.jsxs("div",{className:Fe.header,children:[i.jsx("div",{className:Fe.iconWrapper,children:a()}),i.jsxs("div",{className:Fe.titleSection,children:[i.jsx("h3",{className:Fe.title,children:e.title}),i.jsx("div",{className:Fe.area,children:Ji[e.lifeArea]})]})]}),e.vision&&i.jsxs("p",{className:Fe.vision,children:['"',e.vision,'"']}),i.jsxs("div",{className:Fe.progressSection,children:[i.jsxs("div",{className:Fe.progressLabel,children:[i.jsx("span",{children:"Progress"}),i.jsxs("span",{children:[e.progress,"%"]})]}),i.jsx("div",{className:Fe.progressBar,children:i.jsx("div",{className:Fe.progressFill,style:{width:`${e.progress}%`}})})]}),i.jsxs("div",{className:Fe.meta,children:[i.jsx("div",{className:`${Fe.status} ${Fe[e.status]}`,children:o(e.status)}),e.deadline&&i.jsxs("div",{className:`${Fe.date} ${s?Fe.overdue:""}`,children:[i.jsx(Lt,{size:14}),Ni(e.deadline)]})]})]})},VR="_container_1s1jr_1",FR="_treeItem_1s1jr_15",ER="_header_1s1jr_23",OR="_iconWrapper_1s1jr_49",$R="_content_1s1jr_69",UR="_title_1s1jr_83",ZR="_meta_1s1jr_93",WR="_statusBadge_1s1jr_107",GR="_status_not_started_1s1jr_123",KR="_status_in_progress_1s1jr_133",XR="_status_achieved_1s1jr_143",QR="_status_paused_1s1jr_153",JR="_childrenContainer_1s1jr_163",YR="_projectItem_1s1jr_177",eV="_expandBtn_1s1jr_203",vt={container:VR,treeItem:FR,header:ER,iconWrapper:OR,content:$R,title:UR,meta:ZR,statusBadge:WR,status_not_started:GR,status_in_progress:KR,status_achieved:XR,status_paused:QR,childrenContainer:JR,projectItem:YR,expandBtn:eV},fI=({goal:e,allGoals:t,allProjects:n,level:a,onSelectGoal:o,onSelectProject:c})=>{const[s,l]=S.useState(!0),d=t.filter(g=>g.parentId===e.id),h=n.filter(g=>g.goalId===e.id),y=d.length>0||h.length>0,p=Nj[e.icon]||Se,m=g=>{g.stopPropagation(),l(!s)};return i.jsxs("div",{className:vt.treeItem,children:[i.jsxs("div",{className:vt.header,onClick:()=>o(e.id),style:{marginLeft:`${a*12}px`},children:[i.jsxs("div",{className:vt.iconWrapper,children:[y?i.jsx("button",{className:vt.expandBtn,onClick:m,children:s?i.jsx(q1,{size:14}):i.jsx(Wt,{size:14})}):i.jsx("span",{style:{width:14}}),i.jsx(p,{size:18})]}),i.jsxs("div",{className:vt.content,children:[i.jsx("span",{className:vt.title,children:e.title}),i.jsxs("div",{className:vt.meta,children:[i.jsx("span",{className:`${vt.statusBadge} ${vt[`status_${e.status}`]}`,children:e.status.replace("_"," ")}),e.deadline&&i.jsxs("span",{children:["📅 ",new Date(e.deadline).toLocaleDateString()]}),i.jsxs("span",{children:[e.progress,"%"]})]})]})]}),s&&y&&i.jsxs("div",{className:vt.childrenContainer,children:[h.map(g=>{const f=Nj[g.icon]||ma;return i.jsxs("div",{className:vt.projectItem,onClick:x=>{x.stopPropagation(),c(g.id)},children:[i.jsx(f,{size:14,style:{marginRight:8,color:g.color}}),i.jsx("span",{children:g.name})]},g.id)}),d.map(g=>i.jsx(fI,{goal:g,allGoals:t,allProjects:n,level:a+1,onSelectGoal:o,onSelectProject:c},g.id))]})]})},tV=()=>{const{goals:e,selectGoal:t}=Sr(),{projects:n,selectProject:a}=Xt(),o=e.filter(c=>!c.parentId);return i.jsxs("div",{className:vt.container,children:[i.jsx("h3",{style:{marginBottom:"1rem",paddingLeft:"0.5rem"},children:"Goal Hierarchy"}),o.length===0?i.jsx("div",{style:{padding:"1rem",color:"#888"},children:"No goals defined yet. Create your first goal!"}):o.map(c=>i.jsx(fI,{goal:c,allGoals:e,allProjects:n,level:0,onSelectGoal:t,onSelectProject:a},c.id))]})},nV="_container_1w5yx_9",aV="_header_1w5yx_21",rV="_titleInput_1w5yx_37",iV="_closeBtn_1w5yx_73",oV="_content_1w5yx_113",cV="_mainColumn_1w5yx_143",sV="_section_1w5yx_155",lV="_label_1w5yx_167",dV="_textarea_1w5yx_185",hV="_input_1w5yx_209",uV="_metaColumn_1w5yx_231",yV="_metaItem_1w5yx_251",pV="_select_1w5yx_263",kV="_sliderContainer_1w5yx_285",mV="_slider_1w5yx_285",fV="_progressValue_1w5yx_307",vV="_footer_1w5yx_325",gV="_footerActions_1w5yx_341",xV="_deleteConfirm_1w5yx_351",G={container:nV,header:aV,titleInput:rV,closeBtn:iV,content:oV,mainColumn:cV,section:sV,label:lV,textarea:dV,input:hV,metaColumn:uV,metaItem:yV,select:pV,sliderContainer:kV,slider:mV,progressValue:fV,footer:vV,footerActions:gV,deleteConfirm:xV},MV=({goal:e,isOpen:t,onClose:n})=>{const{goals:a,addGoal:o,updateGoal:c,deleteGoal:s}=Sr(),[l,d]=S.useState(""),[h,y]=S.useState(""),[p,m]=S.useState(""),[g,f]=S.useState("growth"),[x,L]=S.useState("not_started"),[k,u]=S.useState(0),[v,M]=S.useState(""),[j,_]=S.useState(""),[b,A]=S.useState(null),[Z,w]=S.useState("year"),[J,T]=S.useState(!1);S.useEffect(()=>{e?(d(e.title),y(e.vision||""),m(e.description||""),f(e.lifeArea),L(e.status),u(e.progress),M(e.deadline?e.deadline.split("T")[0]:""),_(e.icon||""),A(e.parentId),w(e.timeline),T(!1)):(d(""),y(""),m(""),f("growth"),L("not_started"),u(0),M(""),_(""),A(null),w("year"),T(!1))},[e,t]);const O=()=>{if(!l.trim())return;const E={title:l.trim(),vision:h.trim(),description:p.trim(),lifeArea:g,status:x,deadline:v?new Date(v).toISOString():null,parentId:b,timeline:Z,icon:j.trim(),progress:k};e?c(e.id,E):o(E),n()},Te=()=>{e&&(s(e.id),n())};return i.jsx(ro,{isOpen:t,onClose:n,title:e?"Edit Goal":"New Goal",size:"lg",showCloseButton:!1,children:i.jsxs("div",{className:G.container,children:[i.jsxs("div",{className:G.header,children:[i.jsx("input",{className:G.titleInput,value:l,onChange:E=>d(E.target.value),placeholder:"Goal Title",autoFocus:!0}),i.jsx("button",{className:G.closeBtn,onClick:n,children:i.jsx(Ae,{size:20})})]}),i.jsxs("div",{className:G.content,children:[i.jsxs("div",{className:G.mainColumn,children:[i.jsxs("div",{className:G.section,children:[i.jsxs("label",{className:G.label,children:[i.jsx(Se,{size:16})," Vision (The Why)"]}),i.jsx("textarea",{className:G.textarea,value:h,onChange:E=>y(E.target.value),placeholder:"Why is this goal important? What is the desired outcome?",rows:2})]}),i.jsxs("div",{className:G.section,children:[i.jsx("label",{className:G.label,children:"Description"}),i.jsx("textarea",{className:G.textarea,value:p,onChange:E=>m(E.target.value),placeholder:"Details about execution...",rows:4})]})]}),i.jsxs("div",{className:G.metaColumn,children:[i.jsxs("div",{className:G.metaItem,children:[i.jsx("label",{className:G.label,children:"Parent Goal"}),i.jsxs("select",{className:G.select,value:b||"",onChange:E=>A(E.target.value||null),children:[i.jsx("option",{value:"",children:"None (Top Level)"}),a.filter(E=>E.id!==(e==null?void 0:e.id)).map(E=>i.jsx("option",{value:E.id,children:E.title},E.id))]})]}),i.jsxs("div",{className:G.metaItem,children:[i.jsx("label",{className:G.label,children:"Timeline"}),i.jsxs("select",{className:G.select,value:Z,onChange:E=>w(E.target.value),children:[i.jsx("option",{value:"q1",children:"Q1"}),i.jsx("option",{value:"q2",children:"Q2"}),i.jsx("option",{value:"q3",children:"Q3"}),i.jsx("option",{value:"q4",children:"Q4"}),i.jsx("option",{value:"year",children:"Next Year"}),i.jsx("option",{value:"5_years",children:"5 Years"}),i.jsx("option",{value:"lifetime",children:"Lifetime"})]})]}),i.jsxs("div",{className:G.metaItem,children:[i.jsx("label",{className:G.label,children:"Status"}),i.jsxs("select",{className:G.select,value:x,onChange:E=>L(E.target.value),children:[i.jsx("option",{value:"not_started",children:"Not Started"}),i.jsx("option",{value:"in_progress",children:"In Progress"}),i.jsx("option",{value:"paused",children:"Paused"}),i.jsx("option",{value:"achieved",children:"Achieved"}),i.jsx("option",{value:"dropped",children:"Dropped"})]})]}),i.jsxs("div",{className:G.metaItem,children:[i.jsxs("label",{className:G.label,children:[i.jsx(i1,{size:16})," Life Area"]}),i.jsx("select",{className:G.select,value:g,onChange:E=>f(E.target.value),children:Object.entries(Ji).map(([E,Q])=>i.jsx("option",{value:E,children:Q},E))})]}),e&&i.jsxs("div",{className:G.metaItem,children:[i.jsxs("label",{className:G.label,children:[i.jsx(ya,{size:16})," Progress"]}),i.jsxs("div",{className:G.sliderContainer,children:[i.jsx("input",{type:"range",min:"0",max:"100",value:k,onChange:E=>u(Number(E.target.value)),className:G.slider}),i.jsxs("span",{className:G.progressValue,children:[k,"%"]})]})]}),i.jsxs("div",{className:G.metaItem,children:[i.jsxs("label",{className:G.label,children:[i.jsx(Lt,{size:16})," Deadline"]}),i.jsx("input",{type:"date",className:G.input,value:v,onChange:E=>M(E.target.value)})]}),i.jsxs("div",{className:G.metaItem,children:[i.jsx("label",{className:G.label,children:"Icon Name"}),i.jsx("input",{type:"text",className:G.input,value:j,onChange:E=>_(E.target.value),placeholder:"e.g. DollarSign"})]})]})]}),i.jsxs("div",{className:G.footer,children:[e?J?i.jsxs("div",{className:G.deleteConfirm,children:[i.jsx("span",{children:"Delete this goal?"}),i.jsx(W,{variant:"danger",size:"sm",onClick:Te,children:"Yes, Delete"}),i.jsx(W,{variant:"ghost",size:"sm",onClick:()=>T(!1),children:"Cancel"})]}):i.jsx(W,{variant:"ghost",leftIcon:i.jsx(D1,{size:16}),onClick:()=>T(!0),children:"Delete"}):i.jsx("div",{}),i.jsxs("div",{className:G.footerActions,children:[i.jsx(W,{variant:"ghost",onClick:n,children:"Cancel"}),i.jsx(W,{variant:"primary",onClick:O,leftIcon:i.jsx(Gt,{size:16}),children:"Save Goal"})]})]})]})})},wV="_container_4a7n3_9",LV="_header_4a7n3_25",SV="_titleSection_4a7n3_43",jV="_title_4a7n3_43",CV="_subtitle_4a7n3_69",_V="_controls_4a7n3_81",IV="_viewToggle_4a7n3_93",bV="_toggleBtn_4a7n3_109",zV="_active_4a7n3_147",AV="_grid_4a7n3_159",qV="_emptyState_4a7n3_171",at={container:wV,header:LV,titleSection:SV,title:jV,subtitle:CV,controls:_V,viewToggle:IV,toggleBtn:bV,active:zV,grid:AV,emptyState:qV},TV=()=>{const{goals:e,loadGoals:t,isLoading:n}=Sr(),[a,o]=S.useState(!1),[c,s]=S.useState(null),[l,d]=S.useState("grid");S.useEffect(()=>{t()},[t]);const h=m=>{const g=e.find(f=>f.id===m);g&&(s(g),o(!0))},y=()=>{s(null),o(!0)},p=()=>{o(!1),s(null)};return i.jsxs("div",{className:at.container,children:[i.jsxs("div",{className:at.header,children:[i.jsxs("div",{className:at.titleSection,children:[i.jsx("h1",{className:at.title,children:"Your Goals"}),i.jsx("p",{className:at.subtitle,children:"Define, track, and achieve your dreams"})]}),i.jsxs("div",{className:at.controls,children:[i.jsxs("div",{className:at.viewToggle,children:[i.jsxs("button",{className:`${at.toggleBtn} ${l==="grid"?at.active:""}`,onClick:()=>d("grid"),title:"Grid View",children:[i.jsx(vi,{size:18}),i.jsx("span",{children:"Cards"})]}),i.jsxs("button",{className:`${at.toggleBtn} ${l==="tree"?at.active:""}`,onClick:()=>d("tree"),title:"Hierarchy View",children:[i.jsx(Mi,{size:18}),i.jsx("span",{children:"Tree"})]})]}),i.jsx(W,{variant:"primary",leftIcon:i.jsx(lt,{size:20}),onClick:y,children:"New Goal"})]})]}),n?i.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"2rem"},children:"Loading goals..."}):i.jsx(i.Fragment,{children:l==="grid"?e.length>0?i.jsx("div",{className:at.grid,children:e.map(m=>i.jsx(RR,{goal:m,onClick:()=>h(m.id)},m.id))}):i.jsxs("div",{className:at.emptyState,children:[i.jsx("div",{style:{fontSize:"40px",marginBottom:"1rem"},children:"🎯"}),i.jsx("h3",{children:"No goals yet"}),i.jsx("p",{children:"Start by creating your first big goal."})]}):i.jsx(tV,{})}),i.jsx(MV,{isOpen:a,onClose:p,goal:c})]})},NV="_container_1p0g9_1",DV="_header_1p0g9_17",PV="_title_1p0g9_31",HV="_subtitle_1p0g9_45",BV="_content_1p0g9_55",Dr={container:NV,header:DV,title:PV,subtitle:HV,content:BV},RV=()=>{const[e,t]=S.useState(!1),{addTask:n}=Ze(),a=o=>{if(o.type!=="brain_dump")return;const c=o.content.text||"",l={title:c.split(`
`)[0].slice(0,50)+(c.length>50?"...":""),description:c,status:"todo",priority:"medium",projectId:"default",subtasks:[],tags:["from-journal"],isArchived:!1,timeEstimate:30,energyRequired:"medium",recurring:"none",reminder:null,impact:"medium",lifeArea:null,mentalLevel:"analytical",taskType:"task",reward:null,dependencies:[],isTimerRunning:!1,timeSpent:0,timeEntries:[],dueDate:null,dueTime:null};n(l),alert("Task created from journal entry!")};return i.jsxs("div",{className:Dr.container,children:[i.jsxs("div",{className:Dr.header,children:[i.jsxs("div",{children:[i.jsx("h1",{className:Dr.title,children:"Strategic Journal"}),i.jsx("p",{className:Dr.subtitle,children:"Clarity, Decisions, and Focus."})]}),i.jsx(W,{variant:"primary",leftIcon:i.jsx(lt,{size:20}),onClick:()=>t(!0),children:"New Entry"})]}),i.jsx("div",{className:Dr.content,children:i.jsx(yI,{onConvertToTask:a})}),e&&i.jsx(pI,{isOpen:!0,onClose:()=>t(!1)})]})},Ej="analytics";function wL(e=new Date){return e.toISOString().split("T")[0]}function VV(){const e=[],t=new Date;for(let n=6;n>=0;n--){const a=new Date(t);a.setDate(t.getDate()-n),e.push(wL(a))}return e}const oo=h1((e,t)=>({dailyStats:[],completionHistory:[],loadAnalytics:()=>{const n=Kt(Ej,{dailyStats:[],completionHistory:[]});e(n)},recordCompletion:(n,a,o,c,s)=>{const l=new Date().toISOString(),d=wL(),h={taskId:n,projectId:a,completedAt:l,priority:o,energy:c,lifeArea:s};e(y=>{const p=[...y.completionHistory,h],m=y.dailyStats.findIndex(x=>x.date===d);let g;m>=0?g=y.dailyStats.map((x,L)=>L===m?{...x,completed:x.completed+1}:x):g=[...y.dailyStats,{date:d,completed:1,created:0,timeSpent:0}];const f={dailyStats:g,completionHistory:p};return U(Ej,f),f})},getStatsForRange:(n,a)=>{const{dailyStats:o}=t();return o.filter(c=>c.date>=n&&c.date<=a)},getCompletedCountByDate:n=>{const{dailyStats:a}=t(),o=a.find(c=>c.date===n);return(o==null?void 0:o.completed)||0},getTotalCompletedThisWeek:()=>{const{dailyStats:n}=t();return VV().reduce((o,c)=>{const s=n.find(l=>l.date===c);return o+((s==null?void 0:s.completed)||0)},0)},getProductivityStreak:()=>{const{dailyStats:n}=t(),a=[...n].sort((s,l)=>new Date(l.date).getTime()-new Date(s.date).getTime());let o=0;const c=new Date;for(let s=0;s<365;s++){const l=new Date(c);l.setDate(c.getDate()-s);const d=wL(l),h=a.find(y=>y.date===d);if(h&&h.completed>0)o++;else if(s>0)break}return o},getEnergyDistribution:()=>{const{completionHistory:n}=t(),a={high:0,medium:0,low:0};return n.forEach(o=>{o.energy&&(a[o.energy]=(a[o.energy]||0)+1)}),a},getLifeAreaDistribution:()=>{const{completionHistory:n}=t(),a={money:0,health:0,growth:0,relationships:0,order:0};return n.forEach(o=>{o.lifeArea&&(a[o.lifeArea]=(a[o.lifeArea]||0)+1)}),a}})),FV="_container_1rltp_9",EV="_header_1rltp_23",OV="_title_1rltp_37",$V="_total_1rltp_51",UV="_chart_1rltp_63",ZV="_barContainer_1rltp_79",WV="_barWrapper_1rltp_97",GV="_bar_1rltp_79",KV="_today_1rltp_133",XV="_value_1rltp_151",QV="_label_1rltp_173",JV="_todayLabel_1rltp_187",mt={container:FV,header:EV,title:OV,total:$V,chart:UV,barContainer:ZV,barWrapper:WV,bar:GV,today:KV,value:XV,label:QV,todayLabel:JV},YV=({label:e="Tasks Completed"})=>{const{dailyStats:t}=oo(),n=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],o=(()=>{const l=[],d=new Date,h=Math.max(...t.slice(-7).map(y=>y.completed),1);for(let y=6;y>=0;y--){const p=new Date(d);p.setDate(d.getDate()-y);const m=p.toISOString().split("T")[0],g=(p.getDay()+6)%7,f=t.find(x=>x.date===m);l.push({day:n[g],value:(f==null?void 0:f.completed)||0,date:m,isToday:y===0,max:h})}return l})(),c=o.reduce((l,d)=>l+d.value,0),s=Math.max(...o.map(l=>l.value),1);return i.jsxs("div",{className:mt.container,children:[i.jsxs("div",{className:mt.header,children:[i.jsx("h3",{className:mt.title,children:e}),i.jsxs("span",{className:mt.total,children:[c," this week"]})]}),i.jsx("div",{className:mt.chart,children:o.map((l,d)=>i.jsxs("div",{className:mt.barContainer,children:[i.jsx("div",{className:mt.barWrapper,children:i.jsx("div",{className:`${mt.bar} ${l.isToday?mt.today:""}`,style:{height:`${l.value/s*100}%`,minHeight:l.value>0?"8px":"2px"},children:l.value>0&&i.jsx("span",{className:mt.value,children:l.value})})}),i.jsx("span",{className:`${mt.label} ${l.isToday?mt.todayLabel:""}`,children:l.day})]},d))})]})},eF="_container_1grv6_9",tF="_header_1grv6_23",nF="_title_1grv6_37",aF="_stats_1grv6_51",rF="_separator_1grv6_67",iF="_heatmap_1grv6_75",oF="_dayLabels_1grv6_87",cF="_dayLabel_1grv6_87",sF="_grid_1grv6_115",lF="_monthLabels_1grv6_129",dF="_monthLabel_1grv6_129",hF="_weeks_1grv6_157",uF="_week_1grv6_157",yF="_cell_1grv6_179",pF="_level0_1grv6_203",kF="_level1_1grv6_211",mF="_level2_1grv6_219",fF="_level3_1grv6_227",vF="_level4_1grv6_235",gF="_legend_1grv6_245",xF="_legendLabel_1grv6_261",re={container:eF,header:tF,title:nF,stats:aF,separator:rF,heatmap:iF,dayLabels:oF,dayLabel:cF,grid:sF,monthLabels:lF,monthLabel:dF,weeks:hF,week:uF,cell:yF,level0:pF,level1:kF,level2:mF,level3:fF,level4:vF,legend:gF,legendLabel:xF},MF=({weeks:e=12})=>{const{dailyStats:t}=oo(),n=t.map(y=>({date:y.date,value:y.completed})),a=["","Mon","","Wed","","Fri",""],c=(()=>{const y=[],p=new Date,m=e*7,g=new Date(p);g.setDate(p.getDate()-m+(7-p.getDay()));let f=[],x="";for(let L=0;L<m;L++){const k=new Date(g);k.setDate(g.getDate()+L);const u=k.toISOString().split("T")[0],v=n.find(_=>_.date===u),M=k.toLocaleDateString("en-US",{month:"short"}),j={date:u,value:(v==null?void 0:v.value)||0};M!==x&&k.getDate()<=7&&(j.month=M,x=M),f.push(j),f.length===7&&(y.push(f),f=[])}return f.length>0&&y.push(f),y})(),s=Math.max(...n.map(y=>y.value),1),l=y=>{if(y===0)return 0;const p=y/s;return p<=.25?1:p<=.5?2:p<=.75?3:4},d=n.reduce((y,p)=>y+p.value,0),h=n.filter(y=>y.value>0).length;return i.jsxs("div",{className:re.container,children:[i.jsxs("div",{className:re.header,children:[i.jsx("h3",{className:re.title,children:"Activity Heatmap"}),i.jsxs("div",{className:re.stats,children:[i.jsxs("span",{children:[d," tasks"]}),i.jsx("span",{className:re.separator,children:"•"}),i.jsxs("span",{children:[h," active days"]})]})]}),i.jsxs("div",{className:re.heatmap,children:[i.jsx("div",{className:re.dayLabels,children:a.map((y,p)=>i.jsx("span",{className:re.dayLabel,children:y},p))}),i.jsxs("div",{className:re.grid,children:[i.jsx("div",{className:re.monthLabels,children:c.map((y,p)=>{const m=y.find(g=>g.month);return i.jsx("span",{className:re.monthLabel,children:(m==null?void 0:m.month)||""},p)})}),i.jsx("div",{className:re.weeks,children:c.map((y,p)=>i.jsx("div",{className:re.week,children:y.map((m,g)=>i.jsx("div",{className:`${re.cell} ${re[`level${l(m.value)}`]}`,title:`${m.date}: ${m.value} tasks`},g))},p))})]}),i.jsxs("div",{className:re.legend,children:[i.jsx("span",{className:re.legendLabel,children:"Less"}),i.jsx("div",{className:`${re.cell} ${re.level0}`}),i.jsx("div",{className:`${re.cell} ${re.level1}`}),i.jsx("div",{className:`${re.cell} ${re.level2}`}),i.jsx("div",{className:`${re.cell} ${re.level3}`}),i.jsx("div",{className:`${re.cell} ${re.level4}`}),i.jsx("span",{className:re.legendLabel,children:"More"})]})]})]})},wF="_container_1u0uc_1",LF="_title_1u0uc_21",SF="_chartContainer_1u0uc_35",jF="_centerText_1u0uc_51",CF="_totalValue_1u0uc_81",_F="_totalLabel_1u0uc_93",IF="_legend_1u0uc_103",bF="_legendItem_1u0uc_117",zF="_dot_1u0uc_131",AF="_emptyState_1u0uc_143",ft={container:wF,title:LF,chartContainer:SF,centerText:jF,totalValue:CF,totalLabel:_F,legend:IF,legendItem:bF,dot:zF,emptyState:AF},qF=()=>{const{getEnergyDistribution:e}=oo(),t=e(),n=Object.values(t).reduce((l,d)=>l+d,0);if(n===0)return i.jsxs("div",{className:ft.container,children:[i.jsx("h3",{className:ft.title,children:"Energy Distribution"}),i.jsx("div",{className:ft.emptyState,children:"No confirmed tasks yet"})]});const a={high:"#ef4444",medium:"#eab308",low:"#22c55e"};let o=0;const s=`conic-gradient(${Object.keys(t).map(l=>{const h=t[l]/n*360,p=`${a[l]} ${o}deg ${o+h}deg`;return o+=h,p}).join(", ")})`;return i.jsxs("div",{className:ft.container,children:[i.jsx("h3",{className:ft.title,children:"Energy Distribution"}),i.jsx("div",{className:ft.chartContainer,style:{background:s},children:i.jsxs("div",{className:ft.centerText,children:[i.jsx("span",{className:ft.totalValue,children:n}),i.jsx("span",{className:ft.totalLabel,children:"Tasks"})]})}),i.jsx("div",{className:ft.legend,children:Object.keys(t).map(l=>i.jsxs("div",{className:ft.legendItem,children:[i.jsx("div",{className:ft.dot,style:{background:a[l]}}),i.jsx("span",{children:fS[l].split(" ")[1]}),i.jsxs("span",{style:{color:"var(--color-text-muted)"},children:["(",Math.round(t[l]/n*100),"%)"]})]},l))})]})},TF="_container_1w3ng_1",NF="_title_1w3ng_19",DF="_chart_1w3ng_31",PF="_barRow_1w3ng_45",HF="_label_1w3ng_57",BF="_barContainer_1w3ng_71",RF="_bar_1w3ng_45",VF="_value_1w3ng_99",FF="_emptyState_1w3ng_111",bt={container:TF,title:NF,chart:DF,barRow:PF,label:HF,barContainer:BF,bar:RF,value:VF,emptyState:FF},EF=()=>{const{getLifeAreaDistribution:e}=oo(),t=e(),n=Object.values(t).reduce((c,s)=>c+s,0),a=Math.max(...Object.values(t));if(n===0)return i.jsxs("div",{className:bt.container,children:[i.jsx("h3",{className:bt.title,children:"Life Area Focus"}),i.jsx("div",{className:bt.emptyState,children:"No confirmed tasks yet"})]});const o={money:"#10b981",health:"#ef4444",growth:"#3b82f6",relationships:"#ec4899",order:"#6b7280"};return i.jsxs("div",{className:bt.container,children:[i.jsx("h3",{className:bt.title,children:"Life Area Focus"}),i.jsx("div",{className:bt.chart,children:Object.keys(Ji).map(c=>{const s=t[c]||0,l=a>0?s/a*100:0;return i.jsxs("div",{className:bt.barRow,children:[i.jsx("span",{className:bt.label,children:Ji[c]}),i.jsx("div",{className:bt.barContainer,children:i.jsx("div",{className:bt.bar,style:{width:`${l}%`,background:o[c]}})}),i.jsx("span",{className:bt.value,children:s})]},c)})})]})},OF="_container_p3co0_1",$F="_header_p3co0_13",UF="_title_p3co0_21",ZF="_subtitle_p3co0_33",WF="_metricsGrid_p3co0_41",GF="_metricCard_p3co0_55",KF="_metricValue_p3co0_77",XF="_metricLabel_p3co0_89",QF="_chartsGrid_p3co0_101",JF="_section_p3co0_115",YF="_sectionTitle_p3co0_123",Ce={container:OF,header:$F,title:UF,subtitle:ZF,metricsGrid:WF,metricCard:GF,metricValue:KF,metricLabel:XF,chartsGrid:QF,section:JF,sectionTitle:YF},eE=()=>{const{loadAnalytics:e,getTotalCompletedThisWeek:t,getProductivityStreak:n,completionHistory:a}=oo();S.useEffect(()=>{e()},[e]);const o=a.length,c=t(),s=n();return i.jsxs("div",{className:Ce.container,children:[i.jsxs("div",{className:Ce.header,children:[i.jsx("h1",{className:Ce.title,children:"Insights"}),i.jsx("p",{className:Ce.subtitle,children:"Track your productivity and life balance"})]}),i.jsxs("div",{className:Ce.metricsGrid,children:[i.jsxs("div",{className:Ce.metricCard,children:[i.jsx("span",{className:Ce.metricValue,children:c}),i.jsx("span",{className:Ce.metricLabel,children:"Tasks This Week"})]}),i.jsxs("div",{className:Ce.metricCard,children:[i.jsxs("span",{className:Ce.metricValue,children:[s," 🔥"]}),i.jsx("span",{className:Ce.metricLabel,children:"Day Streak"})]}),i.jsxs("div",{className:Ce.metricCard,children:[i.jsx("span",{className:Ce.metricValue,children:o}),i.jsx("span",{className:Ce.metricLabel,children:"Total Completed"})]})]}),i.jsx("div",{className:Ce.section,children:i.jsxs("div",{className:Ce.chartsGrid,children:[i.jsx(YV,{}),i.jsx(MF,{})]})}),i.jsxs("div",{className:Ce.section,children:[i.jsx("h2",{className:Ce.sectionTitle,children:"Life Balance"}),i.jsxs("div",{className:Ce.chartsGrid,children:[i.jsx(qF,{}),i.jsx(EF,{})]})]})]})},tE="_container_1i9j2_9",nE="_header_1i9j2_23",aE="_titleInput_1i9j2_39",rE="_closeBtn_1i9j2_67",iE="_content_1i9j2_97",oE="_mainColumn_1i9j2_113",cE="_metaColumn_1i9j2_127",sE="_section_1i9j2_147",lE="_label_1i9j2_159",dE="_textarea_1i9j2_181",hE="_metaItem_1i9j2_215",uE="_input_1i9j2_227",yE="_select_1i9j2_229",pE="_colorPicker_1i9j2_263",kE="_colorBtn_1i9j2_275",mE="_selected_1i9j2_301",fE="_footer_1i9j2_309",vE="_footerActions_1i9j2_327",gE="_deleteConfirm_1i9j2_337",te={container:tE,header:nE,titleInput:aE,closeBtn:rE,content:iE,mainColumn:oE,metaColumn:cE,section:sE,label:lE,textarea:dE,metaItem:hE,input:uE,select:yE,colorPicker:pE,colorBtn:kE,selected:mE,footer:fE,footerActions:vE,deleteConfirm:gE},xE=({project:e,isOpen:t,onClose:n,initialData:a})=>{const{addProject:o,updateProject:c,deleteProject:s}=Xt(),{goals:l}=Sr(),[d,h]=S.useState(""),[y,p]=S.useState(""),[m,g]=S.useState(Cw[0]),[f,x]=S.useState("Briefcase"),[L,k]=S.useState("active"),[u,v]=S.useState(null),[M,j]=S.useState(""),[_,b]=S.useState(!1);S.useEffect(()=>{e?(h(e.name),p(e.description),g(e.color),x(e.icon),k(e.status),v(e.goalId),j(e.deadline?e.deadline.split("T")[0]:""),b(!1)):(h((a==null?void 0:a.name)||""),p((a==null?void 0:a.description)||""),g((a==null?void 0:a.color)||Cw[0]),x((a==null?void 0:a.icon)||"Briefcase"),k((a==null?void 0:a.status)||"active"),v((a==null?void 0:a.goalId)||null),j(a!=null&&a.deadline?a.deadline.split("T")[0]:""),b(!1))},[e,t,a]);const A=()=>{if(!d.trim())return;const w={name:d.trim(),description:y.trim(),color:m,icon:f,status:L,goalId:u,parentId:null,deadline:M?new Date(M).toISOString():null};e?c(e.id,w):o(w),n()},Z=()=>{e&&(s(e.id),n())};return i.jsx(ro,{isOpen:t,onClose:n,title:e?"Edit Project":"New Project",size:"lg",showCloseButton:!1,children:i.jsxs("div",{className:te.container,children:[i.jsxs("div",{className:te.header,children:[i.jsx("input",{className:te.titleInput,value:d,onChange:w=>h(w.target.value),placeholder:"Project Name",autoFocus:!0}),i.jsx("button",{className:te.closeBtn,onClick:n,children:i.jsx(Ae,{size:20})})]}),i.jsxs("div",{className:te.content,children:[i.jsxs("div",{className:te.mainColumn,children:[i.jsxs("div",{className:te.section,children:[i.jsx("label",{className:te.label,children:"Description"}),i.jsx("textarea",{className:te.textarea,value:y,onChange:w=>p(w.target.value),placeholder:"What is this project about?",rows:4})]}),i.jsxs("div",{className:te.section,children:[i.jsx("label",{className:te.label,children:"Color Key"}),i.jsx("div",{className:te.colorPicker,children:Cw.map(w=>i.jsx("div",{className:`${te.colorBtn} ${m===w?te.selected:""}`,style:{backgroundColor:w},onClick:()=>g(w)},w))})]})]}),i.jsxs("div",{className:te.metaColumn,children:[i.jsxs("div",{className:te.metaItem,children:[i.jsx("label",{className:te.label,children:"Status"}),i.jsxs("select",{className:te.select,value:L,onChange:w=>k(w.target.value),children:[i.jsx("option",{value:"active",children:"Active"}),i.jsx("option",{value:"on_hold",children:"On Hold"}),i.jsx("option",{value:"completed",children:"Completed"}),i.jsx("option",{value:"archived",children:"Archived"})]})]}),i.jsxs("div",{className:te.metaItem,children:[i.jsxs("label",{className:te.label,children:[i.jsx(Se,{size:16})," Linked Goal"]}),i.jsxs("select",{className:te.select,value:u||"",onChange:w=>v(w.target.value||null),children:[i.jsx("option",{value:"",children:"No Goal"}),l.map(w=>i.jsx("option",{value:w.id,children:w.title},w.id))]})]}),i.jsxs("div",{className:te.metaItem,children:[i.jsxs("label",{className:te.label,children:[i.jsx(Lt,{size:16})," Deadline"]}),i.jsx("input",{type:"date",className:te.input,value:M,onChange:w=>j(w.target.value)})]}),i.jsxs("div",{className:te.metaItem,children:[i.jsxs("label",{className:te.label,children:[i.jsx(Ja,{size:16})," Icon Name"]}),i.jsx("input",{type:"text",className:te.input,value:f,onChange:w=>x(w.target.value),placeholder:"e.g. Briefcase"})]})]})]}),i.jsxs("div",{className:te.footer,children:[e?_?i.jsxs("div",{className:te.deleteConfirm,children:[i.jsx("span",{children:"Delete this project?"}),i.jsx(W,{variant:"danger",size:"sm",onClick:Z,children:"Yes, Delete"}),i.jsx(W,{variant:"ghost",size:"sm",onClick:()=>b(!1),children:"Cancel"})]}):i.jsx(W,{variant:"ghost",leftIcon:i.jsx(D1,{size:16}),onClick:()=>b(!0),children:"Delete"}):i.jsx("div",{}),i.jsxs("div",{className:te.footerActions,children:[i.jsx(W,{variant:"ghost",onClick:n,children:"Cancel"}),i.jsx(W,{variant:"primary",onClick:A,leftIcon:i.jsx(Gt,{size:16}),children:"Save Project"})]})]})]})})},ME=[{id:"morning-routine",title:"🌅 Morning Ritual",description:"Start the day with energy and focus",frequency:"daily",streak:3,bestStreak:12,lastCompleted:new Date(Date.now()-864e5).toISOString(),steps:[{id:"step-1",title:"Drink Water (500ml)",duration:1,isCompleted:!1},{id:"step-2",title:"Meditation / Breathing",duration:10,isCompleted:!1},{id:"step-3",title:"Review DayFocus",duration:5,isCompleted:!1},{id:"step-4",title:"Quick Exercise / Stretch",duration:15,isCompleted:!1}]},{id:"night-routine",title:"🌙 Night Wind-down",description:"Disconnect and prepare for sleep",frequency:"daily",streak:0,bestStreak:5,lastCompleted:new Date(Date.now()-1728e5).toISOString(),steps:[{id:"step-1",title:"No Screens",duration:1,isCompleted:!1},{id:"step-2",title:"Journaling",duration:10,isCompleted:!1},{id:"step-3",title:"Prepare Tomorrow's Outfit",duration:5,isCompleted:!1},{id:"step-4",title:"Read Fiction",duration:20,isCompleted:!1}]}],wE=e=>{if(!e)return!1;const t=new Date(e),n=new Date;return t.toDateString()===n.toDateString()},gS=h1(e=>({routines:Kt(B.ROUTINES,ME),addRoutine:t=>e(n=>{const a=[...n.routines,t];return U(B.ROUTINES,a),{routines:a}}),updateRoutine:(t,n)=>e(a=>{const o=a.routines.map(c=>c.id===t?{...c,...n}:c);return U(B.ROUTINES,o),{routines:o}}),deleteRoutine:t=>e(n=>{const a=n.routines.filter(o=>o.id!==t);return U(B.ROUTINES,a),{routines:a}}),toggleStep:(t,n)=>e(a=>{const o=a.routines.map(c=>{if(c.id!==t)return c;const s=c.steps.map(l=>l.id===n?{...l,isCompleted:!l.isCompleted}:l);return{...c,steps:s}});return U(B.ROUTINES,o),{routines:o}}),resetRoutineSteps:t=>e(n=>{const a=n.routines.map(o=>{if(o.id!==t)return o;const c=o.steps.map(s=>({...s,isCompleted:!1}));return{...o,steps:c}});return U(B.ROUTINES,a),{routines:a}}),completeRoutine:t=>e(n=>{const a=n.routines.map(o=>{if(o.id!==t)return o;const c=new Date().toISOString();if(wE(o.lastCompleted))return{...o,lastCompleted:c};const s=o.lastCompleted?new Date(o.lastCompleted):null,l=new Date;l.setDate(l.getDate()-1);let d=o.streak;return!s||s.toDateString()===l.toDateString()?d+=1:d=1,{...o,lastCompleted:c,streak:d,bestStreak:Math.max(d,o.bestStreak)}});return U(B.ROUTINES,a),{routines:a}})})),LE="_card_1hgt5_1",SE="_header_1hgt5_33",jE="_icon_1hgt5_45",CE="_info_1hgt5_67",_E="_title_1hgt5_75",IE="_titleRow_1hgt5_89",bE="_editBtn_1hgt5_105",zE="_description_1hgt5_151",AE="_stats_1hgt5_163",qE="_stat_1hgt5_163",TE="_statIcon_1hgt5_195",NE="_startBtn_1hgt5_203",Ke={card:LE,header:SE,icon:jE,info:CE,title:_E,titleRow:IE,editBtn:bE,description:zE,stats:AE,stat:qE,statIcon:TE,startBtn:NE},DE=({routine:e,onStart:t,onEdit:n})=>{const a=e.steps.reduce((o,c)=>o+c.duration,0);return i.jsxs("div",{className:Ke.card,children:[i.jsxs("div",{className:Ke.header,children:[i.jsx("div",{className:Ke.icon,children:e.title.includes("Morning")?"🌅":e.title.includes("Night")?"🌙":"📋"}),i.jsxs("div",{className:Ke.info,children:[i.jsxs("div",{className:Ke.titleRow,children:[i.jsx("h3",{className:Ke.title,children:e.title}),i.jsx("button",{className:Ke.editBtn,onClick:o=>{o.stopPropagation(),n(e)},children:i.jsx(N1,{size:14})})]}),i.jsx("p",{className:Ke.description,children:e.description})]})]}),i.jsxs("div",{className:Ke.stats,children:[i.jsxs("div",{className:Ke.stat,children:[i.jsx(va,{size:16,className:Ke.statIcon}),i.jsxs("span",{children:[e.streak," day streak"]})]}),i.jsxs("div",{className:Ke.stat,children:[i.jsx(st,{size:16,className:Ke.statIcon}),i.jsxs("span",{children:[e.steps.length," steps (",a," min)"]})]})]}),i.jsxs("button",{className:Ke.startBtn,onClick:()=>t(e),children:[i.jsx(T1,{size:18}),"Start Routine"]})]})},PE="_overlay_q3buz_1",HE="_container_q3buz_29",BE="_header_q3buz_49",RE="_closeBtn_q3buz_63",VE="_progressContainer_q3buz_93",FE="_progressBar_q3buz_109",EE="_stepCounter_q3buz_121",OE="_content_q3buz_133",$E="_stepTitle_q3buz_151",UE="_timerContainer_q3buz_165",ZE="_timerCircle_q3buz_179",WE="_timerControls_q3buz_237",GE="_footer_q3buz_285",KE="_navBtn_q3buz_297",XE="_primaryBtn_q3buz_339",QE="_celebration_q3buz_379",JE="_streakBadge_q3buz_417",_e={overlay:PE,container:HE,header:BE,closeBtn:RE,progressContainer:VE,progressBar:FE,stepCounter:EE,content:OE,stepTitle:$E,timerContainer:UE,timerCircle:ZE,timerControls:WE,footer:GE,navBtn:KE,primaryBtn:XE,celebration:QE,streakBadge:JE},YE=({routine:e,onClose:t,onComplete:n})=>{const[a,o]=S.useState(0),[c,s]=S.useState(e.steps[0].duration*60),[l,d]=S.useState(!0),[h,y]=S.useState(!1),p=e.steps[a],m=e.steps.length,g=a/m*100;S.useEffect(()=>{let u;return l&&c>0?u=setInterval(()=>{s(v=>v-1)},1e3):c===0&&d(!1),()=>clearInterval(u)},[l,c]),S.useEffect(()=>{p&&(s(p.duration*60),d(!0))},[a]);const f=()=>{a<m-1?o(u=>u+1):L()},x=()=>{a>0&&o(u=>u-1)},L=()=>{y(!0),setTimeout(()=>{n()},2e3)},k=u=>{const v=Math.floor(u/60),M=u%60;return`${v}:${M.toString().padStart(2,"0")}`};return h?i.jsx("div",{className:_e.overlay,children:i.jsxs("div",{className:_e.celebration,children:[i.jsx("h1",{children:"🎉 Routine Completed!"}),i.jsx("p",{children:"Great job staying consistent."}),i.jsxs("div",{className:_e.streakBadge,children:["🔥 ",e.streak+1," Day Streak"]})]})}):i.jsx("div",{className:_e.overlay,children:i.jsxs("div",{className:_e.container,children:[i.jsxs("div",{className:_e.header,children:[i.jsx("button",{className:_e.closeBtn,onClick:t,children:i.jsx(Ae,{size:24})}),i.jsx("div",{className:_e.progressContainer,children:i.jsx("div",{className:_e.progressBar,style:{width:`${g}%`}})}),i.jsxs("div",{className:_e.stepCounter,children:["Step ",a+1," of ",m]})]}),i.jsxs("div",{className:_e.content,children:[i.jsx("h2",{className:_e.stepTitle,children:p.title}),i.jsxs("div",{className:_e.timerContainer,children:[i.jsx("div",{className:_e.timerCircle,children:i.jsx("span",{className:_e.time,children:k(c)})}),i.jsxs("div",{className:_e.timerControls,children:[i.jsx("button",{onClick:()=>d(!l),children:l?i.jsx(or,{size:24}):i.jsx(T1,{size:24})}),i.jsx("button",{onClick:()=>{s(p.duration*60),d(!1)},children:i.jsx(cr,{size:24})})]})]})]}),i.jsxs("div",{className:_e.footer,children:[i.jsxs("button",{className:_e.navBtn,onClick:x,disabled:a===0,children:[i.jsx(tr,{size:20})," Previous"]}),i.jsxs("button",{className:_e.primaryBtn,onClick:f,children:[a===m-1?"Finish Routine":"Next Step",a===m-1?i.jsx(er,{size:20}):i.jsx(Wt,{size:20})]})]})]})})},eO="_container_5l3oj_9",tO="_header_5l3oj_21",nO="_titleInput_5l3oj_37",aO="_closeBtn_5l3oj_73",rO="_content_5l3oj_111",iO="_mainColumn_5l3oj_139",oO="_section_5l3oj_151",cO="_label_5l3oj_163",sO="_textarea_5l3oj_181",lO="_stepsList_5l3oj_207",dO="_stepItem_5l3oj_219",hO="_stepTitle_5l3oj_239",uO="_stepDuration_5l3oj_257",yO="_removeStepBtn_5l3oj_279",pO="_addStepBtn_5l3oj_303",kO="_metaColumn_5l3oj_315",mO="_metaItem_5l3oj_335",fO="_select_5l3oj_347",vO="_footer_5l3oj_369",gO="_footerActions_5l3oj_385",xO="_deleteConfirm_5l3oj_395",oe={container:eO,header:tO,titleInput:nO,closeBtn:aO,content:rO,mainColumn:iO,section:oO,label:cO,textarea:sO,stepsList:lO,stepItem:dO,stepTitle:hO,stepDuration:uO,removeStepBtn:yO,addStepBtn:pO,metaColumn:kO,metaItem:mO,select:fO,footer:vO,footerActions:gO,deleteConfirm:xO},MO=({routine:e,isOpen:t,onClose:n})=>{const{addRoutine:a,updateRoutine:o,deleteRoutine:c}=gS(),[s,l]=S.useState(""),[d,h]=S.useState(""),[y,p]=S.useState("daily"),[m,g]=S.useState([]),[f,x]=S.useState(!1);S.useEffect(()=>{e?(l(e.title),h(e.description||""),p(e.frequency),g(e.steps),x(!1)):(l(""),h(""),p("daily"),g([]),x(!1))},[e,t]);const L=()=>{if(!s.trim())return;const j={title:s.trim(),description:d.trim(),frequency:y,steps:m};e?o(e.id,j):a({id:Math.random().toString(36).substr(2,9),...j,streak:0,bestStreak:0,lastCompleted:null}),n()},k=()=>{e&&(c(e.id),n())},u=()=>{const j={id:Math.random().toString(36).substr(2,9),title:"",duration:5,isCompleted:!1};g([...m,j])},v=(j,_)=>{g(m.map(b=>b.id===j?{...b,..._}:b))},M=j=>{g(m.filter(_=>_.id!==j))};return i.jsx(ro,{isOpen:t,onClose:n,title:e?"Edit Routine":"New Routine",size:"lg",showCloseButton:!1,children:i.jsxs("div",{className:oe.container,children:[i.jsxs("div",{className:oe.header,children:[i.jsx("input",{className:oe.titleInput,value:s,onChange:j=>l(j.target.value),placeholder:"Routine Name",autoFocus:!0}),i.jsx("button",{className:oe.closeBtn,onClick:n,children:i.jsx(Ae,{size:20})})]}),i.jsxs("div",{className:oe.content,children:[i.jsxs("div",{className:oe.mainColumn,children:[i.jsxs("div",{className:oe.section,children:[i.jsx("label",{className:oe.label,children:"Description"}),i.jsx("textarea",{className:oe.textarea,value:d,onChange:j=>h(j.target.value),placeholder:"What is this routine for?",rows:2})]}),i.jsxs("div",{className:oe.section,children:[i.jsxs("label",{className:oe.label,children:[i.jsx(rr,{size:16})," Steps & Duration"]}),i.jsxs("div",{className:oe.stepsList,children:[m.map(j=>i.jsxs("div",{className:oe.stepItem,children:[i.jsx("input",{className:oe.stepTitle,value:j.title,onChange:_=>v(j.id,{title:_.target.value}),placeholder:"Step Title"}),i.jsxs("div",{className:oe.stepDurationWrap,children:[i.jsx("input",{type:"number",className:oe.stepDuration,value:j.duration,onChange:_=>v(j.id,{duration:parseInt(_.target.value)||0})}),i.jsx("span",{style:{fontSize:"10px",color:"var(--color-text-muted)"},children:"min"})]}),i.jsx("button",{className:oe.removeStepBtn,onClick:()=>M(j.id),children:i.jsx(Ae,{size:14})})]},j.id)),i.jsx(W,{variant:"ghost",size:"sm",leftIcon:i.jsx(lt,{size:14}),onClick:u,className:oe.addStepBtn,children:"Add Step"})]})]})]}),i.jsxs("div",{className:oe.metaColumn,children:[i.jsxs("div",{className:oe.metaItem,children:[i.jsx("label",{className:oe.label,children:"Frequency"}),i.jsxs("select",{className:oe.select,value:y,onChange:j=>p(j.target.value),children:[i.jsx("option",{value:"daily",children:"Daily"}),i.jsx("option",{value:"weekly",children:"Weekly"}),i.jsx("option",{value:"custom",children:"Custom"})]})]}),i.jsxs("div",{className:oe.metaItem,children:[i.jsxs("label",{className:oe.label,children:[i.jsx(St,{size:16})," Total Time"]}),i.jsxs("span",{style:{fontSize:"14px",color:"var(--color-text-primary)"},children:[m.reduce((j,_)=>j+(_.duration||0),0)," minutes"]})]})]})]}),i.jsxs("div",{className:oe.footer,children:[e?f?i.jsxs("div",{className:oe.deleteConfirm,children:[i.jsx("span",{children:"Delete this routine?"}),i.jsx(W,{variant:"danger",size:"sm",onClick:k,children:"Yes, Delete"}),i.jsx(W,{variant:"ghost",size:"sm",onClick:()=>x(!1),children:"Cancel"})]}):i.jsx(W,{variant:"ghost",leftIcon:i.jsx(D1,{size:16}),onClick:()=>x(!0),children:"Delete"}):i.jsx("div",{}),i.jsxs("div",{className:oe.footerActions,children:[i.jsx(W,{variant:"ghost",onClick:n,children:"Cancel"}),i.jsx(W,{variant:"primary",onClick:L,leftIcon:i.jsx(Gt,{size:16}),children:"Save Routine"})]})]})]})})},wO="_container_16e0d_1",LO="_header_16e0d_15",SO="_title_16e0d_23",jO="_subtitle_16e0d_41",CO="_grid_16e0d_51",Pr={container:wO,header:LO,title:SO,subtitle:jO,grid:CO},_O=()=>{const{routines:e,completeRoutine:t}=gS(),[n,a]=S.useState(null),[o,c]=S.useState(null),[s,l]=S.useState(!1),d=p=>{a(p)},h=p=>{c(p),l(!0)},y=()=>{n&&(t(n.id),a(null))};return i.jsxs("div",{className:Pr.container,children:[i.jsxs("div",{className:Pr.header,children:[i.jsx("h1",{className:Pr.title,children:"Daily Routines"}),i.jsx("p",{className:Pr.subtitle,children:"Build consistency with structured habits."})]}),i.jsx("div",{className:Pr.grid,children:e.map(p=>i.jsx(DE,{routine:p,onStart:d,onEdit:h},p.id))}),n&&i.jsx(YE,{routine:n,onClose:()=>a(null),onComplete:y}),i.jsx(MO,{routine:o,isOpen:s,onClose:()=>{l(!1),c(null)}})]})},IO="_container_1c85y_1",bO="_header_1c85y_17",zO="_title_1c85y_31",AO="_subtitle_1c85y_45",qO="_content_1c85y_55",TO="_emptyState_1c85y_67",NO="_emptyIcon_1c85y_93",DO="_grid_1c85y_103",PO="_card_1c85y_115",HO="_cardHeader_1c85y_139",BO="_typeTag_1c85y_151",RO="_date_1c85y_173",VO="_status_1c85y_183",FO="_completedIcon_1c85y_199",EO="_stats_1c85y_207",OO="_actions_1c85y_217",$O="_deleteBtn_1c85y_233",Ne={container:IO,header:bO,title:zO,subtitle:AO,content:qO,emptyState:TO,emptyIcon:NO,grid:DO,card:PO,cardHeader:HO,typeTag:BO,date:RO,status:VO,completedIcon:FO,stats:EO,actions:OO,deleteBtn:$O},UO=()=>{const{reviews:e,deleteReview:t}=vS(),[n,a]=S.useState(!1),o=[...e].sort((s,l)=>new Date(l.createdAt).getTime()-new Date(s.createdAt).getTime()),c=s=>new Date(s).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return i.jsxs("div",{className:Ne.container,children:[i.jsxs("div",{className:Ne.header,children:[i.jsxs("div",{children:[i.jsx("h1",{className:Ne.title,children:"Reviews"}),i.jsx("p",{className:Ne.subtitle,children:"Reflect, Learn, and Plan."})]}),i.jsx(W,{variant:"primary",leftIcon:i.jsx(lt,{size:20}),onClick:()=>a(!0),children:"Start Review"})]}),i.jsx("div",{className:Ne.content,children:o.length===0?i.jsxs("div",{className:Ne.emptyState,children:[i.jsx(Lt,{size:48,className:Ne.emptyIcon}),i.jsx("h3",{children:"No reviews yet"}),i.jsx("p",{children:"Complete your first review to start tracking your progress."}),i.jsx(W,{variant:"secondary",onClick:()=>a(!0),children:"Start Now"})]}):i.jsx("div",{className:Ne.grid,children:o.map(s=>i.jsxs(M1,{className:Ne.card,variant:"default",padding:"md",children:[i.jsxs("div",{className:Ne.cardHeader,children:[i.jsxs("div",{className:Ne.typeTag,children:[s.type.charAt(0).toUpperCase()+s.type.slice(1)," Review"]}),i.jsx("span",{className:Ne.date,children:c(s.createdAt)})]}),i.jsxs("div",{className:Ne.status,children:[i.jsx(Ya,{size:16,className:s.status==="completed"?Ne.completedIcon:""}),i.jsx("span",{children:s.status==="completed"?"Completed":"In Progress"})]}),i.jsx("div",{className:Ne.stats,children:i.jsxs("span",{children:[s.answers.length," Questions Answered"]})}),i.jsx("div",{className:Ne.actions,children:i.jsx("button",{className:Ne.deleteBtn,onClick:l=>{l.stopPropagation(),confirm("Delete this review?")&&t(s.id)},children:"Delete"})})]},s.id))})}),n&&i.jsx(mI,{type:"weekly",onClose:()=>a(!1)})]})},ZO={enabled:!1,quietMode:!1,quietHoursStart:"22:00",quietHoursEnd:"07:00",contexts:{routines:!0,tasks:!0,energy:!0},whatsapp:{enabled:!1,apiKey:"",phoneNumber:""}},vI=h1(e=>({settings:Kt(B.SETTINGS,ZO),permission:"default",setPermission:t=>e({permission:t}),updateSettings:t=>e(n=>{const a={...n.settings,...t};return U(B.SETTINGS,a),{settings:a}}),toggleContext:t=>e(n=>{const a={...n.settings.contexts,[t]:!n.settings.contexts[t]},o={...n.settings,contexts:a};return U(B.SETTINGS,o),{settings:o}})})),WO=async()=>"Notification"in window?Notification.permission==="granted"?!0:Notification.permission!=="denied"?await Notification.requestPermission()==="granted":!1:(console.warn("This browser does not support desktop notification"),!1),aM=(e,t)=>{"Notification"in window&&Notification.permission==="granted"&&new Notification(e,{icon:"/favicon.ico",badge:"/favicon.ico",...t})},GO=()=>"Notification"in window?Notification.permission:"denied",_w=async(e,t)=>{if(!t.apiKey||!t.phoneNumber)return console.warn("WhatsApp not configured"),!1;try{const n=encodeURIComponent(e),a=`https://api.callmebot.com/whatsapp.php?phone=${t.phoneNumber}&text=${n}&apikey=${t.apiKey}`;return await fetch(a,{mode:"no-cors"}),console.log("WhatsApp message sent:",e),!0}catch(n){return console.error("Failed to send WhatsApp message",n),!1}},KO=()=>{const{settings:e,setPermission:t}=vI(),{tasks:n}=Ze(),{routines:a}=gS(),o=S.useRef(new Set);return S.useEffect(()=>{t(GO())},[t]),S.useEffect(()=>{if(!e.enabled)return;const c=()=>{const l=new Date,d=l.getHours(),h=l.getMinutes(),y=`${d.toString().padStart(2,"0")}:${h.toString().padStart(2,"0")}`,p=XO();if(e.quietMode)return;const m=parseInt(e.quietHoursStart.split(":")[0]),g=parseInt(e.quietHoursEnd.split(":")[0]);let f=!1;if(m>g?(d>=m||d<g)&&(f=!0):d>=m&&d<g&&(f=!0),!f&&(e.contexts.tasks&&n.forEach(x=>{if(x.status==="done"||!x.dueTime||!x.dueDate)return;const L=new Date(x.dueDate),k=new Date;if(L.toDateString()===k.toDateString()&&x.dueTime===y){const u=`task-${x.id}-${y}`;if(!o.current.has(u)){const v=`Task Due: ${x.title}`,M=`It's time to work on: ${x.title}`;aM(v,{body:M,tag:u}),e.whatsapp.enabled&&e.whatsapp.apiKey&&e.whatsapp.phoneNumber&&_w(`*${v}*
${M}`,e.whatsapp),o.current.add(u)}}}),e.contexts.routines)){if(y==="07:00"){const x=a.find(L=>L.title.toLowerCase().includes("morning"));if(x){const L=`routine-${x.id}-${p}`;if(!o.current.has(L)&&!Oj(x)){const k="☀️ Good Morning!",u="Ready to start your Morning Ritual?";aM(k,{body:u,tag:L}),e.whatsapp.enabled&&e.whatsapp.apiKey&&e.whatsapp.phoneNumber&&_w(`*${k}*
${u}`,e.whatsapp),o.current.add(L)}}}if(y==="21:00"){const x=a.find(L=>L.title.toLowerCase().includes("night"));if(x){const L=`routine-${x.id}-${p}`;if(!o.current.has(L)&&!Oj(x)){const k="🌙 Time to Wind Down",u="Ready for your Night Routine?";aM(k,{body:u,tag:L}),e.whatsapp.enabled&&e.whatsapp.apiKey&&e.whatsapp.phoneNumber&&_w(`*${k}*
${u}`,e.whatsapp),o.current.add(L)}}}}},s=setInterval(c,6e4);return c(),()=>clearInterval(s)},[e,n,a]),null},XO=()=>new Date().toISOString().split("T")[0],Oj=e=>{if(!e.lastCompleted)return!1;const t=new Date(e.lastCompleted),n=new Date;return t.toDateString()===n.toDateString()},QO="_toast_4xsvc_1",JO="_iconContainer_4xsvc_65",YO="_content_4xsvc_79",e$="_title_4xsvc_87",t$="_message_4xsvc_103",n$="_closeBtn_4xsvc_117",Z1={toast:QO,iconContainer:JO,content:YO,title:e$,message:t$,closeBtn:n$},a$=({message:e,onClose:t,duration:n=6e3})=>(S.useEffect(()=>{const a=setTimeout(()=>{t()},n);return()=>clearTimeout(a)},[t,n]),i.jsxs("div",{className:Z1.toast,children:[i.jsx("div",{className:Z1.iconContainer,children:i.jsx(fa,{size:20,className:Z1.icon})}),i.jsxs("div",{className:Z1.content,children:[i.jsx("h4",{className:Z1.title,children:"Tips & Insights"}),i.jsx("p",{className:Z1.message,children:e})]}),i.jsx("button",{className:Z1.closeBtn,onClick:t,children:i.jsx(Ae,{size:16})})]})),$j=["💡 For $50k/month, focus on High-Leverage Tasks: Automated Follow-ups & Closing.","💡 Energy Tip: Tackle your hardest task ('Eat the Frog') during your peak energy hours.","💡 Review your Weekly Wins to boost dopamine and motivation.","💡 Automation: If you do it more than 3 times, automate it (e.g. Email responses).","💡 'Ghosting' is often just a lack of follow-up. Setup a 5-step sequence.","💡 Deep Work: Block 90 mins for your 'One Thing' today.","💡 Context Switching kills productivity. Group similar tasks together.","💡 Validate before you build. Sell the offer, then create the product."],r$=()=>{const[e,t]=S.useState(null);return S.useEffect(()=>{const n=setTimeout(()=>{const a=$j[Math.floor(Math.random()*$j.length)];t(a)},5e3);return()=>clearTimeout(n)},[]),e?i.jsx(a$,{message:e,onClose:()=>t(null)}):null},i$={title:"🎯 Alcanzar $50,000 MXN/MES",description:"Meta principal: Escalar de $30k a $50k+ mensuales mediante automatización y optimización.",vision:"Lograr libertad financiera y operativa delegando procesos repetitivos.",parentId:null,lifeArea:"money",timeline:"q1",status:"in_progress",progress:0,deadline:new Date(Date.now()+90*24*60*60*1e3).toISOString(),icon:"Target"},o$={name:"🚀 PROYECTO: Automatización y Escalamiento",description:"Estrategia de 90 días para escalar agencia/negocio.",color:"#22c55e",icon:"Rocket",status:"active",goalId:null,parentId:null,deadline:new Date(Date.now()+90*24*60*60*1e3).toISOString()},we=e=>e.map(t=>({id:dI(),title:t,isCompleted:!1})),c$=[{title:"✅ TAREA 1: Automatizar Follow-up Completo",description:"FASE 1: OPTIMIZACIÓN (Días 1-30). Meta: $30,000 solo con motos.",priority:"high",energyRequired:"high",subtasks:we(["Configurar secuencias automáticas en Respond.io/n8n","Crear 5 mensajes de seguimiento por lead","Programar envíos: Día 1, 3, 7, 14, 21","Testear con 20 leads actuales","Medir tasa de respuesta vs manual"])},{title:"✅ TAREA 2: Optimizar Conversión de Leads",description:"FASE 1: OPTIMIZACIÓN. Analizar embudo actual.",priority:"high",energyRequired:"medium",subtasks:we(["Analizar tus últimos 50 leads (cuántos cerraron)","Identificar en qué paso se pierden más","Reescribir copy de ese paso específico","A/B test: mensaje viejo vs nuevo (1 semana)","Implementar el ganador"])},{title:"✅ TAREA 3: Reducir Tiempo por Lead",description:"FASE 1: OPTIMIZACIÓN. Eficiencia operativa.",priority:"medium",energyRequired:"medium",subtasks:we(["Cronometrar tiempo actual por lead (inicio a fin)","Identificar 3 tareas que consumen más tiempo","Automatizar o delegar esas 3 tareas","Crear plantillas de respuestas frecuentes","Medir nuevo tiempo por lead"])},{title:"✅ TAREA 4: Documentar Tu Sistema",description:"FASE 1: OPTIMIZACIÓN. Preparar para delegar.",priority:"medium",energyRequired:"low",subtasks:we(["Grabar pantalla de tu proceso completo","Escribir paso a paso en Google Doc","Crear diagrama de flujo visual (Miro/Whimsical)","Listar todas las herramientas que usas","Guardar ejemplos de mensajes que funcionan"])},{title:"✅ TAREA 5: Crear Oferta Irresistible",description:"FASE 2: VALIDACIÓN (Días 31-60). Meta: +$20,000 con automatización.",priority:"high",energyRequired:"high",subtasks:we(["Definir nicho específico (autos, inmobiliarias, servicios)","Escribir propuesta de valor en 1 frase","Crear pitch de 2 minutos","Diseñar caso de estudio con tus resultados","Preparar garantía ('Resultados en 30 días o no pagas')"])},{title:"✅ TAREA 6: Prospección Activa",description:"FASE 2: VALIDACIÓN. Conseguir clientes beta.",priority:"high",energyRequired:"high",subtasks:we(["Listar 20 negocios locales con ghosting","Conseguir contacto del dueño/gerente (10 empresas)","Enviar mensaje inicial personalizado","Agendar 5 llamadas/reuniones","Dar seguimiento a los 5 restantes"])},{title:"✅ TAREA 7: Cerrar Primer Cliente Beta",description:"FASE 2: VALIDACIÓN. Ventas.",priority:"high",energyRequired:"high",subtasks:we(["Presentar pitch en reunión","Ofrecer precio especial beta: $5,000-7,000","Firmar acuerdo simple (1 página)","Cobrar 50% adelantado","Establecer KPIs claros (% ghosting reducido)"])},{title:"✅ TAREA 8: Implementar y Entregar",description:"FASE 2: VALIDACIÓN. Delivery.",priority:"high",energyRequired:"medium",subtasks:we(["Replicar tu sistema en negocio del cliente","Entrenar a su equipo (2-3 horas)","Monitorear primeros 15 días","Ajustar según resultados","Documentar caso de éxito con números"])},{title:"✅ TAREA 9: Conseguir Testimonial Poderoso",description:"FASE 3: ESCALAMIENTO (Días 61-90). Meta: $50,000+ total.",priority:"medium",energyRequired:"low",subtasks:we(["Pedir video testimonial al cliente beta","Capturar pantallas de métricas (antes/después)","Crear PDF de caso de estudio","Publicar en redes sociales","Usar en siguientes pitches"])},{title:"✅ TAREA 10: Cerrar 2-3 Clientes Más",description:"FASE 3: ESCALAMIENTO. Crecimiento.",priority:"high",energyRequired:"high",subtasks:we(["Contactar 15 negocios nuevos (con caso de éxito)","Subir precio: $8,000-12,000/mes","Agendar 8 reuniones","Presentar con testimonial incluido","Cerrar mínimo 2 clientes"])},{title:"✅ TAREA 11: Sistematizar Entrega",description:"FASE 3: ESCALAMIENTO. Operaciones.",priority:"medium",energyRequired:"medium",subtasks:we(["Crear checklist de onboarding del cliente","Preparar templates de implementación","Automatizar reporting mensual","Definir proceso de soporte (cuántas horas/mes)","Crear SOP para escalar sin ti"])},{title:"✅ TAREA 12: Optimizar Motos en Piloto Automático",description:"FASE 3: ESCALAMIENTO. Delegación.",priority:"medium",energyRequired:"low",subtasks:we(["Contratar VA para seguimiento básico ($3,000/mes)","Dejar solo tareas de cierre para ti","Medir si ventas se mantienen","Liberar 10-15 horas semanales","Reinvertir ese tiempo en automatización"])},{title:"📅 SEMANA 1-2: Fundamentos",description:"Checklist rápido semanal.",priority:"medium",energyRequired:"medium",subtasks:we(["Automatización funcionando","Sistema documentado","Lista de 20 prospectos"])},{title:"📅 SEMANA 3-4: Preparación",description:"Checklist rápido semanal.",priority:"medium",energyRequired:"medium",subtasks:we(["Pitch listo","5 reuniones agendadas","Motos generando $25-30K"])},{title:"📅 SEMANA 5-6: Primer Cliente",description:"Checklist rápido semanal.",priority:"high",energyRequired:"high",subtasks:we(["1 cliente beta cerrado","Sistema implementado","Resultados medibles"])},{title:"📅 SEMANA 7-8: Crecimiento",description:"Checklist rápido semanal.",priority:"medium",energyRequired:"medium",subtasks:we(["Testimonial conseguido","15 nuevos prospectos contactados","3 reuniones agendadas"])},{title:"📅 SEMANA 9-12: Meta Alcanzada",description:"Checklist rápido semanal. META: $50K+ alcanzada.",priority:"high",energyRequired:"high",subtasks:we(["2-3 clientes totales","$15-20K recurrente de automatización","$30K de motos"])},{title:"📊 MÉTRICAS DIARIAS",description:"Seguimiento diario del rendimiento.",priority:"medium",energyRequired:"low",subtasks:we(["Leads nuevos contactados","Respuestas recibidas","Follow-ups enviados"])},{title:"📊 MÉTRICAS SEMANALES",description:"Seguimiento semanal del rendimiento.",priority:"medium",energyRequired:"low",subtasks:we(["Tasa de conversión motos","Reuniones agendadas (automatización)","Horas trabajadas vs ingresos"])},{title:"📊 MÉTRICAS MENSUALES",description:"Seguimiento mensual del rendimiento.",priority:"high",energyRequired:"low",subtasks:we(["Ingresos motos","Ingresos automatización","Total vs meta $50K"])}],s$="_overlay_lixfu_9",l$="_container_lixfu_39",d$="_header_lixfu_55",h$="_sectionHeader_lixfu_93",u$="_row_lixfu_133",y$="_label_lixfu_147",p$="_divider_lixfu_167",k$="_toggle_lixfu_179",m$="_active_lixfu_201",f$="_toggleKnob_lixfu_209",v$="_toggleKnobActive_lixfu_231",g$="_timeInput_lixfu_267",D={overlay:s$,container:l$,header:d$,sectionHeader:h$,row:u$,label:y$,divider:p$,toggle:k$,active:m$,toggleKnob:f$,toggleKnobActive:v$,timeInput:g$},x$=({onClose:e})=>{const{settings:t,updateSettings:n,permission:a,setPermission:o}=vI(),{addProject:c}=Xt(),{addTask:s}=Ze(),{addGoal:l}=Sr(),[d,h]=S.useState("idle"),[y,p]=S.useState(!1),[m,g]=S.useState("idle"),[f,x]=S.useState("idle"),L=async()=>{try{h("importing"),console.log("Starting $50k Plan Import...");const M=l(i$);console.log("Goal created:",M.id);const j=c({...o$,goalId:M.id});console.log("Project created:",j.id),c$.forEach((_,b)=>{s({title:_.title||"",description:_.description||"",priority:_.priority||"medium",energyRequired:_.energyRequired||"medium",subtasks:_.subtasks||[],status:"todo",projectId:j.id,dueDate:null,dueTime:null,timeEstimate:null,impact:"high",lifeArea:"money",mentalLevel:"analytical",taskType:"task",reward:null,dependencies:[],tags:[],recurring:"none",reminder:null,isArchived:!1}),b%5===0&&console.log(`Imported ${b} tasks...`)}),console.log("Import finished successfully!"),h("success"),setTimeout(()=>{e()},2e3)}catch(M){console.error("Import failed:",M),h("error")}},k=async()=>{const M=await WO();o(M?"granted":"denied")},u=()=>{try{const M=KA(),j=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),_=URL.createObjectURL(j),b=document.createElement("a");b.href=_,b.download=`lifehub-backup-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(_),g("success"),setTimeout(()=>g("idle"),3e3)}catch{g("error"),setTimeout(()=>g("idle"),3e3)}},v=()=>{const M=document.createElement("input");M.type="file",M.accept=".json",M.onchange=async j=>{var b;const _=(b=j.target.files)==null?void 0:b[0];if(_)try{const A=await _.text(),Z=JSON.parse(A);XA(Z),x("success"),setTimeout(()=>window.location.reload(),1500)}catch{x("error"),setTimeout(()=>x("idle"),3e3)}},M.click()};return i.jsx("div",{className:D.overlay,children:i.jsxs("div",{className:D.container,children:[i.jsxs("div",{className:D.header,children:[i.jsx("h2",{children:"Settings"}),i.jsx("button",{className:D.closeBtn,onClick:e,children:i.jsx(Ae,{size:24})})]}),i.jsxs("div",{className:D.content,children:[i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:"Browser Permissions"}),i.jsxs("p",{children:["Status: ",i.jsx("span",{style:{color:a==="granted"?"#4ade80":"#f87171"},children:a})]})]}),a!=="granted"&&i.jsx("button",{className:D.primaryBtn,onClick:k,children:"Request Permission"})]}),a==="granted"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:D.divider}),i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:"Enable Notifications"}),i.jsx("p",{children:"Allow LifeHub to send alerts."})]}),i.jsx("button",{className:`${D.toggle} ${t.enabled?D.active:""}`,onClick:()=>n({enabled:!t.enabled}),children:t.enabled?i.jsx("div",{className:D.toggleKnobActive}):i.jsx("div",{className:D.toggleKnob})})]}),i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:"Quiet Hours"}),i.jsx("p",{children:"Mute notifications during sleep."})]}),i.jsxs("div",{className:D.timeInputs,children:[i.jsx("input",{type:"time",value:t.quietHoursStart,onChange:M=>n({quietHoursStart:M.target.value}),className:D.timeInput}),i.jsx("span",{children:"to"}),i.jsx("input",{type:"time",value:t.quietHoursEnd,onChange:M=>n({quietHoursEnd:M.target.value}),className:D.timeInput})]})]}),i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:"Test Notification"}),i.jsx("p",{children:"Verify permission works."})]}),i.jsx("button",{className:D.secondaryBtn,onClick:()=>aM("Test",{body:"This is a test notification"}),children:"Send Test"})]})]}),i.jsx("div",{className:D.divider}),i.jsx("div",{className:D.sectionHeader,children:i.jsx("h2",{style:{fontSize:"1.2rem",color:"#25D366"},children:"WhatsApp Integration"})}),i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:"Enable WhatsApp"}),i.jsx("p",{children:"Receive alerts on your phone via CallMeBot."})]}),i.jsx("button",{className:`${D.toggle} ${t.whatsapp.enabled?D.active:""}`,onClick:()=>n({whatsapp:{...t.whatsapp,enabled:!t.whatsapp.enabled}}),children:t.whatsapp.enabled?i.jsx("div",{className:D.toggleKnobActive}):i.jsx("div",{className:D.toggleKnob})})]}),t.whatsapp.enabled&&i.jsxs("div",{className:D.whatsappConfig,style:{marginTop:"1rem",background:"#111",padding:"1rem",borderRadius:"8px"},children:[i.jsxs("div",{style:{marginBottom:"1rem"},children:[i.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.9rem",color:"#888"},children:"Phone Number (Intl Format)"}),i.jsx("input",{type:"text",placeholder:"+1234567890",value:t.whatsapp.phoneNumber,onChange:M=>n({whatsapp:{...t.whatsapp,phoneNumber:M.target.value}}),style:{width:"100%",background:"#222",border:"1px solid #444",color:"white",padding:"0.5rem",borderRadius:"4px"}})]}),i.jsxs("div",{style:{marginBottom:"1rem"},children:[i.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.9rem",color:"#888"},children:"CallMeBot API Key"}),i.jsx("input",{type:"text",placeholder:"123456",value:t.whatsapp.apiKey,onChange:M=>n({whatsapp:{...t.whatsapp,apiKey:M.target.value}}),style:{width:"100%",background:"#222",border:"1px solid #444",color:"white",padding:"0.5rem",borderRadius:"4px"}}),i.jsxs("p",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:["Get your key by messaging ",i.jsx("strong",{children:'"I allow callmebot to send me messages"'})," to ",i.jsx("strong",{children:"+34 644 66 32 62"})," (CallMeBot) on WhatsApp."]})]})]}),i.jsx("div",{className:D.divider}),i.jsx("div",{className:D.sectionHeader,children:i.jsx("h2",{style:{fontSize:"1.2rem",color:"#3b82f6"},children:"Content & Templates"})}),i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:'Import "$50k/Month Plan"'}),i.jsx("p",{children:"Load the 90-day scaling strategy into your Projects & Tasks."})]}),d==="idle"&&i.jsx("button",{className:D.primaryBtn,onClick:L,style:{background:"#3b82f6",borderColor:"#3b82f6"},children:"Import Plan"}),d==="importing"&&i.jsxs("button",{className:D.primaryBtn,disabled:!0,style:{background:"#3b82f6",opacity:.7,display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(Li,{className:D.spin,size:16}),"Importing..."]}),d==="success"&&i.jsxs("div",{className:D.successMessage,style:{color:"#4ade80",display:"flex",alignItems:"center",gap:"8px",fontWeight:"bold"},children:[i.jsx(Ya,{size:20}),"Plan Imported!"]}),d==="error"&&i.jsxs("div",{className:D.errorMessage,style:{color:"#f87171",display:"flex",alignItems:"center",gap:"8px",fontWeight:"bold"},children:[i.jsx(pa,{size:20}),"Import Failed"]})]}),i.jsx("div",{className:D.divider}),i.jsx("div",{className:D.sectionHeader,children:i.jsx("h2",{style:{fontSize:"1.2rem",color:"#d4af37"},children:"Respaldo de Datos"})}),i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:"Exportar Datos"}),i.jsx("p",{children:"Descarga toda tu información como archivo JSON."})]}),i.jsxs("button",{className:D.primaryBtn,onClick:u,style:{background:"#d4af37",borderColor:"#d4af37",color:"#0a0a0a",display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(hi,{size:16}),m==="success"?"✓ Descargado":m==="error"?"Error":"Exportar"]})]}),i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:"Importar Datos"}),i.jsx("p",{children:"Restaura un respaldo previo (archivo JSON)."})]}),i.jsxs("button",{className:D.secondaryBtn,onClick:v,style:{display:"flex",alignItems:"center",gap:"8px"},children:[i.jsx(qi,{size:16}),f==="success"?"✓ Restaurado — Recargando...":f==="error"?"Error en archivo":"Importar"]})]}),i.jsx("div",{className:D.divider}),i.jsx("div",{className:D.sectionHeader,children:i.jsx("h2",{style:{fontSize:"1.2rem",color:"#ef4444"},children:"Danger Zone"})}),i.jsxs("div",{className:D.row,children:[i.jsxs("div",{className:D.label,children:[i.jsx("h3",{children:"Reset All Data"}),i.jsx("p",{children:"Delete all tasks, projects, and settings. This cannot be undone."})]}),y?i.jsxs("div",{style:{display:"flex",gap:"8px"},children:[i.jsx("button",{className:D.secondaryBtn,onClick:()=>{localStorage.clear(),window.location.reload()},style:{background:"#ef4444",color:"white",borderColor:"#ef4444"},children:"Yes, Wipe Everything"}),i.jsx("button",{className:D.secondaryBtn,onClick:()=>p(!1),children:"Cancel"})]}):i.jsx("button",{className:D.secondaryBtn,onClick:()=>p(!0),style:{color:"#ef4444",borderColor:"#ef4444"},children:"Reset App"})]})]})]})})},M$="_app_lvkcm_9",w$="_mainContainer_lvkcm_23",Uj={app:M$,mainContainer:w$};function L$(){const e=Xt(Q=>Q.loadProjects),t=Ze(Q=>Q.loadTasks),n=Sr(Q=>Q.loadGoals),a=io(Q=>Q.loadEntries),o=ML(Q=>Q.loadHistory);S.useEffect(()=>{e(),t(),n(),a(),o()},[e,t,n,a,o]);const[c,s]=S.useState(!1),[l,d]=S.useState("dashboard"),[h,y]=S.useState(""),[p,m]=S.useState(!1),[g,f]=S.useState(null),[x,L]=S.useState(null),[k,u]=S.useState(!1),[v,M]=S.useState({}),{selectedProjectId:j,projects:_}=Xt(),{tasks:b,setFilters:A,getTasksByProject:Z}=Ze();S.useEffect(()=>{A({search:h})},[h,A]);const w=j?Z(j):b,J=()=>{const Q=_.find(ae=>ae.id===j)||_.find(ae=>!ae.isArchived)||_[0];M({projectId:(Q==null?void 0:Q.id)||""}),L(null),u(!0)},T=Q=>{M(Q||{}),L(null),u(!0)},O=Q=>{const ae=b.find(q=>q.id===Q);ae&&(L(ae),u(!0))},Te=()=>{f(null),m(!0)},E=Q=>{f(Q),m(!0)};return i.jsxs("div",{className:Uj.app,children:[i.jsx(ST,{isCollapsed:c,onToggle:()=>s(!c),onNewProject:Te,onEditProject:E,currentView:l,onViewChange:d}),i.jsxs("div",{className:Uj.mainContainer,children:[i.jsx(_N,{onNewTask:J,searchQuery:h,onSearchChange:y}),i.jsxs(zN,{children:[l==="dashboard"&&i.jsx(sR,{onTaskClick:O}),l==="routines"&&i.jsx(_O,{}),l==="habits"&&i.jsx(vR,{onTaskClick:O,onCreateTask:()=>T({taskType:"habit"})}),l==="goals"&&i.jsx(TV,{}),l==="journal"&&i.jsx(RV,{}),l==="insights"&&i.jsx(eE,{}),l==="reviews"&&i.jsx(UO,{}),(l==="tasks"||l==="project")&&i.jsx(kI,{tasks:l==="project"?w:b,onTaskClick:O,showFilters:!0}),["calendar"].includes(l)&&i.jsxs("div",{style:{padding:"var(--space-8)",textAlign:"center",color:"var(--color-text-muted)"},children:[i.jsx("div",{style:{fontSize:"48px",marginBottom:"var(--space-4)"},children:"🚧"}),i.jsxs("h2",{style:{color:"var(--color-text-primary)",marginBottom:"var(--space-2)"},children:[l.charAt(0).toUpperCase()+l.slice(1)," Module"]}),i.jsx("p",{children:"Coming soon in Phase 2 & 3"})]}),l==="settings"&&i.jsx(x$,{onClose:()=>d("dashboard")})]})]}),i.jsx(KO,{}),i.jsx(r$,{}),i.jsx(xE,{project:g,isOpen:p,onClose:()=>{m(!1),f(null)}}),i.jsx(aH,{task:x,isOpen:k,onClose:()=>u(!1),initialData:v})]})}window.onerror=e=>{console.error("Startup Error:",e)};Iw.createRoot(document.getElementById("root")).render(i.jsx(Tt.StrictMode,{children:i.jsx(L$,{})}));
