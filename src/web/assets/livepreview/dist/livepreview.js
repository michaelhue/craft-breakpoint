/*!
 * michaelhue/craft-breakpoint
 * (c) 2018-2019 Michael Hüneburg
 * https://github.com/michaelhue/craft-breakpoint
 */
var BreakpointLivePreview=function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=22)}([function(e,t){e.exports=Vuex},function(e,t){e.exports=Craft},function(e,t){e.exports=Garnish},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports=Vue},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTc2NTc1IiBkPSJNMTYuNSAyLjVjMy4zIDEuNiA1LjYgNC43IDYgOC41aDEuNEExMiAxMiAwIDAgMCAxMiAwaC0uN2wzLjggMy44IDEuNC0xLjN6bS02LjMtLjhjLS42LS41LTEuNS0uNS0yIDBMMS43IDguMmMtLjYuNi0uNiAxLjUgMCAyLjFsMTIgMTJjLjYuNiAxLjUuNiAyIDBsNi41LTYuM2MuNS0uNi41LTEuNSAwLTIuMWwtMTItMTJ6bTQuNiAxOS41bC0xMi0xMiA2LjQtNi40IDEyIDEyLTYuNCA2LjR6bS03LjMuM2ExMC41IDEwLjUgMCAwIDEtNi04LjVILjFBMTIgMTIgMCAwIDAgMTIgMjRoLjdsLTMuOC0zLjgtMS40IDEuM3oiLz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNNCA2aDE4VjRINGEyIDIgMCAwIDAtMiAydjExSDB2M2gxNHYtM0g0VjZ6bTE5IDJoLTZhMSAxIDAgMCAwLTEgMXYxMGMwIC42LjUgMSAxIDFoNmMuNiAwIDEtLjUgMS0xVjljMC0uNi0uNS0xLTEtMXptLTEgOWgtNHYtN2g0djd6Ii8+Cjwvc3ZnPgo="},function(e,t,n){"use strict";var r=n(3);n.n(r).a},function(e,t,n){"use strict";var r=n(4);n.n(r).a},function(e,t,n){"use strict";var r=n(5);n.n(r).a},function(e,t,n){"use strict";var r=n(6);n.n(r).a},function(e,t,n){"use strict";var r=n(7);n.n(r).a},function(e,t,n){"use strict";var r=n(8);n.n(r).a},function(e,t,n){"use strict";var r=n(9);n.n(r).a},function(e,t,n){"use strict";var r=n(10);n.n(r).a},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"toggle",function(){return f}),r.d(n,"setDragging",function(){return p}),r.d(n,"setPreset",function(){return d}),r.d(n,"setZoom",function(){return g}),r.d(n,"setCustomSize",function(){return b}),r.d(n,"modifySize",function(){return v}),r.d(n,"updateStageSize",function(){return m}),r.d(n,"rotate",function(){return h}),r.d(n,"expand",function(){return y});var i={};r.r(i),r.d(i,"enabled",function(){return O}),r.d(i,"dragging",function(){return w}),r.d(i,"presetOptions",function(){return S}),r.d(i,"zoomOptions",function(){return j}),r.d(i,"hasPreset",function(){return _}),r.d(i,"selectedPreset",function(){return P}),r.d(i,"selectedZoom",function(){return D}),r.d(i,"presetSize",function(){return M}),r.d(i,"customSize",function(){return C}),r.d(i,"screenSize",function(){return E}),r.d(i,"size",function(){return I}),r.d(i,"zoom",function(){return z}),r.d(i,"fitZoom",function(){return k}),r.d(i,"fitScale",function(){return A}),r.d(i,"scale",function(){return N});var o={};r.r(o),r.d(o,"setEnabled",function(){return T}),r.d(o,"setDragging",function(){return L}),r.d(o,"setSelectedPreset",function(){return $}),r.d(o,"setSelectedZoom",function(){return B}),r.d(o,"setCustomSize",function(){return Y}),r.d(o,"setPresetSize",function(){return Z}),r.d(o,"setStageSize",function(){return X});var a=r(11),s=r.n(a),u=r(0),c=function(n){return function(t){return function(e){return function(t){return function(e){return Math.min(e,t)}}(t)(function(t){return function(e){return Math.max(e,t)}}(n)(e))}}};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){(0,e.commit)("setEnabled",!e.getters.enabled)}function p(e,t){(0,e.commit)("setDragging",t)}function d(e){var t=e.commit,n=e.state,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,i=l(n.presets[r]||[null,0,0],3),o=i[1],a=i[2];t("setSelectedPreset",r),t("setPresetSize",{x:o,y:a})}function g(e){(0,e.commit)("setSelectedZoom",1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1)}function b(e,t){var n=e.commit,r=e.state,i=t.x,o=void 0===i?0:i,a=t.y,s=void 0===a?0:a;if(o!==r.x||s!==r.y){var u=c(100)(9999);return n("setCustomSize",{x:o?u(o):r.x,y:s?u(s):r.y})}}function v(e,t){var n=e.dispatch,r=e.getters,i=t.x,o=void 0===i?0:i,a=t.y,s=void 0===a?0:a;return n("setCustomSize",{x:r.size.x+o,y:r.size.y+s})}function m(e,t){var n=e.commit,r=e.state,i=t.x,o=t.y;i===r.stageX&&o===r.stageY||n("setStageSize",{x:i,y:o})}function h(e){var t=e.commit,n=e.getters;t(n.hasPreset?"setPresetSize":"setCustomSize",{x:n.size.y,y:n.size.x})}function y(e,t){var n=e.dispatch,r=e.state,i=t.x,o=void 0===i?0:i,a=t.y,s=void 0===a?0:a;n("setCustomSize",{x:r.stageX*o,y:r.stageY*s})}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=function(e){return e.enabled},w=function(e){return e.dragging},S=function(e){return e.presets.map(function(e){return x(e,1)[0]})},j=function(e){return e.zoomLevels.map(function(e){return Math.round(100*e)+"%"})},_=function(e){return-1<e.selectedPreset},P=function(e){return e.selectedPreset},D=function(e){return e.selectedZoom},M=function(e){return{x:e.presetX,y:e.presetY}},C=function(e){return{x:e.x,y:e.y}},E=function(e,t){return{x:Math.floor(t.size.x*t.scale),y:Math.floor(t.size.y*t.scale)}},I=function(e,t){return t.hasPreset?t.presetSize:e.x||e.y?t.customSize:{x:e.stageX,y:e.stageY}},z=function(e){return e.zoomLevels[e.selectedZoom]||0},k=function(e,t){return function(e){return Math.round(100*e)+"%"}(t.fitScale)},A=function(e,t){return Math.min(1,e.stageX/t.size.x,e.stageY/t.size.y)||1},N=function(e,t){return t.zoom||t.fitScale};function T(e,t){e.enabled=!!t}function L(e,t){e.dragging=!!t}function $(e,t){e.selectedPreset=t}function B(e,t){e.selectedZoom=t}function Y(e,t){var n=t.x,r=t.y;e.x=n,e.y=r}function Z(e,t){var n=t.x,r=t.y;e.presetX=n,e.presetY=r}function X(e,t){var n=t.x,r=t.y;e.stageX=n,e.stageY=r}function R(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.paths,r=void 0===n?[]:n,i=t.key,o=void 0===i?"vuex":i,a=t.storage,s=void 0===a?window.sessionStorage:a,u=function(n){return r.reduce(function(e,t){return n[t]?Object.assign(e,V({},t,n[t])):e},{})};return function(e){e.replaceState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(n,!0).forEach(function(e){V(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e.state,{},function(){try{var e=JSON.parse(s[o]||"{}");return u(e)}catch(e){}return{}}())),e.subscribe(function(e,t){s[o]=JSON.stringify(u(t))})}}function H(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J={enabled:!1,presets:[],zoomLevels:[],selectedPreset:-1,selectedZoom:-1,x:0,y:0,presetX:0,presetY:0,stageX:0,stageY:0,dragging:!1};function q(e){var t=0<arguments.length&&void 0!==e?e:{};return new u.Store({state:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(n,!0).forEach(function(e){U(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},J,{},t),actions:n,getters:i,mutations:o,plugins:[G({key:"BreakpointLivePreview",paths:["enabled","selectedPreset","selectedZoom","presetX","presetY"]})]})}function W(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bp-editor",class:{enabled:e.enabled,dragging:e.dragging}},[n("BreakpointButton"),e._v(" "),e.enabled?n("EditorToolbar"):e._e(),e._v(" "),n("EditorStage",[e.enabled?n("EditorDraggable"):e._e(),e._v(" "),n("EditorViewport",{attrs:{iframe:e.iframe}})],1)],1)}function F(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"bp-button btn",class:{active:e.enabled},attrs:{title:e.label,type:"button"},on:{click:e.toggle}},[n("img",{attrs:{src:r(13),alt:"Devices icon"}})])}F._withStripped=W._withStripped=!0;var K=r(1),Q=r.n(K),ee={fit:Q.a.t("breakpoint","Fit"),height:Q.a.t("breakpoint","Height"),presets:Q.a.t("breakpoint","Presets"),responsive:Q.a.t("breakpoint","Responsive"),rotate:Q.a.t("breakpoint","Rotate"),toggle:Q.a.t("breakpoint","Toggle Viewport Editor"),width:Q.a.t("breakpoint","Width"),zoom:Q.a.t("breakpoint","Zoom")},te={name:"BreakpointButton",data:function(){return{label:ee.toggle,insertAfter:".lp-editor-container > header > .btn"}},computed:Object(u.mapGetters)(["enabled"]),mounted:function(){document.querySelector(this.insertAfter).after(this.$el)},methods:Object(u.mapActions)(["toggle"])};r(14);function ne(e,t,n,r,i,o,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}var re=ne(te,F,[],!1,null,"3a00216e",null);re.options.__file="src/web/assets/livepreview/src/BreakpointButton.vue";function ie(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasPreset,expression:"!hasPreset"}],staticClass:"bp-draggable",style:t.style,attrs:{"data-axis":t.axisName,role:"presentation"},on:{dblclick:function(e){return e.preventDefault(),t.expand({x:1,y:1})}}},[n("div",{staticClass:"handle-x",on:{dblclick:function(e){return e.stopPropagation(),t.expand({x:1})}}}),t._v(" "),n("div",{staticClass:"handle-y",on:{dblclick:function(e){return e.stopPropagation(),t.expand({y:1})}}})])}var oe=re.exports;ie._withStripped=!0;var ae=r(2),se=r.n(ae);function ue(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function ce(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ue(n,!0).forEach(function(e){le(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ue(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fe={name:"EditorDraggable",props:{handle:{type:Number,default:20}},data:function(){return{mouseX:0,mouseY:0,axis:{x:!1,y:!1}}},computed:ce({},Object(u.mapGetters)(["screenSize","size","hasPreset","dragging"]),{style:function(){return{width:this.screenSize.x+this.handle+"px",height:this.screenSize.y+this.handle+"px",marginLeft:this.screenSize.x/-2+"px"}},axisName:function(){var e=this.axis,t=e.x,n=e.y;return t||n?t&&n?"both":t?"x":"y":"none"}}),mounted:function(){var e=this;this.$drag=new se.a.BaseDrag(this.$el,{onDragStart:function(){return e.startDrag(e.$drag)},onDrag:function(){return e.updateDrag(e.$drag)},onDragStop:function(){return e.endDrag(e.$drag)}})},beforeDestroy:function(){this.$drag.destroy(),delete this.$drag},methods:ce({},Object(u.mapActions)(["modifySize","setDragging","expand"]),{updateMouse:function(e){var t=e.mouseX,n=e.mouseY,r=t-this.mouseX,i=n-this.mouseY;return{mouseX:this.mouseX=t,mouseY:this.mouseY=n,deltaX:r,deltaY:i}},updateAxis:function(e,t){var n=this.$el.getBoundingClientRect(),r=n.top,i=n.left,o=n.width,a=n.height;this.axis.x=i+o-this.handle<=e,this.axis.y=r+a-this.handle<=t},startDrag:function(e){var t=this.updateMouse(e),n=t.mouseX,r=t.mouseY;this.updateAxis(n,r),this.setDragging(!0)},updateDrag:function(e){var t=this.updateMouse(e),n=t.deltaX,r=t.deltaY;0===n&&0===r||this.modifySize({x:this.axis.x?2*n:0,y:this.axis.y?r:0})},endDrag:function(){this.axis.x=this.axis.y=!1,this.setDragging(!1)}})},pe=(r(15),ne(fe,ie,[],!1,null,"a821b86c",null));pe.options.__file="src/web/assets/livepreview/src/EditorDraggable.vue";function de(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bp-toolbar",attrs:{role:"toolbar"}},[n("ToolbarSelect",{staticClass:"presets",attrs:{label:t.locale.presets,options:t.presetOptions,"default-option":t.locale.responsive,value:t.selectedPreset},on:{change:t.setPreset}}),t._v(" "),n("ToolbarInput",{staticClass:"x",attrs:{label:t.locale.width,value:t.size.x,disabled:t.hasPreset},on:{change:function(e){return t.setCustomSize({x:e})}}}),t._v(" "),n("small",{attrs:{role:"presentation"}},[t._v("×")]),t._v(" "),n("ToolbarInput",{staticClass:"y",attrs:{label:t.locale.height,value:t.size.y,disabled:t.hasPreset},on:{change:function(e){return t.setCustomSize({y:e})}}}),t._v(" "),n("ToolbarSelect",{staticClass:"zoom",attrs:{label:t.locale.zoom,options:t.zoomOptions,"default-option":t.locale.fit+" ("+t.fitZoom+")",value:t.selectedZoom},on:{change:t.setZoom}}),t._v(" "),n("ToolbarButton",{staticClass:"rotate",attrs:{label:t.locale.rotate,icon:t.iconRotate},on:{click:function(e){return t.rotate()}}})],1)}function ge(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{title:t.label,type:"button"},on:{click:function(e){return t.$emit("click")}}},[n("img",{staticClass:"icon",attrs:{src:t.icon,role:"presentation"}})])}var be=pe.exports;ge._withStripped=de._withStripped=!0;var ve={name:"ToolbarButton",props:{label:{type:String,required:!0},icon:{type:String,required:!0}}},me=(r(16),ne(ve,ge,[],!1,null,"507f71b7",null));me.options.__file="src/web/assets/livepreview/src/ToolbarButton.vue";function he(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{title:t.label,"aria-label":t.label,maxlength:t.maxlength,disabled:t.disabled,type:"text",pattern:"[0-9]+"},domProps:{value:t.value},on:{focus:function(e){return e.target.select()},change:function(e){return t.change()},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.change(1,e.shiftKey))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.change(-1,e.shiftKey))}]}})}var ye=me.exports;he._withStripped=!0;var xe={name:"ToolbarInput",props:{label:{type:String,default:null},value:{type:Number,default:0},maxlength:{type:Number,default:4},disabled:{type:Boolean,default:!1}},methods:{change:function(e,t){var n=0<arguments.length&&void 0!==e?e:0,r=1<arguments.length&&void 0!==t&&t?10:1;this.$emit("change",n*r+parseInt(this.$el.value))}}},Oe=(r(17),ne(xe,he,[],!1,null,"150142d5",null));Oe.options.__file="src/web/assets/livepreview/src/ToolbarInput.vue";function we(){var n=this,e=n.$createElement,r=n._self._c||e;return r("select",{directives:[{name:"model",rawName:"v-model.number",value:n.model,expression:"model",modifiers:{number:!0}}],attrs:{title:n.label,disabled:n.disabled},on:{keydown:[function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:(e.preventDefault(),n.step(-1))},function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?null:"button"in e&&2!==e.button?null:(e.preventDefault(),n.step(1))}],change:function(e){var t=Array.prototype.filter.call(e.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return n._n(t)});n.model=e.target.multiple?t:t[0]}}},[r("option",{domProps:{value:-1}},[n._v(n._s(n.defaultOption))]),n._v(" "),r("option",{attrs:{disabled:""}},[n._v("───")]),n._v(" "),n._l(n.options,function(e,t){return[n.isDivider(e)?r("option",{key:t,attrs:{disabled:""}},[n._v("───")]):r("option",{key:e,domProps:{value:t}},[n._v(n._s(e))])]})],2)}var Se=Oe.exports;we._withStripped=!0;var je=ne({name:"ToolbarSelect",props:{label:{type:String,required:!0},defaultOption:{type:String,required:!0},options:{type:Array,default:function(){return[]}},value:{type:Number,required:!0},min:{type:Number,default:-1}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("change",e)}},disabled:function(){return 0===this.options.length},max:function(){return this.options.length-1}},methods:{step:function(e){var t=0<arguments.length&&void 0!==e?e:0,n=c(this.min)(this.max)(this.value+t);if(this.isDivider(this.options[n])&&n!==this.min&&n!==this.max)return this.step(t+t);this.$emit("change",n)},isDivider:function(e){return"---"===e}}},we,[],!1,null,null,null);je.options.__file="src/web/assets/livepreview/src/ToolbarSelect.vue";var _e=je.exports,Pe=r(12),De=r.n(Pe),Me={name:"EditorToolbar",components:{ToolbarButton:ye,ToolbarInput:Se,ToolbarSelect:_e},data:function(){return{locale:ee,iconRotate:De.a}},computed:Object(u.mapGetters)(["presetOptions","zoomOptions","selectedPreset","selectedZoom","size","hasPreset","fitScale","fitZoom"]),methods:Object(u.mapActions)(["setPreset","setZoom","setCustomSize","rotate"])},Ce=(r(18),ne(Me,de,[],!1,null,"6e204ff8",null));Ce.options.__file="src/web/assets/livepreview/src/EditorToolbar.vue";function Ee(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"bp-stage"},[this._t("default")],2)}var Ie=Ce.exports;function ze(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Ee._withStripped=!0;var Ae={name:"EditorStage",computed:Object(u.mapGetters)(["enabled"]),watch:{enabled:"update"},mounted:function(){se.a.$win.on("resize",this.update),this.update()},beforeDestroy:function(){se.a.$win.off("resize",this.update)},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ze(n,!0).forEach(function(e){ke(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ze(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(u.mapActions)(["updateStageSize"]),{update:function(){this.updateStageSize({x:this.$el.offsetWidth,y:this.$el.offsetHeight})}})},Ne=(r(19),ne(Ae,Ee,[],!1,null,"5ab2b98a",null));Ne.options.__file="src/web/assets/livepreview/src/EditorStage.vue";function Te(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"bp-viewport",style:this.enabledStyle})}var Le=Ne.exports;function $e(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function Be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Te._withStripped=!0;var Ye={name:"EditorViewport",props:{iframe:{type:Object,required:!0,validate:function(e){return e instanceof HTMLElement}}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$e(n,!0).forEach(function(e){Be(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$e(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(u.mapGetters)(["enabled","size","scale"]),{style:function(){var e=this.size,t=e.x,n=e.y;return{width:t?"".concat(t,"px"):"100%",height:n?"".concat(n,"px"):"100%",transform:"scale(".concat(this.scale,")")}},enabledStyle:function(){return this.enabled?this.style:null}}),mounted:function(){this.$el.appendChild(this.iframe)}},Ze=(r(20),ne(Ye,Te,[],!1,null,"52a48d79",null));Ze.options.__file="src/web/assets/livepreview/src/EditorViewport.vue";var Xe={name:"BreakpointEditor",components:{BreakpointButton:oe,EditorDraggable:be,EditorStage:Le,EditorToolbar:Ie,EditorViewport:Ze.exports},props:{iframe:{type:Object,required:!0}},computed:Object(u.mapGetters)(["enabled","dragging"])},Re=(r(21),ne(Xe,W,[],!1,null,"70dc5404",null));Re.options.__file="src/web/assets/livepreview/src/BreakpointEditor.vue";var Ve=Re.exports;r.d(t,"BREAKPOINT_PROP",function(){return Ge}),r.d(t,"default",function(){return Ue});var Ge="__breakpoint";function He(e,t){if(void 0===e[Ge]){var n=e.$previewContainer.get(0),r=e.$iframe.get(0),i=function(e,t){return new s.a({store:e,render:function(e){return e(Ve,{props:t})}})}(q(t),{iframe:r}).$mount();n.appendChild(i.$el),e[Ge]=i}}function Ue(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};e.implement(function(e){return{afterUpdateIframe:function(){try{He(this,e)}catch(e){console.info("[michaelhue/craft-breakpoint]",e)}return this.base.apply(this,arguments)}}}(t))}}]).default;
//# sourceMappingURL=livepreview.js.map