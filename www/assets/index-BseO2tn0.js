import{c as g,o as p,b as V,J as u,B as se,L as O,aa as be,aq as ne,ar as q,as as Z,r as x,d as K,F as $,h as ae,a as R,am as Y,at as Ve,au as he,av as Me,a8 as Te,A as E,Y as Pe,C as xe,ad as Be,ae as Ke,D as De,H as oe,S as Ee,aw as Ae,ax as He,ay as Re,az as je,aA as G,I as Ge,e as re,t as A,g as N,Z as pe,n as te,w as U,T as Ne,aB as Ue,a4 as $e,p as We,m as qe}from"./terminal-DsU30wIX.js";import{a as ye,b as Oe}from"./index-CefCB7Tq.js";import{s as Ze}from"./index-DydKBBIL.js";import{s as Ye}from"./index-BoB1eKYn.js";import{s as Je}from"./index-CUvncJZp.js";import{s as ce,R as Qe,f as ie}from"./index-ymEL6Bh8.js";import{s as Xe}from"./index-DSDC9VAv.js";import{O as _e}from"./index-DrWklgxF.js";import{s as et}from"./index-BGK5_WZG.js";import{s as tt}from"./index-DtEX9nI9.js";var Ie={name:"BlankIcon",extends:ye};function it(t,e,i,s,l,n){return p(),g("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[V("rect",{width:"1",height:"1",fill:"currentColor","fill-opacity":"0"},null,-1)]),16)}Ie.render=it;var we={name:"SearchIcon",extends:ye};function nt(t,e,i,s,l,n){return p(),g("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[V("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",fill:"currentColor"},null,-1)]),16)}we.render=nt;var st=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,lt={root:"p-iconfield"},ot=se.extend({name:"iconfield",style:st,classes:lt}),rt={name:"BaseIconField",extends:ce,style:ot,provide:function(){return{$pcIconField:this,$parentInstance:this}}},Se={name:"IconField",extends:rt,inheritAttrs:!1};function at(t,e,i,s,l,n){return p(),g("div",u({class:t.cx("root")},t.ptmi("root")),[O(t.$slots,"default")],16)}Se.render=at;var dt={root:"p-inputicon"},ct=se.extend({name:"inputicon",classes:dt}),ut={name:"BaseInputIcon",extends:ce,style:ct,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},Le={name:"InputIcon",extends:ut,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function ht(t,e,i,s,l,n){return p(),g("span",u({class:n.containerClass},t.ptmi("root"),{"aria-hidden":"true"}),[O(t.$slots,"default")],16)}Le.render=ht;var pt=`
    .p-virtualscroller-loader {
        background: dt('virtualscroller.loader.mask.background');
        color: dt('virtualscroller.loader.mask.color');
    }

    .p-virtualscroller-loading-icon {
        font-size: dt('virtualscroller.loader.icon.size');
        width: dt('virtualscroller.loader.icon.size');
        height: dt('virtualscroller.loader.icon.size');
    }
`,ft=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}

