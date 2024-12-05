(()=>{var e={};e.id=747,e.ids=[747],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},92761:e=>{"use strict";e.exports=require("node:async_hooks")},6005:e=>{"use strict";e.exports=require("node:crypto")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},42302:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>x,tree:()=>c}),s(18173),s(61967),s(35866),s(31216);var r=s(23191),i=s(88716),n=s(37922),a=s.n(n),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["(root)",{children:["(home)",{children:["upcoming",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,18173)),"/Users/srinivasanp/meetup/app/(root)/(home)/upcoming/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,61967)),"/Users/srinivasanp/meetup/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,31216)),"/Users/srinivasanp/meetup/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/srinivasanp/meetup/app/(root)/(home)/upcoming/page.tsx"],d="/(root)/(home)/upcoming/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(root)/(home)/upcoming/page",pathname:"/upcoming",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},60420:(e,t,s)=>{Promise.resolve().then(s.bind(s,51864))},51864:(e,t,s)=>{"use strict";s.d(t,{default:()=>h});var r=s(10326),i=s(66775),n=s(36982),a=s(17577);let o=()=>{let[e,t]=(0,a.useState)([]),[s,r]=(0,a.useState)(!1),o=(0,n.b12)(),{user:l}=(0,i.aF)();(0,a.useEffect)(()=>{(async()=>{if(o&&l?.id){r(!0);try{let{calls:e}=await o.queryCalls({sort:[{field:"starts_at",direction:-1}],filter_conditions:{starts_at:{$exists:!0},$or:[{created_by_user_id:l.id},{members:{$in:[l.id]}}]}});t(e)}catch(e){console.log(e)}finally{r(!1)}}})()},[o,l?.id]);let c=new Date;return{endedCalls:e.filter(({state:{startsAt:e,endedAt:t}})=>e&&new Date(e)<c||!!t),upcomingCalls:e.filter(({state:{startsAt:e}})=>e&&new Date(e)>c),recordings:e,isLoading:s}};var l=s(35047),c=s(77863),u=s(46226),d=s(90772),p=s(58464),x=s(94215);let m=({icon:e,title:t,date:s,isPreviousMeeting:i,buttonIcon1:n,handleClick:a,link:o,buttonText:l})=>{let{toast:m}=(0,x.pm)();return r.jsx(r.Fragment,{children:(0,r.jsxs)("section",{className:"flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-gray-800 px-5 py-8 xl:max-w-[568px",children:[(0,r.jsxs)("article",{className:"flex flex-col gap-5",children:[r.jsx(u.default,{src:e,alt:"upcoming",width:28,height:28}),r.jsx("div",{className:"flex justify-between",children:(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[r.jsx("h1",{className:"text-2xl font-bold",children:t}),r.jsx("p",{className:"text-base font-normal",children:s})]})})]}),(0,r.jsxs)("article",{className:(0,c.cn)("flex justify-center relative",{}),children:[(0,r.jsxs)("div",{className:"relative flex w-full max-sm:hidden",children:[p.b.map((e,t)=>r.jsx(u.default,{src:e,alt:"attendees",width:40,height:40,className:(0,c.cn)("rounded-full",{absolute:t>0}),style:{top:0,left:28*t}},t)),r.jsx("div",{className:"flex justify-center items-center absolute left-[136px] size-10 rounded-full border-[5px] border-gray-700 bg-gray-800",children:"+5"})]}),!i&&(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsxs)(d.z,{onClick:a,className:"rounded bg-blue-500 px-6",children:[n&&r.jsx(u.default,{src:n,alt:"feature",width:20,height:20}),"\xa0 ",l]}),r.jsx(d.z,{onClick:()=>{navigator.clipboard.writeText(o),m({title:"Link Copied"})},className:"bg-gray-800 px-6",children:r.jsx(u.default,{src:"icons/copy.svg",alt:"feature",width:20,height:20})})]})]})]})})};var g=s(13192);let h=({type:e})=>{let{endedCalls:t,upcomingCalls:s,callRecordings:i,isLoading:n}=o(),[c,u]=(0,a.useState)([]),d=(0,l.useRouter)(),{toast:p}=(0,x.pm)();(0,a.useEffect)(()=>{let t=async()=>{try{let e=(await Promise.all(i.map(e=>e.queryRecordings()))).filter(e=>e.recordings.length>0).flatMap(e=>e.recordings);u(e)}catch(e){p({title:"try again later"})}};"recordings"===e&&t()},[e,i]);let h=(()=>{switch(e){case"ended":return t;case"recordings":return c;case"upcoming":return s;default:return[]}})(),f=(()=>{switch(e){case"ended":return"No previous Calls";case"recordings":return"No Recordings";case"upcoming":return"No Upcoming Calls";default:return[]}})();return n?r.jsx(g.Z,{}):r.jsx(r.Fragment,{children:r.jsx("div",{className:"grid grid-cols-1 gap-5 xl:grid-cols-2",children:h&&h.length>0?h.map(t=>r.jsx(m,{icon:"ended"===e?"/icons/previous.svg":"upcoming"===e?"/icons/upcoming.svg":"/icons/recordings.svg",title:t.state?.custom?.description?.substring(0,26)||t?.filename?.substring(0,20)||"Personal Meeting",date:t.state?.startsAt.toLocaleString()||t.start_time.toLocaleString(),isPreviousMeeting:"ended"==e,buttonIcon1:"recordings"===e?"/icons/play.svg":void 0,buttonText:"recordings"===e?"Play":"Start",handleClick:"recordings"===e?()=>d.push(`${t.url}`):()=>d.push(`/meeting/${t.id}`),link:"recordings"===e?t.url:`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${t.id}`},t.id)):r.jsx("h1",{children:f})})})}},18173:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(19510),i=s(99792);s(71159);let n=()=>r.jsx(r.Fragment,{children:(0,r.jsxs)("section",{className:"flex size-full flex-col gap-10 text-white",children:[r.jsx("h1",{className:"text-3xl font-bold",children:"UpComing"}),r.jsx(i.Z,{type:"upcoming"})]})})},99792:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=(0,s(68570).createProxy)(String.raw`/Users/srinivasanp/meetup/components/CallList.tsx#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,448,362,564,82],()=>s(42302));module.exports=r})();