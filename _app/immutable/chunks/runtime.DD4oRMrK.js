var bn=Array.isArray,qn=Array.from,Pn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Ln=Array.prototype,Jt=Object.getPrototypeOf;const Mn=()=>{};function Yn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,j=8,ut=16,T=32,W=64,nt=128,D=256,G=512,h=1024,k=2048,H=4096,C=8192,b=16384,Qt=32768,Tt=65536,jn=1<<17,tn=1<<19,mt=1<<20,pt=Symbol("$state"),Hn=Symbol("legacy props"),Bn=Symbol("");function At(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function gt(t){return!nn(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function en(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function $n(){X=!0}const Zn=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=1,er=2,on="[",fn="[!",_n="]",kt={},sr=Symbol();function ot(t,n){var r={f:0,v:t,reactions:null,equals:At,version:0};return r}function lr(t){return Rt(ot(t))}function cn(t,n=!1){var e;const r=ot(t);return n||(r.equals=gt),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ar(t,n=!1){return Rt(cn(t,n))}function Rt(t){return o!==null&&o.f&y&&(w===null?Rn([t]):w.push(t)),t}function ur(t,n){return o!==null&&_t()&&o.f&(y|ut)&&(w===null||!w.includes(t))&&un(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v=n,t.version=Gt(),St(t,k),_t()&&u!==null&&u.f&h&&!(u.f&T)&&(v!==null&&v.includes(t)?(m(u,k),tt(u)):g===null?Sn([t]):g.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&k||!e&&a===u||(m(a,n),i&(h|D)&&(i&y?St(a,H):tt(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let N=!1;function or(t){N=t}let A;function F(t){if(t===null)throw xt(),kt;return A=t}function ir(){return F(q(A))}function fr(t){if(N){if(q(A)!==null)throw xt(),kt;A=t}}function _r(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===on||r===fn)&&(t+=1)}var e=q(n);n.remove(),n=e}}var ht,Dt,It;function cr(){if(ht===void 0){ht=window;var t=Element.prototype,n=Node.prototype;Dt=vt(n,"firstChild").get,It=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function q(t){return It.call(t)}function vr(t,n){if(!N)return et(t);var r=et(A);if(r===null)r=A.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),F(e),e}return F(r),r}function pr(t,n){if(!N){var r=et(t);return r instanceof Comment&&r.data===""?q(r):r}return A}function hr(t,n=1,r=!1){let e=N?A:t;for(var s;n--;)s=e,e=q(e);if(!N)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function dr(t){t.textContent=""}function pn(t){var n=y|k;u===null?n|=D:u.f|=mt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:At,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Er(t){const n=pn(t);return n.equals=gt,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):x(e)}}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=u;z(hn(t));try{Ot(t),n=Kt(t)}finally{z(r)}return n}function Nt(t){var n=Ct(t),r=(S||t.f&D)&&t.deps!==null?H:h;m(t,r),t.equals(n)||(t.v=n,t.version=Gt())}function it(t){Ot(t),Y(t,0),m(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function bt(t){u===null&&o===null&&sn(),o!==null&&o.f&D&&en(),ft&&rn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{dt(!0),Q(a),a.f|=Qt}catch(_){throw x(a),_}finally{dt(i)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mt)===0;if(!p&&!s&&e&&(l!==null&&dn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function yr(t){const n=P(j,null,!1);return m(n,h),n.teardown=t,n}function wr(t){bt();var n=u!==null&&(u.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=qt(t);return e}}function Tr(t){return bt(),En(t)}function mr(t){const n=P(W,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{x(n),e(void 0)}):(x(n),e(void 0))})}function qt(t){return P(wt,t,!1)}function En(t){return P(j,t,!0)}function Ar(t){return yn(t)}function yn(t,n=0){return P(j|ut|n,t,!0)}function gr(t,n=!0){return P(j|T,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ft,e=o;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Ft(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;x(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||x(n),n=r}}function x(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:q(e);e.remove(),e=l}r=!0}Lt(t,n&&!r),Ft(t),Y(t,0),m(t,b);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Yt(t,r,!0),mn(r,()=>{x(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Yt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Tt)!==0||(e.f&T)!==0;Yt(e,n,l?r:!1),e=s}}}function kr(t){jt(t,!0)}function jt(t,n){if(t.f&C){B(t)&&Q(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Tt)!==0||(r.f&T)!==0;jt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const An=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let K=!1,$=!1,st=[],lt=[];function Ht(){K=!1;const t=st.slice();st=[],yt(t)}function Bt(){$=!1;const t=lt.slice();lt=[],yt(t)}function Rr(t){K||(K=!0,queueMicrotask(Ht)),st.push(t)}function Sr(t){$||($=!0,An(Bt)),lt.push(t)}function gn(){K&&Ht(),$&&Bt()}const Ut=0,kn=1;let U=!1,V=Ut,L=!1,M=null,I=!1,ft=!1;function dt(t){I=t}function Et(t){ft=t}let R=[],O=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let w=null;function Rn(t){w=t}let v=null,E=0,g=null;function Sn(t){g=t}let Vt=1,S=!1,f=null;function Gt(){return++Vt}function _t(){return!X||f!==null&&f.l===null}function B(t){var a,i;var n=t.f;if(n&k)return!0;if(n&H){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&Nt(l),e&&u!==null&&!S&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!S)&&m(t,h)}return!1}function xn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw U=!1,t}function Dn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&nt)===0)}function J(t,n,r,e){if(U){if(r===null&&(U=!1),Dn(n))throw t;return}r!==null&&(U=!0);{xn(t,n);return}}function Kt(t){var ct;var n=v,r=E,e=g,s=o,l=S,a=w,i=f,p=t.f;v=null,E=0,g=null,o=p&(T|W)?null:t,S=!I&&(p&D)!==0,w=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!S)for(c=E;c<_.length;c++)((ct=_[c]).reactions??(ct.reactions=[])).push(t)}else _!==null&&E<_.length&&(Y(t,E),_.length=E);return d}finally{v=n,E=r,g=e,o=s,S=l,w=a,f=i}}function In(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(m(n,H),n.f&(D|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function Q(t){var n=t.f;if(!(n&b)){m(t,h);var r=u,e=f;u=t;try{n&ut?wn(t):Lt(t),Ft(t),Pt(t);var s=Kt(t);t.teardown=typeof s=="function"?s:null,t.version=Vt}catch(l){J(l,t,r,e||t.ctx)}finally{u=r}}}function $t(){if(O>1e3){O=0;try{ln()}catch(t){if(M!==null)J(t,M,null);else throw t}}O++}function Zt(t){var n=t.length;if(n!==0){$t();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];zt(s,l),On(l)}}finally{I=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|C)))try{B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(s){J(s,e,null,e.ctx)}}}function Cn(){if(L=!1,O>1001)return;const t=R;R=[],Zt(t),L||(O=0,M=null)}function tt(t){V===Ut&&(L||(L=!0,queueMicrotask(Cn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|T)){if(!(r&h))return;n.f^=h}}R.push(n)}function zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&T)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&C))if(s&j){if(l)r.f^=h;else try{B(r)&&Q(r)}catch(c){J(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&wt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),zt(p,n)}function Wt(t){var n=V,r=R;try{$t();const s=[];V=kn,R=s,L=!1,Zt(r);var e=t==null?void 0:t();return gn(),(R.length>0||s.length>0)&&Wt(),O=0,M=null,e}finally{V=n,R=r}}async function xr(){await Promise.resolve(),Wt()}function Dr(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=Ct(t);return it(t),e}if(o!==null){w!==null&&w.includes(t)&&an();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&T)&&g.includes(t)&&(m(u,k),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,B(l)&&Nt(l)),t.v}function Ir(t){const n=o;try{return o=null,t()}finally{o=n}}const Nn=~(k|H|h);function m(t,n){t.f=t.f&Nn|n}function Or(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ot(!1)})}function Cr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];z(l.effect),Z(l.reaction),qt(l.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function Nr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Qn as $,ot as A,Gn as B,ur as C,vt as D,Tt as E,u as F,Kn as G,Jt as H,bn as I,ir as J,fn as K,_r as L,F as M,or as N,kr as O,Tn as P,jn as Q,T as R,pt as S,W as T,sr as U,z as V,Jn as W,tr as X,Hn as Y,Vn as Z,Er as _,wr as a,gt as a0,Xn as a1,cn as a2,nr as a3,rt as a4,et as a5,rr as a6,er as a7,Z as a8,o as a9,Bn as aA,Xt as aB,_t as aC,ar as aD,nn as aE,yr as aa,Rr as ab,Pn as ac,cr as ad,on as ae,q as af,kt as ag,_n as ah,xt as ai,Un as aj,dr as ak,qn as al,mr as am,qt as an,En as ao,Wt as ap,xr as aq,lr as ar,C as as,vn as at,Yt as au,mn as av,zn as aw,Zn as ax,Wn as ay,Sr as az,Ir as b,f as c,Yn as d,Nr as e,pn as f,Dr as g,$n as h,yn as i,gr as j,x as k,X as l,N as m,Mn as n,A as o,Or as p,pr as q,yt as r,Cr as s,Ar as t,Tr as u,vr as v,fr as w,hr as x,Fn as y,Ln as z};
