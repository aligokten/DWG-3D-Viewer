(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var yh={exports:{}},Xo={};var e_;function cM(){if(e_)return Xo;e_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var n_;function uM(){return n_||(n_=1,yh.exports=cM()),yh.exports}var ct=uM(),bh={exports:{}},se={};var i_;function fM(){if(i_)return se;i_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,S={};function M(P,Z,bt){this.props=P,this.context=Z,this.refs=S,this.updater=bt||b}M.prototype.isReactComponent={},M.prototype.setState=function(P,Z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Z,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function z(){}z.prototype=M.prototype;function F(P,Z,bt){this.props=P,this.context=Z,this.refs=S,this.updater=bt||b}var R=F.prototype=new z;R.constructor=F,D(R,M.prototype),R.isPureReactComponent=!0;var L=Array.isArray;function U(){}var N={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function A(P,Z,bt){var Ct=bt.ref;return{$$typeof:r,type:P,key:Z,ref:Ct!==void 0?Ct:null,props:bt}}function G(P,Z){return A(P.type,Z,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function K(P){var Z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(bt){return Z[bt]})}var dt=/\/+/g;function vt(P,Z){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):Z.toString(36)}function J(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(U,U):(P.status="pending",P.then(function(Z){P.status==="pending"&&(P.status="fulfilled",P.value=Z)},function(Z){P.status==="pending"&&(P.status="rejected",P.reason=Z)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function I(P,Z,bt,Ct,zt){var at=typeof P;(at==="undefined"||at==="boolean")&&(P=null);var St=!1;if(P===null)St=!0;else switch(at){case"bigint":case"string":case"number":St=!0;break;case"object":switch(P.$$typeof){case r:case t:St=!0;break;case _:return St=P._init,I(St(P._payload),Z,bt,Ct,zt)}}if(St)return zt=zt(P),St=Ct===""?"."+vt(P,0):Ct,L(zt)?(bt="",St!=null&&(bt=St.replace(dt,"$&/")+"/"),I(zt,Z,bt,"",function(ne){return ne})):zt!=null&&(V(zt)&&(zt=G(zt,bt+(zt.key==null||P&&P.key===zt.key?"":(""+zt.key).replace(dt,"$&/")+"/")+St)),Z.push(zt)),1;St=0;var yt=Ct===""?".":Ct+":";if(L(P))for(var Ht=0;Ht<P.length;Ht++)Ct=P[Ht],at=yt+vt(Ct,Ht),St+=I(Ct,Z,bt,at,zt);else if(Ht=y(P),typeof Ht=="function")for(P=Ht.call(P),Ht=0;!(Ct=P.next()).done;)Ct=Ct.value,at=yt+vt(Ct,Ht++),St+=I(Ct,Z,bt,at,zt);else if(at==="object"){if(typeof P.then=="function")return I(J(P),Z,bt,Ct,zt);throw Z=String(P),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return St}function H(P,Z,bt){if(P==null)return P;var Ct=[],zt=0;return I(P,Ct,"","",function(at){return Z.call(bt,at,zt++)}),Ct}function et(P){if(P._status===-1){var Z=P._result;Z=Z(),Z.then(function(bt){(P._status===0||P._status===-1)&&(P._status=1,P._result=bt)},function(bt){(P._status===0||P._status===-1)&&(P._status=2,P._result=bt)}),P._status===-1&&(P._status=0,P._result=Z)}if(P._status===1)return P._result.default;throw P._result}var gt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Et={map:H,forEach:function(P,Z,bt){H(P,function(){Z.apply(this,arguments)},bt)},count:function(P){var Z=0;return H(P,function(){Z++}),Z},toArray:function(P){return H(P,function(Z){return Z})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return se.Activity=x,se.Children=Et,se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=F,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return N.H.useMemoCache(P)}},se.cache=function(P){return function(){return P.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(P,Z,bt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ct=D({},P.props),zt=P.key;if(Z!=null)for(at in Z.key!==void 0&&(zt=""+Z.key),Z)!T.call(Z,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Z.ref===void 0||(Ct[at]=Z[at]);var at=arguments.length-2;if(at===1)Ct.children=bt;else if(1<at){for(var St=Array(at),yt=0;yt<at;yt++)St[yt]=arguments[yt+2];Ct.children=St}return A(P.type,zt,Ct)},se.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},se.createElement=function(P,Z,bt){var Ct,zt={},at=null;if(Z!=null)for(Ct in Z.key!==void 0&&(at=""+Z.key),Z)T.call(Z,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(zt[Ct]=Z[Ct]);var St=arguments.length-2;if(St===1)zt.children=bt;else if(1<St){for(var yt=Array(St),Ht=0;Ht<St;Ht++)yt[Ht]=arguments[Ht+2];zt.children=yt}if(P&&P.defaultProps)for(Ct in St=P.defaultProps,St)zt[Ct]===void 0&&(zt[Ct]=St[Ct]);return A(P,at,zt)},se.createRef=function(){return{current:null}},se.forwardRef=function(P){return{$$typeof:p,render:P}},se.isValidElement=V,se.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:et}},se.memo=function(P,Z){return{$$typeof:d,type:P,compare:Z===void 0?null:Z}},se.startTransition=function(P){var Z=N.T,bt={};N.T=bt;try{var Ct=P(),zt=N.S;zt!==null&&zt(bt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(U,gt)}catch(at){gt(at)}finally{Z!==null&&bt.types!==null&&(Z.types=bt.types),N.T=Z}},se.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},se.use=function(P){return N.H.use(P)},se.useActionState=function(P,Z,bt){return N.H.useActionState(P,Z,bt)},se.useCallback=function(P,Z){return N.H.useCallback(P,Z)},se.useContext=function(P){return N.H.useContext(P)},se.useDebugValue=function(){},se.useDeferredValue=function(P,Z){return N.H.useDeferredValue(P,Z)},se.useEffect=function(P,Z){return N.H.useEffect(P,Z)},se.useEffectEvent=function(P){return N.H.useEffectEvent(P)},se.useId=function(){return N.H.useId()},se.useImperativeHandle=function(P,Z,bt){return N.H.useImperativeHandle(P,Z,bt)},se.useInsertionEffect=function(P,Z){return N.H.useInsertionEffect(P,Z)},se.useLayoutEffect=function(P,Z){return N.H.useLayoutEffect(P,Z)},se.useMemo=function(P,Z){return N.H.useMemo(P,Z)},se.useOptimistic=function(P,Z){return N.H.useOptimistic(P,Z)},se.useReducer=function(P,Z,bt){return N.H.useReducer(P,Z,bt)},se.useRef=function(P){return N.H.useRef(P)},se.useState=function(P){return N.H.useState(P)},se.useSyncExternalStore=function(P,Z,bt){return N.H.useSyncExternalStore(P,Z,bt)},se.useTransition=function(){return N.H.useTransition()},se.version="19.2.8",se}var a_;function ep(){return a_||(a_=1,bh.exports=fM()),bh.exports}var Ce=ep(),Eh={exports:{}},Wo={},Th={exports:{}},Ah={};var s_;function hM(){return s_||(s_=1,(function(r){function t(I,H){var et=I.length;I.push(H);t:for(;0<et;){var gt=et-1>>>1,Et=I[gt];if(0<l(Et,H))I[gt]=H,I[et]=Et,et=gt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],et=I.pop();if(et!==H){I[0]=et;t:for(var gt=0,Et=I.length,P=Et>>>1;gt<P;){var Z=2*(gt+1)-1,bt=I[Z],Ct=Z+1,zt=I[Ct];if(0>l(bt,et))Ct<Et&&0>l(zt,bt)?(I[gt]=zt,I[Ct]=et,gt=Ct):(I[gt]=bt,I[Z]=et,gt=Z);else if(Ct<Et&&0>l(zt,et))I[gt]=zt,I[Ct]=et,gt=Ct;else break t}}return H}function l(I,H){var et=I.sortIndex-H.sortIndex;return et!==0?et:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],d=[],_=1,x=null,g=3,y=!1,b=!1,D=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function R(I){for(var H=i(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=I)s(d),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(d)}}function L(I){if(D=!1,R(I),!b)if(i(m)!==null)b=!0,U||(U=!0,K());else{var H=i(d);H!==null&&J(L,H.startTime-I)}}var U=!1,N=-1,T=5,A=-1;function G(){return S?!0:!(r.unstable_now()-A<T)}function V(){if(S=!1,U){var I=r.unstable_now();A=I;var H=!0;try{t:{b=!1,D&&(D=!1,z(N),N=-1),y=!0;var et=g;try{e:{for(R(I),x=i(m);x!==null&&!(x.expirationTime>I&&G());){var gt=x.callback;if(typeof gt=="function"){x.callback=null,g=x.priorityLevel;var Et=gt(x.expirationTime<=I);if(I=r.unstable_now(),typeof Et=="function"){x.callback=Et,R(I),H=!0;break e}x===i(m)&&s(m),R(I)}else s(m);x=i(m)}if(x!==null)H=!0;else{var P=i(d);P!==null&&J(L,P.startTime-I),H=!1}}break t}finally{x=null,g=et,y=!1}H=void 0}}finally{H?K():U=!1}}}var K;if(typeof F=="function")K=function(){F(V)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,vt=dt.port2;dt.port1.onmessage=V,K=function(){vt.postMessage(null)}}else K=function(){M(V,0)};function J(I,H){N=M(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var et=g;g=H;try{return I()}finally{g=et}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var et=g;g=I;try{return H()}finally{g=et}},r.unstable_scheduleCallback=function(I,H,et){var gt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?gt+et:gt):et=gt,I){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=et+Et,I={id:_++,callback:H,priorityLevel:I,startTime:et,expirationTime:Et,sortIndex:-1},et>gt?(I.sortIndex=et,t(d,I),i(m)===null&&I===i(d)&&(D?(z(N),N=-1):D=!0,J(L,et-gt))):(I.sortIndex=Et,t(m,I),b||y||(b=!0,U||(U=!0,K()))),I},r.unstable_shouldYield=G,r.unstable_wrapCallback=function(I){var H=g;return function(){var et=g;g=H;try{return I.apply(this,arguments)}finally{g=et}}}})(Ah)),Ah}var r_;function dM(){return r_||(r_=1,Th.exports=hM()),Th.exports}var Rh={exports:{}},Fn={};var o_;function pM(){if(o_)return Fn;o_=1;var r=ep();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,_)},Fn.flushSync=function(m){var d=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=_,s.d.f()}},Fn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Fn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Fn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Fn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,d){return m(d)},Fn.useFormState=function(m,d,_){return f.H.useFormState(m,d,_)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.2.8",Fn}var l_;function mM(){if(l_)return Rh.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rh.exports=pM(),Rh.exports}var c_;function gM(){if(c_)return Wo;c_=1;var r=dM(),t=ep(),i=mM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var v=!1,w=u.child;w;){if(w===a){v=!0,a=u,o=h;break}if(w===o){v=!0,o=u,a=h;break}w=w.sibling}if(!v){for(w=h.child;w;){if(w===a){v=!0,a=h,o=u;break}if(w===o){v=!0,o=h,a=u;break}w=w.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),F=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),G=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case M:return"Profiler";case S:return"StrictMode";case L:return"Suspense";case U:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case F:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var J=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},gt=[],Et=-1;function P(e){return{current:e}}function Z(e){0>Et||(e.current=gt[Et],gt[Et]=null,Et--)}function bt(e,n){Et++,gt[Et]=e.current,e.current=n}var Ct=P(null),zt=P(null),at=P(null),St=P(null);function yt(e,n){switch(bt(at,n),bt(zt,e),bt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Eg(n),e=Tg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Ct),bt(Ct,e)}function Ht(){Z(Ct),Z(zt),Z(at)}function ne(e){e.memoizedState!==null&&bt(St,e);var n=Ct.current,a=Tg(n,e.type);n!==a&&(bt(zt,e),bt(Ct,a))}function jt(e){zt.current===e&&(Z(Ct),Z(zt)),St.current===e&&(Z(St),Ho._currentValue=et)}var Ze,he;function Se(e){if(Ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ze=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ze+e+he}var Me=!1;function de(e,n){if(!e||Me)return"";Me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var ot=lt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(lt){ot=lt}e.call(xt.prototype)}}else{try{throw Error()}catch(lt){ot=lt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&ot&&typeof lt.stack=="string")return[lt.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),v=h[0],w=h[1];if(v&&w){var B=v.split(`
`),tt=w.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===tt.length)for(o=B.length-1,u=tt.length-1;1<=o&&0<=u&&B[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==tt[u]){var pt=`
`+B[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Se(a):""}function sn(e,n){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==n&&n!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return Se("Activity");default:return""}}function rn(e){try{var n="",a=null;do n+=sn(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var on=Object.prototype.hasOwnProperty,hn=r.unstable_scheduleCallback,qe=r.unstable_cancelCallback,ln=r.unstable_shouldYield,Y=r.unstable_requestPaint,He=r.unstable_now,we=r.unstable_getCurrentPriorityLevel,O=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,j=r.unstable_NormalPriority,st=r.unstable_LowPriority,ft=r.unstable_IdlePriority,Tt=r.log,Dt=r.unstable_setDisableYieldValue,ut=null,ht=null;function Rt(e){if(typeof Tt=="function"&&Dt(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ut,e)}catch{}}var It=Math.clz32?Math.clz32:Kt,Nt=Math.log,Ut=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(Nt(e)/Ut|0)|0}var Qt=256,ie=262144,X=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=At(o):(v&=w,v!==0?u=At(v):a||(a=w&~e,a!==0&&(u=At(a))))):(w=o&~h,w!==0?u=At(w):v!==0?u=At(v):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function wt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ft(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mt(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function Yt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Vt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Je(e,n,a,o,u,h){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,B=e.expirationTimes,tt=e.hiddenUpdates;for(a=v&~a;0<a;){var pt=31-It(a),xt=1<<pt;w[pt]=0,B[pt]=-1;var ot=tt[pt];if(ot!==null)for(tt[pt]=null,pt=0;pt<ot.length;pt++){var lt=ot[pt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}o!==0&&Le(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(v&~n))}function Le(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ei(e,n){var a=n&-n;return a=(a&42)!==0?1:$r(a),(a&(e.suspendedLanes|n))!==0?0:a}function $r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function to(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eo(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Zg(e.type))}function Zs(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Ii=Math.random().toString(36).slice(2),mn="__reactFiber$"+Ii,Dn="__reactProps$"+Ii,Xn="__reactContainer$"+Ii,vs="__reactEvents$"+Ii,ul="__reactListeners$"+Ii,fl="__reactHandles$"+Ii,xs="__reactResources$"+Ii,La="__reactMarker$"+Ii;function Na(e){delete e[mn],delete e[Dn],delete e[vs],delete e[ul],delete e[fl]}function ia(e){var n=e[mn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Xn]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Lg(e);e!==null;){if(a=e[mn])return a;e=Lg(e)}return n}e=a,a=e.parentNode}return null}function aa(e){if(e=e[mn]||e[Xn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ss(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Oa(e){var n=e[xs];return n||(n=e[xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(e){e[La]=!0}var hl=new Set,C={};function W(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(C[e]=n,e=0;e<n.length;e++)hl.add(n[e])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},Ot={};function Gt(e){return on.call(Ot,e)?!0:on.call(it,e)?!1:nt.test(e)?Ot[e]=!0:(it[e]=!0,!1)}function Lt(e,n,a){if(Gt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Te(e){if(!e._valueTracker){var n=oe(e)?"checked":"value";e._valueTracker=Zt(e,n,""+e[n])}}function $e(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function We(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function Oe(e){return e.replace(Ne,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bt(e,n,a,o,u,h,v,w){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jt(n)):e.value!==""+Jt(n)&&(e.value=""+Jt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?pe(e,v,Jt(n)):a!=null?pe(e,v,Jt(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Jt(w):e.removeAttribute("name")}function zn(e,n,a,o,u,h,v,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Te(e);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Te(e)}function pe(e,n,a){n==="number"&&We(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ni(e,n,a){if(n!=null&&(n=""+Jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Jt(a):""}function Ci(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Jt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Te(e)}function ii(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Pe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Pe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function wi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&tn(e,h,n[h])}function Ue(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ms(e){return Pa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var vu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,js=null;function bp(e){var n=aa(e);if(n&&(e=n.stateNode)){var a=e[Dn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Oe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Dn]||null;if(!u)throw Error(s(90));Bt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&$e(o)}break t;case"textarea":ni(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&yn(e,!!a.multiple,n,!1)}}}var Su=!1;function Ep(e,n,a){if(Su)return e(n,a);Su=!0;try{var o=e(n);return o}finally{if(Su=!1,(Ks!==null||js!==null)&&($l(),Ks&&(n=Ks,e=js,js=Ks=null,bp(n),e)))for(n=0;n<e.length;n++)bp(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Dn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(ra)try{var io={};Object.defineProperty(io,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Mu=!1}var za=null,yu=null,dl=null;function Tp(){if(dl)return dl;var e,n=yu,a=n.length,o,u="value"in za?za.value:za.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[h-o];o++);return dl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Ap(){return!1}function Wn(e){function n(a,o,u,h,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ml:Ap,this.isPropagationStopped=Ap,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Wn(ys),ao=x({},ys,{view:0,detail:0}),ox=Wn(ao),bu,Eu,so,_l=x({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(bu=e.screenX-so.screenX,Eu=e.screenY-so.screenY):Eu=bu=0,so=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),Rp=Wn(_l),lx=x({},_l,{dataTransfer:0}),cx=Wn(lx),ux=x({},ao,{relatedTarget:0}),Tu=Wn(ux),fx=x({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=Wn(fx),dx=x({},ys,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),px=Wn(dx),mx=x({},ys,{data:0}),Cp=Wn(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vx[e])?!!n[e]:!1}function Au(){return xx}var Sx=x({},ao,{key:function(e){if(e.key){var n=gx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_x[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mx=Wn(Sx),yx=x({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Wn(yx),bx=x({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Ex=Wn(bx),Tx=x({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=Wn(Tx),Rx=x({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cx=Wn(Rx),wx=x({},ys,{newState:0,oldState:0}),Dx=Wn(wx),Ux=[9,13,27,32],Ru=ra&&"CompositionEvent"in window,ro=null;ra&&"documentMode"in document&&(ro=document.documentMode);var Lx=ra&&"TextEvent"in window&&!ro,Dp=ra&&(!Ru||ro&&8<ro&&11>=ro),Up=" ",Lp=!1;function Np(e,n){switch(e){case"keyup":return Ux.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function Nx(e,n){switch(e){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Lp=!0,Up);case"textInput":return e=n.data,e===Up&&Lp?null:e;default:return null}}function Ox(e,n){if(Qs)return e==="compositionend"||!Ru&&Np(e,n)?(e=Tp(),dl=yu=za=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Px[e.type]:n==="textarea"}function zp(e,n,a,o){Ks?js?js.push(o):js=[o]:Ks=o,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var oo=null,lo=null;function zx(e){vg(e,0)}function vl(e){var n=Ss(e);if($e(n))return e}function Fp(e,n){if(e==="change")return n}var Ip=!1;if(ra){var Cu;if(ra){var wu="oninput"in document;if(!wu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),wu=typeof Bp.oninput=="function"}Cu=wu}else Cu=!1;Ip=Cu&&(!document.documentMode||9<document.documentMode)}function Hp(){oo&&(oo.detachEvent("onpropertychange",Gp),lo=oo=null)}function Gp(e){if(e.propertyName==="value"&&vl(lo)){var n=[];zp(n,lo,e,xu(e)),Ep(zx,n)}}function Fx(e,n,a){e==="focusin"?(Hp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Gp)):e==="focusout"&&Hp()}function Ix(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(lo)}function Bx(e,n){if(e==="click")return vl(n)}function Hx(e,n){if(e==="input"||e==="change")return vl(n)}function Gx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ai=typeof Object.is=="function"?Object.is:Gx;function co(e,n){if(ai(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!on.call(n,u)||!ai(e[u],n[u]))return!1}return!0}function Vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kp(e,n){var a=Vp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vp(a)}}function Xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=We(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=We(e.document)}return n}function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vx=ra&&"documentMode"in document&&11>=document.documentMode,Js=null,Uu=null,uo=null,Lu=!1;function Yp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Js==null||Js!==We(o)||(o=Js,"selectionStart"in o&&Du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=rc(Uu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Js)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var $s={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},Nu={},qp={};ra&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Es(e){if(Nu[e])return Nu[e];if(!$s[e])return e;var n=$s[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Nu[e]=n[a];return e}var Zp=Es("animationend"),Kp=Es("animationiteration"),jp=Es("animationstart"),kx=Es("transitionrun"),Xx=Es("transitionstart"),Wx=Es("transitioncancel"),Qp=Es("transitionend"),Jp=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Di(e,n){Jp.set(e,n),W(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],tr=0,Pu=0;function Sl(){for(var e=tr,n=Pu=tr=0;n<e;){var a=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var h=gi[n];if(gi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}h!==0&&$p(a,u,h)}}function Ml(e,n,a,o){gi[tr++]=e,gi[tr++]=n,gi[tr++]=a,gi[tr++]=o,Pu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function zu(e,n,a,o){return Ml(e,n,a,o),yl(e)}function Ts(e,n){return Ml(e,null,null,n),yl(e)}function $p(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-It(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function yl(e){if(50<No)throw No=0,Yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function Yx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,a,o){return new Yx(e,n,a,o)}function Fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,n){var a=e.alternate;return a===null?(a=si(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,u,h){var v=0;if(o=e,typeof e=="function")Fu(e)&&(v=1);else if(typeof e=="string")v=QS(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=si(31,a,n,u),e.elementType=A,e.lanes=h,e;case D:return As(a.children,u,h,n);case S:v=8,u|=24;break;case M:return e=si(12,a,n,u|2),e.elementType=M,e.lanes=h,e;case L:return e=si(13,a,n,u),e.elementType=L,e.lanes=h,e;case U:return e=si(19,a,n,u),e.elementType=U,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:v=10;break t;case z:v=9;break t;case R:v=11;break t;case N:v=14;break t;case T:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=si(v,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function As(e,n,a,o){return e=si(7,e,o,n),e.lanes=a,e}function Iu(e,n,a){return e=si(6,e,null,n),e.lanes=a,e}function em(e){var n=si(18,null,null,0);return n.stateNode=e,n}function Bu(e,n,a){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var nm=new WeakMap;function _i(e,n){if(typeof e=="object"&&e!==null){var a=nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rn(n)},nm.set(e,n),n)}return{value:e,source:n,stack:rn(n)}}var nr=[],ir=0,El=null,fo=0,vi=[],xi=0,Fa=null,Hi=1,Gi="";function la(e,n){nr[ir++]=fo,nr[ir++]=El,El=e,fo=n}function im(e,n,a){vi[xi++]=Hi,vi[xi++]=Gi,vi[xi++]=Fa,Fa=e;var o=Hi;e=Gi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var h=32-It(n)+u;if(30<h){var v=u-u%5;h=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Hi=1<<32-It(n)+u|a<<u|o,Gi=h+e}else Hi=1<<h|a<<u|o,Gi=e}function Hu(e){e.return!==null&&(la(e,1),im(e,1,0))}function Gu(e){for(;e===El;)El=nr[--ir],nr[ir]=null,fo=nr[--ir],nr[ir]=null;for(;e===Fa;)Fa=vi[--xi],vi[xi]=null,Gi=vi[--xi],vi[xi]=null,Hi=vi[--xi],vi[xi]=null}function am(e,n){vi[xi++]=Hi,vi[xi++]=Gi,vi[xi++]=Fa,Hi=n.id,Gi=n.overflow,Fa=e}var Un=null,Ke=null,ye=!1,Ia=null,Si=!1,Vu=Error(s(519));function Ba(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(_i(n,e)),Vu}function sm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[mn]=e,n[Dn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)ge(Po[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ci(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||yg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=sa),n=!0):n=!1,n||Ba(e,!0)}function rm(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Un=Un.return}}function ar(e){if(e!==Un)return!1;if(!ye)return rm(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oh(e.type,e.memoizedProps)),a=!a),a&&Ke&&Ba(e),rm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=Ug(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=Ug(e)}else n===27?(n=Ke,$a(e.type)?(e=hh,hh=null,Ke=e):Ke=n):Ke=Un?yi(e.stateNode.nextSibling):null;return!0}function Rs(){Ke=Un=null,ye=!1}function ku(){var e=Ia;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Ia=null),e}function ho(e){Ia===null?Ia=[e]:Ia.push(e)}var Xu=P(null),Cs=null,ca=null;function Ha(e,n,a){bt(Xu,n._currentValue),n._currentValue=a}function ua(e){e._currentValue=Xu.current,Z(Xu)}function Wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var v=u.child;h=h.firstContext;t:for(;h!==null;){var w=h;h=u;for(var B=0;B<n.length;B++)if(w.context===n[B]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),Wu(h.return,a,e),o||(v=null);break t}h=w.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),Wu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function sr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=u.type;ai(u.pendingProps.value,v.value)||(e!==null?e.push(w):e=[w])}}else if(u===St.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}u=u.return}e!==null&&Yu(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ws(e){Cs=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return om(Cs,e)}function Al(e,n){return Cs===null&&ws(e),om(e,n)}function om(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(e===null)throw Error(s(308));ca=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ca=ca.next=n;return a}var qx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Zx=r.unstable_scheduleCallback,Kx=r.unstable_NormalPriority,_n={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new qx,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&Zx(Kx,function(){e.controller.abort()})}var mo=null,Zu=0,rr=0,or=null;function jx(e,n){if(mo===null){var a=mo=[];Zu=0,rr=Jf(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(lm,lm),n}function lm(){if(--Zu===0&&mo!==null){or!==null&&(or.status="fulfilled");var e=mo;mo=null,rr=0,or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Qx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var cm=I.S;I.S=function(e,n){Y0=He(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&jx(e,n),cm!==null&&cm(e,n)};var Ds=P(null);function Ku(){var e=Ds.current;return e!==null?e:Ye.pooledCache}function Rl(e,n){n===null?bt(Ds,Ds.current):bt(Ds,n.pool)}function um(){var e=Ku();return e===null?null:{parent:_n._currentValue,pool:e}}var lr=Error(s(460)),ju=Error(s(474)),Cl=Error(s(542)),wl={then:function(){}};function fm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sa,sa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pm(e),e;default:if(typeof n.status=="string")n.then(sa,sa);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pm(e),e}throw Ls=n,lr}}function Us(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ls=a,lr):a}}var Ls=null;function dm(){if(Ls===null)throw Error(s(459));var e=Ls;return Ls=null,e}function pm(e){if(e===lr||e===Cl)throw Error(s(483))}var cr=null,go=0;function Dl(e){var n=go;return go+=1,cr===null&&(cr=[]),hm(cr,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function mm(e){function n(q,k){if(e){var $=q.deletions;$===null?(q.deletions=[k],q.flags|=16):$.push(k)}}function a(q,k){if(!e)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function u(q,k){return q=oa(q,k),q.index=0,q.sibling=null,q}function h(q,k,$){return q.index=$,e?($=q.alternate,$!==null?($=$.index,$<k?(q.flags|=67108866,k):$):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function v(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function w(q,k,$,_t){return k===null||k.tag!==6?(k=Iu($,q.mode,_t),k.return=q,k):(k=u(k,$),k.return=q,k)}function B(q,k,$,_t){var $t=$.type;return $t===D?pt(q,k,$.props.children,_t,$.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Us($t)===k.type)?(k=u(k,$.props),_o(k,$),k.return=q,k):(k=bl($.type,$.key,$.props,null,q.mode,_t),_o(k,$),k.return=q,k)}function tt(q,k,$,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Bu($,q.mode,_t),k.return=q,k):(k=u(k,$.children||[]),k.return=q,k)}function pt(q,k,$,_t,$t){return k===null||k.tag!==7?(k=As($,q.mode,_t,$t),k.return=q,k):(k=u(k,$),k.return=q,k)}function xt(q,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Iu(""+k,q.mode,$),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return $=bl(k.type,k.key,k.props,null,q.mode,$),_o($,k),$.return=q,$;case b:return k=Bu(k,q.mode,$),k.return=q,k;case T:return k=Us(k),xt(q,k,$)}if(J(k)||K(k))return k=As(k,q.mode,$,null),k.return=q,k;if(typeof k.then=="function")return xt(q,Dl(k),$);if(k.$$typeof===F)return xt(q,Al(q,k),$);Ul(q,k)}return null}function ot(q,k,$,_t){var $t=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $t!==null?null:w(q,k,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===$t?B(q,k,$,_t):null;case b:return $.key===$t?tt(q,k,$,_t):null;case T:return $=Us($),ot(q,k,$,_t)}if(J($)||K($))return $t!==null?null:pt(q,k,$,_t,null);if(typeof $.then=="function")return ot(q,k,Dl($),_t);if($.$$typeof===F)return ot(q,k,Al(q,$),_t);Ul(q,$)}return null}function lt(q,k,$,_t,$t){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return q=q.get($)||null,w(k,q,""+_t,$t);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return q=q.get(_t.key===null?$:_t.key)||null,B(k,q,_t,$t);case b:return q=q.get(_t.key===null?$:_t.key)||null,tt(k,q,_t,$t);case T:return _t=Us(_t),lt(q,k,$,_t,$t)}if(J(_t)||K(_t))return q=q.get($)||null,pt(k,q,_t,$t,null);if(typeof _t.then=="function")return lt(q,k,$,Dl(_t),$t);if(_t.$$typeof===F)return lt(q,k,$,Al(k,_t),$t);Ul(k,_t)}return null}function Wt(q,k,$,_t){for(var $t=null,Ae=null,qt=k,ce=k=0,xe=null;qt!==null&&ce<$.length;ce++){qt.index>ce?(xe=qt,qt=null):xe=qt.sibling;var Re=ot(q,qt,$[ce],_t);if(Re===null){qt===null&&(qt=xe);break}e&&qt&&Re.alternate===null&&n(q,qt),k=h(Re,k,ce),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re,qt=xe}if(ce===$.length)return a(q,qt),ye&&la(q,ce),$t;if(qt===null){for(;ce<$.length;ce++)qt=xt(q,$[ce],_t),qt!==null&&(k=h(qt,k,ce),Ae===null?$t=qt:Ae.sibling=qt,Ae=qt);return ye&&la(q,ce),$t}for(qt=o(qt);ce<$.length;ce++)xe=lt(qt,q,ce,$[ce],_t),xe!==null&&(e&&xe.alternate!==null&&qt.delete(xe.key===null?ce:xe.key),k=h(xe,k,ce),Ae===null?$t=xe:Ae.sibling=xe,Ae=xe);return e&&qt.forEach(function(as){return n(q,as)}),ye&&la(q,ce),$t}function te(q,k,$,_t){if($==null)throw Error(s(151));for(var $t=null,Ae=null,qt=k,ce=k=0,xe=null,Re=$.next();qt!==null&&!Re.done;ce++,Re=$.next()){qt.index>ce?(xe=qt,qt=null):xe=qt.sibling;var as=ot(q,qt,Re.value,_t);if(as===null){qt===null&&(qt=xe);break}e&&qt&&as.alternate===null&&n(q,qt),k=h(as,k,ce),Ae===null?$t=as:Ae.sibling=as,Ae=as,qt=xe}if(Re.done)return a(q,qt),ye&&la(q,ce),$t;if(qt===null){for(;!Re.done;ce++,Re=$.next())Re=xt(q,Re.value,_t),Re!==null&&(k=h(Re,k,ce),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re);return ye&&la(q,ce),$t}for(qt=o(qt);!Re.done;ce++,Re=$.next())Re=lt(qt,q,ce,Re.value,_t),Re!==null&&(e&&Re.alternate!==null&&qt.delete(Re.key===null?ce:Re.key),k=h(Re,k,ce),Ae===null?$t=Re:Ae.sibling=Re,Ae=Re);return e&&qt.forEach(function(lM){return n(q,lM)}),ye&&la(q,ce),$t}function ke(q,k,$,_t){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:t:{for(var $t=$.key;k!==null;){if(k.key===$t){if($t=$.type,$t===D){if(k.tag===7){a(q,k.sibling),_t=u(k,$.props.children),_t.return=q,q=_t;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Us($t)===k.type){a(q,k.sibling),_t=u(k,$.props),_o(_t,$),_t.return=q,q=_t;break t}a(q,k);break}else n(q,k);k=k.sibling}$.type===D?(_t=As($.props.children,q.mode,_t,$.key),_t.return=q,q=_t):(_t=bl($.type,$.key,$.props,null,q.mode,_t),_o(_t,$),_t.return=q,q=_t)}return v(q);case b:t:{for($t=$.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(q,k.sibling),_t=u(k,$.children||[]),_t.return=q,q=_t;break t}else{a(q,k);break}else n(q,k);k=k.sibling}_t=Bu($,q.mode,_t),_t.return=q,q=_t}return v(q);case T:return $=Us($),ke(q,k,$,_t)}if(J($))return Wt(q,k,$,_t);if(K($)){if($t=K($),typeof $t!="function")throw Error(s(150));return $=$t.call($),te(q,k,$,_t)}if(typeof $.then=="function")return ke(q,k,Dl($),_t);if($.$$typeof===F)return ke(q,k,Al(q,$),_t);Ul(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(q,k.sibling),_t=u(k,$),_t.return=q,q=_t):(a(q,k),_t=Iu($,q.mode,_t),_t.return=q,q=_t),v(q)):a(q,k)}return function(q,k,$,_t){try{go=0;var $t=ke(q,k,$,_t);return cr=null,$t}catch(qt){if(qt===lr||qt===Cl)throw qt;var Ae=si(29,qt,null,q.mode);return Ae.lanes=_t,Ae.return=q,Ae}}}var Ns=mm(!0),gm=mm(!1),Ga=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(e),$p(e,null,a),n}return Ml(e,o,n,a),yl(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ti(e,a)}}function $u(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var tf=!1;function xo(){if(tf){var e=or;if(e!==null)throw e}}function So(e,n,a,o){tf=!1;var u=e.updateQueue;Ga=!1;var h=u.firstBaseUpdate,v=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var B=w,tt=B.next;B.next=null,v===null?h=tt:v.next=tt,v=B;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,w=pt.lastBaseUpdate,w!==v&&(w===null?pt.firstBaseUpdate=tt:w.next=tt,pt.lastBaseUpdate=B))}if(h!==null){var xt=u.baseState;v=0,pt=tt=B=null,w=h;do{var ot=w.lane&-536870913,lt=ot!==w.lane;if(lt?(ve&ot)===ot:(o&ot)===ot){ot!==0&&ot===rr&&(tf=!0),pt!==null&&(pt=pt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Wt=e,te=w;ot=n;var ke=a;switch(te.tag){case 1:if(Wt=te.payload,typeof Wt=="function"){xt=Wt.call(ke,xt,ot);break t}xt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=te.payload,ot=typeof Wt=="function"?Wt.call(ke,xt,ot):Wt,ot==null)break t;xt=x({},xt,ot);break t;case 2:Ga=!0}}ot=w.callback,ot!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[ot]:lt.push(ot))}else lt={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pt===null?(tt=pt=lt,B=xt):pt=pt.next=lt,v|=ot;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;lt=w,w=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);pt===null&&(B=xt),u.baseState=B,u.firstBaseUpdate=tt,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),Za|=v,e.lanes=v,e.memoizedState=xt}}function _m(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function vm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_m(a[e],n)}var ur=P(null),Ll=P(0);function xm(e,n){e=xa,bt(Ll,e),bt(ur,n),xa=e|n.baseLanes}function ef(){bt(Ll,xa),bt(ur,ur.current)}function nf(){xa=Ll.current,Z(ur),Z(Ll)}var ri=P(null),Mi=null;function Xa(e){var n=e.alternate;bt(dn,dn.current&1),bt(ri,e),Mi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(Mi=e)}function af(e){bt(dn,dn.current),bt(ri,e),Mi===null&&(Mi=e)}function Sm(e){e.tag===22?(bt(dn,dn.current),bt(ri,e),Mi===null&&(Mi=e)):Wa()}function Wa(){bt(dn,dn.current),bt(ri,ri.current)}function oi(e){Z(ri),Mi===e&&(Mi=null),Z(dn)}var dn=P(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||fh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,le=null,Ge=null,vn=null,Ol=!1,fr=!1,Os=!1,Pl=0,Mo=0,hr=null,Jx=0;function cn(){throw Error(s(321))}function sf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ai(e[a],n[a]))return!1;return!0}function rf(e,n,a,o,u,h){return fa=h,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?i0:Mf,Os=!1,h=a(o,u),Os=!1,fr&&(h=ym(n,a,o,u)),Mm(e),h}function Mm(e){I.H=Eo;var n=Ge!==null&&Ge.next!==null;if(fa=0,vn=Ge=le=null,Ol=!1,Mo=0,hr=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&Tl(e)&&(xn=!0))}function ym(e,n,a,o){le=e;var u=0;do{if(fr&&(hr=null),Mo=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,vn=Ge=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=a0,h=n(a,o)}while(fr);return h}function $x(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(le.flags|=1024),n}function of(){var e=Pl!==0;return Pl=0,e}function lf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cf(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}fa=0,vn=Ge=le=null,fr=!1,Mo=Pl=0,hr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?le.memoizedState=vn=e:vn=vn.next=e,vn}function pn(){if(Ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=vn===null?le.memoizedState:vn.next;if(n!==null)vn=n,Ge=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},vn===null?le.memoizedState=vn=e:vn=vn.next=e}return vn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=Mo;return Mo+=1,hr===null&&(hr=[]),e=hm(hr,e,n),n=le,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?i0:Mf),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===F)return Ln(e)}throw Error(s(438,String(e)))}function uf(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=G;return n.index++,a}function ha(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=pn();return ff(n,Ge,e)}function ff(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var v=u.next;u.next=h.next,h.next=v}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var w=v=null,B=null,tt=n,pt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(ve&xt)===xt:(fa&xt)===xt){var ot=tt.revertLane;if(ot===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===rr&&(pt=!0);else if((fa&ot)===ot){tt=tt.next,ot===rr&&(pt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(w=B=xt,v=h):B=B.next=xt,le.lanes|=ot,Za|=ot;xt=tt.action,Os&&a(h,xt),h=tt.hasEagerState?tt.eagerState:a(h,xt)}else ot={lane:xt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(w=B=ot,v=h):B=B.next=ot,le.lanes|=xt,Za|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?v=h:B.next=w,!ai(h,e.memoizedState)&&(xn=!0,pt&&(a=or,a!==null)))throw a;e.memoizedState=h,e.baseState=v,e.baseQueue=B,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hf(e){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do h=e(h,v.action),v=v.next;while(v!==u);ai(h,n.memoizedState)||(xn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function bm(e,n,a){var o=le,u=pn(),h=ye;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ai((Ge||u).memoizedState,a);if(v&&(u.memoizedState=a,xn=!0),u=u.queue,mf(Am.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,dr(9,{destroy:void 0},Tm.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));h||(fa&127)!==0||Em(o,n,a)}return a}function Em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=zl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Tm(e,n,a,o){n.value=a,n.getSnapshot=o,Rm(n)&&Cm(e)}function Am(e,n,a){return a(function(){Rm(n)&&Cm(e)})}function Rm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ai(e,a)}catch{return!0}}function Cm(e){var n=Ts(e,2);n!==null&&jn(n,e,2)}function df(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Os){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},n}function wm(e,n,a,o){return e.baseState=a,ff(e,Ge,typeof o=="function"?o:ha)}function tS(e,n,a,o,u){if(Gl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Dm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Dm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=I.T,v={};I.T=v;try{var w=a(u,o),B=I.S;B!==null&&B(v,w),Um(e,n,w)}catch(tt){pf(e,n,tt)}finally{h!==null&&v.types!==null&&(h.types=v.types),I.T=h}}else try{h=a(u,o),Um(e,n,h)}catch(tt){pf(e,n,tt)}}function Um(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(e,n,o)},function(o){return pf(e,n,o)}):Lm(e,n,a)}function Lm(e,n,a){n.status="fulfilled",n.value=a,Nm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dm(e,a)))}function pf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}e.action=null}function Nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Om(e,n){return n}function Pm(e,n){if(ye){var a=Ye.formState;if(a!==null){t:{var o=le;if(ye){if(Ke){e:{for(var u=Ke,h=Si;u.nodeType!==8;){if(!h){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ke=yi(u.nextSibling),o=u.data==="F!";break t}}Ba(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},a.queue=o,a=t0.bind(null,le,o),o.dispatch=a,o=df(!1),h=Sf.bind(null,le,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=tS.bind(null,le,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function zm(e){var n=pn();return Fm(n,Ge,e)}function Fm(e,n,a){if(n=ff(e,n,Om)[0],e=Il(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(v){throw v===lr?Cl:v}else o=n;n=pn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,dr(9,{destroy:void 0},eS.bind(null,u,a),null)),[o,h,e]}function eS(e,n){e.action=n}function Im(e){var n=pn(),a=Ge;if(a!==null)return Fm(n,a,e);pn(),n=n.memoizedState,a=pn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function dr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=zl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bm(){return pn().memoizedState}function Bl(e,n,a,o){var u=Gn();le.flags|=e,u.memoizedState=dr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var u=pn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ge!==null&&o!==null&&sf(o,Ge.memoizedState.deps)?u.memoizedState=dr(n,h,a,o):(le.flags|=e,u.memoizedState=dr(1|n,h,a,o))}function Hm(e,n){Bl(8390656,8,e,n)}function mf(e,n){Hl(2048,8,e,n)}function nS(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=zl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Gm(e){var n=pn().memoizedState;return nS({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Vm(e,n){return Hl(4,2,e,n)}function km(e,n){return Hl(4,4,e,n)}function Xm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,Xm.bind(null,n,e),a)}function gf(){}function Ym(e,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function qm(e,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=e(),Os){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o}function _f(e,n,a){return a===void 0||(fa&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Z0(),le.lanes|=e,Za|=e,a)}function Zm(e,n,a,o){return ai(a,n)?a:ur.current!==null?(e=_f(e,a,o),ai(e,n)||(xn=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(ve&261930)===0?(xn=!0,e.memoizedState=a):(e=Z0(),le.lanes|=e,Za|=e,n)}function Km(e,n,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var v=I.T,w={};I.T=w,Sf(e,!1,n,a);try{var B=u(),tt=I.S;if(tt!==null&&tt(w,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=Qx(B,o);bo(e,n,pt,ui(e))}else bo(e,n,o,ui(e))}catch(xt){bo(e,n,{then:function(){},status:"rejected",reason:xt},ui())}finally{H.p=h,v!==null&&w.types!==null&&(v.types=w.types),I.T=v}}function iS(){}function vf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=jm(e).queue;Km(e,u,n,et,a===null?iS:function(){return Qm(e),a(o)})}function jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qm(e){var n=jm(e);n.next===null&&(n=e.alternate.memoizedState),bo(e,n.next.queue,{},ui())}function xf(){return Ln(Ho)}function Jm(){return pn().memoizedState}function $m(){return pn().memoizedState}function aS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();e=Va(a);var o=ka(n,e,a);o!==null&&(jn(o,n,a),vo(o,n,a)),n={cache:qu()},e.payload=n;return}n=n.return}}function sS(e,n,a){var o=ui();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?e0(n,a):(a=zu(e,n,a,o),a!==null&&(jn(a,e,o),n0(a,n,o)))}function t0(e,n,a){var o=ui();bo(e,n,a,o)}function bo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))e0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,w=h(v,a);if(u.hasEagerState=!0,u.eagerState=w,ai(w,v))return Ml(e,n,u,0),Ye===null&&Sl(),!1}catch{}if(a=zu(e,n,u,o),a!==null)return jn(a,e,o),n0(a,n,o),!0}return!1}function Sf(e,n,a,o){if(o={lane:2,revertLane:Jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(s(479))}else n=zu(e,a,o,2),n!==null&&jn(n,e,2)}function Gl(e){var n=e.alternate;return e===le||n!==null&&n===le}function e0(e,n){fr=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function n0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ti(e,a)}}var Eo={readContext:Ln,use:Fl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Eo.useEffectEvent=cn;var i0={readContext:Ln,use:Fl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Hm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,Xm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Os){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Os){Rt(!0);try{a(n)}finally{Rt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=sS.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=df(e);var n=e.queue,a=t0.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,n){var a=Gn();return _f(a,e,n)},useTransition:function(){var e=df(!1);return e=Km.bind(null,le,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=Gn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(ve&127)!==0||Em(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Hm(Am.bind(null,o,h,e),[e]),o.flags|=2048,dr(9,{destroy:void 0},Tm.bind(null,o,h,a,n),null),a},useId:function(){var e=Gn(),n=Ye.identifierPrefix;if(ye){var a=Gi,o=Hi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Jx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:xf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:uf,useCacheRefresh:function(){return Gn().memoizedState=aS.bind(null,le)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:Ln,use:Fl,useCallback:Ym,useContext:Ln,useEffect:mf,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:Il,useRef:Bm,useState:function(){return Il(ha)},useDebugValue:gf,useDeferredValue:function(e,n){var a=pn();return Zm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Il(ha)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:bm,useId:Jm,useHostTransitionStatus:xf,useFormState:zm,useActionState:zm,useOptimistic:function(e,n){var a=pn();return wm(a,Ge,e,n)},useMemoCache:uf,useCacheRefresh:$m};Mf.useEffectEvent=Gm;var a0={readContext:Ln,use:Fl,useCallback:Ym,useContext:Ln,useEffect:mf,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:hf,useRef:Bm,useState:function(){return hf(ha)},useDebugValue:gf,useDeferredValue:function(e,n){var a=pn();return Ge===null?_f(a,e,n):Zm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=hf(ha)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:bm,useId:Jm,useHostTransitionStatus:xf,useFormState:Im,useActionState:Im,useOptimistic:function(e,n){var a=pn();return Ge!==null?wm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uf,useCacheRefresh:$m};a0.useEffectEvent=Gm;function yf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ui(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(e,u,o),n!==null&&(jn(n,e,o),vo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ui(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(e,u,o),n!==null&&(jn(n,e,o),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ui(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(e,o,a),n!==null&&(jn(n,e,a),vo(n,e,a))}};function s0(e,n,a,o,u,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,v):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,h):!0}function r0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&bf.enqueueReplaceState(n,n.state,null)}function Ps(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function o0(e){xl(e)}function l0(e){console.error(e)}function c0(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function u0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(e,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function f0(e){return e=Va(e),e.tag=3,e}function h0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){u0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){u0(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function rS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 31:case 13:return Mi===null?tc():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(e,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(e,o,u)),!1}throw Error(s(435,a.tag))}return Kf(e,o,u),tc(),!1}if(ye)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Vu&&(e=Error(s(422),{cause:o}),ho(_i(e,a)))):(o!==Vu&&(n=Error(s(423),{cause:o}),ho(_i(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=_i(o,a),u=Ef(e.stateNode,o,u),$u(e,u),un!==4&&(un=2)),!1;var h=Error(s(520),{cause:o});if(h=_i(h,a),Lo===null?Lo=[h]:Lo.push(h),un!==4&&(un=2),n===null)return!0;o=_i(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ef(a.stateNode,o,e),$u(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ka===null||!Ka.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=f0(u),h0(u,e,a,o),$u(a,u),!1}a=a.return}while(a!==null);return!1}var Tf=Error(s(461)),xn=!1;function Nn(e,n,a,o){n.child=e===null?gm(n,null,a,o):Ns(n,e.child,a,o)}function d0(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var v={};for(var w in o)w!=="ref"&&(v[w]=o[w])}else v=o;return ws(n),o=rf(e,n,a,v,h,u),w=of(),e!==null&&!xn?(lf(e,n,u),da(e,n,u)):(ye&&w&&Hu(n),n.flags|=1,Nn(e,n,o,u),n.child)}function p0(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Fu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,m0(e,n,h,o,u)):(e=bl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Nf(e,u)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(v,o)&&e.ref===n.ref)return da(e,n,u)}return n.flags|=1,e=oa(h,o),e.ref=n.ref,e.return=n,n.child=e}function m0(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(co(h,o)&&e.ref===n.ref)if(xn=!1,n.pendingProps=o=h,Nf(e,u))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,da(e,n,u)}return Af(e,n,a,o,u)}function g0(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return _0(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,h!==null?h.cachePool:null),h!==null?xm(n,h):ef(),Sm(n);else return o=n.lanes=536870912,_0(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Rl(n,h.cachePool),xm(n,h),Wa(),n.memoizedState=null):(e!==null&&Rl(n,null),ef(),Wa());return Nn(e,n,u,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _0(e,n,a,o,u){var h=Ku();return h=h===null?null:{parent:_n._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Rl(n,null),ef(),Sm(n),e!==null&&sr(e,n,o,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function v0(e,n,a){return Ns(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,oi(n),n.memoizedState=null,e}function oS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,To(null,e);if(af(n),(e=Ke)?(e=Dg(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=em(e),a.return=n,n.child=a,Un=n,Ke=null)):e=null,e===null)throw Ba(n);return n.lanes=536870912,null}return kl(n,o)}var h=e.memoizedState;if(h!==null){var v=h.dehydrated;if(af(n),u)if(n.flags&256)n.flags&=-257,n=v0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||sr(e,n,a,!1),u=(a&e.childLanes)!==0,xn||u){if(o=Ye,o!==null&&(v=ei(o,a),v!==0&&v!==h.retryLane))throw h.retryLane=v,Ts(e,v),jn(o,e,v),Tf;tc(),n=v0(e,n,a)}else e=h.treeContext,Ke=yi(v.nextSibling),Un=n,ye=!0,Ia=null,Si=!1,e!==null&&am(n,e),n=kl(n,o),n.flags|=4096;return n}return e=oa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Af(e,n,a,o,u){return ws(n),a=rf(e,n,a,o,void 0,u),o=of(),e!==null&&!xn?(lf(e,n,u),da(e,n,u)):(ye&&o&&Hu(n),n.flags|=1,Nn(e,n,a,u),n.child)}function x0(e,n,a,o,u,h){return ws(n),n.updateQueue=null,a=ym(n,o,a,u),Mm(e),o=of(),e!==null&&!xn?(lf(e,n,h),da(e,n,h)):(ye&&o&&Hu(n),n.flags|=1,Nn(e,n,a,h),n.child)}function S0(e,n,a,o,u){if(ws(n),n.stateNode===null){var h=er,v=a.contextType;typeof v=="object"&&v!==null&&(h=Ln(v)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=bf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Qu(n),v=a.contextType,h.context=typeof v=="object"&&v!==null?Ln(v):er,h.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(yf(n,a,v,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&bf.enqueueReplaceState(h,h.state,null),So(n,o,h,u),xo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var w=n.memoizedProps,B=Ps(a,w);h.props=B;var tt=h.context,pt=a.contextType;v=er,typeof pt=="object"&&pt!==null&&(v=Ln(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||tt!==v)&&r0(n,h,o,v),Ga=!1;var ot=n.memoizedState;h.state=ot,So(n,o,h,u),xo(),tt=n.memoizedState,w||ot!==tt||Ga?(typeof xt=="function"&&(yf(n,a,xt,o),tt=n.memoizedState),(B=Ga||s0(n,a,B,o,ot,tt,v))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=v,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Ju(e,n),v=n.memoizedProps,pt=Ps(a,v),h.props=pt,xt=n.pendingProps,ot=h.context,tt=a.contextType,B=er,typeof tt=="object"&&tt!==null&&(B=Ln(tt)),w=a.getDerivedStateFromProps,(tt=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==xt||ot!==B)&&r0(n,h,o,B),Ga=!1,ot=n.memoizedState,h.state=ot,So(n,o,h,u),xo();var lt=n.memoizedState;v!==xt||ot!==lt||Ga||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof w=="function"&&(yf(n,a,w,o),lt=n.memoizedState),(pt=Ga||s0(n,a,pt,o,ot,lt,B)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=B,o=pt):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Xl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,a,u)):Nn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=da(e,n,u),e}function M0(e,n,a,o){return Rs(),n.flags|=256,Nn(e,n,a,o),n.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:um()}}function wf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ci),e}function y0(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(u?Xa(n):Wa(),(e=Ke)?(e=Dg(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=em(e),a.return=n,n.child=a,Un=n,Ke=null)):e=null,e===null)throw Ba(n);return fh(e)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Wa(),u=n.mode,w=Wl({mode:"hidden",children:w},u),o=As(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Cf(a),o.childLanes=wf(e,v,a),n.memoizedState=Rf,To(null,o)):(Xa(n),Df(n,w))}var B=e.memoizedState;if(B!==null&&(w=B.dehydrated,w!==null)){if(h)n.flags&256?(Xa(n),n.flags&=-257,n=Uf(e,n,a)):n.memoizedState!==null?(Wa(),n.child=e.child,n.flags|=128,n=null):(Wa(),w=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),w=As(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Ns(n,e.child,null,a),o=n.child,o.memoizedState=Cf(a),o.childLanes=wf(e,v,a),n.memoizedState=Rf,n=To(null,o));else if(Xa(n),fh(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var tt=v.dgst;v=tt,o=Error(s(419)),o.stack="",o.digest=v,ho({value:o,source:null,stack:null}),n=Uf(e,n,a)}else if(xn||sr(e,n,a,!1),v=(a&e.childLanes)!==0,xn||v){if(v=Ye,v!==null&&(o=ei(v,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,Ts(e,o),jn(v,e,o),Tf;uh(w)||tc(),n=Uf(e,n,a)}else uh(w)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ke=yi(w.nextSibling),Un=n,ye=!0,Ia=null,Si=!1,e!==null&&am(n,e),n=Df(n,o.children),n.flags|=4096);return n}return u?(Wa(),w=o.fallback,u=n.mode,B=e.child,tt=B.sibling,o=oa(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,tt!==null?w=oa(tt,w):(w=As(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,To(null,o),o=n.child,w=e.child.memoizedState,w===null?w=Cf(a):(u=w.cachePool,u!==null?(B=_n._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=um(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=wf(e,v,a),n.memoizedState=Rf,To(e.child,o)):(Xa(n),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Df(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=si(22,e,null,n),e.lanes=0,e}function Uf(e,n,a){return Ns(n,e.child,null,a),e=Df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function b0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Wu(e.return,n,a)}function Lf(e,n,a,o,u,h){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=h)}function E0(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var v=dn.current,w=(v&2)!==0;if(w?(v=v&1|2,n.flags|=128):v&=1,bt(dn,v),Nn(e,n,o,a),o=ye?fo:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&b0(e,a,n);else if(e.tag===19)b0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Lf(n,!0,a,null,h,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(sr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=oa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Nf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function lS(e,n,a){switch(n.tag){case 3:yt(n,n.stateNode.containerInfo),Ha(n,_n,e.memoizedState.cache),Rs();break;case 27:case 5:ne(n);break;case 4:yt(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,af(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?y0(e,n,a):(Xa(n),e=da(e,n,a),e!==null?e.sibling:null);Xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return E0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(dn,dn.current),o)break;return null;case 22:return n.lanes=0,g0(e,n,a,n.pendingProps);case 24:Ha(n,_n,e.memoizedState.cache)}return da(e,n,a)}function T0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!Nf(e,a)&&(n.flags&128)===0)return xn=!1,lS(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,ye&&(n.flags&1048576)!==0&&im(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Us(n.elementType),n.type=e,typeof e=="function")Fu(e)?(o=Ps(e,o),n.tag=1,n=S0(null,n,e,o,a)):(n.tag=0,n=Af(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===R){n.tag=11,n=d0(null,n,e,o,a);break t}else if(u===N){n.tag=14,n=p0(null,n,e,o,a);break t}}throw n=vt(e)||e,Error(s(306,n,""))}}return n;case 0:return Af(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ps(o,n.pendingProps),S0(e,n,o,u,a);case 3:t:{if(yt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Ju(e,n),So(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ha(n,_n,o),o!==h.cache&&Yu(n,[_n],a,!0),xo(),o=v.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=M0(e,n,o,a);break t}else if(o!==u){u=_i(Error(s(424)),n),ho(u),n=M0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=yi(e.firstChild),Un=n,ye=!0,Ia=null,Si=!0,a=gm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),o===u){n=da(e,n,a);break t}Nn(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,o=oc(at.current).createElement(a),o[mn]=n,o[Dn]=e,On(o,a,e),gn(o),n.stateNode=o):n.memoizedState=zg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ne(n),e===null&&ye&&(o=n.stateNode=Ng(n.type,n.pendingProps,at.current),Un=n,Si=!0,u=Ke,$a(n.type)?(hh=u,Ke=yi(o.firstChild)):Ke=u),Nn(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((u=o=Ke)&&(o=IS(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Un=n,Ke=yi(o.firstChild),Si=!1,u=!0):u=!1),u||Ba(n)),ne(n),u=n.type,h=n.pendingProps,v=e!==null?e.memoizedProps:null,o=h.children,oh(u,h)?o=null:v!==null&&oh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=rf(e,n,$x,null,null,a),Ho._currentValue=u),Xl(e,n),Nn(e,n,o,a),n.child;case 6:return e===null&&ye&&((e=a=Ke)&&(a=BS(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Un=n,Ke=null,e=!0):e=!1),e||Ba(n)),null;case 13:return y0(e,n,a);case 4:return yt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ns(n,null,o,a):Nn(e,n,o,a),n.child;case 11:return d0(e,n,n.type,n.pendingProps,a);case 7:return Nn(e,n,n.pendingProps,a),n.child;case 8:return Nn(e,n,n.pendingProps.children,a),n.child;case 12:return Nn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),Nn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ws(n),u=Ln(u),o=o(u),n.flags|=1,Nn(e,n,o,a),n.child;case 14:return p0(e,n,n.type,n.pendingProps,a);case 15:return m0(e,n,n.type,n.pendingProps,a);case 19:return E0(e,n,a);case 31:return oS(e,n,a);case 22:return g0(e,n,a,n.pendingProps);case 24:return ws(n),o=Ln(_n),e===null?(u=Ku(),u===null&&(u=Ye,h=qu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Qu(n),Ha(n,_n,u)):((e.lanes&a)!==0&&(Ju(e,n),So(n,null,null,a),xo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,_n,o)):(o=h.cache,Ha(n,_n,o),o!==u.cache&&Yu(n,[_n],a,!0))),Nn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(e){e.flags|=4}function Of(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(J0())e.flags|=8192;else throw Ls=wl,ju}else e.flags&=-16777217}function A0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gg(n))if(J0())e.flags|=8192;else throw Ls=wl,ju}function Yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Mt():536870912,e.lanes|=n,_r|=n)}function Ao(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function cS(e,n,a){var o=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ua(_n),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ar(n)?pa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),je(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(pa(n),h!==null?(je(n),A0(n,h)):(je(n),Of(n,u,null,o,a))):h?h!==e.memoizedState?(pa(n),je(n),A0(n,h)):(je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&pa(n),je(n),Of(n,u,e,o,a)),null;case 27:if(jt(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}e=Ct.current,ar(n)?sm(n):(e=Ng(u,o,a),n.stateNode=e,pa(n))}return je(n),null;case 5:if(jt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(h=Ct.current,ar(n))sm(n);else{var v=oc(at.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}h[mn]=n,h[Dn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=h;t:switch(On(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&pa(n)}}return je(n),Of(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&pa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,ar(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[mn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||yg(e.nodeValue,a)),e||Ba(n,!0)}else e=oc(e).createTextNode(o),e[mn]=n,n.stateNode=e}return je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ar(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[mn]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),e=!1}else a=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[mn]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),je(n),null);case 4:return Ht(),e===null&&nh(n.stateNode.containerInfo),je(n),null;case 10:return ua(n.type),je(n),null;case 19:if(Z(dn),o=n.memoizedState,o===null)return je(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Ao(o,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Nl(e),h!==null){for(n.flags|=128,Ao(o,!1),e=h.updateQueue,n.updateQueue=e,Yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)tm(a,e),a=a.sibling;return bt(dn,dn.current&1|2),ye&&la(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&He()>Ql&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(e=Nl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yl(n,e),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!ye)return je(n),null}else 2*He()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=He(),e.sibling=null,a=dn.current,bt(dn,u?a&1|2:a&1),ye&&la(n,o.treeForkCount),e):(je(n),null);case 22:case 23:return oi(n),nf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(Ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(_n),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function uS(e,n){switch(Gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ua(_n),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return jt(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(oi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(dn),null;case 4:return Ht(),null;case 10:return ua(n.type),null;case 22:case 23:return oi(n),nf(),e!==null&&Z(Ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ua(_n),null;case 25:return null;default:return null}}function R0(e,n){switch(Gu(n),n.tag){case 3:ua(_n),Ht();break;case 26:case 27:case 5:jt(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:Z(dn);break;case 10:ua(n.type);break;case 22:case 23:oi(n),nf(),e!==null&&Z(Ds);break;case 24:ua(_n)}}function Ro(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,v=a.inst;o=h(),v.destroy=o}a=a.next}while(a!==u)}}catch(w){Fe(n,n.return,w)}}function Ya(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var v=o.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,u=n;var B=a,tt=w;try{tt()}catch(pt){Fe(u,B,pt)}}}o=o.next}while(o!==h)}}catch(pt){Fe(n,n.return,pt)}}function C0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{vm(n,a)}catch(o){Fe(e,e.return,o)}}}function w0(e,n,a){a.props=Ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Vi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function D0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function Pf(e,n,a){try{var o=e.stateNode;LS(o,e.type,a,n),o[Dn]=n}catch(u){Fe(e,e.return,u)}}function U0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$a(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||U0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sa));else if(o!==4&&(o===27&&$a(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ff(e,n,a),e=e.sibling;e!==null;)Ff(e,n,a),e=e.sibling}function ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&$a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ql(e,n,a),e=e.sibling;e!==null;)ql(e,n,a),e=e.sibling}function L0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,o,a),n[mn]=e,n[Dn]=a}catch(h){Fe(e,e.return,h)}}var ma=!1,Sn=!1,If=!1,N0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function fS(e,n){if(e=e.containerInfo,sh=pc,e=Wp(e),Du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var v=0,w=-1,B=-1,tt=0,pt=0,xt=e,ot=null;e:for(;;){for(var lt;xt!==a||u!==0&&xt.nodeType!==3||(w=v+u),xt!==h||o!==0&&xt.nodeType!==3||(B=v+o),xt.nodeType===3&&(v+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)ot=xt,xt=lt;for(;;){if(xt===e)break e;if(ot===a&&++tt===u&&(w=v),ot===h&&++pt===o&&(B=v),(lt=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=lt}a=w===-1||B===-1?null:{start:w,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(rh={focusedElem:e,selectionRange:a},pc=!1,Rn=n;Rn!==null;)if(n=Rn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Rn=e;else for(;Rn!==null;){switch(n=Rn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Wt=Ps(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ch(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Rn=e;break}Rn=n.return}}function O0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),o&4&&Ro(5,a);break;case 1:if(_a(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var u=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}o&64&&C0(a),o&512&&Co(a,a.return);break;case 3:if(_a(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vm(e,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&o&4&&L0(a);case 26:case 5:_a(e,a),n===null&&o&4&&D0(a),o&512&&Co(a,a.return);break;case 12:_a(e,a);break;case 31:_a(e,a),o&4&&F0(e,a);break;case 13:_a(e,a),o&4&&I0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=SS.bind(null,a),HS(e,a))));break;case 22:if(o=a.memoizedState!==null||ma,!o){n=n!==null&&n.memoizedState!==null||Sn,u=ma;var h=Sn;ma=o,(Sn=n)&&!h?va(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),ma=u,Sn=h}break;case 30:break;default:_a(e,a)}}function P0(e){var n=e.alternate;n!==null&&(e.alternate=null,P0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Na(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Yn=!1;function ga(e,n,a){for(a=a.child;a!==null;)z0(e,n,a),a=a.sibling}function z0(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Sn||Vi(a,n),ga(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||Vi(a,n);var o=en,u=Yn;$a(a.type)&&(en=a.stateNode,Yn=!1),ga(e,n,a),Fo(a.stateNode),en=o,Yn=u;break;case 5:Sn||Vi(a,n);case 6:if(o=en,u=Yn,en=null,ga(e,n,a),en=o,Yn=u,en!==null)if(Yn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(h){Fe(a,n,h)}else try{en.removeChild(a.stateNode)}catch(h){Fe(a,n,h)}break;case 18:en!==null&&(Yn?(e=en,Cg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tr(e)):Cg(en,a.stateNode));break;case 4:o=en,u=Yn,en=a.stateNode.containerInfo,Yn=!0,ga(e,n,a),en=o,Yn=u;break;case 0:case 11:case 14:case 15:Ya(2,a,n),Sn||Ya(4,a,n),ga(e,n,a);break;case 1:Sn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&w0(a,n,o)),ga(e,n,a);break;case 21:ga(e,n,a);break;case 22:Sn=(o=Sn)||a.memoizedState!==null,ga(e,n,a),Sn=o;break;default:ga(e,n,a)}}function F0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(a){Fe(n,n.return,a)}}}function I0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(a){Fe(n,n.return,a)}}function hS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new N0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new N0),n;default:throw Error(s(435,e.tag))}}function Zl(e,n){var a=hS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=MS.bind(null,e,o);o.then(u,u)}})}function qn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,v=n,w=v;t:for(;w!==null;){switch(w.tag){case 27:if($a(w.type)){en=w.stateNode,Yn=!1;break t}break;case 5:en=w.stateNode,Yn=!1;break t;case 3:case 4:en=w.stateNode.containerInfo,Yn=!0;break t}w=w.return}if(en===null)throw Error(s(160));z0(h,v,u),en=null,Yn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)B0(n,e),n=n.sibling}var Ui=null;function B0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(n,e),Zn(e),o&4&&(Ya(3,e,e.return),Ro(3,e),Ya(5,e,e.return));break;case 1:qn(n,e),Zn(e),o&512&&(Sn||a===null||Vi(a,a.return)),o&64&&ma&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ui;if(qn(n,e),Zn(e),o&512&&(Sn||a===null||Vi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[La]||h[mn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),On(h,o,a),h[mn]=e,gn(h),o=h;break t;case"link":var v=Bg("link","href",u).get(o+(a.href||""));if(v){for(var w=0;w<v.length;w++)if(h=v[w],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(w,1);break e}}h=u.createElement(o),On(h,o,a),u.head.appendChild(h);break;case"meta":if(v=Bg("meta","content",u).get(o+(a.content||""))){for(w=0;w<v.length;w++)if(h=v[w],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(w,1);break e}}h=u.createElement(o),On(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[mn]=e,gn(h),o=h}e.stateNode=o}else Hg(u,e.type,e.stateNode);else e.stateNode=Ig(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Hg(u,e.type,e.stateNode):Ig(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:qn(n,e),Zn(e),o&512&&(Sn||a===null||Vi(a,a.return)),a!==null&&o&4&&Pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,e),Zn(e),o&512&&(Sn||a===null||Vi(a,a.return)),e.flags&32){u=e.stateNode;try{ii(u,"")}catch(Wt){Fe(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(qn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Fe(e,e.return,Wt)}}break;case 3:if(uc=null,u=Ui,Ui=lc(n.containerInfo),qn(n,e),Ui=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Wt){Fe(e,e.return,Wt)}If&&(If=!1,H0(e));break;case 4:o=Ui,Ui=lc(e.stateNode.containerInfo),qn(n,e),Zn(e),Ui=o;break;case 12:qn(n,e),Zn(e);break;case 31:qn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:qn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=He()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=ma,pt=Sn;if(ma=tt||u,Sn=pt||B,qn(n,e),Sn=pt,ma=tt,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ma||Sn||zs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(h=B.stateNode,u)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=B.stateNode;var xt=B.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;w.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){Fe(B,B.return,Wt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Wt){Fe(B,B.return,Wt)}}}else if(n.tag===18){if(a===null){B=n;try{var lt=B.stateNode;u?wg(lt,!0):wg(B.stateNode,!1)}catch(Wt){Fe(B,B.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(e,a))));break;case 19:qn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:qn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(U0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=zf(e);ql(e,h,u);break;case 5:var v=a.stateNode;a.flags&32&&(ii(v,""),a.flags&=-33);var w=zf(e);ql(e,w,v);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=zf(e);Ff(e,tt,B);break;default:throw Error(s(161))}}catch(pt){Fe(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function H0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;H0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)O0(e,n.alternate,n),n=n.sibling}function zs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),zs(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&w0(n,n.return,a),zs(n);break;case 27:Fo(n.stateNode);case 26:case 5:Vi(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,v=h.flags;switch(h.tag){case 0:case 11:case 15:va(u,h,a),Ro(4,h);break;case 1:if(va(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Fe(o,o.return,tt)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)_m(B[u],w)}catch(tt){Fe(o,o.return,tt)}}a&&v&64&&C0(h),Co(h,h.return);break;case 27:L0(h);case 26:case 5:va(u,h,a),a&&o===null&&v&4&&D0(h),Co(h,h.return);break;case 12:va(u,h,a);break;case 31:va(u,h,a),a&&v&4&&F0(u,h);break;case 13:va(u,h,a),a&&v&4&&I0(u,h);break;case 22:h.memoizedState===null&&va(u,h,a),Co(h,h.return);break;case 30:break;default:va(u,h,a)}n=n.sibling}}function Bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function Hf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)G0(e,n,a,o),n=n.sibling}function G0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&Ro(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,v=h.id,w=h.onPostCommit;typeof w=="function"&&w(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Fe(n,n.return,B)}}else Li(e,n,a,o);break;case 31:Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,v=n.alternate,n.memoizedState!==null?h._visibility&2?Li(e,n,a,o):wo(e,n):h._visibility&2?Li(e,n,a,o):(h._visibility|=2,pr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Bf(v,n);break;case 24:Li(e,n,a,o),u&2048&&Hf(n.alternate,n);break;default:Li(e,n,a,o)}}function pr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,v=n,w=a,B=o,tt=v.flags;switch(v.tag){case 0:case 11:case 15:pr(h,v,w,B,u),Ro(8,v);break;case 23:break;case 22:var pt=v.stateNode;v.memoizedState!==null?pt._visibility&2?pr(h,v,w,B,u):wo(h,v):(pt._visibility|=2,pr(h,v,w,B,u)),u&&tt&2048&&Bf(v.alternate,v);break;case 24:pr(h,v,w,B,u),u&&tt&2048&&Hf(v.alternate,v);break;default:pr(h,v,w,B,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Bf(o.alternate,o);break;case 24:wo(a,o),u&2048&&Hf(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function mr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)V0(e,n,a),e=e.sibling}function V0(e,n,a){switch(e.tag){case 26:mr(e,n,a),e.flags&Do&&e.memoizedState!==null&&JS(a,Ui,e.memoizedState,e.memoizedProps);break;case 5:mr(e,n,a);break;case 3:case 4:var o=Ui;Ui=lc(e.stateNode.containerInfo),mr(e,n,a),Ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,mr(e,n,a),Do=o):mr(e,n,a));break;default:mr(e,n,a)}}function k0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Uo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,W0(o,e)}k0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)X0(e),e=e.sibling}function X0(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):Uo(e);break;default:Uo(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,W0(o,e)}k0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function W0(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rn=o;else t:for(a=e;Rn!==null;){o=Rn;var u=o.sibling,h=o.return;if(P0(o),o===a){Rn=null;break t}if(u!==null){u.return=h,Rn=u;break t}Rn=h}}}var dS={getCacheForType:function(e){var n=Ln(_n),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(_n).controller.signal}},pS=typeof WeakMap=="function"?WeakMap:Map,De=0,Ye=null,me=null,ve=0,ze=0,li=null,qa=!1,gr=!1,Gf=!1,xa=0,un=0,Za=0,Fs=0,Vf=0,ci=0,_r=0,Lo=null,Kn=null,kf=!1,jl=0,Y0=0,Ql=1/0,Jl=null,Ka=null,bn=0,ja=null,vr=null,Sa=0,Xf=0,Wf=null,q0=null,No=0,Yf=null;function ui(){return(De&2)!==0&&ve!==0?ve&-ve:I.T!==null?Jf():eo()}function Z0(){if(ci===0)if((ve&536870912)===0||ye){var e=ie;ie<<=1,(ie&3932160)===0&&(ie=262144),ci=e}else ci=536870912;return e=ri.current,e!==null&&(e.flags|=32),ci}function jn(e,n,a){(e===Ye&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Qa(e,ve,ci,!1)),Vt(e,a),((De&2)===0||e!==Ye)&&(e===Ye&&((De&2)===0&&(Fs|=a),un===4&&Qa(e,ve,ci,!1)),ki(e))}function K0(e,n,a){if((De&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||wt(e,n),u=o?_S(e,n):Zf(e,n,!0),h=o;do{if(u===0){gr&&!o&&Qa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!mS(a)){u=Zf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var w=e;u=Lo;var B=w.current.memoizedState.isDehydrated;if(B&&(xr(w,v).flags|=256),v=Zf(w,v,!1),v!==2){if(Gf&&!B){w.errorRecoveryDisabledLanes|=h,Fs|=h,u=4;break t}h=Kn,Kn=u,h!==null&&(Kn===null?Kn=h:Kn.push.apply(Kn,h))}u=v}if(h=!1,u!==2)continue}}if(u===1){xr(e,0),Qa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ci,!qa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-He(),10<u)){if(Qa(o,n,ci,!qa),mt(o,0,!0)!==0)break t;Sa=n,o.timeoutHandle=Ag(j0.bind(null,o,a,Kn,Jl,kf,n,ci,Fs,_r,qa,h,"Throttled",-0,0),u);break t}j0(o,a,Kn,Jl,kf,n,ci,Fs,_r,qa,h,null,-0,0)}}break}while(!0);ki(e)}function j0(e,n,a,o,u,h,v,w,B,tt,pt,xt,ot,lt){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},V0(n,h,xt);var Wt=(h&62914560)===h?jl-He():(h&4194048)===h?Y0-He():0;if(Wt=$S(xt,Wt),Wt!==null){Sa=h,e.cancelPendingCommit=Wt(ag.bind(null,e,n,h,a,o,u,v,w,B,pt,xt,null,ot,lt)),Qa(e,h,v,!tt);return}}ag(e,n,h,a,o,u,v,w,B)}function mS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ai(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(e,n,a,o){n&=~Vf,n&=~Fs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-It(u),v=1<<h;o[h]=-1,u&=~v}a!==0&&Le(e,a,n)}function $l(){return(De&6)===0?(Oo(0),!1):!0}function qf(){if(me!==null){if(ze===0)var e=me.return;else e=me,ca=Cs=null,cf(e),cr=null,go=0,e=me;for(;e!==null;)R0(e.alternate,e),e=e.return;me=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,PS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,qf(),Ye=e,me=a=oa(e.current,null),ve=n,ze=0,li=null,qa=!1,gr=wt(e,n),Gf=!1,_r=ci=Vf=Fs=Za=un=0,Kn=Lo=null,kf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),h=1<<u;n|=e[u],o&=~h}return xa=n,Sl(),a}function Q0(e,n){le=null,I.H=Eo,n===lr||n===Cl?(n=dm(),ze=3):n===ju?(n=dm(),ze=4):ze=n===Tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,li=n,me===null&&(un=1,Vl(e,_i(n,e.current)))}function J0(){var e=ri.current;return e===null?!0:(ve&4194048)===ve?Mi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Mi:!1}function $0(){var e=I.H;return I.H=Eo,e===null?Eo:e}function tg(){var e=I.A;return I.A=dS,e}function tc(){un=4,qa||(ve&4194048)!==ve&&ri.current!==null||(gr=!0),(Za&134217727)===0&&(Fs&134217727)===0||Ye===null||Qa(Ye,ve,ci,!1)}function Zf(e,n,a){var o=De;De|=2;var u=$0(),h=tg();(Ye!==e||ve!==n)&&(Jl=null,xr(e,n)),n=!1;var v=un;t:do try{if(ze!==0&&me!==null){var w=me,B=li;switch(ze){case 8:qf(),v=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var tt=ze;if(ze=0,li=null,Sr(e,w,B,tt),a&&gr){v=0;break t}break;default:tt=ze,ze=0,li=null,Sr(e,w,B,tt)}}gS(),v=un;break}catch(pt){Q0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ca=Cs=null,De=o,I.H=u,I.A=h,me===null&&(Ye=null,ve=0,Sl()),v}function gS(){for(;me!==null;)eg(me)}function _S(e,n){var a=De;De|=2;var o=$0(),u=tg();Ye!==e||ve!==n?(Jl=null,Ql=He()+500,xr(e,n)):gr=wt(e,n);t:do try{if(ze!==0&&me!==null){n=me;var h=li;e:switch(ze){case 1:ze=0,li=null,Sr(e,n,h,1);break;case 2:case 9:if(fm(h)){ze=0,li=null,ng(n);break}n=function(){ze!==2&&ze!==9||Ye!==e||(ze=7),ki(e)},h.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:fm(h)?(ze=0,li=null,ng(n)):(ze=0,li=null,Sr(e,n,h,7));break;case 5:var v=null;switch(me.tag){case 26:v=me.memoizedState;case 5:case 27:var w=me;if(v?Gg(v):w.stateNode.complete){ze=0,li=null;var B=w.sibling;if(B!==null)me=B;else{var tt=w.return;tt!==null?(me=tt,ec(tt)):me=null}break e}}ze=0,li=null,Sr(e,n,h,5);break;case 6:ze=0,li=null,Sr(e,n,h,6);break;case 8:qf(),un=6;break t;default:throw Error(s(462))}}vS();break}catch(pt){Q0(e,pt)}while(!0);return ca=Cs=null,I.H=o,I.A=u,De=a,me!==null?0:(Ye=null,ve=0,Sl(),un)}function vS(){for(;me!==null&&!ln();)eg(me)}function eg(e){var n=T0(e.alternate,e,xa);e.memoizedProps=e.pendingProps,n===null?ec(e):me=n}function ng(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=x0(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=x0(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:cf(n);default:R0(a,n),n=me=tm(n,xa),n=T0(a,n,xa)}e.memoizedProps=e.pendingProps,n===null?ec(e):me=n}function Sr(e,n,a,o){ca=Cs=null,cf(n),cr=null,go=0;var u=n.return;try{if(rS(e,u,n,a,ve)){un=1,Vl(e,_i(a,e.current)),me=null;return}}catch(h){if(u!==null)throw me=u,h;un=1,Vl(e,_i(a,e.current)),me=null;return}n.flags&32768?(ye||o===1?e=!0:gr||(ve&536870912)!==0?e=!1:(qa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),ig(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){ig(n,qa);return}e=n.return;var a=cS(n.alternate,n,xa);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);un===0&&(un=5)}function ig(e,n){do{var a=uS(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);un=6,me=null}function ag(e,n,a,o,u,h,v,w,B){e.cancelPendingCommit=null;do nc();while(bn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Pu,Je(e,a,h,v,w,B),e===Ye&&(me=Ye=null,ve=0),vr=n,ja=e,Sa=a,Xf=h,Wf=u,q0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yS(j,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=H.p,H.p=2,v=De,De|=4;try{fS(e,n,a)}finally{De=v,H.p=u,I.T=o}}bn=1,sg(),rg(),og()}}function sg(){if(bn===1){bn=0;var e=ja,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=De;De|=4;try{B0(n,e);var h=rh,v=Wp(e.containerInfo),w=h.focusedElem,B=h.selectionRange;if(v!==w&&w&&w.ownerDocument&&Xp(w.ownerDocument.documentElement,w)){if(B!==null&&Du(w)){var tt=B.start,pt=B.end;if(pt===void 0&&(pt=tt),"selectionStart"in w)w.selectionStart=tt,w.selectionEnd=Math.min(pt,w.value.length);else{var xt=w.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var lt=ot.getSelection(),Wt=w.textContent.length,te=Math.min(B.start,Wt),ke=B.end===void 0?te:Math.min(B.end,Wt);!lt.extend&&te>ke&&(v=ke,ke=te,te=v);var q=kp(w,te),k=kp(w,ke);if(q&&k&&(lt.rangeCount!==1||lt.anchorNode!==q.node||lt.anchorOffset!==q.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var $=xt.createRange();$.setStart(q.node,q.offset),lt.removeAllRanges(),te>ke?(lt.addRange($),lt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),lt.addRange($))}}}}for(xt=[],lt=w;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<xt.length;w++){var _t=xt[w];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}pc=!!sh,rh=sh=null}finally{De=u,H.p=o,I.T=a}}e.current=n,bn=2}}function rg(){if(bn===2){bn=0;var e=ja,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=H.p;H.p=2;var u=De;De|=4;try{O0(e,n.alternate,n)}finally{De=u,H.p=o,I.T=a}}bn=3}}function og(){if(bn===4||bn===3){bn=0,Y();var e=ja,n=vr,a=Sa,o=q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,vr=ja=null,lg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ka=null),to(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var h=e.onRecoverableError,v=0;v<o.length;v++){var w=o[v];h(w.value,{componentStack:w.stack})}}finally{I.T=n,H.p=u}}(Sa&3)!==0&&nc(),ki(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Yf?No++:(No=0,Yf=e):No=0,Oo(0)}}function lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function nc(){return sg(),rg(),og(),cg()}function cg(){if(bn!==5)return!1;var e=ja,n=Xf;Xf=0;var a=to(Sa),o=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Wf,Wf=null;var h=ja,v=Sa;if(bn=0,vr=ja=null,Sa=0,(De&6)!==0)throw Error(s(331));var w=De;if(De|=4,X0(h.current),G0(h,h.current,v,a),De=w,Oo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ut,h)}catch{}return!0}finally{H.p=u,I.T=o,lg(e,n)}}function ug(e,n,a){n=_i(a,n),n=Ef(e.stateNode,n,2),e=ka(e,n,2),e!==null&&(Vt(e,2),ki(e))}function Fe(e,n,a){if(e.tag===3)ug(e,e,a);else for(;n!==null;){if(n.tag===3){ug(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){e=_i(a,e),a=f0(2),o=ka(n,a,2),o!==null&&(h0(a,o,n,e),Vt(o,2),ki(o));break}}n=n.return}}function Kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new pS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Gf=!0,u.add(a),e=xS.bind(null,e,n,a),n.then(e,e))}function xS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(ve&a)===a&&(un===4||un===3&&(ve&62914560)===ve&&300>He()-jl?(De&2)===0&&xr(e,0):Vf|=a,_r===ve&&(_r=0)),ki(e)}function fg(e,n){n===0&&(n=Mt()),e=Ts(e,n),e!==null&&(Vt(e,n),ki(e))}function SS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),fg(e,a)}function MS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),fg(e,a)}function yS(e,n){return hn(e,n)}var ic=null,Mr=null,jf=!1,ac=!1,Qf=!1,Ja=0;function ki(e){e!==Mr&&e.next===null&&(Mr===null?ic=Mr=e:Mr=Mr.next=e),ac=!0,jf||(jf=!0,ES())}function Oo(e,n){if(!Qf&&ac){Qf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var v=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-It(42|e)+1)-1,h&=u&~(v&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,mg(o,h))}else h=ve,h=mt(o,o===Ye?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||wt(o,h)||(a=!0,mg(o,h));o=o.next}while(a);Qf=!1}}function bS(){hg()}function hg(){ac=jf=!1;var e=0;Ja!==0&&OS()&&(e=Ja);for(var n=He(),a=null,o=ic;o!==null;){var u=o.next,h=dg(o,n);h===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(Mr=a)):(a=o,(e!==0||(h&3)!==0)&&(ac=!0)),o=u}bn!==0&&bn!==5||Oo(e),Ja!==0&&(Ja=0)}function dg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var v=31-It(h),w=1<<v,B=u[v];B===-1?((w&a)===0||(w&o)!==0)&&(u[v]=Ft(w,n)):B<=n&&(e.expiredLanes|=w),h&=~w}if(n=Ye,a=ve,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&qe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||wt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&qe(o),to(a)){case 2:case 8:a=E;break;case 32:a=j;break;case 268435456:a=ft;break;default:a=j}return o=pg.bind(null,e),a=hn(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&qe(o),e.callbackPriority=2,e.callbackNode=null,2}function pg(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=ve;return o=mt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(K0(e,o,n),dg(e,He()),e.callbackNode!=null&&e.callbackNode===a?pg.bind(null,e):null)}function mg(e,n){if(nc())return null;K0(e,n,!0)}function ES(){zS(function(){(De&6)!==0?hn(O,bS):hg()})}function Jf(){if(Ja===0){var e=rr;e===0&&(e=Qt,Qt<<=1,(Qt&261888)===0&&(Qt=256)),Ja=e}return Ja}function gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ms(""+e)}function _g(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function TS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=gg((u[Dn]||null).action),v=o.submitter;v&&(n=(n=v[Dn]||null)?gg(n.formAction):v.getAttribute("formAction"),n!==null&&(h=n,v=null));var w=new gl("action","action",null,o,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var B=v?_g(u,v):new FormData(u);vf(a,{pending:!0,data:B,method:u.method,action:h},null,B)}}else typeof h=="function"&&(w.preventDefault(),B=v?_g(u,v):new FormData(u),vf(a,{pending:!0,data:B,method:u.method,action:h},h,B))},currentTarget:u}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],AS=th.toLowerCase(),RS=th[0].toUpperCase()+th.slice(1);Di(AS,"on"+RS)}Di(Zp,"onAnimationEnd"),Di(Kp,"onAnimationIteration"),Di(jp,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(kx,"onTransitionRun"),Di(Xx,"onTransitionStart"),Di(Wx,"onTransitionCancel"),Di(Qp,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function vg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var v=o.length-1;0<=v;v--){var w=o[v],B=w.instance,tt=w.currentTarget;if(w=w.listener,B!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=tt;try{h(u)}catch(pt){xl(pt)}u.currentTarget=null,h=B}else for(v=0;v<o.length;v++){if(w=o[v],B=w.instance,tt=w.currentTarget,w=w.listener,B!==h&&u.isPropagationStopped())break t;h=w,u.currentTarget=tt;try{h(u)}catch(pt){xl(pt)}u.currentTarget=null,h=B}}}}function ge(e,n){var a=n[vs];a===void 0&&(a=n[vs]=new Set);var o=e+"__bubble";a.has(o)||(xg(n,e,2,!1),a.add(o))}function eh(e,n,a){var o=0;n&&(o|=4),xg(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[sc]){e[sc]=!0,hl.forEach(function(a){a!=="selectionchange"&&(CS.has(a)||eh(a,!1,e),eh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,eh("selectionchange",!1,n))}}function xg(e,n,a,o){switch(Zg(n)){case 2:var u=nM;break;case 8:u=iM;break;default:u=_h}a=u.bind(null,n,a,e),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ih(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var w=o.stateNode.containerInfo;if(w===u)break;if(v===4)for(v=o.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;w!==null;){if(v=ia(w),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){o=h=v;continue t}w=w.parentNode}}o=o.return}Ep(function(){var tt=h,pt=xu(a),xt=[];t:{var ot=Jp.get(e);if(ot!==void 0){var lt=gl,Wt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":lt=Mx;break;case"focusin":Wt="focus",lt=Tu;break;case"focusout":Wt="blur",lt=Tu;break;case"beforeblur":case"afterblur":lt=Tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Ex;break;case Zp:case Kp:case jp:lt=hx;break;case Qp:lt=Ax;break;case"scroll":case"scrollend":lt=ox;break;case"wheel":lt=Cx;break;case"copy":case"cut":case"paste":lt=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=wp;break;case"toggle":case"beforetoggle":lt=Dx}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),q=te?ot!==null?ot+"Capture":null:ot;te=[];for(var k=tt,$;k!==null;){var _t=k;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||q===null||(_t=no(k,q),_t!=null&&te.push(zo(k,_t,$))),ke)break;k=k.return}0<te.length&&(ot=new lt(ot,Wt,null,a,pt),xt.push({event:ot,listeners:te}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",ot&&a!==vu&&(Wt=a.relatedTarget||a.fromElement)&&(ia(Wt)||Wt[Xn]))break t;if((lt||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=tt,Wt=Wt?ia(Wt):null,Wt!==null&&(ke=c(Wt),te=Wt.tag,Wt!==ke||te!==5&&te!==27&&te!==6)&&(Wt=null)):(lt=null,Wt=tt),lt!==Wt)){if(te=Rp,_t="onMouseLeave",q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=wp,_t="onPointerLeave",q="onPointerEnter",k="pointer"),ke=lt==null?ot:Ss(lt),$=Wt==null?ot:Ss(Wt),ot=new te(_t,k+"leave",lt,a,pt),ot.target=ke,ot.relatedTarget=$,_t=null,ia(pt)===tt&&(te=new te(q,k+"enter",Wt,a,pt),te.target=$,te.relatedTarget=ke,_t=te),ke=_t,lt&&Wt)e:{for(te=wS,q=lt,k=Wt,$=0,_t=q;_t;_t=te(_t))$++;_t=0;for(var $t=k;$t;$t=te($t))_t++;for(;0<$-_t;)q=te(q),$--;for(;0<_t-$;)k=te(k),_t--;for(;$--;){if(q===k||k!==null&&q===k.alternate){te=q;break e}q=te(q),k=te(k)}te=null}else te=null;lt!==null&&Sg(xt,ot,lt,te,!1),Wt!==null&&ke!==null&&Sg(xt,ke,Wt,te,!0)}}t:{if(ot=tt?Ss(tt):window,lt=ot.nodeName&&ot.nodeName.toLowerCase(),lt==="select"||lt==="input"&&ot.type==="file")var Ae=Fp;else if(Pp(ot))if(Ip)Ae=Hx;else{Ae=Ix;var qt=Fx}else lt=ot.nodeName,!lt||lt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?tt&&Ue(tt.elementType)&&(Ae=Fp):Ae=Bx;if(Ae&&(Ae=Ae(e,tt))){zp(xt,Ae,a,pt);break t}qt&&qt(e,ot,tt),e==="focusout"&&tt&&ot.type==="number"&&tt.memoizedProps.value!=null&&pe(ot,"number",ot.value)}switch(qt=tt?Ss(tt):window,e){case"focusin":(Pp(qt)||qt.contentEditable==="true")&&(Js=qt,Uu=tt,uo=null);break;case"focusout":uo=Uu=Js=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Yp(xt,a,pt);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":Yp(xt,a,pt)}var ce;if(Ru)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Qs?Np(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Dp&&a.locale!=="ko"&&(Qs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Qs&&(ce=Tp()):(za=pt,yu="value"in za?za.value:za.textContent,Qs=!0)),qt=rc(tt,xe),0<qt.length&&(xe=new Cp(xe,e,null,a,pt),xt.push({event:xe,listeners:qt}),ce?xe.data=ce:(ce=Op(a),ce!==null&&(xe.data=ce)))),(ce=Lx?Nx(e,a):Ox(e,a))&&(xe=rc(tt,"onBeforeInput"),0<xe.length&&(qt=new Cp("onBeforeInput","beforeinput",null,a,pt),xt.push({event:qt,listeners:xe}),qt.data=ce)),TS(xt,e,tt,a,pt)}vg(xt,n)})}function zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=no(e,a),u!=null&&o.unshift(zo(e,u,h)),u=no(e,n),u!=null&&o.push(zo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function wS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sg(e,n,a,o,u){for(var h=n._reactName,v=[];a!==null&&a!==o;){var w=a,B=w.alternate,tt=w.stateNode;if(w=w.tag,B!==null&&B===o)break;w!==5&&w!==26&&w!==27||tt===null||(B=tt,u?(tt=no(a,h),tt!=null&&v.unshift(zo(a,tt,B))):u||(tt=no(a,h),tt!=null&&v.push(zo(a,tt,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var DS=/\r\n?/g,US=/\u0000|\uFFFD/g;function Mg(e){return(typeof e=="string"?e:""+e).replace(DS,`
`).replace(US,"")}function yg(e,n){return n=Mg(n),Mg(e)===n}function Ve(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ii(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ii(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":wi(e,o,h);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ms(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ms(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=sa);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ms(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Lt(e,"popover",o);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Lt(e,a,o))}}function ah(e,n,a,o,u,h){switch(a){case"style":wi(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ii(e,o):(typeof o=="number"||typeof o=="bigint")&&ii(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Dn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Lt(e,a,o)}}}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,h,v,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var w=h=v=u=null,B=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":v=pt;break;case"checked":B=pt;break;case"defaultChecked":tt=pt;break;case"value":h=pt;break;case"defaultValue":w=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,pt,a,null)}}zn(e,h,w,B,tt,v,u,!1);return;case"select":ge("invalid",e),o=v=h=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":v=w;break;case"multiple":o=w;default:Ve(e,n,u,w,a,null)}n=h,a=v,e.multiple=!!o,n!=null?yn(e,!!o,n,!1):a!=null&&yn(e,!!o,a,!0);return;case"textarea":ge("invalid",e),h=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(w=a[v],w!=null))switch(v){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Ve(e,n,v,w,a,null)}Ci(e,o,u,h);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,B,o,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)ge(Po[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,tt,o,a,null)}return;default:if(Ue(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&ah(e,n,pt,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Ve(e,n,w,o,a,null))}function LS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,v=null,w=null,B=null,tt=null,pt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=xt;default:o.hasOwnProperty(lt)||Ve(e,n,lt,null,o,xt)}}for(var ot in o){var lt=o[ot];if(xt=a[ot],o.hasOwnProperty(ot)&&(lt!=null||xt!=null))switch(ot){case"type":h=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":pt=lt;break;case"value":v=lt;break;case"defaultValue":w=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&Ve(e,n,ot,lt,o,xt)}}Bt(e,v,w,B,tt,pt,h,u);return;case"select":lt=v=w=ot=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":lt=B;default:o.hasOwnProperty(h)||Ve(e,n,h,null,o,B)}for(u in o)if(h=o[u],B=a[u],o.hasOwnProperty(u)&&(h!=null||B!=null))switch(u){case"value":ot=h;break;case"defaultValue":w=h;break;case"multiple":v=h;default:h!==B&&Ve(e,n,u,h,o,B)}n=w,a=v,o=lt,ot!=null?yn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?yn(e,!!a,n,!0):yn(e,!!a,a?[]:"",!1));return;case"textarea":lt=ot=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ve(e,n,w,null,o,u)}for(v in o)if(u=o[v],h=a[v],o.hasOwnProperty(v)&&(u!=null||h!=null))switch(v){case"value":ot=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ve(e,n,v,u,o,h)}ni(e,ot,lt);return;case"option":for(var Wt in a)ot=a[Wt],a.hasOwnProperty(Wt)&&ot!=null&&!o.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Ve(e,n,Wt,null,o,ot));for(B in o)ot=o[B],lt=a[B],o.hasOwnProperty(B)&&ot!==lt&&(ot!=null||lt!=null)&&(B==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ve(e,n,B,ot,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)ot=a[te],a.hasOwnProperty(te)&&ot!=null&&!o.hasOwnProperty(te)&&Ve(e,n,te,null,o,ot);for(tt in o)if(ot=o[tt],lt=a[tt],o.hasOwnProperty(tt)&&ot!==lt&&(ot!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ve(e,n,tt,ot,o,lt)}return;default:if(Ue(n)){for(var ke in a)ot=a[ke],a.hasOwnProperty(ke)&&ot!==void 0&&!o.hasOwnProperty(ke)&&ah(e,n,ke,void 0,o,ot);for(pt in o)ot=o[pt],lt=a[pt],!o.hasOwnProperty(pt)||ot===lt||ot===void 0&&lt===void 0||ah(e,n,pt,ot,o,lt);return}}for(var q in a)ot=a[q],a.hasOwnProperty(q)&&ot!=null&&!o.hasOwnProperty(q)&&Ve(e,n,q,null,o,ot);for(xt in o)ot=o[xt],lt=a[xt],!o.hasOwnProperty(xt)||ot===lt||ot==null&&lt==null||Ve(e,n,xt,ot,o,lt)}function bg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,v=u.initiatorType,w=u.duration;if(h&&w&&bg(v)){for(v=0,w=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],tt=B.startTime;if(tt>w)break;var pt=B.transferSize,xt=B.initiatorType;pt&&bg(xt)&&(B=B.responseEnd,v+=pt*(B<w?1:(w-tt)/(B-tt)))}if(--o,n+=8*(h+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sh=null,rh=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function oh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lh=null;function OS(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var Ag=typeof setTimeout=="function"?setTimeout:void 0,PS=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,zS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(e){return Rg.resolve(null).then(e).catch(FS)}:Ag;function FS(e){setTimeout(function(){throw e})}function $a(e){return e==="head"}function Cg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fo(a);for(var h=a.firstChild;h;){var v=h.nextSibling,w=h.nodeName;h[La]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=v}}else a==="body"&&Fo(e.ownerDocument.body);a=u}while(a);Tr(n)}function wg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),Na(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function IS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[La])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function BS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function Dg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=yi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function HS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hh=null;function Ug(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return yi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ng(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Fo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Na(e)}var bi=new Map,Og=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=H.d;H.d={f:GS,r:VS,D:kS,C:XS,L:WS,m:YS,X:ZS,S:qS,M:KS};function GS(){var e=Ma.f(),n=$l();return e||n}function VS(e){var n=aa(e);n!==null&&n.tag===5&&n.type==="form"?Qm(n):Ma.r(e)}var yr=typeof document>"u"?null:document;function Pg(e,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=Oe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Og.has(u)||(Og.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),On(n,"link",e),gn(n),o.head.appendChild(n)))}}function kS(e){Ma.D(e),Pg("dns-prefetch",e,null)}function XS(e,n){Ma.C(e,n),Pg("preconnect",e,n)}function WS(e,n,a){Ma.L(e,n,a);var o=yr;if(o&&e&&n){var u='link[rel="preload"][as="'+Oe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Oe(a.imageSizes)+'"]')):u+='[href="'+Oe(e)+'"]';var h=u;switch(n){case"style":h=br(e);break;case"script":h=Er(e)}bi.has(h)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),bi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(h))||n==="script"&&o.querySelector(Bo(h))||(n=o.createElement("link"),On(n,"link",e),gn(n),o.head.appendChild(n)))}}function YS(e,n){Ma.m(e,n);var a=yr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Oe(o)+'"][href="'+Oe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Er(e)}if(!bi.has(h)&&(e=x({rel:"modulepreload",href:e},n),bi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Bo(h)))return}o=a.createElement("link"),On(o,"link",e),gn(o),a.head.appendChild(o)}}}function qS(e,n,a){Ma.S(e,n,a);var o=yr;if(o&&e){var u=Oa(o).hoistableStyles,h=br(e);n=n||"default";var v=u.get(h);if(!v){var w={loading:0,preload:null};if(v=o.querySelector(Io(h)))w.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=bi.get(h))&&dh(e,a);var B=v=o.createElement("link");gn(B),On(B,"link",e),B._p=new Promise(function(tt,pt){B.onload=tt,B.onerror=pt}),B.addEventListener("load",function(){w.loading|=1}),B.addEventListener("error",function(){w.loading|=2}),w.loading|=4,cc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:w},u.set(h,v)}}}function ZS(e,n){Ma.X(e,n);var a=yr;if(a&&e){var o=Oa(a).hoistableScripts,u=Er(e),h=o.get(u);h||(h=a.querySelector(Bo(u)),h||(e=x({src:e,async:!0},n),(n=bi.get(u))&&ph(e,n),h=a.createElement("script"),gn(h),On(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function KS(e,n){Ma.M(e,n);var a=yr;if(a&&e){var o=Oa(a).hoistableScripts,u=Er(e),h=o.get(u);h||(h=a.querySelector(Bo(u)),h||(e=x({src:e,async:!0,type:"module"},n),(n=bi.get(u))&&ph(e,n),h=a.createElement("script"),gn(h),On(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function zg(e,n,a,o){var u=(u=at.current)?lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=br(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var h=Oa(u).hoistableStyles,v=h.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,v),(h=u.querySelector(Io(e)))&&!h._p&&(v.instance=h,v.state.loading=5),bi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(e,a),h||jS(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function br(e){return'href="'+Oe(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function Fg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function jS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",a),gn(n),e.head.appendChild(n))}function Er(e){return'[src="'+Oe(e)+'"]'}function Bo(e){return"script[async]"+e}function Ig(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Oe(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),gn(o),On(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=br(a.href);var h=e.querySelector(Io(u));if(h)return n.state.loading|=4,n.instance=h,gn(h),h;o=Fg(a),(u=bi.get(u))&&dh(o,u),h=(e.ownerDocument||e).createElement("link"),gn(h);var v=h;return v._p=new Promise(function(w,B){v.onload=w,v.onerror=B}),On(h,"link",o),n.state.loading|=4,cc(h,a.precedence,e),n.instance=h;case"script":return h=Er(a.src),(u=e.querySelector(Bo(h)))?(n.instance=u,gn(u),u):(o=a,(u=bi.get(h))&&(o=x({},a),ph(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),gn(u),On(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,v=0;v<o.length;v++){var w=o[v];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function Bg(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[La]||h[mn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(n)||"";v=e+v;var w=o.get(v);w?w.push(h):o.set(v,[h])}}return o}function Hg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function QS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function JS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=br(o.href),h=n.querySelector(Io(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,gn(h);return}h=n.ownerDocument||n,o=Fg(o),(u=bi.get(u))&&dh(o,u),h=h.createElement("link"),gn(h);var v=h;v._p=new Promise(function(w,B){v.onload=w,v.onerror=B}),On(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var mh=0;function $S(e,n){return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&mh===0&&(mh=62500*NS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>mh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function dc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(tM,e),hc=null,fc.call(e))}function tM(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var v=u[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),h=a.get(v)||o,h===o&&a.set(null,u),a.set(v,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:F,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function eM(e,n,a,o,u,h,v,w,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.hiddenUpdates=Yt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Vg(e,n,a,o,u,h,v,w,B,tt,pt,xt){return e=new eM(e,n,a,v,B,tt,pt,xt,w),n=1,h===!0&&(n|=24),h=si(3,null,null,n),e.current=h,h.stateNode=e,n=qu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Qu(h),e}function kg(e){return e?(e=er,e):er}function Xg(e,n,a,o,u,h){u=kg(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ka(e,o,n),a!==null&&(jn(a,e,n),vo(a,e,n))}function Wg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function gh(e,n){Wg(e,n),(e=e.alternate)&&Wg(e,n)}function Yg(e){if(e.tag===13||e.tag===31){var n=Ts(e,67108864);n!==null&&jn(n,e,67108864),gh(e,67108864)}}function qg(e){if(e.tag===13||e.tag===31){var n=ui();n=$r(n);var a=Ts(e,n);a!==null&&jn(a,e,n),gh(e,n)}}var pc=!0;function nM(e,n,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=2,_h(e,n,a,o)}finally{H.p=h,I.T=u}}function iM(e,n,a,o){var u=I.T;I.T=null;var h=H.p;try{H.p=8,_h(e,n,a,o)}finally{H.p=h,I.T=u}}function _h(e,n,a,o){if(pc){var u=vh(o);if(u===null)ih(e,n,o,mc,a),Kg(e,o);else if(sM(u,e,n,a,o))o.stopPropagation();else if(Kg(e,o),n&4&&-1<aM.indexOf(e)){for(;u!==null;){var h=aa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=At(h.pendingLanes);if(v!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var B=1<<31-It(v);w.entanglements[1]|=B,v&=~B}ki(h),(De&6)===0&&(Ql=He()+500,Oo(0))}}break;case 31:case 13:w=Ts(h,2),w!==null&&jn(w,h,2),$l(),gh(h,2)}if(h=vh(o),h===null&&ih(e,n,o,mc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else ih(e,n,o,null,a)}}function vh(e){return e=xu(e),xh(e)}var mc=null;function xh(e){if(mc=null,e=ia(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function Zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(we()){case O:return 2;case E:return 8;case j:case st:return 32;case ft:return 268435456;default:return 32}default:return 32}}var Sh=!1,ts=null,es=null,ns=null,Go=new Map,Vo=new Map,is=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(e,n){switch(e){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=aa(n),n!==null&&Yg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function sM(e,n,a,o,u){switch(n){case"focusin":return ts=ko(ts,e,n,a,o,u),!0;case"dragenter":return es=ko(es,e,n,a,o,u),!0;case"mouseover":return ns=ko(ns,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Go.set(h,ko(Go.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Vo.set(h,ko(Vo.get(h)||null,e,n,a,o,u)),!0}return!1}function jg(e){var n=ia(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Zs(e.priority,function(){qg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Zs(e.priority,function(){qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);vu=o,a.target.dispatchEvent(o),vu=null}else return n=aa(a),n!==null&&Yg(n),e.blockedOn=a,!1;n.shift()}return!0}function Qg(e,n,a){gc(e)&&a.delete(n)}function rM(){Sh=!1,ts!==null&&gc(ts)&&(ts=null),es!==null&&gc(es)&&(es=null),ns!==null&&gc(ns)&&(ns=null),Go.forEach(Qg),Vo.forEach(Qg)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,Sh||(Sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,rM)))}var vc=null;function Jg(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(xh(o||a)===null)continue;break}var h=aa(a);h!==null&&(e.splice(n,3),n-=3,vf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(e){function n(B){return _c(B,e)}ts!==null&&_c(ts,e),es!==null&&_c(es,e),ns!==null&&_c(ns,e),Go.forEach(n),Vo.forEach(n);for(var a=0;a<is.length;a++){var o=is[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&is.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],v=u[Dn]||null;if(typeof h=="function")v||Jg(a);else if(v){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,v=h[Dn]||null)w=v.formAction;else if(xh(u)!==null)continue}else w=v.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),Jg(a)}}}function $g(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Mh(e){this._internalRoot=e}xc.prototype.render=Mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ui();Xg(a,o,e,n,null,null)},xc.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xg(e.current,2,null,e,null,null),$l(),n[Xn]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=eo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,e),a===0&&jg(e)}};var t_=t.version;if(t_!=="19.2.8")throw Error(s(527,t_,"19.2.8"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var oM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{ut=Sc.inject(oM),ht=Sc}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=o0,h=l0,v=c0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Vg(e,1,!1,null,null,a,o,null,u,h,v,$g),e[Xn]=n.current,nh(e),new Mh(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=o0,v=l0,w=c0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Vg(e,1,!0,n,a??null,o,u,B,h,v,w,$g),n.context=kg(null),a=n.current,o=ui(),o=$r(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,Vt(n,a),ki(n),e[Xn]=n.current,nh(e),new xc(n)},Wo.version="19.2.8",Wo}var u_;function _M(){if(u_)return Eh.exports;u_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Eh.exports=gM(),Eh.exports}var vM=_M();const Gr=Math.PI*2;function xM(r,t,i){if(t<3)return 1;const s=Gr/t,l=(r%s+s)%s,c=Math.cos(Math.PI/t)/Math.cos(l-s/2),f=Math.min(1,Math.max(0,i));return c*(1-f)+1*f}function Mc(r,t){const i=Math.sin(r*127.1+t*311.7)*43758.5453;return i-Math.floor(i)}function f_(r,t){const i=Math.floor(r),s=Math.floor(t),l=r-i,c=t-s,f=l*l*(3-2*l),p=c*c*(3-2*c),m=Mc(i,s),d=Mc(i+1,s),_=Mc(i,s+1),x=Mc(i+1,s+1),g=m+(d-m)*f,y=_+(x-_)*f;return(g+(y-g)*p)*2-1}function SM(r,t,i){if(!r.enabled||r.strength===0||r.rows<1||r.cols<1)return 0;const{rows:s,cols:l,values:c}=r,f=Math.min(1,Math.max(0,i))*(s-1),p=Math.floor(f),m=Math.min(s-1,p+1),d=f-p,_=(t%Gr+Gr)%Gr/Gr*l,x=Math.floor(_)%l,g=(x+1)%l,y=_-Math.floor(_),b=(M,z)=>c[M*l+z]??0,D=b(p,x)+(b(p,g)-b(p,x))*y,S=b(m,x)+(b(m,g)-b(m,x))*y;return(D+(S-D)*d)*r.strength}function MM(r,t,i,s){const{cross:l,texture:c,lattice:f}=r,p=i+l.twist*Math.PI/180*s;let m=xM(p,Math.round(l.polygonSides),l.polygonRound);l.lobes>=1&&l.lobeAmount!==0&&(m*=1+l.lobeAmount*Math.cos(Math.round(l.lobes)*p));let d=t*m;if(c.waveCount>0&&c.waveAmount!==0&&(d+=c.waveAmount*Math.sin(Gr*c.waveCount*s+c.waveSpiral*p)),c.ribCount>0&&c.ribAmount!==0&&(d+=c.ribAmount*Math.sin(Math.round(c.ribCount)*p)),c.noiseAmount!==0){const _=Math.max(.1,c.noiseScale),x=f_(Math.cos(p)*_,s*_*4)+f_(Math.sin(p)*_+17.3,s*_*4+5.1);d+=c.noiseAmount*x*.5}return d+=SM(f,p,s),Math.max(.05,d)}function h_(r,t,i,s,l){const c=l*l,f=c*l;return .5*(2*t+(-r+i)*l+(2*r-5*t+4*i-s)*c+(-r+3*t-3*i+s)*f)}function hu(r,t=400){const i=[...r].sort((f,p)=>f.z-p.z);if(i.length===0)return{z:[0,1],r:[1,1]};if(i.length===1)return{z:[0,1],r:[i[0].r,i[0].r]};const s=[],l=[],c=Math.max(2,Math.ceil(t/(i.length-1)));for(let f=0;f<i.length-1;f++){const p=i[Math.max(0,f-1)],m=i[f],d=i[f+1],_=i[Math.min(i.length-1,f+2)],g=f===i.length-2?c+1:c;for(let y=0;y<g;y++){const b=y/c;s.push(h_(p.z,m.z,d.z,_.z,b)),l.push(Math.max(0,h_(p.r,m.r,d.r,_.r,b)))}}for(let f=1;f<s.length;f++)s[f]<s[f-1]&&(s[f]=s[f-1]);return{z:s,r:l}}function cd(r,t){const{z:i,r:s}=r;if(t<=i[0])return s[0];const l=i.length;if(t>=i[l-1])return s[l-1];let c=0,f=l-1;for(;f-c>1;){const d=c+f>>1;i[d]<=t?c=d:f=d}const p=i[f]-i[c],m=p>1e-9?(t-i[c])/p:0;return s[c]+(s[f]-s[c])*m}function yM(r,t,i=.005){const s=cd(r,Math.max(0,t-i)),l=cd(r,Math.min(1,t+i)),c=Math.min(1,t+i)-Math.max(0,t-i);return c>1e-9?(l-s)/c:0}const d_=Math.PI*2;class bM{pos=[];idx=[];vertex(t,i,s){const l=this.pos.length/3;return this.pos.push(t,i,s),l}tri(t,i,s){this.idx.push(t,i,s)}bridge(t,i,s,l=!1){for(let c=0;c<s;c++){const f=(c+1)%s,p=t+c,m=t+f,d=i+c,_=i+f;l?(this.tri(p,_,m),this.tri(p,d,_)):(this.tri(p,m,_),this.tri(p,_,d))}}cap(t,i,s,l,c,f){const p=this.vertex(s,l,c);for(let m=0;m<i;m++){const d=t+m,_=t+(m+1)%i;f?this.tri(p,d,_):this.tri(p,_,d)}}build(){return{positions:new Float32Array(this.pos),indices:new Uint32Array(this.idx)}}}function np(r,t,i,s){const l=cd(t,s)*r.radius;return MM(r,l,i,s)}function EM(r,t,i){const s=yM(t,i)*r.radius/Math.max(1e-6,r.height);return r.wall*Math.sqrt(1+s*s)}function TM(r){const t=hu(r.profile),i=Math.max(12,Math.round(r.segments)),s=Math.max(8,Math.round(r.layers)),l=new bM,c=r.base>.01,f=Math.min(r.base,r.height*.5),p=c?Math.max(0,r.drainHole/2):0,m=(b,D,S)=>{const M=b*r.height;let z=-1;for(let F=0;F<i;F++){const R=F/i*d_,L=Math.max(S,np(r,t,R,b)-D),U=l.vertex(L*Math.cos(R),L*Math.sin(R),M);F===0&&(z=U)}return z},d=[];for(let b=0;b<s;b++)d.push(m(b/(s-1),0,.05));for(let b=0;b<s-1;b++)l.bridge(d[b],d[b+1],i);const _=c?f/r.height:0,x=[];for(let b=0;b<s;b++){const D=_+(1-_)*(b/(s-1));x.push(m(D,EM(r,t,D),.15))}for(let b=0;b<s-1;b++)l.bridge(x[b],x[b+1],i,!0);if(l.bridge(d[s-1],x[s-1],i),!c)l.bridge(x[0],d[0],i);else if(p>.05){const b=M=>{let z=-1;for(let F=0;F<i;F++){const R=F/i*d_,L=l.vertex(p*Math.cos(R),p*Math.sin(R),M);F===0&&(z=L)}return z},D=b(0),S=b(f);l.bridge(D,d[0],i),l.bridge(x[0],S,i),l.bridge(D,S,i,!0)}else l.cap(d[0],i,0,0,0,!1),l.cap(x[0],i,0,0,f,!0);const{positions:g,indices:y}=l.build();return{positions:g,indices:y,triangleCount:y.length/3,size:AM(g),volumeCm3:RM(g,y)}}function AM(r){let t=1/0,i=1/0,s=1/0,l=-1/0,c=-1/0,f=-1/0;for(let p=0;p<r.length;p+=3)t=Math.min(t,r[p]),l=Math.max(l,r[p]),i=Math.min(i,r[p+1]),c=Math.max(c,r[p+1]),s=Math.min(s,r[p+2]),f=Math.max(f,r[p+2]);return isFinite(t)?[l-t,c-i,f-s]:[0,0,0]}function RM(r,t){let i=0;for(let s=0;s<t.length;s+=3){const l=t[s]*3,c=t[s+1]*3,f=t[s+2]*3,p=r[l],m=r[l+1],d=r[l+2],_=r[c],x=r[c+1],g=r[c+2],y=r[f],b=r[f+1],D=r[f+2];i+=(p*(x*D-g*b)-m*(_*D-g*y)+d*(_*b-x*y))/6}return Math.abs(i)/1e3}function Yo(r=6,t=8){return{enabled:!1,rows:r,cols:t,values:new Array(r*t).fill(0),strength:6}}const Qe=(r,t)=>({z:r,r:t}),qo={waveCount:0,waveAmount:0,waveSpiral:0,ribCount:0,ribAmount:0,noiseAmount:0,noiseScale:6},Kc={vazo:{label:"Vazo",hint:"İnce belli, geniş gövdeli klasik vazo",params:{height:180,radius:55,wall:1.6,base:2.4,drainHole:0,layers:220,segments:220,profile:[Qe(0,.55),Qe(.12,.72),Qe(.35,1),Qe(.62,.78),Qe(.82,.52),Qe(1,.62)],cross:{polygonSides:0,polygonRound:1,lobes:0,lobeAmount:.12,twist:0},texture:{...qo,waveCount:9,waveAmount:2.5,waveSpiral:1},lattice:Yo()}},saksi:{label:"Saksı",hint:"Konik gövde, su deliği ve kalın taban",params:{height:120,radius:60,wall:2.2,base:3.5,drainHole:10,layers:180,segments:180,profile:[Qe(0,.62),Qe(.08,.66),Qe(.55,.86),Qe(.92,.98),Qe(1,1)],cross:{polygonSides:6,polygonRound:.55,lobes:0,lobeAmount:0,twist:25},texture:{...qo,ribCount:24,ribAmount:.9},lattice:Yo()}},kase:{label:"Kase",hint:"Alçak, geniş ağızlı kase",params:{height:70,radius:85,wall:1.8,base:2.6,drainHole:0,layers:160,segments:200,profile:[Qe(0,.42),Qe(.15,.62),Qe(.5,.86),Qe(.8,.97),Qe(1,1)],cross:{polygonSides:0,polygonRound:1,lobes:10,lobeAmount:.06,twist:0},texture:{...qo,waveCount:4,waveAmount:1.2,waveSpiral:2},lattice:Yo()}},armatur:{label:"Aydınlatma armatürü",hint:"Alttan ve üstten açık, ışık geçiren abajur gövdesi",params:{height:200,radius:90,wall:1,base:0,drainHole:0,layers:240,segments:240,profile:[Qe(0,1),Qe(.25,.86),Qe(.5,.6),Qe(.75,.42),Qe(1,.34)],cross:{polygonSides:0,polygonRound:1,lobes:24,lobeAmount:.05,twist:180},texture:{...qo,waveCount:16,waveAmount:1.6,waveSpiral:3},lattice:Yo()}},kupa:{label:"Kupa / bardak",hint:"Silindirik, hafif konik bardak",params:{height:105,radius:40,wall:1.4,base:2,drainHole:0,layers:150,segments:160,profile:[Qe(0,.78),Qe(.3,.86),Qe(.7,.94),Qe(1,1)],cross:{polygonSides:0,polygonRound:1,lobes:0,lobeAmount:0,twist:0},texture:{...qo,ribCount:40,ribAmount:.5},lattice:Yo()}}};function p_(r){const t=Kc[r];return{kind:r,...structuredClone(t.params)}}const iu=Math.PI*2,CM={nozzle:.4,layerHeight:.28,lineWidth:.5,filament:1.75,nozzleTemp:210,bedTemp:60,speed:40,firstLayerSpeed:18,bedX:220,bedY:220,fan:!0,flow:1};function wM(r,t){const i=hu(r.profile),s=Math.PI*(t.filament/2)**2,l=t.bedX/2,c=t.bedY/2,f=Math.max(48,Math.min(360,Math.round(r.segments))),p=[];let m=0,d=l,_=c,x=0;const g=(R,L)=>R*L*t.lineWidth*t.flow/s,y=(R,L,U,N,T)=>{const A=Math.hypot(R-d,L-_);A<1e-5&&Math.abs(U-x)<1e-5||(m+=g(A,N),p.push(`G1 X${R.toFixed(3)} Y${L.toFixed(3)} Z${U.toFixed(3)} E${m.toFixed(5)} F${Math.round(T*60)}`),d=R,_=L,x=U)},b=(R,L,U)=>{p.push(`G0 X${R.toFixed(3)} Y${L.toFixed(3)} Z${U.toFixed(3)} F7200`),d=R,_=L,x=U},D=(R,L)=>Math.max(.2,np(r,i,R,L)-t.lineWidth/2);p.push("; formstudio — parametrik obje (vazo modu)",`; obje: ${r.kind}  yükseklik: ${r.height} mm  yarıçap: ${r.radius} mm`,`; nozul: ${t.nozzle} mm  katman: ${t.layerHeight} mm  çizgi: ${t.lineWidth} mm`,"M82 ; mutlak ekstrüzyon","G21 ; mm","G90 ; mutlak konum",`M104 S${t.nozzleTemp}`,`M140 S${t.bedTemp}`,"G28 ; eksenleri sıfırla",`M190 S${t.bedTemp}`,`M109 S${t.nozzleTemp}`,"G92 E0","; hazırlık çizgisi","G1 Z0.3 F1200",`G1 X${(l-60).toFixed(2)} Y${(c-80).toFixed(2)} F6000`,`G1 X${(l+60).toFixed(2)} Y${(c-80).toFixed(2)} E12 F1000`,"G92 E0"),d=l+60,_=c-80,x=.3;const S=Math.max(1,Math.round(Math.max(r.base,t.layerHeight)/t.layerHeight)),M=r.drainHole>0&&r.base>0?r.drainHole/2+t.lineWidth/2:0;for(let R=0;R<S;R++){const L=(R+1)*t.layerHeight,U=Math.min(1,L/r.height),N=R===0?t.firstLayerSpeed:t.speed;R===0&&t.fan&&p.push("M106 S0"),R===1&&t.fan&&p.push("M106 S255"),p.push(`; taban katmanı ${R+1}/${S}`);const T=D(0,U);let A=0;for(let G=T;G>M+t.lineWidth*.5;G-=t.lineWidth){const V={x:l+G*Math.cos(0),y:c+G*Math.sin(0)};A===0?b(V.x,V.y,L):y(V.x,V.y,L,t.layerHeight,N);for(let K=1;K<=f;K++){const dt=K/f*iu,vt=Math.max(.2,Math.min(G,D(dt,U)));y(l+vt*Math.cos(dt),c+vt*Math.sin(dt),L,t.layerHeight,N)}if(A++,A>400)break}}const z=S*t.layerHeight,F=Math.max(1,Math.floor((r.height-z)/t.layerHeight));p.push(`; spiral gövde: ${F} tur`);for(let R=0;R<F;R++)for(let L=0;L<=f;L++){const U=(R+L/f)/F,N=z+U*(r.height-z),T=Math.min(1,N/r.height),A=L/f*iu,G=D(A,T);y(l+G*Math.cos(A),c+G*Math.sin(A),N,t.layerHeight,t.speed)}return p.push("; bitiş",`G1 E${(m-3).toFixed(5)} F1800 ; geri çekme`,`G0 Z${(r.height+10).toFixed(2)} F1200`,"M104 S0","M140 S0","M107","G28 X Y","M84",`; toplam filament: ${(m/1e3).toFixed(2)} m`),new Blob([p.join(`
`)],{type:"text/plain"})}function DM(r,t){const i=hu(r.profile),s=64,l=Math.max(1,Math.floor(r.height/t.layerHeight)),c=Math.max(1,Math.round(Math.max(r.base,t.layerHeight)/t.layerHeight));let f=0;for(let d=0;d<l;d++){const _=Math.min(1,(d+1)*t.layerHeight/r.height);let x=0,g=0,y=0;for(let b=0;b<=s;b++){const D=b/s*iu,S=Math.max(.2,np(r,i,D,_)-t.lineWidth/2),M=S*Math.cos(D),z=S*Math.sin(D);b>0&&(x+=Math.hypot(M-g,z-y)),g=M,y=z}if(d<c){const b=x/iu,D=r.drainHole>0&&r.base>0?r.drainHole/2:0;f+=Math.PI*(b*b-D*D)/t.lineWidth}else f+=x}const p=Math.PI*(t.filament/2)**2,m=f*t.layerHeight*t.lineWidth*t.flow;return{lengthM:m/p/1e3,minutes:f/Math.max(1,t.speed)/60,grams:m/1e3*1.24,volumeCm3:m/1e3}}function UM(r,t="FormStudio"){const{positions:i,indices:s}=r,l=["# formstudio — parametrik 3B obje",`o ${t}`];for(let c=0;c<i.length;c+=3)l.push(`v ${i[c].toFixed(4)} ${i[c+1].toFixed(4)} ${i[c+2].toFixed(4)}`);for(let c=0;c<s.length;c+=3)l.push(`f ${s[c]+1} ${s[c+1]+1} ${s[c+2]+1}`);return new Blob([l.join(`
`)],{type:"model/obj"})}function LM(r,t="FormStudio"){const{positions:i,indices:s}=r,l=s.length/3,c=new ArrayBuffer(84+l*50),f=new DataView(c),p=new Uint8Array(c),m=`${t} - formstudio`.slice(0,79);for(let _=0;_<m.length;_++)p[_]=m.charCodeAt(_);f.setUint32(80,l,!0);let d=84;for(let _=0;_<s.length;_+=3){const x=s[_]*3,g=s[_+1]*3,y=s[_+2]*3,b=i[g]-i[x],D=i[g+1]-i[x+1],S=i[g+2]-i[x+2],M=i[y]-i[x],z=i[y+1]-i[x+1],F=i[y+2]-i[x+2];let R=D*F-S*z,L=S*M-b*F,U=b*z-D*M;const N=Math.hypot(R,L,U)||1;R/=N,L/=N,U/=N,f.setFloat32(d,R,!0),f.setFloat32(d+4,L,!0),f.setFloat32(d+8,U,!0),d+=12;for(const T of[x,g,y])f.setFloat32(d,i[T],!0),f.setFloat32(d+4,i[T+1],!0),f.setFloat32(d+8,i[T+2],!0),d+=12;f.setUint16(d,0,!0),d+=2}return new Blob([c],{type:"model/stl"})}function Ie({label:r,value:t,min:i,max:s,step:l=1,unit:c,hint:f,onChange:p}){return ct.jsxs("label",{className:"block py-2",children:[ct.jsxs("span",{className:"flex items-baseline justify-between text-[13px]",children:[ct.jsx("span",{className:"text-neutral-300",children:r}),ct.jsxs("span",{className:"font-mono text-orange-400",children:[Number.isInteger(l)?t.toFixed(0):t.toFixed(2),c?` ${c}`:""]})]}),ct.jsx("input",{type:"range",className:"mt-1.5 w-full accent-orange-500",min:i,max:s,step:l,value:t,onChange:m=>p(parseFloat(m.target.value))}),f?ct.jsx("span",{className:"mt-0.5 block text-[11px] text-neutral-500",children:f}):null]})}function Ar({label:r,checked:t,onChange:i}){return ct.jsxs("label",{className:"flex cursor-pointer items-center justify-between py-2 text-[13px] text-neutral-300",children:[ct.jsx("span",{children:r}),ct.jsx("input",{type:"checkbox",className:"h-4 w-4 accent-orange-500",checked:t,onChange:s=>i(s.target.checked)})]})}function Xi({title:r,children:t}){return ct.jsxs("div",{className:"border-t border-neutral-800 py-2 first:border-t-0",children:[ct.jsx("h3",{className:"mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500",children:r}),t]})}function Wi({children:r,onClick:t,variant:i="ghost",title:s}){const l="rounded-lg px-3 py-2 text-[13px] font-medium transition-colors disabled:opacity-40",c=i==="primary"?"bg-orange-600 text-white hover:bg-orange-500":"border border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white";return ct.jsx("button",{type:"button",title:s,className:`${l} ${c}`,onClick:t,children:r})}function NM(r){if(r===0)return"rgba(255,255,255,0.05)";const t=Math.min(1,Math.abs(r))*.85;return r>0?`rgba(249,115,22,${t})`:`rgba(59,130,246,${t})`}function OM({lattice:r,onChange:t}){const[i,s]=Ce.useState(.6),l=Ce.useRef(!1),c=(d,_,x)=>{const g=[...r.values];g[d*r.cols+_]=Math.max(-1,Math.min(1,x)),t({...r,values:g})},f=(d,_)=>{const x=new Array(d*_).fill(0);for(let g=0;g<Math.min(d,r.rows);g++)for(let y=0;y<Math.min(_,r.cols);y++)x[g*_+y]=r.values[g*r.cols+y]??0;t({...r,rows:d,cols:_,values:x})},p=d=>{const _=new Array(r.rows*r.cols);for(let x=0;x<r.rows;x++)for(let g=0;g<r.cols;g++)_[x*r.cols+g]=d(x,g);t({...r,values:_})},m=Array.from({length:r.rows},(d,_)=>r.rows-1-_);return ct.jsxs("div",{onPointerUp:()=>l.current=!1,onPointerLeave:()=>l.current=!1,children:[ct.jsx("div",{className:"grid gap-[3px] rounded-lg border border-neutral-800 bg-neutral-950 p-2",style:{gridTemplateColumns:`repeat(${r.cols}, minmax(0,1fr))`},children:m.map(d=>Array.from({length:r.cols},(_,x)=>{const g=r.values[d*r.cols+x]??0;return ct.jsx("button",{type:"button",title:`satır ${d+1}, sütun ${x+1}: ${g.toFixed(2)}`,className:"aspect-square rounded-[3px] border border-white/5 transition-colors",style:{background:NM(g)},onPointerDown:y=>{l.current=!0,c(d,x,y.altKey||y.button===2?0:i)},onPointerEnter:()=>l.current&&c(d,x,i),onContextMenu:y=>{y.preventDefault(),c(d,x,0)}},`${d}-${x}`)}))}),ct.jsxs("label",{className:"mt-3 block text-[13px]",children:[ct.jsxs("span",{className:"flex justify-between text-neutral-300",children:[ct.jsx("span",{children:"Fırça değeri"}),ct.jsx("span",{className:"font-mono text-orange-400",children:i.toFixed(2)})]}),ct.jsx("input",{type:"range",min:-1,max:1,step:.05,value:i,className:"mt-1 w-full accent-orange-500",onChange:d=>s(parseFloat(d.target.value))})]}),ct.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-2 text-[12px]",children:[ct.jsx("button",{type:"button",className:"rounded-lg border border-neutral-700 px-2 py-1.5 text-neutral-300 hover:border-neutral-500",onClick:()=>p(()=>0),children:"Sıfırla"}),ct.jsx("button",{type:"button",className:"rounded-lg border border-neutral-700 px-2 py-1.5 text-neutral-300 hover:border-neutral-500",onClick:()=>p(()=>Math.random()*2-1),children:"Rastgele"}),ct.jsx("button",{type:"button",className:"rounded-lg border border-neutral-700 px-2 py-1.5 text-neutral-300 hover:border-neutral-500",onClick:()=>p((d,_)=>Math.sin(_/r.cols*Math.PI*2)*Math.cos(d/r.rows*Math.PI*2)),children:"Dalga"}),ct.jsx("button",{type:"button",className:"rounded-lg border border-neutral-700 px-2 py-1.5 text-neutral-300 hover:border-neutral-500",onClick:()=>p((d,_)=>(d+_)%2===0?.8:-.8),children:"Dama"})]}),ct.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-3 text-[12px] text-neutral-400",children:[ct.jsxs("label",{children:["Satır (yükseklik)",ct.jsx("input",{type:"number",min:2,max:16,value:r.rows,onChange:d=>f(Math.max(2,Math.min(16,+d.target.value||2)),r.cols),className:"mt-1 w-full rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-neutral-200"})]}),ct.jsxs("label",{children:["Sütun (açı)",ct.jsx("input",{type:"number",min:3,max:24,value:r.cols,onChange:d=>f(r.rows,Math.max(3,Math.min(24,+d.target.value||3))),className:"mt-1 w-full rounded-md border border-neutral-700 bg-neutral-900 px-2 py-1 text-neutral-200"})]})]})]})}const fn=26,PM=14;function zM({points:r,onChange:t,height:i=320}){const s=Ce.useRef(null),l=Ce.useRef(null),c=Ce.useRef(r);c.current=r;const f=Ce.useCallback(()=>{const g=s.current;if(!g)return;const y=window.devicePixelRatio||1,b=g.clientWidth,D=g.clientHeight;(g.width!==b*y||g.height!==D*y)&&(g.width=Math.max(1,Math.round(b*y)),g.height=Math.max(1,Math.round(D*y)));const S=g.getContext("2d");if(!S)return;S.setTransform(y,0,0,y,0,0),S.clearRect(0,0,b,D);const M=R=>fn+R*(b-fn*2),z=R=>D-fn-R*(D-fn*2);S.strokeStyle="rgba(255,255,255,0.06)",S.lineWidth=1;for(let R=0;R<=10;R++){const L=M(R/10),U=z(R/10);S.beginPath(),S.moveTo(L,fn),S.lineTo(L,D-fn),S.stroke(),S.beginPath(),S.moveTo(fn,U),S.lineTo(b-fn,U),S.stroke()}S.strokeStyle="rgba(249,115,22,0.85)",S.lineWidth=2,S.beginPath(),S.moveTo(fn,fn),S.lineTo(fn,D-fn),S.stroke(),S.fillStyle="rgba(255,255,255,0.35)",S.font="10px ui-monospace, monospace",S.fillText("EKSEN",4,D/2),S.fillText("Z = MAX",b-60,fn-8),S.fillText("Z = 0",b-46,D-fn+14);const F=hu(c.current,300);S.strokeStyle="#f97316",S.lineWidth=2.5,S.beginPath();for(let R=0;R<F.z.length;R++){const L=M(F.r[R]),U=z(F.z[R]);R===0?S.moveTo(L,U):S.lineTo(L,U)}S.stroke(),S.lineTo(M(0),z(F.z[F.z.length-1])),S.lineTo(M(0),z(F.z[0])),S.closePath(),S.fillStyle="rgba(249,115,22,0.10)",S.fill();for(const R of c.current){const L=M(R.r),U=z(R.z);S.beginPath(),S.arc(L,U,5.5,0,Math.PI*2),S.fillStyle="#fb923c",S.fill(),S.strokeStyle="rgba(0,0,0,0.6)",S.lineWidth=1.5,S.stroke()}},[]);Ce.useEffect(()=>{f();const g=new ResizeObserver(f);return s.current&&g.observe(s.current),()=>g.disconnect()},[f,r]);const p=g=>{const b=s.current.getBoundingClientRect(),D=b.width,S=b.height,M=(g.clientX-b.left-fn)/(D-fn*2),z=(S-fn-(g.clientY-b.top))/(S-fn*2);return{r:Math.min(1,Math.max(0,M)),z:Math.min(1,Math.max(0,z)),px:g.clientX-b.left,py:g.clientY-b.top,w:D,h:S}},m=(g,y,b,D)=>{const S=R=>fn+R*(b-fn*2),M=R=>D-fn-R*(D-fn*2);let z=-1,F=PM;return c.current.forEach((R,L)=>{const U=Math.hypot(S(R.r)-g,M(R.z)-y);U<F&&(F=U,z=L)}),z},d=g=>{const{r:y,z:b,px:D,py:S,w:M,h:z}=p(g),F=m(D,S,M,z);if(g.button===2||g.altKey){F>=0&&c.current.length>2&&t(c.current.filter((L,U)=>U!==F));return}if(g.currentTarget.setPointerCapture(g.pointerId),F>=0){l.current=F;return}const R=[...c.current,{r:y,z:b}].sort((L,U)=>L.z-U.z);l.current=R.findIndex(L=>L.r===y&&L.z===b),t(R)},_=g=>{const y=l.current;if(y===null)return;const{r:b,z:D}=p(g),S=c.current.map((M,z)=>z===y?{r:Math.max(.02,b),z:D}:M);t(S)},x=()=>{const g=l.current;l.current=null,g!==null&&t([...c.current].sort((y,b)=>y.z-b.z))};return ct.jsxs("div",{children:[ct.jsx("canvas",{ref:s,style:{height:i},className:"w-full cursor-crosshair touch-none rounded-lg border border-neutral-800 bg-neutral-950",onPointerDown:d,onPointerMove:_,onPointerUp:x,onPointerCancel:x,onContextMenu:g=>g.preventDefault()}),ct.jsx("p",{className:"mt-1.5 text-[11px] text-neutral-500",children:"Nokta eklemek için boşluğa tıkla · taşımak için sürükle · silmek için Alt+tık (veya sağ tık)"})]})}const ip="185",kr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FM=0,m_=1,IM=2,jc=1,BM=2,nl=3,ps=0,$n=1,Ki=2,Ca=0,Xr=1,g_=2,__=3,v_=4,HM=5,Vs=100,GM=101,VM=102,kM=103,XM=104,WM=200,YM=201,qM=202,ZM=203,ud=204,fd=205,KM=206,jM=207,QM=208,JM=209,$M=210,ty=211,ey=212,ny=213,iy=214,hd=0,dd=1,pd=2,qr=3,md=4,gd=5,_d=6,vd=7,bv=0,ay=1,sy=2,Ji=0,Ev=1,Tv=2,Av=3,Rv=4,Cv=5,wv=6,Dv=7,Uv=300,Ys=301,Zr=302,Ch=303,wh=304,du=306,xd=1e3,Ra=1001,Sd=1002,Pn=1003,ry=1004,yc=1005,Hn=1006,Dh=1007,Xs=1008,di=1009,Lv=1010,Nv=1011,al=1012,ap=1013,ta=1014,ji=1015,Da=1016,sp=1017,rp=1018,sl=1020,Ov=35902,Pv=35899,zv=1021,Fv=1022,Fi=1023,Ua=1026,Ws=1027,Iv=1028,op=1029,qs=1030,lp=1031,cp=1033,Qc=33776,Jc=33777,$c=33778,tu=33779,Md=35840,yd=35841,bd=35842,Ed=35843,Td=36196,Ad=37492,Rd=37496,Cd=37488,wd=37489,au=37490,Dd=37491,Ud=37808,Ld=37809,Nd=37810,Od=37811,Pd=37812,zd=37813,Fd=37814,Id=37815,Bd=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,Wd=36492,Yd=36494,qd=36495,Zd=36283,Kd=36284,su=36285,jd=36286,oy=3200,Qd=0,ly=1,hs="",Ti="srgb",ru="srgb-linear",ou="linear",Be="srgb",Rr=7680,x_=519,cy=512,uy=513,fy=514,up=515,hy=516,dy=517,fp=518,py=519,S_=35044,M_="300 es",Qi=2e3,rl=2001;function my(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gy(){const r=lu("canvas");return r.style.display="block",r}const y_={};function b_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Bv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ee(...r){r=Bv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ee(...r){r=Bv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Wr(...r){const t=r.join(" ");t in y_||(y_[t]=!0,ee(...r))}function _y(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const vy={[hd]:dd,[pd]:_d,[md]:vd,[qr]:gd,[dd]:hd,[_d]:pd,[vd]:md,[gd]:qr};class _s{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=Math.PI/180,Jd=180/Math.PI;function ol(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function xy(r,t){return(r%t+t)%t}function Uh(r,t,i){return(1-i)*r+i*t}function Zo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Sy={DEG2RAD:eu},vp=class vp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vp.prototype.isVector2=!0;let ae=vp;class ms{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],_=s[l+2],x=s[l+3],g=c[f+0],y=c[f+1],b=c[f+2],D=c[f+3];if(x!==D||m!==g||d!==y||_!==b){let S=m*g+d*y+_*b+x*D;S<0&&(g=-g,y=-y,b=-b,D=-D,S=-S);let M=1-p;if(S<.9995){const z=Math.acos(S),F=Math.sin(z);M=Math.sin(M*z)/F,p=Math.sin(p*z)/F,m=m*M+g*p,d=d*M+y*p,_=_*M+b*p,x=x*M+D*p}else{m=m*M+g*p,d=d*M+y*p,_=_*M+b*p,x=x*M+D*p;const z=1/Math.sqrt(m*m+d*d+_*_+x*x);m*=z,d*=z,_*=z,x*=z}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],x=c[f],g=c[f+1],y=c[f+2],b=c[f+3];return t[i]=p*b+_*x+m*y-d*g,t[i+1]=m*b+_*g+d*x-p*y,t[i+2]=d*b+_*y+p*g-m*x,t[i+3]=_*b-p*x-m*g-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),x=p(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=g*_*x+d*y*b,this._y=d*y*x-g*_*b,this._z=d*_*b+g*y*x,this._w=d*_*x-g*y*b;break;case"YXZ":this._x=g*_*x+d*y*b,this._y=d*y*x-g*_*b,this._z=d*_*b-g*y*x,this._w=d*_*x+g*y*b;break;case"ZXY":this._x=g*_*x-d*y*b,this._y=d*y*x+g*_*b,this._z=d*_*b+g*y*x,this._w=d*_*x-g*y*b;break;case"ZYX":this._x=g*_*x-d*y*b,this._y=d*y*x+g*_*b,this._z=d*_*b-g*y*x,this._w=d*_*x+g*y*b;break;case"YZX":this._x=g*_*x+d*y*b,this._y=d*y*x+g*_*b,this._z=d*_*b-g*y*x,this._w=d*_*x-g*y*b;break;case"XZY":this._x=g*_*x-d*y*b,this._y=d*y*x-g*_*b,this._z=d*_*b+g*y*x,this._w=d*_*x+g*y*b;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],_=i[6],x=i[10],g=s+p+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-d)*y,this._z=(f-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+d)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(c-d)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(f-l)/y,this._x=(c+d)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+f*p+l*d-c*m,this._y=l*_+f*m+c*p-s*d,this._z=c*_+f*d+s*m-l*p,this._w=f*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xp=class xp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(E_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(E_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*s),_=2*(p*i-c*l),x=2*(c*s-f*i);return this.x=i+m*d+f*x-p*_,this.y=s+m*_+p*d-c*x,this.z=l+m*x+c*_-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Lh.copy(this).projectOnVector(t),this.sub(Lh)}reflect(t){return this.sub(Lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xp.prototype.isVector3=!0;let Q=xp;const Lh=new Q,E_=new ms,Sp=class Sp{constructor(t,i,s,l,c,f,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d)}set(t,i,s,l,c,f,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],_=s[4],x=s[7],g=s[2],y=s[5],b=s[8],D=l[0],S=l[3],M=l[6],z=l[1],F=l[4],R=l[7],L=l[2],U=l[5],N=l[8];return c[0]=f*D+p*z+m*L,c[3]=f*S+p*F+m*U,c[6]=f*M+p*R+m*N,c[1]=d*D+_*z+x*L,c[4]=d*S+_*F+x*U,c[7]=d*M+_*R+x*N,c[2]=g*D+y*z+b*L,c[5]=g*S+y*F+b*U,c[8]=g*M+y*R+b*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*f*_-i*p*d-s*c*_+s*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8],x=_*f-p*d,g=p*m-_*c,y=d*c-f*m,b=i*x+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=x*D,t[1]=(l*d-_*s)*D,t[2]=(p*s-l*f)*D,t[3]=g*D,t[4]=(_*i-l*m)*D,t[5]=(l*c-p*i)*D,t[6]=y*D,t[7]=(s*m-d*i)*D,t[8]=(f*i-s*c)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nh.makeScale(t,i)),this}rotate(t){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nh.makeRotation(-t)),this}translate(t,i){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sp.prototype.isMatrix3=!0;let re=Sp;const Nh=new re,T_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function My(){const r={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Be&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Be&&(l.r=Yr(l.r),l.g=Yr(l.g),l.b=Yr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hs?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ru]:{primaries:t,whitePoint:s,transfer:ou,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:T_,fromXYZ:A_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),r}const be=My();function wa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class yy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cr===void 0&&(Cr=lu("canvas")),Cr.width=t.width,Cr.height=t.height;const l=Cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=wa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(wa(i[s]/255)*255):i[s]=wa(i[s]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let by=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Oh(l[f].image)):c.push(Oh(l[f]))}else c=Oh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let Ey=0;const Ph=new Q;class kn extends _s{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=Ra,l=Ra,c=Hn,f=Xs,p=Fi,m=di,d=kn.DEFAULT_ANISOTROPY,_=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ol(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xd:t.x=t.x-Math.floor(t.x);break;case Ra:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xd:t.y=t.y-Math.floor(t.y);break;case Ra:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Uv;kn.DEFAULT_ANISOTROPY=1;const Mp=class Mp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],_=m[4],x=m[8],g=m[1],y=m[5],b=m[9],D=m[2],S=m[6],M=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-D)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+D)<.1&&Math.abs(b+S)<.1&&Math.abs(d+y+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(d+1)/2,R=(y+1)/2,L=(M+1)/2,U=(_+g)/4,N=(x+D)/4,T=(b+S)/4;return F>R&&F>L?F<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(F),l=U/s,c=N/s):R>L?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=U/l,c=T/l):L<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),s=N/c,l=T/c),this.set(s,l,c,i),this}let z=Math.sqrt((S-b)*(S-b)+(x-D)*(x-D)+(g-_)*(g-_));return Math.abs(z)<.001&&(z=1),this.x=(S-b)/z,this.y=(x-D)/z,this.z=(g-_)/z,this.w=Math.acos((d+y+M-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mp.prototype.isVector4=!0;let nn=Mp;class Ty extends _s{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new kn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Ty{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Hv extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fu=class fu{constructor(t,i,s,l,c,f,p,m,d,_,x,g,y,b,D,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d,_,x,g,y,b,D,S)}set(t,i,s,l,c,f,p,m,d,_,x,g,y,b,D,S){const M=this.elements;return M[0]=t,M[4]=i,M[8]=s,M[12]=l,M[1]=c,M[5]=f,M[9]=p,M[13]=m,M[2]=d,M[6]=_,M[10]=x,M[14]=g,M[3]=y,M[7]=b,M[11]=D,M[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),f=1/wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=f*_,y=f*x,b=p*_,D=p*x;i[0]=m*_,i[4]=-m*x,i[8]=d,i[1]=y+b*d,i[5]=g-D*d,i[9]=-p*m,i[2]=D-g*d,i[6]=b+y*d,i[10]=f*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,b=d*_,D=d*x;i[0]=g+D*p,i[4]=b*p-y,i[8]=f*d,i[1]=f*x,i[5]=f*_,i[9]=-p,i[2]=y*p-b,i[6]=D+g*p,i[10]=f*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,b=d*_,D=d*x;i[0]=g-D*p,i[4]=-f*x,i[8]=b+y*p,i[1]=y+b*p,i[5]=f*_,i[9]=D-g*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const g=f*_,y=f*x,b=p*_,D=p*x;i[0]=m*_,i[4]=b*d-y,i[8]=g*d+D,i[1]=m*x,i[5]=D*d+g,i[9]=y*d-b,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*d,b=p*m,D=p*d;i[0]=m*_,i[4]=D-g*x,i[8]=b*x+y,i[1]=x,i[5]=f*_,i[9]=-p*_,i[2]=-d*_,i[6]=y*x+b,i[10]=g-D*x}else if(t.order==="XZY"){const g=f*m,y=f*d,b=p*m,D=p*d;i[0]=m*_,i[4]=-x,i[8]=d*_,i[1]=g*x+D,i[5]=f*_,i[9]=y*x-b,i[2]=b*x-y,i[6]=p*_,i[10]=D*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ry,t,Cy)}lookAt(t,i,s){const l=this.elements;return fi.subVectors(t,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ss.crossVectors(s,fi),ss.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ss.crossVectors(s,fi)),ss.normalize(),bc.crossVectors(fi,ss),l[0]=ss.x,l[4]=bc.x,l[8]=fi.x,l[1]=ss.y,l[5]=bc.y,l[9]=fi.y,l[2]=ss.z,l[6]=bc.z,l[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],_=s[1],x=s[5],g=s[9],y=s[13],b=s[2],D=s[6],S=s[10],M=s[14],z=s[3],F=s[7],R=s[11],L=s[15],U=l[0],N=l[4],T=l[8],A=l[12],G=l[1],V=l[5],K=l[9],dt=l[13],vt=l[2],J=l[6],I=l[10],H=l[14],et=l[3],gt=l[7],Et=l[11],P=l[15];return c[0]=f*U+p*G+m*vt+d*et,c[4]=f*N+p*V+m*J+d*gt,c[8]=f*T+p*K+m*I+d*Et,c[12]=f*A+p*dt+m*H+d*P,c[1]=_*U+x*G+g*vt+y*et,c[5]=_*N+x*V+g*J+y*gt,c[9]=_*T+x*K+g*I+y*Et,c[13]=_*A+x*dt+g*H+y*P,c[2]=b*U+D*G+S*vt+M*et,c[6]=b*N+D*V+S*J+M*gt,c[10]=b*T+D*K+S*I+M*Et,c[14]=b*A+D*dt+S*H+M*P,c[3]=z*U+F*G+R*vt+L*et,c[7]=z*N+F*V+R*J+L*gt,c[11]=z*T+F*K+R*I+L*Et,c[15]=z*A+F*dt+R*H+L*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],_=t[2],x=t[6],g=t[10],y=t[14],b=t[3],D=t[7],S=t[11],M=t[15],z=m*y-d*g,F=p*y-d*x,R=p*g-m*x,L=f*y-d*_,U=f*g-m*_,N=f*x-p*_;return i*(D*z-S*F+M*R)-s*(b*z-S*L+M*U)+l*(b*F-D*L+M*N)-c*(b*R-D*U+S*N)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],p=t[9],m=t[2],d=t[6],_=t[10];return i*(f*_-p*d)-s*(c*_-p*m)+l*(c*d-f*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],_=t[8],x=t[9],g=t[10],y=t[11],b=t[12],D=t[13],S=t[14],M=t[15],z=i*p-s*f,F=i*m-l*f,R=i*d-c*f,L=s*m-l*p,U=s*d-c*p,N=l*d-c*m,T=_*D-x*b,A=_*S-g*b,G=_*M-y*b,V=x*S-g*D,K=x*M-y*D,dt=g*M-y*S,vt=z*dt-F*K+R*V+L*G-U*A+N*T;if(vt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/vt;return t[0]=(p*dt-m*K+d*V)*J,t[1]=(l*K-s*dt-c*V)*J,t[2]=(D*N-S*U+M*L)*J,t[3]=(g*U-x*N-y*L)*J,t[4]=(m*G-f*dt-d*A)*J,t[5]=(i*dt-l*G+c*A)*J,t[6]=(S*R-b*N-M*F)*J,t[7]=(_*N-g*R+y*F)*J,t[8]=(f*K-p*G+d*T)*J,t[9]=(s*G-i*K-c*T)*J,t[10]=(b*U-D*R+M*z)*J,t[11]=(x*R-_*U-y*z)*J,t[12]=(p*A-f*V-m*T)*J,t[13]=(i*V-s*A+l*T)*J,t[14]=(D*F-b*L-S*z)*J,t[15]=(_*L-x*F+g*z)*J,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,d=c*f,_=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*f,0,d*m-l*p,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,_=f+f,x=p+p,g=c*d,y=c*_,b=c*x,D=f*_,S=f*x,M=p*x,z=m*d,F=m*_,R=m*x,L=s.x,U=s.y,N=s.z;return l[0]=(1-(D+M))*L,l[1]=(y+R)*L,l[2]=(b-F)*L,l[3]=0,l[4]=(y-R)*U,l[5]=(1-(g+M))*U,l[6]=(S+z)*U,l[7]=0,l[8]=(b+F)*N,l[9]=(S-z)*N,l[10]=(1-(g+D))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=wr.set(l[0],l[1],l[2]).length();const p=wr.set(l[4],l[5],l[6]).length(),m=wr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const d=1/f,_=1/p,x=1/m;return Ni.elements[0]*=d,Ni.elements[1]*=d,Ni.elements[2]*=d,Ni.elements[4]*=_,Ni.elements[5]*=_,Ni.elements[6]*=_,Ni.elements[8]*=x,Ni.elements[9]*=x,Ni.elements[10]*=x,i.setFromRotationMatrix(Ni),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=Qi,m=!1){const d=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,D;if(m)b=c/(f-c),D=f*c/(f-c);else if(p===Qi)b=-(f+c)/(f-c),D=-2*f*c/(f-c);else if(p===rl)b=-f/(f-c),D=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=D,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=Qi,m=!1){const d=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,D;if(m)b=1/(f-c),D=f/(f-c);else if(p===Qi)b=-2/(f-c),D=-(f+c)/(f-c);else if(p===rl)b=-1/(f-c),D=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=D,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};fu.prototype.isMatrix4=!0;let an=fu;const wr=new Q,Ni=new an,Ry=new Q(0,0,0),Cy=new Q(1,1,1),ss=new Q,bc=new Q,fi=new Q,R_=new an,C_=new ms;class gs{constructor(t=0,i=0,s=0,l=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return R_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(R_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return C_.setFromEuler(this),this.setFromQuaternion(C_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wy=0;const w_=new Q,Dr=new ms,ya=new an,Ec=new Q,Ko=new Q,Dy=new Q,Uy=new ms,D_=new Q(1,0,0),U_=new Q(0,1,0),L_=new Q(0,0,1),N_={type:"added"},Ly={type:"removed"},Ur={type:"childadded",child:null},zh={type:"childremoved",child:null};class wn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Q,i=new gs,s=new ms,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new re}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(D_,t)}rotateY(t){return this.rotateOnAxis(U_,t)}rotateZ(t){return this.rotateOnAxis(L_,t)}translateOnAxis(t,i){return w_.copy(t).applyQuaternion(this.quaternion),this.position.add(w_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(D_,t)}translateY(t){return this.translateOnAxis(U_,t)}translateZ(t){return this.translateOnAxis(L_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ec.copy(t):Ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Ko,Ec,this.up):ya.lookAt(Ec,Ko,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Dr.setFromRotationMatrix(ya),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(N_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ly),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(N_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,Dy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,Uy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),_=f(t.images),x=f(t.shapes),g=f(t.skeletons),y=f(t.animations),b=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const D of t.hand.values()){const S=i.getJointPose(D,s),M=this._getHandJoint(d,D);S!==null&&(M.matrix.fromArray(S.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=S.radius),M.visible=S!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,b=.005;d.inputState.pinching&&g>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Ih(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=xy(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Ih(f,c,t+1/3),this.g=Ih(f,c,t),this.b=Ih(f,c,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=Ti){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const s=Vv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wa(t.r),this.g=wa(t.g),this.b=wa(t.b),this}copyLinearToSRGB(t){return this.r=Yr(t.r),this.g=Yr(t.g),this.b=Yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return be.workingToColorSpace(Bn.copy(this),t),Math.round(_e(Bn.r*255,0,255))*65536+Math.round(_e(Bn.g*255,0,255))*256+Math.round(_e(Bn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,c=Bn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+f)/2;if(p===f)m=0,d=0;else{const x=f-p;switch(d=_<=.5?x/(f+p):x/(2-f-p),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(Bn.copy(this),i),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Ti){be.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,s=Bn.g,l=Bn.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+i,rs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(rs),t.getHSL(Ac);const s=Uh(rs.h,Ac.h,i),l=Uh(rs.s,Ac.s,i),c=Uh(rs.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new fe;fe.NAMES=Vv;class dp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=i,this.far=s}clone(){return new dp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Oy extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new Q,ba=new Q,Bh=new Q,Ea=new Q,Lr=new Q,Nr=new Q,O_=new Q,Hh=new Q,Gh=new Q,Vh=new Q,kh=new nn,Xh=new nn,Wh=new nn;class zi{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Oi.subVectors(t,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Oi.subVectors(l,i),ba.subVectors(s,i),Bh.subVectors(t,i);const f=Oi.dot(Oi),p=Oi.dot(ba),m=Oi.dot(Bh),d=ba.dot(ba),_=ba.dot(Bh),x=f*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(d*m-p*_)*g,b=(f*_-p*m)*g;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(f,Ea.y),m.addScaledVector(p,Ea.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return kh.setScalar(0),Xh.setScalar(0),Wh.setScalar(0),kh.fromBufferAttribute(t,i),Xh.fromBufferAttribute(t,s),Wh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(kh,c.x),f.addScaledVector(Xh,c.y),f.addScaledVector(Wh,c.z),f}static isFrontFacing(t,i,s,l){return Oi.subVectors(s,i),ba.subVectors(t,i),Oi.cross(ba).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Oi.cross(ba).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return zi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;Lr.subVectors(l,s),Nr.subVectors(c,s),Hh.subVectors(t,s);const m=Lr.dot(Hh),d=Nr.dot(Hh);if(m<=0&&d<=0)return i.copy(s);Gh.subVectors(t,l);const _=Lr.dot(Gh),x=Nr.dot(Gh);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*d;if(g<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Lr,f);Vh.subVectors(t,c);const y=Lr.dot(Vh),b=Nr.dot(Vh);if(b>=0&&y<=b)return i.copy(c);const D=y*d-m*b;if(D<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(Nr,p);const S=_*b-y*x;if(S<=0&&x-_>=0&&y-b>=0)return O_.subVectors(c,l),p=(x-_)/(x-_+(y-b)),i.copy(l).addScaledVector(O_,p);const M=1/(S+D+g);return f=D*M,p=g*M,i.copy(s).addScaledVector(Lr,f).addScaledVector(Nr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ll{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Pi):Pi.fromBufferAttribute(c,f),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Cc.subVectors(this.max,jo),Or.subVectors(t.a,jo),Pr.subVectors(t.b,jo),zr.subVectors(t.c,jo),os.subVectors(Pr,Or),ls.subVectors(zr,Pr),Is.subVectors(Or,zr);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Is.z,Is.y,os.z,0,-os.x,ls.z,0,-ls.x,Is.z,0,-Is.x,-os.y,os.x,0,-ls.y,ls.x,0,-Is.y,Is.x,0];return!Yh(i,Or,Pr,zr,Cc)||(i=[1,0,0,0,1,0,0,0,1],!Yh(i,Or,Pr,zr,Cc))?!1:(wc.crossVectors(os,ls),i=[wc.x,wc.y,wc.z],Yh(i,Or,Pr,zr,Cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ta=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Pi=new Q,Rc=new ll,Or=new Q,Pr=new Q,zr=new Q,os=new Q,ls=new Q,Is=new Q,jo=new Q,Cc=new Q,wc=new Q,Bs=new Q;function Yh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Bs.fromArray(r,c);const p=l.x*Math.abs(Bs.x)+l.y*Math.abs(Bs.y)+l.z*Math.abs(Bs.z),m=t.dot(Bs),d=i.dot(Bs),_=s.dot(Bs);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const Mn=new Q,Dc=new ae;let Py=0;class Ri extends _s{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Py++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=S_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(t),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Zo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Zo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Zo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Zo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Zo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),c=Qn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==S_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class kv extends Ri{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Xv extends Ri{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class pi extends Ri{constructor(t,i,s){super(new Float32Array(t),i,s)}}const zy=new ll,Qo=new Q,qh=new Q;class pu{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):zy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);const i=Qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(qh)),this.expandByPoint(Qo.copy(t.center).sub(qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Fy=0;const Ei=new an,Zh=new wn,Fr=new Q,hi=new ll,Jo=new ll,Cn=new Q;class mi extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(my(t)?Xv:kv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new re().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,i,s){return Ei.makeTranslation(t,i,s),this.applyMatrix4(Ei),this}scale(t,i,s){return Ei.makeScale(t,i,s),this.applyMatrix4(Ei),this}lookAt(t){return Zh.lookAt(t),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new pi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];Jo.setFromBufferAttribute(p),this.morphTargetsRelative?(Cn.addVectors(hi.min,Jo.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,Jo.max),hi.expandByPoint(Cn)):(hi.expandByPoint(Jo.min),hi.expandByPoint(Jo.max))}hi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Cn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)Cn.fromBufferAttribute(p,d),m&&(Fr.fromBufferAttribute(t,d),Cn.add(Fr)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Ri(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new Q,m[T]=new Q;const d=new Q,_=new Q,x=new Q,g=new ae,y=new ae,b=new ae,D=new Q,S=new Q;function M(T,A,G){d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,A),x.fromBufferAttribute(s,G),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,A),b.fromBufferAttribute(c,G),_.sub(d),x.sub(d),y.sub(g),b.sub(g);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(D.copy(_).multiplyScalar(b.y).addScaledVector(x,-y.y).multiplyScalar(V),S.copy(x).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(V),p[T].add(D),p[A].add(D),p[G].add(D),m[T].add(S),m[A].add(S),m[G].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let T=0,A=z.length;T<A;++T){const G=z[T],V=G.start,K=G.count;for(let dt=V,vt=V+K;dt<vt;dt+=3)M(t.getX(dt+0),t.getX(dt+1),t.getX(dt+2))}const F=new Q,R=new Q,L=new Q,U=new Q;function N(T){L.fromBufferAttribute(l,T),U.copy(L);const A=p[T];F.copy(A),F.sub(L.multiplyScalar(L.dot(A))).normalize(),R.crossVectors(U,A);const V=R.dot(m[T])<0?-1:1;f.setXYZW(T,F.x,F.y,F.z,V)}for(let T=0,A=z.length;T<A;++T){const G=z[T],V=G.start,K=G.count;for(let dt=V,vt=V+K;dt<vt;dt+=3)N(t.getX(dt+0)),N(t.getX(dt+1)),N(t.getX(dt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Q,c=new Q,f=new Q,p=new Q,m=new Q,d=new Q,_=new Q,x=new Q;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),D=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,S),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,D),d.fromBufferAttribute(s,S),p.add(_),m.add(_),d.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,x=p.normalized,g=new d.constructor(m.length*_);let y=0,b=0;for(let D=0,S=m.length;D<S;D++){p.isInterleavedBufferAttribute?y=m[D]*p.data.stride+p.offset:y=m[D]*_;for(let M=0;M<_;M++)g[b++]=d[y++]}return new Ri(g,_,x)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new mi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,x=d.length;_<x;_++){const g=d[_],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let x=0,g=d.length;x<g;x++){const y=d[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=t.morphAttributes;for(const d in c){const _=[],x=c[d];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,_=f.length;d<_;d++){const x=f[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Iy=0;class Qr extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Xr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ud&&(s.blendSrc=this.blendSrc),this.blendDst!==fd&&(s.blendDst=this.blendDst),this.blendEquation!==Vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ae().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Aa=new Q,Kh=new Q,Uc=new Q,cs=new Q,jh=new Q,Lc=new Q,Qh=new Q;class pp{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Kh.copy(t).add(i).multiplyScalar(.5),Uc.copy(i).sub(t).normalize(),cs.copy(this.origin).sub(Kh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Uc),p=cs.dot(this.direction),m=-cs.dot(Uc),d=cs.lengthSq(),_=Math.abs(1-f*f);let x,g,y,b;if(_>0)if(x=f*m-p,g=f*p-m,b=c*_,x>=0)if(g>=-b)if(g<=b){const D=1/_;x*=D,g*=D,y=x*(x+f*g+2*p)+g*(f*x+g+2*m)+d}else g=c,x=Math.max(0,-(f*g+p)),y=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(f*g+p)),y=-x*x+g*(g+2*m)+d;else g<=-b?(x=Math.max(0,-(-f*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+d):g<=b?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(x=Math.max(0,-(f*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+d);else g=f>0?-c:c,x=Math.max(0,-(f*g+p)),y=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Kh).addScaledVector(Uc,g),y}intersectSphere(t,i){Aa.subVectors(t.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,f=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,f=(t.min.y-g.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Aa)!==null}intersectTriangle(t,i,s,l,c){jh.subVectors(i,t),Lc.subVectors(s,t),Qh.crossVectors(jh,Lc);let f=this.direction.dot(Qh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;cs.subVectors(this.origin,t);const m=p*this.direction.dot(Lc.crossVectors(cs,Lc));if(m<0)return null;const d=p*this.direction.dot(jh.cross(cs));if(d<0||m+d>f)return null;const _=-p*cs.dot(Qh);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wv extends Qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const P_=new an,Hs=new pp,Nc=new pu,z_=new Q,Oc=new Q,Pc=new Q,zc=new Q,Jh=new Q,Fc=new Q,F_=new Q,Ic=new Q;class ea extends wn{constructor(t=new mi,i=new Wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Fc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],x=c[m];_!==0&&(Jh.fromBufferAttribute(x,t),f?Fc.addScaledVector(Jh,_):Fc.addScaledVector(Jh.sub(i),_))}i.add(Fc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),Hs.copy(t.ray).recast(t.near),!(Nc.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Nc,z_)===null||Hs.origin.distanceToSquared(z_)>(t.far-t.near)**2))&&(P_.copy(c).invert(),Hs.copy(t.ray).applyMatrix4(P_),!(s.boundingBox!==null&&Hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Hs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,D=g.length;b<D;b++){const S=g[b],M=f[S.materialIndex],z=Math.max(S.start,y.start),F=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let R=z,L=F;R<L;R+=3){const U=p.getX(R),N=p.getX(R+1),T=p.getX(R+2);l=Bc(this,M,t,s,d,_,x,U,N,T),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),D=Math.min(p.count,y.start+y.count);for(let S=b,M=D;S<M;S+=3){const z=p.getX(S),F=p.getX(S+1),R=p.getX(S+2);l=Bc(this,f,t,s,d,_,x,z,F,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,D=g.length;b<D;b++){const S=g[b],M=f[S.materialIndex],z=Math.max(S.start,y.start),F=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let R=z,L=F;R<L;R+=3){const U=R,N=R+1,T=R+2;l=Bc(this,M,t,s,d,_,x,U,N,T),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let S=b,M=D;S<M;S+=3){const z=S,F=S+1,R=S+2;l=Bc(this,f,t,s,d,_,x,z,F,R),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function By(r,t,i,s,l,c,f,p){let m;if(t.side===$n?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===ps,p),m===null)return null;Ic.copy(p),Ic.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Ic);return d<i.near||d>i.far?null:{distance:d,point:Ic.clone(),object:r}}function Bc(r,t,i,s,l,c,f,p,m,d){r.getVertexPosition(p,Oc),r.getVertexPosition(m,Pc),r.getVertexPosition(d,zc);const _=By(r,t,i,s,Oc,Pc,zc,F_);if(_){const x=new Q;zi.getBarycoord(F_,Oc,Pc,zc,x),l&&(_.uv=zi.getInterpolatedAttribute(l,p,m,d,x,new ae)),c&&(_.uv1=zi.getInterpolatedAttribute(c,p,m,d,x,new ae)),f&&(_.normal=zi.getInterpolatedAttribute(f,p,m,d,x,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new Q,materialIndex:0};zi.getNormal(Oc,Pc,zc,g.normal),_.face=g,_.barycoord=x}return _}class Hy extends kn{constructor(t=null,i=1,s=1,l,c,f,p,m,d=Pn,_=Pn,x,g){super(null,f,p,m,d,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new Q,Gy=new Q,Vy=new re;class fs{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=$h.subVectors(s,i).cross(Gy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta($h),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Vy.getNormalMatrix(t),l=this.coplanarPoint($h).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new pu,ky=new ae(.5,.5),Hc=new Q;class mp{constructor(t=new fs,i=new fs,s=new fs,l=new fs,c=new fs,f=new fs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Qi,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],_=c[4],x=c[5],g=c[6],y=c[7],b=c[8],D=c[9],S=c[10],M=c[11],z=c[12],F=c[13],R=c[14],L=c[15];if(l[0].setComponents(d-f,y-_,M-b,L-z).normalize(),l[1].setComponents(d+f,y+_,M+b,L+z).normalize(),l[2].setComponents(d+p,y+x,M+D,L+F).normalize(),l[3].setComponents(d-p,y-x,M-D,L-F).normalize(),s)l[4].setComponents(m,g,S,R).normalize(),l[5].setComponents(d-m,y-g,M-S,L-R).normalize();else if(l[4].setComponents(d-m,y-g,M-S,L-R).normalize(),i===Qi)l[5].setComponents(d+m,y+g,M+S,L+R).normalize();else if(i===rl)l[5].setComponents(m,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){Gs.center.set(0,0,0);const i=ky.distanceTo(t.center);return Gs.radius=.7071067811865476+i,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Hc.x=l.normal.x>0?t.max.x:t.min.x,Hc.y=l.normal.y>0?t.max.y:t.min.y,Hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yv extends Qr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cu=new Q,uu=new Q,I_=new an,$o=new pp,Gc=new pu,td=new Q,B_=new Q;class Xy extends wn{constructor(t=new mi,i=new Yv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=cu.distanceTo(uu);t.setAttribute("lineDistance",new pi(s,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,t.ray.intersectsSphere(Gc)===!1)return;I_.copy(l).invert(),$o.copy(t.ray).applyMatrix4(I_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const y=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let D=y,S=b-1;D<S;D+=d){const M=_.getX(D),z=_.getX(D+1),F=Vc(this,t,$o,m,M,z,D);F&&i.push(F)}if(this.isLineLoop){const D=_.getX(b-1),S=_.getX(y),M=Vc(this,t,$o,m,D,S,b-1);M&&i.push(M)}}else{const y=Math.max(0,f.start),b=Math.min(g.count,f.start+f.count);for(let D=y,S=b-1;D<S;D+=d){const M=Vc(this,t,$o,m,D,D+1,D);M&&i.push(M)}if(this.isLineLoop){const D=Vc(this,t,$o,m,b-1,y,b-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Vc(r,t,i,s,l,c,f){const p=r.geometry.attributes.position;if(cu.fromBufferAttribute(p,l),uu.fromBufferAttribute(p,c),i.distanceSqToSegment(cu,uu,td,B_)>s)return;td.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(td);if(!(d<t.near||d>t.far))return{distance:d,point:B_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const H_=new Q,G_=new Q;class Wy extends Xy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)H_.fromBufferAttribute(i,l),G_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+H_.distanceTo(G_);t.setAttribute("lineDistance",new pi(s,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qv extends kn{constructor(t=[],i=Ys,s,l,c,f,p,m,d,_){super(t,i,s,l,c,f,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kr extends kn{constructor(t,i,s=ta,l,c,f,p=Pn,m=Pn,d,_=Ua,x=1){if(_!==Ua&&_!==Ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,f,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yy extends Kr{constructor(t,i=ta,s=Ys,l,c,f=Pn,p=Pn,m,d=Ua){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,f,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Zv extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cl extends mi{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],_=[],x=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new pi(d,3)),this.setAttribute("normal",new pi(_,3)),this.setAttribute("uv",new pi(x,2));function b(D,S,M,z,F,R,L,U,N,T,A){const G=R/N,V=L/T,K=R/2,dt=L/2,vt=U/2,J=N+1,I=T+1;let H=0,et=0;const gt=new Q;for(let Et=0;Et<I;Et++){const P=Et*V-dt;for(let Z=0;Z<J;Z++){const bt=Z*G-K;gt[D]=bt*z,gt[S]=P*F,gt[M]=vt,d.push(gt.x,gt.y,gt.z),gt[D]=0,gt[S]=0,gt[M]=U>0?1:-1,_.push(gt.x,gt.y,gt.z),x.push(Z/N),x.push(1-Et/T),H+=1}}for(let Et=0;Et<T;Et++)for(let P=0;P<N;P++){const Z=g+P+J*Et,bt=g+P+J*(Et+1),Ct=g+(P+1)+J*(Et+1),zt=g+(P+1)+J*Et;m.push(Z,bt,zt),m.push(bt,Ct,zt),et+=6}p.addGroup(y,et,A),y+=et,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class mu extends mi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,x=t/p,g=i/m,y=[],b=[],D=[],S=[];for(let M=0;M<_;M++){const z=M*g-f;for(let F=0;F<d;F++){const R=F*x-c;b.push(R,-z,0),D.push(0,0,1),S.push(F/p),S.push(1-M/m)}}for(let M=0;M<m;M++)for(let z=0;z<p;z++){const F=z+d*M,R=z+d*(M+1),L=z+1+d*(M+1),U=z+1+d*M;y.push(F,R,U),y.push(R,L,U)}this.setIndex(y),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(D,3)),this.setAttribute("uv",new pi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.width,t.height,t.widthSegments,t.heightSegments)}}function jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(V_(l))l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(V_(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Vn(r){const t={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)t[l]=s[l]}return t}function V_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function qy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Kv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const Zy={clone:jr,merge:Vn};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class na extends Qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=qy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new fe().setHex(l.value);break;case"v2":this.uniforms[s].value=new ae().fromArray(l.value);break;case"v3":this.uniforms[s].value=new Q().fromArray(l.value);break;case"v4":this.uniforms[s].value=new nn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new re().fromArray(l.value);break;case"m4":this.uniforms[s].value=new an().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Qy extends na{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jy extends Qr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $y extends Qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tb extends Qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jv extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class eb extends jv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const ed=new an,k_=new Q,X_=new Q;class nb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;k_.setFromMatrixPosition(t.matrixWorld),i.position.copy(k_),X_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(X_),i.updateMatrixWorld(),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===rl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kc=new Q,Xc=new ms,Yi=new Q;class Qv extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kc,Xc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,Yi.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(kc,Xc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new Q,W_=new ae,Y_=new ae;class Ai extends Qv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Jd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,i){return this.getViewBounds(t,W_,Y_),i.subVectors(Y_,W_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(eu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class gp extends Qv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ib extends nb{constructor(){super(new gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q_ extends jv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new ib}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Ir=-90,Br=1;class ab extends wn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(Ir,Br,t,i);l.layers=this.layers,this.add(l);const c=new Ai(Ir,Br,t,i);c.layers=this.layers,this.add(c);const f=new Ai(Ir,Br,t,i);f.layers=this.layers,this.add(f);const p=new Ai(Ir,Br,t,i);p.layers=this.layers,this.add(p);const m=new Ai(Ir,Br,t,i);m.layers=this.layers,this.add(m);const d=new Ai(Ir,Br,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===rl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class sb extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Z_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yp=class yp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};yp.prototype.isMatrix2=!0;let K_=yp;class rb extends Wy{constructor(t=10,i=10,s=4473924,l=8947848){s=new fe(s),l=new fe(l);const c=i/2,f=t/i,p=t/2,m=[],d=[];for(let g=0,y=0,b=-p;g<=i;g++,b+=f){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const D=g===c?s:l;D.toArray(d,y),y+=3,D.toArray(d,y),y+=3,D.toArray(d,y),y+=3,D.toArray(d,y),y+=3}const _=new mi;_.setAttribute("position",new pi(m,3)),_.setAttribute("color",new pi(d,3));const x=new Yv({vertexColors:!0,toneMapped:!1});super(_,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ob extends _s{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function j_(r,t,i,s){const l=lb(s);switch(i){case zv:return r*t;case Iv:return r*t/l.components*l.byteLength;case op:return r*t/l.components*l.byteLength;case qs:return r*t*2/l.components*l.byteLength;case lp:return r*t*2/l.components*l.byteLength;case Fv:return r*t*3/l.components*l.byteLength;case Fi:return r*t*4/l.components*l.byteLength;case cp:return r*t*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yd:case Ed:return Math.max(r,16)*Math.max(t,8)/4;case Md:case bd:return Math.max(r,8)*Math.max(t,8)/2;case Td:case Ad:case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rd:case au:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wd:case Yd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case su:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lb(r){switch(r){case di:case Lv:return{byteLength:1,components:1};case al:case Nv:case Da:return{byteLength:2,components:1};case sp:case rp:return{byteLength:2,components:4};case ta:case ap:case ji:return{byteLength:4,components:1};case Ov:case Pv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);function Jv(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function cb(r){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const _=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,_);else{x.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<x.length;y++){const b=x[g],D=x[y];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++g,x[g]=D)}x.length=g+1;for(let y=0,b=x.length;y<b;y++){const D=x[y];r.bufferSubData(d,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
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
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
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
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bb=`#ifdef USE_IRIDESCENCE
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
#endif`,Eb=`#ifdef USE_BUMPMAP
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
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pb=`vec3 transformedNormal = objectNormal;
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
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qb=`#ifdef USE_GRADIENTMAP
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
}`,Jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eE=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,nE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,iE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SE=`#if defined( USE_POINTS_UV )
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
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
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
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
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
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,KE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sT=`#ifdef USE_TRANSMISSION
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`#include <common>
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
}`,_T=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vT=`#define DISTANCE
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
}`,xT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`uniform float scale;
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
}`,bT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 diffuse;
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,CT=`#define MATCAP
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
}`,wT=`#define MATCAP
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
}`,DT=`#define NORMAL
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
}`,UT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LT=`#define PHONG
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
}`,NT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,OT=`#define STANDARD
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
}`,PT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,zT=`#define TOON
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
}`,FT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,IT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,HT=`#include <common>
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
}`,GT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,VT=`uniform float rotation;
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
}`,kT=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:ub,alphahash_pars_fragment:fb,alphamap_fragment:hb,alphamap_pars_fragment:db,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:xb,begin_vertex:Sb,beginnormal_vertex:Mb,bsdfs:yb,iridescence_fragment:bb,bumpmap_pars_fragment:Eb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Cb,color_fragment:wb,color_pars_fragment:Db,color_pars_vertex:Ub,color_vertex:Lb,common:Nb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:Pb,displacementmap_pars_vertex:zb,displacementmap_vertex:Fb,emissivemap_fragment:Ib,emissivemap_pars_fragment:Bb,colorspace_fragment:Hb,colorspace_pars_fragment:Gb,envmap_fragment:Vb,envmap_common_pars_fragment:kb,envmap_pars_fragment:Xb,envmap_pars_vertex:Wb,envmap_physical_pars_fragment:nE,envmap_vertex:Yb,fog_vertex:qb,fog_pars_vertex:Zb,fog_fragment:Kb,fog_pars_fragment:jb,gradientmap_pars_fragment:Qb,lightmap_pars_fragment:Jb,lights_lambert_fragment:$b,lights_lambert_pars_fragment:tE,lights_pars_begin:eE,lights_toon_fragment:iE,lights_toon_pars_fragment:aE,lights_phong_fragment:sE,lights_phong_pars_fragment:rE,lights_physical_fragment:oE,lights_physical_pars_fragment:lE,lights_fragment_begin:cE,lights_fragment_maps:uE,lights_fragment_end:fE,lightprobes_pars_fragment:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:_E,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:SE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:yE,morphinstance_vertex:bE,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:wE,normal_pars_fragment:DE,normal_pars_vertex:UE,normal_vertex:LE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:FE,opaque_fragment:IE,packing:BE,premultiplied_alpha_fragment:HE,project_vertex:GE,dithering_fragment:VE,dithering_pars_fragment:kE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:YE,shadowmap_pars_vertex:qE,shadowmap_vertex:ZE,shadowmask_pars_fragment:KE,skinbase_vertex:jE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:$E,specularmap_fragment:tT,specularmap_pars_fragment:eT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:aT,transmission_pars_fragment:sT,uv_pars_fragment:rT,uv_pars_vertex:oT,uv_vertex:lT,worldpos_vertex:cT,background_vert:uT,background_frag:fT,backgroundCube_vert:hT,backgroundCube_frag:dT,cube_vert:pT,cube_frag:mT,depth_vert:gT,depth_frag:_T,distance_vert:vT,distance_frag:xT,equirect_vert:ST,equirect_frag:MT,linedashed_vert:yT,linedashed_frag:bT,meshbasic_vert:ET,meshbasic_frag:TT,meshlambert_vert:AT,meshlambert_frag:RT,meshmatcap_vert:CT,meshmatcap_frag:wT,meshnormal_vert:DT,meshnormal_frag:UT,meshphong_vert:LT,meshphong_frag:NT,meshphysical_vert:OT,meshphysical_frag:PT,meshtoon_vert:zT,meshtoon_frag:FT,points_vert:IT,points_frag:BT,shadow_vert:HT,shadow_frag:GT,sprite_vert:VT,sprite_frag:kT},Pt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Zi={basic:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Vn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Vn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Vn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Vn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Vn([Pt.points,Pt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Vn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Vn([Pt.common,Pt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Vn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Vn([Pt.sprite,Pt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Vn([Pt.common,Pt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Vn([Pt.lights,Pt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Zi.physical={uniforms:Vn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Wc={r:0,b:0,g:0},XT=new an,$v=new re;$v.set(-1,0,0,0,1,0,0,0,1);function WT(r,t,i,s,l,c){const f=new fe(0);let p=l===!0?0:1,m,d,_=null,x=0,g=null;function y(z){let F=z.isScene===!0?z.background:null;if(F&&F.isTexture){const R=z.backgroundBlurriness>0;F=t.get(F,R)}return F}function b(z){let F=!1;const R=y(z);R===null?S(f,p):R&&R.isColor&&(S(R,1),F=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(z,F){const R=y(F);R&&(R.isCubeTexture||R.mapping===du)?(d===void 0&&(d=new ea(new cl(1,1,1),new na({name:"BackgroundCubeMaterial",uniforms:jr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=R,d.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(F.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply($v),d.material.toneMapped=be.getTransfer(R.colorSpace)!==Be,(_!==R||x!==R.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=R,x=R.version,g=r.toneMapping),d.layers.enableAll(),z.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new ea(new mu(2,2),new na({name:"BackgroundMaterial",uniforms:jr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=be.getTransfer(R.colorSpace)!==Be,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||x!==R.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=R,x=R.version,g=r.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function S(z,F){z.getRGB(Wc,Kv(r)),i.buffers.color.setClear(Wc.r,Wc.g,Wc.b,F,c)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(z,F=1){f.set(z),p=F,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,S(f,p)},render:b,addToRenderList:D,dispose:M}}function YT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function p(V,K,dt,vt,J){let I=!1;const H=x(V,vt,dt,K);c!==H&&(c=H,d(c.object)),I=y(V,vt,dt,J),I&&b(V,vt,dt,J),J!==null&&t.update(J,r.ELEMENT_ARRAY_BUFFER),(I||f)&&(f=!1,R(V,K,dt,vt),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return r.createVertexArray()}function d(V){return r.bindVertexArray(V)}function _(V){return r.deleteVertexArray(V)}function x(V,K,dt,vt){const J=vt.wireframe===!0;let I=s[K.id];I===void 0&&(I={},s[K.id]=I);const H=V.isInstancedMesh===!0?V.id:0;let et=I[H];et===void 0&&(et={},I[H]=et);let gt=et[dt.id];gt===void 0&&(gt={},et[dt.id]=gt);let Et=gt[J];return Et===void 0&&(Et=g(m()),gt[J]=Et),Et}function g(V){const K=[],dt=[],vt=[];for(let J=0;J<i;J++)K[J]=0,dt[J]=0,vt[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:dt,attributeDivisors:vt,object:V,attributes:{},index:null}}function y(V,K,dt,vt){const J=c.attributes,I=K.attributes;let H=0;const et=dt.getAttributes();for(const gt in et)if(et[gt].location>=0){const P=J[gt];let Z=I[gt];if(Z===void 0&&(gt==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),gt==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor)),P===void 0||P.attribute!==Z||Z&&P.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==vt}function b(V,K,dt,vt){const J={},I=K.attributes;let H=0;const et=dt.getAttributes();for(const gt in et)if(et[gt].location>=0){let P=I[gt];P===void 0&&(gt==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),gt==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const Z={};Z.attribute=P,P&&P.data&&(Z.data=P.data),J[gt]=Z,H++}c.attributes=J,c.attributesNum=H,c.index=vt}function D(){const V=c.newAttributes;for(let K=0,dt=V.length;K<dt;K++)V[K]=0}function S(V){M(V,0)}function M(V,K){const dt=c.newAttributes,vt=c.enabledAttributes,J=c.attributeDivisors;dt[V]=1,vt[V]===0&&(r.enableVertexAttribArray(V),vt[V]=1),J[V]!==K&&(r.vertexAttribDivisor(V,K),J[V]=K)}function z(){const V=c.newAttributes,K=c.enabledAttributes;for(let dt=0,vt=K.length;dt<vt;dt++)K[dt]!==V[dt]&&(r.disableVertexAttribArray(dt),K[dt]=0)}function F(V,K,dt,vt,J,I,H){H===!0?r.vertexAttribIPointer(V,K,dt,J,I):r.vertexAttribPointer(V,K,dt,vt,J,I)}function R(V,K,dt,vt){D();const J=vt.attributes,I=dt.getAttributes(),H=K.defaultAttributeValues;for(const et in I){const gt=I[et];if(gt.location>=0){let Et=J[et];if(Et===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(Et=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(Et=V.instanceColor)),Et!==void 0){const P=Et.normalized,Z=Et.itemSize,bt=t.get(Et);if(bt===void 0)continue;const Ct=bt.buffer,zt=bt.type,at=bt.bytesPerElement,St=zt===r.INT||zt===r.UNSIGNED_INT||Et.gpuType===ap;if(Et.isInterleavedBufferAttribute){const yt=Et.data,Ht=yt.stride,ne=Et.offset;if(yt.isInstancedInterleavedBuffer){for(let jt=0;jt<gt.locationSize;jt++)M(gt.location+jt,yt.meshPerAttribute);V.isInstancedMesh!==!0&&vt._maxInstanceCount===void 0&&(vt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let jt=0;jt<gt.locationSize;jt++)S(gt.location+jt);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let jt=0;jt<gt.locationSize;jt++)F(gt.location+jt,Z/gt.locationSize,zt,P,Ht*at,(ne+Z/gt.locationSize*jt)*at,St)}else{if(Et.isInstancedBufferAttribute){for(let yt=0;yt<gt.locationSize;yt++)M(gt.location+yt,Et.meshPerAttribute);V.isInstancedMesh!==!0&&vt._maxInstanceCount===void 0&&(vt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let yt=0;yt<gt.locationSize;yt++)S(gt.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let yt=0;yt<gt.locationSize;yt++)F(gt.location+yt,Z/gt.locationSize,zt,P,Z*at,Z/gt.locationSize*yt*at,St)}}else if(H!==void 0){const P=H[et];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(gt.location,P);break;case 3:r.vertexAttrib3fv(gt.location,P);break;case 4:r.vertexAttrib4fv(gt.location,P);break;default:r.vertexAttrib1fv(gt.location,P)}}}}z()}function L(){A();for(const V in s){const K=s[V];for(const dt in K){const vt=K[dt];for(const J in vt){const I=vt[J];for(const H in I)_(I[H].object),delete I[H];delete vt[J]}}delete s[V]}}function U(V){if(s[V.id]===void 0)return;const K=s[V.id];for(const dt in K){const vt=K[dt];for(const J in vt){const I=vt[J];for(const H in I)_(I[H].object),delete I[H];delete vt[J]}}delete s[V.id]}function N(V){for(const K in s){const dt=s[K];for(const vt in dt){const J=dt[vt];if(J[V.id]===void 0)continue;const I=J[V.id];for(const H in I)_(I[H].object),delete I[H];delete J[V.id]}}}function T(V){for(const K in s){const dt=s[K],vt=V.isInstancedMesh===!0?V.id:0,J=dt[vt];if(J!==void 0){for(const I in J){const H=J[I];for(const et in H)_(H[et].object),delete H[et];delete J[I]}delete dt[vt],Object.keys(dt).length===0&&delete s[K]}}}function A(){G(),f=!0,c!==l&&(c=l,d(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:A,resetDefaultState:G,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:D,enableAttribute:S,disableUnusedAttributes:z}}function qT(r,t,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function f(m,d,_){_!==0&&(r.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let y=0;y<_;y++)g+=d[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function ZT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==Fi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(N){const T=N===Da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==di&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ji&&!T)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(ee("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),M=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:S,maxAttributes:M,maxVertexUniforms:z,maxVaryings:F,maxFragmentUniforms:R,maxSamples:L,samples:U}}function KT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new fs,p=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const b=x.clippingPlanes,D=x.clipIntersection,S=x.clipShadows,M=r.get(x);if(!l||b===null||b.length===0||c&&!S)c?_(null):d();else{const z=c?0:s,F=z*4;let R=M.clippingState||null;m.value=R,R=_(b,g,F,y);for(let L=0;L!==F;++L)R[L]=i[L];M.clippingState=R,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=z}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,b){const D=x!==null?x.length:0;let S=null;if(D!==0){if(S=m.value,b!==!0||S===null){const M=y+D*4,z=g.matrixWorldInverse;p.getNormalMatrix(z),(S===null||S.length<M)&&(S=new Float32Array(M));for(let F=0,R=y;F!==D;++F,R+=4)f.copy(x[F]).applyMatrix4(z,p),f.normal.toArray(S,R),S[R+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,S}}const ds=4,Q_=[.125,.215,.35,.446,.526,.582],ks=20,jT=256,tl=new gp,J_=new fe;let nd=null,id=0,ad=0,sd=!1;const QT=new Q;class $_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=QT}=c;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=sd,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ys||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Da,format:Fi,colorSpace:ru,depthBuffer:!1},l=tv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=JT(c)),this._blurMaterial=t1(c,t,i),this._ggxMaterial=$T(c,t,i)}return l}_compileMaterial(t){const i=new ea(new mi,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ai(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(J_),x.toneMapping=Ji,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ea(new cl,new Wv({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,S=D.material;let M=!1;const z=t.background;z?z.isColor&&(S.color.copy(z),t.background=null,M=!0):(S.color.copy(J_),M=!0);for(let F=0;F<6;F++){const R=F%3;R===0?(m.up.set(0,d[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):R===1?(m.up.set(0,0,d[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,d[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const L=this._cubeSize;Hr(l,R*L,F>2?L:0,L,L),x.setRenderTarget(l),M&&x.render(D,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=z}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ys||t.mapping===Zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-_*_),g=0+d*1.25,y=x*g,{_lodMax:b}=this,D=this._sizeLods[s],S=3*D*(s>b-ds?s-b+ds:0),M=4*(this._cubeSize-D);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Hr(c,S,M,3*D,2*D),l.setRenderTarget(c),l.render(p,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Hr(t,S,M,3*D,2*D),l.setRenderTarget(t),l.render(p,tl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ee("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ks-1),D=c/b,S=isFinite(c)?1+Math.floor(_*D):ks;S>ks&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ks}`);const M=[];let z=0;for(let N=0;N<ks;++N){const T=N/D,A=Math.exp(-T*T/2);M.push(A),N===0?z+=A:N<S&&(z+=2*A)}for(let N=0;N<M.length;N++)M[N]=M[N]/z;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=M,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:F}=this;g.dTheta.value=b,g.mipInt.value=F-s;const R=this._sizeLods[l],L=3*R*(l>F-ds?l-F+ds:0),U=4*(this._cubeSize-R);Hr(i,L,U,3*R,2*R),m.setRenderTarget(i),m.render(x,tl)}}function JT(r){const t=[],i=[],s=[];let l=r;const c=r-ds+1+Q_.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-ds?m=Q_[f-r+ds-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,x=1+d,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,b=6,D=3,S=2,M=1,z=new Float32Array(D*b*y),F=new Float32Array(S*b*y),R=new Float32Array(M*b*y);for(let U=0;U<y;U++){const N=U%3*2/3-1,T=U>2?0:-1,A=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];z.set(A,D*b*U),F.set(g,S*b*U);const G=[U,U,U,U,U,U];R.set(G,M*b*U)}const L=new mi;L.setAttribute("position",new Ri(z,D)),L.setAttribute("uv",new Ri(F,S)),L.setAttribute("faceIndex",new Ri(R,M)),s.push(new ea(L,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function tv(r,t,i){const s=new $i(r,t,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function $T(r,t,i){return new na({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function t1(r,t,i){const s=new Float32Array(ks),l=new Q(0,1,0);return new na({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function ev(){return new na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function nv(){return new na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}class tx extends $i{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new na({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Ca});c.uniforms.tEquirect.value=i;const f=new ea(l,c),p=i.minFilter;return i.minFilter===Xs&&(i.minFilter=Hn),new ab(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function e1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Ch||y===wh)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const D=new tx(b.height);return D.fromEquirectangularTexture(r,g),t.set(g,D),g.addEventListener("dispose",d),p(D.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,b=y===Ch||y===wh,D=y===Ys||y===Zr;if(b||D){let S=i.get(g);const M=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return s===null&&(s=new $_(r)),S=b?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const z=g.image;return b&&z&&z.height>0||D&&z&&m(z)?(s===null&&(s=new $_(r)),S=b?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function p(g,y){return y===Ch?g.mapping=Ys:y===wh&&(g.mapping=Zr),g}function m(g){let y=0;const b=6;for(let D=0;D<b;D++)g[D]!==void 0&&y++;return y===b}function d(g){const y=g.target;y.removeEventListener("dispose",d);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function n1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wr("WebGLRenderer: "+s+" extension not supported."),l}}}function i1(r,t,i,s){const l={},c=new WeakMap;function f(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function d(x){const g=[],y=x.index,b=x.attributes.position;let D=0;if(b===void 0)return;if(y!==null){const z=y.array;D=y.version;for(let F=0,R=z.length;F<R;F+=3){const L=z[F+0],U=z[F+1],N=z[F+2];g.push(L,U,U,N,N,L)}}else{const z=b.array;D=b.version;for(let F=0,R=z.length/3-1;F<R;F+=3){const L=F+0,U=F+1,N=F+2;g.push(L,U,U,N,N,L)}}const S=new(b.count>=65535?Xv:kv)(g,1);S.version=D;const M=c.get(x);M&&t.remove(M),c.set(x,S)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:_}}function a1(r,t,i){let s;function l(x){s=x}let c,f;function p(x){c=x.type,f=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*f),i.update(g,s,1)}function d(x,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,x*f,y),i.update(g,s,y))}function _(x,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,y);let D=0;for(let S=0;S<y;S++)D+=g[S];i.update(D,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function s1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ee("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function r1(r,t,i){const s=new WeakMap,l=new nn;function c(f,p,m){const d=f.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let G=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",G)};var y=G;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let R=0;b===!0&&(R=1),D===!0&&(R=2),S===!0&&(R=3);let L=p.attributes.position.count*R,U=1;L>t.maxTextureSize&&(U=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const N=new Float32Array(L*U*4*x),T=new Hv(N,L,U,x);T.type=ji,T.needsUpdate=!0;const A=R*4;for(let V=0;V<x;V++){const K=M[V],dt=z[V],vt=F[V],J=L*U*4*V;for(let I=0;I<K.count;I++){const H=I*A;b===!0&&(l.fromBufferAttribute(K,I),N[J+H+0]=l.x,N[J+H+1]=l.y,N[J+H+2]=l.z,N[J+H+3]=0),D===!0&&(l.fromBufferAttribute(dt,I),N[J+H+4]=l.x,N[J+H+5]=l.y,N[J+H+6]=l.z,N[J+H+7]=0),S===!0&&(l.fromBufferAttribute(vt,I),N[J+H+8]=l.x,N[J+H+9]=l.y,N[J+H+10]=l.z,N[J+H+11]=vt.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new ae(L,U)},s.set(p,g),p.addEventListener("dispose",G)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<d.length;S++)b+=d[S];const D=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function o1(r,t,i,s,l){let c=new WeakMap;function f(d){const _=l.render.frame,x=d.geometry,g=t.get(d,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:p}}const l1={[Ev]:"LINEAR_TONE_MAPPING",[Tv]:"REINHARD_TONE_MAPPING",[Av]:"CINEON_TONE_MAPPING",[Rv]:"ACES_FILMIC_TONE_MAPPING",[wv]:"AGX_TONE_MAPPING",[Dv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function c1(r,t,i,s,l,c){const f=new $i(t,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Kr(t,i):void 0}),p=new $i(t,i,{type:Da,depthBuffer:!1,stencilBuffer:!1}),m=new mi;m.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new pi([0,2,0,0,2,0],2));const d=new Qy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new ea(m,d),x=new gp(-1,1,1,-1,0,1);let g=null,y=null,b=!1,D,S=null,M=[],z=!1;this.setSize=function(F,R){f.setSize(F,R),p.setSize(F,R);for(let L=0;L<M.length;L++){const U=M[L];U.setSize&&U.setSize(F,R)}},this.setEffects=function(F){M=F,z=M.length>0&&M[0].isRenderPass===!0;const R=f.width,L=f.height;for(let U=0;U<M.length;U++){const N=M[U];N.setSize&&N.setSize(R,L)}},this.begin=function(F,R){if(b||F.toneMapping===Ji&&M.length===0)return!1;if(S=R,R!==null){const L=R.width,U=R.height;(f.width!==L||f.height!==U)&&this.setSize(L,U)}return z===!1&&F.setRenderTarget(f),D=F.toneMapping,F.toneMapping=Ji,!0},this.hasRenderPass=function(){return z},this.end=function(F,R){F.toneMapping=D,b=!0;let L=f,U=p;for(let N=0;N<M.length;N++){const T=M[N];if(T.enabled!==!1&&(T.render(F,U,L,R),T.needsSwap!==!1)){const A=L;L=U,U=A}}if(g!==F.outputColorSpace||y!==F.toneMapping){g=F.outputColorSpace,y=F.toneMapping,d.defines={},be.getTransfer(g)===Be&&(d.defines.SRGB_TRANSFER="");const N=l1[y];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=L.texture,F.setRenderTarget(S),F.render(_,x),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),d.dispose()}}const ex=new kn,$d=new Kr(1,1),nx=new Hv,ix=new Ay,ax=new qv,iv=[],av=[],sv=new Float32Array(16),rv=new Float32Array(9),ov=new Float32Array(4);function Jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=iv[l];if(c===void 0&&(c=new Float32Array(l),iv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function Tn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function An(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function _u(r,t){let i=av[t];i===void 0&&(i=new Int32Array(t),av[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function u1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function f1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;r.uniform2fv(this.addr,t),An(i,t)}}function h1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tn(i,t))return;r.uniform3fv(this.addr,t),An(i,t)}}function d1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;r.uniform4fv(this.addr,t),An(i,t)}}function p1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;ov.set(s),r.uniformMatrix2fv(this.addr,!1,ov),An(i,s)}}function m1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;rv.set(s),r.uniformMatrix3fv(this.addr,!1,rv),An(i,s)}}function g1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;sv.set(s),r.uniformMatrix4fv(this.addr,!1,sv),An(i,s)}}function _1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function v1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;r.uniform2iv(this.addr,t),An(i,t)}}function x1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;r.uniform3iv(this.addr,t),An(i,t)}}function S1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;r.uniform4iv(this.addr,t),An(i,t)}}function M1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;r.uniform2uiv(this.addr,t),An(i,t)}}function b1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;r.uniform3uiv(this.addr,t),An(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;r.uniform4uiv(this.addr,t),An(i,t)}}function T1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?($d.compareFunction=i.isReversedDepthBuffer()?fp:up,c=$d):c=ex,i.setTexture2D(t||c,l)}function A1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ix,l)}function R1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ax,l)}function C1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||nx,l)}function w1(r){switch(r){case 5126:return u1;case 35664:return f1;case 35665:return h1;case 35666:return d1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return v1;case 35668:case 35672:return x1;case 35669:case 35673:return S1;case 5125:return M1;case 36294:return y1;case 36295:return b1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}function D1(r,t){r.uniform1fv(this.addr,t)}function U1(r,t){const i=Jr(t,this.size,2);r.uniform2fv(this.addr,i)}function L1(r,t){const i=Jr(t,this.size,3);r.uniform3fv(this.addr,i)}function N1(r,t){const i=Jr(t,this.size,4);r.uniform4fv(this.addr,i)}function O1(r,t){const i=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function P1(r,t){const i=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function z1(r,t){const i=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function F1(r,t){r.uniform1iv(this.addr,t)}function I1(r,t){r.uniform2iv(this.addr,t)}function B1(r,t){r.uniform3iv(this.addr,t)}function H1(r,t){r.uniform4iv(this.addr,t)}function G1(r,t){r.uniform1uiv(this.addr,t)}function V1(r,t){r.uniform2uiv(this.addr,t)}function k1(r,t){r.uniform3uiv(this.addr,t)}function X1(r,t){r.uniform4uiv(this.addr,t)}function W1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=$d:f=ex;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function Y1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||ix,c[f])}function q1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ax,c[f])}function Z1(r,t,i){const s=this.cache,l=t.length,c=_u(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||nx,c[f])}function K1(r){switch(r){case 5126:return D1;case 35664:return U1;case 35665:return L1;case 35666:return N1;case 35674:return O1;case 35675:return P1;case 35676:return z1;case 5124:case 35670:return F1;case 35667:case 35671:return I1;case 35668:case 35672:return B1;case 35669:case 35673:return H1;case 5125:return G1;case 36294:return V1;case 36295:return k1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Z1}}class j1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=w1(i.type)}}class Q1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=K1(i.type)}}class J1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function lv(r,t){r.seq.push(t),r.map[t.id]=t}function $1(r,t,i){const s=r.name,l=s.length;for(rd.lastIndex=0;;){const c=rd.exec(s),f=rd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){lv(i,d===void 0?new j1(p,r,t):new Q1(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new J1(p),lv(i,x)),i=x}}}class nu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);$1(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function cv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const tA=37297;let eA=0;function nA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const uv=new re;function iA(r){be._getMatrix(uv,be.workingColorSpace,r);const t=`mat3( ${uv.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(r)){case ou:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function fv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+nA(r.getShaderSource(t),p)}else return c}function aA(r,t){const i=iA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const sA={[Ev]:"Linear",[Tv]:"Reinhard",[Av]:"Cineon",[Rv]:"ACESFilmic",[wv]:"AgX",[Dv]:"Neutral",[Cv]:"Custom"};function rA(r,t){const i=sA[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new Q;function oA(){be.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function cA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function uA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function il(r){return r!==""}function hv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(r){return r.replace(fA,dA)}const hA=new Map;function dA(r,t){let i=ue[t];if(i===void 0){const s=hA.get(t);if(s!==void 0)i=ue[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return tp(i)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(r){return r.replace(pA,mA)}function mA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function mv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gA={[jc]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function _A(r){return gA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vA={[Ys]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function xA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const SA={[Zr]:"ENVMAP_MODE_REFRACTION"};function MA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":SA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yA={[bv]:"ENVMAP_BLENDING_MULTIPLY",[ay]:"ENVMAP_BLENDING_MIX",[sy]:"ENVMAP_BLENDING_ADD"};function bA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yA[r.combine]||"ENVMAP_BLENDING_NONE"}function EA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function TA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=_A(i),d=xA(i),_=MA(i),x=bA(i),g=EA(i),y=lA(i),b=cA(c),D=l.createProgram();let S,M,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(il).join(`
`),S.length>0&&(S+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(il).join(`
`),M.length>0&&(M+=`
`)):(S=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),M=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ji?"#define TONE_MAPPING":"",i.toneMapping!==Ji?ue.tonemapping_pars_fragment:"",i.toneMapping!==Ji?rA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,aA("linearToOutputTexel",i.outputColorSpace),oA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(il).join(`
`)),f=tp(f),f=hv(f,i),f=dv(f,i),p=tp(p),p=hv(p,i),p=dv(p,i),f=pv(f),p=pv(p),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,M=["#define varying in",i.glslVersion===M_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const F=z+S+f,R=z+M+p,L=cv(l,l.VERTEX_SHADER,F),U=cv(l,l.FRAGMENT_SHADER,R);l.attachShader(D,L),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function N(V){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(D)||"",dt=l.getShaderInfoLog(L)||"",vt=l.getShaderInfoLog(U)||"",J=K.trim(),I=dt.trim(),H=vt.trim();let et=!0,gt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,L,U);else{const Et=fv(l,L,"vertex"),P=fv(l,U,"fragment");Ee("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+Et+`
`+P)}else J!==""?ee("WebGLProgram: Program Info Log:",J):(I===""||H==="")&&(gt=!1);gt&&(V.diagnostics={runnable:et,programLog:J,vertexShader:{log:I,prefix:S},fragmentShader:{log:H,prefix:M}})}l.deleteShader(L),l.deleteShader(U),T=new nu(l,D),A=uA(l,D)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let G=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=l.getProgramParameter(D,tA)),G},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=eA++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=L,this.fragmentShader=U,this}let AA=0;class RA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new CA(t),i.set(t,s)),s}}class CA{constructor(t){this.id=AA++,this.code=t,this.usedTimes=0}}function wA(r){return r===qs||r===au||r===su}function DA(r,t,i,s,l,c){const f=new Gv,p=new RA,m=new Set,d=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function D(T,A,G,V,K,dt){const vt=V.fog,J=K.geometry,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,et=t.get(T.envMap||I,H),gt=et&&et.mapping===du?et.image.height:null,Et=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ee("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=P!==void 0?P.length:0;let bt=0;J.morphAttributes.position!==void 0&&(bt=1),J.morphAttributes.normal!==void 0&&(bt=2),J.morphAttributes.color!==void 0&&(bt=3);let Ct,zt,at,St;if(Et){const Vt=Zi[Et];Ct=Vt.vertexShader,zt=Vt.fragmentShader}else{Ct=T.vertexShader,zt=T.fragmentShader;const Vt=p.getVertexShaderStage(T),Je=p.getFragmentShaderStage(T);p.update(T,Vt,Je),at=Vt.id,St=Je.id}const yt=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),ne=K.isInstancedMesh===!0,jt=K.isBatchedMesh===!0,Ze=!!T.map,he=!!T.matcap,Se=!!et,Me=!!T.aoMap,de=!!T.lightMap,sn=!!T.bumpMap&&T.wireframe===!1,rn=!!T.normalMap,on=!!T.displacementMap,hn=!!T.emissiveMap,qe=!!T.metalnessMap,ln=!!T.roughnessMap,Y=T.anisotropy>0,He=T.clearcoat>0,we=T.dispersion>0,O=T.iridescence>0,E=T.sheen>0,j=T.transmission>0,st=Y&&!!T.anisotropyMap,ft=He&&!!T.clearcoatMap,Tt=He&&!!T.clearcoatNormalMap,Dt=He&&!!T.clearcoatRoughnessMap,ut=O&&!!T.iridescenceMap,ht=O&&!!T.iridescenceThicknessMap,Rt=E&&!!T.sheenColorMap,It=E&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Ut=!!T.specularColorMap,Kt=!!T.specularIntensityMap,Qt=j&&!!T.transmissionMap,ie=j&&!!T.thicknessMap,X=!!T.gradientMap,At=!!T.alphaMap,mt=T.alphaTest>0,wt=!!T.alphaHash,Ft=!!T.extensions;let Mt=Ji;T.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Mt=r.toneMapping);const Yt={shaderID:Et,shaderType:T.type,shaderName:T.name,vertexShader:Ct,fragmentShader:zt,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:jt,batchingColor:jt&&K._colorsTexture!==null,instancing:ne,instancingColor:ne&&K.instanceColor!==null,instancingMorph:ne&&K.morphTexture!==null,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ze,matcap:he,envMap:Se,envMapMode:Se&&et.mapping,envMapCubeUVHeight:gt,aoMap:Me,lightMap:de,bumpMap:sn,normalMap:rn,displacementMap:on,emissiveMap:hn,normalMapObjectSpace:rn&&T.normalMapType===ly,normalMapTangentSpace:rn&&T.normalMapType===Qd,packedNormalMap:rn&&T.normalMapType===Qd&&wA(T.normalMap.format),metalnessMap:qe,roughnessMap:ln,anisotropy:Y,anisotropyMap:st,clearcoat:He,clearcoatMap:ft,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Dt,dispersion:we,iridescence:O,iridescenceMap:ut,iridescenceThicknessMap:ht,sheen:E,sheenColorMap:Rt,sheenRoughnessMap:It,specularMap:Nt,specularColorMap:Ut,specularIntensityMap:Kt,transmission:j,transmissionMap:Qt,thicknessMap:ie,gradientMap:X,opaque:T.transparent===!1&&T.blending===Xr&&T.alphaToCoverage===!1,alphaMap:At,alphaTest:mt,alphaHash:wt,combine:T.combine,mapUv:Ze&&b(T.map.channel),aoMapUv:Me&&b(T.aoMap.channel),lightMapUv:de&&b(T.lightMap.channel),bumpMapUv:sn&&b(T.bumpMap.channel),normalMapUv:rn&&b(T.normalMap.channel),displacementMapUv:on&&b(T.displacementMap.channel),emissiveMapUv:hn&&b(T.emissiveMap.channel),metalnessMapUv:qe&&b(T.metalnessMap.channel),roughnessMapUv:ln&&b(T.roughnessMap.channel),anisotropyMapUv:st&&b(T.anisotropyMap.channel),clearcoatMapUv:ft&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:Ut&&b(T.specularColorMap.channel),specularIntensityMapUv:Kt&&b(T.specularIntensityMap.channel),transmissionMapUv:Qt&&b(T.transmissionMap.channel),thicknessMapUv:ie&&b(T.thicknessMap.channel),alphaMapUv:At&&b(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(rn||Y),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!J.attributes.uv&&(Ze||At),fog:!!vt,useFog:T.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&rn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ht,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:bt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:dt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===Be,decodeVideoTextureEmissive:hn&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===Be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ki,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ft&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&T.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function S(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)A.push(G),A.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(M(A,T),z(A,T),A.push(r.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function M(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function z(T,A){f.disableAll(),A.instancing&&f.enable(0),A.instancingColor&&f.enable(1),A.instancingMorph&&f.enable(2),A.matcap&&f.enable(3),A.envMap&&f.enable(4),A.normalMapObjectSpace&&f.enable(5),A.normalMapTangentSpace&&f.enable(6),A.clearcoat&&f.enable(7),A.iridescence&&f.enable(8),A.alphaTest&&f.enable(9),A.vertexColors&&f.enable(10),A.vertexAlphas&&f.enable(11),A.vertexUv1s&&f.enable(12),A.vertexUv2s&&f.enable(13),A.vertexUv3s&&f.enable(14),A.vertexTangents&&f.enable(15),A.anisotropy&&f.enable(16),A.alphaHash&&f.enable(17),A.batching&&f.enable(18),A.dispersion&&f.enable(19),A.batchingColor&&f.enable(20),A.gradientMap&&f.enable(21),A.packedNormalMap&&f.enable(22),A.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reversedDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),A.numLightProbeGrids>0&&f.enable(22),A.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function F(T){const A=y[T.type];let G;if(A){const V=Zi[A];G=Zy.clone(V.uniforms)}else G=T.uniforms;return G}function R(T,A){let G=_.get(A);return G!==void 0?++G.usedTimes:(G=new TA(r,A,T,l),d.push(G),_.set(A,G)),G}function L(T){if(--T.usedTimes===0){const A=d.indexOf(T);d[A]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function U(T){p.remove(T)}function N(){p.dispose()}return{getParameters:D,getProgramCacheKey:S,getUniforms:F,acquireProgram:R,releaseProgram:L,releaseShaderCache:U,programs:d,dispose:N}}function UA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function LA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function gv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _v(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,D,S,M){let z=r[t];return z===void 0?(z={id:g.id,object:g,geometry:y,material:b,materialVariant:f(g),groupOrder:D,renderOrder:g.renderOrder,z:S,group:M},r[t]=z):(z.id=g.id,z.object=g,z.geometry=y,z.material=b,z.materialVariant=f(g),z.groupOrder=D,z.renderOrder=g.renderOrder,z.z=S,z.group=M),t++,z}function m(g,y,b,D,S,M){const z=p(g,y,b,D,S,M);b.transmission>0?s.push(z):b.transparent===!0?l.push(z):i.push(z)}function d(g,y,b,D,S,M){const z=p(g,y,b,D,S,M);b.transmission>0?s.unshift(z):b.transparent===!0?l.unshift(z):i.unshift(z)}function _(g,y,b){i.length>1&&i.sort(g||LA),s.length>1&&s.sort(y||gv),l.length>1&&l.sort(y||gv),b&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=t,y=r.length;g<y;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:_}}function NA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new _v,r.set(s,[f])):l>=c.length?(f=new _v,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function OA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new fe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function PA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let zA=0;function FA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function IA(r){const t=new OA,i=PA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Q);const l=new Q,c=new an,f=new an;function p(d){let _=0,x=0,g=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let y=0,b=0,D=0,S=0,M=0,z=0,F=0,R=0,L=0,U=0,N=0;d.sort(FA);for(let A=0,G=d.length;A<G;A++){const V=d[A],K=V.color,dt=V.intensity,vt=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===qs?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=K.r*dt,x+=K.g*dt,g+=K.b*dt;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],dt);N++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,et=i.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,s.directionalShadow[y]=et,s.directionalShadowMap[y]=J,s.directionalShadowMatrix[y]=V.shadow.matrix,z++}s.directional[y]=I,y++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(K).multiplyScalar(dt),I.distance=vt,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[D]=I;const H=V.shadow;if(V.map&&(s.spotLightMap[L]=V.map,L++,H.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[D]=H.matrix,V.castShadow){const et=i.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,s.spotShadow[D]=et,s.spotShadowMap[D]=J,R++}D++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(K).multiplyScalar(dt),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=I,S++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const H=V.shadow,et=i.get(V);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,et.shadowCameraNear=H.camera.near,et.shadowCameraFar=H.camera.far,s.pointShadow[b]=et,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=V.shadow.matrix,F++}s.point[b]=I,b++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(dt),I.groundColor.copy(V.groundColor).multiplyScalar(dt),s.hemi[M]=I,M++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==D||T.rectAreaLength!==S||T.hemiLength!==M||T.numDirectionalShadows!==z||T.numPointShadows!==F||T.numSpotShadows!==R||T.numSpotMaps!==L||T.numLightProbes!==N)&&(s.directional.length=y,s.spot.length=D,s.rectArea.length=S,s.point.length=b,s.hemi.length=M,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=R+L-U,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=N,T.directionalLength=y,T.pointLength=b,T.spotLength=D,T.rectAreaLength=S,T.hemiLength=M,T.numDirectionalShadows=z,T.numPointShadows=F,T.numSpotShadows=R,T.numSpotMaps=L,T.numLightProbes=N,s.version=zA++)}function m(d,_){let x=0,g=0,y=0,b=0,D=0;const S=_.matrixWorldInverse;for(let M=0,z=d.length;M<z;M++){const F=d[M];if(F.isDirectionalLight){const R=s.directional[x];R.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),x++}else if(F.isSpotLight){const R=s.spot[y];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(S),y++}else if(F.isRectAreaLight){const R=s.rectArea[b];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(S),f.identity(),c.copy(F.matrixWorld),c.premultiply(S),f.extractRotation(c),R.halfWidth.set(F.width*.5,0,0),R.halfHeight.set(0,F.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),b++}else if(F.isPointLight){const R=s.point[g];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(S),g++}else if(F.isHemisphereLight){const R=s.hemi[D];R.direction.setFromMatrixPosition(F.matrixWorld),R.direction.transformDirection(S),D++}}}return{setup:p,setupView:m,state:s}}function vv(r){const t=new IA(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function _(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function BA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new vv(r),t.set(l,[p])):c>=f.length?(p=new vv(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],kA=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],xv=new an,el=new Q,od=new Q;function XA(r,t,i){let s=new mp;const l=new ae,c=new ae,f=new nn,p=new $y,m=new tb,d={},_=i.maxTextureSize,x={[ps]:$n,[$n]:ps,[Ki]:Ki},g=new na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new mi;b.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new ea(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let M=this.type;this.render=function(U,N,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;this.type===BM&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jc);const A=r.getRenderTarget(),G=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ca),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const dt=M!==this.type;dt&&N.traverse(function(vt){vt.material&&(Array.isArray(vt.material)?vt.material.forEach(J=>J.needsUpdate=!0):vt.material.needsUpdate=!0)});for(let vt=0,J=U.length;vt<J;vt++){const I=U[vt],H=I.shadow;if(H===void 0){ee("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const et=H.getFrameExtents();l.multiply(et),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/et.x),l.x=c.x*et.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/et.y),l.y=c.y*et.y,H.mapSize.y=c.y));const gt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=gt,H.map===null||dt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===nl){if(I.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new $i(l.x,l.y,{format:qs,type:Da,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new Kr(l.x,l.y,ji),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=Ua,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else I.isPointLight?(H.map=new tx(l.x),H.map.depthTexture=new Yy(l.x,ta)):(H.map=new $i(l.x,l.y),H.map.depthTexture=new Kr(l.x,l.y,ta)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=Ua,this.type===jc?(H.map.depthTexture.compareFunction=gt?fp:up,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn);H.camera.updateProjectionMatrix()}const Et=H.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Et;P++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,P),r.clear();else{P===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(P);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),K.viewport(f)}if(I.isPointLight){const Z=H.camera,bt=H.matrix,Ct=I.distance||Z.far;Ct!==Z.far&&(Z.far=Ct,Z.updateProjectionMatrix()),el.setFromMatrixPosition(I.matrixWorld),Z.position.copy(el),od.copy(Z.position),od.add(VA[P]),Z.up.copy(kA[P]),Z.lookAt(od),Z.updateMatrixWorld(),bt.makeTranslation(-el.x,-el.y,-el.z),xv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(xv,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),R(N,T,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===nl&&z(H,T),H.needsUpdate=!1}M=this.type,S.needsUpdate=!1,r.setRenderTarget(A,G,V)};function z(U,N){const T=t.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new $i(l.x,l.y,{format:qs,type:Da})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(N,null,T,g,D,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(N,null,T,y,D,null)}function F(U,N,T,A){let G=null;const V=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)G=V;else if(G=T.isPointLight===!0?m:p,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const K=G.uuid,dt=N.uuid;let vt=d[K];vt===void 0&&(vt={},d[K]=vt);let J=vt[dt];J===void 0&&(J=G.clone(),vt[dt]=J,N.addEventListener("dispose",L)),G=J}if(G.visible=N.visible,G.wireframe=N.wireframe,A===nl?G.side=N.shadowSide!==null?N.shadowSide:N.side:G.side=N.shadowSide!==null?N.shadowSide:x[N.side],G.alphaMap=N.alphaMap,G.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,G.map=N.map,G.clipShadows=N.clipShadows,G.clippingPlanes=N.clippingPlanes,G.clipIntersection=N.clipIntersection,G.displacementMap=N.displacementMap,G.displacementScale=N.displacementScale,G.displacementBias=N.displacementBias,G.wireframeLinewidth=N.wireframeLinewidth,G.linewidth=N.linewidth,T.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const K=r.properties.get(G);K.light=T}return G}function R(U,N,T,A,G){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&G===nl)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const dt=t.update(U),vt=U.material;if(Array.isArray(vt)){const J=dt.groups;for(let I=0,H=J.length;I<H;I++){const et=J[I],gt=vt[et.materialIndex];if(gt&&gt.visible){const Et=F(U,gt,A,G);U.onBeforeShadow(r,U,N,T,dt,Et,et),r.renderBufferDirect(T,null,dt,Et,U,et),U.onAfterShadow(r,U,N,T,dt,Et,et)}}}else if(vt.visible){const J=F(U,vt,A,G);U.onBeforeShadow(r,U,N,T,dt,J,null),r.renderBufferDirect(T,null,dt,J,U,null),U.onAfterShadow(r,U,N,T,dt,J,null)}}const K=U.children;for(let dt=0,vt=K.length;dt<vt;dt++)R(K[dt],N,T,A,G)}function L(U){U.target.removeEventListener("dispose",L);for(const T in d){const A=d[T],G=U.target.uuid;G in A&&(A[G].dispose(),delete A[G])}}}function WA(r,t){function i(){let X=!1;const At=new nn;let mt=null;const wt=new nn(0,0,0,0);return{setMask:function(Ft){mt!==Ft&&!X&&(r.colorMask(Ft,Ft,Ft,Ft),mt=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,Mt,Yt,Vt,Je){Je===!0&&(Ft*=Vt,Mt*=Vt,Yt*=Vt),At.set(Ft,Mt,Yt,Vt),wt.equals(At)===!1&&(r.clearColor(Ft,Mt,Yt,Vt),wt.copy(At))},reset:function(){X=!1,mt=null,wt.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,mt=null,wt=null,Ft=null;return{setReversed:function(Mt){if(At!==Mt){const Yt=t.get("EXT_clip_control");Mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),At=Mt;const Vt=Ft;Ft=null,this.setClear(Vt)}},getReversed:function(){return At},setTest:function(Mt){Mt?yt(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(Mt){mt!==Mt&&!X&&(r.depthMask(Mt),mt=Mt)},setFunc:function(Mt){if(At&&(Mt=vy[Mt]),wt!==Mt){switch(Mt){case hd:r.depthFunc(r.NEVER);break;case dd:r.depthFunc(r.ALWAYS);break;case pd:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case md:r.depthFunc(r.EQUAL);break;case gd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}wt=Mt}},setLocked:function(Mt){X=Mt},setClear:function(Mt){Ft!==Mt&&(Ft=Mt,At&&(Mt=1-Mt),r.clearDepth(Mt))},reset:function(){X=!1,mt=null,wt=null,Ft=null,At=!1}}}function l(){let X=!1,At=null,mt=null,wt=null,Ft=null,Mt=null,Yt=null,Vt=null,Je=null;return{setTest:function(Le){X||(Le?yt(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(Le){At!==Le&&!X&&(r.stencilMask(Le),At=Le)},setFunc:function(Le,ti,ei){(mt!==Le||wt!==ti||Ft!==ei)&&(r.stencilFunc(Le,ti,ei),mt=Le,wt=ti,Ft=ei)},setOp:function(Le,ti,ei){(Mt!==Le||Yt!==ti||Vt!==ei)&&(r.stencilOp(Le,ti,ei),Mt=Le,Yt=ti,Vt=ei)},setLocked:function(Le){X=Le},setClear:function(Le){Je!==Le&&(r.clearStencil(Le),Je=Le)},reset:function(){X=!1,At=null,mt=null,wt=null,Ft=null,Mt=null,Yt=null,Vt=null,Je=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},x={},g={},y=new WeakMap,b=[],D=null,S=!1,M=null,z=null,F=null,R=null,L=null,U=null,N=null,T=new fe(0,0,0),A=0,G=!1,V=null,K=null,dt=null,vt=null,J=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const gt=r.getParameter(r.VERSION);gt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(gt)[1]),H=et>=1):gt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(gt)[1]),H=et>=2);let Et=null,P={};const Z=r.getParameter(r.SCISSOR_BOX),bt=r.getParameter(r.VIEWPORT),Ct=new nn().fromArray(Z),zt=new nn().fromArray(bt);function at(X,At,mt,wt){const Ft=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(X,Mt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<mt;Yt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,wt,0,r.RGBA,r.UNSIGNED_BYTE,Ft):r.texImage2D(At+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ft);return Mt}const St={};St[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),yt(r.DEPTH_TEST),f.setFunc(qr),sn(!1),rn(m_),yt(r.CULL_FACE),Me(Ca);function yt(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Ht(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function ne(X,At){return g[X]!==At?(r.bindFramebuffer(X,At),g[X]=At,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=At),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=At),!0):!1}function jt(X,At){let mt=b,wt=!1;if(X){mt=y.get(At),mt===void 0&&(mt=[],y.set(At,mt));const Ft=X.textures;if(mt.length!==Ft.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Yt=Ft.length;Mt<Yt;Mt++)mt[Mt]=r.COLOR_ATTACHMENT0+Mt;mt.length=Ft.length,wt=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,wt=!0);wt&&r.drawBuffers(mt)}function Ze(X){return D!==X?(r.useProgram(X),D=X,!0):!1}const he={[Vs]:r.FUNC_ADD,[GM]:r.FUNC_SUBTRACT,[VM]:r.FUNC_REVERSE_SUBTRACT};he[kM]=r.MIN,he[XM]=r.MAX;const Se={[WM]:r.ZERO,[YM]:r.ONE,[qM]:r.SRC_COLOR,[ud]:r.SRC_ALPHA,[$M]:r.SRC_ALPHA_SATURATE,[QM]:r.DST_COLOR,[KM]:r.DST_ALPHA,[ZM]:r.ONE_MINUS_SRC_COLOR,[fd]:r.ONE_MINUS_SRC_ALPHA,[JM]:r.ONE_MINUS_DST_COLOR,[jM]:r.ONE_MINUS_DST_ALPHA,[ty]:r.CONSTANT_COLOR,[ey]:r.ONE_MINUS_CONSTANT_COLOR,[ny]:r.CONSTANT_ALPHA,[iy]:r.ONE_MINUS_CONSTANT_ALPHA};function Me(X,At,mt,wt,Ft,Mt,Yt,Vt,Je,Le){if(X===Ca){S===!0&&(Ht(r.BLEND),S=!1);return}if(S===!1&&(yt(r.BLEND),S=!0),X!==HM){if(X!==M||Le!==G){if((z!==Vs||L!==Vs)&&(r.blendEquation(r.FUNC_ADD),z=Vs,L=Vs),Le)switch(X){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case g_:r.blendFunc(r.ONE,r.ONE);break;case __:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case v_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ee("WebGLState: Invalid blending: ",X);break}else switch(X){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case g_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case __:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",X);break}F=null,R=null,U=null,N=null,T.set(0,0,0),A=0,M=X,G=Le}return}Ft=Ft||At,Mt=Mt||mt,Yt=Yt||wt,(At!==z||Ft!==L)&&(r.blendEquationSeparate(he[At],he[Ft]),z=At,L=Ft),(mt!==F||wt!==R||Mt!==U||Yt!==N)&&(r.blendFuncSeparate(Se[mt],Se[wt],Se[Mt],Se[Yt]),F=mt,R=wt,U=Mt,N=Yt),(Vt.equals(T)===!1||Je!==A)&&(r.blendColor(Vt.r,Vt.g,Vt.b,Je),T.copy(Vt),A=Je),M=X,G=!1}function de(X,At){X.side===Ki?Ht(r.CULL_FACE):yt(r.CULL_FACE);let mt=X.side===$n;At&&(mt=!mt),sn(mt),X.blending===Xr&&X.transparent===!1?Me(Ca):Me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const wt=X.stencilWrite;p.setTest(wt),wt&&(p.setMask(X.stencilWriteMask),p.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),p.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),hn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function sn(X){V!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),V=X)}function rn(X){X!==FM?(yt(r.CULL_FACE),X!==K&&(X===m_?r.cullFace(r.BACK):X===IM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),K=X}function on(X){X!==dt&&(H&&r.lineWidth(X),dt=X)}function hn(X,At,mt){X?(yt(r.POLYGON_OFFSET_FILL),(vt!==At||J!==mt)&&(vt=At,J=mt,f.getReversed()&&(At=-At),r.polygonOffset(At,mt))):Ht(r.POLYGON_OFFSET_FILL)}function qe(X){X?yt(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function ln(X){X===void 0&&(X=r.TEXTURE0+I-1),Et!==X&&(r.activeTexture(X),Et=X)}function Y(X,At,mt){mt===void 0&&(Et===null?mt=r.TEXTURE0+I-1:mt=Et);let wt=P[mt];wt===void 0&&(wt={type:void 0,texture:void 0},P[mt]=wt),(wt.type!==X||wt.texture!==At)&&(Et!==mt&&(r.activeTexture(mt),Et=mt),r.bindTexture(X,At||St[X]),wt.type=X,wt.texture=At)}function He(){const X=P[Et];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function we(){try{r.compressedTexImage2D(...arguments)}catch(X){Ee("WebGLState:",X)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(X){Ee("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){Ee("WebGLState:",X)}}function j(){try{r.texSubImage3D(...arguments)}catch(X){Ee("WebGLState:",X)}}function st(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ee("WebGLState:",X)}}function ft(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ee("WebGLState:",X)}}function Tt(){try{r.texStorage2D(...arguments)}catch(X){Ee("WebGLState:",X)}}function Dt(){try{r.texStorage3D(...arguments)}catch(X){Ee("WebGLState:",X)}}function ut(){try{r.texImage2D(...arguments)}catch(X){Ee("WebGLState:",X)}}function ht(){try{r.texImage3D(...arguments)}catch(X){Ee("WebGLState:",X)}}function Rt(X){return x[X]!==void 0?x[X]:r.getParameter(X)}function It(X,At){x[X]!==At&&(r.pixelStorei(X,At),x[X]=At)}function Nt(X){Ct.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ct.copy(X))}function Ut(X){zt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),zt.copy(X))}function Kt(X,At){let mt=d.get(At);mt===void 0&&(mt=new WeakMap,d.set(At,mt));let wt=mt.get(X);wt===void 0&&(wt=r.getUniformBlockIndex(At,X.name),mt.set(X,wt))}function Qt(X,At){const wt=d.get(At).get(X);m.get(At)!==wt&&(r.uniformBlockBinding(At,wt,X.__bindingPointIndex),m.set(At,wt))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},x={},Et=null,P={},g={},y=new WeakMap,b=[],D=null,S=!1,M=null,z=null,F=null,R=null,L=null,U=null,N=null,T=new fe(0,0,0),A=0,G=!1,V=null,K=null,dt=null,vt=null,J=null,Ct.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:yt,disable:Ht,bindFramebuffer:ne,drawBuffers:jt,useProgram:Ze,setBlending:Me,setMaterial:de,setFlipSided:sn,setCullFace:rn,setLineWidth:on,setPolygonOffset:hn,setScissorTest:qe,activeTexture:ln,bindTexture:Y,unbindTexture:He,compressedTexImage2D:we,compressedTexImage3D:O,texImage2D:ut,texImage3D:ht,pixelStorei:It,getParameter:Rt,updateUBOMapping:Kt,uniformBlockBinding:Qt,texStorage2D:Tt,texStorage3D:Dt,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:st,compressedTexSubImage3D:ft,scissor:Nt,viewport:Ut,reset:ie}}function YA(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ae,_=new WeakMap,x=new Set;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(O,E){return b?new OffscreenCanvas(O,E):lu("canvas")}function S(O,E,j){let st=1;const ft=we(O);if((ft.width>j||ft.height>j)&&(st=j/Math.max(ft.width,ft.height)),st<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Tt=Math.floor(st*ft.width),Dt=Math.floor(st*ft.height);g===void 0&&(g=D(Tt,Dt));const ut=E?D(Tt,Dt):g;return ut.width=Tt,ut.height=Dt,ut.getContext("2d").drawImage(O,0,0,Tt,Dt),ee("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+Tt+"x"+Dt+")."),ut}else return"data"in O&&ee("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),O;return O}function M(O){return O.generateMipmaps}function z(O){r.generateMipmap(O)}function F(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(O,E,j,st,ft,Tt=!1){if(O!==null){if(r[O]!==void 0)return r[O];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Dt;st&&(Dt=t.get("EXT_texture_norm16"),Dt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=E;if(E===r.RED&&(j===r.FLOAT&&(ut=r.R32F),j===r.HALF_FLOAT&&(ut=r.R16F),j===r.UNSIGNED_BYTE&&(ut=r.R8),j===r.UNSIGNED_SHORT&&Dt&&(ut=Dt.R16_EXT),j===r.SHORT&&Dt&&(ut=Dt.R16_SNORM_EXT)),E===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ut=r.R8UI),j===r.UNSIGNED_SHORT&&(ut=r.R16UI),j===r.UNSIGNED_INT&&(ut=r.R32UI),j===r.BYTE&&(ut=r.R8I),j===r.SHORT&&(ut=r.R16I),j===r.INT&&(ut=r.R32I)),E===r.RG&&(j===r.FLOAT&&(ut=r.RG32F),j===r.HALF_FLOAT&&(ut=r.RG16F),j===r.UNSIGNED_BYTE&&(ut=r.RG8),j===r.UNSIGNED_SHORT&&Dt&&(ut=Dt.RG16_EXT),j===r.SHORT&&Dt&&(ut=Dt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ut=r.RG8UI),j===r.UNSIGNED_SHORT&&(ut=r.RG16UI),j===r.UNSIGNED_INT&&(ut=r.RG32UI),j===r.BYTE&&(ut=r.RG8I),j===r.SHORT&&(ut=r.RG16I),j===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),j===r.UNSIGNED_INT&&(ut=r.RGB32UI),j===r.BYTE&&(ut=r.RGB8I),j===r.SHORT&&(ut=r.RGB16I),j===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),j===r.UNSIGNED_INT&&(ut=r.RGBA32UI),j===r.BYTE&&(ut=r.RGBA8I),j===r.SHORT&&(ut=r.RGBA16I),j===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&(j===r.UNSIGNED_SHORT&&Dt&&(ut=Dt.RGB16_EXT),j===r.SHORT&&Dt&&(ut=Dt.RGB16_SNORM_EXT),j===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const ht=Tt?ou:be.getTransfer(ft);j===r.FLOAT&&(ut=r.RGBA32F),j===r.HALF_FLOAT&&(ut=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ut=ht===Be?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT&&Dt&&(ut=Dt.RGBA16_EXT),j===r.SHORT&&Dt&&(ut=Dt.RGBA16_SNORM_EXT),j===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function L(O,E){let j;return O?E===null||E===ta||E===sl?j=r.DEPTH24_STENCIL8:E===ji?j=r.DEPTH32F_STENCIL8:E===al&&(j=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ta||E===sl?j=r.DEPTH_COMPONENT24:E===ji?j=r.DEPTH_COMPONENT32F:E===al&&(j=r.DEPTH_COMPONENT16),j}function U(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Pn&&O.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function N(O){const E=O.target;E.removeEventListener("dispose",N),A(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&x.delete(E)}function T(O){const E=O.target;E.removeEventListener("dispose",T),V(E)}function A(O){const E=s.get(O);if(E.__webglInit===void 0)return;const j=O.source,st=y.get(j);if(st){const ft=st[E.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&G(O),Object.keys(st).length===0&&y.delete(j)}s.remove(O)}function G(O){const E=s.get(O);r.deleteTexture(E.__webglTexture);const j=O.source,st=y.get(j);delete st[E.__cacheKey],f.memory.textures--}function V(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let ft=0;ft<E.__webglFramebuffer[st].length;ft++)r.deleteFramebuffer(E.__webglFramebuffer[st][ft]);else r.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)r.deleteFramebuffer(E.__webglFramebuffer[st]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=O.textures;for(let st=0,ft=j.length;st<ft;st++){const Tt=s.get(j[st]);Tt.__webglTexture&&(r.deleteTexture(Tt.__webglTexture),f.memory.textures--),s.remove(j[st])}s.remove(O)}let K=0;function dt(){K=0}function vt(){return K}function J(O){K=O}function I(){const O=K;return O>=l.maxTextures&&ee("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),K+=1,O}function H(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function et(O,E){const j=s.get(O);if(O.isVideoTexture&&Y(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){const st=O.image;if(st===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(j,O,E);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+E)}function gt(O,E){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){Ht(j,O,E);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+E)}function Et(O,E){const j=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){Ht(j,O,E);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+E)}function P(O,E){const j=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&j.__version!==O.version){ne(j,O,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+E)}const Z={[xd]:r.REPEAT,[Ra]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},bt={[Pn]:r.NEAREST,[ry]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[Dh]:r.LINEAR_MIPMAP_NEAREST,[Xs]:r.LINEAR_MIPMAP_LINEAR},Ct={[cy]:r.NEVER,[py]:r.ALWAYS,[uy]:r.LESS,[up]:r.LEQUAL,[fy]:r.EQUAL,[fp]:r.GEQUAL,[hy]:r.GREATER,[dy]:r.NOTEQUAL};function zt(O,E){if(E.type===ji&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===Dh||E.magFilter===yc||E.magFilter===Xs||E.minFilter===Hn||E.minFilter===Dh||E.minFilter===yc||E.minFilter===Xs)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,Z[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,Z[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,Z[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,bt[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,bt[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,Ct[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==yc&&E.minFilter!==Xs||E.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function at(O,E){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",N));const st=E.source;let ft=y.get(st);ft===void 0&&(ft={},y.set(st,ft));const Tt=H(E);if(Tt!==O.__cacheKey){ft[Tt]===void 0&&(ft[Tt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),ft[Tt].usedTimes++;const Dt=ft[O.__cacheKey];Dt!==void 0&&(ft[O.__cacheKey].usedTimes--,Dt.usedTimes===0&&G(E)),O.__cacheKey=Tt,O.__webglTexture=ft[Tt].texture}return j}function St(O,E,j){return Math.floor(Math.floor(O/j)/E)}function yt(O,E,j,st){const Tt=O.updateRanges;if(Tt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,j,st,E.data);else{Tt.sort((It,Nt)=>It.start-Nt.start);let Dt=0;for(let It=1;It<Tt.length;It++){const Nt=Tt[Dt],Ut=Tt[It],Kt=Nt.start+Nt.count,Qt=St(Ut.start,E.width,4),ie=St(Nt.start,E.width,4);Ut.start<=Kt+1&&Qt===ie&&St(Ut.start+Ut.count-1,E.width,4)===Qt?Nt.count=Math.max(Nt.count,Ut.start+Ut.count-Nt.start):(++Dt,Tt[Dt]=Ut)}Tt.length=Dt+1;const ut=i.getParameter(r.UNPACK_ROW_LENGTH),ht=i.getParameter(r.UNPACK_SKIP_PIXELS),Rt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let It=0,Nt=Tt.length;It<Nt;It++){const Ut=Tt[It],Kt=Math.floor(Ut.start/4),Qt=Math.ceil(Ut.count/4),ie=Kt%E.width,X=Math.floor(Kt/E.width),At=Qt,mt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ie,X,At,mt,j,st,E.data)}O.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ut),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(r.UNPACK_SKIP_ROWS,Rt)}}function Ht(O,E,j){let st=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=r.TEXTURE_3D);const ft=at(O,E),Tt=E.source;i.bindTexture(st,O.__webglTexture,r.TEXTURE0+j);const Dt=s.get(Tt);if(Tt.version!==Dt.__version||ft===!0){if(i.activeTexture(r.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const mt=be.getPrimaries(be.workingColorSpace),wt=E.colorSpace===hs?null:be.getPrimaries(E.colorSpace),Ft=E.colorSpace===hs||mt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ht=S(E.image,!1,l.maxTextureSize);ht=He(E,ht);const Rt=c.convert(E.format,E.colorSpace),It=c.convert(E.type);let Nt=R(E.internalFormat,Rt,It,E.normalized,E.colorSpace,E.isVideoTexture);zt(st,E);let Ut;const Kt=E.mipmaps,Qt=E.isVideoTexture!==!0,ie=Dt.__version===void 0||ft===!0,X=Tt.dataReady,At=U(E,ht);if(E.isDepthTexture)Nt=L(E.format===Ws,E.type),ie&&(Qt?i.texStorage2D(r.TEXTURE_2D,1,Nt,ht.width,ht.height):i.texImage2D(r.TEXTURE_2D,0,Nt,ht.width,ht.height,0,Rt,It,null));else if(E.isDataTexture)if(Kt.length>0){Qt&&ie&&i.texStorage2D(r.TEXTURE_2D,At,Nt,Kt[0].width,Kt[0].height);for(let mt=0,wt=Kt.length;mt<wt;mt++)Ut=Kt[mt],Qt?X&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Rt,It,Ut.data):i.texImage2D(r.TEXTURE_2D,mt,Nt,Ut.width,Ut.height,0,Rt,It,Ut.data);E.generateMipmaps=!1}else Qt?(ie&&i.texStorage2D(r.TEXTURE_2D,At,Nt,ht.width,ht.height),X&&yt(E,ht,Rt,It)):i.texImage2D(r.TEXTURE_2D,0,Nt,ht.width,ht.height,0,Rt,It,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qt&&ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,At,Nt,Kt[0].width,Kt[0].height,ht.depth);for(let mt=0,wt=Kt.length;mt<wt;mt++)if(Ut=Kt[mt],E.format!==Fi)if(Rt!==null)if(Qt){if(X)if(E.layerUpdates.size>0){const Ft=j_(Ut.width,Ut.height,E.format,E.type);for(const Mt of E.layerUpdates){const Yt=Ut.data.subarray(Mt*Ft/Ut.data.BYTES_PER_ELEMENT,(Mt+1)*Ft/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,Mt,Ut.width,Ut.height,1,Rt,Yt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ut.width,Ut.height,ht.depth,Rt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Nt,Ut.width,Ut.height,ht.depth,0,Ut.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ut.width,Ut.height,ht.depth,Rt,It,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,mt,Nt,Ut.width,Ut.height,ht.depth,0,Rt,It,Ut.data)}else{Qt&&ie&&i.texStorage2D(r.TEXTURE_2D,At,Nt,Kt[0].width,Kt[0].height);for(let mt=0,wt=Kt.length;mt<wt;mt++)Ut=Kt[mt],E.format!==Fi?Rt!==null?Qt?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Rt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,mt,Nt,Ut.width,Ut.height,0,Ut.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?X&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Rt,It,Ut.data):i.texImage2D(r.TEXTURE_2D,mt,Nt,Ut.width,Ut.height,0,Rt,It,Ut.data)}else if(E.isDataArrayTexture)if(Qt){if(ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,At,Nt,ht.width,ht.height,ht.depth),X)if(E.layerUpdates.size>0){const mt=j_(ht.width,ht.height,E.format,E.type);for(const wt of E.layerUpdates){const Ft=ht.data.subarray(wt*mt/ht.data.BYTES_PER_ELEMENT,(wt+1)*mt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,wt,ht.width,ht.height,1,Rt,It,Ft)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,It,ht.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,ht.width,ht.height,ht.depth,0,Rt,It,ht.data);else if(E.isData3DTexture)Qt?(ie&&i.texStorage3D(r.TEXTURE_3D,At,Nt,ht.width,ht.height,ht.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,It,ht.data)):i.texImage3D(r.TEXTURE_3D,0,Nt,ht.width,ht.height,ht.depth,0,Rt,It,ht.data);else if(E.isFramebufferTexture){if(ie)if(Qt)i.texStorage2D(r.TEXTURE_2D,At,Nt,ht.width,ht.height);else{let mt=ht.width,wt=ht.height;for(let Ft=0;Ft<At;Ft++)i.texImage2D(r.TEXTURE_2D,Ft,Nt,mt,wt,0,Rt,It,null),mt>>=1,wt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const mt=r.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),ht.parentNode!==mt){mt.appendChild(ht),x.add(E),mt.onpaint=wt=>{const Ft=wt.changedElements;for(const Mt of x)Ft.includes(Mt.image)&&(Mt.needsUpdate=!0)},mt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ht);else{const Ft=r.RGBA,Mt=r.RGBA,Yt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ft,Mt,Yt,ht)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Kt.length>0){if(Qt&&ie){const mt=we(Kt[0]);i.texStorage2D(r.TEXTURE_2D,At,Nt,mt.width,mt.height)}for(let mt=0,wt=Kt.length;mt<wt;mt++)Ut=Kt[mt],Qt?X&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Rt,It,Ut):i.texImage2D(r.TEXTURE_2D,mt,Nt,Rt,It,Ut);E.generateMipmaps=!1}else if(Qt){if(ie){const mt=we(ht);i.texStorage2D(r.TEXTURE_2D,At,Nt,mt.width,mt.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,It,ht)}else i.texImage2D(r.TEXTURE_2D,0,Nt,Rt,It,ht);M(E)&&z(st),Dt.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function ne(O,E,j){if(E.image.length!==6)return;const st=at(O,E),ft=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+j);const Tt=s.get(ft);if(ft.version!==Tt.__version||st===!0){i.activeTexture(r.TEXTURE0+j);const Dt=be.getPrimaries(be.workingColorSpace),ut=E.colorSpace===hs?null:be.getPrimaries(E.colorSpace),ht=E.colorSpace===hs||Dt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Rt=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let Mt=0;Mt<6;Mt++)!Rt&&!It?Nt[Mt]=S(E.image[Mt],!0,l.maxCubemapSize):Nt[Mt]=It?E.image[Mt].image:E.image[Mt],Nt[Mt]=He(E,Nt[Mt]);const Ut=Nt[0],Kt=c.convert(E.format,E.colorSpace),Qt=c.convert(E.type),ie=R(E.internalFormat,Kt,Qt,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,At=Tt.__version===void 0||st===!0,mt=ft.dataReady;let wt=U(E,Ut);zt(r.TEXTURE_CUBE_MAP,E);let Ft;if(Rt){X&&At&&i.texStorage2D(r.TEXTURE_CUBE_MAP,wt,ie,Ut.width,Ut.height);for(let Mt=0;Mt<6;Mt++){Ft=Nt[Mt].mipmaps;for(let Yt=0;Yt<Ft.length;Yt++){const Vt=Ft[Yt];E.format!==Fi?Kt!==null?X?mt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,Vt.width,Vt.height,Kt,Vt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,ie,Vt.width,Vt.height,0,Vt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,0,0,Vt.width,Vt.height,Kt,Qt,Vt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt,ie,Vt.width,Vt.height,0,Kt,Qt,Vt.data)}}}else{if(Ft=E.mipmaps,X&&At){Ft.length>0&&wt++;const Mt=we(Nt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,wt,ie,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(It){X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Nt[Mt].width,Nt[Mt].height,Kt,Qt,Nt[Mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ie,Nt[Mt].width,Nt[Mt].height,0,Kt,Qt,Nt[Mt].data);for(let Yt=0;Yt<Ft.length;Yt++){const Je=Ft[Yt].image[Mt].image;X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,Je.width,Je.height,Kt,Qt,Je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,ie,Je.width,Je.height,0,Kt,Qt,Je.data)}}else{X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Kt,Qt,Nt[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ie,Kt,Qt,Nt[Mt]);for(let Yt=0;Yt<Ft.length;Yt++){const Vt=Ft[Yt];X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,0,0,Kt,Qt,Vt.image[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Yt+1,ie,Kt,Qt,Vt.image[Mt])}}}M(E)&&z(r.TEXTURE_CUBE_MAP),Tt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function jt(O,E,j,st,ft,Tt){const Dt=c.convert(j.format,j.colorSpace),ut=c.convert(j.type),ht=R(j.internalFormat,Dt,ut,j.normalized,j.colorSpace),Rt=s.get(E),It=s.get(j);if(It.__renderTarget=E,!Rt.__hasExternalTextures){const Nt=Math.max(1,E.width>>Tt),Ut=Math.max(1,E.height>>Tt);ft===r.TEXTURE_3D||ft===r.TEXTURE_2D_ARRAY?i.texImage3D(ft,Tt,ht,Nt,Ut,E.depth,0,Dt,ut,null):i.texImage2D(ft,Tt,ht,Nt,Ut,0,Dt,ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),ln(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,ft,It.__webglTexture,0,qe(E)):(ft===r.TEXTURE_2D||ft>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,ft,It.__webglTexture,Tt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(O,E,j){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const st=E.depthTexture,ft=st&&st.isDepthTexture?st.type:null,Tt=L(E.stencilBuffer,ft),Dt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ln(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(E),Tt,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(E),Tt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Dt,r.RENDERBUFFER,O)}else{const st=E.textures;for(let ft=0;ft<st.length;ft++){const Tt=st[ft],Dt=c.convert(Tt.format,Tt.colorSpace),ut=c.convert(Tt.type),ht=R(Tt.internalFormat,Dt,ut,Tt.normalized,Tt.colorSpace);ln(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(E),ht,E.width,E.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(E),ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ht,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function he(O,E,j){const st=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ft=s.get(E.depthTexture);if(ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),ft.__webglTexture===void 0){ft.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),zt(r.TEXTURE_CUBE_MAP,E.depthTexture);const Rt=c.convert(E.depthTexture.format),It=c.convert(E.depthTexture.type);let Nt;E.depthTexture.format===Ua?Nt=r.DEPTH_COMPONENT24:E.depthTexture.format===Ws&&(Nt=r.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Nt,E.width,E.height,0,Rt,It,null)}}else et(E.depthTexture,0);const Tt=ft.__webglTexture,Dt=qe(E),ut=st?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,ht=E.depthTexture.format===Ws?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ua)ln(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ut,Tt,0,Dt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ut,Tt,0);else if(E.depthTexture.format===Ws)ln(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ut,Tt,0,Dt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ut,Tt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Se(O){const E=s.get(O),j=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const st=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const ft=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",ft)};st.addEventListener("dispose",ft),E.__depthDisposeCallback=ft}E.__boundDepthTexture=st}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let st=0;st<6;st++)he(E.__webglFramebuffer[st],O,st);else{const st=O.texture.mipmaps;st&&st.length>0?he(E.__webglFramebuffer[0],O,0):he(E.__webglFramebuffer,O,0)}else if(j){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=r.createRenderbuffer(),Ze(E.__webglDepthbuffer[st],O,!1);else{const ft=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=E.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,Tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,Tt)}}else{const st=O.texture.mipmaps;if(st&&st.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ze(E.__webglDepthbuffer,O,!1);else{const ft=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,Tt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(O,E,j){const st=s.get(O);E!==void 0&&jt(st.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&Se(O)}function de(O){const E=O.texture,j=s.get(O),st=s.get(E);O.addEventListener("dispose",T);const ft=O.textures,Tt=O.isWebGLCubeRenderTarget===!0,Dt=ft.length>1;if(Dt||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=E.version,f.memory.textures++),Tt){j.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[ut]=[];for(let ht=0;ht<E.mipmaps.length;ht++)j.__webglFramebuffer[ut][ht]=r.createFramebuffer()}else j.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)j.__webglFramebuffer[ut]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Dt)for(let ut=0,ht=ft.length;ut<ht;ut++){const Rt=s.get(ft[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=r.createTexture(),f.memory.textures++)}if(O.samples>0&&ln(O)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ut=0;ut<ft.length;ut++){const ht=ft[ut];j.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[ut]);const Rt=c.convert(ht.format,ht.colorSpace),It=c.convert(ht.type),Nt=R(ht.internalFormat,Rt,It,ht.normalized,ht.colorSpace,O.isXRRenderTarget===!0),Ut=qe(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,Nt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,j.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Ze(j.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Tt){i.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),zt(r.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)jt(j.__webglFramebuffer[ut][ht],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ht);else jt(j.__webglFramebuffer[ut],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);M(E)&&z(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let ut=0,ht=ft.length;ut<ht;ut++){const Rt=ft[ut],It=s.get(Rt);let Nt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Nt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,It.__webglTexture),zt(Nt,Rt),jt(j.__webglFramebuffer,O,Rt,r.COLOR_ATTACHMENT0+ut,Nt,0),M(Rt)&&z(Nt)}i.unbindTexture()}else{let ut=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ut=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ut,st.__webglTexture),zt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)jt(j.__webglFramebuffer[ht],O,E,r.COLOR_ATTACHMENT0,ut,ht);else jt(j.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,ut,0);M(E)&&z(ut),i.unbindTexture()}O.depthBuffer&&Se(O)}function sn(O){const E=O.textures;for(let j=0,st=E.length;j<st;j++){const ft=E[j];if(M(ft)){const Tt=F(O),Dt=s.get(ft).__webglTexture;i.bindTexture(Tt,Dt),z(Tt),i.unbindTexture()}}}const rn=[],on=[];function hn(O){if(O.samples>0){if(ln(O)===!1){const E=O.textures,j=O.width,st=O.height;let ft=r.COLOR_BUFFER_BIT;const Tt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=s.get(O),ut=E.length>1;if(ut)for(let Rt=0;Rt<E.length;Rt++)i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const ht=O.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Rt=0;Rt<E.length;Rt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ft|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ft|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const It=s.get(E[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,It,0)}r.blitFramebuffer(0,0,j,st,0,0,j,st,ft,r.NEAREST),m===!0&&(rn.length=0,on.length=0,rn.push(r.COLOR_ATTACHMENT0+Rt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(rn.push(Tt),on.push(Tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,on)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let Rt=0;Rt<E.length;Rt++){i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);const It=s.get(E[Rt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,It,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function qe(O){return Math.min(l.maxSamples,O.samples)}function ln(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(O){const E=f.render.frame;_.get(O)!==E&&(_.set(O,E),O.update())}function He(O,E){const j=O.colorSpace,st=O.format,ft=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==ru&&j!==hs&&(be.getTransfer(j)===Be?(st!==Fi||ft!==di)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",j)),E}function we(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=I,this.resetTextureUnits=dt,this.getTextureUnits=vt,this.setTextureUnits=J,this.setTexture2D=et,this.setTexture2DArray=gt,this.setTexture3D=Et,this.setTextureCube=P,this.rebindTextures=Me,this.setupRenderTarget=de,this.updateRenderTargetMipmap=sn,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=ln,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function qA(r,t){function i(s,l=hs){let c;const f=be.getTransfer(l);if(s===di)return r.UNSIGNED_BYTE;if(s===sp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ov)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Pv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Lv)return r.BYTE;if(s===Nv)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===ap)return r.INT;if(s===ta)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Da)return r.HALF_FLOAT;if(s===zv)return r.ALPHA;if(s===Fv)return r.RGB;if(s===Fi)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===Ws)return r.DEPTH_STENCIL;if(s===Iv)return r.RED;if(s===op)return r.RED_INTEGER;if(s===qs)return r.RG;if(s===lp)return r.RG_INTEGER;if(s===cp)return r.RGBA_INTEGER;if(s===Qc||s===Jc||s===$c||s===tu)if(f===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Md||s===yd||s===bd||s===Ed)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Md)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===au||s===Dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Td||s===Ad)return f===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Rd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Cd)return c.COMPRESSED_R11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===au)return c.COMPRESSED_RG11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Fd||s===Id||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ud)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ld)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Od)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Id)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return f===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wd||s===Yd||s===qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Wd)return f===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===Kd||s===su||s===jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===su)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
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

}`;class jA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Zv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new na({vertexShader:ZA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ea(new mu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends _s{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,_=null,x=null,g=null,y=null,b=null;const D=typeof XRWebGLBinding<"u",S=new jA,M={},z=i.getContextAttributes();let F=null,R=null;const L=[],U=[],N=new ae;let T=null;const A=new Ai;A.viewport=new nn;const G=new Ai;G.viewport=new nn;const V=[A,G],K=new sb;let dt=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let St=L[at];return St===void 0&&(St=new Fh,L[at]=St),St.getTargetRaySpace()},this.getControllerGrip=function(at){let St=L[at];return St===void 0&&(St=new Fh,L[at]=St),St.getGripSpace()},this.getHand=function(at){let St=L[at];return St===void 0&&(St=new Fh,L[at]=St),St.getHandSpace()};function J(at){const St=U.indexOf(at.inputSource);if(St===-1)return;const yt=L[St];yt!==void 0&&(yt.update(at.inputSource,at.frame,d||f),yt.dispatchEvent({type:at.type,data:at.inputSource}))}function I(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let at=0;at<L.length;at++){const St=U[at];St!==null&&(U[at]=null,L[at].disconnect(St))}dt=null,vt=null,S.reset();for(const at in M)delete M[at];t.setRenderTarget(F),y=null,g=null,x=null,l=null,R=null,zt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),z.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(N),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ht=null,ne=null;z.depth&&(ne=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=z.stencil?Ws:Ua,Ht=z.stencil?sl:ta);const jt={colorFormat:i.RGBA8,depthFormat:ne,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(jt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new $i(g.textureWidth,g.textureHeight,{format:Fi,type:di,depthTexture:new Kr(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const yt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new $i(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:di,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),zt.setContext(l),zt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(at){for(let St=0;St<at.removed.length;St++){const yt=at.removed[St],Ht=U.indexOf(yt);Ht>=0&&(U[Ht]=null,L[Ht].disconnect(yt))}for(let St=0;St<at.added.length;St++){const yt=at.added[St];let Ht=U.indexOf(yt);if(Ht===-1){for(let jt=0;jt<L.length;jt++)if(jt>=U.length){U.push(yt),Ht=jt;break}else if(U[jt]===null){U[jt]=yt,Ht=jt;break}if(Ht===-1)break}const ne=L[Ht];ne&&ne.connect(yt)}}const et=new Q,gt=new Q;function Et(at,St,yt){et.setFromMatrixPosition(St.matrixWorld),gt.setFromMatrixPosition(yt.matrixWorld);const Ht=et.distanceTo(gt),ne=St.projectionMatrix.elements,jt=yt.projectionMatrix.elements,Ze=ne[14]/(ne[10]-1),he=ne[14]/(ne[10]+1),Se=(ne[9]+1)/ne[5],Me=(ne[9]-1)/ne[5],de=(ne[8]-1)/ne[0],sn=(jt[8]+1)/jt[0],rn=Ze*de,on=Ze*sn,hn=Ht/(-de+sn),qe=hn*-de;if(St.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(qe),at.translateZ(hn),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),ne[10]===-1)at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const ln=Ze+hn,Y=he+hn,He=rn-qe,we=on+(Ht-qe),O=Se*he/Y*ln,E=Me*he/Y*ln;at.projectionMatrix.makePerspective(He,we,O,E,ln,Y),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function P(at,St){St===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(St.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let St=at.near,yt=at.far;S.texture!==null&&(S.depthNear>0&&(St=S.depthNear),S.depthFar>0&&(yt=S.depthFar)),K.near=G.near=A.near=St,K.far=G.far=A.far=yt,(dt!==K.near||vt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),dt=K.near,vt=K.far),K.layers.mask=at.layers.mask|6,A.layers.mask=K.layers.mask&-5,G.layers.mask=K.layers.mask&-3;const Ht=at.parent,ne=K.cameras;P(K,Ht);for(let jt=0;jt<ne.length;jt++)P(ne[jt],Ht);ne.length===2?Et(K,A,G):K.projectionMatrix.copy(A.projectionMatrix),Z(at,K,Ht)};function Z(at,St,yt){yt===null?at.matrix.copy(St.matrixWorld):(at.matrix.copy(yt.matrixWorld),at.matrix.invert(),at.matrix.multiply(St.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Jd*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(at){m=at,g!==null&&(g.fixedFoveation=at),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=at)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(at){return M[at]};let bt=null;function Ct(at,St){if(_=St.getViewerPose(d||f),b=St,_!==null){const yt=_.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let Ht=!1;yt.length!==K.cameras.length&&(K.cameras.length=0,Ht=!0);for(let he=0;he<yt.length;he++){const Se=yt[he];let Me=null;if(y!==null)Me=y.getViewport(Se);else{const sn=x.getViewSubImage(g,Se);Me=sn.viewport,he===0&&(t.setRenderTargetTextures(R,sn.colorTexture,sn.depthStencilTexture),t.setRenderTarget(R))}let de=V[he];de===void 0&&(de=new Ai,de.layers.enable(he),de.viewport=new nn,V[he]=de),de.matrix.fromArray(Se.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Se.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Me.x,Me.y,Me.width,Me.height),he===0&&(K.matrix.copy(de.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ht===!0&&K.cameras.push(de)}const ne=l.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=s.getBinding();const he=x.getDepthInformation(yt[0]);he&&he.isValid&&he.texture&&S.init(he,l.renderState)}if(ne&&ne.includes("camera-access")&&D){t.state.unbindTexture(),x=s.getBinding();for(let he=0;he<yt.length;he++){const Se=yt[he].camera;if(Se){let Me=M[Se];Me||(Me=new Zv,M[Se]=Me);const de=x.getCameraImage(Se);Me.sourceTexture=de}}}}for(let yt=0;yt<L.length;yt++){const Ht=U[yt],ne=L[yt];Ht!==null&&ne!==void 0&&ne.update(Ht,St,d||f)}bt&&bt(at,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),b=null}const zt=new Jv;zt.setAnimationLoop(Ct),this.setAnimationLoop=function(at){bt=at},this.dispose=function(){}}}const JA=new an,sx=new re;sx.set(-1,0,0,0,1,0,0,0,1);function $A(r,t){function i(S,M){S.matrixAutoUpdate===!0&&S.updateMatrix(),M.value.copy(S.matrix)}function s(S,M){M.color.getRGB(S.fogColor.value,Kv(r)),M.isFog?(S.fogNear.value=M.near,S.fogFar.value=M.far):M.isFogExp2&&(S.fogDensity.value=M.density)}function l(S,M,z,F,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(S,M):M.isMeshLambertMaterial?(c(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(S,M),x(S,M)):M.isMeshPhongMaterial?(c(S,M),_(S,M),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(S,M),g(S,M),M.isMeshPhysicalMaterial&&y(S,M,R)):M.isMeshMatcapMaterial?(c(S,M),b(S,M)):M.isMeshDepthMaterial?c(S,M):M.isMeshDistanceMaterial?(c(S,M),D(S,M)):M.isMeshNormalMaterial?c(S,M):M.isLineBasicMaterial?(f(S,M),M.isLineDashedMaterial&&p(S,M)):M.isPointsMaterial?m(S,M,z,F):M.isSpriteMaterial?d(S,M):M.isShadowMaterial?(S.color.value.copy(M.color),S.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(S,M){S.opacity.value=M.opacity,M.color&&S.diffuse.value.copy(M.color),M.emissive&&S.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(S.map.value=M.map,i(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.bumpMap&&(S.bumpMap.value=M.bumpMap,i(M.bumpMap,S.bumpMapTransform),S.bumpScale.value=M.bumpScale,M.side===$n&&(S.bumpScale.value*=-1)),M.normalMap&&(S.normalMap.value=M.normalMap,i(M.normalMap,S.normalMapTransform),S.normalScale.value.copy(M.normalScale),M.side===$n&&S.normalScale.value.negate()),M.displacementMap&&(S.displacementMap.value=M.displacementMap,i(M.displacementMap,S.displacementMapTransform),S.displacementScale.value=M.displacementScale,S.displacementBias.value=M.displacementBias),M.emissiveMap&&(S.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,S.emissiveMapTransform)),M.specularMap&&(S.specularMap.value=M.specularMap,i(M.specularMap,S.specularMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest);const z=t.get(M),F=z.envMap,R=z.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(R)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(sx),S.reflectivity.value=M.reflectivity,S.ior.value=M.ior,S.refractionRatio.value=M.refractionRatio),M.lightMap&&(S.lightMap.value=M.lightMap,S.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,S.lightMapTransform)),M.aoMap&&(S.aoMap.value=M.aoMap,S.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,S.aoMapTransform))}function f(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,M.map&&(S.map.value=M.map,i(M.map,S.mapTransform))}function p(S,M){S.dashSize.value=M.dashSize,S.totalSize.value=M.dashSize+M.gapSize,S.scale.value=M.scale}function m(S,M,z,F){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.size.value=M.size*z,S.scale.value=F*.5,M.map&&(S.map.value=M.map,i(M.map,S.uvTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function d(S,M){S.diffuse.value.copy(M.color),S.opacity.value=M.opacity,S.rotation.value=M.rotation,M.map&&(S.map.value=M.map,i(M.map,S.mapTransform)),M.alphaMap&&(S.alphaMap.value=M.alphaMap,i(M.alphaMap,S.alphaMapTransform)),M.alphaTest>0&&(S.alphaTest.value=M.alphaTest)}function _(S,M){S.specular.value.copy(M.specular),S.shininess.value=Math.max(M.shininess,1e-4)}function x(S,M){M.gradientMap&&(S.gradientMap.value=M.gradientMap)}function g(S,M){S.metalness.value=M.metalness,M.metalnessMap&&(S.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,S.metalnessMapTransform)),S.roughness.value=M.roughness,M.roughnessMap&&(S.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,S.roughnessMapTransform)),M.envMap&&(S.envMapIntensity.value=M.envMapIntensity)}function y(S,M,z){S.ior.value=M.ior,M.sheen>0&&(S.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),S.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(S.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,S.sheenColorMapTransform)),M.sheenRoughnessMap&&(S.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,S.sheenRoughnessMapTransform))),M.clearcoat>0&&(S.clearcoat.value=M.clearcoat,S.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(S.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,S.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(S.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===$n&&S.clearcoatNormalScale.value.negate())),M.dispersion>0&&(S.dispersion.value=M.dispersion),M.iridescence>0&&(S.iridescence.value=M.iridescence,S.iridescenceIOR.value=M.iridescenceIOR,S.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(S.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,S.iridescenceMapTransform)),M.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),M.transmission>0&&(S.transmission.value=M.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),M.transmissionMap&&(S.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,S.transmissionMapTransform)),S.thickness.value=M.thickness,M.thicknessMap&&(S.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=M.attenuationDistance,S.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(S.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(S.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=M.specularIntensity,S.specularColor.value.copy(M.specularColor),M.specularColorMap&&(S.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,S.specularColorMapTransform)),M.specularIntensityMap&&(S.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,M){M.matcap&&(S.matcap.value=M.matcap)}function D(S,M){const z=t.get(M).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function tR(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,L){const U=L.program;s.uniformBlockBinding(R,U)}function d(R,L){let U=l[R.id];U===void 0&&(S(R),U=_(R),l[R.id]=U,R.addEventListener("dispose",z));const N=L.program;s.updateUBOMapping(R,N);const T=t.render.frame;c[R.id]!==T&&(g(R),c[R.id]=T)}function _(R){const L=x();R.__bindingPointIndex=L;const U=r.createBuffer(),N=R.__size,T=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,N,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function x(){for(let R=0;R<p;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=l[R.id],U=R.uniforms,N=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let T=0,A=U.length;T<A;T++){const G=U[T];if(Array.isArray(G))for(let V=0,K=G.length;V<K;V++)y(G[V],T,V,N);else y(G,T,0,N)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,L,U,N){if(D(R,L,U,N)===!0){const T=R.__offset,A=R.value;if(Array.isArray(A)){let G=0;for(let V=0;V<A.length;V++){const K=A[V],dt=M(K);b(K,R.__data,G),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(G+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(A,R.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,R.__data)}}function b(R,L,U){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,U)}function D(R,L,U,N){const T=R.value,A=L+"_"+U;if(N[A]===void 0)return typeof T=="number"||typeof T=="boolean"?N[A]=T:ArrayBuffer.isView(T)?N[A]=T.slice():N[A]=T.clone(),!0;{const G=N[A];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return N[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(G.equals(T)===!1)return G.copy(T),!0}}return!1}function S(R){const L=R.uniforms;let U=0;const N=16;for(let A=0,G=L.length;A<G;A++){const V=Array.isArray(L[A])?L[A]:[L[A]];for(let K=0,dt=V.length;K<dt;K++){const vt=V[K],J=Array.isArray(vt.value)?vt.value:[vt.value];for(let I=0,H=J.length;I<H;I++){const et=J[I],gt=M(et),Et=U%N,P=Et%gt.boundary,Z=Et+P;U+=P,Z!==0&&N-Z<gt.storage&&(U+=N-Z),vt.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),vt.__offset=U,U+=gt.storage}}}const T=U%N;return T>0&&(U+=N-T),R.__size=U,R.__cache={},this}function M(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",R),L}function z(R){const L=R.target;L.removeEventListener("dispose",z);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function F(){for(const R in l)r.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:d,dispose:F}}const eR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function nR(){return qi===null&&(qi=new Hy(eR,16,16,qs,Da),qi.name="DFG_LUT",qi.minFilter=Hn,qi.magFilter=Hn,qi.wrapS=Ra,qi.wrapT=Ra,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class iR{constructor(t={}){const{canvas:i=gy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=di}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const D=y,S=new Set([cp,lp,op]),M=new Set([di,ta,al,sl,sp,rp]),z=new Uint32Array(4),F=new Int32Array(4),R=new Q;let L=null,U=null;const N=[],T=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let V=!1,K=null,dt=null,vt=null,J=null;this._outputColorSpace=Ti;let I=0,H=0,et=null,gt=-1,Et=null;const P=new nn,Z=new nn;let bt=null;const Ct=new fe(0);let zt=0,at=i.width,St=i.height,yt=1,Ht=null,ne=null;const jt=new nn(0,0,at,St),Ze=new nn(0,0,at,St);let he=!1;const Se=new mp;let Me=!1,de=!1;const sn=new an,rn=new Q,on=new nn,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function ln(){return et===null?yt:1}let Y=s;function He(C,W){return i.getContext(C,W)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",Je,!1),i.addEventListener("webglcontextrestored",Le,!1),i.addEventListener("webglcontextcreationerror",ti,!1),Y===null){const W="webgl2";if(Y=He(W,C),Y===null)throw He(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Ee("WebGLRenderer: "+C.message),C}let we,O,E,j,st,ft,Tt,Dt,ut,ht,Rt,It,Nt,Ut,Kt,Qt,ie,X,At,mt,wt,Ft,Mt;function Yt(){we=new n1(Y),we.init(),wt=new qA(Y,we),O=new ZT(Y,we,t,wt),E=new WA(Y,we),O.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),dt=Y.createFramebuffer(),vt=Y.createFramebuffer(),J=Y.createFramebuffer(),j=new s1(Y),st=new UA,ft=new YA(Y,we,E,st,O,wt,j),Tt=new e1(G),Dt=new cb(Y),Ft=new YT(Y,Dt),ut=new i1(Y,Dt,j,Ft),ht=new o1(Y,ut,Dt,Ft,j),X=new r1(Y,O,ft),Kt=new KT(st),Rt=new DA(G,Tt,we,O,Ft,Kt),It=new $A(G,st),Nt=new NA,Ut=new BA(we),ie=new WT(G,Tt,E,ht,b,m),Qt=new XA(G,ht,O),Mt=new tR(Y,j,O,E),At=new qT(Y,we,j),mt=new a1(Y,we,j),j.programs=Rt.programs,G.capabilities=O,G.extensions=we,G.properties=st,G.renderLists=Nt,G.shadowMap=Qt,G.state=E,G.info=j}Yt(),D!==di&&(A=new c1(D,i.width,i.height,p,l,c));const Vt=new QA(G,Y);this.xr=Vt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(C){C!==void 0&&(yt=C,this.setSize(at,St,!1))},this.getSize=function(C){return C.set(at,St)},this.setSize=function(C,W,rt=!0){if(Vt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}at=C,St=W,i.width=Math.floor(C*yt),i.height=Math.floor(W*yt),rt===!0&&(i.style.width=C+"px",i.style.height=W+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(at*yt,St*yt).floor()},this.setDrawingBufferSize=function(C,W,rt){at=C,St=W,yt=rt,i.width=Math.floor(C*rt),i.height=Math.floor(W*rt),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(D===di){Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(jt)},this.setViewport=function(C,W,rt,nt){C.isVector4?jt.set(C.x,C.y,C.z,C.w):jt.set(C,W,rt,nt),E.viewport(P.copy(jt).multiplyScalar(yt).round())},this.getScissor=function(C){return C.copy(Ze)},this.setScissor=function(C,W,rt,nt){C.isVector4?Ze.set(C.x,C.y,C.z,C.w):Ze.set(C,W,rt,nt),E.scissor(Z.copy(Ze).multiplyScalar(yt).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(C){E.setScissorTest(he=C)},this.setOpaqueSort=function(C){Ht=C},this.setTransparentSort=function(C){ne=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,rt=!0){let nt=0;if(C){let it=!1;if(et!==null){const Ot=et.texture.format;it=S.has(Ot)}if(it){const Ot=et.texture.type,Gt=M.has(Ot),Lt=ie.getClearColor(),Xt=ie.getClearAlpha(),kt=Lt.r,Jt=Lt.g,oe=Lt.b;Gt?(z[0]=kt,z[1]=Jt,z[2]=oe,z[3]=Xt,Y.clearBufferuiv(Y.COLOR,0,z)):(F[0]=kt,F[1]=Jt,F[2]=oe,F[3]=Xt,Y.clearBufferiv(Y.COLOR,0,F))}else nt|=Y.COLOR_BUFFER_BIT}W&&(nt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(nt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&Y.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),K=C},this.dispose=function(){i.removeEventListener("webglcontextlost",Je,!1),i.removeEventListener("webglcontextrestored",Le,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ie.dispose(),Nt.dispose(),Ut.dispose(),st.dispose(),Tt.dispose(),ht.dispose(),Ft.dispose(),Mt.dispose(),Rt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",mn),Vt.removeEventListener("sessionend",Dn),Xn.stop()};function Je(C){C.preventDefault(),b_("WebGLRenderer: Context Lost."),V=!0}function Le(){b_("WebGLRenderer: Context Restored."),V=!1;const C=j.autoReset,W=Qt.enabled,rt=Qt.autoUpdate,nt=Qt.needsUpdate,it=Qt.type;Yt(),j.autoReset=C,Qt.enabled=W,Qt.autoUpdate=rt,Qt.needsUpdate=nt,Qt.type=it}function ti(C){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ei(C){const W=C.target;W.removeEventListener("dispose",ei),$r(W)}function $r(C){to(C),st.remove(C)}function to(C){const W=st.get(C).programs;W!==void 0&&(W.forEach(function(rt){Rt.releaseProgram(rt)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,rt,nt,it,Ot){W===null&&(W=hn);const Gt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Lt=Oa(C,W,rt,nt,it);E.setMaterial(nt,Gt);let Xt=rt.index,kt=1;if(nt.wireframe===!0){if(Xt=ut.getWireframeAttribute(rt),Xt===void 0)return;kt=2}const Jt=rt.drawRange,oe=rt.attributes.position;let Zt=Jt.start*kt,Te=(Jt.start+Jt.count)*kt;Ot!==null&&(Zt=Math.max(Zt,Ot.start*kt),Te=Math.min(Te,(Ot.start+Ot.count)*kt)),Xt!==null?(Zt=Math.max(Zt,0),Te=Math.min(Te,Xt.count)):oe!=null&&(Zt=Math.max(Zt,0),Te=Math.min(Te,oe.count));const $e=Te-Zt;if($e<0||$e===1/0)return;Ft.setup(it,nt,Lt,rt,Xt);let We,Ne=At;if(Xt!==null&&(We=Dt.get(Xt),Ne=mt,Ne.setIndex(We)),it.isMesh)nt.wireframe===!0?(E.setLineWidth(nt.wireframeLinewidth*ln()),Ne.setMode(Y.LINES)):Ne.setMode(Y.TRIANGLES);else if(it.isLine){let Oe=nt.linewidth;Oe===void 0&&(Oe=1),E.setLineWidth(Oe*ln()),it.isLineSegments?Ne.setMode(Y.LINES):it.isLineLoop?Ne.setMode(Y.LINE_LOOP):Ne.setMode(Y.LINE_STRIP)}else it.isPoints?Ne.setMode(Y.POINTS):it.isSprite&&Ne.setMode(Y.TRIANGLES);if(it.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Ne.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Oe=it._multiDrawStarts,Bt=it._multiDrawCounts,zn=it._multiDrawCount,pe=Xt?Dt.get(Xt).bytesPerElement:1,yn=st.get(nt).currentProgram.getUniforms();for(let ni=0;ni<zn;ni++)yn.setValue(Y,"_gl_DrawID",ni),Ne.render(Oe[ni]/pe,Bt[ni])}else if(it.isInstancedMesh)Ne.renderInstances(Zt,$e,it.count);else if(rt.isInstancedBufferGeometry){const Oe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Bt=Math.min(rt.instanceCount,Oe);Ne.renderInstances(Zt,$e,Bt)}else Ne.render(Zt,$e)};function eo(C,W,rt){C.transparent===!0&&C.side===Ki&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,Na(C,W,rt),C.side=ps,C.needsUpdate=!0,Na(C,W,rt),C.side=Ki):Na(C,W,rt)}this.compile=function(C,W,rt=null){rt===null&&(rt=C),U=Ut.get(rt),U.init(W),T.push(U),rt.traverseVisible(function(it){it.isLight&&it.layers.test(W.layers)&&(U.pushLight(it),it.castShadow&&U.pushShadow(it))}),C!==rt&&C.traverseVisible(function(it){it.isLight&&it.layers.test(W.layers)&&(U.pushLight(it),it.castShadow&&U.pushShadow(it))}),U.setupLights();const nt=new Set;return C.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Ot=it.material;if(Ot)if(Array.isArray(Ot))for(let Gt=0;Gt<Ot.length;Gt++){const Lt=Ot[Gt];eo(Lt,rt,it),nt.add(Lt)}else eo(Ot,rt,it),nt.add(Ot)}),U=T.pop(),nt},this.compileAsync=function(C,W,rt=null){const nt=this.compile(C,W,rt);return new Promise(it=>{function Ot(){if(nt.forEach(function(Gt){st.get(Gt).currentProgram.isReady()&&nt.delete(Gt)}),nt.size===0){it(C);return}setTimeout(Ot,10)}we.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Zs=null;function Ii(C){Zs&&Zs(C)}function mn(){Xn.stop()}function Dn(){Xn.start()}const Xn=new Jv;Xn.setAnimationLoop(Ii),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(C){Zs=C,Vt.setAnimationLoop(C),C===null?Xn.stop():Xn.start()},Vt.addEventListener("sessionstart",mn),Vt.addEventListener("sessionend",Dn),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;K!==null&&K.renderStart(C,W);const rt=Vt.enabled===!0&&Vt.isPresenting===!0,nt=A!==null&&(et===null||rt)&&A.begin(G,et);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(W),W=Vt.getCamera()),C.isScene===!0&&C.onBeforeRender(G,C,W,et),U=Ut.get(C,T.length),U.init(W),U.state.textureUnits=ft.getTextureUnits(),T.push(U),sn.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Se.setFromProjectionMatrix(sn,Qi,W.reversedDepth),de=this.localClippingEnabled,Me=Kt.init(this.clippingPlanes,de),L=Nt.get(C,N.length),L.init(),N.push(L),Vt.enabled===!0&&Vt.isPresenting===!0){const Gt=G.xr.getDepthSensingMesh();Gt!==null&&vs(Gt,W,-1/0,G.sortObjects)}vs(C,W,0,G.sortObjects),L.finish(),G.sortObjects===!0&&L.sort(Ht,ne,W.reversedDepth),qe=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,qe&&ie.addToRenderList(L,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&Kt.beginShadows();const it=U.state.shadowsArray;if(Qt.render(it,C,W),Me===!0&&Kt.endShadows(),(nt&&A.hasRenderPass())===!1){const Gt=L.opaque,Lt=L.transmissive;if(U.setupLights(),W.isArrayCamera){const Xt=W.cameras;if(Lt.length>0)for(let kt=0,Jt=Xt.length;kt<Jt;kt++){const oe=Xt[kt];fl(Gt,Lt,C,oe)}qe&&ie.render(C);for(let kt=0,Jt=Xt.length;kt<Jt;kt++){const oe=Xt[kt];ul(L,C,oe,oe.viewport)}}else Lt.length>0&&fl(Gt,Lt,C,W),qe&&ie.render(C),ul(L,C,W)}et!==null&&H===0&&(ft.updateMultisampleRenderTarget(et),ft.updateRenderTargetMipmap(et)),nt&&A.end(G),C.isScene===!0&&C.onAfterRender(G,C,W),Ft.resetDefaultState(),gt=-1,Et=null,T.pop(),T.length>0?(U=T[T.length-1],ft.setTextureUnits(U.state.textureUnits),Me===!0&&Kt.setGlobalState(G.clippingPlanes,U.state.camera)):U=null,N.pop(),N.length>0?L=N[N.length-1]:L=null,K!==null&&K.renderEnd()};function vs(C,W,rt,nt){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLightProbeGrid)U.pushLightProbeGrid(C);else if(C.isLight)U.pushLight(C),C.castShadow&&U.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Se.intersectsSprite(C)){nt&&on.setFromMatrixPosition(C.matrixWorld).applyMatrix4(sn);const Gt=ht.update(C),Lt=C.material;Lt.visible&&L.push(C,Gt,Lt,rt,on.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Se.intersectsObject(C))){const Gt=ht.update(C),Lt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),on.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),on.copy(Gt.boundingSphere.center)),on.applyMatrix4(C.matrixWorld).applyMatrix4(sn)),Array.isArray(Lt)){const Xt=Gt.groups;for(let kt=0,Jt=Xt.length;kt<Jt;kt++){const oe=Xt[kt],Zt=Lt[oe.materialIndex];Zt&&Zt.visible&&L.push(C,Gt,Zt,rt,on.z,oe)}}else Lt.visible&&L.push(C,Gt,Lt,rt,on.z,null)}}const Ot=C.children;for(let Gt=0,Lt=Ot.length;Gt<Lt;Gt++)vs(Ot[Gt],W,rt,nt)}function ul(C,W,rt,nt){const{opaque:it,transmissive:Ot,transparent:Gt}=C;U.setupLightsView(rt),Me===!0&&Kt.setGlobalState(G.clippingPlanes,rt),nt&&E.viewport(P.copy(nt)),it.length>0&&xs(it,W,rt),Ot.length>0&&xs(Ot,W,rt),Gt.length>0&&xs(Gt,W,rt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function fl(C,W,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[nt.id]===void 0){const Zt=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[nt.id]=new $i(1,1,{generateMipmaps:!0,type:Zt?Da:di,minFilter:Xs,samples:Math.max(4,O.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Ot=U.state.transmissionRenderTarget[nt.id],Gt=nt.viewport||P;Ot.setSize(Gt.z*G.transmissionResolutionScale,Gt.w*G.transmissionResolutionScale);const Lt=G.getRenderTarget(),Xt=G.getActiveCubeFace(),kt=G.getActiveMipmapLevel();G.setRenderTarget(Ot),G.getClearColor(Ct),zt=G.getClearAlpha(),zt<1&&G.setClearColor(16777215,.5),G.clear(),qe&&ie.render(rt);const Jt=G.toneMapping;G.toneMapping=Ji;const oe=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),U.setupLightsView(nt),Me===!0&&Kt.setGlobalState(G.clippingPlanes,nt),xs(C,rt,nt),ft.updateMultisampleRenderTarget(Ot),ft.updateRenderTargetMipmap(Ot),we.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Te=0,$e=W.length;Te<$e;Te++){const We=W[Te],{object:Ne,geometry:Oe,material:Bt,group:zn}=We;if(Bt.side===Ki&&Ne.layers.test(nt.layers)){const pe=Bt.side;Bt.side=$n,Bt.needsUpdate=!0,La(Ne,rt,nt,Oe,Bt,zn),Bt.side=pe,Bt.needsUpdate=!0,Zt=!0}}Zt===!0&&(ft.updateMultisampleRenderTarget(Ot),ft.updateRenderTargetMipmap(Ot))}G.setRenderTarget(Lt,Xt,kt),G.setClearColor(Ct,zt),oe!==void 0&&(nt.viewport=oe),G.toneMapping=Jt}function xs(C,W,rt){const nt=W.isScene===!0?W.overrideMaterial:null;for(let it=0,Ot=C.length;it<Ot;it++){const Gt=C[it],{object:Lt,geometry:Xt,group:kt}=Gt;let Jt=Gt.material;Jt.allowOverride===!0&&nt!==null&&(Jt=nt),Lt.layers.test(rt.layers)&&La(Lt,W,rt,Xt,Jt,kt)}}function La(C,W,rt,nt,it,Ot){C.onBeforeRender(G,W,rt,nt,it,Ot),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),it.onBeforeRender(G,W,rt,nt,C,Ot),it.transparent===!0&&it.side===Ki&&it.forceSinglePass===!1?(it.side=$n,it.needsUpdate=!0,G.renderBufferDirect(rt,W,nt,it,C,Ot),it.side=ps,it.needsUpdate=!0,G.renderBufferDirect(rt,W,nt,it,C,Ot),it.side=Ki):G.renderBufferDirect(rt,W,nt,it,C,Ot),C.onAfterRender(G,W,rt,nt,it,Ot)}function Na(C,W,rt){W.isScene!==!0&&(W=hn);const nt=st.get(C),it=U.state.lights,Ot=U.state.shadowsArray,Gt=it.state.version,Lt=Rt.getParameters(C,it.state,Ot,W,rt,U.state.lightProbeGridArray),Xt=Rt.getProgramCacheKey(Lt);let kt=nt.programs;nt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,nt.fog=W.fog;const Jt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;nt.envMap=Tt.get(C.envMap||nt.environment,Jt),nt.envMapRotation=nt.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,kt===void 0&&(C.addEventListener("dispose",ei),kt=new Map,nt.programs=kt);let oe=kt.get(Xt);if(oe!==void 0){if(nt.currentProgram===oe&&nt.lightsStateVersion===Gt)return aa(C,Lt),oe}else Lt.uniforms=Rt.getUniforms(C),K!==null&&C.isNodeMaterial&&K.build(C,rt,Lt),C.onBeforeCompile(Lt,G),oe=Rt.acquireProgram(Lt,Xt),kt.set(Xt,oe),nt.uniforms=Lt.uniforms;const Zt=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=Kt.uniform),aa(C,Lt),nt.needsLights=hl(C),nt.lightsStateVersion=Gt,nt.needsLights&&(Zt.ambientLightColor.value=it.state.ambient,Zt.lightProbe.value=it.state.probe,Zt.directionalLights.value=it.state.directional,Zt.directionalLightShadows.value=it.state.directionalShadow,Zt.spotLights.value=it.state.spot,Zt.spotLightShadows.value=it.state.spotShadow,Zt.rectAreaLights.value=it.state.rectArea,Zt.ltc_1.value=it.state.rectAreaLTC1,Zt.ltc_2.value=it.state.rectAreaLTC2,Zt.pointLights.value=it.state.point,Zt.pointLightShadows.value=it.state.pointShadow,Zt.hemisphereLights.value=it.state.hemi,Zt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Zt.spotLightMatrix.value=it.state.spotLightMatrix,Zt.spotLightMap.value=it.state.spotLightMap,Zt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=U.state.lightProbeGridArray.length>0,nt.currentProgram=oe,nt.uniformsList=null,oe}function ia(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=nu.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function aa(C,W){const rt=st.get(C);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function Ss(C,W){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(W.matrixWorld);for(let rt=0,nt=C.length;rt<nt;rt++){const it=C[rt];if(it.texture!==null&&it.boundingBox.containsPoint(R))return it}return null}function Oa(C,W,rt,nt,it){W.isScene!==!0&&(W=hn),ft.resetTextureUnits();const Ot=W.fog,Gt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?W.environment:null,Lt=et===null?G.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:be.workingColorSpace,Xt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,kt=Tt.get(nt.envMap||Gt,Xt),Jt=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,oe=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Zt=!!rt.morphAttributes.position,Te=!!rt.morphAttributes.normal,$e=!!rt.morphAttributes.color;let We=Ji;nt.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(We=G.toneMapping);const Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Oe=Ne!==void 0?Ne.length:0,Bt=st.get(nt),zn=U.state.lights;if(Me===!0&&(de===!0||C!==Et)){const Ue=C===Et&&nt.id===gt;Kt.setState(nt,C,Ue)}let pe=!1;nt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==zn.state.version||Bt.outputColorSpace!==Lt||it.isBatchedMesh&&Bt.batching===!1||!it.isBatchedMesh&&Bt.batching===!0||it.isBatchedMesh&&Bt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Bt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Bt.instancing===!1||!it.isInstancedMesh&&Bt.instancing===!0||it.isSkinnedMesh&&Bt.skinning===!1||!it.isSkinnedMesh&&Bt.skinning===!0||it.isInstancedMesh&&Bt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Bt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Bt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Bt.instancingMorph===!1&&it.morphTexture!==null||Bt.envMap!==kt||nt.fog===!0&&Bt.fog!==Ot||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Kt.numPlanes||Bt.numIntersection!==Kt.numIntersection)||Bt.vertexAlphas!==Jt||Bt.vertexTangents!==oe||Bt.morphTargets!==Zt||Bt.morphNormals!==Te||Bt.morphColors!==$e||Bt.toneMapping!==We||Bt.morphTargetsCount!==Oe||!!Bt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Bt.__version=nt.version);let yn=Bt.currentProgram;pe===!0&&(yn=Na(nt,W,it),K&&nt.isNodeMaterial&&K.onUpdateProgram(nt,yn,Bt));let ni=!1,Ci=!1,ii=!1;const Pe=yn.getUniforms(),tn=Bt.uniforms;if(E.useProgram(yn.program)&&(ni=!0,Ci=!0,ii=!0),nt.id!==gt&&(gt=nt.id,Ci=!0),Bt.needsLights){const Ue=Ss(U.state.lightProbeGridArray,it);Bt.lightProbeGrid!==Ue&&(Bt.lightProbeGrid=Ue,Ci=!0)}if(ni||Et!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pe.setValue(Y,"projectionMatrix",C.projectionMatrix),Pe.setValue(Y,"viewMatrix",C.matrixWorldInverse);const Bi=Pe.map.cameraPosition;Bi!==void 0&&Bi.setValue(Y,rn.setFromMatrixPosition(C.matrixWorld)),O.logarithmicDepthBuffer&&Pe.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Pe.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),Et!==C&&(Et=C,Ci=!0,ii=!0)}if(Bt.needsLights&&(zn.state.directionalShadowMap.length>0&&Pe.setValue(Y,"directionalShadowMap",zn.state.directionalShadowMap,ft),zn.state.spotShadowMap.length>0&&Pe.setValue(Y,"spotShadowMap",zn.state.spotShadowMap,ft),zn.state.pointShadowMap.length>0&&Pe.setValue(Y,"pointShadowMap",zn.state.pointShadowMap,ft)),it.isSkinnedMesh){Pe.setOptional(Y,it,"bindMatrix"),Pe.setOptional(Y,it,"bindMatrixInverse");const Ue=it.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),Pe.setValue(Y,"boneTexture",Ue.boneTexture,ft))}it.isBatchedMesh&&(Pe.setOptional(Y,it,"batchingTexture"),Pe.setValue(Y,"batchingTexture",it._matricesTexture,ft),Pe.setOptional(Y,it,"batchingIdTexture"),Pe.setValue(Y,"batchingIdTexture",it._indirectTexture,ft),Pe.setOptional(Y,it,"batchingColorTexture"),it._colorsTexture!==null&&Pe.setValue(Y,"batchingColorTexture",it._colorsTexture,ft));const wi=rt.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&X.update(it,rt,yn),(Ci||Bt.receiveShadow!==it.receiveShadow)&&(Bt.receiveShadow=it.receiveShadow,Pe.setValue(Y,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&W.environment!==null&&(tn.envMapIntensity.value=W.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=nR()),Ci){if(Pe.setValue(Y,"toneMappingExposure",G.toneMappingExposure),Bt.needsLights&&gn(tn,ii),Ot&&nt.fog===!0&&It.refreshFogUniforms(tn,Ot),It.refreshMaterialUniforms(tn,nt,yt,St,U.state.transmissionRenderTarget[C.id]),Bt.needsLights&&Bt.lightProbeGrid){const Ue=Bt.lightProbeGrid;tn.probesSH.value=Ue.texture,tn.probesMin.value.copy(Ue.boundingBox.min),tn.probesMax.value.copy(Ue.boundingBox.max),tn.probesResolution.value.copy(Ue.resolution)}nu.upload(Y,ia(Bt),tn,ft)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(nu.upload(Y,ia(Bt),tn,ft),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Pe.setValue(Y,"center",it.center),Pe.setValue(Y,"modelViewMatrix",it.modelViewMatrix),Pe.setValue(Y,"normalMatrix",it.normalMatrix),Pe.setValue(Y,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Ue=nt.uniformsGroups;for(let Bi=0,Pa=Ue.length;Bi<Pa;Bi++){const Ms=Ue[Bi];Mt.update(Ms,yn),Mt.bind(Ms,yn)}}return yn}function gn(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function hl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(C,W,rt){const nt=st.get(C);nt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),st.get(C.texture).__webglTexture=W,st.get(C.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const rt=st.get(C);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,rt=0){et=C,I=W,H=rt;let nt=null,it=!1,Ot=!1;if(C){const Lt=st.get(C);if(Lt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Lt.__webglFramebuffer),P.copy(C.viewport),Z.copy(C.scissor),bt=C.scissorTest,E.viewport(P),E.scissor(Z),E.setScissorTest(bt),gt=-1;return}else if(Lt.__webglFramebuffer===void 0)ft.setupRenderTarget(C);else if(Lt.__hasExternalTextures)ft.rebindTextures(C,st.get(C.texture).__webglTexture,st.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&st.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(C)}}const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ot=!0);const kt=st.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[W])?nt=kt[W][rt]:nt=kt[W],it=!0):C.samples>0&&ft.useMultisampledRTT(C)===!1?nt=st.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?nt=kt[rt]:nt=kt,P.copy(C.viewport),Z.copy(C.scissor),bt=C.scissorTest}else P.copy(jt).multiplyScalar(yt).floor(),Z.copy(Ze).multiplyScalar(yt).floor(),bt=he;if(rt!==0&&(nt=dt),E.bindFramebuffer(Y.FRAMEBUFFER,nt)&&E.drawBuffers(C,nt),E.viewport(P),E.scissor(Z),E.setScissorTest(bt),it){const Lt=st.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,rt)}else if(Ot){const Lt=W;for(let Xt=0;Xt<C.textures.length;Xt++){const kt=st.get(C.textures[Xt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,rt,Lt)}}else if(C!==null&&rt!==0){const Lt=st.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Lt.__webglTexture,rt)}gt=-1},this.readRenderTargetPixels=function(C,W,rt,nt,it,Ot,Gt,Lt=0){if(!(C&&C.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=st.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){E.bindFramebuffer(Y.FRAMEBUFFER,Xt);try{const kt=C.textures[Lt],Jt=kt.format,oe=kt.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Lt),!O.textureFormatReadable(Jt)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(oe)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-nt&&rt>=0&&rt<=C.height-it&&Y.readPixels(W,rt,nt,it,wt.convert(Jt),wt.convert(oe),Ot)}finally{const kt=et!==null?st.get(et).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(C,W,rt,nt,it,Ot,Gt,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=st.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt)if(W>=0&&W<=C.width-nt&&rt>=0&&rt<=C.height-it){E.bindFramebuffer(Y.FRAMEBUFFER,Xt);const kt=C.textures[Lt],Jt=kt.format,oe=kt.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Lt),!O.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Zt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ot.byteLength,Y.STREAM_READ),Y.readPixels(W,rt,nt,it,wt.convert(Jt),wt.convert(oe),0);const Te=et!==null?st.get(et).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Te);const $e=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await _y(Y,$e,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Zt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ot),Y.deleteBuffer(Zt),Y.deleteSync($e),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,rt=0){const nt=Math.pow(2,-rt),it=Math.floor(C.image.width*nt),Ot=Math.floor(C.image.height*nt),Gt=W!==null?W.x:0,Lt=W!==null?W.y:0;ft.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,rt,0,0,Gt,Lt,it,Ot),E.unbindTexture()},this.copyTextureToTexture=function(C,W,rt=null,nt=null,it=0,Ot=0){let Gt,Lt,Xt,kt,Jt,oe,Zt,Te,$e;const We=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(rt!==null)Gt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Xt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,Jt=rt.min.y,oe=rt.isBox3?rt.min.z:0;else{const tn=Math.pow(2,-it);Gt=Math.floor(We.width*tn),Lt=Math.floor(We.height*tn),C.isDataArrayTexture?Xt=We.depth:C.isData3DTexture?Xt=Math.floor(We.depth*tn):Xt=1,kt=0,Jt=0,oe=0}nt!==null?(Zt=nt.x,Te=nt.y,$e=nt.z):(Zt=0,Te=0,$e=0);const Ne=wt.convert(W.format),Oe=wt.convert(W.type);let Bt;W.isData3DTexture?(ft.setTexture3D(W,0),Bt=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ft.setTexture2DArray(W,0),Bt=Y.TEXTURE_2D_ARRAY):(ft.setTexture2D(W,0),Bt=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);const zn=E.getParameter(Y.UNPACK_ROW_LENGTH),pe=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),yn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ni=E.getParameter(Y.UNPACK_SKIP_ROWS),Ci=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,We.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,We.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,kt),E.pixelStorei(Y.UNPACK_SKIP_ROWS,Jt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,oe);const ii=C.isDataArrayTexture||C.isData3DTexture,Pe=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const tn=st.get(C),wi=st.get(W),Ue=st.get(tn.__renderTarget),Bi=st.get(wi.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Ue.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Pa=0;Pa<Xt;Pa++)ii&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,st.get(C).__webglTexture,it,oe+Pa),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,st.get(W).__webglTexture,Ot,$e+Pa)),Y.blitFramebuffer(kt,Jt,Gt,Lt,Zt,Te,Gt,Lt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(it!==0||C.isRenderTargetTexture||st.has(C)){const tn=st.get(C),wi=st.get(W);E.bindFramebuffer(Y.READ_FRAMEBUFFER,vt),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,J);for(let Ue=0;Ue<Xt;Ue++)ii?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,tn.__webglTexture,it,oe+Ue):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,tn.__webglTexture,it),Pe?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,wi.__webglTexture,Ot,$e+Ue):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,wi.__webglTexture,Ot),it!==0?Y.blitFramebuffer(kt,Jt,Gt,Lt,Zt,Te,Gt,Lt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Pe?Y.copyTexSubImage3D(Bt,Ot,Zt,Te,$e+Ue,kt,Jt,Gt,Lt):Y.copyTexSubImage2D(Bt,Ot,Zt,Te,kt,Jt,Gt,Lt);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Pe?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(Bt,Ot,Zt,Te,$e,Gt,Lt,Xt,Ne,Oe,We.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(Bt,Ot,Zt,Te,$e,Gt,Lt,Xt,Ne,We.data):Y.texSubImage3D(Bt,Ot,Zt,Te,$e,Gt,Lt,Xt,Ne,Oe,We):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ot,Zt,Te,Gt,Lt,Ne,Oe,We.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ot,Zt,Te,We.width,We.height,Ne,We.data):Y.texSubImage2D(Y.TEXTURE_2D,Ot,Zt,Te,Gt,Lt,Ne,Oe,We);E.pixelStorei(Y.UNPACK_ROW_LENGTH,zn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,pe),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,yn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ni),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ci),Ot===0&&W.generateMipmaps&&Y.generateMipmap(Bt),E.unbindTexture()},this.initRenderTarget=function(C){st.get(C).__webglFramebuffer===void 0&&ft.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ft.setTextureCube(C,0):C.isData3DTexture?ft.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ft.setTexture2DArray(C,0):ft.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){I=0,H=0,et=null,E.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const Sv={type:"change"},_p={type:"start"},rx={type:"end"},qc=new pp,Mv=new fs,aR=Math.cos(70*Sy.DEG2RAD),En=new Q,Jn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ld=1e-6;class sR extends ob{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new ms,this._lastTargetPosition=new Q,this._quat=new ms().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Z_,this._sphericalDelta=new Z_,this._scale=1,this._panOffset=new Q,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new Q,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oR.bind(this),this._onPointerDown=rR.bind(this),this._onPointerUp=lR.bind(this),this._onContextMenu=mR.bind(this),this._onMouseWheel=fR.bind(this),this._onKeyDown=hR.bind(this),this._onTouchStart=dR.bind(this),this._onTouchMove=pR.bind(this),this._onMouseDown=cR.bind(this),this._onMouseMove=uR.bind(this),this._interceptControlDown=gR.bind(this),this._interceptControlUp=_R.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sv),this.update(),this.state=Xe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;En.copy(i).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Jn:s>Math.PI&&(s-=Jn),l<-Math.PI?l+=Jn:l>Math.PI&&(l-=Jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),i.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=En.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(qc.origin.copy(this.object.position),qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qc.direction))<aR?this.object.lookAt(this.target):(Mv.setFromNormalAndCoplanarPoint(this.object.up,this.target),qc.intersectPlane(Mv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ld||this._lastTargetPosition.distanceToSquared(this.target)>ld?(this.dispatchEvent(Sv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Jn/60*this.autoRotateSpeed*t:Jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){En.setFromMatrixColumn(i,0),En.multiplyScalar(-t),this._panOffset.add(En)}_panUp(t,i){this.screenSpacePanning===!0?En.setFromMatrixColumn(i,1):(En.setFromMatrixColumn(i,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(t),this._panOffset.add(En)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;En.copy(l).sub(this.target);let c=En.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function rR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function oR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function lR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rx),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function cR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(_p)}function uR(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function fR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(_p),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(rx))}function hR(r){this.enabled!==!1&&this._handleKeyDown(r)}function dR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(_p)}function pR(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function mR(r){this.enabled!==!1&&r.preventDefault()}function gR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _R(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vR({mesh:r,view:t,fitToken:i,snapshotRef:s}){const l=Ce.useRef(null),c=Ce.useRef(null);return Ce.useEffect(()=>{const f=l.current,p=new iR({antialias:!0,preserveDrawingBuffer:!0});p.setPixelRatio(Math.min(2,window.devicePixelRatio)),p.setSize(f.clientWidth,f.clientHeight),p.setClearColor(657930,1),f.appendChild(p.domElement);const m=new Oy;m.fog=new dp(657930,600,1800);const d=new Ai(38,f.clientWidth/f.clientHeight,1,5e3);d.up.set(0,0,1),d.position.set(320,-320,220);const _=new sR(d,p.domElement);_.enableDamping=!0,_.dampingFactor=.08,m.add(new eb(16777215,1776411,1.1));const x=new q_(16777215,2);x.position.set(300,-240,420),m.add(x);const g=new q_(16752736,1.1);g.position.set(-320,260,120),m.add(g);const y=new rb(600,30,3815994,2039583);y.rotation.x=Math.PI/2,m.add(y);const b={uColorA:{value:new fe("#f97316")},uColorB:{value:new fe("#3b82f6")},uBand:{value:.28},uHeight:{value:100},uLayers:{value:1}},D=new Jy({color:16777215,roughness:.55,metalness:.05,side:Ki,flatShading:!1});D.onBeforeCompile=R=>{R.uniforms.uColorA=b.uColorA,R.uniforms.uColorB=b.uColorB,R.uniforms.uBand=b.uBand,R.uniforms.uHeight=b.uHeight,R.uniforms.uLayers=b.uLayers,R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWorld;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uBand;
uniform float uHeight;
uniform float uLayers;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  float t = clamp(vWorld.z / max(uHeight, 0.001), 0.0, 1.0);
  vec3 grad = mix(uColorA, uColorB, t);
  float band = 1.0;
  if (uLayers > 0.5) {
    float f = fract(vWorld.z / max(uBand, 0.01));
    band = 0.80 + 0.20 * smoothstep(0.0, 0.55, abs(f - 0.5) * 2.0);
  }
  diffuseColor.rgb *= grad * band;
}`)};const S=new ea(new mi,D);m.add(S),c.current={renderer:p,scene:m,camera:d,controls:_,mesh:S,material:D,grid:y,uniforms:b};let M=0;const z=()=>{M=requestAnimationFrame(z),_.update(),p.render(m,d)};z();const F=new ResizeObserver(()=>{const R=f.clientWidth,L=f.clientHeight;R===0||L===0||(p.setSize(R,L),d.aspect=R/L,d.updateProjectionMatrix())});return F.observe(f),()=>{cancelAnimationFrame(M),F.disconnect(),_.dispose(),S.geometry.dispose(),D.dispose(),p.dispose(),f.removeChild(p.domElement),c.current=null}},[]),Ce.useEffect(()=>{const f=c.current;if(!f)return;const p=new mi;p.setAttribute("position",new Ri(r.positions.slice(),3)),p.setIndex(new Ri(r.indices.slice(),1)),p.computeVertexNormals(),f.mesh.geometry.dispose(),f.mesh.geometry=p,f.uniforms.uHeight.value=Math.max(1,r.size[2])},[r]),Ce.useEffect(()=>{const f=c.current;f&&(f.uniforms.uColorA.value.set(t.colorA),f.uniforms.uColorB.value.set(t.colorB),f.uniforms.uBand.value=Math.max(.05,t.layerHeight),f.uniforms.uLayers.value=t.showLayers?1:0,f.material.wireframe=t.wireframe,f.controls.autoRotate=t.autoRotate,f.controls.autoRotateSpeed=1.6,f.grid.visible=t.showGrid)},[t]),Ce.useEffect(()=>{const f=c.current;if(!f)return;const[p,,m]=r.size,d=Math.max(p,m)*.75+30,_=d/Math.tan(f.camera.fov*Math.PI/360)+d*.4;f.controls.target.set(0,0,m/2),f.camera.position.set(_*.72,-_*.72,m*.75+_*.28),f.camera.updateProjectionMatrix(),f.controls.update()},[i]),Ce.useEffect(()=>{if(s)return s.current=()=>{const f=c.current;if(!f)return;f.renderer.render(f.scene,f.camera);const p=f.renderer.domElement.toDataURL("image/png"),m=document.createElement("a");m.href=p,m.download="formstudio.png",m.click()},()=>{s.current=null}},[s]),ct.jsx("div",{ref:l,className:"h-full w-full"})}const xR=["Profil","Biçim","Doku","Kafes","Baskı","Görünüm"],yv="formstudio.project.v1",SR={colorA:"#f97316",colorB:"#3b82f6",layerHeight:.28,showLayers:!0,wireframe:!1,autoRotate:!1,showGrid:!0};function Zc(r,t){const i=URL.createObjectURL(r),s=document.createElement("a");s.href=i,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(i),4e3)}function MR(){const[r,t]=Ce.useState(()=>{try{const A=localStorage.getItem(yv);if(A)return JSON.parse(A)}catch{}return p_("vazo")}),[i,s]=Ce.useState(SR),[l,c]=Ce.useState(CM),[f,p]=Ce.useState("Profil"),[m,d]=Ce.useState(0),[_,x]=Ce.useState(!0),g=Ce.useRef([]),y=Ce.useRef([]),b=Ce.useRef(null),D=Ce.useCallback(A=>{t(G=>(g.current=[...g.current.slice(-40),G],y.current=[],A(G)))},[]),S=Ce.useCallback(()=>{t(A=>{const G=g.current.pop();return G?(y.current=[...y.current,A],G):A})},[]),M=Ce.useCallback(()=>{t(A=>{const G=y.current.pop();return G?(g.current=[...g.current,A],G):A})},[]);Ce.useEffect(()=>{const A=setTimeout(()=>{try{localStorage.setItem(yv,JSON.stringify(r))}catch{}},400);return()=>clearTimeout(A)},[r]),Ce.useEffect(()=>{const A=G=>{(G.ctrlKey||G.metaKey)&&(G.key.toLowerCase()==="z"&&!G.shiftKey?(G.preventDefault(),S()):(G.key.toLowerCase()==="z"&&G.shiftKey||G.key.toLowerCase()==="y")&&(G.preventDefault(),M()))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[S,M]);const z=Ce.useDeferredValue(r),F=Ce.useMemo(()=>TM(z),[z]),R=z!==r,L=Ce.useMemo(()=>DM(z,l),[z,l]),U=A=>{D(()=>p_(A)),d(G=>G+1)},N=A=>D(G=>({...G,...A})),T=`${r.kind}-${Math.round(r.height)}x${Math.round(r.radius*2)}`;return ct.jsxs("div",{className:"flex h-screen min-h-0 flex-col bg-neutral-950 text-neutral-200",children:[ct.jsxs("header",{className:"flex shrink-0 items-center gap-3 border-b border-neutral-800 px-4 py-2.5",children:[ct.jsxs("span",{className:"font-mono text-lg font-bold tracking-tight",children:[ct.jsx("span",{className:"text-orange-500",children:"FORM"}),"studio"]}),ct.jsx("span",{className:"rounded-md border border-neutral-700 px-2 py-0.5 font-mono text-[11px] text-neutral-400",children:"v1.0"}),ct.jsx("span",{className:"hidden text-[11px] uppercase tracking-[0.2em] text-neutral-600 sm:inline",children:"parametrik 3B obje modelleme"}),ct.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[R?ct.jsx("span",{className:"text-[11px] text-orange-400",children:"hesaplanıyor…"}):null,ct.jsx(Wi,{onClick:S,title:"Geri al (Ctrl+Z)",children:"↶"}),ct.jsx(Wi,{onClick:M,title:"İleri al (Ctrl+Shift+Z)",children:"↷"}),ct.jsx(Wi,{onClick:()=>d(A=>A+1),title:"Görünümü sığdır",children:"⤢"}),ct.jsx(Wi,{onClick:()=>x(A=>!A),children:_?"Paneli gizle":"Panel"})]})]}),ct.jsxs("div",{className:"flex min-h-0 flex-1 flex-col-reverse md:flex-row",children:[_?ct.jsxs("aside",{className:"flex w-full shrink-0 flex-col border-neutral-800 md:h-full md:w-[370px] md:border-r",children:[ct.jsx("div",{className:"grid grid-cols-5 gap-1 border-b border-neutral-800 p-2",children:Object.keys(Kc).map(A=>ct.jsx("button",{type:"button",title:Kc[A].hint,onClick:()=>U(A),className:`rounded-lg px-1 py-2 text-[11px] leading-tight transition-colors ${r.kind===A?"bg-orange-600 text-white":"border border-neutral-800 text-neutral-400 hover:border-neutral-600"}`,children:Kc[A].label},A))}),ct.jsx("div",{className:"flex gap-1 overflow-x-auto border-b border-neutral-800 px-2 py-1.5",children:xR.map(A=>ct.jsx("button",{type:"button",onClick:()=>p(A),className:`shrink-0 rounded-md px-2.5 py-1 text-[12px] ${f===A?"bg-neutral-800 text-white":"text-neutral-500 hover:text-neutral-300"}`,children:A},A))}),ct.jsxs("div",{className:"min-h-0 flex-1 overflow-y-auto px-3 pb-4",children:[f==="Profil"?ct.jsxs(Xi,{title:"Profil eğrisi",children:[ct.jsx(zM,{points:r.profile,onChange:A=>N({profile:A})}),ct.jsx(Ie,{label:"Yükseklik",value:r.height,min:20,max:400,step:1,unit:"mm",onChange:A=>N({height:A})}),ct.jsx(Ie,{label:"Azami yarıçap",value:r.radius,min:10,max:150,step:1,unit:"mm",onChange:A=>N({radius:A})}),ct.jsx(Ie,{label:"Cidar kalınlığı",value:r.wall,min:.4,max:8,step:.1,unit:"mm",onChange:A=>N({wall:A})}),ct.jsx(Ie,{label:"Taban kalınlığı",value:r.base,min:0,max:12,step:.1,unit:"mm",hint:"0 = alttan açık (armatür/abajur)",onChange:A=>N({base:A})}),r.base>0?ct.jsx(Ie,{label:"Su deliği çapı",value:r.drainHole,min:0,max:40,step:1,unit:"mm",hint:"Saksılar için drenaj deliği",onChange:A=>N({drainHole:A})}):null]}):null,f==="Biçim"?ct.jsxs(ct.Fragment,{children:[ct.jsxs(Xi,{title:"Enine kesit",children:[ct.jsx(Ie,{label:"Çokgen kenar sayısı",value:r.cross.polygonSides,min:0,max:16,step:1,hint:"0 = tam daire",onChange:A=>N({cross:{...r.cross,polygonSides:A}})}),ct.jsx(Ie,{label:"Köşe yuvarlatma",value:r.cross.polygonRound,min:0,max:1,step:.01,onChange:A=>N({cross:{...r.cross,polygonRound:A}})}),ct.jsx(Ie,{label:"Lob sayısı",value:r.cross.lobes,min:0,max:40,step:1,hint:"Çevresel dalgalanma (papatya kesit)",onChange:A=>N({cross:{...r.cross,lobes:A}})}),ct.jsx(Ie,{label:"Lob genliği",value:r.cross.lobeAmount,min:0,max:.5,step:.01,onChange:A=>N({cross:{...r.cross,lobeAmount:A}})}),ct.jsx(Ie,{label:"Burulma",value:r.cross.twist,min:-720,max:720,step:5,unit:"°",hint:"Yükseklik boyunca toplam dönüş",onChange:A=>N({cross:{...r.cross,twist:A}})})]}),ct.jsxs(Xi,{title:"Çözünürlük",children:[ct.jsx(Ie,{label:"Yatay dilim",value:r.layers,min:20,max:600,step:10,onChange:A=>N({layers:A})}),ct.jsx(Ie,{label:"Çevresel segment",value:r.segments,min:24,max:512,step:8,onChange:A=>N({segments:A})})]})]}):null,f==="Doku"?ct.jsxs(ct.Fragment,{children:[ct.jsxs(Xi,{title:"Dikey dalga",children:[ct.jsx(Ie,{label:"Dalga sayısı",value:r.texture.waveCount,min:0,max:60,step:1,onChange:A=>N({texture:{...r.texture,waveCount:A}})}),ct.jsx(Ie,{label:"Dalga genliği",value:r.texture.waveAmount,min:0,max:20,step:.1,unit:"mm",onChange:A=>N({texture:{...r.texture,waveAmount:A}})}),ct.jsx(Ie,{label:"Spiral kayması",value:r.texture.waveSpiral,min:-8,max:8,step:.1,hint:"Dalgayı açıyla kaydırır → burgu deseni",onChange:A=>N({texture:{...r.texture,waveSpiral:A}})})]}),ct.jsxs(Xi,{title:"Nervür",children:[ct.jsx(Ie,{label:"Nervür sayısı",value:r.texture.ribCount,min:0,max:200,step:1,onChange:A=>N({texture:{...r.texture,ribCount:A}})}),ct.jsx(Ie,{label:"Nervür genliği",value:r.texture.ribAmount,min:0,max:6,step:.1,unit:"mm",onChange:A=>N({texture:{...r.texture,ribAmount:A}})})]}),ct.jsxs(Xi,{title:"Pürüz",children:[ct.jsx(Ie,{label:"Gürültü genliği",value:r.texture.noiseAmount,min:0,max:10,step:.1,unit:"mm",onChange:A=>N({texture:{...r.texture,noiseAmount:A}})}),ct.jsx(Ie,{label:"Gürültü ölçeği",value:r.texture.noiseScale,min:.5,max:30,step:.5,onChange:A=>N({texture:{...r.texture,noiseScale:A}})})]})]}):null,f==="Kafes"?ct.jsxs(Xi,{title:"Kafes deformasyonu",children:[ct.jsx(Ar,{label:"Kafesi uygula",checked:r.lattice.enabled,onChange:A=>N({lattice:{...r.lattice,enabled:A}})}),ct.jsx(Ie,{label:"Etki",value:r.lattice.strength,min:0,max:40,step:.5,unit:"mm",onChange:A=>N({lattice:{...r.lattice,strength:A}})}),ct.jsx(OM,{lattice:r.lattice,onChange:A=>N({lattice:A})}),ct.jsx("p",{className:"mt-2 text-[11px] text-neutral-500",children:"Turuncu hücreler yüzeyi dışarı, mavi hücreler içeri iter. Sağ tık/Alt+tık hücreyi sıfırlar."})]}):null,f==="Baskı"?ct.jsxs(ct.Fragment,{children:[ct.jsxs(Xi,{title:"3B baskı ayarları",children:[ct.jsx(Ie,{label:"Katman yüksekliği",value:l.layerHeight,min:.1,max:.6,step:.02,unit:"mm",onChange:A=>{c({...l,layerHeight:A}),s(G=>({...G,layerHeight:A}))}}),ct.jsx(Ie,{label:"Nozul çapı",value:l.nozzle,min:.2,max:1.2,step:.05,unit:"mm",onChange:A=>c({...l,nozzle:A,lineWidth:+(A*1.2).toFixed(2)})}),ct.jsx(Ie,{label:"Çizgi genişliği",value:l.lineWidth,min:.2,max:1.6,step:.05,unit:"mm",onChange:A=>c({...l,lineWidth:A})}),ct.jsx(Ie,{label:"Baskı hızı",value:l.speed,min:10,max:120,step:1,unit:"mm/s",onChange:A=>c({...l,speed:A})}),ct.jsx(Ie,{label:"İlk katman hızı",value:l.firstLayerSpeed,min:5,max:60,step:1,unit:"mm/s",onChange:A=>c({...l,firstLayerSpeed:A})}),ct.jsx(Ie,{label:"Nozul sıcaklığı",value:l.nozzleTemp,min:170,max:300,step:5,unit:"°C",onChange:A=>c({...l,nozzleTemp:A})}),ct.jsx(Ie,{label:"Tabla sıcaklığı",value:l.bedTemp,min:0,max:120,step:5,unit:"°C",onChange:A=>c({...l,bedTemp:A})}),ct.jsx(Ie,{label:"Tabla X",value:l.bedX,min:100,max:400,step:10,unit:"mm",onChange:A=>c({...l,bedX:A})}),ct.jsx(Ie,{label:"Tabla Y",value:l.bedY,min:100,max:400,step:10,unit:"mm",onChange:A=>c({...l,bedY:A})}),ct.jsx(Ar,{label:"Soğutma fanı",checked:l.fan,onChange:A=>c({...l,fan:A})})]}),ct.jsxs(Xi,{title:"Tahmin",children:[ct.jsxs("ul",{className:"space-y-1 py-1 font-mono text-[12px] text-neutral-400",children:[ct.jsxs("li",{children:["Filament: ",L.lengthM.toFixed(2)," m (~",L.grams.toFixed(0)," g)"]}),ct.jsxs("li",{children:["Süre (kaba): ~",Math.round(L.minutes)," dk"]}),ct.jsxs("li",{children:["Baskı hacmi: ",L.volumeCm3.toFixed(1)," cm³"]}),ct.jsxs("li",{children:["Model hacmi (STL): ",F.volumeCm3.toFixed(1)," cm³"]})]}),ct.jsx("p",{className:"text-[11px] text-neutral-500",children:"G-code “vazo modu”nda üretilir: dolu taban + tek duvarlı sürekli spiral. Bu nedenle baskı, modeldeki cidar kalınlığından bağımsız olarak tek çizgi genişliğindedir; STL’yi dilimleyiciye verirseniz model hacmi geçerli olur."})]})]}):null,f==="Görünüm"?ct.jsxs(Xi,{title:"Görünüm",children:[ct.jsxs("label",{className:"flex items-center justify-between py-2 text-[13px] text-neutral-300",children:[ct.jsx("span",{children:"Alt renk"}),ct.jsx("input",{type:"color",value:i.colorA,className:"h-7 w-12 rounded border border-neutral-700 bg-transparent",onChange:A=>s({...i,colorA:A.target.value})})]}),ct.jsxs("label",{className:"flex items-center justify-between py-2 text-[13px] text-neutral-300",children:[ct.jsx("span",{children:"Üst renk"}),ct.jsx("input",{type:"color",value:i.colorB,className:"h-7 w-12 rounded border border-neutral-700 bg-transparent",onChange:A=>s({...i,colorB:A.target.value})})]}),ct.jsx(Ar,{label:"Baskı katman çizgileri",checked:i.showLayers,onChange:A=>s({...i,showLayers:A})}),ct.jsx(Ar,{label:"Tel kafes",checked:i.wireframe,onChange:A=>s({...i,wireframe:A})}),ct.jsx(Ar,{label:"Otomatik döndür",checked:i.autoRotate,onChange:A=>s({...i,autoRotate:A})}),ct.jsx(Ar,{label:"Zemin ızgarası",checked:i.showGrid,onChange:A=>s({...i,showGrid:A})}),ct.jsx(Wi,{onClick:()=>b.current?.(),children:"PNG anlık görüntü"})]}):null]}),ct.jsxs("div",{className:"grid shrink-0 grid-cols-3 gap-2 border-t border-neutral-800 p-2",children:[ct.jsx(Wi,{variant:"primary",onClick:()=>Zc(LM(F,T),`${T}.stl`),children:"STL"}),ct.jsx(Wi,{onClick:()=>Zc(UM(F,T),`${T}.obj`),children:"OBJ"}),ct.jsx(Wi,{onClick:()=>Zc(wM(r,l),`${T}.gcode`),children:"G-code"}),ct.jsx(Wi,{onClick:()=>Zc(new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),`${T}.json`),children:"Proje"}),ct.jsxs("label",{className:"cursor-pointer rounded-lg border border-neutral-700 px-3 py-2 text-center text-[13px] text-neutral-300 hover:border-neutral-500",children:["Yükle",ct.jsx("input",{type:"file",accept:"application/json,.json",className:"hidden",onChange:async A=>{const G=A.target.files?.[0];if(G){try{const V=JSON.parse(await G.text());D(()=>V),d(K=>K+1)}catch{alert("Proje dosyası okunamadı.")}A.target.value=""}}})]}),ct.jsx(Wi,{onClick:()=>U(r.kind),children:"Sıfırla"})]})]}):null,ct.jsxs("main",{className:"relative min-h-[45vh] flex-1",children:[ct.jsx(vR,{mesh:F,view:i,fitToken:m,snapshotRef:b}),ct.jsxs("div",{className:"pointer-events-none absolute bottom-3 left-3 rounded-lg bg-black/50 px-3 py-2 font-mono text-[11px] leading-relaxed text-neutral-400 backdrop-blur",children:[ct.jsxs("div",{children:[F.size[0].toFixed(0)," × ",F.size[1].toFixed(0)," × ",F.size[2].toFixed(0)," mm"]}),ct.jsxs("div",{children:[F.triangleCount.toLocaleString("tr-TR")," üçgen · ",F.volumeCm3.toFixed(1)," cm³"]})]})]})]})]})}vM.createRoot(document.getElementById("root")).render(ct.jsx(Ce.StrictMode,{children:ct.jsx(MR,{})}));
