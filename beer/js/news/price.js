(function(c,a){function b(){if(typeof c==undefined){throw"This code need jQuery!Please include jQuery!"}var d,e,f=this;this.settings={ajaxUrl:"//p.3.cn/prices/mgets?type=1&skuIds=",priceStatus:{p:"&yen;",m:"&yen;",no:"\u6682\u65e0\u62a5\u4ef7",d:"\u6298",e:"\u514d\u8d39"},threshold:0,throttle:16,priceArea:"price-area",priceAreaVal:"need",priceAreaId:"price-id",priceType:"price-type",priceCat:"price-cat",priceTypeVal:"p, m, d, no"};this.init()}b.timer=null;b.prototype.init=function(){var e=this,g=true,d=null,f;f=e.settings.throttle||16;c(a).bind("scroll resize",function(){var h=(new Date()).getTime(),i;var j=function(){clearTimeout(b.timer);b.timer=null;e.update()};if(g){j();g=false;return false}if(!d){d=h}i=h-d;if(b.timer&&(i>f)){d=h;j();return false}else{if(b.timer&&(i<f)){d=h;return false}}b.timer=setTimeout(function(){j()},f)});e.update()};b.prototype.findPriceArea=function(){var d=this;return c("[data-"+d.settings.priceArea+"]")};b.prototype.findPriceAreaSonEle=function(e){var d=this;return e.find("[data-"+d.settings.priceAreaId+"]")};b.prototype.isInView=function(g){var d=c(a).height(),e=g.offset().top,f=c(a).scrollTop();return d+f>=e-this.settings.threshold};b.prototype.update=function(){this.areaEles=Array.prototype.slice.call(this.findPriceArea());var j,g,f,h=this,e=0,d=this.areaEles.length;for(;e<d;e++){j=c(this.areaEles[e]);if(j.attr("data-"+this.settings.priceArea)=="done"){continue}if(this.isInView(j)){j.attr("data-"+this.settings.priceArea,"done");g=this.findPriceAreaSonEle(j);if(g.length){f=this.makeDatas(g);(function(k,i,l){l.render(i,k)})(g,f,h)}}}};b.prototype.makeDatas=function(h){var e=[],f=0,d=h.length,g=this;for(;f<d;f++){e[f]=h.eq(f).attr("data-"+g.settings.priceAreaId)}return e};b.prototype.makeRequest=function(f,e){var d,g=this;if(f==undefined||e==undefined||f==""||e.length<=0){return}f="J_"+f.join(",J_");d=this.settings.ajaxUrl+f;c.ajax({url:d,dataType:"jsonp",success:function(m){if(!m&&!m.length){return false}var o,l=g.settings.priceType,k=g.settings.priceTypeVal,h=g.settings.priceStatus;for(var j=0;j<m.length;j++){if(!m[j].id){return false}var n;sku=m[j].id.replace("J_",""),wmePrice=parseFloat(m[j].p),wmaPrice=parseFloat(m[j].m);o=e.filter("[data-"+g.settings.priceAreaId+"="+sku+"]");if(o.length<=0){continue}o.each(function(){var q=null,i=null,p=null;n=c(this).attr("data-"+g.settings.priceType);elementPriceCat=c(this).attr("data-"+g.settings.priceCat);if(m[j].p<=0){if(elementPriceCat=="ebook"){c(this).html(h["e"]);return}c(this).html(h["no"]);return}if(k.indexOf(n)!==-1){if(n=="p"){c(this).html(h[n]+m[j].p)}if(n=="m"){c(this).html(h[n]+m[j].m)}if(n=="d"){i=parseFloat(m[j].p);p=parseFloat(m[j].m);q=Math.ceil((parseFloat(i/p).toFixed(15)*100))/10;c(this).html(q+h[n])}if(n=="no"){c(this).html(h[n])}}else{c(this).html(h["p"]+m[j].p)}})}}})};b.prototype.render=function(e,d){this.makeRequest(e,d)};a.jdGetPriceByJs=new b()})(jQuery,window);