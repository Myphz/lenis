import t from"tiny-emitter";import i from"virtual-scroll";class e extends t{constructor({lerp:t=.1,smooth:e=!0,direction:r="vertical",wrapper:s=window,content:o=document.body}={}){var l,h,n;super(),this.onWindowResize=()=>{this.wrapperWidth=window.innerWidth,this.wrapperHeight=window.innerHeight},this.onWrapperResize=t=>{const i=t[0];if(i){const t=i.contentRect;this.wrapperWidth=t.width,this.wrapperHeight=t.height}},this.onContentResize=t=>{const i=t[0];if(i){const t=i.contentRect;this.contentWidth=t.width,this.contentHeight=t.height}},this.onVirtualScroll=({deltaY:t,originalEvent:i})=>{this.stopped?i.preventDefault():(this.smooth&&!i.ctrlKey&&i.preventDefault(),this.targetScroll-=t,this.targetScroll=Math.max(0,Math.min(this.targetScroll,this.limit)))},this.onScroll=t=>{if(!(this.stopped||this.scrolling&&this.smooth)){const t=this.scroll;this.targetScroll=this.scroll=this.wrapperNode[this.scrollProperty],this.velocity=this.scroll-t,this.notify()}},this.wrapperNode=s,this.contentNode=o,this.lerp=t,this.smooth=e,this.direction=r,this.wrapperNode.addEventListener("scroll",this.onScroll,!1);const c=(null==(l=navigator)||null==(h=l.userAgentData)?void 0:h.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";this.virtualScroll=new i({el:this.wrapperNode,firefoxMultiplier:50,mouseMultiplier:c.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),this.virtualScroll.on(this.onVirtualScroll),this.wrapperNode===window?(this.wrapperNode.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize()):(this.wrapperHeight=this.wrapperNode.offsetHeight,this.wrapperWidth=this.wrapperNode.offsetWidth,this.wrapperObserver=new ResizeObserver(this.onWrapperResize),this.wrapperObserver.observe(this.wrapperNode)),this.contentHeight=this.contentNode.offsetHeight,this.contentWidth=this.contentNode.offsetWidth,this.contentObserver=new ResizeObserver(this.onContentResize),this.contentObserver.observe(this.contentNode),this.targetScroll=this.scroll=this.wrapperNode[this.scrollProperty],this.velocity=0}get scrollProperty(){let t;return t=this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop",t}start(){this.stopped=!1}stop(){this.stopped=!0}destroy(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize,!1),this.wrapperNode.removeEventListener("scroll",this.onScroll,!1),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()}get limit(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}raf(){if(this.stopped||!this.smooth)return;let t=this.scroll;var i;this.scroll=(1-(i=this.lerp))*this.scroll+i*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=t=this.targetScroll),this.velocity=this.scroll-t,this.scrolling&&(this._scrollTo(this.scroll),this.notify()),this.scrolling=this.scroll!==this.targetScroll}_scrollTo(t){"horizontal"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)}notify(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})}scrollTo(t,{offset:i=0,immediate:e=!1}={}){let r;if("number"==typeof t)r=t;else if("top"===t)r=0;else if("bottom"===t)r=this.limit;else{let i;if("string"==typeof t)i=document.querySelector(t);else{if(null==t||!t.nodeType)return;i=t}if(!t)return;let e=0;if(this.wrapperNode!==window){const t=this.wrapperNode.getBoundingClientRect();e="horizontal"===this.direction?t.left:t.top}const s=i.getBoundingClientRect();r=("horizontal"===this.direction?s.left:s.top)+this.scroll-e}r+=i,this.targetScroll=r,this.scrolling=!0,this.smooth&&!e||(this.scroll=r,this._scrollTo(this.scroll))}}export{e as default};
//# sourceMappingURL=lenis.modern.js.map
