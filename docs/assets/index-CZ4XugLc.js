var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function D(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,D(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+E(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(T,`$&/`)+`/`),D(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+E(a,u),c+=D(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+E(a,u++),c+=D(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return D(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function oe(e,t,n){if(e==null)return e;var r=[],i=0;return D(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function se(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},k={map:oe,forEach:function(e,t,n){oe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oe(e,function(){t++}),t},toArray:function(e){return oe(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=k,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:se}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,O)}catch(e){O(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,T=ie.port2;ie.port1.onmessage=re,w=function(){T.postMessage(null)}}else w=function(){_(re,0)};function E(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),T=Symbol.for(`react.memo_cache_sentinel`),E=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=E&&e[E]||e[`@@iterator`],typeof e==`function`?e:null)}var D=Symbol.for(`react.client.reference`);function oe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===D?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?oe(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var se=Array.isArray,O=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},le=[],ue=-1;function de(e){return{current:e}}function A(e){0>ue||(e.current=le[ue],le[ue]=null,ue--)}function j(e,t){ue++,le[ue]=e.current,e.current=t}var fe=de(null),pe=de(null),me=de(null),he=de(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}A(fe),j(fe,e)}function _e(){A(fe),A(pe),A(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(A(fe),A(pe)),he.current===e&&(A(he),Qf._currentValue=ce)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function M(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=k.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ft])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return Ee.call(Mt,e)?!0:Ee.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(se(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(bu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=h({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=h({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(h({},Nn,{dataTransfer:0})),In=Tn(h({},On,{relatedTarget:0})),Ln=Tn(h({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(h({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(h({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(h({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(h({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(h({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(h({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=Tn(h({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=Tn(h({},En,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=hn&&`CompositionEvent`in window,$n=null;hn&&`documentMode`in document&&($n=document.documentMode);var er=hn&&`TextEvent`in window&&!$n,tr=hn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=xn(),bn=yn=vn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Vt(Ct(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(hn){var vr;if(hn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,cn(e)),pn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=hn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ht(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};hn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),Ot(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=mi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=mi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=mi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function xi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:M(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:M(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-Ue(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var zi=null,N=null,P=!1,Bi=null,Vi=!1,Hi=Error(i(519));function Ui(e){throw Yi(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Hi}function Wi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Ui(e,!0)}function Gi(e){for(zi=e.return;zi;)switch(zi.tag){case 5:case 31:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:zi=zi.return}}function Ki(e){if(e!==zi)return!1;if(!P)return Gi(e),P=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&N&&Ui(e),Gi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));N=uf(e)}else t===27?(t=N,Zd(e.type)?(e=lf,lf=null,N=e):N=t):N=zi?cf(e.stateNode.nextSibling):null;return!0}function qi(){N=zi=null,P=!1}function Ji(){var e=Bi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Bi=null),e}function Yi(e){Bi===null?Bi=[e]:Bi.push(e)}var Xi=de(null),Zi=null,Qi=null;function $i(e,t,n){j(Xi,t._currentValue),t._currentValue=n}function ea(e){e._currentValue=Xi.current,A(Xi)}function ta(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function na(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ta(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ta(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ra(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&na(t,e,n,r),t.flags|=262144}function ia(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){Zi=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oa(e){return ca(Zi,e)}function sa(e,t){return Zi===null&&aa(e),ca(e,t)}function ca(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qi===null){if(e===null)throw Error(i(308));Qi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qi=Qi.next=t;return n}var la=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ua=t.unstable_scheduleCallback,da=t.unstable_NormalPriority,F={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new la,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&ua(da,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=dd(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=O.S;O.S=function(e,t){eu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=de(null);function Ca(){var e=Sa.current;return e===null?K.pooledCache:e}function wa(e,t){t===null?j(Sa,Sa.current):j(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:F._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case w:return t=Ma(t),f(e,t,n)}if(se(t)||ae(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===S)return f(e,sa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Ma(n),p(e,t,n,r)}if(se(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===S)return p(e,t,sa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Ma(r),m(e,t,n,r,i)}if(se(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===S)return m(e,t,n,sa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),P&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return P&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),P&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),P&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return P&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),P&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Ma(o),b(e,r,o,c)}if(se(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===S)return b(e,r,sa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=_a;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ga&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Wa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=de(null),ro=de(0);function io(e,t){e=Wl,j(ro,e),j(no,t),Wl=e|t.baseLanes}function ao(){j(ro,Wl),j(no,no.current)}function oo(){Wl=ro.current,A(no),A(ro)}var so=de(null),co=null;function lo(e){var t=e.alternate;j(I,I.current&1),j(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){j(I,I.current),j(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(j(I,I.current),j(so,e),co===null&&(co=e)):po(e)}function po(){j(I,I.current),j(so,so.current)}function mo(e){A(so),co===e&&(co=null),A(I)}var I=de(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,_o=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){O.H=Vs;var t=R!==null&&R.next!==null;if(go=0,_o=R=L=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&ia(e)&&(V=!0))}function Oo(e,t,n,r){L=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,_o=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}O.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=O.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}go=0,_o=R=L=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _o===null?L.memoizedState=_o=e:_o=_o.next=e,_o}function B(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=_o===null?L.memoizedState:_o.next;if(t!==null)_o=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},_o===null?L.memoizedState=_o=e:_o=_o.next=e}return _o}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=ja(Co,e,t),t=L,(_o===null?t.memoizedState:_o.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return oa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),R,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((go&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(V=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=L,a=B(),o=P;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((R||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||_o!==null&&_o.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||go&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Po(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function qo(e){var t=li(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,R,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};O.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=O.T,o={};O.T=o;try{var s=n(i,r),c=O.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),O.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(P){var n=K.formState;if(n!==null){a:{var r=L;if(P){if(N){b:{for(var i=N,a=Vi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){N=cf(i.nextSibling),r=i.data===`F!`;break a}}Ui(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,L,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,L,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),R,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=R;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Po(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();L.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&To(r,R.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(L.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Po(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||go&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),L.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return Or(n,t)?n:no.current===null?!(go&42)||go&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),L.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),Or(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=k.p;k.p=a!==0&&8>a?a:8;var o=O.T,s={};O.T=s,Ls(e,!1,t,n);try{var c=i(),l=O.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,ba(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{k.p=a,o!==null&&s.types!==null&&(o.types=s.types),O.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,ce,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:ce},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return oa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=qa(n);var r=Ja(t,e,n);r!==null&&(hu(r,t,n),Ya(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=ci(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),K===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===L||t!==null&&t===L}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Vs={readContext:oa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:oa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:oa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,L,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=No();if(P){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(P){var n=Ni,r=Mi;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,L)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:oa,use:Io,useCallback:xs,useContext:oa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),R.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),R,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:oa,use:Io,useCallback:xs,useContext:oa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return R===null?Cs(n,e,t):ws(n,R.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,R,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(hu(t,e,n),Ya(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ni(e)}function Zs(e){console.error(e)}function Qs(e){ni(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=qa(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ra(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(P)return t=so.current,t===null?(r!==Hi&&(t=Error(i(423),{cause:r}),Yi(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=tc(e.stateNode,r,a),Xa(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Hi&&(e=Error(i(422),{cause:r}),Yi(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return aa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(P&&s&&Ii(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),po(t)):(wa(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:F._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),fo(t),e!==null&&ra(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ha(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,mo(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(P){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(uo(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(V||ra(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,N=cf(s.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=pc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return aa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(P&&r&&Ii(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return aa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(P&&r&&Ii(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(aa(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=oa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?oa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=oa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Wa||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=oa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ia(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Wa||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ia(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return qi(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ta()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(I.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(P){if(a?lo(t):po(t),(e=N)?(e=rf(e,Vi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,zi=t,N=null)):e=null,e===null)throw Ui(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(lo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Yi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ra(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,N=cf(c.nextSibling),zi=t,P=!0,Bi=null,Vi=!1,e!==null&&Ri(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ta():(l=F._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ha(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ta(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=I.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,j(I,o),oc(e,t,r,n),r=P?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ra(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ia(e)))}function Nc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),$i(t,F,e.memoizedState.cache),qi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:$i(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ra(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(I,I.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:$i(t,F,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}}else V=!1,P&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=oe(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,$i(t,F,r),r!==o.cache&&na(t,[F],n,!0),Qa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=wi(Error(i(424)),t),Yi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(N=cf(e.firstChild),zi=t,P=!0,Bi=null,Vi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(qi(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:P||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[ft]=t,r[pt]=e,Pd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&P&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),zi=t,Vi=!0,a=N,Zd(t.type)?(lf=a,N=cf(r.firstChild)):N=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((a=r=N)&&(r=tf(r,t.type,t.pendingProps,Vi),r===null?a=!1:(t.stateNode=r,zi=t,N=cf(r.firstChild),Vi=!1,a=!0)),a||Ui(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&P&&((e=n=N)&&(n=nf(n,t.pendingProps,Vi),n===null?e=!1:(t.stateNode=n,zi=t,N=null,e=!0)),e||Ui(t)),null;case 13:return wc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$i(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,aa(t),a=oa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return aa(t),r=oa(F),e===null?(a=Ca(),a===null&&(a=K,o=fa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),$i(t,F,a)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,$i(t,F,r),r!==a.cache&&na(t,[F],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),$i(t,F,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Na=ka,Da}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Na=ka,Da}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!P)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ea(F),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ji())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=fe.current,Ki(t)?Wi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=fe.current,Ki(t))Wi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Ki(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ui(t,!0)}else e=Bd(e).createTextNode(r),e[ft]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ki(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mo(t),t):(mo(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else qi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Ji(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mo(t),t):(mo(t),null)}return mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ea(t.type),H(t),null;case 19:if(A(I),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return j(I,I.current&1|2),P&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!P)return H(t),null}else 2*je()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=I.current,j(I,a?n&1|2:n&1),P&&Pi(t,r.treeForkCount),e);case 22:case 23:return mo(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&A(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ea(F),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ea(F),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(mo(t),t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));qi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(I),null;case 4:return _e(),null;case 10:return ea(t.type),null;case 22:case 23:return mo(t),oo(),e!==null&&A(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ea(F),null;case 25:return null;default:return null}}function Hc(e,t){switch(Li(t),t.tag){case 3:ea(F),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&mo(t);break;case 13:mo(t);break;case 19:A(I);break;case 10:ea(t.type);break;case 22:case 23:mo(t),oo(),e!==null&&A(Sa);break;case 24:ea(F)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[pt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ft]=e,t[pt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=oa(F),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oa(F).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:O.T===null?lt():dd()}function mu(){if(Jl===0){if(!(J&536870912)||P){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912}return e=so.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),nt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-je(),10<a)){if(yu(r,t,Jl,!Vl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Ml(t,a,d);var m=(a&62914560)===a?$l-je():(a&4194048)===a?eu-je():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Qi=Zi=null,Mo(e),Ia=null,La=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Qe(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,oi(),n}function Cu(e,t){L=null,O.H=Vs,t===Ea||t===Oa?(t=Pa(),Y=3):t===Da?(t=Pa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,wi(t,e.current)))}function wu(){var e=so.current;return e===null?!0:(J&4194048)===J?co===null:(J&62914560)===J||J&536870912?e===co:!1}function Tu(){var e=O.H;return O.H=Vs,e===null?Vs:e}function Eu(){var e=O.A;return O.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&so.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Qi=Zi=null,G=r,O.H=i,O.A=a,q===null&&(K=null,J=0,oi()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=je()+500,Su(e,t)):Hl=Qe(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Aa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Aa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Qi=Zi=null,O.H=r,O.A=a,G=n,q===null?(K=null,J=0,oi(),X):0}function ju(){for(;q!==null&&!ke();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=_i(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Qi=Zi=null,Mo(t),Ia=null,La=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,wi(n,e.current)),q=null;return}t.flags&32768?(P||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,rt(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=O.T,O.T=null,a=k.p,k.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,k.p=a,O.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,k.p=r,O.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=O.T,O.T=null;var r=k.p;k.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,k.p=r,O.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ae();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=O.T,i=k.p,k.p=2,O.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{O.T=t,k.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=O.T,a=k.p;try{k.p=32>n?32:n,O.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{k.p=a,O.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=tc(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(nt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=wi(n,e),n=nc(2),r=Ja(t,n,2),r!==null&&(rc(n,r,t,e),nt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>je()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=et()),e=li(e,t),e!==null&&(nt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return De(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Ze(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=je(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),ct(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Ze(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?De(Ne,ad):od()})}function dd(){if(nd===0){var e=ga;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ei.length;hd++){var gd=ei[hd];ti(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Kr:case qr:case Jr:l=Ln;break;case Qr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c)){if(_r)v=Er;else{v=wr;var y=Cr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=mn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Pt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=k.d;k.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=wt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Tt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Tt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(hu(n,e,t),Ya(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=li(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=2,up(e,t,n,r)}finally{k.p=a,O.T=i}}function lp(e,t,n,r){var i=O.T;O.T=null;var a=k.p;try{k.p=8,up(e,t,n,r)}finally{k.p=a,O.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=je()+500,id(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=cn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=St(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[mt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:O,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[mt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()}))(),x={navHome:{fr:`Accueil`,en:`Home`,ar:`الرئيسية`},navAbout:{fr:`Qui sommes-nous ?`,en:`About Us`,ar:`من نحن`},navProjects:{fr:`Nos Projets`,en:`Our Projects`,ar:`مشاريعنا`},navNews:{fr:`Nouvelles`,en:`News`,ar:`الأخبار`},navGallery:{fr:`Galerie`,en:`Gallery`,ar:`المعرض`},navCommittees:{fr:`Comités & Partenaires`,en:`Committees & Partners`,ar:`اللجان والشركاء`},navDocuments:{fr:`Documents Officiels`,en:`Official Documents`,ar:`الوثائق الرسمية`},navContact:{fr:`Contact`,en:`Contact`,ar:`اتصل بنا`},navDonate:{fr:`Faire un Don`,en:`Make a Donation`,ar:`تبرع الآن`},navJoin:{fr:`Devenir Membre`,en:`Join Us`,ar:`الانضمام إلينا`},navMemberSpace:{fr:`Espace Membre`,en:`Member Space`,ar:`فضاء الأعضاء`},navAdminSpace:{fr:`Administration`,en:`Admin Panel`,ar:`الإدارة`},heroTitle:{fr:`Ensemble pour l'éducation et la solidarité de la jeunesse tchadienne`,en:`Together for the education and solidarity of Chadian youth`,ar:`معًا من أجل تعليم وتضامن الشباب التشادي`},heroSubtitle:{fr:`L'AJTES agit depuis 2022 pour offrir de meilleures opportunités d'apprentissage et développer l'entraide communautaire au Tchad.`,en:`AJTES acts since 2022 to provide better educational opportunities and build community solidarity in Chad.`,ar:`تعمل الجمعية منذ عام 2022 لتوفير فرص تعليمية أفضل وتعزيز التضامن المجتمعي في تشاد.`},btnDiscover:{fr:`Découvrir AJTES`,en:`Discover AJTES`,ar:`اكتشف الجمعية`},btnSupport:{fr:`Soutenir nos actions`,en:`Support Our Cause`,ar:`ادعم مبادراتنا`},btnBecomePartner:{fr:`Devenir Partenaire`,en:`Become a Partner`,ar:`كن شريكًا`},mainSlogan:{fr:`ÉDUQUER, SOLIDARISER ET DONNER À LA JEUNESSE TCHADIENNE LES MOYENS DE CONSTRUIRE SON AVENIR.`,en:`EDUCATING, UNITING, AND EMPOWERING CHADIAN YOUTH TO BUILD THEIR FUTURE.`,ar:`التعليم والتضامن والتمكين لشباب تشاد لبناء مستقبلهم.`},statCreationYear:{fr:`Année de création`,en:`Year Founded`,ar:`سنة التأسيس`},statProjects:{fr:`Projets réalisés & en cours`,en:`Projects Completed & Active`,ar:`المشاريع المنفذة والجارية`},statBeneficiaries:{fr:`Élèves & Bénéficiaires`,en:`Students & Beneficiaries`,ar:`الطلاب والمستفيدون`},statMembers:{fr:`Membres engagés`,en:`Committed Members`,ar:`الأعضاء المشاركون`},domainsTitle:{fr:`Nos Domaines d'Action`,en:`Our Fields of Action`,ar:`مجالات عملنا`},domainEdu:{fr:`Éducation & Écoles`,en:`Education & Schools`,ar:`التعليم والمدارس`},domainSolidarity:{fr:`Solidarité & Entraide`,en:`Solidarity & Assistance`,ar:`التضامن والدعم`},domainHum:{fr:`Action Humanitaire`,en:`Humanitarian Action`,ar:`العمل الإنساني`},domainEnv:{fr:`Environnement & Climat`,en:`Environment & Climate`,ar:`البيئة والمناخ`},domainCulture:{fr:`Culture & Patrimoine`,en:`Culture & Heritage`,ar:`الثقافة والتراث`},domainSport:{fr:`Sport & Jeunesse`,en:`Sport & Youth`,ar:`الرياضة والشباب`},domainReligion:{fr:`Valeurs & Éthique`,en:`Values & Ethics`,ar:`القيم والأخلاق`},domainDev:{fr:`Développement Communautaire`,en:`Community Development`,ar:`التنمية المجتمعية`},realizationsTitle:{fr:`Nos Réalisations Clés Sur le Terrain`,en:`Key Achievements on the Field`,ar:`إنجازاتنا الرئيسية على الميدان`},year2022Title:{fr:`2022 — Création de l'AJTES`,en:`2022 — Foundation of AJTES`,ar:`2022 — تأسيس الجمعية`},year2022Desc:{fr:`Lancement des premières activités d'entraide et de sensibilisation pour l'éducation.`,en:`Launch of first community support and education awareness activities.`,ar:`إطلاق أولى أنشطة التضامن والتوعية التعليمية.`},year2023Title:{fr:`2023 — Distribution au CEG`,en:`2023 — Distribution at CEG`,ar:`2023 — توزيع المستلزمات في الإعدادية`},year2023Desc:{fr:`Fournitures scolaires complètes distribuées aux élèves défavorisés.`,en:`Complete school kits distributed to underprivileged students.`,ar:`توزيع مستلزمات مدرسية كاملة على الطلاب المتعثرين.`},year2026Title:{fr:`2026 — Bureau administratif au CEG`,en:`2026 — Admin Office at CEG`,ar:`2026 — المبنى الإداري بالإعدادية`},year2026Desc:{fr:`Construction et équipement d'un bâtiment administratif de deux chambres.`,en:`Construction and equipping of a 2-room administrative office building.`,ar:`بناء وتجهيز مبنى إداري مكون من غرفتين.`},footerSlogan:{fr:`Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES) — Créée en 2022.`,en:`Association of Young Chadians for Education and Solidarity (AJTES) — Founded in 2022.`,ar:`جمعية الشباب التشاديين من أجل التعليم والتضامن (AJTES) — تأسست عام 2022.`},donateTitle:{fr:`Soutenir l'AJTES — Faire un Don`,en:`Support AJTES — Make a Donation`,ar:`دعم الجمعية — تقديم تبرع`},selectAmount:{fr:`Choisissez ou saisissez le montant (FCFA)`,en:`Select or enter amount (FCFA)`,ar:`اختر أو أدخل المبلغ (فرنك إفريقي)`},customAmount:{fr:`Montant libre en FCFA`,en:`Custom amount in FCFA`,ar:`مبلغ آخر بالفرنك الإفريقي`},selectPayment:{fr:`Moyen de paiement`,en:`Payment method`,ar:`طريقة الدفع`},airtelMoney:{fr:`Airtel Money Tchad`,en:`Airtel Money Chad`,ar:`إيرتل ماني تشاد`},moovAfrica:{fr:`Moov Africa Tchad`,en:`Moov Africa Chad`,ar:`موف إفريقيا تشاد`},bankCard:{fr:`Carte Bancaire (Visa/Mastercard)`,en:`Bank Card`,ar:`بطاقة مصرفية`},donateNowBtn:{fr:`Valider et effectuer le don`,en:`Submit Donation`,ar:`تأكيد التبرع`},receiptTitle:{fr:`Reçu Officiel de Don — AJTES`,en:`Official Donation Receipt — AJTES`,ar:`إيصال التبرع الرسمي — الجمعية`},registerTitle:{fr:`Rejoindre l'AJTES — Adhésion`,en:`Join AJTES — Membership`,ar:`الانضمام إلى الجمعية — طلب العضوية`},memberTypeActive:{fr:`Membre Actif`,en:`Active Member`,ar:`عضو فعال`},memberTypeSymp:{fr:`Membre Sympathisant`,en:`Supporting Member`,ar:`عضو محب`},memberTypeVol:{fr:`Bénévole`,en:`Volunteer`,ar:`متطوع`},memberTypePart:{fr:`Membre Partenaire`,en:`Partner Member`,ar:`عضو شريك`}},ee=(0,_.createContext)(void 0),S=({children:e})=>{let[t,n]=(0,_.useState)(`fr`),r=t===`ar`;return(0,_.useEffect)(()=>{document.documentElement.dir=r?`rtl`:`ltr`,document.documentElement.lang=t},[t,r]),(0,b.jsx)(ee.Provider,{value:{language:t,setLanguage:n,t:e=>x[e]?x[e][t]||x[e].fr:e,isRTL:r},children:e})},C=()=>{let e=(0,_.useContext)(ee);if(!e)throw Error(`useLanguage must be used within a LanguageProvider`);return e},te=[{id:`proj-1`,title:{fr:`Construction du bureau administratif au CEG`,en:`Construction of the Administrative Office at CEG`,ar:`بناء المكتب الإداري في الإعدادية`},description:{fr:`Construction d'un bâtiment administratif moderne de deux chambres pour améliorer les conditions de travail des enseignants et la gestion du Collège d'Enseignement Général (CEG).`,en:`Construction of a modern two-room administrative building to improve working conditions for teachers and management at CEG.`,ar:`بناء مبنى إداري حديث يتكون من غرفتين لتحسين ظروف عمل المعلمين وإدارة الإعدادية.`},category:`education`,location:`Tchad`,startDate:`2026-01-10`,endDate:`2026-06-30`,objective:{fr:`Doter le CEG d'infrastructures administratives décentes et fonctionnelles.`,en:`Provide CEG with decent and functional administrative infrastructure.`,ar:`تزويد إعدادية نانغاسو ببنية تحتية إدارية لائقة وفعالة.`},targetBudget:65e5,raisedBudget:65e5,beneficiariesCount:450,status:`realise`,imageUrl:`./images/IMG-20260813-WA0106.jpg`,results:{fr:`Bâtiment livré et inauguré avec succès. Deux bureaux équipés pour l'administration du collège.`,en:`Building successfully delivered and inaugurated. Two fully equipped offices for school administration.`,ar:`تم تسليم المبنى وافتتاحه بنجاح. مكتبان مجهزان لإدارة الإعدادية.`},featured:!0,year:2026},{id:`proj-2`,title:{fr:`Distribution de fournitures scolaires au CEG`,en:`Distribution of School Supplies at CEG`,ar:`توزيع المستلزمات المدرسية في إعدادية نانغاسو`},description:{fr:`Octroi de kits scolaires complets (cahiers, stylos, livres, règles, sacs) à plus de 300 élèves vulnérables pour favoriser la scolarisation et prévenir l'abandon scolaire.`,en:`Distribution of complete school kits (notebooks, pens, books, backpacks) to over 300 vulnerable students to encourage schooling and prevent dropout.`,ar:`تقديم حقائب مدرسية كاملة لأكثر من 300 طالب من العائلات المتعثرة لتعزيز التعليم ورعاية الطلاب.`},category:`education`,location:`Tchad`,startDate:`2023-09-15`,endDate:`2023-10-30`,objective:{fr:`Soutenir l'accès égalitaire à l'éducation pour les jeunes défavorisés.`,en:`Support equal access to education for underprivileged youth.`,ar:`دعم الوصول المساواة للتعليم للشباب الفئات الهشة.`},targetBudget:25e5,raisedBudget:25e5,beneficiariesCount:320,status:`realise`,imageUrl:`./images/IMG-20260813-WA0142.jpg`,results:{fr:`320 élèves équipés en kits scolaires pour toute l'année académique 2023-2024.`,en:`320 students equipped with school supplies for the full academic year 2023-2024.`,ar:`تم تزويد 320 طالباً بالأدوات المدرسية للعام الدراسي الكامل 2023-2024.`},featured:!0,year:2023},{id:`proj-3`,title:{fr:`Campagne de reboisement et d'éco-citoyenneté en milieu scolaire`,en:`Reforestation and Eco-Citizenship School Campaign`,ar:`حملة التشجير والمواطنة البيئية في المدارس`},description:{fr:`Plantation de 500 arbres d'ombrage et fruitiers dans 5 établissements scolaires et ateliers de sensibilisation à la désertification et protection de l'environnement.`,en:`Planting of 500 shade and fruit trees across 5 schools alongside awareness workshops on desertification and environmental protection.`,ar:`غرس 500 شجرة مظلة وفاكهة في 5 مدارس وتنظيم ورش توعية بحماية البيئة ومكافحة التصحر.`},category:`environnement`,location:`N'Djamena & Mandoul, Tchad`,startDate:`2026-07-01`,endDate:`2026-11-30`,objective:{fr:`Lutter contre l'avancée du désert et inculquer la conscience écologique à la jeunesse.`,en:`Combat desertification and foster ecological awareness among young people.`,ar:`مكافحة التصحر وغرس الوعي البيئي لدى الشباب.`},targetBudget:4e6,raisedBudget:28e5,beneficiariesCount:1500,status:`en_cours`,imageUrl:`./images/IMG-20260813-WA0113.jpg`,featured:!0,year:2026},{id:`proj-4`,title:{fr:`Ateliers d'Orientation & Soutien Scolaire`,en:`Academic Guidance & Tutoring Workshops`,ar:`ورش التوجيه والدعم المدرسي`},description:{fr:`Organisation de sessions gratuites de soutien scolaire en mathématiques, sciences et français, couplées à un accompagnement d'orientation pour les candidats aux examens.`,en:`Organization of free tutoring in math, science, and French, alongside academic orientation sessions for exam candidates.`,ar:`تنظيم جلسات مجانية للدعم المدرسي والتوجيه الأكاديمي للطلاب المقبلين على الامتحانات.`},category:`education`,location:`N'Djamena & Tchad`,startDate:`2026-10-01`,endDate:`2027-05-30`,objective:{fr:`Améliorer les taux de réussite aux examens nationaux et concours.`,en:`Improve success rates in national examinations.`,ar:`تحسين نسب النجاح في الامتحانات والمسابقات الوطنية.`},targetBudget:35e5,raisedBudget:12e5,beneficiariesCount:800,status:`en_projet`,imageUrl:`./images/IMG-20260813-WA0129.jpg`,featured:!1,year:2026}],ne=[{id:`news-1`,title:{fr:`Communiqué Officiel : Inauguration réussie du bureau administratif du CEG`,en:`Official Press Release: Successful Inauguration of CEG Administrative Building`,ar:`بيان رسمي: افتتاح المبنى الإداري للإعدادية بنجاح`},summary:{fr:`L'AJTES annonce la finalisation et la remise officielle des clés du bâtiment administratif composé de deux bureaux équipés pour la direction du collège.`,en:`AJTES announces the completion and official handover of the administrative building comprising two equipped offices for school management.`,ar:`تعلن الجمعية عن اكتمال وتسليم مفاتيح المبنى الإداري مكون من غرفتين مجهزتين للإدارة.`},content:{fr:`L'Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES) a le plaisir d'informer l'opinion publique, ses partenaires institutionnels et la communauté éducative de la réception officielle du bureau administratif du Collège d'Enseignement Général (CEG).

Réalisé grâce à la mobilisation des membres et donateurs, ce bâtiment moderne de deux chambres offrira aux enseignants et à l'administration scolaire des conditions de travail décentes, sécurisées et propices au suivi des élèves.

Le Bureau Exécutif de l'AJTES réitère son engagement ferme à poursuivre ses actions concrètes en faveur de la jeunesse et de la scolarisation au Tchad.`,en:`The Association of Young Chadians for Education and Solidarity (AJTES) is pleased to inform the public, institutional partners, and the educational community of the official reception of the CEG administrative office.`,ar:`تعلن جمعية الشباب التشاديين من أجل التعليم والتضامن عن تسليم المكتب الإداري بنجاح.`},category:`communique`,author:`Bureau Exécutif AJTES`,publishDate:`2026-08-15`,imageUrl:`./images/IMG-20260813-WA0106.jpg`,featured:!0,type:`communique`},{id:`news-2`,title:{fr:`Lancement de la grande campagne d'éco-citoyenneté et de salubrité 2026`,en:`Launch of the 2026 Eco-Citizenship and Sanitation Campaign`,ar:`إطلاق حملة المواطنة البيئية والنظافة لعام 2026`},summary:{fr:`Mobilisation des comités de jeunes pour l'assainissement et la plantation d'arbres dans les établissements scolaires du Tchad.`,en:`Mobilization of youth committees for sanitation and tree planting across Chadian schools.`,ar:`تعبئة لجان الشباب للنظافة وغرس الأشجار في المدارس.`},content:{fr:`Dans le cadre de la mise en œuvre de ses objectifs environnementaux (Article 5 des Statuts), la Commission Éco-Citoyenneté de l'AJTES a officiellement lancé sa campagne de reboisement et d'assainissement en milieu scolaire.

Plus de 500 arbres d'ombrage seront plantés dans la cour des établissements cibles et des séances de sensibilisation à la propreté urbaine sont dispensées par les bénévoles de l'association.`,en:`As part of its environmental goals, the AJTES Eco-Citizenship Commission has launched its school reforestation drive.`,ar:`في إطار تحقيق أهدافها البيئية، أطلقت الجمعية حملة غرس الأشجار في المدارس.`},category:`environnement`,author:`Commission Environnement AJTES`,publishDate:`2026-08-20`,imageUrl:`./images/IMG-20260813-WA0113.jpg`,featured:!0,type:`article`},{id:`news-3`,title:{fr:`Bilan des kits scolaires distribués et préparation de la rentrée 2026-2027`,en:`Assessment of Distributed School Supplies & Preparation for 2026-2027 Term`,ar:`تقرير الحقائب المدرسية الموزعة والتحضير للعام الدراسي الجديد`},summary:{fr:`Retour sur l'impact de la distribution de fournitures aux 320 élèves vulnérables et ouverture des inscriptions pour les cours de soutien gratuits.`,en:`Review of the impact of school supplies distributed to 320 vulnerable students and opening of registration for free tutoring.`,ar:`تقييم أثر توزيع الحقائب المدرسية على 320 طالباً وفتح التسجيل لدروس الدعم.`},content:{fr:`Grâce au soutien des membres et donateurs, plus de 320 élèves défavorisés ont bénéficié de kits scolaires complets au cours des campagnes précédentes. L'AJTES prépare actuellement la nouvelle phase d'orientation académique et de soutien scolaire gratuit pour accompagner les candidats aux examens d'État.`,en:`Thanks to our donors, 320 students received school supplies. AJTES is preparing the next phase of academic support.`,ar:`بفضل دعم المتبرعين والأعضاء، استفاد أكثر من 320 طالباً من المستلزمات المدرسية.`},category:`education`,author:`Comité Éducation AJTES`,publishDate:`2026-08-28`,imageUrl:`./images/IMG-20260813-WA0142.jpg`,featured:!1,type:`article`}],re=[{id:`evt-1`,title:{fr:`Forum de la Jeunesse Tchadienne pour l'Éducation et le Développement`,en:`Chadian Youth Forum on Education & Development`,ar:`منتدى الشباب التشادي للتعليم والتنمية`},description:{fr:`Grand rassemblement annuel des membres et partenaires de l'AJTES pour débattre des défis éducatifs et planifier les actions de terrain 2027.`,en:`Annual gathering of AJTES members and partners to discuss educational challenges and plan 2027 field actions.`,ar:`التجمع السنوي الكبير لأعضاء الجمعية والشركاء لمناقشة تحديات التعليم وتخطيط أنشطة 2027.`},date:`2026-10-15`,time:`09:00 - 16:30`,location:`Palais des Arts et de la Culture, N'Djamena`,organizer:`Bureau National AJTES`,imageUrl:`./images/IMG-20260813-WA0130.jpg`,maxAttendees:200,registeredCount:84},{id:`evt-2`,title:{fr:`Journée Verte : Grand Salongo et Reboisement Communautaire`,en:`Green Day: Community Cleaning & Reforestation`,ar:`اليوم الأخضر: حملة النظافة والتشجير المجتمعي`},description:{fr:`Action collective de salubrité et de plantation d'arbres réunissant les volontaires de l'AJTES et les habitants du quartier.`,en:`Collective sanitation and tree-planting drive reuniting AJTES volunteers and neighbourhood residents.`,ar:`حملة جماعية للنظافة وغرس الأشجار تجمع متطوعي الجمعية وسكان الحي.`},date:`2026-09-05`,time:`07:30 - 12:00`,location:`Établissements Scolaires, Tchad`,organizer:`Commission Environnement AJTES`,imageUrl:`./images/IMG-20260813-WA0132.jpg`,maxAttendees:100,registeredCount:62}],w=[{id:`doc-statuts`,title:{fr:`Statuts de l'Association AJTES`,en:`Statutes of the AJTES Association`,ar:`النظام الأساسي لجمعية تأجتس`},type:`statuts`,description:{fr:`Texte officiel fondateur définissant la création en 2022, les objectifs, l'organisation, les organes de gouvernance et les règles de fonctionnement de l'AJTES.`,en:`Official founding document establishing the creation in 2022, objectives, governance structure, and operating rules of AJTES.`,ar:`الوثيقة التأسيسية الرسمية التي تحدد التأسيس في 2022 والأهداف والأجهزة الإدارية وقواعد عمل الجمعية.`},lastUpdated:`2022-04-12`,contentMarkdown:{fr:`### STATUTS DE L'ASSOCIATION DES JEUNES TCHADIENS POUR L’ÉDUCATION ET LA SOLIDARITÉ (AJTES)

**TITRE I : CRÉATION, DÉNOMINATION, SIÈGE ET DURÉE**
- **Article 1 :** Il est formé entre les adhérents aux présents statuts une association régie par la législation en vigueur en République du Tchad, dénommée *Association des Jeunes Tchadiens pour l’Éducation et la Solidarité*, en sigle **AJTES**.
- **Article 2 :** L'association a été créée en l'an **2022**. Sa durée est illimitée.
- **Article 3 :** Le siège social est établi à N'Djamena, Tchad, avec possibilité d'antennes régionales et comités locaux.

**TITRE II : OBJECTIFS ET DOMAINES D'ACTION**
- **Article 4 :** L'AJTES a pour mission de contribuer au développement et à l'épanouissement de la jeunesse tchadienne.
- **Article 5 :** Ses domaines d'intervention prioritaires sont :
  1. Éducation et promotion de la scolarisation.
  2. Construction et rénovation d'infrastructures scolaires.
  3. Actions environnementales et éco-citoyennes (reboisement, salubrité).
  4. Entraide, solidarité et intégration des jeunes défavorisés.`,en:`### STATUTES OF THE ASSOCIATION OF YOUNG CHADIANS FOR EDUCATION AND SOLIDARITY (AJTES)

**TITLE I: CREATION, NAME, HEADQUARTERS AND DURATION**
- **Article 1:** An association governed by Chadian law is hereby established, named *Association des Jeunes Tchadiens pour l’Éducation et la Solidarité* (**AJTES**).
- **Article 2:** The association was created in **2022**. Its duration is unlimited.
- **Article 3:** Headquarters are located in N'Djamena, Chad.`,ar:`### النظام الأساسي لجمعية الشباب التشاديين من أجل التعليم والتضامن (AJTES)

**الباب الأول: التأسيس والتسمية والمقر**
- **المادة 1:** تؤسس بين الأعضاء جمعية خاضعة للقوانين النافذة في جمهورية تشاد باسم *جمعية الشباب التشاديين من أجل التعليم والتضامن* (**AJTES**).
- **المادة 2:** تأسست الجمعية عام **2022** ومدتها غير محدودة.`}},{id:`doc-reglement`,title:{fr:`Règlement Intérieur Officiel`,en:`Official Internal Regulations`,ar:`النظام الداخلي الرسمي`},type:`reglement_interieur`,description:{fr:`Règles détaillées de fonctionnement interne, droits et devoirs des membres, procédures de vote, gestion financière et règles disciplinaires.`,en:`Detailed rules for internal operation, member rights and duties, voting procedures, and financial management.`,ar:`القواعد التفصيلية للعمل الداخلي وحقوق وواجبات الأعضاء والإجراءات المالية والإنضباطية.`},lastUpdated:`2022-05-01`,contentMarkdown:{fr:`### RÈGLEMENT INTÉRIEUR DE L'AJTES

**CHAPITRE I : DROITS ET DEVOIRS DES MEMBRES**
- **Article 1 :** Tout membre actif a le droit de participer aux Assemblées Générales, d'exprimer son opinion et de participer aux votes.
- **Article 2 :** Les membres s'engagent à respecter les valeurs fondamentales de l'AJTES : Éducation, Solidarité, Engagement, Transparence et Respect.
- **Article 3 :** Chaque membre doit s'acquitter régulièrement de sa cotisation associative.

**CHAPITRE II : FONCTIONNEMENT DES COMITÉS ET COMMISSIONS**
- **Article 4 :** Les comités régionaux et commissions thématiques travaillent sous la supervision du Bureau National.
- **Article 5 :** Le responsable technique et maintenance (Salomon) assure la gestion des outils numériques et des données.

**CHAPITRE III : GESTION DES FONDS ET DONS**
- **Article 6 :** Tous les dons reçus (Airtel Money, Moov Africa, virement bancaire) sont affectés en toute transparence aux projets désignés.`,en:`### INTERNAL REGULATIONS OF AJTES

**CHAPTER I: MEMBER RIGHTS & RESPONSIBILITIES**
- **Article 1:** Every active member has the right to attend meetings and vote.
- **Article 2:** Members commit to uphold values of Education, Solidarity, Integrity and Transparency.`,ar:`### النظام الداخلي لجمعية تأجتس

**الفصل الأول: حقوق وواجبات الأعضاء**
- **المادة 1:** يحق لكل عضو فعال المشاركة في الجمعيات العمومية والتصويت.
- **المادة 2:** يلتزم الأعضاء بقيم التعليم والتضامن والشفافية.`}}],ie=[{id:`media-photo-1`,title:{fr:`Cérémonie officielle d'inauguration du bureau administratif`,en:`Cérémonie officielle d'inauguration du bureau administratif`,ar:`Cérémonie officielle d'inauguration du bureau administratif`},type:`photo`,url:`./images/IMG-20260813-WA0083.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-2`,title:{fr:`Vue du chantier et maçonnerie du bureau du CEG`,en:`Vue du chantier et maçonnerie du bureau du CEG`,ar:`Vue du chantier et maçonnerie du bureau du CEG`},type:`photo`,url:`./images/IMG-20260813-WA0085.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-3`,title:{fr:`Remise d'équipements et mobilier de bureau aux responsables scolaires`,en:`Remise d'équipements et mobilier de bureau aux responsables scolaires`,ar:`Remise d'équipements et mobilier de bureau aux responsables scolaires`},type:`photo`,url:`./images/IMG-20260813-WA0086.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-4`,title:{fr:`Contrôle technique et suivi de chantier par l'équipe AJTES`,en:`Contrôle technique et suivi de chantier par l'équipe AJTES`,ar:`Contrôle technique et suivi de chantier par l'équipe AJTES`},type:`photo`,url:`./images/IMG-20260813-WA0088.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-5`,title:{fr:`Inspection des finitions des deux bureaux du CEG`,en:`Inspection des finitions des deux bureaux du CEG`,ar:`Inspection des finitions des deux bureaux du CEG`},type:`photo`,url:`./images/IMG-20260813-WA0092.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-6`,title:{fr:`Remise symbolique des clés du bâtiment au proviseur du CEG`,en:`Remise symbolique des clés du bâtiment au proviseur du CEG`,ar:`Remise symbolique des clés du bâtiment au proviseur du CEG`},type:`photo`,url:`./images/IMG-20260813-WA0093.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-7`,title:{fr:`Bâtiment administratif achevé du CEG (Projet phare 2026)`,en:`Bâtiment administratif achevé du CEG (Projet phare 2026)`,ar:`Bâtiment administratif achevé du CEG (Projet phare 2026)`},type:`photo`,url:`./images/IMG-20260813-WA0106.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-8`,title:{fr:`Campagne d'éco-citoyenneté et reboisement de la cour du collège`,en:`Campagne d'éco-citoyenneté et reboisement de la cour du collège`,ar:`Campagne d'éco-citoyenneté et reboisement de la cour du collège`},type:`photo`,url:`./images/IMG-20260813-WA0113.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-9`,title:{fr:`Photo officielle des membres du Bureau National de l'AJTES`,en:`Photo officielle des membres du Bureau National de l'AJTES`,ar:`Photo officielle des membres du Bureau National de l'AJTES`},type:`photo`,url:`./images/IMG-20260813-WA0123.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-10`,title:{fr:`Mobilisation des jeunes volontaires et bénévoles AJTES`,en:`Mobilisation des jeunes volontaires et bénévoles AJTES`,ar:`Mobilisation des jeunes volontaires et bénévoles AJTES`},type:`photo`,url:`./images/IMG-20260813-WA0125.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-11`,title:{fr:`Atelier d'orientation académique et soutien aux élèves`,en:`Atelier d'orientation académique et soutien aux élèves`,ar:`Atelier d'orientation académique et soutien aux élèves`},type:`photo`,url:`./images/IMG-20260813-WA0129.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-12`,title:{fr:`Assemblée Générale annuelle des adhérents et sympathisants`,en:`Assemblée Générale annuelle des adhérents et sympathisants`,ar:`Assemblée Générale annuelle des adhérents et sympathisants`},type:`photo`,url:`./images/IMG-20260813-WA0130.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-13`,title:{fr:`Journée citoyenne de salubrité et assainissement public`,en:`Journée citoyenne de salubrité et assainissement public`,ar:`Journée citoyenne de salubrité et assainissement public`},type:`photo`,url:`./images/IMG-20260813-WA0132.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-14`,title:{fr:`Cérémonie de remise de fournitures et récompenses aux élèves (2023)`,en:`Cérémonie de remise de fournitures et récompenses aux élèves (2023)`,ar:`Cérémonie de remise de fournitures et récompenses aux élèves (2023)`},type:`photo`,url:`./images/IMG-20260813-WA0140.jpg`,year:2023,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-15`,title:{fr:`Distribution de kits scolaires complets aux élèves vulnérables`,en:`Distribution de kits scolaires complets aux élèves vulnérables`,ar:`Distribution de kits scolaires complets aux élèves vulnérables`},type:`photo`,url:`./images/IMG-20260813-WA0142.jpg`,year:2023,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-16`,title:{fr:`Concertation avec le corps enseignant du CEG`,en:`Concertation avec le corps enseignant du CEG`,ar:`Concertation avec le corps enseignant du CEG`},type:`photo`,url:`./images/IMG-20260813-WA0143.jpg`,year:2023,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-17`,title:{fr:`Séance de sensibilisation des familles sur l'importance de l'éducation`,en:`Séance de sensibilisation des familles sur l'importance de l'éducation`,ar:`Séance de sensibilisation des familles sur l'importance de l'éducation`},type:`photo`,url:`./images/IMG-20260813-WA0146.jpg`,year:2023,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-18`,title:{fr:`Photo de clôture d'action de terrain des bénévoles locaux`,en:`Photo de clôture d'action de terrain des bénévoles locaux`,ar:`Photo de clôture d'action de terrain des bénévoles locaux`},type:`photo`,url:`./images/IMG-20260813-WA0151.jpg`,year:2023,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-19`,title:{fr:`Séance d'entraide et soutien éducatif aux élèves`,en:`Séance d'entraide et soutien éducatif aux élèves`,ar:`Séance d'entraide et soutien éducatif aux élèves`},type:`photo`,url:`./images/IMG-20260816-WA0051.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-20`,title:{fr:`Rencontre et échanges avec les comités régionaux AJTES`,en:`Rencontre et échanges avec les comités régionaux AJTES`,ar:`Rencontre et échanges avec les comités régionaux AJTES`},type:`photo`,url:`./images/IMG-20260816-WA0058.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-21`,title:{fr:`Atelier de sensibilisation environnementale en milieu scolaire`,en:`Atelier de sensibilisation environnementale en milieu scolaire`,ar:`Atelier de sensibilisation environnementale en milieu scolaire`},type:`photo`,url:`./images/IMG-20260816-WA0068.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-22`,title:{fr:`Concertation avec les responsables communautaires et locaux`,en:`Concertation avec les responsables communautaires et locaux`,ar:`Concertation avec les responsables communautaires et locaux`},type:`photo`,url:`./images/IMG-20260816-WA0072.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-23`,title:{fr:`Réunion de planification stratégique du bureau exécutif`,en:`Réunion de planification stratégique du bureau exécutif`,ar:`Réunion de planification stratégique du bureau exécutif`},type:`photo`,url:`./images/IMG-20260819-WA0144.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-24`,title:{fr:`Action de solidarité et accompagnement sur le terrain`,en:`Action de solidarité et accompagnement sur le terrain`,ar:`Action de solidarité et accompagnement sur le terrain`},type:`photo`,url:`./images/IMG-20260819-WA0156.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-25`,title:{fr:`Mobilisation citoyenne des jeunes pour la rentrée scolaire`,en:`Mobilisation citoyenne des jeunes pour la rentrée scolaire`,ar:`Mobilisation citoyenne des jeunes pour la rentrée scolaire`},type:`photo`,url:`./images/IMG-20260819-WA0189.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-26`,title:{fr:`Distribution de matériel et équipements pédagogiques aux écoles`,en:`Distribution de matériel et équipements pédagogiques aux écoles`,ar:`Distribution de matériel et équipements pédagogiques aux écoles`},type:`photo`,url:`./images/IMG-20260819-WA0196.jpg`,year:2026,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-27`,title:{fr:`Rassemblement et fraternité des membres actifs AJTES`,en:`Rassemblement et fraternité des membres actifs AJTES`,ar:`Rassemblement et fraternité des membres actifs AJTES`},type:`photo`,url:`./images/IMG-20260819-WA0213.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-28`,title:{fr:`Session de travail de l'équipe technique et maintenance`,en:`Session de travail de l'équipe technique et maintenance`,ar:`Session de travail de l'équipe technique et maintenance`},type:`photo`,url:`./images/IMG-20260819-WA0237.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-29`,title:{fr:`Événement culturel et festif de la jeunesse AJTES`,en:`Événement culturel et festif de la jeunesse AJTES`,ar:`Événement culturel et festif de la jeunesse AJTES`},type:`photo`,url:`./images/IMG-20260819-WA0246.jpg`,year:2026,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-30`,title:{fr:`Mission solidaire et écoute des besoins communautaires`,en:`Mission solidaire et écoute des besoins communautaires`,ar:`Mission solidaire et écoute des besoins communautaires`},type:`photo`,url:`./images/IMG_20250119_163228_691.jpg`,year:2025,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-31`,title:{fr:`Échanges participatifs pour le plan d'action de développement`,en:`Échanges participatifs pour le plan d'action de développement`,ar:`Échanges participatifs pour le plan d'action de développement`},type:`photo`,url:`./images/IMG_20250119_163253_600.jpg`,year:2025,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-32`,title:{fr:`Soutien éducatif et animation culturelle avec les jeunes`,en:`Soutien éducatif et animation culturelle avec les jeunes`,ar:`Soutien éducatif et animation culturelle avec les jeunes`},type:`photo`,url:`./images/IMG_20250119_163312_501.jpg`,year:2025,category:`Photos Officielles`,location:`Tchad`},{id:`media-photo-33`,title:{fr:`Réunion de travail du comité technique sur les infrastructures`,en:`Réunion de travail du comité technique sur les infrastructures`,ar:`Réunion de travail du comité technique sur les infrastructures`},type:`photo`,url:`./images/IMG_20250119_163314_691.jpg`,year:2025,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-34`,title:{fr:`Grand forum des jeunes engagés pour la solidarité`,en:`Grand forum des jeunes engagés pour la solidarité`,ar:`Grand forum des jeunes engagés pour la solidarité`},type:`photo`,url:`./images/IMG_20250119_163339_512.jpg`,year:2025,category:`Photos Officielles`,location:`N'Djamena`},{id:`media-photo-35`,title:{fr:`Rassemblement et bilan annuel des activités de l'AJTES`,en:`Rassemblement et bilan annuel des activités de l'AJTES`,ar:`Rassemblement et bilan annuel des activités de l'AJTES`},type:`photo`,url:`./images/IMG_20250119_163427_776.jpg`,year:2025,category:`Photos Officielles`,location:`N'Djamena`}],T=[{id:`com-1`,name:{fr:`Bureau National d'Exécution`,en:`National Executive Board`,ar:`المكتب التنفيذي الوطني`},description:{fr:`Organe de direction et de gestion quotidienne de l'AJTES à l'échelle nationale.`,en:`Governing body for day-to-day management of AJTES nationally.`,ar:`الهيئة القيادية والتنفيذية اليومية على المستوى الوطني.`},leader:`Présidence AJTES`,membersCount:7,region:`N'Djamena (Siège)`,imageUrl:`./images/IMG-20260813-WA0123.jpg`},{id:`com-2`,name:{fr:`Commission Éducation & Établissements Scolaires`,en:`Education & Schools Commission`,ar:`لجنة التعليم والمؤسسات المدرسية`},description:{fr:`Chargée de l'évaluation des besoins des écoles et du suivi des projets éducatifs.`,en:`In charge of school needs assessment and educational projects oversight.`,ar:`المكلفة بتقييم احتياجات المدارس ومتابعة المشاريع التعليمية.`},leader:`Responsable Commission Éducation`,membersCount:12,region:`Logone & Régions`,imageUrl:`./images/IMG-20260813-WA0106.jpg`},{id:`com-3`,name:{fr:`Commission Environnement & Salubrité`,en:`Environment & Sanitation Commission`,ar:`لجنة البيئة والنظافة`},description:{fr:`Organise les campagnes de reboisement, de salubrité et de sensibilisation écologique.`,en:`Organizes reforestation campaigns, cleaning drives, and ecological awareness.`,ar:`تنظم حملات التشجير والنظافة والتوعية البيئية.`},leader:`Responsable Environnement`,membersCount:15,region:`Multi-régions`,imageUrl:`./images/IMG-20260813-WA0113.jpg`}],E=[{id:`part-1`,name:`Inspection Départementale de l'Éducation Nationale`,type:`institution`,logoUrl:`./images/IMG-20260813-WA0143.jpg`,description:{fr:`Partenaire institutionnel public accompagnant les projets scolaires au niveau local.`,en:`Public institutional partner supporting local school infrastructure projects.`,ar:`شريك مؤسسي حكومي يدعم المشاريع المدرسية.`}},{id:`part-2`,name:`Association Solidarité`,type:`ong`,logoUrl:`./images/IMG-20260813-WA0151.jpg`,description:{fr:`ONG partenaire pour le développement local et la mobilisation communautaire.`,en:`Partner NGO for local development and community engagement.`,ar:`منظمة غير حكومية شريكة للتنمية المحلية.`}}],ae=[{id:`don-101`,donorName:`Moussa Mahamat`,donorEmail:`moussa.m@example.com`,amount:5e4,projectId:`proj-1`,projectTitle:`Construction du bureau administratif au CEG`,paymentMethod:`airtel_money`,reference:`AJTES-DON-88421`,status:`succes`,date:`2026-07-28`},{id:`don-102`,donorName:`Fatimé Abakar`,donorEmail:`fatime.abakar@example.com`,amount:25e3,projectId:`proj-3`,projectTitle:`Campagne de reboisement et d'éco-citoyenneté`,paymentMethod:`moov_africa`,reference:`AJTES-DON-99104`,status:`succes`,date:`2026-08-05`}],D=[{id:`usr-admin-salomon`,name:`Salomon (Tech Lead)`,email:`salomontchibkere@gmail.com`,role:`super_admin`,profession:`Super Admin & Responsable Technique AJTES`,phone:`+237655136824`,city:`N'Djamena`,avatarUrl:`./images/IMG_20250119_163228_691.jpg`,memberType:`actif`,membershipStatus:`actif`,dateJoined:`2022-01-15`},{id:`usr-admin-marc`,name:`Marc Allan Dedjim`,email:`marcallandedjim@gmail.com`,password:`MarcAllan#Ajtes2026!Sec`,role:`super_admin`,profession:`Administrateur Principal (Pouvoir Complet 100%)`,phone:`63000484`,city:`N'Djamena`,memberType:`actif`,membershipStatus:`actif`,dateJoined:`2022-01-15`},{id:`usr-admin-valentin`,name:`Betoudjimbaikara Valentin`,email:`betoudjimbaikaravalentin@gmail.com`,password:`Valentin#Ajtes2026!Sec`,role:`super_admin`,profession:`Secrétaire Général & Administrateur (Pouvoir Complet 100%)`,phone:`63373639`,city:`N'Djamena`,memberType:`actif`,membershipStatus:`actif`,dateJoined:`2022-01-15`},{id:`usr-admin-souma`,name:`Souma Banakolong`,email:`soumabanakolong007@gmail.com`,password:`SoumaBanak#Ajtes2026!Sec`,role:`super_admin`,profession:`Président de l'AJTES (Pouvoir Complet 100%)`,phone:`+237690969577`,city:`N'Djamena`,memberType:`actif`,membershipStatus:`actif`,dateJoined:`2022-01-15`},{id:`usr-admin-boikoussigue`,name:`Boikoussigue`,email:`boikoussiguen@gmail.com`,password:`Boikoussigue#Ajtes2026!Sec`,role:`super_admin`,profession:`Chargé de Communication & Administrateur (Pouvoir Complet 100%)`,phone:`65031849`,city:`N'Djamena`,memberType:`actif`,membershipStatus:`actif`,dateJoined:`2022-01-15`},{id:`usr-member1`,name:`Ali Brahim`,email:`ali.brahim@example.td`,role:`membre`,profession:`Enseignant`,phone:`+235 66 12 34 56`,city:`Moundou`,memberType:`actif`,membershipStatus:`actif`,dateJoined:`2023-04-10`},{id:`usr-pending-1`,name:`Ahmat Mahamat`,email:`ahmat.mahamat@gmail.com`,role:`membre`,profession:`Enseignant / Formateur`,phone:`+235 66 12 88 99`,city:`N'Djamena`,memberType:`actif`,membershipStatus:`en_attente`,dateJoined:`2026-08-30`},{id:`usr-pending-2`,name:`Fatimé Abakar`,email:`fatime.abakar@gmail.com`,role:`membre`,profession:`Étudiante en Droit`,phone:`+235 68 44 22 11`,city:`Moundou`,memberType:`actif`,membershipStatus:`en_attente`,dateJoined:`2026-09-01`},{id:`usr-pending-3`,name:`Kassim Ali`,email:`kassim.ali@gmail.com`,role:`membre`,profession:`Technicien Agronome`,phone:`+235 63 99 77 55`,city:`Moundou`,memberType:`actif`,membershipStatus:`en_attente`,dateJoined:`2026-09-02`}],oe=`http://localhost:5000/api`,se=()=>localStorage.getItem(`ajtes_token`),O=()=>{localStorage.removeItem(`ajtes_token`)};async function k(e,t={}){let n=se(),r={"Content-Type":`application/json`,...t.headers};n&&(r.Authorization=`Bearer ${n}`);let i=await fetch(`${oe}${e}`,{...t,credentials:`include`,headers:r}),a=await i.json();if(!i.ok)throw Error(a.message||`Une erreur s'est produite.`);return a}var ce={login:e=>k(`/auth/login`,{method:`POST`,body:JSON.stringify(e)}),register:e=>k(`/auth/register`,{method:`POST`,body:JSON.stringify(e)}),logout:()=>k(`/auth/logout`,{method:`POST`}),getMe:()=>k(`/auth/me`),getProjects:()=>k(`/projects`),getProjectById:e=>k(`/projects/${e}`),getNews:()=>k(`/news`),getEvents:()=>k(`/news/events`),submitDonation:e=>k(`/donations`,{method:`POST`,body:JSON.stringify(e)}),submitContact:e=>k(`/contact`,{method:`POST`,body:JSON.stringify(e)})},le=(0,_.createContext)(void 0),ue=({children:e})=>{let[t,n]=(0,_.useState)(null),r=!!t,i=t?.role===`super_admin`||t?.role===`admin`;return(0,b.jsx)(le.Provider,{value:{currentUser:t,isLoggedIn:r,isAdmin:i,login:(e,t=`membre`)=>{let r=e.trim().toLowerCase(),i=D.find(e=>e.email.toLowerCase()===r);if(i)return n(i),!0;let a=[`salomontchibkere@gmail.com`,`contact@ajtes.td`,`marcallandedjim@gmail.com`,`betoudjimbaikaravalentin@gmail.com`,`soumabanakolong007@gmail.com`,`boikoussiguen@gmail.com`].includes(r),o=a?`super_admin`:t,s={id:`usr-${Date.now()}`,name:e.split(`@`)[0],email:e,role:o,memberType:`actif`,membershipStatus:a?`admis`:`en_attente`,dateJoined:new Date().toISOString().split(`T`)[0]};return n(s),!0},loginAsAdmin:()=>(n(D[0]),!0),logout:()=>{try{O(),ce.logout().catch(()=>{})}catch{}n(null)},register:e=>{let t={...e,membershipStatus:`en_attente`,id:`usr-${Date.now()}`,dateJoined:new Date().toISOString().split(`T`)[0]};n(t)}},children:e})},de=()=>{let e=(0,_.useContext)(le);if(!e)throw Error(`useAuth must be used within an AuthProvider`);return e},A=(0,_.createContext)(void 0),j=(e,t)=>{try{let n=localStorage.getItem(`ajtes_v3_${e}`);return n?n.includes(`Nangassou`)||n.includes(`nangassou`)||n.includes(`media-vid-`)?(localStorage.removeItem(`ajtes_v3_${e}`),t):JSON.parse(n):(localStorage.removeItem(`ajtes_${e}`),localStorage.removeItem(`ajtes_v2_${e}`),t)}catch{return t}},fe=({children:e})=>{let[t,n]=(0,_.useState)(()=>j(`projects`,te)),[r,i]=(0,_.useState)(()=>j(`news`,ne)),[a,o]=(0,_.useState)(()=>j(`events`,re)),[s,c]=(0,_.useState)(()=>j(`media`,ie).filter(e=>e.type!==`video`)),[l,u]=(0,_.useState)(()=>{let e=j(`officialDocuments`,w).filter(e=>e.id===`doc-statuts`||e.id===`doc-reglement`);try{localStorage.setItem(`ajtes_v3_officialDocuments`,JSON.stringify(e))}catch{}return e}),[d]=(0,_.useState)(T),[f]=(0,_.useState)(E),[p,m]=(0,_.useState)(()=>j(`donations`,ae)),[h,g]=(0,_.useState)(()=>j(`contactMessages`,[])),[v,y]=(0,_.useState)(()=>j(`users`,D));return(0,_.useEffect)(()=>{localStorage.setItem(`ajtes_v3_projects`,JSON.stringify(t))},[t]),(0,_.useEffect)(()=>{localStorage.setItem(`ajtes_v3_news`,JSON.stringify(r))},[r]),(0,_.useEffect)(()=>{localStorage.setItem(`ajtes_v3_media`,JSON.stringify(s))},[s]),(0,_.useEffect)(()=>{localStorage.setItem(`ajtes_v3_donations`,JSON.stringify(p))},[p]),(0,_.useEffect)(()=>{localStorage.setItem(`ajtes_v3_contactMessages`,JSON.stringify(h))},[h]),(0,_.useEffect)(()=>{localStorage.setItem(`ajtes_v3_users`,JSON.stringify(v))},[v]),(0,b.jsx)(A.Provider,{value:{projects:t,news:r,events:a,media:s,officialDocuments:l,committees:d,partners:f,donations:p,contactMessages:h,users:v,addDonation:e=>{let t={...e,id:`don-${Date.now()}`,reference:`AJTES-DON-${Math.floor(1e4+Math.random()*9e4)}`,status:`succes`,date:new Date().toISOString().split(`T`)[0]};return m(e=>[t,...e]),e.projectId&&n(t=>t.map(t=>t.id===e.projectId?{...t,raisedBudget:t.raisedBudget+e.amount}:t)),t},addProject:e=>{n(t=>[e,...t])},deleteProject:e=>{n(t=>t.filter(t=>t.id!==e))},addNewsArticle:e=>{i(t=>[e,...t])},deleteNewsArticle:e=>{i(t=>t.filter(t=>t.id!==e))},addEvent:e=>{o(t=>[e,...t])},addMediaItem:e=>{c(t=>[e,...t])},deleteMediaItem:e=>{c(t=>t.filter(t=>t.id!==e))},addContactMessage:e=>{let t={...e,id:`msg-${Date.now()}`,date:new Date().toISOString().split(`T`)[0],status:`nouveau`};g(e=>[t,...e])},deleteContactMessage:e=>{g(t=>t.filter(t=>t.id!==e))},updateOfficialDocument:e=>{u(t=>t.map(t=>t.id===e.id?e:t))},confirmUser:e=>{y(t=>t.map(t=>t.id===e?{...t,membershipStatus:`admis`}:t))},deleteUser:e=>{y(t=>t.filter(t=>t.id!==e))},toggleUserFeeStatus:(e,t,n=5e3)=>{y(r=>r.map(r=>{if(r.id===e){let e=t===void 0?!r.feePaid:t;return{...r,feePaid:e,feeAmount:n,feeYear:2026}}return r}))}},children:e})},pe=()=>{let e=(0,_.useContext)(A);if(!e)throw Error(`useData must be used within a DataProvider`);return e},me=({currentTab:e,setCurrentTab:t,navigateToAuth:n})=>{let{language:r,setLanguage:i,t:a}=C(),{isLoggedIn:o,currentUser:s,logout:c}=de(),[l,u]=(0,_.useState)(!1),d=`https://chat.whatsapp.com/KH42DjDTNHA7oNHrbBlwGI`,f=`https://facebook.com/events/s/retrouvez-nous-ici-/1425446342790196/`,p=[{id:`home`,label:a(`navHome`)},{id:`about`,label:a(`navAbout`)},{id:`realizations`,label:`Nos Réalisations`},{id:`projects`,label:a(`navProjects`)},{id:`documents`,label:`Statuts & Règlement`},{id:`news`,label:a(`navNews`)},{id:`gallery`,label:a(`navGallery`)},{id:`committees`,label:a(`navCommittees`)},{id:`contact`,label:a(`navContact`)}],m=e=>{t(e),u(!1),window.scrollTo({top:0,behavior:`smooth`})},h=e=>{n?n(e):t(`member`),u(!1),window.scrollTo({top:0,behavior:`smooth`})};return(0,b.jsxs)(`header`,{className:`navbar-header`,children:[(0,b.jsx)(`div`,{className:`main-nav`,children:(0,b.jsxs)(`div`,{className:`main-nav-container`,children:[(0,b.jsxs)(`div`,{className:`logo-brand`,onClick:()=>m(`home`),children:[(0,b.jsx)(`img`,{src:`./logo_ajtes.jpeg`,alt:`Logo AJTES TCHAD`,className:`official-logo-img`}),(0,b.jsxs)(`div`,{className:`logo-text`,children:[(0,b.jsx)(`span`,{className:`logo-title`,children:`AJTES TCHAD`}),(0,b.jsx)(`span`,{className:`logo-sub`,children:`Éducation & Solidarité`})]})]}),(0,b.jsxs)(`nav`,{className:`desktop-links`,children:[(0,b.jsx)(`button`,{className:`nav-link ${e===`home`?`active`:``}`,onClick:()=>m(`home`),children:a(`navHome`)}),(0,b.jsx)(`button`,{className:`nav-link ${e===`about`?`active`:``}`,onClick:()=>m(`about`),children:a(`navAbout`)}),(0,b.jsx)(`button`,{className:`nav-link ${e===`realizations`?`active`:``}`,onClick:()=>m(`realizations`),children:`Nos Réalisations`}),(0,b.jsx)(`button`,{className:`nav-link ${e===`projects`?`active`:``}`,onClick:()=>m(`projects`),children:a(`navProjects`)}),(0,b.jsx)(`button`,{className:`nav-link ${e===`news`?`active`:``}`,onClick:()=>m(`news`),style:{fontWeight:700},children:`Actualités & Nouvelles`}),(0,b.jsx)(`button`,{className:`nav-link ${e===`gallery`?`active`:``}`,onClick:()=>m(`gallery`),children:a(`navGallery`)}),(0,b.jsx)(`button`,{className:`nav-link ${e===`documents`?`active`:``}`,onClick:()=>m(`documents`),children:`Statuts & Règlement`}),(0,b.jsx)(`button`,{className:`nav-link ${e===`contact`?`active`:``}`,onClick:()=>m(`contact`),children:a(`navContact`)})]}),(0,b.jsxs)(`div`,{className:`cta-actions`,children:[(0,b.jsx)(`a`,{href:f,target:`_blank`,rel:`noreferrer`,className:`btn btn-facebook`,title:`Page Facebook Officielle AJTES`,children:`Facebook`}),(0,b.jsx)(`a`,{href:d,target:`_blank`,rel:`noreferrer`,className:`btn btn-whatsapp`,title:`Rejoindre le Groupe WhatsApp Officiel AJTES`,children:`WhatsApp`}),(0,b.jsx)(`div`,{className:`lang-select-box`,children:(0,b.jsxs)(`select`,{className:`lang-select-dropdown`,value:r,onChange:e=>i(e.target.value),"aria-label":`Sélectionner la langue`,children:[(0,b.jsx)(`option`,{value:`fr`,children:`FR`}),(0,b.jsx)(`option`,{value:`en`,children:`EN`}),(0,b.jsx)(`option`,{value:`ar`,children:`AR`})]})}),o?(0,b.jsxs)(`div`,{className:`user-control-group`,children:[(0,b.jsx)(`span`,{className:`user-name`,title:s?.name,children:s?.name}),(0,b.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>m(`member`),title:`Mon Espace Membre`,children:`Mon Espace`}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm logout-btn`,onClick:c,title:`Déconnexion`,children:`Déconnexion`})]}):(0,b.jsxs)(`div`,{className:`auth-buttons-minimal`,children:[(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>h(`login`),children:`Se connecter`}),(0,b.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>h(`register`),children:`S'inscrire`})]})]}),(0,b.jsx)(`button`,{className:`mobile-hamburger`,onClick:()=>u(!l),"aria-label":`Toggle menu`,children:l?`✕`:`☰`})]})}),l&&(0,b.jsx)(`div`,{className:`mobile-drawer`,children:(0,b.jsxs)(`div`,{className:`mobile-links`,children:[p.map(t=>(0,b.jsx)(`button`,{className:`mobile-nav-link ${e===t.id?`active`:``}`,onClick:()=>m(t.id),children:t.label},t.id)),(0,b.jsxs)(`div`,{className:`mobile-lang-row`,children:[(0,b.jsx)(`span`,{style:{fontSize:`0.85rem`,fontWeight:600},children:`Langue:`}),(0,b.jsxs)(`select`,{className:`lang-select-dropdown`,value:r,onChange:e=>i(e.target.value),children:[(0,b.jsx)(`option`,{value:`fr`,children:`Français (FR)`}),(0,b.jsx)(`option`,{value:`en`,children:`English (EN)`}),(0,b.jsx)(`option`,{value:`ar`,children:`العربية (AR)`})]})]}),(0,b.jsx)(`a`,{href:f,target:`_blank`,rel:`noreferrer`,className:`btn btn-facebook w-full margin-top-sm`,children:`Facebook Officiel`}),(0,b.jsx)(`a`,{href:d,target:`_blank`,rel:`noreferrer`,className:`btn btn-whatsapp w-full margin-top-sm`,children:`WhatsApp Officiel`}),(0,b.jsx)(`div`,{className:`mobile-drawer-ctas`,children:o?(0,b.jsx)(`button`,{className:`btn btn-primary w-full`,onClick:()=>m(`member`),children:`Mon Espace Membre`}):(0,b.jsxs)(`div`,{className:`grid-2 gap-sm`,children:[(0,b.jsx)(`button`,{className:`btn btn-primary w-full`,onClick:()=>h(`register`),children:`S'inscrire`}),(0,b.jsx)(`button`,{className:`btn btn-secondary w-full`,onClick:()=>h(`login`),children:`Connexion`})]})})]})}),(0,b.jsx)(`style`,{children:`
        .navbar-header {
          position: sticky;
          top: 0;
          z-index: 900;
          background: #FFFFFF;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid var(--neutral-border);
        }

        .main-nav {
          padding: 0.65rem 1.25rem;
          background: #FFFFFF;
        }

        .main-nav-container {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .logo-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          cursor: pointer;
          flex-shrink: 0;
        }

        .official-logo-img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--primary-emerald);
          box-shadow: 0 3px 8px rgba(0, 122, 61, 0.2);
        }

        .logo-title {
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--neutral-heading);
          display: block;
          line-height: 1.1;
        }

        .logo-sub {
          font-size: 0.72rem;
          color: var(--primary-emerald-text);
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-wrap: nowrap;
        }

        .nav-link {
          background: none;
          border: none;
          padding: 0.45rem 0.75rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--neutral-heading);
          cursor: pointer;
          border-radius: var(--radius-pill);
          transition: all 0.2s;
          white-space: nowrap;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary-emerald-text);
          background-color: var(--primary-emerald-light);
        }

        /* Dropdown Styling */
        .nav-dropdown-wrapper {
          position: relative;
          display: inline-block;
        }

        .dropdown-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .dropdown-arrow {
          font-size: 0.75rem;
          transition: transform 0.2s ease;
        }

        .nav-dropdown-wrapper:hover .dropdown-arrow {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: #FFFFFF;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          border: 1px solid var(--neutral-border);
          padding: 0.4rem 0;
          margin-top: 0.3rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: all 0.2s ease;
          z-index: 1000;
        }

        .nav-dropdown-wrapper:hover .dropdown-menu,
        .nav-dropdown-wrapper:focus-within .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 0.6rem 1.1rem;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--neutral-heading);
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }

        .dropdown-item:hover, .dropdown-item.active {
          background-color: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
        }

        .cta-actions {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          flex-shrink: 0;
        }

        .btn-facebook {
          background-color: #1877F2;
          color: #FFFFFF;
          font-weight: 700;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          padding: 0.35rem 0.7rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: opacity 0.2s;
        }

        .btn-facebook:hover {
          opacity: 0.9;
          color: #FFFFFF;
        }

        .btn-whatsapp {
          background-color: #25D366;
          color: #FFFFFF;
          font-weight: 700;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          padding: 0.35rem 0.7rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: opacity 0.2s;
        }

        .btn-whatsapp:hover {
          opacity: 0.9;
          color: #FFFFFF;
        }

        .lang-select-box {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-pill);
          box-shadow: var(--shadow-sm);
        }

        .lang-select-dropdown {
          background: transparent;
          border: none;
          color: var(--neutral-heading);
          font-size: 0.78rem;
          font-weight: 700;
          font-family: var(--font-main);
          cursor: pointer;
          outline: none;
        }

        .user-control-group {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .user-name {
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--neutral-heading);
          max-width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .auth-buttons-minimal {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .mobile-hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--neutral-heading);
          cursor: pointer;
        }

        .mobile-drawer {
          background: #FFFFFF;
          border-top: 1px solid var(--neutral-border);
          padding: 1rem 1.5rem 1.5rem 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          text-align: left;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--neutral-heading);
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: block;
          text-decoration: none;
        }

        .mobile-lang-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-sm);
        }

        .margin-top-sm { margin-top: 0.5rem; }

        @media (max-width: 1180px) {
          .desktop-links { display: none; }
          .cta-actions { display: none; }
          .mobile-hamburger { display: block; }
        }
      `})]})},he=({setCurrentTab:e})=>{let{t}=C();return(0,b.jsxs)(`footer`,{className:`site-footer`,children:[(0,b.jsx)(`div`,{className:`main-footer-body`,children:(0,b.jsxs)(`div`,{className:`footer-grid`,children:[(0,b.jsxs)(`div`,{className:`footer-col brand-col`,children:[(0,b.jsxs)(`div`,{className:`footer-logo`,children:[(0,b.jsx)(`img`,{src:`./logo_ajtes.jpeg`,alt:`Logo AJTES TCHAD`,className:`official-footer-logo-img`}),(0,b.jsx)(`span`,{className:`logo-name`,children:`AJTES TCHAD`})]}),(0,b.jsx)(`p`,{className:`footer-bio`,children:`Association des Jeunes Tchadiens pour l’Éducation et la Solidarité. Organisation créée en 2022 pour l'épanouissement de la jeunesse et le soutien scolaire.`}),(0,b.jsxs)(`div`,{className:`footer-socials`,children:[(0,b.jsx)(`a`,{href:`https://facebook.com/events/s/retrouvez-nous-ici-/1425446342790196/`,target:`_blank`,rel:`noreferrer`,title:`Facebook Official AJTES`,className:`social-icon fb`,children:`FB`}),(0,b.jsx)(`a`,{href:`https://chat.whatsapp.com/KH42DjDTNHA7oNHrbBlwGI`,target:`_blank`,rel:`noreferrer`,title:`Groupe WhatsApp Officiel AJTES`,className:`social-icon wa`,children:`WA`}),(0,b.jsx)(`a`,{href:`https://youtube.com`,target:`_blank`,rel:`noreferrer`,title:`Chaîne YouTube`,className:`social-icon yt`,children:`YT`}),(0,b.jsx)(`a`,{href:`https://tiktok.com`,target:`_blank`,rel:`noreferrer`,title:`TikTok`,className:`social-icon tt`,children:`TT`})]})]}),(0,b.jsxs)(`div`,{className:`footer-col`,children:[(0,b.jsx)(`h4`,{children:`Navigation rapide`}),(0,b.jsxs)(`ul`,{className:`footer-links`,children:[(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`home`),children:`Accueil`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`about`),children:`Qui sommes-nous ?`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`realizations`),children:`Nos Réalisations Clés`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`projects`),children:`Nos Projets`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`documents`),children:`Statuts & Règlement Intérieur`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`gallery`),children:`Galerie Photos & Vidéos`})})]})]}),(0,b.jsxs)(`div`,{className:`footer-col`,children:[(0,b.jsx)(`h4`,{children:`Agir avec l'AJTES`}),(0,b.jsxs)(`ul`,{className:`footer-links`,children:[(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`donate`),children:`Faire un Don (FCFA)`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`member`),children:`Devenir Membre Actif`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`member`),children:`Bénévolat & Projets`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`committees`),children:`Nos Comités & Partenaires`})}),(0,b.jsx)(`li`,{children:(0,b.jsx)(`button`,{onClick:()=>e(`contact`),children:`Contact & Questions`})})]})]}),(0,b.jsxs)(`div`,{className:`footer-col contact-col`,children:[(0,b.jsx)(`h4`,{children:`Contact & Siège`}),(0,b.jsx)(`p`,{children:`N'Djamena, République du Tchad`}),(0,b.jsx)(`p`,{children:`Airtel Money: +235 66 43 95 02 / +235 68 90 23 47`}),(0,b.jsx)(`p`,{children:`Email: impactdigital2026@gmail.com`}),(0,b.jsxs)(`div`,{className:`footer-newsletter`,children:[(0,b.jsx)(`h5`,{children:`Lettre d'Information`}),(0,b.jsx)(`p`,{className:`newsletter-desc`,children:`Recevez le bilan annuel et les actualités de nos projets scolaires.`}),(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),alert(`Merci ! Vous êtes abonné à la lettre d'information de l'AJTES.`)},className:`newsletter-form`,children:[(0,b.jsx)(`input`,{type:`email`,placeholder:`Votre email...`,required:!0,className:`newsletter-input`}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-gold btn-sm`,children:`S'abonner`})]})]})]})]})}),(0,b.jsx)(`div`,{className:`footer-slogan-bar`,children:(0,b.jsxs)(`p`,{children:[`« `,t(`mainSlogan`),` »`]})}),(0,b.jsx)(`div`,{className:`footer-bottom`,children:(0,b.jsx)(`p`,{children:`© 2022 - 2026 AJTES - Association des Jeunes Tchadiens pour l’Éducation et la Solidarité. Tous droits réservés.`})}),(0,b.jsx)(`style`,{children:`
        .site-footer {
          background-color: var(--neutral-heading);
          color: #E2E8F0;
          margin-top: 4rem;
        }

        .main-footer-body {
          padding: 4rem 1.5rem 2rem 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
        }

        .footer-col h4 {
          color: #FFF;
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-col h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 35px;
          height: 3px;
          background-color: var(--accent-gold);
          border-radius: 2px;
        }

        [dir="rtl"] .footer-col h4::after {
          left: auto;
          right: 0;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .official-footer-logo-img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: 50%;
          border: 2px solid var(--accent-gold);
        }

        .footer-logo .logo-icon {
          width: 38px;
          height: 38px;
          background: var(--primary-emerald);
          color: #FFF;
          font-weight: 800;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
        }

        .logo-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #FFF;
        }

        .footer-bio {
          font-size: 0.92rem;
          color: #94A3B8;
          margin-bottom: 1.5rem;
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          background: rgba(255, 255, 255, 0.08);
          color: #FFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .social-icon:hover {
          background: var(--primary-emerald);
          color: #FFF;
          transform: translateY(-3px);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.6rem;
        }

        .footer-links button {
          background: none;
          border: none;
          color: #94A3B8;
          font-size: 0.92rem;
          cursor: pointer;
          transition: color 0.2s;
          padding: 0;
        }

        .footer-links button:hover {
          color: var(--accent-gold);
        }

        .contact-col p {
          font-size: 0.92rem;
          color: #94A3B8;
          margin-bottom: 0.5rem;
        }

        .footer-newsletter {
          margin-top: 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-newsletter h5 {
          color: #FFF;
          font-size: 0.95rem;
          margin-bottom: 0.35rem;
        }

        .newsletter-desc {
          font-size: 0.8rem;
          color: #94A3B8;
          margin-bottom: 0.75rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.4rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 0.4rem 0.75rem;
          font-size: 0.82rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          color: #FFF;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--accent-gold);
        }

        .footer-slogan-bar {
          background-color: rgba(0, 0, 0, 0.2);
          text-align: center;
          padding: 1rem 1.5rem;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--accent-gold);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-bottom {
          text-align: center;
          padding: 1.5rem;
          font-size: 0.85rem;
          color: #64748B;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-admin-link {
          margin-top: 0.25rem;
        }

        .admin-discrete-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94A3B8;
          font-size: 0.78rem;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all 0.2s;
        }

        .admin-discrete-btn:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},ge=({setCurrentTab:e})=>{let{t}=C(),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(`tutorial`);return(0,b.jsxs)(`section`,{className:`hero-container bg-white-hero`,children:[(0,b.jsxs)(`div`,{className:`hero-content-wrapper`,children:[(0,b.jsxs)(`div`,{className:`hero-badge animated-pulse-badge`,children:[(0,b.jsx)(`img`,{src:`./logo_ajtes.jpeg`,alt:`Logo AJTES`,className:`hero-badge-logo`}),(0,b.jsx)(`span`,{children:`ASSOCIATION CRÉÉE EN 2022 • STATUTS & RÈGLEMENT INTÉRIEUR OFFICIELS`})]}),(0,b.jsxs)(`h1`,{className:`hero-title`,children:[`Éduquer, Solidariser & `,(0,b.jsx)(`span`,{className:`animated-gradient-text`,children:`Construire le Tchad`})]}),(0,b.jsxs)(`p`,{className:`hero-subtitle`,children:[t(`heroSubtitle`),` — Une organisation citoyenne au service de la scolarisation, de la jeunesse et du développement local (N'Djamena, Tchad).`]}),(0,b.jsx)(`div`,{className:`hero-actions-clean`,children:(0,b.jsx)(`button`,{className:`btn btn-blue btn-lg`,onClick:()=>{a(`tutorial`),r(!0)},title:`Visionner le tutoriel vidéo et les reportages de l'association`,children:`Découvrir nos Vidéos Officielles`})}),(0,b.jsxs)(`div`,{className:`hero-stats-clean`,children:[(0,b.jsxs)(`div`,{className:`hero-stat-card`,children:[(0,b.jsx)(`span`,{className:`stat-num`,children:`2022`}),(0,b.jsxs)(`span`,{className:`stat-lbl`,children:[t(`statCreationYear`),` (Statuts Officiels)`]})]}),(0,b.jsxs)(`div`,{className:`hero-stat-card`,children:[(0,b.jsx)(`span`,{className:`stat-num`,children:`0`}),(0,b.jsxs)(`span`,{className:`stat-lbl`,children:[t(`statProjects`),` & Réalisations`]})]})]})]}),n&&(0,b.jsx)(`div`,{className:`modal-overlay`,onClick:()=>r(!1),children:(0,b.jsxs)(`div`,{className:`modal-content hero-video-modal`,onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(`button`,{className:`modal-close`,onClick:()=>r(!1),children:`✕`}),(0,b.jsxs)(`div`,{className:`video-tabs-header`,children:[(0,b.jsx)(`button`,{className:`video-tab-btn ${i===`tutorial`?`active`:``}`,onClick:()=>a(`tutorial`),children:`Tutoriel Démo Plateforme (Salomon)`}),(0,b.jsx)(`button`,{className:`video-tab-btn ${i===`ceg`?`active`:``}`,onClick:()=>a(`ceg`),children:`Inauguration Bureau CEG (Reportage)`})]}),i===`tutorial`?(0,b.jsxs)(`div`,{className:`video-modal-body`,children:[(0,b.jsxs)(`div`,{className:`video-header-info`,children:[(0,b.jsx)(`h3`,{children:`Guide Officiel de Navigation & Démonstration du Site AJTES`}),(0,b.jsx)(`p`,{children:`Guide officiel de démonstration et d'utilisation de la plateforme AJTES Tchad`})]}),(0,b.jsx)(`img`,{src:`./images/tutoriel_demo_salomon_ajtes.gif`,alt:`Aperçu vidéo AJTES Tchad`,className:`hero-video-player`,style:{objectFit:`contain`,background:`#0F172A`}})]}):(0,b.jsxs)(`div`,{className:`video-modal-body`,children:[(0,b.jsxs)(`div`,{className:`video-header-info`,children:[(0,b.jsx)(`h3`,{children:`Reportage Vidéo Officiel : Bureau Administratif du CEG`}),(0,b.jsx)(`p`,{children:`Réalisation majeure de l'Association des Jeunes Tchadiens pour l'Éducation et la Solidarité (Projet 2026)`})]}),(0,b.jsx)(`video`,{src:`/videos/VID-20260813-WA0153.mp4`,controls:!0,autoPlay:!0,className:`hero-video-player`,children:`Votre navigateur ne supporte pas la lecture vidéo.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .bg-white-hero {
          position: relative;
          background-color: #FFFFFF;
          color: var(--neutral-heading);
          padding: 4.5rem 1.5rem 4rem 1.5rem;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-bottom: 1px solid var(--neutral-border);
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 950px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: var(--primary-emerald-light);
          border: 1px solid rgba(0, 122, 61, 0.25);
          color: var(--primary-emerald-text);
          padding: 0.4rem 1.25rem 0.4rem 0.65rem;
          border-radius: var(--radius-pill);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          margin-bottom: 1.5rem;
        }

        .hero-badge-logo {
          width: 28px;
          height: 28px;
          object-fit: cover;
          border-radius: 50%;
          border: 1.5px solid var(--primary-emerald);
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.18;
          color: var(--neutral-heading);
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--neutral-body);
          max-width: 820px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.65;
        }

        .hero-actions-clean {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }

        .hero-stats-clean {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 540px;
          margin: 0 auto;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          padding: 1.5rem 2rem;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .hero-stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-num {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--primary-emerald-text);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-lbl {
          font-size: 0.85rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .hero-video-modal {
          max-width: 820px;
          width: 94%;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
        }

        .video-tabs-header {
          display: flex;
          gap: 0.5rem;
          background: var(--neutral-light-bg);
          padding: 0.35rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--neutral-border);
          margin-bottom: 1.25rem;
          margin-right: 2rem;
        }

        .video-tab-btn {
          flex: 1;
          padding: 0.6rem 1rem;
          border: none;
          background: transparent;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--neutral-body);
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all 0.2s;
        }

        .video-tab-btn.active {
          background: var(--primary-emerald);
          color: #FFFFFF;
          box-shadow: var(--shadow-sm);
        }

        .video-header-info h3 {
          color: var(--neutral-heading);
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .video-header-info p {
          color: var(--neutral-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .hero-video-player {
          width: 100%;
          max-height: 450px;
          border-radius: var(--radius-md);
          background: #000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 900px) {
          .hero-title { font-size: 2.2rem; }
          .hero-stats-clean { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 500px) {
          .hero-title { font-size: 1.75rem; }
          .hero-subtitle { font-size: 0.95rem; }
          .hero-stats-clean { grid-template-columns: 1fr; }
        }
      `})]})},_e=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),ve=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ye=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),be=e=>{let t=ye(e);return t.charAt(0).toUpperCase()+t.slice(1)},xe={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Se=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Ce=(0,_.createContext)({}),we=()=>(0,_.useContext)(Ce),Te=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=we()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...xe,width:t??l??xe.width,height:t??l??xe.height,stroke:e??f,strokeWidth:m,className:_e(`lucide`,p,i),...!a&&!Se(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),M=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(Te,{ref:i,iconNode:t,className:_e(`lucide-${ve(be(e))}`,`lucide-${e}`,n),...r}));return n.displayName=be(e),n},Ee=M(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),De=M(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),Oe=M(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),ke=M(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),Ae=M(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),je=M(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),Me=M(`heart-handshake`,[[`path`,{d:`M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762`,key:`17lmqv`}]]),Ne=M(`message-circle`,[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}]]),Pe=M(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),Fe=M(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Ie=M(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Le=M(`theater`,[[`path`,{d:`M2 10s3-3 3-8`,key:`3xiif0`}],[`path`,{d:`M22 10s-3-3-3-8`,key:`ioaa5q`}],[`path`,{d:`M10 2c0 4.4-3.6 8-8 8`,key:`16fkpi`}],[`path`,{d:`M14 2c0 4.4 3.6 8 8 8`,key:`b9eulq`}],[`path`,{d:`M2 10s2 2 2 5`,key:`1au1lb`}],[`path`,{d:`M22 10s-2 2-2 5`,key:`qi2y5e`}],[`path`,{d:`M8 15h8`,key:`45n4r`}],[`path`,{d:`M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1`,key:`1vsc2m`}],[`path`,{d:`M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1`,key:`hrha4u`}]]),Re=M(`trees`,[[`path`,{d:`M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z`,key:`1l6gj6`}],[`path`,{d:`M7 16v6`,key:`1a82de`}],[`path`,{d:`M13 19v3`,key:`13sx9i`}],[`path`,{d:`M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5`,key:`1sj9kv`}]]),ze=M(`trophy`,[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]),Be=()=>{let{t:e}=C(),t=[{icon:(0,b.jsx)(De,{size:28}),title:e(`domainEdu`),desc:`Fournitures scolaires, construction de bureaux & soutien aux élèves (Article 5 des Statuts).`},{icon:(0,b.jsx)(Me,{size:28}),title:e(`domainSolidarity`),desc:`Entraide sociale, kits d'hygiène et soutien aux familles défavorisées du Tchad.`},{icon:(0,b.jsx)(Ee,{size:28}),title:e(`domainHum`),desc:`Assistance d'urgence, accompagnement médical et solidarité communautaire.`},{icon:(0,b.jsx)(Re,{size:28}),title:e(`domainEnv`),desc:`Reboisement, propreté urbaine et éco-citoyenneté en milieu scolaire (Comité Salubrité).`},{icon:(0,b.jsx)(Le,{size:28}),title:e(`domainCulture`),desc:`Promotion du patrimoine tchadien et événements culturels de la jeunesse.`},{icon:(0,b.jsx)(ze,{size:28}),title:e(`domainSport`),desc:`Tournois sportifs pour la jeunesse et rassemblements citoyens d'intégration.`},{icon:(0,b.jsx)(Fe,{size:28}),title:e(`domainReligion`),desc:`Promotion de la paix, du respect mutuel et du dialogue interculturel.`},{icon:(0,b.jsx)(Oe,{size:28}),title:e(`domainDev`),desc:`Développement local, infrastructures éducatives (CEG) et aménagement.`},{icon:(0,b.jsx)(Ie,{size:28}),title:`Accompagnement Jeunesse`,desc:`Orientation, mentorat et valorisation des talents par le Bureau Exécutif.`}];return(0,b.jsxs)(`section`,{className:`section bg-white`,children:[(0,b.jsxs)(`div`,{className:`section-title-container`,children:[(0,b.jsx)(`span`,{className:`section-badge animated-pulse-badge`,children:`CONFORMES AUX STATUTS DE L'AJTES (2022)`}),(0,b.jsx)(`h2`,{className:`section-title`,children:e(`domainsTitle`)}),(0,b.jsx)(`p`,{className:`section-subtitle`,children:`L'AJTES déploie ses actions autour des piliers stratégiques définis dans ses Statuts officiels pour transformer la vie de la jeunesse et bâtir des communautés fortes.`})]}),(0,b.jsx)(`div`,{className:`grid-3`,children:t.map((e,t)=>(0,b.jsxs)(`div`,{className:`domain-card card animated-float`,style:{animationDelay:`${t*.15}s`},children:[(0,b.jsx)(`div`,{className:`domain-icon-box`,children:e.icon}),(0,b.jsx)(`h3`,{className:`domain-card-title`,children:e.title}),(0,b.jsx)(`p`,{className:`domain-card-desc`,children:e.desc})]},t))}),(0,b.jsx)(`style`,{children:`
        .bg-white {
          background-color: #FFFFFF;
        }

        .domain-card {
          padding: 2rem;
          text-align: center;
          border: 1px solid var(--neutral-border);
          background: #FFFFFF;
          transition: all 0.3s ease;
        }

        .domain-card:hover {
          border-color: var(--primary-emerald);
          box-shadow: 0 10px 25px rgba(0, 122, 61, 0.1);
        }

        .domain-icon-box {
          width: 64px;
          height: 64px;
          background: var(--primary-emerald-light);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.25rem auto;
          color: var(--primary-emerald-text);
          transition: transform 0.3s;
          border: 1px solid rgba(0, 122, 61, 0.2);
        }

        .domain-card:hover .domain-icon-box {
          transform: scale(1.1) rotate(5deg);
          background: var(--primary-emerald);
          color: #FFF;
        }

        .domain-card-title {
          font-size: 1.2rem;
          color: var(--neutral-heading);
          margin-bottom: 0.75rem;
        }

        .domain-card-desc {
          font-size: 0.92rem;
          color: var(--neutral-body);
          line-height: 1.6;
        }
      `})]})},Ve=()=>(0,b.jsxs)(`section`,{className:`section bg-slate`,id:`realizations-section`,children:[(0,b.jsxs)(`div`,{className:`section-title-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Impact Concret sur le Terrain`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`Nos Réalisations Clés Sur le Terrain`}),(0,b.jsx)(`p`,{className:`section-subtitle`,children:`Depuis sa création en 2022, l'AJTES prouve par des réalisations matérielles tangibles qu’elle agit chaque jour pour l’avenir des élèves et des établissements scolaires.`})]}),(0,b.jsx)(`div`,{className:`timeline-grid`,children:[{year:`2022`,badge:`Fondation & Lancement`,title:`2022 — Création de l'AJTES`,desc:`Lancement des premières activités d'entraide et de sensibilisation pour l'éducation.`,details:`Création officielle de l’AJTES par un groupe de jeunes tchadiens engagés. Organisation des premières campagnes d'orientation et de sensibilisation pour l'éducation et l'environnement.`,img:`./images/IMG-20260813-WA0123.jpg`},{year:`2023`,badge:`Action Scolaire`,title:`2023 — Distribution au CEG`,desc:`Fournitures scolaires complètes distribuées aux élèves défavorisés.`,details:`Distribution directe de fournitures scolaires (cahiers, stylos, sacs, matériel pédagogique) aux élèves du Collège d'Enseignement Général (CEG).`,img:`./images/IMG-20260813-WA0142.jpg`},{year:`2026`,badge:`Infrastructures & Bâtiment`,title:`2026 — Bureau administratif au CEG`,desc:`Construction et équipement d'un bâtiment administratif de deux chambres.`,details:`Construction complète et équipement d'un bureau administratif de deux chambres au niveau du CEG pour assurer de meilleures conditions de travail au personnel enseignant.`,img:`./images/IMG-20260813-WA0106.jpg`}].map((e,t)=>(0,b.jsxs)(`div`,{className:`timeline-card card`,children:[(0,b.jsxs)(`div`,{className:`card-image-box`,children:[(0,b.jsx)(`img`,{src:e.img,alt:e.title}),(0,b.jsx)(`span`,{className:`timeline-year-tag`,children:e.year})]}),(0,b.jsxs)(`div`,{className:`card-body`,children:[(0,b.jsx)(`span`,{className:`milestone-badge`,children:e.badge}),(0,b.jsx)(`h3`,{className:`milestone-title`,children:e.title}),(0,b.jsx)(`p`,{className:`milestone-desc`,children:e.desc}),(0,b.jsx)(`div`,{className:`milestone-details`,children:e.details})]})]},t))}),(0,b.jsx)(`style`,{children:`
        .bg-slate {
          background-color: var(--neutral-light-bg);
          padding: 4rem 1.5rem;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 2.5rem auto 0 auto;
        }

        .timeline-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #FFFFFF;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          border: 1px solid var(--neutral-border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .card-image-box {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .card-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .timeline-card:hover .card-image-box img {
          transform: scale(1.08);
        }

        .timeline-year-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--accent-gold);
          color: #121A24;
          font-weight: 800;
          font-size: 1.1rem;
          padding: 0.3rem 0.9rem;
          border-radius: var(--radius-sm);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        [dir="rtl"] .timeline-year-tag {
          right: auto;
          left: 1rem;
        }

        .card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .milestone-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-emerald);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .milestone-title {
          font-size: 1.25rem;
          color: var(--neutral-heading);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .milestone-desc {
          font-size: 0.95rem;
          color: var(--neutral-body);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .milestone-details {
          font-size: 0.9rem;
          color: var(--neutral-muted);
          line-height: 1.55;
        }
      `})]}),He=()=>{let{officialDocuments:e}=pe(),{language:t}=C(),{isAdmin:n}=de(),r=e.filter(e=>e.id===`doc-statuts`||e.id===`doc-reglement`),[i,a]=(0,_.useState)(r[0]||null),[o,s]=(0,_.useState)(`text`);return(0,b.jsxs)(`section`,{className:`section bg-white-docs`,children:[(0,b.jsxs)(`div`,{className:`section-title-container`,children:[(0,b.jsx)(`span`,{className:`section-badge animated-pulse-badge`,children:`CADRE JURIDIQUE & STATUTS OFFICIELS (2022)`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`Statuts & Règlement Intérieur de l'AJTES`}),(0,b.jsx)(`p`,{className:`section-subtitle`,children:`Lisez directement en ligne la charte fondamentale et la réglementation officielle adoptées en Assemblée Générale à N'Djamena (Tchad).`})]}),(0,b.jsxs)(`div`,{className:`documents-container`,children:[(0,b.jsx)(`div`,{className:`docs-tabs`,children:r.map(e=>(0,b.jsxs)(`button`,{className:`doc-tab-btn ${i?.id===e.id?`active`:``}`,onClick:()=>a(e),children:[(0,b.jsx)(`span`,{className:`doc-type-badge`,children:`DOC`}),(0,b.jsxs)(`div`,{className:`doc-tab-text`,children:[(0,b.jsx)(`span`,{className:`doc-title`,children:e.title[t]||e.title.fr}),(0,b.jsx)(`span`,{className:`doc-meta`,children:`Statuts Officiels 2022`})]})]},e.id))}),i&&(0,b.jsxs)(`div`,{className:`doc-reader-card card`,children:[(0,b.jsxs)(`div`,{className:`doc-header`,children:[(0,b.jsxs)(`div`,{className:`doc-header-info`,children:[(0,b.jsx)(`h3`,{children:i.title[t]||i.title.fr}),(0,b.jsx)(`p`,{className:`doc-desc`,children:i.description[t]||i.description.fr})]}),(0,b.jsxs)(`div`,{className:`doc-actions`,children:[i.downloadUrl&&(0,b.jsxs)(`div`,{className:`view-mode-toggle`,children:[(0,b.jsx)(`button`,{className:`mode-btn ${o===`text`?`active`:``}`,onClick:()=>s(`text`),children:`Texte des Articles`}),(0,b.jsx)(`button`,{className:`mode-btn ${o===`pdf`?`active`:``}`,onClick:()=>s(`pdf`),children:`Visionneuse PDF`})]}),i.downloadUrl&&n&&(0,b.jsx)(`a`,{href:i.downloadUrl,download:!0,target:`_blank`,rel:`noopener noreferrer`,className:`btn btn-gold btn-sm`,style:{textDecoration:`none`},children:`Télécharger le PDF (Bureau Exécutif)`})]})]}),o===`pdf`&&i.downloadUrl?(0,b.jsx)(`div`,{className:`pdf-embed-wrapper`,children:(0,b.jsx)(`iframe`,{src:`${i.downloadUrl}#toolbar=0`,title:i.title.fr,className:`pdf-iframe-reader`})}):(0,b.jsx)(`div`,{className:`doc-content-body`,children:(0,b.jsx)(`pre`,{className:`doc-text-formatting`,children:i.contentMarkdown[t]||i.contentMarkdown.fr})})]})]}),(0,b.jsx)(`style`,{children:`
        .bg-white-docs {
          background-color: #FFFFFF;
        }

        .documents-container {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 2rem;
        }

        .docs-tabs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .doc-tab-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          transition: all 0.25s ease;
        }

        [dir="rtl"] .doc-tab-btn {
          text-align: right;
        }

        .doc-tab-btn:hover, .doc-tab-btn.active {
          background: var(--primary-emerald-light);
          border-color: var(--primary-emerald);
        }

        .doc-type-badge {
          background: var(--primary-emerald);
          color: #FFF;
          font-weight: 800;
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .doc-tab-text {
          display: flex;
          flex-direction: column;
        }

        .doc-title {
          font-weight: 700;
          font-size: 1rem;
          color: var(--neutral-heading);
        }

        .doc-meta {
          font-size: 0.8rem;
          color: var(--neutral-muted);
          margin-top: 0.2rem;
        }

        .doc-reader-card {
          padding: 2rem;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
        }

        .doc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .doc-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .view-mode-toggle {
          display: flex;
          background: #F8FAFC;
          padding: 0.25rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--neutral-border);
        }

        .mode-btn {
          padding: 0.45rem 1rem;
          border: none;
          background: none;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--neutral-body);
          cursor: pointer;
          border-radius: var(--radius-pill);
          transition: all 0.2s;
        }

        .mode-btn.active {
          background: var(--primary-emerald);
          color: #FFF;
        }

        .admin-only-badge {
          font-size: 0.8rem;
          font-weight: 700;
          color: #B45309;
          background: #FEF3C7;
          border: 1px solid rgba(217, 119, 6, 0.4);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-pill);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .pdf-embed-wrapper {
          width: 100%;
          height: 600px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--neutral-border);
          box-shadow: var(--shadow-sm);
        }

        .pdf-iframe-reader {
          width: 100%;
          height: 100%;
          border: none;
        }

        .doc-legal-note {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
          border-left: 4px solid var(--primary-emerald);
        }

        .doc-header h3 {
          font-size: 1.5rem;
          color: var(--neutral-heading);
          margin-bottom: 0.35rem;
        }

        .doc-desc {
          font-size: 0.95rem;
          color: var(--neutral-body);
        }

        .doc-content-body {
          background: #F8FAFC;
          padding: 1.5rem;
          border-radius: var(--radius-md);
          max-height: 500px;
          overflow-y: auto;
          border: 1px solid var(--neutral-border);
        }

        .doc-text-formatting {
          white-space: pre-wrap;
          font-family: var(--font-main);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--neutral-dark);
        }

        @media (max-width: 850px) {
          .documents-container {
            grid-template-columns: 1fr;
          }
          .doc-actions {
            align-items: stretch;
            width: 100%;
          }
        }
      `})]})},Ue=()=>(0,b.jsxs)(`div`,{className:`about-page`,children:[(0,b.jsx)(`section`,{className:`about-banner`,children:(0,b.jsxs)(`div`,{className:`about-banner-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Qui Sommes-Nous ?`}),(0,b.jsx)(`h1`,{children:`L'Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES)`}),(0,b.jsx)(`p`,{children:`Créée en 2022, l'AJTES est une organisation communautaire engagée pour bâtir un avenir meilleur pour la jeunesse tchadienne.`})]})}),(0,b.jsx)(`section`,{className:`section bg-white`,children:(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`about-text-box`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Notre Histoire`}),(0,b.jsx)(`h2`,{children:`Née de la volonté d'agir sur le terrain`}),(0,b.jsx)(`p`,{children:`L'AJTES a vu le jour en 2022 face à un constat clair : les besoins urgents d'accompagnement des élèves et des établissements scolaires tchadiens nécessitent une mobilisation citoyenne forte et structurée.`}),(0,b.jsxs)(`p`,{children:[`Dès 2023, nos volontaires sont intervenus au `,(0,b.jsx)(`strong`,{children:`CEG`}),` pour offrir des fournitures scolaires complètes. En 2026, nous avons franchi une étape majeure avec la `,(0,b.jsx)(`strong`,{children:`construction d'un bureau administratif de deux chambres`}),` au bénéfice des élèves et du corps enseignant.`]})]}),(0,b.jsxs)(`div`,{className:`mission-vision-box card`,children:[(0,b.jsxs)(`div`,{className:`mv-item`,children:[(0,b.jsx)(`h3`,{children:`Notre Mission`}),(0,b.jsx)(`p`,{children:`Contribuer au développement, à la scolarisation et à l'épanouissement de la jeunesse tchadienne à travers des projets éducatifs, sociaux, culturels et environnementaux.`})]}),(0,b.jsx)(`div`,{className:`mv-divider`}),(0,b.jsxs)(`div`,{className:`mv-item`,children:[(0,b.jsx)(`h3`,{children:`Notre Vision`}),(0,b.jsx)(`p`,{children:`Construire une jeunesse tchadienne mieux éduquée, solidaire, responsable et pleinement actrice du développement de sa communauté et de son pays.`})]})]})]})}),(0,b.jsxs)(`section`,{className:`section bg-slate`,children:[(0,b.jsxs)(`div`,{className:`section-title-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Principes Fondateurs`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`Nos Valeurs`})]}),(0,b.jsx)(`div`,{className:`grid-3`,children:[{title:`Éducation`,desc:`Accès égalitaire aux opportunités d'apprentissage et soutien aux collèges tchadiens.`},{title:`Solidarité`,desc:`Entraide active envers les élèves et les familles en situation de vulnérabilité.`},{title:`Engagement`,desc:`Action concrète sur le terrain, responsabilité citoyenne et régularité des projets.`},{title:`Inclusion & Respect`,desc:`Accueil de tous les jeunes sans distinction de genre, de région ou de croyance.`},{title:`Transparence`,desc:`Gestion rigoureuse des dons et publication systématique des résultats d'activités.`},{title:`Protection de l'Environnement`,desc:`Sensibilisation aux enjeux écologiques et campagnes de reboisement.`}].map((e,t)=>(0,b.jsxs)(`div`,{className:`value-card card`,children:[(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.desc})]},t))})]}),(0,b.jsx)(He,{}),(0,b.jsx)(`style`,{children:`
        .about-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .about-banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .about-banner h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 1rem 0;
        }

        .about-banner p {
          font-size: 1.15rem;
          color: #E2E8F0;
        }

        .about-text-box h2 {
          font-size: 1.8rem;
          margin-bottom: 1.25rem;
        }

        .mission-vision-box {
          padding: 2rem;
          background: linear-gradient(135deg, var(--primary-emerald-light), #FFFFFF);
          border: 1px solid rgba(0, 122, 61, 0.2);
        }

        .mv-item h3 {
          font-size: 1.3rem;
          color: var(--primary-emerald);
          margin-bottom: 0.5rem;
        }

        .mv-divider {
          height: 1px;
          background: var(--neutral-border);
          margin: 1.5rem 0;
        }

        .value-card {
          padding: 1.75rem;
          border-top: 4px solid var(--primary-emerald);
        }

        .value-card h3 {
          font-size: 1.15rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .team-card {
          text-align: center;
        }

        .team-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .team-body {
          padding: 1.25rem;
        }

        .team-body h3 {
          font-size: 1.1rem;
          color: var(--neutral-heading);
        }

        .team-role {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-emerald);
          margin: 0.25rem 0 0.75rem 0;
        }

        .team-bio {
          font-size: 0.88rem;
          color: var(--neutral-body);
        }
      `})]}),We=({title:e,url:t})=>{let[n,r]=(0,_.useState)(!1),i=t||window.location.href;return(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,marginTop:`1rem`,flexWrap:`wrap`},children:[(0,b.jsxs)(`span`,{style:{fontSize:`0.85rem`,color:`#64748b`,fontWeight:600,display:`flex`,alignItems:`center`,gap:`0.25rem`},children:[(0,b.jsx)(Pe,{size:15}),` Partager :`]}),(0,b.jsxs)(`button`,{onClick:()=>{let t=encodeURIComponent(` découvrez : ${e} - ${i}`);window.open(`https://api.whatsapp.com/send?text=${t}`,`_blank`)},style:{background:`#25D366`,color:`#fff`,border:`none`,borderRadius:`6px`,padding:`0.35rem 0.65rem`,fontSize:`0.8rem`,fontWeight:600,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`0.3rem`,transition:`transform 0.2s`},title:`Partager sur WhatsApp`,children:[(0,b.jsx)(Ne,{size:14}),` WhatsApp`]}),(0,b.jsxs)(`button`,{onClick:()=>{let e=encodeURIComponent(i);window.open(`https://www.facebook.com/sharer/sharer.php?u=${e}`,`_blank`)},style:{background:`#1877F2`,color:`#fff`,border:`none`,borderRadius:`6px`,padding:`0.35rem 0.65rem`,fontSize:`0.8rem`,fontWeight:600,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`0.3rem`},title:`Partager sur Facebook`,children:[(0,b.jsx)(je,{size:14}),` Facebook`]}),(0,b.jsxs)(`button`,{onClick:()=>{navigator.clipboard.writeText(i),r(!0),setTimeout(()=>r(!1),2e3)},style:{background:n?`#16a34a`:`#f1f5f9`,color:n?`#fff`:`#334155`,border:`1px solid #cbd5e1`,borderRadius:`6px`,padding:`0.35rem 0.65rem`,fontSize:`0.8rem`,fontWeight:600,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`0.3rem`},children:[n?(0,b.jsx)(ke,{size:14}):(0,b.jsx)(Ae,{size:14}),n?`Copié !`:`Copier le lien`]})]})},Ge=({setCurrentTab:e})=>{let{projects:t}=pe(),{language:n}=C(),[r,i]=(0,_.useState)(`all`),[a,o]=(0,_.useState)(null),s=[{id:`all`,label:`Tous les Projets`},{id:`education`,label:`Éducation & Écoles`},{id:`solidarite`,label:`Solidarité Sociale`},{id:`environnement`,label:`Salubrité & Reboisement`},{id:`humanitaire`,label:`Urgence & Santé`}],c=r===`all`?t:t.filter(e=>e.category===r);return(0,b.jsxs)(`div`,{className:`projects-page bg-white`,children:[(0,b.jsx)(`section`,{className:`projects-banner-white`,children:(0,b.jsxs)(`div`,{className:`banner-container`,children:[(0,b.jsx)(`span`,{className:`section-badge animated-pulse-badge`,children:`CONFORME À L'ARTICLE 5 DES STATUTS AJTES (2022)`}),(0,b.jsxs)(`h1`,{className:`projects-main-title`,children:[`Nos Projets & `,(0,b.jsx)(`span`,{className:`animated-gradient-text`,children:`Actions Communautaires`})]}),(0,b.jsx)(`p`,{className:`projects-main-sub`,children:`Découvrez nos réalisations phares (telles que la construction du bâtiment administratif du CEG) et nos projets en cours de financement à travers le Tchad.`})]})}),(0,b.jsxs)(`section`,{className:`section bg-white`,children:[(0,b.jsx)(`div`,{className:`filter-bar`,children:s.map(e=>(0,b.jsx)(`button`,{className:`filter-btn ${r===e.id?`active`:``}`,onClick:()=>i(e.id),children:e.label},e.id))}),(0,b.jsx)(`div`,{className:`grid-3`,children:c.map(t=>{let r=Math.min(100,Math.round(t.raisedBudget/t.targetBudget*100));return(0,b.jsxs)(`div`,{className:`project-card card animated-float`,children:[(0,b.jsxs)(`div`,{className:`proj-img-wrap`,children:[(0,b.jsx)(`img`,{src:t.imageUrl,alt:t.title.fr}),(0,b.jsx)(`span`,{className:`status-badge ${t.status}`,children:t.status===`realise`?`Réalisé`:t.status===`en_cours`?`En cours`:`En projet`})]}),(0,b.jsxs)(`div`,{className:`proj-content`,children:[(0,b.jsxs)(`div`,{className:`proj-meta`,children:[(0,b.jsxs)(`span`,{children:[`Lieu : `,t.location]}),(0,b.jsxs)(`span`,{children:[t.beneficiariesCount,` Bénéficiaires`]})]}),(0,b.jsx)(`h3`,{className:`proj-title`,children:t.title[n]||t.title.fr}),(0,b.jsx)(`p`,{className:`proj-desc`,children:t.description[n]||t.description.fr}),(0,b.jsxs)(`div`,{className:`budget-box`,children:[(0,b.jsxs)(`div`,{className:`budget-labels`,children:[(0,b.jsxs)(`span`,{children:[`Budget: `,(0,b.jsxs)(`strong`,{children:[t.targetBudget.toLocaleString(),` FCFA`]})]}),(0,b.jsxs)(`span`,{children:[r,`% financé`]})]}),(0,b.jsx)(`div`,{className:`progress-track`,children:(0,b.jsx)(`div`,{className:`progress-fill`,style:{width:`${r}%`}})}),(0,b.jsxs)(`div`,{className:`raised-info`,children:[`Recueilli: `,t.raisedBudget.toLocaleString(),` FCFA`]})]}),(0,b.jsx)(We,{title:t.title.fr}),(0,b.jsxs)(`div`,{className:`proj-actions margin-top`,children:[(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>o(t),children:`En savoir plus`}),t.status!==`realise`&&(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,onClick:()=>e(`donate`),children:`Soutenir ce projet`})]})]})]},t.id)})})]}),a&&(0,b.jsx)(`div`,{className:`modal-overlay`,onClick:()=>o(null),children:(0,b.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(`button`,{className:`modal-close`,onClick:()=>o(null),children:`✕`}),(0,b.jsxs)(`div`,{className:`proj-modal-body`,children:[(0,b.jsx)(`img`,{src:a.imageUrl,alt:a.title.fr,className:`modal-img`}),(0,b.jsx)(`span`,{className:`status-badge ${a.status} modal-badge`,children:a.status===`realise`?`Réalisé (Statuts 2022)`:`En cours de réalisation`}),(0,b.jsx)(`h2`,{children:a.title[n]||a.title.fr}),(0,b.jsxs)(`p`,{className:`modal-loc`,children:[a.location,` • Lancement: `,a.startDate]}),(0,b.jsxs)(`div`,{className:`modal-section`,children:[(0,b.jsx)(`h4`,{children:`Description complète`}),(0,b.jsx)(`p`,{children:a.description[n]||a.description.fr})]}),(0,b.jsxs)(`div`,{className:`modal-section`,children:[(0,b.jsx)(`h4`,{children:`Objectif du projet`}),(0,b.jsx)(`p`,{children:a.objective[n]||a.objective.fr})]}),a.results&&(0,b.jsxs)(`div`,{className:`modal-section results-box`,children:[(0,b.jsx)(`h4`,{children:`Résultats obtenus`}),(0,b.jsx)(`p`,{children:a.results[n]||a.results.fr})]}),(0,b.jsx)(We,{title:a.title.fr}),(0,b.jsx)(`div`,{className:`modal-footer-actions`,children:(0,b.jsx)(`button`,{className:`btn btn-gold btn-lg w-full`,onClick:()=>{o(null),e(`donate`)},children:`Soutenir ce projet par un Don (FCFA)`})})]})]})}),(0,b.jsx)(`style`,{children:`
        .bg-white {
          background-color: #FFFFFF;
        }

        .projects-banner-white {
          background-color: #FFFFFF;
          color: var(--neutral-heading);
          padding: 4rem 1.5rem 2.5rem 1.5rem;
          text-align: center;
          border-bottom: 1px solid var(--neutral-border);
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .projects-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--neutral-heading);
          margin: 0.85rem 0;
        }

        .projects-main-sub {
          font-size: 1.1rem;
          color: var(--neutral-body);
          line-height: 1.6;
        }

        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .filter-btn {
          background: #F8FAFC;
          border: 2px solid var(--neutral-border);
          padding: 0.6rem 1.35rem;
          border-radius: var(--radius-pill);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--neutral-heading);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary-emerald);
          color: var(--primary-emerald-text);
          background: var(--primary-emerald-light);
        }

        .filter-btn.active {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          border-color: var(--primary-emerald);
          box-shadow: 0 4px 12px rgba(0, 122, 61, 0.15);
        }

        .project-card {
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
        }

        .proj-img-wrap {
          position: relative;
          height: 210px;
        }

        .proj-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 800;
          color: #FFF;
        }

        [dir="rtl"] .status-badge {
          left: auto;
          right: 0.75rem;
        }

        .status-badge.realise { background-color: var(--primary-emerald); }
        .status-badge.en_cours { background-color: #D97706; color: #FFFFFF; }
        .status-badge.en_projet { background-color: #2563EB; }

        .proj-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .proj-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--neutral-muted);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .proj-title {
          font-size: 1.25rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .proj-desc {
          font-size: 0.92rem;
          color: var(--neutral-body);
          margin-bottom: 1.25rem;
          flex-grow: 1;
          line-height: 1.55;
        }

        .budget-box {
          background: #F8FAFC;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.25rem;
          border: 1px solid var(--neutral-border);
        }

        .budget-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          margin-bottom: 0.4rem;
          font-weight: 600;
        }

        .progress-track {
          height: 8px;
          background: #E2E8F0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.35rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-emerald), #D97706);
          border-radius: 4px;
        }

        .raised-info {
          font-size: 0.82rem;
          color: var(--primary-emerald-text);
          font-weight: 800;
        }

        .proj-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: space-between;
        }

        .modal-img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }

        .modal-section {
          margin-top: 1.25rem;
        }

        .modal-section h4 {
          font-size: 1rem;
          color: var(--primary-emerald-text);
          margin-bottom: 0.35rem;
        }

        .results-box {
          background: var(--primary-emerald-light);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border-left: 4px solid var(--primary-emerald);
          color: var(--primary-emerald-text);
        }

        .modal-footer-actions {
          margin-top: 2rem;
        }
      `})]})},Ke=()=>{let{news:e,events:t,addNewsArticle:n}=pe(),{language:r}=C(),{currentUser:i,isAdmin:a}=de(),[o,s]=(0,_.useState)(`news`),[c,l]=(0,_.useState)(`all`),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(()=>{try{let e=localStorage.getItem(`ajtes_v4_reactions`);return e?JSON.parse(e):{"news-1":{likes:14,hearts:8,claps:12},"news-2":{likes:9,hearts:6,claps:11},"news-3":{likes:7,hearts:5,claps:4}}}catch{return{}}}),y={"news-1":[{id:`c-1`,author:`Mahamat Abakar`,text:`Félicitations au Bureau AJTES pour cette belle réalisation concrète au service des élèves !`,date:`16/08/2026 10:15`},{id:`c-2`,author:`Clarisse N.`,text:`Une excellente initiative qui va encourager le personnel enseignant et moderniser l'école.`,date:`17/08/2026 14:30`}],"news-2":[{id:`c-3`,author:`Yves T.`,text:`Bravo pour la campagne de reboisement, la jeunesse tchadienne en action !`,date:`21/08/2026 09:00`}],"news-3":[{id:`c-4`,author:`Salimata B.`,text:`Merci pour le soutien scolaire et la distribution de fournitures aux enfants.`,date:`29/08/2026 16:45`}]},[x,ee]=(0,_.useState)(()=>{try{let e=localStorage.getItem(`ajtes_v4_comments`);return e?JSON.parse(e):y}catch{return y}}),[S,te]=(0,_.useState)(``),[ne,re]=(0,_.useState)(``),[w,ie]=(0,_.useState)(null);(0,_.useEffect)(()=>{try{localStorage.setItem(`ajtes_v4_reactions`,JSON.stringify(g))}catch{}},[g]),(0,_.useEffect)(()=>{try{localStorage.setItem(`ajtes_v4_comments`,JSON.stringify(x))}catch{}},[x]);let T=(e,t)=>{v(n=>{let r=n[e]||{likes:0,hearts:0,claps:0};return{...n,[e]:{...r,[t]:r[t]+1}}})},E=(e,t)=>{if(e.preventDefault(),!ne.trim())return;let n={id:`c-${Date.now()}`,author:S.trim()||(i?.name?i.name:`Visiteur du site`),text:ne.trim(),date:new Date().toLocaleDateString(`fr-FR`,{day:`2-digit`,month:`2-digit`,year:`numeric`})+` `+new Date().toLocaleTimeString(`fr-FR`,{hour:`2-digit`,minute:`2-digit`})};ee(e=>({...e,[t]:[n,...e[t]||[]]})),re(``)},[ae,D]=(0,_.useState)(!1),[oe,se]=(0,_.useState)(`article`),[O,k]=(0,_.useState)(``),[ce,le]=(0,_.useState)(`education`),[ue,A]=(0,_.useState)(``),[j,fe]=(0,_.useState)(``),[me,he]=(0,_.useState)(``),[ge,_e]=(0,_.useState)(``),[ve,ye]=(0,_.useState)(``),[be,xe]=(0,_.useState)(!1),Se=()=>{k(``),A(``),fe(``),he(``),_e(``),ye(``),se(`article`)},Ce=()=>{Se(),D(!0)},we=e=>{e.preventDefault(),h(!0),setTimeout(()=>{h(!1),p(null)},2500)},Te=e=>{if(e.preventDefault(),!O.trim()||!j.trim()){alert(`Veuillez renseigner au moins le titre et le contenu principal.`);return}let t=me.trim()||`./images/IMG-20260813-WA0083.jpg`,r={id:`news-${Date.now()}`,title:{fr:O.trim(),en:O.trim(),ar:O.trim()},summary:{fr:ue.trim()||j.substring(0,140)+`...`,en:ue.trim()||j.substring(0,140)+`...`,ar:ue.trim()||j.substring(0,140)+`...`},content:{fr:j.trim(),en:j.trim(),ar:j.trim()},category:oe===`communique`?`communique`:ce,author:ve.trim()||(i?.name?`${i.name} (Bureau AJTES)`:`Bureau Exécutif AJTES`),publishDate:new Date().toISOString().split(`T`)[0],imageUrl:t,featured:!0,type:oe,pdfUrl:ge.trim()?ge.trim():void 0,pdfSize:ge.trim()?`Document PDF Officiel`:void 0};n(r),xe(!0),setTimeout(()=>{xe(!1),D(!1),Se()},1500)},M=e.filter(e=>c===`all`?!0:c===`communique`?e.type===`communique`||e.category===`communique`||!!e.pdfUrl:c===`photo`?e.type===`photo`:c!==`article`||e.type===`article`||!e.type&&e.category!==`communique`);return(0,b.jsxs)(`div`,{className:`news-events-page`,children:[(0,b.jsx)(`section`,{className:`page-banner`,children:(0,b.jsxs)(`div`,{className:`banner-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Vie Associative & Communication Officielle`}),(0,b.jsx)(`h1`,{children:`Nouvelles & Communiqués AJTES`}),(0,b.jsx)(`p`,{children:`Consultez les publications officielles, les communiqués et les activités de l'association.`}),a&&(0,b.jsx)(`div`,{className:`banner-actions margin-top`,children:(0,b.jsx)(`button`,{className:`btn btn-gold btn-lg btn-publish-main`,onClick:Ce,children:`+ Nouvelle (Admin)`})})]})}),(0,b.jsxs)(`section`,{className:`section`,children:[(0,b.jsxs)(`div`,{className:`main-tab-bar`,children:[(0,b.jsxs)(`button`,{className:`tab-btn ${o===`news`?`active`:``}`,onClick:()=>s(`news`),children:[`Nouvelles (`,e.length,`)`]}),(0,b.jsxs)(`button`,{className:`tab-btn ${o===`events`?`active`:``}`,onClick:()=>s(`events`),children:[`Événements à Venir (`,t.length,`)`]})]}),o===`news`&&(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`filter-pills-bar`,children:[(0,b.jsx)(`span`,{className:`filter-label`,children:`Filtrer par type :`}),(0,b.jsxs)(`button`,{className:`pill-btn ${c===`all`?`active`:``}`,onClick:()=>l(`all`),children:[`Tous (`,e.length,`)`]}),(0,b.jsx)(`button`,{className:`pill-btn ${c===`communique`?`active`:``}`,onClick:()=>l(`communique`),children:`Communiqués & PDF`}),(0,b.jsx)(`button`,{className:`pill-btn ${c===`article`?`active`:``}`,onClick:()=>l(`article`),children:`Articles`}),(0,b.jsx)(`button`,{className:`pill-btn ${c===`photo`?`active`:``}`,onClick:()=>l(`photo`),children:`Photos`}),a&&(0,b.jsx)(`button`,{className:`btn btn-primary btn-sm btn-quick-new`,onClick:Ce,children:`+ Nouvelle`})]}),M.length===0?(0,b.jsxs)(`div`,{className:`card text-center margin-top-md`,style:{padding:`3.5rem 2rem`,background:`#FFFFFF`,border:`1px solid var(--neutral-border)`},children:[(0,b.jsx)(`h3`,{style:{fontSize:`1.25rem`,color:`var(--neutral-heading)`,marginBottom:`0.5rem`},children:`Aucune nouvelle n'a été publiée pour le moment`}),(0,b.jsx)(`p`,{style:{color:`var(--neutral-muted)`,fontSize:`0.95rem`,maxWidth:`500px`,margin:`0 auto`},children:`Consultez cette page ultérieurement pour découvrir les futurs communiqués et articles rédigés par l'AJTES.`})]}):(0,b.jsx)(`div`,{className:`grid-2 margin-top-md`,children:M.map(e=>{let t=e.type===`communique`||e.category===`communique`||!!e.pdfUrl,n=e.type===`photo`;return(0,b.jsxs)(`div`,{className:`news-card card ${t?`communique-card-border`:``}`,children:[(0,b.jsxs)(`div`,{className:`news-img-wrapper`,children:[(0,b.jsx)(`img`,{src:e.imageUrl,alt:e.title.fr,className:`news-img`}),t&&(0,b.jsx)(`span`,{className:`type-badge badge-communique`,children:`COMMUNIQUÉ OFFICIEL PDF`}),n&&(0,b.jsx)(`span`,{className:`type-badge badge-photo`,children:`ALBUM PHOTO`}),!t&&!n&&(0,b.jsx)(`span`,{className:`type-badge badge-article`,children:`ARTICLE`})]}),(0,b.jsxs)(`div`,{className:`news-body`,children:[(0,b.jsxs)(`div`,{className:`news-meta`,children:[(0,b.jsxs)(`span`,{className:`news-cat`,children:[`Catégorie : `,e.category]}),(0,b.jsxs)(`span`,{className:`news-date`,children:[`Date : `,e.publishDate]})]}),(0,b.jsx)(`h3`,{children:e.title[r]||e.title.fr}),(0,b.jsx)(`p`,{children:e.summary[r]||e.summary.fr}),e.pdfUrl&&(0,b.jsxs)(`div`,{className:`pdf-attachment-box`,children:[(0,b.jsxs)(`div`,{className:`pdf-info`,children:[(0,b.jsx)(`span`,{className:`pdf-title`,children:`Document Officiel PDF Joint`}),(0,b.jsx)(`span`,{className:`pdf-size`,children:e.pdfSize||`Fichier PDF`})]}),(0,b.jsx)(`a`,{href:e.pdfUrl,target:`_blank`,rel:`noreferrer`,className:`btn btn-gold btn-sm pdf-dl-btn`,download:!0,children:`Télécharger PDF`})]}),(0,b.jsxs)(`div`,{className:`reactions-bar`,style:{display:`flex`,gap:`0.4rem`,margin:`0.75rem 0`,alignItems:`center`,flexWrap:`wrap`},children:[(0,b.jsxs)(`button`,{type:`button`,className:`btn-reaction`,onClick:()=>T(e.id,`likes`),style:{border:`1px solid #E5E7EB`,background:`#F9FAFB`,borderRadius:`20px`,padding:`0.25rem 0.65rem`,fontSize:`0.8rem`,cursor:`pointer`,fontWeight:600},children:[`👍 J'aime (`,g[e.id]?.likes||0,`)`]}),(0,b.jsxs)(`button`,{type:`button`,className:`btn-reaction`,onClick:()=>T(e.id,`hearts`),style:{border:`1px solid #E5E7EB`,background:`#F9FAFB`,borderRadius:`20px`,padding:`0.25rem 0.65rem`,fontSize:`0.8rem`,cursor:`pointer`,fontWeight:600},children:[`❤️ Soutien (`,g[e.id]?.hearts||0,`)`]}),(0,b.jsxs)(`button`,{type:`button`,className:`btn-reaction`,onClick:()=>T(e.id,`claps`),style:{border:`1px solid #E5E7EB`,background:`#F9FAFB`,borderRadius:`20px`,padding:`0.25rem 0.65rem`,fontSize:`0.8rem`,cursor:`pointer`,fontWeight:600},children:[`👏 Bravo (`,g[e.id]?.claps||0,`)`]}),(0,b.jsxs)(`button`,{type:`button`,onClick:()=>ie(w===e.id?null:e.id),style:{border:`1px solid var(--primary-emerald)`,background:w===e.id?`var(--primary-emerald-light)`:`#FFF`,color:`var(--primary-emerald-text)`,borderRadius:`20px`,padding:`0.25rem 0.65rem`,fontSize:`0.8rem`,cursor:`pointer`,fontWeight:700,marginLeft:`auto`},children:[`💬 Commenter (`,(x[e.id]||[]).length,`)`]})]}),w===e.id&&(0,b.jsxs)(`div`,{className:`inline-comment-drawer`,style:{background:`#F8FAFC`,border:`1px solid #E2E8F0`,borderRadius:`12px`,padding:`1rem`,marginTop:`0.75rem`,marginBottom:`0.75rem`},children:[(0,b.jsxs)(`h4`,{style:{fontSize:`0.92rem`,color:`var(--neutral-heading)`,marginBottom:`0.6rem`,fontWeight:700},children:[`💬 Commentaires des visiteurs (`,(x[e.id]||[]).length,`)`]}),(0,b.jsxs)(`form`,{onSubmit:t=>E(t,e.id),style:{marginBottom:`1rem`},children:[(0,b.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginBottom:`0.5rem`},children:(0,b.jsx)(`input`,{type:`text`,placeholder:`Votre Nom / Prénom (Optionnel)`,value:S,onChange:e=>te(e.target.value),className:`form-control`,style:{fontSize:`0.82rem`,padding:`0.4rem 0.65rem`}})}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Écrivez votre commentaire ici...`,value:ne,onChange:e=>re(e.target.value),className:`form-control`,style:{flex:1,fontSize:`0.85rem`,padding:`0.45rem 0.65rem`}}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-gold btn-sm`,style:{padding:`0.4rem 0.85rem`,fontSize:`0.82rem`,fontWeight:700},children:`Envoyer`})]})]}),(0,b.jsx)(`div`,{style:{maxHeight:`200px`,overflowY:`auto`,display:`flex`,flexDirection:`column`,gap:`0.4rem`},children:(x[e.id]||[]).length===0?(0,b.jsx)(`p`,{style:{fontSize:`0.8rem`,color:`#94A3B8`,fontStyle:`italic`,margin:0},children:`Aucun commentaire pour le moment. Soyez le premier à réagir !`}):(x[e.id]||[]).map(e=>(0,b.jsxs)(`div`,{style:{background:`#FFFFFF`,padding:`0.5rem 0.75rem`,borderRadius:`8px`,border:`1px solid #E2E8F0`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`0.2rem`},children:[(0,b.jsx)(`strong`,{style:{fontSize:`0.82rem`,color:`#1E293B`},children:e.author}),(0,b.jsx)(`span`,{style:{fontSize:`0.72rem`,color:`#94A3B8`},children:e.date})]}),(0,b.jsx)(`p`,{style:{margin:0,fontSize:`0.83rem`,color:`#334155`,lineHeight:1.4},children:e.text})]},e.id))})]}),(0,b.jsxs)(`div`,{className:`news-footer`,children:[(0,b.jsxs)(`span`,{className:`author`,children:[`Auteur : `,e.author]}),(0,b.jsx)(`button`,{className:`btn btn-outline-emerald btn-sm`,onClick:()=>d(e),children:`Lire l'article & réagir →`})]})]})]},e.id)})})]}),o===`events`&&(0,b.jsx)(`div`,{className:`grid-2`,children:t.map(e=>(0,b.jsxs)(`div`,{className:`event-card card`,children:[(0,b.jsx)(`img`,{src:e.imageUrl,alt:e.title.fr,className:`event-img`}),(0,b.jsxs)(`div`,{className:`event-body`,children:[(0,b.jsx)(`div`,{className:`event-date-badge`,children:(0,b.jsx)(`span`,{children:e.date})}),(0,b.jsx)(`h3`,{children:e.title[r]||e.title.fr}),(0,b.jsxs)(`p`,{className:`event-info`,children:[`Lieu : `,e.location,` • Heure : `,e.time]}),(0,b.jsx)(`p`,{className:`event-desc`,children:e.description[r]||e.description.fr}),(0,b.jsxs)(`div`,{className:`event-footer`,children:[(0,b.jsxs)(`span`,{className:`attendees-count`,children:[e.registeredCount,` Inscrits`]}),(0,b.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>p(e),children:`S'inscrire à l'événement`})]})]})]},e.id))})]}),ae&&(0,b.jsx)(`div`,{className:`modal-overlay`,onClick:()=>D(!1),children:(0,b.jsxs)(`div`,{className:`modal-content publish-modal-content`,onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(`button`,{className:`modal-close`,onClick:()=>D(!1),children:`✕`}),be?(0,b.jsxs)(`div`,{className:`success-box text-center`,children:[(0,b.jsx)(`h2`,{children:`Publication Réussie !`}),(0,b.jsxs)(`p`,{children:[`Votre nouvelle (`,(0,b.jsx)(`strong`,{children:O}),`) a été publiée avec succès sur le site officiel de l'AJTES.`]})]}):(0,b.jsxs)(`form`,{onSubmit:Te,className:`publish-form`,children:[(0,b.jsxs)(`div`,{className:`modal-header-box`,children:[(0,b.jsx)(`h2`,{children:`Formulaire de Publication Officielle`}),(0,b.jsx)(`p`,{children:`Ajoutez un nouvel article de presse, un communiqué PDF officiel ou un album photo.`})]}),(0,b.jsxs)(`div`,{className:`pub-type-selector`,children:[(0,b.jsx)(`button`,{type:`button`,className:`pub-type-btn ${oe===`article`?`active`:``}`,onClick:()=>se(`article`),children:`Article de presse`}),(0,b.jsx)(`button`,{type:`button`,className:`pub-type-btn ${oe===`communique`?`active`:``}`,onClick:()=>se(`communique`),children:`Communiqué PDF`}),(0,b.jsx)(`button`,{type:`button`,className:`pub-type-btn ${oe===`photo`?`active`:``}`,onClick:()=>se(`photo`),children:`Album Photo`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Titre de la Publication *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Saisissez le titre de l'article ou du communiqué...`,value:O,onChange:e=>k(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Catégorie *`}),(0,b.jsxs)(`select`,{value:ce,onChange:e=>le(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:`education`,children:`Éducation`}),(0,b.jsx)(`option`,{value:`solidarite`,children:`Solidarité`}),(0,b.jsx)(`option`,{value:`environnement`,children:`Environnement`}),(0,b.jsx)(`option`,{value:`communique`,children:`Communiqué Officiel`}),(0,b.jsx)(`option`,{value:`humanitaire`,children:`Humanitaire`}),(0,b.jsx)(`option`,{value:`culture`,children:`Culture & Sport`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Auteur / Organe émetteur`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Ex: Bureau Exécutif AJTES / Salomon`,value:ve,onChange:e=>ye(e.target.value),className:`form-control`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Court Résumé (Introductif)`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Brève accroche synthétique (optionnelle)`,value:ue,onChange:e=>A(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Contenu Rédactionnel Complet *`}),(0,b.jsx)(`textarea`,{required:!0,rows:4,placeholder:`Saisissez ici le texte intégral...`,value:j,onChange:e=>fe(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`URL de l'Illustration (Optionnelle)`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Ex: ./images/IMG-20260813-WA0123.jpg`,value:me,onChange:e=>he(e.target.value),className:`form-control`})]}),oe===`communique`&&(0,b.jsxs)(`div`,{className:`form-group highlight-pdf-input`,children:[(0,b.jsx)(`label`,{children:`Lien du Document PDF Joint (Communiqué officiel)`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Ex: https://exemple.org/communique.pdf`,value:ge,onChange:e=>_e(e.target.value),className:`form-control`}),(0,b.jsx)(`small`,{style:{color:`var(--neutral-muted)`,marginTop:`0.25rem`,display:`block`},children:`Renseignez l'emplacement ou l'URL du fichier PDF téléchargeable.`})]}),(0,b.jsxs)(`div`,{className:`modal-actions-row margin-top`,children:[(0,b.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,onClick:()=>D(!1),children:`Annuler`}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-lg flex-1`,children:`Valider & Publier`})]})]})]})}),u&&(0,b.jsx)(`div`,{className:`modal-overlay`,onClick:()=>d(null),children:(0,b.jsxs)(`div`,{className:`modal-content news-detail-modal`,onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(`button`,{className:`modal-close`,onClick:()=>d(null),children:`✕`}),(0,b.jsx)(`img`,{src:u.imageUrl,alt:``,className:`modal-img`}),(0,b.jsxs)(`div`,{className:`modal-header-meta`,children:[(0,b.jsxs)(`span`,{className:`news-cat`,children:[`Catégorie : `,u.category]}),(0,b.jsx)(`h2`,{children:u.title[r]||u.title.fr}),(0,b.jsxs)(`p`,{className:`meta-line`,children:[`Auteur : `,(0,b.jsx)(`strong`,{children:u.author}),` • Date : `,u.publishDate]})]}),u.pdfUrl&&(0,b.jsxs)(`div`,{className:`pdf-attachment-box margin-bottom-md`,children:[(0,b.jsxs)(`div`,{className:`pdf-info`,children:[(0,b.jsx)(`span`,{className:`pdf-title`,children:`Document Officiel PDF Rattaché`}),(0,b.jsx)(`span`,{className:`pdf-size`,children:u.pdfSize||`Document PDF`})]}),(0,b.jsx)(`a`,{href:u.pdfUrl,target:`_blank`,rel:`noreferrer`,className:`btn btn-gold btn-sm pdf-dl-btn`,download:!0,children:`Télécharger le PDF Officiel`})]}),(0,b.jsx)(`div`,{className:`full-content-text`,children:(0,b.jsx)(`p`,{children:u.content[r]||u.content.fr})}),(0,b.jsxs)(`div`,{className:`news-comments-section margin-top-lg`,style:{borderTop:`1px solid #E5E7EB`,paddingTop:`1.25rem`},children:[(0,b.jsxs)(`h3`,{style:{fontSize:`1.1rem`,marginBottom:`0.75rem`,color:`var(--neutral-heading)`},children:[`Réactions & Commentaires des Visiteurs (`,(x[u.id]||[]).length,`)`]}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`0.75rem`,marginBottom:`1.25rem`},children:[(0,b.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm`,onClick:()=>T(u.id,`likes`),children:[`J'aime (`,g[u.id]?.likes||0,`)`]}),(0,b.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm`,onClick:()=>T(u.id,`hearts`),children:[`Soutien (`,g[u.id]?.hearts||0,`)`]}),(0,b.jsxs)(`button`,{type:`button`,className:`btn btn-secondary btn-sm`,onClick:()=>T(u.id,`claps`),children:[`Bravo (`,g[u.id]?.claps||0,`)`]})]}),(0,b.jsxs)(`form`,{onSubmit:e=>E(e,u.id),style:{marginBottom:`1.5rem`},children:[(0,b.jsx)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginBottom:`0.5rem`},children:(0,b.jsx)(`input`,{type:`text`,placeholder:`Votre Nom ou Prénom (optionnel)`,value:S,onChange:e=>te(e.target.value),className:`form-control`,style:{maxWidth:`250px`}})}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,b.jsx)(`textarea`,{rows:2,required:!0,placeholder:`Exprimez votre réaction, encouragement ou avis...`,value:ne,onChange:e=>re(e.target.value),className:`form-control`,style:{flex:1}}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-gold btn-sm`,style:{alignSelf:`flex-end`,padding:`0.6rem 1rem`},children:`Poster`})]})]}),(0,b.jsx)(`div`,{className:`comments-list`,children:(x[u.id]||[]).length===0?(0,b.jsx)(`p`,{style:{color:`#9CA3AF`,fontSize:`0.88rem`,fontStyle:`italic`},children:`Soyez le premier à commenter cette publication !`}):(x[u.id]||[]).map(e=>(0,b.jsxs)(`div`,{style:{background:`#F9FAFB`,padding:`0.75rem 1rem`,borderRadius:`8px`,marginBottom:`0.5rem`,border:`1px solid #F3F4F6`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`0.25rem`},children:[(0,b.jsx)(`strong`,{style:{fontSize:`0.88rem`,color:`#1F2937`},children:e.author}),(0,b.jsx)(`span`,{style:{fontSize:`0.75rem`,color:`#9CA3AF`},children:e.date})]}),(0,b.jsx)(`p`,{style:{margin:0,fontSize:`0.88rem`,color:`#4B5563`},children:e.text})]},e.id))})]})]})}),f&&(0,b.jsx)(`div`,{className:`modal-overlay`,onClick:()=>p(null),children:(0,b.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(`button`,{className:`modal-close`,onClick:()=>p(null),children:`✕`}),m?(0,b.jsxs)(`div`,{className:`success-box text-center`,children:[(0,b.jsx)(`h2`,{children:`Inscription Confirmée !`}),(0,b.jsxs)(`p`,{children:[`Votre place a été réservée pour : `,(0,b.jsx)(`strong`,{children:f.title.fr}),`.`]}),(0,b.jsx)(`p`,{children:`Un email de confirmation vous sera envoyé.`})]}):(0,b.jsxs)(`form`,{onSubmit:we,className:`rsvp-form`,children:[(0,b.jsx)(`h2`,{children:`Formulaire d'Inscription`}),(0,b.jsxs)(`p`,{children:[`Événement : `,(0,b.jsx)(`strong`,{children:f.title.fr})]}),(0,b.jsxs)(`p`,{className:`sub`,children:[`Lieu : `,f.location,` | Date : `,f.date]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Nom et Prénom *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Votre nom complet`,className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Adresse E-mail *`}),(0,b.jsx)(`input`,{type:`email`,required:!0,placeholder:`votre.email@example.td`,className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Téléphone / WhatsApp *`}),(0,b.jsx)(`input`,{type:`tel`,required:!0,placeholder:`+235 60 00 00 00`,className:`form-control`})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-lg w-full`,children:`Valider mon inscription`})]})]})}),(0,b.jsx)(`style`,{children:`
        .page-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 3.5rem 1.5rem;
          text-align: center;
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-container h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 0.75rem 0;
        }

        .banner-actions {
          margin-top: 1.5rem;
        }

        .btn-publish-main {
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.35);
          font-size: 1rem;
          padding: 0.85rem 1.75rem;
        }

        .main-tab-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tab-btn {
          padding: 0.85rem 1.75rem;
          font-size: 1.05rem;
          font-weight: 700;
          background: var(--neutral-card-bg);
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          color: var(--neutral-heading);
          transition: all 0.2s;
        }

        .tab-btn.active {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
          box-shadow: var(--shadow-md);
        }

        .filter-pills-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          background: var(--neutral-light-bg);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-border);
        }

        .filter-label {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--neutral-heading);
          margin-right: 0.5rem;
        }

        .pill-btn {
          background: #FFFFFF;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-pill);
          padding: 0.4rem 0.85rem;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pill-btn.active, .pill-btn:hover {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          border-color: var(--primary-emerald);
        }

        .btn-quick-new {
          margin-left: auto;
          font-weight: 700;
        }

        .news-card {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .communique-card-border {
          border: 2px solid var(--accent-gold);
        }

        .news-img-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
        }

        .news-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .type-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .badge-communique {
          background: #121A24;
          color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
        }

        .badge-photo {
          background: #9C27B0;
          color: #FFF;
        }

        .badge-article {
          background: var(--primary-emerald);
          color: #FFF;
        }

        .news-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .news-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--primary-emerald-text);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .news-body h3 {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }

        .news-body p {
          font-size: 0.92rem;
          color: var(--neutral-body);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .pdf-attachment-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #FFFDF0;
          border: 1px dashed var(--accent-gold);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }

        .pdf-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .pdf-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: #121A24;
        }

        .pdf-size {
          font-size: 0.75rem;
          color: var(--neutral-muted);
        }

        .pdf-dl-btn {
          text-decoration: none;
          white-space: nowrap;
        }

        .news-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--neutral-border);
        }

        .author {
          font-size: 0.82rem;
          color: var(--neutral-muted);
        }

        .event-card {
          display: flex;
          flex-direction: column;
        }

        .event-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .event-body {
          padding: 1.5rem;
        }

        .event-date-badge {
          display: inline-block;
          background: var(--accent-gold-light);
          color: var(--accent-gold-hover);
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }

        .event-info {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary-emerald);
          margin-bottom: 0.5rem;
        }

        .event-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--neutral-border);
        }

        .attendees-count {
          font-size: 0.85rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        /* Modal specific styling */
        .publish-modal-content {
          max-width: 680px;
          padding: 2.25rem;
        }

        .modal-header-box {
          margin-bottom: 1.25rem;
        }

        .modal-header-box h2 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        .pub-type-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .pub-type-btn {
          flex: 1;
          padding: 0.6rem 0.5rem;
          border: 1px solid var(--neutral-border);
          background: var(--neutral-light-bg);
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .pub-type-btn.active {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
        }

        .publish-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .highlight-pdf-input {
          background: #FFFDF0;
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px dashed var(--accent-gold);
        }

        .modal-actions-row {
          display: flex;
          gap: 0.75rem;
        }

        .flex-1 { flex: 1; }

        .meta-line {
          font-size: 0.85rem;
          color: var(--neutral-muted);
          margin-bottom: 1rem;
        }

        .full-content-text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--neutral-dark);
        }

        .rsvp-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
        }

        .form-control {
          padding: 0.75rem 1rem;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: var(--font-main);
        }

        .success-box {
          padding: 2rem 1rem;
        }

        .margin-bottom-md {
          margin-bottom: 1.25rem;
        }
      `})]})},qe=()=>{let{t:e,language:t}=C(),{media:n}=pe(),[r,i]=(0,_.useState)(`photo`),[a,o]=(0,_.useState)(null),s=n.filter(e=>e.type===r),c=n.filter(e=>e.type===`photo`).length,l=n.filter(e=>e.type===`video`).length;return(0,b.jsxs)(`div`,{className:`gallery-page`,children:[(0,b.jsx)(`div`,{className:`page-banner`,children:(0,b.jsxs)(`div`,{className:`banner-container`,children:[(0,b.jsxs)(`span`,{className:`section-badge`,style:{background:`rgba(255,255,255,0.15)`,color:`#FFF`},children:[e(`navGallery`),` AJTES`]}),(0,b.jsx)(`h1`,{children:`Médiathèque Officielle — Galerie Photos & Vidéos`}),(0,b.jsx)(`p`,{children:`Retrouvez en images et vidéos le fil des réalisations, des chantiers d'infrastructures éducatives au CEG, des distributions scolaires et des événements de l'AJTES.`})]})}),(0,b.jsxs)(`section`,{className:`section container`,children:[(0,b.jsx)(`div`,{className:`gallery-filter-container`,children:(0,b.jsxs)(`div`,{className:`type-tabs`,children:[(0,b.jsxs)(`button`,{className:`filter-btn ${r===`photo`?`active`:``}`,onClick:()=>i(`photo`),children:[`Photos (`,c,`)`]}),(0,b.jsxs)(`button`,{className:`filter-btn ${r===`video`?`active`:``}`,onClick:()=>i(`video`),children:[`Vidéos (`,l,`)`]})]})}),s.length===0?(0,b.jsx)(`div`,{className:`empty-gallery`,children:(0,b.jsx)(`p`,{children:`Aucun média ne correspond aux filtres sélectionnés.`})}):(0,b.jsx)(`div`,{className:`grid-3`,children:s.map(e=>(0,b.jsxs)(`div`,{className:`gallery-card card`,onClick:()=>o(e),children:[(0,b.jsxs)(`div`,{className:`media-thumb-box`,children:[(0,b.jsx)(`img`,{src:e.type===`video`?e.thumbnailUrl||`/images/IMG-20260813-WA0106.jpg`:e.url,alt:e.title.fr,loading:`lazy`}),e.type===`video`&&(0,b.jsxs)(`div`,{className:`video-play-overlay`,children:[(0,b.jsx)(`span`,{className:`play-icon`,children:`▶`}),(0,b.jsx)(`span`,{className:`video-badge`,children:`Vidéo MP4`})]}),(0,b.jsx)(`span`,{className:`year-pill`,children:e.year})]}),(0,b.jsxs)(`div`,{className:`gallery-card-body`,children:[(0,b.jsxs)(`span`,{className:`media-category`,children:[e.category,` • `,e.location||`Tchad`]}),(0,b.jsx)(`h4`,{children:e.title[t]||e.title.fr})]})]},e.id))})]}),a&&(0,b.jsx)(`div`,{className:`modal-overlay`,onClick:()=>o(null),children:(0,b.jsxs)(`div`,{className:`modal-content media-lightbox-content`,onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(`button`,{className:`modal-close`,onClick:()=>o(null),children:`✕`}),a.type===`photo`?(0,b.jsxs)(`div`,{className:`lightbox-photo-box`,children:[(0,b.jsx)(`img`,{src:a.url,alt:a.title.fr,className:`lightbox-img`}),(0,b.jsxs)(`div`,{className:`lightbox-info`,children:[(0,b.jsx)(`h3`,{children:a.title[t]||a.title.fr}),(0,b.jsxs)(`p`,{className:`lightbox-meta`,children:[`Année: `,(0,b.jsx)(`strong`,{children:a.year}),` • Catégorie: `,(0,b.jsx)(`strong`,{children:a.category}),` • Lieu: `,(0,b.jsx)(`strong`,{children:a.location||`Tchad`})]}),(0,b.jsx)(`a`,{href:a.url,download:!0,className:`btn-download`,target:`_blank`,rel:`noopener noreferrer`,children:`Télécharger l'image HD`})]})]}):(0,b.jsxs)(`div`,{className:`lightbox-video-box`,children:[a.url.endsWith(`.mp4`)||a.url.startsWith(`/videos/`)||a.url.startsWith(`/media/`)?(0,b.jsx)(`video`,{src:a.url,controls:!0,autoPlay:!0,controlsList:`nodownload`,className:`lightbox-video-player`,children:`Votre navigateur ne supporte pas la lecture de vidéos HTML5.`}):(0,b.jsx)(`iframe`,{src:a.url,title:a.title.fr,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0,className:`video-iframe`}),(0,b.jsxs)(`div`,{className:`lightbox-info`,children:[(0,b.jsx)(`h3`,{children:a.title[t]||a.title.fr}),(0,b.jsxs)(`p`,{className:`lightbox-meta`,children:[`Année: `,(0,b.jsx)(`strong`,{children:a.year}),` • Catégorie: `,(0,b.jsx)(`strong`,{children:a.category}),` • Lieu: `,(0,b.jsx)(`strong`,{children:a.location||`Tchad`})]}),(0,b.jsx)(`a`,{href:a.url,download:!0,className:`btn-download`,target:`_blank`,rel:`noopener noreferrer`,children:`Télécharger la vidéo MP4`})]})]})]})}),(0,b.jsx)(`style`,{children:`
        .page-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-container h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 1rem 0;
        }

        .gallery-filter-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          background: var(--neutral-card-bg);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--neutral-border);
          box-shadow: 0 4px 15px rgba(0,0,0,0.04);
        }

        .type-tabs, .category-tabs, .year-tabs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--neutral-muted);
          margin-right: 0.5rem;
        }

        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--neutral-border);
          background: var(--neutral-light-bg);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn.active, .filter-btn:hover {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
        }

        .category-btn, .year-btn {
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--neutral-border);
          background: var(--neutral-light-bg);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .category-btn.active {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
        }

        .year-btn.active {
          background: var(--accent-gold);
          color: #121A24;
          border-color: var(--accent-gold);
          font-weight: 800;
        }

        .empty-gallery {
          text-align: center;
          padding: 3rem;
          background: var(--neutral-card-bg);
          border-radius: var(--radius-md);
          color: var(--neutral-muted);
        }

        .gallery-card {
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .media-thumb-box {
          position: relative;
          height: 230px;
          overflow: hidden;
          background: #000;
        }

        .media-thumb-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-card:hover .media-thumb-box img {
          transform: scale(1.08);
        }

        .video-play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: background 0.3s;
        }

        .gallery-card:hover .video-play-overlay {
          background: rgba(0, 122, 61, 0.5);
        }

        .play-icon {
          width: 58px;
          height: 58px;
          background: var(--primary-emerald);
          color: #FFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          padding-left: 4px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s;
        }

        .gallery-card:hover .play-icon {
          transform: scale(1.15);
          background: var(--accent-gold);
          color: #121A24;
        }

        .video-badge {
          background: rgba(0,0,0,0.75);
          color: #FFF;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-pill);
        }

        .year-pill {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          background: rgba(18, 26, 36, 0.88);
          color: var(--accent-gold);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          backdrop-filter: blur(4px);
        }

        [dir="rtl"] .year-pill {
          right: auto;
          left: 0.75rem;
        }

        .gallery-card-body {
          padding: 1.25rem;
        }

        .media-category {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-emerald);
          display: block;
          margin-bottom: 0.4rem;
        }

        .gallery-card-body h4 {
          font-size: 1.05rem;
          color: var(--neutral-heading);
          line-height: 1.4;
        }

        .media-lightbox-content {
          max-width: 900px;
          width: 92%;
          background: #FFF;
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          position: relative;
        }

        .lightbox-img {
          width: 100%;
          max-height: 520px;
          object-fit: contain;
          border-radius: var(--radius-md);
          background: #000;
          margin-bottom: 1rem;
        }

        .lightbox-video-player {
          width: 100%;
          max-height: 520px;
          border-radius: var(--radius-md);
          background: #000;
          margin-bottom: 1rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }

        .video-iframe {
          width: 100%;
          height: 480px;
          border: none;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }

        .lightbox-info h3 {
          font-size: 1.25rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .lightbox-meta {
          font-size: 0.9rem;
          color: var(--neutral-muted);
          margin-bottom: 1rem;
        }

        .btn-download {
          display: inline-block;
          background: var(--primary-emerald);
          color: #FFF;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: background 0.2s;
        }

        .btn-download:hover {
          background: var(--primary-emerald-dark);
          color: #FFF;
        }
      `})]})},Je=()=>{let{addDonation:e,projects:t}=pe(),{t:n}=C(),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(1e4),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(`airtel_money`),[h,g]=(0,_.useState)(``),[v,y]=(0,_.useState)(null);return(0,b.jsxs)(`div`,{className:`donation-page`,children:[(0,b.jsx)(`section`,{className:`page-banner`,children:(0,b.jsxs)(`div`,{className:`banner-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Solidarité & Soutien`}),(0,b.jsx)(`h1`,{children:`Faire un Don à l'AJTES`}),(0,b.jsx)(`p`,{children:`Votre contribution (même modeste) permet de financer les kits scolaires des élèves et la rénovation des écoles au Tchad.`})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsx)(`div`,{className:`donation-form-wrapper card`,children:v?(0,b.jsxs)(`div`,{className:`receipt-container`,children:[(0,b.jsx)(`div`,{className:`receipt-badge`,children:`TRANSACTION RÉUSSIE`}),(0,b.jsx)(`h2`,{children:n(`receiptTitle`)}),(0,b.jsxs)(`p`,{className:`receipt-ref`,children:[`Référence Transaction: `,(0,b.jsx)(`strong`,{children:v.reference})]}),(0,b.jsxs)(`div`,{className:`receipt-details-table`,children:[(0,b.jsxs)(`div`,{className:`receipt-row`,children:[(0,b.jsx)(`span`,{children:`Donateur:`}),(0,b.jsxs)(`strong`,{children:[v.donorName,` (`,v.donorEmail,`)`]})]}),(0,b.jsxs)(`div`,{className:`receipt-row`,children:[(0,b.jsx)(`span`,{children:`Montant versé:`}),(0,b.jsxs)(`strong`,{className:`receipt-amount`,children:[v.amount.toLocaleString(),` FCFA`]})]}),(0,b.jsxs)(`div`,{className:`receipt-row`,children:[(0,b.jsx)(`span`,{children:`Projet soutenu:`}),(0,b.jsx)(`strong`,{children:v.projectTitle})]}),(0,b.jsxs)(`div`,{className:`receipt-row`,children:[(0,b.jsx)(`span`,{children:`Mode de Paiement:`}),(0,b.jsx)(`strong`,{children:v.paymentMethod===`airtel_money`?`Airtel Money Tchad`:v.paymentMethod===`moov_africa`?`Moov Africa Tchad`:`Carte Bancaire`})]}),(0,b.jsxs)(`div`,{className:`receipt-row`,children:[(0,b.jsx)(`span`,{children:`Date:`}),(0,b.jsx)(`strong`,{children:v.date})]})]}),(0,b.jsxs)(`div`,{className:`receipt-actions`,children:[(0,b.jsx)(`a`,{href:`http://localhost:5000/api/donations/${v.reference}/receipt`,target:`_blank`,rel:`noopener noreferrer`,className:`btn btn-gold`,style:{display:`inline-flex`,alignItems:`center`,gap:`0.5rem`,textDecoration:`none`},children:`Télécharger le Reçu Officiel PDF (avec QR Code)`}),(0,b.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>window.print(),children:`Imprimer ce Reçu`}),(0,b.jsx)(`button`,{className:`btn btn-secondary`,onClick:()=>y(null),children:`Effectuer un autre don`})]})]}):(0,b.jsxs)(`form`,{onSubmit:n=>{n.preventDefault();let i=l?parseFloat(l):s;if(!i||i<=0)return;let o=t.find(e=>e.id===d),c=e({donorName:r||`Donateur Anonyme`,donorEmail:a||`donateur@ajtes.td`,amount:i,projectId:d||void 0,projectTitle:o?o.title.fr:`Soutien général aux actions AJTES`,paymentMethod:p});y(c)},className:`donation-form`,children:[(0,b.jsx)(`h2`,{className:`form-title`,children:`1. Choisissez le montant du Don (FCFA)`}),(0,b.jsx)(`div`,{className:`amount-grid`,children:[2e3,5e3,1e4,25e3,5e4].map(e=>(0,b.jsxs)(`button`,{type:`button`,className:`amount-btn ${s===e&&!l?`active`:``}`,onClick:()=>{c(e),u(``)},children:[e.toLocaleString(),` FCFA`]},e))}),(0,b.jsxs)(`div`,{className:`form-group margin-top`,children:[(0,b.jsx)(`label`,{children:`Ou saisissez un montant libre (FCFA) :`}),(0,b.jsx)(`input`,{type:`number`,placeholder:`Ex: 15000`,value:l,onChange:e=>u(e.target.value),className:`form-control`})]}),(0,b.jsx)(`h2`,{className:`form-title margin-top-lg`,children:`2. Choisissez l'affectation du Don`}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Projet à soutenir (Optionnel) :`}),(0,b.jsxs)(`select`,{value:d,onChange:e=>f(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:``,children:`Fonds Général (Éducation & Solidarité Jeunesse)`}),t.map(e=>(0,b.jsxs)(`option`,{value:e.id,children:[e.title.fr,` (`,e.location,`)`]},e.id))]})]}),(0,b.jsx)(`h2`,{className:`form-title margin-top-lg`,children:`3. Choisissez le Moyen de Paiement`}),(0,b.jsxs)(`div`,{className:`payment-grid`,children:[(0,b.jsx)(`div`,{className:`payment-card ${p===`airtel_money`?`active`:``}`,onClick:()=>m(`airtel_money`),children:(0,b.jsxs)(`div`,{className:`pay-text`,children:[(0,b.jsx)(`strong`,{children:`Airtel Money Tchad`}),(0,b.jsx)(`span`,{children:`Paiement mobile instantané`})]})}),(0,b.jsx)(`div`,{className:`payment-card ${p===`moov_africa`?`active`:``}`,onClick:()=>m(`moov_africa`),children:(0,b.jsxs)(`div`,{className:`pay-text`,children:[(0,b.jsx)(`strong`,{children:`Moov Africa Tchad`}),(0,b.jsx)(`span`,{children:`Paiement mobile sécurisé`})]})}),(0,b.jsx)(`div`,{className:`payment-card ${p===`carte_bancaire`?`active`:``}`,onClick:()=>m(`carte_bancaire`),children:(0,b.jsxs)(`div`,{className:`pay-text`,children:[(0,b.jsx)(`strong`,{children:`Carte Bancaire`}),(0,b.jsx)(`span`,{children:`Visa / Mastercard`})]})})]}),p===`airtel_money`&&(0,b.jsxs)(`div`,{className:`airtel-info-box margin-top`,children:[(0,b.jsx)(`div`,{className:`airtel-title`,children:`INSTRUCTIONS AIRTEL MONEY TCHAD (*150#)`}),(0,b.jsxs)(`div`,{className:`airtel-numbers`,children:[(0,b.jsxs)(`span`,{children:[`Numéro 1 : `,(0,b.jsx)(`strong`,{children:`+235 66 43 95 02`})]}),(0,b.jsxs)(`span`,{children:[`Numéro 2 : `,(0,b.jsx)(`strong`,{children:`+235 68 90 23 47`})]})]}),(0,b.jsxs)(`p`,{className:`airtel-desc`,children:[(0,b.jsx)(`strong`,{children:`Procédure USSD :`}),` Composez `,(0,b.jsx)(`code`,{children:`*150#`}),` sur votre mobile -> Sélectionnez `,(0,b.jsx)(`em`,{children:`"Envoi d'argent"`}),` -> Saisissez l'un des numéros ci-dessus -> Entrez le montant et validez avec votre code secret.`]})]}),p===`moov_africa`&&(0,b.jsxs)(`div`,{className:`airtel-info-box margin-top`,style:{background:`#E0F2FE`,borderColor:`#0284C7`},children:[(0,b.jsx)(`div`,{className:`airtel-title`,style:{color:`#0369A1`},children:`INSTRUCTIONS MOOV AFRICA TCHAD (*800#)`}),(0,b.jsx)(`div`,{className:`airtel-numbers`,children:(0,b.jsxs)(`span`,{children:[`Moov Money : `,(0,b.jsx)(`strong`,{children:`+235 99 00 11 22`})]})}),(0,b.jsxs)(`p`,{className:`airtel-desc`,style:{color:`#075985`},children:[(0,b.jsx)(`strong`,{children:`Procédure USSD :`}),` Composez `,(0,b.jsx)(`code`,{children:`*800#`}),` -> Choisissez `,(0,b.jsx)(`em`,{children:`"Transfert d'argent"`}),` -> Entrez le numéro de l'association et le montant.`]})]}),(p===`airtel_money`||p===`moov_africa`)&&(0,b.jsxs)(`div`,{className:`form-group margin-top`,children:[(0,b.jsxs)(`label`,{children:[`Votre Numéro de Téléphone `,p===`airtel_money`?`Airtel Money`:`Moov Africa`,` (Tchad) *`]}),(0,b.jsx)(`input`,{type:`tel`,required:!0,placeholder:`Ex: 66439502 ou 68902347`,value:h,onChange:e=>g(e.target.value),className:`form-control`})]}),(0,b.jsx)(`h2`,{className:`form-title margin-top-lg`,children:`4. Vos Coordonnées`}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Nom et Prénom *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Votre nom complet`,value:r,onChange:e=>i(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Adresse E-mail *`}),(0,b.jsx)(`input`,{type:`email`,required:!0,placeholder:`votre.email@example.td`,value:a,onChange:e=>o(e.target.value),className:`form-control`})]})]}),(0,b.jsx)(`div`,{className:`margin-top-lg`,children:(0,b.jsxs)(`button`,{type:`submit`,className:`btn btn-gold btn-lg w-full`,children:[`Confirmer le Don de `,(l?parseFloat(l):s).toLocaleString(),` FCFA`]})})]})})}),(0,b.jsx)(`style`,{children:`
        .page-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-container h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 1rem 0;
        }

        .donation-form-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 2.5rem;
        }

        .form-title {
          font-size: 1.25rem;
          color: var(--primary-emerald);
          border-bottom: 2px solid var(--primary-emerald-light);
          padding-bottom: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .margin-top { margin-top: 1.25rem; }
        .margin-top-lg { margin-top: 2rem; }

        .amount-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 1rem;
        }

        .amount-btn {
          padding: 0.9rem;
          background: var(--neutral-light-bg);
          border: 2px solid var(--neutral-border);
          border-radius: var(--radius-md);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--neutral-heading);
          cursor: pointer;
          transition: all 0.2s;
        }

        .amount-btn.active, .amount-btn:hover {
          background: var(--accent-gold);
          border-color: var(--accent-gold-hover);
          color: #121A24;
        }

        .payment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }

        .payment-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          border: 2px solid var(--neutral-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s;
          background: var(--neutral-light-bg);
        }

        .payment-card.active, .payment-card:hover {
          border-color: var(--primary-emerald);
          background: var(--primary-emerald-light);
        }

        .pay-icon { font-size: 2rem; }

        .pay-text {
          display: flex;
          flex-direction: column;
        }

        .pay-text strong {
          font-size: 0.95rem;
          color: var(--neutral-heading);
        }

        .pay-text span {
          font-size: 0.78rem;
          color: var(--neutral-muted);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
        }

        .airtel-info-box {
          background: #FEF3C7;
          border: 2px dashed #D97706;
          padding: 1.25rem;
          border-radius: var(--radius-md);
          text-align: left;
        }

        .airtel-title {
          font-weight: 800;
          font-size: 0.95rem;
          color: #B45309;
          margin-bottom: 0.5rem;
        }

        .airtel-numbers {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 1.05rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .airtel-desc {
          font-size: 0.85rem;
          color: #92400E;
          line-height: 1.5;
        }

        .form-control {
          padding: 0.75rem 1rem;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: var(--font-main);
        }

        .receipt-container {
          text-align: center;
        }

        .receipt-badge {
          display: inline-block;
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
          font-weight: 800;
          padding: 0.4rem 1.25rem;
          border-radius: var(--radius-pill);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .receipt-ref {
          font-size: 1rem;
          color: var(--neutral-muted);
          margin-bottom: 2rem;
        }

        .receipt-details-table {
          background: var(--neutral-light-bg);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: left;
        }

        [dir="rtl"] .receipt-details-table { text-align: right; }

        .receipt-row {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px dashed var(--neutral-border);
          font-size: 0.95rem;
        }

        .receipt-row:last-child { border-bottom: none; }

        .receipt-amount {
          color: var(--primary-emerald);
          font-size: 1.2rem;
        }

        .receipt-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
      `})]})},Ye=({initialMode:e=`register`,setCurrentTab:t})=>{let{currentUser:n,isLoggedIn:r,isAdmin:i,login:a,logout:o,register:s}=de(),[c,l]=(0,_.useState)(e===`login`),[u,d]=(0,_.useState)(!1);_.useEffect(()=>{e&&l(e===`login`)},[e]);let[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(``),[y,x]=(0,_.useState)(``),[ee,S]=(0,_.useState)(`N'Djamena`),[C,te]=(0,_.useState)(`actif`);return(0,b.jsxs)(`div`,{className:`member-page`,children:[(0,b.jsx)(`section`,{className:`page-banner`,children:(0,b.jsxs)(`div`,{className:`banner-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Communauté & Engagements`}),(0,b.jsx)(`h1`,{children:`Espace Membre & Adhésion AJTES`}),(0,b.jsx)(`p`,{children:`Rejoignez notre réseau de jeunes engagés, soutenez les activités scolaires et suivez votre statut de membre.`})]})}),(0,b.jsx)(`section`,{className:`section`,children:r?(0,b.jsxs)(`div`,{className:`dashboard-container`,children:[(0,b.jsxs)(`div`,{className:`profile-header-card card`,children:[(0,b.jsxs)(`div`,{className:`profile-info`,children:[(0,b.jsx)(`div`,{className:`profile-avatar`,children:n?.avatarUrl?(0,b.jsx)(`img`,{src:n.avatarUrl,alt:n.name,className:`avatar-img`}):n?.name.charAt(0)}),(0,b.jsxs)(`div`,{className:`profile-details`,children:[(0,b.jsx)(`h2`,{children:n?.name}),(0,b.jsxs)(`p`,{children:[`Email: `,n?.email,` • Tél: `,n?.phone||`Non renseigné`]}),(0,b.jsxs)(`p`,{children:[`Ville: `,n?.city||`Tchad`,` • Profession: `,n?.profession||`Membre Engagé`]})]})]}),(0,b.jsxs)(`div`,{className:`status-box`,children:[(0,b.jsxs)(`span`,{className:`status-pill ${i||n?.membershipStatus===`admis`||n?.membershipStatus===`actif`?`active`:`pending`}`,children:[`Statut: `,i||n?.membershipStatus===`admis`||n?.membershipStatus===`actif`?`Membre Admis (Validé)`:`Adhésion en Attente de Confirmation`]}),i&&t&&(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,onClick:()=>t(`admin`),children:`Accéder à l'Admin`}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:o,children:`Déconnexion`})]})]}),i||n?.membershipStatus===`admis`||n?.membershipStatus===`actif`?(0,b.jsxs)(`div`,{className:`digital-card-section margin-top-lg`,children:[(0,b.jsxs)(`div`,{className:`flex-between align-center margin-bottom-sm`,children:[(0,b.jsx)(`h3`,{className:`section-subtitle-dark`,style:{margin:0},children:`Carte d'Adhérent Officielle AJTES`}),(0,b.jsxs)(`div`,{className:`card-actions-row`,style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`},children:[(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,onClick:()=>{if(!n)return;let e=document.createElement(`canvas`);e.width=750,e.height=450;let t=e.getContext(`2d`);if(!t)return;let r=t.createLinearGradient(0,0,750,450);r.addColorStop(0,`#064E3B`),r.addColorStop(1,`#022C22`),t.fillStyle=r,t.fillRect(0,0,750,450),t.strokeStyle=`#D97706`,t.lineWidth=8,t.strokeRect(14,14,722,422),t.strokeStyle=`rgba(255, 255, 255, 0.2)`,t.lineWidth=2,t.strokeRect(24,24,702,402),t.fillStyle=`rgba(255, 255, 255, 0.08)`,t.fillRect(24,24,702,80),t.fillStyle=`#F59E0B`,t.font=`bold 30px sans-serif`,t.fillText(`AJTES TCHAD`,45,65),t.fillStyle=`#FFFFFF`,t.font=`14px sans-serif`,t.fillText(`Association des Jeunes Tchadiens pour l'Éducation et la Solidarité`,45,90),t.fillStyle=`#F59E0B`,t.font=`bold 20px sans-serif`,t.fillText(`2026`,660,65),t.fillStyle=`#FFFFFF`,t.font=`bold 26px sans-serif`,t.fillText(n.name,45,160),t.fillStyle=`#F3F4F6`,t.font=`16px sans-serif`,t.fillText(`Rôle Officiel : ${n.role===`super_admin`?`Super Administrateur`:n.role===`admin`?`Administrateur Bureau`:`Membre Actif Admis`}`,45,200),t.fillText(`Matricule : AJTES-2026-${(n.email.length||7)*142}`,45,235),t.fillText(`E-mail : ${n.email}`,45,270),t.fillText(`Téléphone : ${n.phone||`+235 -- -- -- --`}`,45,305),t.fillText(`Ville / Siège : ${n.city||`N'Djamena`}, Tchad`,45,340),t.fillStyle=n.feePaid?`#10B981`:`#F59E0B`,t.fillRect(45,365,260,35),t.fillStyle=`#FFFFFF`,t.font=`bold 13px sans-serif`,t.fillText(n.feePaid?`COTISATION 2026 : À JOUR`:`STATUT : MEMBRE ACTIF VALIDÉ`,60,388),t.fillStyle=`#D97706`,t.beginPath(),t.arc(620,220,55,0,Math.PI*2),t.fill(),t.fillStyle=`#064E3B`,t.font=`bold 13px sans-serif`,t.textAlign=`center`,t.fillText(`AJTES TCHAD`,620,212),t.fillText(`SCEAU OFFICIEL`,620,228),t.fillText(`2026`,620,244),t.textAlign=`left`,t.fillStyle=`#FFFFFF`,t.fillRect(560,310,120,100),t.fillStyle=`#000000`,t.font=`bold 10px monospace`,t.fillText(`VERIFIED QR`,585,365);let i=document.createElement(`a`);i.download=`Carte_Adherent_AJTES_${n.name.replace(/\s+/g,`_`)}.png`,i.href=e.toDataURL(`image/png`),i.click()},style:{fontWeight:700},children:`Télécharger Carte HD (PNG)`}),(0,b.jsx)(`button`,{className:`btn btn-primary btn-sm`,onClick:()=>window.print(),children:`Imprimer ma Carte`}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>d(!0),title:`Vérifier la carte`,children:`Scanner QR`})]})]}),(0,b.jsxs)(`div`,{className:`digital-member-card`,children:[(0,b.jsxs)(`div`,{className:`card-top`,children:[(0,b.jsxs)(`div`,{className:`card-brand`,children:[(0,b.jsx)(`span`,{className:`brand-logo`,children:`AJTES`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`AJTES TCHAD`}),(0,b.jsx)(`span`,{className:`card-motto`,children:`Éducation & Solidarité`})]})]}),(0,b.jsx)(`span`,{className:`card-year`,children:`2026`})]}),(0,b.jsxs)(`div`,{className:`card-main`,children:[(0,b.jsx)(`div`,{className:`card-photo`,children:n?.avatarUrl?(0,b.jsx)(`img`,{src:n.avatarUrl,alt:n.name,className:`card-avatar-img`}):n?.name.charAt(0)}),(0,b.jsxs)(`div`,{className:`card-info`,children:[(0,b.jsx)(`h4`,{children:n?.name}),(0,b.jsx)(`p`,{className:`card-role`,children:n?.role===`admin`?`Administrateur du Bureau`:`Membre Actif Admis`}),(0,b.jsxs)(`p`,{className:`card-id`,children:[`ID: AJTES-2026-`,(n?.email.length||7)*142]}),(0,b.jsxs)(`p`,{className:`card-city`,children:[n?.city||`N'Djamena`,`, Tchad`]})]}),(0,b.jsxs)(`div`,{className:`card-qr`,onClick:()=>d(!0),title:`Cliquez pour scanner et vérifier l'authenticité`,style:{cursor:`pointer`},children:[(0,b.jsx)(`span`,{children:`CODE QR OFFICIEL`}),(0,b.jsx)(`div`,{className:`qr-box`,children:(0,b.jsxs)(`svg`,{width:`42`,height:`42`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1`,fill:`#000`}),(0,b.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1`,fill:`#000`}),(0,b.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`,fill:`#000`}),(0,b.jsx)(`rect`,{x:`14`,y:`14`,width:`4`,height:`4`,fill:`#000`}),(0,b.jsx)(`rect`,{x:`18`,y:`18`,width:`3`,height:`3`,fill:`#000`})]})})]})]})]})]}):(0,b.jsxs)(`div`,{className:`card text-center margin-top-lg`,style:{padding:`2.5rem 2rem`,background:`#FFFBEB`,border:`1px solid #FCD34D`,borderRadius:`12px`},children:[(0,b.jsx)(`h3`,{style:{color:`#92400E`,fontSize:`1.2rem`,marginBottom:`0.5rem`},children:`Demande d'Adhésion en cours de Validation par l'Administration`}),(0,b.jsxs)(`p`,{style:{color:`#78350F`,fontSize:`0.95rem`,maxWidth:`650px`,margin:`0 auto`,lineHeight:`1.6`},children:[`Votre demande d'inscription a bien été transmise au Bureau Exécutif de l'AJTES. Un administrateur doit confirmer et valider votre adhésion. Dès confirmation, votre `,(0,b.jsx)(`strong`,{children:`Carte d'Adhérent Officielle`}),` sera automatiquement activée et téléchargeable depuis cet espace.`]})]}),u&&(0,b.jsx)(`div`,{className:`modal-overlay`,onClick:()=>d(!1),children:(0,b.jsxs)(`div`,{className:`modal-content qr-verify-modal`,onClick:e=>e.stopPropagation(),children:[(0,b.jsx)(`button`,{className:`modal-close`,onClick:()=>d(!1),children:`✕`}),(0,b.jsxs)(`div`,{className:`text-center`,children:[(0,b.jsx)(`div`,{className:`seal-badge margin-bottom-sm`,children:`ADHÉRENT CERTIFIÉ AJTES TCHAD`}),(0,b.jsx)(`h2`,{children:`Vérification d'Authenticité`}),(0,b.jsx)(`p`,{className:`text-muted`,children:`Document officiel délivré par le Bureau National AJTES (N'Djamena)`}),(0,b.jsxs)(`div`,{className:`qr-big-display margin-top-md margin-bottom-md`,children:[(0,b.jsxs)(`svg`,{width:`120`,height:`120`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,b.jsx)(`rect`,{x:`2`,y:`2`,width:`8`,height:`8`,rx:`1`,fill:`#007A3D`}),(0,b.jsx)(`rect`,{x:`14`,y:`2`,width:`8`,height:`8`,rx:`1`,fill:`#007A3D`}),(0,b.jsx)(`rect`,{x:`2`,y:`14`,width:`8`,height:`8`,rx:`1`,fill:`#007A3D`}),(0,b.jsx)(`rect`,{x:`14`,y:`14`,width:`5`,height:`5`,fill:`#D97706`}),(0,b.jsx)(`rect`,{x:`19`,y:`19`,width:`3`,height:`3`,fill:`#007A3D`})]}),(0,b.jsxs)(`span`,{className:`qr-code-string`,children:[`AJTES-VERIFY-2026-`,(n?.email.length||7)*142]})]}),(0,b.jsxs)(`div`,{className:`verify-info-table`,children:[(0,b.jsxs)(`div`,{className:`v-row`,children:[(0,b.jsx)(`span`,{children:`Nom & Prénom:`}),` `,(0,b.jsx)(`strong`,{children:n?.name})]}),(0,b.jsxs)(`div`,{className:`v-row`,children:[(0,b.jsx)(`span`,{children:`Rôle Officiel:`}),` `,(0,b.jsx)(`strong`,{children:n?.role===`admin`?`Administrateur`:`Membre Actif Admis`})]}),(0,b.jsxs)(`div`,{className:`v-row`,children:[(0,b.jsx)(`span`,{children:`Matricule AJTES:`}),` `,(0,b.jsxs)(`strong`,{children:[`AJTES-2026-`,(n?.email.length||7)*142]})]}),(0,b.jsxs)(`div`,{className:`v-row`,children:[(0,b.jsx)(`span`,{children:`Siège Social:`}),` `,(0,b.jsx)(`strong`,{children:`N'Djamena, République du Tchad`})]}),(0,b.jsxs)(`div`,{className:`v-row`,children:[(0,b.jsx)(`span`,{children:`Année d'Exercice:`}),` `,(0,b.jsx)(`strong`,{children:`2026 (Statut Actif)`})]})]}),(0,b.jsxs)(`div`,{className:`margin-top-lg flex-center gap-sm`,children:[(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,onClick:()=>{d(!1),window.print()},children:`Imprimer la Carte`}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>d(!1),children:`Fermer`})]})]})]})}),(0,b.jsxs)(`div`,{className:`grid-2 margin-top-lg`,children:[(0,b.jsxs)(`div`,{className:`dash-card card`,children:[(0,b.jsx)(`h3`,{children:`Documents d'Adhésion & Réglementation`}),(0,b.jsx)(`p`,{children:`Accédez aux textes de gouvernance officiels de l'association.`}),(0,b.jsxs)(`div`,{className:`doc-links`,children:[(0,b.jsx)(`a`,{href:`/#documents`,className:`doc-link`,children:`Consulter les Statuts de l'AJTES en ligne`}),(0,b.jsx)(`a`,{href:`/#documents`,className:`doc-link`,children:`Consulter le Règlement Intérieur en ligne`}),(i||n?.membershipStatus===`admis`||n?.membershipStatus===`actif`)&&(0,b.jsx)(`button`,{onClick:()=>window.print(),className:`doc-link btn-link-reset`,children:`Imprimer ma Carte d'Adhérent`})]})]}),(0,b.jsxs)(`div`,{className:`dash-card card`,children:[(0,b.jsx)(`h3`,{children:`Engagements & Activités Officiels`}),(0,b.jsx)(`p`,{children:`Prochains événements et actions scolaires auxquels vous êtes inscrit.`}),(0,b.jsxs)(`div`,{className:`activity-list`,children:[(0,b.jsxs)(`div`,{className:`act-item`,children:[(0,b.jsx)(`span`,{children:`Forum de la Jeunesse Tchadienne (N'Djamena)`}),(0,b.jsx)(`span`,{className:`act-date`,children:`15 Octobre 2026`})]}),(0,b.jsxs)(`div`,{className:`act-item`,children:[(0,b.jsx)(`span`,{children:`Journée Écologique & Reboisement`}),(0,b.jsx)(`span`,{className:`act-date`,children:`05 Septembre 2026`})]})]})]})]})]}):(0,b.jsxs)(`div`,{className:`auth-form-card card`,children:[(0,b.jsxs)(`div`,{className:`auth-toggle`,children:[(0,b.jsx)(`button`,{className:`toggle-btn ${c?`active`:``}`,onClick:()=>l(!0),children:`Se Connecter`}),(0,b.jsx)(`button`,{className:`toggle-btn ${c?``:`active`}`,onClick:()=>l(!1),children:`Devenir Membre (Adhésion)`})]}),(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),c?a(f):s({name:m,email:f,profession:g,phone:y,city:ee,memberType:C,role:`membre`,membershipStatus:`actif`})},className:`auth-form`,children:[!c&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Nom et Prénom *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Votre nom complet`,value:m,onChange:e=>h(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Profession / Statut *`}),(0,b.jsxs)(`select`,{required:!0,value:g,onChange:e=>v(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:``,disabled:!0,children:`-- Sélectionner votre profession --`}),(0,b.jsx)(`option`,{value:`Élève / Étudiant(e)`,children:`Élève / Étudiant(e)`}),(0,b.jsx)(`option`,{value:`Enseignant(e) / Formateur(trice)`,children:`Enseignant(e) / Formateur(trice)`}),(0,b.jsx)(`option`,{value:`Ingénieur(e) / Technicien(ne)`,children:`Ingénieur(e) / Technicien(ne)`}),(0,b.jsx)(`option`,{value:`Fonctionnaire / Agent de l'État`,children:`Fonctionnaire / Agent de l'État`}),(0,b.jsx)(`option`,{value:`Commerçant(e) / Entrepreneur(e)`,children:`Commerçant(e) / Entrepreneur(e)`}),(0,b.jsx)(`option`,{value:`Professionnel(le) de Santé / Médecin`,children:`Professionnel(le) de Santé / Médecin`}),(0,b.jsx)(`option`,{value:`Juriste / Avocat(e)`,children:`Juriste / Avocat(e)`}),(0,b.jsx)(`option`,{value:`Artisan(e) / Ouvrier(ère)`,children:`Artisan(e) / Ouvrier(ère)`}),(0,b.jsx)(`option`,{value:`Agriculteur(trice) / Éleveur(euse)`,children:`Agriculteur(trice) / Éleveur(euse)`}),(0,b.jsx)(`option`,{value:`Consultant(e) / Indépendant(e)`,children:`Consultant(e) / Indépendant(e)`}),(0,b.jsx)(`option`,{value:`Sans emploi / En recherche`,children:`Sans emploi / En recherche d'emploi`}),(0,b.jsx)(`option`,{value:`Autre profession`,children:`Autre profession`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Téléphone / WhatsApp *`}),(0,b.jsx)(`input`,{type:`tel`,required:!0,placeholder:`+235 66 43 95 02 / +235 68 90 23 47`,value:y,onChange:e=>x(e.target.value),className:`form-control`})]})]}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Ville / Localisation *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Ex: N'Djamena, Moundou, Sarh`,value:ee,onChange:e=>S(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Type d'adhésion souhaité *`}),(0,b.jsxs)(`select`,{value:C,onChange:e=>te(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:`actif`,children:`Membre Actif (Participation aux réunions & votes)`}),(0,b.jsx)(`option`,{value:`sympathisant`,children:`Membre Sympathisant (Soutien & suivi)`}),(0,b.jsx)(`option`,{value:`benevole`,children:`Bénévole (Actions de terrain)`}),(0,b.jsx)(`option`,{value:`partenaire`,children:`Membre Partenaire (Organisation / Institution)`})]})]})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Adresse E-mail *`}),(0,b.jsx)(`input`,{type:`email`,required:!0,placeholder:`votre.email@example.td`,value:f,onChange:e=>p(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Mot de Passe *`}),(0,b.jsx)(`input`,{type:`password`,required:!0,placeholder:`••••••••`,className:`form-control`})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-lg w-full margin-top`,children:c?`Se connecter à mon espace`:`Valider mon inscription à l'AJTES`})]})]})}),(0,b.jsx)(`style`,{children:`
        .page-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-container h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 1rem 0;
        }

        .auth-form-card {
          max-width: 650px;
          margin: 0 auto;
          padding: 2.5rem;
        }

        .auth-toggle {
          display: flex;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-md);
          padding: 0.35rem;
          margin-bottom: 2rem;
        }

        .toggle-btn {
          flex: 1;
          padding: 0.75rem;
          border: none;
          background: none;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--neutral-body);
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all 0.2s;
        }

        .toggle-btn.active {
          background: var(--neutral-card-bg);
          color: var(--primary-emerald);
          box-shadow: var(--shadow-sm);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
        }

        .form-control {
          padding: 0.75rem 1rem;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: var(--font-main);
        }

        .margin-top { margin-top: 1rem; }
        .margin-top-lg { margin-top: 2rem; }

        .dashboard-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .profile-header-card {
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          background: linear-gradient(135deg, var(--neutral-card-bg), var(--primary-emerald-light));
        }

        .profile-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .profile-avatar {
          width: 70px;
          height: 70px;
          background: var(--primary-emerald);
          color: #FFF;
          font-size: 2rem;
          font-weight: 800;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .profile-details h2 {
          font-size: 1.5rem;
          color: var(--neutral-heading);
        }

        .profile-details p {
          font-size: 0.9rem;
          color: var(--neutral-body);
        }

        .status-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        [dir="rtl"] .status-box {
          align-items: flex-start;
        }

        .status-pill {
          background: var(--primary-emerald);
          color: #FFF;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
        }

        .role-pill {
          font-size: 0.8rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .dash-card {
          padding: 1.75rem;
        }

        .dash-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--primary-emerald);
        }

        .dash-card p {
          font-size: 0.9rem;
          color: var(--neutral-muted);
          margin-bottom: 1.25rem;
        }

        .doc-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .doc-link {
          padding: 0.75rem 1rem;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .doc-link:hover {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .act-item {
          display: flex;
          justify-content: space-between;
          padding: 0.75rem;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .btn-link-reset {
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          font-family: inherit;
        }

        .digital-card-section {
          margin-top: 2rem;
        }

        .section-subtitle-dark {
          font-size: 1.2rem;
          color: var(--neutral-heading);
          margin-bottom: 1rem;
        }

        .digital-member-card {
          background: linear-gradient(135deg, #092014 0%, #007A3D 50%, #121A24 100%);
          color: #FFF;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: 0 15px 35px rgba(0, 122, 61, 0.3);
          border: 2px solid var(--accent-gold);
          max-width: 550px;
          margin: 0 auto;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
        }

        .card-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .brand-logo {
          background: var(--accent-gold);
          color: #121A24;
          font-weight: 900;
          font-size: 0.9rem;
          padding: 0.35rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .card-motto {
          display: block;
          font-size: 0.75rem;
          color: var(--accent-gold);
        }

        .card-year {
          background: rgba(255, 255, 255, 0.15);
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-pill);
          font-size: 0.85rem;
        }

        .card-main {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .card-photo {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: var(--accent-gold);
          color: #121A24;
          font-size: 2rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #FFF;
        }

        .card-info {
          flex: 1;
        }

        .card-info h4 {
          color: #FFF;
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
        }

        .card-role {
          color: var(--accent-gold);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .card-id {
          font-size: 0.8rem;
          color: #CBD5E1;
          font-family: monospace;
        }

        .card-city {
          font-size: 0.8rem;
          color: #94A3B8;
        }

        .card-qr {
          text-align: center;
          font-size: 0.65rem;
          color: #CBD5E1;
          transition: transform 0.2s;
        }

        .card-qr:hover {
          transform: scale(1.06);
        }

        .qr-box {
          background: #FFF;
          color: #000;
          padding: 0.4rem;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.2rem;
        }

        .qr-verify-modal {
          max-width: 520px;
          width: 92%;
          padding: 2.25rem;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .seal-badge {
          display: inline-block;
          background: var(--primary-emerald-light);
          color: var(--primary-emerald-text);
          font-weight: 800;
          font-size: 0.85rem;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(0, 122, 61, 0.3);
        }

        .qr-big-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          background: var(--neutral-light-bg);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--neutral-border);
        }

        .qr-code-string {
          font-family: monospace;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--neutral-heading);
          letter-spacing: 1px;
        }

        .verify-info-table {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          text-align: left;
          background: #F8FAFC;
          padding: 1.25rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--neutral-border);
        }

        .v-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--neutral-body);
          border-bottom: 1px dashed var(--neutral-border);
          padding-bottom: 0.35rem;
        }

        .v-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .v-row strong {
          color: var(--neutral-heading);
        }
      `})]})},Xe=()=>{let{projects:e,media:t,donations:n,news:r,contactMessages:i,users:a,addProject:o,deleteProject:s,addMediaItem:c,deleteMediaItem:l,addNewsArticle:u,deleteNewsArticle:d,deleteContactMessage:f,confirmUser:p,deleteUser:m,toggleUserFeeStatus:h}=pe(),{currentUser:g,isLoggedIn:v,isAdmin:y,login:x,logout:ee}=de(),[S,C]=(0,_.useState)(`members`),[te,ne]=(0,_.useState)(``),[re,w]=(0,_.useState)(null),ie=a.filter(e=>e.name.toLowerCase().includes(te.toLowerCase())||e.email.toLowerCase().includes(te.toLowerCase())||e.profession&&e.profession.toLowerCase().includes(te.toLowerCase())||e.city&&e.city.toLowerCase().includes(te.toLowerCase())),T=ie.filter(e=>e.membershipStatus===`en_attente`),E=ie.filter(e=>e.membershipStatus===`admis`||e.membershipStatus===`actif`),ae=e=>{p(e);let t=a.find(t=>t.id===e);w(`Adhésion de ${t?.name||`Membre`} confirmée par l'Administration ! Sa Carte d'Adhérent Officielle est désormais disponible au téléchargement.`),setTimeout(()=>w(null),5e3)},D=e=>{let t=a.find(t=>t.id===e);window.confirm(`Voulez-vous vraiment supprimer définitivement le membre "${t?.name||e}" ?`)&&(m(e),w(`Le membre "${t?.name||`Membre`}" a été définitivement supprimé de la base de données.`),setTimeout(()=>w(null),5e3))},[oe,se]=(0,_.useState)(``),[O,k]=(0,_.useState)(``),[ce,le]=(0,_.useState)(`article`),[ue,A]=(0,_.useState)(``),[j,fe]=(0,_.useState)(`education`),[me,he]=(0,_.useState)(``),[ge,_e]=(0,_.useState)(``),[ve,ye]=(0,_.useState)(``),[be,xe]=(0,_.useState)(``),[Se,Ce]=(0,_.useState)(``),[we,Te]=(0,_.useState)(!1),[M,Ee]=(0,_.useState)(``),[De,Oe]=(0,_.useState)(`education`),[ke,Ae]=(0,_.useState)(``),[je,Me]=(0,_.useState)(``),[Ne,Pe]=(0,_.useState)(`photo`),[Fe,Ie]=(0,_.useState)(``),[Le,Re]=(0,_.useState)(`2026`),[ze,Be]=(0,_.useState)(!1),Ve=n.reduce((e,t)=>e+t.amount,0);return!v||!y?(0,b.jsxs)(`div`,{className:`admin-page`,children:[(0,b.jsx)(`section`,{className:`admin-header-banner`,children:(0,b.jsxs)(`div`,{className:`admin-banner-container`,children:[(0,b.jsx)(`div`,{className:`admin-badge`,children:`ESPACE RÉSERVÉ — ACCÈS ACCRÉDITÉ`}),(0,b.jsx)(`h1`,{children:`Portail d'Administration AJTES`}),(0,b.jsx)(`p`,{children:`Accès restreint au Bureau National & Responsables Techniques`})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`admin-login-card card`,children:[(0,b.jsx)(`h2`,{children:`Identification Administrateur`}),(0,b.jsx)(`p`,{className:`security-text`,children:`Veuillez saisir vos identifiants d'administration pour accéder à la console de gestion des projets, des dons et des médias de l'AJTES.`}),(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),x(oe||`salomon.admin@ajtes.td`,`admin`)},className:`admin-form`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Email Administrateur *`}),(0,b.jsx)(`input`,{type:`email`,required:!0,placeholder:`salomon.admin@ajtes.td`,value:oe,onChange:e=>se(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Mot de Passe *`}),(0,b.jsx)(`input`,{type:`password`,required:!0,placeholder:`••••••••••••`,value:O,onChange:e=>k(e.target.value),className:`form-control`})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-lg w-full margin-top`,children:`Connexion au Tableau de Bord`}),(0,b.jsx)(`div`,{className:`demo-admin-divider`,children:(0,b.jsx)(`span`,{children:`CONNEXION RAPIDE ACCRÉDITÉE (BUREAU EXÉCUTIF)`})}),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,b.jsx)(`button`,{type:`button`,className:`btn btn-gold w-full`,style:{fontWeight:700},onClick:()=>x(`salomontchibkere@gmail.com`,`super_admin`),children:`Connexion Salomon (Tech Lead & Super Admin 100%)`}),(0,b.jsx)(`button`,{type:`button`,className:`btn btn-gold w-full`,style:{fontWeight:700},onClick:()=>x(`marcallandedjim@gmail.com`,`super_admin`),children:`Connexion Marc Allan Dedjim (Administrateur Principal 100%)`}),(0,b.jsx)(`button`,{type:`button`,className:`btn btn-gold w-full`,style:{fontWeight:700},onClick:()=>x(`soumabanakolong007@gmail.com`,`super_admin`),children:`Connexion Souma Banakolong (Président & Super Admin 100%)`}),(0,b.jsx)(`button`,{type:`button`,className:`btn btn-gold w-full`,style:{fontWeight:700},onClick:()=>x(`betoudjimbaikaravalentin@gmail.com`,`super_admin`),children:`Connexion Betoudjimbaikara Valentin (Secrétaire Général & Super Admin 100%)`}),(0,b.jsx)(`button`,{type:`button`,className:`btn btn-gold w-full`,style:{fontWeight:700},onClick:()=>x(`boikoussiguen@gmail.com`,`super_admin`),children:`Connexion Boikoussigue (Chargé de Comm & Super Admin 100%)`})]})]})]})}),(0,b.jsx)(`style`,{children:`
          .admin-login-card {
            max-width: 520px;
            margin: 0 auto;
            padding: 2.5rem;
            text-align: center;
          }
          .security-icon {
            font-size: 3rem;
            margin-bottom: 0.5rem;
          }
          .security-text {
            color: var(--neutral-muted);
            font-size: 0.92rem;
            margin-bottom: 1.5rem;
          }
          .demo-admin-divider {
            position: relative;
            text-align: center;
            margin: 1.25rem 0;
          }
          .demo-admin-divider::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: var(--neutral-border);
          }
          .demo-admin-divider span {
            position: relative;
            background: var(--neutral-card-bg);
            padding: 0 0.75rem;
            color: var(--neutral-muted);
            font-size: 0.8rem;
            font-weight: 700;
          }
        `})]}):(0,b.jsxs)(`div`,{className:`admin-page`,children:[(0,b.jsx)(`section`,{className:`admin-header-banner`,children:(0,b.jsxs)(`div`,{className:`admin-banner-container`,children:[(0,b.jsx)(`div`,{className:`admin-badge`,children:`ESPACE ADMINISTRATION SÉCURISÉ`}),(0,b.jsx)(`h1`,{children:`Tableau de Bord Administrateur`}),(0,b.jsxs)(`p`,{children:[`Gestionnaire technique & maintenance — Connecté en tant que `,(0,b.jsx)(`strong`,{children:g?.name}),` (`,g?.email,`)`]}),(0,b.jsxs)(`div`,{style:{marginTop:`1rem`,display:`flex`,gap:`0.75rem`,flexWrap:`wrap`},children:[(0,b.jsxs)(`button`,{className:`btn btn-gold btn-sm`,onClick:()=>C(`members`),style:{fontWeight:800},children:[`Gestion des Membres (`,E.length+T.length,`)`]}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:ee,children:`Déconnexion Admin`})]})]})}),(0,b.jsxs)(`section`,{className:`section`,children:[(0,b.jsxs)(`div`,{className:`admin-tab-bar`,children:[(0,b.jsxs)(`button`,{className:`admin-tab ${S===`members`?`active`:``}`,onClick:()=>C(`members`),style:{position:`relative`,fontWeight:800},children:[`Gestion des Membres (`,E.length+T.length,`) `,T.length>0&&(0,b.jsxs)(`span`,{className:`badge-count-alert`,style:{background:`#DC2626`,color:`#FFF`,borderRadius:`50%`,padding:`2px 7px`,fontSize:`0.75rem`,marginLeft:`6px`},children:[T.length,` à valider`]})]}),(0,b.jsx)(`button`,{className:`admin-tab ${S===`overview`?`active`:``}`,onClick:()=>C(`overview`),children:`Vue d'Ensemble & Stats`}),(0,b.jsx)(`button`,{className:`admin-tab ${S===`content`?`active`:``}`,onClick:()=>C(`content`),children:`Gestion des Projets & Actus`}),(0,b.jsx)(`button`,{className:`admin-tab ${S===`media`?`active`:``}`,onClick:()=>C(`media`),children:`Ajout Photos & Vidéos`}),(0,b.jsxs)(`button`,{className:`admin-tab ${S===`messages`?`active`:``}`,onClick:()=>C(`messages`),children:[`Messages Réçus (`,i.length,`)`]}),(0,b.jsxs)(`button`,{className:`admin-tab ${S===`donations`?`active`:``}`,onClick:()=>C(`donations`),children:[`Historique des Dons (`,n.length,`)`]})]}),S===`overview`&&(0,b.jsxs)(`div`,{className:`admin-overview`,children:[(0,b.jsxs)(`div`,{className:`grid-3`,children:[(0,b.jsx)(`div`,{className:`admin-stat-card card`,children:(0,b.jsxs)(`div`,{className:`stat-info`,children:[(0,b.jsx)(`span`,{className:`stat-val`,children:`14`}),(0,b.jsx)(`span`,{className:`stat-title`,children:`Utilisateurs en Ligne (Direct)`})]})}),(0,b.jsx)(`div`,{className:`admin-stat-card card`,style:{cursor:`pointer`},onClick:()=>C(`members`),children:(0,b.jsxs)(`div`,{className:`stat-info`,children:[(0,b.jsx)(`span`,{className:`stat-val`,children:T.length}),(0,b.jsx)(`span`,{className:`stat-title`,children:`Demandes d'Adhésion à Valider`}),(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,style:{marginTop:`0.5rem`,width:`100%`,fontSize:`0.8rem`,fontWeight:700},children:`Ouvrir Gestion des Membres`})]})}),(0,b.jsx)(`div`,{className:`admin-stat-card card`,style:{cursor:`pointer`},onClick:()=>C(`members`),children:(0,b.jsxs)(`div`,{className:`stat-info`,children:[(0,b.jsx)(`span`,{className:`stat-val`,children:E.length}),(0,b.jsx)(`span`,{className:`stat-title`,children:`Membres Officiels Validés`}),(0,b.jsx)(`button`,{className:`btn btn-primary btn-sm`,style:{marginTop:`0.5rem`,width:`100%`,fontSize:`0.8rem`,fontWeight:700},children:`Voir & Supprimer les Membres`})]})}),(0,b.jsx)(`div`,{className:`admin-stat-card card`,children:(0,b.jsxs)(`div`,{className:`stat-info`,children:[(0,b.jsx)(`span`,{className:`stat-val`,children:e.length}),(0,b.jsx)(`span`,{className:`stat-title`,children:`Projets Associatifs Gérés`})]})}),(0,b.jsx)(`div`,{className:`admin-stat-card card`,children:(0,b.jsxs)(`div`,{className:`stat-info`,children:[(0,b.jsx)(`span`,{className:`stat-val`,children:t.length}),(0,b.jsx)(`span`,{className:`stat-title`,children:`Photos & Médias`})]})}),(0,b.jsx)(`div`,{className:`admin-stat-card card`,children:(0,b.jsxs)(`div`,{className:`stat-info`,children:[(0,b.jsxs)(`span`,{className:`stat-val`,children:[Ve.toLocaleString(),` FCFA`]}),(0,b.jsx)(`span`,{className:`stat-title`,children:`Total des Dons Reçus`})]})})]}),(0,b.jsxs)(`div`,{className:`margin-top-lg card`,style:{background:`#F9FAFB`,border:`1px solid #E5E7EB`,borderRadius:`12px`,padding:`1.5rem`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:`1rem`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{style:{margin:0,color:`#111827`,fontSize:`1.15rem`},children:`Supervision Réseau & Visiteurs du Site en Direct`}),(0,b.jsxs)(`p`,{style:{margin:`0.25rem 0 0 0`,color:`#6B7280`,fontSize:`0.9rem`},children:[`Informations de fréquence de consultation pour l'équipe d'administration et le technicien `,(0,b.jsx)(`strong`,{children:`Salomon`}),`.`]})]}),(0,b.jsx)(`span`,{className:`status-pill active`,style:{background:`#D1FAE5`,color:`#065F46`,padding:`0.4rem 0.8rem`,borderRadius:`20px`,fontSize:`0.85rem`,fontWeight:600},children:`Système 100% Opérationnel`})]}),(0,b.jsxs)(`div`,{className:`grid-3 margin-top-md`,style:{gap:`1rem`},children:[(0,b.jsxs)(`div`,{style:{background:`#FFFFFF`,padding:`1rem`,borderRadius:`8px`,border:`1px solid #E5E7EB`},children:[(0,b.jsx)(`strong`,{style:{color:`#374151`,fontSize:`0.9rem`},children:`Sessions Actives en Ligne`}),(0,b.jsx)(`p`,{style:{fontSize:`1.4rem`,fontWeight:700,color:`#007A3D`,margin:`0.25rem 0`},children:`14 Connectés`}),(0,b.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#6B7280`},children:`10 Visiteurs anonymes • 4 Membres identifiés`})]}),(0,b.jsxs)(`div`,{style:{background:`#FFFFFF`,padding:`1rem`,borderRadius:`8px`,border:`1px solid #E5E7EB`},children:[(0,b.jsx)(`strong`,{style:{color:`#374151`,fontSize:`0.9rem`},children:`Origine Géographique des Visites`}),(0,b.jsxs)(`p`,{style:{fontSize:`0.85rem`,color:`#4B5563`,margin:`0.5rem 0 0 0`,lineHeight:`1.4`},children:[`N'Djamena (65%) • Provinces (25%)`,(0,b.jsx)(`br`,{}),`Moundou (10%)`]})]}),(0,b.jsxs)(`div`,{style:{background:`#FFFFFF`,padding:`1rem`,borderRadius:`8px`,border:`1px solid #E5E7EB`},children:[(0,b.jsx)(`strong`,{style:{color:`#374151`,fontSize:`0.9rem`},children:`Accréditation Technicien (Salomon)`}),(0,b.jsxs)(`p`,{style:{fontSize:`0.85rem`,color:`#1F2937`,margin:`0.5rem 0 0 0`},children:[`Identifiant: `,(0,b.jsx)(`code`,{children:`salomontchibkere@gmail.com`}),(0,b.jsx)(`br`,{}),`Privilège: `,(0,b.jsx)(`strong`,{children:`Super Admin (Accès Total)`})]})]})]})]}),(0,b.jsxs)(`div`,{className:`margin-top-lg card admin-table-card`,children:[(0,b.jsx)(`h3`,{children:`Dernières Transactions de Dons`}),(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Référence`}),(0,b.jsx)(`th`,{children:`Donateur`}),(0,b.jsx)(`th`,{children:`Montant (FCFA)`}),(0,b.jsx)(`th`,{children:`Méthode`}),(0,b.jsx)(`th`,{children:`Projet`}),(0,b.jsx)(`th`,{children:`Date`})]})}),(0,b.jsx)(`tbody`,{children:n.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:e.reference})}),(0,b.jsx)(`td`,{children:e.donorName}),(0,b.jsxs)(`td`,{className:`amount-col`,children:[e.amount.toLocaleString(),` FCFA`]}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{className:`method-pill`,children:e.paymentMethod===`airtel_money`?`Airtel Money`:e.paymentMethod===`moov_africa`?`Moov Africa`:`Carte Bancaire`})}),(0,b.jsx)(`td`,{children:e.projectTitle}),(0,b.jsx)(`td`,{children:e.date})]},e.id))})]})]}),(0,b.jsxs)(`div`,{className:`margin-top-lg`,children:[re&&(0,b.jsx)(`div`,{className:`card margin-bottom-md`,style:{background:`#ECFDF5`,border:`1px solid #10B981`,color:`#065F46`,padding:`1rem 1.25rem`,borderRadius:`10px`,display:`flex`,alignItems:`center`,gap:`0.75rem`},children:(0,b.jsx)(`strong`,{style:{fontSize:`0.95rem`},children:re})}),(0,b.jsx)(`div`,{className:`card margin-bottom-md`,style:{padding:`1rem 1.25rem`,background:`#F8FAFC`,border:`1px solid #E2E8F0`},children:(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,flexWrap:`wrap`},children:[(0,b.jsx)(`strong`,{style:{fontSize:`0.9rem`,color:`#1E293B`,whiteSpace:`nowrap`},children:`Recherche rapide de membre :`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Rechercher par nom, email, profession ou ville...`,value:te,onChange:e=>ne(e.target.value),className:`form-control`,style:{flex:1,minWidth:`220px`,padding:`0.5rem 0.85rem`,fontSize:`0.9rem`}}),te&&(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>ne(``),children:`Effacer`})]})}),(0,b.jsxs)(`div`,{className:`card admin-table-card margin-bottom-lg`,children:[(0,b.jsx)(`div`,{className:`flex-between align-center margin-bottom-md`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`h3`,{style:{margin:0,color:`#92400E`},children:[`Demandes d'Adhésion en Attente de Confirmation (`,T.length,`)`]}),(0,b.jsx)(`p`,{style:{margin:`0.25rem 0 0 0`,color:`#B45309`,fontSize:`0.88rem`},children:`Conformément aux règles de l'association, chaque candidat doit être confirmé par un administrateur avant de pouvoir télécharger sa carte d'adhérent.`})]})}),T.length===0?(0,b.jsx)(`div`,{className:`text-center`,style:{padding:`2rem 1rem`,color:`#6B7280`,background:`#FFFBEB`,borderRadius:`8px`},children:(0,b.jsx)(`p`,{style:{margin:0},children:`Aucune nouvelle demande d'adhésion en attente pour le moment.`})}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:`admin-table-container desktop-table-only`,children:(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Candidat`}),(0,b.jsx)(`th`,{children:`Email`}),(0,b.jsx)(`th`,{children:`Profession / Ville`}),(0,b.jsx)(`th`,{children:`Date de Demande`}),(0,b.jsx)(`th`,{children:`Action de Confirmation`})]})}),(0,b.jsx)(`tbody`,{children:T.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:e.name})}),(0,b.jsx)(`td`,{children:e.email}),(0,b.jsxs)(`td`,{children:[e.profession||`Membre`,` • `,e.city||`Tchad`]}),(0,b.jsx)(`td`,{children:e.dateJoined}),(0,b.jsxs)(`td`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,style:{fontWeight:600},onClick:()=>ae(e.id),children:`Confirmer & Valider`}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:600},onClick:()=>D(e.id),children:`Refuser & Supprimer`})]})]},e.id))})]})}),(0,b.jsx)(`div`,{className:`mobile-members-list`,children:T.map(e=>(0,b.jsxs)(`div`,{className:`mobile-member-card`,children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{style:{fontSize:`1.05rem`,color:`#1E293B`,display:`block`},children:e.name}),(0,b.jsx)(`span`,{style:{fontSize:`0.85rem`,color:`#64748B`},children:e.email})]}),(0,b.jsx)(`span`,{style:{background:`#FEF3C7`,color:`#92400E`,fontSize:`0.75rem`,padding:`0.2rem 0.6rem`,borderRadius:`12px`,fontWeight:700},children:`En Attente`})]}),(0,b.jsxs)(`div`,{style:{fontSize:`0.85rem`,color:`#334155`,background:`#F8FAFC`,padding:`0.6rem 0.85rem`,borderRadius:`8px`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Profession :`}),` `,e.profession||`Membre`]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Ville / Pays :`}),` `,e.city||`Tchad`]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Date de demande :`}),` `,e.dateJoined]})]}),(0,b.jsxs)(`div`,{className:`action-buttons-stack`,children:[(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,style:{fontWeight:800,padding:`0.75rem`},onClick:()=>ae(e.id),children:`✔ Confirmer & Valider l'Adhésion`}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:700,padding:`0.65rem`},onClick:()=>D(e.id),children:`✖ Refuser & Supprimer`})]})]},`m-pend-${e.id}`))})]})]}),(0,b.jsxs)(`div`,{className:`card admin-table-card margin-bottom-lg`,children:[(0,b.jsxs)(`h3`,{children:[`Membres Officiels Admis & Bureau Exécutif (`,E.length,`)`]}),(0,b.jsx)(`div`,{className:`admin-table-container desktop-table-only`,children:(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Membre`}),(0,b.jsx)(`th`,{children:`Email`}),(0,b.jsx)(`th`,{children:`Rôle Officiel`}),(0,b.jsx)(`th`,{children:`Ville`}),(0,b.jsx)(`th`,{children:`Cotisation 2026 (5 000 FCFA)`}),(0,b.jsx)(`th`,{children:`Statut Carte`}),(0,b.jsx)(`th`,{children:`Actions Administration`})]})}),(0,b.jsx)(`tbody`,{children:E.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:e.name})}),(0,b.jsx)(`td`,{children:e.email}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{className:`status-pill ${e.role===`super_admin`||e.role===`admin`?`active`:``}`,children:e.role===`super_admin`?`Super Admin (Tech Lead)`:e.role===`admin`?`Administrateur Bureau`:`Membre Actif Admis`})}),(0,b.jsx)(`td`,{children:e.city||`N'Djamena`}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`button`,{className:`btn btn-sm ${e.feePaid?`btn-primary`:`btn-secondary`}`,style:{fontSize:`0.8rem`,fontWeight:700,background:e.feePaid?`#D1FAE5`:`#FEF3C7`,color:e.feePaid?`#065F46`:`#B45309`,border:e.feePaid?`1px solid #10B981`:`1px solid #F59E0B`},onClick:()=>h(e.id),title:`Cliquer pour changer l'état de la cotisation annuelle`,children:e.feePaid?`A Jour (5 000 FCFA)`:`Non Reglee (En attente)`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{style:{color:`#059669`,fontWeight:600,fontSize:`0.85rem`},children:`Carte Générée & Validée`})}),(0,b.jsx)(`td`,{children:e.role===`super_admin`?(0,b.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#6B7280`,fontStyle:`italic`},children:`Compte Inviolable`}):(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:600},onClick:()=>D(e.id),children:`Supprimer Membre`})})]},e.id))})]})}),(0,b.jsx)(`div`,{className:`mobile-members-list`,children:E.map(e=>(0,b.jsxs)(`div`,{className:`mobile-member-card`,children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{style:{fontSize:`1.05rem`,color:`#1E293B`,display:`block`},children:e.name}),(0,b.jsx)(`span`,{style:{fontSize:`0.85rem`,color:`#64748B`},children:e.email})]}),(0,b.jsx)(`span`,{style:{background:`#D1FAE5`,color:`#065F46`,fontSize:`0.75rem`,padding:`0.2rem 0.6rem`,borderRadius:`12px`,fontWeight:700},children:`Admis`})]}),(0,b.jsxs)(`div`,{style:{fontSize:`0.85rem`,color:`#334155`,background:`#F8FAFC`,padding:`0.6rem 0.85rem`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`0.3rem`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Rôle :`}),` `,e.role===`super_admin`?`Super Admin (Tech Lead)`:e.role===`admin`?`Administrateur Bureau`:`Membre Actif`]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Ville :`}),` `,e.city||`N'Djamena`]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Carte d'Adhérent :`}),` `,(0,b.jsx)(`span`,{style:{color:`#059669`,fontWeight:700},children:`Validée & Téléchargeable`})]})]}),(0,b.jsxs)(`div`,{className:`action-buttons-stack`,children:[(0,b.jsxs)(`button`,{className:`btn btn-sm ${e.feePaid?`btn-primary`:`btn-secondary`}`,style:{fontSize:`0.85rem`,fontWeight:800,padding:`0.65rem`,background:e.feePaid?`#D1FAE5`:`#FEF3C7`,color:e.feePaid?`#065F46`:`#B45309`,border:e.feePaid?`1px solid #10B981`:`1px solid #F59E0B`},onClick:()=>h(e.id),children:[`💳 Cotisation 2026 : `,e.feePaid?`A Jour (5 000 FCFA)`:`Non Réglée (Cliquer pour régler)`]}),e.role===`super_admin`?(0,b.jsx)(`div`,{style:{textAlign:`center`,fontSize:`0.8rem`,color:`#6B7280`,fontStyle:`italic`,padding:`0.3rem`},children:`🔒 Compte Administrateur Inviolable`}):(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:700,padding:`0.65rem`},onClick:()=>D(e.id),children:`🗑️ Supprimer le Membre`})]})]},`m-appr-${e.id}`))})]})]})]}),S===`members`&&(0,b.jsxs)(`div`,{className:`admin-members-manager`,children:[re&&(0,b.jsx)(`div`,{className:`card margin-bottom-md`,style:{background:`#ECFDF5`,border:`1px solid #10B981`,color:`#065F46`,padding:`1rem 1.25rem`,borderRadius:`10px`,display:`flex`,alignItems:`center`,gap:`0.75rem`},children:(0,b.jsx)(`strong`,{style:{fontSize:`0.95rem`},children:re})}),(0,b.jsx)(`div`,{className:`card margin-bottom-md`,style:{padding:`1rem 1.25rem`,background:`#F8FAFC`,border:`1px solid #E2E8F0`},children:(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,flexWrap:`wrap`},children:[(0,b.jsx)(`strong`,{style:{fontSize:`0.9rem`,color:`#1E293B`,whiteSpace:`nowrap`},children:`Recherche rapide de membre :`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Rechercher par nom, email, profession ou ville...`,value:te,onChange:e=>ne(e.target.value),className:`form-control`,style:{flex:1,minWidth:`220px`,padding:`0.5rem 0.85rem`,fontSize:`0.9rem`}}),te&&(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,onClick:()=>ne(``),children:`Effacer`})]})}),(0,b.jsxs)(`div`,{className:`card admin-table-card margin-bottom-lg`,children:[(0,b.jsx)(`div`,{className:`flex-between align-center margin-bottom-md`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`h3`,{style:{margin:0,color:`#92400E`},children:[`Demandes d'Adhésion en Attente de Confirmation (`,T.length,`)`]}),(0,b.jsx)(`p`,{style:{margin:`0.25rem 0 0 0`,color:`#B45309`,fontSize:`0.88rem`},children:`Conformément aux règles de l'association, chaque candidat doit être confirmé par un administrateur avant de pouvoir télécharger sa carte d'adhérent.`})]})}),T.length===0?(0,b.jsx)(`div`,{className:`text-center`,style:{padding:`2rem 1rem`,color:`#6B7280`,background:`#FFFBEB`,borderRadius:`8px`},children:(0,b.jsx)(`p`,{style:{margin:0},children:`Aucune nouvelle demande d'adhésion en attente pour le moment.`})}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`div`,{className:`admin-table-container desktop-table-only`,children:(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Candidat`}),(0,b.jsx)(`th`,{children:`Email`}),(0,b.jsx)(`th`,{children:`Profession / Ville`}),(0,b.jsx)(`th`,{children:`Date de Demande`}),(0,b.jsx)(`th`,{children:`Action de Confirmation`})]})}),(0,b.jsx)(`tbody`,{children:T.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:e.name})}),(0,b.jsx)(`td`,{children:e.email}),(0,b.jsxs)(`td`,{children:[e.profession||`Membre`,` • `,e.city||`Tchad`]}),(0,b.jsx)(`td`,{children:e.dateJoined}),(0,b.jsxs)(`td`,{style:{display:`flex`,gap:`0.5rem`},children:[(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,style:{fontWeight:600},onClick:()=>ae(e.id),children:`Confirmer & Valider`}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:600},onClick:()=>D(e.id),children:`Refuser & Supprimer`})]})]},e.id))})]})}),(0,b.jsx)(`div`,{className:`mobile-members-list`,children:T.map(e=>(0,b.jsxs)(`div`,{className:`mobile-member-card`,children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{style:{fontSize:`1.05rem`,color:`#1E293B`,display:`block`},children:e.name}),(0,b.jsx)(`span`,{style:{fontSize:`0.85rem`,color:`#64748B`},children:e.email})]}),(0,b.jsx)(`span`,{style:{background:`#FEF3C7`,color:`#92400E`,fontSize:`0.75rem`,padding:`0.2rem 0.6rem`,borderRadius:`12px`,fontWeight:700},children:`En Attente`})]}),(0,b.jsxs)(`div`,{style:{fontSize:`0.85rem`,color:`#334155`,background:`#F8FAFC`,padding:`0.6rem 0.85rem`,borderRadius:`8px`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Profession :`}),` `,e.profession||`Membre`]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Ville / Pays :`}),` `,e.city||`Tchad`]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Date de demande :`}),` `,e.dateJoined]})]}),(0,b.jsxs)(`div`,{className:`action-buttons-stack`,children:[(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,style:{fontWeight:800,padding:`0.75rem`},onClick:()=>ae(e.id),children:`✔ Confirmer & Valider l'Adhésion`}),(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:700,padding:`0.65rem`},onClick:()=>D(e.id),children:`✖ Refuser & Supprimer`})]})]},`m-pend2-${e.id}`))})]})]}),(0,b.jsxs)(`div`,{className:`card admin-table-card`,children:[(0,b.jsxs)(`h3`,{children:[`Membres Officiels Admis & Bureau Exécutif (`,E.length,`)`]}),(0,b.jsx)(`div`,{className:`admin-table-container desktop-table-only`,children:(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Membre`}),(0,b.jsx)(`th`,{children:`Email`}),(0,b.jsx)(`th`,{children:`Rôle Officiel`}),(0,b.jsx)(`th`,{children:`Ville`}),(0,b.jsx)(`th`,{children:`Cotisation 2026 (5 000 FCFA)`}),(0,b.jsx)(`th`,{children:`Statut Carte`}),(0,b.jsx)(`th`,{children:`Actions Administration`})]})}),(0,b.jsx)(`tbody`,{children:E.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:e.name})}),(0,b.jsx)(`td`,{children:e.email}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{className:`status-pill ${e.role===`super_admin`||e.role===`admin`?`active`:``}`,children:e.role===`super_admin`?`Super Admin (Tech Lead)`:e.role===`admin`?`Administrateur Bureau`:`Membre Actif Admis`})}),(0,b.jsx)(`td`,{children:e.city||`N'Djamena`}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`button`,{className:`btn btn-sm ${e.feePaid?`btn-primary`:`btn-secondary`}`,style:{fontSize:`0.8rem`,fontWeight:700,background:e.feePaid?`#D1FAE5`:`#FEF3C7`,color:e.feePaid?`#065F46`:`#B45309`,border:e.feePaid?`1px solid #10B981`:`1px solid #F59E0B`},onClick:()=>h(e.id),title:`Cliquer pour changer l'état de la cotisation annuelle`,children:e.feePaid?`A Jour (5 000 FCFA)`:`Non Reglee (En attente)`})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{style:{color:`#059669`,fontWeight:600,fontSize:`0.85rem`},children:`Carte Générée & Validée`})}),(0,b.jsx)(`td`,{children:e.role===`super_admin`?(0,b.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#6B7280`,fontStyle:`italic`},children:`Compte Inviolable`}):(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:600},onClick:()=>D(e.id),children:`Supprimer Membre`})})]},e.id))})]})}),(0,b.jsx)(`div`,{className:`mobile-members-list`,children:E.map(e=>(0,b.jsxs)(`div`,{className:`mobile-member-card`,children:[(0,b.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{style:{fontSize:`1.05rem`,color:`#1E293B`,display:`block`},children:e.name}),(0,b.jsx)(`span`,{style:{fontSize:`0.85rem`,color:`#64748B`},children:e.email})]}),(0,b.jsx)(`span`,{style:{background:`#D1FAE5`,color:`#065F46`,fontSize:`0.75rem`,padding:`0.2rem 0.6rem`,borderRadius:`12px`,fontWeight:700},children:`Admis`})]}),(0,b.jsxs)(`div`,{style:{fontSize:`0.85rem`,color:`#334155`,background:`#F8FAFC`,padding:`0.6rem 0.85rem`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,gap:`0.3rem`},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Rôle :`}),` `,e.role===`super_admin`?`Super Admin (Tech Lead)`:e.role===`admin`?`Administrateur Bureau`:`Membre Actif`]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Ville :`}),` `,e.city||`N'Djamena`]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Carte d'Adhérent :`}),` `,(0,b.jsx)(`span`,{style:{color:`#059669`,fontWeight:700},children:`Validée & Téléchargeable`})]})]}),(0,b.jsxs)(`div`,{className:`action-buttons-stack`,children:[(0,b.jsxs)(`button`,{className:`btn btn-sm ${e.feePaid?`btn-primary`:`btn-secondary`}`,style:{fontSize:`0.85rem`,fontWeight:800,padding:`0.65rem`,background:e.feePaid?`#D1FAE5`:`#FEF3C7`,color:e.feePaid?`#065F46`:`#B45309`,border:e.feePaid?`1px solid #10B981`:`1px solid #F59E0B`},onClick:()=>h(e.id),children:[`💳 Cotisation 2026 : `,e.feePaid?`A Jour (5 000 FCFA)`:`Non Réglée (Cliquer pour régler)`]}),e.role===`super_admin`?(0,b.jsx)(`div`,{style:{textAlign:`center`,fontSize:`0.8rem`,color:`#6B7280`,fontStyle:`italic`,padding:`0.3rem`},children:`🔒 Compte Administrateur Inviolable`}):(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:700,padding:`0.65rem`},onClick:()=>D(e.id),children:`🗑️ Supprimer le Membre`})]})]},`m-appr2-${e.id}`))})]})]}),S===`media`&&(0,b.jsxs)(`div`,{className:`admin-media-manager`,children:[(0,b.jsxs)(`div`,{className:`card admin-form-card`,children:[(0,b.jsx)(`h2`,{children:`Ajouter de Nouvelles Photos ou Vidéos`}),(0,b.jsx)(`p`,{children:`Mise à jour rapide de la galerie pour les réalisations 2026, statuts et évènements.`}),ze&&(0,b.jsx)(`div`,{className:`alert-success`,children:`Média ajouté avec succès à la Galerie Officielle !`}),(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),c({id:`media-${Date.now()}`,title:{fr:je,en:je,ar:je},type:Ne,url:Fe||`https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80`,year:parseInt(Le)||2026,category:`Education`,location:`Tchad`}),Me(``),Ie(``),Be(!0),setTimeout(()=>Be(!1),3e3)},className:`admin-form`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Titre / Description du Média *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Ex: Construction du bureau administratif au CEG`,value:je,onChange:e=>Me(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Type de Média *`}),(0,b.jsxs)(`select`,{value:Ne,onChange:e=>Pe(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:`photo`,children:`Photo`}),(0,b.jsx)(`option`,{value:`video`,children:`Vidéo (Lien Youtube ou Embed)`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Année de réalisation *`}),(0,b.jsxs)(`select`,{value:Le,onChange:e=>Re(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:`2026`,children:`2026`}),(0,b.jsx)(`option`,{value:`2023`,children:`2023`}),(0,b.jsx)(`option`,{value:`2022`,children:`2022`})]})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`URL de l'image ou de la vidéo *`}),(0,b.jsx)(`input`,{type:`url`,required:!0,placeholder:`https://images.unsplash.com/... ou URL vidéo`,value:Fe,onChange:e=>Ie(e.target.value),className:`form-control`})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-lg w-full`,children:`Publier dans la Galerie Officielle`})]})]}),(0,b.jsxs)(`div`,{className:`card admin-table-card margin-top-lg`,children:[(0,b.jsxs)(`h3`,{children:[`Médias & Photos de la Galerie (`,t.length,`)`]}),(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Titre`}),(0,b.jsx)(`th`,{children:`Type`}),(0,b.jsx)(`th`,{children:`Année`}),(0,b.jsx)(`th`,{children:`Aperçu`}),(0,b.jsx)(`th`,{children:`Actions`})]})}),(0,b.jsx)(`tbody`,{children:t.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:typeof e.title==`string`?e.title:e.title.fr})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{className:`status-pill active`,children:e.type===`photo`?`Photo`:`Vidéo`})}),(0,b.jsx)(`td`,{children:e.year}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`img`,{src:e.url,alt:`media`,style:{width:`45px`,height:`35px`,objectFit:`cover`,borderRadius:`4px`}})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:600},onClick:()=>{window.confirm(`Voulez-vous vraiment supprimer ce média de la galerie ?`)&&l(e.id)},children:`Supprimer Média`})})]},e.id))})]})]})]}),S===`content`&&(0,b.jsxs)(`div`,{className:`admin-content-manager grid-2 gap-lg`,children:[(0,b.jsxs)(`div`,{className:`card admin-form-card`,children:[(0,b.jsxs)(`h2`,{children:[`Publier une Nouvelle / Communiqué PDF (`,r.length,`)`]}),(0,b.jsx)(`p`,{children:`Publication immédiate sur la page des Actualités de l'AJTES.`}),we&&(0,b.jsx)(`div`,{className:`alert-success margin-bottom`,children:`Nouvelle publiée avec succès sur le site !`}),(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),!(!ue||!ge)&&(u({id:`news-${Date.now()}`,title:{fr:ue.trim(),en:ue.trim(),ar:ue.trim()},summary:{fr:me.trim()||ge.substring(0,120)+`...`,en:me.trim(),ar:me.trim()},content:{fr:ge.trim(),en:ge.trim(),ar:ge.trim()},category:ce===`communique`?`communique`:j,author:Se.trim()||(g?.name?`${g.name} (Admin)`:`Bureau Exécutif AJTES`),publishDate:new Date().toISOString().split(`T`)[0],imageUrl:ve.trim()||`./images/IMG-20260813-WA0083.jpg`,featured:!0,type:ce,pdfUrl:be.trim()?be.trim():void 0,pdfSize:be.trim()?`Document PDF`:void 0}),A(``),he(``),_e(``),ye(``),xe(``),Ce(``),Te(!0),setTimeout(()=>Te(!1),3e3))},className:`admin-form`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Type de Publication *`}),(0,b.jsxs)(`select`,{value:ce,onChange:e=>le(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:`article`,children:`Article de Presse / Actualité`}),(0,b.jsx)(`option`,{value:`communique`,children:`Communiqué Officiel PDF`}),(0,b.jsx)(`option`,{value:`photo`,children:`Publication Photo / Album`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Titre de la Publication *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Titre de l'actualité ou du communiqué`,value:ue,onChange:e=>A(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Catégorie *`}),(0,b.jsxs)(`select`,{value:j,onChange:e=>fe(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:`education`,children:`Éducation`}),(0,b.jsx)(`option`,{value:`solidarite`,children:`Solidarité`}),(0,b.jsx)(`option`,{value:`environnement`,children:`Environnement`}),(0,b.jsx)(`option`,{value:`communique`,children:`Communiqué Officiel`}),(0,b.jsx)(`option`,{value:`humanitaire`,children:`Humanitaire`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Auteur *`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Ex: Bureau Exécutif AJTES`,value:Se,onChange:e=>Ce(e.target.value),className:`form-control`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Résumé court *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Accroche de la publication`,value:me,onChange:e=>he(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Contenu Rédactionnel *`}),(0,b.jsx)(`textarea`,{required:!0,rows:4,placeholder:`Texte détaillé...`,value:ge,onChange:e=>_e(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Lien Photo / Image d'illustration`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`./images/IMG-20260813-WA0123.jpg ou URL`,value:ve,onChange:e=>ye(e.target.value),className:`form-control`})]}),ce===`communique`&&(0,b.jsxs)(`div`,{className:`form-group highlight-pdf-input`,children:[(0,b.jsx)(`label`,{children:`Fichier / URL du Document PDF *`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Ex: https://exemple.org/document.pdf`,value:be,onChange:e=>xe(e.target.value),className:`form-control`})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-gold btn-lg w-full margin-top`,children:`Publier la Nouvelle`})]})]}),(0,b.jsxs)(`div`,{className:`card admin-form-card`,children:[(0,b.jsx)(`h2`,{children:`Publier un Nouveau Projet`}),(0,b.jsx)(`p`,{children:`Ajouter une réalisation ou projet en cours d'exécution.`}),(0,b.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),o({id:`proj-${Date.now()}`,title:{fr:M,en:M,ar:M},description:{fr:`Nouveau projet ajouté depuis le tableau de bord d'administration.`,en:`New project added from admin dashboard.`,ar:`مشروع جديد تم إضافته من لوحة التحكم.`},category:De,location:`Tchad`,startDate:new Date().toISOString().split(`T`)[0],objective:{fr:`Objectif du projet`,en:`Project objective`,ar:`هدف المشروع`},targetBudget:parseFloat(ke)||5e6,raisedBudget:0,beneficiariesCount:200,status:`en_cours`,imageUrl:`https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80`,year:2026}),Ee(``),alert(`Projet publié avec succès sur le site !`)},className:`admin-form`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Titre du Projet *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Titre du projet`,value:M,onChange:e=>Ee(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Catégorie *`}),(0,b.jsxs)(`select`,{value:De,onChange:e=>Oe(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:`education`,children:`Éducation`}),(0,b.jsx)(`option`,{value:`solidarite`,children:`Solidarité`}),(0,b.jsx)(`option`,{value:`environnement`,children:`Environnement`}),(0,b.jsx)(`option`,{value:`humanitaire`,children:`Humanitaire`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Budget cible (FCFA) *`}),(0,b.jsx)(`input`,{type:`number`,required:!0,value:ke,onChange:e=>Ae(e.target.value),className:`form-control`})]})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-lg w-full margin-top`,children:`Publier le projet`})]})]}),(0,b.jsxs)(`div`,{className:`card admin-table-card margin-top-lg`,style:{gridColumn:`1 / -1`},children:[(0,b.jsxs)(`h3`,{children:[`Projets et Réalisations Associatives (`,e.length,`)`]}),(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Titre du Projet`}),(0,b.jsx)(`th`,{children:`Catégorie`}),(0,b.jsx)(`th`,{children:`Année`}),(0,b.jsx)(`th`,{children:`Budget Cible`}),(0,b.jsx)(`th`,{children:`Actions`})]})}),(0,b.jsx)(`tbody`,{children:e.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:typeof e.title==`string`?e.title:e.title.fr})}),(0,b.jsx)(`td`,{children:e.category}),(0,b.jsx)(`td`,{children:e.year||2026}),(0,b.jsxs)(`td`,{children:[(e.targetBudget||0).toLocaleString(),` FCFA`]}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:600},onClick:()=>{window.confirm(`Voulez-vous vraiment supprimer ce projet ?`)&&s(e.id)},children:`Supprimer Projet`})})]},e.id))})]})]}),(0,b.jsxs)(`div`,{className:`card admin-table-card margin-top-lg`,style:{gridColumn:`1 / -1`},children:[(0,b.jsxs)(`h3`,{children:[`Actualités et Communiqués Publiés (`,r.length,`)`]}),(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Titre`}),(0,b.jsx)(`th`,{children:`Catégorie`}),(0,b.jsx)(`th`,{children:`Auteur`}),(0,b.jsx)(`th`,{children:`Date`}),(0,b.jsx)(`th`,{children:`Actions`})]})}),(0,b.jsx)(`tbody`,{children:r.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:typeof e.title==`string`?e.title:e.title.fr})}),(0,b.jsx)(`td`,{children:e.category}),(0,b.jsx)(`td`,{children:e.author}),(0,b.jsx)(`td`,{children:e.publishDate}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:600},onClick:()=>{window.confirm(`Voulez-vous vraiment supprimer cette actualité ?`)&&d(e.id)},children:`Supprimer Actualité`})})]},e.id))})]})]})]}),S===`messages`&&(0,b.jsxs)(`div`,{className:`card admin-table-card`,children:[(0,b.jsx)(`div`,{className:`table-header-row margin-bottom-md`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`h3`,{style:{margin:0},children:[`Boîte de Réception — Messages de Contact (`,i.length,`)`]}),(0,b.jsx)(`p`,{style:{margin:`0.25rem 0 0 0`,color:`#6B7280`,fontSize:`0.9rem`},children:`Tous les messages envoyés par les visiteurs via le formulaire de contact du site.`})]})}),i.length===0?(0,b.jsx)(`div`,{className:`text-center`,style:{padding:`2.5rem 1rem`,color:`#6B7280`,background:`#F9FAFB`,borderRadius:`8px`},children:(0,b.jsx)(`p`,{style:{margin:0,fontWeight:600},children:`Aucun message reçu pour le moment.`})}):(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Expéditeur`}),(0,b.jsx)(`th`,{children:`Email / Téléphone`}),(0,b.jsx)(`th`,{children:`Sujet`}),(0,b.jsx)(`th`,{children:`Message`}),(0,b.jsx)(`th`,{children:`Date`}),(0,b.jsx)(`th`,{children:`Actions Administration`})]})}),(0,b.jsx)(`tbody`,{children:i.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:e.name})}),(0,b.jsxs)(`td`,{children:[e.email,(0,b.jsx)(`br`,{}),(0,b.jsx)(`span`,{style:{fontSize:`0.8rem`,color:`#6B7280`},children:e.phone||`Non renseigné`})]}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{className:`status-pill active`,children:e.subject})}),(0,b.jsx)(`td`,{style:{maxWidth:`300px`,whiteSpace:`pre-wrap`,fontSize:`0.85rem`},children:e.message}),(0,b.jsx)(`td`,{children:e.date}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`button`,{className:`btn btn-secondary btn-sm`,style:{background:`#FEE2E2`,color:`#991B1B`,border:`1px solid #FCA5A5`,fontWeight:600},onClick:()=>{window.confirm(`Supprimer le message de "${e.name}" ?`)&&f(e.id)},children:`Supprimer Message`})})]},e.id))})]})]}),S===`donations`&&(0,b.jsxs)(`div`,{className:`card admin-table-card`,children:[(0,b.jsxs)(`div`,{className:`table-header-row`,children:[(0,b.jsx)(`h2`,{children:`Registre des Dons Reçus`}),(0,b.jsx)(`button`,{className:`btn btn-gold btn-sm`,onClick:()=>alert(`Exportation du fichier CSV des dons (Simulée)`),children:`Exporter en CSV`})]}),(0,b.jsxs)(`table`,{className:`admin-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Ref`}),(0,b.jsx)(`th`,{children:`Donateur`}),(0,b.jsx)(`th`,{children:`Email`}),(0,b.jsx)(`th`,{children:`Montant`}),(0,b.jsx)(`th`,{children:`Moyen`}),(0,b.jsx)(`th`,{children:`Date`})]})}),(0,b.jsx)(`tbody`,{children:n.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:e.reference}),(0,b.jsx)(`td`,{children:e.donorName}),(0,b.jsx)(`td`,{children:e.donorEmail}),(0,b.jsxs)(`td`,{className:`amount-col`,children:[e.amount.toLocaleString(),` FCFA`]}),(0,b.jsx)(`td`,{children:e.paymentMethod}),(0,b.jsx)(`td`,{children:e.date})]},e.id))})]})]})]}),(0,b.jsx)(`style`,{children:`
        .admin-header-banner {
          background: linear-gradient(135deg, #121A24, #004D26);
          color: #FFF;
          padding: 3.5rem 1.5rem;
          text-align: center;
        }

        .admin-banner-container h1 {
          color: #FFF;
          font-size: 2.2rem;
          margin: 0.5rem 0;
        }

        .admin-badge {
          display: inline-block;
          background: var(--accent-gold);
          color: #121A24;
          font-weight: 800;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.82rem;
        }

        .admin-tab-bar {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .admin-tab {
          padding: 0.75rem 1.25rem;
          font-weight: 700;
          font-size: 0.92rem;
          background: var(--neutral-card-bg);
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          color: var(--neutral-heading);
          transition: all 0.2s;
        }

        .admin-tab.active {
          background: var(--primary-emerald);
          color: #FFF;
          border-color: var(--primary-emerald);
        }

        .admin-stat-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          font-size: 2.25rem;
          background: var(--primary-emerald-light);
          width: 54px;
          height: 54px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-val {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--neutral-heading);
        }

        .stat-title {
          font-size: 0.82rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .admin-table-card {
          padding: 2rem;
        }

        .table-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        [dir="rtl"] .admin-table { text-align: right; }

        .admin-table th, .admin-table td {
          padding: 0.9rem 1rem;
          border-bottom: 1px solid var(--neutral-border);
          font-size: 0.9rem;
        }

        .admin-table th {
          background: var(--neutral-light-bg);
          font-weight: 700;
          color: var(--neutral-heading);
        }

        .amount-col {
          color: var(--primary-emerald);
          font-weight: 800;
        }

        .method-pill {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.8rem;
        }

        .admin-form-card {
          max-width: 700px;
          margin: 0 auto;
          padding: 2.5rem;
        }

        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1.5rem;
        }

        .alert-success {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
          font-weight: 700;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-sm);
          margin-top: 1rem;
        }

        .admin-table-container {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-top: 1rem;
        }

        .mobile-members-list {
          display: none;
        }

        @media (max-width: 768px) {
          .admin-table-card {
            padding: 1.25rem 0.85rem !important;
          }
          .desktop-table-only {
            display: none !important;
          }
          .mobile-members-list {
            display: flex !important;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }
          .mobile-member-card {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 12px;
            padding: 1.15rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          }
          .mobile-member-card .action-buttons-stack {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-top: 0.5rem;
            width: 100%;
          }
          .mobile-member-card .action-buttons-stack button {
            width: 100%;
            justify-content: center;
            padding: 0.75rem 1rem;
            font-size: 0.88rem;
            font-weight: 700;
            border-radius: 8px;
          }
          .admin-tab-bar {
            justify-content: flex-start;
            overflow-x: auto;
            white-space: nowrap;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .admin-tab {
            flex-shrink: 0;
            padding: 0.6rem 0.9rem;
            font-size: 0.85rem;
          }
        }
      `})]})},Ze=()=>{let{addContactMessage:e}=pe(),[t,n]=(0,_.useState)(``),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(`information`),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(!1);return(0,b.jsxs)(`div`,{className:`contact-page`,children:[(0,b.jsx)(`section`,{className:`page-banner`,children:(0,b.jsxs)(`div`,{className:`banner-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Formulaire & Coordonnées`}),(0,b.jsx)(`h1`,{children:`Contactez l'AJTES Tchad`}),(0,b.jsx)(`p`,{children:`Vous souhaitez poser une question, proposer un partenariat institutionnel, soutenir un projet ou devenir bénévole ? Écrivez-nous !`})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`contact-info-card card`,children:[(0,b.jsx)(`h2`,{children:`Nos Coordonnées Officielles`}),(0,b.jsx)(`p`,{className:`subtitle`,children:`L'association est à votre écoute à N'Djamena.`}),(0,b.jsxs)(`div`,{className:`info-items`,children:[(0,b.jsx)(`div`,{className:`info-item`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Adresse du Siège & Bureaux`}),(0,b.jsx)(`p`,{children:`N'Djamena, République du Tchad`})]})}),(0,b.jsx)(`div`,{className:`info-item`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Airtel Money & Téléphones Officiels`}),(0,b.jsx)(`p`,{children:`+235 66 43 95 02 / +235 68 90 23 47`})]})}),(0,b.jsx)(`div`,{className:`info-item`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Adresse E-mail Officielle`}),(0,b.jsx)(`p`,{children:`impactdigital2026@gmail.com`})]})}),(0,b.jsx)(`div`,{className:`info-item`,children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Responsable Technique & Maintenance`}),(0,b.jsx)(`p`,{children:`SALOMON`})]})})]}),(0,b.jsxs)(`div`,{className:`social-box margin-top-lg`,children:[(0,b.jsx)(`h4`,{children:`Suivez nos actions sur les Réseaux Sociaux`}),(0,b.jsxs)(`div`,{className:`social-links-grid`,children:[(0,b.jsx)(`a`,{href:`https://facebook.com/events/s/retrouvez-nous-ici-/1425446342790196/`,target:`_blank`,rel:`noreferrer`,className:`social-btn fb`,children:`Facebook AJTES Officiel`}),(0,b.jsx)(`a`,{href:`https://chat.whatsapp.com/KH42DjDTNHA7oNHrbBlwGI`,target:`_blank`,rel:`noreferrer`,className:`social-btn wa`,children:`Groupe WhatsApp Officiel`}),(0,b.jsx)(`a`,{href:`https://youtube.com`,target:`_blank`,rel:`noreferrer`,className:`social-btn yt`,children:`Chaîne YouTube`}),(0,b.jsx)(`a`,{href:`https://tiktok.com`,target:`_blank`,rel:`noreferrer`,className:`social-btn tt`,children:`Compte TikTok`})]})]})]}),(0,b.jsxs)(`div`,{className:`contact-form-card card`,children:[(0,b.jsx)(`h2`,{children:`Envoyez-nous un Message`}),p&&(0,b.jsx)(`div`,{className:`alert-success`,children:`Votre message a été envoyé avec succès ! Le bureau de l'AJTES vous répondra dans les plus brefs délais.`}),(0,b.jsxs)(`form`,{onSubmit:async u=>{u.preventDefault();let p={name:t,email:r,phone:a,subject:s?`[${l.toUpperCase()}] ${s}`:`Demande via le site web (${l})`,message:`Catégorie: ${l}\n\n${d}`};e({name:t,email:r,phone:a,subject:s||`Demande via le site web`,topic:l,message:d});try{await ce.submitContact(p)}catch(e){console.warn(`[CONTACT API] Le backend n'a pas pu enregistrer ou l'API n'est pas démarrée:`,e)}m(!0),n(``),i(``),o(``),c(``),f(``),setTimeout(()=>m(!1),4e3)},className:`contact-form`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Objet du message *`}),(0,b.jsxs)(`select`,{value:l,onChange:e=>u(e.target.value),className:`form-control`,children:[(0,b.jsx)(`option`,{value:`information`,children:`Demande d'information générale`}),(0,b.jsx)(`option`,{value:`partenariat`,children:`Proposition de Partenariat (ONG / Institution)`}),(0,b.jsx)(`option`,{value:`don`,children:`Question relative à un Don`}),(0,b.jsx)(`option`,{value:`adhesion`,children:`Adhésion & Bénévolat`}),(0,b.jsx)(`option`,{value:`projet`,children:`Proposer un projet / établissement`}),(0,b.jsx)(`option`,{value:`autre`,children:`Autre sujet`})]})]}),(0,b.jsxs)(`div`,{className:`grid-2`,children:[(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Nom et Prénom *`}),(0,b.jsx)(`input`,{type:`text`,required:!0,placeholder:`Votre nom complet`,value:t,onChange:e=>n(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Adresse E-mail *`}),(0,b.jsx)(`input`,{type:`email`,required:!0,placeholder:`votre.email@example.td`,value:r,onChange:e=>i(e.target.value),className:`form-control`})]})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Téléphone / WhatsApp`}),(0,b.jsx)(`input`,{type:`tel`,placeholder:`+235 66 43 95 02 / +235 68 90 23 47`,value:a,onChange:e=>o(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Sujet du message`}),(0,b.jsx)(`input`,{type:`text`,placeholder:`Ex: Soutien pour l'éducation et les écoles`,value:s,onChange:e=>c(e.target.value),className:`form-control`})]}),(0,b.jsxs)(`div`,{className:`form-group`,children:[(0,b.jsx)(`label`,{children:`Votre Message *`}),(0,b.jsx)(`textarea`,{required:!0,rows:5,placeholder:`Écrivez votre message ici...`,value:d,onChange:e=>f(e.target.value),className:`form-control`})]}),(0,b.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-lg w-full margin-top`,children:`Envoyer mon message`})]})]})]})}),(0,b.jsx)(`style`,{children:`
        .page-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-container h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 1rem 0;
        }

        .contact-info-card, .contact-form-card {
          padding: 2.5rem;
        }

        .contact-info-card h2, .contact-form-card h2 {
          font-size: 1.5rem;
          color: var(--neutral-heading);
          margin-bottom: 0.5rem;
        }

        .subtitle {
          font-size: 0.95rem;
          color: var(--neutral-muted);
          margin-bottom: 2rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-item .icon {
          font-size: 1.5rem;
          background: var(--primary-emerald-light);
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--neutral-heading);
        }

        .info-item p {
          font-size: 0.9rem;
          color: var(--neutral-body);
        }

        .social-box h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .social-links-grid {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .social-btn {
          padding: 0.75rem 1rem;
          background: var(--neutral-light-bg);
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.2s;
        }

        .social-btn:hover {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--neutral-heading);
        }

        .form-control {
          padding: 0.75rem 1rem;
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-family: var(--font-main);
        }

        .alert-success {
          background: var(--primary-emerald-light);
          color: var(--primary-emerald);
          font-weight: 700;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-sm);
          margin-top: 1rem;
        }
      `})]})},Qe=({setCurrentTab:e})=>{let{committees:t,partners:n}=pe(),{language:r}=C();return(0,b.jsxs)(`div`,{className:`committees-page`,children:[(0,b.jsx)(`section`,{className:`page-banner`,children:(0,b.jsxs)(`div`,{className:`banner-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Gouvernance & Réseau`}),(0,b.jsx)(`h1`,{children:`Comités & Partenaires Officiels`}),(0,b.jsx)(`p`,{children:`L'AJTES s'appuie sur des comités locaux dynamiques et s'associe avec des institutions, ONG et entreprises engagées.`})]})}),(0,b.jsxs)(`section`,{className:`section`,children:[(0,b.jsxs)(`div`,{className:`section-title-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Structure Organique`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`Nos Comités & Commissions Specialized`})]}),(0,b.jsx)(`div`,{className:`grid-3`,children:t.map(e=>(0,b.jsxs)(`div`,{className:`committee-card card`,children:[(0,b.jsx)(`h3`,{children:e.name[r]||e.name.fr}),(0,b.jsx)(`p`,{className:`region-badge`,children:e.region}),(0,b.jsx)(`p`,{className:`comm-desc`,children:e.description[r]||e.description.fr}),(0,b.jsxs)(`div`,{className:`comm-footer`,children:[(0,b.jsxs)(`span`,{children:[`Région : `,e.region]}),(0,b.jsxs)(`span`,{children:[e.membersCount,` Membres`]})]})]},e.id))})]}),(0,b.jsxs)(`section`,{className:`section bg-slate`,children:[(0,b.jsxs)(`div`,{className:`section-title-container`,children:[(0,b.jsx)(`span`,{className:`section-badge`,children:`Ils nous font confiance`}),(0,b.jsx)(`h2`,{className:`section-title`,children:`Nos Partenaires Institutionnels & ONG`})]}),(0,b.jsx)(`div`,{className:`grid-2`,children:n.map(e=>(0,b.jsxs)(`div`,{className:`partner-card card`,children:[(0,b.jsx)(`img`,{src:e.logoUrl,alt:e.name,className:`partner-logo`}),(0,b.jsxs)(`div`,{className:`partner-info`,children:[(0,b.jsx)(`span`,{className:`partner-type`,children:e.type.toUpperCase()}),(0,b.jsx)(`h3`,{children:e.name}),(0,b.jsx)(`p`,{children:e.description[r]||e.description.fr})]})]},e.id))}),(0,b.jsxs)(`div`,{className:`partner-cta-box card margin-top-lg`,children:[(0,b.jsx)(`h3`,{children:`Vous êtes une ONG, une Institution ou une Entreprise ?`}),(0,b.jsx)(`p`,{children:`Rejoignez l'AJTES pour co-financer des projets éducatifs et environnementaux sur le terrain au Tchad.`}),(0,b.jsx)(`button`,{className:`btn btn-gold btn-lg`,onClick:()=>e(`contact`),children:`Devenir Partenaire de l'AJTES`})]})]}),(0,b.jsx)(`style`,{children:`
        .page-banner {
          background: linear-gradient(135deg, var(--neutral-heading), var(--primary-emerald));
          color: #FFF;
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .banner-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .banner-container h1 {
          color: #FFF;
          font-size: 2.25rem;
          margin: 1rem 0;
        }

        .bg-slate { background-color: var(--neutral-light-bg); }

        .committee-card {
          padding: 1.75rem;
          text-align: center;
        }

        .card-top-icon {
          font-size: 2.25rem;
          margin-bottom: 0.75rem;
        }

        .committee-card h3 {
          font-size: 1.25rem;
          color: var(--neutral-heading);
          margin-bottom: 0.35rem;
        }

        .region-badge {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-emerald);
          margin-bottom: 1rem;
        }

        .comm-desc {
          font-size: 0.92rem;
          color: var(--neutral-body);
          margin-bottom: 1.25rem;
        }

        .comm-footer {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--neutral-border);
          font-size: 0.82rem;
          color: var(--neutral-muted);
          font-weight: 600;
        }

        .partner-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .partner-logo {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 12px;
        }

        .partner-info h3 {
          font-size: 1.15rem;
          color: var(--neutral-heading);
          margin-bottom: 0.35rem;
        }

        .partner-type {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary-emerald);
          background: var(--primary-emerald-light);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .partner-cta-box {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, var(--neutral-heading), #004D26);
          color: #FFF;
        }

        .partner-cta-box h3 {
          color: #FFF;
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .partner-cta-box p {
          color: #E2E8F0;
          font-size: 1.05rem;
          max-width: 700px;
          margin: 0 auto 1.5rem auto;
        }
      `})]})};function $e(){let[e,t]=(0,_.useState)(`home`),[n,r]=(0,_.useState)(`register`);return(0,b.jsxs)(`div`,{className:`app-layout`,children:[(0,b.jsx)(me,{currentTab:e,setCurrentTab:t,navigateToAuth:e=>{r(e),t(`member`),window.scrollTo({top:0,behavior:`smooth`})}}),(0,b.jsx)(`main`,{className:`main-content`,children:(()=>{switch(e){case`home`:return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(ge,{setCurrentTab:t}),(0,b.jsx)(Be,{}),(0,b.jsx)(Ve,{})]});case`realizations`:return(0,b.jsx)(`div`,{style:{paddingTop:`1.5rem`},children:(0,b.jsx)(Ve,{})});case`about`:return(0,b.jsx)(Ue,{});case`documents`:return(0,b.jsx)(`div`,{style:{paddingTop:`2rem`},children:(0,b.jsx)(He,{})});case`projects`:return(0,b.jsx)(Ge,{setCurrentTab:t});case`news`:return(0,b.jsx)(Ke,{});case`gallery`:return(0,b.jsx)(qe,{});case`committees`:return(0,b.jsx)(Qe,{setCurrentTab:t});case`donate`:return(0,b.jsx)(Je,{});case`member`:return(0,b.jsx)(Ye,{initialMode:n,setCurrentTab:t});case`admin`:return(0,b.jsx)(Xe,{});case`contact`:return(0,b.jsx)(Ze,{});default:return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(ge,{setCurrentTab:t}),(0,b.jsx)(Be,{}),(0,b.jsx)(Ve,{})]})}})()}),(0,b.jsx)(he,{setCurrentTab:t})]})}function et(){return(0,b.jsx)(S,{children:(0,b.jsx)(ue,{children:(0,b.jsx)(fe,{children:(0,b.jsx)($e,{})})})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,b.jsx)(_.StrictMode,{children:(0,b.jsx)(et,{})}));