.p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    inset-block-start: 0;
    inset-inline-start: 0;
}
`,fe=se.extend({name:"virtualscroller",css:ft,style:pt}),mt={name:"BaseVirtualScroller",extends:ce,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:fe,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var e;fe.loadCSS({nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})}};function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(t)}function me(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),i.push.apply(i,s)}return i}function J(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?me(Object(i),!0).forEach(function(s){Ce(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):me(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function Ce(t,e,i){return(e=gt(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function gt(t){var e=vt(t,"string");return Q(e)=="symbol"?e:e+""}function vt(t,e){if(Q(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,e);if(Q(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ke={name:"VirtualScroller",extends:mt,inheritAttrs:!1,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){var e=this.isBoth();return{first:e?{rows:0,cols:0}:0,last:e?{rows:0,cols:0}:0,page:e?{rows:0,cols:0}:0,numItemsInViewport:e?{rows:0,cols:0}:0,lastScrollPos:e?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,resizeObserver:null,initialized:!1,watch:{numToleratedItems:function(e){this.d_numToleratedItems=e},loading:function(e,i){this.lazy&&e!==i&&e!==this.d_loading&&(this.d_loading=e)},items:{handler:function(e,i){(!i||i.length!==(e||[]).length)&&(this.init(),this.calculateAutoSize())},deep:!0},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){ne(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.defaultWidth=q(this.element),this.defaultHeight=Z(this.element),this.defaultContentWidth=q(this.content),this.defaultContentHeight=Z(this.content),this.initialized=!0),this.element&&this.bindResizeListener()},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(e){this.element&&this.element.scrollTo(e)},scrollToIndex:function(e){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",l=this.isBoth(),n=this.isHorizontal(),o=l?e.every(function(m){return m>-1}):e>-1;if(o){var a=this.first,d=this.element,c=d.scrollTop,r=c===void 0?0:c,h=d.scrollLeft,y=h===void 0?0:h,L=this.calculateNumItems(),I=L.numToleratedItems,S=this.getContentPosition(),v=this.itemSize,C=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,B=arguments.length>1?arguments[1]:void 0;return b<=B?0:b},k=function(b,B,T){return b*B+T},z=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.scrollTo({left:b,top:B,behavior:s})},f=l?{rows:0,cols:0}:0,D=!1,F=!1;l?(f={rows:C(e[0],I[0]),cols:C(e[1],I[1])},z(k(f.cols,v[1],S.left),k(f.rows,v[0],S.top)),F=this.lastScrollPos.top!==r||this.lastScrollPos.left!==y,D=f.rows!==a.rows||f.cols!==a.cols):(f=C(e,I),n?z(k(f,v,S.left),r):z(y,k(f,v,S.top)),F=this.lastScrollPos!==(n?y:r),D=f!==a),this.isRangeChanged=D,F&&(this.first=f)}},scrollInView:function(e,i){var s=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(i){var n=this.isBoth(),o=this.isHorizontal(),a=n?e.every(function(v){return v>-1}):e>-1;if(a){var d=this.getRenderedRange(),c=d.first,r=d.viewport,h=function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return s.scrollTo({left:C,top:k,behavior:l})},y=i==="to-start",L=i==="to-end";if(y){if(n)r.first.rows-c.rows>e[0]?h(r.first.cols*this.itemSize[1],(r.first.rows-1)*this.itemSize[0]):r.first.cols-c.cols>e[1]&&h((r.first.cols-1)*this.itemSize[1],r.first.rows*this.itemSize[0]);else if(r.first-c>e){var I=(r.first-1)*this.itemSize;o?h(I,0):h(0,I)}}else if(L){if(n)r.last.rows-c.rows<=e[0]+1?h(r.first.cols*this.itemSize[1],(r.first.rows+1)*this.itemSize[0]):r.last.cols-c.cols<=e[1]+1&&h((r.first.cols+1)*this.itemSize[1],r.first.rows*this.itemSize[0]);else if(r.last-c<=e+1){var S=(r.first+1)*this.itemSize;o?h(S,0):h(0,S)}}}}else this.scrollToIndex(e,l)},getRenderedRange:function(){var e=function(h,y){return Math.floor(h/(y||h))},i=this.first,s=0;if(this.element){var l=this.isBoth(),n=this.isHorizontal(),o=this.element,a=o.scrollTop,d=o.scrollLeft;if(l)i={rows:e(a,this.itemSize[0]),cols:e(d,this.itemSize[1])},s={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{var c=n?d:a;i=e(c,this.itemSize),s=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:s}}},calculateNumItems:function(){var e=this.isBoth(),i=this.isHorizontal(),s=this.itemSize,l=this.getContentPosition(),n=this.element?this.element.offsetWidth-l.left:0,o=this.element?this.element.offsetHeight-l.top:0,a=function(y,L){return Math.ceil(y/(L||y))},d=function(y){return Math.ceil(y/2)},c=e?{rows:a(o,s[0]),cols:a(n,s[1])}:a(i?n:o,s),r=this.d_numToleratedItems||(e?[d(c.rows),d(c.cols)]:d(c));return{numItemsInViewport:c,numToleratedItems:r}},calculateOptions:function(){var e=this,i=this.isBoth(),s=this.first,l=this.calculateNumItems(),n=l.numItemsInViewport,o=l.numToleratedItems,a=function(r,h,y){var L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return e.getLast(r+h+(r<y?2:3)*y,L)},d=i?{rows:a(s.rows,n.rows,o[0]),cols:a(s.cols,n.cols,o[1],!0)}:a(s,n,o);this.last=d,this.numItemsInViewport=n,this.d_numToleratedItems=o,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=i?Array.from({length:n.rows}).map(function(){return Array.from({length:n.cols})}):Array.from({length:n})),this.lazy&&Promise.resolve().then(function(){var c;e.lazyLoadState={first:e.step?i?{rows:0,cols:s.cols}:0:s,last:Math.min(e.step?e.step:d,((c=e.items)===null||c===void 0?void 0:c.length)||0)},e.$emit("lazy-load",e.lazyLoadState)})},calculateAutoSize:function(){var e=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(e.content){var i=e.isBoth(),s=e.isHorizontal(),l=e.isVertical();e.content.style.minHeight=e.content.style.minWidth="auto",e.content.style.position="relative",e.element.style.contain="none";var n=[q(e.element),Z(e.element)],o=n[0],a=n[1];(i||s)&&(e.element.style.width=o<e.defaultWidth?o+"px":e.scrollWidth||e.defaultWidth+"px"),(i||l)&&(e.element.style.height=a<e.defaultHeight?a+"px":e.scrollHeight||e.defaultHeight+"px"),e.content.style.minHeight=e.content.style.minWidth="",e.content.style.position="",e.element.style.contain=""}})},getLast:function(){var e,i,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(l?((e=this.columns||this.items[0])===null||e===void 0?void 0:e.length)||0:((i=this.items)===null||i===void 0?void 0:i.length)||0,s):0},getContentPosition:function(){if(this.content){var e=getComputedStyle(this.content),i=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),s=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),l=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),n=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:i,right:s,top:l,bottom:n,x:i+s,y:l+n}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var e=this;if(this.element){var i=this.isBoth(),s=this.isHorizontal(),l=this.element.parentElement,n=this.scrollWidth||"".concat(this.element.offsetWidth||l.offsetWidth,"px"),o=this.scrollHeight||"".concat(this.element.offsetHeight||l.offsetHeight,"px"),a=function(c,r){return e.element.style[c]=r};i||s?(a("height",o),a("width",n)):a("height",o)}},setSpacerSize:function(){var e=this,i=this.items;if(i){var s=this.isBoth(),l=this.isHorizontal(),n=this.getContentPosition(),o=function(d,c,r){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.spacerStyle=J(J({},e.spacerStyle),Ce({},"".concat(d),(c||[]).length*r+h+"px"))};s?(o("height",i,this.itemSize[0],n.y),o("width",this.columns||i[1],this.itemSize[1],n.x)):l?o("width",this.columns||i,this.itemSize,n.x):o("height",i,this.itemSize,n.y)}},setContentPosition:function(e){var i=this;if(this.content&&!this.appendOnly){var s=this.isBoth(),l=this.isHorizontal(),n=e?e.first:this.first,o=function(r,h){return r*h},a=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.contentStyle=J(J({},i.contentStyle),{transform:"translate3d(".concat(r,"px, ").concat(h,"px, 0)")})};if(s)a(o(n.cols,this.itemSize[1]),o(n.rows,this.itemSize[0]));else{var d=o(n,this.itemSize);l?a(d,0):a(0,d)}}},onScrollPositionChange:function(e){var i=this,s=e.target,l=this.isBoth(),n=this.isHorizontal(),o=this.getContentPosition(),a=function(w,M){return w?w>M?w-M:w:0},d=function(w,M){return Math.floor(w/(M||w))},c=function(w,M,W,_,P,H){return w<=P?P:H?W-_-P:M+P-1},r=function(w,M,W,_,P,H,ee,Fe){if(w<=H)return 0;var le=Math.max(0,ee?w<M?W:w-H:w>M?W:w-2*H),ue=i.getLast(le,Fe);return le>ue?ue-P:le},h=function(w,M,W,_,P,H){var ee=M+_+2*P;return w>=P&&(ee+=P+1),i.getLast(ee,H)},y=a(s.scrollTop,o.top),L=a(s.scrollLeft,o.left),I=l?{rows:0,cols:0}:0,S=this.last,v=!1,C=this.lastScrollPos;if(l){var k=this.lastScrollPos.top<=y,z=this.lastScrollPos.left<=L;if(!this.appendOnly||this.appendOnly&&(k||z)){var f={rows:d(y,this.itemSize[0]),cols:d(L,this.itemSize[1])},D={rows:c(f.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],k),cols:c(f.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],z)};I={rows:r(f.rows,D.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],k),cols:r(f.cols,D.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],z,!0)},S={rows:h(f.rows,I.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:h(f.cols,I.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},v=I.rows!==this.first.rows||S.rows!==this.last.rows||I.cols!==this.first.cols||S.cols!==this.last.cols||this.isRangeChanged,C={top:y,left:L}}}else{var F=n?L:y,m=this.lastScrollPos<=F;if(!this.appendOnly||this.appendOnly&&m){var b=d(F,this.itemSize),B=c(b,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m);I=r(b,B,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,m),S=h(b,I,this.last,this.numItemsInViewport,this.d_numToleratedItems),v=I!==this.first||S!==this.last||this.isRangeChanged,C=F}}return{first:I,last:S,isRangeChanged:v,scrollPos:C}},onScrollChange:function(e){var i=this.onScrollPositionChange(e),s=i.first,l=i.last,n=i.isRangeChanged,o=i.scrollPos;if(n){var a={first:s,last:l};if(this.setContentPosition(a),this.first=s,this.last=l,this.lastScrollPos=o,this.$emit("scroll-index-change",a),this.lazy&&this.isPageChanged(s)){var d,c,r={first:this.step?Math.min(this.getPageByFirst(s)*this.step,(((d=this.items)===null||d===void 0?void 0:d.length)||0)-this.step):s,last:Math.min(this.step?(this.getPageByFirst(s)+1)*this.step:l,((c=this.items)===null||c===void 0?void 0:c.length)||0)},h=this.lazyLoadState.first!==r.first||this.lazyLoadState.last!==r.last;h&&this.$emit("lazy-load",r),this.lazyLoadState=r}}},onScroll:function(e){var i=this;if(this.$emit("scroll",e),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var s=this.onScrollPositionChange(e),l=s.isRangeChanged,n=l||(this.step?this.isPageChanged():!1);n&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){i.onScrollChange(e),i.d_loading&&i.showLoader&&(!i.lazy||i.loading===void 0)&&(i.d_loading=!1,i.page=i.getPageByFirst())},this.delay)}}else this.onScrollChange(e)},onResize:function(){var e=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(ne(e.element)){var i=e.isBoth(),s=e.isVertical(),l=e.isHorizontal(),n=[q(e.element),Z(e.element)],o=n[0],a=n[1],d=o!==e.defaultWidth,c=a!==e.defaultHeight,r=i?d||c:l?d:s?c:!1;r&&(e.d_numToleratedItems=e.numToleratedItems,e.defaultWidth=o,e.defaultHeight=a,e.defaultContentWidth=q(e.content),e.defaultContentHeight=Z(e.content),e.init())}},this.resizeDelay)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener),this.resizeObserver=new ResizeObserver(function(){e.onResize()}),this.resizeObserver.observe(this.element))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},getOptions:function(e){var i=(this.items||[]).length,s=this.isBoth()?this.first.rows+e:this.first+e;return{index:s,count:i,first:s===0,last:s===i-1,even:s%2===0,odd:s%2!==0}},getLoaderOptions:function(e,i){var s=this.loaderArr.length;return J({index:e,count:s,first:e===0,last:e===s-1,even:e%2===0,odd:e%2!==0},i)},getPageByFirst:function(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(e){return this.step&&!this.lazy?this.page!==this.getPageByFirst(e??this.first):!0},setContentEl:function(e){this.content=e||this.content||be(this.element,'[data-pc-section="content"]')},elementRef:function(e){this.element=e},contentRef:function(e){this.content=e}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var e=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(i){return e.columns?i:i.slice(e.appendOnly?0:e.first.cols,e.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var e=this.isBoth(),i=this.isHorizontal();if(e||i)return this.d_loading&&this.loaderDisabled?e?this.loaderArr[0]:this.loaderArr:this.columns.slice(e?this.first.cols:this.first,e?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:Oe}},bt=["tabindex"];function yt(t,e,i,s,l,n){var o=x("SpinnerIcon");return t.disabled?(p(),g($,{key:1},[O(t.$slots,"default"),O(t.$slots,"content",{items:t.items,rows:t.items,columns:n.loadedColumns})],64)):(p(),g("div",u({key:0,ref:n.elementRef,class:n.containerClass,tabindex:t.tabindex,style:t.style,onScroll:e[0]||(e[0]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},t.ptmi("root")),[O(t.$slots,"content",{styleClass:n.contentClass,items:n.loadedItems,getItemOptions:n.getOptions,loading:l.d_loading,getLoaderOptions:n.getLoaderOptions,itemSize:t.itemSize,rows:n.loadedRows,columns:n.loadedColumns,contentRef:n.contentRef,spacerStyle:l.spacerStyle,contentStyle:l.contentStyle,vertical:n.isVertical(),horizontal:n.isHorizontal(),both:n.isBoth()},function(){return[V("div",u({ref:n.contentRef,class:n.contentClass,style:l.contentStyle},t.ptm("content")),[(p(!0),g($,null,ae(n.loadedItems,function(a,d){return O(t.$slots,"item",{key:d,item:a,options:n.getOptions(d)})}),128))],16)]}),t.showSpacer?(p(),g("div",u({key:0,class:"p-virtualscroller-spacer",style:l.spacerStyle},t.ptm("spacer")),null,16)):K("",!0),!t.loaderDisabled&&t.showLoader&&l.d_loading?(p(),g("div",u({key:1,class:n.loaderClass},t.ptm("loader")),[t.$slots&&t.$slots.loader?(p(!0),g($,{key:0},ae(l.loaderArr,function(a,d){return O(t.$slots,"loader",{key:d,options:n.getLoaderOptions(d,n.isBoth()&&{numCols:t.d_numItemsInViewport.cols})})}),128)):K("",!0),O(t.$slots,"loadingicon",{},function(){return[R(o,u({spin:"",class:"p-virtualscroller-loading-icon"},t.ptm("loadingIcon")),null,16)]})],16)):K("",!0)],16,bt))}ke.render=yt;var Ot=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select:has(.p-select-clear-icon) .p-select-label {
        padding-inline-end: calc(1rem + dt('select.padding.x'));
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }

    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }
`,It={root:function(e){var i=e.instance,s=e.props,l=e.state;return["p-select p-component p-inputwrapper",{"p-disabled":s.disabled,"p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-focus":l.focused,"p-inputwrapper-filled":i.$filled,"p-inputwrapper-focus":l.focused||l.overlayVisible,"p-select-open":l.overlayVisible,"p-select-fluid":i.$fluid,"p-select-sm p-inputfield-sm":s.size==="small","p-select-lg p-inputfield-lg":s.size==="large"}]},label:function(e){var i=e.instance,s=e.props;return["p-select-label",{"p-placeholder":!s.editable&&i.label===s.placeholder,"p-select-label-empty":!s.editable&&!i.$slots.value&&(i.label==="p-emptylabel"||i.label.length===0)}]},clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingicon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:function(e){var i=e.instance,s=e.props,l=e.state,n=e.option,o=e.focusedOption;return["p-select-option",{"p-select-option-selected":i.isSelected(n)&&s.highlightOnSelect,"p-focus":l.focusedOptionIndex===o,"p-disabled":i.isOptionDisabled(n)}]},optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},wt=se.extend({name:"select",style:Ot,classes:It}),St={name:"BaseSelect",extends:tt,props:{options:Array,optionLabel:[String,Function],optionValue:[String,Function],optionDisabled:[String,Function],optionGroupLabel:[String,Function],optionGroupChildren:[String,Function],scrollHeight:{type:String,default:"14rem"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:{type:String,default:null},dataKey:null,showClear:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},labelId:{type:String,default:null},labelClass:{type:[String,Object],default:null},labelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},resetFilterOnHide:{type:Boolean,default:!1},resetFilterOnClear:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:wt,provide:function(){return{$pcSelect:this,$parentInstance:this}}};function X(t){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(t)}function Lt(t){return Ft(t)||zt(t)||kt(t)||Ct()}function Ct(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kt(t,e){if(t){if(typeof t=="string")return de(t,e);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?de(t,e):void 0}}function zt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ft(t){if(Array.isArray(t))return de(t)}function de(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,s=Array(e);i<e;i++)s[i]=t[i];return s}function ge(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),i.push.apply(i,s)}return i}function ve(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?ge(Object(i),!0).forEach(function(s){j(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ge(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function j(t,e,i){return(e=Vt(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Vt(t){var e=Mt(t,"string");return X(e)=="symbol"?e:e+""}function Mt(t,e){if(X(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,e);if(X(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ze={name:"Select",extends:St,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter"],outsideClickListener:null,scrollHandler:null,resizeListener:null,labelClickListener:null,matchMediaOrientationListener:null,overlay:null,list:null,virtualScroller:null,searchTimeout:null,searchValue:null,isModelValueChanged:!1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1,queryOrientation:null}},watch:{modelValue:function(){this.isModelValueChanged=!0},options:function(){this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel(),this.bindLabelClickListener(),this.bindMatchMediaOrientationListener()},updated:function(){this.overlayVisible&&this.isModelValueChanged&&this.scrollInView(this.findSelectedOptionIndex()),this.isModelValueChanged=!1},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindLabelClickListener(),this.unbindMatchMediaOrientationListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(oe.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.optionLabel?G(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?G(e,this.optionValue):e},getOptionRenderKey:function(e,i){return(this.dataKey?G(e,this.dataKey):this.getOptionLabel(e))+"_"+i},getPTItemOptions:function(e,i,s,l){return this.ptm(l,{context:{option:e,index:s,selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(s,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?G(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return G(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return G(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(s){return i.isOptionGroup(s)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),e&&E(this.$refs.focusInput)},hide:function(e){var i=this,s=function(){i.$emit("before-hide"),i.overlayVisible=!1,i.clicked=!1,i.focusedOptionIndex=-1,i.searchValue="",i.resetFilterOnHide&&(i.filterValue=null),e&&E(i.$refs.focusInput)};setTimeout(function(){s()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex(),this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var i=this;setTimeout(function(){var s,l;i.focused=!1,i.focusedOptionIndex=-1,i.searchValue="",i.$emit("blur",e),(s=(l=i.formField).onBlur)===null||s===void 0||s.call(l,e)},100)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}if(Re())switch(e.code){case"Backspace":this.onBackspaceKey(e,this.editable);break;case"Enter":case"NumpadDecimal":this.onEnterKey(e);break;default:e.preventDefault();return}var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,this.editable);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!i&&je(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked=!1},onEditableInput:function(e){var i=e.target.value;this.searchValue="";var s=this.searchOptions(e,i);!s&&(this.focusedOptionIndex=-1),this.updateModel(e,i),!this.overlayVisible&&Y(i)&&this.show()},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(e){this.updateModel(e,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(e){var i=e.relatedTarget===this.$refs.focusInput?He(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;E(i)},onLastHiddenFocus:function(e){var i=e.relatedTarget===this.$refs.focusInput?Ae(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;E(i)},onOptionSelect:function(e,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=this.getOptionValue(i)!==""?this.getOptionValue(i):this.getOptionLabel(i);this.updateModel(e,l),s&&this.hide(!0)},onOptionMouseMove:function(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)},onFilterChange:function(e){var i=e.target.value;this.filterValue=i,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:i}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){if(!e.isComposing)switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){_e.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!i)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var s=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var s=e.currentTarget;e.shiftKey?s.setSelectionRange(0,e.target.selectionStart):(s.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onEndKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var s=e.currentTarget;if(e.shiftKey)s.setSelectionRange(e.target.selectionStart,s.value.length);else{var l=s.value.length;s.setSelectionRange(l,l),this.focusedOptionIndex=-1}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide(!0)):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)),e.preventDefault()},onSpaceKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!i&&this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()},onTabKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i||(this.overlayVisible&&this.hasFocusableElements()?(E(this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onBackspaceKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&!this.overlayVisible&&this.show()},onOverlayEnter:function(e){var i=this;oe.set("overlay",e,this.$primevue.config.zIndex.overlay),Ee(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.scrollInView(),this.$attrSelector&&e.setAttribute(this.$attrSelector,""),setTimeout(function(){i.autoFilterFocus&&i.filter&&E(i.$refs.filterInput.$el),i.autoUpdateModel()},1)},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){var e=this;this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.autoFilterFocus&&this.filter&&!this.editable&&this.$nextTick(function(){e.$refs.filterInput&&E(e.$refs.filterInput.$el)}),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){oe.clear(e)},alignOverlay:function(){this.appendTo==="self"?Be(this.overlay,this.$el):this.overlay&&(this.overlay.style.minWidth=Ke(this.$el)+"px",De(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=i.composedPath();e.overlayVisible&&e.overlay&&!s.includes(e.$el)&&!s.includes(e.overlay)&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new xe(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!Pe()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindLabelClickListener:function(){var e=this;if(!this.editable&&!this.labelClickListener){var i=document.querySelector('label[for="'.concat(this.labelId,'"]'));i&&ne(i)&&(this.labelClickListener=function(){E(e.$refs.focusInput)},i.addEventListener("click",this.labelClickListener))}},unbindLabelClickListener:function(){if(this.labelClickListener){var e=document.querySelector('label[for="'.concat(this.labelId,'"]'));e&&ne(e)&&e.removeEventListener("click",this.labelClickListener)}},bindMatchMediaOrientationListener:function(){var e=this;if(!this.matchMediaOrientationListener){var i=matchMedia("(orientation: portrait)");this.queryOrientation=i,this.matchMediaOrientationListener=function(){e.alignOverlay()},this.queryOrientation.addEventListener("change",this.matchMediaOrientationListener)}},unbindMatchMediaOrientationListener:function(){this.matchMediaOrientationListener&&(this.queryOrientation.removeEventListener("change",this.matchMediaOrientationListener),this.queryOrientation=null,this.matchMediaOrientationListener=null)},hasFocusableElements:function(){return Te(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionExactMatched:function(e){var i;return this.isValidOption(e)&&typeof this.getOptionLabel(e)=="string"&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale))==this.searchValue.toLocaleLowerCase(this.filterLocale)},isOptionStartsWith:function(e){var i;return this.isValidOption(e)&&typeof this.getOptionLabel(e)=="string"&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return Y(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return Me(this.d_value,this.getOptionValue(e)!==""?this.getOptionValue(e):this.getOptionLabel(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return he(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,s=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(l){return i.isValidOption(l)}):-1;return s>-1?s+e+1:e},findPrevOptionIndex:function(e){var i=this,s=e>0?he(this.visibleOptions.slice(0,e),function(l){return i.isValidOption(l)}):-1;return s>-1?s:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,i){var s=this;this.searchValue=(this.searchValue||"")+i;var l=-1,n=!1;return Y(this.searchValue)&&(l=this.visibleOptions.findIndex(function(o){return s.isOptionExactMatched(o)}),l===-1&&(l=this.visibleOptions.findIndex(function(o){return s.isOptionStartsWith(o)})),l!==-1&&(n=!0),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(e,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),n},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[i],!1))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var s=i!==-1?"".concat(e.$id,"_").concat(i):e.focusedOptionId,l=be(e.list,'li[id="'.concat(s,'"]'));l?l.scrollIntoView&&l.scrollIntoView({block:"nearest",inline:"nearest"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(i!==-1?i:e.focusedOptionIndex)})},autoUpdateModel:function(){this.autoOptionFocus&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex()),this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1)},updateModel:function(e,i){this.writeValue(i,e),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(s,l,n){s.push({optionGroup:l,group:!0,index:n});var o=i.getOptionGroupChildren(l);return o&&o.forEach(function(a){return s.push(a)}),s},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,i=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var s=Ve.filter(i,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var l=this.options||[],n=[];return l.forEach(function(o){var a=e.getOptionGroupChildren(o),d=a.filter(function(c){return s.includes(c)});d.length>0&&n.push(ve(ve({},o),{},j({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",Lt(d))))}),this.flatOptions(n)}return s}return i},hasSelectedOption:function(){return this.$filled},label:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.placeholder||"p-emptylabel"},editableInputValue:function(){var e=this.findSelectedOptionIndex();return e!==-1?this.getOptionLabel(this.visibleOptions[e]):this.d_value||""},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return Y(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&Y(this.options)},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},containerDataP:function(){return ie(j({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))},labelDataP:function(){return ie(j(j({placeholder:!this.editable&&this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled,editable:this.editable},this.size,this.size),"empty",!this.editable&&!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)))},dropdownIconDataP:function(){return ie(j({},this.size,this.size))},overlayDataP:function(){return ie(j({},"portal-"+this.appendTo,"portal-"+this.appendTo))}},directives:{ripple:Qe},components:{InputText:Xe,VirtualScroller:ke,Portal:et,InputIcon:Le,IconField:Se,TimesIcon:Je,ChevronDownIcon:Ye,SpinnerIcon:Oe,SearchIcon:we,CheckIcon:Ze,BlankIcon:Ie}},Tt=["id","data-p"],Pt=["name","id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid","data-p"],xt=["name","id","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid","aria-disabled","data-p"],Bt=["data-p"],Kt=["id"],Dt=["id"],Et=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onMousedown","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function At(t,e,i,s,l,n){var o=x("SpinnerIcon"),a=x("InputText"),d=x("SearchIcon"),c=x("InputIcon"),r=x("IconField"),h=x("CheckIcon"),y=x("BlankIcon"),L=x("VirtualScroller"),I=x("Portal"),S=Ge("ripple");return p(),g("div",u({ref:"container",id:t.$id,class:t.cx("root"),onClick:e[12]||(e[12]=function(){return n.onContainerClick&&n.onContainerClick.apply(n,arguments)}),"data-p":n.containerDataP},t.ptmi("root")),[t.editable?(p(),g("input",u({key:0,ref:"focusInput",name:t.name,id:t.labelId||t.inputId,type:"text",class:[t.cx("label"),t.inputClass,t.labelClass],style:[t.inputStyle,t.labelStyle],value:n.editableInputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":t.$id+"_list","aria-activedescendant":l.focused?n.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[1]||(e[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:e[2]||(e[2]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)}),onInput:e[3]||(e[3]=function(){return n.onEditableInput&&n.onEditableInput.apply(n,arguments)}),"data-p":n.labelDataP},t.ptm("label")),null,16,Pt)):(p(),g("span",u({key:1,ref:"focusInput",name:t.name,id:t.labelId||t.inputId,class:[t.cx("label"),t.inputClass,t.labelClass],style:[t.inputStyle,t.labelStyle],tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel||(n.label==="p-emptylabel"?void 0:n.label),"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":l.overlayVisible,"aria-controls":t.$id+"_list","aria-activedescendant":l.focused?n.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,"aria-disabled":t.disabled,onFocus:e[4]||(e[4]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[5]||(e[5]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:e[6]||(e[6]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)}),"data-p":n.labelDataP},t.ptm("label")),[O(t.$slots,"value",{value:t.d_value,placeholder:t.placeholder},function(){var v;return[re(A(n.label==="p-emptylabel"?" ":(v=n.label)!==null&&v!==void 0?v:"empty"),1)]})],16,xt)),n.isClearIconVisible?O(t.$slots,"clearicon",{key:2,class:te(t.cx("clearIcon")),clearCallback:n.onClearClick},function(){return[(p(),N(pe(t.clearIcon?"i":"TimesIcon"),u({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:n.onClearClick},t.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):K("",!0),V("div",u({class:t.cx("dropdown")},t.ptm("dropdown")),[t.loading?O(t.$slots,"loadingicon",{key:0,class:te(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(p(),g("span",u({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(p(),N(o,u({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):O(t.$slots,"dropdownicon",{key:1,class:te(t.cx("dropdownIcon"))},function(){return[(p(),N(pe(t.dropdownIcon?"span":"ChevronDownIcon"),u({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true","data-p":n.dropdownIconDataP},t.ptm("dropdownIcon")),null,16,["class","data-p"]))]})],16),R(I,{appendTo:t.appendTo},{default:U(function(){return[R(Ne,u({name:"p-connected-overlay",onEnter:n.onOverlayEnter,onAfterEnter:n.onOverlayAfterEnter,onLeave:n.onOverlayLeave,onAfterLeave:n.onOverlayAfterLeave},t.ptm("transition")),{default:U(function(){return[l.overlayVisible?(p(),g("div",u({key:0,ref:n.overlayRef,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.panelStyle,t.overlayStyle],onClick:e[10]||(e[10]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),onKeydown:e[11]||(e[11]=function(){return n.onOverlayKeyDown&&n.onOverlayKeyDown.apply(n,arguments)}),"data-p":n.overlayDataP},t.ptm("overlay")),[V("span",u({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[7]||(e[7]=function(){return n.onFirstHiddenFocus&&n.onFirstHiddenFocus.apply(n,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),O(t.$slots,"header",{value:t.d_value,options:n.visibleOptions}),t.filter?(p(),g("div",u({key:0,class:t.cx("header")},t.ptm("header")),[R(r,{unstyled:t.unstyled,pt:t.ptm("pcFilterContainer")},{default:U(function(){return[R(a,{ref:"filterInput",type:"text",value:l.filterValue,onVnodeMounted:n.onFilterUpdated,onVnodeUpdated:n.onFilterUpdated,class:te(t.cx("pcFilter")),placeholder:t.filterPlaceholder,variant:t.variant,unstyled:t.unstyled,role:"searchbox",autocomplete:"off","aria-owns":t.$id+"_list","aria-activedescendant":n.focusedOptionId,onKeydown:n.onFilterKeyDown,onBlur:n.onFilterBlur,onInput:n.onFilterChange,pt:t.ptm("pcFilter"),formControl:{novalidate:!0}},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),R(c,{unstyled:t.unstyled,pt:t.ptm("pcFilterIconContainer")},{default:U(function(){return[O(t.$slots,"filtericon",{},function(){return[t.filterIcon?(p(),g("span",u({key:0,class:t.filterIcon},t.ptm("filterIcon")),null,16)):(p(),N(d,Ue(u({key:1},t.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["unstyled","pt"]),V("span",u({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),A(n.filterResultMessageText),17)],16)):K("",!0),V("div",u({class:t.cx("listContainer"),style:{"max-height":n.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[R(L,u({ref:n.virtualScrollerRef},t.virtualScrollerOptions,{items:n.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:n.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),$e({content:U(function(v){var C=v.styleClass,k=v.contentRef,z=v.items,f=v.getItemOptions,D=v.contentStyle,F=v.itemSize;return[V("ul",u({ref:function(b){return n.listRef(b,k)},id:t.$id+"_list",class:[t.cx("list"),C],style:D,role:"listbox"},t.ptm("list")),[(p(!0),g($,null,ae(z,function(m,b){return p(),g($,{key:n.getOptionRenderKey(m,n.getOptionIndex(b,f))},[n.isOptionGroup(m)?(p(),g("li",u({key:0,id:t.$id+"_"+n.getOptionIndex(b,f),style:{height:F?F+"px":void 0},class:t.cx("optionGroup"),role:"option"},{ref_for:!0},t.ptm("optionGroup")),[O(t.$slots,"optiongroup",{option:m.optionGroup,index:n.getOptionIndex(b,f)},function(){return[V("span",u({class:t.cx("optionGroupLabel")},{ref_for:!0},t.ptm("optionGroupLabel")),A(n.getOptionGroupLabel(m.optionGroup)),17)]})],16,Dt)):We((p(),g("li",u({key:1,id:t.$id+"_"+n.getOptionIndex(b,f),class:t.cx("option",{option:m,focusedOption:n.getOptionIndex(b,f)}),style:{height:F?F+"px":void 0},role:"option","aria-label":n.getOptionLabel(m),"aria-selected":n.isSelected(m),"aria-disabled":n.isOptionDisabled(m),"aria-setsize":n.ariaSetSize,"aria-posinset":n.getAriaPosInset(n.getOptionIndex(b,f)),onMousedown:function(T){return n.onOptionSelect(T,m)},onMousemove:function(T){return n.onOptionMouseMove(T,n.getOptionIndex(b,f))},onClick:e[8]||(e[8]=qe(function(){},["stop"])),"data-p-selected":!t.checkmark&&n.isSelected(m),"data-p-focused":l.focusedOptionIndex===n.getOptionIndex(b,f),"data-p-disabled":n.isOptionDisabled(m)},{ref_for:!0},n.getPTItemOptions(m,f,b,"option")),[t.checkmark?(p(),g($,{key:0},[n.isSelected(m)?(p(),N(h,u({key:0,class:t.cx("optionCheckIcon")},{ref_for:!0},t.ptm("optionCheckIcon")),null,16,["class"])):(p(),N(y,u({key:1,class:t.cx("optionBlankIcon")},{ref_for:!0},t.ptm("optionBlankIcon")),null,16,["class"]))],64)):K("",!0),O(t.$slots,"option",{option:m,selected:n.isSelected(m),index:n.getOptionIndex(b,f)},function(){return[V("span",u({class:t.cx("optionLabel")},{ref_for:!0},t.ptm("optionLabel")),A(n.getOptionLabel(m)),17)]})],16,Et)),[[S]])],64)}),128)),l.filterValue&&(!z||z&&z.length===0)?(p(),g("li",u({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[O(t.$slots,"emptyfilter",{},function(){return[re(A(n.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(p(),g("li",u({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage"),{"data-p-hidden-accessible":!0}),[O(t.$slots,"empty",{},function(){return[re(A(n.emptyMessageText),1)]})],16)):K("",!0)],16,Kt)]}),_:2},[t.$slots.loader?{name:"loader",fn:U(function(v){var C=v.options;return[O(t.$slots,"loader",{options:C})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),O(t.$slots,"footer",{value:t.d_value,options:n.visibleOptions}),!t.options||t.options&&t.options.length===0?(p(),g("span",u({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),A(n.emptyMessageText),17)):K("",!0),V("span",u({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),A(n.selectedMessageText),17),V("span",u({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[9]||(e[9]=function(){return n.onLastHiddenFocus&&n.onLastHiddenFocus.apply(n,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16,Bt)):K("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,Tt)}ze.render=At;var Yt={name:"Dropdown",extends:ze,mounted:function(){console.warn("Deprecated since v4. Use Select component instead.")}};export{Yt as s};
