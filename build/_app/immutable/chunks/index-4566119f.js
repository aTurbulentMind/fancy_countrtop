function B(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function k(){return Object.create(null)}function p(t){t.forEach(T)}function G(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function J(t){return Object.keys(t).length===0}function ot(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)a[o]=n.dirty[o]|r[o];return a}return n.dirty|r}return n.dirty}function st(t,n,e,i,r,a){if(r){const l=O(n,e,i,a);t.p(l,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let $=!1;function L(){$=!0}function W(){$=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:K(1,r,y=>n[e[y]].claim_order,u))-1;i[c]=e[f]+1;const s=f+1;e[s]=c,r=Math.max(s,r)}const a=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(a.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);a.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<a.length&&l[c].claim_order>=a[u].claim_order;)u++;const f=u<a.length?a[u]:null;t.insertBefore(l[c],f)}}function R(t,n){if($){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){$&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function dt(){return S(" ")}function ht(){return S("")}function mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){Z(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function z(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||a.push(o.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(n))}function pt(t,n,e){return z(t,n,e,V)}function yt(t,n,e){return z(t,n,e,X)}function tt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function gt(t){return tt(t," ")}function xt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function bt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let m;function h(t){m=t}function A(){if(!m)throw new Error("Function called outside component initialization");return m}function wt(t){A().$$.on_mount.push(t)}function $t(t){A().$$.after_update.push(t)}function vt(t,n){return A().$$.context.set(t,n),n}const d=[],M=[],b=[],q=[],D=Promise.resolve();let E=!1;function F(){E||(E=!0,D.then(H))}function Et(){return F(),D}function N(t){b.push(t)}const v=new Set;let x=0;function H(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),nt(n.$$)}for(h(null),d.length=0,x=0;M.length;)M.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];v.has(e)||(v.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();E=!1,v.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const w=new Set;let _;function Nt(){_={r:0,c:[],p:_}}function St(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&(w.delete(t),t.i(n))}function At(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function jt(t){t&&t.c()}function Ct(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,on_mount:a,on_destroy:l,after_update:o}=t.$$;r&&r.m(n,e),i||N(()=>{const c=a.map(T).filter(G);l?l.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(N)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function kt(t,n,e,i,r,a,l,o=[-1]){const c=m;h(t);const u=t.$$={fragment:null,ctx:null,props:a,update:B,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:k(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(s,y,...j)=>{const C=j.length?j[0]:y;return u.ctx&&r(u.ctx[s],u.ctx[s]=C)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](C),f&&lt(t,s)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){L();const s=Y(n.target);u.fragment&&u.fragment.l(s),s.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),W(),H()}h(c)}class Mt{$destroy(){rt(this,1),this.$destroy=B}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{rt as A,Et as B,X as C,yt as D,R as E,ot as F,st as G,ft as H,at as I,ut as J,Mt as S,dt as a,_t as b,gt as c,St as d,ht as e,et as f,Nt as g,U as h,kt as i,vt as j,$t as k,V as l,pt as m,B as n,wt as o,Y as p,mt as q,bt as r,ct as s,At as t,S as u,tt as v,xt as w,jt as x,Ct as y,it as z};
