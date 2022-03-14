(()=>{var e={42:(e,t)=>{var n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6986:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_n=!0,r=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(_n=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);_n=!0);}catch(i){r=!0,o=i}finally{try{_n||null==a.return||a.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const l=window.wp.blocks,a=window.wp.data;function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s=window.wp.element,c=window.React;var u;function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const m=function(e){return c.createElement("svg",d({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u||(u=c.createElement("path",{d:"M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24Zm-.1-4.723c-2.849 0-4.517-1.072-4.575-3.011 0-.203 0-.405.029-.608 1.208 1.013 2.733 1.65 4.603 1.65 1.64 0 2.733-.695 2.733-1.708 0-.608-.978-.897-2.244-1.274-2.33-.752-5.553-1.736-5.553-5.181 0-2.721 1.957-4.458 5.323-4.458 2.905 0 4.66 1.042 4.689 3.242v.376c-1.496-1.187-3.107-1.794-4.862-1.794-1.64 0-2.848.636-2.848 1.592 0 .55.978.868 2.244 1.273 2.33.753 5.667 1.824 5.667 5.24 0 2.808-2.186 4.66-5.207 4.66Z",fill:"currentColor"})))};var p=["name"];const v=function(e){(0,l.updateCategory)("sensei-lms",{icon:(0,s.createElement)(m,{width:"20",height:"20"})}),e.forEach((function(e){var t=e.name,n=i(e,p);(0,l.registerBlockType)(t,n)}))};function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const h=window.wp.i18n;function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}const k=window.lodash;var w=n(42),C=n.n(w);const E=window.wp.primitives;const O=(0,s.createElement)(E.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(E.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"})),x=window.wp.hooks,N=window.wp.blockEditor;var B=window.getComputedStyle,__=((0,k.memoize)((function(){var e=document.createElement("div");e.className="editor-styles-wrapper sensei-probe-element";var t=document.createElement("div");t.className="wp-block-button";var n=document.createElement("div");n.className="wp-block-button__link",n.textContent="Probe",e.style.position="fixed",e.style.top="-100vh",t.appendChild(n),e.appendChild(t),document.body.appendChild(e);var r={primaryColor:B(n).backgroundColor,primaryContrastColor:B(n).color};return document.body.removeChild(e),r})),h.__),_=function(e){var t=e.colorSettings,n=e.props,r=Object.keys(t);return(0,s.createElement)(N.InspectorControls,null,(0,s.createElement)(N.PanelColorSettings,{title:__("Color settings","sensei-lms"),initialOpen:!1,colorSettings:r.map((function(e){return{value:n[e].color,label:t[e].label,onChange:function(r){n["set".concat((0,k.upperFirst)(e))](r),t[e].onChange&&t[e].onChange(f(f({},n),{},{colorValue:r}))}}}))},n.backgroundColor&&n.textColor&&(0,s.createElement)(N.ContrastChecker,{textColor:n.textColor.color,backgroundColor:n.backgroundColor.color,isLargeText:!1})))},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return function(t){return function(n){var r=n.className,o={};r&&r.includes("is-style-")||(r=o.className=[r,"is-style-".concat(e)].join(" "));var l=r.match(/is-style-(\w+)/);return l&&(o.blockStyle=l[1]),(0,s.createElement)(t,y({},n,o))}}},j=h.__,S=function(e){return(e="string"==typeof e?e:e.name)&&e.startsWith("sensei-lms/button")},I=function(e){var t;return f(f({},e),{},{className:null==e||null===(t=e.className)||void 0===t?void 0:t.replace(/\s*has-[\w-]*(color|background)/g,""),style:(0,k.omitBy)(null==e?void 0:e.style,(function(e,t){return t.match(/(color|background|background-color)/)}))})};(0,x.addFilter)("blocks.getSaveContent.extraProps","sensei/button/removeColorSaveProps",(function(e,t){return S(t)?I(e):e})),(0,x.addFilter)("blocks.registerBlockType","sensei/button/removeColorEditProps",(function(e){if(!S(e))return e;var t=e.getEditWrapperProps;return t&&(e.getEditWrapperProps=function(e){var n=t(e);return I(n)}),e})),(0,x.addFilter)("blocks.registerBlockType","sensei/button/addColorSettings",(function(e){var t,n,r;return S(e)?(null===(t=e.supports)||void 0===t||!t.color||null!==(n=e.attributes)&&void 0!==n&&n.backgroundColor||(e.edit=(r={backgroundColor:{style:"background-color",label:j("Background color","sensei-lms")},textColor:{style:"color",label:j("Text color","sensei-lms")}},function(e){var t=(0,k.mapValues)(r,(function(e){return e.style}));return(0,N.withColors)(t)((function(t){return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(e,t),(0,s.createElement)(_,{colorSettings:r,props:t}))}))})(e.edit),e.attributes=f(f({},e.attributes),{},{backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"}})),e):e})),(0,x.addFilter)("editor.BlockListBlock","sensei/button/removeWrapperProps",(function(e){return function(t){var n=t.name,r=t.wrapperProps;return S(n)&&r&&(r=I(r)),(0,s.createElement)(e,y({},t,{wrapperProps:r}))}}),1);function M(e){var t,n,r=A(e),o=function(e){var t,n,r,o,l,a,i,s,c,u,d,m=e.attributes,p=e.colors,v=m.backgroundColor,g=m.customBackgroundColor,f=m.textColor,h=m.customTextColor,y=m.gradient,k=m.style,w=void 0===k?{}:k,E=(0,N.getColorClassName)("background-color",v);w.color||(w.color={}),g&&(w.color.background=g),h&&(w.color.text=h);var O=function(e){if(e)return"has-".concat(e,"-gradient-background")}(y),x=(0,N.getColorClassName)("color",f),B=C()(x,O,(b(l={},E,!(null!=w&&null!==(t=w.color)&&void 0!==t&&t.gradient||!E)),b(l,"has-text-color",f||(null==w||null===(n=w.color)||void 0===n?void 0:n.text)),b(l,"has-background",v||(null==w||null===(r=w.color)||void 0===r?void 0:r.background)||y||(null==w||null===(o=w.color)||void 0===o?void 0:o.gradient)),l)),_=null!=w&&null!==(a=w.color)&&void 0!==a&&a.background||null!=w&&null!==(i=w.color)&&void 0!==i&&i.text||null!=w&&null!==(s=w.color)&&void 0!==s&&s.gradient?{background:null!=w&&null!==(c=w.color)&&void 0!==c&&c.gradient?w.color.gradient:void 0,backgroundColor:null!=w&&null!==(u=w.color)&&void 0!==u&&u.background?w.color.background:void 0,color:null!=w&&null!==(d=w.color)&&void 0!==d&&d.text?w.color.text:void 0}:{};if(p){if(v){var P=(0,N.getColorObjectByAttributeValues)(p,v);_.backgroundColor=P.color}if(f){var j=(0,N.getColorObjectByAttributeValues)(p,f);_.color=j.color}}return{className:B||void 0,style:_}}(e),l={className:{"no-border-radius":0===(n=e.attributes.borderRadius)},style:{borderRadius:n?n+"px":void 0}};return{className:C()({"wp-block-button__link":!r},l.className,o.className,null==e||null===(t=e.attributes)||void 0===t?void 0:t.buttonClassName),style:f(f({},l.style),o.style)}}function T(e){var t=e.className,n=e.attributes.align;return{className:C()(t,"wp-block-sensei-button","wp-block-button","has-text-align-".concat(n||"left"))}}var A=function(e){var t;return/\bis-style-link\b/.test(null==e||null===(t=e.attributes)||void 0===t?void 0:t.className)};const L=window.wp.components;var R=h.__,D=function(e){var t=e.borderRadius,n=e.setAttributes;return(0,s.createElement)(L.PanelBody,{title:R("Border settings","sensei-lms"),initialOpen:!1},(0,s.createElement)(L.RangeControl,{label:R("Border radius","sensei-lms"),value:t,min:0,max:50,allowReset:!0,onChange:function(e){return n({borderRadius:e})}}))};const z=function(e){var t,n=e.attributes,r=e.setAttributes,o=n.borderRadius,l=n.align;return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(N.BlockControls,null,(0,s.createElement)(N.BlockAlignmentToolbar,y({label:R("Change button alignment","sensei-lms"),value:l||(null===(t=e.alignmentOptions)||void 0===t?void 0:t.default),onChange:function(e){e&&r({align:e})}},e.alignmentOptions))),(0,s.createElement)(N.InspectorControls,null,(0,s.createElement)(D,{borderRadius:o,setAttributes:r})))};var F=h.__;const H=function(e){var t=e.placeholder,n=e.attributes,r=e.setAttributes,o=n.text,l=(0,a.useSelect)((function(e){return e("core/block-editor").getSettings()}),[]).colors,i=void 0!==e.text,c=M(f(f({},e),{},{colors:l}));return(0,s.createElement)("div",T(e),i?(0,s.createElement)("div",c,e.text):(0,s.createElement)(N.RichText,y({placeholder:t||F("Add text…","sensei-lms"),value:o,onChange:function(e){return r({text:e})}},c,{tagName:"a",identifier:"text",withoutInteractiveFormatting:!0})),(0,s.createElement)(z,e))};const V=function(e){var t=e.attributes,n=e.className,r=e.tagName,o=e.blockName,a=t.text,i=t.inContainer,c=t.align,u=r;r||(u=A({attributes:t})?"a":"button");var d=(0,s.createElement)("div",T({className:n,attributes:t}),(0,s.createElement)(N.RichText.Content,y({},M({attributes:t}),{tagName:u,value:a})));return i?(0,s.createElement)("div",{className:C()(n,"sensei-buttons-container__button-block",(0,l.getBlockDefaultClassName)(o)+"__wrapper",b({},"sensei-buttons-container__button-align-".concat(c),c))},d):d};var W=["settings","EditWrapper"],U=h.__,G={Fill:{name:"default",label:U("Fill","sensei-lms")},Outline:{name:"outline",label:U("Outline","sensei-lms")},Link:{name:"link",label:U("Link","sensei-lms")}},Z=h.__,J={text:{default:Z("Contact Teacher","sensei-lms")}};const $=function(e){var t,n=e.settings,r=e.EditWrapper,o=i(e,W);o=f({alignmentOptions:{controls:["left","center","right","full"],default:"left"}},o);var a=n.styles?n.styles:[f(f({},G.Fill),{},{isDefault:!0}),G.Outline],c=null===(t=(0,k.find)(a,"isDefault"))||void 0===t?void 0:t.name,u=P(c)(H),d=P(c)(V);return(0,k.merge)({name:"sensei-lms/button",title:"Sensei Button",category:"sensei-lms",attributes:{text:{type:"string",source:"html",selector:"a,button"},align:{type:"string"},borderRadius:{type:"number"},style:{type:"object"},isPreview:{type:"boolean",default:!1},inContainer:{type:"boolean",default:!1},buttonClassName:{type:"array",default:[]}},supports:{color:{gradients:!0},__experimentalColor:{gradients:!0},align:!1,html:!1},icon:O,styles:a,edit:function(e){var t=(0,s.createElement)(u,y({},e,o));return r?(0,s.createElement)(r,e,t):t},save:function(e){return(0,s.createElement)(d,y({},e,o,{blockName:n.name}))},getEditWrapperProps:function(e){var t=e.inContainer,r=e.align;return t?{className:C()("sensei-buttons-container__button-block",(0,l.getBlockDefaultClassName)(n.name)+"__wrapper",b({},"sensei-buttons-container__button-align-".concat(r),r))}:{}},example:{attributes:{align:"center",isPreview:!0}}},n)}({tagName:"a",settings:{name:"sensei-lms/button-contact-teacher",description:Z("Enable a registered user to contact the teacher. This block is only displayed if the user is logged in and private messaging is enabled.","sensei-lms"),title:Z("Contact Teacher","sensei-lms"),attributes:J,styles:[G.Fill,f(f({},G.Outline),{},{isDefault:!0}),G.Link],deprecated:[{attributes:J,save:function(){return(0,s.createElement)(s.Fragment,null)}}]}}),q=window.wp.compose;const K=(0,s.createElement)(E.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(E.Path,{d:"M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"}));var Q=["options","optionsLabel","icon","value","onChange","toggleProps","getMenuItemProps","popoverProps"];const X=function(e){var t=e.options,n=e.optionsLabel,r=e.icon,o=e.value,l=e.onChange,a=e.toggleProps,c=e.getMenuItemProps,u=e.popoverProps,d=i(e,Q),m=t.find((function(e){return o===e.value}));return(0,s.createElement)(L.Dropdown,y({className:"sensei-toolbar-dropdown",popoverProps:f(f({isAlternate:!0,position:"bottom right left",focusOnMount:!0},u),{},{className:C()(null==u?void 0:u.className,"sensei-toolbar-dropdown__popover")}),renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return(0,s.createElement)(L.Button,y({onClick:n,icon:r,"aria-expanded":t,"aria-haspopup":"true"},a,{children:null!=a&&a.children?a.children(m):null==m?void 0:m.label}))},renderContent:function(e){var r=e.onClose;return(0,s.createElement)(L.NavigableMenu,{role:"menu",stopNavigationEvents:!0},(0,s.createElement)(L.MenuGroup,{label:n},t.map((function(e){var t=e.value===(null==m?void 0:m.value),n=null==c?void 0:c(e);return(0,s.createElement)(L.MenuItem,y({key:e.value,role:"menuitemradio",isSelected:t,icon:t?K:null,className:C()("sensei-toolbar-dropdown__option",{"is-selected":t},null==n?void 0:n.className),onClick:function(){l(e.value),r()},children:e.label},n))}))))}},d))};var Y=h.__;const ee=function(e){var t=e.selectedCondition,n=e.onConditionChange,r=e.clientId,o=e.hasInnerBlocks,l=function(e){return(0,a.useSelect)((function(t){var n=t("core/block-editor").getSelectedBlockClientIds();return 1===n.length&&n[0]===e}),[e])}(r),i=function(e){var t=(0,a.useSelect)((function(t){return t("core/block-editor").getBlock(e)}),[e]),n=(0,a.useDispatch)("core/block-editor").replaceBlocks;return function(){t.innerBlocks.length&&n(e,t.innerBlocks)}}(r),c=Object.keys(re).map((function(e){return{value:re[e],label:oe[re[e]]}}));return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(N.BlockControls,null,(0,s.createElement)(L.ToolbarGroup,null,(0,s.createElement)(X,{options:c,optionsLabel:Y("Visible when","sensei-lms"),value:t,onChange:n}))),l&&o&&N.BlockSettingsMenuControls&&(0,s.createElement)(N.BlockSettingsMenuControls,null,(function(e){var t=e.onClose;return(0,s.createElement)(L.MenuItem,{onClick:function(){i(),t()}},Y("Remove condition","sensei-lms"))})))};var te,ne=h.__,re={ENROLLED:"enrolled",UNENROLLED:"unenrolled",COURSE_COMPLETED:"course-completed"},oe=(b(te={},re.ENROLLED,ne("Enrolled","sensei-lms")),b(te,re.UNENROLLED,ne("Not Enrolled","sensei-lms")),b(te,re.COURSE_COMPLETED,ne("Course Completed","sensei-lms")),te);const le=(0,q.compose)([(0,a.withSelect)((function(e,t){var n=t.clientId,r=(0,e("core/block-editor").getBlock)(n);return{hasInnerBlocks:!(!r||!r.innerBlocks.length)}}))])((function(e){var t=e.className,n=e.hasInnerBlocks,r=e.clientId,o=e.attributes.condition,l=e.setAttributes;return(0,s.createElement)(s.Fragment,null,(0,s.createElement)("div",{className:t},(0,s.createElement)(N.InnerBlocks,{renderAppender:!n&&N.InnerBlocks.ButtonBlockAppender})),(0,s.createElement)(ee,{selectedCondition:o,onConditionChange:function(e){return l({condition:e})},clientId:r,hasInnerBlocks:n}))}));const ae=function(e){var t=e.className;return(0,s.createElement)("div",{className:C()("wp-block-group",t)},(0,s.createElement)("div",{className:"wp-block-group__inner-container"},(0,s.createElement)(N.InnerBlocks.Content,null)))},ie=JSON.parse('{"name":"sensei-lms/conditional-content","category":"sensei-lms","supports":{"html":false,"align":["wide","full"]},"attributes":{"condition":{"type":"string","default":"enrolled"}}}');var se;function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}const ue=function(e){return c.createElement("svg",ce({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),se||(se=c.createElement("path",{d:"M5.5 18V6a.5.5 0 0 1 .5-.5h4.5V4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.5v-1.5H6a.5.5 0 0 1-.5-.5zm11-14v1.5H15V4h1.5zM20 6a2 2 0 0 0-2-2v1.5a.5.5 0 0 1 .5.5H20zm-1.5 10.5v-2H20v2h-1.5zM20 13h-1.5v-2H20v2zm-2 5.5a.5.5 0 0 0 .5-.5H20a2 2 0 0 1-2 2v-1.5zM16.5 20v-1.5H15V20h1.5zm2-10.5H20v-2h-1.5v2zm-5-5.5v1.5H12V4h1.5zm0 14.5V20H12v-1.5h1.5z"})))};var de=h.__;const me=f(f({title:de("Conditional Content","sensei-lms"),description:de("Content inside this block will be shown to the selected subgroup of users.","sensei-lms"),keywords:[de("Enrolled","sensei-lms"),de("Content","sensei-lms"),de("Locked","sensei-lms"),de("Private","sensei-lms"),de("Completed","sensei-lms"),de("Not Enrolled","sensei-lms"),de("Restrict","sensei-lms"),de("Access","sensei-lms")],icon:ue,edit:le,save:ae},ie),{},{transforms:{from:[{type:"block",isMultiBlock:!0,blocks:["*"],__experimentalConvert:function(e){if(1!==e.length||"sensei-lms/conditional-content"!==e[0].name){var t=e.map((function(e){return(0,l.createBlock)(e.name,e.attributes,e.innerBlocks)})),n=["wide","full"],r=e.reduce((function(e,t){var r=t.attributes.align;return n.indexOf(r)>n.indexOf(e)?r:e}),void 0);return(0,l.createBlock)("sensei-lms/conditional-content",{align:r},t)}}}]}});var pe={"sensei-lms/button-contact-teacher":["course","lesson"],"sensei-lms/conditional-content":["course","lesson"]};v([$,me]);var ve=null,be=(0,a.subscribe)((function(){var e;(ve=null===(e=(0,a.select)("core/editor"))||void 0===e?void 0:e.getCurrentPostType())&&(Object.entries(pe).forEach((function(e){var t=o(e,2),n=t[0],r=t[1];null!==r&&!r.includes(ve)&&(0,l.getBlockTypes)().find((function(e){return e.name===n}))&&(0,l.unregisterBlockType)(n)})),be())}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);n(6986)})();