(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747,844,70],{90749:function(e,t,r){Promise.resolve().then(r.bind(r,13489))},13489:function(e,t,r){"use strict";r.d(t,{default:function(){return p}});var n=r(57437),s=r(93073),a=r(26543),i=r(2265);let l=()=>{let[e,t]=(0,i.useState)([]),[r,n]=(0,i.useState)(!1),l=(0,a.b12)(),{user:o}=(0,s.aF)();(0,i.useEffect)(()=>{(async()=>{if(l&&(null==o?void 0:o.id)){n(!0);try{let{calls:e}=await l.queryCalls({sort:[{field:"starts_at",direction:-1}],filter_conditions:{starts_at:{$exists:!0},$or:[{created_by_user_id:o.id},{members:{$in:[o.id]}}]}});t(e)}catch(e){console.log(e)}finally{n(!1)}}})()},[l,null==o?void 0:o.id]);let u=new Date;return{endedCalls:e.filter(e=>{let{state:{startsAt:t,endedAt:r}}=e;return t&&new Date(t)<u||!!r}),upcomingCalls:e.filter(e=>{let{state:{startsAt:t}}=e;return t&&new Date(t)>u}),recordings:e,isLoading:r}};var o=r(16463),u=r(37440),d=r(66648),c=r(50495),g=r(83146),f=r(30311),v=e=>{let{icon:t,title:r,date:s,isPreviousMeeting:a,buttonIcon1:i,handleClick:l,link:o,buttonText:v}=e,{toast:h}=(0,f.pm)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("section",{className:"flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-gray-800 px-5 py-8 xl:max-w-[568px",children:[(0,n.jsxs)("article",{className:"flex flex-col gap-5",children:[(0,n.jsx)(d.default,{src:t,alt:"upcoming",width:28,height:28}),(0,n.jsx)("div",{className:"flex justify-between",children:(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold",children:r}),(0,n.jsx)("p",{className:"text-base font-normal",children:s})]})})]}),(0,n.jsxs)("article",{className:(0,u.cn)("flex justify-center relative",{}),children:[(0,n.jsxs)("div",{className:"relative flex w-full max-sm:hidden",children:[g.b.map((e,t)=>(0,n.jsx)(d.default,{src:e,alt:"attendees",width:40,height:40,className:(0,u.cn)("rounded-full",{absolute:t>0}),style:{top:0,left:28*t}},t)),(0,n.jsx)("div",{className:"flex justify-center items-center absolute left-[136px] size-10 rounded-full border-[5px] border-gray-700 bg-gray-800",children:"+5"})]}),!a&&(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsxs)(c.z,{onClick:l,className:"rounded bg-blue-500 px-6",children:[i&&(0,n.jsx)(d.default,{src:i,alt:"feature",width:20,height:20}),"\xa0 ",v]}),(0,n.jsx)(c.z,{onClick:()=>{navigator.clipboard.writeText(o),h({title:"Link Copied"})},className:"bg-gray-800 px-6",children:(0,n.jsx)(d.default,{src:"icons/copy.svg",alt:"feature",width:20,height:20})})]})]})]})})},h=r(7651),m=r(20357),p=e=>{let{type:t}=e,{endedCalls:r,upcomingCalls:s,callRecordings:a,isLoading:u}=l(),[d,c]=(0,i.useState)([]),g=(0,o.useRouter)(),{toast:p}=(0,f.pm)();(0,i.useEffect)(()=>{let e=async()=>{try{let e=(await Promise.all(a.map(e=>e.queryRecordings()))).filter(e=>e.recordings.length>0).flatMap(e=>e.recordings);c(e)}catch(e){p({title:"try again later"})}};"recordings"===t&&e()},[t,a]);let x=(()=>{switch(t){case"ended":return r;case"recordings":return d;case"upcoming":return s;default:return[]}})(),b=(()=>{switch(t){case"ended":return"No previous Calls";case"recordings":return"No Recordings";case"upcoming":return"No Upcoming Calls";default:return[]}})();return u?(0,n.jsx)(h.Z,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"grid grid-cols-1 gap-5 xl:grid-cols-2",children:x&&x.length>0?x.map(e=>{var r,s,a,i,l;return(0,n.jsx)(v,{icon:"ended"===t?"/icons/previous.svg":"upcoming"===t?"/icons/upcoming.svg":"/icons/recordings.svg",title:(null===(a=e.state)||void 0===a?void 0:null===(s=a.custom)||void 0===s?void 0:null===(r=s.description)||void 0===r?void 0:r.substring(0,26))||(null==e?void 0:null===(i=e.filename)||void 0===i?void 0:i.substring(0,20))||"Personal Meeting",date:(null===(l=e.state)||void 0===l?void 0:l.startsAt.toLocaleString())||e.start_time.toLocaleString(),isPreviousMeeting:"ended"==t,buttonIcon1:"recordings"===t?"/icons/play.svg":void 0,buttonText:"recordings"===t?"Play":"Start",handleClick:"recordings"===t?()=>g.push("".concat(e.url)):()=>g.push("/meeting/".concat(e.id)),link:"recordings"===t?e.url:"".concat(m.env.NEXT_PUBLIC_BASE_URL,"/meeting/").concat(e.id)},e.id)}):(0,n.jsx)("h1",{children:b})})})}},7651:function(e,t,r){"use strict";var n=r(57437),s=r(66648);r(2265),t.Z=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"flex justify-center items-center h-screen w-screen",children:(0,n.jsx)(s.default,{src:"/icons/loading-circle.svg",alt:"loading",width:50,height:50})})})},50495:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var n=r(57437),s=r(2265),a=r(71538),i=r(12218),l=r(37440);let o=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:u=!1,...d}=e,c=u?a.g7:"button";return(0,n.jsx)(c,{className:(0,l.cn)(o({variant:s,size:i,className:r})),ref:t,...d})});u.displayName="Button"},83146:function(e,t,r){"use strict";r.d(t,{A:function(){return n},b:function(){return s}});let n=[{label:"Home",route:"/",imgURL:"/icons/Home.svg"},{label:"Upcoming",route:"/upcoming",imgURL:"/icons/upcoming.svg"},{label:"Previous",route:"/previous",imgURL:"/icons/previous.svg"},{label:"Recordings",route:"/recordings",imgURL:"/icons/Video.svg"},{label:"Personal Room",route:"/personal-room",imgURL:"/icons/add-personal.svg"}],s=["/images/avatar-1.jpeg","/images/avatar-2.jpeg","/images/avatar-3.png","/images/avatar-4.png","/images/avatar-5.png"]},30311:function(e,t,r){"use strict";r.d(t,{Am:function(){return c},pm:function(){return g}});var n=r(2265);let s=0,a=new Map,i=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],u={toasts:[]};function d(e){u=l(u,e),o.forEach(e=>{e(u)})}function c(e){let{...t}=e,r=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>d({type:"DISMISS_TOAST",toastId:r});return d({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function g(){let[e,t]=n.useState(u);return n.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:c,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},37440:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(44839),s=r(96164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}}},function(e){e.O(0,[463,674,501,627,183,269,648,971,23,744],function(){return e(e.s=90749)}),_N_E=e.O()}]);