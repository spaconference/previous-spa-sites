(("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library||[]).push([[3],{109:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(16);t.a=({wrapperProps:{ariaHasPopup:e,isMoreButton:t,ariaDescribedBy:n},className:r,children:o,link:s,tabIndex:l})=>a.a.createElement(i.a,Object.assign({},s,{"aria-haspopup":!!e,"aria-describedby":n,tabIndex:l||(!t&&s&&s.href?void 0:0),className:r}),o)},1199:function(e,t,n){"use strict";var r=n(0),a=n(373),i=n(1848),o=n.n(i);t.a=e=>r.createElement(a.a,Object.assign({},e,{skinsStyle:o.a,skin:"TextOnlyMenuButtonNSkin"}))},1433:function(e,t,n){e.exports={root:"_1Bha0",bg:"_1I2VE"}},1848:function(e,t,n){e.exports={root:"_1pt7e",TextOnlyMenuButtonNSkin:"_3KF65",textOnlyMenuButtonNSkin:"_3KF65",linkElement:"_2DUrw",wrapper:"_1u8sp",label:"_1zyfI"}},1849:function(e,t,n){"use strict";var r=n(0),a=n(63),i=n(1199),o=n(1850),s=n.n(o);t.a=e=>r.createElement(a.a,Object.assign({},e,{styles:s.a,Button:i.a}))},1850:function(e,t,n){e.exports={wrapper:"_3SSUZ",navContainer:"l76As",itemsContainerWrapper:"_2Q8KO",itemsContainer:"_2MHbW",menuItem:"Y5j6d",dropdownButton:"_3hSjZ",dropWrapper:"_2vbYi",moreContainer:"_1mmDc",showMore:"_2GxvV",moreButton:"_2nffT",utility:"_1T0ju",TextOnlyMenuButtonSkin:"_1oZ90",textOnlyMenuButtonSkin:"_1oZ90"}},195:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(3),o=n.n(i);const s="responsive-container-overflow",l="responsive-container-content",u=({children:e,className:t})=>a.a.createElement("div",{className:t,tabIndex:0,"data-testid":s},e);t.a=({containerLayoutClassName:e,overlowWrapperClassName:t,hasOverflow:n,shouldOmitWrapperLayers:i,children:s,role:c,extraRootClass:d=""})=>Object(r.useCallback)(e=>!i&&n?a.a.createElement(u,{className:o()(t,d)},e):e,[d,n,t,i])(i?a.a.createElement(a.a.Fragment,null,s()):a.a.createElement("div",Object.assign({className:n?e:o()(e,d),"data-testid":l},c?{role:c}:{}),s()))},2324:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1433),o=n.n(i);t.a=({id:e,pageDidMount:t,onClick:n,onDblClick:r,children:i,onMouseEnter:s,onMouseLeave:l})=>a.a.createElement("div",{id:e,className:o.a.root,ref:t,onClick:n,onDoubleClick:r,onMouseEnter:s,onMouseLeave:l},a.a.createElement("div",{className:o.a.bg}),a.a.createElement("div",null,i()))},373:function(e,t,n){"use strict";var r=n(0),a=n(3),i=n.n(a),o=n(109),s=n(92),l=n(91);t.a=e=>{const{id:t,isDropDownButton:n,"aria-haspopup":a,"aria-describedby":u,isMoreButton:c,dir:d,textAlign:m,positionInList:p,link:h,skinsStyle:b,skin:v}=e;return r.createElement(l.a,Object.assign({},e,{className:i()(e.className,b[v])}),e=>r.createElement(o.a,{wrapperProps:{positionInList:p,ariaHasPopup:n&&a,ariaDescribedBy:u,isMoreButton:c},link:h,className:b.linkElement},r.createElement("div",{className:b.wrapper},r.createElement(s.b,{wrapperProps:{dir:d,textAlign:m,id:t},classNames:{bg:b.bg,label:b.label}},e))))}},63:function(e,t,n){"use strict";var r=n(0),a=n(3),i=n.n(a);const o=new Set(["PointerMenuButtonHorizontalMenuAdaptationSkin","PointerMenuButtonSkin","VerticalRibbonsMenuButtonSkin","RibbonsMenuButtonSkin"]),s="data-dropdown-shown",l="SCROLL_TO_TOP",u="SCROLL_TO_BOTTOM";var c=n(665);const d=e=>e.split("?")[0],m=(e,t)=>e.filter(e=>e.link&&e.link.linkPopupId&&e.link.linkPopupId===t),p=(e,t,n)=>{const r=n.compId||n.dataId;let a=new Set;return r&&(a=new Set(e.filter(e=>((e,t,n)=>e.link&&(!e.link.href||d(e.link.href)===t)&&(e.link.anchorCompId&&e.link.anchorCompId===n.compId||e.link.anchorDataId&&e.link.anchorDataId===n.dataId&&e.link.anchorDataId!==l&&e.link.anchorDataId!==u))(e,t,n)))),a},h=(e=[],t="",n={},r="")=>{const a=new Set([...Array.from(p(e,t,n)),...Array.from(m(e,r))]),i=a.size>0;return e.forEach(e=>{const o=e.items&&e.items.length?h(e.items,t,n,r):new Set;(((e,t,n)=>!n&&!(e=>e.link&&(e.link.anchorDataId||e.link.anchorCompId))(e)&&e.link&&e.link.href&&d(e.link.href)===t)(e,t,i)||e.link&&Object.keys(e.link).length>0&&o.size>0)&&a.add(e),o.forEach(e=>a.add(e))}),a};const b=e=>{const t=r.useMemo(()=>h(e.items,e.currentPrimaryPageHref,e.activeAnchor,e.currentPopupId),[e.items,e.currentPrimaryPageHref,e.activeAnchor,e.currentPopupId]),n=(e,t)=>{const{Button:n}=e,a={onMouseEnter:e.onItemMouseEnter,onMouseLeave:e.onItemMouseLeave,onClick:e.onItemClick,textAlign:e.alignText,isTouchDevice:e.isTouchDevice},i=Object.assign(Object.assign({},a),t);return r.createElement(n,Object.assign({},i))};function a(e,t,n,r,a,i){return e===t-1?1===t?"dropLonely":n?"bottom":i||"right"===a?r?"left":"right":"center":0===e?n?"top":i||"left"===a?r?"right":"left":"center":n?"dropCenter":"center"}const l=(e,t)=>{let n=e,r=0;for(;t[n]&&r<100;)n+=t[n]++,r++;return t[n]=(t[n]||0)+1,n},u=(e,{items:r=[],className:i,dropdown:o,rtl:s,buttonAlign:u,stretch:c})=>{const d={};return r.map((h,b)=>{var v,g,f;const k=`${o?"moreContainer":""}${b}`,y={isContainer:o,isSelected:t.has(h),positionInList:h.positionInList||a(b,r.length,o,s,u,c),id:m(k),index:b,refInParent:k,isDropDownButton:o,"aria-haspopup":h.hasPopup||(null!==(g=null===(v=null==h?void 0:h.items)||void 0===v?void 0:v.length)&&void 0!==g?g:0)>0,"aria-describedby":(null===(f=null==h?void 0:h.items)||void 0===f?void 0:f.length)?p():void 0,tagName:"li",direction:s?"rtl":"ltr",parentId:h.parent,dataId:h.id,label:h.label,link:h.link,className:i,key:l(h.label,d),subItems:o?void 0:h.items};return n(e,y)})};function c(e){const{styles:t,items:r,rtl:a,stretchButtonsToMenuWidth:i,alignButtons:o}=e,s=u(e,{items:r,className:t.menuItem,rtl:a,buttonAlign:o,stretch:i}),l=function(e){const{rtl:t,styles:r,stretchButtonsToMenuWidth:a,alignButtons:i,moreButtonLabel:o,onItemMouseEnter:s,onItemMouseLeave:l,onSubMenuKeyDown:u}=e;let c=t?"left":"right";a||"right"===i||(c="center");const d={label:o||"",isSelected:!1,positionInList:c,id:m("__more__"),index:"__more__",refInParent:"__more__",key:"__more__",onFocus:s,onBlur:l,"aria-haspopup":!0,tagName:"li",onKeyDown:u,isDropDownButton:!1,className:r.moreButton,isMoreButton:!0};return n(e,d)}(e);return l&&s.push(l),s}function d(e){const{items:t,rtl:n,alignButtons:r,stretchButtonsToMenuWidth:a,hover:i,styles:o}=e;let s=null,l=[];if(t&&i){const e=parseInt(i,10);Number.isInteger(e)&&t[e]?s=t[e].items:"__more__"===i&&(s=function(e){return e.reduce((e,t)=>{let n=[];return t.items&&(n=t.items.map(e=>Object.assign(Object.assign({},e),{parent:t.id}))),[...e,t,...n]},[])}(t))}return s&&(l=u(e,{items:s,className:o.dropdownButton,dropdown:!0,rtl:n,buttonAlign:r,stretch:a})),l}const m=t=>`${e.id}${t}`,p=()=>m("navContainer")+"-hiddenA11ySubMenuIndication";return function(e){const{translate:t,styles:n}=e,a=function(e){const{styles:t,skin:n,alignButtons:a,marginAllChildren:o,onMenuKeyDown:s}=e,l=c(e),u=m("itemsContainer");let d=r.createElement("ul",{className:i()(t.itemsContainer,t[""+a]),id:u,style:{textAlign:a},"data-marginallchildren":o,onKeyDown:s},l);if((()=>{switch(n){case"IndentedMenuButtonSkin":case"ShinyMenuIIButtonSkin":case"SloppyBorderMenuButtonSkin":return!0;default:return!1}})()){const e=m("wrapper");d=r.createElement("div",{className:i()(t.itemsContainerWrapper),id:e},d)}return d}(e),l=function(e){const{skin:t,styles:n}=e;let a=null;return o.has(t)&&(a=r.createElement("div",{className:n.utility})),a}(e),u=function(e){var t;const{alignButtons:n,onSubMenuKeyDown:a,hover:o,styles:l}=e,u=d(e),c=m("moreContainer"),p=m("dropWrapper"),h=(null!==(t=null==u?void 0:u.length)&&void 0!==t?t:0)>0,b=i()(l.dropWrapper,{[l.showMore]:h}),v=h,g=function(e){const{hover:t,hoverListPosition:n}=e;return t?n:null}(e);return r.createElement("div",Object.assign({className:b,id:p,"data-drophposition":g,"data-dropalign":n},{[s]:v}),r.createElement("ul",{className:l.moreContainer,"data-hover":o,id:c,onKeyDown:a},u))}(e),h=t("ariaLabels","dropDownMenu_AriaLabel_TopLevel_SiteNavigation","Site"),b=m("navContainer");return r.createElement("nav",{className:i()(n.navContainer),id:b,"aria-label":h,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l,a,u,(e=>r.createElement("div",{style:{display:"none"},id:p()},e("a11ySubmenuIndications","dropDownMenu_a11ySubmenuIndication","Use tab to navigate through the menu items.")))(t))}(e)},v={hover:null,hoverListPosition:null},g=e=>{const[t,n]=r.useState(v),a=r.useRef();let o;const s=r=>{var a;const{hover:i}=t,{id:s}=e,{currentTarget:l}=r,u=l.getAttribute("data-listposition"),c=l.getAttribute("data-index")||"-1",d=parseInt(c,10);clearTimeout(o),(null===(a=null==l?void 0:l.parentNode)||void 0===a?void 0:a.id)!==s+"moreContainer"&&(Number.isInteger(d)&&-1!==d||c.startsWith("__"))&&c!==i&&n({hover:c,hoverListPosition:u})},l=()=>{o=setTimeout(()=>{n({hover:null,hoverListPosition:null})},1e3)},u=n=>{const{hover:r}=t,{items:a}=e,{currentTarget:i}=n,o=i.getAttribute("data-index")||"-1",u="true"===i.getAttribute("data-dropdown"),c=parseInt(o,10),d=a?a[c]:null,m="__more__"===o||d&&d.items;u?l():r?(l(),m&&r!==o&&(n.preventDefault(),n.stopPropagation(),s(n))):m&&(s(n),n.preventDefault(),n.stopPropagation())},d=(t,n=!1)=>{var r;if(a.current){const{id:i}=e;let o=a.current.querySelector(`#${i}itemsContainer > li:nth-child(${t+1})`);for(;o&&"true"===o.getAttribute("aria-hidden");)o=n?o.previousSibling:o.nextSibling;if(o){const e=null===(r=o.childNodes)||void 0===r?void 0:r[0];if(e)return e.focus(),!0}}return!1},m=n=>{const{hover:r}=t,{items:i}=e,{key:o,shiftKey:s}=n;if("Tab"===o&&null!==r){const t=r?parseInt(r,10):-1;let o=!1;if(!s&&i){const n=i[t];n&&n.items&&(o=(t=>{const{id:n}=e;if(a.current){const e=a.current.querySelector(`#${n}moreContainer li:nth-child(${t+1}) a`);if(e)return e.focus(),!0}return!1})(0))}o&&(n.stopPropagation(),n.preventDefault())}},p=n=>{const{hover:r}=t,{items:a}=e,{shiftKey:i,key:o,target:s,currentTarget:l}=n;let u=s;if(s!==l&&"li"!==s.tagName.toLowerCase()&&(u=s.closest("li")),u){const e=u.getAttribute("data-index")||"";let t=!1;if(r&&"Tab"===o){const n=((e,t)=>{const n=parseInt(e,10);return Number.isNaN(n)?t:n})(r,-1),o=parseInt(e,10);if(n>=0)if(i)0===o&&(t=d(n,i));else if(a&&a[n]){const e=a[n];e&&e.items&&e.items.length===o+1&&(t=d(n+1))}}t&&(n.stopPropagation(),n.preventDefault())}};return function(e,t){const{id:n,skin:o,rtl:d,styles:h}=e,v=Object.assign({id:n,class:i()(h[o],h.wrapper,"hidden-during-prewarmup"),ref:a,dir:d?"rtl":"ltr"},function(e,t){const{hover:n,hoverListPosition:r}=t,{stretchButtonsToMenuWidth:a,sameWidthButtons:i,skinExports:o,alignButtons:s,items:l,isQaMode:u,fullNameCompType:d}=e;return Object.assign({"data-stretch-buttons-to-menu-width":a,"data-same-width-buttons":i,"data-num-items":null==l?void 0:l.length,"data-menuborder-y":o.menuBorderY,"data-menubtn-border":o.menuBtnBorder,"data-ribbon-els":o.ribbonEls,"data-label-pad":o.labelPad,"data-ribbon-extra":o.ribbonExtra,"data-drophposition":r,"data-dropalign":s,"data-hovered-item":n},Object(c.a)(u,d))}(e,t));return r.createElement("wix-dropdown-menu",Object.assign({},v),r.createElement(b,Object.assign({},e,t,{onItemMouseEnter:s,onItemMouseLeave:l,onItemClick:u,onMenuKeyDown:m,onSubMenuKeyDown:p})))}(e,t)};g.defaultProps={alignButtons:"center"};t.a=g},91:function(e,t,n){"use strict";var r=n(0),a=n(109);t.a=e=>{const{label:t,direction:n="ltr",positionInList:i,parentId:o,dataId:s,isContainer:l,isSelected:u,isHovered:c,link:d,tagName:m="div",id:p,className:h,onClick:b,onMouseEnter:v,onMouseLeave:g,index:f,children:k,isDropDownButton:y,isTouchDevice:_,subItems:I}=e,w={"data-direction":n,"data-listposition":i,"data-parent-id":o,"data-data-id":s,"data-state":[l?"drop":"menu",u&&"selected",c&&"over",d&&(d.hasOwnProperty("href")||d.hasOwnProperty("target")||d.hasOwnProperty("rel")||d.hasOwnProperty("linkPopupId"))?"link":"header"].join(" "),"data-index":f,"data-dropdown":y},M=e=>e?e.trim():"\xa0",N=I&&I.length?r.createElement("ul",{"aria-hidden":!0,style:{display:"none"}},I.map((e,t)=>r.createElement("li",{key:e.id||t},r.createElement(a.a,{wrapperProps:{ariaHasPopup:e.hasPopup},link:e.link,tabIndex:-1},M(e.label))))):null;return r.createElement(m,Object.assign({id:p},w,{className:h,onClick:_?b:void 0,onMouseEnter:_?void 0:v,onMouseLeave:_?void 0:g,onFocus:_?void 0:v,onBlur:_?void 0:g}),k(M(t)),N)}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n.n(r),i=n(3),o=n.n(i);const s=({dir:e,textAlign:t,className:n,children:r,tagName:i="p",id:o})=>a.a.createElement(i,{className:n,style:{textAlign:t},dir:e,id:o+"label"},r);t.b=({wrapperProps:{dir:e,textAlign:t,id:n},classNames:r,children:i})=>a.a.createElement("div",{className:o()(r.bg),style:{textAlign:t}},a.a.createElement(s,{dir:e,textAlign:t,className:r.label,id:n},i))}}]);
//# sourceMappingURL=https://static.NONE.com/services/editor-elements/dist/rb_wixui.thunderbolt~bootstrap-responsive.8b64c4ee.chunk.min.js.map
// concatenated at RegistryManifestPlugin
var currentGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:null;
currentGlobal['rb_wixui.thunderbolt_bootstrap-responsive_lazy_factory']=function(){
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt_bootstrap-responsive",["react"],r):"object"==typeof exports?exports["rb_wixui.thunderbolt_bootstrap-responsive"]=r(require("react")):e["rb_wixui.thunderbolt_bootstrap-responsive"]=r(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(e){function r(r){for(var n,i,s=r[0],p=r[1],u=r[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(l&&l(r);f.length;)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,s=1;s<t.length;s++){var p=t[s];0!==o[p]&&(n=!1)}n&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={670:0},a=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="https://static.NONE.com/services/editor-elements/dist/";var s=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library||[],p=s.push.bind(s);s.push=r,s=s.slice();for(var u=0;u<s.length;u++)r(s[u]);var l=p;return a.push([4393,0,3]),t()}({0:function(r,t){r.exports=e},3:function(e,r,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(r,[]))||(e.exports=n)}()},4393:function(e,r,t){"use strict";t.r(r),t.d(r,"components",(function(){return i})),t.d(r,"version",(function(){return s}));var n=t(1849),o=t(2324),a=t(195);const i={DropDownMenu_TextOnlyMenuButtonSkin:{component:n.a},Page_ResponsivePageWithColorBG:{component:o.a},ResponsiveContainer:{component:a.a}},s="1.0.0"},7:function(e,r,t){"use strict";t.d(r,"g",(function(){return o})),t.d(r,"h",(function(){return a})),t.d(r,"d",(function(){return s})),t.d(r,"b",(function(){return p})),t.d(r,"e",(function(){return u})),t.d(r,"c",(function(){return l})),t.d(r,"a",(function(){return c})),t.d(r,"f",(function(){return f}));var n=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t};const o={enter:13,space:32,end:35,home:36,escape:27,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,tab:9,delete:46,a:65,z:90,pageUp:33,pageDown:34},a={space:["Spacebar"," "],enter:["Enter"]};function i(e){return r=>{r.keyCode===e&&(r.preventDefault(),r.stopPropagation(),r.currentTarget.click())}}const s=i(o.space),p=i(o.enter),u=e=>{p(e),s(e)},l=i(o.escape),c="has-custom-focus",f=(e={})=>{var r,{pressed:t,expanded:o,haspopup:a,label:i,live:s,relevant:p,current:u,owns:l,controls:c,roleDescription:f,hidden:d,disabled:b,describedBy:y,labelledBy:v,errorMessage:h,atomic:g,role:m,busy:x}=e,w=n(e,["pressed","expanded","haspopup","label","live","relevant","current","owns","controls","roleDescription","hidden","disabled","describedBy","labelledBy","errorMessage","atomic","role","busy"]);const _=null!==(r=w.tabIndex)&&void 0!==r?r:w.tabindex,O={};return i&&(O["aria-label"]=i),s&&(O["aria-live"]=s),u&&(O["aria-current"]=u),"boolean"==typeof t&&(O["aria-pressed"]=t),"boolean"==typeof d&&(O["aria-hidden"]=d),"boolean"==typeof o&&(O["aria-expanded"]=o),"boolean"==typeof b&&(O["aria-disabled"]=b),"boolean"==typeof g&&(O["aria-atomic"]=g),"boolean"==typeof x&&(O["aria-busy"]=x),"string"==typeof p&&(O["aria-relevant"]=p),"string"==typeof l&&(O["aria-owns"]=l),"string"==typeof c&&(O["aria-controls"]=c),"string"==typeof f&&(O["aria-roledescription"]=f),a&&(O["aria-haspopup"]=a),"number"==typeof _&&(O.tabIndex=_),m&&(O.role=m),y&&(O["aria-describedby"]=y),v&&(O["aria-labelledby"]=v),h&&(O["aria-errormessage"]=h),O}}})}));
//# sourceMappingURL=https://static.NONE.com/services/editor-elements/dist/rb_wixui.thunderbolt_bootstrap-responsive.a6d6d122.bundle.min.js.map
}
//# sourceMappingURL=https://static.NONE.com/services/editor-elements/dist/rb_wixui.thunderbolt~bootstrap-responsive.06ea3486.chunk.min.js.map