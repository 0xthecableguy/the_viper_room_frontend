var dt=Object.defineProperty;var ft=(t,e,r)=>e in t?dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Ce=(t,e,r)=>ft(t,typeof e!="symbol"?e+"":e,r);import{a as x,t as I,d as vt,c as me}from"../chunks/disclose-version.CAdquCCa.js";import{i as Se}from"../chunks/legacy.BssRHClI.js";import{m as X,M as Ie,a5 as gt,a4 as bt,J as wt,i as ht,I as mt,al as Qe,K as yt,L as Pe,N as ke,o as de,ah as pt,as as ye,O as $e,j as et,P as St,F as pe,at as At,au as Et,ak as xt,av as Tt,k as Ut,a9 as tt,a2 as It,A as Fe,aw as kt,ax as Dt,ay as Nt,af as Mt,az as zt,aA as Bt,H as Ot,aB as Lt,E as Rt,aC as Ct,aD as Pt,an as Ft,b as rt,aE as Wt,ab as qt,n as fe,aF as Gt,a8 as We,V as qe,aG as jt,ao as Vt,p as Ae,v as T,g as c,w as S,t as Z,x as C,s as Ee,C as p,aH as B,q as ce}from"../chunks/runtime.aM-MgH7P.js";import{a as Yt,b as Ht,l as Kt,s as ne,e as V}from"../chunks/render.BQguKTEm.js";import{p as F,i as W}from"../chunks/props.D3gNug4Y.js";import{a as Zt,o as st}from"../chunks/index-client.DdzatICg.js";function ue(t,e){return e}function Jt(t,e,r,s){for(var n=[],a=e.length,l=0;l<a;l++)Et(e[l].e,n,!0);var g=a>0&&n.length===0&&r!==null;if(g){var b=r.parentNode;xt(b),b.append(r),s.clear(),se(t,e[0].prev,e[a-1].next)}Tt(n,()=>{for(var m=0;m<a;m++){var w=e[m];g||(s.delete(w.k),se(t,w.prev,w.next)),Ut(w.e,!g)}})}function _e(t,e,r,s,n,a=null){var l=t,g={flags:e,items:new Map,first:null};{var b=t;l=X?Ie(gt(b)):b.appendChild(bt())}X&&wt();var m=null,w=!1;ht(()=>{var f=r(),h=mt(f)?f:f==null?[]:Qe(f),v=h.length;if(w&&v===0)return;w=v===0;let u=!1;if(X){var E=l.data===yt;E!==(v===0)&&(l=Pe(),Ie(l),ke(!1),u=!0)}if(X){for(var D=null,U,y=0;y<v;y++){if(de.nodeType===8&&de.data===pt){l=de,u=!0,ke(!1);break}var N=h[y],q=s(N,y);U=nt(de,g,D,null,N,q,y,n,e),g.items.set(q,U),D=U}v>0&&Ie(Pe())}if(!X){var L=tt;Xt(h,g,l,n,e,(L.f&ye)!==0,s)}a!==null&&(v===0?m?$e(m):m=et(()=>a(l)):m!==null&&St(m,()=>{m=null})),u&&ke(!0),r()}),X&&(l=de)}function Xt(t,e,r,s,n,a,l,g){var b=t.length,m=e.items,w=e.first,f=w,h,v=null,u=[],E=[],D,U,y,N;for(N=0;N<b;N+=1){if(D=t[N],U=l(D,N),y=m.get(U),y===void 0){var q=f?f.e.nodes_start:r;v=nt(q,e,v,v===null?e.first:v.next,D,U,N,s,n),m.set(U,v),u=[],E=[],f=v.next;continue}if(Qt(y,D,N),y.e.f&ye&&$e(y.e),y!==f){if(h!==void 0&&h.has(y)){if(u.length<E.length){var L=E[0],P;v=L.prev;var G=u[0],Q=u[u.length-1];for(P=0;P<u.length;P+=1)Ge(u[P],L,r);for(P=0;P<E.length;P+=1)h.delete(E[P]);se(e,G.prev,Q.next),se(e,v,G),se(e,Q,L),f=L,v=Q,N-=1,u=[],E=[]}else h.delete(y),Ge(y,f,r),se(e,y.prev,y.next),se(e,y,v===null?e.first:v.next),se(e,v,y),v=y;continue}for(u=[],E=[];f!==null&&f.k!==U;)(a||!(f.e.f&ye))&&(h??(h=new Set)).add(f),E.push(f),f=f.next;if(f===null)continue;y=f}u.push(y),v=y,f=y.next}if(f!==null||h!==void 0){for(var i=h===void 0?[]:Qe(h);f!==null;)(a||!(f.e.f&ye))&&i.push(f),f=f.next;var o=i.length;if(o>0){var _=b===0?r:null;Jt(e,i,_,m)}}pe.first=e.first&&e.first.e,pe.last=v&&v.e}function Qt(t,e,r,s){At(t.v,e),t.i=r}function nt(t,e,r,s,n,a,l,g,b,m){var w=(b&Dt)!==0,f=(b&Nt)===0,h=w?f?It(n):Fe(n):n,v=b&kt?Fe(l):l,u={i:v,v:h,k:a,a:null,e:null,prev:r,next:s};try{return u.e=et(()=>g(t,h,v),X),u.e.prev=r&&r.e,u.e.next=s&&s.e,r===null?e.first=u:(r.next=u,r.e.next=u.e),s!==null&&(s.prev=u,s.e.prev=u.e),u}finally{}}function Ge(t,e,r){for(var s=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,a=t.e.nodes_start;a!==s;){var l=Mt(a);n.before(a),a=l}}function se(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function at(t){if(X){var e=!1,r=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var s=t.value;le(t,"value",null),t.value=s}if(t.hasAttribute("checked")){var n=t.checked;le(t,"checked",null),t.checked=n}}};t.__on_r=r,zt(r),Yt()}}function le(t,e,r,s){var n=t.__attributes??(t.__attributes={});X&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=r)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Bt]=r),r==null?t.removeAttribute(e):typeof r!="string"&&$t(t).includes(e)?t[e]=r:t.setAttribute(e,r))}var je=new Map;function $t(t){var e=je.get(t.nodeName);if(e)return e;je.set(t.nodeName,e=[]);for(var r,s=t,n=Element.prototype;n!==s;){r=Lt(s);for(var a in r)r[a].set&&e.push(a);s=Ot(s)}return e}function ze(t,e,r){var s=t.__className,n=er(e);X&&t.className===n?t.__className=n:(s!==n||X&&t.className!==n)&&(e==null&&!r?t.removeAttribute("class"):t.className=n,t.__className=n)}function er(t,e){return(t??"")+""}function tr(t,e,r){if(r){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}const rr=()=>performance.now(),te={tick:t=>requestAnimationFrame(t),now:()=>rr(),tasks:new Set};function it(){const t=te.now();te.tasks.forEach(e=>{e.c(t)||(te.tasks.delete(e),e.f())}),te.tasks.size!==0&&te.tick(it)}function sr(t){let e;return te.tasks.size===0&&te.tick(it),{promise:new Promise(r=>{te.tasks.add(e={c:t,f:r})}),abort(){te.tasks.delete(e)}}}function Ve(t,e){t.dispatchEvent(new CustomEvent(e))}function nr(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Ye(t){const e={},r=t.split(";");for(const s of r){const[n,a]=s.split(":");if(!n||a===void 0)break;const l=nr(n.trim());e[l]=a.trim()}return e}const ar=t=>t;function De(t,e,r,s){var n=(t&Gt)!==0,a="in",l,g=e.inert,b,m;function w(){var E=tt,D=pe;We(null),qe(null);try{return l??(l=r()(e,(s==null?void 0:s())??{},{direction:a}))}finally{We(E),qe(D)}}var f={is_global:n,in(){e.inert=g,b==null||b.abort(),Ve(e,"introstart"),b=ot(e,w(),m,1,()=>{Ve(e,"introend"),b==null||b.abort(),b=l=void 0})},out(E){{E==null||E(),l=void 0;return}},stop:()=>{b==null||b.abort()}},h=pe;if((h.transitions??(h.transitions=[])).push(f),Ht){var v=n;if(!v){for(var u=h.parent;u&&u.f&Rt;)for(;(u=u.parent)&&!(u.f&Ct););v=!u||(u.f&Pt)!==0}v&&Ft(()=>{rt(()=>f.in())})}}function ot(t,e,r,s,n){if(Wt(e)){var a,l=!1;return qt(()=>{if(!l){var E=e({direction:"in"});a=ot(t,E,r,s,n)}}),{abort:()=>{l=!0,a==null||a.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(!(e!=null&&e.duration))return n(),{abort:fe,deactivate:fe,reset:fe,t:()=>s};const{delay:g=0,css:b,tick:m,easing:w=ar}=e;var f=[];if(m&&m(0,1),b){var h=Ye(b(0,1));f.push(h,h)}var v=()=>1-s,u=t.animate(f,{duration:g});return u.onfinish=()=>{var E=1-s,D=s-E,U=e.duration*Math.abs(D),y=[];if(U>0){if(b)for(var N=Math.ceil(U/16.666666666666668),q=0;q<=N;q+=1){var L=E+D*w(q/N),P=b(L,1-L);y.push(Ye(P))}v=()=>{var G=u.currentTime;return E+D*w(G/U)},m&&sr(()=>{if(u.playState!=="running")return!1;var G=v();return m(G,1-G),!0})}u=t.animate(y,{duration:U,fill:"forwards"}),u.onfinish=()=>{v=()=>s,m==null||m(s,1-s),n()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=fe)},deactivate:()=>{n=fe},reset:()=>{},t:()=>v()}}function ct(t,e,r=e){var s=jt();Kt(t,"input",n=>{var a=n?t.defaultValue:t.value;if(a=Ne(t)?Me(a):a,r(a),s&&a!==(a=e())){var l=t.selectionStart,g=t.selectionEnd;t.value=a??"",g!==null&&(t.selectionStart=l,t.selectionEnd=Math.min(g,t.value.length))}}),(X&&t.defaultValue!==t.value||rt(e)==null&&t.value)&&r(Ne(t)?Me(t.value):t.value),Vt(()=>{var n=e();Ne(t)&&n===Me(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function Ne(t){var e=t.type;return e==="number"||e==="range"}function Me(t){return t===""?null:+t}const ir=!0,is=Object.freeze(Object.defineProperty({__proto__:null,prerender:ir},Symbol.toStringTag,{value:"Module"}));class or{constructor(){Ce(this,"db",null)}async init(){return new Promise((e,r)=>{const s=indexedDB.open("UserData",1);s.onupgradeneeded=()=>{this.db=s.result,this.db.objectStoreNames.contains("userSessions")||this.db.createObjectStore("userSessions")},s.onsuccess=()=>{this.db=s.result,e()},s.onerror=()=>{console.error("Error opening IndexedDB:",s.error),r(s.error)}})}async saveSession(e,r){if(!this.db)throw new Error("Database is not initialized.");const s=this.db.transaction("userSessions","readwrite"),n=s.objectStore("userSessions");return new Promise((a,l)=>{n.put(r,e.toString()),s.oncomplete=()=>{console.log(`Session saved for user: ${e}`),a()},s.onerror=()=>{console.error("Error saving session:",s.error),l(s.error)}})}async getSession(e){if(!this.db)throw new Error("Database is not initialized.");const s=this.db.transaction("userSessions","readonly").objectStore("userSessions");return new Promise((n,a)=>{const l=s.get(e.toString());l.onsuccess=()=>{n(l.result||null)},l.onerror=()=>{console.error("Error loading session:",l.error),a(l.error)}})}async deleteSession(e){if(!this.db)throw new Error("Database is not initialized.");const r=this.db.transaction("userSessions","readwrite"),s=r.objectStore("userSessions");return new Promise((n,a)=>{s.delete(e.toString()),r.oncomplete=()=>{console.log(`Session deleted for user: ${e}`),n()},r.onerror=()=>{console.error("Error deleting session:",r.error),a(r.error)}})}async sessionExists(e){return await this.getSession(e)!==null}getDB(){if(!this.db)throw new Error("Database is not initialized");return this.db}}const ve=new or;typeof window<"u"&&(window.initDB=()=>ve.init(),window.saveUserSession=(t,e)=>{const r=e.buffer;return ve.saveSession(t,r)},window.getUserSession=t=>ve.getSession(t),window.deleteUserSession=t=>ve.deleteSession(t),window.checkSessionExists=t=>ve.sessionExists(t));let k;function ge(t){const e=k.__externref_table_alloc();return k.__wbindgen_export_2.set(e,t),e}function He(t,e){try{return t.apply(this,e)}catch(r){const s=ge(r);k.__wbindgen_exn_store(s)}}const lt=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&lt.decode();let be=null;function Be(){return(be===null||be.byteLength===0)&&(be=new Uint8Array(k.memory.buffer)),be}function Ke(t,e){return t=t>>>0,lt.decode(Be().subarray(t,t+e))}function he(t){return t==null}const Ze=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>{k.__wbindgen_export_3.get(t.dtor)(t.a,t.b)});function cr(t,e,r,s){const n={a:t,b:e,cnt:1,dtor:r},a=(...l)=>{n.cnt++;const g=n.a;n.a=0;try{return s(g,n.b,...l)}finally{--n.cnt===0?(k.__wbindgen_export_3.get(n.dtor)(g,n.b),Ze.unregister(n)):n.a=g}};return a.original=n,Ze.register(a,n,n),a}function lr(t,e){return t=t>>>0,Be().subarray(t/1,t/1+e)}let ut=0;function ur(t,e){const r=e(t.length*1,1)>>>0;return Be().set(t,r/1),ut=t.length,r}function _r(t,e,r){k.closure20_externref_shim(t,e,r)}function dr(t,e,r,s){k.closure41_externref_shim(t,e,r,s)}const Je=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>k.__wbg_sessionmanager_free(t>>>0,1));class fr{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,Je.unregister(this),e}free(){const e=this.__destroy_into_raw();k.__wbg_sessionmanager_free(e,0)}constructor(){const e=k.sessionmanager_new();return this.__wbg_ptr=e>>>0,Je.register(this,this.__wbg_ptr,this),this}initialize(){return k.sessionmanager_initialize(this.__wbg_ptr)}save_session(e,r){const s=ur(r,k.__wbindgen_malloc),n=ut;return k.sessionmanager_save_session(this.__wbg_ptr,e,s,n)}get_session(e){return k.sessionmanager_get_session(this.__wbg_ptr,e)}delete_session(e){return k.sessionmanager_delete_session(this.__wbg_ptr,e)}session_exists(e){return k.sessionmanager_session_exists(this.__wbg_ptr,e)}}async function vr(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(s){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}}function gr(){const t={};return t.wbg={},t.wbg.__wbg_buffer_61b7ce01341d7f88=function(e){return e.buffer},t.wbg.__wbg_call_500db948e69c7330=function(){return He(function(e,r,s){return e.call(r,s)},arguments)},t.wbg.__wbg_call_b0d8e36992d9900d=function(){return He(function(e,r){return e.call(r)},arguments)},t.wbg.__wbg_checkSessionExists_340e16b697e915bf=function(e){return checkSessionExists(BigInt.asUintN(64,e))},t.wbg.__wbg_deleteUserSession_36cd7b326cd4514a=function(e){return deleteUserSession(BigInt.asUintN(64,e))},t.wbg.__wbg_getUserSession_e0f134950e9904c6=function(e){return getUserSession(BigInt.asUintN(64,e))},t.wbg.__wbg_initDB_5ef5f7eaea3713b7=function(){return initDB()},t.wbg.__wbg_length_65d1cd11729ced11=function(e){return e.length},t.wbg.__wbg_new_3d446df9155128ef=function(e,r){try{var s={a:e,b:r},n=(l,g)=>{const b=s.a;s.a=0;try{return dr(b,s.b,l,g)}finally{s.a=b}};return new Promise(n)}finally{s.a=s.b=0}},t.wbg.__wbg_new_3ff5b33b1ce712df=function(e){return new Uint8Array(e)},t.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d=function(e,r){return new Function(Ke(e,r))},t.wbg.__wbg_newwithbyteoffsetandlength_ba35896968751d91=function(e,r,s){return new Uint8Array(e,r>>>0,s>>>0)},t.wbg.__wbg_newwithlength_34ce8f1051e74449=function(e){return new Uint8Array(e>>>0)},t.wbg.__wbg_queueMicrotask_2181040e064c0dc8=function(e){queueMicrotask(e)},t.wbg.__wbg_queueMicrotask_ef9ac43769cbcc4f=function(e){return e.queueMicrotask},t.wbg.__wbg_resolve_0bf7c44d641804f9=function(e){return Promise.resolve(e)},t.wbg.__wbg_saveUserSession_0686280def1dddff=function(e,r){return saveUserSession(BigInt.asUintN(64,e),r)},t.wbg.__wbg_set_23d69db4e5c66a6e=function(e,r,s){e.set(r,s>>>0)},t.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3=function(){const e=typeof global>"u"?null:global;return he(e)?0:ge(e)},t.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb=function(){const e=typeof globalThis>"u"?null:globalThis;return he(e)?0:ge(e)},t.wbg.__wbg_static_accessor_SELF_1dc398a895c82351=function(){const e=typeof self>"u"?null:self;return he(e)?0:ge(e)},t.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a=function(){const e=typeof window>"u"?null:window;return he(e)?0:ge(e)},t.wbg.__wbg_then_0438fad860fe38e1=function(e,r){return e.then(r)},t.wbg.__wbg_then_0ffafeddf0e182a4=function(e,r,s){return e.then(r,s)},t.wbg.__wbindgen_boolean_get=function(e){const r=e;return typeof r=="boolean"?r?1:0:2},t.wbg.__wbindgen_cb_drop=function(e){const r=e.original;return r.cnt--==1?(r.a=0,!0):!1},t.wbg.__wbindgen_closure_wrapper80=function(e,r,s){return cr(e,r,21,_r)},t.wbg.__wbindgen_init_externref_table=function(){const e=k.__wbindgen_export_2,r=e.grow(4);e.set(0,void 0),e.set(r+0,void 0),e.set(r+1,null),e.set(r+2,!0),e.set(r+3,!1)},t.wbg.__wbindgen_is_function=function(e){return typeof e=="function"},t.wbg.__wbindgen_is_null=function(e){return e===null},t.wbg.__wbindgen_is_undefined=function(e){return e===void 0},t.wbg.__wbindgen_memory=function(){return k.memory},t.wbg.__wbindgen_throw=function(e,r){throw new Error(Ke(e,r))},t.wbg.__wbindgen_uint8_array_new=function(e,r){var s=lr(e,r).slice();return k.__wbindgen_free(e,r*1,1),s},t}function br(t,e){return k=t.exports,_t.__wbindgen_wasm_module=e,be=null,k.__wbindgen_start(),k}async function _t(t){if(k!==void 0)return k;typeof t<"u"&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof t>"u"&&(t=new URL(""+new URL("../assets/wizard_pi_wasm_bg.CxENxoTU.wasm",import.meta.url).href,import.meta.url));const e=gr();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:r,module:s}=await vr(await t,e);return br(r,s)}const ie=async t=>{console.log("Sending request payload to server:",t);const e={...t,session_data:Array.from(new Uint8Array(t.session_data))},r=await fetch("https://v3.spb.ru/wizard_pi_user_action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(console.log("Server response status:",r.status),!r.ok)throw new Error("Network Error");const s=await r.json();return console.log("Server response data:",s),s},wr=async t=>{try{const e=await fetch(`https://v3.spb.ru/get_user_avatar?user_id=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(console.log("Fetching avatar URL:",`https://v3.spb.ru/get_user_avatar?user_id=${t}`),console.log("Avatar fetch server response status:",e.status),!e.ok)throw new Error("Failed to fetch avatar");return(await e.json()).avatar_url||null}catch(e){return console.error("Error fetching avatar:",e),null}};var xe=(t=>(t.MINI_APP_INITIALIZED="MINI_APP_INITIALIZED",t.LOGIN_START="LOGIN_START",t.SIGN_OUT="SIGN_OUT",t))(xe||{}),ae=(t=>(t.TwoFAPassRequest="TwoFAPassRequest",t.AuthSuccess="AuthSuccess",t.AuthError="AuthError",t.SignedOut="SignedOut",t.MiniAppInitConfirmed="MiniAppInitConfirmed",t))(ae||{}),hr=I('<div class="audio-message"><audio controls>Your browser does not support the audio element.</audio> <div class="message-text"> </div></div>'),mr=I('<span class="loading-dots">...</span>'),yr=I('<div class="message-text"><!></div>'),pr=I('<div class="message server-message"><!></div>'),Sr=I('<div class="message user-message"><div class="message-text"> </div> <img alt="User" class="avatar"></div>'),Ar=I("<div><!></div>"),Er=I('<div class="input-container"><input type="text" placeholder="Type your message..."> <button>SEND</button></div>'),xr=I('<button class="response-button"> </button>'),Tr=I('<div class="buttons-container"></div>'),Ur=I('<button class="action-button"> </button>'),Ir=I('<div class="action-buttons-container"></div>'),kr=I('<div class="container"><div class="messages-container"></div> <!> <!> <!></div>');function Dr(t,e){Ae(e,!1);let r=F(e,"user",8),s=F(e,"avatarUrl",12),n=F(e,"buttons",12),a=F(e,"actionButtons",12),l=F(e,"canInput",12),g=F(e,"sessionData",8),b=F(e,"sessionManager",8),m=F(e,"onSignOut",8),w=F(e,"messages",12),f=[],h=B("");const v=new ArrayBuffer(0);async function u(){if(c(h).trim()){w([...w(),{type:"user",text:c(h)}]);try{const i=await ie({user_id:r().id,username:r().username,user_first_name:r().first_name,user_last_name:r().last_name,action:c(h),session_data:g()||v});w([...w(),{type:"server",text:i.message}]),n(i.buttons),a(i.action_buttons),l(i.can_input),s(s()),p(h,"")}catch(i){console.error("Error sending message:",i),w([...w(),{type:"server",text:"Error sending message to server"}])}}}async function E(i){try{if(i==="Get news!"){w([...w(),{type:"user",text:i},{type:"server",text:`Записываю для тебя подкаст... 
дай мне пару минут, не закрывай приложение, но можешь его свернуть`},{type:"server",text:"...",isLoading:!0}]);const o={user_id:r().id,username:r().username,user_first_name:r().first_name,user_last_name:r().last_name,action:i,session_data:g()||v},_=await ie(o);w(w().filter(A=>!A.isLoading&&A.type!=="server").concat({type:"server",text:_.message,audioData:_.audio_data})),n(_.buttons),a(_.action_buttons),l(_.can_input)}else if(i==="Sign out"){const o={user_id:r().id,username:r().username,user_first_name:r().first_name,user_last_name:r().last_name,action_step:xe.SIGN_OUT,session_data:g()||v},_=await ie(o);if(w([...w(),{type:"user",text:i},{type:"server",text:_.message,audioData:_.audio_data}]),n(_.buttons),a(_.action_buttons),l(_.can_input),_.stage===ae.SignedOut)try{await b().session_exists(BigInt(r().id))&&(await b().delete_session(BigInt(r().id)),console.log("Session successfully deleted after sign-out command from user"),m()())}catch(A){console.error("Error handling session deletion after sign-out command from user:",A)}}else{const o={user_id:r().id,username:r().username,user_first_name:r().first_name,user_last_name:r().last_name,action:i,session_data:g()||v},_=await ie(o);w([...w(),{type:"user",text:i},{type:"server",text:_.message,audioData:_.audio_data}]),n(_.buttons),a(_.action_buttons),l(_.can_input)}}catch(o){console.error("Error handling button click:",o)}}function D(i){try{const o=new Uint8Array(i),_=new Blob([o.buffer],{type:"audio/mpeg"}),A=URL.createObjectURL(_);return f.push(A),console.log("Audio URL created:",A),console.log("Audio data size:",o.length),A}catch(o){return console.error("Error creating audio URL:",o),""}}Zt(()=>{f.forEach(i=>URL.revokeObjectURL(i))}),Se();var U=kr(),y=T(U);_e(y,5,w,ue,(i,o)=>{var _=Ar(),A=T(_);{var d=Y=>{var j=pr(),M=T(j);{var R=H=>{var O=hr(),oe=T(O);Z(()=>le(oe,"src",D(c(o).audioData)));var $=C(oe,2),ee=T($,!0);S($),S(O),Z(()=>ne(ee,c(o).text)),V("error",oe,K=>console.error("Audio error:",K)),x(H,O)},J=H=>{var O=yr(),oe=T(O);{var $=K=>{var re=mr();x(K,re)},ee=K=>{var re=vt();Z(()=>ne(re,c(o).text)),x(K,re)};W(oe,K=>{c(o).isLoading?K($):K(ee,!1)})}S(O),x(H,O)};W(M,H=>{c(o).audioData?H(R):H(J,!1)})}S(j),x(Y,j)},z=Y=>{var j=Sr(),M=T(j),R=T(M,!0);S(M);var J=C(M,2);S(j),Z(()=>{ne(R,c(o).text),le(J,"src",s())}),x(Y,j)};W(A,Y=>{c(o).type==="server"?Y(d):Y(z,!1)})}S(_),Z(()=>ze(_,`message-row ${c(o).type??""}`)),x(i,_)}),S(y);var N=C(y,2);{var q=i=>{var o=Er(),_=T(o);at(_);var A=C(_,2);S(o),ct(_,()=>c(h),d=>p(h,d)),V("keydown",_,d=>d.key==="Enter"&&u()),V("click",A,u),x(i,o)};W(N,i=>{l()&&i(q)})}var L=C(N,2);{var P=i=>{var o=Tr();_e(o,5,n,ue,(_,A)=>{var d=xr(),z=T(d,!0);S(d),Z(()=>ne(z,c(A))),V("click",d,()=>E(c(A))),x(_,d)}),S(o),x(i,o)};W(L,i=>{n().length>0&&i(P)})}var G=C(L,2);{var Q=i=>{var o=Ir();_e(o,5,a,ue,(_,A)=>{var d=Ur(),z=T(d,!0);S(d),Z(()=>ne(z,c(A))),V("click",d,()=>E(c(A))),x(_,d)}),S(o),x(i,o)};W(G,i=>{a().length>0&&i(Q)})}S(U),x(t,U),Ee()}var Nr=I('<img alt="User" class="avatar">'),Mr=I('<div><div><div class="message-text"> </div> <!></div></div>'),zr=I('<div class="input-container"><input> <button>Send</button></div>'),Br=I('<button class="response-button"> </button>'),Or=I('<div class="buttons-container"></div>'),Lr=I('<button class="action-button"> </button>'),Rr=I('<div class="action-buttons-container"></div>'),Cr=I('<div class="container"><div class="messages-container"></div> <!> <!> <!></div>');function Pr(t,e){Ae(e,!1);let r=F(e,"user",8),s=F(e,"avatarUrl",8),n=F(e,"sessionManager",8),a=F(e,"onAuthSuccess",8),l=B([]),g=B(""),b=B([]),m=B([]),w=B(!1);const f=new ArrayBuffer(0);let h=B();st(async()=>{await v()});async function v(){try{const i=await ie({user_id:r().id,username:r().username,user_first_name:r().first_name,user_last_name:r().last_name,action_step:xe.LOGIN_START,session_data:f});await D(i)}catch(i){console.error("Error starting authentication:",i),p(l,[...c(l),{type:"server",text:"Error occurred during login. Please restart the application and try again."}])}}async function u(){if(!c(g).trim())return;p(l,[...c(l),{type:"user",text:c(h)===ae.TwoFAPassRequest?"*".repeat(c(g).length):c(g)}]);const i=c(g);p(g,"");try{const o=await ie({user_id:r().id,username:r().username,user_first_name:r().first_name,user_last_name:r().last_name,action:i,session_data:f});await D(o)}catch(o){console.error("Error handling input:",o)}}async function E(i){try{const o=await ie({user_id:r().id,username:r().username,user_first_name:r().first_name,user_last_name:r().last_name,action:i,session_data:f});p(l,[...c(l),{type:"user",text:i}]),await D(o)}catch(o){console.error("Error handling button click:",o)}}async function D(i){if(p(l,[...c(l),{type:"server",text:i.message}]),p(b,i.buttons),p(m,i.action_buttons),p(w,i.can_input),p(h,i.stage),i.stage===ae.AuthSuccess&&i.session_data)try{await n().save_session(BigInt(r().id),new Uint8Array(i.session_data)),console.log("Session saved successfully in IndexedDB"),a()(i)}catch(o){console.error("Error saving session:",o)}else if(i.stage===ae.AuthError)try{await n().session_exists(BigInt(r().id))&&(await n().delete_session(BigInt(r().id)),console.log("Old session deleted due to auth error"))}catch(o){console.error("Error handling session deletion:",o)}}Se();var U=Cr(),y=T(U);_e(y,5,()=>c(l),ue,(i,o)=>{var _=Mr(),A=T(_),d=T(A),z=T(d,!0);S(d);var Y=C(d,2);{var j=M=>{var R=Nr();Z(()=>le(R,"src",s())),x(M,R)};W(Y,M=>{c(o).type==="user"&&M(j)})}S(A),S(_),Z(()=>{ze(_,`message-row ${c(o).type??""}`),ze(A,`message ${c(o).type??""}-message`),ne(z,c(o).text)}),x(i,_)}),S(y);var N=C(y,2);{var q=i=>{var o=zr(),_=T(o);at(_);var A=C(_,2);S(o),Z(()=>{le(_,"type",c(h)===ae.TwoFAPassRequest?"password":"text"),le(_,"placeholder",c(h)===ae.TwoFAPassRequest?"Enter your 2FA password...":"Enter your response...")}),ct(_,()=>c(g),d=>p(g,d)),V("keydown",_,d=>d.key==="Enter"&&u()),V("click",A,u),x(i,o)};W(N,i=>{c(w)&&i(q)})}var L=C(N,2);{var P=i=>{var o=Or();_e(o,5,()=>c(b),ue,(_,A)=>{var d=Br(),z=T(d,!0);S(d),Z(()=>ne(z,c(A))),V("click",d,()=>E(c(A))),x(_,d)}),S(o),x(i,o)};W(L,i=>{c(b).length>0&&i(P)})}var G=C(L,2);{var Q=i=>{var o=Rr();_e(o,5,()=>c(m),ue,(_,A)=>{var d=Lr(),z=T(d,!0);S(d),Z(()=>ne(z,c(A))),V("click",d,()=>E(c(A))),x(_,d)}),S(o),x(i,o)};W(G,i=>{c(m).length>0&&i(Q)})}S(U),x(t,U),Ee()}const Fr=`Ваши данные в безопасности!

Мы используем принцип local-first, чтобы ваши данные оставались только под вашим контролем.
Это означает, что ключевые элементы вашей Telegram-сессии хранятся непосредственно на вашем устройстве.
Пароли и одноразовые коды не сохраняются и не логируются ни в каком виде.

Мы ценим ваше доверие и предлагаем полную прозрачность. Вы всегда можете ознакомиться с исходным кодом нашего приложения в открытом репозитории, чтобы лично убедиться в безопасности и надежности нашего подхода.`;var Wr=I('<div class="modal-backdrop" role="dialog" aria-modal="true"><button class="backdrop-button" aria-label="Close modal overlay"></button> <div class="modal-content" role="document"><div class="modal-header"><button class="close-button" aria-label="Close modal">×</button></div> <div class="modal-body"><p></p></div></div></div>');function qr(t,e){Ae(e,!1);let r=F(e,"show",8),s=F(e,"onClose",8),n=B(!1);function a(){p(n,!0),setTimeout(()=>{p(n,!1),s()()},300)}function l(w){w.key==="Escape"&&a()}Se();var g=me(),b=ce(g);{var m=w=>{var f=Wr(),h=T(f),v=C(h,2),u=T(v),E=T(u);S(u);var D=C(u,2),U=T(D);U.textContent=Fr,S(D),S(v),S(f),Z(()=>tr(v,"closing",c(n))),V("click",h,a),V("keydown",h,l),V("click",E,a),x(w,f)};W(b,w=>{r()&&w(m)})}x(t,g),Ee()}async function Gr(t,e){try{if(!await t.session_exists(e))return console.log(`No session file found in IndexedDB for user: ${e}`),{success:!1};console.log(`Session file found in IndexedDB for user: ${e}`);const s=await t.get_session(e);return s?{success:!0,data:new Uint8Array(s).buffer}:(console.log(`Failed to extract session data from IndexedDB for user: ${e}`),{success:!1})}catch(r){return console.error(`Error extracting session data from IndexedDB: ${r}`),{success:!1}}}const jr={AVATARS:{TEST_USER:"https://i.ibb.co/DzMYg1f/alien-head-v2.webp",SERVER:"https://i.ibb.co/j8p2tmq/Pngtree-grey-dinosaur-cartoon-illustration-4653255.png"}},Vr=t=>t;function Yr(t){const e=t-1;return e*e*e+1}function Xe(t,{delay:e=0,duration:r=400,easing:s=Vr}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:s,css:a=>`opacity: ${a*n}`}}function Hr(t,{delay:e=0,duration:r=400,easing:s=Yr,start:n=0,opacity:a=0}={}){const l=getComputedStyle(t),g=+l.opacity,b=l.transform==="none"?"":l.transform,m=1-n,w=g*(1-a);return{delay:e,duration:r,easing:s,css:(f,h)=>`
			transform: ${b} scale(${1-m*h});
			opacity: ${g-w*h}
		`}}var Kr=I(`<div class="header svelte-z6hshm"><h1 class="svelte-z6hshm">This is an authentication page</h1> <p class="svelte-z6hshm">Please provide the data you will be asked for to be logged-in<br>To be sure it's safe, check "Account security policy" at the main page of the App</p></div> <div class="auth-container svelte-z6hshm"><!></div>`,1),Zr=I('<div class="header svelte-z6hshm"><h1 class="svelte-z6hshm">Welcome to <span class="viper-text svelte-z6hshm">the Viper room</span></h1> <p class="svelte-z6hshm">Your personal info wizard that keeps you always up to date</p></div> <div class="chat-container svelte-z6hshm"><!></div>',1),Jr=I('<div class="buttons-container svelte-z6hshm"><div class="main-button-container svelte-z6hshm"><button class="login-button svelte-z6hshm">START</button></div> <div class="bottom-button-container svelte-z6hshm"><button class="policy-button svelte-z6hshm">account security<br>policy</button></div></div>'),Xr=I('<p class="loading svelte-z6hshm">Loading...</p>'),Qr=I('<div class="main-container svelte-z6hshm"><!></div> <!>',1);function os(t,e){Ae(e,!1);let r=B(null),s=B(null),n=B(!1),a=B(!1),l=jr.AVATARS.TEST_USER,g=B(),b=B(!1),m,w=B(!1),f=B([]),h=B([]),v=B([]),u=B(!0);const E=new ArrayBuffer(0);st(async()=>{await new Promise(d=>setTimeout(d,100)),await D(),console.log("Wasm module initialized");try{console.log("App mounted. Trying to initialize user..."),await U(),p(w,!0)}catch(d){console.error("Error initializing any user:",d)}});async function D(){await _t(),p(g,new fr),await c(g).initialize(),console.log("IndexedDB session manager initialized")}const U=async()=>{var d,z,Y,j;try{let M,R;(j=(Y=(z=(d=window.Telegram)==null?void 0:d.WebApp)==null?void 0:z.initDataUnsafe)==null?void 0:Y.user)!=null&&j.id?(M=window.Telegram.WebApp.initDataUnsafe.user,R=await wr(M.id),console.log("Telegram user initialized:",M)):(M={id:7543812650,username:"test_user",first_name:"Test",last_name:"User"},R=l,console.log("Test user initialized:",M)),p(r,M),p(s,R);const{success:J,data:H}=await Gr(c(g),BigInt(c(r).id));if(!J){console.log(`Failed to extract ${c(r).username}'s session from IndexedDB. User must be logged in first`);return}const O=await ie({user_id:c(r).id,username:c(r).username,user_first_name:c(r).first_name,user_last_name:c(r).last_name,action_step:xe.MINI_APP_INITIALIZED,session_data:H||E});J&&O.stage===ae.MiniAppInitConfirmed?(console.log("Telegram client is authorized and ready for use"),p(n,!0),p(f,[{type:"server",text:O.message}]),p(h,O.buttons),p(v,O.action_buttons),p(u,O.can_input),p(s,c(s))):(console.log("Telegram client is NOT authorized"),console.log("Server response:",O.message))}catch(M){console.error("Global error in initializing user fn:",M)}},y=()=>{p(a,!0)},N=d=>{p(a,!1),p(n,!0),p(f,[{type:"server",text:d.message}]),p(h,d.buttons),p(v,d.action_buttons),p(u,d.can_input)},q=()=>{p(n,!1)},L=()=>{p(b,!0)},P=()=>{p(b,!1)};Se();var G=Qr(),Q=ce(G),i=T(Q);{var o=d=>{var z=me(),Y=ce(z);{var j=R=>{var J=Kr(),H=C(ce(J),2),O=T(H);Pr(O,{get user(){return c(r)},get avatarUrl(){return c(s)},get sessionManager(){return c(g)},onAuthSuccess:N}),S(H),x(R,J)},M=R=>{var J=me(),H=ce(J);{var O=$=>{var ee=Zr(),K=C(ce(ee),2),re=T(K);Dr(re,{get user(){return c(r)},get avatarUrl(){return c(s)},get messages(){return c(f)},get buttons(){return c(h)},get actionButtons(){return c(v)},get canInput(){return c(u)},sessionData:m,get sessionManager(){return c(g)},onSignOut:q}),S(K),x($,ee)},oe=$=>{var ee=me(),K=ce(ee);{var re=Te=>{var we=Jr(),Ue=T(we),Oe=T(Ue);S(Ue);var Le=C(Ue,2),Re=T(Le);S(Le),S(we),V("click",Oe,y),De(1,Oe,()=>Hr,()=>({duration:500,delay:600,start:.95,opacity:0})),V("click",Re,L),De(1,Re,()=>Xe,()=>({duration:300,delay:300})),De(1,we,()=>Xe,()=>({duration:300,delay:150})),x(Te,we)};W(K,Te=>{c(w)&&Te(re)})}x($,ee)};W(H,$=>{c(n)?$(O):$(oe,!1)},!0)}x(R,J)};W(Y,R=>{c(a)?R(j):R(M,!1)})}x(d,z)},_=d=>{var z=Xr();x(d,z)};W(i,d=>{c(r)?d(o):d(_,!1)})}S(Q);var A=C(Q,2);qr(A,{get show(){return c(b)},onClose:P}),x(t,G),Ee()}export{os as component,is as universal};
