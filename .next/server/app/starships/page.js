(()=>{var e={};e.id=641,e.ids=[641],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8603:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>l});var t=r(482),a=r(9108),n=r(2563),i=r.n(n),o=r(8300),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(s,c);let l=["",{children:["starships",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9467)),"/home/rps/Documents/code/starWars/dark-records/src/app/starships/page.tsx"]}]},{error:[()=>Promise.resolve().then(r.bind(r,2945)),"/home/rps/Documents/code/starWars/dark-records/src/app/starships/error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,4884)),"/home/rps/Documents/code/starWars/dark-records/src/app/starships/loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5169)),"/home/rps/Documents/code/starWars/dark-records/src/app/layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,4117)),"/home/rps/Documents/code/starWars/dark-records/src/app/error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,2793)),"/home/rps/Documents/code/starWars/dark-records/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,8206)),"/home/rps/Documents/code/starWars/dark-records/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/rps/Documents/code/starWars/dark-records/src/app/starships/page.tsx"],p="/starships/page",x={require:r,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/starships/page",pathname:"/starships",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4204:(e,s,r)=>{Promise.resolve().then(r.bind(r,478))},478:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i});var t=r(5344),a=r(6506),n=r(3729);function i({error:e,reset:s}){return(0,n.useEffect)(()=>{console.error(e)},[e]),(0,t.jsxs)("div",{className:"font-jedi text-center",children:[t.jsx("h2",{children:"Something went wrong!"}),t.jsx("button",{onClick:()=>s(),children:"Try again"}),t.jsx("h4",{children:"or"}),t.jsx(a.default,{href:"/",children:"Return to deathStar"})]})}},2945:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let t=(0,r(6843).createProxy)(String.raw`/home/rps/Documents/code/starWars/dark-records/src/app/starships/error.tsx`),{__esModule:a,$$typeof:n}=t,i=t.default},4884:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n});var t=r(5036),a=r(6848);let n=()=>t.jsx(a.Z,{})},9467:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>o,metadata:()=>i});var t=r(5036),a=r(2688),n=r(861);let i={title:"Starships | Darkside",description:"Database of Starships for the Darkside"};async function o(){let e=await (0,a.r)("starships");return t.jsx(n.Z,{data:e})}},3977:(e,s,r)=>{"use strict";r.d(s,{Z:()=>n});var t=r(5036),a=r(6274);let n=({items:e,linkPrefix:s})=>e[0]?t.jsx("div",{className:"flex justify-center",children:e.map((e,r)=>t.jsx(a.default,{className:"px-2 mx-2",href:`/${s?.split("/")[4]}/${e?.split("/")[5]}`,children:r+1},r))}):t.jsx("span",{children:"-"})},861:(e,s,r)=>{"use strict";r.d(s,{Z:()=>c});var t=r(5036),a=r(153),n=r(3977),i=r(1034),o=r(6274);let c=({data:e})=>(0,t.jsxs)("div",{className:"w-5/6 rounded-xl border font-battle ",children:[(0,t.jsxs)(i.iA,{children:[t.jsx(i.xD,{children:(0,t.jsxs)(i.SC,{className:"text-xl lg:text-2xl ",children:[t.jsx(i.ss,{className:"pl-8",children:"Name"}),t.jsx(i.ss,{className:"text-center py-4",children:"Hyperdrive Rating"}),t.jsx(i.ss,{className:"text-center",children:"Crew"}),t.jsx(i.ss,{className:"text-center",children:"Passengers"}),t.jsx(i.ss,{className:"text-center",children:"Class"}),t.jsx(i.ss,{className:"text-center",children:"Cost"}),t.jsx(i.ss,{className:"text-center",children:"Pilots"})]})}),t.jsx(i.RM,{className:"font-jedi text-sm lg:text-base tracking-widest",children:e.results.map(e=>(0,t.jsxs)(i.SC,{children:[t.jsx(i.pj,{className:"",children:t.jsx(o.default,{className:"px-2 mx-2",href:`/${e.url.split("/")[4]}/${e.url.split("/")[5]}`,children:e.name},e.url)}),t.jsx(i.pj,{className:" text-center",children:e.hyperdrive_rating}),t.jsx(i.pj,{className:" text-center",children:e.crew}),t.jsx(i.pj,{className:" text-center",children:e.passengers}),t.jsx(i.pj,{className:" text-center",children:e.starship_class}),t.jsx(i.pj,{className:" text-center",children:e.cost_in_credits}),t.jsx(i.pj,{className:" text-center",children:t.jsx(n.Z,{items:e.pilots,linkPrefix:e.pilots[0]})})]},e.name))})]}),t.jsx(a.Z,{to:"/starships/page/",total:e.count,previous:e.previous,next:e.next})]})}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[638,117,14,53],()=>r(8603));module.exports=t})();