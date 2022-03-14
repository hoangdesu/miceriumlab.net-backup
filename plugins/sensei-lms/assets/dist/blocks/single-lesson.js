(()=>{var e={42:(e,t)=>{var n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var i in n)s.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},5207:(e,t,n)=>{"use strict";const s=window.wp.data;function o(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r=window.wp.element,l=window.wp.blocks,i=window.React;var a;function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},c.apply(this,arguments)}const u=function(e){return i.createElement("svg",c({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=i.createElement("path",{d:"M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24Zm-.1-4.723c-2.849 0-4.517-1.072-4.575-3.011 0-.203 0-.405.029-.608 1.208 1.013 2.733 1.65 4.603 1.65 1.64 0 2.733-.695 2.733-1.708 0-.608-.978-.897-2.244-1.274-2.33-.752-5.553-1.736-5.553-5.181 0-2.721 1.957-4.458 5.323-4.458 2.905 0 4.66 1.042 4.689 3.242v.376c-1.496-1.187-3.107-1.794-4.862-1.794-1.64 0-2.848.636-2.848 1.592 0 .55.978.868 2.244 1.273 2.33.753 5.667 1.824 5.667 5.24 0 2.808-2.186 4.66-5.207 4.66Z",fill:"currentColor"})))};var m=["name"];const d=function(e){(0,l.updateCategory)("sensei-lms",{icon:(0,r.createElement)(u,{width:"20",height:"20"})}),e.forEach((function(e){var t=e.name,n=o(e,m);(0,l.registerBlockType)(t,n)}))};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const f=window.wp.i18n,g=JSON.parse('{"name":"sensei-lms/lesson-actions","category":"sensei-lms","supports":{"html":false},"attributes":{"toggledBlocks":{"type":"object","default":{"sensei-lms/button-reset-lesson":true}}}}');function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function y(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_n=!0,s=!1,o=void 0;try{for(var r,l=e[Symbol.iterator]();!(_n=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);_n=!0);}catch(i){s=!0,o=i}finally{try{_n||null==l.return||l.return()}finally{if(s)throw o}}return n}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=n(42),E=n.n(k);const C=window.wp.components,_=window.wp.blockEditor;var x,N=["sensei-lms/button-view-quiz","sensei-lms/button-complete-lesson","sensei-lms/button-next-lesson","sensei-lms/button-reset-lesson"],O={"sensei-lms/button-complete-lesson":{inContainer:!0},"sensei-lms/button-next-lesson":{inContainer:!0},"sensei-lms/button-reset-lesson":{inContainer:!0},"sensei-lms/button-view-quiz":{inContainer:!0}},B=N.map((function(e){return[e,v({},O[e])]})),P="completed",S="in-progress",L=(p(x={},P,["sensei-lms/button-next-lesson","sensei-lms/button-reset-lesson"]),p(x,S,["sensei-lms/button-view-quiz","sensei-lms/button-complete-lesson"]),x);const j=function(e){var t=w((0,r.useState)(e),2),n=t[0],o=t[1],l=(0,s.useSelect)((function(e){return e("core/block-editor").getSelectedBlock()}));return(0,r.useEffect)((function(){if(N.includes(null==l?void 0:l.name)){var e=Object.keys(L).find((function(e){return L[e].includes(l.name)}));e!==n&&o(e)}}),[l,n]),[n,o]};function z(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const A=function(e){var t=e.parentClientId,n=e.setAttributes,o=e.toggledBlocks,i=e.blocks,a=(0,s.useSelect)((function(e){return e("core/block-editor").getBlock(t)}),[]),c=(0,s.useDispatch)("core/block-editor").replaceInnerBlocks,u=w((0,r.useState)({}),2),m=u[0],d=u[1];return i.map((function(e){return{active:!1!==o[e.blockName],onToggle:(s=e.blockName,function(e){var r=a.innerBlocks.find((function(e){return e.name===s})),i=null;e&&!r?i=[].concat(z(a.innerBlocks),[(0,l.createBlock)(s,v(v({},O[s]),m[s]))]).sort((function(e,t){return N.indexOf(e.name)-N.indexOf(t.name)})):!e&&r&&(i=a.innerBlocks.filter((function(e){return e.name!==s})),d((function(e){return v(v({},e),{},p({},s,r.attributes))}))),i&&c(t,i,!1),n({toggledBlocks:v(v({},o),{},p({},s,e))})}),label:e.label};var s}))};const I=function(){var e=w((0,r.useState)((function(){var e=document.getElementById("question_counter");return e?parseInt(e.value,10)>0:null})),2),t=e[0],n=e[1];(0,r.useEffect)((function(){var e=function(e){n(e.detail.questions>0)};return window.addEventListener("sensei-quiz-editor-question-count-updated",e),function(){window.removeEventListener("sensei-quiz-editor-question-count-updated",e)}}),[]);var o=((0,s.useSelect)((function(e){return e("core/editor").getEditedPostAttribute("meta")}))||{})._quiz_has_questions;return null!==t?t:o};const T=function(e){var t=document.getElementById("pass_required"),n=w((0,r.useState)((function(){return!t||!t.checked})),2),s=n[0],o=n[1];return(0,r.useEffect)((function(){if(t){var e=function(){o(!t.checked)};return t.addEventListener("change",e),function(){t.removeEventListener("change",e)}}}),[t]),!e||s};function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},F.apply(this,arguments)}const R=window.wp.primitives;const q=(0,r.createElement)(R.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(R.Path,{d:"M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"}));var M=["options","optionsLabel","icon","value","onChange","toggleProps","getMenuItemProps","popoverProps"];const D=function(e){var t=e.options,n=e.optionsLabel,s=e.icon,l=e.value,i=e.onChange,a=e.toggleProps,c=e.getMenuItemProps,u=e.popoverProps,m=o(e,M),d=t.find((function(e){return l===e.value}));return(0,r.createElement)(C.Dropdown,F({className:"sensei-toolbar-dropdown",popoverProps:v(v({isAlternate:!0,position:"bottom right left",focusOnMount:!0},u),{},{className:E()(null==u?void 0:u.className,"sensei-toolbar-dropdown__popover")}),renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return(0,r.createElement)(C.Button,F({onClick:n,icon:s,"aria-expanded":t,"aria-haspopup":"true"},a,{children:null!=a&&a.children?a.children(d):null==d?void 0:d.label}))},renderContent:function(e){var s=e.onClose;return(0,r.createElement)(C.NavigableMenu,{role:"menu",stopNavigationEvents:!0},(0,r.createElement)(C.MenuGroup,{label:n},t.map((function(e){var t=e.value===(null==d?void 0:d.value),n=null==c?void 0:c(e);return(0,r.createElement)(C.MenuItem,F({key:e.value,role:"menuitemradio",isSelected:t,icon:t?q:null,className:E()("sensei-toolbar-dropdown__option",{"is-selected":t},null==n?void 0:n.className),onClick:function(){i(e.value),s()},children:e.label},n))}))))}},m))};var __=f.__;const V=function(e){var t=e.toggleBlocks,n=e.previewState,s=e.onPreviewChange;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(_.BlockControls,null,(0,r.createElement)(C.ToolbarGroup,null,(0,r.createElement)(D,{options:[{label:__("In Progress","sensei-lms"),value:S},{label:__("Completed","sensei-lms"),value:P}],optionsLabel:__("Preview lesson state","sensei-lms"),value:n,onChange:s}))),(0,r.createElement)(_.InspectorControls,null,(0,r.createElement)(C.PanelBody,{title:__("Additional Actions","sensei-lms")},t.map((function(e){return(0,r.createElement)(C.ToggleControl,{key:e.label,checked:e.active,onChange:e.onToggle,label:e.label})})))))};var H,W,G=f.__,Q=(null===(H=window)||void 0===H||null===(W=H.sensei)||void 0===W?void 0:W.courseThemeEnabled)||!1;const J=function(e){var t=e.className,n=e.clientId,s=e.setAttributes,o=e.attributes.toggledBlocks,l=w(j(S),2),i=l[0],a=l[1],c=A({parentClientId:n,setAttributes:s,toggledBlocks:o,blocks:[{blockName:"sensei-lms/button-reset-lesson",label:G("Reset Lesson","sensei-lms")}]}),u=I(),m=u?"has-quiz":"no-quiz",d=T(u)?"allowed":"not-allowed";if(Q)return(0,r.createElement)(C.Notice,{status:"warning",isDismissible:!1,className:"wp-block-sensei-lms-lesson-actions__notice"},G("Lesson Actions block is not displayed when Learning Mode is enabled.","sensei-lms"));var p=B.filter((function(e){return!1!==o[e[0]]}));return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(V,{previewState:i,onPreviewChange:a,toggleBlocks:c}),(0,r.createElement)("div",{className:E()(t,"wp-block-sensei-lms-lesson-actions__preview-".concat(i),"wp-block-sensei-lms-lesson-actions__".concat(m),"wp-block-sensei-lms-lesson-actions__complete_lessons-".concat(d))},(0,r.createElement)("div",{className:"sensei-buttons-container"},(0,r.createElement)(_.InnerBlocks,{allowedBlocks:N,template:p,templateLock:"all",templateInsertUpdatesSelection:!1}))))};const U=function(e){var t=e.className;return(0,r.createElement)("div",{className:t},(0,r.createElement)("div",{className:"sensei-buttons-container"},(0,r.createElement)(_.InnerBlocks.Content,null)))};var Z;function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},$.apply(this,arguments)}const K=function(e){return i.createElement("svg",$({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),Z||(Z=i.createElement("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5V6.2h-5v1.6zM17 13H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5v-1.5h-5v1.5z",fill:"currentColor"})))};var X=f.__;const Y=v(v({title:X("Lesson Actions","sensei-lms"),description:X("Enable a student to perform specific actions for a lesson.","sensei-lms"),keywords:[X("Lesson","sensei-lms"),X("Actions","sensei-lms"),X("Buttons","sensei-lms"),X("Complete","sensei-lms"),X("Next","sensei-lms"),X("Reset","sensei-lms")],example:{innerBlocks:[{name:"sensei-lms/button-complete-lesson"},{name:"sensei-lms/button-next-lesson"},{name:"sensei-lms/button-reset-lesson"}]}},g),{},{icon:K,edit:J,save:U}),ee=window.lodash;const te=(0,r.createElement)(R.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)(R.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"})),ne=window.wp.hooks;var se=window.getComputedStyle,oe=((0,ee.memoize)((function(){var e=document.createElement("div");e.className="editor-styles-wrapper sensei-probe-element";var t=document.createElement("div");t.className="wp-block-button";var n=document.createElement("div");n.className="wp-block-button__link",n.textContent="Probe",e.style.position="fixed",e.style.top="-100vh",t.appendChild(n),e.appendChild(t),document.body.appendChild(e);var s={primaryColor:se(n).backgroundColor,primaryContrastColor:se(n).color};return document.body.removeChild(e),s})),f.__),re=function(e){var t=e.colorSettings,n=e.props,s=Object.keys(t);return(0,r.createElement)(_.InspectorControls,null,(0,r.createElement)(_.PanelColorSettings,{title:oe("Color settings","sensei-lms"),initialOpen:!1,colorSettings:s.map((function(e){return{value:n[e].color,label:t[e].label,onChange:function(s){n["set".concat((0,ee.upperFirst)(e))](s),t[e].onChange&&t[e].onChange(v(v({},n),{},{colorValue:s}))}}}))},n.backgroundColor&&n.textColor&&(0,r.createElement)(_.ContrastChecker,{textColor:n.textColor.color,backgroundColor:n.backgroundColor.color,isLargeText:!1})))},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return function(t){return function(n){var s=n.className,o={};s&&s.includes("is-style-")||(s=o.className=[s,"is-style-".concat(e)].join(" "));var l=s.match(/is-style-(\w+)/);return l&&(o.blockStyle=l[1]),(0,r.createElement)(t,F({},n,o))}}},ie=f.__,ae=function(e){return(e="string"==typeof e?e:e.name)&&e.startsWith("sensei-lms/button")},ce=function(e){var t;return v(v({},e),{},{className:null==e||null===(t=e.className)||void 0===t?void 0:t.replace(/\s*has-[\w-]*(color|background)/g,""),style:(0,ee.omitBy)(null==e?void 0:e.style,(function(e,t){return t.match(/(color|background|background-color)/)}))})};(0,ne.addFilter)("blocks.getSaveContent.extraProps","sensei/button/removeColorSaveProps",(function(e,t){return ae(t)?ce(e):e})),(0,ne.addFilter)("blocks.registerBlockType","sensei/button/removeColorEditProps",(function(e){if(!ae(e))return e;var t=e.getEditWrapperProps;return t&&(e.getEditWrapperProps=function(e){var n=t(e);return ce(n)}),e})),(0,ne.addFilter)("blocks.registerBlockType","sensei/button/addColorSettings",(function(e){var t,n,s;return ae(e)?(null===(t=e.supports)||void 0===t||!t.color||null!==(n=e.attributes)&&void 0!==n&&n.backgroundColor||(e.edit=(s={backgroundColor:{style:"background-color",label:ie("Background color","sensei-lms")},textColor:{style:"color",label:ie("Text color","sensei-lms")}},function(e){var t=(0,ee.mapValues)(s,(function(e){return e.style}));return(0,_.withColors)(t)((function(t){return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(e,t),(0,r.createElement)(re,{colorSettings:s,props:t}))}))})(e.edit),e.attributes=v(v({},e.attributes),{},{backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"}})),e):e})),(0,ne.addFilter)("editor.BlockListBlock","sensei/button/removeWrapperProps",(function(e){return function(t){var n=t.name,s=t.wrapperProps;return ae(n)&&s&&(s=ce(s)),(0,r.createElement)(e,F({},t,{wrapperProps:s}))}}),1);function ue(e){var t,n,s=de(e),o=function(e){var t,n,s,o,r,l,i,a,c,u,m,d=e.attributes,b=e.colors,v=d.backgroundColor,f=d.customBackgroundColor,g=d.textColor,h=d.customTextColor,y=d.gradient,w=d.style,k=void 0===w?{}:w,C=(0,_.getColorClassName)("background-color",v);k.color||(k.color={}),f&&(k.color.background=f),h&&(k.color.text=h);var x=function(e){if(e)return"has-".concat(e,"-gradient-background")}(y),N=(0,_.getColorClassName)("color",g),O=E()(N,x,(p(r={},C,!(null!=k&&null!==(t=k.color)&&void 0!==t&&t.gradient||!C)),p(r,"has-text-color",g||(null==k||null===(n=k.color)||void 0===n?void 0:n.text)),p(r,"has-background",v||(null==k||null===(s=k.color)||void 0===s?void 0:s.background)||y||(null==k||null===(o=k.color)||void 0===o?void 0:o.gradient)),r)),B=null!=k&&null!==(l=k.color)&&void 0!==l&&l.background||null!=k&&null!==(i=k.color)&&void 0!==i&&i.text||null!=k&&null!==(a=k.color)&&void 0!==a&&a.gradient?{background:null!=k&&null!==(c=k.color)&&void 0!==c&&c.gradient?k.color.gradient:void 0,backgroundColor:null!=k&&null!==(u=k.color)&&void 0!==u&&u.background?k.color.background:void 0,color:null!=k&&null!==(m=k.color)&&void 0!==m&&m.text?k.color.text:void 0}:{};if(b){if(v){var P=(0,_.getColorObjectByAttributeValues)(b,v);B.backgroundColor=P.color}if(g){var S=(0,_.getColorObjectByAttributeValues)(b,g);B.color=S.color}}return{className:O||void 0,style:B}}(e),r={className:{"no-border-radius":0===(n=e.attributes.borderRadius)},style:{borderRadius:n?n+"px":void 0}};return{className:E()({"wp-block-button__link":!s},r.className,o.className,null==e||null===(t=e.attributes)||void 0===t?void 0:t.buttonClassName),style:v(v({},r.style),o.style)}}function me(e){var t=e.className,n=e.attributes.align;return{className:E()(t,"wp-block-sensei-button","wp-block-button","has-text-align-".concat(n||"left"))}}var de=function(e){var t;return/\bis-style-link\b/.test(null==e||null===(t=e.attributes)||void 0===t?void 0:t.className)},pe=f.__,be=function(e){var t=e.borderRadius,n=e.setAttributes;return(0,r.createElement)(C.PanelBody,{title:pe("Border settings","sensei-lms"),initialOpen:!1},(0,r.createElement)(C.RangeControl,{label:pe("Border radius","sensei-lms"),value:t,min:0,max:50,allowReset:!0,onChange:function(e){return n({borderRadius:e})}}))};const ve=function(e){var t,n=e.attributes,s=e.setAttributes,o=n.borderRadius,l=n.align;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(_.BlockControls,null,(0,r.createElement)(_.BlockAlignmentToolbar,F({label:pe("Change button alignment","sensei-lms"),value:l||(null===(t=e.alignmentOptions)||void 0===t?void 0:t.default),onChange:function(e){e&&s({align:e})}},e.alignmentOptions))),(0,r.createElement)(_.InspectorControls,null,(0,r.createElement)(be,{borderRadius:o,setAttributes:s})))};var fe=f.__;const ge=function(e){var t=e.placeholder,n=e.attributes,o=e.setAttributes,l=n.text,i=(0,s.useSelect)((function(e){return e("core/block-editor").getSettings()}),[]).colors,a=void 0!==e.text,c=ue(v(v({},e),{},{colors:i}));return(0,r.createElement)("div",me(e),a?(0,r.createElement)("div",c,e.text):(0,r.createElement)(_.RichText,F({placeholder:t||fe("Add text…","sensei-lms"),value:l,onChange:function(e){return o({text:e})}},c,{tagName:"a",identifier:"text",withoutInteractiveFormatting:!0})),(0,r.createElement)(ve,e))};const he=function(e){var t=e.attributes,n=e.className,s=e.tagName,o=e.blockName,i=t.text,a=t.inContainer,c=t.align,u=s;s||(u=de({attributes:t})?"a":"button");var m=(0,r.createElement)("div",me({className:n,attributes:t}),(0,r.createElement)(_.RichText.Content,F({},ue({attributes:t}),{tagName:u,value:i})));return a?(0,r.createElement)("div",{className:E()(n,"sensei-buttons-container__button-block",(0,l.getBlockDefaultClassName)(o)+"__wrapper",p({},"sensei-buttons-container__button-align-".concat(c),c))},m):m};var ye=["settings","EditWrapper"],we=f.__,ke={Fill:{name:"default",label:we("Fill","sensei-lms")},Outline:{name:"outline",label:we("Outline","sensei-lms")},Link:{name:"link",label:we("Link","sensei-lms")}},Ee=function(e){var t,n=e.settings,s=e.EditWrapper,i=o(e,ye);i=v({alignmentOptions:{controls:["left","center","right","full"],default:"left"}},i);var a=n.styles?n.styles:[v(v({},ke.Fill),{},{isDefault:!0}),ke.Outline],c=null===(t=(0,ee.find)(a,"isDefault"))||void 0===t?void 0:t.name,u=le(c)(ge),m=le(c)(he);return(0,ee.merge)({name:"sensei-lms/button",title:"Sensei Button",category:"sensei-lms",attributes:{text:{type:"string",source:"html",selector:"a,button"},align:{type:"string"},borderRadius:{type:"number"},style:{type:"object"},isPreview:{type:"boolean",default:!1},inContainer:{type:"boolean",default:!1},buttonClassName:{type:"array",default:[]}},supports:{color:{gradients:!0},__experimentalColor:{gradients:!0},align:!1,html:!1},icon:te,styles:a,edit:function(e){var t=(0,r.createElement)(u,F({},e,i));return s?(0,r.createElement)(s,e,t):t},save:function(e){return(0,r.createElement)(m,F({},e,i,{blockName:n.name}))},getEditWrapperProps:function(e){var t=e.inContainer,s=e.align;return t?{className:E()("sensei-buttons-container__button-block",(0,l.getBlockDefaultClassName)(n.name)+"__wrapper",p({},"sensei-buttons-container__button-align-".concat(s),s))}:{}},example:{attributes:{align:"center",isPreview:!0}}},n)},Ce=f.__;const _e=Ee({settings:{name:"sensei-lms/button-complete-lesson",parent:["sensei-lms/lesson-actions"],title:Ce("Complete Lesson","sensei-lms"),description:Ce("Enable a student to mark the lesson as complete. This block is only displayed if the lesson has no quiz or the quiz is optional.","sensei-lms"),keywords:[Ce("Complete","sensei-lms"),Ce("Finish","sensei-lms"),Ce("Lesson","sensei-lms"),Ce("Button","sensei-lms")],attributes:{text:{default:Ce("Complete Lesson","sensei-lms")},buttonClassName:{default:["sensei-stop-double-submission"]}},styles:[v(v({},ke.Fill),{},{isDefault:!0}),ke.Outline,ke.Link]}});var xe=f.__;const Ne=Ee({settings:{name:"sensei-lms/button-next-lesson",title:xe("Next Lesson","sensei-lms"),parent:["sensei-lms/lesson-actions"],description:xe("Enable a student to move to the next lesson. This block is only displayed if the current lesson has been completed.","sensei-lms"),keywords:[xe("Next","sensei-lms"),xe("Continue","sensei-lms"),xe("Lesson","sensei-lms"),xe("Button","sensei-lms")],attributes:{text:{default:xe("Next Lesson","sensei-lms")}},styles:[v(v({},ke.Fill),{},{isDefault:!0}),ke.Outline,ke.Link]}});var Oe=f.__;const Be=Ee({settings:{name:"sensei-lms/button-reset-lesson",title:Oe("Reset Lesson","sensei-lms"),parent:["sensei-lms/lesson-actions"],description:Oe("Enable a student to reset their progress. This block is only displayed if the lesson is completed and has no quiz, or the quiz is completed and retakes are enabled.","sensei-lms"),keywords:[Oe("Reset","sensei-lms"),Oe("Restart","sensei-lms"),Oe("Revert","sensei-lms"),Oe("Progress","sensei-lms"),Oe("Lesson","sensei-lms"),Oe("Button","sensei-lms")],attributes:{text:{default:Oe("Reset Lesson","sensei-lms")},buttonClassName:{default:["sensei-stop-double-submission"]}},styles:[ke.Fill,v(v({},ke.Outline),{},{isDefault:!0}),ke.Link]}});var Pe=f.__;const Se=Ee({settings:{name:"sensei-lms/button-view-quiz",title:Pe("View Quiz","sensei-lms"),parent:["sensei-lms/lesson-actions"],description:Pe("Enable a student to view the quiz.","sensei-lms"),keywords:[Pe("Quiz","sensei-lms"),Pe("Lesson","sensei-lms"),Pe("Button","sensei-lms")],attributes:{text:{default:Pe("View Quiz","sensei-lms")}},styles:[v(v({},ke.Fill),{},{isDefault:!0}),ke.Outline,ke.Link]}});var Le,je;function ze(){return ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ze.apply(this,arguments)}const Ae=function(e){return i.createElement("svg",ze({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),Le||(Le=i.createElement("path",{d:"M16.181 17.381a7.61 7.61 0 0 1-2.13.133L15.778 20H18l-1.819-2.619zm-5.479-.953a7.712 7.712 0 0 1-2.12-1.928H5.5v-9h2.759A7.793 7.793 0 0 1 9.523 4H4v12h4.778L6 20h2.222l2.48-3.572zM15.541 8.944h-1.5v3.997h1.5V8.944zm0-1h-1.5V6.55h1.5v1.395z"})),je||(je=i.createElement("path",{d:"M20.79 9.768c0 3.425-2.714 6.269-6.145 6.269-3.43 0-6.145-2.844-6.145-6.269 0-3.424 2.714-6.268 6.145-6.268 3.43 0 6.145 2.844 6.145 6.268zm-6.145 4.769c2.565 0 4.645-2.135 4.645-4.769C19.29 7.135 17.21 5 14.645 5 12.08 5 10 7.135 10 9.768c0 2.634 2.08 4.769 4.645 4.769z"})))},Ie=JSON.parse('{"name":"sensei-lms/lesson-properties","category":"sensei-lms","textdomain":"sensei-lms","attributes":{"difficulty":{"type":"string","source":"meta","meta":"_lesson_complexity"},"length":{"type":"number","source":"meta","meta":"_lesson_length"}}}');var Te=["className","id","label","value","help","allowReset","resetLabel","onChange","suffix","hideLabelFromVision"],Fe=f.__;const Re=function(e){var t=e.className,n=e.id,s=e.label,l=e.value,i=e.help,a=e.allowReset,c=void 0!==a&&a,u=e.resetLabel,m=e.onChange,d=e.suffix,p=e.hideLabelFromVision,b=o(e,Te);return(0,r.createElement)(C.BaseControl,{id:n,label:s,help:i,hideLabelFromVision:p},(0,r.createElement)("div",{className:"sensei-number-control"},(0,r.createElement)("div",{className:"sensei-number-control__input-container"},(0,r.createElement)("input",F({className:E()("sensei-number-control__input components-text-control__input",t),type:"number",id:n,onChange:function(e){m(parseInt(e.target.value,10)||b.min||0)},value:null===l?"":l},b)),d&&(0,r.createElement)("span",{className:"sensei-number-control__input-suffix"},d)),c&&(0,r.createElement)(C.Button,{className:"sensei-number-control__button",isSmall:!0,isSecondary:!0,onClick:function(){return m(null)}},u||Fe("Reset","sensei-lms"))))};var qe=f.__,Me=(0,ne.applyFilters)("sensei-lms.Lesson.difficulties",[{label:qe("None","sensei-lms"),value:""},{label:qe("Easy","sensei-lms"),value:"easy"},{label:qe("Standard","sensei-lms"),value:"std"},{label:qe("Hard","sensei-lms"),value:"hard"}]),De=f.__,_n=f._n;const Ve=function(e){var t,n=e.className,s=e.attributes,o=s.difficulty,l=s.length,i=e.setAttributes;return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(_.InspectorControls,null,(0,r.createElement)(C.PanelBody,{title:De("Properties","sensei-lms")},(0,r.createElement)(Re,{id:"sensei-lesson-length",label:De("Length","sensei-lms"),min:0,step:1,value:l,onChange:function(e){return i({length:e})},suffix:_n("minute","minutes",l,"sensei-lms")}),(0,r.createElement)(C.SelectControl,{label:De("Difficulty","sensei-lms"),options:Me.map((function(e){return{label:e.label,value:e.value}})),value:o,onChange:function(e){return i({difficulty:e})}}))),(0,r.createElement)("div",{className:n},(0,r.createElement)("span",{className:E()("wp-block-sensei-lms-lesson-properties__length",{disabled:!l})},De("Length","sensei-lms")+": "+l+" "+_n("minute","minutes",l,"sensei-lms")),(0,r.createElement)("span",{className:E()("wp-block-sensei-lms-lesson-properties__separator",{disabled:!l||!o})},"|"),(0,r.createElement)("span",{className:E()("wp-block-sensei-lms-lesson-properties__difficulty",{disabled:!o})},De("Difficulty","sensei-lms")+": "+(null===(t=Me.find((function(e){return o===e.value})))||void 0===t?void 0:t.label))))};var He=f.__;d([Y,v(v({title:He("Lesson Properties","sensei-lms"),description:He("Add lesson properties such as length and difficulty.","sensei-lms"),keywords:[He("Metadata","sensei-lms"),He("Length","sensei-lms"),He("Complexity","sensei-lms"),He("Difficulty","sensei-lms"),He("Lesson Information","sensei-lms"),He("Lesson Properties","sensei-lms")],icon:Ae},Ie),{},{example:{attributes:{difficulty:"easy",length:10}},edit:Ve,save:function(){return null}}),_e,Ne,Be,Se]);var We=(0,s.subscribe)((function(){var e;!0===(null===(e=(0,s.select)("core/editor").getEditedPostAttribute("meta"))||void 0===e?void 0:e._needs_template)&&(setTimeout((0,s.dispatch)("core/block-editor").synchronizeTemplate,1),(0,s.dispatch)("core/editor").editPost({meta:{_needs_template:!1}}),We())}))}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);n(5207)})();