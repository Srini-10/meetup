"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{22468:function(e,r,t){t.d(r,{Z:function(){return n}});let n=(0,t(78030).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},87592:function(e,r,t){t.d(r,{Z:function(){return n}});let n=(0,t(78030).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},28165:function(e,r,t){t.d(r,{Z:function(){return n}});let n=(0,t(78030).Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},66117:function(e,r,t){t.d(r,{Z:function(){return n}});let n=(0,t(78030).Z)("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]])},11240:function(e,r,t){t.d(r,{Z:function(){return n}});let n=(0,t(78030).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},90976:function(e,r,t){t.d(r,{B:function(){return u}});var n=t(2265),o=t(98324),a=t(1584),i=t(71538),l=t(57437);function u(e){let r=e+"CollectionProvider",[t,u]=(0,o.b)(r),[d,c]=t(r,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:r,children:t}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,l.jsx)(d,{scope:r,itemMap:a,collectionRef:o,children:t})};s.displayName=r;let f=e+"CollectionSlot",p=n.forwardRef((e,r)=>{let{scope:t,children:n}=e,o=c(f,t),u=(0,a.e)(r,o.collectionRef);return(0,l.jsx)(i.g7,{ref:u,children:n})});p.displayName=f;let v=e+"CollectionItemSlot",h="data-radix-collection-item",g=n.forwardRef((e,r)=>{let{scope:t,children:o,...u}=e,d=n.useRef(null),s=(0,a.e)(r,d),f=c(v,t);return n.useEffect(()=>(f.itemMap.set(d,{ref:d,...u}),()=>void f.itemMap.delete(d))),(0,l.jsx)(i.g7,{[h]:"",ref:s,children:o})});return g.displayName=v,[{Provider:s,Slot:p,ItemSlot:g},function(r){let t=c(e+"CollectionConsumer",r);return n.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let r=Array.from(e.querySelectorAll("[".concat(h,"]")));return Array.from(t.itemMap.values()).sort((e,t)=>r.indexOf(e.ref.current)-r.indexOf(t.ref.current))},[t.collectionRef,t.itemMap])},u]}},68070:function(e,r,t){t.d(r,{oC:function(){return rE},VY:function(){return rP},ZA:function(){return rA},ck:function(){return rS},wU:function(){return rF},__:function(){return rI},Uv:function(){return r_},Ee:function(){return rT},Rk:function(){return rN},fC:function(){return rk},Z0:function(){return rO},Tr:function(){return rL},tu:function(){return rW},fF:function(){return rK},xz:function(){return rD}});var n=t(2265),o=t(78149),a=t(1584),i=t(98324),l=t(91715),u=t(25171),d=t(90976),c=t(57437),s=n.createContext(void 0);function f(e){let r=n.useContext(s);return e||r||"ltr"}var p=t(53938),v=t(20589),h=t(80467),g=t(53201),m=t(94674),w=t(8143),x=n.forwardRef((e,r)=>{let{children:t,width:n=10,height:o=5,...a}=e;return(0,c.jsx)(u.WV.svg,{...a,ref:r,width:n,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?t:(0,c.jsx)("polygon",{points:"0,0 30,0 15,10"})})});x.displayName="Arrow";var y=t(75137),M=t(1336),b="Popper",[C,R]=(0,i.b)(b),[j,k]=C(b),D=e=>{let{__scopePopper:r,children:t}=e,[o,a]=n.useState(null);return(0,c.jsx)(j,{scope:r,anchor:o,onAnchorChange:a,children:t})};D.displayName=b;var _="PopperAnchor",P=n.forwardRef((e,r)=>{let{__scopePopper:t,virtualRef:o,...i}=e,l=k(_,t),d=n.useRef(null),s=(0,a.e)(r,d);return n.useEffect(()=>{l.onAnchorChange((null==o?void 0:o.current)||d.current)}),o?null:(0,c.jsx)(u.WV.div,{...i,ref:s})});P.displayName=_;var A="PopperContent",[I,S]=C(A),E=n.forwardRef((e,r)=>{var t,o,i,l,d,s,f,p;let{__scopePopper:v,side:h="bottom",sideOffset:g=0,align:x="center",alignOffset:b=0,arrowPadding:C=0,avoidCollisions:R=!0,collisionBoundary:j=[],collisionPadding:D=0,sticky:_="partial",hideWhenDetached:P=!1,updatePositionStrategy:S="optimized",onPlaced:E,...T}=e,N=k(A,v),[F,W]=n.useState(null),V=(0,a.e)(r,e=>W(e)),[B,z]=n.useState(null),G=function(e){let[r,t]=n.useState(void 0);return(0,M.b)(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});let r=new ResizeObserver(r=>{let n,o;if(!Array.isArray(r)||!r.length)return;let a=r[0];if("borderBoxSize"in a){let e=a.borderBoxSize,r=Array.isArray(e)?e[0]:e;n=r.inlineSize,o=r.blockSize}else n=e.offsetWidth,o=e.offsetHeight;t({width:n,height:o})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}t(void 0)},[e]),r}(B),Z=null!==(f=null==G?void 0:G.width)&&void 0!==f?f:0,U=null!==(p=null==G?void 0:G.height)&&void 0!==p?p:0,H="number"==typeof D?D:{top:0,right:0,bottom:0,left:0,...D},X=Array.isArray(j)?j:[j],Y=X.length>0,q={padding:H,boundary:X.filter(O),altBoundary:Y},{refs:J,floatingStyles:Q,placement:$,isPositioned:ee,middlewareData:er}=(0,m.YF)({strategy:"fixed",placement:h+("center"!==x?"-"+x:""),whileElementsMounted:function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,w.Me)(...r,{animationFrame:"always"===S})},elements:{reference:N.anchor},middleware:[(0,m.cv)({mainAxis:g+U,alignmentAxis:b}),R&&(0,m.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===_?(0,m.dr)():void 0,...q}),R&&(0,m.RR)({...q}),(0,m.dp)({...q,apply:e=>{let{elements:r,rects:t,availableWidth:n,availableHeight:o}=e,{width:a,height:i}=t.reference,l=r.floating.style;l.setProperty("--radix-popper-available-width","".concat(n,"px")),l.setProperty("--radix-popper-available-height","".concat(o,"px")),l.setProperty("--radix-popper-anchor-width","".concat(a,"px")),l.setProperty("--radix-popper-anchor-height","".concat(i,"px"))}}),B&&(0,m.x7)({element:B,padding:C}),L({arrowWidth:Z,arrowHeight:U}),P&&(0,m.Cp)({strategy:"referenceHidden",...q})]}),[et,en]=K($),eo=(0,y.W)(E);(0,M.b)(()=>{ee&&(null==eo||eo())},[ee,eo]);let ea=null===(t=er.arrow)||void 0===t?void 0:t.x,ei=null===(o=er.arrow)||void 0===o?void 0:o.y,el=(null===(i=er.arrow)||void 0===i?void 0:i.centerOffset)!==0,[eu,ed]=n.useState();return(0,M.b)(()=>{F&&ed(window.getComputedStyle(F).zIndex)},[F]),(0,c.jsx)("div",{ref:J.setFloating,"data-radix-popper-content-wrapper":"",style:{...Q,transform:ee?Q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eu,"--radix-popper-transform-origin":[null===(l=er.transformOrigin)||void 0===l?void 0:l.x,null===(d=er.transformOrigin)||void 0===d?void 0:d.y].join(" "),...(null===(s=er.hide)||void 0===s?void 0:s.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,c.jsx)(I,{scope:v,placedSide:et,onArrowChange:z,arrowX:ea,arrowY:ei,shouldHideArrow:el,children:(0,c.jsx)(u.WV.div,{"data-side":et,"data-align":en,...T,ref:V,style:{...T.style,animation:ee?void 0:"none"}})})})});E.displayName=A;var T="PopperArrow",N={top:"bottom",right:"left",bottom:"top",left:"right"},F=n.forwardRef(function(e,r){let{__scopePopper:t,...n}=e,o=S(T,t),a=N[o.placedSide];return(0,c.jsx)("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:(0,c.jsx)(x,{...n,ref:r,style:{...n.style,display:"block"}})})});function O(e){return null!==e}F.displayName=T;var L=e=>({name:"transformOrigin",options:e,fn(r){var t,n,o,a,i;let{placement:l,rects:u,middlewareData:d}=r,c=(null===(t=d.arrow)||void 0===t?void 0:t.centerOffset)!==0,s=c?0:e.arrowWidth,f=c?0:e.arrowHeight,[p,v]=K(l),h={start:"0%",center:"50%",end:"100%"}[v],g=(null!==(a=null===(n=d.arrow)||void 0===n?void 0:n.x)&&void 0!==a?a:0)+s/2,m=(null!==(i=null===(o=d.arrow)||void 0===o?void 0:o.y)&&void 0!==i?i:0)+f/2,w="",x="";return"bottom"===p?(w=c?h:"".concat(g,"px"),x="".concat(-f,"px")):"top"===p?(w=c?h:"".concat(g,"px"),x="".concat(u.floating.height+f,"px")):"right"===p?(w="".concat(-f,"px"),x=c?h:"".concat(m,"px")):"left"===p&&(w="".concat(u.floating.width+f,"px"),x=c?h:"".concat(m,"px")),{data:{x:w,y:x}}}});function K(e){let[r,t="center"]=e.split("-");return[r,t]}var W=t(56935),V=t(31383),B="rovingFocusGroup.onEntryFocus",z={bubbles:!1,cancelable:!0},G="RovingFocusGroup",[Z,U,H]=(0,d.B)(G),[X,Y]=(0,i.b)(G,[H]),[q,J]=X(G),Q=n.forwardRef((e,r)=>(0,c.jsx)(Z.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,c.jsx)(Z.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,c.jsx)($,{...e,ref:r})})}));Q.displayName=G;var $=n.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,orientation:i,loop:d=!1,dir:s,currentTabStopId:p,defaultCurrentTabStopId:v,onCurrentTabStopIdChange:h,onEntryFocus:g,preventScrollOnEntryFocus:m=!1,...w}=e,x=n.useRef(null),M=(0,a.e)(r,x),b=f(s),[C=null,R]=(0,l.T)({prop:p,defaultProp:v,onChange:h}),[j,k]=n.useState(!1),D=(0,y.W)(g),_=U(t),P=n.useRef(!1),[A,I]=n.useState(0);return n.useEffect(()=>{let e=x.current;if(e)return e.addEventListener(B,D),()=>e.removeEventListener(B,D)},[D]),(0,c.jsx)(q,{scope:t,orientation:i,dir:b,loop:d,currentTabStopId:C,onItemFocus:n.useCallback(e=>R(e),[R]),onItemShiftTab:n.useCallback(()=>k(!0),[]),onFocusableItemAdd:n.useCallback(()=>I(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>I(e=>e-1),[]),children:(0,c.jsx)(u.WV.div,{tabIndex:j||0===A?-1:0,"data-orientation":i,...w,ref:M,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{P.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let r=!P.current;if(e.target===e.currentTarget&&r&&!j){let r=new CustomEvent(B,z);if(e.currentTarget.dispatchEvent(r),!r.defaultPrevented){let e=_().filter(e=>e.focusable);en([e.find(e=>e.active),e.find(e=>e.id===C),...e].filter(Boolean).map(e=>e.ref.current),m)}}P.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>k(!1))})})}),ee="RovingFocusGroupItem",er=n.forwardRef((e,r)=>{let{__scopeRovingFocusGroup:t,focusable:a=!0,active:i=!1,tabStopId:l,...d}=e,s=(0,g.M)(),f=l||s,p=J(ee,t),v=p.currentTabStopId===f,h=U(t),{onFocusableItemAdd:m,onFocusableItemRemove:w}=p;return n.useEffect(()=>{if(a)return m(),()=>w()},[a,m,w]),(0,c.jsx)(Z.ItemSlot,{scope:t,id:f,focusable:a,active:i,children:(0,c.jsx)(u.WV.span,{tabIndex:v?0:-1,"data-orientation":p.orientation,...d,ref:r,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let r=function(e,r,t){var n;let o=(n=e.key,"rtl"!==t?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===r&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===r&&["ArrowUp","ArrowDown"].includes(o)))return et[o]}(e,p.orientation,p.dir);if(void 0!==r){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===r)o.reverse();else if("prev"===r||"next"===r){var t,n;"prev"===r&&o.reverse();let a=o.indexOf(e.currentTarget);o=p.loop?(t=o,n=a+1,t.map((e,r)=>t[(n+r)%t.length])):o.slice(a+1)}setTimeout(()=>en(o))}})})})});er.displayName=ee;var et={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function en(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.activeElement;for(let n of e)if(n===t||(n.focus({preventScroll:r}),document.activeElement!==t))return}var eo=t(71538),ea=t(78369),ei=t(17590),el=["Enter"," "],eu=["ArrowUp","PageDown","End"],ed=["ArrowDown","PageUp","Home",...eu],ec={ltr:[...el,"ArrowRight"],rtl:[...el,"ArrowLeft"]},es={ltr:["ArrowLeft"],rtl:["ArrowRight"]},ef="Menu",[ep,ev,eh]=(0,d.B)(ef),[eg,em]=(0,i.b)(ef,[eh,R,Y]),ew=R(),ex=Y(),[ey,eM]=eg(ef),[eb,eC]=eg(ef),eR=e=>{let{__scopeMenu:r,open:t=!1,children:o,dir:a,onOpenChange:i,modal:l=!0}=e,u=ew(r),[d,s]=n.useState(null),p=n.useRef(!1),v=(0,y.W)(i),h=f(a);return n.useEffect(()=>{let e=()=>{p.current=!0,document.addEventListener("pointerdown",r,{capture:!0,once:!0}),document.addEventListener("pointermove",r,{capture:!0,once:!0})},r=()=>p.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",r,{capture:!0}),document.removeEventListener("pointermove",r,{capture:!0})}},[]),(0,c.jsx)(D,{...u,children:(0,c.jsx)(ey,{scope:r,open:t,onOpenChange:v,content:d,onContentChange:s,children:(0,c.jsx)(eb,{scope:r,onClose:n.useCallback(()=>v(!1),[v]),isUsingKeyboardRef:p,dir:h,modal:l,children:o})})})};eR.displayName=ef;var ej=n.forwardRef((e,r)=>{let{__scopeMenu:t,...n}=e,o=ew(t);return(0,c.jsx)(P,{...o,...n,ref:r})});ej.displayName="MenuAnchor";var ek="MenuPortal",[eD,e_]=eg(ek,{forceMount:void 0}),eP=e=>{let{__scopeMenu:r,forceMount:t,children:n,container:o}=e,a=eM(ek,r);return(0,c.jsx)(eD,{scope:r,forceMount:t,children:(0,c.jsx)(V.z,{present:t||a.open,children:(0,c.jsx)(W.h,{asChild:!0,container:o,children:n})})})};eP.displayName=ek;var eA="MenuContent",[eI,eS]=eg(eA),eE=n.forwardRef((e,r)=>{let t=e_(eA,e.__scopeMenu),{forceMount:n=t.forceMount,...o}=e,a=eM(eA,e.__scopeMenu),i=eC(eA,e.__scopeMenu);return(0,c.jsx)(ep.Provider,{scope:e.__scopeMenu,children:(0,c.jsx)(V.z,{present:n||a.open,children:(0,c.jsx)(ep.Slot,{scope:e.__scopeMenu,children:i.modal?(0,c.jsx)(eT,{...o,ref:r}):(0,c.jsx)(eN,{...o,ref:r})})})})}),eT=n.forwardRef((e,r)=>{let t=eM(eA,e.__scopeMenu),i=n.useRef(null),l=(0,a.e)(r,i);return n.useEffect(()=>{let e=i.current;if(e)return(0,ea.Ry)(e)},[]),(0,c.jsx)(eF,{...e,ref:l,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)})}),eN=n.forwardRef((e,r)=>{let t=eM(eA,e.__scopeMenu);return(0,c.jsx)(eF,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)})}),eF=n.forwardRef((e,r)=>{let{__scopeMenu:t,loop:i=!1,trapFocus:l,onOpenAutoFocus:u,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:f,onEscapeKeyDown:g,onPointerDownOutside:m,onFocusOutside:w,onInteractOutside:x,onDismiss:y,disableOutsideScroll:M,...b}=e,C=eM(eA,t),R=eC(eA,t),j=ew(t),k=ex(t),D=ev(t),[_,P]=n.useState(null),A=n.useRef(null),I=(0,a.e)(r,A,C.onContentChange),S=n.useRef(0),T=n.useRef(""),N=n.useRef(0),F=n.useRef(null),O=n.useRef("right"),L=n.useRef(0),K=M?ei.Z:n.Fragment,W=M?{as:eo.g7,allowPinchZoom:!0}:void 0,V=e=>{var r,t;let n=T.current+e,o=D().filter(e=>!e.disabled),a=document.activeElement,i=null===(r=o.find(e=>e.ref.current===a))||void 0===r?void 0:r.textValue,l=function(e,r,t){var n;let o=r.length>1&&Array.from(r).every(e=>e===r[0])?r[0]:r,a=(n=Math.max(t?e.indexOf(t):-1,0),e.map((r,t)=>e[(n+t)%e.length]));1===o.length&&(a=a.filter(e=>e!==t));let i=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return i!==t?i:void 0}(o.map(e=>e.textValue),n,i),u=null===(t=o.find(e=>e.textValue===l))||void 0===t?void 0:t.ref.current;!function e(r){T.current=r,window.clearTimeout(S.current),""!==r&&(S.current=window.setTimeout(()=>e(""),1e3))}(n),u&&setTimeout(()=>u.focus())};n.useEffect(()=>()=>window.clearTimeout(S.current),[]),(0,v.EW)();let B=n.useCallback(e=>{var r,t,n;return O.current===(null===(r=F.current)||void 0===r?void 0:r.side)&&!!(n=null===(t=F.current)||void 0===t?void 0:t.area)&&function(e,r){let{x:t,y:n}=e,o=!1;for(let e=0,a=r.length-1;e<r.length;a=e++){let i=r[e].x,l=r[e].y,u=r[a].x,d=r[a].y;l>n!=d>n&&t<(u-i)*(n-l)/(d-l)+i&&(o=!o)}return o}({x:e.clientX,y:e.clientY},n)},[]);return(0,c.jsx)(eI,{scope:t,searchRef:T,onItemEnter:n.useCallback(e=>{B(e)&&e.preventDefault()},[B]),onItemLeave:n.useCallback(e=>{var r;B(e)||(null===(r=A.current)||void 0===r||r.focus(),P(null))},[B]),onTriggerLeave:n.useCallback(e=>{B(e)&&e.preventDefault()},[B]),pointerGraceTimerRef:N,onPointerGraceIntentChange:n.useCallback(e=>{F.current=e},[]),children:(0,c.jsx)(K,{...W,children:(0,c.jsx)(h.M,{asChild:!0,trapped:l,onMountAutoFocus:(0,o.M)(u,e=>{var r;e.preventDefault(),null===(r=A.current)||void 0===r||r.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:(0,c.jsx)(p.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:g,onPointerDownOutside:m,onFocusOutside:w,onInteractOutside:x,onDismiss:y,children:(0,c.jsx)(Q,{asChild:!0,...k,dir:R.dir,orientation:"vertical",loop:i,currentTabStopId:_,onCurrentTabStopIdChange:P,onEntryFocus:(0,o.M)(f,e=>{R.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,c.jsx)(E,{role:"menu","aria-orientation":"vertical","data-state":re(C.open),"data-radix-menu-content":"",dir:R.dir,...j,...b,ref:I,style:{outline:"none",...b.style},onKeyDown:(0,o.M)(b.onKeyDown,e=>{let r=e.target.closest("[data-radix-menu-content]")===e.currentTarget,t=e.ctrlKey||e.altKey||e.metaKey,n=1===e.key.length;r&&("Tab"===e.key&&e.preventDefault(),!t&&n&&V(e.key));let o=A.current;if(e.target!==o||!ed.includes(e.key))return;e.preventDefault();let a=D().filter(e=>!e.disabled).map(e=>e.ref.current);eu.includes(e.key)&&a.reverse(),function(e){let r=document.activeElement;for(let t of e)if(t===r||(t.focus(),document.activeElement!==r))return}(a)}),onBlur:(0,o.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(S.current),T.current="")}),onPointerMove:(0,o.M)(e.onPointerMove,rn(e=>{let r=e.target,t=L.current!==e.clientX;if(e.currentTarget.contains(r)&&t){let r=e.clientX>L.current?"right":"left";O.current=r,L.current=e.clientX}}))})})})})})})});eE.displayName=eA;var eO=n.forwardRef((e,r)=>{let{__scopeMenu:t,...n}=e;return(0,c.jsx)(u.WV.div,{role:"group",...n,ref:r})});eO.displayName="MenuGroup";var eL=n.forwardRef((e,r)=>{let{__scopeMenu:t,...n}=e;return(0,c.jsx)(u.WV.div,{...n,ref:r})});eL.displayName="MenuLabel";var eK="MenuItem",eW="menu.itemSelect",eV=n.forwardRef((e,r)=>{let{disabled:t=!1,onSelect:i,...l}=e,d=n.useRef(null),s=eC(eK,e.__scopeMenu),f=eS(eK,e.__scopeMenu),p=(0,a.e)(r,d),v=n.useRef(!1);return(0,c.jsx)(eB,{...l,ref:p,disabled:t,onClick:(0,o.M)(e.onClick,()=>{let e=d.current;if(!t&&e){let r=new CustomEvent(eW,{bubbles:!0,cancelable:!0});e.addEventListener(eW,e=>null==i?void 0:i(e),{once:!0}),(0,u.jH)(e,r),r.defaultPrevented?v.current=!1:s.onClose()}}),onPointerDown:r=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,r),v.current=!0},onPointerUp:(0,o.M)(e.onPointerUp,e=>{var r;v.current||null===(r=e.currentTarget)||void 0===r||r.click()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let r=""!==f.searchRef.current;!t&&(!r||" "!==e.key)&&el.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});eV.displayName=eK;var eB=n.forwardRef((e,r)=>{let{__scopeMenu:t,disabled:i=!1,textValue:l,...d}=e,s=eS(eK,t),f=ex(t),p=n.useRef(null),v=(0,a.e)(r,p),[h,g]=n.useState(!1),[m,w]=n.useState("");return n.useEffect(()=>{let e=p.current;if(e){var r;w((null!==(r=e.textContent)&&void 0!==r?r:"").trim())}},[d.children]),(0,c.jsx)(ep.ItemSlot,{scope:t,disabled:i,textValue:null!=l?l:m,children:(0,c.jsx)(er,{asChild:!0,...f,focusable:!i,children:(0,c.jsx)(u.WV.div,{role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":i||void 0,"data-disabled":i?"":void 0,...d,ref:v,onPointerMove:(0,o.M)(e.onPointerMove,rn(e=>{i?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.M)(e.onPointerLeave,rn(e=>s.onItemLeave(e))),onFocus:(0,o.M)(e.onFocus,()=>g(!0)),onBlur:(0,o.M)(e.onBlur,()=>g(!1))})})})}),ez=n.forwardRef((e,r)=>{let{checked:t=!1,onCheckedChange:n,...a}=e;return(0,c.jsx)(eJ,{scope:e.__scopeMenu,checked:t,children:(0,c.jsx)(eV,{role:"menuitemcheckbox","aria-checked":rr(t)?"mixed":t,...a,ref:r,"data-state":rt(t),onSelect:(0,o.M)(a.onSelect,()=>null==n?void 0:n(!!rr(t)||!t),{checkForDefaultPrevented:!1})})})});ez.displayName="MenuCheckboxItem";var eG="MenuRadioGroup",[eZ,eU]=eg(eG,{value:void 0,onValueChange:()=>{}}),eH=n.forwardRef((e,r)=>{let{value:t,onValueChange:n,...o}=e,a=(0,y.W)(n);return(0,c.jsx)(eZ,{scope:e.__scopeMenu,value:t,onValueChange:a,children:(0,c.jsx)(eO,{...o,ref:r})})});eH.displayName=eG;var eX="MenuRadioItem",eY=n.forwardRef((e,r)=>{let{value:t,...n}=e,a=eU(eX,e.__scopeMenu),i=t===a.value;return(0,c.jsx)(eJ,{scope:e.__scopeMenu,checked:i,children:(0,c.jsx)(eV,{role:"menuitemradio","aria-checked":i,...n,ref:r,"data-state":rt(i),onSelect:(0,o.M)(n.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,t)},{checkForDefaultPrevented:!1})})})});eY.displayName=eX;var eq="MenuItemIndicator",[eJ,eQ]=eg(eq,{checked:!1}),e$=n.forwardRef((e,r)=>{let{__scopeMenu:t,forceMount:n,...o}=e,a=eQ(eq,t);return(0,c.jsx)(V.z,{present:n||rr(a.checked)||!0===a.checked,children:(0,c.jsx)(u.WV.span,{...o,ref:r,"data-state":rt(a.checked)})})});e$.displayName=eq;var e0=n.forwardRef((e,r)=>{let{__scopeMenu:t,...n}=e;return(0,c.jsx)(u.WV.div,{role:"separator","aria-orientation":"horizontal",...n,ref:r})});e0.displayName="MenuSeparator";var e1=n.forwardRef((e,r)=>{let{__scopeMenu:t,...n}=e,o=ew(t);return(0,c.jsx)(F,{...o,...n,ref:r})});e1.displayName="MenuArrow";var e7="MenuSub",[e3,e4]=eg(e7),e5=e=>{let{__scopeMenu:r,children:t,open:o=!1,onOpenChange:a}=e,i=eM(e7,r),l=ew(r),[u,d]=n.useState(null),[s,f]=n.useState(null),p=(0,y.W)(a);return n.useEffect(()=>(!1===i.open&&p(!1),()=>p(!1)),[i.open,p]),(0,c.jsx)(D,{...l,children:(0,c.jsx)(ey,{scope:r,open:o,onOpenChange:p,content:s,onContentChange:f,children:(0,c.jsx)(e3,{scope:r,contentId:(0,g.M)(),triggerId:(0,g.M)(),trigger:u,onTriggerChange:d,children:t})})})};e5.displayName=e7;var e2="MenuSubTrigger",e8=n.forwardRef((e,r)=>{let t=eM(e2,e.__scopeMenu),i=eC(e2,e.__scopeMenu),l=e4(e2,e.__scopeMenu),u=eS(e2,e.__scopeMenu),d=n.useRef(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=u,p={__scopeMenu:e.__scopeMenu},v=n.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return n.useEffect(()=>v,[v]),n.useEffect(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,c.jsx)(ej,{asChild:!0,...p,children:(0,c.jsx)(eB,{id:l.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":l.contentId,"data-state":re(t.open),...e,ref:(0,a.F)(r,l.onTriggerChange),onClick:r=>{var n;null===(n=e.onClick)||void 0===n||n.call(e,r),e.disabled||r.defaultPrevented||(r.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,o.M)(e.onPointerMove,rn(r=>{u.onItemEnter(r),r.defaultPrevented||e.disabled||t.open||d.current||(u.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),v()},100))})),onPointerLeave:(0,o.M)(e.onPointerLeave,rn(e=>{var r,n;v();let o=null===(r=t.content)||void 0===r?void 0:r.getBoundingClientRect();if(o){let r=null===(n=t.content)||void 0===n?void 0:n.dataset.side,a="right"===r,i=o[a?"left":"right"],l=o[a?"right":"left"];u.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:i,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:i,y:o.bottom}],side:r}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>u.onPointerGraceIntentChange(null),300)}else{if(u.onTriggerLeave(e),e.defaultPrevented)return;u.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.M)(e.onKeyDown,r=>{let n=""!==u.searchRef.current;if(!e.disabled&&(!n||" "!==r.key)&&ec[i.dir].includes(r.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),r.preventDefault()}})})})});e8.displayName=e2;var e6="MenuSubContent",e9=n.forwardRef((e,r)=>{let t=e_(eA,e.__scopeMenu),{forceMount:i=t.forceMount,...l}=e,u=eM(eA,e.__scopeMenu),d=eC(eA,e.__scopeMenu),s=e4(e6,e.__scopeMenu),f=n.useRef(null),p=(0,a.e)(r,f);return(0,c.jsx)(ep.Provider,{scope:e.__scopeMenu,children:(0,c.jsx)(V.z,{present:i||u.open,children:(0,c.jsx)(ep.Slot,{scope:e.__scopeMenu,children:(0,c.jsx)(eF,{id:s.contentId,"aria-labelledby":s.triggerId,...l,ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var r;d.isUsingKeyboardRef.current&&(null===(r=f.current)||void 0===r||r.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&u.onOpenChange(!1)}),onEscapeKeyDown:(0,o.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let r=e.currentTarget.contains(e.target),t=es[d.dir].includes(e.key);if(r&&t){var n;u.onOpenChange(!1),null===(n=s.trigger)||void 0===n||n.focus(),e.preventDefault()}})})})})})});function re(e){return e?"open":"closed"}function rr(e){return"indeterminate"===e}function rt(e){return rr(e)?"indeterminate":e?"checked":"unchecked"}function rn(e){return r=>"mouse"===r.pointerType?e(r):void 0}e9.displayName=e6;var ro="DropdownMenu",[ra,ri]=(0,i.b)(ro,[em]),rl=em(),[ru,rd]=ra(ro),rc=e=>{let{__scopeDropdownMenu:r,children:t,dir:o,open:a,defaultOpen:i,onOpenChange:u,modal:d=!0}=e,s=rl(r),f=n.useRef(null),[p=!1,v]=(0,l.T)({prop:a,defaultProp:i,onChange:u});return(0,c.jsx)(ru,{scope:r,triggerId:(0,g.M)(),triggerRef:f,contentId:(0,g.M)(),open:p,onOpenChange:v,onOpenToggle:n.useCallback(()=>v(e=>!e),[v]),modal:d,children:(0,c.jsx)(eR,{...s,open:p,onOpenChange:v,dir:o,modal:d,children:t})})};rc.displayName=ro;var rs="DropdownMenuTrigger",rf=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,disabled:n=!1,...i}=e,l=rd(rs,t),d=rl(t);return(0,c.jsx)(ej,{asChild:!0,...d,children:(0,c.jsx)(u.WV.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":n?"":void 0,disabled:n,...i,ref:(0,a.F)(r,l.triggerRef),onPointerDown:(0,o.M)(e.onPointerDown,e=>{n||0!==e.button||!1!==e.ctrlKey||(l.onOpenToggle(),l.open||e.preventDefault())}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{!n&&(["Enter"," "].includes(e.key)&&l.onOpenToggle(),"ArrowDown"===e.key&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});rf.displayName=rs;var rp=e=>{let{__scopeDropdownMenu:r,...t}=e,n=rl(r);return(0,c.jsx)(eP,{...n,...t})};rp.displayName="DropdownMenuPortal";var rv="DropdownMenuContent",rh=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...a}=e,i=rd(rv,t),l=rl(t),u=n.useRef(!1);return(0,c.jsx)(eE,{id:i.contentId,"aria-labelledby":i.triggerId,...l,...a,ref:r,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var r;u.current||null===(r=i.triggerRef.current)||void 0===r||r.focus(),u.current=!1,e.preventDefault()}),onInteractOutside:(0,o.M)(e.onInteractOutside,e=>{let r=e.detail.originalEvent,t=0===r.button&&!0===r.ctrlKey,n=2===r.button||t;(!i.modal||n)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});rh.displayName=rv;var rg=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(eO,{...o,...n,ref:r})});rg.displayName="DropdownMenuGroup";var rm=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(eL,{...o,...n,ref:r})});rm.displayName="DropdownMenuLabel";var rw=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(eV,{...o,...n,ref:r})});rw.displayName="DropdownMenuItem";var rx=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(ez,{...o,...n,ref:r})});rx.displayName="DropdownMenuCheckboxItem";var ry=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(eH,{...o,...n,ref:r})});ry.displayName="DropdownMenuRadioGroup";var rM=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(eY,{...o,...n,ref:r})});rM.displayName="DropdownMenuRadioItem";var rb=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(e$,{...o,...n,ref:r})});rb.displayName="DropdownMenuItemIndicator";var rC=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(e0,{...o,...n,ref:r})});rC.displayName="DropdownMenuSeparator",n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(e1,{...o,...n,ref:r})}).displayName="DropdownMenuArrow";var rR=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(e8,{...o,...n,ref:r})});rR.displayName="DropdownMenuSubTrigger";var rj=n.forwardRef((e,r)=>{let{__scopeDropdownMenu:t,...n}=e,o=rl(t);return(0,c.jsx)(e9,{...o,...n,ref:r,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});rj.displayName="DropdownMenuSubContent";var rk=rc,rD=rf,r_=rp,rP=rh,rA=rg,rI=rm,rS=rw,rE=rx,rT=ry,rN=rM,rF=rb,rO=rC,rL=e=>{let{__scopeDropdownMenu:r,children:t,open:n,onOpenChange:o,defaultOpen:a}=e,i=rl(r),[u=!1,d]=(0,l.T)({prop:n,defaultProp:a,onChange:o});return(0,c.jsx)(e5,{...i,open:u,onOpenChange:d,children:t})},rK=rR,rW=rj}}]);