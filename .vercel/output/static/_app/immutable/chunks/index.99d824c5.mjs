function $(){}const X=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function pt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Y(t){return t()}function K(){return Object.create(null)}function k(t){t.forEach(Y)}function M(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t){let e;return Z(t,n=>e=n)(),e}function Kt(t,e,n){t.$$.on_destroy.push(Z(e,n))}function Qt(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],c=Math.max(e.dirty.length,s.length);for(let u=0;u<c;u+=1)r[u]=e.dirty[u]|s[u];return r}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,r){if(s){const c=tt(e,n,i,r);t.p(c,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Zt(t){return t??""}const et=typeof window<"u";let nt=et?()=>window.performance.now():()=>Date.now(),q=et?t=>requestAnimationFrame(t):$;const v=new Set;function it(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&q(it)}function st(t){let e;return v.size===0&&q(it),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let L=!1;function gt(){L=!0}function xt(){L=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=o?s+1:$t(1,s,_=>e[n[_]].claim_order,o))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,s=Math.max(a,s)}const r=[],c=[];let u=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);u>=l;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);r.reverse(),c.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<c.length;l++){for(;o<r.length&&c[l].claim_order>=r[o].claim_order;)o++;const f=o<r.length?r[o]:null;t.insertBefore(c[l],f)}}function wt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=F("style");return kt(rt(t),e),e.sheet}function kt(t,e){return wt(t.head||t,e),e.sheet}function Et(t,e){if(L){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){L&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function Tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function ee(){return G(" ")}function ne(){return G("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function re(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Ct(t,e,n)}function St(t){return Array.from(t.childNodes)}function ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,s=!1){ct(t);const r=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const l=n(u);return l===void 0?t.splice(c,1):t[c]=l,s||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const l=n(u);return l===void 0?t.splice(c,1):t[c]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function jt(t,e,n,i){return lt(t,s=>s.nodeName===e,s=>{const r=[];for(let c=0;c<s.attributes.length;c++){const u=s.attributes[c];n[u.name]||r.push(u.name)}r.forEach(c=>s.removeAttribute(c))},()=>i(e))}function ce(t,e,n){return jt(t,e,n,F)}function Dt(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function le(t){return Dt(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function oe(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new U(void 0,e);ct(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const r=s.slice(1,s.length-1);for(const c of r)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(r,e)}function ue(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e){t.value=e??""}function fe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function Ht(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Mt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Tt(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class U extends Mt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function he(t,e){return new t(e)}const j=new Map;let D=0;function Lt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:vt(e),rules:{}};return j.set(t,n),n}function ot(t,e,n,i,s,r,c,u=0){const l=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=l){const p=e+(n-e)*r(m);o+=m*100+`%{${c(p,1-p)}}
`}const f=o+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Lt(f)}_${u}`,_=rt(t),{stylesheet:d,rules:h}=j.get(_)||Rt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${s}ms 1 both`,D+=1,a}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),D-=s,D||Ot())}function Ot(){q(()=>{D||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),j.clear())})}let A;function y(t){A=t}function W(){if(!A)throw new Error("Function called outside component initialization");return A}function me(t){W().$$.on_mount.push(t)}function pe(t){W().$$.after_update.push(t)}const w=[],V=[],C=[],B=[],ut=Promise.resolve();let z=!1;function at(){z||(z=!0,ut.then(I))}function ye(){return at(),ut}function T(t){C.push(t)}function ge(t){B.push(t)}const O=new Set;let b=0;function I(){if(b!==0)return;const t=A;do{try{for(;b<w.length;){const e=w[b];b++,y(e),Pt(e.$$)}}catch(e){throw w.length=0,b=0,e}for(y(null),w.length=0,b=0;V.length;)V.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];O.has(n)||(O.add(n),n())}C.length=0}while(w.length);for(;B.length;)B.pop()();z=!1,O.clear(),y(t)}function Pt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let E;function ft(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function H(t,e,n){t.dispatchEvent(Ht(`${e?"intro":"outro"}${n}`))}const S=new Set;let x;function Bt(){x={r:0,c:[],p:x}}function zt(){x.r||k(x.c),x=x.p}function _t(t,e){t&&t.i&&(S.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),x.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const dt={duration:0};function xe(t,e,n){const i={direction:"in"};let s=e(t,n,i),r=!1,c,u,l=0;function o(){c&&P(t,c)}function f(){const{delay:_=0,duration:d=300,easing:h=X,tick:g=$,css:m}=s||dt;m&&(c=ot(t,0,1,d,_,h,m,l++)),g(0,1);const p=nt()+_,ht=p+d;u&&u.abort(),r=!0,T(()=>H(t,!0,"start")),u=st(R=>{if(r){if(R>=ht)return g(1,0),H(t,!0,"end"),o(),r=!1;if(R>=p){const J=h((R-p)/d);g(J,1-J)}}return r})}let a=!1;return{start(){a||(a=!0,P(t),M(s)?(s=s(i),ft().then(f)):f())},invalidate(){a=!1},end(){r&&(o(),r=!1)}}}function $e(t,e,n){const i={direction:"out"};let s=e(t,n,i),r=!0,c;const u=x;u.r+=1;function l(){const{delay:o=0,duration:f=300,easing:a=X,tick:_=$,css:d}=s||dt;d&&(c=ot(t,1,0,f,o,a,d));const h=nt()+o,g=h+f;T(()=>H(t,!1,"start")),st(m=>{if(r){if(m>=g)return _(0,1),H(t,!1,"end"),--u.r||k(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return r})}return M(s)?ft().then(()=>{s=s(i),l()}):l(),{end(o){o&&s.tick&&s.tick(1,0),r&&(c&&P(t,c),r=!1)}}}function be(t,e){const n=e.token={};function i(s,r,c,u){if(e.token!==n)return;e.resolved=u;let l=e.ctx;c!==void 0&&(l=l.slice(),l[c]=u);const o=s&&(e.current=s)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==r&&a&&(Bt(),qt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),zt())}):e.block.d(1),o.c(),_t(o,1),o.m(e.mount(),e.anchor),f=!0),e.block=o,e.blocks&&(e.blocks[r]=o),f&&I()}if(pt(t)){const s=W();if(t.then(r=>{y(s),i(e.then,1,e.value,r),y(null)},r=>{if(y(s),i(e.catch,2,e.error,r),y(null),!e.hasCatch)throw r}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function we(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const c=t[r],u=e[r];if(u){for(const l in c)l in u||(i[l]=1);for(const l in u)s[l]||(n[l]=u[l],s[l]=1);t[r]=u}else for(const l in c)s[l]=1}for(const c in i)c in n||(n[c]=void 0);return n}function ve(t){return typeof t=="object"&&t!==null?t:{}}function ke(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ee(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),i||T(()=>{const c=t.$$.on_mount.map(Y).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...c):k(c),t.$$.on_mount=[]}),r.forEach(T)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(w.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ae(t,e,n,i,s,r,c,u=[-1]){const l=A;y(t);const o=t.$$={fragment:null,ctx:[],props:r,update:$,not_equal:s,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:K(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&s(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Wt(t,a)),_}):[],o.update(),f=!0,k(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){gt();const a=St(e.target);o.fragment&&o.fragment.l(a),a.forEach(N)}else o.fragment&&o.fragment.c();e.intro&&_t(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),xt(),I()}y(l)}class Te{$destroy(){Gt(this,1),this.$destroy=$}$on(e,n){if(!M(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{we as $,Ne as A,Ft as B,Gt as C,T as D,ie as E,k as F,Qt as G,Vt as H,Xt as I,Ut as J,_e as K,Et as L,Kt as M,te as N,Zt as O,re as P,xe as Q,be as R,Te as S,de as T,$e as U,ke as V,ge as W,Jt as X,ae as Y,se as Z,mt as _,ee as a,ve as a0,Yt as a1,U as a2,oe as a3,At as b,le as c,qt as d,ne as e,zt as f,_t as g,N as h,Ae as i,pe as j,F as k,ce as l,St as m,$ as n,me as o,Ct as p,fe as q,G as r,It as s,ye as t,Dt as u,ue as v,Bt as w,V as x,he as y,Ee as z};