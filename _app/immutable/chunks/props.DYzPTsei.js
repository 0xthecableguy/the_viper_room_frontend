import{S as N,F as z,G as J,H as R,I as Q,J as P,K as D,U as b,g as o,A as F,L as W,M as X,N as k,i as p,m as C,C as ee,E as re,O as ae,P as ne,D as te,Q as M,R as U,j,V as G,o as ie,W as fe,X as se,b as q,Y as ue,Z as le,_ as ve,$ as _e,a0 as H,l as de,a1 as ce,a2 as be,a3 as he,a4 as ye,f as K,a5 as ge,a6 as Pe,a7 as oe,a8 as Re,a9 as Ee,aa as Ie}from"./runtime.D084H64K.js";function w(r,s=null,d){if(typeof r!="object"||r===null||N in r)return r;const v=X(r);if(v!==z&&v!==J)return r;var t=new Map,u=k(r),h=R(0);u&&t.set("length",R(r.length));var g;return new Proxy(r,{defineProperty(f,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&Q();var i=t.get(e);return i===void 0?(i=R(a.value),t.set(e,i)):P(i,w(a.value,g)),!0},deleteProperty(f,e){var a=t.get(e);if(a===void 0)e in f&&t.set(e,R(b));else{if(u&&typeof e=="string"){var i=t.get("length"),n=Number(e);Number.isInteger(n)&&n<i.v&&P(i,n)}P(a,b),Z(h)}return!0},get(f,e,a){var c;if(e===N)return r;var i=t.get(e),n=e in f;if(i===void 0&&(!n||(c=D(f,e))!=null&&c.writable)&&(i=R(w(n?f[e]:b,g)),t.set(e,i)),i!==void 0){var l=o(i);return l===b?void 0:l}return Reflect.get(f,e,a)},getOwnPropertyDescriptor(f,e){var a=Reflect.getOwnPropertyDescriptor(f,e);if(a&&"value"in a){var i=t.get(e);i&&(a.value=o(i))}else if(a===void 0){var n=t.get(e),l=n==null?void 0:n.v;if(n!==void 0&&l!==b)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return a},has(f,e){var l;if(e===N)return!0;var a=t.get(e),i=a!==void 0&&a.v!==b||Reflect.has(f,e);if(a!==void 0||F!==null&&(!i||(l=D(f,e))!=null&&l.writable)){a===void 0&&(a=R(i?w(f[e],g):b),t.set(e,a));var n=o(a);if(n===b)return!1}return i},set(f,e,a,i){var I;var n=t.get(e),l=e in f;if(u&&e==="length")for(var c=a;c<n.v;c+=1){var E=t.get(c+"");E!==void 0?P(E,b):c in f&&(E=R(b),t.set(c+"",E))}n===void 0?(!l||(I=D(f,e))!=null&&I.writable)&&(n=R(void 0),P(n,w(a,g)),t.set(e,n)):(l=n.v!==b,P(n,w(a,g)));var y=Reflect.getOwnPropertyDescriptor(f,e);if(y!=null&&y.set&&y.set.call(i,a),!l){if(u&&typeof e=="string"){var O=t.get("length"),A=Number(e);Number.isInteger(A)&&A>=O.v&&P(O,A+1)}Z(h)}return!0},ownKeys(f){o(h);var e=Reflect.ownKeys(f).filter(n=>{var l=t.get(n);return l===void 0||l.v!==b});for(var[a,i]of t)i.v!==b&&!(a in f)&&e.push(a);return e},setPrototypeOf(){W()}})}function Z(r,s=1){P(r,r.v+s)}function Oe(r,s,d=!1){C&&ee();var v=r,t=null,u=null,h=b,g=d?re:0,f=!1;const e=(i,n=!0)=>{f=!0,a(n,i)},a=(i,n)=>{if(h===(h=i))return;let l=!1;if(C){const c=v.data===ae;!!h===c&&(v=ne(),te(v),M(!1),l=!0)}h?(t?U(t):n&&(t=j(()=>n(v))),u&&G(u,()=>{u=null})):(u?U(u):n&&(u=j(()=>n(v))),t&&G(t,()=>{t=null})),l&&M(!0)};p(()=>{f=!1,s(e),f||a(null,null)},g),C&&(v=ie)}function $(r,s){return r===s||(r==null?void 0:r[N])===s}function Ae(r={},s,d,v){return fe(()=>{var t,u;return se(()=>{t=u,u=(v==null?void 0:v())||[],q(()=>{r!==d(...u)&&(s(r,...u),t&&$(d(...t),r)&&s(null,...t))})}),()=>{ue(()=>{u&&$(d(...u),r)&&s(null,...u)})}}),r}let m=!1;function Se(r){var s=m;try{return m=!1,[r(),m]}finally{m=s}}function V(r){for(var s=F,d=F;s!==null&&!(s.f&(ve|_e));)s=s.parent;try{return H(s),r()}finally{H(d)}}function Te(r,s,d,v){var B;var t=(d&Re)!==0,u=!de||(d&ce)!==0,h=(d&be)!==0,g=(d&Ie)!==0,f=!1,e;h?[e,f]=Se(()=>r[s]):e=r[s];var a=N in r||he in r,i=((B=D(r,s))==null?void 0:B.set)??(a&&h&&s in r?_=>r[s]=_:void 0),n=v,l=!0,c=!1,E=()=>(c=!0,l&&(l=!1,g?n=q(v):n=v),n);e===void 0&&v!==void 0&&(i&&u&&ye(),e=E(),i&&i(e));var y;if(u)y=()=>{var _=r[s];return _===void 0?E():(l=!0,c=!1,_)};else{var O=V(()=>(t?K:ge)(()=>r[s]));O.f|=le,y=()=>{var _=o(O);return _!==void 0&&(n=void 0),_===void 0?n:_}}if(!(d&Pe))return y;if(i){var A=r.$$legacy;return function(_,S){return arguments.length>0?((!u||!S||A||f)&&i(S?y():_),_):y()}}var I=!1,Y=!1,L=Ee(e),T=V(()=>K(()=>{var _=y(),S=o(L);return I?(I=!1,Y=!0,S):(Y=!1,L.v=_)}));return t||(T.equals=oe),function(_,S){if(arguments.length>0){const x=S?o(T):u&&h?w(_):_;return T.equals(x)||(I=!0,P(L,x),c&&n!==void 0&&(n=x),q(()=>o(T))),_}return o(T)}}export{w as a,Ae as b,Oe as i,Te as p};
