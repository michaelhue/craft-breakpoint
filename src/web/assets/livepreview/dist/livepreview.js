var BreakpointLivePreview=function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=30)}([function(e,t){e.exports=Vuex},function(e,t){e.exports=Craft},function(e,t){e.exports=Garnish},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports=Vue},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjNTc2NTc1IiBkPSJNMTYuNSAyLjVjMy4zIDEuNiA1LjYgNC43IDYgOC41aDEuNEExMiAxMiAwIDAgMCAxMiAwaC0uN2wzLjggMy44IDEuNC0xLjN6bS02LjMtLjhjLS42LS41LTEuNS0uNS0yIDBMMS43IDguMmMtLjYuNi0uNiAxLjUgMCAyLjFsMTIgMTJjLjYuNiAxLjUuNiAyIDBsNi41LTYuM2MuNS0uNi41LTEuNSAwLTIuMWwtMTItMTJ6bTQuNiAxOS41bC0xMi0xMiA2LjQtNi40IDEyIDEyLTYuNCA2LjR6bS03LjMuM2ExMC41IDEwLjUgMCAwIDEtNi04LjVILjFBMTIgMTIgMCAwIDAgMTIgMjRoLjdsLTMuOC0zLjgtMS40IDEuM3oiLz4KPC9zdmc+Cg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNNCA2aDE4VjRINGEyIDIgMCAwIDAtMiAydjExSDB2M2gxNHYtM0g0VjZ6bTE5IDJoLTZhMSAxIDAgMCAwLTEgMXYxMGMwIC42LjUgMSAxIDFoNmMuNiAwIDEtLjUgMS0xVjljMC0uNi0uNS0xLTEtMXptLTEgOWgtNHYtN2g0djd6Ii8+Cjwvc3ZnPgo="},function(e,t,n){"use strict";var r=n(3);n.n(r).a},,function(e,t,n){"use strict";var r=n(4);n.n(r).a},,function(e,t,n){"use strict";var r=n(5);n.n(r).a},,function(e,t,n){"use strict";var r=n(6);n.n(r).a},,function(e,t,n){"use strict";var r=n(7);n.n(r).a},,function(e,t,n){"use strict";var r=n(8);n.n(r).a},,function(e,t,n){"use strict";var r=n(9);n.n(r).a},,function(e,t,n){"use strict";var r=n(10);n.n(r).a},,function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"toggle",function(){return d}),r.d(n,"setDragging",function(){return f}),r.d(n,"setPreset",function(){return p}),r.d(n,"setZoom",function(){return v}),r.d(n,"setCustomSize",function(){return g}),r.d(n,"modifySize",function(){return b}),r.d(n,"updateStageSize",function(){return m}),r.d(n,"rotate",function(){return h}),r.d(n,"expand",function(){return y});var i={};r.r(i),r.d(i,"enabled",function(){return S}),r.d(i,"dragging",function(){return w}),r.d(i,"presetOptions",function(){return _}),r.d(i,"zoomOptions",function(){return j}),r.d(i,"hasPreset",function(){return O}),r.d(i,"selectedPreset",function(){return M}),r.d(i,"selectedZoom",function(){return P}),r.d(i,"presetSize",function(){return C}),r.d(i,"customSize",function(){return D}),r.d(i,"screenSize",function(){return z}),r.d(i,"size",function(){return I}),r.d(i,"zoom",function(){return E}),r.d(i,"fitZoom",function(){return A}),r.d(i,"fitScale",function(){return N}),r.d(i,"scale",function(){return T});var o={};r.r(o),r.d(o,"setEnabled",function(){return k}),r.d(o,"setDragging",function(){return L}),r.d(o,"setSelectedPreset",function(){return $}),r.d(o,"setSelectedZoom",function(){return B}),r.d(o,"setCustomSize",function(){return Y}),r.d(o,"setPresetSize",function(){return Z}),r.d(o,"setStageSize",function(){return X});var a=r(11),u=r.n(a),s=r(0),c=function(a){return function(o){return function(e){return i=o,r=a,n=e,t=Math.max(n,r),Math.min(t,i);var t,n,r,i}}};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){(0,e.commit)("setEnabled",!e.getters.enabled)}function f(e,t){(0,e.commit)("setDragging",t)}function p(e){var t=e.commit,n=e.state,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,i=l(n.presets[r]||[null,0,0],3),o=i[1],a=i[2];t("setSelectedPreset",r),t("setPresetSize",{x:o,y:a})}function v(e){(0,e.commit)("setSelectedZoom",1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1)}function g(e,t){var n=e.commit,r=e.state,i=t.x,o=void 0===i?0:i,a=t.y,s=void 0===a?0:a;if(o!==r.x||s!==r.y){var u=c(100)(9999);return n("setCustomSize",{x:o?u(o):r.x,y:s?u(s):r.y})}}function b(e,t){var n=e.dispatch,r=e.getters,i=t.x,o=void 0===i?0:i,a=t.y,s=void 0===a?0:a;return n("setCustomSize",{x:r.size.x+o,y:r.size.y+s})}function m(e,t){var n=e.commit,r=e.state,i=t.x,o=t.y;i===r.stageX&&o===r.stageY||n("setStageSize",{x:i,y:o})}function h(e){var t=e.commit,n=e.getters;t(n.hasPreset?"setPresetSize":"setCustomSize",{x:n.size.y,y:n.size.x})}function y(e,t){var n=e.dispatch,r=e.state,i=t.x,o=void 0===i?0:i,a=t.y,s=void 0===a?0:a;n("setCustomSize",{x:r.stageX*o,y:r.stageY*s})}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=function(e){return e.enabled},w=function(e){return e.dragging},_=function(e){return e.presets.map(function(e){return x(e,1)[0]})},j=function(e){return e.zoomLevels.map(function(e){return Math.round(100*e)+"%"})},O=function(e){return-1<e.selectedPreset},M=function(e){return e.selectedPreset},P=function(e){return e.selectedZoom},C=function(e){return{x:e.presetX,y:e.presetY}},D=function(e){return{x:e.x,y:e.y}},z=function(e,t){return{x:Math.floor(t.size.x*t.scale),y:Math.floor(t.size.y*t.scale)}},I=function(e,t){return t.hasPreset?t.presetSize:e.x||e.y?t.customSize:{x:e.stageX,y:e.stageY}},E=function(e){return e.zoomLevels[e.selectedZoom]||0},A=function(e,t){return n=t.fitScale,Math.round(100*n)+"%";var n},N=function(e,t){return Math.min(1,e.stageX/t.size.x,e.stageY/t.size.y)||1},T=function(e,t){return t.zoom||t.fitScale};function k(e,t){e.enabled=!!t}function L(e,t){e.dragging=!!t}function $(e,t){e.selectedPreset=t}function B(e,t){e.selectedZoom=t}function Y(e,t){var n=t.x,r=t.y;e.x=n,e.y=r}function Z(e,t){var n=t.x,r=t.y;e.presetX=n,e.presetY=r}function X(e,t){var n=t.x,r=t.y;e.stageX=n,e.stageY=r}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.paths,r=void 0===t?[]:t,n=e.key,i=void 0===n?"vuex":n,o=e.storage,a=void 0===o?window.sessionStorage:o,s=function(n){return r.reduce(function(e,t){return n.hasOwnProperty(t)?Object.assign(e,R({},t,n[t])):e},{})};return function(e){e.replaceState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){R(t,e,n[e])})}return t}({},e.state,function(){try{var e=JSON.parse(a[i]||"{}");return s(e)}catch(e){}return{}}())),e.subscribe(function(e,t){a[i]=JSON.stringify(s(t))})}}var G={enabled:!1,presets:[],zoomLevels:[],selectedPreset:-1,selectedZoom:-1,x:0,y:0,presetX:0,presetY:0,stageX:0,stageY:0,dragging:!1};function H(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return new s.Store({state:function(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,r;t=i,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return i}({},G,e),actions:n,getters:i,mutations:o,plugins:[V({key:"BreakpointLivePreview",paths:["enabled","selectedPreset","selectedZoom","presetX","presetY"]})]})}var J=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"bp-editor",class:{enabled:n.enabled,dragging:n.dragging},nativeOn:{dragstart:function(e){return t=e,n.console.log("DRAGSTART",t);var t}}},[t("BreakpointButton"),n._v(" "),n.enabled?t("EditorToolbar"):n._e(),n._v(" "),t("EditorStage",[n.enabled?t("EditorDraggable"):n._e(),n._v(" "),t("EditorViewport",{attrs:{iframe:n.iframe}})],1)],1)},U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"bp-button btn",class:{active:e.enabled},attrs:{title:e.label,type:"button"},on:{click:e.toggle}},[n("img",{attrs:{src:r(13),alt:"Devices icon"}})])};U._withStripped=J._withStripped=!0;var q=r(1),W=r.n(q),F={fit:W.a.t("breakpoint","Fit"),height:W.a.t("breakpoint","Height"),presets:W.a.t("breakpoint","Presets"),responsive:W.a.t("breakpoint","Responsive"),rotate:W.a.t("breakpoint","Rotate"),toggle:W.a.t("breakpoint","Toggle screen sizes"),width:W.a.t("breakpoint","Width"),zoom:W.a.t("breakpoint","Zoom")},K={name:"BreakpointButton",data:function(){return{label:F.toggle,insertBefore:".lp-editor > .header > .btn.submit"}},computed:Object(s.mapGetters)(["enabled"]),mounted:function(){var e=document.querySelector(this.insertBefore);e.parentNode.insertBefore(this.$el,e)},methods:Object(s.mapActions)(["toggle"])};r(14);function Q(e,t,n,r,i,o,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}var ee=Q(K,U,[],!1,null,"3a00216e",null);ee.options.__file="src/web/assets/livepreview/src/BreakpointButton.vue";var te=ee.exports,ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasPreset,expression:"!hasPreset"}],staticClass:"bp-draggable",style:t.style,attrs:{"data-axis":t.axisName,role:"presentation"},on:{dblclick:function(e){e.preventDefault(),t.expand({x:1,y:1})}}},[n("div",{staticClass:"handle-x",on:{dblclick:function(e){e.stopPropagation(),t.expand({x:1})}}}),t._v(" "),n("div",{staticClass:"handle-y",on:{dblclick:function(e){e.stopPropagation(),t.expand({y:1})}}})])};ne._withStripped=!0;var re=r(2),ie=r.n(re);function oe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(e){ae(t,e,n[e])})}return t}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se={name:"EditorDraggable",props:{handle:{type:Number,default:20}},data:function(){return{mouseX:0,mouseY:0,axis:{x:!1,y:!1}}},computed:oe({},Object(s.mapGetters)(["screenSize","size","hasPreset","dragging"]),{style:function(){return{width:this.screenSize.x+this.handle+"px",height:this.screenSize.y+this.handle+"px",marginLeft:this.screenSize.x/-2+"px"}},axisName:function(){var e=this.axis,t=e.x,n=e.y;return t||n?t&&n?"both":t?"x":"y":"none"}}),mounted:function(){var e=this;this.$drag=new ie.a.BaseDrag(this.$el,{onDragStart:function(){return e.startDrag(e.$drag)},onDrag:function(){return e.updateDrag(e.$drag)},onDragStop:function(){return e.endDrag(e.$drag)}})},beforeDestroy:function(){this.$drag.destroy(),delete this.$drag},methods:oe({},Object(s.mapActions)(["modifySize","setDragging","expand"]),{updateMouse:function(e){var t=e.mouseX,n=e.mouseY,r=t-this.mouseX,i=n-this.mouseY;return{mouseX:this.mouseX=t,mouseY:this.mouseY=n,deltaX:r,deltaY:i}},updateAxis:function(e,t){var n=this.$el.getBoundingClientRect(),r=n.top,i=n.left,o=n.width,a=n.height;this.axis.x=i+o-this.handle<=e,this.axis.y=r+a-this.handle<=t},startDrag:function(e){var t=this.updateMouse(e),n=t.mouseX,r=t.mouseY;this.updateAxis(n,r),this.setDragging(!0)},updateDrag:function(e){var t=this.updateMouse(e),n=t.deltaX,r=t.deltaY;0===n&&0===r||this.modifySize({x:this.axis.x?2*n:0,y:this.axis.y?r:0})},endDrag:function(){this.axis.x=this.axis.y=!1,this.setDragging(!1)}})},ue=(r(16),Q(se,ne,[],!1,null,"a821b86c",null));ue.options.__file="src/web/assets/livepreview/src/EditorDraggable.vue";var ce=ue.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bp-toolbar",attrs:{role:"toolbar"}},[n("ToolbarSelect",{staticClass:"presets",attrs:{label:t.locale.presets,options:t.presetOptions,"default-option":t.locale.responsive,value:t.selectedPreset},on:{change:t.setPreset}}),t._v(" "),n("ToolbarInput",{staticClass:"x",attrs:{label:t.locale.width,value:t.size.x,disabled:t.hasPreset},on:{change:function(e){return t.setCustomSize({x:e})}}}),t._v(" "),n("small",{attrs:{role:"presentation"}},[t._v("×")]),t._v(" "),n("ToolbarInput",{staticClass:"y",attrs:{label:t.locale.height,value:t.size.y,disabled:t.hasPreset},on:{change:function(e){return t.setCustomSize({y:e})}}}),t._v(" "),n("ToolbarSelect",{staticClass:"zoom",attrs:{label:t.locale.zoom,options:t.zoomOptions,"default-option":t.locale.fit+" ("+t.fitZoom+")",value:t.selectedZoom},on:{change:t.setZoom}}),t._v(" "),n("ToolbarButton",{staticClass:"rotate",attrs:{label:t.locale.rotate,icon:t.iconRotate},on:{click:function(e){t.rotate()}}})],1)},de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{title:t.label,type:"button"},on:{click:function(e){t.$emit("click")}}},[n("img",{staticClass:"icon",attrs:{src:t.icon,role:"presentation"}})])};de._withStripped=le._withStripped=!0;var fe={name:"ToolbarButton",props:{label:{type:String,required:!0},icon:{type:String,required:!0}}},pe=(r(18),Q(fe,de,[],!1,null,"507f71b7",null));pe.options.__file="src/web/assets/livepreview/src/ToolbarButton.vue";var ve=pe.exports,ge=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{title:t.label,"aria-label":t.label,maxlength:t.maxlength,disabled:t.disabled,type:"text",pattern:"[0-9]+"},domProps:{value:t.value},on:{focus:function(e){return e.target.select()},change:function(e){t.change()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.change(1,e.shiftKey)},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.change(-1,e.shiftKey)}]}})};ge._withStripped=!0;var be={name:"ToolbarInput",props:{label:{type:String,default:null},value:{type:Number,default:0},maxlength:{type:Number,default:4},disabled:{type:Boolean,default:!1}},methods:{change:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]&&arguments[1]?10:1;this.$emit("change",e*t+parseInt(this.$el.value))}}},me=(r(20),Q(be,ge,[],!1,null,"150142d5",null));me.options.__file="src/web/assets/livepreview/src/ToolbarInput.vue";var he=me.exports,ye=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("select",{directives:[{name:"model",rawName:"v-model.number",value:n.model,expression:"model",modifiers:{number:!0}}],attrs:{title:n.label,disabled:n.disabled},on:{keydown:[function(e){return"button"in e||!n._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?"button"in e&&0!==e.button?null:(e.preventDefault(),void n.step(-1)):null},function(e){return"button"in e||!n._k(e.keyCode,"right",39,e.key,["Right","ArrowRight"])?"button"in e&&2!==e.button?null:(e.preventDefault(),void n.step(1)):null}],change:function(e){var t=Array.prototype.filter.call(e.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return n._n(t)});n.model=e.target.multiple?t:t[0]}}},[r("option",{domProps:{value:-1}},[n._v(n._s(n.defaultOption))]),n._v(" "),r("option",{attrs:{disabled:""}},[n._v("───")]),n._v(" "),n._l(n.options,function(e,t){return[n.isDivider(e)?r("option",{key:t,attrs:{disabled:""}},[n._v("───")]):r("option",{key:e,domProps:{value:t}},[n._v(n._s(e))])]})],2)};ye._withStripped=!0;var xe=Q({name:"ToolbarSelect",props:{label:{type:String,required:!0},defaultOption:{type:String,required:!0},options:{type:Array,default:function(){return[]}},value:{type:Number,required:!0},min:{type:Number,default:-1}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("change",e)}},disabled:function(){return 0===this.options.length},max:function(){return this.options.length-1}},methods:{step:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=c(this.min)(this.max)(this.value+e);if(this.isDivider(this.options[t])&&t!==this.min&&t!==this.max)return this.step(e+e);this.$emit("change",t)},isDivider:function(e){return"---"===e}}},ye,[],!1,null,null,null);xe.options.__file="src/web/assets/livepreview/src/ToolbarSelect.vue";var Se=xe.exports,we=r(12),_e=r.n(we),je={name:"EditorToolbar",components:{ToolbarButton:ve,ToolbarInput:he,ToolbarSelect:Se},data:function(){return{locale:F,iconRotate:_e.a}},computed:Object(s.mapGetters)(["presetOptions","zoomOptions","selectedPreset","selectedZoom","size","hasPreset","fitScale","fitZoom"]),methods:Object(s.mapActions)(["setPreset","setZoom","setCustomSize","rotate"])},Oe=(r(22),Q(je,le,[],!1,null,"6e204ff8",null));Oe.options.__file="src/web/assets/livepreview/src/EditorToolbar.vue";var Me=Oe.exports,Pe=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"bp-stage"},[this._t("default")],2)};Pe._withStripped=!0;var Ce={name:"EditorStage",computed:Object(s.mapGetters)(["enabled"]),watch:{enabled:"update"},mounted:function(){ie.a.$win.on("resize",this.update),this.update()},beforeDestroy:function(){ie.a.$win.off("resize",this.update)},methods:function(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,r;t=i,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return i}({},Object(s.mapActions)(["updateStageSize"]),{update:function(){this.updateStageSize({x:this.$el.offsetWidth,y:this.$el.offsetHeight})}})},De=(r(24),Q(Ce,Pe,[],!1,null,"5ab2b98a",null));De.options.__file="src/web/assets/livepreview/src/EditorStage.vue";var ze=De.exports,Ie=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"bp-viewport",style:this.enabledStyle})};Ie._withStripped=!0;var Ee={name:"EditorViewport",props:{iframe:{type:Object,required:!0,validate:function(e){return e instanceof HTMLElement}}},computed:function(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,r;t=i,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r})}return i}({},Object(s.mapGetters)(["enabled","size","scale"]),{style:function(){var e=this.size,t=e.x,n=e.y;return{width:t?"".concat(t,"px"):"100%",height:n?"".concat(n,"px"):"100%",transform:"scale(".concat(this.scale,")")}},enabledStyle:function(){return this.enabled?this.style:null}}),mounted:function(){this.$el.appendChild(this.iframe)}},Ae=(r(26),Q(Ee,Ie,[],!1,null,"52a48d79",null));Ae.options.__file="src/web/assets/livepreview/src/EditorViewport.vue";var Ne={name:"BreakpointEditor",components:{BreakpointButton:te,EditorDraggable:ce,EditorStage:ze,EditorToolbar:Me,EditorViewport:Ae.exports},props:{iframe:{type:Object,required:!0}},computed:Object(s.mapGetters)(["enabled","dragging"])},Te=(r(28),Q(Ne,J,[],!1,null,"70dc5404",null));Te.options.__file="src/web/assets/livepreview/src/BreakpointEditor.vue";var ke=Te.exports;function Le(o){var a,s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return o.on("enter",function(){if(!a){var e,t,n=H(s),r=o.$iframeContainer.get(0),i=o.$iframe.get(0);a=(e=n,t={iframe:i},new u.a({store:e,render:function(e){return e(ke,{props:t})}})).$mount(),r.appendChild(a.$el)}}),a}r.d(t,"default",function(){return Le})}]).default;
//# sourceMappingURL=livepreview.js.map