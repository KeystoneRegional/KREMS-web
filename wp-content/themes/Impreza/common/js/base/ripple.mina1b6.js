jQuery(function(c){"use strict";var p,e=(document.body||document.documentElement).style,u=void 0!==e.transition||void 0!==e.WebkitTransition;c.fn.mdRipple=function(){return this.each(function(){var a,r,s=c(this);s.find(".ripple-container").length||s.append('<span class="ripple-container"></span>'),a=s.find(".ripple-container");var l=null;c.isMobile&&s.on("touchstart touchmove",function(e){1===(e=e.originalEvent).touches.length&&(l=e.touches[0])}),s.on(c.isMobile?"touchstart":"mousedown",function(e){if(2===e.button)return!1;var t,n,i=c('<span class="ripple"></span>'),o=Math.max(s.outerWidth(),s.outerHeight())/Math.max(20,i.outerWidth())*2.5;if(r=a.offset(),a.append(i),c.isMobile){if(null===l)return;t=l.pageX-r.left,n=l.pageY-r.top,l=null}else t=e.pageX-r.left,n=e.pageY-r.top;c("body").hasClass("rtl")?(e=a.width()-t,i.css({right:e,top:n})):i.css({left:t,top:n}),window.getComputedStyle(i[0]).opacity,s.on(c.isMobile?"touchend":"mouseup mouseleave",function(){var e;(e=i).off(),p=Date.now()-+e.data("ripple-time"),p=p<400?400-p:100,u?setTimeout(function(){e.addClass("ripple-out")},p):e.animate({opacity:0},100,function(){e.trigger("transitionend")}),e.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){setTimeout(function(){e.remove()},300)})}),i.css({transform:"scale("+o+")"}),i.addClass("ripple-on"),i.data("ripple-time",Date.now())})})},jQuery(".w-btn[href], a.w-nav-anchor[href], .w-grid-item-anchor[rel], .w-image-h[href],  .w-gallery-item[href], .g-filters-item, .w-iconbox.style_circle a[href] .w-iconbox-icon, .w-socials-item-link[href], .w-sharing-item[href], .w-tabs-item, .w-message-close").mdRipple()});
