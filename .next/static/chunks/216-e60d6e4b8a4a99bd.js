"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{78030:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2265);let u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&n.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:u=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:a="",children:c,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:u,height:u,stroke:n,strokeWidth:l?24*Number(s)/Number(u):s,className:o("lucide",a),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),l=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:l,...a}=n;return(0,r.createElement)(s,{ref:i,iconNode:t,className:o("lucide-".concat(u(e)),l),...a})});return n.displayName="".concat(e),n}},78149:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},98324:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return o}});var r=n(2265),u=n(57437);function o(e,t){let n=r.createContext(t);function o(e){let{children:t,...o}=e,i=r.useMemo(()=>o,Object.values(o));return(0,u.jsx)(n.Provider,{value:i,children:t})}return o.displayName=e+"Provider",[o,function(u){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),s=n.length;function l(t){let{scope:n,children:o,...l}=t,a=n?.[e][s]||i,c=r.useMemo(()=>l,Object.values(l));return(0,u.jsx)(a.Provider,{value:c,children:o})}return n=[...n,o],l.displayName=t+"Provider",[l,function(n,u){let l=u?.[e][s]||i,a=r.useContext(l);if(a)return a;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e)[`__scope${r}`];return{...t,...u}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(o,...t)]}},53938:function(e,t,n){n.d(t,{I0:function(){return y},XB:function(){return f},fC:function(){return E}});var r,u=n(2265),o=n(78149),i=n(25171),s=n(1584),l=n(75137),a=n(57437),c="dismissableLayer.update",d=u.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=u.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:v=!1,onEscapeKeyDown:E,onPointerDownOutside:y,onFocusOutside:b,onInteractOutside:h,onDismiss:w,...N}=e,g=u.useContext(d),[C,O]=u.useState(null),L=null!==(f=null==C?void 0:C.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,P]=u.useState({}),T=(0,s.e)(t,e=>O(e)),W=Array.from(g.layers),[D]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),k=W.indexOf(D),x=C?W.indexOf(C):-1,M=g.layersWithOutsidePointerEventsDisabled.size>0,R=x>=k,S=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,l.W)(e),o=u.useRef(!1),i=u.useRef(()=>{});return u.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){p("dismissableLayer.pointerDownOutside",r,u,{discrete:!0})},u={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!R||n||(null==y||y(e),null==h||h(e),e.defaultPrevented||null==w||w())},L),A=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,l.W)(e),o=u.useRef(!1);return u.useEffect(()=>{let e=e=>{e.target&&!o.current&&p("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==b||b(e),null==h||h(e),e.defaultPrevented||null==w||w())},L);return!function(e,t=globalThis?.document){let n=(0,l.W)(e);u.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{x!==g.layers.size-1||(null==E||E(e),!e.defaultPrevented&&w&&(e.preventDefault(),w()))},L),u.useEffect(()=>{if(C)return v&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(C)),g.layers.add(C),m(),()=>{v&&1===g.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[C,L,v,g]),u.useEffect(()=>()=>{C&&(g.layers.delete(C),g.layersWithOutsidePointerEventsDisabled.delete(C),m())},[C,g]),u.useEffect(()=>{let e=()=>P({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,a.jsx)(i.WV.div,{...N,ref:T,style:{pointerEvents:M?R?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.M)(e.onFocusCapture,A.onFocusCapture),onBlurCapture:(0,o.M)(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:(0,o.M)(e.onPointerDownCapture,S.onPointerDownCapture)})});f.displayName="DismissableLayer";var v=u.forwardRef((e,t)=>{let n=u.useContext(d),r=u.useRef(null),o=(0,s.e)(t,r);return u.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,a.jsx)(i.WV.div,{...e,ref:o})});function m(){let e=new CustomEvent(c);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:u}=r,o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),u?(0,i.jH)(o,s):o.dispatchEvent(s)}v.displayName="DismissableLayerBranch";var E=f,y=v},56935:function(e,t,n){n.d(t,{h:function(){return l}});var r=n(2265),u=n(54887),o=n(25171),i=n(1336),s=n(57437),l=r.forwardRef((e,t)=>{var n,l;let{container:a,...c}=e,[d,f]=r.useState(!1);(0,i.b)(()=>f(!0),[]);let v=a||d&&(null===(l=globalThis)||void 0===l?void 0:null===(n=l.document)||void 0===n?void 0:n.body);return v?u.createPortal((0,s.jsx)(o.WV.div,{...c,ref:t}),v):null});l.displayName="Portal"},31383:function(e,t,n){n.d(t,{z:function(){return s}});var r=n(2265),u=n(54887),o=n(1584),i=n(1336),s=e=>{var t,n;let s,a;let{present:c,children:d}=e,f=function(e){var t,n;let[o,s]=r.useState(),a=r.useRef({}),c=r.useRef(e),d=r.useRef("none"),[f,v]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=l(a.current);d.current="mounted"===f?e:"none"},[f]),(0,i.b)(()=>{let t=a.current,n=c.current;if(n!==e){let r=d.current,u=l(t);e?v("MOUNT"):"none"===u||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==u?v("ANIMATION_OUT"):v("UNMOUNT"),c.current=e}},[e,v]),(0,i.b)(()=>{if(o){let e=e=>{let t=l(a.current).includes(e.animationName);e.target===o&&t&&u.flushSync(()=>v("ANIMATION_END"))},t=e=>{e.target===o&&(d.current=l(a.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}v("ANIMATION_END")},[o,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(a.current=getComputedStyle(e)),s(e)},[])}}(c),v="function"==typeof d?d({present:f.isPresent}):r.Children.only(d),m=(0,o.e)(f.ref,(s=null===(t=Object.getOwnPropertyDescriptor(v.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in s&&s.isReactWarning?v.ref:(s=null===(n=Object.getOwnPropertyDescriptor(v,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in s&&s.isReactWarning?v.props.ref:v.props.ref||v.ref);return"function"==typeof d||f.isPresent?r.cloneElement(v,{ref:m}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},25171:function(e,t,n){n.d(t,{WV:function(){return s},jH:function(){return l}});var r=n(2265),u=n(54887),o=n(71538),i=n(57437),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...u}=e,s=r?o.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(s,{...u,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function l(e,t){e&&u.flushSync(()=>e.dispatchEvent(t))}},75137:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},91715:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(2265),u=n(75137);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,i=r.useRef(o),s=(0,u.W)(t);return r.useEffect(()=>{i.current!==o&&(s(o),i.current=o)},[o,i,s]),n}({defaultProp:t,onChange:n}),s=void 0!==e,l=s?e:o,a=(0,u.W)(n);return[l,r.useCallback(t=>{if(s){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else i(t)},[s,e,i,a])]}},1336:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265),u=globalThis?.document?r.useLayoutEffect:()=>{}}}]);