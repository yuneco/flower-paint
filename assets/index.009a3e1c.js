var xe=Object.defineProperty;var ie=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var re=(t,e,l)=>e in t?xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,de=(t,e)=>{for(var l in e||(e={}))Ce.call(e,l)&&re(t,l,e[l]);if(ie)for(var l of ie(e))$e.call(e,l)&&re(t,l,e[l]);return t};import{d as y,o as d,c as _,a as f,b as u,e as J,f as L,r as P,w as $,g,u as M,h as r,i as p,j as k,k as E,T as Q,l as Ve,F as Y,m as Ie,n as H,t as B,p as U,q as R,s as A,v as W,x as ue,y as Se,z as ke,A as Ae,B as ee,C as te,D as oe,E as Le,G as he,H as Me,I as Te,J as Pe,K as Ee}from"./vendor.8c50f65c.js";const De=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}};De();const He={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 163.13 163.13"},Be=["fill"],Re=u("path",{d:"M81.56,15.51a65.84,65.84,0,0,0-28.25,6.33l2.63-6.09a6.6,6.6,0,1,0-12.12-5.23L35.4,30a9.68,9.68,0,0,0,5,12.72L60,51.19A6.6,6.6,0,0,0,65.2,39.07l-9-3.88A52.85,52.85,0,0,1,134.29,78c.08,1.19.13,2.38.13,3.59a6.6,6.6,0,1,0,13.2,0A66.13,66.13,0,0,0,81.56,15.51Z"},null,-1),Ze=u("path",{d:"M122.69,120.37l-19.53-8.43a6.6,6.6,0,0,0-8.67,3.44,6.61,6.61,0,0,0,3.44,8.68l9,3.88a52.52,52.52,0,0,1-25.35,6.48h0A52.84,52.84,0,0,1,28.84,85.15c-.08-1.19-.13-2.38-.13-3.58a6.6,6.6,0,0,0-13.2,0,66.07,66.07,0,0,0,66.05,66.05h0a65.84,65.84,0,0,0,28.25-6.33l-2.63,6.1a6.6,6.6,0,0,0,12.12,5.23l8.42-19.53A9.68,9.68,0,0,0,122.69,120.37Z"},null,-1),Ke=[Re,Ze],ze=["fill"],Oe=u("path",{d:"M160.26,74.08l-20.41-20.4A6.6,6.6,0,0,0,130.52,63L142.61,75.1H88.31V20.8L100.4,32.89a6.6,6.6,0,0,0,9.33-9.33L89.33,3.15a10.79,10.79,0,0,0-15.24,0L53.68,23.56A6.6,6.6,0,0,0,63,32.89L75.11,20.8V75.1H20.81L32.9,63a6.6,6.6,0,0,0-9.34-9.33L3.16,74.08a10.77,10.77,0,0,0,0,15.24l20.4,20.41a6.6,6.6,0,0,0,9.34-9.34L20.81,88.3h54.3v54.31L63,130.51a6.6,6.6,0,0,0-9.34,9.34l20.41,20.4A10.65,10.65,0,0,0,81,163.37a5.63,5.63,0,0,0,.71,0,5.48,5.48,0,0,0,.7,0,10.69,10.69,0,0,0,6.92-3.12l20.4-20.4a6.6,6.6,0,0,0-9.33-9.34l-12.09,12.1V88.3h54.3l-12.09,12.09a6.6,6.6,0,0,0,9.33,9.34l20.41-20.41A10.79,10.79,0,0,0,160.26,74.08Z"},null,-1),Ue=[Oe],We=y({props:{symbol:null,color:{default:"#444"}},setup(t){return(e,l)=>(d(),_("svg",He,[t.symbol==="rotate"?(d(),_("g",{key:0,fill:t.color},Ke,8,Be)):f("",!0),t.symbol==="move"?(d(),_("g",{key:1,fill:t.color},Ue,8,ze)):f("",!0)]))}}),N=J("canvas",{state:()=>({penColor:"#3399aa",penCount:[6,0],isKaleido:[!0,!0],penWidth:20,isStraight:!1,isEraser:!1,penOpacity:100,tool:"draw",coord:new L.exports.Coordinate,anchor:[new L.exports.Coordinate,new L.exports.Coordinate({scroll:new L.exports.Point(300,0)})]})}),F={min:1,max:16},X={min:2,max:16},Z=(t,e,l)=>Math.max(e,Math.min(l,t)),le=(t,e,l=0)=>l+Math.round((t-l)/e)*e,Ne=()=>{const t=N(),e=n=>{const[o,s]=t.$state.penCount;if(s){const c=Z(s+(n?1:-1),X.min,X.min);t.$state.penCount=[o,c]}else{const c=Z(o+(n?1:-1),F.min,F.max);t.$state.penCount=[c,s]}};return{penCountUp:()=>e(!0),penCountDown:()=>e(!1)}},T=P(),ae=P(),_e=t=>{var e,l,a;t.key==="ArrowUp"&&((e=ae.value)==null||e.penCountUp()),t.key==="ArrowDown"&&((l=ae.value)==null||l.penCountDown()),t.key==="z"&&t.metaKey&&((a=T.value)==null||a.undo())};window.removeEventListener("keydown",_e);window.addEventListener("keydown",_e);const Fe=t=>{const e=N();ae.value=Ne(),!!T.value&&console.warn("SymPaint init called multiple times.");const a=new L.exports.PaintCanvas(t,t.offsetWidth,t.offsetHeight);a.penCount=e.penCount,a.penColor=e.penColor,a.penWidth=e.penWidth,a.tool=e.isStraight?"draw:line":"draw",a.isKaleido=e.isKaleido,a.penKind=e.isEraser?"eraser":"normal",a.anchor=e.anchor[0],a.childAnchor=e.anchor[1],a.listenRequestZoom(o=>{e.coord=a.coord.clone({scale:o})}),a.listenRequestScrollTo(({point:o,target:s})=>{if(s==="canvas"&&(e.coord=a.coord.clone({scroll:o})),s==="anchor"){const c=a.hasSubPen?1:0;e.anchor[c]=a.activeAnchor.clone({scroll:o})}}),a.listenRequestRotateTo(({angle:o,target:s})=>{if(s==="canvas"&&(e.coord=a.coord.clone({angle:o})),s==="anchor"){const c=a.hasSubPen?1:0;e.anchor[c]=a.activeAnchor.clone({angle:o})}}),a.listenRequestUndo(()=>{a.undo()}),a.listenRequestAnchorTransform(o=>{a.activeAnchor=o}),a.listenRequestAnchorReset(()=>{a.anchor=new L.exports.Coordinate}),new L.exports.utils.ToolKeyWatcher().listenChange(o=>{if(o==="draw"||o==="draw:stamp"){e.tool="draw",e.isStraight=!1;return}if(o==="draw:line"){e.tool="draw",e.isStraight=!0;return}e.tool=o}),$(()=>[e.penColor],()=>{a.penColor=e.penColor}),$(()=>[e.penCount],()=>{a.penCount=e.penCount,e.penCount[0]===1&&(a.isKaleido=[!1,e.isKaleido[1]])}),$(()=>[e.penWidth],()=>{a.penWidth=e.penWidth}),$(()=>[e.isStraight],()=>{a.tool=e.isStraight?"draw:line":"draw"}),$(()=>[e.isKaleido],()=>{a.isKaleido=e.isKaleido,e.penCount[0]===1&&(a.isKaleido=[!1,e.isKaleido[1]])}),$(()=>[e.isEraser],()=>{a.penKind=e.isEraser?"eraser":"normal"}),$(()=>[e.penOpacity],()=>{a.penAlpha=e.penOpacity/100}),$(()=>[e.tool],()=>{a.tool=e.tool}),$(()=>[e.coord],()=>{a.coord=e.coord}),$(()=>[e.anchor[0]],()=>{a.anchor=e.anchor[0]}),$(()=>[e.anchor[1]],()=>{a.childAnchor=e.anchor[1]}),T.value=a},q=()=>{const t=N(),e=g(()=>t.penCount[1]>=1),l=g(()=>t.anchor[e.value?1:0]),a=g(()=>{var o,s;return(s=(o=T.value)==null?void 0:o.anchorColor[e.value?1:0])!=null?s:"#888"}),n=g(()=>{var o;return(o=T.value)==null?void 0:o.canvas2displayPos(l.value.scroll,"current")});return{state:t,init:o=>Fe(o),toImgBlob:()=>{var o;return(o=T.value)==null?void 0:o.toImgBlob()},undo:()=>{var o;return(o=T.value)==null?void 0:o.undo()},view2canvas:o=>{var s;return(s=T.value)==null?void 0:s.display2canvasPos(new L.exports.Point(o.x,o.y),"current")},canvas2view:o=>{var s;return(s=T.value)==null?void 0:s.canvas2displayPos(new L.exports.Point(o.x,o.y),"current")},activeAnchor:l,activeAnchorColor:a,activeAnchorPos:n}};var V=(t,e)=>{const l=t.__vccOpts||t;for(const[a,n]of e)l[a]=n;return l};const Xe={class:"CanvasOverlay"},qe={key:0,class:"marker"},Ge=y({setup(t){M(s=>({"7a6e355b":r(n)}));const{state:e,activeAnchorPos:l,activeAnchorColor:a}=q(),n=g(()=>{var s,c;return`translate(${(s=l.value)==null?void 0:s.x}px, ${(c=l.value)==null?void 0:c.y}px)`}),o=g(()=>{const s=e.tool;if(s==="rotate:anchor")return"rotate";if(s==="scroll:anchor")return"move"});return(s,c)=>(d(),_("div",Xe,[r(l)?(d(),_("div",qe,[p(Q,{name:"fade",appear:""},{default:k(()=>[r(o)?(d(),E(We,{key:0,class:"markerImage",symbol:r(o),color:r(a)},null,8,["symbol","color"])):f("",!0)]),_:1})])):f("",!0)]))}});var je=V(Ge,[["__scopeId","data-v-12634c28"]]);const Je={class:"overlayContainer"},Qe={class:"overlay"},Ye=y({setup(t){M(n=>({"9a780010":a.value.width,e825f596:a.value.height}));const e=P(),{init:l}=q(),a=P({width:"0",height:"0"});return Ve(()=>{const n=e.value;!n||(n.addEventListener("touchmove",o=>{o.preventDefault()}),a.value={width:`${n.offsetWidth}px`,height:`${n.offsetHeight}px`},l(n))}),(n,o)=>(d(),_(Y,null,[u("div",{ref_key:"el",ref:e,class:"PaintCanvas"},null,512),u("div",Je,[u("div",Qe,[p(je)])])],64))}});var et=V(Ye,[["__scopeId","data-v-743b55af"]]);const ne=async t=>new Promise(e=>{setTimeout(e,t)}),tt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},ot=u("rect",{width:"128",height:"128",fill:"none"},null,-1),lt=["fill"],at=["fill"],nt=["fill"],st=["fill"],ct=["fill"],it=["fill"],rt=["fill"],dt=["fill"],ut=Ie(`<path d="M86.9,56.7c-7,0-12.7,5.7-12.7,12.7c0,7,5.7,12.7,12.7,12.7c0,0,0,0,0,0c7,0,12.7-5.7,12.7-12.7
		C99.6,62.4,94,56.7,86.9,56.7z"></path><path d="M56.2,56.7c-7,0-12.7,5.7-12.7,12.7c0,7,5.7,12.7,12.7,12.7c0,0,0,0,0,0c7,0,12.7-5.7,12.7-12.7
		C68.9,62.4,63.3,56.7,56.2,56.7z"></path><path d="M48.3,48.3c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7c-4.8,0-8.7,3.9-8.7,8.7C39.6,44.4,43.5,48.3,48.3,48.3
		C48.3,48.3,48.3,48.3,48.3,48.3z"></path><path d="M98.5,30.8c-4.8,0-8.7,3.9-8.7,8.7c0,4.8,3.9,8.7,8.7,8.7c0,0,0,0,0,0c4.8,0,8.7-3.9,8.7-8.7
		C107.2,34.7,103.3,30.8,98.5,30.8z"></path><path d="M82.2,39.5c0-4.8-3.9-8.7-8.7-8.7c-4.8,0-8.7,3.9-8.7,8.7c0,4.8,3.9,8.7,8.7,8.7c0,0,0,0,0,0
		C78.3,48.3,82.2,44.4,82.2,39.5z"></path><path d="M115.2,6.1H12.8c-3.7,0-6.6,3-6.6,6.6v102.5c0,3.7,3,6.6,6.6,6.6h102.5c3.7,0,6.6-3,6.6-6.6V12.8
		C121.9,9.1,118.9,6.1,115.2,6.1z M108.6,60.6c-2.2,2.3-3.6,5.4-3.6,8.8s1.4,6.6,3.6,8.8v6.8c-9,1-16.4,7.3-19.1,15.7
		c-2.9-9.2-11.6-15.8-21.7-15.8c-10.1,0-18.7,6.6-21.7,15.8c-3-9.2-11.6-15.8-21.7-15.8c-1.7,0-3.4,0.2-5,0.6v-4.9
		c1.8,1,3.9,1.6,6.1,1.6c0,0,0,0,0,0c7,0,12.7-5.7,12.7-12.7c0-7-5.7-12.7-12.7-12.7c-2.2,0-4.3,0.6-6.1,1.6v-11
		c1.2,0.6,2.4,0.9,3.8,0.9c0,0,0,0,0,0c4.8,0,8.7-3.9,8.7-8.7c0-4.8-3.9-8.7-8.7-8.7c-1.4,0-2.7,0.3-3.8,0.9v-8.1
		c2.1-0.4,3.6-2.1,4-4.2h8.4c0.4,2.4,2.5,4.3,5,4.3s4.6-1.9,5-4.3h8.4c0.4,2.4,2.5,4.3,5,4.3s4.6-1.9,5-4.3h8.4
		c0.4,2.4,2.5,4.3,5,4.3s4.6-1.9,5-4.3h8.4c0.4,2.4,2.4,4.2,4.9,4.3c0,0,0.1,0,0.1,0c2.5,0,4.6-1.9,5-4.3h8.3
		c0.3,1.8,1.5,3.3,3.1,3.9V60.6z"></path>`,6),ht=[ut],_t=["fill"],mt=["fill"],pt=u("rect",{x:"11.13",y:"16.45",width:"104.97",height:"14.33",rx:"3.2"},null,-1),vt=u("rect",{x:"10.47",y:"42",width:"105.63",height:"21.62",rx:"3.2"},null,-1),ft=u("rect",{x:"10.47",y:"80.06",width:"105.63",height:"31.46",rx:"3.2"},null,-1),gt=[pt,vt,ft],yt=["fill"],bt=u("path",{d:"M69,33.7H59a6.6,6.6,0,0,0,0,13.2H69a1.44,1.44,0,0,1,1.55,1.26v52.28A1.45,1.45,0,0,1,69,101.7H14.75a1.45,1.45,0,0,1-1.55-1.26V48.16a1.44,1.44,0,0,1,1.55-1.26h10a6.6,6.6,0,1,0,0-13.2h-10A14.62,14.62,0,0,0,0,48.16v52.28A14.63,14.63,0,0,0,14.75,114.9H69a14.63,14.63,0,0,0,14.75-14.46V48.16A14.62,14.62,0,0,0,69,33.7Z"},null,-1),wt=u("path",{d:"M27.11,28.19a6.58,6.58,0,0,0,4.67-1.93l3.49-3.49V69.83a6.6,6.6,0,0,0,13.2,0V22.29L52,25.78a6.6,6.6,0,0,0,9.33-9.33L46.77,1.93a6.61,6.61,0,0,0-9.33,0l-15,15a6.6,6.6,0,0,0,4.66,11.27Z"},null,-1),xt=[bt,wt],Ct=["fill"],$t=u("path",{d:"M30.16,65.34a8.73,8.73,0,1,1,8.73,8.72A8.73,8.73,0,0,1,30.16,65.34Z"},null,-1),Vt=u("path",{d:"M56.27,65.34A8.73,8.73,0,1,1,65,74.06,8.72,8.72,0,0,1,56.27,65.34Z"},null,-1),It=u("path",{d:"M82.37,65.34a8.73,8.73,0,1,1,8.72,8.72A8.72,8.72,0,0,1,82.37,65.34Z"},null,-1),St=[$t,Vt,It],kt=["fill"],At=u("path",{d:"M120.94,61.05,94.53,45.81a3.4,3.4,0,0,0-5.1,2.94V57.4H70.59V38.56h8.65a3.4,3.4,0,0,0,3-5.1L66.94,7.05a3.41,3.41,0,0,0-5.9,0L45.8,33.46a3.4,3.4,0,0,0,2.94,5.1h8.65V57.4H38.56V48.75a3.4,3.4,0,0,0-5.11-2.94L7,61.05A3.41,3.41,0,0,0,7,67L33.45,82.19a3.4,3.4,0,0,0,5.11-2.94V70.6H57.39V89.44H48.74a3.4,3.4,0,0,0-2.94,5.1L61,121a3.41,3.41,0,0,0,5.9,0L82.19,94.54a3.4,3.4,0,0,0-3-5.1H70.59V70.6H89.43v8.65a3.4,3.4,0,0,0,5.1,2.94L120.94,67A3.41,3.41,0,0,0,120.94,61.05Z"},null,-1),Lt=[At],Mt=["fill"],Tt=u("path",{d:"M89.23,16.79a54.13,54.13,0,0,0-54.33.32l-3.55-5.29a2.57,2.57,0,0,0-4.45.3L15.39,35.56a2.58,2.58,0,0,0,2.49,3.7l25.78-1.74.27,0a2.57,2.57,0,0,0,2-4l-3.63-5.41A40.61,40.61,0,0,1,102.17,71.3c-.12.63-.26,1.25-.41,1.87a6.6,6.6,0,1,0,12.81,3.18A54.07,54.07,0,0,0,89.23,16.79Z"},null,-1),Pt=u("path",{d:"M109.2,86.78l-26.09.91a2.55,2.55,0,0,0-2.26,1.56A2.51,2.51,0,0,0,81,91.62l3.59,5.75A40.62,40.62,0,0,1,22.45,55.53c.13-.63.26-1.25.42-1.87a6.6,6.6,0,0,0-12.82-3.18,53.87,53.87,0,0,0,81.56,58.09l3.24,5.2a2.58,2.58,0,0,0,4.46-.16l12.25-23A2.57,2.57,0,0,0,109.2,86.78Z"},null,-1),Et=[Tt,Pt],Dt=["fill"],Ht=u("path",{d:"M74.6,31H64.31V24.52a3.72,3.72,0,0,0-5.58-3.22L34.9,35.06a3.72,3.72,0,0,0,0,6.44L58.73,55.26A3.72,3.72,0,0,0,64.31,52V44.16H74.6c23,0,25.66,11.82,25.66,20.71,0,10.24-3.05,20.71-25.66,20.71H29.09a6.6,6.6,0,0,0,0,13.2H74.6c13.42,0,23.56-3.34,30.16-9.93,5.77-5.77,8.7-13.84,8.7-24C113.46,43.32,99.3,31,74.6,31Z"},null,-1),Bt=[Ht],Rt=["fill"],Zt=u("path",{d:"M100.86,85.58H55.34c-12.68,0-25.65-2.46-25.65-20.71,0-8.89,2.66-20.71,25.65-20.71h10.3V52a3.72,3.72,0,0,0,5.58,3.22L95.05,41.5a3.72,3.72,0,0,0,0-6.44L71.22,21.3a3.72,3.72,0,0,0-5.58,3.22V31H55.34c-24.69,0-38.85,12.35-38.85,33.9,0,10.14,2.92,18.21,8.7,24,6.6,6.59,16.74,9.93,30.15,9.93h45.52a6.6,6.6,0,0,0,0-13.2Z"},null,-1),Kt=[Zt],me=y({props:{symbol:null,color:{default:"#444"}},setup(t){return(e,l)=>(d(),_("svg",tt,[ot,t.symbol==="2nd"?(d(),_("path",{key:0,fill:t.color,d:"M119.81,64a6.5,6.5,0,0,0-6.5-6.5h-1l.52-.91a6.5,6.5,0,1,0-11.26-6.5L101,51l-.52-.91a6.52,6.52,0,0,0-7.5-3,6.49,6.49,0,0,0,1.18-8l-.53-.91h1a6.5,6.5,0,0,0,0-13h-1l.53-.9a6.5,6.5,0,1,0-11.26-6.5l-.52.9-.53-.9a6.5,6.5,0,1,0-11.26,6.5l.53.9h-1a6.51,6.51,0,0,0-6.32,5,6.51,6.51,0,0,0-6.32-5h-1l.52-.9a6.5,6.5,0,1,0-11.26-6.5l-.52.9-.53-.9a6.5,6.5,0,1,0-11.26,6.5l.53.9H32.83a6.5,6.5,0,1,0,0,13h1.05l-.53.91a6.49,6.49,0,0,0,1.18,8,6.51,6.51,0,0,0-7.5,3l-.52.91L26,50.09a6.5,6.5,0,1,0-11.26,6.5l.52.91h-1a6.5,6.5,0,0,0,0,13h1l-.52.91a6.49,6.49,0,0,0,2.38,8.87,6.37,6.37,0,0,0,3.24.88A6.52,6.52,0,0,0,26,77.91l.52-.91.52.91a6.52,6.52,0,0,0,5.64,3.25,6.28,6.28,0,0,0,1.86-.29,6.51,6.51,0,0,0-1.18,8l.53.91H32.83a6.5,6.5,0,0,0,0,13h1.05l-.53.9a6.51,6.51,0,0,0,2.38,8.88,6.48,6.48,0,0,0,8.88-2.38l.53-.9.52.9a6.5,6.5,0,0,0,11.26-6.5l-.52-.9h1a6.51,6.51,0,0,0,6.32-5,6.51,6.51,0,0,0,6.32,5h1l-.53.9A6.5,6.5,0,0,0,73,112.54a6.41,6.41,0,0,0,3.25.88,6.49,6.49,0,0,0,5.63-3.26l.53-.9.52.9a6.5,6.5,0,0,0,11.26-6.5l-.53-.9h1a6.5,6.5,0,0,0,0-13h-1l.53-.91a6.5,6.5,0,0,0-1.18-8,6.28,6.28,0,0,0,1.86.29,6.52,6.52,0,0,0,5.64-3.25L101,77l.52.91a6.52,6.52,0,0,0,5.64,3.25,6.37,6.37,0,0,0,3.24-.88,6.48,6.48,0,0,0,2.38-8.87l-.52-.91h1A6.5,6.5,0,0,0,119.81,64Zm-56,30.76a6.5,6.5,0,0,0-6.32-5h-1l.52-.91a6.5,6.5,0,0,0-11.26-6.5l-.52.91-.53-.91a6.49,6.49,0,0,0-7.49-3,6.49,6.49,0,0,0,1.17-8l-.52-.91h1a6.5,6.5,0,0,0,0-13h-1l.52-.91a6.51,6.51,0,0,0-1.17-8A6.23,6.23,0,0,0,39,48.9a6.5,6.5,0,0,0,5.63-3.25l.53-.91.52.91a6.5,6.5,0,0,0,11.26-6.5l-.52-.91h1a6.5,6.5,0,0,0,6.32-5,6.5,6.5,0,0,0,6.32,5h1l-.53.91a6.5,6.5,0,0,0,11.26,6.5l.53-.91.52.91a6.5,6.5,0,0,0,5.63,3.25,6.34,6.34,0,0,0,1.87-.29,6.5,6.5,0,0,0-1.18,8l.52.91h-1a6.5,6.5,0,1,0,0,13h1l-.52.91a6.49,6.49,0,0,0,1.17,8,6.49,6.49,0,0,0-7.49,3l-.52.91-.53-.91a6.5,6.5,0,0,0-11.26,6.5l.53.91h-1A6.5,6.5,0,0,0,63.76,94.76Z"},null,8,lt)):f("",!0),t.symbol==="count"?(d(),_("path",{key:1,fill:t.color,d:"M113,56.36H74.79L93.9,23.27a6.81,6.81,0,0,0-11.8-6.8L63,49.55,43.9,16.47a6.81,6.81,0,0,0-11.8,6.8L51.21,56.36H13A6.81,6.81,0,0,0,13,70H51.21L32.1,103.07a6.81,6.81,0,0,0,11.8,6.81L63,76.79l19.1,33.09a6.81,6.81,0,0,0,5.91,3.4,6.81,6.81,0,0,0,5.89-10.21L74.79,70H113a6.81,6.81,0,0,0,0-13.62Z"},null,8,at)):f("",!0),t.symbol==="eraser"?(d(),_("path",{key:2,fill:t.color,d:"M118.24,48.91,81,11.43a6.46,6.46,0,0,0-9.15,0L9.69,73.13a6.43,6.43,0,0,0-1.91,4.56,6.5,6.5,0,0,0,1.87,4.59l37.21,37.48a6.48,6.48,0,0,0,4.6,1.91A6.41,6.41,0,0,0,56,119.79L118.2,58.06a6.43,6.43,0,0,0,1.91-4.56A6.5,6.5,0,0,0,118.24,48.91ZM76.4,25.14l8.3,8.36L48.57,69.36,40.27,61ZM51.49,106.05,23.4,77.75l7.69-7.63,28.09,28.3ZM68.36,89.31,60.06,81,96.2,45.08l8.29,8.36Z"},null,8,nt)):f("",!0),t.symbol==="freehand"?(d(),_("path",{key:3,fill:t.color,d:"M18.55,118.29a6.63,6.63,0,0,1-6.63-6.43c-1-31,24.9-42.16,47.73-52C82.65,50,102.51,41.4,102,16.48a6.64,6.64,0,0,1,6.5-6.77h.14a6.64,6.64,0,0,1,6.63,6.5C116,50.06,88.83,61.74,64.9,72.05c-25.14,10.83-40.36,18.89-39.72,39.4a6.64,6.64,0,0,1-6.42,6.84Z"},null,8,st)):f("",!0),t.symbol==="line"?(d(),_("path",{key:4,fill:t.color,d:"M16.36,119.08a6.63,6.63,0,0,1-4.82-11.19l90.08-95.32a6.64,6.64,0,1,1,9.64,9.12L21.18,117A6.61,6.61,0,0,1,16.36,119.08Z"},null,8,ct)):f("",!0),t.symbol==="mode_kaleido"?(d(),_("path",{key:5,fill:t.color,d:"M115.67,47a34.49,34.49,0,0,0-27.81-7.24,51.67,51.67,0,0,0-17,6A43.92,43.92,0,0,0,67,27.46C62.64,17.65,54.54,10,45.38,7.07,39,5,32.68,5.44,27.7,8.31c-5.34,3.08-9.15,9-10.45,16.3a34.47,34.47,0,0,0,7.64,27.7,51.54,51.54,0,0,0,14.34,12A44.11,44.11,0,0,0,25.38,76.8c-6.29,8.72-8.84,19.54-6.83,29,1.41,6.59,4.94,11.81,9.92,14.69A20.21,20.21,0,0,0,38.63,123a27.09,27.09,0,0,0,9.18-1.67A34.49,34.49,0,0,0,68,100.88a51.84,51.84,0,0,0,3.23-17.65,43.82,43.82,0,0,0,17.1,5.41,40.94,40.94,0,0,0,4.13.21c9.25,0,18.13-3.15,24.35-8.77,5-4.52,7.77-10.18,7.77-15.94C124.56,58,121.32,51.71,115.67,47ZM35.09,43.83A21.06,21.06,0,0,1,30.31,27c.59-3.32,2.13-6.06,4-7.15a6.43,6.43,0,0,1,3.21-.75,12.34,12.34,0,0,1,3.76.65c4.36,1.41,10.23,5.61,13.63,13.19a33.18,33.18,0,0,1,.93,23.94A38.88,38.88,0,0,1,35.09,43.83ZM55.53,96.28A21.06,21.06,0,0,1,43.3,108.87c-3.17,1.14-6.31,1.18-8.2.09-1.66-1-3-3.14-3.57-6-1-4.48-.25-11.67,4.61-18.41A33.14,33.14,0,0,1,56.41,71.8,38.93,38.93,0,0,1,55.53,96.28Zm52.37-26c-3.4,3.07-10,6-18.25,5.21A33.14,33.14,0,0,1,68.46,64.27,38.88,38.88,0,0,1,90.1,52.79a21.09,21.09,0,0,1,17,4.3c2.57,2.17,4.17,4.87,4.17,7C111.29,66.07,110.05,68.28,107.9,70.23Z"},null,8,it)):f("",!0),t.symbol==="mode_mirror"?(d(),_("path",{key:6,fill:t.color,d:"M118.53,62.47a6.64,6.64,0,0,0-11.76,6.16,8.26,8.26,0,0,1-.26,8.74c-2.1,3.19-6.06,4.89-10.56,4.53-9.43-.74-22.73-11.19-27.28-15.35,1.26-6.29,4.43-25.76-1.54-38.36-4-8.39-11.77-13.93-20.35-14.47A21.66,21.66,0,0,0,27.05,24a6.63,6.63,0,1,0,11.19,7.13A8.25,8.25,0,0,1,46,27c3.82.23,7.25,2.82,9.19,6.9,3.92,8.28,1.75,24.24.39,30.7-5.9,2-24.6,9.05-32.57,20.65-5.26,7.66-6.14,17.18-2.29,24.87A21.6,21.6,0,0,0,39.41,122h.28A6.63,6.63,0,0,0,40,108.75a8.27,8.27,0,0,1-7.43-4.6c-1.7-3.42-1.2-7.68,1.37-11.41,5.22-7.6,20.28-13.77,26.48-15.8C64.56,80.67,80.49,94,94.91,95.13c.72.05,1.43.08,2.14.08a24.38,24.38,0,0,0,20.54-10.54A21.61,21.61,0,0,0,118.53,62.47Z"},null,8,rt)):f("",!0),t.symbol==="opacity"?(d(),_("g",{key:7,fill:t.color},ht,8,dt)):f("",!0),t.symbol==="pen"?(d(),_("path",{key:8,fill:t.color,d:"M117.8,35.64,91.86,9.89A6.65,6.65,0,0,0,87.28,8a6.47,6.47,0,0,0-4.56,1.91l-65.5,66a6.4,6.4,0,0,0-1.73,3.21l-7.06,33A6.46,6.46,0,0,0,14.75,120a6.66,6.66,0,0,0,1.4-.15l33-7.3a6.47,6.47,0,0,0,3.19-1.76l65.5-66A6.46,6.46,0,0,0,117.8,35.64ZM44.5,100.33l-10.86,2.4-8.21-8.29,2.29-10.76L87.34,23.61l16.77,16.65Z"},null,8,_t)):f("",!0),t.symbol==="width"?(d(),_("g",{key:9,fill:t.color},gt,8,mt)):f("",!0),t.symbol==="export"?(d(),_("g",{key:10,fill:t.color,transform:"translate(22 6)"},xt,8,yt)):f("",!0),t.symbol==="other"?(d(),_("g",{key:11,fill:t.color},St,8,Ct)):f("",!0),t.symbol==="move"?(d(),_("g",{key:12,fill:t.color},Lt,8,kt)):f("",!0),t.symbol==="rotate"?(d(),_("g",{key:13,fill:t.color},Et,8,Mt)):f("",!0),t.symbol==="undo"?(d(),_("g",{key:14,fill:t.color},Bt,8,Dt)):f("",!0),t.symbol==="redo"?(d(),_("g",{key:15,fill:t.color},Kt,8,Rt)):f("",!0)]))}}),D={textColor:"#3a3a3a",themeColor:"rgb(147, 204, 214)",themeDark:"rgb(68, 139, 156)"};const zt={key:0,class:"icon"},Ot={class:"content"},Ut={key:1,class:"label"},Wt=y({props:{icon:null,label:null,checked:{type:Boolean,default:!1},edge:{default:"both"},cornerStyle:{default:"default"},disabled:{type:Boolean,default:!1},enableFlash:{type:Boolean,default:!0}},emits:["check"],setup(t,{emit:e}){const l=t;M(c=>({"2a17247e":r(D).textColor}));const a=P(!1),n=async()=>{const c=!l.checked;e("check",c),c&&l.enableFlash&&(a.value=!0,await ne(100),a.value=!1)},o=g(()=>l.cornerStyle==="round"?"18px":"4px"),s=g(()=>({borderRadius:{left:[!0,!1,!1,!0],right:[!1,!0,!0,!1],both:[!0,!0,!0,!0],none:[!1,!1,!1,!1]}[l.edge].map(w=>w?o.value:"0").join(" "),borderRightWidth:l.edge==="right"||l.edge==="both"?"1px":"0"}));return(c,w)=>(d(),_("button",{class:U(["PaletteItem",{PaletteItem__disabled:t.disabled,PaletteItem__checked:t.checked,PaletteItem__flash:a.value}]),style:R(de({},r(s))),onPointerdown:n},[t.icon?(d(),_("span",zt,[p(me,{symbol:t.icon},null,8,["symbol"])])):f("",!0),u("div",Ot,[H(c.$slots,"default",{},void 0,!0)]),t.label?(d(),_("span",Ut,B(t.label),1)):f("",!0)],38))}});var K=V(Wt,[["__scopeId","data-v-61504ef9"]]);const Nt={class:"CheckItem"},z=y({props:{modelValue:{type:Boolean},label:{default:""},icon:null,edge:null,cornerStyle:null},emits:["update:modelValue"],setup(t,{emit:e}){const l=a=>{e("update:modelValue",a)};return(a,n)=>(d(),_("div",Nt,[p(K,{label:t.label,icon:t.icon,checked:t.modelValue,edge:t.edge,cornerStyle:t.cornerStyle,onCheck:l},{default:k(()=>[H(a.$slots,"default")]),_:3},8,["label","icon","checked","edge","cornerStyle"])]))}});const Ft=["value"],Xt=y({props:{modelValue:null},emits:["update:modelValue"],setup(t,{emit:e}){const l=P(),a=()=>{var o;(o=l.value)==null||o.click()},n=o=>{e("update:modelValue",o.target.value)};return(o,s)=>(d(),_("div",{class:"ColorSelector",onPointerdown:a},[u("div",{class:"view",style:R({backgroundColor:t.modelValue})},null,4),u("input",{type:"color",ref_key:"inp",ref:l,value:t.modelValue,onInput:s[0]||(s[0]=c=>n(c))},null,40,Ft)],32))}});var qt=V(Xt,[["__scopeId","data-v-175130a0"]]);const Gt={class:"ColorSelectItem"},jt=y({props:{modelValue:null,checked:{type:Boolean,default:!1},icon:null,edge:null},emits:["update:modelValue","update:checked"],setup(t,{emit:e}){const l=t,a=g({get:()=>l.modelValue,set:o=>{e("update:modelValue",o)}}),n=g({get:()=>l.checked,set:o=>{e("update:checked",o)}});return(o,s)=>(d(),_("div",Gt,[p(z,{icon:t.icon,edge:t.edge,modelValue:r(n),"onUpdate:modelValue":s[1]||(s[1]=c=>A(n)?n.value=c:null)},{default:k(()=>[p(qt,{modelValue:r(a),"onUpdate:modelValue":s[0]||(s[0]=c=>A(a)?a.value=c:null)},null,8,["modelValue"])]),_:1},8,["icon","edge","modelValue"])]))}});const Jt={class:"Slider"},Qt={class:"label"},Yt={class:"value"},eo=y({props:{min:{default:0},max:{default:100},step:{default:1},modelValue:null,label:{default:""}},emits:["update:modelValue","close"],setup(t,{emit:e}){const l=t;M(v=>({"69b84626":r(D).themeColor}));const a=120,n=W({isDragging:!1}),o=g(()=>(l.modelValue-l.min)/(l.max-l.min)),s=v=>{const x=Z(v.offsetX/a,0,1),b=le(l.min+x*(l.max-l.min),l.step,l.min);e("update:modelValue",b)},c=v=>{s(v),n.isDragging=!0},w=v=>{!n.isDragging||s(v)},C=async v=>{!n.isDragging||(s(v),n.isDragging=!1,await ne(200),I())},I=()=>{e("close")};return(v,x)=>(d(),_("div",Jt,[u("span",Qt,B(t.label),1),u("div",{class:"bar",onPointerdown:c,onPointermove:w,onPointercancel:C,onPointerup:C},[u("div",{class:"fill",style:R({transform:`scaleX(${r(o)})`})},null,4),u("div",Yt,B(t.modelValue),1)],32)]))}});var to=V(eo,[["__scopeId","data-v-6f608bda"]]);const oo=5,pe=(t,e,l)=>{document.body.style.cursor="ew-resize";const a=t.screenX;let n=!1;const o=c=>{c.preventDefault();const w=c.screenX-a;!n&&Math.abs(w)<oo||(e(w),n=!0)},s=()=>{document.body.removeEventListener("pointermove",o),document.body.removeEventListener("pointerup",s),document.body.removeEventListener("pointercancel",s),document.body.style.cursor="",l(n)};document.body.addEventListener("pointermove",o),document.body.addEventListener("pointerup",s),document.body.addEventListener("pointercancel",s)},ve=J("toolbar",{state:()=>({activeItemId:""})});const lo={class:"SliderItem"},ao={key:0,class:"slider"},no=y({props:{min:{default:0},max:{default:100},modelValue:null,step:{default:1},label:{default:""},unit:{default:""},icon:null,edge:null,disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const l=t,a=ve(),n=`slider-${Math.random()}`,o=W({startValue:0,isSliderVisible:!1}),s=120;$(()=>a.$state.activeItemId,()=>{a.$state.activeItemId!==n&&(o.isSliderVisible=!1)});const c=()=>{a.$state.activeItemId===n&&(a.$state.activeItemId="")};$(()=>l.disabled,()=>{l.disabled&&c()});const w=v=>{o.startValue=l.modelValue,o.isSliderVisible=!0,a.$state.activeItemId=n,pe(v,x=>{const b=s/(l.max-l.min),S=Z(le(o.startValue+x/b,l.step,l.min),l.min,l.max);e("update:modelValue",S)},x=>{x&&c()})},C=v=>{l.disabled||(o.isSliderVisible?c():w(v))},I=v=>{e("update:modelValue",v)};return(v,x)=>(d(),_("div",lo,[p(K,{onPointerdown:ue(C,["prevent"]),label:`${t.modelValue}${t.unit}`,icon:t.icon,edge:t.edge,disabled:t.disabled},null,8,["onPointerdown","label","icon","edge","disabled"]),r(o).isSliderVisible?(d(),_("div",ao,[p(to,{modelValue:t.modelValue,"onUpdate:modelValue":I,label:t.label,min:t.min,max:t.max,onClose:c},null,8,["modelValue","label","min","max"])])):f("",!0)]))}});var G=V(no,[["__scopeId","data-v-2eb33757"]]);const so={class:"SwitchList"},co={class:"label"},io={class:"list"},ro=["onPointerdown"],uo={key:0,class:"icon"},ho=y({props:{options:{default:()=>[]},modelValue:null,label:null},emits:["update:modelValue","close"],setup(t,{emit:e}){M(a=>({bd837018:r(D).themeColor}));const l=async a=>{e("update:modelValue",a),await ne(200),e("close")};return(a,n)=>(d(),_("div",so,[u("div",co,B(t.label),1),u("ul",io,[(d(!0),_(Y,null,Se(t.options,o=>(d(),_("li",{key:o.key,class:U(["opt",{selected:o.key===t.modelValue}]),onPointerdown:s=>l(o.key)},[o.icon?(d(),_("div",uo,[p(me,{symbol:o.icon},null,8,["symbol"])])):f("",!0)],42,ro))),128))])]))}});var _o=V(ho,[["__scopeId","data-v-cd527ff8"]]);const mo={class:"SwitchItem"},po={class:"list"},vo=y({props:{modelValue:null,options:{default:()=>[]},label:{default:""},edge:null,disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const l=t,a=g(()=>l.options.find(b=>b.key===l.modelValue)),n=g(()=>l.options.findIndex(b=>b.key===l.modelValue)),o=ve(),s=`switch-${Math.random()}`,c=W({startIndex:0,isListVisible:!1}),w=120;$(()=>o.$state.activeItemId,()=>{o.$state.activeItemId!==s&&(c.isListVisible=!1)});const C=()=>{o.$state.activeItemId===s&&(o.$state.activeItemId="")};$(()=>l.disabled,()=>{l.disabled&&C()});const I=b=>{c.startIndex=n.value,c.isListVisible=!0,o.$state.activeItemId=s,pe(b,S=>{const i=w,h=Z(le(c.startIndex+S/i,1,0),0,l.options.length-1);e("update:modelValue",l.options[h].key)},S=>{S&&C()})},v=b=>{l.disabled||(c.isListVisible?C():I(b))},x=b=>{e("update:modelValue",b)};return(b,S)=>{var i;return d(),_("div",mo,[p(K,{onPointerdown:ue(v,["prevent"]),icon:(i=r(a))==null?void 0:i.icon,edge:t.edge,disabled:t.disabled},null,8,["onPointerdown","icon","edge","disabled"]),ke(u("div",po,[p(_o,{label:t.label,options:t.options,modelValue:t.modelValue,"onUpdate:modelValue":x,onClose:C},null,8,["label","options","modelValue"])],512),[[Ae,r(c).isListVisible]])])}}});var se=V(vo,[["__scopeId","data-v-836d7fd8"]]);const O=J("app",{state:()=>({modal:"start",toast:""})});const fo={class:"radioGroup"},go={class:"radioGroup"},yo={class:"radioGroup"},bo={class:"radioGroup"},wo=y({setup(t){const e=N(),l=O(),a=g({set:i=>{e.penCount=[i,e.penCount[1]]},get:()=>e.penCount[0]}),n=g({set:i=>{e.penCount=[e.penCount[0],i]},get:()=>e.penCount[1]}),o=g({set:i=>{n.value=i?a.value:0},get:()=>n.value>=1}),s=[{key:"line",label:"line",icon:"line"},{key:"free",label:"free",icon:"freehand"}],c=g({set:i=>{e.isStraight=i==="line"},get:()=>e.isStraight?"line":"free"}),w=g({get:()=>e.tool==="draw"&&!e.isEraser,set:i=>{!i||(e.tool="draw",e.isEraser=!1)}}),C=g({get:()=>e.tool==="draw"&&e.isEraser,set:i=>{!i||(e.tool="draw",e.isEraser=!0)}}),I=[{key:"mirror",label:"mirror",icon:"mode_mirror"},{key:"kaleido",label:"kaleido",icon:"mode_kaleido"}],v=g({set:i=>{e.isKaleido=[i==="kaleido",e.isKaleido[1]]},get:()=>e.isKaleido[0]?"kaleido":"mirror"}),x=g({set:i=>{e.isKaleido=[e.isKaleido[0],i==="kaleido"]},get:()=>e.isKaleido[1]?"kaleido":"mirror"}),b=()=>{l.$state.modal||(l.$state.modal="export")},S=i=>{const h=i.target;if(h&&h instanceof HTMLInputElement&&h.type==="color")return!0;i.preventDefault()};return(i,h)=>(d(),_("div",{class:"Toolbar",onTouchstart:S},[u("div",fo,[p(jt,{modelValue:r(e).$state.penColor,"onUpdate:modelValue":h[0]||(h[0]=m=>r(e).$state.penColor=m),checked:r(w),"onUpdate:checked":h[1]||(h[1]=m=>w.value=m),edge:"left",icon:"pen"},null,8,["modelValue","checked"]),p(z,{modelValue:r(C),"onUpdate:modelValue":h[2]||(h[2]=m=>A(C)?C.value=m:null),edge:"right",icon:"eraser"},null,8,["modelValue"])]),u("div",go,[p(G,{modelValue:r(e).penOpacity,"onUpdate:modelValue":h[3]||(h[3]=m=>r(e).penOpacity=m),label:"Opacity",icon:"opacity",min:1,max:100,edge:"left"},null,8,["modelValue"]),p(G,{modelValue:r(e).penWidth,"onUpdate:modelValue":h[4]||(h[4]=m=>r(e).penWidth=m),label:"Width",icon:"width",min:1,max:50,edge:"none"},null,8,["modelValue"]),p(se,{label:"LineType",modelValue:r(c),"onUpdate:modelValue":h[5]||(h[5]=m=>A(c)?c.value=m:null),options:s,edge:"right"},null,8,["modelValue"])]),u("div",yo,[p(G,{modelValue:r(a),"onUpdate:modelValue":h[6]||(h[6]=m=>A(a)?a.value=m:null),label:"PenCount",icon:"count",min:r(F).min,max:r(F).max,edge:"left"},null,8,["modelValue","min","max"]),p(se,{label:"MirrorType",modelValue:r(v),"onUpdate:modelValue":h[7]||(h[7]=m=>A(v)?v.value=m:null),options:I,edge:"right"},null,8,["modelValue"])]),u("div",bo,[p(z,{modelValue:r(o),"onUpdate:modelValue":h[8]||(h[8]=m=>A(o)?o.value=m:null),edge:"left",icon:"2nd"},null,8,["modelValue"]),p(G,{modelValue:r(n),"onUpdate:modelValue":h[9]||(h[9]=m=>A(n)?n.value=m:null),label:"PenCount",icon:"count",min:r(X).min,max:r(X).max,edge:"none",disabled:!r(o)},null,8,["modelValue","min","max","disabled"]),p(se,{label:"MirrorType",modelValue:r(x),"onUpdate:modelValue":h[10]||(h[10]=m=>A(x)?x.value=m:null),options:I,edge:"right",disabled:!r(o)},null,8,["modelValue","disabled"])]),p(K,{icon:"export",onCheck:b})],32))}});var xo=V(wo,[["__scopeId","data-v-7c014a31"]]);const Co={class:"SideToolbar"},$o={class:"undo"},Vo=y({setup(t){const{state:e,undo:l}=q(),a=g({set:o=>{o?e.tool="rotate:anchor":e.tool="draw"},get:()=>e.tool==="rotate:anchor"}),n=g({set:o=>{o?e.tool="scroll:anchor":e.tool="draw"},get:()=>e.tool==="scroll:anchor"});return(o,s)=>(d(),_("div",Co,[p(z,{modelValue:r(a),"onUpdate:modelValue":s[0]||(s[0]=c=>A(a)?a.value=c:null),icon:"rotate",cornerStyle:"round"},null,8,["modelValue"]),p(z,{modelValue:r(n),"onUpdate:modelValue":s[1]||(s[1]=c=>A(n)?n.value=c:null),icon:"move",cornerStyle:"round"},null,8,["modelValue"]),u("div",$o,[p(K,{onCheck:r(l),icon:"undo",label:"",cornerStyle:"round"},null,8,["onCheck"])])]))}});var Io=V(Vo,[["__scopeId","data-v-bd240590"]]);const So={class:"CloseButton"},ko=y({props:{foreColor:{default:"#999"},bgColor:{default:"#fff"}},emits:["click"],setup(t,{emit:e}){const l=t;return M(a=>({b5bc6cee:l.foreColor,"01b79020":l.bgColor})),(a,n)=>(d(),_("div",So,[u("button",{onClick:n[0]||(n[0]=o=>e("click"))},"CLOSE")]))}});var fe=V(ko,[["__scopeId","data-v-25106b84"]]);const Ao={class:"PlaneBox"},Lo=y({props:{backgroundColor:{default:"#fff"}},setup(t){const e=t;return M(l=>({"00d2536c":e.backgroundColor})),(l,a)=>(d(),_("div",Ao,[H(l.$slots,"default",{},void 0,!0)]))}});var ge=V(Lo,[["__scopeId","data-v-e19ebaec"]]);const ye=async t=>{if(!t.naturalWidth||!t.naturalHeight)return;const e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const l=e.getContext("2d");if(!!l)return l.drawImage(t,0,0),new Promise(a=>{e.toBlob(n=>{a(n!=null?n:void 0)})})},Mo=async t=>{let e;try{e=new ClipboardItem({"image/png":t})}catch{e=new ClipboardItem({"image/png":await t})}return await navigator.clipboard.write([e]),!0},To=async t=>{const e=ye(t);return e?await Mo(e.then(a=>{if(!a)throw new Error("failed to copy img");return a})).catch(a=>(console.warn(a),!1)):!1},be=async t=>{const e=new Image;return e.src=URL.createObjectURL(t),new Promise(l=>{e.onload=e.onabort=e.onerror=()=>{l(e)}})},Po=t=>{const{data:e,width:l,height:a}=t,n=(i,h)=>e[(h*l+i)*4+3]===0,o=i=>{for(let h=0;h<l;h++)if(!n(h,i))return!1;return!0},s=()=>{for(let i=0;i<a;i++)if(!o(i))return i;return a},c=()=>{for(let i=a-1;i>=0;i--)if(!o(i))return i;return-1},w=(i,h,m)=>{for(let j=h;j<=m;j++)if(!n(i,j))return!1;return!0},C=(i,h)=>{for(let m=0;m<l;m++)if(!w(m,i,h))return m;return l},I=(i,h)=>{for(let m=l-1;m>=0;m--)if(!w(m,i,h))return m;return-1},v=s();if(v===a)return;const x=c(),b=C(v,x),S=I(v,x);return new DOMRect(b,v,S-b+1,x-v+1)},Eo=async t=>{const e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;const l=e.getContext("2d");if(!l)return;l.drawImage(t,0,0);const a=l.getImageData(0,0,e.width,e.height),n=Po(a);if(!n)return;const o=l.getImageData(n.x,n.y,n.width,n.height);return e.width=n.width,e.height=n.height,l.putImageData(o,0,0),new Promise(s=>{e.toBlob(c=>{!c||s(be(c))})})},Do=async t=>{const l={files:[new File([t],"image.png",{type:t.type,lastModified:Date.now()})],title:"miracle-pencil",text:"Made with https://yuneco.github.io/miracle-pencil/  #\u30DF\u30E9\u30AF\u30EB\u30DA\u30F3\u30B7\u30EB"};return navigator.share(l)};const Ho={class:"PureButton"},Bo=y({setup(t){return M(e=>({f5ba771c:r(D).themeDark})),(e,l)=>(d(),_("button",Ho,[H(e.$slots,"default",{},void 0,!0)]))}});var ce=V(Bo,[["__scopeId","data-v-4d090f58"]]);const Ro=t=>(ee("data-v-4e175a51"),t=t(),te(),t),Zo={class:"ExportDialog"},Ko={class:"close"},zo=Ro(()=>u("div",{class:"title"}," Export Image ",-1)),Oo={class:"images"},Uo={class:"image"},Wo=["src"],No={class:"image"},Fo=["src"],Xo={class:"buttons"},qo=oe("Copy"),Go=oe("Share"),jo=y({emits:["close"],setup(t,{emit:e}){M(i=>({"23e397d4":r(D).themeColor}));const l=240,a=O(),{toImgBlob:n}=q(),o=W({imgSrc:"",imgSize:{w:0,h:0},croppedImgSrc:"",croppedImgSize:{w:0,h:0},selected:void 0}),s=P(),c=P(),w=!!navigator.share,C=g(()=>{const i=l/Math.max(o.imgSize.w,o.imgSize.h,l);return{width:`${o.imgSize.w*i}px`,height:`${o.imgSize.h*i}px`}}),I=g(()=>{const i=l/Math.max(o.croppedImgSize.w,o.croppedImgSize.h,l);return{width:`${o.croppedImgSize.w*i}px`,height:`${o.croppedImgSize.h*i}px`}}),v=g(()=>{if(!!o.selected)return o.selected==="img"?s.value:c.value}),x=async()=>{if(!v.value)return;const i=await To(v.value);a.$state.toast=i?"copied!":"failed to copy img"},b=async()=>{if(!v.value)return;const i=await ye(v.value);!i||await Do(i)};return(async()=>{const i=await n();if(!i)return;const h=await be(i);o.imgSize.w=h.naturalWidth,o.imgSize.h=h.naturalHeight,o.imgSrc=h.src,o.selected="img";const m=await Eo(h);!m||(o.croppedImgSize.w=m.naturalWidth,o.croppedImgSize.h=m.naturalHeight,o.croppedImgSrc=m.src)})(),(i,h)=>(d(),_("div",Zo,[p(ge,null,{default:k(()=>[u("div",Ko,[p(fe,{onClick:h[0]||(h[0]=m=>e("close"))})]),zo,u("div",Oo,[u("div",Uo,[r(o).imgSrc?(d(),_("img",{key:0,src:r(o).imgSrc,style:R(r(C)),class:U({selected:r(o).selected==="img"}),ref_key:"imgRef",ref:s,onClick:h[1]||(h[1]=m=>r(o).selected="img")},null,14,Wo)):f("",!0)]),u("div",No,[r(o).croppedImgSrc?(d(),_("img",{key:0,src:r(o).croppedImgSrc,style:R(r(I)),class:U({selected:r(o).selected==="croppedImg"}),ref_key:"croppedImgRef",ref:c,onClick:h[2]||(h[2]=m=>r(o).selected="croppedImg")},null,14,Fo)):f("",!0)])]),u("div",Xo,[p(ce,{onClick:x,disabled:!r(o).selected},{default:k(()=>[qo]),_:1},8,["disabled"]),w?(d(),E(ce,{key:0,onClick:b},{default:k(()=>[Go]),_:1})):f("",!0)])]),_:1})]))}});var Jo=V(jo,[["__scopeId","data-v-4e175a51"]]);const we=t=>(ee("data-v-7ce7b704"),t=t(),te(),t),Qo={class:"StartDialog"},Yo={class:"close"},el={class:"content"},tl=we(()=>u("div",{class:"title"},"Miracle Pencil",-1)),ol=we(()=>u("div",{class:"body"}," \u7C21\u5358\u306A\u4F7F\u3044\u65B9\u306E\u8AAC\u660E\u306A\u3069 ",-1)),ll={class:"buttons"},al=oe("START"),nl=y({emits:["close"],setup(t,{emit:e}){return O(),(l,a)=>(d(),_("div",Qo,[p(ge,{backgroundColor:r(D).themeDark},{default:k(()=>[u("div",Yo,[p(fe,{onClick:a[0]||(a[0]=n=>e("close")),bgColor:r(D).themeDark,foreColor:"#fff"},null,8,["bgColor"])]),u("div",el,[tl,ol,u("div",ll,[p(ce,{onClick:a[1]||(a[1]=n=>e("close"))},{default:k(()=>[al]),_:1})])])]),_:1},8,["backgroundColor"])]))}});var sl=V(nl,[["__scopeId","data-v-7ce7b704"]]);const cl=t=>(ee("data-v-8ec31332"),t=t(),te(),t),il={key:0,class:"Modal"},rl=cl(()=>u("div",{class:"bg"},null,-1)),dl={class:"content"},ul=y({setup(t){const e=Le(),l=g(()=>{var n,o;return((o=(n=e.default)==null?void 0:n.call(e))!=null?o:[]).some(s=>s.el||typeof s.type=="object")});return(a,n)=>(d(),E(he,{to:"body"},[p(Q,{name:"fade",appear:""},{default:k(()=>[r(l)?(d(),_("div",il,[rl,u("div",dl,[H(a.$slots,"default",{},void 0,!0)])])):f("",!0)]),_:3})]))}});var hl=V(ul,[["__scopeId","data-v-8ec31332"]]);const _l=y({setup(t){const e=O(),l=g(()=>e.$state.modal),a=()=>{e.modal=void 0};return(n,o)=>(d(),E(hl,null,{default:k(()=>[r(l)==="start"?(d(),E(sl,{key:0,onClose:a})):f("",!0),r(l)==="export"?(d(),E(Jo,{key:1,onClose:a})):f("",!0)]),_:1}))}}),ml=(t,e)=>{const l=Me(t.value);let a=[];return $(t,()=>{const n=t.value,o=setTimeout(()=>{l.value=n,a=a.filter(s=>s!==o)},e);a.push(o)}),Te(()=>{a.forEach(n=>clearTimeout(n))}),l};const pl={key:0,class:"Toast"},vl={class:"content"},fl=y({setup(t){const e=1500,l=1e3,a=O(),n=g(()=>a.$state.toast),o=ml(n,l),s=g(()=>n.value||o.value);let c=0;return $(n,()=>{window.clearTimeout(c),!!n.value&&(c=window.setTimeout(()=>{a.$state.toast=""},e))}),(w,C)=>(d(),E(he,{to:"body"},[p(Q,{name:"fade",appear:""},{default:k(()=>[r(n)?(d(),_("div",pl,[u("div",vl,B(r(s)),1)])):f("",!0)]),_:1})]))}});var gl=V(fl,[["__scopeId","data-v-207abe4c"]]);const yl={class:"toolbar"},bl={class:"sidetoolbar"},wl={class:"canvas"},xl={class:"moldals"},Cl={class:"toast"},$l=y({setup(t){return(e,l)=>(d(),_(Y,null,[u("div",yl,[p(xo)]),u("div",bl,[p(Io)]),u("div",wl,[p(et)]),u("div",xl,[p(_l)]),u("div",Cl,[p(gl)])],64))}});Pe($l).use(Ee()).mount("#app");
