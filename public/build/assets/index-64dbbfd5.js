import{l as V,m as R,F as q,p as O,q as D,j as g,s as A,v as H,x as j,y as w,z as I}from"./app-2c444acf.js";import{r as B}from"./vue.runtime.esm-bundler-fc9d968a.js";function k(e,n,...l){if(e in n){let t=n[e];return typeof t=="function"?t(...l):t}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(t=>`"${t}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,k),o}var $=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))($||{}),K=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(K||{});function C({visible:e=!0,features:n=0,ourProps:l,theirProps:o,...t}){var c;let r=T(o,l),a=Object.assign(t,{props:r});if(e||n&2&&r.static)return S(a);if(n&1){let i=(c=r.unmount)==null||c?0:1;return k(i,{[0](){return null},[1](){return S({...t,props:{...r,hidden:!0,style:{display:"none"}}})}})}return S(a)}function S({props:e,attrs:n,slots:l,slot:o,name:t}){var c,r;let{as:a,...i}=X(e,["unmount","static"]),u=(c=l.default)==null?void 0:c.call(l,o),m={};if(o){let h=!1,s=[];for(let[d,f]of Object.entries(o))typeof f=="boolean"&&(h=!0),f===!0&&s.push(d);h&&(m["data-headlessui-state"]=s.join(" "))}if(a==="template"){if(u=_(u??[]),Object.keys(i).length>0||Object.keys(n).length>0){let[h,...s]=u??[];if(!F(h)||s.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${t} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(n)).map(p=>p.trim()).filter((p,E,z)=>z.indexOf(p)===E).sort((p,E)=>p.localeCompare(E)).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let d=T((r=h.props)!=null?r:{},i),f=V(h,d);for(let p in d)p.startsWith("on")&&(f.props||(f.props={}),f.props[p]=d[p]);return f}return Array.isArray(u)&&u.length===1?u[0]:u}return R(a,Object.assign({},i,m),{default:()=>u})}function _(e){return e.flatMap(n=>n.type===q?_(n.children):[n])}function T(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},l={};for(let o of e)for(let t in o)t.startsWith("on")&&typeof o[t]=="function"?(l[t]!=null||(l[t]=[]),l[t].push(o[t])):n[t]=o[t];if(n.disabled||n["aria-disabled"])return Object.assign(n,Object.fromEntries(Object.keys(l).map(o=>[o,void 0])));for(let o in l)Object.assign(n,{[o](t,...c){let r=l[o];for(let a of r){if(t instanceof Event&&t.defaultPrevented)return;a(t,...c)}}});return n}function X(e,n=[]){let l=Object.assign({},e);for(let o of n)o in l&&delete l[o];return l}function F(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let W=0;function Q(){return++W}function L(){return Q()}var b=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(b||{});function v(e){var n;return e==null||e.value==null?null:(n=e.value.$el)!=null?n:e.value}let N=Symbol("Context");var y=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(y||{});function Y(){return O(N,null)}function G(e){D(N,e)}function x(e,n){if(e)return e;let l=n??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function J(e,n){let l=g(x(e.value.type,e.value.as));return A(()=>{l.value=x(e.value.type,e.value.as)}),H(()=>{var o;l.value||v(n)&&v(n)instanceof HTMLButtonElement&&!((o=v(n))!=null&&o.hasAttribute("type"))&&(l.value="button")}),l}var Z=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Z||{});let M=Symbol("DisclosureContext");function P(e){let n=O(M,null);if(n===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,P),l}return n}let U=Symbol("DisclosurePanelContext");function ee(){return O(U,null)}let he=j({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:n,attrs:l}){let o=g(e.defaultOpen?0:1),t=g(null),c=g(null),r={buttonId:g(null),panelId:g(null),disclosureState:o,panel:t,button:c,toggleDisclosure(){o.value=k(o.value,{[0]:1,[1]:0})},closeDisclosure(){o.value!==1&&(o.value=1)},close(a){r.closeDisclosure();let i=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?v(a):v(r.button):v(r.button))();i==null||i.focus()}};return D(M,r),G(w(()=>k(o.value,{[0]:y.Open,[1]:y.Closed}))),()=>{let{defaultOpen:a,...i}=e,u={open:o.value===0,close:r.close};return C({theirProps:i,ourProps:{},slot:u,slots:n,attrs:l,name:"Disclosure"})}}}),me=j({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-disclosure-button-${L()}`}},setup(e,{attrs:n,slots:l,expose:o}){let t=P("DisclosureButton");A(()=>{t.buttonId.value=e.id}),I(()=>{t.buttonId.value=null});let c=ee(),r=w(()=>c===null?!1:c.value===t.panelId.value),a=g(null);o({el:a,$el:a}),r.value||H(()=>{t.button.value=a.value});let i=J(w(()=>({as:e.as,type:n.type})),a);function u(){var s;e.disabled||(r.value?(t.toggleDisclosure(),(s=v(t.button))==null||s.focus()):t.toggleDisclosure())}function m(s){var d;if(!e.disabled)if(r.value)switch(s.key){case b.Space:case b.Enter:s.preventDefault(),s.stopPropagation(),t.toggleDisclosure(),(d=v(t.button))==null||d.focus();break}else switch(s.key){case b.Space:case b.Enter:s.preventDefault(),s.stopPropagation(),t.toggleDisclosure();break}}function h(s){switch(s.key){case b.Space:s.preventDefault();break}}return()=>{let s={open:t.disclosureState.value===0},{id:d,...f}=e,p=r.value?{ref:a,type:i.value,onClick:u,onKeydown:m}:{id:d,ref:a,type:i.value,"aria-expanded":e.disabled?void 0:t.disclosureState.value===0,"aria-controls":v(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:u,onKeydown:m,onKeyup:h};return C({ourProps:p,theirProps:f,slot:s,attrs:n,slots:l,name:"DisclosureButton"})}}}),ge=j({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-disclosure-panel-${L()}`}},setup(e,{attrs:n,slots:l,expose:o}){let t=P("DisclosurePanel");A(()=>{t.panelId.value=e.id}),I(()=>{t.panelId.value=null}),o({el:t.panel,$el:t.panel}),D(U,t.panelId);let c=Y(),r=w(()=>c!==null?(c.value&y.Open)===y.Open:t.disclosureState.value===0);return()=>{let a={open:t.disclosureState.value===0,close:t.close},{id:i,...u}=e,m={id:i,ref:t.panel};return C({ourProps:m,theirProps:u,slot:a,attrs:n,slots:l,features:$.RenderStrategy|$.Static,visible:r.value,name:"DisclosurePanel"})}}});const{createElementVNode:te,openBlock:ne,createElementBlock:le}=B;var oe=function(n,l){return ne(),le("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[te("path",{"fill-rule":"evenodd",d:"M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z","clip-rule":"evenodd"})])};const{createElementVNode:ae,openBlock:re,createElementBlock:se}=B;var ue=function(n,l){return re(),se("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[ae("path",{"fill-rule":"evenodd",d:"M9.493 2.853a.75.75 0 00-1.486-.205L7.545 6H4.198a.75.75 0 000 1.5h3.14l-.69 5H3.302a.75.75 0 000 1.5h3.14l-.435 3.148a.75.75 0 001.486.205L7.955 14h2.986l-.434 3.148a.75.75 0 001.486.205L12.456 14h3.346a.75.75 0 000-1.5h-3.14l.69-5h3.346a.75.75 0 000-1.5h-3.14l.435-3.147a.75.75 0 00-1.486-.205L12.045 6H9.059l.434-3.147zM8.852 7.5l-.69 5h2.986l.69-5H8.852z","clip-rule":"evenodd"})])};const{createElementVNode:ie,openBlock:ce,createElementBlock:pe}=B;var de=function(n,l){return ce(),pe("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[ie("path",{"fill-rule":"evenodd",d:"M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z","clip-rule":"evenodd"})])},be=oe,ye=ue,we=de;export{be as C,ye as H,he as Q,we as S,me as V,ge as X};
