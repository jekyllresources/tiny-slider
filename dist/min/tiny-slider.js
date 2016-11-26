!function(){"use strict";var n,t,e,i,a=window,r=document,o=Object,l=null,s=!0,c=!1,u=" ",d="Element",f="create"+d,h="DOMTokenList",v="__defineGetter__",m="defineProperty",p="class",g="List",y=p+g,b="rel",w=b+g,x="div",C="length",E="contains",A="apply",T="HTML",M=("item "+E+" add remove toggle toString toLocaleString").split(u),D=M[2],L=M[3],N=M[4],k="prototype",P=m in o||v in o[k]||l,S=function(n,t,e,i){o[m]?o[m](n,t,{configurable:c===P?s:!!i,get:e}):n[v](t,e)},I=function(t,e){var i=this,a=[],r={},l=0,d=0,f=function(){if(l>=d)for(;d<l;++d)(function(n){S(i,n,function(){return h(),a[n]},c)})(d)},h=function(){var n,i,o=arguments,c=/\s+/;if(o[C])for(i=0;i<o[C];++i)if(c.test(o[i]))throw n=new SyntaxError('String "'+o[i]+'" '+E+" an invalid character"),n.code=5,n.name="InvalidCharacterError",n;for(a=(""+t[e]).replace(/^\s+|\s+$/g,"").split(c),""===a[0]&&(a=[]),r={},i=0;i<a[C];++i)r[a[i]]=s;l=a[C],f()};return h(),S(i,C,function(){return h(),l}),i[M[6]]=i[M[5]]=function(){return h(),a.join(u)},i.item=function(n){return h(),a[n]},i[E]=function(n){return h(),!!r[n]},i[D]=function(){h[A](i,n=arguments);for(var n,o,c=0,d=n[C];c<d;++c)o=n[c],r[o]||(a.push(o),r[o]=s);l!==a[C]&&(l=a[C]>>>0,t[e]=a.join(u),f())},i[L]=function(){h[A](i,n=arguments);for(var n,o={},c=0,d=[];c<n[C];++c)o[n[c]]=s,delete r[n[c]];for(c=0;c<a[C];++c)o[a[c]]||d.push(a[c]);a=d,l=d[C]>>>0,t[e]=a.join(u),f()},i[N]=function(t,e){return h[A](i,[t]),n!==e?e?(i[D](t),s):(i[L](t),c):r[t]?(i[L](t),c):(i[D](t),s)},function(n,t){if(t)for(var e=0;e<7;++e)t(n,M[e],{enumerable:c})}(i,o[m]),i},O=function(n,t,e){S(n[k],t,function(){var n,i=this,a=v+m+t;if(i[a])return n;if(i[a]=s,c===P){for(var o,l=O.mirror=O.mirror||r[f](x),u=l.childNodes,d=u[C],h=0;h<d;++h)if(u[h]._R===i){o=u[h];break}o||(o=l.appendChild(r[f](x))),n=I.call(o,i,e)}else n=new I(i,e);return S(i,t,function(){return n}),delete i[a],n},s)};if(a[h])t=r[f](x)[y],k=a[h][k],t[D][A](t,M),2>t[C]&&(e=k[D],i=k[L],k[D]=function(){for(var n=0,t=arguments;n<t[C];++n)e.call(this,t[n])},k[L]=function(){for(var n=0,t=arguments;n<t[C];++n)i.call(this,t[n])}),t[N](g,c)&&(k[N]=function(t,e){var i=this;return i[(e=n===e?!i[E](t):e)?D:L](t),!!e});else{if(P)try{S({},"support")}catch(n){P=c}I.polyfill=s,a[h]=I,O(a[d],y,p+"Name"),O(a[T+"Link"+d],w,b),O(a[T+"Anchor"+d],w,b),O(a[T+"Area"+d],w,b)}}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var n=["webkit","moz"],t=0;t<n.length&&!window.requestAnimationFrame;++t){var e=n[t];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(n){var t=Date.now(),e=Math.max(i+16,t);return setTimeout(function(){n(i=e)},e-t)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var gn=function(n){return n}(window.gn||{});gn.extend=function(){for(var n,t,e,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(n=arguments[a]))for(t in n)e=n[t],i!==e&&void 0!==e&&(i[t]=e);return i},gn.isInViewport=function(n){var t=n.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.top<document.documentElement.clientHeight&&t.left<document.documentElement.clientWidth},gn.indexOf=function(n,t){for(var e=0;e<n.length;e++)if(n[e]===t)return e;return-1},gn.getSupportedProp=function(n){for(var t=document.documentElement,e=0;e<n.length;e++)if(n[e]in t.style)return n[e]},gn.ready=function(n){if("function"==typeof n)return"complete"===document.readyState?n():void document.addEventListener("DOMContentLoaded",n,!1)},gn.isNodeList=function(n){return"undefined"!=typeof n.item},gn.append=function(n,t){var e,i=gn.isNodeList(n)?n:[n];if("undefined"!=typeof t.nodeType&&1===t.nodeType)for(e=i.length;e--;)i[e].appendChild(t);else if("string"==typeof t)for(e=i.length;e--;)i[e].insertAdjacentHTML("beforeend",t);else if(gn.isNodeList(t)){var a=document.createDocumentFragment();for(e=t.length;e--;)a.insertBefore(t[e],a.firstChild);for(var r=i.length;r--;)i[r].appendChild(a)}},gn.wrap=function(n,t){for(var e=gn.isNodeList(n)?n:[n],i=e.length;i--;){var a=i>0?t.cloneNode(!0):t,r=e[i],o=r.parentNode,l=r.nextSibling;a.appendChild(r),l?o.insertBefore(a,l):o.appendChild(a)}},gn.unwrap=function(n){for(var t=gn.isNodeList(n)?n:[n],e=t.length;e--;){for(var i=t[e],a=i.parentNode;i.firstChild;)a.insertBefore(i.firstChild,i);a.removeChild(i)}};var tns=function(){"use strict";function n(n){function a(){return"gallery"===Fn||"page"===n.slideBy?Gn:n.slideBy}function f(){if(qn<=Gn){Vn=!1;var t;yt="gallery"===Fn?0:rt,yt!==t&&T.emit("indexChanged",bn()),ht&&c(ht),dt&&c(dt),Dt&&c(Dt)}else Vn=n.arrowKeys,ft&&u(ht),ct&&u(dt),Ct&&u(Dt)}function p(){if(o(Hn,{"data-tns-role":"wrapper"}),o(Bn,{"data-tns-role":"content-wrapper"}),"vertical"===Wn?o(Bn,{"data-tns-hidden":"y"}):o(Hn,{"data-tns-hidden":"x"}),"carousel"===Fn){var n=Kn&&_n?H():_n?_n+Yn:0;Bn.style.cssText="horizontal"===Wn?"margin: 0 "+n+"px;":"padding: "+n+"px 0 "+_n+"px; height: "+j()+"px;"}}function g(){Nn=qt(),Gn=Bt(),Ln=ot-Gn-wt,"horizontal"!==Wn||Kn||(it=Rt()),Dn=jt(),Xn=a()}function M(){if(""===Rn.id&&(Rn.id=et),o(Rn,{"data-tns-role":"content","data-tns-mode":Fn,"data-tns-axis":Wn}),"carousel"===Fn){Zn&&o(Rn,{"data-tns-hidden":"y"});var n,t=m,e="left",i="translate",a="",r="",l="X";if("horizontal"===Wn){var s=(it+1)*ot+"px";Rn.style.width=s,n=-yt*it}else n=-En[yt],l="Y",e="top";m?(a=i+l+"(",r=")"):t=e,Rn.style[t]=a+n+"px"+r}}function D(){navigator.msMaxTouchPoints&&(Hn.classList.add("ms-touch"),h(Hn,["scroll",cn]))}function L(){for(var n=0;n<qn;n++){var t=jn[n];t.id=et+"-item"+n,"gallery"===Fn&&Ft&&t.classList.add(Ft),o(t,{"aria-hidden":"true"});var e="horizontal"===Wn?"right":"bottom",i="";"carousel"===Fn&&(i="margin-"+e+": "+Yn+"px;"),"horizontal"===Wn&&(i="width: "+(it-Yn)+"px; "+i),t.style.cssText+=i}if(Qn||_n){for(var a=document.createDocumentFragment(),r=document.createDocumentFragment(),s=rt;s--;){var c=s%qn,u=jn[c].cloneNode(!0);if(l(u,"id"),r.insertBefore(u,r.firstChild),"carousel"===Fn){var d=jn[qn-1-c].cloneNode(!0);l(d,"id"),a.appendChild(d)}}Rn.insertBefore(a,Rn.firstChild),Rn.appendChild(r),jn=Rn.children}}function N(){ct&&(n.controlsContainer?(An=dt.children[0],Tn=dt.children[1],o(dt,{"aria-label":"Carousel Navigation"}),o(An,{"data-controls":"prev"}),o(Tn,{"data-controls":"next"}),o(dt.children,{"aria-controls":et,tabindex:"-1"})):(gn.append(Hn,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+et+'" type="button">'+ut[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+et+'" type="button">'+ut[1]+"</button></div>"),dt=Bn.nextElementSibling,An=dt.children[0],Tn=dt.children[1]))}function k(){if(ft)if(n.navContainer){o(ht,{"aria-label":"Carousel Pagination"}),Mn=ht.children;for(var t=Mn.length;t--;)o(Mn[t],{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":et+"-item"+t})}else{for(var e="",i=0;i<qn;i++)e+='<button data-nav="'+i+'" tabindex="-1" aria-selected="false" aria-controls="'+et+"-item"+i+'" type="button"></button>';e='<div data-tns-role="nav" aria-label="Carousel Pagination">'+e+"</div>",gn.append(Hn,e),ht=dt.nextElementSibling,Mn=ht.children;for(var a=Dn;a<qn;a++)o(Mn[a],{hidden:""});vt=Dn}}function P(){Ct&&(Dt?o(Dt,{"data-action":"stop"}):(ht||(gn.append(Hn,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),ht=Hn.querySelector('[data-tns-role="nav"]')),gn.append(ht,'<button data-action="stop" type="button">'+kt+Tt[0]+"</button>"),Dt=ht.querySelector("[data-action]")),tn())}function S(){for(var n=yt;n<yt+Gn;n++){var t=jn[n];o(t,{"aria-hidden":"false"}),"gallery"===Fn&&(t.style.left=it*(n-yt)+"px",t.classList.remove(Ft),t.classList.add(Ot))}ct&&(o(Tn,{tabindex:"0"}),(yt===xt&&!Qn||Jn)&&(An.disabled=!0)),ft&&o(Mn[0],{tabindex:"0","aria-selected":"true"})}function I(){if("carousel"===Fn&&(w&&h(Rn,[w,V]),Pt&&h(Rn,[["touchstart",un],["touchmove",dn],["touchend",fn],["touchcancel",fn]])),ft)for(var n=0;n<qn;n++)h(Mn[n],[["click",nn],["keydown",sn]]);ct&&(h(An,[["click",Q],["keydown",ln]]),h(Tn,[["click",Z],["keydown",ln]])),Ct&&(h(Dt,["click",an]),Mt&&(h(Rn,["mouseover",function(){Lt&&(en(),Nt=!0)}]),h(Rn,["mouseout",function(){!Lt&&Nt&&(tn(),Nt=!1)}]))),Vn&&h(document,["keydown",rn]),"inner"===Un?T.on("outerResized",function(){wn(),T.emit("innerLoaded",bn())}):(h(window,["resize",xn]),"outer"===Un&&T.on("innerLoaded",z)),h(window,["scroll",Cn])}function O(){if(tt&&gn.isInViewport(Rn)){for(var n=[],t=yt-1;t<yt+Gn+1;t++){for(var e=jn[t].querySelectorAll('[data-tns-role="lazy-img"]'),i=e.length;i--;n.unshift(e[i]));n.unshift()}for(var a=n.length;a--;){var o=n[a];o.classList.contains("loaded")||(o.src=r(o,"data-src"),o.classList.add("loaded"))}}}function z(){for(var n=[],t=yt;t<yt+Gn;t++)for(var e=jn[t].querySelectorAll("img"),i=e.length;i--;)n.push(e[i]);0===n.length?B():F(n)}function F(n){for(var t=n.length;t--;)d(n[t])&&n.splice(t,1);0===n.length?B():setTimeout(function(){F(n)},16)}function W(){gn.wrap(Rn,Bn),gn.wrap(Bn,Hn),g(),L(),"vertical"===Wn&&R(),p(),M(),D(),N(),k(),P(),S(),I(),f(),O(),Zn&&!Un&&z(),T.emit("initialized",bn()),"inner"===Un&&T.emit("innerLoaded",bn())}function H(){return(Nn%it+Yn)/2}function B(){for(var n,t=[],e=yt;e<yt+Gn;e++)t.push(jn[e].offsetHeight);n=Math.max.apply(null,t),Rn.style.height!==n&&(y&&Y(1),Rn.style.height=n+"px")}function R(){En=[0];for(var n,t=jn[0].getBoundingClientRect().top,e=1;e<ot;e++)n=jn[e].getBoundingClientRect().top,En.push(n-t)}function j(){return En[yt+Gn]-En[yt]}function q(){Hn.style.msScrollSnapPointsX="snapInterval(0%, "+it+")"}function G(){var n,t,e,i;yt!==bt&&(yt>bt?(n=bt,t=Math.min(bt+Gn,yt),e=Math.max(bt+Gn,yt),i=yt+Gn):(n=Math.max(yt+Gn,bt),t=bt+Gn,e=yt,i=Math.min(yt+Gn,bt))),Xn%1!==0&&(n=Math.round(n),t=Math.round(t),e=Math.round(e),i=Math.round(i));for(var a=n;a<t;a++)o(jn[a],{"aria-hidden":"true"});for(var r=e;r<i;r++)o(jn[r],{"aria-hidden":"false"})}function X(){ft&&(mt===-1?n.navContainer?pt=yt%qn:(pt=Math.floor(yt%qn/Gn),Qn||qn%Gn===0||yt!==Ln||(pt+=1)):(pt=mt,mt=-1),pt!==gt&&(o(Mn[gt],{tabindex:"-1","aria-selected":"false"}),o(Mn[pt],{tabindex:"0","aria-selected":"true"}),gt=pt))}function U(){if(ct&&!Qn){var n=[],t=[];if(yt===xt?(n.push(An),t.push(Tn),on(An,Tn)):Jn||yt!==Ln?t.push(An,Tn):(n.push(Tn),t.push(An),on(Tn,An)),n.length>0)for(var e=n.length;e--;){var i=n[e];i.disabled||(i.disabled=!0,o(i,{tabindex:"-1"}))}if(t.length>0)for(var a=t.length;a--;){var r=t[a];r.disabled&&(r.disabled=!1,o(r,{tabindex:"0"}))}}}function Y(n,t){n=0===n?"":$n/1e3+"s",t=t||Rn,t.style[y]=n,"gallery"===Fn&&(t.style[x]=n),"vertical"===Wn&&(Bn.style[y]=n)}function _(n,t){y&&Y(n),Gt(t)}function K(){w&&o(Rn,{"aria-busy":"true"}),st&&Xt(),yt!==bt&&T.emit("indexChanged",bn()),m&&T.emit("transitionStart",bn()),_(),w||V()}function V(n){if(w&&T.emit("transitionEnd",bn(n)),"gallery"===Fn&&at.length>0)for(var t=0;t<Gn;t++){var e=at[t];y&&Y(0,e),Wt&&b&&(e.style[b]=e.style[C]=""),e.classList.remove(zt),e.classList.add(Ft),e.style.left=""}if(!w||n&&"height"!==n.propertyName){if(!st){var i=yt;Xt(),yt!==i&&(_(0),T.emit("indexChanged",bn()))}G(),X(),U(),O(),Zn&&z(),"inner"===Un&&T.emit("innerLoaded",bn()),w&&l(Rn,"aria-busy"),$()}}function $(){bt=yt}function J(n){"true"!==r(Rn,"aria-busy")&&(yt+=n*Xn,K())}function Q(){J(-1)}function Z(){J(Jn&&yt===Ln?-(Ln-xt)/Xn:1)}function nn(t){if("true"!==r(Rn,"aria-busy")){for(var e,i=t.target||t.srcElement;gn.indexOf(Mn,i)===-1;)i=i.parentNode;e=mt=Number(r(i,"data-nav"));var a="gallery"===Fn?0:rt;yt=n.navContainer?e+a:e*Gn+a,yt!==bt&&K()}}function tn(){kn=setInterval(function(){J(At)},Et),o(Dt,{"data-action":"stop"}),Dt.innerHTML=kt+Tt[1],Lt=!0}function en(){clearInterval(kn),o(Dt,{"data-action":"start"}),Dt.innerHTML=kt.replace("Stop","Start")+Tt[0],Lt=!1}function an(){Lt?en():tn()}function rn(n){switch(n=n||window.event,n.keyCode){case A.LEFT:Q();break;case A.RIGHT:Z()}}function on(n,t){"object"==typeof n&&"object"==typeof t&&n===document.activeElement&&(n.blur(),t.focus())}function ln(n){n=n||window.event;var t=n.keyCode,e=document.activeElement;switch(t){case A.LEFT:case A.UP:case A.HOME:case A.PAGEUP:e!==An&&An.disabled!==!0&&on(e,An);break;case A.RIGHT:case A.DOWN:case A.END:case A.PAGEDOWN:e!==Tn&&Tn.disabled!==!0&&on(e,Tn);break;case A.ENTER:case A.SPACE:e===Tn?Z():Q()}}function sn(n){n=n||window.event;var t=n.keyCode,e=document.activeElement,i=r(e,"data-nav");switch(t){case A.LEFT:case A.PAGEUP:i>0&&on(e,e.previousElementSibling);break;case A.UP:case A.HOME:0!==i&&on(e,Mn[0]);break;case A.RIGHT:case A.PAGEDOWN:i<Dn-1&&on(e,e.nextElementSibling);break;case A.DOWN:case A.END:i<Dn-1&&on(e,Mn[Dn-1]);break;case A.ENTER:case A.SPACE:nn(n)}}function cn(){_(0,Rn.scrollLeft()),$()}function un(n){n.stopPropagation();var t=n.changedTouches[0];St=parseInt(t.clientX),It=parseInt(t.clientY),Pn=Number(Rn.style[m].slice(11,-3)),T.emit("touchStart",bn(n))}function dn(n){n.stopPropagation();var t=n.changedTouches[0];if(Sn=parseInt(t.clientX)-St,In=parseInt(t.clientY)-It,i(e(In,Sn),15)===Wn){On=!0,n.preventDefault(),T.emit("touchMove",bn(n));var a="horizontal"===Wn?"X("+(Pn+Sn):"Y("+(Pn+In);Y(0),Rn.style[m]="translate"+a+"px)"}}function fn(n){n.stopPropagation();var t=n.changedTouches[0];if(Sn=parseInt(t.clientX)-St,In=parseInt(t.clientY)-It,T.emit("touchEnd",bn(n)),On){if(On=!1,n.preventDefault(),"horizontal"===Wn)yt=-(Pn+Sn)/it,yt=Sn>0?Math.floor(yt):Math.ceil(yt);else{var e=-(Pn+In);if(e<=0)yt=xt;else if(e>=En[En.length-1])yt=Ln;else{var i=0;do i++,yt=In<0?i+1:i;while(i<ot&&e>=Math.round(En[i+1]))}}K()}}function hn(){Rn.style.width=(it+1)*ot+"px";for(var n=ot;n--;)jn[n].style.width=it-Yn+"px"}function vn(){for(var n=yt+1,t=yt+Gn;n<t;n++)jn[n].style.left=it*(n-yt)+"px"}function mn(){Bn.style.cssText="margin: 0px "+H()+"px"}function pn(){Bn.style.height=j()+"px"}function yn(){if(Dn!==vt)if(Dn>vt)for(var n=vt;n<Dn;n++)l(Mn[n],"hidden");else for(var t=Dn;t<vt;t++)o(Mn[t],{hidden:""});vt=Dn}function bn(n){return{container:Rn,slideItems:jn,navItems:Mn,prevButton:An,nextButton:Tn,items:Gn,index:yt,indexCached:bt,navCurrent:pt,navCurrentCached:gt,slideCount:qn,cloneCount:rt,slideCountNew:ot,event:n||{}}}function wn(){var t=yt,e=Gn;g(),f(),Xt(),"horizontal"===Wn?Kn&&_n?mn():(hn(),"gallery"===Fn&&vn()):(R(),pn()),yt!==t&&(T.emit("indexChanged",bn()),G(),Qn||U()),Gn===e||n.navContainer||(yn(),X()),(yt!==t||"carousel"===Fn&&!Kn)&&_(0),Zn&&!Un&&z(),(tt&&yt!==t||Gn!==e)&&O(),navigator.msMaxTouchPoints&&q()}function xn(n){clearTimeout(zn),zn=setTimeout(function(){Nn!==qt()&&(wn(),"outer"===Un&&T.emit("outerResized",bn(n)))},100)}function Cn(){Ht||window.requestAnimationFrame(function(){O(),Ht=!1}),Ht=!0}if(n=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1,nested:!1},n||{}),"object"!=typeof n.container||null===n.container)return{destory:function(){},events:T};var En,An,Tn,Mn,Dn,Ln,Nn,kn,Pn,Sn,In,On,zn,Fn=n.mode,Wn=n.axis,Hn=document.createElement("div"),Bn=document.createElement("div"),Rn=n.container,jn=Rn.children,qn=jn.length,Gn=n.items,Xn=a(),Un=n.nested,Yn=n.gutter,_n="gallery"!==Fn&&n.edgePadding,Kn=n.fixedWidth,Vn=n.arrowKeys,$n=n.speed,Jn=n.rewind,Qn="gallery"===Fn||!n.rewind&&n.loop,Zn="gallery"===Fn||n.autoHeight,nt=!Kn&&n.responsive,tt=n.lazyload,et=Rn.id||t(),it=Kn?Kn+Yn:0,at=[],rt=Qn?2*qn:_n?1:0,ot="gallery"===Fn?qn+rt:qn+2*rt,lt=!(!Kn||Qn||_n),st="gallery"===Fn||!Qn,ct=n.controls,ut=n.controlsText,dt=!!n.controlsContainer&&n.controlsContainer,ft=n.nav,ht=n.navContainer||!1,vt=qn,mt=-1,pt=0,gt=0,yt="gallery"===Fn?0:rt,bt=yt,wt=_n?1:0,xt=wt,Ct=n.autoplay,Et=n.autoplayTimeout,At="forward"===n.autoplayDirection?1:-1,Tt=n.autoplayText,Mt=n.autoplayHoverPause,Dt=n.autoplayButton,Lt=!1,Nt=!1,kt="<span hidden>Stop Animation</span>",Pt=n.touch,St=0,It=0,Ot=x?n.animateIn:"tns-fadeIn",zt=x?n.animateOut:"tns-fadeOut",Ft=x?n.animateNormal:"tns-normal",Wt=!!x&&n.animateDelay,Ht=!1,Bt=function(){return Kn?function(){return Math.max(1,Math.min(qn,Math.floor(Nn/Kn)))}:function(){var t=n.items,e="object"==typeof nt&&Object.keys(nt);if(e)for(var i=0;i<e.length;i++)Nn>=e[i]&&(t=nt[e[i]]);return Math.max(1,Math.min(qn,t))}}(),Rt=function(){return Math.round((Nn+Yn)/Gn)},jt=function(){return n.navContainer?function(){return qn}:function(){return Math.ceil(qn/Gn)}}(),qt=function(){return"horizontal"===Wn&&!Kn&&_n?function(){return Hn.clientWidth-2*(_n+Yn)}:function(){return Hn.clientWidth}}();W();var Gt=function(){return"carousel"===Fn?function(n){n||(n="horizontal"===Wn?-it*yt:-En[yt]),lt&&yt===Ln&&(n=Math.max(n,-ot*it+Nn+Yn));var t=m,e="left",i="translate",a="",r="",o="X";"vertical"===Wn&&(o="Y",e="top"),m?(a=i+o+"(",r=")"):t=e,Rn.style[t]=a+n+"px"+r,"vertical"===Wn&&(Bn.style.height=j()+"px")}:function(){at=[],v(jn[bt],[[w,V],[E,V]]),h(jn[yt],[[w,V],[E,V]]),function(){for(var n=bt,t=bt+Gn;n<t;n++){var e=jn[n];if(y&&Y(1,e),Wt&&b){var i=Wt*(n-bt)/1e3;e.style[b]=i+"s",e.style[C]=i+"s"}e.classList.remove(Ot),e.classList.add(zt),at.push(e)}}(),function(){for(var n=yt,t=yt+Gn;n<t;n++){var e=jn[n];if(y&&Y(1,e),Wt&&b){var i=Wt*(n-yt)/1e3;e.style[b]=i+"s",e.style[C]=i+"s"}e.classList.remove(Ft),e.classList.add(Ot),n>yt&&(e.style.left=(n-yt)*it+"px")}}()}}(),Xt=function(){return Qn?function(){var n="carousel"===Fn?Xn+xt:xt,t="carousel"===Fn?Ln-Xn:Ln;if(Kn&&Nn%it!==0&&(t-=1),yt>t)for(;yt>=n+qn;)yt-=qn;else if(yt<n)for(;yt<=t-qn;)yt+=qn}:function(){yt=Math.max(xt,Math.min(Ln,yt))}}();return{getInfo:bn,events:T,destory:function(){if(gn.unwrap(Hn),gn.unwrap(Bn),Hn=Bn=null,l(Rn,["id","style","data-tns-role","data-tns-features"]),Qn)for(var t=rt;t--;)jn[0].remove(),jn[jn.length-1].remove();l(jn,["id","style","aria-hidden"]),et=qn=null,ct&&(n.controlsContainer?(l(dt,["aria-label"]),l(dt.children,["aria-controls","tabindex"]),s(dt)):(dt.remove(),dt=An=Tn=null)),ft&&(n.navContainer?(l(ht,["aria-label"]),l(Mn,["aria-selected","aria-controls","tabindex"]),s(ht)):(ht.remove(),ht=null),Mn=null),Ct&&(n.navContainer||null===ht?s(Dt):(ht.remove(),ht=null)),s(Rn),Vn&&v(document,["keydown",rn]),v(window,[["resize",xn],["scroll",Cn]])}}}function t(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function e(n,t){return Math.atan2(n,t)*(180/Math.PI)}function i(n,t){return Math.abs(90-Math.abs(n))>=90-t?"horizontal":Math.abs(90-Math.abs(n))<=t&&"vertical"}function a(n,t){return n.hasAttribute(t)}function r(n,t){return n.getAttribute(t)}function o(n,t){if(n=gn.isNodeList(n)||n instanceof Array?n:[n],"[object Object]"===Object.prototype.toString.call(t))for(var e=n.length;e--;)for(var i in t)n[e].setAttribute(i,t[i])}function l(n,t){n=gn.isNodeList(n)||n instanceof Array?n:[n],t=t instanceof Array?t:[t];for(var e=t.length,i=n.length;i--;)for(var a=e;a--;)n[i].removeAttribute(t[a])}function s(n){var t=n.cloneNode(!0),e=n.parentNode;e.insertBefore(t,n),n.remove(),n=null}function c(n){a(n,"hidden")||o(n,{hidden:""})}function u(n){a(n,"hidden")&&l(n,"hidden")}function d(n){return"boolean"==typeof n.complete?n.complete:"number"==typeof n.naturalWidth?0!==n.naturalWidth:void 0}function f(n){var t,e=document.createElement("fakeelement");for(t in n)if(void 0!==e.style[t])return[t,n[t][0],n[t][1]];return!1}function h(n,t){function e(t){n.addEventListener(t[0],t[1],!1)}if(Array.isArray(t))if(Array.isArray(t[0]))for(var i=t.length;i--;)e(t[i]);else e(t)}function v(n,t){function e(t){n.removeEventListener(t[0],t[1],!1)}if(Array.isArray(t))if(Array.isArray(t[0]))for(var i=t.length;i--;)e(t[i]);else e(t)}var m=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),p={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},g={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},y=f(p)[0],b=f(p)[1],w=f(p)[2],x=f(g)[0],C=f(g)[1],E=f(g)[2],A={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},T={events:{},on:function(n,t){this.events[n]=this.events[n]||[],this.events[n].push(t)},off:function(n,t){if(this.events[n])for(var e=0;e<this.events[n].length;e++)if(this.events[n][e]===t){this.events[n].splice(e,1);break}},emit:function(n,t){this.events[n]&&this.events[n].forEach(function(n){n(t)})}};return n}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
