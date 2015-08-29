/*!
 * Knockout JavaScript library v3.3.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(p){var y=this||(0,eval)("this"),w=y.document,M=y.navigator,u=y.jQuery,E=y.JSON;(function(p){"function"===typeof define&&define.amd?define(["exports","require"],p):"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports):p(y.ko={})})(function(N,O){function J(a,d){return null===a||typeof a in Q?a===d:!1}function R(a,d){var c;return function(){c||(c=setTimeout(function(){c=p;a()},d))}}function S(a,d){var c;return function(){clearTimeout(c);
c=setTimeout(a,d)}}function K(b,d,c,e){a.d[b]={init:function(b,k,h,l,g){var m,x;a.w(function(){var q=a.a.c(k()),n=!c!==!q,r=!x;if(r||d||n!==m)r&&a.Z.oa()&&(x=a.a.la(a.e.childNodes(b),!0)),n?(r||a.e.T(b,a.a.la(x)),a.Ja(e?e(g,q):g,b)):a.e.ma(b),m=n},null,{q:b});return{controlsDescendantBindings:!0}}};a.h.ka[b]=!1;a.e.R[b]=!0}var a="undefined"!==typeof N?N:{};a.b=function(b,d){for(var c=b.split("."),e=a,f=0;f<c.length-1;f++)e=e[c[f]];e[c[c.length-1]]=d};a.D=function(a,d,c){a[d]=c};a.version="3.3.0";
a.b("version",a.version);a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function d(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a,b){a.__proto__=b;return a}function e(b,c,g,d){var e=b[c].match(m)||[];a.a.o(g.match(m),function(b){a.a.ga(e,b,d)});b[c]=e.join(" ")}var f={__proto__:[]}instanceof Array,k={},h={};k[M&&/Firefox\/2/i.test(M.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];k.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
b(k,function(a,b){if(b.length)for(var c=0,g=b.length;c<g;c++)h[b[c]]=a});var l={propertychange:!0},g=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:p}(),m=/\S+/g;return{Bb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],o:function(a,b){for(var c=0,g=a.length;c<g;c++)b(a[c],c)},m:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,
b);for(var c=0,g=a.length;c<g;c++)if(a[c]===b)return c;return-1},vb:function(a,b,c){for(var g=0,d=a.length;g<d;g++)if(b.call(c,a[g],g))return a[g];return null},ya:function(b,c){var g=a.a.m(b,c);0<g?b.splice(g,1):0===g&&b.shift()},wb:function(b){b=b||[];for(var c=[],g=0,d=b.length;g<d;g++)0>a.a.m(c,b[g])&&c.push(b[g]);return c},Ka:function(a,b){a=a||[];for(var c=[],g=0,d=a.length;g<d;g++)c.push(b(a[g],g));return c},xa:function(a,b){a=a||[];for(var c=[],g=0,d=a.length;g<d;g++)b(a[g],g)&&c.push(a[g]);
return c},ia:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,g=b.length;c<g;c++)a.push(b[c]);return a},ga:function(b,c,g){var d=a.a.m(a.a.cb(b),c);0>d?g&&b.push(c):g||b.splice(d,1)},za:f,extend:d,Fa:c,Ga:f?c:d,A:b,pa:function(a,b){if(!a)return a;var c={},g;for(g in a)a.hasOwnProperty(g)&&(c[g]=b(a[g],g,a));return c},Ra:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Jb:function(b){b=a.a.O(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),g=0,d=b.length;g<
d;g++)c.appendChild(a.S(b[g]));return c},la:function(b,c){for(var g=0,d=b.length,e=[];g<d;g++){var m=b[g].cloneNode(!0);e.push(c?a.S(m):m)}return e},T:function(b,c){a.a.Ra(b);if(c)for(var g=0,d=c.length;g<d;g++)b.appendChild(c[g])},Qb:function(b,c){var g=b.nodeType?[b]:b;if(0<g.length){for(var d=g[0],e=d.parentNode,m=0,f=c.length;m<f;m++)e.insertBefore(c[m],d);m=0;for(f=g.length;m<f;m++)a.removeNode(g[m])}},na:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==
b;)a.splice(0,1);if(1<a.length){var c=a[0],g=a[a.length-1];for(a.length=0;c!==g;)if(a.push(c),c=c.nextSibling,!c)return;a.push(g)}}return a},Sb:function(a,b){7>g?a.setAttribute("selected",b):a.selected=b},ib:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Dc:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},jc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?
a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Qa:function(b){return a.a.jc(b,b.ownerDocument.documentElement)},tb:function(b){return!!a.a.vb(b,a.a.Qa)},v:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,c,d){var m=g&&l[c];if(!m&&u)u(b).bind(c,d);else if(m||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var e=function(a){d.call(b,a)},f="on"+c;b.attachEvent(f,e);a.a.C.fa(b,
function(){b.detachEvent(f,e)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,d,!1)},qa:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var g;"input"===a.a.v(b)&&b.type&&"click"==c.toLowerCase()?(g=b.type,g="checkbox"==g||"radio"==g):g=!1;if(u&&!g)u(b).trigger(c);else if("function"==typeof w.createEvent)if("function"==typeof b.dispatchEvent)g=w.createEvent(h[c]||"HTMLEvents"),g.initEvent(c,
!0,!0,y,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(g);else throw Error("The supplied element doesn't support dispatchEvent");else if(g&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.F(b)?b():b},cb:function(b){return a.F(b)?b.B():b},Ia:function(b,c,g){var d;c&&("object"===typeof b.classList?(d=b.classList[g?"add":"remove"],a.a.o(c.match(m),function(a){d.call(b.classList,a)})):"string"===
typeof b.className.baseVal?e(b.className,"baseVal",c,g):e(b,"className",c,g))},Ha:function(b,c){var g=a.a.c(c);if(null===g||g===p)g="";var d=a.e.firstChild(b);!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.T(b,[b.ownerDocument.createTextNode(g)]):d.data=g;a.a.mc(b)},Rb:function(a,b){a.name=b;if(7>=g)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},mc:function(a){9<=g&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},kc:function(a){if(g){var b=a.style.width;
a.style.width=0;a.style.width=b}},Bc:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var g=[],d=b;d<=c;d++)g.push(d);return g},O:function(a){for(var b=[],c=0,g=a.length;c<g;c++)b.push(a[c]);return b},Hc:6===g,Ic:7===g,M:g,Db:function(b,c){for(var g=a.a.O(b.getElementsByTagName("input")).concat(a.a.O(b.getElementsByTagName("textarea"))),d="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},m=[],e=g.length-1;0<=e;e--)d(g[e])&&m.push(g[e]);return m},yc:function(b){return"string"==
typeof b&&(b=a.a.ib(b))?E&&E.parse?E.parse(b):(new Function("return "+b))():null},jb:function(b,c,g){if(!E||!E.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return E.stringify(a.a.c(b),c,g)},zc:function(c,g,d){d=d||{};var m=d.params||{},e=d.includeFields||this.Bb,f=c;if("object"==typeof c&&"form"===a.a.v(c))for(var f=c.action,
l=e.length-1;0<=l;l--)for(var k=a.a.Db(c,e[l]),h=k.length-1;0<=h;h--)m[k[h].name]=k[h].value;g=a.a.c(g);var s=w.createElement("form");s.style.display="none";s.action=f;s.method="post";for(var p in g)c=w.createElement("input"),c.type="hidden",c.name=p,c.value=a.a.jb(a.a.c(g[p])),s.appendChild(c);b(m,function(a,b){var c=w.createElement("input");c.type="hidden";c.name=a;c.value=b;s.appendChild(c)});w.body.appendChild(s);d.submitter?d.submitter(s):s.submit();setTimeout(function(){s.parentNode.removeChild(s)},
0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.o);a.b("utils.arrayFirst",a.a.vb);a.b("utils.arrayFilter",a.a.xa);a.b("utils.arrayGetDistinctValues",a.a.wb);a.b("utils.arrayIndexOf",a.a.m);a.b("utils.arrayMap",a.a.Ka);a.b("utils.arrayPushAll",a.a.ia);a.b("utils.arrayRemoveItem",a.a.ya);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Bb);a.b("utils.getFormFields",a.a.Db);a.b("utils.peekObservable",a.a.cb);a.b("utils.postJson",a.a.zc);a.b("utils.parseJson",a.a.yc);a.b("utils.registerEventHandler",
a.a.n);a.b("utils.stringifyJson",a.a.jb);a.b("utils.range",a.a.Bc);a.b("utils.toggleDomNodeCssClass",a.a.Ia);a.b("utils.triggerEvent",a.a.qa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.A);a.b("utils.addOrRemoveItem",a.a.ga);a.b("utils.setTextContent",a.a.Ha);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var d=this;if(1===arguments.length)return function(){return d.apply(a,arguments)};var c=Array.prototype.slice.call(arguments,1);return function(){var e=
c.slice(0);e.push.apply(e,arguments);return d.apply(a,e)}});a.a.f=new function(){function a(b,k){var h=b[c];if(!h||"null"===h||!e[h]){if(!k)return p;h=b[c]="ko"+d++;e[h]={}}return e[h]}var d=0,c="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===p?p:e[d]},set:function(c,d,e){if(e!==p||a(c,!1)!==p)a(c,!0)[d]=e},clear:function(a){var b=a[c];return b?(delete e[b],a[c]=null,!0):!1},I:function(){return d++ +c}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);
a.a.C=new function(){function b(b,d){var e=a.a.f.get(b,c);e===p&&d&&(e=[],a.a.f.set(b,c,e));return e}function d(c){var e=b(c,!1);if(e)for(var e=e.slice(0),l=0;l<e.length;l++)e[l](c);a.a.f.clear(c);a.a.C.cleanExternalData(c);if(f[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}var c=a.a.f.I(),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};return{fa:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},Pb:function(d,e){var f=b(d,!1);f&&(a.a.ya(f,
e),0==f.length&&a.a.f.set(d,c,p))},S:function(b){if(e[b.nodeType]&&(d(b),f[b.nodeType])){var c=[];a.a.ia(c,b.getElementsByTagName("*"));for(var l=0,g=c.length;l<g;l++)d(c[l])}return b},removeNode:function(b){a.S(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){u&&"function"==typeof u.cleanData&&u.cleanData([a])}}};a.S=a.a.C.S;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.S);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.C.fa);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.Pb);(function(){a.a.ca=function(b,d){var c;if(u)if(u.parseHTML)c=u.parseHTML(b,d)||[];else{if((c=u.clean([b],d))&&c[0]){for(var e=c[0];e.parentNode&&11!==e.parentNode.nodeType;)e=e.parentNode;e.parentNode&&e.parentNode.removeChild(e)}}else{(e=d)||(e=w);c=e.parentWindow||e.defaultView||y;var f=a.a.ib(b).toLowerCase(),e=e.createElement("div"),f=f.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!f.indexOf("<tr")&&[2,"<table><tbody>",
"</tbody></table>"]||(!f.indexOf("<td")||!f.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""],k="ignored<div>"+f[1]+b+f[2]+"</div>";for("function"==typeof c.innerShiv?e.appendChild(c.innerShiv(k)):e.innerHTML=k;f[0]--;)e=e.lastChild;c=a.a.O(e.lastChild.childNodes)}return c};a.a.gb=function(b,d){a.a.Ra(b);d=a.a.c(d);if(null!==d&&d!==p)if("string"!=typeof d&&(d=d.toString()),u)u(b).html(d);else for(var c=a.a.ca(d,b.ownerDocument),e=0;e<c.length;e++)b.appendChild(c[e])}})();
a.b("utils.parseHtmlFragment",a.a.ca);a.b("utils.setHtml",a.a.gb);a.H=function(){function b(c,d){if(c)if(8==c.nodeType){var f=a.H.Lb(c.nodeValue);null!=f&&d.push({ic:c,wc:f})}else if(1==c.nodeType)for(var f=0,k=c.childNodes,h=k.length;f<h;f++)b(k[f],d)}var d={};return{$a:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
d[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},Wb:function(a,b){var f=d[a];if(f===p)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete d[a]}},Xb:function(c,d){var f=[];b(c,f);for(var k=0,h=f.length;k<h;k++){var l=f[k].ic,g=[l];d&&a.a.ia(g,d);a.H.Wb(f[k].wc,g);l.nodeValue="";l.parentNode&&l.parentNode.removeChild(l)}},Lb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.H);
a.b("memoization.memoize",a.H.$a);a.b("memoization.unmemoize",a.H.Wb);a.b("memoization.parseMemoText",a.H.Lb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.H.Xb);a.Sa={throttle:function(b,d){b.throttleEvaluation=d;var c=null;return a.j({read:b,write:function(a){clearTimeout(c);c=setTimeout(function(){b(a)},d)}})},rateLimit:function(a,d){var c,e,f;"number"==typeof d?c=d:(c=d.timeout,e=d.method);f="notifyWhenChangesStop"==e?S:R;a.Za(function(a){return f(a,c)})},notify:function(a,d){a.equalityComparer=
"always"==d?null:J}};var Q={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Sa);a.Ub=function(b,d,c){this.da=b;this.La=d;this.hc=c;this.Gb=!1;a.D(this,"dispose",this.p)};a.Ub.prototype.p=function(){this.Gb=!0;this.hc()};a.Q=function(){a.a.Ga(this,a.Q.fn);this.G={};this.rb=1};var z={U:function(b,d,c){var e=this;c=c||"change";var f=new a.Ub(e,d?b.bind(d):b,function(){a.a.ya(e.G[c],f);e.ua&&e.ua(c)});e.ja&&e.ja(c);e.G[c]||(e.G[c]=[]);e.G[c].push(f);return f},notifySubscribers:function(b,
d){d=d||"change";"change"===d&&this.Yb();if(this.Ba(d))try{a.k.xb();for(var c=this.G[d].slice(0),e=0,f;f=c[e];++e)f.Gb||f.La(b)}finally{a.k.end()}},Aa:function(){return this.rb},pc:function(a){return this.Aa()!==a},Yb:function(){++this.rb},Za:function(b){var d=this,c=a.F(d),e,f,k;d.ta||(d.ta=d.notifySubscribers,d.notifySubscribers=function(a,b){b&&"change"!==b?"beforeChange"===b?d.pb(a):d.ta(a,b):d.qb(a)});var h=b(function(){c&&k===d&&(k=d());e=!1;d.Wa(f,k)&&d.ta(f=k)});d.qb=function(a){e=!0;k=a;
h()};d.pb=function(a){e||(f=a,d.ta(a,"beforeChange"))}},Ba:function(a){return this.G[a]&&this.G[a].length},nc:function(b){if(b)return this.G[b]&&this.G[b].length||0;var d=0;a.a.A(this.G,function(a,b){d+=b.length});return d},Wa:function(a,d){return!this.equalityComparer||!this.equalityComparer(a,d)},extend:function(b){var d=this;b&&a.a.A(b,function(b,e){var f=a.Sa[b];"function"==typeof f&&(d=f(d,e)||d)});return d}};a.D(z,"subscribe",z.U);a.D(z,"extend",z.extend);a.D(z,"getSubscriptionsCount",z.nc);
a.a.za&&a.a.Fa(z,Function.prototype);a.Q.fn=z;a.Hb=function(a){return null!=a&&"function"==typeof a.U&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.Q);a.b("isSubscribable",a.Hb);a.Z=a.k=function(){function b(a){c.push(e);e=a}function d(){e=c.pop()}var c=[],e,f=0;return{xb:b,end:d,Ob:function(b){if(e){if(!a.Hb(b))throw Error("Only subscribable things can act as dependencies");e.La(b,b.ac||(b.ac=++f))}},u:function(a,c,e){try{return b(),a.apply(c,e||[])}finally{d()}},oa:function(){if(e)return e.w.oa()},
Ca:function(){if(e)return e.Ca}}}();a.b("computedContext",a.Z);a.b("computedContext.getDependenciesCount",a.Z.oa);a.b("computedContext.isInitial",a.Z.Ca);a.b("computedContext.isSleeping",a.Z.Jc);a.b("ignoreDependencies",a.Gc=a.k.u);a.r=function(b){function d(){if(0<arguments.length)return d.Wa(c,arguments[0])&&(d.X(),c=arguments[0],d.W()),this;a.k.Ob(d);return c}var c=b;a.Q.call(d);a.a.Ga(d,a.r.fn);d.B=function(){return c};d.W=function(){d.notifySubscribers(c)};d.X=function(){d.notifySubscribers(c,
"beforeChange")};a.D(d,"peek",d.B);a.D(d,"valueHasMutated",d.W);a.D(d,"valueWillMutate",d.X);return d};a.r.fn={equalityComparer:J};var H=a.r.Ac="__ko_proto__";a.r.fn[H]=a.r;a.a.za&&a.a.Fa(a.r.fn,a.Q.fn);a.Ta=function(b,d){return null===b||b===p||b[H]===p?!1:b[H]===d?!0:a.Ta(b[H],d)};a.F=function(b){return a.Ta(b,a.r)};a.Da=function(b){return"function"==typeof b&&b[H]===a.r||"function"==typeof b&&b[H]===a.j&&b.qc?!0:!1};a.b("observable",a.r);a.b("isObservable",a.F);a.b("isWriteableObservable",a.Da);
a.b("isWritableObservable",a.Da);a.ba=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.r(b);a.a.Ga(b,a.ba.fn);return b.extend({trackArrayChanges:!0})};a.ba.fn={remove:function(b){for(var d=this.B(),c=[],e="function"!=typeof b||a.F(b)?function(a){return a===b}:b,f=0;f<d.length;f++){var k=d[f];e(k)&&(0===c.length&&this.X(),c.push(k),d.splice(f,1),f--)}c.length&&this.W();return c},
removeAll:function(b){if(b===p){var d=this.B(),c=d.slice(0);this.X();d.splice(0,d.length);this.W();return c}return b?this.remove(function(c){return 0<=a.a.m(b,c)}):[]},destroy:function(b){var d=this.B(),c="function"!=typeof b||a.F(b)?function(a){return a===b}:b;this.X();for(var e=d.length-1;0<=e;e--)c(d[e])&&(d[e]._destroy=!0);this.W()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(d){return 0<=a.a.m(b,d)}):[]},indexOf:function(b){var d=this();return a.a.m(d,
b)},replace:function(a,d){var c=this.indexOf(a);0<=c&&(this.X(),this.B()[c]=d,this.W())}};a.a.o("pop push reverse shift sort splice unshift".split(" "),function(b){a.ba.fn[b]=function(){var a=this.B();this.X();this.yb(a,b,arguments);a=a[b].apply(a,arguments);this.W();return a}});a.a.o(["slice"],function(b){a.ba.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.a.za&&a.a.Fa(a.ba.fn,a.r.fn);a.b("observableArray",a.ba);a.Sa.trackArrayChanges=function(b){function d(){if(!c){c=!0;var g=
b.notifySubscribers;b.notifySubscribers=function(a,b){b&&"change"!==b||++k;return g.apply(this,arguments)};var d=[].concat(b.B()||[]);e=null;f=b.U(function(c){c=[].concat(c||[]);if(b.Ba("arrayChange")){var g;if(!e||1<k)e=a.a.Ma(d,c,{sparse:!0});g=e}d=c;e=null;k=0;g&&g.length&&b.notifySubscribers(g,"arrayChange")})}}if(!b.yb){var c=!1,e=null,f,k=0,h=b.ja,l=b.ua;b.ja=function(a){h&&h.call(b,a);"arrayChange"===a&&d()};b.ua=function(a){l&&l.call(b,a);"arrayChange"!==a||b.Ba("arrayChange")||(f.p(),c=!1)};
b.yb=function(b,d,f){function l(a,b,c){return h[h.length]={status:a,value:b,index:c}}if(c&&!k){var h=[],r=b.length,v=f.length,t=0;switch(d){case "push":t=r;case "unshift":for(d=0;d<v;d++)l("added",f[d],t+d);break;case "pop":t=r-1;case "shift":r&&l("deleted",b[t],t);break;case "splice":d=Math.min(Math.max(0,0>f[0]?r+f[0]:f[0]),r);for(var r=1===v?r:Math.min(d+(f[1]||0),r),v=d+v-2,t=Math.max(r,v),G=[],A=[],p=2;d<t;++d,++p)d<r&&A.push(l("deleted",b[d],d)),d<v&&G.push(l("added",f[p],d));a.a.Cb(A,G);break;
default:return}e=h}}}};a.w=a.j=function(b,d,c){function e(a,b,c){if(I&&b===g)throw Error("A 'pure' computed must not be called recursively");B[a]=c;c.sa=F++;c.ea=b.Aa()}function f(){var a,b;for(a in B)if(B.hasOwnProperty(a)&&(b=B[a],b.da.pc(b.ea)))return!0}function k(){!s&&B&&a.a.A(B,function(a,b){b.p&&b.p()});B=null;F=0;G=!0;s=r=!1}function h(){var a=g.throttleEvaluation;a&&0<=a?(clearTimeout(z),z=setTimeout(function(){l(!0)},a)):g.nb?g.nb():l(!0)}function l(b){if(!v&&!G){if(y&&y()){if(!t){w();return}}else t=
!1;v=!0;try{var c=B,m=F,f=I?p:!F;a.k.xb({La:function(a,b){G||(m&&c[b]?(e(b,a,c[b]),delete c[b],--m):B[b]||e(b,a,s?{da:a}:a.U(h)))},w:g,Ca:f});B={};F=0;try{var l=d?A.call(d):A()}finally{a.k.end(),m&&!s&&a.a.A(c,function(a,b){b.p&&b.p()}),r=!1}g.Wa(n,l)&&(s||q(n,"beforeChange"),n=l,s?g.Yb():b&&q(n));f&&q(n,"awake")}finally{v=!1}F||w()}}function g(){if(0<arguments.length){if("function"===typeof C)C.apply(d,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}a.k.Ob(g);(r||s&&f())&&l();return n}function m(){(r&&!F||s&&f())&&l();return n}function x(){return r||0<F}function q(a,b){g.notifySubscribers(a,b)}var n,r=!0,v=!1,t=!1,G=!1,A=b,I=!1,s=!1;A&&"object"==typeof A?(c=A,A=c.read):(c=c||{},A||(A=c.read));if("function"!=typeof A)throw Error("Pass a function that returns the value of the ko.computed");var C=c.write,D=c.disposeWhenNodeIsRemoved||c.q||null,u=c.disposeWhen||c.Pa,y=u,w=k,B={},F=0,z=null;d||(d=c.owner);a.Q.call(g);a.a.Ga(g,a.j.fn);
g.B=m;g.oa=function(){return F};g.qc="function"===typeof C;g.p=function(){w()};g.$=x;var T=g.Za;g.Za=function(a){T.call(g,a);g.nb=function(){g.pb(n);r=!0;g.qb(g)}};c.pure?(s=I=!0,g.ja=function(b){if(!G&&s&&"change"==b){s=!1;if(r||f())B=null,F=0,r=!0,l();else{var c=[];a.a.A(B,function(a,b){c[b.sa]=a});a.a.o(c,function(a,b){var c=B[a],g=c.da.U(h);g.sa=b;g.ea=c.ea;B[a]=g})}G||q(n,"awake")}},g.ua=function(b){G||"change"!=b||g.Ba("change")||(a.a.A(B,function(a,b){b.p&&(B[a]={da:b.da,sa:b.sa,ea:b.ea},b.p())}),
s=!0,q(p,"asleep"))},g.bc=g.Aa,g.Aa=function(){s&&(r||f())&&l();return g.bc()}):c.deferEvaluation&&(g.ja=function(a){"change"!=a&&"beforeChange"!=a||m()});a.D(g,"peek",g.B);a.D(g,"dispose",g.p);a.D(g,"isActive",g.$);a.D(g,"getDependenciesCount",g.oa);D&&(t=!0,D.nodeType&&(y=function(){return!a.a.Qa(D)||u&&u()}));s||c.deferEvaluation||l();D&&x()&&D.nodeType&&(w=function(){a.a.C.Pb(D,w);k()},a.a.C.fa(D,w));return g};a.sc=function(b){return a.Ta(b,a.j)};z=a.r.Ac;a.j[z]=a.r;a.j.fn={equalityComparer:J};
a.j.fn[z]=a.j;a.a.za&&a.a.Fa(a.j.fn,a.Q.fn);a.b("dependentObservable",a.j);a.b("computed",a.j);a.b("isComputed",a.sc);a.Nb=function(b,d){if("function"===typeof b)return a.w(b,d,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.w(b,d)};a.b("pureComputed",a.Nb);(function(){function b(a,f,k){k=k||new c;a=f(a);if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};k.save(a,h);d(a,function(c){var g=
f(a[c]);switch(typeof g){case "boolean":case "number":case "string":case "function":h[c]=g;break;case "object":case "undefined":var d=k.get(g);h[c]=d!==p?d:b(g,f,k)}});return h}function d(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function c(){this.keys=[];this.mb=[]}a.Vb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.F(b)&&
10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Vb(b);return a.a.jb(b,c,d)};c.prototype={save:function(b,c){var d=a.a.m(this.keys,b);0<=d?this.mb[d]=c:(this.keys.push(b),this.mb.push(c))},get:function(b){b=a.a.m(this.keys,b);return 0<=b?this.mb[b]:p}}})();a.b("toJS",a.Vb);a.b("toJSON",a.toJSON);(function(){a.i={s:function(b){switch(a.a.v(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.ab):7>=a.a.M?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?
b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.i.s(b.options[b.selectedIndex]):p;default:return b.value}},Y:function(b,d,c){switch(a.a.v(b)){case "option":switch(typeof d){case "string":a.a.f.set(b,a.d.options.ab,p);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=d;break;default:a.a.f.set(b,a.d.options.ab,d),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof d?d:""}break;case "select":if(""===d||null===d)d=p;for(var e=-1,f=0,k=b.options.length,
h;f<k;++f)if(h=a.i.s(b.options[f]),h==d||""==h&&d===p){e=f;break}if(c||0<=e||d===p&&1<b.size)b.selectedIndex=e;break;default:if(null===d||d===p)d="";b.value=d}}}})();a.b("selectExtensions",a.i);a.b("selectExtensions.readValue",a.i.s);a.b("selectExtensions.writeValue",a.i.Y);a.h=function(){function b(b){b=a.a.ib(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),x,h=[],n=0;if(d){d.push(",");for(var r=0,v;v=d[r];++r){var t=v.charCodeAt(0);if(44===t){if(0>=n){c.push(x&&h.length?{key:x,
value:h.join("")}:{unknown:x||h.join("")});x=n=0;h=[];continue}}else if(58===t){if(!n&&!x&&1===h.length){x=h.pop();continue}}else 47===t&&r&&1<v.length?(t=d[r-1].match(f))&&!k[t[0]]&&(b=b.substr(b.indexOf(v)+1),d=b.match(e),d.push(","),r=-1,v="/"):40===t||123===t||91===t?++n:41===t||125===t||93===t?--n:x||h.length||34!==t&&39!==t||(v=v.slice(1,-1));h.push(v)}}return c}var d=["true","false","null","undefined"],c=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]",
"g"),f=/[\])"'A-Za-z0-9_$]+$/,k={"in":1,"return":1,"typeof":1},h={};return{ka:[],V:h,bb:b,Ea:function(e,g){function m(b,g){var e;if(!r){var l=a.getBindingHandler(b);if(l&&l.preprocess&&!(g=l.preprocess(g,b,m)))return;if(l=h[b])e=g,0<=a.a.m(d,e)?e=!1:(l=e.match(c),e=null===l?!1:l[1]?"Object("+l[1]+")"+l[2]:e),l=e;l&&k.push("'"+b+"':function(_z){"+e+"=_z}")}n&&(g="function(){return "+g+" }");f.push("'"+b+"':"+g)}g=g||{};var f=[],k=[],n=g.valueAccessors,r=g.bindingParams,v="string"===typeof e?b(e):e;
a.a.o(v,function(a){m(a.key||a.unknown,a.value)});k.length&&m("_ko_property_writers","{"+k.join(",")+" }");return f.join(",")},vc:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},ra:function(b,c,d,e,f){if(b&&a.F(b))!a.Da(b)||f&&b.B()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.ka);a.b("expressionRewriting.parseObjectLiteral",a.h.bb);a.b("expressionRewriting.preProcessBindings",
a.h.Ea);a.b("expressionRewriting._twoWayBindings",a.h.V);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.Ea);(function(){function b(a){return 8==a.nodeType&&k.test(f?a.text:a.nodeValue)}function d(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function c(a,c){for(var e=a,f=1,l=[];e=e.nextSibling;){if(d(e)&&(f--,0===f))return l;l.push(e);b(e)&&f++}if(!c)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,
b){var d=c(a,b);return d?0<d.length?d[d.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,k=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,l={ul:!0,ol:!0};a.e={R:{},childNodes:function(a){return b(a)?c(a):a.childNodes},ma:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Ra(c)},T:function(c,d){if(b(c)){a.e.ma(c);for(var e=c.nextSibling,
f=0,l=d.length;f<l;f++)e.parentNode.insertBefore(d[f],e)}else a.a.T(c,d)},Mb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Fb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):c.appendChild(d):a.e.Mb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||d(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&
d(a.nextSibling)?null:a.nextSibling},oc:b,Fc:function(a){return(a=(f?a.text:a.nodeValue).match(k))?a[1]:null},Kb:function(c){if(l[a.a.v(c)]){var m=c.firstChild;if(m){do if(1===m.nodeType){var f;f=m.firstChild;var h=null;if(f){do if(h)h.push(f);else if(b(f)){var k=e(f,!0);k?f=k:h=[f]}else d(f)&&(h=[f]);while(f=f.nextSibling)}if(f=h)for(h=m.nextSibling,k=0;k<f.length;k++)h?c.insertBefore(f[k],h):c.appendChild(f[k])}while(m=m.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",
a.e.R);a.b("virtualElements.emptyNode",a.e.ma);a.b("virtualElements.insertAfter",a.e.Fb);a.b("virtualElements.prepend",a.e.Mb);a.b("virtualElements.setDomNodeChildren",a.e.T);(function(){a.L=function(){this.ec={}};a.a.extend(a.L.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.e.oc(b);default:return!1}},getBindings:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,
d,b):null;return a.g.sb(c,b,d,!1)},getBindingAccessors:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,d,b,{valueAccessors:!0}):null;return a.g.sb(c,b,d,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.Fc(b);default:return null}},parseBindingsString:function(b,d,c,e){try{var f=this.ec,k=b+(e&&e.valueAccessors||""),h;if(!(h=f[k])){var l,g="with($context){with($data||{}){return{"+a.h.Ea(b,e)+"}}}";l=new Function("$context",
"$element",g);h=f[k]=l}return h(d,c)}catch(m){throw m.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+m.message,m;}}});a.L.instance=new a.L})();a.b("bindingProvider",a.L);(function(){function b(a){return function(){return a}}function d(a){return a()}function c(b){return a.a.pa(a.k.u(b),function(a,c){return function(){return b()[c]}})}function e(d,g,e){return"function"===typeof d?c(d.bind(null,g,e)):a.a.pa(d,b)}function f(a,b){return c(this.getBindings.bind(this,a,b))}function k(b,
c,d){var g,e=a.e.firstChild(c),f=a.L.instance,m=f.preprocessNode;if(m){for(;g=e;)e=a.e.nextSibling(g),m.call(f,g);e=a.e.firstChild(c)}for(;g=e;)e=a.e.nextSibling(g),h(b,g,d)}function h(b,c,d){var e=!0,f=1===c.nodeType;f&&a.e.Kb(c);if(f&&d||a.L.instance.nodeHasBindings(c))e=g(c,null,b,d).shouldBindDescendants;e&&!x[a.a.v(c)]&&k(b,c,!f)}function l(b){var c=[],d={},g=[];a.a.A(b,function I(e){if(!d[e]){var f=a.getBindingHandler(e);f&&(f.after&&(g.push(e),a.a.o(f.after,function(c){if(b[c]){if(-1!==a.a.m(g,
c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+g.join(", "));I(c)}}),g.length--),c.push({key:e,Eb:f}));d[e]=!0}});return c}function g(b,c,g,e){var m=a.a.f.get(b,q);if(!c){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,q,!0)}!m&&e&&a.Tb(b,g);var h;if(c&&"function"!==typeof c)h=c;else{var k=a.L.instance,x=k.getBindingAccessors||f,n=a.j(function(){(h=c?c(g,b):x.call(k,b,g))&&g.K&&g.K();return h},null,{q:b});
h&&n.$()||(n=null)}var u;if(h){var w=n?function(a){return function(){return d(n()[a])}}:function(a){return h[a]},y=function(){return a.a.pa(n?n():h,d)};y.get=function(a){return h[a]&&d(w(a))};y.has=function(a){return a in h};e=l(h);a.a.o(e,function(c){var d=c.Eb.init,e=c.Eb.update,f=c.key;if(8===b.nodeType&&!a.e.R[f])throw Error("The binding '"+f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.k.u(function(){var a=d(b,w(f),y,g.$data,g);if(a&&a.controlsDescendantBindings){if(u!==
p)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.j(function(){e(b,w(f),y,g.$data,g)},null,{q:b})}catch(m){throw m.message='Unable to process binding "'+f+": "+h[f]+'"\nMessage: '+m.message,m;}})}return{shouldBindDescendants:u===p}}function m(b){return b&&b instanceof a.N?b:new a.N(b)}a.d={};var x={script:!0,textarea:!0};a.getBindingHandler=function(b){return a.d[b]};
a.N=function(b,c,d,g){var e=this,f="function"==typeof b&&!a.F(b),m,l=a.j(function(){var m=f?b():b,h=a.a.c(m);c?(c.K&&c.K(),a.a.extend(e,c),l&&(e.K=l)):(e.$parents=[],e.$root=h,e.ko=a);e.$rawData=m;e.$data=h;d&&(e[d]=h);g&&g(e,c,h);return e.$data},null,{Pa:function(){return m&&!a.a.tb(m)},q:!0});l.$()&&(e.K=l,l.equalityComparer=null,m=[],l.Zb=function(b){m.push(b);a.a.C.fa(b,function(b){a.a.ya(m,b);m.length||(l.p(),e.K=l=p)})})};a.N.prototype.createChildContext=function(b,c,d){return new a.N(b,this,
c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.N.prototype.extend=function(b){return new a.N(this.K||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.f.I(),n=a.a.f.I();a.Tb=function(b,c){if(2==arguments.length)a.a.f.set(b,n,c),c.K&&c.K.Zb(b);else return a.a.f.get(b,n)};a.va=function(b,c,d){1===b.nodeType&&a.e.Kb(b);return g(b,c,m(d),!0)};a.cc=function(b,
c,d){d=m(d);return a.va(b,e(c,d,b),d)};a.Ja=function(a,b){1!==b.nodeType&&8!==b.nodeType||k(m(a),b,!0)};a.ub=function(a,b){!u&&y.jQuery&&(u=y.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||y.document.body;h(m(a),b,!0)};a.Oa=function(b){switch(b.nodeType){case 1:case 8:var c=a.Tb(b);if(c)return c;if(b.parentNode)return a.Oa(b.parentNode)}return p};a.gc=function(b){return(b=a.Oa(b))?
b.$data:p};a.b("bindingHandlers",a.d);a.b("applyBindings",a.ub);a.b("applyBindingsToDescendants",a.Ja);a.b("applyBindingAccessorsToNode",a.va);a.b("applyBindingsToNode",a.cc);a.b("contextFor",a.Oa);a.b("dataFor",a.gc)})();(function(b){function d(d,e){var g=f.hasOwnProperty(d)?f[d]:b,m;g?g.U(e):(g=f[d]=new a.Q,g.U(e),c(d,function(a,b){var c=!(!b||!b.synchronous);k[d]={definition:a,tc:c};delete f[d];m||c?g.notifySubscribers(a):setTimeout(function(){g.notifySubscribers(a)},0)}),m=!0)}function c(a,b){e("getConfig",
[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,c)}):b(null,null)})}function e(c,d,g,f){f||(f=a.g.loaders.slice(0));var k=f.shift();if(k){var q=k[c];if(q){var n=!1;if(q.apply(k,d.concat(function(a){n?g(null):null!==a?g(a):e(c,d,g,f)}))!==b&&(n=!0,!k.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,g,f)}else g(null)}var f={},k={};a.g={get:function(c,e){var g=k.hasOwnProperty(c)?k[c]:
b;g?g.tc?a.k.u(function(){e(g.definition)}):setTimeout(function(){e(g.definition)},0):d(c,e)},zb:function(a){delete k[a]},ob:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.zb)})();(function(){function b(b,c,d,e){function k(){0===--v&&e(h)}var h={},v=2,t=d.template;d=d.viewModel;t?f(c,t,function(c){a.g.ob("loadTemplate",[b,c],function(a){h.template=a;k()})}):k();d?f(c,d,function(c){a.g.ob("loadViewModel",[b,c],function(a){h[l]=a;k()})}):
k()}function d(a,b,c){if("function"===typeof b)c(function(a){return new b(a)});else if("function"===typeof b[l])c(b[l]);else if("instance"in b){var e=b.instance;c(function(){return e})}else"viewModel"in b?d(a,b.viewModel,c):a("Unknown viewModel value: "+b)}function c(b){switch(a.a.v(b)){case "script":return a.a.ca(b.text);case "textarea":return a.a.ca(b.value);case "template":if(e(b.content))return a.a.la(b.content.childNodes)}return a.a.la(b.childNodes)}function e(a){return y.DocumentFragment?a instanceof
DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?O||y.require?(O||y.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function k(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.g.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.Xa(b))throw Error("Component "+b+" is already registered");h[b]=c};a.g.Xa=function(a){return a in h};a.g.Ec=function(b){delete h[b];a.g.zb(b)};a.g.Ab={getConfig:function(a,
b){b(h.hasOwnProperty(a)?h[a]:null)},loadComponent:function(a,c,d){var e=k(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,d,f){b=k(b);if("string"===typeof d)f(a.a.ca(d));else if(d instanceof Array)f(d);else if(e(d))f(a.a.O(d.childNodes));else if(d.element)if(d=d.element,y.HTMLElement?d instanceof HTMLElement:d&&d.tagName&&1===d.nodeType)f(c(d));else if("string"===typeof d){var l=w.getElementById(d);l?f(c(l)):b("Cannot find element with ID "+d)}else b("Unknown element type: "+d);else b("Unknown template value: "+
d)},loadViewModel:function(a,b,c){d(k(a),b,c)}};var l="createViewModel";a.b("components.register",a.g.register);a.b("components.isRegistered",a.g.Xa);a.b("components.unregister",a.g.Ec);a.b("components.defaultLoader",a.g.Ab);a.g.loaders.push(a.g.Ab);a.g.$b=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=d.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.pa(f,function(d){return a.w(d,null,{q:b})}),k=a.a.pa(f,function(d){var e=d.B();return d.$()?a.w({read:function(){return a.a.c(d())},
write:a.Da(e)&&function(a){d()(a)},q:b}):e});k.hasOwnProperty("$raw")||(k.$raw=f);return k}return{$raw:{}}}a.g.getComponentNameForNode=function(b){b=a.a.v(b);return a.g.Xa(b)&&b};a.g.sb=function(c,d,f,k){if(1===d.nodeType){var h=a.g.getComponentNameForNode(d);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');var l={name:h,params:b(d,f)};c.component=k?function(){return l}:l}}return c};var d=new a.L;9>a.a.M&&(a.g.register=function(a){return function(b){w.createElement(b);
return a.apply(this,arguments)}}(a.g.register),w.createDocumentFragment=function(b){return function(){var d=b(),f=a.g.$b,k;for(k in f)f.hasOwnProperty(k)&&d.createElement(k);return d}}(w.createDocumentFragment))})();(function(b){function d(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.la(c);a.e.T(d,b)}function c(a,b,c,d){var e=a.createViewModel;return e?e.call(a,d,{element:b,templateNodes:c}):d}var e=0;a.d.component={init:function(f,k,h,l,g){function m(){var a=x&&
x.dispose;"function"===typeof a&&a.call(x);q=null}var x,q,n=a.a.O(a.e.childNodes(f));a.a.C.fa(f,m);a.w(function(){var l=a.a.c(k()),h,t;"string"===typeof l?h=l:(h=a.a.c(l.name),t=a.a.c(l.params));if(!h)throw Error("No component name specified");var p=q=++e;a.g.get(h,function(e){if(q===p){m();if(!e)throw Error("Unknown component '"+h+"'");d(h,e,f);var l=c(e,f,n,t);e=g.createChildContext(l,b,function(a){a.$component=l;a.$componentTemplateNodes=n});x=l;a.Ja(e,f)}})},null,{q:f});return{controlsDescendantBindings:!0}}};
a.e.R.component=!0})();var P={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,d){var c=a.a.c(d())||{};a.a.A(c,function(c,d){d=a.a.c(d);var k=!1===d||null===d||d===p;k&&b.removeAttribute(c);8>=a.a.M&&c in P?(c=P[c],k?b.removeAttribute(c):b[c]=d):k||b.setAttribute(c,d.toString());"name"===c&&a.a.Rb(b,k?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,d,c){function e(){var e=b.checked,f=x?k():e;if(!a.Z.Ca()&&(!l||e)){var h=a.k.u(d);g?m!==f?(e&&(a.a.ga(h,
f,!0),a.a.ga(h,m,!1)),m=f):a.a.ga(h,f,e):a.h.ra(h,c,"checked",f,!0)}}function f(){var c=a.a.c(d());b.checked=g?0<=a.a.m(c,k()):h?c:k()===c}var k=a.Nb(function(){return c.has("checkedValue")?a.a.c(c.get("checkedValue")):c.has("value")?a.a.c(c.get("value")):b.value}),h="checkbox"==b.type,l="radio"==b.type;if(h||l){var g=h&&a.a.c(d())instanceof Array,m=g?k():p,x=l||g;l&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.w(e,null,{q:b});a.a.n(b,"click",e);a.w(f,null,{q:b})}}};a.h.V.checked=!0;a.d.checkedValue=
{update:function(b,d){b.value=a.a.c(d())}}})();a.d.css={update:function(b,d){var c=a.a.c(d());null!==c&&"object"==typeof c?a.a.A(c,function(c,d){d=a.a.c(d);a.a.Ia(b,c,d)}):(c=String(c||""),a.a.Ia(b,b.__ko__cssValue,!1),b.__ko__cssValue=c,a.a.Ia(b,c,!0))}};a.d.enable={update:function(b,d){var c=a.a.c(d());c&&b.disabled?b.removeAttribute("disabled"):c||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,d){a.d.enable.update(b,function(){return!a.a.c(d())})}};a.d.event={init:function(b,d,c,
e,f){var k=d()||{};a.a.A(k,function(h){"string"==typeof h&&a.a.n(b,h,function(b){var g,m=d()[h];if(m){try{var k=a.a.O(arguments);e=f.$data;k.unshift(e);g=m.apply(e,k)}finally{!0!==g&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===c.get(h+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={Ib:function(b){return function(){var d=b(),c=a.a.cb(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:a.P.Va};a.a.c(d);return{foreach:c.data,as:c.as,
includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:a.P.Va}}},init:function(b,d){return a.d.template.init(b,a.d.foreach.Ib(d))},update:function(b,d,c,e,f){return a.d.template.update(b,a.d.foreach.Ib(d),c,e,f)}};a.h.ka.foreach=!1;a.e.R.foreach=!0;a.d.hasfocus={init:function(b,d,c){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(m){g=
f.body}e=g===b}f=d();a.h.ra(f,c,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),k=e.bind(null,!1);a.a.n(b,"focus",f);a.a.n(b,"focusin",f);a.a.n(b,"blur",k);a.a.n(b,"focusout",k)},update:function(b,d){var c=!!a.a.c(d());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===c||(c?b.focus():b.blur(),a.k.u(a.a.qa,null,[b,c?"focusin":"focusout"]))}};a.h.V.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.V.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},
update:function(b,d){a.a.gb(b,d())}};K("if");K("ifnot",!1,!0);K("with",!0,!1,function(a,d){return a.createChildContext(d)});var L={};a.d.options={init:function(b){if("select"!==a.a.v(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,d,c){function e(){return a.a.xa(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function k(d,e){if(r&&
m)a.i.Y(b,a.a.c(c.get("value")),!0);else if(n.length){var g=0<=a.a.m(n,a.i.s(e[0]));a.a.Sb(e[0],g);r&&!g&&a.k.u(a.a.qa,null,[b,"change"])}}var h=b.multiple,l=0!=b.length&&h?b.scrollTop:null,g=a.a.c(d()),m=c.get("valueAllowUnset")&&c.has("value"),x=c.get("optionsIncludeDestroyed");d={};var q,n=[];m||(h?n=a.a.Ka(e(),a.i.s):0<=b.selectedIndex&&n.push(a.i.s(b.options[b.selectedIndex])));g&&("undefined"==typeof g.length&&(g=[g]),q=a.a.xa(g,function(b){return x||b===p||null===b||!a.a.c(b._destroy)}),c.has("optionsCaption")&&
(g=a.a.c(c.get("optionsCaption")),null!==g&&g!==p&&q.unshift(L)));var r=!1;d.beforeRemove=function(a){b.removeChild(a)};g=k;c.has("optionsAfterRender")&&"function"==typeof c.get("optionsAfterRender")&&(g=function(b,d){k(0,d);a.k.u(c.get("optionsAfterRender"),null,[d[0],b!==L?b:p])});a.a.fb(b,q,function(d,e,g){g.length&&(n=!m&&g[0].selected?[a.i.s(g[0])]:[],r=!0);e=b.ownerDocument.createElement("option");d===L?(a.a.Ha(e,c.get("optionsCaption")),a.i.Y(e,p)):(g=f(d,c.get("optionsValue"),d),a.i.Y(e,a.a.c(g)),
d=f(d,c.get("optionsText"),g),a.a.Ha(e,d));return[e]},d,g);a.k.u(function(){m?a.i.Y(b,a.a.c(c.get("value")),!0):(h?n.length&&e().length<n.length:n.length&&0<=b.selectedIndex?a.i.s(b.options[b.selectedIndex])!==n[0]:n.length||0<=b.selectedIndex)&&a.a.qa(b,"change")});a.a.kc(b);l&&20<Math.abs(l-b.scrollTop)&&(b.scrollTop=l)}};a.d.options.ab=a.a.f.I();a.d.selectedOptions={after:["options","foreach"],init:function(b,d,c){a.a.n(b,"change",function(){var e=d(),f=[];a.a.o(b.getElementsByTagName("option"),
function(b){b.selected&&f.push(a.i.s(b))});a.h.ra(e,c,"selectedOptions",f)})},update:function(b,d){if("select"!=a.a.v(b))throw Error("values binding applies only to SELECT elements");var c=a.a.c(d());c&&"number"==typeof c.length&&a.a.o(b.getElementsByTagName("option"),function(b){var d=0<=a.a.m(c,a.i.s(b));a.a.Sb(b,d)})}};a.h.V.selectedOptions=!0;a.d.style={update:function(b,d){var c=a.a.c(d()||{});a.a.A(c,function(c,d){d=a.a.c(d);if(null===d||d===p||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,
d,c,e,f){if("function"!=typeof d())throw Error("The value for a submit binding must be a function");a.a.n(b,"submit",function(a){var c,e=d();try{c=e.call(f.$data,b)}finally{!0!==c&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,d){a.a.Ha(b,d())}};a.e.R.text=!0;(function(){if(y&&y.navigator)var b=function(a){if(a)return parseFloat(a[1])},d=y.opera&&y.opera.version&&parseInt(y.opera.version()),c=y.navigator.userAgent,
e=b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),f=b(c.match(/Firefox\/([^ ]*)/));if(10>a.a.M)var k=a.a.f.I(),h=a.a.f.I(),l=function(b){var c=this.activeElement;(c=c&&a.a.f.get(c,h))&&c(b)},g=function(b,c){var d=b.ownerDocument;a.a.f.get(d,k)||(a.a.f.set(d,k,!0),a.a.n(d,"selectionchange",l));a.a.f.set(b,h,c)};a.d.textInput={init:function(b,c,l){function h(c,d){a.a.n(b,c,d)}function k(){var d=a.a.c(c());if(null===d||d===p)d="";w!==p&&d===w?setTimeout(k,4):b.value!==d&&(u=d,b.value=d)}function v(){A||
(w=b.value,A=setTimeout(t,4))}function t(){clearTimeout(A);w=A=p;var d=b.value;u!==d&&(u=d,a.h.ra(c(),l,"textInput",d))}var u=b.value,A,w;10>a.a.M?(h("propertychange",function(a){"value"===a.propertyName&&t()}),8==a.a.M&&(h("keyup",t),h("keydown",t)),8<=a.a.M&&(g(b,t),h("dragend",v))):(h("input",t),5>e&&"textarea"===a.a.v(b)?(h("keydown",v),h("paste",v),h("cut",v)):11>d?h("keydown",v):4>f&&(h("DOMAutoComplete",t),h("dragdrop",t),h("drop",t)));h("change",t);a.w(k,null,{q:b})}};a.h.V.textInput=!0;a.d.textinput=
{preprocess:function(a,b,c){c("textInput",a)}}})();a.d.uniqueName={init:function(b,d){if(d()){var c="ko_unique_"+ ++a.d.uniqueName.fc;a.a.Rb(b,c)}}};a.d.uniqueName.fc=0;a.d.value={after:["options","foreach"],init:function(b,d,c){if("input"!=b.tagName.toLowerCase()||"checkbox"!=b.type&&"radio"!=b.type){var e=["change"],f=c.get("valueUpdate"),k=!1,h=null;f&&("string"==typeof f&&(f=[f]),a.a.ia(e,f),e=a.a.wb(e));var l=function(){h=null;k=!1;var e=d(),g=a.i.s(b);a.h.ra(e,c,"value",g)};!a.a.M||"input"!=
b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.m(e,"propertychange")||(a.a.n(b,"propertychange",function(){k=!0}),a.a.n(b,"focus",function(){k=!1}),a.a.n(b,"blur",function(){k&&l()}));a.a.o(e,function(c){var d=l;a.a.Dc(c,"after")&&(d=function(){h=a.i.s(b);setTimeout(l,0)},c=c.substring(5));a.a.n(b,c,d)});var g=function(){var e=a.a.c(d()),f=a.i.s(b);if(null!==h&&e===h)setTimeout(g,0);else if(e!==f)if("select"===a.a.v(b)){var l=c.get("valueAllowUnset"),
f=function(){a.i.Y(b,e,l)};f();l||e===a.i.s(b)?setTimeout(f,0):a.k.u(a.a.qa,null,[b,"change"])}else a.i.Y(b,e)};a.w(g,null,{q:b})}else a.va(b,{checkedValue:d})},update:function(){}};a.h.V.value=!0;a.d.visible={update:function(b,d){var c=a.a.c(d()),e="none"!=b.style.display;c&&!e?b.style.display="":!c&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(d,c,e,f,k){return a.d.event.init.call(this,d,function(){var a={};a[b]=c();return a},e,f,k)}}})("click");a.J=function(){};a.J.prototype.renderTemplateSource=
function(){throw Error("Override renderTemplateSource");};a.J.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.J.prototype.makeTemplateSource=function(b,d){if("string"==typeof b){d=d||w;var c=d.getElementById(b);if(!c)throw Error("Cannot find template with ID "+b);return new a.t.l(c)}if(1==b.nodeType||8==b.nodeType)return new a.t.ha(b);throw Error("Unknown template type: "+b);};a.J.prototype.renderTemplate=function(a,d,c,e){a=this.makeTemplateSource(a,
e);return this.renderTemplateSource(a,d,c,e)};a.J.prototype.isTemplateRewritten=function(a,d){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,d).data("isRewritten")};a.J.prototype.rewriteTemplate=function(a,d,c){a=this.makeTemplateSource(a,c);d=d(a.text());a.text(d);a.data("isRewritten",!0)};a.b("templateEngine",a.J);a.kb=function(){function b(b,c,d,h){b=a.h.bb(b);for(var l=a.h.ka,g=0;g<b.length;g++){var m=b[g].key;if(l.hasOwnProperty(m)){var x=l[m];if("function"===typeof x){if(m=
x(b[g].value))throw Error(m);}else if(!x)throw Error("This template engine does not support the '"+m+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.Ea(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var d=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,c=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{lc:function(b,
c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kb.xc(b,c)},d)},xc:function(a,f){return a.replace(d,function(a,c,d,e,m){return b(m,c,d,f)}).replace(c,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},dc:function(b,c){return a.H.$a(function(d,h){var l=d.nextSibling;l&&l.nodeName.toLowerCase()===c&&a.va(l,b,h)})}}}();a.b("__tr_ambtns",a.kb.dc);(function(){a.t={};a.t.l=function(a){this.l=a};a.t.l.prototype.text=function(){var b=a.a.v(this.l),b="script"===b?"text":
"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.l[b];var d=arguments[0];"innerHTML"===b?a.a.gb(this.l,d):this.l[b]=d};var b=a.a.f.I()+"_";a.t.l.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.l,b+c);a.a.f.set(this.l,b+c,arguments[1])};var d=a.a.f.I();a.t.ha=function(a){this.l=a};a.t.ha.prototype=new a.t.l;a.t.ha.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.l,d)||{};b.lb===p&&b.Na&&(b.lb=b.Na.innerHTML);return b.lb}a.a.f.set(this.l,
d,{lb:arguments[0]})};a.t.l.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.l,d)||{}).Na;a.a.f.set(this.l,d,{Na:arguments[0]})};a.b("templateSources",a.t);a.b("templateSources.domElement",a.t.l);a.b("templateSources.anonymousTemplate",a.t.ha)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function d(c,d){if(c.length){var e=c[0],f=c[c.length-1],h=e.parentNode,k=a.L.instance,r=k.preprocessNode;if(r){b(e,f,function(a,
b){var c=a.previousSibling,d=r.call(k,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):(c.push(e,f),a.a.na(c,h))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.ub(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.H.Xb(b,[d])});a.a.na(c,h)}}function c(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,q){q=q||{};var n=(b&&c(b)||f||{}).ownerDocument,r=q.templateEngine||k;a.kb.lc(f,r,n);f=r.renderTemplate(f,h,q,n);if("number"!=
typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.e.T(b,f);n=!0;break;case "replaceNode":a.a.Qb(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(d(f,h),q.afterRender&&a.k.u(q.afterRender,null,[f,h.$data]));return f}function f(b,c,d){return a.F(b)?b():"function"===typeof b?b(c,d):b}var k;a.hb=function(b){if(b!=p&&!(b instanceof a.J))throw Error("templateEngine must inherit from ko.templateEngine");
k=b};a.eb=function(b,d,h,x,q){h=h||{};if((h.templateEngine||k)==p)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(x){var n=c(x);return a.j(function(){var k=d&&d instanceof a.N?d:new a.N(a.a.c(d)),p=f(b,k.$data,k),k=e(x,q,p,k,h);"replaceNode"==q&&(x=k,n=c(x))},null,{Pa:function(){return!n||!a.a.Qa(n)},q:n&&"replaceNode"==q?n.parentNode:n})}return a.H.$a(function(c){a.eb(b,d,h,c,"replaceNode")})};a.Cc=function(b,c,h,k,q){function n(a,b){d(b,v);h.afterRender&&
h.afterRender(b,a);v=null}function r(a,c){v=q.createChildContext(a,h.as,function(a){a.$index=c});var d=f(b,a,v);return e(null,"ignoreTargetNode",d,v,h)}var v;return a.j(function(){var b=a.a.c(c)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.xa(b,function(b){return h.includeDestroyed||b===p||null===b||!a.a.c(b._destroy)});a.k.u(a.a.fb,null,[k,b,r,h,n])},null,{q:k})};var h=a.a.f.I();a.d.template={init:function(b,c){var d=a.a.c(c());if("string"==typeof d||d.name)a.e.ma(b);else{if("nodes"in d){if(d=
d.nodes||[],a.F(d))throw Error('The "nodes" option must be a plain, non-observable array.');}else d=a.e.childNodes(b);d=a.a.Jb(d);(new a.t.ha(b)).nodes(d)}return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var k=c(),r;c=a.a.c(k);d=!0;e=null;"string"==typeof c?c={}:(k=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)),r=a.a.c(c.data));"foreach"in c?e=a.Cc(k||b,d&&c.foreach||[],c,b,f):d?(f="data"in c?f.createChildContext(r,c.as):f,e=a.eb(k||b,f,c,b)):a.e.ma(b);f=
e;(r=a.a.f.get(b,h))&&"function"==typeof r.p&&r.p();a.a.f.set(b,h,f&&f.$()?f:p)}};a.h.ka.template=function(b){b=a.h.bb(b);return 1==b.length&&b[0].unknown||a.h.vc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.e.R.template=!0})();a.b("setTemplateEngine",a.hb);a.b("renderTemplate",a.eb);a.a.Cb=function(a,d,c){if(a.length&&d.length){var e,f,k,h,l;for(e=f=0;(!c||e<c)&&(h=a[f]);++f){for(k=0;l=d[k];++k)if(h.value===l.value){h.moved=l.index;l.moved=
h.index;d.splice(k,1);e=k=0;break}e+=k}}};a.a.Ma=function(){function b(b,c,e,f,k){var h=Math.min,l=Math.max,g=[],m,p=b.length,q,n=c.length,r=n-p||1,v=p+n+1,t,u,w;for(m=0;m<=p;m++)for(u=t,g.push(t=[]),w=h(n,m+r),q=l(0,m-1);q<=w;q++)t[q]=q?m?b[m-1]===c[q-1]?u[q-1]:h(u[q]||v,t[q-1]||v)+1:q+1:m+1;h=[];l=[];r=[];m=p;for(q=n;m||q;)n=g[m][q]-1,q&&n===g[m][q-1]?l.push(h[h.length]={status:e,value:c[--q],index:q}):m&&n===g[m-1][q]?r.push(h[h.length]={status:f,value:b[--m],index:m}):(--q,--m,k.sparse||h.push({status:"retained",
value:c[q]}));a.a.Cb(l,r,10*p);return h.reverse()}return function(a,c,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];c=c||[];return a.length<=c.length?b(a,c,"added","deleted",e):b(c,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Ma);(function(){function b(b,d,f,k,h){var l=[],g=a.j(function(){var g=d(f,h,a.a.na(l,b))||[];0<l.length&&(a.a.Qb(l,g),k&&a.k.u(k,null,[f,g,h]));l.length=0;a.a.ia(l,g)},null,{q:b,Pa:function(){return!a.a.tb(l)}});return{aa:l,j:g.$()?g:p}}var d=a.a.f.I();
a.a.fb=function(c,e,f,k,h){function l(b,d){s=u[d];t!==d&&(z[b]=s);s.Ua(t++);a.a.na(s.aa,c);r.push(s);y.push(s)}function g(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.o(c[d].aa,function(a){b(a,d,c[d].wa)})}e=e||[];k=k||{};var m=a.a.f.get(c,d)===p,u=a.a.f.get(c,d)||[],q=a.a.Ka(u,function(a){return a.wa}),n=a.a.Ma(q,e,k.dontLimitMoves),r=[],v=0,t=0,w=[],y=[];e=[];for(var z=[],q=[],s,C=0,D,E;D=n[C];C++)switch(E=D.moved,D.status){case "deleted":E===p&&(s=u[v],s.j&&s.j.p(),w.push.apply(w,a.a.na(s.aa,
c)),k.beforeRemove&&(e[C]=s,y.push(s)));v++;break;case "retained":l(C,v++);break;case "added":E!==p?l(C,E):(s={wa:D.value,Ua:a.r(t++)},r.push(s),y.push(s),m||(q[C]=s))}g(k.beforeMove,z);a.a.o(w,k.beforeRemove?a.S:a.removeNode);for(var C=0,m=a.e.firstChild(c),H;s=y[C];C++){s.aa||a.a.extend(s,b(c,f,s.wa,h,s.Ua));for(v=0;n=s.aa[v];m=n.nextSibling,H=n,v++)n!==m&&a.e.Fb(c,n,H);!s.rc&&h&&(h(s.wa,s.aa,s.Ua),s.rc=!0)}g(k.beforeRemove,e);g(k.afterMove,z);g(k.afterAdd,q);a.a.f.set(c,d,r)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",
a.a.fb);a.P=function(){this.allowTemplateRewriting=!1};a.P.prototype=new a.J;a.P.prototype.renderTemplateSource=function(b,d,c,e){if(d=(9>a.a.M?0:b.nodes)?b.nodes():null)return a.a.O(d.cloneNode(!0).childNodes);b=b.text();return a.a.ca(b,e)};a.P.Va=new a.P;a.hb(a.P.Va);a.b("nativeTemplateEngine",a.P);(function(){a.Ya=function(){var a=this.uc=function(){if(!u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,
e,f,k){k=k||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},f.templateOptions);e=u.tmpl(h,b,e);e.appendTo(k.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Ya.prototype=new a.J;var b=new a.Ya;0<b.uc&&a.hb(b);a.b("jqueryTmplTemplateEngine",a.Ya)})()})})();})();

/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

// Ion.RangeSlider
// version 2.0.9 Build: 321
// © Denis Ineshin, 2015
// https://github.com/IonDen
//
// Project page:    http://ionden.com/a/plugins/ion.rangeSlider/en.html
// GitHub page:     https://github.com/IonDen/ion.rangeSlider
//
// Released under MIT licence:
// http://ionden.com/a/plugins/licence-en.html
// =====================================================================================================================

;(function ($, document, window, navigator, undefined) {
    "use strict";

    // =================================================================================================================
    // Service

    var plugin_count = 0;

    // IE8 fix
    var is_old_ie = (function () {
        var n = navigator.userAgent,
            r = /msie\s\d+/i,
            v;
        if (n.search(r) > 0) {
            v = r.exec(n).toString();
            v = v.split(" ")[1];
            if (v < 9) {
                $("html").addClass("lt-ie9");
                return true;
            }
        }
        return false;
    } ());
    if (!Function.prototype.bind) {
        Function.prototype.bind = function bind(that) {

            var target = this;
            var slice = [].slice;

            if (typeof target != "function") {
                throw new TypeError();
            }

            var args = slice.call(arguments, 1),
                bound = function () {

                    if (this instanceof bound) {

                        var F = function(){};
                        F.prototype = target.prototype;
                        var self = new F();

                        var result = target.apply(
                            self,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return self;

                    } else {

                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };

            return bound;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchElement, fromIndex) {
            var k;
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var O = Object(this);
            var len = O.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = +fromIndex || 0;
            if (Math.abs(n) === Infinity) {
                n = 0;
            }
            if (n >= len) {
                return -1;
            }
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }



    // =================================================================================================================
    // Template

    var base_html =
        '<span class="irs">' +
        '<span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span>' +
        '<span class="irs-min">0</span><span class="irs-max">1</span>' +
        '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' +
        '</span>' +
        '<span class="irs-grid"></span>' +
        '<span class="irs-bar"></span>';

    var single_html =
        '<span class="irs-bar-edge"></span>' +
        '<span class="irs-shadow shadow-single"></span>' +
        '<span class="irs-slider single"></span>';

    var double_html =
        '<span class="irs-shadow shadow-from"></span>' +
        '<span class="irs-shadow shadow-to"></span>' +
        '<span class="irs-slider from"></span>' +
        '<span class="irs-slider to"></span>';

    var disable_html =
        '<span class="irs-disable-mask"></span>';



    // =================================================================================================================
    // Core

    var IonRangeSlider = function (input, options, plugin_count) {
        this.VERSION = "2.0.9";
        this.input = input;
        this.plugin_count = plugin_count;
        this.current_plugin = 0;
        this.calc_count = 0;
        this.update_tm = 0;
        this.old_from = 0;
        this.old_to = 0;
        this.raf_id = null;
        this.dragging = false;
        this.force_redraw = false;
        this.is_key = false;
        this.is_update = false;
        this.is_start = true;
        this.is_active = false;
        this.is_resize = false;
        this.is_click = false;

        this.$cache = {
            win: $(window),
            body: $(document.body),
            input: $(input),
            cont: null,
            rs: null,
            min: null,
            max: null,
            from: null,
            to: null,
            single: null,
            bar: null,
            line: null,
            s_single: null,
            s_from: null,
            s_to: null,
            shad_single: null,
            shad_from: null,
            shad_to: null,
            grid: null,
            grid_labels: []
        };

        // get config data attributes
        var $inp = this.$cache.input;
        var data = {
            type: $inp.data("type"),

            min: $inp.data("min"),
            max: $inp.data("max"),
            from: $inp.data("from"),
            to: $inp.data("to"),
            step: $inp.data("step"),

            min_interval: $inp.data("minInterval"),
            max_interval: $inp.data("maxInterval"),
            drag_interval: $inp.data("dragInterval"),

            values: $inp.data("values"),

            from_fixed: $inp.data("fromFixed"),
            from_min: $inp.data("fromMin"),
            from_max: $inp.data("fromMax"),
            from_shadow: $inp.data("fromShadow"),

            to_fixed: $inp.data("toFixed"),
            to_min: $inp.data("toMin"),
            to_max: $inp.data("toMax"),
            to_shadow: $inp.data("toShadow"),

            prettify_enabled: $inp.data("prettifyEnabled"),
            prettify_separator: $inp.data("prettifySeparator"),

            force_edges: $inp.data("forceEdges"),

            keyboard: $inp.data("keyboard"),
            keyboard_step: $inp.data("keyboardStep"),

            grid: $inp.data("grid"),
            grid_margin: $inp.data("gridMargin"),
            grid_num: $inp.data("gridNum"),
            grid_snap: $inp.data("gridSnap"),

            hide_min_max: $inp.data("hideMinMax"),
            hide_from_to: $inp.data("hideFromTo"),

            prefix: $inp.data("prefix"),
            postfix: $inp.data("postfix"),
            max_postfix: $inp.data("maxPostfix"),
            decorate_both: $inp.data("decorateBoth"),
            values_separator: $inp.data("valuesSeparator"),

            disable: $inp.data("disable")
        };
        data.values = data.values && data.values.split(",");

        // get from and to out of input
        var val = $inp.prop("value");
        if (val) {
            val = val.split(";");

            if (val[0] && val[0] == +val[0]) {
                val[0] = +val[0];
            }
            if (val[1] && val[1] == +val[1]) {
                val[1] = +val[1];
            }

            if (options && options.values && options.values.length) {
                data.from = val[0] && options.values.indexOf(val[0]);
                data.to = val[1] && options.values.indexOf(val[1]);
            } else {
                data.from = val[0] && +val[0];
                data.to = val[1] && +val[1];
            }
        }

        // JS config has a priority
        options = $.extend(data, options);

        // get config from options
        this.options = $.extend({
            type: "single",

            min: 10,
            max: 100,
            from: null,
            to: null,
            step: 1,

            min_interval: 0,
            max_interval: 0,
            drag_interval: false,

            values: [],
            p_values: [],

            from_fixed: false,
            from_min: null,
            from_max: null,
            from_shadow: false,

            to_fixed: false,
            to_min: null,
            to_max: null,
            to_shadow: false,

            prettify_enabled: true,
            prettify_separator: " ",
            prettify: null,

            force_edges: false,

            keyboard: false,
            keyboard_step: 5,

            grid: false,
            grid_margin: true,
            grid_num: 4,
            grid_snap: false,

            hide_min_max: false,
            hide_from_to: false,

            prefix: "",
            postfix: "",
            max_postfix: "",
            decorate_both: true,
            values_separator: " — ",

            disable: false,

            onStart: null,
            onChange: null,
            onFinish: null,
            onUpdate: null
        }, options);

        this.validate();

        this.result = {
            input: this.$cache.input,
            slider: null,

            min: this.options.min,
            max: this.options.max,

            from: this.options.from,
            from_percent: 0,
            from_value: null,

            to: this.options.to,
            to_percent: 0,
            to_value: null
        };

        this.coords = {
            // left
            x_gap: 0,
            x_pointer: 0,

            // width
            w_rs: 0,
            w_rs_old: 0,
            w_handle: 0,

            // percents
            p_gap: 0,
            p_gap_left: 0,
            p_gap_right: 0,
            p_step: 0,
            p_pointer: 0,
            p_handle: 0,
            p_single: 0,
            p_single_real: 0,
            p_from: 0,
            p_from_real: 0,
            p_to: 0,
            p_to_real: 0,
            p_bar_x: 0,
            p_bar_w: 0,

            // grid
            grid_gap: 0,
            big_num: 0,
            big: [],
            big_w: [],
            big_p: [],
            big_x: []
        };

        this.labels = {
            // width
            w_min: 0,
            w_max: 0,
            w_from: 0,
            w_to: 0,
            w_single: 0,

            // percents
            p_min: 0,
            p_max: 0,
            p_from: 0,
            p_from_left: 0,
            p_to: 0,
            p_to_left: 0,
            p_single: 0,
            p_single_left: 0
        };

        this.init();
    };

    IonRangeSlider.prototype = {
        init: function (is_update) {
            this.coords.p_step = this.options.step / ((this.options.max - this.options.min) / 100);
            this.target = "base";

            this.toggleInput();
            this.append();
            this.setMinMax();

            if (is_update) {
                this.force_redraw = true;
                this.calc(true);

                if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
                    this.options.onUpdate(this.result);
                }
            } else {
                this.force_redraw = true;
                this.calc(true);

                if (this.options.onStart && typeof this.options.onStart === "function") {
                    this.options.onStart(this.result);
                }
            }

            this.updateScene();
        },

        append: function () {
            var container_html = '<span class="irs js-irs-' + this.plugin_count + '"></span>';
            this.$cache.input.before(container_html);
            this.$cache.input.prop("readonly", true);
            this.$cache.cont = this.$cache.input.prev();
            this.result.slider = this.$cache.cont;

            this.$cache.cont.html(base_html);
            this.$cache.rs = this.$cache.cont.find(".irs");
            this.$cache.min = this.$cache.cont.find(".irs-min");
            this.$cache.max = this.$cache.cont.find(".irs-max");
            this.$cache.from = this.$cache.cont.find(".irs-from");
            this.$cache.to = this.$cache.cont.find(".irs-to");
            this.$cache.single = this.$cache.cont.find(".irs-single");
            this.$cache.bar = this.$cache.cont.find(".irs-bar");
            this.$cache.line = this.$cache.cont.find(".irs-line");
            this.$cache.grid = this.$cache.cont.find(".irs-grid");

            if (this.options.type === "single") {
                this.$cache.cont.append(single_html);
                this.$cache.s_single = this.$cache.cont.find(".single");
                this.$cache.from[0].style.visibility = "hidden";
                this.$cache.to[0].style.visibility = "hidden";
                this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
            } else {
                this.$cache.cont.append(double_html);
                this.$cache.s_from = this.$cache.cont.find(".from");
                this.$cache.s_to = this.$cache.cont.find(".to");
                this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
                this.$cache.shad_to = this.$cache.cont.find(".shadow-to");

                this.setTopHandler();
            }

            if (this.options.hide_from_to) {
                this.$cache.from[0].style.display = "none";
                this.$cache.to[0].style.display = "none";
                this.$cache.single[0].style.display = "none";
            }

            this.appendGrid();

            if (this.options.disable) {
                this.appendDisableMask();
                this.$cache.input[0].disabled = true;
            } else {
                this.$cache.cont.removeClass("irs-disabled");
                this.$cache.input[0].disabled = false;
                this.bindEvents();
            }
        },

        setTopHandler: function () {
            var min = this.options.min,
                max = this.options.max,
                from = this.options.from,
                to = this.options.to;

            if (from > min && to === max) {
                this.$cache.s_from.addClass("type_last");
            } else if (to < max) {
                this.$cache.s_to.addClass("type_last");
            }
        },

        appendDisableMask: function () {
            this.$cache.cont.append(disable_html);
            this.$cache.cont.addClass("irs-disabled");
        },

        remove: function () {
            this.$cache.cont.remove();
            this.$cache.cont = null;

            this.$cache.line.off("keydown.irs_" + this.plugin_count);

            this.$cache.body.off("touchmove.irs_" + this.plugin_count);
            this.$cache.body.off("mousemove.irs_" + this.plugin_count);

            this.$cache.win.off("touchend.irs_" + this.plugin_count);
            this.$cache.win.off("mouseup.irs_" + this.plugin_count);

            if (is_old_ie) {
                this.$cache.body.off("mouseup.irs_" + this.plugin_count);
                this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
            }

            this.$cache.grid_labels = [];
            this.coords.big = [];
            this.coords.big_w = [];
            this.coords.big_p = [];
            this.coords.big_x = [];

            cancelAnimationFrame(this.raf_id);
        },

        bindEvents: function () {
            this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
            this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));

            this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
            this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));

            this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

            if (this.options.drag_interval && this.options.type === "double") {
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
            } else {
                this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            }

            if (this.options.type === "single") {
                this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
                this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            } else {
                this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));

                this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
                this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
                this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
                this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
            }

            if (this.options.keyboard) {
                this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
            }

            if (is_old_ie) {
                this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
                this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
            }
        },

        pointerMove: function (e) {
            if (!this.dragging) {
                return;
            }

            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            this.coords.x_pointer = x - this.coords.x_gap;

            this.calc();
        },

        pointerUp: function (e) {
            if (this.current_plugin !== this.plugin_count) {
                return;
            }

            if (this.is_active) {
                this.is_active = false;
            } else {
                return;
            }

            var is_function = this.options.onFinish && typeof this.options.onFinish === "function",
                is_original = $.contains(this.$cache.cont[0], e.target) || this.dragging;

            if (is_function && is_original) {
                this.options.onFinish(this.result);
            }

            this.$cache.cont.find(".state_hover").removeClass("state_hover");

            this.force_redraw = true;
            this.dragging = false;

            if (is_old_ie) {
                $("*").prop("unselectable", false);
            }

            this.updateScene();
        },

        pointerDown: function (target, e) {
            e.preventDefault();
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            if (e.button === 2) {
                return;
            }

            this.current_plugin = this.plugin_count;
            this.target = target;

            this.is_active = true;
            this.dragging = true;

            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = x - this.coords.x_gap;

            this.calcPointer();

            switch (target) {
                case "single":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single);
                    break;
                case "from":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from);
                    this.$cache.s_from.addClass("state_hover");
                    this.$cache.s_from.addClass("type_last");
                    this.$cache.s_to.removeClass("type_last");
                    break;
                case "to":
                    this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to);
                    this.$cache.s_to.addClass("state_hover");
                    this.$cache.s_to.addClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
                case "both":
                    this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from);
                    this.coords.p_gap_right = this.toFixed(this.coords.p_to - this.coords.p_pointer);
                    this.$cache.s_to.removeClass("type_last");
                    this.$cache.s_from.removeClass("type_last");
                    break;
            }

            if (is_old_ie) {
                $("*").prop("unselectable", true);
            }

            this.$cache.line.trigger("focus");

            this.updateScene();
        },

        pointerClick: function (target, e) {
            e.preventDefault();
            var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
            if (e.button === 2) {
                return;
            }

            this.current_plugin = this.plugin_count;
            this.target = target;

            this.is_click = true;
            this.coords.x_gap = this.$cache.rs.offset().left;
            this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();

            this.force_redraw = true;
            this.calc();

            this.$cache.line.trigger("focus");
        },

        key: function (target, e) {
            if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                return;
            }

            switch (e.which) {
                case 83: // W
                case 65: // A
                case 40: // DOWN
                case 37: // LEFT
                    e.preventDefault();
                    this.moveByKey(false);
                    break;

                case 87: // S
                case 68: // D
                case 38: // UP
                case 39: // RIGHT
                    e.preventDefault();
                    this.moveByKey(true);
                    break;
            }

            return true;
        },

        // Move by key. Beta
        // TODO: refactor than have plenty of time
        moveByKey: function (right) {
            var p = this.coords.p_pointer;

            if (right) {
                p += this.options.keyboard_step;
            } else {
                p -= this.options.keyboard_step;
            }

            this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
            this.is_key = true;
            this.calc();
        },

        setMinMax: function () {
            if (!this.options) {
                return;
            }

            if (this.options.hide_min_max) {
                this.$cache.min[0].style.display = "none";
                this.$cache.max[0].style.display = "none";
                return;
            }

            if (this.options.values.length) {
                this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
                this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
            } else {
                this.$cache.min.html(this.decorate(this._prettify(this.options.min), this.options.min));
                this.$cache.max.html(this.decorate(this._prettify(this.options.max), this.options.max));
            }

            this.labels.w_min = this.$cache.min.outerWidth(false);
            this.labels.w_max = this.$cache.max.outerWidth(false);
        },



        // =============================================================================================================
        // Calculations

        calc: function (update) {
            if (!this.options) {
                return;
            }

            this.calc_count++;

            if (this.calc_count === 10 || update) {
                this.calc_count = 0;
                this.coords.w_rs = this.$cache.rs.outerWidth(false);
                if (this.options.type === "single") {
                    this.coords.w_handle = this.$cache.s_single.outerWidth(false);
                } else {
                    this.coords.w_handle = this.$cache.s_from.outerWidth(false);
                }
            }

            if (!this.coords.w_rs) {
                return;
            }

            this.calcPointer();

            this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
            var real_width = 100 - this.coords.p_handle,
                real_x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

            if (this.target === "click") {
                real_x = this.toFixed(this.coords.p_pointer - (this.coords.p_handle / 2));
                this.target = this.chooseHandle(real_x);
            }

            if (real_x < 0) {
                real_x = 0;
            } else if (real_x > real_width) {
                real_x = real_width;
            }

            switch (this.target) {
                case "base":
                    var w = (this.options.max - this.options.min) / 100,
                        f = (this.result.from - this.options.min) / w,
                        t = (this.result.to - this.options.min) / w;

                    this.coords.p_single_real = this.toFixed(f);
                    this.coords.p_from_real = this.toFixed(f);
                    this.coords.p_to_real = this.toFixed(t);

                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);

                    this.coords.p_single = this.toFixed(f - (this.coords.p_handle / 100 * f));
                    this.coords.p_from = this.toFixed(f - (this.coords.p_handle / 100 * f));
                    this.coords.p_to = this.toFixed(t - (this.coords.p_handle / 100 * t));

                    this.target = null;

                    break;

                case "single":
                    if (this.options.from_fixed) {
                        break;
                    }

                    this.coords.p_single_real = this.calcWithStep(real_x / real_width * 100);
                    this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
                    this.coords.p_single = this.toFixed(this.coords.p_single_real / 100 * real_width);

                    break;

                case "from":
                    if (this.options.from_fixed) {
                        break;
                    }

                    this.coords.p_from_real = this.calcWithStep(real_x / real_width * 100);
                    if (this.coords.p_from_real > this.coords.p_to_real) {
                        this.coords.p_from_real = this.coords.p_to_real;
                    }
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * real_width);

                    break;

                case "to":
                    if (this.options.to_fixed) {
                        break;
                    }

                    this.coords.p_to_real = this.calcWithStep(real_x / real_width * 100);
                    if (this.coords.p_to_real < this.coords.p_from_real) {
                        this.coords.p_to_real = this.coords.p_from_real;
                    }
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * real_width);

                    break;

                case "both":
                    if (this.options.from_fixed || this.options.to_fixed) {
                        break;
                    }

                    real_x = this.toFixed(real_x + (this.coords.p_handle * 0.1));

                    this.coords.p_from_real = this.calcWithStep((real_x - this.coords.p_gap_left) / real_width * 100);
                    this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
                    this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
                    this.coords.p_from = this.toFixed(this.coords.p_from_real / 100 * real_width);

                    this.coords.p_to_real = this.calcWithStep((real_x + this.coords.p_gap_right) / real_width * 100);
                    this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
                    this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
                    this.coords.p_to = this.toFixed(this.coords.p_to_real / 100 * real_width);

                    break;
            }

            if (this.options.type === "single") {
                this.coords.p_bar_x = (this.coords.p_handle / 2);
                this.coords.p_bar_w = this.coords.p_single;

                this.result.from_percent = this.coords.p_single_real;
                this.result.from = this.calcReal(this.coords.p_single_real);
                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                }
            } else {
                this.coords.p_bar_x = this.toFixed(this.coords.p_from + (this.coords.p_handle / 2));
                this.coords.p_bar_w = this.toFixed(this.coords.p_to - this.coords.p_from);

                this.result.from_percent = this.coords.p_from_real;
                this.result.from = this.calcReal(this.coords.p_from_real);
                this.result.to_percent = this.coords.p_to_real;
                this.result.to = this.calcReal(this.coords.p_to_real);
                if (this.options.values.length) {
                    this.result.from_value = this.options.values[this.result.from];
                    this.result.to_value = this.options.values[this.result.to];
                }
            }

            this.calcMinMax();
            this.calcLabels();
        },

        calcPointer: function () {
            if (!this.coords.w_rs) {
                this.coords.p_pointer = 0;
                return;
            }

            if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)  ) {
                this.coords.x_pointer = 0;
            } else if (this.coords.x_pointer > this.coords.w_rs) {
                this.coords.x_pointer = this.coords.w_rs;
            }

            this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
        },

        chooseHandle: function (real_x) {
            if (this.options.type === "single") {
                return "single";
            } else {
                var m_point = this.coords.p_from_real + ((this.coords.p_to_real - this.coords.p_from_real) / 2);
                if (real_x >= m_point) {
                    return this.options.to_fixed ? "from" : "to";
                } else {
                    return this.options.from_fixed ? "to" : "from";
                }
            }
        },

        calcMinMax: function () {
            if (!this.coords.w_rs) {
                return;
            }

            this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
            this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
        },

        calcLabels: function () {
            if (!this.coords.w_rs || this.options.hide_from_to) {
                return;
            }

            if (this.options.type === "single") {

                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = this.coords.p_single + (this.coords.p_handle / 2) - (this.labels.p_single / 2);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single);

            } else {

                this.labels.w_from = this.$cache.from.outerWidth(false);
                this.labels.p_from = this.labels.w_from / this.coords.w_rs * 100;
                this.labels.p_from_left = this.coords.p_from + (this.coords.p_handle / 2) - (this.labels.p_from / 2);
                this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
                this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from);

                this.labels.w_to = this.$cache.to.outerWidth(false);
                this.labels.p_to = this.labels.w_to / this.coords.w_rs * 100;
                this.labels.p_to_left = this.coords.p_to + (this.coords.p_handle / 2) - (this.labels.p_to / 2);
                this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
                this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to);

                this.labels.w_single = this.$cache.single.outerWidth(false);
                this.labels.p_single = this.labels.w_single / this.coords.w_rs * 100;
                this.labels.p_single_left = ((this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to) / 2) - (this.labels.p_single / 2);
                this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
                this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single);

            }
        },



        // =============================================================================================================
        // Drawings

        updateScene: function () {
            if (this.raf_id) {
                cancelAnimationFrame(this.raf_id);
                this.raf_id = null;
            }

            clearTimeout(this.update_tm);
            this.update_tm = null;

            if (!this.options) {
                return;
            }

            this.drawHandles();

            if (this.is_active) {
                this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
            } else {
                this.update_tm = setTimeout(this.updateScene.bind(this), 300);
            }
        },

        drawHandles: function () {
            this.coords.w_rs = this.$cache.rs.outerWidth(false);

            if (!this.coords.w_rs) {
                return;
            }

            if (this.coords.w_rs !== this.coords.w_rs_old) {
                this.target = "base";
                this.is_resize = true;
            }

            if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
                this.setMinMax();
                this.calc(true);
                this.drawLabels();
                if (this.options.grid) {
                    this.calcGridMargin();
                    this.calcGridLabels();
                }
                this.force_redraw = true;
                this.coords.w_rs_old = this.coords.w_rs;
                this.drawShadow();
            }

            if (!this.coords.w_rs) {
                return;
            }

            if (!this.dragging && !this.force_redraw && !this.is_key) {
                return;
            }

            if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {

                this.drawLabels();

                this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
                this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

                if (this.options.type === "single") {
                    this.$cache.s_single[0].style.left = this.coords.p_single + "%";

                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value);
                        this.$cache.input.data("from", this.result.from_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from);
                        this.$cache.input.data("from", this.result.from);
                    }
                } else {
                    this.$cache.s_from[0].style.left = this.coords.p_from + "%";
                    this.$cache.s_to[0].style.left = this.coords.p_to + "%";

                    if (this.old_from !== this.result.from || this.force_redraw) {
                        this.$cache.from[0].style.left = this.labels.p_from_left + "%";
                    }
                    if (this.old_to !== this.result.to || this.force_redraw) {
                        this.$cache.to[0].style.left = this.labels.p_to_left + "%";
                    }

                    this.$cache.single[0].style.left = this.labels.p_single_left + "%";

                    if (this.options.values.length) {
                        this.$cache.input.prop("value", this.result.from_value + ";" + this.result.to_value);
                        this.$cache.input.data("from", this.result.from_value);
                        this.$cache.input.data("to", this.result.to_value);
                    } else {
                        this.$cache.input.prop("value", this.result.from + ";" + this.result.to);
                        this.$cache.input.data("from", this.result.from);
                        this.$cache.input.data("to", this.result.to);
                    }
                }

                if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
                    this.$cache.input.trigger("change");
                }

                this.old_from = this.result.from;
                this.old_to = this.result.to;

                var is_function = this.options.onChange && typeof this.options.onChange === "function" && !this.is_resize;
                if (is_function && !this.is_update && !this.is_start) {
                    this.options.onChange(this.result);
                }

                var is_finish = this.options.onFinish && typeof this.options.onFinish === "function";
                if (is_finish && (this.is_key || this.is_click)) {
                    this.options.onFinish(this.result);
                }

                this.is_update = false;
                this.is_resize = false;
            }

            this.is_start = false;
            this.is_key = false;
            this.is_click = false;
            this.force_redraw = false;
        },

        drawLabels: function () {
            if (!this.options) {
                return;
            }

            var values_num = this.options.values.length,
                p_values = this.options.p_values,
                text_single,
                text_from,
                text_to;

            if (this.options.hide_from_to) {
                return;
            }

            if (this.options.type === "single") {

                if (values_num) {
                    text_single = this.decorate(p_values[this.result.from]);
                    this.$cache.single.html(text_single);
                } else {
                    text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                    this.$cache.single.html(text_single);
                }

                this.calcLabels();

                if (this.labels.p_single_left < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }

                if (this.labels.p_single_left + this.labels.p_single > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }

            } else {

                if (values_num) {

                    if (this.options.decorate_both) {
                        text_single = this.decorate(p_values[this.result.from]);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(p_values[this.result.to]);
                    } else {
                        text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
                    }
                    text_from = this.decorate(p_values[this.result.from]);
                    text_to = this.decorate(p_values[this.result.to]);

                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);

                } else {

                    if (this.options.decorate_both) {
                        text_single = this.decorate(this._prettify(this.result.from), this.result.from);
                        text_single += this.options.values_separator;
                        text_single += this.decorate(this._prettify(this.result.to), this.result.to);
                    } else {
                        text_single = this.decorate(this._prettify(this.result.from) + this.options.values_separator + this._prettify(this.result.to), this.result.to);
                    }
                    text_from = this.decorate(this._prettify(this.result.from), this.result.from);
                    text_to = this.decorate(this._prettify(this.result.to), this.result.to);

                    this.$cache.single.html(text_single);
                    this.$cache.from.html(text_from);
                    this.$cache.to.html(text_to);

                }

                this.calcLabels();

                var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
                    single_left = this.labels.p_single_left + this.labels.p_single,
                    to_left = this.labels.p_to_left + this.labels.p_to,
                    max = Math.max(single_left, to_left);

                if (this.labels.p_from_left + this.labels.p_from >= this.labels.p_to_left) {
                    this.$cache.from[0].style.visibility = "hidden";
                    this.$cache.to[0].style.visibility = "hidden";
                    this.$cache.single[0].style.visibility = "visible";

                    if (this.result.from === this.result.to) {
                        this.$cache.from[0].style.visibility = "visible";
                        this.$cache.single[0].style.visibility = "hidden";
                        max = to_left;
                    } else {
                        this.$cache.from[0].style.visibility = "hidden";
                        this.$cache.single[0].style.visibility = "visible";
                        max = Math.max(single_left, to_left);
                    }
                } else {
                    this.$cache.from[0].style.visibility = "visible";
                    this.$cache.to[0].style.visibility = "visible";
                    this.$cache.single[0].style.visibility = "hidden";
                }

                if (min < this.labels.p_min + 1) {
                    this.$cache.min[0].style.visibility = "hidden";
                } else {
                    this.$cache.min[0].style.visibility = "visible";
                }

                if (max > 100 - this.labels.p_max - 1) {
                    this.$cache.max[0].style.visibility = "hidden";
                } else {
                    this.$cache.max[0].style.visibility = "visible";
                }

            }
        },

        drawShadow: function () {
            var o = this.options,
                c = this.$cache,

                is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min),
                is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max),
                is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min),
                is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max),

                from_min,
                from_max,
                to_min,
                to_max;

            if (o.type === "single") {
                if (o.from_shadow && (is_from_min || is_from_max)) {
                    from_min = this.calcPercent(o.from_min || o.min);
                    from_max = this.calcPercent(o.from_max || o.max) - from_min;
                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                    from_min = from_min + (this.coords.p_handle / 2);

                    c.shad_single[0].style.display = "block";
                    c.shad_single[0].style.left = from_min + "%";
                    c.shad_single[0].style.width = from_max + "%";
                } else {
                    c.shad_single[0].style.display = "none";
                }
            } else {
                if (o.from_shadow && (is_from_min || is_from_max)) {
                    from_min = this.calcPercent(o.from_min || o.min);
                    from_max = this.calcPercent(o.from_max || o.max) - from_min;
                    from_min = this.toFixed(from_min - (this.coords.p_handle / 100 * from_min));
                    from_max = this.toFixed(from_max - (this.coords.p_handle / 100 * from_max));
                    from_min = from_min + (this.coords.p_handle / 2);

                    c.shad_from[0].style.display = "block";
                    c.shad_from[0].style.left = from_min + "%";
                    c.shad_from[0].style.width = from_max + "%";
                } else {
                    c.shad_from[0].style.display = "none";
                }

                if (o.to_shadow && (is_to_min || is_to_max)) {
                    to_min = this.calcPercent(o.to_min || o.min);
                    to_max = this.calcPercent(o.to_max || o.max) - to_min;
                    to_min = this.toFixed(to_min - (this.coords.p_handle / 100 * to_min));
                    to_max = this.toFixed(to_max - (this.coords.p_handle / 100 * to_max));
                    to_min = to_min + (this.coords.p_handle / 2);

                    c.shad_to[0].style.display = "block";
                    c.shad_to[0].style.left = to_min + "%";
                    c.shad_to[0].style.width = to_max + "%";
                } else {
                    c.shad_to[0].style.display = "none";
                }
            }
        },



        // =============================================================================================================
        // Service methods

        toggleInput: function () {
            this.$cache.input.toggleClass("irs-hidden-input");
        },

        calcPercent: function (num) {
            var w = (this.options.max - this.options.min) / 100,
                percent = (num - this.options.min) / w;

            return this.toFixed(percent);
        },

        calcReal: function (percent) {
            var min = this.options.min,
                max = this.options.max,
                abs = 0;

            if (min < 0) {
                abs = Math.abs(min);
                min = min + abs;
                max = max + abs;
            }

            var number = ((max - min) / 100 * percent) + min,
                string = this.options.step.toString().split(".")[1],
                result;

            if (string) {
                number = +number.toFixed(string.length);
            } else {
                number = number / this.options.step;
                number = number * this.options.step;
                number = +number.toFixed(0);
            }

            if (abs) {
                number -= abs;
            }

            if (string) {
                result = +number.toFixed(string.length);
            } else {
                result = this.toFixed(number);
            }

            if (result < this.options.min) {
                result = this.options.min;
            } else if (result > this.options.max) {
                result = this.options.max;
            }

            return result;
        },

        calcWithStep: function (percent) {
            var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

            if (rounded > 100) {
                rounded = 100;
            }
            if (percent === 100) {
                rounded = 100;
            }

            return this.toFixed(rounded);
        },

        checkMinInterval: function (p_current, p_next, type) {
            var o = this.options,
                current,
                next;

            if (!o.min_interval) {
                return p_current;
            }

            current = this.calcReal(p_current);
            next = this.calcReal(p_next);

            if (type === "from") {

                if (next - current < o.min_interval) {
                    current = next - o.min_interval;
                }

            } else {

                if (current - next < o.min_interval) {
                    current = next + o.min_interval;
                }

            }

            return this.calcPercent(current);
        },

        checkMaxInterval: function (p_current, p_next, type) {
            var o = this.options,
                current,
                next;

            if (!o.max_interval) {
                return p_current;
            }

            current = this.calcReal(p_current);
            next = this.calcReal(p_next);

            if (type === "from") {

                if (next - current > o.max_interval) {
                    current = next - o.max_interval;
                }

            } else {

                if (current - next > o.max_interval) {
                    current = next + o.max_interval;
                }

            }

            return this.calcPercent(current);
        },

        checkDiapason: function (p_num, min, max) {
            var num = this.calcReal(p_num),
                o = this.options;

            if (!min || typeof min !== "number") {
                min = o.min;
            }

            if (!max || typeof max !== "number") {
                max = o.max;
            }

            if (num < min) {
                num = min;
            }

            if (num > max) {
                num = max;
            }

            return this.calcPercent(num);
        },

        toFixed: function (num) {
            num = num.toFixed(5);
            return +num;
        },

        _prettify: function (num) {
            if (!this.options.prettify_enabled) {
                return num;
            }

            if (this.options.prettify && typeof this.options.prettify === "function") {
                return this.options.prettify(num);
            } else {
                return this.prettify(num);
            }
        },

        prettify: function (num) {
            var n = num.toString();
            return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
        },

        checkEdges: function (left, width) {
            if (!this.options.force_edges) {
                return this.toFixed(left);
            }

            if (left < 0) {
                left = 0;
            } else if (left > 100 - width) {
                left = 100 - width;
            }

            return this.toFixed(left);
        },

        validate: function () {
            var o = this.options,
                r = this.result,
                v = o.values,
                vl = v.length,
                value,
                i;

            if (typeof o.min === "string") o.min = +o.min;
            if (typeof o.max === "string") o.max = +o.max;
            if (typeof o.from === "string") o.from = +o.from;
            if (typeof o.to === "string") o.to = +o.to;
            if (typeof o.step === "string") o.step = +o.step;

            if (typeof o.from_min === "string") o.from_min = +o.from_min;
            if (typeof o.from_max === "string") o.from_max = +o.from_max;
            if (typeof o.to_min === "string") o.to_min = +o.to_min;
            if (typeof o.to_max === "string") o.to_max = +o.to_max;

            if (typeof o.keyboard_step === "string") o.keyboard_step = +o.keyboard_step;
            if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

            if (o.max <= o.min) {
                if (o.min) {
                    o.max = o.min * 2;
                } else {
                    o.max = o.min + 1;
                }
                o.step = 1;
            }

            if (vl) {
                o.p_values = [];
                o.min = 0;
                o.max = vl - 1;
                o.step = 1;
                o.grid_num = o.max;
                o.grid_snap = true;


                for (i = 0; i < vl; i++) {
                    value = +v[i];

                    if (!isNaN(value)) {
                        v[i] = value;
                        value = this._prettify(value);
                    } else {
                        value = v[i];
                    }

                    o.p_values.push(value);
                }
            }

            if (typeof o.from !== "number" || isNaN(o.from)) {
                o.from = o.min;
            }

            if (typeof o.to !== "number" || isNaN(o.from)) {
                o.to = o.max;
            }

            if (o.type === "single") {

                if (o.from < o.min) {
                    o.from = o.min;
                }

                if (o.from > o.max) {
                    o.from = o.max;
                }

            } else {

                if (o.from < o.min || o.from > o.max) {
                    o.from = o.min;
                }
                if (o.to > o.max || o.to < o.min) {
                    o.to = o.max;
                }
                if (o.from > o.to) {
                    o.from = o.to;
                }

            }

            if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
                o.step = 1;
            }

            if (typeof o.keyboard_step !== "number" || isNaN(o.keyboard_step) || !o.keyboard_step || o.keyboard_step < 0) {
                o.keyboard_step = 5;
            }

            if (o.from_min && o.from < o.from_min) {
                o.from = o.from_min;
            }

            if (o.from_max && o.from > o.from_max) {
                o.from = o.from_max;
            }

            if (o.to_min && o.to < o.to_min) {
                o.to = o.to_min;
            }

            if (o.to_max && o.from > o.to_max) {
                o.to = o.to_max;
            }

            if (r) {
                if (r.min !== o.min) {
                    r.min = o.min;
                }

                if (r.max !== o.max) {
                    r.max = o.max;
                }

                if (r.from < r.min || r.from > r.max) {
                    r.from = o.from;
                }

                if (r.to < r.min || r.to > r.max) {
                    r.to = o.to;
                }
            }

            if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
                o.min_interval = 0;
            }

            if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
                o.max_interval = 0;
            }

            if (o.min_interval && o.min_interval > o.max - o.min) {
                o.min_interval = o.max - o.min;
            }

            if (o.max_interval && o.max_interval > o.max - o.min) {
                o.max_interval = o.max - o.min;
            }
        },

        decorate: function (num, original) {
            var decorated = "",
                o = this.options;

            if (o.prefix) {
                decorated += o.prefix;
            }

            decorated += num;

            if (o.max_postfix) {
                if (o.values.length && num === o.p_values[o.max]) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                } else if (original === o.max) {
                    decorated += o.max_postfix;
                    if (o.postfix) {
                        decorated += " ";
                    }
                }
            }

            if (o.postfix) {
                decorated += o.postfix;
            }

            return decorated;
        },

        updateFrom: function () {
            this.result.from = this.options.from;
            this.result.from_percent = this.calcPercent(this.result.from);
            if (this.options.values) {
                this.result.from_value = this.options.values[this.result.from];
            }
        },

        updateTo: function () {
            this.result.to = this.options.to;
            this.result.to_percent = this.calcPercent(this.result.to);
            if (this.options.values) {
                this.result.to_value = this.options.values[this.result.to];
            }
        },

        updateResult: function () {
            this.result.min = this.options.min;
            this.result.max = this.options.max;
            this.updateFrom();
            this.updateTo();
        },


        // =============================================================================================================
        // Grid

        appendGrid: function () {
            if (!this.options.grid) {
                return;
            }

            var o = this.options,
                i, z,

                total = o.max - o.min,
                big_num = o.grid_num,
                big_p = 0,
                big_w = 0,

                small_max = 4,
                local_small_max,
                small_p,
                small_w = 0,

                result,
                html = '';



            this.calcGridMargin();

            if (o.grid_snap) {
                big_num = total / o.step;
                big_p = this.toFixed(o.step / (total / 100));
            } else {
                big_p = this.toFixed(100 / big_num);
            }

            if (big_num > 4) {
                small_max = 3;
            }
            if (big_num > 7) {
                small_max = 2;
            }
            if (big_num > 14) {
                small_max = 1;
            }
            if (big_num > 28) {
                small_max = 0;
            }

            for (i = 0; i < big_num + 1; i++) {
                local_small_max = small_max;

                big_w = this.toFixed(big_p * i);
                if (big_w > 100) {
                    big_w = 100;

                    local_small_max -= 2;
                    if (local_small_max < 0) {
                        local_small_max = 0;
                    }
                }
                this.coords.big[i] = big_w;

                small_p = (big_w - (big_p * (i - 1))) / (local_small_max + 1);

                for (z = 1; z <= local_small_max; z++) {
                    if (big_w === 0) {
                        break;
                    }

                    small_w = this.toFixed(big_w - (small_p * z));

                    html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
                }

                html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';

                result = this.calcReal(big_w);
                if (o.values.length) {
                    result = o.p_values[result];
                } else {
                    result = this._prettify(result);
                }

                html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
            }
            this.coords.big_num = Math.ceil(big_num + 1);



            this.$cache.cont.addClass("irs-with-grid");
            this.$cache.grid.html(html);
            this.cacheGridLabels();
        },

        cacheGridLabels: function () {
            var $label, i,
                num = this.coords.big_num;

            for (i = 0; i < num; i++) {
                $label = this.$cache.grid.find(".js-grid-text-" + i);
                this.$cache.grid_labels.push($label);
            }

            this.calcGridLabels();
        },

        calcGridLabels: function () {
            var i, label, start = [], finish = [],
                num = this.coords.big_num;

            for (i = 0; i < num; i++) {
                this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
                this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
                this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);

                start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
                finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
            }

            if (this.options.force_edges) {
                if (start[0] < -this.coords.grid_gap) {
                    start[0] = -this.coords.grid_gap;
                    finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);

                    this.coords.big_x[0] = this.coords.grid_gap;
                }

                if (finish[num - 1] > 100 + this.coords.grid_gap) {
                    finish[num - 1] = 100 + this.coords.grid_gap;
                    start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);

                    this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
                }
            }

            this.calcGridCollision(2, start, finish);
            this.calcGridCollision(4, start, finish);

            for (i = 0; i < num; i++) {
                label = this.$cache.grid_labels[i][0];
                label.style.marginLeft = -this.coords.big_x[i] + "%";
            }
        },

        // Collisions Calc Beta
        // TODO: Refactor then have plenty of time
        calcGridCollision: function (step, start, finish) {
            var i, next_i, label,
                num = this.coords.big_num;

            for (i = 0; i < num; i += step) {
                next_i = i + (step / 2);
                if (next_i >= num) {
                    break;
                }

                label = this.$cache.grid_labels[next_i][0];

                if (finish[i] <= start[next_i]) {
                    label.style.visibility = "visible";
                } else {
                    label.style.visibility = "hidden";
                }
            }
        },

        calcGridMargin: function () {
            if (!this.options.grid_margin) {
                return;
            }

            this.coords.w_rs = this.$cache.rs.outerWidth(false);
            if (!this.coords.w_rs) {
                return;
            }

            if (this.options.type === "single") {
                this.coords.w_handle = this.$cache.s_single.outerWidth(false);
            } else {
                this.coords.w_handle = this.$cache.s_from.outerWidth(false);
            }
            this.coords.p_handle = this.toFixed(this.coords.w_handle  / this.coords.w_rs * 100);
            this.coords.grid_gap = this.toFixed((this.coords.p_handle / 2) - 0.1);

            this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
            this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
        },



        // =============================================================================================================
        // Public methods

        update: function (options) {
            if (!this.input) {
                return;
            }

            this.is_update = true;

            this.options.from = this.result.from;
            this.options.to = this.result.to;

            this.options = $.extend(this.options, options);
            this.validate();
            this.updateResult(options);

            this.toggleInput();
            this.remove();
            this.init(true);
        },

        reset: function () {
            if (!this.input) {
                return;
            }

            this.updateResult();
            this.update();
        },

        destroy: function () {
            if (!this.input) {
                return;
            }

            this.toggleInput();
            this.$cache.input.prop("readonly", false);
            $.data(this.input, "ionRangeSlider", null);

            this.remove();
            this.input = null;
            this.options = null;
        }
    };

    $.fn.ionRangeSlider = function (options) {
        return this.each(function() {
            if (!$.data(this, "ionRangeSlider")) {
                $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
            }
        });
    };



    // =================================================================================================================
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

    // MIT license

    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

} (jQuery, document, window, navigator));

var fontawesome={};fontawesome.markers={'GLASS':'M61.164 -57.743q0 1.26 -1.548 2.808l-22.752 22.752v27.648h11.52q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62 -1.62 0.684h-32.256q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h11.52v-27.648l-22.752 -22.752q-1.548 -1.548 -1.548 -2.808 0 -0.828 0.648 -1.314t1.368 -0.63 1.548 -0.144h50.688q0.828 0 1.548 0.144t1.368 0.63 0.648 1.314z','MUSIC':'M55.296 -56.375v40.32q0 1.8 -1.224 3.204t-3.096 2.178 -3.726 1.152 -3.474 0.378 -3.474 -0.378 -3.726 -1.152 -3.096 -2.178 -1.224 -3.204 1.224 -3.204 3.096 -2.178 3.726 -1.152 3.474 -0.378q3.78 0 6.912 1.404v-19.332l-27.648 8.532v25.524q0 1.8 -1.224 3.204t-3.096 2.178 -3.726 1.152 -3.474 0.378 -3.474 -0.378 -3.726 -1.152 -3.096 -2.178 -1.224 -3.204 1.224 -3.204 3.096 -2.178 3.726 -1.152 3.474 -0.378q3.78 0 6.912 1.404v-34.812q0 -1.116 0.684 -2.034t1.764 -1.278l29.952 -9.216q0.432 -0.144 1.008 -0.144 1.44 0 2.448 1.008t1.008 2.448z','SEARCH':'M41.472 -34.487q0 -6.66 -4.734 -11.394t-11.394 -4.734 -11.394 4.734 -4.734 11.394 4.734 11.394 11.394 4.734 11.394 -4.734 4.734 -11.394zm18.432 29.952q0 1.872 -1.368 3.24t-3.24 1.368q-1.944 0 -3.24 -1.368l-12.348 -12.312q-6.444 4.464 -14.364 4.464 -5.148 0 -9.846 -1.998t-8.1 -5.4 -5.4 -8.1 -1.998 -9.846 1.998 -9.846 5.4 -8.1 8.1 -5.4 9.846 -1.998 9.846 1.998 8.1 5.4 5.4 8.1 1.998 9.846q0 7.92 -4.464 14.364l12.348 12.348q1.332 1.332 1.332 3.24z','ENVELOPE_O':'M59.904 -10.295v-27.648q-1.152 1.296 -2.484 2.376 -9.648 7.416 -15.336 12.168 -1.836 1.548 -2.988 2.412t-3.114 1.746 -3.69 0.882h-0.072q-1.728 0 -3.69 -0.882t-3.114 -1.746 -2.988 -2.412q-5.688 -4.752 -15.336 -12.168 -1.332 -1.08 -2.484 -2.376v27.648q0 0.468 0.342 0.81t0.81 0.342h52.992q0.468 0 0.81 -0.342t0.342 -0.81zm0 -37.836v-0.882l-0.018 -0.468 -0.108 -0.45 -0.198 -0.324 -0.324 -0.27 -0.504 -0.09h-52.992q-0.468 0 -0.81 0.342t-0.342 0.81q0 6.048 5.292 10.224 6.948 5.472 14.436 11.412 0.216 0.18 1.26 1.062t1.656 1.35 1.602 1.134 1.818 0.99 1.548 0.324h0.072q0.72 0 1.548 -0.324t1.818 -0.99 1.602 -1.134 1.656 -1.35 1.26 -1.062q7.488 -5.94 14.436 -11.412 1.944 -1.548 3.618 -4.158t1.674 -4.734zm4.608 -1.332v39.168q0 2.376 -1.692 4.068t-4.068 1.692h-52.992q-2.376 0 -4.068 -1.692t-1.692 -4.068v-39.168q0 -2.376 1.692 -4.068t4.068 -1.692h52.992q2.376 0 4.068 1.692t1.692 4.068z','HEART':'M32.256 -4.535q-0.936 0 -1.584 -0.648l-22.464 -21.672q-0.36 -0.288 -0.99 -0.936t-1.998 -2.358 -2.448 -3.51 -1.926 -4.356 -0.846 -4.968q0 -7.92 4.572 -12.384t12.636 -4.464q2.232 0 4.554 0.774t4.32 2.088 3.438 2.466 2.736 2.448q1.296 -1.296 2.736 -2.448t3.438 -2.466 4.32 -2.088 4.554 -0.774q8.064 0 12.636 4.464t4.572 12.384q0 7.956 -8.244 16.2l-22.428 21.6q-0.648 0.648 -1.584 0.648z','STAR':'M59.904 -41.147q0 0.792 -0.936 1.728l-13.068 12.744 3.096 18q0.036 0.252 0.036 0.72 0 0.756 -0.378 1.278t-1.098 0.522q-0.684 0 -1.44 -0.432l-16.164 -8.496 -16.164 8.496q-0.792 0.432 -1.44 0.432 -0.756 0 -1.134 -0.522t-0.378 -1.278q0 -0.216 0.072 -0.72l3.096 -18 -13.104 -12.744q-0.9 -0.972 -0.9 -1.728 0 -1.332 2.016 -1.656l18.072 -2.628 8.1 -16.38q0.684 -1.476 1.764 -1.476t1.764 1.476l8.1 16.38 18.072 2.628q2.016 0.324 2.016 1.656z','STAR_O':'M40.932 -28.295l11.016 -10.692 -15.192 -2.232 -6.804 -13.752 -6.804 13.752 -15.192 2.232 11.016 10.692 -2.628 15.156 13.608 -7.164 13.572 7.164zm18.972 -12.852q0 0.792 -0.936 1.728l-13.068 12.744 3.096 18q0.036 0.252 0.036 0.72 0 1.8 -1.476 1.8 -0.684 0 -1.44 -0.432l-16.164 -8.496 -16.164 8.496q-0.792 0.432 -1.44 0.432 -0.756 0 -1.134 -0.522t-0.378 -1.278q0 -0.216 0.072 -0.72l3.096 -18 -13.104 -12.744q-0.9 -0.972 -0.9 -1.728 0 -1.332 2.016 -1.656l18.072 -2.628 8.1 -16.38q0.684 -1.476 1.764 -1.476t1.764 1.476l8.1 16.38 18.072 2.628q2.016 0.324 2.016 1.656z','USER':'M50.688 -13.859q0 4.32 -2.628 6.822t-6.984 2.502h-31.464q-4.356 0 -6.984 -2.502t-2.628 -6.822q0 -1.908 0.126 -3.726t0.504 -3.924 0.954 -3.906 1.548 -3.51 2.232 -2.916 3.078 -1.926 4.014 -0.72q0.324 0 1.512 0.774t2.682 1.728 3.888 1.728 4.806 0.774 4.806 -0.774 3.888 -1.728 2.682 -1.728 1.512 -0.774q2.196 0 4.014 0.72t3.078 1.926 2.232 2.916 1.548 3.51 0.954 3.906 0.504 3.924 0.126 3.726zm-11.52 -32.148q0 5.724 -4.05 9.774t-9.774 4.05 -9.774 -4.05 -4.05 -9.774 4.05 -9.774 9.774 -4.05 9.774 4.05 4.05 9.774z','FILM':'M13.824 -6.839v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm0 -13.824v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm0 -13.824v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm36.864 27.648v-18.432q0 -0.936 -0.684 -1.62t-1.62 -0.684h-27.648q-0.936 0 -1.62 0.684t-0.684 1.62v18.432q0 0.936 0.684 1.62t1.62 0.684h27.648q0.936 0 1.62 -0.684t0.684 -1.62zm-36.864 -41.472v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm50.688 41.472v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm-13.824 -27.648v-18.432q0 -0.936 -0.684 -1.62t-1.62 -0.684h-27.648q-0.936 0 -1.62 0.684t-0.684 1.62v18.432q0 0.936 0.684 1.62t1.62 0.684h27.648q0.936 0 1.62 -0.684t0.684 -1.62zm13.824 13.824v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm0 -13.824v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm0 -13.824v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm4.608 -5.76v48.384q0 2.376 -1.692 4.068t-4.068 1.692h-57.6q-2.376 0 -4.068 -1.692t-1.692 -4.068v-48.384q0 -2.376 1.692 -4.068t4.068 -1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z','TH_LARGE':'M27.648 -27.575v13.824q0 1.872 -1.368 3.24t-3.24 1.368h-18.432q-1.872 0 -3.24 -1.368t-1.368 -3.24v-13.824q0 -1.872 1.368 -3.24t3.24 -1.368h18.432q1.872 0 3.24 1.368t1.368 3.24zm0 -27.648v13.824q0 1.872 -1.368 3.24t-3.24 1.368h-18.432q-1.872 0 -3.24 -1.368t-1.368 -3.24v-13.824q0 -1.872 1.368 -3.24t3.24 -1.368h18.432q1.872 0 3.24 1.368t1.368 3.24zm32.256 27.648v13.824q0 1.872 -1.368 3.24t-3.24 1.368h-18.432q-1.872 0 -3.24 -1.368t-1.368 -3.24v-13.824q0 -1.872 1.368 -3.24t3.24 -1.368h18.432q1.872 0 3.24 1.368t1.368 3.24zm0 -27.648v13.824q0 1.872 -1.368 3.24t-3.24 1.368h-18.432q-1.872 0 -3.24 -1.368t-1.368 -3.24v-13.824q0 -1.872 1.368 -3.24t3.24 -1.368h18.432q1.872 0 3.24 1.368t1.368 3.24z','TH':'M18.432 -19.511v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm0 -18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm23.04 18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm-23.04 -36.864v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm23.04 18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm23.04 18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm-23.04 -36.864v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm23.04 18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm0 -18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448z','TH_LIST':'M18.432 -19.511v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm0 -18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm46.08 18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h34.56q1.44 0 2.448 1.008t1.008 2.448zm-46.08 -36.864v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm46.08 18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h34.56q1.44 0 2.448 1.008t1.008 2.448zm0 -18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h34.56q1.44 0 2.448 1.008t1.008 2.448z','CHECK':'M60.156 -44.063q0 1.44 -1.008 2.448l-26.064 26.064 -4.896 4.896q-1.008 1.008 -2.448 1.008t-2.448 -1.008l-4.896 -4.896 -13.032 -13.032q-1.008 -1.008 -1.008 -2.448t1.008 -2.448l4.896 -4.896q1.008 -1.008 2.448 -1.008t2.448 1.008l10.584 10.62 23.616 -23.652q1.008 -1.008 2.448 -1.008t2.448 1.008l4.896 4.896q1.008 1.008 1.008 2.448z','TIMES':'M46.728 -16.847q0 1.44 -1.008 2.448l-4.896 4.896q-1.008 1.008 -2.448 1.008t-2.448 -1.008l-10.584 -10.584 -10.584 10.584q-1.008 1.008 -2.448 1.008t-2.448 -1.008l-4.896 -4.896q-1.008 -1.008 -1.008 -2.448t1.008 -2.448l10.584 -10.584 -10.584 -10.584q-1.008 -1.008 -1.008 -2.448t1.008 -2.448l4.896 -4.896q1.008 -1.008 2.448 -1.008t2.448 1.008l10.584 10.584 10.584 -10.584q1.008 -1.008 2.448 -1.008t2.448 1.008l4.896 4.896q1.008 1.008 1.008 2.448t-1.008 2.448l-10.584 10.584 10.584 10.584q1.008 1.008 1.008 2.448z','SEARCH_PLUS':'M36.864 -35.639v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-8.064v8.064q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-8.064h-8.064q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h8.064v-8.064q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81v8.064h8.064q0.468 0 0.81 0.342t0.342 0.81zm4.608 1.152q0 -6.66 -4.734 -11.394t-11.394 -4.734 -11.394 4.734 -4.734 11.394 4.734 11.394 11.394 4.734 11.394 -4.734 4.734 -11.394zm18.432 29.952q0 1.908 -1.35 3.258t-3.258 1.35q-1.944 0 -3.24 -1.368l-12.348 -12.312q-6.444 4.464 -14.364 4.464 -5.148 0 -9.846 -1.998t-8.1 -5.4 -5.4 -8.1 -1.998 -9.846 1.998 -9.846 5.4 -8.1 8.1 -5.4 9.846 -1.998 9.846 1.998 8.1 5.4 5.4 8.1 1.998 9.846q0 7.92 -4.464 14.364l12.348 12.348q1.332 1.332 1.332 3.24z','SEARCH_MINUS':'M36.864 -35.639v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-20.736q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h20.736q0.468 0 0.81 0.342t0.342 0.81zm4.608 1.152q0 -6.66 -4.734 -11.394t-11.394 -4.734 -11.394 4.734 -4.734 11.394 4.734 11.394 11.394 4.734 11.394 -4.734 4.734 -11.394zm18.432 29.952q0 1.908 -1.35 3.258t-3.258 1.35q-1.944 0 -3.24 -1.368l-12.348 -12.312q-6.444 4.464 -14.364 4.464 -5.148 0 -9.846 -1.998t-8.1 -5.4 -5.4 -8.1 -1.998 -9.846 1.998 -9.846 5.4 -8.1 8.1 -5.4 9.846 -1.998 9.846 1.998 8.1 5.4 5.4 8.1 1.998 9.846q0 7.92 -4.464 14.364l12.348 12.348q1.332 1.332 1.332 3.24z','POWER_OFF':'M55.296 -32.183q0 5.616 -2.196 10.728t-5.904 8.82 -8.82 5.904 -10.728 2.196 -10.728 -2.196 -8.82 -5.904 -5.904 -8.82 -2.196 -10.728q0 -6.552 2.898 -12.348t8.154 -9.72q1.548 -1.152 3.438 -0.9t3.006 1.8q1.152 1.512 0.882 3.402t-1.782 3.042q-3.528 2.664 -5.454 6.516t-1.926 8.208q0 3.744 1.458 7.146t3.942 5.886 5.886 3.942 7.146 1.458 7.146 -1.458 5.886 -3.942 3.942 -5.886 1.458 -7.146q0 -4.356 -1.926 -8.208t-5.454 -6.516q-1.512 -1.152 -1.782 -3.042t0.882 -3.402q1.116 -1.548 3.024 -1.8t3.42 0.9q5.256 3.924 8.154 9.72t2.898 12.348zm-23.04 -27.648v23.04q0 1.872 -1.368 3.24t-3.24 1.368 -3.24 -1.368 -1.368 -3.24v-23.04q0 -1.872 1.368 -3.24t3.24 -1.368 3.24 1.368 1.368 3.24z','SIGNAL':'M9.216 -12.599v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm13.824 -4.608v11.52q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-11.52q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm13.824 -9.216v20.736q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-20.736q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm13.824 -13.824v34.56q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-34.56q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm13.824 -18.432v52.992q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-52.992q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828z','GEAR':'M36.864 -32.183q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516 2.7 6.516 6.516 2.7 6.516 -2.7 2.7 -6.516zm18.432 -3.924v7.992q0 0.432 -0.288 0.828t-0.72 0.468l-6.66 1.008q-0.684 1.944 -1.404 3.276 1.26 1.8 3.852 4.968 0.36 0.432 0.36 0.9t-0.324 0.828q-0.972 1.332 -3.564 3.888t-3.384 2.556q-0.432 0 -0.936 -0.324l-4.968 -3.888q-1.584 0.828 -3.276 1.368 -0.576 4.896 -1.044 6.696 -0.252 1.008 -1.296 1.008h-7.992q-0.504 0 -0.882 -0.306t-0.414 -0.774l-1.008 -6.624q-1.764 -0.576 -3.24 -1.332l-5.076 3.852q-0.36 0.324 -0.9 0.324 -0.504 0 -0.9 -0.396 -4.536 -4.104 -5.94 -6.048 -0.252 -0.36 -0.252 -0.828 0 -0.432 0.288 -0.828 0.54 -0.756 1.836 -2.394t1.944 -2.538q-0.972 -1.8 -1.476 -3.564l-6.588 -0.972q-0.468 -0.072 -0.756 -0.45t-0.288 -0.846v-7.992q0 -0.432 0.288 -0.828t0.684 -0.468l6.696 -1.008q0.504 -1.656 1.404 -3.312 -1.44 -2.052 -3.852 -4.968 -0.36 -0.432 -0.36 -0.864 0 -0.36 0.324 -0.828 0.936 -1.296 3.546 -3.87t3.402 -2.574q0.468 0 0.936 0.36l4.968 3.852q1.584 -0.828 3.276 -1.368 0.576 -4.896 1.044 -6.696 0.252 -1.008 1.296 -1.008h7.992q0.504 0 0.882 0.306t0.414 0.774l1.008 6.624q1.764 0.576 3.24 1.332l5.112 -3.852q0.324 -0.324 0.864 -0.324 0.468 0 0.9 0.36 4.644 4.284 5.94 6.12 0.252 0.288 0.252 0.792 0 0.432 -0.288 0.828 -0.54 0.756 -1.836 2.394t-1.944 2.538q0.936 1.8 1.476 3.528l6.588 1.008q0.468 0.072 0.756 0.45t0.288 0.846z','TRASH_O':'M18.432 -37.943v20.736q0 0.504 -0.324 0.828t-0.828 0.324h-2.304q-0.504 0 -0.828 -0.324t-0.324 -0.828v-20.736q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828zm9.216 0v20.736q0 0.504 -0.324 0.828t-0.828 0.324h-2.304q-0.504 0 -0.828 -0.324t-0.324 -0.828v-20.736q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828zm9.216 0v20.736q0 0.504 -0.324 0.828t-0.828 0.324h-2.304q-0.504 0 -0.828 -0.324t-0.324 -0.828v-20.736q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828zm4.608 26.064v-34.128h-32.256v34.128q0 0.792 0.252 1.458t0.522 0.972 0.378 0.306h29.952q0.108 0 0.378 -0.306t0.522 -0.972 0.252 -1.458zm-24.192 -38.736h16.128l-1.728 -4.212q-0.252 -0.324 -0.612 -0.396h-11.412q-0.36 0.072 -0.612 0.396zm33.408 1.152v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-3.456v34.128q0 2.988 -1.692 5.166t-4.068 2.178h-29.952q-2.376 0 -4.068 -2.106t-1.692 -5.094v-34.272h-3.456q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h11.124l2.52 -6.012q0.54 -1.332 1.944 -2.268t2.844 -0.936h11.52q1.44 0 2.844 0.936t1.944 2.268l2.52 6.012h11.124q0.504 0 0.828 0.324t0.324 0.828z','HOME':'M50.688 -28.727v17.28q0 0.936 -0.684 1.62t-1.62 0.684h-13.824v-13.824h-9.216v13.824h-13.824q-0.936 0 -1.62 -0.684t-0.684 -1.62v-17.28l0.018 -0.108 0.018 -0.108 20.7 -17.064 20.7 17.064q0.036 0.072 0.036 0.216zm8.028 -2.484l-2.232 2.664q-0.288 0.324 -0.756 0.396h-0.108q-0.468 0 -0.756 -0.252l-24.912 -20.772 -24.912 20.772q-0.432 0.288 -0.864 0.252 -0.468 -0.072 -0.756 -0.396l-2.232 -2.664q-0.288 -0.36 -0.252 -0.846t0.396 -0.774l25.884 -21.564q1.152 -0.936 2.736 -0.936t2.736 0.936l8.784 7.344v-7.02q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v14.688l7.884 6.552q0.36 0.288 0.396 0.774t-0.252 0.846z','FILE_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08z','CLOCK_O':'M32.256 -44.855v16.128q0 0.504 -0.324 0.828t-0.828 0.324h-11.52q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h8.064v-12.672q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828zm14.976 12.672q0 -5.328 -2.628 -9.828t-7.128 -7.128 -9.828 -2.628 -9.828 2.628 -7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828zm8.064 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','ROAD':'M39.996 -28.583v-0.144l-0.864 -11.52q-0.036 -0.468 -0.396 -0.81t-0.828 -0.342h-6.696q-0.468 0 -0.828 0.342t-0.396 0.81l-0.864 11.52v0.144q-0.036 0.432 0.288 0.72t0.756 0.288h8.784q0.432 0 0.756 -0.288t0.288 -0.72zm27.324 16.812q0 2.628 -1.656 2.628h-25.344q0.468 0 0.792 -0.342t0.288 -0.81l-0.72 -9.216q-0.036 -0.468 -0.396 -0.81t-0.828 -0.342h-9.792q-0.468 0 -0.828 0.342t-0.396 0.81l-0.72 9.216q-0.036 0.468 0.288 0.81t0.792 0.342h-25.344q-1.656 0 -1.656 -2.628 0 -1.944 0.936 -4.176l15.012 -37.584q0.288 -0.684 0.936 -1.188t1.368 -0.504h12.204q-0.468 0 -0.828 0.342t-0.396 0.81l-0.54 6.912q-0.036 0.504 0.288 0.828t0.792 0.324h5.976q0.468 0 0.792 -0.324t0.288 -0.828l-0.54 -6.912q-0.036 -0.468 -0.396 -0.81t-0.828 -0.342h12.204q0.72 0 1.368 0.504t0.936 1.188l15.012 37.584q0.936 2.232 0.936 4.176z','DOWNLOAD':'M46.08 -16.055q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm9.216 0q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm4.608 -8.064v11.52q0 1.44 -1.008 2.448t-2.448 1.008h-52.992q-1.44 0 -2.448 -1.008t-1.008 -2.448v-11.52q0 -1.44 1.008 -2.448t2.448 -1.008h16.74l4.86 4.896q2.088 2.016 4.896 2.016t4.896 -2.016l4.896 -4.896h16.704q1.44 0 2.448 1.008t1.008 2.448zm-11.7 -20.484q0.612 1.476 -0.504 2.52l-16.128 16.128q-0.648 0.684 -1.62 0.684t-1.62 -0.684l-16.128 -16.128q-1.116 -1.044 -0.504 -2.52 0.612 -1.404 2.124 -1.404h9.216v-16.128q0 -0.936 0.684 -1.62t1.62 -0.684h9.216q0.936 0 1.62 0.684t0.684 1.62v16.128h9.216q1.512 0 2.124 1.404z','ARROW_CIRCLE_O_DOWN':'M40.32 -31.031q0 0.432 -0.36 0.864l-11.484 11.484q-0.396 0.324 -0.828 0.324t-0.828 -0.324l-11.52 -11.52q-0.54 -0.576 -0.252 -1.26 0.288 -0.72 1.08 -0.72h6.912v-12.672q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v12.672h6.912q0.504 0 0.828 0.324t0.324 0.828zm-12.672 -20.736q-5.328 0 -9.828 2.628t-7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828 -2.628 -9.828 -7.128 -7.128 -9.828 -2.628zm27.648 19.584q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','ARROW_CIRCLE_O_UP':'M40.248 -32.903q-0.288 0.72 -1.08 0.72h-6.912v12.672q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-12.672h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828q0 -0.432 0.36 -0.864l11.484 -11.484q0.396 -0.324 0.828 -0.324t0.828 0.324l11.52 11.52q0.54 0.576 0.252 1.26zm-12.6 -18.864q-5.328 0 -9.828 2.628t-7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828 -2.628 -9.828 -7.128 -7.128 -9.828 -2.628zm27.648 19.584q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','INBOX':'M36.828 -29.879h11.376l-0.09 -0.288 -0.09 -0.288 -7.632 -17.856h-25.488l-7.632 17.856 -0.09 0.288 -0.09 0.288h11.376l3.42 6.912h11.52zm18.468 1.08v17.352q0 0.936 -0.684 1.62t-1.62 0.684h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-17.352q0 -2.232 0.9 -4.428l8.568 -19.872q0.36 -0.9 1.314 -1.512t1.89 -0.612h29.952q0.936 0 1.89 0.612t1.314 1.512l8.568 19.872q0.9 2.196 0.9 4.428z','PLAY_CIRCLE_O':'M42.624 -32.183q0 1.332 -1.152 1.98l-19.584 11.52q-0.54 0.324 -1.152 0.324 -0.576 0 -1.152 -0.288 -1.152 -0.684 -1.152 -2.016v-23.04q0 -1.332 1.152 -2.016 1.188 -0.648 2.304 0.036l19.584 11.52q1.152 0.648 1.152 1.98zm4.608 0q0 -5.328 -2.628 -9.828t-7.128 -7.128 -9.828 -2.628 -9.828 2.628 -7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828zm8.064 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','ROTATE_RIGHT':'M55.296 -55.223v16.128q0 0.936 -0.684 1.62t-1.62 0.684h-16.128q-1.512 0 -2.124 -1.44 -0.612 -1.404 0.504 -2.484l4.968 -4.968q-5.328 -4.932 -12.564 -4.932 -3.744 0 -7.146 1.458t-5.886 3.942 -3.942 5.886 -1.458 7.146 1.458 7.146 3.942 5.886 5.886 3.942 7.146 1.458q4.284 0 8.1 -1.872t6.444 -5.292q0.252 -0.36 0.828 -0.432 0.504 0 0.9 0.324l4.932 4.968q0.324 0.288 0.342 0.738t-0.27 0.81q-3.924 4.752 -9.504 7.362t-11.772 2.61q-5.616 0 -10.728 -2.196t-8.82 -5.904 -5.904 -8.82 -2.196 -10.728 2.196 -10.728 5.904 -8.82 8.82 -5.904 10.728 -2.196q5.292 0 10.242 1.998t8.802 5.634l4.68 -4.644q1.044 -1.116 2.52 -0.504 1.404 0.612 1.404 2.124z','REFRESH':'M54.396 -26.423q0 0.18 -0.036 0.252 -2.304 9.648 -9.648 15.642t-17.208 5.994q-5.256 0 -10.17 -1.98t-8.766 -5.652l-4.644 4.644q-0.684 0.684 -1.62 0.684t-1.62 -0.684 -0.684 -1.62v-16.128q0 -0.936 0.684 -1.62t1.62 -0.684h16.128q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62l-4.932 4.932q2.556 2.376 5.796 3.672t6.732 1.296q4.824 0 9 -2.34t6.696 -6.444q0.396 -0.612 1.908 -4.212 0.288 -0.828 1.08 -0.828h6.912q0.468 0 0.81 0.342t0.342 0.81zm0.9 -28.8v16.128q0 0.936 -0.684 1.62t-1.62 0.684h-16.128q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l4.968 -4.968q-5.328 -4.932 -12.564 -4.932 -4.824 0 -9 2.34t-6.696 6.444q-0.396 0.612 -1.908 4.212 -0.288 0.828 -1.08 0.828h-7.164q-0.468 0 -0.81 -0.342t-0.342 -0.81v-0.252q2.34 -9.648 9.72 -15.642t17.28 -5.994q5.256 0 10.224 1.998t8.82 5.634l4.68 -4.644q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62z','LIST_ALT':'M13.824 -21.815v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm0 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm0 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm41.472 18.432v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-34.56q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h34.56q0.468 0 0.81 0.342t0.342 0.81zm0 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-34.56q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h34.56q0.468 0 0.81 0.342t0.342 0.81zm0 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-34.56q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h34.56q0.468 0 0.81 0.342t0.342 0.81zm4.608 25.344v-29.952q0 -0.468 -0.342 -0.81t-0.81 -0.342h-52.992q-0.468 0 -0.81 0.342t-0.342 0.81v29.952q0 0.468 0.342 0.81t0.81 0.342h52.992q0.468 0 0.81 -0.342t0.342 -0.81zm4.608 -39.168v39.168q0 2.376 -1.692 4.068t-4.068 1.692h-52.992q-2.376 0 -4.068 -1.692t-1.692 -4.068v-39.168q0 -2.376 1.692 -4.068t4.068 -1.692h52.992q2.376 0 4.068 1.692t1.692 4.068z','LOCK':'M11.52 -36.791h18.432v-6.912q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516v6.912zm29.952 3.456v20.736q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-20.736q0 -1.44 1.008 -2.448t2.448 -1.008h1.152v-6.912q0 -6.624 4.752 -11.376t11.376 -4.752 11.376 4.752 4.752 11.376v6.912h1.152q1.44 0 2.448 1.008t1.008 2.448z','FLAG':'M11.52 -55.223q0 2.592 -2.304 3.96v45.576q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-45.576q-2.304 -1.368 -2.304 -3.96 0 -1.908 1.35 -3.258t3.258 -1.35 3.258 1.35 1.35 3.258zm52.992 2.304v27.468q0 0.9 -0.45 1.386t-1.422 0.99q-7.74 4.176 -13.284 4.176 -2.196 0 -4.446 -0.792t-3.906 -1.728 -4.158 -1.728 -5.13 -0.792q-6.912 0 -16.704 5.256 -0.612 0.324 -1.188 0.324 -0.936 0 -1.62 -0.684t-0.684 -1.62v-26.712q0 -1.152 1.116 -1.98 0.756 -0.504 2.844 -1.548 8.496 -4.32 15.156 -4.32 3.852 0 7.2 1.044t7.884 3.168q1.368 0.684 3.168 0.684 1.944 0 4.23 -0.756t3.96 -1.692 3.168 -1.692 1.962 -0.756q0.936 0 1.62 0.684t0.684 1.62z','HEADPHONES':'M59.904 -32.543q0 5.976 -2.16 11.304l-0.72 1.764 -6.66 1.188q-0.792 2.988 -3.258 4.914t-5.634 1.926v1.152q0 0.504 -0.324 0.828t-0.828 0.324h-2.304q-0.504 0 -0.828 -0.324t-0.324 -0.828v-20.736q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828v1.152q2.556 0 4.68 1.278t3.348 3.438l2.448 -0.432q1.044 -3.42 1.044 -6.948 0 -5.328 -3.168 -10.044t-8.514 -7.524 -11.358 -2.808 -11.358 2.808 -8.514 7.524 -3.168 10.044q0 3.528 1.044 6.948l2.448 0.432q1.224 -2.16 3.348 -3.438t4.68 -1.278v-1.152q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828v20.736q0 0.504 -0.324 0.828t-0.828 0.324h-2.304q-0.504 0 -0.828 -0.324t-0.324 -0.828v-1.152q-3.168 0 -5.634 -1.926t-3.258 -4.914l-6.66 -1.188 -0.72 -1.764q-2.16 -5.328 -2.16 -11.304 0 -5.436 2.412 -10.476t6.444 -8.73 9.576 -5.886 11.52 -2.196 11.52 2.196 9.576 5.886 6.444 8.73 2.412 10.476z','VOLUME_OFF':'M27.648 -51.767v39.168q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-11.988 -11.988h-9.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-13.824q0 -0.936 0.684 -1.62t1.62 -0.684h9.432l11.988 -11.988q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62z','VOLUME_DOWN':'M27.648 -51.767v39.168q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-11.988 -11.988h-9.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-13.824q0 -0.936 0.684 -1.62t1.62 -0.684h9.432l11.988 -11.988q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62zm13.824 19.584q0 2.736 -1.53 5.094t-4.05 3.366q-0.36 0.18 -0.9 0.18 -0.936 0 -1.62 -0.666t-0.684 -1.638q0 -0.756 0.432 -1.278t1.044 -0.9 1.224 -0.828 1.044 -1.278 0.432 -2.052 -0.432 -2.052 -1.044 -1.278 -1.224 -0.828 -1.044 -0.9 -0.432 -1.278q0 -0.972 0.684 -1.638t1.62 -0.666q0.54 0 0.9 0.18 2.52 0.972 4.05 3.348t1.53 5.112z','VOLUME_UP':'M27.648 -51.767v39.168q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-11.988 -11.988h-9.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-13.824q0 -0.936 0.684 -1.62t1.62 -0.684h9.432l11.988 -11.988q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62zm13.824 19.584q0 2.736 -1.53 5.094t-4.05 3.366q-0.36 0.18 -0.9 0.18 -0.936 0 -1.62 -0.666t-0.684 -1.638q0 -0.756 0.432 -1.278t1.044 -0.9 1.224 -0.828 1.044 -1.278 0.432 -2.052 -0.432 -2.052 -1.044 -1.278 -1.224 -0.828 -1.044 -0.9 -0.432 -1.278q0 -0.972 0.684 -1.638t1.62 -0.666q0.54 0 0.9 0.18 2.52 0.972 4.05 3.348t1.53 5.112zm9.216 0q0 5.508 -3.06 10.17t-8.1 6.786q-0.468 0.18 -0.9 0.18 -0.972 0 -1.656 -0.684t-0.684 -1.62q0 -1.404 1.404 -2.124 2.016 -1.044 2.736 -1.584 2.664 -1.944 4.158 -4.878t1.494 -6.246 -1.494 -6.246 -4.158 -4.878q-0.72 -0.54 -2.736 -1.584 -1.404 -0.72 -1.404 -2.124 0 -0.936 0.684 -1.62t1.62 -0.684q0.468 0 0.936 0.18 5.04 2.124 8.1 6.786t3.06 10.17zm9.216 0q0 8.28 -4.572 15.21t-12.168 10.206q-0.468 0.18 -0.936 0.18 -0.936 0 -1.62 -0.684t-0.684 -1.62q0 -1.296 1.404 -2.124 0.252 -0.144 0.81 -0.378t0.81 -0.378q1.656 -0.9 2.952 -1.836 4.428 -3.276 6.912 -8.172t2.484 -10.404 -2.484 -10.404 -6.912 -8.172q-1.296 -0.936 -2.952 -1.836 -0.252 -0.144 -0.81 -0.378t-0.81 -0.378q-1.404 -0.828 -1.404 -2.124 0 -0.936 0.684 -1.62t1.62 -0.684q0.468 0 0.936 0.18 7.596 3.276 12.168 10.206t4.572 15.21z','QRCODE':'M13.824 -22.967v4.608h-4.608v-4.608h4.608zm0 -27.648v4.608h-4.608v-4.608h4.608zm27.648 0v4.608h-4.608v-4.608h4.608zm-36.864 36.828h13.824v-13.788h-13.824v13.788zm0 -27.612h13.824v-13.824h-13.824v13.824zm27.648 0h13.824v-13.824h-13.824v13.824zm-9.216 9.216v23.04h-23.04v-23.04h23.04zm18.432 18.432v4.608h-4.608v-4.608h4.608zm9.216 0v4.608h-4.608v-4.608h4.608zm0 -18.432v13.824h-13.824v-4.608h-4.608v13.824h-4.608v-23.04h13.824v4.608h4.608v-4.608h4.608zm-27.648 -27.648v23.04h-23.04v-23.04h23.04zm27.648 0v23.04h-23.04v-23.04h23.04z','BARCODE':'M2.268 -9.143h-2.268v-50.688h2.268v50.688zm2.268 -0.036h-1.152v-50.652h1.152v50.652zm3.384 0h-1.116v-50.652h1.116v50.652zm5.652 0h-1.116v-50.652h1.116v50.652zm5.652 0h-2.232v-50.652h2.232v50.652zm4.536 0h-1.116v-50.652h1.116v50.652zm2.268 0h-1.116v-50.652h1.116v50.652zm2.268 0h-1.116v-50.652h1.116v50.652zm5.652 0h-2.268v-50.652h2.268v50.652zm5.652 0h-2.268v-50.652h2.268v50.652zm4.536 0h-2.268v-50.652h2.268v50.652zm4.536 0h-2.268v-50.652h2.268v50.652zm3.384 0h-2.268v-50.652h2.268v50.652zm6.804 0h-3.384v-50.652h3.384v50.652zm2.268 0h-1.152v-50.652h1.152v50.652zm3.384 0.036h-2.268v-50.688h2.268v50.688z','TAG':'M16.128 -48.311q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm38.412 20.736q0 1.908 -1.332 3.24l-17.676 17.712q-1.404 1.332 -3.276 1.332 -1.908 0 -3.24 -1.332l-25.74 -25.776q-1.368 -1.332 -2.322 -3.636t-0.954 -4.212v-14.976q0 -1.872 1.368 -3.24t3.24 -1.368h14.976q1.908 0 4.212 0.954t3.672 2.322l25.74 25.704q1.332 1.404 1.332 3.276z','TAGS':'M16.128 -48.311q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm38.412 20.736q0 1.908 -1.332 3.24l-17.676 17.712q-1.404 1.332 -3.276 1.332 -1.908 0 -3.24 -1.332l-25.74 -25.776q-1.368 -1.332 -2.322 -3.636t-0.954 -4.212v-14.976q0 -1.872 1.368 -3.24t3.24 -1.368h14.976q1.908 0 4.212 0.954t3.672 2.322l25.74 25.704q1.332 1.404 1.332 3.276zm13.824 0q0 1.908 -1.332 3.24l-17.676 17.712q-1.404 1.332 -3.276 1.332 -1.296 0 -2.124 -0.504t-1.908 -1.62l16.92 -16.92q1.332 -1.332 1.332 -3.24 0 -1.872 -1.332 -3.276l-25.74 -25.704q-1.368 -1.368 -3.672 -2.322t-4.212 -0.954h8.064q1.908 0 4.212 0.954t3.672 2.322l25.74 25.704q1.332 1.404 1.332 3.276z','BOOK':'M59.004 -47.231q1.44 2.052 0.648 4.644l-9.9 32.616q-0.684 2.304 -2.754 3.87t-4.41 1.566h-33.228q-2.772 0 -5.346 -1.926t-3.582 -4.734q-0.864 -2.412 -0.072 -4.572 0 -0.144 0.108 -0.972t0.144 -1.332q0.036 -0.288 -0.108 -0.774t-0.108 -0.702q0.072 -0.396 0.288 -0.756t0.594 -0.846 0.594 -0.846q0.828 -1.368 1.62 -3.294t1.08 -3.294q0.108 -0.36 0.018 -1.08t-0.018 -1.008q0.108 -0.396 0.612 -1.008t0.612 -0.828q0.756 -1.296 1.512 -3.312t0.9 -3.24q0.036 -0.324 -0.09 -1.152t0.018 -1.008q0.144 -0.468 0.792 -1.098t0.792 -0.81q0.684 -0.936 1.53 -3.042t0.99 -3.474q0.036 -0.288 -0.108 -0.918t-0.072 -0.954q0.072 -0.288 0.324 -0.648t0.648 -0.828 0.612 -0.756q0.288 -0.432 0.594 -1.098t0.54 -1.26 0.576 -1.296 0.702 -1.152 0.954 -0.846 1.296 -0.414 1.71 0.198l-0.036 0.108q1.368 -0.324 1.836 -0.324h27.396q2.664 0 4.104 2.016t0.648 4.68l-9.864 32.616q-1.296 4.284 -2.574 5.526t-4.626 1.242h-31.284q-0.972 0 -1.368 0.54 -0.396 0.576 -0.036 1.548 0.864 2.52 5.184 2.52h33.228q1.044 0 2.016 -0.558t1.26 -1.494l10.8 -35.532q0.252 -0.792 0.18 -2.052 1.368 0.54 2.124 1.548zm-38.304 0.072q-0.144 0.468 0.072 0.81t0.72 0.342h21.888q0.468 0 0.918 -0.342t0.594 -0.81l0.756 -2.304q0.144 -0.468 -0.072 -0.81t-0.72 -0.342h-21.888q-0.468 0 -0.918 0.342t-0.594 0.81zm-2.988 9.216q-0.144 0.468 0.072 0.81t0.72 0.342h21.888q0.468 0 0.918 -0.342t0.594 -0.81l0.756 -2.304q0.144 -0.468 -0.072 -0.81t-0.72 -0.342h-21.888q-0.468 0 -0.918 0.342t-0.594 0.81z','BOOKMARK':'M41.904 -59.831q0.828 0 1.584 0.324 1.188 0.468 1.89 1.476t0.702 2.232v46.404q0 1.224 -0.702 2.232t-1.89 1.476q-0.684 0.288 -1.584 0.288 -1.728 0 -2.988 -1.152l-15.876 -15.264 -15.876 15.264q-1.296 1.188 -2.988 1.188 -0.828 0 -1.584 -0.324 -1.188 -0.468 -1.89 -1.476t-0.702 -2.232v-46.404q0 -1.224 0.702 -2.232t1.89 -1.476q0.756 -0.324 1.584 -0.324h37.728z','PRINT':'M13.824 -9.143h32.256v-9.216h-32.256v9.216zm0 -23.04h32.256v-13.824h-5.76q-1.44 0 -2.448 -1.008t-1.008 -2.448v-5.76h-23.04v23.04zm41.472 2.304q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm4.608 0v14.976q0 0.468 -0.342 0.81t-0.81 0.342h-8.064v5.76q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-5.76h-8.064q-0.468 0 -0.81 -0.342t-0.342 -0.81v-14.976q0 -2.844 2.034 -4.878t4.878 -2.034h2.304v-19.584q0 -1.44 1.008 -2.448t2.448 -1.008h24.192q1.44 0 3.168 0.72t2.736 1.728l5.472 5.472q1.008 1.008 1.728 2.736t0.72 3.168v9.216h2.304q2.844 0 4.878 2.034t2.034 4.878z','CAMERA':'M34.56 -40.247q4.284 0 7.326 3.042t3.042 7.326 -3.042 7.326 -7.326 3.042 -7.326 -3.042 -3.042 -7.326 3.042 -7.326 7.326 -3.042zm25.344 -14.976q3.816 0 6.516 2.7t2.7 6.516v32.256q0 3.816 -2.7 6.516t-6.516 2.7h-50.688q-3.816 0 -6.516 -2.7t-2.7 -6.516v-32.256q0 -3.816 2.7 -6.516t6.516 -2.7h8.064l1.836 -4.896q0.684 -1.764 2.502 -3.042t3.726 -1.278h18.432q1.908 0 3.726 1.278t2.502 3.042l1.836 4.896h8.064zm-25.344 41.472q6.66 0 11.394 -4.734t4.734 -11.394 -4.734 -11.394 -11.394 -4.734 -11.394 4.734 -4.734 11.394 4.734 11.394 11.394 4.734z','FONT':'M26.1 -44.315l-6.12 16.2q1.188 0 4.914 0.072t5.778 0.072q0.684 0 2.052 -0.072 -3.132 -9.108 -6.624 -16.272zm-26.1 39.78l0.072 -2.844q0.828 -0.252 2.016 -0.45t2.052 -0.378 1.782 -0.522 1.602 -1.044 1.116 -1.818l8.532 -22.176 10.08 -26.064h4.6080000000000005q0.288 0.504 0.396 0.756l7.38 17.28q1.188 2.808 3.816 9.27t4.104 9.882q0.54 1.224 2.088 5.202t2.592 6.066q0.72 1.62 1.26 2.052 0.684 0.54 3.168 1.062t3.024 0.738q0.216 1.368 0.216 2.052l-0.018 0.468 -0.018 0.468q-2.268 0 -6.84 -0.288t-6.876 -0.288q-2.736 0 -7.74 0.252t-6.408 0.288q0 -1.548 0.144 -2.808l4.716 -1.008q0.036 0 0.45 -0.09t0.558 -0.126 0.522 -0.162 0.54 -0.234 0.396 -0.288 0.324 -0.396 0.09 -0.504q0 -0.576 -1.116 -3.474t-2.592 -6.39 -1.512 -3.6l-16.2 -0.072q-0.936 2.088 -2.754 7.038t-1.818 5.85q0 0.792 0.504 1.35t1.566 0.882 1.746 0.486 2.052 0.306 1.476 0.144q0.036 0.684 0.036 2.088 0 0.324 -0.072 0.972 -2.088 0 -6.282 -0.36t-6.282 -0.36q-0.288 0 -0.954 0.144t-0.774 0.144q-2.88 0.504 -6.768 0.504z','BOLD':'M19.98 -9.683q2.664 1.152 5.04 1.152 13.536 0 13.536 -12.06 0 -4.104 -1.476 -6.48 -0.972 -1.584 -2.214 -2.664t-2.43 -1.674 -2.898 -0.9 -3.024 -0.378 -3.402 -0.072q-2.628 0 -3.636 0.36 0 1.908 -0.018 5.724t-0.018 5.688q0 0.288 -0.036 2.43t-0.018 3.474 0.162 3.006 0.432 2.394zm-0.504 -26.856q1.512 0.252 3.924 0.252 2.952 0 5.148 -0.468t3.96 -1.602 2.682 -3.222 0.918 -5.112q0 -2.52 -1.044 -4.41t-2.844 -2.952 -3.888 -1.566 -4.464 -0.504q-1.8 0 -4.68 0.468 0 1.8 0.144 5.436t0.144 5.472q0 0.972 -0.018 2.88t-0.018 2.844q0 1.656 0.036 2.484zm-19.476 32.004l0.072 -3.384q0.54 -0.144 3.06 -0.576t3.816 -0.972q0.252 -0.432 0.45 -0.972t0.306 -1.206 0.198 -1.17 0.108 -1.35 0.018 -1.224v-2.358q0 -35.352 -0.792 -36.9 -0.144 -0.288 -0.792 -0.522t-1.602 -0.396 -1.782 -0.252 -1.746 -0.162 -1.098 -0.108l-0.144 -2.988q3.528 -0.072 12.24 -0.414t13.428 -0.342q0.828 0 2.466 0.018t2.43 0.018q2.52 0 4.914 0.468t4.626 1.512 3.888 2.556 2.664 3.762 1.008 4.95q0 1.872 -0.594 3.438t-1.404 2.592 -2.322 2.07 -2.628 1.62 -3.024 1.44q5.544 1.26 9.234 4.824t3.69 8.928q0 3.6 -1.26 6.462t-3.366 4.698 -4.968 3.078 -5.886 1.746 -6.336 0.504q-1.584 0 -4.752 -0.108t-4.752 -0.108q-3.816 0 -11.052 0.396t-8.316 0.432z','ITALIC':'M0 -4.607l0.612 -3.06q0.216 -0.072 2.934 -0.774t4.014 -1.35q1.008 -1.26 1.476 -3.636 0.036 -0.252 2.232 -10.404t4.104 -19.566 1.872 -10.674v-0.9q-0.864 -0.468 -1.962 -0.666t-2.502 -0.288 -2.088 -0.198l0.684 -3.708q1.188 0.072 4.32 0.234t5.382 0.252 4.338 0.09q1.728 0 3.546 -0.09t4.356 -0.252 3.546 -0.234q-0.18 1.404 -0.684 3.204 -1.08 0.36 -3.654 1.026t-3.906 1.206q-0.288 0.684 -0.504 1.53t-0.324 1.44 -0.27 1.638 -0.234 1.512q-0.972 5.328 -3.15 15.102t-2.79 12.798q-0.072 0.324 -0.468 2.088t-0.72 3.24 -0.576 3.006 -0.216 2.07l0.036 0.648q0.612 0.144 6.66 1.116 -0.108 1.584 -0.576 3.564 -0.396 0 -1.17 0.054t-1.17 0.054q-1.044 0 -3.132 -0.36t-3.096 -0.36q-4.968 -0.072 -7.416 -0.072 -1.836 0 -5.148 0.324t-4.356 0.396z','TEXT_HEIGHT':'M62.784 -13.751q1.188 0 1.512 0.666t-0.396 1.602l-4.536 5.832q-0.72 0.936 -1.764 0.936t-1.764 -0.936l-4.536 -5.832q-0.72 -0.936 -0.396 -1.602t1.512 -0.666h2.88v-36.864h-2.88q-1.188 0 -1.512 -0.666t0.396 -1.602l4.536 -5.832q0.72 -0.936 1.764 -0.936t1.764 0.936l4.536 5.832q0.72 0.936 0.396 1.602t-1.512 0.666h-2.88v36.864h2.88zm-59.868 -46.044l1.944 0.972q0.432 0.18 7.596 0.18 1.584 0 4.752 -0.072t4.752 -0.072q1.296 0 3.87 0.018t3.87 0.018h10.548q0.216 0 0.756 0.018t0.738 0 0.576 -0.108 0.63 -0.324 0.54 -0.63l1.512 -0.036 0.504 0.018 0.504 0.018q0.072 4.032 0.072 12.096 0 2.88 -0.18 3.924 -1.404 0.504 -2.448 0.648 -0.9 -1.584 -1.944 -4.608 -0.108 -0.324 -0.396 -1.728t-0.522 -2.646 -0.27 -1.278q-0.216 -0.288 -0.432 -0.45t-0.558 -0.216 -0.468 -0.09 -0.648 -0.018 -0.594 0.018q-0.612 0 -2.394 -0.018t-2.682 -0.018 -2.304 0.072 -2.556 0.216q-0.324 2.916 -0.288 4.896 0 3.384 0.072 13.968t0.072 16.38q0 0.576 -0.09 2.574t0 3.294 0.45 2.484q1.44 0.756 4.464 1.53t4.32 1.35q0.18 1.44 0.18 1.8 0 0.504 -0.108 1.044l-1.224 0.036q-2.736 0.072 -7.848 -0.288t-7.452 -0.36q-1.8 0 -5.436 0.324t-5.472 0.324l-0.108 -1.872v-0.324q0.612 -0.972 2.214 -1.548t3.546 -1.044 2.808 -0.972q0.684 -1.512 0.684 -13.788 0 -3.636 -0.108 -10.908t-0.108 -10.908v-4.212q0 -0.072 0.018 -0.558t0.018 -0.9 -0.036 -0.918 -0.108 -0.864 -0.18 -0.504q-0.396 -0.432 -5.832 -0.432 -1.188 0 -3.348 0.432t-2.88 0.936q-0.684 0.468 -1.224 2.61t-1.134 3.996 -1.53 1.926q-1.512 -0.936 -2.016 -1.584v-13.788z','TEXT_WIDTH':'M2.916 -59.795l1.944 0.972q0.432 0.18 7.596 0.18 1.584 0 4.752 -0.072t4.752 -0.072q2.52 0 8.874 -0.036t10.962 -0.018 8.892 0.162q1.188 0.036 2.016 -1.116l1.512 -0.036 0.504 0.018 0.504 0.018q0.072 4.032 0.072 12.096 0 2.88 -0.18 3.924 -1.404 0.504 -2.448 0.648 -0.9 -1.584 -1.944 -4.608 -0.108 -0.324 -0.396 -1.71t-0.54 -2.646 -0.252 -1.296q-0.36 -0.468 -0.972 -0.684 -0.18 -0.072 -2.376 -0.072 -1.08 0 -3.348 -0.036t-3.708 -0.036 -3.384 0.072 -3.456 0.252q-0.324 2.916 -0.288 4.896l0.036 5.472v-1.872q0 1.98 0.036 5.544t0.054 6.48 0.018 5.508q0 0.576 -0.09 2.574t0 3.294 0.45 2.484q1.44 0.756 4.464 1.53t4.32 1.35q0.18 1.44 0.18 1.8 0 0.504 -0.108 1.044l-1.224 0.036q-2.736 0.072 -7.848 -0.288t-7.452 -0.36q-1.8 0 -5.436 0.324t-5.472 0.324l-0.108 -1.872v-0.324q0.612 -0.972 2.214 -1.548t3.546 -1.044 2.808 -0.972q0.252 -0.576 0.414 -2.664t0.216 -5.238 0.054 -5.58 -0.018 -5.526 -0.018 -3.204q0 -0.252 -0.09 -0.774t-0.09 -0.81q0 -0.252 0.018 -1.584t0.036 -2.628 0 -2.754 -0.108 -2.43 -0.234 -1.152q-0.396 -0.432 -5.832 -0.432 -1.476 0 -5.868 0.486t-4.968 0.882q-0.684 0.432 -1.224 2.574t-1.134 4.014 -1.53 1.944q-1.512 -0.936 -2.016 -1.584v-13.788zm44.244 46.152q0.432 0 1.512 0.702t2.07 1.494 2.142 1.764 1.296 1.08q0.936 0.756 0.936 1.764t-0.936 1.764q-0.144 0.108 -1.296 1.08t-2.142 1.764 -2.07 1.494 -1.512 0.702q-0.468 0 -0.738 -0.378t-0.36 -1.026 -0.09 -1.206 0.054 -1.188 0.054 -0.702h-36.864q0 0.072 0.054 0.702t0.054 1.188 -0.09 1.206 -0.36 1.026 -0.738 0.378q-0.432 0 -1.512 -0.702t-2.07 -1.494 -2.142 -1.764 -1.296 -1.08q-0.936 -0.756 -0.936 -1.764t0.936 -1.764q0.144 -0.108 1.296 -1.08t2.142 -1.764 2.07 -1.494 1.512 -0.702q0.468 0 0.738 0.378t0.36 1.026 0.09 1.206 -0.054 1.188 -0.054 0.702h36.864q0 -0.072 -0.054 -0.702t-0.054 -1.188 0.09 -1.206 0.36 -1.026 0.738 -0.378z','ALIGN_LEFT':'M64.512 -16.055v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62zm-13.824 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-46.08q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h46.08q0.936 0 1.62 0.684t0.684 1.62zm9.216 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-55.296q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h55.296q0.936 0 1.62 0.684t0.684 1.62zm-13.824 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-41.472q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h41.472q0.936 0 1.62 0.684t0.684 1.62z','ALIGN_CENTER':'M64.512 -16.055v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62zm-13.824 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-32.256q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h32.256q0.936 0 1.62 0.684t0.684 1.62zm9.216 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h50.688q0.936 0 1.62 0.684t0.684 1.62zm-13.824 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-23.04q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h23.04q0.936 0 1.62 0.684t0.684 1.62z','ALIGN_RIGHT':'M64.512 -16.055v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62zm0 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-46.08q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h46.08q0.936 0 1.62 0.684t0.684 1.62zm0 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-55.296q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h55.296q0.936 0 1.62 0.684t0.684 1.62zm0 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-41.472q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h41.472q0.936 0 1.62 0.684t0.684 1.62z','ALIGN_JUSTIFY':'M64.512 -16.055v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62zm0 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62zm0 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62zm0 -13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62z','LIST':'M9.216 -17.207v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-6.912q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h6.912q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-6.912q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h6.912q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-6.912q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h6.912q0.468 0 0.81 0.342t0.342 0.81zm55.296 27.648v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-48.384q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h48.384q0.468 0 0.81 0.342t0.342 0.81zm-55.296 -41.472v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-6.912q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h6.912q0.468 0 0.81 0.342t0.342 0.81zm55.296 27.648v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-48.384q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h48.384q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-48.384q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h48.384q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-48.384q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h48.384q0.468 0 0.81 0.342t0.342 0.81z','OUTDENT':'M13.824 -44.855v20.736q0 0.468 -0.342 0.81t-0.81 0.342q-0.504 0 -0.828 -0.324l-10.368 -10.368q-0.324 -0.324 -0.324 -0.828t0.324 -0.828l10.368 -10.368q0.324 -0.324 0.828 -0.324 0.468 0 0.81 0.342t0.342 0.81zm50.688 27.648v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-62.208q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h62.208q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-39.168q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h39.168q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-39.168q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h39.168q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-62.208q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h62.208q0.468 0 0.81 0.342t0.342 0.81z','INDENT':'M12.672 -34.487q0 0.504 -0.324 0.828l-10.368 10.368q-0.324 0.324 -0.828 0.324 -0.468 0 -0.81 -0.342t-0.342 -0.81v-20.736q0 -0.468 0.342 -0.81t0.81 -0.342q0.504 0 0.828 0.324l10.368 10.368q0.324 0.324 0.324 0.828zm51.84 17.28v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-62.208q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h62.208q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-39.168q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h39.168q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-39.168q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h39.168q0.468 0 0.81 0.342t0.342 0.81zm0 -13.824v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-62.208q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h62.208q0.468 0 0.81 0.342t0.342 0.81z','VIDEO_CAMERA':'M64.512 -51.767v39.168q0 1.512 -1.404 2.124 -0.468 0.18 -0.9 0.18 -0.972 0 -1.62 -0.684l-14.508 -14.508v5.976q0 4.284 -3.042 7.326t-7.326 3.042h-25.344q-4.284 0 -7.326 -3.042t-3.042 -7.326v-25.344q0 -4.284 3.042 -7.326t7.326 -3.042h25.344q4.284 0 7.326 3.042t3.042 7.326v5.94l14.508 -14.472q0.648 -0.684 1.62 -0.684 0.432 0 0.9 0.18 1.404 0.612 1.404 2.124z','PICTURE_O':'M23.04 -43.703q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896 2.016 -4.896 4.896 -2.016 4.896 2.016 2.016 4.896zm36.864 13.824v16.128h-50.688v-6.912l11.52 -11.52 5.76 5.76 18.432 -18.432zm3.456 -25.344h-57.6q-0.468 0 -0.81 0.342t-0.342 0.81v43.776q0 0.468 0.342 0.81t0.81 0.342h57.6q0.468 0 0.81 -0.342t0.342 -0.81v-43.776q0 -0.468 -0.342 -0.81t-0.81 -0.342zm5.76 1.152v43.776q0 2.376 -1.692 4.068t-4.068 1.692h-57.6q-2.376 0 -4.068 -1.692t-1.692 -4.068v-43.776q0 -2.376 1.692 -4.068t4.068 -1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z','PENCIL':'M13.068 -9.143l3.276 -3.276 -8.46 -8.46 -3.276 3.276v3.852h4.608v4.608h3.852zm18.828 -33.408q0 -0.792 -0.792 -0.792 -0.36 0 -0.612 0.252l-19.512 19.512q-0.252 0.252 -0.252 0.612 0 0.792 0.792 0.792 0.36 0 0.612 -0.252l19.512 -19.512q0.252 -0.252 0.252 -0.612zm-1.944 -6.912l14.976 14.976 -29.952 29.952h-14.976v-14.976zm24.588 3.456q0 1.908 -1.332 3.24l-5.976 5.976 -14.976 -14.976 5.976 -5.94q1.296 -1.368 3.24 -1.368 1.908 0 3.276 1.368l8.46 8.424q1.332 1.404 1.332 3.276z','MAP_MARKER':'M27.648 -41.399q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516 2.7 6.516 6.516 2.7 6.516 -2.7 2.7 -6.516zm9.216 0q0 3.924 -1.188 6.444l-13.104 27.864q-0.576 1.188 -1.71 1.872t-2.43 0.684 -2.43 -0.684 -1.674 -1.872l-13.14 -27.864q-1.188 -2.52 -1.188 -6.444 0 -7.632 5.4 -13.032t13.032 -5.4 13.032 5.4 5.4 13.032z','ADJUST':'M27.648 -12.599v-39.168q-5.328 0 -9.828 2.628t-7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628zm27.648 -19.584q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','TINT':'M18.432 -22.967q0 -1.296 -0.72 -2.484 -0.036 -0.036 -0.558 -0.81t-0.918 -1.368 -0.9 -1.584 -0.756 -1.818q-0.144 -0.576 -0.756 -0.576t-0.756 0.576q-0.252 0.828 -0.756 1.818t-0.9 1.584 -0.918 1.368 -0.558 0.81q-0.72 1.188 -0.72 2.484 0 1.908 1.35 3.258t3.258 1.35 3.258 -1.35 1.35 -3.258zm18.432 -4.608q0 7.632 -5.4 13.032t-13.032 5.4 -13.032 -5.4 -5.4 -13.032q0 -5.22 2.916 -9.9 0.216 -0.324 2.25 -3.258t3.636 -5.436 3.582 -6.408 2.988 -7.254q0.324 -1.08 1.224 -1.692t1.836 -0.612 1.854 0.612 1.206 1.692q1.008 3.348 2.988 7.254t3.582 6.408 3.636 5.436 2.25 3.258q2.916 4.572 2.916 9.9z','PENCIL_SQUARE_O':'M31.968 -21.815l4.176 -4.176 -5.472 -5.472 -4.176 4.176v2.016h3.456v3.456h2.016zm15.84 -25.92q-0.576 -0.576 -1.188 0.036l-12.6 12.6q-0.612 0.612 -0.036 1.188t1.188 -0.036l12.6 -12.6q0.612 -0.612 0.036 -1.188zm2.88 21.384v6.84q0 4.284 -3.042 7.326t-7.326 3.042h-29.952q-4.284 0 -7.326 -3.042t-3.042 -7.326v-29.952q0 -4.284 3.042 -7.326t7.326 -3.042h29.952q2.268 0 4.212 0.9 0.54 0.252 0.648 0.828 0.108 0.612 -0.324 1.044l-1.764 1.764q-0.504 0.504 -1.152 0.288 -0.828 -0.216 -1.62 -0.216h-29.952q-2.376 0 -4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068 -1.692t1.692 -4.068v-4.536q0 -0.468 0.324 -0.792l2.304 -2.304q0.54 -0.54 1.26 -0.252t0.72 1.044zm-3.456 -26.568l10.368 10.368 -24.192 24.192h-10.368v-10.368zm15.984 4.752l-3.312 3.312 -10.368 -10.368 3.312 -3.312q1.008 -1.008 2.448 -1.008t2.448 1.008l5.472 5.472q1.008 1.008 1.008 2.448t-1.008 2.448z','SHARE_SQUARE_O':'M50.688 -28.835v9.324q0 4.284 -3.042 7.326t-7.326 3.042h-29.952q-4.284 0 -7.326 -3.042t-3.042 -7.326v-29.952q0 -4.284 3.042 -7.326t7.326 -3.042h9.18q0.468 0 0.81 0.342t0.342 0.81q0 0.972 -0.936 1.152 -2.772 0.936 -4.788 2.16 -0.36 0.144 -0.576 0.144h-4.032q-2.376 0 -4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068 -1.692t1.692 -4.068v-7.704q0 -0.684 0.648 -1.044 1.008 -0.468 1.944 -1.332 0.576 -0.576 1.26 -0.288 0.756 0.324 0.756 1.044zm8.532 -17.856l-13.824 13.824q-0.648 0.684 -1.62 0.684 -0.432 0 -0.9 -0.18 -1.404 -0.612 -1.404 -2.124v-6.912h-5.76q-11.628 0 -15.768 4.716 -4.284 4.932 -2.664 17.028 0.108 0.828 -0.72 1.224 -0.288 0.072 -0.432 0.072 -0.576 0 -0.936 -0.468 -0.36 -0.504 -0.756 -1.116t-1.422 -2.466 -1.782 -3.582 -1.386 -4.104 -0.63 -4.392q0 -1.764 0.126 -3.276t0.504 -3.24 1.008 -3.168 1.692 -2.934 2.466 -2.664 3.402 -2.214 4.482 -1.746 5.742 -1.098 7.074 -0.396h5.76v-6.912q0 -1.512 1.404 -2.124 0.468 -0.18 0.9 -0.18 0.936 0 1.62 0.684l13.824 13.824q0.684 0.684 0.684 1.62t-0.684 1.62z','CHECK_SQUARE_O':'M50.688 -30.959v11.448q0 4.284 -3.042 7.326t-7.326 3.042h-29.952q-4.284 0 -7.326 -3.042t-3.042 -7.326v-29.952q0 -4.284 3.042 -7.326t7.326 -3.042h29.952q2.268 0 4.212 0.9 0.54 0.252 0.648 0.828 0.108 0.612 -0.324 1.044l-1.764 1.764q-0.36 0.36 -0.828 0.36 -0.108 0 -0.324 -0.072 -0.828 -0.216 -1.62 -0.216h-29.952q-2.376 0 -4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068 -1.692t1.692 -4.068v-9.144q0 -0.468 0.324 -0.792l2.304 -2.304q0.36 -0.36 0.828 -0.36 0.216 0 0.432 0.108 0.72 0.288 0.72 1.044zm8.316 -17.604l-29.304 29.304q-0.864 0.864 -2.052 0.864t-2.052 -0.864l-15.48 -15.48q-0.864 -0.864 -0.864 -2.052t0.864 -2.052l3.96 -3.96q0.864 -0.864 2.052 -0.864t2.052 0.864l9.468 9.468 23.292 -23.292q0.864 -0.864 2.052 -0.864t2.052 0.864l3.96 3.96q0.864 0.864 0.864 2.052t-0.864 2.052z','ARROWS':'M64.512 -32.183q0 0.936 -0.684 1.62l-9.216 9.216q-0.684 0.684 -1.62 0.684t-1.62 -0.684 -0.684 -1.62v-4.608h-13.824v13.824h4.608q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62l-9.216 9.216q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-9.216 -9.216q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684h4.608v-13.824h-13.824v4.608q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-9.216 -9.216q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l9.216 -9.216q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62v4.608h13.824v-13.824h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l9.216 -9.216q0.684 -0.684 1.62 -0.684t1.62 0.684l9.216 9.216q0.684 0.684 0.684 1.62t-0.684 1.62 -1.62 0.684h-4.608v13.824h13.824v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684l9.216 9.216q0.684 0.684 0.684 1.62z','STEP_BACKWARD':'M35.244 -59.363q0.684 -0.684 1.152 -0.468t0.468 1.152v52.992q0 0.936 -0.468 1.152t-1.152 -0.468l-25.56 -25.56q-0.324 -0.324 -0.468 -0.684v24.408q0 0.936 -0.684 1.62t-1.62 0.684h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62v-50.688q0 -0.936 0.684 -1.62t1.62 -0.684h4.608q0.936 0 1.62 0.684t0.684 1.62v24.408q0.144 -0.396 0.468 -0.684z','FAST_BACKWARD':'M62.892 -59.363q0.684 -0.684 1.152 -0.468t0.468 1.152v52.992q0 0.936 -0.468 1.152t-1.152 -0.468l-25.56 -25.56q-0.324 -0.324 -0.468 -0.684v25.56q0 0.936 -0.468 1.152t-1.152 -0.468l-25.56 -25.56q-0.324 -0.324 -0.468 -0.684v24.408q0 0.936 -0.684 1.62t-1.62 0.684h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62v-50.688q0 -0.936 0.684 -1.62t1.62 -0.684h4.608q0.936 0 1.62 0.684t0.684 1.62v24.408q0.144 -0.396 0.468 -0.684l25.56 -25.56q0.684 -0.684 1.152 -0.468t0.468 1.152v25.56q0.144 -0.396 0.468 -0.684z','BACKWARD':'M58.284 -59.363q0.684 -0.684 1.152 -0.468t0.468 1.152v52.992q0 0.936 -0.468 1.152t-1.152 -0.468l-25.56 -25.56q-0.288 -0.324 -0.468 -0.684v25.56q0 0.936 -0.468 1.152t-1.152 -0.468l-25.56 -25.56q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l25.56 -25.56q0.684 -0.684 1.152 -0.468t0.468 1.152v25.56q0.18 -0.396 0.468 -0.684z','PLAY':'M49.824 -31.067l-47.808 26.568q-0.828 0.468 -1.422 0.108t-0.594 -1.296v-52.992q0 -0.936 0.594 -1.296t1.422 0.108l47.808 26.568q0.828 0.468 0.828 1.116t-0.828 1.116z','PAUSE':'M55.296 -57.527v50.688q0 0.936 -0.684 1.62t-1.62 0.684h-18.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-50.688q0 -0.936 0.684 -1.62t1.62 -0.684h18.432q0.936 0 1.62 0.684t0.684 1.62zm-32.256 0v50.688q0 0.936 -0.684 1.62t-1.62 0.684h-18.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-50.688q0 -0.936 0.684 -1.62t1.62 -0.684h18.432q0.936 0 1.62 0.684t0.684 1.62z','STOP':'M55.296 -57.527v50.688q0 0.936 -0.684 1.62t-1.62 0.684h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-50.688q0 -0.936 0.684 -1.62t1.62 -0.684h50.688q0.936 0 1.62 0.684t0.684 1.62z','FORWARD':'M1.62 -5.003q-0.684 0.684 -1.152 0.468t-0.468 -1.152v-52.992q0 -0.936 0.468 -1.152t1.152 0.468l25.56 25.56q0.288 0.288 0.468 0.684v-25.56q0 -0.936 0.468 -1.152t1.152 0.468l25.56 25.56q0.684 0.684 0.684 1.62t-0.684 1.62l-25.56 25.56q-0.684 0.684 -1.152 0.468t-0.468 -1.152v-25.56q-0.18 0.36 -0.468 0.684z','FAST_FORWARD':'M1.62 -5.003q-0.684 0.684 -1.152 0.468t-0.468 -1.152v-52.992q0 -0.936 0.468 -1.152t1.152 0.468l25.56 25.56q0.288 0.288 0.468 0.684v-25.56q0 -0.936 0.468 -1.152t1.152 0.468l25.56 25.56q0.288 0.288 0.468 0.684v-24.408q0 -0.936 0.684 -1.62t1.62 -0.684h4.608q0.936 0 1.62 0.684t0.684 1.62v50.688q0 0.936 -0.684 1.62t-1.62 0.684h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62v-24.408q-0.18 0.36 -0.468 0.684l-25.56 25.56q-0.684 0.684 -1.152 0.468t-0.468 -1.152v-25.56q-0.18 0.36 -0.468 0.684z','STEP_FORWARD':'M1.62 -5.003q-0.684 0.684 -1.152 0.468t-0.468 -1.152v-52.992q0 -0.936 0.468 -1.152t1.152 0.468l25.56 25.56q0.288 0.288 0.468 0.684v-24.408q0 -0.936 0.684 -1.62t1.62 -0.684h4.608q0.936 0 1.62 0.684t0.684 1.62v50.688q0 0.936 -0.684 1.62t-1.62 0.684h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62v-24.408q-0.18 0.36 -0.468 0.684z','EJECT':'M0.504 -29.195l25.56 -25.56q0.684 -0.684 1.62 -0.684t1.62 0.684l25.56 25.56q0.684 0.684 0.468 1.152t-1.152 0.468h-52.992q-0.936 0 -1.152 -0.468t0.468 -1.152zm52.524 20.052h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684h50.688q0.936 0 1.62 0.684t0.684 1.62v9.216q0 0.936 -0.684 1.62t-1.62 0.684z','CHEVRON_LEFT':'M42.156 -53.603l-19.116 19.116 19.116 19.116q0.684 0.684 0.684 1.62t-0.684 1.62l-5.976 5.976q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-26.712 -26.712q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l26.712 -26.712q0.684 -0.684 1.62 -0.684t1.62 0.684l5.976 5.976q0.684 0.684 0.684 1.62t-0.684 1.62z','CHEVRON_RIGHT':'M39.852 -32.867l-26.712 26.712q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-5.976 -5.976q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l19.116 -19.116 -19.116 -19.116q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l5.976 -5.976q0.684 -0.684 1.62 -0.684t1.62 0.684l26.712 26.712q0.684 0.684 0.684 1.62t-0.684 1.62z','PLUS_CIRCLE':'M43.776 -29.879v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-9.216v-9.216q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v9.216h-9.216q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h9.216v9.216q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62v-9.216h9.216q0.936 0 1.62 -0.684t0.684 -1.62zm11.52 -2.304q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','MINUS_CIRCLE':'M43.776 -29.879v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-27.648q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h27.648q0.936 0 1.62 -0.684t0.684 -1.62zm11.52 -2.304q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','TIMES_CIRCLE':'M41.364 -24.047q0 -0.936 -0.684 -1.62l-6.516 -6.516 6.516 -6.516q0.684 -0.684 0.684 -1.62 0 -0.972 -0.684 -1.656l-3.24 -3.24q-0.684 -0.684 -1.656 -0.684 -0.936 0 -1.62 0.684l-6.516 6.516 -6.516 -6.516q-0.684 -0.684 -1.62 -0.684 -0.972 0 -1.656 0.684l-3.24 3.24q-0.684 0.684 -0.684 1.656 0 0.936 0.684 1.62l6.516 6.516 -6.516 6.516q-0.684 0.684 -0.684 1.62 0 0.972 0.684 1.656l3.24 3.24q0.684 0.684 1.656 0.684 0.936 0 1.62 -0.684l6.516 -6.516 6.516 6.516q0.684 0.684 1.62 0.684 0.972 0 1.656 -0.684l3.24 -3.24q0.684 -0.684 0.684 -1.656zm13.932 -8.136q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','CHECK_CIRCLE':'M46.224 -38.015q0 -1.008 -0.648 -1.656l-3.276 -3.24q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-14.688 14.652 -8.136 -8.136q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-3.276 3.24q-0.648 0.648 -0.648 1.656 0 0.972 0.648 1.62l13.032 13.032q0.684 0.684 1.62 0.684 0.972 0 1.656 -0.684l19.548 -19.548q0.648 -0.648 0.648 -1.62zm9.072 5.832q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','QUESTION_CIRCLE':'M32.256 -14.903v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-6.912q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h6.912q0.504 0 0.828 -0.324t0.324 -0.828zm9.216 -24.192q0 -3.168 -1.998 -5.868t-4.986 -4.176 -6.12 -1.476q-8.748 0 -13.356 7.668 -0.54 0.864 0.288 1.512l4.752 3.6q0.252 0.216 0.684 0.216 0.576 0 0.9 -0.432 1.908 -2.448 3.096 -3.312 1.224 -0.864 3.096 -0.864 1.728 0 3.078 0.936t1.35 2.124q0 1.368 -0.72 2.196t-2.448 1.62q-2.268 1.008 -4.158 3.114t-1.89 4.518v1.296q0 0.504 0.324 0.828t0.828 0.324h6.912q0.504 0 0.828 -0.324t0.324 -0.828q0 -0.684 0.774 -1.782t1.962 -1.782q1.152 -0.648 1.764 -1.026t1.656 -1.26 1.602 -1.728 1.008 -2.178 0.45 -2.916zm13.824 6.912q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','INFO_CIRCLE':'M36.864 -14.903v-5.76q0 -0.504 -0.324 -0.828t-0.828 -0.324h-3.456v-18.432q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v5.76q0 0.504 0.324 0.828t0.828 0.324h3.456v11.52h-3.456q-0.504 0 -0.828 0.324t-0.324 0.828v5.76q0 0.504 0.324 0.828t0.828 0.324h16.128q0.504 0 0.828 -0.324t0.324 -0.828zm-4.608 -32.256v-5.76q0 -0.504 -0.324 -0.828t-0.828 -0.324h-6.912q-0.504 0 -0.828 0.324t-0.324 0.828v5.76q0 0.504 0.324 0.828t0.828 0.324h6.912q0.504 0 0.828 -0.324t0.324 -0.828zm23.04 14.976q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','CROSSHAIRS':'M43.092 -27.575h-3.924q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h3.924q-1.152 -3.888 -4.05 -6.786t-6.786 -4.05v3.924q0 0.936 -0.684 1.62t-1.62 0.684h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62v-3.924q-3.888 1.152 -6.786 4.05t-4.05 6.786h3.924q0.936 0 1.62 0.684t0.684 1.62v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-3.924q1.152 3.888 4.05 6.786t6.786 4.05v-3.924q0 -0.936 0.684 -1.62t1.62 -0.684h4.608q0.936 0 1.62 0.684t0.684 1.62v3.924q3.888 -1.152 6.786 -4.05t4.05 -6.786zm12.204 -6.912v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-5.148q-1.332 5.796 -5.562 10.026t-10.026 5.562v5.148q0 0.936 -0.684 1.62t-1.62 0.684h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62v-5.148q-5.796 -1.332 -10.026 -5.562t-5.562 -10.026h-5.148q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h5.148q1.332 -5.796 5.562 -10.026t10.026 -5.562v-5.148q0 -0.936 0.684 -1.62t1.62 -0.684h4.608q0.936 0 1.62 0.684t0.684 1.62v5.148q5.796 1.332 10.026 5.562t5.562 10.026h5.148q0.936 0 1.62 0.684t0.684 1.62z','TIMES_CIRCLE_O':'M39.492 -25.595l-5.256 5.256q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-4.932 -4.932 -4.932 4.932q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-5.256 -5.256q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l4.932 -4.932 -4.932 -4.932q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l5.256 -5.256q0.36 -0.36 0.828 -0.36t0.828 0.36l4.932 4.932 4.932 -4.932q0.36 -0.36 0.828 -0.36t0.828 0.36l5.256 5.256q0.36 0.36 0.36 0.828t-0.36 0.828l-4.932 4.932 4.932 4.932q0.36 0.36 0.36 0.828t-0.36 0.828zm7.74 -6.588q0 -5.328 -2.628 -9.828t-7.128 -7.128 -9.828 -2.628 -9.828 2.628 -7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828zm8.064 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','CHECK_CIRCLE_O':'M42.156 -35.171l-15.192 15.192q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-10.584 -10.584q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l3.672 -3.672q0.684 -0.684 1.62 -0.684t1.62 0.684l5.292 5.292 9.9 -9.9q0.684 -0.684 1.62 -0.684t1.62 0.684l3.672 3.672q0.684 0.684 0.684 1.62t-0.684 1.62zm5.076 2.988q0 -5.328 -2.628 -9.828t-7.128 -7.128 -9.828 -2.628 -9.828 2.628 -7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828zm8.064 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','BAN':'M47.232 -32.291q0 -5.796 -3.132 -10.62l-27.144 27.108q4.932 3.204 10.692 3.204 3.996 0 7.614 -1.566t6.246 -4.194 4.176 -6.282 1.548 -7.65zm-35.964 10.764l27.18 -27.144q-4.86 -3.276 -10.8 -3.276 -5.328 0 -9.828 2.628t-7.128 7.164 -2.628 9.864q0 5.832 3.204 10.764zm44.028 -10.764q0 5.652 -2.196 10.8t-5.886 8.856 -8.82 5.904 -10.746 2.196 -10.746 -2.196 -8.82 -5.904 -5.886 -8.856 -2.196 -10.8 2.196 -10.782 5.886 -8.838 8.82 -5.904 10.746 -2.196 10.746 2.196 8.82 5.904 5.886 8.838 2.196 10.782z','ARROW_LEFT':'M55.296 -32.183v4.608q0 1.908 -1.17 3.258t-3.042 1.35h-25.344l10.548 10.584q1.368 1.296 1.368 3.24t-1.368 3.24l-2.7 2.736q-1.332 1.332 -3.24 1.332 -1.872 0 -3.276 -1.332l-23.436 -23.472q-1.332 -1.332 -1.332 -3.24 0 -1.872 1.332 -3.276l23.436 -23.4q1.368 -1.368 3.276 -1.368 1.872 0 3.24 1.368l2.7 2.664q1.368 1.368 1.368 3.276t-1.368 3.276l-10.548 10.548h25.344q1.872 0 3.042 1.35t1.17 3.258z','ARROW_RIGHT':'M52.992 -29.879q0 1.944 -1.332 3.276l-23.436 23.436q-1.404 1.332 -3.276 1.332 -1.836 0 -3.24 -1.332l-2.7 -2.7q-1.368 -1.368 -1.368 -3.276t1.368 -3.276l10.548 -10.548h-25.344q-1.872 0 -3.042 -1.35t-1.17 -3.258v-4.608q0 -1.908 1.17 -3.258t3.042 -1.35h25.344l-10.548 -10.584q-1.368 -1.296 -1.368 -3.24t1.368 -3.24l2.7 -2.7q1.368 -1.368 3.24 -1.368 1.908 0 3.276 1.368l23.436 23.436q1.332 1.26 1.332 3.24z','ARROW_UP':'M57.996 -29.483q0 1.836 -1.332 3.24l-2.7 2.7q-1.368 1.368 -3.276 1.368 -1.944 0 -3.24 -1.368l-10.584 -10.548v25.344q0 1.872 -1.35 3.042t-3.258 1.17h-4.608q-1.908 0 -3.258 -1.17t-1.35 -3.042v-25.344l-10.584 10.548q-1.296 1.368 -3.24 1.368t-3.24 -1.368l-2.7 -2.7q-1.368 -1.368 -1.368 -3.24 0 -1.908 1.368 -3.276l23.436 -23.436q1.26 -1.332 3.24 -1.332 1.944 0 3.276 1.332l23.436 23.436q1.332 1.404 1.332 3.276z','ARROW_DOWN':'M57.996 -34.487q0 1.908 -1.332 3.24l-23.436 23.472q-1.404 1.332 -3.276 1.332 -1.908 0 -3.24 -1.332l-23.436 -23.472q-1.368 -1.296 -1.368 -3.24 0 -1.908 1.368 -3.276l2.664 -2.7q1.404 -1.332 3.276 -1.332 1.908 0 3.24 1.332l10.584 10.584v-25.344q0 -1.872 1.368 -3.24t3.24 -1.368h4.608q1.872 0 3.24 1.368t1.368 3.24v25.344l10.584 -10.584q1.332 -1.332 3.24 -1.332 1.872 0 3.276 1.332l2.7 2.7q1.332 1.404 1.332 3.276z','SHARE':'M64.512 -41.399q0 0.936 -0.684 1.62l-18.432 18.432q-0.684 0.684 -1.62 0.684t-1.62 -0.684 -0.684 -1.62v-9.216h-8.064q-3.528 0 -6.318 0.216t-5.544 0.774 -4.788 1.53 -3.798 2.502 -2.88 3.636 -1.746 4.986 -0.63 6.516q0 1.98 0.18 4.428 0 0.216 0.09 0.846t0.09 0.954q0 0.54 -0.306 0.9t-0.846 0.36q-0.576 0 -1.008 -0.612 -0.252 -0.324 -0.468 -0.792t-0.486 -1.08 -0.378 -0.864q-4.572 -10.26 -4.572 -16.236 0 -7.164 1.908 -11.988 5.832 -14.508 31.5 -14.508h8.064v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684l18.432 18.432q0.684 0.684 0.684 1.62z','EXPAND':'M27.18 -26.423q0 0.468 -0.36 0.828l-11.952 11.952 5.184 5.184q0.684 0.684 0.684 1.62t-0.684 1.62 -1.62 0.684h-16.128q-0.936 0 -1.62 -0.684t-0.684 -1.62v-16.128q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684l5.184 5.184 11.952 -11.952q0.36 -0.36 0.828 -0.36t0.828 0.36l4.104 4.104q0.36 0.36 0.36 0.828zm28.116 -31.104v16.128q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-5.184 -5.184 -11.952 11.952q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-4.104 -4.104q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l11.952 -11.952 -5.184 -5.184q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684h16.128q0.936 0 1.62 0.684t0.684 1.62z','COMPRESS':'M27.648 -29.879v16.128q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-5.184 -5.184 -11.952 11.952q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-4.104 -4.104q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l11.952 -11.952 -5.184 -5.184q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684h16.128q0.936 0 1.62 0.684t0.684 1.62zm27.18 -24.192q0 0.468 -0.36 0.828l-11.952 11.952 5.184 5.184q0.684 0.684 0.684 1.62t-0.684 1.62 -1.62 0.684h-16.128q-0.936 0 -1.62 -0.684t-0.684 -1.62v-16.128q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684l5.184 5.184 11.952 -11.952q0.36 -0.36 0.828 -0.36t0.828 0.36l4.104 4.104q0.36 0.36 0.36 0.828z','PLUS':'M50.688 -37.943v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-14.976v14.976q0 1.44 -1.008 2.448t-2.448 1.008h-6.912q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h14.976v-14.976q0 -1.44 1.008 -2.448t2.448 -1.008h6.912q1.44 0 2.448 1.008t1.008 2.448v14.976h14.976q1.44 0 2.448 1.008t1.008 2.448z','MINUS':'M50.688 -37.943v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-43.776q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h43.776q1.44 0 2.448 1.008t1.008 2.448z','ASTERISK':'M53.352 -26.639q1.656 0.936 2.142 2.79t-0.45 3.51l-2.304 3.96q-0.936 1.656 -2.79 2.142t-3.51 -0.45l-9.576 -5.508v11.052q0 1.872 -1.368 3.24t-3.24 1.368h-4.608q-1.872 0 -3.24 -1.368t-1.368 -3.24v-11.052l-9.576 5.508q-1.656 0.936 -3.51 0.45t-2.79 -2.142l-2.304 -3.96q-0.936 -1.656 -0.45 -3.51t2.142 -2.79l9.576 -5.544 -9.576 -5.544q-1.656 -0.936 -2.142 -2.79t0.45 -3.51l2.304 -3.96q0.936 -1.656 2.79 -2.142t3.51 0.45l9.576 5.508v-11.052q0 -1.872 1.368 -3.24t3.24 -1.368h4.608q1.872 0 3.24 1.368t1.368 3.24v11.052l9.576 -5.508q1.656 -0.936 3.51 -0.45t2.79 2.142l2.304 3.96q0.936 1.656 0.45 3.51t-2.142 2.79l-9.576 5.544z','EXCLAMATION_CIRCLE':'M27.648 -59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878 -3.708 13.878 -10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708zm4.608 44.892v-6.84q0 -0.504 -0.324 -0.846t-0.792 -0.342h-6.912q-0.468 0 -0.828 0.36t-0.36 0.828v6.84q0 0.468 0.36 0.828t0.828 0.36h6.912q0.468 0 0.792 -0.342t0.324 -0.846zm-0.072 -12.384l0.648 -22.356q0 -0.432 -0.36 -0.648 -0.36 -0.288 -0.864 -0.288h-7.92q-0.504 0 -0.864 0.288 -0.36 0.216 -0.36 0.648l0.612 22.356q0 0.36 0.36 0.63t0.864 0.27h6.66q0.504 0 0.846 -0.27t0.378 -0.63z','GIFT':'M33.408 -15.623v-25.775999999999996h-11.52v25.775999999999996q0 0.9 0.648 1.386t1.656 0.486h6.912q1.008 0 1.656 -0.486t0.648 -1.386zm-16.416 -30.384h7.02l-4.536 -5.796q-0.936 -1.116 -2.484 -1.116 -1.44 0 -2.448 1.008t-1.008 2.448 1.008 2.448 2.448 1.008zm24.768 -3.456q0 -1.44 -1.008 -2.448t-2.448 -1.008q-1.548 0 -2.484 1.116l-4.5 5.796h6.984q1.44 0 2.448 -1.008t1.008 -2.448zm13.536 9.216v11.52q0 0.504 -0.324 0.828t-0.828 0.324h-3.456v14.976q0 1.44 -1.008 2.448t-2.448 1.008h-39.168q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-3.456q-0.504 0 -0.828 -0.324t-0.324 -0.828v-11.52q0 -0.504 0.324 -0.828t0.828 -0.324h15.84q-3.348 0 -5.706 -2.358t-2.358 -5.706 2.358 -5.706 5.706 -2.358q3.852 0 6.048 2.772l4.608 5.94 4.608 -5.94q2.196 -2.772 6.048 -2.772 3.348 0 5.706 2.358t2.358 5.706 -2.358 5.706 -5.706 2.358h15.84q0.504 0 0.828 0.324t0.324 0.828z','LEAF':'M46.08 -39.095q0 -0.936 -0.684 -1.62t-1.62 -0.684q-6.192 0 -11.448 1.782t-9.342 4.824 -8.478 7.902q-0.684 0.756 -0.684 1.62 0 0.936 0.684 1.62t1.62 0.684q0.864 0 1.62 -0.684 0.972 -0.864 2.664 -2.556t2.412 -2.376q4.932 -4.464 9.666 -6.336t11.286 -1.872q0.936 0 1.62 -0.684t0.684 -1.62zm18.432 -7.128q0 3.42 -0.72 6.948 -1.656 8.064 -6.642 13.788t-12.87 9.648q-7.704 3.888 -15.768 3.888 -5.328 0 -10.296 -1.692 -0.54 -0.18 -3.168 -1.512t-3.456 -1.332q-0.576 0 -1.422 1.152t-1.62 2.52 -1.89 2.52 -2.16 1.152q-1.08 0 -1.836 -0.396t-1.116 -0.864 -0.972 -1.512l-0.216 -0.396 -0.198 -0.36 -0.108 -0.342 -0.054 -0.486q0 -1.26 1.116 -2.646t2.448 -2.358 2.448 -2.016 1.116 -1.728q0 -0.144 -0.504 -1.368t-0.576 -1.584q-0.324 -1.836 -0.324 -3.744 0 -4.14 1.566 -7.92t4.284 -6.642 6.138 -5.004 7.344 -3.438q1.98 -0.648 5.22 -0.918t6.462 -0.324 6.426 -0.216 5.886 -0.864 4.086 -2.034l1.062 -1.062 1.062 -1.008 0.972 -0.72 1.314 -0.576 1.566 -0.162q1.404 0 2.538 1.656t1.71 4.032 0.864 4.464 0.288 3.456z','FIRE':'M50.688 -3.383v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-48.384q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h48.384q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -38.016q0 2.808 -0.882 5.184t-2.304 4.05 -3.15 3.168 -3.456 2.79 -3.15 2.592 -2.304 2.934 -0.882 3.474q0 3.456 2.412 8.064l-0.144 -0.036 0.036 0.036q-3.24 -1.476 -5.76 -2.988t-4.986 -3.6 -4.086 -4.41 -2.61 -5.418 -0.99 -6.624q0 -2.808 0.882 -5.184t2.304 -4.05 3.15 -3.168 3.456 -2.79 3.15 -2.592 2.304 -2.934 0.882 -3.474q0 -3.384 -2.376 -8.064l0.108 0.036 -0.036 -0.036q3.24 1.476 5.76 2.988t4.986 3.6 4.086 4.41 2.61 5.418 0.99 6.624z','EYE':'M59.904 -29.879q-5.472 -8.496 -13.716 -12.708 2.196 3.744 2.196 8.1 0 6.66 -4.734 11.394t-11.394 4.734 -11.394 -4.734 -4.734 -11.394q0 -4.356 2.196 -8.1 -8.244 4.212 -13.716 12.708 4.788 7.38 12.006 11.754t15.642 4.374 15.642 -4.374 12.006 -11.754zm-25.92 -13.824q0 -0.72 -0.504 -1.224t-1.224 -0.504q-4.5 0 -7.722 3.222t-3.222 7.722q0 0.72 0.504 1.224t1.224 0.504 1.224 -0.504 0.504 -1.224q0 -3.096 2.196 -5.292t5.292 -2.196q0.72 0 1.224 -0.504t0.504 -1.224zm30.528 13.824q0 1.224 -0.72 2.484 -5.04 8.28 -13.554 13.266t-17.982 4.986 -17.982 -5.004 -13.554 -13.248q-0.72 -1.26 -0.72 -2.484t0.72 -2.484q5.04 -8.244 13.554 -13.248t17.982 -5.004 17.982 5.004 13.554 13.248q0.72 1.26 0.72 2.484z','EYE_SLASH':'M19.98 -16.379l2.808 -5.076q-3.132 -2.268 -4.896 -5.724t-1.764 -7.308q0 -4.356 2.196 -8.1 -8.244 4.212 -13.716 12.708 6.012 9.288 15.372 13.5zm14.004 -27.324q0 -0.72 -0.504 -1.224t-1.224 -0.504q-4.5 0 -7.722 3.222t-3.222 7.722q0 0.72 0.504 1.224t1.224 0.504 1.224 -0.504 0.504 -1.224q0 -3.096 2.196 -5.292t5.292 -2.196q0.72 0 1.224 -0.504t0.504 -1.224zm13.068 -6.876q0 0.252 -0.036 0.324 -3.78 6.768 -11.34 20.376t-11.376 20.412l-1.764 3.204q-0.36 0.576 -1.008 0.576 -0.432 0 -4.824 -2.52 -0.576 -0.36 -0.576 -1.008 0 -0.432 1.584 -3.132 -5.148 -2.34 -9.486 -6.228t-7.506 -8.82q-0.72 -1.116 -0.72 -2.484t0.72 -2.484q5.508 -8.46 13.68 -13.356t17.856 -4.896q3.204 0 6.48 0.612l1.944 -3.492q0.36 -0.576 1.008 -0.576 0.18 0 0.648 0.216t1.116 0.558 1.188 0.666 1.134 0.666 0.702 0.414q0.576 0.36 0.576 0.972zm1.332 16.092q0 5.004 -2.844 9.126t-7.524 5.922l10.08 -18.072q0.288 1.62 0.288 3.024zm16.128 4.608q0 1.26 -0.72 2.484 -1.404 2.304 -3.924 5.22 -5.4 6.192 -12.51 9.612t-15.102 3.42l2.664 -4.752q7.632 -0.648 14.13 -4.932t10.854 -11.052q-4.14 -6.444 -10.152 -10.584l2.268 -4.032q3.42 2.304 6.57 5.508t5.202 6.624q0.72 1.224 0.72 2.484z','WARNING':'M36.864 -14.939v-6.84q0 -0.504 -0.342 -0.846t-0.81 -0.342h-6.912q-0.468 0 -0.81 0.342t-0.342 0.846v6.84q0 0.504 0.342 0.846t0.81 0.342h6.912q0.468 0 0.81 -0.342t0.342 -0.846zm-0.072 -13.464l0.648 -16.524q0 -0.432 -0.36 -0.684 -0.468 -0.396 -0.864 -0.396h-7.92q-0.396 0 -0.864 0.396 -0.36 0.252 -0.36 0.756l0.612 16.452q0 0.36 0.36 0.594t0.864 0.234h6.66q0.504 0 0.846 -0.234t0.378 -0.594zm-0.504 -33.624l27.648 50.688q1.26 2.268 -0.072 4.536 -0.612 1.044 -1.674 1.656t-2.286 0.612h-55.296q-1.224 0 -2.286 -0.612t-1.674 -1.656q-1.332 -2.268 -0.072 -4.536l27.648 -50.688q0.612 -1.116 1.692 -1.764t2.34 -0.648 2.34 0.648 1.692 1.764z','PLANE':'M49.536 -58.679q1.584 1.872 0.432 5.328t-3.888 6.192l-5.796 5.796 5.76 25.056q0.18 0.684 -0.432 1.188l-4.608 3.456q-0.252 0.216 -0.684 0.216 -0.144 0 -0.252 -0.036 -0.54 -0.108 -0.756 -0.576l-10.044 -18.288 -9.324 9.324 1.908 6.984q0.18 0.612 -0.288 1.116l-3.456 3.456q-0.324 0.324 -0.828 0.324h-0.072q-0.54 -0.072 -0.864 -0.468l-6.804 -9.072 -9.072 -6.804q-0.396 -0.252 -0.468 -0.828 -0.036 -0.468 0.324 -0.9l3.456 -3.492q0.324 -0.324 0.828 -0.324 0.216 0 0.288 0.036l6.984 1.908 9.324 -9.324 -18.288 -10.044q-0.504 -0.288 -0.612 -0.864 -0.072 -0.576 0.324 -0.972l4.608 -4.608q0.504 -0.468 1.08 -0.288l23.94 5.724 5.76 -5.76q2.736 -2.736 6.192 -3.888t5.328 0.432z','CALENDAR':'M4.608 -4.535h10.368v-10.368h-10.368v10.368zm12.672 0h11.52v-10.368h-11.52v10.368zm-12.672 -12.672h10.368v-11.52h-10.368v11.52zm12.672 0h11.52v-11.52h-11.52v11.52zm-12.672 -13.824h10.368v-10.368h-10.368v10.368zm26.496 26.496h11.52v-10.368h-11.52v10.368zm-13.824 -26.496h11.52v-10.368h-11.52v10.368zm27.648 26.496h10.368v-10.368h-10.368v10.368zm-13.824 -12.672h11.52v-11.52h-11.52v11.52zm-12.672 -31.104v-10.368q0 -0.468 -0.342 -0.81t-0.81 -0.342h-2.304q-0.468 0 -0.81 0.342t-0.342 0.81v10.368q0 0.468 0.342 0.81t0.81 0.342h2.304q0.468 0 0.81 -0.342t0.342 -0.81zm26.496 31.104h10.368v-11.52h-10.368v11.52zm-13.824 -13.824h11.52v-10.368h-11.52v10.368zm13.824 0h10.368v-10.368h-10.368v10.368zm1.152 -17.28v-10.368q0 -0.468 -0.342 -0.81t-0.81 -0.342h-2.304q-0.468 0 -0.81 0.342t-0.342 0.81v10.368q0 0.468 0.342 0.81t0.81 0.342h2.304q0.468 0 0.81 -0.342t0.342 -0.81zm13.824 -2.304v46.08q0 1.872 -1.368 3.24t-3.24 1.368h-50.688q-1.872 0 -3.24 -1.368t-1.368 -3.24v-46.08q0 -1.872 1.368 -3.24t3.24 -1.368h4.608v-3.456q0 -2.376 1.692 -4.068t4.068 -1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h13.824v-3.456q0 -2.376 1.692 -4.068t4.068 -1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h4.608q1.872 0 3.24 1.368t1.368 3.24z','RANDOM':'M23.976 -47.123q-2.16 3.312 -4.932 9.828 -0.792 -1.62 -1.332 -2.61t-1.458 -2.286 -1.836 -2.034 -2.268 -1.26 -2.934 -0.522h-8.064q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h8.064q9 0 14.76 8.1zm40.536 28.764q0 0.504 -0.324 0.828l-11.52 11.52q-0.324 0.324 -0.828 0.324 -0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q-1.152 0 -3.06 0.018t-2.916 0.036 -2.628 -0.036 -2.556 -0.18 -2.304 -0.378 -2.268 -0.666 -2.088 -1.026 -2.124 -1.44 -1.98 -1.926 -2.016 -2.502q2.124 -3.348 4.896 -9.828 0.792 1.62 1.332 2.61t1.458 2.286 1.836 2.034 2.268 1.26 2.934 0.522h9.216v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324q0.432 0 0.864 0.36l11.484 11.484q0.324 0.324 0.324 0.828zm0 -32.256q0 0.504 -0.324 0.828l-11.52 11.52q-0.324 0.324 -0.828 0.324 -0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912h-9.216q-1.728 0 -3.132 0.54t-2.484 1.62 -1.836 2.214 -1.62 2.79q-1.152 2.232 -2.808 6.156 -1.044 2.376 -1.782 3.996t-1.944 3.78 -2.304 3.6 -2.664 2.988 -3.24 2.466 -3.834 1.512 -4.608 0.594h-8.064q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h8.064q1.728 0 3.132 -0.54t2.484 -1.62 1.836 -2.214 1.62 -2.79q1.152 -2.232 2.808 -6.156 1.044 -2.376 1.782 -3.996t1.944 -3.78 2.304 -3.6 2.664 -2.988 3.24 -2.466 3.834 -1.512 4.608 -0.594h9.216v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324q0.432 0 0.864 0.36l11.484 11.484q0.324 0.324 0.324 0.828z','COMMENT':'M64.512 -32.183q0 6.264 -4.32 11.574t-11.736 8.388 -16.2 3.078q-2.52 0 -5.22 -0.288 -7.128 6.3 -16.56 8.712 -1.764 0.504 -4.104 0.792 -0.612 0.072 -1.098 -0.324t-0.63 -1.044v-0.036q-0.108 -0.144 -0.018 -0.432t0.072 -0.36 0.162 -0.342l0.216 -0.324 0.252 -0.306 0.288 -0.324q0.252 -0.288 1.116 -1.242t1.242 -1.368 1.116 -1.422 1.17 -1.836 0.972 -2.124 0.936 -2.736q-5.652 -3.204 -8.91 -7.92t-3.258 -10.116q0 -4.68 2.556 -8.946t6.876 -7.362 10.296 -4.914 12.528 -1.818q8.784 0 16.2 3.078t11.736 8.388 4.32 11.574z','MAGNET':'M55.296 -34.487v4.608q0 7.236 -3.546 13.032t-9.864 9.054 -14.238 3.258 -14.238 -3.258 -9.864 -9.054 -3.546 -13.032v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h13.824q0.936 0 1.62 0.684t0.684 1.62v4.608q0 1.872 0.846 3.24t1.926 2.052 2.556 1.08 2.304 0.468 1.584 0.072 1.584 -0.072 2.304 -0.468 2.556 -1.08 1.926 -2.052 0.846 -3.24v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h13.824q0.936 0 1.62 0.684t0.684 1.62zm-36.864 -23.04v13.824q0 0.936 -0.684 1.62t-1.62 0.684h-13.824q-0.936 0 -1.62 -0.684t-0.684 -1.62v-13.824q0 -0.936 0.684 -1.62t1.62 -0.684h13.824q0.936 0 1.62 0.684t0.684 1.62zm36.864 0v13.824q0 0.936 -0.684 1.62t-1.62 0.684h-13.824q-0.936 0 -1.62 -0.684t-0.684 -1.62v-13.824q0 -0.936 0.684 -1.62t1.62 -0.684h13.824q0.936 0 1.62 0.684t0.684 1.62z','CHEVRON_UP':'M60.588 -16.523l-5.976 5.94q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-19.116 -19.116 -19.116 19.116q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-5.976 -5.94q-0.684 -0.684 -0.684 -1.638t0.684 -1.638l26.712 -26.676q0.684 -0.684 1.62 -0.684t1.62 0.684l26.712 26.676q0.684 0.684 0.684 1.638t-0.684 1.638z','CHEVRON_DOWN':'M60.588 -35.351l-26.712 26.676q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-26.712 -26.676q-0.684 -0.684 -0.684 -1.638t0.684 -1.638l5.976 -5.94q0.684 -0.684 1.62 -0.684t1.62 0.684l19.116 19.116 19.116 -19.116q0.684 -0.684 1.62 -0.684t1.62 0.684l5.976 5.94q0.684 0.684 0.684 1.638t-0.684 1.638z','RETWEET':'M46.08 -10.295q0 0.468 -0.342 0.81t-0.81 0.342h-34.56q-0.288 0 -0.486 -0.072t-0.324 -0.252 -0.198 -0.288 -0.108 -0.414 -0.036 -0.414v-21.6h-6.912q-0.936 0 -1.62 -0.684t-0.684 -1.62q0 -0.864 0.54 -1.476l11.52 -13.824q0.684 -0.792 1.764 -0.792t1.764 0.792l11.52 13.824q0.54 0.612 0.54 1.476 0 0.936 -0.684 1.62t-1.62 0.684h-6.912v13.824h20.736q0.576 0 0.9 0.396l5.76 6.912q0.252 0.396 0.252 0.756zm23.04 -14.976q0 0.864 -0.54 1.476l-11.52 13.824q-0.72 0.828 -1.764 0.828t-1.764 -0.828l-11.52 -13.824q-0.54 -0.612 -0.54 -1.476 0 -0.936 0.684 -1.62t1.62 -0.684h6.912v-13.824h-20.736q-0.576 0 -0.9 -0.432l-5.76 -6.912q-0.252 -0.324 -0.252 -0.72 0 -0.468 0.342 -0.81t0.81 -0.342h34.56q0.288 0 0.486 0.072t0.324 0.252 0.198 0.288 0.108 0.414 0.036 0.414v21.6h6.912q0.936 0 1.62 0.684t0.684 1.62z','SHOPPING_CART':'M23.04 -9.143q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm32.256 0q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm4.608 -39.168v18.432q0 0.864 -0.576 1.53t-1.476 0.774l-37.584 4.392q0.036 0.252 0.162 0.774t0.216 0.954 0.09 0.792q0 0.576 -0.864 2.304h33.12q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62 -1.62 0.684h-36.864q-0.936 0 -1.62 -0.684t-0.684 -1.62q0 -0.504 0.396 -1.422t1.062 -2.142 0.738 -1.368l-6.372 -29.628h-7.344q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h9.216q0.576 0 1.026 0.234t0.72 0.558 0.468 0.882 0.27 0.954 0.198 1.062 0.162 0.918h43.236q0.936 0 1.62 0.684t0.684 1.62z','FOLDER':'M59.904 -42.551v25.344q0 3.312 -2.376 5.688t-5.688 2.376h-43.776q-3.312 0 -5.688 -2.376t-2.376 -5.688v-34.56q0 -3.312 2.376 -5.688t5.688 -2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h24.192q3.312 0 5.688 2.376t2.376 5.688z','FOLDER_OPEN':'M67.644 -30.167q0 1.116 -1.116 2.376l-12.096 14.256q-1.548 1.836 -4.338 3.114t-5.166 1.278h-39.168q-1.224 0 -2.178 -0.468t-0.954 -1.548q0 -1.116 1.116 -2.376l12.096 -14.256q1.548 -1.836 4.338 -3.114t5.166 -1.278h39.168q1.224 0 2.178 0.468t0.954 1.548zm-12.348 -12.384v5.76h-29.952q-3.384 0 -7.092 1.71t-5.904 4.302l-12.132 14.256 -0.18 0.216 -0.018 -0.45 -0.018 -0.45v-34.56q0 -3.312 2.376 -5.688t5.688 -2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h19.584q3.312 0 5.688 2.376t2.376 5.688z','ARROWS_V':'M25.344 -52.919q0 0.936 -0.684 1.62t-1.62 0.684h-4.608v36.864h4.608q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62l-9.216 9.216q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-9.216 -9.216q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684h4.608v-36.864h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l9.216 -9.216q0.684 -0.684 1.62 -0.684t1.62 0.684l9.216 9.216q0.684 0.684 0.684 1.62z','ARROWS_H':'M64.512 -32.183q0 0.936 -0.684 1.62l-9.216 9.216q-0.684 0.684 -1.62 0.684t-1.62 -0.684 -0.684 -1.62v-4.608h-36.864v4.608q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-9.216 -9.216q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l9.216 -9.216q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62v4.608h36.864v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684l9.216 9.216q0.684 0.684 0.684 1.62z','BAR_CHART_O':'M23.04 -32.183v18.432h-9.216v-18.432h9.216zm13.824 -18.432v36.864h-9.216v-36.864h9.216zm36.864 41.472v4.608h-73.728v-55.296h4.608v50.688h69.12zm-23.04 -32.256v27.648h-9.216v-27.648h9.216zm13.824 -13.824v41.472h-9.216v-41.472h9.216z','TWITTER_SQUARE':'M46.08 -42.479q-2.016 0.9 -4.356 1.224 2.448 -1.44 3.348 -4.212 -2.34 1.368 -4.824 1.836 -2.196 -2.376 -5.508 -2.376 -3.132 0 -5.346 2.214t-2.214 5.346q0 1.044 0.18 1.728 -4.644 -0.252 -8.712 -2.34t-6.912 -5.58q-1.044 1.8 -1.044 3.816 0 4.104 3.276 6.3 -1.692 -0.036 -3.6 -0.936v0.072q0 2.7 1.8 4.806t4.428 2.61q-1.044 0.288 -1.836 0.288 -0.468 0 -1.404 -0.144 0.756 2.268 2.682 3.744t4.374 1.512q-4.176 3.24 -9.396 3.24 -0.936 0 -1.8 -0.108 5.328 3.384 11.592 3.384 4.032 0 7.56 -1.278t6.048 -3.42 4.338 -4.932 2.7 -5.832 0.882 -6.066q0 -0.648 -0.036 -0.972 2.268 -1.62 3.78 -3.924zm9.216 -6.984v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','FACEBOOK_SQUARE':'M55.296 -14.903q0 4.284 -3.042 7.326t-7.326 3.042h-6.912v-21.888h7.308l1.08 -8.064h-8.388v-5.148q0 -1.944 1.008 -2.988t3.456 -1.044l4.752 -0.036v-7.452q-3.456 -0.324 -6.48 -0.324 -4.896 0 -7.848 2.898t-2.952 8.118v5.976h-8.064v8.064h8.064v21.888h-19.584q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326v34.56z','CAMERA_RETRO':'M33.408 -34.487q0 -0.504 -0.324 -0.828t-0.828 -0.324q-2.376 0 -4.068 1.692t-1.692 4.068q0 0.504 0.324 0.828t0.828 0.324 0.828 -0.324 0.324 -0.828q0 -1.44 1.008 -2.448t2.448 -1.008q0.504 0 0.828 -0.324t0.324 -0.828zm8.064 4.68q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516 2.7 -6.516 6.516 -2.7 6.516 2.7 2.7 6.516zm-36.864 20.664h55.296v-4.608h-55.296v4.608zm41.472 -20.664q0 -5.724 -4.05 -9.774t-9.774 -4.05 -9.774 4.05 -4.05 9.774 4.05 9.774 9.774 4.05 9.774 -4.05 4.05 -9.774zm-36.864 -23.112h13.824v-4.608h-13.824v4.608zm-4.608 6.912h55.296v-9.216000000000001h-29.808l-2.304 4.608h-23.184v4.608zm59.904 -9.216v46.08q0 1.908 -1.35 3.258t-3.258 1.35h-55.296q-1.908 0 -3.258 -1.35t-1.35 -3.258v-46.08q0 -1.908 1.35 -3.258t3.258 -1.35h55.296q1.908 0 3.258 1.35t1.35 3.258z','KEY':'M29.952 -46.007q0 -2.88 -2.016 -4.896t-4.896 -2.016 -4.896 2.016 -2.016 4.896q0 1.512 0.684 2.988 -1.476 -0.684 -2.988 -0.684 -2.88 0 -4.896 2.016t-2.016 4.896 2.016 4.896 4.896 2.016 4.896 -2.016 2.016 -4.896q0 -1.512 -0.684 -2.988 1.476 0.684 2.988 0.684 2.88 0 4.896 -2.016t2.016 -4.896zm30.636 25.344q0 0.612 -1.764 2.376t-2.376 1.764q-0.324 0 -1.026 -0.576t-1.314 -1.188 -1.386 -1.44 -0.882 -0.936l-3.456 3.456 7.92 7.92q1.008 1.008 1.008 2.448 0 1.512 -1.404 2.916t-2.916 1.404q-1.44 0 -2.448 -1.008l-24.156 -24.156q-6.336 4.716 -13.14 4.716 -5.868 0 -9.558 -3.69t-3.69 -9.558q0 -5.76 3.42 -11.268t8.928 -8.928 11.268 -3.42q5.868 0 9.558 3.69t3.69 9.558q0 6.804 -4.716 13.14l12.78 12.78 3.456 -3.456q-0.108 -0.108 -0.936 -0.882t-1.44 -1.386 -1.188 -1.314 -0.576 -1.026q0 -0.612 1.764 -2.376t2.376 -1.764q0.468 0 0.828 0.36 0.216 0.216 1.656 1.602t2.952 2.862 3.114 3.096 2.628 2.808 1.026 1.476z','GEARS':'M32.256 -32.183q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516 2.7 6.516 6.516 2.7 6.516 -2.7 2.7 -6.516zm27.648 18.432q0 -1.872 -1.368 -3.24t-3.24 -1.368 -3.24 1.368 -1.368 3.24q0 1.908 1.35 3.258t3.258 1.35 3.258 -1.35 1.35 -3.258zm0 -36.864q0 -1.872 -1.368 -3.24t-3.24 -1.368 -3.24 1.368 -1.368 3.24q0 1.908 1.35 3.258t3.258 1.35 3.258 -1.35 1.35 -3.258zm-13.824 15.156v6.66q0 0.36 -0.252 0.702t-0.576 0.378l-5.58 0.864q-0.396 1.26 -1.152 2.736 1.224 1.728 3.24 4.14 0.252 0.36 0.252 0.72 0 0.432 -0.252 0.684 -0.828 1.08 -2.97 3.222t-2.826 2.142q-0.396 0 -0.756 -0.252l-4.14 -3.24q-1.332 0.684 -2.772 1.116 -0.396 3.888 -0.828 5.58 -0.252 0.864 -1.08 0.864h-6.696q-0.396 0 -0.72 -0.27t-0.36 -0.63l-0.828 -5.508q-1.224 -0.36 -2.7 -1.116l-4.248 3.204q-0.252 0.252 -0.72 0.252 -0.396 0 -0.756 -0.288 -5.184 -4.788 -5.184 -5.76 0 -0.324 0.252 -0.684 0.36 -0.504 1.476 -1.908t1.692 -2.196q-0.828 -1.584 -1.26 -2.952l-5.472 -0.864q-0.36 -0.036 -0.612 -0.342t-0.252 -0.702v-6.66q0 -0.36 0.252 -0.702t0.576 -0.378l5.58 -0.864q0.396 -1.26 1.152 -2.736 -1.224 -1.728 -3.24 -4.14 -0.252 -0.396 -0.252 -0.72 0 -0.432 0.252 -0.72 0.792 -1.08 2.952 -3.204t2.844 -2.124q0.396 0 0.756 0.252l4.14 3.24q1.224 -0.648 2.772 -1.152 0.396 -3.888 0.828 -5.544 0.252 -0.864 1.08 -0.864h6.696q0.396 0 0.72 0.27t0.36 0.63l0.828 5.508q1.224 0.36 2.7 1.116l4.248 -3.204q0.288 -0.252 0.72 -0.252 0.396 0 0.756 0.288 5.184 4.788 5.184 5.76 0 0.324 -0.252 0.684 -0.432 0.576 -1.512 1.944t-1.62 2.16q0.828 1.728 1.224 2.952l5.472 0.828q0.36 0.072 0.612 0.378t0.252 0.702zm23.04 19.188v5.04q0 0.576 -5.364 1.116 -0.432 0.972 -1.08 1.872 1.836 4.068 1.836 4.968 0 0.144 -0.144 0.252 -4.392 2.556 -4.464 2.556 -0.288 0 -1.656 -1.692t-1.872 -2.448q-0.72 0.072 -1.08 0.072t-1.08 -0.072q-0.504 0.756 -1.872 2.448t-1.656 1.692q-0.072 0 -4.464 -2.556 -0.144 -0.108 -0.144 -0.252 0 -0.9 1.836 -4.968 -0.648 -0.9 -1.08 -1.872 -5.364 -0.54 -5.364 -1.116v-5.04q0 -0.576 5.364 -1.116 0.468 -1.044 1.08 -1.872 -1.836 -4.068 -1.836 -4.968 0 -0.144 0.144 -0.252 0.144 -0.072 1.26 -0.72t2.124 -1.224 1.08 -0.576q0.288 0 1.656 1.674t1.872 2.43q0.72 -0.072 1.08 -0.072t1.08 0.072q1.836 -2.556 3.312 -4.032l0.216 -0.072q0.144 0 4.464 2.52 0.144 0.108 0.144 0.252 0 0.9 -1.836 4.968 0.612 0.828 1.08 1.872 5.364 0.54 5.364 1.116zm0 -36.864v5.04q0 0.576 -5.364 1.116 -0.432 0.972 -1.08 1.872 1.836 4.068 1.836 4.968 0 0.144 -0.144 0.252 -4.392 2.556 -4.464 2.556 -0.288 0 -1.656 -1.692t-1.872 -2.448q-0.72 0.072 -1.08 0.072t-1.08 -0.072q-0.504 0.756 -1.872 2.448t-1.656 1.692q-0.072 0 -4.464 -2.556 -0.144 -0.108 -0.144 -0.252 0 -0.9 1.836 -4.968 -0.648 -0.9 -1.08 -1.872 -5.364 -0.54 -5.364 -1.116v-5.04q0 -0.576 5.364 -1.116 0.468 -1.044 1.08 -1.872 -1.836 -4.068 -1.836 -4.968 0 -0.144 0.144 -0.252 0.144 -0.072 1.26 -0.72t2.124 -1.224 1.08 -0.576q0.288 0 1.656 1.674t1.872 2.43q0.72 -0.072 1.08 -0.072t1.08 0.072q1.836 -2.556 3.312 -4.032l0.216 -0.072q0.144 0 4.464 2.52 0.144 0.108 0.144 0.252 0 0.9 -1.836 4.968 0.612 0.828 1.08 1.872 5.364 0.54 5.364 1.116z','COMMENTS':'M50.688 -36.791q0 5.004 -3.384 9.252t-9.234 6.714 -12.726 2.466q-3.096 0 -6.336 -0.576 -4.464 3.168 -10.008 4.608 -1.296 0.324 -3.096 0.576h-0.108q-0.396 0 -0.738 -0.288t-0.414 -0.756q-0.036 -0.108 -0.036 -0.234t0.018 -0.234 0.072 -0.216l0.09 -0.18 0.126 -0.198 0.144 -0.18 0.162 -0.18 0.144 -0.162q0.18 -0.216 0.828 -0.9t0.936 -1.062 0.81 -1.044 0.9 -1.386 0.738 -1.584q-4.464 -2.592 -7.02 -6.372t-2.556 -8.064q0 -5.004 3.384 -9.252t9.234 -6.714 12.726 -2.466 12.726 2.466 9.234 6.714 3.384 9.252zm13.824 9.216q0 4.32 -2.556 8.082t-7.02 6.354q0.36 0.864 0.738 1.584t0.9 1.386 0.81 1.044 0.936 1.062 0.828 0.9l0.144 0.162 0.162 0.18 0.144 0.18 0.126 0.198 0.09 0.18 0.072 0.216 0.018 0.234 -0.036 0.234q-0.108 0.504 -0.468 0.792t-0.792 0.252q-1.8 -0.252 -3.096 -0.576 -5.544 -1.44 -10.008 -4.608 -3.24 0.576 -6.336 0.576 -9.756 0 -16.992 -4.752 2.088 0.144 3.168 0.144 5.796 0 11.124 -1.62t9.504 -4.644q4.5 -3.312 6.912 -7.632t2.412 -9.144q0 -2.772 -0.828 -5.472 4.644 2.556 7.344 6.408t2.7 8.28z','THUMBS_O_UP':'M9.216 -16.055q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm41.472 -20.736q0 -1.836 -1.404 -3.222t-3.204 -1.386h-12.672q0 -2.088 1.728 -5.742t1.728 -5.778q0 -3.528 -1.152 -5.22t-4.608 -1.692q-0.936 0.936 -1.368 3.06t-1.098 4.518 -2.142 3.942q-0.792 0.828 -2.772 3.276 -0.144 0.18 -0.828 1.08t-1.134 1.476 -1.242 1.53 -1.44 1.584 -1.386 1.278 -1.44 0.972 -1.278 0.324h-1.152v23.04h1.152q0.468 0 1.134 0.108t1.188 0.234 1.368 0.396 1.26 0.414 1.278 0.45 1.044 0.378q7.596 2.628 12.312 2.628h4.356q6.912 0 6.912 -6.012 0 -0.936 -0.18 -2.016 1.08 -0.576 1.71 -1.89t0.63 -2.646 -0.648 -2.484q1.908 -1.8 1.908 -4.284 0 -0.9 -0.36 -1.998t-0.9 -1.71q1.152 -0.036 1.926 -1.692t0.774 -2.916zm4.608 -0.036q0 3.204 -1.764 5.868 0.324 1.188 0.324 2.484 0 2.772 -1.368 5.184 0.108 0.756 0.108 1.548 0 3.636 -2.16 6.408 0.036 5.004 -3.06 7.902t-8.172 2.898h-4.644q-3.456 0 -6.822 -0.81t-7.794 -2.358q-4.176 -1.44 -4.968 -1.44h-10.368q-1.908 0 -3.258 -1.35t-1.35 -3.258v-23.04q0 -1.908 1.35 -3.258t3.258 -1.35h9.864q1.296 -0.864 4.932 -5.58 2.088 -2.7 3.852 -4.608 0.864 -0.9 1.278 -3.078t1.098 -4.554 2.232 -3.888q1.404 -1.332 3.24 -1.332 3.024 0 5.436 1.17t3.672 3.654 1.26 6.696q0 3.348 -1.728 6.912h6.336q3.744 0 6.48 2.736t2.736 6.444z','THUMBS_O_DOWN':'M9.216 -48.311q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm41.472 20.736q0 -1.26 -0.774 -2.916t-1.926 -1.692q0.54 -0.612 0.9 -1.71t0.36 -1.998q0 -2.484 -1.908 -4.284 0.648 -1.152 0.648 -2.484t-0.63 -2.646 -1.71 -1.89q0.18 -1.08 0.18 -2.016 0 -3.06 -1.764 -4.536t-4.896 -1.476h-4.608q-4.716 0 -12.312 2.628 -0.18 0.072 -1.044 0.378t-1.278 0.45 -1.26 0.414 -1.368 0.396 -1.188 0.234 -1.134 0.108h-1.152v23.04h1.152q0.576 0 1.278 0.324t1.44 0.972 1.386 1.278 1.44 1.584 1.242 1.53 1.134 1.476 0.828 1.08q1.98 2.448 2.772 3.276 1.476 1.548 2.142 3.942t1.098 4.518 1.368 3.06q3.456 0 4.608 -1.692t1.152 -5.22q0 -2.124 -1.728 -5.778t-1.728 -5.742h12.672q1.8 0 3.204 -1.386t1.404 -3.222zm4.608 0.036q0 3.708 -2.736 6.444t-6.48 2.736h-6.336q1.728 3.564 1.728 6.912 0 4.248 -1.26 6.696 -1.26 2.484 -3.672 3.654t-5.436 1.17q-1.836 0 -3.24 -1.332 -1.224 -1.188 -1.944 -2.952t-0.918 -3.258 -0.63 -3.042 -1.116 -2.304q-1.728 -1.8 -3.852 -4.572 -3.636 -4.716 -4.932 -5.58h-9.864q-1.908 0 -3.258 -1.35t-1.35 -3.258v-23.04q0 -1.908 1.35 -3.258t3.258 -1.35h10.368q0.792 0 4.968 -1.44 4.608 -1.584 8.028 -2.376t7.2 -0.792h4.032q5.04 0 8.154 2.844t3.078 7.776v0.18q2.16 2.772 2.16 6.408 0 0.792 -0.108 1.548 1.368 2.412 1.368 5.184 0 1.296 -0.324 2.484 1.764 2.664 1.764 5.868z','STAR_HALF':'M29.952 -63.287v48.204l-16.164 8.496q-0.792 0.432 -1.44 0.432 -0.756 0 -1.134 -0.522t-0.378 -1.278q0 -0.216 0.072 -0.72l3.096 -18 -13.104 -12.744q-0.9 -0.972 -0.9 -1.728 0 -1.332 2.016 -1.656l18.072 -2.628 8.1 -16.38q0.684 -1.476 1.764 -1.476z','HEART_O':'M59.904 -42.983q0 -2.916 -0.774 -5.148t-1.98 -3.546 -2.934 -2.142 -3.384 -1.116 -3.528 -0.288 -4.032 0.918 -3.978 2.304 -3.114 2.592 -2.16 2.214q-0.648 0.792 -1.764 0.792t-1.764 -0.792q-0.864 -1.008 -2.16 -2.214t-3.114 -2.592 -3.978 -2.304 -4.032 -0.918 -3.528 0.288 -3.384 1.116 -2.934 2.142 -1.98 3.546 -0.774 5.148q0 6.048 6.732 12.78l20.916 20.16 20.88 -20.124q6.768 -6.768 6.768 -12.816zm4.608 0q0 7.956 -8.244 16.2l-22.428 21.6q-0.648 0.648 -1.584 0.648t-1.584 -0.648l-22.464 -21.672q-0.36 -0.288 -0.99 -0.936t-1.998 -2.358 -2.448 -3.51 -1.926 -4.356 -0.846 -4.968q0 -7.92 4.572 -12.384t12.636 -4.464q2.232 0 4.554 0.774t4.32 2.088 3.438 2.466 2.736 2.448q1.296 -1.296 2.736 -2.448t3.438 -2.466 4.32 -2.088 4.554 -0.774q8.064 0 12.636 4.464t4.572 12.384z','SIGN_OUT':'M23.04 -12.599q0 0.144 0.036 0.72t0.018 0.954 -0.108 0.846 -0.36 0.702 -0.738 0.234h-11.52q-4.284 0 -7.326 -3.042t-3.042 -7.326v-25.344q0 -4.284 3.042 -7.326t7.326 -3.042h11.52q0.468 0 0.81 0.342t0.342 0.81q0 0.144 0.036 0.72t0.018 0.954 -0.108 0.846 -0.36 0.702 -0.738 0.234h-11.52q-2.376 0 -4.068 1.692t-1.692 4.068v25.344q0 2.376 1.692 4.068t4.068 1.692h11.232000000000001l0.414 0.036 0.414 0.108 0.288 0.198 0.252 0.324 0.072 0.486zm33.408 -19.584q0 0.936 -0.684 1.62l-19.584 19.584q-0.684 0.684 -1.62 0.684t-1.62 -0.684 -0.684 -1.62v-10.368h-16.128q-0.936 0 -1.62 -0.684t-0.684 -1.62v-13.824q0 -0.936 0.684 -1.62t1.62 -0.684h16.128v-10.368q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684l19.584 19.584q0.684 0.684 0.684 1.62z','LINKEDIN_SQUARE':'M8.532 -13.535h8.316v-24.984h-8.316v24.984zm8.856 -32.688q-0.036 -1.872 -1.296 -3.096t-3.348 -1.224 -3.402 1.224 -1.314 3.096q0 1.836 1.278 3.078t3.33 1.242h0.036q2.124 0 3.42 -1.242t1.296 -3.078zm21.06 32.688h8.316v-14.328q0 -5.544 -2.628 -8.388t-6.948 -2.844q-4.896 0 -7.524 4.212h0.072v-3.636h-8.316q0.108 2.376 0 24.984h8.316v-13.968q0 -1.368 0.252 -2.016 0.54 -1.26 1.62 -2.142t2.664 -0.882q4.176 0 4.176 5.652v13.356zm16.848 -35.928v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','THUMB_TACK':'M17.28 -33.335v-16.128q0 -0.504 -0.324 -0.828t-0.828 -0.324 -0.828 0.324 -0.324 0.828v16.128q0 0.504 0.324 0.828t0.828 0.324 0.828 -0.324 0.324 -0.828zm24.192 12.672q0 0.936 -0.684 1.62t-1.62 0.684h-15.444l-1.836 17.388q-0.072 0.432 -0.378 0.738t-0.738 0.306h-0.036q-0.972 0 -1.152 -0.972l-2.736 -17.46h-14.544q-0.936 0 -1.62 -0.684t-0.684 -1.62q0 -4.428 2.826 -7.974t6.39 -3.546v-18.432q-1.872 0 -3.24 -1.368t-1.368 -3.24 1.368 -3.24 3.24 -1.368h23.04q1.872 0 3.24 1.368t1.368 3.24 -1.368 3.24 -3.24 1.368v18.432q3.564 0 6.39 3.546t2.826 7.974z','EXTERNAL_LINK':'M50.688 -31.031v11.52q0 4.284 -3.042 7.326t-7.326 3.042h-29.952q-4.284 0 -7.326 -3.042t-3.042 -7.326v-29.952q0 -4.284 3.042 -7.326t7.326 -3.042h25.344q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-25.344q-2.376 0 -4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068 -1.692t1.692 -4.068v-11.52q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828zm13.824 -31.104v18.432q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-6.336 -6.336 -23.472 23.472q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-4.104 -4.104q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l23.472 -23.472 -6.336 -6.336q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684h18.432q0.936 0 1.62 0.684t0.684 1.62z','SIGN_IN':'M42.624 -32.183q0 0.936 -0.684 1.62l-19.584 19.584q-0.684 0.684 -1.62 0.684t-1.62 -0.684 -0.684 -1.62v-10.368h-16.128q-0.936 0 -1.62 -0.684t-0.684 -1.62v-13.824q0 -0.936 0.684 -1.62t1.62 -0.684h16.128v-10.368q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684l19.584 19.584q0.684 0.684 0.684 1.62zm12.672 -12.672v25.344q0 4.284 -3.042 7.326t-7.326 3.042h-11.52q-0.468 0 -0.81 -0.342t-0.342 -0.81q0 -0.144 -0.036 -0.72t-0.018 -0.954 0.108 -0.846 0.36 -0.702 0.738 -0.234h11.52q2.376 0 4.068 -1.692t1.692 -4.068v-25.344q0 -2.376 -1.692 -4.068t-4.068 -1.692h-11.232000000000001l-0.414 -0.036 -0.414 -0.108 -0.288 -0.198 -0.252 -0.324 -0.072 -0.486q0 -0.144 -0.036 -0.72t-0.018 -0.954 0.108 -0.846 0.36 -0.702 0.738 -0.234h11.52q4.284 0 7.326 3.042t3.042 7.326z','TROPHY':'M16.488 -32.651q-2.664 -5.832 -2.664 -13.356h-9.216v3.456q0 2.808 3.402 5.832t8.478 4.068zm38.808 -9.9v-3.456h-9.216q0 7.524 -2.664 13.356 5.076 -1.044 8.478 -4.068t3.402 -5.832zm4.608 -4.608v4.608q0 2.556 -1.494 5.148t-4.032 4.68 -6.228 3.51 -7.758 1.602q-1.512 1.944 -3.42 3.42 -1.368 1.224 -1.89 2.61t-0.522 3.222q0 1.944 1.098 3.276t3.51 1.332q2.7 0 4.806 1.638t2.106 4.122v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-29.952q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -2.484 2.106 -4.122t4.806 -1.638q2.412 0 3.51 -1.332t1.098 -3.276q0 -1.836 -0.522 -3.222t-1.89 -2.61q-1.908 -1.476 -3.42 -3.42 -4.068 -0.18 -7.758 -1.602t-6.228 -3.51 -4.032 -4.68 -1.494 -5.148v-4.608q0 -1.44 1.008 -2.448t2.448 -1.008h10.368v-3.456q0 -2.376 1.692 -4.068t4.068 -1.692h20.736q2.376 0 4.068 1.692t1.692 4.068v3.456h10.368q1.44 0 2.448 1.008t1.008 2.448z','GITHUB_SQUARE':'M14.184 -15.767q-0.288 0.324 -0.72 -0.108 -0.468 -0.396 -0.144 -0.684 0.288 -0.324 0.72 0.108 0.432 0.396 0.144 0.684zm-1.512 -2.196q0.324 0.432 0 0.684 -0.288 0.216 -0.612 -0.252t0 -0.648q0.324 -0.252 0.612 0.216zm-2.196 -2.16q-0.18 0.252 -0.468 0.072 -0.36 -0.18 -0.252 -0.432 0.108 -0.18 0.468 -0.072 0.36 0.18 0.252 0.432zm1.116 1.224q-0.216 0.252 -0.576 -0.108 -0.324 -0.396 -0.072 -0.576 0.216 -0.216 0.576 0.108 0.324 0.396 0.072 0.576zm4.644 4.032q-0.144 0.432 -0.684 0.216 -0.612 -0.144 -0.468 -0.54t0.684 -0.252q0.576 0.18 0.468 0.576zm2.268 0.18q0 0.396 -0.576 0.396 -0.612 0.072 -0.612 -0.396 0 -0.396 0.576 -0.396 0.612 -0.072 0.612 0.396zm2.088 -0.36q0.072 0.36 -0.504 0.504t-0.648 -0.288 0.504 -0.54q0.576 -0.072 0.648 0.324zm34.704 -34.416v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-8.064q-0.576 0 -0.882 -0.036t-0.702 -0.18 -0.576 -0.522 -0.18 -0.99v-8.604q0 -3.492 -1.872 -5.112 2.052 -0.216 3.69 -0.648t3.384 -1.404 2.916 -2.394 1.908 -3.78 0.738 -5.418q0 -4.356 -2.844 -7.416 1.332 -3.276 -0.288 -7.344 -1.008 -0.324 -2.916 0.396t-3.312 1.584l-1.368 0.864q-3.348 -0.936 -6.912 -0.936t-6.912 0.936q-0.576 -0.396 -1.53 -0.972t-3.006 -1.386 -3.096 -0.486q-1.584 4.068 -0.252 7.344 -2.844 3.06 -2.844 7.416 0 3.06 0.738 5.4t1.89 3.78 2.898 2.412 3.384 1.404 3.69 0.648q-1.44 1.296 -1.764 3.708 -0.756 0.36 -1.62 0.54t-2.052 0.18 -2.358 -0.774 -1.998 -2.25q-0.684 -1.152 -1.746 -1.872t-1.782 -0.864l-0.72 -0.108q-0.756 0 -1.044 0.162t-0.18 0.414 0.324 0.504 0.468 0.432l0.252 0.18q0.792 0.36 1.566 1.368t1.134 1.836l0.36 0.828q0.468 1.368 1.584 2.214t2.412 1.08 2.502 0.252 1.998 -0.126l0.828 -0.144q0 1.368 0.018 3.708t0.018 2.448q0 0.792 -0.396 1.206t-0.792 0.468 -1.188 0.054h-8.064q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','UPLOAD':'M46.08 -11.447q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm9.216 0q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm4.608 -8.064v11.52q0 1.44 -1.008 2.448t-2.448 1.008h-52.992q-1.44 0 -2.448 -1.008t-1.008 -2.448v-11.52q0 -1.44 1.008 -2.448t2.448 -1.008h15.372q0.756 2.016 2.538 3.312t3.978 1.296h9.216q2.196 0 3.978 -1.296t2.538 -3.312h15.372q1.44 0 2.448 1.008t1.008 2.448zm-11.7 -23.328q-0.612 1.44 -2.124 1.44h-9.216v16.128q0 0.936 -0.684 1.62t-1.62 0.684h-9.216q-0.936 0 -1.62 -0.684t-0.684 -1.62v-16.128h-9.216q-1.512 0 -2.124 -1.44 -0.612 -1.404 0.504 -2.484l16.128 -16.128q0.648 -0.684 1.62 -0.684t1.62 0.684l16.128 16.128q1.116 1.08 0.504 2.484z','LEMON_O':'M50.652 -34.703q0 -1.584 -0.252 -4.086t-0.648 -3.474q-0.432 -1.08 -0.612 -1.584t-0.324 -1.314 -0.144 -1.746q0 -0.828 0.18 -2.466t0.18 -2.43q0 -1.332 -0.36 -1.98 -0.144 -0.036 -0.468 -0.036 -0.684 0 -2.088 0.162t-2.124 0.162q-2.16 0 -6.336 -0.864t-6.3 -0.864q-1.548 0 -3.402 0.414t-3.06 0.846 -3.222 1.224q-4.932 1.944 -7.272 3.708 -3.456 2.628 -5.742 6.822t-3.168 8.496 -0.882 8.946q0 1.44 0.45 4.32t0.45 4.356q0 0.828 -0.396 2.394t-0.396 2.358 0.432 1.314 1.224 0.522q0.864 0 2.61 -0.396t2.646 -0.396q2.052 0 6.102 0.558t6.102 0.558q6.516 0 10.224 -1.296 4.644 -1.62 8.478 -5.49t5.976 -8.838 2.142 -9.9zm4.608 -0.072q0 5.94 -2.52 11.79t-7.056 10.368 -10.116 6.498q-4.464 1.584 -11.736 1.584 -2.052 0 -6.12 -0.522t-6.084 -0.522q-0.864 0 -2.61 0.522t-2.646 0.522q-2.628 0 -4.446 -1.998t-1.818 -4.626q0 -0.864 0.396 -2.448t0.396 -2.412q0 -1.44 -0.45 -4.338t-0.45 -4.374q0 -3.996 0.648 -7.83t1.962 -7.542 3.618 -6.984 5.4 -5.616q2.808 -2.124 8.352 -4.32 6.984 -2.808 11.376 -2.808 2.16 0 6.318 0.864t6.246 0.864q0.684 0 2.052 -0.18t2.088 -0.18q2.916 0 4.248 1.818t1.332 4.842q0 0.828 -0.18 2.448t-0.18 2.448q0 0.36 0.036 0.666t0.108 0.612 0.144 0.486 0.234 0.576 0.234 0.612q0.576 1.44 0.9 4.266t0.324 4.914z','PHONE':'M50.688 -19.799q0 0.972 -0.36 2.538t-0.756 2.466q-0.756 1.8 -4.392 3.816 -3.384 1.836 -6.696 1.836 -0.972 0 -1.89 -0.126t-2.07 -0.45 -1.71 -0.522 -1.998 -0.738 -1.764 -0.648q-3.528 -1.26 -6.3 -2.988 -4.608 -2.844 -9.522 -7.758t-7.758 -9.522q-1.728 -2.772 -2.988 -6.3 -0.108 -0.324 -0.648 -1.764t-0.738 -1.998 -0.522 -1.71 -0.45 -2.07 -0.126 -1.89q0 -3.312 1.836 -6.696 2.016 -3.636 3.816 -4.392 0.9 -0.396 2.466 -0.756t2.538 -0.36q0.504 0 0.756 0.108 0.648 0.216 1.908 2.736 0.396 0.684 1.08 1.944t1.26 2.286 1.116 1.926q0.108 0.144 0.63 0.9t0.774 1.278 0.252 1.026q0 0.72 -1.026 1.8t-2.232 1.98 -2.232 1.908 -1.026 1.656q0 0.324 0.18 0.81t0.306 0.738 0.504 0.864 0.414 0.684q2.736 4.932 6.264 8.46t8.46 6.264q0.072 0.036 0.684 0.414t0.864 0.504 0.738 0.306 0.81 0.18q0.648 0 1.656 -1.026t1.908 -2.232 1.98 -2.232 1.8 -1.026q0.504 0 1.026 0.252t1.278 0.774 0.9 0.63q0.9 0.54 1.926 1.116t2.286 1.26 1.944 1.08q2.52 1.26 2.736 1.908 0.108 0.252 0.108 0.756z','SQUARE_O':'M40.32 -55.223h-29.952q-2.376 0 -4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068 -1.692t1.692 -4.068v-29.952q0 -2.376 -1.692 -4.068t-4.068 -1.692zm10.368 5.76v29.952q0 4.284 -3.042 7.326t-7.326 3.042h-29.952q-4.284 0 -7.326 -3.042t-3.042 -7.326v-29.952q0 -4.284 3.042 -7.326t7.326 -3.042h29.952q4.284 0 7.326 3.042t3.042 7.326z','BOOKMARK_O':'M41.472 -55.223h-36.864v44.712l15.228 -14.616 3.204 -3.06 3.204 3.06 15.228 14.616v-44.712zm0.432 -4.608q0.828 0 1.584 0.324 1.188 0.468 1.89 1.476t0.702 2.232v46.404q0 1.224 -0.702 2.232t-1.89 1.476q-0.684 0.288 -1.584 0.288 -1.728 0 -2.988 -1.152l-15.876 -15.264 -15.876 15.264q-1.296 1.188 -2.988 1.188 -0.828 0 -1.584 -0.324 -1.188 -0.468 -1.89 -1.476t-0.702 -2.232v-46.404q0 -1.224 0.702 -2.232t1.89 -1.476q0.756 -0.324 1.584 -0.324h37.728z','PHONE_SQUARE':'M46.08 -21.491q0 -0.396 -0.072 -0.576 -0.108 -0.288 -1.386 -1.062t-3.186 -1.782l-1.908 -1.044q-0.18 -0.108 -0.684 -0.468t-0.9 -0.54 -0.756 -0.18q-0.648 0 -1.692 1.17t-2.052 2.358 -1.584 1.188q-0.252 0 -0.594 -0.126t-0.558 -0.234 -0.612 -0.342 -0.504 -0.306q-3.564 -1.98 -6.138 -4.554t-4.554 -6.138q-0.072 -0.108 -0.306 -0.504t-0.342 -0.612 -0.234 -0.558 -0.126 -0.594q0 -0.468 0.738 -1.206t1.62 -1.386 1.62 -1.422 0.738 -1.314q0 -0.36 -0.18 -0.756t-0.54 -0.9 -0.468 -0.684q-0.108 -0.216 -0.54 -1.026t-0.9 -1.638 -0.954 -1.71 -0.9 -1.458 -0.594 -0.648 -0.576 -0.072q-1.728 0 -3.636 0.792 -1.656 0.756 -2.88 3.402t-1.224 4.698q0 0.576 0.09 1.224t0.18 1.098 0.324 1.188 0.36 1.062 0.45 1.188 0.396 1.08q2.16 5.904 7.794 11.538t11.538 7.794q0.216 0.072 1.08 0.396t1.188 0.45 1.062 0.36 1.188 0.324 1.098 0.18 1.224 0.09q2.052 0 4.698 -1.224t3.402 -2.88q0.792 -1.908 0.792 -3.636zm9.216 -27.972v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','TWITTER':'M58.32 -49.751q-2.412 3.528 -5.832 6.012 0.036 0.504 0.036 1.512 0 4.68 -1.368 9.342t-4.158 8.946 -6.642 7.578 -9.288 5.256 -11.628 1.962q-9.756 0 -17.856 -5.22 1.26 0.144 2.808 0.144 8.1 0 14.436 -4.968 -3.78 -0.072 -6.768 -2.322t-4.104 -5.742q1.188 0.18 2.196 0.18 1.548 0 3.06 -0.396 -4.032 -0.828 -6.678 -4.014t-2.646 -7.398v-0.144q2.448 1.368 5.256 1.476 -2.376 -1.584 -3.78 -4.14t-1.404 -5.544q0 -3.168 1.584 -5.868 4.356 5.364 10.602 8.586t13.374 3.582q-0.288 -1.368 -0.288 -2.664 0 -4.824 3.402 -8.226t8.226 -3.402q5.04 0 8.496 3.672 3.924 -0.756 7.38 -2.808 -1.332 4.14 -5.112 6.408 3.348 -0.36 6.696 -1.8z','FACEBOOK':'M34.524 -64.007v9.504h-5.652q-3.096 0 -4.176 1.296t-1.08 3.888v6.804h10.548l-1.404 10.656h-9.144v27.324h-11.016v-27.324h-9.18v-10.656h9.18v-7.848q0 -6.696 3.744 -10.386t9.972 -3.69q5.292 0 8.208 0.432z','GITHUB':'M55.296 -32.183q0 9.036 -5.274 16.254t-13.626 9.99q-0.972 0.18 -1.422 -0.252t-0.45 -1.08v-7.596q0 -3.492 -1.872 -5.112 2.052 -0.216 3.69 -0.648t3.384 -1.404 2.916 -2.394 1.908 -3.78 0.738 -5.418q0 -4.356 -2.844 -7.416 1.332 -3.276 -0.288 -7.344 -1.008 -0.324 -2.916 0.396t-3.312 1.584l-1.368 0.864q-3.348 -0.936 -6.912 -0.936t-6.912 0.936q-0.576 -0.396 -1.53 -0.972t-3.006 -1.386 -3.096 -0.486q-1.584 4.068 -0.252 7.344 -2.844 3.06 -2.844 7.416 0 3.06 0.738 5.4t1.89 3.78 2.898 2.412 3.384 1.404 3.69 0.648q-1.44 1.296 -1.764 3.708 -0.756 0.36 -1.62 0.54t-2.052 0.18 -2.358 -0.774 -1.998 -2.25q-0.684 -1.152 -1.746 -1.872t-1.782 -0.864l-0.72 -0.108q-0.756 0 -1.044 0.162t-0.18 0.414 0.324 0.504 0.468 0.432l0.252 0.18q0.792 0.36 1.566 1.368t1.134 1.836l0.36 0.828q0.468 1.368 1.584 2.214t2.412 1.08 2.502 0.252 1.998 -0.126l0.828 -0.144q0 1.368 0.018 3.204t0.018 1.944q0 0.648 -0.468 1.08t-1.44 0.252q-8.352 -2.772 -13.626 -9.99t-5.274 -16.254q0 -7.524 3.708 -13.878t10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','UNLOCK':'M59.904 -43.703v9.216q0 0.936 -0.684 1.62t-1.62 0.684h-2.304q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516v6.912h3.456q1.44 0 2.448 1.008t1.008 2.448v20.736q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-20.736q0 -1.44 1.008 -2.448t2.448 -1.008h24.192v-6.912q0 -6.66 4.734 -11.394t11.394 -4.734 11.394 4.734 4.734 11.394z','CREDIT_CARD':'M63.36 -59.831q2.376 0 4.068 1.692t1.692 4.068v43.776q0 2.376 -1.692 4.068t-4.068 1.692h-57.6q-2.376 0 -4.068 -1.692t-1.692 -4.068v-43.776q0 -2.376 1.692 -4.068t4.068 -1.692h57.6zm-57.6 4.608q-0.468 0 -0.81 0.342t-0.342 0.81v8.064h59.904v-8.064q0 -0.468 -0.342 -0.81t-0.81 -0.342h-57.6zm57.6 46.08q0.468 0 0.81 -0.342t0.342 -0.81v-21.888h-59.904v21.888q0 0.468 0.342 0.81t0.81 0.342h57.6zm-54.144 -4.608v-4.608h9.216v4.608h-9.216zm13.824 0v-4.608h13.824v4.608h-13.824z','RSS':'M13.824 -16.055q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896 2.016 -4.896 4.896 -2.016 4.896 2.016 2.016 4.896zm18.432 4.428q0.072 1.008 -0.612 1.728 -0.648 0.756 -1.692 0.756h-4.86q-0.9 0 -1.548 -0.594t-0.72 -1.494q-0.792 -8.244 -6.642 -14.094t-14.094 -6.642q-0.9 -0.072 -1.494 -0.72t-0.594 -1.548v-4.86q0 -1.044 0.756 -1.692 0.612 -0.612 1.548 -0.612h0.18q5.76 0.468 11.016 2.898t9.324 6.534q4.104 4.068 6.534 9.324t2.898 11.016zm18.432 0.072q0.072 0.972 -0.648 1.692 -0.648 0.72 -1.656 0.72h-5.148q-0.936 0 -1.602 -0.63t-0.702 -1.53q-0.432 -7.74 -3.636 -14.706t-8.334 -12.096 -12.096 -8.334 -14.706 -3.672q-0.9 -0.036 -1.53 -0.702t-0.63 -1.566v-5.148q0 -1.008 0.72 -1.656 0.648 -0.648 1.584 -0.648h0.108q9.432 0.468 18.054 4.32t15.318 10.584q6.732 6.696 10.584 15.318t4.32 18.054z','HDD_O':'M37.44 -20.663q0 1.188 -0.846 2.034t-2.034 0.846 -2.034 -0.846 -0.846 -2.034 0.846 -2.034 2.034 -0.846 2.034 0.846 0.846 2.034zm9.216 0q0 1.188 -0.846 2.034t-2.034 0.846 -2.034 -0.846 -0.846 -2.034 0.846 -2.034 2.034 -0.846 2.034 0.846 0.846 2.034zm4.032 5.76v-11.52q0 -0.468 -0.342 -0.81t-0.81 -0.342h-43.776q-0.468 0 -0.81 0.342t-0.342 0.81v11.52q0 0.468 0.342 0.81t0.81 0.342h43.776q0.468 0 0.81 -0.342t0.342 -0.81zm-44.28 -17.28h42.48l-5.652 -17.352q-0.144 -0.468 -0.576 -0.774t-0.936 -0.306h-28.152q-0.504 0 -0.936 0.306t-0.576 0.774zm48.888 5.76v11.52q0 2.376 -1.692 4.068t-4.068 1.692h-43.776q-2.376 0 -4.068 -1.692t-1.692 -4.068v-11.52q0 -0.9 0.576 -2.7l7.092 -21.816q0.612 -1.908 2.268 -3.096t3.636 -1.188h28.152q1.98 0 3.636 1.188t2.268 3.096l7.092 21.816q0.576 1.8 0.576 2.7z','BULLHORN':'M59.904 -41.399q1.908 0 3.258 1.35t1.35 3.258 -1.35 3.258 -3.258 1.35v13.824q0 1.872 -1.368 3.24t-3.24 1.368q-15.012 -12.492 -29.232 -13.68 -2.088 0.684 -3.276 2.376t-1.116 3.618 1.44 3.33q-0.72 1.188 -0.828 2.358t0.216 2.088 1.206 1.98 1.728 1.8 2.214 1.818q-1.044 2.088 -4.014 2.988t-6.066 0.414 -4.752 -1.998q-0.252 -0.828 -1.062 -3.15t-1.152 -3.402 -0.828 -3.204 -0.54 -3.636 0.126 -3.546 0.792 -3.978h-4.392q-2.376 0 -4.068 -1.692t-1.692 -4.068v-6.912q0 -2.376 1.692 -4.068t4.068 -1.692h17.28q15.66 0 32.256 -13.824 1.872 0 3.24 1.368t1.368 3.24v13.824zm-4.608 21.744v-34.344q-14.184 10.872 -27.648 12.348v9.72q13.572 1.512 27.648 12.276z','BELL_O':'M32.832 -3.383q0 -0.576 -0.576 -0.576 -2.124 0 -3.654 -1.53t-1.53 -3.654q0 -0.576 -0.576 -0.576t-0.576 0.576q0 2.628 1.854 4.482t4.482 1.854q0.576 0 0.576 -0.576zm-23.976 -10.368h46.8q-9.576 -10.8 -9.576 -29.952 0 -1.836 -0.864 -3.78t-2.484 -3.708 -4.374 -2.898 -6.102 -1.134 -6.102 1.134 -4.374 2.898 -2.484 3.708 -0.864 3.78q0 19.152 -9.576 29.952zm53.352 0q0 1.872 -1.368 3.24t-3.24 1.368h-16.128q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516h-16.128q-1.872 0 -3.24 -1.368t-1.368 -3.24q1.8 -1.512 3.276 -3.168t3.06 -4.302 2.682 -5.706 1.8 -7.416 0.702 -9.36q0 -5.472 4.212 -10.17t11.052 -5.706q-0.288 -0.684 -0.288 -1.404 0 -1.44 1.008 -2.448t2.448 -1.008 2.448 1.008 1.008 2.448q0 0.72 -0.288 1.404 6.84 1.008 11.052 5.706t4.212 10.17q0 5.004 0.702 9.36t1.8 7.416 2.682 5.706 3.06 4.302 3.276 3.168z','CERTIFICATE':'M49.536 -32.183l4.968 4.86q1.08 1.008 0.72 2.52 -0.432 1.476 -1.872 1.836l-6.768 1.728 1.908 6.696q0.432 1.476 -0.684 2.52 -1.044 1.116 -2.52 0.684l-6.696 -1.908 -1.728 6.768q-0.36 1.44 -1.836 1.872 -0.432 0.072 -0.684 0.072 -1.116 0 -1.836 -0.792l-4.86 -4.968 -4.86 4.968q-1.008 1.08 -2.52 0.72 -1.476 -0.396 -1.836 -1.872l-1.728 -6.768 -6.696 1.908q-1.476 0.432 -2.52 -0.684 -1.116 -1.044 -0.684 -2.52l1.908 -6.696 -6.768 -1.728q-1.44 -0.36 -1.872 -1.836 -0.36 -1.512 0.72 -2.52l4.968 -4.86 -4.968 -4.86q-1.08 -1.008 -0.72 -2.52 0.432 -1.476 1.872 -1.836l6.768 -1.728 -1.908 -6.696q-0.432 -1.476 0.684 -2.52 1.044 -1.116 2.52 -0.684l6.696 1.908 1.728 -6.768q0.36 -1.476 1.836 -1.836 1.476 -0.432 2.52 0.684l4.86 5.004 4.86 -5.004q1.044 -1.08 2.52 -0.684 1.476 0.36 1.836 1.836l1.728 6.768 6.696 -1.908q1.476 -0.432 2.52 0.684 1.116 1.044 0.684 2.52l-1.908 6.696 6.768 1.728q1.44 0.36 1.872 1.836 0.36 1.512 -0.72 2.52z','HAND_O_RIGHT':'M9.216 -16.055q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm50.688 -20.736q0 -1.836 -1.404 -3.222t-3.204 -1.386h-20.736q0 -0.72 0.54 -1.746t1.188 -1.98 1.188 -2.448 0.54 -3.042q0 -2.412 -1.602 -3.51t-4.158 -1.098q-0.864 0 -3.24 5.004 -0.864 1.584 -1.332 2.34 -1.44 2.304 -4.032 5.22 -2.556 2.916 -3.636 3.816 -2.484 2.052 -5.04 2.052h-1.152v23.04h1.152q2.592 0 6.012 1.152t6.966 2.304 6.462 1.152q6.804 0 6.804 -6.012 0 -0.936 -0.18 -2.016 1.08 -0.576 1.71 -1.89t0.63 -2.646 -0.648 -2.484q1.908 -1.8 1.908 -4.284 0 -0.9 -0.36 -1.998t-0.9 -1.71h11.916q1.872 0 3.24 -1.368t1.368 -3.24zm4.608 -0.036q0 3.78 -2.718 6.516t-6.498 2.736h-6.084q-0.144 2.232 -1.332 4.284 0.108 0.756 0.108 1.548 0 3.636 -2.16 6.408 0.036 5.004 -3.06 7.902t-8.172 2.898q-4.788 0 -11.592 -2.484 -5.904 -2.124 -8.028 -2.124h-10.368q-1.908 0 -3.258 -1.35t-1.35 -3.258v-23.04q0 -1.908 1.35 -3.258t3.258 -1.35h10.368q0.36 0 0.774 -0.162t0.846 -0.504 0.81 -0.648 0.864 -0.81 0.738 -0.774 0.684 -0.774 0.504 -0.612q2.34 -2.664 3.6 -4.644 0.468 -0.756 1.188 -2.232t1.332 -2.592 1.458 -2.268 1.98 -1.782 2.502 -0.63q4.5 0 7.434 2.412t2.934 6.804q0 2.448 -0.792 4.608h13.464q3.744 0 6.48 2.736t2.736 6.444z','HAND_O_LEFT':'M49.536 -13.751h1.152v-23.04h-1.152q-1.26 0 -2.43 -0.432t-2.25 -1.332 -1.8 -1.656 -1.764 -1.944l-0.126 -0.162 -0.144 -0.162 -0.162 -0.18q-2.592 -2.916 -4.032 -5.22 -0.504 -0.792 -1.368 -2.448 -0.036 -0.108 -0.378 -0.81t-0.666 -1.296 -0.72 -1.278 -0.774 -1.098 -0.666 -0.414q-2.556 0 -4.158 1.098t-1.602 3.51q0 1.548 0.54 3.042t1.188 2.448 1.188 1.98 0.54 1.746h-20.736q-1.8 0 -3.204 1.386t-1.404 3.222q0 1.872 1.368 3.24t3.24 1.368h11.916q-0.54 0.612 -0.9 1.71t-0.36 1.998q0 2.484 1.908 4.284 -0.648 1.152 -0.648 2.484t0.63 2.646 1.71 1.89q-0.144 0.864 -0.144 2.016 0 3.06 1.746 4.536t4.878 1.476q3.024 0 6.588 -1.152t6.984 -2.304 6.012 -1.152zm10.368 -2.304q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm4.608 -20.736v23.04q0 1.908 -1.35 3.258t-3.258 1.35h-10.368q-2.124 0 -8.028 2.124 -6.84 2.484 -11.412 2.484 -5.112 0 -8.28 -2.79t-3.132 -7.83l0.036 -0.18q-2.196 -2.736 -2.196 -6.408 0 -0.792 0.108 -1.548 -1.188 -2.052 -1.332 -4.284h-6.084q-3.78 0 -6.498 -2.736t-2.718 -6.516q0 -3.708 2.736 -6.444t6.48 -2.736h13.464q-0.792 -2.16 -0.792 -4.608 0 -4.392 2.934 -6.804t7.434 -2.412q1.368 0 2.502 0.63t1.98 1.782 1.458 2.268 1.332 2.592 1.188 2.232q1.26 1.98 3.6 4.644 0.072 0.108 0.504 0.612t0.684 0.774 0.738 0.774 0.864 0.81 0.81 0.648 0.846 0.504 0.774 0.162h10.368q1.908 0 3.258 1.35t1.35 3.258z','HAND_O_UP':'M46.08 -6.839q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm4.608 -27.504q0 -6.804 -6.012 -6.804 -0.936 0 -2.016 0.18 -0.576 -1.08 -1.89 -1.71t-2.646 -0.63 -2.484 0.648q-1.8 -1.908 -4.284 -1.908 -0.9 0 -1.998 0.36t-1.71 0.9v-11.916q0 -1.872 -1.368 -3.24t-3.24 -1.368q-1.836 0 -3.222 1.404t-1.386 3.204v20.736q-0.72 0 -1.746 -0.54t-1.98 -1.188 -2.448 -1.188 -3.042 -0.54q-2.412 0 -3.51 1.602t-1.098 4.158q0 0.864 5.004 3.24 1.584 0.864 2.34 1.332 2.304 1.44 5.22 4.032 2.916 2.556 3.816 3.636 2.052 2.484 2.052 5.04v1.152h23.04v-1.152q0 -2.592 1.152 -6.012t2.304 -6.966 1.152 -6.462zm4.608 -0.18q0 4.788 -2.484 11.592 -2.124 5.904 -2.124 8.028v10.368q0 1.908 -1.35 3.258t-3.258 1.35h-23.04q-1.908 0 -3.258 -1.35t-1.35 -3.258v-10.368q0 -0.36 -0.162 -0.774t-0.504 -0.846 -0.648 -0.81 -0.81 -0.864 -0.774 -0.738 -0.774 -0.684 -0.612 -0.504q-2.664 -2.34 -4.644 -3.6 -0.756 -0.468 -2.232 -1.188t-2.592 -1.332 -2.268 -1.458 -1.782 -1.98 -0.63 -2.502q0 -4.5 2.412 -7.434t6.804 -2.934q2.448 0 4.608 0.792v-13.464q0 -3.744 2.736 -6.48t6.444 -2.736q3.78 0 6.516 2.718t2.736 6.498v6.084q2.232 0.144 4.284 1.332 0.756 -0.108 1.548 -0.108 3.636 0 6.408 2.16 5.004 -0.036 7.902 3.06t2.898 8.172z','HAND_O_DOWN':'M50.688 -29.879q0 -3.024 -1.152 -6.588t-2.304 -6.984 -1.152 -6.012v-1.152h-23.04v1.152q0 1.26 -0.432 2.43t-1.332 2.25 -1.656 1.8 -1.944 1.764q-0.324 0.288 -0.504 0.432 -2.916 2.592 -5.22 4.032 -0.792 0.504 -2.448 1.368 -0.108 0.036 -0.81 0.378t-1.296 0.666 -1.278 0.72 -1.098 0.774 -0.414 0.666q0 2.556 1.098 4.158t3.51 1.602q1.548 0 3.042 -0.54t2.448 -1.188 1.98 -1.188 1.746 -0.54v20.736q0 1.8 1.386 3.204t3.222 1.404q1.872 0 3.24 -1.368t1.368 -3.24v-11.916q1.656 1.26 3.708 1.26 2.484 0 4.284 -1.908 1.152 0.648 2.484 0.648t2.646 -0.63 1.89 -1.71q0.864 0.144 2.016 0.144 3.06 0 4.536 -1.746t1.476 -4.878zm-4.608 -27.648q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm9.216 27.504q0 5.112 -2.79 8.28t-7.83 3.132l-0.18 -0.036q-2.736 2.196 -6.408 2.196 -0.792 0 -1.548 -0.108 -1.944 1.08 -4.284 1.332v6.084q0 3.78 -2.736 6.498t-6.516 2.718q-3.708 0 -6.444 -2.736t-2.736 -6.48v-13.464q-1.944 0.792 -4.608 0.792 -4.356 0 -6.786 -2.934t-2.43 -7.434q0 -1.368 0.63 -2.502t1.782 -1.98 2.268 -1.458 2.592 -1.332 2.232 -1.188q1.98 -1.26 4.644 -3.6 0.108 -0.072 0.612 -0.504t0.774 -0.684 0.774 -0.738 0.81 -0.864 0.648 -0.81 0.504 -0.846 0.162 -0.774v-10.368q0 -1.908 1.35 -3.258t3.258 -1.35h23.04q1.908 0 3.258 1.35t1.35 3.258v10.368q0 2.124 2.124 8.028 2.484 6.84 2.484 11.412z','ARROW_CIRCLE_LEFT':'M46.08 -29.879v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-18.072l6.804 -6.804q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-3.276 -3.276q-0.648 -0.648 -1.62 -0.648t-1.62 0.648l-13.032 13.032 -3.276 3.276q-0.648 0.648 -0.648 1.62t0.648 1.62l3.276 3.276 13.032 13.032q0.648 0.648 1.62 0.648t1.62 -0.648l3.276 -3.276q0.648 -0.648 0.648 -1.62t-0.648 -1.62l-6.804 -6.804h18.072q0.936 0 1.62 -0.684t0.684 -1.62zm9.216 -2.304q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','ARROW_CIRCLE_RIGHT':'M46.26 -32.183q0 -0.972 -0.648 -1.62l-3.276 -3.276 -13.032 -13.032q-0.648 -0.648 -1.62 -0.648t-1.62 0.648l-3.276 3.276q-0.648 0.648 -0.648 1.62t0.648 1.62l6.804 6.804h-18.072q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h18.072l-6.804 6.804q-0.684 0.684 -0.684 1.62t0.684 1.62l3.276 3.276q0.648 0.648 1.62 0.648t1.62 -0.648l13.032 -13.032 3.276 -3.276q0.648 -0.648 0.648 -1.62zm9.036 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','ARROW_CIRCLE_UP':'M46.224 -32.219q0 -0.972 -0.648 -1.62l-13.032 -13.032 -3.276 -3.276q-0.648 -0.648 -1.62 -0.648t-1.62 0.648l-3.276 3.276 -13.032 13.032q-0.648 0.648 -0.648 1.62t0.648 1.62l3.276 3.276q0.648 0.648 1.62 0.648t1.62 -0.648l6.804 -6.804v18.072q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62v-18.072l6.804 6.804q0.684 0.684 1.62 0.684t1.62 -0.684l3.276 -3.276q0.648 -0.648 0.648 -1.62zm9.072 0.036q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','ARROW_CIRCLE_DOWN':'M46.224 -32.147q0 -0.972 -0.648 -1.62l-3.276 -3.276q-0.648 -0.648 -1.62 -0.648t-1.62 0.648l-6.804 6.804v-18.072q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v18.072l-6.804 -6.804q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-3.276 3.276q-0.648 0.648 -0.648 1.62t0.648 1.62l13.032 13.032 3.276 3.276q0.648 0.648 1.62 0.648t1.62 -0.648l3.276 -3.276 13.032 -13.032q0.648 -0.648 0.648 -1.62zm9.072 -0.036q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','GLOBE':'M27.648 -59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878 -3.708 13.878 -10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708zm9.864 18.756q-0.072 0.036 -0.342 0.342t-0.486 0.342q0.072 0 0.162 -0.18t0.18 -0.396 0.126 -0.252q0.216 -0.252 0.792 -0.54 0.504 -0.216 1.872 -0.432 1.224 -0.288 1.836 0.396 -0.072 -0.072 0.342 -0.468t0.522 -0.432q0.108 -0.072 0.54 -0.162t0.54 -0.27l0.072 -0.792q-0.432 0.036 -0.63 -0.252t-0.234 -0.756q0 0.072 -0.216 0.288 0 -0.252 -0.162 -0.288t-0.414 0.036 -0.324 0.036q-0.36 -0.108 -0.54 -0.27t-0.288 -0.594 -0.144 -0.54q-0.072 -0.18 -0.342 -0.378t-0.342 -0.378l-0.09 -0.198 -0.108 -0.234 -0.144 -0.198 -0.198 -0.09 -0.252 0.18 -0.27 0.36 -0.162 0.18q-0.108 -0.072 -0.216 -0.054t-0.162 0.036 -0.162 0.108 -0.18 0.126q-0.108 0.072 -0.306 0.108t-0.306 0.072q0.54 -0.18 -0.036 -0.396 -0.36 -0.144 -0.576 -0.108 0.324 -0.144 0.27 -0.432t-0.306 -0.504h0.18q-0.036 -0.144 -0.306 -0.306t-0.63 -0.306 -0.468 -0.216q-0.288 -0.18 -1.224 -0.342t-1.188 -0.018q-0.18 0.216 -0.162 0.378t0.144 0.504 0.126 0.45q0.036 0.216 -0.198 0.468t-0.234 0.432q0 0.252 0.504 0.558t0.36 0.774q-0.108 0.288 -0.576 0.576t-0.576 0.432q-0.18 0.288 -0.054 0.666t0.378 0.594q0.072 0.072 0.054 0.144t-0.126 0.162 -0.198 0.144 -0.234 0.126l-0.108 0.072q-0.396 0.18 -0.738 -0.216t-0.486 -0.936q-0.252 -0.9 -0.576 -1.08 -0.828 -0.288 -1.044 0.036 -0.18 -0.468 -1.476 -0.936 -0.9 -0.324 -2.088 -0.144 0.216 -0.036 0 -0.54 -0.252 -0.54 -0.684 -0.432 0.108 -0.216 0.144 -0.63t0.036 -0.486q0.108 -0.468 0.432 -0.828 0.036 -0.036 0.252 -0.306t0.342 -0.486 0.018 -0.216q1.26 0.144 1.8 -0.396 0.18 -0.18 0.414 -0.612t0.378 -0.612q0.324 -0.216 0.504 -0.198t0.522 0.198 0.522 0.18q0.504 0.036 0.558 -0.396t-0.27 -0.72q0.432 0.036 0.108 -0.612 -0.18 -0.252 -0.288 -0.324 -0.432 -0.144 -0.972 0.18 -0.288 0.144 0.072 0.288 -0.036 -0.036 -0.342 0.378t-0.594 0.63 -0.576 -0.18q-0.036 -0.036 -0.198 -0.486t-0.342 -0.486q-0.288 0 -0.576 0.54 0.108 -0.288 -0.396 -0.54t-0.864 -0.288q0.684 -0.432 -0.288 -0.972 -0.252 -0.144 -0.738 -0.18t-0.702 0.144q-0.18 0.252 -0.198 0.414t0.18 0.288 0.378 0.198 0.414 0.144 0.306 0.108q0.504 0.36 0.288 0.504l-0.306 0.126 -0.414 0.162 -0.216 0.144q-0.108 0.144 0 0.504t-0.072 0.504q-0.18 -0.18 -0.324 -0.63t-0.252 -0.594q0.252 0.324 -0.9 0.216l-0.36 -0.036q-0.144 0 -0.576 0.072t-0.738 0.036 -0.486 -0.288q-0.144 -0.288 0 -0.72 0.036 -0.144 0.144 -0.072 -0.144 -0.108 -0.396 -0.342t-0.36 -0.306q-1.656 0.54 -3.384 1.476 0.216 0.036 0.432 -0.036 0.18 -0.072 0.468 -0.234t0.36 -0.198q1.224 -0.504 1.512 -0.252l0.18 -0.18q0.504 0.576 0.72 0.9 -0.252 -0.144 -1.08 -0.036 -0.72 0.216 -0.792 0.432 0.252 0.432 0.18 0.648 -0.144 -0.108 -0.414 -0.36t-0.522 -0.396 -0.54 -0.18q-0.576 0 -0.792 0.036 -5.256 2.88 -8.46 7.992 0.252 0.252 0.432 0.288 0.144 0.036 0.18 0.324t0.09 0.396 0.414 -0.108q0.324 0.288 0.108 0.684 0.036 -0.036 1.584 0.972 0.684 0.612 0.756 0.756 0.108 0.396 -0.36 0.648 -0.036 -0.072 -0.324 -0.324t-0.324 -0.144q-0.108 0.18 0.018 0.666t0.378 0.45q-0.252 0 -0.342 0.576t-0.09 1.278 -0.036 0.846l0.072 0.036q-0.108 0.432 0.198 1.242t0.774 0.702q-0.468 0.108 0.72 1.548 0.216 0.288 0.288 0.324 0.108 0.072 0.432 0.27t0.54 0.36 0.36 0.378q0.144 0.18 0.36 0.81t0.504 0.846q-0.072 0.216 0.342 0.72t0.378 0.828l-0.09 0.036 -0.09 0.036q0.108 0.252 0.558 0.504t0.558 0.468q0.036 0.108 0.072 0.36t0.108 0.396 0.288 0.072q0.072 -0.72 -0.864 -2.232 -0.54 -0.9 -0.612 -1.044 -0.108 -0.18 -0.198 -0.558t-0.162 -0.522q0.072 0 0.216 0.054t0.306 0.126 0.27 0.144 0.072 0.108q-0.108 0.252 0.072 0.63t0.432 0.666 0.612 0.684 0.432 0.468q0.216 0.216 0.504 0.702t0 0.486q0.324 0 0.72 0.36t0.612 0.72q0.18 0.288 0.288 0.936t0.18 0.864q0.072 0.252 0.306 0.486t0.45 0.342l0.576 0.288 0.468 0.252q0.18 0.072 0.666 0.378t0.774 0.414q0.36 0.144 0.576 0.144t0.522 -0.09 0.486 -0.126q0.54 -0.072 1.044 0.54t0.756 0.756q1.296 0.684 1.98 0.396 -0.072 0.036 0.018 0.27t0.288 0.558 0.324 0.522 0.198 0.306q0.18 0.216 0.648 0.54t0.648 0.54q0.216 -0.144 0.252 -0.324 -0.108 0.288 0.252 0.72t0.648 0.36q0.504 -0.108 0.504 -1.152 -1.116 0.54 -1.764 -0.648l-0.09 -0.198 -0.144 -0.306 -0.09 -0.306v-0.27l0.18 -0.108q0.324 0 0.36 -0.126t-0.072 -0.45 -0.144 -0.468q-0.036 -0.288 -0.396 -0.72t-0.432 -0.54q-0.18 0.324 -0.576 0.288t-0.576 -0.324l-0.054 0.198 -0.054 0.234q-0.468 0 -0.54 -0.036 0.036 -0.108 0.09 -0.63t0.126 -0.81q0.036 -0.144 0.198 -0.432t0.27 -0.522 0.144 -0.45 -0.162 -0.342 -0.63 -0.09q-0.684 0.036 -0.936 0.72 -0.036 0.108 -0.108 0.378t-0.18 0.414 -0.324 0.252q-0.252 0.108 -0.864 0.072t-0.864 -0.18q-0.468 -0.288 -0.81 -1.044t-0.342 -1.332q0 -0.36 0.09 -0.954t0.108 -0.9 -0.198 -0.882q0.108 -0.072 0.324 -0.342t0.36 -0.378l0.162 -0.054h0.162l0.144 -0.054 0.108 -0.216 -0.144 -0.108 -0.144 -0.108q0.252 0.108 1.026 -0.054t0.99 0.054q0.54 0.396 0.792 -0.072 0 -0.036 -0.09 -0.342t-0.018 -0.486q0.18 0.972 1.044 0.324 0.108 0.108 0.558 0.18t0.63 0.18l0.252 0.198 0.198 0.162 0.18 -0.018 0.306 -0.234q0.36 0.504 0.432 0.864 0.396 1.44 0.684 1.584 0.252 0.108 0.396 0.072t0.162 -0.342 0 -0.504 -0.054 -0.45l-0.036 -0.288v-0.648l-0.036 -0.288q-0.54 -0.108 -0.666 -0.432t0.054 -0.666 0.54 -0.666q0.036 -0.036 0.288 -0.126t0.558 -0.234 0.45 -0.288q0.756 -0.684 0.54 -1.26 0.252 0 0.396 -0.324l-0.18 -0.108 -0.27 -0.18 -0.162 -0.072q0.324 -0.18 0.072 -0.576 0.18 -0.108 0.27 -0.396t0.27 -0.36q0.324 0.432 0.756 0.072 0.252 -0.288 0.036 -0.576 0.18 -0.252 0.738 -0.378t0.666 -0.342q0.252 0.072 0.288 -0.072t0.036 -0.432 0.108 -0.432q0.144 -0.18 0.54 -0.324t0.468 -0.18l0.612 -0.396q0.108 -0.144 0 -0.144 0.648 0.072 1.116 -0.396 0.36 -0.396 -0.216 -0.72 0.108 -0.216 -0.108 -0.342t-0.54 -0.198q0.108 -0.036 0.414 -0.018t0.378 -0.054q0.54 -0.36 -0.252 -0.576 -0.612 -0.18 -1.548 0.432zm-5.868 31.572q7.416 -1.296 12.636 -6.804 -0.108 -0.108 -0.45 -0.162t-0.45 -0.126q-0.648 -0.252 -0.864 -0.288 0.036 -0.252 -0.09 -0.468t-0.288 -0.324 -0.45 -0.288 -0.396 -0.252l-0.252 -0.216 -0.252 -0.198 -0.27 -0.162 -0.306 -0.072 -0.36 0.036 -0.108 0.036 -0.198 0.09 -0.198 0.108 -0.144 0.108v0.09q-0.756 -0.612 -1.296 -0.792 -0.18 -0.036 -0.396 -0.198t-0.378 -0.252 -0.36 -0.054 -0.414 0.252q-0.18 0.18 -0.216 0.54t-0.072 0.468q-0.252 -0.18 0 -0.63t0.072 -0.666q-0.108 -0.216 -0.378 -0.162t-0.432 0.162 -0.414 0.306 -0.324 0.234 -0.306 0.198 -0.306 0.27q-0.108 0.144 -0.216 0.432t-0.18 0.396q-0.072 -0.144 -0.414 -0.234t-0.342 -0.198q0.072 0.36 0.144 1.26t0.18 1.368q0.252 1.116 -0.432 1.728 -0.972 0.9 -1.044 1.44 -0.144 0.792 0.432 0.936 0 0.252 -0.288 0.738t-0.252 0.774q0 0.216 0.072 0.576z','WRENCH':'M13.824 -11.447q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm23.184 -15.12l-24.552 24.552q-1.332 1.332 -3.24 1.332 -1.872 0 -3.276 -1.332l-3.816 -3.888q-1.368 -1.296 -1.368 -3.24 0 -1.908 1.368 -3.276l24.516 -24.516q1.404 3.528 4.122 6.246t6.246 4.122zm22.824 -15.66q0 1.404 -0.828 3.816 -1.692 4.824 -5.922 7.83t-9.306 3.006q-6.66 0 -11.394 -4.734t-4.734 -11.394 4.734 -11.394 11.394 -4.734q2.088 0 4.374 0.594t3.87 1.674q0.576 0.396 0.576 1.008t-0.576 1.008l-10.548 6.084v8.064l6.948 3.852q0.18 -0.108 2.844 -1.746t4.878 -2.916 2.538 -1.278q0.54 0 0.846 0.36t0.306 0.9z','TASKS':'M36.864 -13.751h23.04v-4.608h-23.04v4.608zm-13.824 -18.432h36.864v-4.608h-36.864v4.608zm23.04 -18.432h13.824v-4.608h-13.824v4.608zm18.432 29.952v9.216q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62zm0 -18.432v9.216q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62zm0 -18.432v9.216q0 0.936 -0.684 1.62t-1.62 0.684h-59.904q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684h59.904q0.936 0 1.62 0.684t0.684 1.62z','FILTER':'M50.508 -53.819q0.612 1.476 -0.504 2.52l-17.748 17.748v26.712q0 1.512 -1.404 2.124 -0.468 0.18 -0.9 0.18 -0.972 0 -1.62 -0.684l-9.216 -9.216q-0.684 -0.684 -0.684 -1.62v-17.496l-17.748 -17.748q-1.116 -1.044 -0.504 -2.52 0.612 -1.404 2.124 -1.404h46.08q1.512 0 2.124 1.404z','BRIEFCASE':'M23.04 -55.223h18.432v-4.608h-18.432v4.608zm41.472 23.04v17.28q0 2.376 -1.692 4.068t-4.068 1.692h-52.992q-2.376 0 -4.068 -1.692t-1.692 -4.068v-17.28h24.192v5.76q0 0.936 0.684 1.62t1.62 0.684h11.52q0.936 0 1.62 -0.684t0.684 -1.62v-5.76h24.192zm-27.648 0v4.608h-9.216v-4.608h9.216zm27.648 -17.28v13.824h-64.512v-13.824q0 -2.376 1.692 -4.068t4.068 -1.692h12.672v-5.76q0 -1.44 1.008 -2.448t2.448 -1.008h20.736q1.44 0 2.448 1.008t1.008 2.448v5.76h12.672q2.376 0 4.068 1.692t1.692 4.068z','ARROWS_ALT':'M46.188 -44.963l-12.78 12.78 12.78 12.78 5.184 -5.184q1.044 -1.116 2.52 -0.504 1.404 0.612 1.404 2.124v16.128q0 0.936 -0.684 1.62t-1.62 0.684h-16.128q-1.512 0 -2.124 -1.44 -0.612 -1.404 0.504 -2.484l5.184 -5.184 -12.78 -12.78 -12.78 12.78 5.184 5.184q1.116 1.08 0.504 2.484 -0.612 1.44 -2.124 1.44h-16.128q-0.936 0 -1.62 -0.684t-0.684 -1.62v-16.128q0 -1.512 1.44 -2.124 1.404 -0.612 2.484 0.504l5.184 5.184 12.78 -12.78 -12.78 -12.78 -5.184 5.184q-0.684 0.684 -1.62 0.684 -0.432 0 -0.864 -0.18 -1.44 -0.612 -1.44 -2.124v-16.128q0 -0.936 0.684 -1.62t1.62 -0.684h16.128q1.512 0 2.124 1.44 0.612 1.404 -0.504 2.484l-5.184 5.184 12.78 12.78 12.78 -12.78 -5.184 -5.184q-1.116 -1.08 -0.504 -2.484 0.612 -1.44 2.124 -1.44h16.128q0.936 0 1.62 0.684t0.684 1.62v16.128q0 1.512 -1.404 2.124 -0.468 0.18 -0.9 0.18 -0.936 0 -1.62 -0.684z','USERS':'M21.348 -32.183q-5.832 0.18 -9.54 4.608h-4.824q-2.952 0 -4.968 -1.458t-2.016 -4.266q0 -12.708 4.464 -12.708 0.216 0 1.566 0.756t3.51 1.53 4.284 0.774q2.412 0 4.788 -0.828 -0.18 1.332 -0.18 2.376 0 5.004 2.916 9.216zm38.556 22.932q0 4.32 -2.628 6.822t-6.984 2.502h-31.464q-4.356 0 -6.984 -2.502t-2.628 -6.822q0 -1.908 0.126 -3.726t0.504 -3.924 0.954 -3.906 1.548 -3.51 2.232 -2.916 3.078 -1.926 4.014 -0.72q0.36 0 1.548 0.774t2.628 1.728 3.852 1.728 4.86 0.774 4.86 -0.774 3.852 -1.728 2.628 -1.728 1.548 -0.774q2.196 0 4.014 0.72t3.078 1.926 2.232 2.916 1.548 3.51 0.954 3.906 0.504 3.924 0.126 3.726zm-36.864 -45.972q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516 2.7 -6.516 6.516 -2.7 6.516 2.7 2.7 6.516zm25.344 13.824q0 5.724 -4.05 9.774t-9.774 4.05 -9.774 -4.05 -4.05 -9.774 4.05 -9.774 9.774 -4.05 9.774 4.05 4.05 9.774zm20.736 8.1q0 2.808 -2.016 4.266t-4.968 1.458h-4.824q-3.708 -4.428 -9.54 -4.608 2.916 -4.212 2.916 -9.216 0 -1.044 -0.18 -2.376 2.376 0.828 4.788 0.828 2.124 0 4.284 -0.774t3.51 -1.53 1.566 -0.756q4.464 0 4.464 12.708zm-4.608 -21.924q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516 2.7 -6.516 6.516 -2.7 6.516 2.7 2.7 6.516z','LINK':'M52.416 -20.663q0 -1.44 -1.008 -2.448l-7.488 -7.488q-1.008 -1.008 -2.448 -1.008 -1.512 0 -2.592 1.152 0.108 0.108 0.684 0.666t0.774 0.774 0.54 0.684 0.468 0.918 0.126 0.99q0 1.44 -1.008 2.448t-2.448 1.008q-0.54 0 -0.99 -0.126t-0.918 -0.468 -0.684 -0.54 -0.774 -0.774 -0.666 -0.684q-1.188 1.116 -1.188 2.628 0 1.44 1.008 2.448l7.416 7.452q0.972 0.972 2.448 0.972 1.44 0 2.448 -0.936l5.292 -5.256q1.008 -1.008 1.008 -2.412zm-25.308 -25.38q0 -1.44 -1.008 -2.448l-7.416 -7.452q-1.008 -1.008 -2.448 -1.008 -1.404 0 -2.448 0.972l-5.292 5.256q-1.008 1.008 -1.008 2.412 0 1.44 1.008 2.448l7.488 7.488q0.972 0.972 2.448 0.972 1.512 0 2.592 -1.116 -0.108 -0.108 -0.684 -0.666t-0.774 -0.774 -0.54 -0.684 -0.468 -0.918 -0.126 -0.99q0 -1.44 1.008 -2.448t2.448 -1.008q0.54 0 0.99 0.126t0.918 0.468 0.684 0.54 0.774 0.774 0.666 0.684q1.188 -1.116 1.188 -2.628zm32.22 25.38q0 4.32 -3.06 7.308l-5.292 5.256q-2.988 2.988 -7.308 2.988 -4.356 0 -7.344 -3.06l-7.416 -7.452q-2.988 -2.988 -2.988 -7.308 0 -4.428 3.168 -7.524l-3.168 -3.168q-3.096 3.168 -7.488 3.168 -4.32 0 -7.344 -3.024l-7.488 -7.488q-3.024 -3.024 -3.024 -7.344t3.06 -7.308l5.292 -5.256q2.988 -2.988 7.308 -2.988 4.356 0 7.344 3.06l7.416 7.452q2.988 2.988 2.988 7.308 0 4.428 -3.168 7.524l3.168 3.168q3.096 -3.168 7.488 -3.168 4.32 0 7.344 3.024l7.488 7.488q3.024 3.024 3.024 7.344z','CLOUD':'M69.12 -22.967q0 5.724 -4.05 9.774t-9.774 4.05h-39.168q-6.66 0 -11.394 -4.734t-4.734 -11.394q0 -4.752 2.556 -8.694t6.732 -5.886q-0.072 -1.008 -0.072 -1.548 0 -7.632 5.4 -13.032t13.032 -5.4q5.688 0 10.314 3.168t6.75 8.28q2.52 -2.232 5.976 -2.232 3.816 0 6.516 2.7t2.7 6.516q0 2.7 -1.476 4.968 4.644 1.08 7.668 4.842t3.024 8.622z','FLASK':'M54.972 -12.311q2.016 3.204 0.774 5.49t-5.058 2.286h-41.472q-3.816 0 -5.058 -2.286t0.774 -5.49l18.108 -28.548v-14.364h-2.304q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h18.432q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62 -1.62 0.684h-2.304v14.364zm-28.044 -26.1l-9.792 15.444h25.632l-9.792 -15.444 -0.72 -1.116v-15.696000000000002h-4.608v15.696000000000002z','SCISSORS':'M34.56 -32.183q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62 -1.62 0.684 -1.62 -0.684 -0.684 -1.62 0.684 -1.62 1.62 -0.684zm10.8 2.304l18.252 14.328q1.008 0.72 0.9 2.016 -0.18 1.26 -1.26 1.836l-4.608 2.304q-0.468 0.252 -1.044 0.252 -0.612 0 -1.116 -0.288l-24.84 -13.932 -3.96 2.376q-0.288 0.144 -0.432 0.18 0.504 1.764 0.36 3.492 -0.252 2.772 -2.016 5.31t-4.752 4.446q-4.752 3.024 -9.972 3.024 -4.896 0 -7.992 -2.808 -3.24 -3.024 -2.844 -7.452 0.252 -2.736 2.016 -5.292t4.716 -4.464q4.752 -3.024 10.008 -3.024 2.988 0 5.436 1.116 0.324 -0.468 0.792 -0.792l4.392 -2.628 -4.392 -2.628q-0.468 -0.324 -0.792 -0.792 -2.448 1.116 -5.436 1.116 -5.256 0 -10.008 -3.024 -2.952 -1.908 -4.716 -4.464t-2.016 -5.292q-0.18 -2.124 0.558 -4.068t2.286 -3.348q3.06 -2.844 7.992 -2.844 5.22 0 9.972 3.024 2.988 1.872 4.752 4.428t2.016 5.328q0.144 1.728 -0.36 3.492 0.144 0.036 0.432 0.18l3.96 2.376 24.84 -13.932q0.504 -0.288 1.116 -0.288 0.576 0 1.044 0.252l4.608 2.304q1.08 0.576 1.26 1.836 0.108 1.296 -0.9 2.016zm-24.516 -9.36q1.656 -1.512 0.756 -3.888t-3.816 -4.212q-3.312 -2.124 -6.912 -2.124 -2.664 0 -4.068 1.296 -1.656 1.512 -0.756 3.888t3.816 4.212q3.312 2.124 6.912 2.124 2.664 0 4.068 -1.296zm-3.06 26.82q2.916 -1.836 3.816 -4.212t-0.756 -3.888q-1.404 -1.296 -4.068 -1.296 -3.6 0 -6.912 2.124 -2.916 1.836 -3.816 4.212t0.756 3.888q1.404 1.296 4.068 1.296 3.6 0 6.912 -2.124zm6.408 -22.068l3.456 2.088v-0.396q0 -1.296 1.188 -2.016l0.504 -0.288 -2.844 -1.692 -0.936 0.936q-0.108 0.108 -0.36 0.396t-0.432 0.432l-0.144 0.126 -0.108 0.09zm8.064 8.064l3.456 1.152 26.496 -20.736 -4.608 -2.304 -27.648 15.516v4.068l-5.76 3.456 0.324 0.288 0.252 0.216q0.144 0.144 0.396 0.432t0.396 0.432l0.936 0.936zm25.344 14.976l4.608 -2.304 -18.72 -14.688 -6.372 4.968q-0.072 0.108 -0.468 0.252z','FILES_O':'M61.056 -50.615q1.44 0 2.448 1.008t1.008 2.448v43.776q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-10.368h-19.584q-1.44 0 -2.448 -1.008t-1.008 -2.448v-24.192q0 -1.44 0.72 -3.168t1.728 -2.736l14.688 -14.688q1.008 -1.008 2.736 -1.728t3.168 -0.72h14.976q1.44 0 2.448 1.008t1.008 2.448v11.808q2.448 -1.44 4.608 -1.44h14.976zm-19.584 7.668l-10.764 10.764h10.764v-10.764zm-23.04 -13.824l-10.764 10.764h10.764v-10.764zm7.056 23.292l11.376 -11.376v-14.976h-13.824v14.976q0 1.44 -1.008 2.448t-2.448 1.008h-14.976v23.04h18.432v-9.216q0 -1.44 0.72 -3.168t1.728 -2.736zm34.416 28.944v-41.472h-13.824v14.976q0 1.44 -1.008 2.448t-2.448 1.008h-14.976v23.04h32.256z','PAPERCLIP':'M50.544 -14.579q0 4.212 -2.844 7.056t-7.056 2.844q-4.86 0 -8.46 -3.6l-27.972 -27.936q-4.068 -4.14 -4.068 -9.756 0 -5.724 3.96 -9.72t9.684 -3.996q5.688 0 9.828 4.068l21.78 21.816q0.36 0.36 0.36 0.792 0 0.576 -1.098 1.674t-1.674 1.098q-0.468 0 -0.828 -0.36l-21.816 -21.852q-2.844 -2.772 -6.516 -2.772 -3.816 0 -6.444 2.7t-2.628 6.516q0 3.78 2.736 6.516l27.936 27.972q2.268 2.268 5.22 2.268 2.304 0 3.816 -1.512t1.512 -3.816q0 -2.952 -2.268 -5.22l-20.916 -20.916q-0.936 -0.864 -2.16 -0.864 -1.044 0 -1.728 0.684t-0.684 1.728q0 1.152 0.9 2.124l14.76 14.76q0.36 0.36 0.36 0.792 0 0.576 -1.116 1.692t-1.692 1.116q-0.432 0 -0.792 -0.36l-14.76 -14.76q-2.268 -2.196 -2.268 -5.364 0 -2.952 2.052 -5.004t5.004 -2.052q3.168 0 5.364 2.268l20.916 20.916q3.6 3.528 3.6 8.46z','SAVE':'M13.824 -9.143h27.648v-13.824h-27.648v13.824zm32.256 0h4.608v-32.256q0 -0.504 -0.36 -1.386t-0.72 -1.242l-10.116 -10.116q-0.36 -0.36 -1.224 -0.72t-1.404 -0.36v14.976q0 1.44 -1.008 2.448t-2.448 1.008h-20.736q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-4.608v46.08h4.608v-14.976q0 -1.44 1.008 -2.448t2.448 -1.008h29.952q1.44 0 2.448 1.008t1.008 2.448v14.976zm-13.824 -33.408v-11.52q0 -0.468 -0.342 -0.81t-0.81 -0.342h-6.912q-0.468 0 -0.81 0.342t-0.342 0.81v11.52q0 0.468 0.342 0.81t0.81 0.342h6.912q0.468 0 0.81 -0.342t0.342 -0.81zm23.04 1.152v33.408q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-48.384q0 -1.44 1.008 -2.448t2.448 -1.008h33.408q1.44 0 3.168 0.72t2.736 1.728l10.08 10.08q1.008 1.008 1.728 2.736t0.72 3.168z','SQUARE':'M55.296 -49.463v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','REORDER':'M55.296 -16.055v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h50.688q0.936 0 1.62 0.684t0.684 1.62zm0 -18.432v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h50.688q0.936 0 1.62 0.684t0.684 1.62zm0 -18.432v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h50.688q0.936 0 1.62 0.684t0.684 1.62z','LIST_UL':'M13.824 -13.751q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896 2.016 -4.896 4.896 -2.016 4.896 2.016 2.016 4.896zm0 -18.432q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896 2.016 -4.896 4.896 -2.016 4.896 2.016 2.016 4.896zm50.688 14.976v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-43.776q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h43.776q0.468 0 0.81 0.342t0.342 0.81zm-50.688 -33.408q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896 2.016 -4.896 4.896 -2.016 4.896 2.016 2.016 4.896zm50.688 14.976v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-43.776q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h43.776q0.468 0 0.81 0.342t0.342 0.81zm0 -18.432v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-43.776q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h43.776q0.468 0 0.81 0.342t0.342 0.81z','LIST_OL':'M13.716 -6.119q0 2.88 -1.962 4.536t-4.878 1.656q-3.816 0 -6.192 -2.376l2.052 -3.168q1.764 1.62 3.816 1.62 1.044 0 1.818 -0.522t0.774 -1.53q0 -2.304 -3.78 -2.016l-0.936 -2.016q0.288 -0.36 1.17 -1.566t1.53 -1.944 1.332 -1.386v-0.036q-0.576 0 -1.746 0.036t-1.746 0.036v1.908h-3.816v-5.472h11.988v3.168l-3.42 4.14q1.836 0.432 2.916 1.764t1.08 3.168zm0.072 -22.572v5.724h-13.032q-0.216 -1.296 -0.216 -1.944 0 -1.836 0.846 -3.348t2.034 -2.448 2.376 -1.71 2.034 -1.566 0.846 -1.62q0 -0.9 -0.522 -1.386t-1.422 -0.486q-1.656 0 -2.916 2.088l-3.06 -2.124q0.864 -1.836 2.574 -2.862t3.798 -1.026q2.628 0 4.428 1.494t1.8 4.05q0 1.8 -1.224 3.294t-2.7 2.322 -2.718 1.818 -1.278 1.89h4.572v-2.16h3.78zm50.724 11.484v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-43.776q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h43.776q0.468 0 0.81 0.342t0.342 0.81zm-50.688 -32.364v3.564h-12.06v-3.564h3.852q0 -1.476 0.018 -4.392t0.018 -4.356v-0.432h-0.072q-0.288 0.612 -1.8 1.944l-2.556 -2.736 4.896 -4.572h3.816v14.544h3.888zm50.688 13.932v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-43.776q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h43.776q0.468 0 0.81 0.342t0.342 0.81zm0 -18.432v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-43.776q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h43.776q0.468 0 0.81 0.342t0.342 0.81z','STRIKETHROUGH':'M63.36 -32.183q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-62.208q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h62.208zm-45.972 -2.304q-1.008 -1.26 -1.836 -2.88 -1.728 -3.492 -1.728 -6.768 0 -6.516 4.824 -11.124 4.788 -4.572 14.148 -4.572 1.8 0 6.012 0.684 2.376 0.432 6.372 1.728 0.36 1.368 0.756 4.248 0.504 4.428 0.504 6.588 0 0.648 -0.18 1.62l-0.432 0.108 -3.024 -0.216 -0.504 -0.072q-1.8 -5.364 -3.708 -7.38 -3.168 -3.276 -7.56 -3.276 -4.104 0 -6.552 2.124 -2.412 2.088 -2.412 5.256 0 2.628 2.376 5.04t10.044 4.644q2.484 0.72 6.228 2.376 2.088 1.008 3.42 1.872h-26.748zm18.252 9.216h14.796q0.252 1.404 0.252 3.312 0 3.996 -1.476 7.632 -0.828 1.98 -2.556 3.744 -1.332 1.26 -3.924 2.916 -2.88 1.728 -5.508 2.376 -2.88 0.756 -7.308 0.756 -4.104 0 -7.02 -0.828l-5.04 -1.44q-2.052 -0.576 -2.592 -1.008 -0.288 -0.288 -0.288 -0.792v-0.468q0 -3.888 -0.072 -5.616 -0.036 -1.08 0 -2.448l0.072 -1.332v-1.584l3.672 -0.072q0.54 1.224 1.08 2.556t0.81 2.016 0.45 0.972q1.26 2.052 2.88 3.384 1.548 1.296 3.78 2.052 2.124 0.792 4.752 0.792 2.304 0 5.004 -0.972 2.772 -0.936 4.392 -3.096 1.692 -2.196 1.692 -4.644 0 -3.024 -2.916 -5.652 -1.224 -1.044 -4.932 -2.556z','UNDERLINE':'M1.728 -56.411q-1.332 -0.072 -1.62 -0.144l-0.108 -3.168q0.468 -0.036 1.44 -0.036 2.16 0 4.032 0.144 4.752 0.252 5.976 0.252 3.096 0 6.048 -0.108 4.176 -0.144 5.256 -0.18 2.016 0 3.096 -0.072l-0.036 0.504 0.072 2.304v0.324q-2.16 0.324 -4.464 0.324 -2.16 0 -2.844 0.9 -0.468 0.504 -0.468 4.752 0 0.468 0.018 1.17t0.018 0.918l0.036 8.244 0.504 10.08q0.216 4.464 1.836 7.272 1.26 2.124 3.456 3.312 3.168 1.692 6.372 1.692 3.744 0 6.876 -1.008 2.016 -0.648 3.564 -1.836 1.728 -1.296 2.34 -2.304 1.296 -2.016 1.908 -4.104 0.756 -2.628 0.756 -8.244 0 -2.844 -0.126 -4.608t-0.396 -4.41 -0.486 -5.742l-0.144 -2.124q-0.18 -2.412 -0.864 -3.168 -1.224 -1.26 -2.772 -1.224l-3.6 0.072 -0.504 -0.108 0.072 -3.096h3.024l7.38 0.36q2.736 0.108 7.056 -0.36l0.648 0.072q0.216 1.368 0.216 1.836 0 0.252 -0.144 1.116 -1.62 0.432 -3.024 0.468 -2.628 0.396 -2.844 0.612 -0.54 0.54 -0.54 1.476 0 0.252 0.054 0.972t0.054 1.116q0.288 0.684 0.792 14.256 0.216 7.02 -0.54 10.944 -0.54 2.736 -1.476 4.392 -1.368 2.34 -4.032 4.428 -2.7 2.052 -6.552 3.204 -3.924 1.188 -9.18 1.188 -6.012 0 -10.224 -1.656 -4.284 -1.692 -6.444 -4.392 -2.196 -2.736 -2.988 -7.02 -0.576 -2.88 -0.576 -8.532v-11.988q0 -6.768 -0.612 -7.668 -0.9 -1.296 -5.292 -1.404zm53.568 50.724v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-52.992q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h52.992q0.504 0 0.828 -0.324t0.324 -0.828z','TABLE':'M18.432 -14.903v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm0 -13.824v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm18.432 13.824v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm-18.432 -27.648v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm18.432 13.824v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm18.432 13.824v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm-18.432 -27.648v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm18.432 13.824v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm0 -13.824v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm4.608 -11.52v39.168q0 2.376 -1.692 4.068t-4.068 1.692h-48.384q-2.376 0 -4.068 -1.692t-1.692 -4.068v-39.168q0 -2.376 1.692 -4.068t4.068 -1.692h48.384q2.376 0 4.068 1.692t1.692 4.068z','MAGIC':'M42.84 -43.523l10.548 -10.548 -3.852 -3.852 -10.548 10.548zm16.092 -10.548q0 0.972 -0.648 1.62l-46.296 46.296q-0.648 0.648 -1.62 0.648t-1.62 -0.648l-7.128 -7.128q-0.648 -0.648 -0.648 -1.62t0.648 -1.62l46.296 -46.296q0.648 -0.648 1.62 -0.648t1.62 0.648l7.128 7.128q0.648 0.648 0.648 1.62zm-48.636 -6.84l3.528 1.08 -3.528 1.08 -1.08 3.528 -1.08 -3.528 -3.528 -1.08 3.528 -1.08 1.08 -3.528zm12.6 5.832l7.056 2.16 -7.056 2.16 -2.16 7.056 -2.16 -7.056 -7.056 -2.16 7.056 -2.16 2.16 -7.056zm33.48 17.208l3.528 1.08 -3.528 1.08 -1.08 3.528 -1.08 -3.528 -3.528 -1.08 3.528 -1.08 1.08 -3.528zm-23.04 -23.04l3.528 1.08 -3.528 1.08 -1.08 3.528 -1.08 -3.528 -3.528 -1.08 3.528 -1.08 1.08 -3.528z','TRUCK':'M23.04 -13.751q0 -1.872 -1.368 -3.24t-3.24 -1.368 -3.24 1.368 -1.368 3.24 1.368 3.24 3.24 1.368 3.24 -1.368 1.368 -3.24zm-13.824 -18.432h13.824v-9.216h-5.688q-0.468 0 -0.792 0.324l-7.02 7.02q-0.324 0.324 -0.324 0.792v1.08zm46.08 18.432q0 -1.872 -1.368 -3.24t-3.24 -1.368 -3.24 1.368 -1.368 3.24 1.368 3.24 3.24 1.368 3.24 -1.368 1.368 -3.24zm9.216 -39.168v36.864q0 0.54 -0.144 0.954t-0.486 0.666 -0.594 0.414 -0.846 0.216 -0.81 0.072 -0.918 0 -0.81 -0.018q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516h-13.824q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516h-2.304q-0.108 0 -0.81 0.018t-0.918 0 -0.81 -0.072 -0.846 -0.216 -0.594 -0.414 -0.486 -0.666 -0.144 -0.954q0 -0.936 0.684 -1.62t1.62 -0.684v-11.52q0 -0.288 -0.018 -1.26t0 -1.368 0.09 -1.242 0.234 -1.332 0.504 -1.098 0.81 -1.08l7.128 -7.128q0.684 -0.684 1.818 -1.152t2.106 -0.468h5.76v-6.912q0 -0.936 0.684 -1.62t1.62 -0.684h36.864q0.936 0 1.62 0.684t0.684 1.62z','PINTEREST':'M55.296 -32.183q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708q-3.996 0 -7.848 -1.152 2.124 -3.348 2.808 -5.904 0.324 -1.224 1.944 -7.596 0.72 1.404 2.628 2.43t4.104 1.026q4.356 0 7.776 -2.466t5.292 -6.786 1.872 -9.72q0 -4.104 -2.142 -7.704t-6.21 -5.868 -9.18 -2.268q-3.78 0 -7.056 1.044t-5.562 2.772 -3.924 3.978 -2.412 4.662 -0.774 4.824q0 3.744 1.44 6.588t4.212 3.996q1.08 0.432 1.368 -0.72 0.072 -0.252 0.288 -1.116t0.288 -1.08q0.216 -0.828 -0.396 -1.548 -1.836 -2.196 -1.836 -5.436 0 -5.436 3.762 -9.342t9.846 -3.906q5.436 0 8.478 2.952t3.042 7.668q0 6.12 -2.466 10.404t-6.318 4.284q-2.196 0 -3.528 -1.566t-0.828 -3.762q0.288 -1.26 0.954 -3.366t1.08 -3.708 0.414 -2.718q0 -1.8 -0.972 -2.988t-2.772 -1.188q-2.232 0 -3.78 2.052t-1.548 5.112q0 2.628 0.9 4.392l-3.564 15.048q-0.612 2.52 -0.468 6.372 -7.416 -3.276 -11.988 -10.116t-4.572 -15.228q0 -7.524 3.708 -13.878t10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','PINTEREST_SQUARE':'M44.928 -59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-26.1q3.06 -4.392 3.888 -7.56 0.324 -1.224 1.908 -7.524 0.756 1.404 2.646 2.412t4.05 1.008q6.516 0 10.638 -5.31t4.122 -13.446q0 -3.024 -1.26 -5.85t-3.474 -5.004 -5.49 -3.492 -7.092 -1.314q-3.744 0 -7.002 1.026t-5.508 2.754 -3.87 3.942 -2.394 4.608 -0.774 4.77q0 3.672 1.422 6.48t4.194 3.96q0.468 0.18 0.846 0t0.522 -0.684q0.36 -1.584 0.54 -2.196 0.216 -0.828 -0.396 -1.512 -1.8 -2.232 -1.8 -5.4 0 -5.4 3.726 -9.234t9.738 -3.834q5.364 0 8.37 2.916t3.006 7.56q0 6.048 -2.43 10.296t-6.246 4.248q-2.16 0 -3.492 -1.566t-0.828 -3.726q0.288 -1.224 0.954 -3.33t1.062 -3.672 0.396 -2.682q0 -1.764 -0.954 -2.934t-2.718 -1.17q-2.196 0 -3.726 2.034t-1.53 5.022q0 2.592 0.864 4.356l-3.528 14.904q-0.864 3.6 -0.252 9.144h-6.588q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56z','GOOGLE_PLUS_SQUARE':'M29.844 -20.591q0 2.736 -2.106 4.05t-5.022 1.314q-1.476 0 -2.898 -0.342t-2.718 -1.026 -2.088 -1.908 -0.792 -2.808q0 -1.656 0.9 -2.88t2.358 -1.854 2.952 -0.9 3.042 -0.27q0.72 0 1.116 0.072 0.072 0.036 0.828 0.594t0.936 0.684 0.828 0.648 0.882 0.792 0.684 0.81 0.612 0.936 0.324 0.954 0.162 1.134zm-2.664 -19.62q0 2.16 -1.188 3.582t-3.312 1.422q-1.908 0 -3.348 -1.53t-2.07 -3.474 -0.63 -3.816q0 -2.196 1.152 -3.744t3.312 -1.548q1.908 0 3.366 1.62t2.088 3.636 0.63 3.852zm3.816 -9.252l3.168 -2.304h-9.54q-3.06 0 -5.796 1.152t-4.59 3.528 -1.854 5.508q0 3.348 2.322 5.562t5.706 2.214q0.792 0 1.548 -0.108 -0.468 1.044 -0.468 1.944 0 1.584 1.44 3.384 -6.3 0.432 -9.252 2.268 -1.692 1.044 -2.718 2.628t-1.026 3.42q0 1.548 0.666 2.79t1.746 2.034 2.484 1.332 2.79 0.756 2.754 0.216q2.16 0 4.338 -0.558t4.086 -1.656 3.096 -2.97 1.188 -4.212q0 -1.764 -0.72 -3.222t-1.764 -2.394 -2.088 -1.71 -1.764 -1.584 -0.72 -1.602 0.558 -1.53 1.35 -1.422 1.584 -1.512 1.35 -2.142 0.558 -2.97q0 -2.16 -0.81 -3.582t-2.61 -3.258h2.988zm10.476 16.128h4.608v-2.304h-4.608v-4.608h-2.304v4.608h-4.608v2.304h4.608v5.76h2.304v-5.76zm13.824 -16.128v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','GOOGLE_PLUS':'M26.46 -35.783q0 1.296 1.152 2.538t2.79 2.448 3.258 2.646 2.772 3.744 1.152 5.112q0 3.24 -1.728 6.228 -2.592 4.392 -7.596 6.462t-10.728 2.07q-4.752 0 -8.874 -1.494t-6.174 -4.95q-1.332 -2.16 -1.332 -4.716 0 -2.916 1.602 -5.4t4.266 -4.14q4.716 -2.952 14.544 -3.6 -1.152 -1.512 -1.71 -2.664t-0.558 -2.628q0 -1.296 0.756 -3.06 -1.656 0.144 -2.448 0.144 -5.328 0 -8.982 -3.474t-3.654 -8.802q0 -2.952 1.296 -5.724t3.564 -4.716q2.772 -2.376 6.57 -3.528t7.83 -1.152h15.048l-4.968 3.168h-4.716q2.664 2.268 4.032 4.788t1.368 5.76q0 2.592 -0.882 4.662t-2.124 3.348 -2.502 2.34 -2.142 2.214 -0.882 2.376zm-5.256 -3.456q1.368 0 2.808 -0.594t2.376 -1.566q1.908 -2.052 1.908 -5.724 0 -2.088 -0.612 -4.5t-1.746 -4.662 -3.042 -3.726 -4.212 -1.476q-1.512 0 -2.97 0.702t-2.358 1.89q-1.692 2.124 -1.692 5.76 0 1.656 0.36 3.51t1.134 3.708 1.872 3.33 2.7 2.412 3.474 0.936zm0.072 31.428q2.088 0 4.014 -0.468t3.564 -1.404 2.628 -2.628 0.99 -3.924q0 -0.9 -0.252 -1.764t-0.522 -1.512 -0.972 -1.494 -1.062 -1.26 -1.386 -1.242 -1.314 -1.044 -1.494 -1.08 -1.314 -0.936q-0.576 -0.072 -1.728 -0.072 -1.908 0 -3.78 0.252t-3.87 0.9 -3.492 1.656 -2.466 2.682 -0.972 3.798q0 2.52 1.26 4.446t3.294 2.988 4.284 1.584 4.59 0.522zm29.16 -31.536h7.668v3.888h-7.668v7.884h-3.78v-7.884h-7.632v-3.888h7.632v-7.812h3.78v7.812z','MONEY':'M27.648 -22.967h13.824v-3.456h-4.608v-16.128h-4.104l-5.328 4.932 2.772 2.88q1.512 -1.332 1.98 -2.052h0.072v10.368h-4.608v3.456zm18.432 -9.216q0 2.52 -0.756 5.112t-2.142 4.824 -3.654 3.636 -4.968 1.404 -4.968 -1.404 -3.654 -3.636 -2.142 -4.824 -0.756 -5.112 0.756 -5.112 2.142 -4.824 3.654 -3.636 4.968 -1.404 4.968 1.404 3.654 3.636 2.142 4.824 0.756 5.112zm18.432 9.216v-18.432q-3.816 0 -6.516 -2.7t-2.7 -6.516h-41.472q0 3.816 -2.7 6.516t-6.516 2.7v18.432q3.816 0 6.516 2.7t2.7 6.516h41.472q0 -3.816 2.7 -6.516t6.516 -2.7zm4.608 -29.952v41.472q0 0.936 -0.684 1.62t-1.62 0.684h-64.512q-0.936 0 -1.62 -0.684t-0.684 -1.62v-41.472q0 -0.936 0.684 -1.62t1.62 -0.684h64.512q0.936 0 1.62 0.684t0.684 1.62z','CARET_DOWN':'M36.864 -39.095q0 0.936 -0.684 1.62l-16.128 16.128q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-16.128 -16.128q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684h32.256q0.936 0 1.62 0.684t0.684 1.62z','CARET_UP':'M36.864 -20.663q0 0.936 -0.684 1.62t-1.62 0.684h-32.256q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l16.128 -16.128q0.684 -0.684 1.62 -0.684t1.62 0.684l16.128 16.128q0.684 0.684 0.684 1.62z','CARET_LEFT':'M23.04 -48.311v32.256q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-16.128 -16.128q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l16.128 -16.128q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62z','CARET_RIGHT':'M20.736 -32.183q0 0.936 -0.684 1.62l-16.128 16.128q-0.684 0.684 -1.62 0.684t-1.62 -0.684 -0.684 -1.62v-32.256q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684l16.128 16.128q0.684 0.684 0.684 1.62z','COLUMNS':'M5.76 -9.143h21.888v-41.472h-23.04v40.32q0 0.468 0.342 0.81t0.81 0.342zm49.536 -1.152v-40.32h-23.04v41.472h21.888q0.468 0 0.81 -0.342t0.342 -0.81zm4.608 -43.776v43.776q0 2.376 -1.692 4.068t-4.068 1.692h-48.384q-2.376 0 -4.068 -1.692t-1.692 -4.068v-43.776q0 -2.376 1.692 -4.068t4.068 -1.692h48.384q2.376 0 4.068 1.692t1.692 4.068z','UNSORTED':'M36.864 -25.271q0 0.936 -0.684 1.62l-16.128 16.128q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-16.128 -16.128q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684h32.256q0.936 0 1.62 0.684t0.684 1.62zm0 -13.824q0 0.936 -0.684 1.62t-1.62 0.684h-32.256q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l16.128 -16.128q0.684 -0.684 1.62 -0.684t1.62 0.684l16.128 16.128q0.684 0.684 0.684 1.62z','SORT_DOWN':'M36.864 -25.271q0 0.936 -0.684 1.62l-16.128 16.128q-0.684 0.684 -1.62 0.684t-1.62 -0.684l-16.128 -16.128q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684h32.256q0.936 0 1.62 0.684t0.684 1.62z','SORT_UP':'M36.864 -39.095q0 0.936 -0.684 1.62t-1.62 0.684h-32.256q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l16.128 -16.128q0.684 -0.684 1.62 -0.684t1.62 0.684l16.128 16.128q0.684 0.684 0.684 1.62z','ENVELOPE':'M64.512 -38.879v28.584q0 2.376 -1.692 4.068t-4.068 1.692h-52.992q-2.376 0 -4.068 -1.692t-1.692 -4.068v-28.584q1.584 1.764 3.636 3.132 13.032 8.856 17.892 12.42 2.052 1.512 3.33 2.358t3.402 1.728 3.96 0.882h0.072q1.836 0 3.96 -0.882t3.402 -1.728 3.33 -2.358q6.12 -4.428 17.928 -12.42 2.052 -1.404 3.6 -3.132zm0 -10.584q0 2.844 -1.764 5.436t-4.392 4.428q-13.536 9.396 -16.848 11.7 -0.36 0.252 -1.53 1.098t-1.944 1.368 -1.872 1.17 -2.07 0.972 -1.8 0.324h-0.072q-0.828 0 -1.8 -0.324t-2.07 -0.972 -1.872 -1.17 -1.944 -1.368 -1.53 -1.098q-3.276 -2.304 -9.432 -6.57t-7.38 -5.13q-2.232 -1.512 -4.212 -4.158t-1.98 -4.914q0 -2.808 1.494 -4.68t4.266 -1.872h52.992q2.34 0 4.05 1.692t1.71 4.068z','LINKEDIN':'M12.564 -41.939v35.676h-11.88v-35.676h11.88zm0.756 -11.016q0.036 2.628 -1.818 4.392t-4.878 1.764h-0.072q-2.952 0 -4.752 -1.764t-1.8 -4.392q0 -2.664 1.854 -4.41t4.842 -1.746 4.788 1.746 1.836 4.41zm41.976 26.244v20.448h-11.844v-19.08q0 -3.78 -1.458 -5.922t-4.554 -2.142q-2.268 0 -3.798 1.242t-2.286 3.078q-0.396 1.08 -0.396 2.916v19.908h-11.844q0.072 -14.364 0.072 -23.292t-0.036 -10.656l-0.036 -1.728h11.844v5.184h-0.072q0.72 -1.152 1.476 -2.016t2.034 -1.872 3.132 -1.566 4.122 -0.558q6.156 0 9.9 4.086t3.744 11.97z','UNDO':'M55.296 -32.183q0 5.616 -2.196 10.728t-5.904 8.82 -8.82 5.904 -10.728 2.196q-6.192 0 -11.772 -2.61t-9.504 -7.362q-0.252 -0.36 -0.234 -0.81t0.306 -0.738l4.932 -4.968q0.36 -0.324 0.9 -0.324 0.576 0.072 0.828 0.432 2.628 3.42 6.444 5.292t8.1 1.872q3.744 0 7.146 -1.458t5.886 -3.942 3.942 -5.886 1.458 -7.146 -1.458 -7.146 -3.942 -5.886 -5.886 -3.942 -7.146 -1.458q-3.528 0 -6.768 1.278t-5.76 3.654l4.932 4.968q1.116 1.08 0.504 2.484 -0.612 1.44 -2.124 1.44h-16.128q-0.936 0 -1.62 -0.684t-0.684 -1.62v-16.128q0 -1.512 1.44 -2.124 1.404 -0.612 2.484 0.504l4.68 4.644q3.852 -3.636 8.802 -5.634t10.242 -1.998q5.616 0 10.728 2.196t8.82 5.904 5.904 8.82 2.196 10.728z','LEGAL':'M63.756 -9.143q0 1.908 -1.332 3.24l-3.852 3.888q-1.404 1.332 -3.276 1.332 -1.908 0 -3.24 -1.332l-13.068 -13.104q-1.368 -1.296 -1.368 -3.24 0 -1.908 1.548 -3.456l-9.216 -9.216 -4.536 4.536q-0.504 0.504 -1.224 0.504t-1.224 -0.504q0.072 0.072 0.45 0.432t0.45 0.468 0.36 0.414 0.36 0.486 0.216 0.486 0.198 0.594 0.054 0.648q0 1.368 -1.008 2.448 -0.108 0.108 -0.594 0.648t-0.684 0.738 -0.666 0.594 -0.792 0.558 -0.792 0.324 -0.936 0.162q-1.44 0 -2.448 -1.008l-14.688 -14.688q-1.008 -1.008 -1.008 -2.448 0 -0.468 0.162 -0.936t0.324 -0.792 0.558 -0.792 0.594 -0.666 0.738 -0.684 0.648 -0.594q1.08 -1.008 2.448 -1.008 0.36 0 0.648 0.054t0.594 0.198 0.486 0.216 0.486 0.36 0.414 0.36 0.468 0.45 0.432 0.45q-0.504 -0.504 -0.504 -1.224t0.504 -1.224l12.528 -12.528q0.504 -0.504 1.224 -0.504t1.224 0.504q-0.072 -0.072 -0.45 -0.432t-0.45 -0.468 -0.36 -0.414 -0.36 -0.486 -0.216 -0.486 -0.198 -0.594 -0.054 -0.648q0 -1.368 1.008 -2.448 0.108 -0.108 0.594 -0.648t0.684 -0.738 0.666 -0.594 0.792 -0.558 0.792 -0.324 0.936 -0.162q1.44 0 2.448 1.008l14.688 14.688q1.008 1.008 1.008 2.448 0 0.468 -0.162 0.936t-0.324 0.792 -0.558 0.792 -0.594 0.666 -0.738 0.684 -0.648 0.594q-1.08 1.008 -2.448 1.008 -0.36 0 -0.648 -0.054t-0.594 -0.198 -0.486 -0.216 -0.486 -0.36 -0.414 -0.36 -0.468 -0.45 -0.432 -0.45q0.504 0.504 0.504 1.224t-0.504 1.224l-4.536 4.536 9.216 9.216q1.548 -1.548 3.456 -1.548 1.872 0 3.276 1.332l13.068 13.068q1.332 1.404 1.332 3.276z','TACHOMETER':'M13.824 -22.967q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm6.912 -16.128q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm15.408 17.316l3.636 -13.752q0.216 -0.936 -0.27 -1.746t-1.386 -1.062 -1.728 0.234 -1.08 1.422l-3.636 13.752q-2.16 0.18 -3.852 1.566t-2.268 3.546q-0.72 2.772 0.72 5.256t4.212 3.204 5.256 -0.72 3.204 -4.212q0.576 -2.16 -0.216 -4.212t-2.592 -3.276zm23.76 -1.188q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm-23.04 -23.04q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm16.128 6.912q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm11.52 16.128q0 9.396 -5.076 17.388 -0.684 1.044 -1.944 1.044h-50.472q-1.26 0 -1.944 -1.044 -5.076 -7.956 -5.076 -17.388 0 -6.552 2.556 -12.528t6.876 -10.296 10.296 -6.876 12.528 -2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z','COMMENT_O':'M32.256 -50.615q-7.344 0 -13.734 2.502t-10.152 6.75 -3.762 9.18q0 4.032 2.574 7.686t7.254 6.318l3.132 1.8 -0.972 3.456q-0.864 3.276 -2.52 6.192 5.472 -2.268 9.9 -6.156l1.548 -1.368 2.052 0.216q2.484 0.288 4.68 0.288 7.344 0 13.734 -2.502t10.152 -6.75 3.762 -9.18 -3.762 -9.18 -10.152 -6.75 -13.734 -2.502zm32.256 18.432q0 6.264 -4.32 11.574t-11.736 8.388 -16.2 3.078q-2.52 0 -5.22 -0.288 -7.128 6.3 -16.56 8.712 -1.764 0.504 -4.104 0.792h-0.18q-0.54 0 -0.972 -0.378t-0.576 -0.99v-0.036q-0.108 -0.144 -0.018 -0.432t0.072 -0.36 0.162 -0.342l0.216 -0.324 0.252 -0.306 0.288 -0.324q0.252 -0.288 1.116 -1.242t1.242 -1.368 1.116 -1.422 1.17 -1.836 0.972 -2.124 0.936 -2.736q-5.652 -3.204 -8.91 -7.92t-3.258 -10.116q0 -6.264 4.32 -11.574t11.736 -8.388 16.2 -3.078 16.2 3.078 11.736 8.388 4.32 11.574z','COMMENTS_O':'M25.344 -50.615q-5.508 0 -10.296 1.872t-7.614 5.076 -2.826 6.876q0 2.952 1.908 5.688t5.364 4.752l3.492 2.016 -1.26 3.024q1.224 -0.72 2.232 -1.404l1.584 -1.116 1.908 0.36q2.808 0.504 5.508 0.504 5.508 0 10.296 -1.872t7.614 -5.076 2.826 -6.876 -2.826 -6.876 -7.614 -5.076 -10.296 -1.872zm0 -4.608q6.876 0 12.726 2.466t9.234 6.714 3.384 9.252 -3.384 9.252 -9.234 6.714 -12.726 2.466q-3.096 0 -6.336 -0.576 -4.464 3.168 -10.008 4.608 -1.296 0.324 -3.096 0.576h-0.108q-0.396 0 -0.738 -0.288t-0.414 -0.756q-0.036 -0.108 -0.036 -0.234t0.018 -0.234 0.072 -0.216l0.09 -0.18 0.126 -0.198 0.144 -0.18 0.162 -0.18 0.144 -0.162q0.18 -0.216 0.828 -0.9t0.936 -1.062 0.81 -1.044 0.9 -1.386 0.738 -1.584q-4.464 -2.592 -7.02 -6.372t-2.556 -8.064q0 -5.004 3.384 -9.252t9.234 -6.714 12.726 -2.466zm29.592 42.084q0.36 0.864 0.738 1.584t0.9 1.386 0.81 1.044 0.936 1.062 0.828 0.9l0.144 0.162 0.162 0.18 0.144 0.18 0.126 0.198 0.09 0.18 0.072 0.216 0.018 0.234 -0.036 0.234q-0.108 0.504 -0.468 0.792t-0.792 0.252q-1.8 -0.252 -3.096 -0.576 -5.544 -1.44 -10.008 -4.608 -3.24 0.576 -6.336 0.576 -9.756 0 -16.992 -4.752 2.088 0.144 3.168 0.144 5.796 0 11.124 -1.62t9.504 -4.644q4.5 -3.312 6.912 -7.632t2.412 -9.144q0 -2.772 -0.828 -5.472 4.644 2.556 7.344 6.408t2.7 8.28q0 4.32 -2.556 8.082t-7.02 6.354z','FLASH':'M31.86 -44.063q0.648 0.72 0.252 1.584l-19.44 41.652q-0.468 0.9 -1.512 0.9 -0.144 0 -0.504 -0.072 -0.612 -0.18 -0.918 -0.684t-0.162 -1.08l7.092 -29.088 -14.616 3.636q-0.144 0.036 -0.432 0.036 -0.648 0 -1.116 -0.396 -0.648 -0.54 -0.468 -1.404l7.236 -29.7q0.144 -0.504 0.576 -0.828t1.008 -0.324h11.808q0.684 0 1.152 0.45t0.468 1.062q0 0.288 -0.18 0.648l-6.156 16.668 14.256 -3.528q0.288 -0.072 0.432 -0.072 0.684 0 1.224 0.54z','SITEMAP':'M64.512 -19.511v11.52q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-11.52q0 -1.44 1.008 -2.448t2.448 -1.008h3.456v-6.912h-18.432v6.912h3.456q1.44 0 2.448 1.008t1.008 2.448v11.52q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-11.52q0 -1.44 1.008 -2.448t2.448 -1.008h3.456v-6.912h-18.432v6.912h3.456q1.44 0 2.448 1.008t1.008 2.448v11.52q0 1.44 -1.008 2.448t-2.448 1.008h-11.52q-1.44 0 -2.448 -1.008t-1.008 -2.448v-11.52q0 -1.44 1.008 -2.448t2.448 -1.008h3.456v-6.912q0 -1.872 1.368 -3.24t3.24 -1.368h18.432v-6.912h-3.456q-1.44 0 -2.448 -1.008t-1.008 -2.448v-11.52q0 -1.44 1.008 -2.448t2.448 -1.008h11.52q1.44 0 2.448 1.008t1.008 2.448v11.52q0 1.44 -1.008 2.448t-2.448 1.008h-3.456v6.912h18.432q1.872 0 3.24 1.368t1.368 3.24v6.912h3.456q1.44 0 2.448 1.008t1.008 2.448z','UMBRELLA':'M32.256 -34.631v20.88q0 3.744 -2.736 6.48t-6.48 2.736 -6.48 -2.736 -2.736 -6.48q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62q0 1.8 1.404 3.204t3.204 1.404 3.204 -1.404 1.404 -3.204v-20.88q1.188 -0.396 2.304 -0.396t2.304 0.396zm27.648 0.972q0 0.468 -0.342 0.81t-0.81 0.342q-0.396 0 -0.828 -0.36 -1.764 -1.656 -3.348 -2.484t-3.672 -0.828q-2.448 0 -4.608 1.332t-3.708 3.492q-0.252 0.36 -0.63 1.008t-0.522 0.864q-0.396 0.612 -1.008 0.612 -0.648 0 -1.044 -0.612 -0.144 -0.216 -0.522 -0.864t-0.63 -1.008q-1.548 -2.16 -3.69 -3.492t-4.59 -1.332 -4.59 1.332 -3.69 3.492q-0.252 0.36 -0.63 1.008t-0.522 0.864q-0.396 0.612 -1.044 0.612 -0.612 0 -1.008 -0.612 -0.144 -0.216 -0.522 -0.864t-0.63 -1.008q-1.548 -2.16 -3.708 -3.492t-4.608 -1.332q-2.088 0 -3.672 0.828t-3.348 2.484q-0.432 0.36 -0.828 0.36 -0.468 0 -0.81 -0.342t-0.342 -0.81q0 -0.18 0.036 -0.252 1.62 -6.588 6.21 -11.502t10.728 -7.362 12.978 -2.448q5.04 0 9.882 1.44t8.874 4.086 7.002 6.732 4.158 9.054q0.036 0.072 0.036 0.252zm-27.648 -26.172v3.528q-1.512 -0.072 -2.304 -0.072t-2.304 0.072v-3.528q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62z','PASTE':'M27.648 -4.535h32.256v-23.04h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-13.824v41.472zm9.216 -51.84v-2.304q0 -0.468 -0.342 -0.81t-0.81 -0.342h-25.344q-0.468 0 -0.81 0.342t-0.342 0.81v2.304q0 0.468 0.342 0.81t0.81 0.342h25.344q0.468 0 0.81 -0.342t0.342 -0.81zm9.216 24.192h10.764l-10.764 -10.764v10.764zm18.432 4.608v24.192q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-5.76h-19.584q-1.44 0 -2.448 -1.008t-1.008 -2.448v-48.384q0 -1.44 1.008 -2.448t2.448 -1.008h39.168q1.44 0 2.448 1.008t1.008 2.448v11.808q0.756 0.468 1.296 1.008l14.688 14.688q1.008 1.008 1.728 2.736t0.72 3.168z','LIGHTBULB_O':'M26.496 -43.703q0 0.468 -0.342 0.81t-0.81 0.342 -0.81 -0.342 -0.342 -0.81q0 -1.656 -1.944 -2.556t-3.816 -0.9q-0.468 0 -0.81 -0.342t-0.342 -0.81 0.342 -0.81 0.81 -0.342q1.8 0 3.582 0.576t3.132 1.944 1.35 3.24zm5.76 0q0 -2.592 -1.242 -4.824t-3.24 -3.654 -4.428 -2.232 -4.914 -0.81 -4.914 0.81 -4.428 2.232 -3.24 3.654 -1.242 4.824q0 3.636 2.448 6.48 0.36 0.396 1.098 1.188t1.098 1.188q4.608 5.508 5.076 10.728h8.208q0.468 -5.22 5.076 -10.728 0.36 -0.396 1.098 -1.188t1.098 -1.188q2.448 -2.844 2.448 -6.48zm4.608 0q0 5.58 -3.708 9.648 -1.62 1.764 -2.682 3.132t-2.142 3.438 -1.224 3.87q1.692 1.008 1.692 2.952 0 1.332 -0.9 2.304 0.9 0.972 0.9 2.304 0 1.872 -1.62 2.916 0.468 0.828 0.468 1.692 0 1.656 -1.134 2.556t-2.79 0.9q-0.72 1.584 -2.16 2.52t-3.132 0.936 -3.132 -0.936 -2.16 -2.52q-1.656 0 -2.79 -0.9t-1.134 -2.556q0 -0.864 0.468 -1.692 -1.62 -1.044 -1.62 -2.916 0 -1.332 0.9 -2.304 -0.9 -0.972 -0.9 -2.304 0 -1.944 1.692 -2.952 -0.144 -1.8 -1.224 -3.87t-2.142 -3.438 -2.682 -3.132q-3.708 -4.068 -3.708 -9.648 0 -3.564 1.602 -6.642t4.212 -5.112 5.904 -3.204 6.714 -1.17 6.714 1.17 5.904 3.204 4.212 5.112 1.602 6.642z','EXCHANGE':'M64.512 -21.815v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-49.536v6.912q0 0.468 -0.342 0.81t-0.81 0.342q-0.432 0 -0.864 -0.36l-11.484 -11.52q-0.324 -0.324 -0.324 -0.792 0 -0.504 0.324 -0.828l11.52 -11.52q0.324 -0.324 0.828 -0.324 0.468 0 0.81 0.342t0.342 0.81v6.912h49.536q0.468 0 0.81 0.342t0.342 0.81zm0 -19.584q0 0.504 -0.324 0.828l-11.52 11.52q-0.324 0.324 -0.828 0.324 -0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912h-49.536q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h49.536v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324q0.432 0 0.864 0.36l11.484 11.484q0.324 0.324 0.324 0.828z','CLOUD_DOWNLOAD':'M46.08 -31.031q0 -0.504 -0.324 -0.828t-0.828 -0.324h-8.064v-12.672q0 -0.468 -0.342 -0.81t-0.81 -0.342h-6.912q-0.468 0 -0.81 0.342t-0.342 0.81v12.672h-8.064q-0.468 0 -0.81 0.342t-0.342 0.81q0 0.504 0.324 0.828l12.672 12.672q0.324 0.324 0.828 0.324t0.828 -0.324l12.636 -12.636q0.36 -0.432 0.36 -0.864zm23.04 8.064q0 5.724 -4.05 9.774t-9.774 4.05h-39.168q-6.66 0 -11.394 -4.734t-4.734 -11.394q0 -4.68 2.52 -8.64t6.768 -5.94q-0.072 -1.08 -0.072 -1.548 0 -7.632 5.4 -13.032t13.032 -5.4q5.616 0 10.278 3.132t6.786 8.316q2.556 -2.232 5.976 -2.232 3.816 0 6.516 2.7t2.7 6.516q0 2.736 -1.476 4.968 4.68 1.116 7.686 4.878t3.006 8.586z','CLOUD_UPLOAD':'M46.08 -33.335q0 -0.504 -0.324 -0.828l-12.672 -12.672q-0.324 -0.324 -0.828 -0.324t-0.828 0.324l-12.636 12.636q-0.36 0.432 -0.36 0.864 0 0.504 0.324 0.828t0.828 0.324h8.064v12.672q0 0.468 0.342 0.81t0.81 0.342h6.912q0.468 0 0.81 -0.342t0.342 -0.81v-12.672h8.064q0.468 0 0.81 -0.342t0.342 -0.81zm23.04 10.368q0 5.724 -4.05 9.774t-9.774 4.05h-39.168q-6.66 0 -11.394 -4.734t-4.734 -11.394q0 -4.68 2.52 -8.64t6.768 -5.94q-0.072 -1.08 -0.072 -1.548 0 -7.632 5.4 -13.032t13.032 -5.4q5.616 0 10.278 3.132t6.786 8.316q2.556 -2.232 5.976 -2.232 3.816 0 6.516 2.7t2.7 6.516q0 2.736 -1.476 4.968 4.68 1.116 7.686 4.878t3.006 8.586z','USER_MD':'M13.824 -16.055q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684 -0.684 -1.62 0.684 -1.62 1.62 -0.684 1.62 0.684 0.684 1.62zm36.864 2.196q0 4.356 -2.628 6.84t-6.984 2.484h-31.464q-4.356 0 -6.984 -2.484t-2.628 -6.84q0 -2.448 0.198 -4.716t0.864 -4.968 1.71 -4.77 2.916 -3.708 4.32 -2.178q-0.792 1.872 -0.792 4.32v7.308q-2.088 0.72 -3.348 2.52t-1.26 3.996q0 2.88 2.016 4.896t4.896 2.016 4.896 -2.016 2.016 -4.896q0 -2.196 -1.278 -3.996t-3.33 -2.52v-7.308q0 -2.232 0.9 -3.348 4.752 3.744 10.62 3.744t10.62 -3.744q0.9 1.116 0.9 3.348v2.304q-3.816 0 -6.516 2.7t-2.7 6.516v3.204q-1.152 1.044 -1.152 2.556 0 1.44 1.008 2.448t2.448 1.008 2.448 -1.008 1.008 -2.448q0 -1.512 -1.152 -2.556v-3.204q0 -1.872 1.368 -3.24t3.24 -1.368 3.24 1.368 1.368 3.24v3.204q-1.152 1.044 -1.152 2.556 0 1.44 1.008 2.448t2.448 1.008 2.448 -1.008 1.008 -2.448q0 -1.512 -1.152 -2.556v-3.204q0 -2.448 -1.242 -4.59t-3.366 -3.366q0 -0.36 0.018 -1.53t0 -1.728 -0.09 -1.494 -0.252 -1.692 -0.468 -1.44q2.448 0.54 4.32 2.178t2.916 3.708 1.71 4.77 0.864 4.968 0.198 4.716zm-11.52 -32.148q0 5.724 -4.05 9.774t-9.774 4.05 -9.774 -4.05 -4.05 -9.774 4.05 -9.774 9.774 -4.05 9.774 4.05 4.05 9.774z','STETHOSCOPE':'M46.08 -39.095q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm4.608 0q0 2.232 -1.278 3.996t-3.33 2.52v14.22q0 5.724 -4.734 9.774t-11.394 4.05 -11.394 -4.05 -4.734 -9.774v-4.752q-5.904 -0.72 -9.864 -4.608t-3.96 -9.072v-18.432q0 -0.936 0.684 -1.62t1.62 -0.684q0.216 0 0.576 0.072 0.612 -1.08 1.692 -1.728t2.34 -0.648q1.908 0 3.258 1.35t1.35 3.258 -1.35 3.258 -3.258 1.35q-1.188 0 -2.304 -0.648v14.472q0 3.816 3.384 6.516t8.136 2.7 8.136 -2.7 3.384 -6.516v-14.472q-1.116 0.648 -2.304 0.648 -1.908 0 -3.258 -1.35t-1.35 -3.258 1.35 -3.258 3.258 -1.35q1.26 0 2.34 0.648t1.692 1.728q0.36 -0.072 0.576 -0.072 0.936 0 1.62 0.684t0.684 1.62v18.432q0 5.184 -3.96 9.072t-9.864 4.608v4.752q0 3.816 3.384 6.516t8.136 2.7 8.136 -2.7 3.384 -6.516v-14.22q-2.052 -0.756 -3.33 -2.52t-1.278 -3.996q0 -2.88 2.016 -4.896t4.896 -2.016 4.896 2.016 2.016 4.896z','SUITCASE':'M23.04 -50.615h18.432v-4.608h-18.432v4.608zm-12.672 0v46.08h-2.304q-3.312 0 -5.688 -2.376t-2.376 -5.688v-29.952q0 -3.312 2.376 -5.688t5.688 -2.376h2.304zm40.32 0v46.08h-36.864v-46.08h4.608v-5.76q0 -1.44 1.008 -2.448t2.448 -1.008h20.736q1.44 0 2.448 1.008t1.008 2.448v5.76h4.608zm13.824 8.064v29.952q0 3.312 -2.376 5.688t-5.688 2.376h-2.304v-46.08h2.304q3.312 0 5.688 2.376t2.376 5.688z','BELL':'M32.832 -3.383q0 -0.576 -0.576 -0.576 -2.124 0 -3.654 -1.53t-1.53 -3.654q0 -0.576 -0.576 -0.576t-0.576 0.576q0 2.628 1.854 4.482t4.482 1.854q0.576 0 0.576 -0.576zm29.376 -10.368q0 1.872 -1.368 3.24t-3.24 1.368h-16.128q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516h-16.128q-1.872 0 -3.24 -1.368t-1.368 -3.24q1.8 -1.512 3.276 -3.168t3.06 -4.302 2.682 -5.706 1.8 -7.416 0.702 -9.36q0 -5.472 4.212 -10.17t11.052 -5.706q-0.288 -0.684 -0.288 -1.404 0 -1.44 1.008 -2.448t2.448 -1.008 2.448 1.008 1.008 2.448q0 0.72 -0.288 1.404 6.84 1.008 11.052 5.706t4.212 10.17q0 5.004 0.702 9.36t1.8 7.416 2.682 5.706 3.06 4.302 3.276 3.168z','COFFEE':'M59.904 -41.399q0 -2.88 -2.016 -4.896t-4.896 -2.016h-2.304v13.824h2.304q2.88 0 4.896 -2.016t2.016 -4.896zm-59.904 27.648h64.512q0 3.816 -2.7 6.516t-6.516 2.7h-46.08q-3.816 0 -6.516 -2.7t-2.7 -6.516zm66.816 -27.648q0 5.724 -4.05 9.774t-9.774 4.05h-2.304v1.152q0 3.312 -2.376 5.688t-5.688 2.376h-25.344q-3.312 0 -5.688 -2.376t-2.376 -5.688v-26.496q0 -0.936 0.684 -1.62t1.62 -0.684h41.472q5.724 0 9.774 4.05t4.05 9.774z','CUTLERY':'M23.04 -62.135v23.04q0 2.196 -1.278 3.996t-3.33 2.52v28.044q0 1.872 -1.368 3.24t-3.24 1.368h-4.608q-1.872 0 -3.24 -1.368t-1.368 -3.24v-28.044q-2.052 -0.72 -3.33 -2.52t-1.278 -3.996v-23.04q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62v14.976q0 0.936 0.684 1.62t1.62 0.684 1.62 -0.684 0.684 -1.62v-14.976q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62v14.976q0 0.936 0.684 1.62t1.62 0.684 1.62 -0.684 0.684 -1.62v-14.976q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62zm27.648 0v57.6q0 1.872 -1.368 3.24t-3.24 1.368h-4.608q-1.872 0 -3.24 -1.368t-1.368 -3.24v-18.432h-8.064q-0.468 0 -0.81 -0.342t-0.342 -0.81v-28.8q0 -4.752 3.384 -8.136t8.136 -3.384h9.216q0.936 0 1.62 0.684t0.684 1.62z','FILE_TEXT_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-36.864 -31.104q0 -0.504 0.324 -0.828t0.828 -0.324h25.344q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-25.344q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304zm26.496 8.064q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-25.344q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h25.344zm0 9.216q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-25.344q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h25.344z','BUILDING_O':'M13.824 -17.207v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm0 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm9.216 0v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm27.648 18.432v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm27.648 18.432v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm27.648 18.432v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm18.432 9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm9.216 0v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 49.536h13.824v-55.296h-41.472v55.296h13.824v-8.064q0 -0.468 0.342 -0.81t0.81 -0.342h11.52q0.468 0 0.81 0.342t0.342 0.81v8.064zm18.432 -57.6v59.904q0 0.936 -0.684 1.62t-1.62 0.684h-46.08q-0.936 0 -1.62 -0.684t-0.684 -1.62v-59.904q0 -0.936 0.684 -1.62t1.62 -0.684h46.08q0.936 0 1.62 0.684t0.684 1.62z','HOSPITAL_O':'M13.824 -17.207v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm0 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm9.216 0v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm27.648 18.432v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm18.432 9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 -9.216v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm9.216 0v2.304q0 0.468 -0.342 0.81t-0.81 0.342h-2.304q-0.468 0 -0.81 -0.342t-0.342 -0.81v-2.304q0 -0.468 0.342 -0.81t0.81 -0.342h2.304q0.468 0 0.81 0.342t0.342 0.81zm-9.216 31.104h13.824v-41.472h-9.216v1.152q0 1.44 -1.008 2.448t-2.448 1.008h-16.128q-1.44 0 -2.448 -1.008t-1.008 -2.448v-1.152h-9.216v41.472h13.824v-8.064q0 -0.468 0.342 -0.81t0.81 -0.342h11.52q0.468 0 0.81 0.342t0.342 0.81v8.064zm0 -42.624v-11.52q0 -0.468 -0.342 -0.81t-0.81 -0.342h-2.304q-0.468 0 -0.81 0.342t-0.342 0.81v3.456h-4.608v-3.456q0 -0.468 -0.342 -0.81t-0.81 -0.342h-2.304q-0.468 0 -0.81 0.342t-0.342 0.81v11.52q0 0.468 0.342 0.81t0.81 0.342h2.304q0.468 0 0.81 -0.342t0.342 -0.81v-3.456h4.608v3.456q0 0.468 0.342 0.81t0.81 0.342h2.304q0.468 0 0.81 -0.342t0.342 -0.81zm18.432 -1.152v46.08q0 0.936 -0.684 1.62t-1.62 0.684h-46.08q-0.936 0 -1.62 -0.684t-0.684 -1.62v-46.08q0 -0.936 0.684 -1.62t1.62 -0.684h11.52v-10.368q0 -1.44 1.008 -2.448t2.448 -1.008h16.128q1.44 0 2.448 1.008t1.008 2.448v10.368h11.52q0.936 0 1.62 0.684t0.684 1.62z','AMBULANCE':'M23.04 -13.751q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm-13.824 -18.432h13.824v-9.216h-5.688q-0.504 0.072 -0.792 0.324l-7.02 7.02q-0.252 0.432 -0.324 0.792v1.08zm46.08 18.432q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm4.608 -24.192v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-8.064v-8.064q0 -0.504 -0.324 -0.828t-0.828 -0.324h-6.912q-0.504 0 -0.828 0.324t-0.324 0.828v8.064h-8.064q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h8.064v8.064q0 0.504 0.324 0.828t0.828 0.324h6.912q0.504 0 0.828 -0.324t0.324 -0.828v-8.064h8.064q0.504 0 0.828 -0.324t0.324 -0.828zm9.216 -19.584v41.472q0 0.936 -0.684 1.62t-1.62 0.684h-6.912q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516h-13.824q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516h-4.608q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684v-14.976q0 -0.936 0.468 -2.088t1.152 -1.836l7.128 -7.128q0.684 -0.684 1.836 -1.152t2.088 -0.468h5.76v-11.52q0 -0.936 0.684 -1.62t1.62 -0.684h41.472q0.936 0 1.62 0.684t0.684 1.62z','MEDKIT':'M46.08 -24.119v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-8.064v-8.064q0 -0.504 -0.324 -0.828t-0.828 -0.324h-6.912q-0.504 0 -0.828 0.324t-0.324 0.828v8.064h-8.064q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h8.064v8.064q0 0.504 0.324 0.828t0.828 0.324h6.912q0.504 0 0.828 -0.324t0.324 -0.828v-8.064h8.064q0.504 0 0.828 -0.324t0.324 -0.828zm-23.04 -26.496h18.432v-4.608h-18.432v4.608zm-13.824 0v46.08h-1.152q-3.312 0 -5.688 -2.376t-2.376 -5.688v-29.952q0 -3.312 2.376 -5.688t5.688 -2.376h1.152zm42.624 0v46.08h-39.168v-46.08h5.76v-5.76q0 -1.44 1.008 -2.448t2.448 -1.008h20.736q1.44 0 2.448 1.008t1.008 2.448v5.76h5.76zm12.672 8.064v29.952q0 3.312 -2.376 5.688t-5.688 2.376h-1.152v-46.08h1.152q3.312 0 5.688 2.376t2.376 5.688z','FIGHTER_JET':'M69.12 -29.879q-0.036 1.152 -10.368 3.456l-12.672 1.152 -8.064 2.304h-2.304l-10.548 12.672h2.484q0.936 0 1.62 0.162t0.684 0.414 -0.684 0.414 -1.62 0.162h-11.52v-1.152h2.304v-14.976h-5.76l-6.912 8.064h-3.456l-1.152 -1.152v-6.912h1.152v-1.152h4.608v-0.288l-6.912 -0.864v-4.608l6.912 -0.864v-0.288h-4.608v-1.152h-1.152v-6.912l1.152 -1.152h3.456l6.912 8.064h5.76v-14.976h-2.304v-1.152h11.52q0.936 0 1.62 0.162t0.684 0.414 -0.684 0.414 -1.62 0.162h-2.484l10.548 12.672h2.304l8.064 2.304 12.672 1.152q9.396 2.088 10.332 3.348z','BEER':'M23.04 -32.183v-13.824h-9.216v9.216q0 1.908 1.35 3.258t3.258 1.35h4.608zm36.864 16.128v6.912h-41.472v-6.912l4.608 -6.912h-4.608q-5.724 0 -9.774 -4.05t-4.05 -9.774v-11.52l-2.304 -2.304 1.152 -4.608h17.28l1.152 -4.608h34.56l1.152 6.912 -2.304 1.152v28.8z','H_SQUARE':'M46.08 -16.055v-32.256q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v11.52h-18.432v-11.52q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v32.256q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62v-11.52h18.432v11.52q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62zm9.216 -33.408v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','PLUS_SQUARE':'M46.08 -29.879v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-11.52v-11.52q0 -0.936 -0.684 -1.62t-1.62 -0.684h-4.608q-0.936 0 -1.62 0.684t-0.684 1.62v11.52h-11.52q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h11.52v11.52q0 0.936 0.684 1.62t1.62 0.684h4.608q0.936 0 1.62 -0.684t0.684 -1.62v-11.52h11.52q0.936 0 1.62 -0.684t0.684 -1.62zm9.216 -19.584v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','ANGLE_DOUBLE_LEFT':'M22.572 -14.903q0 0.468 -0.36 0.828l-1.8 1.8q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-16.776 -16.776q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l16.776 -16.776q0.36 -0.36 0.828 -0.36t0.828 0.36l1.8 1.8q0.36 0.36 0.36 0.828t-0.36 0.828l-14.148 14.148 14.148 14.148q0.36 0.36 0.36 0.828zm13.824 0q0 0.468 -0.36 0.828l-1.8 1.8q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-16.776 -16.776q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l16.776 -16.776q0.36 -0.36 0.828 -0.36t0.828 0.36l1.8 1.8q0.36 0.36 0.36 0.828t-0.36 0.828l-14.148 14.148 14.148 14.148q0.36 0.36 0.36 0.828z','ANGLE_DOUBLE_RIGHT':'M21.42 -29.879q0 0.468 -0.36 0.828l-16.776 16.776q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-1.8 -1.8q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l14.148 -14.148 -14.148 -14.148q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l1.8 -1.8q0.36 -0.36 0.828 -0.36t0.828 0.36l16.776 16.776q0.36 0.36 0.36 0.828zm13.824 0q0 0.468 -0.36 0.828l-16.776 16.776q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-1.8 -1.8q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l14.148 -14.148 -14.148 -14.148q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l1.8 -1.8q0.36 -0.36 0.828 -0.36t0.828 0.36l16.776 16.776q0.36 0.36 0.36 0.828z','ANGLE_DOUBLE_UP':'M38.7 -17.207q0 0.468 -0.36 0.828l-1.8 1.8q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-14.148 -14.148 -14.148 14.148q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-1.8 -1.8q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l16.776 -16.776q0.36 -0.36 0.828 -0.36t0.828 0.36l16.776 16.776q0.36 0.36 0.36 0.828zm0 -13.824q0 0.468 -0.36 0.828l-1.8 1.8q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-14.148 -14.148 -14.148 14.148q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-1.8 -1.8q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l16.776 -16.776q0.36 -0.36 0.828 -0.36t0.828 0.36l16.776 16.776q0.36 0.36 0.36 0.828z','ANGLE_DOUBLE_DOWN':'M38.7 -33.335q0 0.468 -0.36 0.828l-16.776 16.776q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-16.776 -16.776q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l1.8 -1.8q0.36 -0.36 0.828 -0.36t0.828 0.36l14.148 14.148 14.148 -14.148q0.36 -0.36 0.828 -0.36t0.828 0.36l1.8 1.8q0.36 0.36 0.36 0.828zm0 -13.824q0 0.468 -0.36 0.828l-16.776 16.776q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-16.776 -16.776q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l1.8 -1.8q0.36 -0.36 0.828 -0.36t0.828 0.36l14.148 14.148 14.148 -14.148q0.36 -0.36 0.828 -0.36t0.828 0.36l1.8 1.8q0.36 0.36 0.36 0.828z','ANGLE_LEFT':'M22.572 -44.855q0 0.468 -0.36 0.828l-14.148 14.148 14.148 14.148q0.36 0.36 0.36 0.828t-0.36 0.828l-1.8 1.8q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-16.776 -16.776q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l16.776 -16.776q0.36 -0.36 0.828 -0.36t0.828 0.36l1.8 1.8q0.36 0.36 0.36 0.828z','ANGLE_RIGHT':'M21.42 -29.879q0 0.468 -0.36 0.828l-16.776 16.776q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-1.8 -1.8q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l14.148 -14.148 -14.148 -14.148q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l1.8 -1.8q0.36 -0.36 0.828 -0.36t0.828 0.36l16.776 16.776q0.36 0.36 0.36 0.828z','ANGLE_UP':'M38.7 -21.815q0 0.468 -0.36 0.828l-1.8 1.8q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-14.148 -14.148 -14.148 14.148q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-1.8 -1.8q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l16.776 -16.776q0.36 -0.36 0.828 -0.36t0.828 0.36l16.776 16.776q0.36 0.36 0.36 0.828z','ANGLE_DOWN':'M38.7 -37.943q0 0.468 -0.36 0.828l-16.776 16.776q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-16.776 -16.776q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l1.8 -1.8q0.36 -0.36 0.828 -0.36t0.828 0.36l14.148 14.148 14.148 -14.148q0.36 -0.36 0.828 -0.36t0.828 0.36l1.8 1.8q0.36 0.36 0.36 0.828z','DESKTOP':'M64.512 -28.727v-29.952q0 -0.468 -0.342 -0.81t-0.81 -0.342h-57.6q-0.468 0 -0.81 0.342t-0.342 0.81v29.952q0 0.468 0.342 0.81t0.81 0.342h57.6q0.468 0 0.81 -0.342t0.342 -0.81zm4.608 -29.952v39.168q0 2.376 -1.692 4.068t-4.068 1.692h-19.584q0 1.332 0.576 2.79t1.152 2.556 0.576 1.566q0 0.936 -0.684 1.62t-1.62 0.684h-18.432q-0.936 0 -1.62 -0.684t-0.684 -1.62q0 -0.504 0.576 -1.584t1.152 -2.52 0.576 -2.808h-19.584q-2.376 0 -4.068 -1.692t-1.692 -4.068v-39.168q0 -2.376 1.692 -4.068t4.068 -1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z','LAPTOP':'M14.976 -18.359q-2.376 0 -4.068 -1.692t-1.692 -4.068v-25.344q0 -2.376 1.692 -4.068t4.068 -1.692h39.168q2.376 0 4.068 1.692t1.692 4.068v25.344q0 2.376 -1.692 4.068t-4.068 1.692h-39.168zm-1.152 -31.104v25.344q0 0.468 0.342 0.81t0.81 0.342h39.168q0.468 0 0.81 -0.342t0.342 -0.81v-25.344q0 -0.468 -0.342 -0.81t-0.81 -0.342h-39.168q-0.468 0 -0.81 0.342t-0.342 0.81zm49.536 33.408h5.76v3.456q0 1.44 -1.692 2.448t-4.068 1.008h-57.6q-2.376 0 -4.068 -1.008t-1.692 -2.448v-3.456h63.36zm-25.92 3.456q0.576 0 0.576 -0.576t-0.576 -0.576h-5.76q-0.576 0 -0.576 0.576t0.576 0.576h5.76z','TABLET':'M23.04 -13.751q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm13.824 -5.76v-34.56q0 -0.468 -0.342 -0.81t-0.81 -0.342h-29.952q-0.468 0 -0.81 0.342t-0.342 0.81v34.56q0 0.468 0.342 0.81t0.81 0.342h29.952q0.468 0 0.81 -0.342t0.342 -0.81zm4.608 -34.56v39.168q0 2.376 -1.692 4.068t-4.068 1.692h-29.952q-2.376 0 -4.068 -1.692t-1.692 -4.068v-39.168q0 -2.376 1.692 -4.068t4.068 -1.692h29.952q2.376 0 4.068 1.692t1.692 4.068z','MOBILE_PHONE':'M16.704 -13.751q0 -1.188 -0.846 -2.034t-2.034 -0.846 -2.034 0.846 -0.846 2.034 0.846 2.034 2.034 0.846 2.034 -0.846 0.846 -2.034zm7.488 -5.76v-25.344q0 -0.468 -0.342 -0.81t-0.81 -0.342h-18.432q-0.468 0 -0.81 0.342t-0.342 0.81v25.344q0 0.468 0.342 0.81t0.81 0.342h18.432q0.468 0 0.81 -0.342t0.342 -0.81zm-6.912 -30.528q0 -0.576 -0.576 -0.576h-5.76q-0.576 0 -0.576 0.576t0.576 0.576h5.76q0.576 0 0.576 -0.576zm10.368 -0.576v36.864q0 1.872 -1.368 3.24t-3.24 1.368h-18.432q-1.872 0 -3.24 -1.368t-1.368 -3.24v-36.864q0 -1.872 1.368 -3.24t3.24 -1.368h18.432q1.872 0 3.24 1.368t1.368 3.24z','CIRCLE_O':'M27.648 -51.767q-5.328 0 -9.828 2.628t-7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828 -2.628 -9.828 -7.128 -7.128 -9.828 -2.628zm27.648 19.584q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','QUOTE_LEFT':'M27.648 -29.879v13.824q0 2.88 -2.016 4.896t-4.896 2.016h-13.824q-2.88 0 -4.896 -2.016t-2.016 -4.896v-25.344q0 -3.744 1.458 -7.146t3.942 -5.886 5.886 -3.942 7.146 -1.458h2.304q0.936 0 1.62 0.684t0.684 1.62v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-2.304q-3.816 0 -6.516 2.7t-2.7 6.516v1.152q0 1.44 1.008 2.448t2.448 1.008h8.064q2.88 0 4.896 2.016t2.016 4.896zm32.256 0v13.824q0 2.88 -2.016 4.896t-4.896 2.016h-13.824q-2.88 0 -4.896 -2.016t-2.016 -4.896v-25.344q0 -3.744 1.458 -7.146t3.942 -5.886 5.886 -3.942 7.146 -1.458h2.304q0.936 0 1.62 0.684t0.684 1.62v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-2.304q-3.816 0 -6.516 2.7t-2.7 6.516v1.152q0 1.44 1.008 2.448t2.448 1.008h8.064q2.88 0 4.896 2.016t2.016 4.896z','QUOTE_RIGHT':'M27.648 -52.919v25.344q0 3.744 -1.458 7.146t-3.942 5.886 -5.886 3.942 -7.146 1.458h-2.304q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h2.304q3.816 0 6.516 -2.7t2.7 -6.516v-1.152q0 -1.44 -1.008 -2.448t-2.448 -1.008h-8.064q-2.88 0 -4.896 -2.016t-2.016 -4.896v-13.824q0 -2.88 2.016 -4.896t4.896 -2.016h13.824q2.88 0 4.896 2.016t2.016 4.896zm32.256 0v25.344q0 3.744 -1.458 7.146t-3.942 5.886 -5.886 3.942 -7.146 1.458h-2.304q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h2.304q3.816 0 6.516 -2.7t2.7 -6.516v-1.152q0 -1.44 -1.008 -2.448t-2.448 -1.008h-8.064q-2.88 0 -4.896 -2.016t-2.016 -4.896v-13.824q0 -2.88 2.016 -4.896t4.896 -2.016h13.824q2.88 0 4.896 2.016t2.016 4.896z','SPINNER':'M17.856 -16.055q0 2.16 -1.53 3.672t-3.654 1.512q-2.16 0 -3.672 -1.512t-1.512 -3.672 1.512 -3.672 3.672 -1.512q2.124 0 3.654 1.512t1.53 3.672zm15.552 6.912q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm-21.888 -23.04q0 2.376 -1.692 4.068t-4.068 1.692 -4.068 -1.692 -1.692 -4.068 1.692 -4.068 4.068 -1.692 4.068 1.692 1.692 4.068zm37.44 16.128q0 1.656 -1.188 2.844t-2.844 1.188 -2.844 -1.188 -1.188 -2.844 1.188 -2.844 2.844 -1.188 2.844 1.188 1.188 2.844zm-29.952 -32.256q0 2.628 -1.854 4.482t-4.482 1.854 -4.482 -1.854 -1.854 -4.482 1.854 -4.482 4.482 -1.854 4.482 1.854 1.854 4.482zm16.704 -6.912q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896 2.016 -4.896 4.896 -2.016 4.896 2.016 2.016 4.896zm19.584 23.04q0 1.44 -1.008 2.448t-2.448 1.008 -2.448 -1.008 -1.008 -2.448 1.008 -2.448 2.448 -1.008 2.448 1.008 1.008 2.448zm-7.488 -16.128q0 1.188 -0.846 2.034t-2.034 0.846 -2.034 -0.846 -0.846 -2.034 0.846 -2.034 2.034 -0.846 2.034 0.846 0.846 2.034z','CIRCLE':'M55.296 -32.183q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','REPLY':'M64.512 -24.119q0 5.976 -4.572 16.236 -0.108 0.252 -0.378 0.864t-0.486 1.08 -0.468 0.792q-0.432 0.612 -1.008 0.612 -0.54 0 -0.846 -0.36t-0.306 -0.9q0 -0.324 0.09 -0.954t0.09 -0.846q0.18 -2.448 0.18 -4.428 0 -3.636 -0.63 -6.516t-1.746 -4.986 -2.88 -3.636 -3.798 -2.502 -4.788 -1.53 -5.544 -0.774 -6.318 -0.216h-8.064v9.216q0 0.936 -0.684 1.62t-1.62 0.684 -1.62 -0.684l-18.432 -18.432q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l18.432 -18.432q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62v9.216h8.064q25.668 0 31.5 14.508 1.908 4.824 1.908 11.988z','GITHUB_ALT':'M23.04 -20.663q0 1.44 -0.45 2.952t-1.548 2.736 -2.61 1.224 -2.61 -1.224 -1.548 -2.736 -0.45 -2.952 0.45 -2.952 1.548 -2.736 2.61 -1.224 2.61 1.224 1.548 2.736 0.45 2.952zm23.04 0q0 1.44 -0.45 2.952t-1.548 2.736 -2.61 1.224 -2.61 -1.224 -1.548 -2.736 -0.45 -2.952 0.45 -2.952 1.548 -2.736 2.61 -1.224 2.61 1.224 1.548 2.736 0.45 2.952zm5.76 0q0 -4.32 -2.484 -7.344t-6.732 -3.024q-1.476 0 -7.02 0.756 -2.556 0.396 -5.652 0.396t-5.652 -0.396q-5.472 -0.756 -7.02 -0.756 -4.248 0 -6.732 3.024t-2.484 7.344q0 3.168 1.152 5.526t2.916 3.708 4.392 2.16 5.04 1.062 5.364 0.252h6.048q2.952 0 5.364 -0.252t5.04 -1.062 4.392 -2.16 2.916 -3.708 1.152 -5.526zm8.064 -6.336q0 7.452 -2.196 11.916 -1.368 2.772 -3.798 4.788t-5.076 3.096 -6.12 1.71 -6.174 0.792 -6.012 0.162q-2.808 0 -5.112 -0.108t-5.31 -0.45 -5.49 -1.08 -4.932 -1.854 -4.356 -2.916 -3.096 -4.14q-2.232 -4.428 -2.232 -11.916 0 -8.532 4.896 -14.256 -0.972 -2.952 -0.972 -6.12 0 -4.176 1.836 -7.848 3.888 0 6.84 1.422t6.804 4.446q5.292 -1.26 11.124 -1.26 5.328 0 10.08 1.152 3.78 -2.952 6.732 -4.356t6.804 -1.404q1.836 3.672 1.836 7.848 0 3.132 -0.972 6.048 4.896 5.76 4.896 14.328z','FOLDER_O':'M55.296 -17.207v-25.344q0 -1.44 -1.008 -2.448t-2.448 -1.008h-25.344q-1.44 0 -2.448 -1.008t-1.008 -2.448v-2.304q0 -1.44 -1.008 -2.448t-2.448 -1.008h-11.52q-1.44 0 -2.448 1.008t-1.008 2.448v34.56q0 1.44 1.008 2.448t2.448 1.008h43.776q1.44 0 2.448 -1.008t1.008 -2.448zm4.608 -25.344v25.344q0 3.312 -2.376 5.688t-5.688 2.376h-43.776q-3.312 0 -5.688 -2.376t-2.376 -5.688v-34.56q0 -3.312 2.376 -5.688t5.688 -2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h24.192q3.312 0 5.688 2.376t2.376 5.688z','FOLDER_OPEN_O':'M64.116 -30.923q0 -1.26 -1.908 -1.26h-39.168q-1.44 0 -3.078 0.774t-2.574 1.89l-10.584 13.068q-0.648 0.864 -0.648 1.44 0 1.26 1.908 1.26h39.168q1.44 0 3.096 -0.792t2.556 -1.908l10.584 -13.068q0.648 -0.792 0.648 -1.404zm-41.076 -5.868h27.648v-5.76q0 -1.44 -1.008 -2.448t-2.448 -1.008h-20.736q-1.44 0 -2.448 -1.008t-1.008 -2.448v-2.304q0 -1.44 -1.008 -2.448t-2.448 -1.008h-11.52q-1.44 0 -2.448 1.008t-1.008 2.448v30.708l9.216 -11.34q1.584 -1.908 4.176 -3.15t5.04 -1.242zm45.684 5.868q0 2.232 -1.656 4.32l-10.62 13.068q-1.548 1.908 -4.176 3.15t-5.04 1.242h-39.168q-3.312 0 -5.688 -2.376t-2.376 -5.688v-34.56q0 -3.312 2.376 -5.688t5.688 -2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h19.584q3.312 0 5.688 2.376t2.376 5.688v5.76h6.912q1.944 0 3.564 0.882t2.412 2.538q0.54 1.152 0.54 2.448z','SMILE_O':'M40.824 -25.739q-1.332 4.356 -4.968 7.02t-8.208 2.664 -8.208 -2.664 -4.968 -7.02q-0.288 -0.9 0.144 -1.746t1.368 -1.134q0.9 -0.288 1.746 0.144t1.134 1.368q0.9 2.88 3.33 4.662t5.454 1.782 5.454 -1.782 3.33 -4.662q0.288 -0.936 1.152 -1.368t1.764 -0.144 1.332 1.134 0.144 1.746zm-17.784 -15.66q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm18.432 0q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm9.216 9.216q0 -4.68 -1.836 -8.946t-4.914 -7.344 -7.344 -4.914 -8.946 -1.836 -8.946 1.836 -7.344 4.914 -4.914 7.344 -1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946 -1.836 7.344 -4.914 4.914 -7.344 1.836 -8.946zm4.608 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','FROWN_O':'M40.824 -20.195q0.288 0.9 -0.144 1.746t-1.332 1.134 -1.764 -0.144 -1.152 -1.368q-0.9 -2.88 -3.33 -4.662t-5.454 -1.782 -5.454 1.782 -3.33 4.662q-0.288 0.936 -1.134 1.368t-1.746 0.144q-0.936 -0.288 -1.368 -1.134t-0.144 -1.746q1.332 -4.356 4.968 -7.02t8.208 -2.664 8.208 2.664 4.968 7.02zm-17.784 -21.204q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm18.432 0q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm9.216 9.216q0 -4.68 -1.836 -8.946t-4.914 -7.344 -7.344 -4.914 -8.946 -1.836 -8.946 1.836 -7.344 4.914 -4.914 7.344 -1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946 -1.836 7.344 -4.914 4.914 -7.344 1.836 -8.946zm4.608 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','MEH_O':'M41.472 -25.271q0 0.936 -0.684 1.62t-1.62 0.684h-23.04q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h23.04q0.936 0 1.62 0.684t0.684 1.62zm-18.432 -16.128q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm18.432 0q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258 1.35 -3.258 3.258 -1.35 3.258 1.35 1.35 3.258zm9.216 9.216q0 -4.68 -1.836 -8.946t-4.914 -7.344 -7.344 -4.914 -8.946 -1.836 -8.946 1.836 -7.344 4.914 -4.914 7.344 -1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946 -1.836 7.344 -4.914 4.914 -7.344 1.836 -8.946zm4.608 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','GAMEPAD':'M29.952 -25.271v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-6.912v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v6.912h-6.912q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h6.912v6.912q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828v-6.912h6.912q0.504 0 0.828 -0.324t0.324 -0.828zm20.736 2.304q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm9.216 -9.216q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm9.216 4.608q0 7.632 -5.4 13.032t-13.032 5.4q-6.912 0 -12.168 -4.608h-7.92q-5.256 4.608 -12.168 4.608 -7.632 0 -13.032 -5.4t-5.4 -13.032 5.4 -13.032 13.032 -5.4h32.256q7.632 0 13.032 5.4t5.4 13.032z','KEYBOARD_O':'M13.824 -22.391v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm4.608 -9.216v3.456q0 0.576 -0.576 0.576h-8.064q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h8.064q0.576 0 0.576 0.576zm-4.608 -9.216v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm36.864 18.432v3.456q0 0.576 -0.576 0.576h-31.104q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h31.104q0.576 0 0.576 0.576zm-23.04 -9.216v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm-4.608 -9.216v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm13.824 9.216v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm-4.608 -9.216v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm13.824 9.216v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm13.824 9.216v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm-18.432 -18.432v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm9.216 0v3.456q0 0.576 -0.576 0.576h-3.456q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm9.216 0v12.672q0 0.576 -0.576 0.576h-8.064q-0.576 0 -0.576 -0.576v-3.456q0 -0.576 0.576 -0.576h4.032v-8.64q0 -0.576 0.576 -0.576h3.456q0.576 0 0.576 0.576zm4.608 27.072v-32.256h-59.904v32.256h59.904zm4.608 -32.256v32.256q0 1.908 -1.35 3.258t-3.258 1.35h-59.904q-1.908 0 -3.258 -1.35t-1.35 -3.258v-32.256q0 -1.908 1.35 -3.258t3.258 -1.35h59.904q1.908 0 3.258 1.35t1.35 3.258z','FLAG_O':'M59.904 -26.819v-22.176q-6.084 3.276 -11.016 3.276 -2.952 0 -5.22 -1.152 -3.6 -1.764 -6.624 -2.754t-6.408 -0.99q-6.228 0 -14.508 4.572v21.564q8.82 -4.068 15.588 -4.068 1.98 0 3.726 0.27t3.528 0.936 2.772 1.116 2.97 1.422l1.008 0.504q1.584 0.792 3.636 0.792 4.32 0 10.548 -3.312zm-48.384 -28.404q0 1.26 -0.63 2.304t-1.674 1.656v45.576q0 0.504 -0.324 0.828t-0.828 0.324h-2.304q-0.504 0 -0.828 -0.324t-0.324 -0.828v-45.576q-1.044 -0.612 -1.674 -1.656t-0.63 -2.304q0 -1.908 1.35 -3.258t3.258 -1.35 3.258 1.35 1.35 3.258zm52.992 2.304v27.468q0 1.404 -1.26 2.052 -0.36 0.18 -0.612 0.324 -7.848 4.176 -13.284 4.176 -3.168 0 -5.688 -1.26l-1.008 -0.504q-2.304 -1.188 -3.564 -1.728t-3.276 -1.044 -4.104 -0.504q-3.672 0 -8.478 1.584t-8.226 3.672q-0.54 0.324 -1.188 0.324 -0.576 0 -1.152 -0.288 -1.152 -0.684 -1.152 -2.016v-26.712q0 -1.26 1.116 -1.98 1.26 -0.756 2.826 -1.53t4.104 -1.872 5.49 -1.782 5.58 -0.684q4.032 0 7.524 1.116t7.524 3.096q1.368 0.684 3.204 0.684 4.392 0 11.16 -4.032l1.116 -0.612q1.116 -0.576 2.232 0.072 1.116 0.72 1.116 1.98z','FLAG_CHECKERED':'M29.952 -28.439v-6.912q-6.516 0.576 -13.824 4.212v6.66q7.38 -3.456 13.824 -3.96zm0 -15.048v-7.092q-6.192 0.288 -13.824 4.536v6.804q7.74 -3.996 13.824 -4.248zm29.952 16.668v-6.624q-8.46 4.176 -13.824 2.556v-8.064q-0.72 -0.216 -1.404 -0.54 -0.18 -0.108 -1.188 -0.612t-1.242 -0.612 -1.134 -0.54 -1.242 -0.558 -1.17 -0.468 -1.296 -0.45 -1.26 -0.306 -1.422 -0.27 -1.422 -0.144 -1.584 -0.072q-0.828 0 -1.764 0.108v7.992h0.684q3.672 0 6.93 1.044t7.11 2.952q0.684 0.324 1.404 0.54v6.768q1.512 0.612 3.276 0.612 4.32 0 10.548 -3.312zm0 -15.372v-6.804q-6.084 3.276 -11.016 3.276 -1.62 0 -2.808 -0.288v7.056q5.328 1.512 13.824 -3.24zm-48.384 -13.032q0 1.26 -0.63 2.304t-1.674 1.656v45.576q0 0.504 -0.324 0.828t-0.828 0.324h-2.304q-0.504 0 -0.828 -0.324t-0.324 -0.828v-45.576q-1.044 -0.612 -1.674 -1.656t-0.63 -2.304q0 -1.908 1.35 -3.258t3.258 -1.35 3.258 1.35 1.35 3.258zm52.992 2.304v27.468q0 1.404 -1.26 2.052 -0.36 0.18 -0.612 0.324 -7.848 4.176 -13.284 4.176 -3.168 0 -5.688 -1.26l-1.008 -0.504q-2.304 -1.188 -3.564 -1.728t-3.276 -1.044 -4.104 -0.504q-3.672 0 -8.478 1.584t-8.226 3.672q-0.54 0.324 -1.188 0.324 -0.576 0 -1.152 -0.288 -1.152 -0.684 -1.152 -2.016v-26.712q0 -1.26 1.116 -1.98 1.26 -0.756 2.826 -1.53t4.104 -1.872 5.49 -1.782 5.58 -0.684q4.032 0 7.524 1.116t7.524 3.096q1.368 0.684 3.204 0.684 4.392 0 11.16 -4.032l1.116 -0.612q1.116 -0.576 2.232 0.072 1.116 0.72 1.116 1.98z','TERMINAL':'M21.06 -29.051l-16.776 16.776q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-1.8 -1.8q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l14.148 -14.148 -14.148 -14.148q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l1.8 -1.8q0.36 -0.36 0.828 -0.36t0.828 0.36l16.776 16.776q0.36 0.36 0.36 0.828t-0.36 0.828zm38.844 16.452v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-34.56q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h34.56q0.504 0 0.828 0.324t0.324 0.828z','CODE':'M22.212 -14.075l-1.8 1.8q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-16.776 -16.776q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l16.776 -16.776q0.36 -0.36 0.828 -0.36t0.828 0.36l1.8 1.8q0.36 0.36 0.36 0.828t-0.36 0.828l-14.148 14.148 14.148 14.148q0.36 0.36 0.36 0.828t-0.36 0.828zm21.276 -38.412l-13.428 46.476q-0.144 0.468 -0.558 0.702t-0.846 0.09l-2.232 -0.612q-0.468 -0.144 -0.702 -0.558t-0.09 -0.882l13.428 -46.476q0.144 -0.468 0.558 -0.702t0.846 -0.09l2.232 0.612q0.468 0.144 0.702 0.558t0.09 0.882zm23.652 23.436l-16.776 16.776q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-1.8 -1.8q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l14.148 -14.148 -14.148 -14.148q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l1.8 -1.8q0.36 -0.36 0.828 -0.36t0.828 0.36l16.776 16.776q0.36 0.36 0.36 0.828t-0.36 0.828z','REPLY_ALL':'M23.04 -25.487v2.52q0 1.512 -1.404 2.124 -0.468 0.18 -0.9 0.18 -0.972 0 -1.62 -0.684l-18.432 -18.432q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l18.432 -18.432q1.044 -1.116 2.52 -0.504 1.404 0.612 1.404 2.124v2.484l-14.292 14.328q-0.684 0.684 -0.684 1.62t0.684 1.62zm41.472 1.368q0 2.088 -0.612 4.806t-1.386 4.968 -1.728 4.5 -1.458 3.258l-0.72 1.44q-0.288 0.612 -1.008 0.612 -0.216 0 -0.324 -0.036 -0.9 -0.288 -0.828 -1.224 1.548 -14.4 -3.816 -20.34 -2.304 -2.556 -6.138 -3.978t-9.63 -1.89v9.036q0 1.512 -1.404 2.124 -0.468 0.18 -0.9 0.18 -0.972 0 -1.62 -0.684l-18.432 -18.432q-0.684 -0.684 -0.684 -1.62t0.684 -1.62l18.432 -18.432q1.044 -1.116 2.52 -0.504 1.404 0.612 1.404 2.124v9.432q14.796 1.008 21.564 7.956 6.084 6.228 6.084 18.324z','STAR_HALF_O':'M42.696 -29.987l9.252 -9 -12.816 -1.872 -2.376 -0.36 -1.08 -2.16 -5.724 -11.592v34.668l2.124 1.116 11.448 6.048 -2.16 -12.78 -0.432 -2.376zm16.272 -9.432l-13.068 12.744 3.096 18q0.18 1.188 -0.216 1.854t-1.224 0.666q-0.612 0 -1.44 -0.432l-16.164 -8.496 -16.164 8.496q-0.828 0.432 -1.44 0.432 -0.828 0 -1.224 -0.666t-0.216 -1.854l3.096 -18 -13.104 -12.744q-1.152 -1.152 -0.828 -2.142t1.944 -1.242l18.072 -2.628 8.1 -16.38q0.72 -1.476 1.764 -1.476 1.008 0 1.764 1.476l8.1 16.38 18.072 2.628q1.62 0.252 1.944 1.242t-0.864 2.142z','LOCATION_ARROW':'M50.436 -51.875l-23.04 46.08q-0.612 1.26 -2.052 1.26 -0.18 0 -0.54 -0.072 -0.792 -0.18 -1.278 -0.81t-0.486 -1.422v-20.736h-20.736q-0.792 0 -1.422 -0.486t-0.81 -1.278 0.144 -1.512 1.044 -1.08l46.08 -23.04q0.468 -0.252 1.044 -0.252 0.972 0 1.62 0.684 0.54 0.504 0.666 1.242t-0.234 1.422z','CROP':'M20.052 -18.359h21.42v-21.42zm-1.62 -1.62l21.42 -21.42h-21.42v21.42zm41.472 2.772v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-8.064v8.064q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-8.064h-31.104q-0.504 0 -0.828 -0.324t-0.324 -0.828v-31.104h-8.064q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h8.064v-8.064q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v8.064h30.636l8.856 -8.892q0.36 -0.324 0.828 -0.324t0.828 0.324q0.324 0.36 0.324 0.828t-0.324 0.828l-8.892 8.856v30.636h8.064q0.504 0 0.828 0.324t0.324 0.828z','CODE_FORK':'M10.368 -11.447q0 -1.44 -1.008 -2.448t-2.448 -1.008 -2.448 1.008 -1.008 2.448 1.008 2.448 2.448 1.008 2.448 -1.008 1.008 -2.448zm0 -41.472q0 -1.44 -1.008 -2.448t-2.448 -1.008 -2.448 1.008 -1.008 2.448 1.008 2.448 2.448 1.008 2.448 -1.008 1.008 -2.448zm23.04 4.608q0 -1.44 -1.008 -2.448t-2.448 -1.008 -2.448 1.008 -1.008 2.448 1.008 2.448 2.448 1.008 2.448 -1.008 1.008 -2.448zm3.456 0q0 1.872 -0.936 3.474t-2.52 2.502q-0.072 10.332 -8.136 14.904 -2.448 1.368 -7.308 2.916 -4.608 1.44 -6.102 2.556t-1.494 3.6v0.936q1.584 0.9 2.52 2.502t0.936 3.474q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896q0 -1.872 0.936 -3.474t2.52 -2.502v-29.52q-1.584 -0.9 -2.52 -2.502t-0.936 -3.474q0 -2.88 2.016 -4.896t4.896 -2.016 4.896 2.016 2.016 4.896q0 1.872 -0.936 3.474t-2.52 2.502v17.892q1.944 -0.936 5.544 -2.052 1.98 -0.612 3.15 -1.062t2.538 -1.116 2.124 -1.422 1.458 -1.836 1.008 -2.502 0.306 -3.294q-1.584 -0.9 -2.52 -2.502t-0.936 -3.474q0 -2.88 2.016 -4.896t4.896 -2.016 4.896 2.016 2.016 4.896z','UNLINK':'M15.804 -18.683l-9.216 9.216q-0.36 0.324 -0.828 0.324 -0.432 0 -0.828 -0.324 -0.324 -0.36 -0.324 -0.828t0.324 -0.828l9.216 -9.216q0.36 -0.324 0.828 -0.324t0.828 0.324q0.324 0.36 0.324 0.828t-0.324 0.828zm6.084 1.476v11.52q0 0.504 -0.324 0.828t-0.828 0.324 -0.828 -0.324 -0.324 -0.828v-11.52q0 -0.504 0.324 -0.828t0.828 -0.324 0.828 0.324 0.324 0.828zm-8.064 -8.064q0 0.504 -0.324 0.828t-0.828 0.324h-11.52q-0.504 0 -0.828 -0.324t-0.324 -0.828 0.324 -0.828 0.828 -0.324h11.52q0.504 0 0.828 0.324t0.324 0.828zm45.504 4.608q0 4.32 -3.06 7.308l-5.292 5.256q-2.988 2.988 -7.308 2.988 -4.356 0 -7.344 -3.06l-12.024 -12.06q-0.756 -0.756 -1.512 -2.016l8.604 -0.648 9.828 9.864q0.972 0.972 2.448 0.99t2.448 -0.954l5.292 -5.256q1.008 -1.008 1.008 -2.412 0 -1.44 -1.008 -2.448l-9.864 -9.9 0.648 -8.604q1.26 0.756 2.016 1.512l12.096 12.096q3.024 3.096 3.024 7.344zm-22.212 -26.064l-8.604 0.648 -9.828 -9.864q-1.008 -1.008 -2.448 -1.008 -1.404 0 -2.448 0.972l-5.292 5.256q-1.008 1.008 -1.008 2.412 0 1.44 1.008 2.448l9.864 9.864 -0.648 8.64q-1.26 -0.756 -2.016 -1.512l-12.096 -12.096q-3.024 -3.096 -3.024 -7.344 0 -4.32 3.06 -7.308l5.292 -5.256q2.988 -2.988 7.308 -2.988 4.356 0 7.344 3.06l12.024 12.06q0.756 0.756 1.512 2.016zm22.788 3.024q0 0.504 -0.324 0.828t-0.828 0.324h-11.52q-0.504 0 -0.828 -0.324t-0.324 -0.828 0.324 -0.828 0.828 -0.324h11.52q0.504 0 0.828 0.324t0.324 0.828zm-19.584 -19.584v11.52q0 0.504 -0.324 0.828t-0.828 0.324 -0.828 -0.324 -0.324 -0.828v-11.52q0 -0.504 0.324 -0.828t0.828 -0.324 0.828 0.324 0.324 0.828zm14.652 5.436l-9.216 9.216q-0.396 0.324 -0.828 0.324t-0.828 -0.324q-0.324 -0.36 -0.324 -0.828t0.324 -0.828l9.216 -9.216q0.36 -0.324 0.828 -0.324t0.828 0.324q0.324 0.36 0.324 0.828t-0.324 0.828z','QUESTION':'M25.344 -19.223v8.64q0 0.576 -0.432 1.008t-1.008 0.432h-8.64q-0.576 0 -1.008 -0.432t-0.432 -1.008v-8.64q0 -0.576 0.432 -1.008t1.008 -0.432h8.64q0.576 0 1.008 0.432t0.432 1.008zm11.376 -21.6q0 1.944 -0.558 3.636t-1.26 2.754 -1.98 2.142 -2.07 1.566 -2.196 1.278q-1.476 0.828 -2.466 2.34t-0.99 2.412q0 0.612 -0.432 1.17t-1.008 0.558h-8.64q-0.54 0 -0.918 -0.666t-0.378 -1.35v-1.62q0 -2.988 2.34 -5.634t5.148 -3.906q2.124 -0.972 3.024 -2.016t0.9 -2.736q0 -1.512 -1.674 -2.664t-3.87 -1.152q-2.34 0 -3.888 1.044 -1.26 0.9 -3.852 4.14 -0.468 0.576 -1.116 0.576 -0.432 0 -0.9 -0.288l-5.904 -4.5q-0.468 -0.36 -0.558 -0.9t0.198 -1.008q5.76 -9.576 16.704 -9.576 2.88 0 5.796 1.116t5.256 2.988 3.816 4.59 1.476 5.706z','INFO':'M23.04 -16.055v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-18.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h2.304v-13.824h-2.304q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h13.824q0.936 0 1.62 0.684t0.684 1.62v20.736h2.304q0.936 0 1.62 0.684t0.684 1.62zm-4.608 -41.472v6.912q0 0.936 -0.684 1.62t-1.62 0.684h-9.216q-0.936 0 -1.62 -0.684t-0.684 -1.62v-6.912q0 -0.936 0.684 -1.62t1.62 -0.684h9.216q0.936 0 1.62 0.684t0.684 1.62z','EXCLAMATION':'M18.432 -19.511v8.064q0 0.936 -0.684 1.62t-1.62 0.684h-9.216q-0.936 0 -1.62 -0.684t-0.684 -1.62v-8.064q0 -0.936 0.684 -1.62t1.62 -0.684h9.216q0.936 0 1.62 0.684t0.684 1.62zm1.08 -38.016l-1.008 27.648q-0.036 0.936 -0.738 1.62t-1.638 0.684h-9.216q-0.936 0 -1.638 -0.684t-0.738 -1.62l-1.008 -27.648q-0.036 -0.936 0.63 -1.62t1.602 -0.684h11.52q0.936 0 1.602 0.684t0.63 1.62z','SUPERSCRIPT':'M32.292 -15.155v6.012h-8.928l-5.724 -9.072 -0.864 -1.512q-0.288 -0.324 -0.396 -0.756h-0.108l-0.324 0.756q-0.36 0.72 -0.9 1.584l-5.58 9h-9.288v-6.012h4.608l7.092 -10.476 -6.66 -9.792h-4.932v-6.048h9.936l5.004 8.208q0.072 0.144 0.828 1.512 0.288 0.324 0.396 0.756h0.108q0.108 -0.324 0.396 -0.756l0.9 -1.512 5.04 -8.208h9.252v6.048h-4.5l-6.624 9.612 7.344 10.656h3.924zm22.932 -24.444v7.416h-18.504l-0.108 -0.972q-0.144 -1.008 -0.144 -1.656 0 -2.304 0.936 -4.212t2.34 -3.114 3.024 -2.34 3.024 -1.962 2.34 -1.944 0.936 -2.304q0 -1.368 -1.062 -2.25t-2.538 -0.882q-1.836 0 -3.492 1.404 -0.504 0.396 -1.296 1.368l-3.78 -3.312q0.936 -1.332 2.268 -2.376 2.988 -2.34 6.768 -2.34 3.96 0 6.408 2.142t2.448 5.706q0 2.016 -0.882 3.708t-2.232 2.754 -2.934 2.106 -2.952 1.818 -2.358 1.854 -1.098 2.268h8.352v-2.88h4.536z','SUBSCRIPT':'M32.292 -15.155v6.012h-8.928l-5.724 -9.072 -0.864 -1.512q-0.288 -0.324 -0.396 -0.756h-0.108l-0.324 0.756q-0.36 0.72 -0.9 1.584l-5.58 9h-9.288v-6.012h4.608l7.092 -10.476 -6.66 -9.792h-4.932v-6.048h9.936l5.004 8.208q0.072 0.144 0.828 1.512 0.288 0.324 0.396 0.756h0.108q0.108 -0.324 0.396 -0.756l0.9 -1.512 5.04 -8.208h9.252v6.048h-4.5l-6.624 9.612 7.344 10.656h3.924zm23.004 7.812v7.416h-18.504l-0.144 -0.972 -0.108 -1.656q0 -2.304 0.936 -4.212t2.34 -3.114 3.024 -2.34 3.024 -1.962 2.34 -1.944 0.936 -2.304q0 -1.368 -1.062 -2.25t-2.538 -0.882q-1.836 0 -3.492 1.404 -0.504 0.396 -1.296 1.368l-3.78 -3.312q0.936 -1.332 2.268 -2.376 2.88 -2.34 6.768 -2.34 3.96 0 6.408 2.142t2.448 5.706q0 2.376 -1.242 4.266t-3.024 3.096 -3.582 2.25 -3.132 2.268 -1.476 2.628h8.352v-2.88h4.536z','ERASER':'M32.256 -13.751l12.096 -13.824h-27.648l-12.096 13.824h27.648zm36.468 -38.772q0.54 1.224 0.342 2.574t-1.098 2.358l-32.256 36.864q-1.368 1.584 -3.456 1.584h-27.648q-1.368 0 -2.502 -0.738t-1.71 -1.962q-0.54 -1.224 -0.342 -2.574t1.098 -2.358l32.256 -36.864q1.368 -1.584 3.456 -1.584h27.648q1.368 0 2.502 0.738t1.71 1.962z','PUZZLE_PIECE':'M59.904 -24.911q0 2.916 -1.602 4.86t-4.446 1.944q-1.476 0 -2.79 -0.63t-2.124 -1.368 -2.034 -1.368 -2.556 -0.63q-3.96 0 -3.96 4.464 0 1.404 0.576 4.14t0.54 4.14v0.18q-0.792 0 -1.188 0.036 -1.224 0.108 -3.51 0.414t-4.158 0.486 -3.528 0.18q-2.196 0 -3.708 -0.954t-1.512 -3.006q0 -1.332 0.63 -2.556t1.368 -2.034 1.368 -2.124 0.63 -2.79q0 -2.844 -1.944 -4.446t-4.86 -1.602q-3.024 0 -5.148 1.638t-2.124 4.59q0 1.548 0.54 2.988t1.206 2.322 1.206 1.908 0.54 1.818q0 1.62 -1.656 3.204 -1.332 1.26 -4.212 1.26 -3.42 0 -8.82 -0.864 -0.324 -0.072 -0.99 -0.144t-0.99 -0.144l-0.468 -0.072 -0.108 -0.036 -0.072 -0.036v-36.864q0.072 0.036 0.63 0.126t1.224 0.18 0.774 0.126q5.4 0.864 8.82 0.864 2.88 0 4.212 -1.26 1.656 -1.584 1.656 -3.204 0 -0.792 -0.54 -1.818t-1.206 -1.908 -1.206 -2.322 -0.54 -2.988q0 -2.952 2.124 -4.59t5.184 -1.638q2.88 0 4.824 1.602t1.944 4.446q0 1.476 -0.63 2.79t-1.368 2.124 -1.368 2.034 -0.63 2.556q0 2.052 1.512 3.006t3.708 0.954q2.304 0 6.48 -0.54t5.868 -0.612v0.072q-0.036 0.072 -0.126 0.63t-0.18 1.224 -0.126 0.774q-0.864 5.4 -0.864 8.82 0 2.88 1.26 4.212 1.584 1.656 3.204 1.656 0.792 0 1.818 -0.54t1.908 -1.206 2.322 -1.206 2.988 -0.54q2.952 0 4.59 2.124t1.638 5.148z','MICROPHONE':'M41.472 -39.095v4.608q0 7.956 -5.31 13.842t-13.122 6.75v4.752h9.216q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62 -1.62 0.684h-23.04q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h9.216v-4.752q-7.812 -0.864 -13.122 -6.75t-5.31 -13.842v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62v4.608q0 6.66 4.734 11.394t11.394 4.734 11.394 -4.734 4.734 -11.394v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62zm-9.216 -13.824v18.432q0 4.752 -3.384 8.136t-8.136 3.384 -8.136 -3.384 -3.384 -8.136v-18.432q0 -4.752 3.384 -8.136t8.136 -3.384 8.136 3.384 3.384 8.136z','MICROPHONE_SLASH':'M9.756 -30.419l-3.636 3.636q-1.512 -3.708 -1.512 -7.704v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62v4.608q0 1.908 0.54 4.068zm40.104 -21.672l-12.996 12.996v4.608q0 4.752 -3.384 8.136t-8.136 3.384q-1.98 0 -3.924 -0.684l-3.456 3.456q3.492 1.836 7.38 1.836 6.66 0 11.394 -4.734t4.734 -11.394v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684 1.62 0.684 0.684 1.62v4.608q0 7.956 -5.31 13.842t-13.122 6.75v4.752h9.216q0.936 0 1.62 0.684t0.684 1.62 -0.684 1.62 -1.62 0.684h-23.04q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h9.216v-4.752q-4.5 -0.468 -8.46 -2.916l-9.144 9.144q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-2.952 -2.952q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l44.424 -44.424q0.36 -0.36 0.828 -0.36t0.828 0.36l2.952 2.952q0.36 0.36 0.36 0.828t-0.36 0.828zm-13.68 -4.752l-22.356 22.356v-18.432q0 -4.752 3.384 -8.136t8.136 -3.384q3.672 0 6.642 2.124t4.194 5.472z','SHIELD':'M39.168 -29.879v-23.04h-16.128v40.932q4.284 -2.268 7.668 -4.932 8.46 -6.624 8.46 -12.96zm6.912 -27.648v27.648q0 3.096 -1.206 6.138t-2.988 5.4 -4.248 4.59 -4.554 3.708 -4.356 2.79 -3.222 1.782 -1.53 0.72q-0.432 0.216 -0.936 0.216t-0.936 -0.216q-0.576 -0.252 -1.53 -0.72t-3.222 -1.782 -4.356 -2.79 -4.554 -3.708 -4.248 -4.59 -2.988 -5.4 -1.206 -6.138v-27.648q0 -0.936 0.684 -1.62t1.62 -0.684h41.472q0.936 0 1.62 0.684t0.684 1.62z','CALENDAR_O':'M4.608 -4.535h50.688v-36.864h-50.688v36.864zm13.824 -43.776v-10.368q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v10.368q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm27.648 0v-10.368q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v10.368q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm13.824 -2.304v46.08q0 1.872 -1.368 3.24t-3.24 1.368h-50.688q-1.872 0 -3.24 -1.368t-1.368 -3.24v-46.08q0 -1.872 1.368 -3.24t3.24 -1.368h4.608v-3.456q0 -2.376 1.692 -4.068t4.068 -1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h13.824v-3.456q0 -2.376 1.692 -4.068t4.068 -1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h4.608q1.872 0 3.24 1.368t1.368 3.24z','FIRE_EXTINGUISHER':'M18.432 -57.527q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm32.256 -1.152v11.52q0 0.576 -0.432 0.9 -0.288 0.252 -0.72 0.252 -0.144 0 -0.252 -0.036l-16.128 -3.456q-0.396 -0.072 -0.648 -0.396t-0.252 -0.72h-9.216v3.672q3.996 0.828 6.606 3.996t2.61 7.308v28.8q0 0.936 -0.684 1.62t-1.62 0.684h-18.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-28.8q0 -3.816 2.25 -6.858t5.814 -4.122v-3.996h-1.152q-2.124 0 -4.14 0.846t-3.294 1.908 -2.376 2.394 -1.458 1.926 -0.504 0.882q-0.612 1.26 -2.052 1.26 -0.576 0 -1.044 -0.252 -0.828 -0.432 -1.134 -1.332t0.126 -1.764q0.18 -0.36 0.522 -0.936t1.35 -1.926 2.178 -2.52 3.06 -2.412 3.906 -1.89q-0.9 -1.512 -0.9 -3.096 0 -2.376 1.692 -4.068t4.068 -1.692 4.068 1.692 1.692 4.068q0 1.188 -0.504 2.304h10.872q0 -0.396 0.252 -0.72t0.648 -0.396l16.128 -3.456q0.108 -0.036 0.252 -0.036 0.432 0 0.72 0.252 0.432 0.324 0.432 0.9z','ROCKET':'M51.84 -48.311q0 -1.44 -1.008 -2.448t-2.448 -1.008 -2.448 1.008 -1.008 2.448 1.008 2.448 2.448 1.008 2.448 -1.008 1.008 -2.448zm8.064 -10.368q0 8.964 -2.718 15.498t-9.126 12.978q-2.916 2.88 -7.02 6.336l-0.72 13.644q-0.072 0.576 -0.576 0.936l-13.824 8.064q-0.252 0.144 -0.576 0.144 -0.432 0 -0.828 -0.324l-2.304 -2.304q-0.468 -0.504 -0.288 -1.152l3.06 -9.936 -10.116 -10.116 -9.936 3.06q-0.108 0.036 -0.324 0.036 -0.504 0 -0.828 -0.324l-2.304 -2.304q-0.612 -0.684 -0.18 -1.404l8.064 -13.824q0.36 -0.504 0.936 -0.576l13.644 -0.72q3.456 -4.104 6.336 -7.02 6.768 -6.732 12.888 -9.288t15.516 -2.556q0.504 0 0.864 0.342t0.36 0.81z','MAXCDN':'M62.82 -36.611l-5.904 27.468h-12.024l6.408 -29.952q0.468 -2.016 -0.54 -3.168 -0.972 -1.188 -2.988 -1.188h-6.084l-7.344 34.308h-12.024l7.344 -34.308h-10.296l-7.344 34.308h-12.024l7.344 -34.308 -5.508 -11.772h45.936q3.636 0 6.822 1.458t5.31 4.086q2.16 2.628 2.916 6.066t0 7.002z','CHEVRON_CIRCLE_LEFT':'M32.724 -14.219l3.672 -3.672q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-11.052 -11.052 11.052 -11.052q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-3.672 -3.672q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-16.344 16.344q-0.684 0.684 -0.684 1.62t0.684 1.62l16.344 16.344q0.684 0.684 1.62 0.684t1.62 -0.684zm22.572 -17.964q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','CHEVRON_CIRCLE_RIGHT':'M25.812 -14.219l16.344 -16.344q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-16.344 -16.344q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-3.672 3.672q-0.684 0.684 -0.684 1.62t0.684 1.62l11.052 11.052 -11.052 11.052q-0.684 0.684 -0.684 1.62t0.684 1.62l3.672 3.672q0.684 0.684 1.62 0.684t1.62 -0.684zm29.484 -17.964q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','CHEVRON_CIRCLE_UP':'M41.94 -23.435l3.672 -3.672q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-16.344 -16.344q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-16.344 16.344q-0.684 0.684 -0.684 1.62t0.684 1.62l3.672 3.672q0.684 0.684 1.62 0.684t1.62 -0.684l11.052 -11.052 11.052 11.052q0.684 0.684 1.62 0.684t1.62 -0.684zm13.356 -8.748q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','CHEVRON_CIRCLE_DOWN':'M29.268 -17.675l16.344 -16.344q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-3.672 -3.672q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-11.052 11.052 -11.052 -11.052q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-3.672 3.672q-0.684 0.684 -0.684 1.62t0.684 1.62l16.344 16.344q0.684 0.684 1.62 0.684t1.62 -0.684zm26.028 -14.508q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','HTML5':'M40.68 -42.947l0.576 -6.3h-31.824l1.692 19.224h22.032l-0.792 8.208 -7.092 1.908 -7.056 -1.908 -0.468 -5.04h-6.3l0.792 10.008 13.032 3.6h0.144v-0.036l12.924 -3.564 1.8 -19.584h-23.184l-0.54 -6.516h24.264zm-40.68 -16.884h50.688l-4.608 51.768 -20.808 5.832 -20.664 -5.832z','CSS3':'M9.9 -59.831h54.18l-9.576 47.988 -28.944 9.612 -25.128 -9.612 2.556 -12.816h10.692l-1.044 5.292 15.192 5.796 17.496 -5.796 2.448 -12.204h-43.488l2.088 -10.692h43.524l1.368 -6.876h-43.488z','ANCHOR':'M34.56 -55.223q0 -0.936 -0.684 -1.62t-1.62 -0.684 -1.62 0.684 -0.684 1.62 0.684 1.62 1.62 0.684 1.62 -0.684 0.684 -1.62zm29.952 33.408v12.672q0 0.792 -0.72 1.08 -0.288 0.072 -0.432 0.072 -0.468 0 -0.828 -0.324l-3.348 -3.348q-4.284 5.148 -11.466 8.154t-15.462 3.006 -15.462 -3.006 -11.466 -8.154l-3.348 3.348q-0.324 0.324 -0.828 0.324 -0.144 0 -0.432 -0.072 -0.72 -0.288 -0.72 -1.08v-12.672q0 -0.504 0.324 -0.828t0.828 -0.324h12.672q0.792 0 1.08 0.72 0.288 0.684 -0.252 1.26l-3.6 3.6q2.412 3.276 6.822 5.526t9.774 2.97v-23.292h-6.912q-0.936 0 -1.62 -0.684t-0.684 -1.62v-4.608q0 -0.936 0.684 -1.62t1.62 -0.684h6.912v-5.868q-2.088 -1.224 -3.348 -3.33t-1.26 -4.626q0 -3.816 2.7 -6.516t6.516 -2.7 6.516 2.7 2.7 6.516q0 2.52 -1.26 4.626t-3.348 3.33v5.868h6.912q0.936 0 1.62 0.684t0.684 1.62v4.608q0 0.936 -0.684 1.62t-1.62 0.684h-6.912v23.292q5.364 -0.72 9.774 -2.97t6.822 -5.526l-3.6 -3.6q-0.54 -0.576 -0.252 -1.26 0.288 -0.72 1.08 -0.72h12.672q0.504 0 0.828 0.324t0.324 0.828z','UNLOCK_ALT':'M38.016 -36.791q1.44 0 2.448 1.008t1.008 2.448v20.736q0 1.44 -1.008 2.448t-2.448 1.008h-34.56q-1.44 0 -2.448 -1.008t-1.008 -2.448v-20.736q0 -1.44 1.008 -2.448t2.448 -1.008h1.152v-11.52q0 -6.66 4.734 -11.394t11.394 -4.734 11.394 4.734 4.734 11.394q0 0.936 -0.684 1.62t-1.62 0.684h-2.304q-0.936 0 -1.62 -0.684t-0.684 -1.62q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516v11.52h26.496z','BULLSEYE':'M36.864 -32.183q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516 2.7 -6.516 6.516 -2.7 6.516 2.7 2.7 6.516zm4.608 0q0 -5.724 -4.05 -9.774t-9.774 -4.05 -9.774 4.05 -4.05 9.774 4.05 9.774 9.774 4.05 9.774 -4.05 4.05 -9.774zm4.608 0q0 7.632 -5.4 13.032t-13.032 5.4 -13.032 -5.4 -5.4 -13.032 5.4 -13.032 13.032 -5.4 13.032 5.4 5.4 13.032zm4.608 0q0 -4.68 -1.836 -8.946t-4.914 -7.344 -7.344 -4.914 -8.946 -1.836 -8.946 1.836 -7.344 4.914 -4.914 7.344 -1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946 -1.836 7.344 -4.914 4.914 -7.344 1.836 -8.946zm4.608 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','ELLIPSIS_H':'M13.824 -37.943v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-6.912q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h6.912q1.44 0 2.448 1.008t1.008 2.448zm18.432 0v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-6.912q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h6.912q1.44 0 2.448 1.008t1.008 2.448zm18.432 0v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-6.912q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h6.912q1.44 0 2.448 1.008t1.008 2.448z','ELLIPSIS_V':'M13.824 -19.511v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-6.912q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h6.912q1.44 0 2.448 1.008t1.008 2.448zm0 -18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-6.912q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h6.912q1.44 0 2.448 1.008t1.008 2.448zm0 -18.432v6.912q0 1.44 -1.008 2.448t-2.448 1.008h-6.912q-1.44 0 -2.448 -1.008t-1.008 -2.448v-6.912q0 -1.44 1.008 -2.448t2.448 -1.008h6.912q1.44 0 2.448 1.008t1.008 2.448z','RSS_SQUARE':'M18.432 -18.359q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm12.636 3.384q-0.468 -8.352 -6.372 -14.256t-14.256 -6.372q-0.504 -0.036 -0.864 0.324t-0.36 0.828v4.608q0 0.468 0.306 0.792t0.774 0.36q5.544 0.396 9.504 4.356t4.356 9.504q0.036 0.468 0.36 0.774t0.792 0.306h4.608q0.468 0 0.828 -0.36t0.324 -0.864zm13.824 0.036q-0.18 -5.544 -2.016 -10.71t-5.022 -9.36 -7.38 -7.38 -9.36 -5.022 -10.71 -2.016q-0.504 -0.036 -0.828 0.324 -0.36 0.36 -0.36 0.828v4.608q0 0.468 0.324 0.792t0.792 0.36q7.344 0.252 13.608 4.014t10.026 10.026 4.014 13.608q0.036 0.468 0.36 0.792t0.792 0.324h4.608q0.468 0 0.828 -0.36 0.396 -0.324 0.324 -0.828zm10.404 -34.524v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','PLAY_CIRCLE':'M27.648 -59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878 -3.708 13.878 -10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708zm13.824 29.628q1.152 -0.648 1.152 -1.98t-1.152 -1.98l-19.584 -11.52q-1.116 -0.684 -2.304 -0.036 -1.152 0.684 -1.152 2.016v23.04q0 1.332 1.152 2.016 0.576 0.288 1.152 0.288 0.612 0 1.152 -0.324z','TICKET':'M36.864 -48.167l11.376 11.376 -20.592 20.592 -11.376 -11.376zm-7.596 35.244l22.248 -22.248q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-13.032 -13.032q-0.648 -0.648 -1.62 -0.648t-1.62 0.648l-22.248 22.248q-0.684 0.684 -0.684 1.62t0.684 1.62l13.032 13.032q0.648 0.648 1.62 0.648t1.62 -0.648zm32.004 -22.932l-32.652 32.688q-1.332 1.332 -3.258 1.332t-3.258 -1.332l-4.536 -4.536q2.016 -2.016 2.016 -4.896t-2.016 -4.896 -4.896 -2.016 -4.896 2.016l-4.5 -4.536q-1.332 -1.332 -1.332 -3.258t1.332 -3.258l32.652 -32.616q1.332 -1.332 3.258 -1.332t3.258 1.332l4.5 4.5q-2.016 2.016 -2.016 4.896t2.016 4.896 4.896 2.016 4.896 -2.016l4.536 4.5q1.332 1.332 1.332 3.258t-1.332 3.258z','MINUS_SQUARE':'M46.08 -29.879v-4.608q0 -0.936 -0.684 -1.62t-1.62 -0.684h-32.256q-0.936 0 -1.62 0.684t-0.684 1.62v4.608q0 0.936 0.684 1.62t1.62 0.684h32.256q0.936 0 1.62 -0.684t0.684 -1.62zm9.216 -19.584v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','MINUS_SQUARE_O':'M41.472 -35.639v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-29.952q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h29.952q0.504 0 0.828 0.324t0.324 0.828zm4.608 16.128v-29.952q0 -2.376 -1.692 -4.068t-4.068 -1.692h-29.952q-2.376 0 -4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068 -1.692t1.692 -4.068zm4.608 -29.952v29.952q0 4.284 -3.042 7.326t-7.326 3.042h-29.952q-4.284 0 -7.326 -3.042t-3.042 -7.326v-29.952q0 -4.284 3.042 -7.326t7.326 -3.042h29.952q4.284 0 7.326 3.042t3.042 7.326z','LEVEL_UP':'M36.648 -42.731q-0.648 1.332 -2.088 1.332h-6.912v31.104q0 0.504 -0.324 0.828t-0.828 0.324h-25.344q-0.756 0 -1.044 -0.648 -0.288 -0.72 0.144 -1.26l5.76 -6.912q0.324 -0.396 0.9 -0.396h11.52v-23.04h-6.912q-1.44 0 -2.088 -1.332 -0.612 -1.332 0.324 -2.448l11.52 -13.824q0.648 -0.792 1.764 -0.792t1.764 0.792l11.52 13.824q0.972 1.152 0.324 2.448z','LEVEL_DOWN':'M1.152 -55.223h25.344q0.468 0 0.81 0.342t0.342 0.846v31.068h6.912q1.44 0 2.088 1.332t-0.324 2.484l-11.52 13.824q-0.648 0.792 -1.764 0.792t-1.764 -0.792l-11.52 -13.824q-0.936 -1.116 -0.324 -2.484 0.648 -1.332 2.088 -1.332h6.912v-23.04h-11.52q-0.504 0 -0.9 -0.396l-5.76 -6.912q-0.468 -0.504 -0.144 -1.224 0.324 -0.684 1.044 -0.684z','CHECK_SQUARE':'M24.66 -17.675l22.104 -22.104q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-3.672 -3.672q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-16.812 16.812 -7.596 -7.596q-0.684 -0.684 -1.62 -0.684t-1.62 0.684l-3.672 3.672q-0.684 0.684 -0.684 1.62t0.684 1.62l12.888 12.888q0.684 0.684 1.62 0.684t1.62 -0.684zm30.636 -31.788v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','PENCIL_SQUARE':'M14.544 -24.551l5.472 5.472 -1.872 1.872h-2.016v-3.456h-3.456v-2.016zm14.904 -14.04q0.504 0.468 -0.108 1.08l-10.476 10.476q-0.612 0.612 -1.08 0.108 -0.504 -0.468 0.108 -1.08l10.476 -10.476q0.612 -0.612 1.08 -0.108zm-9.864 24.84l19.584 -19.584 -10.368 -10.368 -19.584 19.584v10.368h10.368zm21.888 -21.888l3.312 -3.312q1.008 -1.008 1.008 -2.448t-1.008 -2.448l-5.472 -5.472q-1.008 -1.008 -2.448 -1.008t-2.448 1.008l-3.312 3.312zm13.824 -13.824v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','EXTERNAL_LINK_SQUARE':'M46.08 -31.031v-17.28q0 -0.936 -0.684 -1.62t-1.62 -0.684h-17.28q-1.512 0 -2.124 1.404 -0.612 1.476 0.504 2.52l5.184 5.184 -19.224 19.224q-0.684 0.684 -0.684 1.62t0.684 1.62l3.672 3.672q0.684 0.684 1.62 0.684t1.62 -0.684l19.224 -19.224 5.184 5.184q0.648 0.684 1.62 0.684 0.432 0 0.9 -0.18 1.404 -0.612 1.404 -2.124zm9.216 -18.432v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','SHARE_SQUARE':'M36.18 -24.803l12.672 -12.672q0.684 -0.684 0.684 -1.62t-0.684 -1.62l-12.672 -12.672q-1.08 -1.116 -2.484 -0.504 -1.44 0.612 -1.44 2.124v5.76q-4.284 0 -7.776 0.702t-5.85 1.836 -4.104 2.844 -2.754 3.438 -1.602 3.924 -0.774 4.014 -0.18 3.978q0 6.516 6.012 14.544 0.36 0.432 0.9 0.432 0.252 0 0.468 -0.108 0.792 -0.324 0.684 -1.188 -1.584 -12.744 2.232 -17.028 1.656 -1.872 4.68 -2.718t8.064 -0.846v5.76q0 1.512 1.44 2.124 0.432 0.18 0.864 0.18 0.936 0 1.62 -0.684zm19.116 -24.66v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','COMPASS':'M23.04 -25.271l9.216 -4.608 -9.216 -4.608v9.216zm13.824 -21.276v19.512l-18.432 9.216v-19.512zm10.368 14.364q0 -5.328 -2.628 -9.828t-7.128 -7.128 -9.828 -2.628 -9.828 2.628 -7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828zm8.064 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','TOGGLE_DOWN':'M41.22 -40.139q0.648 1.26 -0.18 2.376l-11.52 16.128q-0.684 0.972 -1.872 0.972t-1.872 -0.972l-11.52 -16.128q-0.828 -1.116 -0.18 -2.376 0.612 -1.26 2.052 -1.26h23.04q1.44 0 2.052 1.26zm4.86 25.236v-34.56q0 -0.468 -0.342 -0.81t-0.81 -0.342h-34.56q-0.468 0 -0.81 0.342t-0.342 0.81v34.56q0 0.468 0.342 0.81t0.81 0.342h34.56q0.468 0 0.81 -0.342t0.342 -0.81zm9.216 -34.56v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','TOGGLE_UP':'M41.22 -24.227q-0.612 1.26 -2.052 1.26h-23.04q-1.44 0 -2.052 -1.26 -0.648 -1.26 0.18 -2.376l11.52 -16.128q0.684 -0.972 1.872 -0.972t1.872 0.972l11.52 16.128q0.828 1.116 0.18 2.376zm4.86 9.324v-34.56q0 -0.468 -0.342 -0.81t-0.81 -0.342h-34.56q-0.468 0 -0.81 0.342t-0.342 0.81v34.56q0 0.468 0.342 0.81t0.81 0.342h34.56q0.468 0 0.81 -0.342t0.342 -0.81zm9.216 -34.56v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','TOGGLE_RIGHT':'M39.168 -32.183q0 1.188 -0.972 1.872l-16.128 11.52q-1.116 0.828 -2.376 0.18 -1.26 -0.612 -1.26 -2.052v-23.04q0 -1.44 1.26 -2.052 1.26 -0.648 2.376 0.18l16.128 11.52q0.972 0.684 0.972 1.872zm6.912 17.28v-34.56q0 -0.504 -0.324 -0.828t-0.828 -0.324h-34.56q-0.504 0 -0.828 0.324t-0.324 0.828v34.56q0 0.504 0.324 0.828t0.828 0.324h34.56q0.504 0 0.828 -0.324t0.324 -0.828zm9.216 -34.56v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','EURO':'M35.136 -17.387l1.26 5.724q0.108 0.432 -0.108 0.81t-0.612 0.522l-0.18 0.036q-0.144 0.072 -0.378 0.126t-0.576 0.162 -0.774 0.198 -0.918 0.18 -1.08 0.18 -1.206 0.162 -1.314 0.108 -1.386 0.036q-8.424 0 -14.724 -4.698t-8.568 -12.654h-3.42q-0.468 0 -0.81 -0.342t-0.342 -0.81v-4.068q0 -0.468 0.342 -0.81t0.81 -0.342h2.376q-0.072 -2.052 0.036 -3.78h-2.412q-0.504 0 -0.828 -0.324t-0.324 -0.828v-4.104q0 -0.504 0.324 -0.828t0.828 -0.324h3.528q2.412 -7.56 8.766 -12.168t14.418 -4.608q3.672 0 6.984 0.828 0.396 0.108 0.72 0.54 0.216 0.396 0.108 0.864l-1.548 5.724q-0.108 0.468 -0.504 0.702t-0.864 0.09l-0.144 -0.036 -0.414 -0.09 -0.63 -0.126 -0.81 -0.126 -0.936 -0.108 -1.044 -0.09 -1.062 -0.036q-4.536 0 -8.136 2.304t-5.4 6.336h16.848q0.576 0 0.9 0.432 0.36 0.432 0.252 0.936l-0.864 4.104q-0.18 0.936 -1.152 0.936h-17.568q-0.108 1.332 0 3.78h16.524q0.54 0 0.9 0.432 0.324 0.432 0.216 0.972l-0.864 4.032q-0.072 0.396 -0.396 0.666t-0.72 0.27h-13.932q1.728 4.212 5.382 6.678t8.226 2.466q0.648 0 1.296 -0.054t1.206 -0.126 1.062 -0.162 0.882 -0.18 0.666 -0.162l0.432 -0.108 0.18 -0.072q0.468 -0.18 0.936 0.072 0.432 0.252 0.54 0.756z','GBP':'M36.72 -23.507v13.212q0 0.504 -0.324 0.828t-0.828 0.324h-34.416q-0.504 0 -0.828 -0.324t-0.324 -0.828v-5.4q0 -0.468 0.342 -0.81t0.81 -0.342h3.492v-13.788h-3.42q-0.504 0 -0.828 -0.342t-0.324 -0.81v-4.716q0 -0.504 0.324 -0.828t0.828 -0.324h3.42v-8.028q0 -6.156 4.446 -10.152t11.322 -3.996q6.66 0 12.06 4.5 0.324 0.288 0.36 0.738t-0.252 0.81l-3.708 4.572q-0.324 0.396 -0.792 0.432 -0.468 0.072 -0.828 -0.252 -0.18 -0.18 -0.936 -0.684t-2.484 -1.152 -3.348 -0.648q-3.06 0 -4.932 1.692t-1.872 4.428v7.74h10.98q0.468 0 0.81 0.324t0.342 0.828v4.716q0 0.468 -0.342 0.81t-0.81 0.342h-10.98v13.644h14.904v-6.516q0 -0.468 0.324 -0.81t0.828 -0.342h5.832q0.504 0 0.828 0.342t0.324 0.81z','USD':'M35.208 -21.779q0 5.508 -3.582 9.486t-9.306 4.914v6.3q0 0.504 -0.324 0.828t-0.828 0.324h-4.86q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.3q-2.376 -0.324 -4.59 -1.116t-3.654 -1.602 -2.664 -1.728 -1.674 -1.35 -0.63 -0.648q-0.612 -0.756 -0.072 -1.476l3.708 -4.86q0.252 -0.36 0.828 -0.432 0.54 -0.072 0.864 0.324l0.072 0.072q4.068 3.564 8.748 4.5 1.332 0.288 2.664 0.288 2.916 0 5.13 -1.548t2.214 -4.392q0 -1.008 -0.54 -1.908t-1.206 -1.512 -2.106 -1.35 -2.376 -1.152 -2.88 -1.17q-1.404 -0.576 -2.214 -0.9t-2.214 -0.954 -2.25 -1.116 -2.034 -1.278 -1.926 -1.53 -1.566 -1.764 -1.278 -2.088 -0.756 -2.394 -0.306 -2.808q0 -4.968 3.528 -8.712t9.18 -4.824v-6.48q0 -0.468 0.342 -0.81t0.81 -0.342h4.86q0.504 0 0.828 0.324t0.324 0.828v6.336q2.052 0.216 3.978 0.828t3.132 1.206 2.286 1.35 1.404 1.044 0.54 0.504q0.612 0.648 0.18 1.368l-2.916 5.256q-0.288 0.54 -0.828 0.576 -0.504 0.108 -0.972 -0.252 -0.108 -0.108 -0.522 -0.432t-1.404 -0.954 -2.106 -1.152 -2.682 -0.936 -3.078 -0.414q-3.42 0 -5.58 1.548t-2.16 3.996q0 0.936 0.306 1.728t1.062 1.494 1.422 1.188 2.016 1.116 2.178 0.972 2.52 0.99q1.908 0.72 2.916 1.134t2.736 1.26 2.718 1.53 2.232 1.8 1.908 2.286 1.134 2.754 0.468 3.384z','RUPEE':'M32.328 -47.519v3.672q0 0.504 -0.324 0.828t-0.828 0.324h-6.048q-0.828 5.184 -4.644 8.424t-9.936 3.96q6.012 6.408 16.524 19.296 0.504 0.576 0.144 1.224 -0.288 0.648 -1.044 0.648h-7.02q-0.576 0 -0.9 -0.432 -11.016 -13.212 -17.928 -20.556 -0.324 -0.324 -0.324 -0.792v-4.572q0 -0.468 0.342 -0.81t0.81 -0.342h4.032q4.752 0 7.65 -1.548t3.69 -4.5h-15.372q-0.504 0 -0.828 -0.324t-0.324 -0.828v-3.672q0 -0.504 0.324 -0.828t0.828 -0.324h14.868q-2.052 -4.068 -9.648 -4.068h-5.22q-0.468 0 -0.81 -0.342t-0.342 -0.81v-4.788q0 -0.504 0.324 -0.828t0.828 -0.324h29.952q0.504 0 0.828 0.324t0.324 0.828v3.672q0 0.504 -0.324 0.828t-0.828 0.324h-8.388q1.692 2.196 2.304 5.184h6.156q0.504 0 0.828 0.324t0.324 0.828z','YEN':'M21.708 -9.143h-6.192q-0.468 0 -0.81 -0.324t-0.342 -0.828v-11.88h-10.368q-0.468 0 -0.81 -0.324t-0.342 -0.828v-3.708q0 -0.468 0.342 -0.81t0.81 -0.342h10.368v-3.06h-10.368q-0.468 0 -0.81 -0.324t-0.342 -0.828v-3.744q0 -0.468 0.342 -0.81t0.81 -0.342h7.704l-11.556 -20.808q-0.288 -0.576 0 -1.152 0.36 -0.576 1.008 -0.576h6.984q0.684 0 1.044 0.648l7.74 15.3q0.684 1.368 2.016 4.5 0.36 -0.864 1.098 -2.448t0.99 -2.196l6.876 -15.12q0.288 -0.684 1.044 -0.684h6.876q0.612 0 0.972 0.576 0.324 0.504 0.036 1.116l-11.268 20.844h7.74q0.468 0 0.81 0.342t0.342 0.81v3.744q0 0.504 -0.342 0.828t-0.81 0.324h-10.44v3.06h10.44q0.468 0 0.81 0.342t0.342 0.81v3.708q0 0.504 -0.342 0.828t-0.81 0.324h-10.44v11.88q0 0.468 -0.342 0.81t-0.81 0.342z','RUBLE':'M37.548 -44.099q0 -3.6 -2.34 -5.832t-6.156 -2.232h-11.52v16.128h11.52q3.816 0 6.156 -2.232t2.34 -5.832zm8.532 0q0 6.948 -4.554 11.34t-11.754 4.392h-12.24v4.248h18.18q0.504 0 0.828 0.324t0.324 0.828v4.608q0 0.504 -0.324 0.828t-0.828 0.324h-18.18v6.912q0 0.504 -0.342 0.828t-0.81 0.324h-6.012q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912h-8.064q-0.504 0 -0.828 -0.324t-0.324 -0.828v-4.608q0 -0.504 0.324 -0.828t0.828 -0.324h8.064v-4.248h-8.064q-0.504 0 -0.828 -0.324t-0.324 -0.828v-5.364q0 -0.468 0.324 -0.81t0.828 -0.342h8.064v-22.644q0 -0.504 0.324 -0.828t0.828 -0.324h19.404q7.2 0 11.754 4.392t4.554 11.34z','WON':'M18.504 -21.419l2.916 -10.764h-5.724l2.7 10.8 0.036 0.108 0.036 0.108 0.018 -0.126 0.018 -0.126zm4.176 -15.372l1.26 -4.608h-10.512l1.152 4.608h8.1zm6.912 0h5.004l-1.26 -4.608h-2.52zm16.164 15.408l2.808 -10.8h-5.832l2.916 10.764 0.018 0.126 0.054 0.126 0.018 -0.108 0.018 -0.108zm3.996 -15.408l1.188 -4.608h-10.692l1.224 4.608h8.28zm14.76 1.152v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-7.668l-5.904 22.176q-0.252 0.864 -1.116 0.864h-5.724q-0.864 0 -1.116 -0.864l-5.976 -22.176h-7.524l-6.012 22.176q-0.252 0.864 -1.116 0.864h-5.724q-0.396 0 -0.702 -0.252t-0.378 -0.612l-5.76 -22.176h-7.488q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h6.3l-1.188 -4.608h-5.112q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h3.924l-3.204 -12.384q-0.18 -0.54 0.18 -1.008 0.36 -0.432 0.936 -0.432h4.932q0.936 0 1.116 0.864l3.24 12.96h12.924l3.492 -12.96q0.252 -0.864 1.116 -0.864h4.536q0.864 0 1.116 0.864l3.528 12.96h13.14l3.348 -12.96q0.18 -0.864 1.116 -0.864h4.932q0.576 0 0.936 0.432 0.36 0.468 0.18 1.008l-3.276 12.384h3.996q0.504 0 0.828 0.324t0.324 0.828v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-5.22l-1.224 4.608h6.444q0.504 0 0.828 0.324t0.324 0.828z','BTC':'M42.012 -41.399q0.648 6.552 -4.716 9.288 4.212 1.008 6.3 3.708t1.62 7.704q-0.252 2.556 -1.17 4.5t-2.322 3.204 -3.492 2.106 -4.374 1.242 -5.238 0.54v9.18h-5.544v-9.036q-2.88 0 -4.392 -0.036v9.072h-5.544v-9.18q-0.648 0 -1.944 -0.018t-1.98 -0.018h-7.2l1.116 -6.588h3.996q1.8 0 2.088 -1.836v-14.472h0.576q-0.216 -0.036 -0.576 -0.036v-10.332q-0.468 -2.448 -3.204 -2.448h-3.996v-5.904l7.632 0.036q2.304 0 3.492 -0.036v-9.072h5.544v8.892q2.952 -0.072 4.392 -0.072v-8.82h5.544v9.072q2.844 0.252 5.04 0.81t4.068 1.62 2.97 2.808 1.314 4.122zm-7.74 19.62q0 -1.296 -0.54 -2.304t-1.332 -1.656 -2.07 -1.098 -2.358 -0.666 -2.664 -0.324 -2.484 -0.108 -2.322 0.036 -1.71 0.036v12.168q0.288 0 1.332 0.018t1.728 0.018 1.908 -0.054 2.106 -0.144 2.052 -0.306 1.998 -0.504 1.71 -0.756 1.422 -1.08 0.882 -1.44 0.342 -1.836zm-2.556 -17.136q0 -1.188 -0.45 -2.106t-1.098 -1.512 -1.728 -1.008 -1.98 -0.594 -2.214 -0.288 -2.088 -0.09 -1.944 0.036 -1.422 0.018v11.052q0.18 0 1.242 0.018t1.674 0 1.8 -0.072 1.98 -0.198 1.854 -0.396 1.746 -0.666 1.332 -0.972 0.972 -1.386 0.324 -1.836z','FILE':'M36.864 -46.007v-16.992q0.792 0.504 1.296 1.008l14.688 14.688q0.504 0.504 1.008 1.296h-16.992zm-4.608 1.152q0 1.44 1.008 2.448t2.448 1.008h19.584v38.016q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h28.8v19.584z','FILE_TEXT':'M52.848 -47.303q0.504 0.504 1.008 1.296h-16.992v-16.992q0.792 0.504 1.296 1.008zm-17.136 5.904h19.584v38.016q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h28.8v19.584q0 1.44 1.008 2.448t2.448 1.008zm5.76 26.496v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-25.344q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h25.344q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-25.344q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h25.344q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-25.344q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h25.344q0.504 0 0.828 -0.324t0.324 -0.828z','SORT_ALPHA_ASC':'M42.876 -49.751h6.372l-2.592 -7.848 -0.432 -1.692q-0.072 -0.576 -0.072 -0.72h-0.144l-0.108 0.72q0 0.036 -0.126 0.648t-0.27 1.044zm-16.38 37.152q0 0.432 -0.36 0.864l-11.484 11.484q-0.36 0.324 -0.828 0.324 -0.432 0 -0.828 -0.324l-11.52 -11.52q-0.54 -0.576 -0.252 -1.26 0.288 -0.72 1.08 -0.72h6.912v-49.536q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v49.536h6.912q0.504 0 0.828 0.324t0.324 0.828zm30.096 4.284v8.388h-21.024v-3.24l13.284 -19.044q0.432 -0.648 0.756 -0.972l0.396 -0.324v-0.108l-0.234 0.018 -0.27 0.018q-0.432 0.108 -1.08 0.108h-8.352v4.14h-4.32v-8.244h20.412v3.204l-13.284 19.08q-0.216 0.288 -0.756 0.936l-0.396 0.396v0.072l0.504 -0.072q0.324 -0.072 1.08 -0.072h8.928v-4.284h4.356zm3.204 -32.292v3.816h-10.368v-3.816h2.7l-1.692 -5.184h-8.748l-1.692 5.184h2.7v3.816h-10.332v-3.816h2.52l8.28 -23.832h5.832l8.28 23.832h2.52z','SORT_ALPHA_DESC':'M42.876 -12.887h6.372l-2.592 -7.848 -0.432 -1.692q-0.072 -0.576 -0.072 -0.72h-0.144l-0.108 0.72q0 0.036 -0.126 0.648t-0.27 1.044zm-16.38 0.288q0 0.432 -0.36 0.864l-11.484 11.484q-0.36 0.324 -0.828 0.324 -0.432 0 -0.828 -0.324l-11.52 -11.52q-0.54 -0.576 -0.252 -1.26 0.288 -0.72 1.08 -0.72h6.912v-49.536q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v49.536h6.912q0.504 0 0.828 0.324t0.324 0.828zm33.3 8.856v3.816h-10.368v-3.816h2.7l-1.692 -5.184h-8.748l-1.692 5.184h2.7v3.816h-10.332v-3.816h2.52l8.28 -23.832h5.832l8.28 23.832h2.52zm-3.204 -41.436v8.388h-21.024v-3.24l13.284 -19.044q0.432 -0.648 0.756 -0.972l0.396 -0.324v-0.108l-0.234 0.018 -0.27 0.018q-0.432 0.108 -1.08 0.108h-8.352v4.14h-4.32v-8.244h20.412v3.204l-13.284 19.08q-0.216 0.288 -0.756 0.936l-0.396 0.36v0.108l0.504 -0.108q0.324 -0.036 1.08 -0.036h8.928v-4.284h4.356z','SORT_AMOUNT_ASC':'M26.496 -12.599q0 0.432 -0.36 0.864l-11.484 11.484q-0.36 0.324 -0.828 0.324 -0.432 0 -0.828 -0.324l-11.52 -11.52q-0.54 -0.576 -0.252 -1.26 0.288 -0.72 1.08 -0.72h6.912v-49.536q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v49.536h6.912q0.504 0 0.828 0.324t0.324 0.828zm38.016 4.608v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-29.952q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h29.952q0.504 0 0.828 0.324t0.324 0.828zm-6.912 -18.432v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-23.04q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h23.04q0.504 0 0.828 0.324t0.324 0.828zm-6.912 -18.432v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-16.128q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h16.128q0.504 0 0.828 0.324t0.324 0.828zm-6.912 -18.432v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-9.216q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h9.216q0.504 0 0.828 0.324t0.324 0.828z','SORT_AMOUNT_DESC':'M43.776 -7.991v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-9.216q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h9.216q0.504 0 0.828 0.324t0.324 0.828zm-17.28 -4.608q0 0.432 -0.36 0.864l-11.484 11.484q-0.36 0.324 -0.828 0.324 -0.432 0 -0.828 -0.324l-11.52 -11.52q-0.54 -0.576 -0.252 -1.26 0.288 -0.72 1.08 -0.72h6.912v-49.536q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v49.536h6.912q0.504 0 0.828 0.324t0.324 0.828zm24.192 -13.824v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-16.128q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h16.128q0.504 0 0.828 0.324t0.324 0.828zm6.912 -18.432v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-23.04q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h23.04q0.504 0 0.828 0.324t0.324 0.828zm6.912 -18.432v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-29.952q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h29.952q0.504 0 0.828 0.324t0.324 0.828z','SORT_NUMERIC_ASC':'M48.456 -17.171q0 -2.268 -1.584 -4.176t-3.708 -1.908q-1.872 0 -2.988 1.332t-1.116 3.384 1.314 3.42 3.762 1.368q1.8 0 3.06 -0.972t1.26 -2.448zm-21.96 4.572q0 0.432 -0.36 0.864l-11.484 11.484q-0.36 0.324 -0.828 0.324 -0.432 0 -0.828 -0.324l-11.52 -11.52q-0.54 -0.576 -0.252 -1.26 0.288 -0.72 1.08 -0.72h6.912v-49.536q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v49.536h6.912q0.504 0 0.828 0.324t0.324 0.828zm27 -2.484q0 2.232 -0.468 4.374t-1.476 4.104 -2.448 3.438 -3.546 2.358 -4.59 0.882q-2.232 0 -3.888 -0.576 -0.864 -0.288 -1.512 -0.54l1.404 -4.068q0.54 0.252 1.116 0.396 1.332 0.468 2.7 0.468 3.024 0 4.842 -2.106t2.394 -5.238h-0.072q-0.756 0.828 -2.214 1.332t-3.042 0.504q-3.816 0 -6.228 -2.574t-2.412 -6.21q0 -3.78 2.592 -6.408t6.516 -2.628q4.428 0 7.38 3.402t2.952 9.09zm-1.08 -25.812v4.104h-16.884v-4.104h6.012v-15.552l0.018 -0.684 0.018 -0.612v-0.576h-0.072l-0.252 0.432q-0.288 0.468 -0.936 1.116l-2.232 2.088 -2.952 -3.096 6.912 -6.66h4.428v23.544h5.94z','SORT_NUMERIC_DESC':'M48.456 -54.035q0 -2.268 -1.584 -4.176t-3.708 -1.908q-1.872 0 -2.988 1.332t-1.116 3.384 1.314 3.42 3.762 1.368q1.8 0 3.06 -0.972t1.26 -2.448zm-21.96 41.436q0 0.432 -0.36 0.864l-11.484 11.484q-0.36 0.324 -0.828 0.324 -0.432 0 -0.828 -0.324l-11.52 -11.52q-0.54 -0.576 -0.252 -1.26 0.288 -0.72 1.08 -0.72h6.912v-49.536q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v49.536h6.912q0.504 0 0.828 0.324t0.324 0.828zm25.92 8.568v4.104h-16.884v-4.104h6.012v-15.552l0.018 -0.684 0.018 -0.612v-0.576h-0.072l-0.252 0.432q-0.288 0.468 -0.936 1.116l-2.232 2.088 -2.952 -3.096 6.912 -6.66h4.428v23.544h5.94zm1.08 -47.916q0 2.232 -0.468 4.374t-1.476 4.104 -2.448 3.438 -3.546 2.358 -4.59 0.882q-2.232 0 -3.888 -0.576 -0.864 -0.288 -1.512 -0.54l1.404 -4.068q0.54 0.252 1.116 0.396 1.332 0.468 2.7 0.468 3.024 0 4.842 -2.106t2.394 -5.238h-0.072q-0.756 0.828 -2.214 1.332t-3.042 0.504q-3.816 0 -6.228 -2.574t-2.412 -6.21q0 -3.78 2.592 -6.408t6.516 -2.628q4.428 0 7.38 3.402t2.952 9.09z','THUMBS_UP':'M9.216 -16.055q0 -0.936 -0.684 -1.62t-1.62 -0.684q-0.972 0 -1.638 0.684t-0.666 1.62q0 0.972 0.666 1.638t1.638 0.666q0.936 0 1.62 -0.666t0.684 -1.638zm5.76 -18.432v23.04q0 0.936 -0.684 1.62t-1.62 0.684h-10.368q-0.936 0 -1.62 -0.684t-0.684 -1.62v-23.04q0 -0.936 0.684 -1.62t1.62 -0.684h10.368q0.936 0 1.62 0.684t0.684 1.62zm42.624 0q0 3.096 -1.98 5.364 0.54 1.584 0.54 2.736 0.108 2.736 -1.548 4.932 0.612 2.016 0 4.212 -0.54 2.052 -1.944 3.384 0.324 4.032 -1.764 6.516 -2.304 2.736 -7.092 2.808h-4.644q-2.376 0 -5.184 -0.558t-4.374 -1.044 -4.338 -1.422q-4.428 -1.548 -5.688 -1.584 -0.936 -0.036 -1.62 -0.702t-0.684 -1.602v-23.076q0 -0.9 0.648 -1.566t1.548 -0.738q0.864 -0.072 2.736 -2.124t3.636 -4.356q2.448 -3.132 3.636 -4.32 0.648 -0.648 1.116 -1.728t0.63 -1.746 0.486 -2.178q0.252 -1.404 0.45 -2.196t0.702 -1.872 1.224 -1.8q0.684 -0.684 1.62 -0.684 1.656 0 2.97 0.378t2.16 0.936 1.44 1.458 0.864 1.62 0.432 1.8 0.18 1.62 0.018 1.404q0 1.368 -0.342 2.736t-0.684 2.16 -0.99 2.016q-0.108 0.216 -0.36 0.648t-0.396 0.792 -0.288 0.864h9.972q2.808 0 4.86 2.052t2.052 4.86z','THUMBS_DOWN':'M9.216 -43.703q0 0.936 -0.684 1.62t-1.62 0.684q-0.972 0 -1.638 -0.684t-0.666 -1.62q0 -0.972 0.666 -1.638t1.638 -0.666q0.936 0 1.62 0.666t0.684 1.638zm5.76 18.432v-23.04q0 -0.936 -0.684 -1.62t-1.62 -0.684h-10.368q-0.936 0 -1.62 0.684t-0.684 1.62v23.04q0 0.936 0.684 1.62t1.62 0.684h10.368q0.936 0 1.62 -0.684t0.684 -1.62zm40.644 -5.364q1.98 2.196 1.98 5.364 -0.036 2.808 -2.07 4.86t-4.842 2.052h-9.972q0.144 0.504 0.288 0.864t0.396 0.792 0.36 0.648q0.648 1.332 0.972 2.052t0.684 2.106 0.36 2.754q0 0.864 -0.018 1.404t-0.18 1.62 -0.432 1.8 -0.864 1.62 -1.44 1.458 -2.16 0.936 -2.97 0.378q-0.936 0 -1.62 -0.684 -0.72 -0.72 -1.224 -1.8t-0.702 -1.872 -0.45 -2.196q-0.324 -1.512 -0.486 -2.178t-0.63 -1.746 -1.116 -1.728q-1.188 -1.188 -3.636 -4.32 -1.764 -2.304 -3.636 -4.356t-2.736 -2.124q-0.9 -0.072 -1.548 -0.738t-0.648 -1.566v-23.076q0 -0.936 0.684 -1.602t1.62 -0.702q1.26 -0.036 5.688 -1.584 2.772 -0.936 4.338 -1.422t4.374 -1.044 5.184 -0.558h4.644q4.788 0.072 7.092 2.808 2.088 2.484 1.764 6.516 1.404 1.332 1.944 3.384 0.612 2.196 0 4.212 1.656 2.196 1.548 4.932 0 1.152 -0.54 2.736z','YOUTUBE_SQUARE':'M33.084 -17.531v-5.652q0 -1.8 -1.044 -1.8 -0.612 0 -1.188 0.576v8.064q0.576 0.576 1.188 0.576 1.044 0 1.044 -1.764zm6.624 -4.392h2.376v-1.224q0 -1.836 -1.188 -1.836t-1.188 1.836v1.224zm-20.556 -9.576v2.52h-2.88v15.228h-2.664v-15.228h-2.808v-2.52h8.352zm7.236 4.536v13.212h-2.412v-1.44q-1.404 1.62 -2.736 1.62 -1.188 0 -1.512 -1.008 -0.216 -0.576 -0.216 -1.944v-10.44h2.376v9.72q0 0.864 0.036 0.936 0.036 0.54 0.54 0.54 0.72 0 1.512 -1.116v-10.08h2.412zm9.072 3.996v5.256q0 1.872 -0.252 2.628 -0.432 1.512 -1.908 1.512 -1.26 0 -2.448 -1.476v1.296h-2.412v-17.748h2.412v5.796q1.152 -1.44 2.448 -1.44 1.476 0 1.908 1.512 0.252 0.756 0.252 2.664zm9.036 4.644v0.324q0 1.044 -0.072 1.548 -0.108 0.792 -0.54 1.44 -0.972 1.44 -2.88 1.44 -1.872 0 -2.916 -1.368 -0.756 -0.972 -0.756 -3.096v-4.644q0 -2.124 0.72 -3.096 1.044 -1.368 2.88 -1.368t2.808 1.368q0.756 1.008 0.756 3.096v2.736h-4.788v2.34q0 1.836 1.224 1.836 0.864 0 1.08 -0.936 0 -0.036 0.018 -0.252t0.018 -0.594v-0.774h2.448zm-16.236 -29.664v5.616q0 1.836 -1.152 1.836t-1.152 -1.836v-5.616q0 -1.872 1.152 -1.872t1.152 1.872zm19.188 25.668q0 -6.372 -0.684 -9.36 -0.36 -1.584 -1.548 -2.646t-2.736 -1.242q-4.896 -0.54 -14.832 -0.54 -9.9 0 -14.796 0.54 -1.584 0.18 -2.754 1.242t-1.53 2.646q-0.72 3.132 -0.72 9.36 0 6.336 0.72 9.36 0.36 1.548 1.53 2.628t2.718 1.26q4.932 0.54 14.832 0.54t14.832 -0.54q1.548 -0.18 2.718 -1.26t1.53 -2.628q0.72 -3.024 0.72 -9.36zm-27.18 -23.436l3.24 -10.656h-2.7l-1.836 7.02 -1.908 -7.02h-2.808l0.864 2.484 0.828 2.484q1.26 3.708 1.656 5.688v7.236h2.664v-7.236zm10.404 2.916v-4.68q0 -2.088 -0.756 -3.132 -1.044 -1.368 -2.808 -1.368 -1.836 0 -2.808 1.368 -0.756 1.044 -0.756 3.132v4.68q0 2.088 0.756 3.132 0.972 1.368 2.808 1.368 1.764 0 2.808 -1.368 0.756 -0.972 0.756 -3.132zm6.516 4.32h2.412v-13.32h-2.412v10.188q-0.792 1.116 -1.512 1.116 -0.54 0 -0.576 -0.576 -0.036 -0.072 -0.036 -0.936v-9.792h-2.412v10.548q0 1.332 0.216 1.98 0.396 0.972 1.548 0.972 1.296 0 2.772 -1.62v1.44zm18.108 -10.944v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','YOUTUBE':'M34.956 -19.655v7.596q0 2.412 -1.404 2.412 -0.828 0 -1.62 -0.792v-10.836q0.792 -0.792 1.62 -0.792 1.404 0 1.404 2.412zm12.168 0.036v1.656h-3.24v-1.656q0 -2.448 1.62 -2.448t1.62 2.448zm-34.776 -7.848h3.852v-3.384h-11.232v3.384h3.78v20.484h3.6v-20.484zm10.368 20.484h3.204v-17.784h-3.204v13.608q-1.08 1.512 -2.052 1.512 -0.648 0 -0.756 -0.756 -0.036 -0.108 -0.036 -1.26v-13.104h-3.204v14.076q0 1.764 0.288 2.628 0.432 1.332 2.088 1.332 1.728 0 3.672 -2.196v1.944zm15.444 -5.328v-7.092q0 -2.628 -0.324 -3.564 -0.612 -2.016 -2.556 -2.016 -1.8 0 -3.348 1.944v-7.812h-3.204v23.868h3.204v-1.728q1.62 1.98 3.348 1.98 1.944 0 2.556 -1.98 0.324 -0.972 0.324 -3.6zm12.168 -0.36v-0.468h-3.276q0 1.836 -0.072 2.196 -0.252 1.296 -1.44 1.296 -1.656 0 -1.656 -2.484v-3.132h6.444v-3.708q0 -2.844 -0.972 -4.176 -1.404 -1.836 -3.816 -1.836 -2.448 0 -3.852 1.836 -1.008 1.332 -1.008 4.176v6.228q0 2.844 1.044 4.176 1.404 1.836 3.888 1.836 2.592 0 3.888 -1.908 0.648 -0.972 0.756 -1.944 0.072 -0.324 0.072 -2.088zm-21.888 -32.868v-7.56q0 -2.484 -1.548 -2.484t-1.548 2.484v7.56q0 2.52 1.548 2.52t1.548 -2.52zm25.884 27.036q0 8.424 -0.936 12.6 -0.504 2.124 -2.088 3.564t-3.672 1.656q-6.624 0.756 -19.98 0.756t-19.98 -0.756q-2.088 -0.216 -3.69 -1.656t-2.07 -3.564q-0.936 -4.032 -0.936 -12.6 0 -8.424 0.936 -12.6 0.504 -2.124 2.088 -3.564t3.708 -1.692q6.588 -0.72 19.944 -0.72t19.98 0.72q2.088 0.252 3.69 1.692t2.07 3.564q0.936 4.032 0.936 12.6zm-35.928 -45.936h3.672l-4.356 14.364v9.756h-3.6v-9.756q-0.504 -2.664 -2.196 -7.632 -1.332 -3.708 -2.34 -6.732h3.816l2.556 9.468zm13.32 11.988v6.3q0 2.916 -1.008 4.248 -1.332 1.836 -3.816 1.836 -2.412 0 -3.78 -1.836 -1.008 -1.368 -1.008 -4.248v-6.3q0 -2.88 1.008 -4.212 1.368 -1.836 3.78 -1.836 2.484 0 3.816 1.836 1.008 1.332 1.008 4.212zm12.06 -5.832v17.964h-3.276v-1.98q-1.908 2.232 -3.708 2.232 -1.656 0 -2.124 -1.332 -0.288 -0.864 -0.288 -2.7v-14.184h3.276v13.212q0 1.188 0.036 1.26 0.108 0.792 0.756 0.792 0.972 0 2.052 -1.548v-13.716h3.276z','XING':'M21.492 -40.427q-0.36 0.648 -9.252 16.416 -0.972 1.656 -2.34 1.656h-8.604q-0.756 0 -1.116 -0.612t0 -1.296l9.108 -16.128v-0.036l-5.796 -10.044q-0.432 -0.792 -0.036 -1.332 0.324 -0.54 1.152 -0.54h8.604q1.44 0 2.376 1.62zm29.016 -23.112q0.396 0.576 0 1.332l-19.008 33.624v0.036l12.096 22.14q0.396 0.72 0.036 1.332 -0.36 0.54 -1.152 0.54h-8.604q-1.512 0 -2.376 -1.62l-12.204 -22.392q0.648 -1.152 19.116 -33.912 0.9 -1.62 2.304 -1.62h8.676q0.792 0 1.116 0.54z','XING_SQUARE':'M24.66 -36.899q0 -0.036 -4.536 -7.992 -0.756 -1.224 -1.872 -1.224h-6.624q-0.648 0 -0.936 0.396 -0.252 0.432 0.036 1.044l4.5 7.776v0.036l-7.056 12.456q-0.324 0.504 0 1.008 0.288 0.468 0.864 0.468h6.66q1.116 0 1.8 -1.296zm22.464 -17.892q-0.252 -0.432 -0.864 -0.432h-6.732q-1.08 0 -1.764 1.26l-14.796 26.244q0.036 0.072 9.432 17.316 0.72 1.26 1.872 1.26h6.624q0.648 0 0.9 -0.432 0.288 -0.468 -0.036 -1.008l-9.36 -17.136v-0.036l14.724 -26.028q0.288 -0.576 0 -1.008zm8.172 5.328v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','YOUTUBE_PLAY':'M46.08 -32.183q0 -1.332 -1.08 -1.944l-18.432 -11.52q-1.116 -0.72 -2.34 -0.072 -1.188 0.648 -1.188 2.016v23.04q0 1.368 1.188 2.016 0.576 0.288 1.116 0.288 0.72 0 1.224 -0.36l18.432 -11.52q1.08 -0.612 1.08 -1.944zm18.432 0q0 3.456 -0.036 5.4t-0.306 4.914 -0.81 5.31q-0.576 2.628 -2.484 4.428t-4.464 2.088q-7.992 0.9 -24.156 0.9t-24.156 -0.9q-2.556 -0.288 -4.482 -2.088t-2.502 -4.428q-0.504 -2.34 -0.774 -5.31t-0.306 -4.914 -0.036 -5.4 0.036 -5.4 0.306 -4.914 0.81 -5.31q0.576 -2.628 2.484 -4.428t4.464 -2.088q7.992 -0.9 24.156 -0.9t24.156 0.9q2.556 0.288 4.482 2.088t2.502 4.428q0.504 2.34 0.774 5.31t0.306 4.914 0.036 5.4z','DROPBOX':'M14.472 -38.987l17.784 10.98 -12.312 10.26 -17.64 -11.484zm35.496 19.98v3.888l-17.64 10.548v0.036l-0.036 -0.036 -0.036 0.036v-0.036l-17.604 -10.548v-3.888l5.292 3.456 12.312 -10.224v-0.072l0.036 0.036 0.036 -0.036v0.072l12.348 10.224zm-30.024 -41.184l12.312 10.26 -17.784 10.944 -12.168 -9.72zm30.096 21.204l12.168 9.756 -17.604 11.484 -12.348 -10.26zm-5.436 -21.204l17.604 11.484 -12.168 9.72 -17.784 -10.944z','STACK_OVERFLOW':'M33.408 -14.003v5.436l-25.452 0.036v-5.436zm8.676 -12.456v25.236l-0.036 1.26v0.036h-40.752l-1.26 -0.036h-0.036v-26.496h4.356v22.248h33.408v-22.248h4.32zm-33.408 3.168l25.344 2.34 -0.468 5.4 -25.38 -2.34zm2.448 -11.376l24.588 6.588 -1.404 5.256 -24.588 -6.588zm5.868 -12.564l21.924 12.96 -2.772 4.68 -21.924 -12.96zm12.96 -11.916l14.328 21.06 -4.464 3.06 -14.364 -21.024zm16.308 -5.292l4.356 25.092 -5.364 0.936 -4.356 -25.092z','INSTAGRAM':'M49.032 -13.103v-23.328h-4.86q0.72 2.268 0.72 4.716 0 4.536 -2.304 8.37t-6.264 6.066 -8.64 2.232q-7.092 0 -12.132 -4.878t-5.04 -11.79q0 -2.448 0.72 -4.716h-5.076v23.328q0 0.936 0.63 1.566t1.566 0.63h38.484q0.9 0 1.548 -0.63t0.648 -1.566zm-10.224 -19.188q0 -4.464 -3.258 -7.614t-7.866 -3.15q-4.572 0 -7.83 3.15t-3.258 7.614 3.258 7.614 7.83 3.15q4.608 0 7.866 -3.15t3.258 -7.614zm10.224 -12.96v-5.94q0 -1.008 -0.72 -1.746t-1.764 -0.738h-6.264q-1.044 0 -1.764 0.738t-0.72 1.746v5.94q0 1.044 0.72 1.764t1.764 0.72h6.264q1.044 0 1.764 -0.72t0.72 -1.764zm6.264 -7.488v41.112q0 2.916 -2.088 5.004t-5.004 2.088h-41.112q-2.916 0 -5.004 -2.088t-2.088 -5.004v-41.112q0 -2.916 2.088 -5.004t5.004 -2.088h41.112q2.916 0 5.004 2.088t2.088 5.004z','FLICKR':'M44.928 -59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56zm-19.8 27.648q0 -3.168 -2.232 -5.4t-5.4 -2.232 -5.4 2.232 -2.232 5.4 2.232 5.4 5.4 2.232 5.4 -2.232 2.232 -5.4zm20.304 0q0 -3.168 -2.232 -5.4t-5.4 -2.232 -5.4 2.232 -2.232 5.4 2.232 5.4 5.4 2.232 5.4 -2.232 2.232 -5.4z','ADN':'M27.648 -42.047l7.236 11.016h-14.472zm13.14 19.08h3.384l-16.524 -24.876 -16.524 24.876h3.384l3.744 -5.76h18.792zm14.508 -9.216q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','BITBUCKET':'M29.34 -33.515q0.288 2.268 -1.818 3.636t-4.014 0.216q-1.404 -0.612 -1.926 -2.088t-0.018 -2.952 1.872 -2.088q1.296 -0.648 2.61 -0.432t2.304 1.278 0.99 2.43zm3.996 -0.756q-0.504 -3.852 -4.068 -5.904t-7.092 -0.468q-2.268 1.008 -3.618 3.186t-1.242 4.662q0.144 3.276 2.79 5.58t5.958 2.016q3.276 -0.288 5.472 -3.024t1.8 -6.048zm8.604 -19.512q-0.72 -0.972 -2.016 -1.602t-2.088 -0.792 -2.556 -0.45q-10.476 -1.692 -20.376 0.072 -1.548 0.252 -2.376 0.432t-1.98 0.792 -1.8 1.548q1.08 1.008 2.736 1.638t2.646 0.792 3.15 0.414q8.208 1.044 16.128 0.036 2.268 -0.288 3.222 -0.432t2.61 -0.774 2.7 -1.674zm2.052 37.26q-0.288 0.936 -0.558 2.754t-0.504 3.024 -1.026 2.52 -2.088 2.034q-3.096 1.728 -6.822 2.574t-7.272 0.792 -7.254 -0.666q-1.656 -0.288 -2.934 -0.648t-2.754 -0.972 -2.628 -1.566 -1.872 -2.214q-0.9 -3.456 -2.052 -10.512l0.216 -0.576 0.648 -0.324q8.028 5.328 18.234 5.328t18.27 -5.328q0.756 0.216 0.864 0.828t-0.18 1.62 -0.288 1.332zm6.516 -34.596q-0.936 6.012 -3.996 23.58 -0.18 1.08 -0.972 2.016t-1.566 1.44 -1.962 1.116q-9.072 4.536 -21.96 3.168 -8.928 -0.972 -14.184 -5.004 -0.54 -0.432 -0.918 -0.954t-0.612 -1.26 -0.324 -1.224 -0.216 -1.422 -0.198 -1.26q-0.324 -1.8 -0.954 -5.4t-1.008 -5.814 -0.846 -5.31 -0.792 -5.688q0.108 -0.936 0.63 -1.746t1.134 -1.35 1.62 -1.08 1.656 -0.81 1.728 -0.666q4.5 -1.656 11.268 -2.304 13.644 -1.332 24.336 1.8 5.58 1.656 7.74 4.392 0.576 0.72 0.594 1.836t-0.198 1.944z','BITBUCKET_SQUARE':'M30.528 -33.119q0 -1.548 -1.476 -2.376t-2.772 -0.036q-1.548 0.72 -1.53 2.61t1.566 2.538q1.404 0.828 2.916 -0.144t1.296 -2.592zm2.88 -0.576q0.288 2.376 -1.296 4.356t-3.96 2.196 -4.284 -1.44 -2.016 -4.068q-0.072 -1.764 0.918 -3.348t2.61 -2.304q2.52 -1.116 5.094 0.36t2.934 4.248zm6.192 -14.076q-0.72 0.756 -1.926 1.224t-1.908 0.576 -2.286 0.288q-5.58 0.72 -11.664 0 -1.584 -0.216 -2.268 -0.342t-1.89 -0.576 -1.962 -1.17q0.468 -0.684 1.296 -1.116t1.44 -0.558 1.692 -0.306q7.128 -1.26 14.688 -0.036 1.188 0.18 1.836 0.306t1.548 0.576 1.404 1.134zm1.512 26.856q0 -0.252 0.198 -0.954t0.108 -1.152 -0.63 -0.594q-5.796 3.816 -13.14 3.816t-13.176 -3.816l-0.432 0.216 -0.18 0.432q0.936 5.544 1.476 7.56 1.692 2.916 7.344 3.888 8.964 1.656 15.408 -1.908 1.224 -0.684 1.764 -1.854t0.81 -3.078 0.45 -2.556zm4.68 -24.948q0.324 -1.908 -0.288 -2.7 -1.548 -1.98 -5.58 -3.168 -7.776 -2.268 -17.532 -1.296 -4.752 0.432 -8.136 1.656 -1.368 0.54 -2.142 0.9t-1.692 1.224 -1.062 1.944q0.288 2.448 0.684 4.968t1.044 6.156 0.864 4.932q0.036 0.18 0.18 1.116t0.252 1.296 0.432 0.972 0.792 1.008q3.78 2.88 10.224 3.6 9.324 1.008 15.84 -2.268 0.864 -0.468 1.422 -0.828t1.116 -1.044 0.702 -1.44q1.728 -9.612 2.88 -17.028zm9.504 -3.6v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','TUMBLR':'M33.984 -16.595l2.88 8.532q-0.828 1.26 -3.996 2.376t-6.372 1.152q-3.744 0.072 -6.858 -0.936t-5.13 -2.664 -3.42 -3.816 -1.998 -4.32 -0.594 -4.248v-19.584h-6.048v-7.74q2.592 -0.936 4.644 -2.502t3.276 -3.24 2.088 -3.672 1.224 -3.564 0.54 -3.186q0.036 -0.18 0.162 -0.306t0.27 -0.126h8.784v15.264h11.988v9.072h-12.024v18.648q0 1.08 0.234 2.016t0.81 1.89 1.782 1.494 2.934 0.504q2.808 -0.072 4.824 -1.044z','TUMBLR_SQUARE':'M40.896 -11.843l-2.232 -6.588q-1.584 0.792 -3.708 0.792 -1.296 0.036 -2.232 -0.378t-1.386 -1.134 -0.63 -1.458 -0.18 -1.566v-14.328h9.252v-6.984h-9.216v-11.736h-6.768q-0.288 0 -0.324 0.36 -0.18 1.584 -0.63 3.132t-1.404 3.42 -2.772 3.42 -4.266 2.448v5.94h4.68v15.048q0 2.052 0.774 4.14t2.34 3.996 4.356 3.078 6.354 1.098q2.484 -0.036 4.914 -0.9t3.078 -1.8zm14.4 -37.62v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','LONG_ARROW_DOWN':'M27.54 -17.675q0.288 0.684 -0.18 1.26l-12.6 13.824q-0.36 0.36 -0.828 0.36 -0.504 0 -0.864 -0.36l-12.78 -13.824q-0.468 -0.576 -0.18 -1.26 0.324 -0.684 1.044 -0.684h8.064v-44.928q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828v44.928h8.064q0.756 0 1.044 0.684z','LONG_ARROW_UP':'M27.54 -46.691q-0.324 0.684 -1.044 0.684h-8.064v44.928q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-44.928h-8.064q-0.756 0 -1.044 -0.684t0.18 -1.26l12.6 -13.824q0.36 -0.36 0.828 -0.36 0.504 0 0.864 0.36l12.78 13.824q0.468 0.576 0.18 1.26z','LONG_ARROW_LEFT':'M64.512 -35.639v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-44.928v8.064q0 0.756 -0.684 1.044t-1.26 -0.18l-13.824 -12.6q-0.36 -0.36 -0.36 -0.828 0 -0.504 0.36 -0.864l13.824 -12.744q0.576 -0.504 1.26 -0.216 0.684 0.324 0.684 1.044v8.064h44.928q0.504 0 0.828 0.324t0.324 0.828z','LONG_ARROW_RIGHT':'M62.208 -32.291q0 0.504 -0.36 0.864l-13.824 12.744q-0.576 0.504 -1.26 0.216 -0.684 -0.324 -0.684 -1.044v-8.064h-44.928q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h44.928v-8.064q0 -0.756 0.684 -1.044t1.26 0.18l13.824 12.6q0.36 0.36 0.36 0.828z','APPLE':'M50.148 -20.699q-1.404 4.5 -4.428 9 -4.644 7.056 -9.252 7.056 -1.764 0 -5.04 -1.152 -3.096 -1.152 -5.436 -1.152 -2.196 0 -5.112 1.188 -2.916 1.224 -4.752 1.224 -5.472 0 -10.836 -9.324 -5.292 -9.396 -5.292 -18.108 0 -8.208 4.068 -13.464 4.032 -5.184 10.224 -5.184 2.592 0 6.372 1.08 3.744 1.08 4.968 1.08 1.62 0 5.148 -1.224 3.672 -1.224 6.228 -1.224 4.284 0 7.668 2.34 1.872 1.296 3.744 3.6 -2.844 2.412 -4.104 4.248 -2.34 3.384 -2.34 7.452 0 4.464 2.484 8.028t5.688 4.536zm-13.536 -42.228q0 2.196 -1.044 4.896 -1.08 2.7 -3.348 4.968 -1.944 1.944 -3.888 2.592 -1.332 0.396 -3.744 0.612 0.108 -5.364 2.808 -9.252 2.664 -3.852 9 -5.328l0.09 0.396 0.09 0.396 0.018 0.36 0.018 0.36z','WINDOWS':'M24.552 -28.223v23.436l-24.552 -3.384v-20.052h24.552zm0 -26.748v23.724h-24.552v-20.34zm35.352 26.748v28.296l-32.652 -4.5v-23.796h32.652zm0 -31.608v28.584h-32.652v-24.084z','ANDROID':'M17.748 -47.051q0.576 0 0.99 -0.414t0.414 -0.99 -0.414 -0.99 -0.99 -0.414 -0.972 0.414 -0.396 0.99 0.396 0.99 0.972 0.414zm15.192 0q0.576 0 0.972 -0.414t0.396 -0.99 -0.396 -0.99 -0.972 -0.414 -0.99 0.414 -0.414 0.99 0.414 0.99 0.99 0.414zm-29.232 6.624q1.512 0 2.592 1.08t1.08 2.592v15.48q0 1.548 -1.062 2.628t-2.61 1.08 -2.628 -1.08 -1.08 -2.628v-15.48q0 -1.512 1.08 -2.592t2.628 -1.08zm38.16 0.684v23.976q0 1.656 -1.152 2.808t-2.772 1.152h-2.7v8.172q0 1.548 -1.08 2.628t-2.628 1.08 -2.628 -1.08 -1.08 -2.628v-8.172h-4.968v8.172q0 1.548 -1.08 2.628t-2.628 1.08q-1.512 0 -2.592 -1.08t-1.08 -2.628l-0.036 -8.172h-2.664q-1.656 0 -2.808 -1.152t-1.152 -2.808v-23.976h33.048zm-8.352 -14.58q3.852 1.98 6.156 5.526t2.304 7.758h-33.3q0 -4.212 2.304 -7.758t6.192 -5.526l-2.556 -4.716q-0.252 -0.468 0.18 -0.72 0.468 -0.216 0.72 0.216l2.592 4.752q3.42 -1.512 7.236 -1.512t7.236 1.512l2.592 -4.752q0.252 -0.432 0.72 -0.216 0.432 0.252 0.18 0.72zm17.172 17.568v15.48q0 1.548 -1.08 2.628t-2.628 1.08q-1.512 0 -2.592 -1.08t-1.08 -2.628v-15.48q0 -1.548 1.08 -2.61t2.592 -1.062q1.548 0 2.628 1.062t1.08 2.61z','LINUX':'M23.868 -49.643q-0.396 0.036 -0.558 0.378t-0.306 0.342q-0.18 0.036 -0.18 -0.18 0 -0.432 0.684 -0.54h0.36zm3.132 0.504q-0.144 0.036 -0.414 -0.234t-0.63 -0.162q0.864 -0.396 1.152 0.072 0.108 0.216 -0.108 0.324zm-12.636 15.372q-0.144 -0.036 -0.216 0.108t-0.162 0.45 -0.198 0.486 -0.36 0.468q-0.252 0.36 -0.036 0.432 0.144 0.036 0.45 -0.252t0.45 -0.648l0.072 -0.252 0.072 -0.216 0.054 -0.162 0.018 -0.144v-0.108l-0.036 -0.09 -0.108 -0.072zm30.78 12.924q0 -0.648 -1.98 -1.512 0.144 -0.54 0.27 -0.99t0.18 -0.936 0.108 -0.774 0.018 -0.81 -0.036 -0.702 -0.126 -0.792 -0.144 -0.738 -0.18 -0.9 -0.198 -0.954q-0.36 -1.728 -1.692 -3.708t-2.592 -2.7q0.864 0.72 2.052 2.988 3.132 5.832 1.944 10.008 -0.396 1.44 -1.8 1.512 -1.116 0.144 -1.386 -0.666t-0.288 -3.006 -0.414 -3.852q-0.324 -1.404 -0.702 -2.484t-0.702 -1.638 -0.558 -0.882 -0.468 -0.54 -0.27 -0.252q-0.504 -2.232 -1.116 -3.708t-1.062 -2.016 -0.846 -1.188 -0.54 -1.44q-0.144 -0.756 0.216 -1.926t0.162 -1.782 -1.602 -0.9q-0.54 -0.108 -1.602 -0.648t-1.278 -0.576q-0.288 -0.036 -0.396 -0.936t0.288 -1.836 1.296 -0.972q1.332 -0.108 1.836 1.08t0.144 2.088q-0.396 0.684 -0.072 0.954t1.08 0.018q0.468 -0.144 0.468 -1.296v-1.332q-0.18 -1.08 -0.486 -1.8t-0.756 -1.098 -0.846 -0.54 -0.972 -0.27q-3.852 0.288 -3.204 4.824 0 0.54 -0.036 0.54 -0.324 -0.324 -1.062 -0.378t-1.188 0.018 -0.558 -0.18q0.036 -2.052 -0.576 -3.24t-1.62 -1.224q-0.972 -0.036 -1.494 0.99t-0.594 2.142q-0.036 0.54 0.126 1.332t0.468 1.35 0.558 0.486q0.36 -0.108 0.576 -0.504 0.144 -0.324 -0.252 -0.288 -0.252 0 -0.558 -0.522t-0.342 -1.206q-0.036 -0.792 0.324 -1.332t1.224 -0.504q0.612 0 0.972 0.756t0.342 1.404 -0.054 0.792q-0.792 0.54 -1.116 1.044 -0.288 0.432 -0.99 0.846t-0.738 0.45q-0.468 0.504 -0.558 0.972t0.27 0.648q0.504 0.288 0.9 0.702t0.576 0.684 0.666 0.468 1.278 0.234q1.692 0.072 3.672 -0.54 0.072 -0.036 0.828 -0.252t1.242 -0.378 1.062 -0.468 0.756 -0.63q0.324 -0.504 0.72 -0.288 0.18 0.108 0.234 0.306t-0.108 0.432 -0.594 0.342q-0.72 0.216 -2.034 0.774t-1.638 0.702q-1.584 0.684 -2.52 0.828 -0.9 0.18 -2.844 -0.072 -0.36 -0.072 -0.324 0.072t0.612 0.684q0.9 0.828 2.412 0.792 0.612 -0.036 1.296 -0.252t1.296 -0.504 1.206 -0.63 1.08 -0.612 0.882 -0.432 0.63 -0.09 0.306 0.396q0 0.072 -0.036 0.162t-0.144 0.18 -0.216 0.162 -0.306 0.18 -0.324 0.162 -0.36 0.18 -0.342 0.162q-1.008 0.504 -2.43 1.584t-2.394 1.548 -1.764 0.036q-0.756 -0.396 -2.268 -2.628 -0.792 -1.116 -0.9 -0.792 -0.036 0.108 -0.036 0.36 0 0.9 -0.54 2.034t-1.062 1.998 -0.756 2.088 0.414 2.268q-0.828 0.216 -2.25 3.24t-1.71 5.076q-0.072 0.648 -0.054 2.484t-0.198 2.124q-0.288 0.864 -1.044 0.108 -1.152 -1.116 -1.296 -3.384 -0.072 -1.008 0.144 -2.016 0.144 -0.684 -0.036 -0.648l-0.144 0.18q-1.296 2.34 0.36 5.976 0.18 0.432 0.9 1.008t0.864 0.72q0.72 0.828 3.744 3.258t3.348 2.754q0.576 0.54 0.63 1.368t-0.504 1.548 -1.638 0.828q0.288 0.54 1.044 1.602t1.008 1.944 0.252 2.538q1.656 -0.864 0.252 -3.312 -0.144 -0.288 -0.378 -0.576t-0.342 -0.432 -0.072 -0.216q0.108 -0.18 0.468 -0.342t0.72 0.09q1.656 1.872 5.976 1.296 4.788 -0.54 6.372 -3.132 0.828 -1.368 1.224 -1.08 0.432 0.216 0.36 1.872 -0.036 0.9 -0.828 3.312 -0.324 0.828 -0.216 1.35t0.864 0.558q0.108 -0.684 0.522 -2.772t0.486 -3.24q0.072 -0.756 -0.234 -2.646t-0.27 -3.492 0.828 -2.538q0.54 -0.648 1.836 -0.648 0.036 -1.332 1.242 -1.908t2.61 -0.378 2.16 0.81zm-22.608 -29.772q0.108 -0.612 -0.09 -1.08t-0.414 -0.54q-0.324 -0.072 -0.324 0.252 0.072 0.18 0.18 0.216 0.36 0 0.252 0.54 -0.108 0.72 0.288 0.72 0.108 0 0.108 -0.108zm15.084 7.092q-0.072 -0.288 -0.234 -0.414t-0.468 -0.18 -0.522 -0.198q-0.18 -0.108 -0.342 -0.288t-0.252 -0.288 -0.198 -0.234 -0.144 -0.144 -0.144 0.054q-0.504 0.576 0.252 1.566t1.404 1.134q0.324 0.036 0.522 -0.288t0.126 -0.72zm-6.408 -7.668q0 -0.396 -0.18 -0.702t-0.396 -0.45 -0.324 -0.108q-0.504 0.036 -0.252 0.252l0.144 0.072q0.504 0.144 0.648 1.116 0 0.108 0.288 -0.072zm1.944 -8.388q0 -0.072 -0.09 -0.18t-0.324 -0.252 -0.342 -0.216q-0.54 -0.54 -0.864 -0.54 -0.324 0.036 -0.414 0.27t-0.036 0.468 -0.018 0.45q-0.036 0.144 -0.216 0.378t-0.216 0.324 0.108 0.306q0.144 0.108 0.288 0t0.396 -0.324 0.54 -0.324q0.036 -0.036 0.324 -0.036t0.54 -0.072 0.324 -0.252zm20.34 48.276q0.72 0.432 1.116 0.882t0.432 0.864 -0.09 0.81 -0.558 0.792 -0.846 0.702 -1.08 0.666 -1.134 0.594 -1.152 0.558 -0.972 0.468q-1.368 0.684 -3.078 2.016t-2.718 2.304q-0.612 0.576 -2.448 0.702t-3.204 -0.522q-0.648 -0.324 -1.062 -0.846t-0.594 -0.918 -0.792 -0.702 -1.692 -0.342q-1.584 -0.036 -4.68 -0.036 -0.684 0 -2.052 0.054t-2.088 0.09q-1.584 0.036 -2.862 0.54t-1.926 1.08 -1.566 1.026 -1.926 0.414q-1.044 -0.036 -3.996 -1.116t-5.256 -1.548q-0.684 -0.144 -1.836 -0.342t-1.8 -0.324 -1.422 -0.342 -1.206 -0.522 -0.612 -0.702q-0.36 -0.828 0.252 -2.394t0.648 -1.962q0.036 -0.576 -0.144 -1.44t-0.36 -1.53 -0.162 -1.314 0.378 -0.972q0.504 -0.432 2.052 -0.504t2.16 -0.432q1.08 -0.648 1.512 -1.26t0.432 -1.836q0.756 2.628 -1.152 3.816 -1.152 0.72 -2.988 0.54 -1.224 -0.108 -1.548 0.36 -0.468 0.54 0.18 2.052 0.072 0.216 0.288 0.648t0.306 0.648 0.162 0.612 0.036 0.792q0 0.54 -0.612 1.764t-0.504 1.728q0.108 0.612 1.332 0.936 0.72 0.216 3.042 0.666t3.582 0.738q0.864 0.216 2.664 0.792t2.97 0.828 1.998 0.144q1.548 -0.216 2.322 -1.008t0.828 -1.728 -0.27 -2.106 -0.684 -1.872 -0.72 -1.314q-4.356 -6.84 -6.084 -8.712 -2.448 -2.664 -4.068 -1.44 -0.396 0.324 -0.54 -0.54 -0.108 -0.576 -0.072 -1.368 0.036 -1.044 0.36 -1.872t0.864 -1.692 0.792 -1.512q0.288 -0.756 0.954 -2.592t1.062 -2.808 1.08 -2.196 1.404 -1.944q3.96 -5.148 4.464 -7.02 -0.432 -4.032 -0.576 -11.16 -0.072 -3.24 0.864 -5.454t3.816 -3.762q1.404 -0.756 3.744 -0.756 1.908 -0.036 3.816 0.486t3.204 1.494q2.052 1.512 3.294 4.374t1.062 5.31q-0.18 3.42 1.08 7.704 1.224 4.068 4.788 7.848 1.98 2.124 3.582 5.868t2.142 6.876q0.288 1.764 0.18 3.042t-0.432 1.998 -0.72 0.792q-0.36 0.072 -0.846 0.684t-0.972 1.278 -1.458 1.206 -2.196 0.504q-0.648 -0.036 -1.134 -0.18t-0.81 -0.486 -0.486 -0.558 -0.414 -0.738 -0.324 -0.702q-0.792 -1.332 -1.476 -1.08t-1.008 1.764 0.252 3.492q0.72 2.52 0.036 7.02 -0.36 2.34 0.648 3.618t2.628 1.188 3.06 -1.278q2.124 -1.764 3.222 -2.394t3.726 -1.53q1.908 -0.648 2.772 -1.314t0.666 -1.242 -0.9 -1.026 -1.854 -0.846q-1.188 -0.396 -1.782 -1.728t-0.54 -2.61 0.558 -1.71q0.036 1.116 0.288 2.034t0.522 1.458 0.738 1.026 0.756 0.684 0.774 0.468 0.594 0.342z','DRIBBBLE':'M36.864 -10.439q-1.512 -8.676 -5.04 -17.928h-0.072l-0.072 0.036q-0.576 0.216 -1.548 0.594t-3.636 1.764 -4.932 2.952 -4.716 4.122 -3.708 5.328l-0.54 -0.396q6.624 5.4 15.048 5.4 4.752 0 9.216 -1.872zm-6.66 -21.852q-0.756 -1.764 -1.908 -3.996 -11.196 3.348 -24.228 3.348 -0.036 0.252 -0.036 0.756 0 4.464 1.584 8.514t4.464 7.254q1.8 -3.204 4.446 -5.994t5.13 -4.482 4.698 -2.916 3.582 -1.728l1.332 -0.468q0.144 -0.036 0.468 -0.126t0.468 -0.162zm-3.852 -7.632q-4.32 -7.668 -8.784 -13.608 -4.968 2.34 -8.424 6.696t-4.608 9.792q10.872 0 21.816 -2.88zm24.624 11.484q-7.56 -2.16 -14.724 -1.044 3.132 8.604 4.608 16.884 3.996 -2.7 6.66 -6.822t3.456 -9.018zm-28.98 -26.676l-0.072 0.036 0.072 -0.036zm21.24 5.22q-6.66 -5.904 -15.588 -5.904 -2.736 0 -5.58 0.684 4.716 6.12 8.856 13.752 2.484 -0.936 4.68 -2.178t3.474 -2.214 2.358 -2.052 1.35 -1.458zm8.028 17.46q-0.108 -8.352 -5.364 -14.76l-0.036 0.036q-0.324 0.432 -0.684 0.882t-1.566 1.602 -2.556 2.178 -3.6 2.34 -4.734 2.322q0.9 1.908 1.584 3.42 0.072 0.216 0.234 0.63t0.27 0.594q1.296 -0.18 2.682 -0.252t2.646 -0.072 2.484 0.054 2.304 0.144 2.034 0.198 1.728 0.234 1.314 0.216 0.9 0.162zm4.032 0.252q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','SKYPE':'M42.228 -26.171q0 -1.8 -0.702 -3.294t-1.746 -2.466 -2.628 -1.764 -2.97 -1.224 -3.15 -0.828l-3.744 -0.864q-1.08 -0.252 -1.584 -0.378t-1.26 -0.414 -1.08 -0.576 -0.594 -0.756 -0.27 -1.08q0 -2.772 5.184 -2.772 1.548 0 2.772 0.432t1.944 1.026 1.368 1.206 1.44 1.044 1.728 0.432q1.692 0 2.718 -1.152t1.026 -2.772q0 -1.98 -2.016 -3.582t-5.112 -2.43 -6.552 -0.828q-2.448 0 -4.752 0.558t-4.302 1.692 -3.204 3.132 -1.206 4.626q0 2.196 0.684 3.834t2.016 2.718 2.88 1.746 3.708 1.17l5.256 1.296q3.24 0.792 4.032 1.296 1.152 0.72 1.152 2.16 0 1.404 -1.44 2.322t-3.78 0.918q-1.836 0 -3.294 -0.576t-2.34 -1.386 -1.638 -1.62 -1.656 -1.386 -1.944 -0.576q-1.8 0 -2.718 1.08t-0.918 2.7q0 3.312 4.392 5.67t10.476 2.358q2.628 0 5.04 -0.666t4.41 -1.926 3.186 -3.366 1.188 -4.734zm13.068 7.812q0 5.724 -4.05 9.774t-9.774 4.05q-4.68 0 -8.424 -2.88 -2.772 0.576 -5.4 0.576 -5.148 0 -9.846 -1.998t-8.1 -5.4 -5.4 -8.1 -1.998 -9.846q0 -2.628 0.576 -5.4 -2.88 -3.744 -2.88 -8.424 0 -5.724 4.05 -9.774t9.774 -4.05q4.68 0 8.424 2.88 2.772 -0.576 5.4 -0.576 5.148 0 9.846 1.998t8.1 5.4 5.4 8.1 1.998 9.846q0 2.628 -0.576 5.4 2.88 3.744 2.88 8.424z','FOURSQUARE':'M36 -48.815l1.332 -6.984q0.18 -0.828 -0.324 -1.44t-1.26 -0.612h-25.632q-0.828 0 -1.386 0.612t-0.558 1.332v39.636q0 0.252 0.216 0.036l10.476 -12.672q0.828 -0.936 1.368 -1.206t1.728 -0.27h8.604q0.792 0 1.332 -0.522t0.648 -1.062q0.864 -4.68 1.332 -6.876 0.144 -0.756 -0.414 -1.44t-1.314 -0.684h-10.584q-1.044 0 -1.728 -0.684t-0.684 -1.728v-1.512q0 -1.044 0.684 -1.71t1.728 -0.666h12.456q0.648 0 1.26 -0.486t0.72 -1.062zm8.172 -7.992q-0.54 2.628 -1.926 9.594t-2.502 12.6 -1.26 6.246q-0.216 0.792 -0.324 1.17t-0.504 1.17 -0.882 1.188 -1.386 0.756 -2.088 0.36h-9.756q-0.468 0 -0.792 0.36 -0.288 0.324 -15.336 17.784 -0.792 0.9 -2.106 1.026t-1.746 -0.198q-1.98 -0.792 -1.98 -3.528v-50.76q0 -1.98 1.368 -3.69t4.32 -1.71h31.968q3.42 0 4.572 1.908t0.36 5.724zm0 0l-5.688 28.44q0.144 -0.612 1.26 -6.246t2.502 -12.6 1.926 -9.594z','TRELLO':'M25.344 -16.055v-36.864q0 -0.504 -0.324 -0.828t-0.828 -0.324h-17.28q-0.504 0 -0.828 0.324t-0.324 0.828v36.864q0 0.504 0.324 0.828t0.828 0.324h17.28q0.504 0 0.828 -0.324t0.324 -0.828zm24.192 -13.824v-23.04q0 -0.504 -0.324 -0.828t-0.828 -0.324h-17.28q-0.504 0 -0.828 0.324t-0.324 0.828v23.04q0 0.504 0.324 0.828t0.828 0.324h17.28q0.504 0 0.828 -0.324t0.324 -0.828zm5.76 -27.648v50.688q0 0.936 -0.684 1.62t-1.62 0.684h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-50.688q0 -0.936 0.684 -1.62t1.62 -0.684h50.688q0.936 0 1.62 0.684t0.684 1.62z','FEMALE':'M46.08 -26.423q0 1.44 -1.008 2.448t-2.448 1.008q-1.836 0 -2.88 -1.548l-8.172 -12.276h-1.62v4.752l8.892 14.796q0.324 0.54 0.324 1.188 0 0.936 -0.684 1.62t-1.62 0.684h-6.912v9.792q0 1.656 -1.188 2.844t-2.844 1.188h-5.76q-1.656 0 -2.844 -1.188t-1.188 -2.844v-9.792h-6.912q-0.936 0 -1.62 -0.684t-0.684 -1.62q0 -0.648 0.324 -1.188l8.892 -14.796v-4.752h-1.62l-8.172 12.276q-1.044 1.548 -2.88 1.548 -1.44 0 -2.448 -1.008t-1.008 -2.448q0 -1.044 0.576 -1.908l9.216 -13.824q2.628 -3.852 6.336 -3.852h13.824q3.708 0 6.336 3.852l9.216 13.824q0.576 0.864 0.576 1.908zm-14.976 -28.8q0 3.348 -2.358 5.706t-5.706 2.358 -5.706 -2.358 -2.358 -5.706 2.358 -5.706 5.706 -2.358 5.706 2.358 2.358 5.706z','MALE':'M36.864 -39.095v14.976q0 1.44 -1.008 2.448t-2.448 1.008 -2.448 -1.008 -1.008 -2.448v-12.672h-2.304v32.832q0 1.656 -1.188 2.844t-2.844 1.188 -2.844 -1.188 -1.188 -2.844v-16.704h-2.304v16.704q0 1.656 -1.188 2.844t-2.844 1.188 -2.844 -1.188 -1.188 -2.844v-32.832h-2.304v12.672q0 1.44 -1.008 2.448t-2.448 1.008 -2.448 -1.008 -1.008 -2.448v-14.976q0 -2.88 2.016 -4.896t4.896 -2.016h23.04q2.88 0 4.896 2.016t2.016 4.896zm-10.368 -16.128q0 3.348 -2.358 5.706t-5.706 2.358 -5.706 -2.358 -2.358 -5.706 2.358 -5.706 5.706 -2.358 5.706 2.358 2.358 5.706z','GITTIP':'M27.828 -17.567l12.6 -17.028q0.576 -0.792 0.882 -2.124t-0.216 -3.06 -2.214 -2.844q-1.44 -0.936 -2.988 -0.918t-2.646 0.63 -1.962 1.62q-1.296 1.44 -3.456 1.44 -2.124 0 -3.42 -1.44 -0.864 -1.008 -1.962 -1.62t-2.646 -0.63 -3.024 0.918q-1.656 1.116 -2.178 2.844t-0.216 3.06 0.882 2.124zm27.468 -14.616q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','SUN_O':'M52.992 -32.183q0 -4.212 -1.638 -8.046t-4.428 -6.624 -6.624 -4.428 -8.046 -1.638 -8.046 1.638 -6.624 4.428 -4.428 6.624 -1.638 8.046 1.638 8.046 4.428 6.624 6.624 4.428 8.046 1.638 8.046 -1.638 6.624 -4.428 4.428 -6.624 1.638 -8.046zm9.936 9.972q-0.144 0.54 -0.72 0.72l-10.512 3.456v11.016q0 0.576 -0.468 0.936 -0.54 0.36 -1.044 0.144l-10.512 -3.384 -6.48 8.928q-0.36 0.468 -0.936 0.468t-0.936 -0.468l-6.48 -8.928 -10.512 3.384q-0.504 0.216 -1.044 -0.144 -0.468 -0.36 -0.468 -0.936v-11.016l-10.512 -3.456q-0.576 -0.18 -0.72 -0.72 -0.18 -0.612 0.144 -1.044l6.48 -8.928 -6.48 -8.928q-0.324 -0.468 -0.144 -1.044 0.144 -0.54 0.72 -0.72l10.512 -3.456v-11.016q0 -0.576 0.468 -0.936 0.54 -0.36 1.044 -0.144l10.512 3.384 6.48 -8.928q0.324 -0.432 0.936 -0.432t0.936 0.432l6.48 8.928 10.512 -3.384q0.504 -0.216 1.044 0.144 0.468 0.36 0.468 0.936v11.016l10.512 3.456q0.576 0.18 0.72 0.72 0.18 0.576 -0.144 1.044l-6.48 8.928 6.48 8.928q0.324 0.432 0.144 1.044z','MOON_O':'M45.432 -17.531q-1.944 0.324 -3.96 0.324 -6.552 0 -12.132 -3.24t-8.82 -8.82 -3.24 -12.132q0 -6.912 3.744 -12.852 -7.236 2.16 -11.826 8.244t-4.59 13.824q0 4.68 1.836 8.946t4.914 7.344 7.344 4.914 8.946 1.836q5.184 0 9.846 -2.214t7.938 -6.174zm7.308 -3.06q-3.384 7.308 -10.206 11.682t-14.886 4.374q-5.616 0 -10.728 -2.196t-8.82 -5.904 -5.904 -8.82 -2.196 -10.728q0 -5.508 2.07 -10.53t5.616 -8.694 8.478 -5.922 10.44 -2.466q1.584 -0.072 2.196 1.404 0.648 1.476 -0.54 2.592 -3.096 2.808 -4.734 6.534t-1.638 7.866q0 5.328 2.628 9.828t7.128 7.128 9.828 2.628q4.248 0 8.208 -1.836 1.476 -0.648 2.592 0.468 0.504 0.504 0.63 1.224t-0.162 1.368z','ARCHIVE':'M39.168 -34.487q0 -0.936 -0.684 -1.62t-1.62 -0.684h-9.216q-0.936 0 -1.62 0.684t-0.684 1.62 0.684 1.62 1.62 0.684h9.216q0.936 0 1.62 -0.684t0.684 -1.62zm20.736 -6.912v34.56q0 0.936 -0.684 1.62t-1.62 0.684h-50.688q-0.936 0 -1.62 -0.684t-0.684 -1.62v-34.56q0 -0.936 0.684 -1.62t1.62 -0.684h50.688q0.936 0 1.62 0.684t0.684 1.62zm2.304 -16.128v9.216q0 0.936 -0.684 1.62t-1.62 0.684h-55.296q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684h55.296q0.936 0 1.62 0.684t0.684 1.62z','BUG':'M58.752 -29.879q0 0.936 -0.684 1.62t-1.62 0.684h-8.064q0 6.156 -2.412 10.44l7.488 7.524q0.684 0.684 0.684 1.62t-0.684 1.62q-0.648 0.684 -1.62 0.684t-1.62 -0.684l-7.128 -7.092q-0.18 0.18 -0.54 0.468t-1.512 1.026 -2.34 1.314 -2.952 1.044 -3.492 0.468v-32.256h-4.608v32.256q-1.836 0 -3.654 -0.486t-3.132 -1.188 -2.376 -1.404 -1.566 -1.17l-0.54 -0.504 -6.588 7.452q-0.72 0.756 -1.728 0.756 -0.864 0 -1.548 -0.576 -0.684 -0.648 -0.738 -1.602t0.558 -1.674l7.272 -8.172q-2.088 -4.104 -2.088 -9.864h-8.064q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h8.064v-10.584l-6.228 -6.228q-0.684 -0.684 -0.684 -1.62t0.684 -1.62 1.62 -0.684 1.62 0.684l6.228 6.228h30.384l6.228 -6.228q0.684 -0.684 1.62 -0.684t1.62 0.684 0.684 1.62 -0.684 1.62l-6.228 6.228v10.584h8.064q0.936 0 1.62 0.684t0.684 1.62zm-17.28 -20.736h-23.04q0 -4.788 3.366 -8.154t8.154 -3.366 8.154 3.366 3.366 8.154z','VK':'M69.012 -45.719q0.828 2.304 -5.4 10.584 -0.864 1.152 -2.34 3.06 -2.808 3.6 -3.24 4.716 -0.612 1.476 0.504 2.916 0.612 0.756 2.916 2.952h0.036l0.036 0.036 0.036 0.036 0.072 0.072q5.076 4.716 6.876 7.956 0.108 0.18 0.234 0.45t0.252 0.954 -0.018 1.224 -0.9 0.99 -2.124 0.45l-9.216 0.144q-0.864 0.18 -2.016 -0.18t-1.872 -0.792l-0.72 -0.432q-1.08 -0.756 -2.52 -2.304t-2.466 -2.79 -2.196 -2.088 -2.034 -0.558q-0.108 0.036 -0.288 0.126t-0.612 0.522 -0.774 1.062 -0.612 1.872 -0.234 2.79q0 0.54 -0.126 0.99t-0.27 0.666l-0.144 0.18q-0.648 0.684 -1.908 0.792h-4.14q-2.556 0.144 -5.256 -0.594t-4.734 -1.908 -3.708 -2.376 -2.538 -2.07l-0.9 -0.864q-0.36 -0.36 -0.99 -1.08t-2.574 -3.276 -3.816 -5.436 -4.41 -7.596 -4.698 -9.792q-0.216 -0.576 -0.216 -0.972t0.108 -0.576l0.144 -0.216q0.54 -0.684 2.052 -0.684l9.864 -0.072q0.432 0.072 0.828 0.234t0.576 0.306l0.18 0.108q0.576 0.396 0.864 1.152 0.72 1.8 1.656 3.726t1.476 2.934l0.576 1.044q1.044 2.16 2.016 3.744t1.746 2.466 1.494 1.386 1.224 0.504 0.972 -0.18q0.072 -0.036 0.18 -0.18t0.432 -0.792 0.486 -1.692 0.342 -2.916 0 -4.5q-0.072 -1.44 -0.324 -2.628t-0.504 -1.656l-0.216 -0.432q-0.9 -1.224 -3.06 -1.548 -0.468 -0.072 0.18 -0.864 0.612 -0.684 1.368 -1.08 1.908 -0.936 8.604 -0.864 2.952 0.036 4.86 0.468 0.72 0.18 1.206 0.486t0.738 0.864 0.378 1.152 0.126 1.638 -0.036 1.98 -0.09 2.538 -0.054 2.97q0 0.396 -0.036 1.512t-0.018 1.728 0.126 1.458 0.414 1.404 0.81 0.882q0.288 0.072 0.612 0.144t0.936 -0.396 1.368 -1.242 1.872 -2.412 2.448 -3.87q2.16 -3.744 3.852 -8.1 0.144 -0.36 0.36 -0.63t0.396 -0.378l0.144 -0.108 0.18 -0.09 0.468 -0.108 0.72 -0.018 10.368 -0.072q1.404 -0.18 2.304 0.09t1.116 0.594z','WEIBO':'M24.3 -18.215q0.756 -1.224 0.396 -2.484t-1.62 -1.8q-1.224 -0.504 -2.628 -0.036t-2.16 1.656q-0.792 1.224 -0.468 2.466t1.548 1.818 2.682 0.09 2.25 -1.71zm3.384 -4.356q0.288 -0.468 0.126 -0.954t-0.63 -0.666q-0.504 -0.18 -1.026 0.018t-0.774 0.666q-0.612 1.116 0.468 1.62 0.504 0.18 1.044 -0.018t0.792 -0.666zm6.264 3.852q-1.62 3.672 -5.688 5.4t-8.064 0.432q-3.852 -1.224 -5.31 -4.554t0.234 -6.75q1.692 -3.348 5.454 -5.004t7.578 -0.684q3.996 1.044 5.706 4.302t0.09 6.858zm11.232 -5.76q-0.324 -3.456 -3.204 -6.12t-7.506 -3.924 -9.882 -0.756q-8.028 0.828 -13.302 5.094t-4.77 9.522q0.324 3.456 3.204 6.12t7.506 3.924 9.882 0.756q8.028 -0.828 13.302 -5.094t4.77 -9.522zm11.088 0.144q0 2.448 -1.332 5.022t-3.924 4.932 -6.066 4.23 -8.136 2.988 -9.738 1.116 -9.9 -1.206 -8.658 -3.348 -6.174 -5.436 -2.34 -7.182q0 -4.14 2.502 -8.82t7.11 -9.288q6.084 -6.084 12.294 -8.496t8.874 0.252q2.34 2.304 0.72 7.524 -0.144 0.504 -0.036 0.72t0.36 0.252 0.522 -0.018 0.486 -0.126l0.216 -0.072q5.004 -2.124 8.856 -2.124t5.508 2.196q1.62 2.268 0 6.408 -0.072 0.468 -0.162 0.72t0.162 0.45 0.432 0.27 0.612 0.216q2.052 0.648 3.708 1.692t2.88 2.934 1.224 4.194zm-2.664 -22.464q1.512 1.692 1.962 3.906t-0.234 4.23q-0.288 0.828 -1.062 1.224t-1.602 0.144q-0.828 -0.288 -1.224 -1.062t-0.144 -1.602q0.72 -2.268 -0.864 -3.996t-3.852 -1.26q-0.864 0.18 -1.62 -0.288t-0.9 -1.332q-0.18 -0.864 0.288 -1.602t1.332 -0.918q2.16 -0.468 4.284 0.198t3.636 2.358zm6.516 -5.868q3.132 3.456 4.05 8.01t-0.486 8.694q-0.324 0.972 -1.224 1.44t-1.872 0.144 -1.44 -1.224 -0.18 -1.872q1.008 -2.952 0.36 -6.192t-2.88 -5.688q-2.232 -2.484 -5.328 -3.438t-6.228 -0.306q-1.008 0.216 -1.872 -0.342t-1.08 -1.566 0.342 -1.854 1.566 -1.062q4.428 -0.936 8.784 0.414t7.488 4.842z','RENREN':'M40.788 -7.919q-6.156 3.384 -13.248 3.384 -7.056 0 -13.212 -3.384 4.968 -3.132 8.478 -7.596t4.734 -9.648q1.26 5.184 4.77 9.648t8.478 7.596zm-17.82 -51.408v17.46q0 9.072 -4.554 16.542t-11.898 11.034q-6.516 -7.74 -6.516 -17.82 0 -6.732 3.006 -12.582t8.262 -9.702 11.7 -4.932zm32.328 27.216q0 10.08 -6.516 17.82 -7.344 -3.564 -11.898 -11.034t-4.554 -16.542v-17.46q6.444 1.08 11.7 4.932t8.262 9.702 3.006 12.582z','PAGELINES':'M50.472 -24.731q-1.152 2.88 -2.736 4.968t-3.276 3.186 -3.564 1.674 -3.654 0.522 -3.474 -0.306 -3.114 -0.792 -2.502 -0.99 -1.656 -0.81l-0.612 -0.36q-4.068 8.208 -10.422 12.942t-13.842 4.77q-0.684 0 -1.152 -0.468t-0.468 -1.152 0.468 -1.134 1.152 -0.45q6.228 -0.036 11.61 -3.87t9.054 -10.602q-1.296 0.504 -2.592 0.828t-2.988 0.468 -3.276 -0.09 -3.348 -1.026 -3.312 -2.124 -3.042 -3.6 -2.682 -5.256q4.104 -1.692 7.704 -2.052t6.03 0.27 4.482 2.034 3.186 2.772 2.034 2.952q1.908 -4.716 2.844 -10.476 -0.252 0.036 -0.648 0.09t-1.674 0.09 -2.502 -0.018 -2.934 -0.36 -3.186 -0.828 -3.024 -1.53 -2.7 -2.34 -1.962 -3.402 -1.026 -4.59q2.52 -1.008 4.806 -1.314t4.05 0.036 3.312 1.08 2.646 1.8 2.016 2.196 1.512 2.268 0.99 2.016 0.576 1.422l0.144 0.576q0.432 -4.392 0.432 -7.02 -0.288 -0.216 -0.774 -0.576t-1.764 -1.602 -2.286 -2.574 -1.944 -3.348 -1.188 -4.05 0.432 -4.572 2.52 -4.986q2.628 0.9 4.59 2.214t3.042 2.754 1.728 3.06 0.738 3.204 -0.018 3.078 -0.468 2.754 -0.684 2.232 -0.612 1.512l-0.252 0.54q0.036 0.18 0.036 1.818t-0.036 2.574q0.108 -0.252 0.36 -0.666t1.098 -1.548 1.818 -2.088 2.556 -1.998 3.294 -1.602 4.032 -0.522 4.77 0.864q-0.072 2.808 -0.774 5.094t-1.8 3.762 -2.502 2.574 -2.934 1.638 -3.042 0.864 -2.88 0.342 -2.43 -0.036 -1.674 -0.162l-0.612 -0.108q-0.828 5.292 -2.628 10.188 0.216 -0.252 0.648 -0.666t1.782 -1.476 2.79 -1.89 3.582 -1.512 4.23 -0.72 4.644 0.846 4.932 2.79z','STACK_EXCHANGE':'M45.324 -19.331v2.376q0 3.06 -2.07 5.202t-4.986 2.142h-2.052l-9.36 9.684v-9.684h-19.044q-2.916 0 -4.986 -2.142t-2.07 -5.202v-2.376h44.568zm0 -11.736v9.18h-44.568v-9.18h44.568zm0 -11.808v9.18h-44.568v-9.18h44.568zm0 -5.04v2.412h-44.568v-2.412q0 -3.024 2.07 -5.166t4.986 -2.142h30.456q2.916 0 4.986 2.142t2.07 5.166z','ARROW_CIRCLE_O_RIGHT':'M41.472 -32.183q0 0.504 -0.324 0.828l-11.52 11.52q-0.324 0.324 -0.828 0.324 -0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912h-12.672q-0.468 0 -0.81 -0.342t-0.342 -0.81v-6.912q0 -0.468 0.342 -0.81t0.81 -0.342h12.672v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324q0.432 0 0.864 0.36l11.484 11.484q0.324 0.324 0.324 0.828zm5.76 0q0 -5.328 -2.628 -9.828t-7.128 -7.128 -9.828 -2.628 -9.828 2.628 -7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828zm8.064 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','ARROW_CIRCLE_O_LEFT':'M41.472 -35.639v6.912q0 0.468 -0.342 0.81t-0.81 0.342h-12.672v6.912q0 0.504 -0.324 0.828t-0.828 0.324q-0.432 0 -0.864 -0.36l-11.484 -11.484q-0.324 -0.324 -0.324 -0.828t0.324 -0.828l11.52 -11.52q0.324 -0.324 0.828 -0.324 0.468 0 0.81 0.342t0.342 0.81v6.912h12.672q0.468 0 0.81 0.342t0.342 0.81zm5.76 3.456q0 -5.328 -2.628 -9.828t-7.128 -7.128 -9.828 -2.628 -9.828 2.628 -7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828zm8.064 0q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','TOGGLE_LEFT':'M36.864 -43.703v23.04q0 0.936 -0.684 1.62t-1.62 0.684q-0.72 0 -1.332 -0.432l-16.128 -11.52q-0.972 -0.684 -0.972 -1.872t0.972 -1.872l16.128 -11.52q0.612 -0.432 1.332 -0.432 0.936 0 1.62 0.684t0.684 1.62zm9.216 28.8v-34.56q0 -0.468 -0.342 -0.81t-0.81 -0.342h-34.56q-0.468 0 -0.81 0.342t-0.342 0.81v34.56q0 0.468 0.342 0.81t0.81 0.342h34.56q0.468 0 0.81 -0.342t0.342 -0.81zm9.216 -34.56v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','DOT_CIRCLE_O':'M36.864 -32.183q0 3.816 -2.7 6.516t-6.516 2.7 -6.516 -2.7 -2.7 -6.516 2.7 -6.516 6.516 -2.7 6.516 2.7 2.7 6.516zm-9.216 -19.584q-5.328 0 -9.828 2.628t-7.128 7.128 -2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828 -2.628 7.128 -7.128 2.628 -9.828 -2.628 -9.828 -7.128 -7.128 -9.828 -2.628zm27.648 19.584q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','WHEELCHAIR':'M36.828 -21.707l3.672 7.344q-2.088 6.444 -7.56 10.44t-12.204 3.996q-5.616 0 -10.386 -2.79t-7.56 -7.56 -2.79 -10.386q0 -6.516 3.762 -11.88t9.882 -7.596l0.612 4.716q-4.392 1.944 -7.02 5.958t-2.628 8.802q0 6.66 4.734 11.394t11.394 4.734q4.536 0 8.37 -2.34t5.94 -6.318 1.782 -8.514zm19.728 3.6l2.088 4.104 -9.216 4.608q-0.468 0.252 -1.044 0.252 -1.44 0 -2.052 -1.26l-8.604 -17.172h-16.992q-0.864 0 -1.53 -0.594t-0.774 -1.458l-3.456 -28.044q-0.072 -0.576 0.216 -1.512 0.504 -1.836 2.052 -2.97t3.492 -1.134q2.376 0 4.068 1.692t1.692 4.068q0 2.484 -1.872 4.23t-4.32 1.494l1.332 10.404h15.228v4.608h-14.652l0.576 4.608h16.38q1.44 0 2.052 1.26l8.208 16.38z','VIMEO_SQUARE':'M45.144 -41.507q0.576 -3.06 -0.756 -4.752 -1.872 -2.34 -6.732 -1.62 -0.612 0.108 -1.476 0.45t-2.07 1.098 -2.322 1.746 -2.142 2.52 -1.602 3.294q2.88 -0.252 4.086 0.576t0.954 3.564q-0.18 1.872 -1.872 5.148 -1.548 2.808 -2.556 3.564 -1.584 1.152 -3.132 -0.504 -0.828 -0.864 -1.35 -2.322t-0.684 -2.628 -0.36 -3.024 -0.306 -2.574q-0.828 -4.644 -1.224 -5.904 -0.432 -1.332 -1.278 -2.484t-1.818 -1.44q-2.052 -0.576 -4.572 0.9 -1.944 1.152 -4.914 3.816t-4.41 3.672v0.252q0.576 0.288 0.918 0.936t0.774 0.72q0.756 0.108 1.962 -0.306t2.088 -0.378 1.494 1.08q0.396 0.648 0.666 1.386t0.54 1.728 0.45 1.458q0.612 1.656 1.908 6.732 1.296 5.256 2.052 7.092 1.512 3.564 3.708 4.5 1.548 0.432 3.06 0.054t2.736 -1.134q4.716 -2.772 9 -8.532 3.744 -5.004 6.21 -10.53t2.97 -8.154zm10.152 -7.956v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','TURKISH_LIRA':'M41.472 -34.487q0 6.876 -3.402 12.708t-9.234 9.234 -12.708 3.402h-5.76q-0.504 0 -0.828 -0.324t-0.324 -0.828v-21.996l-7.74 2.376q-0.108 0.036 -0.324 0.036 -0.36 0 -0.684 -0.216 -0.468 -0.36 -0.468 -0.936v-4.608q0 -0.828 0.828 -1.116l8.388 -2.556v-3.348l-7.74 2.376q-0.108 0.036 -0.324 0.036 -0.36 0 -0.684 -0.216 -0.468 -0.36 -0.468 -0.936v-4.608q0 -0.828 0.828 -1.116l8.388 -2.556v-9q0 -0.504 0.324 -0.828t0.828 -0.324h5.76q0.504 0 0.828 0.324t0.324 0.828v6.516l13.5 -4.176q0.54 -0.18 1.008 0.18t0.468 0.936v4.608q0 0.828 -0.828 1.116l-14.148 4.356v3.348l13.5 -4.176q0.54 -0.18 1.008 0.18t0.468 0.936v4.608q0 0.828 -0.828 1.116l-14.148 4.356v17.532q6.768 -0.468 11.448 -5.436t4.68 -11.808q0 -0.504 0.324 -0.828t0.828 -0.324h5.76q0.504 0 0.828 0.324t0.324 0.828z','PLUS_SQUARE_O':'M41.472 -35.639v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-12.672v12.672q0 0.504 -0.324 0.828t-0.828 0.324h-2.304q-0.504 0 -0.828 -0.324t-0.324 -0.828v-12.672h-12.672q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h12.672v-12.672q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828v12.672h12.672q0.504 0 0.828 0.324t0.324 0.828zm4.608 16.128v-29.952q0 -2.376 -1.692 -4.068t-4.068 -1.692h-29.952q-2.376 0 -4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068 -1.692t1.692 -4.068zm4.608 -29.952v29.952q0 4.284 -3.042 7.326t-7.326 3.042h-29.952q-4.284 0 -7.326 -3.042t-3.042 -7.326v-29.952q0 -4.284 3.042 -7.326t7.326 -3.042h29.952q4.284 0 7.326 3.042t3.042 7.326z','SPACE_SHUTTLE':'M22.32 -24.119q-3.96 2.304 -9.648 2.304h-4.608v-2.304h-2.304q-0.468 0 -0.81 -0.846t-0.342 -2.034q0 -0.864 0.252 -1.764 -2.088 -0.072 -3.474 -0.378t-1.386 -0.738 1.386 -0.738 3.474 -0.378q-0.252 -0.9 -0.252 -1.764 0 -1.188 0.342 -2.034t0.81 -0.846h2.304v-2.304h4.608q5.688 0 9.648 2.304h40.068q1.512 0.252 3.834 0.648t2.898 0.504q3.204 0.54 5.4 1.458t3.006 1.71 0.81 1.44 -0.81 1.44 -3.006 1.71 -5.4 1.458q-0.576 0.108 -2.898 0.504t-3.834 0.648h-40.068zm40.284 -9.072q1.908 1.296 1.908 3.312t-1.908 3.312l2.916 1.08q2.448 -1.728 2.448 -4.392t-2.448 -4.392zm-40.104 9.648h36.54q-7.812 1.368 -16.416 2.88 -2.052 0 -4.068 0.864t-2.988 1.728l-1.008 0.864 -10.368 10.368q-0.936 0.936 -2.538 1.62t-3.222 0.684h-3.456l-3.348 -16.704h1.044q5.652 0 9.828 -2.304zm-9.828 -14.976h-1.044l3.348 -16.704h3.456q1.656 0 3.24 0.684t2.52 1.62l10.368 10.368q0.144 0.144 0.396 0.378t1.098 0.828 1.746 1.044 2.214 0.828 2.61 0.378l16.416 2.88h-36.54q-4.176 -2.304 -9.828 -2.304z','SLACK':'M54.684 -36.503q2.232 0 3.726 1.458t1.494 3.654q0 3.492 -3.348 4.68l-6.192 2.124 2.016 6.012q0.252 0.756 0.252 1.692 0 2.124 -1.512 3.672t-3.636 1.548q-1.692 0 -3.078 -0.972t-1.926 -2.592l-1.98 -5.94 -11.16 3.816 1.98 5.904q0.288 0.864 0.288 1.692 0 2.124 -1.512 3.672t-3.672 1.548q-1.692 0 -3.06 -0.972t-1.908 -2.592l-1.98 -5.868 -5.508 1.908q-1.044 0.324 -1.8 0.324 -2.196 0 -3.654 -1.44t-1.458 -3.636q0 -1.692 0.99 -3.06t2.574 -1.908l5.616 -1.908 -3.78 -11.268 -5.616 1.944q-0.936 0.288 -1.728 0.288 -2.16 0 -3.636 -1.458t-1.476 -3.618q0 -1.692 0.99 -3.06t2.574 -1.908l5.652 -1.908 -1.908 -5.724q-0.288 -0.864 -0.288 -1.692 0 -2.16 1.512 -3.69t3.672 -1.53q1.692 0 3.06 0.972t1.908 2.592l1.944 5.76 11.16 -3.78 -1.944 -5.76q-0.288 -0.864 -0.288 -1.692 0 -2.124 1.53 -3.672t3.654 -1.548q1.692 0 3.078 0.99t1.926 2.574l1.908 5.796 5.832 -1.98q0.756 -0.216 1.548 -0.216 2.16 0 3.69 1.422t1.53 3.546q0 1.62 -1.08 2.934t-2.664 1.854l-5.652 1.944 3.78 11.376 5.904 -2.016q0.864 -0.288 1.656 -0.288zm-28.584 9.432l11.16 -3.78 -3.78 -11.34 -11.16 3.852z','ENVELOPE_SQUARE':'M44.928 -59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56zm1.152 38.016v-15.696q-1.116 1.26 -2.304 1.98 -1.224 0.792 -4.77 3.06t-5.454 3.564q-3.528 2.484 -5.904 2.484t-5.904 -2.484q-1.656 -1.152 -5.094 -3.33t-5.13 -3.33q-0.432 -0.288 -1.188 -0.972t-1.116 -0.972v15.696q0 1.44 1.008 2.448t2.448 1.008h29.952q1.44 0 2.448 -1.008t1.008 -2.448zm0 -20.628q0 -1.476 -0.99 -2.52t-2.466 -1.044h-29.952q-1.44 0 -2.448 1.008t-1.008 2.448q0 1.332 1.098 2.754t2.43 2.322q1.692 1.152 4.95 3.204t4.662 2.988l0.612 0.414 0.756 0.504 0.756 0.468 0.846 0.468 0.774 0.342 0.81 0.27 0.738 0.09 0.738 -0.09 0.81 -0.27 0.774 -0.342 0.846 -0.468 0.756 -0.468 0.756 -0.504 0.612 -0.414 9.612 -6.264q1.26 -0.828 2.394 -2.25t1.134 -2.646z','WORDPRESS':'M4.572 -32.183q0 -5.868 2.412 -11.268l13.212 36.18q-7.056 -3.42 -11.34 -10.116t-4.284 -14.796zm46.368 -1.404q0 0.684 -0.09 1.386t-0.36 1.782 -0.414 1.584 -0.63 2.124 -0.63 2.088l-2.736 9.216 -10.008 -29.736q1.656 -0.108 3.168 -0.288 0.684 -0.072 0.936 -0.666t-0.09 -1.116 -1.026 -0.486l-7.38 0.36q-2.7 -0.036 -7.272 -0.36 -0.432 -0.036 -0.738 0.18t-0.414 0.54 -0.054 0.666 0.324 0.594 0.702 0.288l2.88 0.288 4.32 11.808 -6.048 18.144 -10.08 -29.952q1.656 -0.108 3.168 -0.288 0.684 -0.072 0.936 -0.666t-0.09 -1.116 -1.026 -0.486l-7.38 0.36 -0.828 -0.018 -0.936 -0.018q3.78 -5.76 9.882 -9.126t13.23 -3.366q5.292 0 10.098 1.908t8.586 5.364h-0.36q-1.98 0 -3.312 1.458t-1.332 3.438q0 0.432 0.072 0.864t0.144 0.774 0.288 0.828 0.324 0.756 0.432 0.81 0.45 0.756 0.522 0.864 0.504 0.828q2.268 3.852 2.268 7.632zm-18.216 3.816l8.532 23.292q0.036 0.216 0.18 0.396 -4.536 1.584 -9.18 1.584 -4.032 0 -7.812 -1.152zm23.796 -15.696q3.42 6.264 3.42 13.284 0 7.524 -3.744 13.878t-10.044 10.026l8.46 -24.408q2.124 -6.084 2.124 -9.936 0 -1.512 -0.216 -2.844zm-24.264 -18.972q6.552 0 12.528 2.556t10.296 6.876 6.876 10.296 2.556 12.528 -2.556 12.528 -6.876 10.296 -10.296 6.876 -12.528 2.556 -12.528 -2.556 -10.296 -6.876 -6.876 -10.296 -2.556 -12.528 2.556 -12.528 6.876 -10.296 10.296 -6.876 12.528 -2.556zm0 63.036q6.228 0 11.934 -2.448t9.828 -6.57 6.57 -9.828 2.448 -11.934 -2.448 -11.934 -6.57 -9.828 -9.828 -6.57 -11.934 -2.448 -11.934 2.448 -9.828 6.57 -6.57 9.828 -2.448 11.934 2.448 11.934 6.57 9.828 9.828 6.57 11.934 2.448z','OPENID':'M39.096 -64.439v55.296l-9.792 4.608q-8.208 -0.72 -14.904 -3.672t-10.548 -7.506 -3.852 -9.81q0 -5.04 3.618 -9.486t9.9 -7.398 14.094 -3.888v6.192q-7.812 1.368 -12.834 5.4t-5.022 9.18q0 5.472 5.562 9.612t13.986 5.22v-48.96zm24.084 20.952l1.332 14.04 -18.9 -4.104 5.292 -2.988q-4.284 -2.52 -10.08 -3.564v-6.192q9.972 1.188 17.316 5.652z','UNIVERSITY':'M34.56 -64.439l34.56 13.824v4.608h-4.608q0 0.936 -0.738 1.62t-1.746 0.684h-54.936q-1.008 0 -1.746 -0.684t-0.738 -1.62h-4.608v-4.608zm-25.344 23.04h9.216v27.648h4.608v-27.648h9.216v27.648h4.608v-27.648h9.216v27.648h4.608v-27.648h9.216v27.648h2.124q1.008 0 1.746 0.684t0.738 1.62v2.304h-59.904v-2.304q0 -0.936 0.738 -1.62t1.746 -0.684h2.124v-27.648zm57.42 34.56q1.008 0 1.746 0.684t0.738 1.62v4.608h-69.12v-4.608q0 -0.936 0.738 -1.62t1.746 -0.684h64.152z','MORTAR_BOARD':'M63.864 -34.343l0.648 11.376q0.144 2.484 -2.952 4.608t-8.46 3.366 -11.628 1.242 -11.628 -1.242 -8.46 -3.366 -2.952 -4.608l0.648 -11.376 20.664 6.516q0.792 0.252 1.728 0.252t1.728 -0.252zm19.08 -11.664q0 0.828 -0.792 1.116l-40.32 12.672q-0.144 0.036 -0.36 0.036t-0.36 -0.036l-23.472 -7.416q-1.548 1.224 -2.556 4.014t-1.224 6.426q2.268 1.296 2.268 3.924 0 2.484 -2.088 3.852l2.088 15.588q0.072 0.504 -0.288 0.9 -0.324 0.396 -0.864 0.396h-6.912q-0.54 0 -0.864 -0.396 -0.36 -0.396 -0.288 -0.9l2.088 -15.588q-2.088 -1.368 -2.088 -3.852 0 -2.628 2.34 -3.996 0.396 -7.452 3.528 -11.88l-11.988 -3.744q-0.792 -0.288 -0.792 -1.116t0.792 -1.116l40.32 -12.672q0.144 -0.036 0.36 -0.036t0.36 0.036l40.32 12.672q0.792 0.288 0.792 1.116z','YAHOO':'M30.924 -29.987l0.468 25.452q-2.232 -0.396 -3.78 -0.396 -1.476 0 -3.78 0.396l0.468 -25.452q-1.44 -2.484 -6.066 -10.638t-7.794 -13.482 -6.516 -10.332q2.088 0.54 3.888 0.54 1.548 0 3.996 -0.54 2.268 3.996 4.806 8.262t6.012 9.954 4.986 8.172q1.332 -2.196 3.942 -6.39t4.23 -6.84 3.78 -6.336 3.852 -6.822q1.944 0.504 3.852 0.504 2.016 0 4.104 -0.504 -1.008 1.404 -2.16 3.186t-1.782 2.826 -2.034 3.456 -1.764 3.024q-5.256 8.928 -12.708 21.96z','GOOGLE':'M35.316 -16.235q0 -0.9 -0.252 -1.764t-0.522 -1.512 -0.972 -1.494 -1.062 -1.26 -1.386 -1.242 -1.314 -1.044 -1.494 -1.08 -1.314 -0.936q-0.576 -0.072 -1.764 -0.072 -1.908 0 -3.762 0.252t-3.852 0.9 -3.492 1.656 -2.466 2.682 -0.972 3.798q0 2.016 0.846 3.672t2.196 2.718 3.132 1.8 3.6 1.044 3.654 0.306q2.088 0 4.014 -0.468t3.564 -1.404 2.628 -2.628 0.99 -3.924zm-4.212 -30.888q0 -2.124 -0.612 -4.518t-1.728 -4.644 -3.024 -3.726 -4.212 -1.476q-1.512 0 -2.97 0.702t-2.394 1.89q-1.656 2.124 -1.656 5.76 0 1.656 0.36 3.51t1.134 3.708 1.872 3.33 2.7 2.412 3.474 0.936q1.332 0 2.79 -0.594t2.358 -1.566q1.908 -2.016 1.908 -5.724zm-4.032 -17.316h15.012l-4.932 3.168h-4.752q2.7 2.268 4.068 4.788t1.368 5.76q0 2.592 -0.882 4.662t-2.142 3.348 -2.502 2.34 -2.124 2.214 -0.882 2.376q0 1.296 1.152 2.538t2.772 2.448 3.258 2.646 2.79 3.744 1.152 5.112q0 3.276 -1.764 6.228 -2.556 4.392 -7.542 6.462t-10.746 2.07q-4.752 0 -8.874 -1.494t-6.21 -4.95q-1.296 -2.124 -1.296 -4.716 0 -2.916 1.602 -5.4t4.266 -4.14q4.716 -2.952 14.544 -3.6 -1.152 -1.476 -1.71 -2.646t-0.558 -2.646q0 -1.44 0.756 -3.06 -1.656 0.144 -2.448 0.144 -5.328 0 -8.982 -3.474t-3.654 -8.802q0 -2.952 1.296 -5.724t3.564 -4.716q2.736 -2.376 6.552 -3.528t7.848 -1.152z','REDDIT':'M29.916 -29.735q0 2.016 -1.458 3.456t-3.474 1.44q-2.052 0 -3.528 -1.44t-1.476 -3.456q0 -2.052 1.494 -3.528t3.51 -1.476 3.474 1.476 1.458 3.528zm16.596 -5.004q2.016 0 3.474 1.476t1.458 3.528q0 2.016 -1.458 3.456t-3.474 1.44q-2.052 0 -3.528 -1.44t-1.476 -3.456q0 -2.052 1.494 -3.528t3.51 -1.476zm24.912 -0.396q0 2.232 -1.116 4.104t-2.988 2.952q0.18 1.188 0.18 2.196 0 4.356 -2.466 8.298t-7.11 6.966q-4.5 2.952 -10.278 4.518t-12.078 1.566q-6.336 0 -12.114 -1.566t-10.242 -4.518q-4.644 -3.024 -7.11 -6.948t-2.466 -8.316q0 -1.044 0.18 -2.376 -1.728 -1.116 -2.772 -2.934t-1.044 -3.942q0 -3.384 2.376 -5.76t5.76 -2.376q2.988 0 5.328 1.98 8.928 -5.688 21.312 -5.904l4.824 -15.228q0.144 -0.504 0.63 -0.774t1.026 -0.162l12.492 2.952q0.792 -1.8 2.466 -2.916t3.69 -1.116q2.772 0 4.734 1.962t1.962 4.734 -1.962 4.752 -4.734 1.98q-2.736 0 -4.698 -1.944t-1.998 -4.716l-11.34 -2.664 -4.176 13.176q11.772 0.504 20.16 5.976 2.304 -2.088 5.436 -2.088 3.384 0 5.76 2.376t2.376 5.76zm-11.52 -26.532q-1.62 0 -2.772 1.152t-1.152 2.772 1.152 2.772 2.772 1.152 2.772 -1.152 1.152 -2.772 -1.152 -2.772 -2.772 -1.152zm-57.132 26.532q0 2.412 1.836 3.996 1.764 -4.716 6.48 -8.46 -1.296 -0.9 -2.952 -0.9 -2.232 0 -3.798 1.566t-1.566 3.798zm53.64 22.212q4.032 -2.628 6.174 -5.976t2.142 -6.984 -2.142 -6.966 -6.174 -5.958q-4.176 -2.7 -9.558 -4.158t-11.286 -1.458 -11.286 1.458 -9.558 4.158q-4.032 2.628 -6.174 5.958t-2.142 6.966 2.142 6.984 6.174 5.976q4.176 2.7 9.558 4.158t11.286 1.458 11.286 -1.458 9.558 -4.158zm10.188 -18q2.052 -1.656 2.052 -4.212 0 -2.232 -1.566 -3.798t-3.798 -1.566q-1.764 0 -3.096 1.008 4.716 3.78 6.408 8.568zm-21.312 13.248q0.396 -0.396 0.972 -0.396t0.972 0.396 0.396 0.99 -0.396 0.99q-3.564 3.564 -11.484 3.564h-0.072q-7.92 0 -11.484 -3.564 -0.396 -0.396 -0.396 -0.99t0.396 -0.99 0.972 -0.396 0.972 0.396q2.772 2.772 9.54 2.772h0.072q6.768 0 9.54 -2.772z','REDDIT_SQUARE':'M34.2 -23.291q0.252 -0.252 0.63 -0.252t0.63 0.252 0.252 0.648 -0.252 0.648q-2.34 2.304 -7.488 2.304h-0.072q-5.148 0 -7.452 -2.304 -0.288 -0.252 -0.288 -0.648t0.288 -0.648q0.252 -0.252 0.63 -0.252t0.63 0.252q1.764 1.836 6.192 1.836h0.072q4.392 0 6.228 -1.836zm-10.044 -7.92q0 1.332 -0.936 2.304t-2.268 0.972 -2.268 -0.972 -0.936 -2.304 0.936 -2.268 2.268 -0.936 2.268 0.936 0.936 2.268zm19.548 -15.696q-1.044 0 -1.8 -0.756t-0.756 -1.8q0 -1.08 0.756 -1.836t1.8 -0.756q1.08 0 1.836 0.756t0.756 1.836q0 1.044 -0.756 1.8t-1.836 0.756zm0.072 -12.924q4.752 0 8.136 3.384t3.384 8.172v32.184q0 4.788 -3.384 8.172t-8.136 3.384h-32.256q-4.752 0 -8.136 -3.384t-3.384 -8.172v-32.184q0 -4.788 3.384 -8.172t8.136 -3.384h32.256zm3.78 29.232q1.26 -0.504 2.052 -1.638t0.792 -2.538q0 -1.836 -1.296 -3.15t-3.132 -1.314q-2.16 0 -3.528 1.728 -5.436 -3.852 -13.5 -4.14l2.988 -9.54 7.416 1.764q0.036 1.8 1.314 3.06t3.042 1.26q1.8 0 3.096 -1.278t1.296 -3.078 -1.296 -3.096 -3.096 -1.296q-1.296 0 -2.376 0.738t-1.62 1.926l-8.172 -1.944q-0.324 -0.072 -0.63 0.09t-0.414 0.522l-3.42 10.872q-8.064 0.144 -13.716 4.068 -1.296 -1.548 -3.348 -1.548 -1.836 0 -3.132 1.314t-1.296 3.15q0 1.332 0.702 2.43t1.89 1.638q-0.252 0.9 -0.252 1.944 0 3.528 2.664 6.534t7.254 4.752 10.026 1.746q5.4 0 9.99 -1.746t7.254 -4.752 2.664 -6.534q0 -0.972 -0.216 -1.944zm-12.6 -3.816q1.332 0 2.268 0.936t0.936 2.268 -0.936 2.304 -2.268 0.972 -2.268 -0.972 -0.936 -2.304 0.936 -2.268 2.268 -0.936z','STUMBLEUPON_CIRCLE':'M31.176 -34.235l3.24 -0.972v-2.232q0 -2.844 -2.088 -4.86t-4.968 -2.016 -4.968 1.998 -2.088 4.842v10.188q0 0.72 -0.504 1.206t-1.188 0.486 -1.17 -0.486 -0.486 -1.206v-4.32h-5.436v4.392q0 2.952 2.07 5.004t5.022 2.052q2.916 0 4.986 -2.034t2.07 -4.914v-10.08q0 -0.684 0.486 -1.188t1.206 -0.504q0.684 0 1.17 0.504t0.486 1.188v1.944zm11.988 7.02v-4.392h-5.4v4.536q0 0.72 -0.486 1.206t-1.206 0.486q-0.684 0 -1.17 -0.504t-0.486 -1.188v-4.428l-3.24 0.936 -2.16 -1.008v4.428q0 2.88 2.088 4.932t5.004 2.052 4.986 -2.052 2.07 -5.004zm12.132 -4.968q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','STUMBLEUPON':'M38.232 -38.807v-4.248q0 -1.512 -1.08 -2.592t-2.592 -1.08 -2.592 1.08 -1.08 2.592v22.032q0 6.3 -4.536 10.764t-10.908 4.464q-6.408 0 -10.926 -4.518t-4.518 -10.926v-9.576h11.808v9.432q0 1.548 1.08 2.61t2.592 1.062 2.592 -1.062 1.08 -2.61v-22.32q0 -6.156 4.554 -10.512t10.854 -4.356q6.336 0 10.872 4.392t4.536 10.584v4.896l-7.02 2.088zm19.08 7.992h11.808v9.576q0 6.408 -4.518 10.926t-10.926 4.518q-6.372 0 -10.908 -4.482t-4.536 -10.818v-9.648l4.716 2.196 7.02 -2.088v9.72q0 1.512 1.08 2.574t2.592 1.062 2.592 -1.062 1.08 -2.574v-9.9z','DELICIOUS':'M52.992 -14.903v-17.28h-25.344v-25.344h-17.28q-3.348 0 -5.706 2.358t-2.358 5.706v17.28h25.344v25.344h17.28q3.348 0 5.706 -2.358t2.358 -5.706zm2.304 -34.56v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','DIGG':'M11.808 -54.287h7.344v35.388h-19.152v-25.092h11.808v-10.296zm0 29.484v-13.284h-4.428v13.284h4.428zm10.296 -19.188v25.092h7.38v-25.092h-7.38zm0 -10.296v7.344h7.38v-7.344h-7.38zm10.332 10.296h19.188v33.912h-19.188v-5.868h11.808v-2.952h-11.808v-25.092zm11.808 19.188v-13.284h-4.428v13.284h4.428zm10.332 -19.188h19.152v33.912h-19.152v-5.868h11.772v-2.952h-11.772v-25.092zm11.772 19.188v-13.284h-4.428v13.284h4.428z','PIED_PIPER':'M37.656 -27.719q0 2.304 -1.368 3.924t-3.276 1.62q-1.548 0 -2.52 -0.54v-9.972q1.008 -0.612 2.52 -0.612 1.908 0 3.276 1.638t1.368 3.942zm-12.348 -15.408q0 2.304 -1.368 3.942t-3.276 1.638q-1.548 0 -2.52 -0.54v-9.972q1.008 -0.612 2.52 -0.612 1.908 0 3.276 1.62t1.368 3.924zm20.232 15.516q0 -4.824 -3.168 -8.244t-7.668 -3.42q-0.72 0 -1.404 0.108 -0.828 2.808 -2.808 4.896 -3.132 3.42 -7.596 3.636v22.896l7.596 -1.476v-7.416q1.836 0.684 4.212 0.684 4.5 0 7.668 -3.42t3.168 -8.244zm-12.348 -15.372q0 -4.824 -3.186 -8.244t-7.686 -3.42q-2.664 0 -5.076 1.296h-6.696v30.24l7.596 -1.476v-7.416q1.98 0.684 4.176 0.684 4.5 0 7.686 -3.42t3.186 -8.244zm22.104 -6.48v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','PIED_PIPER_ALT':'M43.992 -30.995q2.7 -0.108 5.166 0.738t4.248 2.106 3.636 3.402 3.024 3.888 2.718 4.338q1.188 2.016 2.826 3.924t2.718 2.898 3.564 3.186q-1.728 1.08 -3.906 2.07t-4.986 2.124 -4.104 1.71q-1.584 -1.332 -2.664 -4.14t-1.566 -5.922 -1.188 -6.498 -1.53 -6.066 -2.61 -4.428 -4.41 -1.746l-0.36 0.072 -0.216 0.144q0.144 0.18 0.468 0.504 0.216 0.18 1.008 0.846t0.918 0.792 0.684 0.648 0.648 0.738 0.414 0.756 0.378 0.99 0.162 1.116 0.144 1.458l0.036 1.188q0.036 0.936 -0.09 2.07t-0.27 1.872 -0.45 2.106 -0.414 1.908q-1.26 -0.036 -3.636 0.342t-3.528 0.378q-1.404 0 -2.592 -0.36 -0.072 -0.576 -0.072 -1.692 0 -2.664 0.108 -3.456 0.072 -0.468 1.134 -1.494t2.052 -2.124 0.954 -1.854q-0.864 -0.072 -1.548 0.864 -1.296 1.908 -4.014 3.582t-4.914 1.674q-0.9 0 -2.718 -2.268t-3.834 -5.022 -3.024 -3.474q-0.216 -0.144 -0.972 -1.08 -17.352 4.032 -18.468 4.032 -0.576 0 -1.008 -0.396t-0.432 -0.972q0 -0.54 0.306 -0.954t0.81 -0.522l17.496 -3.816q-0.288 -0.504 -0.288 -0.9t0.198 -0.63 0.576 -0.414 0.72 -0.252 0.828 -0.162 0.666 -0.162q0.144 -0.036 0.558 -0.27t0.63 -0.234q0.54 0 1.008 0.576t0.72 1.188q5.868 -1.332 6.192 -1.332 0.612 0 1.062 0.396t0.45 1.008q0 0.54 -0.306 0.936t-0.846 0.504l-6.552 1.44 -0.036 0.576q-0.036 0.936 2.934 4.23t3.762 3.294q1.692 0 4.284 -2.88t2.592 -4.644q0 -1.296 -0.846 -1.908t-1.836 -0.666 -1.836 -0.414 -0.846 -1.224q0 -0.576 0.36 -1.224l-2.448 -0.684q1.548 -1.584 1.548 -4.212 0 -0.936 -0.18 -2.088 2.952 -0.576 5.184 -0.576 1.584 0 2.574 0.054t1.746 0.306 1.116 0.486 0.738 0.882 0.558 1.206 0.612 1.71 0.864 2.16l1.8 -0.9q-0.108 1.44 -0.828 2.16t-1.53 0.756 -1.44 0.234 -0.594 0.738zm2.16 -8.46q-0.18 -0.18 -0.486 -0.558t-0.432 -0.522 -0.378 -0.414 -0.36 -0.378l-0.288 -0.288 -0.306 -0.27 -0.288 -0.18 -0.306 -0.162q-0.252 -0.108 -0.522 -0.18t-0.738 -0.09 -0.792 -0.018h-2.52q-4.536 0 -7.812 1.548 0.576 -1.08 1.296 -1.674t1.944 -1.062 2.358 -1.296 1.656 -1.314 1.8 -1.98 1.566 -1.818q0.432 0.324 1.008 1.134t1.152 1.314 1.368 0.468l0.432 -0.036v2.736l0.792 0.036q8.892 -3.42 13.356 -6.84 1.008 -0.756 1.8 -1.404t1.53 -1.35 1.188 -1.116 1.062 -1.224 0.864 -1.116 0.882 -1.332 0.828 -1.368 0.972 -1.71 1.062 -1.908l0.252 -0.324q-0.072 1.908 -1.548 5.004 -2.844 5.94 -7.38 9.504t-11.016 5.112q-0.504 0.108 -1.512 0.27t-1.8 0.342 -1.404 0.504q0.108 0.684 0.882 1.656t0.774 1.224q0 0.396 -0.936 1.08zm-7.956 33.156q1.404 -0.936 4.734 -1.71t5.274 -0.774q0.324 0 0.81 0.558t1.008 1.53 0.936 1.8 0.864 1.836 0.522 1.188q-4.356 1.62 -8.784 1.62 -2.196 0 -4.5 -0.396zm-8.604 -23.292l1.728 -0.432 3.924 6.372 -2.628 1.728zm18.036 18.612l0.108 0.576q0 0.252 -0.63 0.522t-1.656 0.468 -1.944 0.342 -1.926 0.27 -1.152 0.162l-0.252 -1.548q0.756 -0.072 2.178 -0.306t2.592 -0.36 2.178 -0.126h0.504zm-16.452 -22.608l-3.456 0.72 -0.216 -0.612q0.36 -0.036 1.17 -0.252t1.242 -0.216q0.684 0 1.26 0.36zm7.02 22.824h1.116l0.36 2.988 -1.476 0.432v-3.42zm32.004 -53.64v-0.036 0.036zm0 0l-0.036 0.18 -0.072 0.072 0.036 -0.108zm0 0l0.036 -0.036z','DRUPAL':'M42.012 -7.343q-0.18 -0.684 -0.864 -0.18 -1.08 0.792 -3.132 1.404t-4.716 0.612q-4.644 0 -6.948 -1.764 -0.18 -0.144 -0.468 -0.144 -0.396 0 -0.936 0.432 -0.252 0.216 -0.27 0.576t0.27 0.72q1.224 1.152 3.15 1.656t3.69 0.45 3.564 -0.162q1.476 -0.144 3.042 -0.738t2.34 -1.08 1.026 -0.738q0.432 -0.432 0.252 -1.044zm-1.404 -4.14q-0.684 -1.692 -1.404 -2.196 -0.828 -0.54 -2.736 -0.54 -1.692 0 -2.556 0.36 -1.044 0.432 -2.808 2.016 -0.936 0.864 -0.432 1.584 0.324 0.288 0.63 0.162t1.134 -0.846q0.108 -0.072 0.378 -0.306t0.378 -0.306 0.36 -0.252 0.414 -0.252 0.45 -0.18 0.54 -0.162 0.594 -0.09 0.738 -0.036q0.972 0 1.602 0.27t0.828 0.522 0.486 0.792q0.36 0.612 0.45 0.72t0.45 -0.036q0.828 -0.432 0.504 -1.224zm12.78 -10.116q0 -0.792 -0.18 -1.602t-0.594 -1.62 -1.224 -1.314 -1.89 -0.504q-1.188 0 -3.492 1.494t-4.644 3.006 -3.636 1.512q-0.972 0.036 -2.286 -0.684t-2.736 -1.764 -3.006 -2.088 -3.6 -1.764 -3.996 -0.684q-4.14 0.036 -7.092 2.826t-3.024 6.426q-0.072 4.032 2.664 5.904 1.044 0.72 2.25 1.026t3.726 0.306q2.052 0 4.752 -1.17t4.824 -2.556 4.32 -2.538 3.348 -1.116q0.936 0.036 2.34 1.134t2.574 2.412 2.448 2.43 1.998 1.152q1.26 0.108 2.106 -0.504t1.998 -2.268q1.008 -1.476 1.53 -3.636t0.522 -3.816zm1.908 -5.76q0 5.904 -2.232 10.962t-5.976 8.496 -8.73 5.382 -10.458 1.944 -10.548 -2.07 -8.91 -5.652 -6.138 -8.694 -2.304 -10.872q0 -3.204 0.702 -6.21t1.764 -5.238 2.538 -4.266 2.826 -3.384 2.826 -2.502 2.322 -1.674 1.53 -0.882q0.504 -0.288 1.836 -0.954t1.962 -1.026 1.728 -1.08 2.178 -1.584q1.296 -1.008 2.088 -2.61t1.08 -4.518q4.644 5.58 6.696 6.948 1.584 1.044 4.68 2.448t4.644 2.376q0.756 0.468 1.404 0.9t2.178 1.674 2.736 2.538 2.7 3.42 2.484 4.392 1.692 5.346 0.702 6.39z','JOOMLA':'M38.52 -25.811l-5.76 5.76 -5.436 5.472 -1.08 1.08q-2.34 2.304 -5.454 3.132t-6.174 0.072q-0.576 2.52 -2.592 4.14t-4.644 1.62q-3.06 0 -5.22 -2.178t-2.16 -5.238q0 -2.592 1.602 -4.608t4.086 -2.592q-0.792 -3.096 0.036 -6.228t3.168 -5.472l0.432 -0.432 5.436 5.472 -0.396 0.396q-1.332 1.332 -1.332 3.204t1.332 3.24q1.332 1.332 3.204 1.332t3.204 -1.332l1.08 -1.08 5.436 -5.472 5.796 -5.76zm-12.276 -24.552l0.432 0.432 -5.472 5.472 -0.432 -0.432q-1.332 -1.332 -3.204 -1.332t-3.204 1.332 -1.332 3.222 1.332 3.222l1.044 1.044 5.472 5.472 5.76 5.76 -5.436 5.472 -5.796 -5.76 -5.436 -5.472 -1.08 -1.08q-2.448 -2.412 -3.24 -5.742t0.18 -6.462q-2.52 -0.54 -4.14 -2.556t-1.62 -4.644q0 -3.06 2.16 -5.238t5.22 -2.178q2.736 0 4.806 1.764t2.502 4.428q3.024 -0.72 6.102 0.126t5.382 3.15zm29.052 38.412q0 3.06 -2.16 5.238t-5.22 2.178q-2.664 0 -4.716 -1.692t-2.556 -4.248q-3.096 1.008 -6.462 0.216t-5.814 -3.24l-0.396 -0.432 5.436 -5.472 0.432 0.432q1.332 1.332 3.204 1.332t3.204 -1.332 1.332 -3.204 -1.332 -3.204l-1.08 -1.08 -5.472 -5.472 -5.76 -5.76 5.472 -5.472 5.76 5.76 5.472 5.472 1.044 1.08q2.304 2.304 3.15 5.418t0.09 6.174q2.736 0.396 4.554 2.466t1.818 4.842zm-0.072 -40.464q0 2.772 -1.836 4.86t-4.572 2.484q0.936 3.06 0.108 6.354t-3.24 5.706l-0.432 0.432 -5.436 -5.472 0.432 -0.432q1.332 -1.332 1.332 -3.204t-1.332 -3.204 -3.204 -1.332 -3.204 1.332l-1.08 1.08 -5.472 5.472 -5.76 5.76 -5.472 -5.472 5.796 -5.76 5.472 -5.472 1.044 -1.08q2.412 -2.412 5.724 -3.222t6.408 0.126q0.396 -2.7 2.466 -4.536t4.878 -1.836q3.06 0 5.22 2.178t2.16 5.238z','LANGUAGE':'M23.544 -25.631q-0.036 0.108 -0.45 -0.018t-1.134 -0.414l-0.72 -0.324q-1.584 -0.72 -3.132 -1.764 -0.252 -0.18 -1.476 -1.134t-1.368 -1.026q-2.412 3.708 -4.824 6.516 -2.916 3.42 -3.78 3.96 -0.144 0.072 -0.702 0.144t-0.666 0q0.216 -0.144 2.952 -3.312 0.756 -0.864 3.078 -4.14t2.826 -4.248q0.612 -1.08 1.836 -3.546t1.296 -2.79q-0.288 -0.036 -3.96 1.188 -0.288 0.072 -0.99 0.27t-1.242 0.342 -0.612 0.18q-0.072 0.072 -0.072 0.378t-0.036 0.342q-0.18 0.36 -1.116 0.54 -0.828 0.252 -1.692 0 -0.648 -0.144 -1.008 -0.756 -0.144 -0.216 -0.18 -0.828 0.216 -0.072 0.882 -0.18t1.062 -0.216q2.088 -0.576 3.78 -1.152 3.6 -1.26 3.672 -1.26 0.36 -0.072 1.548 -0.702t1.584 -0.774q0.324 -0.108 0.774 -0.288t0.522 -0.198 0.216 0.018q0.072 0.432 -0.036 1.188 0 0.072 -0.45 0.972t-0.954 1.926 -0.612 1.206q-0.9 1.8 -2.772 4.716l2.304 1.008q0.432 0.216 2.682 1.152t2.43 1.008q0.144 0.036 0.378 0.918t0.162 1.098zm-7.38 -17.496q0.108 0.54 -0.144 1.008 -0.432 0.828 -1.8 1.368 -1.08 0.432 -2.16 0.432 -0.936 -0.108 -1.764 -0.936 -0.504 -0.54 -0.648 -1.476l0.036 -0.108q0.108 0.108 0.702 0.18t0.954 0 2.088 -0.576q1.296 -0.432 1.98 -0.504 0.612 0 0.756 0.612zm25.128 4.644l2.268 8.172 -5.004 -1.512zm-39.888 28.8l24.984 -8.352v-37.152l-24.984 8.388v37.116zm44.676 -11.412l3.672 1.116 -6.516 -23.652 -3.6 -1.116 -7.776 19.296 3.672 1.116 1.62 -3.96 7.596 2.34zm-18.108 -34.632l20.628 6.624v-13.68zm11.196 47.628l5.688 0.468 -1.944 5.76 -1.44 -2.376q-4.68 2.988 -9.936 3.888 -2.088 0.432 -3.276 0.432h-3.024q-2.844 0 -7.182 -1.404t-6.606 -3.06q-0.288 -0.252 -0.288 -0.576 0 -0.288 0.18 -0.486t0.468 -0.198q0.144 0 0.648 0.27t1.098 0.594 0.738 0.396q2.628 1.332 5.742 2.214t5.67 0.882q3.42 0 6.012 -0.522t5.652 -1.818q0.54 -0.252 1.098 -0.558t1.224 -0.684 1.026 -0.594zm16.128 -38.844v38.844l-27.864 -8.856q-0.504 0.216 -13.5 4.59t-13.248 4.374q-0.468 0 -0.648 -0.468l-0.036 -0.108v-38.808q0.108 -0.324 0.144 -0.36 0.18 -0.216 0.72 -0.396 3.816 -1.26 5.364 -1.8v-13.824l20.088 7.128q0.072 0 5.778 -1.98t11.376 -3.906 5.814 -1.926q0.72 0 0.72 0.756v15.048z','FAX':'M10.368 -50.615q2.376 0 4.068 1.692t1.692 4.068v39.168q0 2.376 -1.692 4.068t-4.068 1.692h-4.608q-2.376 0 -4.068 -1.692t-1.692 -4.068v-39.168q0 -2.376 1.692 -4.068t4.068 -1.692h4.608zm49.536 5.868q2.088 1.224 3.348 3.348t1.26 4.608v27.648q0 3.816 -2.7 6.516t-6.516 2.7h-31.104q-2.376 0 -4.068 -1.692t-1.692 -4.068v-55.296q0 -1.44 1.008 -2.448t2.448 -1.008h24.192q1.44 0 3.168 0.72t2.736 1.728l5.472 5.472q1.008 1.008 1.728 2.736t0.72 3.168v5.868zm-26.496 35.604v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm9.216 18.432v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm9.216 18.432v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-4.608q0 -0.504 -0.324 -0.828t-0.828 -0.324h-4.608q-0.504 0 -0.828 0.324t-0.324 0.828v4.608q0 0.504 0.324 0.828t0.828 0.324h4.608q0.504 0 0.828 -0.324t0.324 -0.828zm3.456 -13.824v-9.216h-5.76q-1.44 0 -2.448 -1.008t-1.008 -2.448v-5.76h-23.04v18.432h32.256z','BUILDING':'M48.384 -64.439q0.936 0 1.62 0.684t0.684 1.62v59.904q0 0.936 -0.684 1.62t-1.62 0.684h-46.08q-0.936 0 -1.62 -0.684t-0.684 -1.62v-59.904q0 -0.936 0.684 -1.62t1.62 -0.684h46.08zm-29.952 10.368v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828zm0 9.216v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828zm0 9.216v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828zm0 9.216v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828zm-4.608 11.52v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm18.432 46.08v-6.912q0 -0.504 -0.324 -0.828t-0.828 -0.324h-11.52q-0.504 0 -0.828 0.324t-0.324 0.828v6.912q0 0.504 0.324 0.828t0.828 0.324h11.52q0.504 0 0.828 -0.324t0.324 -0.828zm0 -18.432v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm9.216 36.864v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm0 -9.216v-2.304q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v2.304q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828z','CHILD':'M42.768 -44.711l-10.512 10.512v29.664q0 1.656 -1.188 2.844t-2.844 1.188 -2.844 -1.188 -1.188 -2.844v-13.824h-2.304v13.824q0 1.656 -1.188 2.844t-2.844 1.188 -2.844 -1.188 -1.188 -2.844v-29.664l-10.512 -10.512q-1.008 -1.008 -1.008 -2.448t1.008 -2.448 2.448 -1.008 2.448 1.008l8.208 8.208h13.248l8.208 -8.208q1.008 -1.008 2.448 -1.008t2.448 1.008 1.008 2.448 -1.008 2.448zm-11.664 -5.904q0 3.348 -2.358 5.706t-5.706 2.358 -5.706 -2.358 -2.358 -5.706 2.358 -5.706 5.706 -2.358 5.706 2.358 2.358 5.706z','PAW':'M28.08 -47.447q0 2.16 -0.684 4.086t-2.268 3.33 -3.78 1.404q-2.736 0 -4.968 -2.07t-3.312 -4.878 -1.08 -5.436q0 -2.16 0.684 -4.086t2.268 -3.33 3.78 -1.404q2.772 0 4.986 2.07t3.294 4.86 1.08 5.454zm-12.312 17.388q0 2.88 -1.512 5.004t-4.284 2.124q-2.736 0 -5.094 -1.998t-3.618 -4.806 -1.26 -5.472q0 -2.88 1.512 -5.022t4.284 -2.142q2.736 0 5.094 1.998t3.618 4.824 1.26 5.49zm14.184 -0.972q4.248 0 9.18 3.51t8.244 8.532 3.312 9.162q0 1.656 -0.612 2.754t-1.746 1.62 -2.322 0.72 -2.736 0.198q-2.448 0 -6.75 -1.62t-6.57 -1.62q-2.376 0 -6.93 1.602t-7.218 1.602q-6.588 0 -6.588 -5.256 0 -3.096 2.016 -6.894t5.022 -6.93 6.75 -5.256 6.948 -2.124zm8.604 -7.596q-2.196 0 -3.78 -1.404t-2.268 -3.33 -0.684 -4.086q0 -2.664 1.08 -5.454t3.294 -4.86 4.986 -2.07q2.196 0 3.78 1.404t2.268 3.33 0.684 4.086q0 2.628 -1.08 5.436t-3.312 4.878 -4.968 2.07zm15.552 -3.744q2.772 0 4.284 2.142t1.512 5.022q0 2.664 -1.26 5.472t-3.618 4.806 -5.094 1.998q-2.772 0 -4.284 -2.124t-1.512 -5.004q0 -2.664 1.26 -5.49t3.618 -4.824 5.094 -1.998z','SPOON':'M25.344 -45.431q0 5.22 -2.052 8.766t-5.472 4.878l1.62 29.556q0.072 0.936 -0.576 1.62t-1.584 0.684h-6.912q-0.936 0 -1.584 -0.684t-0.576 -1.62l1.62 -29.556q-3.42 -1.332 -5.472 -4.878t-2.052 -8.766q0 -4.608 1.53 -8.982t4.23 -7.2 5.76 -2.826 5.76 2.826 4.23 7.2 1.53 8.982z','CUBE':'M32.256 -5.795l23.04 -12.564v-22.896l-23.04 8.388v27.072zm-2.304 -31.14l25.128 -9.144 -25.128 -9.144 -25.128 9.144zm29.952 -9.072v27.648q0 1.26 -0.648 2.34t-1.764 1.692l-25.344 13.824q-1.008 0.576 -2.196 0.576t-2.196 -0.576l-25.344 -13.824q-1.116 -0.612 -1.764 -1.692t-0.648 -2.34v-27.648q0 -1.44 0.828 -2.628t2.196 -1.692l25.344 -9.216q0.792 -0.288 1.584 -0.288t1.584 0.288l25.344 9.216q1.368 0.504 2.196 1.692t0.828 2.628z','CUBES':'M23.04 -5.687l13.824 -6.912v-11.304l-13.824 5.904v12.312zm-2.304 -16.344l14.544 -6.228 -14.544 -6.228 -14.544 6.228zm39.168 16.344l13.824 -6.912v-11.304l-13.824 5.904v12.312zm-2.304 -16.344l14.544 -6.228 -14.544 -6.228 -14.544 6.228zm-16.128 -10.548l13.824 -5.94v-9.576l-13.824 5.904v9.612zm-2.304 -13.644l15.876 -6.804 -15.876 -6.804 -15.876 6.804zm39.168 18.648v14.976q0 1.296 -0.684 2.412t-1.872 1.692l-16.128 8.064q-0.9 0.504 -2.052 0.504t-2.052 -0.504l-16.128 -8.064q-0.18 -0.072 -0.252 -0.144 -0.072 0.072 -0.252 0.144l-16.128 8.064q-0.9 0.504 -2.052 0.504t-2.052 -0.504l-16.128 -8.064q-1.188 -0.576 -1.872 -1.692t-0.684 -2.412v-14.976q0 -1.368 0.774 -2.52t2.034 -1.728l15.624 -6.696v-14.4q0 -1.368 0.774 -2.52t2.034 -1.728l16.128 -6.912q0.828 -0.36 1.8 -0.36t1.8 0.36l16.128 6.912q1.26 0.576 2.034 1.728t0.774 2.52v14.4l15.624 6.696q1.296 0.576 2.052 1.728t0.756 2.52z','BEHANCE':'M66.528 -52.235h-18.396v4.464h18.396v-4.464zm-9.072 15.336q-3.24 0 -5.256 1.89t-2.232 5.13h14.688q-0.648 -7.02 -7.2 -7.02zm0.576 21.06q2.268 0 4.392 -1.152t2.736 -3.132h7.956q-3.6 11.052 -15.372 11.052 -7.704 0 -12.258 -4.752t-4.554 -12.492q0 -7.488 4.698 -12.438t12.114 -4.95q4.968 0 8.658 2.448t5.508 6.444 1.818 8.928q0 0.612 -0.072 1.692h-23.688q0 3.996 2.07 6.174t5.994 2.178zm-48.06 -1.8h10.656q7.38 0 7.38 -6.012 0 -6.48 -7.164 -6.48h-10.872v12.492zm0 -19.332h10.116q2.808 0 4.446 -1.314t1.638 -4.086q0 -5.184 -6.84 -5.184h-9.36v10.584zm-9.972 -18.324h21.384q3.132 0 5.58 0.504t4.554 1.71 3.24 3.474 1.134 5.544q0 6.516 -6.192 9.468 4.104 1.152 6.192 4.14t2.088 7.344q0 2.7 -0.882 4.914t-2.376 3.726 -3.546 2.556 -4.356 1.512 -4.824 0.468h-21.996v-45.36z','BEHANCE_SQUARE':'M44.928 -59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56zm-26.964 13.212h-13.356v28.332h13.752q4.212 0 7.092 -2.07t2.88 -6.138q0 -5.688 -5.148 -7.2 3.852 -1.872 3.852 -5.904 0 -2.052 -0.702 -3.474t-2.034 -2.178 -2.844 -1.062 -3.492 -0.306zm-0.792 11.448h-6.336v-6.624h5.868q4.284 0 4.284 3.24 0 3.384 -3.816 3.384zm0.324 12.06h-6.66v-7.812h6.804q4.464 0 4.464 4.068 0 3.744 -4.608 3.744zm23.4 1.152q-2.448 0 -3.744 -1.368t-1.296 -3.852h14.796q0.036 -0.36 0.036 -1.08 0 -4.752 -2.682 -7.938t-7.326 -3.186q-4.608 0 -7.56 3.096t-2.952 7.776q0 4.86 2.844 7.812t7.668 2.952q7.38 0 9.612 -6.876h-4.968q-0.396 1.224 -1.71 1.944t-2.718 0.72zm-0.36 -13.176q4.068 0 4.464 4.392h-9.144q0.144 -2.016 1.404 -3.204t3.276 -1.188zm-5.832 -9.576h11.484v2.772h-11.484v-2.772z','STEAM':'M56.952 -43.487q0 3.636 -2.574 6.21t-6.21 2.574 -6.21 -2.574 -2.574 -6.21 2.574 -6.21 6.21 -2.574 6.21 2.574 2.574 6.21zm-27.72 26.712q0 -3.744 -2.628 -6.372t-6.372 -2.628q-0.972 0 -1.944 0.216l3.744 1.512q2.772 1.116 3.942 3.834t0.054 5.454q-1.116 2.772 -3.852 3.924t-5.472 0.036q-0.756 -0.288 -2.232 -0.882t-2.196 -0.882q1.152 2.16 3.276 3.474t4.68 1.314q3.744 0 6.372 -2.628t2.628 -6.372zm29.88 -26.676q0 -4.536 -3.222 -7.758t-7.758 -3.222q-4.572 0 -7.794 3.222t-3.222 7.758q0 4.572 3.222 7.776t7.794 3.204q4.536 0 7.758 -3.204t3.222 -7.776zm5.4 0q0 6.804 -4.806 11.592t-11.574 4.788l-15.732 11.484q-0.432 4.644 -3.924 7.848t-8.244 3.204q-4.356 0 -7.704 -2.736t-4.248 -6.912l-8.28 -3.312v-15.444l14.004 5.652q2.844 -1.728 6.228 -1.728 0.468 0 1.26 0.072l10.224 -14.652q0.072 -6.732 4.878 -11.484t11.538 -4.752q6.768 0 11.574 4.806t4.806 11.574z','STEAM_SQUARE':'M44.712 -41.147q0 -2.88 -2.052 -4.914t-4.932 -2.034 -4.914 2.052 -2.034 4.896q0 2.88 2.034 4.914t4.914 2.034 4.932 -2.034 2.052 -4.914zm-21.96 21.168q0 2.988 -2.088 5.058t-5.04 2.07q-2.016 0 -3.708 -1.044t-2.592 -2.772q1.872 0.72 3.528 1.44 2.16 0.864 4.32 -0.054t3.06 -3.114q0.864 -2.16 -0.054 -4.32t-3.114 -3.024l-2.952 -1.188q0.792 -0.18 1.512 -0.18 2.952 0 5.04 2.07t2.088 5.058zm32.544 -29.484v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-5.508l6.192 2.484q0.72 3.312 3.366 5.472t6.066 2.16q3.744 0 6.516 -2.52t3.132 -6.228l12.42 -9.072q5.4 0 9.198 -3.798t3.798 -9.162q0 -5.4 -3.798 -9.198t-9.198 -3.798q-5.328 0 -9.108 3.762t-3.852 9.09l-8.1 11.592q-0.324 -0.036 -1.008 -0.036 -2.7 0 -4.932 1.332l-10.692 -4.284v-16.848q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326zm-8.892 8.388q0 3.6 -2.556 6.138t-6.156 2.538 -6.138 -2.538 -2.538 -6.138 2.538 -6.156 6.138 -2.556q3.636 0 6.174 2.538t2.538 6.174z','RECYCLE':'M30.096 -22.355l-0.54 13.248 -0.072 0.792 -15.12 -1.044q-1.296 -0.108 -2.412 -1.134t-1.692 -2.358q-0.396 -0.972 -0.522 -1.98t0.144 -2.34 0.432 -1.98 0.774 -2.304 0.684 -1.908q2.808 0.432 18.324 1.008zm-13.932 -21.096l6.48 13.644 -5.292 -3.312q-2.268 2.592 -4.014 5.202t-2.61 4.5 -1.422 3.402 -0.666 2.268l-0.144 0.756 -6.84 -12.852q-0.612 -0.936 -0.648 -2.016t0.216 -1.692l0.288 -0.648q1.26 -2.268 4.104 -6.768l-5.04 -3.096zm44.316 18.612l-6.768 12.924q-0.432 1.044 -1.314 1.674t-1.566 0.738l-0.648 0.144q-2.556 0.252 -7.884 0.432l0.288 5.904 -8.28 -13.212 7.596 -13.032 0.252 6.228q6.12 0.576 10.188 0.18t6.12 -1.188zm-28.26 -33.264q-1.692 2.268 -9.54 15.66l-11.412 -6.732 -0.684 -0.432 8.1 -12.816q0.72 -1.116 2.16 -1.62t2.88 -0.36q0.864 0.072 1.746 0.432t1.512 0.756 1.494 1.188 1.296 1.242 1.296 1.422 1.152 1.26zm23.58 11.052l7.632 13.068q0.648 1.332 0.45 2.736t-0.99 2.664q-0.468 0.72 -1.188 1.332t-1.368 1.008 -1.746 0.792 -1.692 0.576 -1.854 0.504 -1.656 0.432q-1.224 -2.592 -9.54 -15.696l11.268 -7.02zm-5.148 -8.136l5.112 -2.988 -7.92 13.428 -15.084 -0.72 5.436 -3.096q-1.224 -3.204 -2.7 -5.976t-2.718 -4.446 -2.322 -2.88 -1.692 -1.674l-0.612 -0.468 14.58 0.036q1.116 -0.108 2.088 0.378t1.404 1.026l0.396 0.54q1.404 2.196 4.032 6.84z','CAR':'M17.28 -25.271q0 -2.376 -1.692 -4.068t-4.068 -1.692 -4.068 1.692 -1.692 4.068 1.692 4.068 4.068 1.692 4.068 -1.692 1.692 -4.068zm1.296 -11.52h36.576l-3.204 -12.852q-0.072 -0.288 -0.504 -0.63t-0.756 -0.342h-27.648q-0.324 0 -0.756 0.342t-0.504 0.63zm49.392 11.52q0 -2.376 -1.692 -4.068t-4.068 -1.692 -4.068 1.692 -1.692 4.068 1.692 4.068 4.068 1.692 4.068 -1.692 1.692 -4.068zm5.76 -3.456v13.824q0 0.504 -0.324 0.828t-0.828 0.324h-3.456v4.608q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896v-4.608h-36.864v4.608q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896v-4.608h-3.456q-0.504 0 -0.828 -0.324t-0.324 -0.828v-13.824q0 -3.348 2.358 -5.706t5.706 -2.358h1.008l3.78 -15.084q0.828 -3.384 3.744 -5.67t6.444 -2.286h27.648q3.528 0 6.444 2.286t3.744 5.67l3.78 15.084h1.008q3.348 0 5.706 2.358t2.358 5.706z','TAXI':'M65.664 -32.183q3.348 0 5.706 2.358t2.358 5.706v13.824q0 0.504 -0.324 0.828t-0.828 0.324h-3.456v2.304q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896v-2.304h-36.864v2.304q0 2.88 -2.016 4.896t-4.896 2.016 -4.896 -2.016 -2.016 -4.896v-2.304h-3.456q-0.504 0 -0.828 -0.324t-0.324 -0.828v-13.824q0 -3.348 2.358 -5.706t5.706 -2.358h1.008l3.78 -15.084q0.828 -3.384 3.744 -5.67t6.444 -2.286h4.608v-8.064q0 -0.504 0.324 -0.828t0.828 -0.324h16.128q0.504 0 0.828 0.324t0.324 0.828v8.064h4.608q3.528 0 6.444 2.286t3.744 5.67l3.78 15.084h1.008zm-54.144 17.28q2.376 0 4.068 -1.692t1.692 -4.068 -1.692 -4.068 -4.068 -1.692 -4.068 1.692 -1.692 4.068 1.692 4.068 4.068 1.692zm7.056 -17.28h36.576l-3.204 -12.852q-0.072 -0.288 -0.504 -0.63t-0.756 -0.342h-27.648q-0.324 0 -0.756 0.342t-0.504 0.63zm43.632 17.28q2.376 0 4.068 -1.692t1.692 -4.068 -1.692 -4.068 -4.068 -1.692 -4.068 1.692 -1.692 4.068 1.692 4.068 4.068 1.692z','TREE':'M54.144 -11.447q0 0.936 -0.684 1.62t-1.62 0.684h-16.632q0.036 0.612 0.216 3.15t0.18 3.906q0 0.9 -0.648 1.53t-1.548 0.63h-11.52q-0.9 0 -1.548 -0.63t-0.648 -1.53q0 -1.368 0.18 -3.906t0.216 -3.15h-16.632q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l14.472 -14.508h-8.244q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l14.472 -14.508h-7.092q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62l13.824 -13.824q0.684 -0.684 1.62 -0.684t1.62 0.684l13.824 13.824q0.684 0.684 0.684 1.62t-0.684 1.62 -1.62 0.684h-7.092l14.472 14.508q0.684 0.684 0.684 1.62t-0.684 1.62 -1.62 0.684h-8.244l14.472 14.508q0.684 0.684 0.684 1.62z','SPOTIFY':'M40.572 -20.879q0 -1.152 -1.08 -1.836 -6.948 -4.14 -16.092 -4.14 -4.788 0 -10.332 1.224 -1.512 0.324 -1.512 1.872 0 0.72 0.486 1.242t1.278 0.522q0.18 0 1.332 -0.288 4.752 -0.972 8.748 -0.972 8.136 0 14.292 3.708 0.684 0.396 1.188 0.396 0.684 0 1.188 -0.486t0.504 -1.242zm3.456 -7.74q0 -1.44 -1.26 -2.196 -8.532 -5.076 -19.728 -5.076 -5.508 0 -10.908 1.512 -1.728 0.468 -1.728 2.304 0 0.9 0.63 1.53t1.53 0.63q0.252 0 1.332 -0.288 4.392 -1.188 9.036 -1.188 10.044 0 17.568 4.464 0.864 0.468 1.368 0.468 0.9 0 1.53 -0.63t0.63 -1.53zm3.888 -8.928q0 -1.692 -1.44 -2.52 -4.536 -2.628 -10.548 -3.978t-12.348 -1.35q-7.344 0 -13.104 1.692 -0.828 0.252 -1.386 0.918t-0.558 1.746q0 1.116 0.738 1.872t1.854 0.756q0.396 0 1.44 -0.288 4.788 -1.332 11.052 -1.332 5.724 0 11.142 1.224t9.126 3.42q0.756 0.432 1.44 0.432 1.044 0 1.818 -0.738t0.774 -1.854zm7.38 5.364q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','DEVIANTART':'M50.292 -59.831q2.088 0 3.546 1.458t1.458 3.546v45.288q0 2.088 -1.458 3.546t-3.546 1.458h-45.288q-2.088 0 -3.546 -1.458t-1.458 -3.546v-45.288q0 -2.088 1.458 -3.546t3.546 -1.458h45.288zm2.448 50.292v-45.288q0 -1.008 -0.72 -1.728t-1.728 -0.72h-45.288q-1.008 0 -1.728 0.72t-0.72 1.728v45.288q0 1.008 0.72 1.728t1.728 0.72h45.288q1.008 0 1.728 -0.72t0.72 -1.728zm-27.756 -26.568l6.768 13.932 19.188 -5.22v17.856q0 0.252 -0.198 0.45t-0.45 0.198h-45.288q-0.252 0 -0.45 -0.198t-0.198 -0.45v-5.076l25.596 -7.02 -7.632 -15.804q0.144 -0.036 0.432 -0.09t0.432 -0.054q6.12 -1.152 10.926 -0.774t7.956 1.656 5.166 3.402q0.972 1.008 -0.9 1.512 -2.304 0.576 -9.216 2.232l-3.492 -7.128q-3.996 -0.252 -8.64 0.576zm25.308 -19.368q0.252 0 0.45 0.198t0.198 0.45v15.408q-3.06 -1.08 -6.768 -1.872 -10.584 -2.304 -23.22 -0.432l-0.648 0.108 -2.34 -4.824h-8.388l3.06 6.84q-4.752 1.836 -8.28 4.932v-20.16q0 -0.252 0.198 -0.45t0.45 -0.198h45.288zm-39.996 32.4q-0.504 0.108 -0.936 -0.162t-0.504 -0.774q-0.864 -7.308 5.976 -10.98l4.644 9.72z','SOUNDCLOUD':'M28.224 -15.047l0.576 -8.676 -0.576 -18.828q-0.036 -0.36 -0.27 -0.612t-0.594 -0.252q-0.324 0 -0.576 0.252t-0.252 0.612l-0.504 18.828 0.504 8.676q0.036 0.36 0.27 0.594t0.558 0.234q0.792 0 0.864 -0.828zm10.656 -1.044l0.396 -7.596 -0.432 -21.096q0 -0.576 -0.468 -0.864 -0.288 -0.18 -0.576 -0.18t-0.576 0.18q-0.468 0.288 -0.468 0.864l-0.036 0.216 -0.36 20.844q0 0.036 0.396 8.496v0.036q0 0.36 0.216 0.612 0.324 0.396 0.828 0.396 0.396 0 0.72 -0.324 0.324 -0.252 0.324 -0.72zm-37.62 -12.24l0.72 4.608 -0.72 4.536q-0.072 0.324 -0.324 0.324t-0.324 -0.324l-0.612 -4.536 0.612 -4.608q0.072 -0.324 0.324 -0.324t0.324 0.324zm3.096 -2.844l0.936 7.452 -0.936 7.308q-0.072 0.324 -0.36 0.324 -0.324 0 -0.324 -0.36l-0.828 -7.272 0.828 -7.452q0 -0.324 0.324 -0.324 0.288 0 0.36 0.324zm10.08 16.308zm-6.768 -17.676l0.9 8.82 -0.9 8.532q0 0.396 -0.396 0.396 -0.36 0 -0.432 -0.396l-0.756 -8.532 0.756 -8.82q0.072 -0.432 0.432 -0.432 0.396 0 0.396 0.432zm3.384 -0.252l0.828 9.072 -0.828 8.784q-0.072 0.468 -0.504 0.468 -0.468 0 -0.468 -0.468l-0.756 -8.784 0.756 -9.072q0 -0.468 0.468 -0.468 0.432 0 0.504 0.468zm3.384 0.648l0.756 8.424 -0.756 8.856q-0.072 0.576 -0.576 0.576 -0.216 0 -0.378 -0.162t-0.162 -0.414l-0.72 -8.856 0.72 -8.424q0 -0.216 0.162 -0.378t0.378 -0.162q0.504 0 0.576 0.54zm13.788 17.1zm-10.404 -22.356l0.756 13.68 -0.756 8.856q0 0.252 -0.18 0.45t-0.432 0.198q-0.576 0 -0.648 -0.648l-0.648 -8.856 0.648 -13.68q0.072 -0.648 0.648 -0.648 0.252 0 0.432 0.198t0.18 0.45zm3.384 -3.096l0.684 16.848 -0.684 8.784q0 0.288 -0.198 0.486t-0.486 0.198q-0.648 0 -0.72 -0.684l-0.576 -8.784 0.576 -16.848q0.072 -0.684 0.72 -0.684 0.288 0 0.486 0.198t0.198 0.486zm3.528 -1.44l0.648 18.216 -0.648 8.712q-0.072 0.756 -0.792 0.756 -0.684 0 -0.756 -0.756l-0.576 -8.712 0.576 -18.216q0 -0.324 0.234 -0.558t0.522 -0.234q0.324 0 0.54 0.234t0.252 0.558zm14.112 26.712zm-7.128 -26.856l0.54 18.36 -0.54 8.604q0 0.36 -0.27 0.63t-0.63 0.27 -0.612 -0.252 -0.288 -0.648l-0.504 -8.604 0.504 -18.36q0 -0.396 0.27 -0.648t0.63 -0.252 0.63 0.252 0.27 0.648zm3.564 0.684l0.504 17.712 -0.504 8.496q0 0.396 -0.288 0.684t-0.684 0.288 -0.684 -0.288 -0.324 -0.684l-0.432 -8.496 0.432 -17.712q0.036 -0.432 0.324 -0.72t0.684 -0.288 0.666 0.288 0.306 0.72zm7.632 17.712l-0.504 8.316q0 0.468 -0.324 0.792t-0.792 0.324 -0.792 -0.324 -0.36 -0.792l-0.216 -4.104 -0.216 -4.212 0.432 -22.896v-0.108q0.072 -0.54 0.432 -0.864 0.324 -0.252 0.72 -0.252 0.288 0 0.54 0.18 0.504 0.288 0.576 0.936zm40.032 -0.684q0 4.212 -2.988 7.182t-7.2 2.97h-28.296q-0.468 -0.072 -0.792 -0.396t-0.324 -0.792v-32.364q0 -0.828 1.008 -1.188 3.06 -1.224 6.516 -1.224 7.02 0 12.168 4.734t5.76 11.646q1.908 -0.792 3.96 -0.792 4.212 0 7.2 2.988t2.988 7.236z','DATABASE':'M27.648 -36.791q8.532 0 15.948 -1.548t11.7 -4.572v6.12q0 2.484 -3.708 4.608t-10.08 3.366 -13.86 1.242 -13.86 -1.242 -10.08 -3.366 -3.708 -4.608v-6.12q4.284 3.024 11.7 4.572t15.948 1.548zm0 27.648q8.532 0 15.948 -1.548t11.7 -4.572v6.12q0 2.484 -3.708 4.608t-10.08 3.366 -13.86 1.242 -13.86 -1.242 -10.08 -3.366 -3.708 -4.608v-6.12q4.284 3.024 11.7 4.572t15.948 1.548zm0 -13.824q8.532 0 15.948 -1.548t11.7 -4.572v6.12q0 2.484 -3.708 4.608t-10.08 3.366 -13.86 1.242 -13.86 -1.242 -10.08 -3.366 -3.708 -4.608v-6.12q4.284 3.024 11.7 4.572t15.948 1.548zm0 -41.472q7.488 0 13.86 1.242t10.08 3.366 3.708 4.608v4.608q0 2.484 -3.708 4.608t-10.08 3.366 -13.86 1.242 -13.86 -1.242 -10.08 -3.366 -3.708 -4.608v-4.608q0 -2.484 3.708 -4.608t10.08 -3.366 13.86 -1.242z','FILE_PDF_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-18.504 -21.348q1.188 0.936 3.024 2.016 2.124 -0.252 4.212 -0.252 5.292 0 6.372 1.764 0.576 0.792 0.072 1.872l-0.036 0.072 -0.072 0.072v0.036q-0.216 1.368 -2.556 1.368 -1.728 0 -4.14 -0.72t-4.68 -1.908q-7.956 0.864 -14.112 2.988 -5.508 9.432 -8.712 9.432 -0.54 0 -1.008 -0.252l-0.864 -0.432 -0.216 -0.18q-0.36 -0.36 -0.216 -1.296 0.324 -1.44 2.016 -3.294t4.752 -3.474q0.504 -0.324 0.828 0.216 0.072 0.072 0.072 0.144 1.872 -3.06 3.852 -7.092 2.448 -4.896 3.744 -9.432 -0.864 -2.952 -1.098 -5.742t0.234 -4.59q0.396 -1.44 1.512 -1.44h0.792q0.828 0 1.26 0.54 0.648 0.756 0.324 2.448 -0.072 0.216 -0.144 0.288 0.036 0.108 0.036 0.288v1.08q-0.072 4.428 -0.504 6.912 1.98 5.904 5.256 8.568zm-20.736 14.796q1.872 -0.864 4.932 -5.688 -1.836 1.44 -3.15 3.024t-1.782 2.664zm14.328 -33.12q-0.54 1.512 -0.072 4.752 0.036 -0.252 0.252 -1.584 0 -0.108 0.252 -1.548 0.036 -0.144 0.144 -0.288l-0.036 -0.072 -0.018 -0.054 -0.018 -0.054q-0.036 -0.792 -0.468 -1.296l-0.036 0.072v0.072zm-4.464 23.796q4.86 -1.944 10.224 -2.916 -0.072 -0.036 -0.468 -0.342t-0.576 -0.486q-2.736 -2.412 -4.572 -6.336 -0.972 3.096 -2.988 7.092 -1.08 2.016 -1.62 2.988zm23.256 -0.576q-0.864 -0.864 -5.04 -0.864 2.736 1.008 4.464 1.008 0.504 0 0.648 -0.036l-0.072 -0.108z','FILE_WORD_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-42.3 -32.256v3.852h2.52l5.904 23.796h5.724l4.608 -17.46q0.252 -0.72 0.36 -1.656 0.072 -0.576 0.072 -0.864h0.144l0.108 0.864q0.036 0.108 0.126 0.72t0.198 0.936l4.608 17.46h5.724l5.904 -23.796h2.52v-3.852h-10.8v3.852h3.24l-3.564 15.768q-0.18 0.72 -0.252 1.656l-0.072 0.756h-0.144l-0.108 -0.756q-0.036 -0.18 -0.144 -0.756t-0.18 -0.9l-5.184 -19.62h-4.104l-5.184 19.62q-0.072 0.324 -0.162 0.882t-0.126 0.774l-0.144 0.756h-0.144l-0.072 -0.756q-0.072 -0.936 -0.252 -1.656l-3.564 -15.768h3.24v-3.852h-10.8z','FILE_EXCEL_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-35.244 -8.424v3.816h10.116v-3.816h-2.7l3.708 -5.796q0.18 -0.252 0.36 -0.594t0.27 -0.486 0.126 -0.144h0.072q0.036 0.144 0.18 0.36 0.072 0.144 0.162 0.27t0.216 0.288 0.234 0.306l3.852 5.796h-2.736v3.816h10.476v-3.816h-2.448l-6.912 -9.828 7.02 -10.152h2.412v-3.852h-10.044v3.852h2.664l-3.708 5.724q-0.144 0.252 -0.36 0.594t-0.324 0.486l-0.072 0.108h-0.072q-0.036 -0.144 -0.18 -0.36 -0.216 -0.396 -0.612 -0.828l-3.816 -5.724h2.736v-3.852h-10.44v3.852h2.448l6.804 9.792 -6.984 10.188h-2.448z','FILE_POWERPOINT_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-35.712 -8.424v3.816h11.772v-3.816h-3.348v-6.012h4.932q2.736 0 4.248 -0.54 2.412 -0.828 3.834 -3.132t1.422 -5.256q0 -2.916 -1.332 -5.076t-3.6 -3.132q-1.728 -0.684 -4.68 -0.684h-13.248v3.852h3.312v19.98h-3.312zm12.708 -10.08h-4.284v-9.648h4.32q1.872 0 2.988 0.648 2.016 1.188 2.016 4.14 0 3.204 -2.232 4.32 -1.116 0.54 -2.808 0.54z','FILE_PICTURE_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-4.608 -16.128v11.52h-36.864v-6.912l6.912 -6.912 4.608 4.608 13.824 -13.824zm-29.952 -6.912q-2.88 0 -4.896 -2.016t-2.016 -4.896 2.016 -4.896 4.896 -2.016 4.896 2.016 2.016 4.896 -2.016 4.896 -4.896 2.016z','FILE_ZIP_O':'M23.04 -50.615v-4.608h-4.608v4.608h4.608zm4.608 4.608v-4.608h-4.608v4.608h4.608zm-4.608 4.608v-4.608h-4.608v4.608h4.608zm4.608 4.608v-4.608h-4.608v4.608h4.608zm25.2 -13.968q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-4.608v4.608h-4.608v-4.608h-18.432v55.296h46.08zm-22.572 -25.956l3.852 12.564q0.288 0.972 0.288 1.872 0 2.988 -2.61 4.95t-6.606 1.962 -6.606 -1.962 -2.61 -4.95q0 -0.9 0.288 -1.872 0.756 -2.268 4.32 -14.256v-4.608h4.608v4.608h2.844q0.792 0 1.404 0.468t0.828 1.224zm-5.076 16.74q1.908 0 3.258 -0.684t1.35 -1.62 -1.35 -1.62 -3.258 -0.684 -3.258 0.684 -1.35 1.62 1.35 1.62 3.258 0.684z','FILE_SOUND_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-28.368 -29.304q0.72 0.288 0.72 1.08v19.584q0 0.792 -0.72 1.08 -0.288 0.072 -0.432 0.072 -0.432 0 -0.828 -0.324l-5.976 -6.012h-4.716q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h4.716l5.976 -6.012q0.576 -0.54 1.26 -0.252zm15.012 24.804q1.116 0 1.8 -0.864 4.644 -5.724 4.644 -13.068t-4.644 -13.068q-0.576 -0.756 -1.548 -0.864t-1.692 0.504q-0.756 0.612 -0.846 1.566t0.522 1.71q3.6 4.428 3.6 10.152t-3.6 10.152q-0.612 0.756 -0.522 1.71t0.846 1.53q0.648 0.54 1.44 0.54zm-7.596 -5.328q0.972 0 1.692 -0.72 3.132 -3.348 3.132 -7.884t-3.132 -7.884q-0.648 -0.684 -1.62 -0.72t-1.656 0.612 -0.72 1.602 0.648 1.674q1.872 2.052 1.872 4.716t-1.872 4.716q-0.684 0.72 -0.648 1.674t0.72 1.602q0.72 0.612 1.584 0.612z','FILE_VIDEO_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-23.04 -32.256q1.872 0 3.24 1.368t1.368 3.24v13.824q0 1.872 -1.368 3.24t-3.24 1.368h-13.824q-1.872 0 -3.24 -1.368t-1.368 -3.24v-13.824q0 -1.872 1.368 -3.24t3.24 -1.368h13.824zm17.712 0.072q0.72 0.288 0.72 1.08v20.736q0 0.792 -0.72 1.08 -0.288 0.072 -0.432 0.072 -0.504 0 -0.828 -0.324l-9.54 -9.576v-3.24l9.54 -9.576q0.324 -0.324 0.828 -0.324 0.144 0 0.432 0.072z','FILE_CODE_O':'M52.848 -50.759q1.008 1.008 1.728 2.736t0.72 3.168v41.472q0 1.44 -1.008 2.448t-2.448 1.008h-48.384q-1.44 0 -2.448 -1.008t-1.008 -2.448v-57.6q0 -1.44 1.008 -2.448t2.448 -1.008h32.256q1.44 0 3.168 0.72t2.736 1.728zm-15.984 -8.784v13.536h13.536q-0.36 -1.044 -0.792 -1.476l-11.268 -11.268q-0.432 -0.432 -1.476 -0.792zm13.824 55.008v-36.864h-14.976q-1.44 0 -2.448 -1.008t-1.008 -2.448v-14.976h-27.648v55.296h46.08zm-33.408 -32.256q0.288 -0.396 0.756 -0.45t0.864 0.234l1.836 1.368q0.396 0.288 0.45 0.756t-0.234 0.864l-6.552 8.748 6.552 8.748q0.288 0.396 0.234 0.864t-0.45 0.756l-1.836 1.368q-0.396 0.288 -0.864 0.234t-0.756 -0.45l-8.136 -10.836q-0.504 -0.684 0 -1.368zm28.872 10.836q0.504 0.684 0 1.368l-8.136 10.836q-0.288 0.396 -0.756 0.45t-0.864 -0.234l-1.836 -1.368q-0.396 -0.288 -0.45 -0.756t0.234 -0.864l6.552 -8.748 -6.552 -8.748q-0.288 -0.396 -0.234 -0.864t0.45 -0.756l1.836 -1.368q0.396 -0.288 0.864 -0.234t0.756 0.45zm-22.32 16.596q-0.468 -0.072 -0.738 -0.468t-0.198 -0.864l4.968 -29.916q0.072 -0.468 0.468 -0.738t0.864 -0.198l2.268 0.36q0.468 0.072 0.738 0.468t0.198 0.864l-4.968 29.916q-0.072 0.468 -0.468 0.738t-0.864 0.198z','VINE':'M53.892 -34.667v7.128q-3.636 0.828 -7.128 0.828 -2.34 4.896 -5.958 9.756t-6.534 7.758 -4.608 3.834q-2.88 1.62 -5.832 -0.108 -1.008 -0.612 -2.178 -1.566t-3.06 -3.006 -3.69 -4.626 -3.87 -6.624 -3.798 -8.784 -3.294 -11.322 -2.538 -14.04h10.188q0.936 7.848 2.52 14.346t3.762 11.412 4.374 8.478 5.04 7.02q6.084 -6.084 10.332 -14.616 -5.112 -2.592 -8.028 -7.92t-2.916 -11.988q0 -6.912 3.744 -11.322t10.224 -4.41q6.408 0 9.828 3.798t3.42 10.71q0 5.724 -2.088 10.296 -0.252 0.036 -0.702 0.108t-1.656 0.072 -2.268 -0.216 -2.232 -0.918 -1.818 -1.854q1.116 -3.708 1.116 -6.624 0 -3.132 -1.044 -4.752t-2.844 -1.62q-1.908 0 -3.06 1.782t-1.152 5.058q0 6.696 3.78 10.566t9.612 3.87q2.232 0 4.356 -0.504z','CODEPEN':'M7.776 -22.355l21.708 14.472v-12.924l-12.024 -8.028zm-2.232 -5.184l6.948 -4.644 -6.948 -4.644v9.288zm29.484 19.656l21.708 -14.472 -9.684 -6.48 -12.024 8.028v12.924zm-2.772 -17.748l9.792 -6.552 -9.792 -6.552 -9.792 6.552zm-14.796 -9.9l12.024 -8.028v-12.924l-21.708 14.472zm34.56 3.348l6.948 4.644v-9.288zm-4.968 -3.348l9.684 -6.48 -21.708 -14.472v12.924zm17.46 -6.48v19.656q0 1.476 -1.224 2.304l-29.484 19.656q-0.756 0.468 -1.548 0.468t-1.548 -0.468l-29.484 -19.656q-1.224 -0.828 -1.224 -2.304v-19.656q0 -1.476 1.224 -2.304l29.484 -19.656q0.756 -0.468 1.548 -0.468t1.548 0.468l29.484 19.656q1.224 0.828 1.224 2.304z','JSFIDDLE':'M64.8 -36.647q3.996 1.656 6.462 5.238t2.466 7.974q0 5.904 -4.248 10.098t-10.26 4.194l-0.414 -0.018 -0.378 -0.018h-43.812000000000005q-6.12 -0.36 -10.368 -4.518t-4.248 -10.098q0 -3.96 1.98 -7.308t5.292 -5.292q-0.432 -1.404 -0.432 -2.952 0 -4.14 2.952 -7.056t7.164 -2.916q3.42 0 6.192 2.088 2.7 -5.544 8.01 -8.928t11.754 -3.384q5.976 0 11.016 2.898t7.974 7.866 2.934 10.836l-0.018 0.648 -0.018 0.648zm-47.952 9.576q0 4.392 3.024 6.948t7.488 2.556q4.932 0 8.64 -3.564 -0.576 -0.72 -1.71 -2.034t-1.566 -1.818q-2.412 2.34 -5.184 2.34 -1.98 0 -3.366 -1.206t-1.386 -3.15q0 -1.908 1.386 -3.132t3.294 -1.224q1.584 0 3.042 0.756t2.628 1.98 2.34 2.7 2.484 2.952 2.772 2.7 3.492 1.98 4.374 0.756q4.356 0 7.362 -2.574t3.006 -6.858q0 -4.356 -3.024 -6.912t-7.452 -2.556q-5.148 0 -8.676 3.492 0.504 0.576 1.062 1.224t1.242 1.44 1.044 1.224q2.376 -2.304 5.112 -2.304 1.872 0 3.312 1.188t1.44 3.024q0 2.052 -1.332 3.294t-3.384 1.242q-1.548 0 -2.97 -0.756t-2.592 -1.98 -2.358 -2.7 -2.502 -2.952 -2.79 -2.7 -3.474 -1.98 -4.266 -0.756q-4.392 0 -7.452 2.538t-3.06 6.822z','SUPPORT':'M32.256 -64.439q6.552 0 12.528 2.556t10.296 6.876 6.876 10.296 2.556 12.528 -2.556 12.528 -6.876 10.296 -10.296 6.876 -12.528 2.556 -12.528 -2.556 -10.296 -6.876 -6.876 -10.296 -2.556 -12.528 2.556 -12.528 6.876 -10.296 10.296 -6.876 12.528 -2.556zm0 4.608q-6.84 0 -12.996 3.24l6.984 6.984q2.952 -1.008 6.012 -1.008t6.012 1.008l6.984 -6.984q-6.156 -3.24 -12.996 -3.24zm-24.408 40.644l6.984 -6.984q-1.008 -2.952 -1.008 -6.012t1.008 -6.012l-6.984 -6.984q-3.24 6.156 -3.24 12.996t3.24 12.996zm24.408 14.652q6.84 0 12.996 -3.24l-6.984 -6.984q-2.952 1.008 -6.012 1.008t-6.012 -1.008l-6.984 6.984q6.156 3.24 12.996 3.24zm0 -13.824q5.724 0 9.774 -4.05t4.05 -9.774 -4.05 -9.774 -9.774 -4.05 -9.774 4.05 -4.05 9.774 4.05 9.774 9.774 4.05zm17.424 -7.812l6.984 6.984q3.24 -6.156 3.24 -12.996t-3.24 -12.996l-6.984 6.984q1.008 2.952 1.008 6.012t-1.008 6.012z','CIRCLE_O_NOTCH':'M64.512 -32.183q0 6.552 -2.556 12.528t-6.876 10.296 -10.296 6.876 -12.528 2.556 -12.528 -2.556 -10.296 -6.876 -6.876 -10.296 -2.556 -12.528q0 -7.992 3.636 -14.922t9.954 -11.412 14.058 -5.598v9.36q-7.956 1.62 -13.194 7.956t-5.238 14.616q0 4.68 1.836 8.946t4.914 7.344 7.344 4.914 8.946 1.836 8.946 -1.836 7.344 -4.914 4.914 -7.344 1.836 -8.946q0 -8.28 -5.238 -14.616t-13.194 -7.956v-9.36q7.74 1.116 14.058 5.598t9.954 11.412 3.636 14.922z','REBEL':'M0.684 -32.975q0.288 -7.812 4.176 -14.616t10.98 -11.448h0.18l-0.036 0.108q-0.288 0.288 -1.008 1.206t-1.872 2.754 -2.16 3.978 -1.602 4.878 -0.504 5.418 1.404 5.67 3.906 5.544q1.8 1.8 3.672 2.502t3.258 0.414 2.502 -0.846 1.692 -1.17l0.576 -0.576q1.404 -1.836 1.908 -4.194t0.234 -4.41 -0.756 -3.852 -0.954 -2.88l-0.504 -1.044q-0.36 -0.9 -1.098 -1.782t-1.548 -1.476 -1.566 -1.062 -1.26 -0.684l-0.468 -0.216 3.744 -4.14q1.404 0.612 2.808 1.872t2.124 2.196l0.684 0.972q0.036 -1.728 -0.666 -3.726t-1.458 -3.15l-0.72 -1.116 5.796 -6.588 5.76 6.516q-1.188 1.656 -1.89 3.69t-0.81 3.258l-0.144 1.188q0.792 -1.332 2.214 -2.61t2.43 -1.89l1.008 -0.612 3.708 4.14q-1.584 0.504 -3.06 1.8t-2.16 2.34l-0.684 1.044q-1.116 2.016 -1.728 4.806t-0.252 6.12 2.052 5.634q1.188 1.62 2.79 2.178t3.06 0.198 2.736 -0.954 2.07 -1.206l0.756 -0.576q2.16 -1.908 3.474 -4.14t1.746 -4.374 0.36 -4.374 -0.648 -4.248 -1.332 -3.87 -1.638 -3.348 -1.62 -2.592 -1.242 -1.71l-0.468 -0.612q-0.504 -0.468 -0.252 -0.468l0.36 0.108q1.44 1.044 2.25 1.656t2.232 1.8 2.304 2.088 2.106 2.34 1.998 2.772 1.638 3.168 1.368 3.708 0.846 4.212 0.378 4.896q0.108 9.324 -3.888 16.74t-11.232 11.556 -16.416 4.14q-6.66 0 -12.636 -2.664t-10.206 -7.128 -6.624 -10.548 -2.178 -12.708z','GE':'M31.464 -5.471v2.376q-7.488 -0.216 -13.86 -3.942t-10.188 -9.918l2.088 -1.224q1.044 1.764 2.628 3.564l2.34 -2.052q5.328 6.048 13.248 7.632l-0.612 3.096q2.34 0.432 4.356 0.468zm-21.528 -19.08l-2.988 1.008q0.792 2.16 1.764 4.032l-2.052 1.188q-3.528 -6.48 -3.528 -13.86t3.528 -13.86l2.052 1.188q-1.08 2.016 -1.764 4.032l2.952 1.008q-1.26 3.6 -1.26 7.632 0 3.924 1.296 7.632zm45.072 6.372l2.088 1.224q-3.816 6.192 -10.188 9.918t-13.86 3.942v-2.376q2.016 -0.036 4.356 -0.468l-0.612 -3.096q7.92 -1.584 13.248 -7.632l2.34 2.052q1.584 -1.8 2.628 -3.564zm-5.436 -19.944l-8.388 2.88q0.504 1.512 0.504 3.06t-0.504 3.06l8.352 2.88q-1.116 3.312 -3.528 6.084l-6.66 -5.832q-2.052 2.412 -5.292 3.06l1.728 8.676q-1.872 0.36 -3.528 0.36t-3.528 -0.36l1.728 -8.676q-3.24 -0.648 -5.292 -3.06l-6.66 5.832q-2.412 -2.772 -3.528 -6.084l8.352 -2.88q-0.504 -1.512 -0.504 -3.06t0.504 -3.06l-8.388 -2.88q1.188 -3.348 3.564 -6.084l6.66 5.832q2.124 -2.448 5.292 -3.096l-1.728 -8.64q1.584 -0.36 3.528 -0.36t3.528 0.36l-1.728 8.64q3.168 0.648 5.292 3.096l6.66 -5.832q2.376 2.736 3.564 6.084zm-18.108 -23.148v2.376q-2.34 0.072 -4.356 0.468l0.612 3.096q-7.92 1.512 -13.248 7.596l-2.34 -2.016q-1.368 1.512 -2.628 3.528l-2.052 -1.188q3.816 -6.192 10.152 -9.918t13.86 -3.942zm29.916 29.088q0 7.38 -3.528 13.86l-2.052 -1.188q0.972 -1.872 1.764 -4.032l-2.988 -1.008q1.296 -3.708 1.296 -7.632 0 -4.032 -1.26 -7.632l2.952 -1.008q-0.684 -2.016 -1.764 -4.032l2.052 -1.188q3.528 6.48 3.528 13.86zm-4.32 -15.228l-2.052 1.188q-1.26 -2.016 -2.628 -3.528l-2.34 2.016q-5.328 -6.084 -13.248 -7.596l0.612 -3.096q-2.016 -0.396 -4.356 -0.468v-2.376q7.524 0.216 13.86 3.942t10.152 9.918zm5.868 15.228q0 -6.228 -2.43 -11.916t-6.534 -9.792 -9.792 -6.534 -11.916 -2.43 -11.916 2.43 -9.792 6.534 -6.534 9.792 -2.43 11.916 2.43 11.916 6.534 9.792 9.792 6.534 11.916 2.43 11.916 -2.43 9.792 -6.534 6.534 -9.792 2.43 -11.916zm1.584 0q0 6.552 -2.556 12.528t-6.876 10.296 -10.296 6.876 -12.528 2.556 -12.528 -2.556 -10.296 -6.876 -6.876 -10.296 -2.556 -12.528 2.556 -12.528 6.876 -10.296 10.296 -6.876 12.528 -2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z','GIT_SQUARE':'M20.952 -17.351q0 2.376 -3.348 2.376 -3.852 0 -3.852 -2.268 0 -2.304 3.528 -2.304 3.672 0 3.672 2.196zm-1.296 -16.776q0 3.06 -2.664 3.06 -2.772 0 -2.772 -3.024 0 -3.24 2.772 -3.24 1.296 0 1.98 0.918t0.684 2.286zm5.976 -2.7v-4.5q-2.808 1.044 -4.86 1.044 -1.8 -1.044 -3.96 -1.044 -3.096 0 -5.22 2.052t-2.124 5.148q0 1.8 1.062 3.672t2.646 2.412v0.108q-1.368 0.612 -1.368 3.06 0 1.908 1.476 2.772v0.108q-4.068 1.332 -4.068 5.004 0 1.62 0.72 2.826t1.944 1.836 2.592 0.918 2.916 0.288q8.064 0 8.064 -6.768 0 -2.412 -1.728 -3.564t-4.536 -1.656q-0.972 -0.18 -1.854 -0.738t-0.882 -1.422q0 -1.584 1.764 -1.872 2.772 -0.54 4.392 -2.52t1.62 -4.824q0 -0.864 -0.36 -1.872 1.332 -0.324 1.764 -0.468zm2.124 15.084h4.932q-0.072 -0.972 -0.072 -2.952v-13.932q0 -1.656 0.072 -2.484h-4.932q0.108 0.828 0.108 2.556v14.112q0 1.8 -0.108 2.7zm18.324 -0.576v-4.356q-1.08 0.756 -2.448 0.756 -1.908 0 -1.908 -2.952v-8.1h1.872q0.324 0 0.954 0.036t0.954 0.036v-4.212h-3.78q0 -2.952 0.108 -3.672h-5.04q0.144 0.864 0.144 1.98v1.692h-2.16v4.212l1.332 -0.108 0.396 0.018 0.432 0.018v0.072h-0.072v7.812q0 1.332 0.09 2.304t0.414 2.034 0.882 1.746 1.566 1.116 2.376 0.432q2.304 0 3.888 -0.864zm-12.816 -25.416q0 -1.296 -0.864 -2.286t-2.16 -0.99 -2.178 0.972 -0.882 2.304q0 1.296 0.9 2.25t2.16 0.954 2.142 -0.972 0.882 -2.232zm22.032 -1.728v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','GIT':'M21.42 -9.935q0 -3.6 -5.94 -3.6 -5.688 0 -5.688 3.744 0 3.636 6.192 3.636 5.436 0 5.436 -3.78zm-2.124 -27.18q0 -2.196 -1.08 -3.672t-3.204 -1.476q-4.464 0 -4.464 5.22 0 4.86 4.464 4.86 4.284 0 4.284 -4.932zm9.684 -11.664v7.272q-1.296 0.432 -2.844 0.792 0.576 1.548 0.576 3.024 0 4.572 -2.628 7.794t-7.092 4.05q-1.44 0.288 -2.142 0.972t-0.702 2.088q0 1.116 0.81 1.854t2.088 1.152 2.826 0.792 3.096 0.918 2.826 1.35 2.088 2.304 0.81 3.546q0 10.944 -13.068 10.944 -2.484 0 -4.68 -0.45t-4.176 -1.476 -3.15 -2.952 -1.17 -4.59q0 -5.94 6.552 -8.1v-0.144q-2.412 -1.476 -2.412 -4.536 0 -3.924 2.268 -4.932v-0.144q-2.592 -0.864 -4.302 -3.906t-1.71 -5.958q0 -5.004 3.42 -8.334t8.46 -3.33q3.456 0 6.408 1.692 3.528 0 7.848 -1.692zm11.448 31.716h-7.992q0.144 -1.62 0.144 -4.824v-21.924q0 -3.384 -0.144 -4.608h7.992q-0.144 1.188 -0.144 4.464v22.068q0 3.204 0.144 4.824zm21.636 -7.992v7.056q-2.556 1.404 -6.264 1.404 -2.232 0 -3.852 -0.72t-2.52 -1.8 -1.422 -2.808 -0.666 -3.312 -0.144 -3.708v-12.636h0.072v-0.144q-0.252 0 -0.684 -0.036t-0.648 -0.036q-0.756 0 -2.124 0.216v-6.84h3.456v-2.736q0 -1.944 -0.216 -3.204h8.172q-0.216 1.476 -0.216 5.94h6.156v6.84q-0.54 0 -1.566 -0.072t-1.53 -0.072h-3.06v13.14q0 4.716 3.132 4.716 2.196 0 3.924 -1.188zm-20.736 -34.092q0 2.088 -1.404 3.654t-3.456 1.566q-2.088 0 -3.528 -1.566t-1.44 -3.654q0 -2.124 1.422 -3.708t3.546 -1.584q2.088 0 3.474 1.602t1.386 3.69z','HACKER_NEWS':'M29.7 -28.835l12.348 -21.168h-5.4q-0.756 1.404 -2.286 4.266t-2.448 4.626 -2.142 4.266 -2.16 4.626h-0.108q-0.756 -1.728 -1.602 -3.492t-1.872 -3.798 -1.674 -3.312 -1.944 -3.762 -1.764 -3.42h-5.4l11.628 21.204v15.66h4.824v-15.696zm25.596 -20.628v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','TENCENT_WEIBO':'M30.312 -43.847q0 2.88 -2.052 4.914t-4.896 2.034q-2.16 0 -3.996 -1.26 -2.232 2.412 -4.14 5.256 -8.892 13.356 -7.272 30.924 0.036 0.792 -0.45 1.386t-1.242 0.666h-0.18q-0.72 0 -1.26 -0.486t-0.612 -1.206q-0.504 -4.536 -0.126 -8.91t1.062 -7.812 1.944 -6.696 2.484 -5.598 2.664 -4.5q2.196 -3.24 4.752 -5.94 -0.576 -1.26 -0.576 -2.772 0 -2.88 2.034 -4.914t4.914 -2.034 4.914 2.034 2.034 4.914zm13.716 0.396q0 5.688 -2.808 10.512t-7.65 7.632 -10.53 2.808q-2.304 0 -4.716 -0.504 -0.756 -0.18 -1.17 -0.846t-0.234 -1.422q0.18 -0.72 0.828 -1.134t1.404 -0.27q1.836 0.468 3.888 0.468 3.492 0 6.696 -1.368t5.508 -3.672 3.672 -5.508 1.368 -6.696 -1.368 -6.696 -3.672 -5.508 -5.508 -3.672 -6.696 -1.368 -6.696 1.368 -5.508 3.672 -3.672 5.508 -1.368 6.696q0 4.104 1.872 7.848 0.36 0.72 0.126 1.44t-0.918 1.08 -1.422 0.108 -1.098 -0.936q-2.304 -4.428 -2.304 -9.54 0 -4.284 1.674 -8.172t4.482 -6.696 6.696 -4.464 8.136 -1.656q5.688 0 10.53 2.808t7.65 7.65 2.808 10.53z','QQ':'M9.72 -35.423q-0.288 -0.684 -0.288 -1.872 0 -0.72 0.396 -1.764t0.864 -1.62q-0.036 -0.792 0.27 -1.908t0.81 -1.548q0 -5.004 3.33 -10.386t7.83 -7.542q5.004 -2.376 11.664 -2.376 4.788 0 9.576 1.98 1.764 0.756 3.24 1.728t2.556 2.016 1.98 2.448 1.512 2.664 1.17 3.042 0.918 3.222 0.792 3.528l0.036 0.18q1.98 2.988 1.98 5.4 0 0.504 -0.324 1.44t-0.324 1.368l0.054 0.126 0.126 0.18 0.072 0.126q2.772 4.104 4.338 7.722t1.566 7.506q0 1.548 -0.702 3.6t-1.998 2.052q-0.324 0 -0.702 -0.27t-0.684 -0.63 -0.684 -0.936 -0.576 -0.954 -0.486 -0.936 -0.324 -0.63l-0.108 -0.036 -0.18 0.144q-2.124 5.544 -4.752 8.028 0.72 0.72 2.214 1.386t2.484 1.494 1.278 2.34q-0.072 0.144 -0.144 0.576t-0.252 0.648q-2.304 3.492 -10.872 3.492 -1.908 0 -3.978 -0.324t-3.528 -0.72 -3.762 -1.08q-0.54 -0.18 -0.828 -0.252 -0.504 -0.144 -1.656 -0.162t-1.44 -0.054q-1.476 1.62 -4.59 2.34t-6.066 0.72q-1.26 0 -2.484 -0.054t-3.348 -0.324 -3.636 -0.738 -2.682 -1.44 -1.17 -2.304q0 -1.44 0.36 -2.142t1.476 -1.746q0.396 -0.072 1.458 -0.468t1.782 -0.432q0.144 0 0.504 -0.072 0.072 -0.072 0.072 -0.144l-0.072 -0.108q-1.728 -0.396 -3.888 -3.798t-2.628 -5.634l-0.18 -0.108q-0.144 0 -0.432 0.72 -0.648 1.476 -1.962 2.682t-2.79 1.35h-0.036q-0.144 0 -0.216 -0.162t-0.18 -0.198q-0.828 -1.944 -0.828 -3.6 0 -9.9 9.072 -16.776z','WEIXIN':'M20.88 -47.843q0 -1.476 -0.9 -2.376t-2.376 -0.9q-1.548 0 -2.736 0.918t-1.188 2.358q0 1.404 1.188 2.322t2.736 0.918q1.476 0 2.376 -0.882t0.9 -2.358zm26.748 18.252q0 -1.008 -0.918 -1.8t-2.358 -0.792q-0.972 0 -1.782 0.81t-0.81 1.782q0 1.008 0.81 1.818t1.782 0.81q1.44 0 2.358 -0.792t0.918 -1.836zm-8.496 -18.252q0 -1.476 -0.882 -2.376t-2.358 -0.9q-1.548 0 -2.736 0.918t-1.188 2.358q0 1.404 1.188 2.322t2.736 0.918q1.476 0 2.358 -0.882t0.882 -2.358zm22.86 18.252q0 -1.008 -0.936 -1.8t-2.34 -0.792q-0.972 0 -1.782 0.81t-0.81 1.782q0 1.008 0.81 1.818t1.782 0.81q1.404 0 2.34 -0.792t0.936 -1.836zm-9.576 -14.292q-1.116 -0.144 -2.52 -0.144 -6.084 0 -11.196 2.772t-8.046 7.506 -2.934 10.35q0 2.808 0.828 5.472 -1.26 0.108 -2.448 0.108 -0.936 0 -1.8 -0.054t-1.98 -0.234 -1.602 -0.252 -1.962 -0.378 -1.8 -0.378l-9.108 4.572 2.592 -7.848q-10.44 -7.308 -10.44 -17.64 0 -6.084 3.51 -11.196t9.504 -8.046 13.086 -2.934q6.336 0 11.97 2.376t9.432 6.57 4.914 9.378zm21.312 20.196q0 4.212 -2.466 8.046t-6.678 6.966l1.98 6.516 -7.164 -3.924q-5.4 1.332 -7.848 1.332 -6.084 0 -11.196 -2.538t-8.046 -6.894 -2.934 -9.504 2.934 -9.504 8.046 -6.894 11.196 -2.538q5.796 0 10.908 2.538t8.19 6.912 3.078 9.486z','SEND':'M63.504 -64.043q1.188 0.864 0.972 2.304l-9.216 55.296q-0.18 1.044 -1.152 1.62 -0.504 0.288 -1.116 0.288 -0.396 0 -0.864 -0.18l-16.308 -6.66 -8.712 10.62q-0.648 0.828 -1.764 0.828 -0.468 0 -0.792 -0.144 -0.684 -0.252 -1.098 -0.846t-0.414 -1.314v-12.564l31.104 -38.124 -38.484 33.3 -14.22 -5.832q-1.332 -0.504 -1.44 -1.98 -0.072 -1.44 1.152 -2.124l59.904 -34.56q0.54 -0.324 1.152 -0.324 0.72 0 1.296 0.396z','SEND_O':'M63.504 -64.043q1.188 0.864 0.972 2.304l-9.216 55.296q-0.18 1.044 -1.152 1.62 -0.504 0.288 -1.116 0.288 -0.396 0 -0.864 -0.18l-18.972 -7.74 -10.728 11.772q-0.648 0.756 -1.692 0.756 -0.504 0 -0.828 -0.144 -0.684 -0.252 -1.08 -0.846t-0.396 -1.314v-16.272l-16.992 -6.948q-1.332 -0.504 -1.44 -1.98 -0.108 -1.404 1.152 -2.124l59.904 -34.56q1.26 -0.756 2.448 0.072zm-12.312 53.964l7.956 -47.628 -51.624 29.772 12.096 4.932 31.068 -23.004 -17.208 28.692z','HISTORY':'M55.296 -32.183q0 5.616 -2.196 10.728t-5.904 8.82 -8.82 5.904 -10.728 2.196q-6.192 0 -11.772 -2.61t-9.504 -7.362q-0.252 -0.36 -0.234 -0.81t0.306 -0.738l4.932 -4.968q0.36 -0.324 0.9 -0.324 0.576 0.072 0.828 0.432 2.628 3.42 6.444 5.292t8.1 1.872q3.744 0 7.146 -1.458t5.886 -3.942 3.942 -5.886 1.458 -7.146 -1.458 -7.146 -3.942 -5.886 -5.886 -3.942 -7.146 -1.458q-3.528 0 -6.768 1.278t-5.76 3.654l4.932 4.968q1.116 1.08 0.504 2.484 -0.612 1.44 -2.124 1.44h-16.128q-0.936 0 -1.62 -0.684t-0.684 -1.62v-16.128q0 -1.512 1.44 -2.124 1.404 -0.612 2.484 0.504l4.68 4.644q3.852 -3.636 8.802 -5.634t10.242 -1.998q5.616 0 10.728 2.196t8.82 5.904 5.904 8.82 2.196 10.728zm-23.04 -10.368v16.128q0 0.504 -0.324 0.828t-0.828 0.324h-11.52q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h8.064v-12.672q0 -0.504 0.324 -0.828t0.828 -0.324h2.304q0.504 0 0.828 0.324t0.324 0.828z','CIRCLE_THIN':'M27.648 -55.223q-4.68 0 -8.946 1.836t-7.344 4.914 -4.914 7.344 -1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946 -1.836 7.344 -4.914 4.914 -7.344 1.836 -8.946 -1.836 -8.946 -4.914 -7.344 -7.344 -4.914 -8.946 -1.836zm27.648 23.04q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','HEADER':'M60.552 -4.535q-1.584 0 -4.77 -0.126t-4.806 -0.126q-1.584 0 -4.752 0.126t-4.752 0.126q-0.864 0 -1.332 -0.738t-0.468 -1.638q0 -1.116 0.612 -1.656t1.404 -0.612 1.836 -0.252 1.62 -0.54q1.188 -0.756 1.188 -5.04l-0.036 -14.076q0 -0.756 -0.036 -1.116 -0.468 -0.144 -1.8 -0.144h-24.3q-1.368 0 -1.836 0.144 -0.036 0.36 -0.036 1.116l-0.036 13.356q0 5.112 1.332 5.904 0.576 0.36 1.728 0.468t2.052 0.126 1.62 0.54 0.72 1.638q0 0.936 -0.45 1.728t-1.314 0.792q-1.692 0 -5.022 -0.126t-4.986 -0.126q-1.548 0 -4.608 0.126t-4.572 0.126q-0.828 0 -1.278 -0.756t-0.45 -1.62q0 -1.08 0.558 -1.62t1.296 -0.63 1.71 -0.27 1.512 -0.54q1.188 -0.828 1.188 -5.148l-0.036 -2.052v-29.268q0 -0.108 0.018 -0.936t0 -1.314 -0.054 -1.386 -0.126 -1.512 -0.234 -1.314 -0.396 -1.134 -0.576 -0.648q-0.54 -0.36 -1.62 -0.432t-1.908 -0.072 -1.476 -0.504 -0.648 -1.62q0 -0.936 0.432 -1.728t1.296 -0.792q1.656 0 4.986 0.126t4.986 0.126q1.512 0 4.554 -0.126t4.554 -0.126q0.9 0 1.35 0.792t0.45 1.728q0 1.08 -0.612 1.566t-1.386 0.522 -1.782 0.144 -1.548 0.468q-1.26 0.756 -1.26 5.76l0.036 11.52q0 0.756 0.036 1.152 0.468 0.108 1.404 0.108h25.164q0.9 0 1.368 -0.108 0.036 -0.396 0.036 -1.152l0.036 -11.52q0 -5.004 -1.26 -5.76 -0.648 -0.396 -2.106 -0.45t-2.376 -0.468 -0.918 -1.782q0 -0.936 0.45 -1.728t1.35 -0.792q1.584 0 4.752 0.126t4.752 0.126q1.548 0 4.644 -0.126t4.644 -0.126q0.9 0 1.35 0.792t0.45 1.728q0 1.08 -0.63 1.584t-1.44 0.522 -1.854 0.108 -1.584 0.45q-1.26 0.828 -1.26 5.796l0.036 33.948q0 4.284 1.224 5.04 0.576 0.36 1.656 0.486t1.926 0.162 1.494 0.558 0.648 1.602q0 0.936 -0.432 1.728t-1.296 0.792z','PARAGRAPH':'M46.008 -57.635v2.628q0 1.044 -0.666 2.196t-1.53 1.152q-1.8 0 -1.944 0.036 -0.936 0.216 -1.152 1.116 -0.108 0.396 -0.108 2.304v41.472q0 0.9 -0.648 1.548t-1.548 0.648h-3.888q-0.9 0 -1.548 -0.648t-0.648 -1.548v-43.848h-5.148v43.848q0 0.9 -0.63 1.548t-1.566 0.648h-3.888q-0.936 0 -1.566 -0.648t-0.63 -1.548v-17.856q-5.292 -0.432 -8.82 -2.124 -4.536 -2.088 -6.912 -6.444 -2.304 -4.212 -2.304 -9.324 0 -5.976 3.168 -10.296 3.168 -4.248 7.524 -5.724 3.996 -1.332 15.012 -1.332h17.244q0.9 0 1.548 0.648t0.648 1.548z','SLIDERS':'M12.672 -13.751v4.608h-12.672v-4.608h12.672zm12.672 -4.608q0.936 0 1.62 0.684t0.684 1.62v9.216q0 0.936 -0.684 1.62t-1.62 0.684h-9.216q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684h9.216zm5.76 -13.824v4.608h-31.104v-4.608h31.104zm-23.04 -18.432v4.608h-8.064v-4.608h8.064zm47.232 36.864v4.608h-26.496v-4.608h26.496zm-34.56 -41.472q0.936 0 1.62 0.684t0.684 1.62v9.216q0 0.936 -0.684 1.62t-1.62 0.684h-9.216q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684h9.216zm23.04 18.432q0.936 0 1.62 0.684t0.684 1.62v9.216q0 0.936 -0.684 1.62t-1.62 0.684h-9.216q-0.936 0 -1.62 -0.684t-0.684 -1.62v-9.216q0 -0.936 0.684 -1.62t1.62 -0.684h9.216zm11.52 4.608v4.608h-8.064v-4.608h8.064zm0 -18.432v4.608h-31.104v-4.608h31.104z','SHARE_ALT':'M43.776 -27.575q4.788 0 8.154 3.366t3.366 8.154 -3.366 8.154 -8.154 3.366 -8.154 -3.366 -3.366 -8.154q0 -0.432 0.072 -1.224l-12.96 -6.48q-3.312 3.096 -7.848 3.096 -4.788 0 -8.154 -3.366t-3.366 -8.154 3.366 -8.154 8.154 -3.366q4.536 0 7.848 3.096l12.96 -6.48q-0.072 -0.792 -0.072 -1.224 0 -4.788 3.366 -8.154t8.154 -3.366 8.154 3.366 3.366 8.154 -3.366 8.154 -8.154 3.366q-4.536 0 -7.848 -3.096l-12.96 6.48q0.072 0.792 0.072 1.224t-0.072 1.224l12.96 6.48q3.312 -3.096 7.848 -3.096z','SHARE_ALT_SQUARE':'M46.08 -21.419q0 -3.168 -2.25 -5.436t-5.418 -2.268q-3.024 0 -5.22 2.088l-8.676 -4.32q0.072 -0.576 0.072 -0.828t-0.072 -0.828l8.676 -4.32q2.196 2.088 5.22 2.088 3.168 0 5.418 -2.268t2.25 -5.436 -2.25 -5.418 -5.418 -2.25 -5.436 2.25 -2.268 5.418q0 0.252 0.072 0.828l-8.676 4.32q-2.232 -2.052 -5.22 -2.052 -3.168 0 -5.418 2.25t-2.25 5.418 2.25 5.418 5.418 2.25q2.988 0 5.22 -2.052l8.676 4.32q-0.072 0.576 -0.072 0.828 0 3.168 2.268 5.418t5.436 2.25 5.418 -2.25 2.25 -5.418zm9.216 -28.044v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','BOMB':'M20.556 -43.235q-0.36 -0.9 -1.224 -1.26t-1.764 0q-3.888 1.584 -6.876 4.572t-4.572 6.876q-0.36 0.9 0 1.764t1.26 1.224q0.468 0.18 0.864 0.18 1.512 0 2.16 -1.44 1.224 -3.024 3.546 -5.346t5.346 -3.546q0.9 -0.396 1.26 -1.26t0 -1.764zm33.912 -12.816l1.656 1.656 -8.784 8.748 2.448 2.448q0.684 0.684 0.684 1.638t-0.684 1.638l-2.304 2.304q3.204 5.796 3.204 12.348 0 5.148 -1.998 9.846t-5.4 8.1 -8.1 5.4 -9.846 1.998 -9.846 -1.998 -8.1 -5.4 -5.4 -8.1 -1.998 -9.846 1.998 -9.846 5.4 -8.1 8.1 -5.4 9.846 -1.998q6.552 0 12.348 3.204l2.304 -2.304q0.684 -0.684 1.638 -0.684t1.638 0.684l2.448 2.448zm0.288 -2.016q-0.36 0.36 -0.792 0.36 -0.468 0 -0.828 -0.36l-3.276 -3.24q-0.324 -0.36 -0.324 -0.828t0.324 -0.828q0.36 -0.324 0.828 -0.324t0.828 0.324l3.24 3.276q0.36 0.324 0.36 0.81t-0.36 0.81zm8.28 8.28q-0.396 0.324 -0.828 0.324t-0.828 -0.324l-3.24 -3.276q-0.36 -0.324 -0.36 -0.81t0.36 -0.81q0.324 -0.36 0.81 -0.36t0.81 0.36l3.276 3.24q0.324 0.36 0.324 0.828t-0.324 0.828zm1.476 -6.588q0 0.504 -0.324 0.828t-0.828 0.324h-3.456q-0.504 0 -0.828 -0.324t-0.324 -0.828 0.324 -0.828 0.828 -0.324h3.456q0.504 0 0.828 0.324t0.324 0.828zm-6.912 -6.912v3.456q0 0.504 -0.324 0.828t-0.828 0.324 -0.828 -0.324 -0.324 -0.828v-3.456q0 -0.504 0.324 -0.828t0.828 -0.324 0.828 0.324 0.324 0.828zm5.436 1.98l-3.276 3.24q-0.36 0.36 -0.792 0.36 -0.468 0 -0.828 -0.36 -0.36 -0.324 -0.36 -0.81t0.36 -0.81l3.24 -3.276q0.36 -0.324 0.828 -0.324t0.828 0.324q0.324 0.36 0.324 0.828t-0.324 0.828z','SOCCER_BALL_O':'M21.924 -35.063l10.332 -7.488 10.332 7.488 -3.924 12.096h-12.78zm10.332 -29.376q6.552 0 12.528 2.556t10.296 6.876 6.876 10.296 2.556 12.528 -2.556 12.528 -6.876 10.296 -10.296 6.876 -12.528 2.556 -12.528 -2.556 -10.296 -6.876 -6.876 -10.296 -2.556 -12.528 2.556 -12.528 6.876 -10.296 10.296 -6.876 12.528 -2.556zm22.284 48.6q5.364 -7.308 5.364 -16.344v-0.108l-3.672 3.204 -8.64 -8.064 2.268 -11.628 4.824 0.432q-5.4 -7.416 -14.004 -10.152l1.908 4.464 -10.332 5.724 -10.332 -5.724 1.908 -4.464q-8.604 2.736 -14.004 10.152l4.86 -0.432 2.232 11.628 -8.64 8.064 -3.672 -3.204v0.108q0 9.036 5.364 16.344l1.08 -4.752 11.736 1.44 5.004 10.728 -4.176 2.484q4.212 1.404 8.64 1.404t8.64 -1.404l-4.176 -2.484 5.004 -10.728 11.736 -1.44z','TTY':'M16.128 -17.207v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm-6.912 -13.824v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm20.736 13.824v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm-6.912 -13.824v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm-20.664 -5.76q-1.008 0 -1.692 -0.684t-0.684 -1.656v-4.644h18.504v4.644q0 0.972 -0.684 1.656t-1.656 0.684h-13.788zm41.4 19.584v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm-6.912 -13.824v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm20.736 13.824v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm-6.912 -13.824v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm13.824 -14.688v0.468h-18.504v-0.36q0 -3.744 -13.752 -3.672 -13.752 0.036 -13.752 3.672v0.36h-18.504v-0.468q0 -0.612 0.306 -1.548t1.224 -2.304 2.358 -2.718 3.978 -2.736 5.76 -2.43 8.064 -1.71 10.566 -0.666 10.548 0.666 8.064 1.71 5.778 2.43 3.978 2.736 2.358 2.718 1.224 2.304 0.306 1.548zm0 14.688v6.912q0 0.504 -0.324 0.828t-0.828 0.324h-6.912q-0.504 0 -0.828 -0.324t-0.324 -0.828v-6.912q0 -0.504 0.324 -0.828t0.828 -0.324h6.912q0.504 0 0.828 0.324t0.324 0.828zm0 -12.744v4.644q0 0.972 -0.684 1.656t-1.656 0.684h-13.824q-0.972 0 -1.656 -0.684t-0.684 -1.656v-4.644h18.504z','BINOCULARS':'M25.344 -52.919v27.648q0 0.936 -0.684 1.62t-1.62 0.684v20.736q0 0.936 -0.684 1.62t-1.62 0.684h-18.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-18.432l8.964 -31.428q0.252 -0.828 1.116 -0.828h15.264zm11.52 0v25.344h-9.216v-25.344h9.216zm27.648 32.256v18.432q0 0.936 -0.684 1.62t-1.62 0.684h-18.432q-0.936 0 -1.62 -0.684t-0.684 -1.62v-20.736q-0.936 0 -1.62 -0.684t-0.684 -1.62v-27.648h15.264q0.864 0 1.116 0.828zm-38.016 -42.624v8.064h-12.672v-8.064q0 -0.504 0.324 -0.828t0.828 -0.324h10.368q0.504 0 0.828 0.324t0.324 0.828zm24.192 0v8.064h-12.672v-8.064q0 -0.504 0.324 -0.828t0.828 -0.324h10.368q0.504 0 0.828 0.324t0.324 0.828z','PLUG':'M63.18 -48.131q1.332 1.332 1.332 3.24t-1.332 3.276l-14.436 14.4 5.4 5.4 -5.76 5.76q-5.868 5.868 -14.022 6.714t-14.814 -3.618l-13.032 13.032h-6.516v-6.516l13.032 -13.032q-4.464 -6.66 -3.618 -14.814t6.714 -14.022l5.76 -5.76 5.4 5.4 14.4 -14.436q1.368 -1.332 3.276 -1.332t3.24 1.332 1.332 3.258 -1.332 3.258l-14.4 14.436 8.424 8.424 14.436 -14.4q1.368 -1.332 3.276 -1.332t3.24 1.332z','SLIDESHARE':'M31.428 -37.799q0 2.988 -2.286 5.13t-5.49 2.142 -5.49 -2.142 -2.286 -5.13q0 -3.024 2.286 -5.148t5.49 -2.124 5.49 2.124 2.286 5.148zm18.072 0q0 2.988 -2.268 5.13t-5.508 2.142q-3.204 0 -5.49 -2.142t-2.286 -5.13q0 -3.024 2.286 -5.148t5.49 -2.124q3.24 0 5.508 2.124t2.268 5.148zm8.1 6.48v-24.012q0 -3.132 -1.152 -4.446t-3.996 -1.314h-40.032q-2.988 0 -4.05 1.224t-1.062 4.536v24.228q1.548 0.828 3.186 1.44t2.916 1.008 2.916 0.666 2.556 0.396 2.52 0.144 2.106 0.018 2.034 -0.072 1.602 -0.072q2.448 -0.036 3.42 0.972 0.216 0.216 0.36 0.324 0.936 0.9 2.196 1.836 0.252 -3.276 4.248 -3.132 0.18 0 1.314 0.054t1.548 0.072 1.638 0.036 1.908 -0.036 1.962 -0.162 2.196 -0.306 2.232 -0.486 2.412 -0.702 2.43 -0.972 2.592 -1.242zm5.868 -0.18q-4.356 5.364 -13.392 9.072 3.024 10.26 -0.828 16.74 -2.376 4.068 -6.588 5.328 -3.744 1.152 -6.552 -0.54 -3.096 -1.836 -2.952 -5.904l-0.036 -11.736v-0.036q-0.288 -0.072 -0.882 -0.216t-0.846 -0.18l-0.036 12.168q0.144 4.104 -2.988 5.904 -2.844 1.692 -6.588 0.54 -4.212 -1.296 -6.552 -5.4 -3.78 -6.48 -0.792 -16.668 -9.036 -3.708 -13.392 -9.072 -0.9 -1.332 -0.144 -2.268t2.16 0.036q0.108 0.072 0.396 0.252t0.396 0.288v-24.984q0 -2.592 1.692 -4.428t4.104 -1.836h45.252q2.412 0 4.104 1.836t1.692 4.428v24.984l0.756 -0.54q1.404 -0.972 2.16 -0.036t-0.144 2.268z','TWITCH':'M32.256 -48.815v15.624h-5.22v-15.624h5.22zm14.328 0v15.624h-5.22v-15.624h5.22zm0 27.36l9.108 -9.144v-28.62h-42.984v37.764h11.736v7.812l7.812 -7.812h14.328zm14.328 -42.984v36.468l-15.624 15.624h-11.736l-7.812 7.812h-7.812v-7.812h-14.328v-41.688l3.924 -10.404h53.388z','YELP':'M27.828 -16.955v4.572q-0.036 10.512 -0.216 10.98 -0.432 1.152 -1.836 1.44 -1.944 0.324 -6.534 -1.368t-5.85 -3.204q-0.468 -0.54 -0.612 -1.296 -0.036 -0.432 0.144 -0.936 0.144 -0.36 1.224 -1.692t6.516 -7.776q0.036 0 2.16 -2.52 0.54 -0.684 1.422 -0.882t1.782 0.126q0.864 0.36 1.35 1.044t0.45 1.512zm-5.364 -9.036q-0.108 1.98 -1.872 2.52l-4.32 1.404q-9.9 3.168 -10.512 3.168 -1.26 -0.072 -1.944 -1.296 -0.432 -0.9 -0.612 -2.7 -0.288 -2.736 0.036 -5.994t1.08 -4.482 2.016 -1.152q0.468 0 7.272 2.772 2.52 1.044 4.14 1.692l3.024 1.224q0.828 0.324 1.278 1.098t0.414 1.746zm29.736 10.692q-0.252 1.944 -3.294 5.796t-4.878 4.572q-1.332 0.504 -2.268 -0.252 -0.504 -0.36 -6.624 -10.332l-1.692 -2.772q-0.504 -0.756 -0.414 -1.656t0.702 -1.656q1.26 -1.548 2.988 -0.936 0.036 0.036 4.284 1.44 7.308 2.376 8.712 2.862t1.692 0.738q1.008 0.792 0.792 2.196zm-24.192 -22.752q0.18 3.672 -1.944 4.392 -2.088 0.612 -4.104 -2.556l-13.608 -21.528q-0.288 -1.26 0.684 -2.232 1.476 -1.548 7.47 -3.222t8.082 -1.134q1.44 0.36 1.764 1.62 0.108 0.648 0.792 10.998t0.864 13.662zm23.832 3.888q0.108 1.404 -0.936 2.124 -0.54 0.36 -11.844 3.096 -2.412 0.54 -3.276 0.828l0.036 -0.072q-0.828 0.216 -1.656 -0.144t-1.332 -1.152q-1.08 -1.692 0 -3.132 0.036 -0.036 2.7 -3.672 4.5 -6.156 5.4 -7.344t1.224 -1.404q1.008 -0.684 2.34 -0.072 1.728 0.828 4.428 4.806t2.916 6.03v0.108z','NEWSPAPER_O':'M36.864 -46.007h-13.824v13.824h13.824v-13.824zm4.608 23.04v4.608h-23.04v-4.608h23.04zm0 -27.648v23.04h-23.04v-23.04h23.04zm23.04 27.648v4.608h-18.432v-4.608h18.432zm0 -9.216v4.608h-18.432v-4.608h18.432zm0 -9.216v4.608h-18.432v-4.608h18.432zm0 -9.216v4.608h-18.432v-4.608h18.432zm-55.296 34.56v-34.56h-4.608v34.56q0 0.936 0.684 1.62t1.62 0.684 1.62 -0.684 0.684 -1.62zm59.904 0v-39.168h-55.296v39.168q0 1.188 -0.396 2.304h53.388q0.936 0 1.62 -0.684t0.684 -1.62zm4.608 -43.776v43.776q0 2.88 -2.016 4.896t-4.896 2.016h-59.904q-2.88 0 -4.896 -2.016t-2.016 -4.896v-39.168h9.216v-4.608h64.512z','WIFI':'M36.864 -9.611q-0.72 0 -3.348 -2.646t-2.628 -3.366q0 -1.152 2.25 -1.944t3.726 -0.792 3.726 0.792 2.25 1.944q0 0.72 -2.628 3.366t-3.348 2.646zm9.72 -9.756q-0.072 0 -1.44 -0.9t-3.654 -1.8 -4.626 -0.9 -4.626 0.9 -3.636 1.8 -1.458 0.9q-0.648 0 -3.366 -2.7t-2.718 -3.348q0 -0.468 0.36 -0.828 2.808 -2.772 7.056 -4.356t8.388 -1.584 8.388 1.584 7.056 4.356q0.36 0.36 0.36 0.828 0 0.648 -2.718 3.348t-3.366 2.7zm9.828 -9.792q-0.396 0 -0.828 -0.288 -4.896 -3.78 -9.072 -5.562t-9.648 -1.782q-3.06 0 -6.138 0.792t-5.364 1.908 -4.086 2.232 -2.844 1.908 -1.116 0.792q-0.612 0 -3.312 -2.7t-2.7 -3.348q0 -0.432 0.36 -0.792 4.752 -4.752 11.52 -7.38t13.68 -2.628 13.68 2.628 11.52 7.38q0.36 0.36 0.36 0.792 0 0.648 -2.7 3.348t-3.312 2.7zm9.756 -9.756q-0.396 0 -0.792 -0.324 -6.444 -5.652 -13.374 -8.514t-15.138 -2.862 -15.138 2.862 -13.374 8.514q-0.396 0.324 -0.792 0.324 -0.612 0 -3.33 -2.7t-2.718 -3.348q0 -0.468 0.36 -0.828 6.732 -6.696 16.02 -10.368t18.972 -3.672 18.972 3.672 16.02 10.368q0.36 0.36 0.36 0.828 0 0.648 -2.718 3.348t-3.33 2.7z','CALCULATOR':'M13.824 -9.143q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm13.824 0q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm-13.824 -13.824q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm27.648 13.824q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm-13.824 -13.824q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm-13.824 -13.824q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm27.648 13.824q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm-13.824 -13.824q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm27.648 27.648v-13.824q0 -1.872 -1.368 -3.24t-3.24 -1.368 -3.24 1.368 -1.368 3.24v13.824q0 1.872 1.368 3.24t3.24 1.368 3.24 -1.368 1.368 -3.24zm-13.824 -27.648q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm13.824 -11.52v-9.216q0 -0.936 -0.684 -1.62t-1.62 -0.684h-46.08q-0.936 0 -1.62 0.684t-0.684 1.62v9.216q0 0.936 0.684 1.62t1.62 0.684h46.08q0.936 0 1.62 -0.684t0.684 -1.62zm0 11.52q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm4.608 -23.04v55.296q0 1.872 -1.368 3.24t-3.24 1.368h-50.688q-1.872 0 -3.24 -1.368t-1.368 -3.24v-55.296q0 -1.872 1.368 -3.24t3.24 -1.368h50.688q1.872 0 3.24 1.368t1.368 3.24z','PAYPAL':'M40.032 -48.383q0 -5.724 -8.532 -5.724h-2.52q-1.152 0 -2.142 0.774t-1.242 1.89l-2.268 9.936q-0.072 0.18 -0.072 0.576 0 0.864 0.612 1.422t1.476 0.558h1.908q2.484 0 4.626 -0.468t4.05 -1.476 3.006 -2.934 1.098 -4.554zm21.744 5.472q0 9.54 -7.92 15.408 -7.884 5.796 -22.032 5.796h-2.196q-1.152 0 -2.124 0.774t-1.224 1.89l-2.628 11.376q-0.288 1.296 -1.458 2.214t-2.502 0.918h-7.668q-1.116 0 -1.908 -0.72t-0.792 -1.836q0 -0.36 0.468 -2.34h5.436q1.224 0 2.304 -0.846t1.368 -2.034l2.628 -11.376q0.288 -1.188 1.35 -2.052t2.286 -0.864h2.196q14.04 0 21.852 -5.76t7.812 -15.156q0 -4.644 -1.836 -7.452 6.588 3.312 6.588 12.06zm-6.588 -6.66q0 9.504 -7.956 15.408 -7.848 5.796 -22.032 5.796h-2.16q-1.152 0 -2.142 0.792t-1.242 1.908l-2.628 11.34q-0.288 1.296 -1.44 2.214t-2.484 0.918h-7.704q-1.116 0 -1.89 -0.702t-0.774 -1.854q0 -0.288 0.072 -0.72l10.8 -46.836q0.288 -1.296 1.458 -2.214t2.502 -0.918h15.984q2.448 0 4.5 0.144t4.338 0.54 4.086 1.08 3.474 1.818 2.79 2.664 1.782 3.726 0.666 4.896z','GOOGLE_WALLET':'M21.672 -43.307q0.684 2.196 1.116 4.446t0.612 5.094 -0.504 5.724 -2.232 5.22q-0.756 -2.916 -2.412 -5.652t-3.438 -4.572 -3.564 -3.258 -2.826 -2.07 -1.188 -0.684q-2.232 -1.224 -2.934 -3.6t0.522 -4.608 3.636 -2.934 4.644 0.522q4.968 2.988 8.568 6.372zm11.7 -10.332q0.396 0.9 0.738 1.656t1.314 3.618 1.53 5.418 0.918 6.462 0 7.398 -1.71 7.542 -3.798 7.506q-1.836 2.592 -4.968 2.592 -1.944 0 -3.528 -1.116 -2.052 -1.44 -2.484 -3.924t1.008 -4.572q2.16 -3.06 2.916 -7.02t0.468 -7.182 -1.152 -6.498 -1.404 -4.608 -0.792 -1.872q-1.116 -2.268 -0.306 -4.662t3.078 -3.51q1.224 -0.612 2.7 -0.612 1.692 0 3.186 0.9t2.286 2.484zm11.556 24.084q-0.612 5.76 -2.592 11.196 -0.612 -4.716 -2.268 -8.856 0.9 -6.264 -0.18 -12.996 -0.972 -6.408 -3.384 -12.312 4.104 3.24 7.632 7.596 0.324 1.332 0.54 2.88 0.936 6.444 0.252 12.492zm9.792 -31.428q0.324 0.612 0.846 1.782t1.566 4.23 1.818 6.408 1.224 8.19 0.18 9.684 -1.692 10.8 -4.05 11.646q-0.792 1.728 -2.376 2.718t-3.42 0.99q-1.404 0 -2.664 -0.576 -2.412 -1.116 -3.33 -3.6t0.162 -4.896q2.088 -4.536 3.24 -9.27t1.35 -8.622 -0.126 -7.686 -0.954 -6.498 -1.386 -4.986 -1.17 -3.24 -0.558 -1.17q-1.224 -2.34 -0.414 -4.878t3.15 -3.762q1.332 -0.72 2.916 -0.72 1.764 0 3.294 0.918t2.394 2.538z','CC_VISA':'M71.1 -28.799h-4.968q0.504 -1.332 2.376 -6.444l0.108 -0.324q0.144 -0.36 0.36 -0.936t0.324 -0.936l0.432 1.98zm-51.984 -2.34l-2.088 -10.62q-0.396 -1.944 -2.7 -1.944h-9.648l-0.072 0.468q11.196 2.844 14.508 12.096zm6.444 -12.564l-5.832 15.768 -0.612 -3.204q-0.936 -2.52 -3.06 -4.662t-4.716 -3.186l4.86 18.36h6.3l9.396 -23.076h-6.336zm5.004 23.112h5.976l3.744 -23.112h-5.976zm27.648 -22.536q-2.484 -0.972 -5.364 -0.972 -4.428 0 -7.236 2.124t-2.844 5.508q-0.036 3.672 5.22 6.264 1.728 0.828 2.412 1.476t0.684 1.404q0 1.08 -1.08 1.656t-2.484 0.576q-3.096 0 -5.616 -1.188l-0.792 -0.396 -0.828 5.184q2.664 1.224 6.66 1.224 4.68 0.036 7.506 -2.124t2.898 -5.76q0 -3.816 -5.04 -6.264 -1.764 -0.9 -2.556 -1.512t-0.792 -1.368q0 -0.792 0.882 -1.386t2.538 -0.594q2.52 -0.036 4.464 0.864l0.54 0.288zm15.3 -0.576h-4.608q-2.34 0 -3.132 1.944l-8.856 21.168h6.264l1.26 -3.456h7.632q0.18 0.792 0.72 3.456h5.544zm9.432 -11.52v46.08q0 1.872 -1.368 3.24t-3.24 1.368h-73.728q-1.872 0 -3.24 -1.368t-1.368 -3.24v-46.08q0 -1.872 1.368 -3.24t3.24 -1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z','CC_MASTERCARD':'M24.156 -30.851h-0.468q-1.692 0 -1.692 1.152 0 0.792 0.72 0.792 0.612 0 1.008 -0.54t0.432 -1.404zm14.22 -1.296h2.232v-0.108q0.036 -0.144 0.018 -0.234t-0.036 -0.252 -0.072 -0.288 -0.162 -0.234 -0.27 -0.18 -0.414 -0.072q-1.008 0 -1.296 1.368zm19.44 1.296h-0.432q-1.728 0 -1.728 1.152 0 0.792 0.72 0.792 0.612 0 1.008 -0.54t0.432 -1.404zm11.484 -0.936q0 -1.476 -1.08 -1.476 -0.684 0 -1.116 0.72t-0.432 1.836q0 1.512 1.008 1.512 0.72 0 1.17 -0.72t0.45 -1.872zm-52.02 -5.076h3.132l-1.584 9.432h-2.016l1.152 -7.236 -2.556 7.236h-1.404l-0.144 -7.2 -1.224 7.2h-1.908l1.584 -9.432h2.916l0.072 5.868zm9.108 3.852q0 0.216 -0.144 1.512 -0.576 3.636 -0.612 4.068h-1.692l0.036 -0.792q-0.72 0.936 -2.088 0.936 -0.828 0 -1.35 -0.576t-0.522 -1.512q0 -1.404 0.936 -2.178t2.628 -0.774q0.504 0 0.828 0.036l0.018 -0.198 0.036 -0.162 0.018 -0.108q0 -0.72 -1.296 -0.72 -1.044 0 -2.124 0.36 0 -0.144 0.252 -1.728 1.368 -0.396 2.412 -0.396 2.664 0 2.664 2.232zm5.616 -2.088l-0.288 1.764q-0.792 -0.108 -1.476 -0.108 -0.972 0 -0.972 0.612 0 0.288 0.162 0.432t0.774 0.396q1.44 0.684 1.44 2.16 0 2.592 -3.132 2.556 -1.224 0 -2.088 -0.216 0 -0.072 0.252 -1.764 1.044 0.288 1.836 0.288 1.152 0 1.152 -0.684 0 -0.252 -0.162 -0.414t-0.774 -0.45q-1.548 -0.72 -1.548 -2.124 0 -2.592 3.024 -2.592 1.08 0 1.8 0.144zm3.168 0h1.008l-0.252 1.872h-1.044q-0.072 0.612 -0.234 1.458t-0.252 1.386 -0.09 0.648q0 0.576 0.684 0.576 0.288 0 0.576 -0.072l-0.288 1.692q-0.756 0.252 -1.44 0.252 -1.548 0 -1.62 -1.692 0 -0.432 0.288 -2.016 0.108 -0.72 0.9 -5.256h1.98zm7.308 2.628q0 0.828 -0.252 1.872h-3.996q-0.108 0.792 0.36 1.188t1.368 0.396q1.08 0 2.088 -0.504l-0.324 1.944q-1.08 0.288 -2.052 0.288 -3.42 0 -3.42 -3.42 0 -1.98 0.99 -3.258t2.502 -1.278q1.26 0 1.998 0.756t0.738 2.016zm5.004 -2.664q-0.468 0.828 -0.792 2.232 -0.792 -0.072 -1.116 0.864t-0.9 4.608h-2.016l0.108 -0.504q0.792 -4.68 1.044 -7.164h1.836l-0.108 1.188q0.504 -0.756 0.918 -1.062t1.026 -0.162zm6.732 -1.476l-0.324 2.052q-1.008 -0.504 -1.8 -0.504 -1.116 0 -1.836 0.99t-0.72 2.538q0 1.08 0.486 1.692t1.386 0.612q0.756 0 1.728 -0.468l-0.36 2.124q-1.008 0.288 -1.8 0.288 -1.62 0 -2.574 -1.098t-0.954 -2.97q0 -2.52 1.278 -4.122t3.294 -1.602q0.936 0 2.196 0.468zm5.832 3.6q0 0.648 -0.144 1.512 -0.468 2.844 -0.612 4.068h-1.656l0.036 -0.792q-0.72 0.936 -2.124 0.936 -0.828 0 -1.332 -0.576t-0.504 -1.512q0 -1.404 0.918 -2.178t2.61 -0.774q0.54 0 0.828 0.036 0.072 -0.252 0.072 -0.468 0 -0.72 -1.296 -0.72 -1.044 0 -2.124 0.36 0 -0.144 0.288 -1.728 1.368 -0.396 2.412 -0.396 2.628 0 2.628 2.232zm5.076 -2.124q-0.504 0.864 -0.756 2.232 -0.828 -0.072 -1.134 0.828t-0.918 4.644h-2.016l0.108 -0.504q0.684 -3.744 1.044 -7.164h1.872q0 0.396 -0.144 1.188 0.54 -0.756 0.954 -1.062t0.99 -0.162zm5.076 -1.728h2.016l-1.548 9.432h-1.908l0.108 -0.684q-0.828 0.828 -1.872 0.828 -1.116 0 -1.782 -0.864t-0.666 -2.304q0 -1.908 0.99 -3.312t2.322 -1.404q1.116 0 1.908 1.044zm3.996 4.68q0 -5.328 -2.61 -9.828t-7.128 -7.128 -9.846 -2.628q-6.516 0 -11.808 3.96 4.572 4.176 6.156 10.224h-1.8q-1.584 -5.4 -5.688 -9.108 -4.104 3.708 -5.688 9.108h-1.8q1.584 -6.048 6.156 -10.224 -5.292 -3.96 -11.808 -3.96 -5.328 0 -9.846 2.628t-7.128 7.128 -2.61 9.828 2.61 9.828 7.128 7.128 9.846 2.628q6.516 0 11.808 -3.96 -4.32 -3.996 -5.94 -9.504h1.8q1.656 4.968 5.472 8.388 3.816 -3.42 5.472 -8.388h1.8q-1.62 5.508 -5.94 9.504 5.292 3.96 11.808 3.96 5.328 0 9.846 -2.628t7.128 -7.128 2.61 -9.828zm8.748 -23.04v46.08q0 1.872 -1.368 3.24t-3.24 1.368h-73.728q-1.872 0 -3.24 -1.368t-1.368 -3.24v-46.08q0 -1.872 1.368 -3.24t3.24 -1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z','CC_DISCOVER':'M11.268 -36.467q0 1.836 -1.296 3.024 -1.044 0.936 -3.204 0.936h-0.612v-7.92h0.612q2.196 0 3.204 0.972 1.296 1.116 1.296 2.988zm63.936 -2.34q0 1.872 -2.304 1.872h-0.684v-3.636h0.72q2.268 0 2.268 1.764zm-61.524 2.34q0 -2.664 -1.8 -4.338t-4.644 -1.674h-3.42v11.988h3.42q2.664 0 4.284 -1.368 2.16 -1.836 2.16 -4.608zm1.08 5.976h2.34v-11.988h-2.34v11.988zm11.52 -3.636q0 -1.44 -0.738 -2.232t-2.718 -1.512q-1.044 -0.36 -1.422 -0.684t-0.378 -0.828q0 -0.576 0.486 -0.954t1.242 -0.378q1.044 0 1.908 0.972l1.224 -1.584q-1.476 -1.332 -3.528 -1.332 -1.584 0 -2.664 0.99t-1.08 2.43q0 1.26 0.648 1.998t2.304 1.314q1.332 0.468 1.62 0.684 0.684 0.432 0.684 1.224 0 0.72 -0.504 1.206t-1.296 0.486q-1.728 0 -2.556 -1.584l-1.512 1.44q1.584 2.304 4.14 2.304 1.836 0 2.988 -1.098t1.152 -2.862zm10.008 3.24v-2.772q-1.332 1.332 -2.808 1.332 -1.764 0 -2.898 -1.17t-1.134 -2.97q0 -1.728 1.134 -2.934t2.79 -1.206q1.548 0 2.916 1.368v-2.772q-1.44 -0.72 -2.88 -0.72 -2.664 0 -4.518 1.818t-1.854 4.446 1.836 4.446 4.5 1.818q1.512 0 2.916 -0.684zm44.352 21.744v-18.972q-2.34 1.44 -5.202 3.024t-8.55 4.212 -11.862 4.95 -15.03 4.842 -18.144 4.248h56.484q0.936 0 1.62 -0.684t0.684 -1.62zm-30.636 -27.252q0 -2.7 -1.908 -4.608t-4.608 -1.908 -4.608 1.908 -1.908 4.608 1.908 4.608 4.608 1.908 4.608 -1.908 1.908 -4.608zm5.472 6.228l5.184 -12.312h-2.556l-3.24 8.064 -3.204 -8.064h-2.556l5.112 12.312h1.26zm6.228 -0.324h6.624v-2.016h-4.284v-3.24h4.14v-2.016h-4.14v-2.664h4.284v-2.052h-6.624v11.988zm14.076 0h2.88l-3.78 -5.04q2.736 -0.576 2.736 -3.384 0 -1.692 -1.116 -2.628t-3.132 -0.936h-3.492v11.988h2.34v-4.788h0.324zm7.164 -24.516v45.648q0 2.016 -1.386 3.42t-3.366 1.404h-73.44q-1.98 0 -3.366 -1.404t-1.386 -3.42v-45.648q0 -2.016 1.386 -3.42t3.366 -1.404h73.44q1.98 0 3.366 1.404t1.386 3.42z','CC_AMEX':'M4.284 -39.887h3.204l-1.62 -3.888zm22.356 18.936l2.664 -2.844 -2.52 -2.844h-5.868v1.764h5.112v1.98h-5.112v1.944h5.724zm5.688 -2.808l3.564 3.96v-7.812zm10.368 -1.692q0 -1.188 -1.44 -1.188h-3.024v2.484h2.988q1.476 0 1.476 -1.296zm10.404 -0.144q0 -1.044 -1.512 -1.044h-2.952v2.196h2.916q1.548 0 1.548 -1.152zm-10.008 -16.776q0 -1.044 -1.512 -1.044h-2.952v2.16h2.916q1.548 0 1.548 -1.116zm16.524 2.484h3.204l-1.584 -3.888zm-34.452 -5.58v9.756h-2.376v-7.632l-3.384 7.632h-2.052l-3.384 -7.632v7.632h-4.752l-0.9 -2.16h-4.86l-0.9 2.16h-2.52l4.176 -9.756h3.456l3.96 9.252v-9.252h3.816l3.06 6.624 2.772 -6.624h3.888zm20.016 20.016q0 0.72 -0.198 1.26t-0.504 0.9 -0.81 0.594 -0.936 0.36 -1.134 0.162 -1.134 0.036 -1.17 -0.018 -1.062 -0.018v3.276h-4.536l-2.88 -3.24 -2.988 3.24h-9.216v-9.756h9.36l2.88 3.204 2.952 -3.204h7.452q3.924 0 3.924 3.204zm-10.476 -12.276v2.016h-7.812v-9.756h7.812v2.052h-5.472v1.764h5.328v1.98h-5.328v1.944h5.472zm48.24 20.124v8.244q0 1.98 -1.386 3.402t-3.366 1.422h-73.44q-1.98 0 -3.366 -1.422t-1.386 -3.402v-24.408h3.996l0.9 -2.196h1.98l0.9 2.196h7.848v-1.656l0.684 1.656h4.068l0.72 -1.692v1.692h19.476v-3.564l0.36 -0.036q0.36 0 0.36 0.504v3.096h10.044v-0.828q0.828 0.432 1.98 0.648t1.89 0.234 2.268 -0.018 1.854 -0.036l0.9 -2.196h2.016l0.9 2.196h8.172v-2.088l1.224 2.088h6.552v-13.608h-6.48v1.584l-0.9 -1.584h-6.66v1.584l-0.828 -1.584h-8.964q-2.484 0 -3.924 0.792v-0.792h-6.192v0.792q-0.864 -0.792 -2.628 -0.792h-22.608l-1.548 3.492 -1.548 -3.492h-7.128v1.584l-0.792 -1.584h-6.084l-2.808 6.444v-14.076q0 -1.98 1.386 -3.402t3.366 -1.422h73.44q1.98 0 3.366 1.422t1.386 3.402v24.408h-4.32q-1.836 0 -2.916 0.792v-0.792h-6.372q-1.98 0 -2.808 0.792v-0.792h-11.376v0.792q-1.116 -0.792 -3.132 -0.792h-7.524v0.792q-0.828 -0.792 -3.276 -0.792h-8.424l-1.944 2.088 -1.8 -2.088h-12.564v13.608h12.348l1.98 -2.124 1.872 2.124h7.596v-3.204h0.756q2.124 0 3.24 -0.468v3.672h6.264v-3.564h0.288q0.288 0 0.36 0.072t0.072 0.36v3.132h19.044q2.052 0 3.168 -0.864v0.864h6.048q2.16 0 3.42 -0.612zm-27.288 -8.424q0 0.828 -0.432 1.548t-1.224 1.044q0.9 0.324 1.224 0.936t0.324 1.656v1.944h-2.34v-1.62q0 -1.188 -0.432 -1.566t-1.656 -0.378h-2.484v3.564h-2.34v-9.756h5.544q1.728 0 2.772 0.54t1.044 2.088zm-9.972 -16.812q0 0.864 -0.45 1.584t-1.206 1.044q0.936 0.324 1.242 0.918t0.306 1.674v1.908h-2.34q0 -0.324 0.018 -0.954t0 -0.9 -0.108 -0.666 -0.306 -0.576 -0.63 -0.306 -1.062 -0.126h-2.52v3.528h-2.304v-9.756l5.508 0.036q1.764 0 2.808 0.522t1.044 2.07zm19.044 21.924v2.016h-7.776v-9.756h7.776v2.016h-5.436v1.764h5.328v1.98h-5.328v1.944zm-15.336 -24.552v9.756h-2.376v-9.756h2.376zm24.948 23.472q0 3.096 -3.672 3.096h-4.536v-2.088h4.536q1.224 0 1.224 -0.9 0 -0.576 -0.612 -0.756t-1.494 -0.18 -1.782 -0.126 -1.512 -0.81 -0.612 -1.98q0 -1.404 0.936 -2.16t2.376 -0.756h4.68v2.052h-4.284q-1.296 0 -1.296 0.9 0 0.576 0.63 0.738t1.512 0.144 1.764 0.09 1.512 0.774 0.63 1.962zm8.604 -1.8v3.636q-0.864 1.26 -3.168 1.26h-4.5v-2.088h4.5q1.188 0 1.188 -0.9 0 -0.468 -0.45 -0.684t-1.116 -0.198 -1.44 -0.072 -1.44 -0.288 -1.116 -0.864 -0.45 -1.746q0 -1.404 0.954 -2.16t2.394 -0.756h4.644v2.052h-4.248q-1.296 0 -1.296 0.9 0 0.72 1.044 0.792t2.466 0.18 2.034 0.936zm-5.94 -21.636v9.72h-3.312l-4.392 -7.308v7.308h-4.752l-0.936 -2.16h-4.824l-0.9 2.16h-2.7q-4.644 0 -4.644 -4.788 0 -4.968 4.788 -4.968h2.268v2.124q-0.252 0 -1.008 -0.036t-1.026 -0.018 -0.828 0.072 -0.774 0.234 -0.522 0.486 -0.414 0.828 -0.108 1.206q0 1.368 0.486 2.088t1.782 0.72h1.044l3.312 -7.668h3.492l3.924 9.216v-9.216h3.564l4.104 6.768v-6.768h2.376z','CC_PAYPAL':'M11.592 -33.947h-0.54q-0.684 0 -0.684 -0.648 0 -1.008 0.684 -3.06 0.18 -0.54 0.54 -0.702t1.008 -0.162q2.772 0 2.772 1.764 0 1.476 -1.098 2.142t-2.682 0.666zm12.312 5.796q-1.692 0 -1.692 -1.044 0 -2.232 4.428 -2.232l0.108 0.108q-0.18 3.168 -2.844 3.168zm27.864 -5.724h-0.54q-0.684 0 -0.684 -0.684 0 -1.008 0.684 -3.06 0.18 -0.54 0.522 -0.684t1.026 -0.144q2.772 0 2.772 1.764 0 1.476 -1.098 2.142t-2.682 0.666zm12.312 5.76q-1.692 0 -1.692 -1.08 0 -2.232 4.428 -2.232l0.108 0.108q-0.18 3.204 -2.844 3.204zm-50.652 -13.212h-4.608q-0.288 0 -0.522 0.144t-0.306 0.27 -0.252 0.45q-0.108 0.252 -1.62 6.84t-1.512 6.912q0 0.252 0.198 0.45t0.486 0.198h2.232q0.9 0 1.17 -1.242l0.54 -2.484 1.17 -1.242q1.692 0 3.15 -0.27t2.898 -0.882 2.286 -1.89 0.846 -3.042q0 -1.296 -0.522 -2.196t-1.476 -1.314 -1.926 -0.558 -2.232 -0.144zm12.456 3.456q-1.368 0 -2.664 0.216l-0.306 0.036 -0.324 0.054 -0.27 0.054 -0.27 0.072 -0.234 0.108 -0.234 0.144 -0.18 0.18 -0.162 0.252 -0.144 0.324q-0.324 1.044 -0.324 1.404t0.324 0.36q0.18 0 0.774 -0.18t0.702 -0.216q1.08 -0.288 2.088 -0.288 2.664 0 2.664 1.296 0 0.396 -0.36 0.504 -0.288 0.072 -0.648 0.108t-0.774 0.054 -0.63 0.054q-1.368 0.144 -2.322 0.36t-2.034 0.702 -1.638 1.404 -0.558 2.25q0 1.368 0.936 2.142t2.304 0.774q0.864 0 1.638 -0.234t1.188 -0.468 1.386 -0.846q-0.108 0.252 -0.108 0.54t0.198 0.486 0.45 0.198h2.016l0.252 -0.126 0.27 -0.126 0.18 -0.126 0.18 -0.198 0.09 -0.288 1.62 -6.984q0.144 -0.468 0.144 -1.08 0 -2.916 -5.22 -2.916zm19.008 0.18h-2.664q-0.792 0 -1.404 0.828 -0.18 0.252 -1.062 1.836t-1.674 2.934 -0.936 1.386l-0.18 -0.144q0 -2.772 -0.972 -5.976 -0.036 -0.18 -0.126 -0.306t-0.216 -0.234 -0.234 -0.18 -0.306 -0.108 -0.306 -0.054 -0.342 -0.036 -0.324 -0.018h-0.6659999999999999q-1.368 0 -1.368 0.756l0.036 0.18q0.18 1.908 0.9 5.436t0.9 5.148q0.072 0.576 0.072 0.864 0 0.684 -1.098 2.214t-1.098 2.106q0 0.468 1.44 0.468 2.196 0 2.736 -0.9l8.82 -14.94q0.36 -0.72 0.36 -0.936 0 -0.324 -0.288 -0.324zm8.712 -3.564h-4.644q-0.648 0 -1.044 0.828 -0.216 0.468 -1.674 6.894t-1.458 6.858q0 0.72 1.548 0.72h0.9180000000000001l0.342 -0.036 0.306 -0.072 0.306 -0.108 0.234 -0.162 0.198 -0.216 0.108 -0.306 0.756 -3.276q0.072 -0.36 0.378 -0.612t0.702 -0.252q1.692 0 3.15 -0.252t2.898 -0.882 2.286 -1.89 0.846 -3.024q0 -1.296 -0.522 -2.196t-1.476 -1.314 -1.926 -0.558 -2.232 -0.144zm12.456 3.384q-0.936 0 -2.664 0.216 -1.368 0.216 -1.728 0.576 -0.252 0.288 -0.396 0.684 -0.288 0.864 -0.288 1.404 0 0.36 0.288 0.36 0.036 0 1.476 -0.432 1.08 -0.288 2.088 -0.288 2.664 0 2.664 1.296 0 0.432 -0.36 0.504 -0.144 0.036 -2.052 0.252 -1.368 0.144 -2.322 0.36t-2.034 0.702 -1.638 1.404 -0.558 2.25 0.936 2.106 2.304 0.774q0.864 0 1.62 -0.216t1.224 -0.468 1.368 -0.864l-0.108 0.576q0 0.18 0.072 0.306t0.234 0.198 0.288 0.126 0.378 0.072 0.342 0.018h0.63q1.512 0 1.728 -0.9l1.62 -6.984q0.108 -0.54 0.108 -1.116 0 -2.916 -5.22 -2.916zm11.592 -3.276h-1.98q-0.9 0 -1.188 1.44 -0.36 1.584 -1.314 6.012t-1.53 6.84v0.18q0 0.576 0.576 0.648h2.088q0.36 0 0.666 -0.234t0.378 -0.594l2.988 -13.464h-0.036l0.036 -0.18q0 -0.252 -0.198 -0.45t-0.486 -0.198zm5.292 -14.076v46.08q0 1.872 -1.368 3.24t-3.24 1.368h-73.728q-1.872 0 -3.24 -1.368t-1.368 -3.24v-46.08q0 -1.872 1.368 -3.24t3.24 -1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z','CC_STRIPE':'M57.492 -31.931q0 2.484 -0.756 3.816 -0.684 1.26 -1.872 1.26 -0.828 0 -1.476 -0.324v-8.064q1.044 -1.08 2.052 -1.08 2.052 0 2.052 4.392zm15.768 -1.296h-3.96q0.216 -3.528 2.016 -3.528 1.836 0 1.944 3.528zm-56.124 4.86q0 -2.124 -1.188 -3.294t-3.636 -2.07q-1.296 -0.468 -1.872 -0.864t-0.576 -0.9q0 -0.936 1.368 -0.936 2.088 0 4.464 1.188l0.648 -4.032q-2.412 -1.152 -5.364 -1.152 -2.772 0 -4.428 1.368 -1.728 1.404 -1.728 3.924 0 2.088 1.17 3.258t3.582 2.034q1.404 0.504 1.962 0.918t0.558 0.99q0 1.116 -1.728 1.116 -1.044 0 -2.52 -0.45t-2.592 -1.098l-0.648 4.068q2.592 1.476 6.048 1.476 2.916 0 4.644 -1.332 1.836 -1.476 1.836 -4.212zm10.62 -7.74l0.684 -3.996h-3.456v-4.86l-4.644 0.756 -0.648 4.104 -1.656 0.288 -0.612 3.708h2.232v7.884q0 3.024 1.584 4.32 1.368 1.08 3.996 1.08 1.152 0 2.844 -0.396v-4.248q-1.152 0.252 -1.584 0.252 -1.512 0 -1.512 -1.8v-7.092h2.772zm11.376 0.9v-5.004q-0.54 -0.108 -1.008 -0.108 -1.152 0 -1.998 0.576t-1.206 1.656l-0.36 -2.016h-4.716v16.956h5.4v-11.016q0.936 -1.116 2.952 -1.116 0.576 0 0.936 0.072zm1.332 12.06h5.4v-16.956h-5.4v16.956zm22.392 -8.964q0 -4.392 -1.62 -6.444 -1.44 -1.872 -3.996 -1.872 -2.304 0 -4.212 2.016l-0.288 -1.692h-4.752v23.22l5.4 -0.9v-5.436q1.296 0.396 2.448 0.396 2.988 0 4.824 -2.016 2.196 -2.34 2.196 -7.272zm-16.848 -12.528q0 -1.188 -0.828 -2.016t-2.016 -0.828 -2.016 0.828 -0.828 2.016 0.828 2.034 2.016 0.846 2.016 -0.846 0.828 -2.034zm32.328 12.852q0 -4.068 -1.728 -6.336 -1.8 -2.304 -5.184 -2.304 -3.456 0 -5.454 2.376t-1.998 6.48q0 4.608 2.268 6.768 1.98 1.98 5.796 1.98 3.636 0 5.76 -1.44l-0.576 -3.708q-2.052 1.116 -4.608 1.116 -1.548 0 -2.268 -0.684 -0.828 -0.684 -1.008 -2.376h8.928q0.072 -0.504 0.072 -1.872zm4.608 -23.436v46.08q0 1.872 -1.368 3.24t-3.24 1.368h-73.728q-1.872 0 -3.24 -1.368t-1.368 -3.24v-46.08q0 -1.872 1.368 -3.24t3.24 -1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z','BELL_SLASH':'M56.088 -33.767q2.196 12.816 10.728 20.016 0 1.872 -1.368 3.24t-3.24 1.368h-16.128q0 3.816 -2.7 6.516t-6.516 2.7 -6.498 -2.682 -2.718 -6.498zm-19.224 30.96q0.576 0 0.576 -0.576t-0.576 -0.576q-2.124 0 -3.654 -1.53t-1.53 -3.654q0 -0.576 -0.576 -0.576t-0.576 0.576q0 2.628 1.854 4.482t4.482 1.854zm36.072 -57.6q0.288 0.36 0.27 0.846t-0.378 0.81l-67.392 58.392q-0.36 0.288 -0.846 0.252t-0.774 -0.396l-3.024 -3.456q-0.288 -0.36 -0.27 -0.846t0.378 -0.774l6.696 -5.796q-0.684 -1.152 -0.684 -2.376 1.8 -1.512 3.276 -3.168t3.06 -4.302 2.682 -5.706 1.8 -7.416 0.702 -9.36q0 -5.472 4.212 -10.17t11.052 -5.706q-0.288 -0.684 -0.288 -1.404 0 -1.44 1.008 -2.448t2.448 -1.008 2.448 1.008 1.008 2.448q0 0.72 -0.288 1.404 4.464 0.648 7.884 2.97t5.328 5.67l15.048 -13.068q0.36 -0.288 0.846 -0.252t0.774 0.396z','BELL_SLASH_O':'M37.44 -3.383q0 -0.576 -0.576 -0.576 -2.124 0 -3.654 -1.53t-1.53 -3.654q0 -0.576 -0.576 -0.576t-0.576 0.576q0 2.628 1.854 4.482t4.482 1.854q0.576 0 0.576 -0.576zm-19.332 -17.1l31.572 -27.36q-1.512 -3.168 -4.77 -5.274t-8.046 -2.106q-3.348 0 -6.102 1.134t-4.374 2.898 -2.484 3.708 -0.864 3.78q0 13.824 -4.932 23.22zm48.708 6.732q0 1.872 -1.368 3.24t-3.24 1.368h-16.128q0 3.816 -2.7 6.516t-6.516 2.7 -6.498 -2.682 -2.718 -6.498l5.364 -4.644h27.252q-5.976 -6.732 -8.172 -16.524l3.996 -3.492q2.196 12.816 10.728 20.016zm3.096 -50.112l3.024 3.456q0.288 0.36 0.27 0.846t-0.378 0.81l-67.392 58.392q-0.36 0.288 -0.846 0.252t-0.774 -0.396l-3.024 -3.456q-0.288 -0.36 -0.27 -0.846t0.378 -0.774l6.696 -5.796q-0.684 -1.152 -0.684 -2.376 1.8 -1.512 3.276 -3.168t3.06 -4.302 2.682 -5.706 1.8 -7.416 0.702 -9.36q0 -5.472 4.212 -10.17t11.052 -5.706q-0.288 -0.684 -0.288 -1.404 0 -1.44 1.008 -2.448t2.448 -1.008 2.448 1.008 1.008 2.448q0 0.72 -0.288 1.404 4.464 0.648 7.884 2.97t5.328 5.67l15.048 -13.068q0.36 -0.288 0.846 -0.252t0.774 0.396z','TRASH':'M18.432 -14.903v-25.344q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v25.344q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm9.216 0v-25.344q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v25.344q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm9.216 0v-25.344q0 -0.504 -0.324 -0.828t-0.828 -0.324h-2.304q-0.504 0 -0.828 0.324t-0.324 0.828v25.344q0 0.504 0.324 0.828t0.828 0.324h2.304q0.504 0 0.828 -0.324t0.324 -0.828zm-19.584 -35.712h16.128l-1.728 -4.212q-0.252 -0.324 -0.612 -0.396h-11.412q-0.36 0.072 -0.612 0.396zm33.408 1.152v2.304q0 0.504 -0.324 0.828t-0.828 0.324h-3.456v34.128q0 2.988 -1.692 5.166t-4.068 2.178h-29.952q-2.376 0 -4.068 -2.106t-1.692 -5.094v-34.272h-3.456q-0.504 0 -0.828 -0.324t-0.324 -0.828v-2.304q0 -0.504 0.324 -0.828t0.828 -0.324h11.124l2.52 -6.012q0.54 -1.332 1.944 -2.268t2.844 -0.936h11.52q1.44 0 2.844 0.936t1.944 2.268l2.52 6.012h11.124q0.504 0 0.828 0.324t0.324 0.828z','COPYRIGHT':'M41.4 -25.775v3.924q0 1.8 -1.314 3.204t-3.384 2.178 -4.248 1.17 -4.23 0.396q-7.38 0 -12.33 -5.004t-4.95 -12.456q0 -7.308 4.896 -12.204t12.204 -4.896q1.224 0 2.718 0.162t3.348 0.648 3.33 1.224 2.484 2.034 1.008 2.916v3.924q0 0.576 -0.576 0.576h-4.248q-0.576 0 -0.576 -0.576v-2.52q0 -1.548 -2.358 -2.43t-4.95 -0.882q-5.04 0 -8.226 3.294t-3.186 8.55q0 5.436 3.294 8.982t8.406 3.546q2.448 0 4.968 -0.864t2.52 -2.376v-2.52q0 -0.252 0.162 -0.414t0.378 -0.162h4.284q0.216 0 0.396 0.162t0.18 0.414zm-13.752 -29.448q-4.68 0 -8.946 1.836t-7.344 4.914 -4.914 7.344 -1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946 -1.836 7.344 -4.914 4.914 -7.344 1.836 -8.946 -1.836 -8.946 -4.914 -7.344 -7.344 -4.914 -8.946 -1.836zm27.648 23.04q0 7.524 -3.708 13.878t-10.062 10.062 -13.878 3.708 -13.878 -3.708 -10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708 13.878 3.708 10.062 10.062 3.708 13.878z','AT':'M34.992 -36.539q0 -3.888 -1.926 -6.084t-5.31 -2.196q-2.268 0 -4.464 1.098t-3.96 3.042 -2.862 4.932 -1.098 6.48q0 4.032 1.926 6.228t5.418 2.196q3.456 0 6.336 -2.394t4.41 -5.976 1.53 -7.326zm20.304 4.356q0 3.996 -1.332 7.092t-3.546 4.86 -4.734 2.682 -5.22 0.99l-0.558 0.018 -0.594 0.018q-3.42 0 -5.112 -1.908 -1.008 -1.188 -1.188 -2.988 -1.872 2.376 -4.734 3.96t-6.246 1.584q-5.796 0 -8.982 -3.438t-3.186 -9.702q0 -5.652 2.376 -10.44t6.444 -7.578 8.856 -2.79q3.132 0 5.58 1.278t3.816 3.582l0.072 -0.684 0.396 -2.016q0.036 -0.216 0.198 -0.432t0.342 -0.216h4.248q0.18 0 0.468 0.396 0.18 0.18 0.108 0.576l-4.32 22.104q-0.18 0.864 -0.18 1.728 0 1.404 0.45 1.872t1.602 0.468q1.008 -0.036 2.052 -0.198t2.628 -0.864 2.772 -1.8 2.052 -3.222 0.864 -4.932q0 -10.512 -6.264 -16.776t-16.776 -6.264q-4.68 0 -8.946 1.836t-7.344 4.914 -4.914 7.344 -1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836q8.208 0 14.58 -5.184 0.396 -0.324 0.864 -0.288t0.756 0.432l1.476 1.764q0.288 0.432 0.252 0.864 -0.072 0.468 -0.432 0.792 -3.672 2.988 -8.19 4.608t-9.306 1.62q-5.616 0 -10.728 -2.196t-8.82 -5.904 -5.904 -8.82 -2.196 -10.728 2.196 -10.728 5.904 -8.82 8.82 -5.904 10.728 -2.196q12.384 0 20.016 7.632t7.632 20.016z','EYEDROPPER':'M61.128 -61.055q3.384 3.384 3.384 8.154t-3.384 8.118l-8.1 8.028 3.744 3.744q0.36 0.36 0.36 0.828t-0.36 0.828l-7.56 7.56q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-3.78 -3.78 -21.708 21.708q-1.332 1.332 -3.24 1.332h-7.308l-9.216 4.608 -2.304 -2.304 4.608 -9.216v-7.308q0 -1.908 1.332 -3.24l21.708 -21.708 -3.78 -3.78q-0.36 -0.36 -0.36 -0.828t0.36 -0.828l7.56 -7.56q0.36 -0.36 0.828 -0.36t0.828 0.36l3.744 3.744 8.028 -8.1q3.348 -3.384 8.118 -3.384t8.154 3.384zm-42.696 49.608l20.736 -20.736 -6.912 -6.912 -20.736 20.736v6.912h6.912z','PAINT_BRUSH':'M58.14 -64.439q2.52 0 4.41 1.674t1.89 4.194q0 2.268 -1.62 5.436 -11.952 22.644 -16.74 27.072 -3.492 3.276 -7.848 3.276 -4.536 0 -7.794 -3.33t-3.258 -7.902q0 -4.608 3.312 -7.632l22.968 -20.844q2.124 -1.944 4.68 -1.944zm-32.724 37.224q1.404 2.736 3.834 4.68t5.418 2.736l0.036 2.556q0.144 7.668 -4.662 12.492t-12.546 4.824q-4.428 0 -7.848 -1.674t-5.49 -4.59 -3.114 -6.588 -1.044 -7.92q0.252 0.18 1.476 1.08t2.232 1.602 2.124 1.314 1.656 0.612q1.476 0 1.98 -1.332 0.9 -2.376 2.07 -4.05t2.502 -2.736 3.168 -1.71 3.708 -0.918 4.5 -0.378z','BIRTHDAY_CAKE':'M64.512 -13.751v13.824h-64.512v-13.824q1.62 0 3.06 -0.504t2.124 -0.99 1.692 -1.35q1.08 -0.972 1.854 -1.368t2.034 -0.396 1.998 0.396 1.89 1.368q1.044 0.9 1.692 1.368t2.088 0.972 3.096 0.504q1.62 0 3.06 -0.522t2.088 -0.972 1.728 -1.35q0.756 -0.684 1.17 -0.972t1.116 -0.54 1.566 -0.252q1.26 0 2.034 0.396t1.854 1.368q1.008 0.864 1.692 1.35t2.124 0.99 3.06 0.504 3.06 -0.504 2.124 -0.99 1.692 -1.35q1.08 -0.972 1.854 -1.368t2.034 -0.396q1.224 0 1.998 0.396t1.854 1.368q1.008 0.864 1.692 1.35t2.124 0.99 3.06 0.504zm0 -11.52v6.912q-1.26 0 -1.998 -0.396t-1.89 -1.368q-1.044 -0.9 -1.692 -1.368t-2.088 -0.972 -3.06 -0.504q-1.656 0 -3.096 0.504t-2.088 0.972 -1.692 1.368q-0.792 0.684 -1.188 0.972t-1.116 0.54 -1.584 0.252q-1.26 0 -2.034 -0.396t-1.854 -1.368q-1.044 -0.9 -1.692 -1.368t-2.088 -0.972 -3.096 -0.504q-1.62 0 -3.06 0.522t-2.088 0.972 -1.728 1.35q-0.756 0.684 -1.17 0.972t-1.116 0.54 -1.566 0.252q-1.26 0 -2.034 -0.396t-1.854 -1.368q-1.008 -0.864 -1.692 -1.35t-2.124 -0.99 -3.06 -0.504q-1.656 0 -3.096 0.504t-2.088 0.972 -1.692 1.368q-1.08 0.972 -1.854 1.368t-2.034 0.396v-6.912q0 -2.88 2.016 -4.896t4.896 -2.016h2.304v-16.128h9.216v16.128h9.216v-16.128h9.216v16.128h9.216v-16.128h9.216v16.128h2.304q2.88 0 4.896 2.016t2.016 4.896zm-46.08 -31.104q0 2.772 -1.296 4.266t-3.312 1.494q-1.908 0 -3.258 -1.35t-1.35 -3.258q0 -1.044 0.342 -1.836t0.846 -1.224 1.116 -1.008 1.116 -1.134 0.846 -1.602 0.342 -2.412q1.368 0 2.988 2.664t1.62 5.4zm18.432 0q0 2.772 -1.296 4.266t-3.312 1.494q-1.908 0 -3.258 -1.35t-1.35 -3.258q0 -1.044 0.342 -1.836t0.846 -1.224 1.116 -1.008 1.116 -1.134 0.846 -1.602 0.342 -2.412q1.368 0 2.988 2.664t1.62 5.4zm18.432 0q0 2.772 -1.296 4.266t-3.312 1.494q-1.908 0 -3.258 -1.35t-1.35 -3.258q0 -1.044 0.342 -1.836t0.846 -1.224 1.116 -1.008 1.116 -1.134 0.846 -1.602 0.342 -2.412q1.368 0 2.988 2.664t1.62 5.4z','AREA_CHART':'M73.728 -9.143v4.608h-73.728v-55.296h4.608v50.688h69.12zm-13.824 -36.864l9.216 32.256h-59.904v-20.736l16.128 -20.736 20.736 20.736z','PIE_CHART':'M27.648 -32.399l19.656 19.656q-3.816 3.888 -8.91 6.048t-10.746 2.16q-7.524 0 -13.878 -3.708t-10.062 -10.062 -3.708 -13.878 3.708 -13.878 10.062 -10.062 13.878 -3.708v27.432zm6.732 0.216h27.828q0 5.652 -2.16 10.746t-6.048 8.91zm25.524 -4.608h-27.648v-27.648q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878z','LINE_CHART':'M73.728 -9.143v4.608h-73.728v-55.296h4.608v50.688h69.12zm-4.608 -44.928v15.66q0 0.756 -0.702 1.062t-1.278 -0.27l-4.356 -4.356 -22.788 22.788q-0.36 0.36 -0.828 0.36t-0.828 -0.36l-8.388 -8.388 -14.976 14.976 -6.912 -6.912 21.06 -21.06q0.36 -0.36 0.828 -0.36t0.828 0.36l8.388 8.388 16.704 -16.704 -4.356 -4.356q-0.576 -0.576 -0.27 -1.278t1.062 -0.702h15.66q0.504 0 0.828 0.324t0.324 0.828z','LASTFM':'M46.512 -39.095q0 0.216 0.36 1.476 0.36 1.044 0.9 1.782t1.476 1.224 1.584 0.72 1.98 0.594q11.7 3.276 11.7 11.952 0 5.256 -3.798 8.73t-9.162 3.474q-2.124 0 -4.014 -0.666t-3.294 -1.638 -2.772 -2.682 -2.268 -3.15 -1.926 -3.726 -1.566 -3.708 -1.422 -3.834 -1.278 -3.42q-1.152 -2.916 -2.214 -4.806t-2.646 -3.474 -3.744 -2.304 -5.112 -0.72q-3.456 0 -6.588 1.998t-4.968 5.202 -1.836 6.66q0 5.76 3.834 10.062t9.486 4.302q6.372 0 9.288 -3.42 2.016 -2.268 2.988 -4.176l3.024 5.472q-0.54 1.224 -1.584 2.52l0.036 0.036q-4.716 5.472 -13.968 5.472 -5.292 0 -9.702 -2.844t-6.858 -7.47 -2.448 -9.882q0 -3.78 1.566 -7.416t4.176 -6.354 6.192 -4.374 7.362 -1.656q3.132 0 5.724 0.684t4.446 1.8 3.42 2.88 2.61 3.564 2.106 4.212 1.818 4.482 1.8 4.698 1.98 4.572q3.456 7.2 8.388 7.2 2.916 0 4.986 -1.746t2.07 -4.626q0 -1.512 -0.684 -2.592t-1.818 -1.656 -2.61 -1.134 -3.042 -0.972 -3.15 -1.224 -2.916 -1.872 -2.34 -2.952 -1.404 -4.41q-0.108 -0.576 -0.108 -1.188 0 -3.96 3.15 -6.912t7.146 -2.808q2.808 0.108 4.338 0.522t3.258 1.926h-0.036q0.432 0.396 0.828 0.882t0.936 1.296 0.684 0.99l-4.644 3.564q-0.936 -1.764 -1.944 -2.52v-0.036q-0.828 -0.756 -3.492 -0.756 -1.764 0 -3.024 1.188t-1.26 2.988z','LASTFM_SQUARE':'M51.552 -26.567q0 -6.228 -8.424 -8.604 -1.26 -0.36 -1.908 -0.594t-1.368 -0.9 -1.044 -1.674q0 -0.072 -0.072 -0.306t-0.108 -0.432 -0.036 -0.27q0 -1.296 0.882 -2.142t2.178 -0.846q1.944 0 2.556 0.54h-0.036q0.72 0.54 1.404 1.836l3.348 -2.556q-1.404 -1.944 -1.764 -2.304 -1.188 -1.044 -2.43 -1.404t-3.078 -0.36q-2.88 0 -5.112 2.07t-2.232 4.95q0 0.252 0.072 0.828 0.576 3.456 2.322 5.04t5.346 2.628q1.044 0.288 1.764 0.558t1.62 0.774 1.386 1.242 0.486 1.674v0.18q0.036 2.088 -1.458 3.348t-3.618 1.26q-3.492 0 -6.012 -5.184 -0.828 -1.692 -1.854 -4.374t-1.728 -4.518 -1.944 -3.978 -2.664 -3.438 -3.726 -2.178 -5.292 -0.882q-3.636 0 -6.912 2.016t-5.184 5.328 -1.8 6.912v0.036q0.144 3.888 1.818 7.164t4.806 5.31 7.056 2.034q6.696 0 10.044 -3.96 0.72 -0.972 1.116 -1.836l-2.16 -3.924q-1.512 2.88 -3.564 4.176t-5.256 1.296q-4.14 0 -6.876 -3.132t-2.736 -7.344q0 -3.78 2.952 -6.804t6.696 -3.024q4.032 0 6.12 1.926t3.744 6.21q0.288 0.756 0.918 2.466t1.026 2.754 1.134 2.682 1.386 2.664 1.638 2.25 1.998 1.926 2.376 1.188 2.88 0.486q3.852 0 6.588 -2.502t2.736 -6.282zm3.744 -22.896v34.56q0 4.284 -3.042 7.326t-7.326 3.042h-34.56q-4.284 0 -7.326 -3.042t-3.042 -7.326v-34.56q0 -4.284 3.042 -7.326t7.326 -3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z','TOGGLE_OFF':'M41.472 -32.183q0 -3.744 -1.458 -7.146t-3.942 -5.886 -5.886 -3.942 -7.146 -1.458 -7.146 1.458 -5.886 3.942 -3.942 5.886 -1.458 7.146 1.458 7.146 3.942 5.886 5.886 3.942 7.146 1.458 7.146 -1.458 5.886 -3.942 3.942 -5.886 1.458 -7.146zm27.648 0q0 -3.744 -1.458 -7.146t-3.942 -5.886 -5.886 -3.942 -7.146 -1.458h-13.896q4.284 3.24 6.786 8.064t2.502 10.368 -2.502 10.368 -6.786 8.064h13.896q3.744 0 7.146 -1.458t5.886 -3.942 3.942 -5.886 1.458 -7.146zm4.608 0q0 4.68 -1.836 8.946t-4.914 7.344 -7.344 4.914 -8.946 1.836h-27.648q-4.68 0 -8.946 -1.836t-7.344 -4.914 -4.914 -7.344 -1.836 -8.946 1.836 -8.946 4.914 -7.344 7.344 -4.914 8.946 -1.836h27.648q4.68 0 8.946 1.836t7.344 4.914 4.914 7.344 1.836 8.946z','TOGGLE_ON':'M0 -32.183q0 -4.68 1.836 -8.946t4.914 -7.344 7.344 -4.914 8.946 -1.836h27.648q4.68 0 8.946 1.836t7.344 4.914 4.914 7.344 1.836 8.946 -1.836 8.946 -4.914 7.344 -7.344 4.914 -8.946 1.836h-27.648q-4.68 0 -8.946 -1.836t-7.344 -4.914 -4.914 -7.344 -1.836 -8.946zm50.688 18.432q3.744 0 7.146 -1.458t5.886 -3.942 3.942 -5.886 1.458 -7.146 -1.458 -7.146 -3.942 -5.886 -5.886 -3.942 -7.146 -1.458 -7.146 1.458 -5.886 3.942 -3.942 5.886 -1.458 7.146 1.458 7.146 3.942 5.886 5.886 3.942 7.146 1.458z','BICYCLE':'M27.432 -22.967h-11.304q-1.44 0 -2.07 -1.26t0.234 -2.412l6.768 -9.036q-2.34 -1.116 -4.932 -1.116 -4.752 0 -8.136 3.384t-3.384 8.136 3.384 8.136 8.136 3.384q4.14 0 7.308 -2.61t3.996 -6.606zm-6.696 -4.608h6.696q-0.648 -3.06 -2.7 -5.328zm17.28 0l10.368 -13.824h-17.28l-3.564 4.752q3.78 3.708 4.536 9.072h5.94zm40.32 2.304q0 -4.752 -3.384 -8.136t-8.136 -3.384q-2.16 0 -4.356 0.864l6.264 9.36q0.54 0.828 0.36 1.764t-0.972 1.44q-0.54 0.396 -1.296 0.396 -1.26 0 -1.908 -1.044l-6.264 -9.36q-3.348 3.42 -3.348 8.1 0 4.752 3.384 8.136t8.136 3.384 8.136 -3.384 3.384 -8.136zm4.608 0q0 6.66 -4.734 11.394t-11.394 4.734 -11.394 -4.734 -4.734 -11.394q0 -3.492 1.422 -6.606t3.942 -5.382l-2.34 -3.528 -12.708 16.884q-0.648 0.936 -1.836 0.936h-7.092q-0.828 5.904 -5.364 9.864t-10.584 3.96q-6.66 0 -11.394 -4.734t-4.734 -11.394 4.734 -11.394 11.394 -4.734q4.104 0 7.74 1.98l4.932 -6.588h-8.064q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h13.824v4.608h15.66l-3.06 -4.608h-7.992q-0.936 0 -1.62 -0.684t-0.684 -1.62 0.684 -1.62 1.62 -0.684h9.216q1.188 0 1.908 1.008l9.612 14.4q3.276 -1.584 6.912 -1.584 6.66 0 11.394 4.734t4.734 11.394z','BUS':'M13.824 -20.663q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm36.864 0q0 -1.908 -1.35 -3.258t-3.258 -1.35 -3.258 1.35 -1.35 3.258 1.35 3.258 3.258 1.35 3.258 -1.35 1.35 -3.258zm-1.656 -14.256l-2.592 -13.824q-0.18 -0.828 -0.81 -1.35t-1.458 -0.522h-33.048q-0.828 0 -1.458 0.522t-0.81 1.35l-2.592 13.824q-0.18 1.08 0.504 1.908t1.764 0.828h38.232q1.08 0 1.764 -0.828t0.504 -1.908zm-8.136 -22.032q0 -0.72 -0.504 -1.224t-1.224 -0.504h-23.04q-0.72 0 -1.224 0.504t-0.504 1.224 0.504 1.224 1.224 0.504h23.04q0.72 0 1.224 -0.504t0.504 -1.224zm14.4 26.1v21.708h-4.608v4.608q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258v-4.608h-27.648v4.608q0 1.908 -1.35 3.258t-3.258 1.35 -3.258 -1.35 -1.35 -3.258v-4.608h-4.608v-21.708q0 -4.032 0.9 -8.028l3.708 -16.344q0.324 -2.808 3.51 -4.932t8.28 -3.204 11.25 -1.08 11.25 1.08 8.28 3.204 3.51 4.932l3.78 16.344q0.828 3.672 0.828 8.028z','IOXHOST':'M52.668 -34.487q0 1.26 -0.9 2.178t-2.196 0.918h-25.272q-1.296 0 -2.196 -0.918t-0.9 -2.178 0.9 -2.178 2.196 -0.918h25.272q1.296 0 2.196 0.918t0.9 2.178zm7.704 0q0 -3.096 -0.828 -6.12h-35.352q-1.296 0 -2.196 -0.9t-0.9 -2.16q0 -1.296 0.9 -2.196t2.196 -0.9h32.688q-3.168 -5.148 -8.46 -8.172t-11.52 -3.024q-6.372 0 -11.79 3.15t-8.568 8.55 -3.15 11.772q0 3.096 0.828 6.12h35.352q1.296 0 2.196 0.9t0.9 2.16q0 1.296 -0.9 2.196t-2.196 0.9h-32.688q3.168 5.148 8.478 8.172t11.538 3.024q4.752 0 9.108 -1.854t7.488 -5.004 5.004 -7.488 1.872 -9.126zm13.356 -9.18q0 1.26 -0.9 2.16t-2.196 0.9h-4.716q0.612 3.06 0.612 6.12 0 6.012 -2.358 11.502t-6.318 9.468 -9.45 6.336 -11.502 2.358q-8.856 0 -16.146 -4.788t-10.854 -12.6h-6.804q-1.296 0 -2.196 -0.9t-0.9 -2.196q0 -1.26 0.9 -2.16t2.196 -0.9h4.752q-0.612 -3.06 -0.612 -6.12 0 -6.012 2.358 -11.502t6.318 -9.468 9.45 -6.336 11.538 -2.358q8.82 0 16.11 4.788t10.854 12.6h6.768q1.296 0 2.196 0.9t0.9 2.196z','ANGELLIST':'M34.308 -50.831l-4.104 11.808 4.212 0.756q5.94 -16.236 5.94 -18.648 0 -2.016 -1.368 -2.016 -2.052 0 -4.68 8.1zm-10.764 24.732l1.188 3.168q1.332 -1.512 2.556 -2.412l-1.188 -0.198 -1.386 -0.252 -1.17 -0.306zm-10.512 -32.256q0 3.528 5.724 18.756 0.648 -0.36 1.764 -0.36 0.54 0 2.7 0.18l-4.356 -12.636q-2.7 -7.92 -4.428 -7.92 -0.684 0 -1.044 0.63t-0.36 1.35zm-2.844 27.324q0 1.296 1.854 4.284t4.23 5.508 3.6 2.52q0.504 0 0.918 -0.468t0.414 -0.972q0 -0.864 -1.152 -3.672 -0.468 -1.152 -1.152 -2.592t-1.71 -3.204 -2.214 -2.916 -2.232 -1.152q-0.72 0 -1.638 0.972t-0.918 1.692zm-5.688 12.06q0 1.476 0.9 3.744 2.124 5.22 6.606 8.172t10.134 2.952q8.172 0 13.752 -6.12 5.472 -6.084 5.472 -15.372 0 -1.548 -0.036 -2.412t-0.414 -2.232 -1.098 -2.016q-2.016 -1.764 -7.614 -2.718t-9.738 -0.954q-1.332 0 -1.764 0.396 -0.432 0.18 -0.432 1.26 0 1.224 0.774 2.16t1.998 1.44 2.79 0.846 3.15 0.414 3.06 0.144 2.52 0h0.828q0.864 0 1.44 0.684 0.54 0.684 0.684 1.98 -1.008 1.008 -3.456 1.944 -2.196 0.792 -3.348 1.656 -2.304 1.656 -3.906 4.104t-1.602 4.932q0 1.116 0.666 3.186t0.666 3.15l-0.108 0.432q-0.144 0.432 -0.144 0.504 -4.932 -0.36 -5.256 -7.776 -0.288 0.072 -1.476 0.072 0.072 0.252 0.072 0.756 0 1.908 -1.458 3.222t-3.402 1.314q-2.952 0 -5.994 -2.808t-3.042 -5.724q0 -1.224 1.188 -2.412 1.872 2.304 2.16 2.736 2.772 3.744 4.788 3.744 0.432 0 0.954 -0.306t0.522 -0.738q0 -1.224 -3.15 -5.22t-4.194 -3.996q-1.548 0 -2.52 1.602t-0.972 3.258zm-4.104 0.324q0 -3.636 1.53 -5.868t4.914 -3.168q-1.008 -2.664 -1.008 -3.744 0 -2.232 2.196 -4.428t4.392 -2.196q1.044 0 2.52 0.54 -5.868 -16.632 -5.868 -20.412 0 -2.88 1.476 -4.698t4.284 -1.818q4.716 0 11.7 20.916l0.288 0.828q0.216 -0.576 1.044 -2.862t1.566 -4.266 1.944 -4.59 2.322 -4.428 2.538 -3.114 2.754 -1.296q2.556 0 4.032 1.764t1.476 4.392q0 3.888 -5.724 19.8 2.196 0.54 3.618 1.656t2.106 2.808 0.936 3.366 0.252 3.978q0 5.4 -1.692 10.08t-4.752 8.1 -7.596 5.4 -10.008 1.98q-3.996 0 -8.028 -1.512 -5.364 -2.052 -9.288 -6.894t-3.924 -10.314z','CC':'M28.26 -28.151h7.452q-0.504 5.688 -3.546 8.946t-7.722 3.258q-5.832 0 -9.162 -4.176t-3.33 -11.376q0 -6.984 3.348 -11.214t8.388 -4.23q5.328 0 8.352 3.132t3.492 8.892h-7.308q-0.18 -2.304 -1.278 -3.564t-2.934 -1.26q-2.052 0 -3.186 2.178t-1.134 6.39q0 1.728 0.18 3.024t0.648 2.502 1.44 1.854 2.376 0.648q3.42 0 3.924 -5.004zm25.632 0h7.416q-0.504 5.688 -3.528 8.946t-7.704 3.258q-5.832 0 -9.162 -4.176t-3.33 -11.376q0 -6.984 3.348 -11.214t8.388 -4.23q5.328 0 8.352 3.132t3.492 8.892h-7.344q-0.144 -2.304 -1.26 -3.564t-2.916 -1.26q-2.052 0 -3.186 2.178t-1.134 6.39q0 1.728 0.18 3.024t0.648 2.502 1.422 1.854 2.358 0.648q1.764 0 2.754 -1.368t1.206 -3.636zm12.924 -4.284q0 -7.452 -0.558 -11.052t-2.178 -5.796q-0.216 -0.288 -0.486 -0.504t-0.774 -0.54 -0.576 -0.396q-3.096 -2.268 -25.092 -2.268 -22.5 0 -25.56 2.268 -0.18 0.144 -0.63 0.414t-0.756 0.504 -0.522 0.522q-1.62 2.16 -2.16 5.742t-0.54 11.106q0 7.488 0.54 11.07t2.16 5.778q0.216 0.288 0.54 0.54t0.738 0.504 0.63 0.432q1.584 1.188 8.622 1.764t16.938 0.576q21.96 0 25.092 -2.34 0.18 -0.144 0.612 -0.396t0.738 -0.504 0.486 -0.576q1.656 -2.16 2.196 -5.724t0.54 -11.124zm6.912 -27.396v55.296h-73.728v-55.296h73.728z','SHEQEL':'M35.712 -41.975v17.856q0 0.504 -0.324 0.828t-0.828 0.324h-5.76q-0.504 0 -0.828 -0.324t-0.324 -0.828v-17.856q0 -4.032 -2.88 -6.912t-6.912 -2.88h-9.792v41.472q0 0.504 -0.324 0.828t-0.828 0.324h-5.76q-0.504 0 -0.828 -0.324t-0.324 -0.828v-48.384q0 -0.504 0.324 -0.828t0.828 -0.324h16.704q4.86 0 8.964 2.394t6.498 6.498 2.394 8.964zm13.824 -16.704v31.68q0 4.86 -2.394 8.964t-6.498 6.498 -8.964 2.394h-16.704q-0.504 0 -0.828 -0.324t-0.324 -0.828v-34.56q0 -0.504 0.324 -0.828t0.828 -0.324h5.76q0.504 0 0.828 0.324t0.324 0.828v27.648h9.792q4.032 0 6.912 -2.88t2.88 -6.912v-31.68q0 -0.504 0.324 -0.828t0.828 -0.324h5.76q0.504 0 0.828 0.324t0.324 0.828z','MEANPATH':'M47.196 -34.127v4.104q0 0.864 -0.486 1.368t-1.35 0.504h-7.272q-0.864 0 -1.368 -0.504t-0.504 -1.368v-4.104q0 -0.864 0.504 -1.368t1.368 -0.504h7.272q0.864 0 1.35 0.504t0.486 1.368zm-17.64 8.28v-9q0 -1.908 -1.17 -3.078t-3.078 -1.17h-4.788q-2.448 0 -3.456 1.872 -1.008 -1.872 -3.456 -1.872h-4.68q-1.908 0 -3.078 1.17t-1.17 3.078v9q0 0.792 0.756 0.792h1.98q0.792 0 0.792 -0.792v-8.28q0 -0.864 0.486 -1.368t1.386 -0.504h3.384q0.864 0 1.368 0.504t0.504 1.368v8.28q0 0.792 0.756 0.792h1.944q0.792 0 0.792 -0.792v-8.28q0 -0.864 0.504 -1.368t1.368 -0.504h3.492q0.864 0 1.35 0.504t0.486 1.368v8.28q0 0.792 0.792 0.792h1.98q0.756 0 0.756 -0.792zm21.204 -3.456v-5.544q0 -1.908 -1.188 -3.078t-3.096 -1.17h-9.504q-1.908 0 -3.096 1.17t-1.188 3.078v14.76q0 0.756 0.792 0.756h1.98q0.756 0 0.756 -0.756v-6.48q1.116 1.512 3.384 1.512h6.876q1.908 0 3.096 -1.17t1.188 -3.078zm4.536 -22.176v38.592q0 3.456 -2.448 5.904t-5.904 2.448h-38.592q-3.456 0 -5.904 -2.448t-2.448 -5.904v-38.592q0 -3.456 2.448 -5.904t5.904 -2.448h38.592q3.456 0 5.904 2.448t2.448 5.904z'};

// Data Model

var placesData = [
	{
		name: 'Cafes',
		description: 'description text',
		type: 'cafe', 
		icon: 'fa-star',
		marker: { path: fontawesome.markers.EXCLAMATION_CIRCLE,
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1 }
	},
	{
		name: 'Food',
		description: 'description text',
		type: 'food',
		icon: 'fa-plane',
		marker: { path: fontawesome.markers.BUS,
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1 }
	},
	{
		name: 'Bars',
		description: 'description text',
		type: 'bar',
		icon: 'fa-hospital-o',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1 }
	},
	{
		name: 'Takeaways',
		description: 'description text',
		type: 'meal_takeaway',
		icon: 'fa-beer',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1 }
	},
	{
		name: 'Food Delivery',
		description: 'description text',
		type: 'meal_delivery',
		icon: 'fa-bicycle',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1 }
	},
	{
		name: 'Grocery Stores',
		description: 'description text',
		type: 'grocery_or_supermarket',
		icon: 'fa-bus',
		marker: { path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
								fillColor: '#ffff00',
								fillOpacity: 1,
								scale: 1/4,
								strokeColor: '#bd8d2c',
								strokeWeight: 1 }
	}
]
/**
 * @file overview : 
 * @author : contact@mikejoyce.io (Mike Joyce)
 */

// Global namespace
var globals = {
	map: '',
	latLang: '',
	places: [],
	markers: [],
	debug: false
};

(function(global) {

	// View Model 
	var ViewModel = function() {

		// Save a pointer reference to 'this'
		var self = this;

		this.appName = "App Name";
		this.contentName = "Content Name";
		this.mapInfo = ko.observable(false);
		this.placeList = ko.observableArray([]); 
		this.searchQuery = ko.observable();
		this.searchRadius = ko.observable('5000');
		this.rangeSlider = $('#rangeSlider');

		placesData.forEach(function(placeItem) {
			self.placeList.push(new Place(placeItem));
		});

		this.currentPlace = ko.observable( this.placeList()[0] );

		this.selectPlace = function(place) {
			self.currentPlace(place);
			for(i=0;i<self.placeList().length;i++) {
				self.placeList()[i].isActive(false);
				self.mapInfo(false);
			}
			place.isActive(!place.isActive());
			self.mapInfo(true);
		}

		this.search = function(value) {
		 for (i=0;i<self.placeList().length;i++) {
		 	self.placeList()[i].isHidden(false);
		 	if (value.toLowerCase() === self.placeList()[i].name().toLowerCase()) {
		 		self.selectPlace(self.placeList()[i]);
		 	} else if (value.length === 0) {
		 		self.placeList()[i].isHidden(false);
		 	} else {
		 		self.placeList()[i].isHidden(true);
		 	}
		 }
		}
		this.searchQuery.subscribe(this.search);

		this.panTo = function() {
			global.map.panTo(global.latLang);
		}

		this.zoomIn = function() {
			var currentZoomLevel = global.map.getZoom();
			if(currentZoomLevel != 21){
			global.map.setZoom(currentZoomLevel + 1);}
		}

		this.zoomOut = function() {
			var currentZoomLevel = global.map.getZoom();
			if(currentZoomLevel != 0){
			global.map.setZoom(currentZoomLevel - 1);}
		}

		this.clearSearch = function() {
			for (i=0;i<self.placeList().length;i++) {
				self.placeList()[i].isHidden(false);
			}
		}

		$(rangeSlider).ionRangeSlider({
		    min: 1000,
		    max: 10000,
		    from: 5000,
		    step: 1000,
		    postfix: ' km',
		    hide_min_max: true,
		    prettify_enabled: true,
		    prettify: function(num) {
		    	return num / 1000;
		    }
		});
	  
	}

	// Place Constructor
	var Place = function(data) {
		this.name = ko.observable(data.name);
		this.description = ko.observable(data.description);
		this.type = ko.observable(data.type);	
		this.icon = ko.observable(data.icon);
		this.marker = ko.observable(data.marker);
		this.isActive = ko.observable(false);
		this.isHidden = ko.observable(false);
	}

	// KO Custom Binding
	ko.bindingHandlers.map = {

	  init: function(element, valueAccessor, allBindings) {

	    var mapOptions = {
	      zoom: 13,
	      zoomControl: false,
	      mapTypeControl: false,
	      streetViewControl: false,
	      panControl: false,
	      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
	    };

	    global.map = new google.maps.Map(element, mapOptions);

		  // Try HTML5 geolocation
		  if(navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(position) {
		
			      global.latLang = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			 
			      var infowindow = new google.maps.InfoWindow({
			        map: global.map,
			        position: global.latLang,
			        center: global.latLang,
			        content: 'Location found using HTML5.'
			      });

			      global.map.setCenter(global.latLang);

				    var marker = new google.maps.Marker({
				    	position: global.latLang,
				    	map: global.map,
				    	icon: { path: fontawesome.markers.MAP_MARKER,
										fillColor: '#ed5565',
										fillOpacity: 1,
										scale: 1/4,
										strokeColor: '#ed5565',
										strokeWeight: 1 },
				    	title: "You are here!"
				    });

				    marker.setAnimation(google.maps.Animation.BOUNCE);


			  }, function() {
		  		// Browser supports Geolocation but hasn't been enabled
		      handleNoGeolocation(true);
			}, 
				// Enable high accuracy 
				{maximumAge:600000, timeout:5000, enableHighAccuracy: true});
			  
			} else {
		    // Browser doesn't support Geolocation
		    handleNoGeolocation(false);
			}

				function handleNoGeolocation(errorFlag) {

				  if (errorFlag) {

				    var content = 'Error: The Geolocation service failed.';

				  } else {

				    var content = 'Error: Your browser doesn\'t support geolocation.';

				  }

				  var options = {
				    map: global.map,
				    position: new google.maps.LatLng(60, 105),
				    content: content
				  };

				  var infowindow = new google.maps.InfoWindow(options);
				  map.setCenter(options.position);
				}

		},

		update: function(element, valueAccessor, allBindings) {
		  	
		  	var value = valueAccessor();

		  	if (value.currentPlace().isActive()) {

			    var request = {
			    	location: global.latLang,
			    	radius: value.searchRadius(),
			    	types: []
			    };

			    request.types.push(value.currentPlace().type());

			    var infoWindow = new google.maps.InfoWindow();
			    var mapPlaces = new google.maps.places.PlacesService(global.map);
			    mapPlaces.nearbySearch(request, callback);

			    function callback(results, status) {
			    	if (status === google.maps.places.PlacesServiceStatus.OK) {
			    		clearMarkers();
			    		global.places.length = 0;
			    		for (var i=0; i < results.length; i++) {
			    			global.places.push(results[i]);
			    		}
			    		setPlaces();
			    	} else if (status === google.maps.places.PlacesServiceStatus.ERROR) {
			    		log(status+' There was a problem contacting the Google servers.');
			    		log(status);
			    	} else if (status === google.maps.places.PlacesServiceStatus.INVALID_REQUEST) {
			    		log(status+' This request was invalid.');
			    		log(status);
			    	} else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
			    		log(status+' The webpage has gone over its request quota.');
			    	} else if (status === google.maps.places.PlacesServiceStatus.REQUEST_DENIED) {
			    		log(status+' The webpage is not allowed to use the PlacesService.');
			    	} else if (status === google.maps.places.PlacesServiceStatus.UNKNOWN_ERROR) {
			    		log(status+' The PlacesService request could not be processed due to a server error. The request may succeed if you try again.');
			    	} else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
			    		log(status+' No result was found for this request.');
			    	}
			    }

			    function setPlaces() {

				    for (var i=0; i < global.places.length; i++) {

				    	global.markers[i] = new google.maps.Marker({
				    		map: global.map,
				    		position: global.places[i].geometry.location,
				    		icon: value.currentPlace().marker()
				    	});

				    	global.markers[i].setMap(global.map);

				    	var placeData = {
				    		marker: global.markers[i],
				    		id: global.places[i].id,
				    		placeId: global.places[i].place_id,
				    		name: global.places[i].name,
				    		vicinity: global.places[i].vicinity,
				    		rating: global.places[i].rating,
				    		position: global.places[i].geometry.location,
				    		photo: typeof global.places[i].photos !== 'undefined'
				    					 ? global.places[i].photos[0].getUrl({'maxWidth': 100, 'maxHeight': 100})
				    					 : 'nophoto.jpg'
				    	}

				    	addInfoWindow(placeData);
				    	addInfoModal(placeData);

				    }

				 }

				 function addInfoWindow(data) {

				   	google.maps.event.addListener(data.marker, 'mouseover', function() {

				    	infoWindow.setContent(
				    		'<div class="info-window">' +
				    		'<h5>'+data.name+'</h5>' +
				    		'<img src="'+data.photo+'">' +
				    		'</div>'
				    	);

				    	infoWindow.open(global.map, this);

				    });

				    google.maps.event.addListener(data.marker, 'mouseout', function() {
				    	infoWindow.close(global.map, this);
				    });

				 }

				 function addInfoModal(data) {

					if ($("#infoModal"+data.id).length === 0) {

						$('body').append('<div id="infoModal'+data.id+'" class="info-modal"></div>');	

					}

				   google.maps.event.addListener(data.marker, 'click', function() {

				   		global.map.panTo(data.position);
				    
					    if ($("#infoModal"+data.id).children().length === 0) {

					 			var request = { 
							  	placeId: data.placeId
								};

								var service = new google.maps.places.PlacesService(global.map);
								service.getDetails(request, callback);

								function callback(place, status) {

								  if (status == google.maps.places.PlacesServiceStatus.OK) {

								  	var placeInfo = {
											id: place.id,
											name: place.name,
											vicinity: place.vicinity,
											phone: typeof place.formatted_phone_number !== 'undefined' ? place.formatted_phone_number : 'no number',
											photo: typeof place.photos !== 'undefined' ? place.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300}) : 'nophoto.jpg',
											rating: typeof place.rating !== 'undefined' ? place.rating : 'no rating'
										};

								 		$('#infoModal'+data.id).append(
								 			'<span id="closeInfoModal'+placeInfo.id+'">close</span>' +
								 			'<h4>'+placeInfo.name+'</h4>' +
								 			'<div class="address">'+placeInfo.vicinity+'</div>' +
								 			'<div class="phone">'+placeInfo.phone+'</div>' +
								 			'<div class="rating">'+placeInfo.rating+'</div>' +
								 			'<div class="photo" style="background-image:url('+placeInfo.photo+')">' 
								 		);

								 		$(document).on('click', '#closeInfoModal'+placeInfo.id, function() {
								 			$("#infoModal"+placeInfo.id).hide();
								 		});

								  } else {

								  	log('Place details error'+status);

								  }
								}

								$("#infoModal"+data.id).show();

							} else {
								 
								$("#infoModal"+data.id).show();

								}

				  	});

				}

				function clearMarkers() {
					for (var i=0; i < global.markers.length; i++) {
						global.markers[i].setMap(null);
					}
					global.markers.length = 0;
				}

			}

		}

	}

	// Apply Knockout Bindings
	ko.applyBindings(new ViewModel());

	// I'm lazy :)
	function log(data) {
		 return console.log(data);	
	}

})(globals);
