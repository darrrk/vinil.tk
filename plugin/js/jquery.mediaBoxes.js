!function(e,t,a){var i=function(i,o){function n(e){e.find(P+", ."+j).find(q+":not([data-popupTrigger])").each(function(){var e=t(this),i=e.find("div[data-popup]").eq(0);e.attr("data-popupTrigger","yes");var o="mfp-image";"iframe"==i.data("type")?o="mfp-iframe":"inline"==i.data("type")?o="mfp-inline":"ajax"==i.data("type")&&(o="mfp-ajax");var n=e.find(".mb-open-popup").addBack(".mb-open-popup");n.attr("data-mfp-src",i.data("popup")).addClass(o),i.attr("title")!=a&&n.attr("mfp-title",i.attr("title"))})}function s(e,i){function o(e){var i=t(e.img),o=i.parents(".image-with-dimensions");o[0]!=a&&(e.isLoaded?i.fadeIn(400,function(){o.removeClass("image-with-dimensions")}):(o.removeClass("image-with-dimensions"),i.hide(),o.addClass("broken-image-here")))}e.find(P).find(q+":not([data-imageconverted])").each(function(){var o=t(this),n=o.find("div[data-thumbnail]").eq(0),s=o.find("div[data-popup]").eq(0),r=n.data("thumbnail");if(n[0]==a&&(n=s,r=s.data("popup")),0!=i||0!=e.data("settings").waitForAllThumbsNoMatterWhat||n.data("width")==a&&n.data("height")==a){o.attr("data-imageconverted","yes");var d=n.attr("title");d==a&&(d=r);var l=t('<img title="'+d+'" src="'+r+'" />');1==i&&(l.attr("data-dont-wait-for-me","yes"),n.addClass("image-with-dimensions"),e.data("settings").waitUntilThumbLoads&&l.hide()),n.addClass("media-box-thumbnail-container").prepend(l)}}),1==i&&e.find(".image-with-dimensions").imagesLoadedMB().always(function(e){for(index in e.images){var t=e.images[index];o(t)}}).progress(function(e,t){o(t)})}function r(e){e.find(P).each(function(){var e=t(this),i=e.find(q),o=i.find("div[data-thumbnail]").eq(0),n=i.find("div[data-popup]").eq(0);o[0]==a&&(o=n);var s=e.css("display");"none"==s&&e.css("margin-top",99999999999999).show(),i.width(o.width()),i.height(o.height()),"none"==s&&e.css("margin-top",0).hide()})}function d(e){e.find(P).find(q).each(function(){var i=t(this),o=i.find("div[data-thumbnail]").eq(0),n=i.find("div[data-popup]").eq(0);o[0]==a&&(o=n);var s=parseFloat(o.data("width")),r=parseFloat(o.data("height")),d=i.parents(P).width()-e.data("settings").horizontalSpaceBetweenBoxes,l=r*d/s;o.css("width",d),(o.data("width")!=a||o.data("height")!=a)&&o.css("height",Math.floor(l))})}function l(e,i,o){var n,s=e.find(P),r=!1;n="auto"==i?r?100/o+"%":Math.floor((e.width()-1)/o):i,e.find(".media-boxes-grid-sizer").css("width",n),s.each(function(){var e=t(this),i=e.data("columns");i!=a&&parseInt(o)>=parseInt(i)?r?e.css("width",parseFloat(100/o)*i+"%"):e.css("width",n*parseInt(i)):r?e.css("width",100/o+"%"):e.css("width",n)})}function c(){var t=e,a="inner";return"innerWidth"in e||(a="client",t=document.documentElement||document.body),{width:t[a+"Width"],height:t[a+"Height"]}}function f(e){var t=!1;for(var a in e.data("settings").resolutions){var i=e.data("settings").resolutions[a];if(i.maxWidth>=c().width){l(e,i.columnWidth,i.columns),t=!0;break}}0==t&&l(e,e.data("settings").columnWidth,e.data("settings").columns)}function p(e){var a=t('<div class="media-box-container"></div').css({"margin-left":e.data("settings").horizontalSpaceBetweenBoxes,"margin-bottom":e.data("settings").verticalSpaceBetweenBoxes}),i=e.find(P+":not([data-wrapper-added])").attr("data-wrapper-added","yes");i.wrapInner(a)}function m(e){if(0!=e.data("settings").thumbnailOverlay){var i=e.find(P+":not([data-set-overlay-for-hover-effect])").attr("data-set-overlay-for-hover-effect","yes");i.find(".thumbnail-overlay").wrapInner("<div class='aligment'><div class='aligment'></div></div>"),i.each(function(){var i=t(this),o=i.find(q),n=e.data("settings").overlayEffect;if(o.data("overlay-effect")!=a&&(n=o.data("overlay-effect")),"push-up"==n||"push-down"==n||"push-up-100%"==n||"push-down-100%"==n){var s=o.find(".media-box-thumbnail-container"),r=o.find(".thumbnail-overlay").css("position","relative");("push-up-100%"==n||"push-down-100%"==n)&&r.outerHeight(s.outerHeight(!1));var d=r.outerHeight(!1),l=t('<div class="wrapper-for-some-effects"></div');"push-up"==n||"push-up-100%"==n?r.appendTo(o):("push-down"==n||"push-down-100%"==n)&&(r.prependTo(o),l.css("margin-top",-d)),o.wrapInner(l)}else if("reveal-top"==n||"reveal-top-100%"==n){i.addClass("position-reveal-effect");var c=i.find(".thumbnail-overlay").css("top",0);"reveal-top-100%"==n&&c.css("height","100%")}else if("reveal-bottom"==n||"reveal-bottom-100%"==n){i.addClass("position-reveal-effect").addClass("position-bottom-reveal-effect");var c=i.find(".thumbnail-overlay").css("bottom",0);"reveal-bottom-100%"==n&&c.css("height","100%")}else if("direction"==n.substr(0,9))i.find(".thumbnail-overlay").css("height","100%");else if("fade"==n){var f=i.find(".thumbnail-overlay").hide();f.css({height:"100%",top:"0",left:"0"}),f.find(".fa").css({scale:1.4})}})}}function h(e){var i=e.find(P);i.each(function(){var i=t(this),o=i.find(q),n=e.data("settings").overlayEffect;o.data("overlay-effect")!=a&&(n=o.data("overlay-effect")),"direction"==n.substr(0,9)&&o.find(".thumbnail-overlay").hide()}),e.isotopeMB("layout")}function u(){var e=O.find(P+", ."+j),t=k();e.filter(t).removeClass("hidden-media-boxes-by-filter").addClass("visible-media-boxes-by-filter"),e.not(t).addClass("hidden-media-boxes-by-filter").removeClass("visible-media-boxes-by-filter")}function v(e,t){O.addClass("filtering-isotope"),D[t]=e,O.isotopeMB({filter:g(D)}),u(),C().length>0?L():(M(),w())}function g(e){for(var t in e){var i=e[t];i==a&&(e[t]="*")}var o="";for(var t in e){var i=e[t];""==o?o=t:o.split(",").length<i.split(",").length&&(o=t)}var n=e[o];for(var t in e)if(t!=o)for(var s=e[t].split(","),r=0;r<s.length;r++){for(var d=n.split(","),l=[],c=0;c<d.length;c++)"*"==d[c]&&"*"==s[r]?s[r]="":("*"==s[r]&&(s[r]=""),"*"==d[c]&&(d[c]="")),l.push(d[c]+s[r]);n=l.join(",")}return n}function b(e){if(e!=a){var i=O.find("."+F+", ."+j);""==e?i.addClass("search-match"):(i.removeClass("search-match"),O.find(E.searchTarget).each(function(){var a=t(this),i=a.parents("."+F+", ."+j);-1!==a.text().toLowerCase().indexOf(e.toLowerCase())&&i.addClass("search-match")})),setTimeout(function(){v(".search-match","search")},100)}}function y(e){var t=e.data("sort-ascending");return t==a&&(t=!0),e.data("sort-toggle")&&1==e.data("sort-toggle")&&e.data("sort-ascending",!t),t}function w(){var e=x().length;return e<E.minBoxesPerFilter&&B().length>0?(W(E.minBoxesPerFilter-e),!0):!1}function x(){var e=O.find(P),t=k();return"*"!=t&&(e=e.filter(t)),e}function C(){var e=x().not(".media-box-loaded");return e}function k(){var e=O.data("isotopeMB").options.filter;return(""==e||e==a)&&(e="*"),e}function B(e){var t=O.find("."+j),i=k();return"*"!=i&&e==a&&(t=t.filter(i)),t}function L(){_.html(E.LoadingWord),_.removeClass("media-boxes-load-more"),_.addClass("media-boxes-loading")}function T(){X++,L()}function z(){X--,0==X&&M()}function M(){_.removeClass("media-boxes-load-more"),_.removeClass("media-boxes-loading"),_.removeClass("media-boxes-no-more-entries"),B().length>0?(_.html(E.loadMoreWord),_.addClass("media-boxes-load-more")):(_.html(E.noMoreEntriesWord),_.addClass("media-boxes-no-more-entries"))}function W(e,a){if(0!=_.hasClass("media-boxes-load-more")){T();var i=[];B(a).each(function(a){var o=t(this);e>=a+1&&(o.removeClass(j).addClass(F),o.hide(),i.push(this))}),O.isotopeMB("insert",t(i),function(){z()})}}function S(){if("#!"!=location.hash.substr(0,2))return null;var e=location.href.split("#!")[1],t=e.split("||")[1],a=e.split("||")[0];return{hash:e,id:t,src:a}}function I(){var e=t.magnificPopup.instance;if(e){var a=S();if(!a&&e.isOpen)e.close();else if(a)if(e.isOpen&&e.currItem&&e.currItem.el.parents(".media-boxes-container").attr("id")==a.id){if(e.currItem.el.attr("data-mfp-src")!=a.src){var i=null;t.each(e.items,function(e,o){var n=o.parsed?o.el:t(o);return n.attr("data-mfp-src")==a.src?(i=e,!1):void 0}),null!==i&&e.goTo(i)}}else O.filter('[id="'+a.id+'"]').find('.mb-open-popup[data-mfp-src="'+a.src+'"]').trigger("click")}}var E=t.extend({},t.fn.mediaBoxes.defaults,o),O=t(i).addClass("media-boxes-container"),P=".media-box",q=".media-box-image",F="media-box",j="media-box-hidden",A=Modernizr.csstransitions?"transition":"animate",D={};"default"==E.overlayEasing&&(E.overlayEasing="transition"==A?"_default":"swing");var _=t('<div class="media-boxes-load-more media-boxes-load-more-button"></div>').insertAfter(O);E.resolutions.sort(function(e,t){return e.maxWidth-t.maxWidth}),O.data("settings",E),O.css({"margin-left":-E.horizontalSpaceBetweenBoxes}),O.find(P).removeClass(F).addClass(j);var H=t(E.filterContainer),R=H.find(E.filter).filter(".selected").attr("data-filter");D.filter=R,b(t(E.search).val());var N=t(E.sortContainer).find(E.sort).filter(".selected"),U=N.attr("data-sort-by"),Q=y(N);O.append('<div class="media-boxes-grid-sizer"></div>'),O.isotopeMB({itemSelector:P,filter:g(D),masonry:{columnWidth:".media-boxes-grid-sizer"},getSortData:E.getSortData,sortBy:U,sortAscending:Q}),u(),t.extend(IsotopeMB.prototype,{resize:function(){var e=t(this.element);f(e),d(e),r(e),h(e),this.isResizeBound&&this.needsResizeLayout()&&this.layout()}}),t.extend(IsotopeMB.prototype,{_setContainerMeasure:function(e,i){if(e!==a){var o=this.size;o.isBorderBox&&(e+=i?o.paddingLeft+o.paddingRight+o.borderLeftWidth+o.borderRightWidth:o.paddingBottom+o.paddingTop+o.borderTopWidth+o.borderBottomWidth),e=Math.max(e,0),this.element.style[i?"width":"height"]=e+"px";var n=t(this.element);t.waypoints("refresh"),n.addClass("lazy-load-ready"),n.removeClass("filtering-isotope")}}}),t.extend(IsotopeMB.prototype,{insert:function(e,i){var o=this.addItems(e);if(o.length){var l,c,h=t(this.element),u=h.find("."+j)[0],v=o.length;for(l=0;v>l;l++)c=o[l],u!=a?this.element.insertBefore(c.element,u):this.element.appendChild(c.element);var g=function(){var e=this._filter(o);for(this._noTransition(function(){this.hide(e)}),l=0;v>l;l++)o[l].isLayoutInstant=!0;for(this.arrange(),l=0;v>l;l++)delete o[l].isLayoutInstant;this.reveal(e)},b=function(e){var a=t(e.img),i=a.parents("div[data-thumbnail], div[data-popup]");0==e.isLoaded&&(a.hide(),i.addClass("broken-image-here"))},y=this;p(h),f(h),d(h),n(h),s(h,!1),h.find("img:not([data-dont-wait-for-me])").imagesLoadedMB().always(function(){0==E.waitForAllThumbsNoMatterWhat&&s(h,!0),h.find(P).addClass("media-box-loaded"),g.call(y),r(h),m(h),"function"==typeof i&&i();for(index in y.images){var e=y.images[index];b(e)}}).progress(function(e,t){b(t)})}}}),H.find(E.filter).on("click",function(e){var i=t(this),o=i.parents(E.filterContainer);o.find(E.filter).removeClass("selected"),i.addClass("selected");var n=i.attr("data-filter"),s="filter";o.data("id")!=a&&(s=o.data("id")),v(n,s),e.preventDefault()}),t(E.search).on("keyup",function(){var e=t(this).val();b(e)}),t(E.sortContainer).find(E.sort).on("click",function(){var e=t(this);e.parents(E.sortContainer).find(E.sort).removeClass("selected"),e.addClass("selected");var a=e.attr("data-sort-by");return O.isotopeMB({sortBy:a,sortAscending:y(e)}),!1});var X=0;W(E.boxesToLoadStart,!0),_.on("click",function(){W(E.boxesToLoad)}),E.lazyLoad&&O.waypoint(function(e){O.hasClass("lazy-load-ready")&&"down"==e&&0==O.hasClass("filtering-isotope")&&(O.removeClass("lazy-load-ready"),W(E.boxesToLoad))},{context:e,continuous:!0,enabled:!0,horizontal:!1,offset:"bottom-in-view",triggerOnce:!1}),O.on("mouseenter.hoverdir, mouseleave.hoverdir",q,function(e){if(0!=E.thumbnailOverlay){var i=t(this),o=E.overlayEffect;i.data("overlay-effect")!=a&&(o=i.data("overlay-effect"));var n=e.type,s=i.find(".media-box-thumbnail-container"),r=i.find(".thumbnail-overlay"),d=r.outerHeight(!1);if("push-up"==o||"push-up-100%"==o){var l=i.find("div.wrapper-for-some-effects");"mouseenter"===n?l.stop().show()[A]({"margin-top":-d},E.overlaySpeed,E.overlayEasing):l.stop()[A]({"margin-top":0},E.overlaySpeed,E.overlayEasing)}else if("push-down"==o||"push-down-100%"==o){var l=i.find("div.wrapper-for-some-effects");"mouseenter"===n?l.stop().show()[A]({"margin-top":0},E.overlaySpeed,E.overlayEasing):l.stop()[A]({"margin-top":-d},E.overlaySpeed,E.overlayEasing)}else if("reveal-top"==o||"reveal-top-100%"==o)"mouseenter"===n?s.stop().show()[A]({"margin-top":d},E.overlaySpeed,E.overlayEasing):s.stop()[A]({"margin-top":0},E.overlaySpeed,E.overlayEasing);else if("reveal-bottom"==o||"reveal-bottom-100%"==o)"mouseenter"===n?s.stop().show()[A]({"margin-top":-d},E.overlaySpeed,E.overlayEasing):s.stop()[A]({"margin-top":0},E.overlaySpeed,E.overlayEasing);else if("direction"==o.substr(0,9)){var c=Y(i,{x:e.pageX,y:e.pageY});"direction-top"==o?c=0:"direction-bottom"==o?c=2:"direction-right"==o?c=1:"direction-left"==o&&(c=3);var f=G(c,i);"mouseenter"==n?(r.css({left:f.from,top:f.to}),r.stop().show().fadeTo(0,1,function(){t(this).stop()[A]({left:0,top:0},E.overlaySpeed,E.overlayEasing)})):"direction-aware-fade"==o?r.fadeOut(700):r.stop()[A]({left:f.from,top:f.to},E.overlaySpeed,E.overlayEasing)}else if("fade"==o){"mouseenter"==n?(r.stop().fadeOut(0),r.fadeIn(E.overlaySpeed)):(r.stop().fadeIn(0),r.fadeOut(E.overlaySpeed));var p=r.find(".fa");"mouseenter"==n?(p.css({scale:1.4}),p[A]({scale:1},200)):(p.css({scale:1}),p[A]({scale:1.4},200))}}});var Y=function(e,t){var a=e.width(),i=e.height(),o=(t.x-e.offset().left-a/2)*(a>i?i/a:1),n=(t.y-e.offset().top-i/2)*(i>a?a/i:1),s=Math.round((Math.atan2(n,o)*(180/Math.PI)+180)/90+3)%4;return s},G=function(e,t){var a,i;switch(e){case 0:E.reverse?(a=0,i=-t.height()):(a=0,i=-t.height());break;case 1:E.reverse?(a=-t.width(),i=0):(a=t.width(),i=0);break;case 2:E.reverse?(a=0,i=-t.height()):(a=0,i=t.height());break;case 3:E.reverse?(a=t.width(),i=0):(a=-t.width(),i=0)}return{from:a,to:i}},J=".mb-open-popup[data-mfp-src]";if(E.considerFilteringInPopup&&(J=P+":not(.hidden-media-boxes-by-filter) .mb-open-popup[data-mfp-src], ."+j+":not(.hidden-media-boxes-by-filter) .mb-open-popup[data-mfp-src]"),E.showOnlyLoadedBoxesInPopup&&(J=P+":visible .mb-open-popup[data-mfp-src]"),E.magnificPopup&&O.magnificPopup({delegate:J,type:"image",removalDelay:200,closeOnContentClick:!1,alignTop:E.alignTop,preload:E.preload,mainClass:"my-mfp-slide-bottom",gallery:{enabled:E.gallery},closeMarkup:'<button title="%title%" class="mfp-close"></button>',titleSrc:"title",iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"https://player.vimeo.com/video/%id%?autoplay=1"}},markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-bottom-bar" style="margin-top:4px;"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>'},callbacks:{change:function(){var e=t(this.currItem.el);setTimeout(function(){t(".mfp-title").html(e.attr("mfp-title")!=a?e.attr("mfp-title"):"")},5),E.deepLinking&&(location.hash="#!"+e.attr("data-mfp-src")+"||"+e.parents(".media-boxes-container").attr("id"))},beforeOpen:function(){this.container.data("scrollTop",parseInt(t(e).scrollTop()))},open:function(){t("html, body").scrollTop(this.container.data("scrollTop"))},close:function(){E.deepLinking&&(e.location.hash="#!")}}}),E.deepLinking){var K=S();K&&O.filter('[id="'+K.id+'"]').find('.mb-open-popup[data-mfp-src="'+K.src+'"]').trigger("click"),e.addEventListener?e.addEventListener("hashchange",I,!1):e.attachEvent&&e.attachEvent("onhashchange",I)}return this};t.fn.mediaBoxes=function(e){return this.each(function(){var a=t(this);if(a.data("mediaBoxes"))return a.data("mediaBoxes");var o=new i(this,e);a.data("mediaBoxes",o)})},t.fn.mediaBoxes.defaults={boxesToLoadStart:8,boxesToLoad:4,minBoxesPerFilter:0,lazyLoad:!0,horizontalSpaceBetweenBoxes:15,verticalSpaceBetweenBoxes:15,columnWidth:"auto",columns:4,resolutions:[{maxWidth:960,columnWidth:"auto",columns:3},{maxWidth:650,columnWidth:"auto",columns:2},{maxWidth:450,columnWidth:"auto",columns:1}],filterContainer:"#filter",filter:"a",search:"",searchTarget:".media-box-title",sortContainer:"",sort:"a",getSortData:{title:".media-box-title",text:".media-box-text"},waitUntilThumbLoads:!0,waitForAllThumbsNoMatterWhat:!1,thumbnailOverlay:!0,overlayEffect:"fade",overlaySpeed:200,overlayEasing:"default",showOnlyLoadedBoxesInPopup:!1,considerFilteringInPopup:!0,deepLinking:!0,gallery:!0,LoadingWord:"Loading...",loadMoreWord:"Load More",noMoreEntriesWord:"",alignTop:!1,preload:[0,2],magnificPopup:!0},function(){function a(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||e.opera),t}function i(e){function i(){d.hide()}function o(){d.show()}function n(){var e=d.children(".selected"),t=e.length?e:d.children().first();l.html(t.clone().find("a").append('<span class="fa fa-sort-desc"></span>').end().html())}function s(e){e.preventDefault(),e.stopPropagation(),t(this).parents("li").siblings("li").removeClass("selected").end().addClass("selected"),n()}function r(e){e.stopPropagation(),d.is(":visible")?i():o()}var d=e.find(".media-boxes-drop-down-menu"),l=e.find(".media-boxes-drop-down-header");n(),a()?(t("body").on("click",function(){d.is(":visible")&&i()}),l.bind("click",r),d.find("> li > *").bind("click",s)):(l.bind("mouseout",i).bind("mouseover",o),d.find("> li > *").bind("mouseout",i).bind("mouseover",o).bind("click",s)),l.on("click","a",function(e){e.preventDefault()})}t(".media-boxes-drop-down").each(function(){i(t(this))})}()}(window,jQuery);