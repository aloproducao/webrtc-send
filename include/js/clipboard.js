/*!
* ZeroClipboard
* The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
* Copyright (c) 2013 Jon Rohan, James M. Greene
* Licensed MIT
* http://zeroclipboard.org/
* v1.2.3
*/
!function(){"use strict";function a(a){return parseFloat(a.replace(/,/g,".").replace(/[^0-9\.]/g,""))>=10}var b,c=function(){var a=/\-([a-z])/g,b=function(a,b){return b.toUpperCase()};return function(c){return c.replace(a,b)}}(),d=function(a,b){var d,e,f,g,h,i;if(window.getComputedStyle?d=window.getComputedStyle(a,null).getPropertyValue(b):(e=c(b),d=a.currentStyle?a.currentStyle[e]:a.style[e]),"cursor"===b&&(!d||"auto"===d))for(f=a.tagName.toLowerCase(),g=["a"],h=0,i=g.length;i>h;h++)if(f===g[h])return"pointer";return d},e=function(a){if(s.prototype._singleton){a||(a=window.event);var b;this!==window?b=this:a.target?b=a.target:a.srcElement&&(b=a.srcElement),s.prototype._singleton.setCurrent(b)}},f=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},g=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},h=function(a,b){if(a.addClass)return a.addClass(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},i=function(a,b){if(a.removeClass)return a.removeClass(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},j=function(){var a,b,c,d=1;return"function"==typeof document.body.getBoundingClientRect&&(a=document.body.getBoundingClientRect(),b=a.right-a.left,c=document.body.offsetWidth,d=Math.round(b/c*100)/100),d},k=function(a){var b={left:0,top:0,width:0,height:0,zIndex:999999999},c=d(a,"z-index");if(c&&"auto"!==c&&(b.zIndex=parseInt(c,10)),a.getBoundingClientRect){var e,f,g,h=a.getBoundingClientRect();"pageXOffset"in window&&"pageYOffset"in window?(e=window.pageXOffset,f=window.pageYOffset):(g=j(),e=Math.round(document.documentElement.scrollLeft/g),f=Math.round(document.documentElement.scrollTop/g));var i=document.documentElement.clientLeft||0,k=document.documentElement.clientTop||0;b.left=h.left+e-i,b.top=h.top+f-k,b.width="width"in h?h.width:h.right-h.left,b.height="height"in h?h.height:h.bottom-h.top}return b},l=function(a,b){var c=!(b&&b.useNoCache===!1);return c?(-1===a.indexOf("?")?"?":"&")+"nocache="+(new Date).getTime():""},m=function(a){var b=[],c=[];return a.trustedOrigins&&("string"==typeof a.trustedOrigins?c.push(a.trustedOrigins):"object"==typeof a.trustedOrigins&&"length"in a.trustedOrigins&&(c=c.concat(a.trustedOrigins))),a.trustedDomains&&("string"==typeof a.trustedDomains?c.push(a.trustedDomains):"object"==typeof a.trustedDomains&&"length"in a.trustedDomains&&(c=c.concat(a.trustedDomains))),c.length&&b.push("trustedOrigins="+encodeURIComponent(c.join(","))),"string"==typeof a.amdModuleId&&a.amdModuleId&&b.push("amdModuleId="+encodeURIComponent(a.amdModuleId)),"string"==typeof a.cjsModuleId&&a.cjsModuleId&&b.push("cjsModuleId="+encodeURIComponent(a.cjsModuleId)),b.join("&")},n=function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},o=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},p=function(a,b,c,d,e){e?window.setTimeout(function(){a.call(b,c,d)},0):a.call(b,c,d)},q=[],r={},s=function(a,b){if(a&&(s.prototype._singleton||this).glue(a),s.prototype._singleton)return s.prototype._singleton;s.prototype._singleton=this,this.options={};for(var c in u)this.options[c]=u[c];for(var d in b)this.options[d]=b[d];this.handlers={},r.hasOwnProperty(this.options.moviePath)||(r[this.options.moviePath]={noflash:!s.detectFlashSupport(),wrongflash:!1,ready:!1,version:"0.0.0"}),r[this.options.moviePath].noflash===!1&&x()};s.prototype.setCurrent=function(a){b=a,this.reposition();var c=a.getAttribute("title");c&&this.setTitle(c);var e=this.options.forceHandCursor===!0||"pointer"===d(a,"cursor");return t.call(this,e),this},s.prototype.setText=function(a){return a&&""!==a&&(this.options.text=a,this.ready()&&this.flashBridge.setText(a)),this},s.prototype.setTitle=function(a){return a&&""!==a&&this.htmlBridge.setAttribute("title",a),this},s.prototype.setSize=function(a,b){return this.ready()&&this.flashBridge.setSize(a,b),this},s.prototype.setHandCursor=function(a){return a="boolean"==typeof a?a:!!a,t.call(this,a),this.options.forceHandCursor=a,this};var t=function(a){this.ready()&&this.flashBridge.setHandCursor(a)};s.version="1.2.3";var u={moviePath:"ZeroClipboard.swf",trustedOrigins:null,text:null,hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",allowScriptAccess:"sameDomain",useNoCache:!0,forceHandCursor:!1};s.setDefaults=function(a){for(var b in a)u[b]=a[b]},s.destroy=function(){if(s.prototype._singleton){s.prototype._singleton.unglue(q);var a=s.prototype._singleton.htmlBridge;a&&a.parentNode&&a.parentNode.removeChild(a),delete s.prototype._singleton}},s.detectFlashSupport=function(){var a=!1;if("function"==typeof ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){}return!a&&navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0),a};var v=null,w=null,x=function(){var a,b,c=s.prototype._singleton,d=document.getElementById("global-zeroclipboard-html-bridge");if(!d){var e={};for(var f in c.options)e[f]=c.options[f];e.amdModuleId=v,e.cjsModuleId=w;var g=m(e),h='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+c.options.moviePath+l(c.options.moviePath,c.options)+'"/>         <param name="allowScriptAccess" value="'+c.options.allowScriptAccess+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+g+'"/>         <embed src="'+c.options.moviePath+l(c.options.moviePath,c.options)+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+g+'"           scale="exactfit">         </embed>       </object>';d=document.createElement("div"),d.id="global-zeroclipboard-html-bridge",d.setAttribute("class","global-zeroclipboard-container"),d.style.position="absolute",d.style.left="0px",d.style.top="-9999px",d.style.width="15px",d.style.height="15px",d.style.zIndex="9999",document.body.appendChild(d),d.innerHTML=h}c.htmlBridge=d,a=document["global-zeroclipboard-flash-bridge"],a&&(b=a.length)&&(a=a[b-1]),c.flashBridge=a||d.children[0].lastElementChild};s.prototype.resetBridge=function(){return this.htmlBridge&&(this.htmlBridge.style.left="0px",this.htmlBridge.style.top="-9999px",this.htmlBridge.removeAttribute("title")),b&&(i(b,this.options.activeClass),b=null),this.options.text=null,this},s.prototype.ready=function(){return r[this.options.moviePath].ready===!0},s.prototype.reposition=function(){if(!b)return!1;var a=k(b);return this.htmlBridge.style.top=a.top+"px",this.htmlBridge.style.left=a.left+"px",this.htmlBridge.style.width=a.width+"px",this.htmlBridge.style.height=a.height+"px",this.htmlBridge.style.zIndex=a.zIndex+1,this.setSize(a.width,a.height),this},s.dispatch=function(a,b){s.prototype._singleton.receiveEvent(a,b)},s.prototype.on=function(a,b){for(var c=a.toString().split(/\s/g),d={},e=0,f=c.length;f>e;e++)a=c[e].toLowerCase().replace(/^on/,""),d[a]=!0,this.handlers[a]||(this.handlers[a]=b);return d.noflash&&r[this.options.moviePath].noflash&&this.receiveEvent("onNoFlash",{}),d.wrongflash&&r[this.options.moviePath].wrongflash&&this.receiveEvent("onWrongFlash",{flashVersion:r[this.options.moviePath].version}),d.load&&r[this.options.moviePath].ready&&this.receiveEvent("onLoad",{flashVersion:r[this.options.moviePath].version}),this},s.prototype.addEventListener=s.prototype.on,s.prototype.off=function(a,b){for(var c=a.toString().split(/\s/g),d=0;d<c.length;d++){a=c[d].toLowerCase().replace(/^on/,"");for(var e in this.handlers)e===a&&this.handlers[e]===b&&delete this.handlers[e]}return this},s.prototype.removeEventListener=s.prototype.off,s.prototype.receiveEvent=function(c,d){c=c.toString().toLowerCase().replace(/^on/,"");var e=b,f=!0;switch(c){case"load":if(d&&d.flashVersion){if(!a(d.flashVersion))return this.receiveEvent("onWrongFlash",{flashVersion:d.flashVersion}),void 0;r[this.options.moviePath].ready=!0,r[this.options.moviePath].version=d.flashVersion}break;case"wrongflash":d&&d.flashVersion&&!a(d.flashVersion)&&(r[this.options.moviePath].wrongflash=!0,r[this.options.moviePath].version=d.flashVersion);break;case"mouseover":h(e,this.options.hoverClass);break;case"mouseout":i(e,this.options.hoverClass),this.resetBridge();break;case"mousedown":h(e,this.options.activeClass);break;case"mouseup":i(e,this.options.activeClass);break;case"datarequested":var g=e.getAttribute("data-clipboard-target"),j=g?document.getElementById(g):null;if(j){var k=j.value||j.textContent||j.innerText;k&&this.setText(k)}else{var l=e.getAttribute("data-clipboard-text");l&&this.setText(l)}f=!1;break;case"complete":this.options.text=null}if(this.handlers[c]){var m=this.handlers[c];"string"==typeof m&&"function"==typeof window[m]&&(m=window[m]),"function"==typeof m&&p(m,e,this,d,f)}},s.prototype.glue=function(a){a=o(a);for(var b=0;b<a.length;b++)a[b]&&1===a[b].nodeType&&-1==n(a[b],q)&&(q.push(a[b]),f(a[b],"mouseover",e));return this},s.prototype.unglue=function(a){a=o(a);for(var b=0;b<a.length;b++){g(a[b],"mouseover",e);var c=n(a[b],q);-1!=c&&q.splice(c,1)}return this},"function"==typeof define&&define.amd?define(["require","exports","module"],function(a,b,c){return v=c&&c.id||null,s}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?(w=module.id||null,module.exports=s):window.ZeroClipboard=s}();